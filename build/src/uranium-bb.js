(function(){function f(a,b){var c;if(typeof a==o){var i=a,s=b.firstChild===null?{UL:"LI",DL:"DT",TR:"TD"}[b.tagName]||b.tagName:b.firstChild.tagName;c={};var e=/^<([A-Z][A-Z0-9]*)([^>]*)>([\s\S]*)<\/\1>/i,d,g;g=0;var l;if(e.test(i)){e=e.exec(i);s=e[1];if(e[2]!=="")for(i=e[2].split(/([A-Z]*\s*=\s*['|"][A-Z0-9:;#\s]*['|"])/i);g<i.length;g++)l=i[g].replace(/^\s*|\s*$/g,""),l!==""&&l!==" "&&(l=l.split("="),c[l[0]]=l[1].replace(/(["']?)/g,""));i=e[3]}s=m.createElement(s);for(d in c)g=m.createAttribute(d),
g.nodeValue=c[d],s.setAttributeNode(g);s.innerHTML=i;c=s}else c=a;return c}function j(a){var b=/\S/;a.each(function(a){for(var i=a.firstChild,s=-1,e;i;)e=i.nextSibling,i.nodeType==3&&!b.test(i.nodeValue)?a.removeChild(i):i.nodeIndex=++s,i=e})}function e(a){if(a._xuiEventID)return a._xuiEventID;return a._xuiEventID=++e.id}function d(a,b){var c=r[a]=r[a]||{};return c[b]=c[b]||[]}function t(a,b,c){var i=e(a),b=d(i,b),i=function(b){c.call(a,b)===!1&&(b.preventDefault(),b.stopPropagation())};i.guid=c.guid=
c.guid||++e.id;i.handler=c;b.push(i);return i}var g,k=this,o=new String("string"),m=k.document,p=/^#?([\w-]+)$/,w=/^#/,F=/<([\w:]+)/,n=function(a){return[].slice.call(a,0)};try{n(m.documentElement.childNodes)}catch(H){n=function(a){for(var b=[],c=0;a[c];c++)b.push(a[c]);return b}}k.x$=k.xui=g=function(a,b){return new g.fn.find(a,b)};if(![].forEach)Array.prototype.forEach=function(a,b){var c=this.length||0,i=0;if(typeof a=="function")for(;i<c;i++)a.call(b,this[i],i,this)};g.fn=g.prototype={extend:function(a){for(var b in a)g.fn[b]=
a[b]},find:function(a,b){var c=[],i;if(a)if(b==void 0&&this.length)c=this.each(function(b){c=c.concat(n(g(a,b)))}).reduce(c);else if(b=b||m,typeof a==o)p.test(a)&&b.getElementById&&b.getElementsByTagName?(c=w.test(a)?[b.getElementById(a.substr(1))]:b.getElementsByTagName(a),c[0]==null&&(c=[])):F.test(a)?(i=m.createElement("i"),i.innerHTML=a,n(i.childNodes).forEach(function(a){c.push(a)})):c=k.Sizzle!==void 0?Sizzle(a,b):b.querySelectorAll(a),c=n(c);else if(a instanceof Array)c=a;else if(a.toString()==
"[object NodeList]")c=n(a);else{if(a.nodeName||a===k)c=[a]}else return this;return this.set(c)},set:function(a){var b=g();b.cache=n(this.length?this:[]);b.length=0;[].push.apply(b,a);return b},reduce:function(a,b){var c=[],a=a||n(this);a.forEach(function(a){c.indexOf(a,0,b)<0&&c.push(a)});return c},has:function(a){var b=g(a);return this.filter(function(){var a=this,i=null;b.each(function(b){i=i||b==a});return i})},filter:function(a){var b=[];return this.each(function(c,i){a.call(c,i)&&b.push(c)}).set(b)},
not:function(a){var b=n(this);return this.filter(function(c){var i;g(a).each(function(a){return i=b[c]!=a});return i})},each:function(a){for(var b=0,c=this.length;b<c;++b)if(a.call(this[b],this[b],b,this)===!1)break;return this}};g.fn.find.prototype=g.fn;g.extend=g.fn.extend;g.extend({html:function(a,b){j(this);if(arguments.length==0)return this[0].innerHTML;arguments.length==1&&arguments[0]!="remove"&&(b=a,a="inner");if(a!="remove"&&b&&b.each!==void 0){if(a=="inner"){var c=m.createElement("p");b.each(function(a){c.appendChild(a)});
this.each(function(a){a.innerHTML=c.innerHTML})}else{var i=this;b.each(function(b){i.html(a,b)})}return this}return this.each(function(c){var i,e=0;if(a=="inner")if(typeof b==o||typeof b=="number"){c.innerHTML=b;c=c.getElementsByTagName("SCRIPT");for(i=c.length;e<i;e++)eval(c[e].text)}else c.innerHTML="",c.appendChild(b);else a=="outer"?c.parentNode.replaceChild(f(b,c),c):a=="top"?c.insertBefore(f(b,c),c.firstChild):a=="bottom"?c.insertBefore(f(b,c),null):a=="remove"?c.parentNode.removeChild(c):a==
"before"?c.parentNode.insertBefore(f(b,c.parentNode),c):a=="after"&&c.parentNode.insertBefore(f(b,c.parentNode),c.nextSibling)})},attr:function(a,b){if(arguments.length==2)return this.each(function(c){a=="checked"&&(b==""||b==!1||typeof b=="undefined")?c.removeAttribute(a):c.setAttribute(a,b)});else{var c=[];this.each(function(b){b=b.getAttribute(a);b!=null&&c.push(b)});return c}}});"inner outer top bottom remove before after".split(" ").forEach(function(a){g.fn[a]=function(a){return function(c){return this.html(a,
c)}}(a)});g.events={};var r={};g.extend({on:function(a,b,c){return this.each(function(i){if(g.events[a]){var f=e(i),f=d(f,a);c=c||{};c.handler=function(b,c){g.fn.fire.call(g(this),a,c)};f.length||g.events[a].call(i,c)}i.addEventListener(a,t(i,a,b),!1)})},un:function(a,b){return this.each(function(c){for(var i=e(c),g=d(i,a),f=g.length;f--;)if(b===void 0||b.guid===g[f].guid){c.removeEventListener(a,g[f],!1);var k=r[i][a],x=f,l=k.slice(2);k.length=x<0?k.length+x:x;k.push.apply(k,l)}r[i][a].length===
0&&delete r[i][a];for(var j in r[i])return;delete r[i]})},fire:function(a,b){return this.each(function(c){if(c==m&&!c.dispatchEvent)c=m.documentElement;var e=m.createEvent("HTMLEvents");e.initEvent(a,!0,!0);e.data=b||{};e.eventName=a;c.dispatchEvent(e)})}});"click load submit touchstart touchmove touchend touchcancel gesturestart gesturechange gestureend orientationchange".split(" ").forEach(function(a){g.fn[a]=function(a){return function(c){return c?this.on(a,c):this.fire(a)}}(a)});g(k).on("load",
function(){"onorientationchange"in m.body||function(a,b){g(k).on("resize",function(){var c=k.innerWidth<a&&k.innerHeight>b&&k.innerWidth<k.innerHeight,e=k.innerWidth>a&&k.innerHeight<b&&k.innerWidth>k.innerHeight;if(c||e)k.orientation=c?0:90,g("body").fire("orientationchange"),a=k.innerWidth,b=k.innerHeight})}(k.innerWidth,k.innerHeight)});var y;try{y=!!m.createEvent("TouchEvent").initTouchEvent}catch(I){y=!1}g.touch=y;e.id=1;g.extend({tween:function(a,b){a instanceof Array&&a.forEach(function(){});
var c=function(){var c={};"duration after easing".split(" ").forEach(function(b){a[b]&&(c[b]=a[b],delete a[b])});return c}(a),e=function(a){var b=[],c;if(typeof a!=o){for(c in a)b.push(c+":"+a[c]);b=b.join(";")}else b=a;return b}(a);return this.each(function(a){emile(a,e,c,b)})}});var A=/^(\s|\u00A0)+|(\s|\u00A0)+$/g;g.extend({setStyle:function(a,b){a=a.replace(/\-[a-z]/g,function(a){return a[1].toUpperCase()});return this.each(function(c){c.style[a]=b})},getStyle:function(a,b){var c=function(a,b){return m.defaultView.getComputedStyle(a,
"").getPropertyValue(b.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()}))};if(b===void 0){var e=[];this.each(function(b){e.push(c(b,a))});return e}else this.each(function(e){b(c(e,a))})},addClass:function(a){return this.each(function(b){if(z(a).test(b.className)===!1)b.className=(b.className+" "+a||"").replace(A,"")})},hasClass:function(a,b){var c=this;return this.length&&function(){var e=!1;c.each(function(c){z(a).test(c.className)&&(e=!0,b&&b(c))});return e}()},removeClass:function(a){if(a===
void 0)this.each(function(a){a.className=""});else{var b=z(a);this.each(function(a){var e;e=(a.className.replace(b,"$1")||"").replace(A,"");a.className=e})}return this},css:function(a){for(var b in a)this.setStyle(b,a[b]);return this}});var B={},z=function(a){var b=B[a];b||(b=RegExp("(^|\\s+)"+a+"(?:\\s+|$)"),B[a]=b);return b};g.extend({xhr:function(a,b,c){function e(){f.readyState==4&&(delete d.xmlHttpRequest,(f.status===0||f.status==200)&&f.handleResp(),/^[45]/.test(f.status)&&f.handleError())}
/^(inner|outer|top|bottom|before|after)$/.test(a)||(c=b,b=a,a="inner");var g=c?c:{};if(typeof c=="function")g={},g.callback=c;var d=this,f=new XMLHttpRequest,c=g.method||"get",k=g.async||!1,l=g.data||null,j=0;f.queryString=l;f.open(c,b,k);if(g.headers)for(;j<g.headers.length;j++)f.setRequestHeader(g.headers[j].name,g.headers[j].value);f.handleResp=g.callback!=null?g.callback:function(){d.html(a,this.responseText)};f.handleError=g.error&&typeof g.error=="function"?g.error:function(){};if(k)f.onreadystatechange=
e,this.xmlHttpRequest=f;f.send(l);k||e();return this}});(function(a,b){function c(a,b,c){return(a+(b-a)*c).toFixed(3)}function e(a,b,c){for(var g=2,f,d,i=[],k=[];f=3,d=arguments[g-1],g--;)if(d.substr(0,1)=="r")for(d=d.match(/\d+/g);f--;)i.push(~~d[f]);else for(d.length==4&&(d="#"+d.substr(1,1)+d.substr(1,1)+d.substr(2,1)+d.substr(2,1)+d.substr(3,1)+d.substr(3,1));f--;)i.push(parseInt(d.substr(1+f*2,2),16));for(;f--;)g=~~(i[f+3]+(i[f]-i[f+3])*c),k.push(g<0?0:g>255?255:g);return"rgb("+k.join(",")+")"}
function g(a){var b=parseFloat(a),a=a.replace(/^[\-\d\.]+/,"");return isNaN(b)?{v:a,f:e,u:""}:{v:b,f:c,u:a}}function f(a){var b={},c=k.length,e;d.innerHTML='<div style="'+a+'"></div>';for(a=d.childNodes[0].style;c--;)if(e=a[k[c]])b[k[c]]=g(e);return b}var d=m.createElement("div"),k="backgroundColor borderBottomColor borderBottomWidth borderLeftColor borderLeftWidth borderRightColor borderRightWidth borderSpacing borderTopColor borderTopWidth bottom color fontSize fontWeight height left letterSpacing lineHeight marginBottom marginLeft marginRight marginTop maxHeight maxWidth minHeight minWidth opacity outlineColor outlineOffset outlineWidth paddingBottom paddingLeft paddingRight paddingTop right textIndent top width wordSpacing zIndex".split(" ");
b[a]=function(a,b,c,e){var a=typeof a=="string"?m.getElementById(a):a,c=c||{},d=f(b),b=a.currentStyle?a.currentStyle:getComputedStyle(a,null),i,k={},j=+new Date,h=c.duration||200,C=j+h,D,G=c.easing||function(h){return-Math.cos(h*Math.PI)/2+0.5};for(i in d)k[i]=g(b[i]);D=setInterval(function(){var b=+new Date,g=b>C?1:(b-j)/h;for(i in d)a.style[i]=d[i].f(k[i].v,d[i].v,G(g))+d[i].u;b>C&&(clearInterval(D),c.after&&c.after(),e&&setTimeout(e,1))},10)}})("emile",this);(function(){function a(h,a,b,c,e,g){for(var e=
0,d=c.length;e<d;e++){var f=c[e];if(f){for(var f=f[h],j=!1;f;){if(f.sizcache===b){j=c[f.sizset];break}if(f.nodeType===1&&!g)f.sizcache=b,f.sizset=e;if(f.nodeName.toLowerCase()===a){j=f;break}f=f[h]}c[e]=j}}}function b(h,a,b,c,e,g){for(var e=0,d=c.length;e<d;e++){var f=c[e];if(f){for(var f=f[h],i=!1;f;){if(f.sizcache===b){i=c[f.sizset];break}if(f.nodeType===1){if(!g)f.sizcache=b,f.sizset=e;if(typeof a!=="string"){if(f===a){i=!0;break}}else if(j.filter(a,[f]).length>0){i=f;break}}f=f[h]}c[e]=i}}}var c=
/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,e=0,g=Object.prototype.toString,d=!1,f=!0;[0,0].sort(function(){f=!1;return 0});var j=function(h,a,b,e){var b=b||[],f=a=a||m;if(a.nodeType!==1&&a.nodeType!==9)return[];if(!h||typeof h!=="string")return b;var d=[],i,k,q,o,p=!0,r=j.isXML(a),E=h,v;do if(c.exec(""),i=c.exec(E))if(E=i[3],d.push(i[1]),i[2]){o=i[3];break}while(i);if(d.length>1&&t.exec(h))if(d.length===2&&
l.relative[d[0]])k=w(d[0]+d[1],a);else for(k=l.relative[d[0]]?[a]:j(d.shift(),a);d.length;)h=d.shift(),l.relative[h]&&(h+=d.shift()),k=w(h,k);else if(!e&&d.length>1&&a.nodeType===9&&!r&&l.match.ID.test(d[0])&&!l.match.ID.test(d[d.length-1])&&(i=j.find(d.shift(),a,r),a=i.expr?j.filter(i.expr,i.set)[0]:i.set[0]),a){i=e?{expr:d.pop(),set:n(e)}:j.find(d.pop(),d.length===1&&(d[0]==="~"||d[0]==="+")&&a.parentNode?a.parentNode:a,r);k=i.expr?j.filter(i.expr,i.set):i.set;for(d.length>0?q=n(k):p=!1;d.length;)i=
v=d.pop(),l.relative[v]?i=d.pop():v="",i==null&&(i=a),l.relative[v](q,i,r)}else q=[];q||(q=k);q||j.error(v||h);if(g.call(q)==="[object Array]")if(p)if(a&&a.nodeType===1)for(h=0;q[h]!=null;h++)q[h]&&(q[h]===!0||q[h].nodeType===1&&j.contains(a,q[h]))&&b.push(k[h]);else for(h=0;q[h]!=null;h++)q[h]&&q[h].nodeType===1&&b.push(k[h]);else b.push.apply(b,q);else n(q,b);o&&(j(o,f,b,e),j.uniqueSort(b));return b};j.uniqueSort=function(h){if(u&&(d=f,h.sort(u),d))for(var a=1;a<h.length;a++)h[a]===h[a-1]&&h.splice(a--,
1);return h};j.matches=function(h,a){return j(h,null,null,a)};j.find=function(h,a,b){var c;if(!h)return[];for(var d=0,e=l.order.length;d<e;d++){var f=l.order[d],g;if(g=l.leftMatch[f].exec(h)){var i=g[1];g.splice(1,1);if(i.substr(i.length-1)!=="\\"&&(g[1]=(g[1]||"").replace(/\\/g,""),c=l.find[f](g,a,b),c!=null)){h=h.replace(l.match[f],"");break}}}c||(c=a.getElementsByTagName("*"));return{set:c,expr:h}};j.filter=function(h,a,b,c){for(var d=h,e=[],f=a,g,i,k=a&&a[0]&&j.isXML(a[0]);h&&a.length;){for(var m in l.filter)if((g=
l.leftMatch[m].exec(h))!=null&&g[2]){var t=l.filter[m],o,p;p=g[1];i=!1;g.splice(1,1);if(p.substr(p.length-1)!=="\\"){f===e&&(e=[]);if(l.preFilter[m])if(g=l.preFilter[m](g,f,b,e,c,k)){if(g===!0)continue}else i=o=!0;if(g)for(var n=0;(p=f[n])!=null;n++)if(p){o=t(p,g,n,f);var r=c^!!o;b&&o!=null?r?i=!0:f[n]=!1:r&&(e.push(p),i=!0)}if(o!==void 0){b||(f=e);h=h.replace(l.match[m],"");if(!i)return[];break}}}if(h===d)if(i==null)j.error(h);else break;d=h}return f};j.error=function(h){throw"Syntax error, unrecognized expression: "+
h;};var l=j.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+\-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},
leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(h){return h.getAttribute("href")}},relative:{"+":function(h,a){var b=typeof a==="string",c=b&&!/\W/.test(a),b=b&&!c;c&&(a=a.toLowerCase());for(var c=0,e=h.length,d;c<e;c++)if(d=h[c]){for(;(d=d.previousSibling)&&d.nodeType!==1;);h[c]=b||d&&d.nodeName.toLowerCase()===a?d||!1:d===a}b&&j.filter(a,h,!0)},">":function(h,a){var b=typeof a==="string",c,d=0,e=h.length;if(b&&!/\W/.test(a))for(a=a.toLowerCase();d<e;d++){if(c=
h[d])b=c.parentNode,h[d]=b.nodeName.toLowerCase()===a?b:!1}else{for(;d<e;d++)(c=h[d])&&(h[d]=b?c.parentNode:c.parentNode===a);b&&j.filter(a,h,!0)}},"":function(h,c,d){var f=e++,g=b,j;typeof c==="string"&&!/\W/.test(c)&&(j=c=c.toLowerCase(),g=a);g("parentNode",c,f,h,j,d)},"~":function(h,c,d){var f=e++,g=b,j;typeof c==="string"&&!/\W/.test(c)&&(j=c=c.toLowerCase(),g=a);g("previousSibling",c,f,h,j,d)}},find:{ID:function(h,a,b){if(typeof a.getElementById!=="undefined"&&!b)return(h=a.getElementById(h[1]))?
[h]:[]},NAME:function(h,a){if(typeof a.getElementsByName!=="undefined"){for(var b=[],c=a.getElementsByName(h[1]),d=0,e=c.length;d<e;d++)c[d].getAttribute("name")===h[1]&&b.push(c[d]);return b.length===0?null:b}},TAG:function(h,a){return a.getElementsByTagName(h[1])}},preFilter:{CLASS:function(h,a,b,c,d,e){h=" "+h[1].replace(/\\/g,"")+" ";if(e)return h;for(var e=0,f;(f=a[e])!=null;e++)f&&(d^(f.className&&(" "+f.className+" ").replace(/[\t\n]/g," ").indexOf(h)>=0)?b||c.push(f):b&&(a[e]=!1));return!1},
ID:function(h){return h[1].replace(/\\/g,"")},TAG:function(h){return h[1].toLowerCase()},CHILD:function(h){if(h[1]==="nth"){var a=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(h[2]==="even"&&"2n"||h[2]==="odd"&&"2n+1"||!/\D/.test(h[2])&&"0n+"+h[2]||h[2]);h[2]=a[1]+(a[2]||1)-0;h[3]=a[3]-0}h[0]=e++;return h},ATTR:function(h,a,b,c,d,e){a=h[1].replace(/\\/g,"");!e&&l.attrMap[a]&&(h[1]=l.attrMap[a]);h[2]==="~="&&(h[4]=" "+h[4]+" ");return h},PSEUDO:function(a,b,d,e,f){if(a[1]==="not")if((c.exec(a[3])||"").length>1||
/^\w/.test(a[3]))a[3]=j(a[3],null,null,b);else return a=j.filter(a[3],b,d,1^f),d||e.push.apply(e,a),!1;else if(l.match.POS.test(a[0])||l.match.CHILD.test(a[0]))return!0;return a},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},
has:function(a,b,c){return!!j(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){return"text"===a.type},radio:function(a){return"radio"===a.type},checkbox:function(a){return"checkbox"===a.type},file:function(a){return"file"===a.type},password:function(a){return"password"===a.type},submit:function(a){return"submit"===a.type},image:function(a){return"image"===a.type},reset:function(a){return"reset"===a.type},button:function(a){return"button"===a.type||a.nodeName.toLowerCase()===
"button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=l.filters[e];if(f)return f(a,c,b,d);else if(e==="contains")return(a.textContent||
a.innerText||j.getText([a])||"").indexOf(b[3])>=0;else if(e==="not"){b=b[3];c=0;for(d=b.length;c<d;c++)if(b[c]===a)return!1;return!0}else j.error("Syntax error, unrecognized expression: "+e)},CHILD:function(a,b){var c=b[1],d=a;switch(c){case "only":case "first":for(;d=d.previousSibling;)if(d.nodeType===1)return!1;if(c==="first")return!0;d=a;case "last":for(;d=d.nextSibling;)if(d.nodeType===1)return!1;return!0;case "nth":var c=b[2],e=b[3];if(c===1&&e===0)return!0;var f=b[0],g=a.parentNode;if(g&&(g.sizcache!==
f||!a.nodeIndex)){for(var i=0,d=g.firstChild;d;d=d.nextSibling)if(d.nodeType===1)d.nodeIndex=++i;g.sizcache=f}d=a.nodeIndex-e;return c===0?d===0:d%c===0&&d/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],c=l.attrHandle[c]?l.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),d=
c+"",e=b[2],f=b[4];return c==null?e==="!=":e==="="?d===f:e==="*="?d.indexOf(f)>=0:e==="~="?(" "+d+" ").indexOf(f)>=0:!f?d&&c!==!1:e==="!="?d!==f:e==="^="?d.indexOf(f)===0:e==="$="?d.substr(d.length-f.length)===f:e==="|="?d===f||d.substr(0,f.length+1)===f+"-":!1},POS:function(a,b,c,d){var e=l.setFilters[b[2]];if(e)return e(a,c,b,d)}}},t=l.match.POS,o=function(a,b){return"\\"+(b-0+1)},p;for(p in l.match)l.match[p]=RegExp(l.match[p].source+/(?![^\[]*\])(?![^\(]*\))/.source),l.leftMatch[p]=RegExp(/(^(?:.|\r|\n)*?)/.source+
l.match[p].source.replace(/\\(\d+)/g,o));var n=function(a,b){a=Array.prototype.slice.call(a,0);if(b)return b.push.apply(b,a),b;return a};try{Array.prototype.slice.call(m.documentElement.childNodes,0)}catch(r){n=function(a,b){var c=b||[],d=0;if(g.call(a)==="[object Array]")Array.prototype.push.apply(c,a);else if(typeof a.length==="number")for(var e=a.length;d<e;d++)c.push(a[d]);else for(;a[d];d++)c.push(a[d]);return c}}var u;m.documentElement.compareDocumentPosition?u=function(a,b){if(!a.compareDocumentPosition||
!b.compareDocumentPosition)return a==b&&(d=!0),a.compareDocumentPosition?-1:1;var c=a.compareDocumentPosition(b)&4?-1:a===b?0:1;c===0&&(d=!0);return c}:"sourceIndex"in m.documentElement?u=function(a,b){if(!a.sourceIndex||!b.sourceIndex)return a==b&&(d=!0),a.sourceIndex?-1:1;var c=a.sourceIndex-b.sourceIndex;c===0&&(d=!0);return c}:m.createRange&&(u=function(a,b){if(!a.ownerDocument||!b.ownerDocument)return a==b&&(d=!0),a.ownerDocument?-1:1;var c=a.ownerDocument.createRange(),e=b.ownerDocument.createRange();
c.setStart(a,0);c.setEnd(a,0);e.setStart(b,0);e.setEnd(b,0);c=c.compareBoundaryPoints(Range.START_TO_END,e);c===0&&(d=!0);return c});j.getText=function(a){for(var b="",c,d=0;a[d];d++)c=a[d],c.nodeType===3||c.nodeType===4?b+=c.nodeValue:c.nodeType!==8&&(b+=j.getText(c.childNodes));return b};(function(){var a=m.createElement("div"),b="script"+(new Date).getTime();a.innerHTML="<a name='"+b+"'/>";var c=m.documentElement;c.insertBefore(a,c.firstChild);if(m.getElementById(b))l.find.ID=function(a,b,c){if(typeof b.getElementById!==
"undefined"&&!c)return(b=b.getElementById(a[1]))?b.id===a[1]||typeof b.getAttributeNode!=="undefined"&&b.getAttributeNode("id").nodeValue===a[1]?[b]:void 0:[]},l.filter.ID=function(a,b){var c=typeof a.getAttributeNode!=="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b};c.removeChild(a);c=a=null})();(function(){var a=m.createElement("div");a.appendChild(m.createComment(""));if(a.getElementsByTagName("*").length>0)l.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);
if(a[1]==="*"){for(var d=[],e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c};a.innerHTML="<a href='#'></a>";if(a.firstChild&&typeof a.firstChild.getAttribute!=="undefined"&&a.firstChild.getAttribute("href")!=="#")l.attrHandle.href=function(a){return a.getAttribute("href",2)};a=null})();m.querySelectorAll&&function(){var a=j,b=m.createElement("div");b.innerHTML="<p class='TEST'></p>";if(!(b.querySelectorAll&&b.querySelectorAll(".TEST").length===0)){j=function(b,c,d,e){c=c||m;if(!e&&c.nodeType===
9&&!j.isXML(c))try{return n(c.querySelectorAll(b),d)}catch(f){}return a(b,c,d,e)};for(var c in a)j[c]=a[c];b=null}}();(function(){var a=m.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(a.getElementsByClassName&&a.getElementsByClassName("e").length!==0&&(a.lastChild.className="e",a.getElementsByClassName("e").length!==1))l.order.splice(1,0,"CLASS"),l.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!=="undefined"&&!c)return b.getElementsByClassName(a[1])},
a=null})();j.contains=m.compareDocumentPosition?function(a,b){return!!(a.compareDocumentPosition(b)&16)}:function(a,b){return a!==b&&(a.contains?a.contains(b):!0)};j.isXML=function(a){return(a=(a?a.ownerDocument||a:0).documentElement)?a.nodeName!=="HTML":!1};var w=function(a,b){for(var c=[],d="",e,f=b.nodeType?[b]:b;e=l.match.PSEUDO.exec(a);)d+=e[0],a=a.replace(l.match.PSEUDO,"");a=l.relative[a]?a+"*":a;e=0;for(var g=f.length;e<g;e++)j(a,f[e],c);return j.filter(d,c)};k.Sizzle=j})()})();typeof Ur=="undefined"&&(Ur={QuickLoaders:{},WindowLoaders:{},Widgets:{},onLoadCallbacks:[],setup:function(f){Ur.initialize({type:"DOMContentLoaded"},f);Ur.loaded?Ur.initialize({type:"load"},f):window.addEventListener("load",function(j){Ur.initialize(j,f)},!1)},initialize:function(f,j){var e=f.type=="DOMContentLoaded"?Ur.QuickLoaders:Ur.WindowLoaders;if(j===void 0)j=document.body;for(name in e)(new e[name]).initialize(j);if(f.type=="load")Ur.loaded=!0,Ur._onLoad()},_onLoad:function(){x$().iterate(Ur.onLoadCallbacks,
function(f){f()})},loaded:!1});window.addEventListener("load",Ur.initialize,!1);window.addEventListener("DOMContentLoaded",Ur.initialize,!1);
var mixins={iterate:function(f,j){if(f!==void 0){var e=f.length||0,d=0;if(typeof j=="function")for(;d<e;d++)j.call(j,f[d],d,f)}},offset:function(f){typeof(f=="undefined")&&(f=this[0]);for(cumulative_left=cumulative_top=0;f.offsetParent;)cumulative_top+=f.offsetTop,cumulative_left+=f.offsetLeft,f=f.offsetParent;return{left:cumulative_left,top:cumulative_top}},find_next_ancestor:function(f,j){return f.parentNode!=window.document?x$().find_set_ancestor(f.parentNode,j):null},find_set_ancestor:function(f,
j){var e=x$(f).attr("data-ur-set")[0];return e!==void 0?j==void 0?f:e==j?f:x$().find_next_ancestor(f,j):x$().find_next_ancestor(f,j)},get_unique_uranium_id:function(){var f=0;return function(){f+=1;return f}}(),find_elements:function(f,j){var e={};this.each(function(d,e,f){return function(){x$().helper_find(this,d,e,f)}}(f,j,e));return e},helper_find:function(f,j,e,d){x$(f).find("*[data-ur-"+j+"-component]").each(function(){var f=!0,g=x$(this).attr("data-ur-id")[0];if(g!==void 0)d[g]===void 0&&(d[g]=
{});else{var k=x$().find_set_ancestor(this,j);if(x$(k).attr("data-ur-state")[0]==="disabled"&&Ur.loaded==!1)return;k!==null?(g=x$(k).attr("data-ur-id")[0],g===void 0&&(g=x$().get_unique_uranium_id(),x$(k).attr("data-ur-id",g)),d[g]===void 0&&(d[g]={}),d[g].set=k):(console.log("Uranium Error: Couldn't find associated ur-set for component:",this),f=!1)}k=x$(this).attr("data-ur-"+j+"-component");k===void 0&&(f=!1);if(f)if(e!==void 0&&e[k]!==void 0)e[k](d[g],this,k);else d[g][k]=this});return d}};xui.extend(mixins);Ur.QuickLoaders.toggler=function(){function f(e,d){e.content===void 0&&(e.content=[]);e.content.push(d)}function j(){this.component_constructors={content:f}}j.prototype.find=function(e){e=x$(e).find_elements("toggler",this.component_constructors);for(toggler_id in e){var d=e[toggler_id];if(d.button===void 0)console.log("Uranium Declaration Error: No button found for toggler with id="+toggler_id);else{var f=x$(d.button).attr("data-ur-state")[0];f===void 0&&(x$(d.button).attr("data-ur-state","disabled"),
f="disabled");d.content===void 0?console.log("Uranium Declaration Error: No content found for toggler with id="+toggler_id):x$().iterate(d.content,function(d){x$(d).attr("data-ur-state")[0]===void 0&&x$(d).attr("data-ur-state",f)})}}return e};j.prototype.construct_button_callback=function(e,d){return function(f){var f=f.currentTarget,g=x$(f).attr("data-ur-state")[0]==="enabled"?"disabled":"enabled";x$(f).attr("data-ur-state",g);x$(d).attr("data-ur-state",g);x$().iterate(e,function(d){var e=x$(d).attr("data-ur-state")[0]===
"enabled"?"disabled":"enabled";x$(d).attr("data-ur-state",e)})}};j.prototype.initialize=function(e){e=this.find(e);for(name in e){var d=e[name];x$(d.button).click(this.construct_button_callback(d.content,d.set));x$(d.set).attr("data-ur-state","enabled")}};return j}();Ur.QuickLoaders.tabs=function(){function f(d){this.elements=d;this.setup_callbacks()}function j(){}f.prototype.setup_callbacks=function(){var d=null;for(tab_id in this.elements.buttons){var e=this.elements.buttons[tab_id],f=this.elements.contents[tab_id];d===null&&(d=tab_id);if(f===void 0){console.log("Ur error -- no matching tab content for tab button");break}f=x$(e).attr("data-ur-state")[0];f!==void 0&&f=="enabled"&&(d=-1);var j=this;x$(e).on("click",function(d){d=x$(d.target).attr("data-ur-tab-id")[0];
for(tab_id in j.elements.buttons){var e=j.elements.buttons[tab_id],f=j.elements.contents[tab_id];tab_id!==d?(x$(e).attr("data-ur-state","disabled"),x$(f).attr("data-ur-state","disabled")):(x$(e).attr("data-ur-state","enabled"),x$(f).attr("data-ur-state","enabled"))}})}};var e={button:function(d,e){d.buttons===void 0&&(d.buttons={});var f=x$(e).attr("data-ur-tab-id")[0];f===void 0?console.log("Uranium declaration error -- Tab defined without a tab-id"):d.buttons[f]=e},content:function(d,e){d.contents===
void 0&&(d.contents={});var f=x$(e).attr("data-ur-tab-id")[0];f===void 0?console.log("Uranium declaration error -- Tab defined without a tab-id"):d.contents[f]=e}};j.prototype.initialize=function(d){d=x$(d).find_elements("tabs",e);console.log("raw tabs:",d);Ur.Widgets.tabs={};for(name in d)Ur.Widgets.tabs[name]=new f(d[name])};return j}();Ur.QuickLoaders["select-list"]=function(){function f(e,d){this.select=e;this.list=d;this.initialize()}function j(){this.SelectLists={}}f.prototype.initialize=function(){x$(this.list).click(function(e){return function(d){e.trigger_option(d)}}(this))};f.prototype.trigger_option=function(e){var d=e.target,f="";x$().iterate(this.list.children,function(e){e==d?(x$(e).attr("data-ur-state","enabled"),f=x$(e).attr("value")):x$(e).attr("data-ur-state","disabled")});this.select.value=f;return!0};j.prototype.initialize=
function(e){e=x$(e).find_elements("select-list");for(name in e){var d=e[name];this.SelectLists[name]=new f(e[name].select,e[name].content);x$(d.set).attr("data-ur-state","enabled")}};return j}();Ur.QuickLoaders["select-buttons"]=function(){function f(e){this.select=e.select;this.increment=e.increment;this.decrement=e.decrement;this.initialize()}function j(){}f.prototype.initialize=function(){x$(this.increment).click(function(e){return function(d){e.trigger_option(d,1)}}(this));x$(this.decrement).click(function(e){return function(d){e.trigger_option(d,-1)}}(this))};f.prototype.trigger_option=function(e,d){if(x$(e.currentTarget).attr("data-ur-state")[0]==="disabled")return!1;var f={},g=this.select.value,
j={prev:null,next:null};x$().iterate(this.select.children,function(d,e){x$(d).attr("value")[0]==g&&(f={element:d,index:e});typeof f.index=="undefined"&&(j.prev=x$(d).attr("value")[0]);e==f.index+1&&(j.next=x$(d).attr("value")[0])});var o=this.select.children.length,m=f.index+d;m==0?x$(this.decrement).attr("data-ur-state","disabled"):x$(this.decrement).attr("data-ur-state","enabled");m==o-1?x$(this.increment).attr("data-ur-state","disabled"):x$(this.increment).attr("data-ur-state","enabled");if(m<
0||m==o)return!1;this.select.value=j[d==1?"next":"prev"];return!0};j.prototype.initialize=function(e){e=x$(e).find_elements("select-buttons");for(name in e)new f(e[name]),x$(e[name].set).attr("data-ur-state","enabled")};return j}();
