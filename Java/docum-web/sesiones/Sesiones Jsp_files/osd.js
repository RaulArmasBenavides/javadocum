(function(){var n=void 0,p=!0,r=null,s=!1,u=this,aa=function(a){var c=typeof a;if("object"==c)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return c;var b=Object.prototype.toString.call(a);if("[object Window]"==b)return"object";if("[object Array]"==b||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==b||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&
!a.propertyIsEnumerable("call"))return"function"}else return"null";else if("function"==c&&"undefined"==typeof a.call)return"object";return c},ba=function(a){var c=aa(a);return"array"==c||"object"==c&&"number"==typeof a.length},w=function(a){return"string"==typeof a},ca=function(a){var c=typeof a;return"object"==c&&a!=r||"function"==c},da=function(a,c,b){return a.call.apply(a.bind,arguments)},ea=function(a,c,b){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);
return function(){var b=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(b,d);return a.apply(c,b)}}return function(){return a.apply(c,arguments)}},x=function(a,c,b){x=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?da:ea;return x.apply(r,arguments)},fa=function(a,c){var b=Array.prototype.slice.call(arguments,1);return function(){var c=Array.prototype.slice.call(arguments);c.unshift.apply(c,b);return a.apply(this,c)}};var ga=parseFloat(""),ha=isNaN(ga)||1<ga||0>ga?0:ga;var na=function(a){if(!ia.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(ja,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(ka,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(la,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(ma,"&quot;"));return a},ja=/&/g,ka=/</g,la=/>/g,ma=/\"/g,ia=/[&<>\"]/;var y=document,z=window;var A=function(a,c){this.width=a;this.height=c};A.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};A.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function C(a){return"function"==typeof encodeURIComponent?encodeURIComponent(a):escape(a)}
var D=function(a,c,b){a.addEventListener?a.addEventListener(c,b,s):a.attachEvent&&a.attachEvent("on"+c,b)},oa=function(a,c,b){a.removeEventListener?a.removeEventListener(c,b,s):a.detachEvent&&a.detachEvent("on"+c,b)},pa=function(a,c){a.google_image_requests||(a.google_image_requests=[]);var b=a.document.createElement("img");b.src=c;a.google_image_requests.push(b)},qa={},E=function(a){try{return!!a.location.href||""===a.location.href}catch(c){return s}};var ra=function(a){for(var c=0,b=a,d=0;a!=a.parent;)a=a.parent,d++,E(a)&&(b=a,c=d);return{M:b,N:c}};var sa=!!window.google_async_iframe_id,F=sa&&window.parent||window,G=function(){if(sa&&!E(F)){for(var a="."+y.domain;2<a.split(".").length&&!E(F);)y.domain=a=a.substr(a.indexOf(".")+1),F=window.parent;E(F)||(F=window)}return F};var H=Array.prototype,ta=H.indexOf?function(a,c,b){return H.indexOf.call(a,c,b)}:function(a,c,b){b=b==r?0:0>b?Math.max(0,a.length+b):b;if(w(a))return!w(c)||1!=c.length?-1:a.indexOf(c,b);for(;b<a.length;b++)if(b in a&&a[b]===c)return b;return-1},ua=H.forEach?function(a,c,b){H.forEach.call(a,c,b)}:function(a,c,b){for(var d=a.length,f=w(a)?a.split(""):a,e=0;e<d;e++)e in f&&c.call(b,f[e],e,a)},va=function(a){var c=a.length;if(0<c){for(var b=Array(c),d=0;d<c;d++)b[d]=a[d];return b}return[]},wa=function(a,
c,b){return 2>=arguments.length?H.slice.call(a,c):H.slice.call(a,c,b)};var I=function(a,c){this.x=a!==n?a:0;this.y=c!==n?c:0};I.prototype.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};I.prototype.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};var xa=function(a,c){for(var b in a)c.call(n,a[b],b,a)},ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),za=function(a,c){for(var b,d,f=1;f<arguments.length;f++){d=arguments[f];for(b in d)a[b]=d[b];for(var e=0;e<ya.length;e++)b=ya[e],Object.prototype.hasOwnProperty.call(d,b)&&(a[b]=d[b])}};var K,Aa,Ba,Ca,Da=function(){return u.navigator?u.navigator.userAgent:r};Ca=Ba=Aa=K=s;var Ea;if(Ea=Da()){var Fa=u.navigator;K=0==Ea.indexOf("Opera");Aa=!K&&-1!=Ea.indexOf("MSIE");Ba=!K&&-1!=Ea.indexOf("WebKit");Ca=!K&&!Ba&&"Gecko"==Fa.product}var Ga=K,L=Aa,M=Ca,N=Ba,Ha=function(){var a=u.document;return a?a.documentMode:n},Ja;
t:{var Ka="",O;if(Ga&&u.opera)var La=u.opera.version,Ka="function"==typeof La?La():La;else if(M?O=/rv\:([^\);]+)(\)|;)/:L?O=/MSIE\s+([^\);]+)(\)|;)/:N&&(O=/WebKit\/(\S+)/),O)var Ma=O.exec(Da()),Ka=Ma?Ma[1]:"";if(L){var Na=Ha();if(Na>parseFloat(Ka)){Ja=String(Na);break t}}Ja=Ka}
var Oa=Ja,Pa={},Qa=function(a){var c;if(!(c=Pa[a])){c=0;for(var b=String(Oa).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),d=String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g,"").split("."),f=Math.max(b.length,d.length),e=0;0==c&&e<f;e++){var g=b[e]||"",h=d[e]||"",k=RegExp("(\\d*)(\\D*)","g"),m=RegExp("(\\d*)(\\D*)","g");do{var l=k.exec(g)||["","",""],q=m.exec(h)||["","",""];if(0==l[0].length&&0==q[0].length)break;c=((0==l[1].length?0:parseInt(l[1],10))<(0==q[1].length?0:parseInt(q[1],10))?-1:(0==l[1].length?
0:parseInt(l[1],10))>(0==q[1].length?0:parseInt(q[1],10))?1:0)||((0==l[2].length)<(0==q[2].length)?-1:(0==l[2].length)>(0==q[2].length)?1:0)||(l[2]<q[2]?-1:l[2]>q[2]?1:0)}while(0==c)}c=Pa[a]=0<=c}return c},Ra=u.document,Sa=!Ra||!L?n:Ha()||("CSS1Compat"==Ra.compatMode?parseInt(Oa,10):5);var Ta,Ua=!L||L&&9<=Sa;!M&&!L||L&&L&&9<=Sa||M&&Qa("1.9.1");L&&Qa("9");var Va=function(a,c){var b;b=a.className;b=w(b)&&b.match(/\S+/g)||[];for(var d=wa(arguments,1),f=b.length+d.length,e=b,g=0;g<d.length;g++)0<=ta(e,d[g])||e.push(d[g]);a.className=b.join(" ");return b.length==f};var Wa=function(a){return a?new P(Q(a)):Ta||(Ta=new P)},Ya=function(a,c){xa(c,function(b,c){"style"==c?a.style.cssText=b:"class"==c?a.className=b:"for"==c?a.htmlFor=b:c in Xa?a.setAttribute(Xa[c],b):0==c.lastIndexOf("aria-",0)||0==c.lastIndexOf("data-",0)?a.setAttribute(c,b):a[c]=b})},Xa={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"},
$a=function(a,c,b){var d=arguments,f=document,e=d[0],g=d[1];if(!Ua&&g&&(g.name||g.type)){e=["<",e];g.name&&e.push(' name="',na(g.name),'"');if(g.type){e.push(' type="',na(g.type),'"');var h={};za(h,g);delete h.type;g=h}e.push(">");e=e.join("")}e=f.createElement(e);g&&(w(g)?e.className=g:"array"==aa(g)?Va.apply(r,[e].concat(g)):Ya(e,g));2<d.length&&Za(f,e,d);return e},Za=function(a,c,b){function d(b){b&&c.appendChild(w(b)?a.createTextNode(b):b)}for(var f=2;f<b.length;f++){var e=b[f];if(ba(e)&&!(ca(e)&&
0<e.nodeType)){var g;t:{if(e&&"number"==typeof e.length){if(ca(e)){g="function"==typeof e.item||"string"==typeof e.item;break t}if("function"==aa(e)){g="function"==typeof e.item;break t}}g=s}ua(g?va(e):e,d)}else d(e)}},Q=function(a){return 9==a.nodeType?a:a.ownerDocument||a.document},P=function(a){this.A=a||u.document||document};P.prototype.createElement=function(a){return this.A.createElement(a)};P.prototype.createTextNode=function(a){return this.A.createTextNode(String(a))};
var ab=function(a){var c=a.A;a=!N&&"CSS1Compat"==c.compatMode?c.documentElement:c.body;c=c.parentWindow||c.defaultView;return L&&Qa("10")&&c.pageYOffset!=a.scrollTop?new I(a.scrollLeft,a.scrollTop):new I(c.pageXOffset||a.scrollLeft,c.pageYOffset||a.scrollTop)};P.prototype.appendChild=function(a,c){a.appendChild(c)};var R=function(a,c,b,d){this.top=a;this.right=c;this.bottom=b;this.left=d};R.prototype.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};R.prototype.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};var S=function(a,c){var b;t:{b=Q(a);if(b.defaultView&&b.defaultView.getComputedStyle&&(b=b.defaultView.getComputedStyle(a,r))){b=b[c]||b.getPropertyValue(c)||"";break t}b=""}return b||(a.currentStyle?a.currentStyle[c]:r)||a.style&&a.style[c]},bb=function(a){var c=a.getBoundingClientRect();L&&(a=a.ownerDocument,c.left-=a.documentElement.clientLeft+a.body.clientLeft,c.top-=a.documentElement.clientTop+a.body.clientTop);return c},cb=function(a){if(L&&!(L&&8<=Sa))return a.offsetParent;var c=Q(a),b=S(a,
"position"),d="fixed"==b||"absolute"==b;for(a=a.parentNode;a&&a!=c;a=a.parentNode)if(b=S(a,"position"),d=d&&"static"==b&&a!=c.documentElement&&a!=c.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==b||"absolute"==b||"relative"==b))return a;return r},db=function(a){var c,b=Q(a),d=S(a,"position"),f=M&&b.getBoxObjectFor&&!a.getBoundingClientRect&&"absolute"==d&&(c=b.getBoxObjectFor(a))&&(0>c.screenX||0>c.screenY),e=new I(0,0),g;c=b?Q(b):document;if(g=L)if(g=!(L&&9<=Sa))g=
"CSS1Compat"!=Wa(c).A.compatMode;g=g?c.body:c.documentElement;if(a==g)return e;if(a.getBoundingClientRect)c=bb(a),a=ab(Wa(b)),e.x=c.left+a.x,e.y=c.top+a.y;else if(b.getBoxObjectFor&&!f)c=b.getBoxObjectFor(a),a=b.getBoxObjectFor(g),e.x=c.screenX-a.screenX,e.y=c.screenY-a.screenY;else{f=a;do{e.x+=f.offsetLeft;e.y+=f.offsetTop;f!=a&&(e.x+=f.clientLeft||0,e.y+=f.clientTop||0);if(N&&"fixed"==S(f,"position")){e.x+=b.body.scrollLeft;e.y+=b.body.scrollTop;break}f=f.offsetParent}while(f&&f!=a);if(Ga||N&&"absolute"==
d)e.y-=b.body.offsetTop;for(f=a;(f=cb(f))&&f!=b.body&&f!=g;)if(e.x-=f.scrollLeft,!Ga||"TR"!=f.tagName)e.y-=f.scrollTop}return e},eb=/matrix\([0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, [0-9\.\-]+, ([0-9\.\-]+)p?x?, ([0-9\.\-]+)p?x?\)/;var fb=/[&\?](?:client|correlator|url|ifk|oid|eid)=[^&]+/g,gb=/[&\?](?:slotname|dt|ifi|adx|ady|format)=[^&]+/g;var hb=function(a){var c=z;a&&c.top!=c&&(c=c.top);try{var b;if(c.document&&!c.document.body)b=new A(-1,-1);else{var d=(c||window).document,f="CSS1Compat"==d.compatMode?d.documentElement:d.body;b=new A(f.clientWidth,f.clientHeight)}return b}catch(e){return new A(-12245933,-12245933)}},ib=function(a,c){("msie"in qa?qa.msie:qa.msie=-1!=navigator.userAgent.toLowerCase().indexOf("msie"))&&!window.opera?D(a,"readystatechange",function(){"complete"==a.readyState&&c()}):D(a,"load",c)},jb=function(a,c){try{c.postMessage(a,
"*")}catch(b){}},kb=function(a,c){if(c){a(c);var b=c.frames;if(b){var d=b.length,f;for(f=0;f<d;++f)kb(a,b[f])}}};var T=function(a,c,b,d,f,e,g,h,k){this.a=nb;this.q=0;this.B=this.k=-1;this.s=[0,0,0,0,0];this.g=[0,0,0,0,0];this.d=[0,0,0,0,0];this.zoom=[0,0,0,0,0];this.j="";this.D=s;this.K=p;this.e=d;this.v=this.p=-1;this.f=c;this.b=0;this.c=f;this.l=g||"";this.m=h||"";this.C=function(){};this.element=b;this.t=0;this.u=-1;this.r=k||nb;this.I=c?-1!=c.indexOf("dcopt=anid"):s;this.J="";this.o=b?String(b._avi_||""):"";this.G=s;this.n=this.F="";ob(this,a,e)},nb=new R(0,0,0,0);
T.prototype.update=function(a,c,b,d,f){if(0>this.e)return r;b||ob(this,d,f);return pb(this,this.a,c,a,b,s)};
var pb=function(a,c,b,d,f,e){var g=d-a.e||1;a.e=d;var h=new R(Math.max(c.top,b.top),Math.min(c.right,b.right),Math.min(c.bottom,b.bottom),Math.max(c.left,b.left)),k=c=-1,m=0;0<a.q&&(h.top<h.bottom&&h.left<h.right)&&(m=(h.bottom-h.top)*(h.right-h.left)/a.q,c=1<=m?0:0.75<=m?1:0.5<=m?2:0.25<=m?3:4,0>a.k&&(a.k=d),a.B=d,0.5<=m&&(k=100*a.q/((b.bottom-b.top)*(b.right-b.left)),k=20<=k?0:10<=k?1:5<=k?2:2.5<=k?3:4));e=e&&-1!=a.p&&2>=a.p;d=-1==a.p||-1==c?-1:Math.max(a.p,c);e=e?d:a.p;-1!=e&&(a.s[e]+=g,-1!=e&&
2>=e&&-1!=a.v&&(a.zoom[a.v]+=g));for(;0<=e&&4>=e;e++)a.d[e]+=g,a.d[e]>a.g[e]&&(a.g[e]=a.d[e]);for(e=0;e<a.d.length;++e)if(e<c||f||-1==c)a.d[e]=0;a.p=f?-1:c;a.v=k;a.C(a,b);return m},rb=function(a,c,b,d){if(a.G&&a.element&&a.element.contentWindow){var f=qb(a);f.unshift("adk="+a.b);d&&f.push("r="+d);c=f.concat(c).join("&");try{d={};d[0]=b;d[3]=c;d[4]=a.b;d[5]=1E3<=Math.max(a.d[2],a.g[2])?p:s;var e=window.JSON.stringify(d),g=a.element.contentWindow;if(e){var h=fa(jb,e);kb(h,g)}}catch(k){}}};
T.prototype.L=function(a){this.u=a()};T.prototype.H=function(a){a=a();this.t+=a-this.u;this.u=-1};
var ob=function(a,c,b){var d,f;c=b?c:c.top;try{if(a.element){f=a.element.getBoundingClientRect();var e=a.element,g=new I(0,0),h=Q(e)?Q(e).parentWindow||Q(e).defaultView:window;do{var k;if(h==c)k=db(e);else{b=e;var m=n;if(b.getBoundingClientRect)var l=bb(b),m=new I(l.left,l.top);else var q=ab(Wa(b)),t=db(b),m=new I(t.x-q.x,t.y-q.y);var v=n;if(M&&!Qa(12)){var J=n;var B=n;L?B="-ms-transform":N?B="-webkit-transform":Ga?B="-o-transform":M&&(B="-moz-transform");var Y=n;B&&(Y=S(b,B));Y||(Y=S(b,"transform"));
if(Y)var Ia=Y.match(eb),J=!Ia?new I(0,0):new I(parseFloat(Ia[1]),parseFloat(Ia[2]));else J=new I(0,0);v=new I(m.x+J.x,m.y+J.y)}else v=m;k=v}b=k;g.x+=b.x;g.y+=b.y}while(h&&h!=c&&(e=h.frameElement)&&(h=h.parent));d=g}else f=nb,d=new I(0,0);var lb=d.x+a.r.left,mb=d.y+a.r.top,cc=a.r.right||f.right-f.left,dc=a.r.bottom||f.bottom-f.top;a.a=new R(Math.round(mb),Math.round(lb+cc),Math.round(mb+dc),Math.round(lb))}catch(sc){a.a=a.r}a.q=(a.a.bottom-a.a.top)*(a.a.right-a.a.left)},qb=function(a){var c=a.a,c=
["p="+c.top+","+c.left+","+c.bottom+","+c.right];c.push("tos="+a.s.join(","));c.push("mtos="+a.g.join(","));c.push("rs="+a.c);var b=5==a.c||6==a.c;b||c.push("ht="+a.t);0<=a.k&&(c.push("tfs="+a.k),c.push("tls="+a.B));a.o&&c.push("ai="+a.o);a.F&&c.push("fp="+C(a.F));7==a.c&&c.push("qid="+a.J);a.j&&c.push("afp="+C(a.j));b&&(a.m&&c.push("ord="+C(a.m)),a.l&&c.push("amd="+C(a.l+";")),a.I&&c.push("anid=1"),a.n&&c.push("xbid="+C(a.n)));return c};var sb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#(.*))?$"),ub=function(a){if(tb){tb=s;var c=u.location;if(c){var b=c.href;if(b&&(b=(b=ub(b)[3]||r)&&decodeURIComponent(b))&&b!=c.hostname)throw tb=p,Error();}}return a.match(sb)},tb=N,vb=function(a,c,b){if("array"==aa(c))for(var d=0;d<c.length;d++)vb(a,String(c[d]),b);else c!=r&&b.push("&",a,""===c?"":"=",encodeURIComponent(String(c)))};var yb=function(a,c){D(a,"scroll",wb);D(a,"resize",xb);if(c)for(var b,d=0;d<U.length;++d)if(b=U[d],b.element){var f=x(b.L,b,V);D(b.element,"mouseover",f);f=x(b.H,b,V);D(b.element,"mouseout",f)}},xb=function(){W(s);wb()},wb=function(){zb(U,s)},zb=function(a,c){if(!(X||0==a.length)){var b=Ab,d=Bb,f=Cb,e=Db,g=r;if(e)W(s),b=Ab=new A(d.width,d.height-f);else{if(b==r||-1==b.width||-1==b.height||-12245933==b.width||-12245933==b.height)return;try{g=ab(Wa(z.top.document))}catch(h){return}}Eb=r;window.clearTimeout(Fb);
Fb=r;var k=V();if(e)for(b=0;b<a.length;b++){var e=a[b],g=k,m=d,l=f,q=c,t=z;if(!(0>e.e)){var v=t.innerWidth,J=t.innerHeight,B=new R(Math.round(t.mozInnerScreenY),Math.round(t.mozInnerScreenX+v),Math.round(t.mozInnerScreenY+J),Math.round(t.mozInnerScreenX)),m=new R(t.screenY+l,t.screenX+m.width,t.screenY+m.height,t.screenX);q||(l=new R(B.top-m.top,B.right-m.left,B.bottom-m.top,B.left-m.left),l.top>e.a.top?e.a=l:(e.a.right=e.a.left+v,e.a.bottom=e.a.top+J),e.q=v*J);pb(e,B,m,g,q,p)}}else{d=new R(g.y,g.x+
b.width,g.y+b.height,g.x);for(b=0;b<a.length;b++)a[b].update(k,d,c,z,Gb)}Hb+=V()-k;++Ib;if("osd"==Jb)for(b=0;b<a.length;b++)k=Kb(z),rb(a[b],k,"goog_update_data","u");c||Lb()}},Nb=function(){var a=Mb,c;y.mozVisibilityState?c="mozvisibilitychange":y.webkitVisibilityState?c="webkitvisibilitychange":y.visibilityState&&(c="visibilitychange");c&&D(y,c,a)},Mb=function(){var a;a=z.document;a={visible:1,hidden:2,prerender:3,preview:4}[a.webkitVisibilityState||a.mozVisibilityState||a.visibilityState||""]||
0;(a=1==a||0==a)&&W(p);zb(U,!a)},Lb=function(){Fb=window.setTimeout(function(){zb(U,s)},1E3)},U=[],X=s,Ob=(new Date).getTime(),Z=-1,Ab=r,Bb=r,Pb=r,Fb=r,Gb=!E(z.top),Jb="",Eb=r,Cb=0,Db=s,V=function(){return(new Date).getTime()-Ob},Qb=0,Rb=0,Hb=0,Ib=0,Sb=-1,W=function(a){Ab=hb(p);if(!a){Bb=z.outerWidth?new A(z.outerWidth,z.outerHeight):new A(-12245933,-12245933);a=z;a.top!=a&&(a=a.top);var c=0,b=0,d=Ab;try{var f=a.document,e=f.body,g=f.documentElement;if("CSS1Compat"==f.compatMode&&g.scrollHeight)c=
g.scrollHeight!=d.height?g.scrollHeight:g.offsetHeight,b=g.scrollWidth!=d.width?g.scrollWidth:g.offsetWidth;else{var h=g.scrollHeight,k=g.scrollWidth,m=g.offsetHeight,l=g.offsetWidth;g.clientHeight!=m&&(h=e.scrollHeight,k=e.scrollWidth,m=e.offsetHeight,l=e.offsetWidth);h>d.height?h>m?(c=h,b=k):(c=m,b=l):h<m?(c=h,b=k):(c=m,b=l)}Pb=new A(b,c)}catch(q){Pb=new A(-12245933,-12245933)}}},Kb=function(a,c){if(Eb&&!c)return va(Eb);var b=a.document,d=0<=Z?V()-Z:-1;-1==Sb&&(d=V());var f=[],e=U;try{if(0<e.length?
((b=Ab)&&f.push("bs="+b.width+","+b.height),(b=Bb)&&f.push("bos="+b.width+","+b.height),(b=Pb)&&f.push("ps="+b.width+","+b.height),a.screen&&f.push("ss="+a.screen.width+","+a.screen.height)):(f.push("url="+C(a.location.href.substring(0,1024))),b.referrer&&f.push("referrer="+C(b.referrer.substring(0,512)))),f.push("tt="+d),f.push("pt="+Z),f.push("deb="+C([1,Qb,Rb,Hb,Ib,Sb].join("-"))),a.top!=a){0<e.length&&f.push("iframe_loc="+C(a.location.href.substring(0,512)));var g=hb(s);f.push("is="+g.width+","+
g.height)}}catch(h){f.push("error")}Eb=f;return va(Eb)},Tb=function(a,c){var b=c.match(a);return b?b.join(""):""},Vb=function(a,c){var b=Ub,d=U[0],f=(d.f||"").match(/activeViewUseDARTIframe=0/);if(f&&0<f.length)return c("o"),"";f="pub_side_iframe_"+Math.floor(1E13*Math.random());b=b!=a.top?b.document.referrer:b.location.href;if(!b)return c("i"),"";var e=ub(b),b=e[1],g=e[2],h=e[3],e=e[4],k="";b&&(k+=b+":");h&&(k+="//",g&&(k+=g+"@"),k+=h,e&&(k+=":"+e));b=k;g="/doubleclick/DARTIframe.html";d.f&&(h=d.f.match(/mtfIFPath=([^;?]+)/))&&
1<h.length&&(g=g.replace("/doubleclick/",h[1]));var m,h={gtVersion:"lidar",mediaserver:"http://s0.2mdn.net/879366"};h.x=d.a.left;h.y=d.a.top;h.w=d.a.right-d.a.left;h.h=d.a.bottom-d.a.top;e=a.location.href;k=e.length;if(0==k)e=0;else{for(var l=305419896,q=0;q<k;q++)l^=(l<<5)+(l>>2)+e.charCodeAt(q)&4294967295;e=0<l?l:4294967296+l}h.i=e;h.rs=d.c;d.l&&(h.md=d.l);d.m&&(h.od=d.m);d.f&&(h.au=d.f);d.n&&(h.xi=d.n);d.b&&(h.ak=d.b);h.pn=f;h.it="osd";d=[b+g];for(m in h)vb(m,h[m],d);d[1]&&(m=d[0],b=m.indexOf("#"),
0<=b&&(d.push(m.substr(b)),d[0]=m=m.substr(0,b)),b=m.indexOf("?"),0>b?d[1]="?":b==m.length-1&&(d[1]=n));m=d.join("");d=$a("iframe",{id:f+"_"+Math.floor(1E13*Math.random()),name:f});d.style.display="none";d.style.width="0px";d.style.height="0px";a.document.body.appendChild(d);d.src=m;return f};var $,Wb=r,Xb="",Ub=r,Zb=function(){if(2==Yb())return p;for(var a=U,c=0;c<a.length;c++)if(!a[c].D)return p;return s},bc=function(){if(!(0<Z)){try{if(!$b()||"function"!=typeof $.getNewBlocks)return;W(s);ac(s)}catch(a){}Wb=window.setTimeout(bc,250)}},ac=function(a){var c=0,b=V();$.getNewBlocks(function(e,d,f,m,l){c++;var q=-1,t=s;a||m?q=b:t=p;var v=new T(window,d,e,q,f,Gb);v.C=ec;v.j=Tb(gb,d);v.b=fc(d);gc(v);l&&(v.o=l);U.push(v);t&&ib(e,function(){v.e=V();Mb()})},a);if(a)for(var d=U.length,f=0;f<d;++f){var e=
U[f];0>=e.e&&(e.e=b)}},jc=function(){try{var a=G(),c=V();Z=c;Ub=ra(a).M;window.clearTimeout(Wb);Wb=r;W(s);if($b()){Qb=$.numBlocks();if("function"!=typeof $.getNewBlocks){var b=[];Rb=0;$.getBlocks(function(a,d,f){Rb++;a=new T(window,d,a,c,f,Gb);a.C=ec;a.j=Tb(gb,d);a.b=fc(d);gc(a);b.push(a)});U=b}else ac(p),Rb=U.length;if(0==Rb)hc("n");else{if(Gb&&Math.random()<ha){var d=Vb(a,function(){});if(d){window.setTimeout(function(){var b;t:{var c=0;try{if(c=a.frames[d].frames.length,0<c&&a.frames[d].frames.ps_iframe_loaded!=
n){b=X=p;break t}}catch(f){if(0<c){b=X=p;break t}}b=s}b||ic()},2E3);return}}ic()}}else hc("c")}catch(f){U=[],hc("x")}},ic=function(){var a=G();Nb();Mb();kc();var c=2==$.getOseId();yb(a,c);window.setTimeout(function(){hc("t")},36E5);Sb=V()-Z},hc=function(a){window.clearTimeout(Fb);Fb=r;var c=G();$||($=Goog_AdSense_getAdAdapterInstance());if(!X){if(2==Yb()){-1==Sb&&(U=[]);var b=U,d=s;0<b.length?zb(b,p):d=p;d=Kb(c,d);d.unshift("//pagead2.googlesyndication.com/pagead/gen_204?id=osd");var f=0;try{if(0<
b.length)for(var e=0;e<b.length;e++)if(0<b[e].b){0<b[e].u&&b[e].H(V);var g=b[e],h=g.a,k=["p:",h.top,h.left,h.bottom,h.right];k.push("tos:",g.s.join(","));k.push("mtos:",g.g.join(","));k.push("rs:",g.c);var m=5==g.c||6==g.c;m||(k.push("zoom:",g.zoom.join(",")),k.push("ht:",g.t));0<=g.k&&k.push("tfs:",g.k,"tls:",g.B);g.j&&k.push("fp:",g.j);7==g.c&&k.push("qid:",g.J);g.o&&k.push("ai:",g.o);m&&(g.m&&k.push("ord:",g.m),g.l&&k.push("amd:",g.l,";"),g.I&&k.push("anid:","1"),g.n&&k.push("xbid:",g.n));d.splice(1,
0,"adk"+b[e].b+"="+C(k.join(",")));f++}d.push("r="+a);0==b.length&&(d.push("correlator="+$.getCorrelator()),d.push("eid="+$.getOseExpId()),d.push("oid="+Yb()));lc&&d.push("ovr=t")}catch(l){d.push("error")}if(!lc){e=d.join("&");Xb&&(e+="&fp="+C(Xb));try{pa(c,e)}catch(q){}}d.splice(0,1,"//pagead2.googlesyndication.com/activeview?id=osd2");d.splice(1,f);for(e=a=0;e<b.length;e++)if(f=b[e],f.o&&f.b){g=qb(f);d.splice(1,a,"adk="+f.b+"&"+g.join("&")+"&js=1");a=d.join("&").substring(0,2E3);try{pa(c,a)}catch(t){}a=
1}d.splice(1,a);if(lc)for(e=0;e<b.length;e++)f=b[e],rb(f,d,"goog_image_request")}X=p}},lc=s,mc=0,$b=function(){var a=G().document;if(!a.body||!a.body.getBoundingClientRect||"function"!=typeof Goog_AdSense_getAdAdapterInstance)return s;$=Goog_AdSense_getAdAdapterInstance();return p},ec=function(a,c){if(a&&!a.D){var b=1E3<=Math.max(a.d[2],a.g[2]);if(b||a.K){var d=b?"1":"0";a.K=s;var f=$.getCorrelator(),e=a.a,g=Pb,d=["{vi:",d,",cl:",f,",adk:",a.b,",rs:",a.c,",pl:",e.left,",pr:",e.right,",pt:",e.top,
",pb:",e.bottom,",vl:",c.left,",vr:",c.right,",vt:",c.top,",vb:",c.bottom,",dw:",g&&g.width||0,",dh:",g&&g.height||0,"}"].join(""),e=a.element;try{var f=[],h=e.contentWindow||(e.contentDocument||e.contentWindow.document).parentWindow||(e.contentDocument||e.contentWindow.document).defaultView;if(h)f=[h];else{var k;var m,l=document,l=e||l;k=l.querySelectorAll&&l.querySelector?l.querySelectorAll("IFRAME"):m=l.getElementsByTagName("IFRAME");for(l=0;l<k.length;++l)(h=k[l].contentWindow||(k[l].contentDocument||
k[l].contentWindow.document).parentWindow||(k[l].contentDocument||k[l].contentWindow.document).defaultView)&&f.push(h)}var q=f.length;if(0<q)for(var t=fa(jb,d),l=0;l<q;++l)kb(t,f[l])}catch(v){}if(b&&(a.D=p,!Zb()&&(b=2==$.getOseId(),h=G(),oa(h,"scroll",wb),oa(h,"resize",xb),b)))for(h=0;h<U.length;++h)b=U[h],b.element&&(k=x(b.L,b,V),oa(b.element,"mouseover",k),k=x(b.H,b,V),oa(b.element,"mouseout",k))}}},fc=function(a){return(a=a.match(/[&\?](?:adk)=([0-9]+)/))&&2==a.length?parseInt(a[1],10):0},nc=function(a){if(a.data){var c;
t:{a=a.data;var b=window;if("object"==typeof a)c=a;else{if("string"==typeof a)try{var d=b.JSON.parse(a);d[2]=p;c=d;break t}catch(f){}c=r}}if(c&&"goog_provide_override"==c[0])if(d=c[1],0<d&&(1>=d&&d>mc)&&(mc=d),c=c[4]){t:{if(c){d=U;for(a=0;a<d.length;++a)if(d[a].b==c){c=d[a];break t}}c=r}c&&(c.G=p)}else{c=U;for(d=0;d<c.length;++d)c[d].G=p}}},oc=function(){if(0<mc){var a;t:{a=[2];var c=mc;if(!(1E-4>Math.random())){var b=Math.random();if(b<c){a=a[Math.floor(b/c*a.length)];break t}}a=r}2==a&&(lc=p)}},
kc=function(){if(2!=Yb()){D(z,"message",nc);for(var a=U,c=0;c<a.length;++c){var b=a[c];if(b.element&&b.element.contentWindow){var d={0:"goog_get_override"};b.b&&(d[4]=b.b);try{var f=window.JSON.stringify(d),e=b.element.contentWindow;if(f){var g=fa(jb,f);kb(g,e)}}catch(h){}}}z.setTimeout(oc,500)}},Yb=function(){return lc?2:$?$.getOseId():0},gc=function(a){if(!Xb){if(!a.f)return;var c=Tb(fb,a.f);if(c&&("&"==c.charAt(0)||"?"==c.charAt(0)))c=c.slice(1);Xb=c}a.F=Xb};var Jb="osd",pc=G();D(pc,"unload",function(){hc("u")});var qc=G();if("complete"==qc.document.readyState||qc.google_onload_fired)jc();else{bc();var rc=G();D(rc,"load",function(){window.setTimeout(jc,100)})};})();