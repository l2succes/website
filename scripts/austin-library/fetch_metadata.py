# Looks up every book in public catalogues (no API keys) and downloads its cover. Safe to re-run: finished lookups are cached.
#   Apple Books search: current cover art, release date, genres, ebook ISBN
#   Open Library: first publication year, page count, publisher, print ISBN
#   Google Books viewapi: whether a preview of that ISBN can be embedded
import io,json,os,re,sys,time,unicodedata,urllib.parse,urllib.request
from PIL import Image
HERE=os.path.dirname(os.path.abspath(__file__)); CACHE=HERE+'/metadata_cache.json'; COVERS=os.path.join(HERE,'../../public/austin-library/covers')
os.makedirs(COVERS,exist_ok=True)
data=json.load(open(HERE+'/assets/data.json',encoding='utf-8'))
cache=json.load(open(CACHE,encoding='utf-8')) if os.path.exists(CACHE) else {}
UA={'User-Agent':'AustinLibrary/1.0 (lucsucces.com)'}
def get(url,raw=False,tries=4):
    for i in range(tries):
        try:
            with urllib.request.urlopen(urllib.request.Request(url,headers=UA),timeout=30) as r:
                b=r.read(); return b if raw else json.loads(b)
        except urllib.error.HTTPError as e:
            if e.code in(403,429,503): time.sleep(45+i*30); continue
            if e.code==404: return None
            time.sleep(3)
        except Exception: time.sleep(4)
    return None
def norm(s):
    s=unicodedata.normalize('NFKD',s or '').encode('ascii','ignore').decode().lower().replace('&','and')
    s=re.sub(r"['’]",'',s); return re.sub(r'[^a-z0-9]+',' ',s).strip()
strip=lambda s:re.sub(r'^(the|a|an) ','',s)
def surnames(a):
    a=re.sub(r'\(.*?\)','',a or '')
    return [p.split()[-1].lower() for p in re.split(r'\s*(?:&|,| with )\s*',a) if p.strip()] and [norm(p).split()[-1] for p in re.split(r'\s*(?:&|,| with )\s*',a) if norm(p)]
def matches(found,title):
    f,t=strip(norm(found)),strip(norm(title))
    return f==t or f.startswith(t+' ') or t.startswith(f+' ') and len(f)>8
BAD=re.compile(r'\b(summary|analysis|study guide|notes on|workbook|review of|companion|sparknotes|cliffsnotes|key takeaways|sachbuch)\b',re.I)
def isbn10(i13):
    if not i13 or not i13.startswith('978') or len(i13)!=13: return None
    b=i13[3:12]; c=sum((10-k)*int(x) for k,x in enumerate(b))%11; c=(11-c)%11
    return b+('X' if c==10 else str(c))
def apple(title,auth,names):
    term=f"{title} {auth.split(' & ')[0]}"[:90]
    for entity,field in (('ebook','trackName'),('audiobook','collectionName')):
        r=get('https://itunes.apple.com/search?'+urllib.parse.urlencode(dict(term=term,entity=entity,limit=15,country='us')))
        time.sleep(3.2)
        for x in (r or {}).get('results',[]):
            name=x.get(field) or x.get('trackName') or ''
            who=norm(x.get('artistName',''))
            if BAD.search(name) or not matches(name,title) or not any(s in who.split() for s in names): continue
            art=x.get('artworkUrl100','')
            m=re.search(r'(97[89]\d{10})',art)
            return dict(apple_title=name,cover=art.replace('100x100bb','900x900bb'),released=(x.get('releaseDate') or '')[:10],genres=[g for g in x.get('genres',[]) if g!='Books'][:3],ebook_isbn=m.group(1) if m else None,apple_url=x.get('trackViewUrl') or x.get('collectionViewUrl'))
    return {}
