(self.AMP=self.AMP||[]).push({n:"amp-iframe",v:"1810152207300",f:(function(AMP,_){
var l;function aa(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a;for(var d in b)if(Object.defineProperties){var e=Object.getOwnPropertyDescriptor(b,d);e&&Object.defineProperty(a,d,e)}else a[d]=b[d]}function q(a,b){b=void 0===b?"":b;try{return decodeURIComponent(a)}catch(c){return b}};var ba=/(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;self.log=self.log||{user:null,dev:null,userForEmbed:null};var t=self.log;function u(){if(!t.user)throw Error("failed to call initLogConstructor");return t.user}function v(){if(t.dev)return t.dev;throw Error("failed to call initLogConstructor");};function x(){var a,b=Object.create(null);a&&Object.assign(b,a);return b}function y(a){return a||{}};function z(a,b){if(a.nodeType){var c=(a.ownerDocument||a).defaultView;if(c=c!=(c.__AMP_TOP||c)&&A(c,b)?B(c,b):null)return c}c=C(a);c=C(c);c=c.isSingleDoc()?c.win:c;return B(c,b)}function D(a,b){a=a.__AMP_TOP||a;return B(a,b)}function C(a){return a.nodeType?D((a.ownerDocument||a).defaultView,"ampdoc").getAmpDoc(a):a}function B(a,b){A(a,b);var c=a.services;c||(c=a.services={});var d=c;a=d[b];a.obj||(a.obj=new a.ctor(a.context),a.ctor=null,a.context=null,a.resolve&&a.resolve(a.obj));return a.obj}
function A(a,b){a=a.services&&a.services[b];return!(!a||!a.ctor&&!a.obj)};/*
 https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
function F(a,b){var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c};function ca(a,b){for(var c,d=a;d&&d!==c;d=d.parentElement)if(b(d))return d;return null}function da(a){return a.closest?a.closest(".i-amphtml-overlay"):ca(a,function(a){var b=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector;return b?b.call(a,".i-amphtml-overlay"):!1})};function G(a){this.Z=a;this.K=this.T=0;this.C=Object.create(null)}G.prototype.has=function(a){return!!this.C[a]};G.prototype.get=function(a){var b=this.C[a];if(b)return b.access=++this.K,b.payload};G.prototype.put=function(a,b){this.has(a)||this.T++;this.C[a]={payload:b,access:this.K};if(!(this.T<=this.Z)){v().warn("lru-cache","Trimming LRU cache");a=this.C;var c=this.K+1,d,e;for(e in a){var f=a[e].access;f<c&&(c=f,d=e)}void 0!==d&&(delete a[d],this.T--)}};var H=self.AMP_CONFIG||{},ea={thirdParty:H.thirdPartyUrl||"https://3p.ampproject.net",thirdPartyFrameHost:H.thirdPartyFrameHost||"ampproject.net",thirdPartyFrameRegex:("string"==typeof H.thirdPartyFrameRegex?new RegExp(H.thirdPartyFrameRegex):H.thirdPartyFrameRegex)||/^d-\d+\.ampproject\.net$/,cdn:H.cdnUrl||"https://cdn.ampproject.org",cdnProxyRegex:("string"==typeof H.cdnProxyRegex?new RegExp(H.cdnProxyRegex):H.cdnProxyRegex)||/^https:\/\/([a-zA-Z0-9_-]+\.)?cdn\.ampproject\.org$/,localhostRegex:/^https?:\/\/localhost(:\d+)?$/,
errorReporting:H.errorReportingUrl||"https://amp-error-reporting.appspot.com/r",localDev:H.localDev||!1};y({c:!0,v:!0,a:!0,ad:!0});var I,J;function fa(a,b){try{return JSON.parse(a)}catch(c){b&&b(c)}};function ga(a){var b="iframe-messaging",c;if(a.__AMP__EXPERIMENT_TOGGLES)c=a.__AMP__EXPERIMENT_TOGGLES;else{a.__AMP__EXPERIMENT_TOGGLES=Object.create(null);c=a.__AMP__EXPERIMENT_TOGGLES;if(a.AMP_CONFIG)for(var d in a.AMP_CONFIG){var e=a.AMP_CONFIG[d];"number"===typeof e&&0<=e&&1>=e&&(c[d]=Math.random()<e)}if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"])&&0<a.AMP_CONFIG["allow-doc-opt-in"].length&&(d=a.AMP_CONFIG["allow-doc-opt-in"],e=a.document.head.querySelector('meta[name="amp-experiments-opt-in"]')))for(var e=
e.getAttribute("content").split(","),f=0;f<e.length;f++)-1!=d.indexOf(e[f])&&(c[e[f]]=!0);Object.assign(c,ha(a));if(a.AMP_CONFIG&&Array.isArray(a.AMP_CONFIG["allow-url-opt-in"])&&0<a.AMP_CONFIG["allow-url-opt-in"].length){d=a.AMP_CONFIG["allow-url-opt-in"];e=a.location.originalHash||a.location.hash;a=Object.create(null);if(e)for(var g;g=ba.exec(e);)f=q(g[1],g[1]),g=g[2]?q(g[2],g[2]):"",a[f]=g;for(e=0;e<d.length;e++)f=a["e-"+d[e]],"1"==f&&(c[d[e]]=!0),"0"==f&&(c[d[e]]=!1)}}var h=c;return!!h[b]}
function ha(a){a:{var b;try{b=a.document.cookie}catch(g){b=""}if(a=b)for(a=a.split(";"),b=0;b<a.length;b++){var c=a[b].trim(),d=c.indexOf("=");if(-1!=d&&"AMP_EXP"==q(c.substring(0,d).trim(),void 0)){a=c.substring(d+1).trim();a=q(a,a);break a}}a=null}var e=a,f=e?e.split(/\s*,\s*/g):[];a=Object.create(null);for(b=0;b<f.length;b++)0!=f[b].length&&("-"==f[b][0]?a[f[b].substr(1)]=!1:a[f[b]]=!0);return a};var K,L="Webkit webkit Moz moz ms O o".split(" ");function M(a,b){var c,d;d=a.style;K||(K=x());var e=K.zIndex;if(!e){e="zIndex";if(void 0===d.zIndex){var f;b:{for(f=0;f<L.length;f++){var g=L[f]+"ZIndex";if(void 0!==d[g]){f=g;break b}}f=""}void 0!==d[f]&&(e=f)}K.zIndex=e}d=e;d&&(a.style[d]=c?b+c:b)};function N(a,b,c,d){return{left:a,top:b,width:c,height:d,bottom:b+d,right:a+c,x:a,y:b}}function ia(a){for(var b=-Infinity,c=Infinity,d=-Infinity,e=Infinity,f=0;f<arguments.length;f++){var g=arguments[f];if(g&&(b=Math.max(b,g.left),c=Math.min(c,g.left+g.width),d=Math.max(d,g.top),e=Math.min(e,g.top+g.height),c<b||e<d))return null}return Infinity==c?null:N(b,d,c-b,e-d)}function O(a,b,c){return 0==b&&0==c||0==a.width&&0==a.height?a:N(a.left+b,a.top+c,a.width,a.height)};function ja(a){if(!P(a))return null;var b=a.indexOf("{");try{return JSON.parse(a.substr(b))}catch(c){return v().error("MESSAGING","Failed to parse message: "+a,c),null}}function P(a){return"string"==typeof a&&0==a.indexOf("amp-")&&-1!=a.indexOf("{")};var ka={"AMP-FX-FLYING-CARPET":!0,"AMP-LIGHTBOX":!0,"AMP-STICKY-AD":!0,"AMP-LIGHTBOX-GALLERY":!0};function la(a,b){for(var c=0,d=0;d<a.length;d++){var e=a[d];b(e,d,a)||(c<d&&(a[c]=e),c++)}c<a.length&&(a.length=c)};function Q(a,b,c){var d=a.listeningFors;!d&&c&&(d=a.listeningFors=Object.create(null));a=d||null;if(!a)return a;var e=a[b];!e&&c&&(e=a[b]=[]);return e||null}
function ma(a,b,c){var d=b.src;I||(I=self.document.createElement("a"),J=self.UrlCache||(self.UrlCache=new G(100)));var e=J,f=I;if(e&&e.has(d))d=e.get(d);else{f.href=d;f.protocol||(f.href=f.href);var g={href:f.href,protocol:f.protocol,host:f.host,hostname:f.hostname,port:"0"==f.port?"":f.port,pathname:f.pathname,search:f.search,hash:f.hash,origin:null};"/"!==g.pathname[0]&&(g.pathname="/"+g.pathname);if("http:"==g.protocol&&80==g.port||"https:"==g.protocol&&443==g.port)g.port="",g.host=g.hostname;
g.origin=f.origin&&"null"!=f.origin?f.origin:"data:"!=g.protocol&&g.host?g.protocol+"//"+g.host:g.href;e&&e.put(d,g);d=g}d=d.origin;e=c?b.getAttribute("data-amp-3p-sentinel"):"amp";a=Q(a,e,!0);for(var h,e=0;e<a.length;e++){var n=a[e];if(n.frame===b){h=n;break}}h||(h={frame:b,origin:d,events:Object.create(null)},a.push(h));return h.events}
function na(a){for(var b=y({sentinel:"unlisten"}),c=a.length-1;0<=c;c--){var d=a[c];if(!d.frame.contentWindow){a.splice(c,1);var e=d.events,f;for(f in e)e[f].splice(0,Infinity).forEach(function(a){a(b)})}}}
function oa(a){if(!a.listeningFors){var b=function(b){if(b.data){var c=pa(b.data);if(c&&c.sentinel){var e;e=c.sentinel;var f=b.origin,g=b.source,h=Q(a,e);if(h){for(var n,k=0;k<h.length;k++){var m=h[k],r=m.frame.contentWindow;if(r)if("amp"===e){if(m.origin===f&&r==g){n=m;break}}else{var p;if(!(p=g==r))b:{for(p=g;p&&p!=p.parent;p=p.parent)if(p==r){p=!0;break b}p=!1}if(p){n=m;break}}else setTimeout(na,0,h)}e=n?n.events:null}else e=h;var E=e;if(E){var w=E[c.type];if(w)for(w=w.slice(),e=0;e<w.length;e++)(0,w[e])(c,
b.source,b.origin)}}}};a.addEventListener("message",b)}}function R(a,b,c,d,e){function f(b,d,f){if(e||d==a.contentWindow)"unlisten"==b.sentinel?n():c(b,d,f)}var g=a.ownerDocument.defaultView;oa(g);d=ma(g,a,d);var h=d[b]||(d[b]=[]),n;h.push(f);return n=function(){if(f){var a=h.indexOf(f);-1<a&&h.splice(a,1);c=h=f=null}}}
function qa(a,b,c,d,e){if(a.contentWindow)for(d.type=c,d.sentinel=e?a.getAttribute("data-amp-3p-sentinel"):"amp",a=d,e&&(a="amp-"+JSON.stringify(d)),d=0;d<b.length;d++)e=b[d],e.win.postMessage(a,e.origin)}function pa(a){"string"==typeof a&&(a="{"==a.charAt(0)?fa(a,function(a){v().warn("IFRAME-HELPER","Postmessage could not be parsed. Is it in a valid JSON format?",a)})||null:P(a)?ja(a):null);return a}
function S(a,b,c,d){var e=this;this.h=a;this.N=c;this.w=[];this.aa=R(this.h,b,function(a,b,c){e.w.some(function(a){return a.win==b})||e.w.push({win:b,origin:c});d(a,b,c)},this.N,this.N)}S.prototype.send=function(a,b){la(this.w,function(a){return!a.win.parent});qa(this.h,this.w,a,b,this.N)};S.prototype.destroy=function(){this.aa();this.w.length=0};var T=[[300,250],[320,50],[300,50],[320,100]];var ra=[0,.05,.1,.15,.2,.25,.3,.35,.4,.45,.5,.55,.6,.65,.7,.75,.8,.85,.9,.95,1],sa=Date.now();function U(a,b,c){var d=this;this.L=a;this.A=null;this.P=this.S=!1;this.I=null;this.J=a.getViewport();this.U=new S(b,"send-intersections",c||!1,function(){ta(d)});this.A=new V(function(a){for(var b=0;b<a.length;b++)delete a[b].target;d.U.send("intersection",y({changes:a}))},{threshold:ra});this.A.tick(this.J.getRect());this.fire=function(){d.S&&d.P&&d.A.tick(d.J.getRect())}}
function ta(a){a.S=!0;a.A.observe(a.L.element);a.L.getVsync().measure(function(){a.P=a.L.isInViewport();a.fire()});var b=a.J.onScroll(a.fire),c=a.J.onChanged(a.fire);a.I=function(){b();c()}}U.prototype.onViewportCallback=function(a){this.P=a};U.prototype.destroy=function(){this.S=!1;this.A=null;this.I&&(this.I(),this.I=null);this.U.destroy();this.U=null};
function V(a,b){this.W=a;var c=b&&b.threshold,c=c?Array.isArray(c)?c:[c]:[0];for(a=0;a<c.length;a++);this.$=c.sort();this.R=null;this.Y=void 0;this.j=[]}V.prototype.disconnect=function(){this.j.length=0};V.prototype.observe=function(a){for(var b=0;b<this.j.length;b++)if(this.j[b].element===a){v().warn("INTERSECTION-OBSERVER","should observe same element once");return}var c={element:a,currentThresholdSlot:0};this.R&&(a=W(this,c,this.R,this.Y))&&this.W([a]);this.j.push(c)};
V.prototype.unobserve=function(a){for(var b=0;b<this.j.length;b++)if(this.j[b].element===a){this.j.splice(b,1);return}v().warn("INTERSECTION-OBSERVER","unobserve non-observed element")};V.prototype.tick=function(a,b){b&&(a=O(a,-b.left,-b.top),b=O(b,-b.left,-b.top));this.R=a;this.Y=b;for(var c=[],d=0;d<this.j.length;d++){var e=W(this,this.j[d],a,b);e&&c.push(e)}c.length&&this.W(c)};
function W(a,b,c,d){var e=b.element,f=null,g=e.getLayoutBox(),h=e.getOwner(),f=h&&h.getLayoutBox(),n=ia(g,f,c,d)||N(0,0,0,0),h=n,k=g,h=h.width*h.height/(k.width*k.height);a=a.$;var k=0,m=a.length;if(0==h)a=0;else{for(var r=(k+m)/2|0;k<r;)h<a[r]?m=r:k=r,r=(k+m)/2|0;a=m}var p=a;if(p==b.currentThresholdSlot)return null;b.currentThresholdSlot=p;c=d?null:c;d=n;a=g;if(k=c)d=O(d,-c.left,-c.top),a=O(a,-c.left,-c.top),k=O(k,-c.left,-c.top);var E={time:"undefined"!==typeof performance&&performance.now?performance.now():
Date.now()-sa,rootBounds:k,boundingClientRect:a,intersectionRect:d,intersectionRatio:h,target:e};return E};var ua="allowfullscreen allowpaymentrequest allowtransparency allow frameborder referrerpolicy scrolling".split(" "),va=0,X=0;function Y(a){a=AMP.BaseElement.call(this,a)||this;a.H=null;a.F=!1;a.O=!1;a.B=!1;a.X=!1;a.M=null;a.h=null;a.G=!1;a.l=null;a.o="";a.iframeSrc=null;a.D=null;a.m=null;return a}aa(Y,AMP.BaseElement);l=Y.prototype;l.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
function Z(a,b,c){var d=window.location.href;c=void 0===c?"":c;a=a.element;var e=z(a,"url"),f=e.parse(b),g=f.hostname,h=f.protocol,f=f.origin;u().assert(e.isSecure(b)||"data:"==h,"Invalid <amp-iframe> src. Must start with https://. Found %s",a);var n=e.parse(d);u().assert(!wa(c,"allow-same-origin")||f!=n.origin&&"data:"!=h,"Origin of <amp-iframe> must not be equal to container %sif allow-same-origin is set. See https://github.com/ampproject/amphtml/blob/master/spec/amp-iframe-origin-policy.md for details.",
a);u().assert(!(F(g,"."+ea.thirdPartyFrameHost)||F(g,".ampproject.org")),"amp-iframe does not allow embedding of frames from ampproject.*: %s",b);return b}
function xa(a){var b=a.element.getLayoutBox(),c=Math.min(600,.75*a.getViewport().getSize().height);u().assert(b.top>=c,"<amp-iframe> elements must be positioned outside the first 75% of the viewport or 600px from the top (whichever is smaller): %s  Current position %s. Min: %sPositioning rules don't apply for iframes that use `placeholder`.See https://github.com/ampproject/amphtml/blob/master/extensions/amp-iframe/amp-iframe.md#iframe-with-placeholder for details.",a.element,b.top,c)}
function wa(a,b){var c=new RegExp("\\s"+b+"\\s","i");return c.test(" "+a+" ")}function ya(a,b){if(b){a=z(a.element,"url").parse(b);var c=a.hash;"data:"==a.protocol||c&&"#"!=c||(a=b.indexOf("#"),b=(-1==a?b:b.substring(0,a))+"#amp=1");return b}}
l.firstAttachedCallback=function(){this.o=this.element.getAttribute("sandbox");var a;if(!(a=ya(this,this.element.getAttribute("src")))){a=this.element.getAttribute("srcdoc");var b=this.o;if(a){u().assert(!(" "+b+" ").match(/\s+allow-same-origin\s+/i),"allow-same-origin is not allowed with the srcdoc attribute %s.",this.element);if("undefined"!==typeof TextEncoder)b=(new TextEncoder("utf-8")).encode(a);else{a=unescape(encodeURIComponent(a));for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=
a.charCodeAt(c)}a=btoa;for(var c=Array(b.length),d=0;d<b.length;d++)c[d]=String.fromCharCode(b[d]);a="data:text/html;charset=utf-8;base64,"+a(c.join(""))}else a=void 0}var e=a;this.iframeSrc=Z(this,e,this.o)};l.preconnectCallback=function(a){this.iframeSrc&&this.preconnect.url(this.iframeSrc,a)};
l.buildCallback=function(){this.H=this.getPlaceholder();this.F=!!this.H;(this.G=this.element.hasAttribute("resizable"))&&this.element.setAttribute("scrolling","no");this.element.hasAttribute("frameborder")||this.element.setAttribute("frameborder","0");var a;a=this.element;if("no"!=a.getAttribute("scrolling")){var b=a.ownerDocument.createElement("i-amphtml-scroll-container");a.appendChild(b);a=b}this.D=a;za(this)};
l.onLayoutMeasure=function(){Aa(this);var a=this.element,b;a:{var c=a.getLayoutBox();b=c.height;for(var c=c.width,d=0;d<T.length;d++){var e=T[d][0],f=T[d][1];if(!(f>b||e>c)&&20>=b-f&&20>=c-e){b=!0;break a}}b=!1}this.O=b;b=this.element;c=b.getLayoutBox();this.B=10<c.width||10<c.height?!1:!da(b);if(b=this.O){b=this.win;c=!1;d=0;do ka[a.tagName]?(d++,c=!1):(e=(b.getComputedStyle(a)||x()).position,"fixed"!=e&&"sticky"!=e||(c=!0)),a=a.parentElement;while(a&&"BODY"!=a.tagName);b=!(!c&&1>=d)}this.X=b;this.l&&
this.l.fire()};function Aa(a){if(a.h){var b=a.getViewport().getLayoutRect(a.h),c=a.getLayoutBox();a.M=O(b,-c.left,-c.top)}}l.getIntersectionElementLayoutBox=function(){if(!this.h)return AMP.BaseElement.prototype.getIntersectionElementLayoutBox.call(this);var a=this.getLayoutBox();this.M||Aa(this);return O(this.M,a.left,a.top)};
l.layoutCallback=function(){var a=this;u().assert(!this.X,"amp-iframe is not used for displaying fixed ad. Please use amp-sticky-ad and amp-ad instead.");this.F||xa(this);this.G&&u().assert(this.getOverflowElement(),"Overflow element must be defined for resizable frames: %s",this.element);if(!this.iframeSrc)return Promise.resolve();if(this.B&&(X++,1<X))return console.error("Only 1 analytics/tracking iframe allowed per page. Please use amp-analytics instead or file a GitHub issue for your use case: https://github.com/ampproject/amphtml/issues/new"),
Promise.resolve();var b=this.element.ownerDocument.createElement("iframe");this.h=b;this.applyFillContent(b);b.name="amp_iframe"+va++;this.F&&M(b,-1);this.propagateAttributes(ua,b);Ba(b,this.o);b.src=this.iframeSrc;this.B||(this.l=new U(this,b));b.onload=function(){b.readyState="complete";a.V();a.B&&(a.iframeSrc=null,D(a.win,"timer").promise(5E3).then(function(){b.parentElement&&b.parentElement.removeChild(b);a.element.setAttribute("amp-removed","");a.h=null}))};R(b,"embed-size",function(b){Ca(a,
b.height,b.width)});this.F&&R(b,"embed-ready",this.V.bind(this));this.D.appendChild(b);return this.loadPromise(b).then(function(){a.D!=a.element&&D(a.win,"timer").delay(function(){a.mutateElement(function(){a.D.classList.add("amp-active")})},1E3)})};l.unlayoutOnPause=function(){return!0};l.unlayoutCallback=function(){if(this.h){var a=this.h;a.parentElement&&a.parentElement.removeChild(a);this.H&&this.togglePlaceholder(!0);this.h=null;this.l&&(this.l.destroy(),this.l=null)}return!0};
l.viewportCallback=function(a){if(this.l)this.l.onViewportCallback(a)};l.getLayoutPriority=function(){return this.O?2:this.B?1:AMP.BaseElement.prototype.getLayoutPriority.call(this)};l.mutatedAttributesCallback=function(a){var b=a.src;void 0!==b&&(this.iframeSrc=ya(this,b),this.h&&(this.h.src=Z(this,this.iframeSrc,this.o)))};l.V=function(){var a=this;this.H&&this.getVsync().mutate(function(){a.h&&(M(a.h,0),a.togglePlaceholder(!1))})};l.firstLayoutCompleted=function(){};
l.throwIfCannotNavigate=function(){if(!wa(this.o,"allow-top-navigation"))throw u().createError('"AMP.navigateTo" is only allowed on <amp-iframe> when its "sandbox" attribute contains "allow-top-navigation".');};
function Ca(a,b,c){if(a.G)if(100>b)a.user().error("amp-iframe","Ignoring embed-size request because the resize height is less than 100px. If you are using amp-iframe to display ads, consider using amp-ad instead.",a.element);else{var d,e;b=parseInt(b,10);isNaN(b)||(d=Math.max(b+(a.element.offsetHeight-a.h.offsetHeight),b));c=parseInt(c,10);isNaN(c)||(e=Math.max(c+(a.element.offsetWidth-a.h.offsetWidth),c));void 0!==d||void 0!==e?a.attemptChangeSize(d,e).then(function(){void 0!==d&&a.element.setAttribute("height",
d);void 0!==e&&a.element.setAttribute("width",e)},function(){}):a.user().error("amp-iframe","Ignoring embed-size request because no width or height value is provided",a.element)}else a.user().error("amp-iframe","Ignoring embed-size request because this iframe is not resizable",a.element)}
function za(a){if(ga(a.win)){var b=a.element,c=b.getAttribute("src");c&&(a.m=z(b,"url").parse(c).origin);a.registerAction("postMessage",function(b){a.m?a.h.contentWindow.postMessage(b.args,a.m):u().error("amp-iframe",'"postMessage" action is only allowed with "src"attribute with an origin.')},100);if(a.m){var d=10,e=0,f=function(b){if(b.source===a.h.contentWindow)if(b.origin!==a.m)u().error("amp-iframe",'"message" received from unexpected origin: '+b.origin+". Only allowed from: "+a.m);else{var c;
a.getAmpDoc().getRootNode().activeElement!==a.h?c=!1:(c=a.win.document.createElement("audio"),c.play(),c=c.paused?!1:!0);if(c){var g=b.data,k;try{k=JSON.parse(JSON.stringify(g))}catch(p){u().error("amp-iframe",'Data from "message" event must be JSON.');return}var m=a.win;b=y({data:k});c={detail:b};Object.assign(c,void 0);"function"==typeof m.CustomEvent?b=new m.CustomEvent("amp-iframe:message",c):(m=m.document.createEvent("CustomEvent"),m.initCustomEvent("amp-iframe:message",!!c.bubbles,!!c.cancelable,
b),b=m);var r=z(a.getAmpDoc(),"action");r.trigger(a.element,"message",b,100)}else e++,u().error("amp-iframe",'"message" event may only be triggered from a user gesture.'),e>=d&&(u().error("amp-iframe",'Too many non-gesture-triggered "message" events; detaching event listener.'),a.win.removeEventListener("message",f))}};a.win.addEventListener("message",f)}}}l.ba=function(a){this.m=a};function Ba(a,b){var c=b||"";a.setAttribute("sandbox",c)}(function(a){a.registerElement("amp-iframe",Y)})(self.AMP);
})});
//# sourceMappingURL=amp-iframe-0.1.js.map

