# Assembles the single-file page from the template, the scene code and the extracted photo assets.
import sys,os,json,base64
HERE=os.path.dirname(os.path.abspath(__file__)); A=sys.argv[1]; OUT=sys.argv[2]
b64=lambda n:'data:image/jpeg;base64,'+base64.b64encode(open(f'{A}/{n}.jpg','rb').read()).decode()
data=json.load(open(A+'/data.json'))
# real Audible product ids from audible_lookup.py, plus titles matched by hand where the catalogue names them differently
aud=json.load(open(HERE+'/audible.json')); over=json.load(open(HERE+'/audible_overrides.json'))
for sh in data['shelves']:
    for b in sh['books']:
        hit=aud.get(b['id'])
        b['asin']=over.get(b['title']) or (hit['asin'] if hit else None)
# catalogue details and real covers from fetch_metadata.py; the site serves covers as files, the single-file copy embeds small ones
meta=json.load(open(HERE+'/metadata_cache.json',encoding='utf-8')) if os.path.exists(HERE+'/metadata_cache.json') else {}
opens=json.load(open(HERE+'/openings.json',encoding='utf-8'))
COVERS=os.path.join(HERE,'../../public/austin-library/covers'); SITE=OUT.endswith('index.html')
from PIL import Image
import io,re as _re,unicodedata
def _norm(s):
    s=unicodedata.normalize('NFKD',s or '').encode('ascii','ignore').decode().lower().replace('&','and')
    return _re.sub(r'[^a-z0-9]+',' ',_re.sub(r"['’]",'',s)).strip()
by_title={}
for k,r in meta.items(): by_title[(r.get('title'),r.get('author'))]=r
def cover_ref(slug):
    path=f'{COVERS}/{slug}.jpg'
    if not os.path.exists(path): return None
    if SITE: return f'/austin-library/covers/{slug}.jpg'
    im=Image.open(path).convert('RGB'); im.thumbnail((180,270),Image.LANCZOS); bio=io.BytesIO(); im.save(bio,'JPEG',quality=72)
    return 'data:image/jpeg;base64,'+base64.b64encode(bio.getvalue()).decode()
done={}
for sh in data['shelves']:
    for b in sh['books']:
        r=by_title.get((b['title'],b['author']),{})
        slug=r.get('slug')
        if slug and slug not in done: done[slug]=cover_ref(slug)
        o=opens.get(b['title'])
        b['meta']={k:v for k,v in dict(pub=r.get('publisher'),pages=r.get('pages'),isbn=r.get('print_isbn13') or r.get('print_isbn10'),a10=r.get('print_isbn10'),genres=r.get('genres'),gb=r.get('gb_id'),pv=r.get('preview'),cv=done.get(slug),apple=r.get('apple_url'),gri=r.get('print_isbn10') or r.get('print_isbn13') or r.get('ebook_isbn'),opening=o and o['text'],openLabel=o and o['label'],free=o and o['free']).items() if v}
lib=dict(site=SITE,data=data,atlas=b64('atlas'),decor={n:b64(n) for n in ['painting','nyc','meltclock','mantel','cup','mug']})
t=open(HERE+'/index.tpl.html',encoding='utf-8').read()
t=t.replace('__APP__',open(HERE+'/app.js',encoding='utf-8').read()).replace('__LIBRARY__',json.dumps(lib,ensure_ascii=False))
if OUT.endswith('index.html'):
    # standalone page for lucsucces.com: the artifact viewer normally supplies this skeleton
    i=t.index('</style>')+len('</style>')
    head,body=t[:i].replace('<meta charset="utf-8">\n',''),t[i:]
    url='https://lucsucces.com/austin-library'
    desc='A gift for my friend Austin Diamond: his whole library, rebuilt in 3D. Every spine is from a photo of his shelves.'
    meta=f'''<meta charset="utf-8">
<meta name="robots" content="noindex">
<meta name="description" content="{desc}">
<meta property="og:title" content="Austin Diamond’s Library">
<meta property="og:description" content="{desc}">
<meta property="og:type" content="website">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{url}/preview.jpg">
<meta name="twitter:card" content="summary_large_image">
<style>body{{margin:0;font-size:14px}}</style>
'''
    t='<!doctype html>\n<html lang="en">\n<head>\n'+meta+head+'\n</head>\n<body>\n'+body+'\n</body>\n</html>\n'
open(OUT,'w',encoding='utf-8').write(t); print(OUT,os.path.getsize(OUT)//1024,'KB')