def openlib(title,auth,names):
    r=get('https://openlibrary.org/search.json?'+urllib.parse.urlencode(dict(q=f'title:"{title}"',limit=8,fields='key,title,author_name,first_publish_year,cover_i,number_of_pages_median,ia,ebook_access')))
    doc=None
    for d in (r or {}).get('docs',[]):
        who=norm(' '.join(d.get('author_name',[])))
        if matches(d.get('title',''),title) and any(s in who.split() for s in names): doc=d; break
    if not doc: return {}
    out=dict(ol_key=doc['key'],first_year=doc.get('first_publish_year'),pages=doc.get('number_of_pages_median'),ol_cover=doc.get('cover_i'),ebook_access=doc.get('ebook_access'))
    time.sleep(.4)
    ed=get(f"https://openlibrary.org{doc['key']}/editions.json?limit=60") or {}
    best=None;all_isbn=[]
    for e in ed.get('entries',[]):
        lang=[l.get('key','') for l in e.get('languages',[])]
        if lang and '/languages/eng' not in lang: continue
        i13=[re.sub(r'\D','',i) for i in e.get('isbn_13',[])]; i10=[re.sub(r'[^0-9Xx]','',i).upper() for i in e.get('isbn_10',[])]
        all_isbn+=i13+i10
        if not(i13 or i10): continue
        y=re.search(r'(19|20)\d\d',e.get('publish_date') or ''); score=(bool(e.get('publishers')),bool(e.get('number_of_pages')),int(y.group()) if y else 0)
        if not best or score>best[0]: best=(score,e,i13,i10)
    if best:
        _,e,i13,i10=best
        out.update(publisher=(e.get('publishers') or [None])[0],print_isbn13=i13[0] if i13 else None,print_isbn10=i10[0] if i10 else (isbn10(i13[0]) if i13 else None),edition_date=e.get('publish_date'))
        out['pages']=out.get('pages') or e.get('number_of_pages')
    out['isbns']=list(dict.fromkeys(all_isbn))[:30]
    return out
books=[b for s in data['shelves'] for b in s['books'] if b['title'] and b['conf']!='unread']
seen={}
for n,b in enumerate(books,1):
    names=surnames(b['author']); key=norm(b['title'])+'|'+(names[0] if names else '')
    b['_key']=key
    if key in cache and cache[key].get('done'): continue
    if key in seen: continue
    seen[key]=1
    rec=dict(title=b['title'],author=b['author'])
    rec.update(apple(b['title'],b['author'],names))
    rec.update(openlib(b['title'],b['author'],names))
    rec['done']=True; cache[key]=rec
    json.dump(cache,open(CACHE,'w',encoding='utf-8'),ensure_ascii=False,indent=0)
    print(n,b['title'][:40],'| apple' if rec.get('cover') else '| -','| ol' if rec.get('ol_key') else '| -',flush=True)
# Google preview availability, batched
for key,rec in cache.items():
    if 'preview' in rec: continue
    keys=[i for i in [rec.get('ebook_isbn'),rec.get('print_isbn13'),rec.get('print_isbn10')]+rec.get('isbns',[]) if i][:14]
    rec['preview']=None
    if keys:
        raw=get('https://books.google.com/books?'+urllib.parse.urlencode(dict(bibkeys=','.join('ISBN:'+k for k in keys),jscmd='viewapi',callback='cb')),raw=True)
        m=re.match(rb'cb\((.*)\);?\s*$',raw or b'',re.S)
        if m:
            found=json.loads(m.group(1))
            rank={'full':0,'partial':1}
            opts=[v for k in keys for v in [found.get('ISBN:'+k)] if v and v.get('embeddable') and v.get('preview') in rank]
            opts.sort(key=lambda v:rank[v['preview']])
            if opts:
                v=opts[0]; rec['preview']=v['preview']; rec['gb_id']=re.search(r'id=([\w-]+)',v['info_url']).group(1)
        time.sleep(.6)
    json.dump(cache,open(CACHE,'w',encoding='utf-8'),ensure_ascii=False,indent=0)
# covers
for key,rec in cache.items():
    slug=re.sub(r'[^a-z0-9]+','-',key)[:60].strip('-'); rec['slug']=slug; path=f'{COVERS}/{slug}.jpg'
    if os.path.exists(path): rec['has_cover']=True; continue
    urls=[rec.get('cover')]+([f"https://covers.openlibrary.org/b/id/{rec['ol_cover']}-L.jpg"] if rec.get('ol_cover') else [])
    rec['has_cover']=False
    for u in [u for u in urls if u]:
        raw=get(u,raw=True,tries=2)
        try: im=Image.open(io.BytesIO(raw)).convert('RGB')
        except Exception: continue
        if im.height<150: continue
        im.thumbnail((400,600),Image.LANCZOS); im.save(path,quality=80); rec['has_cover']=True; break
json.dump(cache,open(CACHE,'w',encoding='utf-8'),ensure_ascii=False,indent=0)
c=list(cache.values()); print('titles',len(c),'covers',sum(r.get('has_cover',False) for r in c),'previews',sum(bool(r.get('preview')) for r in c),'print isbn',sum(bool(r.get('print_isbn10')) for r in c),'pages',sum(bool(r.get('pages')) for r in c))
