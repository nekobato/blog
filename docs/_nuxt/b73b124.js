(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{250:function(t,e,n){},251:function(t,e,n){"use strict";n(250)},252:function(t,e,n){"use strict";n.r(e);n(251);var r=n(18),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"container"},[this._t("default")],2)}),[],!1,null,"18bccaa8",null);e.default=component.exports},253:function(t,e,n){t.exports=function(){"use strict";var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",a="quarter",o="year",c="date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l=function(t,e,n){var r=String(t);return!r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},$={s:l,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+l(r,2,"0")+":"+l(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(f){return{M:u,y:o,w:s,d:i,D:c,h:r,m:n,s:e,ms:t,Q:a}[f]||String(f||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",v={};v[m]=d;var M=function(t){return t instanceof w},D=function(t,e,n){var r;if(!t)return m;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else{var i=t.name;v[i]=t,r=i}return!n&&r&&(m=r),r||!n&&m},y=function(t,e){if(M(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new w(n)},g=$;g.l=D,g.i=M,g.w=function(t,e){return y(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var w=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var l=d.prototype;return l.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(f);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},l.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},l.$utils=function(){return g},l.isValid=function(){return!("Invalid Date"===this.$d.toString())},l.isSame=function(t,e){var n=y(t);return this.startOf(e)<=n&&n<=this.endOf(e)},l.isAfter=function(t,e){return y(t)<this.startOf(e)},l.isBefore=function(t,e){return this.endOf(e)<y(t)},l.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},l.unix=function(){return Math.floor(this.valueOf()/1e3)},l.valueOf=function(){return this.$d.getTime()},l.startOf=function(t,a){var f=this,h=!!g.u(a)||a,d=g.p(t),l=function(t,e){var n=g.w(f.$u?Date.UTC(f.$y,e,t):new Date(f.$y,e,t),f);return h?n:n.endOf(i)},$=function(t,e){return g.w(f.toDate()[t].apply(f.toDate("s"),(h?[0,0,0,0]:[23,59,59,999]).slice(e)),f)},m=this.$W,v=this.$M,M=this.$D,D="set"+(this.$u?"UTC":"");switch(d){case o:return h?l(1,0):l(31,11);case u:return h?l(1,v):l(0,v+1);case s:var y=this.$locale().weekStart||0,w=(m<y?m+7:m)-y;return l(h?M-w:M+(6-w),v);case i:case c:return $(D+"Hours",0);case r:return $(D+"Minutes",1);case n:return $(D+"Seconds",2);case e:return $(D+"Milliseconds",3);default:return this.clone()}},l.endOf=function(t){return this.startOf(t,!1)},l.$set=function(s,a){var f,h=g.p(s),d="set"+(this.$u?"UTC":""),l=(f={},f[i]=d+"Date",f[c]=d+"Date",f[u]=d+"Month",f[o]=d+"FullYear",f[r]=d+"Hours",f[n]=d+"Minutes",f[e]=d+"Seconds",f[t]=d+"Milliseconds",f)[h],$=h===i?this.$D+(a-this.$W):a;if(h===u||h===o){var m=this.clone().set(c,1);m.$d[l]($),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},l.set=function(t,e){return this.clone().$set(t,e)},l.get=function(t){return this[g.p(t)]()},l.add=function(t,a){var c,f=this;t=Number(t);var h=g.p(a),d=function(e){var n=y(f);return g.w(n.date(n.date()+Math.round(e*t)),f)};if(h===u)return this.set(u,this.$M+t);if(h===o)return this.set(o,this.$y+t);if(h===i)return d(1);if(h===s)return d(7);var l=(c={},c[n]=6e4,c[r]=36e5,c[e]=1e3,c)[h]||1,$=this.$d.getTime()+t*l;return g.w($,this)},l.subtract=function(t,e){return this.add(-1*t,e)},l.format=function(t){var e=this;if(!this.isValid())return"Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,c=i.months,f=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,"0")},l=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},$={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,"0"),MMM:f(i.monthsShort,a,c,3),MMMM:f(c,a),D:this.$D,DD:g.s(this.$D,2,"0"),d:String(this.$W),dd:f(i.weekdaysMin,this.$W,o,2),ddd:f(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,"0"),h:d(1),hh:d(2),a:l(s,u,!0),A:l(s,u,!1),m:String(u),mm:g.s(u,2,"0"),s:String(this.$s),ss:g.s(this.$s,2,"0"),SSS:g.s(this.$ms,3,"0"),Z:r};return n.replace(h,(function(t,e){return e||$[t]||r.replace(":","")}))},l.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},l.diff=function(t,c,f){var h,d=g.p(c),l=y(t),$=6e4*(l.utcOffset()-this.utcOffset()),m=this-l,v=g.m(this,l);return v=(h={},h[o]=v/12,h[u]=v,h[a]=v/3,h[s]=(m-$)/6048e5,h[i]=(m-$)/864e5,h[r]=m/36e5,h[n]=m/6e4,h[e]=m/1e3,h)[d]||m,f?v:g.a(v)},l.daysInMonth=function(){return this.endOf(u).$D},l.$locale=function(){return v[this.$L]},l.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},l.clone=function(){return g.w(this.$d,this)},l.toDate=function(){return new Date(this.valueOf())},l.toJSON=function(){return this.isValid()?this.toISOString():null},l.toISOString=function(){return this.$d.toISOString()},l.toString=function(){return this.$d.toUTCString()},d}(),p=w.prototype;return y.prototype=p,[["$ms",t],["$s",e],["$m",n],["$H",r],["$W",i],["$M",u],["$y",o],["$D",c]].forEach((function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),y.extend=function(t,e){return t.$i||(t(e,w,y),t.$i=!0),y},y.locale=D,y.isDayjs=M,y.unix=function(t){return y(1e3*t)},y.en=v[m],y.Ls=v,y.p={},y}()},257:function(t,e,n){},265:function(t,e,n){"use strict";n(257)},282:function(t,e,n){"use strict";n.r(e);n(32);var r=n(5),o=n(1),c=n(253),f=n.n(c),h=o.a.extend({asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,e.next=3,n("articles").fetch();case 3:return r=e.sent,e.abrupt("return",{articles:r});case 5:case"end":return e.stop()}}),e)})))()},computed:{sortedArticles:function(){return this.$data.articles.sort((function(a,b){return a.createdAt>b.createdAt?-1:a.createdAt<b.createdAt?1:0}))}},methods:{toDate:function(t){return f()(t).format("YYYY-MM-DD")}}}),d=(n(265),n(18)),component=Object(d.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Container",[n("ul",{staticClass:"article-list"},t._l(t.sortedArticles,(function(article){return n("li",{key:article.createdAt},[n("nuxt-link",{staticClass:"link",attrs:{to:article.path}},[n("span",{staticClass:"title"},[t._v(t._s(article.title))]),t._v(" "),n("span",{staticClass:"created"},[t._v(t._s(t.toDate(article.createdAt)))]),t._v(" "),n("p",{staticClass:"description"},[t._v(t._s(article.description))])])],1)})),0)])}),[],!1,null,"f5a2d564",null);e.default=component.exports;installComponents(component,{Container:n(252).default})}}]);