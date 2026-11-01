# Builds the weekly quote bank. Every quote is matched against the Project Gutenberg text and stored exactly as printed there.
import re,sys,json,os
PD,OUT,SITE=sys.argv[1],sys.argv[2],sys.argv[3]
BOOKS={
 'wealth':('The Wealth of Nations','Adam Smith',1776,3300,None),
 'mackay':('Extraordinary Popular Delusions and the Madness of Crowds','Charles Mackay',1841,24518,None),
 'lefevre':('Reminiscences of a Stock Operator','Edwin Lefèvre',1923,60979,None),
 'nietzsche':('Beyond Good and Evil','Friedrich Nietzsche',1886,4363,'Helen Zimmern translation'),
 'sun':('The Sun Also Rises','Ernest Hemingway',1926,67138,None),
}
Q={
'wealth':["It is not from the benevolence of the butcher, the brewer, or the baker that we expect our dinner, but from their regard to their own interest.",
"People of the same trade seldom meet together, even for merriment and diversion, but the conversation ends in a conspiracy against the public, or in some contrivance to raise prices.",
"The real price of every thing, what every thing really costs to the man who wants to acquire it, is the toil and trouble of acquiring it.",
"Consumption is the sole end and purpose of all production",
"By pursuing his own interest, he frequently promotes that of the society more effectually than when he really intends to promote it.",
"No society can surely be flourishing and happy, of which the far greater part of the members are poor and miserable.",
"The greatest improvements in the productive powers of labour, and the greater part of the skill, dexterity, and judgment, with which it is anywhere directed, or applied, seem to have been the effects of the division of labour.",
"Every individual is continually exerting himself to find out the most advantageous employment for whatever capital he can command."],
'mackay':["Men, it has been well said, think in herds; it will be seen that they go mad in herds, while they only recover their senses slowly, and one by one.",
"In reading the history of nations, we find that, like individuals, they have their whims and their peculiarities; their seasons of excitement and recklessness, when they care not what they do.",
"We find that whole communities suddenly fix their minds upon one object, and go mad in its pursuit; that millions of people become simultaneously impressed with one delusion, and run after it, till their attention is caught by some new folly more captivating than the first."],
'lefevre':["There is nothing new in Wall Street. There can't be because speculation is as old as the hills. Whatever happens in the stock market to-day has happened before and will happen again.",
"It never was my thinking that made the big money for me. It was always my sitting.",
"The market does not beat them. They beat themselves, because though they have brains they cannot sit tight.",
"A man must believe in himself and his judgment if he expects to make a living at this game.",
"The speculator's deadly enemies are: Ignorance, greed, fear and hope.",
"A loss never bothers me after I take it.",
"There is only one side to the stock market; and it is not the bull side or the bear side, but the right side."],
'nietzsche':["He who fights with monsters should be careful lest he thereby become a monster. And if thou gaze long into an abyss, the abyss will also gaze into thee.",
"Insanity in individuals is something rare--but in groups, parties, nations, and epochs it is the rule.",
"What is done out of love always takes place beyond good and evil."],
'sun':["You can't get away from yourself by moving from one place to another.",
"\"How did you go bankrupt?\" Bill asked. \"Two ways,\" Mike said. \"Gradually and then suddenly.\"",
"Nobody ever lives their life all the way up except bull-fighters.",
"Isn't it pretty to think so?"],
}
html=open(SITE,encoding='utf-8').read()
lib=json.loads(re.search(r'window\.LIBRARY=(\{.*?\});</script>',html,re.S).group(1))
cat={b['title']:b for s in lib['data']['shelves'] for b in s['books']}
def clean(s): return s.replace('“','"').replace('”','"').replace('’',"'").replace('‘',"'").replace('—','--').replace('_','')
rows={k:[] for k in Q}
for k,qs in Q.items():
    src=re.sub(r'\s+',' ',clean(open(f'{PD}/{k}.txt',encoding='utf-8',errors='replace').read()))
    low=src.lower()
    t,a,y,gid,note=BOOKS[k]; b=cat[t]
    for q in qs:
        i=low.find(re.sub(r'\s+',' ',clean(q)).lower()); assert i>=0,q
        exact=src[i:i+len(clean(q))]
        exact=exact[0].upper()+exact[1:]      # a passage lifted from mid-sentence still opens with a capital
        rows[k].append(dict(text=exact,title=t,author=a,year=y,translation=note,read_free=f'https://www.gutenberg.org/ebooks/{gid}',
          amazon='https://www.amazon.com/s?i=stripbooks&k='+(t+' '+a).replace(' ','%20'),audible=f"https://www.audible.com/pd/{b['asin']}" if b.get('asin') else None))
order=[];keys=list(rows)
while any(rows[k] for k in keys):
    for k in keys:
        if rows[k]: order.append(rows[k].pop(0))
writes=[]
for n,r in enumerate(order,1):
    r['n']=n; p=f'{OUT}/q{n:02d}.json'; json.dump(r,open(p,'w',encoding='utf-8'),ensure_ascii=False)
    writes.append(dict(op='set',collection='quotes',doc_id=f'q{n:02d}',file_path=p))
json.dump(dict(next=1,last_sent=None),open(f'{OUT}/state.json','w'))
writes.append(dict(op='set',collection='digest',doc_id='state',file_path=f'{OUT}/state.json'))
json.dump(writes,open(f'{OUT}/writes.json','w'),ensure_ascii=False)
print(len(order),'quotes verified');
for r in order: print(r['n'],r['title'][:22],'|',r['text'][:70], '| audible' if r['audible'] else '| no audible')
