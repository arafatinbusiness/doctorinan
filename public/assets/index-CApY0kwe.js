(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&r(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerPolicy&&(u.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?u.credentials="include":o.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}})();function K0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Vd={exports:{}},El={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Y_;function ES(){if(Y_)return El;Y_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(r,o,u){var f=null;if(u!==void 0&&(f=""+u),o.key!==void 0&&(f=""+o.key),"key"in o){u={};for(var p in o)p!=="key"&&(u[p]=o[p])}else u=o;return o=u.ref,{$$typeof:s,type:r,key:f,ref:o!==void 0?o:null,props:u}}return El.Fragment=t,El.jsx=n,El.jsxs=n,El}var X_;function AS(){return X_||(X_=1,Vd.exports=ES()),Vd.exports}var O=AS(),kd={exports:{}},vt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_;function bS(){if($_)return vt;$_=1;var s=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),E=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),N=Symbol.iterator;function B(M){return M===null||typeof M!="object"?null:(M=N&&M[N]||M["@@iterator"],typeof M=="function"?M:null)}var Z={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},W=Object.assign,J={};function ot(M,Y,nt){this.props=M,this.context=Y,this.refs=J,this.updater=nt||Z}ot.prototype.isReactComponent={},ot.prototype.setState=function(M,Y){if(typeof M!="object"&&typeof M!="function"&&M!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,M,Y,"setState")},ot.prototype.forceUpdate=function(M){this.updater.enqueueForceUpdate(this,M,"forceUpdate")};function gt(){}gt.prototype=ot.prototype;function ht(M,Y,nt){this.props=M,this.context=Y,this.refs=J,this.updater=nt||Z}var Et=ht.prototype=new gt;Et.constructor=ht,W(Et,ot.prototype),Et.isPureReactComponent=!0;var Ht=Array.isArray;function Rt(){}var C={H:null,A:null,T:null,S:null},S=Object.prototype.hasOwnProperty;function I(M,Y,nt){var rt=nt.ref;return{$$typeof:s,type:M,key:Y,ref:rt!==void 0?rt:null,props:nt}}function V(M,Y){return I(M.type,Y,M.props)}function x(M){return typeof M=="object"&&M!==null&&M.$$typeof===s}function U(M){var Y={"=":"=0",":":"=2"};return"$"+M.replace(/[=:]/g,function(nt){return Y[nt]})}var w=/\/+/g;function ie(M,Y){return typeof M=="object"&&M!==null&&M.key!=null?U(""+M.key):Y.toString(36)}function Ie(M){switch(M.status){case"fulfilled":return M.value;case"rejected":throw M.reason;default:switch(typeof M.status=="string"?M.then(Rt,Rt):(M.status="pending",M.then(function(Y){M.status==="pending"&&(M.status="fulfilled",M.value=Y)},function(Y){M.status==="pending"&&(M.status="rejected",M.reason=Y)})),M.status){case"fulfilled":return M.value;case"rejected":throw M.reason}}throw M}function G(M,Y,nt,rt,yt){var St=typeof M;(St==="undefined"||St==="boolean")&&(M=null);var kt=!1;if(M===null)kt=!0;else switch(St){case"bigint":case"string":case"number":kt=!0;break;case"object":switch(M.$$typeof){case s:case t:kt=!0;break;case E:return kt=M._init,G(kt(M._payload),Y,nt,rt,yt)}}if(kt)return yt=yt(M),kt=rt===""?"."+ie(M,0):rt,Ht(yt)?(nt="",kt!=null&&(nt=kt.replace(w,"$&/")+"/"),G(yt,Y,nt,"",function(ar){return ar})):yt!=null&&(x(yt)&&(yt=V(yt,nt+(yt.key==null||M&&M.key===yt.key?"":(""+yt.key).replace(w,"$&/")+"/")+kt)),Y.push(yt)),1;kt=0;var Ce=rt===""?".":rt+":";if(Ht(M))for(var se=0;se<M.length;se++)rt=M[se],St=Ce+ie(rt,se),kt+=G(rt,Y,nt,St,yt);else if(se=B(M),typeof se=="function")for(M=se.call(M),se=0;!(rt=M.next()).done;)rt=rt.value,St=Ce+ie(rt,se++),kt+=G(rt,Y,nt,St,yt);else if(St==="object"){if(typeof M.then=="function")return G(Ie(M),Y,nt,rt,yt);throw Y=String(M),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(M).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return kt}function et(M,Y,nt){if(M==null)return M;var rt=[],yt=0;return G(M,rt,"","",function(St){return Y.call(nt,St,yt++)}),rt}function ft(M){if(M._status===-1){var Y=M._result;Y=Y(),Y.then(function(nt){(M._status===0||M._status===-1)&&(M._status=1,M._result=nt)},function(nt){(M._status===0||M._status===-1)&&(M._status=2,M._result=nt)}),M._status===-1&&(M._status=0,M._result=Y)}if(M._status===1)return M._result.default;throw M._result}var Pt=typeof reportError=="function"?reportError:function(M){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof M=="object"&&M!==null&&typeof M.message=="string"?String(M.message):String(M),error:M});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",M);return}console.error(M)},Ft={map:et,forEach:function(M,Y,nt){et(M,function(){Y.apply(this,arguments)},nt)},count:function(M){var Y=0;return et(M,function(){Y++}),Y},toArray:function(M){return et(M,function(Y){return Y})||[]},only:function(M){if(!x(M))throw Error("React.Children.only expected to receive a single React element child.");return M}};return vt.Activity=b,vt.Children=Ft,vt.Component=ot,vt.Fragment=n,vt.Profiler=o,vt.PureComponent=ht,vt.StrictMode=r,vt.Suspense=g,vt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=C,vt.__COMPILER_RUNTIME={__proto__:null,c:function(M){return C.H.useMemoCache(M)}},vt.cache=function(M){return function(){return M.apply(null,arguments)}},vt.cacheSignal=function(){return null},vt.cloneElement=function(M,Y,nt){if(M==null)throw Error("The argument must be a React element, but you passed "+M+".");var rt=W({},M.props),yt=M.key;if(Y!=null)for(St in Y.key!==void 0&&(yt=""+Y.key),Y)!S.call(Y,St)||St==="key"||St==="__self"||St==="__source"||St==="ref"&&Y.ref===void 0||(rt[St]=Y[St]);var St=arguments.length-2;if(St===1)rt.children=nt;else if(1<St){for(var kt=Array(St),Ce=0;Ce<St;Ce++)kt[Ce]=arguments[Ce+2];rt.children=kt}return I(M.type,yt,rt)},vt.createContext=function(M){return M={$$typeof:f,_currentValue:M,_currentValue2:M,_threadCount:0,Provider:null,Consumer:null},M.Provider=M,M.Consumer={$$typeof:u,_context:M},M},vt.createElement=function(M,Y,nt){var rt,yt={},St=null;if(Y!=null)for(rt in Y.key!==void 0&&(St=""+Y.key),Y)S.call(Y,rt)&&rt!=="key"&&rt!=="__self"&&rt!=="__source"&&(yt[rt]=Y[rt]);var kt=arguments.length-2;if(kt===1)yt.children=nt;else if(1<kt){for(var Ce=Array(kt),se=0;se<kt;se++)Ce[se]=arguments[se+2];yt.children=Ce}if(M&&M.defaultProps)for(rt in kt=M.defaultProps,kt)yt[rt]===void 0&&(yt[rt]=kt[rt]);return I(M,St,yt)},vt.createRef=function(){return{current:null}},vt.forwardRef=function(M){return{$$typeof:p,render:M}},vt.isValidElement=x,vt.lazy=function(M){return{$$typeof:E,_payload:{_status:-1,_result:M},_init:ft}},vt.memo=function(M,Y){return{$$typeof:_,type:M,compare:Y===void 0?null:Y}},vt.startTransition=function(M){var Y=C.T,nt={};C.T=nt;try{var rt=M(),yt=C.S;yt!==null&&yt(nt,rt),typeof rt=="object"&&rt!==null&&typeof rt.then=="function"&&rt.then(Rt,Pt)}catch(St){Pt(St)}finally{Y!==null&&nt.types!==null&&(Y.types=nt.types),C.T=Y}},vt.unstable_useCacheRefresh=function(){return C.H.useCacheRefresh()},vt.use=function(M){return C.H.use(M)},vt.useActionState=function(M,Y,nt){return C.H.useActionState(M,Y,nt)},vt.useCallback=function(M,Y){return C.H.useCallback(M,Y)},vt.useContext=function(M){return C.H.useContext(M)},vt.useDebugValue=function(){},vt.useDeferredValue=function(M,Y){return C.H.useDeferredValue(M,Y)},vt.useEffect=function(M,Y){return C.H.useEffect(M,Y)},vt.useEffectEvent=function(M){return C.H.useEffectEvent(M)},vt.useId=function(){return C.H.useId()},vt.useImperativeHandle=function(M,Y,nt){return C.H.useImperativeHandle(M,Y,nt)},vt.useInsertionEffect=function(M,Y){return C.H.useInsertionEffect(M,Y)},vt.useLayoutEffect=function(M,Y){return C.H.useLayoutEffect(M,Y)},vt.useMemo=function(M,Y){return C.H.useMemo(M,Y)},vt.useOptimistic=function(M,Y){return C.H.useOptimistic(M,Y)},vt.useReducer=function(M,Y,nt){return C.H.useReducer(M,Y,nt)},vt.useRef=function(M){return C.H.useRef(M)},vt.useState=function(M){return C.H.useState(M)},vt.useSyncExternalStore=function(M,Y,nt){return C.H.useSyncExternalStore(M,Y,nt)},vt.useTransition=function(){return C.H.useTransition()},vt.version="19.2.1",vt}var J_;function Cm(){return J_||(J_=1,kd.exports=bS()),kd.exports}var en=Cm();const SS=K0(en);var Ud={exports:{}},Al={},Pd={exports:{}},Ld={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Z_;function wS(){return Z_||(Z_=1,(function(s){function t(G,et){var ft=G.length;G.push(et);t:for(;0<ft;){var Pt=ft-1>>>1,Ft=G[Pt];if(0<o(Ft,et))G[Pt]=et,G[ft]=Ft,ft=Pt;else break t}}function n(G){return G.length===0?null:G[0]}function r(G){if(G.length===0)return null;var et=G[0],ft=G.pop();if(ft!==et){G[0]=ft;t:for(var Pt=0,Ft=G.length,M=Ft>>>1;Pt<M;){var Y=2*(Pt+1)-1,nt=G[Y],rt=Y+1,yt=G[rt];if(0>o(nt,ft))rt<Ft&&0>o(yt,nt)?(G[Pt]=yt,G[rt]=ft,Pt=rt):(G[Pt]=nt,G[Y]=ft,Pt=Y);else if(rt<Ft&&0>o(yt,ft))G[Pt]=yt,G[rt]=ft,Pt=rt;else break t}}return et}function o(G,et){var ft=G.sortIndex-et.sortIndex;return ft!==0?ft:G.id-et.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;s.unstable_now=function(){return u.now()}}else{var f=Date,p=f.now();s.unstable_now=function(){return f.now()-p}}var g=[],_=[],E=1,b=null,N=3,B=!1,Z=!1,W=!1,J=!1,ot=typeof setTimeout=="function"?setTimeout:null,gt=typeof clearTimeout=="function"?clearTimeout:null,ht=typeof setImmediate<"u"?setImmediate:null;function Et(G){for(var et=n(_);et!==null;){if(et.callback===null)r(_);else if(et.startTime<=G)r(_),et.sortIndex=et.expirationTime,t(g,et);else break;et=n(_)}}function Ht(G){if(W=!1,Et(G),!Z)if(n(g)!==null)Z=!0,Rt||(Rt=!0,U());else{var et=n(_);et!==null&&Ie(Ht,et.startTime-G)}}var Rt=!1,C=-1,S=5,I=-1;function V(){return J?!0:!(s.unstable_now()-I<S)}function x(){if(J=!1,Rt){var G=s.unstable_now();I=G;var et=!0;try{t:{Z=!1,W&&(W=!1,gt(C),C=-1),B=!0;var ft=N;try{e:{for(Et(G),b=n(g);b!==null&&!(b.expirationTime>G&&V());){var Pt=b.callback;if(typeof Pt=="function"){b.callback=null,N=b.priorityLevel;var Ft=Pt(b.expirationTime<=G);if(G=s.unstable_now(),typeof Ft=="function"){b.callback=Ft,Et(G),et=!0;break e}b===n(g)&&r(g),Et(G)}else r(g);b=n(g)}if(b!==null)et=!0;else{var M=n(_);M!==null&&Ie(Ht,M.startTime-G),et=!1}}break t}finally{b=null,N=ft,B=!1}et=void 0}}finally{et?U():Rt=!1}}}var U;if(typeof ht=="function")U=function(){ht(x)};else if(typeof MessageChannel<"u"){var w=new MessageChannel,ie=w.port2;w.port1.onmessage=x,U=function(){ie.postMessage(null)}}else U=function(){ot(x,0)};function Ie(G,et){C=ot(function(){G(s.unstable_now())},et)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(G){G.callback=null},s.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<G?Math.floor(1e3/G):5},s.unstable_getCurrentPriorityLevel=function(){return N},s.unstable_next=function(G){switch(N){case 1:case 2:case 3:var et=3;break;default:et=N}var ft=N;N=et;try{return G()}finally{N=ft}},s.unstable_requestPaint=function(){J=!0},s.unstable_runWithPriority=function(G,et){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ft=N;N=G;try{return et()}finally{N=ft}},s.unstable_scheduleCallback=function(G,et,ft){var Pt=s.unstable_now();switch(typeof ft=="object"&&ft!==null?(ft=ft.delay,ft=typeof ft=="number"&&0<ft?Pt+ft:Pt):ft=Pt,G){case 1:var Ft=-1;break;case 2:Ft=250;break;case 5:Ft=1073741823;break;case 4:Ft=1e4;break;default:Ft=5e3}return Ft=ft+Ft,G={id:E++,callback:et,priorityLevel:G,startTime:ft,expirationTime:Ft,sortIndex:-1},ft>Pt?(G.sortIndex=ft,t(_,G),n(g)===null&&G===n(_)&&(W?(gt(C),C=-1):W=!0,Ie(Ht,ft-Pt))):(G.sortIndex=Ft,t(g,G),Z||B||(Z=!0,Rt||(Rt=!0,U()))),G},s.unstable_shouldYield=V,s.unstable_wrapCallback=function(G){var et=N;return function(){var ft=N;N=et;try{return G.apply(this,arguments)}finally{N=ft}}}})(Ld)),Ld}var W_;function RS(){return W_||(W_=1,Pd.exports=wS()),Pd.exports}var zd={exports:{}},Ke={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tv;function IS(){if(tv)return Ke;tv=1;var s=Cm();function t(g){var _="https://react.dev/errors/"+g;if(1<arguments.length){_+="?args[]="+encodeURIComponent(arguments[1]);for(var E=2;E<arguments.length;E++)_+="&args[]="+encodeURIComponent(arguments[E])}return"Minified React error #"+g+"; visit "+_+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var r={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function u(g,_,E){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:b==null?null:""+b,children:g,containerInfo:_,implementation:E}}var f=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function p(g,_){if(g==="font")return"";if(typeof _=="string")return _==="use-credentials"?_:""}return Ke.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ke.createPortal=function(g,_){var E=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_||_.nodeType!==1&&_.nodeType!==9&&_.nodeType!==11)throw Error(t(299));return u(g,_,null,E)},Ke.flushSync=function(g){var _=f.T,E=r.p;try{if(f.T=null,r.p=2,g)return g()}finally{f.T=_,r.p=E,r.d.f()}},Ke.preconnect=function(g,_){typeof g=="string"&&(_?(_=_.crossOrigin,_=typeof _=="string"?_==="use-credentials"?_:"":void 0):_=null,r.d.C(g,_))},Ke.prefetchDNS=function(g){typeof g=="string"&&r.d.D(g)},Ke.preinit=function(g,_){if(typeof g=="string"&&_&&typeof _.as=="string"){var E=_.as,b=p(E,_.crossOrigin),N=typeof _.integrity=="string"?_.integrity:void 0,B=typeof _.fetchPriority=="string"?_.fetchPriority:void 0;E==="style"?r.d.S(g,typeof _.precedence=="string"?_.precedence:void 0,{crossOrigin:b,integrity:N,fetchPriority:B}):E==="script"&&r.d.X(g,{crossOrigin:b,integrity:N,fetchPriority:B,nonce:typeof _.nonce=="string"?_.nonce:void 0})}},Ke.preinitModule=function(g,_){if(typeof g=="string")if(typeof _=="object"&&_!==null){if(_.as==null||_.as==="script"){var E=p(_.as,_.crossOrigin);r.d.M(g,{crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0})}}else _==null&&r.d.M(g)},Ke.preload=function(g,_){if(typeof g=="string"&&typeof _=="object"&&_!==null&&typeof _.as=="string"){var E=_.as,b=p(E,_.crossOrigin);r.d.L(g,E,{crossOrigin:b,integrity:typeof _.integrity=="string"?_.integrity:void 0,nonce:typeof _.nonce=="string"?_.nonce:void 0,type:typeof _.type=="string"?_.type:void 0,fetchPriority:typeof _.fetchPriority=="string"?_.fetchPriority:void 0,referrerPolicy:typeof _.referrerPolicy=="string"?_.referrerPolicy:void 0,imageSrcSet:typeof _.imageSrcSet=="string"?_.imageSrcSet:void 0,imageSizes:typeof _.imageSizes=="string"?_.imageSizes:void 0,media:typeof _.media=="string"?_.media:void 0})}},Ke.preloadModule=function(g,_){if(typeof g=="string")if(_){var E=p(_.as,_.crossOrigin);r.d.m(g,{as:typeof _.as=="string"&&_.as!=="script"?_.as:void 0,crossOrigin:E,integrity:typeof _.integrity=="string"?_.integrity:void 0})}else r.d.m(g)},Ke.requestFormReset=function(g){r.d.r(g)},Ke.unstable_batchedUpdates=function(g,_){return g(_)},Ke.useFormState=function(g,_,E){return f.H.useFormState(g,_,E)},Ke.useFormStatus=function(){return f.H.useHostTransitionStatus()},Ke.version="19.2.1",Ke}var ev;function CS(){if(ev)return zd.exports;ev=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),zd.exports=IS(),zd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function NS(){if(nv)return Al;nv=1;var s=RS(),t=Cm(),n=CS();function r(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var i=e,a=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(a=i.return),e=i.return;while(e)}return i.tag===3?a:null}function f(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function g(e){if(u(e)!==e)throw Error(r(188))}function _(e){var i=e.alternate;if(!i){if(i=u(e),i===null)throw Error(r(188));return i!==e?null:e}for(var a=e,l=i;;){var h=a.return;if(h===null)break;var d=h.alternate;if(d===null){if(l=h.return,l!==null){a=l;continue}break}if(h.child===d.child){for(d=h.child;d;){if(d===a)return g(h),e;if(d===l)return g(h),i;d=d.sibling}throw Error(r(188))}if(a.return!==l.return)a=h,l=d;else{for(var y=!1,T=h.child;T;){if(T===a){y=!0,a=h,l=d;break}if(T===l){y=!0,l=h,a=d;break}T=T.sibling}if(!y){for(T=d.child;T;){if(T===a){y=!0,a=d,l=h;break}if(T===l){y=!0,l=d,a=h;break}T=T.sibling}if(!y)throw Error(r(189))}}if(a.alternate!==l)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:i}function E(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=E(e),i!==null)return i;e=e.sibling}return null}var b=Object.assign,N=Symbol.for("react.element"),B=Symbol.for("react.transitional.element"),Z=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),J=Symbol.for("react.strict_mode"),ot=Symbol.for("react.profiler"),gt=Symbol.for("react.consumer"),ht=Symbol.for("react.context"),Et=Symbol.for("react.forward_ref"),Ht=Symbol.for("react.suspense"),Rt=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),V=Symbol.for("react.memo_cache_sentinel"),x=Symbol.iterator;function U(e){return e===null||typeof e!="object"?null:(e=x&&e[x]||e["@@iterator"],typeof e=="function"?e:null)}var w=Symbol.for("react.client.reference");function ie(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===w?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case ot:return"Profiler";case J:return"StrictMode";case Ht:return"Suspense";case Rt:return"SuspenseList";case I:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Z:return"Portal";case ht:return e.displayName||"Context";case gt:return(e._context.displayName||"Context")+".Consumer";case Et:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case C:return i=e.displayName||null,i!==null?i:ie(e.type)||"Memo";case S:i=e._payload,e=e._init;try{return ie(e(i))}catch{}}return null}var Ie=Array.isArray,G=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ft={pending:!1,data:null,method:null,action:null},Pt=[],Ft=-1;function M(e){return{current:e}}function Y(e){0>Ft||(e.current=Pt[Ft],Pt[Ft]=null,Ft--)}function nt(e,i){Ft++,Pt[Ft]=e.current,e.current=i}var rt=M(null),yt=M(null),St=M(null),kt=M(null);function Ce(e,i){switch(nt(St,i),nt(yt,e),nt(rt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?y_(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=y_(i),e=__(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(rt),nt(rt,e)}function se(){Y(rt),Y(yt),Y(St)}function ar(e){e.memoizedState!==null&&nt(kt,e);var i=rt.current,a=__(i,e.type);i!==a&&(nt(yt,e),nt(rt,a))}function na(e){yt.current===e&&(Y(rt),Y(yt)),kt.current===e&&(Y(kt),yl._currentValue=ft)}var ia,sa;function si(e){if(ia===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);ia=i&&i[1]||"",sa=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ia+e+sa}var yo=!1;function or(e,i){if(!e||yo)return"";yo=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(i){var K=function(){throw Error()};if(Object.defineProperty(K.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(K,[])}catch(H){var j=H}Reflect.construct(e,[],K)}else{try{K.call()}catch(H){j=H}e.call(K.prototype)}}else{try{throw Error()}catch(H){j=H}(K=e())&&typeof K.catch=="function"&&K.catch(function(){})}}catch(H){if(H&&j&&typeof H.stack=="string")return[H.stack,j.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=l.DetermineComponentFrameRoot(),y=d[0],T=d[1];if(y&&T){var R=y.split(`
`),z=T.split(`
`);for(h=l=0;l<R.length&&!R[l].includes("DetermineComponentFrameRoot");)l++;for(;h<z.length&&!z[h].includes("DetermineComponentFrameRoot");)h++;if(l===R.length||h===z.length)for(l=R.length-1,h=z.length-1;1<=l&&0<=h&&R[l]!==z[h];)h--;for(;1<=l&&0<=h;l--,h--)if(R[l]!==z[h]){if(l!==1||h!==1)do if(l--,h--,0>h||R[l]!==z[h]){var F=`
`+R[l].replace(" at new "," at ");return e.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",e.displayName)),F}while(1<=l&&0<=h);break}}}finally{yo=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?si(a):""}function _o(e,i){switch(e.tag){case 26:case 27:case 5:return si(e.type);case 16:return si("Lazy");case 13:return e.child!==i&&i!==null?si("Suspense Fallback"):si("Suspense");case 19:return si("SuspenseList");case 0:case 15:return or(e.type,!1);case 11:return or(e.type.render,!1);case 1:return or(e.type,!0);case 31:return si("Activity");default:return""}}function vo(e){try{var i="",a=null;do i+=_o(e,a),a=e,e=e.return;while(e);return i}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var pe=Object.prototype.hasOwnProperty,Ne=s.unstable_scheduleCallback,us=s.unstable_cancelCallback,kh=s.unstable_shouldYield,Wl=s.unstable_requestPaint,Ze=s.unstable_now,lr=s.unstable_getCurrentPriorityLevel,To=s.unstable_ImmediatePriority,Eo=s.unstable_UserBlockingPriority,cs=s.unstable_NormalPriority,Uh=s.unstable_LowPriority,tu=s.unstable_IdlePriority,eu=s.log,nu=s.unstable_setDisableYieldValue,jn=null,Pe=null;function bn(e){if(typeof eu=="function"&&nu(e),Pe&&typeof Pe.setStrictMode=="function")try{Pe.setStrictMode(jn,e)}catch{}}var ce=Math.clz32?Math.clz32:su,iu=Math.log,ra=Math.LN2;function su(e){return e>>>=0,e===0?32:31-(iu(e)/ra|0)|0}var ri=256,ur=262144,ge=4194304;function ai(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function oi(e,i,a){var l=e.pendingLanes;if(l===0)return 0;var h=0,d=e.suspendedLanes,y=e.pingedLanes;e=e.warmLanes;var T=l&134217727;return T!==0?(l=T&~d,l!==0?h=ai(l):(y&=T,y!==0?h=ai(y):a||(a=T&~e,a!==0&&(h=ai(a))))):(T=l&~d,T!==0?h=ai(T):y!==0?h=ai(y):a||(a=l&~e,a!==0&&(h=ai(a)))),h===0?0:i!==0&&i!==h&&(i&d)===0&&(d=h&-h,a=i&-i,d>=a||d===32&&(a&4194048)!==0)?i:h}function Bn(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function Ph(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ru(){var e=ge;return ge<<=1,(ge&62914560)===0&&(ge=4194304),e}function li(e){for(var i=[],a=0;31>a;a++)i.push(e);return i}function cr(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Lh(e,i,a,l,h,d){var y=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,R=e.expirationTimes,z=e.hiddenUpdates;for(a=y&~a;0<a;){var F=31-ce(a),K=1<<F;T[F]=0,R[F]=-1;var j=z[F];if(j!==null)for(z[F]=null,F=0;F<j.length;F++){var H=j[F];H!==null&&(H.lane&=-536870913)}a&=~K}l!==0&&hr(e,l,0),d!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=d&~(y&~i))}function hr(e,i,a){e.pendingLanes|=i,e.suspendedLanes&=~i;var l=31-ce(i);e.entangledLanes|=i,e.entanglements[l]=e.entanglements[l]|1073741824|a&261930}function Ao(e,i){var a=e.entangledLanes|=i;for(e=e.entanglements;a;){var l=31-ce(a),h=1<<l;h&i|e[l]&i&&(e[l]|=i),a&=~h}}function bo(e,i){var a=i&-i;return a=(a&42)!==0?1:fr(a),(a&(e.suspendedLanes|i))!==0?0:a}function fr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Ui(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function au(){var e=et.p;return e!==0?e:(e=window.event,e===void 0?32:B_(e.type))}function qn(e,i){var a=et.p;try{return et.p=e,i()}finally{et.p=a}}var Hn=Math.random().toString(36).slice(2),ye="__reactFiber$"+Hn,Me="__reactProps$"+Hn,ui="__reactContainer$"+Hn,aa="__reactEvents$"+Hn,zh="__reactListeners$"+Hn,ou="__reactHandles$"+Hn,lu="__reactResources$"+Hn,ci="__reactMarker$"+Hn;function oa(e){delete e[ye],delete e[Me],delete e[aa],delete e[zh],delete e[ou]}function hi(e){var i=e[ye];if(i)return i;for(var a=e.parentNode;a;){if(i=a[ui]||a[ye]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(e=w_(e);e!==null;){if(a=e[ye])return a;e=w_(e)}return i}e=a,a=e.parentNode}return null}function Sn(e){if(e=e[ye]||e[ui]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function dn(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(r(33))}function fi(e){var i=e[lu];return i||(i=e[lu]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function _e(e){e[ci]=!0}var So=new Set,wo={};function di(e,i){mi(e,i),mi(e+"Capture",i)}function mi(e,i){for(wo[e]=i,e=0;e<i.length;e++)So.add(i[e])}var Ro=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Io={},Co={};function uu(e){return pe.call(Co,e)?!0:pe.call(Io,e)?!1:Ro.test(e)?Co[e]=!0:(Io[e]=!0,!1)}function la(e,i,a){if(uu(i))if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var l=i.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+a)}}function mn(e,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+a)}}function ve(e,i,a,l){if(l===null)e.removeAttribute(a);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(i,a,""+l)}}function Ve(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function hs(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function No(e,i,a){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var h=l.get,d=l.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(y){a=""+y,d.call(this,y)}}),Object.defineProperty(e,i,{enumerable:l.enumerable}),{getValue:function(){return a},setValue:function(y){a=""+y},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Gt(e){if(!e._valueTracker){var i=hs(e)?"checked":"value";e._valueTracker=No(e,i,""+e[i])}}function dr(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return e&&(l=hs(e)?e.checked?"true":"false":e.value),e=l,e!==a?(i.setValue(e),!0):!1}function pi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var mr=/[\n"\\]/g;function sn(e){return e.replace(mr,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function ua(e,i,a,l,h,d,y,T){e.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?e.type=y:e.removeAttribute("type"),i!=null?y==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+Ve(i)):e.value!==""+Ve(i)&&(e.value=""+Ve(i)):y!=="submit"&&y!=="reset"||e.removeAttribute("value"),i!=null?Do(e,y,Ve(i)):a!=null?Do(e,y,Ve(a)):l!=null&&e.removeAttribute("value"),h==null&&d!=null&&(e.defaultChecked=!!d),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+Ve(T):e.removeAttribute("name")}function cu(e,i,a,l,h,d,y,T){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),i!=null||a!=null){if(!(d!=="submit"&&d!=="reset"||i!=null)){Gt(e);return}a=a!=null?""+Ve(a):"",i=i!=null?""+Ve(i):a,T||i===e.value||(e.value=i),e.defaultValue=i}l=l??h,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=T?e.checked:!!l,e.defaultChecked=!!l,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(e.name=y),Gt(e)}function Do(e,i,a){i==="number"&&pi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function fs(e,i,a,l){if(e=e.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<e.length;a++)h=i.hasOwnProperty("$"+e[a].value),e[a].selected!==h&&(e[a].selected=h),h&&l&&(e[a].defaultSelected=!0)}else{for(a=""+Ve(a),i=null,h=0;h<e.length;h++){if(e[h].value===a){e[h].selected=!0,l&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function hu(e,i,a){if(i!=null&&(i=""+Ve(i),i!==e.value&&(e.value=i),a==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=a!=null?""+Ve(a):""}function ds(e,i,a,l){if(i==null){if(l!=null){if(a!=null)throw Error(r(92));if(Ie(l)){if(1<l.length)throw Error(r(93));l=l[0]}a=l}a==null&&(a=""),i=a}a=Ve(i),e.defaultValue=a,l=e.textContent,l===a&&l!==""&&l!==null&&(e.value=l),Gt(e)}function rn(e,i){if(i){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=i;return}}e.textContent=i}var fu=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function xo(e,i,a){var l=i.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?l?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":l?e.setProperty(i,a):typeof a!="number"||a===0||fu.has(i)?i==="float"?e.cssFloat=a:e[i]=(""+a).trim():e[i]=a+"px"}function Oo(e,i,a){if(i!=null&&typeof i!="object")throw Error(r(62));if(e=e.style,a!=null){for(var l in a)!a.hasOwnProperty(l)||i!=null&&i.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var h in i)l=i[h],i.hasOwnProperty(h)&&a[h]!==l&&xo(e,h,l)}else for(var d in i)i.hasOwnProperty(d)&&xo(e,d,i[d])}function ca(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var du=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ms=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ha(e){return ms.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Fn(){}var Mo=null;function wn(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ps=null,gi=null;function pr(e){var i=Sn(e);if(i&&(e=i.stateNode)){var a=e[Me]||null;t:switch(e=i.stateNode,i.type){case"input":if(ua(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),i=a.name,a.type==="radio"&&i!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+sn(""+i)+'"][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==e&&l.form===e.form){var h=l[Me]||null;if(!h)throw Error(r(90));ua(l,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<a.length;i++)l=a[i],l.form===e.form&&dr(l)}break t;case"textarea":hu(e,a.value,a.defaultValue);break t;case"select":i=a.value,i!=null&&fs(e,!!a.multiple,i,!1)}}}var fa=!1;function gs(e,i,a){if(fa)return e(i,a);fa=!0;try{var l=e(i);return l}finally{if(fa=!1,(ps!==null||gi!==null)&&(ac(),ps&&(i=ps,e=gi,gi=ps=null,pr(i),e)))for(i=0;i<e.length;i++)pr(e[i])}}function Gn(e,i){var a=e.stateNode;if(a===null)return null;var l=a[Me]||null;if(l===null)return null;a=l[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,i,typeof a));return a}var Rn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),gr=!1;if(Rn)try{var Yt={};Object.defineProperty(Yt,"passive",{get:function(){gr=!0}}),window.addEventListener("test",Yt,Yt),window.removeEventListener("test",Yt,Yt)}catch{gr=!1}var yi=null,Vo=null,yr=null;function ko(){if(yr)return yr;var e,i=Vo,a=i.length,l,h="value"in yi?yi.value:yi.textContent,d=h.length;for(e=0;e<a&&i[e]===h[e];e++);var y=a-e;for(l=1;l<=y&&i[a-l]===h[d-l];l++);return yr=h.slice(e,1<l?1-l:void 0)}function _r(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Pi(){return!0}function Qn(){return!1}function Le(e){function i(a,l,h,d,y){this._reactName=a,this._targetInst=h,this.type=l,this.nativeEvent=d,this.target=y,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(d):d[T]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Pi:Qn,this.isPropagationStopped=Qn,this}return b(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Pi)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Pi)},persist:function(){},isPersistent:Pi}),i}var Li={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_i=Le(Li),ys=b({},Li,{view:0,detail:0}),Uo=Le(ys),_s,da,vi,ma=b({},ys,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==vi&&(vi&&e.type==="mousemove"?(_s=e.screenX-vi.screenX,da=e.screenY-vi.screenY):da=_s=0,vi=e),_s)},movementY:function(e){return"movementY"in e?e.movementY:da}}),Po=Le(ma),vr=b({},ma,{dataTransfer:0}),mu=Le(vr),pu=b({},ys,{relatedTarget:0}),Tr=Le(pu),Lo=b({},Li,{animationName:0,elapsedTime:0,pseudoElement:0}),gu=Le(Lo),pa=b({},Li,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),yu=Le(pa),_u=b({},Li,{data:0}),Ti=Le(_u),vu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Tu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Eu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Au(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=Eu[e])?!!i[e]:!1}function vs(){return Au}var We=b({},ys,{key:function(e){if(e.key){var i=vu[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=_r(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Tu[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vs,charCode:function(e){return e.type==="keypress"?_r(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_r(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),bu=Le(We),Su=b({},ma,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),zi=Le(Su),c=b({},ys,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vs}),m=Le(c),v=b({},Li,{propertyName:0,elapsedTime:0,pseudoElement:0}),A=Le(v),P=b({},ma,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),q=Le(P),tt=b({},Li,{newState:0,oldState:0}),At=Le(tt),he=[9,13,27,32],jt=Rn&&"CompositionEvent"in window,re=null;Rn&&"documentMode"in document&&(re=document.documentMode);var In=Rn&&"TextEvent"in window&&!re,Ei=Rn&&(!jt||re&&8<re&&11>=re),Kn=" ",Yn=!1;function Er(e,i){switch(e){case"keyup":return he.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ga(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ya=!1;function GA(e,i){switch(e){case"compositionend":return ga(i);case"keypress":return i.which!==32?null:(Yn=!0,Kn);case"textInput":return e=i.data,e===Kn&&Yn?null:e;default:return null}}function QA(e,i){if(ya)return e==="compositionend"||!jt&&Er(e,i)?(e=ko(),yr=Vo=yi=null,ya=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Ei&&i.locale!=="ko"?null:i.data;default:return null}}var KA={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!KA[e.type]:i==="textarea"}function Np(e,i,a,l){ps?gi?gi.push(l):gi=[l]:ps=l,i=dc(i,"onChange"),0<i.length&&(a=new _i("onChange","change",null,a,l),e.push({event:a,listeners:i}))}var zo=null,jo=null;function YA(e){h_(e,0)}function wu(e){var i=dn(e);if(dr(i))return e}function Dp(e,i){if(e==="change")return i}var xp=!1;if(Rn){var jh;if(Rn){var Bh="oninput"in document;if(!Bh){var Op=document.createElement("div");Op.setAttribute("oninput","return;"),Bh=typeof Op.oninput=="function"}jh=Bh}else jh=!1;xp=jh&&(!document.documentMode||9<document.documentMode)}function Mp(){zo&&(zo.detachEvent("onpropertychange",Vp),jo=zo=null)}function Vp(e){if(e.propertyName==="value"&&wu(jo)){var i=[];Np(i,jo,e,wn(e)),gs(YA,i)}}function XA(e,i,a){e==="focusin"?(Mp(),zo=i,jo=a,zo.attachEvent("onpropertychange",Vp)):e==="focusout"&&Mp()}function $A(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return wu(jo)}function JA(e,i){if(e==="click")return wu(i)}function ZA(e,i){if(e==="input"||e==="change")return wu(i)}function WA(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var pn=typeof Object.is=="function"?Object.is:WA;function Bo(e,i){if(pn(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var a=Object.keys(e),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var h=a[l];if(!pe.call(i,h)||!pn(e[h],i[h]))return!1}return!0}function kp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Up(e,i){var a=kp(e);e=0;for(var l;a;){if(a.nodeType===3){if(l=e+a.textContent.length,e<=i&&l>=i)return{node:a,offset:i-e};e=l}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=kp(a)}}function Pp(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?Pp(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function Lp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=pi(e.document);i instanceof e.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)e=i.contentWindow;else break;i=pi(e.document)}return i}function qh(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var tb=Rn&&"documentMode"in document&&11>=document.documentMode,_a=null,Hh=null,qo=null,Fh=!1;function zp(e,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Fh||_a==null||_a!==pi(l)||(l=_a,"selectionStart"in l&&qh(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),qo&&Bo(qo,l)||(qo=l,l=dc(Hh,"onSelect"),0<l.length&&(i=new _i("onSelect","select",null,i,a),e.push({event:i,listeners:l}),i.target=_a)))}function Ar(e,i){var a={};return a[e.toLowerCase()]=i.toLowerCase(),a["Webkit"+e]="webkit"+i,a["Moz"+e]="moz"+i,a}var va={animationend:Ar("Animation","AnimationEnd"),animationiteration:Ar("Animation","AnimationIteration"),animationstart:Ar("Animation","AnimationStart"),transitionrun:Ar("Transition","TransitionRun"),transitionstart:Ar("Transition","TransitionStart"),transitioncancel:Ar("Transition","TransitionCancel"),transitionend:Ar("Transition","TransitionEnd")},Gh={},jp={};Rn&&(jp=document.createElement("div").style,"AnimationEvent"in window||(delete va.animationend.animation,delete va.animationiteration.animation,delete va.animationstart.animation),"TransitionEvent"in window||delete va.transitionend.transition);function br(e){if(Gh[e])return Gh[e];if(!va[e])return e;var i=va[e],a;for(a in i)if(i.hasOwnProperty(a)&&a in jp)return Gh[e]=i[a];return e}var Bp=br("animationend"),qp=br("animationiteration"),Hp=br("animationstart"),eb=br("transitionrun"),nb=br("transitionstart"),ib=br("transitioncancel"),Fp=br("transitionend"),Gp=new Map,Qh="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qh.push("scrollEnd");function Xn(e,i){Gp.set(e,i),di(i,[e])}var Ru=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Cn=[],Ta=0,Kh=0;function Iu(){for(var e=Ta,i=Kh=Ta=0;i<e;){var a=Cn[i];Cn[i++]=null;var l=Cn[i];Cn[i++]=null;var h=Cn[i];Cn[i++]=null;var d=Cn[i];if(Cn[i++]=null,l!==null&&h!==null){var y=l.pending;y===null?h.next=h:(h.next=y.next,y.next=h),l.pending=h}d!==0&&Qp(a,h,d)}}function Cu(e,i,a,l){Cn[Ta++]=e,Cn[Ta++]=i,Cn[Ta++]=a,Cn[Ta++]=l,Kh|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Yh(e,i,a,l){return Cu(e,i,a,l),Nu(e)}function Sr(e,i){return Cu(e,null,null,i),Nu(e)}function Qp(e,i,a){e.lanes|=a;var l=e.alternate;l!==null&&(l.lanes|=a);for(var h=!1,d=e.return;d!==null;)d.childLanes|=a,l=d.alternate,l!==null&&(l.childLanes|=a),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(h=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,h&&i!==null&&(h=31-ce(a),e=d.hiddenUpdates,l=e[h],l===null?e[h]=[i]:l.push(i),i.lane=a|536870912),d):null}function Nu(e){if(50<cl)throw cl=0,sd=null,Error(r(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var Ea={};function sb(e,i,a,l){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function gn(e,i,a,l){return new sb(e,i,a,l)}function Xh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ji(e,i){var a=e.alternate;return a===null?(a=gn(e.tag,i,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=i,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,i=e.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Kp(e,i){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,i=a.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Du(e,i,a,l,h,d){var y=0;if(l=e,typeof e=="function")Xh(e)&&(y=1);else if(typeof e=="string")y=uS(e,a,rt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case I:return e=gn(31,a,i,h),e.elementType=I,e.lanes=d,e;case W:return wr(a.children,h,d,i);case J:y=8,h|=24;break;case ot:return e=gn(12,a,i,h|2),e.elementType=ot,e.lanes=d,e;case Ht:return e=gn(13,a,i,h),e.elementType=Ht,e.lanes=d,e;case Rt:return e=gn(19,a,i,h),e.elementType=Rt,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case ht:y=10;break t;case gt:y=9;break t;case Et:y=11;break t;case C:y=14;break t;case S:y=16,l=null;break t}y=29,a=Error(r(130,e===null?"null":typeof e,"")),l=null}return i=gn(y,a,i,h),i.elementType=e,i.type=l,i.lanes=d,i}function wr(e,i,a,l){return e=gn(7,e,l,i),e.lanes=a,e}function $h(e,i,a){return e=gn(6,e,null,i),e.lanes=a,e}function Yp(e){var i=gn(18,null,null,0);return i.stateNode=e,i}function Jh(e,i,a){return i=gn(4,e.children!==null?e.children:[],e.key,i),i.lanes=a,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var Xp=new WeakMap;function Nn(e,i){if(typeof e=="object"&&e!==null){var a=Xp.get(e);return a!==void 0?a:(i={value:e,source:i,stack:vo(i)},Xp.set(e,i),i)}return{value:e,source:i,stack:vo(i)}}var Aa=[],ba=0,xu=null,Ho=0,Dn=[],xn=0,Ts=null,Ai=1,bi="";function Bi(e,i){Aa[ba++]=Ho,Aa[ba++]=xu,xu=e,Ho=i}function $p(e,i,a){Dn[xn++]=Ai,Dn[xn++]=bi,Dn[xn++]=Ts,Ts=e;var l=Ai;e=bi;var h=32-ce(l)-1;l&=~(1<<h),a+=1;var d=32-ce(i)+h;if(30<d){var y=h-h%5;d=(l&(1<<y)-1).toString(32),l>>=y,h-=y,Ai=1<<32-ce(i)+h|a<<h|l,bi=d+e}else Ai=1<<d|a<<h|l,bi=e}function Zh(e){e.return!==null&&(Bi(e,1),$p(e,1,0))}function Wh(e){for(;e===xu;)xu=Aa[--ba],Aa[ba]=null,Ho=Aa[--ba],Aa[ba]=null;for(;e===Ts;)Ts=Dn[--xn],Dn[xn]=null,bi=Dn[--xn],Dn[xn]=null,Ai=Dn[--xn],Dn[xn]=null}function Jp(e,i){Dn[xn++]=Ai,Dn[xn++]=bi,Dn[xn++]=Ts,Ai=i.id,bi=i.overflow,Ts=e}var ze=null,te=null,Vt=!1,Es=null,On=!1,tf=Error(r(519));function As(e){var i=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Fo(Nn(i,e)),tf}function Zp(e){var i=e.stateNode,a=e.type,l=e.memoizedProps;switch(i[ye]=e,i[Me]=l,a){case"dialog":Ct("cancel",i),Ct("close",i);break;case"iframe":case"object":case"embed":Ct("load",i);break;case"video":case"audio":for(a=0;a<fl.length;a++)Ct(fl[a],i);break;case"source":Ct("error",i);break;case"img":case"image":case"link":Ct("error",i),Ct("load",i);break;case"details":Ct("toggle",i);break;case"input":Ct("invalid",i),cu(i,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":Ct("invalid",i);break;case"textarea":Ct("invalid",i),ds(i,l.value,l.defaultValue,l.children)}a=l.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||i.textContent===""+a||l.suppressHydrationWarning===!0||p_(i.textContent,a)?(l.popover!=null&&(Ct("beforetoggle",i),Ct("toggle",i)),l.onScroll!=null&&Ct("scroll",i),l.onScrollEnd!=null&&Ct("scrollend",i),l.onClick!=null&&(i.onclick=Fn),i=!0):i=!1,i||As(e,!0)}function Wp(e){for(ze=e.return;ze;)switch(ze.tag){case 5:case 31:case 13:On=!1;return;case 27:case 3:On=!0;return;default:ze=ze.return}}function Sa(e){if(e!==ze)return!1;if(!Vt)return Wp(e),Vt=!0,!1;var i=e.tag,a;if((a=i!==3&&i!==27)&&((a=i===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||vd(e.type,e.memoizedProps)),a=!a),a&&te&&As(e),Wp(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));te=S_(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));te=S_(e)}else i===27?(i=te,Us(e.type)?(e=Sd,Sd=null,te=e):te=i):te=ze?Vn(e.stateNode.nextSibling):null;return!0}function Rr(){te=ze=null,Vt=!1}function ef(){var e=Es;return e!==null&&(un===null?un=e:un.push.apply(un,e),Es=null),e}function Fo(e){Es===null?Es=[e]:Es.push(e)}var nf=M(null),Ir=null,qi=null;function bs(e,i,a){nt(nf,i._currentValue),i._currentValue=a}function Hi(e){e._currentValue=nf.current,Y(nf)}function sf(e,i,a){for(;e!==null;){var l=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),e===a)break;e=e.return}}function rf(e,i,a,l){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var d=h.dependencies;if(d!==null){var y=h.child;d=d.firstContext;t:for(;d!==null;){var T=d;d=h;for(var R=0;R<i.length;R++)if(T.context===i[R]){d.lanes|=a,T=d.alternate,T!==null&&(T.lanes|=a),sf(d.return,a,e),l||(y=null);break t}d=T.next}}else if(h.tag===18){if(y=h.return,y===null)throw Error(r(341));y.lanes|=a,d=y.alternate,d!==null&&(d.lanes|=a),sf(y,a,e),y=null}else y=h.child;if(y!==null)y.return=h;else for(y=h;y!==null;){if(y===e){y=null;break}if(h=y.sibling,h!==null){h.return=y.return,y=h;break}y=y.return}h=y}}function wa(e,i,a,l){e=null;for(var h=i,d=!1;h!==null;){if(!d){if((h.flags&524288)!==0)d=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var y=h.alternate;if(y===null)throw Error(r(387));if(y=y.memoizedProps,y!==null){var T=h.type;pn(h.pendingProps.value,y.value)||(e!==null?e.push(T):e=[T])}}else if(h===kt.current){if(y=h.alternate,y===null)throw Error(r(387));y.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(yl):e=[yl])}h=h.return}e!==null&&rf(i,e,a,l),i.flags|=262144}function Ou(e){for(e=e.firstContext;e!==null;){if(!pn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Cr(e){Ir=e,qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function je(e){return tg(Ir,e)}function Mu(e,i){return Ir===null&&Cr(e),tg(e,i)}function tg(e,i){var a=i._currentValue;if(i={context:i,memoizedValue:a,next:null},qi===null){if(e===null)throw Error(r(308));qi=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else qi=qi.next=i;return a}var rb=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(a,l){e.push(l)}};this.abort=function(){i.aborted=!0,e.forEach(function(a){return a()})}},ab=s.unstable_scheduleCallback,ob=s.unstable_NormalPriority,Te={$$typeof:ht,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function af(){return{controller:new rb,data:new Map,refCount:0}}function Go(e){e.refCount--,e.refCount===0&&ab(ob,function(){e.controller.abort()})}var Qo=null,of=0,Ra=0,Ia=null;function lb(e,i){if(Qo===null){var a=Qo=[];of=0,Ra=cd(),Ia={status:"pending",value:void 0,then:function(l){a.push(l)}}}return of++,i.then(eg,eg),i}function eg(){if(--of===0&&Qo!==null){Ia!==null&&(Ia.status="fulfilled");var e=Qo;Qo=null,Ra=0,Ia=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function ub(e,i){var a=[],l={status:"pending",value:null,reason:null,then:function(h){a.push(h)}};return e.then(function(){l.status="fulfilled",l.value=i;for(var h=0;h<a.length;h++)(0,a[h])(i)},function(h){for(l.status="rejected",l.reason=h,h=0;h<a.length;h++)(0,a[h])(void 0)}),l}var ng=G.S;G.S=function(e,i){zy=Ze(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&lb(e,i),ng!==null&&ng(e,i)};var Nr=M(null);function lf(){var e=Nr.current;return e!==null?e:Zt.pooledCache}function Vu(e,i){i===null?nt(Nr,Nr.current):nt(Nr,i.pool)}function ig(){var e=lf();return e===null?null:{parent:Te._currentValue,pool:e}}var Ca=Error(r(460)),uf=Error(r(474)),ku=Error(r(542)),Uu={then:function(){}};function sg(e){return e=e.status,e==="fulfilled"||e==="rejected"}function rg(e,i,a){switch(a=e[a],a===void 0?e.push(i):a!==i&&(i.then(Fn,Fn),i=a),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,og(e),e;default:if(typeof i.status=="string")i.then(Fn,Fn);else{if(e=Zt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=i,e.status="pending",e.then(function(l){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=l}},function(l){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=l}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,og(e),e}throw xr=i,Ca}}function Dr(e){try{var i=e._init;return i(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(xr=a,Ca):a}}var xr=null;function ag(){if(xr===null)throw Error(r(459));var e=xr;return xr=null,e}function og(e){if(e===Ca||e===ku)throw Error(r(483))}var Na=null,Ko=0;function Pu(e){var i=Ko;return Ko+=1,Na===null&&(Na=[]),rg(Na,e,i)}function Yo(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function Lu(e,i){throw i.$$typeof===N?Error(r(525)):(e=Object.prototype.toString.call(i),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function lg(e){function i(k,D){if(e){var L=k.deletions;L===null?(k.deletions=[D],k.flags|=16):L.push(D)}}function a(k,D){if(!e)return null;for(;D!==null;)i(k,D),D=D.sibling;return null}function l(k){for(var D=new Map;k!==null;)k.key!==null?D.set(k.key,k):D.set(k.index,k),k=k.sibling;return D}function h(k,D){return k=ji(k,D),k.index=0,k.sibling=null,k}function d(k,D,L){return k.index=L,e?(L=k.alternate,L!==null?(L=L.index,L<D?(k.flags|=67108866,D):L):(k.flags|=67108866,D)):(k.flags|=1048576,D)}function y(k){return e&&k.alternate===null&&(k.flags|=67108866),k}function T(k,D,L,Q){return D===null||D.tag!==6?(D=$h(L,k.mode,Q),D.return=k,D):(D=h(D,L),D.return=k,D)}function R(k,D,L,Q){var ut=L.type;return ut===W?F(k,D,L.props.children,Q,L.key):D!==null&&(D.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===S&&Dr(ut)===D.type)?(D=h(D,L.props),Yo(D,L),D.return=k,D):(D=Du(L.type,L.key,L.props,null,k.mode,Q),Yo(D,L),D.return=k,D)}function z(k,D,L,Q){return D===null||D.tag!==4||D.stateNode.containerInfo!==L.containerInfo||D.stateNode.implementation!==L.implementation?(D=Jh(L,k.mode,Q),D.return=k,D):(D=h(D,L.children||[]),D.return=k,D)}function F(k,D,L,Q,ut){return D===null||D.tag!==7?(D=wr(L,k.mode,Q,ut),D.return=k,D):(D=h(D,L),D.return=k,D)}function K(k,D,L){if(typeof D=="string"&&D!==""||typeof D=="number"||typeof D=="bigint")return D=$h(""+D,k.mode,L),D.return=k,D;if(typeof D=="object"&&D!==null){switch(D.$$typeof){case B:return L=Du(D.type,D.key,D.props,null,k.mode,L),Yo(L,D),L.return=k,L;case Z:return D=Jh(D,k.mode,L),D.return=k,D;case S:return D=Dr(D),K(k,D,L)}if(Ie(D)||U(D))return D=wr(D,k.mode,L,null),D.return=k,D;if(typeof D.then=="function")return K(k,Pu(D),L);if(D.$$typeof===ht)return K(k,Mu(k,D),L);Lu(k,D)}return null}function j(k,D,L,Q){var ut=D!==null?D.key:null;if(typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint")return ut!==null?null:T(k,D,""+L,Q);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case B:return L.key===ut?R(k,D,L,Q):null;case Z:return L.key===ut?z(k,D,L,Q):null;case S:return L=Dr(L),j(k,D,L,Q)}if(Ie(L)||U(L))return ut!==null?null:F(k,D,L,Q,null);if(typeof L.then=="function")return j(k,D,Pu(L),Q);if(L.$$typeof===ht)return j(k,D,Mu(k,L),Q);Lu(k,L)}return null}function H(k,D,L,Q,ut){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return k=k.get(L)||null,T(D,k,""+Q,ut);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case B:return k=k.get(Q.key===null?L:Q.key)||null,R(D,k,Q,ut);case Z:return k=k.get(Q.key===null?L:Q.key)||null,z(D,k,Q,ut);case S:return Q=Dr(Q),H(k,D,L,Q,ut)}if(Ie(Q)||U(Q))return k=k.get(L)||null,F(D,k,Q,ut,null);if(typeof Q.then=="function")return H(k,D,L,Pu(Q),ut);if(Q.$$typeof===ht)return H(k,D,L,Mu(D,Q),ut);Lu(D,Q)}return null}function at(k,D,L,Q){for(var ut=null,Lt=null,lt=D,wt=D=0,Dt=null;lt!==null&&wt<L.length;wt++){lt.index>wt?(Dt=lt,lt=null):Dt=lt.sibling;var zt=j(k,lt,L[wt],Q);if(zt===null){lt===null&&(lt=Dt);break}e&&lt&&zt.alternate===null&&i(k,lt),D=d(zt,D,wt),Lt===null?ut=zt:Lt.sibling=zt,Lt=zt,lt=Dt}if(wt===L.length)return a(k,lt),Vt&&Bi(k,wt),ut;if(lt===null){for(;wt<L.length;wt++)lt=K(k,L[wt],Q),lt!==null&&(D=d(lt,D,wt),Lt===null?ut=lt:Lt.sibling=lt,Lt=lt);return Vt&&Bi(k,wt),ut}for(lt=l(lt);wt<L.length;wt++)Dt=H(lt,k,wt,L[wt],Q),Dt!==null&&(e&&Dt.alternate!==null&&lt.delete(Dt.key===null?wt:Dt.key),D=d(Dt,D,wt),Lt===null?ut=Dt:Lt.sibling=Dt,Lt=Dt);return e&&lt.forEach(function(Bs){return i(k,Bs)}),Vt&&Bi(k,wt),ut}function dt(k,D,L,Q){if(L==null)throw Error(r(151));for(var ut=null,Lt=null,lt=D,wt=D=0,Dt=null,zt=L.next();lt!==null&&!zt.done;wt++,zt=L.next()){lt.index>wt?(Dt=lt,lt=null):Dt=lt.sibling;var Bs=j(k,lt,zt.value,Q);if(Bs===null){lt===null&&(lt=Dt);break}e&&lt&&Bs.alternate===null&&i(k,lt),D=d(Bs,D,wt),Lt===null?ut=Bs:Lt.sibling=Bs,Lt=Bs,lt=Dt}if(zt.done)return a(k,lt),Vt&&Bi(k,wt),ut;if(lt===null){for(;!zt.done;wt++,zt=L.next())zt=K(k,zt.value,Q),zt!==null&&(D=d(zt,D,wt),Lt===null?ut=zt:Lt.sibling=zt,Lt=zt);return Vt&&Bi(k,wt),ut}for(lt=l(lt);!zt.done;wt++,zt=L.next())zt=H(lt,k,wt,zt.value,Q),zt!==null&&(e&&zt.alternate!==null&&lt.delete(zt.key===null?wt:zt.key),D=d(zt,D,wt),Lt===null?ut=zt:Lt.sibling=zt,Lt=zt);return e&&lt.forEach(function(TS){return i(k,TS)}),Vt&&Bi(k,wt),ut}function Jt(k,D,L,Q){if(typeof L=="object"&&L!==null&&L.type===W&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case B:t:{for(var ut=L.key;D!==null;){if(D.key===ut){if(ut=L.type,ut===W){if(D.tag===7){a(k,D.sibling),Q=h(D,L.props.children),Q.return=k,k=Q;break t}}else if(D.elementType===ut||typeof ut=="object"&&ut!==null&&ut.$$typeof===S&&Dr(ut)===D.type){a(k,D.sibling),Q=h(D,L.props),Yo(Q,L),Q.return=k,k=Q;break t}a(k,D);break}else i(k,D);D=D.sibling}L.type===W?(Q=wr(L.props.children,k.mode,Q,L.key),Q.return=k,k=Q):(Q=Du(L.type,L.key,L.props,null,k.mode,Q),Yo(Q,L),Q.return=k,k=Q)}return y(k);case Z:t:{for(ut=L.key;D!==null;){if(D.key===ut)if(D.tag===4&&D.stateNode.containerInfo===L.containerInfo&&D.stateNode.implementation===L.implementation){a(k,D.sibling),Q=h(D,L.children||[]),Q.return=k,k=Q;break t}else{a(k,D);break}else i(k,D);D=D.sibling}Q=Jh(L,k.mode,Q),Q.return=k,k=Q}return y(k);case S:return L=Dr(L),Jt(k,D,L,Q)}if(Ie(L))return at(k,D,L,Q);if(U(L)){if(ut=U(L),typeof ut!="function")throw Error(r(150));return L=ut.call(L),dt(k,D,L,Q)}if(typeof L.then=="function")return Jt(k,D,Pu(L),Q);if(L.$$typeof===ht)return Jt(k,D,Mu(k,L),Q);Lu(k,L)}return typeof L=="string"&&L!==""||typeof L=="number"||typeof L=="bigint"?(L=""+L,D!==null&&D.tag===6?(a(k,D.sibling),Q=h(D,L),Q.return=k,k=Q):(a(k,D),Q=$h(L,k.mode,Q),Q.return=k,k=Q),y(k)):a(k,D)}return function(k,D,L,Q){try{Ko=0;var ut=Jt(k,D,L,Q);return Na=null,ut}catch(lt){if(lt===Ca||lt===ku)throw lt;var Lt=gn(29,lt,null,k.mode);return Lt.lanes=Q,Lt.return=k,Lt}finally{}}}var Or=lg(!0),ug=lg(!1),Ss=!1;function cf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hf(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ws(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Rs(e,i,a){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(Bt&2)!==0){var h=l.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),l.pending=i,i=Nu(e),Qp(e,null,a),i}return Cu(e,l,i,a),Nu(e)}function Xo(e,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194048)!==0)){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,Ao(e,a)}}function ff(e,i){var a=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var h=null,d=null;if(a=a.firstBaseUpdate,a!==null){do{var y={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};d===null?h=d=y:d=d.next=y,a=a.next}while(a!==null);d===null?h=d=i:d=d.next=i}else h=d=i;a={baseState:l.baseState,firstBaseUpdate:h,lastBaseUpdate:d,shared:l.shared,callbacks:l.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=i:e.next=i,a.lastBaseUpdate=i}var df=!1;function $o(){if(df){var e=Ia;if(e!==null)throw e}}function Jo(e,i,a,l){df=!1;var h=e.updateQueue;Ss=!1;var d=h.firstBaseUpdate,y=h.lastBaseUpdate,T=h.shared.pending;if(T!==null){h.shared.pending=null;var R=T,z=R.next;R.next=null,y===null?d=z:y.next=z,y=R;var F=e.alternate;F!==null&&(F=F.updateQueue,T=F.lastBaseUpdate,T!==y&&(T===null?F.firstBaseUpdate=z:T.next=z,F.lastBaseUpdate=R))}if(d!==null){var K=h.baseState;y=0,F=z=R=null,T=d;do{var j=T.lane&-536870913,H=j!==T.lane;if(H?(Nt&j)===j:(l&j)===j){j!==0&&j===Ra&&(df=!0),F!==null&&(F=F.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var at=e,dt=T;j=i;var Jt=a;switch(dt.tag){case 1:if(at=dt.payload,typeof at=="function"){K=at.call(Jt,K,j);break t}K=at;break t;case 3:at.flags=at.flags&-65537|128;case 0:if(at=dt.payload,j=typeof at=="function"?at.call(Jt,K,j):at,j==null)break t;K=b({},K,j);break t;case 2:Ss=!0}}j=T.callback,j!==null&&(e.flags|=64,H&&(e.flags|=8192),H=h.callbacks,H===null?h.callbacks=[j]:H.push(j))}else H={lane:j,tag:T.tag,payload:T.payload,callback:T.callback,next:null},F===null?(z=F=H,R=K):F=F.next=H,y|=j;if(T=T.next,T===null){if(T=h.shared.pending,T===null)break;H=T,T=H.next,H.next=null,h.lastBaseUpdate=H,h.shared.pending=null}}while(!0);F===null&&(R=K),h.baseState=R,h.firstBaseUpdate=z,h.lastBaseUpdate=F,d===null&&(h.shared.lanes=0),xs|=y,e.lanes=y,e.memoizedState=K}}function cg(e,i){if(typeof e!="function")throw Error(r(191,e));e.call(i)}function hg(e,i){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)cg(a[e],i)}var Da=M(null),zu=M(0);function fg(e,i){e=Zi,nt(zu,e),nt(Da,i),Zi=e|i.baseLanes}function mf(){nt(zu,Zi),nt(Da,Da.current)}function pf(){Zi=zu.current,Y(Da),Y(zu)}var yn=M(null),Mn=null;function Is(e){var i=e.alternate;nt(fe,fe.current&1),nt(yn,e),Mn===null&&(i===null||Da.current!==null||i.memoizedState!==null)&&(Mn=e)}function gf(e){nt(fe,fe.current),nt(yn,e),Mn===null&&(Mn=e)}function dg(e){e.tag===22?(nt(fe,fe.current),nt(yn,e),Mn===null&&(Mn=e)):Cs()}function Cs(){nt(fe,fe.current),nt(yn,yn.current)}function _n(e){Y(yn),Mn===e&&(Mn=null),Y(fe)}var fe=M(0);function ju(e){for(var i=e;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Ad(a)||bd(a)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Fi=0,bt=null,Xt=null,Ee=null,Bu=!1,xa=!1,Mr=!1,qu=0,Zo=0,Oa=null,cb=0;function le(){throw Error(r(321))}function yf(e,i){if(i===null)return!1;for(var a=0;a<i.length&&a<e.length;a++)if(!pn(e[a],i[a]))return!1;return!0}function _f(e,i,a,l,h,d){return Fi=d,bt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,G.H=e===null||e.memoizedState===null?$g:Mf,Mr=!1,d=a(l,h),Mr=!1,xa&&(d=pg(i,a,l,h)),mg(e),d}function mg(e){G.H=el;var i=Xt!==null&&Xt.next!==null;if(Fi=0,Ee=Xt=bt=null,Bu=!1,Zo=0,Oa=null,i)throw Error(r(300));e===null||Ae||(e=e.dependencies,e!==null&&Ou(e)&&(Ae=!0))}function pg(e,i,a,l){bt=e;var h=0;do{if(xa&&(Oa=null),Zo=0,xa=!1,25<=h)throw Error(r(301));if(h+=1,Ee=Xt=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}G.H=Jg,d=i(a,l)}while(xa);return d}function hb(){var e=G.H,i=e.useState()[0];return i=typeof i.then=="function"?Wo(i):i,e=e.useState()[0],(Xt!==null?Xt.memoizedState:null)!==e&&(bt.flags|=1024),i}function vf(){var e=qu!==0;return qu=0,e}function Tf(e,i,a){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~a}function Ef(e){if(Bu){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}Bu=!1}Fi=0,Ee=Xt=bt=null,xa=!1,Zo=qu=0,Oa=null}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?bt.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function de(){if(Xt===null){var e=bt.alternate;e=e!==null?e.memoizedState:null}else e=Xt.next;var i=Ee===null?bt.memoizedState:Ee.next;if(i!==null)Ee=i,Xt=e;else{if(e===null)throw bt.alternate===null?Error(r(467)):Error(r(310));Xt=e,e={memoizedState:Xt.memoizedState,baseState:Xt.baseState,baseQueue:Xt.baseQueue,queue:Xt.queue,next:null},Ee===null?bt.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function Hu(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wo(e){var i=Zo;return Zo+=1,Oa===null&&(Oa=[]),e=rg(Oa,e,i),i=bt,(Ee===null?i.memoizedState:Ee.next)===null&&(i=i.alternate,G.H=i===null||i.memoizedState===null?$g:Mf),e}function Fu(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wo(e);if(e.$$typeof===ht)return je(e)}throw Error(r(438,String(e)))}function Af(e){var i=null,a=bt.updateQueue;if(a!==null&&(i=a.memoCache),i==null){var l=bt.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(i={data:l.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),a===null&&(a=Hu(),bt.updateQueue=a),a.memoCache=i,a=i.data[i.index],a===void 0)for(a=i.data[i.index]=Array(e),l=0;l<e;l++)a[l]=V;return i.index++,a}function Gi(e,i){return typeof i=="function"?i(e):i}function Gu(e){var i=de();return bf(i,Xt,e)}function bf(e,i,a){var l=e.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=a;var h=e.baseQueue,d=l.pending;if(d!==null){if(h!==null){var y=h.next;h.next=d.next,d.next=y}i.baseQueue=h=d,l.pending=null}if(d=e.baseState,h===null)e.memoizedState=d;else{i=h.next;var T=y=null,R=null,z=i,F=!1;do{var K=z.lane&-536870913;if(K!==z.lane?(Nt&K)===K:(Fi&K)===K){var j=z.revertLane;if(j===0)R!==null&&(R=R.next={lane:0,revertLane:0,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null}),K===Ra&&(F=!0);else if((Fi&j)===j){z=z.next,j===Ra&&(F=!0);continue}else K={lane:0,revertLane:z.revertLane,gesture:null,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},R===null?(T=R=K,y=d):R=R.next=K,bt.lanes|=j,xs|=j;K=z.action,Mr&&a(d,K),d=z.hasEagerState?z.eagerState:a(d,K)}else j={lane:K,revertLane:z.revertLane,gesture:z.gesture,action:z.action,hasEagerState:z.hasEagerState,eagerState:z.eagerState,next:null},R===null?(T=R=j,y=d):R=R.next=j,bt.lanes|=K,xs|=K;z=z.next}while(z!==null&&z!==i);if(R===null?y=d:R.next=T,!pn(d,e.memoizedState)&&(Ae=!0,F&&(a=Ia,a!==null)))throw a;e.memoizedState=d,e.baseState=y,e.baseQueue=R,l.lastRenderedState=d}return h===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function Sf(e){var i=de(),a=i.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var l=a.dispatch,h=a.pending,d=i.memoizedState;if(h!==null){a.pending=null;var y=h=h.next;do d=e(d,y.action),y=y.next;while(y!==h);pn(d,i.memoizedState)||(Ae=!0),i.memoizedState=d,i.baseQueue===null&&(i.baseState=d),a.lastRenderedState=d}return[d,l]}function gg(e,i,a){var l=bt,h=de(),d=Vt;if(d){if(a===void 0)throw Error(r(407));a=a()}else a=i();var y=!pn((Xt||h).memoizedState,a);if(y&&(h.memoizedState=a,Ae=!0),h=h.queue,If(vg.bind(null,l,h,e),[e]),h.getSnapshot!==i||y||Ee!==null&&Ee.memoizedState.tag&1){if(l.flags|=2048,Ma(9,{destroy:void 0},_g.bind(null,l,h,a,i),null),Zt===null)throw Error(r(349));d||(Fi&127)!==0||yg(l,i,a)}return a}function yg(e,i,a){e.flags|=16384,e={getSnapshot:i,value:a},i=bt.updateQueue,i===null?(i=Hu(),bt.updateQueue=i,i.stores=[e]):(a=i.stores,a===null?i.stores=[e]:a.push(e))}function _g(e,i,a,l){i.value=a,i.getSnapshot=l,Tg(i)&&Eg(e)}function vg(e,i,a){return a(function(){Tg(i)&&Eg(e)})}function Tg(e){var i=e.getSnapshot;e=e.value;try{var a=i();return!pn(e,a)}catch{return!0}}function Eg(e){var i=Sr(e,2);i!==null&&cn(i,e,2)}function wf(e){var i=tn();if(typeof e=="function"){var a=e;if(e=a(),Mr){bn(!0);try{a()}finally{bn(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:e},i}function Ag(e,i,a,l){return e.baseState=a,bf(e,Xt,typeof l=="function"?l:Gi)}function fb(e,i,a,l,h){if(Yu(e))throw Error(r(485));if(e=i.action,e!==null){var d={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){d.listeners.push(y)}};G.T!==null?a(!0):d.isTransition=!1,l(d),a=i.pending,a===null?(d.next=i.pending=d,bg(i,d)):(d.next=a.next,i.pending=a.next=d)}}function bg(e,i){var a=i.action,l=i.payload,h=e.state;if(i.isTransition){var d=G.T,y={};G.T=y;try{var T=a(h,l),R=G.S;R!==null&&R(y,T),Sg(e,i,T)}catch(z){Rf(e,i,z)}finally{d!==null&&y.types!==null&&(d.types=y.types),G.T=d}}else try{d=a(h,l),Sg(e,i,d)}catch(z){Rf(e,i,z)}}function Sg(e,i,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(l){wg(e,i,l)},function(l){return Rf(e,i,l)}):wg(e,i,a)}function wg(e,i,a){i.status="fulfilled",i.value=a,Rg(i),e.state=a,i=e.pending,i!==null&&(a=i.next,a===i?e.pending=null:(a=a.next,i.next=a,bg(e,a)))}function Rf(e,i,a){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do i.status="rejected",i.reason=a,Rg(i),i=i.next;while(i!==l)}e.action=null}function Rg(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function Ig(e,i){return i}function Cg(e,i){if(Vt){var a=Zt.formState;if(a!==null){t:{var l=bt;if(Vt){if(te){e:{for(var h=te,d=On;h.nodeType!==8;){if(!d){h=null;break e}if(h=Vn(h.nextSibling),h===null){h=null;break e}}d=h.data,h=d==="F!"||d==="F"?h:null}if(h){te=Vn(h.nextSibling),l=h.data==="F!";break t}}As(l)}l=!1}l&&(i=a[0])}}return a=tn(),a.memoizedState=a.baseState=i,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ig,lastRenderedState:i},a.queue=l,a=Kg.bind(null,bt,l),l.dispatch=a,l=wf(!1),d=Of.bind(null,bt,!1,l.queue),l=tn(),h={state:i,dispatch:null,action:e,pending:null},l.queue=h,a=fb.bind(null,bt,h,d,a),h.dispatch=a,l.memoizedState=e,[i,a,!1]}function Ng(e){var i=de();return Dg(i,Xt,e)}function Dg(e,i,a){if(i=bf(e,i,Ig)[0],e=Gu(Gi)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var l=Wo(i)}catch(y){throw y===Ca?ku:y}else l=i;i=de();var h=i.queue,d=h.dispatch;return a!==i.memoizedState&&(bt.flags|=2048,Ma(9,{destroy:void 0},db.bind(null,h,a),null)),[l,d,e]}function db(e,i){e.action=i}function xg(e){var i=de(),a=Xt;if(a!==null)return Dg(i,a,e);de(),i=i.memoizedState,a=de();var l=a.queue.dispatch;return a.memoizedState=e,[i,l,!1]}function Ma(e,i,a,l){return e={tag:e,create:a,deps:l,inst:i,next:null},i=bt.updateQueue,i===null&&(i=Hu(),bt.updateQueue=i),a=i.lastEffect,a===null?i.lastEffect=e.next=e:(l=a.next,a.next=e,e.next=l,i.lastEffect=e),e}function Og(){return de().memoizedState}function Qu(e,i,a,l){var h=tn();bt.flags|=e,h.memoizedState=Ma(1|i,{destroy:void 0},a,l===void 0?null:l)}function Ku(e,i,a,l){var h=de();l=l===void 0?null:l;var d=h.memoizedState.inst;Xt!==null&&l!==null&&yf(l,Xt.memoizedState.deps)?h.memoizedState=Ma(i,d,a,l):(bt.flags|=e,h.memoizedState=Ma(1|i,d,a,l))}function Mg(e,i){Qu(8390656,8,e,i)}function If(e,i){Ku(2048,8,e,i)}function mb(e){bt.flags|=4;var i=bt.updateQueue;if(i===null)i=Hu(),bt.updateQueue=i,i.events=[e];else{var a=i.events;a===null?i.events=[e]:a.push(e)}}function Vg(e){var i=de().memoizedState;return mb({ref:i,nextImpl:e}),function(){if((Bt&2)!==0)throw Error(r(440));return i.impl.apply(void 0,arguments)}}function kg(e,i){return Ku(4,2,e,i)}function Ug(e,i){return Ku(4,4,e,i)}function Pg(e,i){if(typeof i=="function"){e=e();var a=i(e);return function(){typeof a=="function"?a():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function Lg(e,i,a){a=a!=null?a.concat([e]):null,Ku(4,4,Pg.bind(null,i,e),a)}function Cf(){}function zg(e,i){var a=de();i=i===void 0?null:i;var l=a.memoizedState;return i!==null&&yf(i,l[1])?l[0]:(a.memoizedState=[e,i],e)}function jg(e,i){var a=de();i=i===void 0?null:i;var l=a.memoizedState;if(i!==null&&yf(i,l[1]))return l[0];if(l=e(),Mr){bn(!0);try{e()}finally{bn(!1)}}return a.memoizedState=[l,i],l}function Nf(e,i,a){return a===void 0||(Fi&1073741824)!==0&&(Nt&261930)===0?e.memoizedState=i:(e.memoizedState=a,e=By(),bt.lanes|=e,xs|=e,a)}function Bg(e,i,a,l){return pn(a,i)?a:Da.current!==null?(e=Nf(e,a,l),pn(e,i)||(Ae=!0),e):(Fi&42)===0||(Fi&1073741824)!==0&&(Nt&261930)===0?(Ae=!0,e.memoizedState=a):(e=By(),bt.lanes|=e,xs|=e,i)}function qg(e,i,a,l,h){var d=et.p;et.p=d!==0&&8>d?d:8;var y=G.T,T={};G.T=T,Of(e,!1,i,a);try{var R=h(),z=G.S;if(z!==null&&z(T,R),R!==null&&typeof R=="object"&&typeof R.then=="function"){var F=ub(R,l);tl(e,i,F,En(e))}else tl(e,i,l,En(e))}catch(K){tl(e,i,{then:function(){},status:"rejected",reason:K},En())}finally{et.p=d,y!==null&&T.types!==null&&(y.types=T.types),G.T=y}}function pb(){}function Df(e,i,a,l){if(e.tag!==5)throw Error(r(476));var h=Hg(e).queue;qg(e,h,i,ft,a===null?pb:function(){return Fg(e),a(l)})}function Hg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:ft,baseState:ft,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:ft},next:null};var a={};return i.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Gi,lastRenderedState:a},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Fg(e){var i=Hg(e);i.next===null&&(i=e.alternate.memoizedState),tl(e,i.next.queue,{},En())}function xf(){return je(yl)}function Gg(){return de().memoizedState}function Qg(){return de().memoizedState}function gb(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var a=En();e=ws(a);var l=Rs(i,e,a);l!==null&&(cn(l,i,a),Xo(l,i,a)),i={cache:af()},e.payload=i;return}i=i.return}}function yb(e,i,a){var l=En();a={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Yu(e)?Yg(i,a):(a=Yh(e,i,a,l),a!==null&&(cn(a,e,l),Xg(a,i,l)))}function Kg(e,i,a){var l=En();tl(e,i,a,l)}function tl(e,i,a,l){var h={lane:l,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Yu(e))Yg(i,h);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=i.lastRenderedReducer,d!==null))try{var y=i.lastRenderedState,T=d(y,a);if(h.hasEagerState=!0,h.eagerState=T,pn(T,y))return Cu(e,i,h,0),Zt===null&&Iu(),!1}catch{}finally{}if(a=Yh(e,i,h,l),a!==null)return cn(a,e,l),Xg(a,i,l),!0}return!1}function Of(e,i,a,l){if(l={lane:2,revertLane:cd(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Yu(e)){if(i)throw Error(r(479))}else i=Yh(e,a,l,2),i!==null&&cn(i,e,2)}function Yu(e){var i=e.alternate;return e===bt||i!==null&&i===bt}function Yg(e,i){xa=Bu=!0;var a=e.pending;a===null?i.next=i:(i.next=a.next,a.next=i),e.pending=i}function Xg(e,i,a){if((a&4194048)!==0){var l=i.lanes;l&=e.pendingLanes,a|=l,i.lanes=a,Ao(e,a)}}var el={readContext:je,use:Fu,useCallback:le,useContext:le,useEffect:le,useImperativeHandle:le,useLayoutEffect:le,useInsertionEffect:le,useMemo:le,useReducer:le,useRef:le,useState:le,useDebugValue:le,useDeferredValue:le,useTransition:le,useSyncExternalStore:le,useId:le,useHostTransitionStatus:le,useFormState:le,useActionState:le,useOptimistic:le,useMemoCache:le,useCacheRefresh:le};el.useEffectEvent=le;var $g={readContext:je,use:Fu,useCallback:function(e,i){return tn().memoizedState=[e,i===void 0?null:i],e},useContext:je,useEffect:Mg,useImperativeHandle:function(e,i,a){a=a!=null?a.concat([e]):null,Qu(4194308,4,Pg.bind(null,i,e),a)},useLayoutEffect:function(e,i){return Qu(4194308,4,e,i)},useInsertionEffect:function(e,i){Qu(4,2,e,i)},useMemo:function(e,i){var a=tn();i=i===void 0?null:i;var l=e();if(Mr){bn(!0);try{e()}finally{bn(!1)}}return a.memoizedState=[l,i],l},useReducer:function(e,i,a){var l=tn();if(a!==void 0){var h=a(i);if(Mr){bn(!0);try{a(i)}finally{bn(!1)}}}else h=i;return l.memoizedState=l.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},l.queue=e,e=e.dispatch=yb.bind(null,bt,e),[l.memoizedState,e]},useRef:function(e){var i=tn();return e={current:e},i.memoizedState=e},useState:function(e){e=wf(e);var i=e.queue,a=Kg.bind(null,bt,i);return i.dispatch=a,[e.memoizedState,a]},useDebugValue:Cf,useDeferredValue:function(e,i){var a=tn();return Nf(a,e,i)},useTransition:function(){var e=wf(!1);return e=qg.bind(null,bt,e.queue,!0,!1),tn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,a){var l=bt,h=tn();if(Vt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=i(),Zt===null)throw Error(r(349));(Nt&127)!==0||yg(l,i,a)}h.memoizedState=a;var d={value:a,getSnapshot:i};return h.queue=d,Mg(vg.bind(null,l,d,e),[e]),l.flags|=2048,Ma(9,{destroy:void 0},_g.bind(null,l,d,a,i),null),a},useId:function(){var e=tn(),i=Zt.identifierPrefix;if(Vt){var a=bi,l=Ai;a=(l&~(1<<32-ce(l)-1)).toString(32)+a,i="_"+i+"R_"+a,a=qu++,0<a&&(i+="H"+a.toString(32)),i+="_"}else a=cb++,i="_"+i+"r_"+a.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:xf,useFormState:Cg,useActionState:Cg,useOptimistic:function(e){var i=tn();i.memoizedState=i.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=a,i=Of.bind(null,bt,!0,a),a.dispatch=i,[e,i]},useMemoCache:Af,useCacheRefresh:function(){return tn().memoizedState=gb.bind(null,bt)},useEffectEvent:function(e){var i=tn(),a={impl:e};return i.memoizedState=a,function(){if((Bt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Mf={readContext:je,use:Fu,useCallback:zg,useContext:je,useEffect:If,useImperativeHandle:Lg,useInsertionEffect:kg,useLayoutEffect:Ug,useMemo:jg,useReducer:Gu,useRef:Og,useState:function(){return Gu(Gi)},useDebugValue:Cf,useDeferredValue:function(e,i){var a=de();return Bg(a,Xt.memoizedState,e,i)},useTransition:function(){var e=Gu(Gi)[0],i=de().memoizedState;return[typeof e=="boolean"?e:Wo(e),i]},useSyncExternalStore:gg,useId:Gg,useHostTransitionStatus:xf,useFormState:Ng,useActionState:Ng,useOptimistic:function(e,i){var a=de();return Ag(a,Xt,e,i)},useMemoCache:Af,useCacheRefresh:Qg};Mf.useEffectEvent=Vg;var Jg={readContext:je,use:Fu,useCallback:zg,useContext:je,useEffect:If,useImperativeHandle:Lg,useInsertionEffect:kg,useLayoutEffect:Ug,useMemo:jg,useReducer:Sf,useRef:Og,useState:function(){return Sf(Gi)},useDebugValue:Cf,useDeferredValue:function(e,i){var a=de();return Xt===null?Nf(a,e,i):Bg(a,Xt.memoizedState,e,i)},useTransition:function(){var e=Sf(Gi)[0],i=de().memoizedState;return[typeof e=="boolean"?e:Wo(e),i]},useSyncExternalStore:gg,useId:Gg,useHostTransitionStatus:xf,useFormState:xg,useActionState:xg,useOptimistic:function(e,i){var a=de();return Xt!==null?Ag(a,Xt,e,i):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Af,useCacheRefresh:Qg};Jg.useEffectEvent=Vg;function Vf(e,i,a,l){i=e.memoizedState,a=a(l,i),a=a==null?i:b({},i,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var kf={enqueueSetState:function(e,i,a){e=e._reactInternals;var l=En(),h=ws(l);h.payload=i,a!=null&&(h.callback=a),i=Rs(e,h,l),i!==null&&(cn(i,e,l),Xo(i,e,l))},enqueueReplaceState:function(e,i,a){e=e._reactInternals;var l=En(),h=ws(l);h.tag=1,h.payload=i,a!=null&&(h.callback=a),i=Rs(e,h,l),i!==null&&(cn(i,e,l),Xo(i,e,l))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var a=En(),l=ws(a);l.tag=2,i!=null&&(l.callback=i),i=Rs(e,l,a),i!==null&&(cn(i,e,a),Xo(i,e,a))}};function Zg(e,i,a,l,h,d,y){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,d,y):i.prototype&&i.prototype.isPureReactComponent?!Bo(a,l)||!Bo(h,d):!0}function Wg(e,i,a,l){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==e&&kf.enqueueReplaceState(i,i.state,null)}function Vr(e,i){var a=i;if("ref"in i){a={};for(var l in i)l!=="ref"&&(a[l]=i[l])}if(e=e.defaultProps){a===i&&(a=b({},a));for(var h in e)a[h]===void 0&&(a[h]=e[h])}return a}function ty(e){Ru(e)}function ey(e){console.error(e)}function ny(e){Ru(e)}function Xu(e,i){try{var a=e.onUncaughtError;a(i.value,{componentStack:i.stack})}catch(l){setTimeout(function(){throw l})}}function iy(e,i,a){try{var l=e.onCaughtError;l(a.value,{componentStack:a.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Uf(e,i,a){return a=ws(a),a.tag=3,a.payload={element:null},a.callback=function(){Xu(e,i)},a}function sy(e){return e=ws(e),e.tag=3,e}function ry(e,i,a,l){var h=a.type.getDerivedStateFromError;if(typeof h=="function"){var d=l.value;e.payload=function(){return h(d)},e.callback=function(){iy(i,a,l)}}var y=a.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(e.callback=function(){iy(i,a,l),typeof h!="function"&&(Os===null?Os=new Set([this]):Os.add(this));var T=l.stack;this.componentDidCatch(l.value,{componentStack:T!==null?T:""})})}function _b(e,i,a,l,h){if(a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(i=a.alternate,i!==null&&wa(i,a,h,!0),a=yn.current,a!==null){switch(a.tag){case 31:case 13:return Mn===null?oc():a.alternate===null&&ue===0&&(ue=3),a.flags&=-257,a.flags|=65536,a.lanes=h,l===Uu?a.flags|=16384:(i=a.updateQueue,i===null?a.updateQueue=new Set([l]):i.add(l),od(e,l,h)),!1;case 22:return a.flags|=65536,l===Uu?a.flags|=16384:(i=a.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([l])},a.updateQueue=i):(a=i.retryQueue,a===null?i.retryQueue=new Set([l]):a.add(l)),od(e,l,h)),!1}throw Error(r(435,a.tag))}return od(e,l,h),oc(),!1}if(Vt)return i=yn.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,l!==tf&&(e=Error(r(422),{cause:l}),Fo(Nn(e,a)))):(l!==tf&&(i=Error(r(423),{cause:l}),Fo(Nn(i,a))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,l=Nn(l,a),h=Uf(e.stateNode,l,h),ff(e,h),ue!==4&&(ue=2)),!1;var d=Error(r(520),{cause:l});if(d=Nn(d,a),ul===null?ul=[d]:ul.push(d),ue!==4&&(ue=2),i===null)return!0;l=Nn(l,a),a=i;do{switch(a.tag){case 3:return a.flags|=65536,e=h&-h,a.lanes|=e,e=Uf(a.stateNode,l,e),ff(a,e),!1;case 1:if(i=a.type,d=a.stateNode,(a.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(Os===null||!Os.has(d))))return a.flags|=65536,h&=-h,a.lanes|=h,h=sy(h),ry(h,e,a,l),ff(a,h),!1}a=a.return}while(a!==null);return!1}var Pf=Error(r(461)),Ae=!1;function Be(e,i,a,l){i.child=e===null?ug(i,null,a,l):Or(i,e.child,a,l)}function ay(e,i,a,l,h){a=a.render;var d=i.ref;if("ref"in l){var y={};for(var T in l)T!=="ref"&&(y[T]=l[T])}else y=l;return Cr(i),l=_f(e,i,a,y,d,h),T=vf(),e!==null&&!Ae?(Tf(e,i,h),Qi(e,i,h)):(Vt&&T&&Zh(i),i.flags|=1,Be(e,i,l,h),i.child)}function oy(e,i,a,l,h){if(e===null){var d=a.type;return typeof d=="function"&&!Xh(d)&&d.defaultProps===void 0&&a.compare===null?(i.tag=15,i.type=d,ly(e,i,d,l,h)):(e=Du(a.type,null,l,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(d=e.child,!Gf(e,h)){var y=d.memoizedProps;if(a=a.compare,a=a!==null?a:Bo,a(y,l)&&e.ref===i.ref)return Qi(e,i,h)}return i.flags|=1,e=ji(d,l),e.ref=i.ref,e.return=i,i.child=e}function ly(e,i,a,l,h){if(e!==null){var d=e.memoizedProps;if(Bo(d,l)&&e.ref===i.ref)if(Ae=!1,i.pendingProps=l=d,Gf(e,h))(e.flags&131072)!==0&&(Ae=!0);else return i.lanes=e.lanes,Qi(e,i,h)}return Lf(e,i,a,l,h)}function uy(e,i,a,l){var h=l.children,d=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((i.flags&128)!==0){if(d=d!==null?d.baseLanes|a:a,e!==null){for(l=i.child=e.child,h=0;l!==null;)h=h|l.lanes|l.childLanes,l=l.sibling;l=h&~d}else l=0,i.child=null;return cy(e,i,d,a,l)}if((a&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Vu(i,d!==null?d.cachePool:null),d!==null?fg(i,d):mf(),dg(i);else return l=i.lanes=536870912,cy(e,i,d!==null?d.baseLanes|a:a,a,l)}else d!==null?(Vu(i,d.cachePool),fg(i,d),Cs(),i.memoizedState=null):(e!==null&&Vu(i,null),mf(),Cs());return Be(e,i,h,a),i.child}function nl(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function cy(e,i,a,l,h){var d=lf();return d=d===null?null:{parent:Te._currentValue,pool:d},i.memoizedState={baseLanes:a,cachePool:d},e!==null&&Vu(i,null),mf(),dg(i),e!==null&&wa(e,i,l,!0),i.childLanes=h,null}function $u(e,i){return i=Zu({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function hy(e,i,a){return Or(i,e.child,null,a),e=$u(i,i.pendingProps),e.flags|=2,_n(i),i.memoizedState=null,e}function vb(e,i,a){var l=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Vt){if(l.mode==="hidden")return e=$u(i,l),i.lanes=536870912,nl(null,e);if(gf(i),(e=te)?(e=b_(e,On),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ts!==null?{id:Ai,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=Yp(e),a.return=i,i.child=a,ze=i,te=null)):e=null,e===null)throw As(i);return i.lanes=536870912,null}return $u(i,l)}var d=e.memoizedState;if(d!==null){var y=d.dehydrated;if(gf(i),h)if(i.flags&256)i.flags&=-257,i=hy(e,i,a);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(r(558));else if(Ae||wa(e,i,a,!1),h=(a&e.childLanes)!==0,Ae||h){if(l=Zt,l!==null&&(y=bo(l,a),y!==0&&y!==d.retryLane))throw d.retryLane=y,Sr(e,y),cn(l,e,y),Pf;oc(),i=hy(e,i,a)}else e=d.treeContext,te=Vn(y.nextSibling),ze=i,Vt=!0,Es=null,On=!1,e!==null&&Jp(i,e),i=$u(i,l),i.flags|=4096;return i}return e=ji(e.child,{mode:l.mode,children:l.children}),e.ref=i.ref,i.child=e,e.return=i,e}function Ju(e,i){var a=i.ref;if(a===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(i.flags|=4194816)}}function Lf(e,i,a,l,h){return Cr(i),a=_f(e,i,a,l,void 0,h),l=vf(),e!==null&&!Ae?(Tf(e,i,h),Qi(e,i,h)):(Vt&&l&&Zh(i),i.flags|=1,Be(e,i,a,h),i.child)}function fy(e,i,a,l,h,d){return Cr(i),i.updateQueue=null,a=pg(i,l,a,h),mg(e),l=vf(),e!==null&&!Ae?(Tf(e,i,d),Qi(e,i,d)):(Vt&&l&&Zh(i),i.flags|=1,Be(e,i,a,d),i.child)}function dy(e,i,a,l,h){if(Cr(i),i.stateNode===null){var d=Ea,y=a.contextType;typeof y=="object"&&y!==null&&(d=je(y)),d=new a(l,d),i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=kf,i.stateNode=d,d._reactInternals=i,d=i.stateNode,d.props=l,d.state=i.memoizedState,d.refs={},cf(i),y=a.contextType,d.context=typeof y=="object"&&y!==null?je(y):Ea,d.state=i.memoizedState,y=a.getDerivedStateFromProps,typeof y=="function"&&(Vf(i,a,y,l),d.state=i.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(y=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),y!==d.state&&kf.enqueueReplaceState(d,d.state,null),Jo(i,l,d,h),$o(),d.state=i.memoizedState),typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!0}else if(e===null){d=i.stateNode;var T=i.memoizedProps,R=Vr(a,T);d.props=R;var z=d.context,F=a.contextType;y=Ea,typeof F=="object"&&F!==null&&(y=je(F));var K=a.getDerivedStateFromProps;F=typeof K=="function"||typeof d.getSnapshotBeforeUpdate=="function",T=i.pendingProps!==T,F||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(T||z!==y)&&Wg(i,d,l,y),Ss=!1;var j=i.memoizedState;d.state=j,Jo(i,l,d,h),$o(),z=i.memoizedState,T||j!==z||Ss?(typeof K=="function"&&(Vf(i,a,K,l),z=i.memoizedState),(R=Ss||Zg(i,a,R,l,j,z,y))?(F||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(i.flags|=4194308)):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=z),d.props=l,d.state=z,d.context=y,l=R):(typeof d.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{d=i.stateNode,hf(e,i),y=i.memoizedProps,F=Vr(a,y),d.props=F,K=i.pendingProps,j=d.context,z=a.contextType,R=Ea,typeof z=="object"&&z!==null&&(R=je(z)),T=a.getDerivedStateFromProps,(z=typeof T=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(y!==K||j!==R)&&Wg(i,d,l,R),Ss=!1,j=i.memoizedState,d.state=j,Jo(i,l,d,h),$o();var H=i.memoizedState;y!==K||j!==H||Ss||e!==null&&e.dependencies!==null&&Ou(e.dependencies)?(typeof T=="function"&&(Vf(i,a,T,l),H=i.memoizedState),(F=Ss||Zg(i,a,F,l,j,H,R)||e!==null&&e.dependencies!==null&&Ou(e.dependencies))?(z||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(l,H,R),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(l,H,R)),typeof d.componentDidUpdate=="function"&&(i.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&j===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&j===e.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=H),d.props=l,d.state=H,d.context=R,l=F):(typeof d.componentDidUpdate!="function"||y===e.memoizedProps&&j===e.memoizedState||(i.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&j===e.memoizedState||(i.flags|=1024),l=!1)}return d=l,Ju(e,i),l=(i.flags&128)!==0,d||l?(d=i.stateNode,a=l&&typeof a.getDerivedStateFromError!="function"?null:d.render(),i.flags|=1,e!==null&&l?(i.child=Or(i,e.child,null,h),i.child=Or(i,null,a,h)):Be(e,i,a,h),i.memoizedState=d.state,e=i.child):e=Qi(e,i,h),e}function my(e,i,a,l){return Rr(),i.flags|=256,Be(e,i,a,l),i.child}var zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function jf(e){return{baseLanes:e,cachePool:ig()}}function Bf(e,i,a){return e=e!==null?e.childLanes&~a:0,i&&(e|=Tn),e}function py(e,i,a){var l=i.pendingProps,h=!1,d=(i.flags&128)!==0,y;if((y=d)||(y=e!==null&&e.memoizedState===null?!1:(fe.current&2)!==0),y&&(h=!0,i.flags&=-129),y=(i.flags&32)!==0,i.flags&=-33,e===null){if(Vt){if(h?Is(i):Cs(),(e=te)?(e=b_(e,On),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:Ts!==null?{id:Ai,overflow:bi}:null,retryLane:536870912,hydrationErrors:null},a=Yp(e),a.return=i,i.child=a,ze=i,te=null)):e=null,e===null)throw As(i);return bd(e)?i.lanes=32:i.lanes=536870912,null}var T=l.children;return l=l.fallback,h?(Cs(),h=i.mode,T=Zu({mode:"hidden",children:T},h),l=wr(l,h,a,null),T.return=i,l.return=i,T.sibling=l,i.child=T,l=i.child,l.memoizedState=jf(a),l.childLanes=Bf(e,y,a),i.memoizedState=zf,nl(null,l)):(Is(i),qf(i,T))}var R=e.memoizedState;if(R!==null&&(T=R.dehydrated,T!==null)){if(d)i.flags&256?(Is(i),i.flags&=-257,i=Hf(e,i,a)):i.memoizedState!==null?(Cs(),i.child=e.child,i.flags|=128,i=null):(Cs(),T=l.fallback,h=i.mode,l=Zu({mode:"visible",children:l.children},h),T=wr(T,h,a,null),T.flags|=2,l.return=i,T.return=i,l.sibling=T,i.child=l,Or(i,e.child,null,a),l=i.child,l.memoizedState=jf(a),l.childLanes=Bf(e,y,a),i.memoizedState=zf,i=nl(null,l));else if(Is(i),bd(T)){if(y=T.nextSibling&&T.nextSibling.dataset,y)var z=y.dgst;y=z,l=Error(r(419)),l.stack="",l.digest=y,Fo({value:l,source:null,stack:null}),i=Hf(e,i,a)}else if(Ae||wa(e,i,a,!1),y=(a&e.childLanes)!==0,Ae||y){if(y=Zt,y!==null&&(l=bo(y,a),l!==0&&l!==R.retryLane))throw R.retryLane=l,Sr(e,l),cn(y,e,l),Pf;Ad(T)||oc(),i=Hf(e,i,a)}else Ad(T)?(i.flags|=192,i.child=e.child,i=null):(e=R.treeContext,te=Vn(T.nextSibling),ze=i,Vt=!0,Es=null,On=!1,e!==null&&Jp(i,e),i=qf(i,l.children),i.flags|=4096);return i}return h?(Cs(),T=l.fallback,h=i.mode,R=e.child,z=R.sibling,l=ji(R,{mode:"hidden",children:l.children}),l.subtreeFlags=R.subtreeFlags&65011712,z!==null?T=ji(z,T):(T=wr(T,h,a,null),T.flags|=2),T.return=i,l.return=i,l.sibling=T,i.child=l,nl(null,l),l=i.child,T=e.child.memoizedState,T===null?T=jf(a):(h=T.cachePool,h!==null?(R=Te._currentValue,h=h.parent!==R?{parent:R,pool:R}:h):h=ig(),T={baseLanes:T.baseLanes|a,cachePool:h}),l.memoizedState=T,l.childLanes=Bf(e,y,a),i.memoizedState=zf,nl(e.child,l)):(Is(i),a=e.child,e=a.sibling,a=ji(a,{mode:"visible",children:l.children}),a.return=i,a.sibling=null,e!==null&&(y=i.deletions,y===null?(i.deletions=[e],i.flags|=16):y.push(e)),i.child=a,i.memoizedState=null,a)}function qf(e,i){return i=Zu({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function Zu(e,i){return e=gn(22,e,null,i),e.lanes=0,e}function Hf(e,i,a){return Or(i,e.child,null,a),e=qf(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function gy(e,i,a){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i),sf(e.return,i,a)}function Ff(e,i,a,l,h,d){var y=e.memoizedState;y===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:h,treeForkCount:d}:(y.isBackwards=i,y.rendering=null,y.renderingStartTime=0,y.last=l,y.tail=a,y.tailMode=h,y.treeForkCount=d)}function yy(e,i,a){var l=i.pendingProps,h=l.revealOrder,d=l.tail;l=l.children;var y=fe.current,T=(y&2)!==0;if(T?(y=y&1|2,i.flags|=128):y&=1,nt(fe,y),Be(e,i,l,a),l=Vt?Ho:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&gy(e,a,i);else if(e.tag===19)gy(e,a,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(a=i.child,h=null;a!==null;)e=a.alternate,e!==null&&ju(e)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),Ff(i,!1,h,a,d,l);break;case"backwards":case"unstable_legacy-backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&ju(e)===null){i.child=h;break}e=h.sibling,h.sibling=a,a=h,h=e}Ff(i,!0,a,null,d,l);break;case"together":Ff(i,!1,null,null,void 0,l);break;default:i.memoizedState=null}return i.child}function Qi(e,i,a){if(e!==null&&(i.dependencies=e.dependencies),xs|=i.lanes,(a&i.childLanes)===0)if(e!==null){if(wa(e,i,a,!1),(a&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(r(153));if(i.child!==null){for(e=i.child,a=ji(e,e.pendingProps),i.child=a,a.return=i;e.sibling!==null;)e=e.sibling,a=a.sibling=ji(e,e.pendingProps),a.return=i;a.sibling=null}return i.child}function Gf(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&Ou(e)))}function Tb(e,i,a){switch(i.tag){case 3:Ce(i,i.stateNode.containerInfo),bs(i,Te,e.memoizedState.cache),Rr();break;case 27:case 5:ar(i);break;case 4:Ce(i,i.stateNode.containerInfo);break;case 10:bs(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,gf(i),null;break;case 13:var l=i.memoizedState;if(l!==null)return l.dehydrated!==null?(Is(i),i.flags|=128,null):(a&i.child.childLanes)!==0?py(e,i,a):(Is(i),e=Qi(e,i,a),e!==null?e.sibling:null);Is(i);break;case 19:var h=(e.flags&128)!==0;if(l=(a&i.childLanes)!==0,l||(wa(e,i,a,!1),l=(a&i.childLanes)!==0),h){if(l)return yy(e,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),nt(fe,fe.current),l)break;return null;case 22:return i.lanes=0,uy(e,i,a,i.pendingProps);case 24:bs(i,Te,e.memoizedState.cache)}return Qi(e,i,a)}function _y(e,i,a){if(e!==null)if(e.memoizedProps!==i.pendingProps)Ae=!0;else{if(!Gf(e,a)&&(i.flags&128)===0)return Ae=!1,Tb(e,i,a);Ae=(e.flags&131072)!==0}else Ae=!1,Vt&&(i.flags&1048576)!==0&&$p(i,Ho,i.index);switch(i.lanes=0,i.tag){case 16:t:{var l=i.pendingProps;if(e=Dr(i.elementType),i.type=e,typeof e=="function")Xh(e)?(l=Vr(e,l),i.tag=1,i=dy(null,i,e,l,a)):(i.tag=0,i=Lf(null,i,e,l,a));else{if(e!=null){var h=e.$$typeof;if(h===Et){i.tag=11,i=ay(null,i,e,l,a);break t}else if(h===C){i.tag=14,i=oy(null,i,e,l,a);break t}}throw i=ie(e)||e,Error(r(306,i,""))}}return i;case 0:return Lf(e,i,i.type,i.pendingProps,a);case 1:return l=i.type,h=Vr(l,i.pendingProps),dy(e,i,l,h,a);case 3:t:{if(Ce(i,i.stateNode.containerInfo),e===null)throw Error(r(387));l=i.pendingProps;var d=i.memoizedState;h=d.element,hf(e,i),Jo(i,l,null,a);var y=i.memoizedState;if(l=y.cache,bs(i,Te,l),l!==d.cache&&rf(i,[Te],a,!0),$o(),l=y.element,d.isDehydrated)if(d={element:l,isDehydrated:!1,cache:y.cache},i.updateQueue.baseState=d,i.memoizedState=d,i.flags&256){i=my(e,i,l,a);break t}else if(l!==h){h=Nn(Error(r(424)),i),Fo(h),i=my(e,i,l,a);break t}else{switch(e=i.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(te=Vn(e.firstChild),ze=i,Vt=!0,Es=null,On=!0,a=ug(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Rr(),l===h){i=Qi(e,i,a);break t}Be(e,i,l,a)}i=i.child}return i;case 26:return Ju(e,i),e===null?(a=N_(i.type,null,i.pendingProps,null))?i.memoizedState=a:Vt||(a=i.type,e=i.pendingProps,l=mc(St.current).createElement(a),l[ye]=i,l[Me]=e,qe(l,a,e),_e(l),i.stateNode=l):i.memoizedState=N_(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return ar(i),e===null&&Vt&&(l=i.stateNode=R_(i.type,i.pendingProps,St.current),ze=i,On=!0,h=te,Us(i.type)?(Sd=h,te=Vn(l.firstChild)):te=h),Be(e,i,i.pendingProps.children,a),Ju(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Vt&&((h=l=te)&&(l=$b(l,i.type,i.pendingProps,On),l!==null?(i.stateNode=l,ze=i,te=Vn(l.firstChild),On=!1,h=!0):h=!1),h||As(i)),ar(i),h=i.type,d=i.pendingProps,y=e!==null?e.memoizedProps:null,l=d.children,vd(h,d)?l=null:y!==null&&vd(h,y)&&(i.flags|=32),i.memoizedState!==null&&(h=_f(e,i,hb,null,null,a),yl._currentValue=h),Ju(e,i),Be(e,i,l,a),i.child;case 6:return e===null&&Vt&&((e=a=te)&&(a=Jb(a,i.pendingProps,On),a!==null?(i.stateNode=a,ze=i,te=null,e=!0):e=!1),e||As(i)),null;case 13:return py(e,i,a);case 4:return Ce(i,i.stateNode.containerInfo),l=i.pendingProps,e===null?i.child=Or(i,null,l,a):Be(e,i,l,a),i.child;case 11:return ay(e,i,i.type,i.pendingProps,a);case 7:return Be(e,i,i.pendingProps,a),i.child;case 8:return Be(e,i,i.pendingProps.children,a),i.child;case 12:return Be(e,i,i.pendingProps.children,a),i.child;case 10:return l=i.pendingProps,bs(i,i.type,l.value),Be(e,i,l.children,a),i.child;case 9:return h=i.type._context,l=i.pendingProps.children,Cr(i),h=je(h),l=l(h),i.flags|=1,Be(e,i,l,a),i.child;case 14:return oy(e,i,i.type,i.pendingProps,a);case 15:return ly(e,i,i.type,i.pendingProps,a);case 19:return yy(e,i,a);case 31:return vb(e,i,a);case 22:return uy(e,i,a,i.pendingProps);case 24:return Cr(i),l=je(Te),e===null?(h=lf(),h===null&&(h=Zt,d=af(),h.pooledCache=d,d.refCount++,d!==null&&(h.pooledCacheLanes|=a),h=d),i.memoizedState={parent:l,cache:h},cf(i),bs(i,Te,h)):((e.lanes&a)!==0&&(hf(e,i),Jo(i,null,null,a),$o()),h=e.memoizedState,d=i.memoizedState,h.parent!==l?(h={parent:l,cache:l},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),bs(i,Te,l)):(l=d.cache,bs(i,Te,l),l!==h.cache&&rf(i,[Te],a,!0))),Be(e,i,i.pendingProps.children,a),i.child;case 29:throw i.pendingProps}throw Error(r(156,i.tag))}function Ki(e){e.flags|=4}function Qf(e,i,a,l,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(Gy())e.flags|=8192;else throw xr=Uu,uf}else e.flags&=-16777217}function vy(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!V_(i))if(Gy())e.flags|=8192;else throw xr=Uu,uf}function Wu(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?ru():536870912,e.lanes|=i,Pa|=i)}function il(e,i){if(!Vt)switch(e.tailMode){case"hidden":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function ee(e){var i=e.alternate!==null&&e.alternate.child===e.child,a=0,l=0;if(i)for(var h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags&65011712,l|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)a|=h.lanes|h.childLanes,l|=h.subtreeFlags,l|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=l,e.childLanes=a,i}function Eb(e,i,a){var l=i.pendingProps;switch(Wh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ee(i),null;case 1:return ee(i),null;case 3:return a=i.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),i.memoizedState.cache!==l&&(i.flags|=2048),Hi(Te),se(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Sa(i)?Ki(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ef())),ee(i),null;case 26:var h=i.type,d=i.memoizedState;return e===null?(Ki(i),d!==null?(ee(i),vy(i,d)):(ee(i),Qf(i,h,null,l,a))):d?d!==e.memoizedState?(Ki(i),ee(i),vy(i,d)):(ee(i),i.flags&=-16777217):(e=e.memoizedProps,e!==l&&Ki(i),ee(i),Qf(i,h,e,l,a)),null;case 27:if(na(i),a=St.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ki(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return ee(i),null}e=rt.current,Sa(i)?Zp(i):(e=R_(h,l,a),i.stateNode=e,Ki(i))}return ee(i),null;case 5:if(na(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==l&&Ki(i);else{if(!l){if(i.stateNode===null)throw Error(r(166));return ee(i),null}if(d=rt.current,Sa(i))Zp(i);else{var y=mc(St.current);switch(d){case 1:d=y.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:d=y.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":d=y.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":d=y.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":d=y.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof l.is=="string"?y.createElement("select",{is:l.is}):y.createElement("select"),l.multiple?d.multiple=!0:l.size&&(d.size=l.size);break;default:d=typeof l.is=="string"?y.createElement(h,{is:l.is}):y.createElement(h)}}d[ye]=i,d[Me]=l;t:for(y=i.child;y!==null;){if(y.tag===5||y.tag===6)d.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===i)break t;for(;y.sibling===null;){if(y.return===null||y.return===i)break t;y=y.return}y.sibling.return=y.return,y=y.sibling}i.stateNode=d;t:switch(qe(d,h,l),h){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break t;case"img":l=!0;break t;default:l=!1}l&&Ki(i)}}return ee(i),Qf(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,a),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==l&&Ki(i);else{if(typeof l!="string"&&i.stateNode===null)throw Error(r(166));if(e=St.current,Sa(i)){if(e=i.stateNode,a=i.memoizedProps,l=null,h=ze,h!==null)switch(h.tag){case 27:case 5:l=h.memoizedProps}e[ye]=i,e=!!(e.nodeValue===a||l!==null&&l.suppressHydrationWarning===!0||p_(e.nodeValue,a)),e||As(i,!0)}else e=mc(e).createTextNode(l),e[ye]=i,i.stateNode=e}return ee(i),null;case 31:if(a=i.memoizedState,e===null||e.memoizedState!==null){if(l=Sa(i),a!==null){if(e===null){if(!l)throw Error(r(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[ye]=i}else Rr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ee(i),e=!1}else a=ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return i.flags&256?(_n(i),i):(_n(i),null);if((i.flags&128)!==0)throw Error(r(558))}return ee(i),null;case 13:if(l=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Sa(i),l!==null&&l.dehydrated!==null){if(e===null){if(!h)throw Error(r(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(r(317));h[ye]=i}else Rr(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;ee(i),h=!1}else h=ef(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(_n(i),i):(_n(i),null)}return _n(i),(i.flags&128)!==0?(i.lanes=a,i):(a=l!==null,e=e!==null&&e.memoizedState!==null,a&&(l=i.child,h=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(h=l.alternate.memoizedState.cachePool.pool),d=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(d=l.memoizedState.cachePool.pool),d!==h&&(l.flags|=2048)),a!==e&&a&&(i.child.flags|=8192),Wu(i,i.updateQueue),ee(i),null);case 4:return se(),e===null&&md(i.stateNode.containerInfo),ee(i),null;case 10:return Hi(i.type),ee(i),null;case 19:if(Y(fe),l=i.memoizedState,l===null)return ee(i),null;if(h=(i.flags&128)!==0,d=l.rendering,d===null)if(h)il(l,!1);else{if(ue!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(d=ju(e),d!==null){for(i.flags|=128,il(l,!1),e=d.updateQueue,i.updateQueue=e,Wu(i,e),i.subtreeFlags=0,e=a,a=i.child;a!==null;)Kp(a,e),a=a.sibling;return nt(fe,fe.current&1|2),Vt&&Bi(i,l.treeForkCount),i.child}e=e.sibling}l.tail!==null&&Ze()>sc&&(i.flags|=128,h=!0,il(l,!1),i.lanes=4194304)}else{if(!h)if(e=ju(d),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,Wu(i,e),il(l,!0),l.tail===null&&l.tailMode==="hidden"&&!d.alternate&&!Vt)return ee(i),null}else 2*Ze()-l.renderingStartTime>sc&&a!==536870912&&(i.flags|=128,h=!0,il(l,!1),i.lanes=4194304);l.isBackwards?(d.sibling=i.child,i.child=d):(e=l.last,e!==null?e.sibling=d:i.child=d,l.last=d)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=Ze(),e.sibling=null,a=fe.current,nt(fe,h?a&1|2:a&1),Vt&&Bi(i,l.treeForkCount),e):(ee(i),null);case 22:case 23:return _n(i),pf(),l=i.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(i.flags|=8192):l&&(i.flags|=8192),l?(a&536870912)!==0&&(i.flags&128)===0&&(ee(i),i.subtreeFlags&6&&(i.flags|=8192)):ee(i),a=i.updateQueue,a!==null&&Wu(i,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==a&&(i.flags|=2048),e!==null&&Y(Nr),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),i.memoizedState.cache!==a&&(i.flags|=2048),Hi(Te),ee(i),null;case 25:return null;case 30:return null}throw Error(r(156,i.tag))}function Ab(e,i){switch(Wh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Hi(Te),se(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return na(i),null;case 31:if(i.memoizedState!==null){if(_n(i),i.alternate===null)throw Error(r(340));Rr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(_n(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(r(340));Rr()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return Y(fe),null;case 4:return se(),null;case 10:return Hi(i.type),null;case 22:case 23:return _n(i),pf(),e!==null&&Y(Nr),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Hi(Te),null;case 25:return null;default:return null}}function Ty(e,i){switch(Wh(i),i.tag){case 3:Hi(Te),se();break;case 26:case 27:case 5:na(i);break;case 4:se();break;case 31:i.memoizedState!==null&&_n(i);break;case 13:_n(i);break;case 19:Y(fe);break;case 10:Hi(i.type);break;case 22:case 23:_n(i),pf(),e!==null&&Y(Nr);break;case 24:Hi(Te)}}function sl(e,i){try{var a=i.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var h=l.next;a=h;do{if((a.tag&e)===e){l=void 0;var d=a.create,y=a.inst;l=d(),y.destroy=l}a=a.next}while(a!==h)}}catch(T){Kt(i,i.return,T)}}function Ns(e,i,a){try{var l=i.updateQueue,h=l!==null?l.lastEffect:null;if(h!==null){var d=h.next;l=d;do{if((l.tag&e)===e){var y=l.inst,T=y.destroy;if(T!==void 0){y.destroy=void 0,h=i;var R=a,z=T;try{z()}catch(F){Kt(h,R,F)}}}l=l.next}while(l!==d)}}catch(F){Kt(i,i.return,F)}}function Ey(e){var i=e.updateQueue;if(i!==null){var a=e.stateNode;try{hg(i,a)}catch(l){Kt(e,e.return,l)}}}function Ay(e,i,a){a.props=Vr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(l){Kt(e,i,l)}}function rl(e,i){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof a=="function"?e.refCleanup=a(l):a.current=l}}catch(h){Kt(e,i,h)}}function Si(e,i){var a=e.ref,l=e.refCleanup;if(a!==null)if(typeof l=="function")try{l()}catch(h){Kt(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(h){Kt(e,i,h)}else a.current=null}function by(e){var i=e.type,a=e.memoizedProps,l=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":a.autoFocus&&l.focus();break t;case"img":a.src?l.src=a.src:a.srcSet&&(l.srcset=a.srcSet)}}catch(h){Kt(e,e.return,h)}}function Kf(e,i,a){try{var l=e.stateNode;Fb(l,e.type,a,i),l[Me]=i}catch(h){Kt(e,e.return,h)}}function Sy(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Us(e.type)||e.tag===4}function Yf(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||Sy(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Us(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Xf(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,i):(i=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,i.appendChild(e),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Fn));else if(l!==4&&(l===27&&Us(e.type)&&(a=e.stateNode,i=null),e=e.child,e!==null))for(Xf(e,i,a),e=e.sibling;e!==null;)Xf(e,i,a),e=e.sibling}function tc(e,i,a){var l=e.tag;if(l===5||l===6)e=e.stateNode,i?a.insertBefore(e,i):a.appendChild(e);else if(l!==4&&(l===27&&Us(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(tc(e,i,a),e=e.sibling;e!==null;)tc(e,i,a),e=e.sibling}function wy(e){var i=e.stateNode,a=e.memoizedProps;try{for(var l=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);qe(i,l,a),i[ye]=e,i[Me]=a}catch(d){Kt(e,e.return,d)}}var Yi=!1,be=!1,$f=!1,Ry=typeof WeakSet=="function"?WeakSet:Set,ke=null;function bb(e,i){if(e=e.containerInfo,yd=Ec,e=Lp(e),qh(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var h=l.anchorOffset,d=l.focusNode;l=l.focusOffset;try{a.nodeType,d.nodeType}catch{a=null;break t}var y=0,T=-1,R=-1,z=0,F=0,K=e,j=null;e:for(;;){for(var H;K!==a||h!==0&&K.nodeType!==3||(T=y+h),K!==d||l!==0&&K.nodeType!==3||(R=y+l),K.nodeType===3&&(y+=K.nodeValue.length),(H=K.firstChild)!==null;)j=K,K=H;for(;;){if(K===e)break e;if(j===a&&++z===h&&(T=y),j===d&&++F===l&&(R=y),(H=K.nextSibling)!==null)break;K=j,j=K.parentNode}K=H}a=T===-1||R===-1?null:{start:T,end:R}}else a=null}a=a||{start:0,end:0}}else a=null;for(_d={focusedElem:e,selectionRange:a},Ec=!1,ke=i;ke!==null;)if(i=ke,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,ke=e;else for(;ke!==null;){switch(i=ke,d=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)h=e[a],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,a=i,h=d.memoizedProps,d=d.memoizedState,l=a.stateNode;try{var at=Vr(a.type,h);e=l.getSnapshotBeforeUpdate(at,d),l.__reactInternalSnapshotBeforeUpdate=e}catch(dt){Kt(a,a.return,dt)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,a=e.nodeType,a===9)Ed(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Ed(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=i.sibling,e!==null){e.return=i.return,ke=e;break}ke=i.return}}function Iy(e,i,a){var l=a.flags;switch(a.tag){case 0:case 11:case 15:$i(e,a),l&4&&sl(5,a);break;case 1:if($i(e,a),l&4)if(e=a.stateNode,i===null)try{e.componentDidMount()}catch(y){Kt(a,a.return,y)}else{var h=Vr(a.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(y){Kt(a,a.return,y)}}l&64&&Ey(a),l&512&&rl(a,a.return);break;case 3:if($i(e,a),l&64&&(e=a.updateQueue,e!==null)){if(i=null,a.child!==null)switch(a.child.tag){case 27:case 5:i=a.child.stateNode;break;case 1:i=a.child.stateNode}try{hg(e,i)}catch(y){Kt(a,a.return,y)}}break;case 27:i===null&&l&4&&wy(a);case 26:case 5:$i(e,a),i===null&&l&4&&by(a),l&512&&rl(a,a.return);break;case 12:$i(e,a);break;case 31:$i(e,a),l&4&&Dy(e,a);break;case 13:$i(e,a),l&4&&xy(e,a),l&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=Ob.bind(null,a),Zb(e,a))));break;case 22:if(l=a.memoizedState!==null||Yi,!l){i=i!==null&&i.memoizedState!==null||be,h=Yi;var d=be;Yi=l,(be=i)&&!d?Ji(e,a,(a.subtreeFlags&8772)!==0):$i(e,a),Yi=h,be=d}break;case 30:break;default:$i(e,a)}}function Cy(e){var i=e.alternate;i!==null&&(e.alternate=null,Cy(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&oa(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ae=null,an=!1;function Xi(e,i,a){for(a=a.child;a!==null;)Ny(e,i,a),a=a.sibling}function Ny(e,i,a){if(Pe&&typeof Pe.onCommitFiberUnmount=="function")try{Pe.onCommitFiberUnmount(jn,a)}catch{}switch(a.tag){case 26:be||Si(a,i),Xi(e,i,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:be||Si(a,i);var l=ae,h=an;Us(a.type)&&(ae=a.stateNode,an=!1),Xi(e,i,a),ml(a.stateNode),ae=l,an=h;break;case 5:be||Si(a,i);case 6:if(l=ae,h=an,ae=null,Xi(e,i,a),ae=l,an=h,ae!==null)if(an)try{(ae.nodeType===9?ae.body:ae.nodeName==="HTML"?ae.ownerDocument.body:ae).removeChild(a.stateNode)}catch(d){Kt(a,i,d)}else try{ae.removeChild(a.stateNode)}catch(d){Kt(a,i,d)}break;case 18:ae!==null&&(an?(e=ae,E_(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ga(e)):E_(ae,a.stateNode));break;case 4:l=ae,h=an,ae=a.stateNode.containerInfo,an=!0,Xi(e,i,a),ae=l,an=h;break;case 0:case 11:case 14:case 15:Ns(2,a,i),be||Ns(4,a,i),Xi(e,i,a);break;case 1:be||(Si(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"&&Ay(a,i,l)),Xi(e,i,a);break;case 21:Xi(e,i,a);break;case 22:be=(l=be)||a.memoizedState!==null,Xi(e,i,a),be=l;break;default:Xi(e,i,a)}}function Dy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ga(e)}catch(a){Kt(i,i.return,a)}}}function xy(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ga(e)}catch(a){Kt(i,i.return,a)}}function Sb(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new Ry),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new Ry),i;default:throw Error(r(435,e.tag))}}function ec(e,i){var a=Sb(e);i.forEach(function(l){if(!a.has(l)){a.add(l);var h=Mb.bind(null,e,l);l.then(h,h)}})}function on(e,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var h=a[l],d=e,y=i,T=y;t:for(;T!==null;){switch(T.tag){case 27:if(Us(T.type)){ae=T.stateNode,an=!1;break t}break;case 5:ae=T.stateNode,an=!1;break t;case 3:case 4:ae=T.stateNode.containerInfo,an=!0;break t}T=T.return}if(ae===null)throw Error(r(160));Ny(d,y,h),ae=null,an=!1,d=h.alternate,d!==null&&(d.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)Oy(i,e),i=i.sibling}var $n=null;function Oy(e,i){var a=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:on(i,e),ln(e),l&4&&(Ns(3,e,e.return),sl(3,e),Ns(5,e,e.return));break;case 1:on(i,e),ln(e),l&512&&(be||a===null||Si(a,a.return)),l&64&&Yi&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?l:a.concat(l))));break;case 26:var h=$n;if(on(i,e),ln(e),l&512&&(be||a===null||Si(a,a.return)),l&4){var d=a!==null?a.memoizedState:null;if(l=e.memoizedState,a===null)if(l===null)if(e.stateNode===null){t:{l=e.type,a=e.memoizedProps,h=h.ownerDocument||h;e:switch(l){case"title":d=h.getElementsByTagName("title")[0],(!d||d[ci]||d[ye]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=h.createElement(l),h.head.insertBefore(d,h.querySelector("head > title"))),qe(d,l,a),d[ye]=e,_e(d),l=d;break t;case"link":var y=O_("link","href",h).get(l+(a.href||""));if(y){for(var T=0;T<y.length;T++)if(d=y[T],d.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&d.getAttribute("rel")===(a.rel==null?null:a.rel)&&d.getAttribute("title")===(a.title==null?null:a.title)&&d.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){y.splice(T,1);break e}}d=h.createElement(l),qe(d,l,a),h.head.appendChild(d);break;case"meta":if(y=O_("meta","content",h).get(l+(a.content||""))){for(T=0;T<y.length;T++)if(d=y[T],d.getAttribute("content")===(a.content==null?null:""+a.content)&&d.getAttribute("name")===(a.name==null?null:a.name)&&d.getAttribute("property")===(a.property==null?null:a.property)&&d.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&d.getAttribute("charset")===(a.charSet==null?null:a.charSet)){y.splice(T,1);break e}}d=h.createElement(l),qe(d,l,a),h.head.appendChild(d);break;default:throw Error(r(468,l))}d[ye]=e,_e(d),l=d}e.stateNode=l}else M_(h,e.type,e.stateNode);else e.stateNode=x_(h,l,e.memoizedProps);else d!==l?(d===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):d.count--,l===null?M_(h,e.type,e.stateNode):x_(h,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Kf(e,e.memoizedProps,a.memoizedProps)}break;case 27:on(i,e),ln(e),l&512&&(be||a===null||Si(a,a.return)),a!==null&&l&4&&Kf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(on(i,e),ln(e),l&512&&(be||a===null||Si(a,a.return)),e.flags&32){h=e.stateNode;try{rn(h,"")}catch(at){Kt(e,e.return,at)}}l&4&&e.stateNode!=null&&(h=e.memoizedProps,Kf(e,h,a!==null?a.memoizedProps:h)),l&1024&&($f=!0);break;case 6:if(on(i,e),ln(e),l&4){if(e.stateNode===null)throw Error(r(162));l=e.memoizedProps,a=e.stateNode;try{a.nodeValue=l}catch(at){Kt(e,e.return,at)}}break;case 3:if(yc=null,h=$n,$n=pc(i.containerInfo),on(i,e),$n=h,ln(e),l&4&&a!==null&&a.memoizedState.isDehydrated)try{Ga(i.containerInfo)}catch(at){Kt(e,e.return,at)}$f&&($f=!1,My(e));break;case 4:l=$n,$n=pc(e.stateNode.containerInfo),on(i,e),ln(e),$n=l;break;case 12:on(i,e),ln(e);break;case 31:on(i,e),ln(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ec(e,l)));break;case 13:on(i,e),ln(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ic=Ze()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ec(e,l)));break;case 22:h=e.memoizedState!==null;var R=a!==null&&a.memoizedState!==null,z=Yi,F=be;if(Yi=z||h,be=F||R,on(i,e),be=F,Yi=z,ln(e),l&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(a===null||R||Yi||be||kr(e)),a=null,i=e;;){if(i.tag===5||i.tag===26){if(a===null){R=a=i;try{if(d=R.stateNode,h)y=d.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{T=R.stateNode;var K=R.memoizedProps.style,j=K!=null&&K.hasOwnProperty("display")?K.display:null;T.style.display=j==null||typeof j=="boolean"?"":(""+j).trim()}}catch(at){Kt(R,R.return,at)}}}else if(i.tag===6){if(a===null){R=i;try{R.stateNode.nodeValue=h?"":R.memoizedProps}catch(at){Kt(R,R.return,at)}}}else if(i.tag===18){if(a===null){R=i;try{var H=R.stateNode;h?A_(H,!0):A_(R.stateNode,!1)}catch(at){Kt(R,R.return,at)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;a===i&&(a=null),i=i.return}a===i&&(a=null),i.sibling.return=i.return,i=i.sibling}l&4&&(l=e.updateQueue,l!==null&&(a=l.retryQueue,a!==null&&(l.retryQueue=null,ec(e,a))));break;case 19:on(i,e),ln(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,ec(e,l)));break;case 30:break;case 21:break;default:on(i,e),ln(e)}}function ln(e){var i=e.flags;if(i&2){try{for(var a,l=e.return;l!==null;){if(Sy(l)){a=l;break}l=l.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var h=a.stateNode,d=Yf(e);tc(e,d,h);break;case 5:var y=a.stateNode;a.flags&32&&(rn(y,""),a.flags&=-33);var T=Yf(e);tc(e,T,y);break;case 3:case 4:var R=a.stateNode.containerInfo,z=Yf(e);Xf(e,z,R);break;default:throw Error(r(161))}}catch(F){Kt(e,e.return,F)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function My(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;My(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function $i(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)Iy(e,i.alternate,i),i=i.sibling}function kr(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:Ns(4,i,i.return),kr(i);break;case 1:Si(i,i.return);var a=i.stateNode;typeof a.componentWillUnmount=="function"&&Ay(i,i.return,a),kr(i);break;case 27:ml(i.stateNode);case 26:case 5:Si(i,i.return),kr(i);break;case 22:i.memoizedState===null&&kr(i);break;case 30:kr(i);break;default:kr(i)}e=e.sibling}}function Ji(e,i,a){for(a=a&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var l=i.alternate,h=e,d=i,y=d.flags;switch(d.tag){case 0:case 11:case 15:Ji(h,d,a),sl(4,d);break;case 1:if(Ji(h,d,a),l=d,h=l.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(z){Kt(l,l.return,z)}if(l=d,h=l.updateQueue,h!==null){var T=l.stateNode;try{var R=h.shared.hiddenCallbacks;if(R!==null)for(h.shared.hiddenCallbacks=null,h=0;h<R.length;h++)cg(R[h],T)}catch(z){Kt(l,l.return,z)}}a&&y&64&&Ey(d),rl(d,d.return);break;case 27:wy(d);case 26:case 5:Ji(h,d,a),a&&l===null&&y&4&&by(d),rl(d,d.return);break;case 12:Ji(h,d,a);break;case 31:Ji(h,d,a),a&&y&4&&Dy(h,d);break;case 13:Ji(h,d,a),a&&y&4&&xy(h,d);break;case 22:d.memoizedState===null&&Ji(h,d,a),rl(d,d.return);break;case 30:break;default:Ji(h,d,a)}i=i.sibling}}function Jf(e,i){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Go(a))}function Zf(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Go(e))}function Jn(e,i,a,l){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)Vy(e,i,a,l),i=i.sibling}function Vy(e,i,a,l){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Jn(e,i,a,l),h&2048&&sl(9,i);break;case 1:Jn(e,i,a,l);break;case 3:Jn(e,i,a,l),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Go(e)));break;case 12:if(h&2048){Jn(e,i,a,l),e=i.stateNode;try{var d=i.memoizedProps,y=d.id,T=d.onPostCommit;typeof T=="function"&&T(y,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(R){Kt(i,i.return,R)}}else Jn(e,i,a,l);break;case 31:Jn(e,i,a,l);break;case 13:Jn(e,i,a,l);break;case 23:break;case 22:d=i.stateNode,y=i.alternate,i.memoizedState!==null?d._visibility&2?Jn(e,i,a,l):al(e,i):d._visibility&2?Jn(e,i,a,l):(d._visibility|=2,Va(e,i,a,l,(i.subtreeFlags&10256)!==0||!1)),h&2048&&Jf(y,i);break;case 24:Jn(e,i,a,l),h&2048&&Zf(i.alternate,i);break;default:Jn(e,i,a,l)}}function Va(e,i,a,l,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var d=e,y=i,T=a,R=l,z=y.flags;switch(y.tag){case 0:case 11:case 15:Va(d,y,T,R,h),sl(8,y);break;case 23:break;case 22:var F=y.stateNode;y.memoizedState!==null?F._visibility&2?Va(d,y,T,R,h):al(d,y):(F._visibility|=2,Va(d,y,T,R,h)),h&&z&2048&&Jf(y.alternate,y);break;case 24:Va(d,y,T,R,h),h&&z&2048&&Zf(y.alternate,y);break;default:Va(d,y,T,R,h)}i=i.sibling}}function al(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var a=e,l=i,h=l.flags;switch(l.tag){case 22:al(a,l),h&2048&&Jf(l.alternate,l);break;case 24:al(a,l),h&2048&&Zf(l.alternate,l);break;default:al(a,l)}i=i.sibling}}var ol=8192;function ka(e,i,a){if(e.subtreeFlags&ol)for(e=e.child;e!==null;)ky(e,i,a),e=e.sibling}function ky(e,i,a){switch(e.tag){case 26:ka(e,i,a),e.flags&ol&&e.memoizedState!==null&&cS(a,$n,e.memoizedState,e.memoizedProps);break;case 5:ka(e,i,a);break;case 3:case 4:var l=$n;$n=pc(e.stateNode.containerInfo),ka(e,i,a),$n=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=ol,ol=16777216,ka(e,i,a),ol=l):ka(e,i,a));break;default:ka(e,i,a)}}function Uy(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function ll(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];ke=l,Ly(l,e)}Uy(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Py(e),e=e.sibling}function Py(e){switch(e.tag){case 0:case 11:case 15:ll(e),e.flags&2048&&Ns(9,e,e.return);break;case 3:ll(e);break;case 12:ll(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,nc(e)):ll(e);break;default:ll(e)}}function nc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var a=0;a<i.length;a++){var l=i[a];ke=l,Ly(l,e)}Uy(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:Ns(8,i,i.return),nc(i);break;case 22:a=i.stateNode,a._visibility&2&&(a._visibility&=-3,nc(i));break;default:nc(i)}e=e.sibling}}function Ly(e,i){for(;ke!==null;){var a=ke;switch(a.tag){case 0:case 11:case 15:Ns(8,a,i);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var l=a.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Go(a.memoizedState.cache)}if(l=a.child,l!==null)l.return=a,ke=l;else t:for(a=e;ke!==null;){l=ke;var h=l.sibling,d=l.return;if(Cy(l),l===a){ke=null;break t}if(h!==null){h.return=d,ke=h;break t}ke=d}}}var wb={getCacheForType:function(e){var i=je(Te),a=i.data.get(e);return a===void 0&&(a=e(),i.data.set(e,a)),a},cacheSignal:function(){return je(Te).controller.signal}},Rb=typeof WeakMap=="function"?WeakMap:Map,Bt=0,Zt=null,It=null,Nt=0,Qt=0,vn=null,Ds=!1,Ua=!1,Wf=!1,Zi=0,ue=0,xs=0,Ur=0,td=0,Tn=0,Pa=0,ul=null,un=null,ed=!1,ic=0,zy=0,sc=1/0,rc=null,Os=null,De=0,Ms=null,La=null,Wi=0,nd=0,id=null,jy=null,cl=0,sd=null;function En(){return(Bt&2)!==0&&Nt!==0?Nt&-Nt:G.T!==null?cd():au()}function By(){if(Tn===0)if((Nt&536870912)===0||Vt){var e=ur;ur<<=1,(ur&3932160)===0&&(ur=262144),Tn=e}else Tn=536870912;return e=yn.current,e!==null&&(e.flags|=32),Tn}function cn(e,i,a){(e===Zt&&(Qt===2||Qt===9)||e.cancelPendingCommit!==null)&&(za(e,0),Vs(e,Nt,Tn,!1)),cr(e,a),((Bt&2)===0||e!==Zt)&&(e===Zt&&((Bt&2)===0&&(Ur|=a),ue===4&&Vs(e,Nt,Tn,!1)),wi(e))}function qy(e,i,a){if((Bt&6)!==0)throw Error(r(327));var l=!a&&(i&127)===0&&(i&e.expiredLanes)===0||Bn(e,i),h=l?Nb(e,i):ad(e,i,!0),d=l;do{if(h===0){Ua&&!l&&Vs(e,i,0,!1);break}else{if(a=e.current.alternate,d&&!Ib(a)){h=ad(e,i,!1),d=!1;continue}if(h===2){if(d=i,e.errorRecoveryDisabledLanes&d)var y=0;else y=e.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){i=y;t:{var T=e;h=ul;var R=T.current.memoizedState.isDehydrated;if(R&&(za(T,y).flags|=256),y=ad(T,y,!1),y!==2){if(Wf&&!R){T.errorRecoveryDisabledLanes|=d,Ur|=d,h=4;break t}d=un,un=h,d!==null&&(un===null?un=d:un.push.apply(un,d))}h=y}if(d=!1,h!==2)continue}}if(h===1){za(e,0),Vs(e,i,0,!0);break}t:{switch(l=e,d=h,d){case 0:case 1:throw Error(r(345));case 4:if((i&4194048)!==i)break;case 6:Vs(l,i,Tn,!Ds);break t;case 2:un=null;break;case 3:case 5:break;default:throw Error(r(329))}if((i&62914560)===i&&(h=ic+300-Ze(),10<h)){if(Vs(l,i,Tn,!Ds),oi(l,0,!0)!==0)break t;Wi=i,l.timeoutHandle=v_(Hy.bind(null,l,a,un,rc,ed,i,Tn,Ur,Pa,Ds,d,"Throttled",-0,0),h);break t}Hy(l,a,un,rc,ed,i,Tn,Ur,Pa,Ds,d,null,-0,0)}}break}while(!0);wi(e)}function Hy(e,i,a,l,h,d,y,T,R,z,F,K,j,H){if(e.timeoutHandle=-1,K=i.subtreeFlags,K&8192||(K&16785408)===16785408){K={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Fn},ky(i,d,K);var at=(d&62914560)===d?ic-Ze():(d&4194048)===d?zy-Ze():0;if(at=hS(K,at),at!==null){Wi=d,e.cancelPendingCommit=at(Jy.bind(null,e,i,d,a,l,h,y,T,R,F,K,null,j,H)),Vs(e,d,y,!z);return}}Jy(e,i,d,a,l,h,y,T,R)}function Ib(e){for(var i=e;;){var a=i.tag;if((a===0||a===11||a===15)&&i.flags&16384&&(a=i.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var l=0;l<a.length;l++){var h=a[l],d=h.getSnapshot;h=h.value;try{if(!pn(d(),h))return!1}catch{return!1}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Vs(e,i,a,l){i&=~td,i&=~Ur,e.suspendedLanes|=i,e.pingedLanes&=~i,l&&(e.warmLanes|=i),l=e.expirationTimes;for(var h=i;0<h;){var d=31-ce(h),y=1<<d;l[d]=-1,h&=~y}a!==0&&hr(e,a,i)}function ac(){return(Bt&6)===0?(hl(0),!1):!0}function rd(){if(It!==null){if(Qt===0)var e=It.return;else e=It,qi=Ir=null,Ef(e),Na=null,Ko=0,e=It;for(;e!==null;)Ty(e.alternate,e),e=e.return;It=null}}function za(e,i){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Kb(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Wi=0,rd(),Zt=e,It=a=ji(e.current,null),Nt=i,Qt=0,vn=null,Ds=!1,Ua=Bn(e,i),Wf=!1,Pa=Tn=td=Ur=xs=ue=0,un=ul=null,ed=!1,(i&8)!==0&&(i|=i&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=i;0<l;){var h=31-ce(l),d=1<<h;i|=e[h],l&=~d}return Zi=i,Iu(),a}function Fy(e,i){bt=null,G.H=el,i===Ca||i===ku?(i=ag(),Qt=3):i===uf?(i=ag(),Qt=4):Qt=i===Pf?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,vn=i,It===null&&(ue=1,Xu(e,Nn(i,e.current)))}function Gy(){var e=yn.current;return e===null?!0:(Nt&4194048)===Nt?Mn===null:(Nt&62914560)===Nt||(Nt&536870912)!==0?e===Mn:!1}function Qy(){var e=G.H;return G.H=el,e===null?el:e}function Ky(){var e=G.A;return G.A=wb,e}function oc(){ue=4,Ds||(Nt&4194048)!==Nt&&yn.current!==null||(Ua=!0),(xs&134217727)===0&&(Ur&134217727)===0||Zt===null||Vs(Zt,Nt,Tn,!1)}function ad(e,i,a){var l=Bt;Bt|=2;var h=Qy(),d=Ky();(Zt!==e||Nt!==i)&&(rc=null,za(e,i)),i=!1;var y=ue;t:do try{if(Qt!==0&&It!==null){var T=It,R=vn;switch(Qt){case 8:rd(),y=6;break t;case 3:case 2:case 9:case 6:yn.current===null&&(i=!0);var z=Qt;if(Qt=0,vn=null,ja(e,T,R,z),a&&Ua){y=0;break t}break;default:z=Qt,Qt=0,vn=null,ja(e,T,R,z)}}Cb(),y=ue;break}catch(F){Fy(e,F)}while(!0);return i&&e.shellSuspendCounter++,qi=Ir=null,Bt=l,G.H=h,G.A=d,It===null&&(Zt=null,Nt=0,Iu()),y}function Cb(){for(;It!==null;)Yy(It)}function Nb(e,i){var a=Bt;Bt|=2;var l=Qy(),h=Ky();Zt!==e||Nt!==i?(rc=null,sc=Ze()+500,za(e,i)):Ua=Bn(e,i);t:do try{if(Qt!==0&&It!==null){i=It;var d=vn;e:switch(Qt){case 1:Qt=0,vn=null,ja(e,i,d,1);break;case 2:case 9:if(sg(d)){Qt=0,vn=null,Xy(i);break}i=function(){Qt!==2&&Qt!==9||Zt!==e||(Qt=7),wi(e)},d.then(i,i);break t;case 3:Qt=7;break t;case 4:Qt=5;break t;case 7:sg(d)?(Qt=0,vn=null,Xy(i)):(Qt=0,vn=null,ja(e,i,d,7));break;case 5:var y=null;switch(It.tag){case 26:y=It.memoizedState;case 5:case 27:var T=It;if(y?V_(y):T.stateNode.complete){Qt=0,vn=null;var R=T.sibling;if(R!==null)It=R;else{var z=T.return;z!==null?(It=z,lc(z)):It=null}break e}}Qt=0,vn=null,ja(e,i,d,5);break;case 6:Qt=0,vn=null,ja(e,i,d,6);break;case 8:rd(),ue=6;break t;default:throw Error(r(462))}}Db();break}catch(F){Fy(e,F)}while(!0);return qi=Ir=null,G.H=l,G.A=h,Bt=a,It!==null?0:(Zt=null,Nt=0,Iu(),ue)}function Db(){for(;It!==null&&!kh();)Yy(It)}function Yy(e){var i=_y(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,i===null?lc(e):It=i}function Xy(e){var i=e,a=i.alternate;switch(i.tag){case 15:case 0:i=fy(a,i,i.pendingProps,i.type,void 0,Nt);break;case 11:i=fy(a,i,i.pendingProps,i.type.render,i.ref,Nt);break;case 5:Ef(i);default:Ty(a,i),i=It=Kp(i,Zi),i=_y(a,i,Zi)}e.memoizedProps=e.pendingProps,i===null?lc(e):It=i}function ja(e,i,a,l){qi=Ir=null,Ef(i),Na=null,Ko=0;var h=i.return;try{if(_b(e,h,i,a,Nt)){ue=1,Xu(e,Nn(a,e.current)),It=null;return}}catch(d){if(h!==null)throw It=h,d;ue=1,Xu(e,Nn(a,e.current)),It=null;return}i.flags&32768?(Vt||l===1?e=!0:Ua||(Nt&536870912)!==0?e=!1:(Ds=e=!0,(l===2||l===9||l===3||l===6)&&(l=yn.current,l!==null&&l.tag===13&&(l.flags|=16384))),$y(i,e)):lc(i)}function lc(e){var i=e;do{if((i.flags&32768)!==0){$y(i,Ds);return}e=i.return;var a=Eb(i.alternate,i,Zi);if(a!==null){It=a;return}if(i=i.sibling,i!==null){It=i;return}It=i=e}while(i!==null);ue===0&&(ue=5)}function $y(e,i){do{var a=Ab(e.alternate,e);if(a!==null){a.flags&=32767,It=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!i&&(e=e.sibling,e!==null)){It=e;return}It=e=a}while(e!==null);ue=6,It=null}function Jy(e,i,a,l,h,d,y,T,R){e.cancelPendingCommit=null;do uc();while(De!==0);if((Bt&6)!==0)throw Error(r(327));if(i!==null){if(i===e.current)throw Error(r(177));if(d=i.lanes|i.childLanes,d|=Kh,Lh(e,a,d,y,T,R),e===Zt&&(It=Zt=null,Nt=0),La=i,Ms=e,Wi=a,nd=d,id=h,jy=l,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Vb(cs,function(){return n_(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||l){l=G.T,G.T=null,h=et.p,et.p=2,y=Bt,Bt|=4;try{bb(e,i,a)}finally{Bt=y,et.p=h,G.T=l}}De=1,Zy(),Wy(),t_()}}function Zy(){if(De===1){De=0;var e=Ms,i=La,a=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||a){a=G.T,G.T=null;var l=et.p;et.p=2;var h=Bt;Bt|=4;try{Oy(i,e);var d=_d,y=Lp(e.containerInfo),T=d.focusedElem,R=d.selectionRange;if(y!==T&&T&&T.ownerDocument&&Pp(T.ownerDocument.documentElement,T)){if(R!==null&&qh(T)){var z=R.start,F=R.end;if(F===void 0&&(F=z),"selectionStart"in T)T.selectionStart=z,T.selectionEnd=Math.min(F,T.value.length);else{var K=T.ownerDocument||document,j=K&&K.defaultView||window;if(j.getSelection){var H=j.getSelection(),at=T.textContent.length,dt=Math.min(R.start,at),Jt=R.end===void 0?dt:Math.min(R.end,at);!H.extend&&dt>Jt&&(y=Jt,Jt=dt,dt=y);var k=Up(T,dt),D=Up(T,Jt);if(k&&D&&(H.rangeCount!==1||H.anchorNode!==k.node||H.anchorOffset!==k.offset||H.focusNode!==D.node||H.focusOffset!==D.offset)){var L=K.createRange();L.setStart(k.node,k.offset),H.removeAllRanges(),dt>Jt?(H.addRange(L),H.extend(D.node,D.offset)):(L.setEnd(D.node,D.offset),H.addRange(L))}}}}for(K=[],H=T;H=H.parentNode;)H.nodeType===1&&K.push({element:H,left:H.scrollLeft,top:H.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<K.length;T++){var Q=K[T];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Ec=!!yd,_d=yd=null}finally{Bt=h,et.p=l,G.T=a}}e.current=i,De=2}}function Wy(){if(De===2){De=0;var e=Ms,i=La,a=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||a){a=G.T,G.T=null;var l=et.p;et.p=2;var h=Bt;Bt|=4;try{Iy(e,i.alternate,i)}finally{Bt=h,et.p=l,G.T=a}}De=3}}function t_(){if(De===4||De===3){De=0,Wl();var e=Ms,i=La,a=Wi,l=jy;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?De=5:(De=0,La=Ms=null,e_(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Os=null),Ui(a),i=i.stateNode,Pe&&typeof Pe.onCommitFiberRoot=="function")try{Pe.onCommitFiberRoot(jn,i,void 0,(i.current.flags&128)===128)}catch{}if(l!==null){i=G.T,h=et.p,et.p=2,G.T=null;try{for(var d=e.onRecoverableError,y=0;y<l.length;y++){var T=l[y];d(T.value,{componentStack:T.stack})}}finally{G.T=i,et.p=h}}(Wi&3)!==0&&uc(),wi(e),h=e.pendingLanes,(a&261930)!==0&&(h&42)!==0?e===sd?cl++:(cl=0,sd=e):cl=0,hl(0)}}function e_(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Go(i)))}function uc(){return Zy(),Wy(),t_(),n_()}function n_(){if(De!==5)return!1;var e=Ms,i=nd;nd=0;var a=Ui(Wi),l=G.T,h=et.p;try{et.p=32>a?32:a,G.T=null,a=id,id=null;var d=Ms,y=Wi;if(De=0,La=Ms=null,Wi=0,(Bt&6)!==0)throw Error(r(331));var T=Bt;if(Bt|=4,Py(d.current),Vy(d,d.current,y,a),Bt=T,hl(0,!1),Pe&&typeof Pe.onPostCommitFiberRoot=="function")try{Pe.onPostCommitFiberRoot(jn,d)}catch{}return!0}finally{et.p=h,G.T=l,e_(e,i)}}function i_(e,i,a){i=Nn(a,i),i=Uf(e.stateNode,i,2),e=Rs(e,i,2),e!==null&&(cr(e,2),wi(e))}function Kt(e,i,a){if(e.tag===3)i_(e,e,a);else for(;i!==null;){if(i.tag===3){i_(i,e,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Os===null||!Os.has(l))){e=Nn(a,e),a=sy(2),l=Rs(i,a,2),l!==null&&(ry(a,l,i,e),cr(l,2),wi(l));break}}i=i.return}}function od(e,i,a){var l=e.pingCache;if(l===null){l=e.pingCache=new Rb;var h=new Set;l.set(i,h)}else h=l.get(i),h===void 0&&(h=new Set,l.set(i,h));h.has(a)||(Wf=!0,h.add(a),e=xb.bind(null,e,i,a),i.then(e,e))}function xb(e,i,a){var l=e.pingCache;l!==null&&l.delete(i),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Zt===e&&(Nt&a)===a&&(ue===4||ue===3&&(Nt&62914560)===Nt&&300>Ze()-ic?(Bt&2)===0&&za(e,0):td|=a,Pa===Nt&&(Pa=0)),wi(e)}function s_(e,i){i===0&&(i=ru()),e=Sr(e,i),e!==null&&(cr(e,i),wi(e))}function Ob(e){var i=e.memoizedState,a=0;i!==null&&(a=i.retryLane),s_(e,a)}function Mb(e,i){var a=0;switch(e.tag){case 31:case 13:var l=e.stateNode,h=e.memoizedState;h!==null&&(a=h.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(r(314))}l!==null&&l.delete(i),s_(e,a)}function Vb(e,i){return Ne(e,i)}var cc=null,Ba=null,ld=!1,hc=!1,ud=!1,ks=0;function wi(e){e!==Ba&&e.next===null&&(Ba===null?cc=Ba=e:Ba=Ba.next=e),hc=!0,ld||(ld=!0,Ub())}function hl(e,i){if(!ud&&hc){ud=!0;do for(var a=!1,l=cc;l!==null;){if(e!==0){var h=l.pendingLanes;if(h===0)var d=0;else{var y=l.suspendedLanes,T=l.pingedLanes;d=(1<<31-ce(42|e)+1)-1,d&=h&~(y&~T),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(a=!0,l_(l,d))}else d=Nt,d=oi(l,l===Zt?d:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(d&3)===0||Bn(l,d)||(a=!0,l_(l,d));l=l.next}while(a);ud=!1}}function kb(){r_()}function r_(){hc=ld=!1;var e=0;ks!==0&&Qb()&&(e=ks);for(var i=Ze(),a=null,l=cc;l!==null;){var h=l.next,d=a_(l,i);d===0?(l.next=null,a===null?cc=h:a.next=h,h===null&&(Ba=a)):(a=l,(e!==0||(d&3)!==0)&&(hc=!0)),l=h}De!==0&&De!==5||hl(e),ks!==0&&(ks=0)}function a_(e,i){for(var a=e.suspendedLanes,l=e.pingedLanes,h=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var y=31-ce(d),T=1<<y,R=h[y];R===-1?((T&a)===0||(T&l)!==0)&&(h[y]=Ph(T,i)):R<=i&&(e.expiredLanes|=T),d&=~T}if(i=Zt,a=Nt,a=oi(e,e===i?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,a===0||e===i&&(Qt===2||Qt===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&us(l),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Bn(e,a)){if(i=a&-a,i===e.callbackPriority)return i;switch(l!==null&&us(l),Ui(a)){case 2:case 8:a=Eo;break;case 32:a=cs;break;case 268435456:a=tu;break;default:a=cs}return l=o_.bind(null,e),a=Ne(a,l),e.callbackPriority=i,e.callbackNode=a,i}return l!==null&&l!==null&&us(l),e.callbackPriority=2,e.callbackNode=null,2}function o_(e,i){if(De!==0&&De!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(uc()&&e.callbackNode!==a)return null;var l=Nt;return l=oi(e,e===Zt?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(qy(e,l,i),a_(e,Ze()),e.callbackNode!=null&&e.callbackNode===a?o_.bind(null,e):null)}function l_(e,i){if(uc())return null;qy(e,i,!0)}function Ub(){Yb(function(){(Bt&6)!==0?Ne(To,kb):r_()})}function cd(){if(ks===0){var e=Ra;e===0&&(e=ri,ri<<=1,(ri&261888)===0&&(ri=256)),ks=e}return ks}function u_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ha(""+e)}function c_(e,i){var a=i.ownerDocument.createElement("input");return a.name=i.name,a.value=i.value,e.id&&a.setAttribute("form",e.id),i.parentNode.insertBefore(a,i),e=new FormData(e),a.parentNode.removeChild(a),e}function Pb(e,i,a,l,h){if(i==="submit"&&a&&a.stateNode===h){var d=u_((h[Me]||null).action),y=l.submitter;y&&(i=(i=y[Me]||null)?u_(i.formAction):y.getAttribute("formAction"),i!==null&&(d=i,y=null));var T=new _i("action","action",null,l,h);e.push({event:T,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(ks!==0){var R=y?c_(h,y):new FormData(h);Df(a,{pending:!0,data:R,method:h.method,action:d},null,R)}}else typeof d=="function"&&(T.preventDefault(),R=y?c_(h,y):new FormData(h),Df(a,{pending:!0,data:R,method:h.method,action:d},d,R))},currentTarget:h}]})}}for(var hd=0;hd<Qh.length;hd++){var fd=Qh[hd],Lb=fd.toLowerCase(),zb=fd[0].toUpperCase()+fd.slice(1);Xn(Lb,"on"+zb)}Xn(Bp,"onAnimationEnd"),Xn(qp,"onAnimationIteration"),Xn(Hp,"onAnimationStart"),Xn("dblclick","onDoubleClick"),Xn("focusin","onFocus"),Xn("focusout","onBlur"),Xn(eb,"onTransitionRun"),Xn(nb,"onTransitionStart"),Xn(ib,"onTransitionCancel"),Xn(Fp,"onTransitionEnd"),mi("onMouseEnter",["mouseout","mouseover"]),mi("onMouseLeave",["mouseout","mouseover"]),mi("onPointerEnter",["pointerout","pointerover"]),mi("onPointerLeave",["pointerout","pointerover"]),di("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),di("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),di("onBeforeInput",["compositionend","keypress","textInput","paste"]),di("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),di("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),di("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var fl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),jb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(fl));function h_(e,i){i=(i&4)!==0;for(var a=0;a<e.length;a++){var l=e[a],h=l.event;l=l.listeners;t:{var d=void 0;if(i)for(var y=l.length-1;0<=y;y--){var T=l[y],R=T.instance,z=T.currentTarget;if(T=T.listener,R!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=z;try{d(h)}catch(F){Ru(F)}h.currentTarget=null,d=R}else for(y=0;y<l.length;y++){if(T=l[y],R=T.instance,z=T.currentTarget,T=T.listener,R!==d&&h.isPropagationStopped())break t;d=T,h.currentTarget=z;try{d(h)}catch(F){Ru(F)}h.currentTarget=null,d=R}}}}function Ct(e,i){var a=i[aa];a===void 0&&(a=i[aa]=new Set);var l=e+"__bubble";a.has(l)||(f_(i,e,2,!1),a.add(l))}function dd(e,i,a){var l=0;i&&(l|=4),f_(a,e,l,i)}var fc="_reactListening"+Math.random().toString(36).slice(2);function md(e){if(!e[fc]){e[fc]=!0,So.forEach(function(a){a!=="selectionchange"&&(jb.has(a)||dd(a,!1,e),dd(a,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[fc]||(i[fc]=!0,dd("selectionchange",!1,i))}}function f_(e,i,a,l){switch(B_(i)){case 2:var h=mS;break;case 8:h=pS;break;default:h=Nd}a=h.bind(null,i,a,e),h=void 0,!gr||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),l?h!==void 0?e.addEventListener(i,a,{capture:!0,passive:h}):e.addEventListener(i,a,!0):h!==void 0?e.addEventListener(i,a,{passive:h}):e.addEventListener(i,a,!1)}function pd(e,i,a,l,h){var d=l;if((i&1)===0&&(i&2)===0&&l!==null)t:for(;;){if(l===null)return;var y=l.tag;if(y===3||y===4){var T=l.stateNode.containerInfo;if(T===h)break;if(y===4)for(y=l.return;y!==null;){var R=y.tag;if((R===3||R===4)&&y.stateNode.containerInfo===h)return;y=y.return}for(;T!==null;){if(y=hi(T),y===null)return;if(R=y.tag,R===5||R===6||R===26||R===27){l=d=y;continue t}T=T.parentNode}}l=l.return}gs(function(){var z=d,F=wn(a),K=[];t:{var j=Gp.get(e);if(j!==void 0){var H=_i,at=e;switch(e){case"keypress":if(_r(a)===0)break t;case"keydown":case"keyup":H=bu;break;case"focusin":at="focus",H=Tr;break;case"focusout":at="blur",H=Tr;break;case"beforeblur":case"afterblur":H=Tr;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":H=Po;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":H=mu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":H=m;break;case Bp:case qp:case Hp:H=gu;break;case Fp:H=A;break;case"scroll":case"scrollend":H=Uo;break;case"wheel":H=q;break;case"copy":case"cut":case"paste":H=yu;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":H=zi;break;case"toggle":case"beforetoggle":H=At}var dt=(i&4)!==0,Jt=!dt&&(e==="scroll"||e==="scrollend"),k=dt?j!==null?j+"Capture":null:j;dt=[];for(var D=z,L;D!==null;){var Q=D;if(L=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||L===null||k===null||(Q=Gn(D,k),Q!=null&&dt.push(dl(D,Q,L))),Jt)break;D=D.return}0<dt.length&&(j=new H(j,at,null,a,F),K.push({event:j,listeners:dt}))}}if((i&7)===0){t:{if(j=e==="mouseover"||e==="pointerover",H=e==="mouseout"||e==="pointerout",j&&a!==Mo&&(at=a.relatedTarget||a.fromElement)&&(hi(at)||at[ui]))break t;if((H||j)&&(j=F.window===F?F:(j=F.ownerDocument)?j.defaultView||j.parentWindow:window,H?(at=a.relatedTarget||a.toElement,H=z,at=at?hi(at):null,at!==null&&(Jt=u(at),dt=at.tag,at!==Jt||dt!==5&&dt!==27&&dt!==6)&&(at=null)):(H=null,at=z),H!==at)){if(dt=Po,Q="onMouseLeave",k="onMouseEnter",D="mouse",(e==="pointerout"||e==="pointerover")&&(dt=zi,Q="onPointerLeave",k="onPointerEnter",D="pointer"),Jt=H==null?j:dn(H),L=at==null?j:dn(at),j=new dt(Q,D+"leave",H,a,F),j.target=Jt,j.relatedTarget=L,Q=null,hi(F)===z&&(dt=new dt(k,D+"enter",at,a,F),dt.target=L,dt.relatedTarget=Jt,Q=dt),Jt=Q,H&&at)e:{for(dt=Bb,k=H,D=at,L=0,Q=k;Q;Q=dt(Q))L++;Q=0;for(var ut=D;ut;ut=dt(ut))Q++;for(;0<L-Q;)k=dt(k),L--;for(;0<Q-L;)D=dt(D),Q--;for(;L--;){if(k===D||D!==null&&k===D.alternate){dt=k;break e}k=dt(k),D=dt(D)}dt=null}else dt=null;H!==null&&d_(K,j,H,dt,!1),at!==null&&Jt!==null&&d_(K,Jt,at,dt,!0)}}t:{if(j=z?dn(z):window,H=j.nodeName&&j.nodeName.toLowerCase(),H==="select"||H==="input"&&j.type==="file")var Lt=Dp;else if(Cp(j))if(xp)Lt=ZA;else{Lt=$A;var lt=XA}else H=j.nodeName,!H||H.toLowerCase()!=="input"||j.type!=="checkbox"&&j.type!=="radio"?z&&ca(z.elementType)&&(Lt=Dp):Lt=JA;if(Lt&&(Lt=Lt(e,z))){Np(K,Lt,a,F);break t}lt&&lt(e,j,z),e==="focusout"&&z&&j.type==="number"&&z.memoizedProps.value!=null&&Do(j,"number",j.value)}switch(lt=z?dn(z):window,e){case"focusin":(Cp(lt)||lt.contentEditable==="true")&&(_a=lt,Hh=z,qo=null);break;case"focusout":qo=Hh=_a=null;break;case"mousedown":Fh=!0;break;case"contextmenu":case"mouseup":case"dragend":Fh=!1,zp(K,a,F);break;case"selectionchange":if(tb)break;case"keydown":case"keyup":zp(K,a,F)}var wt;if(jt)t:{switch(e){case"compositionstart":var Dt="onCompositionStart";break t;case"compositionend":Dt="onCompositionEnd";break t;case"compositionupdate":Dt="onCompositionUpdate";break t}Dt=void 0}else ya?Er(e,a)&&(Dt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Dt="onCompositionStart");Dt&&(Ei&&a.locale!=="ko"&&(ya||Dt!=="onCompositionStart"?Dt==="onCompositionEnd"&&ya&&(wt=ko()):(yi=F,Vo="value"in yi?yi.value:yi.textContent,ya=!0)),lt=dc(z,Dt),0<lt.length&&(Dt=new Ti(Dt,e,null,a,F),K.push({event:Dt,listeners:lt}),wt?Dt.data=wt:(wt=ga(a),wt!==null&&(Dt.data=wt)))),(wt=In?GA(e,a):QA(e,a))&&(Dt=dc(z,"onBeforeInput"),0<Dt.length&&(lt=new Ti("onBeforeInput","beforeinput",null,a,F),K.push({event:lt,listeners:Dt}),lt.data=wt)),Pb(K,e,z,a,F)}h_(K,i)})}function dl(e,i,a){return{instance:e,listener:i,currentTarget:a}}function dc(e,i){for(var a=i+"Capture",l=[];e!==null;){var h=e,d=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||d===null||(h=Gn(e,a),h!=null&&l.unshift(dl(e,h,d)),h=Gn(e,i),h!=null&&l.push(dl(e,h,d))),e.tag===3)return l;e=e.return}return[]}function Bb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function d_(e,i,a,l,h){for(var d=i._reactName,y=[];a!==null&&a!==l;){var T=a,R=T.alternate,z=T.stateNode;if(T=T.tag,R!==null&&R===l)break;T!==5&&T!==26&&T!==27||z===null||(R=z,h?(z=Gn(a,d),z!=null&&y.unshift(dl(a,z,R))):h||(z=Gn(a,d),z!=null&&y.push(dl(a,z,R)))),a=a.return}y.length!==0&&e.push({event:i,listeners:y})}var qb=/\r\n?/g,Hb=/\u0000|\uFFFD/g;function m_(e){return(typeof e=="string"?e:""+e).replace(qb,`
`).replace(Hb,"")}function p_(e,i){return i=m_(i),m_(e)===i}function $t(e,i,a,l,h,d){switch(a){case"children":typeof l=="string"?i==="body"||i==="textarea"&&l===""||rn(e,l):(typeof l=="number"||typeof l=="bigint")&&i!=="body"&&rn(e,""+l);break;case"className":mn(e,"class",l);break;case"tabIndex":mn(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":mn(e,a,l);break;case"style":Oo(e,l,d);break;case"data":if(i!=="object"){mn(e,"data",l);break}case"src":case"href":if(l===""&&(i!=="a"||a!=="href")){e.removeAttribute(a);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ha(""+l),e.setAttribute(a,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(a==="formAction"?(i!=="input"&&$t(e,i,"name",h.name,h,null),$t(e,i,"formEncType",h.formEncType,h,null),$t(e,i,"formMethod",h.formMethod,h,null),$t(e,i,"formTarget",h.formTarget,h,null)):($t(e,i,"encType",h.encType,h,null),$t(e,i,"method",h.method,h,null),$t(e,i,"target",h.target,h,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(a);break}l=ha(""+l),e.setAttribute(a,l);break;case"onClick":l!=null&&(e.onclick=Fn);break;case"onScroll":l!=null&&Ct("scroll",e);break;case"onScrollEnd":l!=null&&Ct("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}a=ha(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""+l):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":l===!0?e.setAttribute(a,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(a,l):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(a,l):e.removeAttribute(a);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(a):e.setAttribute(a,l);break;case"popover":Ct("beforetoggle",e),Ct("toggle",e),la(e,"popover",l);break;case"xlinkActuate":ve(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":ve(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":ve(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":ve(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":ve(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":ve(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":ve(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":ve(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":ve(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":la(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=du.get(a)||a,la(e,a,l))}}function gd(e,i,a,l,h,d){switch(a){case"style":Oo(e,l,d);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(r(61));if(a=l.__html,a!=null){if(h.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof l=="string"?rn(e,l):(typeof l=="number"||typeof l=="bigint")&&rn(e,""+l);break;case"onScroll":l!=null&&Ct("scroll",e);break;case"onScrollEnd":l!=null&&Ct("scrollend",e);break;case"onClick":l!=null&&(e.onclick=Fn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!wo.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(h=a.endsWith("Capture"),i=a.slice(2,h?a.length-7:void 0),d=e[Me]||null,d=d!=null?d[a]:null,typeof d=="function"&&e.removeEventListener(i,d,h),typeof l=="function")){typeof d!="function"&&d!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(i,l,h);break t}a in e?e[a]=l:l===!0?e.setAttribute(a,""):la(e,a,l)}}}function qe(e,i,a){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ct("error",e),Ct("load",e);var l=!1,h=!1,d;for(d in a)if(a.hasOwnProperty(d)){var y=a[d];if(y!=null)switch(d){case"src":l=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:$t(e,i,d,y,a,null)}}h&&$t(e,i,"srcSet",a.srcSet,a,null),l&&$t(e,i,"src",a.src,a,null);return;case"input":Ct("invalid",e);var T=d=y=h=null,R=null,z=null;for(l in a)if(a.hasOwnProperty(l)){var F=a[l];if(F!=null)switch(l){case"name":h=F;break;case"type":y=F;break;case"checked":R=F;break;case"defaultChecked":z=F;break;case"value":d=F;break;case"defaultValue":T=F;break;case"children":case"dangerouslySetInnerHTML":if(F!=null)throw Error(r(137,i));break;default:$t(e,i,l,F,a,null)}}cu(e,d,T,R,z,y,h,!1);return;case"select":Ct("invalid",e),l=y=d=null;for(h in a)if(a.hasOwnProperty(h)&&(T=a[h],T!=null))switch(h){case"value":d=T;break;case"defaultValue":y=T;break;case"multiple":l=T;default:$t(e,i,h,T,a,null)}i=d,a=y,e.multiple=!!l,i!=null?fs(e,!!l,i,!1):a!=null&&fs(e,!!l,a,!0);return;case"textarea":Ct("invalid",e),d=h=l=null;for(y in a)if(a.hasOwnProperty(y)&&(T=a[y],T!=null))switch(y){case"value":l=T;break;case"defaultValue":h=T;break;case"children":d=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:$t(e,i,y,T,a,null)}ds(e,l,h,d);return;case"option":for(R in a)if(a.hasOwnProperty(R)&&(l=a[R],l!=null))switch(R){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:$t(e,i,R,l,a,null)}return;case"dialog":Ct("beforetoggle",e),Ct("toggle",e),Ct("cancel",e),Ct("close",e);break;case"iframe":case"object":Ct("load",e);break;case"video":case"audio":for(l=0;l<fl.length;l++)Ct(fl[l],e);break;case"image":Ct("error",e),Ct("load",e);break;case"details":Ct("toggle",e);break;case"embed":case"source":case"link":Ct("error",e),Ct("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(z in a)if(a.hasOwnProperty(z)&&(l=a[z],l!=null))switch(z){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,i));default:$t(e,i,z,l,a,null)}return;default:if(ca(i)){for(F in a)a.hasOwnProperty(F)&&(l=a[F],l!==void 0&&gd(e,i,F,l,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(l=a[T],l!=null&&$t(e,i,T,l,a,null))}function Fb(e,i,a,l){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,d=null,y=null,T=null,R=null,z=null,F=null;for(H in a){var K=a[H];if(a.hasOwnProperty(H)&&K!=null)switch(H){case"checked":break;case"value":break;case"defaultValue":R=K;default:l.hasOwnProperty(H)||$t(e,i,H,null,l,K)}}for(var j in l){var H=l[j];if(K=a[j],l.hasOwnProperty(j)&&(H!=null||K!=null))switch(j){case"type":d=H;break;case"name":h=H;break;case"checked":z=H;break;case"defaultChecked":F=H;break;case"value":y=H;break;case"defaultValue":T=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(r(137,i));break;default:H!==K&&$t(e,i,j,H,l,K)}}ua(e,y,T,R,z,F,d,h);return;case"select":H=y=T=j=null;for(d in a)if(R=a[d],a.hasOwnProperty(d)&&R!=null)switch(d){case"value":break;case"multiple":H=R;default:l.hasOwnProperty(d)||$t(e,i,d,null,l,R)}for(h in l)if(d=l[h],R=a[h],l.hasOwnProperty(h)&&(d!=null||R!=null))switch(h){case"value":j=d;break;case"defaultValue":T=d;break;case"multiple":y=d;default:d!==R&&$t(e,i,h,d,l,R)}i=T,a=y,l=H,j!=null?fs(e,!!a,j,!1):!!l!=!!a&&(i!=null?fs(e,!!a,i,!0):fs(e,!!a,a?[]:"",!1));return;case"textarea":H=j=null;for(T in a)if(h=a[T],a.hasOwnProperty(T)&&h!=null&&!l.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:$t(e,i,T,null,l,h)}for(y in l)if(h=l[y],d=a[y],l.hasOwnProperty(y)&&(h!=null||d!=null))switch(y){case"value":j=h;break;case"defaultValue":H=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(r(91));break;default:h!==d&&$t(e,i,y,h,l,d)}hu(e,j,H);return;case"option":for(var at in a)if(j=a[at],a.hasOwnProperty(at)&&j!=null&&!l.hasOwnProperty(at))switch(at){case"selected":e.selected=!1;break;default:$t(e,i,at,null,l,j)}for(R in l)if(j=l[R],H=a[R],l.hasOwnProperty(R)&&j!==H&&(j!=null||H!=null))switch(R){case"selected":e.selected=j&&typeof j!="function"&&typeof j!="symbol";break;default:$t(e,i,R,j,l,H)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var dt in a)j=a[dt],a.hasOwnProperty(dt)&&j!=null&&!l.hasOwnProperty(dt)&&$t(e,i,dt,null,l,j);for(z in l)if(j=l[z],H=a[z],l.hasOwnProperty(z)&&j!==H&&(j!=null||H!=null))switch(z){case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(r(137,i));break;default:$t(e,i,z,j,l,H)}return;default:if(ca(i)){for(var Jt in a)j=a[Jt],a.hasOwnProperty(Jt)&&j!==void 0&&!l.hasOwnProperty(Jt)&&gd(e,i,Jt,void 0,l,j);for(F in l)j=l[F],H=a[F],!l.hasOwnProperty(F)||j===H||j===void 0&&H===void 0||gd(e,i,F,j,l,H);return}}for(var k in a)j=a[k],a.hasOwnProperty(k)&&j!=null&&!l.hasOwnProperty(k)&&$t(e,i,k,null,l,j);for(K in l)j=l[K],H=a[K],!l.hasOwnProperty(K)||j===H||j==null&&H==null||$t(e,i,K,j,l,H)}function g_(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,a=performance.getEntriesByType("resource"),l=0;l<a.length;l++){var h=a[l],d=h.transferSize,y=h.initiatorType,T=h.duration;if(d&&T&&g_(y)){for(y=0,T=h.responseEnd,l+=1;l<a.length;l++){var R=a[l],z=R.startTime;if(z>T)break;var F=R.transferSize,K=R.initiatorType;F&&g_(K)&&(R=R.responseEnd,y+=F*(R<T?1:(T-z)/(R-z)))}if(--l,i+=8*(d+y)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yd=null,_d=null;function mc(e){return e.nodeType===9?e:e.ownerDocument}function y_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function __(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function vd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Td=null;function Qb(){var e=window.event;return e&&e.type==="popstate"?e===Td?!1:(Td=e,!0):(Td=null,!1)}var v_=typeof setTimeout=="function"?setTimeout:void 0,Kb=typeof clearTimeout=="function"?clearTimeout:void 0,T_=typeof Promise=="function"?Promise:void 0,Yb=typeof queueMicrotask=="function"?queueMicrotask:typeof T_<"u"?function(e){return T_.resolve(null).then(e).catch(Xb)}:v_;function Xb(e){setTimeout(function(){throw e})}function Us(e){return e==="head"}function E_(e,i){var a=i,l=0;do{var h=a.nextSibling;if(e.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"||a==="/&"){if(l===0){e.removeChild(h),Ga(i);return}l--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")l++;else if(a==="html")ml(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,ml(a);for(var d=a.firstChild;d;){var y=d.nextSibling,T=d.nodeName;d[ci]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&d.rel.toLowerCase()==="stylesheet"||a.removeChild(d),d=y}}else a==="body"&&ml(e.ownerDocument.body);a=h}while(a);Ga(i)}function A_(e,i){var a=e;e=0;do{var l=a.nextSibling;if(a.nodeType===1?i?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(i?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),l&&l.nodeType===8)if(a=l.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=l}while(a)}function Ed(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var a=i;switch(i=i.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ed(a),oa(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function $b(e,i,a,l){for(;e.nodeType===1;){var h=a;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ci])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var d=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=Vn(e.nextSibling),e===null)break}return null}function Jb(e,i,a){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=Vn(e.nextSibling),e===null))return null;return e}function b_(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Vn(e.nextSibling),e===null))return null;return e}function Ad(e){return e.data==="$?"||e.data==="$~"}function bd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Zb(e,i){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||a.readyState!=="loading")i();else{var l=function(){i(),a.removeEventListener("DOMContentLoaded",l)};a.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Vn(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Sd=null;function S_(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(i===0)return Vn(e.nextSibling);i--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||i++}e=e.nextSibling}return null}function w_(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(i===0)return e;i--}else a!=="/$"&&a!=="/&"||i++}e=e.previousSibling}return null}function R_(e,i,a){switch(i=mc(a),e){case"html":if(e=i.documentElement,!e)throw Error(r(452));return e;case"head":if(e=i.head,!e)throw Error(r(453));return e;case"body":if(e=i.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function ml(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);oa(e)}var kn=new Map,I_=new Set;function pc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ts=et.d;et.d={f:Wb,r:tS,D:eS,C:nS,L:iS,m:sS,X:aS,S:rS,M:oS};function Wb(){var e=ts.f(),i=ac();return e||i}function tS(e){var i=Sn(e);i!==null&&i.tag===5&&i.type==="form"?Fg(i):ts.r(e)}var qa=typeof document>"u"?null:document;function C_(e,i,a){var l=qa;if(l&&typeof i=="string"&&i){var h=sn(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof a=="string"&&(h+='[crossorigin="'+a+'"]'),I_.has(h)||(I_.add(h),e={rel:e,crossOrigin:a,href:i},l.querySelector(h)===null&&(i=l.createElement("link"),qe(i,"link",e),_e(i),l.head.appendChild(i)))}}function eS(e){ts.D(e),C_("dns-prefetch",e,null)}function nS(e,i){ts.C(e,i),C_("preconnect",e,i)}function iS(e,i,a){ts.L(e,i,a);var l=qa;if(l&&e&&i){var h='link[rel="preload"][as="'+sn(i)+'"]';i==="image"&&a&&a.imageSrcSet?(h+='[imagesrcset="'+sn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(h+='[imagesizes="'+sn(a.imageSizes)+'"]')):h+='[href="'+sn(e)+'"]';var d=h;switch(i){case"style":d=Ha(e);break;case"script":d=Fa(e)}kn.has(d)||(e=b({rel:"preload",href:i==="image"&&a&&a.imageSrcSet?void 0:e,as:i},a),kn.set(d,e),l.querySelector(h)!==null||i==="style"&&l.querySelector(pl(d))||i==="script"&&l.querySelector(gl(d))||(i=l.createElement("link"),qe(i,"link",e),_e(i),l.head.appendChild(i)))}}function sS(e,i){ts.m(e,i);var a=qa;if(a&&e){var l=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+sn(l)+'"][href="'+sn(e)+'"]',d=h;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=Fa(e)}if(!kn.has(d)&&(e=b({rel:"modulepreload",href:e},i),kn.set(d,e),a.querySelector(h)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(gl(d)))return}l=a.createElement("link"),qe(l,"link",e),_e(l),a.head.appendChild(l)}}}function rS(e,i,a){ts.S(e,i,a);var l=qa;if(l&&e){var h=fi(l).hoistableStyles,d=Ha(e);i=i||"default";var y=h.get(d);if(!y){var T={loading:0,preload:null};if(y=l.querySelector(pl(d)))T.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":i},a),(a=kn.get(d))&&wd(e,a);var R=y=l.createElement("link");_e(R),qe(R,"link",e),R._p=new Promise(function(z,F){R.onload=z,R.onerror=F}),R.addEventListener("load",function(){T.loading|=1}),R.addEventListener("error",function(){T.loading|=2}),T.loading|=4,gc(y,i,l)}y={type:"stylesheet",instance:y,count:1,state:T},h.set(d,y)}}}function aS(e,i){ts.X(e,i);var a=qa;if(a&&e){var l=fi(a).hoistableScripts,h=Fa(e),d=l.get(h);d||(d=a.querySelector(gl(h)),d||(e=b({src:e,async:!0},i),(i=kn.get(h))&&Rd(e,i),d=a.createElement("script"),_e(d),qe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function oS(e,i){ts.M(e,i);var a=qa;if(a&&e){var l=fi(a).hoistableScripts,h=Fa(e),d=l.get(h);d||(d=a.querySelector(gl(h)),d||(e=b({src:e,async:!0,type:"module"},i),(i=kn.get(h))&&Rd(e,i),d=a.createElement("script"),_e(d),qe(d,"link",e),a.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},l.set(h,d))}}function N_(e,i,a,l){var h=(h=St.current)?pc(h):null;if(!h)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(i=Ha(a.href),a=fi(h).hoistableStyles,l=a.get(i),l||(l={type:"style",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Ha(a.href);var d=fi(h).hoistableStyles,y=d.get(e);if(y||(h=h.ownerDocument||h,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,y),(d=h.querySelector(pl(e)))&&!d._p&&(y.instance=d,y.state.loading=5),kn.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},kn.set(e,a),d||lS(h,e,a,y.state))),i&&l===null)throw Error(r(528,""));return y}if(i&&l!==null)throw Error(r(529,""));return null;case"script":return i=a.async,a=a.src,typeof a=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=Fa(a),a=fi(h).hoistableScripts,l=a.get(i),l||(l={type:"script",instance:null,count:0,state:null},a.set(i,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Ha(e){return'href="'+sn(e)+'"'}function pl(e){return'link[rel="stylesheet"]['+e+"]"}function D_(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function lS(e,i,a,l){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=e.createElement("link"),l.preload=i,i.addEventListener("load",function(){return l.loading|=1}),i.addEventListener("error",function(){return l.loading|=2}),qe(i,"link",a),_e(i),e.head.appendChild(i))}function Fa(e){return'[src="'+sn(e)+'"]'}function gl(e){return"script[async]"+e}function x_(e,i,a){if(i.count++,i.instance===null)switch(i.type){case"style":var l=e.querySelector('style[data-href~="'+sn(a.href)+'"]');if(l)return i.instance=l,_e(l),l;var h=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),_e(l),qe(l,"style",h),gc(l,a.precedence,e),i.instance=l;case"stylesheet":h=Ha(a.href);var d=e.querySelector(pl(h));if(d)return i.state.loading|=4,i.instance=d,_e(d),d;l=D_(a),(h=kn.get(h))&&wd(l,h),d=(e.ownerDocument||e).createElement("link"),_e(d);var y=d;return y._p=new Promise(function(T,R){y.onload=T,y.onerror=R}),qe(d,"link",l),i.state.loading|=4,gc(d,a.precedence,e),i.instance=d;case"script":return d=Fa(a.src),(h=e.querySelector(gl(d)))?(i.instance=h,_e(h),h):(l=a,(h=kn.get(d))&&(l=b({},a),Rd(l,h)),e=e.ownerDocument||e,h=e.createElement("script"),_e(h),qe(h,"link",l),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(r(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(l=i.instance,i.state.loading|=4,gc(l,a.precedence,e));return i.instance}function gc(e,i,a){for(var l=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=l.length?l[l.length-1]:null,d=h,y=0;y<l.length;y++){var T=l[y];if(T.dataset.precedence===i)d=T;else if(d!==h)break}d?d.parentNode.insertBefore(e,d.nextSibling):(i=a.nodeType===9?a.head:a,i.insertBefore(e,i.firstChild))}function wd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Rd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var yc=null;function O_(e,i,a){if(yc===null){var l=new Map,h=yc=new Map;h.set(a,l)}else h=yc,l=h.get(a),l||(l=new Map,h.set(a,l));if(l.has(e))return l;for(l.set(e,null),a=a.getElementsByTagName(e),h=0;h<a.length;h++){var d=a[h];if(!(d[ci]||d[ye]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var y=d.getAttribute(i)||"";y=e+y;var T=l.get(y);T?T.push(d):l.set(y,[d])}}return l}function M_(e,i,a){e=e.ownerDocument||e,e.head.insertBefore(a,i==="title"?e.querySelector("head > title"):null)}function uS(e,i,a){if(a===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;switch(i.rel){case"stylesheet":return e=i.disabled,typeof i.precedence=="string"&&e==null;default:return!0}case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function V_(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function cS(e,i,a,l){if(a.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=Ha(l.href),d=i.querySelector(pl(h));if(d){i=d._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=_c.bind(e),i.then(e,e)),a.state.loading|=4,a.instance=d,_e(d);return}d=i.ownerDocument||i,l=D_(l),(h=kn.get(h))&&wd(l,h),d=d.createElement("link"),_e(d);var y=d;y._p=new Promise(function(T,R){y.onload=T,y.onerror=R}),qe(d,"link",l),a.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,i),(i=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=_c.bind(e),i.addEventListener("load",a),i.addEventListener("error",a))}}var Id=0;function hS(e,i){return e.stylesheets&&e.count===0&&Tc(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var l=setTimeout(function(){if(e.stylesheets&&Tc(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+i);0<e.imgBytes&&Id===0&&(Id=62500*Gb());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Tc(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>Id?50:800)+i);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(h)}}:null}function _c(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Tc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var vc=null;function Tc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,vc=new Map,i.forEach(fS,e),vc=null,_c.call(e))}function fS(e,i){if(!(i.state.loading&4)){var a=vc.get(e);if(a)var l=a.get(null);else{a=new Map,vc.set(e,a);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<h.length;d++){var y=h[d];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(a.set(y.dataset.precedence,y),l=y)}l&&a.set(null,l)}h=i.instance,y=h.getAttribute("data-precedence"),d=a.get(y)||l,d===l&&a.set(null,h),a.set(y,h),this.count++,l=_c.bind(this),h.addEventListener("load",l),h.addEventListener("error",l),d?d.parentNode.insertBefore(h,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var yl={$$typeof:ht,Provider:null,Consumer:null,_currentValue:ft,_currentValue2:ft,_threadCount:0};function dS(e,i,a,l,h,d,y,T,R){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=li(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=li(0),this.hiddenUpdates=li(null),this.identifierPrefix=l,this.onUncaughtError=h,this.onCaughtError=d,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=R,this.incompleteTransitions=new Map}function k_(e,i,a,l,h,d,y,T,R,z,F,K){return e=new dS(e,i,a,y,R,z,F,K,T),i=1,d===!0&&(i|=24),d=gn(3,null,null,i),e.current=d,d.stateNode=e,i=af(),i.refCount++,e.pooledCache=i,i.refCount++,d.memoizedState={element:l,isDehydrated:a,cache:i},cf(d),e}function U_(e){return e?(e=Ea,e):Ea}function P_(e,i,a,l,h,d){h=U_(h),l.context===null?l.context=h:l.pendingContext=h,l=ws(i),l.payload={element:a},d=d===void 0?null:d,d!==null&&(l.callback=d),a=Rs(e,l,i),a!==null&&(cn(a,e,i),Xo(a,e,i))}function L_(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<i?a:i}}function Cd(e,i){L_(e,i),(e=e.alternate)&&L_(e,i)}function z_(e){if(e.tag===13||e.tag===31){var i=Sr(e,67108864);i!==null&&cn(i,e,67108864),Cd(e,67108864)}}function j_(e){if(e.tag===13||e.tag===31){var i=En();i=fr(i);var a=Sr(e,i);a!==null&&cn(a,e,i),Cd(e,i)}}var Ec=!0;function mS(e,i,a,l){var h=G.T;G.T=null;var d=et.p;try{et.p=2,Nd(e,i,a,l)}finally{et.p=d,G.T=h}}function pS(e,i,a,l){var h=G.T;G.T=null;var d=et.p;try{et.p=8,Nd(e,i,a,l)}finally{et.p=d,G.T=h}}function Nd(e,i,a,l){if(Ec){var h=Dd(l);if(h===null)pd(e,i,l,Ac,a),q_(e,l);else if(yS(h,e,i,a,l))l.stopPropagation();else if(q_(e,l),i&4&&-1<gS.indexOf(e)){for(;h!==null;){var d=Sn(h);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var y=ai(d.pendingLanes);if(y!==0){var T=d;for(T.pendingLanes|=2,T.entangledLanes|=2;y;){var R=1<<31-ce(y);T.entanglements[1]|=R,y&=~R}wi(d),(Bt&6)===0&&(sc=Ze()+500,hl(0))}}break;case 31:case 13:T=Sr(d,2),T!==null&&cn(T,d,2),ac(),Cd(d,2)}if(d=Dd(l),d===null&&pd(e,i,l,Ac,a),d===h)break;h=d}h!==null&&l.stopPropagation()}else pd(e,i,l,null,a)}}function Dd(e){return e=wn(e),xd(e)}var Ac=null;function xd(e){if(Ac=null,e=hi(e),e!==null){var i=u(e);if(i===null)e=null;else{var a=i.tag;if(a===13){if(e=f(i),e!==null)return e;e=null}else if(a===31){if(e=p(i),e!==null)return e;e=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Ac=e,null}function B_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(lr()){case To:return 2;case Eo:return 8;case cs:case Uh:return 32;case tu:return 268435456;default:return 32}default:return 32}}var Od=!1,Ps=null,Ls=null,zs=null,_l=new Map,vl=new Map,js=[],gS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function q_(e,i){switch(e){case"focusin":case"focusout":Ps=null;break;case"dragenter":case"dragleave":Ls=null;break;case"mouseover":case"mouseout":zs=null;break;case"pointerover":case"pointerout":_l.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":vl.delete(i.pointerId)}}function Tl(e,i,a,l,h,d){return e===null||e.nativeEvent!==d?(e={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:d,targetContainers:[h]},i!==null&&(i=Sn(i),i!==null&&z_(i)),e):(e.eventSystemFlags|=l,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function yS(e,i,a,l,h){switch(i){case"focusin":return Ps=Tl(Ps,e,i,a,l,h),!0;case"dragenter":return Ls=Tl(Ls,e,i,a,l,h),!0;case"mouseover":return zs=Tl(zs,e,i,a,l,h),!0;case"pointerover":var d=h.pointerId;return _l.set(d,Tl(_l.get(d)||null,e,i,a,l,h)),!0;case"gotpointercapture":return d=h.pointerId,vl.set(d,Tl(vl.get(d)||null,e,i,a,l,h)),!0}return!1}function H_(e){var i=hi(e.target);if(i!==null){var a=u(i);if(a!==null){if(i=a.tag,i===13){if(i=f(a),i!==null){e.blockedOn=i,qn(e.priority,function(){j_(a)});return}}else if(i===31){if(i=p(a),i!==null){e.blockedOn=i,qn(e.priority,function(){j_(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function bc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var a=Dd(e.nativeEvent);if(a===null){a=e.nativeEvent;var l=new a.constructor(a.type,a);Mo=l,a.target.dispatchEvent(l),Mo=null}else return i=Sn(a),i!==null&&z_(i),e.blockedOn=a,!1;i.shift()}return!0}function F_(e,i,a){bc(e)&&a.delete(i)}function _S(){Od=!1,Ps!==null&&bc(Ps)&&(Ps=null),Ls!==null&&bc(Ls)&&(Ls=null),zs!==null&&bc(zs)&&(zs=null),_l.forEach(F_),vl.forEach(F_)}function Sc(e,i){e.blockedOn===i&&(e.blockedOn=null,Od||(Od=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,_S)))}var wc=null;function G_(e){wc!==e&&(wc=e,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){wc===e&&(wc=null);for(var i=0;i<e.length;i+=3){var a=e[i],l=e[i+1],h=e[i+2];if(typeof l!="function"){if(xd(l||a)===null)continue;break}var d=Sn(a);d!==null&&(e.splice(i,3),i-=3,Df(d,{pending:!0,data:h,method:a.method,action:l},l,h))}}))}function Ga(e){function i(R){return Sc(R,e)}Ps!==null&&Sc(Ps,e),Ls!==null&&Sc(Ls,e),zs!==null&&Sc(zs,e),_l.forEach(i),vl.forEach(i);for(var a=0;a<js.length;a++){var l=js[a];l.blockedOn===e&&(l.blockedOn=null)}for(;0<js.length&&(a=js[0],a.blockedOn===null);)H_(a),a.blockedOn===null&&js.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(l=0;l<a.length;l+=3){var h=a[l],d=a[l+1],y=h[Me]||null;if(typeof d=="function")y||G_(a);else if(y){var T=null;if(d&&d.hasAttribute("formAction")){if(h=d,y=d[Me]||null)T=y.formAction;else if(xd(h)!==null)continue}else T=y.action;typeof T=="function"?a[l+1]=T:(a.splice(l,3),l-=3),G_(a)}}}function Q_(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(y){return h=y})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),l||setTimeout(a,20)}function a(){if(!l&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(a,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function Md(e){this._internalRoot=e}Rc.prototype.render=Md.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(r(409));var a=i.current,l=En();P_(a,l,e,i,null,null)},Rc.prototype.unmount=Md.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;P_(e.current,2,null,e,null,null),ac(),i[ui]=null}};function Rc(e){this._internalRoot=e}Rc.prototype.unstable_scheduleHydration=function(e){if(e){var i=au();e={blockedOn:null,target:e,priority:i};for(var a=0;a<js.length&&i!==0&&i<js[a].priority;a++);js.splice(a,0,e),a===0&&H_(e)}};var K_=t.version;if(K_!=="19.2.1")throw Error(r(527,K_,"19.2.1"));et.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=_(i),e=e!==null?E(e):null,e=e===null?null:e.stateNode,e};var vS={bundleType:0,version:"19.2.1",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.1"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ic.isDisabled&&Ic.supportsFiber)try{jn=Ic.inject(vS),Pe=Ic}catch{}}return Al.createRoot=function(e,i){if(!o(e))throw Error(r(299));var a=!1,l="",h=ty,d=ey,y=ny;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(d=i.onCaughtError),i.onRecoverableError!==void 0&&(y=i.onRecoverableError)),i=k_(e,1,!1,null,null,a,l,null,h,d,y,Q_),e[ui]=i.current,md(e),new Md(i)},Al.hydrateRoot=function(e,i,a){if(!o(e))throw Error(r(299));var l=!1,h="",d=ty,y=ey,T=ny,R=null;return a!=null&&(a.unstable_strictMode===!0&&(l=!0),a.identifierPrefix!==void 0&&(h=a.identifierPrefix),a.onUncaughtError!==void 0&&(d=a.onUncaughtError),a.onCaughtError!==void 0&&(y=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(R=a.formState)),i=k_(e,1,!0,i,a??null,l,h,R,d,y,T,Q_),i.context=U_(null),a=i.current,l=En(),l=fr(l),h=ws(l),h.callback=null,Rs(a,h,l),a=l,i.current.lanes=a,cr(i,a),wi(i),e[ui]=i.current,md(e),new Rc(i)},Al.version="19.2.1",Al}var iv;function DS(){if(iv)return Ud.exports;iv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(t){console.error(t)}}return s(),Ud.exports=NS(),Ud.exports}var xS=DS();const OS=K0(xS),MS=()=>{const[s,t]=en.useState(!1),n=[{name:"Home",href:"#"},{name:"Admin",href:"#admin"}];return O.jsxs("header",{className:"bg-white shadow-sm sticky top-0 z-50",children:[O.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:O.jsxs("div",{className:"flex justify-between items-center h-16",children:[O.jsx("div",{className:"flex-shrink-0",children:O.jsx("a",{href:"#",className:"text-2xl font-bold text-blue-600",children:"DoctorInan"})}),O.jsx("div",{className:"hidden md:block",children:O.jsx("div",{className:"ml-10 flex items-baseline space-x-4",children:n.map(r=>O.jsx("a",{href:r.href,className:"text-gray-600 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors",children:r.name},r.name))})}),O.jsx("div",{className:"-mr-2 flex md:hidden",children:O.jsxs("button",{onClick:()=>t(!s),type:"button",className:"bg-blue-50 inline-flex items-center justify-center p-2 rounded-md text-blue-600 hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white","aria-controls":"mobile-menu","aria-expanded":"false",children:[O.jsx("span",{className:"sr-only",children:"Open main menu"}),s?O.jsx("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:O.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})}):O.jsx("svg",{className:"block h-6 w-6",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","aria-hidden":"true",children:O.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})]})})]})}),s&&O.jsx("div",{className:"md:hidden",id:"mobile-menu",children:O.jsx("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:n.map(r=>O.jsx("a",{href:r.href,className:"text-gray-600 hover:bg-blue-500 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors",children:r.name},r.name))})})]})},VS=s=>O.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",...s,children:O.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"})}),kS=()=>O.jsx("section",{className:"relative bg-gradient-to-br from-blue-800 via-blue-700 to-cyan-600 pb-0",children:O.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 md:pt-20",children:O.jsxs("div",{className:"grid md:grid-cols-2 gap-8 items-center",children:[O.jsxs("div",{className:"text-white text-center md:text-left font-sans",children:[O.jsx("h1",{className:"text-4xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-lg",children:"Get Online Medicine Doctor Consultation Dhaka"}),O.jsx("p",{className:"mt-4 text-lg md:text-xl text-white opacity-95 max-w-lg mx-auto md:mx-0",children:"From Dhaka, Cumilla or anywhere in Bangladesh, get urgent online medical advice"}),O.jsx("div",{className:"mt-8 flex justify-center md:justify-start",children:O.jsxs("a",{href:"https://wa.me/8801628617785",target:"_blank",rel:"noopener noreferrer",className:"flex items-center justify-center bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-bold px-12 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:from-cyan-500 hover:to-blue-600",children:[O.jsx(VS,{className:"w-5 h-5 mr-2"}),"Call For Urgent Advice"]})})]}),O.jsxs("div",{className:"relative h-full min-h-[200px] md:min-h-[400px]",children:[O.jsx("div",{className:"hidden md:block absolute -bottom-16 -right-10 bg-blue-500 w-80 h-80 rounded-full opacity-30 animate-pulse"}),O.jsx("div",{className:"hidden md:block absolute top-0 -left-10 bg-blue-500 w-60 h-60 rounded-full opacity-30 animate-pulse",style:{animationDelay:"1s"}}),O.jsxs("div",{className:"relative z-10 h-full flex flex-col md:flex-row items-center md:items-end justify-center md:justify-start overflow-visible md:max-w-fit",children:[O.jsx("img",{src:"/assets/doctorinanprofile.png",alt:"Smiling Doctor",className:"w-full md:w-auto h-auto max-h-[400px] md:max-h-[360px] object-contain object-center md:object-left drop-shadow-2xl transform hover:scale-105 transition-transform duration-500 hover:rotate-1",style:{filter:"drop-shadow(0 25px 25px rgba(0, 0, 0, 0.3))"}}),O.jsx("div",{className:"md:absolute md:left-full md:ml-3 md:top-1/2 md:-translate-y-1/2 relative mt-0 md:mt-0 text-center md:text-left text-white text-base md:text-sm font-extrabold whitespace-nowrap rounded-full px-5 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 shadow-2xl hover:shadow-3xl hover:from-blue-700 hover:to-cyan-600 transition-all overflow-visible z-30 md:max-w-none",children:"Dr. Muniful Islam Inan, MBBS"})]}),O.jsx("div",{className:"hidden md:block absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20 blur-xl"})]})]})})}),US=()=>O.jsx("section",{className:"py-16 px-4 sm:px-6 lg:px-8 bg-white",children:O.jsxs("div",{className:"max-w-4xl mx-auto",children:[O.jsxs("div",{className:"text-center mb-12",children:[O.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900",children:"My Mission: To Heal Through Advice"}),O.jsx("p",{className:"mt-4 text-lg text-gray-600",children:"A personal note from Dr. Muniful Islam Inan, MBBS"})]}),O.jsx("div",{className:"bg-gradient-to-r from-blue-50 to-cyan-50 rounded-3xl p-8 md:p-12 shadow-xl",children:O.jsxs("blockquote",{className:"text-gray-800 text-lg md:text-xl leading-relaxed",children:[O.jsx("p",{className:"mb-6",children:'"I have always dreamed of contributing by advising people so they get cured from painful medical situations. After completing MBBS from Eastern Medical College, I want to help the ill people of my country to get quality medical advice.'}),O.jsx("p",{className:"mb-6",children:"People often don't find answers to a disease or illness, and they don't know what lifestyle adjustments are needed to get a better life. Often, people hesitate to ask these questions to doctors."}),O.jsx("p",{children:`That's why I have initiated this medical advice online program—so I can genuinely answer your questions and create a plan for you to get a better life."`})]})})]})}),PS=()=>{};var sv={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y0=function(s){const t=[];let n=0;for(let r=0;r<s.length;r++){let o=s.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&r+1<s.length&&(s.charCodeAt(r+1)&64512)===56320?(o=65536+((o&1023)<<10)+(s.charCodeAt(++r)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},LS=function(s){const t=[];let n=0,r=0;for(;n<s.length;){const o=s[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const u=s[n++];t[r++]=String.fromCharCode((o&31)<<6|u&63)}else if(o>239&&o<365){const u=s[n++],f=s[n++],p=s[n++],g=((o&7)<<18|(u&63)<<12|(f&63)<<6|p&63)-65536;t[r++]=String.fromCharCode(55296+(g>>10)),t[r++]=String.fromCharCode(56320+(g&1023))}else{const u=s[n++],f=s[n++];t[r++]=String.fromCharCode((o&15)<<12|(u&63)<<6|f&63)}}return t.join("")},X0={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,t){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let o=0;o<s.length;o+=3){const u=s[o],f=o+1<s.length,p=f?s[o+1]:0,g=o+2<s.length,_=g?s[o+2]:0,E=u>>2,b=(u&3)<<4|p>>4;let N=(p&15)<<2|_>>6,B=_&63;g||(B=64,f||(N=64)),r.push(n[E],n[b],n[N],n[B])}return r.join("")},encodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(s):this.encodeByteArray(Y0(s),t)},decodeString(s,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(s):LS(this.decodeStringToByteArray(s,t))},decodeStringToByteArray(s,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let o=0;o<s.length;){const u=n[s.charAt(o++)],p=o<s.length?n[s.charAt(o)]:0;++o;const _=o<s.length?n[s.charAt(o)]:64;++o;const b=o<s.length?n[s.charAt(o)]:64;if(++o,u==null||p==null||_==null||b==null)throw new zS;const N=u<<2|p>>4;if(r.push(N),_!==64){const B=p<<4&240|_>>2;if(r.push(B),b!==64){const Z=_<<6&192|b;r.push(Z)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class zS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jS=function(s){const t=Y0(s);return X0.encodeByteArray(t,!0)},Gc=function(s){return jS(s).replace(/\./g,"")},$0=function(s){try{return X0.decodeString(s,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=()=>BS().__FIREBASE_DEFAULTS__,HS=()=>{if(typeof process>"u"||typeof sv>"u")return;const s=sv.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},FS=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=s&&$0(s[1]);return t&&JSON.parse(t)},mh=()=>{try{return PS()||qS()||HS()||FS()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},J0=s=>{var t,n;return(n=(t=mh())==null?void 0:t.emulatorHosts)==null?void 0:n[s]},Z0=s=>{const t=J0(s);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},W0=()=>{var s;return(s=mh())==null?void 0:s.config},tT=s=>{var t;return(t=mh())==null?void 0:t[`_${s}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yr(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Nm(s){return(await fetch(s,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eT(s,t){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",o=s.iat||0,u=s.sub||s.user_id;if(!u)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const f={iss:`https://securetoken.google.com/${r}`,aud:r,iat:o,exp:o+3600,auth_time:o,sub:u,user_id:u,firebase:{sign_in_provider:"custom",identities:{}},...s};return[Gc(JSON.stringify(n)),Gc(JSON.stringify(f)),""].join(".")}const Il={};function QS(){const s={prod:[],emulator:[]};for(const t of Object.keys(Il))Il[t]?s.emulator.push(t):s.prod.push(t);return s}function KS(s){let t=document.getElementById(s),n=!1;return t||(t=document.createElement("div"),t.setAttribute("id",s),n=!0),{created:n,element:t}}let rv=!1;function Dm(s,t){if(typeof window>"u"||typeof document>"u"||!Yr(window.location.host)||Il[s]===t||Il[s]||rv)return;Il[s]=t;function n(N){return`__firebase__banner__${N}`}const r="__firebase__banner",u=QS().prod.length>0;function f(){const N=document.getElementById(r);N&&N.remove()}function p(N){N.style.display="flex",N.style.background="#7faaf0",N.style.position="fixed",N.style.bottom="5px",N.style.left="5px",N.style.padding=".5em",N.style.borderRadius="5px",N.style.alignItems="center"}function g(N,B){N.setAttribute("width","24"),N.setAttribute("id",B),N.setAttribute("height","24"),N.setAttribute("viewBox","0 0 24 24"),N.setAttribute("fill","none"),N.style.marginLeft="-6px"}function _(){const N=document.createElement("span");return N.style.cursor="pointer",N.style.marginLeft="16px",N.style.fontSize="24px",N.innerHTML=" &times;",N.onclick=()=>{rv=!0,f()},N}function E(N,B){N.setAttribute("id",B),N.innerText="Learn more",N.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",N.setAttribute("target","__blank"),N.style.paddingLeft="5px",N.style.textDecoration="underline"}function b(){const N=KS(r),B=n("text"),Z=document.getElementById(B)||document.createElement("span"),W=n("learnmore"),J=document.getElementById(W)||document.createElement("a"),ot=n("preprendIcon"),gt=document.getElementById(ot)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(N.created){const ht=N.element;p(ht),E(J,W);const Et=_();g(gt,ot),ht.append(gt,Z,J,Et),document.body.appendChild(ht)}u?(Z.innerText="Preview backend disconnected.",gt.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(gt.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,Z.innerText="Preview backend running in this workspace."),Z.setAttribute("id",B)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",b):b()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function YS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function XS(){var t;const s=(t=mh())==null?void 0:t.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $S(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function nT(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function JS(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ZS(){const s=Je();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function WS(){return!XS()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function iT(){try{return typeof indexedDB=="object"}catch{return!1}}function sT(){return new Promise((s,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),s(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var u;t(((u=o.error)==null?void 0:u.message)||"")}}catch(n){t(n)}})}function tw(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ew="FirebaseError";class zn extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ew,Object.setPrototypeOf(this,zn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xr.prototype.create)}}class Xr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},o=`${this.service}/${t}`,u=this.errors[t],f=u?nw(u,r):"Error",p=`${this.serviceName}: ${f} (${o}).`;return new zn(o,p,r)}}function nw(s,t){return s.replace(iw,(n,r)=>{const o=t[r];return o!=null?String(o):`<${r}?>`})}const iw=/\{\$([^}]+)}/g;function sw(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}function Zs(s,t){if(s===t)return!0;const n=Object.keys(s),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const u=s[o],f=t[o];if(av(u)&&av(f)){if(!Zs(u,f))return!1}else if(u!==f)return!1}for(const o of r)if(!n.includes(o))return!1;return!0}function av(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fl(s){const t=[];for(const[n,r]of Object.entries(s))Array.isArray(r)?r.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function rw(s,t){const n=new aw(s,t);return n.subscribe.bind(n)}class aw{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let o;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ow(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:r},o.next===void 0&&(o.next=jd),o.error===void 0&&(o.error=jd),o.complete===void 0&&(o.complete=jd);const u=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),u}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ow(s,t){if(typeof s!="object"||s===null)return!1;for(const n of t)if(n in s&&typeof s[n]=="function")return!0;return!1}function jd(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lw=1e3,uw=2,cw=14400*1e3,hw=.5;function ov(s,t=lw,n=uw){const r=t*Math.pow(n,s),o=Math.round(hw*r*(Math.random()-.5)*2);return Math.min(cw,r+o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ge(s){return s&&s._delegate?s._delegate:s}class Ln{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new GS;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&r.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(r)return null;throw o}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(mw(t))try{this.getOrInitializeService({instanceIdentifier:Pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const u=this.getOrInitializeService({instanceIdentifier:o});r.resolve(u)}catch{}}}}clearInstance(t=Pr){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=Pr){return this.instances.has(t)}getOptions(t=Pr){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[u,f]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(u);r===p&&f.resolve(o)}return o}onInit(t,n){const r=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(r)??new Set;o.add(t),this.onInitCallbacks.set(r,o);const u=this.instances.get(r);return u&&t(u,r),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const o of r)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:dw(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=Pr){return this.component?this.component.multipleInstances?t:Pr:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dw(s){return s===Pr?void 0:s}function mw(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pw{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new fw(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xt;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(xt||(xt={}));const gw={debug:xt.DEBUG,verbose:xt.VERBOSE,info:xt.INFO,warn:xt.WARN,error:xt.ERROR,silent:xt.SILENT},yw=xt.INFO,_w={[xt.DEBUG]:"log",[xt.VERBOSE]:"log",[xt.INFO]:"info",[xt.WARN]:"warn",[xt.ERROR]:"error"},vw=(s,t,...n)=>{if(t<s.logLevel)return;const r=new Date().toISOString(),o=_w[t];if(o)console[o](`[${r}]  ${s.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class ph{constructor(t){this.name=t,this._logLevel=yw,this._logHandler=vw,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in xt))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?gw[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,xt.DEBUG,...t),this._logHandler(this,xt.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,xt.VERBOSE,...t),this._logHandler(this,xt.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,xt.INFO,...t),this._logHandler(this,xt.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,xt.WARN,...t),this._logHandler(this,xt.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,xt.ERROR,...t),this._logHandler(this,xt.ERROR,...t)}}const Tw=(s,t)=>t.some(n=>s instanceof n);let lv,uv;function Ew(){return lv||(lv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Aw(){return uv||(uv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const rT=new WeakMap,nm=new WeakMap,aT=new WeakMap,Bd=new WeakMap,xm=new WeakMap;function bw(s){const t=new Promise((n,r)=>{const o=()=>{s.removeEventListener("success",u),s.removeEventListener("error",f)},u=()=>{n(Ys(s.result)),o()},f=()=>{r(s.error),o()};s.addEventListener("success",u),s.addEventListener("error",f)});return t.then(n=>{n instanceof IDBCursor&&rT.set(n,s)}).catch(()=>{}),xm.set(t,s),t}function Sw(s){if(nm.has(s))return;const t=new Promise((n,r)=>{const o=()=>{s.removeEventListener("complete",u),s.removeEventListener("error",f),s.removeEventListener("abort",f)},u=()=>{n(),o()},f=()=>{r(s.error||new DOMException("AbortError","AbortError")),o()};s.addEventListener("complete",u),s.addEventListener("error",f),s.addEventListener("abort",f)});nm.set(s,t)}let im={get(s,t,n){if(s instanceof IDBTransaction){if(t==="done")return nm.get(s);if(t==="objectStoreNames")return s.objectStoreNames||aT.get(s);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ys(s[t])},set(s,t,n){return s[t]=n,!0},has(s,t){return s instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in s}};function ww(s){im=s(im)}function Rw(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=s.call(qd(this),t,...n);return aT.set(r,t.sort?t.sort():[t]),Ys(r)}:Aw().includes(s)?function(...t){return s.apply(qd(this),t),Ys(rT.get(this))}:function(...t){return Ys(s.apply(qd(this),t))}}function Iw(s){return typeof s=="function"?Rw(s):(s instanceof IDBTransaction&&Sw(s),Tw(s,Ew())?new Proxy(s,im):s)}function Ys(s){if(s instanceof IDBRequest)return bw(s);if(Bd.has(s))return Bd.get(s);const t=Iw(s);return t!==s&&(Bd.set(s,t),xm.set(t,s)),t}const qd=s=>xm.get(s);function oT(s,t,{blocked:n,upgrade:r,blocking:o,terminated:u}={}){const f=indexedDB.open(s,t),p=Ys(f);return r&&f.addEventListener("upgradeneeded",g=>{r(Ys(f.result),g.oldVersion,g.newVersion,Ys(f.transaction),g)}),n&&f.addEventListener("blocked",g=>n(g.oldVersion,g.newVersion,g)),p.then(g=>{u&&g.addEventListener("close",()=>u()),o&&g.addEventListener("versionchange",_=>o(_.oldVersion,_.newVersion,_))}).catch(()=>{}),p}const Cw=["get","getKey","getAll","getAllKeys","count"],Nw=["put","add","delete","clear"],Hd=new Map;function cv(s,t){if(!(s instanceof IDBDatabase&&!(t in s)&&typeof t=="string"))return;if(Hd.get(t))return Hd.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=Nw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(o||Cw.includes(n)))return;const u=async function(f,...p){const g=this.transaction(f,o?"readwrite":"readonly");let _=g.store;return r&&(_=_.index(p.shift())),(await Promise.all([_[n](...p),o&&g.done]))[0]};return Hd.set(t,u),u}ww(s=>({...s,get:(t,n,r)=>cv(t,n)||s.get(t,n,r),has:(t,n)=>!!cv(t,n)||s.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dw{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xw(s){const t=s.getComponent();return(t==null?void 0:t.type)==="VERSION"}const sm="@firebase/app",hv="0.14.6";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ss=new ph("@firebase/app"),Ow="@firebase/app-compat",Mw="@firebase/analytics-compat",Vw="@firebase/analytics",kw="@firebase/app-check-compat",Uw="@firebase/app-check",Pw="@firebase/auth",Lw="@firebase/auth-compat",zw="@firebase/database",jw="@firebase/data-connect",Bw="@firebase/database-compat",qw="@firebase/functions",Hw="@firebase/functions-compat",Fw="@firebase/installations",Gw="@firebase/installations-compat",Qw="@firebase/messaging",Kw="@firebase/messaging-compat",Yw="@firebase/performance",Xw="@firebase/performance-compat",$w="@firebase/remote-config",Jw="@firebase/remote-config-compat",Zw="@firebase/storage",Ww="@firebase/storage-compat",t1="@firebase/firestore",e1="@firebase/ai",n1="@firebase/firestore-compat",i1="firebase",s1="12.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm="[DEFAULT]",r1={[sm]:"fire-core",[Ow]:"fire-core-compat",[Vw]:"fire-analytics",[Mw]:"fire-analytics-compat",[Uw]:"fire-app-check",[kw]:"fire-app-check-compat",[Pw]:"fire-auth",[Lw]:"fire-auth-compat",[zw]:"fire-rtdb",[jw]:"fire-data-connect",[Bw]:"fire-rtdb-compat",[qw]:"fire-fn",[Hw]:"fire-fn-compat",[Fw]:"fire-iid",[Gw]:"fire-iid-compat",[Qw]:"fire-fcm",[Kw]:"fire-fcm-compat",[Yw]:"fire-perf",[Xw]:"fire-perf-compat",[$w]:"fire-rc",[Jw]:"fire-rc-compat",[Zw]:"fire-gcs",[Ww]:"fire-gcs-compat",[t1]:"fire-fst",[n1]:"fire-fst-compat",[e1]:"fire-vertex","fire-js":"fire-js",[i1]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qc=new Map,a1=new Map,am=new Map;function fv(s,t){try{s.container.addComponent(t)}catch(n){ss.debug(`Component ${t.name} failed to register with FirebaseApp ${s.name}`,n)}}function ni(s){const t=s.name;if(am.has(t))return ss.debug(`There were multiple attempts to register component ${t}.`),!1;am.set(t,s);for(const n of Qc.values())fv(n,s);for(const n of a1.values())fv(n,s);return!0}function rr(s,t){const n=s.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),s.container.getProvider(t)}function Zn(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o1={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Xs=new Xr("app","Firebase",o1);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l1{constructor(t,n,r){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ln("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Xs.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r=s1;function lT(s,t={}){let n=s;typeof t!="object"&&(t={name:t});const r={name:rm,automaticDataCollectionEnabled:!0,...t},o=r.name;if(typeof o!="string"||!o)throw Xs.create("bad-app-name",{appName:String(o)});if(n||(n=W0()),!n)throw Xs.create("no-options");const u=Qc.get(o);if(u){if(Zs(n,u.options)&&Zs(r,u.config))return u;throw Xs.create("duplicate-app",{appName:o})}const f=new pw(o);for(const g of am.values())f.addComponent(g);const p=new l1(n,r,f);return Qc.set(o,p),p}function gh(s=rm){const t=Qc.get(s);if(!t&&s===rm&&W0())return lT();if(!t)throw Xs.create("no-app",{appName:s});return t}function fn(s,t,n){let r=r1[s]??s;n&&(r+=`-${n}`);const o=r.match(/\s|\//),u=t.match(/\s|\//);if(o||u){const f=[`Unable to register library "${r}" with version "${t}":`];o&&f.push(`library name "${r}" contains illegal characters (whitespace or "/")`),o&&u&&f.push("and"),u&&f.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ss.warn(f.join(" "));return}ni(new Ln(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="firebase-heartbeat-database",c1=1,Vl="firebase-heartbeat-store";let Fd=null;function uT(){return Fd||(Fd=oT(u1,c1,{upgrade:(s,t)=>{switch(t){case 0:try{s.createObjectStore(Vl)}catch(n){console.warn(n)}}}}).catch(s=>{throw Xs.create("idb-open",{originalErrorMessage:s.message})})),Fd}async function h1(s){try{const n=(await uT()).transaction(Vl),r=await n.objectStore(Vl).get(cT(s));return await n.done,r}catch(t){if(t instanceof zn)ss.warn(t.message);else{const n=Xs.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ss.warn(n.message)}}}async function dv(s,t){try{const r=(await uT()).transaction(Vl,"readwrite");await r.objectStore(Vl).put(t,cT(s)),await r.done}catch(n){if(n instanceof zn)ss.warn(n.message);else{const r=Xs.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ss.warn(r.message)}}}function cT(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f1=1024,d1=30;class m1{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new g1(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),u=mv();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===u||this._heartbeatsCache.heartbeats.some(f=>f.date===u))return;if(this._heartbeatsCache.heartbeats.push({date:u,agent:o}),this._heartbeatsCache.heartbeats.length>d1){const f=y1(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(f,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){ss.warn(r)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=mv(),{heartbeatsToSend:r,unsentEntries:o}=p1(this._heartbeatsCache.heartbeats),u=Gc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),u}catch(n){return ss.warn(n),""}}}function mv(){return new Date().toISOString().substring(0,10)}function p1(s,t=f1){const n=[];let r=s.slice();for(const o of s){const u=n.find(f=>f.agent===o.agent);if(u){if(u.dates.push(o.date),pv(n)>t){u.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),pv(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class g1{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iT()?sT().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await h1(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return dv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const r=await this.read();return dv(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...t.heartbeats]})}else return}}function pv(s){return Gc(JSON.stringify({version:2,heartbeats:s})).length}function y1(s){if(s.length===0)return-1;let t=0,n=s[0].date;for(let r=1;r<s.length;r++)s[r].date<n&&(n=s[r].date,t=r);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1(s){ni(new Ln("platform-logger",t=>new Dw(t),"PRIVATE")),ni(new Ln("heartbeat",t=>new m1(t),"PRIVATE")),fn(sm,hv,s),fn(sm,hv,"esm2020"),fn("fire-js","")}_1("");var v1="firebase",T1="12.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fn(v1,T1,"app");function hT(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const E1=hT,fT=new Xr("auth","Firebase",hT());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc=new ph("@firebase/auth");function A1(s,...t){Kc.logLevel<=xt.WARN&&Kc.warn(`Auth (${$r}): ${s}`,...t)}function kc(s,...t){Kc.logLevel<=xt.ERROR&&Kc.error(`Auth (${$r}): ${s}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(s,...t){throw Om(s,...t)}function Ii(s,...t){return Om(s,...t)}function dT(s,t,n){const r={...E1(),[t]:n};return new Xr("auth","Firebase",r).create(t,{appName:s.name})}function jr(s){return dT(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Om(s,...t){if(typeof s!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=s.name),s._errorFactory.create(n,...r)}return fT.create(s,...t)}function pt(s,t,...n){if(!s)throw Om(t,...n)}function es(s){const t="INTERNAL ASSERTION FAILED: "+s;throw kc(t),new Error(t)}function as(s,t){s||es(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function om(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.href)||""}function b1(){return gv()==="http:"||gv()==="https:"}function gv(){var s;return typeof self<"u"&&((s=self.location)==null?void 0:s.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S1(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(b1()||nT()||"connection"in navigator)?navigator.onLine:!0}function w1(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(t,n){this.shortDelay=t,this.longDelay=n,as(n>t,"Short delay should be less than long delay!"),this.isMobile=YS()||JS()}get(){return S1()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mm(s,t){as(s.emulator,"Emulator should always be set here");const{url:n}=s.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mT{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;es("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;es("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;es("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R1={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I1=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],C1=new Gl(3e4,6e4);function Vm(s,t){return s.tenantId&&!t.tenantId?{...t,tenantId:s.tenantId}:t}async function co(s,t,n,r,o={}){return pT(s,o,async()=>{let u={},f={};r&&(t==="GET"?f=r:u={body:JSON.stringify(r)});const p=Fl({key:s.config.apiKey,...f}).slice(1),g=await s._getAdditionalHeaders();g["Content-Type"]="application/json",s.languageCode&&(g["X-Firebase-Locale"]=s.languageCode);const _={method:t,headers:g,...u};return $S()||(_.referrerPolicy="no-referrer"),s.emulatorConfig&&Yr(s.emulatorConfig.host)&&(_.credentials="include"),mT.fetch()(await gT(s,s.config.apiHost,n,p),_)})}async function pT(s,t,n){s._canInitEmulator=!1;const r={...R1,...t};try{const o=new D1(s),u=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const f=await u.json();if("needConfirmation"in f)throw Cc(s,"account-exists-with-different-credential",f);if(u.ok&&!("errorMessage"in f))return f;{const p=u.ok?f.errorMessage:f.error.message,[g,_]=p.split(" : ");if(g==="FEDERATED_USER_ID_ALREADY_LINKED")throw Cc(s,"credential-already-in-use",f);if(g==="EMAIL_EXISTS")throw Cc(s,"email-already-in-use",f);if(g==="USER_DISABLED")throw Cc(s,"user-disabled",f);const E=r[g]||g.toLowerCase().replace(/[_\s]+/g,"-");if(_)throw dT(s,E,_);rs(s,E)}}catch(o){if(o instanceof zn)throw o;rs(s,"network-request-failed",{message:String(o)})}}async function N1(s,t,n,r,o={}){const u=await co(s,t,n,r,o);return"mfaPendingCredential"in u&&rs(s,"multi-factor-auth-required",{_serverResponse:u}),u}async function gT(s,t,n,r){const o=`${t}${n}?${r}`,u=s,f=u.config.emulator?Mm(s.config,o):`${s.config.apiScheme}://${o}`;return I1.includes(n)&&(await u._persistenceManagerAvailable,u._getPersistenceType()==="COOKIE")?u._getPersistence()._getFinalTarget(f).toString():f}class D1{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ii(this.auth,"network-request-failed")),C1.get())})}}function Cc(s,t,n){const r={appName:s.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const o=Ii(s,t,r);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x1(s,t){return co(s,"POST","/v1/accounts:delete",t)}async function Yc(s,t){return co(s,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cl(s){if(s)try{const t=new Date(Number(s));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function O1(s,t=!1){const n=Ge(s),r=await n.getIdToken(t),o=km(r);pt(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const u=typeof o.firebase=="object"?o.firebase:void 0,f=u==null?void 0:u.sign_in_provider;return{claims:o,token:r,authTime:Cl(Gd(o.auth_time)),issuedAtTime:Cl(Gd(o.iat)),expirationTime:Cl(Gd(o.exp)),signInProvider:f||null,signInSecondFactor:(u==null?void 0:u.sign_in_second_factor)||null}}function Gd(s){return Number(s)*1e3}function km(s){const[t,n,r]=s.split(".");if(t===void 0||n===void 0||r===void 0)return kc("JWT malformed, contained fewer than 3 sections"),null;try{const o=$0(n);return o?JSON.parse(o):(kc("Failed to decode base64 JWT payload"),null)}catch(o){return kc("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function yv(s){const t=km(s);return pt(t,"internal-error"),pt(typeof t.exp<"u","internal-error"),pt(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kl(s,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof zn&&M1(r)&&s.auth.currentUser===s&&await s.auth.signOut(),r}}function M1({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V1{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Cl(this.lastLoginAt),this.creationTime=Cl(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xc(s){var b;const t=s.auth,n=await s.getIdToken(),r=await kl(s,Yc(t,{idToken:n}));pt(r==null?void 0:r.users.length,t,"internal-error");const o=r.users[0];s._notifyReloadListener(o);const u=(b=o.providerUserInfo)!=null&&b.length?yT(o.providerUserInfo):[],f=U1(s.providerData,u),p=s.isAnonymous,g=!(s.email&&o.passwordHash)&&!(f!=null&&f.length),_=p?g:!1,E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:f,metadata:new lm(o.createdAt,o.lastLoginAt),isAnonymous:_};Object.assign(s,E)}async function k1(s){const t=Ge(s);await Xc(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function U1(s,t){return[...s.filter(r=>!t.some(o=>o.providerId===r.providerId)),...t]}function yT(s){return s.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P1(s,t){const n=await pT(s,{},async()=>{const r=Fl({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:u}=s.config,f=await gT(s,o,"/v1/token",`key=${u}`),p=await s._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const g={method:"POST",headers:p,body:r};return s.emulatorConfig&&Yr(s.emulatorConfig.host)&&(g.credentials="include"),mT.fetch()(f,g)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function L1(s,t){return co(s,"POST","/v2/accounts:revokeToken",Vm(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){pt(t.idToken,"internal-error"),pt(typeof t.idToken<"u","internal-error"),pt(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):yv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){pt(t.length!==0,"internal-error");const n=yv(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(pt(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:o,expiresIn:u}=await P1(t,n);this.updateTokensAndExpiration(r,o,Number(u))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:o,expirationTime:u}=n,f=new Ja;return r&&(pt(typeof r=="string","internal-error",{appName:t}),f.refreshToken=r),o&&(pt(typeof o=="string","internal-error",{appName:t}),f.accessToken=o),u&&(pt(typeof u=="number","internal-error",{appName:t}),f.expirationTime=u),f}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Ja,this.toJSON())}_performRefresh(){return es("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(s,t){pt(typeof s=="string"||typeof s>"u","internal-error",{appName:t})}class Wn{constructor({uid:t,auth:n,stsTokenManager:r,...o}){this.providerId="firebase",this.proactiveRefresh=new V1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new lm(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await kl(this,this.stsTokenManager.getToken(this.auth,t));return pt(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return O1(this,t)}reload(){return k1(this)}_assign(t){this!==t&&(pt(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Wn({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){pt(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Xc(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Zn(this.auth.app))return Promise.reject(jr(this.auth));const t=await this.getIdToken();return await kl(this,x1(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const r=n.displayName??void 0,o=n.email??void 0,u=n.phoneNumber??void 0,f=n.photoURL??void 0,p=n.tenantId??void 0,g=n._redirectEventId??void 0,_=n.createdAt??void 0,E=n.lastLoginAt??void 0,{uid:b,emailVerified:N,isAnonymous:B,providerData:Z,stsTokenManager:W}=n;pt(b&&W,t,"internal-error");const J=Ja.fromJSON(this.name,W);pt(typeof b=="string",t,"internal-error"),qs(r,t.name),qs(o,t.name),pt(typeof N=="boolean",t,"internal-error"),pt(typeof B=="boolean",t,"internal-error"),qs(u,t.name),qs(f,t.name),qs(p,t.name),qs(g,t.name),qs(_,t.name),qs(E,t.name);const ot=new Wn({uid:b,auth:t,email:o,emailVerified:N,displayName:r,isAnonymous:B,photoURL:f,phoneNumber:u,tenantId:p,stsTokenManager:J,createdAt:_,lastLoginAt:E});return Z&&Array.isArray(Z)&&(ot.providerData=Z.map(gt=>({...gt}))),g&&(ot._redirectEventId=g),ot}static async _fromIdTokenResponse(t,n,r=!1){const o=new Ja;o.updateFromServerResponse(n);const u=new Wn({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:r});return await Xc(u),u}static async _fromGetAccountInfoResponse(t,n,r){const o=n.users[0];pt(o.localId!==void 0,"internal-error");const u=o.providerUserInfo!==void 0?yT(o.providerUserInfo):[],f=!(o.email&&o.passwordHash)&&!(u!=null&&u.length),p=new Ja;p.updateFromIdToken(r);const g=new Wn({uid:o.localId,auth:t,stsTokenManager:p,isAnonymous:f}),_={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:u,metadata:new lm(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(u!=null&&u.length)};return Object.assign(g,_),g}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v=new Map;function ns(s){as(s instanceof Function,"Expected a class definition");let t=_v.get(s);return t?(as(t instanceof s,"Instance stored in cache mismatched with class"),t):(t=new s,_v.set(s,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _T{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}_T.type="NONE";const vv=_T;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(s,t,n){return`firebase:${s}:${t}:${n}`}class Za{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:o,name:u}=this.auth;this.fullUserKey=Uc(this.userKey,o.apiKey,u),this.fullPersistenceKey=Uc("persistence",o.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await Yc(this.auth,{idToken:t}).catch(()=>{});return n?Wn._fromGetAccountInfoResponse(this.auth,n,t):null}return Wn._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Za(ns(vv),t,r);const o=(await Promise.all(n.map(async _=>{if(await _._isAvailable())return _}))).filter(_=>_);let u=o[0]||ns(vv);const f=Uc(r,t.config.apiKey,t.name);let p=null;for(const _ of n)try{const E=await _._get(f);if(E){let b;if(typeof E=="string"){const N=await Yc(t,{idToken:E}).catch(()=>{});if(!N)break;b=await Wn._fromGetAccountInfoResponse(t,N,E)}else b=Wn._fromJSON(t,E);_!==u&&(p=b),u=_;break}}catch{}const g=o.filter(_=>_._shouldAllowMigration);return!u._shouldAllowMigration||!g.length?new Za(u,t,r):(u=g[0],p&&await u._set(f,p.toJSON()),await Promise.all(n.map(async _=>{if(_!==u)try{await _._remove(f)}catch{}})),new Za(u,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tv(s){const t=s.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(AT(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(vT(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ST(t))return"Blackberry";if(wT(t))return"Webos";if(TT(t))return"Safari";if((t.includes("chrome/")||ET(t))&&!t.includes("edge/"))return"Chrome";if(bT(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=s.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vT(s=Je()){return/firefox\//i.test(s)}function TT(s=Je()){const t=s.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function ET(s=Je()){return/crios\//i.test(s)}function AT(s=Je()){return/iemobile/i.test(s)}function bT(s=Je()){return/android/i.test(s)}function ST(s=Je()){return/blackberry/i.test(s)}function wT(s=Je()){return/webos/i.test(s)}function Um(s=Je()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function z1(s=Je()){var t;return Um(s)&&!!((t=window.navigator)!=null&&t.standalone)}function j1(){return ZS()&&document.documentMode===10}function RT(s=Je()){return Um(s)||bT(s)||wT(s)||ST(s)||/windows phone/i.test(s)||AT(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IT(s,t=[]){let n;switch(s){case"Browser":n=Tv(Je());break;case"Worker":n=`${Tv(Je())}-${s}`;break;default:n=s}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${$r}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B1{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=u=>new Promise((f,p)=>{try{const g=t(u);f(g)}catch(g){p(g)}});r.onAbort=n,this.queue.push(r);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q1(s,t={}){return co(s,"GET","/v2/passwordPolicy",Vm(s,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=6;class F1{constructor(t){var r;const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??H1,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=t.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const r=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=t.length>=r),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let o=0;o<t.length;o++)r=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,n,r,o,u){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G1{constructor(t,n,r,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ev(this),this.idTokenSubscription=new Ev(this),this.beforeStateQueue=new B1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=fT,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(u=>this._resolvePersistenceManagerAvailable=u)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=ns(n)),this._initializationPromise=this.queue(async()=>{var r,o,u;if(!this._deleted&&(this.persistenceManager=await Za.create(this,t),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((u=this.currentUser)==null?void 0:u.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await Yc(this,{idToken:t}),r=await Wn._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var u;if(Zn(this.app)){const f=this.app.settings.authIdToken;return f?new Promise(p=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(f).then(p,p))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const f=(u=this.redirectUser)==null?void 0:u._redirectEventId,p=r==null?void 0:r._redirectEventId,g=await this.tryRedirectSignIn(t);(!f||f===p)&&(g!=null&&g.user)&&(r=g.user,o=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(r)}catch(f){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(f))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return pt(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Xc(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=w1()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Zn(this.app))return Promise.reject(jr(this));const n=t?Ge(t):null;return n&&pt(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&pt(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Zn(this.app)?Promise.reject(jr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Zn(this.app)?Promise.reject(jr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(ns(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await q1(this),n=new F1(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Xr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await L1(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&ns(t)||this._popupRedirectResolver;pt(n,this,"argument-error"),this.redirectPersistenceManager=await Za.create(this,[ns(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,o){if(this._deleted)return()=>{};const u=typeof n=="function"?n:n.next.bind(n);let f=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(pt(p,this,"internal-error"),p.then(()=>{f||u(this.currentUser)}),typeof n=="function"){const g=t.addObserver(n,r,o);return()=>{f=!0,g()}}else{const g=t.addObserver(n);return()=>{f=!0,g()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return pt(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=IT(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(t["X-Firebase-AppCheck"]=r),t}async _getAppCheckToken(){var n;if(Zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return t!=null&&t.error&&A1(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Pm(s){return Ge(s)}class Ev{constructor(t){this.auth=t,this.observer=null,this.addObserver=rw(n=>this.observer=n)}get next(){return pt(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Lm={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Q1(s){Lm=s}function K1(s){return Lm.loadJS(s)}function Y1(){return Lm.gapiScript}function X1(s){return`__${s}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $1(s,t){const n=rr(s,"auth");if(n.isInitialized()){const o=n.getImmediate(),u=n.getOptions();if(Zs(u,t??{}))return o;rs(o,"already-initialized")}return n.initialize({options:t})}function J1(s,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(ns);t!=null&&t.errorMap&&s._updateErrorMap(t.errorMap),s._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Z1(s,t,n){const r=Pm(s);pt(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const o=!1,u=CT(t),{host:f,port:p}=W1(t),g=p===null?"":`:${p}`,_={url:`${u}//${f}${g}/`},E=Object.freeze({host:f,port:p,protocol:u.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!r._canInitEmulator){pt(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),pt(Zs(_,r.config.emulator)&&Zs(E,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=_,r.emulatorConfig=E,r.settings.appVerificationDisabledForTesting=!0,Yr(f)?(Nm(`${u}//${f}${g}`),Dm("Auth",!0)):tR()}function CT(s){const t=s.indexOf(":");return t<0?"":s.substr(0,t+1)}function W1(s){const t=CT(s),n=/(\/\/)?([^?#/]+)/.exec(s.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(r);if(o){const u=o[1];return{host:u,port:Av(r.substr(u.length+1))}}else{const[u,f]=r.split(":");return{host:u,port:Av(f)}}}function Av(s){if(!s)return null;const t=Number(s);return isNaN(t)?null:t}function tR(){function s(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NT{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return es("not implemented")}_getIdTokenResponse(t){return es("not implemented")}_linkToIdToken(t,n){return es("not implemented")}_getReauthenticationResolver(t){return es("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wa(s,t){return N1(s,"POST","/v1/accounts:signInWithIdp",Vm(s,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eR="http://localhost";class Hr extends NT{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Hr(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):rs("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:o,...u}=n;if(!r||!o)return null;const f=new Hr(r,o);return f.idToken=u.idToken||void 0,f.accessToken=u.accessToken||void 0,f.secret=u.secret,f.nonce=u.nonce,f.pendingToken=u.pendingToken||null,f}_getIdTokenResponse(t){const n=this.buildRequest();return Wa(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,Wa(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Wa(t,n)}buildRequest(){const t={requestUri:eR,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Fl(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DT{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql extends DT{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs extends Ql{constructor(){super("facebook.com")}static credential(t){return Hr._fromParams({providerId:Hs.PROVIDER_ID,signInMethod:Hs.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Hs.credentialFromTaggedObject(t)}static credentialFromError(t){return Hs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Hs.credential(t.oauthAccessToken)}catch{return null}}}Hs.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hs.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends Ql{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Hr._fromParams({providerId:Fs.PROVIDER_ID,signInMethod:Fs.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Fs.credentialFromTaggedObject(t)}static credentialFromError(t){return Fs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Fs.credential(n,r)}catch{return null}}}Fs.GOOGLE_SIGN_IN_METHOD="google.com";Fs.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs extends Ql{constructor(){super("github.com")}static credential(t){return Hr._fromParams({providerId:Gs.PROVIDER_ID,signInMethod:Gs.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Gs.credentialFromTaggedObject(t)}static credentialFromError(t){return Gs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Gs.credential(t.oauthAccessToken)}catch{return null}}}Gs.GITHUB_SIGN_IN_METHOD="github.com";Gs.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs extends Ql{constructor(){super("twitter.com")}static credential(t,n){return Hr._fromParams({providerId:Qs.PROVIDER_ID,signInMethod:Qs.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Qs.credentialFromTaggedObject(t)}static credentialFromError(t){return Qs.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Qs.credential(n,r)}catch{return null}}}Qs.TWITTER_SIGN_IN_METHOD="twitter.com";Qs.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,o=!1){const u=await Wn._fromIdTokenResponse(t,r,o),f=bv(r);return new io({user:u,providerId:f,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const o=bv(r);return new io({user:t,providerId:o,_tokenResponse:r,operationType:n})}}function bv(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $c extends zn{constructor(t,n,r,o){super(n.code,n.message),this.operationType=r,this.user=o,Object.setPrototypeOf(this,$c.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,o){return new $c(t,n,r,o)}}function xT(s,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(s):n._getIdTokenResponse(s)).catch(u=>{throw u.code==="auth/multi-factor-auth-required"?$c._fromErrorAndOperation(s,u,t,r):u})}async function nR(s,t,n=!1){const r=await kl(s,t._linkToIdToken(s.auth,await s.getIdToken()),n);return io._forOperation(s,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iR(s,t,n=!1){const{auth:r}=s;if(Zn(r.app))return Promise.reject(jr(r));const o="reauthenticate";try{const u=await kl(s,xT(r,o,t,s),n);pt(u.idToken,r,"internal-error");const f=km(u.idToken);pt(f,r,"internal-error");const{sub:p}=f;return pt(s.uid===p,r,"user-mismatch"),io._forOperation(s,o,u)}catch(u){throw(u==null?void 0:u.code)==="auth/user-not-found"&&rs(r,"user-mismatch"),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sR(s,t,n=!1){if(Zn(s.app))return Promise.reject(jr(s));const r="signIn",o=await xT(s,r,t),u=await io._fromIdTokenResponse(s,r,o);return n||await s._updateCurrentUser(u.user),u}function rR(s,t,n,r){return Ge(s).onIdTokenChanged(t,n,r)}function aR(s,t,n){return Ge(s).beforeAuthStateChanged(t,n)}const Jc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OT{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Jc,"1"),this.storage.removeItem(Jc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oR=1e3,lR=10;class MT extends OT{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=RT(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),o=this.localCache[n];r!==o&&t(n,o,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((f,p,g)=>{this.notifyListeners(f,g)});return}const r=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const f=this.storage.getItem(r);!n&&this.localCache[r]===f||this.notifyListeners(r,f)},u=this.storage.getItem(r);j1()&&u!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,lR):o()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},oR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}MT.type="LOCAL";const uR=MT;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT extends OT{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}VT.type="SESSION";const kT=VT;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(s){return Promise.all(s.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const r=new yh(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:o,data:u}=n.data,f=this.handlersMap[o];if(!(f!=null&&f.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:o});const p=Array.from(f).map(async _=>_(n.origin,u)),g=await cR(p);n.ports[0].postMessage({status:"done",eventId:r,eventType:o,response:g})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(s="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return s+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let u,f;return new Promise((p,g)=>{const _=zm("",20);o.port1.start();const E=setTimeout(()=>{g(new Error("unsupported_event"))},r);f={messageChannel:o,onMessage(b){const N=b;if(N.data.eventId===_)switch(N.data.status){case"ack":clearTimeout(E),u=setTimeout(()=>{g(new Error("timeout"))},3e3);break;case"done":clearTimeout(u),p(N.data.response);break;default:clearTimeout(E),clearTimeout(u),g(new Error("invalid_response"));break}}},this.handlers.add(f),o.port1.addEventListener("message",f.onMessage),this.target.postMessage({eventType:t,eventId:_,data:n},[o.port2])}).finally(()=>{f&&this.removeMessageHandler(f)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(){return window}function fR(s){Ci().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UT(){return typeof Ci().WorkerGlobalScope<"u"&&typeof Ci().importScripts=="function"}async function dR(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function mR(){var s;return((s=navigator==null?void 0:navigator.serviceWorker)==null?void 0:s.controller)||null}function pR(){return UT()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT="firebaseLocalStorageDb",gR=1,Zc="firebaseLocalStorage",LT="fbase_key";class Kl{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function _h(s,t){return s.transaction([Zc],t?"readwrite":"readonly").objectStore(Zc)}function yR(){const s=indexedDB.deleteDatabase(PT);return new Kl(s).toPromise()}function um(){const s=indexedDB.open(PT,gR);return new Promise((t,n)=>{s.addEventListener("error",()=>{n(s.error)}),s.addEventListener("upgradeneeded",()=>{const r=s.result;try{r.createObjectStore(Zc,{keyPath:LT})}catch(o){n(o)}}),s.addEventListener("success",async()=>{const r=s.result;r.objectStoreNames.contains(Zc)?t(r):(r.close(),await yR(),t(await um()))})})}async function Sv(s,t,n){const r=_h(s,!0).put({[LT]:t,value:n});return new Kl(r).toPromise()}async function _R(s,t){const n=_h(s,!1).get(t),r=await new Kl(n).toPromise();return r===void 0?null:r.value}function wv(s,t){const n=_h(s,!0).delete(t);return new Kl(n).toPromise()}const vR=800,TR=3;class zT{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await um(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>TR)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return UT()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yh._getInstance(pR()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await dR(),!this.activeServiceWorker)return;this.sender=new hR(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(n=t[0])!=null&&n.fulfilled&&(r=t[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||mR()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await um();return await Sv(t,Jc,"1"),await wv(t,Jc),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Sv(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>_R(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>wv(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const u=_h(o,!1).getAll();return new Kl(u).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(t.length!==0)for(const{fbase_key:o,value:u}of t)r.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(u)&&(this.notifyListeners(o,u),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!r.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const o of Array.from(r))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),vR)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zT.type="LOCAL";const ER=zT;new Gl(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(s,t){return t?ns(t):(pt(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jm extends NT{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Wa(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Wa(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Wa(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function bR(s){return sR(s.auth,new jm(s),s.bypassAuthState)}function SR(s){const{auth:t,user:n}=s;return pt(n,t,"internal-error"),iR(n,new jm(s),s.bypassAuthState)}async function wR(s){const{auth:t,user:n}=s;return pt(n,t,"internal-error"),nR(n,new jm(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(t,n,r,o,u=!1){this.auth=t,this.resolver=r,this.user=o,this.bypassAuthState=u,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:o,tenantId:u,error:f,type:p}=t;if(f){this.reject(f);return}const g={auth:this.auth,requestUri:n,sessionId:r,tenantId:u||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(g))}catch(_){this.reject(_)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return bR;case"linkViaPopup":case"linkViaRedirect":return wR;case"reauthViaPopup":case"reauthViaRedirect":return SR;default:rs(this.auth,"internal-error")}}resolve(t){as(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){as(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=new Gl(2e3,1e4);class $a extends jT{constructor(t,n,r,o,u){super(t,n,o,u),this.provider=r,this.authWindow=null,this.pollId=null,$a.currentPopupAction&&$a.currentPopupAction.cancel(),$a.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return pt(t,this.auth,"internal-error"),t}async onExecution(){as(this.filter.length===1,"Popup operations only handle one event");const t=zm();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ii(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(Ii(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,$a.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ii(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,RR.get())};t()}}$a.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IR="pendingRedirect",Pc=new Map;class CR extends jT{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=Pc.get(this.auth._key());if(!t){try{const r=await NR(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}Pc.set(this.auth._key(),t)}return this.bypassAuthState||Pc.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function NR(s,t){const n=OR(t),r=xR(s);if(!await r._isAvailable())return!1;const o=await r._get(n)==="true";return await r._remove(n),o}function DR(s,t){Pc.set(s._key(),t)}function xR(s){return ns(s._redirectPersistence)}function OR(s){return Uc(IR,s.config.apiKey,s.name)}async function MR(s,t,n=!1){if(Zn(s.app))return Promise.reject(jr(s));const r=Pm(s),o=AR(r,t),f=await new CR(r,o,n).execute();return f&&!n&&(delete f.user._redirectEventId,await r._persistUserIfCurrent(f.user),await r._setRedirectUser(null,t)),f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VR=600*1e3;class kR{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!UR(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!BT(t)){const o=((r=t.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ii(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=VR&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rv(t))}saveEventToCache(t){this.cachedEventUids.add(Rv(t)),this.lastProcessedEventTime=Date.now()}}function Rv(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(t=>t).join("-")}function BT({type:s,error:t}){return s==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function UR(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return BT(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PR(s,t={}){return co(s,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,zR=/^https?/;async function jR(s){if(s.config.emulator)return;const{authorizedDomains:t}=await PR(s);for(const n of t)try{if(BR(n))return}catch{}rs(s,"unauthorized-domain")}function BR(s){const t=om(),{protocol:n,hostname:r}=new URL(t);if(s.startsWith("chrome-extension://")){const f=new URL(s);return f.hostname===""&&r===""?n==="chrome-extension:"&&s.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&f.hostname===r}if(!zR.test(n))return!1;if(LR.test(s))return r===s;const o=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qR=new Gl(3e4,6e4);function Iv(){const s=Ci().___jsl;if(s!=null&&s.H){for(const t of Object.keys(s.H))if(s.H[t].r=s.H[t].r||[],s.H[t].L=s.H[t].L||[],s.H[t].r=[...s.H[t].L],s.CP)for(let n=0;n<s.CP.length;n++)s.CP[n]=null}}function HR(s){return new Promise((t,n)=>{var o,u,f;function r(){Iv(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Iv(),n(Ii(s,"network-request-failed"))},timeout:qR.get()})}if((u=(o=Ci().gapi)==null?void 0:o.iframes)!=null&&u.Iframe)t(gapi.iframes.getContext());else if((f=Ci().gapi)!=null&&f.load)r();else{const p=X1("iframefcb");return Ci()[p]=()=>{gapi.load?r():n(Ii(s,"network-request-failed"))},K1(`${Y1()}?onload=${p}`).catch(g=>n(g))}}).catch(t=>{throw Lc=null,t})}let Lc=null;function FR(s){return Lc=Lc||HR(s),Lc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR=new Gl(5e3,15e3),QR="__/auth/iframe",KR="emulator/auth/iframe",YR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},XR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $R(s){const t=s.config;pt(t.authDomain,s,"auth-domain-config-required");const n=t.emulator?Mm(t,KR):`https://${s.config.authDomain}/${QR}`,r={apiKey:t.apiKey,appName:s.name,v:$r},o=XR.get(s.config.apiHost);o&&(r.eid=o);const u=s._getFrameworks();return u.length&&(r.fw=u.join(",")),`${n}?${Fl(r).slice(1)}`}async function JR(s){const t=await FR(s),n=Ci().gapi;return pt(n,s,"internal-error"),t.open({where:document.body,url:$R(s),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:YR,dontclear:!0},r=>new Promise(async(o,u)=>{await r.restyle({setHideOnLeave:!1});const f=Ii(s,"network-request-failed"),p=Ci().setTimeout(()=>{u(f)},GR.get());function g(){Ci().clearTimeout(p),o(r)}r.ping(g).then(g,()=>{u(f)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},WR=500,tI=600,eI="_blank",nI="http://localhost";class Cv{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function iI(s,t,n,r=WR,o=tI){const u=Math.max((window.screen.availHeight-o)/2,0).toString(),f=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const g={...ZR,width:r.toString(),height:o.toString(),top:u,left:f},_=Je().toLowerCase();n&&(p=ET(_)?eI:n),vT(_)&&(t=t||nI,g.scrollbars="yes");const E=Object.entries(g).reduce((N,[B,Z])=>`${N}${B}=${Z},`,"");if(z1(_)&&p!=="_self")return sI(t||"",p),new Cv(null);const b=window.open(t||"",p,E);pt(b,s,"popup-blocked");try{b.focus()}catch{}return new Cv(b)}function sI(s,t){const n=document.createElement("a");n.href=s,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rI="__/auth/handler",aI="emulator/auth/handler",oI=encodeURIComponent("fac");async function Nv(s,t,n,r,o,u){pt(s.config.authDomain,s,"auth-domain-config-required"),pt(s.config.apiKey,s,"invalid-api-key");const f={apiKey:s.config.apiKey,appName:s.name,authType:n,redirectUrl:r,v:$r,eventId:o};if(t instanceof DT){t.setDefaultLanguage(s.languageCode),f.providerId=t.providerId||"",sw(t.getCustomParameters())||(f.customParameters=JSON.stringify(t.getCustomParameters()));for(const[E,b]of Object.entries({}))f[E]=b}if(t instanceof Ql){const E=t.getScopes().filter(b=>b!=="");E.length>0&&(f.scopes=E.join(","))}s.tenantId&&(f.tid=s.tenantId);const p=f;for(const E of Object.keys(p))p[E]===void 0&&delete p[E];const g=await s._getAppCheckToken(),_=g?`#${oI}=${encodeURIComponent(g)}`:"";return`${lI(s)}?${Fl(p).slice(1)}${_}`}function lI({config:s}){return s.emulator?Mm(s,aI):`https://${s.authDomain}/${rI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qd="webStorageSupport";class uI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=kT,this._completeRedirectFn=MR,this._overrideRedirectResult=DR}async _openPopup(t,n,r,o){var f;as((f=this.eventManagers[t._key()])==null?void 0:f.manager,"_initialize() not called before _openPopup()");const u=await Nv(t,n,r,om(),o);return iI(t,u,zm())}async _openRedirect(t,n,r,o){await this._originValidation(t);const u=await Nv(t,n,r,om(),o);return fR(u),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:u}=this.eventManagers[n];return o?Promise.resolve(o):(as(u,"If manager is not set, promise should be"),u)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await JR(t),r=new kR(t);return n.register("authEvent",o=>(pt(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:r.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Qd,{type:Qd},o=>{var f;const u=(f=o==null?void 0:o[0])==null?void 0:f[Qd];u!==void 0&&n(!!u),rs(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=jR(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return RT()||TT()||Um()}}const cI=uI;var Dv="@firebase/auth",xv="1.11.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hI{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){pt(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fI(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function dI(s){ni(new Ln("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),u=t.getProvider("app-check-internal"),{apiKey:f,authDomain:p}=r.options;pt(f&&!f.includes(":"),"invalid-api-key",{appName:r.name});const g={apiKey:f,authDomain:p,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:IT(s)},_=new G1(r,o,u,g);return J1(_,n),_},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),ni(new Ln("auth-internal",t=>{const n=Pm(t.getProvider("auth").getImmediate());return(r=>new hI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fn(Dv,xv,fI(s)),fn(Dv,xv,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mI=300,pI=tT("authIdTokenMaxAge")||mI;let Ov=null;const gI=s=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>pI)return;const o=n==null?void 0:n.token;Ov!==o&&(Ov=o,await fetch(s,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function yI(s=gh()){const t=rr(s,"auth");if(t.isInitialized())return t.getImmediate();const n=$1(s,{popupRedirectResolver:cI,persistence:[ER,uR,kT]}),r=tT("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const u=new URL(r,location.origin);if(location.origin===u.origin){const f=gI(u.toString());aR(n,f,()=>f(n.currentUser)),rR(n,p=>f(p))}}const o=J0("auth");return o&&Z1(n,`http://${o}`),n}function _I(){var s;return((s=document.getElementsByTagName("head"))==null?void 0:s[0])??document}Q1({loadJS(s){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",s),r.onload=t,r.onerror=o=>{const u=Ii("internal-error");u.customData=o,n(u)},r.type="text/javascript",r.charset="UTF-8",_I().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});dI("Browser");var Mv=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $s,qT;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(C,S){function I(){}I.prototype=S.prototype,C.F=S.prototype,C.prototype=new I,C.prototype.constructor=C,C.D=function(V,x,U){for(var w=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)w[ie-2]=arguments[ie];return S.prototype[x].apply(V,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(C,S,I){I||(I=0);const V=Array(16);if(typeof S=="string")for(var x=0;x<16;++x)V[x]=S.charCodeAt(I++)|S.charCodeAt(I++)<<8|S.charCodeAt(I++)<<16|S.charCodeAt(I++)<<24;else for(x=0;x<16;++x)V[x]=S[I++]|S[I++]<<8|S[I++]<<16|S[I++]<<24;S=C.g[0],I=C.g[1],x=C.g[2];let U=C.g[3],w;w=S+(U^I&(x^U))+V[0]+3614090360&4294967295,S=I+(w<<7&4294967295|w>>>25),w=U+(x^S&(I^x))+V[1]+3905402710&4294967295,U=S+(w<<12&4294967295|w>>>20),w=x+(I^U&(S^I))+V[2]+606105819&4294967295,x=U+(w<<17&4294967295|w>>>15),w=I+(S^x&(U^S))+V[3]+3250441966&4294967295,I=x+(w<<22&4294967295|w>>>10),w=S+(U^I&(x^U))+V[4]+4118548399&4294967295,S=I+(w<<7&4294967295|w>>>25),w=U+(x^S&(I^x))+V[5]+1200080426&4294967295,U=S+(w<<12&4294967295|w>>>20),w=x+(I^U&(S^I))+V[6]+2821735955&4294967295,x=U+(w<<17&4294967295|w>>>15),w=I+(S^x&(U^S))+V[7]+4249261313&4294967295,I=x+(w<<22&4294967295|w>>>10),w=S+(U^I&(x^U))+V[8]+1770035416&4294967295,S=I+(w<<7&4294967295|w>>>25),w=U+(x^S&(I^x))+V[9]+2336552879&4294967295,U=S+(w<<12&4294967295|w>>>20),w=x+(I^U&(S^I))+V[10]+4294925233&4294967295,x=U+(w<<17&4294967295|w>>>15),w=I+(S^x&(U^S))+V[11]+2304563134&4294967295,I=x+(w<<22&4294967295|w>>>10),w=S+(U^I&(x^U))+V[12]+1804603682&4294967295,S=I+(w<<7&4294967295|w>>>25),w=U+(x^S&(I^x))+V[13]+4254626195&4294967295,U=S+(w<<12&4294967295|w>>>20),w=x+(I^U&(S^I))+V[14]+2792965006&4294967295,x=U+(w<<17&4294967295|w>>>15),w=I+(S^x&(U^S))+V[15]+1236535329&4294967295,I=x+(w<<22&4294967295|w>>>10),w=S+(x^U&(I^x))+V[1]+4129170786&4294967295,S=I+(w<<5&4294967295|w>>>27),w=U+(I^x&(S^I))+V[6]+3225465664&4294967295,U=S+(w<<9&4294967295|w>>>23),w=x+(S^I&(U^S))+V[11]+643717713&4294967295,x=U+(w<<14&4294967295|w>>>18),w=I+(U^S&(x^U))+V[0]+3921069994&4294967295,I=x+(w<<20&4294967295|w>>>12),w=S+(x^U&(I^x))+V[5]+3593408605&4294967295,S=I+(w<<5&4294967295|w>>>27),w=U+(I^x&(S^I))+V[10]+38016083&4294967295,U=S+(w<<9&4294967295|w>>>23),w=x+(S^I&(U^S))+V[15]+3634488961&4294967295,x=U+(w<<14&4294967295|w>>>18),w=I+(U^S&(x^U))+V[4]+3889429448&4294967295,I=x+(w<<20&4294967295|w>>>12),w=S+(x^U&(I^x))+V[9]+568446438&4294967295,S=I+(w<<5&4294967295|w>>>27),w=U+(I^x&(S^I))+V[14]+3275163606&4294967295,U=S+(w<<9&4294967295|w>>>23),w=x+(S^I&(U^S))+V[3]+4107603335&4294967295,x=U+(w<<14&4294967295|w>>>18),w=I+(U^S&(x^U))+V[8]+1163531501&4294967295,I=x+(w<<20&4294967295|w>>>12),w=S+(x^U&(I^x))+V[13]+2850285829&4294967295,S=I+(w<<5&4294967295|w>>>27),w=U+(I^x&(S^I))+V[2]+4243563512&4294967295,U=S+(w<<9&4294967295|w>>>23),w=x+(S^I&(U^S))+V[7]+1735328473&4294967295,x=U+(w<<14&4294967295|w>>>18),w=I+(U^S&(x^U))+V[12]+2368359562&4294967295,I=x+(w<<20&4294967295|w>>>12),w=S+(I^x^U)+V[5]+4294588738&4294967295,S=I+(w<<4&4294967295|w>>>28),w=U+(S^I^x)+V[8]+2272392833&4294967295,U=S+(w<<11&4294967295|w>>>21),w=x+(U^S^I)+V[11]+1839030562&4294967295,x=U+(w<<16&4294967295|w>>>16),w=I+(x^U^S)+V[14]+4259657740&4294967295,I=x+(w<<23&4294967295|w>>>9),w=S+(I^x^U)+V[1]+2763975236&4294967295,S=I+(w<<4&4294967295|w>>>28),w=U+(S^I^x)+V[4]+1272893353&4294967295,U=S+(w<<11&4294967295|w>>>21),w=x+(U^S^I)+V[7]+4139469664&4294967295,x=U+(w<<16&4294967295|w>>>16),w=I+(x^U^S)+V[10]+3200236656&4294967295,I=x+(w<<23&4294967295|w>>>9),w=S+(I^x^U)+V[13]+681279174&4294967295,S=I+(w<<4&4294967295|w>>>28),w=U+(S^I^x)+V[0]+3936430074&4294967295,U=S+(w<<11&4294967295|w>>>21),w=x+(U^S^I)+V[3]+3572445317&4294967295,x=U+(w<<16&4294967295|w>>>16),w=I+(x^U^S)+V[6]+76029189&4294967295,I=x+(w<<23&4294967295|w>>>9),w=S+(I^x^U)+V[9]+3654602809&4294967295,S=I+(w<<4&4294967295|w>>>28),w=U+(S^I^x)+V[12]+3873151461&4294967295,U=S+(w<<11&4294967295|w>>>21),w=x+(U^S^I)+V[15]+530742520&4294967295,x=U+(w<<16&4294967295|w>>>16),w=I+(x^U^S)+V[2]+3299628645&4294967295,I=x+(w<<23&4294967295|w>>>9),w=S+(x^(I|~U))+V[0]+4096336452&4294967295,S=I+(w<<6&4294967295|w>>>26),w=U+(I^(S|~x))+V[7]+1126891415&4294967295,U=S+(w<<10&4294967295|w>>>22),w=x+(S^(U|~I))+V[14]+2878612391&4294967295,x=U+(w<<15&4294967295|w>>>17),w=I+(U^(x|~S))+V[5]+4237533241&4294967295,I=x+(w<<21&4294967295|w>>>11),w=S+(x^(I|~U))+V[12]+1700485571&4294967295,S=I+(w<<6&4294967295|w>>>26),w=U+(I^(S|~x))+V[3]+2399980690&4294967295,U=S+(w<<10&4294967295|w>>>22),w=x+(S^(U|~I))+V[10]+4293915773&4294967295,x=U+(w<<15&4294967295|w>>>17),w=I+(U^(x|~S))+V[1]+2240044497&4294967295,I=x+(w<<21&4294967295|w>>>11),w=S+(x^(I|~U))+V[8]+1873313359&4294967295,S=I+(w<<6&4294967295|w>>>26),w=U+(I^(S|~x))+V[15]+4264355552&4294967295,U=S+(w<<10&4294967295|w>>>22),w=x+(S^(U|~I))+V[6]+2734768916&4294967295,x=U+(w<<15&4294967295|w>>>17),w=I+(U^(x|~S))+V[13]+1309151649&4294967295,I=x+(w<<21&4294967295|w>>>11),w=S+(x^(I|~U))+V[4]+4149444226&4294967295,S=I+(w<<6&4294967295|w>>>26),w=U+(I^(S|~x))+V[11]+3174756917&4294967295,U=S+(w<<10&4294967295|w>>>22),w=x+(S^(U|~I))+V[2]+718787259&4294967295,x=U+(w<<15&4294967295|w>>>17),w=I+(U^(x|~S))+V[9]+3951481745&4294967295,C.g[0]=C.g[0]+S&4294967295,C.g[1]=C.g[1]+(x+(w<<21&4294967295|w>>>11))&4294967295,C.g[2]=C.g[2]+x&4294967295,C.g[3]=C.g[3]+U&4294967295}r.prototype.v=function(C,S){S===void 0&&(S=C.length);const I=S-this.blockSize,V=this.C;let x=this.h,U=0;for(;U<S;){if(x==0)for(;U<=I;)o(this,C,U),U+=this.blockSize;if(typeof C=="string"){for(;U<S;)if(V[x++]=C.charCodeAt(U++),x==this.blockSize){o(this,V),x=0;break}}else for(;U<S;)if(V[x++]=C[U++],x==this.blockSize){o(this,V),x=0;break}}this.h=x,this.o+=S},r.prototype.A=function(){var C=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);C[0]=128;for(var S=1;S<C.length-8;++S)C[S]=0;S=this.o*8;for(var I=C.length-8;I<C.length;++I)C[I]=S&255,S/=256;for(this.v(C),C=Array(16),S=0,I=0;I<4;++I)for(let V=0;V<32;V+=8)C[S++]=this.g[I]>>>V&255;return C};function u(C,S){var I=p;return Object.prototype.hasOwnProperty.call(I,C)?I[C]:I[C]=S(C)}function f(C,S){this.h=S;const I=[];let V=!0;for(let x=C.length-1;x>=0;x--){const U=C[x]|0;V&&U==S||(I[x]=U,V=!1)}this.g=I}var p={};function g(C){return-128<=C&&C<128?u(C,function(S){return new f([S|0],S<0?-1:0)}):new f([C|0],C<0?-1:0)}function _(C){if(isNaN(C)||!isFinite(C))return b;if(C<0)return J(_(-C));const S=[];let I=1;for(let V=0;C>=I;V++)S[V]=C/I|0,I*=4294967296;return new f(S,0)}function E(C,S){if(C.length==0)throw Error("number format error: empty string");if(S=S||10,S<2||36<S)throw Error("radix out of range: "+S);if(C.charAt(0)=="-")return J(E(C.substring(1),S));if(C.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=_(Math.pow(S,8));let V=b;for(let U=0;U<C.length;U+=8){var x=Math.min(8,C.length-U);const w=parseInt(C.substring(U,U+x),S);x<8?(x=_(Math.pow(S,x)),V=V.j(x).add(_(w))):(V=V.j(I),V=V.add(_(w)))}return V}var b=g(0),N=g(1),B=g(16777216);s=f.prototype,s.m=function(){if(W(this))return-J(this).m();let C=0,S=1;for(let I=0;I<this.g.length;I++){const V=this.i(I);C+=(V>=0?V:4294967296+V)*S,S*=4294967296}return C},s.toString=function(C){if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(Z(this))return"0";if(W(this))return"-"+J(this).toString(C);const S=_(Math.pow(C,6));var I=this;let V="";for(;;){const x=Et(I,S).g;I=ot(I,x.j(S));let U=((I.g.length>0?I.g[0]:I.h)>>>0).toString(C);if(I=x,Z(I))return U+V;for(;U.length<6;)U="0"+U;V=U+V}},s.i=function(C){return C<0?0:C<this.g.length?this.g[C]:this.h};function Z(C){if(C.h!=0)return!1;for(let S=0;S<C.g.length;S++)if(C.g[S]!=0)return!1;return!0}function W(C){return C.h==-1}s.l=function(C){return C=ot(this,C),W(C)?-1:Z(C)?0:1};function J(C){const S=C.g.length,I=[];for(let V=0;V<S;V++)I[V]=~C.g[V];return new f(I,~C.h).add(N)}s.abs=function(){return W(this)?J(this):this},s.add=function(C){const S=Math.max(this.g.length,C.g.length),I=[];let V=0;for(let x=0;x<=S;x++){let U=V+(this.i(x)&65535)+(C.i(x)&65535),w=(U>>>16)+(this.i(x)>>>16)+(C.i(x)>>>16);V=w>>>16,U&=65535,w&=65535,I[x]=w<<16|U}return new f(I,I[I.length-1]&-2147483648?-1:0)};function ot(C,S){return C.add(J(S))}s.j=function(C){if(Z(this)||Z(C))return b;if(W(this))return W(C)?J(this).j(J(C)):J(J(this).j(C));if(W(C))return J(this.j(J(C)));if(this.l(B)<0&&C.l(B)<0)return _(this.m()*C.m());const S=this.g.length+C.g.length,I=[];for(var V=0;V<2*S;V++)I[V]=0;for(V=0;V<this.g.length;V++)for(let x=0;x<C.g.length;x++){const U=this.i(V)>>>16,w=this.i(V)&65535,ie=C.i(x)>>>16,Ie=C.i(x)&65535;I[2*V+2*x]+=w*Ie,gt(I,2*V+2*x),I[2*V+2*x+1]+=U*Ie,gt(I,2*V+2*x+1),I[2*V+2*x+1]+=w*ie,gt(I,2*V+2*x+1),I[2*V+2*x+2]+=U*ie,gt(I,2*V+2*x+2)}for(C=0;C<S;C++)I[C]=I[2*C+1]<<16|I[2*C];for(C=S;C<2*S;C++)I[C]=0;return new f(I,0)};function gt(C,S){for(;(C[S]&65535)!=C[S];)C[S+1]+=C[S]>>>16,C[S]&=65535,S++}function ht(C,S){this.g=C,this.h=S}function Et(C,S){if(Z(S))throw Error("division by zero");if(Z(C))return new ht(b,b);if(W(C))return S=Et(J(C),S),new ht(J(S.g),J(S.h));if(W(S))return S=Et(C,J(S)),new ht(J(S.g),S.h);if(C.g.length>30){if(W(C)||W(S))throw Error("slowDivide_ only works with positive integers.");for(var I=N,V=S;V.l(C)<=0;)I=Ht(I),V=Ht(V);var x=Rt(I,1),U=Rt(V,1);for(V=Rt(V,2),I=Rt(I,2);!Z(V);){var w=U.add(V);w.l(C)<=0&&(x=x.add(I),U=w),V=Rt(V,1),I=Rt(I,1)}return S=ot(C,x.j(S)),new ht(x,S)}for(x=b;C.l(S)>=0;){for(I=Math.max(1,Math.floor(C.m()/S.m())),V=Math.ceil(Math.log(I)/Math.LN2),V=V<=48?1:Math.pow(2,V-48),U=_(I),w=U.j(S);W(w)||w.l(C)>0;)I-=V,U=_(I),w=U.j(S);Z(U)&&(U=N),x=x.add(U),C=ot(C,w)}return new ht(x,C)}s.B=function(C){return Et(this,C).h},s.and=function(C){const S=Math.max(this.g.length,C.g.length),I=[];for(let V=0;V<S;V++)I[V]=this.i(V)&C.i(V);return new f(I,this.h&C.h)},s.or=function(C){const S=Math.max(this.g.length,C.g.length),I=[];for(let V=0;V<S;V++)I[V]=this.i(V)|C.i(V);return new f(I,this.h|C.h)},s.xor=function(C){const S=Math.max(this.g.length,C.g.length),I=[];for(let V=0;V<S;V++)I[V]=this.i(V)^C.i(V);return new f(I,this.h^C.h)};function Ht(C){const S=C.g.length+1,I=[];for(let V=0;V<S;V++)I[V]=C.i(V)<<1|C.i(V-1)>>>31;return new f(I,C.h)}function Rt(C,S){const I=S>>5;S%=32;const V=C.g.length-I,x=[];for(let U=0;U<V;U++)x[U]=S>0?C.i(U+I)>>>S|C.i(U+I+1)<<32-S:C.i(U+I);return new f(x,C.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,qT=r,f.prototype.add=f.prototype.add,f.prototype.multiply=f.prototype.j,f.prototype.modulo=f.prototype.B,f.prototype.compare=f.prototype.l,f.prototype.toNumber=f.prototype.m,f.prototype.toString=f.prototype.toString,f.prototype.getBits=f.prototype.i,f.fromNumber=_,f.fromString=E,$s=f}).apply(typeof Mv<"u"?Mv:typeof self<"u"?self:typeof window<"u"?window:{});var Nc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var HT,bl,FT,zc,cm,GT,QT,KT;(function(){var s,t=Object.defineProperty;function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof Nc=="object"&&Nc];for(var m=0;m<c.length;++m){var v=c[m];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var r=n(this);function o(c,m){if(m)t:{var v=r;c=c.split(".");for(var A=0;A<c.length-1;A++){var P=c[A];if(!(P in v))break t;v=v[P]}c=c[c.length-1],A=v[c],m=m(A),m!=A&&m!=null&&t(v,c,{configurable:!0,writable:!0,value:m})}}o("Symbol.dispose",function(c){return c||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(c){return c||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(c){return c||function(m){var v=[],A;for(A in m)Object.prototype.hasOwnProperty.call(m,A)&&v.push([A,m[A]]);return v}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},f=this||self;function p(c){var m=typeof c;return m=="object"&&c!=null||m=="function"}function g(c,m,v){return c.call.apply(c.bind,arguments)}function _(c,m,v){return _=g,_.apply(null,arguments)}function E(c,m){var v=Array.prototype.slice.call(arguments,1);return function(){var A=v.slice();return A.push.apply(A,arguments),c.apply(this,A)}}function b(c,m){function v(){}v.prototype=m.prototype,c.Z=m.prototype,c.prototype=new v,c.prototype.constructor=c,c.Ob=function(A,P,q){for(var tt=Array(arguments.length-2),At=2;At<arguments.length;At++)tt[At-2]=arguments[At];return m.prototype[P].apply(A,tt)}}var N=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?c=>c&&AsyncContext.Snapshot.wrap(c):c=>c;function B(c){const m=c.length;if(m>0){const v=Array(m);for(let A=0;A<m;A++)v[A]=c[A];return v}return[]}function Z(c,m){for(let A=1;A<arguments.length;A++){const P=arguments[A];var v=typeof P;if(v=v!="object"?v:P?Array.isArray(P)?"array":v:"null",v=="array"||v=="object"&&typeof P.length=="number"){v=c.length||0;const q=P.length||0;c.length=v+q;for(let tt=0;tt<q;tt++)c[v+tt]=P[tt]}else c.push(P)}}class W{constructor(m,v){this.i=m,this.j=v,this.h=0,this.g=null}get(){let m;return this.h>0?(this.h--,m=this.g,this.g=m.next,m.next=null):m=this.i(),m}}function J(c){f.setTimeout(()=>{throw c},0)}function ot(){var c=C;let m=null;return c.g&&(m=c.g,c.g=c.g.next,c.g||(c.h=null),m.next=null),m}class gt{constructor(){this.h=this.g=null}add(m,v){const A=ht.get();A.set(m,v),this.h?this.h.next=A:this.g=A,this.h=A}}var ht=new W(()=>new Et,c=>c.reset());class Et{constructor(){this.next=this.g=this.h=null}set(m,v){this.h=m,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Ht,Rt=!1,C=new gt,S=()=>{const c=Promise.resolve(void 0);Ht=()=>{c.then(I)}};function I(){for(var c;c=ot();){try{c.h.call(c.g)}catch(v){J(v)}var m=ht;m.j(c),m.h<100&&(m.h++,c.next=m.g,m.g=c)}Rt=!1}function V(){this.u=this.u,this.C=this.C}V.prototype.u=!1,V.prototype.dispose=function(){this.u||(this.u=!0,this.N())},V.prototype[Symbol.dispose]=function(){this.dispose()},V.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function x(c,m){this.type=c,this.g=this.target=m,this.defaultPrevented=!1}x.prototype.h=function(){this.defaultPrevented=!0};var U=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var c=!1,m=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const v=()=>{};f.addEventListener("test",v,m),f.removeEventListener("test",v,m)}catch{}return c})();function w(c){return/^[\s\xa0]*$/.test(c)}function ie(c,m){x.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c&&this.init(c,m)}b(ie,x),ie.prototype.init=function(c,m){const v=this.type=c.type,A=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;this.target=c.target||c.srcElement,this.g=m,m=c.relatedTarget,m||(v=="mouseover"?m=c.fromElement:v=="mouseout"&&(m=c.toElement)),this.relatedTarget=m,A?(this.clientX=A.clientX!==void 0?A.clientX:A.pageX,this.clientY=A.clientY!==void 0?A.clientY:A.pageY,this.screenX=A.screenX||0,this.screenY=A.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=c.pointerType,this.state=c.state,this.i=c,c.defaultPrevented&&ie.Z.h.call(this)},ie.prototype.h=function(){ie.Z.h.call(this);const c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var Ie="closure_listenable_"+(Math.random()*1e6|0),G=0;function et(c,m,v,A,P){this.listener=c,this.proxy=null,this.src=m,this.type=v,this.capture=!!A,this.ha=P,this.key=++G,this.da=this.fa=!1}function ft(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function Pt(c,m,v){for(const A in c)m.call(v,c[A],A,c)}function Ft(c,m){for(const v in c)m.call(void 0,c[v],v,c)}function M(c){const m={};for(const v in c)m[v]=c[v];return m}const Y="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function nt(c,m){let v,A;for(let P=1;P<arguments.length;P++){A=arguments[P];for(v in A)c[v]=A[v];for(let q=0;q<Y.length;q++)v=Y[q],Object.prototype.hasOwnProperty.call(A,v)&&(c[v]=A[v])}}function rt(c){this.src=c,this.g={},this.h=0}rt.prototype.add=function(c,m,v,A,P){const q=c.toString();c=this.g[q],c||(c=this.g[q]=[],this.h++);const tt=St(c,m,A,P);return tt>-1?(m=c[tt],v||(m.fa=!1)):(m=new et(m,this.src,q,!!A,P),m.fa=v,c.push(m)),m};function yt(c,m){const v=m.type;if(v in c.g){var A=c.g[v],P=Array.prototype.indexOf.call(A,m,void 0),q;(q=P>=0)&&Array.prototype.splice.call(A,P,1),q&&(ft(m),c.g[v].length==0&&(delete c.g[v],c.h--))}}function St(c,m,v,A){for(let P=0;P<c.length;++P){const q=c[P];if(!q.da&&q.listener==m&&q.capture==!!v&&q.ha==A)return P}return-1}var kt="closure_lm_"+(Math.random()*1e6|0),Ce={};function se(c,m,v,A,P){if(Array.isArray(m)){for(let q=0;q<m.length;q++)se(c,m[q],v,A,P);return null}return v=vo(v),c&&c[Ie]?c.J(m,v,p(A)?!!A.capture:!1,P):ar(c,m,v,!1,A,P)}function ar(c,m,v,A,P,q){if(!m)throw Error("Invalid event type");const tt=p(P)?!!P.capture:!!P;let At=or(c);if(At||(c[kt]=At=new rt(c)),v=At.add(m,v,A,tt,q),v.proxy)return v;if(A=na(),v.proxy=A,A.src=c,A.listener=v,c.addEventListener)U||(P=tt),P===void 0&&(P=!1),c.addEventListener(m.toString(),A,P);else if(c.attachEvent)c.attachEvent(si(m.toString()),A);else if(c.addListener&&c.removeListener)c.addListener(A);else throw Error("addEventListener and attachEvent are unavailable.");return v}function na(){function c(v){return m.call(c.src,c.listener,v)}const m=yo;return c}function ia(c,m,v,A,P){if(Array.isArray(m))for(var q=0;q<m.length;q++)ia(c,m[q],v,A,P);else A=p(A)?!!A.capture:!!A,v=vo(v),c&&c[Ie]?(c=c.i,q=String(m).toString(),q in c.g&&(m=c.g[q],v=St(m,v,A,P),v>-1&&(ft(m[v]),Array.prototype.splice.call(m,v,1),m.length==0&&(delete c.g[q],c.h--)))):c&&(c=or(c))&&(m=c.g[m.toString()],c=-1,m&&(c=St(m,v,A,P)),(v=c>-1?m[c]:null)&&sa(v))}function sa(c){if(typeof c!="number"&&c&&!c.da){var m=c.src;if(m&&m[Ie])yt(m.i,c);else{var v=c.type,A=c.proxy;m.removeEventListener?m.removeEventListener(v,A,c.capture):m.detachEvent?m.detachEvent(si(v),A):m.addListener&&m.removeListener&&m.removeListener(A),(v=or(m))?(yt(v,c),v.h==0&&(v.src=null,m[kt]=null)):ft(c)}}}function si(c){return c in Ce?Ce[c]:Ce[c]="on"+c}function yo(c,m){if(c.da)c=!0;else{m=new ie(m,this);const v=c.listener,A=c.ha||c.src;c.fa&&sa(c),c=v.call(A,m)}return c}function or(c){return c=c[kt],c instanceof rt?c:null}var _o="__closure_events_fn_"+(Math.random()*1e9>>>0);function vo(c){return typeof c=="function"?c:(c[_o]||(c[_o]=function(m){return c.handleEvent(m)}),c[_o])}function pe(){V.call(this),this.i=new rt(this),this.M=this,this.G=null}b(pe,V),pe.prototype[Ie]=!0,pe.prototype.removeEventListener=function(c,m,v,A){ia(this,c,m,v,A)};function Ne(c,m){var v,A=c.G;if(A)for(v=[];A;A=A.G)v.push(A);if(c=c.M,A=m.type||m,typeof m=="string")m=new x(m,c);else if(m instanceof x)m.target=m.target||c;else{var P=m;m=new x(A,c),nt(m,P)}P=!0;let q,tt;if(v)for(tt=v.length-1;tt>=0;tt--)q=m.g=v[tt],P=us(q,A,!0,m)&&P;if(q=m.g=c,P=us(q,A,!0,m)&&P,P=us(q,A,!1,m)&&P,v)for(tt=0;tt<v.length;tt++)q=m.g=v[tt],P=us(q,A,!1,m)&&P}pe.prototype.N=function(){if(pe.Z.N.call(this),this.i){var c=this.i;for(const m in c.g){const v=c.g[m];for(let A=0;A<v.length;A++)ft(v[A]);delete c.g[m],c.h--}}this.G=null},pe.prototype.J=function(c,m,v,A){return this.i.add(String(c),m,!1,v,A)},pe.prototype.K=function(c,m,v,A){return this.i.add(String(c),m,!0,v,A)};function us(c,m,v,A){if(m=c.i.g[String(m)],!m)return!0;m=m.concat();let P=!0;for(let q=0;q<m.length;++q){const tt=m[q];if(tt&&!tt.da&&tt.capture==v){const At=tt.listener,he=tt.ha||tt.src;tt.fa&&yt(c.i,tt),P=At.call(he,A)!==!1&&P}}return P&&!A.defaultPrevented}function kh(c,m){if(typeof c!="function")if(c&&typeof c.handleEvent=="function")c=_(c.handleEvent,c);else throw Error("Invalid listener argument");return Number(m)>2147483647?-1:f.setTimeout(c,m||0)}function Wl(c){c.g=kh(()=>{c.g=null,c.i&&(c.i=!1,Wl(c))},c.l);const m=c.h;c.h=null,c.m.apply(null,m)}class Ze extends V{constructor(m,v){super(),this.m=m,this.l=v,this.h=null,this.i=!1,this.g=null}j(m){this.h=arguments,this.g?this.i=!0:Wl(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function lr(c){V.call(this),this.h=c,this.g={}}b(lr,V);var To=[];function Eo(c){Pt(c.g,function(m,v){this.g.hasOwnProperty(v)&&sa(m)},c),c.g={}}lr.prototype.N=function(){lr.Z.N.call(this),Eo(this)},lr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cs=f.JSON.stringify,Uh=f.JSON.parse,tu=class{stringify(c){return f.JSON.stringify(c,void 0)}parse(c){return f.JSON.parse(c,void 0)}};function eu(){}function nu(){}var jn={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Pe(){x.call(this,"d")}b(Pe,x);function bn(){x.call(this,"c")}b(bn,x);var ce={},iu=null;function ra(){return iu=iu||new pe}ce.Ia="serverreachability";function su(c){x.call(this,ce.Ia,c)}b(su,x);function ri(c){const m=ra();Ne(m,new su(m))}ce.STAT_EVENT="statevent";function ur(c,m){x.call(this,ce.STAT_EVENT,c),this.stat=m}b(ur,x);function ge(c){const m=ra();Ne(m,new ur(m,c))}ce.Ja="timingevent";function ai(c,m){x.call(this,ce.Ja,c),this.size=m}b(ai,x);function oi(c,m){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){c()},m)}function Bn(){this.g=!0}Bn.prototype.ua=function(){this.g=!1};function Ph(c,m,v,A,P,q){c.info(function(){if(c.g)if(q){var tt="",At=q.split("&");for(let jt=0;jt<At.length;jt++){var he=At[jt].split("=");if(he.length>1){const re=he[0];he=he[1];const In=re.split("_");tt=In.length>=2&&In[1]=="type"?tt+(re+"="+he+"&"):tt+(re+"=redacted&")}}}else tt=null;else tt=q;return"XMLHTTP REQ ("+A+") [attempt "+P+"]: "+m+`
`+v+`
`+tt})}function ru(c,m,v,A,P,q,tt){c.info(function(){return"XMLHTTP RESP ("+A+") [ attempt "+P+"]: "+m+`
`+v+`
`+q+" "+tt})}function li(c,m,v,A){c.info(function(){return"XMLHTTP TEXT ("+m+"): "+Lh(c,v)+(A?" "+A:"")})}function cr(c,m){c.info(function(){return"TIMEOUT: "+m})}Bn.prototype.info=function(){};function Lh(c,m){if(!c.g)return m;if(!m)return null;try{const q=JSON.parse(m);if(q){for(c=0;c<q.length;c++)if(Array.isArray(q[c])){var v=q[c];if(!(v.length<2)){var A=v[1];if(Array.isArray(A)&&!(A.length<1)){var P=A[0];if(P!="noop"&&P!="stop"&&P!="close")for(let tt=1;tt<A.length;tt++)A[tt]=""}}}}return cs(q)}catch{return m}}var hr={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Ao={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},bo;function fr(){}b(fr,eu),fr.prototype.g=function(){return new XMLHttpRequest},bo=new fr;function Ui(c){return encodeURIComponent(String(c))}function au(c){var m=1;c=c.split(":");const v=[];for(;m>0&&c.length;)v.push(c.shift()),m--;return c.length&&v.push(c.join(":")),v}function qn(c,m,v,A){this.j=c,this.i=m,this.l=v,this.S=A||1,this.V=new lr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Hn}function Hn(){this.i=null,this.g="",this.h=!1}var ye={},Me={};function ui(c,m,v){c.M=1,c.A=dr(ve(m)),c.u=v,c.R=!0,aa(c,null)}function aa(c,m){c.F=Date.now(),ci(c),c.B=ve(c.A);var v=c.B,A=c.S;Array.isArray(A)||(A=[String(A)]),ca(v.i,"t",A),c.C=0,v=c.j.L,c.h=new Hn,c.g=Eu(c.j,v?m:null,!c.u),c.P>0&&(c.O=new Ze(_(c.Y,c,c.g),c.P)),m=c.V,v=c.g,A=c.ba;var P="readystatechange";Array.isArray(P)||(P&&(To[0]=P.toString()),P=To);for(let q=0;q<P.length;q++){const tt=se(v,P[q],A||m.handleEvent,!1,m.h||m);if(!tt)break;m.g[tt.key]=tt}m=c.J?M(c.J):{},c.u?(c.v||(c.v="POST"),m["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.B,c.v,c.u,m)):(c.v="GET",c.g.ea(c.B,c.v,null,m)),ri(),Ph(c.i,c.v,c.B,c.l,c.S,c.u)}qn.prototype.ba=function(c){c=c.target;const m=this.O;m&&Qn(c)==3?m.j():this.Y(c)},qn.prototype.Y=function(c){try{if(c==this.g)t:{const At=Qn(this.g),he=this.g.ya(),jt=this.g.ca();if(!(At<3)&&(At!=3||this.g&&(this.h.h||this.g.la()||Le(this.g)))){this.K||At!=4||he==7||(he==8||jt<=0?ri(3):ri(2)),hi(this);var m=this.g.ca();this.X=m;var v=zh(this);if(this.o=m==200,ru(this.i,this.v,this.B,this.l,this.S,At,m),this.o){if(this.U&&!this.L){e:{if(this.g){var A,P=this.g;if((A=P.g?P.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!w(A)){var q=A;break e}}q=null}if(c=q)li(this.i,this.l,c,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,fi(this,c);else{this.o=!1,this.m=3,ge(12),dn(this),Sn(this);break t}}if(this.R){c=!0;let re;for(;!this.K&&this.C<v.length;)if(re=lu(this,v),re==Me){At==4&&(this.m=4,ge(14),c=!1),li(this.i,this.l,null,"[Incomplete Response]");break}else if(re==ye){this.m=4,ge(15),li(this.i,this.l,v,"[Invalid Chunk]"),c=!1;break}else li(this.i,this.l,re,null),fi(this,re);if(ou(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),At!=4||v.length!=0||this.h.h||(this.m=1,ge(16),c=!1),this.o=this.o&&c,!c)li(this.i,this.l,v,"[Invalid Chunked Response]"),dn(this),Sn(this);else if(v.length>0&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.aa&&!tt.P&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+v.length),Lo(tt),tt.P=!0,ge(11))}}else li(this.i,this.l,v,null),fi(this,v);At==4&&dn(this),this.o&&!this.K&&(At==4?yu(this.j,this):(this.o=!1,ci(this)))}else Li(this.g),m==400&&v.indexOf("Unknown SID")>0?(this.m=3,ge(12)):(this.m=0,ge(13)),dn(this),Sn(this)}}}catch{}finally{}};function zh(c){if(!ou(c))return c.g.la();const m=Le(c.g);if(m==="")return"";let v="";const A=m.length,P=Qn(c.g)==4;if(!c.h.i){if(typeof TextDecoder>"u")return dn(c),Sn(c),"";c.h.i=new f.TextDecoder}for(let q=0;q<A;q++)c.h.h=!0,v+=c.h.i.decode(m[q],{stream:!(P&&q==A-1)});return m.length=0,c.h.g+=v,c.C=0,c.h.g}function ou(c){return c.g?c.v=="GET"&&c.M!=2&&c.j.Aa:!1}function lu(c,m){var v=c.C,A=m.indexOf(`
`,v);return A==-1?Me:(v=Number(m.substring(v,A)),isNaN(v)?ye:(A+=1,A+v>m.length?Me:(m=m.slice(A,A+v),c.C=A+v,m)))}qn.prototype.cancel=function(){this.K=!0,dn(this)};function ci(c){c.T=Date.now()+c.H,oa(c,c.H)}function oa(c,m){if(c.D!=null)throw Error("WatchDog timer not null");c.D=oi(_(c.aa,c),m)}function hi(c){c.D&&(f.clearTimeout(c.D),c.D=null)}qn.prototype.aa=function(){this.D=null;const c=Date.now();c-this.T>=0?(cr(this.i,this.B),this.M!=2&&(ri(),ge(17)),dn(this),this.m=2,Sn(this)):oa(this,this.T-c)};function Sn(c){c.j.I==0||c.K||yu(c.j,c)}function dn(c){hi(c);var m=c.O;m&&typeof m.dispose=="function"&&m.dispose(),c.O=null,Eo(c.V),c.g&&(m=c.g,c.g=null,m.abort(),m.dispose())}function fi(c,m){try{var v=c.j;if(v.I!=0&&(v.g==c||mi(v.h,c))){if(!c.L&&mi(v.h,c)&&v.I==3){try{var A=v.Ba.g.parse(m)}catch{A=null}if(Array.isArray(A)&&A.length==3){var P=A;if(P[0]==0){t:if(!v.v){if(v.g)if(v.g.F+3e3<c.F)pa(v),_s(v);else break t;Tr(v),ge(18)}}else v.xa=P[1],0<v.xa-v.K&&P[2]<37500&&v.F&&v.A==0&&!v.C&&(v.C=oi(_(v.Va,v),6e3));di(v.h)<=1&&v.ta&&(v.ta=void 0)}else Ti(v,11)}else if((c.L||v.g==c)&&pa(v),!w(m))for(P=v.Ba.g.parse(m),m=0;m<P.length;m++){let jt=P[m];const re=jt[0];if(!(re<=v.K))if(v.K=re,jt=jt[1],v.I==2)if(jt[0]=="c"){v.M=jt[1],v.ba=jt[2];const In=jt[3];In!=null&&(v.ka=In,v.j.info("VER="+v.ka));const Ei=jt[4];Ei!=null&&(v.za=Ei,v.j.info("SVER="+v.za));const Kn=jt[5];Kn!=null&&typeof Kn=="number"&&Kn>0&&(A=1.5*Kn,v.O=A,v.j.info("backChannelRequestTimeoutMs_="+A)),A=v;const Yn=c.g;if(Yn){const Er=Yn.g?Yn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Er){var q=A.h;q.g||Er.indexOf("spdy")==-1&&Er.indexOf("quic")==-1&&Er.indexOf("h2")==-1||(q.j=q.l,q.g=new Set,q.h&&(Ro(q,q.h),q.h=null))}if(A.G){const ga=Yn.g?Yn.g.getResponseHeader("X-HTTP-Session-Id"):null;ga&&(A.wa=ga,Gt(A.J,A.G,ga))}}v.I=3,v.l&&v.l.ra(),v.aa&&(v.T=Date.now()-c.F,v.j.info("Handshake RTT: "+v.T+"ms")),A=v;var tt=c;if(A.na=Tu(A,A.L?A.ba:null,A.W),tt.L){Io(A.h,tt);var At=tt,he=A.O;he&&(At.H=he),At.D&&(hi(At),ci(At)),A.g=tt}else pu(A);v.i.length>0&&vi(v)}else jt[0]!="stop"&&jt[0]!="close"||Ti(v,7);else v.I==3&&(jt[0]=="stop"||jt[0]=="close"?jt[0]=="stop"?Ti(v,7):Uo(v):jt[0]!="noop"&&v.l&&v.l.qa(jt),v.A=0)}}ri(4)}catch{}}var _e=class{constructor(c,m){this.g=c,this.map=m}};function So(c){this.l=c||10,f.PerformanceNavigationTiming?(c=f.performance.getEntriesByType("navigation"),c=c.length>0&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function wo(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function di(c){return c.h?1:c.g?c.g.size:0}function mi(c,m){return c.h?c.h==m:c.g?c.g.has(m):!1}function Ro(c,m){c.g?c.g.add(m):c.h=m}function Io(c,m){c.h&&c.h==m?c.h=null:c.g&&c.g.has(m)&&c.g.delete(m)}So.prototype.cancel=function(){if(this.i=Co(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function Co(c){if(c.h!=null)return c.i.concat(c.h.G);if(c.g!=null&&c.g.size!==0){let m=c.i;for(const v of c.g.values())m=m.concat(v.G);return m}return B(c.i)}var uu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function la(c,m){if(c){c=c.split("&");for(let v=0;v<c.length;v++){const A=c[v].indexOf("=");let P,q=null;A>=0?(P=c[v].substring(0,A),q=c[v].substring(A+1)):P=c[v],m(P,q?decodeURIComponent(q.replace(/\+/g," ")):"")}}}function mn(c){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let m;c instanceof mn?(this.l=c.l,Ve(this,c.j),this.o=c.o,this.g=c.g,hs(this,c.u),this.h=c.h,No(this,du(c.i)),this.m=c.m):c&&(m=String(c).match(uu))?(this.l=!1,Ve(this,m[1]||"",!0),this.o=pi(m[2]||""),this.g=pi(m[3]||"",!0),hs(this,m[4]),this.h=pi(m[5]||"",!0),No(this,m[6]||"",!0),this.m=pi(m[7]||"")):(this.l=!1,this.i=new ds(null,this.l))}mn.prototype.toString=function(){const c=[];var m=this.j;m&&c.push(mr(m,ua,!0),":");var v=this.g;return(v||m=="file")&&(c.push("//"),(m=this.o)&&c.push(mr(m,ua,!0),"@"),c.push(Ui(v).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.u,v!=null&&c.push(":",String(v))),(v=this.h)&&(this.g&&v.charAt(0)!="/"&&c.push("/"),c.push(mr(v,v.charAt(0)=="/"?Do:cu,!0))),(v=this.i.toString())&&c.push("?",v),(v=this.m)&&c.push("#",mr(v,hu)),c.join("")},mn.prototype.resolve=function(c){const m=ve(this);let v=!!c.j;v?Ve(m,c.j):v=!!c.o,v?m.o=c.o:v=!!c.g,v?m.g=c.g:v=c.u!=null;var A=c.h;if(v)hs(m,c.u);else if(v=!!c.h){if(A.charAt(0)!="/")if(this.g&&!this.h)A="/"+A;else{var P=m.h.lastIndexOf("/");P!=-1&&(A=m.h.slice(0,P+1)+A)}if(P=A,P==".."||P==".")A="";else if(P.indexOf("./")!=-1||P.indexOf("/.")!=-1){A=P.lastIndexOf("/",0)==0,P=P.split("/");const q=[];for(let tt=0;tt<P.length;){const At=P[tt++];At=="."?A&&tt==P.length&&q.push(""):At==".."?((q.length>1||q.length==1&&q[0]!="")&&q.pop(),A&&tt==P.length&&q.push("")):(q.push(At),A=!0)}A=q.join("/")}else A=P}return v?m.h=A:v=c.i.toString()!=="",v?No(m,du(c.i)):v=!!c.m,v&&(m.m=c.m),m};function ve(c){return new mn(c)}function Ve(c,m,v){c.j=v?pi(m,!0):m,c.j&&(c.j=c.j.replace(/:$/,""))}function hs(c,m){if(m){if(m=Number(m),isNaN(m)||m<0)throw Error("Bad port number "+m);c.u=m}else c.u=null}function No(c,m,v){m instanceof ds?(c.i=m,ha(c.i,c.l)):(v||(m=mr(m,fs)),c.i=new ds(m,c.l))}function Gt(c,m,v){c.i.set(m,v)}function dr(c){return Gt(c,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),c}function pi(c,m){return c?m?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function mr(c,m,v){return typeof c=="string"?(c=encodeURI(c).replace(m,sn),v&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function sn(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var ua=/[#\/\?@]/g,cu=/[#\?:]/g,Do=/[#\?]/g,fs=/[#\?@]/g,hu=/#/g;function ds(c,m){this.h=this.g=null,this.i=c||null,this.j=!!m}function rn(c){c.g||(c.g=new Map,c.h=0,c.i&&la(c.i,function(m,v){c.add(decodeURIComponent(m.replace(/\+/g," ")),v)}))}s=ds.prototype,s.add=function(c,m){rn(this),this.i=null,c=ms(this,c);let v=this.g.get(c);return v||this.g.set(c,v=[]),v.push(m),this.h+=1,this};function fu(c,m){rn(c),m=ms(c,m),c.g.has(m)&&(c.i=null,c.h-=c.g.get(m).length,c.g.delete(m))}function xo(c,m){return rn(c),m=ms(c,m),c.g.has(m)}s.forEach=function(c,m){rn(this),this.g.forEach(function(v,A){v.forEach(function(P){c.call(m,P,A,this)},this)},this)};function Oo(c,m){rn(c);let v=[];if(typeof m=="string")xo(c,m)&&(v=v.concat(c.g.get(ms(c,m))));else for(c=Array.from(c.g.values()),m=0;m<c.length;m++)v=v.concat(c[m]);return v}s.set=function(c,m){return rn(this),this.i=null,c=ms(this,c),xo(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[m]),this.h+=1,this},s.get=function(c,m){return c?(c=Oo(this,c),c.length>0?String(c[0]):m):m};function ca(c,m,v){fu(c,m),v.length>0&&(c.i=null,c.g.set(ms(c,m),B(v)),c.h+=v.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],m=Array.from(this.g.keys());for(let A=0;A<m.length;A++){var v=m[A];const P=Ui(v);v=Oo(this,v);for(let q=0;q<v.length;q++){let tt=P;v[q]!==""&&(tt+="="+Ui(v[q])),c.push(tt)}}return this.i=c.join("&")};function du(c){const m=new ds;return m.i=c.i,c.g&&(m.g=new Map(c.g),m.h=c.h),m}function ms(c,m){return m=String(m),c.j&&(m=m.toLowerCase()),m}function ha(c,m){m&&!c.j&&(rn(c),c.i=null,c.g.forEach(function(v,A){const P=A.toLowerCase();A!=P&&(fu(this,A),ca(this,P,v))},c)),c.j=m}function Fn(c,m){const v=new Bn;if(f.Image){const A=new Image;A.onload=E(wn,v,"TestLoadImage: loaded",!0,m,A),A.onerror=E(wn,v,"TestLoadImage: error",!1,m,A),A.onabort=E(wn,v,"TestLoadImage: abort",!1,m,A),A.ontimeout=E(wn,v,"TestLoadImage: timeout",!1,m,A),f.setTimeout(function(){A.ontimeout&&A.ontimeout()},1e4),A.src=c}else m(!1)}function Mo(c,m){const v=new Bn,A=new AbortController,P=setTimeout(()=>{A.abort(),wn(v,"TestPingServer: timeout",!1,m)},1e4);fetch(c,{signal:A.signal}).then(q=>{clearTimeout(P),q.ok?wn(v,"TestPingServer: ok",!0,m):wn(v,"TestPingServer: server error",!1,m)}).catch(()=>{clearTimeout(P),wn(v,"TestPingServer: error",!1,m)})}function wn(c,m,v,A,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),A(v)}catch{}}function ps(){this.g=new tu}function gi(c){this.i=c.Sb||null,this.h=c.ab||!1}b(gi,eu),gi.prototype.g=function(){return new pr(this.i,this.h)};function pr(c,m){pe.call(this),this.H=c,this.o=m,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}b(pr,pe),s=pr.prototype,s.open=function(c,m){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=c,this.D=m,this.readyState=1,Gn(this)},s.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const m={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};c&&(m.body=c),(this.H||f).fetch(new Request(this.D,m)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,gs(this)),this.readyState=0},s.Pa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,Gn(this)),this.g&&(this.readyState=3,Gn(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;fa(this)}else c.text().then(this.Oa.bind(this),this.ga.bind(this))};function fa(c){c.j.read().then(c.Ma.bind(c)).catch(c.ga.bind(c))}s.Ma=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var m=c.value?c.value:new Uint8Array(0);(m=this.B.decode(m,{stream:!c.done}))&&(this.response=this.responseText+=m)}c.done?gs(this):Gn(this),this.readyState==3&&fa(this)}},s.Oa=function(c){this.g&&(this.response=this.responseText=c,gs(this))},s.Na=function(c){this.g&&(this.response=c,gs(this))},s.ga=function(){this.g&&gs(this)};function gs(c){c.readyState=4,c.l=null,c.j=null,c.B=null,Gn(c)}s.setRequestHeader=function(c,m){this.A.append(c,m)},s.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],m=this.h.entries();for(var v=m.next();!v.done;)v=v.value,c.push(v[0]+": "+v[1]),v=m.next();return c.join(`\r
`)};function Gn(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(pr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Rn(c){let m="";return Pt(c,function(v,A){m+=A,m+=":",m+=v,m+=`\r
`}),m}function gr(c,m,v){t:{for(A in v){var A=!1;break t}A=!0}A||(v=Rn(v),typeof c=="string"?v!=null&&Ui(v):Gt(c,m,v))}function Yt(c){pe.call(this),this.headers=new Map,this.L=c||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}b(Yt,pe);var yi=/^https?$/i,Vo=["POST","PUT"];s=Yt.prototype,s.Fa=function(c){this.H=c},s.ea=function(c,m,v,A){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);m=m?m.toUpperCase():"GET",this.D=c,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():bo.g(),this.g.onreadystatechange=N(_(this.Ca,this));try{this.B=!0,this.g.open(m,String(c),!0),this.B=!1}catch(q){yr(this,q);return}if(c=v||"",v=new Map(this.headers),A)if(Object.getPrototypeOf(A)===Object.prototype)for(var P in A)v.set(P,A[P]);else if(typeof A.keys=="function"&&typeof A.get=="function")for(const q of A.keys())v.set(q,A.get(q));else throw Error("Unknown input type for opt_headers: "+String(A));A=Array.from(v.keys()).find(q=>q.toLowerCase()=="content-type"),P=f.FormData&&c instanceof f.FormData,!(Array.prototype.indexOf.call(Vo,m,void 0)>=0)||A||P||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[q,tt]of v)this.g.setRequestHeader(q,tt);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(c),this.v=!1}catch(q){yr(this,q)}};function yr(c,m){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=m,c.o=5,ko(c),Pi(c)}function ko(c){c.A||(c.A=!0,Ne(c,"complete"),Ne(c,"error"))}s.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=c||7,Ne(this,"complete"),Ne(this,"abort"),Pi(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Pi(this,!0)),Yt.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?_r(this):this.Xa())},s.Xa=function(){_r(this)};function _r(c){if(c.h&&typeof u<"u"){if(c.v&&Qn(c)==4)setTimeout(c.Ca.bind(c),0);else if(Ne(c,"readystatechange"),Qn(c)==4){c.h=!1;try{const q=c.ca();t:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var m=!0;break t;default:m=!1}var v;if(!(v=m)){var A;if(A=q===0){let tt=String(c.D).match(uu)[1]||null;!tt&&f.self&&f.self.location&&(tt=f.self.location.protocol.slice(0,-1)),A=!yi.test(tt?tt.toLowerCase():"")}v=A}if(v)Ne(c,"complete"),Ne(c,"success");else{c.o=6;try{var P=Qn(c)>2?c.g.statusText:""}catch{P=""}c.l=P+" ["+c.ca()+"]",ko(c)}}finally{Pi(c)}}}}function Pi(c,m){if(c.g){c.m&&(clearTimeout(c.m),c.m=null);const v=c.g;c.g=null,m||Ne(c,"ready");try{v.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function Qn(c){return c.g?c.g.readyState:0}s.ca=function(){try{return Qn(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(c){if(this.g){var m=this.g.responseText;return c&&m.indexOf(c)==0&&(m=m.substring(c.length)),Uh(m)}};function Le(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.F){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function Li(c){const m={};c=(c.g&&Qn(c)>=2&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let A=0;A<c.length;A++){if(w(c[A]))continue;var v=au(c[A]);const P=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const q=m[P]||[];m[P]=q,q.push(v)}Ft(m,function(A){return A.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function _i(c,m,v){return v&&v.internalChannelParams&&v.internalChannelParams[c]||m}function ys(c){this.za=0,this.i=[],this.j=new Bn,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=_i("failFast",!1,c),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=_i("baseRetryDelayMs",5e3,c),this.Za=_i("retryDelaySeedMs",1e4,c),this.Ta=_i("forwardChannelMaxRetries",2,c),this.va=_i("forwardChannelRequestTimeoutMs",2e4,c),this.ma=c&&c.xmlHttpFactory||void 0,this.Ua=c&&c.Rb||void 0,this.Aa=c&&c.useFetchStreams||!1,this.O=void 0,this.L=c&&c.supportsCrossDomainXhr||!1,this.M="",this.h=new So(c&&c.concurrentRequestLimit),this.Ba=new ps,this.S=c&&c.fastHandshake||!1,this.R=c&&c.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=c&&c.Pb||!1,c&&c.ua&&this.j.ua(),c&&c.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&c&&c.detectBufferingProxy||!1,this.ia=void 0,c&&c.longPollingTimeout&&c.longPollingTimeout>0&&(this.ia=c.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=ys.prototype,s.ka=8,s.I=1,s.connect=function(c,m,v,A){ge(0),this.W=c,this.H=m||{},v&&A!==void 0&&(this.H.OSID=v,this.H.OAID=A),this.F=this.X,this.J=Tu(this,null,this.W),vi(this)};function Uo(c){if(da(c),c.I==3){var m=c.V++,v=ve(c.J);if(Gt(v,"SID",c.M),Gt(v,"RID",m),Gt(v,"TYPE","terminate"),vr(c,v),m=new qn(c,c.j,m),m.M=2,m.A=dr(ve(v)),v=!1,f.navigator&&f.navigator.sendBeacon)try{v=f.navigator.sendBeacon(m.A.toString(),"")}catch{}!v&&f.Image&&(new Image().src=m.A,v=!0),v||(m.g=Eu(m.j,null),m.g.ea(m.A)),m.F=Date.now(),ci(m)}vu(c)}function _s(c){c.g&&(Lo(c),c.g.cancel(),c.g=null)}function da(c){_s(c),c.v&&(f.clearTimeout(c.v),c.v=null),pa(c),c.h.cancel(),c.m&&(typeof c.m=="number"&&f.clearTimeout(c.m),c.m=null)}function vi(c){if(!wo(c.h)&&!c.m){c.m=!0;var m=c.Ea;Ht||S(),Rt||(Ht(),Rt=!0),C.add(m,c),c.D=0}}function ma(c,m){return di(c.h)>=c.h.j-(c.m?1:0)?!1:c.m?(c.i=m.G.concat(c.i),!0):c.I==1||c.I==2||c.D>=(c.Sa?0:c.Ta)?!1:(c.m=oi(_(c.Ea,c,m),_u(c,c.D)),c.D++,!0)}s.Ea=function(c){if(this.m)if(this.m=null,this.I==1){if(!c){this.V=Math.floor(Math.random()*1e5),c=this.V++;const P=new qn(this,this.j,c);let q=this.o;if(this.U&&(q?(q=M(q),nt(q,this.U)):q=this.U),this.u!==null||this.R||(P.J=q,q=null),this.S)t:{for(var m=0,v=0;v<this.i.length;v++){e:{var A=this.i[v];if("__data__"in A.map&&(A=A.map.__data__,typeof A=="string")){A=A.length;break e}A=void 0}if(A===void 0)break;if(m+=A,m>4096){m=v;break t}if(m===4096||v===this.i.length-1){m=v+1;break t}}m=1e3}else m=1e3;m=mu(this,P,m),v=ve(this.J),Gt(v,"RID",c),Gt(v,"CVER",22),this.G&&Gt(v,"X-HTTP-Session-Id",this.G),vr(this,v),q&&(this.R?m="headers="+Ui(Rn(q))+"&"+m:this.u&&gr(v,this.u,q)),Ro(this.h,P),this.Ra&&Gt(v,"TYPE","init"),this.S?(Gt(v,"$req",m),Gt(v,"SID","null"),P.U=!0,ui(P,v,null)):ui(P,v,m),this.I=2}}else this.I==3&&(c?Po(this,c):this.i.length==0||wo(this.h)||Po(this))};function Po(c,m){var v;m?v=m.l:v=c.V++;const A=ve(c.J);Gt(A,"SID",c.M),Gt(A,"RID",v),Gt(A,"AID",c.K),vr(c,A),c.u&&c.o&&gr(A,c.u,c.o),v=new qn(c,c.j,v,c.D+1),c.u===null&&(v.J=c.o),m&&(c.i=m.G.concat(c.i)),m=mu(c,v,1e3),v.H=Math.round(c.va*.5)+Math.round(c.va*.5*Math.random()),Ro(c.h,v),ui(v,A,m)}function vr(c,m){c.H&&Pt(c.H,function(v,A){Gt(m,A,v)}),c.l&&Pt({},function(v,A){Gt(m,A,v)})}function mu(c,m,v){v=Math.min(c.i.length,v);const A=c.l?_(c.l.Ka,c.l,c):null;t:{var P=c.i;let At=-1;for(;;){const he=["count="+v];At==-1?v>0?(At=P[0].g,he.push("ofs="+At)):At=0:he.push("ofs="+At);let jt=!0;for(let re=0;re<v;re++){var q=P[re].g;const In=P[re].map;if(q-=At,q<0)At=Math.max(0,P[re].g-100),jt=!1;else try{q="req"+q+"_"||"";try{var tt=In instanceof Map?In:Object.entries(In);for(const[Ei,Kn]of tt){let Yn=Kn;p(Kn)&&(Yn=cs(Kn)),he.push(q+Ei+"="+encodeURIComponent(Yn))}}catch(Ei){throw he.push(q+"type="+encodeURIComponent("_badmap")),Ei}}catch{A&&A(In)}}if(jt){tt=he.join("&");break t}}tt=void 0}return c=c.i.splice(0,v),m.G=c,tt}function pu(c){if(!c.g&&!c.v){c.Y=1;var m=c.Da;Ht||S(),Rt||(Ht(),Rt=!0),C.add(m,c),c.A=0}}function Tr(c){return c.g||c.v||c.A>=3?!1:(c.Y++,c.v=oi(_(c.Da,c),_u(c,c.A)),c.A++,!0)}s.Da=function(){if(this.v=null,gu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var c=4*this.T;this.j.info("BP detection timer enabled: "+c),this.B=oi(_(this.Wa,this),c)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ge(10),_s(this),gu(this))};function Lo(c){c.B!=null&&(f.clearTimeout(c.B),c.B=null)}function gu(c){c.g=new qn(c,c.j,"rpc",c.Y),c.u===null&&(c.g.J=c.o),c.g.P=0;var m=ve(c.na);Gt(m,"RID","rpc"),Gt(m,"SID",c.M),Gt(m,"AID",c.K),Gt(m,"CI",c.F?"0":"1"),!c.F&&c.ia&&Gt(m,"TO",c.ia),Gt(m,"TYPE","xmlhttp"),vr(c,m),c.u&&c.o&&gr(m,c.u,c.o),c.O&&(c.g.H=c.O);var v=c.g;c=c.ba,v.M=1,v.A=dr(ve(m)),v.u=null,v.R=!0,aa(v,c)}s.Va=function(){this.C!=null&&(this.C=null,_s(this),Tr(this),ge(19))};function pa(c){c.C!=null&&(f.clearTimeout(c.C),c.C=null)}function yu(c,m){var v=null;if(c.g==m){pa(c),Lo(c),c.g=null;var A=2}else if(mi(c.h,m))v=m.G,Io(c.h,m),A=1;else return;if(c.I!=0){if(m.o)if(A==1){v=m.u?m.u.length:0,m=Date.now()-m.F;var P=c.D;A=ra(),Ne(A,new ai(A,v)),vi(c)}else pu(c);else if(P=m.m,P==3||P==0&&m.X>0||!(A==1&&ma(c,m)||A==2&&Tr(c)))switch(v&&v.length>0&&(m=c.h,m.i=m.i.concat(v)),P){case 1:Ti(c,5);break;case 4:Ti(c,10);break;case 3:Ti(c,6);break;default:Ti(c,2)}}}function _u(c,m){let v=c.Qa+Math.floor(Math.random()*c.Za);return c.isActive()||(v*=2),v*m}function Ti(c,m){if(c.j.info("Error code "+m),m==2){var v=_(c.bb,c),A=c.Ua;const P=!A;A=new mn(A||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||Ve(A,"https"),dr(A),P?Fn(A.toString(),v):Mo(A.toString(),v)}else ge(2);c.I=0,c.l&&c.l.pa(m),vu(c),da(c)}s.bb=function(c){c?(this.j.info("Successfully pinged google.com"),ge(2)):(this.j.info("Failed to ping google.com"),ge(1))};function vu(c){if(c.I=0,c.ja=[],c.l){const m=Co(c.h);(m.length!=0||c.i.length!=0)&&(Z(c.ja,m),Z(c.ja,c.i),c.h.i.length=0,B(c.i),c.i.length=0),c.l.oa()}}function Tu(c,m,v){var A=v instanceof mn?ve(v):new mn(v);if(A.g!="")m&&(A.g=m+"."+A.g),hs(A,A.u);else{var P=f.location;A=P.protocol,m=m?m+"."+P.hostname:P.hostname,P=+P.port;const q=new mn(null);A&&Ve(q,A),m&&(q.g=m),P&&hs(q,P),v&&(q.h=v),A=q}return v=c.G,m=c.wa,v&&m&&Gt(A,v,m),Gt(A,"VER",c.ka),vr(c,A),A}function Eu(c,m,v){if(m&&!c.L)throw Error("Can't create secondary domain capable XhrIo object.");return m=c.Aa&&!c.ma?new Yt(new gi({ab:v})):new Yt(c.ma),m.Fa(c.L),m}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Au(){}s=Au.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function vs(){}vs.prototype.g=function(c,m){return new We(c,m)};function We(c,m){pe.call(this),this.g=new ys(m),this.l=c,this.h=m&&m.messageUrlParams||null,c=m&&m.messageHeaders||null,m&&m.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=m&&m.initMessageHeaders||null,m&&m.messageContentType&&(c?c["X-WebChannel-Content-Type"]=m.messageContentType:c={"X-WebChannel-Content-Type":m.messageContentType}),m&&m.sa&&(c?c["X-WebChannel-Client-Profile"]=m.sa:c={"X-WebChannel-Client-Profile":m.sa}),this.g.U=c,(c=m&&m.Qb)&&!w(c)&&(this.g.u=c),this.A=m&&m.supportsCrossDomainXhr||!1,this.v=m&&m.sendRawJson||!1,(m=m&&m.httpSessionIdParam)&&!w(m)&&(this.g.G=m,c=this.h,c!==null&&m in c&&(c=this.h,m in c&&delete c[m])),this.j=new zi(this)}b(We,pe),We.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},We.prototype.close=function(){Uo(this.g)},We.prototype.o=function(c){var m=this.g;if(typeof c=="string"){var v={};v.__data__=c,c=v}else this.v&&(v={},v.__data__=cs(c),c=v);m.i.push(new _e(m.Ya++,c)),m.I==3&&vi(m)},We.prototype.N=function(){this.g.l=null,delete this.j,Uo(this.g),delete this.g,We.Z.N.call(this)};function bu(c){Pe.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var m=c.__sm__;if(m){t:{for(const v in m){c=v;break t}c=void 0}(this.i=c)&&(c=this.i,m=m!==null&&c in m?m[c]:void 0),this.data=m}else this.data=c}b(bu,Pe);function Su(){bn.call(this),this.status=1}b(Su,bn);function zi(c){this.g=c}b(zi,Au),zi.prototype.ra=function(){Ne(this.g,"a")},zi.prototype.qa=function(c){Ne(this.g,new bu(c))},zi.prototype.pa=function(c){Ne(this.g,new Su)},zi.prototype.oa=function(){Ne(this.g,"b")},vs.prototype.createWebChannel=vs.prototype.g,We.prototype.send=We.prototype.o,We.prototype.open=We.prototype.m,We.prototype.close=We.prototype.close,KT=function(){return new vs},QT=function(){return ra()},GT=ce,cm={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},hr.NO_ERROR=0,hr.TIMEOUT=8,hr.HTTP_ERROR=6,zc=hr,Ao.COMPLETE="complete",FT=Ao,nu.EventType=jn,jn.OPEN="a",jn.CLOSE="b",jn.ERROR="c",jn.MESSAGE="d",pe.prototype.listen=pe.prototype.J,bl=nu,Yt.prototype.listenOnce=Yt.prototype.K,Yt.prototype.getLastError=Yt.prototype.Ha,Yt.prototype.getLastErrorCode=Yt.prototype.ya,Yt.prototype.getStatus=Yt.prototype.ca,Yt.prototype.getResponseJson=Yt.prototype.La,Yt.prototype.getResponseText=Yt.prototype.la,Yt.prototype.send=Yt.prototype.ea,Yt.prototype.setWithCredentials=Yt.prototype.Fa,HT=Yt}).apply(typeof Nc<"u"?Nc:typeof self<"u"?self:typeof window<"u"?window:{});const Vv="@firebase/firestore",kv="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Xe.UNAUTHENTICATED=new Xe(null),Xe.GOOGLE_CREDENTIALS=new Xe("google-credentials-uid"),Xe.FIRST_PARTY=new Xe("first-party-uid"),Xe.MOCK_USER=new Xe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ho="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new ph("@firebase/firestore");function Qa(){return Fr.logLevel}function st(s,...t){if(Fr.logLevel<=xt.DEBUG){const n=t.map(Bm);Fr.debug(`Firestore (${ho}): ${s}`,...n)}}function os(s,...t){if(Fr.logLevel<=xt.ERROR){const n=t.map(Bm);Fr.error(`Firestore (${ho}): ${s}`,...n)}}function so(s,...t){if(Fr.logLevel<=xt.WARN){const n=t.map(Bm);Fr.warn(`Firestore (${ho}): ${s}`,...n)}}function Bm(s){if(typeof s=="string")return s;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(s,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,YT(s,r,n)}function YT(s,t,n){let r=`FIRESTORE (${ho}) INTERNAL ASSERTION FAILED: ${t} (ID: ${s.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw os(r),new Error(r)}function qt(s,t,n,r){let o="Unexpected state";typeof n=="string"?o=n:r=n,s||YT(t,o,r)}function Tt(s,t){return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class it extends zn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XT{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class vI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n(Xe.UNAUTHENTICATED)))}shutdown(){}}class TI{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class EI{constructor(t){this.t=t,this.currentUser=Xe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){qt(this.o===void 0,42304);let r=this.i;const o=g=>this.i!==r?(r=this.i,n(g)):Promise.resolve();let u=new Br;this.o=()=>{this.i++,this.currentUser=this.u(),u.resolve(),u=new Br,t.enqueueRetryable((()=>o(this.currentUser)))};const f=()=>{const g=u;t.enqueueRetryable((async()=>{await g.promise,await o(this.currentUser)}))},p=g=>{st("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=g,this.o&&(this.auth.addAuthTokenListener(this.o),f())};this.t.onInit((g=>p(g))),setTimeout((()=>{if(!this.auth){const g=this.t.getImmediate({optional:!0});g?p(g):(st("FirebaseAuthCredentialsProvider","Auth not yet detected"),u.resolve(),u=new Br)}}),0),f()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==t?(st("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(qt(typeof r.accessToken=="string",31837,{l:r}),new XT(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return qt(t===null||typeof t=="string",2055,{h:t}),new Xe(t)}}class AI{constructor(t,n,r){this.P=t,this.T=n,this.I=r,this.type="FirstParty",this.user=Xe.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class bI{constructor(t,n,r){this.P=t,this.T=n,this.I=r}getToken(){return Promise.resolve(new AI(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable((()=>n(Xe.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Uv{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SI{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Zn(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){qt(this.o===void 0,3512);const r=u=>{u.error!=null&&st("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${u.error.message}`);const f=u.token!==this.m;return this.m=u.token,st("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?n(u.token):Promise.resolve()};this.o=u=>{t.enqueueRetryable((()=>r(u)))};const o=u=>{st("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=u,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((u=>o(u))),setTimeout((()=>{if(!this.appCheck){const u=this.V.getImmediate({optional:!0});u?o(u):st("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Uv(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((n=>n?(qt(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Uv(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wI(s){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(s);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let r=0;r<s;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const o=wI(40);for(let u=0;u<o.length;++u)r.length<20&&o[u]<n&&(r+=t.charAt(o[u]%62))}return r}}function Ot(s,t){return s<t?-1:s>t?1:0}function hm(s,t){const n=Math.min(s.length,t.length);for(let r=0;r<n;r++){const o=s.charAt(r),u=t.charAt(r);if(o!==u)return Kd(o)===Kd(u)?Ot(o,u):Kd(o)?1:-1}return Ot(s.length,t.length)}const RI=55296,II=57343;function Kd(s){const t=s.charCodeAt(0);return t>=RI&&t<=II}function ro(s,t,n){return s.length===t.length&&s.every(((r,o)=>n(r,t[o])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="__name__";class Ri{constructor(t,n,r){n===void 0?n=0:n>t.length&&mt(637,{offset:n,range:t.length}),r===void 0?r=t.length-n:r>t.length-n&&mt(1746,{length:r,range:t.length-n}),this.segments=t,this.offset=n,this.len=r}get length(){return this.len}isEqual(t){return Ri.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof Ri?t.forEach((r=>{n.push(r)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,r=this.limit();n<r;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const r=Math.min(t.length,n.length);for(let o=0;o<r;o++){const u=Ri.compareSegments(t.get(o),n.get(o));if(u!==0)return u}return Ot(t.length,n.length)}static compareSegments(t,n){const r=Ri.isNumericId(t),o=Ri.isNumericId(n);return r&&!o?-1:!r&&o?1:r&&o?Ri.extractNumericId(t).compare(Ri.extractNumericId(n)):hm(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return $s.fromString(t.substring(4,t.length-2))}}class Wt extends Ri{construct(t,n,r){return new Wt(t,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const r of t){if(r.indexOf("//")>=0)throw new it(X.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((o=>o.length>0)))}return new Wt(n)}static emptyPath(){return new Wt([])}}const CI=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends Ri{construct(t,n,r){return new Fe(t,n,r)}static isValidIdentifier(t){return CI.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Pv}static keyField(){return new Fe([Pv])}static fromServerFormat(t){const n=[];let r="",o=0;const u=()=>{if(r.length===0)throw new it(X.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let f=!1;for(;o<t.length;){const p=t[o];if(p==="\\"){if(o+1===t.length)throw new it(X.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const g=t[o+1];if(g!=="\\"&&g!=="."&&g!=="`")throw new it(X.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=g,o+=2}else p==="`"?(f=!f,o++):p!=="."||f?(r+=p,o++):(u(),o++)}if(u(),f)throw new it(X.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(t){this.path=t}static fromPath(t){return new ct(Wt.fromString(t))}static fromName(t){return new ct(Wt.fromString(t).popFirst(5))}static empty(){return new ct(Wt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Wt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Wt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new ct(new Wt(t.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $T(s,t,n){if(!n)throw new it(X.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${t}.`)}function NI(s,t,n,r){if(t===!0&&r===!0)throw new it(X.INVALID_ARGUMENT,`${s} and ${n} cannot be used together.`)}function Lv(s){if(!ct.isDocumentKey(s))throw new it(X.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function zv(s){if(ct.isDocumentKey(s))throw new it(X.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${s} has ${s.length}.`)}function JT(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function vh(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const t=(function(r){return r.constructor?r.constructor.name:null})(s);return t?`a custom ${t} object`:"an object"}}return typeof s=="function"?"a function":mt(12329,{type:typeof s})}function Nl(s,t){if("_delegate"in s&&(s=s._delegate),!(s instanceof t)){if(t.name===s.constructor.name)throw new it(X.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vh(s);throw new it(X.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(s,t){const n={typeString:s};return t&&(n.value=t),n}function Yl(s,t){if(!JT(s))throw new it(X.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const o=t[r].typeString,u="value"in t[r]?{value:t[r].value}:void 0;if(!(r in s)){n=`JSON missing required field: '${r}'`;break}const f=s[r];if(o&&typeof f!==o){n=`JSON field '${r}' must be a ${o}.`;break}if(u!==void 0&&f!==u.value){n=`Expected '${r}' field to equal '${u.value}'`;break}}if(n)throw new it(X.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jv=-62135596800,Bv=1e6;class ne{static now(){return ne.fromMillis(Date.now())}static fromDate(t){return ne.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),r=Math.floor((t-1e3*n)*Bv);return new ne(n,r)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new it(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new it(X.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<jv)throw new it(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new it(X.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Bv}_compareTo(t){return this.seconds===t.seconds?Ot(this.nanoseconds,t.nanoseconds):Ot(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(Yl(t,ne._jsonSchema))return new ne(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-jv;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ne._jsonSchemaVersion="firestore/timestamp/1.0",ne._jsonSchema={type:Re("string",ne._jsonSchemaVersion),seconds:Re("number"),nanoseconds:Re("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{static fromTimestamp(t){return new _t(t)}static min(){return new _t(new ne(0,0))}static max(){return new _t(new ne(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ul=-1;function DI(s,t){const n=s.toTimestamp().seconds,r=s.toTimestamp().nanoseconds+1,o=_t.fromTimestamp(r===1e9?new ne(n+1,0):new ne(n,r));return new Ws(o,ct.empty(),t)}function xI(s){return new Ws(s.readTime,s.key,Ul)}class Ws{constructor(t,n,r){this.readTime=t,this.documentKey=n,this.largestBatchId=r}static min(){return new Ws(_t.min(),ct.empty(),Ul)}static max(){return new Ws(_t.max(),ct.empty(),Ul)}}function OI(s,t){let n=s.readTime.compareTo(t.readTime);return n!==0?n:(n=ct.comparator(s.documentKey,t.documentKey),n!==0?n:Ot(s.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MI="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VI{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fo(s){if(s.code!==X.FAILED_PRECONDITION||s.message!==MI)throw s;st("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&mt(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new $(((r,o)=>{this.nextCallback=u=>{this.wrapSuccess(t,u).next(r,o)},this.catchCallback=u=>{this.wrapFailure(n,u).next(r,o)}}))}toPromise(){return new Promise(((t,n)=>{this.next(t,n)}))}wrapUserFunction(t){try{const n=t();return n instanceof $?n:$.resolve(n)}catch(n){return $.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction((()=>t(n))):$.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction((()=>t(n))):$.reject(n)}static resolve(t){return new $(((n,r)=>{n(t)}))}static reject(t){return new $(((n,r)=>{r(t)}))}static waitFor(t){return new $(((n,r)=>{let o=0,u=0,f=!1;t.forEach((p=>{++o,p.next((()=>{++u,f&&u===o&&n()}),(g=>r(g)))})),f=!0,u===o&&n()}))}static or(t){let n=$.resolve(!1);for(const r of t)n=n.next((o=>o?$.resolve(o):r()));return n}static forEach(t,n){const r=[];return t.forEach(((o,u)=>{r.push(n.call(this,o,u))})),this.waitFor(r)}static mapArray(t,n){return new $(((r,o)=>{const u=t.length,f=new Array(u);let p=0;for(let g=0;g<u;g++){const _=g;n(t[_]).next((E=>{f[_]=E,++p,p===u&&r(f)}),(E=>o(E)))}}))}static doWhile(t,n){return new $(((r,o)=>{const u=()=>{t()===!0?n().next((()=>{u()}),o):r()};u()}))}}function kI(s){const t=s.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function mo(s){return s.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ue&&this.ue(t),t}}Th.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hm=-1;function Eh(s){return s==null}function Wc(s){return s===0&&1/s==-1/0}function UI(s){return typeof s=="number"&&Number.isInteger(s)&&!Wc(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZT="";function PI(s){let t="";for(let n=0;n<s.length;n++)t.length>0&&(t=qv(t)),t=LI(s.get(n),t);return qv(t)}function LI(s,t){let n=t;const r=s.length;for(let o=0;o<r;o++){const u=s.charAt(o);switch(u){case"\0":n+="";break;case ZT:n+="";break;default:n+=u}}return n}function qv(s){return s+ZT+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hv(s){let t=0;for(const n in s)Object.prototype.hasOwnProperty.call(s,n)&&t++;return t}function Jr(s,t){for(const n in s)Object.prototype.hasOwnProperty.call(s,n)&&t(n,s[n])}function WT(s){for(const t in s)if(Object.prototype.hasOwnProperty.call(s,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(t,n){this.comparator=t,this.root=n||He.EMPTY}insert(t,n){return new oe(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,He.BLACK,null,null))}remove(t){return new oe(this.comparator,this.root.remove(t,this.comparator).copy(null,null,He.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(t){let n=0,r=this.root;for(;!r.isEmpty();){const o=this.comparator(t,r.key);if(o===0)return n+r.left.size;o<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((n,r)=>(t(n,r),!1)))}toString(){const t=[];return this.inorderTraversal(((n,r)=>(t.push(`${n}:${r}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Dc(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Dc(this.root,t,this.comparator,!1)}getReverseIterator(){return new Dc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Dc(this.root,t,this.comparator,!0)}}class Dc{constructor(t,n,r,o){this.isReverse=o,this.nodeStack=[];let u=1;for(;!t.isEmpty();)if(u=n?r(t.key,n):1,n&&o&&(u*=-1),u<0)t=this.isReverse?t.left:t.right;else{if(u===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class He{constructor(t,n,r,o,u){this.key=t,this.value=n,this.color=r??He.RED,this.left=o??He.EMPTY,this.right=u??He.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,r,o,u){return new He(t??this.key,n??this.value,r??this.color,o??this.left,u??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let o=this;const u=r(t,o.key);return o=u<0?o.copy(null,null,null,o.left.insert(t,n,r),null):u===0?o.copy(null,n,null,null,null):o.copy(null,null,null,null,o.right.insert(t,n,r)),o.fixUp()}removeMin(){if(this.left.isEmpty())return He.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let r,o=this;if(n(t,o.key)<0)o.left.isEmpty()||o.left.isRed()||o.left.left.isRed()||(o=o.moveRedLeft()),o=o.copy(null,null,null,o.left.remove(t,n),null);else{if(o.left.isRed()&&(o=o.rotateRight()),o.right.isEmpty()||o.right.isRed()||o.right.left.isRed()||(o=o.moveRedRight()),n(t,o.key)===0){if(o.right.isEmpty())return He.EMPTY;r=o.right.min(),o=o.copy(r.key,r.value,null,null,o.right.removeMin())}o=o.copy(null,null,null,null,o.right.remove(t,n))}return o.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,He.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,He.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw mt(43730,{key:this.key,value:this.value});if(this.right.isRed())throw mt(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw mt(27949);return t+(this.isRed()?0:1)}}He.EMPTY=null,He.RED=!0,He.BLACK=!1;He.EMPTY=new class{constructor(){this.size=0}get key(){throw mt(57766)}get value(){throw mt(16141)}get color(){throw mt(16727)}get left(){throw mt(29726)}get right(){throw mt(36894)}copy(t,n,r,o,u){return this}insert(t,n,r){return new He(t,n)}remove(t,n){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe{constructor(t){this.comparator=t,this.data=new oe(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((n,r)=>(t(n),!1)))}forEachInRange(t,n){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const o=r.getNext();if(this.comparator(o.key,t[1])>=0)return;n(o.key)}}forEachWhile(t,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new Fv(this.data.getIterator())}getIteratorFrom(t){return new Fv(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach((r=>{n=n.add(r)})),n}isEqual(t){if(!(t instanceof Oe)||this.size!==t.size)return!1;const n=this.data.getIterator(),r=t.data.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=r.getNext().key;if(this.comparator(o,u)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((n=>{t.push(n)})),t}toString(){const t=[];return this.forEach((n=>t.push(n))),"SortedSet("+t.toString()+")"}copy(t){const n=new Oe(this.comparator);return n.data=t,n}}class Fv{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(t){this.fields=t,t.sort(Fe.comparator)}static empty(){return new ti([])}unionWith(t){let n=new Oe(Fe.comparator);for(const r of this.fields)n=n.add(r);for(const r of t)n=n.add(r);return new ti(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return ro(this.fields,t.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(t){this.binaryString=t}static fromBase64String(t){const n=(function(o){try{return atob(o)}catch(u){throw typeof DOMException<"u"&&u instanceof DOMException?new tE("Invalid base64 string: "+u):u}})(t);return new Qe(n)}static fromUint8Array(t){const n=(function(o){let u="";for(let f=0;f<o.length;++f)u+=String.fromCharCode(o[f]);return u})(t);return new Qe(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let o=0;o<n.length;o++)r[o]=n.charCodeAt(o);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Ot(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const zI=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tr(s){if(qt(!!s,39018),typeof s=="string"){let t=0;const n=zI.exec(s);if(qt(!!n,46558,{timestamp:s}),n[1]){let o=n[1];o=(o+"000000000").substr(0,9),t=Number(o)}const r=new Date(s);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:me(s.seconds),nanos:me(s.nanos)}}function me(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function er(s){return typeof s=="string"?Qe.fromBase64String(s):Qe.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eE="server_timestamp",nE="__type__",iE="__previous_value__",sE="__local_write_time__";function Fm(s){var n,r;return((r=(((n=s==null?void 0:s.mapValue)==null?void 0:n.fields)||{})[nE])==null?void 0:r.stringValue)===eE}function Ah(s){const t=s.mapValue.fields[iE];return Fm(t)?Ah(t):t}function Pl(s){const t=tr(s.mapValue.fields[sE].timestampValue);return new ne(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(t,n,r,o,u,f,p,g,_,E){this.databaseId=t,this.appId=n,this.persistenceKey=r,this.host=o,this.ssl=u,this.forceLongPolling=f,this.autoDetectLongPolling=p,this.longPollingOptions=g,this.useFetchStreams=_,this.isUsingEmulator=E}}const th="(default)";class Ll{constructor(t,n){this.projectId=t,this.database=n||th}static empty(){return new Ll("","")}get isDefaultDatabase(){return this.database===th}isEqual(t){return t instanceof Ll&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rE="__type__",BI="__max__",xc={mapValue:{}},aE="__vector__",eh="value";function nr(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Fm(s)?4:HI(s)?9007199254740991:qI(s)?10:11:mt(28295,{value:s})}function Mi(s,t){if(s===t)return!0;const n=nr(s);if(n!==nr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===t.booleanValue;case 4:return Pl(s).isEqual(Pl(t));case 3:return(function(o,u){if(typeof o.timestampValue=="string"&&typeof u.timestampValue=="string"&&o.timestampValue.length===u.timestampValue.length)return o.timestampValue===u.timestampValue;const f=tr(o.timestampValue),p=tr(u.timestampValue);return f.seconds===p.seconds&&f.nanos===p.nanos})(s,t);case 5:return s.stringValue===t.stringValue;case 6:return(function(o,u){return er(o.bytesValue).isEqual(er(u.bytesValue))})(s,t);case 7:return s.referenceValue===t.referenceValue;case 8:return(function(o,u){return me(o.geoPointValue.latitude)===me(u.geoPointValue.latitude)&&me(o.geoPointValue.longitude)===me(u.geoPointValue.longitude)})(s,t);case 2:return(function(o,u){if("integerValue"in o&&"integerValue"in u)return me(o.integerValue)===me(u.integerValue);if("doubleValue"in o&&"doubleValue"in u){const f=me(o.doubleValue),p=me(u.doubleValue);return f===p?Wc(f)===Wc(p):isNaN(f)&&isNaN(p)}return!1})(s,t);case 9:return ro(s.arrayValue.values||[],t.arrayValue.values||[],Mi);case 10:case 11:return(function(o,u){const f=o.mapValue.fields||{},p=u.mapValue.fields||{};if(Hv(f)!==Hv(p))return!1;for(const g in f)if(f.hasOwnProperty(g)&&(p[g]===void 0||!Mi(f[g],p[g])))return!1;return!0})(s,t);default:return mt(52216,{left:s})}}function zl(s,t){return(s.values||[]).find((n=>Mi(n,t)))!==void 0}function ao(s,t){if(s===t)return 0;const n=nr(s),r=nr(t);if(n!==r)return Ot(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Ot(s.booleanValue,t.booleanValue);case 2:return(function(u,f){const p=me(u.integerValue||u.doubleValue),g=me(f.integerValue||f.doubleValue);return p<g?-1:p>g?1:p===g?0:isNaN(p)?isNaN(g)?0:-1:1})(s,t);case 3:return Gv(s.timestampValue,t.timestampValue);case 4:return Gv(Pl(s),Pl(t));case 5:return hm(s.stringValue,t.stringValue);case 6:return(function(u,f){const p=er(u),g=er(f);return p.compareTo(g)})(s.bytesValue,t.bytesValue);case 7:return(function(u,f){const p=u.split("/"),g=f.split("/");for(let _=0;_<p.length&&_<g.length;_++){const E=Ot(p[_],g[_]);if(E!==0)return E}return Ot(p.length,g.length)})(s.referenceValue,t.referenceValue);case 8:return(function(u,f){const p=Ot(me(u.latitude),me(f.latitude));return p!==0?p:Ot(me(u.longitude),me(f.longitude))})(s.geoPointValue,t.geoPointValue);case 9:return Qv(s.arrayValue,t.arrayValue);case 10:return(function(u,f){var N,B,Z,W;const p=u.fields||{},g=f.fields||{},_=(N=p[eh])==null?void 0:N.arrayValue,E=(B=g[eh])==null?void 0:B.arrayValue,b=Ot(((Z=_==null?void 0:_.values)==null?void 0:Z.length)||0,((W=E==null?void 0:E.values)==null?void 0:W.length)||0);return b!==0?b:Qv(_,E)})(s.mapValue,t.mapValue);case 11:return(function(u,f){if(u===xc.mapValue&&f===xc.mapValue)return 0;if(u===xc.mapValue)return 1;if(f===xc.mapValue)return-1;const p=u.fields||{},g=Object.keys(p),_=f.fields||{},E=Object.keys(_);g.sort(),E.sort();for(let b=0;b<g.length&&b<E.length;++b){const N=hm(g[b],E[b]);if(N!==0)return N;const B=ao(p[g[b]],_[E[b]]);if(B!==0)return B}return Ot(g.length,E.length)})(s.mapValue,t.mapValue);default:throw mt(23264,{he:n})}}function Gv(s,t){if(typeof s=="string"&&typeof t=="string"&&s.length===t.length)return Ot(s,t);const n=tr(s),r=tr(t),o=Ot(n.seconds,r.seconds);return o!==0?o:Ot(n.nanos,r.nanos)}function Qv(s,t){const n=s.values||[],r=t.values||[];for(let o=0;o<n.length&&o<r.length;++o){const u=ao(n[o],r[o]);if(u)return u}return Ot(n.length,r.length)}function oo(s){return fm(s)}function fm(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(n){const r=tr(n);return`time(${r.seconds},${r.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?(function(n){return er(n).toBase64()})(s.bytesValue):"referenceValue"in s?(function(n){return ct.fromName(n).toString()})(s.referenceValue):"geoPointValue"in s?(function(n){return`geo(${n.latitude},${n.longitude})`})(s.geoPointValue):"arrayValue"in s?(function(n){let r="[",o=!0;for(const u of n.values||[])o?o=!1:r+=",",r+=fm(u);return r+"]"})(s.arrayValue):"mapValue"in s?(function(n){const r=Object.keys(n.fields||{}).sort();let o="{",u=!0;for(const f of r)u?u=!1:o+=",",o+=`${f}:${fm(n.fields[f])}`;return o+"}"})(s.mapValue):mt(61005,{value:s})}function jc(s){switch(nr(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=Ah(s);return t?16+jc(t):16;case 5:return 2*s.stringValue.length;case 6:return er(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((o,u)=>o+jc(u)),0)})(s.arrayValue);case 10:case 11:return(function(r){let o=0;return Jr(r.fields,((u,f)=>{o+=u.length+jc(f)})),o})(s.mapValue);default:throw mt(13486,{value:s})}}function Kv(s,t){return{referenceValue:`projects/${s.projectId}/databases/${s.database}/documents/${t.path.canonicalString()}`}}function dm(s){return!!s&&"integerValue"in s}function Gm(s){return!!s&&"arrayValue"in s}function Yv(s){return!!s&&"nullValue"in s}function Xv(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function Bc(s){return!!s&&"mapValue"in s}function qI(s){var n,r;return((r=(((n=s==null?void 0:s.mapValue)==null?void 0:n.fields)||{})[rE])==null?void 0:r.stringValue)===aE}function Dl(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const t={mapValue:{fields:{}}};return Jr(s.mapValue.fields,((n,r)=>t.mapValue.fields[n]=Dl(r))),t}if(s.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(s.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Dl(s.arrayValue.values[n]);return t}return{...s}}function HI(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===BI}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un{constructor(t){this.value=t}static empty(){return new Un({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let r=0;r<t.length-1;++r)if(n=(n.mapValue.fields||{})[t.get(r)],!Bc(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Dl(n)}setAll(t){let n=Fe.emptyPath(),r={},o=[];t.forEach(((f,p)=>{if(!n.isImmediateParentOf(p)){const g=this.getFieldsMap(n);this.applyChanges(g,r,o),r={},o=[],n=p.popLast()}f?r[p.lastSegment()]=Dl(f):o.push(p.lastSegment())}));const u=this.getFieldsMap(n);this.applyChanges(u,r,o)}delete(t){const n=this.field(t.popLast());Bc(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Mi(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<t.length;++r){let o=n.mapValue.fields[t.get(r)];Bc(o)&&o.mapValue.fields||(o={mapValue:{fields:{}}},n.mapValue.fields[t.get(r)]=o),n=o}return n.mapValue.fields}applyChanges(t,n,r){Jr(n,((o,u)=>t[o]=u));for(const o of r)delete t[o]}clone(){return new Un(Dl(this.value))}}function oE(s){const t=[];return Jr(s.fields,((n,r)=>{const o=new Fe([n]);if(Bc(r)){const u=oE(r.mapValue).fields;if(u.length===0)t.push(o);else for(const f of u)t.push(o.child(f))}else t.push(o)})),new ti(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(t,n,r,o,u,f,p){this.key=t,this.documentType=n,this.version=r,this.readTime=o,this.createTime=u,this.data=f,this.documentState=p}static newInvalidDocument(t){return new $e(t,0,_t.min(),_t.min(),_t.min(),Un.empty(),0)}static newFoundDocument(t,n,r,o){return new $e(t,1,n,_t.min(),r,o,0)}static newNoDocument(t,n){return new $e(t,2,n,_t.min(),_t.min(),Un.empty(),0)}static newUnknownDocument(t,n){return new $e(t,3,n,_t.min(),_t.min(),Un.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(_t.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Un.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Un.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=_t.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof $e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{constructor(t,n){this.position=t,this.inclusive=n}}function $v(s,t,n){let r=0;for(let o=0;o<s.position.length;o++){const u=t[o],f=s.position[o];if(u.field.isKeyField()?r=ct.comparator(ct.fromName(f.referenceValue),n.key):r=ao(f,n.data.field(u.field)),u.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jv(s,t){if(s===null)return t===null;if(t===null||s.inclusive!==t.inclusive||s.position.length!==t.position.length)return!1;for(let n=0;n<s.position.length;n++)if(!Mi(s.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(t,n="asc"){this.field=t,this.dir=n}}function FI(s,t){return s.dir===t.dir&&s.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{}class we extends lE{constructor(t,n,r){super(),this.field=t,this.op=n,this.value=r}static create(t,n,r){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,r):new QI(t,n,r):n==="array-contains"?new XI(t,r):n==="in"?new $I(t,r):n==="not-in"?new JI(t,r):n==="array-contains-any"?new ZI(t,r):new we(t,n,r)}static createKeyFieldInFilter(t,n,r){return n==="in"?new KI(t,r):new YI(t,r)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ao(n,this.value)):n!==null&&nr(this.value)===nr(n)&&this.matchesComparison(ao(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return mt(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ii extends lE{constructor(t,n){super(),this.filters=t,this.op=n,this.Pe=null}static create(t,n){return new ii(t,n)}matches(t){return uE(this)?this.filters.find((n=>!n.matches(t)))===void 0:this.filters.find((n=>n.matches(t)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((t,n)=>t.concat(n.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function uE(s){return s.op==="and"}function cE(s){return GI(s)&&uE(s)}function GI(s){for(const t of s.filters)if(t instanceof ii)return!1;return!0}function mm(s){if(s instanceof we)return s.field.canonicalString()+s.op.toString()+oo(s.value);if(cE(s))return s.filters.map((t=>mm(t))).join(",");{const t=s.filters.map((n=>mm(n))).join(",");return`${s.op}(${t})`}}function hE(s,t){return s instanceof we?(function(r,o){return o instanceof we&&r.op===o.op&&r.field.isEqual(o.field)&&Mi(r.value,o.value)})(s,t):s instanceof ii?(function(r,o){return o instanceof ii&&r.op===o.op&&r.filters.length===o.filters.length?r.filters.reduce(((u,f,p)=>u&&hE(f,o.filters[p])),!0):!1})(s,t):void mt(19439)}function fE(s){return s instanceof we?(function(n){return`${n.field.canonicalString()} ${n.op} ${oo(n.value)}`})(s):s instanceof ii?(function(n){return n.op.toString()+" {"+n.getFilters().map(fE).join(" ,")+"}"})(s):"Filter"}class QI extends we{constructor(t,n,r){super(t,n,r),this.key=ct.fromName(r.referenceValue)}matches(t){const n=ct.comparator(t.key,this.key);return this.matchesComparison(n)}}class KI extends we{constructor(t,n){super(t,"in",n),this.keys=dE("in",n)}matches(t){return this.keys.some((n=>n.isEqual(t.key)))}}class YI extends we{constructor(t,n){super(t,"not-in",n),this.keys=dE("not-in",n)}matches(t){return!this.keys.some((n=>n.isEqual(t.key)))}}function dE(s,t){var n;return(((n=t.arrayValue)==null?void 0:n.values)||[]).map((r=>ct.fromName(r.referenceValue)))}class XI extends we{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Gm(n)&&zl(n.arrayValue,this.value)}}class $I extends we{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&zl(this.value.arrayValue,n)}}class JI extends we{constructor(t,n){super(t,"not-in",n)}matches(t){if(zl(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&n.nullValue===void 0&&!zl(this.value.arrayValue,n)}}class ZI extends we{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Gm(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>zl(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(t,n=null,r=[],o=[],u=null,f=null,p=null){this.path=t,this.collectionGroup=n,this.orderBy=r,this.filters=o,this.limit=u,this.startAt=f,this.endAt=p,this.Te=null}}function Zv(s,t=null,n=[],r=[],o=null,u=null,f=null){return new WI(s,t,n,r,o,u,f)}function Qm(s){const t=Tt(s);if(t.Te===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map((r=>mm(r))).join(","),n+="|ob:",n+=t.orderBy.map((r=>(function(u){return u.field.canonicalString()+u.dir})(r))).join(","),Eh(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((r=>oo(r))).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((r=>oo(r))).join(",")),t.Te=n}return t.Te}function Km(s,t){if(s.limit!==t.limit||s.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<s.orderBy.length;n++)if(!FI(s.orderBy[n],t.orderBy[n]))return!1;if(s.filters.length!==t.filters.length)return!1;for(let n=0;n<s.filters.length;n++)if(!hE(s.filters[n],t.filters[n]))return!1;return s.collectionGroup===t.collectionGroup&&!!s.path.isEqual(t.path)&&!!Jv(s.startAt,t.startAt)&&Jv(s.endAt,t.endAt)}function pm(s){return ct.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class po{constructor(t,n=null,r=[],o=[],u=null,f="F",p=null,g=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=o,this.limit=u,this.limitType=f,this.startAt=p,this.endAt=g,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function tC(s,t,n,r,o,u,f,p){return new po(s,t,n,r,o,u,f,p)}function Ym(s){return new po(s)}function Wv(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function mE(s){return s.collectionGroup!==null}function xl(s){const t=Tt(s);if(t.Ie===null){t.Ie=[];const n=new Set;for(const u of t.explicitOrderBy)t.Ie.push(u),n.add(u.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(f){let p=new Oe(Fe.comparator);return f.filters.forEach((g=>{g.getFlattenedFilters().forEach((_=>{_.isInequality()&&(p=p.add(_.field))}))})),p})(t).forEach((u=>{n.has(u.canonicalString())||u.isKeyField()||t.Ie.push(new jl(u,r))})),n.has(Fe.keyField().canonicalString())||t.Ie.push(new jl(Fe.keyField(),r))}return t.Ie}function Ni(s){const t=Tt(s);return t.Ee||(t.Ee=eC(t,xl(s))),t.Ee}function eC(s,t){if(s.limitType==="F")return Zv(s.path,s.collectionGroup,t,s.filters,s.limit,s.startAt,s.endAt);{t=t.map((o=>{const u=o.dir==="desc"?"asc":"desc";return new jl(o.field,u)}));const n=s.endAt?new nh(s.endAt.position,s.endAt.inclusive):null,r=s.startAt?new nh(s.startAt.position,s.startAt.inclusive):null;return Zv(s.path,s.collectionGroup,t,s.filters,s.limit,n,r)}}function gm(s,t){const n=s.filters.concat([t]);return new po(s.path,s.collectionGroup,s.explicitOrderBy.slice(),n,s.limit,s.limitType,s.startAt,s.endAt)}function ym(s,t,n){return new po(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),t,n,s.startAt,s.endAt)}function bh(s,t){return Km(Ni(s),Ni(t))&&s.limitType===t.limitType}function pE(s){return`${Qm(Ni(s))}|lt:${s.limitType}`}function Ka(s){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((o=>fE(o))).join(", ")}]`),Eh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((o=>(function(f){return`${f.field.canonicalString()} (${f.dir})`})(o))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((o=>oo(o))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((o=>oo(o))).join(",")),`Target(${r})`})(Ni(s))}; limitType=${s.limitType})`}function Sh(s,t){return t.isFoundDocument()&&(function(r,o){const u=o.key.path;return r.collectionGroup!==null?o.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(u):ct.isDocumentKey(r.path)?r.path.isEqual(u):r.path.isImmediateParentOf(u)})(s,t)&&(function(r,o){for(const u of xl(r))if(!u.field.isKeyField()&&o.data.field(u.field)===null)return!1;return!0})(s,t)&&(function(r,o){for(const u of r.filters)if(!u.matches(o))return!1;return!0})(s,t)&&(function(r,o){return!(r.startAt&&!(function(f,p,g){const _=$v(f,p,g);return f.inclusive?_<=0:_<0})(r.startAt,xl(r),o)||r.endAt&&!(function(f,p,g){const _=$v(f,p,g);return f.inclusive?_>=0:_>0})(r.endAt,xl(r),o))})(s,t)}function nC(s){return s.collectionGroup||(s.path.length%2==1?s.path.lastSegment():s.path.get(s.path.length-2))}function gE(s){return(t,n)=>{let r=!1;for(const o of xl(s)){const u=iC(o,t,n);if(u!==0)return u;r=r||o.field.isKeyField()}return 0}}function iC(s,t,n){const r=s.field.isKeyField()?ct.comparator(t.key,n.key):(function(u,f,p){const g=f.data.field(u),_=p.data.field(u);return g!==null&&_!==null?ao(g,_):mt(42886)})(s.field,t,n);switch(s.dir){case"asc":return r;case"desc":return-1*r;default:return mt(19790,{direction:s.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r!==void 0){for(const[o,u]of r)if(this.equalsFn(o,t))return u}}has(t){return this.get(t)!==void 0}set(t,n){const r=this.mapKeyFn(t),o=this.inner[r];if(o===void 0)return this.inner[r]=[[t,n]],void this.innerSize++;for(let u=0;u<o.length;u++)if(this.equalsFn(o[u][0],t))return void(o[u]=[t,n]);o.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),r=this.inner[n];if(r===void 0)return!1;for(let o=0;o<r.length;o++)if(this.equalsFn(r[o][0],t))return r.length===1?delete this.inner[n]:r.splice(o,1),this.innerSize--,!0;return!1}forEach(t){Jr(this.inner,((n,r)=>{for(const[o,u]of r)t(o,u)}))}isEmpty(){return WT(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sC=new oe(ct.comparator);function ls(){return sC}const yE=new oe(ct.comparator);function Sl(...s){let t=yE;for(const n of s)t=t.insert(n.key,n);return t}function _E(s){let t=yE;return s.forEach(((n,r)=>t=t.insert(n,r.overlayedDocument))),t}function Lr(){return Ol()}function vE(){return Ol()}function Ol(){return new Zr((s=>s.toString()),((s,t)=>s.isEqual(t)))}const rC=new oe(ct.comparator),aC=new Oe(ct.comparator);function Mt(...s){let t=aC;for(const n of s)t=t.add(n);return t}const oC=new Oe(Ot);function lC(){return oC}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xm(s,t){if(s.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Wc(t)?"-0":t}}function TE(s){return{integerValue:""+s}}function uC(s,t){return UI(t)?TE(t):Xm(s,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(){this._=void 0}}function cC(s,t,n){return s instanceof Bl?(function(o,u){const f={fields:{[nE]:{stringValue:eE},[sE]:{timestampValue:{seconds:o.seconds,nanos:o.nanoseconds}}}};return u&&Fm(u)&&(u=Ah(u)),u&&(f.fields[iE]=u),{mapValue:f}})(n,t):s instanceof ql?AE(s,t):s instanceof Hl?bE(s,t):(function(o,u){const f=EE(o,u),p=t0(f)+t0(o.Ae);return dm(f)&&dm(o.Ae)?TE(p):Xm(o.serializer,p)})(s,t)}function hC(s,t,n){return s instanceof ql?AE(s,t):s instanceof Hl?bE(s,t):n}function EE(s,t){return s instanceof ih?(function(r){return dm(r)||(function(u){return!!u&&"doubleValue"in u})(r)})(t)?t:{integerValue:0}:null}class Bl extends wh{}class ql extends wh{constructor(t){super(),this.elements=t}}function AE(s,t){const n=SE(t);for(const r of s.elements)n.some((o=>Mi(o,r)))||n.push(r);return{arrayValue:{values:n}}}class Hl extends wh{constructor(t){super(),this.elements=t}}function bE(s,t){let n=SE(t);for(const r of s.elements)n=n.filter((o=>!Mi(o,r)));return{arrayValue:{values:n}}}class ih extends wh{constructor(t,n){super(),this.serializer=t,this.Ae=n}}function t0(s){return me(s.integerValue||s.doubleValue)}function SE(s){return Gm(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(t,n){this.field=t,this.transform=n}}function dC(s,t){return s.field.isEqual(t.field)&&(function(r,o){return r instanceof ql&&o instanceof ql||r instanceof Hl&&o instanceof Hl?ro(r.elements,o.elements,Mi):r instanceof ih&&o instanceof ih?Mi(r.Ae,o.Ae):r instanceof Bl&&o instanceof Bl})(s.transform,t.transform)}class mC{constructor(t,n){this.version=t,this.transformResults=n}}class is{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new is}static exists(t){return new is(void 0,t)}static updateTime(t){return new is(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function qc(s,t){return s.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(s.updateTime):s.exists===void 0||s.exists===t.isFoundDocument()}class Rh{}function wE(s,t){if(!s.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return s.isNoDocument()?new IE(s.key,is.none()):new Xl(s.key,s.data,is.none());{const n=s.data,r=Un.empty();let o=new Oe(Fe.comparator);for(let u of t.fields)if(!o.has(u)){let f=n.field(u);f===null&&u.length>1&&(u=u.popLast(),f=n.field(u)),f===null?r.delete(u):r.set(u,f),o=o.add(u)}return new Wr(s.key,r,new ti(o.toArray()),is.none())}}function pC(s,t,n){s instanceof Xl?(function(o,u,f){const p=o.value.clone(),g=n0(o.fieldTransforms,u,f.transformResults);p.setAll(g),u.convertToFoundDocument(f.version,p).setHasCommittedMutations()})(s,t,n):s instanceof Wr?(function(o,u,f){if(!qc(o.precondition,u))return void u.convertToUnknownDocument(f.version);const p=n0(o.fieldTransforms,u,f.transformResults),g=u.data;g.setAll(RE(o)),g.setAll(p),u.convertToFoundDocument(f.version,g).setHasCommittedMutations()})(s,t,n):(function(o,u,f){u.convertToNoDocument(f.version).setHasCommittedMutations()})(0,t,n)}function Ml(s,t,n,r){return s instanceof Xl?(function(u,f,p,g){if(!qc(u.precondition,f))return p;const _=u.value.clone(),E=i0(u.fieldTransforms,g,f);return _.setAll(E),f.convertToFoundDocument(f.version,_).setHasLocalMutations(),null})(s,t,n,r):s instanceof Wr?(function(u,f,p,g){if(!qc(u.precondition,f))return p;const _=i0(u.fieldTransforms,g,f),E=f.data;return E.setAll(RE(u)),E.setAll(_),f.convertToFoundDocument(f.version,E).setHasLocalMutations(),p===null?null:p.unionWith(u.fieldMask.fields).unionWith(u.fieldTransforms.map((b=>b.field)))})(s,t,n,r):(function(u,f,p){return qc(u.precondition,f)?(f.convertToNoDocument(f.version).setHasLocalMutations(),null):p})(s,t,n)}function gC(s,t){let n=null;for(const r of s.fieldTransforms){const o=t.data.field(r.field),u=EE(r.transform,o||null);u!=null&&(n===null&&(n=Un.empty()),n.set(r.field,u))}return n||null}function e0(s,t){return s.type===t.type&&!!s.key.isEqual(t.key)&&!!s.precondition.isEqual(t.precondition)&&!!(function(r,o){return r===void 0&&o===void 0||!(!r||!o)&&ro(r,o,((u,f)=>dC(u,f)))})(s.fieldTransforms,t.fieldTransforms)&&(s.type===0?s.value.isEqual(t.value):s.type!==1||s.data.isEqual(t.data)&&s.fieldMask.isEqual(t.fieldMask))}class Xl extends Rh{constructor(t,n,r,o=[]){super(),this.key=t,this.value=n,this.precondition=r,this.fieldTransforms=o,this.type=0}getFieldMask(){return null}}class Wr extends Rh{constructor(t,n,r,o,u=[]){super(),this.key=t,this.data=n,this.fieldMask=r,this.precondition=o,this.fieldTransforms=u,this.type=1}getFieldMask(){return this.fieldMask}}function RE(s){const t=new Map;return s.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=s.data.field(n);t.set(n,r)}})),t}function n0(s,t,n){const r=new Map;qt(s.length===n.length,32656,{Re:n.length,Ve:s.length});for(let o=0;o<n.length;o++){const u=s[o],f=u.transform,p=t.data.field(u.field);r.set(u.field,hC(f,p,n[o]))}return r}function i0(s,t,n){const r=new Map;for(const o of s){const u=o.transform,f=n.data.field(o.field);r.set(o.field,cC(u,f,t))}return r}class IE extends Rh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class yC extends Rh{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(t,n,r,o){this.batchId=t,this.localWriteTime=n,this.baseMutations=r,this.mutations=o}applyToRemoteDocument(t,n){const r=n.mutationResults;for(let o=0;o<this.mutations.length;o++){const u=this.mutations[o];u.key.isEqual(t.key)&&pC(u,t,r[o])}}applyToLocalView(t,n){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(n=Ml(r,t,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(n=Ml(r,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const r=vE();return this.mutations.forEach((o=>{const u=t.get(o.key),f=u.overlayedDocument;let p=this.applyToLocalView(f,u.mutatedFields);p=n.has(o.key)?null:p;const g=wE(f,p);g!==null&&r.set(o.key,g),f.isValidDocument()||f.convertToNoDocument(_t.min())})),r}keys(){return this.mutations.reduce(((t,n)=>t.add(n.key)),Mt())}isEqual(t){return this.batchId===t.batchId&&ro(this.mutations,t.mutations,((n,r)=>e0(n,r)))&&ro(this.baseMutations,t.baseMutations,((n,r)=>e0(n,r)))}}class $m{constructor(t,n,r,o){this.batch=t,this.commitVersion=n,this.mutationResults=r,this.docVersions=o}static from(t,n,r){qt(t.mutations.length===r.length,58842,{me:t.mutations.length,fe:r.length});let o=(function(){return rC})();const u=t.mutations;for(let f=0;f<u.length;f++)o=o.insert(u[f].key,r[f].version);return new $m(t,n,r,o)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vC{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(t,n){this.count=t,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se,Ut;function EC(s){switch(s){case X.OK:return mt(64938);case X.CANCELLED:case X.UNKNOWN:case X.DEADLINE_EXCEEDED:case X.RESOURCE_EXHAUSTED:case X.INTERNAL:case X.UNAVAILABLE:case X.UNAUTHENTICATED:return!1;case X.INVALID_ARGUMENT:case X.NOT_FOUND:case X.ALREADY_EXISTS:case X.PERMISSION_DENIED:case X.FAILED_PRECONDITION:case X.ABORTED:case X.OUT_OF_RANGE:case X.UNIMPLEMENTED:case X.DATA_LOSS:return!0;default:return mt(15467,{code:s})}}function CE(s){if(s===void 0)return os("GRPC error has no .code"),X.UNKNOWN;switch(s){case Se.OK:return X.OK;case Se.CANCELLED:return X.CANCELLED;case Se.UNKNOWN:return X.UNKNOWN;case Se.DEADLINE_EXCEEDED:return X.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return X.RESOURCE_EXHAUSTED;case Se.INTERNAL:return X.INTERNAL;case Se.UNAVAILABLE:return X.UNAVAILABLE;case Se.UNAUTHENTICATED:return X.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return X.INVALID_ARGUMENT;case Se.NOT_FOUND:return X.NOT_FOUND;case Se.ALREADY_EXISTS:return X.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return X.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return X.FAILED_PRECONDITION;case Se.ABORTED:return X.ABORTED;case Se.OUT_OF_RANGE:return X.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return X.UNIMPLEMENTED;case Se.DATA_LOSS:return X.DATA_LOSS;default:return mt(39323,{code:s})}}(Ut=Se||(Se={}))[Ut.OK=0]="OK",Ut[Ut.CANCELLED=1]="CANCELLED",Ut[Ut.UNKNOWN=2]="UNKNOWN",Ut[Ut.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ut[Ut.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ut[Ut.NOT_FOUND=5]="NOT_FOUND",Ut[Ut.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ut[Ut.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ut[Ut.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ut[Ut.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ut[Ut.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ut[Ut.ABORTED=10]="ABORTED",Ut[Ut.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ut[Ut.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ut[Ut.INTERNAL=13]="INTERNAL",Ut[Ut.UNAVAILABLE=14]="UNAVAILABLE",Ut[Ut.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=new $s([4294967295,4294967295],0);function s0(s){const t=AC().encode(s),n=new qT;return n.update(t),new Uint8Array(n.digest())}function r0(s){const t=new DataView(s.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),o=t.getUint32(8,!0),u=t.getUint32(12,!0);return[new $s([n,r],0),new $s([o,u],0)]}class Jm{constructor(t,n,r){if(this.bitmap=t,this.padding=n,this.hashCount=r,n<0||n>=8)throw new wl(`Invalid padding: ${n}`);if(r<0)throw new wl(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new wl(`Invalid hash count: ${r}`);if(t.length===0&&n!==0)throw new wl(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*t.length-n,this.pe=$s.fromNumber(this.ge)}ye(t,n,r){let o=t.add(n.multiply($s.fromNumber(r)));return o.compare(bC)===1&&(o=new $s([o.getBits(0),o.getBits(1)],0)),o.modulo(this.pe).toNumber()}we(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.ge===0)return!1;const n=s0(t),[r,o]=r0(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(r,o,u);if(!this.we(f))return!1}return!0}static create(t,n,r){const o=t%8==0?0:8-t%8,u=new Uint8Array(Math.ceil(t/8)),f=new Jm(u,o,n);return r.forEach((p=>f.insert(p))),f}insert(t){if(this.ge===0)return;const n=s0(t),[r,o]=r0(n);for(let u=0;u<this.hashCount;u++){const f=this.ye(r,o,u);this.Se(f)}}Se(t){const n=Math.floor(t/8),r=t%8;this.bitmap[n]|=1<<r}}class wl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(t,n,r,o,u){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=o,this.resolvedLimboDocuments=u}static createSynthesizedRemoteEventForCurrentChange(t,n,r){const o=new Map;return o.set(t,$l.createSynthesizedTargetChangeForCurrentChange(t,n,r)),new Ih(_t.min(),o,new oe(Ot),ls(),Mt())}}class $l{constructor(t,n,r,o,u){this.resumeToken=t,this.current=n,this.addedDocuments=r,this.modifiedDocuments=o,this.removedDocuments=u}static createSynthesizedTargetChangeForCurrentChange(t,n,r){return new $l(r,n,Mt(),Mt(),Mt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(t,n,r,o){this.be=t,this.removedTargetIds=n,this.key=r,this.De=o}}class NE{constructor(t,n){this.targetId=t,this.Ce=n}}class DE{constructor(t,n,r=Qe.EMPTY_BYTE_STRING,o=null){this.state=t,this.targetIds=n,this.resumeToken=r,this.cause=o}}class a0{constructor(){this.ve=0,this.Fe=o0(),this.Me=Qe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(t){t.approximateByteSize()>0&&(this.Oe=!0,this.Me=t)}ke(){let t=Mt(),n=Mt(),r=Mt();return this.Fe.forEach(((o,u)=>{switch(u){case 0:t=t.add(o);break;case 2:n=n.add(o);break;case 1:r=r.add(o);break;default:mt(38017,{changeType:u})}})),new $l(this.Me,this.xe,t,n,r)}qe(){this.Oe=!1,this.Fe=o0()}Qe(t,n){this.Oe=!0,this.Fe=this.Fe.insert(t,n)}$e(t){this.Oe=!0,this.Fe=this.Fe.remove(t)}Ue(){this.ve+=1}Ke(){this.ve-=1,qt(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class SC{constructor(t){this.Ge=t,this.ze=new Map,this.je=ls(),this.Je=Oc(),this.He=Oc(),this.Ye=new oe(Ot)}Ze(t){for(const n of t.be)t.De&&t.De.isFoundDocument()?this.Xe(n,t.De):this.et(n,t.key,t.De);for(const n of t.removedTargetIds)this.et(n,t.key,t.De)}tt(t){this.forEachTarget(t,(n=>{const r=this.nt(n);switch(t.state){case 0:this.rt(n)&&r.Le(t.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(t.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.We(),r.Le(t.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(t.resumeToken));break;default:mt(56790,{state:t.state})}}))}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.ze.forEach(((r,o)=>{this.rt(o)&&n(o)}))}st(t){const n=t.targetId,r=t.Ce.count,o=this.ot(n);if(o){const u=o.target;if(pm(u))if(r===0){const f=new ct(u.path);this.et(n,f,$e.newNoDocument(f,_t.min()))}else qt(r===1,20013,{expectedCount:r});else{const f=this._t(n);if(f!==r){const p=this.ut(t),g=p?this.ct(p,t,f):1;if(g!==0){this.it(n);const _=g===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(n,_)}}}}}ut(t){const n=t.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:o=0},hashCount:u=0}=n;let f,p;try{f=er(r).toUint8Array()}catch(g){if(g instanceof tE)return so("Decoding the base64 bloom filter in existence filter failed ("+g.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw g}try{p=new Jm(f,o,u)}catch(g){return so(g instanceof wl?"BloomFilter error: ":"Applying bloom filter failed: ",g),null}return p.ge===0?null:p}ct(t,n,r){return n.Ce.count===r-this.Pt(t,n.targetId)?0:2}Pt(t,n){const r=this.Ge.getRemoteKeysForTarget(n);let o=0;return r.forEach((u=>{const f=this.Ge.ht(),p=`projects/${f.projectId}/databases/${f.database}/documents/${u.path.canonicalString()}`;t.mightContain(p)||(this.et(n,u,null),o++)})),o}Tt(t){const n=new Map;this.ze.forEach(((u,f)=>{const p=this.ot(f);if(p){if(u.current&&pm(p.target)){const g=new ct(p.target.path);this.It(g).has(f)||this.Et(f,g)||this.et(f,g,$e.newNoDocument(g,t))}u.Be&&(n.set(f,u.ke()),u.qe())}}));let r=Mt();this.He.forEach(((u,f)=>{let p=!0;f.forEachWhile((g=>{const _=this.ot(g);return!_||_.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(r=r.add(u))})),this.je.forEach(((u,f)=>f.setReadTime(t)));const o=new Ih(t,n,this.Ye,this.je,r);return this.je=ls(),this.Je=Oc(),this.He=Oc(),this.Ye=new oe(Ot),o}Xe(t,n){if(!this.rt(t))return;const r=this.Et(t,n.key)?2:0;this.nt(t).Qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(t)),this.He=this.He.insert(n.key,this.dt(n.key).add(t))}et(t,n,r){if(!this.rt(t))return;const o=this.nt(t);this.Et(t,n)?o.Qe(n,1):o.$e(n),this.He=this.He.insert(n,this.dt(n).delete(t)),this.He=this.He.insert(n,this.dt(n).add(t)),r&&(this.je=this.je.insert(n,r))}removeTarget(t){this.ze.delete(t)}_t(t){const n=this.nt(t).ke();return this.Ge.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ue(t){this.nt(t).Ue()}nt(t){let n=this.ze.get(t);return n||(n=new a0,this.ze.set(t,n)),n}dt(t){let n=this.He.get(t);return n||(n=new Oe(Ot),this.He=this.He.insert(t,n)),n}It(t){let n=this.Je.get(t);return n||(n=new Oe(Ot),this.Je=this.Je.insert(t,n)),n}rt(t){const n=this.ot(t)!==null;return n||st("WatchChangeAggregator","Detected inactive target",t),n}ot(t){const n=this.ze.get(t);return n&&n.Ne?null:this.Ge.At(t)}it(t){this.ze.set(t,new a0),this.Ge.getRemoteKeysForTarget(t).forEach((n=>{this.et(t,n,null)}))}Et(t,n){return this.Ge.getRemoteKeysForTarget(t).has(n)}}function Oc(){return new oe(ct.comparator)}function o0(){return new oe(ct.comparator)}const wC={asc:"ASCENDING",desc:"DESCENDING"},RC={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},IC={and:"AND",or:"OR"};class CC{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function _m(s,t){return s.useProto3Json||Eh(t)?t:{value:t}}function sh(s,t){return s.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function xE(s,t){return s.useProto3Json?t.toBase64():t.toUint8Array()}function NC(s,t){return sh(s,t.toTimestamp())}function Di(s){return qt(!!s,49232),_t.fromTimestamp((function(n){const r=tr(n);return new ne(r.seconds,r.nanos)})(s))}function Zm(s,t){return vm(s,t).canonicalString()}function vm(s,t){const n=(function(o){return new Wt(["projects",o.projectId,"databases",o.database])})(s).child("documents");return t===void 0?n:n.child(t)}function OE(s){const t=Wt.fromString(s);return qt(PE(t),10190,{key:t.toString()}),t}function Tm(s,t){return Zm(s.databaseId,t.path)}function Yd(s,t){const n=OE(t);if(n.get(1)!==s.databaseId.projectId)throw new it(X.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+s.databaseId.projectId);if(n.get(3)!==s.databaseId.database)throw new it(X.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+s.databaseId.database);return new ct(VE(n))}function ME(s,t){return Zm(s.databaseId,t)}function DC(s){const t=OE(s);return t.length===4?Wt.emptyPath():VE(t)}function Em(s){return new Wt(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function VE(s){return qt(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function l0(s,t,n){return{name:Tm(s,t),fields:n.value.mapValue.fields}}function xC(s,t){let n;if("targetChange"in t){t.targetChange;const r=(function(_){return _==="NO_CHANGE"?0:_==="ADD"?1:_==="REMOVE"?2:_==="CURRENT"?3:_==="RESET"?4:mt(39313,{state:_})})(t.targetChange.targetChangeType||"NO_CHANGE"),o=t.targetChange.targetIds||[],u=(function(_,E){return _.useProto3Json?(qt(E===void 0||typeof E=="string",58123),Qe.fromBase64String(E||"")):(qt(E===void 0||E instanceof Buffer||E instanceof Uint8Array,16193),Qe.fromUint8Array(E||new Uint8Array))})(s,t.targetChange.resumeToken),f=t.targetChange.cause,p=f&&(function(_){const E=_.code===void 0?X.UNKNOWN:CE(_.code);return new it(E,_.message||"")})(f);n=new DE(r,o,u,p||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const o=Yd(s,r.document.name),u=Di(r.document.updateTime),f=r.document.createTime?Di(r.document.createTime):_t.min(),p=new Un({mapValue:{fields:r.document.fields}}),g=$e.newFoundDocument(o,u,f,p),_=r.targetIds||[],E=r.removedTargetIds||[];n=new Hc(_,E,g.key,g)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const o=Yd(s,r.document),u=r.readTime?Di(r.readTime):_t.min(),f=$e.newNoDocument(o,u),p=r.removedTargetIds||[];n=new Hc([],p,f.key,f)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const o=Yd(s,r.document),u=r.removedTargetIds||[];n=new Hc([],u,o,null)}else{if(!("filter"in t))return mt(11601,{Rt:t});{t.filter;const r=t.filter;r.targetId;const{count:o=0,unchangedNames:u}=r,f=new TC(o,u),p=r.targetId;n=new NE(p,f)}}return n}function OC(s,t){let n;if(t instanceof Xl)n={update:l0(s,t.key,t.value)};else if(t instanceof IE)n={delete:Tm(s,t.key)};else if(t instanceof Wr)n={update:l0(s,t.key,t.data),updateMask:BC(t.fieldMask)};else{if(!(t instanceof yC))return mt(16599,{Vt:t.type});n={verify:Tm(s,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((r=>(function(u,f){const p=f.transform;if(p instanceof Bl)return{fieldPath:f.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof ql)return{fieldPath:f.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof Hl)return{fieldPath:f.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof ih)return{fieldPath:f.field.canonicalString(),increment:p.Ae};throw mt(20930,{transform:f.transform})})(0,r)))),t.precondition.isNone||(n.currentDocument=(function(o,u){return u.updateTime!==void 0?{updateTime:NC(o,u.updateTime)}:u.exists!==void 0?{exists:u.exists}:mt(27497)})(s,t.precondition)),n}function MC(s,t){return s&&s.length>0?(qt(t!==void 0,14353),s.map((n=>(function(o,u){let f=o.updateTime?Di(o.updateTime):Di(u);return f.isEqual(_t.min())&&(f=Di(u)),new mC(f,o.transformResults||[])})(n,t)))):[]}function VC(s,t){return{documents:[ME(s,t.path)]}}function kC(s,t){const n={structuredQuery:{}},r=t.path;let o;t.collectionGroup!==null?(o=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(o=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ME(s,o);const u=(function(_){if(_.length!==0)return UE(ii.create(_,"and"))})(t.filters);u&&(n.structuredQuery.where=u);const f=(function(_){if(_.length!==0)return _.map((E=>(function(N){return{field:Ya(N.field),direction:LC(N.dir)}})(E)))})(t.orderBy);f&&(n.structuredQuery.orderBy=f);const p=_m(s,t.limit);return p!==null&&(n.structuredQuery.limit=p),t.startAt&&(n.structuredQuery.startAt=(function(_){return{before:_.inclusive,values:_.position}})(t.startAt)),t.endAt&&(n.structuredQuery.endAt=(function(_){return{before:!_.inclusive,values:_.position}})(t.endAt)),{ft:n,parent:o}}function UC(s){let t=DC(s.parent);const n=s.structuredQuery,r=n.from?n.from.length:0;let o=null;if(r>0){qt(r===1,65062);const E=n.from[0];E.allDescendants?o=E.collectionId:t=t.child(E.collectionId)}let u=[];n.where&&(u=(function(b){const N=kE(b);return N instanceof ii&&cE(N)?N.getFilters():[N]})(n.where));let f=[];n.orderBy&&(f=(function(b){return b.map((N=>(function(Z){return new jl(Xa(Z.field),(function(J){switch(J){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(Z.direction))})(N)))})(n.orderBy));let p=null;n.limit&&(p=(function(b){let N;return N=typeof b=="object"?b.value:b,Eh(N)?null:N})(n.limit));let g=null;n.startAt&&(g=(function(b){const N=!!b.before,B=b.values||[];return new nh(B,N)})(n.startAt));let _=null;return n.endAt&&(_=(function(b){const N=!b.before,B=b.values||[];return new nh(B,N)})(n.endAt)),tC(t,o,f,u,p,"F",g,_)}function PC(s,t){const n=(function(o){switch(o){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return mt(28987,{purpose:o})}})(t.purpose);return n==null?null:{"goog-listen-tags":n}}function kE(s){return s.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xa(n.unaryFilter.field);return we.create(r,"==",{doubleValue:NaN});case"IS_NULL":const o=Xa(n.unaryFilter.field);return we.create(o,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const u=Xa(n.unaryFilter.field);return we.create(u,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const f=Xa(n.unaryFilter.field);return we.create(f,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return mt(61313);default:return mt(60726)}})(s):s.fieldFilter!==void 0?(function(n){return we.create(Xa(n.fieldFilter.field),(function(o){switch(o){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return mt(58110);default:return mt(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(n){return ii.create(n.compositeFilter.filters.map((r=>kE(r))),(function(o){switch(o){case"AND":return"and";case"OR":return"or";default:return mt(1026)}})(n.compositeFilter.op))})(s):mt(30097,{filter:s})}function LC(s){return wC[s]}function zC(s){return RC[s]}function jC(s){return IC[s]}function Ya(s){return{fieldPath:s.canonicalString()}}function Xa(s){return Fe.fromServerFormat(s.fieldPath)}function UE(s){return s instanceof we?(function(n){if(n.op==="=="){if(Xv(n.value))return{unaryFilter:{field:Ya(n.field),op:"IS_NAN"}};if(Yv(n.value))return{unaryFilter:{field:Ya(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Xv(n.value))return{unaryFilter:{field:Ya(n.field),op:"IS_NOT_NAN"}};if(Yv(n.value))return{unaryFilter:{field:Ya(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ya(n.field),op:zC(n.op),value:n.value}}})(s):s instanceof ii?(function(n){const r=n.getFilters().map((o=>UE(o)));return r.length===1?r[0]:{compositeFilter:{op:jC(n.op),filters:r}}})(s):mt(54877,{filter:s})}function BC(s){const t=[];return s.fields.forEach((n=>t.push(n.canonicalString()))),{fieldPaths:t}}function PE(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t,n,r,o,u=_t.min(),f=_t.min(),p=Qe.EMPTY_BYTE_STRING,g=null){this.target=t,this.targetId=n,this.purpose=r,this.sequenceNumber=o,this.snapshotVersion=u,this.lastLimboFreeSnapshotVersion=f,this.resumeToken=p,this.expectedCount=g}withSequenceNumber(t){return new Ks(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,n){return new Ks(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Ks(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Ks(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(t){this.yt=t}}function HC(s){const t=UC({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?ym(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(){this.Cn=new GC}addToCollectionParentIndex(t,n){return this.Cn.add(n),$.resolve()}getCollectionParents(t,n){return $.resolve(this.Cn.getEntries(n))}addFieldIndex(t,n){return $.resolve()}deleteFieldIndex(t,n){return $.resolve()}deleteAllFieldIndexes(t){return $.resolve()}createTargetIndexes(t,n){return $.resolve()}getDocumentsMatchingTarget(t,n){return $.resolve(null)}getIndexType(t,n){return $.resolve(0)}getFieldIndexes(t,n){return $.resolve([])}getNextCollectionGroupToUpdate(t){return $.resolve(null)}getMinOffset(t,n){return $.resolve(Ws.min())}getMinOffsetFromCollectionGroup(t,n){return $.resolve(Ws.min())}updateCollectionGroup(t,n,r){return $.resolve()}updateIndexEntries(t,n){return $.resolve()}}class GC{constructor(){this.index={}}add(t){const n=t.lastSegment(),r=t.popLast(),o=this.index[n]||new Oe(Wt.comparator),u=!o.has(r);return this.index[n]=o.add(r),u}has(t){const n=t.lastSegment(),r=t.popLast(),o=this.index[n];return o&&o.has(r)}getEntries(t){return(this.index[t]||new Oe(Wt.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u0={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},LE=41943040;class hn{static withCacheSize(t){return new hn(t,hn.DEFAULT_COLLECTION_PERCENTILE,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,n,r){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn.DEFAULT_COLLECTION_PERCENTILE=10,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,hn.DEFAULT=new hn(LE,hn.DEFAULT_COLLECTION_PERCENTILE,hn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),hn.DISABLED=new hn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lo{constructor(t){this.ar=t}next(){return this.ar+=2,this.ar}static ur(){return new lo(0)}static cr(){return new lo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0="LruGarbageCollector",QC=1048576;function h0([s,t],[n,r]){const o=Ot(s,n);return o===0?Ot(t,r):o}class KC{constructor(t){this.Ir=t,this.buffer=new Oe(h0),this.Er=0}dr(){return++this.Er}Ar(t){const n=[t,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();h0(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class YC{constructor(t,n,r){this.garbageCollector=t,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(t){st(c0,`Garbage collection scheduled in ${t}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){mo(n)?st(c0,"Ignoring IndexedDB error during garbage collection: ",n):await fo(n)}await this.Vr(3e5)}))}}class XC{constructor(t,n){this.mr=t,this.params=n}calculateTargetCount(t,n){return this.mr.gr(t).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(t,n){if(n===0)return $.resolve(Th.ce);const r=new KC(n);return this.mr.forEachTarget(t,(o=>r.Ar(o.sequenceNumber))).next((()=>this.mr.pr(t,(o=>r.Ar(o))))).next((()=>r.maxValue))}removeTargets(t,n,r){return this.mr.removeTargets(t,n,r)}removeOrphanedDocuments(t,n){return this.mr.removeOrphanedDocuments(t,n)}collect(t,n){return this.params.cacheSizeCollectionThreshold===-1?(st("LruGarbageCollector","Garbage collection skipped; disabled"),$.resolve(u0)):this.getCacheSize(t).next((r=>r<this.params.cacheSizeCollectionThreshold?(st("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),u0):this.yr(t,n)))}getCacheSize(t){return this.mr.getCacheSize(t)}yr(t,n){let r,o,u,f,p,g,_;const E=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((b=>(b>this.params.maximumSequenceNumbersToCollect?(st("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),o=this.params.maximumSequenceNumbersToCollect):o=b,f=Date.now(),this.nthSequenceNumber(t,o)))).next((b=>(r=b,p=Date.now(),this.removeTargets(t,r,n)))).next((b=>(u=b,g=Date.now(),this.removeOrphanedDocuments(t,r)))).next((b=>(_=Date.now(),Qa()<=xt.DEBUG&&st("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${f-E}ms
	Determined least recently used ${o} in `+(p-f)+`ms
	Removed ${u} targets in `+(g-p)+`ms
	Removed ${b} documents in `+(_-g)+`ms
Total Duration: ${_-E}ms`),$.resolve({didRun:!0,sequenceNumbersCollected:o,targetsRemoved:u,documentsRemoved:b}))))}}function $C(s,t){return new XC(s,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JC{constructor(){this.changes=new Zr((t=>t.toString()),((t,n)=>t.isEqual(n))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,$e.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?$.resolve(r):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZC{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WC{constructor(t,n,r,o){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=o}getDocument(t,n){let r=null;return this.documentOverlayCache.getOverlay(t,n).next((o=>(r=o,this.remoteDocumentCache.getEntry(t,n)))).next((o=>(r!==null&&Ml(r.mutation,o,ti.empty(),ne.now()),o)))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next((r=>this.getLocalViewOfDocuments(t,r,Mt()).next((()=>r))))}getLocalViewOfDocuments(t,n,r=Mt()){const o=Lr();return this.populateOverlays(t,o,n).next((()=>this.computeViews(t,n,o,r).next((u=>{let f=Sl();return u.forEach(((p,g)=>{f=f.insert(p,g.overlayedDocument)})),f}))))}getOverlayedDocuments(t,n){const r=Lr();return this.populateOverlays(t,r,n).next((()=>this.computeViews(t,n,r,Mt())))}populateOverlays(t,n,r){const o=[];return r.forEach((u=>{n.has(u)||o.push(u)})),this.documentOverlayCache.getOverlays(t,o).next((u=>{u.forEach(((f,p)=>{n.set(f,p)}))}))}computeViews(t,n,r,o){let u=ls();const f=Ol(),p=(function(){return Ol()})();return n.forEach(((g,_)=>{const E=r.get(_.key);o.has(_.key)&&(E===void 0||E.mutation instanceof Wr)?u=u.insert(_.key,_):E!==void 0?(f.set(_.key,E.mutation.getFieldMask()),Ml(E.mutation,_,E.mutation.getFieldMask(),ne.now())):f.set(_.key,ti.empty())})),this.recalculateAndSaveOverlays(t,u).next((g=>(g.forEach(((_,E)=>f.set(_,E))),n.forEach(((_,E)=>p.set(_,new ZC(E,f.get(_)??null)))),p)))}recalculateAndSaveOverlays(t,n){const r=Ol();let o=new oe(((f,p)=>f-p)),u=Mt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next((f=>{for(const p of f)p.keys().forEach((g=>{const _=n.get(g);if(_===null)return;let E=r.get(g)||ti.empty();E=p.applyToLocalView(_,E),r.set(g,E);const b=(o.get(p.batchId)||Mt()).add(g);o=o.insert(p.batchId,b)}))})).next((()=>{const f=[],p=o.getReverseIterator();for(;p.hasNext();){const g=p.getNext(),_=g.key,E=g.value,b=vE();E.forEach((N=>{if(!u.has(N)){const B=wE(n.get(N),r.get(N));B!==null&&b.set(N,B),u=u.add(N)}})),f.push(this.documentOverlayCache.saveOverlays(t,_,b))}return $.waitFor(f)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next((r=>this.recalculateAndSaveOverlays(t,r)))}getDocumentsMatchingQuery(t,n,r,o){return(function(f){return ct.isDocumentKey(f.path)&&f.collectionGroup===null&&f.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):mE(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,r,o):this.getDocumentsMatchingCollectionQuery(t,n,r,o)}getNextDocuments(t,n,r,o){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,r,o).next((u=>{const f=o-u.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,r.largestBatchId,o-u.size):$.resolve(Lr());let p=Ul,g=u;return f.next((_=>$.forEach(_,((E,b)=>(p<b.largestBatchId&&(p=b.largestBatchId),u.get(E)?$.resolve():this.remoteDocumentCache.getEntry(t,E).next((N=>{g=g.insert(E,N)}))))).next((()=>this.populateOverlays(t,_,u))).next((()=>this.computeViews(t,g,_,Mt()))).next((E=>({batchId:p,changes:_E(E)})))))}))}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new ct(n)).next((r=>{let o=Sl();return r.isFoundDocument()&&(o=o.insert(r.key,r)),o}))}getDocumentsMatchingCollectionGroupQuery(t,n,r,o){const u=n.collectionGroup;let f=Sl();return this.indexManager.getCollectionParents(t,u).next((p=>$.forEach(p,(g=>{const _=(function(b,N){return new po(N,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)})(n,g.child(u));return this.getDocumentsMatchingCollectionQuery(t,_,r,o).next((E=>{E.forEach(((b,N)=>{f=f.insert(b,N)}))}))})).next((()=>f))))}getDocumentsMatchingCollectionQuery(t,n,r,o){let u;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,r.largestBatchId).next((f=>(u=f,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,r,u,o)))).next((f=>{u.forEach(((g,_)=>{const E=_.getKey();f.get(E)===null&&(f=f.insert(E,$e.newInvalidDocument(E)))}));let p=Sl();return f.forEach(((g,_)=>{const E=u.get(g);E!==void 0&&Ml(E.mutation,_,ti.empty(),ne.now()),Sh(n,_)&&(p=p.insert(g,_))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t2{constructor(t){this.serializer=t,this.Lr=new Map,this.kr=new Map}getBundleMetadata(t,n){return $.resolve(this.Lr.get(n))}saveBundleMetadata(t,n){return this.Lr.set(n.id,(function(o){return{id:o.id,version:o.version,createTime:Di(o.createTime)}})(n)),$.resolve()}getNamedQuery(t,n){return $.resolve(this.kr.get(n))}saveNamedQuery(t,n){return this.kr.set(n.name,(function(o){return{name:o.name,query:HC(o.bundledQuery),readTime:Di(o.readTime)}})(n)),$.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e2{constructor(){this.overlays=new oe(ct.comparator),this.qr=new Map}getOverlay(t,n){return $.resolve(this.overlays.get(n))}getOverlays(t,n){const r=Lr();return $.forEach(n,(o=>this.getOverlay(t,o).next((u=>{u!==null&&r.set(o,u)})))).next((()=>r))}saveOverlays(t,n,r){return r.forEach(((o,u)=>{this.St(t,n,u)})),$.resolve()}removeOverlaysForBatchId(t,n,r){const o=this.qr.get(r);return o!==void 0&&(o.forEach((u=>this.overlays=this.overlays.remove(u))),this.qr.delete(r)),$.resolve()}getOverlaysForCollection(t,n,r){const o=Lr(),u=n.length+1,f=new ct(n.child("")),p=this.overlays.getIteratorFrom(f);for(;p.hasNext();){const g=p.getNext().value,_=g.getKey();if(!n.isPrefixOf(_.path))break;_.path.length===u&&g.largestBatchId>r&&o.set(g.getKey(),g)}return $.resolve(o)}getOverlaysForCollectionGroup(t,n,r,o){let u=new oe(((_,E)=>_-E));const f=this.overlays.getIterator();for(;f.hasNext();){const _=f.getNext().value;if(_.getKey().getCollectionGroup()===n&&_.largestBatchId>r){let E=u.get(_.largestBatchId);E===null&&(E=Lr(),u=u.insert(_.largestBatchId,E)),E.set(_.getKey(),_)}}const p=Lr(),g=u.getIterator();for(;g.hasNext()&&(g.getNext().value.forEach(((_,E)=>p.set(_,E))),!(p.size()>=o)););return $.resolve(p)}St(t,n,r){const o=this.overlays.get(r.key);if(o!==null){const f=this.qr.get(o.largestBatchId).delete(r.key);this.qr.set(o.largestBatchId,f)}this.overlays=this.overlays.insert(r.key,new vC(n,r));let u=this.qr.get(n);u===void 0&&(u=Mt(),this.qr.set(n,u)),this.qr.set(n,u.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(t){return $.resolve(this.sessionToken)}setSessionToken(t,n){return this.sessionToken=n,$.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm{constructor(){this.Qr=new Oe(Ue.$r),this.Ur=new Oe(Ue.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(t,n){const r=new Ue(t,n);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(t,n){t.forEach((r=>this.addReference(r,n)))}removeReference(t,n){this.Gr(new Ue(t,n))}zr(t,n){t.forEach((r=>this.removeReference(r,n)))}jr(t){const n=new ct(new Wt([])),r=new Ue(n,t),o=new Ue(n,t+1),u=[];return this.Ur.forEachInRange([r,o],(f=>{this.Gr(f),u.push(f.key)})),u}Jr(){this.Qr.forEach((t=>this.Gr(t)))}Gr(t){this.Qr=this.Qr.delete(t),this.Ur=this.Ur.delete(t)}Hr(t){const n=new ct(new Wt([])),r=new Ue(n,t),o=new Ue(n,t+1);let u=Mt();return this.Ur.forEachInRange([r,o],(f=>{u=u.add(f.key)})),u}containsKey(t){const n=new Ue(t,0),r=this.Qr.firstAfterOrEqual(n);return r!==null&&t.isEqual(r.key)}}class Ue{constructor(t,n){this.key=t,this.Yr=n}static $r(t,n){return ct.comparator(t.key,n.key)||Ot(t.Yr,n.Yr)}static Kr(t,n){return Ot(t.Yr,n.Yr)||ct.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.tr=1,this.Zr=new Oe(Ue.$r)}checkEmpty(t){return $.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,r,o){const u=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const f=new _C(u,n,r,o);this.mutationQueue.push(f);for(const p of o)this.Zr=this.Zr.add(new Ue(p.key,u)),this.indexManager.addToCollectionParentIndex(t,p.key.path.popLast());return $.resolve(f)}lookupMutationBatch(t,n){return $.resolve(this.Xr(n))}getNextMutationBatchAfterBatchId(t,n){const r=n+1,o=this.ei(r),u=o<0?0:o;return $.resolve(this.mutationQueue.length>u?this.mutationQueue[u]:null)}getHighestUnacknowledgedBatchId(){return $.resolve(this.mutationQueue.length===0?Hm:this.tr-1)}getAllMutationBatches(t){return $.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const r=new Ue(n,0),o=new Ue(n,Number.POSITIVE_INFINITY),u=[];return this.Zr.forEachInRange([r,o],(f=>{const p=this.Xr(f.Yr);u.push(p)})),$.resolve(u)}getAllMutationBatchesAffectingDocumentKeys(t,n){let r=new Oe(Ot);return n.forEach((o=>{const u=new Ue(o,0),f=new Ue(o,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([u,f],(p=>{r=r.add(p.Yr)}))})),$.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(t,n){const r=n.path,o=r.length+1;let u=r;ct.isDocumentKey(u)||(u=u.child(""));const f=new Ue(new ct(u),0);let p=new Oe(Ot);return this.Zr.forEachWhile((g=>{const _=g.key.path;return!!r.isPrefixOf(_)&&(_.length===o&&(p=p.add(g.Yr)),!0)}),f),$.resolve(this.ti(p))}ti(t){const n=[];return t.forEach((r=>{const o=this.Xr(r);o!==null&&n.push(o)})),n}removeMutationBatch(t,n){qt(this.ni(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return $.forEach(n.mutations,(o=>{const u=new Ue(o.key,n.batchId);return r=r.delete(u),this.referenceDelegate.markPotentiallyOrphaned(t,o.key)})).next((()=>{this.Zr=r}))}ir(t){}containsKey(t,n){const r=new Ue(n,0),o=this.Zr.firstAfterOrEqual(r);return $.resolve(n.isEqual(o&&o.key))}performConsistencyCheck(t){return this.mutationQueue.length,$.resolve()}ni(t,n){return this.ei(t)}ei(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Xr(t){const n=this.ei(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(t){this.ri=t,this.docs=(function(){return new oe(ct.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const r=n.key,o=this.docs.get(r),u=o?o.size:0,f=this.ri(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:f}),this.size+=f-u,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const r=this.docs.get(n);return $.resolve(r?r.document.mutableCopy():$e.newInvalidDocument(n))}getEntries(t,n){let r=ls();return n.forEach((o=>{const u=this.docs.get(o);r=r.insert(o,u?u.document.mutableCopy():$e.newInvalidDocument(o))})),$.resolve(r)}getDocumentsMatchingQuery(t,n,r,o){let u=ls();const f=n.path,p=new ct(f.child("__id-9223372036854775808__")),g=this.docs.getIteratorFrom(p);for(;g.hasNext();){const{key:_,value:{document:E}}=g.getNext();if(!f.isPrefixOf(_.path))break;_.path.length>f.length+1||OI(xI(E),r)<=0||(o.has(E.key)||Sh(n,E))&&(u=u.insert(E.key,E.mutableCopy()))}return $.resolve(u)}getAllFromCollectionGroup(t,n,r,o){mt(9500)}ii(t,n){return $.forEach(this.docs,(r=>n(r)))}newChangeBuffer(t){return new r2(this)}getSize(t){return $.resolve(this.size)}}class r2 extends JC{constructor(t){super(),this.Nr=t}applyChanges(t){const n=[];return this.changes.forEach(((r,o)=>{o.isValidDocument()?n.push(this.Nr.addEntry(t,o)):this.Nr.removeEntry(r)})),$.waitFor(n)}getFromCache(t,n){return this.Nr.getEntry(t,n)}getAllFromCache(t,n){return this.Nr.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a2{constructor(t){this.persistence=t,this.si=new Zr((n=>Qm(n)),Km),this.lastRemoteSnapshotVersion=_t.min(),this.highestTargetId=0,this.oi=0,this._i=new Wm,this.targetCount=0,this.ai=lo.ur()}forEachTarget(t,n){return this.si.forEach(((r,o)=>n(o))),$.resolve()}getLastRemoteSnapshotVersion(t){return $.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return $.resolve(this.oi)}allocateTargetId(t){return this.highestTargetId=this.ai.next(),$.resolve(this.highestTargetId)}setTargetsMetadata(t,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.oi&&(this.oi=n),$.resolve()}Pr(t){this.si.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.ai=new lo(n),this.highestTargetId=n),t.sequenceNumber>this.oi&&(this.oi=t.sequenceNumber)}addTargetData(t,n){return this.Pr(n),this.targetCount+=1,$.resolve()}updateTargetData(t,n){return this.Pr(n),$.resolve()}removeTargetData(t,n){return this.si.delete(n.target),this._i.jr(n.targetId),this.targetCount-=1,$.resolve()}removeTargets(t,n,r){let o=0;const u=[];return this.si.forEach(((f,p)=>{p.sequenceNumber<=n&&r.get(p.targetId)===null&&(this.si.delete(f),u.push(this.removeMatchingKeysForTargetId(t,p.targetId)),o++)})),$.waitFor(u).next((()=>o))}getTargetCount(t){return $.resolve(this.targetCount)}getTargetData(t,n){const r=this.si.get(n)||null;return $.resolve(r)}addMatchingKeys(t,n,r){return this._i.Wr(n,r),$.resolve()}removeMatchingKeys(t,n,r){this._i.zr(n,r);const o=this.persistence.referenceDelegate,u=[];return o&&n.forEach((f=>{u.push(o.markPotentiallyOrphaned(t,f))})),$.waitFor(u)}removeMatchingKeysForTargetId(t,n){return this._i.jr(n),$.resolve()}getMatchingKeysForTargetId(t,n){const r=this._i.Hr(n);return $.resolve(r)}containsKey(t,n){return $.resolve(this._i.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zE{constructor(t,n){this.ui={},this.overlays={},this.ci=new Th(0),this.li=!1,this.li=!0,this.hi=new n2,this.referenceDelegate=t(this),this.Pi=new a2(this),this.indexManager=new FC,this.remoteDocumentCache=(function(o){return new s2(o)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new qC(n),this.Ii=new t2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new e2,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let r=this.ui[t.toKey()];return r||(r=new i2(n,this.referenceDelegate),this.ui[t.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(t,n,r){st("MemoryPersistence","Starting transaction:",t);const o=new o2(this.ci.next());return this.referenceDelegate.Ei(),r(o).next((u=>this.referenceDelegate.di(o).next((()=>u)))).toPromise().then((u=>(o.raiseOnCommittedEvent(),u)))}Ai(t,n){return $.or(Object.values(this.ui).map((r=>()=>r.containsKey(t,n))))}}class o2 extends VI{constructor(t){super(),this.currentSequenceNumber=t}}class tp{constructor(t){this.persistence=t,this.Ri=new Wm,this.Vi=null}static mi(t){return new tp(t)}get fi(){if(this.Vi)return this.Vi;throw mt(60996)}addReference(t,n,r){return this.Ri.addReference(r,n),this.fi.delete(r.toString()),$.resolve()}removeReference(t,n,r){return this.Ri.removeReference(r,n),this.fi.add(r.toString()),$.resolve()}markPotentiallyOrphaned(t,n){return this.fi.add(n.toString()),$.resolve()}removeTarget(t,n){this.Ri.jr(n.targetId).forEach((o=>this.fi.add(o.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,n.targetId).next((o=>{o.forEach((u=>this.fi.add(u.toString())))})).next((()=>r.removeTargetData(t,n)))}Ei(){this.Vi=new Set}di(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return $.forEach(this.fi,(r=>{const o=ct.fromPath(r);return this.gi(t,o).next((u=>{u||n.removeEntry(o,_t.min())}))})).next((()=>(this.Vi=null,n.apply(t))))}updateLimboDocument(t,n){return this.gi(t,n).next((r=>{r?this.fi.delete(n.toString()):this.fi.add(n.toString())}))}Ti(t){return 0}gi(t,n){return $.or([()=>$.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Ai(t,n)])}}class rh{constructor(t,n){this.persistence=t,this.pi=new Zr((r=>PI(r.path)),((r,o)=>r.isEqual(o))),this.garbageCollector=$C(this,n)}static mi(t,n){return new rh(t,n)}Ei(){}di(t){return $.resolve()}forEachTarget(t,n){return this.persistence.getTargetCache().forEachTarget(t,n)}gr(t){const n=this.wr(t);return this.persistence.getTargetCache().getTargetCount(t).next((r=>n.next((o=>r+o))))}wr(t){let n=0;return this.pr(t,(r=>{n++})).next((()=>n))}pr(t,n){return $.forEach(this.pi,((r,o)=>this.br(t,r,o).next((u=>u?$.resolve():n(o)))))}removeTargets(t,n,r){return this.persistence.getTargetCache().removeTargets(t,n,r)}removeOrphanedDocuments(t,n){let r=0;const o=this.persistence.getRemoteDocumentCache(),u=o.newChangeBuffer();return o.ii(t,(f=>this.br(t,f,n).next((p=>{p||(r++,u.removeEntry(f,_t.min()))})))).next((()=>u.apply(t))).next((()=>r))}markPotentiallyOrphaned(t,n){return this.pi.set(n,t.currentSequenceNumber),$.resolve()}removeTarget(t,n){const r=n.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,r)}addReference(t,n,r){return this.pi.set(r,t.currentSequenceNumber),$.resolve()}removeReference(t,n,r){return this.pi.set(r,t.currentSequenceNumber),$.resolve()}updateLimboDocument(t,n){return this.pi.set(n,t.currentSequenceNumber),$.resolve()}Ti(t){let n=t.key.toString().length;return t.isFoundDocument()&&(n+=jc(t.data.value)),n}br(t,n,r){return $.or([()=>this.persistence.Ai(t,n),()=>this.persistence.getTargetCache().containsKey(t,n),()=>{const o=this.pi.get(n);return $.resolve(o!==void 0&&o>r)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{constructor(t,n,r,o){this.targetId=t,this.fromCache=n,this.Es=r,this.ds=o}static As(t,n){let r=Mt(),o=Mt();for(const u of n.docChanges)switch(u.type){case 0:r=r.add(u.doc.key);break;case 1:o=o.add(u.doc.key)}return new ep(t,n.fromCache,r,o)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u2{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return WS()?8:kI(Je())>0?6:4})()}initialize(t,n){this.ps=t,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(t,n,r,o){const u={result:null};return this.ys(t,n).next((f=>{u.result=f})).next((()=>{if(!u.result)return this.ws(t,n,o,r).next((f=>{u.result=f}))})).next((()=>{if(u.result)return;const f=new l2;return this.Ss(t,n,f).next((p=>{if(u.result=p,this.Vs)return this.bs(t,n,f,p.size)}))})).next((()=>u.result))}bs(t,n,r,o){return r.documentReadCount<this.fs?(Qa()<=xt.DEBUG&&st("QueryEngine","SDK will not create cache indexes for query:",Ka(n),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),$.resolve()):(Qa()<=xt.DEBUG&&st("QueryEngine","Query:",Ka(n),"scans",r.documentReadCount,"local documents and returns",o,"documents as results."),r.documentReadCount>this.gs*o?(Qa()<=xt.DEBUG&&st("QueryEngine","The SDK decides to create cache indexes for query:",Ka(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,Ni(n))):$.resolve())}ys(t,n){if(Wv(n))return $.resolve(null);let r=Ni(n);return this.indexManager.getIndexType(t,r).next((o=>o===0?null:(n.limit!==null&&o===1&&(n=ym(n,null,"F"),r=Ni(n)),this.indexManager.getDocumentsMatchingTarget(t,r).next((u=>{const f=Mt(...u);return this.ps.getDocuments(t,f).next((p=>this.indexManager.getMinOffset(t,r).next((g=>{const _=this.Ds(n,p);return this.Cs(n,_,f,g.readTime)?this.ys(t,ym(n,null,"F")):this.vs(t,_,n,g)}))))})))))}ws(t,n,r,o){return Wv(n)||o.isEqual(_t.min())?$.resolve(null):this.ps.getDocuments(t,r).next((u=>{const f=this.Ds(n,u);return this.Cs(n,f,r,o)?$.resolve(null):(Qa()<=xt.DEBUG&&st("QueryEngine","Re-using previous result from %s to execute query: %s",o.toString(),Ka(n)),this.vs(t,f,n,DI(o,Ul)).next((p=>p)))}))}Ds(t,n){let r=new Oe(gE(t));return n.forEach(((o,u)=>{Sh(t,u)&&(r=r.add(u))})),r}Cs(t,n,r,o){if(t.limit===null)return!1;if(r.size!==n.size)return!0;const u=t.limitType==="F"?n.last():n.first();return!!u&&(u.hasPendingWrites||u.version.compareTo(o)>0)}Ss(t,n,r){return Qa()<=xt.DEBUG&&st("QueryEngine","Using full collection scan to execute query:",Ka(n)),this.ps.getDocumentsMatchingQuery(t,n,Ws.min(),r)}vs(t,n,r,o){return this.ps.getDocumentsMatchingQuery(t,r,o).next((u=>(n.forEach((f=>{u=u.insert(f.key,f)})),u)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const np="LocalStore",c2=3e8;class h2{constructor(t,n,r,o){this.persistence=t,this.Fs=n,this.serializer=o,this.Ms=new oe(Ot),this.xs=new Zr((u=>Qm(u)),Km),this.Os=new Map,this.Ns=t.getRemoteDocumentCache(),this.Pi=t.getTargetCache(),this.Ii=t.getBundleCache(),this.Bs(r)}Bs(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new WC(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>t.collect(n,this.Ms)))}}function f2(s,t,n,r){return new h2(s,t,n,r)}async function jE(s,t){const n=Tt(s);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let o;return n.mutationQueue.getAllMutationBatches(r).next((u=>(o=u,n.Bs(t),n.mutationQueue.getAllMutationBatches(r)))).next((u=>{const f=[],p=[];let g=Mt();for(const _ of o){f.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}for(const _ of u){p.push(_.batchId);for(const E of _.mutations)g=g.add(E.key)}return n.localDocuments.getDocuments(r,g).next((_=>({Ls:_,removedBatchIds:f,addedBatchIds:p})))}))}))}function d2(s,t){const n=Tt(s);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const o=t.batch.keys(),u=n.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,g,_,E){const b=_.batch,N=b.keys();let B=$.resolve();return N.forEach((Z=>{B=B.next((()=>E.getEntry(g,Z))).next((W=>{const J=_.docVersions.get(Z);qt(J!==null,48541),W.version.compareTo(J)<0&&(b.applyToRemoteDocument(W,_),W.isValidDocument()&&(W.setReadTime(_.commitVersion),E.addEntry(W)))}))})),B.next((()=>p.mutationQueue.removeMutationBatch(g,b)))})(n,r,t,u).next((()=>u.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,o,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(p){let g=Mt();for(let _=0;_<p.mutationResults.length;++_)p.mutationResults[_].transformResults.length>0&&(g=g.add(p.batch.mutations[_].key));return g})(t)))).next((()=>n.localDocuments.getDocuments(r,o)))}))}function BE(s){const t=Tt(s);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>t.Pi.getLastRemoteSnapshotVersion(n)))}function m2(s,t){const n=Tt(s),r=t.snapshotVersion;let o=n.Ms;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(u=>{const f=n.Ns.newChangeBuffer({trackRemovals:!0});o=n.Ms;const p=[];t.targetChanges.forEach(((E,b)=>{const N=o.get(b);if(!N)return;p.push(n.Pi.removeMatchingKeys(u,E.removedDocuments,b).next((()=>n.Pi.addMatchingKeys(u,E.addedDocuments,b))));let B=N.withSequenceNumber(u.currentSequenceNumber);t.targetMismatches.get(b)!==null?B=B.withResumeToken(Qe.EMPTY_BYTE_STRING,_t.min()).withLastLimboFreeSnapshotVersion(_t.min()):E.resumeToken.approximateByteSize()>0&&(B=B.withResumeToken(E.resumeToken,r)),o=o.insert(b,B),(function(W,J,ot){return W.resumeToken.approximateByteSize()===0||J.snapshotVersion.toMicroseconds()-W.snapshotVersion.toMicroseconds()>=c2?!0:ot.addedDocuments.size+ot.modifiedDocuments.size+ot.removedDocuments.size>0})(N,B,E)&&p.push(n.Pi.updateTargetData(u,B))}));let g=ls(),_=Mt();if(t.documentUpdates.forEach((E=>{t.resolvedLimboDocuments.has(E)&&p.push(n.persistence.referenceDelegate.updateLimboDocument(u,E))})),p.push(p2(u,f,t.documentUpdates).next((E=>{g=E.ks,_=E.qs}))),!r.isEqual(_t.min())){const E=n.Pi.getLastRemoteSnapshotVersion(u).next((b=>n.Pi.setTargetsMetadata(u,u.currentSequenceNumber,r)));p.push(E)}return $.waitFor(p).next((()=>f.apply(u))).next((()=>n.localDocuments.getLocalViewOfDocuments(u,g,_))).next((()=>g))})).then((u=>(n.Ms=o,u)))}function p2(s,t,n){let r=Mt(),o=Mt();return n.forEach((u=>r=r.add(u))),t.getEntries(s,r).next((u=>{let f=ls();return n.forEach(((p,g)=>{const _=u.get(p);g.isFoundDocument()!==_.isFoundDocument()&&(o=o.add(p)),g.isNoDocument()&&g.version.isEqual(_t.min())?(t.removeEntry(p,g.readTime),f=f.insert(p,g)):!_.isValidDocument()||g.version.compareTo(_.version)>0||g.version.compareTo(_.version)===0&&_.hasPendingWrites?(t.addEntry(g),f=f.insert(p,g)):st(np,"Ignoring outdated watch update for ",p,". Current version:",_.version," Watch version:",g.version)})),{ks:f,qs:o}}))}function g2(s,t){const n=Tt(s);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(t===void 0&&(t=Hm),n.mutationQueue.getNextMutationBatchAfterBatchId(r,t))))}function y2(s,t){const n=Tt(s);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let o;return n.Pi.getTargetData(r,t).next((u=>u?(o=u,$.resolve(o)):n.Pi.allocateTargetId(r).next((f=>(o=new Ks(t,f,"TargetPurposeListen",r.currentSequenceNumber),n.Pi.addTargetData(r,o).next((()=>o)))))))})).then((r=>{const o=n.Ms.get(r.targetId);return(o===null||r.snapshotVersion.compareTo(o.snapshotVersion)>0)&&(n.Ms=n.Ms.insert(r.targetId,r),n.xs.set(t,r.targetId)),r}))}async function Am(s,t,n){const r=Tt(s),o=r.Ms.get(t),u=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",u,(f=>r.persistence.referenceDelegate.removeTarget(f,o)))}catch(f){if(!mo(f))throw f;st(np,`Failed to update sequence numbers for target ${t}: ${f}`)}r.Ms=r.Ms.remove(t),r.xs.delete(o.target)}function f0(s,t,n){const r=Tt(s);let o=_t.min(),u=Mt();return r.persistence.runTransaction("Execute query","readwrite",(f=>(function(g,_,E){const b=Tt(g),N=b.xs.get(E);return N!==void 0?$.resolve(b.Ms.get(N)):b.Pi.getTargetData(_,E)})(r,f,Ni(t)).next((p=>{if(p)return o=p.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(f,p.targetId).next((g=>{u=g}))})).next((()=>r.Fs.getDocumentsMatchingQuery(f,t,n?o:_t.min(),n?u:Mt()))).next((p=>(_2(r,nC(t),p),{documents:p,Qs:u})))))}function _2(s,t,n){let r=s.Os.get(t)||_t.min();n.forEach(((o,u)=>{u.readTime.compareTo(r)>0&&(r=u.readTime)})),s.Os.set(t,r)}class d0{constructor(){this.activeTargetIds=lC()}zs(t){this.activeTargetIds=this.activeTargetIds.add(t)}js(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Gs(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class v2{constructor(){this.Mo=new d0,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,r){}addLocalQueryTarget(t,n=!0){return n&&this.Mo.zs(t),this.xo[t]||"not-current"}updateQueryState(t,n,r){this.xo[t]=n}removeLocalQueryTarget(t){this.Mo.js(t)}isLocalQueryTarget(t){return this.Mo.activeTargetIds.has(t)}clearQueryState(t){delete this.xo[t]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(t){return this.Mo.activeTargetIds.has(t)}start(){return this.Mo=new d0,Promise.resolve()}handleUserChange(t,n,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{Oo(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m0="ConnectivityMonitor";class p0{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(t){this.qo.push(t)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){st(m0,"Network connectivity changed: AVAILABLE");for(const t of this.qo)t(0)}ko(){st(m0,"Network connectivity changed: UNAVAILABLE");for(const t of this.qo)t(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mc=null;function bm(){return Mc===null?Mc=(function(){return 268435456+Math.round(2147483648*Math.random())})():Mc++,"0x"+Mc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd="RestConnection",E2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class A2{get $o(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),o=encodeURIComponent(this.databaseId.database);this.Uo=n+"://"+t.host,this.Ko=`projects/${r}/databases/${o}`,this.Wo=this.databaseId.database===th?`project_id=${r}`:`project_id=${r}&database_id=${o}`}Go(t,n,r,o,u){const f=bm(),p=this.zo(t,n.toUriEncodedString());st(Xd,`Sending RPC '${t}' ${f}:`,p,r);const g={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(g,o,u);const{host:_}=new URL(p),E=Yr(_);return this.Jo(t,p,g,r,E).then((b=>(st(Xd,`Received RPC '${t}' ${f}: `,b),b)),(b=>{throw so(Xd,`RPC '${t}' ${f} failed with error: `,b,"url: ",p,"request:",r),b}))}Ho(t,n,r,o,u,f){return this.Go(t,n,r,o,u)}jo(t,n,r){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ho})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((o,u)=>t[u]=o)),r&&r.headers.forEach(((o,u)=>t[u]=o))}zo(t,n){const r=E2[t];return`${this.Uo}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(t){this.Yo=t.Yo,this.Zo=t.Zo}Xo(t){this.e_=t}t_(t){this.n_=t}r_(t){this.i_=t}onMessage(t){this.s_=t}close(){this.Zo()}send(t){this.Yo(t)}o_(){this.e_()}__(){this.n_()}a_(t){this.i_(t)}u_(t){this.s_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ye="WebChannelConnection";class S2 extends A2{constructor(t){super(t),this.c_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Jo(t,n,r,o,u){const f=bm();return new Promise(((p,g)=>{const _=new HT;_.setWithCredentials(!0),_.listenOnce(FT.COMPLETE,(()=>{try{switch(_.getLastErrorCode()){case zc.NO_ERROR:const b=_.getResponseJson();st(Ye,`XHR for RPC '${t}' ${f} received:`,JSON.stringify(b)),p(b);break;case zc.TIMEOUT:st(Ye,`RPC '${t}' ${f} timed out`),g(new it(X.DEADLINE_EXCEEDED,"Request time out"));break;case zc.HTTP_ERROR:const N=_.getStatus();if(st(Ye,`RPC '${t}' ${f} failed with status:`,N,"response text:",_.getResponseText()),N>0){let B=_.getResponseJson();Array.isArray(B)&&(B=B[0]);const Z=B==null?void 0:B.error;if(Z&&Z.status&&Z.message){const W=(function(ot){const gt=ot.toLowerCase().replace(/_/g,"-");return Object.values(X).indexOf(gt)>=0?gt:X.UNKNOWN})(Z.status);g(new it(W,Z.message))}else g(new it(X.UNKNOWN,"Server responded with status "+_.getStatus()))}else g(new it(X.UNAVAILABLE,"Connection failed."));break;default:mt(9055,{l_:t,streamId:f,h_:_.getLastErrorCode(),P_:_.getLastError()})}}finally{st(Ye,`RPC '${t}' ${f} completed.`)}}));const E=JSON.stringify(o);st(Ye,`RPC '${t}' ${f} sending request:`,o),_.send(n,"POST",E,r,15)}))}T_(t,n,r){const o=bm(),u=[this.Uo,"/","google.firestore.v1.Firestore","/",t,"/channel"],f=KT(),p=QT(),g={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},_=this.longPollingOptions.timeoutSeconds;_!==void 0&&(g.longPollingTimeout=Math.round(1e3*_)),this.useFetchStreams&&(g.useFetchStreams=!0),this.jo(g.initMessageHeaders,n,r),g.encodeInitMessageHeaders=!0;const E=u.join("");st(Ye,`Creating RPC '${t}' stream ${o}: ${E}`,g);const b=f.createWebChannel(E,g);this.I_(b);let N=!1,B=!1;const Z=new b2({Yo:J=>{B?st(Ye,`Not sending because RPC '${t}' stream ${o} is closed:`,J):(N||(st(Ye,`Opening RPC '${t}' stream ${o} transport.`),b.open(),N=!0),st(Ye,`RPC '${t}' stream ${o} sending:`,J),b.send(J))},Zo:()=>b.close()}),W=(J,ot,gt)=>{J.listen(ot,(ht=>{try{gt(ht)}catch(Et){setTimeout((()=>{throw Et}),0)}}))};return W(b,bl.EventType.OPEN,(()=>{B||(st(Ye,`RPC '${t}' stream ${o} transport opened.`),Z.o_())})),W(b,bl.EventType.CLOSE,(()=>{B||(B=!0,st(Ye,`RPC '${t}' stream ${o} transport closed`),Z.a_(),this.E_(b))})),W(b,bl.EventType.ERROR,(J=>{B||(B=!0,so(Ye,`RPC '${t}' stream ${o} transport errored. Name:`,J.name,"Message:",J.message),Z.a_(new it(X.UNAVAILABLE,"The operation could not be completed")))})),W(b,bl.EventType.MESSAGE,(J=>{var ot;if(!B){const gt=J.data[0];qt(!!gt,16349);const ht=gt,Et=(ht==null?void 0:ht.error)||((ot=ht[0])==null?void 0:ot.error);if(Et){st(Ye,`RPC '${t}' stream ${o} received error:`,Et);const Ht=Et.status;let Rt=(function(I){const V=Se[I];if(V!==void 0)return CE(V)})(Ht),C=Et.message;Rt===void 0&&(Rt=X.INTERNAL,C="Unknown error status: "+Ht+" with message "+Et.message),B=!0,Z.a_(new it(Rt,C)),b.close()}else st(Ye,`RPC '${t}' stream ${o} received:`,gt),Z.u_(gt)}})),W(p,GT.STAT_EVENT,(J=>{J.stat===cm.PROXY?st(Ye,`RPC '${t}' stream ${o} detected buffering proxy`):J.stat===cm.NOPROXY&&st(Ye,`RPC '${t}' stream ${o} detected no buffering proxy`)})),setTimeout((()=>{Z.__()}),0),Z}terminate(){this.c_.forEach((t=>t.close())),this.c_=[]}I_(t){this.c_.push(t)}E_(t){this.c_=this.c_.filter((n=>n===t))}}function $d(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ch(s){return new CC(s,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qE{constructor(t,n,r=1e3,o=1.5,u=6e4){this.Mi=t,this.timerId=n,this.d_=r,this.A_=o,this.R_=u,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(t){this.cancel();const n=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-r);o>0&&st("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.V_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g0="PersistentStream";class HE{constructor(t,n,r,o,u,f,p,g){this.Mi=t,this.S_=r,this.b_=o,this.connection=u,this.authCredentialsProvider=f,this.appCheckCredentialsProvider=p,this.listener=g,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new qE(t,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(t){this.Q_(),this.stream.send(t)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,n){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,t!==4?this.M_.reset():n&&n.code===X.RESOURCE_EXHAUSTED?(os(n.toString()),os("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===X.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.r_(n)}K_(){}auth(){this.state=1;const t=this.W_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,o])=>{this.D_===n&&this.G_(r,o)}),(r=>{t((()=>{const o=new it(X.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(o)}))}))}G_(t,n){const r=this.W_(this.D_);this.stream=this.j_(t,n),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((o=>{r((()=>this.z_(o)))})),this.stream.onMessage((o=>{r((()=>++this.F_==1?this.J_(o):this.onNext(o)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(t){return st(g0,`close with error: ${t}`),this.stream=null,this.close(4,t)}W_(t){return n=>{this.Mi.enqueueAndForget((()=>this.D_===t?n():(st(g0,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class w2 extends HE{constructor(t,n,r,o,u,f){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,o,f),this.serializer=u}j_(t,n){return this.connection.T_("Listen",t,n)}J_(t){return this.onNext(t)}onNext(t){this.M_.reset();const n=xC(this.serializer,t),r=(function(u){if(!("targetChange"in u))return _t.min();const f=u.targetChange;return f.targetIds&&f.targetIds.length?_t.min():f.readTime?Di(f.readTime):_t.min()})(t);return this.listener.H_(n,r)}Y_(t){const n={};n.database=Em(this.serializer),n.addTarget=(function(u,f){let p;const g=f.target;if(p=pm(g)?{documents:VC(u,g)}:{query:kC(u,g).ft},p.targetId=f.targetId,f.resumeToken.approximateByteSize()>0){p.resumeToken=xE(u,f.resumeToken);const _=_m(u,f.expectedCount);_!==null&&(p.expectedCount=_)}else if(f.snapshotVersion.compareTo(_t.min())>0){p.readTime=sh(u,f.snapshotVersion.toTimestamp());const _=_m(u,f.expectedCount);_!==null&&(p.expectedCount=_)}return p})(this.serializer,t);const r=PC(this.serializer,t);r&&(n.labels=r),this.q_(n)}Z_(t){const n={};n.database=Em(this.serializer),n.removeTarget=t,this.q_(n)}}class R2 extends HE{constructor(t,n,r,o,u,f){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,o,f),this.serializer=u}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(t,n){return this.connection.T_("Write",t,n)}J_(t){return qt(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,qt(!t.writeResults||t.writeResults.length===0,55816),this.listener.ta()}onNext(t){qt(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.M_.reset();const n=MC(t.writeResults,t.commitTime),r=Di(t.commitTime);return this.listener.na(r,n)}ra(){const t={};t.database=Em(this.serializer),this.q_(t)}ea(t){const n={streamToken:this.lastStreamToken,writes:t.map((r=>OC(this.serializer,r)))};this.q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{}class C2 extends I2{constructor(t,n,r,o){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=r,this.serializer=o,this.ia=!1}sa(){if(this.ia)throw new it(X.FAILED_PRECONDITION,"The client has already been terminated.")}Go(t,n,r,o){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,f])=>this.connection.Go(t,vm(n,r),o,u,f))).catch((u=>{throw u.name==="FirebaseError"?(u.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new it(X.UNKNOWN,u.toString())}))}Ho(t,n,r,o,u){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([f,p])=>this.connection.Ho(t,vm(n,r),o,f,p,u))).catch((f=>{throw f.name==="FirebaseError"?(f.code===X.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),f):new it(X.UNKNOWN,f.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class N2{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(t){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ca("Offline")))}set(t){this.Pa(),this.oa=0,t==="Online"&&(this.aa=!1),this.ca(t)}ca(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}la(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(os(n),this.aa=!1):st("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gr="RemoteStore";class D2{constructor(t,n,r,o,u){this.localStore=t,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=u,this.Aa.Oo((f=>{r.enqueueAndForget((async()=>{ta(this)&&(st(Gr,"Restarting streams for network reachability change."),await(async function(g){const _=Tt(g);_.Ea.add(4),await Jl(_),_.Ra.set("Unknown"),_.Ea.delete(4),await Nh(_)})(this))}))})),this.Ra=new N2(r,o)}}async function Nh(s){if(ta(s))for(const t of s.da)await t(!0)}async function Jl(s){for(const t of s.da)await t(!1)}function FE(s,t){const n=Tt(s);n.Ia.has(t.targetId)||(n.Ia.set(t.targetId,t),ap(n)?rp(n):go(n).O_()&&sp(n,t))}function ip(s,t){const n=Tt(s),r=go(n);n.Ia.delete(t),r.O_()&&GE(n,t),n.Ia.size===0&&(r.O_()?r.L_():ta(n)&&n.Ra.set("Unknown"))}function sp(s,t){if(s.Va.Ue(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(_t.min())>0){const n=s.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}go(s).Y_(t)}function GE(s,t){s.Va.Ue(t),go(s).Z_(t)}function rp(s){s.Va=new SC({getRemoteKeysForTarget:t=>s.remoteSyncer.getRemoteKeysForTarget(t),At:t=>s.Ia.get(t)||null,ht:()=>s.datastore.serializer.databaseId}),go(s).start(),s.Ra.ua()}function ap(s){return ta(s)&&!go(s).x_()&&s.Ia.size>0}function ta(s){return Tt(s).Ea.size===0}function QE(s){s.Va=void 0}async function x2(s){s.Ra.set("Online")}async function O2(s){s.Ia.forEach(((t,n)=>{sp(s,t)}))}async function M2(s,t){QE(s),ap(s)?(s.Ra.ha(t),rp(s)):s.Ra.set("Unknown")}async function V2(s,t,n){if(s.Ra.set("Online"),t instanceof DE&&t.state===2&&t.cause)try{await(async function(o,u){const f=u.cause;for(const p of u.targetIds)o.Ia.has(p)&&(await o.remoteSyncer.rejectListen(p,f),o.Ia.delete(p),o.Va.removeTarget(p))})(s,t)}catch(r){st(Gr,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await ah(s,r)}else if(t instanceof Hc?s.Va.Ze(t):t instanceof NE?s.Va.st(t):s.Va.tt(t),!n.isEqual(_t.min()))try{const r=await BE(s.localStore);n.compareTo(r)>=0&&await(function(u,f){const p=u.Va.Tt(f);return p.targetChanges.forEach(((g,_)=>{if(g.resumeToken.approximateByteSize()>0){const E=u.Ia.get(_);E&&u.Ia.set(_,E.withResumeToken(g.resumeToken,f))}})),p.targetMismatches.forEach(((g,_)=>{const E=u.Ia.get(g);if(!E)return;u.Ia.set(g,E.withResumeToken(Qe.EMPTY_BYTE_STRING,E.snapshotVersion)),GE(u,g);const b=new Ks(E.target,g,_,E.sequenceNumber);sp(u,b)})),u.remoteSyncer.applyRemoteEvent(p)})(s,n)}catch(r){st(Gr,"Failed to raise snapshot:",r),await ah(s,r)}}async function ah(s,t,n){if(!mo(t))throw t;s.Ea.add(1),await Jl(s),s.Ra.set("Offline"),n||(n=()=>BE(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{st(Gr,"Retrying IndexedDB access"),await n(),s.Ea.delete(1),await Nh(s)}))}function KE(s,t){return t().catch((n=>ah(s,n,t)))}async function Dh(s){const t=Tt(s),n=ir(t);let r=t.Ta.length>0?t.Ta[t.Ta.length-1].batchId:Hm;for(;k2(t);)try{const o=await g2(t.localStore,r);if(o===null){t.Ta.length===0&&n.L_();break}r=o.batchId,U2(t,o)}catch(o){await ah(t,o)}YE(t)&&XE(t)}function k2(s){return ta(s)&&s.Ta.length<10}function U2(s,t){s.Ta.push(t);const n=ir(s);n.O_()&&n.X_&&n.ea(t.mutations)}function YE(s){return ta(s)&&!ir(s).x_()&&s.Ta.length>0}function XE(s){ir(s).start()}async function P2(s){ir(s).ra()}async function L2(s){const t=ir(s);for(const n of s.Ta)t.ea(n.mutations)}async function z2(s,t,n){const r=s.Ta.shift(),o=$m.from(r,t,n);await KE(s,(()=>s.remoteSyncer.applySuccessfulWrite(o))),await Dh(s)}async function j2(s,t){t&&ir(s).X_&&await(async function(r,o){if((function(f){return EC(f)&&f!==X.ABORTED})(o.code)){const u=r.Ta.shift();ir(r).B_(),await KE(r,(()=>r.remoteSyncer.rejectFailedWrite(u.batchId,o))),await Dh(r)}})(s,t),YE(s)&&XE(s)}async function y0(s,t){const n=Tt(s);n.asyncQueue.verifyOperationInProgress(),st(Gr,"RemoteStore received new credentials");const r=ta(n);n.Ea.add(3),await Jl(n),r&&n.Ra.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ea.delete(3),await Nh(n)}async function B2(s,t){const n=Tt(s);t?(n.Ea.delete(2),await Nh(n)):t||(n.Ea.add(2),await Jl(n),n.Ra.set("Unknown"))}function go(s){return s.ma||(s.ma=(function(n,r,o){const u=Tt(n);return u.sa(),new w2(r,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(s.datastore,s.asyncQueue,{Xo:x2.bind(null,s),t_:O2.bind(null,s),r_:M2.bind(null,s),H_:V2.bind(null,s)}),s.da.push((async t=>{t?(s.ma.B_(),ap(s)?rp(s):s.Ra.set("Unknown")):(await s.ma.stop(),QE(s))}))),s.ma}function ir(s){return s.fa||(s.fa=(function(n,r,o){const u=Tt(n);return u.sa(),new R2(r,u.connection,u.authCredentials,u.appCheckCredentials,u.serializer,o)})(s.datastore,s.asyncQueue,{Xo:()=>Promise.resolve(),t_:P2.bind(null,s),r_:j2.bind(null,s),ta:L2.bind(null,s),na:z2.bind(null,s)}),s.da.push((async t=>{t?(s.fa.B_(),await Dh(s)):(await s.fa.stop(),s.Ta.length>0&&(st(Gr,`Stopping write stream with ${s.Ta.length} pending writes`),s.Ta=[]))}))),s.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(t,n,r,o,u){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=r,this.op=o,this.removalCallback=u,this.deferred=new Br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((f=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,n,r,o,u){const f=Date.now()+r,p=new op(t,n,f,o,u);return p.start(r),p}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new it(X.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function lp(s,t){if(os("AsyncQueue",`${t}: ${s}`),mo(s))return new it(X.UNAVAILABLE,`${t}: ${s}`);throw s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{static emptySet(t){return new to(t.comparator)}constructor(t){this.comparator=t?(n,r)=>t(n,r)||ct.comparator(n.key,r.key):(n,r)=>ct.comparator(n.key,r.key),this.keyedMap=Sl(),this.sortedSet=new oe(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((n,r)=>(t(n),!1)))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof to)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;n.hasNext();){const o=n.getNext().key,u=r.getNext().key;if(!o.isEqual(u))return!1}return!0}toString(){const t=[];return this.forEach((n=>{t.push(n.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const r=new to;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _0{constructor(){this.ga=new oe(ct.comparator)}track(t){const n=t.doc.key,r=this.ga.get(n);r?t.type!==0&&r.type===3?this.ga=this.ga.insert(n,t):t.type===3&&r.type!==1?this.ga=this.ga.insert(n,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.ga=this.ga.insert(n,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.ga=this.ga.remove(n):t.type===1&&r.type===2?this.ga=this.ga.insert(n,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.ga=this.ga.insert(n,{type:2,doc:t.doc}):mt(63341,{Rt:t,pa:r}):this.ga=this.ga.insert(n,t)}ya(){const t=[];return this.ga.inorderTraversal(((n,r)=>{t.push(r)})),t}}class uo{constructor(t,n,r,o,u,f,p,g,_){this.query=t,this.docs=n,this.oldDocs=r,this.docChanges=o,this.mutatedKeys=u,this.fromCache=f,this.syncStateChanged=p,this.excludesMetadataChanges=g,this.hasCachedResults=_}static fromInitialDocuments(t,n,r,o,u){const f=[];return n.forEach((p=>{f.push({type:0,doc:p})})),new uo(t,n,to.emptySet(n),f,r,o,!0,!1,u)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&bh(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,r=t.docChanges;if(n.length!==r.length)return!1;for(let o=0;o<n.length;o++)if(n[o].type!==r[o].type||!n[o].doc.isEqual(r[o].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q2{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((t=>t.Da()))}}class H2{constructor(){this.queries=v0(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const o=Tt(n),u=o.queries;o.queries=v0(),u.forEach(((f,p)=>{for(const g of p.Sa)g.onError(r)}))})(this,new it(X.ABORTED,"Firestore shutting down"))}}function v0(){return new Zr((s=>pE(s)),bh)}async function F2(s,t){const n=Tt(s);let r=3;const o=t.query;let u=n.queries.get(o);u?!u.ba()&&t.Da()&&(r=2):(u=new q2,r=t.Da()?0:1);try{switch(r){case 0:u.wa=await n.onListen(o,!0);break;case 1:u.wa=await n.onListen(o,!1);break;case 2:await n.onFirstRemoteStoreListen(o)}}catch(f){const p=lp(f,`Initialization of query '${Ka(t.query)}' failed`);return void t.onError(p)}n.queries.set(o,u),u.Sa.push(t),t.va(n.onlineState),u.wa&&t.Fa(u.wa)&&up(n)}async function G2(s,t){const n=Tt(s),r=t.query;let o=3;const u=n.queries.get(r);if(u){const f=u.Sa.indexOf(t);f>=0&&(u.Sa.splice(f,1),u.Sa.length===0?o=t.Da()?0:1:!u.ba()&&t.Da()&&(o=2))}switch(o){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Q2(s,t){const n=Tt(s);let r=!1;for(const o of t){const u=o.query,f=n.queries.get(u);if(f){for(const p of f.Sa)p.Fa(o)&&(r=!0);f.wa=o}}r&&up(n)}function K2(s,t,n){const r=Tt(s),o=r.queries.get(t);if(o)for(const u of o.Sa)u.onError(n);r.queries.delete(t)}function up(s){s.Ca.forEach((t=>{t.next()}))}var Sm,T0;(T0=Sm||(Sm={})).Ma="default",T0.Cache="cache";class Y2{constructor(t,n,r){this.query=t,this.xa=n,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(t){if(!this.options.includeMetadataChanges){const r=[];for(const o of t.docChanges)o.type!==3&&r.push(o);t=new uo(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Oa?this.Ba(t)&&(this.xa.next(t),n=!0):this.La(t,this.onlineState)&&(this.ka(t),n=!0),this.Na=t,n}onError(t){this.xa.error(t)}va(t){this.onlineState=t;let n=!1;return this.Na&&!this.Oa&&this.La(this.Na,t)&&(this.ka(this.Na),n=!0),n}La(t,n){if(!t.fromCache||!this.Da())return!0;const r=n!=="Offline";return(!this.options.qa||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Ba(t){if(t.docChanges.length>0)return!0;const n=this.Na&&this.Na.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ka(t){t=uo.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Oa=!0,this.xa.next(t)}Da(){return this.options.source!==Sm.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E{constructor(t){this.key=t}}class JE{constructor(t){this.key=t}}class X2{constructor(t,n){this.query=t,this.Ya=n,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Mt(),this.mutatedKeys=Mt(),this.eu=gE(t),this.tu=new to(this.eu)}get nu(){return this.Ya}ru(t,n){const r=n?n.iu:new _0,o=n?n.tu:this.tu;let u=n?n.mutatedKeys:this.mutatedKeys,f=o,p=!1;const g=this.query.limitType==="F"&&o.size===this.query.limit?o.last():null,_=this.query.limitType==="L"&&o.size===this.query.limit?o.first():null;if(t.inorderTraversal(((E,b)=>{const N=o.get(E),B=Sh(this.query,b)?b:null,Z=!!N&&this.mutatedKeys.has(N.key),W=!!B&&(B.hasLocalMutations||this.mutatedKeys.has(B.key)&&B.hasCommittedMutations);let J=!1;N&&B?N.data.isEqual(B.data)?Z!==W&&(r.track({type:3,doc:B}),J=!0):this.su(N,B)||(r.track({type:2,doc:B}),J=!0,(g&&this.eu(B,g)>0||_&&this.eu(B,_)<0)&&(p=!0)):!N&&B?(r.track({type:0,doc:B}),J=!0):N&&!B&&(r.track({type:1,doc:N}),J=!0,(g||_)&&(p=!0)),J&&(B?(f=f.add(B),u=W?u.add(E):u.delete(E)):(f=f.delete(E),u=u.delete(E)))})),this.query.limit!==null)for(;f.size>this.query.limit;){const E=this.query.limitType==="F"?f.last():f.first();f=f.delete(E.key),u=u.delete(E.key),r.track({type:1,doc:E})}return{tu:f,iu:r,Cs:p,mutatedKeys:u}}su(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,r,o){const u=this.tu;this.tu=t.tu,this.mutatedKeys=t.mutatedKeys;const f=t.iu.ya();f.sort(((E,b)=>(function(B,Z){const W=J=>{switch(J){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return mt(20277,{Rt:J})}};return W(B)-W(Z)})(E.type,b.type)||this.eu(E.doc,b.doc))),this.ou(r),o=o??!1;const p=n&&!o?this._u():[],g=this.Xa.size===0&&this.current&&!o?1:0,_=g!==this.Za;return this.Za=g,f.length!==0||_?{snapshot:new uo(this.query,t.tu,u,f,t.mutatedKeys,g===0,_,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new _0,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(t){return!this.Ya.has(t)&&!!this.tu.has(t)&&!this.tu.get(t).hasLocalMutations}ou(t){t&&(t.addedDocuments.forEach((n=>this.Ya=this.Ya.add(n))),t.modifiedDocuments.forEach((n=>{})),t.removedDocuments.forEach((n=>this.Ya=this.Ya.delete(n))),this.current=t.current)}_u(){if(!this.current)return[];const t=this.Xa;this.Xa=Mt(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const n=[];return t.forEach((r=>{this.Xa.has(r)||n.push(new JE(r))})),this.Xa.forEach((r=>{t.has(r)||n.push(new $E(r))})),n}cu(t){this.Ya=t.Qs,this.Xa=Mt();const n=this.ru(t.documents);return this.applyChanges(n,!0)}lu(){return uo.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const cp="SyncEngine";class $2{constructor(t,n,r){this.query=t,this.targetId=n,this.view=r}}class J2{constructor(t){this.key=t,this.hu=!1}}class Z2{constructor(t,n,r,o,u,f){this.localStore=t,this.remoteStore=n,this.eventManager=r,this.sharedClientState=o,this.currentUser=u,this.maxConcurrentLimboResolutions=f,this.Pu={},this.Tu=new Zr((p=>pE(p)),bh),this.Iu=new Map,this.Eu=new Set,this.du=new oe(ct.comparator),this.Au=new Map,this.Ru=new Wm,this.Vu={},this.mu=new Map,this.fu=lo.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function W2(s,t,n=!0){const r=iA(s);let o;const u=r.Tu.get(t);return u?(r.sharedClientState.addLocalQueryTarget(u.targetId),o=u.view.lu()):o=await ZE(r,t,n,!0),o}async function tN(s,t){const n=iA(s);await ZE(n,t,!0,!1)}async function ZE(s,t,n,r){const o=await y2(s.localStore,Ni(t)),u=o.targetId,f=s.sharedClientState.addLocalQueryTarget(u,n);let p;return r&&(p=await eN(s,t,u,f==="current",o.resumeToken)),s.isPrimaryClient&&n&&FE(s.remoteStore,o),p}async function eN(s,t,n,r,o){s.pu=(b,N,B)=>(async function(W,J,ot,gt){let ht=J.view.ru(ot);ht.Cs&&(ht=await f0(W.localStore,J.query,!1).then((({documents:C})=>J.view.ru(C,ht))));const Et=gt&&gt.targetChanges.get(J.targetId),Ht=gt&&gt.targetMismatches.get(J.targetId)!=null,Rt=J.view.applyChanges(ht,W.isPrimaryClient,Et,Ht);return A0(W,J.targetId,Rt.au),Rt.snapshot})(s,b,N,B);const u=await f0(s.localStore,t,!0),f=new X2(t,u.Qs),p=f.ru(u.documents),g=$l.createSynthesizedTargetChangeForCurrentChange(n,r&&s.onlineState!=="Offline",o),_=f.applyChanges(p,s.isPrimaryClient,g);A0(s,n,_.au);const E=new $2(t,n,f);return s.Tu.set(t,E),s.Iu.has(n)?s.Iu.get(n).push(t):s.Iu.set(n,[t]),_.snapshot}async function nN(s,t,n){const r=Tt(s),o=r.Tu.get(t),u=r.Iu.get(o.targetId);if(u.length>1)return r.Iu.set(o.targetId,u.filter((f=>!bh(f,t)))),void r.Tu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(o.targetId),r.sharedClientState.isActiveQueryTarget(o.targetId)||await Am(r.localStore,o.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(o.targetId),n&&ip(r.remoteStore,o.targetId),wm(r,o.targetId)})).catch(fo)):(wm(r,o.targetId),await Am(r.localStore,o.targetId,!0))}async function iN(s,t){const n=Tt(s),r=n.Tu.get(t),o=n.Iu.get(r.targetId);n.isPrimaryClient&&o.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ip(n.remoteStore,r.targetId))}async function sN(s,t,n){const r=hN(s);try{const o=await(function(f,p){const g=Tt(f),_=ne.now(),E=p.reduce(((B,Z)=>B.add(Z.key)),Mt());let b,N;return g.persistence.runTransaction("Locally write mutations","readwrite",(B=>{let Z=ls(),W=Mt();return g.Ns.getEntries(B,E).next((J=>{Z=J,Z.forEach(((ot,gt)=>{gt.isValidDocument()||(W=W.add(ot))}))})).next((()=>g.localDocuments.getOverlayedDocuments(B,Z))).next((J=>{b=J;const ot=[];for(const gt of p){const ht=gC(gt,b.get(gt.key).overlayedDocument);ht!=null&&ot.push(new Wr(gt.key,ht,oE(ht.value.mapValue),is.exists(!0)))}return g.mutationQueue.addMutationBatch(B,_,ot,p)})).next((J=>{N=J;const ot=J.applyToLocalDocumentSet(b,W);return g.documentOverlayCache.saveOverlays(B,J.batchId,ot)}))})).then((()=>({batchId:N.batchId,changes:_E(b)})))})(r.localStore,t);r.sharedClientState.addPendingMutation(o.batchId),(function(f,p,g){let _=f.Vu[f.currentUser.toKey()];_||(_=new oe(Ot)),_=_.insert(p,g),f.Vu[f.currentUser.toKey()]=_})(r,o.batchId,n),await Zl(r,o.changes),await Dh(r.remoteStore)}catch(o){const u=lp(o,"Failed to persist write");n.reject(u)}}async function WE(s,t){const n=Tt(s);try{const r=await m2(n.localStore,t);t.targetChanges.forEach(((o,u)=>{const f=n.Au.get(u);f&&(qt(o.addedDocuments.size+o.modifiedDocuments.size+o.removedDocuments.size<=1,22616),o.addedDocuments.size>0?f.hu=!0:o.modifiedDocuments.size>0?qt(f.hu,14607):o.removedDocuments.size>0&&(qt(f.hu,42227),f.hu=!1))})),await Zl(n,r,t)}catch(r){await fo(r)}}function E0(s,t,n){const r=Tt(s);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const o=[];r.Tu.forEach(((u,f)=>{const p=f.view.va(t);p.snapshot&&o.push(p.snapshot)})),(function(f,p){const g=Tt(f);g.onlineState=p;let _=!1;g.queries.forEach(((E,b)=>{for(const N of b.Sa)N.va(p)&&(_=!0)})),_&&up(g)})(r.eventManager,t),o.length&&r.Pu.H_(o),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function rN(s,t,n){const r=Tt(s);r.sharedClientState.updateQueryState(t,"rejected",n);const o=r.Au.get(t),u=o&&o.key;if(u){let f=new oe(ct.comparator);f=f.insert(u,$e.newNoDocument(u,_t.min()));const p=Mt().add(u),g=new Ih(_t.min(),new Map,new oe(Ot),f,p);await WE(r,g),r.du=r.du.remove(u),r.Au.delete(t),hp(r)}else await Am(r.localStore,t,!1).then((()=>wm(r,t,n))).catch(fo)}async function aN(s,t){const n=Tt(s),r=t.batch.batchId;try{const o=await d2(n.localStore,t);eA(n,r,null),tA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Zl(n,o)}catch(o){await fo(o)}}async function oN(s,t,n){const r=Tt(s);try{const o=await(function(f,p){const g=Tt(f);return g.persistence.runTransaction("Reject batch","readwrite-primary",(_=>{let E;return g.mutationQueue.lookupMutationBatch(_,p).next((b=>(qt(b!==null,37113),E=b.keys(),g.mutationQueue.removeMutationBatch(_,b)))).next((()=>g.mutationQueue.performConsistencyCheck(_))).next((()=>g.documentOverlayCache.removeOverlaysForBatchId(_,E,p))).next((()=>g.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(_,E))).next((()=>g.localDocuments.getDocuments(_,E)))}))})(r.localStore,t);eA(r,t,n),tA(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Zl(r,o)}catch(o){await fo(o)}}function tA(s,t){(s.mu.get(t)||[]).forEach((n=>{n.resolve()})),s.mu.delete(t)}function eA(s,t,n){const r=Tt(s);let o=r.Vu[r.currentUser.toKey()];if(o){const u=o.get(t);u&&(n?u.reject(n):u.resolve(),o=o.remove(t)),r.Vu[r.currentUser.toKey()]=o}}function wm(s,t,n=null){s.sharedClientState.removeLocalQueryTarget(t);for(const r of s.Iu.get(t))s.Tu.delete(r),n&&s.Pu.yu(r,n);s.Iu.delete(t),s.isPrimaryClient&&s.Ru.jr(t).forEach((r=>{s.Ru.containsKey(r)||nA(s,r)}))}function nA(s,t){s.Eu.delete(t.path.canonicalString());const n=s.du.get(t);n!==null&&(ip(s.remoteStore,n),s.du=s.du.remove(t),s.Au.delete(n),hp(s))}function A0(s,t,n){for(const r of n)r instanceof $E?(s.Ru.addReference(r.key,t),lN(s,r)):r instanceof JE?(st(cp,"Document no longer in limbo: "+r.key),s.Ru.removeReference(r.key,t),s.Ru.containsKey(r.key)||nA(s,r.key)):mt(19791,{wu:r})}function lN(s,t){const n=t.key,r=n.path.canonicalString();s.du.get(n)||s.Eu.has(r)||(st(cp,"New document in limbo: "+n),s.Eu.add(r),hp(s))}function hp(s){for(;s.Eu.size>0&&s.du.size<s.maxConcurrentLimboResolutions;){const t=s.Eu.values().next().value;s.Eu.delete(t);const n=new ct(Wt.fromString(t)),r=s.fu.next();s.Au.set(r,new J2(n)),s.du=s.du.insert(n,r),FE(s.remoteStore,new Ks(Ni(Ym(n.path)),r,"TargetPurposeLimboResolution",Th.ce))}}async function Zl(s,t,n){const r=Tt(s),o=[],u=[],f=[];r.Tu.isEmpty()||(r.Tu.forEach(((p,g)=>{f.push(r.pu(g,t,n).then((_=>{var E;if((_||n)&&r.isPrimaryClient){const b=_?!_.fromCache:(E=n==null?void 0:n.targetChanges.get(g.targetId))==null?void 0:E.current;r.sharedClientState.updateQueryState(g.targetId,b?"current":"not-current")}if(_){o.push(_);const b=ep.As(g.targetId,_);u.push(b)}})))})),await Promise.all(f),r.Pu.H_(o),await(async function(g,_){const E=Tt(g);try{await E.persistence.runTransaction("notifyLocalViewChanges","readwrite",(b=>$.forEach(_,(N=>$.forEach(N.Es,(B=>E.persistence.referenceDelegate.addReference(b,N.targetId,B))).next((()=>$.forEach(N.ds,(B=>E.persistence.referenceDelegate.removeReference(b,N.targetId,B)))))))))}catch(b){if(!mo(b))throw b;st(np,"Failed to update sequence numbers: "+b)}for(const b of _){const N=b.targetId;if(!b.fromCache){const B=E.Ms.get(N),Z=B.snapshotVersion,W=B.withLastLimboFreeSnapshotVersion(Z);E.Ms=E.Ms.insert(N,W)}}})(r.localStore,u))}async function uN(s,t){const n=Tt(s);if(!n.currentUser.isEqual(t)){st(cp,"User change. New user:",t.toKey());const r=await jE(n.localStore,t);n.currentUser=t,(function(u,f){u.mu.forEach((p=>{p.forEach((g=>{g.reject(new it(X.CANCELLED,f))}))})),u.mu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Zl(n,r.Ls)}}function cN(s,t){const n=Tt(s),r=n.Au.get(t);if(r&&r.hu)return Mt().add(r.key);{let o=Mt();const u=n.Iu.get(t);if(!u)return o;for(const f of u){const p=n.Tu.get(f);o=o.unionWith(p.view.nu)}return o}}function iA(s){const t=Tt(s);return t.remoteStore.remoteSyncer.applyRemoteEvent=WE.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=cN.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=rN.bind(null,t),t.Pu.H_=Q2.bind(null,t.eventManager),t.Pu.yu=K2.bind(null,t.eventManager),t}function hN(s){const t=Tt(s);return t.remoteStore.remoteSyncer.applySuccessfulWrite=aN.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=oN.bind(null,t),t}class oh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Ch(t.databaseInfo.databaseId),this.sharedClientState=this.Du(t),this.persistence=this.Cu(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Fu(t,this.localStore),this.indexBackfillerScheduler=this.Mu(t,this.localStore)}Fu(t,n){return null}Mu(t,n){return null}vu(t){return f2(this.persistence,new u2,t.initialUser,this.serializer)}Cu(t){return new zE(tp.mi,this.serializer)}Du(t){return new v2}async terminate(){var t,n;(t=this.gcScheduler)==null||t.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}oh.provider={build:()=>new oh};class fN extends oh{constructor(t){super(),this.cacheSizeBytes=t}Fu(t,n){qt(this.persistence.referenceDelegate instanceof rh,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new YC(r,t.asyncQueue,n)}Cu(t){const n=this.cacheSizeBytes!==void 0?hn.withCacheSize(this.cacheSizeBytes):hn.DEFAULT;return new zE((r=>rh.mi(r,n)),this.serializer)}}class Rm{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>E0(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=uN.bind(null,this.syncEngine),await B2(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new H2})()}createDatastore(t){const n=Ch(t.databaseInfo.databaseId),r=(function(u){return new S2(u)})(t.databaseInfo);return(function(u,f,p,g){return new C2(u,f,p,g)})(t.authCredentials,t.appCheckCredentials,r,n)}createRemoteStore(t){return(function(r,o,u,f,p){return new D2(r,o,u,f,p)})(this.localStore,this.datastore,t.asyncQueue,(n=>E0(this.syncEngine,n,0)),(function(){return p0.v()?new p0:new T2})())}createSyncEngine(t,n){return(function(o,u,f,p,g,_,E){const b=new Z2(o,u,f,p,g,_);return E&&(b.gu=!0),b})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}async terminate(){var t,n;await(async function(o){const u=Tt(o);st(Gr,"RemoteStore shutting down."),u.Ea.add(5),await Jl(u),u.Aa.shutdown(),u.Ra.set("Unknown")})(this.remoteStore),(t=this.datastore)==null||t.terminate(),(n=this.eventManager)==null||n.terminate()}}Rm.provider={build:()=>new Rm};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dN{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.Ou(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.Ou(this.observer.error,t):os("Uncaught Error in snapshot listener:",t.toString()))}Nu(){this.muted=!0}Ou(t,n){setTimeout((()=>{this.muted||t(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sr="FirestoreClient";class mN{constructor(t,n,r,o,u){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=o,this.user=Xe.UNAUTHENTICATED,this.clientId=qm.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=u,this.authCredentials.start(r,(async f=>{st(sr,"Received user=",f.uid),await this.authCredentialListener(f),this.user=f})),this.appCheckCredentials.start(r,(f=>(st(sr,"Received new app check token=",f),this.appCheckCredentialListener(f,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new Br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const r=lp(n,"Failed to shutdown persistence");t.reject(r)}})),t.promise}}async function Jd(s,t){s.asyncQueue.verifyOperationInProgress(),st(sr,"Initializing OfflineComponentProvider");const n=s.configuration;await t.initialize(n);let r=n.initialUser;s.setCredentialChangeListener((async o=>{r.isEqual(o)||(await jE(t.localStore,o),r=o)})),t.persistence.setDatabaseDeletedListener((()=>s.terminate())),s._offlineComponents=t}async function b0(s,t){s.asyncQueue.verifyOperationInProgress();const n=await pN(s);st(sr,"Initializing OnlineComponentProvider"),await t.initialize(n,s.configuration),s.setCredentialChangeListener((r=>y0(t.remoteStore,r))),s.setAppCheckTokenChangeListener(((r,o)=>y0(t.remoteStore,o))),s._onlineComponents=t}async function pN(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){st(sr,"Using user provided OfflineComponentProvider");try{await Jd(s,s._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!(function(o){return o.name==="FirebaseError"?o.code===X.FAILED_PRECONDITION||o.code===X.UNIMPLEMENTED:!(typeof DOMException<"u"&&o instanceof DOMException)||o.code===22||o.code===20||o.code===11})(n))throw n;so("Error using user provided cache. Falling back to memory cache: "+n),await Jd(s,new oh)}}else st(sr,"Using default OfflineComponentProvider"),await Jd(s,new fN(void 0));return s._offlineComponents}async function sA(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(st(sr,"Using user provided OnlineComponentProvider"),await b0(s,s._uninitializedComponentsProvider._online)):(st(sr,"Using default OnlineComponentProvider"),await b0(s,new Rm))),s._onlineComponents}function gN(s){return sA(s).then((t=>t.syncEngine))}async function S0(s){const t=await sA(s),n=t.eventManager;return n.onListen=W2.bind(null,t.syncEngine),n.onUnlisten=nN.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=tN.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=iN.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(s){const t={};return s.timeoutSeconds!==void 0&&(t.timeoutSeconds=s.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="firestore.googleapis.com",R0=!0;class I0{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new it(X.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=aA,this.ssl=R0}else this.host=t.host,this.ssl=t.ssl??R0;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=LE;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<QC)throw new it(X.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}NI("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=rA(t.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new it(X.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new it(X.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new it(X.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(r,o){return r.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class xh{constructor(t,n,r,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=r,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new I0({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new it(X.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new it(X.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new I0(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new vI;switch(r.type){case"firstParty":return new bI(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new it(X.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=w0.get(n);r&&(st("ComponentProvider","Removing Datastore"),w0.delete(n),r.terminate())})(this),Promise.resolve()}}function yN(s,t,n,r={}){var _;s=Nl(s,xh);const o=Yr(t),u=s._getSettings(),f={...u,emulatorOptions:s._getEmulatorOptions()},p=`${t}:${n}`;o&&(Nm(`https://${p}`),Dm("Firestore",!0)),u.host!==aA&&u.host!==p&&so("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const g={...u,host:p,ssl:o,emulatorOptions:r};if(!Zs(g,f)&&(s._setSettings(g),r.mockUserToken)){let E,b;if(typeof r.mockUserToken=="string")E=r.mockUserToken,b=Xe.MOCK_USER;else{E=eT(r.mockUserToken,(_=s._app)==null?void 0:_.options.projectId);const N=r.mockUserToken.sub||r.mockUserToken.user_id;if(!N)throw new it(X.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");b=new Xe(N)}s._authCredentials=new TI(new XT(E,b))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(t,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new ea(this.firestore,t,this._query)}}class xe{constructor(t,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Js(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new xe(this.firestore,t,this._key)}toJSON(){return{type:xe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,r){if(Yl(n,xe._jsonSchema))return new xe(t,r||null,new ct(Wt.fromString(n.referencePath)))}}xe._jsonSchemaVersion="firestore/documentReference/1.0",xe._jsonSchema={type:Re("string",xe._jsonSchemaVersion),referencePath:Re("string")};class Js extends ea{constructor(t,n,r){super(t,n,Ym(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new xe(this.firestore,null,new ct(t))}withConverter(t){return new Js(this.firestore,t,this._path)}}function oA(s,t,...n){if(s=Ge(s),$T("collection","path",t),s instanceof xh){const r=Wt.fromString(t,...n);return zv(r),new Js(s,null,r)}{if(!(s instanceof xe||s instanceof Js))throw new it(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=s._path.child(Wt.fromString(t,...n));return zv(r),new Js(s.firestore,null,r)}}function _N(s,t,...n){if(s=Ge(s),arguments.length===1&&(t=qm.newId()),$T("doc","path",t),s instanceof xh){const r=Wt.fromString(t,...n);return Lv(r),new xe(s,null,new ct(r))}{if(!(s instanceof xe||s instanceof Js))throw new it(X.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=s._path.child(Wt.fromString(t,...n));return Lv(r),new xe(s.firestore,s instanceof Js?s.converter:null,new ct(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="AsyncQueue";class N0{constructor(t=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new qE(this,"async_queue_retry"),this._c=()=>{const r=$d();r&&st(C0,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=t;const n=$d();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=$d();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Br;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Xu.push(t),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(t){if(!mo(t))throw t;st(C0,"Operation failed with retryable error: "+t)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const n=this.ac.then((()=>(this.rc=!0,t().catch((r=>{throw this.nc=r,this.rc=!1,os("INTERNAL UNHANDLED ERROR: ",D0(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=n,n}enqueueAfterDelay(t,n,r){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const o=op.createAndSchedule(this,t,n,r,(u=>this.hc(u)));return this.tc.push(o),o}uc(){this.nc&&mt(47125,{Pc:D0(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ic(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ec(t){return this.Tc().then((()=>{this.tc.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()}))}dc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function D0(s){let t=s.message||"";return s.stack&&(t=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(s){return(function(n,r){if(typeof n!="object"||n===null)return!1;const o=n;for(const u of r)if(u in o&&typeof o[u]=="function")return!0;return!1})(s,["next","error","complete"])}class lh extends xh{constructor(t,n,r,o){super(t,n,r,o),this.type="firestore",this._queue=new N0,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new N0(t),this._firestoreClient=void 0,await t}}}function vN(s,t){const n=typeof s=="object"?s:gh(),r=typeof s=="string"?s:th,o=rr(n,"firestore").getImmediate({identifier:r});if(!o._initialized){const u=Z0("firestore");u&&yN(o,...u)}return o}function lA(s){if(s._terminated)throw new it(X.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||TN(s),s._firestoreClient}function TN(s){var r,o,u;const t=s._freezeSettings(),n=(function(p,g,_,E){return new jI(p,g,_,E.host,E.ssl,E.experimentalForceLongPolling,E.experimentalAutoDetectLongPolling,rA(E.experimentalLongPollingOptions),E.useFetchStreams,E.isUsingEmulator)})(s._databaseId,((r=s._app)==null?void 0:r.options.appId)||"",s._persistenceKey,t);s._componentsProvider||(o=t.localCache)!=null&&o._offlineComponentProvider&&((u=t.localCache)!=null&&u._onlineComponentProvider)&&(s._componentsProvider={_offline:t.localCache._offlineComponentProvider,_online:t.localCache._onlineComponentProvider}),s._firestoreClient=new mN(s._authCredentials,s._appCheckCredentials,s._queue,n,s._componentsProvider&&(function(p){const g=p==null?void 0:p._online.build();return{_offline:p==null?void 0:p._offline.build(g),_online:g}})(s._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pn(Qe.fromBase64String(t))}catch(n){throw new it(X.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Pn(Qe.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Pn._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(Yl(t,Pn._jsonSchema))return Pn.fromBase64String(t.bytes)}}Pn._jsonSchemaVersion="firestore/bytes/1.0",Pn._jsonSchema={type:Re("string",Pn._jsonSchemaVersion),bytes:Re("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new it(X.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new it(X.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new it(X.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Ot(this._lat,t._lat)||Ot(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:xi._jsonSchemaVersion}}static fromJSON(t){if(Yl(t,xi._jsonSchema))return new xi(t.latitude,t.longitude)}}xi._jsonSchemaVersion="firestore/geoPoint/1.0",xi._jsonSchema={type:Re("string",xi._jsonSchemaVersion),latitude:Re("number"),longitude:Re("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(t){this._values=(t||[]).map((n=>n))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(r,o){if(r.length!==o.length)return!1;for(let u=0;u<r.length;++u)if(r[u]!==o[u])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Oi._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(Yl(t,Oi._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((n=>typeof n=="number")))return new Oi(t.vectorValues);throw new it(X.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Oi._jsonSchemaVersion="firestore/vectorValue/1.0",Oi._jsonSchema={type:Re("string",Oi._jsonSchemaVersion),vectorValues:Re("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EN=/^__.*__$/;class AN{constructor(t,n,r){this.data=t,this.fieldMask=n,this.fieldTransforms=r}toMutation(t,n){return this.fieldMask!==null?new Wr(t,this.data,this.fieldMask,n,this.fieldTransforms):new Xl(t,this.data,n,this.fieldTransforms)}}function uA(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw mt(40011,{Ac:s})}}class mp{constructor(t,n,r,o,u,f){this.settings=t,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=o,u===void 0&&this.Rc(),this.fieldTransforms=u||[],this.fieldMask=f||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(t){return new mp({...this.settings,...t},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(t){var o;const n=(o=this.path)==null?void 0:o.child(t),r=this.Vc({path:n,fc:!1});return r.gc(t),r}yc(t){var o;const n=(o=this.path)==null?void 0:o.child(t),r=this.Vc({path:n,fc:!1});return r.Rc(),r}wc(t){return this.Vc({path:void 0,fc:!0})}Sc(t){return uh(t,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(t){return this.fieldMask.find((n=>t.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>t.isPrefixOf(n.field)))!==void 0}Rc(){if(this.path)for(let t=0;t<this.path.length;t++)this.gc(this.path.get(t))}gc(t){if(t.length===0)throw this.Sc("Document fields must not be empty");if(uA(this.Ac)&&EN.test(t))throw this.Sc('Document fields cannot begin and end with "__"')}}class bN{constructor(t,n,r){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=r||Ch(t)}Cc(t,n,r,o=!1){return new mp({Ac:t,methodName:n,Dc:r,path:Fe.emptyPath(),fc:!1,bc:o},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cA(s){const t=s._freezeSettings(),n=Ch(s._databaseId);return new bN(s._databaseId,!!t.ignoreUndefinedProperties,n)}function SN(s,t,n,r,o,u={}){const f=s.Cc(u.merge||u.mergeFields?2:0,t,n,o);dA("Data must be an object, but it was:",f,r);const p=hA(r,f);let g,_;if(u.merge)g=new ti(f.fieldMask),_=f.fieldTransforms;else if(u.mergeFields){const E=[];for(const b of u.mergeFields){const N=RN(t,b,n);if(!f.contains(N))throw new it(X.INVALID_ARGUMENT,`Field '${N}' is specified in your field mask but missing from your input data.`);CN(E,N)||E.push(N)}g=new ti(E),_=f.fieldTransforms.filter((b=>g.covers(b.field)))}else g=null,_=f.fieldTransforms;return new AN(new Un(p),g,_)}class pp extends dp{_toFieldTransform(t){return new fC(t.path,new Bl)}isEqual(t){return t instanceof pp}}function wN(s,t,n,r=!1){return gp(n,s.Cc(r?4:3,t))}function gp(s,t){if(fA(s=Ge(s)))return dA("Unsupported field value:",t,s),hA(s,t);if(s instanceof dp)return(function(r,o){if(!uA(o.Ac))throw o.Sc(`${r._methodName}() can only be used with update() and set()`);if(!o.path)throw o.Sc(`${r._methodName}() is not currently supported inside arrays`);const u=r._toFieldTransform(o);u&&o.fieldTransforms.push(u)})(s,t),null;if(s===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),s instanceof Array){if(t.settings.fc&&t.Ac!==4)throw t.Sc("Nested arrays are not supported");return(function(r,o){const u=[];let f=0;for(const p of r){let g=gp(p,o.wc(f));g==null&&(g={nullValue:"NULL_VALUE"}),u.push(g),f++}return{arrayValue:{values:u}}})(s,t)}return(function(r,o){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return uC(o.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const u=ne.fromDate(r);return{timestampValue:sh(o.serializer,u)}}if(r instanceof ne){const u=new ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:sh(o.serializer,u)}}if(r instanceof xi)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pn)return{bytesValue:xE(o.serializer,r._byteString)};if(r instanceof xe){const u=o.databaseId,f=r.firestore._databaseId;if(!f.isEqual(u))throw o.Sc(`Document reference is for database ${f.projectId}/${f.database} but should be for database ${u.projectId}/${u.database}`);return{referenceValue:Zm(r.firestore._databaseId||o.databaseId,r._key.path)}}if(r instanceof Oi)return(function(f,p){return{mapValue:{fields:{[rE]:{stringValue:aE},[eh]:{arrayValue:{values:f.toArray().map((_=>{if(typeof _!="number")throw p.Sc("VectorValues must only contain numeric values.");return Xm(p.serializer,_)}))}}}}}})(r,o);throw o.Sc(`Unsupported field value: ${vh(r)}`)})(s,t)}function hA(s,t){const n={};return WT(s)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Jr(s,((r,o)=>{const u=gp(o,t.mc(r));u!=null&&(n[r]=u)})),{mapValue:{fields:n}}}function fA(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof ne||s instanceof xi||s instanceof Pn||s instanceof xe||s instanceof dp||s instanceof Oi)}function dA(s,t,n){if(!fA(n)||!JT(n)){const r=vh(n);throw r==="an object"?t.Sc(s+" a custom object"):t.Sc(s+" "+r)}}function RN(s,t,n){if((t=Ge(t))instanceof fp)return t._internalPath;if(typeof t=="string")return mA(s,t);throw uh("Field path arguments must be of type string or ",s,!1,void 0,n)}const IN=new RegExp("[~\\*/\\[\\]]");function mA(s,t,n){if(t.search(IN)>=0)throw uh(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,n);try{return new fp(...t.split("."))._internalPath}catch{throw uh(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,n)}}function uh(s,t,n,r,o){const u=r&&!r.isEmpty(),f=o!==void 0;let p=`Function ${t}() called with invalid data`;n&&(p+=" (via `toFirestore()`)"),p+=". ";let g="";return(u||f)&&(g+=" (found",u&&(g+=` in field ${r}`),f&&(g+=` in document ${o}`),g+=")"),new it(X.INVALID_ARGUMENT,p+s+g)}function CN(s,t){return s.some((n=>n.isEqual(t)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pA{constructor(t,n,r,o,u){this._firestore=t,this._userDataWriter=n,this._key=r,this._document=o,this._converter=u}get id(){return this._key.path.lastSegment()}get ref(){return new xe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new NN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(yp("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class NN extends pA{data(){return super.data()}}function yp(s,t){return typeof t=="string"?mA(s,t):t instanceof fp?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DN(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new it(X.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class _p{}class gA extends _p{}function xN(s,t,...n){let r=[];t instanceof _p&&r.push(t),r=r.concat(n),(function(u){const f=u.filter((g=>g instanceof Tp)).length,p=u.filter((g=>g instanceof vp)).length;if(f>1||f>0&&p>0)throw new it(X.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const o of r)s=o._apply(s);return s}class vp extends gA{constructor(t,n,r){super(),this._field=t,this._op=n,this._value=r,this.type="where"}static _create(t,n,r){return new vp(t,n,r)}_apply(t){const n=this._parse(t);return yA(t._query,n),new ea(t.firestore,t.converter,gm(t._query,n))}_parse(t){const n=cA(t.firestore);return(function(u,f,p,g,_,E,b){let N;if(_.isKeyField()){if(E==="array-contains"||E==="array-contains-any")throw new it(X.INVALID_ARGUMENT,`Invalid Query. You can't perform '${E}' queries on documentId().`);if(E==="in"||E==="not-in"){M0(b,E);const Z=[];for(const W of b)Z.push(O0(g,u,W));N={arrayValue:{values:Z}}}else N=O0(g,u,b)}else E!=="in"&&E!=="not-in"&&E!=="array-contains-any"||M0(b,E),N=wN(p,f,b,E==="in"||E==="not-in");return we.create(_,E,N)})(t._query,"where",n,t.firestore._databaseId,this._field,this._op,this._value)}}class Tp extends _p{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new Tp(t,n)}_parse(t){const n=this._queryConstraints.map((r=>r._parse(t))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:ii.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:((function(o,u){let f=o;const p=u.getFlattenedFilters();for(const g of p)yA(f,g),f=gm(f,g)})(t._query,n),new ea(t.firestore,t.converter,gm(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ep extends gA{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new Ep(t,n)}_apply(t){const n=(function(o,u,f){if(o.startAt!==null)throw new it(X.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(o.endAt!==null)throw new it(X.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new jl(u,f)})(t._query,this._field,this._direction);return new ea(t.firestore,t.converter,(function(o,u){const f=o.explicitOrderBy.concat([u]);return new po(o.path,o.collectionGroup,f,o.filters.slice(),o.limit,o.limitType,o.startAt,o.endAt)})(t._query,n))}}function ON(s,t="asc"){const n=t,r=yp("orderBy",s);return Ep._create(r,n)}function O0(s,t,n){if(typeof(n=Ge(n))=="string"){if(n==="")throw new it(X.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!mE(t)&&n.indexOf("/")!==-1)throw new it(X.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=t.path.child(Wt.fromString(n));if(!ct.isDocumentKey(r))throw new it(X.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Kv(s,new ct(r))}if(n instanceof xe)return Kv(s,n._key);throw new it(X.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vh(n)}.`)}function M0(s,t){if(!Array.isArray(s)||s.length===0)throw new it(X.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function yA(s,t){const n=(function(o,u){for(const f of o)for(const p of f.getFlattenedFilters())if(u.indexOf(p.op)>=0)return p.op;return null})(s.filters,(function(o){switch(o){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(t.op));if(n!==null)throw n===t.op?new it(X.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new it(X.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}class MN{convertValue(t,n="none"){switch(nr(t)){case 0:return null;case 1:return t.booleanValue;case 2:return me(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(er(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 11:return this.convertObject(t.mapValue,n);case 10:return this.convertVectorValue(t.mapValue);default:throw mt(62114,{value:t})}}convertObject(t,n){return this.convertObjectMap(t.fields,n)}convertObjectMap(t,n="none"){const r={};return Jr(t,((o,u)=>{r[o]=this.convertValue(u,n)})),r}convertVectorValue(t){var r,o,u;const n=(u=(o=(r=t.fields)==null?void 0:r[eh].arrayValue)==null?void 0:o.values)==null?void 0:u.map((f=>me(f.doubleValue)));return new Oi(n)}convertGeoPoint(t){return new xi(me(t.latitude),me(t.longitude))}convertArray(t,n){return(t.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(t,n){switch(n){case"previous":const r=Ah(t);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Pl(t));default:return null}}convertTimestamp(t){const n=tr(t);return new ne(n.seconds,n.nanos)}convertDocumentKey(t,n){const r=Wt.fromString(t);qt(PE(r),9688,{name:t});const o=new Ll(r.get(1),r.get(3)),u=new ct(r.popFirst(5));return o.isEqual(n)||os(`Document ${u} contains a document reference within a different database (${o.projectId}/${o.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VN(s,t,n){let r;return r=s?s.toFirestore(t):t,r}class Rl{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class qr extends pA{constructor(t,n,r,o,u,f){super(t,n,r,o,f),this._firestore=t,this._firestoreImpl=t,this.metadata=u}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Fc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const r=this._document.data.field(yp("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new it(X.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=qr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}qr._jsonSchemaVersion="firestore/documentSnapshot/1.0",qr._jsonSchema={type:Re("string",qr._jsonSchemaVersion),bundleSource:Re("string","DocumentSnapshot"),bundleName:Re("string"),bundle:Re("string")};class Fc extends qr{data(t={}){return super.data(t)}}class eo{constructor(t,n,r,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new Rl(o.hasPendingWrites,o.fromCache),this.query=r}get docs(){const t=[];return this.forEach((n=>t.push(n))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach((r=>{t.call(n,new Fc(this._firestore,this._userDataWriter,r.key,r,new Rl(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new it(X.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,u){if(o._snapshot.oldDocs.isEmpty()){let f=0;return o._snapshot.docChanges.map((p=>{const g=new Fc(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Rl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);return p.doc,{type:"added",doc:g,oldIndex:-1,newIndex:f++}}))}{let f=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((p=>u||p.type!==3)).map((p=>{const g=new Fc(o._firestore,o._userDataWriter,p.doc.key,p.doc,new Rl(o._snapshot.mutatedKeys.has(p.doc.key),o._snapshot.fromCache),o.query.converter);let _=-1,E=-1;return p.type!==0&&(_=f.indexOf(p.doc.key),f=f.delete(p.doc.key)),p.type!==1&&(f=f.add(p.doc),E=f.indexOf(p.doc.key)),{type:kN(p.type),doc:g,oldIndex:_,newIndex:E}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new it(X.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=eo._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=qm.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],o=[];return this.docs.forEach((u=>{u._document!==null&&(n.push(u._document),r.push(this._userDataWriter.convertObjectMap(u._document.data.value.mapValue.fields,"previous")),o.push(u.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function kN(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return mt(61501,{type:s})}}eo._jsonSchemaVersion="firestore/querySnapshot/1.0",eo._jsonSchema={type:Re("string",eo._jsonSchemaVersion),bundleSource:Re("string","QuerySnapshot"),bundleName:Re("string"),bundle:Re("string")};class _A extends MN{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pn(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new xe(this.firestore,null,n)}}function UN(s,t){const n=Nl(s.firestore,lh),r=_N(s),o=VN(s.converter,t);return LN(n,[SN(cA(s.firestore),"addDoc",r._key,o,s.converter!==null,{}).toMutation(r._key,is.exists(!1))]).then((()=>r))}function PN(s,...t){var g,_,E;s=Ge(s);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof t[r]!="object"||x0(t[r])||(n=t[r++]);const o={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(x0(t[r])){const b=t[r];t[r]=(g=b.next)==null?void 0:g.bind(b),t[r+1]=(_=b.error)==null?void 0:_.bind(b),t[r+2]=(E=b.complete)==null?void 0:E.bind(b)}let u,f,p;if(s instanceof xe)f=Nl(s.firestore,lh),p=Ym(s._key.path),u={next:b=>{t[r]&&t[r](zN(f,s,b))},error:t[r+1],complete:t[r+2]};else{const b=Nl(s,ea);f=Nl(b.firestore,lh),p=b._query;const N=new _A(f);u={next:B=>{t[r]&&t[r](new eo(f,N,b,B))},error:t[r+1],complete:t[r+2]},DN(s._query)}return(function(N,B,Z,W){const J=new dN(W),ot=new Y2(B,J,Z);return N.asyncQueue.enqueueAndForget((async()=>F2(await S0(N),ot))),()=>{J.Nu(),N.asyncQueue.enqueueAndForget((async()=>G2(await S0(N),ot)))}})(lA(f),p,o,u)}function LN(s,t){return(function(r,o){const u=new Br;return r.asyncQueue.enqueueAndForget((async()=>sN(await gN(r),o,u))),u.promise})(lA(s),t)}function zN(s,t,n){const r=n.docs.get(t._key),o=new _A(s);return new qr(s,o,t._key,r,new Rl(n.hasPendingWrites,n.fromCache),t.converter)}function jN(){return new pp("serverTimestamp")}(function(t,n=!0){(function(o){ho=o})($r),ni(new Ln("firestore",((r,{instanceIdentifier:o,options:u})=>{const f=r.getProvider("app").getImmediate(),p=new lh(new EI(r.getProvider("auth-internal")),new SI(f,r.getProvider("app-check-internal")),(function(_,E){if(!Object.prototype.hasOwnProperty.apply(_.options,["projectId"]))throw new it(X.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ll(_.options.projectId,E)})(f,o),f);return u={useFetchStreams:n,...u},p._setSettings(u),p}),"PUBLIC").setMultipleInstances(!0)),fn(Vv,kv,t),fn(Vv,kv,"esm2020")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="firebasestorage.googleapis.com",BN="storageBucket",qN=120*1e3,HN=600*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki extends zn{constructor(t,n,r=0){super(Zd(t),`Firebase Storage: ${n} (${Zd(t)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ki.prototype)}get status(){return this.status_}set status(t){this.status_=t}_codeEquals(t){return Zd(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Vi;(function(s){s.UNKNOWN="unknown",s.OBJECT_NOT_FOUND="object-not-found",s.BUCKET_NOT_FOUND="bucket-not-found",s.PROJECT_NOT_FOUND="project-not-found",s.QUOTA_EXCEEDED="quota-exceeded",s.UNAUTHENTICATED="unauthenticated",s.UNAUTHORIZED="unauthorized",s.UNAUTHORIZED_APP="unauthorized-app",s.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",s.INVALID_CHECKSUM="invalid-checksum",s.CANCELED="canceled",s.INVALID_EVENT_NAME="invalid-event-name",s.INVALID_URL="invalid-url",s.INVALID_DEFAULT_BUCKET="invalid-default-bucket",s.NO_DEFAULT_BUCKET="no-default-bucket",s.CANNOT_SLICE_BLOB="cannot-slice-blob",s.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",s.NO_DOWNLOAD_URL="no-download-url",s.INVALID_ARGUMENT="invalid-argument",s.INVALID_ARGUMENT_COUNT="invalid-argument-count",s.APP_DELETED="app-deleted",s.INVALID_ROOT_OPERATION="invalid-root-operation",s.INVALID_FORMAT="invalid-format",s.INTERNAL_ERROR="internal-error",s.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Vi||(Vi={}));function Zd(s){return"storage/"+s}function FN(){const s="An unknown error occurred, please check the error payload for server response.";return new ki(Vi.UNKNOWN,s)}function GN(){return new ki(Vi.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function QN(){return new ki(Vi.CANCELED,"User canceled the upload/download.")}function KN(s){return new ki(Vi.INVALID_URL,"Invalid URL '"+s+"'.")}function YN(s){return new ki(Vi.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+s+"'.")}function V0(s){return new ki(Vi.INVALID_ARGUMENT,s)}function TA(){return new ki(Vi.APP_DELETED,"The Firebase app was deleted.")}function XN(s){return new ki(Vi.INVALID_ROOT_OPERATION,"The operation '"+s+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,n){this.bucket=t,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,n){let r;try{r=ei.makeFromUrl(t,n)}catch{return new ei(t,"")}if(r.path==="")return r;throw YN(t)}static makeFromUrl(t,n){let r=null;const o="([A-Za-z0-9.\\-_]+)";function u(Et){Et.path.charAt(Et.path.length-1)==="/"&&(Et.path_=Et.path_.slice(0,-1))}const f="(/(.*))?$",p=new RegExp("^gs://"+o+f,"i"),g={bucket:1,path:3};function _(Et){Et.path_=decodeURIComponent(Et.path)}const E="v[A-Za-z0-9_]+",b=n.replace(/[.]/g,"\\."),N="(/([^?#]*).*)?$",B=new RegExp(`^https?://${b}/${E}/b/${o}/o${N}`,"i"),Z={bucket:1,path:3},W=n===vA?"(?:storage.googleapis.com|storage.cloud.google.com)":n,J="([^?#]*)",ot=new RegExp(`^https?://${W}/${o}/${J}`,"i"),ht=[{regex:p,indices:g,postModify:u},{regex:B,indices:Z,postModify:_},{regex:ot,indices:{bucket:1,path:2},postModify:_}];for(let Et=0;Et<ht.length;Et++){const Ht=ht[Et],Rt=Ht.regex.exec(t);if(Rt){const C=Rt[Ht.indices.bucket];let S=Rt[Ht.indices.path];S||(S=""),r=new ei(C,S),Ht.postModify(r);break}}if(r==null)throw KN(t);return r}}class $N{constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JN(s,t,n){let r=1,o=null,u=null,f=!1,p=0;function g(){return p===2}let _=!1;function E(...J){_||(_=!0,t.apply(null,J))}function b(J){o=setTimeout(()=>{o=null,s(B,g())},J)}function N(){u&&clearTimeout(u)}function B(J,...ot){if(_){N();return}if(J){N(),E.call(null,J,...ot);return}if(g()||f){N(),E.call(null,J,...ot);return}r<64&&(r*=2);let ht;p===1?(p=2,ht=0):ht=(r+Math.random())*1e3,b(ht)}let Z=!1;function W(J){Z||(Z=!0,N(),!_&&(o!==null?(J||(p=2),clearTimeout(o),b(0)):J||(p=1)))}return b(0),u=setTimeout(()=>{f=!0,W(!0)},n),W}function ZN(s){s(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WN(s){return s!==void 0}function k0(s,t,n,r){if(r<t)throw V0(`Invalid value for '${s}'. Expected ${t} or greater.`);if(r>n)throw V0(`Invalid value for '${s}'. Expected ${n} or less.`)}function tD(s){const t=encodeURIComponent;let n="?";for(const r in s)if(s.hasOwnProperty(r)){const o=t(r)+"="+t(s[r]);n=n+o+"&"}return n=n.slice(0,-1),n}var ch;(function(s){s[s.NO_ERROR=0]="NO_ERROR",s[s.NETWORK_ERROR=1]="NETWORK_ERROR",s[s.ABORT=2]="ABORT"})(ch||(ch={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eD(s,t){const n=s>=500&&s<600,o=[408,429].indexOf(s)!==-1,u=t.indexOf(s)!==-1;return n||o||u}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{constructor(t,n,r,o,u,f,p,g,_,E,b,N=!0,B=!1){this.url_=t,this.method_=n,this.headers_=r,this.body_=o,this.successCodes_=u,this.additionalRetryCodes_=f,this.callback_=p,this.errorCallback_=g,this.timeout_=_,this.progressCallback_=E,this.connectionFactory_=b,this.retry=N,this.isUsingEmulator=B,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((Z,W)=>{this.resolve_=Z,this.reject_=W,this.start_()})}start_(){const t=(r,o)=>{if(o){r(!1,new Vc(!1,null,!0));return}const u=this.connectionFactory_();this.pendingConnection_=u;const f=p=>{const g=p.loaded,_=p.lengthComputable?p.total:-1;this.progressCallback_!==null&&this.progressCallback_(g,_)};this.progressCallback_!==null&&u.addUploadProgressListener(f),u.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&u.removeUploadProgressListener(f),this.pendingConnection_=null;const p=u.getErrorCode()===ch.NO_ERROR,g=u.getStatus();if(!p||eD(g,this.additionalRetryCodes_)&&this.retry){const E=u.getErrorCode()===ch.ABORT;r(!1,new Vc(!1,null,E));return}const _=this.successCodes_.indexOf(g)!==-1;r(!0,new Vc(_,u))})},n=(r,o)=>{const u=this.resolve_,f=this.reject_,p=o.connection;if(o.wasSuccessCode)try{const g=this.callback_(p,p.getResponse());WN(g)?u(g):u()}catch(g){f(g)}else if(p!==null){const g=FN();g.serverResponse=p.getErrorText(),this.errorCallback_?f(this.errorCallback_(p,g)):f(g)}else if(o.canceled){const g=this.appDelete_?TA():QN();f(g)}else{const g=GN();f(g)}};this.canceled_?n(!1,new Vc(!1,null,!0)):this.backoffId_=JN(t,n,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,this.backoffId_!==null&&ZN(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Vc{constructor(t,n,r){this.wasSuccessCode=t,this.connection=n,this.canceled=!!r}}function iD(s,t){t!==null&&t.length>0&&(s.Authorization="Firebase "+t)}function sD(s,t){s["X-Firebase-Storage-Version"]="webjs/"+(t??"AppManager")}function rD(s,t){t&&(s["X-Firebase-GMPID"]=t)}function aD(s,t){t!==null&&(s["X-Firebase-AppCheck"]=t)}function oD(s,t,n,r,o,u,f=!0,p=!1){const g=tD(s.urlParams),_=s.url+g,E=Object.assign({},s.headers);return rD(E,t),iD(E,n),sD(E,u),aD(E,r),new nD(_,s.method,E,s.body,s.successCodes,s.additionalRetryCodes,s.handler,s.errorHandler,s.timeout,s.progressCallback,o,f,p)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lD(s){if(s.length===0)return null;const t=s.lastIndexOf("/");return t===-1?"":s.slice(0,t)}function uD(s){const t=s.lastIndexOf("/",s.length-2);return t===-1?s:s.slice(t+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(t,n){this._service=t,n instanceof ei?this._location=n:this._location=ei.makeFromUrl(n,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,n){return new hh(t,n)}get root(){const t=new ei(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return uD(this._location.path)}get storage(){return this._service}get parent(){const t=lD(this._location.path);if(t===null)return null;const n=new ei(this._location.bucket,t);return new hh(this._service,n)}_throwIfRoot(t){if(this._location.path==="")throw XN(t)}}function U0(s,t){const n=t==null?void 0:t[BN];return n==null?null:ei.makeFromBucketSpec(n,s)}function cD(s,t,n,r={}){s.host=`${t}:${n}`;const o=Yr(t);o&&(Nm(`https://${s.host}/b`),Dm("Storage",!0)),s._isUsingEmulator=!0,s._protocol=o?"https":"http";const{mockUserToken:u}=r;u&&(s._overrideAuthToken=typeof u=="string"?u:eT(u,s.app.options.projectId))}class hD{constructor(t,n,r,o,u,f=!1){this.app=t,this._authProvider=n,this._appCheckProvider=r,this._url=o,this._firebaseVersion=u,this._isUsingEmulator=f,this._bucket=null,this._host=vA,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=qN,this._maxUploadRetryTime=HN,this._requests=new Set,o!=null?this._bucket=ei.makeFromBucketSpec(o,this._host):this._bucket=U0(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,this._url!=null?this._bucket=ei.makeFromBucketSpec(this._url,t):this._bucket=U0(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){k0("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){k0("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const n=await t.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Zn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=this._appCheckProvider.getImmediate({optional:!0});return t?(await t.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new hh(this,t)}_makeRequest(t,n,r,o,u=!0){if(this._deleted)return new $N(TA());{const f=oD(t,this._appId,r,o,n,this._firebaseVersion,u,this._isUsingEmulator);return this._requests.add(f),f.getPromise().then(()=>this._requests.delete(f),()=>this._requests.delete(f)),f}}async makeRequestWithTokens(t,n){const[r,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,n,r,o).getPromise()}}const P0="@firebase/storage",L0="0.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const EA="storage";function fD(s=gh(),t){s=Ge(s);const r=rr(s,EA).getImmediate({identifier:t}),o=Z0("storage");return o&&dD(r,...o),r}function dD(s,t,n,r={}){cD(s,t,n,r)}function mD(s,{instanceIdentifier:t}){const n=s.getProvider("app").getImmediate(),r=s.getProvider("auth-internal"),o=s.getProvider("app-check-internal");return new hD(n,r,o,t,$r)}function pD(){ni(new Ln(EA,mD,"PUBLIC").setMultipleInstances(!0)),fn(P0,L0,""),fn(P0,L0,"esm2020")}pD();const AA="@firebase/installations",Ap="0.6.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA=1e4,SA=`w:${Ap}`,wA="FIS_v2",gD="https://firebaseinstallations.googleapis.com/v1",yD=3600*1e3,_D="installations",vD="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Qr=new Xr(_D,vD,TD);function RA(s){return s instanceof zn&&s.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA({projectId:s}){return`${gD}/projects/${s}/installations`}function CA(s){return{token:s.token,requestStatus:2,expiresIn:AD(s.expiresIn),creationTime:Date.now()}}async function NA(s,t){const r=(await t.json()).error;return Qr.create("request-failed",{requestName:s,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function DA({apiKey:s}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":s})}function ED(s,{refreshToken:t}){const n=DA(s);return n.append("Authorization",bD(t)),n}async function xA(s){const t=await s();return t.status>=500&&t.status<600?s():t}function AD(s){return Number(s.replace("s","000"))}function bD(s){return`${wA} ${s}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function SD({appConfig:s,heartbeatServiceProvider:t},{fid:n}){const r=IA(s),o=DA(s),u=t.getImmediate({optional:!0});if(u){const _=await u.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const f={fid:n,authVersion:wA,appId:s.appId,sdkVersion:SA},p={method:"POST",headers:o,body:JSON.stringify(f)},g=await xA(()=>fetch(r,p));if(g.ok){const _=await g.json();return{fid:_.fid||n,registrationStatus:2,refreshToken:_.refreshToken,authToken:CA(_.authToken)}}else throw await NA("Create Installation",g)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OA(s){return new Promise(t=>{setTimeout(t,s)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wD(s){return btoa(String.fromCharCode(...s)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RD=/^[cdef][\w-]{21}$/,Im="";function ID(){try{const s=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(s),s[0]=112+s[0]%16;const n=CD(s);return RD.test(n)?n:Im}catch{return Im}}function CD(s){return wD(s).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oh(s){return`${s.appName}!${s.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=new Map;function VA(s,t){const n=Oh(s);kA(n,t),ND(n,t)}function kA(s,t){const n=MA.get(s);if(n)for(const r of n)r(t)}function ND(s,t){const n=DD();n&&n.postMessage({key:s,fid:t}),xD()}let zr=null;function DD(){return!zr&&"BroadcastChannel"in self&&(zr=new BroadcastChannel("[Firebase] FID Change"),zr.onmessage=s=>{kA(s.data.key,s.data.fid)}),zr}function xD(){MA.size===0&&zr&&(zr.close(),zr=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD="firebase-installations-database",MD=1,Kr="firebase-installations-store";let Wd=null;function bp(){return Wd||(Wd=oT(OD,MD,{upgrade:(s,t)=>{switch(t){case 0:s.createObjectStore(Kr)}}})),Wd}async function fh(s,t){const n=Oh(s),o=(await bp()).transaction(Kr,"readwrite"),u=o.objectStore(Kr),f=await u.get(n);return await u.put(t,n),await o.done,(!f||f.fid!==t.fid)&&VA(s,t.fid),t}async function UA(s){const t=Oh(s),r=(await bp()).transaction(Kr,"readwrite");await r.objectStore(Kr).delete(t),await r.done}async function Mh(s,t){const n=Oh(s),o=(await bp()).transaction(Kr,"readwrite"),u=o.objectStore(Kr),f=await u.get(n),p=t(f);return p===void 0?await u.delete(n):await u.put(p,n),await o.done,p&&(!f||f.fid!==p.fid)&&VA(s,p.fid),p}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sp(s){let t;const n=await Mh(s.appConfig,r=>{const o=VD(r),u=kD(s,o);return t=u.registrationPromise,u.installationEntry});return n.fid===Im?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function VD(s){const t=s||{fid:ID(),registrationStatus:0};return PA(t)}function kD(s,t){if(t.registrationStatus===0){if(!navigator.onLine){const o=Promise.reject(Qr.create("app-offline"));return{installationEntry:t,registrationPromise:o}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=UD(s,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:PD(s)}:{installationEntry:t}}async function UD(s,t){try{const n=await SD(s,t);return fh(s.appConfig,n)}catch(n){throw RA(n)&&n.customData.serverCode===409?await UA(s.appConfig):await fh(s.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function PD(s){let t=await z0(s.appConfig);for(;t.registrationStatus===1;)await OA(100),t=await z0(s.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Sp(s);return r||n}return t}function z0(s){return Mh(s,t=>{if(!t)throw Qr.create("installation-not-found");return PA(t)})}function PA(s){return LD(s)?{fid:s.fid,registrationStatus:0}:s}function LD(s){return s.registrationStatus===1&&s.registrationTime+bA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zD({appConfig:s,heartbeatServiceProvider:t},n){const r=jD(s,n),o=ED(s,n),u=t.getImmediate({optional:!0});if(u){const _=await u.getHeartbeatsHeader();_&&o.append("x-firebase-client",_)}const f={installation:{sdkVersion:SA,appId:s.appId}},p={method:"POST",headers:o,body:JSON.stringify(f)},g=await xA(()=>fetch(r,p));if(g.ok){const _=await g.json();return CA(_)}else throw await NA("Generate Auth Token",g)}function jD(s,{fid:t}){return`${IA(s)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wp(s,t=!1){let n;const r=await Mh(s.appConfig,u=>{if(!LA(u))throw Qr.create("not-registered");const f=u.authToken;if(!t&&HD(f))return u;if(f.requestStatus===1)return n=BD(s,t),u;{if(!navigator.onLine)throw Qr.create("app-offline");const p=GD(u);return n=qD(s,p),p}});return n?await n:r.authToken}async function BD(s,t){let n=await j0(s.appConfig);for(;n.authToken.requestStatus===1;)await OA(100),n=await j0(s.appConfig);const r=n.authToken;return r.requestStatus===0?wp(s,t):r}function j0(s){return Mh(s,t=>{if(!LA(t))throw Qr.create("not-registered");const n=t.authToken;return QD(n)?{...t,authToken:{requestStatus:0}}:t})}async function qD(s,t){try{const n=await zD(s,t),r={...t,authToken:n};return await fh(s.appConfig,r),n}catch(n){if(RA(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await UA(s.appConfig);else{const r={...t,authToken:{requestStatus:0}};await fh(s.appConfig,r)}throw n}}function LA(s){return s!==void 0&&s.registrationStatus===2}function HD(s){return s.requestStatus===2&&!FD(s)}function FD(s){const t=Date.now();return t<s.creationTime||s.creationTime+s.expiresIn<t+yD}function GD(s){const t={requestStatus:1,requestTime:Date.now()};return{...s,authToken:t}}function QD(s){return s.requestStatus===1&&s.requestTime+bA<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KD(s){const t=s,{installationEntry:n,registrationPromise:r}=await Sp(t);return r?r.catch(console.error):wp(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YD(s,t=!1){const n=s;return await XD(n),(await wp(n,t)).token}async function XD(s){const{registrationPromise:t}=await Sp(s);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $D(s){if(!s||!s.options)throw tm("App Configuration");if(!s.name)throw tm("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!s.options[n])throw tm(n);return{appName:s.name,projectId:s.options.projectId,apiKey:s.options.apiKey,appId:s.options.appId}}function tm(s){return Qr.create("missing-app-config-values",{valueName:s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zA="installations",JD="installations-internal",ZD=s=>{const t=s.getProvider("app").getImmediate(),n=$D(t),r=rr(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},WD=s=>{const t=s.getProvider("app").getImmediate(),n=rr(t,zA).getImmediate();return{getId:()=>KD(n),getToken:o=>YD(n,o)}};function tx(){ni(new Ln(zA,ZD,"PUBLIC")),ni(new Ln(JD,WD,"PRIVATE"))}tx();fn(AA,Ap);fn(AA,Ap,"esm2020");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh="analytics",ex="firebase_id",nx="origin",ix=60*1e3,sx="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Rp="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nn=new ph("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rx={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},An=new Xr("analytics","Analytics",rx);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ax(s){if(!s.startsWith(Rp)){const t=An.create("invalid-gtag-resource",{gtagURL:s});return nn.warn(t.message),""}return s}function jA(s){return Promise.all(s.map(t=>t.catch(n=>n)))}function ox(s,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(s,t)),n}function lx(s,t){const n=ox("firebase-js-sdk-policy",{createScriptURL:ax}),r=document.createElement("script"),o=`${Rp}?l=${s}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(o):o,r.async=!0,document.head.appendChild(r)}function ux(s){let t=[];return Array.isArray(window[s])?t=window[s]:window[s]=t,t}async function cx(s,t,n,r,o,u){const f=r[o];try{if(f)await t[f];else{const g=(await jA(n)).find(_=>_.measurementId===o);g&&await t[g.appId]}}catch(p){nn.error(p)}s("config",o,u)}async function hx(s,t,n,r,o){try{let u=[];if(o&&o.send_to){let f=o.send_to;Array.isArray(f)||(f=[f]);const p=await jA(n);for(const g of f){const _=p.find(b=>b.measurementId===g),E=_&&t[_.appId];if(E)u.push(E);else{u=[];break}}}u.length===0&&(u=Object.values(t)),await Promise.all(u),s("event",r,o||{})}catch(u){nn.error(u)}}function fx(s,t,n,r){async function o(u,...f){try{if(u==="event"){const[p,g]=f;await hx(s,t,n,p,g)}else if(u==="config"){const[p,g]=f;await cx(s,t,n,r,p,g)}else if(u==="consent"){const[p,g]=f;s("consent",p,g)}else if(u==="get"){const[p,g,_]=f;s("get",p,g,_)}else if(u==="set"){const[p]=f;s("set",p)}else s(u,...f)}catch(p){nn.error(p)}}return o}function dx(s,t,n,r,o){let u=function(...f){window[r].push(arguments)};return window[o]&&typeof window[o]=="function"&&(u=window[o]),window[o]=fx(u,s,t,n),{gtagCore:u,wrappedGtag:window[o]}}function mx(s){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Rp)&&n.src.includes(s))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const px=30,gx=1e3;class yx{constructor(t={},n=gx){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const BA=new yx;function _x(s){return new Headers({Accept:"application/json","x-goog-api-key":s})}async function vx(s){var f;const{appId:t,apiKey:n}=s,r={method:"GET",headers:_x(n)},o=sx.replace("{app-id}",t),u=await fetch(o,r);if(u.status!==200&&u.status!==304){let p="";try{const g=await u.json();(f=g.error)!=null&&f.message&&(p=g.error.message)}catch{}throw An.create("config-fetch-failed",{httpStatus:u.status,responseMessage:p})}return u.json()}async function Tx(s,t=BA,n){const{appId:r,apiKey:o,measurementId:u}=s.options;if(!r)throw An.create("no-app-id");if(!o){if(u)return{measurementId:u,appId:r};throw An.create("no-api-key")}const f=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},p=new bx;return setTimeout(async()=>{p.abort()},ix),qA({appId:r,apiKey:o,measurementId:u},f,p,t)}async function qA(s,{throttleEndTimeMillis:t,backoffCount:n},r,o=BA){var p;const{appId:u,measurementId:f}=s;try{await Ex(r,t)}catch(g){if(f)return nn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:u,measurementId:f};throw g}try{const g=await vx(s);return o.deleteThrottleMetadata(u),g}catch(g){const _=g;if(!Ax(_)){if(o.deleteThrottleMetadata(u),f)return nn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${f} provided in the "measurementId" field in the local Firebase config. [${_==null?void 0:_.message}]`),{appId:u,measurementId:f};throw g}const E=Number((p=_==null?void 0:_.customData)==null?void 0:p.httpStatus)===503?ov(n,o.intervalMillis,px):ov(n,o.intervalMillis),b={throttleEndTimeMillis:Date.now()+E,backoffCount:n+1};return o.setThrottleMetadata(u,b),nn.debug(`Calling attemptFetch again in ${E} millis`),qA(s,b,r,o)}}function Ex(s,t){return new Promise((n,r)=>{const o=Math.max(t-Date.now(),0),u=setTimeout(n,o);s.addEventListener(()=>{clearTimeout(u),r(An.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Ax(s){if(!(s instanceof zn)||!s.customData)return!1;const t=Number(s.customData.httpStatus);return t===429||t===500||t===503||t===504}class bx{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Sx(s,t,n,r,o){if(o&&o.global){s("event",n,r);return}else{const u=await t,f={...r,send_to:u};s("event",n,f)}}async function wx(s,t,n,r){if(r&&r.global){const o={};for(const u of Object.keys(n))o[`user_properties.${u}`]=n[u];return s("set",o),Promise.resolve()}else{const o=await t;s("config",o,{update:!0,user_properties:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rx(){if(iT())try{await sT()}catch(s){return nn.warn(An.create("indexeddb-unavailable",{errorInfo:s==null?void 0:s.toString()}).message),!1}else return nn.warn(An.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ix(s,t,n,r,o,u,f){const p=Tx(s);p.then(N=>{n[N.measurementId]=N.appId,s.options.measurementId&&N.measurementId!==s.options.measurementId&&nn.warn(`The measurement ID in the local Firebase config (${s.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>nn.error(N)),t.push(p);const g=Rx().then(N=>{if(N)return r.getId()}),[_,E]=await Promise.all([p,g]);mx(u)||lx(u,_.measurementId),o("js",new Date);const b=(f==null?void 0:f.config)??{};return b[nx]="firebase",b.update=!0,E!=null&&(b[ex]=E),o("config",_.measurementId,b),_.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cx{constructor(t){this.app=t}_delete(){return delete no[this.app.options.appId],Promise.resolve()}}let no={},B0=[];const q0={};let em="dataLayer",Nx="gtag",H0,Ip,F0=!1;function Dx(){const s=[];if(nT()&&s.push("This is a browser extension environment."),tw()||s.push("Cookies are not available."),s.length>0){const t=s.map((r,o)=>`(${o+1}) ${r}`).join(" "),n=An.create("invalid-analytics-context",{errorInfo:t});nn.warn(n.message)}}function xx(s,t,n){Dx();const r=s.options.appId;if(!r)throw An.create("no-app-id");if(!s.options.apiKey)if(s.options.measurementId)nn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${s.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw An.create("no-api-key");if(no[r]!=null)throw An.create("already-exists",{id:r});if(!F0){ux(em);const{wrappedGtag:u,gtagCore:f}=dx(no,B0,q0,em,Nx);Ip=u,H0=f,F0=!0}return no[r]=Ix(s,B0,q0,t,H0,em,n),new Cx(s)}function Ox(s=gh()){s=Ge(s);const t=rr(s,dh);return t.isInitialized()?t.getImmediate():Mx(s)}function Mx(s,t={}){const n=rr(s,dh);if(n.isInitialized()){const o=n.getImmediate();if(Zs(t,n.getOptions()))return o;throw An.create("already-initialized")}return n.initialize({options:t})}function Vx(s,t,n){s=Ge(s),wx(Ip,no[s.app.options.appId],t,n).catch(r=>nn.error(r))}function kx(s,t,n,r){s=Ge(s),Sx(Ip,no[s.app.options.appId],t,n,r).catch(o=>nn.error(o))}const G0="@firebase/analytics",Q0="0.10.19";function Ux(){ni(new Ln(dh,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),o=t.getProvider("installations-internal").getImmediate();return xx(r,o,n)},"PUBLIC")),ni(new Ln("analytics-internal",s,"PRIVATE")),fn(G0,Q0),fn(G0,Q0,"esm2020");function s(t){try{const n=t.getProvider(dh).getImmediate();return{logEvent:(r,o,u)=>kx(n,r,o,u),setUserProperties:(r,o)=>Vx(n,r,o)}}catch(n){throw An.create("interop-component-reg-failed",{reason:n})}}}Ux();const Px={apiKey:"AIzaSyAYAgWBpw0eM9R0mJlP-6C_d9PN98ZlMlI",authDomain:"doctorinan.firebaseapp.com",projectId:"doctorinan",storageBucket:"doctorinan.firebasestorage.app",messagingSenderId:"490774658788",appId:"1:490774658788:web:5c920988e08b09bafaf6f1",measurementId:"G-460BBQVRFL"},Vh=lT(Px);yI(Vh);const HA=vN(Vh);fD(Vh);typeof window<"u"&&Ox(Vh);const Lx=()=>{const[s,t]=en.useState(""),[n,r]=en.useState(""),[o,u]=en.useState(!1),[f,p]=en.useState(""),[g,_]=en.useState(!1),E=async b=>{if(b.preventDefault(),p(""),_(!1),!n.trim()){p("Please provide your contact number.");return}u(!0);try{const N=await fetch("/api/createPayment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:n.trim(),amount:500})});if(!N.ok){const ot=await N.json();throw new Error(ot.error||"Failed to create payment")}const B=await N.json(),{paymentID:Z}=B;await new Promise(ot=>setTimeout(ot,1e3));const W=await fetch("/api/executePayment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({paymentID:Z})});if(!W.ok){const ot=await W.json();throw new Error(ot.error||"Payment execution failed")}if((await W.json()).status!=="completed")throw new Error("Payment not completed.");await UN(oA(HA,"consultations"),{phone:n.trim(),situation:s.trim(),paid:!0,amount:500,currency:"BDT",paymentID:Z,createdAt:jN(),status:"pending"}),_(!0),t(""),r("")}catch(N){p(N.message||"Something went wrong. Please try again.")}finally{u(!1)}};return O.jsx("section",{className:"py-12 px-4 sm:px-6 lg:px-8 bg-white",children:O.jsxs("div",{className:"max-w-3xl mx-auto",children:[O.jsxs("div",{className:"text-center mb-10",children:[O.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900",children:"Describe Your Medical Situation"}),O.jsx("p",{className:"mt-4 text-lg text-gray-600",children:"Fill out the form below. After submitting, you'll be directed to a secure bkash payment. Only paid consultations will be forwarded to our doctors."})]}),O.jsxs("form",{onSubmit:E,className:"space-y-6",children:[O.jsxs("div",{children:[O.jsx("label",{htmlFor:"situation",className:"block text-sm font-medium text-gray-700 mb-2",children:"Describe your symptoms or medical situation (optional)"}),O.jsx("textarea",{id:"situation",rows:4,className:"w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"e.g., I have had a fever and cough for three days...",value:s,onChange:b=>t(b.target.value)}),O.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"You can leave this empty if you prefer to explain over the phone."})]}),O.jsxs("div",{children:[O.jsx("label",{htmlFor:"phone",className:"block text-sm font-medium text-gray-700 mb-2",children:"Contact Number *"}),O.jsx("input",{type:"tel",id:"phone",required:!0,className:"w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"+8801XXXXXXXXX",value:n,onChange:b=>r(b.target.value)}),O.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"We'll call you on this number after payment confirmation."})]}),f&&O.jsx("div",{className:"p-3 bg-red-50 border border-red-200 text-red-700 rounded-lg",children:f}),g&&O.jsxs("div",{className:"p-4 bg-green-50 border border-green-200 text-green-800 rounded-lg",children:[O.jsx("h3",{className:"font-bold text-lg",children:"Payment Successful!"}),O.jsx("p",{children:"Your consultation request has been recorded. Our admin will call you within 30 minutes."}),O.jsx("p",{className:"mt-2 text-sm",children:"A confirmation SMS will be sent to your phone shortly."})]}),O.jsxs("div",{className:"pt-4",children:[O.jsx("button",{type:"submit",disabled:o,className:"w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-6 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed",children:o?O.jsxs("span",{className:"flex items-center justify-center",children:[O.jsxs("svg",{className:"animate-spin h-5 w-5 mr-3 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[O.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),O.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),"Processing..."]}):"Proceed to Payment (৳ 500)"}),O.jsx("p",{className:"mt-3 text-center text-sm text-gray-500",children:"You'll be redirected to bkash for a secure payment of ৳ 500. After successful payment, your details will be saved and our admin will call you shortly."})]})]}),O.jsxs("div",{className:"mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-200",children:[O.jsx("h3",{className:"text-xl font-semibold text-blue-900 mb-2",children:"How it works:"}),O.jsxs("ul",{className:"space-y-3 text-blue-800",children:[O.jsxs("li",{className:"flex items-start",children:[O.jsx("span",{className:"inline-block w-6 h-6 bg-blue-500 text-white rounded-full text-center mr-3 flex-shrink-0",children:"1"}),O.jsx("span",{children:"Fill in your contact number and optionally describe your situation."})]}),O.jsxs("li",{className:"flex items-start",children:[O.jsx("span",{className:"inline-block w-6 h-6 bg-blue-500 text-white rounded-full text-center mr-3 flex-shrink-0",children:"2"}),O.jsx("span",{children:`Click "Proceed to Payment" – you'll be taken to bkash to pay ৳ 500.`})]}),O.jsxs("li",{className:"flex items-start",children:[O.jsx("span",{className:"inline-block w-6 h-6 bg-blue-500 text-white rounded-full text-center mr-3 flex-shrink-0",children:"3"}),O.jsx("span",{children:"After successful payment, your information is recorded in our system."})]}),O.jsxs("li",{className:"flex items-start",children:[O.jsx("span",{className:"inline-block w-6 h-6 bg-blue-500 text-white rounded-full text-center mr-3 flex-shrink-0",children:"4"}),O.jsx("span",{children:"Our admin will call you within 30 minutes to discuss further."})]})]})]})]})})},zx=()=>{const s=[{src:"/assets/inangroup.jpeg",alt:"All senior experts",title:"All senior experts"},{src:"/assets/inangroup2.jpeg",alt:"Eastern Medical College Family",title:"Eastern Medical College Family"},{src:"/assets/inangroup3.jpeg",alt:"With my Senior",title:"With my Senior"}];return O.jsx("section",{className:"py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50",children:O.jsxs("div",{className:"max-w-7xl mx-auto",children:[O.jsxs("div",{className:"text-center mb-10",children:[O.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900",children:"Part of the Inan Group Family"}),O.jsx("p",{className:"mt-4 text-lg text-gray-600 max-w-3xl mx-auto",children:"These photos show our team collaborating with the wider Inan Group—a trusted network of healthcare professionals across Bangladesh. We stand together to bring you reliable, compassionate medical advice."})]}),O.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12",children:s.map((t,n)=>O.jsxs("div",{className:"bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300",children:[O.jsx("div",{className:"p-6",children:O.jsx("img",{src:t.src,alt:t.alt,className:"w-full h-auto object-contain rounded-lg",loading:"lazy"})}),O.jsxs("div",{className:"px-6 pb-6 text-center",children:[O.jsx("h3",{className:"text-xl font-semibold text-gray-800",children:t.title}),O.jsx("p",{className:"mt-2 text-gray-600",children:n===0?"Meeting with senior medical experts.":n===1?"Celebrating with Eastern Medical College family.":"A moment with my senior mentor."})]})]},n))}),O.jsx("div",{className:"mt-12 text-center",children:O.jsxs("div",{className:"inline-flex items-center justify-center p-4 bg-blue-100 rounded-full",children:[O.jsx("svg",{className:"w-6 h-6 text-blue-600 mr-3",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:O.jsx("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})}),O.jsx("span",{className:"text-blue-800 font-medium",children:"Trusted by thousands of patients across Bangladesh."})]})})]})})},jx=()=>O.jsx("footer",{className:"bg-gray-800 text-white",children:O.jsxs("div",{className:"max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8",children:[O.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:[O.jsxs("div",{children:[O.jsx("h3",{className:"text-lg font-semibold",children:"DoctorInan"}),O.jsx("p",{className:"mt-2 text-gray-400 text-sm",children:"Your health partner for online medical consultations in Bangladesh."})]}),O.jsxs("div",{children:[O.jsx("h3",{className:"text-sm font-semibold tracking-wider uppercase",children:"Quick Links"}),O.jsxs("ul",{className:"mt-4 space-y-2",children:[O.jsx("li",{children:O.jsx("a",{href:"#",className:"text-base text-gray-400 hover:text-white",children:"Home"})}),O.jsx("li",{children:O.jsx("a",{href:"#admin",className:"text-base text-gray-400 hover:text-white",children:"Admin Panel"})})]})]}),O.jsxs("div",{children:[O.jsx("h3",{className:"text-sm font-semibold tracking-wider uppercase",children:"Support"}),O.jsxs("ul",{className:"mt-4 space-y-2",children:[O.jsx("li",{children:O.jsx("a",{href:"#",className:"text-base text-gray-400 hover:text-white",children:"FAQ"})}),O.jsx("li",{children:O.jsx("a",{href:"#",className:"text-base text-gray-400 hover:text-white",children:"Contact Us"})}),O.jsx("li",{children:O.jsx("a",{href:"#",className:"text-base text-gray-400 hover:text-white",children:"Privacy Policy"})})]})]}),O.jsxs("div",{children:[O.jsx("h3",{className:"text-sm font-semibold tracking-wider uppercase",children:"Website Development"}),O.jsxs("div",{className:"mt-4 space-y-2",children:[O.jsxs("p",{className:"text-base text-gray-400",children:["This website was developed by"," ",O.jsx("a",{href:"https://labinitial.com",target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-300 underline",children:"labinitial.com"}),", a professional web development and SEO agency."]}),O.jsxs("p",{className:"text-base text-gray-400 mt-2",children:["Founded by ",O.jsx("strong",{className:"text-white",children:"Arafat Hossain"}),", labinitial.com specializes in creating modern, responsive websites and implementing effective SEO strategies."]})]})]})]}),O.jsxs("div",{className:"mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400",children:[O.jsxs("p",{children:["© ",new Date().getFullYear()," DoctorInan. All rights reserved."]}),O.jsxs("p",{className:"mt-2",children:["Website developed by"," ",O.jsx("a",{href:"https://labinitial.com",target:"_blank",rel:"noopener noreferrer",className:"text-blue-400 hover:text-blue-300 underline font-medium",children:"labinitial.com"})," ","– Web Development & SEO Agency | Founder: Arafat Hossain"]}),O.jsx("p",{className:"mt-1 text-xs",children:`When you search for "labinitial" or "doctorinan", you'll discover labinitial.com – the agency behind this website.`})]})]})}),Bx=()=>{const[s,t]=en.useState(""),[n,r]=en.useState(!1),[o,u]=en.useState([]),[f,p]=en.useState(!0),[g,_]=en.useState(""),E="neilarmstrong",b=B=>{B.preventDefault(),s===E?(r(!0),_("")):_("Incorrect password")};en.useEffect(()=>{if(!n)return;const B=xN(oA(HA,"consultations"),ON("createdAt","desc")),Z=PN(B,W=>{const J=W.docs.map(ot=>({id:ot.id,...ot.data()}));u(J),p(!1)},W=>{console.error("Error fetching consultations:",W),_("Failed to load consultations"),p(!1)});return()=>Z()},[n]);const N=()=>{r(!1),t("")};return n?O.jsx("div",{className:"min-h-screen bg-gray-100 p-4 md:p-8",children:O.jsxs("div",{className:"max-w-7xl mx-auto",children:[O.jsxs("div",{className:"flex justify-between items-center mb-8",children:[O.jsx("h1",{className:"text-3xl font-bold text-gray-900",children:"Consultation Records"}),O.jsxs("div",{className:"flex items-center space-x-4",children:[O.jsx("span",{className:"text-gray-700",children:"Admin"}),O.jsx("button",{onClick:N,className:"bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg transition",children:"Logout"}),O.jsx("a",{href:"#",onClick:()=>window.location.hash="",className:"text-blue-600 hover:underline",children:"Back to site"})]})]}),f?O.jsxs("div",{className:"text-center py-12",children:[O.jsx("div",{className:"inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"}),O.jsx("p",{className:"mt-4 text-gray-600",children:"Loading consultations..."})]}):o.length===0?O.jsx("div",{className:"bg-white rounded-xl shadow p-8 text-center",children:O.jsx("p",{className:"text-gray-700 text-lg",children:"No consultation records yet."})}):O.jsx("div",{className:"bg-white rounded-xl shadow overflow-hidden",children:O.jsx("div",{className:"overflow-x-auto",children:O.jsxs("table",{className:"min-w-full divide-y divide-gray-200",children:[O.jsx("thead",{className:"bg-gray-50",children:O.jsxs("tr",{children:[O.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Date & Time"}),O.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Phone"}),O.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Situation"}),O.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Amount"}),O.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),O.jsx("th",{className:"px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Payment ID"})]})}),O.jsx("tbody",{className:"bg-white divide-y divide-gray-200",children:o.map(B=>{var Z;return O.jsxs("tr",{className:"hover:bg-gray-50",children:[O.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900",children:(Z=B.createdAt)!=null&&Z.toDate?B.createdAt.toDate().toLocaleString():"N/A"}),O.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900",children:B.phone}),O.jsx("td",{className:"px-6 py-4 text-sm text-gray-700 max-w-xs truncate",children:B.situation||O.jsx("span",{className:"text-gray-400",children:"(empty)"})}),O.jsxs("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900",children:[B.currency," ",B.amount]}),O.jsx("td",{className:"px-6 py-4 whitespace-nowrap",children:O.jsx("span",{className:`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${B.status==="pending"?"bg-yellow-100 text-yellow-800":"bg-green-100 text-green-800"}`,children:B.status})}),O.jsx("td",{className:"px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-mono",children:B.paymentID||"N/A"})]},B.id)})})]})})}),O.jsxs("div",{className:"mt-8 text-sm text-gray-500",children:[O.jsxs("p",{children:["Total records: ",o.length]}),O.jsx("p",{className:"mt-2",children:"Only paid consultations are stored. Data updates in real‑time."})]})]})}):O.jsx("div",{className:"min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4",children:O.jsxs("div",{className:"bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full",children:[O.jsx("h1",{className:"text-3xl font-bold text-gray-900 mb-2",children:"Admin Access"}),O.jsx("p",{className:"text-gray-600 mb-6",children:"Enter the password to view consultation records."}),O.jsxs("form",{onSubmit:b,children:[O.jsxs("div",{className:"mb-6",children:[O.jsx("label",{htmlFor:"password",className:"block text-sm font-medium text-gray-700 mb-2",children:"Password"}),O.jsx("input",{type:"password",id:"password",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition",placeholder:"Enter password",value:s,onChange:B=>t(B.target.value),autoFocus:!0})]}),g&&O.jsx("p",{className:"text-red-600 text-sm mb-4",children:g}),O.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold py-3 px-6 rounded-lg hover:shadow-xl transition-all",children:"Login"})]}),O.jsx("div",{className:"mt-6 text-center",children:O.jsx("a",{href:"#",onClick:()=>window.location.hash="",className:"text-blue-600 hover:underline",children:"← Back to main site"})})]})})},qx=()=>{const[s,t]=en.useState(window.location.hash==="#admin");return en.useEffect(()=>{const n=()=>{t(window.location.hash==="#admin")};return window.addEventListener("hashchange",n),()=>window.removeEventListener("hashchange",n)},[]),s?O.jsx(Bx,{}):O.jsxs("div",{className:"bg-gray-50 min-h-screen",children:[O.jsx(MS,{}),O.jsxs("main",{children:[O.jsx(kS,{}),O.jsx(US,{}),O.jsx(Lx,{}),O.jsx(zx,{})]}),O.jsx(jx,{})]})},FA=document.getElementById("root");if(!FA)throw new Error("Could not find root element to mount to");const Hx=OS.createRoot(FA);Hx.render(O.jsx(SS.StrictMode,{children:O.jsx(qx,{})}));
