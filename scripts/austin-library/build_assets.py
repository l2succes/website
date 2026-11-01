# Cuts every spine out of the flattened shelf photos into one atlas, crops the decor, writes data.json.
import sys,json,os,math
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from catalog import SHELVES
from shelves import QUADS,STRIP_H
from PIL import Image,ImageDraw,ImageFilter,ImageEnhance
IMG,OUT=sys.argv[1],sys.argv[2]
os.makedirs(OUT,exist_ok=True)
MARGIN=40   # strip pixels extrapolated left of each quad, so book edges at x<0 stay in frame
SCALE=1.25  # spines are stored slightly larger than source, sharpened once

def strip(key):
    f,q=QUADS[key]
    (tl,bl,br,tr)=q
    W=int(((br[0]-bl[0])+(tr[0]-tl[0]))/2)
    ext=lambda a,b:(a[0]-(b[0]-a[0])*MARGIN/W,a[1]-(b[1]-a[1])*MARGIN/W)
    flat=[*ext(tl,tr),*ext(bl,br),*br,*tr]
    return Image.open(f'{IMG}/{f}').convert('RGB').transform((W+MARGIN,STRIP_H),Image.QUAD,flat,Image.BICUBIC)

ATLAS,ATLAS_H=4096,2400
atlas=Image.new('RGB',(ATLAS,ATLAS_H),(120,115,108)); cx=cy=4; rowh=0; PAD=4
data=[]; num=0
for sh in SHELVES:
    src=strip(sh['id']); bot=sh['bot']; outb=[]
    for i,b in enumerate(sh['books']):
        b0,b1,top,xt=b['b0']+MARGIN,b['b1']+MARGIN,b['top'],b['xt']+MARGIN
        hw=b1-b0; lean=xt-b0; dy=bot-top
        if b['tilt']:
            # cut along the book's own axis so the crop is a true rectangle of spine
            th=math.atan2(-lean,dy); c,s=math.cos(th),math.sin(th)
            wp=hw*c; length=dy/c
            mx=(b0+b1)/2; my=bot-(wp/2)*abs(s)
            ux,uy=-s,-c   # along the spine, base to top
            vx,vy=c,-s    # across the spine, left to right
            BL=(mx-vx*wp/2,my-vy*wp/2); BR=(mx+vx*wp/2,my+vy*wp/2)
            TL=(BL[0]+ux*length,BL[1]+uy*length); TR=(BR[0]+ux*length,BR[1]+uy*length)
            quad=(*TL,*BL,*BR,*TR); pw,ph=wp,length; tilt=th
        else:
            quad=(xt,top,b0,bot,b1,bot,xt+hw,top); pw,ph=hw,dy; tilt=0
        w,h=max(8,int(pw*SCALE)),int(ph*SCALE)
        im=src.transform((w,h),Image.QUAD,quad,Image.BICUBIC).filter(ImageFilter.UnsharpMask(1.6,60,2))
        if cx+w+PAD*2>ATLAS: cx=4;cy+=rowh+PAD*2+2;rowh=0
        pad=im.resize((w+PAD*2,h+PAD*2),Image.NEAREST); pad.paste(im,(PAD,PAD)); atlas.paste(pad,(cx,cy))
        avg=im.resize((1,1),Image.BOX).getpixel((0,0))
        edge=im.crop((0,h//4,max(1,w//5),h*3//4)).resize((1,1),Image.BOX).getpixel((0,0))
        outb.append(dict(id=f"{sh['id']}{i+1:02d}",shelf=sh['id'],case=sh['case'],shelfName=sh['name'],pos=i+1,count=len(sh['books']),
          x0=b['b0'],x1=b['b1'],w=round(pw,1),h=round(ph,1),tilt=round(tilt,4),
          title=b['title'],author=b['author'],year=b['year'],cat=b['cat'],about=b['about'],conf=b['conf'],
          uv=[(cx+PAD)/ATLAS,(cy+PAD)/ATLAS_H,w/ATLAS,h/ATLAS_H],color=list(avg),edge=list(edge)))
        cx+=w+PAD*2+2; rowh=max(rowh,h); num+=1
    data.append(dict(id=sh['id'],case=sh['case'],name=sh['name'],span=list(sh['span']),books=outb))
print('atlas used to y',cy+rowh,'of',ATLAS_H,'| books',num)
assert cy+rowh<ATLAS_H
atlas.save(OUT+'/atlas.jpg',quality=87,subsampling=0)

close=Image.open(IMG+'/2.jpg').convert('RGB')
wide=Image.open(IMG+'/1.jpg').convert('RGB')
def crop(im,box,name,scale=2,q=88,bright=1):
    r=im.crop(box); r=r.resize((r.width*scale,r.height*scale),Image.LANCZOS).filter(ImageFilter.UnsharpMask(2,60,2))
    if bright!=1: r=ImageEnhance.Brightness(r).enhance(bright)
    r.save(f'{OUT}/{name}.jpg',quality=q)
crop(close,(308,796,460,914),'painting')
crop(wide,(1506,880,1650,990),'nyc',3,bright=1.9)
crop(close,(325,186,410,305),'meltclock',4)
crop(close,(340,942,424,1002),'mantel',4)
crop(close,(176,900,229,990),'cup',3)
crop(close,(518,905,571,985),'mug',3)
clockPts=[(210,50),(250,25),(350,12),(440,35),(497,85),(492,200),(467,300),(422,380),(397,445),(330,455),(270,422),(233,360),(218,230),(208,140)]
clock=[(280+x/4,188+y/4) for x,y in clockPts]
json.dump(dict(shelves=data,clock=clock,clockBox=[325,186,410,305]),open(OUT+'/data.json','w'),ensure_ascii=False)
for f in sorted(os.listdir(OUT)): print(f,os.path.getsize(OUT+'/'+f)//1024,'KB')
from collections import Counter
print(Counter(b['conf'] for s in data for b in s['books']))

# contact sheet for checking cuts against the photos
shown=[]
for s in data:
    row=Image.new('RGB',(1900,300),(40,36,30)); x=4
    for b in s['books']:
        u=b['uv']; c=atlas.crop((int(u[0]*ATLAS),int(u[1]*ATLAS_H),int((u[0]+u[2])*ATLAS),int((u[1]+u[3])*ATLAS_H)))
        c=c.resize((max(4,int(c.width*.5)),int(c.height*.5))); row.paste(c,(x,296-c.height)); x+=c.width+2
    shown.append(row)
sheet=Image.new('RGB',(1900,300*6))
for i,r in enumerate(shown): sheet.paste(r,(0,300*i))
sheet.save(OUT+'/../contact.png')
