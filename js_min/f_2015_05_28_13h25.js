var urlApi,urlCdn,slideController,user_lat,user_lng,errorGeo,slideApp
!function(e,t,n){"use strict"
function r(e,t){return t=t||Error,function(){var n,r,i=arguments[0],o="["+(e?e+":":"")+i+"] ",a=arguments[1],s=arguments
for(n=o+a.replace(/\{\d+\}/g,function(e){var t=+e.slice(1,-1)
return t+2<s.length?pe(s[t+2]):e}),n=n+"\nhttp://errors.angularjs.org/1.3.15/"+(e?e+"/":"")+i,r=2;r<arguments.length;r++)n=n+(2==r?"?":"&")+"p"+(r-2)+"="+encodeURIComponent(pe(arguments[r]))
return new t(n)}}function i(e){if(null==e||S(e))return!1
var t=e.length
return e.nodeType===pr&&t?!0:w(e)||ir(e)||0===t||"number"==typeof t&&t>0&&t-1 in e}function o(e,t,n){var r,a,s
if(e)if(C(e))for(r in e)"prototype"==r||"length"==r||"name"==r||e.hasOwnProperty&&!e.hasOwnProperty(r)||t.call(n,e[r],r,e)
else if(ir(e)||i(e))for(s="object"!=typeof e,r=0,a=e.length;a>r;r++)(s||r in e)&&t.call(n,e[r],r,e)
else if(e.forEach&&e.forEach!==o)e.forEach(t,n,e)
else for(r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r,e)
return e}function a(e){return Object.keys(e).sort()}function s(e,t,n){var r,i=a(e)
for(r=0;r<i.length;r++)t.call(n,e[i[r]],i[r])
return i}function u(e){return function(t,n){e(n,t)}}function l(){return++rr}function c(e,t){t?e.$$hashKey=t:delete e.$$hashKey}function f(e){var t,n,r,i,o,a,s,u=e.$$hashKey
for(t=1,n=arguments.length;n>t;t++)if(r=arguments[t])for(i=Object.keys(r),o=0,a=i.length;a>o;o++)s=i[o],e[s]=r[s]
return c(e,u),e}function p(e){return parseInt(e,10)}function d(e,t){return f(Object.create(e),t)}function h(){}function m(e){return e}function g(e){return function(){return e}}function $(e){return n===e}function v(e){return n!==e}function y(e){return null!==e&&"object"==typeof e}function w(e){return"string"==typeof e}function b(e){return"number"==typeof e}function x(e){return"[object Date]"===Qn.call(e)}function C(e){return"function"==typeof e}function k(e){return"[object RegExp]"===Qn.call(e)}function S(e){return e&&e.window===e}function T(e){return e&&e.$evalAsync&&e.$watch}function A(e){return"[object File]"===Qn.call(e)}function E(e){return"[object FormData]"===Qn.call(e)}function N(e){return"[object Blob]"===Qn.call(e)}function _(e){return"boolean"==typeof e}function D(e){return e&&C(e.then)}function O(e){return!(!e||!(e.nodeName||e.prop&&e.attr&&e.find))}function M(e){var t,n={},r=e.split(",")
for(t=0;t<r.length;t++)n[r[t]]=!0
return n}function j(e){return Vo(e.nodeName||e[0]&&e[0].nodeName)}function P(e,t){var n=e.indexOf(t)
return n>=0&&e.splice(n,1),t}function q(e,t,n,r){var i,a,s,u,l,f
if(S(e)||T(e))throw er("cpws","Can't copy! Making copies of Window or Scope instances is not supported.")
if(t){if(e===t)throw er("cpi","Can't copy! Source and destination are identical.")
if(n=n||[],r=r||[],y(e)){if(a=n.indexOf(e),-1!==a)return r[a]
n.push(e),r.push(t)}if(ir(e))for(t.length=0,u=0;u<e.length;u++)s=q(e[u],null,n,r),y(e[u])&&(n.push(e[u]),r.push(s)),t.push(s)
else{l=t.$$hashKey,ir(t)?t.length=0:o(t,function(e,n){delete t[n]})
for(f in e)e.hasOwnProperty(f)&&(s=q(e[f],null,n,r),y(e[f])&&(n.push(e[f]),r.push(s)),t[f]=s)
c(t,l)}}else t=e,e&&(ir(e)?t=q(e,[],n,r):x(e)?t=new Date(e.getTime()):k(e)?(t=RegExp(e.source,(""+e).match(/[^\/]*$/)[0]),t.lastIndex=e.lastIndex):y(e)&&(i=Object.create(Object.getPrototypeOf(e)),t=q(e,i,n,r)))
return t}function L(e,t){var n,r,i
if(ir(e))for(t=t||[],n=0,r=e.length;r>n;n++)t[n]=e[n]
else if(y(e)){t=t||{}
for(i in e)("$"!==i.charAt(0)||"$"!==i.charAt(1))&&(t[i]=e[i])}return t||e}function R(e,t){if(e===t)return!0
if(null===e||null===t)return!1
if(e!==e&&t!==t)return!0
var r,i,o,a=typeof e,s=typeof t
if(a==s&&"object"==a){if(!ir(e)){if(x(e))return x(t)?R(e.getTime(),t.getTime()):!1
if(k(e))return k(t)?""+e==""+t:!1
if(T(e)||T(t)||S(e)||S(t)||ir(t)||x(t)||k(t))return!1
o={}
for(i in e)if("$"!==i.charAt(0)&&!C(e[i])){if(!R(e[i],t[i]))return!1
o[i]=!0}for(i in t)if(!o.hasOwnProperty(i)&&"$"!==i.charAt(0)&&t[i]!==n&&!C(t[i]))return!1
return!0}if(!ir(t))return!1
if((r=e.length)==t.length){for(i=0;r>i;i++)if(!R(e[i],t[i]))return!1
return!0}}return!1}function I(e,t,n){return e.concat(Jn.call(t,n))}function H(e,t){return Jn.call(e,t||0)}function F(e,t){var n=arguments.length>2?H(arguments,2):[]
return!C(t)||t instanceof RegExp?t:n.length?function(){return arguments.length?t.apply(e,I(n,arguments,0)):t.apply(e,n)}:function(){return arguments.length?t.apply(e,arguments):t.call(e)}}function V(e,r){var i=r
return"string"==typeof e&&"$"===e.charAt(0)&&"$"===e.charAt(1)?i=n:S(r)?i="$WINDOW":r&&t===r?i="$DOCUMENT":T(r)&&(i="$SCOPE"),i}function U(e,t){return n===e?n:(b(t)||(t=t?2:null),JSON.stringify(e,V,t))}function B(e){return w(e)?JSON.parse(e):e}function W(e){e=Xn(e).clone()
try{e.empty()}catch(t){}var n=Xn("<div>").append(e).html()
try{return e[0].nodeType===dr?Vo(n):n.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(e,t){return"<"+Vo(t)})}catch(t){return Vo(n)}}function z(e){try{return decodeURIComponent(e)}catch(t){}}function G(e){var t,n,r={}
return o((e||"").split("&"),function(e){if(e&&(t=e.replace(/\+/g,"%20").split("="),n=z(t[0]),v(n))){var i=v(t[1])?z(t[1]):!0
Uo.call(r,n)?ir(r[n])?r[n].push(i):r[n]=[r[n],i]:r[n]=i}}),r}function X(e){var t=[]
return o(e,function(e,n){ir(e)?o(e,function(e){t.push(J(n,!0)+(e===!0?"":"="+J(e,!0)))}):t.push(J(n,!0)+(e===!0?"":"="+J(e,!0)))}),t.length?t.join("&"):""}function Y(e){return J(e,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function J(e,t){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,t?"%20":"+")}function K(e,t){var n,r,i=ur.length
for(e=Xn(e),r=0;i>r;++r)if(n=ur[r]+t,w(n=e.attr(n)))return n
return null}function Z(e,t){var n,r,i={}
o(ur,function(t){var i=t+"app"
!n&&e.hasAttribute&&e.hasAttribute(i)&&(n=e,r=e.getAttribute(i))}),o(ur,function(t){var i,o=t+"app"
!n&&(i=e.querySelector("["+o.replace(":","\\:")+"]"))&&(n=i,r=i.getAttribute(o))}),n&&(i.strictDi=null!==K(n,"strict-di"),t(n,r?[r]:[],i))}function Q(r,i,a){var s,u,l,c
return y(a)||(a={}),s={strictDi:!1},a=f(s,a),u=function(){var e,n
if(r=Xn(r),r.injector())throw e=r[0]===t?"document":W(r),er("btstrpd","App Already Bootstrapped with this Element '{0}'",e.replace(/</,"&lt;").replace(/>/,"&gt;"))
return i=i||[],i.unshift(["$provide",function(e){e.value("$rootElement",r)}]),a.debugInfoEnabled&&i.push(["$compileProvider",function(e){e.debugInfoEnabled(!0)}]),i.unshift("ng"),n=Be(i,a.strictDi),n.invoke(["$rootScope","$rootElement","$compile","$injector",function(e,t,n,r){e.$apply(function(){t.data("$injector",r),n(t)(e)})}]),n},l=/^NG_ENABLE_DEBUG_INFO!/,c=/^NG_DEFER_BOOTSTRAP!/,e&&l.test(e.name)&&(a.debugInfoEnabled=!0,e.name=e.name.replace(l,"")),e&&!c.test(e.name)?u():(e.name=e.name.replace(c,""),tr.resumeBootstrap=function(e){return o(e,function(e){i.push(e)}),u()},C(tr.resumeDeferredBootstrap)&&tr.resumeDeferredBootstrap(),n)}function ee(){e.name="NG_ENABLE_DEBUG_INFO!"+e.name,e.location.reload()}function te(e){var t=tr.element(e).injector()
if(!t)throw er("test","no injector found for element argument to getTestability")
return t.get("$$testability")}function ne(e,t){return t=t||"_",e.replace(lr,function(e,n){return(n?t:"")+e.toLowerCase()})}function re(){var t
cr||(Yn=e.jQuery,Yn&&Yn.fn.on?(Xn=Yn,f(Yn.fn,{scope:Dr.scope,isolateScope:Dr.isolateScope,controller:Dr.controller,injector:Dr.injector,inheritedData:Dr.inheritedData}),t=Yn.cleanData,Yn.cleanData=function(e){var n,r,i
if(fr)fr=!1
else for(r=0;null!=(i=e[r]);r++)n=Yn._data(i,"events"),n&&n.$destroy&&Yn(i).triggerHandler("$destroy")
t(e)}):Xn=we,tr.element=Xn,cr=!0)}function ie(e,t,n){if(!e)throw er("areq","Argument '{0}' is {1}",t||"?",n||"required")
return e}function oe(e,t,n){return n&&ir(e)&&(e=e[e.length-1]),ie(C(e),t,"not a function, got "+(e&&"object"==typeof e?e.constructor.name||"Object":typeof e)),e}function ae(e,t){if("hasOwnProperty"===e)throw er("badname","hasOwnProperty is not a valid {0} name",t)}function se(e,t,n){var r,i,o,a,s
if(!t)return e
for(r=t.split("."),o=e,a=r.length,s=0;a>s;s++)i=r[s],e&&(e=(o=e)[i])
return!n&&C(e)?F(o,e):e}function ue(e){var t=e[0],n=e[e.length-1],r=[t]
do{if(t=t.nextSibling,!t)break
r.push(t)}while(t!==n)
return Xn(r)}function le(){return Object.create(null)}function ce(e){function t(e,t,n){return e[t]||(e[t]=n())}var n=r("$injector"),i=r("ng"),o=t(e,"angular",Object)
return o.$$minErr=o.$$minErr||r,t(o,"module",function(){var e={}
return function(r,o,a){var s=function(e,t){if("hasOwnProperty"===e)throw i("badname","hasOwnProperty is not a valid {0} name",t)}
return s(r,"module"),o&&e.hasOwnProperty(r)&&(e[r]=null),t(e,r,function(){function e(e,n,r,i){return i||(i=t),function(){return i[r||"push"]([e,n,arguments]),l}}var t,i,s,u,l
if(!o)throw n("nomod","Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",r)
return t=[],i=[],s=[],u=e("$injector","invoke","push",i),l={_invokeQueue:t,_configBlocks:i,_runBlocks:s,requires:o,name:r,provider:e("$provide","provider"),factory:e("$provide","factory"),service:e("$provide","service"),value:e("$provide","value"),constant:e("$provide","constant","unshift"),animation:e("$animateProvider","register"),filter:e("$filterProvider","register"),controller:e("$controllerProvider","register"),directive:e("$compileProvider","directive"),config:u,run:function(e){return s.push(e),this}},a&&u(a),l})}})}function fe(e){var t=[]
return JSON.stringify(e,function(e,n){if(n=V(e,n),y(n)){if(t.indexOf(n)>=0)return"<<already seen>>"
t.push(n)}return n})}function pe(e){return"function"==typeof e?(""+e).replace(/ \{[\s\S]*$/,""):n===e?"undefined":"string"!=typeof e?fe(e):e}function de(t){f(t,{bootstrap:Q,copy:q,extend:f,equals:R,element:Xn,forEach:o,injector:Be,noop:h,bind:F,toJson:U,fromJson:B,identity:m,isUndefined:$,isDefined:v,isString:w,isFunction:C,isObject:y,isNumber:b,isElement:O,isArray:ir,version:$r,isDate:x,lowercase:Vo,uppercase:Bo,callbacks:{counter:0},getTestability:te,$$minErr:r,$$csp:sr,reloadWithDebugInfo:ee}),nr=ce(e)
try{nr("ngLocale")}catch(n){nr("ngLocale",[]).provider("$locale",gt)}nr("ng",["ngLocale"],["$provide",function(e){e.provider({$$sanitizeUri:Xt}),e.provider("$compile",Ke).directive({a:Ci,input:Hi,textarea:Hi,form:Ei,script:_o,select:Mo,style:Po,option:jo,ngBind:Ui,ngBindHtml:Wi,ngBindTemplate:Bi,ngClass:Gi,ngClassEven:Yi,ngClassOdd:Xi,ngCloak:Ji,ngController:Ki,ngForm:Ni,ngHide:ko,ngIf:eo,ngInclude:to,ngInit:ro,ngNonBindable:vo,ngPluralize:yo,ngRepeat:wo,ngShow:Co,ngStyle:So,ngSwitch:To,ngSwitchWhen:Ao,ngSwitchDefault:Eo,ngOptions:Oo,ngTransclude:No,ngModel:mo,ngList:io,ngChange:zi,pattern:Lo,ngPattern:Lo,required:qo,ngRequired:qo,minlength:Io,ngMinlength:Io,maxlength:Ro,ngMaxlength:Ro,ngValue:Vi,ngModelOptions:$o}).directive({ngInclude:no}).directive(ki).directive(Zi),e.provider({$anchorScroll:We,$animate:Fr,$browser:Xe,$cacheFactory:Ye,$controller:tt,$document:nt,$exceptionHandler:rt,$filter:sn,$interpolate:ht,$interval:mt,$http:ct,$httpBackend:pt,$location:_t,$log:Dt,$parse:Vt,$rootScope:Gt,$q:Ut,$$q:Bt,$sce:Zt,$sceDelegate:Kt,$sniffer:Qt,$templateCache:Je,$templateRequest:en,$$testability:tn,$timeout:nn,$window:an,$$rAF:zt,$$asyncCallback:ze,$$jqLite:Ie})}])}function he(){return++yr}function me(e){return e.replace(xr,function(e,t,n,r){return r?n.toUpperCase():n}).replace(Cr,"Moz$1")}function ge(e){return!Ar.test(e)}function $e(e){var t=e.nodeType
return t===pr||!t||t===mr}function ve(e,t){var n,r,i,a,s=t.createDocumentFragment(),u=[]
if(ge(e))u.push(t.createTextNode(e))
else{for(n=n||s.appendChild(t.createElement("div")),r=(Er.exec(e)||["",""])[1].toLowerCase(),i=_r[r]||_r._default,n.innerHTML=i[1]+e.replace(Nr,"<$1></$2>")+i[2],a=i[0];a--;)n=n.lastChild
u=I(u,n.childNodes),n=s.firstChild,n.textContent=""}return s.textContent="",s.innerHTML="",o(u,function(e){s.appendChild(e)}),s}function ye(e,n){n=n||t
var r
return(r=Tr.exec(e))?[n.createElement(r[1])]:(r=ve(e,n))?r.childNodes:[]}function we(e){if(e instanceof we)return e
var t
if(w(e)&&(e=or(e),t=!0),!(this instanceof we)){if(t&&"<"!=e.charAt(0))throw Sr("nosel","Looking up elements via selectors is not supported by jqLite! See: http://docs.angularjs.org/api/angular.element")
return new we(e)}t?_e(this,ye(e)):_e(this,e)}function be(e){return e.cloneNode(!0)}function xe(e,t){var n,r,i
if(t||ke(e),e.querySelectorAll)for(n=e.querySelectorAll("*"),r=0,i=n.length;i>r;r++)ke(n[r])}function Ce(e,t,n,r){var i,a,s
if(v(r))throw Sr("offargs","jqLite#off() does not support the `selector` argument")
if(i=Se(e),a=i&&i.events,s=i&&i.handle)if(t)o(t.split(" "),function(t){if(v(n)){var r=a[t]
if(P(r||[],n),r&&r.length>0)return}br(e,t,s),delete a[t]})
else for(t in a)"$destroy"!==t&&br(e,t,s),delete a[t]}function ke(e,t){var r=e.ng339,i=r&&vr[r]
if(i){if(t)return delete i.data[t],n
i.handle&&(i.events.$destroy&&i.handle({},"$destroy"),Ce(e)),delete vr[r],e.ng339=n}}function Se(e,t){var r=e.ng339,i=r&&vr[r]
return t&&!i&&(e.ng339=r=he(),i=vr[r]={events:{},data:{},handle:n}),i}function Te(e,t,n){var r,i,o,a,s
if($e(e))if(r=v(n),i=!r&&t&&!y(t),o=!t,a=Se(e,!i),s=a&&a.data,r)s[t]=n
else{if(o)return s
if(i)return s&&s[t]
f(s,t)}}function Ae(e,t){return e.getAttribute?(" "+(e.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+t+" ")>-1:!1}function Ee(e,t){t&&e.setAttribute&&o(t.split(" "),function(t){e.setAttribute("class",or((" "+(e.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+or(t)+" "," ")))})}function Ne(e,t){if(t&&e.setAttribute){var n=(" "+(e.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ")
o(t.split(" "),function(e){e=or(e),-1===n.indexOf(" "+e+" ")&&(n+=e+" ")}),e.setAttribute("class",or(n))}}function _e(e,t){var n,r
if(t)if(t.nodeType)e[e.length++]=t
else if(n=t.length,"number"==typeof n&&t.window!==t){if(n)for(r=0;n>r;r++)e[e.length++]=t[r]}else e[e.length++]=t}function De(e,t){return Oe(e,"$"+(t||"ngController")+"Controller")}function Oe(e,t,r){var i,o,a
for(e.nodeType==mr&&(e=e.documentElement),i=ir(t)?t:[t];e;){for(o=0,a=i.length;a>o;o++)if((r=Xn.data(e,i[o]))!==n)return r
e=e.parentNode||e.nodeType===gr&&e.host}}function Me(e){for(xe(e,!0);e.firstChild;)e.removeChild(e.firstChild)}function je(e,t){t||xe(e)
var n=e.parentNode
n&&n.removeChild(e)}function Pe(t,n){n=n||e,"complete"===n.document.readyState?n.setTimeout(t):Xn(n).on("load",t)}function qe(e,t){var n=Or[t.toLowerCase()]
return n&&Mr[j(e)]&&n}function Le(e,t){var n=e.nodeName
return("INPUT"===n||"TEXTAREA"===n)&&jr[t]}function Re(e,t){var n=function(n,r){var i,o,a,s
if(n.isDefaultPrevented=function(){return n.defaultPrevented},i=t[r||n.type],o=i?i.length:0)for($(n.immediatePropagationStopped)&&(a=n.stopImmediatePropagation,n.stopImmediatePropagation=function(){n.immediatePropagationStopped=!0,n.stopPropagation&&n.stopPropagation(),a&&a.call(n)}),n.isImmediatePropagationStopped=function(){return n.immediatePropagationStopped===!0},o>1&&(i=L(i)),s=0;o>s;s++)n.isImmediatePropagationStopped()||i[s].call(e,n)}
return n.elem=e,n}function Ie(){this.$get=function(){return f(we,{hasClass:function(e,t){return e.attr&&(e=e[0]),Ae(e,t)},addClass:function(e,t){return e.attr&&(e=e[0]),Ne(e,t)},removeClass:function(e,t){return e.attr&&(e=e[0]),Ee(e,t)}})}}function He(e,t){var n,r=e&&e.$$hashKey
return r?("function"==typeof r&&(r=e.$$hashKey()),r):(n=typeof e,r="function"==n||"object"==n&&null!==e?e.$$hashKey=n+":"+(t||l)():n+":"+e)}function Fe(e,t){if(t){var n=0
this.nextUid=function(){return++n}}o(e,this.put,this)}function Ve(e){var t=(""+e).replace(Rr,""),n=t.match(Pr)
return n?"function("+(n[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function Ue(e,t,n){var r,i,a,s
if("function"==typeof e){if(!(r=e.$inject)){if(r=[],e.length){if(t)throw w(n)&&n||(n=e.name||Ve(e)),Ir("strictdi","{0} is not using explicit annotation and cannot be invoked in strict mode",n)
i=(""+e).replace(Rr,""),a=i.match(Pr),o(a[1].split(qr),function(e){e.replace(Lr,function(e,t,n){r.push(n)})})}e.$inject=r}}else ir(e)?(s=e.length-1,oe(e[s],"fn"),r=e.slice(0,s)):oe(e,"fn",!0)
return r}function Be(e,t){function r(e){return function(t,r){return y(t)?(o(t,u(e)),n):e(t,r)}}function i(e,t){if(ae(e,"service"),(C(t)||ir(t))&&(t=T.instantiate(t)),!t.$get)throw Ir("pget","Provider '{0}' must define $get factory method.",e)
return S[e+b]=t}function a(e,t){return function(){var n=E.invoke(t,this)
if($(n))throw Ir("undef","Provider '{0}' must return a value from $get factory method.",e)
return n}}function s(e,t,n){return i(e,{$get:n!==!1?a(e,t):t})}function l(e,t){return s(e,["$injector",function(e){return e.instantiate(t)}])}function c(e,t){return s(e,g(t),!1)}function f(e,t){ae(e,"constant"),S[e]=t,A[e]=t}function p(e,t){var n=T.get(e+b),r=n.$get
n.$get=function(){var e=E.invoke(r,n)
return E.invoke(t,null,{$delegate:e})}}function d(e){var t,n=[]
return o(e,function(e){function r(e){var t,n,r,i
for(t=0,n=e.length;n>t;t++)r=e[t],i=T.get(r[0]),i[r[1]].apply(i,r[2])}if(!k.get(e)){k.put(e,!0)
try{w(e)?(t=nr(e),n=n.concat(d(t.requires)).concat(t._runBlocks),r(t._invokeQueue),r(t._configBlocks)):C(e)?n.push(T.invoke(e)):ir(e)?n.push(T.invoke(e)):oe(e,"module")}catch(i){throw ir(e)&&(e=e[e.length-1]),i.message&&i.stack&&-1==i.stack.indexOf(i.message)&&(i=i.message+"\n"+i.stack),Ir("modulerr","Failed to instantiate module {0} due to:\n{1}",e,i.stack||i.message||i)}}}),n}function m(e,n){function r(t,r){if(e.hasOwnProperty(t)){if(e[t]===v)throw Ir("cdep","Circular dependency found: {0}",t+" <- "+x.join(" <- "))
return e[t]}try{return x.unshift(t),e[t]=v,e[t]=n(t,r)}catch(i){throw e[t]===v&&delete e[t],i}finally{x.shift()}}function i(e,n,i,o){"string"==typeof i&&(o=i,i=null)
var a,s,u,l=[],c=Be.$$annotate(e,t,o)
for(s=0,a=c.length;a>s;s++){if(u=c[s],"string"!=typeof u)throw Ir("itkn","Incorrect injection token! Expected service name as string, got {0}",u)
l.push(i&&i.hasOwnProperty(u)?i[u]:r(u,o))}return ir(e)&&(e=e[a]),e.apply(n,l)}function o(e,t,n){var r=Object.create((ir(e)?e[e.length-1]:e).prototype||null),o=i(e,r,t,n)
return y(o)||C(o)?o:r}return{invoke:i,instantiate:o,get:r,annotate:Be.$$annotate,has:function(t){return S.hasOwnProperty(t+b)||e.hasOwnProperty(t)}}}t=t===!0
var v={},b="Provider",x=[],k=new Fe([],!0),S={$provide:{provider:r(i),factory:r(s),service:r(l),value:r(c),constant:r(f),decorator:p}},T=S.$injector=m(S,function(e,t){throw tr.isString(t)&&x.push(t),Ir("unpr","Unknown provider: {0}",x.join(" <- "))}),A={},E=A.$injector=m(A,function(e,t){var r=T.get(e+b,t)
return E.invoke(r.$get,r,n,e)})
return o(d(e),function(e){E.invoke(e||h)}),E}function We(){var e=!0
this.disableAutoScrolling=function(){e=!1},this.$get=["$window","$location","$rootScope",function(t,r,i){function o(e){var t=null
return Array.prototype.some.call(e,function(e){return"a"===j(e)?(t=e,!0):n}),t}function a(){var e,n,r=u.yOffset
return C(r)?r=r():O(r)?(e=r[0],n=t.getComputedStyle(e),r="fixed"!==n.position?0:e.getBoundingClientRect().bottom):b(r)||(r=0),r}function s(e){var n,r
e?(e.scrollIntoView(),n=a(),n&&(r=e.getBoundingClientRect().top,t.scrollBy(0,r-n))):t.scrollTo(0,0)}function u(){var e,t=r.hash()
t?(e=l.getElementById(t))?s(e):(e=o(l.getElementsByName(t)))?s(e):"top"===t&&s(null):s(null)}var l=t.document
return e&&i.$watch(function(){return r.hash()},function(e,t){(e!==t||""!==e)&&Pe(function(){i.$evalAsync(u)})}),u}]}function ze(){this.$get=["$$rAF","$timeout",function(e,t){return e.supported?function(t){return e(t)}:function(e){return t(e,0,!1)}}]}function Ge(e,t,r,i){function a(e){try{e.apply(null,H(arguments,1))}finally{if(m--,0===m)for(;g.length;)try{g.pop()()}catch(t){r.error(t)}}}function s(e){var t=e.indexOf("#")
return-1===t?"":e.substr(t+1)}function u(e,t){!function n(){o(v,function(e){e()}),y=t(n,e)}()}function l(){f(),p()}function c(){try{return P.state}catch(e){}}function f(){b=c(),b=$(b)?null:b,R(b,E)&&(b=E),E=b}function p(){(C!==O.url()||x!==b)&&(C=O.url(),x=b,o(T,function(e){e(O.url(),b)}))}function d(e){try{return decodeURIComponent(e)}catch(t){return e}}var m,g,v,y,b,x,C,k,S,T,A,E,N,_,D,O=this,M=t[0],j=e.location,P=e.history,q=e.setTimeout,L=e.clearTimeout,I={}
O.isMock=!1,m=0,g=[],O.$$completeOutstandingRequest=a,O.$$incOutstandingRequestCount=function(){m++},O.notifyWhenNoOutstandingRequests=function(e){o(v,function(e){e()}),0===m?e():g.push(e)},v=[],O.addPollFn=function(e){return $(y)&&u(100,q),v.push(e),e},C=j.href,k=t.find("base"),S=null,f(),x=b,O.url=function(t,n,r){var o,a
return $(r)&&(r=null),j!==e.location&&(j=e.location),P!==e.history&&(P=e.history),t?(o=x===r,C!==t||i.history&&!o?(a=C&&bt(C)===bt(t),C=t,x=r,!i.history||a&&o?(a||(S=t),n?j.replace(t):a?j.hash=s(t):j.href=t):(P[n?"replaceState":"pushState"](r,"",t),f(),x=b),O):O):S||j.href.replace(/%27/g,"'")},O.state=function(){return b},T=[],A=!1,E=null,O.onUrlChange=function(t){return A||(i.history&&Xn(e).on("popstate",l),Xn(e).on("hashchange",l),A=!0),T.push(t),t},O.$$checkUrlChange=p,O.baseHref=function(){var e=k.attr("href")
return e?e.replace(/^(https?\:)?\/\/[^\/]*/,""):""},N={},_="",D=O.baseHref(),O.cookies=function(e,t){var i,o,a,s,u
if(!e){if(M.cookie!==_)for(_=M.cookie,o=_.split("; "),N={},s=0;s<o.length;s++)a=o[s],u=a.indexOf("="),u>0&&(e=d(a.substring(0,u)),N[e]===n&&(N[e]=d(a.substring(u+1))))
return N}t===n?M.cookie=encodeURIComponent(e)+"=;path="+D+";expires=Thu, 01 Jan 1970 00:00:00 GMT":w(t)&&(i=(M.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+";path="+D).length+1,i>4096&&r.warn("Cookie '"+e+"' possibly not set or overflowed because it was too large ("+i+" > 4096 bytes)!"))},O.defer=function(e,t){var n
return m++,n=q(function(){delete I[n],a(e)},t||0),I[n]=!0,n},O.defer.cancel=function(e){return I[e]?(delete I[e],L(e),a(h),!0):!1}}function Xe(){this.$get=["$window","$log","$sniffer","$document",function(e,t,n,r){return new Ge(e,r,t,n)}]}function Ye(){this.$get=function(){function e(e,n){function i(e){e!=p&&(d?d==e&&(d=e.n):d=e,o(e.n,e.p),o(e,p),p=e,p.n=null)}function o(e,t){e!=t&&(e&&(e.p=t),t&&(t.n=e))}if(e in t)throw r("$cacheFactory")("iid","CacheId '{0}' is already taken!",e)
var a=0,s=f({},n,{id:e}),u={},l=n&&n.capacity||Number.MAX_VALUE,c={},p=null,d=null
return t[e]={put:function(e,t){if(l<Number.MAX_VALUE){var n=c[e]||(c[e]={key:e})
i(n)}if(!$(t))return e in u||a++,u[e]=t,a>l&&this.remove(d.key),t},get:function(e){if(l<Number.MAX_VALUE){var t=c[e]
if(!t)return
i(t)}return u[e]},remove:function(e){if(l<Number.MAX_VALUE){var t=c[e]
if(!t)return
t==p&&(p=t.p),t==d&&(d=t.n),o(t.n,t.p),delete c[e]}delete u[e],a--},removeAll:function(){u={},a=0,c={},p=d=null},destroy:function(){u=null,s=null,c=null,delete t[e]},info:function(){return f({},s,{size:a})}}}var t={}
return e.info=function(){var e={}
return o(t,function(t,n){e[n]=t.info()}),e},e.get=function(e){return t[e]},e}}function Je(){this.$get=["$cacheFactory",function(e){return e("templates")}]}function Ke(e,r){function i(e,t){var n=/^\s*([@&]|=(\*?))(\??)\s*(\w*)\s*$/,r={}
return o(e,function(e,i){var o=e.match(n)
if(!o)throw Vr("iscp","Invalid isolate scope definition for directive '{0}'. Definition: {... {1}: '{2}' ...}",t,i,e)
r[i]={mode:o[1][0],collection:"*"===o[2],optional:"?"===o[3],attrName:o[4]||i}}),r}var a,s={},l="Directive",c=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,p=/(([\w\-]+)(?:\:([^;]+))?;?)/,$=M("ngSrc,ngSrcset,src,srcset"),b=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,x=/^(on[a-z]+|formaction)$/
this.directive=function k(t,n){return ae(t,"directive"),w(t)?(ie(n,"directiveFactory"),s.hasOwnProperty(t)||(s[t]=[],e.factory(t+l,["$injector","$exceptionHandler",function(e,n){var r=[]
return o(s[t],function(o,a){try{var s=e.invoke(o)
C(s)?s={compile:g(s)}:!s.compile&&s.link&&(s.compile=g(s.link)),s.priority=s.priority||0,s.index=a,s.name=s.name||t,s.require=s.require||s.controller&&s.name,s.restrict=s.restrict||"EA",y(s.scope)&&(s.$$isolateBindings=i(s.scope,s.name)),r.push(s)}catch(u){n(u)}}),r}])),s[t].push(n)):o(t,u(k)),this},this.aHrefSanitizationWhitelist=function(e){return v(e)?(r.aHrefSanitizationWhitelist(e),this):r.aHrefSanitizationWhitelist()},this.imgSrcSanitizationWhitelist=function(e){return v(e)?(r.imgSrcSanitizationWhitelist(e),this):r.imgSrcSanitizationWhitelist()},a=!0,this.debugInfoEnabled=function(e){return v(e)?(a=e,this):a},this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(e,r,i,u,g,v,k,S,A,E,N){function _(e,t){try{e.addClass(t)}catch(n){}}function D(e,t,n,r,i){var a,s
return e instanceof Xn||(e=Xn(e)),o(e,function(t,n){t.nodeType==dr&&t.nodeValue.match(/\S+/)&&(e[n]=Xn(t).wrap("<span></span>").parent()[0])}),a=M(e,t,e,n,r,i),D.$$addScopeClass(e),s=null,function(t,n,r){var i,o,u,l,c
if(ie(t,"scope"),r=r||{},i=r.parentBoundTranscludeFn,o=r.transcludeControllers,u=r.futureParentElement,i&&i.$$boundTransclude&&(i=i.$$boundTransclude),s||(s=O(u)),l="html"!==s?Xn(Z(s,Xn("<div>").append(e).html())):n?Dr.clone.call(e):e,o)for(c in o)l.data("$"+c+"Controller",o[c].instance)
return D.$$addScopeInfo(l,t),n&&n(l,t),a&&a(t,l,l,i),l}}function O(e){var t=e&&e[0]
return t&&"foreignobject"!==j(t)&&(""+t).match(/SVG/)?"svg":"html"}function M(e,t,r,i,o,a){function s(e,r,i,o){var a,s,u,l,c,f,p,d,m,$
if(h)for($=r.length,m=Array($),c=0;c<g.length;c+=3)p=g[c],m[p]=r[p]
else m=r
for(c=0,f=g.length;f>c;)u=m[g[c++]],a=g[c++],s=g[c++],a?(a.scope?(l=e.$new(),D.$$addScopeInfo(Xn(u),l)):l=e,d=a.transcludeOnThisElement?q(e,a.transclude,o,a.elementTranscludeOnThisElement):!a.templateOnThisElement&&o?o:!o&&t?q(e,t):null,a(s,l,u,i,d)):s&&s(e,u.childNodes,n,o)}var u,l,c,f,p,d,h,m,g=[]
for(m=0;m<e.length;m++)u=new fe,l=L(e[m],[],u,0===m?i:n,o),c=l.length?V(l,e[m],u,t,r,null,[],[],a):null,c&&c.scope&&D.$$addScopeClass(u.$$element),p=c&&c.terminal||!(f=e[m].childNodes)||!f.length?null:M(f,c?(c.transcludeOnThisElement||!c.templateOnThisElement)&&c.transclude:t),(c||p)&&(g.push(m,c,p),d=!0,h=h||c),a=null
return d?s:null}function q(e,t,n){var r=function(r,i,o,a,s){return r||(r=e.$new(!1,s),r.$$transcluded=!0),t(r,i,{parentBoundTranscludeFn:n,transcludeControllers:o,futureParentElement:a})}
return r}function L(e,t,n,r,i){var o,a,s,u,l,f,d,h,m,g,$,v,b,x,C=e.nodeType,k=n.$attr
switch(C){case pr:for(B(t,Ze(j(e)),"E",r,i),m=e.attributes,g=0,$=m&&m.length;$>g;g++)v=!1,b=!1,s=m[g],u=s.name,d=or(s.value),f=Ze(u),(h=ce.test(f))&&(u=u.replace(Ur,"").substr(8).replace(/_(.)/g,function(e,t){return t.toUpperCase()})),x=f.replace(/(Start|End)$/,""),z(x)&&f===x+"Start"&&(v=u,b=u.substr(0,u.length-5)+"end",u=u.substr(0,u.length-6)),l=Ze(u.toLowerCase()),k[l]=u,(h||!n.hasOwnProperty(l))&&(n[l]=d,qe(e,l)&&(n[l]=!0)),ee(e,t,d,l,h),B(t,l,"A",r,i,v,b)
if(a=e.className,y(a)&&(a=a.animVal),w(a)&&""!==a)for(;o=p.exec(a);)l=Ze(o[2]),B(t,l,"C",r,i)&&(n[l]=or(o[3])),a=a.substr(o.index+o[0].length)
break
case dr:K(t,e.nodeValue)
break
case hr:try{o=c.exec(e.nodeValue),o&&(l=Ze(o[1]),B(t,l,"M",r,i)&&(n[l]=or(o[2])))}catch(S){}}return t.sort(Y),t}function I(e,t,n){var r=[],i=0
if(t&&e.hasAttribute&&e.hasAttribute(t)){do{if(!e)throw Vr("uterdir","Unterminated attribute, found '{0}' but no matching '{1}' found.",t,n)
e.nodeType==pr&&(e.hasAttribute(t)&&i++,e.hasAttribute(n)&&i--),r.push(e),e=e.nextSibling}while(i>0)}else r.push(e)
return Xn(r)}function F(e,t,n){return function(r,i,o,a,s){return i=I(i[0],t,n),e(r,i,o,a,s)}}function V(e,a,s,u,l,c,f,p,d){function h(e,t,n,r){e&&(n&&(e=F(e,n,r)),e.require=q.require,e.directiveName=V,(E===q||q.$$isolateScope)&&(e=re(e,{isolateScope:!0})),f.push(e)),t&&(n&&(t=F(t,n,r)),t.require=q.require,t.directiveName=V,(E===q||q.$$isolateScope)&&(t=re(t,{isolateScope:!0})),p.push(t))}function m(e,t,n,r){var i,a,s="data",u=!1,l=n
if(w(t)){if(a=t.match(b),t=t.substring(a[0].length),a[3]&&(a[1]?a[3]=null:a[1]=a[3]),"^"===a[1]?s="inheritedData":"^^"===a[1]&&(s="inheritedData",l=n.parent()),"?"===a[2]&&(u=!0),i=null,r&&"data"===s&&(i=r[t])&&(i=i.instance),i=i||l[s]("$"+t+"Controller"),!i&&!u)throw Vr("ctreq","Controller '{0}', required by directive '{1}', can't be found!",t,e)
return i||null}return ir(t)&&(i=[],o(t,function(t){i.push(m(e,t,n,r))})),i}function $(e,t,i,u,l){function c(e,t,r){var i
return T(e)||(r=t,t=e,e=n),j&&(i=b),r||(r=j?C.parent():C),l(e,t,i,r,M)}var d,h,$,y,w,b,x,C,k,_,O,M
for(a===i?(k=s,C=s.$$element):(C=Xn(i),k=new fe(C,s)),E&&(w=t.$new(!0)),l&&(x=c,x.$$boundTransclude=l),S&&(A={},b={},o(S,function(e){var n,r={$scope:e===E||e.$$isolateScope?w:t,$element:C,$attrs:k,$transclude:x}
y=e.controller,"@"==y&&(y=k[e.name]),n=v(y,r,!0,e.controllerAs),b[e.name]=n,j||C.data("$"+e.name+"Controller",n.instance),A[e.name]=n})),E&&(D.$$addScopeInfo(C,w,!0,!(N&&(N===E||N===E.$$originalDirective))),D.$$addScopeClass(C,!0),_=A&&A[E.name],O=w,_&&_.identifier&&E.bindToController===!0&&(O=_.instance),o(w.$$isolateBindings=E.$$isolateBindings,function(e,n){var i,o,a,s,u,l,c=e.attrName,f=e.optional,p=e.mode
switch(p){case"@":k.$observe(c,function(e){O[n]=e}),k.$$observers[c].$$scope=t,k[c]&&(O[n]=r(k[c])(t))
break
case"=":if(f&&!k[c])return
o=g(k[c]),s=o.literal?R:function(e,t){return e===t||e!==e&&t!==t},a=o.assign||function(){throw i=O[n]=o(t),Vr("nonassign","Expression '{0}' used with directive '{1}' is non-assignable!",k[c],E.name)},i=O[n]=o(t),u=function(e){return s(e,O[n])||(s(e,i)?a(t,e=O[n]):O[n]=e),i=e},u.$stateful=!0,l=e.collection?t.$watchCollection(k[c],u):t.$watch(g(k[c],u),null,o.literal),w.$on("$destroy",l)
break
case"&":o=g(k[c]),O[n]=function(e){return o(t,e)}}})),A&&(o(A,function(e){e()}),A=null),d=0,h=f.length;h>d;d++)$=f[d],oe($,$.isolateScope?w:t,C,k,$.require&&m($.directiveName,$.require,C,b),x)
for(M=t,E&&(E.template||null===E.templateUrl)&&(M=w),e&&e(M,i.childNodes,n,l),d=p.length-1;d>=0;d--)$=p[d],oe($,$.isolateScope?w:t,C,k,$.require&&m($.directiveName,$.require,C,b),x)}var x,k,S,A,E,N,_,O,M,j,P,q,V,B,z,Y,K,Q,ee,ne,ie,ae,se,le,ce
for(d=d||{},x=-Number.MAX_VALUE,S=d.controllerDirectives,E=d.newIsolateScopeDirective,N=d.templateDirective,_=d.nonTlbTranscludeDirective,O=!1,M=!1,j=d.hasElementTranscludeDirective,P=s.$$element=Xn(a),z=c,Y=u,ee=0,ne=e.length;ne>ee&&(q=e[ee],ie=q.$$start,ae=q.$$end,ie&&(P=I(a,ie,ae)),B=n,!(x>q.priority));ee++){if((Q=q.scope)&&(q.templateUrl||(y(Q)?(J("new/isolated scope",E||k,q,P),E=q):J("new/isolated scope",E,q,P)),k=k||q),V=q.name,!q.templateUrl&&q.controller&&(Q=q.controller,S=S||{},J("'"+V+"' controller",S[V],q,P),S[V]=q),(Q=q.transclude)&&(O=!0,q.$$tlb||(J("transclusion",_,q,P),_=q),"element"==Q?(j=!0,x=q.priority,B=P,P=s.$$element=Xn(t.createComment(" "+V+": "+s[V]+" ")),a=P[0],te(l,H(B),a),Y=D(B,u,x,z&&z.name,{nonTlbTranscludeDirective:_})):(B=Xn(be(a)).contents(),P.empty(),Y=D(B,u))),q.template)if(M=!0,J("template",N,q,P),N=q,Q=C(q.template)?q.template(P,s):q.template,Q=ue(Q),q.replace){if(z=q,B=ge(Q)?[]:et(Z(q.templateNamespace,or(Q))),a=B[0],1!=B.length||a.nodeType!==pr)throw Vr("tplrt","Template for directive '{0}' must have exactly one root element. {1}",V,"")
te(l,P,a),se={$attr:{}},le=L(a,[],se),ce=e.splice(ee+1,e.length-(ee+1)),E&&U(le),e=e.concat(le).concat(ce),G(s,se),ne=e.length}else P.html(Q)
if(q.templateUrl)M=!0,J("template",N,q,P),N=q,q.replace&&(z=q),$=X(e.splice(ee,e.length-ee),P,s,l,O&&Y,f,p,{controllerDirectives:S,newIsolateScopeDirective:E,templateDirective:N,nonTlbTranscludeDirective:_}),ne=e.length
else if(q.compile)try{K=q.compile(P,s,Y),C(K)?h(null,K,ie,ae):K&&h(K.pre,K.post,ie,ae)}catch(pe){i(pe,W(P))}q.terminal&&($.terminal=!0,x=Math.max(x,q.priority))}return $.scope=k&&k.scope===!0,$.transcludeOnThisElement=O,$.elementTranscludeOnThisElement=j,$.templateOnThisElement=M,$.transclude=Y,d.hasElementTranscludeDirective=j,$}function U(e){for(var t=0,n=e.length;n>t;t++)e[t]=d(e[t],{$$isolateScope:!0})}function B(t,r,o,a,u,c,f){var p,h,m,g,$
if(r===u)return null
if(p=null,s.hasOwnProperty(r))for(m=e.get(r+l),g=0,$=m.length;$>g;g++)try{h=m[g],(a===n||a>h.priority)&&-1!=h.restrict.indexOf(o)&&(c&&(h=d(h,{$$start:c,$$end:f})),t.push(h),p=h)}catch(v){i(v)}return p}function z(t){if(s.hasOwnProperty(t))for(var n,r=e.get(t+l),i=0,o=r.length;o>i;i++)if(n=r[i],n.multiElement)return!0
return!1}function G(e,t){var n=t.$attr,r=e.$attr,i=e.$$element
o(e,function(r,i){"$"!=i.charAt(0)&&(t[i]&&t[i]!==r&&(r+=("style"===i?";":" ")+t[i]),e.$set(i,r,!0,n[i]))}),o(t,function(t,o){"class"==o?(_(i,t),e["class"]=(e["class"]?e["class"]+" ":"")+t):"style"==o?(i.attr("style",i.attr("style")+";"+t),e.style=(e.style?e.style+";":"")+t):"$"==o.charAt(0)||e.hasOwnProperty(o)||(e[o]=t,r[o]=n[o])})}function X(e,t,n,r,i,a,s,l){var c,f,p=[],h=t[0],m=e.shift(),g=d(m,{templateUrl:null,transclude:null,replace:null,$$originalDirective:m}),$=C(m.templateUrl)?m.templateUrl(t,n):m.templateUrl,v=m.templateNamespace
return t.empty(),u(A.getTrustedResourceUrl($)).then(function(u){var d,w,b,x,C,k,S,T,A,E,N
if(u=ue(u),m.replace){if(b=ge(u)?[]:et(Z(v,or(u))),d=b[0],1!=b.length||d.nodeType!==pr)throw Vr("tplrt","Template for directive '{0}' must have exactly one root element. {1}",m.name,$)
w={$attr:{}},te(r,t,d),C=L(d,[],w),y(m.scope)&&U(C),e=C.concat(e),G(n,w)}else d=h,t.html(u)
for(e.unshift(g),c=V(e,d,n,i,t,m,a,s,l),o(r,function(e,n){e==d&&(r[n]=t[0])}),f=M(t[0].childNodes,i);p.length;)k=p.shift(),S=p.shift(),T=p.shift(),A=p.shift(),E=t[0],k.$$destroyed||(S!==h&&(N=S.className,l.hasElementTranscludeDirective&&m.replace||(E=be(d)),te(T,Xn(S),E),_(Xn(E),N)),x=c.transcludeOnThisElement?q(k,c.transclude,A):A,c(f,k,E,r,x))
p=null}),function(e,t,n,r,i){var o=i
t.$$destroyed||(p?p.push(t,n,r,o):(c.transcludeOnThisElement&&(o=q(t,c.transclude,i)),c(f,t,n,r,o)))}}function Y(e,t){var n=t.priority-e.priority
return 0!==n?n:e.name!==t.name?e.name<t.name?-1:1:e.index-t.index}function J(e,t,n,r){if(t)throw Vr("multidir","Multiple directives [{0}, {1}] asking for {2} on: {3}",t.name,n.name,e,W(r))}function K(e,t){var n=r(t,!0)
n&&e.push({priority:0,compile:function(e){var t=e.parent(),r=!!t.length
return r&&D.$$addBindingClass(t),function(e,t){var i=t.parent()
r||D.$$addBindingClass(i),D.$$addBindingInfo(i,n.expressions),e.$watch(n,function(e){t[0].nodeValue=e})}}})}function Z(e,n){switch(e=Vo(e||"html")){case"svg":case"math":var r=t.createElement("div")
return r.innerHTML="<"+e+">"+n+"</"+e+">",r.childNodes[0].childNodes
default:return n}}function Q(e,t){if("srcdoc"==t)return A.HTML
var r=j(e)
return"xlinkHref"==t||"form"==r&&"action"==t||"img"!=r&&("src"==t||"ngSrc"==t)?A.RESOURCE_URL:n}function ee(e,t,n,i,o){var a,s=Q(e,i)
if(o=$[i]||o,a=r(n,!0,s,o)){if("multiple"===i&&"select"===j(e))throw Vr("selmulti","Binding to the 'multiple' attribute is not supported. Element: {0}",W(e))
t.push({priority:100,compile:function(){return{pre:function(e,t,u){var l,c=u.$$observers||(u.$$observers={})
if(x.test(i))throw Vr("nodomevents","Interpolations for HTML DOM event attributes are disallowed.  Please use the ng- versions (such as ng-click instead of onclick) instead.")
l=u[i],l!==n&&(a=l&&r(l,!0,s,o),n=l),a&&(u[i]=a(e),(c[i]||(c[i]=[])).$$inter=!0,(u.$$observers&&u.$$observers[i].$$scope||e).$watch(a,function(e,t){"class"===i&&e!=t?u.$updateClass(e,t):u.$set(i,e)}))}}}})}}function te(e,n,r){var i,o,a,s,u,l,c,f,p,d=n[0],h=n.length,m=d.parentNode
if(e)for(i=0,o=e.length;o>i;i++)if(e[i]==d){for(e[i++]=r,a=i,s=a+h-1,u=e.length;u>a;a++,s++)u>s?e[a]=e[s]:delete e[a]
e.length-=h-1,e.context===d&&(e.context=r)
break}for(m&&m.replaceChild(r,d),l=t.createDocumentFragment(),l.appendChild(d),Xn(r).data(Xn(d).data()),Yn?(fr=!0,Yn.cleanData([d])):delete Xn.cache[d[Xn.expando]],c=1,f=n.length;f>c;c++)p=n[c],Xn(p).remove(),l.appendChild(p),delete n[c]
n[0]=r,n.length=1}function re(e,t){return f(function(){return e.apply(null,arguments)},e,t)}function oe(e,t,n,r,o,a){try{e(t,n,r,o,a)}catch(s){i(s,W(n))}}var ae,se,ue,ce,fe=function(e,t){var n,r,i,o
if(t)for(n=Object.keys(t),r=0,i=n.length;i>r;r++)o=n[r],this[o]=t[o]
else this.$attr={}
this.$$element=e}
return fe.prototype={$normalize:Ze,$addClass:function(e){e&&e.length>0&&E.addClass(this.$$element,e)},$removeClass:function(e){e&&e.length>0&&E.removeClass(this.$$element,e)},$updateClass:function(e,t){var n,r=Qe(e,t)
r&&r.length&&E.addClass(this.$$element,r),n=Qe(t,e),n&&n.length&&E.removeClass(this.$$element,n)},$set:function(e,t,r,a){var s,u,l,c,f,p,d,h,m,g,$,v=this.$$element[0],y=qe(v,e),w=Le(v,e),b=e
if(y?(this.$$element.prop(e,t),a=y):w&&(this[w]=t,b=w),this[e]=t,a?this.$attr[e]=a:(a=this.$attr[e],a||(this.$attr[e]=a=ne(e,"-"))),s=j(this.$$element),"a"===s&&"href"===e||"img"===s&&"src"===e)this[e]=t=N(t,"src"===e)
else if("img"===s&&"srcset"===e){for(u="",l=or(t),c=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,f=/\s/.test(l)?c:/(,)/,p=l.split(f),d=Math.floor(p.length/2),h=0;d>h;h++)m=2*h,u+=N(or(p[m]),!0),u+=" "+or(p[m+1])
g=or(p[2*h]).split(/\s/),u+=N(or(g[0]),!0),2===g.length&&(u+=" "+or(g[1])),this[e]=t=u}r!==!1&&(null===t||t===n?this.$$element.removeAttr(a):this.$$element.attr(a,t)),$=this.$$observers,$&&o($[b],function(e){try{e(t)}catch(n){i(n)}})},$observe:function(e,t){var n=this,r=n.$$observers||(n.$$observers=le()),i=r[e]||(r[e]=[])
return i.push(t),k.$evalAsync(function(){!i.$$inter&&n.hasOwnProperty(e)&&t(n[e])}),function(){P(i,t)}}},ae=r.startSymbol(),se=r.endSymbol(),ue="{{"==ae||"}}"==se?m:function(e){return e.replace(/\{\{/g,ae).replace(/}}/g,se)},ce=/^ngAttr[A-Z]/,D.$$addBindingInfo=a?function(e,t){var n=e.data("$binding")||[]
ir(t)?n=n.concat(t):n.push(t),e.data("$binding",n)}:h,D.$$addBindingClass=a?function(e){_(e,"ng-binding")}:h,D.$$addScopeInfo=a?function(e,t,n,r){var i=n?r?"$isolateScopeNoTemplate":"$isolateScope":"$scope"
e.data(i,t)}:h,D.$$addScopeClass=a?function(e,t){_(e,t?"ng-isolate-scope":"ng-scope")}:h,D}]}function Ze(e){return me(e.replace(Ur,""))}function Qe(e,t){var n,r,i,o="",a=e.split(/\s+/),s=t.split(/\s+/)
e:for(n=0;n<a.length;n++){for(r=a[n],i=0;i<s.length;i++)if(r==s[i])continue e
o+=(o.length>0?" ":"")+r}return o}function et(e){var t,n
if(e=Xn(e),t=e.length,1>=t)return e
for(;t--;)n=e[t],n.nodeType===hr&&Kn.call(e,t,1)
return e}function tt(){var e={},t=!1,i=/^(\S+)(\s+as\s+(\w+))?$/
this.register=function(t,n){ae(t,"controller"),y(t)?f(e,t):e[t]=n},this.allowGlobals=function(){t=!0},this.$get=["$injector","$window",function(o,a){function s(e,t,n,i){if(!e||!y(e.$scope))throw r("$controller")("noscp","Cannot export controller '{0}' as '{1}'! No $scope object provided via `locals`.",i,t)
e.$scope[t]=n}return function(r,u,l,c){var p,d,h,m,g
if(l=l===!0,c&&w(c)&&(m=c),w(r)){if(d=r.match(i),!d)throw Br("ctrlfmt","Badly formed controller string '{0}'. Must match `__name__ as __id__` or `__name__`.",r)
h=d[1],m=m||d[3],r=e.hasOwnProperty(h)?e[h]:se(u.$scope,h,!0)||(t?se(a,h,!0):n),oe(r,h,!0)}return l?(g=(ir(r)?r[r.length-1]:r).prototype,p=Object.create(g||null),m&&s(u,m,p,h||r.name),f(function(){return o.invoke(r,p,u,h),p},{instance:p,identifier:m})):(p=o.instantiate(r,u,h),m&&s(u,m,p,h||r.name),p)}}]}function nt(){this.$get=["$window",function(e){return Xn(e.document)}]}function rt(){this.$get=["$log",function(e){return function(){e.error.apply(e,arguments)}}]}function it(e,t){var n,r
return w(e)&&(n=e.replace(Yr,"").trim(),n&&(r=t("Content-Type"),(r&&0===r.indexOf(Wr)||ot(n))&&(e=B(n)))),e}function ot(e){var t=e.match(Gr)
return t&&Xr[t[0]].test(e)}function at(e){var t,n,r,i=le()
return e?(o(e.split("\n"),function(e){r=e.indexOf(":"),t=Vo(or(e.substr(0,r))),n=or(e.substr(r+1)),t&&(i[t]=i[t]?i[t]+", "+n:n)}),i):i}function st(e){var t=y(e)?e:n
return function(n){if(t||(t=at(e)),n){var r=t[Vo(n)]
return r===void 0&&(r=null),r}return t}}function ut(e,t,n,r){return C(r)?r(e,t,n):(o(r,function(r){e=r(e,t,n)}),e)}function lt(e){return e>=200&&300>e}function ct(){var e,t=this.defaults={transformResponse:[it],transformRequest:[function(e){return!y(e)||A(e)||N(e)||E(e)?e:U(e)}],headers:{common:{Accept:"application/json, text/plain, */*"},post:L(zr),put:L(zr),patch:L(zr)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},i=!1
this.useApplyAsync=function(e){return v(e)?(i=!!e,this):i},e=this.interceptors=[],this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,u,l,c,p,d){function h(e){function i(e){var t=f({},e)
return e.data?t.data=ut(e.data,e.headers,e.status,u.transformResponse):t.data=e.data,lt(e.status)?t:p.reject(t)}function a(e){var t,n={}
return o(e,function(e,r){C(e)?(t=e(),null!=t&&(n[r]=t)):n[r]=e}),n}function s(e){var n,r,i,o=t.headers,s=f({},e.headers)
o=f({},o.common,o[Vo(e.method)])
e:for(n in o){r=Vo(n)
for(i in s)if(Vo(i)===r)continue e
s[n]=o[n]}return a(s)}var u,l,c,d,h,m
if(!tr.isObject(e))throw r("$http")("badreq","Http request configuration must be an object.  Received: {0}",e)
for(u=f({method:"get",transformRequest:t.transformRequest,transformResponse:t.transformResponse},e),u.headers=s(e),u.method=Bo(u.method),l=function(e){var r=e.headers,a=ut(e.data,st(r),n,e.transformRequest)
return $(a)&&o(r,function(e,t){"content-type"===Vo(t)&&delete r[t]}),$(e.withCredentials)&&!$(t.withCredentials)&&(e.withCredentials=t.withCredentials),b(e,a).then(i,i)},c=[l,n],d=p.when(u),o(T,function(e){(e.request||e.requestError)&&c.unshift(e.request,e.requestError),(e.response||e.responseError)&&c.push(e.response,e.responseError)});c.length;)h=c.shift(),m=c.shift(),d=d.then(h,m)
return d.success=function(e){return d.then(function(t){e(t.data,t.status,t.headers,u)}),d},d.error=function(e){return d.then(null,function(t){e(t.data,t.status,t.headers,u)}),d},d}function m(){o(arguments,function(e){h[e]=function(t,n){return h(f(n||{},{method:e,url:t}))}})}function g(){o(arguments,function(e){h[e]=function(t,n,r){return h(f(r||{},{method:e,url:t,data:n}))}})}function b(e,r){function o(e,t,n,r){function o(){s(t,e,n,r)}d&&(lt(e)?d.put(C,[e,t,at(n),r]):d.remove(C)),i?c.$applyAsync(o):(o(),c.$$phase||c.$apply())}function s(t,n,r,i){n=Math.max(n,0),(lt(n)?w.resolve:w.reject)({data:t,status:n,headers:st(r),config:e,statusText:i})}function l(e){s(e.data,e.status,L(e.headers()),e.statusText)}function f(){var t=h.pendingRequests.indexOf(e);-1!==t&&h.pendingRequests.splice(t,1)}var d,m,g,w=p.defer(),b=w.promise,x=e.headers,C=k(e.url,e.params)
return h.pendingRequests.push(e),b.then(f,f),!e.cache&&!t.cache||e.cache===!1||"GET"!==e.method&&"JSONP"!==e.method||(d=y(e.cache)?e.cache:y(t.cache)?t.cache:S),d&&(m=d.get(C),v(m)?D(m)?m.then(l,l):ir(m)?s(m[1],m[0],L(m[2]),m[3]):s(m,200,{},"OK"):d.put(C,b)),$(m)&&(g=on(e.url)?u.cookies()[e.xsrfCookieName||t.xsrfCookieName]:n,g&&(x[e.xsrfHeaderName||t.xsrfHeaderName]=g),a(e.method,C,r,o,x,e.timeout,e.withCredentials,e.responseType)),b}function k(e,t){if(!t)return e
var n=[]
return s(t,function(e,t){null===e||$(e)||(ir(e)||(e=[e]),o(e,function(e){y(e)&&(e=x(e)?e.toISOString():U(e)),n.push(J(t)+"="+J(e))}))}),n.length>0&&(e+=(-1==e.indexOf("?")?"?":"&")+n.join("&")),e}var S=l("$http"),T=[]
return o(e,function(e){T.unshift(w(e)?d.get(e):d.invoke(e))}),h.pendingRequests=[],m("get","delete","head","jsonp"),g("post","put","patch"),h.defaults=t,h}]}function ft(){return new e.XMLHttpRequest}function pt(){this.$get=["$browser","$window","$document",function(e,t,n){return dt(e,ft,e.defer,t.angular.callbacks,n[0])}]}function dt(e,t,r,i,a){function s(e,t,n){var r=a.createElement("script"),o=null
return r.type="text/javascript",r.src=e,r.async=!0,o=function(e){var s,u
br(r,"load",o),br(r,"error",o),a.body.removeChild(r),r=null,s=-1,u="unknown",e&&("load"!==e.type||i[t].called||(e={type:"error"}),u=e.type,s="error"===e.type?404:200),n&&n(s,u)},wr(r,"load",o),wr(r,"error",o),a.body.appendChild(r),o}return function(a,u,l,c,f,p,d,m){function g(){w&&w(),b&&b.abort()}function $(t,i,o,a,s){C!==n&&r.cancel(C),w=b=null,t(i,o,a,s),e.$$completeOutstandingRequest(h)}var y,w,b,x,C
if(e.$$incOutstandingRequestCount(),u=u||e.url(),"jsonp"==Vo(a))y="_"+(i.counter++).toString(36),i[y]=function(e){i[y].data=e,i[y].called=!0},w=s(u.replace("JSON_CALLBACK","angular.callbacks."+y),y,function(e,t){$(c,e,i[y].data,"",t),i[y]=h})
else{if(b=t(),b.open(a,u,!0),o(f,function(e,t){v(e)&&b.setRequestHeader(t,e)}),b.onload=function(){var e=b.statusText||"",t="response"in b?b.response:b.responseText,n=1223===b.status?204:b.status
0===n&&(n=t?200:"file"==rn(u).protocol?404:0),$(c,n,t,b.getAllResponseHeaders(),e)},x=function(){$(c,-1,null,null,"")},b.onerror=x,b.onabort=x,d&&(b.withCredentials=!0),m)try{b.responseType=m}catch(k){if("json"!==m)throw k}b.send(l||null)}p>0?C=r(g,p):D(p)&&p.then(g)}}function ht(){var e="{{",t="}}"
this.startSymbol=function(t){return t?(e=t,this):e},this.endSymbol=function(e){return e?(t=e,this):t},this.$get=["$parse","$exceptionHandler","$sce",function(r,i,o){function a(e){return"\\\\\\"+e}function s(a,s,d,h){function m(n){return n.replace(c,e).replace(p,t)}function g(e){try{return e=_(e),h&&!v(e)?e:D(e)}catch(t){var n=Jr("interr","Can't interpolate: {0}\n{1}",a,""+t)
i(n)}}var y,w,b,x,k,S,T,A,E,N,_,D
for(h=!!h,b=0,x=[],k=[],S=a.length,A=[],E=[];S>b;){if(-1==(y=a.indexOf(e,b))||-1==(w=a.indexOf(t,y+u))){b!==S&&A.push(m(a.substring(b)))
break}b!==y&&A.push(m(a.substring(b,y))),T=a.substring(y+u,w),x.push(T),k.push(r(T,g)),b=w+l,E.push(A.length),A.push("")}if(d&&A.length>1)throw Jr("noconcat","Error while interpolating: {0}\nStrict Contextual Escaping disallows interpolations that concatenate multiple expressions when a trusted value is required.  See http://docs.angularjs.org/api/ng.$sce",a)
return!s||x.length?(N=function(e){for(var t=0,n=x.length;n>t;t++){if(h&&$(e[t]))return
A[E[t]]=e[t]}return A.join("")},_=function(e){return d?o.getTrusted(d,e):o.valueOf(e)},D=function(e){if(null==e)return""
switch(typeof e){case"string":break
case"number":e=""+e
break
default:e=U(e)}return e},f(function(e){var t,n=0,r=x.length,o=Array(r)
try{for(;r>n;n++)o[n]=k[n](e)
return N(o)}catch(s){t=Jr("interr","Can't interpolate: {0}\n{1}",a,""+s),i(t)}},{exp:a,expressions:x,$$watchDelegate:function(e,t,n){var r
return e.$watchGroup(k,function(n,i){var o=N(n)
C(t)&&t.call(this,o,n!==i?r:o,e),r=o},n)}})):n}var u=e.length,l=t.length,c=RegExp(e.replace(/./g,a),"g"),p=RegExp(t.replace(/./g,a),"g")
return s.startSymbol=function(){return e},s.endSymbol=function(){return t},s}]}function mt(){this.$get=["$rootScope","$window","$q","$$q",function(e,t,n,r){function i(i,a,s,u){var l=t.setInterval,c=t.clearInterval,f=0,p=v(u)&&!u,d=(p?r:n).defer(),h=d.promise
return s=v(s)?s:0,h.then(null,null,i),h.$$intervalId=l(function(){d.notify(f++),s>0&&f>=s&&(d.resolve(f),c(h.$$intervalId),delete o[h.$$intervalId]),p||e.$apply()},a),o[h.$$intervalId]=d,h}var o={}
return i.cancel=function(e){return e&&e.$$intervalId in o?(o[e.$$intervalId].reject("canceled"),t.clearInterval(e.$$intervalId),delete o[e.$$intervalId],!0):!1},i}]}function gt(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"¤",posSuf:"",negPre:"(¤",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January,February,March,April,May,June,July,August,September,October,November,December".split(","),SHORTMONTH:"Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),DAY:"Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),SHORTDAY:"Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a",ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"]},pluralCat:function(e){return 1===e?"one":"other"}}}}function $t(e){for(var t=e.split("/"),n=t.length;n--;)t[n]=Y(t[n])
return t.join("/")}function vt(e,t){var n=rn(e)
t.$$protocol=n.protocol,t.$$host=n.hostname,t.$$port=p(n.port)||Zr[n.protocol]||null}function yt(e,t){var n,r="/"!==e.charAt(0)
r&&(e="/"+e),n=rn(e),t.$$path=decodeURIComponent(r&&"/"===n.pathname.charAt(0)?n.pathname.substring(1):n.pathname),t.$$search=G(n.search),t.$$hash=decodeURIComponent(n.hash),t.$$path&&"/"!=t.$$path.charAt(0)&&(t.$$path="/"+t.$$path)}function wt(e,t){return 0===t.indexOf(e)?t.substr(e.length):n}function bt(e){var t=e.indexOf("#")
return-1==t?e:e.substr(0,t)}function xt(e){return e.replace(/(#.+)|#$/,"$1")}function Ct(e){return e.substr(0,bt(e).lastIndexOf("/")+1)}function kt(e){return e.substring(0,e.indexOf("/",e.indexOf("//")+2))}function St(e,t){this.$$html5=!0,t=t||""
var r=Ct(e)
vt(e,this),this.$$parse=function(e){var t=wt(r,e)
if(!w(t))throw Qr("ipthprfx",'Invalid url "{0}", missing path prefix "{1}".',e,r)
yt(t,this),this.$$path||(this.$$path="/"),this.$$compose()},this.$$compose=function(){var e=X(this.$$search),t=this.$$hash?"#"+Y(this.$$hash):""
this.$$url=$t(this.$$path)+(e?"?"+e:"")+t,this.$$absUrl=r+this.$$url.substr(1)},this.$$parseLinkUrl=function(i,o){var a,s,u
return o&&"#"===o[0]?(this.hash(o.slice(1)),!0):((a=wt(e,i))!==n?(s=a,u=(a=wt(t,a))!==n?r+(wt("/",a)||a):e+s):(a=wt(r,i))!==n?u=r+a:r==i+"/"&&(u=r),u&&this.$$parse(u),!!u)}}function Tt(e,t){var n=Ct(e)
vt(e,this),this.$$parse=function(r){function i(e,t,n){var r,i=/^\/[A-Z]:(\/.*)/
return 0===t.indexOf(n)&&(t=t.replace(n,"")),i.exec(t)?e:(r=i.exec(e),r?r[1]:e)}var o,a=wt(e,r)||wt(n,r)
"#"===a.charAt(0)?(o=wt(t,a),$(o)&&(o=a)):o=this.$$html5?a:"",yt(o,this),this.$$path=i(this.$$path,o,e),this.$$compose()},this.$$compose=function(){var n=X(this.$$search),r=this.$$hash?"#"+Y(this.$$hash):""
this.$$url=$t(this.$$path)+(n?"?"+n:"")+r,this.$$absUrl=e+(this.$$url?t+this.$$url:"")},this.$$parseLinkUrl=function(t){return bt(e)==bt(t)?(this.$$parse(t),!0):!1}}function At(e,t){this.$$html5=!0,Tt.apply(this,arguments)
var n=Ct(e)
this.$$parseLinkUrl=function(r,i){var o,a
return i&&"#"===i[0]?(this.hash(i.slice(1)),!0):(e==bt(r)?o=r:(a=wt(n,r))?o=e+t+a:n===r+"/"&&(o=n),o&&this.$$parse(o),!!o)},this.$$compose=function(){var n=X(this.$$search),r=this.$$hash?"#"+Y(this.$$hash):""
this.$$url=$t(this.$$path)+(n?"?"+n:"")+r,this.$$absUrl=e+t+this.$$url}}function Et(e){return function(){return this[e]}}function Nt(e,t){return function(n){return $(n)?this[e]:(this[e]=t(n),this.$$compose(),this)}}function _t(){var e="",t={enabled:!1,requireBase:!0,rewriteLinks:!0}
this.hashPrefix=function(t){return v(t)?(e=t,this):e},this.html5Mode=function(e){return _(e)?(t.enabled=e,this):y(e)?(_(e.enabled)&&(t.enabled=e.enabled),_(e.requireBase)&&(t.requireBase=e.requireBase),_(e.rewriteLinks)&&(t.rewriteLinks=e.rewriteLinks),this):t},this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(n,r,i,o,a){function s(e,t,n){var i=l.url(),o=l.$$state
try{r.url(e,t,n),l.$$state=r.state()}catch(a){throw l.url(i),l.$$state=o,a}}function u(e,t){n.$broadcast("$locationChangeSuccess",l.absUrl(),e,l.$$state,t)}var l,c,f,p,d,h=r.baseHref(),m=r.url()
if(t.enabled){if(!h&&t.requireBase)throw Qr("nobase","$location in HTML5 mode requires a <base> tag to be present!")
f=kt(m)+(h||"/"),c=i.history?St:At}else f=bt(m),c=Tt
return l=new c(f,"#"+e),l.$$parseLinkUrl(m,m),l.$$state=r.state(),p=/^\s*(javascript|mailto):/i,o.on("click",function(e){var i,s,u
if(t.rewriteLinks&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey&&2!=e.which&&2!=e.button){for(i=Xn(e.target);"a"!==j(i[0]);)if(i[0]===o[0]||!(i=i.parent())[0])return
s=i.prop("href"),u=i.attr("href")||i.attr("xlink:href"),y(s)&&""+s=="[object SVGAnimatedString]"&&(s=rn(s.animVal).href),p.test(s)||!s||i.attr("target")||e.isDefaultPrevented()||l.$$parseLinkUrl(s,u)&&(e.preventDefault(),l.absUrl()!=r.url()&&(n.$apply(),a.angular["ff-684208-preventDefault"]=!0))}}),xt(l.absUrl())!=xt(m)&&r.url(l.absUrl(),!0),d=!0,r.onUrlChange(function(e,t){n.$evalAsync(function(){var r,i=l.absUrl(),o=l.$$state
l.$$parse(e),l.$$state=t,r=n.$broadcast("$locationChangeStart",e,i,t,o).defaultPrevented,l.absUrl()===e&&(r?(l.$$parse(i),l.$$state=o,s(i,!1,o)):(d=!1,u(i,o)))}),n.$$phase||n.$digest()}),n.$watch(function(){var e=xt(r.url()),t=xt(l.absUrl()),o=r.state(),a=l.$$replace,c=e!==t||l.$$html5&&i.history&&o!==l.$$state;(d||c)&&(d=!1,n.$evalAsync(function(){var t=l.absUrl(),r=n.$broadcast("$locationChangeStart",t,e,l.$$state,o).defaultPrevented
l.absUrl()===t&&(r?(l.$$parse(e),l.$$state=o):(c&&s(t,a,o===l.$$state?null:l.$$state),u(e,o)))})),l.$$replace=!1}),l}]}function Dt(){var e=!0,t=this
this.debugEnabled=function(t){return v(t)?(e=t,this):e},this.$get=["$window",function(n){function r(e){return e instanceof Error&&(e.stack?e=e.message&&-1===e.stack.indexOf(e.message)?"Error: "+e.message+"\n"+e.stack:e.stack:e.sourceURL&&(e=e.message+"\n"+e.sourceURL+":"+e.line)),e}function i(e){var t=n.console||{},i=t[e]||t.log||h,a=!1
try{a=!!i.apply}catch(s){}return a?function(){var e=[]
return o(arguments,function(t){e.push(r(t))}),i.apply(t,e)}:function(e,t){i(e,null==t?"":t)}}return{log:i("log"),info:i("info"),warn:i("warn"),error:i("error"),debug:function(){var n=i("debug")
return function(){e&&n.apply(t,arguments)}}()}}]}function Ot(e,t){if("__defineGetter__"===e||"__defineSetter__"===e||"__lookupGetter__"===e||"__lookupSetter__"===e||"__proto__"===e)throw ti("isecfld","Attempting to access a disallowed field in Angular expressions! Expression: {0}",t)
return e}function Mt(e,t){if(e){if(e.constructor===e)throw ti("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",t)
if(e.window===e)throw ti("isecwindow","Referencing the Window in Angular expressions is disallowed! Expression: {0}",t)
if(e.children&&(e.nodeName||e.prop&&e.attr&&e.find))throw ti("isecdom","Referencing DOM nodes in Angular expressions is disallowed! Expression: {0}",t)
if(e===Object)throw ti("isecobj","Referencing Object in Angular expressions is disallowed! Expression: {0}",t)}return e}function jt(e,t){if(e){if(e.constructor===e)throw ti("isecfn","Referencing Function in Angular expressions is disallowed! Expression: {0}",t)
if(e===ni||e===ri||e===ii)throw ti("isecff","Referencing call, apply or bind in Angular expressions is disallowed! Expression: {0}",t)}}function Pt(e){return e.constant}function qt(e,t,n,r,i){var o,a,s,u
for(Mt(e,i),Mt(t,i),o=n.split("."),s=0;o.length>1;s++)a=Ot(o.shift(),i),u=0===s&&t&&t[a]||e[a],u||(u={},e[a]=u),e=Mt(u,i)
return a=Ot(o.shift(),i),Mt(e[a],i),e[a]=r,r}function Lt(e){return"constructor"==e}function Rt(e,t,r,i,o,a,s){var u,l,c,f,p,d
return Ot(e,a),Ot(t,a),Ot(r,a),Ot(i,a),Ot(o,a),u=function(e){return Mt(e,a)},l=s||Lt(e)?u:m,c=s||Lt(t)?u:m,f=s||Lt(r)?u:m,p=s||Lt(i)?u:m,d=s||Lt(o)?u:m,function(a,s){var u=s&&s.hasOwnProperty(e)?s:a
return null==u?u:(u=l(u[e]),t?null==u?n:(u=c(u[t]),r?null==u?n:(u=f(u[r]),i?null==u?n:(u=p(u[i]),o?null==u?n:u=d(u[o]):u):u):u):u)}}function It(e,t){return function(n,r){return e(n,r,Mt,t)}}function Ht(e,t,r){var i,a,s,u,l,c=t.expensiveChecks,f=c?fi:ci,p=f[e]
return p?p:(i=e.split("."),a=i.length,t.csp?p=6>a?Rt(i[0],i[1],i[2],i[3],i[4],r,c):function(e,t){var o,s=0
do o=Rt(i[s++],i[s++],i[s++],i[s++],i[s++],r,c)(e,t),t=n,e=o
while(a>s)
return o}:(s="",c&&(s+="s = eso(s, fe);\nl = eso(l, fe);\n"),u=c,o(i,function(e,t){Ot(e,r)
var n=(t?"s":'((l&&l.hasOwnProperty("'+e+'"))?l:s)')+"."+e;(c||Lt(e))&&(n="eso("+n+", fe)",u=!0),s+="if(s == null) return undefined;\ns="+n+";\n"}),s+="return s;",l=Function("s","l","eso","fe",s),l.toString=g(s),u&&(l=It(l,r)),p=l),p.sharedGetter=!0,p.assign=function(t,n,r){return qt(t,r,e,n,e)},f[e]=p,p)}function Ft(e){return C(e.valueOf)?e.valueOf():pi.call(e)}function Vt(){var e=le(),t=le()
this.$get=["$filter","$sniffer",function(n,r){function i(e){var t=e
return e.sharedGetter&&(t=function(t,n){return e(t,n)},t.literal=e.literal,t.constant=e.constant,t.assign=e.assign),t}function a(e,t){var n,r,i
for(n=0,r=e.length;r>n;n++)i=e[n],i.constant||(i.inputs?a(i.inputs,t):-1===t.indexOf(i)&&t.push(i))
return t}function s(e,t){return null==e||null==t?e===t:"object"==typeof e&&(e=Ft(e),"object"==typeof e)?!1:e===t||e!==e&&t!==t}function u(e,t,n,r){var i,o,u,l,c,f=r.$$inputs||(r.$$inputs=a(r.inputs,[]))
if(1===f.length)return o=s,f=f[0],e.$watch(function(e){var t=f(e)
return s(t,o)||(i=r(e),o=t&&Ft(t)),i},t,n)
for(u=[],l=0,c=f.length;c>l;l++)u[l]=s
return e.$watch(function(e){var t,n,o,a=!1
for(t=0,n=f.length;n>t;t++)o=f[t](e),(a||(a=!s(o,u[t])))&&(u[t]=o&&Ft(o))
return a&&(i=r(e)),i},t,n)}function l(e,t,n,r){var i,o
return i=e.$watch(function(e){return r(e)},function(e,n,r){o=e,C(t)&&t.apply(this,arguments),v(e)&&r.$$postDigest(function(){v(o)&&i()})},n)}function c(e,t,n,r){function i(e){var t=!0
return o(e,function(e){v(e)||(t=!1)}),t}var a,s
return a=e.$watch(function(e){return r(e)},function(e,n,r){s=e,C(t)&&t.call(this,e,n,r),i(e)&&r.$$postDigest(function(){i(s)&&a()})},n)}function f(e,t,n,r){var i
return i=e.$watch(function(e){return r(e)},function(){C(t)&&t.apply(this,arguments),i()},n)}function p(e,t){var n,r,i
return t?(n=e.$$watchDelegate,r=n!==c&&n!==l,i=r?function(n,r){var i=e(n,r)
return t(i,n,r)}:function(n,r){var i=e(n,r),o=t(i,n,r)
return v(i)?o:i},e.$$watchDelegate&&e.$$watchDelegate!==u?i.$$watchDelegate=e.$$watchDelegate:t.$stateful||(i.$$watchDelegate=u,i.inputs=[e]),i):e}var d={csp:r.csp,expensiveChecks:!1},m={csp:r.csp,expensiveChecks:!0}
return function(r,o,a){var s,g,$,v,y,w,b
switch(typeof r){case"string":return $=r=r.trim(),v=a?t:e,s=v[$],s||(":"===r.charAt(0)&&":"===r.charAt(1)&&(g=!0,r=r.substring(2)),y=a?m:d,w=new ui(y),b=new li(w,n,y),s=b.parse(r),s.constant?s.$$watchDelegate=f:g?(s=i(s),s.$$watchDelegate=s.literal?c:l):s.inputs&&(s.$$watchDelegate=u),v[$]=s),p(s,o)
case"function":return p(r,o)
default:return p(h,o)}}}]}function Ut(){this.$get=["$rootScope","$exceptionHandler",function(e,t){return Wt(function(t){e.$evalAsync(t)},t)}]}function Bt(){this.$get=["$browser","$exceptionHandler",function(e,t){return Wt(function(t){e.defer(t)},t)}]}function Wt(e,t){function i(e,t,n){function r(t){return function(n){i||(i=!0,t.call(e,n))}}var i=!1
return[r(t),r(n)]}function a(){this.$$state={status:0}}function s(e,t){return function(n){t.call(e,n)}}function u(e){var r,i,o,a,s=e.pending
for(e.processScheduled=!1,e.pending=n,o=0,a=s.length;a>o;++o){i=s[o][0],r=s[o][e.status]
try{C(r)?i.resolve(r(e.value)):1===e.status?i.resolve(e.value):i.reject(e.value)}catch(u){i.reject(u),t(u)}}}function l(t){!t.processScheduled&&t.pending&&(t.processScheduled=!0,e(function(){u(t)}))}function c(){this.promise=new a,this.resolve=s(this,this.resolve),this.reject=s(this,this.reject),this.notify=s(this,this.notify)}function f(e){var t=new c,n=0,r=ir(e)?[]:{}
return o(e,function(e,i){n++,m(e).then(function(e){r.hasOwnProperty(i)||(r[i]=e,--n||t.resolve(r))},function(e){r.hasOwnProperty(i)||t.reject(e)})}),0===n&&t.resolve(r),t.promise}var p,d,h,m,g,$=r("$q",TypeError),v=function(){return new c}
return a.prototype={then:function(e,t,n){var r=new c
return this.$$state.pending=this.$$state.pending||[],this.$$state.pending.push([r,e,t,n]),this.$$state.status>0&&l(this.$$state),r.promise},"catch":function(e){return this.then(null,e)},"finally":function(e,t){return this.then(function(t){return h(t,!0,e)},function(t){return h(t,!1,e)},t)}},c.prototype={resolve:function(e){this.promise.$$state.status||(e===this.promise?this.$$reject($("qcycle","Expected promise to be resolved with value other than itself '{0}'",e)):this.$$resolve(e))},$$resolve:function(e){var n,r
r=i(this,this.$$resolve,this.$$reject)
try{(y(e)||C(e))&&(n=e&&e.then),C(n)?(this.promise.$$state.status=-1,n.call(e,r[0],r[1],this.notify)):(this.promise.$$state.value=e,this.promise.$$state.status=1,l(this.promise.$$state))}catch(o){r[1](o),t(o)}},reject:function(e){this.promise.$$state.status||this.$$reject(e)},$$reject:function(e){this.promise.$$state.value=e,this.promise.$$state.status=2,l(this.promise.$$state)},notify:function(n){var r=this.promise.$$state.pending
this.promise.$$state.status<=0&&r&&r.length&&e(function(){var e,i,o,a
for(o=0,a=r.length;a>o;o++){i=r[o][0],e=r[o][3]
try{i.notify(C(e)?e(n):n)}catch(s){t(s)}}})}},p=function(e){var t=new c
return t.reject(e),t.promise},d=function(e,t){var n=new c
return t?n.resolve(e):n.reject(e),n.promise},h=function(e,t,n){var r=null
try{C(n)&&(r=n())}catch(i){return d(i,!1)}return D(r)?r.then(function(){return d(e,t)},function(e){return d(e,!1)}):d(e,t)},m=function(e,t,n,r){var i=new c
return i.resolve(e),i.promise.then(t,n,r)},g=function w(e){function t(e){r.resolve(e)}function n(e){r.reject(e)}if(!C(e))throw $("norslvr","Expected resolverFn, got '{0}'",e)
if(!(this instanceof w))return new w(e)
var r=new c
return e(t,n),r.promise},g.defer=v,g.reject=p,g.when=m,g.all=f,g}function zt(){this.$get=["$window","$timeout",function(e,t){var n=e.requestAnimationFrame||e.webkitRequestAnimationFrame,r=e.cancelAnimationFrame||e.webkitCancelAnimationFrame||e.webkitCancelRequestAnimationFrame,i=!!n,o=i?function(e){var t=n(e)
return function(){r(t)}}:function(e){var n=t(e,16.66,!1)
return function(){t.cancel(n)}}
return o.supported=i,o}]}function Gt(){function e(e){function t(){this.$$watchers=this.$$nextSibling=this.$$childHead=this.$$childTail=null,this.$$listeners={},this.$$listenerCount={},this.$$watchersCount=0,this.$id=l(),this.$$ChildScope=null}return t.prototype=e,t}var t=10,n=r("$rootScope"),a=null,s=null
this.digestTtl=function(e){return arguments.length&&(t=e),t},this.$get=["$injector","$exceptionHandler","$parse","$browser",function(r,u,c,f){function p(e){e.currentScope.$$destroyed=!0}function d(){this.$id=l(),this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null,this.$root=this,this.$$destroyed=!1,this.$$listeners={},this.$$listenerCount={},this.$$isolateBindings=null}function m(e){if(k.$$phase)throw n("inprog","{0} already in progress",k.$$phase)
k.$$phase=e}function g(){k.$$phase=null}function v(e,t,n){do e.$$listenerCount[n]-=t,0===e.$$listenerCount[n]&&delete e.$$listenerCount[n]
while(e=e.$parent)}function w(){}function b(){for(;A.length;)try{A.shift()()}catch(e){u(e)}s=null}function x(){null===s&&(s=f.defer(function(){k.$apply(b)}))}var k,S,T,A
return d.prototype={constructor:d,$new:function(t,n){var r
return n=n||this,t?(r=new d,r.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=e(this)),r=new this.$$ChildScope),r.$parent=n,r.$$prevSibling=n.$$childTail,n.$$childHead?(n.$$childTail.$$nextSibling=r,n.$$childTail=r):n.$$childHead=n.$$childTail=r,(t||n!=this)&&r.$on("$destroy",p),r},$watch:function(e,t,n){var r,i,o,s=c(e)
return s.$$watchDelegate?s.$$watchDelegate(this,t,n,s):(r=this,i=r.$$watchers,o={fn:t,last:w,get:s,exp:e,eq:!!n},a=null,C(t)||(o.fn=h),i||(i=r.$$watchers=[]),i.unshift(o),function(){P(i,o),a=null})},$watchGroup:function(e,t){function n(){l=!1,c?(c=!1,t(a,a,u)):t(a,i,u)}var r,i=Array(e.length),a=Array(e.length),s=[],u=this,l=!1,c=!0
return e.length?1===e.length?this.$watch(e[0],function(e,n,r){a[0]=e,i[0]=n,t(a,e===n?a:i,r)}):(o(e,function(e,t){var r=u.$watch(e,function(e,r){a[t]=e,i[t]=r,l||(l=!0,u.$evalAsync(n))})
s.push(r)}),function(){for(;s.length;)s.shift()()}):(r=!0,u.$evalAsync(function(){r&&t(a,a,u)}),function(){r=!1})},$watchCollection:function(e,t){function n(e){var t,n,r,o,u,l
if(a=e,!$(a)){if(y(a))if(i(a))for(s!==d&&(s=d,g=s.length=0,f++),t=a.length,g!==t&&(f++,s.length=g=t),l=0;t>l;l++)u=s[l],o=a[l],r=u!==u&&o!==o,r||u===o||(f++,s[l]=o)
else{s!==h&&(s=h={},g=0,f++),t=0
for(n in a)a.hasOwnProperty(n)&&(t++,o=a[n],u=s[n],n in s?(r=u!==u&&o!==o,r||u===o||(f++,s[n]=o)):(g++,s[n]=o,f++))
if(g>t){f++
for(n in s)a.hasOwnProperty(n)||(g--,delete s[n])}}else s!==a&&(s=a,f++)
return f}}function r(){var e,n
if(m?(m=!1,t(a,a,o)):t(a,u,o),l)if(y(a))if(i(a))for(u=Array(a.length),e=0;e<a.length;e++)u[e]=a[e]
else{u={}
for(n in a)Uo.call(a,n)&&(u[n]=a[n])}else u=a}var o,a,s,u,l,f,p,d,h,m,g
return n.$stateful=!0,o=this,l=t.length>1,f=0,p=c(e,n),d=[],h={},m=!0,g=0,this.$watch(p,r)},$digest:function(){var e,r,i,o,l,c,p,d,h,$,v=t,y=this,x=[]
m("$digest"),f.$$checkUrlChange(),this===k&&null!==s&&(f.defer.cancel(s),b()),a=null
do{for(c=!1,d=y;S.length;){try{$=S.shift(),$.scope.$eval($.expression,$.locals)}catch(A){u(A)}a=null}e:do{if(o=d.$$watchers)for(l=o.length;l--;)try{if(e=o[l])if((r=e.get(d))===(i=e.last)||(e.eq?R(r,i):"number"==typeof r&&"number"==typeof i&&isNaN(r)&&isNaN(i))){if(e===a){c=!1
break e}}else c=!0,a=e,e.last=e.eq?q(r,null):r,e.fn(r,i===w?r:i,d),5>v&&(h=4-v,x[h]||(x[h]=[]),x[h].push({msg:C(e.exp)?"fn: "+(e.exp.name||""+e.exp):e.exp,newVal:r,oldVal:i}))}catch(A){u(A)}if(!(p=d.$$childHead||d!==y&&d.$$nextSibling))for(;d!==y&&!(p=d.$$nextSibling);)d=d.$parent}while(d=p)
if((c||S.length)&&!v--)throw g(),n("infdig","{0} $digest() iterations reached. Aborting!\nWatchers fired in the last 5 iterations: {1}",t,x)}while(c||S.length)
for(g();T.length;)try{T.shift()()}catch(A){u(A)}},$destroy:function(){var e,t
if(!this.$$destroyed&&(e=this.$parent,this.$broadcast("$destroy"),this.$$destroyed=!0,this!==k)){for(t in this.$$listenerCount)v(this,this.$$listenerCount[t],t)
e.$$childHead==this&&(e.$$childHead=this.$$nextSibling),e.$$childTail==this&&(e.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=h,this.$on=this.$watch=this.$watchGroup=function(){return h},this.$$listeners={},this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=this.$root=this.$$watchers=null}},$eval:function(e,t){return c(e)(this,t)},$evalAsync:function(e,t){k.$$phase||S.length||f.defer(function(){S.length&&k.$digest()}),S.push({scope:this,expression:e,locals:t})},$$postDigest:function(e){T.push(e)},$apply:function(e){try{return m("$apply"),this.$eval(e)}catch(t){u(t)}finally{g()
try{k.$digest()}catch(t){throw u(t),t}}},$applyAsync:function(e){function t(){n.$eval(e)}var n=this
e&&A.push(t),x()},$on:function(e,t){var n,r,i=this.$$listeners[e]
i||(this.$$listeners[e]=i=[]),i.push(t),n=this
do n.$$listenerCount[e]||(n.$$listenerCount[e]=0),n.$$listenerCount[e]++
while(n=n.$parent)
return r=this,function(){var n=i.indexOf(t);-1!==n&&(i[n]=null,v(r,1,e))}},$emit:function(e){var t,n,r,i=[],o=this,a=!1,s={name:e,targetScope:o,stopPropagation:function(){a=!0},preventDefault:function(){s.defaultPrevented=!0},defaultPrevented:!1},l=I([s],arguments,1)
do{for(t=o.$$listeners[e]||i,s.currentScope=o,n=0,r=t.length;r>n;n++)if(t[n])try{t[n].apply(null,l)}catch(c){u(c)}else t.splice(n,1),n--,r--
if(a)return s.currentScope=null,s
o=o.$parent}while(o)
return s.currentScope=null,s},$broadcast:function(e){var t,n,r,i,o=this,a=o,s=o,l={name:e,targetScope:o,preventDefault:function(){l.defaultPrevented=!0},defaultPrevented:!1}
if(!o.$$listenerCount[e])return l
for(t=I([l],arguments,1);a=s;){for(l.currentScope=a,n=a.$$listeners[e]||[],r=0,i=n.length;i>r;r++)if(n[r])try{n[r].apply(null,t)}catch(c){u(c)}else n.splice(r,1),r--,i--
if(!(s=a.$$listenerCount[e]&&a.$$childHead||a!==o&&a.$$nextSibling))for(;a!==o&&!(s=a.$$nextSibling);)a=a.$parent}return l.currentScope=null,l}},k=new d,S=k.$$asyncQueue=[],T=k.$$postDigestQueue=[],A=k.$$applyAsyncQueue=[],k}]}function Xt(){var e=/^\s*(https?|ftp|mailto|tel|file):/,t=/^\s*((https?|ftp|file|blob):|data:image\/)/
this.aHrefSanitizationWhitelist=function(t){return v(t)?(e=t,this):e},this.imgSrcSanitizationWhitelist=function(e){return v(e)?(t=e,this):t},this.$get=function(){return function(n,r){var i=r?t:e,o=rn(n).href
return""===o||o.match(i)?n:"unsafe:"+o}}}function Yt(e){if("self"===e)return e
if(w(e)){if(e.indexOf("***")>-1)throw di("iwcard","Illegal sequence *** in string matcher.  String: {0}",e)
return e=ar(e).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*"),RegExp("^"+e+"$")}if(k(e))return RegExp("^"+e.source+"$")
throw di("imatcher",'Matchers may only be "self", string patterns or RegExp objects')}function Jt(e){var t=[]
return v(e)&&o(e,function(e){t.push(Yt(e))}),t}function Kt(){this.SCE_CONTEXTS=hi
var e=["self"],t=[]
this.resourceUrlWhitelist=function(t){return arguments.length&&(e=Jt(t)),e},this.resourceUrlBlacklist=function(e){return arguments.length&&(t=Jt(e)),t},this.$get=["$injector",function(r){function i(e,t){return"self"===e?on(t):!!e.exec(t.href)}function o(n){var r,o,a=rn(""+n),s=!1
for(r=0,o=e.length;o>r;r++)if(i(e[r],a)){s=!0
break}if(s)for(r=0,o=t.length;o>r;r++)if(i(t[r],a)){s=!1
break}return s}function a(e){var t=function(e){this.$$unwrapTrustedValue=function(){return e}}
return e&&(t.prototype=new e),t.prototype.valueOf=function(){return this.$$unwrapTrustedValue()},t.prototype.toString=function(){return""+this.$$unwrapTrustedValue()},t}function s(e,t){var r=f.hasOwnProperty(e)?f[e]:null
if(!r)throw di("icontext","Attempted to trust a value in invalid context. Context: {0}; Value: {1}",e,t)
if(null===t||t===n||""===t)return t
if("string"!=typeof t)throw di("itype","Attempted to trust a non-string value in a content requiring a string: Context: {0}",e)
return new r(t)}function u(e){return e instanceof c?e.$$unwrapTrustedValue():e}function l(e,t){if(null===t||t===n||""===t)return t
var r=f.hasOwnProperty(e)?f[e]:null
if(r&&t instanceof r)return t.$$unwrapTrustedValue()
if(e===hi.RESOURCE_URL){if(o(t))return t
throw di("insecurl","Blocked loading resource from url not allowed by $sceDelegate policy.  URL: {0}",""+t)}if(e===hi.HTML)return p(t)
throw di("unsafe","Attempting to use an unsafe value in a safe context.")}var c,f,p=function(){throw di("unsafe","Attempting to use an unsafe value in a safe context.")}
return r.has("$sanitize")&&(p=r.get("$sanitize")),c=a(),f={},f[hi.HTML]=a(c),f[hi.CSS]=a(c),f[hi.URL]=a(c),f[hi.JS]=a(c),f[hi.RESOURCE_URL]=a(f[hi.URL]),{trustAs:s,getTrusted:l,valueOf:u}}]}function Zt(){var e=!0
this.enabled=function(t){return arguments.length&&(e=!!t),e},this.$get=["$parse","$sceDelegate",function(t,n){var r,i,a,s
if(e&&8>Gn)throw di("iequirks","Strict Contextual Escaping does not support Internet Explorer version < 11 in quirks mode.  You can fix this by adding the text <!doctype html> to the top of your HTML document.  See http://docs.angularjs.org/api/ng.$sce for more information.")
return r=L(hi),r.isEnabled=function(){return e},r.trustAs=n.trustAs,r.getTrusted=n.getTrusted,r.valueOf=n.valueOf,e||(r.trustAs=r.getTrusted=function(e,t){return t},r.valueOf=m),r.parseAs=function(e,n){var i=t(n)
return i.literal&&i.constant?i:t(n,function(t){return r.getTrusted(e,t)})},i=r.parseAs,a=r.getTrusted,s=r.trustAs,o(hi,function(e,t){var n=Vo(t)
r[me("parse_as_"+n)]=function(t){return i(e,t)},r[me("get_trusted_"+n)]=function(t){return a(e,t)},r[me("trust_as_"+n)]=function(t){return s(e,t)}}),r}]}function Qt(){this.$get=["$window","$document",function(e,t){var n,r,i,o={},a=p((/android (\d+)/.exec(Vo((e.navigator||{}).userAgent))||[])[1]),s=/Boxee/i.test((e.navigator||{}).userAgent),u=t[0]||{},l=/^(Moz|webkit|ms)(?=[A-Z])/,c=u.body&&u.body.style,f=!1,d=!1
if(c){for(i in c)if(r=l.exec(i)){n=r[0],n=n.substr(0,1).toUpperCase()+n.substr(1)
break}n||(n="WebkitOpacity"in c&&"webkit"),f=!!("transition"in c||n+"Transition"in c),d=!!("animation"in c||n+"Animation"in c),!a||f&&d||(f=w(u.body.style.webkitTransition),d=w(u.body.style.webkitAnimation))}return{history:!(!e.history||!e.history.pushState||4>a||s),hasEvent:function(e){if("input"===e&&11>=Gn)return!1
if($(o[e])){var t=u.createElement("div")
o[e]="on"+e in t}return o[e]},csp:sr(),vendorPrefix:n,transitions:f,animations:d,android:a}}]}function en(){this.$get=["$templateCache","$http","$q",function(e,t,n){function r(i,o){function a(e){if(!o)throw Vr("tpload","Failed to load template: {0}",i)
return n.reject(e)}var s,u
return r.totalPendingRequests++,s=t.defaults&&t.defaults.transformResponse,ir(s)?s=s.filter(function(e){return e!==it}):s===it&&(s=null),u={cache:e,transformResponse:s},t.get(i,u)["finally"](function(){r.totalPendingRequests--}).then(function(e){return e.data},a)}return r.totalPendingRequests=0,r}]}function tn(){this.$get=["$rootScope","$browser","$location",function(e,t,n){var r={}
return r.findBindings=function(e,t,n){var r=e.getElementsByClassName("ng-binding"),i=[]
return o(r,function(e){var r=tr.element(e).data("$binding")
r&&o(r,function(r){if(n){var o=RegExp("(^|\\s)"+ar(t)+"(\\s|\\||$)")
o.test(r)&&i.push(e)}else-1!=r.indexOf(t)&&i.push(e)})}),i},r.findModels=function(e,t,n){var r,i,o,a,s=["ng-","data-ng-","ng\\:"]
for(r=0;r<s.length;++r)if(i=n?"=":"*=",o="["+s[r]+"model"+i+'"'+t+'"]',a=e.querySelectorAll(o),a.length)return a},r.getLocation=function(){return n.url()},r.setLocation=function(t){t!==n.url()&&(n.url(t),e.$digest())},r.whenStable=function(e){t.notifyWhenNoOutstandingRequests(e)},r}]}function nn(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(e,t,n,r,i){function o(o,s,u){var l,c=v(u)&&!u,f=(c?r:n).defer(),p=f.promise
return l=t.defer(function(){try{f.resolve(o())}catch(t){f.reject(t),i(t)}finally{delete a[p.$$timeoutId]}c||e.$apply()},s),p.$$timeoutId=l,a[l]=f,p}var a={}
return o.cancel=function(e){return e&&e.$$timeoutId in a?(a[e.$$timeoutId].reject("canceled"),delete a[e.$$timeoutId],t.defer.cancel(e.$$timeoutId)):!1},o}]}function rn(e){var t=e
return Gn&&(mi.setAttribute("href",t),t=mi.href),mi.setAttribute("href",t),{href:mi.href,protocol:mi.protocol?mi.protocol.replace(/:$/,""):"",host:mi.host,search:mi.search?mi.search.replace(/^\?/,""):"",hash:mi.hash?mi.hash.replace(/^#/,""):"",hostname:mi.hostname,port:mi.port,pathname:"/"===mi.pathname.charAt(0)?mi.pathname:"/"+mi.pathname}}function on(e){var t=w(e)?rn(e):e
return t.protocol===gi.protocol&&t.host===gi.host}function an(){this.$get=g(e)}function sn(e){function t(r,i){if(y(r)){var a={}
return o(r,function(e,n){a[n]=t(n,e)}),a}return e.factory(r+n,i)}var n="Filter"
this.register=t,this.$get=["$injector",function(e){return function(t){return e.get(t+n)}}],t("currency",fn),t("date",kn),t("filter",un),t("json",Sn),t("limitTo",Tn),t("lowercase",bi),t("number",pn),t("orderBy",An),t("uppercase",xi)}function un(){return function(e,t,n){var r,i
if(!ir(e))return e
switch(typeof t){case"function":r=t
break
case"boolean":case"number":case"string":i=!0
case"object":r=ln(t,n,i)
break
default:return e}return e.filter(r)}}function ln(e,t,n){var r,i=y(e)&&"$"in e
return t===!0?t=R:C(t)||(t=function(e,t){return y(e)||y(t)?!1:(e=Vo(""+e),t=Vo(""+t),-1!==e.indexOf(t))}),r=function(r){return i&&!y(r)?cn(r,e.$,t,!1):cn(r,e,t,n)}}function cn(e,t,n,r,i){var o,a,s,u,l=null!==e?typeof e:"null",c=null!==t?typeof t:"null"
if("string"===c&&"!"===t.charAt(0))return!cn(e,t.substring(1),n,r)
if(ir(e))return e.some(function(e){return cn(e,t,n,r)})
switch(l){case"object":if(r){for(o in e)if("$"!==o.charAt(0)&&cn(e[o],t,n,!0))return!0
return i?!1:cn(e,t,n,!1)}if("object"===c){for(o in t)if(a=t[o],!C(a)&&!$(a)&&(s="$"===o,u=s?e:e[o],!cn(u,a,n,s,s)))return!1
return!0}return n(e,t)
case"function":return!1
default:return n(e,t)}}function fn(e){var t=e.NUMBER_FORMATS
return function(e,n,r){return $(n)&&(n=t.CURRENCY_SYM),$(r)&&(r=t.PATTERNS[1].maxFrac),null==e?e:dn(e,t.PATTERNS[1],t.GROUP_SEP,t.DECIMAL_SEP,r).replace(/\u00A4/g,n)}}function pn(e){var t=e.NUMBER_FORMATS
return function(e,n){return null==e?e:dn(e,t.PATTERNS[0],t.GROUP_SEP,t.DECIMAL_SEP,n)}}function dn(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,m,g,v
if(!isFinite(e)||y(e))return""
if(o=0>e,e=Math.abs(e),a=e+"",s="",u=[],l=!1,-1!==a.indexOf("e")&&(c=a.match(/([\d\.]+)e(-?)(\d+)/),c&&"-"==c[2]&&c[3]>i+1?e=0:(s=a,l=!0)),l)i>0&&1>e&&(s=e.toFixed(i),e=parseFloat(s))
else{if(f=(a.split($i)[1]||"").length,$(i)&&(i=Math.min(Math.max(t.minFrac,f),t.maxFrac)),e=+(""+Math.round(+(""+e+"e"+i))+"e"+-i),p=(""+e).split($i),d=p[0],p=p[1]||"",m=0,g=t.lgSize,v=t.gSize,d.length>=g+v)for(m=d.length-g,h=0;m>h;h++)(m-h)%v===0&&0!==h&&(s+=n),s+=d.charAt(h)
for(h=m;h<d.length;h++)(d.length-h)%g===0&&0!==h&&(s+=n),s+=d.charAt(h)
for(;p.length<i;)p+="0"
i&&"0"!==i&&(s+=r+p.substr(0,i))}return 0===e&&(o=!1),u.push(o?t.negPre:t.posPre,s,o?t.negSuf:t.posSuf),u.join("")}function hn(e,t,n){var r=""
for(0>e&&(r="-",e=-e),e=""+e;e.length<t;)e="0"+e
return n&&(e=e.substr(e.length-t)),r+e}function mn(e,t,n,r){return n=n||0,function(i){var o=i["get"+e]()
return(n>0||o>-n)&&(o+=n),0===o&&-12==n&&(o=12),hn(o,t,r)}}function gn(e,t){return function(n,r){var i=n["get"+e](),o=Bo(t?"SHORT"+e:e)
return r[o][i]}}function $n(e){var t=-1*e.getTimezoneOffset(),n=t>=0?"+":""
return n+=hn(Math[t>0?"floor":"ceil"](t/60),2)+hn(Math.abs(t%60),2)}function vn(e){var t=new Date(e,0,1).getDay()
return new Date(e,0,(4>=t?5:12)-t)}function yn(e){return new Date(e.getFullYear(),e.getMonth(),e.getDate()+(4-e.getDay()))}function wn(e){return function(t){var n=vn(t.getFullYear()),r=yn(t),i=+r-+n,o=1+Math.round(i/6048e5)
return hn(o,e)}}function bn(e,t){return e.getHours()<12?t.AMPMS[0]:t.AMPMS[1]}function xn(e,t){return e.getFullYear()<=0?t.ERAS[0]:t.ERAS[1]}function Cn(e,t){return e.getFullYear()<=0?t.ERANAMES[0]:t.ERANAMES[1]}function kn(e){function t(e){var t,r,i,o,a,s,u,l,c,f
return(t=e.match(n))?(r=new Date(0),i=0,o=0,a=t[8]?r.setUTCFullYear:r.setFullYear,s=t[8]?r.setUTCHours:r.setHours,t[9]&&(i=p(t[9]+t[10]),o=p(t[9]+t[11])),a.call(r,p(t[1]),p(t[2])-1,p(t[3])),u=p(t[4]||0)-i,l=p(t[5]||0)-o,c=p(t[6]||0),f=Math.round(1e3*parseFloat("0."+(t[7]||0))),s.call(r,u,l,c,f),r):e}var n=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/
return function(n,r,i){var a,s,u="",l=[]
if(r=r||"mediumDate",r=e.DATETIME_FORMATS[r]||r,w(n)&&(n=wi.test(n)?p(n):t(n)),b(n)&&(n=new Date(n)),!x(n))return n
for(;r;)s=yi.exec(r),s?(l=I(l,s,1),r=l.pop()):(l.push(r),r=null)
return i&&"UTC"===i&&(n=new Date(n.getTime()),n.setMinutes(n.getMinutes()+n.getTimezoneOffset())),o(l,function(t){a=vi[t],u+=a?a(n,e.DATETIME_FORMATS):t.replace(/(^'|'$)/g,"").replace(/''/g,"'")}),u}}function Sn(){return function(e,t){return $(t)&&(t=2),U(e,t)}}function Tn(){return function(e,t){return b(e)&&(e=""+e),ir(e)||w(e)?(t=Math.abs(+t)===1/0?+t:p(t),t?t>0?e.slice(0,t):e.slice(t):w(e)?"":[]):e}}function An(e){return function(t,n,r){function o(e,t){var r,i
for(r=0;r<n.length;r++)if(i=n[r](e,t),0!==i)return i
return 0}function a(e,t){return t?function(t,n){return e(n,t)}:e}function s(e){switch(typeof e){case"number":case"boolean":case"string":return!0
default:return!1}}function u(e){return null===e?"null":"function"==typeof e.valueOf&&(e=e.valueOf(),s(e))?e:"function"==typeof e.toString&&(e=""+e,s(e))?e:""}function l(e,t){var n=typeof e,r=typeof t
return n===r&&"object"===n&&(e=u(e),t=u(t)),n===r?("string"===n&&(e=e.toLowerCase(),t=t.toLowerCase()),e===t?0:t>e?-1:1):r>n?-1:1}return i(t)?(n=ir(n)?n:[n],0===n.length&&(n=["+"]),n=n.map(function(t){var n,r=!1,i=t||m
if(w(t)){if(("+"==t.charAt(0)||"-"==t.charAt(0))&&(r="-"==t.charAt(0),t=t.substring(1)),""===t)return a(l,r)
if(i=e(t),i.constant)return n=i(),a(function(e,t){return l(e[n],t[n])},r)}return a(function(e,t){return l(i(e),i(t))},r)}),Jn.call(t).sort(a(o,r))):t}}function En(e){return C(e)&&(e={link:e}),e.restrict=e.restrict||"AC",g(e)}function Nn(e,t){e.$name=t}function _n(e,t,r,i,a){var s=this,u=[],l=s.$$parentForm=e.parent().controller("form")||Si
s.$error={},s.$$success={},s.$pending=n,s.$name=a(t.name||t.ngForm||"")(r),s.$dirty=!1,s.$pristine=!0,s.$valid=!0,s.$invalid=!1,s.$submitted=!1,l.$addControl(s),s.$rollbackViewValue=function(){o(u,function(e){e.$rollbackViewValue()})},s.$commitViewValue=function(){o(u,function(e){e.$commitViewValue()})},s.$addControl=function(e){ae(e.$name,"input"),u.push(e),e.$name&&(s[e.$name]=e)},s.$$renameControl=function(e,t){var n=e.$name
s[n]===e&&delete s[n],s[t]=e,e.$name=t},s.$removeControl=function(e){e.$name&&s[e.$name]===e&&delete s[e.$name],o(s.$pending,function(t,n){s.$setValidity(n,null,e)}),o(s.$error,function(t,n){s.$setValidity(n,null,e)}),o(s.$$success,function(t,n){s.$setValidity(n,null,e)}),P(u,e)},Wn({ctrl:this,$element:e,set:function(e,t,n){var r,i=e[t]
i?(r=i.indexOf(n),-1===r&&i.push(n)):e[t]=[n]},unset:function(e,t,n){var r=e[t]
r&&(P(r,n),0===r.length&&delete e[t])},parentForm:l,$animate:i}),s.$setDirty=function(){i.removeClass(e,so),i.addClass(e,uo),s.$dirty=!0,s.$pristine=!1,l.$setDirty()},s.$setPristine=function(){i.setClass(e,so,uo+" "+Ti),s.$dirty=!1,s.$pristine=!0,s.$submitted=!1,o(u,function(e){e.$setPristine()})},s.$setUntouched=function(){o(u,function(e){e.$setUntouched()})},s.$setSubmitted=function(){i.addClass(e,Ti),s.$submitted=!0,l.$setSubmitted()}}function Dn(e){e.$formatters.push(function(t){return e.$isEmpty(t)?t:""+t})}function On(e,t,n,r,i,o){Mn(e,t,n,r,i,o),Dn(r)}function Mn(e,t,n,r,i,o){var a,s,u,l,c=Vo(t[0].type)
i.android||(a=!1,t.on("compositionstart",function(){a=!0}),t.on("compositionend",function(){a=!1,s()})),s=function(e){if(u&&(o.defer.cancel(u),u=null),!a){var i=t.val(),s=e&&e.type
"password"===c||n.ngTrim&&"false"===n.ngTrim||(i=or(i)),(r.$viewValue!==i||""===i&&r.$$hasNativeValidators)&&r.$setViewValue(i,s)}},i.hasEvent("input")?t.on("input",s):(l=function(e,t,n){u||(u=o.defer(function(){u=null,t&&t.value===n||s(e)}))},t.on("keydown",function(e){var t=e.keyCode
91===t||t>15&&19>t||t>=37&&40>=t||l(e,this,this.value)}),i.hasEvent("paste")&&t.on("paste cut",l)),t.on("change",s),r.$render=function(){t.val(r.$isEmpty(r.$viewValue)?"":r.$viewValue)}}function jn(e,t){var n,r,i,o,a,s,u,l,c
return x(e)?e:w(e)&&(qi.lastIndex=0,n=qi.exec(e))?(r=+n[1],i=+n[2],o=0,a=0,s=0,u=0,l=vn(r),c=7*(i-1),t&&(o=t.getHours(),a=t.getMinutes(),s=t.getSeconds(),u=t.getMilliseconds()),new Date(r,0,l.getDate()+c,o,a,s,u)):NaN}function Pn(e,t){return function(n,r){var i,a
if(x(n))return n
if(w(n)){if('"'==n.charAt(0)&&'"'==n.charAt(n.length-1)&&(n=n.substring(1,n.length-1)),_i.test(n))return new Date(n)
if(e.lastIndex=0,i=e.exec(n))return i.shift(),a=r?{yyyy:r.getFullYear(),MM:r.getMonth()+1,dd:r.getDate(),HH:r.getHours(),mm:r.getMinutes(),ss:r.getSeconds(),sss:r.getMilliseconds()/1e3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},o(i,function(e,n){n<t.length&&(a[t[n]]=+e)}),new Date(a.yyyy,a.MM-1,a.dd,a.HH,a.mm,a.ss||0,1e3*a.sss||0)}return NaN}}function qn(e,t,r,i){return function(o,a,s,u,l,c,f){function p(e){return e&&!(e.getTime&&e.getTime()!==e.getTime())}function d(e){return v(e)?x(e)?e:r(e):n}var h,m,g,y
Ln(o,a,s,u),Mn(o,a,s,u,l,c),h=u&&u.$options&&u.$options.timezone,u.$$parserName=e,u.$parsers.push(function(e){if(u.$isEmpty(e))return null
if(t.test(e)){var i=r(e,m)
return"UTC"===h&&i.setMinutes(i.getMinutes()-i.getTimezoneOffset()),i}return n}),u.$formatters.push(function(e){if(e&&!x(e))throw po("datefmt","Expected `{0}` to be a date",e)
if(p(e)){if(m=e,m&&"UTC"===h){var t=6e4*m.getTimezoneOffset()
m=new Date(m.getTime()+t)}return f("date")(e,i,h)}return m=null,""}),(v(s.min)||s.ngMin)&&(u.$validators.min=function(e){return!p(e)||$(g)||r(e)>=g},s.$observe("min",function(e){g=d(e),u.$validate()})),(v(s.max)||s.ngMax)&&(u.$validators.max=function(e){return!p(e)||$(y)||r(e)<=y},s.$observe("max",function(e){y=d(e),u.$validate()}))}}function Ln(e,t,r,i){var o=t[0],a=i.$$hasNativeValidators=y(o.validity)
a&&i.$parsers.push(function(e){var r=t.prop(Fo)||{}
return r.badInput&&!r.typeMismatch?n:e})}function Rn(e,t,r,i,o,a){var s,u
Ln(e,t,r,i),Mn(e,t,r,i,o,a),i.$$parserName="number",i.$parsers.push(function(e){return i.$isEmpty(e)?null:Mi.test(e)?parseFloat(e):n}),i.$formatters.push(function(e){if(!i.$isEmpty(e)){if(!b(e))throw po("numfmt","Expected `{0}` to be a number",e)
e=""+e}return e}),(v(r.min)||r.ngMin)&&(i.$validators.min=function(e){return i.$isEmpty(e)||$(s)||e>=s},r.$observe("min",function(e){v(e)&&!b(e)&&(e=parseFloat(e,10)),s=b(e)&&!isNaN(e)?e:n,i.$validate()})),(v(r.max)||r.ngMax)&&(i.$validators.max=function(e){return i.$isEmpty(e)||$(u)||u>=e},r.$observe("max",function(e){v(e)&&!b(e)&&(e=parseFloat(e,10)),u=b(e)&&!isNaN(e)?e:n,i.$validate()}))}function In(e,t,n,r,i,o){Mn(e,t,n,r,i,o),Dn(r),r.$$parserName="url",r.$validators.url=function(e,t){var n=e||t
return r.$isEmpty(n)||Di.test(n)}}function Hn(e,t,n,r,i,o){Mn(e,t,n,r,i,o),Dn(r),r.$$parserName="email",r.$validators.email=function(e,t){var n=e||t
return r.$isEmpty(n)||Oi.test(n)}}function Fn(e,t,n,r){$(n.name)&&t.attr("name",l())
var i=function(e){t[0].checked&&r.$setViewValue(n.value,e&&e.type)}
t.on("click",i),r.$render=function(){var e=n.value
t[0].checked=e==r.$viewValue},n.$observe("value",r.$render)}function Vn(e,t,n,i,o){var a
if(v(i)){if(a=e(i),!a.constant)throw r("ngModel")("constexpr","Expected constant expression for `{0}`, but saw `{1}`.",n,i)
return a(t)}return o}function Un(e,t,n,r,i,o,a,s){var u=Vn(s,e,"ngTrueValue",n.ngTrueValue,!0),l=Vn(s,e,"ngFalseValue",n.ngFalseValue,!1),c=function(e){r.$setViewValue(t[0].checked,e&&e.type)}
t.on("click",c),r.$render=function(){t[0].checked=r.$viewValue},r.$isEmpty=function(e){return e===!1},r.$formatters.push(function(e){return R(e,u)}),r.$parsers.push(function(e){return e?u:l})}function Bn(e,t){return e="ngClass"+e,["$animate",function(n){function r(e,t){var n,r,i,o=[]
e:for(n=0;n<e.length;n++){for(r=e[n],i=0;i<t.length;i++)if(r==t[i])continue e
o.push(r)}return o}function i(e){if(ir(e))return e
if(w(e))return e.split(" ")
if(y(e)){var t=[]
return o(e,function(e,n){e&&(t=t.concat(n.split(" ")))}),t}return e}return{restrict:"AC",link:function(a,s,u){function l(e){var t=f(e,1)
u.$addClass(t)}function c(e){var t=f(e,-1)
u.$removeClass(t)}function f(e,t){var n=s.data("$classCounts")||{},r=[]
return o(e,function(e){(t>0||n[e])&&(n[e]=(n[e]||0)+t,n[e]===+(t>0)&&r.push(e))}),s.data("$classCounts",n),r.join(" ")}function p(e,t){var i=r(t,e),o=r(e,t)
i=f(i,1),o=f(o,-1),i&&i.length&&n.addClass(s,i),o&&o.length&&n.removeClass(s,o)}function d(e){var n,r;(t===!0||a.$index%2===t)&&(n=i(e||[]),h?R(e,h)||(r=i(h),p(r,n)):l(n)),h=L(e)}var h
a.$watch(u[e],d,!0),u.$observe("class",function(){d(a.$eval(u[e]))}),"ngClass"!==e&&a.$watch("$index",function(n,r){var o,s=1&n
s!==(1&r)&&(o=i(a.$eval(u[e])),s===t?l(o):c(o))})}}}]}function Wn(e){function t(e,t,u){t===n?r("$pending",e,u):i("$pending",e,u),_(t)?t?(f(s.$error,e,u),c(s.$$success,e,u)):(c(s.$error,e,u),f(s.$$success,e,u)):(f(s.$error,e,u),f(s.$$success,e,u)),s.$pending?(o(fo,!0),s.$valid=s.$invalid=n,a("",null)):(o(fo,!1),s.$valid=zn(s.$error),s.$invalid=!s.$valid,a("",s.$valid))
var l
l=s.$pending&&s.$pending[e]?n:s.$error[e]?!1:s.$$success[e]?!0:null,a(e,l),p.$setValidity(e,l,s)}function r(e,t,n){s[e]||(s[e]={}),c(s[e],t,n)}function i(e,t,r){s[e]&&f(s[e],t,r),zn(s[e])&&(s[e]=n)}function o(e,t){t&&!l[e]?(d.addClass(u,e),l[e]=!0):!t&&l[e]&&(d.removeClass(u,e),l[e]=!1)}function a(e,t){e=e?"-"+ne(e,"-"):"",o(oo+e,t===!0),o(ao+e,t===!1)}var s=e.ctrl,u=e.$element,l={},c=e.set,f=e.unset,p=e.parentForm,d=e.$animate
l[ao]=!(l[oo]=u.hasClass(oo)),s.$setValidity=t}function zn(e){if(e)for(var t in e)return!1
return!0}var Gn,Xn,Yn,Jn,Kn,Zn,Qn,er,tr,nr,rr,ir,or,ar,sr,ur,lr,cr,fr,pr,dr,hr,mr,gr,$r,vr,yr,wr,br,xr,Cr,kr,Sr,Tr,Ar,Er,Nr,_r,Dr,Or,Mr,jr,Pr,qr,Lr,Rr,Ir,Hr,Fr,Vr,Ur,Br,Wr,zr,Gr,Xr,Yr,Jr,Kr,Zr,Qr,ei,ti,ni,ri,ii,oi,ai,si,ui,li,ci,fi,pi,di,hi,mi,gi,$i,vi,yi,wi,bi,xi,Ci,ki,Si,Ti,Ai,Ei,Ni,_i,Di,Oi,Mi,ji,Pi,qi,Li,Ri,Ii,Hi,Fi,Vi,Ui,Bi,Wi,zi,Gi,Xi,Yi,Ji,Ki,Zi,Qi,eo,to,no,ro,io,oo,ao,so,uo,lo,co,fo,po,ho,mo,go,$o,vo,yo,wo,bo,xo,Co,ko,So,To,Ao,Eo,No,_o,Do,Oo,Mo,jo,Po,qo,Lo,Ro,Io,Ho=/^\/(.+)\/([a-z]*)$/,Fo="validity",Vo=function(e){return w(e)?e.toLowerCase():e},Uo=Object.prototype.hasOwnProperty,Bo=function(e){return w(e)?e.toUpperCase():e},Wo=function(e){return w(e)?e.replace(/[A-Z]/g,function(e){return String.fromCharCode(32|e.charCodeAt(0))}):e},zo=function(e){return w(e)?e.replace(/[a-z]/g,function(e){return String.fromCharCode(-33&e.charCodeAt(0))}):e}
return"i"!=="I".toLowerCase()&&(Vo=Wo,Bo=zo),Jn=[].slice,Kn=[].splice,Zn=[].push,Qn=Object.prototype.toString,er=r("ng"),tr=e.angular||(e.angular={}),rr=0,Gn=t.documentMode,h.$inject=[],m.$inject=[],ir=Array.isArray,or=function(e){return w(e)?e.trim():e},ar=function(e){return e.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},sr=function(){if(v(sr.isActive_))return sr.isActive_
var e=!(!t.querySelector("[ng-csp]")&&!t.querySelector("[data-ng-csp]"))
if(!e)try{Function("")}catch(n){e=!0}return sr.isActive_=e},ur=["ng-","data-ng-","ng:","x-ng-"],lr=/[A-Z]/g,cr=!1,pr=1,dr=3,hr=8,mr=9,gr=11,$r={full:"1.3.15",major:1,minor:3,dot:15,codeName:"locality-filtration"},we.expando="ng339",vr=we.cache={},yr=1,wr=function(e,t,n){e.addEventListener(t,n,!1)},br=function(e,t,n){e.removeEventListener(t,n,!1)},we._data=function(e){return this.cache[e[this.expando]]||{}},xr=/([\:\-\_]+(.))/g,Cr=/^moz([A-Z])/,kr={mouseleave:"mouseout",mouseenter:"mouseover"},Sr=r("jqLite"),Tr=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,Ar=/<|&#?\w+;/,Er=/<([\w:]+)/,Nr=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,_r={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]},_r.optgroup=_r.option,_r.tbody=_r.tfoot=_r.colgroup=_r.caption=_r.thead,_r.th=_r.td,Dr=we.prototype={ready:function(n){function r(){i||(i=!0,n())}var i=!1
"complete"===t.readyState?setTimeout(r):(this.on("DOMContentLoaded",r),we(e).on("load",r))},toString:function(){var e=[]
return o(this,function(t){e.push(""+t)}),"["+e.join(", ")+"]"},eq:function(e){return Xn(e>=0?this[e]:this[this.length+e])},length:0,push:Zn,sort:[].sort,splice:[].splice},Or={},o("multiple,selected,checked,disabled,readOnly,required,open".split(","),function(e){Or[Vo(e)]=e}),Mr={},o("input,select,option,textarea,button,form,details".split(","),function(e){Mr[e]=!0}),jr={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"},o({data:Te,removeData:ke},function(e,t){we[t]=e}),o({data:Te,inheritedData:Oe,scope:function(e){return Xn.data(e,"$scope")||Oe(e.parentNode||e,["$isolateScope","$scope"])},isolateScope:function(e){return Xn.data(e,"$isolateScope")||Xn.data(e,"$isolateScopeNoTemplate")},controller:De,injector:function(e){return Oe(e,"$injector")},removeAttr:function(e,t){e.removeAttribute(t)},hasClass:Ae,css:function(e,t,r){return t=me(t),v(r)?(e.style[t]=r,n):e.style[t]},attr:function(e,t,r){var i,o=Vo(t)
if(Or[o]){if(!v(r))return e[t]||(e.attributes.getNamedItem(t)||h).specified?o:n
r?(e[t]=!0,e.setAttribute(t,o)):(e[t]=!1,e.removeAttribute(o))}else if(v(r))e.setAttribute(t,r)
else if(e.getAttribute)return i=e.getAttribute(t,2),null===i?n:i},prop:function(e,t,r){return v(r)?(e[t]=r,n):e[t]},text:function(){function e(e,t){if($(t)){var n=e.nodeType
return n===pr||n===dr?e.textContent:""}e.textContent=t}return e.$dv="",e}(),val:function(e,t){if($(t)){if(e.multiple&&"select"===j(e)){var n=[]
return o(e.options,function(e){e.selected&&n.push(e.value||e.text)}),0===n.length?null:n}return e.value}e.value=t},html:function(e,t){return $(t)?e.innerHTML:(xe(e,!0),e.innerHTML=t,n)},empty:Me},function(e,t){we.prototype[t]=function(t,r){var i,o,a,s,u,l,c=this.length
if(e!==Me&&(2==e.length&&e!==Ae&&e!==De?t:r)===n){if(y(t)){for(i=0;c>i;i++)if(e===Te)e(this[i],t)
else for(o in t)e(this[i],o,t[o])
return this}for(a=e.$dv,s=a===n?Math.min(c,1):c,u=0;s>u;u++)l=e(this[u],t,r),a=a?a+l:l
return a}for(i=0;c>i;i++)e(this[i],t,r)
return this}}),o({removeData:ke,on:function Go(e,t,n,r){var i,o,a,s,u,l
if(v(r))throw Sr("onargs","jqLite#on() does not support the `selector` or `eventData` parameters")
if($e(e))for(i=Se(e,!0),o=i.events,a=i.handle,a||(a=i.handle=Re(e,o)),s=t.indexOf(" ")>=0?t.split(" "):[t],u=s.length;u--;)t=s[u],l=o[t],l||(o[t]=[],"mouseenter"===t||"mouseleave"===t?Go(e,kr[t],function(e){var n=this,r=e.relatedTarget;(!r||r!==n&&!n.contains(r))&&a(e,t)}):"$destroy"!==t&&wr(e,t,a),l=o[t]),l.push(n)},off:Ce,one:function(e,t,n){e=Xn(e),e.on(t,function r(){e.off(t,n),e.off(t,r)}),e.on(t,n)},replaceWith:function(e,t){var n,r=e.parentNode
xe(e),o(new we(t),function(t){n?r.insertBefore(t,n.nextSibling):r.replaceChild(t,e),n=t})},children:function(e){var t=[]
return o(e.childNodes,function(e){e.nodeType===pr&&t.push(e)}),t},contents:function(e){return e.contentDocument||e.childNodes||[]},append:function(e,t){var n,r,i,o=e.nodeType
if(o===pr||o===gr)for(t=new we(t),n=0,r=t.length;r>n;n++)i=t[n],e.appendChild(i)},prepend:function(e,t){if(e.nodeType===pr){var n=e.firstChild
o(new we(t),function(t){e.insertBefore(t,n)})}},wrap:function(e,t){t=Xn(t).eq(0).clone()[0]
var n=e.parentNode
n&&n.replaceChild(t,e),t.appendChild(e)},remove:je,detach:function(e){je(e,!0)},after:function(e,t){var n,r,i,o=e,a=e.parentNode
for(t=new we(t),n=0,r=t.length;r>n;n++)i=t[n],a.insertBefore(i,o.nextSibling),o=i},addClass:Ne,removeClass:Ee,toggleClass:function(e,t,n){t&&o(t.split(" "),function(t){var r=n
$(r)&&(r=!Ae(e,t)),(r?Ne:Ee)(e,t)})},parent:function(e){var t=e.parentNode
return t&&t.nodeType!==gr?t:null},next:function(e){return e.nextElementSibling},find:function(e,t){return e.getElementsByTagName?e.getElementsByTagName(t):[]},clone:be,triggerHandler:function(e,t,n){var r,i,a,s=t.type||t,u=Se(e),l=u&&u.events,c=l&&l[s]
c&&(r={preventDefault:function(){this.defaultPrevented=!0},isDefaultPrevented:function(){return this.defaultPrevented===!0},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return this.immediatePropagationStopped===!0},stopPropagation:h,type:s,target:e},t.type&&(r=f(r,t)),i=L(c),a=n?[r].concat(n):[r],o(i,function(t){r.isImmediatePropagationStopped()||t.apply(e,a)}))}},function(e,t){we.prototype[t]=function(t,n,r){var i,o,a
for(o=0,a=this.length;a>o;o++)$(i)?(i=e(this[o],t,n,r),v(i)&&(i=Xn(i))):_e(i,e(this[o],t,n,r))
return v(i)?i:this},we.prototype.bind=we.prototype.on,we.prototype.unbind=we.prototype.off}),Fe.prototype={put:function(e,t){this[He(e,this.nextUid)]=t},get:function(e){return this[He(e,this.nextUid)]},remove:function(e){var t=this[e=He(e,this.nextUid)]
return delete this[e],t}},Pr=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,qr=/,/,Lr=/^\s*(_?)(\S+?)\1\s*$/,Rr=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,Ir=r("$injector"),Be.$$annotate=Ue,Hr=r("$animate"),Fr=["$provide",function(e){this.$$selectors={},this.register=function(t,n){var r=t+"-animation"
if(t&&"."!=t.charAt(0))throw Hr("notcsel","Expecting class selector starting with '.' got '{0}'.",t)
this.$$selectors[t.substr(1)]=r,e.factory(r,n)},this.classNameFilter=function(e){return 1===arguments.length&&(this.$$classNameFilter=e instanceof RegExp?e:null),this.$$classNameFilter},this.$get=["$$q","$$asyncCallback","$rootScope",function(e,t,n){function r(t){var r,i=e.defer()
return i.promise.$$cancelFn=function(){r&&r()},n.$$postDigest(function(){r=t(function(){i.resolve()})}),i.promise}function i(e,t){var n=[],r=[],i=le()
return o((e.attr("class")||"").split(/\s+/),function(e){i[e]=!0}),o(t,function(e,t){var o=i[t]
e===!1&&o?r.push(t):e!==!0||o||n.push(t)}),n.length+r.length>0&&[n.length?n:null,r.length?r:null]}function a(e,t,n){var r,i,o
for(r=0,i=t.length;i>r;++r)o=t[r],e[o]=n}function s(){return l||(l=e.defer(),t(function(){l.resolve(),l=null})),l.promise}function u(e,t){if(tr.isObject(t)){var n=f(t.from||{},t.to||{})
e.css(n)}}var l
return{animate:function(e,t,n){return u(e,{from:t,to:n}),s()},enter:function(e,t,n,r){return u(e,r),n?n.after(e):t.prepend(e),s()},leave:function(e,t){return u(e,t),e.remove(),s()},move:function(e,t,n,r){return this.enter(e,t,n,r)},addClass:function(e,t,n){return this.setClass(e,t,[],n)},$$addClassImmediately:function(e,t,n){return e=Xn(e),t=w(t)?t:ir(t)?t.join(" "):"",o(e,function(e){Ne(e,t)}),u(e,n),s()},removeClass:function(e,t,n){return this.setClass(e,[],t,n)},$$removeClassImmediately:function(e,t,n){return e=Xn(e),t=w(t)?t:ir(t)?t.join(" "):"",o(e,function(e){Ee(e,t)}),u(e,n),s()},setClass:function(e,t,n,o){var s,u,l=this,c="$$animateClasses",f=!1
return e=Xn(e),s=e.data(c),s?o&&s.options&&(s.options=tr.extend(s.options||{},o)):(s={classes:{},options:o},f=!0),u=s.classes,t=ir(t)?t:t.split(" "),n=ir(n)?n:n.split(" "),a(u,t,!0),a(u,n,!1),f&&(s.promise=r(function(t){var n,r=e.data(c)
e.removeData(c),r&&(n=i(e,r.classes),n&&l.$$setClassImmediately(e,n[0],n[1],r.options)),t()}),e.data(c,s)),s.promise},$$setClassImmediately:function(e,t,n,r){return t&&this.$$addClassImmediately(e,t),n&&this.$$removeClassImmediately(e,n),u(e,r),s()},enabled:h,cancel:h}}]}],Vr=r("$compile"),Ke.$inject=["$provide","$$sanitizeUriProvider"],Ur=/^((?:x|data)[\:\-_])/i,Br=r("$controller"),Wr="application/json",zr={"Content-Type":Wr+";charset=utf-8"},Gr=/^\[|^\{(?!\{)/,Xr={"[":/]$/,"{":/}$/},Yr=/^\)\]\}',?\n/,Jr=r("$interpolate"),Kr=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,Zr={http:80,https:443,ftp:21},Qr=r("$location"),ei={$$html5:!1,$$replace:!1,absUrl:Et("$$absUrl"),url:function(e){if($(e))return this.$$url
var t=Kr.exec(e)
return(t[1]||""===e)&&this.path(decodeURIComponent(t[1])),(t[2]||t[1]||""===e)&&this.search(t[3]||""),this.hash(t[5]||""),this},protocol:Et("$$protocol"),host:Et("$$host"),port:Et("$$port"),path:Nt("$$path",function(e){return e=null!==e?""+e:"","/"==e.charAt(0)?e:"/"+e}),search:function(e,t){switch(arguments.length){case 0:return this.$$search
case 1:if(w(e)||b(e))e=""+e,this.$$search=G(e)
else{if(!y(e))throw Qr("isrcharg","The first argument of the `$location#search()` call must be a string or an object.")
e=q(e,{}),o(e,function(t,n){null==t&&delete e[n]}),this.$$search=e}break
default:$(t)||null===t?delete this.$$search[e]:this.$$search[e]=t}return this.$$compose(),this},hash:Nt("$$hash",function(e){return null!==e?""+e:""}),replace:function(){return this.$$replace=!0,this}},o([At,Tt,St],function(e){e.prototype=Object.create(ei),e.prototype.state=function(t){if(!arguments.length)return this.$$state
if(e!==St||!this.$$html5)throw Qr("nostate","History API state support is available only in HTML5 mode and only in browsers supporting HTML5 History API")
return this.$$state=$(t)?null:t,this}}),ti=r("$parse"),ni=Function.prototype.call,ri=Function.prototype.apply,ii=Function.prototype.bind,oi=le(),o({"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:function(){}},function(e,t){e.constant=e.literal=e.sharedGetter=!0,oi[t]=e}),oi["this"]=function(e){return e},oi["this"].sharedGetter=!0,ai=f(le(),{"+":function(e,t,r,i){return r=r(e,t),i=i(e,t),v(r)?v(i)?r+i:r:v(i)?i:n},"-":function(e,t,n,r){return n=n(e,t),r=r(e,t),(v(n)?n:0)-(v(r)?r:0)},"*":function(e,t,n,r){return n(e,t)*r(e,t)},"/":function(e,t,n,r){return n(e,t)/r(e,t)},"%":function(e,t,n,r){return n(e,t)%r(e,t)},"===":function(e,t,n,r){return n(e,t)===r(e,t)},"!==":function(e,t,n,r){return n(e,t)!==r(e,t)},"==":function(e,t,n,r){return n(e,t)==r(e,t)},"!=":function(e,t,n,r){return n(e,t)!=r(e,t)},"<":function(e,t,n,r){return n(e,t)<r(e,t)},">":function(e,t,n,r){return n(e,t)>r(e,t)},"<=":function(e,t,n,r){return n(e,t)<=r(e,t)},">=":function(e,t,n,r){return n(e,t)>=r(e,t)},"&&":function(e,t,n,r){return n(e,t)&&r(e,t)},"||":function(e,t,n,r){return n(e,t)||r(e,t)},"!":function(e,t,n){return!n(e,t)},"=":!0,"|":!0}),si={n:"\n",f:"\f",r:"\r",t:"  ",v:"","'":"'",'"':'"'},ui=function(e){this.options=e},ui.prototype={constructor:ui,lex:function(e){var t,n,r,i,o,a,s
for(this.text=e,this.index=0,this.tokens=[];this.index<this.text.length;)t=this.text.charAt(this.index),'"'===t||"'"===t?this.readString(t):this.isNumber(t)||"."===t&&this.isNumber(this.peek())?this.readNumber():this.isIdent(t)?this.readIdent():this.is(t,"(){}[].,;:?")?(this.tokens.push({index:this.index,text:t}),this.index++):this.isWhitespace(t)?this.index++:(n=t+this.peek(),r=n+this.peek(2),i=ai[t],o=ai[n],a=ai[r],i||o||a?(s=a?r:o?n:t,this.tokens.push({index:this.index,text:s,operator:!0}),this.index+=s.length):this.throwError("Unexpected next character ",this.index,this.index+1))
return this.tokens},is:function(e,t){return-1!==t.indexOf(e)},peek:function(e){var t=e||1
return this.index+t<this.text.length?this.text.charAt(this.index+t):!1},isNumber:function(e){return e>="0"&&"9">=e&&"string"==typeof e},isWhitespace:function(e){return" "===e||"\r"===e||" "===e||"\n"===e||""===e||" "===e},isIdent:function(e){return e>="a"&&"z">=e||e>="A"&&"Z">=e||"_"===e||"$"===e},isExpOperator:function(e){return"-"===e||"+"===e||this.isNumber(e)},throwError:function(e,t,n){n=n||this.index
var r=v(t)?"s "+t+"-"+this.index+" ["+this.text.substring(t,n)+"]":" "+n
throw ti("lexerr","Lexer Error: {0} at column{1} in expression [{2}].",e,r,this.text)},readNumber:function(){for(var e,t,n="",r=this.index;this.index<this.text.length;){if(e=Vo(this.text.charAt(this.index)),"."==e||this.isNumber(e))n+=e
else if(t=this.peek(),"e"==e&&this.isExpOperator(t))n+=e
else if(this.isExpOperator(e)&&t&&this.isNumber(t)&&"e"==n.charAt(n.length-1))n+=e
else{if(!this.isExpOperator(e)||t&&this.isNumber(t)||"e"!=n.charAt(n.length-1))break
this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:r,text:n,constant:!0,value:+n})},readIdent:function(){for(var e,t=this.index;this.index<this.text.length&&(e=this.text.charAt(this.index),this.isIdent(e)||this.isNumber(e));)this.index++
this.tokens.push({index:t,text:this.text.slice(t,this.index),identifier:!0})},readString:function(e){var t,r,i,o,a,s,u=this.index
for(this.index++,t="",r=e,i=!1;this.index<this.text.length;){if(o=this.text.charAt(this.index),r+=o,i)"u"===o?(a=this.text.substring(this.index+1,this.index+5),a.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+a+"]"),this.index+=4,t+=String.fromCharCode(parseInt(a,16))):(s=si[o],t+=s||o),i=!1
else if("\\"===o)i=!0
else{if(o===e)return this.index++,this.tokens.push({index:u,text:r,constant:!0,value:t}),n
t+=o}this.index++}this.throwError("Unterminated quote",u)}},li=function(e,t,n){this.lexer=e,this.$filter=t,this.options=n},li.ZERO=f(function(){return 0},{sharedGetter:!0,constant:!0}),li.prototype={constructor:li,parse:function(e){this.text=e,this.tokens=this.lexer.lex(e)
var t=this.statements()
return 0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]),t.literal=!!t.literal,t.constant=!!t.constant,t},primary:function(){var e,t,n
this.expect("(")?(e=this.filterChain(),this.consume(")")):this.expect("[")?e=this.arrayDeclaration():this.expect("{")?e=this.object():this.peek().identifier&&this.peek().text in oi?e=oi[this.consume().text]:this.peek().identifier?e=this.identifier():this.peek().constant?e=this.constant():this.throwError("not a primary expression",this.peek())
for(;t=this.expect("(","[",".");)"("===t.text?(e=this.functionCall(e,n),n=null):"["===t.text?(n=e,e=this.objectIndex(e)):"."===t.text?(n=e,e=this.fieldAccess(e)):this.throwError("IMPOSSIBLE")
return e},throwError:function(e,t){throw ti("syntax","Syntax Error: Token '{0}' {1} at column {2} of the expression [{3}] starting at [{4}].",t.text,e,t.index+1,this.text,this.text.substring(t.index))},peekToken:function(){if(0===this.tokens.length)throw ti("ueoe","Unexpected end of expression: {0}",this.text)
return this.tokens[0]},peek:function(e,t,n,r){return this.peekAhead(0,e,t,n,r)},peekAhead:function(e,t,n,r,i){var o,a
return this.tokens.length>e&&(o=this.tokens[e],a=o.text,a===t||a===n||a===r||a===i||!t&&!n&&!r&&!i)?o:!1},expect:function(e,t,n,r){var i=this.peek(e,t,n,r)
return i?(this.tokens.shift(),i):!1},consume:function(e){if(0===this.tokens.length)throw ti("ueoe","Unexpected end of expression: {0}",this.text)
var t=this.expect(e)
return t||this.throwError("is unexpected, expecting ["+e+"]",this.peek()),t},unaryFn:function(e,t){var n=ai[e]
return f(function(e,r){return n(e,r,t)},{constant:t.constant,inputs:[t]})},binaryFn:function(e,t,n,r){var i=ai[t]
return f(function(t,r){return i(t,r,e,n)},{constant:e.constant&&n.constant,inputs:!r&&[e,n]})},identifier:function(){for(var e=this.consume().text;this.peek(".")&&this.peekAhead(1).identifier&&!this.peekAhead(2,"(");)e+=this.consume().text+this.consume().text
return Ht(e,this.options,this.text)},constant:function(){var e=this.consume().value
return f(function(){return e},{constant:!0,literal:!0})},statements:function(){for(var e=[];;)if(this.tokens.length>0&&!this.peek("}",")",";","]")&&e.push(this.filterChain()),!this.expect(";"))return 1===e.length?e[0]:function(t,n){var r,i,o
for(i=0,o=e.length;o>i;i++)r=e[i](t,n)
return r}},filterChain:function(){for(var e,t=this.expression();e=this.expect("|");)t=this.filter(t)
return t},filter:function(e){var t,r,i,o=this.$filter(this.consume().text)
if(this.peek(":"))for(t=[],r=[];this.expect(":");)t.push(this.expression())
return i=[e].concat(t||[]),f(function(i,a){var s,u=e(i,a)
if(r){for(r[0]=u,s=t.length;s--;)r[s+1]=t[s](i,a)
return o.apply(n,r)}return o(u)},{constant:!o.$stateful&&i.every(Pt),inputs:!o.$stateful&&i})},expression:function(){return this.assignment()},assignment:function(){var e,t,n=this.ternary()
return(t=this.expect("="))?(n.assign||this.throwError("implies assignment but ["+this.text.substring(0,t.index)+"] can not be assigned to",t),e=this.ternary(),f(function(t,r){return n.assign(t,e(t,r),r)},{inputs:[n,e]})):n},ternary:function(){var e,t,n,r=this.logicalOR()
return(t=this.expect("?"))&&(e=this.assignment(),this.consume(":"))?(n=this.assignment(),f(function(t,i){return r(t,i)?e(t,i):n(t,i)},{constant:r.constant&&e.constant&&n.constant})):r},logicalOR:function(){for(var e,t=this.logicalAND();e=this.expect("||");)t=this.binaryFn(t,e.text,this.logicalAND(),!0)
return t},logicalAND:function(){for(var e,t=this.equality();e=this.expect("&&");)t=this.binaryFn(t,e.text,this.equality(),!0)
return t},equality:function(){for(var e,t=this.relational();e=this.expect("==","!=","===","!==");)t=this.binaryFn(t,e.text,this.relational())
return t},relational:function(){for(var e,t=this.additive();e=this.expect("<",">","<=",">=");)t=this.binaryFn(t,e.text,this.additive())
return t},additive:function(){for(var e,t=this.multiplicative();e=this.expect("+","-");)t=this.binaryFn(t,e.text,this.multiplicative())
return t},multiplicative:function(){for(var e,t=this.unary();e=this.expect("*","/","%");)t=this.binaryFn(t,e.text,this.unary())
return t},unary:function(){var e
return this.expect("+")?this.primary():(e=this.expect("-"))?this.binaryFn(li.ZERO,e.text,this.unary()):(e=this.expect("!"))?this.unaryFn(e.text,this.unary()):this.primary()},fieldAccess:function(e){var t=this.identifier()
return f(function(r,i,o){var a=o||e(r,i)
return null==a?n:t(a)},{assign:function(n,r,i){var o=e(n,i)
return o||e.assign(n,o={},i),t.assign(o,r)}})},objectIndex:function(e){var t=this.text,r=this.expression()
return this.consume("]"),f(function(i,o){var a,s=e(i,o),u=r(i,o)
return Ot(u,t),s?a=Mt(s[u],t):n},{assign:function(n,i,o){var a=Ot(r(n,o),t),s=Mt(e(n,o),t)
return s||e.assign(n,s={},o),s[a]=i}})},functionCall:function(e,t){var r,i,o=[]
if(")"!==this.peekToken().text)do o.push(this.expression())
while(this.expect(","))
return this.consume(")"),r=this.text,i=o.length?[]:null,function(a,s){var u,l,c=t?t(a,s):v(t)?n:a,f=e(a,s,c)||h
if(i)for(u=o.length;u--;)i[u]=Mt(o[u](a,s),r)
return Mt(c,r),jt(f,r),l=f.apply?f.apply(c,i):f(i[0],i[1],i[2],i[3],i[4]),i&&(i.length=0),Mt(l,r)}},arrayDeclaration:function(){var e=[]
if("]"!==this.peekToken().text)do{if(this.peek("]"))break
e.push(this.expression())}while(this.expect(","))
return this.consume("]"),f(function(t,n){var r,i,o=[]
for(r=0,i=e.length;i>r;r++)o.push(e[r](t,n))
return o},{literal:!0,constant:e.every(Pt),inputs:e})},object:function(){var e,t=[],n=[]
if("}"!==this.peekToken().text)do{if(this.peek("}"))break
e=this.consume(),e.constant?t.push(e.value):e.identifier?t.push(e.text):this.throwError("invalid key",e),this.consume(":"),n.push(this.expression())}while(this.expect(","))
return this.consume("}"),f(function(e,r){var i,o,a={}
for(i=0,o=n.length;o>i;i++)a[t[i]]=n[i](e,r)
return a},{literal:!0,constant:n.every(Pt),inputs:n})}},ci=le(),fi=le(),pi=Object.prototype.valueOf,di=r("$sce"),hi={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Vr=r("$compile"),mi=t.createElement("a"),gi=rn(e.location.href),sn.$inject=["$provide"],fn.$inject=["$locale"],pn.$inject=["$locale"],$i=".",vi={yyyy:mn("FullYear",4),yy:mn("FullYear",2,0,!0),y:mn("FullYear",1),MMMM:gn("Month"),MMM:gn("Month",!0),MM:mn("Month",2,1),M:mn("Month",1,1),dd:mn("Date",2),d:mn("Date",1),HH:mn("Hours",2),H:mn("Hours",1),hh:mn("Hours",2,-12),h:mn("Hours",1,-12),mm:mn("Minutes",2),m:mn("Minutes",1),ss:mn("Seconds",2),s:mn("Seconds",1),sss:mn("Milliseconds",3),EEEE:gn("Day"),EEE:gn("Day",!0),a:bn,Z:$n,ww:wn(2),w:wn(1),G:xn,GG:xn,GGG:xn,GGGG:Cn},yi=/((?:[^yMdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,wi=/^\-?\d+$/,kn.$inject=["$locale"],bi=g(Vo),xi=g(Bo),An.$inject=["$parse"],Ci=g({restrict:"E",compile:function(e,t){return t.href||t.xlinkHref||t.name?n:function(e,t){if("a"===t[0].nodeName.toLowerCase()){var n="[object SVGAnimatedString]"===Qn.call(t.prop("href"))?"xlink:href":"href"
t.on("click",function(e){t.attr(n)||e.preventDefault()})}}}}),ki={},o(Or,function(e,t){if("multiple"!=e){var n=Ze("ng-"+t)
ki[n]=function(){return{restrict:"A",priority:100,link:function(e,r,i){e.$watch(i[n],function(e){i.$set(t,!!e)})}}}}}),o(jr,function(e,t){ki[t]=function(){return{priority:100,link:function(e,r,i){if("ngPattern"===t&&"/"==i.ngPattern.charAt(0)){var o=i.ngPattern.match(Ho)
if(o)return i.$set("ngPattern",RegExp(o[1],o[2])),n}e.$watch(i[t],function(e){i.$set(t,e)})}}}}),o(["src","srcset","href"],function(e){var t=Ze("ng-"+e)
ki[t]=function(){return{priority:99,link:function(r,i,o){var a=e,s=e
"href"===e&&"[object SVGAnimatedString]"===Qn.call(i.prop("href"))&&(s="xlinkHref",o.$attr[s]="xlink:href",a=null),o.$observe(t,function(t){return t?(o.$set(s,t),Gn&&a&&i.prop(a,o[s]),n):("href"===e&&o.$set(s,null),n)})}}}}),Si={$addControl:h,$$renameControl:Nn,$removeControl:h,$setValidity:h,$setDirty:h,$setPristine:h,$setSubmitted:h},Ti="ng-submitted",_n.$inject=["$element","$attrs","$scope","$animate","$interpolate"],Ai=function(e){return["$timeout",function(t){var r={name:"form",restrict:e?"EAC":"E",controller:_n,compile:function(r,i){r.addClass(so).addClass(oo)
var o=i.name?"name":e&&i.ngForm?"ngForm":!1
return{pre:function(e,r,i,a){var s,u
"action"in i||(s=function(t){e.$apply(function(){a.$commitViewValue(),a.$setSubmitted()}),t.preventDefault()},wr(r[0],"submit",s),r.on("$destroy",function(){t(function(){br(r[0],"submit",s)},0,!1)})),u=a.$$parentForm,o&&(qt(e,null,a.$name,a,a.$name),i.$observe(o,function(t){a.$name!==t&&(qt(e,null,a.$name,n,a.$name),u.$$renameControl(a,t),qt(e,null,a.$name,a,a.$name))})),r.on("$destroy",function(){u.$removeControl(a),o&&qt(e,null,i[o],n,a.$name),f(a,Si)})}}}}
return r}]},Ei=Ai(),Ni=Ai(!0),_i=/\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/,Di=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,Oi=/^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i,Mi=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,ji=/^(\d{4})-(\d{2})-(\d{2})$/,Pi=/^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,qi=/^(\d{4})-W(\d\d)$/,Li=/^(\d{4})-(\d\d)$/,Ri=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Ii={text:On,date:qn("date",ji,Pn(ji,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":qn("datetimelocal",Pi,Pn(Pi,["yyyy","MM","dd","HH","mm","ss","sss"]),"yyyy-MM-ddTHH:mm:ss.sss"),time:qn("time",Ri,Pn(Ri,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:qn("week",qi,jn,"yyyy-Www"),month:qn("month",Li,Pn(Li,["yyyy","MM"]),"yyyy-MM"),number:Rn,url:In,email:Hn,radio:Fn,checkbox:Un,hidden:h,button:h,submit:h,reset:h,file:h},Hi=["$browser","$sniffer","$filter","$parse",function(e,t,n,r){return{restrict:"E",require:["?ngModel"],link:{pre:function(i,o,a,s){s[0]&&(Ii[Vo(a.type)]||Ii.text)(i,o,a,s[0],t,e,n,r)}}}}],Fi=/^(true|false|\d+)$/,Vi=function(){return{restrict:"A",priority:100,compile:function(e,t){return Fi.test(t.ngValue)?function(e,t,n){n.$set("value",e.$eval(n.ngValue))}:function(e,t,n){e.$watch(n.ngValue,function(e){n.$set("value",e)})}}}},Ui=["$compile",function(e){return{restrict:"AC",compile:function(t){return e.$$addBindingClass(t),function(t,r,i){e.$$addBindingInfo(r,i.ngBind),r=r[0],t.$watch(i.ngBind,function(e){r.textContent=e===n?"":e})}}}}],Bi=["$interpolate","$compile",function(e,t){return{compile:function(r){return t.$$addBindingClass(r),function(r,i,o){var a=e(i.attr(o.$attr.ngBindTemplate))
t.$$addBindingInfo(i,a.expressions),i=i[0],o.$observe("ngBindTemplate",function(e){i.textContent=e===n?"":e})}}}}],Wi=["$sce","$parse","$compile",function(e,t,n){return{restrict:"A",compile:function(r,i){var o=t(i.ngBindHtml),a=t(i.ngBindHtml,function(e){return""+(e||"")})
return n.$$addBindingClass(r),function(t,r,i){n.$$addBindingInfo(r,i.ngBindHtml),t.$watch(a,function(){r.html(e.getTrustedHtml(o(t))||"")})}}}}],zi=g({restrict:"A",require:"ngModel",link:function(e,t,n,r){r.$viewChangeListeners.push(function(){e.$eval(n.ngChange)})}}),Gi=Bn("",!0),Xi=Bn("Odd",0),Yi=Bn("Even",1),Ji=En({compile:function(e,t){t.$set("ngCloak",n),e.removeClass("ng-cloak")}}),Ki=[function(){return{restrict:"A",scope:!0,controller:"@",priority:500}}],Zi={},Qi={blur:!0,focus:!0},o("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(e){var t=Ze("ng-"+e)
Zi[t]=["$parse","$rootScope",function(n,r){return{restrict:"A",compile:function(i,o){var a=n(o[t],null,!0)
return function(t,n){n.on(e,function(n){var i=function(){a(t,{$event:n})}
Qi[e]&&r.$$phase?t.$evalAsync(i):t.$apply(i)})}}}}]}),eo=["$animate",function(e){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(n,r,i,o,a){var s,u,l
n.$watch(i.ngIf,function(n){n?u||a(function(n,o){u=o,n[n.length++]=t.createComment(" end ngIf: "+i.ngIf+" "),s={clone:n},e.enter(n,r.parent(),r)}):(l&&(l.remove(),l=null),u&&(u.$destroy(),u=null),s&&(l=ue(s.clone),e.leave(l).then(function(){l=null}),s=null))})}}}],to=["$templateRequest","$anchorScroll","$animate","$sce",function(e,t,n,r){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:tr.noop,compile:function(i,o){var a=o.ngInclude||o.src,s=o.onload||"",u=o.autoscroll
return function(i,o,l,c,f){var p,d,h,m=0,g=function(){d&&(d.remove(),d=null),p&&(p.$destroy(),p=null),h&&(n.leave(h).then(function(){d=null}),d=h,h=null)}
i.$watch(r.parseAsResourceUrl(a),function(r){var a=function(){!v(u)||u&&!i.$eval(u)||t()},l=++m
r?(e(r,!0).then(function(e){var t,u
l===m&&(t=i.$new(),c.template=e,u=f(t,function(e){g(),n.enter(e,null,o).then(a)}),p=t,h=u,p.$emit("$includeContentLoaded",r),i.$eval(s))},function(){l===m&&(g(),i.$emit("$includeContentError",r))}),i.$emit("$includeContentRequested",r)):(g(),c.template=null)})}}}}],no=["$compile",function(e){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(r,i,o,a){return/SVG/.test(""+i[0])?(i.empty(),e(ve(a.template,t).childNodes)(r,function(e){i.append(e)},{futureParentElement:i}),n):(i.html(a.template),e(i.contents())(r),n)}}}],ro=En({priority:450,compile:function(){return{pre:function(e,t,n){e.$eval(n.ngInit)}}}}),io=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(e,t,r,i){var a=t.attr(r.$attr.ngList)||", ",s="false"!==r.ngTrim,u=s?or(a):a,l=function(e){if(!$(e)){var t=[]
return e&&o(e.split(u),function(e){e&&t.push(s?or(e):e)}),t}}
i.$parsers.push(l),i.$formatters.push(function(e){return ir(e)?e.join(a):n}),i.$isEmpty=function(e){return!e||!e.length}}}},oo="ng-valid",ao="ng-invalid",so="ng-pristine",uo="ng-dirty",lo="ng-untouched",co="ng-touched",fo="ng-pending",po=new r("ngModel"),ho=["$scope","$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(e,t,r,i,a,s,u,l,c,f){var p,d,m,g,y,w,x,k,S
this.$viewValue=Number.NaN,this.$modelValue=Number.NaN,this.$$rawModelValue=n,this.$validators={},this.$asyncValidators={},this.$parsers=[],this.$formatters=[],this.$viewChangeListeners=[],this.$untouched=!0,this.$touched=!1,this.$pristine=!0,this.$dirty=!1,this.$valid=!0,this.$invalid=!1,this.$error={},this.$$success={},this.$pending=n,this.$name=f(r.name||"",!1)(e),p=a(r.ngModel),d=p.assign,m=p,g=d,y=null,x=this,this.$$setOptions=function(e){if(x.$options=e,e&&e.getterSetter){var t=a(r.ngModel+"()"),n=a(r.ngModel+"($$$p)")
m=function(e){var n=p(e)
return C(n)&&(n=t(e)),n},g=function(e){C(p(e))?n(e,{$$$p:x.$modelValue}):d(e,x.$modelValue)}}else if(!p.assign)throw po("nonassign","Expression '{0}' is non-assignable. Element: {1}",r.ngModel,W(i))},this.$render=h,this.$isEmpty=function(e){return $(e)||""===e||null===e||e!==e},k=i.inheritedData("$formController")||Si,S=0,Wn({ctrl:this,$element:i,set:function(e,t){e[t]=!0},unset:function(e,t){delete e[t]},parentForm:k,$animate:s}),this.$setPristine=function(){x.$dirty=!1,x.$pristine=!0,s.removeClass(i,uo),s.addClass(i,so)},this.$setDirty=function(){x.$dirty=!0,x.$pristine=!1,s.removeClass(i,so),s.addClass(i,uo),k.$setDirty()},this.$setUntouched=function(){x.$touched=!1,x.$untouched=!0,s.setClass(i,lo,co)},this.$setTouched=function(){x.$touched=!0,x.$untouched=!1,s.setClass(i,co,lo)},this.$rollbackViewValue=function(){u.cancel(y),x.$viewValue=x.$$lastCommittedViewValue,x.$render()},this.$validate=function(){var e,t,r,i,o
b(x.$modelValue)&&isNaN(x.$modelValue)||(e=x.$$lastCommittedViewValue,t=x.$$rawModelValue,r=x.$valid,i=x.$modelValue,o=x.$options&&x.$options.allowInvalid,x.$$runValidators(t,e,function(e){o||r===e||(x.$modelValue=e?t:n,x.$modelValue!==i&&x.$$writeModelToScope())}))},this.$$runValidators=function(e,t,r){function i(){var e=x.$$parserName||"parse"
return w!==n?(w||(o(x.$validators,function(e,t){u(t,null)}),o(x.$asyncValidators,function(e,t){u(t,null)})),u(e,w),w):(u(e,null),!0)}function a(){var n=!0
return o(x.$validators,function(r,i){var o=r(e,t)
n=n&&o,u(i,o)}),n?!0:(o(x.$asyncValidators,function(e,t){u(t,null)}),!1)}function s(){var r=[],i=!0
o(x.$asyncValidators,function(o,a){var s=o(e,t)
if(!D(s))throw po("$asyncValidators","Expected asynchronous validator to return a promise but got '{0}' instead.",s)
u(a,n),r.push(s.then(function(){u(a,!0)},function(){i=!1,u(a,!1)}))}),r.length?c.all(r).then(function(){l(i)},h):l(!0)}function u(e,t){f===S&&x.$setValidity(e,t)}function l(e){f===S&&r(e)}S++
var f=S
return i()&&a()?(s(),n):(l(!1),n)},this.$commitViewValue=function(){var e=x.$viewValue
u.cancel(y),(x.$$lastCommittedViewValue!==e||""===e&&x.$$hasNativeValidators)&&(x.$$lastCommittedViewValue=e,x.$pristine&&this.$setDirty(),this.$$parseAndValidate())},this.$$parseAndValidate=function(){function t(){x.$modelValue!==i&&x.$$writeModelToScope()}var r,i,o,a=x.$$lastCommittedViewValue,s=a
if(w=$(s)?n:!0)for(r=0;r<x.$parsers.length;r++)if(s=x.$parsers[r](s),$(s)){w=!1
break}b(x.$modelValue)&&isNaN(x.$modelValue)&&(x.$modelValue=m(e)),i=x.$modelValue,o=x.$options&&x.$options.allowInvalid,x.$$rawModelValue=s,o&&(x.$modelValue=s,t()),x.$$runValidators(s,x.$$lastCommittedViewValue,function(e){o||(x.$modelValue=e?s:n,t())})},this.$$writeModelToScope=function(){g(e,x.$modelValue),o(x.$viewChangeListeners,function(e){try{e()}catch(n){t(n)}})},this.$setViewValue=function(e,t){x.$viewValue=e,(!x.$options||x.$options.updateOnDefault)&&x.$$debounceViewValueCommit(t)},this.$$debounceViewValueCommit=function(t){var n,r=0,i=x.$options
i&&v(i.debounce)&&(n=i.debounce,b(n)?r=n:b(n[t])?r=n[t]:b(n["default"])&&(r=n["default"])),u.cancel(y),r?y=u(function(){x.$commitViewValue()},r):l.$$phase?x.$commitViewValue():e.$apply(function(){x.$commitViewValue()})},e.$watch(function(){var t,r,i,o=m(e)
if(o!==x.$modelValue){for(x.$modelValue=x.$$rawModelValue=o,w=n,t=x.$formatters,r=t.length,i=o;r--;)i=t[r](i)
x.$viewValue!==i&&(x.$viewValue=x.$$lastCommittedViewValue=i,x.$render(),x.$$runValidators(o,i,h))}return o})}],mo=["$rootScope",function(e){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:ho,priority:1,compile:function(t){return t.addClass(so).addClass(lo).addClass(oo),{pre:function(e,t,n,r){var i=r[0],o=r[1]||Si
i.$$setOptions(r[2]&&r[2].$options),o.$addControl(i),n.$observe("name",function(e){i.$name!==e&&o.$$renameControl(i,e)}),e.$on("$destroy",function(){o.$removeControl(i)})},post:function(t,n,r,i){var o=i[0]
o.$options&&o.$options.updateOn&&n.on(o.$options.updateOn,function(e){o.$$debounceViewValueCommit(e&&e.type)}),n.on("blur",function(){o.$touched||(e.$$phase?t.$evalAsync(o.$setTouched):t.$apply(o.$setTouched))})}}}}}],go=/(\s+|^)default(\s+|$)/,$o=function(){return{restrict:"A",controller:["$scope","$attrs",function(e,t){var r=this
this.$options=e.$eval(t.ngModelOptions),this.$options.updateOn!==n?(this.$options.updateOnDefault=!1,this.$options.updateOn=or(this.$options.updateOn.replace(go,function(){return r.$options.updateOnDefault=!0," "}))):this.$options.updateOnDefault=!0}]}},vo=En({terminal:!0,priority:1e3}),yo=["$locale","$interpolate",function(e,t){var n=/{}/g,r=/^when(Minus)?(.+)$/
return{restrict:"EA",link:function(i,a,s){function u(e){a.text(e||"")}var l,c=s.count,f=s.$attr.when&&a.attr(s.$attr.when),p=s.offset||0,d=i.$eval(f)||{},h={},m=t.startSymbol(),g=t.endSymbol(),$=m+c+"-"+p+g,v=tr.noop
o(s,function(e,t){var n,i=r.exec(t)
i&&(n=(i[1]?"-":"")+Vo(i[2]),d[n]=a.attr(s.$attr[t]))}),o(d,function(e,r){h[r]=t(e.replace(n,$))}),i.$watch(c,function(t){var n=parseFloat(t),r=isNaN(n)
r||n in d||(n=e.pluralCat(n-p)),n===l||r&&isNaN(l)||(v(),v=i.$watch(h[n],u),l=n)})}}}],wo=["$parse","$animate",function(e,a){var s="$$NG_REMOVED",u=r("ngRepeat"),l=function(e,t,n,r,i,o,a){e[n]=r,i&&(e[i]=o),e.$index=t,e.$first=0===t,e.$last=t===a-1,e.$middle=!(e.$first||e.$last),e.$odd=!(e.$even=0===(1&t))},c=function(e){return e.clone[0]},f=function(e){return e.clone[e.clone.length-1]}
return{restrict:"A",multiElement:!0,transclude:"element",priority:1e3,terminal:!0,$$tlb:!0,compile:function(r,p){var d,h,m,g,$,v,y,w,b,x,C,k=p.ngRepeat,S=t.createComment(" end ngRepeat: "+k+" "),T=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/)
if(!T)throw u("iexp","Expected expression in form of '_item_ in _collection_[ track by _id_]' but got '{0}'.",k)
if(d=T[1],h=T[2],m=T[3],g=T[4],T=d.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/),!T)throw u("iidexp","'_item_' in '_item_ in _collection_' should be an identifier or '(_key_, _value_)' expression, but got '{0}'.",d)
if($=T[3]||T[1],v=T[2],m&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(m)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(m)))throw u("badident","alias '{0}' is invalid --- must be a valid JS identifier which is not a reserved name.",m)
return C={$id:He},g?y=e(g):(b=function(e,t){return He(t)},x=function(e){return e}),function(e,t,r,p,d){y&&(w=function(t,n,r){return v&&(C[v]=t),C[$]=n,C.$index=r,y(e,C)})
var g=le()
e.$watchCollection(h,function(r){var p,h,y,C,T,A,E,N,_,D,O,M,j,P,q=t[0],L=le()
if(m&&(e[m]=r),i(r))_=r,N=w||b
else{N=w||x,_=[]
for(j in r)r.hasOwnProperty(j)&&"$"!=j.charAt(0)&&_.push(j)
_.sort()}for(C=_.length,O=Array(C),p=0;C>p;p++)if(T=r===_?p:_[p],A=r[T],E=N(T,A,p),g[E])D=g[E],delete g[E],L[E]=D,O[p]=D
else{if(L[E])throw o(O,function(e){e&&e.scope&&(g[e.id]=e)}),u("dupes","Duplicates in a repeater are not allowed. Use 'track by' expression to specify unique keys. Repeater: {0}, Duplicate key: {1}, Duplicate value: {2}",k,E,A)
O[p]={id:E,scope:n,clone:n},L[E]=!0}for(P in g){if(D=g[P],M=ue(D.clone),a.leave(M),M[0].parentNode)for(p=0,h=M.length;h>p;p++)M[p][s]=!0
D.scope.$destroy()}for(p=0;C>p;p++)if(T=r===_?p:_[p],A=r[T],D=O[p],D.scope){y=q
do y=y.nextSibling
while(y&&y[s])
c(D)!=y&&a.move(ue(D.clone),null,Xn(q)),q=f(D),l(D.scope,p,$,A,v,T,C)}else d(function(e,t){D.scope=t
var n=S.cloneNode(!1)
e[e.length++]=n,a.enter(e,null,Xn(q)),q=n,D.clone=e,L[D.id]=D,l(D.scope,p,$,A,v,T,C)})
g=L})}}}}],bo="ng-hide",xo="ng-hide-animate",Co=["$animate",function(e){return{restrict:"A",multiElement:!0,link:function(t,n,r){t.$watch(r.ngShow,function(t){e[t?"removeClass":"addClass"](n,bo,{tempClasses:xo})})}}}],ko=["$animate",function(e){return{restrict:"A",multiElement:!0,link:function(t,n,r){t.$watch(r.ngHide,function(t){e[t?"addClass":"removeClass"](n,bo,{tempClasses:xo})})}}}],So=En(function(e,t,n){e.$watchCollection(n.ngStyle,function(e,n){n&&e!==n&&o(n,function(e,n){t.css(n,"")}),e&&t.css(e)})}),To=["$animate",function(e){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(n,r,i,a){var s=i.ngSwitch||i.on,u=[],l=[],c=[],f=[],p=function(e,t){return function(){e.splice(t,1)}}
n.$watch(s,function(n){var r,i,s,d
for(r=0,i=c.length;i>r;++r)e.cancel(c[r])
for(c.length=0,r=0,i=f.length;i>r;++r)s=ue(l[r].clone),f[r].$destroy(),d=c[r]=e.leave(s),d.then(p(c,r))
l.length=0,f.length=0,(u=a.cases["!"+n]||a.cases["?"])&&o(u,function(n){n.transclude(function(r,i){var o,a
f.push(i),o=n.element,r[r.length++]=t.createComment(" end ngSwitchWhen: "),a={clone:r},l.push(a),e.enter(r,o.parent(),o)})})})}}}],Ao=En({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(e,t,n,r,i){r.cases["!"+n.ngSwitchWhen]=r.cases["!"+n.ngSwitchWhen]||[],r.cases["!"+n.ngSwitchWhen].push({transclude:i,element:t})}}),Eo=En({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(e,t,n,r,i){r.cases["?"]=r.cases["?"]||[],r.cases["?"].push({transclude:i,element:t})}}),No=En({restrict:"EAC",link:function(e,t,n,i,o){if(!o)throw r("ngTransclude")("orphan","Illegal use of ngTransclude directive in the template! No parent directive that requires a transclusion found. Element: {0}",W(t))
o(function(e){t.empty(),t.append(e)})}}),_o=["$templateCache",function(e){return{restrict:"E",terminal:!0,compile:function(t,n){if("text/ng-template"==n.type){var r=n.id,i=t[0].text
e.put(r,i)}}}}],Do=r("ngOptions"),Oo=g({restrict:"A",terminal:!0}),Mo=["$compile","$parse",function(e,r){var i=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,s={$setViewValue:h}
return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(e,t,n){var r,i,o=this,a={},u=s
o.databound=n.ngModel,o.init=function(e,t,n){u=e,r=t,i=n},o.addOption=function(t,n){ae(t,'"option value"'),a[t]=!0,u.$viewValue==t&&(e.val(t),i.parent()&&i.remove()),n&&n[0].hasAttribute("selected")&&(n[0].selected=!0)},o.removeOption=function(e){this.hasOption(e)&&(delete a[e],u.$viewValue===e&&this.renderUnknownOption(e))},o.renderUnknownOption=function(t){var n="? "+He(t)+" ?"
i.val(n),e.prepend(i),e.val(n),i.prop("selected",!0)},o.hasOption=function(e){return a.hasOwnProperty(e)},t.$on("$destroy",function(){o.renderUnknownOption=h})}],link:function(s,u,l,c){function f(e,t,n,r){n.$render=function(){var e=n.$viewValue
r.hasOption(e)?(S.parent()&&S.remove(),t.val(e),""===e&&b.prop("selected",!0)):$(e)&&b?t.val(""):r.renderUnknownOption(e)},t.on("change",function(){e.$apply(function(){S.parent()&&S.remove(),n.$setViewValue(t.val())})})}function p(e,t,n){var r
n.$render=function(){var e=new Fe(n.$viewValue)
o(t.find("option"),function(t){t.selected=v(e.get(t.value))})},e.$watch(function(){R(r,n.$viewValue)||(r=L(n.$viewValue),n.$render())}),t.on("change",function(){e.$apply(function(){var e=[]
o(t.find("option"),function(t){t.selected&&e.push(t.value)}),n.$setViewValue(e)})})}function d(t,s,u){function l(e,n,r){return R[A]=r,_&&(R[_]=n),e(t,R)}function c(){t.$apply(function(){var e,n,r=M(t)||[]
g?(e=[],o(s.val(),function(t){t=P?q[t]:t,e.push(f(t,r[t]))})):(n=P?q[s.val()]:s.val(),e=f(n,r[n])),u.$setViewValue(e),b()})}function f(e,t){if("?"===e)return n
if(""===e)return null
var r=N?N:O
return l(r,e,t)}function p(){var e,n,r,i,o=M(t)
if(o&&ir(o)){for(e=Array(o.length),n=0,r=o.length;r>n;n++)e[n]=l(T,n,o[n])
return e}if(o){e={}
for(i in o)o.hasOwnProperty(i)&&(e[i]=l(T,i,o[i]))}return e}function d(e){var t,n
if(g)if(P&&ir(e))for(t=new Fe([]),n=0;n<e.length;n++)t.put(l(P,null,e[n]),!0)
else t=new Fe(e)
else P&&(e=l(P,null,e))
return function(n,r){var i
return i=P?P:N?N:O,g?v(t.remove(l(i,n,r))):e===l(i,n,r)}}function m(){x||(t.$$postDigest(b),x=!0)}function $(e,t,n){e[t]=e[t]||0,e[t]+=n?1:-1}function b(){x=!1
var e,n,r,i,c,f,p,m,y,b,S,A,E,N,O,j,I,H={"":[]},F=[""],V=u.$viewValue,U=M(t)||[],B=_?a(U):U,W={},z=d(V),G=!1
for(q={},A=0;b=B.length,b>A;A++)p=A,_&&(p=B[A],"$"===p.charAt(0))||(m=U[p],e=l(D,p,m)||"",(n=H[e])||(n=H[e]=[],F.push(e)),E=z(p,m),G=G||E,j=l(T,p,m),j=v(j)?j:"",I=P?P(t,R):_?B[A]:A,P&&(q[I]=p),n.push({id:I,label:j,selected:E}))
for(g||(w||null===V?H[""].unshift({id:"",label:"",selected:!G}):G||H[""].unshift({id:"?",label:"",selected:!0})),S=0,y=F.length;y>S;S++){for(e=F[S],n=H[e],L.length<=S?(i={element:k.clone().attr("label",e),label:n.label},c=[i],L.push(c),s.append(i.element)):(c=L[S],i=c[0],i.label!=e&&i.element.attr("label",i.label=e)),N=null,A=0,b=n.length;b>A;A++)r=n[A],(f=c[A+1])?(N=f.element,f.label!==r.label&&($(W,f.label,!1),$(W,r.label,!0),N.text(f.label=r.label),N.prop("label",f.label)),f.id!==r.id&&N.val(f.id=r.id),N[0].selected!==r.selected&&(N.prop("selected",f.selected=r.selected),Gn&&N.prop("selected",f.selected))):(""===r.id&&w?O=w:(O=C.clone()).val(r.id).prop("selected",r.selected).attr("selected",r.selected).prop("label",r.label).text(r.label),c.push(f={element:O,label:r.label,id:r.id,selected:r.selected}),$(W,r.label,!0),N?N.after(O):i.element.append(O),N=O)
for(A++;c.length>A;)r=c.pop(),$(W,r.label,!1),r.element.remove()}for(;L.length>S;){for(n=L.pop(),A=1;A<n.length;++A)$(W,n[A].label,!1)
n[0].element.remove()}o(W,function(e,t){e>0?h.addOption(t):0>e&&h.removeOption(t)})}var S,T,A,E,N,_,D,O,M,j,P,q,L,R
if(!(S=y.match(i)))throw Do("iexp","Expected expression in form of '_select_ (as _label_)? for (_key_,)?_value_ in _collection_' but got '{0}'. Element: {1}",y,W(s))
T=r(S[2]||S[1]),A=S[4]||S[6],E=/ as /.test(S[0])&&S[1],N=E?r(E):null,_=S[5],D=r(S[3]||""),O=r(S[2]?S[1]:A),M=r(S[7]),j=S[8],P=j?r(S[8]):null,q={},L=[[{element:s,label:""}]],R={},w&&(e(w)(t),w.removeClass("ng-scope"),w.remove()),s.empty(),s.on("change",c),u.$render=b,t.$watchCollection(M,m),t.$watchCollection(p,m),g&&t.$watchCollection(function(){return u.$modelValue},m)}var h,m,g,y,w,b,x,C,k,S,T,A,E
if(c[1]){for(h=c[0],m=c[1],g=l.multiple,y=l.ngOptions,w=!1,x=!1,C=Xn(t.createElement("option")),k=Xn(t.createElement("optgroup")),S=C.clone(),T=0,A=u.children(),E=A.length;E>T;T++)if(""===A[T].value){b=w=A.eq(T)
break}h.init(m,w,S),g&&(m.$isEmpty=function(e){return!e||0===e.length}),y?d(s,u,m):g?p(s,u,m):f(s,u,m,h)}}}}],jo=["$interpolate",function(e){var t={addOption:h,removeOption:h}
return{restrict:"E",priority:100,compile:function(n,r){if($(r.value)){var i=e(n.text(),!0)
i||r.$set("value",n.text())}return function(e,n,r){var o="$selectController",a=n.parent(),s=a.data(o)||a.parent().data(o)
s&&s.databound||(s=t),i?e.$watch(i,function(e,t){r.$set("value",e),t!==e&&s.removeOption(t),s.addOption(e,n)}):s.addOption(r.value,n),n.on("$destroy",function(){s.removeOption(r.value)})}}}}],Po=g({restrict:"E",terminal:!1}),qo=function(){return{restrict:"A",require:"?ngModel",link:function(e,t,n,r){r&&(n.required=!0,r.$validators.required=function(e,t){return!n.required||!r.$isEmpty(t)},n.$observe("required",function(){r.$validate()}))}}},Lo=function(){return{restrict:"A",require:"?ngModel",link:function(e,t,i,o){if(o){var a,s=i.ngPattern||i.pattern
i.$observe("pattern",function(e){if(w(e)&&e.length>0&&(e=RegExp("^"+e+"$")),e&&!e.test)throw r("ngPattern")("noregexp","Expected {0} to be a RegExp but was {1}. Element: {2}",s,e,W(t))
a=e||n,o.$validate()}),o.$validators.pattern=function(e){return o.$isEmpty(e)||$(a)||a.test(e)}}}}},Ro=function(){return{restrict:"A",require:"?ngModel",link:function(e,t,n,r){if(r){var i=-1
n.$observe("maxlength",function(e){var t=p(e)
i=isNaN(t)?-1:t,r.$validate()}),r.$validators.maxlength=function(e,t){return 0>i||r.$isEmpty(t)||t.length<=i}}}}},Io=function(){return{restrict:"A",require:"?ngModel",link:function(e,t,n,r){if(r){var i=0
n.$observe("minlength",function(e){i=p(e)||0,r.$validate()}),r.$validators.minlength=function(e,t){return r.$isEmpty(t)||t.length>=i}}}}},e.angular.bootstrap?(console.log("WARNING: Tried to load angular more than once."),n):(re(),de(tr),Xn(t).ready(function(){Z(t,Q)}),n)}(window,document),!window.angular.$$csp()&&window.angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}</style>'),function(e,t,n){"use strict"
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
this.when=function(e,i){var o,a=t.copy(i)
return t.isUndefined(a.reloadOnSearch)&&(a.reloadOnSearch=!0),t.isUndefined(a.caseInsensitiveMatch)&&(a.caseInsensitiveMatch=this.caseInsensitiveMatch),r[e]=t.extend(a,e&&n(e,a)),e&&(o="/"==e[e.length-1]?e.substr(0,e.length-1):e+"/",r[o]=t.extend({redirectTo:e},n(o,a))),this},this.caseInsensitiveMatch=!1,this.otherwise=function(e){return"string"==typeof e&&(e={redirectTo:e}),this.when(null,e),this},this.$get=["$rootScope","$location","$routeParams","$q","$injector","$templateRequest","$sce",function(n,i,o,a,u,l,c){function f(e,t){var n,r,i,o,a,s=t.keys,u={}
if(!t.regexp)return null
if(n=t.regexp.exec(e),!n)return null
for(r=1,i=n.length;i>r;++r)o=s[r-1],a=n[r],o&&a&&(u[o.name]=a)
return u}function p(e){var r=y.current
g=h(),$=g&&r&&g.$$route===r.$$route&&t.equals(g.pathParams,r.pathParams)&&!g.reloadOnSearch&&!v,$||!r&&!g||n.$broadcast("$routeChangeStart",g,r).defaultPrevented&&e&&e.preventDefault()}function d(){var e=y.current,r=g
$?(e.params=r.params,t.copy(e.params,o),n.$broadcast("$routeUpdate",e)):(r||e)&&(v=!1,y.current=r,r&&r.redirectTo&&(t.isString(r.redirectTo)?i.path(m(r.redirectTo,r.params)).search(r.params).replace():i.url(r.redirectTo(r.pathParams,i.path(),i.search())).replace()),a.when(r).then(function(){if(r){var e,n,i=t.extend({},r.resolve)
return t.forEach(i,function(e,n){i[n]=t.isString(e)?u.get(e):u.invoke(e,null,null,n)}),t.isDefined(e=r.template)?t.isFunction(e)&&(e=e(r.params)):t.isDefined(n=r.templateUrl)&&(t.isFunction(n)&&(n=n(r.params)),n=c.getTrustedResourceUrl(n),t.isDefined(n)&&(r.loadedTemplateUrl=n,e=l(n))),t.isDefined(e)&&(i.$template=e),a.all(i)}}).then(function(i){r==y.current&&(r&&(r.locals=i,t.copy(r.params,o)),n.$broadcast("$routeChangeSuccess",r,e))},function(t){r==y.current&&n.$broadcast("$routeChangeError",r,e,t)}))}function h(){var n,o
return t.forEach(r,function(r){!o&&(n=f(i.path(),r))&&(o=e(r,{params:t.extend({},i.search(),n),pathParams:n}),o.$$route=r)}),o||r[null]&&e(r[null],{params:{},pathParams:{}})}function m(e,n){var r=[]
return t.forEach((e||"").split(":"),function(e,t){var i,o
0===t?r.push(e):(i=e.match(/(\w+)(?:[?*])?(.*)/),o=i[1],r.push(n[o]),r.push(i[2]||""),delete n[o])}),r.join("")}var g,$,v=!1,y={routes:r,reload:function(){v=!0,n.$evalAsync(function(){p(),d()})},updateParams:function(e){if(!this.current||!this.current.$$route)throw s("norout","Tried updating route when with no current route")
e=t.extend({},this.current.params,e),i.path(m(this.current.$$route.originalPath,e)),i.search(e)}}
return n.$on("$locationChangeStart",p),n.$on("$locationChangeSuccess",d),y}]}function r(){this.$get=function(){return{}}}function i(e,n,r){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(i,o,a,s,u){function l(){d&&(r.cancel(d),d=null),f&&(f.$destroy(),f=null),p&&(d=r.leave(p),d.then(function(){d=null}),p=null)}function c(){var a,s,c,d=e.current&&e.current.locals,g=d&&d.$template
t.isDefined(g)?(a=i.$new(),s=e.current,c=u(a,function(e){r.enter(e,null,p||o).then(function(){!t.isDefined(h)||h&&!i.$eval(h)||n()}),l()}),p=c,f=s.scope=a,f.$emit("$viewContentLoaded"),f.$eval(m)):l()}var f,p,d,h=a.autoscroll,m=a.onload||""
i.$on("$routeChangeSuccess",c),c()}}}function o(e,t,n){return{restrict:"ECA",priority:-400,link:function(r,i){var o,a,s=n.current,u=s.locals
i.html(u.$template),o=e(i.contents()),s.controller&&(u.$scope=r,a=t(s.controller,u),s.controllerAs&&(r[s.controllerAs]=a),i.data("$ngControllerController",a),i.children().data("$ngControllerController",a)),o(r)}}}var a=t.module("ngRoute",["ng"]).provider("$route",n),s=t.$$minErr("ngRoute")
a.provider("$routeParams",r),a.directive("ngView",i),a.directive("ngView",o),i.$inject=["$route","$anchorScroll","$animate"],o.$inject=["$compile","$controller","$route"]}(window,window.angular),function(){"use strict"
angular.module("file-model",[]).directive("fileModel",["$parse",function(e){return{restrict:"A",link:function(t,n,r){var i=e(r.fileModel),o=i.assign
n.bind("change",function(){t.$apply(function(){n[0].files.length>1?o(t,n[0].files):o(t,n[0].files[0])})})}}}])}(),function(e,t){"function"==typeof define&&define.amd?define(["module","angular"],function(e,n){e.exports=t(n)}):"object"==typeof module?module.exports=t(require("angular")):(e.mp||(e.mp={}),e.mp.colorPicker=t(e.angular))}(this,function(e){"use strict"
function t(e,t,n){var r,i,o,a,s,u,l,c
switch("object"==typeof e&&(t=e.s,n=e.v,e=e.h),r=Math.floor(6*e),i=6*e-r,o=n*(1-t),a=n*(1-i*t),s=n*(1-(1-i)*t),r%6){case 0:u=n,l=s,c=o
break
case 1:u=a,l=n,c=o
break
case 2:u=o,l=n,c=s
break
case 3:u=o,l=a,c=n
break
case 4:u=s,l=o,c=n
break
case 5:u=n,l=o,c=a}return u=Math.floor(255*u)+256,l=Math.floor(255*l)+256,c=Math.floor(255*c)+256,"#"+u.toString(16).slice(1)+l.toString(16).slice(1)+c.toString(16).slice(1)}function n(e){var t,n,r,i,o,a,s,u,l,c,f,p,d=/^#(..)(..)(..)$/.exec(e)
return d?(t=d.slice(1).map(function(e){return parseInt(e,16)/255}),n=t[0],r=t[1],i=t[2],s=Math.max(n,r,i),u=s-Math.min(n,r,i),l=function(e){return(s-e)/6/u+.5},0===u?o=a=0:(a=u/s,c=l(n),f=l(r),p=l(i),n===s?o=p-f:r===s?o=1/3+c-p:i===s&&(o=2/3+f-c),0>o?o+=1:o>1&&(o-=1)),{h:o,s:a,v:s}):void 0}return e.module("mp.colorPicker",[]).directive("colorPicker",["$window",function(r){r.document.createElement("color-picker")
var i='<div class="angular-color-picker">    <div class="_variations" ng-style="{ backgroundColor: hueBackgroundColor }">        <div class="_whites">            <div class="_blacks">                <div class="_cursor" ng-if="colorCursor" ng-style="{ left: colorCursor.x - 5 + \'px\', top: colorCursor.y - 5 + \'px\' }"></div>                <div class="_mouse-trap" ng-mousedown="startDrag($event, \'color\')"></div>            </div>        </div>    </div>    <div class="_hues">        <div class="_ie-1"></div>        <div class="_ie-2"></div>        <div class="_ie-3"></div>        <div class="_ie-4"></div>        <div class="_ie-5"></div>        <div class="_ie-6"></div>        <div class="_cursor" ng-style="{ top: hueCursor - 5 + \'px\' }"></div>        <div class="_mouse-trap" ng-mousedown="startDrag($event, \'hue\')"></div>    </div></div>'
return{restrict:"AE",template:i,replace:!0,require:"?ngModel",scope:{},link:function(i,o,a,s){function u(e,n){e=Math.max(Math.min(e,f.width),0),n=Math.max(Math.min(n,f.height),0),"hue"===c?(i.hueCursor=n,i.hsv.h=n/f.height,i.hueBackgroundColor=t(i.hsv.h,1,1)):(i.colorCursor={x:e,y:n},i.hsv.s=e/f.width,i.hsv.v=1-n/f.height),void 0!==i.hsv.s&&(i.color=t(i.hsv),s&&s.$setViewValue(i.color))}function l(e){e.preventDefault(),i.$apply(function(){u(e.clientX-f.x,e.clientY-f.y)})}i.hsv={h:0,s:0,v:0},s&&(s.$render=function(){/^#[0-9A-Fa-f]{6}$/.test(s.$viewValue)?(i.color=s.$viewValue,i.hsv=n(i.color),i.colorCursor={x:200*i.hsv.s,y:200*(1-i.hsv.v)}):(i.color=null,i.hsv={h:.5},i.colorCursor=null),i.hueBackgroundColor=t(i.hsv.h,1,1),i.hueCursor=200*i.hsv.h})
var c,f
i.startDrag=function(t,n){var i=t.target.getBoundingClientRect()
c=n,f={x:i.left,y:i.top,width:i.right-i.left,height:i.bottom-i.top},u(t.offsetX||t.layerX,t.offsetY||t.layerY),e.element(r).on("mousemove",l).one("mouseup",function(){e.element(r).off("mousemove",l)})}}}}])}),function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw Error("jQuery requires a window with a document")
return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t="length"in e&&e.length,n=Mt.type(e)
return"function"===n||Mt.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function r(e,t,n){if(Mt.isFunction(t))return Mt.grep(e,function(e,r){return!!t.call(e,r,e)!==n})
if(t.nodeType)return Mt.grep(e,function(e){return e===t!==n})
if("string"==typeof t){if(W.test(t))return Mt.filter(t,e,n)
t=Mt.filter(t,e)}return Mt.grep(e,function(e){return Tt.call(t,e)>=0!==n})}function i(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t=Z[e]={}
return Mt.each(e.match(K)||[],function(e,n){t[n]=!0}),t}function a(){Dt.removeEventListener("DOMContentLoaded",a,!1),e.removeEventListener("load",a,!1),Mt.ready()}function s(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=Mt.expando+s.uid++}function u(e,t,n){var r
if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ie,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:re.test(n)?Mt.parseJSON(n):n}catch(i){}ne.set(e,t,n)}else n=void 0
return n}function l(){return!0}function c(){return!1}function f(){try{return Dt.activeElement}catch(e){}}function p(e,t){return Mt.nodeName(e,"table")&&Mt.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function d(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function h(e){var t=we.exec(e.type)
return t?e.type=t[1]:e.removeAttribute("type"),e}function m(e,t){for(var n=0,r=e.length;r>n;n++)te.set(e[n],"globalEval",!t||te.get(t[n],"globalEval"))}function g(e,t){var n,r,i,o,a,s,u,l
if(1===t.nodeType){if(te.hasData(e)&&(o=te.access(e),a=te.set(t,o),l=o.events)){delete a.handle,a.events={}
for(i in l)for(n=0,r=l[i].length;r>n;n++)Mt.event.add(t,i,l[i][n])}ne.hasData(e)&&(s=ne.access(e),u=Mt.extend({},s),ne.set(t,u))}}function $(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[]
return void 0===t||t&&Mt.nodeName(e,t)?Mt.merge([e],n):n}function v(e,t){var n=t.nodeName.toLowerCase()
"input"===n&&ue.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function y(t,n){var r,i=Mt(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(r=e.getDefaultComputedStyle(i[0]))?r.display:Mt.css(i[0],"display")
return i.detach(),o}function w(e){var t=Dt,n=ke[e]
return n||(n=y(e,t),"none"!==n&&n||(Ce=(Ce||Mt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=Ce[0].contentDocument,t.write(),t.close(),n=y(e,t),Ce.detach()),ke[e]=n),n}function b(e,t,n){var r,i,o,a,s=e.style
return n=n||Ae(e),n&&(a=n.getPropertyValue(t)||n[t]),n&&(""!==a||Mt.contains(e.ownerDocument,e)||(a=Mt.style(e,t)),Te.test(a)&&Se.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function x(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function C(e,t){if(t in e)return t
for(var n=t[0].toUpperCase()+t.slice(1),r=t,i=Me.length;i--;)if(t=Me[i]+n,t in e)return t
return r}function k(e,t,n){var r=Ne.exec(t)
return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function S(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;4>o;o+=2)"margin"===n&&(a+=Mt.css(e,n+ae[o],!0,i)),r?("content"===n&&(a-=Mt.css(e,"padding"+ae[o],!0,i)),"margin"!==n&&(a-=Mt.css(e,"border"+ae[o]+"Width",!0,i))):(a+=Mt.css(e,"padding"+ae[o],!0,i),"padding"!==n&&(a+=Mt.css(e,"border"+ae[o]+"Width",!0,i)))
return a}function T(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Ae(e),a="border-box"===Mt.css(e,"boxSizing",!1,o)
if(0>=i||null==i){if(i=b(e,t,o),(0>i||null==i)&&(i=e.style[t]),Te.test(i))return i
r=a&&(_t.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+S(e,t,n||(a?"border":"content"),r,o)+"px"}function A(e,t){for(var n,r,i,o=[],a=0,s=e.length;s>a;a++)r=e[a],r.style&&(o[a]=te.get(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&se(r)&&(o[a]=te.access(r,"olddisplay",w(r.nodeName)))):(i=se(r),"none"===n&&i||te.set(r,"olddisplay",i?n:Mt.css(r,"display"))))
for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"))
return e}function E(e,t,n,r,i){return new E.prototype.init(e,t,n,r,i)}function N(){return setTimeout(function(){je=void 0}),je=Mt.now()}function _(e,t){var n,r=0,i={height:e}
for(t=t?1:0;4>r;r+=2-t)n=ae[r],i["margin"+n]=i["padding"+n]=e
return t&&(i.opacity=i.width=e),i}function D(e,t,n){for(var r,i=(He[t]||[]).concat(He["*"]),o=0,a=i.length;a>o;o++)if(r=i[o].call(n,t,e))return r}function O(e,t,n){var r,i,o,a,s,u,l,c,f=this,p={},d=e.style,h=e.nodeType&&se(e),m=te.get(e,"fxshow")
n.queue||(s=Mt._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,u=s.empty.fire,s.empty.fire=function(){s.unqueued||u()}),s.unqueued++,f.always(function(){f.always(function(){s.unqueued--,Mt.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],l=Mt.css(e,"display"),c="none"===l?te.get(e,"olddisplay")||w(e.nodeName):l,"inline"===c&&"none"===Mt.css(e,"float")&&(d.display="inline-block")),n.overflow&&(d.overflow="hidden",f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}))
for(r in t)if(i=t[r],qe.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!m||void 0===m[r])continue
h=!0}p[r]=m&&m[r]||Mt.style(e,r)}else l=void 0
if(Mt.isEmptyObject(p))"inline"===("none"===l?w(e.nodeName):l)&&(d.display=l)
else{m?"hidden"in m&&(h=m.hidden):m=te.access(e,"fxshow",{}),o&&(m.hidden=!h),h?Mt(e).show():f.done(function(){Mt(e).hide()}),f.done(function(){var t
te.remove(e,"fxshow")
for(t in p)Mt.style(e,t,p[t])})
for(r in p)a=D(h?m[r]:0,r,f),r in m||(m[r]=a.start,h&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function M(e,t){var n,r,i,o,a
for(n in e)if(r=Mt.camelCase(n),i=t[r],o=e[n],Mt.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=Mt.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r]
for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function j(e,t,n){var r,i,o=0,a=Ie.length,s=Mt.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1
for(var t=je||N(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;u>a;a++)l.tweens[a].run(o)
return s.notifyWith(e,[l,o,n]),1>o&&u?n:(s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:Mt.extend({},t),opts:Mt.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:je||N(),duration:n.duration,tweens:[],createTween:function(t,n){var r=Mt.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing)
return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0
if(i)return this
for(i=!0;r>n;n++)l.tweens[n].run(1)
return t?s.resolveWith(e,[l,t]):s.rejectWith(e,[l,t]),this}}),c=l.props
for(M(c,l.opts.specialEasing);a>o;o++)if(r=Ie[o].call(l,e,c,l.opts))return r
return Mt.map(c,D,l),Mt.isFunction(l.opts.start)&&l.opts.start.call(e,l),Mt.fx.timer(Mt.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function P(e){return function(t,n){"string"!=typeof t&&(n=t,t="*")
var r,i=0,o=t.toLowerCase().match(K)||[]
if(Mt.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function q(e,t,n,r){function i(s){var u
return o[s]=!0,Mt.each(e[s]||[],function(e,s){var l=s(t,n,r)
return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},a=e===rt
return i(t.dataTypes[0])||!o["*"]&&i("*")}function L(e,t){var n,r,i=Mt.ajaxSettings.flatOptions||{}
for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n])
return r&&Mt.extend(!0,e,r),e}function R(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"))
if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i)
break}if(u[0]in n)o=u[0]
else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i
break}a||(a=i)}o=o||a}return o?(o!==u[0]&&u.unshift(o),n[o]):void 0}function I(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice()
if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a]
for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u
else if("*"!==u&&u!==o){if(a=l[u+" "+o]||l["* "+o],!a)for(i in l)if(s=i.split(" "),s[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){a===!0?a=l[i]:l[i]!==!0&&(o=s[0],c.unshift(s[1]))
break}if(a!==!0)if(a&&e["throws"])t=a(t)
else try{t=a(t)}catch(f){return{state:"parsererror",error:a?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function H(e,t,n,r){var i
if(Mt.isArray(t))Mt.each(t,function(t,i){n||ut.test(e)?r(e,i):H(e+"["+("object"==typeof i?t:"")+"]",i,n,r)})
else if(n||"object"!==Mt.type(t))r(e,t)
else for(i in t)H(e+"["+i+"]",t[i],n,r)}function F(e){return Mt.isWindow(e)?e:9===e.nodeType&&e.defaultView}var V,U,B,W,z,G,X,Y,J,K,Z,Q,ee,te,ne,re,ie,oe,ae,se,ue,le,ce,fe,pe,de,he,me,ge,$e,ve,ye,we,be,xe,Ce,ke,Se,Te,Ae,Ee,Ne,_e,De,Oe,Me,je,Pe,qe,Le,Re,Ie,He,Fe,Ve,Ue,Be,We,ze,Ge,Xe,Ye,Je,Ke,Ze,Qe,et,tt,nt,rt,it,ot,at,st,ut,lt,ct,ft,pt,dt,ht,mt,gt,$t,vt,yt,wt,bt,xt=[],Ct=xt.slice,kt=xt.concat,St=xt.push,Tt=xt.indexOf,At={},Et=At.toString,Nt=At.hasOwnProperty,_t={},Dt=e.document,Ot="2.1.4",Mt=function(e,t){return new Mt.fn.init(e,t)},jt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,Pt=/^-ms-/,qt=/-([\da-z])/gi,Lt=function(e,t){return t.toUpperCase()}
return Mt.fn=Mt.prototype={jquery:Ot,constructor:Mt,selector:"",length:0,toArray:function(){return Ct.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:Ct.call(this)},pushStack:function(e){var t=Mt.merge(this.constructor(),e)
return t.prevObject=this,t.context=this.context,t},each:function(e,t){return Mt.each(this,e,t)},map:function(e){return this.pushStack(Mt.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(Ct.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0)
return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:St,sort:xt.sort,splice:xt.splice},Mt.extend=Mt.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1
for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||Mt.isFunction(a)||(a={}),s===u&&(a=this,s--);u>s;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],r=e[t],a!==r&&(l&&r&&(Mt.isPlainObject(r)||(i=Mt.isArray(r)))?(i?(i=!1,o=n&&Mt.isArray(n)?n:[]):o=n&&Mt.isPlainObject(n)?n:{},a[t]=Mt.extend(l,o,r)):void 0!==r&&(a[t]=r))
return a},Mt.extend({expando:"jQuery"+(Ot+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw Error(e)},noop:function(){},isFunction:function(e){return"function"===Mt.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!Mt.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return"object"!==Mt.type(e)||e.nodeType||Mt.isWindow(e)?!1:e.constructor&&!Nt.call(e.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(e){var t
for(t in e)return!1
return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?At[Et.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval
e=Mt.trim(e),e&&(1===e.indexOf("use strict")?(t=Dt.createElement("script"),t.text=e,Dt.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(Pt,"ms-").replace(qt,Lt)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,a=e.length,s=n(e)
if(r){if(s)for(;a>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(s)for(;a>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break
return e},trim:function(e){return null==e?"":(e+"").replace(jt,"")},makeArray:function(e,t){var r=t||[]
return null!=e&&(n(Object(e))?Mt.merge(r,"string"==typeof e?[e]:e):St.call(r,e)),r},inArray:function(e,t,n){return null==t?-1:Tt.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;r++)e[i++]=t[r]
return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;a>o;o++)r=!t(e[o],o),r!==s&&i.push(e[o])
return i},map:function(e,t,r){var i,o=0,a=e.length,s=n(e),u=[]
if(s)for(;a>o;o++)i=t(e[o],o,r),null!=i&&u.push(i)
else for(o in e)i=t(e[o],o,r),null!=i&&u.push(i)
return kt.apply([],u)},guid:1,proxy:function(e,t){var n,r,i
return"string"==typeof t&&(n=e[t],t=e,e=n),Mt.isFunction(e)?(r=Ct.call(arguments,2),i=function(){return e.apply(t||this,r.concat(Ct.call(arguments)))},i.guid=e.guid=e.guid||Mt.guid++,i):void 0},now:Date.now,support:_t}),Mt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){At["[object "+t+"]"]=t.toLowerCase()}),V=function(e){function t(e,t,n,r){var i,o,a,s,u,l,f,d,h,m
if((t?t.ownerDocument||t:H)!==O&&D(t),t=t||O,n=n||[],s=t.nodeType,"string"!=typeof e||!e||1!==s&&9!==s&&11!==s)return n
if(!r&&j){if(11!==s&&(i=ve.exec(e)))if(a=i[1]){if(9===s){if(o=t.getElementById(a),!o||!o.parentNode)return n
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
return a}function $(e,t,n,i,o,a){return i&&!i[I]&&(i=$(i)),o&&!o[I]&&(o=$(o,a)),r(function(r,a,s,u){var l,c,f,p=[],d=[],h=a.length,$=r||m(t||"*",s.nodeType?[s]:s,[]),v=!e||!r&&t?$:g($,p,e,s,u),y=n?o||(r?e:h||i)?[]:a:v
if(n&&n(v,y,s,u),i)for(l=g(y,d),i(l,[],s,u),c=l.length;c--;)(f=l[c])&&(y[d[c]]=!(v[d[c]]=f))
if(r){if(o||e){if(o){for(l=[],c=y.length;c--;)(f=y[c])&&l.push(v[c]=f)
o(null,y=[],l,u)}for(c=y.length;c--;)(f=y[c])&&(l=o?ee(r,f):p[c])>-1&&(r[l]=!(a[l]=f))}}else y=g(y===a?y.splice(h,y.length):y),o?o(null,a,y,u):Z.apply(a,y)})}function v(e){for(var t,n,r,i=e.length,o=x.relative[e[0].type],a=o||x.relative[" "],s=o?1:0,u=d(function(e){return e===t},a,!0),l=d(function(e){return ee(t,e)>-1},a,!0),c=[function(e,n,r){var i=!o&&(r||n!==E)||((t=n).nodeType?u(e,n,r):l(e,n,r))
return t=null,i}];i>s;s++)if(n=x.relative[e[s].type])c=[d(h(c),n)]
else{if(n=x.filter[e[s].type].apply(null,e[s].matches),n[I]){for(r=++s;i>r&&!x.relative[e[r].type];r++);return $(s>1&&h(c),s>1&&p(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ue,"$1"),n,r>s&&v(e.slice(s,r)),i>r&&v(e=e.slice(r)),i>r&&p(e))}c.push(n)}return h(c)}function y(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,u,l){var c,f,p,d=0,h="0",m=r&&[],$=[],v=E,y=r||o&&x.find.TAG("*",l),w=F+=null==v?1:Math.random()||.1,b=y.length
for(l&&(E=a!==O&&a);h!==b&&null!=(c=y[h]);h++){if(o&&c){for(f=0;p=e[f++];)if(p(c,a,s)){u.push(c)
break}l&&(F=w)}i&&((c=!p&&c)&&d--,r&&m.push(c))}if(d+=h,i&&h!==d){for(f=0;p=n[f++];)p(m,$,a,s)
if(r){if(d>0)for(;h--;)m[h]||$[h]||($[h]=J.call(u))
$=g($)}Z.apply(u,$),l&&!r&&$.length>0&&d+n.length>1&&t.uniqueSort(u)}return l&&(F=w,E=v),m}
return i?r(a):a}var w,b,x,C,k,S,T,A,E,N,_,D,O,M,j,P,q,L,R,I="sizzle"+1*new Date,H=e.document,F=0,V=0,U=n(),B=n(),W=n(),z=function(e,t){return e===t&&(_=!0),0},G=1<<31,X={}.hasOwnProperty,Y=[],J=Y.pop,K=Y.push,Z=Y.push,Q=Y.slice,ee=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n
return-1},te="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ne="[\\x20\\t\\r\\n\\f]",re="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",ie=re.replace("w","w#"),oe="\\["+ne+"*("+re+")(?:"+ne+"*([*^$|!~]?=)"+ne+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+ne+"*\\]",ae=":("+re+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",se=RegExp(ne+"+","g"),ue=RegExp("^"+ne+"+|((?:^|[^\\\\])(?:\\\\.)*)"+ne+"+$","g"),le=RegExp("^"+ne+"*,"+ne+"*"),ce=RegExp("^"+ne+"*([>+~]|"+ne+")"+ne+"*"),fe=RegExp("="+ne+"*([^\\]'\"]*?)"+ne+"*\\]","g"),pe=RegExp(ae),de=RegExp("^"+ie+"$"),he={ID:RegExp("^#("+re+")"),CLASS:RegExp("^\\.("+re+")"),TAG:RegExp("^("+re.replace("w","w*")+")"),ATTR:RegExp("^"+oe),PSEUDO:RegExp("^"+ae),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+ne+"*(even|odd|(([+-]|)(\\d*)n|)"+ne+"*(?:([+-]|)"+ne+"*(\\d+)|))"+ne+"*\\)|)","i"),bool:RegExp("^(?:"+te+")$","i"),needsContext:RegExp("^"+ne+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+ne+"*((?:-\\d)?\\d*)"+ne+"*\\)|)(?=[^-]|$)","i")},me=/^(?:input|select|textarea|button)$/i,ge=/^h\d$/i,$e=/^[^{]+\{\s*\[native \w/,ve=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ye=/[+~]/,we=/'|\\/g,be=RegExp("\\\\([\\da-f]{1,6}"+ne+"?|("+ne+")|.)","ig"),xe=function(e,t,n){var r="0x"+t-65536
return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},Ce=function(){D()}
try{Z.apply(Y=Q.call(H.childNodes),H.childNodes),Y[H.childNodes.length].nodeType}catch(ke){Z={apply:Y.length?function(e,t){K.apply(e,Q.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}b=t.support={},k=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement
return t?"HTML"!==t.nodeName:!1},D=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:H
return r!==O&&9===r.nodeType&&r.documentElement?(O=r,M=r.documentElement,n=r.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Ce,!1):n.attachEvent&&n.attachEvent("onunload",Ce)),j=!k(r),b.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),b.getElementsByTagName=i(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),b.getElementsByClassName=$e.test(r.getElementsByClassName),b.getById=i(function(e){return M.appendChild(e).id=I,!r.getElementsByName||!r.getElementsByName(I).length}),b.getById?(x.find.ID=function(e,t){if(void 0!==t.getElementById&&j){var n=t.getElementById(e)
return n&&n.parentNode?[n]:[]}},x.filter.ID=function(e){var t=e.replace(be,xe)
return function(e){return e.getAttribute("id")===t}}):(delete x.find.ID,x.filter.ID=function(e){var t=e.replace(be,xe)
return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id")
return n&&n.value===t}}),x.find.TAG=b.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):b.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e)
if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n)
return r}return o},x.find.CLASS=b.getElementsByClassName&&function(e,t){return j?t.getElementsByClassName(e):void 0},q=[],P=[],(b.qsa=$e.test(r.querySelectorAll))&&(i(function(e){M.appendChild(e).innerHTML="<a id='"+I+"'></a><select id='"+I+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&P.push("[*^$]="+ne+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||P.push("\\["+ne+"*(?:value|"+te+")"),e.querySelectorAll("[id~="+I+"-]").length||P.push("~="),e.querySelectorAll(":checked").length||P.push(":checked"),e.querySelectorAll("a#"+I+"+*").length||P.push(".#.+[+~]")}),i(function(e){var t=r.createElement("input")
t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&P.push("name"+ne+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||P.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),P.push(",.*:")})),(b.matchesSelector=$e.test(L=M.matches||M.webkitMatchesSelector||M.mozMatchesSelector||M.oMatchesSelector||M.msMatchesSelector))&&i(function(e){b.disconnectedMatch=L.call(e,"div"),L.call(e,"[s!='']:x"),q.push("!=",ae)}),P=P.length&&RegExp(P.join("|")),q=q.length&&RegExp(q.join("|")),t=$e.test(M.compareDocumentPosition),R=t||$e.test(M.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode
return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0
return!1},z=t?function(e,t){if(e===t)return _=!0,0
var n=!e.compareDocumentPosition-!t.compareDocumentPosition
return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!b.sortDetached&&t.compareDocumentPosition(e)===n?e===r||e.ownerDocument===H&&R(H,e)?-1:t===r||t.ownerDocument===H&&R(H,t)?1:N?ee(N,e)-ee(N,t):0:4&n?-1:1)}:function(e,t){if(e===t)return _=!0,0
var n,i=0,o=e.parentNode,s=t.parentNode,u=[e],l=[t]
if(!o||!s)return e===r?-1:t===r?1:o?-1:s?1:N?ee(N,e)-ee(N,t):0
if(o===s)return a(e,t)
for(n=e;n=n.parentNode;)u.unshift(n)
for(n=t;n=n.parentNode;)l.unshift(n)
for(;u[i]===l[i];)i++
return i?a(u[i],l[i]):u[i]===H?-1:l[i]===H?1:0},r):O},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==O&&D(e),n=n.replace(fe,"='$1']"),!(!b.matchesSelector||!j||q&&q.test(n)||P&&P.test(n)))try{var r=L.call(e,n)
if(r||b.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,O,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==O&&D(e),R(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==O&&D(e)
var n=x.attrHandle[t.toLowerCase()],r=n&&X.call(x.attrHandle,t.toLowerCase())?n(e,t,!j):void 0
return void 0!==r?r:b.attributes||!j?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0
if(_=!b.detectDuplicates,N=!b.sortStable&&e.slice(0),e.sort(z),_){for(;t=e[i++];)t===e[i]&&(r=n.push(i))
for(;r--;)e.splice(n[r],1)}return N=null,e},C=t.getText=function(e){var t,n="",r=0,i=e.nodeType
if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent
for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=C(t)
return n},x=t.selectors={cacheLength:50,createPseudo:r,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(be,xe),e[3]=(e[3]||e[4]||e[5]||"").replace(be,xe),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2]
return he.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&pe.test(n)&&(t=S(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(be,xe).toLowerCase()
return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=U[e+" "]
return t||(t=RegExp("(^|"+ne+")"+e+"("+ne+"|$)"))&&U(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e)
return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(se," ")+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t
return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,m=o!==a?"nextSibling":"previousSibling",g=t.parentNode,$=s&&t.nodeName.toLowerCase(),v=!u&&!s
if(g){if(o){for(;m;){for(f=t;f=f[m];)if(s?f.nodeName.toLowerCase()===$:1===f.nodeType)return!1
h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?g.firstChild:g.lastChild],a&&v){for(c=g[I]||(g[I]={}),l=c[e]||[],d=l[0]===F&&l[1],p=l[0]===F&&l[2],f=d&&g.childNodes[d];f=++d&&f&&f[m]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[F,d,p]
break}}else if(v&&(l=(t[I]||(t[I]={}))[e])&&l[0]===F)p=l[1]
else for(;(f=++d&&f&&f[m]||(p=d=0)||h.pop())&&((s?f.nodeName.toLowerCase()!==$:1!==f.nodeType)||!++p||(v&&((f[I]||(f[I]={}))[e]=[F,p]),f!==t)););return p-=i,p===r||p%r===0&&p/r>=0}}},PSEUDO:function(e,n){var i,o=x.pseudos[e]||x.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e)
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
if(!o){for(t||(t=S(e)),n=t.length;n--;)o=v(t[n]),o[I]?r.push(o):i.push(o)
o=W(e,y(i,r)),o.selector=e}return o},A=t.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,f=!r&&S(e=l.selector||e)
if(n=n||[],1===f.length){if(o=f[0]=f[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&b.getById&&9===t.nodeType&&j&&x.relative[o[1].type]){if(t=(x.find.ID(a.matches[0].replace(be,xe),t)||[])[0],!t)return n
l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=he.needsContext.test(e)?0:o.length;i--&&(a=o[i],!x.relative[s=a.type]);)if((u=x.find[s])&&(r=u(a.matches[0].replace(be,xe),ye.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return Z.apply(n,r),n
break}}return(l||T(e,f))(r,t,!j,n,ye.test(e)&&c(t.parentNode)||t),n},b.sortStable=I.split("").sort(z).join("")===I,b.detectDuplicates=!!_,D(),b.sortDetached=i(function(e){return 1&e.compareDocumentPosition(O.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),b.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(te,function(e,t,n){var r
return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e),Mt.find=V,Mt.expr=V.selectors,Mt.expr[":"]=Mt.expr.pseudos,Mt.unique=V.uniqueSort,Mt.text=V.getText,Mt.isXMLDoc=V.isXML,Mt.contains=V.contains,U=Mt.expr.match.needsContext,B=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,W=/^.[^:#\[\.,]*$/,Mt.filter=function(e,t,n){var r=t[0]
return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?Mt.find.matchesSelector(r,e)?[r]:[]:Mt.find.matches(e,Mt.grep(t,function(e){return 1===e.nodeType}))},Mt.fn.extend({find:function(e){var t,n=this.length,r=[],i=this
if("string"!=typeof e)return this.pushStack(Mt(e).filter(function(){for(t=0;n>t;t++)if(Mt.contains(i[t],this))return!0}))
for(t=0;n>t;t++)Mt.find(e,i[t],r)
return r=this.pushStack(n>1?Mt.unique(r):r),r.selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&U.test(e)?Mt(e):e||[],!1).length}}),G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,X=Mt.fn.init=function(e,t){var n,r
if(!e)return this
if("string"==typeof e){if(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:G.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||z).find(e):this.constructor(t).find(e)
if(n[1]){if(t=t instanceof Mt?t[0]:t,Mt.merge(this,Mt.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:Dt,!0)),B.test(n[1])&&Mt.isPlainObject(t))for(n in t)Mt.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n])
return this}return r=Dt.getElementById(n[2]),r&&r.parentNode&&(this.length=1,this[0]=r),this.context=Dt,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):Mt.isFunction(e)?void 0!==z.ready?z.ready(e):e(Mt):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),Mt.makeArray(e,this))},X.prototype=Mt.fn,z=Mt(Dt),Y=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0},Mt.extend({dir:function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&Mt(e).is(n))break
r.push(e)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e)
return n}}),Mt.fn.extend({has:function(e){var t=Mt(e,this),n=t.length
return this.filter(function(){for(var e=0;n>e;e++)if(Mt.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],a=U.test(e)||"string"!=typeof e?Mt(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&Mt.find.matchesSelector(n,e))){o.push(n)
break}return this.pushStack(o.length>1?Mt.unique(o):o)},index:function(e){return e?"string"==typeof e?Tt.call(Mt(e),this[0]):Tt.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(Mt.unique(Mt.merge(this.get(),Mt(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),Mt.each({parent:function(e){var t=e.parentNode
return t&&11!==t.nodeType?t:null},parents:function(e){return Mt.dir(e,"parentNode")},parentsUntil:function(e,t,n){return Mt.dir(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return Mt.dir(e,"nextSibling")},prevAll:function(e){return Mt.dir(e,"previousSibling")},nextUntil:function(e,t,n){return Mt.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return Mt.dir(e,"previousSibling",n)},siblings:function(e){return Mt.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return Mt.sibling(e.firstChild)},contents:function(e){return e.contentDocument||Mt.merge([],e.childNodes)}},function(e,t){Mt.fn[e]=function(n,r){var i=Mt.map(this,t,n)
return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=Mt.filter(r,i)),this.length>1&&(J[e]||Mt.unique(i),Y.test(e)&&i.reverse()),this.pushStack(i)}}),K=/\S+/g,Z={},Mt.Callbacks=function(e){e="string"==typeof e?Z[e]||o(e):Mt.extend({},e)
var t,n,r,i,a,s,u=[],l=!e.once&&[],c=function(o){for(t=e.memory&&o,n=!0,s=i||0,i=0,a=u.length,r=!0;u&&a>s;s++)if(u[s].apply(o[0],o[1])===!1&&e.stopOnFalse){t=!1
break}r=!1,u&&(l?l.length&&c(l.shift()):t?u=[]:f.disable())},f={add:function(){if(u){var n=u.length
!function o(t){Mt.each(t,function(t,n){var r=Mt.type(n)
"function"===r?e.unique&&f.has(n)||u.push(n):n&&n.length&&"string"!==r&&o(n)})}(arguments),r?a=u.length:t&&(i=n,c(t))}return this},remove:function(){return u&&Mt.each(arguments,function(e,t){for(var n;(n=Mt.inArray(t,u,n))>-1;)u.splice(n,1),r&&(a>=n&&a--,s>=n&&s--)}),this},has:function(e){return e?Mt.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],a=0,this},disable:function(){return u=l=t=void 0,this},disabled:function(){return!u},lock:function(){return l=void 0,t||f.disable(),this},locked:function(){return!l},fireWith:function(e,t){return!u||n&&!l||(t=t||[],t=[e,t.slice?t.slice():t],r?l.push(t):c(t)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!n}}
return f},Mt.extend({Deferred:function(e){var t=[["resolve","done",Mt.Callbacks("once memory"),"resolved"],["reject","fail",Mt.Callbacks("once memory"),"rejected"],["notify","progress",Mt.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments
return Mt.Deferred(function(n){Mt.each(t,function(t,o){var a=Mt.isFunction(e[t])&&e[t]
i[o[1]](function(){var e=a&&a.apply(this,arguments)
e&&Mt.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?Mt.extend(e,r):r}},i={}
return r.pipe=r.then,Mt.each(t,function(e,o){var a=o[2],s=o[3]
r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=Ct.call(arguments),a=o.length,s=1!==a||e&&Mt.isFunction(e.promise)?a:0,u=1===s?e:Mt.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?Ct.call(arguments):i,r===t?u.notifyWith(n,r):--s||u.resolveWith(n,r)}}
if(a>1)for(t=Array(a),n=Array(a),r=Array(a);a>i;i++)o[i]&&Mt.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--s
return s||u.resolveWith(r,o),u.promise()}}),Mt.fn.ready=function(e){return Mt.ready.promise().done(e),this},Mt.extend({isReady:!1,readyWait:1,holdReady:function(e){e?Mt.readyWait++:Mt.ready(!0)},ready:function(e){(e===!0?--Mt.readyWait:Mt.isReady)||(Mt.isReady=!0,e!==!0&&--Mt.readyWait>0||(Q.resolveWith(Dt,[Mt]),Mt.fn.triggerHandler&&(Mt(Dt).triggerHandler("ready"),Mt(Dt).off("ready"))))}}),Mt.ready.promise=function(t){return Q||(Q=Mt.Deferred(),"complete"===Dt.readyState?setTimeout(Mt.ready):(Dt.addEventListener("DOMContentLoaded",a,!1),e.addEventListener("load",a,!1))),Q.promise(t)},Mt.ready.promise(),ee=Mt.access=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n
if("object"===Mt.type(n)){i=!0
for(s in n)Mt.access(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,Mt.isFunction(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(Mt(e),n)})),t))for(;u>s;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)))
return i?e:l?t.call(e):u?t(e[0],n):o},Mt.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},s.uid=1,s.accepts=Mt.acceptData,s.prototype={key:function(e){if(!s.accepts(e))return 0
var t={},n=e[this.expando]
if(!n){n=s.uid++
try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,Mt.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i]
if("string"==typeof t)o[t]=n
else if(Mt.isEmptyObject(o))Mt.extend(this.cache[i],t)
else for(r in t)o[r]=t[r]
return o},get:function(e,t){var n=this.cache[this.key(e)]
return void 0===t?n:n[t]},access:function(e,t,n){var r
return void 0===t||t&&"string"==typeof t&&void 0===n?(r=this.get(e,t),void 0!==r?r:this.get(e,Mt.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),a=this.cache[o]
if(void 0===t)this.cache[o]={}
else{Mt.isArray(t)?r=t.concat(t.map(Mt.camelCase)):(i=Mt.camelCase(t),t in a?r=[t,i]:(r=i,r=r in a?[r]:r.match(K)||[])),n=r.length
for(;n--;)delete a[r[n]]}},hasData:function(e){return!Mt.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},te=new s,ne=new s,re=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ie=/([A-Z])/g,Mt.extend({hasData:function(e){return ne.hasData(e)||te.hasData(e)},data:function(e,t,n){return ne.access(e,t,n)},removeData:function(e,t){ne.remove(e,t)},_data:function(e,t,n){return te.access(e,t,n)},_removeData:function(e,t){te.remove(e,t)}}),Mt.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes
if(void 0===e){if(this.length&&(i=ne.get(o),1===o.nodeType&&!te.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=Mt.camelCase(r.slice(5)),u(o,r,i[r])))
te.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){ne.set(this,e)}):ee(this,function(t){var n,r=Mt.camelCase(e)
if(o&&void 0===t){if(n=ne.get(o,e),void 0!==n)return n
if(n=ne.get(o,r),void 0!==n)return n
if(n=u(o,r,void 0),void 0!==n)return n}else this.each(function(){var n=ne.get(this,r)
ne.set(this,r,t),-1!==e.indexOf("-")&&void 0!==n&&ne.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){ne.remove(this,e)})}}),Mt.extend({queue:function(e,t,n){var r
return e?(t=(t||"fx")+"queue",r=te.get(e,t),n&&(!r||Mt.isArray(n)?r=te.access(e,t,Mt.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx"
var n=Mt.queue(e,t),r=n.length,i=n.shift(),o=Mt._queueHooks(e,t),a=function(){Mt.dequeue(e,t)}
"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks"
return te.get(e,n)||te.access(e,n,{empty:Mt.Callbacks("once memory").add(function(){te.remove(e,[t+"queue",n])})})}}),Mt.fn.extend({queue:function(e,t){var n=2
return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?Mt.queue(this[0],e):void 0===t?this:this.each(function(){var n=Mt.queue(this,e,t)
Mt._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&Mt.dequeue(this,e)})},dequeue:function(e){return this.each(function(){Mt.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=Mt.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])}
for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)n=te.get(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s))
return s(),i.promise(t)}}),oe=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ae=["Top","Right","Bottom","Left"],se=function(e,t){return e=t||e,"none"===Mt.css(e,"display")||!Mt.contains(e.ownerDocument,e)},ue=/^(?:checkbox|radio)$/i,function(){var e=Dt.createDocumentFragment(),t=e.appendChild(Dt.createElement("div")),n=Dt.createElement("input")
n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),_t.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",_t.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}(),le="undefined",_t.focusinBubbles="onfocusin"in e,ce=/^key/,fe=/^(?:mouse|pointer|contextmenu)|click/,pe=/^(?:focusinfocus|focusoutblur)$/,de=/^([^.]*)(?:\.(.+)|)$/,Mt.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,m,g=te.get(e)
if(g)for(n.handler&&(o=n,n=o.handler,i=o.selector),n.guid||(n.guid=Mt.guid++),(u=g.events)||(u=g.events={}),(a=g.handle)||(a=g.handle=function(t){return typeof Mt!==le&&Mt.event.triggered!==t.type?Mt.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(K)||[""],l=t.length;l--;)s=de.exec(t[l])||[],d=m=s[1],h=(s[2]||"").split(".").sort(),d&&(f=Mt.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=Mt.event.special[d]||{},c=Mt.extend({type:d,origType:m,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&Mt.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||(p=u[d]=[],p.delegateCount=0,f.setup&&f.setup.call(e,r,h,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),Mt.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,m,g=te.hasData(e)&&te.get(e)
if(g&&(u=g.events)){for(t=(t||"").match(K)||[""],l=t.length;l--;)if(s=de.exec(t[l])||[],d=m=s[1],h=(s[2]||"").split(".").sort(),d){for(f=Mt.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&m!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c))
a&&!p.length&&(f.teardown&&f.teardown.call(e,h,g.handle)!==!1||Mt.removeEvent(e,d,g.handle),delete u[d])}else for(d in u)Mt.event.remove(e,d+t[l],n,r,!0)
Mt.isEmptyObject(u)&&(delete g.handle,te.remove(e,"events"))}},trigger:function(t,n,r,i){var o,a,s,u,l,c,f,p=[r||Dt],d=Nt.call(t,"type")?t.type:t,h=Nt.call(t,"namespace")?t.namespace.split("."):[]
if(a=s=r=r||Dt,3!==r.nodeType&&8!==r.nodeType&&!pe.test(d+Mt.event.triggered)&&(d.indexOf(".")>=0&&(h=d.split("."),d=h.shift(),h.sort()),l=d.indexOf(":")<0&&"on"+d,t=t[Mt.expando]?t:new Mt.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:Mt.makeArray(n,[t]),f=Mt.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!Mt.isWindow(r)){for(u=f.delegateType||d,pe.test(u+d)||(a=a.parentNode);a;a=a.parentNode)p.push(a),s=a
s===(r.ownerDocument||Dt)&&p.push(s.defaultView||s.parentWindow||e)}for(o=0;(a=p[o++])&&!t.isPropagationStopped();)t.type=o>1?u:f.bindType||d,c=(te.get(a,"events")||{})[t.type]&&te.get(a,"handle"),c&&c.apply(a,n),c=l&&a[l],c&&c.apply&&Mt.acceptData(a)&&(t.result=c.apply(a,n),t.result===!1&&t.preventDefault())
return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(p.pop(),n)!==!1||!Mt.acceptData(r)||l&&Mt.isFunction(r[d])&&!Mt.isWindow(r)&&(s=r[l],s&&(r[l]=null),Mt.event.triggered=d,r[d](),Mt.event.triggered=void 0,s&&(r[l]=s)),t.result}},dispatch:function(e){e=Mt.event.fix(e)
var t,n,r,i,o,a=[],s=Ct.call(arguments),u=(te.get(this,"events")||{})[e.type]||[],l=Mt.event.special[e.type]||{}
if(s[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){for(a=Mt.event.handlers.call(this,e,u),t=0;(i=a[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((Mt.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))
return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,a=[],s=t.delegateCount,u=e.target
if(s&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;s>n;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?Mt(i,this).index(u)>=0:Mt.find(i,this,null,[u]).length),r[i]&&r.push(o)
r.length&&a.push({elem:u,handlers:r})}return s<t.length&&a.push({elem:this,handlers:t.slice(s)}),a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button
return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||Dt,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[Mt.expando])return e
var t,n,r,i=e.type,o=e,a=this.fixHooks[i]
for(a||(this.fixHooks[i]=a=fe.test(i)?this.mouseHooks:ce.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new Mt.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n]
return e.target||(e.target=Dt),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==f()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===f()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&Mt.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return Mt.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=Mt.extend(new Mt.Event,n,{type:e,isSimulated:!0,originalEvent:{}})
r?Mt.event.trigger(i,null,t):Mt.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},Mt.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},Mt.Event=function(e,t){return this instanceof Mt.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?l:c):this.type=e,t&&Mt.extend(this,t),this.timeStamp=e&&e.timeStamp||Mt.now(),void(this[Mt.expando]=!0)):new Mt.Event(e,t)},Mt.Event.prototype={isDefaultPrevented:c,isPropagationStopped:c,isImmediatePropagationStopped:c,preventDefault:function(){var e=this.originalEvent
this.isDefaultPrevented=l,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent
this.isPropagationStopped=l,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent
this.isImmediatePropagationStopped=l,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},Mt.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){Mt.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj
return(!i||i!==r&&!Mt.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),_t.focusinBubbles||Mt.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){Mt.event.simulate(t,e.target,Mt.event.fix(e),!0)}
Mt.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=te.access(r,t)
i||r.addEventListener(e,n,!0),te.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=te.access(r,t)-1
i?te.access(r,t,i):(r.removeEventListener(e,n,!0),te.remove(r,t))}}}),Mt.fn.extend({on:function(e,t,n,r,i){var o,a
if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0)
for(a in e)this.on(a,t,n,e[a],i)
return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),r===!1)r=c
else if(!r)return this
return 1===i&&(o=r,r=function(e){return Mt().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=Mt.guid++)),this.each(function(){Mt.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i
if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,Mt(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this
if("object"==typeof e){for(i in e)this.off(i,t,e[i])
return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=c),this.each(function(){Mt.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){Mt.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0]
return n?Mt.event.trigger(e,t,n,!0):void 0}}),he=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,me=/<([\w:]+)/,ge=/<|&#?\w+;/,$e=/<(?:script|style|link)/i,ve=/checked\s*(?:[^=]|=\s*.checked.)/i,ye=/^$|\/(?:java|ecma)script/i,we=/^true\/(.*)/,be=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,xe={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]},xe.optgroup=xe.option,xe.tbody=xe.tfoot=xe.colgroup=xe.caption=xe.thead,xe.th=xe.td,Mt.extend({clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=Mt.contains(e.ownerDocument,e)
if(!(_t.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||Mt.isXMLDoc(e)))for(a=$(s),o=$(e),r=0,i=o.length;i>r;r++)v(o[r],a[r])
if(t)if(n)for(o=o||$(e),a=a||$(s),r=0,i=o.length;i>r;r++)g(o[r],a[r])
else g(e,s)
return a=$(s,"script"),a.length>0&&m(a,!u&&$(e,"script")),s},buildFragment:function(e,t,n,r){for(var i,o,a,s,u,l,c=t.createDocumentFragment(),f=[],p=0,d=e.length;d>p;p++)if(i=e[p],i||0===i)if("object"===Mt.type(i))Mt.merge(f,i.nodeType?[i]:i)
else if(ge.test(i)){for(o=o||c.appendChild(t.createElement("div")),a=(me.exec(i)||["",""])[1].toLowerCase(),s=xe[a]||xe._default,o.innerHTML=s[1]+i.replace(he,"<$1></$2>")+s[2],l=s[0];l--;)o=o.lastChild
Mt.merge(f,o.childNodes),o=c.firstChild,o.textContent=""}else f.push(t.createTextNode(i))
for(c.textContent="",p=0;i=f[p++];)if((!r||-1===Mt.inArray(i,r))&&(u=Mt.contains(i.ownerDocument,i),o=$(c.appendChild(i),"script"),u&&m(o),n))for(l=0;i=o[l++];)ye.test(i.type||"")&&n.push(i)
return c},cleanData:function(e){for(var t,n,r,i,o=Mt.event.special,a=0;void 0!==(n=e[a]);a++){if(Mt.acceptData(n)&&(i=n[te.expando],i&&(t=te.cache[i]))){if(t.events)for(r in t.events)o[r]?Mt.event.remove(n,r):Mt.removeEvent(n,r,t.handle)
te.cache[i]&&delete te.cache[i]}delete ne.cache[n[ne.expando]]}}}),Mt.fn.extend({text:function(e){return ee(this,function(e){return void 0===e?Mt.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e)
t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e)
t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?Mt.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||Mt.cleanData($(n)),n.parentNode&&(t&&Mt.contains(n.ownerDocument,n)&&m($(n,"script")),n.parentNode.removeChild(n))
return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(Mt.cleanData($(e,!1)),e.textContent="")
return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return Mt.clone(this,e,t)})},html:function(e){return ee(this,function(e){var t=this[0]||{},n=0,r=this.length
if(void 0===e&&1===t.nodeType)return t.innerHTML
if("string"==typeof e&&!$e.test(e)&&!xe[(me.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(he,"<$1></$2>")
try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(Mt.cleanData($(t,!1)),t.innerHTML=e)
t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0]
return this.domManip(arguments,function(t){e=this.parentNode,Mt.cleanData($(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=kt.apply([],e)
var n,r,i,o,a,s,u=0,l=this.length,c=this,f=l-1,p=e[0],m=Mt.isFunction(p)
if(m||l>1&&"string"==typeof p&&!_t.checkClone&&ve.test(p))return this.each(function(n){var r=c.eq(n)
m&&(e[0]=p.call(this,n,r.html())),r.domManip(e,t)})
if(l&&(n=Mt.buildFragment(e,this[0].ownerDocument,!1,this),r=n.firstChild,1===n.childNodes.length&&(n=r),r)){for(i=Mt.map($(n,"script"),d),o=i.length;l>u;u++)a=n,u!==f&&(a=Mt.clone(a,!0,!0),o&&Mt.merge(i,$(a,"script"))),t.call(this[u],a,u)
if(o)for(s=i[i.length-1].ownerDocument,Mt.map(i,h),u=0;o>u;u++)a=i[u],ye.test(a.type||"")&&!te.access(a,"globalEval")&&Mt.contains(s,a)&&(a.src?Mt._evalUrl&&Mt._evalUrl(a.src):Mt.globalEval(a.textContent.replace(be,"")))}return this}}),Mt.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){Mt.fn[e]=function(e){for(var n,r=[],i=Mt(e),o=i.length-1,a=0;o>=a;a++)n=a===o?this:this.clone(!0),Mt(i[a])[t](n),St.apply(r,n.get())
return this.pushStack(r)}}),ke={},Se=/^margin/,Te=RegExp("^("+oe+")(?!px)[a-z%]+$","i"),Ae=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)},function(){function t(){a.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",a.innerHTML="",i.appendChild(o)
var t=e.getComputedStyle(a,null)
n="1%"!==t.top,r="4px"===t.width,i.removeChild(o)}var n,r,i=Dt.documentElement,o=Dt.createElement("div"),a=Dt.createElement("div")
a.style&&(a.style.backgroundClip="content-box",a.cloneNode(!0).style.backgroundClip="",_t.clearCloneStyle="content-box"===a.style.backgroundClip,o.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",o.appendChild(a),e.getComputedStyle&&Mt.extend(_t,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==r&&t(),r},reliableMarginRight:function(){var t,n=a.appendChild(Dt.createElement("div"))
return n.style.cssText=a.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",a.style.width="1px",i.appendChild(o),t=!parseFloat(e.getComputedStyle(n,null).marginRight),i.removeChild(o),a.removeChild(n),t}}))}(),Mt.swap=function(e,t,n,r){var i,o,a={}
for(o in t)a[o]=e.style[o],e.style[o]=t[o]
i=n.apply(e,r||[])
for(o in t)e.style[o]=a[o]
return i},Ee=/^(none|table(?!-c[ea]).+)/,Ne=RegExp("^("+oe+")(.*)$","i"),_e=RegExp("^([+-])=("+oe+")","i"),De={position:"absolute",visibility:"hidden",display:"block"},Oe={letterSpacing:"0",fontWeight:"400"},Me=["Webkit","O","Moz","ms"],Mt.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=b(e,"opacity")
return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=Mt.camelCase(t),u=e.style
return t=Mt.cssProps[s]||(Mt.cssProps[s]=C(u,s)),a=Mt.cssHooks[t]||Mt.cssHooks[s],void 0===n?a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:u[t]:(o=typeof n,"string"===o&&(i=_e.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(Mt.css(e,t)),o="number"),null!=n&&n===n&&("number"!==o||Mt.cssNumber[s]||(n+="px"),_t.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u[t]=n)),void 0)}},css:function(e,t,n,r){var i,o,a,s=Mt.camelCase(t)
return t=Mt.cssProps[s]||(Mt.cssProps[s]=C(e.style,s)),a=Mt.cssHooks[t]||Mt.cssHooks[s],a&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=b(e,t,r)),"normal"===i&&t in Oe&&(i=Oe[t]),""===n||n?(o=parseFloat(i),n===!0||Mt.isNumeric(o)?o||0:i):i}}),Mt.each(["height","width"],function(e,t){Mt.cssHooks[t]={get:function(e,n,r){return n?Ee.test(Mt.css(e,"display"))&&0===e.offsetWidth?Mt.swap(e,De,function(){return T(e,t,r)}):T(e,t,r):void 0},set:function(e,n,r){var i=r&&Ae(e)
return k(e,n,r?S(e,t,r,"border-box"===Mt.css(e,"boxSizing",!1,i),i):0)}}}),Mt.cssHooks.marginRight=x(_t.reliableMarginRight,function(e,t){return t?Mt.swap(e,{display:"inline-block"},b,[e,"marginRight"]):void 0}),Mt.each({margin:"",padding:"",border:"Width"},function(e,t){Mt.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+ae[r]+t]=o[r]||o[r-2]||o[0]
return i}},Se.test(e)||(Mt.cssHooks[e+t].set=k)}),Mt.fn.extend({css:function(e,t){return ee(this,function(e,t,n){var r,i,o={},a=0
if(Mt.isArray(t)){for(r=Ae(e),i=t.length;i>a;a++)o[t[a]]=Mt.css(e,t[a],!1,r)
return o}return void 0!==n?Mt.style(e,t,n):Mt.css(e,t)},e,t,arguments.length>1)},show:function(){return A(this,!0)},hide:function(){return A(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){se(this)?Mt(this).show():Mt(this).hide()})}}),Mt.Tween=E,E.prototype={constructor:E,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(Mt.cssNumber[n]?"":"px")},cur:function(){var e=E.propHooks[this.prop]
return e&&e.get?e.get(this):E.propHooks._default.get(this)},run:function(e){var t,n=E.propHooks[this.prop]
return this.options.duration?this.pos=t=Mt.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):E.propHooks._default.set(this),this}},E.prototype.init.prototype=E.prototype,E.propHooks={_default:{get:function(e){var t
return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=Mt.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){Mt.fx.step[e.prop]?Mt.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[Mt.cssProps[e.prop]]||Mt.cssHooks[e.prop])?Mt.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},E.propHooks.scrollTop=E.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},Mt.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},Mt.fx=E.prototype.init,Mt.fx.step={},qe=/^(?:toggle|show|hide)$/,Le=RegExp("^(?:([+-])=|)("+oe+")([a-z%]*)$","i"),Re=/queueHooks$/,Ie=[O],He={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Le.exec(t),o=i&&i[3]||(Mt.cssNumber[e]?"":"px"),a=(Mt.cssNumber[e]||"px"!==o&&+r)&&Le.exec(Mt.css(n.elem,e)),s=1,u=20
if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1
do s=s||".5",a/=s,Mt.style(n.elem,e,a+o)
while(s!==(s=n.cur()/r)&&1!==s&&--u)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]},Mt.Animation=Mt.extend(j,{tweener:function(e,t){Mt.isFunction(e)?(t=e,e=["*"]):e=e.split(" ")
for(var n,r=0,i=e.length;i>r;r++)n=e[r],He[n]=He[n]||[],He[n].unshift(t)},prefilter:function(e,t){t?Ie.unshift(e):Ie.push(e)}}),Mt.speed=function(e,t,n){var r=e&&"object"==typeof e?Mt.extend({},e):{complete:n||!n&&t||Mt.isFunction(e)&&e,duration:e,easing:n&&t||t&&!Mt.isFunction(t)&&t}
return r.duration=Mt.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in Mt.fx.speeds?Mt.fx.speeds[r.duration]:Mt.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){Mt.isFunction(r.old)&&r.old.call(this),r.queue&&Mt.dequeue(this,r.queue)},r},Mt.fn.extend({fadeTo:function(e,t,n,r){return this.filter(se).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=Mt.isEmptyObject(e),o=Mt.speed(t,n,r),a=function(){var t=j(this,Mt.extend({},e),o);(i||te.get(this,"finish"))&&t.stop(!0)}
return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop
delete e.stop,t(n)}
return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=Mt.timers,a=te.get(this)
if(i)a[i]&&a[i].stop&&r(a[i])
else for(i in a)a[i]&&a[i].stop&&Re.test(i)&&r(a[i])
for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&Mt.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=te.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=Mt.timers,a=r?r.length:0
for(n.finish=!0,Mt.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1))
for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this)
delete n.finish})}}),Mt.each(["toggle","show","hide"],function(e,t){var n=Mt.fn[t]
Mt.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(_(t,!0),e,r,i)}}),Mt.each({slideDown:_("show"),slideUp:_("hide"),slideToggle:_("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){Mt.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),Mt.timers=[],Mt.fx.tick=function(){var e,t=0,n=Mt.timers
for(je=Mt.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1)
n.length||Mt.fx.stop(),je=void 0},Mt.fx.timer=function(e){Mt.timers.push(e),e()?Mt.fx.start():Mt.timers.pop()},Mt.fx.interval=13,Mt.fx.start=function(){Pe||(Pe=setInterval(Mt.fx.tick,Mt.fx.interval))},Mt.fx.stop=function(){clearInterval(Pe),Pe=null},Mt.fx.speeds={slow:600,fast:200,_default:400},Mt.fn.delay=function(e,t){return e=Mt.fx?Mt.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e)
n.stop=function(){clearTimeout(r)}})},function(){var e=Dt.createElement("input"),t=Dt.createElement("select"),n=t.appendChild(Dt.createElement("option"))
e.type="checkbox",_t.checkOn=""!==e.value,_t.optSelected=n.selected,t.disabled=!0,_t.optDisabled=!n.disabled,e=Dt.createElement("input"),e.value="t",e.type="radio",_t.radioValue="t"===e.value}(),Ue=Mt.expr.attrHandle,Mt.fn.extend({attr:function(e,t){return ee(this,Mt.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){Mt.removeAttr(this,e)})}}),Mt.extend({attr:function(e,t,n){var r,i,o=e.nodeType
if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute===le?Mt.prop(e,t,n):(1===o&&Mt.isXMLDoc(e)||(t=t.toLowerCase(),r=Mt.attrHooks[t]||(Mt.expr.match.bool.test(t)?Ve:Fe)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=Mt.find.attr(e,t),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void Mt.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(K)
if(o&&1===e.nodeType)for(;n=o[i++];)r=Mt.propFix[n]||n,Mt.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!_t.radioValue&&"radio"===t&&Mt.nodeName(e,"input")){var n=e.value
return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),Ve={set:function(e,t,n){return t===!1?Mt.removeAttr(e,n):e.setAttribute(n,n),n}},Mt.each(Mt.expr.match.bool.source.match(/\w+/g),function(e,t){var n=Ue[t]||Mt.find.attr
Ue[t]=function(e,t,r){var i,o
return r||(o=Ue[t],Ue[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,Ue[t]=o),i}}),Be=/^(?:input|select|textarea|button)$/i,Mt.fn.extend({prop:function(e,t){return ee(this,Mt.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[Mt.propFix[e]||e]})}}),Mt.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,a=e.nodeType
if(e&&3!==a&&8!==a&&2!==a)return o=1!==a||!Mt.isXMLDoc(e),o&&(t=Mt.propFix[t]||t,i=Mt.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||Be.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),_t.optSelected||(Mt.propHooks.selected={get:function(e){var t=e.parentNode
return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),Mt.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){Mt.propFix[this.toLowerCase()]=this}),We=/[\t\r\n\f]/g,Mt.fn.extend({addClass:function(e){var t,n,r,i,o,a,s="string"==typeof e&&e,u=0,l=this.length
if(Mt.isFunction(e))return this.each(function(t){Mt(this).addClass(e.call(this,t,this.className))})
if(s)for(t=(e||"").match(K)||[];l>u;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(We," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ")
a=Mt.trim(r),n.className!==a&&(n.className=a)}return this},removeClass:function(e){var t,n,r,i,o,a,s=0===arguments.length||"string"==typeof e&&e,u=0,l=this.length
if(Mt.isFunction(e))return this.each(function(t){Mt(this).removeClass(e.call(this,t,this.className))})
if(s)for(t=(e||"").match(K)||[];l>u;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(We," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ")
a=e?Mt.trim(r):"",n.className!==a&&(n.className=a)}return this},toggleClass:function(e,t){var n=typeof e
return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(Mt.isFunction(e)?function(n){Mt(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,r=0,i=Mt(this),o=e.match(K)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t)
else(n===le||"boolean"===n)&&(this.className&&te.set(this,"__className__",this.className),this.className=this.className||e===!1?"":te.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(We," ").indexOf(t)>=0)return!0
return!1}}),ze=/\r/g,Mt.fn.extend({val:function(e){var t,n,r,i=this[0]
{if(arguments.length)return r=Mt.isFunction(e),this.each(function(n){var i
1===this.nodeType&&(i=r?e.call(this,n,Mt(this).val()):e,null==i?i="":"number"==typeof i?i+="":Mt.isArray(i)&&(i=Mt.map(i,function(e){return null==e?"":e+""})),t=Mt.valHooks[this.type]||Mt.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})
if(i)return t=Mt.valHooks[i.type]||Mt.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(ze,""):null==n?"":n)}}}),Mt.extend({valHooks:{option:{get:function(e){var t=Mt.find.attr(e,"value")
return null!=t?t:Mt.trim(Mt.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,u=0>i?s:o?i:0;s>u;u++)if(n=r[u],!(!n.selected&&u!==i||(_t.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&Mt.nodeName(n.parentNode,"optgroup"))){if(t=Mt(n).val(),o)return t
a.push(t)}return a},set:function(e,t){for(var n,r,i=e.options,o=Mt.makeArray(t),a=i.length;a--;)r=i[a],(r.selected=Mt.inArray(r.value,o)>=0)&&(n=!0)
return n||(e.selectedIndex=-1),o}}}}),Mt.each(["radio","checkbox"],function(){Mt.valHooks[this]={set:function(e,t){return Mt.isArray(t)?e.checked=Mt.inArray(Mt(e).val(),t)>=0:void 0}},_t.checkOn||(Mt.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),Mt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){Mt.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),Mt.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),Ge=Mt.now(),Xe=/\?/,Mt.parseJSON=function(e){return JSON.parse(e+"")},Mt.parseXML=function(e){var t,n
if(!e||"string"!=typeof e)return null
try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&Mt.error("Invalid XML: "+e),t},Ye=/#.*$/,Je=/([?&])_=[^&]*/,Ke=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ze=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Qe=/^(?:GET|HEAD)$/,et=/^\/\//,tt=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,nt={},rt={},it="*/".concat("*"),ot=e.location.href,at=tt.exec(ot.toLowerCase())||[],Mt.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ot,type:"GET",isLocal:Ze.test(at[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":it,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":Mt.parseJSON,"text xml":Mt.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?L(L(e,Mt.ajaxSettings),t):L(Mt.ajaxSettings,e)},ajaxPrefilter:P(nt),ajaxTransport:P(rt),ajax:function(e,t){function n(e,t,n,a){var u,c,$,v,w,x=t
2!==y&&(y=2,s&&clearTimeout(s),r=void 0,o=a||"",b.readyState=e>0?4:0,u=e>=200&&300>e||304===e,n&&(v=R(f,b,n)),v=I(f,v,b,u),u?(f.ifModified&&(w=b.getResponseHeader("Last-Modified"),w&&(Mt.lastModified[i]=w),w=b.getResponseHeader("etag"),w&&(Mt.etag[i]=w)),204===e||"HEAD"===f.type?x="nocontent":304===e?x="notmodified":(x=v.state,c=v.data,$=v.error,u=!$)):($=x,(e||!x)&&(x="error",0>e&&(e=0))),b.status=e,b.statusText=(t||x)+"",u?h.resolveWith(p,[c,x,b]):h.rejectWith(p,[b,x,$]),b.statusCode(g),g=void 0,l&&d.trigger(u?"ajaxSuccess":"ajaxError",[b,f,u?c:$]),m.fireWith(p,[b,x]),l&&(d.trigger("ajaxComplete",[b,f]),--Mt.active||Mt.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{}
var r,i,o,a,s,u,l,c,f=Mt.ajaxSetup({},t),p=f.context||f,d=f.context&&(p.nodeType||p.jquery)?Mt(p):Mt.event,h=Mt.Deferred(),m=Mt.Callbacks("once memory"),g=f.statusCode||{},$={},v={},y=0,w="canceled",b={readyState:0,getResponseHeader:function(e){var t
if(2===y){if(!a)for(a={};t=Ke.exec(o);)a[t[1].toLowerCase()]=t[2]
t=a[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===y?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase()
return y||(e=v[n]=v[n]||e,$[e]=t),this},overrideMimeType:function(e){return y||(f.mimeType=e),this},statusCode:function(e){var t
if(e)if(2>y)for(t in e)g[t]=[g[t],e[t]]
else b.always(e[b.status])
return this},abort:function(e){var t=e||w
return r&&r.abort(t),n(0,t),this}}
if(h.promise(b).complete=m.add,b.success=b.done,b.error=b.fail,f.url=((e||f.url||ot)+"").replace(Ye,"").replace(et,at[1]+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=Mt.trim(f.dataType||"*").toLowerCase().match(K)||[""],null==f.crossDomain&&(u=tt.exec(f.url.toLowerCase()),f.crossDomain=!(!u||u[1]===at[1]&&u[2]===at[2]&&(u[3]||("http:"===u[1]?"80":"443"))===(at[3]||("http:"===at[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=Mt.param(f.data,f.traditional)),q(nt,f,t,b),2===y)return b
l=Mt.event&&f.global,l&&0===Mt.active++&&Mt.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!Qe.test(f.type),i=f.url,f.hasContent||(f.data&&(i=f.url+=(Xe.test(i)?"&":"?")+f.data,delete f.data),f.cache===!1&&(f.url=Je.test(i)?i.replace(Je,"$1_="+Ge++):i+(Xe.test(i)?"&":"?")+"_="+Ge++)),f.ifModified&&(Mt.lastModified[i]&&b.setRequestHeader("If-Modified-Since",Mt.lastModified[i]),Mt.etag[i]&&b.setRequestHeader("If-None-Match",Mt.etag[i])),(f.data&&f.hasContent&&f.contentType!==!1||t.contentType)&&b.setRequestHeader("Content-Type",f.contentType),b.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+it+"; q=0.01":""):f.accepts["*"])
for(c in f.headers)b.setRequestHeader(c,f.headers[c])
if(f.beforeSend&&(f.beforeSend.call(p,b,f)===!1||2===y))return b.abort()
w="abort"
for(c in{success:1,error:1,complete:1})b[c](f[c])
if(r=q(rt,f,t,b)){b.readyState=1,l&&d.trigger("ajaxSend",[b,f]),f.async&&f.timeout>0&&(s=setTimeout(function(){b.abort("timeout")},f.timeout))
try{y=1,r.send($,n)}catch(x){if(!(2>y))throw x
n(-1,x)}}else n(-1,"No Transport")
return b},getJSON:function(e,t,n){return Mt.get(e,t,n,"json")},getScript:function(e,t){return Mt.get(e,void 0,t,"script")}}),Mt.each(["get","post"],function(e,t){Mt[t]=function(e,n,r,i){return Mt.isFunction(n)&&(i=i||r,r=n,n=void 0),Mt.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),Mt._evalUrl=function(e){return Mt.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},Mt.fn.extend({wrapAll:function(e){var t
return Mt.isFunction(e)?this.each(function(t){Mt(this).wrapAll(e.call(this,t))}):(this[0]&&(t=Mt(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild
return e}).append(this)),this)},wrapInner:function(e){return this.each(Mt.isFunction(e)?function(t){Mt(this).wrapInner(e.call(this,t))}:function(){var t=Mt(this),n=t.contents()
n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=Mt.isFunction(e)
return this.each(function(n){Mt(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){Mt.nodeName(this,"body")||Mt(this).replaceWith(this.childNodes)}).end()}}),Mt.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},Mt.expr.filters.visible=function(e){return!Mt.expr.filters.hidden(e)},st=/%20/g,ut=/\[\]$/,lt=/\r?\n/g,ct=/^(?:submit|button|image|reset|file)$/i,ft=/^(?:input|select|textarea|keygen)/i,Mt.param=function(e,t){var n,r=[],i=function(e,t){t=Mt.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)}
if(void 0===t&&(t=Mt.ajaxSettings&&Mt.ajaxSettings.traditional),Mt.isArray(e)||e.jquery&&!Mt.isPlainObject(e))Mt.each(e,function(){i(this.name,this.value)})
else for(n in e)H(n,e[n],t,i)
return r.join("&").replace(st,"+")},Mt.fn.extend({serialize:function(){return Mt.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=Mt.prop(this,"elements")
return e?Mt.makeArray(e):this}).filter(function(){var e=this.type
return this.name&&!Mt(this).is(":disabled")&&ft.test(this.nodeName)&&!ct.test(e)&&(this.checked||!ue.test(e))}).map(function(e,t){var n=Mt(this).val()
return null==n?null:Mt.isArray(n)?Mt.map(n,function(e){return{name:t.name,value:e.replace(lt,"\r\n")}}):{name:t.name,value:n.replace(lt,"\r\n")}}).get()}}),Mt.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}},pt=0,dt={},ht={0:200,1223:204},mt=Mt.ajaxSettings.xhr(),e.attachEvent&&e.attachEvent("onunload",function(){for(var e in dt)dt[e]()}),_t.cors=!!mt&&"withCredentials"in mt,_t.ajax=mt=!!mt,Mt.ajaxTransport(function(e){var t
return _t.cors||mt&&!e.crossDomain?{send:function(n,r){var i,o=e.xhr(),a=++pt
if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i]
e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest")
for(i in n)o.setRequestHeader(i,n[i])
t=function(e){return function(){t&&(delete dt[a],t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?r(o.status,o.statusText):r(ht[o.status]||o.status,o.statusText,"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t("error"),t=dt[a]=t("abort")
try{o.send(e.hasContent&&e.data||null)}catch(s){if(t)throw s}},abort:function(){t&&t()}}:void 0}),Mt.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return Mt.globalEval(e),e}}}),Mt.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),Mt.ajaxTransport("script",function(e){if(e.crossDomain){var t,n
return{send:function(r,i){t=Mt("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),Dt.head.appendChild(t[0])},abort:function(){n&&n()}}}}),gt=[],$t=/(=)\?(?=&|$)|\?\?/,Mt.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=gt.pop()||Mt.expando+"_"+Ge++
return this[e]=!0,e}}),Mt.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=t.jsonp!==!1&&($t.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&$t.test(t.data)&&"data")
return s||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=Mt.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace($t,"$1"+i):t.jsonp!==!1&&(t.url+=(Xe.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||Mt.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,gt.push(i)),a&&Mt.isFunction(o)&&o(a[0]),a=o=void 0}),"script"):void 0}),Mt.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null
"boolean"==typeof t&&(n=t,t=!1),t=t||Dt
var r=B.exec(e),i=!n&&[]
return r?[t.createElement(r[1])]:(r=Mt.buildFragment([e],t,i),i&&i.length&&Mt(i).remove(),Mt.merge([],r.childNodes))},vt=Mt.fn.load,Mt.fn.load=function(e,t,n){if("string"!=typeof e&&vt)return vt.apply(this,arguments)
var r,i,o,a=this,s=e.indexOf(" ")
return s>=0&&(r=Mt.trim(e.slice(s)),e=e.slice(0,s)),Mt.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&Mt.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?Mt("<div>").append(Mt.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){a.each(n,o||[e.responseText,t,e])}),this},Mt.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){Mt.fn[t]=function(e){return this.on(t,e)}}),Mt.expr.filters.animated=function(e){return Mt.grep(Mt.timers,function(t){return e===t.elem}).length},yt=e.document.documentElement,Mt.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=Mt.css(e,"position"),f=Mt(e),p={}
"static"===c&&(e.style.position="relative"),s=f.offset(),o=Mt.css(e,"top"),u=Mt.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),Mt.isFunction(t)&&(t=t.call(e,n,s)),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},Mt.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){Mt.offset.setOffset(this,e,t)})
var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument
if(o)return t=o.documentElement,Mt.contains(t,r)?(typeof r.getBoundingClientRect!==le&&(i=r.getBoundingClientRect()),n=F(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0}
return"fixed"===Mt.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),Mt.nodeName(e[0],"html")||(r=e.offset()),r.top+=Mt.css(e[0],"borderTopWidth",!0),r.left+=Mt.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-Mt.css(n,"marginTop",!0),left:t.left-r.left-Mt.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||yt;e&&!Mt.nodeName(e,"html")&&"static"===Mt.css(e,"position");)e=e.offsetParent
return e||yt})}}),Mt.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n
Mt.fn[t]=function(i){return ee(this,function(t,i,o){var a=F(t)
return void 0===o?a?a[n]:t[i]:void(a?a.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o)},t,i,arguments.length,null)}}),Mt.each(["top","left"],function(e,t){Mt.cssHooks[t]=x(_t.pixelPosition,function(e,n){return n?(n=b(e,t),Te.test(n)?Mt(e).position()[t]+"px":n):void 0})}),Mt.each({Height:"height",Width:"width"},function(e,t){Mt.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){Mt.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),a=n||(r===!0||i===!0?"margin":"border")
return ee(this,function(t,n,r){var i
return Mt.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?Mt.css(t,n,a):Mt.style(t,n,r,a)},t,o?r:void 0,o,null)}})}),Mt.fn.size=function(){return this.length},Mt.fn.andSelf=Mt.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return Mt}),wt=e.jQuery,bt=e.$,Mt.noConflict=function(t){return e.$===Mt&&(e.$=bt),t&&e.jQuery===Mt&&(e.jQuery=wt),Mt},typeof t===le&&(e.jQuery=e.$=Mt),Mt}),urlApi="http://api.slidecard.ovh/v1",urlCdn="http://cdn.slidecard.ovh",slideController=angular.module("slideController",[]),user_lat=0,user_lng=0,slideApp=angular.module("slideApp",["ngRoute","ngCookies","slideController","file-model","mp.colorPicker"]),slideApp.config(["$routeProvider","$httpProvider",function(e,t){e.when("/login",{templateUrl:"html/login.html",controller:"loginController",controllerAs:"login"}).when("/logout",{templateUrl:"html/logout.html",controller:"logoutController",controllerAs:"logout"}).when("/account",{templateUrl:"html/account.html",controller:"accountController",controllerAs:"account"}).when("/account/update",{templateUrl:"html/accountUpdate.html",controller:"accountUpdateController",controllerAs:"accountUpdate"}).when("/account/settings",{templateUrl:"html/settings.html",controller:"accountUpdateController",controllerAs:"accountUpdate"}).when("/register",{templateUrl:"html/register.html",controller:"registerController",controllerAs:"register"}).when("/template",{templateUrl:"html/templateList.html",controller:"templateListController",controllerAs:"templateList"}).when("/templateCreate",{templateUrl:"html/templateCreate.html",controller:"templateCreateController",controllerAs:"templateCreate"}).when("/template/delete/:id",{templateUrl:"html/templateDelete.html",controller:"templateDeleteController",controllerAs:"templateDelete"}).when("/cardList",{templateUrl:"html/cardList.html",controller:"cardListController",controllerAs:"cardList"}).when("/cardCreate",{templateUrl:"html/cardCreate.html",controller:"cardCreateController",controllerAs:"cardCreate"}).when("/card/delete/:id",{templateUrl:"html/cardDelete.html",controller:"cardDeleteController",controllerAs:"cardDelete"}).when("/card/:id",{templateUrl:"html/cardDetail.html",controller:"cardDetailController",controllerAs:"cardDetail"}).when("/card/update/:id",{templateUrl:"html/cardUpdate.html",controller:"cardUpdateController",controllerAs:"cardUpdate"}).when("/collection",{templateUrl:"html/collectionList.html",controller:"collectionListController",controllerAs:"collectionList"}).when("/collection/delete/:id",{templateUrl:"html/collectionDelete.html",controller:"collectionDeleteController",controllerAs:"collectionDelete"}).when("/contactList",{templateUrl:"html/contactList.html",controller:"contactListController",controllerAs:"contactList"}).when("/collectionMapCard",{templateUrl:"html/collectionMapCard.html",controller:"collectionMapCardController",controllerAs:"collectionMapCard"}).when("/welcome",{templateUrl:"html/welcome.html",controller:"welcomeController",controllerAs:"welcome"}).when("/application",{templateUrl:"html/applications.html",controller:"welcomeController",controllerAs:"welcome"}).when("/reportbug",{templateUrl:"html/reportBug.html",controller:"reportbugControllerController",controllerAs:"reportbug"}).otherwise({redirectTo:"/welcome"}),delete t.defaults.headers.common["X-Requested-With"]}]),slideApp.controller("contentController",["$cookies","$scope","$location",function(e,t,n){function r(e){var t,r,i,o,a
user_lat=e.coords.latitude,user_lng=e.coords.longitude,$("#geolocinfo").css("display","initial"),"/account"==n.path()&&(t=new google.maps.LatLng(user_lat,user_lng),r={center:t,mapTypeId:google.maps.MapTypeId.ROADMAP,zoom:15,disableDefaultUI:!0},i=new google.maps.Map(document.getElementById("map"),r),o=new google.maps.LatLng(user_lat,user_lng),a=new google.maps.Marker({position:o,map:i,title:"You are here"}),i.panTo(o))}function i(e){switch(e.code){case e.TIMEOUT:errorGeo="Geolocation: Timeout"
break
case e.PERMISSION_DENIED:errorGeo="Geolocation: Permission denied"
break
case e.POSITION_UNAVAILABLE:errorGeo="Geolocation: Position unavailable"
break
case e.UNKNOWN_ERROR:errorGeo="Geolocation: Unknown error"}$("#geolocinfo").css("display","none")}var o,a=this
a.panel={login:!1,register:!1},a.getPanel=function(e){return this.panel.login&&"login"==e?!0:this.panel.register&&"register"==e?!0:!1},a.setPanel=function(e){"login"==e&&(a.panel.login=!0,a.panel.register=!1),"register"==e&&(a.panel.login=!1,a.panel.register=!0),console.log("set: "+e)},a.isPage=function(e){for(var t=0;t<e.length;t++)if(e[t]==n.path())return!0
return!1},t.isLog=function(){return""==e.usr_token||void 0==e.usr_token?0:1},navigator.geolocation&&(o=navigator.geolocation.watchPosition(r,i,{maximumAge:6e5}))}]),slideController.controller("loginController",["$scope","$http","$cookies","$location",function(e,t,n){e.error="",e.auth=function(){t.post(urlApi+"/auth",{email:e.email,password:e.password}).success(function(e){n.usr_token=e.data.token,n.logged=!0,window.location.assign("192.168.59.103"==window.location.hostname?"http://"+window.location.hostname+":"+window.location.port+"/#/cardList":"http://"+window.location.hostname+"/#/cardList"),window.location.reload()}).error(function(t){e.error=t.message})}}]),slideController.controller("logoutController",["$scope","$http","$cookies","$location",function(e,t,n,r){e.error="",""!=n.usr_token&&void 0!=n.usr_token&&(t.get(urlApi+"/logout?token="+n.usr_token).success(function(){n.usr_token="",r.path("/welcome")}).error(function(t,n){e.error=n+" / "+t.message}),n.usr_token=void 0,r.path("/welcome"))}]),slideController.controller("accountController",["$scope","$http","$cookies","$location",function(e,t,n,r){n.usr_token?(e.error="",e.cdn=urlCdn,t.get(urlApi+"/account?token="+n.usr_token).success(function(t){e.firstname=t.data.firstname,e.lastname=t.data.lastname,e.email=t.data.email,e.avatar=t.data.avatar,e.lastLogin=t.data.last_login,e.card_hash=t.data.card_hash,e.id=t.data.id,e.accept_news=t.data.accept_news,e.accept_notif=t.data.accept_notif,n.user_id=e.id}).error(function(t,n){e.error=n+" / "+t.message})):r.path("/login")}]),slideController.controller("welcomeController",["$scope","$http","$cookies","$location",function(e,t,n){e.newsletter=function(){t.post(urlApi+"/newsletter?token="+n.usr_token,{email:e.email}).success(function(){}).error(function(t){e.error=t.message})},e.error="",void 0==n.logged&&0==n.logged,void 0!=n.usr_token&&""!=n.usr_token&&t.get(urlApi+"/account?token="+n.usr_token).success(function(t){e.firstname=t.data.firstname,e.lastname=t.data.lastname,e.avatar=t.data.avatar,n.user_id=e.id,e.cdn=urlCdn}).error(function(t){e.error=t.message})}]),slideController.controller("registerController",["$scope","$http","$cookies","$location",function(e,t,n,r){e.error="",e.reg=function(){t.post(urlApi+"/register",{email:e.email,password:e.password,firstname:e.firstname,lastname:e.lastname}).success(function(e){n.usr_token=e.data.token,r.path("/welcome")}).error(function(){e.error="Register Failed"})}}]),slideController.controller("cardCreateController",["$scope","$http","$cookies","$location",function(e,t,n,r){n.usr_token?(e.error="",e.cdn=urlCdn,e.indexTEmplate=0,t.get(urlApi+"/template?token="+n.usr_token).success(function(t){e.templates=t.data,(void 0==e.templates||""==e.templates)&&r.path("/templateCreate")}).error(function(t){e.error=t.message}),e.getIndexTemplate=function(t){for(var n=0,r=e.templates.length;r>n;)e.templates[n].id==t&&(e.indexTEmplate=n),n++},t.get(urlApi+"/fonts?token="+n.usr_token).success(function(t){e.fonts=t.data}).error(function(t){e.error=t.message}),e.create=function(){void 0==e.type&&(e.type=0),e.color=e.color.substring(1,7),void 0==e.id_template&&(e.id_template=e.templates[0].id),t.post(urlApi+"/card/create?token="+n.usr_token,{organization:e.organization,job:e.job,location:e.location,email:e.email,phone:e.phone,slogan:e.slogan,color:e.color,font:e.id_font,template:e.id_template,type:e.type}).success(function(){r.path("/cardList")}).error(function(t){e.error=t.message})}):r.path("/login")}]),slideController.controller("cardListController",["$scope","$http","$cookies","$location",function(e,t,n,r){n.usr_token?(e.error="",e.success="",e.cardToSend="",e.cdn=urlCdn,t.get(urlApi+"/cards?token="+n.usr_token).success(function(t){e.result=t.data}).error(function(t){e.error=t.message}),e.selectCard=function(t){e.cardToSend=t},e.sendCard=function(){return e.error="",e.success="",void 0==e.cardToSend?(console.log("Mo Card Selected"),void(e.error="No Card Selected")):(console.log("sending: "+e.cardToSend),console.log("user_lat "+user_lat),console.log("user_lng "+user_lng),void t.post(urlApi+"/share?token="+n.usr_token,{card_hash:e.userToShare,hash_code:e.cardToSend,lat:user_lat,lng:user_lng}).success(function(){e.success="Share Sucess"}).error(function(t){e.error=t.message}))}):r.path("/login")}]),slideController.controller("cardDetailController",["$scope","$http","$cookies","$location","$routeParams",function(e,t,n,r,i){n.usr_token?(e.error="",e.cdn=urlCdn,t.get(urlApi+"/card/"+i.id+"?token="+n.usr_token).success(function(t){e.data=t.data}).error(function(t){e.error=t.message})):r.path("/login")}]),slideController.controller("accountUpdateController",["$scope","$http","$cookies","$location",function(e,t,n,r){n.usr_token?(e.error="",e.cdn=urlCdn,t.get(urlApi+"/account?token="+n.usr_token).success(function(t){e.firstname=t.data.firstname,e.lastname=t.data.lastname,e.email=t.data.email,e.avatar=t.data.avatar,e.lastLogin=t.data.last_login,e.card_hash=t.data.card_hash,e.id=t.data.id,e.accept_news=t.data.accept_news,e.accept_notif=t.data.accept_notif}).error(function(t){e.error=t.message}),e.update=function(){if(e.error="",e.update_password==e.retype_password){var i=new FormData
void 0!=e.update_url_avatar&&""!=e.update_url_avatar&&(e.update_url_avatar.size>=2097152?e.error="File must be < to 2 Mo":"image/png"!=e.update_url_avatar.type&&"image/jpeg"!=e.update_url_avatar.type&&"image/gif"!=e.update_url_avatar.type?e.error="File must be:  .png  /  .jpeg  /  .gif":i.append("avatar",e.update_url_avatar)),void 0!=e.email&&i.append("email",e.email),void 0!=e.update_firstname&&i.append("firstname",e.update_firstname),void 0!=e.update_lastname&&i.append("lastname",e.update_lastname),void 0!=e.update_password&&""!=e.update_password&&i.append("password",e.update_password),void 0==e.update_accept_news&&(1==e.accept_news?e.update_accept_news=1:e.update_accept_news=0),void 0==e.update_accept_notif&&(1==e.accept_notif?e.update_accept_notif=1:e.update_accept_notif=0),i.append("newsletters",e.update_accept_news),i.append("notifications",e.update_accept_notif),""==e.error&&t.post(urlApi+"/account/update?token="+n.usr_token,i,{headers:{"Content-Type":void 0},transformRequest:angular.identity}).success(function(){r.path("/account")}).error(function(t){e.error=t.message})}else e.error="Passwords doesn't matchs, try again"}):r.path("/login")}]),slideController.controller("cardUpdateController",["$scope","$http","$cookies","$location","$routeParams",function(e,t,n,r,i){n.usr_token?(e.error="",e.cdn=urlCdn,t.get(urlApi+"/template?token="+n.usr_token).success(function(r){e.templates=r.data,t.get(urlApi+"/card/"+i.id+"?token="+n.usr_token).success(function(t){e.card=t.data,e.getIndexTemplate(e.card.id_template)}).error(function(t){e.error=t.message})}).error(function(t){e.error=t.message}),e.getIndexTemplate=function(t){for(var n=0,r=e.templates.length;r>n;)e.templates[n].id==t&&(e.indexTemplate=n),n++},t.get(urlApi+"/fonts?token="+n.usr_token).success(function(t){e.fonts=t.data}).error(function(t){e.error=t.message}),e.update=function(){void 0==e.color?e.color=e.card.color:e.color=e.color.substring(1,7),void 0==e.type&&(e.type=e.card.type),void 0==e.id_template&&(e.id_template=e.card.template.id),void 0==e.id_font&&(e.id_font=e.card.id_font),t.post(urlApi+"/card/update/"+i.id+"?token="+n.usr_token,{organization:e.organization,job:e.job,location:e.location,email:e.email,phone:e.phone,slogan:e.slogan,color:e.color,id_font:e.id_font,id_template:e.id_template,type:e.type}).success(function(){r.path("/cardList")}).error(function(t){e.error=t.message})}):r.path("/login")}]),slideController.controller("templateListController",["$scope","$http","$cookies","$location",function(e,t,n,r){n.usr_token?(e.error="",e.cdn=urlCdn,t.get(urlApi+"/template?token="+n.usr_token).success(function(t){e.result=t.data}).error(function(t){e.error=t.message})):r.path("/login")}]),slideController.controller("templateCreateController",["$scope","$http","$cookies","$location",function(e,t,n,r){n.usr_token?(e.error="",e.token=n.usr_token,e.type,e.url="http://api.slidecard.ovh/v1/template/create?token="+n.usr_token,e.create=function(){var i=new FormData
void 0==e.type&&(e.type=0),i.append("name",e.name),i.append("type",e.type),i.append("background",e.background),i.append("price",0),e.background.size>=2097152?e.error="File must be < to 2 Mo":"image/png"!=e.background.type&&"image/jpeg"!=e.background.type&&"image/gif"!=e.background.type?e.error="File must be:  .png  /  .jpeg  /  .gif":t.post(urlApi+"/template/create?token="+n.usr_token,i,{headers:{"Content-Type":void 0},transformRequest:angular.identity}).success(function(){e.error="Success",r.path("/template")}).error(function(t){e.error=t.message})}):r.path("/login")}]),slideController.controller("templateDeleteController",["$scope","$http","$cookies","$location","$routeParams",function(e,t,n,r,i){n.usr_token?(e.error="",e.cdn=urlCdn,t.get(urlApi+"/template/"+i.id+"?token="+n.usr_token).success(function(t){e.result=t.data.template,console.log(e.result)}).error(function(t){e.error=t.message}),e["delete"]=function(){t.get(urlApi+"/template/delete/"+i.id+"?token="+n.usr_token).success(function(){r.path("/template")}).error(function(t){e.error=t.message})}):r.path("/login")}]),slideController.controller("cardDeleteController",["$scope","$http","$cookies","$location","$routeParams",function(e,t,n,r,i){n.usr_token?(e.error="",e["delete"]=function(){t.get(urlApi+"/card/delete/"+i.id+"?token="+n.usr_token).success(function(t){e.templates=t,r.path("/cardList")}).error(function(t){e.error=t.message})}):r.path("/login")}]),slideController.controller("collectionListController",["$scope","$http","$cookies","$location",function(e,t,n,r){n.usr_token?(e.error="",e.cdn=urlCdn,t.get(urlApi+"/collection?token="+n.usr_token).success(function(t){e.result=t.data}).error(function(t){e.error=t.message}),e.mapcard=function(e,t){r.path("/collectionMapCard").search({lat:e,lng:t})}):r.path("/login")}]),slideController.controller("collectionDeleteController",["$scope","$http","$cookies","$location","$routeParams",function(e,t,n,r,i){n.usr_token?(e.error="",e["delete"]=function(){t.get(urlApi+"/collection/delete/"+i.id+"?token="+n.usr_token).success(function(){r.path("/collection")}).error(function(t){e.error=t.message})}):r.path("/login")}]),slideController.controller("contactListController",["$scope","$http","$cookies","$location",function(e,t,n,r){n.usr_token?(e.error="",e.cdn=urlCdn,e.userSelect=0,t.get(urlApi+"/collection?token="+n.usr_token).success(function(t){e.result=t.data,e.removeDeplucate=function(){var t=[]
return e.result.forEach(function(e){var n=!0
t.forEach(function(t){e.owner.id==t.owner.id&&(n=!1)}),n&&(e.htmlSelected=!1,t.push(e))}),t}
var n=e.removeDeplucate(e.result)
e.newObj=n}).error(function(t){e.error=t.message}),e.choseIt=function(t){e.userSelect=t,console.log(e.userSelect)}):r.path("/login")}]),slideController.controller("collectionMapCardController",["$cookies","$location",function(e,t){var n,r,i,o,a
$("body").removeClass("bgblue"),n=this,e.usr_token||t.path("/login"),r=new google.maps.LatLng(t.search().lat,t.search().lng),i={center:r,mapTypeId:google.maps.MapTypeId.ROADMAP,zoom:15,disableDefaultUI:!0},o=new google.maps.Map(document.getElementById("map"),i),a=new google.maps.Marker({position:r,map:o,title:"You got this card here"}),o.panTo(r)}]),$(function(){$(".header-navbar ul.dropped").hover(function(){$(".header-navbar li.dropdown a").addClass("opened").removeClass("active")},function(){$(".header-navbar li.dropdown a").removeClass("opened").addClass("active")}),$(".header-navbar nav > ul > li:not(.dropdown) > a").click(function(){$(".header-navbar a").removeClass("active"),$(this).addClass("active")}),$(".header-navbar a.brand-title").click(function(){$(".header-navbar a").removeClass("active")})})
