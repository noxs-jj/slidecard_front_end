!function(e,t,n){"use strict"
function r(e,t){return t=t||Error,function(){var n,r,i=arguments[0],o="["+(e?e+":":"")+i+"] ",a=arguments[1],s=arguments
for(n=o+a.replace(/\{\d+\}/g,function(e){var t=+e.slice(1,-1)
return t+2<s.length?pe(s[t+2]):e}),n=n+"\nhttp://errors.angularjs.org/1.3.15/"+(e?e+"/":"")+i,r=2;r<arguments.length;r++)n=n+(2==r?"?":"&")+"p"+(r-2)+"="+encodeURIComponent(pe(arguments[r]))
return new t(n)}}function i(e){if(null==e||S(e))return!1
var t=e.length
return e.nodeType===yr&&t?!0:w(e)||pr(e)||0===t||"number"==typeof t&&t>0&&t-1 in e}function o(e,t,n){var r,a
if(e)if(C(e))for(r in e)"prototype"==r||"length"==r||"name"==r||e.hasOwnProperty&&!e.hasOwnProperty(r)||t.call(n,e[r],r,e)
else if(pr(e)||i(e)){var s="object"!=typeof e
for(r=0,a=e.length;a>r;r++)(s||r in e)&&t.call(n,e[r],r,e)}else if(e.forEach&&e.forEach!==o)e.forEach(t,n,e)
else for(r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r,e)
return e}function a(e){return Object.keys(e).sort()}function s(e,t,n){for(var r=a(e),i=0;i<r.length;i++)t.call(n,e[r[i]],r[i])
return r}function u(e){return function(t,n){e(n,t)}}function l(){return++cr}function c(e,t){t?e.$$hashKey=t:delete e.$$hashKey}function f(e){for(var t=e.$$hashKey,n=1,r=arguments.length;r>n;n++){var i=arguments[n]
if(i)for(var o=Object.keys(i),a=0,s=o.length;s>a;a++){var u=o[a]
e[u]=i[u]}}return c(e,t),e}function p(e){return parseInt(e,10)}function d(e,t){return f(Object.create(e),t)}function h(){}function m(e){return e}function g(e){return function(){return e}}function v(e){return n===e}function $(e){return n!==e}function y(e){return null!==e&&"object"==typeof e}function w(e){return"string"==typeof e}function b(e){return"number"==typeof e}function x(e){return"[object Date]"===sr.call(e)}function C(e){return"function"==typeof e}function k(e){return"[object RegExp]"===sr.call(e)}function S(e){return e&&e.window===e}function T(e){return e&&e.$evalAsync&&e.$watch}function A(e){return"[object File]"===sr.call(e)}function E(e){return"[object FormData]"===sr.call(e)}function N(e){return"[object Blob]"===sr.call(e)}function D(e){return"boolean"==typeof e}function _(e){return e&&C(e.then)}function O(e){return!(!e||!(e.nodeName||e.prop&&e.attr&&e.find))}function M(e){var t,n={},r=e.split(",")
for(t=0;t<r.length;t++)n[r[t]]=!0
return n}function j(e){return Yn(e.nodeName||e[0]&&e[0].nodeName)}function P(e,t){var n=e.indexOf(t)
return n>=0&&e.splice(n,1),t}function q(e,t,n,r){if(S(e)||T(e))throw ur("cpws","Can't copy! Making copies of Window or Scope instances is not supported.")
if(t){if(e===t)throw ur("cpi","Can't copy! Source and destination are identical.")
if(n=n||[],r=r||[],y(e)){var i=n.indexOf(e)
if(-1!==i)return r[i]
n.push(e),r.push(t)}var a
if(pr(e)){t.length=0
for(var s=0;s<e.length;s++)a=q(e[s],null,n,r),y(e[s])&&(n.push(e[s]),r.push(a)),t.push(a)}else{var u=t.$$hashKey
pr(t)?t.length=0:o(t,function(e,n){delete t[n]})
for(var l in e)e.hasOwnProperty(l)&&(a=q(e[l],null,n,r),y(e[l])&&(n.push(e[l]),r.push(a)),t[l]=a)
c(t,u)}}else if(t=e,e)if(pr(e))t=q(e,[],n,r)
else if(x(e))t=new Date(e.getTime())
else if(k(e))t=RegExp(e.source,(""+e).match(/[^\/]*$/)[0]),t.lastIndex=e.lastIndex
else if(y(e)){var f=Object.create(Object.getPrototypeOf(e))
t=q(e,f,n,r)}return t}function L(e,t){if(pr(e)){t=t||[]
for(var n=0,r=e.length;r>n;n++)t[n]=e[n]}else if(y(e)){t=t||{}
for(var i in e)("$"!==i.charAt(0)||"$"!==i.charAt(1))&&(t[i]=e[i])}return t||e}function R(e,t){if(e===t)return!0
if(null===e||null===t)return!1
if(e!==e&&t!==t)return!0
var r,i,o,a=typeof e,s=typeof t
if(a==s&&"object"==a){if(!pr(e)){if(x(e))return x(t)?R(e.getTime(),t.getTime()):!1
if(k(e))return k(t)?""+e==""+t:!1
if(T(e)||T(t)||S(e)||S(t)||pr(t)||x(t)||k(t))return!1
o={}
for(i in e)if("$"!==i.charAt(0)&&!C(e[i])){if(!R(e[i],t[i]))return!1
o[i]=!0}for(i in t)if(!o.hasOwnProperty(i)&&"$"!==i.charAt(0)&&t[i]!==n&&!C(t[i]))return!1
return!0}if(!pr(t))return!1
if((r=e.length)==t.length){for(i=0;r>i;i++)if(!R(e[i],t[i]))return!1
return!0}}return!1}function I(e,t,n){return e.concat(ir.call(t,n))}function H(e,t){return ir.call(e,t||0)}function F(e,t){var n=arguments.length>2?H(arguments,2):[]
return!C(t)||t instanceof RegExp?t:n.length?function(){return arguments.length?t.apply(e,I(n,arguments,0)):t.apply(e,n)}:function(){return arguments.length?t.apply(e,arguments):t.call(e)}}function V(e,r){var i=r
return"string"==typeof e&&"$"===e.charAt(0)&&"$"===e.charAt(1)?i=n:S(r)?i="$WINDOW":r&&t===r?i="$DOCUMENT":T(r)&&(i="$SCOPE"),i}function U(e,t){return n===e?n:(b(t)||(t=t?2:null),JSON.stringify(e,V,t))}function B(e){return w(e)?JSON.parse(e):e}function W(e){e=tr(e).clone()
try{e.empty()}catch(t){}var n=tr("<div>").append(e).html()
try{return e[0].nodeType===wr?Yn(n):n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(e,t){return"<"+Yn(t)})}catch(t){return Yn(n)}}function z(e){try{return decodeURIComponent(e)}catch(t){}}function G(e){var t,n,r={}
return o((e||"").split("&"),function(e){if(e&&(t=e.replace(/\+/g,"%20").split("="),n=z(t[0]),$(n))){var i=$(t[1])?z(t[1]):!0
Jn.call(r,n)?pr(r[n])?r[n].push(i):r[n]=[r[n],i]:r[n]=i}}),r}function X(e){var t=[]
return o(e,function(e,n){pr(e)?o(e,function(e){t.push(J(n,!0)+(e===!0?"":"="+J(e,!0)))}):t.push(J(n,!0)+(e===!0?"":"="+J(e,!0)))}),t.length?t.join("&"):""}function Y(e){return J(e,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function J(e,t){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,t?"%20":"+")}function K(e,t){var n,r,i=gr.length
for(e=tr(e),r=0;i>r;++r)if(n=gr[r]+t,w(n=e.attr(n)))return n
return null}function Z(e,t){var n,r,i={}
o(gr,function(t){var i=t+"app"
!n&&e.hasAttribute&&e.hasAttribute(i)&&(n=e,r=e.getAttribute(i))}),o(gr,function(t){var i,o=t+"app"
!n&&(i=e.querySelector("["+o.replace(":","\\:")+"]"))&&(n=i,r=i.getAttribute(o))}),n&&(i.strictDi=null!==K(n,"strict-di"),t(n,r?[r]:[],i))}function Q(r,i,a){y(a)||(a={})
var s={strictDi:!1}
a=f(s,a)
var u=function(){if(r=tr(r),r.injector()){var e=r[0]===t?"document":W(r)
throw ur("btstrpd","App Already Bootstrapped with this Element '{0}'",e.replace(/</,"&lt;").replace(/>/,"&gt;"))}i=i||[],i.unshift(["$provide",function(e){e.value("$rootElement",r)}]),a.debugInfoEnabled&&i.push(["$compileProvider",function(e){e.debugInfoEnabled(!0)}]),i.unshift("ng")
var n=Be(i,a.strictDi)
return n.invoke(["$rootScope","$rootElement","$compile","$injector",function(e,t,n,r){e.$apply(function(){t.data("$injector",r),n(t)(e)})}]),n},l=/^NG_ENABLE_DEBUG_INFO!/,c=/^NG_DEFER_BOOTSTRAP!/
return e&&l.test(e.name)&&(a.debugInfoEnabled=!0,e.name=e.name.replace(l,"")),e&&!c.test(e.name)?u():(e.name=e.name.replace(c,""),lr.resumeBootstrap=function(e){return o(e,function(e){i.push(e)}),u()},C(lr.resumeDeferredBootstrap)&&lr.resumeDeferredBootstrap(),n)}function ee(){e.name="NG_ENABLE_DEBUG_INFO!"+e.name,e.location.reload()}function te(e){var t=lr.element(e).injector()
if(!t)throw ur("test","no injector found for element argument to getTestability")
return t.get("$$testability")}function ne(e,t){return t=t||"_",e.replace(vr,function(e,n){return(n?t:"")+e.toLowerCase()})}function re(){var t
$r||(nr=e.jQuery,nr&&nr.fn.on?(tr=nr,f(nr.fn,{scope:Rr.scope,isolateScope:Rr.isolateScope,controller:Rr.controller,injector:Rr.injector,inheritedData:Rr.inheritedData}),t=nr.cleanData,nr.cleanData=function(e){var n
if(fr)fr=!1
else for(var r,i=0;null!=(r=e[i]);i++)n=nr._data(r,"events"),n&&n.$destroy&&nr(r).triggerHandler("$destroy")
t(e)}):tr=we,lr.element=tr,$r=!0)}function ie(e,t,n){if(!e)throw ur("areq","Argument '{0}' is {1}",t||"?",n||"required")
return e}function oe(e,t,n){return n&&pr(e)&&(e=e[e.length-1]),ie(C(e),t,"not a function, got "+(e&&"object"==typeof e?e.constructor.name||"Object":typeof e)),e}function ae(e,t){if("hasOwnProperty"===e)throw ur("badname","hasOwnProperty is not a valid {0} name",t)}function se(e,t,n){if(!t)return e
for(var r,i=t.split("."),o=e,a=i.length,s=0;a>s;s++)r=i[s],e&&(e=(o=e)[r])
return!n&&C(e)?F(o,e):e}function ue(e){var t=e[0],n=e[e.length-1],r=[t]
do{if(t=t.nextSibling,!t)break
r.push(t)}while(t!==n)
return tr(r)}function le(){return Object.create(null)}function ce(e){function t(e,t,n){return e[t]||(e[t]=n())}var n=r("$injector"),i=r("ng"),o=t(e,"angular",Object)
return o.$$minErr=o.$$minErr||r,t(o,"module",function(){var e={}
return function(r,o,a){var s=function(e,t){if("hasOwnProperty"===e)throw i("badname","hasOwnProperty is not a valid {0} name",t)}
return s(r,"module"),o&&e.hasOwnProperty(r)&&(e[r]=null),t(e,r,function(){function e(e,n,r,i){return i||(i=t),function(){return i[r||"push"]([e,n,arguments]),l}}if(!o)throw n("nomod","Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",r)
var t=[],i=[],s=[],u=e("$injector","invoke","push",i),l={_invokeQueue:t,_configBlocks:i,_runBlocks:s,requires:o,name:r,provider:e("$provide","provider"),factory:e("$provide","factory"),service:e("$provide","service"),value:e("$provide","value"),constant:e("$provide","constant","unshift"),animation:e("$animateProvider","register"),filter:e("$filterProvider","register"),controller:e("$controllerProvider","register"),directive:e("$compileProvider","directive"),config:u,run:function(e){return s.push(e),this}}
return a&&u(a),l})}})}function fe(e){var t=[]
return JSON.stringify(e,function(e,n){if(n=V(e,n),y(n)){if(t.indexOf(n)>=0)return"<<already seen>>"
t.push(n)}return n})}function pe(e){return"function"==typeof e?(""+e).replace(/ \{[\s\S]*$/,""):n===e?"undefined":"string"!=typeof e?fe(e):e}function de(t){f(t,{bootstrap:Q,copy:q,extend:f,equals:R,element:tr,forEach:o,injector:Be,noop:h,bind:F,toJson:U,fromJson:B,identity:m,isUndefined:v,isDefined:$,isString:w,isFunction:C,isObject:y,isNumber:b,isElement:O,isArray:pr,version:kr,isDate:x,lowercase:Yn,uppercase:Kn,callbacks:{counter:0},getTestability:te,$$minErr:r,$$csp:mr,reloadWithDebugInfo:ee}),rr=ce(e)
try{rr("ngLocale")}catch(n){rr("ngLocale",[]).provider("$locale",gt)}rr("ng",["ngLocale"],["$provide",function(e){e.provider({$$sanitizeUri:Xt}),e.provider("$compile",Ke).directive({a:Di,input:Gi,textarea:Gi,form:Pi,script:Lo,select:Ho,style:Vo,option:Fo,ngBind:Ji,ngBindHtml:Zi,ngBindTemplate:Ki,ngClass:eo,ngClassEven:no,ngClassOdd:to,ngCloak:ro,ngController:io,ngForm:qi,ngHide:_o,ngIf:so,ngInclude:uo,ngInit:co,ngNonBindable:So,ngPluralize:To,ngRepeat:Ao,ngShow:Do,ngStyle:Oo,ngSwitch:Mo,ngSwitchWhen:jo,ngSwitchDefault:Po,ngOptions:Io,ngTransclude:qo,ngModel:xo,ngList:fo,ngChange:Qi,pattern:Bo,ngPattern:Bo,required:Uo,ngRequired:Uo,minlength:zo,ngMinlength:zo,maxlength:Wo,ngMaxlength:Wo,ngValue:Yi,ngModelOptions:ko}).directive({ngInclude:lo}).directive(_i).directive(oo),e.provider({$anchorScroll:We,$animate:Xr,$browser:Xe,$cacheFactory:Ye,$controller:tt,$document:nt,$exceptionHandler:rt,$filter:sn,$interpolate:ht,$interval:mt,$http:ct,$httpBackend:pt,$location:Dt,$log:_t,$parse:Vt,$rootScope:Gt,$q:Ut,$$q:Bt,$sce:Zt,$sceDelegate:Kt,$sniffer:Qt,$templateCache:Je,$templateRequest:en,$$testability:tn,$timeout:nn,$window:an,$$rAF:zt,$$asyncCallback:ze,$$jqLite:Ie})}])}function he(){return++Tr}function me(e){return e.replace(Nr,function(e,t,n,r){return r?n.toUpperCase():n}).replace(Dr,"Moz$1")}function ge(e){return!jr.test(e)}function ve(e){var t=e.nodeType
return t===yr||!t||t===xr}function $e(e,t){var n,r,i,a,s=t.createDocumentFragment(),u=[]
if(ge(e))u.push(t.createTextNode(e))
else{for(n=n||s.appendChild(t.createElement("div")),r=(Pr.exec(e)||["",""])[1].toLowerCase(),i=Lr[r]||Lr._default,n.innerHTML=i[1]+e.replace(qr,"<$1></$2>")+i[2],a=i[0];a--;)n=n.lastChild
u=I(u,n.childNodes),n=s.firstChild,n.textContent=""}return s.textContent="",s.innerHTML="",o(u,function(e){s.appendChild(e)}),s}function ye(e,n){n=n||t
var r
return(r=Mr.exec(e))?[n.createElement(r[1])]:(r=$e(e,n))?r.childNodes:[]}function we(e){if(e instanceof we)return e
var t
if(w(e)&&(e=dr(e),t=!0),!(this instanceof we)){if(t&&"<"!=e.charAt(0))throw Or("nosel","Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element")
return new we(e)}t?De(this,ye(e)):De(this,e)}function be(e){return e.cloneNode(!0)}function xe(e,t){if(t||ke(e),e.querySelectorAll)for(var n=e.querySelectorAll("*"),r=0,i=n.length;i>r;r++)ke(n[r])}function Ce(e,t,n,r){if($(r))throw Or("offargs","jqLite#off() does not support the `selector` argument")
var i=Se(e),a=i&&i.events,s=i&&i.handle
if(s)if(t)o(t.split(" "),function(t){if($(n)){var r=a[t]
if(P(r||[],n),r&&r.length>0)return}Er(e,t,s),delete a[t]})
else for(t in a)"$destroy"!==t&&Er(e,t,s),delete a[t]}function ke(e,t){var r=e.ng339,i=r&&Sr[r]
if(i){if(t)return delete i.data[t],n
i.handle&&(i.events.$destroy&&i.handle({},"$destroy"),Ce(e)),delete Sr[r],e.ng339=n}}function Se(e,t){var r=e.ng339,i=r&&Sr[r]
return t&&!i&&(e.ng339=r=he(),i=Sr[r]={events:{},data:{},handle:n}),i}function Te(e,t,n){if(ve(e)){var r=$(n),i=!r&&t&&!y(t),o=!t,a=Se(e,!i),s=a&&a.data
if(r)s[t]=n
else{if(o)return s
if(i)return s&&s[t]
f(s,t)}}}function Ae(e,t){return e.getAttribute?(" "+(e.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+t+" ")>-1:!1}function Ee(e,t){t&&e.setAttribute&&o(t.split(" "),function(t){e.setAttribute("class",dr((" "+(e.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+dr(t)+" "," ")))})}function Ne(e,t){if(t&&e.setAttribute){var n=(" "+(e.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ")
o(t.split(" "),function(e){e=dr(e),-1===n.indexOf(" "+e+" ")&&(n+=e+" ")}),e.setAttribute("class",dr(n))}}function De(e,t){if(t)if(t.nodeType)e[e.length++]=t
else{var n=t.length
if("number"==typeof n&&t.window!==t){if(n)for(var r=0;n>r;r++)e[e.length++]=t[r]}else e[e.length++]=t}}function _e(e,t){return Oe(e,"$"+(t||"ngController")+"Controller")}function Oe(e,t,r){e.nodeType==xr&&(e=e.documentElement)
for(var i=pr(t)?t:[t];e;){for(var o=0,a=i.length;a>o;o++)if((r=tr.data(e,i[o]))!==n)return r
e=e.parentNode||e.nodeType===Cr&&e.host}}function Me(e){for(xe(e,!0);e.firstChild;)e.removeChild(e.firstChild)}function je(e,t){t||xe(e)
var n=e.parentNode
n&&n.removeChild(e)}function Pe(t,n){n=n||e,"complete"===n.document.readyState?n.setTimeout(t):tr(n).on("load",t)}function qe(e,t){var n=Ir[t.toLowerCase()]
return n&&Hr[j(e)]&&n}function Le(e,t){var n=e.nodeName
return("INPUT"===n||"TEXTAREA"===n)&&Fr[t]}function Re(e,t){var n=function(n,r){n.isDefaultPrevented=function(){return n.defaultPrevented}
var i=t[r||n.type],o=i?i.length:0
if(o){if(v(n.immediatePropagationStopped)){var a=n.stopImmediatePropagation
n.stopImmediatePropagation=function(){n.immediatePropagationStopped=!0,n.stopPropagation&&n.stopPropagation(),a&&a.call(n)}}n.isImmediatePropagationStopped=function(){return n.immediatePropagationStopped===!0},o>1&&(i=L(i))
for(var s=0;o>s;s++)n.isImmediatePropagationStopped()||i[s].call(e,n)}}
return n.elem=e,n}function Ie(){this.$get=function(){return f(we,{hasClass:function(e,t){return e.attr&&(e=e[0]),Ae(e,t)},addClass:function(e,t){return e.attr&&(e=e[0]),Ne(e,t)},removeClass:function(e,t){return e.attr&&(e=e[0]),Ee(e,t)}})}}function He(e,t){var n=e&&e.$$hashKey
if(n)return"function"==typeof n&&(n=e.$$hashKey()),n
var r=typeof e
return n="function"==r||"object"==r&&null!==e?e.$$hashKey=r+":"+(t||l)():r+":"+e}function Fe(e,t){if(t){var n=0
this.nextUid=function(){return++n}}o(e,this.put,this)}function Ve(e){var t=(""+e).replace(Wr,""),n=t.match(Vr)
return n?"function("+(n[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Ue(e,t,n){var r,i,a,s
if("function"==typeof e){if(!(r=e.$inject)){if(r=[],e.length){if(t)throw w(n)&&n||(n=e.name||Ve(e)),zr("strictdi","{0} is not using explicit annotation and cannot be invoked in strict mode",n)
i=(""+e).replace(Wr,""),a=i.match(Vr),o(a[1].split(Ur),function(e){e.replace(Br,function(e,t,n){r.push(n)})})}e.$inject=r}}else pr(e)?(s=e.length-1,oe(e[s],"fn"),r=e.slice(0,s)):oe(e,"fn",!0)
return r}function Be(e,t){function r(e){return function(t,r){return y(t)?(o(t,u(e)),n):e(t,r)}}function i(e,t){if(ae(e,"service"),(C(t)||pr(t))&&(t=T.instantiate(t)),!t.$get)throw zr("pget","Provider '{0}' must define $get factory method.",e)
return S[e+b]=t}function a(e,t){return function(){var n=E.invoke(t,this)
if(v(n))throw zr("undef","Provider '{0}' must return a value from $get factory method.",e)
return n}}function s(e,t,n){return i(e,{$get:n!==!1?a(e,t):t})}function l(e,t){return s(e,["$injector",function(e){return e.instantiate(t)}])}function c(e,t){return s(e,g(t),!1)}function f(e,t){ae(e,"constant"),S[e]=t,A[e]=t}function p(e,t){var n=T.get(e+b),r=n.$get
n.$get=function(){var e=E.invoke(r,n)
return E.invoke(t,null,{$delegate:e})}}function d(e){var t,n=[]
return o(e,function(e){function r(e){var t,n
for(t=0,n=e.length;n>t;t++){var r=e[t],i=T.get(r[0])
i[r[1]].apply(i,r[2])}}if(!k.get(e)){k.put(e,!0)
try{w(e)?(t=rr(e),n=n.concat(d(t.requires)).concat(t._runBlocks),r(t._invokeQueue),r(t._configBlocks)):C(e)?n.push(T.invoke(e)):pr(e)?n.push(T.invoke(e)):oe(e,"module")}catch(i){throw pr(e)&&(e=e[e.length-1]),i.message&&i.stack&&-1==i.stack.indexOf(i.message)&&(i=i.message+"\n"+i.stack),zr("modulerr","Failed to instantiate module {0} due to:\n{1}",e,i.stack||i.message||i)}}}),n}function m(e,n){function r(t,r){if(e.hasOwnProperty(t)){if(e[t]===$)throw zr("cdep","Circular dependency found: {0}",t+" <- "+x.join(" <- "))
return e[t]}try{return x.unshift(t),e[t]=$,e[t]=n(t,r)}catch(i){throw e[t]===$&&delete e[t],i}finally{x.shift()}}function i(e,n,i,o){"string"==typeof i&&(o=i,i=null)
var a,s,u,l=[],c=Be.$$annotate(e,t,o)
for(s=0,a=c.length;a>s;s++){if(u=c[s],"string"!=typeof u)throw zr("itkn","Incorrect injection token! Expected service name as string, got {0}",u)
l.push(i&&i.hasOwnProperty(u)?i[u]:r(u,o))}return pr(e)&&(e=e[a]),e.apply(n,l)}function o(e,t,n){var r=Object.create((pr(e)?e[e.length-1]:e).prototype||null),o=i(e,r,t,n)
return y(o)||C(o)?o:r}return{invoke:i,instantiate:o,get:r,annotate:Be.$$annotate,has:function(t){return S.hasOwnProperty(t+b)||e.hasOwnProperty(t)}}}t=t===!0
var $={},b="Provider",x=[],k=new Fe([],!0),S={$provide:{provider:r(i),factory:r(s),service:r(l),value:r(c),constant:r(f),decorator:p}},T=S.$injector=m(S,function(e,t){throw lr.isString(t)&&x.push(t),zr("unpr","Unknown provider: {0}",x.join(" <- "))}),A={},E=A.$injector=m(A,function(e,t){var r=T.get(e+b,t)
return E.invoke(r.$get,r,n,e)})
return o(d(e),function(e){E.invoke(e||h)}),E}function We(){var e=!0
this.disableAutoScrolling=function(){e=!1},this.$get=["$window","$location","$rootScope",function(t,r,i){function o(e){var t=null
return Array.prototype.some.call(e,function(e){return"a"===j(e)?(t=e,!0):n}),t}function a(){var e=u.yOffset
if(C(e))e=e()
else if(O(e)){var n=e[0],r=t.getComputedStyle(n)
e="fixed"!==r.position?0:n.getBoundingClientRect().bottom}else b(e)||(e=0)
return e}function s(e){if(e){e.scrollIntoView()
var n=a()
if(n){var r=e.getBoundingClientRect().top
t.scrollBy(0,r-n)}}else t.scrollTo(0,0)}function u(){var e,t=r.hash()
t?(e=l.getElementById(t))?s(e):(e=o(l.getElementsByName(t)))?s(e):"top"===t&&s(null):s(null)}var l=t.document
return e&&i.$watch(function(){return r.hash()},function(e,t){(e!==t||""!==e)&&Pe(function(){i.$evalAsync(u)})}),u}]}function ze(){this.$get=["$$rAF","$timeout",function(e,t){return e.supported?function(t){return e(t)}:function(e){return t(e,0,!1)}}]}function Ge(e,t,r,i){function a(e){try{e.apply(null,H(arguments,1))}finally{if(k--,0===k)for(;S.length;)try{S.pop()()}catch(t){r.error(t)}}}function s(e){var t=e.indexOf("#")
return-1===t?"":e.substr(t+1)}function u(e,t){!function n(){o(A,function(e){e()}),T=t(n,e)}()}function l(){f(),p()}function c(){try{return y.state}catch(e){}}function f(){E=c(),E=v(E)?null:E,R(E,P)&&(E=P),P=E}function p(){(D!==m.url()||N!==E)&&(D=m.url(),N=E,o(M,function(e){e(m.url(),E)}))}function d(e){try{return decodeURIComponent(e)}catch(t){return e}}var m=this,g=t[0],$=e.location,y=e.history,b=e.setTimeout,x=e.clearTimeout,C={}
m.isMock=!1
var k=0,S=[]
m.$$completeOutstandingRequest=a,m.$$incOutstandingRequestCount=function(){k++},m.notifyWhenNoOutstandingRequests=function(e){o(A,function(e){e()}),0===k?e():S.push(e)}
var T,A=[]
m.addPollFn=function(e){return v(T)&&u(100,b),A.push(e),e}
var E,N,D=$.href,_=t.find("base"),O=null
f(),N=E,m.url=function(t,n,r){if(v(r)&&(r=null),$!==e.location&&($=e.location),y!==e.history&&(y=e.history),t){var o=N===r
if(D===t&&(!i.history||o))return m
var a=D&&bt(D)===bt(t)
return D=t,N=r,!i.history||a&&o?(a||(O=t),n?$.replace(t):a?$.hash=s(t):$.href=t):(y[n?"replaceState":"pushState"](r,"",t),f(),N=E),m}return O||$.href.replace(/%27/g,"'")},m.state=function(){return E}
var M=[],j=!1,P=null
m.onUrlChange=function(t){return j||(i.history&&tr(e).on("popstate",l),tr(e).on("hashchange",l),j=!0),M.push(t),t},m.$$checkUrlChange=p,m.baseHref=function(){var e=_.attr("href")
return e?e.replace(/^(https?\:)?\/\/[^\/]*/,""):""}
var q={},L="",I=m.baseHref()
m.cookies=function(e,t){var i,o,a,s,u
if(!e){if(g.cookie!==L)for(L=g.cookie,o=L.split("; "),q={},s=0;s<o.length;s++)a=o[s],u=a.indexOf("="),u>0&&(e=d(a.substring(0,u)),q[e]===n&&(q[e]=d(a.substring(u+1))))
return q}t===n?g.cookie=encodeURIComponent(e)+"=;path="+I+";expires=Thu, 01 Jan 1970 00:00:00 GMT":w(t)&&(i=(g.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+";path="+I).length+1,i>4096&&r.warn("Cookie '"+e+"' possibly not set or overflowed because it was too large ("+i+" > 4096 bytes)!"))},m.defer=function(e,t){var n
return k++,n=b(function(){delete C[n],a(e)},t||0),C[n]=!0,n},m.defer.cancel=function(e){return C[e]?(delete C[e],x(e),a(h),!0):!1}}function Xe(){this.$get=["$window","$log","$sniffer","$document",function(e,t,n,r){return new Ge(e,r,t,n)}]}function Ye(){this.$get=function(){function e(e,n){function i(e){e!=p&&(d?d==e&&(d=e.n):d=e,o(e.n,e.p),o(e,p),p=e,p.n=null)}function o(e,t){e!=t&&(e&&(e.p=t),t&&(t.n=e))}if(e in t)throw r("$cacheFactory")("iid","CacheId '{0}' is already taken!",e)
var a=0,s=f({},n,{id:e}),u={},l=n&&n.capacity||Number.MAX_VALUE,c={},p=null,d=null
return t[e]={put:function(e,t){if(l<Number.MAX_VALUE){var n=c[e]||(c[e]={key:e})
i(n)}if(!v(t))return e in u||a++,u[e]=t,a>l&&this.remove(d.key),t},get:function(e){if(l<Number.MAX_VALUE){var t=c[e]
if(!t)return
i(t)}return u[e]},remove:function(e){if(l<Number.MAX_VALUE){var t=c[e]
if(!t)return
t==p&&(p=t.p),t==d&&(d=t.n),o(t.n,t.p),delete c[e]}delete u[e],a--},removeAll:function(){u={},a=0,c={},p=d=null},destroy:function(){u=null,s=null,c=null,delete t[e]},info:function(){return f({},s,{size:a})}}}var t={}
return e.info=function(){var e={}
return o(t,function(t,n){e[n]=t.info()}),e},e.get=function(e){return t[e]},e}}function Je(){this.$get=["$cacheFactory",function(e){return e("templates")}]}function Ke(e,r){function i(e,t){var n=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,r={}
return o(e,function(e,i){var o=e.match(n)
if(!o)throw Yr("iscp","Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}",t,i,e)
r[i]={mode:o[1][0],collection:"*"===o[2],optional:"?"===o[3],attrName:o[4]||i}}),r}var a={},s="Directive",l=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,c=/(([\w\-]+)(?:\:([^;]+))?;?)/,p=M("ngSrc,ngSrcset,src,srcset"),v=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,b=/^(on[a-z]+|formaction)$/
this.directive=function k(t,n){return ae(t,"directive"),w(t)?(ie(n,"directiveFactory"),a.hasOwnProperty(t)||(a[t]=[],e.factory(t+s,["$injector","$exceptionHandler",function(e,n){var r=[]
return o(a[t],function(o,a){try{var s=e.invoke(o)
C(s)?s={compile:g(s)}:!s.compile&&s.link&&(s.compile=g(s.link)),s.priority=s.priority||0,s.index=a,s.name=s.name||t,s.require=s.require||s.controller&&s.name,s.restrict=s.restrict||"EA",y(s.scope)&&(s.$$isolateBindings=i(s.scope,s.name)),r.push(s)}catch(u){n(u)}}),r}])),a[t].push(n)):o(t,u(k)),this},this.aHrefSanitizationWhitelist=function(e){return $(e)?(r.aHrefSanitizationWhitelist(e),this):r.aHrefSanitizationWhitelist()},this.imgSrcSanitizationWhitelist=function(e){return $(e)?(r.imgSrcSanitizationWhitelist(e),this):r.imgSrcSanitizationWhitelist()}
var x=!0
this.debugInfoEnabled=function(e){return $(e)?(x=e,this):x},this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(e,r,i,u,g,$,k,S,A,E,N){function D(e,t){try{e.addClass(t)}catch(n){}}function _(e,t,n,r,i){e instanceof tr||(e=tr(e)),o(e,function(t,n){t.nodeType==wr&&t.nodeValue.match(/\S+/)&&(e[n]=tr(t).wrap("<span></span>").parent()[0])})
var a=M(e,t,e,n,r,i)
_.$$addScopeClass(e)
var s=null
return function(t,n,r){ie(t,"scope"),r=r||{}
var i=r.parentBoundTranscludeFn,o=r.transcludeControllers,u=r.futureParentElement
i&&i.$$boundTransclude&&(i=i.$$boundTransclude),s||(s=O(u))
var l
if(l="html"!==s?tr(Z(s,tr("<div>").append(e).html())):n?Rr.clone.call(e):e,o)for(var c in o)l.data("$"+c+"Controller",o[c].instance)
return _.$$addScopeInfo(l,t),n&&n(l,t),a&&a(t,l,l,i),l}}function O(e){var t=e&&e[0]
return t&&"foreignobject"!==j(t)&&(""+t).match(/SVG/)?"svg":"html"}function M(e,t,r,i,o,a){function s(e,r,i,o){var a,s,u,l,c,f,p,d,g
if(h){var v=r.length
for(g=Array(v),c=0;c<m.length;c+=3)p=m[c],g[p]=r[p]}else g=r
for(c=0,f=m.length;f>c;)u=g[m[c++]],a=m[c++],s=m[c++],a?(a.scope?(l=e.$new(),_.$$addScopeInfo(tr(u),l)):l=e,d=a.transcludeOnThisElement?q(e,a.transclude,o,a.elementTranscludeOnThisElement):!a.templateOnThisElement&&o?o:!o&&t?q(e,t):null,a(s,l,u,i,d)):s&&s(e,u.childNodes,n,o)}for(var u,l,c,f,p,d,h,m=[],g=0;g<e.length;g++)u=new ae,l=L(e[g],[],u,0===g?i:n,o),c=l.length?V(l,e[g],u,t,r,null,[],[],a):null,c&&c.scope&&_.$$addScopeClass(u.$$element),p=c&&c.terminal||!(f=e[g].childNodes)||!f.length?null:M(f,c?(c.transcludeOnThisElement||!c.templateOnThisElement)&&c.transclude:t),(c||p)&&(m.push(g,c,p),d=!0,h=h||c),a=null
return d?s:null}function q(e,t,n){var r=function(r,i,o,a,s){return r||(r=e.$new(!1,s),r.$$transcluded=!0),t(r,i,{parentBoundTranscludeFn:n,transcludeControllers:o,futureParentElement:a})}
return r}function L(e,t,n,r,i){var o,a,s=e.nodeType,u=n.$attr
switch(s){case yr:B(t,Ze(j(e)),"E",r,i)
for(var f,p,d,h,m,g,v=e.attributes,$=0,b=v&&v.length;b>$;$++){var x=!1,C=!1
f=v[$],p=f.name,m=dr(f.value),h=Ze(p),(g=fe.test(h))&&(p=p.replace(Jr,"").substr(8).replace(/_(.)/g,function(e,t){return t.toUpperCase()}))
var k=h.replace(/(Start|End)$/,"")
z(k)&&h===k+"Start"&&(x=p,C=p.substr(0,p.length-5)+"end",p=p.substr(0,p.length-6)),d=Ze(p.toLowerCase()),u[d]=p,(g||!n.hasOwnProperty(d))&&(n[d]=m,qe(e,d)&&(n[d]=!0)),ee(e,t,m,d,g),B(t,d,"A",r,i,x,C)}if(a=e.className,y(a)&&(a=a.animVal),w(a)&&""!==a)for(;o=c.exec(a);)d=Ze(o[2]),B(t,d,"C",r,i)&&(n[d]=dr(o[3])),a=a.substr(o.index+o[0].length)
break
case wr:K(t,e.nodeValue)
break
case br:try{o=l.exec(e.nodeValue),o&&(d=Ze(o[1]),B(t,d,"M",r,i)&&(n[d]=dr(o[2])))}catch(S){}}return t.sort(Y),t}function I(e,t,n){var r=[],i=0
if(t&&e.hasAttribute&&e.hasAttribute(t)){do{if(!e)throw Yr("uterdir","Unterminated attribute, found '{0}' but no matching '{1}' found.",t,n)
e.nodeType==yr&&(e.hasAttribute(t)&&i++,e.hasAttribute(n)&&i--),r.push(e),e=e.nextSibling}while(i>0)}else r.push(e)
return tr(r)}function F(e,t,n){return function(r,i,o,a,s){return i=I(i[0],t,n),e(r,i,o,a,s)}}function V(e,a,s,u,l,c,f,p,d){function h(e,t,n,r){e&&(n&&(e=F(e,n,r)),e.require=S.require,e.directiveName=A,(j===S||S.$$isolateScope)&&(e=re(e,{isolateScope:!0})),f.push(e)),t&&(n&&(t=F(t,n,r)),t.require=S.require,t.directiveName=A,(j===S||S.$$isolateScope)&&(t=re(t,{isolateScope:!0})),p.push(t))}function m(e,t,n,r){var i,a,s="data",u=!1,l=n
if(w(t)){if(a=t.match(v),t=t.substring(a[0].length),a[3]&&(a[1]?a[3]=null:a[1]=a[3]),"^"===a[1]?s="inheritedData":"^^"===a[1]&&(s="inheritedData",l=n.parent()),"?"===a[2]&&(u=!0),i=null,r&&"data"===s&&(i=r[t])&&(i=i.instance),i=i||l[s]("$"+t+"Controller"),!i&&!u)throw Yr("ctreq","Controller '{0}', required by directive '{1}', can't be found!",t,e)
return i||null}return pr(t)&&(i=[],o(t,function(t){i.push(m(e,t,n,r))})),i}function b(e,t,i,u,l){function c(e,t,r){var i
return T(e)||(r=t,t=e,e=n),z&&(i=b),r||(r=z?C.parent():C),l(e,t,i,r,N)}var d,h,v,y,w,b,x,C,S
if(a===i?(S=s,C=s.$$element):(C=tr(i),S=new ae(C,s)),j&&(w=t.$new(!0)),l&&(x=c,x.$$boundTransclude=l),M&&(k={},b={},o(M,function(e){var n,r={$scope:e===j||e.$$isolateScope?w:t,$element:C,$attrs:S,$transclude:x}
y=e.controller,"@"==y&&(y=S[e.name]),n=$(y,r,!0,e.controllerAs),b[e.name]=n,z||C.data("$"+e.name+"Controller",n.instance),k[e.name]=n})),j){_.$$addScopeInfo(C,w,!0,!(P&&(P===j||P===j.$$originalDirective))),_.$$addScopeClass(C,!0)
var A=k&&k[j.name],E=w
A&&A.identifier&&j.bindToController===!0&&(E=A.instance),o(w.$$isolateBindings=j.$$isolateBindings,function(e,n){var i,o,a,s,u=e.attrName,l=e.optional,c=e.mode
switch(c){case"@":S.$observe(u,function(e){E[n]=e}),S.$$observers[u].$$scope=t,S[u]&&(E[n]=r(S[u])(t))
break
case"=":if(l&&!S[u])return
o=g(S[u]),s=o.literal?R:function(e,t){return e===t||e!==e&&t!==t},a=o.assign||function(){throw i=E[n]=o(t),Yr("nonassign","Expression '{0}' used with directive '{1}' is non-assignable!",S[u],j.name)},i=E[n]=o(t)
var f=function(e){return s(e,E[n])||(s(e,i)?a(t,e=E[n]):E[n]=e),i=e}
f.$stateful=!0
var p
p=e.collection?t.$watchCollection(S[u],f):t.$watch(g(S[u],f),null,o.literal),w.$on("$destroy",p)
break
case"&":o=g(S[u]),E[n]=function(e){return o(t,e)}}})}for(k&&(o(k,function(e){e()}),k=null),d=0,h=f.length;h>d;d++)v=f[d],oe(v,v.isolateScope?w:t,C,S,v.require&&m(v.directiveName,v.require,C,b),x)
var N=t
for(j&&(j.template||null===j.templateUrl)&&(N=w),e&&e(N,i.childNodes,n,l),d=p.length-1;d>=0;d--)v=p[d],oe(v,v.isolateScope?w:t,C,S,v.require&&m(v.directiveName,v.require,C,b),x)}d=d||{}
for(var x,k,S,A,E,N,D,O=-Number.MAX_VALUE,M=d.controllerDirectives,j=d.newIsolateScopeDirective,P=d.templateDirective,q=d.nonTlbTranscludeDirective,V=!1,B=!1,z=d.hasElementTranscludeDirective,Y=s.$$element=tr(a),K=c,Q=u,ee=0,ne=e.length;ne>ee;ee++){S=e[ee]
var ie=S.$$start,se=S.$$end
if(ie&&(Y=I(a,ie,se)),E=n,O>S.priority)break
if((D=S.scope)&&(S.templateUrl||(y(D)?(J("new/isolated scope",j||x,S,Y),j=S):J("new/isolated scope",j,S,Y)),x=x||S),A=S.name,!S.templateUrl&&S.controller&&(D=S.controller,M=M||{},J("'"+A+"' controller",M[A],S,Y),M[A]=S),(D=S.transclude)&&(V=!0,S.$$tlb||(J("transclusion",q,S,Y),q=S),"element"==D?(z=!0,O=S.priority,E=Y,Y=s.$$element=tr(t.createComment(" "+A+": "+s[A]+" ")),a=Y[0],te(l,H(E),a),Q=_(E,u,O,K&&K.name,{nonTlbTranscludeDirective:q})):(E=tr(be(a)).contents(),Y.empty(),Q=_(E,u))),S.template)if(B=!0,J("template",P,S,Y),P=S,D=C(S.template)?S.template(Y,s):S.template,D=ce(D),S.replace){if(K=S,E=ge(D)?[]:et(Z(S.templateNamespace,dr(D))),a=E[0],1!=E.length||a.nodeType!==yr)throw Yr("tplrt","Template for directive '{0}' must have exactly one root element. {1}",A,"")
te(l,Y,a)
var ue={$attr:{}},le=L(a,[],ue),fe=e.splice(ee+1,e.length-(ee+1))
j&&U(le),e=e.concat(le).concat(fe),G(s,ue),ne=e.length}else Y.html(D)
if(S.templateUrl)B=!0,J("template",P,S,Y),P=S,S.replace&&(K=S),b=X(e.splice(ee,e.length-ee),Y,s,l,V&&Q,f,p,{controllerDirectives:M,newIsolateScopeDirective:j,templateDirective:P,nonTlbTranscludeDirective:q}),ne=e.length
else if(S.compile)try{N=S.compile(Y,s,Q),C(N)?h(null,N,ie,se):N&&h(N.pre,N.post,ie,se)}catch(pe){i(pe,W(Y))}S.terminal&&(b.terminal=!0,O=Math.max(O,S.priority))}return b.scope=x&&x.scope===!0,b.transcludeOnThisElement=V,b.elementTranscludeOnThisElement=z,b.templateOnThisElement=B,b.transclude=Q,d.hasElementTranscludeDirective=z,b}function U(e){for(var t=0,n=e.length;n>t;t++)e[t]=d(e[t],{$$isolateScope:!0})}function B(t,r,o,u,l,c,f){if(r===l)return null
var p=null
if(a.hasOwnProperty(r))for(var h,m=e.get(r+s),g=0,v=m.length;v>g;g++)try{h=m[g],(u===n||u>h.priority)&&-1!=h.restrict.indexOf(o)&&(c&&(h=d(h,{$$start:c,$$end:f})),t.push(h),p=h)}catch($){i($)}return p}function z(t){if(a.hasOwnProperty(t))for(var n,r=e.get(t+s),i=0,o=r.length;o>i;i++)if(n=r[i],n.multiElement)return!0
return!1}function G(e,t){var n=t.$attr,r=e.$attr,i=e.$$element
o(e,function(r,i){"$"!=i.charAt(0)&&(t[i]&&t[i]!==r&&(r+=("style"===i?";":" ")+t[i]),e.$set(i,r,!0,n[i]))}),o(t,function(t,o){"class"==o?(D(i,t),e["class"]=(e["class"]?e["class"]+" ":"")+t):"style"==o?(i.attr("style",i.attr("style")+";"+t),e.style=(e.style?e.style+";":"")+t):"$"==o.charAt(0)||e.hasOwnProperty(o)||(e[o]=t,r[o]=n[o])})}function X(e,t,n,r,i,a,s,l){var c,f,p=[],h=t[0],m=e.shift(),g=d(m,{templateUrl:null,transclude:null,replace:null,$$originalDirective:m}),v=C(m.templateUrl)?m.templateUrl(t,n):m.templateUrl,$=m.templateNamespace
return t.empty(),u(A.getTrustedResourceUrl(v)).then(function(u){var d,w,b,x
if(u=ce(u),m.replace){if(b=ge(u)?[]:et(Z($,dr(u))),d=b[0],1!=b.length||d.nodeType!==yr)throw Yr("tplrt","Template for directive '{0}' must have exactly one root element. {1}",m.name,v)
w={$attr:{}},te(r,t,d)
var C=L(d,[],w)
y(m.scope)&&U(C),e=C.concat(e),G(n,w)}else d=h,t.html(u)
for(e.unshift(g),c=V(e,d,n,i,t,m,a,s,l),o(r,function(e,n){e==d&&(r[n]=t[0])}),f=M(t[0].childNodes,i);p.length;){var k=p.shift(),S=p.shift(),T=p.shift(),A=p.shift(),E=t[0]
if(!k.$$destroyed){if(S!==h){var N=S.className
l.hasElementTranscludeDirective&&m.replace||(E=be(d)),te(T,tr(S),E),D(tr(E),N)}x=c.transcludeOnThisElement?q(k,c.transclude,A):A,c(f,k,E,r,x)}}p=null}),function(e,t,n,r,i){var o=i
t.$$destroyed||(p?p.push(t,n,r,o):(c.transcludeOnThisElement&&(o=q(t,c.transclude,i)),c(f,t,n,r,o)))}}function Y(e,t){var n=t.priority-e.priority
return 0!==n?n:e.name!==t.name?e.name<t.name?-1:1:e.index-t.index}function J(e,t,n,r){if(t)throw Yr("multidir","Multiple directives [{0}, {1}] asking for {2} on: {3}",t.name,n.name,e,W(r))}function K(e,t){var n=r(t,!0)
n&&e.push({priority:0,compile:function(e){var t=e.parent(),r=!!t.length
return r&&_.$$addBindingClass(t),function(e,t){var i=t.parent()
r||_.$$addBindingClass(i),_.$$addBindingInfo(i,n.expressions),e.$watch(n,function(e){t[0].nodeValue=e})}}})}function Z(e,n){switch(e=Yn(e||"html")){case"svg":case"math":var r=t.createElement("div")
return r.innerHTML="<"+e+">"+n+"</"+e+">",r.childNodes[0].childNodes
default:return n}}function Q(e,t){if("srcdoc"==t)return A.HTML
var r=j(e)
return"xlinkHref"==t||"form"==r&&"action"==t||"img"!=r&&("src"==t||"ngSrc"==t)?A.RESOURCE_URL:n}function ee(e,t,n,i,o){var a=Q(e,i)
o=p[i]||o
var s=r(n,!0,a,o)
if(s){if("multiple"===i&&"select"===j(e))throw Yr("selmulti","Binding to the 'multiple' attribute is not supported. Element: {0}",W(e))
t.push({priority:100,compile:function(){return{pre:function(e,t,u){var l=u.$$observers||(u.$$observers={})
if(b.test(i))throw Yr("nodomevents","Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.")
var c=u[i]
c!==n&&(s=c&&r(c,!0,a,o),n=c),s&&(u[i]=s(e),(l[i]||(l[i]=[])).$$inter=!0,(u.$$observers&&u.$$observers[i].$$scope||e).$watch(s,function(e,t){"class"===i&&e!=t?u.$updateClass(e,t):u.$set(i,e)}))}}}})}}function te(e,n,r){var i,o,a=n[0],s=n.length,u=a.parentNode
if(e)for(i=0,o=e.length;o>i;i++)if(e[i]==a){e[i++]=r
for(var l=i,c=l+s-1,f=e.length;f>l;l++,c++)f>c?e[l]=e[c]:delete e[l]
e.length-=s-1,e.context===a&&(e.context=r)
break}u&&u.replaceChild(r,a)
var p=t.createDocumentFragment()
p.appendChild(a),tr(r).data(tr(a).data()),nr?(fr=!0,nr.cleanData([a])):delete tr.cache[a[tr.expando]]
for(var d=1,h=n.length;h>d;d++){var m=n[d]
tr(m).remove(),p.appendChild(m),delete n[d]}n[0]=r,n.length=1}function re(e,t){return f(function(){return e.apply(null,arguments)},e,t)}function oe(e,t,n,r,o,a){try{e(t,n,r,o,a)}catch(s){i(s,W(n))}}var ae=function(e,t){if(t){var n,r,i,o=Object.keys(t)
for(n=0,r=o.length;r>n;n++)i=o[n],this[i]=t[i]}else this.$attr={}
this.$$element=e}
ae.prototype={$normalize:Ze,$addClass:function(e){e&&e.length>0&&E.addClass(this.$$element,e)},$removeClass:function(e){e&&e.length>0&&E.removeClass(this.$$element,e)},$updateClass:function(e,t){var n=Qe(e,t)
n&&n.length&&E.addClass(this.$$element,n)
var r=Qe(t,e)
r&&r.length&&E.removeClass(this.$$element,r)},$set:function(e,t,r,a){var s,u=this.$$element[0],l=qe(u,e),c=Le(u,e),f=e
if(l?(this.$$element.prop(e,t),a=l):c&&(this[c]=t,f=c),this[e]=t,a?this.$attr[e]=a:(a=this.$attr[e],a||(this.$attr[e]=a=ne(e,"-"))),s=j(this.$$element),"a"===s&&"href"===e||"img"===s&&"src"===e)this[e]=t=N(t,"src"===e)
else if("img"===s&&"srcset"===e){for(var p="",d=dr(t),h=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,m=/\s/.test(d)?h:/(,)/,g=d.split(m),v=Math.floor(g.length/2),$=0;v>$;$++){var y=2*$
p+=N(dr(g[y]),!0),p+=" "+dr(g[y+1])}var w=dr(g[2*$]).split(/\s/)
p+=N(dr(w[0]),!0),2===w.length&&(p+=" "+dr(w[1])),this[e]=t=p}r!==!1&&(null===t||t===n?this.$$element.removeAttr(a):this.$$element.attr(a,t))
var b=this.$$observers
b&&o(b[f],function(e){try{e(t)}catch(n){i(n)}})},$observe:function(e,t){var n=this,r=n.$$observers||(n.$$observers=le()),i=r[e]||(r[e]=[])
return i.push(t),k.$evalAsync(function(){!i.$$inter&&n.hasOwnProperty(e)&&t(n[e])}),function(){P(i,t)}}}
var se=r.startSymbol(),ue=r.endSymbol(),ce="{{"==se||"}}"==ue?m:function(e){return e.replace(/\{\{/g,se).replace(/}}/g,ue)},fe=/^ngAttr[A-Z]/
return _.$$addBindingInfo=x?function(e,t){var n=e.data("$binding")||[]
pr(t)?n=n.concat(t):n.push(t),e.data("$binding",n)}:h,_.$$addBindingClass=x?function(e){D(e,"ng-binding")}:h,_.$$addScopeInfo=x?function(e,t,n,r){var i=n?r?"$isolateScopeNoTemplate":"$isolateScope":"$scope"
e.data(i,t)}:h,_.$$addScopeClass=x?function(e,t){D(e,t?"ng-isolate-scope":"ng-scope")}:h,_}]}function Ze(e){return me(e.replace(Jr,""))}function Qe(e,t){var n="",r=e.split(/\s+/),i=t.split(/\s+/)
e:for(var o=0;o<r.length;o++){for(var a=r[o],s=0;s<i.length;s++)if(a==i[s])continue e
n+=(n.length>0?" ":"")+a}return n}function et(e){e=tr(e)
var t=e.length
if(1>=t)return e
for(;t--;){var n=e[t]
n.nodeType===br&&or.call(e,t,1)}return e}function tt(){var e={},t=!1,i=/^(\S+)(\s+as\s+(\w+))?$/
this.register=function(t,n){ae(t,"controller"),y(t)?f(e,t):e[t]=n},this.allowGlobals=function(){t=!0},this.$get=["$injector","$window",function(o,a){function s(e,t,n,i){if(!e||!y(e.$scope))throw r("$controller")("noscp","Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",i,t)
e.$scope[t]=n}return function(r,u,l,c){var p,d,h,m
if(l=l===!0,c&&w(c)&&(m=c),w(r)){if(d=r.match(i),!d)throw Kr("ctrlfmt","Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.",r)
h=d[1],m=m||d[3],r=e.hasOwnProperty(h)?e[h]:se(u.$scope,h,!0)||(t?se(a,h,!0):n),oe(r,h,!0)}if(l){var g=(pr(r)?r[r.length-1]:r).prototype
return p=Object.create(g||null),m&&s(u,m,p,h||r.name),f(function(){return o.invoke(r,p,u,h),p},{instance:p,identifier:m})}return p=o.instantiate(r,u,h),m&&s(u,m,p,h||r.name),p}}]}function nt(){this.$get=["$window",function(e){return tr(e.document)}]}function rt(){this.$get=["$log",function(e){return function(){e.error.apply(e,arguments)}}]}function it(e,t){if(w(e)){var n=e.replace(ni,"").trim()
if(n){var r=t("Content-Type");(r&&0===r.indexOf(Zr)||ot(n))&&(e=B(n))}}return e}function ot(e){var t=e.match(ei)
return t&&ti[t[0]].test(e)}function at(e){var t,n,r,i=le()
return e?(o(e.split("\n"),function(e){r=e.indexOf(":"),t=Yn(dr(e.substr(0,r))),n=dr(e.substr(r+1)),t&&(i[t]=i[t]?i[t]+", "+n:n)}),i):i}function st(e){var t=y(e)?e:n
return function(n){if(t||(t=at(e)),n){var r=t[Yn(n)]
return r===void 0&&(r=null),r}return t}}function ut(e,t,n,r){return C(r)?r(e,t,n):(o(r,function(r){e=r(e,t,n)}),e)}function lt(e){return e>=200&&300>e}function ct(){var e=this.defaults={transformResponse:[it],transformRequest:[function(e){return!y(e)||A(e)||N(e)||E(e)?e:U(e)}],headers:{common:{Accept:"application/json, text/plain, */*"},post:L(Qr),put:L(Qr),patch:L(Qr)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},t=!1
this.useApplyAsync=function(e){return $(e)?(t=!!e,this):t}
var i=this.interceptors=[]
this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,u,l,c,p,d){function h(t){function i(e){var t=f({},e)
return e.data?t.data=ut(e.data,e.headers,e.status,u.transformResponse):t.data=e.data,lt(e.status)?t:p.reject(t)}function a(e){var t,n={}
return o(e,function(e,r){C(e)?(t=e(),null!=t&&(n[r]=t)):n[r]=e}),n}function s(t){var n,r,i,o=e.headers,s=f({},t.headers)
o=f({},o.common,o[Yn(t.method)])
e:for(n in o){r=Yn(n)
for(i in s)if(Yn(i)===r)continue e
s[n]=o[n]}return a(s)}if(!lr.isObject(t))throw r("$http")("badreq","Http request configuration must be an object.  Received: {0}",t)
var u=f({method:"get",transformRequest:e.transformRequest,transformResponse:e.transformResponse},t)
u.headers=s(t),u.method=Kn(u.method)
var l=function(t){var r=t.headers,a=ut(t.data,st(r),n,t.transformRequest)
return v(a)&&o(r,function(e,t){"content-type"===Yn(t)&&delete r[t]}),v(t.withCredentials)&&!v(e.withCredentials)&&(t.withCredentials=e.withCredentials),b(t,a).then(i,i)},c=[l,n],d=p.when(u)
for(o(T,function(e){(e.request||e.requestError)&&c.unshift(e.request,e.requestError),(e.response||e.responseError)&&c.push(e.response,e.responseError)});c.length;){var h=c.shift(),m=c.shift()
d=d.then(h,m)}return d.success=function(e){return d.then(function(t){e(t.data,t.status,t.headers,u)}),d},d.error=function(e){return d.then(null,function(t){e(t.data,t.status,t.headers,u)}),d},d}function m(){o(arguments,function(e){h[e]=function(t,n){return h(f(n||{},{method:e,url:t}))}})}function g(){o(arguments,function(e){h[e]=function(t,n,r){return h(f(r||{},{method:e,url:t,data:n}))}})}function b(r,i){function o(e,n,r,i){function o(){s(n,e,r,i)}d&&(lt(e)?d.put(x,[e,n,at(r),i]):d.remove(x)),t?c.$applyAsync(o):(o(),c.$$phase||c.$apply())}function s(e,t,n,i){t=Math.max(t,0),(lt(t)?g.resolve:g.reject)({data:e,status:t,headers:st(n),config:r,statusText:i})}function l(e){s(e.data,e.status,L(e.headers()),e.statusText)}function f(){var e=h.pendingRequests.indexOf(r);-1!==e&&h.pendingRequests.splice(e,1)}var d,m,g=p.defer(),w=g.promise,b=r.headers,x=k(r.url,r.params)
if(h.pendingRequests.push(r),w.then(f,f),!r.cache&&!e.cache||r.cache===!1||"GET"!==r.method&&"JSONP"!==r.method||(d=y(r.cache)?r.cache:y(e.cache)?e.cache:S),d&&(m=d.get(x),$(m)?_(m)?m.then(l,l):pr(m)?s(m[1],m[0],L(m[2]),m[3]):s(m,200,{},"OK"):d.put(x,w)),v(m)){var C=on(r.url)?u.cookies()[r.xsrfCookieName||e.xsrfCookieName]:n
C&&(b[r.xsrfHeaderName||e.xsrfHeaderName]=C),a(r.method,x,i,o,b,r.timeout,r.withCredentials,r.responseType)}return w}function k(e,t){if(!t)return e
var n=[]
return s(t,function(e,t){null===e||v(e)||(pr(e)||(e=[e]),o(e,function(e){y(e)&&(e=x(e)?e.toISOString():U(e)),n.push(J(t)+"="+J(e))}))}),n.length>0&&(e+=(-1==e.indexOf("?")?"?":"&")+n.join("&")),e}var S=l("$http"),T=[]
return o(i,function(e){T.unshift(w(e)?d.get(e):d.invoke(e))}),h.pendingRequests=[],m("get","delete","head","jsonp"),g("post","put","patch"),h.defaults=e,h}]}function ft(){return new e.XMLHttpRequest}function pt(){this.$get=["$browser","$window","$document",function(e,t,n){return dt(e,ft,e.defer,t.angular.callbacks,n[0])}]}function dt(e,t,r,i,a){function s(e,t,n){var r=a.createElement("script"),o=null
return r.type="text/javascript",r.src=e,r.async=!0,o=function(e){Er(r,"load",o),Er(r,"error",o),a.body.removeChild(r),r=null
var s=-1,u="unknown"
e&&("load"!==e.type||i[t].called||(e={type:"error"}),u=e.type,s="error"===e.type?404:200),n&&n(s,u)},Ar(r,"load",o),Ar(r,"error",o),a.body.appendChild(r),o}return function(a,u,l,c,f,p,d,m){function g(){w&&w(),b&&b.abort()}function v(t,i,o,a,s){k!==n&&r.cancel(k),w=b=null,t(i,o,a,s),e.$$completeOutstandingRequest(h)}if(e.$$incOutstandingRequestCount(),u=u||e.url(),"jsonp"==Yn(a)){var y="_"+(i.counter++).toString(36)
i[y]=function(e){i[y].data=e,i[y].called=!0}
var w=s(u.replace("JSON_CALLBACK","angular.callbacks."+y),y,function(e,t){v(c,e,i[y].data,"",t),i[y]=h})}else{var b=t()
b.open(a,u,!0),o(f,function(e,t){$(e)&&b.setRequestHeader(t,e)}),b.onload=function(){var e=b.statusText||"",t="response"in b?b.response:b.responseText,n=1223===b.status?204:b.status
0===n&&(n=t?200:"file"==rn(u).protocol?404:0),v(c,n,t,b.getAllResponseHeaders(),e)}
var x=function(){v(c,-1,null,null,"")}
if(b.onerror=x,b.onabort=x,d&&(b.withCredentials=!0),m)try{b.responseType=m}catch(C){if("json"!==m)throw C}b.send(l||null)}if(p>0)var k=r(g,p)
else _(p)&&p.then(g)}}function ht(){var e="{{",t="}}"
this.startSymbol=function(t){return t?(e=t,this):e},this.endSymbol=function(e){return e?(t=e,this):t},this.$get=["$parse","$exceptionHandler","$sce",function(n,r,i){function o(e){return"\\\\\\"+e}function a(o,a,p,d){function h(n){return n.replace(l,e).replace(c,t)}function m(e){try{return e=N(e),d&&!$(e)?e:D(e)}catch(t){var n=ri("interr","Can't interpolate: {0}\n{1}",o,""+t)
r(n)}}d=!!d
for(var g,y,w,b=0,x=[],k=[],S=o.length,T=[],A=[];S>b;){if(-1==(g=o.indexOf(e,b))||-1==(y=o.indexOf(t,g+s))){b!==S&&T.push(h(o.substring(b)))
break}b!==g&&T.push(h(o.substring(b,g))),w=o.substring(g+s,y),x.push(w),k.push(n(w,m)),b=y+u,A.push(T.length),T.push("")}if(p&&T.length>1)throw ri("noconcat","Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",o)
if(!a||x.length){var E=function(e){for(var t=0,n=x.length;n>t;t++){if(d&&v(e[t]))return
T[A[t]]=e[t]}return T.join("")},N=function(e){return p?i.getTrusted(p,e):i.valueOf(e)},D=function(e){if(null==e)return""
switch(typeof e){case"string":break
case"number":e=""+e
break
default:e=U(e)}return e}
return f(function(e){var t=0,n=x.length,i=Array(n)
try{for(;n>t;t++)i[t]=k[t](e)
return E(i)}catch(a){var s=ri("interr","Can't interpolate: {0}\n{1}",o,""+a)
r(s)}},{exp:o,expressions:x,$$watchDelegate:function(e,t,n){var r
return e.$watchGroup(k,function(n,i){var o=E(n)
C(t)&&t.call(this,o,n!==i?r:o,e),r=o},n)}})}}var s=e.length,u=t.length,l=RegExp(e.replace(/./g,o),"g"),c=RegExp(t.replace(/./g,o),"g")
return a.startSymbol=function(){return e},a.endSymbol=function(){return t},a}]}function mt(){this.$get=["$rootScope","$window","$q","$$q",function(e,t,n,r){function i(i,a,s,u){var l=t.setInterval,c=t.clearInterval,f=0,p=$(u)&&!u,d=(p?r:n).defer(),h=d.promise
return s=$(s)?s:0,h.then(null,null,i),h.$$intervalId=l(function(){d.notify(f++),s>0&&f>=s&&(d.resolve(f),c(h.$$intervalId),delete o[h.$$intervalId]),p||e.$apply()},a),o[h.$$intervalId]=d,h}var o={}
return i.cancel=function(e){return e&&e.$$intervalId in o?(o[e.$$intervalId].reject("canceled"),t.clearInterval(e.$$intervalId),delete o[e.$$intervalId],!0):!1},i}]}function gt(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"¤",posSuf:"",negPre:"(¤",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(e){return 1===e?"one":"other"}}}}function vt(e){for(var t=e.split("/"),n=t.length;n--;)t[n]=Y(t[n])
return t.join("/")}function $t(e,t){var n=rn(e)
t.$$protocol=n.protocol,t.$$host=n.hostname,t.$$port=p(n.port)||oi[n.protocol]||null}function yt(e,t){var n="/"!==e.charAt(0)
n&&(e="/"+e)
var r=rn(e)
t.$$path=decodeURIComponent(n&&"/"===r.pathname.charAt(0)?r.pathname.substring(1):r.pathname),t.$$search=G(r.search),t.$$hash=decodeURIComponent(r.hash),t.$$path&&"/"!=t.$$path.charAt(0)&&(t.$$path="/"+t.$$path)}function wt(e,t){return 0===t.indexOf(e)?t.substr(e.length):n}function bt(e){var t=e.indexOf("#")
return-1==t?e:e.substr(0,t)}function xt(e){return e.replace(/(#.+)|#$/,"$1")}function Ct(e){return e.substr(0,bt(e).lastIndexOf("/")+1)}function kt(e){return e.substring(0,e.indexOf("/",e.indexOf("//")+2))}function St(e,t){this.$$html5=!0,t=t||""
var r=Ct(e)
$t(e,this),this.$$parse=function(e){var t=wt(r,e)
if(!w(t))throw ai("ipthprfx",'Invalid url "{0}", missing path prefix "{1}".',e,r)
yt(t,this),this.$$path||(this.$$path="/"),this.$$compose()},this.$$compose=function(){var e=X(this.$$search),t=this.$$hash?"#"+Y(this.$$hash):""
this.$$url=vt(this.$$path)+(e?"?"+e:"")+t,this.$$absUrl=r+this.$$url.substr(1)},this.$$parseLinkUrl=function(i,o){if(o&&"#"===o[0])return this.hash(o.slice(1)),!0
var a,s,u
return(a=wt(e,i))!==n?(s=a,u=(a=wt(t,a))!==n?r+(wt("/",a)||a):e+s):(a=wt(r,i))!==n?u=r+a:r==i+"/"&&(u=r),u&&this.$$parse(u),!!u}}function Tt(e,t){var n=Ct(e)
$t(e,this),this.$$parse=function(r){function i(e,t,n){var r,i=/^\/[A-Z]:(\/.*)/
return 0===t.indexOf(n)&&(t=t.replace(n,"")),i.exec(t)?e:(r=i.exec(e),r?r[1]:e)}var o,a=wt(e,r)||wt(n,r)
"#"===a.charAt(0)?(o=wt(t,a),v(o)&&(o=a)):o=this.$$html5?a:"",yt(o,this),this.$$path=i(this.$$path,o,e),this.$$compose()},this.$$compose=function(){var n=X(this.$$search),r=this.$$hash?"#"+Y(this.$$hash):""
this.$$url=vt(this.$$path)+(n?"?"+n:"")+r,this.$$absUrl=e+(this.$$url?t+this.$$url:"")},this.$$parseLinkUrl=function(t){return bt(e)==bt(t)?(this.$$parse(t),!0):!1}}function At(e,t){this.$$html5=!0,Tt.apply(this,arguments)
var n=Ct(e)
this.$$parseLinkUrl=function(r,i){if(i&&"#"===i[0])return this.hash(i.slice(1)),!0
var o,a
return e==bt(r)?o=r:(a=wt(n,r))?o=e+t+a:n===r+"/"&&(o=n),o&&this.$$parse(o),!!o},this.$$compose=function(){var n=X(this.$$search),r=this.$$hash?"#"+Y(this.$$hash):""
this.$$url=vt(this.$$path)+(n?"?"+n:"")+r,this.$$absUrl=e+t+this.$$url}}function Et(e){return function(){return this[e]}}function Nt(e,t){return function(n){return v(n)?this[e]:(this[e]=t(n),this.$$compose(),this)}}function Dt(){var e="",t={enabled:!1,requireBase:!0,rewriteLinks:!0}
this.hashPrefix=function(t){return $(t)?(e=t,this):e},this.html5Mode=function(e){return D(e)?(t.enabled=e,this):y(e)?(D(e.enabled)&&(t.enabled=e.enabled),D(e.requireBase)&&(t.requireBase=e.requireBase),D(e.rewriteLinks)&&(t.rewriteLinks=e.rewriteLinks),this):t},this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(n,r,i,o,a){function s(e,t,n){var i=l.url(),o=l.$$state
try{r.url(e,t,n),l.$$state=r.state()}catch(a){throw l.url(i),l.$$state=o,a}}function u(e,t){n.$broadcast("$locationChangeSuccess",l.absUrl(),e,l.$$state,t)}var l,c,f,p=r.baseHref(),d=r.url()
if(t.enabled){if(!p&&t.requireBase)throw ai("nobase","$location in HTML5 mode requires a <base> tag to be present!")
f=kt(d)+(p||"/"),c=i.history?St:At}else f=bt(d),c=Tt
l=new c(f,"#"+e),l.$$parseLinkUrl(d,d),l.$$state=r.state()
var h=/^\s*(javascript|mailto):/i
o.on("click",function(e){if(t.rewriteLinks&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&2!=e.which&&2!=e.button){for(var i=tr(e.target);"a"!==j(i[0]);)if(i[0]===o[0]||!(i=i.parent())[0])return
var s=i.prop("href"),u=i.attr("href")||i.attr("xlink:href")
y(s)&&""+s=="[object SVGAnimatedString]"&&(s=rn(s.animVal).href),h.test(s)||!s||i.attr("target")||e.isDefaultPrevented()||l.$$parseLinkUrl(s,u)&&(e.preventDefault(),l.absUrl()!=r.url()&&(n.$apply(),a.angular["ff-684208-preventDefault"]=!0))}}),xt(l.absUrl())!=xt(d)&&r.url(l.absUrl(),!0)
var m=!0
return r.onUrlChange(function(e,t){n.$evalAsync(function(){var r,i=l.absUrl(),o=l.$$state
l.$$parse(e),l.$$state=t,r=n.$broadcast("$locationChangeStart",e,i,t,o).defaultPrevented,l.absUrl()===e&&(r?(l.$$parse(i),l.$$state=o,s(i,!1,o)):(m=!1,u(i,o)))}),n.$$phase||n.$digest()}),n.$watch(function(){var e=xt(r.url()),t=xt(l.absUrl()),o=r.state(),a=l.$$replace,c=e!==t||l.$$html5&&i.history&&o!==l.$$state;(m||c)&&(m=!1,n.$evalAsync(function(){var t=l.absUrl(),r=n.$broadcast("$locationChangeStart",t,e,l.$$state,o).defaultPrevented
l.absUrl()===t&&(r?(l.$$parse(e),l.$$state=o):(c&&s(t,a,o===l.$$state?null:l.$$state),u(e,o)))})),l.$$replace=!1}),l}]}function _t(){var e=!0,t=this
this.debugEnabled=function(t){return $(t)?(e=t,this):e},this.$get=["$window",function(n){function r(e){return e instanceof Error&&(e.stack?e=e.message&&-1===e.stack.indexOf(e.message)?"Error: "+e.message+"\n"+e.stack:e.stack:e.sourceURL&&(e=e.message+"\n"+e.sourceURL+":"+e.line)),e}function i(e){var t=n.console||{},i=t[e]||t.log||h,a=!1
try{a=!!i.apply}catch(s){}return a?function(){var e=[]
return o(arguments,function(t){e.push(r(t))}),i.apply(t,e)}:function(e,t){i(e,null==t?"":t)}}return{log:i("log"),info:i("info"),warn:i("warn"),error:i("error"),debug:function(){var n=i("debug")
return function(){e&&n.apply(t,arguments)}}()}}]}function Ot(e,t){if("__defineGetter__"===e||"__defineSetter__"===e||"__lookupGetter__"===e||"__lookupSetter__"===e||"__proto__"===e)throw ui("isecfld","Attempting to access a disallowed field in Angular expressions! Expression: {0}",t)
return e}function Mt(e,t){if(e){if(e.constructor===e)throw ui("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",t)
if(e.window===e)throw ui("isecwindow","Referencing the Window in Angular expressions is disallowed! Expression: {0}",t)
if(e.children&&(e.nodeName||e.prop&&e.attr&&e.find))throw ui("isecdom","Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}",t)
if(e===Object)throw ui("isecobj","Referencing Object in Angular expressions is disallowed! Expression: {0}",t)}return e}function jt(e,t){if(e){if(e.constructor===e)throw ui("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",t)
if(e===li||e===ci||e===fi)throw ui("isecff","Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}",t)}}function Pt(e){return e.constant}function qt(e,t,n,r,i){Mt(e,i),Mt(t,i)
for(var o,a=n.split("."),s=0;a.length>1;s++){o=Ot(a.shift(),i)
var u=0===s&&t&&t[o]||e[o]
u||(u={},e[o]=u),e=Mt(u,i)}return o=Ot(a.shift(),i),Mt(e[o],i),e[o]=r,r}function Lt(e){return"constructor"==e}function Rt(e,t,r,i,o,a,s){Ot(e,a),Ot(t,a),Ot(r,a),Ot(i,a),Ot(o,a)
var u=function(e){return Mt(e,a)},l=s||Lt(e)?u:m,c=s||Lt(t)?u:m,f=s||Lt(r)?u:m,p=s||Lt(i)?u:m,d=s||Lt(o)?u:m
return function(a,s){var u=s&&s.hasOwnProperty(e)?s:a
return null==u?u:(u=l(u[e]),t?null==u?n:(u=c(u[t]),r?null==u?n:(u=f(u[r]),i?null==u?n:(u=p(u[i]),o?null==u?n:u=d(u[o]):u):u):u):u)}}function It(e,t){return function(n,r){return e(n,r,Mt,t)}}function Ht(e,t,r){var i=t.expensiveChecks,a=i?$i:vi,s=a[e]
if(s)return s
var u=e.split("."),l=u.length
if(t.csp)s=6>l?Rt(u[0],u[1],u[2],u[3],u[4],r,i):function(e,t){var o,a=0
do o=Rt(u[a++],u[a++],u[a++],u[a++],u[a++],r,i)(e,t),t=n,e=o
while(l>a)
return o}
else{var c=""
i&&(c+="s = eso(s, fe);\nl = eso(l, fe);\n")
var f=i
o(u,function(e,t){Ot(e,r)
var n=(t?"s":'((l&&l.hasOwnProperty("'+e+'"))?l:s)')+"."+e;(i||Lt(e))&&(n="eso("+n+", fe)",f=!0),c+="if(s == null) return undefined;\ns="+n+";\n"}),c+="return s;"
var p=Function("s","l","eso","fe",c)
p.toString=g(c),f&&(p=It(p,r)),s=p}return s.sharedGetter=!0,s.assign=function(t,n,r){return qt(t,r,e,n,e)},a[e]=s,s}function Ft(e){return C(e.valueOf)?e.valueOf():yi.call(e)}function Vt(){var e=le(),t=le()
this.$get=["$filter","$sniffer",function(n,r){function i(e){var t=e
return e.sharedGetter&&(t=function(t,n){return e(t,n)},t.literal=e.literal,t.constant=e.constant,t.assign=e.assign),t}function a(e,t){for(var n=0,r=e.length;r>n;n++){var i=e[n]
i.constant||(i.inputs?a(i.inputs,t):-1===t.indexOf(i)&&t.push(i))}return t}function s(e,t){return null==e||null==t?e===t:"object"==typeof e&&(e=Ft(e),"object"==typeof e)?!1:e===t||e!==e&&t!==t}function u(e,t,n,r){var i,o=r.$$inputs||(r.$$inputs=a(r.inputs,[]))
if(1===o.length){var u=s
return o=o[0],e.$watch(function(e){var t=o(e)
return s(t,u)||(i=r(e),u=t&&Ft(t)),i},t,n)}for(var l=[],c=0,f=o.length;f>c;c++)l[c]=s
return e.$watch(function(e){for(var t=!1,n=0,a=o.length;a>n;n++){var u=o[n](e);(t||(t=!s(u,l[n])))&&(l[n]=u&&Ft(u))}return t&&(i=r(e)),i},t,n)}function l(e,t,n,r){var i,o
return i=e.$watch(function(e){return r(e)},function(e,n,r){o=e,C(t)&&t.apply(this,arguments),$(e)&&r.$$postDigest(function(){$(o)&&i()})},n)}function c(e,t,n,r){function i(e){var t=!0
return o(e,function(e){$(e)||(t=!1)}),t}var a,s
return a=e.$watch(function(e){return r(e)},function(e,n,r){s=e,C(t)&&t.call(this,e,n,r),i(e)&&r.$$postDigest(function(){i(s)&&a()})},n)}function f(e,t,n,r){var i
return i=e.$watch(function(e){return r(e)},function(){C(t)&&t.apply(this,arguments),i()},n)}function p(e,t){if(!t)return e
var n=e.$$watchDelegate,r=n!==c&&n!==l,i=r?function(n,r){var i=e(n,r)
return t(i,n,r)}:function(n,r){var i=e(n,r),o=t(i,n,r)
return $(i)?o:i}
return e.$$watchDelegate&&e.$$watchDelegate!==u?i.$$watchDelegate=e.$$watchDelegate:t.$stateful||(i.$$watchDelegate=u,i.inputs=[e]),i}var d={csp:r.csp,expensiveChecks:!1},m={csp:r.csp,expensiveChecks:!0}
return function(r,o,a){var s,g,v
switch(typeof r){case"string":v=r=r.trim()
var $=a?t:e
if(s=$[v],!s){":"===r.charAt(0)&&":"===r.charAt(1)&&(g=!0,r=r.substring(2))
var y=a?m:d,w=new mi(y),b=new gi(w,n,y)
s=b.parse(r),s.constant?s.$$watchDelegate=f:g?(s=i(s),s.$$watchDelegate=s.literal?c:l):s.inputs&&(s.$$watchDelegate=u),$[v]=s}return p(s,o)
case"function":return p(r,o)
default:return p(h,o)}}}]}function Ut(){this.$get=["$rootScope","$exceptionHandler",function(e,t){return Wt(function(t){e.$evalAsync(t)},t)}]}function Bt(){this.$get=["$browser","$exceptionHandler",function(e,t){return Wt(function(t){e.defer(t)},t)}]}function Wt(e,t){function i(e,t,n){function r(t){return function(n){i||(i=!0,t.call(e,n))}}var i=!1
return[r(t),r(n)]}function a(){this.$$state={status:0}}function s(e,t){return function(n){t.call(e,n)}}function u(e){var r,i,o
o=e.pending,e.processScheduled=!1,e.pending=n
for(var a=0,s=o.length;s>a;++a){i=o[a][0],r=o[a][e.status]
try{C(r)?i.resolve(r(e.value)):1===e.status?i.resolve(e.value):i.reject(e.value)}catch(u){i.reject(u),t(u)}}}function l(t){!t.processScheduled&&t.pending&&(t.processScheduled=!0,e(function(){u(t)}))}function c(){this.promise=new a,this.resolve=s(this,this.resolve),this.reject=s(this,this.reject),this.notify=s(this,this.notify)}function f(e){var t=new c,n=0,r=pr(e)?[]:{}
return o(e,function(e,i){n++,v(e).then(function(e){r.hasOwnProperty(i)||(r[i]=e,--n||t.resolve(r))},function(e){r.hasOwnProperty(i)||t.reject(e)})}),0===n&&t.resolve(r),t.promise}var p=r("$q",TypeError),d=function(){return new c}
a.prototype={then:function(e,t,n){var r=new c
return this.$$state.pending=this.$$state.pending||[],this.$$state.pending.push([r,e,t,n]),this.$$state.status>0&&l(this.$$state),r.promise},"catch":function(e){return this.then(null,e)},"finally":function(e,t){return this.then(function(t){return g(t,!0,e)},function(t){return g(t,!1,e)},t)}},c.prototype={resolve:function(e){this.promise.$$state.status||(e===this.promise?this.$$reject(p("qcycle","Expected promise to be resolved with value other than itself '{0}'",e)):this.$$resolve(e))},$$resolve:function(e){var n,r
r=i(this,this.$$resolve,this.$$reject)
try{(y(e)||C(e))&&(n=e&&e.then),C(n)?(this.promise.$$state.status=-1,n.call(e,r[0],r[1],this.notify)):(this.promise.$$state.value=e,this.promise.$$state.status=1,l(this.promise.$$state))}catch(o){r[1](o),t(o)}},reject:function(e){this.promise.$$state.status||this.$$reject(e)},$$reject:function(e){this.promise.$$state.value=e,this.promise.$$state.status=2,l(this.promise.$$state)},notify:function(n){var r=this.promise.$$state.pending
this.promise.$$state.status<=0&&r&&r.length&&e(function(){for(var e,i,o=0,a=r.length;a>o;o++){i=r[o][0],e=r[o][3]
try{i.notify(C(e)?e(n):n)}catch(s){t(s)}}})}}
var h=function(e){var t=new c
return t.reject(e),t.promise},m=function(e,t){var n=new c
return t?n.resolve(e):n.reject(e),n.promise},g=function(e,t,n){var r=null
try{C(n)&&(r=n())}catch(i){return m(i,!1)}return _(r)?r.then(function(){return m(e,t)},function(e){return m(e,!1)}):m(e,t)},v=function(e,t,n,r){var i=new c
return i.resolve(e),i.promise.then(t,n,r)},$=function w(e){function t(e){r.resolve(e)}function n(e){r.reject(e)}if(!C(e))throw p("norslvr","Expected resolverFn, got '{0}'",e)
if(!(this instanceof w))return new w(e)
var r=new c
return e(t,n),r.promise}
return $.defer=d,$.reject=h,$.when=v,$.all=f,$}function zt(){this.$get=["$window","$timeout",function(e,t){var n=e.requestAnimationFrame||e.webkitRequestAnimationFrame,r=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.webkitCancelRequestAnimationFrame,i=!!n,o=i?function(e){var t=n(e)
return function(){r(t)}}:function(e){var n=t(e,16.66,!1)
return function(){t.cancel(n)}}
return o.supported=i,o}]}function Gt(){function e(e){function t(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$id=l(),this.$$ChildScope=null}return t.prototype=e,t}var t=10,n=r("$rootScope"),a=null,s=null
this.digestTtl=function(e){return arguments.length&&(t=e),t},this.$get=["$injector","$exceptionHandler","$parse","$browser",function(r,u,c,f){function p(e){e.currentScope.$$destroyed=!0}function d(){this.$id=l(),this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,this.$root=this,this.$$destroyed=!1,this.$$listeners={},this.$$listenerCount={},this.$$isolateBindings=null}function m(e){if(k.$$phase)throw n("inprog","{0} already in progress",k.$$phase)
k.$$phase=e}function g(){k.$$phase=null}function $(e,t,n){do e.$$listenerCount[n]-=t,0===e.$$listenerCount[n]&&delete e.$$listenerCount[n]
while(e=e.$parent)}function w(){}function b(){for(;A.length;)try{A.shift()()}catch(e){u(e)}s=null}function x(){null===s&&(s=f.defer(function(){k.$apply(b)}))}d.prototype={constructor:d,$new:function(t,n){var r
return n=n||this,t?(r=new d,r.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=e(this)),r=new this.$$ChildScope),r.$parent=n,r.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=r,n.$$childTail=r):n.$$childHead=n.$$childTail=r,(t||n!=this)&&r.$on("$destroy",p),r},$watch:function(e,t,n){var r=c(e)
if(r.$$watchDelegate)return r.$$watchDelegate(this,t,n,r)
var i=this,o=i.$$watchers,s={fn:t,last:w,get:r,exp:e,eq:!!n}
return a=null,C(t)||(s.fn=h),o||(o=i.$$watchers=[]),o.unshift(s),function(){P(o,s),a=null}},$watchGroup:function(e,t){function n(){u=!1,l?(l=!1,t(i,i,s)):t(i,r,s)}var r=Array(e.length),i=Array(e.length),a=[],s=this,u=!1,l=!0
if(!e.length){var c=!0
return s.$evalAsync(function(){c&&t(i,i,s)}),function(){c=!1}}return 1===e.length?this.$watch(e[0],function(e,n,o){i[0]=e,r[0]=n,t(i,e===n?i:r,o)}):(o(e,function(e,t){var o=s.$watch(e,function(e,o){i[t]=e,r[t]=o,u||(u=!0,s.$evalAsync(n))})
a.push(o)}),function(){for(;a.length;)a.shift()()})},$watchCollection:function(e,t){function n(e){o=e
var t,n,r,s,u
if(!v(o)){if(y(o))if(i(o)){a!==d&&(a=d,g=a.length=0,f++),t=o.length,g!==t&&(f++,a.length=g=t)
for(var l=0;t>l;l++)u=a[l],s=o[l],r=u!==u&&s!==s,r||u===s||(f++,a[l]=s)}else{a!==h&&(a=h={},g=0,f++),t=0
for(n in o)o.hasOwnProperty(n)&&(t++,s=o[n],u=a[n],n in a?(r=u!==u&&s!==s,r||u===s||(f++,a[n]=s)):(g++,a[n]=s,f++))
if(g>t){f++
for(n in a)o.hasOwnProperty(n)||(g--,delete a[n])}}else a!==o&&(a=o,f++)
return f}}function r(){if(m?(m=!1,t(o,o,u)):t(o,s,u),l)if(y(o))if(i(o)){s=Array(o.length)
for(var e=0;e<o.length;e++)s[e]=o[e]}else{s={}
for(var n in o)Jn.call(o,n)&&(s[n]=o[n])}else s=o}n.$stateful=!0
var o,a,s,u=this,l=t.length>1,f=0,p=c(e,n),d=[],h={},m=!0,g=0
return this.$watch(p,r)},$digest:function(){var e,r,i,o,l,c,p,d,h,v,$=t,y=this,x=[]
m("$digest"),f.$$checkUrlChange(),this===k&&null!==s&&(f.defer.cancel(s),b()),a=null
do{for(c=!1,d=y;S.length;){try{v=S.shift(),v.scope.$eval(v.expression,v.locals)}catch(A){u(A)}a=null}e:do{if(o=d.$$watchers)for(l=o.length;l--;)try{if(e=o[l])if((r=e.get(d))===(i=e.last)||(e.eq?R(r,i):"number"==typeof r&&"number"==typeof i&&isNaN(r)&&isNaN(i))){if(e===a){c=!1
break e}}else c=!0,a=e,e.last=e.eq?q(r,null):r,e.fn(r,i===w?r:i,d),5>$&&(h=4-$,x[h]||(x[h]=[]),x[h].push({msg:C(e.exp)?"fn: "+(e.exp.name||""+e.exp):e.exp,newVal:r,oldVal:i}))}catch(A){u(A)}if(!(p=d.$$childHead||d!==y&&d.$$nextSibling))for(;d!==y&&!(p=d.$$nextSibling);)d=d.$parent}while(d=p)
if((c||S.length)&&!$--)throw g(),n("infdig","{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}",t,x)}while(c||S.length)
for(g();T.length;)try{T.shift()()}catch(A){u(A)}},$destroy:function(){if(!this.$$destroyed){var e=this.$parent
if(this.$broadcast("$destroy"),this.$$destroyed=!0,this!==k){for(var t in this.$$listenerCount)$(this,this.$$listenerCount[t],t)
e.$$childHead==this&&(e.$$childHead=this.$$nextSibling),e.$$childTail==this&&(e.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=h,this.$on=this.$watch=this.$watchGroup=function(){return h},this.$$listeners={},this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}}},$eval:function(e,t){return c(e)(this,t)},$evalAsync:function(e,t){k.$$phase||S.length||f.defer(function(){S.length&&k.$digest()}),S.push({scope:this,expression:e,locals:t})},$$postDigest:function(e){T.push(e)},$apply:function(e){try{return m("$apply"),this.$eval(e)}catch(t){u(t)}finally{g()
try{k.$digest()}catch(t){throw u(t),t}}},$applyAsync:function(e){function t(){n.$eval(e)}var n=this
e&&A.push(t),x()},$on:function(e,t){var n=this.$$listeners[e]
n||(this.$$listeners[e]=n=[]),n.push(t)
var r=this
do r.$$listenerCount[e]||(r.$$listenerCount[e]=0),r.$$listenerCount[e]++
while(r=r.$parent)
var i=this
return function(){var r=n.indexOf(t);-1!==r&&(n[r]=null,$(i,1,e))}},$emit:function(e){var t,n,r,i=[],o=this,a=!1,s={name:e,targetScope:o,stopPropagation:function(){a=!0},preventDefault:function(){s.defaultPrevented=!0},defaultPrevented:!1},l=I([s],arguments,1)
do{for(t=o.$$listeners[e]||i,s.currentScope=o,n=0,r=t.length;r>n;n++)if(t[n])try{t[n].apply(null,l)}catch(c){u(c)}else t.splice(n,1),n--,r--
if(a)return s.currentScope=null,s
o=o.$parent}while(o)
return s.currentScope=null,s},$broadcast:function(e){var t=this,n=t,r=t,i={name:e,targetScope:t,preventDefault:function(){i.defaultPrevented=!0},defaultPrevented:!1}
if(!t.$$listenerCount[e])return i
for(var o,a,s,l=I([i],arguments,1);n=r;){for(i.currentScope=n,o=n.$$listeners[e]||[],a=0,s=o.length;s>a;a++)if(o[a])try{o[a].apply(null,l)}catch(c){u(c)}else o.splice(a,1),a--,s--
if(!(r=n.$$listenerCount[e]&&n.$$childHead||n!==t&&n.$$nextSibling))for(;n!==t&&!(r=n.$$nextSibling);)n=n.$parent}return i.currentScope=null,i}}
var k=new d,S=k.$$asyncQueue=[],T=k.$$postDigestQueue=[],A=k.$$applyAsyncQueue=[]
return k}]}function Xt(){var e=/^\s*(https?|ftp|mailto|tel|file):/,t=/^\s*((https?|ftp|file|blob):|data:image\/)/
this.aHrefSanitizationWhitelist=function(t){return $(t)?(e=t,this):e},this.imgSrcSanitizationWhitelist=function(e){return $(e)?(t=e,this):t},this.$get=function(){return function(n,r){var i,o=r?t:e
return i=rn(n).href,""===i||i.match(o)?n:"unsafe:"+i}}}function Yt(e){if("self"===e)return e
if(w(e)){if(e.indexOf("***")>-1)throw wi("iwcard","Illegal sequence *** in string matcher.  String: {0}",e)
return e=hr(e).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*"),RegExp("^"+e+"$")}if(k(e))return RegExp("^"+e.source+"$")
throw wi("imatcher",'Matchers may only be "self", string patterns or RegExp objects')}function Jt(e){var t=[]
return $(e)&&o(e,function(e){t.push(Yt(e))}),t}function Kt(){this.SCE_CONTEXTS=bi
var e=["self"],t=[]
this.resourceUrlWhitelist=function(t){return arguments.length&&(e=Jt(t)),e},this.resourceUrlBlacklist=function(e){return arguments.length&&(t=Jt(e)),t},this.$get=["$injector",function(r){function i(e,t){return"self"===e?on(t):!!e.exec(t.href)}function o(n){var r,o,a=rn(""+n),s=!1
for(r=0,o=e.length;o>r;r++)if(i(e[r],a)){s=!0
break}if(s)for(r=0,o=t.length;o>r;r++)if(i(t[r],a)){s=!1
break}return s}function a(e){var t=function(e){this.$$unwrapTrustedValue=function(){return e}}
return e&&(t.prototype=new e),t.prototype.valueOf=function(){return this.$$unwrapTrustedValue()},t.prototype.toString=function(){return""+this.$$unwrapTrustedValue()},t}function s(e,t){var r=p.hasOwnProperty(e)?p[e]:null
if(!r)throw wi("icontext","Attempted to trust a value in invalid context. Context: {0}; Value: {1}",e,t)
if(null===t||t===n||""===t)return t
if("string"!=typeof t)throw wi("itype","Attempted to trust a non-string value in a content requiring a string: Context: {0}",e)
return new r(t)}function u(e){return e instanceof f?e.$$unwrapTrustedValue():e}function l(e,t){if(null===t||t===n||""===t)return t
var r=p.hasOwnProperty(e)?p[e]:null
if(r&&t instanceof r)return t.$$unwrapTrustedValue()
if(e===bi.RESOURCE_URL){if(o(t))return t
throw wi("insecurl","Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",""+t)}if(e===bi.HTML)return c(t)
throw wi("unsafe","Attempting to use an unsafe value in a safe context.")}var c=function(){throw wi("unsafe","Attempting to use an unsafe value in a safe context.")}
r.has("$sanitize")&&(c=r.get("$sanitize"))
var f=a(),p={}
return p[bi.HTML]=a(f),p[bi.CSS]=a(f),p[bi.URL]=a(f),p[bi.JS]=a(f),p[bi.RESOURCE_URL]=a(p[bi.URL]),{trustAs:s,getTrusted:l,valueOf:u}}]}function Zt(){var e=!0
this.enabled=function(t){return arguments.length&&(e=!!t),e},this.$get=["$parse","$sceDelegate",function(t,n){if(e&&8>er)throw wi("iequirks","Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.")
var r=L(bi)
r.isEnabled=function(){return e},r.trustAs=n.trustAs,r.getTrusted=n.getTrusted,r.valueOf=n.valueOf,e||(r.trustAs=r.getTrusted=function(e,t){return t},r.valueOf=m),r.parseAs=function(e,n){var i=t(n)
return i.literal&&i.constant?i:t(n,function(t){return r.getTrusted(e,t)})}
var i=r.parseAs,a=r.getTrusted,s=r.trustAs
return o(bi,function(e,t){var n=Yn(t)
r[me("parse_as_"+n)]=function(t){return i(e,t)},r[me("get_trusted_"+n)]=function(t){return a(e,t)},r[me("trust_as_"+n)]=function(t){return s(e,t)}}),r}]}function Qt(){this.$get=["$window","$document",function(e,t){var n,r,i={},o=p((/android (\d+)/.exec(Yn((e.navigator||{}).userAgent))||[])[1]),a=/Boxee/i.test((e.navigator||{}).userAgent),s=t[0]||{},u=/^(Moz|webkit|ms)(?=[A-Z])/,l=s.body&&s.body.style,c=!1,f=!1
if(l){for(var d in l)if(r=u.exec(d)){n=r[0],n=n.substr(0,1).toUpperCase()+n.substr(1)
break}n||(n="WebkitOpacity"in l&&"webkit"),c=!!("transition"in l||n+"Transition"in l),f=!!("animation"in l||n+"Animation"in l),!o||c&&f||(c=w(s.body.style.webkitTransition),f=w(s.body.style.webkitAnimation))}return{history:!(!e.history||!e.history.pushState||4>o||a),hasEvent:function(e){if("input"===e&&11>=er)return!1
if(v(i[e])){var t=s.createElement("div")
i[e]="on"+e in t}return i[e]},csp:mr(),vendorPrefix:n,transitions:c,animations:f,android:o}}]}function en(){this.$get=["$templateCache","$http","$q",function(e,t,n){function r(i,o){function a(e){if(!o)throw Yr("tpload","Failed to load template: {0}",i)
return n.reject(e)}r.totalPendingRequests++
var s=t.defaults&&t.defaults.transformResponse
pr(s)?s=s.filter(function(e){return e!==it}):s===it&&(s=null)
var u={cache:e,transformResponse:s}
return t.get(i,u)["finally"](function(){r.totalPendingRequests--}).then(function(e){return e.data},a)}return r.totalPendingRequests=0,r}]}function tn(){this.$get=["$rootScope","$browser","$location",function(e,t,n){var r={}
return r.findBindings=function(e,t,n){var r=e.getElementsByClassName("ng-binding"),i=[]
return o(r,function(e){var r=lr.element(e).data("$binding")
r&&o(r,function(r){if(n){var o=RegExp("(^|\\s)"+hr(t)+"(\\s|\\||$)")
o.test(r)&&i.push(e)}else-1!=r.indexOf(t)&&i.push(e)})}),i},r.findModels=function(e,t,n){for(var r=["ng-","data-ng-","ng\\:"],i=0;i<r.length;++i){var o=n?"=":"*=",a="["+r[i]+"model"+o+'"'+t+'"]',s=e.querySelectorAll(a)
if(s.length)return s}},r.getLocation=function(){return n.url()},r.setLocation=function(t){t!==n.url()&&(n.url(t),e.$digest())},r.whenStable=function(e){t.notifyWhenNoOutstandingRequests(e)},r}]}function nn(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(e,t,n,r,i){function o(o,s,u){var l,c=$(u)&&!u,f=(c?r:n).defer(),p=f.promise
return l=t.defer(function(){try{f.resolve(o())}catch(t){f.reject(t),i(t)}finally{delete a[p.$$timeoutId]}c||e.$apply()},s),p.$$timeoutId=l,a[l]=f,p}var a={}
return o.cancel=function(e){return e&&e.$$timeoutId in a?(a[e.$$timeoutId].reject("canceled"),delete a[e.$$timeoutId],t.defer.cancel(e.$$timeoutId)):!1},o}]}function rn(e){var t=e
return er&&(xi.setAttribute("href",t),t=xi.href),xi.setAttribute("href",t),{href:xi.href,protocol:xi.protocol?xi.protocol.replace(/:$/,""):"",host:xi.host,search:xi.search?xi.search.replace(/^\?/,""):"",hash:xi.hash?xi.hash.replace(/^#/,""):"",hostname:xi.hostname,port:xi.port,pathname:"/"===xi.pathname.charAt(0)?xi.pathname:"/"+xi.pathname}}function on(e){var t=w(e)?rn(e):e
return t.protocol===Ci.protocol&&t.host===Ci.host}function an(){this.$get=g(e)}function sn(e){function t(r,i){if(y(r)){var a={}
return o(r,function(e,n){a[n]=t(n,e)}),a}return e.factory(r+n,i)}var n="Filter"
this.register=t,this.$get=["$injector",function(e){return function(t){return e.get(t+n)}}],t("currency",fn),t("date",kn),t("filter",un),t("json",Sn),t("limitTo",Tn),t("lowercase",Ei),t("number",pn),t("orderBy",An),t("uppercase",Ni)}function un(){return function(e,t,n){if(!pr(e))return e
var r,i
switch(typeof t){case"function":r=t
break
case"boolean":case"number":case"string":i=!0
case"object":r=ln(t,n,i)
break
default:return e}return e.filter(r)}}function ln(e,t,n){var r,i=y(e)&&"$"in e
return t===!0?t=R:C(t)||(t=function(e,t){return y(e)||y(t)?!1:(e=Yn(""+e),t=Yn(""+t),-1!==e.indexOf(t))}),r=function(r){return i&&!y(r)?cn(r,e.$,t,!1):cn(r,e,t,n)}}function cn(e,t,n,r,i){var o=null!==e?typeof e:"null",a=null!==t?typeof t:"null"
if("string"===a&&"!"===t.charAt(0))return!cn(e,t.substring(1),n,r)
if(pr(e))return e.some(function(e){return cn(e,t,n,r)})
switch(o){case"object":var s
if(r){for(s in e)if("$"!==s.charAt(0)&&cn(e[s],t,n,!0))return!0
return i?!1:cn(e,t,n,!1)}if("object"===a){for(s in t){var u=t[s]
if(!C(u)&&!v(u)){var l="$"===s,c=l?e:e[s]
if(!cn(c,u,n,l,l))return!1}}return!0}return n(e,t)
case"function":return!1
default:return n(e,t)}}function fn(e){var t=e.NUMBER_FORMATS
return function(e,n,r){return v(n)&&(n=t.CURRENCY_SYM),v(r)&&(r=t.PATTERNS[1].maxFrac),null==e?e:dn(e,t.PATTERNS[1],t.GROUP_SEP,t.DECIMAL_SEP,r).replace(/\u00A4/g,n)}}function pn(e){var t=e.NUMBER_FORMATS
return function(e,n){return null==e?e:dn(e,t.PATTERNS[0],t.GROUP_SEP,t.DECIMAL_SEP,n)}}function dn(e,t,n,r,i){if(!isFinite(e)||y(e))return""
var o=0>e
e=Math.abs(e)
var a=e+"",s="",u=[],l=!1
if(-1!==a.indexOf("e")){var c=a.match(/([\d\.]+)e(-?)(\d+)/)
c&&"-"==c[2]&&c[3]>i+1?e=0:(s=a,l=!0)}if(l)i>0&&1>e&&(s=e.toFixed(i),e=parseFloat(s))
else{var f=(a.split(ki)[1]||"").length
v(i)&&(i=Math.min(Math.max(t.minFrac,f),t.maxFrac)),e=+(""+Math.round(+(""+e+"e"+i))+"e"+-i)
var p=(""+e).split(ki),d=p[0]
p=p[1]||""
var h,m=0,g=t.lgSize,$=t.gSize
if(d.length>=g+$)for(m=d.length-g,h=0;m>h;h++)(m-h)%$===0&&0!==h&&(s+=n),s+=d.charAt(h)
for(h=m;h<d.length;h++)(d.length-h)%g===0&&0!==h&&(s+=n),s+=d.charAt(h)
for(;p.length<i;)p+="0"
i&&"0"!==i&&(s+=r+p.substr(0,i))}return 0===e&&(o=!1),u.push(o?t.negPre:t.posPre,s,o?t.negSuf:t.posSuf),u.join("")}function hn(e,t,n){var r=""
for(0>e&&(r="-",e=-e),e=""+e;e.length<t;)e="0"+e
return n&&(e=e.substr(e.length-t)),r+e}function mn(e,t,n,r){return n=n||0,function(i){var o=i["get"+e]()
return(n>0||o>-n)&&(o+=n),0===o&&-12==n&&(o=12),hn(o,t,r)}}function gn(e,t){return function(n,r){var i=n["get"+e](),o=Kn(t?"SHORT"+e:e)
return r[o][i]}}function vn(e){var t=-1*e.getTimezoneOffset(),n=t>=0?"+":""
return n+=hn(Math[t>0?"floor":"ceil"](t/60),2)+hn(Math.abs(t%60),2)}function $n(e){var t=new Date(e,0,1).getDay()
return new Date(e,0,(4>=t?5:12)-t)}function yn(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+(4-e.getDay()))}function wn(e){return function(t){var n=$n(t.getFullYear()),r=yn(t),i=+r-+n,o=1+Math.round(i/6048e5)
return hn(o,e)}}function bn(e,t){return e.getHours()<12?t.AMPMS[0]:t.AMPMS[1]}function xn(e,t){return e.getFullYear()<=0?t.ERAS[0]:t.ERAS[1]}function Cn(e,t){return e.getFullYear()<=0?t.ERANAMES[0]:t.ERANAMES[1]}function kn(e){function t(e){var t
if(t=e.match(n)){var r=new Date(0),i=0,o=0,a=t[8]?r.setUTCFullYear:r.setFullYear,s=t[8]?r.setUTCHours:r.setHours
t[9]&&(i=p(t[9]+t[10]),o=p(t[9]+t[11])),a.call(r,p(t[1]),p(t[2])-1,p(t[3]))
var u=p(t[4]||0)-i,l=p(t[5]||0)-o,c=p(t[6]||0),f=Math.round(1e3*parseFloat("0."+(t[7]||0)))
return s.call(r,u,l,c,f),r}return e}var n=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/
return function(n,r,i){var a,s,u="",l=[]
if(r=r||"mediumDate",r=e.DATETIME_FORMATS[r]||r,w(n)&&(n=Ai.test(n)?p(n):t(n)),b(n)&&(n=new Date(n)),!x(n))return n
for(;r;)s=Ti.exec(r),s?(l=I(l,s,1),r=l.pop()):(l.push(r),r=null)
return i&&"UTC"===i&&(n=new Date(n.getTime()),n.setMinutes(n.getMinutes()+n.getTimezoneOffset())),o(l,function(t){a=Si[t],u+=a?a(n,e.DATETIME_FORMATS):t.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}}function Sn(){return function(e,t){return v(t)&&(t=2),U(e,t)}}function Tn(){return function(e,t){return b(e)&&(e=""+e),pr(e)||w(e)?(t=Math.abs(+t)===1/0?+t:p(t),t?t>0?e.slice(0,t):e.slice(t):w(e)?"":[]):e}}function An(e){return function(t,n,r){function o(e,t){for(var r=0;r<n.length;r++){var i=n[r](e,t)
if(0!==i)return i}return 0}function a(e,t){return t?function(t,n){return e(n,t)}:e}function s(e){switch(typeof e){case"number":case"boolean":case"string":return!0
default:return!1}}function u(e){return null===e?"null":"function"==typeof e.valueOf&&(e=e.valueOf(),s(e))?e:"function"==typeof e.toString&&(e=""+e,s(e))?e:""}function l(e,t){var n=typeof e,r=typeof t
return n===r&&"object"===n&&(e=u(e),t=u(t)),n===r?("string"===n&&(e=e.toLowerCase(),t=t.toLowerCase()),e===t?0:t>e?-1:1):r>n?-1:1}return i(t)?(n=pr(n)?n:[n],0===n.length&&(n=["+"]),n=n.map(function(t){var n=!1,r=t||m
if(w(t)){if(("+"==t.charAt(0)||"-"==t.charAt(0))&&(n="-"==t.charAt(0),t=t.substring(1)),""===t)return a(l,n)
if(r=e(t),r.constant){var i=r()
return a(function(e,t){return l(e[i],t[i])},n)}}return a(function(e,t){return l(r(e),r(t))},n)}),ir.call(t).sort(a(o,r))):t}}function En(e){return C(e)&&(e={link:e}),e.restrict=e.restrict||"AC",g(e)}function Nn(e,t){e.$name=t}function Dn(e,t,r,i,a){var s=this,u=[],l=s.$$parentForm=e.parent().controller("form")||Oi
s.$error={},s.$$success={},s.$pending=n,s.$name=a(t.name||t.ngForm||"")(r),s.$dirty=!1,s.$pristine=!0,s.$valid=!0,s.$invalid=!1,s.$submitted=!1,l.$addControl(s),s.$rollbackViewValue=function(){o(u,function(e){e.$rollbackViewValue()})},s.$commitViewValue=function(){o(u,function(e){e.$commitViewValue()})},s.$addControl=function(e){ae(e.$name,"input"),u.push(e),e.$name&&(s[e.$name]=e)},s.$$renameControl=function(e,t){var n=e.$name
s[n]===e&&delete s[n],s[t]=e,e.$name=t},s.$removeControl=function(e){e.$name&&s[e.$name]===e&&delete s[e.$name],o(s.$pending,function(t,n){s.$setValidity(n,null,e)}),o(s.$error,function(t,n){s.$setValidity(n,null,e)}),o(s.$$success,function(t,n){s.$setValidity(n,null,e)}),P(u,e)},Wn({ctrl:this,$element:e,set:function(e,t,n){var r=e[t]
if(r){var i=r.indexOf(n);-1===i&&r.push(n)}else e[t]=[n]},unset:function(e,t,n){var r=e[t]
r&&(P(r,n),0===r.length&&delete e[t])},parentForm:l,$animate:i}),s.$setDirty=function(){i.removeClass(e,mo),i.addClass(e,go),s.$dirty=!0,s.$pristine=!1,l.$setDirty()},s.$setPristine=function(){i.setClass(e,mo,go+" "+Mi),s.$dirty=!1,s.$pristine=!0,s.$submitted=!1,o(u,function(e){e.$setPristine()})},s.$setUntouched=function(){o(u,function(e){e.$setUntouched()})},s.$setSubmitted=function(){i.addClass(e,Mi),s.$submitted=!0,l.$setSubmitted()}}function _n(e){e.$formatters.push(function(t){return e.$isEmpty(t)?t:""+t})}function On(e,t,n,r,i,o){Mn(e,t,n,r,i,o),_n(r)}function Mn(e,t,n,r,i,o){var a=Yn(t[0].type)
if(!i.android){var s=!1
t.on("compositionstart",function(){s=!0}),t.on("compositionend",function(){s=!1,u()})}var u=function(e){if(l&&(o.defer.cancel(l),l=null),!s){var i=t.val(),u=e&&e.type
"password"===a||n.ngTrim&&"false"===n.ngTrim||(i=dr(i)),(r.$viewValue!==i||""===i&&r.$$hasNativeValidators)&&r.$setViewValue(i,u)}}
if(i.hasEvent("input"))t.on("input",u)
else{var l,c=function(e,t,n){l||(l=o.defer(function(){l=null,t&&t.value===n||u(e)}))}
t.on("keydown",function(e){var t=e.keyCode
91===t||t>15&&19>t||t>=37&&40>=t||c(e,this,this.value)}),i.hasEvent("paste")&&t.on("paste cut",c)}t.on("change",u),r.$render=function(){t.val(r.$isEmpty(r.$viewValue)?"":r.$viewValue)}}function jn(e,t){if(x(e))return e
if(w(e)){Ui.lastIndex=0
var n=Ui.exec(e)
if(n){var r=+n[1],i=+n[2],o=0,a=0,s=0,u=0,l=$n(r),c=7*(i-1)
return t&&(o=t.getHours(),a=t.getMinutes(),s=t.getSeconds(),u=t.getMilliseconds()),new Date(r,0,l.getDate()+c,o,a,s,u)}}return NaN}function Pn(e,t){return function(n,r){var i,a
if(x(n))return n
if(w(n)){if('"'==n.charAt(0)&&'"'==n.charAt(n.length-1)&&(n=n.substring(1,n.length-1)),Li.test(n))return new Date(n)
if(e.lastIndex=0,i=e.exec(n))return i.shift(),a=r?{yyyy:r.getFullYear(),MM:r.getMonth()+1,dd:r.getDate(),HH:r.getHours(),mm:r.getMinutes(),ss:r.getSeconds(),sss:r.getMilliseconds()/1e3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},o(i,function(e,n){n<t.length&&(a[t[n]]=+e)}),new Date(a.yyyy,a.MM-1,a.dd,a.HH,a.mm,a.ss||0,1e3*a.sss||0)}return NaN}}function qn(e,t,r,i){return function(o,a,s,u,l,c,f){function p(e){return e&&!(e.getTime&&e.getTime()!==e.getTime())}function d(e){return $(e)?x(e)?e:r(e):n}Ln(o,a,s,u),Mn(o,a,s,u,l,c)
var h,m=u&&u.$options&&u.$options.timezone
if(u.$$parserName=e,u.$parsers.push(function(e){if(u.$isEmpty(e))return null
if(t.test(e)){var i=r(e,h)
return"UTC"===m&&i.setMinutes(i.getMinutes()-i.getTimezoneOffset()),i}return n}),u.$formatters.push(function(e){if(e&&!x(e))throw wo("datefmt","Expected `{0}` to be a date",e)
if(p(e)){if(h=e,h&&"UTC"===m){var t=6e4*h.getTimezoneOffset()
h=new Date(h.getTime()+t)}return f("date")(e,i,m)}return h=null,""}),$(s.min)||s.ngMin){var g
u.$validators.min=function(e){return!p(e)||v(g)||r(e)>=g},s.$observe("min",function(e){g=d(e),u.$validate()})}if($(s.max)||s.ngMax){var y
u.$validators.max=function(e){return!p(e)||v(y)||r(e)<=y},s.$observe("max",function(e){y=d(e),u.$validate()})}}}function Ln(e,t,r,i){var o=t[0],a=i.$$hasNativeValidators=y(o.validity)
a&&i.$parsers.push(function(e){var r=t.prop(Xn)||{}
return r.badInput&&!r.typeMismatch?n:e})}function Rn(e,t,r,i,o,a){if(Ln(e,t,r,i),Mn(e,t,r,i,o,a),i.$$parserName="number",i.$parsers.push(function(e){return i.$isEmpty(e)?null:Hi.test(e)?parseFloat(e):n}),i.$formatters.push(function(e){if(!i.$isEmpty(e)){if(!b(e))throw wo("numfmt","Expected `{0}` to be a number",e)
e=""+e}return e}),$(r.min)||r.ngMin){var s
i.$validators.min=function(e){return i.$isEmpty(e)||v(s)||e>=s},r.$observe("min",function(e){$(e)&&!b(e)&&(e=parseFloat(e,10)),s=b(e)&&!isNaN(e)?e:n,i.$validate()})}if($(r.max)||r.ngMax){var u
i.$validators.max=function(e){return i.$isEmpty(e)||v(u)||u>=e},r.$observe("max",function(e){$(e)&&!b(e)&&(e=parseFloat(e,10)),u=b(e)&&!isNaN(e)?e:n,i.$validate()})}}function In(e,t,n,r,i,o){Mn(e,t,n,r,i,o),_n(r),r.$$parserName="url",r.$validators.url=function(e,t){var n=e||t
return r.$isEmpty(n)||Ri.test(n)}}function Hn(e,t,n,r,i,o){Mn(e,t,n,r,i,o),_n(r),r.$$parserName="email",r.$validators.email=function(e,t){var n=e||t
return r.$isEmpty(n)||Ii.test(n)}}function Fn(e,t,n,r){v(n.name)&&t.attr("name",l())
var i=function(e){t[0].checked&&r.$setViewValue(n.value,e&&e.type)}
t.on("click",i),r.$render=function(){var e=n.value
t[0].checked=e==r.$viewValue},n.$observe("value",r.$render)}function Vn(e,t,n,i,o){var a
if($(i)){if(a=e(i),!a.constant)throw r("ngModel")("constexpr","Expected constant expression for `{0}`, but saw `{1}`.",n,i)
return a(t)}return o}function Un(e,t,n,r,i,o,a,s){var u=Vn(s,e,"ngTrueValue",n.ngTrueValue,!0),l=Vn(s,e,"ngFalseValue",n.ngFalseValue,!1),c=function(e){r.$setViewValue(t[0].checked,e&&e.type)}
t.on("click",c),r.$render=function(){t[0].checked=r.$viewValue},r.$isEmpty=function(e){return e===!1},r.$formatters.push(function(e){return R(e,u)}),r.$parsers.push(function(e){return e?u:l})}function Bn(e,t){return e="ngClass"+e,["$animate",function(n){function r(e,t){var n=[]
e:for(var r=0;r<e.length;r++){for(var i=e[r],o=0;o<t.length;o++)if(i==t[o])continue e
n.push(i)}return n}function i(e){if(pr(e))return e
if(w(e))return e.split(" ")
if(y(e)){var t=[]
return o(e,function(e,n){e&&(t=t.concat(n.split(" ")))}),t}return e}return{restrict:"AC",link:function(a,s,u){function l(e){var t=f(e,1)
u.$addClass(t)}function c(e){var t=f(e,-1)
u.$removeClass(t)}function f(e,t){var n=s.data("$classCounts")||{},r=[]
return o(e,function(e){(t>0||n[e])&&(n[e]=(n[e]||0)+t,n[e]===+(t>0)&&r.push(e))}),s.data("$classCounts",n),r.join(" ")}function p(e,t){var i=r(t,e),o=r(e,t)
i=f(i,1),o=f(o,-1),i&&i.length&&n.addClass(s,i),o&&o.length&&n.removeClass(s,o)}function d(e){if(t===!0||a.$index%2===t){var n=i(e||[])
if(h){if(!R(e,h)){var r=i(h)
p(r,n)}}else l(n)}h=L(e)}var h
a.$watch(u[e],d,!0),u.$observe("class",function(){d(a.$eval(u[e]))}),"ngClass"!==e&&a.$watch("$index",function(n,r){var o=1&n
if(o!==(1&r)){var s=i(a.$eval(u[e]))
o===t?l(s):c(s)}})}}}]}function Wn(e){function t(e,t,u){t===n?r("$pending",e,u):i("$pending",e,u),D(t)?t?(f(s.$error,e,u),c(s.$$success,e,u)):(c(s.$error,e,u),f(s.$$success,e,u)):(f(s.$error,e,u),f(s.$$success,e,u)),s.$pending?(o(yo,!0),s.$valid=s.$invalid=n,a("",null)):(o(yo,!1),s.$valid=zn(s.$error),s.$invalid=!s.$valid,a("",s.$valid))
var l
l=s.$pending&&s.$pending[e]?n:s.$error[e]?!1:s.$$success[e]?!0:null,a(e,l),p.$setValidity(e,l,s)}function r(e,t,n){s[e]||(s[e]={}),c(s[e],t,n)}function i(e,t,r){s[e]&&f(s[e],t,r),zn(s[e])&&(s[e]=n)}function o(e,t){t&&!l[e]?(d.addClass(u,e),l[e]=!0):!t&&l[e]&&(d.removeClass(u,e),l[e]=!1)}function a(e,t){e=e?"-"+ne(e,"-"):"",o(po+e,t===!0),o(ho+e,t===!1)}var s=e.ctrl,u=e.$element,l={},c=e.set,f=e.unset,p=e.parentForm,d=e.$animate
l[ho]=!(l[po]=u.hasClass(po)),s.$setValidity=t}function zn(e){if(e)for(var t in e)return!1
return!0}var Gn=/^\/(.+)\/([a-z]*)$/,Xn="validity",Yn=function(e){return w(e)?e.toLowerCase():e},Jn=Object.prototype.hasOwnProperty,Kn=function(e){return w(e)?e.toUpperCase():e},Zn=function(e){return w(e)?e.replace(/[A-Z]/g,function(e){return String.fromCharCode(32|e.charCodeAt(0))}):e},Qn=function(e){return w(e)?e.replace(/[a-z]/g,function(e){return String.fromCharCode(-33&e.charCodeAt(0))}):e}
"i"!=="I".toLowerCase()&&(Yn=Zn,Kn=Qn)
var er,tr,nr,rr,ir=[].slice,or=[].splice,ar=[].push,sr=Object.prototype.toString,ur=r("ng"),lr=e.angular||(e.angular={}),cr=0
er=t.documentMode,h.$inject=[],m.$inject=[]
var fr,pr=Array.isArray,dr=function(e){return w(e)?e.trim():e},hr=function(e){return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},mr=function(){if($(mr.isActive_))return mr.isActive_
var e=!(!t.querySelector("[ng-csp]")&&!t.querySelector("[data-ng-csp]"))
if(!e)try{Function("")}catch(n){e=!0}return mr.isActive_=e},gr=["ng-","data-ng-","ng:","x-ng-"],vr=/[A-Z]/g,$r=!1,yr=1,wr=3,br=8,xr=9,Cr=11,kr={full:"1.3.15",major:1,minor:3,dot:15,codeName:"locality-filtration"}
we.expando="ng339"
var Sr=we.cache={},Tr=1,Ar=function(e,t,n){e.addEventListener(t,n,!1)},Er=function(e,t,n){e.removeEventListener(t,n,!1)}
we._data=function(e){return this.cache[e[this.expando]]||{}}
var Nr=/([\:\-\_]+(.))/g,Dr=/^moz([A-Z])/,_r={mouseleave:"mouseout",mouseenter:"mouseover"},Or=r("jqLite"),Mr=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,jr=/<|&#?\w+;/,Pr=/<([\w:]+)/,qr=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Lr={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
Lr.optgroup=Lr.option,Lr.tbody=Lr.tfoot=Lr.colgroup=Lr.caption=Lr.thead,Lr.th=Lr.td
var Rr=we.prototype={ready:function(n){function r(){i||(i=!0,n())}var i=!1
"complete"===t.readyState?setTimeout(r):(this.on("DOMContentLoaded",r),we(e).on("load",r))},toString:function(){var e=[]
return o(this,function(t){e.push(""+t)}),"["+e.join(", ")+"]"},eq:function(e){return tr(e>=0?this[e]:this[this.length+e])},length:0,push:ar,sort:[].sort,splice:[].splice},Ir={}
o("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(e){Ir[Yn(e)]=e})
var Hr={}
o("input,select,option,textarea,button,form,details".split(","),function(e){Hr[e]=!0})
var Fr={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"}
o({data:Te,removeData:ke},function(e,t){we[t]=e}),o({data:Te,inheritedData:Oe,scope:function(e){return tr.data(e,"$scope")||Oe(e.parentNode||e,["$isolateScope","$scope"])},isolateScope:function(e){return tr.data(e,"$isolateScope")||tr.data(e,"$isolateScopeNoTemplate")},controller:_e,injector:function(e){return Oe(e,"$injector")},removeAttr:function(e,t){e.removeAttribute(t)},hasClass:Ae,css:function(e,t,r){return t=me(t),$(r)?(e.style[t]=r,n):e.style[t]},attr:function(e,t,r){var i=Yn(t)
if(Ir[i]){if(!$(r))return e[t]||(e.attributes.getNamedItem(t)||h).specified?i:n
r?(e[t]=!0,e.setAttribute(t,i)):(e[t]=!1,e.removeAttribute(i))}else if($(r))e.setAttribute(t,r)
else if(e.getAttribute){var o=e.getAttribute(t,2)
return null===o?n:o}},prop:function(e,t,r){return $(r)?(e[t]=r,n):e[t]},text:function(){function e(e,t){if(v(t)){var n=e.nodeType
return n===yr||n===wr?e.textContent:""}e.textContent=t}return e.$dv="",e}(),val:function(e,t){if(v(t)){if(e.multiple&&"select"===j(e)){var n=[]
return o(e.options,function(e){e.selected&&n.push(e.value||e.text)}),0===n.length?null:n}return e.value}e.value=t},html:function(e,t){return v(t)?e.innerHTML:(xe(e,!0),e.innerHTML=t,n)},empty:Me},function(e,t){we.prototype[t]=function(t,r){var i,o,a=this.length
if(e!==Me&&(2==e.length&&e!==Ae&&e!==_e?t:r)===n){if(y(t)){for(i=0;a>i;i++)if(e===Te)e(this[i],t)
else for(o in t)e(this[i],o,t[o])
return this}for(var s=e.$dv,u=s===n?Math.min(a,1):a,l=0;u>l;l++){var c=e(this[l],t,r)
s=s?s+c:c}return s}for(i=0;a>i;i++)e(this[i],t,r)
return this}}),o({removeData:ke,on:function Go(e,t,n,r){if($(r))throw Or("onargs","jqLite#on() does not support the `selector` or `eventData` parameters")
if(ve(e)){var i=Se(e,!0),o=i.events,a=i.handle
a||(a=i.handle=Re(e,o))
for(var s=t.indexOf(" ")>=0?t.split(" "):[t],u=s.length;u--;){t=s[u]
var l=o[t]
l||(o[t]=[],"mouseenter"===t||"mouseleave"===t?Go(e,_r[t],function(e){var n=this,r=e.relatedTarget;(!r||r!==n&&!n.contains(r))&&a(e,t)}):"$destroy"!==t&&Ar(e,t,a),l=o[t]),l.push(n)}}},off:Ce,one:function(e,t,n){e=tr(e),e.on(t,function r(){e.off(t,n),e.off(t,r)}),e.on(t,n)},replaceWith:function(e,t){var n,r=e.parentNode
xe(e),o(new we(t),function(t){n?r.insertBefore(t,n.nextSibling):r.replaceChild(t,e),n=t})},children:function(e){var t=[]
return o(e.childNodes,function(e){e.nodeType===yr&&t.push(e)}),t},contents:function(e){return e.contentDocument||e.childNodes||[]},append:function(e,t){var n=e.nodeType
if(n===yr||n===Cr){t=new we(t)
for(var r=0,i=t.length;i>r;r++){var o=t[r]
e.appendChild(o)}}},prepend:function(e,t){if(e.nodeType===yr){var n=e.firstChild
o(new we(t),function(t){e.insertBefore(t,n)})}},wrap:function(e,t){t=tr(t).eq(0).clone()[0]
var n=e.parentNode
n&&n.replaceChild(t,e),t.appendChild(e)},remove:je,detach:function(e){je(e,!0)},after:function(e,t){var n=e,r=e.parentNode
t=new we(t)
for(var i=0,o=t.length;o>i;i++){var a=t[i]
r.insertBefore(a,n.nextSibling),n=a}},addClass:Ne,removeClass:Ee,toggleClass:function(e,t,n){t&&o(t.split(" "),function(t){var r=n
v(r)&&(r=!Ae(e,t)),(r?Ne:Ee)(e,t)})},parent:function(e){var t=e.parentNode
return t&&t.nodeType!==Cr?t:null},next:function(e){return e.nextElementSibling},find:function(e,t){return e.getElementsByTagName?e.getElementsByTagName(t):[]},clone:be,triggerHandler:function(e,t,n){var r,i,a,s=t.type||t,u=Se(e),l=u&&u.events,c=l&&l[s]
c&&(r={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return this.defaultPrevented===!0},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return this.immediatePropagationStopped===!0},stopPropagation:h,type:s,target:e},t.type&&(r=f(r,t)),i=L(c),a=n?[r].concat(n):[r],o(i,function(t){r.isImmediatePropagationStopped()||t.apply(e,a)}))}},function(e,t){we.prototype[t]=function(t,n,r){for(var i,o=0,a=this.length;a>o;o++)v(i)?(i=e(this[o],t,n,r),$(i)&&(i=tr(i))):De(i,e(this[o],t,n,r))
return $(i)?i:this},we.prototype.bind=we.prototype.on,we.prototype.unbind=we.prototype.off}),Fe.prototype={put:function(e,t){this[He(e,this.nextUid)]=t},get:function(e){return this[He(e,this.nextUid)]},remove:function(e){var t=this[e=He(e,this.nextUid)]
return delete this[e],t}}
var Vr=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,Ur=/,/,Br=/^\s*(_?)(\S+?)\1\s*$/,Wr=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,zr=r("$injector")
Be.$$annotate=Ue
var Gr=r("$animate"),Xr=["$provide",function(e){this.$$selectors={},this.register=function(t,n){var r=t+"-animation"
if(t&&"."!=t.charAt(0))throw Gr("notcsel","Expecting class selector starting with '.' got '{0}'.",t)
this.$$selectors[t.substr(1)]=r,e.factory(r,n)},this.classNameFilter=function(e){return 1===arguments.length&&(this.$$classNameFilter=e instanceof RegExp?e:null),this.$$classNameFilter},this.$get=["$$q","$$asyncCallback","$rootScope",function(e,t,n){function r(t){var r,i=e.defer()
return i.promise.$$cancelFn=function(){r&&r()},n.$$postDigest(function(){r=t(function(){i.resolve()})}),i.promise}function i(e,t){var n=[],r=[],i=le()
return o((e.attr("class")||"").split(/\s+/),function(e){i[e]=!0}),o(t,function(e,t){var o=i[t]
e===!1&&o?r.push(t):e!==!0||o||n.push(t)}),n.length+r.length>0&&[n.length?n:null,r.length?r:null]}function a(e,t,n){for(var r=0,i=t.length;i>r;++r){var o=t[r]
e[o]=n}}function s(){return l||(l=e.defer(),t(function(){l.resolve(),l=null})),l.promise}function u(e,t){if(lr.isObject(t)){var n=f(t.from||{},t.to||{})
e.css(n)}}var l
return{animate:function(e,t,n){return u(e,{from:t,to:n}),s()},enter:function(e,t,n,r){return u(e,r),n?n.after(e):t.prepend(e),s()},leave:function(e,t){return u(e,t),e.remove(),s()},move:function(e,t,n,r){return this.enter(e,t,n,r)},addClass:function(e,t,n){return this.setClass(e,t,[],n)},$$addClassImmediately:function(e,t,n){return e=tr(e),t=w(t)?t:pr(t)?t.join(" "):"",o(e,function(e){Ne(e,t)}),u(e,n),s()},removeClass:function(e,t,n){return this.setClass(e,[],t,n)},$$removeClassImmediately:function(e,t,n){return e=tr(e),t=w(t)?t:pr(t)?t.join(" "):"",o(e,function(e){Ee(e,t)}),u(e,n),s()},setClass:function(e,t,n,o){var s=this,u="$$animateClasses",l=!1
e=tr(e)
var c=e.data(u)
c?o&&c.options&&(c.options=lr.extend(c.options||{},o)):(c={classes:{},options:o},l=!0)
var f=c.classes
return t=pr(t)?t:t.split(" "),n=pr(n)?n:n.split(" "),a(f,t,!0),a(f,n,!1),l&&(c.promise=r(function(t){var n=e.data(u)
if(e.removeData(u),n){var r=i(e,n.classes)
r&&s.$$setClassImmediately(e,r[0],r[1],n.options)}t()}),e.data(u,c)),c.promise},$$setClassImmediately:function(e,t,n,r){return t&&this.$$addClassImmediately(e,t),n&&this.$$removeClassImmediately(e,n),u(e,r),s()},enabled:h,cancel:h}}]}],Yr=r("$compile")
Ke.$inject=["$provide","$$sanitizeUriProvider"]
var Jr=/^((?:x|data)[\:\-_])/i,Kr=r("$controller"),Zr="application/json",Qr={"Content-Type":Zr+";charset=utf-8"},ei=/^\[|^\{(?!\{)/,ti={"[":/]$/,"{":/}$/},ni=/^\)\]\}',?\n/,ri=r("$interpolate"),ii=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,oi={http:80,https:443,ftp:21},ai=r("$location"),si={$$html5:!1,$$replace:!1,absUrl:Et("$$absUrl"),url:function(e){if(v(e))return this.$$url
var t=ii.exec(e)
return(t[1]||""===e)&&this.path(decodeURIComponent(t[1])),(t[2]||t[1]||""===e)&&this.search(t[3]||""),this.hash(t[5]||""),this},protocol:Et("$$protocol"),host:Et("$$host"),port:Et("$$port"),path:Nt("$$path",function(e){return e=null!==e?""+e:"","/"==e.charAt(0)?e:"/"+e}),search:function(e,t){switch(arguments.length){case 0:return this.$$search
case 1:if(w(e)||b(e))e=""+e,this.$$search=G(e)
else{if(!y(e))throw ai("isrcharg","The first argument of the `$location#search()` call must be a string or an object.")
e=q(e,{}),o(e,function(t,n){null==t&&delete e[n]}),this.$$search=e}break
default:v(t)||null===t?delete this.$$search[e]:this.$$search[e]=t}return this.$$compose(),this},hash:Nt("$$hash",function(e){return null!==e?""+e:""}),replace:function(){return this.$$replace=!0,this}}
o([At,Tt,St],function(e){e.prototype=Object.create(si),e.prototype.state=function(t){if(!arguments.length)return this.$$state
if(e!==St||!this.$$html5)throw ai("nostate","History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API")
return this.$$state=v(t)?null:t,this}})
var ui=r("$parse"),li=Function.prototype.call,ci=Function.prototype.apply,fi=Function.prototype.bind,pi=le()
o({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(e,t){e.constant=e.literal=e.sharedGetter=!0,pi[t]=e}),pi["this"]=function(e){return e},pi["this"].sharedGetter=!0
var di=f(le(),{"+":function(e,t,r,i){return r=r(e,t),i=i(e,t),$(r)?$(i)?r+i:r:$(i)?i:n},"-":function(e,t,n,r){return n=n(e,t),r=r(e,t),($(n)?n:0)-($(r)?r:0)},"*":function(e,t,n,r){return n(e,t)*r(e,t)},"/":function(e,t,n,r){return n(e,t)/r(e,t)},"%":function(e,t,n,r){return n(e,t)%r(e,t)},"===":function(e,t,n,r){return n(e,t)===r(e,t)},"!==":function(e,t,n,r){return n(e,t)!==r(e,t)},"==":function(e,t,n,r){return n(e,t)==r(e,t)},"!=":function(e,t,n,r){return n(e,t)!=r(e,t)},"<":function(e,t,n,r){return n(e,t)<r(e,t)},">":function(e,t,n,r){return n(e,t)>r(e,t)},"<=":function(e,t,n,r){return n(e,t)<=r(e,t)},">=":function(e,t,n,r){return n(e,t)>=r(e,t)},"&&":function(e,t,n,r){return n(e,t)&&r(e,t)},"||":function(e,t,n,r){return n(e,t)||r(e,t)},"!":function(e,t,n){return!n(e,t)},"=":!0,"|":!0}),hi={n:"\n",f:"\f",r:"\r",t:"	",v:"","'":"'",'"':'"'},mi=function(e){this.options=e}
mi.prototype={constructor:mi,lex:function(e){for(this.text=e,this.index=0,this.tokens=[];this.index<this.text.length;){var t=this.text.charAt(this.index)
if('"'===t||"'"===t)this.readString(t)
else if(this.isNumber(t)||"."===t&&this.isNumber(this.peek()))this.readNumber()
else if(this.isIdent(t))this.readIdent()
else if(this.is(t,"(){}[].,;:?"))this.tokens.push({index:this.index,text:t}),this.index++
else if(this.isWhitespace(t))this.index++
else{var n=t+this.peek(),r=n+this.peek(2),i=di[t],o=di[n],a=di[r]
if(i||o||a){var s=a?r:o?n:t
this.tokens.push({index:this.index,text:s,operator:!0}),this.index+=s.length}else this.throwError("Unexpected next character ",this.index,this.index+1)}}return this.tokens},is:function(e,t){return-1!==t.indexOf(e)},peek:function(e){var t=e||1
return this.index+t<this.text.length?this.text.charAt(this.index+t):!1},isNumber:function(e){return e>="0"&&"9">=e&&"string"==typeof e},isWhitespace:function(e){return" "===e||"\r"===e||"	"===e||"\n"===e||""===e||" "===e},isIdent:function(e){return e>="a"&&"z">=e||e>="A"&&"Z">=e||"_"===e||"$"===e},isExpOperator:function(e){return"-"===e||"+"===e||this.isNumber(e)},throwError:function(e,t,n){n=n||this.index
var r=$(t)?"s "+t+"-"+this.index+" ["+this.text.substring(t,n)+"]":" "+n
throw ui("lexerr","Lexer Error: {0} at column{1} in expression [{2}].",e,r,this.text)},readNumber:function(){for(var e="",t=this.index;this.index<this.text.length;){var n=Yn(this.text.charAt(this.index))
if("."==n||this.isNumber(n))e+=n
else{var r=this.peek()
if("e"==n&&this.isExpOperator(r))e+=n
else if(this.isExpOperator(n)&&r&&this.isNumber(r)&&"e"==e.charAt(e.length-1))e+=n
else{if(!this.isExpOperator(n)||r&&this.isNumber(r)||"e"!=e.charAt(e.length-1))break
this.throwError("Invalid exponent")}}this.index++}this.tokens.push({index:t,text:e,constant:!0,value:+e})},readIdent:function(){for(var e=this.index;this.index<this.text.length;){var t=this.text.charAt(this.index)
if(!this.isIdent(t)&&!this.isNumber(t))break
this.index++}this.tokens.push({index:e,text:this.text.slice(e,this.index),identifier:!0})},readString:function(e){var t=this.index
this.index++
for(var r="",i=e,o=!1;this.index<this.text.length;){var a=this.text.charAt(this.index)
if(i+=a,o){if("u"===a){var s=this.text.substring(this.index+1,this.index+5)
s.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+s+"]"),this.index+=4,r+=String.fromCharCode(parseInt(s,16))}else{var u=hi[a]
r+=u||a}o=!1}else if("\\"===a)o=!0
else{if(a===e)return this.index++,this.tokens.push({index:t,text:i,constant:!0,value:r}),n
r+=a}this.index++}this.throwError("Unterminated quote",t)}}
var gi=function(e,t,n){this.lexer=e,this.$filter=t,this.options=n}
gi.ZERO=f(function(){return 0},{sharedGetter:!0,constant:!0}),gi.prototype={constructor:gi,parse:function(e){this.text=e,this.tokens=this.lexer.lex(e)
var t=this.statements()
return 0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]),t.literal=!!t.literal,t.constant=!!t.constant,t},primary:function(){var e
this.expect("(")?(e=this.filterChain(),this.consume(")")):this.expect("[")?e=this.arrayDeclaration():this.expect("{")?e=this.object():this.peek().identifier&&this.peek().text in pi?e=pi[this.consume().text]:this.peek().identifier?e=this.identifier():this.peek().constant?e=this.constant():this.throwError("not a primary expression",this.peek())
for(var t,n;t=this.expect("(","[",".");)"("===t.text?(e=this.functionCall(e,n),n=null):"["===t.text?(n=e,e=this.objectIndex(e)):"."===t.text?(n=e,e=this.fieldAccess(e)):this.throwError("IMPOSSIBLE")
return e},throwError:function(e,t){throw ui("syntax","Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",t.text,e,t.index+1,this.text,this.text.substring(t.index))},peekToken:function(){if(0===this.tokens.length)throw ui("ueoe","Unexpected end of expression: {0}",this.text)
return this.tokens[0]},peek:function(e,t,n,r){return this.peekAhead(0,e,t,n,r)},peekAhead:function(e,t,n,r,i){if(this.tokens.length>e){var o=this.tokens[e],a=o.text
if(a===t||a===n||a===r||a===i||!t&&!n&&!r&&!i)return o}return!1},expect:function(e,t,n,r){var i=this.peek(e,t,n,r)
return i?(this.tokens.shift(),i):!1},consume:function(e){if(0===this.tokens.length)throw ui("ueoe","Unexpected end of expression: {0}",this.text)
var t=this.expect(e)
return t||this.throwError("is unexpected, expecting ["+e+"]",this.peek()),t},unaryFn:function(e,t){var n=di[e]
return f(function(e,r){return n(e,r,t)},{constant:t.constant,inputs:[t]})},binaryFn:function(e,t,n,r){var i=di[t]
return f(function(t,r){return i(t,r,e,n)},{constant:e.constant&&n.constant,inputs:!r&&[e,n]})},identifier:function(){for(var e=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)e+=this.consume().text+this.consume().text
return Ht(e,this.options,this.text)},constant:function(){var e=this.consume().value
return f(function(){return e},{constant:!0,literal:!0})},statements:function(){for(var e=[];;)if(this.tokens.length>0&&!this.peek("}",")",";","]")&&e.push(this.filterChain()),!this.expect(";"))return 1===e.length?e[0]:function(t,n){for(var r,i=0,o=e.length;o>i;i++)r=e[i](t,n)
return r}},filterChain:function(){for(var e,t=this.expression();e=this.expect("|");)t=this.filter(t)
return t},filter:function(e){var t,r,i=this.$filter(this.consume().text)
if(this.peek(":"))for(t=[],r=[];this.expect(":");)t.push(this.expression())
var o=[e].concat(t||[])
return f(function(o,a){var s=e(o,a)
if(r){r[0]=s
for(var u=t.length;u--;)r[u+1]=t[u](o,a)
return i.apply(n,r)}return i(s)},{constant:!i.$stateful&&o.every(Pt),inputs:!i.$stateful&&o})},expression:function(){return this.assignment()},assignment:function(){var e,t,n=this.ternary()
return(t=this.expect("="))?(n.assign||this.throwError("implies assignment but ["+this.text.substring(0,t.index)+"] can not be assigned to",t),e=this.ternary(),f(function(t,r){return n.assign(t,e(t,r),r)},{inputs:[n,e]})):n},ternary:function(){var e,t,n=this.logicalOR()
if((t=this.expect("?"))&&(e=this.assignment(),this.consume(":"))){var r=this.assignment()
return f(function(t,i){return n(t,i)?e(t,i):r(t,i)},{constant:n.constant&&e.constant&&r.constant})}return n},logicalOR:function(){for(var e,t=this.logicalAND();e=this.expect("||");)t=this.binaryFn(t,e.text,this.logicalAND(),!0)
return t},logicalAND:function(){for(var e,t=this.equality();e=this.expect("&&");)t=this.binaryFn(t,e.text,this.equality(),!0)
return t},equality:function(){for(var e,t=this.relational();e=this.expect("==","!=","===","!==");)t=this.binaryFn(t,e.text,this.relational())
return t},relational:function(){for(var e,t=this.additive();e=this.expect("<",">","<=",">=");)t=this.binaryFn(t,e.text,this.additive())
return t},additive:function(){for(var e,t=this.multiplicative();e=this.expect("+","-");)t=this.binaryFn(t,e.text,this.multiplicative())
return t},multiplicative:function(){for(var e,t=this.unary();e=this.expect("*","/","%");)t=this.binaryFn(t,e.text,this.unary())
return t},unary:function(){var e
return this.expect("+")?this.primary():(e=this.expect("-"))?this.binaryFn(gi.ZERO,e.text,this.unary()):(e=this.expect("!"))?this.unaryFn(e.text,this.unary()):this.primary()},fieldAccess:function(e){var t=this.identifier()
return f(function(r,i,o){var a=o||e(r,i)
return null==a?n:t(a)},{assign:function(n,r,i){var o=e(n,i)
return o||e.assign(n,o={},i),t.assign(o,r)}})},objectIndex:function(e){var t=this.text,r=this.expression()
return this.consume("]"),f(function(i,o){var a,s=e(i,o),u=r(i,o)
return Ot(u,t),s?a=Mt(s[u],t):n},{assign:function(n,i,o){var a=Ot(r(n,o),t),s=Mt(e(n,o),t)
return s||e.assign(n,s={},o),s[a]=i}})},functionCall:function(e,t){var r=[]
if(")"!==this.peekToken().text)do r.push(this.expression())
while(this.expect(","))
this.consume(")")
var i=this.text,o=r.length?[]:null
return function(a,s){var u=t?t(a,s):$(t)?n:a,l=e(a,s,u)||h
if(o)for(var c=r.length;c--;)o[c]=Mt(r[c](a,s),i)
Mt(u,i),jt(l,i)
var f=l.apply?l.apply(u,o):l(o[0],o[1],o[2],o[3],o[4])
return o&&(o.length=0),Mt(f,i)}},arrayDeclaration:function(){var e=[]
if("]"!==this.peekToken().text)do{if(this.peek("]"))break
e.push(this.expression())}while(this.expect(","))
return this.consume("]"),f(function(t,n){for(var r=[],i=0,o=e.length;o>i;i++)r.push(e[i](t,n))
return r},{literal:!0,constant:e.every(Pt),inputs:e})},object:function(){var e=[],t=[]
if("}"!==this.peekToken().text)do{if(this.peek("}"))break
var n=this.consume()
n.constant?e.push(n.value):n.identifier?e.push(n.text):this.throwError("invalid key",n),this.consume(":"),t.push(this.expression())}while(this.expect(","))
return this.consume("}"),f(function(n,r){for(var i={},o=0,a=t.length;a>o;o++)i[e[o]]=t[o](n,r)
return i},{literal:!0,constant:t.every(Pt),inputs:t})}}
var vi=le(),$i=le(),yi=Object.prototype.valueOf,wi=r("$sce"),bi={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Yr=r("$compile"),xi=t.createElement("a"),Ci=rn(e.location.href)
sn.$inject=["$provide"],fn.$inject=["$locale"],pn.$inject=["$locale"]
var ki=".",Si={yyyy:mn("FullYear",4),yy:mn("FullYear",2,0,!0),y:mn("FullYear",1),MMMM:gn("Month"),MMM:gn("Month",!0),MM:mn("Month",2,1),M:mn("Month",1,1),dd:mn("Date",2),d:mn("Date",1),HH:mn("Hours",2),H:mn("Hours",1),hh:mn("Hours",2,-12),h:mn("Hours",1,-12),mm:mn("Minutes",2),m:mn("Minutes",1),ss:mn("Seconds",2),s:mn("Seconds",1),sss:mn("Milliseconds",3),EEEE:gn("Day"),EEE:gn("Day",!0),a:bn,Z:vn,ww:wn(2),w:wn(1),G:xn,GG:xn,GGG:xn,GGGG:Cn},Ti=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,Ai=/^\-?\d+$/
kn.$inject=["$locale"]
var Ei=g(Yn),Ni=g(Kn)
An.$inject=["$parse"]
var Di=g({restrict:"E",compile:function(e,t){return t.href||t.xlinkHref||t.name?n:function(e,t){if("a"===t[0].nodeName.toLowerCase()){var n="[object SVGAnimatedString]"===sr.call(t.prop("href"))?"xlink:href":"href"
t.on("click",function(e){t.attr(n)||e.preventDefault()})}}}}),_i={}
o(Ir,function(e,t){if("multiple"!=e){var n=Ze("ng-"+t)
_i[n]=function(){return{restrict:"A",priority:100,link:function(e,r,i){e.$watch(i[n],function(e){i.$set(t,!!e)})}}}}}),o(Fr,function(e,t){_i[t]=function(){return{priority:100,link:function(e,r,i){if("ngPattern"===t&&"/"==i.ngPattern.charAt(0)){var o=i.ngPattern.match(Gn)
if(o)return i.$set("ngPattern",RegExp(o[1],o[2])),n}e.$watch(i[t],function(e){i.$set(t,e)})}}}}),o(["src","srcset","href"],function(e){var t=Ze("ng-"+e)
_i[t]=function(){return{priority:99,link:function(r,i,o){var a=e,s=e
"href"===e&&"[object SVGAnimatedString]"===sr.call(i.prop("href"))&&(s="xlinkHref",o.$attr[s]="xlink:href",a=null),o.$observe(t,function(t){return t?(o.$set(s,t),er&&a&&i.prop(a,o[s]),n):("href"===e&&o.$set(s,null),n)})}}}})
var Oi={$addControl:h,$$renameControl:Nn,$removeControl:h,$setValidity:h,$setDirty:h,$setPristine:h,$setSubmitted:h},Mi="ng-submitted"
Dn.$inject=["$element","$attrs","$scope","$animate","$interpolate"]
var ji=function(e){return["$timeout",function(t){var r={name:"form",restrict:e?"EAC":"E",controller:Dn,compile:function(r,i){r.addClass(mo).addClass(po)
var o=i.name?"name":e&&i.ngForm?"ngForm":!1
return{pre:function(e,r,i,a){if(!("action"in i)){var s=function(t){e.$apply(function(){a.$commitViewValue(),a.$setSubmitted()}),t.preventDefault()}
Ar(r[0],"submit",s),r.on("$destroy",function(){t(function(){Er(r[0],"submit",s)},0,!1)})}var u=a.$$parentForm
o&&(qt(e,null,a.$name,a,a.$name),i.$observe(o,function(t){a.$name!==t&&(qt(e,null,a.$name,n,a.$name),u.$$renameControl(a,t),qt(e,null,a.$name,a,a.$name))})),r.on("$destroy",function(){u.$removeControl(a),o&&qt(e,null,i[o],n,a.$name),f(a,Oi)})}}}}
return r}]},Pi=ji(),qi=ji(!0),Li=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Ri=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Ii=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Hi=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Fi=/^(\d{4})-(\d{2})-(\d{2})$/,Vi=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Ui=/^(\d{4})-W(\d\d)$/,Bi=/^(\d{4})-(\d\d)$/,Wi=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,zi={text:On,date:qn("date",Fi,Pn(Fi,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":qn("datetimelocal",Vi,Pn(Vi,["yyyy","MM","dd","HH","mm","ss","sss"]),"yyyy-MM-ddTHH:mm:ss.sss"),time:qn("time",Wi,Pn(Wi,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:qn("week",Ui,jn,"yyyy-Www"),month:qn("month",Bi,Pn(Bi,["yyyy","MM"]),"yyyy-MM"),number:Rn,url:In,email:Hn,radio:Fn,checkbox:Un,hidden:h,button:h,submit:h,reset:h,file:h},Gi=["$browser","$sniffer","$filter","$parse",function(e,t,n,r){return{restrict:"E",require:["?ngModel"],link:{pre:function(i,o,a,s){s[0]&&(zi[Yn(a.type)]||zi.text)(i,o,a,s[0],t,e,n,r)}}}}],Xi=/^(true|false|\d+)$/,Yi=function(){return{restrict:"A",priority:100,compile:function(e,t){return Xi.test(t.ngValue)?function(e,t,n){n.$set("value",e.$eval(n.ngValue))}:function(e,t,n){e.$watch(n.ngValue,function(e){n.$set("value",e)})}}}},Ji=["$compile",function(e){return{restrict:"AC",compile:function(t){return e.$$addBindingClass(t),function(t,r,i){e.$$addBindingInfo(r,i.ngBind),r=r[0],t.$watch(i.ngBind,function(e){r.textContent=e===n?"":e})}}}}],Ki=["$interpolate","$compile",function(e,t){return{compile:function(r){return t.$$addBindingClass(r),function(r,i,o){var a=e(i.attr(o.$attr.ngBindTemplate))
t.$$addBindingInfo(i,a.expressions),i=i[0],o.$observe("ngBindTemplate",function(e){i.textContent=e===n?"":e})}}}}],Zi=["$sce","$parse","$compile",function(e,t,n){return{restrict:"A",compile:function(r,i){var o=t(i.ngBindHtml),a=t(i.ngBindHtml,function(e){return""+(e||"")})
return n.$$addBindingClass(r),function(t,r,i){n.$$addBindingInfo(r,i.ngBindHtml),t.$watch(a,function(){r.html(e.getTrustedHtml(o(t))||"")})}}}}],Qi=g({restrict:"A",require:"ngModel",link:function(e,t,n,r){r.$viewChangeListeners.push(function(){e.$eval(n.ngChange)})}}),eo=Bn("",!0),to=Bn("Odd",0),no=Bn("Even",1),ro=En({compile:function(e,t){t.$set("ngCloak",n),e.removeClass("ng-cloak")}}),io=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],oo={},ao={blur:!0,focus:!0}
o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(e){var t=Ze("ng-"+e)
oo[t]=["$parse","$rootScope",function(n,r){return{restrict:"A",compile:function(i,o){var a=n(o[t],null,!0)
return function(t,n){n.on(e,function(n){var i=function(){a(t,{$event:n})}
ao[e]&&r.$$phase?t.$evalAsync(i):t.$apply(i)})}}}}]})
var so=["$animate",function(e){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(n,r,i,o,a){var s,u,l
n.$watch(i.ngIf,function(n){n?u||a(function(n,o){u=o,n[n.length++]=t.createComment(" end ngIf: "+i.ngIf+" "),s={clone:n},e.enter(n,r.parent(),r)}):(l&&(l.remove(),l=null),u&&(u.$destroy(),u=null),s&&(l=ue(s.clone),e.leave(l).then(function(){l=null}),s=null))})}}}],uo=["$templateRequest","$anchorScroll","$animate","$sce",function(e,t,n,r){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:lr.noop,compile:function(i,o){var a=o.ngInclude||o.src,s=o.onload||"",u=o.autoscroll
return function(i,o,l,c,f){var p,d,h,m=0,g=function(){d&&(d.remove(),d=null),p&&(p.$destroy(),p=null),h&&(n.leave(h).then(function(){d=null}),d=h,h=null)}
i.$watch(r.parseAsResourceUrl(a),function(r){var a=function(){!$(u)||u&&!i.$eval(u)||t()},l=++m
r?(e(r,!0).then(function(e){if(l===m){var t=i.$new()
c.template=e
var u=f(t,function(e){g(),n.enter(e,null,o).then(a)})
p=t,h=u,p.$emit("$includeContentLoaded",r),i.$eval(s)}},function(){l===m&&(g(),i.$emit("$includeContentError",r))}),i.$emit("$includeContentRequested",r)):(g(),c.template=null)})}}}}],lo=["$compile",function(e){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(r,i,o,a){return/SVG/.test(""+i[0])?(i.empty(),e($e(a.template,t).childNodes)(r,function(e){i.append(e)},{futureParentElement:i}),n):(i.html(a.template),e(i.contents())(r),n)}}}],co=En({priority:450,compile:function(){return{pre:function(e,t,n){e.$eval(n.ngInit)}}}}),fo=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(e,t,r,i){var a=t.attr(r.$attr.ngList)||", ",s="false"!==r.ngTrim,u=s?dr(a):a,l=function(e){if(!v(e)){var t=[]
return e&&o(e.split(u),function(e){e&&t.push(s?dr(e):e)}),t}}
i.$parsers.push(l),i.$formatters.push(function(e){return pr(e)?e.join(a):n}),i.$isEmpty=function(e){return!e||!e.length}}}},po="ng-valid",ho="ng-invalid",mo="ng-pristine",go="ng-dirty",vo="ng-untouched",$o="ng-touched",yo="ng-pending",wo=new r("ngModel"),bo=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(e,t,r,i,a,s,u,l,c,f){this.$viewValue=Number.NaN,this.$modelValue=Number.NaN,this.$$rawModelValue=n,this.$validators={},this.$asyncValidators={},this.$parsers=[],this.$formatters=[],this.$viewChangeListeners=[],this.$untouched=!0,this.$touched=!1,this.$pristine=!0,this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$error={},this.$$success={},this.$pending=n,this.$name=f(r.name||"",!1)(e)
var p,d=a(r.ngModel),m=d.assign,g=d,y=m,w=null,x=this
this.$$setOptions=function(e){if(x.$options=e,e&&e.getterSetter){var t=a(r.ngModel+"()"),n=a(r.ngModel+"($$$p)")
g=function(e){var n=d(e)
return C(n)&&(n=t(e)),n},y=function(e){C(d(e))?n(e,{$$$p:x.$modelValue}):m(e,x.$modelValue)}}else if(!d.assign)throw wo("nonassign","Expression '{0}' is non-assignable. Element: {1}",r.ngModel,W(i))},this.$render=h,this.$isEmpty=function(e){return v(e)||""===e||null===e||e!==e}
var k=i.inheritedData("$formController")||Oi,S=0
Wn({ctrl:this,$element:i,set:function(e,t){e[t]=!0},unset:function(e,t){delete e[t]},parentForm:k,$animate:s}),this.$setPristine=function(){x.$dirty=!1,x.$pristine=!0,s.removeClass(i,go),s.addClass(i,mo)},this.$setDirty=function(){x.$dirty=!0,x.$pristine=!1,s.removeClass(i,mo),s.addClass(i,go),k.$setDirty()},this.$setUntouched=function(){x.$touched=!1,x.$untouched=!0,s.setClass(i,vo,$o)},this.$setTouched=function(){x.$touched=!0,x.$untouched=!1,s.setClass(i,$o,vo)},this.$rollbackViewValue=function(){u.cancel(w),x.$viewValue=x.$$lastCommittedViewValue,x.$render()},this.$validate=function(){if(!b(x.$modelValue)||!isNaN(x.$modelValue)){var e=x.$$lastCommittedViewValue,t=x.$$rawModelValue,r=x.$valid,i=x.$modelValue,o=x.$options&&x.$options.allowInvalid
x.$$runValidators(t,e,function(e){o||r===e||(x.$modelValue=e?t:n,x.$modelValue!==i&&x.$$writeModelToScope())})}},this.$$runValidators=function(e,t,r){function i(){var e=x.$$parserName||"parse"
return p!==n?(p||(o(x.$validators,function(e,t){u(t,null)}),o(x.$asyncValidators,function(e,t){u(t,null)})),u(e,p),p):(u(e,null),!0)}function a(){var n=!0
return o(x.$validators,function(r,i){var o=r(e,t)
n=n&&o,u(i,o)}),n?!0:(o(x.$asyncValidators,function(e,t){u(t,null)}),!1)}function s(){var r=[],i=!0
o(x.$asyncValidators,function(o,a){var s=o(e,t)
if(!_(s))throw wo("$asyncValidators","Expected asynchronous validator to return a promise but got '{0}' instead.",s)
u(a,n),r.push(s.then(function(){u(a,!0)},function(){i=!1,u(a,!1)}))}),r.length?c.all(r).then(function(){l(i)},h):l(!0)}function u(e,t){f===S&&x.$setValidity(e,t)}function l(e){f===S&&r(e)}S++
var f=S
return i()&&a()?(s(),n):(l(!1),n)},this.$commitViewValue=function(){var e=x.$viewValue
u.cancel(w),(x.$$lastCommittedViewValue!==e||""===e&&x.$$hasNativeValidators)&&(x.$$lastCommittedViewValue=e,x.$pristine&&this.$setDirty(),this.$$parseAndValidate())},this.$$parseAndValidate=function(){function t(){x.$modelValue!==a&&x.$$writeModelToScope()}var r=x.$$lastCommittedViewValue,i=r
if(p=v(i)?n:!0)for(var o=0;o<x.$parsers.length;o++)if(i=x.$parsers[o](i),v(i)){p=!1
break}b(x.$modelValue)&&isNaN(x.$modelValue)&&(x.$modelValue=g(e))
var a=x.$modelValue,s=x.$options&&x.$options.allowInvalid
x.$$rawModelValue=i,s&&(x.$modelValue=i,t()),x.$$runValidators(i,x.$$lastCommittedViewValue,function(e){s||(x.$modelValue=e?i:n,t())})},this.$$writeModelToScope=function(){y(e,x.$modelValue),o(x.$viewChangeListeners,function(e){try{e()}catch(n){t(n)}})},this.$setViewValue=function(e,t){x.$viewValue=e,(!x.$options||x.$options.updateOnDefault)&&x.$$debounceViewValueCommit(t)},this.$$debounceViewValueCommit=function(t){var n,r=0,i=x.$options
i&&$(i.debounce)&&(n=i.debounce,b(n)?r=n:b(n[t])?r=n[t]:b(n["default"])&&(r=n["default"])),u.cancel(w),r?w=u(function(){x.$commitViewValue()},r):l.$$phase?x.$commitViewValue():e.$apply(function(){x.$commitViewValue()})},e.$watch(function(){var t=g(e)
if(t!==x.$modelValue){x.$modelValue=x.$$rawModelValue=t,p=n
for(var r=x.$formatters,i=r.length,o=t;i--;)o=r[i](o)
x.$viewValue!==o&&(x.$viewValue=x.$$lastCommittedViewValue=o,x.$render(),x.$$runValidators(t,o,h))}return t})}],xo=["$rootScope",function(e){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:bo,priority:1,compile:function(t){return t.addClass(mo).addClass(vo).addClass(po),{pre:function(e,t,n,r){var i=r[0],o=r[1]||Oi
i.$$setOptions(r[2]&&r[2].$options),o.$addControl(i),n.$observe("name",function(e){i.$name!==e&&o.$$renameControl(i,e)}),e.$on("$destroy",function(){o.$removeControl(i)})},post:function(t,n,r,i){var o=i[0]
o.$options&&o.$options.updateOn&&n.on(o.$options.updateOn,function(e){o.$$debounceViewValueCommit(e&&e.type)}),n.on("blur",function(){o.$touched||(e.$$phase?t.$evalAsync(o.$setTouched):t.$apply(o.$setTouched))})}}}}}],Co=/(\s+|^)default(\s+|$)/,ko=function(){return{restrict:"A",controller:["$scope","$attrs",function(e,t){var r=this
this.$options=e.$eval(t.ngModelOptions),this.$options.updateOn!==n?(this.$options.updateOnDefault=!1,this.$options.updateOn=dr(this.$options.updateOn.replace(Co,function(){return r.$options.updateOnDefault=!0," "}))):this.$options.updateOnDefault=!0}]}},So=En({terminal:!0,priority:1e3}),To=["$locale","$interpolate",function(e,t){var n=/{}/g,r=/^when(Minus)?(.+)$/
return{restrict:"EA",link:function(i,a,s){function u(e){a.text(e||"")}var l,c=s.count,f=s.$attr.when&&a.attr(s.$attr.when),p=s.offset||0,d=i.$eval(f)||{},h={},m=t.startSymbol(),g=t.endSymbol(),v=m+c+"-"+p+g,$=lr.noop
o(s,function(e,t){var n=r.exec(t)
if(n){var i=(n[1]?"-":"")+Yn(n[2])
d[i]=a.attr(s.$attr[t])}}),o(d,function(e,r){h[r]=t(e.replace(n,v))}),i.$watch(c,function(t){var n=parseFloat(t),r=isNaN(n)
r||n in d||(n=e.pluralCat(n-p)),n===l||r&&isNaN(l)||($(),$=i.$watch(h[n],u),l=n)})}}}],Ao=["$parse","$animate",function(e,a){var s="$$NG_REMOVED",u=r("ngRepeat"),l=function(e,t,n,r,i,o,a){e[n]=r,i&&(e[i]=o),e.$index=t,e.$first=0===t,e.$last=t===a-1,e.$middle=!(e.$first||e.$last),e.$odd=!(e.$even=0===(1&t))},c=function(e){return e.clone[0]},f=function(e){return e.clone[e.clone.length-1]}
return{restrict:"A",multiElement:!0,transclude:"element",priority:1e3,terminal:!0,$$tlb:!0,compile:function(r,p){var d=p.ngRepeat,h=t.createComment(" end ngRepeat: "+d+" "),m=d.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/)
if(!m)throw u("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",d)
var g=m[1],v=m[2],$=m[3],y=m[4]
if(m=g.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/),!m)throw u("iidexp","'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",g)
var w=m[3]||m[1],b=m[2]
if($&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test($)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test($)))throw u("badident","alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",$)
var x,C,k,S,T={$id:He}
return y?x=e(y):(k=function(e,t){return He(t)},S=function(e){return e}),function(e,t,r,p,m){x&&(C=function(t,n,r){return b&&(T[b]=t),T[w]=n,T.$index=r,x(e,T)})
var g=le()
e.$watchCollection(v,function(r){var p,v,y,x,T,A,E,N,D,_,O,M,j=t[0],P=le()
if($&&(e[$]=r),i(r))D=r,N=C||k
else{N=C||S,D=[]
for(var q in r)r.hasOwnProperty(q)&&"$"!=q.charAt(0)&&D.push(q)
D.sort()}for(x=D.length,O=Array(x),p=0;x>p;p++)if(T=r===D?p:D[p],A=r[T],E=N(T,A,p),g[E])_=g[E],delete g[E],P[E]=_,O[p]=_
else{if(P[E])throw o(O,function(e){e&&e.scope&&(g[e.id]=e)}),u("dupes","Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",d,E,A)
O[p]={id:E,scope:n,clone:n},P[E]=!0}for(var L in g){if(_=g[L],M=ue(_.clone),a.leave(M),M[0].parentNode)for(p=0,v=M.length;v>p;p++)M[p][s]=!0
_.scope.$destroy()}for(p=0;x>p;p++)if(T=r===D?p:D[p],A=r[T],_=O[p],_.scope){y=j
do y=y.nextSibling
while(y&&y[s])
c(_)!=y&&a.move(ue(_.clone),null,tr(j)),j=f(_),l(_.scope,p,w,A,b,T,x)}else m(function(e,t){_.scope=t
var n=h.cloneNode(!1)
e[e.length++]=n,a.enter(e,null,tr(j)),j=n,_.clone=e,P[_.id]=_,l(_.scope,p,w,A,b,T,x)})
g=P})}}}}],Eo="ng-hide",No="ng-hide-animate",Do=["$animate",function(e){return{restrict:"A",multiElement:!0,link:function(t,n,r){t.$watch(r.ngShow,function(t){e[t?"removeClass":"addClass"](n,Eo,{tempClasses:No})})}}}],_o=["$animate",function(e){return{restrict:"A",multiElement:!0,link:function(t,n,r){t.$watch(r.ngHide,function(t){e[t?"addClass":"removeClass"](n,Eo,{tempClasses:No})})}}}],Oo=En(function(e,t,n){e.$watchCollection(n.ngStyle,function(e,n){n&&e!==n&&o(n,function(e,n){t.css(n,"")}),e&&t.css(e)})}),Mo=["$animate",function(e){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(n,r,i,a){var s=i.ngSwitch||i.on,u=[],l=[],c=[],f=[],p=function(e,t){return function(){e.splice(t,1)}}
n.$watch(s,function(n){var r,i
for(r=0,i=c.length;i>r;++r)e.cancel(c[r])
for(c.length=0,r=0,i=f.length;i>r;++r){var s=ue(l[r].clone)
f[r].$destroy()
var d=c[r]=e.leave(s)
d.then(p(c,r))}l.length=0,f.length=0,(u=a.cases["!"+n]||a.cases["?"])&&o(u,function(n){n.transclude(function(r,i){f.push(i)
var o=n.element
r[r.length++]=t.createComment(" end ngSwitchWhen: ")
var a={clone:r}
l.push(a),e.enter(r,o.parent(),o)})})})}}}],jo=En({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(e,t,n,r,i){r.cases["!"+n.ngSwitchWhen]=r.cases["!"+n.ngSwitchWhen]||[],r.cases["!"+n.ngSwitchWhen].push({transclude:i,element:t})}}),Po=En({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(e,t,n,r,i){r.cases["?"]=r.cases["?"]||[],r.cases["?"].push({transclude:i,element:t})}}),qo=En({restrict:"EAC",link:function(e,t,n,i,o){if(!o)throw r("ngTransclude")("orphan","Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",W(t))
o(function(e){t.empty(),t.append(e)})}}),Lo=["$templateCache",function(e){return{restrict:"E",terminal:!0,compile:function(t,n){if("text/ng-template"==n.type){var r=n.id,i=t[0].text
e.put(r,i)}}}}],Ro=r("ngOptions"),Io=g({restrict:"A",terminal:!0}),Ho=["$compile","$parse",function(e,r){var i=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,s={$setViewValue:h}
return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(e,t,n){var r,i,o=this,a={},u=s
o.databound=n.ngModel,o.init=function(e,t,n){u=e,r=t,i=n},o.addOption=function(t,n){ae(t,'"option value"'),a[t]=!0,u.$viewValue==t&&(e.val(t),i.parent()&&i.remove()),n&&n[0].hasAttribute("selected")&&(n[0].selected=!0)},o.removeOption=function(e){this.hasOption(e)&&(delete a[e],u.$viewValue===e&&this.renderUnknownOption(e))},o.renderUnknownOption=function(t){var n="? "+He(t)+" ?"
i.val(n),e.prepend(i),e.val(n),i.prop("selected",!0)},o.hasOption=function(e){return a.hasOwnProperty(e)},t.$on("$destroy",function(){o.renderUnknownOption=h})}],link:function(s,u,l,c){function f(e,t,n,r){n.$render=function(){var e=n.$viewValue
r.hasOption(e)?(S.parent()&&S.remove(),t.val(e),""===e&&h.prop("selected",!0)):v(e)&&h?t.val(""):r.renderUnknownOption(e)},t.on("change",function(){e.$apply(function(){S.parent()&&S.remove(),n.$setViewValue(t.val())})})}function p(e,t,n){var r
n.$render=function(){var e=new Fe(n.$viewValue)
o(t.find("option"),function(t){t.selected=$(e.get(t.value))})},e.$watch(function(){R(r,n.$viewValue)||(r=L(n.$viewValue),n.$render())}),t.on("change",function(){e.$apply(function(){var e=[]
o(t.find("option"),function(t){t.selected&&e.push(t.value)}),n.$setViewValue(e)})})}function d(t,s,u){function l(e,n,r){return R[A]=r,D&&(R[D]=n),e(t,R)}function c(){t.$apply(function(){var e,n=M(t)||[]
if(y)e=[],o(s.val(),function(t){t=P?q[t]:t,e.push(f(t,n[t]))})
else{var r=P?q[s.val()]:s.val()
e=f(r,n[r])}u.$setViewValue(e),v()})}function f(e,t){if("?"===e)return n
if(""===e)return null
var r=N?N:O
return l(r,e,t)}function p(){var e,n=M(t)
if(n&&pr(n)){e=Array(n.length)
for(var r=0,i=n.length;i>r;r++)e[r]=l(T,r,n[r])
return e}if(n){e={}
for(var o in n)n.hasOwnProperty(o)&&(e[o]=l(T,o,n[o]))}return e}function d(e){var t
if(y)if(P&&pr(e)){t=new Fe([])
for(var n=0;n<e.length;n++)t.put(l(P,null,e[n]),!0)}else t=new Fe(e)
else P&&(e=l(P,null,e))
return function(n,r){var i
return i=P?P:N?N:O,y?$(t.remove(l(i,n,r))):e===l(i,n,r)}}function h(){x||(t.$$postDigest(v),x=!0)}function g(e,t,n){e[t]=e[t]||0,e[t]+=n?1:-1}function v(){x=!1
var e,n,r,i,c,f,p,h,v,w,S,A,E,N,O,j,I,H={"":[]},F=[""],V=u.$viewValue,U=M(t)||[],B=D?a(U):U,W={},z=d(V),G=!1
for(q={},A=0;w=B.length,w>A;A++)p=A,D&&(p=B[A],"$"===p.charAt(0))||(h=U[p],e=l(_,p,h)||"",(n=H[e])||(n=H[e]=[],F.push(e)),E=z(p,h),G=G||E,j=l(T,p,h),j=$(j)?j:"",I=P?P(t,R):D?B[A]:A,P&&(q[I]=p),n.push({id:I,label:j,selected:E}))
for(y||(b||null===V?H[""].unshift({id:"",label:"",selected:!G}):G||H[""].unshift({id:"?",label:"",selected:!0})),S=0,v=F.length;v>S;S++){for(e=F[S],n=H[e],L.length<=S?(i={element:k.clone().attr("label",e),label:n.label},c=[i],L.push(c),s.append(i.element)):(c=L[S],i=c[0],i.label!=e&&i.element.attr("label",i.label=e)),N=null,A=0,w=n.length;w>A;A++)r=n[A],(f=c[A+1])?(N=f.element,f.label!==r.label&&(g(W,f.label,!1),g(W,r.label,!0),N.text(f.label=r.label),N.prop("label",f.label)),f.id!==r.id&&N.val(f.id=r.id),N[0].selected!==r.selected&&(N.prop("selected",f.selected=r.selected),er&&N.prop("selected",f.selected))):(""===r.id&&b?O=b:(O=C.clone()).val(r.id).prop("selected",r.selected).attr("selected",r.selected).prop("label",r.label).text(r.label),c.push(f={element:O,label:r.label,id:r.id,selected:r.selected}),g(W,r.label,!0),N?N.after(O):i.element.append(O),N=O)
for(A++;c.length>A;)r=c.pop(),g(W,r.label,!1),r.element.remove()}for(;L.length>S;){for(n=L.pop(),A=1;A<n.length;++A)g(W,n[A].label,!1)
n[0].element.remove()}o(W,function(e,t){e>0?m.addOption(t):0>e&&m.removeOption(t)})}var S
if(!(S=w.match(i)))throw Ro("iexp","Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",w,W(s))
var T=r(S[2]||S[1]),A=S[4]||S[6],E=/ as /.test(S[0])&&S[1],N=E?r(E):null,D=S[5],_=r(S[3]||""),O=r(S[2]?S[1]:A),M=r(S[7]),j=S[8],P=j?r(S[8]):null,q={},L=[[{element:s,label:""}]],R={}
b&&(e(b)(t),b.removeClass("ng-scope"),b.remove()),s.empty(),s.on("change",c),u.$render=v,t.$watchCollection(M,h),t.$watchCollection(p,h),y&&t.$watchCollection(function(){return u.$modelValue},h)}if(c[1]){for(var h,m=c[0],g=c[1],y=l.multiple,w=l.ngOptions,b=!1,x=!1,C=tr(t.createElement("option")),k=tr(t.createElement("optgroup")),S=C.clone(),T=0,A=u.children(),E=A.length;E>T;T++)if(""===A[T].value){h=b=A.eq(T)
break}m.init(g,b,S),y&&(g.$isEmpty=function(e){return!e||0===e.length}),w?d(s,u,g):y?p(s,u,g):f(s,u,g,m)}}}}],Fo=["$interpolate",function(e){var t={addOption:h,removeOption:h}
return{restrict:"E",priority:100,compile:function(n,r){if(v(r.value)){var i=e(n.text(),!0)
i||r.$set("value",n.text())}return function(e,n,r){var o="$selectController",a=n.parent(),s=a.data(o)||a.parent().data(o)
s&&s.databound||(s=t),i?e.$watch(i,function(e,t){r.$set("value",e),t!==e&&s.removeOption(t),s.addOption(e,n)}):s.addOption(r.value,n),n.on("$destroy",function(){s.removeOption(r.value)})}}}}],Vo=g({restrict:"E",terminal:!1}),Uo=function(){return{restrict:"A",require:"?ngModel",link:function(e,t,n,r){r&&(n.required=!0,r.$validators.required=function(e,t){return!n.required||!r.$isEmpty(t)},n.$observe("required",function(){r.$validate()}))}}},Bo=function(){return{restrict:"A",require:"?ngModel",link:function(e,t,i,o){if(o){var a,s=i.ngPattern||i.pattern
i.$observe("pattern",function(e){if(w(e)&&e.length>0&&(e=RegExp("^"+e+"$")),e&&!e.test)throw r("ngPattern")("noregexp","Expected {0} to be a RegExp but was {1}. Element: {2}",s,e,W(t))
a=e||n,o.$validate()}),o.$validators.pattern=function(e){return o.$isEmpty(e)||v(a)||a.test(e)}}}}},Wo=function(){return{restrict:"A",require:"?ngModel",link:function(e,t,n,r){if(r){var i=-1
n.$observe("maxlength",function(e){var t=p(e)
i=isNaN(t)?-1:t,r.$validate()}),r.$validators.maxlength=function(e,t){return 0>i||r.$isEmpty(t)||t.length<=i}}}}},zo=function(){return{restrict:"A",require:"?ngModel",link:function(e,t,n,r){if(r){var i=0
n.$observe("minlength",function(e){i=p(e)||0,r.$validate()}),r.$validators.minlength=function(e,t){return r.$isEmpty(t)||t.length>=i}}}}}
return e.angular.bootstrap?(console.log("WARNING: Tried to load angular more than once."),n):(re(),de(lr),tr(t).ready(function(){Z(t,Q)}),n)}(window,document),!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'),function(e,t,n){"use strict"
t.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(e,r){function i(){var e,i,o,u
for(e in s)c(a[e])&&r.cookies(e,n)
for(e in a)i=a[e],t.isString(i)||(i=""+i,a[e]=i),i!==s[e]&&(r.cookies(e,i),u=!0)
if(u){u=!1,o=r.cookies()
for(e in a)a[e]!==o[e]&&(c(o[e])?delete a[e]:a[e]=o[e],u=!0)}}var o,a={},s={},u=!1,l=t.copy,c=t.isUndefined
return r.addPollFn(function(){var t=r.cookies()
o!=t&&(o=t,l(t,s),l(t,a),u&&e.$apply())})(),u=!0,e.$watch(i),a}]).factory("$cookieStore",["$cookies",function(e){return{get:function(n){var r=e[n]
return r?t.fromJson(r):r},put:function(n,r){e[n]=t.toJson(r)},remove:function(t){delete e[t]}}}])}(window,window.angular),function(e,t){"use strict"
function n(){function e(e,n){return t.extend(Object.create(e),n)}function n(e,t){var n=t.caseInsensitiveMatch,r={originalPath:e,regexp:e},i=r.keys=[]
return e=e.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?\*])?/g,function(e,t,n,r){var o="?"===r?r:null,a="*"===r?r:null
return i.push({name:n,optional:!!o}),t=t||"",""+(o?"":t)+"(?:"+(o?t:"")+(a&&"(.+?)"||"([^/]+)")+(o||"")+")"+(o||"")}).replace(/([\/$\*])/g,"\\$1"),r.regexp=RegExp("^"+e+"$",n?"i":""),r}var r={}
this.when=function(e,i){var o=t.copy(i)
if(t.isUndefined(o.reloadOnSearch)&&(o.reloadOnSearch=!0),t.isUndefined(o.caseInsensitiveMatch)&&(o.caseInsensitiveMatch=this.caseInsensitiveMatch),r[e]=t.extend(o,e&&n(e,o)),e){var a="/"==e[e.length-1]?e.substr(0,e.length-1):e+"/"
r[a]=t.extend({redirectTo:e},n(a,o))}return this},this.caseInsensitiveMatch=!1,this.otherwise=function(e){return"string"==typeof e&&(e={redirectTo:e}),this.when(null,e),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(n,i,o,a,u,l,c){function f(e,t){var n=t.keys,r={}
if(!t.regexp)return null
var i=t.regexp.exec(e)
if(!i)return null
for(var o=1,a=i.length;a>o;++o){var s=n[o-1],u=i[o]
s&&u&&(r[s.name]=u)}return r}function p(e){var r=y.current
g=h(),v=g&&r&&g.$$route===r.$$route&&t.equals(g.pathParams,r.pathParams)&&!g.reloadOnSearch&&!$,v||!r&&!g||n.$broadcast("$routeChangeStart",g,r).defaultPrevented&&e&&e.preventDefault()}function d(){var e=y.current,r=g
v?(e.params=r.params,t.copy(e.params,o),n.$broadcast("$routeUpdate",e)):(r||e)&&($=!1,y.current=r,r&&r.redirectTo&&(t.isString(r.redirectTo)?i.path(m(r.redirectTo,r.params)).search(r.params).replace():i.url(r.redirectTo(r.pathParams,i.path(),i.search())).replace()),a.when(r).then(function(){if(r){var e,n,i=t.extend({},r.resolve)
return t.forEach(i,function(e,n){i[n]=t.isString(e)?u.get(e):u.invoke(e,null,null,n)}),t.isDefined(e=r.template)?t.isFunction(e)&&(e=e(r.params)):t.isDefined(n=r.templateUrl)&&(t.isFunction(n)&&(n=n(r.params)),n=c.getTrustedResourceUrl(n),t.isDefined(n)&&(r.loadedTemplateUrl=n,e=l(n))),t.isDefined(e)&&(i.$template=e),a.all(i)}}).then(function(i){r==y.current&&(r&&(r.locals=i,t.copy(r.params,o)),n.$broadcast("$routeChangeSuccess",r,e))},function(t){r==y.current&&n.$broadcast("$routeChangeError",r,e,t)}))}function h(){var n,o
return t.forEach(r,function(r){!o&&(n=f(i.path(),r))&&(o=e(r,{params:t.extend({},i.search(),n),pathParams:n}),o.$$route=r)}),o||r[null]&&e(r[null],{params:{},pathParams:{}})}function m(e,n){var r=[]
return t.forEach((e||"").split(":"),function(e,t){if(0===t)r.push(e)
else{var i=e.match(/(\w+)(?:[?*])?(.*)/),o=i[1]
r.push(n[o]),r.push(i[2]||""),delete n[o]}}),r.join("")}var g,v,$=!1,y={routes:r,reload:function(){$=!0,n.$evalAsync(function(){p(),d()})},updateParams:function(e){if(!this.current||!this.current.$$route)throw s("norout","Tried updating route when with no current route")
e=t.extend({},this.current.params,e),i.path(m(this.current.$$route.originalPath,e)),i.search(e)}}
return n.$on("$locationChangeStart",p),n.$on("$locationChangeSuccess",d),y}]}function r(){this.$get=function(){return{}}}function i(e,n,r){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(i,o,a,s,u){function l(){d&&(r.cancel(d),d=null),f&&(f.$destroy(),f=null),p&&(d=r.leave(p),d.then(function(){d=null}),p=null)}function c(){var a=e.current&&e.current.locals,s=a&&a.$template
if(t.isDefined(s)){var c=i.$new(),d=e.current,g=u(c,function(e){r.enter(e,null,p||o).then(function(){!t.isDefined(h)||h&&!i.$eval(h)||n()}),l()})
p=g,f=d.scope=c,f.$emit("$viewContentLoaded"),f.$eval(m)}else l()}var f,p,d,h=a.autoscroll,m=a.onload||""
i.$on("$routeChangeSuccess",c),c()}}}function o(e,t,n){return{restrict:"ECA",priority:-400,link:function(r,i){var o=n.current,a=o.locals
i.html(a.$template)
var s=e(i.contents())
if(o.controller){a.$scope=r
var u=t(o.controller,a)
o.controllerAs&&(r[o.controllerAs]=u),i.data("$ngControllerController",u),i.children().data("$ngControllerController",u)}s(r)}}}var a=t.module("ngRoute",["ng"]).provider("$route",n),s=t.$$minErr("ngRoute")
a.provider("$routeParams",r),a.directive("ngView",i),a.directive("ngView",o),i.$inject=["$route","$anchorScroll","$animate"],o.$inject=["$compile","$controller","$route"]}(window,window.angular),function(){"use strict"
angular.module("file-model",[]).directive("fileModel",["$parse",function(e){return{restrict:"A",link:function(t,n,r){var i=e(r.fileModel),o=i.assign
n.bind("change",function(){t.$apply(function(){n[0].files.length>1?o(t,n[0].files):o(t,n[0].files[0])})})}}}])}(),function(e,t){"function"==typeof define&&define.amd?define(["module","angular"],function(e,n){e.exports=t(n)}):"object"==typeof module?module.exports=t(require("angular")):(e.mp||(e.mp={}),e.mp.colorPicker=t(e.angular))}(this,function(e){"use strict"
function t(e,t,n){"object"==typeof e&&(t=e.s,n=e.v,e=e.h)
var r,i,o,a=Math.floor(6*e),s=6*e-a,u=n*(1-t),l=n*(1-s*t),c=n*(1-(1-s)*t)
switch(a%6){case 0:r=n,i=c,o=u
break
case 1:r=l,i=n,o=u
break
case 2:r=u,i=n,o=c
break
case 3:r=u,i=l,o=n
break
case 4:r=c,i=u,o=n
break
case 5:r=n,i=u,o=l}return r=Math.floor(255*r)+256,i=Math.floor(255*i)+256,o=Math.floor(255*o)+256,"#"+r.toString(16).slice(1)+i.toString(16).slice(1)+o.toString(16).slice(1)}function n(e){var t=/^#(..)(..)(..)$/.exec(e)
if(t){var n,r,i=t.slice(1).map(function(e){return parseInt(e,16)/255}),o=i[0],a=i[1],s=i[2],u=Math.max(o,a,s),l=u-Math.min(o,a,s),c=function(e){return(u-e)/6/l+.5}
if(0===l)n=r=0
else{r=l/u
var f=c(o),p=c(a),d=c(s)
o===u?n=d-p:a===u?n=1/3+f-d:s===u&&(n=2/3+p-f),0>n?n+=1:n>1&&(n-=1)}return{h:n,s:r,v:u}}}return e.module("mp.colorPicker",[]).directive("colorPicker",["$window",function(r){r.document.createElement("color-picker")
var i='<div class="angular-color-picker">    <div class="_variations" ng-style="{ backgroundColor: hueBackgroundColor }">        <div class="_whites">            <div class="_blacks">                <div class="_cursor" ng-if="colorCursor" ng-style="{ left: colorCursor.x - 5 + \'px\', top: colorCursor.y - 5 + \'px\' }"></div>                <div class="_mouse-trap" ng-mousedown="startDrag($event, \'color\')"></div>            </div>        </div>    </div>    <div class="_hues">        <div class="_ie-1"></div>        <div class="_ie-2"></div>        <div class="_ie-3"></div>        <div class="_ie-4"></div>        <div class="_ie-5"></div>        <div class="_ie-6"></div>        <div class="_cursor" ng-style="{ top: hueCursor - 5 + \'px\' }"></div>        <div class="_mouse-trap" ng-mousedown="startDrag($event, \'hue\')"></div>    </div></div>'
return{restrict:"AE",template:i,replace:!0,require:"?ngModel",scope:{},link:function(i,o,a,s){function u(e,n){e=Math.max(Math.min(e,f.width),0),n=Math.max(Math.min(n,f.height),0),"hue"===c?(i.hueCursor=n,i.hsv.h=n/f.height,i.hueBackgroundColor=t(i.hsv.h,1,1)):(i.colorCursor={x:e,y:n},i.hsv.s=e/f.width,i.hsv.v=1-n/f.height),void 0!==i.hsv.s&&(i.color=t(i.hsv),s&&s.$setViewValue(i.color))}function l(e){e.preventDefault(),i.$apply(function(){u(e.clientX-f.x,e.clientY-f.y)})}i.hsv={h:0,s:0,v:0},s&&(s.$render=function(){/^#[0-9A-Fa-f]{6}$/.test(s.$viewValue)?(i.color=s.$viewValue,i.hsv=n(i.color),i.colorCursor={x:200*i.hsv.s,y:200*(1-i.hsv.v)}):(i.color=null,i.hsv={h:.5},i.colorCursor=null),i.hueBackgroundColor=t(i.hsv.h,1,1),i.hueCursor=200*i.hsv.h})
var c,f
i.startDrag=function(t,n){var i=t.target.getBoundingClientRect()
c=n,f={x:i.left,y:i.top,width:i.right-i.left,height:i.bottom-i.top},u(t.offsetX||t.layerX,t.offsetY||t.layerY),e.element(r).on("mousemove",l).one("mouseup",function(){e.element(r).off("mousemove",l)})}}}}])}),function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw Error("jQuery requires a window with a document")
return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t="length"in e&&e.length,n=Q.type(e)
return"function"===n||Q.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function r(e,t,n){if(Q.isFunction(t))return Q.grep(e,function(e,r){return!!t.call(e,r,e)!==n})
if(t.nodeType)return Q.grep(e,function(e){return e===t!==n})
if("string"==typeof t){if(se.test(t))return Q.filter(t,e,n)
t=Q.filter(t,e)}return Q.grep(e,function(e){return z.call(t,e)>=0!==n})}function i(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t=he[e]={}
return Q.each(e.match(de)||[],function(e,n){t[n]=!0}),t}function a(){K.removeEventListener("DOMContentLoaded",a,!1),e.removeEventListener("load",a,!1),Q.ready()}function s(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=Q.expando+s.uid++}function u(e,t,n){var r
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(we,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:ye.test(n)?Q.parseJSON(n):n}catch(i){}$e.set(e,t,n)}else n=void 0
return n}function l(){return!0}function c(){return!1}function f(){try{return K.activeElement}catch(e){}}function p(e,t){return Q.nodeName(e,"table")&&Q.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function d(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function h(e){var t=qe.exec(e.type)
return t?e.type=t[1]:e.removeAttribute("type"),e}function m(e,t){for(var n=0,r=e.length;r>n;n++)ve.set(e[n],"globalEval",!t||ve.get(t[n],"globalEval"))}function g(e,t){var n,r,i,o,a,s,u,l
if(1===t.nodeType){if(ve.hasData(e)&&(o=ve.access(e),a=ve.set(t,o),l=o.events)){delete a.handle,a.events={}
for(i in l)for(n=0,r=l[i].length;r>n;n++)Q.event.add(t,i,l[i][n])}$e.hasData(e)&&(s=$e.access(e),u=Q.extend({},s),$e.set(t,u))}}function v(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[]
return void 0===t||t&&Q.nodeName(e,t)?Q.merge([e],n):n}function $(e,t){var n=t.nodeName.toLowerCase()
"input"===n&&ke.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function y(t,n){var r,i=Q(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(r=e.getDefaultComputedStyle(i[0]))?r.display:Q.css(i[0],"display")
return i.detach(),o}function w(e){var t=K,n=He[e]
return n||(n=y(e,t),"none"!==n&&n||(Ie=(Ie||Q("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=Ie[0].contentDocument,t.write(),t.close(),n=y(e,t),Ie.detach()),He[e]=n),n}function b(e,t,n){var r,i,o,a,s=e.style
return n=n||Ue(e),n&&(a=n.getPropertyValue(t)||n[t]),n&&(""!==a||Q.contains(e.ownerDocument,e)||(a=Q.style(e,t)),Ve.test(a)&&Fe.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function x(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function C(e,t){if(t in e)return t
for(var n=t[0].toUpperCase()+t.slice(1),r=t,i=Ye.length;i--;)if(t=Ye[i]+n,t in e)return t
return r}function k(e,t,n){var r=We.exec(t)
return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function S(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=Q.css(e,n+xe[o],!0,i)),r?("content"===n&&(a-=Q.css(e,"padding"+xe[o],!0,i)),"margin"!==n&&(a-=Q.css(e,"border"+xe[o]+"Width",!0,i))):(a+=Q.css(e,"padding"+xe[o],!0,i),"padding"!==n&&(a+=Q.css(e,"border"+xe[o]+"Width",!0,i)))
return a}function T(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Ue(e),a="border-box"===Q.css(e,"boxSizing",!1,o)
if(0>=i||null==i){if(i=b(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ve.test(i))return i
r=a&&(J.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+S(e,t,n||(a?"border":"content"),r,o)+"px"}function A(e,t){for(var n,r,i,o=[],a=0,s=e.length;s>a;a++)r=e[a],r.style&&(o[a]=ve.get(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&Ce(r)&&(o[a]=ve.access(r,"olddisplay",w(r.nodeName)))):(i=Ce(r),"none"===n&&i||ve.set(r,"olddisplay",i?n:Q.css(r,"display"))))
for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"))
return e}function E(e,t,n,r,i){return new E.prototype.init(e,t,n,r,i)}function N(){return setTimeout(function(){Je=void 0}),Je=Q.now()}function D(e,t){var n,r=0,i={height:e}
for(t=t?1:0;4>r;r+=2-t)n=xe[r],i["margin"+n]=i["padding"+n]=e
return t&&(i.opacity=i.width=e),i}function _(e,t,n){for(var r,i=(nt[t]||[]).concat(nt["*"]),o=0,a=i.length;a>o;o++)if(r=i[o].call(n,t,e))return r}function O(e,t,n){var r,i,o,a,s,u,l,c,f=this,p={},d=e.style,h=e.nodeType&&Ce(e),m=ve.get(e,"fxshow")
n.queue||(s=Q._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,u=s.empty.fire,s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,f.always(function(){f.always(function(){s.unqueued--,Q.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],l=Q.css(e,"display"),c="none"===l?ve.get(e,"olddisplay")||w(e.nodeName):l,"inline"===c&&"none"===Q.css(e,"float")&&(d.display="inline-block")),n.overflow&&(d.overflow="hidden",f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}))
for(r in t)if(i=t[r],Ze.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue
h=!0}p[r]=m&&m[r]||Q.style(e,r)}else l=void 0
if(Q.isEmptyObject(p))"inline"===("none"===l?w(e.nodeName):l)&&(d.display=l)
else{m?"hidden"in m&&(h=m.hidden):m=ve.access(e,"fxshow",{}),o&&(m.hidden=!h),h?Q(e).show():f.done(function(){Q(e).hide()}),f.done(function(){var t
ve.remove(e,"fxshow")
for(t in p)Q.style(e,t,p[t])})
for(r in p)a=_(h?m[r]:0,r,f),r in m||(m[r]=a.start,h&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function M(e,t){var n,r,i,o,a
for(n in e)if(r=Q.camelCase(n),i=t[r],o=e[n],Q.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=Q.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r]
for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function j(e,t,n){var r,i,o=0,a=tt.length,s=Q.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1
for(var t=Je||N(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;u>a;a++)l.tweens[a].run(o)
return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:Q.extend({},t),opts:Q.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Je||N(),duration:n.duration,tweens:[],createTween:function(t,n){var r=Q.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing)
return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0
if(i)return this
for(i=!0;r>n;n++)l.tweens[n].run(1)
return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props
for(M(c,l.opts.specialEasing);a>o;o++)if(r=tt[o].call(l,e,c,l.opts))return r
return Q.map(c,_,l),Q.isFunction(l.opts.start)&&l.opts.start.call(e,l),Q.fx.timer(Q.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function P(e){return function(t,n){"string"!=typeof t&&(n=t,t="*")
var r,i=0,o=t.toLowerCase().match(de)||[]
if(Q.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function q(e,t,n,r){function i(s){var u
return o[s]=!0,Q.each(e[s]||[],function(e,s){var l=s(t,n,r)
return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},a=e===yt
return i(t.dataTypes[0])||!o["*"]&&i("*")}function L(e,t){var n,r,i=Q.ajaxSettings.flatOptions||{}
for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n])
return r&&Q.extend(!0,e,r),e}function R(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"))
if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i)
break}if(u[0]in n)o=u[0]
else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i
break}a||(a=i)}o=o||a}return o?(o!==u[0]&&u.unshift(o),n[o]):void 0}function I(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice()
if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a]
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u
else if("*"!==u&&u!==o){if(a=l[u+" "+o]||l["* "+o],!a)for(i in l)if(s=i.split(" "),s[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){a===!0?a=l[i]:l[i]!==!0&&(o=s[0],c.unshift(s[1]))
break}if(a!==!0)if(a&&e["throws"])t=a(t)
else try{t=a(t)}catch(f){return{state:"parsererror",error:a?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function H(e,t,n,r){var i
if(Q.isArray(t))Q.each(t,function(t,i){n||kt.test(e)?r(e,i):H(e+"["+("object"==typeof i?t:"")+"]",i,n,r)})
else if(n||"object"!==Q.type(t))r(e,t)
else for(i in t)H(e+"["+i+"]",t[i],n,r)}function F(e){return Q.isWindow(e)?e:9===e.nodeType&&e.defaultView}var V=[],U=V.slice,B=V.concat,W=V.push,z=V.indexOf,G={},X=G.toString,Y=G.hasOwnProperty,J={},K=e.document,Z="2.1.4",Q=function(e,t){return new Q.fn.init(e,t)},ee=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,te=/^-ms-/,ne=/-([\da-z])/gi,re=function(e,t){return t.toUpperCase()}
Q.fn=Q.prototype={jquery:Z,constructor:Q,selector:"",length:0,toArray:function(){return U.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:U.call(this)},pushStack:function(e){var t=Q.merge(this.constructor(),e)
return t.prevObject=this,t.context=this.context,t},each:function(e,t){return Q.each(this,e,t)},map:function(e){return this.pushStack(Q.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(U.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0)
return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:W,sort:V.sort,splice:V.splice},Q.extend=Q.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1
for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||Q.isFunction(a)||(a={}),s===u&&(a=this,s--);u>s;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],r=e[t],a!==r&&(l&&r&&(Q.isPlainObject(r)||(i=Q.isArray(r)))?(i?(i=!1,o=n&&Q.isArray(n)?n:[]):o=n&&Q.isPlainObject(n)?n:{},a[t]=Q.extend(l,o,r)):void 0!==r&&(a[t]=r))
return a},Q.extend({expando:"jQuery"+(Z+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw Error(e)},noop:function(){},isFunction:function(e){return"function"===Q.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!Q.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return"object"!==Q.type(e)||e.nodeType||Q.isWindow(e)?!1:e.constructor&&!Y.call(e.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(e){var t
for(t in e)return!1
return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?G[X.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval
e=Q.trim(e),e&&(1===e.indexOf("use strict")?(t=K.createElement("script"),t.text=e,K.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(te,"ms-").replace(ne,re)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,a=e.length,s=n(e)
if(r){if(s)for(;a>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(s)for(;a>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break
return e},trim:function(e){return null==e?"":(e+"").replace(ee,"")},makeArray:function(e,t){var r=t||[]
return null!=e&&(n(Object(e))?Q.merge(r,"string"==typeof e?[e]:e):W.call(r,e)),r},inArray:function(e,t,n){return null==t?-1:z.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;r++)e[i++]=t[r]
return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;a>o;o++)r=!t(e[o],o),r!==s&&i.push(e[o])
return i},map:function(e,t,r){var i,o=0,a=e.length,s=n(e),u=[]
if(s)for(;a>o;o++)i=t(e[o],o,r),null!=i&&u.push(i)
else for(o in e)i=t(e[o],o,r),null!=i&&u.push(i)
return B.apply([],u)},guid:1,proxy:function(e,t){var n,r,i
return"string"==typeof t&&(n=e[t],t=e,e=n),Q.isFunction(e)?(r=U.call(arguments,2),i=function(){return e.apply(t||this,r.concat(U.call(arguments)))},i.guid=e.guid=e.guid||Q.guid++,i):void 0},now:Date.now,support:J}),Q.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){G["[object "+t+"]"]=t.toLowerCase()})
var ie=function(e){function t(e,t,n,r){var i,o,a,s,u,l,f,d,h,m
if((t?t.ownerDocument||t:H)!==O&&_(t),t=t||O,n=n||[],s=t.nodeType,"string"!=typeof e||!e||1!==s&&9!==s&&11!==s)return n
if(!r&&j){if(11!==s&&(i=$e.exec(e)))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n
if(o.id===a)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(a))&&R(t,o)&&o.id===a)return n.push(o),n}else{if(i[2])return Z.apply(n,t.getElementsByTagName(e)),n
if((a=i[3])&&b.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(a)),n}if(b.qsa&&(!P||!P.test(e))){if(d=f=I,h=t,m=1!==s&&e,1===s&&"object"!==t.nodeName.toLowerCase()){for(l=S(e),(f=t.getAttribute("id"))?d=f.replace(we,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",u=l.length;u--;)l[u]=d+p(l[u])
h=ye.test(e)&&c(t.parentNode)||t,m=l.join(",")}if(m)try{return Z.apply(n,h.querySelectorAll(m)),n}catch(g){}finally{f||t.removeAttribute("id")}}}return A(e.replace(ue,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>x.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[]
return e}function r(e){return e[I]=!0,e}function i(e){var t=O.createElement("div")
try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)x.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||G)-(~e.sourceIndex||G)
if(r)return r
if(n)for(;n=n.nextSibling;)if(n===t)return-1
return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase()
return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase()
return("input"===n||"button"===n)&&t.type===e}}function l(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function c(e){return e&&void 0!==e.getElementsByTagName&&e}function f(){}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value
return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=V++
return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,a){var s,u,l=[F,o]
if(a){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,a))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(u=t[I]||(t[I]={}),(s=u[r])&&s[0]===F&&s[1]===o)return l[2]=s[2]
if(u[r]=l,l[2]=e(t,n,a))return!0}}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1
return!0}:e[0]}function m(e,n,r){for(var i=0,o=n.length;o>i;i++)t(e,n[i],r)
return r}function g(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;u>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s))
return a}function v(e,t,n,i,o,a){return i&&!i[I]&&(i=v(i)),o&&!o[I]&&(o=v(o,a)),r(function(r,a,s,u){var l,c,f,p=[],d=[],h=a.length,v=r||m(t||"*",s.nodeType?[s]:s,[]),$=!e||!r&&t?v:g(v,p,e,s,u),y=n?o||(r?e:h||i)?[]:a:$
if(n&&n($,y,s,u),i)for(l=g(y,d),i(l,[],s,u),c=l.length;c--;)(f=l[c])&&(y[d[c]]=!($[d[c]]=f))
if(r){if(o||e){if(o){for(l=[],c=y.length;c--;)(f=y[c])&&l.push($[c]=f)
o(null,y=[],l,u)}for(c=y.length;c--;)(f=y[c])&&(l=o?ee(r,f):p[c])>-1&&(r[l]=!(a[l]=f))}}else y=g(y===a?y.splice(h,y.length):y),o?o(null,a,y,u):Z.apply(a,y)})}function $(e){for(var t,n,r,i=e.length,o=x.relative[e[0].type],a=o||x.relative[" "],s=o?1:0,u=d(function(e){return e===t},a,!0),l=d(function(e){return ee(t,e)>-1},a,!0),c=[function(e,n,r){var i=!o&&(r||n!==E)||((t=n).nodeType?u(e,n,r):l(e,n,r))
return t=null,i}];i>s;s++)if(n=x.relative[e[s].type])c=[d(h(c),n)]
else{if(n=x.filter[e[s].type].apply(null,e[s].matches),n[I]){for(r=++s;i>r&&!x.relative[e[r].type];r++);return v(s>1&&h(c),s>1&&p(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ue,"$1"),n,r>s&&$(e.slice(s,r)),i>r&&$(e=e.slice(r)),i>r&&p(e))}c.push(n)}return h(c)}function y(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,u,l){var c,f,p,d=0,h="0",m=r&&[],v=[],$=E,y=r||o&&x.find.TAG("*",l),w=F+=null==$?1:Math.random()||.1,b=y.length
for(l&&(E=a!==O&&a);h!==b&&null!=(c=y[h]);h++){if(o&&c){for(f=0;p=e[f++];)if(p(c,a,s)){u.push(c)
break}l&&(F=w)}i&&((c=!p&&c)&&d--,r&&m.push(c))}if(d+=h,i&&h!==d){for(f=0;p=n[f++];)p(m,v,a,s)
if(r){if(d>0)for(;h--;)m[h]||v[h]||(v[h]=J.call(u))
v=g(v)}Z.apply(u,v),l&&!r&&v.length>0&&d+n.length>1&&t.uniqueSort(u)}return l&&(F=w,E=$),m}
return i?r(a):a}var w,b,x,C,k,S,T,A,E,N,D,_,O,M,j,P,q,L,R,I="sizzle"+1*new Date,H=e.document,F=0,V=0,U=n(),B=n(),W=n(),z=function(e,t){return e===t&&(D=!0),0},G=1<<31,X={}.hasOwnProperty,Y=[],J=Y.pop,K=Y.push,Z=Y.push,Q=Y.slice,ee=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n
return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ie=re.replace("w","w#"),oe="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+ne+"*\\]",ae=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",se=RegExp(ne+"+","g"),ue=RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),le=RegExp("^"+ne+"*,"+ne+"*"),ce=RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),fe=RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),pe=RegExp(ae),de=RegExp("^"+ie+"$"),he={ID:RegExp("^#("+re+")"),CLASS:RegExp("^\\.("+re+")"),TAG:RegExp("^("+re.replace("w","w*")+")"),ATTR:RegExp("^"+oe),PSEUDO:RegExp("^"+ae),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:RegExp("^(?:"+te+")$","i"),needsContext:RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},me=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,ve=/^[^{]+\{\s*\[native \w/,$e=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,we=/'|\\/g,be=RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),xe=function(e,t,n){var r="0x"+t-65536
return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},Ce=function(){_()}
try{Z.apply(Y=Q.call(H.childNodes),H.childNodes),Y[H.childNodes.length].nodeType}catch(ke){Z={apply:Y.length?function(e,t){K.apply(e,Q.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}b=t.support={},k=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return t?"HTML"!==t.nodeName:!1},_=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:H
return r!==O&&9===r.nodeType&&r.documentElement?(O=r,M=r.documentElement,n=r.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Ce,!1):n.attachEvent&&n.attachEvent("onunload",Ce)),j=!k(r),b.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),b.getElementsByTagName=i(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),b.getElementsByClassName=ve.test(r.getElementsByClassName),b.getById=i(function(e){return M.appendChild(e).id=I,!r.getElementsByName||!r.getElementsByName(I).length}),b.getById?(x.find.ID=function(e,t){if(void 0!==t.getElementById&&j){var n=t.getElementById(e)
return n&&n.parentNode?[n]:[]}},x.filter.ID=function(e){var t=e.replace(be,xe)
return function(e){return e.getAttribute("id")===t}}):(delete x.find.ID,x.filter.ID=function(e){var t=e.replace(be,xe)
return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id")
return n&&n.value===t}}),x.find.TAG=b.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):b.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e)
if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n)
return r}return o},x.find.CLASS=b.getElementsByClassName&&function(e,t){return j?t.getElementsByClassName(e):void 0},q=[],P=[],(b.qsa=ve.test(r.querySelectorAll))&&(i(function(e){M.appendChild(e).innerHTML="<a id='"+I+"'></a><select id='"+I+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&P.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||P.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+I+"-]").length||P.push("~="),e.querySelectorAll(":checked").length||P.push(":checked"),e.querySelectorAll("a#"+I+"+*").length||P.push(".#.+[+~]")}),i(function(e){var t=r.createElement("input")
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&P.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||P.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),P.push(",.*:")})),(b.matchesSelector=ve.test(L=M.matches||M.webkitMatchesSelector||M.mozMatchesSelector||M.oMatchesSelector||M.msMatchesSelector))&&i(function(e){b.disconnectedMatch=L.call(e,"div"),L.call(e,"[s!='']:x"),q.push("!=",ae)}),P=P.length&&RegExp(P.join("|")),q=q.length&&RegExp(q.join("|")),t=ve.test(M.compareDocumentPosition),R=t||ve.test(M.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},z=t?function(e,t){if(e===t)return D=!0,0
var n=!e.compareDocumentPosition-!t.compareDocumentPosition
return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!b.sortDetached&&t.compareDocumentPosition(e)===n?e===r||e.ownerDocument===H&&R(H,e)?-1:t===r||t.ownerDocument===H&&R(H,t)?1:N?ee(N,e)-ee(N,t):0:4&n?-1:1)}:function(e,t){if(e===t)return D=!0,0
var n,i=0,o=e.parentNode,s=t.parentNode,u=[e],l=[t]
if(!o||!s)return e===r?-1:t===r?1:o?-1:s?1:N?ee(N,e)-ee(N,t):0
if(o===s)return a(e,t)
for(n=e;n=n.parentNode;)u.unshift(n)
for(n=t;n=n.parentNode;)l.unshift(n)
for(;u[i]===l[i];)i++
return i?a(u[i],l[i]):u[i]===H?-1:l[i]===H?1:0},r):O},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==O&&_(e),n=n.replace(fe,"='$1']"),!(!b.matchesSelector||!j||q&&q.test(n)||P&&P.test(n)))try{var r=L.call(e,n)
if(r||b.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,O,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==O&&_(e),R(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==O&&_(e)
var n=x.attrHandle[t.toLowerCase()],r=n&&X.call(x.attrHandle,t.toLowerCase())?n(e,t,!j):void 0
return void 0!==r?r:b.attributes||!j?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0
if(D=!b.detectDuplicates,N=!b.sortStable&&e.slice(0),e.sort(z),D){for(;t=e[i++];)t===e[i]&&(r=n.push(i))
for(;r--;)e.splice(n[r],1)}return N=null,e},C=t.getText=function(e){var t,n="",r=0,i=e.nodeType
if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=C(t)
return n},x=t.selectors={cacheLength:50,createPseudo:r,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(be,xe),e[3]=(e[3]||e[4]||e[5]||"").replace(be,xe),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return he.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&pe.test(n)&&(t=S(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(be,xe).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=U[e+" "]
return t||(t=RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&U(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e)
return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(se," ")+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,m=o!==a?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),$=!u&&!s
if(g){if(o){for(;m;){for(f=t;f=f[m];)if(s?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1
h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&$){for(c=g[I]||(g[I]={}),l=c[e]||[],d=l[0]===F&&l[1],p=l[0]===F&&l[2],f=d&&g.childNodes[d];f=++d&&f&&f[m]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[F,d,p]
break}}else if($&&(l=(t[I]||(t[I]={}))[e])&&l[0]===F)p=l[1]
else for(;(f=++d&&f&&f[m]||(p=d=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++p||($&&((f[I]||(f[I]={}))[e]=[F,p]),f!==t)););return p-=i,p===r||p%r===0&&p/r>=0}}},PSEUDO:function(e,n){var i,o=x.pseudos[e]||x.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e)
return o[I]?o(n):o.length>1?(i=[e,e,"",n],x.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=ee(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=T(e.replace(ue,"$1"))
return i[I]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(be,xe),function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:r(function(e){return de.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(be,xe).toLowerCase(),function(t){var n
do if(n=j?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-")
while((t=t.parentNode)&&1===t.nodeType)
return!1}}),target:function(t){var n=e.location&&e.location.hash
return n&&n.slice(1)===t.id},root:function(e){return e===M},focus:function(e){return e===O.activeElement&&(!O.hasFocus||O.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1
return!0},parent:function(e){return!x.pseudos.empty(e)},header:function(e){return ge.test(e.nodeName)},input:function(e){return me.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase()
return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t
return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[0>n?n+t:n]}),even:l(function(e,t){for(var n=0;t>n;n+=2)e.push(n)
return e}),odd:l(function(e,t){for(var n=1;t>n;n+=2)e.push(n)
return e}),lt:l(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r)
return e}),gt:l(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r)
return e})}},x.pseudos.nth=x.pseudos.eq
for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})x.pseudos[w]=s(w)
for(w in{submit:!0,reset:!0})x.pseudos[w]=u(w)
return f.prototype=x.filters=x.pseudos,x.setFilters=new f,S=t.tokenize=function(e,n){var r,i,o,a,s,u,l,c=B[e+" "]
if(c)return n?0:c.slice(0)
for(s=e,u=[],l=x.preFilter;s;){(!r||(i=le.exec(s)))&&(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,(i=ce.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ue," ")}),s=s.slice(r.length))
for(a in x.filter)!(i=he[a].exec(s))||l[a]&&!(i=l[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length))
if(!r)break}return n?s.length:s?t.error(e):B(e,u).slice(0)},T=t.compile=function(e,t){var n,r=[],i=[],o=W[e+" "]
if(!o){for(t||(t=S(e)),n=t.length;n--;)o=$(t[n]),o[I]?r.push(o):i.push(o)
o=W(e,y(i,r)),o.selector=e}return o},A=t.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,f=!r&&S(e=l.selector||e)
if(n=n||[],1===f.length){if(o=f[0]=f[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&b.getById&&9===t.nodeType&&j&&x.relative[o[1].type]){if(t=(x.find.ID(a.matches[0].replace(be,xe),t)||[])[0],!t)return n
l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=he.needsContext.test(e)?0:o.length;i--&&(a=o[i],!x.relative[s=a.type]);)if((u=x.find[s])&&(r=u(a.matches[0].replace(be,xe),ye.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return Z.apply(n,r),n
break}}return(l||T(e,f))(r,t,!j,n,ye.test(e)&&c(t.parentNode)||t),n},b.sortStable=I.split("").sort(z).join("")===I,b.detectDuplicates=!!D,_(),b.sortDetached=i(function(e){return 1&e.compareDocumentPosition(O.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),b.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var r
return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e)
Q.find=ie,Q.expr=ie.selectors,Q.expr[":"]=Q.expr.pseudos,Q.unique=ie.uniqueSort,Q.text=ie.getText,Q.isXMLDoc=ie.isXML,Q.contains=ie.contains
var oe=Q.expr.match.needsContext,ae=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,se=/^.[^:#\[\.,]*$/
Q.filter=function(e,t,n){var r=t[0]
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?Q.find.matchesSelector(r,e)?[r]:[]:Q.find.matches(e,Q.grep(t,function(e){return 1===e.nodeType}))},Q.fn.extend({find:function(e){var t,n=this.length,r=[],i=this
if("string"!=typeof e)return this.pushStack(Q(e).filter(function(){for(t=0;n>t;t++)if(Q.contains(i[t],this))return!0}))
for(t=0;n>t;t++)Q.find(e,i[t],r)
return r=this.pushStack(n>1?Q.unique(r):r),r.selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&oe.test(e)?Q(e):e||[],!1).length}})
var ue,le=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ce=Q.fn.init=function(e,t){var n,r
if(!e)return this
if("string"==typeof e){if(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:le.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||ue).find(e):this.constructor(t).find(e)
if(n[1]){if(t=t instanceof Q?t[0]:t,Q.merge(this,Q.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:K,!0)),ae.test(n[1])&&Q.isPlainObject(t))for(n in t)Q.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n])
return this}return r=K.getElementById(n[2]),r&&r.parentNode&&(this.length=1,this[0]=r),this.context=K,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):Q.isFunction(e)?void 0!==ue.ready?ue.ready(e):e(Q):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),Q.makeArray(e,this))}
ce.prototype=Q.fn,ue=Q(K)
var fe=/^(?:parents|prev(?:Until|All))/,pe={children:!0,contents:!0,next:!0,prev:!0}
Q.extend({dir:function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&Q(e).is(n))break
r.push(e)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
return n}}),Q.fn.extend({has:function(e){var t=Q(e,this),n=t.length
return this.filter(function(){for(var e=0;n>e;e++)if(Q.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=oe.test(e)||"string"!=typeof e?Q(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&Q.find.matchesSelector(n,e))){o.push(n)
break}return this.pushStack(o.length>1?Q.unique(o):o)},index:function(e){return e?"string"==typeof e?z.call(Q(e),this[0]):z.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(Q.unique(Q.merge(this.get(),Q(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),Q.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return Q.dir(e,"parentNode")},parentsUntil:function(e,t,n){return Q.dir(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return Q.dir(e,"nextSibling")},prevAll:function(e){return Q.dir(e,"previousSibling")},nextUntil:function(e,t,n){return Q.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return Q.dir(e,"previousSibling",n)},siblings:function(e){return Q.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return Q.sibling(e.firstChild)},contents:function(e){return e.contentDocument||Q.merge([],e.childNodes)}},function(e,t){Q.fn[e]=function(n,r){var i=Q.map(this,t,n)
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=Q.filter(r,i)),this.length>1&&(pe[e]||Q.unique(i),fe.test(e)&&i.reverse()),this.pushStack(i)}})
var de=/\S+/g,he={}
Q.Callbacks=function(e){e="string"==typeof e?he[e]||o(e):Q.extend({},e)
var t,n,r,i,a,s,u=[],l=!e.once&&[],c=function(o){for(t=e.memory&&o,n=!0,s=i||0,i=0,a=u.length,r=!0;u&&a>s;s++)if(u[s].apply(o[0],o[1])===!1&&e.stopOnFalse){t=!1
break}r=!1,u&&(l?l.length&&c(l.shift()):t?u=[]:f.disable())},f={add:function(){if(u){var n=u.length
!function o(t){Q.each(t,function(t,n){var r=Q.type(n)
"function"===r?e.unique&&f.has(n)||u.push(n):n&&n.length&&"string"!==r&&o(n)})}(arguments),r?a=u.length:t&&(i=n,c(t))}return this},remove:function(){return u&&Q.each(arguments,function(e,t){for(var n;(n=Q.inArray(t,u,n))>-1;)u.splice(n,1),r&&(a>=n&&a--,s>=n&&s--)}),this},has:function(e){return e?Q.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],a=0,this},disable:function(){return u=l=t=void 0,this},disabled:function(){return!u},lock:function(){return l=void 0,t||f.disable(),this},locked:function(){return!l},fireWith:function(e,t){return!u||n&&!l||(t=t||[],t=[e,t.slice?t.slice():t],r?l.push(t):c(t)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!n}}
return f},Q.extend({Deferred:function(e){var t=[["resolve","done",Q.Callbacks("once memory"),"resolved"],["reject","fail",Q.Callbacks("once memory"),"rejected"],["notify","progress",Q.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments
return Q.Deferred(function(n){Q.each(t,function(t,o){var a=Q.isFunction(e[t])&&e[t]
i[o[1]](function(){var e=a&&a.apply(this,arguments)
e&&Q.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?Q.extend(e,r):r}},i={}
return r.pipe=r.then,Q.each(t,function(e,o){var a=o[2],s=o[3]
r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=U.call(arguments),a=o.length,s=1!==a||e&&Q.isFunction(e.promise)?a:0,u=1===s?e:Q.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?U.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}}
if(a>1)for(t=Array(a),n=Array(a),r=Array(a);a>i;i++)o[i]&&Q.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--s
return s||u.resolveWith(r,o),u.promise()}})
var me
Q.fn.ready=function(e){return Q.ready.promise().done(e),this},Q.extend({isReady:!1,readyWait:1,holdReady:function(e){e?Q.readyWait++:Q.ready(!0)},ready:function(e){(e===!0?--Q.readyWait:Q.isReady)||(Q.isReady=!0,e!==!0&&--Q.readyWait>0||(me.resolveWith(K,[Q]),Q.fn.triggerHandler&&(Q(K).triggerHandler("ready"),Q(K).off("ready"))))}}),Q.ready.promise=function(t){return me||(me=Q.Deferred(),"complete"===K.readyState?setTimeout(Q.ready):(K.addEventListener("DOMContentLoaded",a,!1),e.addEventListener("load",a,!1))),me.promise(t)},Q.ready.promise()
var ge=Q.access=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n
if("object"===Q.type(n)){i=!0
for(s in n)Q.access(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,Q.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(Q(e),n)})),t))for(;u>s;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)))
return i?e:l?t.call(e):u?t(e[0],n):o}
Q.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},s.uid=1,s.accepts=Q.acceptData,s.prototype={key:function(e){if(!s.accepts(e))return 0
var t={},n=e[this.expando]
if(!n){n=s.uid++
try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,Q.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i]
if("string"==typeof t)o[t]=n
else if(Q.isEmptyObject(o))Q.extend(this.cache[i],t)
else for(r in t)o[r]=t[r]
return o},get:function(e,t){var n=this.cache[this.key(e)]
return void 0===t?n:n[t]},access:function(e,t,n){var r
return void 0===t||t&&"string"==typeof t&&void 0===n?(r=this.get(e,t),void 0!==r?r:this.get(e,Q.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),a=this.cache[o]
if(void 0===t)this.cache[o]={}
else{Q.isArray(t)?r=t.concat(t.map(Q.camelCase)):(i=Q.camelCase(t),t in a?r=[t,i]:(r=i,r=r in a?[r]:r.match(de)||[])),n=r.length
for(;n--;)delete a[r[n]]}},hasData:function(e){return!Q.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}}
var ve=new s,$e=new s,ye=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,we=/([A-Z])/g
Q.extend({hasData:function(e){return $e.hasData(e)||ve.hasData(e)},data:function(e,t,n){return $e.access(e,t,n)},removeData:function(e,t){$e.remove(e,t)},_data:function(e,t,n){return ve.access(e,t,n)},_removeData:function(e,t){ve.remove(e,t)}}),Q.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes
if(void 0===e){if(this.length&&(i=$e.get(o),1===o.nodeType&&!ve.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=Q.camelCase(r.slice(5)),u(o,r,i[r])))
ve.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){$e.set(this,e)}):ge(this,function(t){var n,r=Q.camelCase(e)
if(o&&void 0===t){if(n=$e.get(o,e),void 0!==n)return n
if(n=$e.get(o,r),void 0!==n)return n
if(n=u(o,r,void 0),void 0!==n)return n}else this.each(function(){var n=$e.get(this,r)
$e.set(this,r,t),-1!==e.indexOf("-")&&void 0!==n&&$e.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){$e.remove(this,e)})}}),Q.extend({queue:function(e,t,n){var r
return e?(t=(t||"fx")+"queue",r=ve.get(e,t),n&&(!r||Q.isArray(n)?r=ve.access(e,t,Q.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx"
var n=Q.queue(e,t),r=n.length,i=n.shift(),o=Q._queueHooks(e,t),a=function(){Q.dequeue(e,t)}
"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks"
return ve.get(e,n)||ve.access(e,n,{empty:Q.Callbacks("once memory").add(function(){ve.remove(e,[t+"queue",n])})})}}),Q.fn.extend({queue:function(e,t){var n=2
return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?Q.queue(this[0],e):void 0===t?this:this.each(function(){var n=Q.queue(this,e,t)
Q._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&Q.dequeue(this,e)})},dequeue:function(e){return this.each(function(){Q.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=Q.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])}
for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)n=ve.get(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s))
return s(),i.promise(t)}})
var be=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,xe=["Top","Right","Bottom","Left"],Ce=function(e,t){return e=t||e,"none"===Q.css(e,"display")||!Q.contains(e.ownerDocument,e)},ke=/^(?:checkbox|radio)$/i
!function(){var e=K.createDocumentFragment(),t=e.appendChild(K.createElement("div")),n=K.createElement("input")
n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),J.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",J.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}()
var Se="undefined"
J.focusinBubbles="onfocusin"in e
var Te=/^key/,Ae=/^(?:mouse|pointer|contextmenu)|click/,Ee=/^(?:focusinfocus|focusoutblur)$/,Ne=/^([^.]*)(?:\.(.+)|)$/
Q.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,m,g=ve.get(e)
if(g)for(n.handler&&(o=n,n=o.handler,i=o.selector),n.guid||(n.guid=Q.guid++),(u=g.events)||(u=g.events={}),(a=g.handle)||(a=g.handle=function(t){return typeof Q!==Se&&Q.event.triggered!==t.type?Q.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(de)||[""],l=t.length;l--;)s=Ne.exec(t[l])||[],d=m=s[1],h=(s[2]||"").split(".").sort(),d&&(f=Q.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=Q.event.special[d]||{},c=Q.extend({type:d,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&Q.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||(p=u[d]=[],p.delegateCount=0,f.setup&&f.setup.call(e,r,h,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),Q.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,m,g=ve.hasData(e)&&ve.get(e)
if(g&&(u=g.events)){for(t=(t||"").match(de)||[""],l=t.length;l--;)if(s=Ne.exec(t[l])||[],d=m=s[1],h=(s[2]||"").split(".").sort(),d){for(f=Q.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&m!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c))
a&&!p.length&&(f.teardown&&f.teardown.call(e,h,g.handle)!==!1||Q.removeEvent(e,d,g.handle),delete u[d])}else for(d in u)Q.event.remove(e,d+t[l],n,r,!0)
Q.isEmptyObject(u)&&(delete g.handle,ve.remove(e,"events"))}},trigger:function(t,n,r,i){var o,a,s,u,l,c,f,p=[r||K],d=Y.call(t,"type")?t.type:t,h=Y.call(t,"namespace")?t.namespace.split("."):[]
if(a=s=r=r||K,3!==r.nodeType&&8!==r.nodeType&&!Ee.test(d+Q.event.triggered)&&(d.indexOf(".")>=0&&(h=d.split("."),d=h.shift(),h.sort()),l=d.indexOf(":")<0&&"on"+d,t=t[Q.expando]?t:new Q.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:Q.makeArray(n,[t]),f=Q.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!Q.isWindow(r)){for(u=f.delegateType||d,Ee.test(u+d)||(a=a.parentNode);a;a=a.parentNode)p.push(a),s=a
s===(r.ownerDocument||K)&&p.push(s.defaultView||s.parentWindow||e)}for(o=0;(a=p[o++])&&!t.isPropagationStopped();)t.type=o>1?u:f.bindType||d,c=(ve.get(a,"events")||{})[t.type]&&ve.get(a,"handle"),c&&c.apply(a,n),c=l&&a[l],c&&c.apply&&Q.acceptData(a)&&(t.result=c.apply(a,n),t.result===!1&&t.preventDefault())
return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(p.pop(),n)!==!1||!Q.acceptData(r)||l&&Q.isFunction(r[d])&&!Q.isWindow(r)&&(s=r[l],s&&(r[l]=null),Q.event.triggered=d,r[d](),Q.event.triggered=void 0,s&&(r[l]=s)),t.result}},dispatch:function(e){e=Q.event.fix(e)
var t,n,r,i,o,a=[],s=U.call(arguments),u=(ve.get(this,"events")||{})[e.type]||[],l=Q.event.special[e.type]||{}
if(s[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){for(a=Q.event.handlers.call(this,e,u),t=0;(i=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((Q.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))
return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target
if(s&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;s>n;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?Q(i,this).index(u)>=0:Q.find(i,this,null,[u]).length),r[i]&&r.push(o)
r.length&&a.push({elem:u,handlers:r})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button
return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||K,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[Q.expando])return e
var t,n,r,i=e.type,o=e,a=this.fixHooks[i]
for(a||(this.fixHooks[i]=a=Ae.test(i)?this.mouseHooks:Te.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new Q.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n]
return e.target||(e.target=K),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==f()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===f()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&Q.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return Q.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=Q.extend(new Q.Event,n,{type:e,isSimulated:!0,originalEvent:{}})
r?Q.event.trigger(i,null,t):Q.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},Q.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},Q.Event=function(e,t){return this instanceof Q.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?l:c):this.type=e,t&&Q.extend(this,t),this.timeStamp=e&&e.timeStamp||Q.now(),void(this[Q.expando]=!0)):new Q.Event(e,t)},Q.Event.prototype={isDefaultPrevented:c,isPropagationStopped:c,isImmediatePropagationStopped:c,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=l,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=l,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=l,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},Q.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){Q.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj
return(!i||i!==r&&!Q.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),J.focusinBubbles||Q.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){Q.event.simulate(t,e.target,Q.event.fix(e),!0)}
Q.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=ve.access(r,t)
i||r.addEventListener(e,n,!0),ve.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=ve.access(r,t)-1
i?ve.access(r,t,i):(r.removeEventListener(e,n,!0),ve.remove(r,t))}}}),Q.fn.extend({on:function(e,t,n,r,i){var o,a
if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0)
for(a in e)this.on(a,t,n,e[a],i)
return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),r===!1)r=c
else if(!r)return this
return 1===i&&(o=r,r=function(e){return Q().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=Q.guid++)),this.each(function(){Q.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i
if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,Q(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this
if("object"==typeof e){for(i in e)this.off(i,t,e[i])
return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=c),this.each(function(){Q.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){Q.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0]
return n?Q.event.trigger(e,t,n,!0):void 0}})
var De=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,_e=/<([\w:]+)/,Oe=/<|&#?\w+;/,Me=/<(?:script|style|link)/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,Pe=/^$|\/(?:java|ecma)script/i,qe=/^true\/(.*)/,Le=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Re={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]}
Re.optgroup=Re.option,Re.tbody=Re.tfoot=Re.colgroup=Re.caption=Re.thead,Re.th=Re.td,Q.extend({clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=Q.contains(e.ownerDocument,e)
if(!(J.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||Q.isXMLDoc(e)))for(a=v(s),o=v(e),r=0,i=o.length;i>r;r++)$(o[r],a[r])
if(t)if(n)for(o=o||v(e),a=a||v(s),r=0,i=o.length;i>r;r++)g(o[r],a[r])
else g(e,s)
return a=v(s,"script"),a.length>0&&m(a,!u&&v(e,"script")),s},buildFragment:function(e,t,n,r){for(var i,o,a,s,u,l,c=t.createDocumentFragment(),f=[],p=0,d=e.length;d>p;p++)if(i=e[p],i||0===i)if("object"===Q.type(i))Q.merge(f,i.nodeType?[i]:i)
else if(Oe.test(i)){for(o=o||c.appendChild(t.createElement("div")),a=(_e.exec(i)||["",""])[1].toLowerCase(),s=Re[a]||Re._default,o.innerHTML=s[1]+i.replace(De,"<$1></$2>")+s[2],l=s[0];l--;)o=o.lastChild
Q.merge(f,o.childNodes),o=c.firstChild,o.textContent=""}else f.push(t.createTextNode(i))
for(c.textContent="",p=0;i=f[p++];)if((!r||-1===Q.inArray(i,r))&&(u=Q.contains(i.ownerDocument,i),o=v(c.appendChild(i),"script"),u&&m(o),n))for(l=0;i=o[l++];)Pe.test(i.type||"")&&n.push(i)
return c},cleanData:function(e){for(var t,n,r,i,o=Q.event.special,a=0;void 0!==(n=e[a]);a++){if(Q.acceptData(n)&&(i=n[ve.expando],i&&(t=ve.cache[i]))){if(t.events)for(r in t.events)o[r]?Q.event.remove(n,r):Q.removeEvent(n,r,t.handle)
ve.cache[i]&&delete ve.cache[i]}delete $e.cache[n[$e.expando]]}}}),Q.fn.extend({text:function(e){return ge(this,function(e){return void 0===e?Q.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e)
t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e)
t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?Q.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||Q.cleanData(v(n)),n.parentNode&&(t&&Q.contains(n.ownerDocument,n)&&m(v(n,"script")),n.parentNode.removeChild(n))
return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(Q.cleanData(v(e,!1)),e.textContent="")
return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return Q.clone(this,e,t)})},html:function(e){return ge(this,function(e){var t=this[0]||{},n=0,r=this.length
if(void 0===e&&1===t.nodeType)return t.innerHTML
if("string"==typeof e&&!Me.test(e)&&!Re[(_e.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(De,"<$1></$2>")
try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(Q.cleanData(v(t,!1)),t.innerHTML=e)
t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0]
return this.domManip(arguments,function(t){e=this.parentNode,Q.cleanData(v(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=B.apply([],e)
var n,r,i,o,a,s,u=0,l=this.length,c=this,f=l-1,p=e[0],m=Q.isFunction(p)
if(m||l>1&&"string"==typeof p&&!J.checkClone&&je.test(p))return this.each(function(n){var r=c.eq(n)
m&&(e[0]=p.call(this,n,r.html())),r.domManip(e,t)})
if(l&&(n=Q.buildFragment(e,this[0].ownerDocument,!1,this),r=n.firstChild,1===n.childNodes.length&&(n=r),r)){for(i=Q.map(v(n,"script"),d),o=i.length;l>u;u++)a=n,u!==f&&(a=Q.clone(a,!0,!0),o&&Q.merge(i,v(a,"script"))),t.call(this[u],a,u)
if(o)for(s=i[i.length-1].ownerDocument,Q.map(i,h),u=0;o>u;u++)a=i[u],Pe.test(a.type||"")&&!ve.access(a,"globalEval")&&Q.contains(s,a)&&(a.src?Q._evalUrl&&Q._evalUrl(a.src):Q.globalEval(a.textContent.replace(Le,"")))}return this}}),Q.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){Q.fn[e]=function(e){for(var n,r=[],i=Q(e),o=i.length-1,a=0;o>=a;a++)n=a===o?this:this.clone(!0),Q(i[a])[t](n),W.apply(r,n.get())
return this.pushStack(r)}})
var Ie,He={},Fe=/^margin/,Ve=RegExp("^("+be+")(?!px)[a-z%]+$","i"),Ue=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)}
!function(){function t(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",a.innerHTML="",i.appendChild(o)
var t=e.getComputedStyle(a,null)
n="1%"!==t.top,r="4px"===t.width,i.removeChild(o)}var n,r,i=K.documentElement,o=K.createElement("div"),a=K.createElement("div")
a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",J.clearCloneStyle="content-box"===a.style.backgroundClip,o.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",o.appendChild(a),e.getComputedStyle&&Q.extend(J,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==r&&t(),r},reliableMarginRight:function(){var t,n=a.appendChild(K.createElement("div"))
return n.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",a.style.width="1px",i.appendChild(o),t=!parseFloat(e.getComputedStyle(n,null).marginRight),i.removeChild(o),a.removeChild(n),t}}))}(),Q.swap=function(e,t,n,r){var i,o,a={}
for(o in t)a[o]=e.style[o],e.style[o]=t[o]
i=n.apply(e,r||[])
for(o in t)e.style[o]=a[o]
return i}
var Be=/^(none|table(?!-c[ea]).+)/,We=RegExp("^("+be+")(.*)$","i"),ze=RegExp("^([+-])=("+be+")","i"),Ge={position:"absolute",visibility:"hidden",display:"block"},Xe={letterSpacing:"0",fontWeight:"400"},Ye=["Webkit","O","Moz","ms"]
Q.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=b(e,"opacity")
return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=Q.camelCase(t),u=e.style
return t=Q.cssProps[s]||(Q.cssProps[s]=C(u,s)),a=Q.cssHooks[t]||Q.cssHooks[s],void 0===n?a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:u[t]:(o=typeof n,"string"===o&&(i=ze.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(Q.css(e,t)),o="number"),null!=n&&n===n&&("number"!==o||Q.cssNumber[s]||(n+="px"),J.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u[t]=n)),void 0)}},css:function(e,t,n,r){var i,o,a,s=Q.camelCase(t)
return t=Q.cssProps[s]||(Q.cssProps[s]=C(e.style,s)),a=Q.cssHooks[t]||Q.cssHooks[s],a&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=b(e,t,r)),"normal"===i&&t in Xe&&(i=Xe[t]),""===n||n?(o=parseFloat(i),n===!0||Q.isNumeric(o)?o||0:i):i}}),Q.each(["height","width"],function(e,t){Q.cssHooks[t]={get:function(e,n,r){return n?Be.test(Q.css(e,"display"))&&0===e.offsetWidth?Q.swap(e,Ge,function(){return T(e,t,r)}):T(e,t,r):void 0},set:function(e,n,r){var i=r&&Ue(e)
return k(e,n,r?S(e,t,r,"border-box"===Q.css(e,"boxSizing",!1,i),i):0)}}}),Q.cssHooks.marginRight=x(J.reliableMarginRight,function(e,t){return t?Q.swap(e,{display:"inline-block"},b,[e,"marginRight"]):void 0}),Q.each({margin:"",padding:"",border:"Width"},function(e,t){Q.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+xe[r]+t]=o[r]||o[r-2]||o[0]
return i}},Fe.test(e)||(Q.cssHooks[e+t].set=k)}),Q.fn.extend({css:function(e,t){return ge(this,function(e,t,n){var r,i,o={},a=0
if(Q.isArray(t)){for(r=Ue(e),i=t.length;i>a;a++)o[t[a]]=Q.css(e,t[a],!1,r)
return o}return void 0!==n?Q.style(e,t,n):Q.css(e,t)},e,t,arguments.length>1)},show:function(){return A(this,!0)},hide:function(){return A(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Ce(this)?Q(this).show():Q(this).hide()})}}),Q.Tween=E,E.prototype={constructor:E,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(Q.cssNumber[n]?"":"px")},cur:function(){var e=E.propHooks[this.prop]
return e&&e.get?e.get(this):E.propHooks._default.get(this)},run:function(e){var t,n=E.propHooks[this.prop]
return this.options.duration?this.pos=t=Q.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):E.propHooks._default.set(this),this}},E.prototype.init.prototype=E.prototype,E.propHooks={_default:{get:function(e){var t
return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=Q.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){Q.fx.step[e.prop]?Q.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[Q.cssProps[e.prop]]||Q.cssHooks[e.prop])?Q.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},E.propHooks.scrollTop=E.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},Q.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},Q.fx=E.prototype.init,Q.fx.step={}
var Je,Ke,Ze=/^(?:toggle|show|hide)$/,Qe=RegExp("^(?:([+-])=|)("+be+")([a-z%]*)$","i"),et=/queueHooks$/,tt=[O],nt={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Qe.exec(t),o=i&&i[3]||(Q.cssNumber[e]?"":"px"),a=(Q.cssNumber[e]||"px"!==o&&+r)&&Qe.exec(Q.css(n.elem,e)),s=1,u=20
if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1
do s=s||".5",a/=s,Q.style(n.elem,e,a+o)
while(s!==(s=n.cur()/r)&&1!==s&&--u)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]}
Q.Animation=Q.extend(j,{tweener:function(e,t){Q.isFunction(e)?(t=e,e=["*"]):e=e.split(" ")
for(var n,r=0,i=e.length;i>r;r++)n=e[r],nt[n]=nt[n]||[],nt[n].unshift(t)},prefilter:function(e,t){t?tt.unshift(e):tt.push(e)}}),Q.speed=function(e,t,n){var r=e&&"object"==typeof e?Q.extend({},e):{complete:n||!n&&t||Q.isFunction(e)&&e,duration:e,easing:n&&t||t&&!Q.isFunction(t)&&t}
return r.duration=Q.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in Q.fx.speeds?Q.fx.speeds[r.duration]:Q.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){Q.isFunction(r.old)&&r.old.call(this),r.queue&&Q.dequeue(this,r.queue)},r},Q.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Ce).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=Q.isEmptyObject(e),o=Q.speed(t,n,r),a=function(){var t=j(this,Q.extend({},e),o);(i||ve.get(this,"finish"))&&t.stop(!0)}
return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop
delete e.stop,t(n)}
return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=Q.timers,a=ve.get(this)
if(i)a[i]&&a[i].stop&&r(a[i])
else for(i in a)a[i]&&a[i].stop&&et.test(i)&&r(a[i])
for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&Q.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=ve.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=Q.timers,a=r?r.length:0
for(n.finish=!0,Q.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this)
delete n.finish})}}),Q.each(["toggle","show","hide"],function(e,t){var n=Q.fn[t]
Q.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(D(t,!0),e,r,i)}}),Q.each({slideDown:D("show"),slideUp:D("hide"),slideToggle:D("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){Q.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),Q.timers=[],Q.fx.tick=function(){var e,t=0,n=Q.timers
for(Je=Q.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1)
n.length||Q.fx.stop(),Je=void 0},Q.fx.timer=function(e){Q.timers.push(e),e()?Q.fx.start():Q.timers.pop()},Q.fx.interval=13,Q.fx.start=function(){Ke||(Ke=setInterval(Q.fx.tick,Q.fx.interval))},Q.fx.stop=function(){clearInterval(Ke),Ke=null},Q.fx.speeds={slow:600,fast:200,_default:400},Q.fn.delay=function(e,t){return e=Q.fx?Q.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e)
n.stop=function(){clearTimeout(r)}})},function(){var e=K.createElement("input"),t=K.createElement("select"),n=t.appendChild(K.createElement("option"))
e.type="checkbox",J.checkOn=""!==e.value,J.optSelected=n.selected,t.disabled=!0,J.optDisabled=!n.disabled,e=K.createElement("input"),e.value="t",e.type="radio",J.radioValue="t"===e.value}()
var rt,it,ot=Q.expr.attrHandle
Q.fn.extend({attr:function(e,t){return ge(this,Q.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){Q.removeAttr(this,e)})}}),Q.extend({attr:function(e,t,n){var r,i,o=e.nodeType
if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute===Se?Q.prop(e,t,n):(1===o&&Q.isXMLDoc(e)||(t=t.toLowerCase(),r=Q.attrHooks[t]||(Q.expr.match.bool.test(t)?it:rt)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=Q.find.attr(e,t),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void Q.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(de)
if(o&&1===e.nodeType)for(;n=o[i++];)r=Q.propFix[n]||n,Q.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!J.radioValue&&"radio"===t&&Q.nodeName(e,"input")){var n=e.value
return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),it={set:function(e,t,n){return t===!1?Q.removeAttr(e,n):e.setAttribute(n,n),n}},Q.each(Q.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ot[t]||Q.find.attr
ot[t]=function(e,t,r){var i,o
return r||(o=ot[t],ot[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,ot[t]=o),i}})
var at=/^(?:input|select|textarea|button)$/i
Q.fn.extend({prop:function(e,t){return ge(this,Q.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[Q.propFix[e]||e]})}}),Q.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,a=e.nodeType
if(e&&3!==a&&8!==a&&2!==a)return o=1!==a||!Q.isXMLDoc(e),o&&(t=Q.propFix[t]||t,i=Q.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||at.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),J.optSelected||(Q.propHooks.selected={get:function(e){var t=e.parentNode
return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),Q.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){Q.propFix[this.toLowerCase()]=this})
var st=/[\t\r\n\f]/g
Q.fn.extend({addClass:function(e){var t,n,r,i,o,a,s="string"==typeof e&&e,u=0,l=this.length
if(Q.isFunction(e))return this.each(function(t){Q(this).addClass(e.call(this,t,this.className))})
if(s)for(t=(e||"").match(de)||[];l>u;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(st," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ")
a=Q.trim(r),n.className!==a&&(n.className=a)}return this},removeClass:function(e){var t,n,r,i,o,a,s=0===arguments.length||"string"==typeof e&&e,u=0,l=this.length
if(Q.isFunction(e))return this.each(function(t){Q(this).removeClass(e.call(this,t,this.className))})
if(s)for(t=(e||"").match(de)||[];l>u;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(st," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ")
a=e?Q.trim(r):"",n.className!==a&&(n.className=a)}return this},toggleClass:function(e,t){var n=typeof e
return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(Q.isFunction(e)?function(n){Q(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,r=0,i=Q(this),o=e.match(de)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t)
else(n===Se||"boolean"===n)&&(this.className&&ve.set(this,"__className__",this.className),this.className=this.className||e===!1?"":ve.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(st," ").indexOf(t)>=0)return!0
return!1}})
var ut=/\r/g
Q.fn.extend({val:function(e){var t,n,r,i=this[0]
{if(arguments.length)return r=Q.isFunction(e),this.each(function(n){var i
1===this.nodeType&&(i=r?e.call(this,n,Q(this).val()):e,null==i?i="":"number"==typeof i?i+="":Q.isArray(i)&&(i=Q.map(i,function(e){return null==e?"":e+""})),t=Q.valHooks[this.type]||Q.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})
if(i)return t=Q.valHooks[i.type]||Q.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(ut,""):null==n?"":n)}}}),Q.extend({valHooks:{option:{get:function(e){var t=Q.find.attr(e,"value")
return null!=t?t:Q.trim(Q.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(J.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&Q.nodeName(n.parentNode,"optgroup"))){if(t=Q(n).val(),o)return t
a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=Q.makeArray(t),a=i.length;a--;)r=i[a],(r.selected=Q.inArray(r.value,o)>=0)&&(n=!0)
return n||(e.selectedIndex=-1),o}}}}),Q.each(["radio","checkbox"],function(){Q.valHooks[this]={set:function(e,t){return Q.isArray(t)?e.checked=Q.inArray(Q(e).val(),t)>=0:void 0}},J.checkOn||(Q.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),Q.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){Q.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),Q.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}})
var lt=Q.now(),ct=/\?/
Q.parseJSON=function(e){return JSON.parse(e+"")},Q.parseXML=function(e){var t,n
if(!e||"string"!=typeof e)return null
try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&Q.error("Invalid XML: "+e),t}
var ft=/#.*$/,pt=/([?&])_=[^&]*/,dt=/^(.*?):[ \t]*([^\r\n]*)$/gm,ht=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,mt=/^(?:GET|HEAD)$/,gt=/^\/\//,vt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,$t={},yt={},wt="*/".concat("*"),bt=e.location.href,xt=vt.exec(bt.toLowerCase())||[]
Q.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt,type:"GET",isLocal:ht.test(xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":wt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":Q.parseJSON,"text xml":Q.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?L(L(e,Q.ajaxSettings),t):L(Q.ajaxSettings,e)},ajaxPrefilter:P($t),ajaxTransport:P(yt),ajax:function(e,t){function n(e,t,n,a){var u,c,v,$,w,x=t
2!==y&&(y=2,s&&clearTimeout(s),r=void 0,o=a||"",b.readyState=e>0?4:0,u=e>=200&&300>e||304===e,n&&($=R(f,b,n)),$=I(f,$,b,u),u?(f.ifModified&&(w=b.getResponseHeader("Last-Modified"),w&&(Q.lastModified[i]=w),w=b.getResponseHeader("etag"),w&&(Q.etag[i]=w)),204===e||"HEAD"===f.type?x="nocontent":304===e?x="notmodified":(x=$.state,c=$.data,v=$.error,u=!v)):(v=x,(e||!x)&&(x="error",0>e&&(e=0))),b.status=e,b.statusText=(t||x)+"",u?h.resolveWith(p,[c,x,b]):h.rejectWith(p,[b,x,v]),b.statusCode(g),g=void 0,l&&d.trigger(u?"ajaxSuccess":"ajaxError",[b,f,u?c:v]),m.fireWith(p,[b,x]),l&&(d.trigger("ajaxComplete",[b,f]),--Q.active||Q.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{}
var r,i,o,a,s,u,l,c,f=Q.ajaxSetup({},t),p=f.context||f,d=f.context&&(p.nodeType||p.jquery)?Q(p):Q.event,h=Q.Deferred(),m=Q.Callbacks("once memory"),g=f.statusCode||{},v={},$={},y=0,w="canceled",b={readyState:0,getResponseHeader:function(e){var t
if(2===y){if(!a)for(a={};t=dt.exec(o);)a[t[1].toLowerCase()]=t[2]
t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===y?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase()
return y||(e=$[n]=$[n]||e,v[e]=t),this},overrideMimeType:function(e){return y||(f.mimeType=e),this},statusCode:function(e){var t
if(e)if(2>y)for(t in e)g[t]=[g[t],e[t]]
else b.always(e[b.status])
return this},abort:function(e){var t=e||w
return r&&r.abort(t),n(0,t),this}}
if(h.promise(b).complete=m.add,b.success=b.done,b.error=b.fail,f.url=((e||f.url||bt)+"").replace(ft,"").replace(gt,xt[1]+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=Q.trim(f.dataType||"*").toLowerCase().match(de)||[""],null==f.crossDomain&&(u=vt.exec(f.url.toLowerCase()),f.crossDomain=!(!u||u[1]===xt[1]&&u[2]===xt[2]&&(u[3]||("http:"===u[1]?"80":"443"))===(xt[3]||("http:"===xt[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=Q.param(f.data,f.traditional)),q($t,f,t,b),2===y)return b
l=Q.event&&f.global,l&&0===Q.active++&&Q.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!mt.test(f.type),i=f.url,f.hasContent||(f.data&&(i=f.url+=(ct.test(i)?"&":"?")+f.data,delete f.data),f.cache===!1&&(f.url=pt.test(i)?i.replace(pt,"$1_="+lt++):i+(ct.test(i)?"&":"?")+"_="+lt++)),f.ifModified&&(Q.lastModified[i]&&b.setRequestHeader("If-Modified-Since",Q.lastModified[i]),Q.etag[i]&&b.setRequestHeader("If-None-Match",Q.etag[i])),(f.data&&f.hasContent&&f.contentType!==!1||t.contentType)&&b.setRequestHeader("Content-Type",f.contentType),b.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+wt+"; q=0.01":""):f.accepts["*"])
for(c in f.headers)b.setRequestHeader(c,f.headers[c])
if(f.beforeSend&&(f.beforeSend.call(p,b,f)===!1||2===y))return b.abort()
w="abort"
for(c in{success:1,error:1,complete:1})b[c](f[c])
if(r=q(yt,f,t,b)){b.readyState=1,l&&d.trigger("ajaxSend",[b,f]),f.async&&f.timeout>0&&(s=setTimeout(function(){b.abort("timeout")},f.timeout))
try{y=1,r.send(v,n)}catch(x){if(!(2>y))throw x
n(-1,x)}}else n(-1,"No Transport")
return b},getJSON:function(e,t,n){return Q.get(e,t,n,"json")},getScript:function(e,t){return Q.get(e,void 0,t,"script")}}),Q.each(["get","post"],function(e,t){Q[t]=function(e,n,r,i){return Q.isFunction(n)&&(i=i||r,r=n,n=void 0),Q.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),Q._evalUrl=function(e){return Q.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},Q.fn.extend({wrapAll:function(e){var t
return Q.isFunction(e)?this.each(function(t){Q(this).wrapAll(e.call(this,t))}):(this[0]&&(t=Q(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild
return e}).append(this)),this)},wrapInner:function(e){return this.each(Q.isFunction(e)?function(t){Q(this).wrapInner(e.call(this,t))}:function(){var t=Q(this),n=t.contents()
n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=Q.isFunction(e)
return this.each(function(n){Q(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){Q.nodeName(this,"body")||Q(this).replaceWith(this.childNodes)}).end()}}),Q.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},Q.expr.filters.visible=function(e){return!Q.expr.filters.hidden(e)}
var Ct=/%20/g,kt=/\[\]$/,St=/\r?\n/g,Tt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i
Q.param=function(e,t){var n,r=[],i=function(e,t){t=Q.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)}
if(void 0===t&&(t=Q.ajaxSettings&&Q.ajaxSettings.traditional),Q.isArray(e)||e.jquery&&!Q.isPlainObject(e))Q.each(e,function(){i(this.name,this.value)})
else for(n in e)H(n,e[n],t,i)
return r.join("&").replace(Ct,"+")},Q.fn.extend({serialize:function(){return Q.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=Q.prop(this,"elements")
return e?Q.makeArray(e):this}).filter(function(){var e=this.type
return this.name&&!Q(this).is(":disabled")&&At.test(this.nodeName)&&!Tt.test(e)&&(this.checked||!ke.test(e))}).map(function(e,t){var n=Q(this).val()
return null==n?null:Q.isArray(n)?Q.map(n,function(e){return{name:t.name,value:e.replace(St,"\r\n")}}):{name:t.name,value:n.replace(St,"\r\n")}}).get()}}),Q.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}}
var Et=0,Nt={},Dt={0:200,1223:204},_t=Q.ajaxSettings.xhr()
e.attachEvent&&e.attachEvent("onunload",function(){for(var e in Nt)Nt[e]()}),J.cors=!!_t&&"withCredentials"in _t,J.ajax=_t=!!_t,Q.ajaxTransport(function(e){var t
return J.cors||_t&&!e.crossDomain?{send:function(n,r){var i,o=e.xhr(),a=++Et
if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i]
e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest")
for(i in n)o.setRequestHeader(i,n[i])
t=function(e){return function(){t&&(delete Nt[a],t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?r(o.status,o.statusText):r(Dt[o.status]||o.status,o.statusText,"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t("error"),t=Nt[a]=t("abort")
try{o.send(e.hasContent&&e.data||null)}catch(s){if(t)throw s}},abort:function(){t&&t()}}:void 0}),Q.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return Q.globalEval(e),e}}}),Q.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),Q.ajaxTransport("script",function(e){if(e.crossDomain){var t,n
return{send:function(r,i){t=Q("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),K.head.appendChild(t[0])},abort:function(){n&&n()}}}})
var Ot=[],Mt=/(=)\?(?=&|$)|\?\?/
Q.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Ot.pop()||Q.expando+"_"+lt++
return this[e]=!0,e}}),Q.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=t.jsonp!==!1&&(Mt.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Mt.test(t.data)&&"data")
return s||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=Q.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Mt,"$1"+i):t.jsonp!==!1&&(t.url+=(ct.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||Q.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Ot.push(i)),a&&Q.isFunction(o)&&o(a[0]),a=o=void 0}),"script"):void 0}),Q.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null
"boolean"==typeof t&&(n=t,t=!1),t=t||K
var r=ae.exec(e),i=!n&&[]
return r?[t.createElement(r[1])]:(r=Q.buildFragment([e],t,i),i&&i.length&&Q(i).remove(),Q.merge([],r.childNodes))}
var jt=Q.fn.load
Q.fn.load=function(e,t,n){if("string"!=typeof e&&jt)return jt.apply(this,arguments)
var r,i,o,a=this,s=e.indexOf(" ")
return s>=0&&(r=Q.trim(e.slice(s)),e=e.slice(0,s)),Q.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&Q.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?Q("<div>").append(Q.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){a.each(n,o||[e.responseText,t,e])}),this},Q.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){Q.fn[t]=function(e){return this.on(t,e)}}),Q.expr.filters.animated=function(e){return Q.grep(Q.timers,function(t){return e===t.elem}).length}
var Pt=e.document.documentElement
Q.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=Q.css(e,"position"),f=Q(e),p={}
"static"===c&&(e.style.position="relative"),s=f.offset(),o=Q.css(e,"top"),u=Q.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),Q.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},Q.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){Q.offset.setOffset(this,e,t)})
var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument
if(o)return t=o.documentElement,Q.contains(t,r)?(typeof r.getBoundingClientRect!==Se&&(i=r.getBoundingClientRect()),n=F(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0}
return"fixed"===Q.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),Q.nodeName(e[0],"html")||(r=e.offset()),r.top+=Q.css(e[0],"borderTopWidth",!0),r.left+=Q.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-Q.css(n,"marginTop",!0),left:t.left-r.left-Q.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||Pt;e&&!Q.nodeName(e,"html")&&"static"===Q.css(e,"position");)e=e.offsetParent
return e||Pt})}}),Q.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n
Q.fn[t]=function(i){return ge(this,function(t,i,o){var a=F(t)
return void 0===o?a?a[n]:t[i]:void(a?a.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o)},t,i,arguments.length,null)}}),Q.each(["top","left"],function(e,t){Q.cssHooks[t]=x(J.pixelPosition,function(e,n){return n?(n=b(e,t),Ve.test(n)?Q(e).position()[t]+"px":n):void 0})}),Q.each({Height:"height",Width:"width"},function(e,t){Q.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){Q.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(r===!0||i===!0?"margin":"border")
return ge(this,function(t,n,r){var i
return Q.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?Q.css(t,n,a):Q.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),Q.fn.size=function(){return this.length},Q.fn.andSelf=Q.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return Q})
var qt=e.jQuery,Lt=e.$
return Q.noConflict=function(t){return e.$===Q&&(e.$=Lt),t&&e.jQuery===Q&&(e.jQuery=qt),Q},typeof t===Se&&(e.jQuery=e.$=Q),Q})
var urlApi="http://api.slidecard.ovh/v1",urlCdn="http://cdn.slidecard.ovh",slideController=angular.module("slideController",[]),user_lat=0,user_lng=0,errorGeo,slideApp=angular.module("slideApp",["ngRoute","ngCookies","slideController","file-model","mp.colorPicker"])
slideApp.config(["$routeProvider","$httpProvider",function(e,t){e.when("/login",{templateUrl:"html/login.html",controller:"loginController",controllerAs:"login"}).when("/logout",{templateUrl:"html/logout.html",controller:"logoutController",controllerAs:"logout"}).when("/account",{templateUrl:"html/account.html",controller:"accountController",controllerAs:"account"}).when("/account/update",{templateUrl:"html/accountUpdate.html",controller:"accountUpdateController",controllerAs:"accountUpdate"}).when("/account/settings",{templateUrl:"html/settings.html",controller:"accountUpdateController",controllerAs:"accountUpdate"}).when("/register",{templateUrl:"html/register.html",controller:"registerController",controllerAs:"register"}).when("/template",{templateUrl:"html/templateList.html",controller:"templateListController",controllerAs:"templateList"}).when("/templateCreate",{templateUrl:"html/templateCreate.html",controller:"templateCreateController",controllerAs:"templateCreate"}).when("/template/delete/:id",{templateUrl:"html/templateDelete.html",controller:"templateDeleteController",controllerAs:"templateDelete"}).when("/cardList",{templateUrl:"html/cardList.html",controller:"cardListController",controllerAs:"cardList"}).when("/cardCreate",{templateUrl:"html/cardCreate.html",controller:"cardCreateController",controllerAs:"cardCreate"}).when("/card/delete/:id",{templateUrl:"html/cardDelete.html",controller:"cardDeleteController",controllerAs:"cardDelete"}).when("/card/:id",{templateUrl:"html/cardDetail.html",controller:"cardDetailController",controllerAs:"cardDetail"}).when("/card/update/:id",{templateUrl:"html/cardUpdate.html",controller:"cardUpdateController",controllerAs:"cardUpdate"}).when("/collection",{templateUrl:"html/collectionList.html",controller:"collectionListController",controllerAs:"collectionList"}).when("/collection/delete/:id",{templateUrl:"html/collectionDelete.html",controller:"collectionDeleteController",controllerAs:"collectionDelete"}).when("/contactList",{templateUrl:"html/contactList.html",controller:"contactListController",controllerAs:"contactList"}).when("/collectionMapCard",{templateUrl:"html/collectionMapCard.html",controller:"collectionMapCardController",controllerAs:"collectionMapCard"}).when("/welcome",{templateUrl:"html/welcome.html",controller:"welcomeController",controllerAs:"welcome"}).when("/application",{templateUrl:"html/applications.html",controller:"welcomeController",controllerAs:"welcome"}).when("/reportbug",{templateUrl:"html/reportBug.html",controller:"reportbugControllerController",controllerAs:"reportbug"}).otherwise({redirectTo:"/welcome"}),delete t.defaults.headers.common["X-Requested-With"]}]),slideApp.controller("contentController",["$cookies","$scope","$location",function(e,t,n){function r(e){if(user_lat=e.coords.latitude,user_lng=e.coords.longitude,$("#geolocinfo").css("display","initial"),"/account"==n.path()){var t=new google.maps.LatLng(user_lat,user_lng),r={center:t,mapTypeId:google.maps.MapTypeId.ROADMAP,zoom:15,disableDefaultUI:!0},i=new google.maps.Map(document.getElementById("map"),r),o=new google.maps.LatLng(user_lat,user_lng)
new google.maps.Marker({position:o,map:i,title:"You are here"})
i.panTo(o)}}function i(e){switch(e.code){case e.TIMEOUT:errorGeo="Geolocation: Timeout"
break
case e.PERMISSION_DENIED:errorGeo="Geolocation: Permission denied"
break
case e.POSITION_UNAVAILABLE:errorGeo="Geolocation: Position unavailable"
break
case e.UNKNOWN_ERROR:errorGeo="Geolocation: Unknown error"}$("#geolocinfo").css("display","none")}var o=this
if(o.panel={login:!1,register:!1},o.getPanel=function(e){return this.panel.login&&"login"==e?!0:this.panel.register&&"register"==e?!0:!1},o.setPanel=function(e){"login"==e&&(o.panel.login=!0,o.panel.register=!1),"register"==e&&(o.panel.login=!1,o.panel.register=!0),console.log("set: "+e)},o.isPage=function(e){for(var t=0;t<e.length;t++)if(e[t]==n.path())return!0
return!1},t.isLog=function(){return""==e.usr_token||void 0==e.usr_token?0:1},navigator.geolocation){navigator.geolocation.watchPosition(r,i,{maximumAge:6e5})}}]),slideController.controller("loginController",["$scope","$http","$cookies","$location",function(e,t,n){e.error="",e.auth=function(){t.post(urlApi+"/auth",{email:e.email,password:e.password}).success(function(e){n.usr_token=e.data.token,n.logged=!0,window.location.assign("192.168.59.103"==window.location.hostname?"http://"+window.location.hostname+":"+window.location.port+"/#/cardList":"http://"+window.location.hostname+"/#/cardList"),window.location.reload()}).error(function(t){e.error=t.message})}}]),slideController.controller("logoutController",["$scope","$http","$cookies","$location",function(e,t,n,r){e.error="",""!=n.usr_token&&void 0!=n.usr_token&&(t.get(urlApi+"/logout?token="+n.usr_token).success(function(){n.usr_token="",r.path("/welcome")}).error(function(t,n){e.error=n+" / "+t.message}),n.usr_token=void 0,r.path("/welcome"))}]),slideController.controller("accountController",["$scope","$http","$cookies","$location",function(e,t,n,r){n.usr_token?(e.error="",e.cdn=urlCdn,t.get(urlApi+"/account?token="+n.usr_token).success(function(t){e.firstname=t.data.firstname,e.lastname=t.data.lastname,e.email=t.data.email,e.avatar=t.data.avatar,e.lastLogin=t.data.last_login,e.card_hash=t.data.card_hash,e.id=t.data.id,e.accept_news=t.data.accept_news,e.accept_notif=t.data.accept_notif,n.user_id=e.id}).error(function(t,n){e.error=n+" / "+t.message})):r.path("/login")}]),slideController.controller("welcomeController",["$scope","$http","$cookies","$location",function(e,t,n){e.newsletter=function(){t.post(urlApi+"/newsletter?token="+n.usr_token,{email:e.email}).success(function(){}).error(function(t){e.error=t.message})},e.error="",void 0==n.logged&&0==n.logged,void 0!=n.usr_token&&""!=n.usr_token&&t.get(urlApi+"/account?token="+n.usr_token).success(function(t){e.firstname=t.data.firstname,e.lastname=t.data.lastname,e.avatar=t.data.avatar,n.user_id=e.id,e.cdn=urlCdn}).error(function(t){e.error=t.message})}]),slideController.controller("registerController",["$scope","$http","$cookies","$location",function(e,t,n,r){e.error="",e.reg=function(){t.post(urlApi+"/register",{email:e.email,password:e.password,firstname:e.firstname,lastname:e.lastname}).success(function(e){n.usr_token=e.data.token,r.path("/welcome")}).error(function(){e.error="Register Failed"})}}]),slideController.controller("cardCreateController",["$scope","$http","$cookies","$location",function(e,t,n,r){n.usr_token?(e.error="",e.cdn=urlCdn,e.indexTEmplate=0,t.get(urlApi+"/template?token="+n.usr_token).success(function(t){e.templates=t.data,(void 0==e.templates||""==e.templates)&&r.path("/templateCreate")}).error(function(t){e.error=t.message}),e.getIndexTemplate=function(t){for(var n=0,r=e.templates.length;r>n;)e.templates[n].id==t&&(e.indexTEmplate=n),n++},t.get(urlApi+"/fonts?token="+n.usr_token).success(function(t){e.fonts=t.data}).error(function(t){e.error=t.message}),e.create=function(){void 0==e.type&&(e.type=0),e.color=e.color.substring(1,7),void 0==e.id_template&&(e.id_template=e.templates[0].id),t.post(urlApi+"/card/create?token="+n.usr_token,{organization:e.organization,job:e.job,location:e.location,email:e.email,phone:e.phone,slogan:e.slogan,color:e.color,font:e.id_font,template:e.id_template,type:e.type}).success(function(){r.path("/cardList")}).error(function(t){e.error=t.message})}):r.path("/login")}]),slideController.controller("cardListController",["$scope","$http","$cookies","$location",function(e,t,n,r){n.usr_token?(e.error="",e.success="",e.cardToSend="",e.cdn=urlCdn,t.get(urlApi+"/cards?token="+n.usr_token).success(function(t){e.result=t.data}).error(function(t){e.error=t.message}),e.selectCard=function(t){e.cardToSend=t},e.sendCard=function(){return e.error="",e.success="",void 0==e.cardToSend?(console.log("Mo Card Selected"),void(e.error="No Card Selected")):(console.log("sending: "+e.cardToSend),console.log("user_lat "+user_lat),console.log("user_lng "+user_lng),void t.post(urlApi+"/share?token="+n.usr_token,{card_hash:e.userToShare,hash_code:e.cardToSend,lat:user_lat,lng:user_lng}).success(function(){e.success="Share Sucess"}).error(function(t){e.error=t.message}))}):r.path("/login")}]),slideController.controller("accountUpdateController",["$scope","$http","$cookies","$location",function(e,t,n,r){n.usr_token?(e.error="",e.cdn=urlCdn,t.get(urlApi+"/account?token="+n.usr_token).success(function(t){e.firstname=t.data.firstname,e.lastname=t.data.lastname,e.email=t.data.email,e.avatar=t.data.avatar,e.lastLogin=t.data.last_login,e.card_hash=t.data.card_hash,e.id=t.data.id,e.accept_news=t.data.accept_news,e.accept_notif=t.data.accept_notif}).error(function(t){e.error=t.message}),e.update=function(){if(e.error="",e.update_password==e.retype_password){var i=new FormData
void 0!=e.update_url_avatar&&""!=e.update_url_avatar&&(e.update_url_avatar.size>=2097152?e.error="File must be < to 2 Mo":"image/png"!=e.update_url_avatar.type&&"image/jpeg"!=e.update_url_avatar.type&&"image/gif"!=e.update_url_avatar.type?e.error="File must be:  .png  /  .jpeg  /  .gif":i.append("avatar",e.update_url_avatar)),void 0!=e.email&&i.append("email",e.email),void 0!=e.update_firstname&&i.append("firstname",e.update_firstname),void 0!=e.update_lastname&&i.append("lastname",e.update_lastname),void 0!=e.update_password&&""!=e.update_password&&i.append("password",e.update_password),void 0==e.update_accept_news&&(1==e.accept_news?e.update_accept_news=1:e.update_accept_news=0),void 0==e.update_accept_notif&&(1==e.accept_notif?e.update_accept_notif=1:e.update_accept_notif=0),i.append("newsletters",e.update_accept_news),i.append("notifications",e.update_accept_notif),""==e.error&&t.post(urlApi+"/account/update?token="+n.usr_token,i,{headers:{"Content-Type":void 0},transformRequest:angular.identity}).success(function(){r.path("/account")}).error(function(t){e.error=t.message})}else e.error="Passwords doesn't matchs, try again"}):r.path("/login")}]),slideController.controller("cardUpdateController",["$scope","$http","$cookies","$location","$routeParams",function(e,t,n,r,i){n.usr_token?(e.error="",e.cdn=urlCdn,t.get(urlApi+"/template?token="+n.usr_token).success(function(r){e.templates=r.data,t.get(urlApi+"/card/"+i.id+"?token="+n.usr_token).success(function(t){e.card=t.data,e.getIndexTemplate(e.card.id_template)}).error(function(t){e.error=t.message})}).error(function(t){e.error=t.message}),e.getIndexTemplate=function(t){for(var n=0,r=e.templates.length;r>n;)e.templates[n].id==t&&(e.indexTemplate=n),n++},t.get(urlApi+"/fonts?token="+n.usr_token).success(function(t){e.fonts=t.data}).error(function(t){e.error=t.message}),e.update=function(){void 0==e.color?e.color=e.card.color:e.color=e.color.substring(1,7),void 0==e.type&&(e.type=e.card.type),void 0==e.id_template&&(e.id_template=e.card.template.id),void 0==e.id_font&&(e.id_font=e.card.id_font),t.post(urlApi+"/card/update/"+i.id+"?token="+n.usr_token,{organization:e.organization,job:e.job,location:e.location,email:e.email,phone:e.phone,slogan:e.slogan,color:e.color,id_font:e.id_font,id_template:e.id_template,type:e.type}).success(function(){r.path("/cardList")}).error(function(t){e.error=t.message})}):r.path("/login")}]),slideController.controller("templateListController",["$scope","$http","$cookies","$location",function(e,t,n,r){n.usr_token?(e.error="",e.cdn=urlCdn,t.get(urlApi+"/template?token="+n.usr_token).success(function(t){e.result=t.data}).error(function(t){e.error=t.message})):r.path("/login")}]),slideController.controller("templateCreateController",["$scope","$http","$cookies","$location",function(e,t,n,r){n.usr_token?(e.error="",e.token=n.usr_token,e.type,e.url="http://api.slidecard.ovh/v1/template/create?token="+n.usr_token,e.create=function(){var i=new FormData
void 0==e.type&&(e.type=0),i.append("name",e.name),i.append("type",e.type),i.append("background",e.background),i.append("price",0),e.background.size>=2097152?e.error="File must be < to 2 Mo":"image/png"!=e.background.type&&"image/jpeg"!=e.background.type&&"image/gif"!=e.background.type?e.error="File must be:  .png  /  .jpeg  /  .gif":t.post(urlApi+"/template/create?token="+n.usr_token,i,{headers:{"Content-Type":void 0},transformRequest:angular.identity}).success(function(){e.error="Success",r.path("/template")}).error(function(t){e.error=t.message})}):r.path("/login")}]),slideController.controller("templateDeleteController",["$scope","$http","$cookies","$location","$routeParams",function(e,t,n,r,i){n.usr_token?(e.error="",e.cdn=urlCdn,t.get(urlApi+"/template/"+i.id+"?token="+n.usr_token).success(function(t){e.result=t.data.template,console.log(e.result)}).error(function(t){e.error=t.message}),e["delete"]=function(){t.get(urlApi+"/template/delete/"+i.id+"?token="+n.usr_token).success(function(){r.path("/template")}).error(function(t){e.error=t.message})}):r.path("/login")}]),slideController.controller("cardDeleteController",["$scope","$http","$cookies","$location","$routeParams",function(e,t,n,r,i){n.usr_token?(e.error="",e["delete"]=function(){t.get(urlApi+"/card/delete/"+i.id+"?token="+n.usr_token).success(function(t){e.templates=t,r.path("/cardList")}).error(function(t){e.error=t.message})}):r.path("/login")}]),slideController.controller("collectionListController",["$scope","$http","$cookies","$location",function(e,t,n,r){n.usr_token?(e.error="",e.cdn=urlCdn,t.get(urlApi+"/collection?token="+n.usr_token).success(function(t){e.result=t.data}).error(function(t){e.error=t.message}),e.mapcard=function(e,t){r.path("/collectionMapCard").search({lat:e,lng:t})}):r.path("/login")}]),slideController.controller("collectionDeleteController",["$scope","$http","$cookies","$location","$routeParams",function(e,t,n,r,i){n.usr_token?(e.error="",e["delete"]=function(){t.get(urlApi+"/collection/delete/"+i.id+"?token="+n.usr_token).success(function(){r.path("/collection")}).error(function(t){e.error=t.message})}):r.path("/login")}]),slideController.controller("contactListController",["$scope","$http","$cookies","$location",function(e,t,n,r){n.usr_token?(e.error="",e.cdn=urlCdn,e.userSelect=0,t.get(urlApi+"/collection?token="+n.usr_token).success(function(t){e.result=t.data,e.removeDeplucate=function(){var t=[]
return e.result.forEach(function(e){var n=!0
t.forEach(function(t){e.owner.id==t.owner.id&&(n=!1)}),n&&(e.htmlSelected=!1,t.push(e))}),t}
var n=e.removeDeplucate(e.result)
e.newObj=n}).error(function(t){e.error=t.message}),e.choseIt=function(t){e.userSelect=t,console.log(e.userSelect)}):r.path("/login")}]),slideController.controller("collectionMapCardController",["$cookies","$location",function(e,t){$("body").removeClass("bgblue")
e.usr_token||t.path("/login")
var n=new google.maps.LatLng(t.search().lat,t.search().lng),r={center:n,mapTypeId:google.maps.MapTypeId.ROADMAP,zoom:15,disableDefaultUI:!0},i=new google.maps.Map(document.getElementById("map"),r)
new google.maps.Marker({position:n,map:i,title:"You got this card here"})
i.panTo(n)}]),$(function(){$(".header-navbar ul.dropped").hover(function(){$(".header-navbar li.dropdown a").addClass("opened").removeClass("active")},function(){$(".header-navbar li.dropdown a").removeClass("opened").addClass("active")}),$(".header-navbar nav > ul > li:not(.dropdown) > a").click(function(){$(".header-navbar a").removeClass("active"),$(this).addClass("active")}),$(".header-navbar a.brand-title").click(function(){$(".header-navbar a").removeClass("active")})})
