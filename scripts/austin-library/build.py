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
lib=dict(data=data,atlas=b64('atlas'),decor={n:b64(n) for n in ['painting','nyc','meltclock','mantel','cup','mug']})
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
