# Checks each title against Audible's public catalogue and records a product page only for a real match.
import json,re,sys,time,unicodedata,urllib.parse,urllib.request
data=json.load(open(sys.argv[1])); OUT=sys.argv[2]
def norm(s):
    s=unicodedata.normalize('NFKD',s or '').encode('ascii','ignore').decode().lower().replace('&','and')
    s=re.sub(r"[’']",'',s); return re.sub(r'[^a-z0-9]+',' ',s).strip()
def strip_article(s): return re.sub(r'^(the|a|an) ','',s)
def query(**kw):
    q=dict(num_results=25,products_sort_by='Relevance',response_groups='contributors,product_attrs,product_desc',**kw)
    url='https://api.audible.com/1.0/catalog/products?'+urllib.parse.urlencode(q)
    for attempt in range(4):
        try:
            with urllib.request.urlopen(urllib.request.Request(url,headers={'User-Agent':'Mozilla/5.0'}),timeout=20) as r:
                return json.load(r).get('products',[])
        except Exception as e:
            time.sleep(2+attempt*3)
    raise RuntimeError('lookup failed: '+url)
def first_author(a):
    a=re.sub(r'\(.*?\)','',a or ''); a=re.split(r'\s*(?:&|,| with )\s*',a)[0]
    return a.strip()
def pick(products,title,surname):
    t=strip_article(norm(title)); best=None
    for p in products:
        pt=strip_article(norm(p.get('title')))
        people=norm(' '.join(x.get('name','') for x in p.get('authors',[])))
        if surname not in people.split(): continue
        if p.get('language')!='english': continue
        if p.get('content_delivery_type') in ('Podcast','PodcastParent','PodcastEpisode'): continue
        mins=p.get('runtime_length_min') or 0
        if mins and mins<60: continue
        exact=pt==t; prefix=pt.startswith(t+' ')
        if not(exact or prefix): continue
        score=(exact,mins)
        if best is None or score>best[0]: best=(score,p)
    return best[1] if best else None
seen={};res={}
for s in data['shelves']:
    for b in s['books']:
        if not b['title'] or b['conf']=='unread': continue
        a=first_author(b['author']); surname=norm(a).split()[-1] if a else ''
        key=(b['title'],surname)
        if key not in seen:
            p=pick(query(title=b['title'],author=a),b['title'],surname)
            if not p:
                time.sleep(.15); p=pick(query(keywords=f"{b['title']} {a}"),b['title'],surname)
            seen[key]=p; time.sleep(.15)
        p=seen[key]
        res[b['id']]=dict(asin=p['asin'],title=p.get('title'),subtitle=p.get('subtitle'),authors=[x.get('name') for x in p.get('authors',[])],mins=p.get('runtime_length_min')) if p else None
json.dump(res,open(OUT,'w'),ensure_ascii=False,indent=0)
hit=sum(1 for v in res.values() if v); print('looked up',len(res),'found',hit,'missing',len(res)-hit)
