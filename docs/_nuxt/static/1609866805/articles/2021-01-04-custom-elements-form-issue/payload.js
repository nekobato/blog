__NUXT_JSONP__("/articles/2021-01-04-custom-elements-form-issue", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ){return {data:[{article:{slug:"2021-01-04-custom-elements-form-issue",description:"問題\nCustom Elements(Web Components)の中でinputを使うと色々問題がある",title:"Web ComponentsでInputを扱う方法",createdAt:"2021-01-04T00:00:00.000Z",toc:[{id:y,depth:ab,text:y},{id:ac,depth:z,text:"1. buttonを押しても submit が動かない"},{id:ad,depth:z,text:"\b\b2. 外部のinputと連携してくれない"},{id:ae,depth:z,text:"3. formの submit では Shadow DOM 内の input value を拾ってくれない"},{id:Q,depth:ab,text:Q},{id:af,depth:z,text:ag},{id:ah,depth:z,text:ai},{id:aj,depth:z,text:ak}],body:{type:al,children:[{type:b,tag:W,props:{id:y},children:[{type:b,tag:m,props:{href:am,ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:y}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:an},{type:b,tag:j,props:{},children:[{type:a,value:u}]},{type:a,value:ao}]},{type:a,value:g},{type:a,value:g},{type:b,tag:A,props:{id:ac},children:[{type:b,tag:m,props:{href:"#1-button%E3%82%92%E6%8A%BC%E3%81%97%E3%81%A6%E3%82%82-submit-%E3%81%8C%E5%8B%95%E3%81%8B%E3%81%AA%E3%81%84",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:"1. "},{type:b,tag:j,props:{},children:[{type:a,value:K}]},{type:a,value:"を押しても submit が動かない"}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"例えばこのような form があった時、この"},{type:b,tag:j,props:{},children:[{type:a,value:K}]},{type:a,value:"を押しても form の submit は発火しない。"}]},{type:a,value:g},{type:b,tag:v,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"\n  ...\n  "},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:K}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:"type"}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:b,tag:c,props:{className:[d,e,H]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"submit"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"Submit"},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:K}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"\bsubmit の動作は別 DOM Tree、この場合 Shadow DOM から見て Light DOM の Tree にある form に到達しない。"}]},{type:a,value:g},{type:b,tag:A,props:{id:ad},children:[{type:b,tag:m,props:{href:"#%08%082-%E5%A4%96%E9%83%A8%E3%81%AEinput%E3%81%A8%E9%80%A3%E6%90%BA%E3%81%97%E3%81%A6%E3%81%8F%E3%82%8C%E3%81%AA%E3%81%84",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:"\b\b2. 外部の"},{type:b,tag:j,props:{},children:[{type:a,value:u}]},{type:a,value:"と連携してくれない"}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"これが特に問題になるのは主に"},{type:b,tag:j,props:{},children:[{type:a,value:x}]},{type:a,value:"を使用したい時で、他の input と"},{type:b,tag:j,props:{},children:[{type:a,value:x}]},{type:a,value:"の挙動を連携してくれなくなってしまう。"}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:b,tag:m,props:{href:aq,rel:[L,M,N],target:O},children:[{type:a,value:aq}]}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:x}]},{type:a,value:"は例えばこのような input を作った場合、１つ目に名前を入力する（しようとする）と２つ目にも入力候補が出現する。"}]},{type:a,value:g},{type:b,tag:v,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:u}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:b,tag:c,props:{className:[d,e,H]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:u}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:b,tag:c,props:{className:[d,e,H]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"住所とかも然り。"}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"Custom Elements で input の wrapper component を作ると、それぞれ別の DOM Tree であるからか、\b\b 入力候補は連携してくれない。"}]},{type:a,value:g},{type:b,tag:v,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:u}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:b,tag:c,props:{className:[d,e,H]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:ar},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:u}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:b,tag:c,props:{className:[d,e,H]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:R}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:w}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:A,props:{id:ae},children:[{type:b,tag:m,props:{href:"#3-form%E3%81%AE-submit-%E3%81%A7%E3%81%AF-shadow-dom-%E5%86%85%E3%81%AE-input-value-%E3%82%92%E6%8B%BE%E3%81%A3%E3%81%A6%E3%81%8F%E3%82%8C%E3%81%AA%E3%81%84",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:"3. "},{type:b,tag:j,props:{},children:[{type:a,value:w}]},{type:a,value:"の submit では Shadow DOM 内の input value を拾ってくれない"}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"上述のものと同じく、別 Tree の input value は検出してくれない。"}]},{type:a,value:g},{type:b,tag:W,props:{id:Q},children:[{type:b,tag:m,props:{href:"#%E8%A7%A3%E6%B1%BA%E7%AD%96",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:Q}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"以上の問題点。全てはそれぞれ連携ができるはずの Element が Light DOM と Shadow DOM に分かれたことで、これを解決すればなんとかなりそう。"}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"解決法は主に 3 つある。もっとあったらおしえてください。"}]},{type:a,value:g},{type:b,tag:A,props:{id:af},children:[{type:b,tag:m,props:{href:"#1-shadown-dom-%E3%81%A7%E3%81%AF%E3%81%AA%E3%81%8F-light-dom-%E3%81%AB%E8%A1%A8%E7%A4%BA%E3%81%99%E3%82%8B",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:ag}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"Custom Element の中身を Light DOM に表示するようにすることで、単純に他の Element から影響を受けられるようにする。\nもちろん Shadow DOM ではないので隠蔽はされず、他からの改変が容易になる。"}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"例えば Lit Element だと"},{type:b,tag:j,props:{},children:[{type:a,value:at}]},{type:a,value:"内で"},{type:b,tag:j,props:{},children:[{type:a,value:au}]},{type:a,value:"を返すことで Light DOM への表示に切り替わります。"}]},{type:a,value:g},{type:b,tag:v,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,av]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:aw}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ax]},children:[{type:a,value:"LightDom"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:"extends"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,ax]},children:[{type:a,value:"LitElement"}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,ay]},children:[{type:a,value:"render"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aA}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,J,Z]},children:[{type:a,value:_}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,aC]},children:[{type:b,tag:c,props:{className:[d,T,U]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,aD,E]},children:[{type:a,value:k},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:"This template renders without shadow DOM."},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:k}]},{type:b,tag:c,props:{className:[d,T,U]},children:[{type:a,value:V}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,ay]},children:[{type:a,value:at}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:az}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aA}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,"doc-comment","comment"]},children:[{type:a,value:"\u002F**\n     * Render template without shadow DOM. Note that shadow DOM features like\n     * encapsulated CSS and slots are unavailable.\n     *\u002F"}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,J,Z]},children:[{type:a,value:_}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,J]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aa}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:b,tag:m,props:{href:aE,rel:[L,M,N],target:O},children:[{type:a,value:aE}]}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"注意点としては、Light DOM での表示を指定すると"},{type:b,tag:j,props:{},children:[{type:a,value:"\u003Cslot\u003E"}]},{type:a,value:"が使えなくなる。それ以上の柔軟なコンテンツ変更は attribute を使うしかないということになる。"}]},{type:a,value:g},{type:b,tag:A,props:{id:ah},children:[{type:b,tag:m,props:{href:"#2-input-%E3%81%AF%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AB%E5%90%AB%E3%82%81%E3%81%9A%E3%80%81%E3%82%B3%E3%83%B3%E3%83%9D%E3%83%BC%E3%83%8D%E3%83%B3%E3%83%88%E3%81%AF-input-%E3%81%AE-wrapper-%E3%81%A8%E3%81%99%E3%82%8B",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:ai}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"このように"}]},{type:a,value:g},{type:b,tag:v,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,av]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,J,Z]},children:[{type:a,value:_}]},{type:a,value:aB},{type:b,tag:c,props:{className:[d,aC]},children:[{type:b,tag:c,props:{className:[d,T,U]},children:[{type:a,value:V}]},{type:b,tag:c,props:{className:[d,aD,E]},children:[{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:v}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,G]},children:[{type:b,tag:c,props:{className:[d,e,H]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"input-decorator"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g}]},{type:b,tag:c,props:{className:[d,T,U]},children:[{type:a,value:V}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:v,props:{className:[B]},children:[{type:b,tag:C,props:{className:[D,E]},children:[{type:b,tag:j,props:{},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:n},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:u}]},{type:a,value:k},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:P}]}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,f]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:p}]},{type:a,value:aG}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]}]},{type:a,value:g}]}]}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"スタイルなどは Custom Element が受け持つが、実際の input Element は Light DOM に置く。\nこの方法だと input タグのスタイリングなどは可能だが、input の値をバキバキに改変する機能などを実装するのは大変面倒になる。というかそういった機能はこの場合あまり現実的ではないと思う。\nその上、input は外部から簡単にアクセス可能な場所に置くことになるため、Custom Element としてコンポーネントに縛りを持たせるのは難しい。"}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"「input には何も css も attributes も付けないでね！」などの注意書きが必要になる。"}]},{type:a,value:g},{type:b,tag:A,props:{id:aj},children:[{type:b,tag:m,props:{href:"#3-autocomplete-%E9%80%A3%E6%90%BA%E3%82%92%E8%AB%A6%E3%82%81%E3%81%A6%E3%80%81%E6%8C%99%E5%8B%95%E3%82%92%E8%87%AA%E5%89%8D%E3%81%A7%E4%BD%9C%E3%82%8B",ariaHidden:q,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:ak}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"もしくは、どうせフレームワーク使うでしょという方針でネイティブ挙動は何もサポートしない。"}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"これは便利な機能が一つ減るわけなのであまりおすすめできませんが、submit や button の挙動は自前でなんとかなります。"}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"Spectrum はこの点について考慮漏れかもしくは同じく諦めてるっぽい？"}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:b,tag:m,props:{href:aH,rel:[L,M,N],target:O},children:[{type:a,value:aH}]}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:"自前実装の方法は"},{type:b,tag:j,props:{},children:[{type:a,value:K}]},{type:a,value:"をクリックしたら周辺の form を探して submit を発火させたりとか地道にネイティブ挙動を再実装する必要がありそう。アクセシビリティも忘れずに。"}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:b,tag:j,props:{},children:[{type:a,value:"formData"}]},{type:a,value:"は polyfill を使えば Safari も使えそう。"}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:b,tag:m,props:{href:aI,rel:[L,M,N],target:O},children:[{type:a,value:aI}]},{type:a,value:g},{type:b,tag:m,props:{href:aJ,rel:[L,M,N],target:O},children:[{type:a,value:aJ}]}]}]},excerpt:{type:al,children:[{type:b,tag:W,props:{id:y},children:[{type:b,tag:m,props:{ariaHidden:q,href:am,tabIndex:r},children:[{type:b,tag:c,props:{className:[s,t]},children:[]}]},{type:a,value:y}]},{type:a,value:g},{type:b,tag:h,props:{},children:[{type:a,value:an},{type:b,tag:j,props:{},children:[{type:a,value:u}]},{type:a,value:ao}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002F2021-01-04-custom-elements-form-issue",extension:".md",updatedAt:"2021-01-05T17:11:33.690Z"}}],fetch:[],mutations:void 0}}("text","element","span","token","punctuation","tag","\n","p","\u003E","code"," ","\u003C","a","\n  ","\"","\u003C\u002F","true",-1,"icon","icon-link","input","div","form","autocomplete","問題",3,"h3","nuxt-content-highlight","pre","line-numbers","language-html","attr-name","attr-value","attr-equals","=","keyword","button","nofollow","noopener","noreferrer","_blank","\u002F\u003E","解決策","text-field-component","\n    ","template-punctuation","string","`","h2","\n    #shadow-dom\n    ","{","control-flow","return",";","}",2,"1-buttonを押しても-submit-が動かない","\b\b2-外部のinputと連携してくれない","3-formの-submit-では-shadow-dom-内の-input-value-を拾ってくれない","1-shadown-dom-ではなく-light-dom-に表示する","1. Shadown DOM ではなく Light DOM に表示する","2-input-はコンポーネントに含めず、コンポーネントは-input-の-wrapper-とする","2. input はコンポーネントに含めず、コンポーネントは input の wrapper とする","3-autocomplete-連携を諦めて、挙動を自前で作る","3. autocomplete 連携を諦めて、挙動を自前で作る","root","#%E5%95%8F%E9%A1%8C","Custom Elements(Web Components)の中で","を使うと色々問題がある","button-component","https:\u002F\u002Fdeveloper.mozilla.org\u002Fja\u002Fdocs\u002FWeb\u002FHTML\u002FAttributes\u002Fautocomplete","given-name","family-name","createRenderRoot","this","language-js","class","class-name","function","(",")"," html","template-string","html","https:\u002F\u002Flit-element.polymer-project.org\u002Fguide\u002Ftemplates#renderroot","slot","text-field-container","https:\u002F\u002Fopensource.adobe.com\u002Fspectrum-web-components\u002Fcomponents\u002Ftextfield","https:\u002F\u002Fdeveloper.mozilla.org\u002Fja\u002Fdocs\u002FWeb\u002FAPI\u002FFormData","https:\u002F\u002Fgithub.com\u002Fjimmywarting\u002FFormData")));