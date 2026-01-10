(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function s(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(r){if(r.ep)return;r.ep=!0;const d=s(r);fetch(r.href,d)}})();function Oh(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var lu={exports:{}},Zi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yf;function a0(){if(Yf)return Zi;Yf=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function s(a,r,d){var m=null;if(d!==void 0&&(m=""+d),r.key!==void 0&&(m=""+r.key),"key"in r){d={};for(var g in r)g!=="key"&&(d[g]=r[g])}else d=r;return r=d.ref,{$$typeof:o,type:a,key:m,ref:r!==void 0?r:null,props:d}}return Zi.Fragment=t,Zi.jsx=s,Zi.jsxs=s,Zi}var Jf;function l0(){return Jf||(Jf=1,lu.exports=a0()),lu.exports}var E=l0(),ru={exports:{}},ue={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kf;function r0(){if(Kf)return ue;Kf=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),T=Symbol.iterator;function b(R){return R===null||typeof R!="object"?null:(R=T&&R[T]||R["@@iterator"],typeof R=="function"?R:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},N=Object.assign,I={};function U(R,V,W){this.props=R,this.context=V,this.refs=I,this.updater=W||k}U.prototype.isReactComponent={},U.prototype.setState=function(R,V){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,V,"setState")},U.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function q(){}q.prototype=U.prototype;function B(R,V,W){this.props=R,this.context=V,this.refs=I,this.updater=W||k}var X=B.prototype=new q;X.constructor=B,N(X,U.prototype),X.isPureReactComponent=!0;var Q=Array.isArray;function ee(){}var J={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function z(R,V,W){var ne=W.ref;return{$$typeof:o,type:R,key:V,ref:ne!==void 0?ne:null,props:W}}function le(R,V){return z(R.type,V,R.props)}function me(R){return typeof R=="object"&&R!==null&&R.$$typeof===o}function K(R){var V={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(W){return V[W]})}var j=/\/+/g;function ce(R,V){return typeof R=="object"&&R!==null&&R.key!=null?K(""+R.key):V.toString(36)}function Pe(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(ee,ee):(R.status="pending",R.then(function(V){R.status==="pending"&&(R.status="fulfilled",R.value=V)},function(V){R.status==="pending"&&(R.status="rejected",R.reason=V)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function G(R,V,W,ne,de){var ge=typeof R;(ge==="undefined"||ge==="boolean")&&(R=null);var Re=!1;if(R===null)Re=!0;else switch(ge){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(R.$$typeof){case o:case t:Re=!0;break;case v:return Re=R._init,G(Re(R._payload),V,W,ne,de)}}if(Re)return de=de(R),Re=ne===""?"."+ce(R,0):ne,Q(de)?(W="",Re!=null&&(W=Re.replace(j,"$&/")+"/"),G(de,V,W,"",function(si){return si})):de!=null&&(me(de)&&(de=le(de,W+(de.key==null||R&&R.key===de.key?"":(""+de.key).replace(j,"$&/")+"/")+Re)),V.push(de)),1;Re=0;var at=ne===""?".":ne+":";if(Q(R))for(var Ve=0;Ve<R.length;Ve++)ne=R[Ve],ge=at+ce(ne,Ve),Re+=G(ne,V,W,ge,de);else if(Ve=b(R),typeof Ve=="function")for(R=Ve.call(R),Ve=0;!(ne=R.next()).done;)ne=ne.value,ge=at+ce(ne,Ve++),Re+=G(ne,V,W,ge,de);else if(ge==="object"){if(typeof R.then=="function")return G(Pe(R),V,W,ne,de);throw V=String(R),Error("Objects are not valid as a React child (found: "+(V==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":V)+"). If you meant to render a collection of children, use an array instead.")}return Re}function Y(R,V,W){if(R==null)return R;var ne=[],de=0;return G(R,ne,"","",function(ge){return V.call(W,ge,de++)}),ne}function se(R){if(R._status===-1){var V=R._result;V=V(),V.then(function(W){(R._status===0||R._status===-1)&&(R._status=1,R._result=W)},function(W){(R._status===0||R._status===-1)&&(R._status=2,R._result=W)}),R._status===-1&&(R._status=0,R._result=V)}if(R._status===1)return R._result.default;throw R._result}var he=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var V=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(V))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},xe={map:Y,forEach:function(R,V,W){Y(R,function(){V.apply(this,arguments)},W)},count:function(R){var V=0;return Y(R,function(){V++}),V},toArray:function(R){return Y(R,function(V){return V})||[]},only:function(R){if(!me(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return ue.Activity=C,ue.Children=xe,ue.Component=U,ue.Fragment=s,ue.Profiler=r,ue.PureComponent=B,ue.StrictMode=a,ue.Suspense=y,ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,ue.__COMPILER_RUNTIME={__proto__:null,c:function(R){return J.H.useMemoCache(R)}},ue.cache=function(R){return function(){return R.apply(null,arguments)}},ue.cacheSignal=function(){return null},ue.cloneElement=function(R,V,W){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var ne=N({},R.props),de=R.key;if(V!=null)for(ge in V.key!==void 0&&(de=""+V.key),V)!$.call(V,ge)||ge==="key"||ge==="__self"||ge==="__source"||ge==="ref"&&V.ref===void 0||(ne[ge]=V[ge]);var ge=arguments.length-2;if(ge===1)ne.children=W;else if(1<ge){for(var Re=Array(ge),at=0;at<ge;at++)Re[at]=arguments[at+2];ne.children=Re}return z(R.type,de,ne)},ue.createContext=function(R){return R={$$typeof:m,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:d,_context:R},R},ue.createElement=function(R,V,W){var ne,de={},ge=null;if(V!=null)for(ne in V.key!==void 0&&(ge=""+V.key),V)$.call(V,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(de[ne]=V[ne]);var Re=arguments.length-2;if(Re===1)de.children=W;else if(1<Re){for(var at=Array(Re),Ve=0;Ve<Re;Ve++)at[Ve]=arguments[Ve+2];de.children=at}if(R&&R.defaultProps)for(ne in Re=R.defaultProps,Re)de[ne]===void 0&&(de[ne]=Re[ne]);return z(R,ge,de)},ue.createRef=function(){return{current:null}},ue.forwardRef=function(R){return{$$typeof:g,render:R}},ue.isValidElement=me,ue.lazy=function(R){return{$$typeof:v,_payload:{_status:-1,_result:R},_init:se}},ue.memo=function(R,V){return{$$typeof:h,type:R,compare:V===void 0?null:V}},ue.startTransition=function(R){var V=J.T,W={};J.T=W;try{var ne=R(),de=J.S;de!==null&&de(W,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(ee,he)}catch(ge){he(ge)}finally{V!==null&&W.types!==null&&(V.types=W.types),J.T=V}},ue.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},ue.use=function(R){return J.H.use(R)},ue.useActionState=function(R,V,W){return J.H.useActionState(R,V,W)},ue.useCallback=function(R,V){return J.H.useCallback(R,V)},ue.useContext=function(R){return J.H.useContext(R)},ue.useDebugValue=function(){},ue.useDeferredValue=function(R,V){return J.H.useDeferredValue(R,V)},ue.useEffect=function(R,V){return J.H.useEffect(R,V)},ue.useEffectEvent=function(R){return J.H.useEffectEvent(R)},ue.useId=function(){return J.H.useId()},ue.useImperativeHandle=function(R,V,W){return J.H.useImperativeHandle(R,V,W)},ue.useInsertionEffect=function(R,V){return J.H.useInsertionEffect(R,V)},ue.useLayoutEffect=function(R,V){return J.H.useLayoutEffect(R,V)},ue.useMemo=function(R,V){return J.H.useMemo(R,V)},ue.useOptimistic=function(R,V){return J.H.useOptimistic(R,V)},ue.useReducer=function(R,V,W){return J.H.useReducer(R,V,W)},ue.useRef=function(R){return J.H.useRef(R)},ue.useState=function(R){return J.H.useState(R)},ue.useSyncExternalStore=function(R,V,W){return J.H.useSyncExternalStore(R,V,W)},ue.useTransition=function(){return J.H.useTransition()},ue.version="19.2.3",ue}var Xf;function Pu(){return Xf||(Xf=1,ru.exports=r0()),ru.exports}var Se=Pu();const Bh=Oh(Se);var uu={exports:{}},ji={},cu={exports:{}},du={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wf;function u0(){return Wf||(Wf=1,(function(o){function t(G,Y){var se=G.length;G.push(Y);e:for(;0<se;){var he=se-1>>>1,xe=G[he];if(0<r(xe,Y))G[he]=Y,G[se]=xe,se=he;else break e}}function s(G){return G.length===0?null:G[0]}function a(G){if(G.length===0)return null;var Y=G[0],se=G.pop();if(se!==Y){G[0]=se;e:for(var he=0,xe=G.length,R=xe>>>1;he<R;){var V=2*(he+1)-1,W=G[V],ne=V+1,de=G[ne];if(0>r(W,se))ne<xe&&0>r(de,W)?(G[he]=de,G[ne]=se,he=ne):(G[he]=W,G[V]=se,he=V);else if(ne<xe&&0>r(de,se))G[he]=de,G[ne]=se,he=ne;else break e}}return Y}function r(G,Y){var se=G.sortIndex-Y.sortIndex;return se!==0?se:G.id-Y.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;o.unstable_now=function(){return d.now()}}else{var m=Date,g=m.now();o.unstable_now=function(){return m.now()-g}}var y=[],h=[],v=1,C=null,T=3,b=!1,k=!1,N=!1,I=!1,U=typeof setTimeout=="function"?setTimeout:null,q=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function X(G){for(var Y=s(h);Y!==null;){if(Y.callback===null)a(h);else if(Y.startTime<=G)a(h),Y.sortIndex=Y.expirationTime,t(y,Y);else break;Y=s(h)}}function Q(G){if(N=!1,X(G),!k)if(s(y)!==null)k=!0,ee||(ee=!0,K());else{var Y=s(h);Y!==null&&Pe(Q,Y.startTime-G)}}var ee=!1,J=-1,$=5,z=-1;function le(){return I?!0:!(o.unstable_now()-z<$)}function me(){if(I=!1,ee){var G=o.unstable_now();z=G;var Y=!0;try{e:{k=!1,N&&(N=!1,q(J),J=-1),b=!0;var se=T;try{t:{for(X(G),C=s(y);C!==null&&!(C.expirationTime>G&&le());){var he=C.callback;if(typeof he=="function"){C.callback=null,T=C.priorityLevel;var xe=he(C.expirationTime<=G);if(G=o.unstable_now(),typeof xe=="function"){C.callback=xe,X(G),Y=!0;break t}C===s(y)&&a(y),X(G)}else a(y);C=s(y)}if(C!==null)Y=!0;else{var R=s(h);R!==null&&Pe(Q,R.startTime-G),Y=!1}}break e}finally{C=null,T=se,b=!1}Y=void 0}}finally{Y?K():ee=!1}}}var K;if(typeof B=="function")K=function(){B(me)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,ce=j.port2;j.port1.onmessage=me,K=function(){ce.postMessage(null)}}else K=function(){U(me,0)};function Pe(G,Y){J=U(function(){G(o.unstable_now())},Y)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(G){G.callback=null},o.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<G?Math.floor(1e3/G):5},o.unstable_getCurrentPriorityLevel=function(){return T},o.unstable_next=function(G){switch(T){case 1:case 2:case 3:var Y=3;break;default:Y=T}var se=T;T=Y;try{return G()}finally{T=se}},o.unstable_requestPaint=function(){I=!0},o.unstable_runWithPriority=function(G,Y){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var se=T;T=G;try{return Y()}finally{T=se}},o.unstable_scheduleCallback=function(G,Y,se){var he=o.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?he+se:he):se=he,G){case 1:var xe=-1;break;case 2:xe=250;break;case 5:xe=1073741823;break;case 4:xe=1e4;break;default:xe=5e3}return xe=se+xe,G={id:v++,callback:Y,priorityLevel:G,startTime:se,expirationTime:xe,sortIndex:-1},se>he?(G.sortIndex=se,t(h,G),s(y)===null&&G===s(h)&&(N?(q(J),J=-1):N=!0,Pe(Q,se-he))):(G.sortIndex=xe,t(y,G),k||b||(k=!0,ee||(ee=!0,K()))),G},o.unstable_shouldYield=le,o.unstable_wrapCallback=function(G){var Y=T;return function(){var se=T;T=Y;try{return G.apply(this,arguments)}finally{T=se}}}})(du)),du}var Qf;function c0(){return Qf||(Qf=1,cu.exports=u0()),cu.exports}var pu={exports:{}},it={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $f;function d0(){if($f)return it;$f=1;var o=Pu();function t(y){var h="https://react.dev/errors/"+y;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var a={d:{f:s,r:function(){throw Error(t(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},r=Symbol.for("react.portal");function d(y,h,v){var C=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:C==null?null:""+C,children:y,containerInfo:h,implementation:v}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,h){if(y==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,it.createPortal=function(y,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return d(y,h,null,v)},it.flushSync=function(y){var h=m.T,v=a.p;try{if(m.T=null,a.p=2,y)return y()}finally{m.T=h,a.p=v,a.d.f()}},it.preconnect=function(y,h){typeof y=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(y,h))},it.prefetchDNS=function(y){typeof y=="string"&&a.d.D(y)},it.preinit=function(y,h){if(typeof y=="string"&&h&&typeof h.as=="string"){var v=h.as,C=g(v,h.crossOrigin),T=typeof h.integrity=="string"?h.integrity:void 0,b=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?a.d.S(y,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:C,integrity:T,fetchPriority:b}):v==="script"&&a.d.X(y,{crossOrigin:C,integrity:T,fetchPriority:b,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},it.preinitModule=function(y,h){if(typeof y=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=g(h.as,h.crossOrigin);a.d.M(y,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(y)},it.preload=function(y,h){if(typeof y=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,C=g(v,h.crossOrigin);a.d.L(y,v,{crossOrigin:C,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},it.preloadModule=function(y,h){if(typeof y=="string")if(h){var v=g(h.as,h.crossOrigin);a.d.m(y,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(y)},it.requestFormReset=function(y){a.d.r(y)},it.unstable_batchedUpdates=function(y,h){return y(h)},it.useFormState=function(y,h,v){return m.H.useFormState(y,h,v)},it.useFormStatus=function(){return m.H.useHostTransitionStatus()},it.version="19.2.3",it}var Zf;function p0(){if(Zf)return pu.exports;Zf=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),pu.exports=d0(),pu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jf;function f0(){if(jf)return ji;jf=1;var o=c0(),t=Pu(),s=p0();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function m(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function y(e){if(d(e)!==e)throw Error(a(188))}function h(e){var n=e.alternate;if(!n){if(n=d(e),n===null)throw Error(a(188));return n!==e?null:e}for(var i=e,l=n;;){var p=i.return;if(p===null)break;var f=p.alternate;if(f===null){if(l=p.return,l!==null){i=l;continue}break}if(p.child===f.child){for(f=p.child;f;){if(f===i)return y(p),e;if(f===l)return y(p),n;f=f.sibling}throw Error(a(188))}if(i.return!==l.return)i=p,l=f;else{for(var S=!1,A=p.child;A;){if(A===i){S=!0,i=p,l=f;break}if(A===l){S=!0,l=p,i=f;break}A=A.sibling}if(!S){for(A=f.child;A;){if(A===i){S=!0,i=f,l=p;break}if(A===l){S=!0,l=f,i=p;break}A=A.sibling}if(!S)throw Error(a(189))}}if(i.alternate!==l)throw Error(a(190))}if(i.tag!==3)throw Error(a(188));return i.stateNode.current===i?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var C=Object.assign,T=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),N=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),B=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),le=Symbol.for("react.memo_cache_sentinel"),me=Symbol.iterator;function K(e){return e===null||typeof e!="object"?null:(e=me&&e[me]||e["@@iterator"],typeof e=="function"?e:null)}var j=Symbol.for("react.client.reference");function ce(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===j?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case N:return"Fragment";case U:return"Profiler";case I:return"StrictMode";case Q:return"Suspense";case ee:return"SuspenseList";case z:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case B:return e.displayName||"Context";case q:return(e._context.displayName||"Context")+".Consumer";case X:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return n=e.displayName||null,n!==null?n:ce(e.type)||"Memo";case $:n=e._payload,e=e._init;try{return ce(e(n))}catch{}}return null}var Pe=Array.isArray,G=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},he=[],xe=-1;function R(e){return{current:e}}function V(e){0>xe||(e.current=he[xe],he[xe]=null,xe--)}function W(e,n){xe++,he[xe]=e.current,e.current=n}var ne=R(null),de=R(null),ge=R(null),Re=R(null);function at(e,n){switch(W(ge,n),W(de,e),W(ne,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?mf(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=mf(n),e=hf(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}V(ne),W(ne,e)}function Ve(){V(ne),V(de),V(ge)}function si(e){e.memoizedState!==null&&W(Re,e);var n=ne.current,i=hf(n,e.type);n!==i&&(W(de,e),W(ne,i))}function os(e){de.current===e&&(V(ne),V(de)),Re.current===e&&(V(Re),Xi._currentValue=se)}var qa,qu;function Yn(e){if(qa===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);qa=n&&n[1]||"",qu=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qa+e+qu}var za=!1;function Ya(e,n){if(!e||za)return"";za=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(L){var D=L}Reflect.construct(e,[],F)}else{try{F.call()}catch(L){D=L}e.call(F.prototype)}}else{try{throw Error()}catch(L){D=L}(F=e())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(L){if(L&&D&&typeof L.stack=="string")return[L.stack,D.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var p=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");p&&p.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=l.DetermineComponentFrameRoot(),S=f[0],A=f[1];if(S&&A){var _=S.split(`
`),P=A.split(`
`);for(p=l=0;l<_.length&&!_[l].includes("DetermineComponentFrameRoot");)l++;for(;p<P.length&&!P[p].includes("DetermineComponentFrameRoot");)p++;if(l===_.length||p===P.length)for(l=_.length-1,p=P.length-1;1<=l&&0<=p&&_[l]!==P[p];)p--;for(;1<=l&&0<=p;l--,p--)if(_[l]!==P[p]){if(l!==1||p!==1)do if(l--,p--,0>p||_[l]!==P[p]){var O=`
`+_[l].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),O}while(1<=l&&0<=p);break}}}finally{za=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?Yn(i):""}function Gg(e,n){switch(e.tag){case 26:case 27:case 5:return Yn(e.type);case 16:return Yn("Lazy");case 13:return e.child!==n&&n!==null?Yn("Suspense Fallback"):Yn("Suspense");case 19:return Yn("SuspenseList");case 0:case 15:return Ya(e.type,!1);case 11:return Ya(e.type.render,!1);case 1:return Ya(e.type,!0);case 31:return Yn("Activity");default:return""}}function zu(e){try{var n="",i=null;do n+=Gg(e,i),i=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ja=Object.prototype.hasOwnProperty,Ka=o.unstable_scheduleCallback,Xa=o.unstable_cancelCallback,Og=o.unstable_shouldYield,Bg=o.unstable_requestPaint,yt=o.unstable_now,Hg=o.unstable_getCurrentPriorityLevel,Yu=o.unstable_ImmediatePriority,Ju=o.unstable_UserBlockingPriority,is=o.unstable_NormalPriority,Fg=o.unstable_LowPriority,Ku=o.unstable_IdlePriority,Vg=o.log,qg=o.unstable_setDisableYieldValue,ai=null,vt=null;function vn(e){if(typeof Vg=="function"&&qg(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(ai,e)}catch{}}var St=Math.clz32?Math.clz32:Jg,zg=Math.log,Yg=Math.LN2;function Jg(e){return e>>>=0,e===0?32:31-(zg(e)/Yg|0)|0}var ss=256,as=262144,ls=4194304;function Jn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function rs(e,n,i){var l=e.pendingLanes;if(l===0)return 0;var p=0,f=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var A=l&134217727;return A!==0?(l=A&~f,l!==0?p=Jn(l):(S&=A,S!==0?p=Jn(S):i||(i=A&~e,i!==0&&(p=Jn(i))))):(A=l&~f,A!==0?p=Jn(A):S!==0?p=Jn(S):i||(i=l&~e,i!==0&&(p=Jn(i)))),p===0?0:n!==0&&n!==p&&(n&f)===0&&(f=p&-p,i=n&-n,f>=i||f===32&&(i&4194048)!==0)?n:p}function li(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Kg(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xu(){var e=ls;return ls<<=1,(ls&62914560)===0&&(ls=4194304),e}function Wa(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function ri(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xg(e,n,i,l,p,f){var S=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var A=e.entanglements,_=e.expirationTimes,P=e.hiddenUpdates;for(i=S&~i;0<i;){var O=31-St(i),F=1<<O;A[O]=0,_[O]=-1;var D=P[O];if(D!==null)for(P[O]=null,O=0;O<D.length;O++){var L=D[O];L!==null&&(L.lane&=-536870913)}i&=~F}l!==0&&Wu(e,l,0),f!==0&&p===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function Wu(e,n,i){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-St(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|i&261930}function Qu(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var l=31-St(i),p=1<<l;p&n|e[l]&n&&(e[l]|=n),i&=~p}}function $u(e,n){var i=n&-n;return i=(i&42)!==0?1:Qa(i),(i&(e.suspendedLanes|n))!==0?0:i}function Qa(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $a(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zu(){var e=Y.p;return e!==0?e:(e=window.event,e===void 0?32:Of(e.type))}function ju(e,n){var i=Y.p;try{return Y.p=e,n()}finally{Y.p=i}}var Sn=Math.random().toString(36).slice(2),je="__reactFiber$"+Sn,ct="__reactProps$"+Sn,fo="__reactContainer$"+Sn,Za="__reactEvents$"+Sn,Wg="__reactListeners$"+Sn,Qg="__reactHandles$"+Sn,ec="__reactResources$"+Sn,ui="__reactMarker$"+Sn;function ja(e){delete e[je],delete e[ct],delete e[Za],delete e[Wg],delete e[Qg]}function mo(e){var n=e[je];if(n)return n;for(var i=e.parentNode;i;){if(n=i[fo]||i[je]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=Af(e);e!==null;){if(i=e[je])return i;e=Af(e)}return n}e=i,i=e.parentNode}return null}function ho(e){if(e=e[je]||e[fo]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ci(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function go(e){var n=e[ec];return n||(n=e[ec]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Qe(e){e[ui]=!0}var tc=new Set,nc={};function Kn(e,n){yo(e,n),yo(e+"Capture",n)}function yo(e,n){for(nc[e]=n,e=0;e<n.length;e++)tc.add(n[e])}var $g=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oc={},ic={};function Zg(e){return Ja.call(ic,e)?!0:Ja.call(oc,e)?!1:$g.test(e)?ic[e]=!0:(oc[e]=!0,!1)}function us(e,n,i){if(Zg(n))if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+i)}}function cs(e,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+i)}}function Qt(e,n,i,l){if(l===null)e.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(n,i,""+l)}}function Rt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jg(e,n,i){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var p=l.get,f=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return p.call(this)},set:function(S){i=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return i},setValue:function(S){i=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function el(e){if(!e._valueTracker){var n=sc(e)?"checked":"value";e._valueTracker=jg(e,n,""+e[n])}}function ac(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),l="";return e&&(l=sc(e)?e.checked?"true":"false":e.value),e=l,e!==i?(n.setValue(e),!0):!1}function ds(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ey=/[\n"\\]/g;function It(e){return e.replace(ey,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function tl(e,n,i,l,p,f,S,A){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Rt(n)):e.value!==""+Rt(n)&&(e.value=""+Rt(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?nl(e,S,Rt(n)):i!=null?nl(e,S,Rt(i)):l!=null&&e.removeAttribute("value"),p==null&&f!=null&&(e.defaultChecked=!!f),p!=null&&(e.checked=p&&typeof p!="function"&&typeof p!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?e.name=""+Rt(A):e.removeAttribute("name")}function lc(e,n,i,l,p,f,S,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||i!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){el(e);return}i=i!=null?""+Rt(i):"",n=n!=null?""+Rt(n):i,A||n===e.value||(e.value=n),e.defaultValue=n}l=l??p,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=A?e.checked:!!l,e.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),el(e)}function nl(e,n,i){n==="number"&&ds(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function vo(e,n,i,l){if(e=e.options,n){n={};for(var p=0;p<i.length;p++)n["$"+i[p]]=!0;for(i=0;i<e.length;i++)p=n.hasOwnProperty("$"+e[i].value),e[i].selected!==p&&(e[i].selected=p),p&&l&&(e[i].defaultSelected=!0)}else{for(i=""+Rt(i),n=null,p=0;p<e.length;p++){if(e[p].value===i){e[p].selected=!0,l&&(e[p].defaultSelected=!0);return}n!==null||e[p].disabled||(n=e[p])}n!==null&&(n.selected=!0)}}function rc(e,n,i){if(n!=null&&(n=""+Rt(n),n!==e.value&&(e.value=n),i==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=i!=null?""+Rt(i):""}function uc(e,n,i,l){if(n==null){if(l!=null){if(i!=null)throw Error(a(92));if(Pe(l)){if(1<l.length)throw Error(a(93));l=l[0]}i=l}i==null&&(i=""),n=i}i=Rt(n),e.defaultValue=i,l=e.textContent,l===i&&l!==""&&l!==null&&(e.value=l),el(e)}function So(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var ty=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cc(e,n,i){var l=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,i):typeof i!="number"||i===0||ty.has(n)?n==="float"?e.cssFloat=i:e[n]=(""+i).trim():e[n]=i+"px"}function dc(e,n,i){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,i!=null){for(var l in i)!i.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var p in n)l=n[p],n.hasOwnProperty(p)&&i[p]!==l&&cc(e,p,l)}else for(var f in n)n.hasOwnProperty(f)&&cc(e,f,n[f])}function ol(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ny=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),oy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ps(e){return oy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $t(){}var il=null;function sl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Co=null,To=null;function pc(e){var n=ho(e);if(n&&(e=n.stateNode)){var i=e[ct]||null;e:switch(e=n.stateNode,n.type){case"input":if(tl(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+It(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var l=i[n];if(l!==e&&l.form===e.form){var p=l[ct]||null;if(!p)throw Error(a(90));tl(l,p.value,p.defaultValue,p.defaultValue,p.checked,p.defaultChecked,p.type,p.name)}}for(n=0;n<i.length;n++)l=i[n],l.form===e.form&&ac(l)}break e;case"textarea":rc(e,i.value,i.defaultValue);break e;case"select":n=i.value,n!=null&&vo(e,!!i.multiple,n,!1)}}}var al=!1;function fc(e,n,i){if(al)return e(n,i);al=!0;try{var l=e(n);return l}finally{if(al=!1,(Co!==null||To!==null)&&(js(),Co&&(n=Co,e=To,To=Co=null,pc(n),e)))for(n=0;n<e.length;n++)pc(e[n])}}function di(e,n){var i=e.stateNode;if(i===null)return null;var l=i[ct]||null;if(l===null)return null;i=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(a(231,n,typeof i));return i}var Zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ll=!1;if(Zt)try{var pi={};Object.defineProperty(pi,"passive",{get:function(){ll=!0}}),window.addEventListener("test",pi,pi),window.removeEventListener("test",pi,pi)}catch{ll=!1}var Cn=null,rl=null,fs=null;function mc(){if(fs)return fs;var e,n=rl,i=n.length,l,p="value"in Cn?Cn.value:Cn.textContent,f=p.length;for(e=0;e<i&&n[e]===p[e];e++);var S=i-e;for(l=1;l<=S&&n[i-l]===p[f-l];l++);return fs=p.slice(e,1<l?1-l:void 0)}function ms(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function hs(){return!0}function hc(){return!1}function dt(e){function n(i,l,p,f,S){this._reactName=i,this._targetInst=p,this.type=l,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var A in e)e.hasOwnProperty(A)&&(i=e[A],this[A]=i?i(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?hs:hc,this.isPropagationStopped=hc,this}return C(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=hs)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=hs)},persist:function(){},isPersistent:hs}),n}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gs=dt(Xn),fi=C({},Xn,{view:0,detail:0}),iy=dt(fi),ul,cl,mi,ys=C({},fi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mi&&(mi&&e.type==="mousemove"?(ul=e.screenX-mi.screenX,cl=e.screenY-mi.screenY):cl=ul=0,mi=e),ul)},movementY:function(e){return"movementY"in e?e.movementY:cl}}),gc=dt(ys),sy=C({},ys,{dataTransfer:0}),ay=dt(sy),ly=C({},fi,{relatedTarget:0}),dl=dt(ly),ry=C({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),uy=dt(ry),cy=C({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dy=dt(cy),py=C({},Xn,{data:0}),yc=dt(py),fy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},my={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=hy[e])?!!n[e]:!1}function pl(){return gy}var yy=C({},fi,{key:function(e){if(e.key){var n=fy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ms(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?my[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pl,charCode:function(e){return e.type==="keypress"?ms(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ms(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vy=dt(yy),Sy=C({},ys,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vc=dt(Sy),Cy=C({},fi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pl}),Ty=dt(Cy),Ay=C({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ey=dt(Ay),by=C({},ys,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_y=dt(by),wy=C({},Xn,{newState:0,oldState:0}),Ry=dt(wy),Iy=[9,13,27,32],fl=Zt&&"CompositionEvent"in window,hi=null;Zt&&"documentMode"in document&&(hi=document.documentMode);var xy=Zt&&"TextEvent"in window&&!hi,Sc=Zt&&(!fl||hi&&8<hi&&11>=hi),Cc=" ",Tc=!1;function Ac(e,n){switch(e){case"keyup":return Iy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ec(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ao=!1;function Ny(e,n){switch(e){case"compositionend":return Ec(n);case"keypress":return n.which!==32?null:(Tc=!0,Cc);case"textInput":return e=n.data,e===Cc&&Tc?null:e;default:return null}}function My(e,n){if(Ao)return e==="compositionend"||!fl&&Ac(e,n)?(e=mc(),fs=rl=Cn=null,Ao=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Sc&&n.locale!=="ko"?null:n.data;default:return null}}var Py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Py[e.type]:n==="textarea"}function _c(e,n,i,l){Co?To?To.push(l):To=[l]:Co=l,n=aa(n,"onChange"),0<n.length&&(i=new gs("onChange","change",null,i,l),e.push({event:i,listeners:n}))}var gi=null,yi=null;function Dy(e){rf(e,0)}function vs(e){var n=ci(e);if(ac(n))return e}function wc(e,n){if(e==="change")return n}var Rc=!1;if(Zt){var ml;if(Zt){var hl="oninput"in document;if(!hl){var Ic=document.createElement("div");Ic.setAttribute("oninput","return;"),hl=typeof Ic.oninput=="function"}ml=hl}else ml=!1;Rc=ml&&(!document.documentMode||9<document.documentMode)}function xc(){gi&&(gi.detachEvent("onpropertychange",Nc),yi=gi=null)}function Nc(e){if(e.propertyName==="value"&&vs(yi)){var n=[];_c(n,yi,e,sl(e)),fc(Dy,n)}}function ky(e,n,i){e==="focusin"?(xc(),gi=n,yi=i,gi.attachEvent("onpropertychange",Nc)):e==="focusout"&&xc()}function Uy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return vs(yi)}function Ly(e,n){if(e==="click")return vs(n)}function Gy(e,n){if(e==="input"||e==="change")return vs(n)}function Oy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Ct=typeof Object.is=="function"?Object.is:Oy;function vi(e,n){if(Ct(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),l=Object.keys(n);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var p=i[l];if(!Ja.call(n,p)||!Ct(e[p],n[p]))return!1}return!0}function Mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pc(e,n){var i=Mc(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=n&&l>=n)return{node:i,offset:n-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Mc(i)}}function Dc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Dc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function kc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ds(e.document);n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=ds(e.document)}return n}function gl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var By=Zt&&"documentMode"in document&&11>=document.documentMode,Eo=null,yl=null,Si=null,vl=!1;function Uc(e,n,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;vl||Eo==null||Eo!==ds(l)||(l=Eo,"selectionStart"in l&&gl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Si&&vi(Si,l)||(Si=l,l=aa(yl,"onSelect"),0<l.length&&(n=new gs("onSelect","select",null,n,i),e.push({event:n,listeners:l}),n.target=Eo)))}function Wn(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var bo={animationend:Wn("Animation","AnimationEnd"),animationiteration:Wn("Animation","AnimationIteration"),animationstart:Wn("Animation","AnimationStart"),transitionrun:Wn("Transition","TransitionRun"),transitionstart:Wn("Transition","TransitionStart"),transitioncancel:Wn("Transition","TransitionCancel"),transitionend:Wn("Transition","TransitionEnd")},Sl={},Lc={};Zt&&(Lc=document.createElement("div").style,"AnimationEvent"in window||(delete bo.animationend.animation,delete bo.animationiteration.animation,delete bo.animationstart.animation),"TransitionEvent"in window||delete bo.transitionend.transition);function Qn(e){if(Sl[e])return Sl[e];if(!bo[e])return e;var n=bo[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in Lc)return Sl[e]=n[i];return e}var Gc=Qn("animationend"),Oc=Qn("animationiteration"),Bc=Qn("animationstart"),Hy=Qn("transitionrun"),Fy=Qn("transitionstart"),Vy=Qn("transitioncancel"),Hc=Qn("transitionend"),Fc=new Map,Cl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Cl.push("scrollEnd");function Bt(e,n){Fc.set(e,n),Kn(n,[e])}var Ss=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},xt=[],_o=0,Tl=0;function Cs(){for(var e=_o,n=Tl=_o=0;n<e;){var i=xt[n];xt[n++]=null;var l=xt[n];xt[n++]=null;var p=xt[n];xt[n++]=null;var f=xt[n];if(xt[n++]=null,l!==null&&p!==null){var S=l.pending;S===null?p.next=p:(p.next=S.next,S.next=p),l.pending=p}f!==0&&Vc(i,p,f)}}function Ts(e,n,i,l){xt[_o++]=e,xt[_o++]=n,xt[_o++]=i,xt[_o++]=l,Tl|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function Al(e,n,i,l){return Ts(e,n,i,l),As(e)}function $n(e,n){return Ts(e,null,null,n),As(e)}function Vc(e,n,i){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i);for(var p=!1,f=e.return;f!==null;)f.childLanes|=i,l=f.alternate,l!==null&&(l.childLanes|=i),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(p=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,p&&n!==null&&(p=31-St(i),e=f.hiddenUpdates,l=e[p],l===null?e[p]=[n]:l.push(n),n.lane=i|536870912),f):null}function As(e){if(50<Fi)throw Fi=0,Mr=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var wo={};function qy(e,n,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tt(e,n,i,l){return new qy(e,n,i,l)}function El(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jt(e,n){var i=e.alternate;return i===null?(i=Tt(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function qc(e,n){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,n=i.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Es(e,n,i,l,p,f){var S=0;if(l=e,typeof e=="function")El(e)&&(S=1);else if(typeof e=="string")S=Xv(e,i,ne.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case z:return e=Tt(31,i,n,p),e.elementType=z,e.lanes=f,e;case N:return Zn(i.children,p,f,n);case I:S=8,p|=24;break;case U:return e=Tt(12,i,n,p|2),e.elementType=U,e.lanes=f,e;case Q:return e=Tt(13,i,n,p),e.elementType=Q,e.lanes=f,e;case ee:return e=Tt(19,i,n,p),e.elementType=ee,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:S=10;break e;case q:S=9;break e;case X:S=11;break e;case J:S=14;break e;case $:S=16,l=null;break e}S=29,i=Error(a(130,e===null?"null":typeof e,"")),l=null}return n=Tt(S,i,n,p),n.elementType=e,n.type=l,n.lanes=f,n}function Zn(e,n,i,l){return e=Tt(7,e,l,n),e.lanes=i,e}function bl(e,n,i){return e=Tt(6,e,null,n),e.lanes=i,e}function zc(e){var n=Tt(18,null,null,0);return n.stateNode=e,n}function _l(e,n,i){return n=Tt(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Yc=new WeakMap;function Nt(e,n){if(typeof e=="object"&&e!==null){var i=Yc.get(e);return i!==void 0?i:(n={value:e,source:n,stack:zu(n)},Yc.set(e,n),n)}return{value:e,source:n,stack:zu(n)}}var Ro=[],Io=0,bs=null,Ci=0,Mt=[],Pt=0,Tn=null,Yt=1,Jt="";function en(e,n){Ro[Io++]=Ci,Ro[Io++]=bs,bs=e,Ci=n}function Jc(e,n,i){Mt[Pt++]=Yt,Mt[Pt++]=Jt,Mt[Pt++]=Tn,Tn=e;var l=Yt;e=Jt;var p=32-St(l)-1;l&=~(1<<p),i+=1;var f=32-St(n)+p;if(30<f){var S=p-p%5;f=(l&(1<<S)-1).toString(32),l>>=S,p-=S,Yt=1<<32-St(n)+p|i<<p|l,Jt=f+e}else Yt=1<<f|i<<p|l,Jt=e}function wl(e){e.return!==null&&(en(e,1),Jc(e,1,0))}function Rl(e){for(;e===bs;)bs=Ro[--Io],Ro[Io]=null,Ci=Ro[--Io],Ro[Io]=null;for(;e===Tn;)Tn=Mt[--Pt],Mt[Pt]=null,Jt=Mt[--Pt],Mt[Pt]=null,Yt=Mt[--Pt],Mt[Pt]=null}function Kc(e,n){Mt[Pt++]=Yt,Mt[Pt++]=Jt,Mt[Pt++]=Tn,Yt=n.id,Jt=n.overflow,Tn=e}var et=null,Ge=null,Ae=!1,An=null,Dt=!1,Il=Error(a(519));function En(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ti(Nt(n,e)),Il}function Xc(e){var n=e.stateNode,i=e.type,l=e.memoizedProps;switch(n[je]=e,n[ct]=l,i){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(i=0;i<qi.length;i++)ve(qi[i],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),lc(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),uc(n,l.value,l.defaultValue,l.children)}i=l.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||l.suppressHydrationWarning===!0||pf(n.textContent,i)?(l.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),l.onScroll!=null&&ve("scroll",n),l.onScrollEnd!=null&&ve("scrollend",n),l.onClick!=null&&(n.onclick=$t),n=!0):n=!1,n||En(e,!0)}function Wc(e){for(et=e.return;et;)switch(et.tag){case 5:case 31:case 13:Dt=!1;return;case 27:case 3:Dt=!0;return;default:et=et.return}}function xo(e){if(e!==et)return!1;if(!Ae)return Wc(e),Ae=!0,!1;var n=e.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||Jr(e.type,e.memoizedProps)),i=!i),i&&Ge&&En(e),Wc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ge=Tf(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ge=Tf(e)}else n===27?(n=Ge,Gn(e.type)?(e=$r,$r=null,Ge=e):Ge=n):Ge=et?Ut(e.stateNode.nextSibling):null;return!0}function jn(){Ge=et=null,Ae=!1}function xl(){var e=An;return e!==null&&(ht===null?ht=e:ht.push.apply(ht,e),An=null),e}function Ti(e){An===null?An=[e]:An.push(e)}var Nl=R(null),eo=null,tn=null;function bn(e,n,i){W(Nl,n._currentValue),n._currentValue=i}function nn(e){e._currentValue=Nl.current,V(Nl)}function Ml(e,n,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===i)break;e=e.return}}function Pl(e,n,i,l){var p=e.child;for(p!==null&&(p.return=e);p!==null;){var f=p.dependencies;if(f!==null){var S=p.child;f=f.firstContext;e:for(;f!==null;){var A=f;f=p;for(var _=0;_<n.length;_++)if(A.context===n[_]){f.lanes|=i,A=f.alternate,A!==null&&(A.lanes|=i),Ml(f.return,i,e),l||(S=null);break e}f=A.next}}else if(p.tag===18){if(S=p.return,S===null)throw Error(a(341));S.lanes|=i,f=S.alternate,f!==null&&(f.lanes|=i),Ml(S,i,e),S=null}else S=p.child;if(S!==null)S.return=p;else for(S=p;S!==null;){if(S===e){S=null;break}if(p=S.sibling,p!==null){p.return=S.return,S=p;break}S=S.return}p=S}}function No(e,n,i,l){e=null;for(var p=n,f=!1;p!==null;){if(!f){if((p.flags&524288)!==0)f=!0;else if((p.flags&262144)!==0)break}if(p.tag===10){var S=p.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var A=p.type;Ct(p.pendingProps.value,S.value)||(e!==null?e.push(A):e=[A])}}else if(p===Re.current){if(S=p.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==p.memoizedState.memoizedState&&(e!==null?e.push(Xi):e=[Xi])}p=p.return}e!==null&&Pl(n,e,i,l),n.flags|=262144}function _s(e){for(e=e.firstContext;e!==null;){if(!Ct(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function to(e){eo=e,tn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function tt(e){return Qc(eo,e)}function ws(e,n){return eo===null&&to(e),Qc(e,n)}function Qc(e,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},tn===null){if(e===null)throw Error(a(308));tn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else tn=tn.next=n;return i}var zy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(i,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(i){return i()})}},Yy=o.unstable_scheduleCallback,Jy=o.unstable_NormalPriority,Ye={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dl(){return{controller:new zy,data:new Map,refCount:0}}function Ai(e){e.refCount--,e.refCount===0&&Yy(Jy,function(){e.controller.abort()})}var Ei=null,kl=0,Mo=0,Po=null;function Ky(e,n){if(Ei===null){var i=Ei=[];kl=0,Mo=Gr(),Po={status:"pending",value:void 0,then:function(l){i.push(l)}}}return kl++,n.then($c,$c),n}function $c(){if(--kl===0&&Ei!==null){Po!==null&&(Po.status="fulfilled");var e=Ei;Ei=null,Mo=0,Po=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Xy(e,n){var i=[],l={status:"pending",value:null,reason:null,then:function(p){i.push(p)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var p=0;p<i.length;p++)(0,i[p])(n)},function(p){for(l.status="rejected",l.reason=p,p=0;p<i.length;p++)(0,i[p])(void 0)}),l}var Zc=G.S;G.S=function(e,n){Up=yt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ky(e,n),Zc!==null&&Zc(e,n)};var no=R(null);function Ul(){var e=no.current;return e!==null?e:Le.pooledCache}function Rs(e,n){n===null?W(no,no.current):W(no,n.pool)}function jc(){var e=Ul();return e===null?null:{parent:Ye._currentValue,pool:e}}var Do=Error(a(460)),Ll=Error(a(474)),Is=Error(a(542)),xs={then:function(){}};function ed(e){return e=e.status,e==="fulfilled"||e==="rejected"}function td(e,n,i){switch(i=e[i],i===void 0?e.push(n):i!==n&&(n.then($t,$t),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,od(e),e;default:if(typeof n.status=="string")n.then($t,$t);else{if(e=Le,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var p=n;p.status="fulfilled",p.value=l}},function(l){if(n.status==="pending"){var p=n;p.status="rejected",p.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,od(e),e}throw io=n,Do}}function oo(e){try{var n=e._init;return n(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(io=i,Do):i}}var io=null;function nd(){if(io===null)throw Error(a(459));var e=io;return io=null,e}function od(e){if(e===Do||e===Is)throw Error(a(483))}var ko=null,bi=0;function Ns(e){var n=bi;return bi+=1,ko===null&&(ko=[]),td(ko,e,n)}function _i(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ms(e,n){throw n.$$typeof===T?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function id(e){function n(x,w){if(e){var M=x.deletions;M===null?(x.deletions=[w],x.flags|=16):M.push(w)}}function i(x,w){if(!e)return null;for(;w!==null;)n(x,w),w=w.sibling;return null}function l(x){for(var w=new Map;x!==null;)x.key!==null?w.set(x.key,x):w.set(x.index,x),x=x.sibling;return w}function p(x,w){return x=jt(x,w),x.index=0,x.sibling=null,x}function f(x,w,M){return x.index=M,e?(M=x.alternate,M!==null?(M=M.index,M<w?(x.flags|=67108866,w):M):(x.flags|=67108866,w)):(x.flags|=1048576,w)}function S(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function A(x,w,M,H){return w===null||w.tag!==6?(w=bl(M,x.mode,H),w.return=x,w):(w=p(w,M),w.return=x,w)}function _(x,w,M,H){var ie=M.type;return ie===N?O(x,w,M.props.children,H,M.key):w!==null&&(w.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===$&&oo(ie)===w.type)?(w=p(w,M.props),_i(w,M),w.return=x,w):(w=Es(M.type,M.key,M.props,null,x.mode,H),_i(w,M),w.return=x,w)}function P(x,w,M,H){return w===null||w.tag!==4||w.stateNode.containerInfo!==M.containerInfo||w.stateNode.implementation!==M.implementation?(w=_l(M,x.mode,H),w.return=x,w):(w=p(w,M.children||[]),w.return=x,w)}function O(x,w,M,H,ie){return w===null||w.tag!==7?(w=Zn(M,x.mode,H,ie),w.return=x,w):(w=p(w,M),w.return=x,w)}function F(x,w,M){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=bl(""+w,x.mode,M),w.return=x,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case b:return M=Es(w.type,w.key,w.props,null,x.mode,M),_i(M,w),M.return=x,M;case k:return w=_l(w,x.mode,M),w.return=x,w;case $:return w=oo(w),F(x,w,M)}if(Pe(w)||K(w))return w=Zn(w,x.mode,M,null),w.return=x,w;if(typeof w.then=="function")return F(x,Ns(w),M);if(w.$$typeof===B)return F(x,ws(x,w),M);Ms(x,w)}return null}function D(x,w,M,H){var ie=w!==null?w.key:null;if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return ie!==null?null:A(x,w,""+M,H);if(typeof M=="object"&&M!==null){switch(M.$$typeof){case b:return M.key===ie?_(x,w,M,H):null;case k:return M.key===ie?P(x,w,M,H):null;case $:return M=oo(M),D(x,w,M,H)}if(Pe(M)||K(M))return ie!==null?null:O(x,w,M,H,null);if(typeof M.then=="function")return D(x,w,Ns(M),H);if(M.$$typeof===B)return D(x,w,ws(x,M),H);Ms(x,M)}return null}function L(x,w,M,H,ie){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return x=x.get(M)||null,A(w,x,""+H,ie);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case b:return x=x.get(H.key===null?M:H.key)||null,_(w,x,H,ie);case k:return x=x.get(H.key===null?M:H.key)||null,P(w,x,H,ie);case $:return H=oo(H),L(x,w,M,H,ie)}if(Pe(H)||K(H))return x=x.get(M)||null,O(w,x,H,ie,null);if(typeof H.then=="function")return L(x,w,M,Ns(H),ie);if(H.$$typeof===B)return L(x,w,M,ws(w,H),ie);Ms(w,H)}return null}function te(x,w,M,H){for(var ie=null,Ee=null,oe=w,fe=w=0,Te=null;oe!==null&&fe<M.length;fe++){oe.index>fe?(Te=oe,oe=null):Te=oe.sibling;var be=D(x,oe,M[fe],H);if(be===null){oe===null&&(oe=Te);break}e&&oe&&be.alternate===null&&n(x,oe),w=f(be,w,fe),Ee===null?ie=be:Ee.sibling=be,Ee=be,oe=Te}if(fe===M.length)return i(x,oe),Ae&&en(x,fe),ie;if(oe===null){for(;fe<M.length;fe++)oe=F(x,M[fe],H),oe!==null&&(w=f(oe,w,fe),Ee===null?ie=oe:Ee.sibling=oe,Ee=oe);return Ae&&en(x,fe),ie}for(oe=l(oe);fe<M.length;fe++)Te=L(oe,x,fe,M[fe],H),Te!==null&&(e&&Te.alternate!==null&&oe.delete(Te.key===null?fe:Te.key),w=f(Te,w,fe),Ee===null?ie=Te:Ee.sibling=Te,Ee=Te);return e&&oe.forEach(function(Vn){return n(x,Vn)}),Ae&&en(x,fe),ie}function ae(x,w,M,H){if(M==null)throw Error(a(151));for(var ie=null,Ee=null,oe=w,fe=w=0,Te=null,be=M.next();oe!==null&&!be.done;fe++,be=M.next()){oe.index>fe?(Te=oe,oe=null):Te=oe.sibling;var Vn=D(x,oe,be.value,H);if(Vn===null){oe===null&&(oe=Te);break}e&&oe&&Vn.alternate===null&&n(x,oe),w=f(Vn,w,fe),Ee===null?ie=Vn:Ee.sibling=Vn,Ee=Vn,oe=Te}if(be.done)return i(x,oe),Ae&&en(x,fe),ie;if(oe===null){for(;!be.done;fe++,be=M.next())be=F(x,be.value,H),be!==null&&(w=f(be,w,fe),Ee===null?ie=be:Ee.sibling=be,Ee=be);return Ae&&en(x,fe),ie}for(oe=l(oe);!be.done;fe++,be=M.next())be=L(oe,x,fe,be.value,H),be!==null&&(e&&be.alternate!==null&&oe.delete(be.key===null?fe:be.key),w=f(be,w,fe),Ee===null?ie=be:Ee.sibling=be,Ee=be);return e&&oe.forEach(function(s0){return n(x,s0)}),Ae&&en(x,fe),ie}function Ue(x,w,M,H){if(typeof M=="object"&&M!==null&&M.type===N&&M.key===null&&(M=M.props.children),typeof M=="object"&&M!==null){switch(M.$$typeof){case b:e:{for(var ie=M.key;w!==null;){if(w.key===ie){if(ie=M.type,ie===N){if(w.tag===7){i(x,w.sibling),H=p(w,M.props.children),H.return=x,x=H;break e}}else if(w.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===$&&oo(ie)===w.type){i(x,w.sibling),H=p(w,M.props),_i(H,M),H.return=x,x=H;break e}i(x,w);break}else n(x,w);w=w.sibling}M.type===N?(H=Zn(M.props.children,x.mode,H,M.key),H.return=x,x=H):(H=Es(M.type,M.key,M.props,null,x.mode,H),_i(H,M),H.return=x,x=H)}return S(x);case k:e:{for(ie=M.key;w!==null;){if(w.key===ie)if(w.tag===4&&w.stateNode.containerInfo===M.containerInfo&&w.stateNode.implementation===M.implementation){i(x,w.sibling),H=p(w,M.children||[]),H.return=x,x=H;break e}else{i(x,w);break}else n(x,w);w=w.sibling}H=_l(M,x.mode,H),H.return=x,x=H}return S(x);case $:return M=oo(M),Ue(x,w,M,H)}if(Pe(M))return te(x,w,M,H);if(K(M)){if(ie=K(M),typeof ie!="function")throw Error(a(150));return M=ie.call(M),ae(x,w,M,H)}if(typeof M.then=="function")return Ue(x,w,Ns(M),H);if(M.$$typeof===B)return Ue(x,w,ws(x,M),H);Ms(x,M)}return typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint"?(M=""+M,w!==null&&w.tag===6?(i(x,w.sibling),H=p(w,M),H.return=x,x=H):(i(x,w),H=bl(M,x.mode,H),H.return=x,x=H),S(x)):i(x,w)}return function(x,w,M,H){try{bi=0;var ie=Ue(x,w,M,H);return ko=null,ie}catch(oe){if(oe===Do||oe===Is)throw oe;var Ee=Tt(29,oe,null,x.mode);return Ee.lanes=H,Ee.return=x,Ee}finally{}}}var so=id(!0),sd=id(!1),_n=!1;function Gl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ol(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Rn(e,n,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(we&2)!==0){var p=l.pending;return p===null?n.next=n:(n.next=p.next,p.next=n),l.pending=n,n=As(e),Vc(e,null,i),n}return Ts(e,l,n,i),As(e)}function wi(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,Qu(e,i)}}function Bl(e,n){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var p=null,f=null;if(i=i.firstBaseUpdate,i!==null){do{var S={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};f===null?p=f=S:f=f.next=S,i=i.next}while(i!==null);f===null?p=f=n:f=f.next=n}else p=f=n;i={baseState:l.baseState,firstBaseUpdate:p,lastBaseUpdate:f,shared:l.shared,callbacks:l.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}var Hl=!1;function Ri(){if(Hl){var e=Po;if(e!==null)throw e}}function Ii(e,n,i,l){Hl=!1;var p=e.updateQueue;_n=!1;var f=p.firstBaseUpdate,S=p.lastBaseUpdate,A=p.shared.pending;if(A!==null){p.shared.pending=null;var _=A,P=_.next;_.next=null,S===null?f=P:S.next=P,S=_;var O=e.alternate;O!==null&&(O=O.updateQueue,A=O.lastBaseUpdate,A!==S&&(A===null?O.firstBaseUpdate=P:A.next=P,O.lastBaseUpdate=_))}if(f!==null){var F=p.baseState;S=0,O=P=_=null,A=f;do{var D=A.lane&-536870913,L=D!==A.lane;if(L?(Ce&D)===D:(l&D)===D){D!==0&&D===Mo&&(Hl=!0),O!==null&&(O=O.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var te=e,ae=A;D=n;var Ue=i;switch(ae.tag){case 1:if(te=ae.payload,typeof te=="function"){F=te.call(Ue,F,D);break e}F=te;break e;case 3:te.flags=te.flags&-65537|128;case 0:if(te=ae.payload,D=typeof te=="function"?te.call(Ue,F,D):te,D==null)break e;F=C({},F,D);break e;case 2:_n=!0}}D=A.callback,D!==null&&(e.flags|=64,L&&(e.flags|=8192),L=p.callbacks,L===null?p.callbacks=[D]:L.push(D))}else L={lane:D,tag:A.tag,payload:A.payload,callback:A.callback,next:null},O===null?(P=O=L,_=F):O=O.next=L,S|=D;if(A=A.next,A===null){if(A=p.shared.pending,A===null)break;L=A,A=L.next,L.next=null,p.lastBaseUpdate=L,p.shared.pending=null}}while(!0);O===null&&(_=F),p.baseState=_,p.firstBaseUpdate=P,p.lastBaseUpdate=O,f===null&&(p.shared.lanes=0),Pn|=S,e.lanes=S,e.memoizedState=F}}function ad(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function ld(e,n){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)ad(i[e],n)}var Uo=R(null),Ps=R(0);function rd(e,n){e=pn,W(Ps,e),W(Uo,n),pn=e|n.baseLanes}function Fl(){W(Ps,pn),W(Uo,Uo.current)}function Vl(){pn=Ps.current,V(Uo),V(Ps)}var At=R(null),kt=null;function In(e){var n=e.alternate;W(qe,qe.current&1),W(At,e),kt===null&&(n===null||Uo.current!==null||n.memoizedState!==null)&&(kt=e)}function ql(e){W(qe,qe.current),W(At,e),kt===null&&(kt=e)}function ud(e){e.tag===22?(W(qe,qe.current),W(At,e),kt===null&&(kt=e)):xn()}function xn(){W(qe,qe.current),W(At,At.current)}function Et(e){V(At),kt===e&&(kt=null),V(qe)}var qe=R(0);function Ds(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Wr(i)||Qr(i)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var on=0,pe=null,De=null,Je=null,ks=!1,Lo=!1,ao=!1,Us=0,xi=0,Go=null,Wy=0;function He(){throw Error(a(321))}function zl(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!Ct(e[i],n[i]))return!1;return!0}function Yl(e,n,i,l,p,f){return on=f,pe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,G.H=e===null||e.memoizedState===null?Jd:ar,ao=!1,f=i(l,p),ao=!1,Lo&&(f=dd(n,i,l,p)),cd(e),f}function cd(e){G.H=Pi;var n=De!==null&&De.next!==null;if(on=0,Je=De=pe=null,ks=!1,xi=0,Go=null,n)throw Error(a(300));e===null||Ke||(e=e.dependencies,e!==null&&_s(e)&&(Ke=!0))}function dd(e,n,i,l){pe=e;var p=0;do{if(Lo&&(Go=null),xi=0,Lo=!1,25<=p)throw Error(a(301));if(p+=1,Je=De=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}G.H=Kd,f=n(i,l)}while(Lo);return f}function Qy(){var e=G.H,n=e.useState()[0];return n=typeof n.then=="function"?Ni(n):n,e=e.useState()[0],(De!==null?De.memoizedState:null)!==e&&(pe.flags|=1024),n}function Jl(){var e=Us!==0;return Us=0,e}function Kl(e,n,i){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i}function Xl(e){if(ks){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}ks=!1}on=0,Je=De=pe=null,Lo=!1,xi=Us=0,Go=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?pe.memoizedState=Je=e:Je=Je.next=e,Je}function ze(){if(De===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var n=Je===null?pe.memoizedState:Je.next;if(n!==null)Je=n,De=e;else{if(e===null)throw pe.alternate===null?Error(a(467)):Error(a(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Je===null?pe.memoizedState=Je=e:Je=Je.next=e}return Je}function Ls(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ni(e){var n=xi;return xi+=1,Go===null&&(Go=[]),e=td(Go,e,n),n=pe,(Je===null?n.memoizedState:Je.next)===null&&(n=n.alternate,G.H=n===null||n.memoizedState===null?Jd:ar),e}function Gs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ni(e);if(e.$$typeof===B)return tt(e)}throw Error(a(438,String(e)))}function Wl(e){var n=null,i=pe.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var l=pe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(p){return p.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=Ls(),pe.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(e),l=0;l<e;l++)i[l]=le;return n.index++,i}function sn(e,n){return typeof n=="function"?n(e):n}function Os(e){var n=ze();return Ql(n,De,e)}function Ql(e,n,i){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=i;var p=e.baseQueue,f=l.pending;if(f!==null){if(p!==null){var S=p.next;p.next=f.next,f.next=S}n.baseQueue=p=f,l.pending=null}if(f=e.baseState,p===null)e.memoizedState=f;else{n=p.next;var A=S=null,_=null,P=n,O=!1;do{var F=P.lane&-536870913;if(F!==P.lane?(Ce&F)===F:(on&F)===F){var D=P.revertLane;if(D===0)_!==null&&(_=_.next={lane:0,revertLane:0,gesture:null,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),F===Mo&&(O=!0);else if((on&D)===D){P=P.next,D===Mo&&(O=!0);continue}else F={lane:0,revertLane:P.revertLane,gesture:null,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},_===null?(A=_=F,S=f):_=_.next=F,pe.lanes|=D,Pn|=D;F=P.action,ao&&i(f,F),f=P.hasEagerState?P.eagerState:i(f,F)}else D={lane:F,revertLane:P.revertLane,gesture:P.gesture,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},_===null?(A=_=D,S=f):_=_.next=D,pe.lanes|=F,Pn|=F;P=P.next}while(P!==null&&P!==n);if(_===null?S=f:_.next=A,!Ct(f,e.memoizedState)&&(Ke=!0,O&&(i=Po,i!==null)))throw i;e.memoizedState=f,e.baseState=S,e.baseQueue=_,l.lastRenderedState=f}return p===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function $l(e){var n=ze(),i=n.queue;if(i===null)throw Error(a(311));i.lastRenderedReducer=e;var l=i.dispatch,p=i.pending,f=n.memoizedState;if(p!==null){i.pending=null;var S=p=p.next;do f=e(f,S.action),S=S.next;while(S!==p);Ct(f,n.memoizedState)||(Ke=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),i.lastRenderedState=f}return[f,l]}function pd(e,n,i){var l=pe,p=ze(),f=Ae;if(f){if(i===void 0)throw Error(a(407));i=i()}else i=n();var S=!Ct((De||p).memoizedState,i);if(S&&(p.memoizedState=i,Ke=!0),p=p.queue,er(hd.bind(null,l,p,e),[e]),p.getSnapshot!==n||S||Je!==null&&Je.memoizedState.tag&1){if(l.flags|=2048,Oo(9,{destroy:void 0},md.bind(null,l,p,i,n),null),Le===null)throw Error(a(349));f||(on&127)!==0||fd(l,n,i)}return i}function fd(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=pe.updateQueue,n===null?(n=Ls(),pe.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function md(e,n,i,l){n.value=i,n.getSnapshot=l,gd(n)&&yd(e)}function hd(e,n,i){return i(function(){gd(n)&&yd(e)})}function gd(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!Ct(e,i)}catch{return!0}}function yd(e){var n=$n(e,2);n!==null&&gt(n,e,2)}function Zl(e){var n=lt();if(typeof e=="function"){var i=e;if(e=i(),ao){vn(!0);try{i()}finally{vn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sn,lastRenderedState:e},n}function vd(e,n,i,l){return e.baseState=i,Ql(e,De,typeof l=="function"?l:sn)}function $y(e,n,i,l,p){if(Fs(e))throw Error(a(485));if(e=n.action,e!==null){var f={payload:p,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};G.T!==null?i(!0):f.isTransition=!1,l(f),i=n.pending,i===null?(f.next=n.pending=f,Sd(n,f)):(f.next=i.next,n.pending=i.next=f)}}function Sd(e,n){var i=n.action,l=n.payload,p=e.state;if(n.isTransition){var f=G.T,S={};G.T=S;try{var A=i(p,l),_=G.S;_!==null&&_(S,A),Cd(e,n,A)}catch(P){jl(e,n,P)}finally{f!==null&&S.types!==null&&(f.types=S.types),G.T=f}}else try{f=i(p,l),Cd(e,n,f)}catch(P){jl(e,n,P)}}function Cd(e,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(l){Td(e,n,l)},function(l){return jl(e,n,l)}):Td(e,n,i)}function Td(e,n,i){n.status="fulfilled",n.value=i,Ad(n),e.state=i,n=e.pending,n!==null&&(i=n.next,i===n?e.pending=null:(i=i.next,n.next=i,Sd(e,i)))}function jl(e,n,i){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=i,Ad(n),n=n.next;while(n!==l)}e.action=null}function Ad(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Ed(e,n){return n}function bd(e,n){if(Ae){var i=Le.formState;if(i!==null){e:{var l=pe;if(Ae){if(Ge){t:{for(var p=Ge,f=Dt;p.nodeType!==8;){if(!f){p=null;break t}if(p=Ut(p.nextSibling),p===null){p=null;break t}}f=p.data,p=f==="F!"||f==="F"?p:null}if(p){Ge=Ut(p.nextSibling),l=p.data==="F!";break e}}En(l)}l=!1}l&&(n=i[0])}}return i=lt(),i.memoizedState=i.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ed,lastRenderedState:n},i.queue=l,i=qd.bind(null,pe,l),l.dispatch=i,l=Zl(!1),f=sr.bind(null,pe,!1,l.queue),l=lt(),p={state:n,dispatch:null,action:e,pending:null},l.queue=p,i=$y.bind(null,pe,p,f,i),p.dispatch=i,l.memoizedState=e,[n,i,!1]}function _d(e){var n=ze();return wd(n,De,e)}function wd(e,n,i){if(n=Ql(e,n,Ed)[0],e=Os(sn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Ni(n)}catch(S){throw S===Do?Is:S}else l=n;n=ze();var p=n.queue,f=p.dispatch;return i!==n.memoizedState&&(pe.flags|=2048,Oo(9,{destroy:void 0},Zy.bind(null,p,i),null)),[l,f,e]}function Zy(e,n){e.action=n}function Rd(e){var n=ze(),i=De;if(i!==null)return wd(n,i,e);ze(),n=n.memoizedState,i=ze();var l=i.queue.dispatch;return i.memoizedState=e,[n,l,!1]}function Oo(e,n,i,l){return e={tag:e,create:i,deps:l,inst:n,next:null},n=pe.updateQueue,n===null&&(n=Ls(),pe.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,n.lastEffect=e),e}function Id(){return ze().memoizedState}function Bs(e,n,i,l){var p=lt();pe.flags|=e,p.memoizedState=Oo(1|n,{destroy:void 0},i,l===void 0?null:l)}function Hs(e,n,i,l){var p=ze();l=l===void 0?null:l;var f=p.memoizedState.inst;De!==null&&l!==null&&zl(l,De.memoizedState.deps)?p.memoizedState=Oo(n,f,i,l):(pe.flags|=e,p.memoizedState=Oo(1|n,f,i,l))}function xd(e,n){Bs(8390656,8,e,n)}function er(e,n){Hs(2048,8,e,n)}function jy(e){pe.flags|=4;var n=pe.updateQueue;if(n===null)n=Ls(),pe.updateQueue=n,n.events=[e];else{var i=n.events;i===null?n.events=[e]:i.push(e)}}function Nd(e){var n=ze().memoizedState;return jy({ref:n,nextImpl:e}),function(){if((we&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function Md(e,n){return Hs(4,2,e,n)}function Pd(e,n){return Hs(4,4,e,n)}function Dd(e,n){if(typeof n=="function"){e=e();var i=n(e);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function kd(e,n,i){i=i!=null?i.concat([e]):null,Hs(4,4,Dd.bind(null,n,e),i)}function tr(){}function Ud(e,n){var i=ze();n=n===void 0?null:n;var l=i.memoizedState;return n!==null&&zl(n,l[1])?l[0]:(i.memoizedState=[e,n],e)}function Ld(e,n){var i=ze();n=n===void 0?null:n;var l=i.memoizedState;if(n!==null&&zl(n,l[1]))return l[0];if(l=e(),ao){vn(!0);try{e()}finally{vn(!1)}}return i.memoizedState=[l,n],l}function nr(e,n,i){return i===void 0||(on&1073741824)!==0&&(Ce&261930)===0?e.memoizedState=n:(e.memoizedState=i,e=Gp(),pe.lanes|=e,Pn|=e,i)}function Gd(e,n,i,l){return Ct(i,n)?i:Uo.current!==null?(e=nr(e,i,l),Ct(e,n)||(Ke=!0),e):(on&42)===0||(on&1073741824)!==0&&(Ce&261930)===0?(Ke=!0,e.memoizedState=i):(e=Gp(),pe.lanes|=e,Pn|=e,n)}function Od(e,n,i,l,p){var f=Y.p;Y.p=f!==0&&8>f?f:8;var S=G.T,A={};G.T=A,sr(e,!1,n,i);try{var _=p(),P=G.S;if(P!==null&&P(A,_),_!==null&&typeof _=="object"&&typeof _.then=="function"){var O=Xy(_,l);Mi(e,n,O,wt(e))}else Mi(e,n,l,wt(e))}catch(F){Mi(e,n,{then:function(){},status:"rejected",reason:F},wt())}finally{Y.p=f,S!==null&&A.types!==null&&(S.types=A.types),G.T=S}}function ev(){}function or(e,n,i,l){if(e.tag!==5)throw Error(a(476));var p=Bd(e).queue;Od(e,p,n,se,i===null?ev:function(){return Hd(e),i(l)})}function Bd(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sn,lastRenderedState:se},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sn,lastRenderedState:i},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Hd(e){var n=Bd(e);n.next===null&&(n=e.alternate.memoizedState),Mi(e,n.next.queue,{},wt())}function ir(){return tt(Xi)}function Fd(){return ze().memoizedState}function Vd(){return ze().memoizedState}function tv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var i=wt();e=wn(i);var l=Rn(n,e,i);l!==null&&(gt(l,n,i),wi(l,n,i)),n={cache:Dl()},e.payload=n;return}n=n.return}}function nv(e,n,i){var l=wt();i={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Fs(e)?zd(n,i):(i=Al(e,n,i,l),i!==null&&(gt(i,e,l),Yd(i,n,l)))}function qd(e,n,i){var l=wt();Mi(e,n,i,l)}function Mi(e,n,i,l){var p={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(Fs(e))zd(n,p);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,A=f(S,i);if(p.hasEagerState=!0,p.eagerState=A,Ct(A,S))return Ts(e,n,p,0),Le===null&&Cs(),!1}catch{}finally{}if(i=Al(e,n,p,l),i!==null)return gt(i,e,l),Yd(i,n,l),!0}return!1}function sr(e,n,i,l){if(l={lane:2,revertLane:Gr(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Fs(e)){if(n)throw Error(a(479))}else n=Al(e,i,l,2),n!==null&&gt(n,e,2)}function Fs(e){var n=e.alternate;return e===pe||n!==null&&n===pe}function zd(e,n){Lo=ks=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function Yd(e,n,i){if((i&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,Qu(e,i)}}var Pi={readContext:tt,use:Gs,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useLayoutEffect:He,useInsertionEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useSyncExternalStore:He,useId:He,useHostTransitionStatus:He,useFormState:He,useActionState:He,useOptimistic:He,useMemoCache:He,useCacheRefresh:He};Pi.useEffectEvent=He;var Jd={readContext:tt,use:Gs,useCallback:function(e,n){return lt().memoizedState=[e,n===void 0?null:n],e},useContext:tt,useEffect:xd,useImperativeHandle:function(e,n,i){i=i!=null?i.concat([e]):null,Bs(4194308,4,Dd.bind(null,n,e),i)},useLayoutEffect:function(e,n){return Bs(4194308,4,e,n)},useInsertionEffect:function(e,n){Bs(4,2,e,n)},useMemo:function(e,n){var i=lt();n=n===void 0?null:n;var l=e();if(ao){vn(!0);try{e()}finally{vn(!1)}}return i.memoizedState=[l,n],l},useReducer:function(e,n,i){var l=lt();if(i!==void 0){var p=i(n);if(ao){vn(!0);try{i(n)}finally{vn(!1)}}}else p=n;return l.memoizedState=l.baseState=p,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:p},l.queue=e,e=e.dispatch=nv.bind(null,pe,e),[l.memoizedState,e]},useRef:function(e){var n=lt();return e={current:e},n.memoizedState=e},useState:function(e){e=Zl(e);var n=e.queue,i=qd.bind(null,pe,n);return n.dispatch=i,[e.memoizedState,i]},useDebugValue:tr,useDeferredValue:function(e,n){var i=lt();return nr(i,e,n)},useTransition:function(){var e=Zl(!1);return e=Od.bind(null,pe,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,i){var l=pe,p=lt();if(Ae){if(i===void 0)throw Error(a(407));i=i()}else{if(i=n(),Le===null)throw Error(a(349));(Ce&127)!==0||fd(l,n,i)}p.memoizedState=i;var f={value:i,getSnapshot:n};return p.queue=f,xd(hd.bind(null,l,f,e),[e]),l.flags|=2048,Oo(9,{destroy:void 0},md.bind(null,l,f,i,n),null),i},useId:function(){var e=lt(),n=Le.identifierPrefix;if(Ae){var i=Jt,l=Yt;i=(l&~(1<<32-St(l)-1)).toString(32)+i,n="_"+n+"R_"+i,i=Us++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=Wy++,n="_"+n+"r_"+i.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ir,useFormState:bd,useActionState:bd,useOptimistic:function(e){var n=lt();n.memoizedState=n.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=sr.bind(null,pe,!0,i),i.dispatch=n,[e,n]},useMemoCache:Wl,useCacheRefresh:function(){return lt().memoizedState=tv.bind(null,pe)},useEffectEvent:function(e){var n=lt(),i={impl:e};return n.memoizedState=i,function(){if((we&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}},ar={readContext:tt,use:Gs,useCallback:Ud,useContext:tt,useEffect:er,useImperativeHandle:kd,useInsertionEffect:Md,useLayoutEffect:Pd,useMemo:Ld,useReducer:Os,useRef:Id,useState:function(){return Os(sn)},useDebugValue:tr,useDeferredValue:function(e,n){var i=ze();return Gd(i,De.memoizedState,e,n)},useTransition:function(){var e=Os(sn)[0],n=ze().memoizedState;return[typeof e=="boolean"?e:Ni(e),n]},useSyncExternalStore:pd,useId:Fd,useHostTransitionStatus:ir,useFormState:_d,useActionState:_d,useOptimistic:function(e,n){var i=ze();return vd(i,De,e,n)},useMemoCache:Wl,useCacheRefresh:Vd};ar.useEffectEvent=Nd;var Kd={readContext:tt,use:Gs,useCallback:Ud,useContext:tt,useEffect:er,useImperativeHandle:kd,useInsertionEffect:Md,useLayoutEffect:Pd,useMemo:Ld,useReducer:$l,useRef:Id,useState:function(){return $l(sn)},useDebugValue:tr,useDeferredValue:function(e,n){var i=ze();return De===null?nr(i,e,n):Gd(i,De.memoizedState,e,n)},useTransition:function(){var e=$l(sn)[0],n=ze().memoizedState;return[typeof e=="boolean"?e:Ni(e),n]},useSyncExternalStore:pd,useId:Fd,useHostTransitionStatus:ir,useFormState:Rd,useActionState:Rd,useOptimistic:function(e,n){var i=ze();return De!==null?vd(i,De,e,n):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:Wl,useCacheRefresh:Vd};Kd.useEffectEvent=Nd;function lr(e,n,i,l){n=e.memoizedState,i=i(l,n),i=i==null?n:C({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var rr={enqueueSetState:function(e,n,i){e=e._reactInternals;var l=wt(),p=wn(l);p.payload=n,i!=null&&(p.callback=i),n=Rn(e,p,l),n!==null&&(gt(n,e,l),wi(n,e,l))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var l=wt(),p=wn(l);p.tag=1,p.payload=n,i!=null&&(p.callback=i),n=Rn(e,p,l),n!==null&&(gt(n,e,l),wi(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=wt(),l=wn(i);l.tag=2,n!=null&&(l.callback=n),n=Rn(e,l,i),n!==null&&(gt(n,e,i),wi(n,e,i))}};function Xd(e,n,i,l,p,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,f,S):n.prototype&&n.prototype.isPureReactComponent?!vi(i,l)||!vi(p,f):!0}function Wd(e,n,i,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,l),n.state!==e&&rr.enqueueReplaceState(n,n.state,null)}function lo(e,n){var i=n;if("ref"in n){i={};for(var l in n)l!=="ref"&&(i[l]=n[l])}if(e=e.defaultProps){i===n&&(i=C({},i));for(var p in e)i[p]===void 0&&(i[p]=e[p])}return i}function Qd(e){Ss(e)}function $d(e){console.error(e)}function Zd(e){Ss(e)}function Vs(e,n){try{var i=e.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function jd(e,n,i){try{var l=e.onCaughtError;l(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(p){setTimeout(function(){throw p})}}function ur(e,n,i){return i=wn(i),i.tag=3,i.payload={element:null},i.callback=function(){Vs(e,n)},i}function ep(e){return e=wn(e),e.tag=3,e}function tp(e,n,i,l){var p=i.type.getDerivedStateFromError;if(typeof p=="function"){var f=l.value;e.payload=function(){return p(f)},e.callback=function(){jd(n,i,l)}}var S=i.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){jd(n,i,l),typeof p!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var A=l.stack;this.componentDidCatch(l.value,{componentStack:A!==null?A:""})})}function ov(e,n,i,l,p){if(i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=i.alternate,n!==null&&No(n,i,p,!0),i=At.current,i!==null){switch(i.tag){case 31:case 13:return kt===null?ea():i.alternate===null&&Fe===0&&(Fe=3),i.flags&=-257,i.flags|=65536,i.lanes=p,l===xs?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([l]):n.add(l),kr(e,l,p)),!1;case 22:return i.flags|=65536,l===xs?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([l]):i.add(l)),kr(e,l,p)),!1}throw Error(a(435,i.tag))}return kr(e,l,p),ea(),!1}if(Ae)return n=At.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=p,l!==Il&&(e=Error(a(422),{cause:l}),Ti(Nt(e,i)))):(l!==Il&&(n=Error(a(423),{cause:l}),Ti(Nt(n,i))),e=e.current.alternate,e.flags|=65536,p&=-p,e.lanes|=p,l=Nt(l,i),p=ur(e.stateNode,l,p),Bl(e,p),Fe!==4&&(Fe=2)),!1;var f=Error(a(520),{cause:l});if(f=Nt(f,i),Hi===null?Hi=[f]:Hi.push(f),Fe!==4&&(Fe=2),n===null)return!0;l=Nt(l,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,e=p&-p,i.lanes|=e,e=ur(i.stateNode,l,e),Bl(i,e),!1;case 1:if(n=i.type,f=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Dn===null||!Dn.has(f))))return i.flags|=65536,p&=-p,i.lanes|=p,p=ep(p),tp(p,e,i,l),Bl(i,p),!1}i=i.return}while(i!==null);return!1}var cr=Error(a(461)),Ke=!1;function nt(e,n,i,l){n.child=e===null?sd(n,null,i,l):so(n,e.child,i,l)}function np(e,n,i,l,p){i=i.render;var f=n.ref;if("ref"in l){var S={};for(var A in l)A!=="ref"&&(S[A]=l[A])}else S=l;return to(n),l=Yl(e,n,i,S,f,p),A=Jl(),e!==null&&!Ke?(Kl(e,n,p),an(e,n,p)):(Ae&&A&&wl(n),n.flags|=1,nt(e,n,l,p),n.child)}function op(e,n,i,l,p){if(e===null){var f=i.type;return typeof f=="function"&&!El(f)&&f.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=f,ip(e,n,f,l,p)):(e=Es(i.type,null,l,n,n.mode,p),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!vr(e,p)){var S=f.memoizedProps;if(i=i.compare,i=i!==null?i:vi,i(S,l)&&e.ref===n.ref)return an(e,n,p)}return n.flags|=1,e=jt(f,l),e.ref=n.ref,e.return=n,n.child=e}function ip(e,n,i,l,p){if(e!==null){var f=e.memoizedProps;if(vi(f,l)&&e.ref===n.ref)if(Ke=!1,n.pendingProps=l=f,vr(e,p))(e.flags&131072)!==0&&(Ke=!0);else return n.lanes=e.lanes,an(e,n,p)}return dr(e,n,i,l,p)}function sp(e,n,i,l){var p=l.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|i:i,e!==null){for(l=n.child=e.child,p=0;l!==null;)p=p|l.lanes|l.childLanes,l=l.sibling;l=p&~f}else l=0,n.child=null;return ap(e,n,f,i,l)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Rs(n,f!==null?f.cachePool:null),f!==null?rd(n,f):Fl(),ud(n);else return l=n.lanes=536870912,ap(e,n,f!==null?f.baseLanes|i:i,i,l)}else f!==null?(Rs(n,f.cachePool),rd(n,f),xn(),n.memoizedState=null):(e!==null&&Rs(n,null),Fl(),xn());return nt(e,n,p,i),n.child}function Di(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function ap(e,n,i,l,p){var f=Ul();return f=f===null?null:{parent:Ye._currentValue,pool:f},n.memoizedState={baseLanes:i,cachePool:f},e!==null&&Rs(n,null),Fl(),ud(n),e!==null&&No(e,n,l,!0),n.childLanes=p,null}function qs(e,n){return n=Ys({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function lp(e,n,i){return so(n,e.child,null,i),e=qs(n,n.pendingProps),e.flags|=2,Et(n),n.memoizedState=null,e}function iv(e,n,i){var l=n.pendingProps,p=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Ae){if(l.mode==="hidden")return e=qs(n,l),n.lanes=536870912,Di(null,e);if(ql(n),(e=Ge)?(e=Cf(e,Dt),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Tn!==null?{id:Yt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},i=zc(e),i.return=n,n.child=i,et=n,Ge=null)):e=null,e===null)throw En(n);return n.lanes=536870912,null}return qs(n,l)}var f=e.memoizedState;if(f!==null){var S=f.dehydrated;if(ql(n),p)if(n.flags&256)n.flags&=-257,n=lp(e,n,i);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(Ke||No(e,n,i,!1),p=(i&e.childLanes)!==0,Ke||p){if(l=Le,l!==null&&(S=$u(l,i),S!==0&&S!==f.retryLane))throw f.retryLane=S,$n(e,S),gt(l,e,S),cr;ea(),n=lp(e,n,i)}else e=f.treeContext,Ge=Ut(S.nextSibling),et=n,Ae=!0,An=null,Dt=!1,e!==null&&Kc(n,e),n=qs(n,l),n.flags|=4096;return n}return e=jt(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function zs(e,n){var i=n.ref;if(i===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(a(284));(e===null||e.ref!==i)&&(n.flags|=4194816)}}function dr(e,n,i,l,p){return to(n),i=Yl(e,n,i,l,void 0,p),l=Jl(),e!==null&&!Ke?(Kl(e,n,p),an(e,n,p)):(Ae&&l&&wl(n),n.flags|=1,nt(e,n,i,p),n.child)}function rp(e,n,i,l,p,f){return to(n),n.updateQueue=null,i=dd(n,l,i,p),cd(e),l=Jl(),e!==null&&!Ke?(Kl(e,n,f),an(e,n,f)):(Ae&&l&&wl(n),n.flags|=1,nt(e,n,i,f),n.child)}function up(e,n,i,l,p){if(to(n),n.stateNode===null){var f=wo,S=i.contextType;typeof S=="object"&&S!==null&&(f=tt(S)),f=new i(l,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=rr,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=l,f.state=n.memoizedState,f.refs={},Gl(n),S=i.contextType,f.context=typeof S=="object"&&S!==null?tt(S):wo,f.state=n.memoizedState,S=i.getDerivedStateFromProps,typeof S=="function"&&(lr(n,i,S,l),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&rr.enqueueReplaceState(f,f.state,null),Ii(n,l,f,p),Ri(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){f=n.stateNode;var A=n.memoizedProps,_=lo(i,A);f.props=_;var P=f.context,O=i.contextType;S=wo,typeof O=="object"&&O!==null&&(S=tt(O));var F=i.getDerivedStateFromProps;O=typeof F=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,O||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||P!==S)&&Wd(n,f,l,S),_n=!1;var D=n.memoizedState;f.state=D,Ii(n,l,f,p),Ri(),P=n.memoizedState,A||D!==P||_n?(typeof F=="function"&&(lr(n,i,F,l),P=n.memoizedState),(_=_n||Xd(n,i,_,l,D,P,S))?(O||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=P),f.props=l,f.state=P,f.context=S,l=_):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{f=n.stateNode,Ol(e,n),S=n.memoizedProps,O=lo(i,S),f.props=O,F=n.pendingProps,D=f.context,P=i.contextType,_=wo,typeof P=="object"&&P!==null&&(_=tt(P)),A=i.getDerivedStateFromProps,(P=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==F||D!==_)&&Wd(n,f,l,_),_n=!1,D=n.memoizedState,f.state=D,Ii(n,l,f,p),Ri();var L=n.memoizedState;S!==F||D!==L||_n||e!==null&&e.dependencies!==null&&_s(e.dependencies)?(typeof A=="function"&&(lr(n,i,A,l),L=n.memoizedState),(O=_n||Xd(n,i,O,l,D,L,_)||e!==null&&e.dependencies!==null&&_s(e.dependencies))?(P||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(l,L,_),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(l,L,_)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&D===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&D===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=L),f.props=l,f.state=L,f.context=_,l=O):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&D===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&D===e.memoizedState||(n.flags|=1024),l=!1)}return f=l,zs(e,n),l=(n.flags&128)!==0,f||l?(f=n.stateNode,i=l&&typeof i.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&l?(n.child=so(n,e.child,null,p),n.child=so(n,null,i,p)):nt(e,n,i,p),n.memoizedState=f.state,e=n.child):e=an(e,n,p),e}function cp(e,n,i,l){return jn(),n.flags|=256,nt(e,n,i,l),n.child}var pr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fr(e){return{baseLanes:e,cachePool:jc()}}function mr(e,n,i){return e=e!==null?e.childLanes&~i:0,n&&(e|=_t),e}function dp(e,n,i){var l=n.pendingProps,p=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(qe.current&2)!==0),S&&(p=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Ae){if(p?In(n):xn(),(e=Ge)?(e=Cf(e,Dt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Tn!==null?{id:Yt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},i=zc(e),i.return=n,n.child=i,et=n,Ge=null)):e=null,e===null)throw En(n);return Qr(e)?n.lanes=32:n.lanes=536870912,null}var A=l.children;return l=l.fallback,p?(xn(),p=n.mode,A=Ys({mode:"hidden",children:A},p),l=Zn(l,p,i,null),A.return=n,l.return=n,A.sibling=l,n.child=A,l=n.child,l.memoizedState=fr(i),l.childLanes=mr(e,S,i),n.memoizedState=pr,Di(null,l)):(In(n),hr(n,A))}var _=e.memoizedState;if(_!==null&&(A=_.dehydrated,A!==null)){if(f)n.flags&256?(In(n),n.flags&=-257,n=gr(e,n,i)):n.memoizedState!==null?(xn(),n.child=e.child,n.flags|=128,n=null):(xn(),A=l.fallback,p=n.mode,l=Ys({mode:"visible",children:l.children},p),A=Zn(A,p,i,null),A.flags|=2,l.return=n,A.return=n,l.sibling=A,n.child=l,so(n,e.child,null,i),l=n.child,l.memoizedState=fr(i),l.childLanes=mr(e,S,i),n.memoizedState=pr,n=Di(null,l));else if(In(n),Qr(A)){if(S=A.nextSibling&&A.nextSibling.dataset,S)var P=S.dgst;S=P,l=Error(a(419)),l.stack="",l.digest=S,Ti({value:l,source:null,stack:null}),n=gr(e,n,i)}else if(Ke||No(e,n,i,!1),S=(i&e.childLanes)!==0,Ke||S){if(S=Le,S!==null&&(l=$u(S,i),l!==0&&l!==_.retryLane))throw _.retryLane=l,$n(e,l),gt(S,e,l),cr;Wr(A)||ea(),n=gr(e,n,i)}else Wr(A)?(n.flags|=192,n.child=e.child,n=null):(e=_.treeContext,Ge=Ut(A.nextSibling),et=n,Ae=!0,An=null,Dt=!1,e!==null&&Kc(n,e),n=hr(n,l.children),n.flags|=4096);return n}return p?(xn(),A=l.fallback,p=n.mode,_=e.child,P=_.sibling,l=jt(_,{mode:"hidden",children:l.children}),l.subtreeFlags=_.subtreeFlags&65011712,P!==null?A=jt(P,A):(A=Zn(A,p,i,null),A.flags|=2),A.return=n,l.return=n,l.sibling=A,n.child=l,Di(null,l),l=n.child,A=e.child.memoizedState,A===null?A=fr(i):(p=A.cachePool,p!==null?(_=Ye._currentValue,p=p.parent!==_?{parent:_,pool:_}:p):p=jc(),A={baseLanes:A.baseLanes|i,cachePool:p}),l.memoizedState=A,l.childLanes=mr(e,S,i),n.memoizedState=pr,Di(e.child,l)):(In(n),i=e.child,e=i.sibling,i=jt(i,{mode:"visible",children:l.children}),i.return=n,i.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=i,n.memoizedState=null,i)}function hr(e,n){return n=Ys({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ys(e,n){return e=Tt(22,e,null,n),e.lanes=0,e}function gr(e,n,i){return so(n,e.child,null,i),e=hr(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function pp(e,n,i){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Ml(e.return,n,i)}function yr(e,n,i,l,p,f){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:p,treeForkCount:f}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=i,S.tailMode=p,S.treeForkCount=f)}function fp(e,n,i){var l=n.pendingProps,p=l.revealOrder,f=l.tail;l=l.children;var S=qe.current,A=(S&2)!==0;if(A?(S=S&1|2,n.flags|=128):S&=1,W(qe,S),nt(e,n,l,i),l=Ae?Ci:0,!A&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pp(e,i,n);else if(e.tag===19)pp(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(p){case"forwards":for(i=n.child,p=null;i!==null;)e=i.alternate,e!==null&&Ds(e)===null&&(p=i),i=i.sibling;i=p,i===null?(p=n.child,n.child=null):(p=i.sibling,i.sibling=null),yr(n,!1,p,i,f,l);break;case"backwards":case"unstable_legacy-backwards":for(i=null,p=n.child,n.child=null;p!==null;){if(e=p.alternate,e!==null&&Ds(e)===null){n.child=p;break}e=p.sibling,p.sibling=i,i=p,p=e}yr(n,!0,i,null,f,l);break;case"together":yr(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function an(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Pn|=n.lanes,(i&n.childLanes)===0)if(e!==null){if(No(e,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,i=jt(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=jt(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function vr(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&_s(e)))}function sv(e,n,i){switch(n.tag){case 3:at(n,n.stateNode.containerInfo),bn(n,Ye,e.memoizedState.cache),jn();break;case 27:case 5:si(n);break;case 4:at(n,n.stateNode.containerInfo);break;case 10:bn(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,ql(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(In(n),n.flags|=128,null):(i&n.child.childLanes)!==0?dp(e,n,i):(In(n),e=an(e,n,i),e!==null?e.sibling:null);In(n);break;case 19:var p=(e.flags&128)!==0;if(l=(i&n.childLanes)!==0,l||(No(e,n,i,!1),l=(i&n.childLanes)!==0),p){if(l)return fp(e,n,i);n.flags|=128}if(p=n.memoizedState,p!==null&&(p.rendering=null,p.tail=null,p.lastEffect=null),W(qe,qe.current),l)break;return null;case 22:return n.lanes=0,sp(e,n,i,n.pendingProps);case 24:bn(n,Ye,e.memoizedState.cache)}return an(e,n,i)}function mp(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ke=!0;else{if(!vr(e,i)&&(n.flags&128)===0)return Ke=!1,sv(e,n,i);Ke=(e.flags&131072)!==0}else Ke=!1,Ae&&(n.flags&1048576)!==0&&Jc(n,Ci,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=oo(n.elementType),n.type=e,typeof e=="function")El(e)?(l=lo(e,l),n.tag=1,n=up(null,n,e,l,i)):(n.tag=0,n=dr(null,n,e,l,i));else{if(e!=null){var p=e.$$typeof;if(p===X){n.tag=11,n=np(null,n,e,l,i);break e}else if(p===J){n.tag=14,n=op(null,n,e,l,i);break e}}throw n=ce(e)||e,Error(a(306,n,""))}}return n;case 0:return dr(e,n,n.type,n.pendingProps,i);case 1:return l=n.type,p=lo(l,n.pendingProps),up(e,n,l,p,i);case 3:e:{if(at(n,n.stateNode.containerInfo),e===null)throw Error(a(387));l=n.pendingProps;var f=n.memoizedState;p=f.element,Ol(e,n),Ii(n,l,null,i);var S=n.memoizedState;if(l=S.cache,bn(n,Ye,l),l!==f.cache&&Pl(n,[Ye],i,!0),Ri(),l=S.element,f.isDehydrated)if(f={element:l,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=cp(e,n,l,i);break e}else if(l!==p){p=Nt(Error(a(424)),n),Ti(p),n=cp(e,n,l,i);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ge=Ut(e.firstChild),et=n,Ae=!0,An=null,Dt=!0,i=sd(n,null,l,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(jn(),l===p){n=an(e,n,i);break e}nt(e,n,l,i)}n=n.child}return n;case 26:return zs(e,n),e===null?(i=wf(n.type,null,n.pendingProps,null))?n.memoizedState=i:Ae||(i=n.type,e=n.pendingProps,l=la(ge.current).createElement(i),l[je]=n,l[ct]=e,ot(l,i,e),Qe(l),n.stateNode=l):n.memoizedState=wf(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return si(n),e===null&&Ae&&(l=n.stateNode=Ef(n.type,n.pendingProps,ge.current),et=n,Dt=!0,p=Ge,Gn(n.type)?($r=p,Ge=Ut(l.firstChild)):Ge=p),nt(e,n,n.pendingProps.children,i),zs(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Ae&&((p=l=Ge)&&(l=Uv(l,n.type,n.pendingProps,Dt),l!==null?(n.stateNode=l,et=n,Ge=Ut(l.firstChild),Dt=!1,p=!0):p=!1),p||En(n)),si(n),p=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,l=f.children,Jr(p,f)?l=null:S!==null&&Jr(p,S)&&(n.flags|=32),n.memoizedState!==null&&(p=Yl(e,n,Qy,null,null,i),Xi._currentValue=p),zs(e,n),nt(e,n,l,i),n.child;case 6:return e===null&&Ae&&((e=i=Ge)&&(i=Lv(i,n.pendingProps,Dt),i!==null?(n.stateNode=i,et=n,Ge=null,e=!0):e=!1),e||En(n)),null;case 13:return dp(e,n,i);case 4:return at(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=so(n,null,l,i):nt(e,n,l,i),n.child;case 11:return np(e,n,n.type,n.pendingProps,i);case 7:return nt(e,n,n.pendingProps,i),n.child;case 8:return nt(e,n,n.pendingProps.children,i),n.child;case 12:return nt(e,n,n.pendingProps.children,i),n.child;case 10:return l=n.pendingProps,bn(n,n.type,l.value),nt(e,n,l.children,i),n.child;case 9:return p=n.type._context,l=n.pendingProps.children,to(n),p=tt(p),l=l(p),n.flags|=1,nt(e,n,l,i),n.child;case 14:return op(e,n,n.type,n.pendingProps,i);case 15:return ip(e,n,n.type,n.pendingProps,i);case 19:return fp(e,n,i);case 31:return iv(e,n,i);case 22:return sp(e,n,i,n.pendingProps);case 24:return to(n),l=tt(Ye),e===null?(p=Ul(),p===null&&(p=Le,f=Dl(),p.pooledCache=f,f.refCount++,f!==null&&(p.pooledCacheLanes|=i),p=f),n.memoizedState={parent:l,cache:p},Gl(n),bn(n,Ye,p)):((e.lanes&i)!==0&&(Ol(e,n),Ii(n,null,null,i),Ri()),p=e.memoizedState,f=n.memoizedState,p.parent!==l?(p={parent:l,cache:l},n.memoizedState=p,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=p),bn(n,Ye,l)):(l=f.cache,bn(n,Ye,l),l!==p.cache&&Pl(n,[Ye],i,!0))),nt(e,n,n.pendingProps.children,i),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function ln(e){e.flags|=4}function Sr(e,n,i,l,p){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(p&335544128)===p)if(e.stateNode.complete)e.flags|=8192;else if(Fp())e.flags|=8192;else throw io=xs,Ll}else e.flags&=-16777217}function hp(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Mf(n))if(Fp())e.flags|=8192;else throw io=xs,Ll}function Js(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Xu():536870912,e.lanes|=n,Vo|=n)}function ki(e,n){if(!Ae)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Oe(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(n)for(var p=e.child;p!==null;)i|=p.lanes|p.childLanes,l|=p.subtreeFlags&65011712,l|=p.flags&65011712,p.return=e,p=p.sibling;else for(p=e.child;p!==null;)i|=p.lanes|p.childLanes,l|=p.subtreeFlags,l|=p.flags,p.return=e,p=p.sibling;return e.subtreeFlags|=l,e.childLanes=i,n}function av(e,n,i){var l=n.pendingProps;switch(Rl(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(n),null;case 1:return Oe(n),null;case 3:return i=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),nn(Ye),Ve(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(xo(n)?ln(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,xl())),Oe(n),null;case 26:var p=n.type,f=n.memoizedState;return e===null?(ln(n),f!==null?(Oe(n),hp(n,f)):(Oe(n),Sr(n,p,null,l,i))):f?f!==e.memoizedState?(ln(n),Oe(n),hp(n,f)):(Oe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&ln(n),Oe(n),Sr(n,p,e,l,i)),null;case 27:if(os(n),i=ge.current,p=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&ln(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return Oe(n),null}e=ne.current,xo(n)?Xc(n):(e=Ef(p,l,i),n.stateNode=e,ln(n))}return Oe(n),null;case 5:if(os(n),p=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&ln(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return Oe(n),null}if(f=ne.current,xo(n))Xc(n);else{var S=la(ge.current);switch(f){case 1:f=S.createElementNS("http://www.w3.org/2000/svg",p);break;case 2:f=S.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;default:switch(p){case"svg":f=S.createElementNS("http://www.w3.org/2000/svg",p);break;case"math":f=S.createElementNS("http://www.w3.org/1998/Math/MathML",p);break;case"script":f=S.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?f.multiple=!0:l.size&&(f.size=l.size);break;default:f=typeof l.is=="string"?S.createElement(p,{is:l.is}):S.createElement(p)}}f[je]=n,f[ct]=l;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)f.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=f;e:switch(ot(f,p,l),p){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ln(n)}}return Oe(n),Sr(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,i),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&ln(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(a(166));if(e=ge.current,xo(n)){if(e=n.stateNode,i=n.memoizedProps,l=null,p=et,p!==null)switch(p.tag){case 27:case 5:l=p.memoizedProps}e[je]=n,e=!!(e.nodeValue===i||l!==null&&l.suppressHydrationWarning===!0||pf(e.nodeValue,i)),e||En(n,!0)}else e=la(e).createTextNode(l),e[je]=n,n.stateNode=e}return Oe(n),null;case 31:if(i=n.memoizedState,e===null||e.memoizedState!==null){if(l=xo(n),i!==null){if(e===null){if(!l)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[je]=n}else jn(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Oe(n),e=!1}else i=xl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return n.flags&256?(Et(n),n):(Et(n),null);if((n.flags&128)!==0)throw Error(a(558))}return Oe(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(p=xo(n),l!==null&&l.dehydrated!==null){if(e===null){if(!p)throw Error(a(318));if(p=n.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(a(317));p[je]=n}else jn(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Oe(n),p=!1}else p=xl(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=p),p=!0;if(!p)return n.flags&256?(Et(n),n):(Et(n),null)}return Et(n),(n.flags&128)!==0?(n.lanes=i,n):(i=l!==null,e=e!==null&&e.memoizedState!==null,i&&(l=n.child,p=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(p=l.alternate.memoizedState.cachePool.pool),f=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(f=l.memoizedState.cachePool.pool),f!==p&&(l.flags|=2048)),i!==e&&i&&(n.child.flags|=8192),Js(n,n.updateQueue),Oe(n),null);case 4:return Ve(),e===null&&Fr(n.stateNode.containerInfo),Oe(n),null;case 10:return nn(n.type),Oe(n),null;case 19:if(V(qe),l=n.memoizedState,l===null)return Oe(n),null;if(p=(n.flags&128)!==0,f=l.rendering,f===null)if(p)ki(l,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=Ds(e),f!==null){for(n.flags|=128,ki(l,!1),e=f.updateQueue,n.updateQueue=e,Js(n,e),n.subtreeFlags=0,e=i,i=n.child;i!==null;)qc(i,e),i=i.sibling;return W(qe,qe.current&1|2),Ae&&en(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&yt()>$s&&(n.flags|=128,p=!0,ki(l,!1),n.lanes=4194304)}else{if(!p)if(e=Ds(f),e!==null){if(n.flags|=128,p=!0,e=e.updateQueue,n.updateQueue=e,Js(n,e),ki(l,!0),l.tail===null&&l.tailMode==="hidden"&&!f.alternate&&!Ae)return Oe(n),null}else 2*yt()-l.renderingStartTime>$s&&i!==536870912&&(n.flags|=128,p=!0,ki(l,!1),n.lanes=4194304);l.isBackwards?(f.sibling=n.child,n.child=f):(e=l.last,e!==null?e.sibling=f:n.child=f,l.last=f)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=yt(),e.sibling=null,i=qe.current,W(qe,p?i&1|2:i&1),Ae&&en(n,l.treeForkCount),e):(Oe(n),null);case 22:case 23:return Et(n),Vl(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(i&536870912)!==0&&(n.flags&128)===0&&(Oe(n),n.subtreeFlags&6&&(n.flags|=8192)):Oe(n),i=n.updateQueue,i!==null&&Js(n,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==i&&(n.flags|=2048),e!==null&&V(no),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),nn(Ye),Oe(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function lv(e,n){switch(Rl(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return nn(Ye),Ve(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return os(n),null;case 31:if(n.memoizedState!==null){if(Et(n),n.alternate===null)throw Error(a(340));jn()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Et(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));jn()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return V(qe),null;case 4:return Ve(),null;case 10:return nn(n.type),null;case 22:case 23:return Et(n),Vl(),e!==null&&V(no),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return nn(Ye),null;case 25:return null;default:return null}}function gp(e,n){switch(Rl(n),n.tag){case 3:nn(Ye),Ve();break;case 26:case 27:case 5:os(n);break;case 4:Ve();break;case 31:n.memoizedState!==null&&Et(n);break;case 13:Et(n);break;case 19:V(qe);break;case 10:nn(n.type);break;case 22:case 23:Et(n),Vl(),e!==null&&V(no);break;case 24:nn(Ye)}}function Ui(e,n){try{var i=n.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var p=l.next;i=p;do{if((i.tag&e)===e){l=void 0;var f=i.create,S=i.inst;l=f(),S.destroy=l}i=i.next}while(i!==p)}}catch(A){Me(n,n.return,A)}}function Nn(e,n,i){try{var l=n.updateQueue,p=l!==null?l.lastEffect:null;if(p!==null){var f=p.next;l=f;do{if((l.tag&e)===e){var S=l.inst,A=S.destroy;if(A!==void 0){S.destroy=void 0,p=n;var _=i,P=A;try{P()}catch(O){Me(p,_,O)}}}l=l.next}while(l!==f)}}catch(O){Me(n,n.return,O)}}function yp(e){var n=e.updateQueue;if(n!==null){var i=e.stateNode;try{ld(n,i)}catch(l){Me(e,e.return,l)}}}function vp(e,n,i){i.props=lo(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(l){Me(e,n,l)}}function Li(e,n){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof i=="function"?e.refCleanup=i(l):i.current=l}}catch(p){Me(e,n,p)}}function Kt(e,n){var i=e.ref,l=e.refCleanup;if(i!==null)if(typeof l=="function")try{l()}catch(p){Me(e,n,p)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(p){Me(e,n,p)}else i.current=null}function Sp(e){var n=e.type,i=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&l.focus();break e;case"img":i.src?l.src=i.src:i.srcSet&&(l.srcset=i.srcSet)}}catch(p){Me(e,e.return,p)}}function Cr(e,n,i){try{var l=e.stateNode;xv(l,e.type,i,n),l[ct]=n}catch(p){Me(e,e.return,p)}}function Cp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Gn(e.type)||e.tag===4}function Tr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Gn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ar(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(e),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=$t));else if(l!==4&&(l===27&&Gn(e.type)&&(i=e.stateNode,n=null),e=e.child,e!==null))for(Ar(e,n,i),e=e.sibling;e!==null;)Ar(e,n,i),e=e.sibling}function Ks(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(l!==4&&(l===27&&Gn(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(Ks(e,n,i),e=e.sibling;e!==null;)Ks(e,n,i),e=e.sibling}function Tp(e){var n=e.stateNode,i=e.memoizedProps;try{for(var l=e.type,p=n.attributes;p.length;)n.removeAttributeNode(p[0]);ot(n,l,i),n[je]=e,n[ct]=i}catch(f){Me(e,e.return,f)}}var rn=!1,Xe=!1,Er=!1,Ap=typeof WeakSet=="function"?WeakSet:Set,$e=null;function rv(e,n){if(e=e.containerInfo,zr=ma,e=kc(e),gl(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var p=l.anchorOffset,f=l.focusNode;l=l.focusOffset;try{i.nodeType,f.nodeType}catch{i=null;break e}var S=0,A=-1,_=-1,P=0,O=0,F=e,D=null;t:for(;;){for(var L;F!==i||p!==0&&F.nodeType!==3||(A=S+p),F!==f||l!==0&&F.nodeType!==3||(_=S+l),F.nodeType===3&&(S+=F.nodeValue.length),(L=F.firstChild)!==null;)D=F,F=L;for(;;){if(F===e)break t;if(D===i&&++P===p&&(A=S),D===f&&++O===l&&(_=S),(L=F.nextSibling)!==null)break;F=D,D=F.parentNode}F=L}i=A===-1||_===-1?null:{start:A,end:_}}else i=null}i=i||{start:0,end:0}}else i=null;for(Yr={focusedElem:e,selectionRange:i},ma=!1,$e=n;$e!==null;)if(n=$e,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,$e=e;else for(;$e!==null;){switch(n=$e,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)p=e[i],p.ref.impl=p.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,i=n,p=f.memoizedProps,f=f.memoizedState,l=i.stateNode;try{var te=lo(i.type,p);e=l.getSnapshotBeforeUpdate(te,f),l.__reactInternalSnapshotBeforeUpdate=e}catch(ae){Me(i,i.return,ae)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,i=e.nodeType,i===9)Xr(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,$e=e;break}$e=n.return}}function Ep(e,n,i){var l=i.flags;switch(i.tag){case 0:case 11:case 15:cn(e,i),l&4&&Ui(5,i);break;case 1:if(cn(e,i),l&4)if(e=i.stateNode,n===null)try{e.componentDidMount()}catch(S){Me(i,i.return,S)}else{var p=lo(i.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(p,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){Me(i,i.return,S)}}l&64&&yp(i),l&512&&Li(i,i.return);break;case 3:if(cn(e,i),l&64&&(e=i.updateQueue,e!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{ld(e,n)}catch(S){Me(i,i.return,S)}}break;case 27:n===null&&l&4&&Tp(i);case 26:case 5:cn(e,i),n===null&&l&4&&Sp(i),l&512&&Li(i,i.return);break;case 12:cn(e,i);break;case 31:cn(e,i),l&4&&wp(e,i);break;case 13:cn(e,i),l&4&&Rp(e,i),l&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=yv.bind(null,i),Gv(e,i))));break;case 22:if(l=i.memoizedState!==null||rn,!l){n=n!==null&&n.memoizedState!==null||Xe,p=rn;var f=Xe;rn=l,(Xe=n)&&!f?dn(e,i,(i.subtreeFlags&8772)!==0):cn(e,i),rn=p,Xe=f}break;case 30:break;default:cn(e,i)}}function bp(e){var n=e.alternate;n!==null&&(e.alternate=null,bp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ja(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Be=null,pt=!1;function un(e,n,i){for(i=i.child;i!==null;)_p(e,n,i),i=i.sibling}function _p(e,n,i){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(ai,i)}catch{}switch(i.tag){case 26:Xe||Kt(i,n),un(e,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Xe||Kt(i,n);var l=Be,p=pt;Gn(i.type)&&(Be=i.stateNode,pt=!1),un(e,n,i),Yi(i.stateNode),Be=l,pt=p;break;case 5:Xe||Kt(i,n);case 6:if(l=Be,p=pt,Be=null,un(e,n,i),Be=l,pt=p,Be!==null)if(pt)try{(Be.nodeType===9?Be.body:Be.nodeName==="HTML"?Be.ownerDocument.body:Be).removeChild(i.stateNode)}catch(f){Me(i,n,f)}else try{Be.removeChild(i.stateNode)}catch(f){Me(i,n,f)}break;case 18:Be!==null&&(pt?(e=Be,vf(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Qo(e)):vf(Be,i.stateNode));break;case 4:l=Be,p=pt,Be=i.stateNode.containerInfo,pt=!0,un(e,n,i),Be=l,pt=p;break;case 0:case 11:case 14:case 15:Nn(2,i,n),Xe||Nn(4,i,n),un(e,n,i);break;case 1:Xe||(Kt(i,n),l=i.stateNode,typeof l.componentWillUnmount=="function"&&vp(i,n,l)),un(e,n,i);break;case 21:un(e,n,i);break;case 22:Xe=(l=Xe)||i.memoizedState!==null,un(e,n,i),Xe=l;break;default:un(e,n,i)}}function wp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qo(e)}catch(i){Me(n,n.return,i)}}}function Rp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qo(e)}catch(i){Me(n,n.return,i)}}function uv(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Ap),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Ap),n;default:throw Error(a(435,e.tag))}}function Xs(e,n){var i=uv(e);n.forEach(function(l){if(!i.has(l)){i.add(l);var p=vv.bind(null,e,l);l.then(p,p)}})}function ft(e,n){var i=n.deletions;if(i!==null)for(var l=0;l<i.length;l++){var p=i[l],f=e,S=n,A=S;e:for(;A!==null;){switch(A.tag){case 27:if(Gn(A.type)){Be=A.stateNode,pt=!1;break e}break;case 5:Be=A.stateNode,pt=!1;break e;case 3:case 4:Be=A.stateNode.containerInfo,pt=!0;break e}A=A.return}if(Be===null)throw Error(a(160));_p(f,S,p),Be=null,pt=!1,f=p.alternate,f!==null&&(f.return=null),p.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ip(n,e),n=n.sibling}var Ht=null;function Ip(e,n){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ft(n,e),mt(e),l&4&&(Nn(3,e,e.return),Ui(3,e),Nn(5,e,e.return));break;case 1:ft(n,e),mt(e),l&512&&(Xe||i===null||Kt(i,i.return)),l&64&&rn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?l:i.concat(l))));break;case 26:var p=Ht;if(ft(n,e),mt(e),l&512&&(Xe||i===null||Kt(i,i.return)),l&4){var f=i!==null?i.memoizedState:null;if(l=e.memoizedState,i===null)if(l===null)if(e.stateNode===null){e:{l=e.type,i=e.memoizedProps,p=p.ownerDocument||p;t:switch(l){case"title":f=p.getElementsByTagName("title")[0],(!f||f[ui]||f[je]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=p.createElement(l),p.head.insertBefore(f,p.querySelector("head > title"))),ot(f,l,i),f[je]=e,Qe(f),l=f;break e;case"link":var S=xf("link","href",p).get(l+(i.href||""));if(S){for(var A=0;A<S.length;A++)if(f=S[A],f.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&f.getAttribute("rel")===(i.rel==null?null:i.rel)&&f.getAttribute("title")===(i.title==null?null:i.title)&&f.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){S.splice(A,1);break t}}f=p.createElement(l),ot(f,l,i),p.head.appendChild(f);break;case"meta":if(S=xf("meta","content",p).get(l+(i.content||""))){for(A=0;A<S.length;A++)if(f=S[A],f.getAttribute("content")===(i.content==null?null:""+i.content)&&f.getAttribute("name")===(i.name==null?null:i.name)&&f.getAttribute("property")===(i.property==null?null:i.property)&&f.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&f.getAttribute("charset")===(i.charSet==null?null:i.charSet)){S.splice(A,1);break t}}f=p.createElement(l),ot(f,l,i),p.head.appendChild(f);break;default:throw Error(a(468,l))}f[je]=e,Qe(f),l=f}e.stateNode=l}else Nf(p,e.type,e.stateNode);else e.stateNode=If(p,l,e.memoizedProps);else f!==l?(f===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):f.count--,l===null?Nf(p,e.type,e.stateNode):If(p,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Cr(e,e.memoizedProps,i.memoizedProps)}break;case 27:ft(n,e),mt(e),l&512&&(Xe||i===null||Kt(i,i.return)),i!==null&&l&4&&Cr(e,e.memoizedProps,i.memoizedProps);break;case 5:if(ft(n,e),mt(e),l&512&&(Xe||i===null||Kt(i,i.return)),e.flags&32){p=e.stateNode;try{So(p,"")}catch(te){Me(e,e.return,te)}}l&4&&e.stateNode!=null&&(p=e.memoizedProps,Cr(e,p,i!==null?i.memoizedProps:p)),l&1024&&(Er=!0);break;case 6:if(ft(n,e),mt(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,i=e.stateNode;try{i.nodeValue=l}catch(te){Me(e,e.return,te)}}break;case 3:if(ca=null,p=Ht,Ht=ra(n.containerInfo),ft(n,e),Ht=p,mt(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{Qo(n.containerInfo)}catch(te){Me(e,e.return,te)}Er&&(Er=!1,xp(e));break;case 4:l=Ht,Ht=ra(e.stateNode.containerInfo),ft(n,e),mt(e),Ht=l;break;case 12:ft(n,e),mt(e);break;case 31:ft(n,e),mt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Xs(e,l)));break;case 13:ft(n,e),mt(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Qs=yt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Xs(e,l)));break;case 22:p=e.memoizedState!==null;var _=i!==null&&i.memoizedState!==null,P=rn,O=Xe;if(rn=P||p,Xe=O||_,ft(n,e),Xe=O,rn=P,mt(e),l&8192)e:for(n=e.stateNode,n._visibility=p?n._visibility&-2:n._visibility|1,p&&(i===null||_||rn||Xe||ro(e)),i=null,n=e;;){if(n.tag===5||n.tag===26){if(i===null){_=i=n;try{if(f=_.stateNode,p)S=f.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{A=_.stateNode;var F=_.memoizedProps.style,D=F!=null&&F.hasOwnProperty("display")?F.display:null;A.style.display=D==null||typeof D=="boolean"?"":(""+D).trim()}}catch(te){Me(_,_.return,te)}}}else if(n.tag===6){if(i===null){_=n;try{_.stateNode.nodeValue=p?"":_.memoizedProps}catch(te){Me(_,_.return,te)}}}else if(n.tag===18){if(i===null){_=n;try{var L=_.stateNode;p?Sf(L,!0):Sf(_.stateNode,!1)}catch(te){Me(_,_.return,te)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;i===n&&(i=null),n=n.return}i===n&&(i=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(i=l.retryQueue,i!==null&&(l.retryQueue=null,Xs(e,i))));break;case 19:ft(n,e),mt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Xs(e,l)));break;case 30:break;case 21:break;default:ft(n,e),mt(e)}}function mt(e){var n=e.flags;if(n&2){try{for(var i,l=e.return;l!==null;){if(Cp(l)){i=l;break}l=l.return}if(i==null)throw Error(a(160));switch(i.tag){case 27:var p=i.stateNode,f=Tr(e);Ks(e,f,p);break;case 5:var S=i.stateNode;i.flags&32&&(So(S,""),i.flags&=-33);var A=Tr(e);Ks(e,A,S);break;case 3:case 4:var _=i.stateNode.containerInfo,P=Tr(e);Ar(e,P,_);break;default:throw Error(a(161))}}catch(O){Me(e,e.return,O)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function xp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;xp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function cn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ep(e,n.alternate,n),n=n.sibling}function ro(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Nn(4,n,n.return),ro(n);break;case 1:Kt(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount=="function"&&vp(n,n.return,i),ro(n);break;case 27:Yi(n.stateNode);case 26:case 5:Kt(n,n.return),ro(n);break;case 22:n.memoizedState===null&&ro(n);break;case 30:ro(n);break;default:ro(n)}e=e.sibling}}function dn(e,n,i){for(i=i&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,p=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:dn(p,f,i),Ui(4,f);break;case 1:if(dn(p,f,i),l=f,p=l.stateNode,typeof p.componentDidMount=="function")try{p.componentDidMount()}catch(P){Me(l,l.return,P)}if(l=f,p=l.updateQueue,p!==null){var A=l.stateNode;try{var _=p.shared.hiddenCallbacks;if(_!==null)for(p.shared.hiddenCallbacks=null,p=0;p<_.length;p++)ad(_[p],A)}catch(P){Me(l,l.return,P)}}i&&S&64&&yp(f),Li(f,f.return);break;case 27:Tp(f);case 26:case 5:dn(p,f,i),i&&l===null&&S&4&&Sp(f),Li(f,f.return);break;case 12:dn(p,f,i);break;case 31:dn(p,f,i),i&&S&4&&wp(p,f);break;case 13:dn(p,f,i),i&&S&4&&Rp(p,f);break;case 22:f.memoizedState===null&&dn(p,f,i),Li(f,f.return);break;case 30:break;default:dn(p,f,i)}n=n.sibling}}function br(e,n){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&Ai(i))}function _r(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ai(e))}function Ft(e,n,i,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Np(e,n,i,l),n=n.sibling}function Np(e,n,i,l){var p=n.flags;switch(n.tag){case 0:case 11:case 15:Ft(e,n,i,l),p&2048&&Ui(9,n);break;case 1:Ft(e,n,i,l);break;case 3:Ft(e,n,i,l),p&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ai(e)));break;case 12:if(p&2048){Ft(e,n,i,l),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,A=f.onPostCommit;typeof A=="function"&&A(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(_){Me(n,n.return,_)}}else Ft(e,n,i,l);break;case 31:Ft(e,n,i,l);break;case 13:Ft(e,n,i,l);break;case 23:break;case 22:f=n.stateNode,S=n.alternate,n.memoizedState!==null?f._visibility&2?Ft(e,n,i,l):Gi(e,n):f._visibility&2?Ft(e,n,i,l):(f._visibility|=2,Bo(e,n,i,l,(n.subtreeFlags&10256)!==0||!1)),p&2048&&br(S,n);break;case 24:Ft(e,n,i,l),p&2048&&_r(n.alternate,n);break;default:Ft(e,n,i,l)}}function Bo(e,n,i,l,p){for(p=p&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,S=n,A=i,_=l,P=S.flags;switch(S.tag){case 0:case 11:case 15:Bo(f,S,A,_,p),Ui(8,S);break;case 23:break;case 22:var O=S.stateNode;S.memoizedState!==null?O._visibility&2?Bo(f,S,A,_,p):Gi(f,S):(O._visibility|=2,Bo(f,S,A,_,p)),p&&P&2048&&br(S.alternate,S);break;case 24:Bo(f,S,A,_,p),p&&P&2048&&_r(S.alternate,S);break;default:Bo(f,S,A,_,p)}n=n.sibling}}function Gi(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=e,l=n,p=l.flags;switch(l.tag){case 22:Gi(i,l),p&2048&&br(l.alternate,l);break;case 24:Gi(i,l),p&2048&&_r(l.alternate,l);break;default:Gi(i,l)}n=n.sibling}}var Oi=8192;function Ho(e,n,i){if(e.subtreeFlags&Oi)for(e=e.child;e!==null;)Mp(e,n,i),e=e.sibling}function Mp(e,n,i){switch(e.tag){case 26:Ho(e,n,i),e.flags&Oi&&e.memoizedState!==null&&Wv(i,Ht,e.memoizedState,e.memoizedProps);break;case 5:Ho(e,n,i);break;case 3:case 4:var l=Ht;Ht=ra(e.stateNode.containerInfo),Ho(e,n,i),Ht=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Oi,Oi=16777216,Ho(e,n,i),Oi=l):Ho(e,n,i));break;default:Ho(e,n,i)}}function Pp(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Bi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];$e=l,kp(l,e)}Pp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Dp(e),e=e.sibling}function Dp(e){switch(e.tag){case 0:case 11:case 15:Bi(e),e.flags&2048&&Nn(9,e,e.return);break;case 3:Bi(e);break;case 12:Bi(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ws(e)):Bi(e);break;default:Bi(e)}}function Ws(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];$e=l,kp(l,e)}Pp(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Nn(8,n,n.return),Ws(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,Ws(n));break;default:Ws(n)}e=e.sibling}}function kp(e,n){for(;$e!==null;){var i=$e;switch(i.tag){case 0:case 11:case 15:Nn(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var l=i.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ai(i.memoizedState.cache)}if(l=i.child,l!==null)l.return=i,$e=l;else e:for(i=e;$e!==null;){l=$e;var p=l.sibling,f=l.return;if(bp(l),l===i){$e=null;break e}if(p!==null){p.return=f,$e=p;break e}$e=f}}}var cv={getCacheForType:function(e){var n=tt(Ye),i=n.data.get(e);return i===void 0&&(i=e(),n.data.set(e,i)),i},cacheSignal:function(){return tt(Ye).controller.signal}},dv=typeof WeakMap=="function"?WeakMap:Map,we=0,Le=null,ye=null,Ce=0,Ne=0,bt=null,Mn=!1,Fo=!1,wr=!1,pn=0,Fe=0,Pn=0,uo=0,Rr=0,_t=0,Vo=0,Hi=null,ht=null,Ir=!1,Qs=0,Up=0,$s=1/0,Zs=null,Dn=null,We=0,kn=null,qo=null,fn=0,xr=0,Nr=null,Lp=null,Fi=0,Mr=null;function wt(){return(we&2)!==0&&Ce!==0?Ce&-Ce:G.T!==null?Gr():Zu()}function Gp(){if(_t===0)if((Ce&536870912)===0||Ae){var e=as;as<<=1,(as&3932160)===0&&(as=262144),_t=e}else _t=536870912;return e=At.current,e!==null&&(e.flags|=32),_t}function gt(e,n,i){(e===Le&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)&&(zo(e,0),Un(e,Ce,_t,!1)),ri(e,i),((we&2)===0||e!==Le)&&(e===Le&&((we&2)===0&&(uo|=i),Fe===4&&Un(e,Ce,_t,!1)),Xt(e))}function Op(e,n,i){if((we&6)!==0)throw Error(a(327));var l=!i&&(n&127)===0&&(n&e.expiredLanes)===0||li(e,n),p=l?mv(e,n):Dr(e,n,!0),f=l;do{if(p===0){Fo&&!l&&Un(e,n,0,!1);break}else{if(i=e.current.alternate,f&&!pv(i)){p=Dr(e,n,!1),f=!1;continue}if(p===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var A=e;p=Hi;var _=A.current.memoizedState.isDehydrated;if(_&&(zo(A,S).flags|=256),S=Dr(A,S,!1),S!==2){if(wr&&!_){A.errorRecoveryDisabledLanes|=f,uo|=f,p=4;break e}f=ht,ht=p,f!==null&&(ht===null?ht=f:ht.push.apply(ht,f))}p=S}if(f=!1,p!==2)continue}}if(p===1){zo(e,0),Un(e,n,0,!0);break}e:{switch(l=e,f=p,f){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:Un(l,n,_t,!Mn);break e;case 2:ht=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(p=Qs+300-yt(),10<p)){if(Un(l,n,_t,!Mn),rs(l,0,!0)!==0)break e;fn=n,l.timeoutHandle=gf(Bp.bind(null,l,i,ht,Zs,Ir,n,_t,uo,Vo,Mn,f,"Throttled",-0,0),p);break e}Bp(l,i,ht,Zs,Ir,n,_t,uo,Vo,Mn,f,null,-0,0)}}break}while(!0);Xt(e)}function Bp(e,n,i,l,p,f,S,A,_,P,O,F,D,L){if(e.timeoutHandle=-1,F=n.subtreeFlags,F&8192||(F&16785408)===16785408){F={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},Mp(n,f,F);var te=(f&62914560)===f?Qs-yt():(f&4194048)===f?Up-yt():0;if(te=Qv(F,te),te!==null){fn=f,e.cancelPendingCommit=te(Kp.bind(null,e,n,f,i,l,p,S,A,_,O,F,null,D,L)),Un(e,f,S,!P);return}}Kp(e,n,f,i,l,p,S,A,_)}function pv(e){for(var n=e;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var l=0;l<i.length;l++){var p=i[l],f=p.getSnapshot;p=p.value;try{if(!Ct(f(),p))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Un(e,n,i,l){n&=~Rr,n&=~uo,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var p=n;0<p;){var f=31-St(p),S=1<<f;l[f]=-1,p&=~S}i!==0&&Wu(e,i,n)}function js(){return(we&6)===0?(Vi(0),!1):!0}function Pr(){if(ye!==null){if(Ne===0)var e=ye.return;else e=ye,tn=eo=null,Xl(e),ko=null,bi=0,e=ye;for(;e!==null;)gp(e.alternate,e),e=e.return;ye=null}}function zo(e,n){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,Pv(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),fn=0,Pr(),Le=e,ye=i=jt(e.current,null),Ce=n,Ne=0,bt=null,Mn=!1,Fo=li(e,n),wr=!1,Vo=_t=Rr=uo=Pn=Fe=0,ht=Hi=null,Ir=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var p=31-St(l),f=1<<p;n|=e[p],l&=~f}return pn=n,Cs(),i}function Hp(e,n){pe=null,G.H=Pi,n===Do||n===Is?(n=nd(),Ne=3):n===Ll?(n=nd(),Ne=4):Ne=n===cr?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,bt=n,ye===null&&(Fe=1,Vs(e,Nt(n,e.current)))}function Fp(){var e=At.current;return e===null?!0:(Ce&4194048)===Ce?kt===null:(Ce&62914560)===Ce||(Ce&536870912)!==0?e===kt:!1}function Vp(){var e=G.H;return G.H=Pi,e===null?Pi:e}function qp(){var e=G.A;return G.A=cv,e}function ea(){Fe=4,Mn||(Ce&4194048)!==Ce&&At.current!==null||(Fo=!0),(Pn&134217727)===0&&(uo&134217727)===0||Le===null||Un(Le,Ce,_t,!1)}function Dr(e,n,i){var l=we;we|=2;var p=Vp(),f=qp();(Le!==e||Ce!==n)&&(Zs=null,zo(e,n)),n=!1;var S=Fe;e:do try{if(Ne!==0&&ye!==null){var A=ye,_=bt;switch(Ne){case 8:Pr(),S=6;break e;case 3:case 2:case 9:case 6:At.current===null&&(n=!0);var P=Ne;if(Ne=0,bt=null,Yo(e,A,_,P),i&&Fo){S=0;break e}break;default:P=Ne,Ne=0,bt=null,Yo(e,A,_,P)}}fv(),S=Fe;break}catch(O){Hp(e,O)}while(!0);return n&&e.shellSuspendCounter++,tn=eo=null,we=l,G.H=p,G.A=f,ye===null&&(Le=null,Ce=0,Cs()),S}function fv(){for(;ye!==null;)zp(ye)}function mv(e,n){var i=we;we|=2;var l=Vp(),p=qp();Le!==e||Ce!==n?(Zs=null,$s=yt()+500,zo(e,n)):Fo=li(e,n);e:do try{if(Ne!==0&&ye!==null){n=ye;var f=bt;t:switch(Ne){case 1:Ne=0,bt=null,Yo(e,n,f,1);break;case 2:case 9:if(ed(f)){Ne=0,bt=null,Yp(n);break}n=function(){Ne!==2&&Ne!==9||Le!==e||(Ne=7),Xt(e)},f.then(n,n);break e;case 3:Ne=7;break e;case 4:Ne=5;break e;case 7:ed(f)?(Ne=0,bt=null,Yp(n)):(Ne=0,bt=null,Yo(e,n,f,7));break;case 5:var S=null;switch(ye.tag){case 26:S=ye.memoizedState;case 5:case 27:var A=ye;if(S?Mf(S):A.stateNode.complete){Ne=0,bt=null;var _=A.sibling;if(_!==null)ye=_;else{var P=A.return;P!==null?(ye=P,ta(P)):ye=null}break t}}Ne=0,bt=null,Yo(e,n,f,5);break;case 6:Ne=0,bt=null,Yo(e,n,f,6);break;case 8:Pr(),Fe=6;break e;default:throw Error(a(462))}}hv();break}catch(O){Hp(e,O)}while(!0);return tn=eo=null,G.H=l,G.A=p,we=i,ye!==null?0:(Le=null,Ce=0,Cs(),Fe)}function hv(){for(;ye!==null&&!Og();)zp(ye)}function zp(e){var n=mp(e.alternate,e,pn);e.memoizedProps=e.pendingProps,n===null?ta(e):ye=n}function Yp(e){var n=e,i=n.alternate;switch(n.tag){case 15:case 0:n=rp(i,n,n.pendingProps,n.type,void 0,Ce);break;case 11:n=rp(i,n,n.pendingProps,n.type.render,n.ref,Ce);break;case 5:Xl(n);default:gp(i,n),n=ye=qc(n,pn),n=mp(i,n,pn)}e.memoizedProps=e.pendingProps,n===null?ta(e):ye=n}function Yo(e,n,i,l){tn=eo=null,Xl(n),ko=null,bi=0;var p=n.return;try{if(ov(e,p,n,i,Ce)){Fe=1,Vs(e,Nt(i,e.current)),ye=null;return}}catch(f){if(p!==null)throw ye=p,f;Fe=1,Vs(e,Nt(i,e.current)),ye=null;return}n.flags&32768?(Ae||l===1?e=!0:Fo||(Ce&536870912)!==0?e=!1:(Mn=e=!0,(l===2||l===9||l===3||l===6)&&(l=At.current,l!==null&&l.tag===13&&(l.flags|=16384))),Jp(n,e)):ta(n)}function ta(e){var n=e;do{if((n.flags&32768)!==0){Jp(n,Mn);return}e=n.return;var i=av(n.alternate,n,pn);if(i!==null){ye=i;return}if(n=n.sibling,n!==null){ye=n;return}ye=n=e}while(n!==null);Fe===0&&(Fe=5)}function Jp(e,n){do{var i=lv(e.alternate,e);if(i!==null){i.flags&=32767,ye=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(e=e.sibling,e!==null)){ye=e;return}ye=e=i}while(e!==null);Fe=6,ye=null}function Kp(e,n,i,l,p,f,S,A,_){e.cancelPendingCommit=null;do na();while(We!==0);if((we&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(f=n.lanes|n.childLanes,f|=Tl,Xg(e,i,f,S,A,_),e===Le&&(ye=Le=null,Ce=0),qo=n,kn=e,fn=i,xr=f,Nr=p,Lp=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Sv(is,function(){return Zp(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=G.T,G.T=null,p=Y.p,Y.p=2,S=we,we|=4;try{rv(e,n,i)}finally{we=S,Y.p=p,G.T=l}}We=1,Xp(),Wp(),Qp()}}function Xp(){if(We===1){We=0;var e=kn,n=qo,i=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||i){i=G.T,G.T=null;var l=Y.p;Y.p=2;var p=we;we|=4;try{Ip(n,e);var f=Yr,S=kc(e.containerInfo),A=f.focusedElem,_=f.selectionRange;if(S!==A&&A&&A.ownerDocument&&Dc(A.ownerDocument.documentElement,A)){if(_!==null&&gl(A)){var P=_.start,O=_.end;if(O===void 0&&(O=P),"selectionStart"in A)A.selectionStart=P,A.selectionEnd=Math.min(O,A.value.length);else{var F=A.ownerDocument||document,D=F&&F.defaultView||window;if(D.getSelection){var L=D.getSelection(),te=A.textContent.length,ae=Math.min(_.start,te),Ue=_.end===void 0?ae:Math.min(_.end,te);!L.extend&&ae>Ue&&(S=Ue,Ue=ae,ae=S);var x=Pc(A,ae),w=Pc(A,Ue);if(x&&w&&(L.rangeCount!==1||L.anchorNode!==x.node||L.anchorOffset!==x.offset||L.focusNode!==w.node||L.focusOffset!==w.offset)){var M=F.createRange();M.setStart(x.node,x.offset),L.removeAllRanges(),ae>Ue?(L.addRange(M),L.extend(w.node,w.offset)):(M.setEnd(w.node,w.offset),L.addRange(M))}}}}for(F=[],L=A;L=L.parentNode;)L.nodeType===1&&F.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<F.length;A++){var H=F[A];H.element.scrollLeft=H.left,H.element.scrollTop=H.top}}ma=!!zr,Yr=zr=null}finally{we=p,Y.p=l,G.T=i}}e.current=n,We=2}}function Wp(){if(We===2){We=0;var e=kn,n=qo,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=G.T,G.T=null;var l=Y.p;Y.p=2;var p=we;we|=4;try{Ep(e,n.alternate,n)}finally{we=p,Y.p=l,G.T=i}}We=3}}function Qp(){if(We===4||We===3){We=0,Bg();var e=kn,n=qo,i=fn,l=Lp;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?We=5:(We=0,qo=kn=null,$p(e,e.pendingLanes));var p=e.pendingLanes;if(p===0&&(Dn=null),$a(i),n=n.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(ai,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=G.T,p=Y.p,Y.p=2,G.T=null;try{for(var f=e.onRecoverableError,S=0;S<l.length;S++){var A=l[S];f(A.value,{componentStack:A.stack})}}finally{G.T=n,Y.p=p}}(fn&3)!==0&&na(),Xt(e),p=e.pendingLanes,(i&261930)!==0&&(p&42)!==0?e===Mr?Fi++:(Fi=0,Mr=e):Fi=0,Vi(0)}}function $p(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ai(n)))}function na(){return Xp(),Wp(),Qp(),Zp()}function Zp(){if(We!==5)return!1;var e=kn,n=xr;xr=0;var i=$a(fn),l=G.T,p=Y.p;try{Y.p=32>i?32:i,G.T=null,i=Nr,Nr=null;var f=kn,S=fn;if(We=0,qo=kn=null,fn=0,(we&6)!==0)throw Error(a(331));var A=we;if(we|=4,Dp(f.current),Np(f,f.current,S,i),we=A,Vi(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(ai,f)}catch{}return!0}finally{Y.p=p,G.T=l,$p(e,n)}}function jp(e,n,i){n=Nt(i,n),n=ur(e.stateNode,n,2),e=Rn(e,n,2),e!==null&&(ri(e,2),Xt(e))}function Me(e,n,i){if(e.tag===3)jp(e,e,i);else for(;n!==null;){if(n.tag===3){jp(n,e,i);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Dn===null||!Dn.has(l))){e=Nt(i,e),i=ep(2),l=Rn(n,i,2),l!==null&&(tp(i,l,n,e),ri(l,2),Xt(l));break}}n=n.return}}function kr(e,n,i){var l=e.pingCache;if(l===null){l=e.pingCache=new dv;var p=new Set;l.set(n,p)}else p=l.get(n),p===void 0&&(p=new Set,l.set(n,p));p.has(i)||(wr=!0,p.add(i),e=gv.bind(null,e,n,i),n.then(e,e))}function gv(e,n,i){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,Le===e&&(Ce&i)===i&&(Fe===4||Fe===3&&(Ce&62914560)===Ce&&300>yt()-Qs?(we&2)===0&&zo(e,0):Rr|=i,Vo===Ce&&(Vo=0)),Xt(e)}function ef(e,n){n===0&&(n=Xu()),e=$n(e,n),e!==null&&(ri(e,n),Xt(e))}function yv(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),ef(e,i)}function vv(e,n){var i=0;switch(e.tag){case 31:case 13:var l=e.stateNode,p=e.memoizedState;p!==null&&(i=p.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(n),ef(e,i)}function Sv(e,n){return Ka(e,n)}var oa=null,Jo=null,Ur=!1,ia=!1,Lr=!1,Ln=0;function Xt(e){e!==Jo&&e.next===null&&(Jo===null?oa=Jo=e:Jo=Jo.next=e),ia=!0,Ur||(Ur=!0,Tv())}function Vi(e,n){if(!Lr&&ia){Lr=!0;do for(var i=!1,l=oa;l!==null;){if(e!==0){var p=l.pendingLanes;if(p===0)var f=0;else{var S=l.suspendedLanes,A=l.pingedLanes;f=(1<<31-St(42|e)+1)-1,f&=p&~(S&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(i=!0,sf(l,f))}else f=Ce,f=rs(l,l===Le?f:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(f&3)===0||li(l,f)||(i=!0,sf(l,f));l=l.next}while(i);Lr=!1}}function Cv(){tf()}function tf(){ia=Ur=!1;var e=0;Ln!==0&&Mv()&&(e=Ln);for(var n=yt(),i=null,l=oa;l!==null;){var p=l.next,f=nf(l,n);f===0?(l.next=null,i===null?oa=p:i.next=p,p===null&&(Jo=i)):(i=l,(e!==0||(f&3)!==0)&&(ia=!0)),l=p}We!==0&&We!==5||Vi(e),Ln!==0&&(Ln=0)}function nf(e,n){for(var i=e.suspendedLanes,l=e.pingedLanes,p=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-St(f),A=1<<S,_=p[S];_===-1?((A&i)===0||(A&l)!==0)&&(p[S]=Kg(A,n)):_<=n&&(e.expiredLanes|=A),f&=~A}if(n=Le,i=Ce,i=rs(e,e===n?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,i===0||e===n&&(Ne===2||Ne===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Xa(l),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||li(e,i)){if(n=i&-i,n===e.callbackPriority)return n;switch(l!==null&&Xa(l),$a(i)){case 2:case 8:i=Ju;break;case 32:i=is;break;case 268435456:i=Ku;break;default:i=is}return l=of.bind(null,e),i=Ka(i,l),e.callbackPriority=n,e.callbackNode=i,n}return l!==null&&l!==null&&Xa(l),e.callbackPriority=2,e.callbackNode=null,2}function of(e,n){if(We!==0&&We!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(na()&&e.callbackNode!==i)return null;var l=Ce;return l=rs(e,e===Le?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Op(e,l,n),nf(e,yt()),e.callbackNode!=null&&e.callbackNode===i?of.bind(null,e):null)}function sf(e,n){if(na())return null;Op(e,n,!0)}function Tv(){Dv(function(){(we&6)!==0?Ka(Yu,Cv):tf()})}function Gr(){if(Ln===0){var e=Mo;e===0&&(e=ss,ss<<=1,(ss&261888)===0&&(ss=256)),Ln=e}return Ln}function af(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ps(""+e)}function lf(e,n){var i=n.ownerDocument.createElement("input");return i.name=n.name,i.value=n.value,e.id&&i.setAttribute("form",e.id),n.parentNode.insertBefore(i,n),e=new FormData(e),i.parentNode.removeChild(i),e}function Av(e,n,i,l,p){if(n==="submit"&&i&&i.stateNode===p){var f=af((p[ct]||null).action),S=l.submitter;S&&(n=(n=S[ct]||null)?af(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var A=new gs("action","action",null,l,p);e.push({event:A,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ln!==0){var _=S?lf(p,S):new FormData(p);or(i,{pending:!0,data:_,method:p.method,action:f},null,_)}}else typeof f=="function"&&(A.preventDefault(),_=S?lf(p,S):new FormData(p),or(i,{pending:!0,data:_,method:p.method,action:f},f,_))},currentTarget:p}]})}}for(var Or=0;Or<Cl.length;Or++){var Br=Cl[Or],Ev=Br.toLowerCase(),bv=Br[0].toUpperCase()+Br.slice(1);Bt(Ev,"on"+bv)}Bt(Gc,"onAnimationEnd"),Bt(Oc,"onAnimationIteration"),Bt(Bc,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(Hy,"onTransitionRun"),Bt(Fy,"onTransitionStart"),Bt(Vy,"onTransitionCancel"),Bt(Hc,"onTransitionEnd"),yo("onMouseEnter",["mouseout","mouseover"]),yo("onMouseLeave",["mouseout","mouseover"]),yo("onPointerEnter",["pointerout","pointerover"]),yo("onPointerLeave",["pointerout","pointerover"]),Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_v=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qi));function rf(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],p=l.event;l=l.listeners;e:{var f=void 0;if(n)for(var S=l.length-1;0<=S;S--){var A=l[S],_=A.instance,P=A.currentTarget;if(A=A.listener,_!==f&&p.isPropagationStopped())break e;f=A,p.currentTarget=P;try{f(p)}catch(O){Ss(O)}p.currentTarget=null,f=_}else for(S=0;S<l.length;S++){if(A=l[S],_=A.instance,P=A.currentTarget,A=A.listener,_!==f&&p.isPropagationStopped())break e;f=A,p.currentTarget=P;try{f(p)}catch(O){Ss(O)}p.currentTarget=null,f=_}}}}function ve(e,n){var i=n[Za];i===void 0&&(i=n[Za]=new Set);var l=e+"__bubble";i.has(l)||(uf(n,e,2,!1),i.add(l))}function Hr(e,n,i){var l=0;n&&(l|=4),uf(i,e,l,n)}var sa="_reactListening"+Math.random().toString(36).slice(2);function Fr(e){if(!e[sa]){e[sa]=!0,tc.forEach(function(i){i!=="selectionchange"&&(_v.has(i)||Hr(i,!1,e),Hr(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[sa]||(n[sa]=!0,Hr("selectionchange",!1,n))}}function uf(e,n,i,l){switch(Of(n)){case 2:var p=jv;break;case 8:p=e0;break;default:p=nu}i=p.bind(null,n,i,e),p=void 0,!ll||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(p=!0),l?p!==void 0?e.addEventListener(n,i,{capture:!0,passive:p}):e.addEventListener(n,i,!0):p!==void 0?e.addEventListener(n,i,{passive:p}):e.addEventListener(n,i,!1)}function Vr(e,n,i,l,p){var f=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var A=l.stateNode.containerInfo;if(A===p)break;if(S===4)for(S=l.return;S!==null;){var _=S.tag;if((_===3||_===4)&&S.stateNode.containerInfo===p)return;S=S.return}for(;A!==null;){if(S=mo(A),S===null)return;if(_=S.tag,_===5||_===6||_===26||_===27){l=f=S;continue e}A=A.parentNode}}l=l.return}fc(function(){var P=f,O=sl(i),F=[];e:{var D=Fc.get(e);if(D!==void 0){var L=gs,te=e;switch(e){case"keypress":if(ms(i)===0)break e;case"keydown":case"keyup":L=vy;break;case"focusin":te="focus",L=dl;break;case"focusout":te="blur",L=dl;break;case"beforeblur":case"afterblur":L=dl;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=ay;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Ty;break;case Gc:case Oc:case Bc:L=uy;break;case Hc:L=Ey;break;case"scroll":case"scrollend":L=iy;break;case"wheel":L=_y;break;case"copy":case"cut":case"paste":L=dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=vc;break;case"toggle":case"beforetoggle":L=Ry}var ae=(n&4)!==0,Ue=!ae&&(e==="scroll"||e==="scrollend"),x=ae?D!==null?D+"Capture":null:D;ae=[];for(var w=P,M;w!==null;){var H=w;if(M=H.stateNode,H=H.tag,H!==5&&H!==26&&H!==27||M===null||x===null||(H=di(w,x),H!=null&&ae.push(zi(w,H,M))),Ue)break;w=w.return}0<ae.length&&(D=new L(D,te,null,i,O),F.push({event:D,listeners:ae}))}}if((n&7)===0){e:{if(D=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",D&&i!==il&&(te=i.relatedTarget||i.fromElement)&&(mo(te)||te[fo]))break e;if((L||D)&&(D=O.window===O?O:(D=O.ownerDocument)?D.defaultView||D.parentWindow:window,L?(te=i.relatedTarget||i.toElement,L=P,te=te?mo(te):null,te!==null&&(Ue=d(te),ae=te.tag,te!==Ue||ae!==5&&ae!==27&&ae!==6)&&(te=null)):(L=null,te=P),L!==te)){if(ae=gc,H="onMouseLeave",x="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(ae=vc,H="onPointerLeave",x="onPointerEnter",w="pointer"),Ue=L==null?D:ci(L),M=te==null?D:ci(te),D=new ae(H,w+"leave",L,i,O),D.target=Ue,D.relatedTarget=M,H=null,mo(O)===P&&(ae=new ae(x,w+"enter",te,i,O),ae.target=M,ae.relatedTarget=Ue,H=ae),Ue=H,L&&te)t:{for(ae=wv,x=L,w=te,M=0,H=x;H;H=ae(H))M++;H=0;for(var ie=w;ie;ie=ae(ie))H++;for(;0<M-H;)x=ae(x),M--;for(;0<H-M;)w=ae(w),H--;for(;M--;){if(x===w||w!==null&&x===w.alternate){ae=x;break t}x=ae(x),w=ae(w)}ae=null}else ae=null;L!==null&&cf(F,D,L,ae,!1),te!==null&&Ue!==null&&cf(F,Ue,te,ae,!0)}}e:{if(D=P?ci(P):window,L=D.nodeName&&D.nodeName.toLowerCase(),L==="select"||L==="input"&&D.type==="file")var Ee=wc;else if(bc(D))if(Rc)Ee=Gy;else{Ee=Uy;var oe=ky}else L=D.nodeName,!L||L.toLowerCase()!=="input"||D.type!=="checkbox"&&D.type!=="radio"?P&&ol(P.elementType)&&(Ee=wc):Ee=Ly;if(Ee&&(Ee=Ee(e,P))){_c(F,Ee,i,O);break e}oe&&oe(e,D,P),e==="focusout"&&P&&D.type==="number"&&P.memoizedProps.value!=null&&nl(D,"number",D.value)}switch(oe=P?ci(P):window,e){case"focusin":(bc(oe)||oe.contentEditable==="true")&&(Eo=oe,yl=P,Si=null);break;case"focusout":Si=yl=Eo=null;break;case"mousedown":vl=!0;break;case"contextmenu":case"mouseup":case"dragend":vl=!1,Uc(F,i,O);break;case"selectionchange":if(By)break;case"keydown":case"keyup":Uc(F,i,O)}var fe;if(fl)e:{switch(e){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else Ao?Ac(e,i)&&(Te="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(Te="onCompositionStart");Te&&(Sc&&i.locale!=="ko"&&(Ao||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&Ao&&(fe=mc()):(Cn=O,rl="value"in Cn?Cn.value:Cn.textContent,Ao=!0)),oe=aa(P,Te),0<oe.length&&(Te=new yc(Te,e,null,i,O),F.push({event:Te,listeners:oe}),fe?Te.data=fe:(fe=Ec(i),fe!==null&&(Te.data=fe)))),(fe=xy?Ny(e,i):My(e,i))&&(Te=aa(P,"onBeforeInput"),0<Te.length&&(oe=new yc("onBeforeInput","beforeinput",null,i,O),F.push({event:oe,listeners:Te}),oe.data=fe)),Av(F,e,P,i,O)}rf(F,n)})}function zi(e,n,i){return{instance:e,listener:n,currentTarget:i}}function aa(e,n){for(var i=n+"Capture",l=[];e!==null;){var p=e,f=p.stateNode;if(p=p.tag,p!==5&&p!==26&&p!==27||f===null||(p=di(e,i),p!=null&&l.unshift(zi(e,p,f)),p=di(e,n),p!=null&&l.push(zi(e,p,f))),e.tag===3)return l;e=e.return}return[]}function wv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function cf(e,n,i,l,p){for(var f=n._reactName,S=[];i!==null&&i!==l;){var A=i,_=A.alternate,P=A.stateNode;if(A=A.tag,_!==null&&_===l)break;A!==5&&A!==26&&A!==27||P===null||(_=P,p?(P=di(i,f),P!=null&&S.unshift(zi(i,P,_))):p||(P=di(i,f),P!=null&&S.push(zi(i,P,_)))),i=i.return}S.length!==0&&e.push({event:n,listeners:S})}var Rv=/\r\n?/g,Iv=/\u0000|\uFFFD/g;function df(e){return(typeof e=="string"?e:""+e).replace(Rv,`
`).replace(Iv,"")}function pf(e,n){return n=df(n),df(e)===n}function ke(e,n,i,l,p,f){switch(i){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||So(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&So(e,""+l);break;case"className":cs(e,"class",l);break;case"tabIndex":cs(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":cs(e,i,l);break;case"style":dc(e,l,f);break;case"data":if(n!=="object"){cs(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||i!=="href")){e.removeAttribute(i);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(i);break}l=ps(""+l),e.setAttribute(i,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(i==="formAction"?(n!=="input"&&ke(e,n,"name",p.name,p,null),ke(e,n,"formEncType",p.formEncType,p,null),ke(e,n,"formMethod",p.formMethod,p,null),ke(e,n,"formTarget",p.formTarget,p,null)):(ke(e,n,"encType",p.encType,p,null),ke(e,n,"method",p.method,p,null),ke(e,n,"target",p.target,p,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(i);break}l=ps(""+l),e.setAttribute(i,l);break;case"onClick":l!=null&&(e.onclick=$t);break;case"onScroll":l!=null&&ve("scroll",e);break;case"onScrollEnd":l!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(i=l.__html,i!=null){if(p.children!=null)throw Error(a(60));e.innerHTML=i}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}i=ps(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,""+l):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":l===!0?e.setAttribute(i,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,l):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(i,l):e.removeAttribute(i);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(i):e.setAttribute(i,l);break;case"popover":ve("beforetoggle",e),ve("toggle",e),us(e,"popover",l);break;case"xlinkActuate":Qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Qt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Qt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Qt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Qt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":us(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=ny.get(i)||i,us(e,i,l))}}function qr(e,n,i,l,p,f){switch(i){case"style":dc(e,l,f);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(i=l.__html,i!=null){if(p.children!=null)throw Error(a(60));e.innerHTML=i}}break;case"children":typeof l=="string"?So(e,l):(typeof l=="number"||typeof l=="bigint")&&So(e,""+l);break;case"onScroll":l!=null&&ve("scroll",e);break;case"onScrollEnd":l!=null&&ve("scrollend",e);break;case"onClick":l!=null&&(e.onclick=$t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nc.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(p=i.endsWith("Capture"),n=i.slice(2,p?i.length-7:void 0),f=e[ct]||null,f=f!=null?f[i]:null,typeof f=="function"&&e.removeEventListener(n,f,p),typeof l=="function")){typeof f!="function"&&f!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(n,l,p);break e}i in e?e[i]=l:l===!0?e.setAttribute(i,""):us(e,i,l)}}}function ot(e,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var l=!1,p=!1,f;for(f in i)if(i.hasOwnProperty(f)){var S=i[f];if(S!=null)switch(f){case"src":l=!0;break;case"srcSet":p=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:ke(e,n,f,S,i,null)}}p&&ke(e,n,"srcSet",i.srcSet,i,null),l&&ke(e,n,"src",i.src,i,null);return;case"input":ve("invalid",e);var A=f=S=p=null,_=null,P=null;for(l in i)if(i.hasOwnProperty(l)){var O=i[l];if(O!=null)switch(l){case"name":p=O;break;case"type":S=O;break;case"checked":_=O;break;case"defaultChecked":P=O;break;case"value":f=O;break;case"defaultValue":A=O;break;case"children":case"dangerouslySetInnerHTML":if(O!=null)throw Error(a(137,n));break;default:ke(e,n,l,O,i,null)}}lc(e,f,A,_,P,S,p,!1);return;case"select":ve("invalid",e),l=S=f=null;for(p in i)if(i.hasOwnProperty(p)&&(A=i[p],A!=null))switch(p){case"value":f=A;break;case"defaultValue":S=A;break;case"multiple":l=A;default:ke(e,n,p,A,i,null)}n=f,i=S,e.multiple=!!l,n!=null?vo(e,!!l,n,!1):i!=null&&vo(e,!!l,i,!0);return;case"textarea":ve("invalid",e),f=p=l=null;for(S in i)if(i.hasOwnProperty(S)&&(A=i[S],A!=null))switch(S){case"value":l=A;break;case"defaultValue":p=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:ke(e,n,S,A,i,null)}uc(e,l,p,f);return;case"option":for(_ in i)if(i.hasOwnProperty(_)&&(l=i[_],l!=null))switch(_){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:ke(e,n,_,l,i,null)}return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(l=0;l<qi.length;l++)ve(qi[l],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(P in i)if(i.hasOwnProperty(P)&&(l=i[P],l!=null))switch(P){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:ke(e,n,P,l,i,null)}return;default:if(ol(n)){for(O in i)i.hasOwnProperty(O)&&(l=i[O],l!==void 0&&qr(e,n,O,l,i,void 0));return}}for(A in i)i.hasOwnProperty(A)&&(l=i[A],l!=null&&ke(e,n,A,l,i,null))}function xv(e,n,i,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var p=null,f=null,S=null,A=null,_=null,P=null,O=null;for(L in i){var F=i[L];if(i.hasOwnProperty(L)&&F!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":_=F;default:l.hasOwnProperty(L)||ke(e,n,L,null,l,F)}}for(var D in l){var L=l[D];if(F=i[D],l.hasOwnProperty(D)&&(L!=null||F!=null))switch(D){case"type":f=L;break;case"name":p=L;break;case"checked":P=L;break;case"defaultChecked":O=L;break;case"value":S=L;break;case"defaultValue":A=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(a(137,n));break;default:L!==F&&ke(e,n,D,L,l,F)}}tl(e,S,A,_,P,O,f,p);return;case"select":L=S=A=D=null;for(f in i)if(_=i[f],i.hasOwnProperty(f)&&_!=null)switch(f){case"value":break;case"multiple":L=_;default:l.hasOwnProperty(f)||ke(e,n,f,null,l,_)}for(p in l)if(f=l[p],_=i[p],l.hasOwnProperty(p)&&(f!=null||_!=null))switch(p){case"value":D=f;break;case"defaultValue":A=f;break;case"multiple":S=f;default:f!==_&&ke(e,n,p,f,l,_)}n=A,i=S,l=L,D!=null?vo(e,!!i,D,!1):!!l!=!!i&&(n!=null?vo(e,!!i,n,!0):vo(e,!!i,i?[]:"",!1));return;case"textarea":L=D=null;for(A in i)if(p=i[A],i.hasOwnProperty(A)&&p!=null&&!l.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:ke(e,n,A,null,l,p)}for(S in l)if(p=l[S],f=i[S],l.hasOwnProperty(S)&&(p!=null||f!=null))switch(S){case"value":D=p;break;case"defaultValue":L=p;break;case"children":break;case"dangerouslySetInnerHTML":if(p!=null)throw Error(a(91));break;default:p!==f&&ke(e,n,S,p,l,f)}rc(e,D,L);return;case"option":for(var te in i)if(D=i[te],i.hasOwnProperty(te)&&D!=null&&!l.hasOwnProperty(te))switch(te){case"selected":e.selected=!1;break;default:ke(e,n,te,null,l,D)}for(_ in l)if(D=l[_],L=i[_],l.hasOwnProperty(_)&&D!==L&&(D!=null||L!=null))switch(_){case"selected":e.selected=D&&typeof D!="function"&&typeof D!="symbol";break;default:ke(e,n,_,D,l,L)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ae in i)D=i[ae],i.hasOwnProperty(ae)&&D!=null&&!l.hasOwnProperty(ae)&&ke(e,n,ae,null,l,D);for(P in l)if(D=l[P],L=i[P],l.hasOwnProperty(P)&&D!==L&&(D!=null||L!=null))switch(P){case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(a(137,n));break;default:ke(e,n,P,D,l,L)}return;default:if(ol(n)){for(var Ue in i)D=i[Ue],i.hasOwnProperty(Ue)&&D!==void 0&&!l.hasOwnProperty(Ue)&&qr(e,n,Ue,void 0,l,D);for(O in l)D=l[O],L=i[O],!l.hasOwnProperty(O)||D===L||D===void 0&&L===void 0||qr(e,n,O,D,l,L);return}}for(var x in i)D=i[x],i.hasOwnProperty(x)&&D!=null&&!l.hasOwnProperty(x)&&ke(e,n,x,null,l,D);for(F in l)D=l[F],L=i[F],!l.hasOwnProperty(F)||D===L||D==null&&L==null||ke(e,n,F,D,l,L)}function ff(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,i=performance.getEntriesByType("resource"),l=0;l<i.length;l++){var p=i[l],f=p.transferSize,S=p.initiatorType,A=p.duration;if(f&&A&&ff(S)){for(S=0,A=p.responseEnd,l+=1;l<i.length;l++){var _=i[l],P=_.startTime;if(P>A)break;var O=_.transferSize,F=_.initiatorType;O&&ff(F)&&(_=_.responseEnd,S+=O*(_<A?1:(A-P)/(_-P)))}if(--l,n+=8*(f+S)/(p.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zr=null,Yr=null;function la(e){return e.nodeType===9?e:e.ownerDocument}function mf(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hf(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Jr(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kr=null;function Mv(){var e=window.event;return e&&e.type==="popstate"?e===Kr?!1:(Kr=e,!0):(Kr=null,!1)}var gf=typeof setTimeout=="function"?setTimeout:void 0,Pv=typeof clearTimeout=="function"?clearTimeout:void 0,yf=typeof Promise=="function"?Promise:void 0,Dv=typeof queueMicrotask=="function"?queueMicrotask:typeof yf<"u"?function(e){return yf.resolve(null).then(e).catch(kv)}:gf;function kv(e){setTimeout(function(){throw e})}function Gn(e){return e==="head"}function vf(e,n){var i=n,l=0;do{var p=i.nextSibling;if(e.removeChild(i),p&&p.nodeType===8)if(i=p.data,i==="/$"||i==="/&"){if(l===0){e.removeChild(p),Qo(n);return}l--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")l++;else if(i==="html")Yi(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,Yi(i);for(var f=i.firstChild;f;){var S=f.nextSibling,A=f.nodeName;f[ui]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||i.removeChild(f),f=S}}else i==="body"&&Yi(e.ownerDocument.body);i=p}while(i);Qo(n)}function Sf(e,n){var i=e;e=0;do{var l=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),l&&l.nodeType===8)if(i=l.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=l}while(i)}function Xr(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Xr(i),ja(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function Uv(e,n,i,l){for(;e.nodeType===1;){var p=i;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ui])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==p.rel||e.getAttribute("href")!==(p.href==null||p.href===""?null:p.href)||e.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin)||e.getAttribute("title")!==(p.title==null?null:p.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(p.src==null?null:p.src)||e.getAttribute("type")!==(p.type==null?null:p.type)||e.getAttribute("crossorigin")!==(p.crossOrigin==null?null:p.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=p.name==null?null:""+p.name;if(p.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=Ut(e.nextSibling),e===null)break}return null}function Lv(e,n,i){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Ut(e.nextSibling),e===null))return null;return e}function Cf(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ut(e.nextSibling),e===null))return null;return e}function Wr(e){return e.data==="$?"||e.data==="$~"}function Qr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Gv(e,n){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||i.readyState!=="loading")n();else{var l=function(){n(),i.removeEventListener("DOMContentLoaded",l)};i.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ut(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var $r=null;function Tf(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(n===0)return Ut(e.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}e=e.nextSibling}return null}function Af(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return e;n--}else i!=="/$"&&i!=="/&"||n++}e=e.previousSibling}return null}function Ef(e,n,i){switch(n=la(i),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Yi(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ja(e)}var Lt=new Map,bf=new Set;function ra(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var mn=Y.d;Y.d={f:Ov,r:Bv,D:Hv,C:Fv,L:Vv,m:qv,X:Yv,S:zv,M:Jv};function Ov(){var e=mn.f(),n=js();return e||n}function Bv(e){var n=ho(e);n!==null&&n.tag===5&&n.type==="form"?Hd(n):mn.r(e)}var Ko=typeof document>"u"?null:document;function _f(e,n,i){var l=Ko;if(l&&typeof n=="string"&&n){var p=It(n);p='link[rel="'+e+'"][href="'+p+'"]',typeof i=="string"&&(p+='[crossorigin="'+i+'"]'),bf.has(p)||(bf.add(p),e={rel:e,crossOrigin:i,href:n},l.querySelector(p)===null&&(n=l.createElement("link"),ot(n,"link",e),Qe(n),l.head.appendChild(n)))}}function Hv(e){mn.D(e),_f("dns-prefetch",e,null)}function Fv(e,n){mn.C(e,n),_f("preconnect",e,n)}function Vv(e,n,i){mn.L(e,n,i);var l=Ko;if(l&&e&&n){var p='link[rel="preload"][as="'+It(n)+'"]';n==="image"&&i&&i.imageSrcSet?(p+='[imagesrcset="'+It(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(p+='[imagesizes="'+It(i.imageSizes)+'"]')):p+='[href="'+It(e)+'"]';var f=p;switch(n){case"style":f=Xo(e);break;case"script":f=Wo(e)}Lt.has(f)||(e=C({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:e,as:n},i),Lt.set(f,e),l.querySelector(p)!==null||n==="style"&&l.querySelector(Ji(f))||n==="script"&&l.querySelector(Ki(f))||(n=l.createElement("link"),ot(n,"link",e),Qe(n),l.head.appendChild(n)))}}function qv(e,n){mn.m(e,n);var i=Ko;if(i&&e){var l=n&&typeof n.as=="string"?n.as:"script",p='link[rel="modulepreload"][as="'+It(l)+'"][href="'+It(e)+'"]',f=p;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Wo(e)}if(!Lt.has(f)&&(e=C({rel:"modulepreload",href:e},n),Lt.set(f,e),i.querySelector(p)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Ki(f)))return}l=i.createElement("link"),ot(l,"link",e),Qe(l),i.head.appendChild(l)}}}function zv(e,n,i){mn.S(e,n,i);var l=Ko;if(l&&e){var p=go(l).hoistableStyles,f=Xo(e);n=n||"default";var S=p.get(f);if(!S){var A={loading:0,preload:null};if(S=l.querySelector(Ji(f)))A.loading=5;else{e=C({rel:"stylesheet",href:e,"data-precedence":n},i),(i=Lt.get(f))&&Zr(e,i);var _=S=l.createElement("link");Qe(_),ot(_,"link",e),_._p=new Promise(function(P,O){_.onload=P,_.onerror=O}),_.addEventListener("load",function(){A.loading|=1}),_.addEventListener("error",function(){A.loading|=2}),A.loading|=4,ua(S,n,l)}S={type:"stylesheet",instance:S,count:1,state:A},p.set(f,S)}}}function Yv(e,n){mn.X(e,n);var i=Ko;if(i&&e){var l=go(i).hoistableScripts,p=Wo(e),f=l.get(p);f||(f=i.querySelector(Ki(p)),f||(e=C({src:e,async:!0},n),(n=Lt.get(p))&&jr(e,n),f=i.createElement("script"),Qe(f),ot(f,"link",e),i.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(p,f))}}function Jv(e,n){mn.M(e,n);var i=Ko;if(i&&e){var l=go(i).hoistableScripts,p=Wo(e),f=l.get(p);f||(f=i.querySelector(Ki(p)),f||(e=C({src:e,async:!0,type:"module"},n),(n=Lt.get(p))&&jr(e,n),f=i.createElement("script"),Qe(f),ot(f,"link",e),i.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},l.set(p,f))}}function wf(e,n,i,l){var p=(p=ge.current)?ra(p):null;if(!p)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(n=Xo(i.href),i=go(p).hoistableStyles,l=i.get(n),l||(l={type:"style",instance:null,count:0,state:null},i.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=Xo(i.href);var f=go(p).hoistableStyles,S=f.get(e);if(S||(p=p.ownerDocument||p,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=p.querySelector(Ji(e)))&&!f._p&&(S.instance=f,S.state.loading=5),Lt.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Lt.set(e,i),f||Kv(p,e,i,S.state))),n&&l===null)throw Error(a(528,""));return S}if(n&&l!==null)throw Error(a(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Wo(i),i=go(p).hoistableScripts,l=i.get(n),l||(l={type:"script",instance:null,count:0,state:null},i.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Xo(e){return'href="'+It(e)+'"'}function Ji(e){return'link[rel="stylesheet"]['+e+"]"}function Rf(e){return C({},e,{"data-precedence":e.precedence,precedence:null})}function Kv(e,n,i,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),ot(n,"link",i),Qe(n),e.head.appendChild(n))}function Wo(e){return'[src="'+It(e)+'"]'}function Ki(e){return"script[async]"+e}function If(e,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+It(i.href)+'"]');if(l)return n.instance=l,Qe(l),l;var p=C({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),Qe(l),ot(l,"style",p),ua(l,i.precedence,e),n.instance=l;case"stylesheet":p=Xo(i.href);var f=e.querySelector(Ji(p));if(f)return n.state.loading|=4,n.instance=f,Qe(f),f;l=Rf(i),(p=Lt.get(p))&&Zr(l,p),f=(e.ownerDocument||e).createElement("link"),Qe(f);var S=f;return S._p=new Promise(function(A,_){S.onload=A,S.onerror=_}),ot(f,"link",l),n.state.loading|=4,ua(f,i.precedence,e),n.instance=f;case"script":return f=Wo(i.src),(p=e.querySelector(Ki(f)))?(n.instance=p,Qe(p),p):(l=i,(p=Lt.get(f))&&(l=C({},i),jr(l,p)),e=e.ownerDocument||e,p=e.createElement("script"),Qe(p),ot(p,"link",l),e.head.appendChild(p),n.instance=p);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,ua(l,i.precedence,e));return n.instance}function ua(e,n,i){for(var l=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),p=l.length?l[l.length-1]:null,f=p,S=0;S<l.length;S++){var A=l[S];if(A.dataset.precedence===n)f=A;else if(f!==p)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(e,n.firstChild))}function Zr(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function jr(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ca=null;function xf(e,n,i){if(ca===null){var l=new Map,p=ca=new Map;p.set(i,l)}else p=ca,l=p.get(i),l||(l=new Map,p.set(i,l));if(l.has(e))return l;for(l.set(e,null),i=i.getElementsByTagName(e),p=0;p<i.length;p++){var f=i[p];if(!(f[ui]||f[je]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var A=l.get(S);A?A.push(f):l.set(S,[f])}}return l}function Nf(e,n,i){e=e.ownerDocument||e,e.head.insertBefore(i,n==="title"?e.querySelector("head > title"):null)}function Xv(e,n,i){if(i===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Mf(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Wv(e,n,i,l){if(i.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var p=Xo(l.href),f=n.querySelector(Ji(p));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=da.bind(e),n.then(e,e)),i.state.loading|=4,i.instance=f,Qe(f);return}f=n.ownerDocument||n,l=Rf(l),(p=Lt.get(p))&&Zr(l,p),f=f.createElement("link"),Qe(f);var S=f;S._p=new Promise(function(A,_){S.onload=A,S.onerror=_}),ot(f,"link",l),i.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=da.bind(e),n.addEventListener("load",i),n.addEventListener("error",i))}}var eu=0;function Qv(e,n){return e.stylesheets&&e.count===0&&fa(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var l=setTimeout(function(){if(e.stylesheets&&fa(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&eu===0&&(eu=62500*Nv());var p=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&fa(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>eu?50:800)+n);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(p)}}:null}function da(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fa(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var pa=null;function fa(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pa=new Map,n.forEach($v,e),pa=null,da.call(e))}function $v(e,n){if(!(n.state.loading&4)){var i=pa.get(e);if(i)var l=i.get(null);else{i=new Map,pa.set(e,i);for(var p=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<p.length;f++){var S=p[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(i.set(S.dataset.precedence,S),l=S)}l&&i.set(null,l)}p=n.instance,S=p.getAttribute("data-precedence"),f=i.get(S)||l,f===l&&i.set(null,p),i.set(S,p),this.count++,l=da.bind(this),p.addEventListener("load",l),p.addEventListener("error",l),f?f.parentNode.insertBefore(p,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(p,e.firstChild)),n.state.loading|=4}}var Xi={$$typeof:B,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function Zv(e,n,i,l,p,f,S,A,_){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Wa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wa(0),this.hiddenUpdates=Wa(null),this.identifierPrefix=l,this.onUncaughtError=p,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=_,this.incompleteTransitions=new Map}function Pf(e,n,i,l,p,f,S,A,_,P,O,F){return e=new Zv(e,n,i,S,_,P,O,F,A),n=1,f===!0&&(n|=24),f=Tt(3,null,null,n),e.current=f,f.stateNode=e,n=Dl(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:l,isDehydrated:i,cache:n},Gl(f),e}function Df(e){return e?(e=wo,e):wo}function kf(e,n,i,l,p,f){p=Df(p),l.context===null?l.context=p:l.pendingContext=p,l=wn(n),l.payload={element:i},f=f===void 0?null:f,f!==null&&(l.callback=f),i=Rn(e,l,n),i!==null&&(gt(i,e,n),wi(i,e,n))}function Uf(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function tu(e,n){Uf(e,n),(e=e.alternate)&&Uf(e,n)}function Lf(e){if(e.tag===13||e.tag===31){var n=$n(e,67108864);n!==null&&gt(n,e,67108864),tu(e,67108864)}}function Gf(e){if(e.tag===13||e.tag===31){var n=wt();n=Qa(n);var i=$n(e,n);i!==null&&gt(i,e,n),tu(e,n)}}var ma=!0;function jv(e,n,i,l){var p=G.T;G.T=null;var f=Y.p;try{Y.p=2,nu(e,n,i,l)}finally{Y.p=f,G.T=p}}function e0(e,n,i,l){var p=G.T;G.T=null;var f=Y.p;try{Y.p=8,nu(e,n,i,l)}finally{Y.p=f,G.T=p}}function nu(e,n,i,l){if(ma){var p=ou(l);if(p===null)Vr(e,n,l,ha,i),Bf(e,l);else if(n0(p,e,n,i,l))l.stopPropagation();else if(Bf(e,l),n&4&&-1<t0.indexOf(e)){for(;p!==null;){var f=ho(p);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Jn(f.pendingLanes);if(S!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;S;){var _=1<<31-St(S);A.entanglements[1]|=_,S&=~_}Xt(f),(we&6)===0&&($s=yt()+500,Vi(0))}}break;case 31:case 13:A=$n(f,2),A!==null&&gt(A,f,2),js(),tu(f,2)}if(f=ou(l),f===null&&Vr(e,n,l,ha,i),f===p)break;p=f}p!==null&&l.stopPropagation()}else Vr(e,n,l,null,i)}}function ou(e){return e=sl(e),iu(e)}var ha=null;function iu(e){if(ha=null,e=mo(e),e!==null){var n=d(e);if(n===null)e=null;else{var i=n.tag;if(i===13){if(e=m(n),e!==null)return e;e=null}else if(i===31){if(e=g(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ha=e,null}function Of(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Hg()){case Yu:return 2;case Ju:return 8;case is:case Fg:return 32;case Ku:return 268435456;default:return 32}default:return 32}}var su=!1,On=null,Bn=null,Hn=null,Wi=new Map,Qi=new Map,Fn=[],t0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bf(e,n){switch(e){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":Hn=null;break;case"pointerover":case"pointerout":Wi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Qi.delete(n.pointerId)}}function $i(e,n,i,l,p,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:i,eventSystemFlags:l,nativeEvent:f,targetContainers:[p]},n!==null&&(n=ho(n),n!==null&&Lf(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,p!==null&&n.indexOf(p)===-1&&n.push(p),e)}function n0(e,n,i,l,p){switch(n){case"focusin":return On=$i(On,e,n,i,l,p),!0;case"dragenter":return Bn=$i(Bn,e,n,i,l,p),!0;case"mouseover":return Hn=$i(Hn,e,n,i,l,p),!0;case"pointerover":var f=p.pointerId;return Wi.set(f,$i(Wi.get(f)||null,e,n,i,l,p)),!0;case"gotpointercapture":return f=p.pointerId,Qi.set(f,$i(Qi.get(f)||null,e,n,i,l,p)),!0}return!1}function Hf(e){var n=mo(e.target);if(n!==null){var i=d(n);if(i!==null){if(n=i.tag,n===13){if(n=m(i),n!==null){e.blockedOn=n,ju(e.priority,function(){Gf(i)});return}}else if(n===31){if(n=g(i),n!==null){e.blockedOn=n,ju(e.priority,function(){Gf(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ga(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=ou(e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);il=l,i.target.dispatchEvent(l),il=null}else return n=ho(i),n!==null&&Lf(n),e.blockedOn=i,!1;n.shift()}return!0}function Ff(e,n,i){ga(e)&&i.delete(n)}function o0(){su=!1,On!==null&&ga(On)&&(On=null),Bn!==null&&ga(Bn)&&(Bn=null),Hn!==null&&ga(Hn)&&(Hn=null),Wi.forEach(Ff),Qi.forEach(Ff)}function ya(e,n){e.blockedOn===n&&(e.blockedOn=null,su||(su=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,o0)))}var va=null;function Vf(e){va!==e&&(va=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){va===e&&(va=null);for(var n=0;n<e.length;n+=3){var i=e[n],l=e[n+1],p=e[n+2];if(typeof l!="function"){if(iu(l||i)===null)continue;break}var f=ho(i);f!==null&&(e.splice(n,3),n-=3,or(f,{pending:!0,data:p,method:i.method,action:l},l,p))}}))}function Qo(e){function n(_){return ya(_,e)}On!==null&&ya(On,e),Bn!==null&&ya(Bn,e),Hn!==null&&ya(Hn,e),Wi.forEach(n),Qi.forEach(n);for(var i=0;i<Fn.length;i++){var l=Fn[i];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Fn.length&&(i=Fn[0],i.blockedOn===null);)Hf(i),i.blockedOn===null&&Fn.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(l=0;l<i.length;l+=3){var p=i[l],f=i[l+1],S=p[ct]||null;if(typeof f=="function")S||Vf(i);else if(S){var A=null;if(f&&f.hasAttribute("formAction")){if(p=f,S=f[ct]||null)A=S.formAction;else if(iu(p)!==null)continue}else A=S.action;typeof A=="function"?i[l+1]=A:(i.splice(l,3),l-=3),Vf(i)}}}function qf(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(S){return p=S})},focusReset:"manual",scroll:"manual"})}function n(){p!==null&&(p(),p=null),l||setTimeout(i,20)}function i(){if(!l&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,p=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),p!==null&&(p(),p=null)}}}function au(e){this._internalRoot=e}Sa.prototype.render=au.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var i=n.current,l=wt();kf(i,l,e,n,null,null)},Sa.prototype.unmount=au.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;kf(e.current,2,null,e,null,null),js(),n[fo]=null}};function Sa(e){this._internalRoot=e}Sa.prototype.unstable_scheduleHydration=function(e){if(e){var n=Zu();e={blockedOn:null,target:e,priority:n};for(var i=0;i<Fn.length&&n!==0&&n<Fn[i].priority;i++);Fn.splice(i,0,e),i===0&&Hf(e)}};var zf=t.version;if(zf!=="19.2.3")throw Error(a(527,zf,"19.2.3"));Y.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=h(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var i0={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ca.isDisabled&&Ca.supportsFiber)try{ai=Ca.inject(i0),vt=Ca}catch{}}return ji.createRoot=function(e,n){if(!r(e))throw Error(a(299));var i=!1,l="",p=Qd,f=$d,S=Zd;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(p=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Pf(e,1,!1,null,null,i,l,null,p,f,S,qf),e[fo]=n.current,Fr(e),new au(n)},ji.hydrateRoot=function(e,n,i){if(!r(e))throw Error(a(299));var l=!1,p="",f=Qd,S=$d,A=Zd,_=null;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(p=i.identifierPrefix),i.onUncaughtError!==void 0&&(f=i.onUncaughtError),i.onCaughtError!==void 0&&(S=i.onCaughtError),i.onRecoverableError!==void 0&&(A=i.onRecoverableError),i.formState!==void 0&&(_=i.formState)),n=Pf(e,1,!0,n,i??null,l,p,_,f,S,A,qf),n.context=Df(null),i=n.current,l=wt(),l=Qa(l),p=wn(l),p.callback=null,Rn(i,p,l),i=l,n.current.lanes=i,ri(n,i),Xt(n),e[fo]=n.current,Fr(e),new Sa(n)},ji.version="19.2.3",ji}var em;function m0(){if(em)return uu.exports;em=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),uu.exports=f0(),uu.exports}var h0=m0();const g0=Oh(h0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v0=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,s,a)=>a?a.toUpperCase():s.toLowerCase()),tm=o=>{const t=v0(o);return t.charAt(0).toUpperCase()+t.slice(1)},Hh=(...o)=>o.filter((t,s,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===s).join(" ").trim(),S0=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var C0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=Se.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:r="",children:d,iconNode:m,...g},y)=>Se.createElement("svg",{ref:y,...C0,width:t,height:t,stroke:o,strokeWidth:a?Number(s)*24/Number(t):s,className:Hh("lucide",r),...!d&&!S0(g)&&{"aria-hidden":"true"},...g},[...m.map(([h,v])=>Se.createElement(h,v)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=(o,t)=>{const s=Se.forwardRef(({className:a,...r},d)=>Se.createElement(T0,{ref:d,iconNode:t,className:Hh(`lucide-${y0(tm(o))}`,`lucide-${o}`,a),...r}));return s.displayName=tm(o),s};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],E0=Ie("arrow-up",A0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],_0=Ie("book",b0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],R0=Ie("bot",w0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],hu=Ie("check",I0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],nm=Ie("chevron-right",x0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Fh=Ie("circle-question-mark",N0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Vh=Ie("clock",M0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],D0=Ie("copy",P0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],gu=Ie("external-link",k0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],L0=Ie("house",U0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],qh=Ie("link",G0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],B0=Ie("loader-circle",O0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],om=Ie("menu",H0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],V0=Ie("play",F0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],z0=Ie("quote",q0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],J0=Ie("refresh-cw",Y0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],Ta=Ie("search",K0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],W0=Ie("send",X0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],$0=Ie("settings",Q0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],j0=Ie("shield-check",Z0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],tS=Ie("smartphone",eS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],yu=Ie("sparkles",nS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],iS=Ie("square-check-big",oS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],aS=Ie("square",sS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],rS=Ie("terminal",lS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],cS=Ie("triangle-alert",uS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],pS=Ie("user",dS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fS=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],im=Ie("wrench",fS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ra=Ie("x",mS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hS=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],gS=Ie("zap",hS),Wt={getting_started:{title:"Getting Started",icon:_0,tags:["welcome","overview","stack"],content:`
# Welcome to BookHere v3.0.1

Thank you for choosing BookHere, the premium property rental mobile application. This documentation will guide you through setting up your own marketplace.

### 📦 What's in the Box?
- **Mobile App Source:** Full React Native (Expo) project.
- **Homey Connector:** A custom WordPress plugin to bridge your app with the Homey Theme.
- **Documentation:** Comprehensive guides for every step of the journey.

### 🛠 Technology Stack
- **Framework:** React Native 0.79.5 (Expo SDK 53)
- **Language:** TypeScript 5.8.3
- **UI:** React Native Paper & Custom Components
- **Navigation:** React Navigation 6.x

### Key Features
- **Real-time Bookings:** Instant synchronization with WordPress backend.
- **Multi-Vendor Support:** Host profiles, property management, and dashboard.
- **Payment Integration:** Stripe-ready checkout with support for deposits.
- **Advanced Search:** Filter by date, guest count, and custom taxonomies.
    `},features:{title:"Features",icon:gS,tags:["capabilities","functionality","highlights"],content:`
# BookHere Mobile App - Complete Features Guide

Comprehensive documentation of all features, functions, and capabilities in the BookHere property rental mobile application.

## Table of Contents

1. [App Overview](#app-overview)
2. [User Roles & Permissions](#user-roles--permissions)
3. [Authentication & Security](#authentication--security)
4. [Property Browsing & Discovery](#property-browsing--discovery)
5. [Booking & Reservations](#booking--reservations)
6. [Payment System](#payment-system)
7. [Messaging & Communication](#messaging--communication)
8. [Property Management (Hosts)](#property-management-hosts)
9. [Financial Management](#financial-management)
10. [User Profile & Settings](#user-profile--settings)
11. [Favorites & Wishlists](#favorites--wishlists)
12. [Reviews & Ratings](#reviews--ratings)
13. [Maps & Location](#maps--location)
14. [Notifications](#notifications)
15. [Multi-Language Support](#multi-language-support)
16. [Dark Mode](#dark-mode)
17. [Technical Features](#technical-features)

---

## App Overview

BookHere is a full-featured peer-to-peer property rental mobile application built with React Native and Expo. It connects property owners (hosts) with travelers (renters) looking for accommodations worldwide.

**Platform Support:**
- iOS 13.0 or later
- Android 6.0 or later

**Backend Integration:**
- WordPress with Homey theme
- RESTful API endpoints
- JWT authentication

**Current Version:** 3.0.1

---

## User Roles & Permissions

### 1. Guest User (Unauthenticated)

**Capabilities:**
- ✅ Browse all property listings
- ✅ View property details
- ✅ Search and filter properties
- ✅ View property location on map
- ✅ Read reviews and ratings
- ✅ View trending destinations
- ❌ Cannot book properties (must login)
- ❌ Cannot message hosts
- ❌ Cannot save favorites

**Access Level:** Read-only access to public content

### 2. Renter (homey_renter)

**All Guest capabilities plus:**
- ✅ Create bookings and reservations
- ✅ Instant booking (no host approval needed)
- ✅ Request to book (requires host approval)
- ✅ Make payments via multiple methods
- ✅ View and manage reservations
- ✅ Access invoices and payment history
- ✅ Message hosts and property owners
- ✅ Save favorite properties
- ✅ Leave reviews and ratings
- ✅ Manage user profile
- ✅ Receive push notifications

**Access Level:** Full renter functionality

### 3. Host (homey_host)

**All Renter capabilities plus:**
- ✅ Add new property listings
- ✅ Manage existing listings
- ✅ Edit listing details
- ✅ Set pricing and availability
- ✅ Approve or decline booking requests
- ✅ View earnings dashboard
- ✅ Request payouts
- ✅ Manage reservations
- ✅ Upload property photos and videos
- ✅ Set house rules and policies
- ✅ View host performance metrics

**Access Level:** Full platform access

### 4. Administrator (administrator)

**All Host capabilities plus:**
- ✅ System-wide management
- ✅ Access to all features

**Access Level:** Complete system access

---

## Authentication & Security

### Authentication Methods

#### 1. Email & Password Authentication

**Location:** \`Login\` and \`SignUp\` screens

**Signup Process:**
1. User enters:
   - Email address
   - Password (minimum 6 characters)
   - Confirm password
   - Role selection (Renter or Host)
2. System validates email format
3. Password strength validation
4. Role selection stored
5. Account created in database
6. JWT token generated and stored securely
7. User redirected to home screen

**Login Process:**
1. User enters email and password
2. Credentials validated against database
3. JWT token generated on success
4. Token stored in encrypted SecureStore
5. User data cached locally
6. Navigation to main app

**Features:**
- Show/hide password toggle
- "Remember me" functionality
- Input validation with error messages
- Secure password hashing (backend)

**API Endpoints:**
- \`POST /wp-json/jwt-auth/v1/token/register\` - Register new user
- \`POST /wp-json/jwt-auth/v1/token\` - Login with credentials

#### 2. Google Sign-In

**Location:** Login and Signup screens

**Process:**
1. User taps "Sign in with Google" button
2. Google OAuth dialog appears
3. User selects Google account
4. Authorization granted
5. System receives:
   - Google ID token
   - User email
   - User name
   - Profile photo URL
6. Auto-creates account if new user
7. Logs in existing user
8. JWT token stored securely

**Features:**
- One-tap authentication
- Automatic account creation
- Profile photo sync
- Seamless integration

**Configuration:**
- iOS Client ID: From \`.env\` file
- Web Client ID: From \`.env\` file
- Offline access support

**Implementation:**
- Uses \`@react-native-google-signin/google-signin\` package
- OAuth 2.0 protocol
- Secure token exchange

#### 3. OTP (One-Time Password) Verification

**Location:** OTP screens in auth flow

**Two-Step Process:**

**Step 1: Phone Number Entry**
- User enters mobile phone number
- Country code selection
- Phone format validation
- "Send OTP" button

**Step 2: OTP Verification**
- 6-digit OTP code sent via SMS
- User enters received code
- Code verified against backend
- Account verified on success
- Option to resend OTP (60s cooldown)

**API Endpoints:**
- \`POST /wp-json/mobile-otp/v1/send-otp\` - Send OTP to phone
- \`POST /wp-json/mobile-otp/v1/verify-otp\` - Verify OTP code

**Features:**
- SMS-based verification
- Resend OTP functionality
- Timer countdown
- Auto-fill OTP (iOS)

#### 4. Biometric Authentication

**Location:** Login screen (after first login)

**Supported Methods:**
- Face ID (iOS)
- Touch ID (iOS)
- Fingerprint scanner (Android)
- Device PIN (fallback)

**Process:**
1. User enables biometrics in settings
2. On next login, biometric prompt appears
3. User authenticates with face/fingerprint
4. Stored credentials retrieved from SecureStore
5. Auto-login without entering password

**Features:**
- Device-specific security
- No password storage on device
- Fallback to PIN/pattern
- Optional feature (can be disabled)

**Implementation:**
- Uses \`expo-local-authentication\` package
- Hardware security module integration
- Encrypted credential storage

### Security Features

**Data Encryption:**
- All API communication over HTTPS/TLS
- JWT tokens encrypted in SecureStore
- AES-256 encryption for local data
- No plain-text password storage

**Session Management:**
- JWT token expiration handling
- Automatic token refresh
- Logout on token invalidation
- Session timeout after inactivity

**API Security:**
- Bearer token authorization
- User ID verification
- Role-based access control
- Request rate limiting

**Secure Storage:**
- Expo SecureStore for sensitive data
- iOS: Keychain integration
- Android: EncryptedSharedPreferences
- Data cleared on logout

---

## Property Browsing & Discovery

### Home Screen

**Location:** Main tab → Home

**Components:**

1. **Search Bar**
   - Location search (city, area, address)
   - Date picker (check-in/check-out)
   - Guest counter
   - Search button

2. **Featured Banners**
   - Promotional slides
   - Special offers
   - Featured destinations
   - Auto-scrolling carousel

3. **Property Categories**
   - Apartments
   - Houses
   - Villas
   - Hotels
   - Unique stays
   - Quick filter buttons

4. **Trending Listings**
   - Popular properties
   - Recently viewed
   - Horizontal scrollable list
   - Quick preview cards

5. **City Categories**
   - Browse by location
   - Popular cities
   - Destination categories
   - Image-based navigation

6. **Testimonials**
   - User reviews carousel
   - 5-star ratings
   - Guest experiences
   - Auto-rotating display

7. **Partner Listings**
   - Verified properties
   - Premium listings
   - Special partnerships
   - Featured hosts

**API Endpoints:**
- \`GET /wp-json/jwt-auth/v1/get-all-listings\` - Fetch all listings
- \`GET /wp-json/jwt-auth/v1/listing/get_trending\` - Get trending properties
- \`GET /wp-json/jwt-auth/v1/categories\` - Fetch property categories

### Search & Filters

**Location:** Search Result screen

**Search Capabilities:**

1. **Location Search**
   - City/area name
   - Address search
   - GPS-based "Near me"
   - Map-based search

2. **Date Selection**
   - Check-in date
   - Check-out date
   - Calendar picker
   - Date range validation
   - Minimum stay enforcement

3. **Guest Selection**
   - Adults count
   - Children count
   - Infants count
   - Pet allowance

4. **Price Filter**
   - Minimum price slider
   - Maximum price slider
   - Currency display
   - Price per night

5. **Property Type**
   - Apartment
   - House
   - Villa
   - Hotel
   - Unique stays
   - Multiple selection

6. **Amenities Filter**
   - WiFi
   - Kitchen
   - Parking
   - Pool
   - Air conditioning
   - Washer/dryer
   - Gym
   - Hot tub
   - Multiple selection

7. **Instant Book**
   - Filter properties with instant booking
   - Skip approval process
   - Immediate confirmation

8. **Rating Filter**
   - 4+ stars
   - 4.5+ stars
   - 5 stars only

9. **Accommodation**
   - Bedrooms count
   - Bathrooms count
   - Beds count

**View Options:**
- List view
- Grid view
- Map view
- Gallery view

**Sorting:**
- Price: Low to High
- Price: High to Low
- Rating: High to Low
- Newest first
- Most popular

**API Endpoints:**
- \`POST /wp-json/jwt-auth/v1/search/search_availability\` - Search with filters
- \`POST /wp-json/jwt-auth/v1/filter-listings\` - Apply filters
- \`GET /wp-json/jwt-auth/v1/search/homey_half_map\` - Map search

### Property Detail Screen

**Location:** Tap on any property card

**Sections:**

1. **Property Header**
   - Property name
   - Location address
   - Rating stars
   - Number of reviews
   - Price per night
   - Favorite button

2. **Image Gallery**
   - Multiple property photos
   - Swipeable carousel
   - Full-screen view
   - Zoom capability
   - Photo count indicator

3. **Video Section** (if available)
   - Property video tour
   - Video player controls
   - Full-screen option

4. **Quick Stats**
   - Number of guests
   - Number of bedrooms
   - Number of bathrooms
   - Number of beds
   - Property size (sq ft)

5. **Property Type Card**
   - Type (Apartment, House, etc.)
   - Listing type (Entire place, Private room, Shared room)
   - Property category

6. **About Section**
   - Detailed description
   - Property highlights
   - Neighborhood information
   - House rules preview
   - "Read more" expansion

7. **Amenities Grid**
   - Categorized amenities
   - Icons and labels
   - "Show all" button
   - Popular amenities first

8. **Accommodations**
   - Bedroom details
   - Bed configurations
   - Bathroom details
   - Maximum capacity

9. **Availability Calendar**
   - Monthly calendar view
   - Available/unavailable dates
   - Price variations
   - Minimum stay indicator
   - Booking date selection

10. **Pricing Details**
    - Base price per night
    - Cleaning fee
    - Service fee
    - Taxes
    - Total calculation
    - Discounts (if any)

11. **Custom Period Pricing** (if applicable)
    - Seasonal rates
    - Holiday pricing
    - Weekly/monthly discounts

12. **Policies**
    - Cancellation policy
    - Check-in time
    - Check-out time
    - House rules
    - Additional rules

13. **Location Map**
    - Interactive map
    - Property marker
    - Nearby attractions
    - Public transport
    - "Get directions" button

14. **Reviews Section**
    - Overall rating
    - Category ratings:
      - Cleanliness
      - Accuracy
      - Communication
      - Location
      - Check-in
      - Value
    - Individual reviews
    - Guest photos
    - Response from host
    - "Show all reviews" button

15. **Host Information**
    - Host name
    - Host photo
    - Join date
    - Verification badges
    - Response time
    - Response rate
    - Host languages
    - "Contact host" button

16. **Terms and Rules**
    - Terms of service
    - Booking conditions
    - Liability disclaimer

**Sticky Footer:**
- Price per night
- "Book Now" button
- "Request to Book" button
- "Contact Host" button
- Always visible during scroll

**API Endpoints:**
- \`GET /wp-json/jwt-auth/v1/listing/list_detail?list_id=\${id}\` - Get property details
- \`GET /wp-json/jwt-auth/v1/listing/get_reviews?listing_id=\${id}\` - Get reviews
- \`POST /wp-json/jwt-auth/v1/listing/favorite\` - Add to favorites

---

## Booking & Reservations

### Booking Types

#### 1. Instant Booking

**What it is:**
- Book immediately without host approval
- Instant confirmation
- Faster booking process

**How it works:**
1. Select dates on property detail screen
2. Review pricing breakdown
3. Tap "Book Now" button
4. Select payment method
5. Complete payment
6. Receive instant confirmation
7. Booking added to reservations

**Requirements:**
- Property must have instant booking enabled
- Dates must be available
- Payment must be successful

**Benefits:**
- Immediate confirmation
- No waiting for host approval
- Guaranteed booking

**API Endpoint:**
- \`POST /wp-json/jwt-auth/v1/booking/instant_booking\`

**Request Data:**
- Listing ID
- User ID
- Check-in date
- Check-out date
- Number of guests
- Total price
- Payment method

#### 2. Request to Book

**What it is:**
- Send booking request to host
- Host can approve or decline
- 24-hour response window

**How it works:**
1. Select dates on property detail screen
2. Tap "Request to Book" button
3. Fill in request details:
   - Trip purpose
   - Special requests
   - Message to host
4. Submit request
5. Wait for host response
6. If approved, proceed to payment
7. If declined, search other properties

**Host Actions:**
- "Approve request" → "Renter gets notification" → "Payment required"
- "Decline request" → "Renter gets notification" → "No charge"

**Timeout:**
- Request expires after 24 hours
- Auto-declined if no response

**API Endpoint:**
- \`POST /wp-json/jwt-auth/v1/booking/booking_request\`

### Reservation Management

**Location:** Reservations tab (bottom navigation)

**Sections:**

1. **Upcoming Reservations**
   - Future bookings
   - Check-in countdown
   - Trip details
   - Quick actions

2. **Past Reservations**
   - Completed stays
   - Historical bookings
   - Leave review option
   - Rebook option

3. **Pending Requests**
   - Requests awaiting approval
   - Request status
   - Time remaining
   - Cancel request option

4. **Cancelled Reservations**
   - Cancelled bookings
   - Cancellation reason
   - Refund status
   - Cancellation date

**Filters:**
- All
- Upcoming
- Pending
- Past
- Cancelled

**Reservation Card Details:**
- Property photo
- Property name
- Check-in date
- Check-out date
- Number of nights
- Total price
- Booking status
- Reservation ID

**Reservation Actions:**

**For Upcoming:**
- View details
- Contact host
- Cancel reservation (with policy)
- Get directions
- View itinerary

**For Past:**
- View details
- Leave review
- View invoice
- Rebook property

**For Pending:**
- View request details
- Contact host
- Cancel request
- Edit request

**API Endpoints:**
- \`GET /wp-json/jwt-auth/v1/profile/rservation?user_id=\${id}\` - Get all reservations
- \`POST /wp-json/jwt-auth/v1/profile/cancelled_reservation\` - Cancel reservation

### Reservation Detail Screen

**Accessed by:** Tap on any reservation card

**Information Displayed:**

1. **Header**
   - Property name
   - Reservation status badge
   - Booking ID

2. **Property Image**
   - Main property photo
   - "View property" link

3. **Trip Details**
   - Check-in date and time
   - Check-out date and time
   - Number of nights
   - Number of guests
   - Special requests

4. **Guest Information** (for hosts)
   - Guest name
   - Guest photo
   - Contact information
   - Number of previous trips

5. **Host Information** (for renters)
   - Host name
   - Host photo
   - Contact information
   - Host rating

6. **Address & Location**
   - Full address
   - Map view
   - "Get directions" button
   - GPS coordinates

7. **Pricing Breakdown**
   - Base price × nights
   - Cleaning fee
   - Service fee
   - Taxes
   - Total paid
   - Payment method

8. **Payment Status**
   - Paid amount
   - Refund status (if cancelled)
   - Payment date
   - Invoice link

9. **Cancellation Policy**
   - Policy type
   - Refund details
   - Cancellation deadline
   - Terms and conditions

10. **Quick Actions**
    - Message host/guest
    - Call host/guest
    - Get directions
    - View invoice
    - Cancel reservation
    - Report issue

**For Hosts - Additional Actions:**
- Confirm reservation
- Decline reservation
- View guest profile
- Send pre-arrival instructions

**API Endpoints:**
- \`GET /wp-json/jwt-auth/v1/profile/reservation_detail?reservation_id=\${id}\` - Get reservation details
- \`POST /wp-json/jwt-auth/v1/profile/confirm_reservation\` - Confirm reservation (host)
- \`POST /wp-json/jwt-auth/v1/profile/decline_reservation\` - Decline reservation (host)

### Cancellation Policy

**Policy Types:**

1. **Flexible**
   - Full refund if cancelled 24 hours before check-in
   - 50% refund if cancelled within 24 hours
   - No refund after check-in

2. **Moderate**
   - Full refund if cancelled 5 days before check-in
   - 50% refund if cancelled within 5 days
   - No refund after check-in

3. **Strict**
   - Full refund if cancelled 14 days before check-in
   - 50% refund if cancelled 7 days before
   - No refund within 7 days or after check-in

4. **Non-Refundable**
   - No refund for any cancellation
   - Lowest prices
   - Best for flexible travelers

**Cancellation Process:**
1. Navigate to reservation detail
2. Tap "Cancel Reservation"
3. Select cancellation reason
4. Review refund amount
5. Confirm cancellation
6. Refund processed within 5-10 business days

---

## Payment System

### Payment Methods

#### 1. Stripe Integration

**Supported Payment Types:**
- Credit cards (Visa, Mastercard, Amex, Discover)
- Debit cards
- Apple Pay (iOS)
- Google Pay (Android)

**Features:**
- PCI-DSS compliant
- 3D Secure authentication
- Saved payment methods
- Instant payment confirmation
- Automatic refunds

**Implementation:**
- Uses \`@stripe/stripe-react-native\` SDK
  - Lazy initialization(loaded on - demand)
    - Payment sheet UI
      - Secure token handling

        ** Payment Flow:**
          1. User selects payment method
2. Stripe SDK initializes
3. Payment sheet appears
4. User enters card details
5. Card validation and tokenization
6. Payment intent created
7. Payment processed
8. Confirmation received

  ** Security:**
    - No card data stored on device
      - Tokenized transactions
        - PCI compliance
          - Fraud detection

            ** Configuration:**
              - Publishable key from backend
                - Merchant identifier: \`merchant.identifier\`
                  - URL scheme: \`webpenter\`

                    ** API Endpoints:**
                      - \`GET /wp-json/jwt-auth/v1/token/stripe_pub\` - Get publishable key
                        - \`POST /wp-json/jwt-auth/v1/token/stripe\` - Create payment intent
                          - \`POST /wp-json/jwt-auth/v1/after-payment\` - Confirm payment

#### 2. PayPal Integration

  ** Features:**
    - PayPal account payments
      - PayPal Credit
        - Guest checkout
          - Buyer protection

            ** Payment Flow:**
              1. User selects PayPal
2. PayPal SDK opens
3. User logs into PayPal
4. Reviews payment details
5. Approves payment
6. Returns to app
7. Payment confirmed

  ** API Endpoints:**
    - \`POST /wp-json/jwt-auth/v1/token/paypal_data\` - Get PayPal config
      - \`POST /wp-json/jwt-auth/v1/after-payment\` - Confirm PayPal payment

#### 3. ThaiQR Code Payments

  ** What it is:**
    - Local Thai payment method
      - QR code scanning
        - Bank transfer via mobile banking

          ** How it works:**
            1. User selects ThaiQR
2. QR code generated with payment details
3. User scans QR with banking app
4. Completes payment in banking app
5. Returns to BookHere app
6. Payment verified

  ** Supported Banks:**
    - All major Thai banks
      - PromptPay network
        - Instant transfer

#### 4. Bank Transfer

  ** Features:**
    - Direct bank transfer
      - Manual verification
        - Bank details provided
          - Proof of payment upload

            ** Process:**
              1. User selects bank transfer
2. Bank details displayed
3. User transfers money
4. Upload proof of payment
5. Host verifies payment
6. Reservation confirmed

### Payment Process

  ** Step-by-Step:**

    1. ** Booking Initiation **
      - Select property and dates
        - Review pricing breakdown
          - Proceed to payment

2. ** Payment Method Selection **
  - Choose from available methods
    - Stripe, PayPal, ThaiQR, or Bank Transfer

3. ** Payment Details **
  - Enter payment information
    - Save for future use(optional)
      - Apply promo code(if available)

  4. ** Payment Confirmation **
    - Review total amount
      - Confirm payment
        - Processing indicator

5. ** Payment Processing **
  - Payment gateway processes transaction
    - Backend records payment
      - Booking status updated

6. ** Confirmation **
  - Success message displayed
    - Confirmation email sent
      - Booking added to reservations
        - Invoice generated

          ** Pricing Breakdown:**
            \`\`\`Pricing Breakdown
Base price:        $100 × 3 nights = $300
Cleaning fee:                         $50
Service fee:                          $30
Taxes:                                $38
────────────────────────────────────────
Total:                               $418
\`\`\`

            ** Fees Explained:**
- ** Base Price:** Per - night rate set by host
  - ** Cleaning Fee:** One - time cleaning charge
    - ** Service Fee:** Platform commission(10 - 15 %)
      - ** Taxes:** Local taxes and VAT

        ** Payment Security:**
          - Encrypted transactions
            - PCI - DSS compliance
              - Fraud detection
                - Chargeback protection
                  - Secure payment storage

---

## Messaging & Communication

### Chat System

  ** Location:** Messages tab (bottom navigation)

    ** Features:**

      1. ** Conversation List **
        - All conversations
          - Unread message count
            - Last message preview
              - Timestamp
              - User avatar
                - Online status indicator

2. ** Search Conversations **
  - Search by name
    - Filter conversations
      - Quick access

3. ** New Message **
  - Start new conversation
    - User search
      - Property inquiry

        ** Chat Interface:**

          1. ** Chat Header **
            - Contact name
              - Online status
                - Profile photo
                  - "i" info button
                    - Call / video buttons (future)

2. ** Message Display **
  - Chronological order
    - Sent messages (right)
      - Received messages (left)
        - Message timestamp
          - Read receipts
            - Delivery status

3. ** Message Composition **
  - Text input field
    - Attachment button
      - Photo / video picker
        - Voice message recorder
          - Send button

4. ** Rich Media **
  - Photo sharing
    - Video sharing
      - File attachments
        - Voice messages
          - Location sharing

            ** Message Types:**

              1. ** Text Messages **
                - Plain text
                  - Emojis
                    - URLs (auto-detected)
                      - Mentions

2. ** Media Messages **
  - Photos(up to 10MB)
  - Videos(up to 50MB)
  - Documents(PDF, DOC, etc.)
  - Compressed for transfer

3. ** Voice Messages **
  - Record audio
    - Maximum 2 minutes
      - Playback in -app
      - Waveform visualization

4. ** System Messages **
  - Booking confirmations
    - Payment notifications
      - Status updates
        - Automated messages

          ** Features:**

- ** Real - time Messaging:** Instant message delivery
  - ** Push Notifications:** New message alerts
    - ** Typing Indicators:** See when other person is typing
      - ** Message Status:**
        - Sent(one check)
        - Delivered(two checks)
        - Read(two blue checks)
        - ** Message Threading:** Organized conversations
          - ** Search Messages:** Find past messages
            - ** Delete Messages:** Remove sent messages
              - ** Block User:** Report and block

                ** Context - Based Messaging:**

                  1. ** Property Inquiry **
                    - Message from property detail screen
                      - Property details included
                        - Inquiry template
                          - Quick responses

2. ** Booking Communication **
  - Message linked to booking
    - Booking reference included
      - Check -in instructions
      - Special requests

3. ** Post - Booking **
  - Check-in confirmation
  - Issues reporting
    - Review reminders

      ** API Endpoints:**
        - \`GET /wp-json/jwt-auth/v1/listing/message?user_id=\${uid}\` - Get conversations
          - \`GET /wp-json/jwt-auth/v1/messages/thread_messages?thread_id=\${id}\` - Get messages
            - \`POST /wp-json/jwt-auth/v1/messages/send_message\` - Send message
              - \`POST /wp-json/jwt-auth/v1/messages/upload_media\` - Upload media

                ** Message Delivery:**
                  - Sent to backend immediately
                    - Stored in database
                    - Push notification sent to recipient
                      - Delivered when recipient online
                        - Cached locally for offline access

---

## Property Management (Hosts)

### Add New Listing

  ** Location:** "More" → "Add New Listing"

    ** Process:** 11 - step wizard

#### Step 1: Property Basics

  ** Information:**
    - Property Title (required)
      - Property Type:
        - Apartment
          - House
            - Villa
              - Hotel
                - Unique stay
                  - Condo
                    - Townhouse
                      - Guest house
                        - Listing type:
                          - Entire place
                            - Private room
                              - Shared room
                                - Property description(min 50 characters)

        ** Fields:**
          - Text input for title
            - Dropdown for property type  
              - Radio buttons for listing type
                - Multiline text area for description

#### Step 2: Location Details

  ** Information:**
    - Country (dropdown)
      - State / Province (dropdown)
        - City (text input)
          - Address (text input)
            - Zip / Postal code
              - Neighborhood (optional)
                - GPS coordinates (optional)

        ** Interactive Map:**
          - Drag marker to exact location
            - Auto - detect current location
              - Search by address
                - Zoom controls
                  - Save coordinates

#### Step 3: Media Upload

  ** Photo Upload:**
    - Minimum 5 photos required
      - Maximum 50 photos
        - Supported formats: JPG, PNG
          - Maximum size: 10MB per photo
            - Drag to reorder
              - Set cover photo

                ** Video Upload (Optional):**
                  - Property tour video
                    - Maximum 100MB
                      - Supported formats: MP4, MOV
                        - Thumbnail selection

                          ** Gallery Management:**
                            - Add photos from:
- Camera
  - Photo library
    - Cloud storage
      - Edit photos:
- Crop
  - Rotate
  - Adjust brightness
    - Delete photos
      - Reorder gallery

#### Step 4: Amenities & Features

  ** Categories:**

** 1. Essentials:**
  - WiFi (speed selection)
  - Air conditioning
    - Heating
    - Kitchen or kitchenette
      - TV
      - Iron
      - Hair dryer
        - Workspace

        ** 2. Safety:**
          - Smoke detector
            - Carbon monoxide detector
              - Fire extinguisher
                - First aid kit
                  - Emergency exit
                    - Security cameras(disclosed)

                      ** 3. Facilities:**
                        - Free parking
                          - Gym
                          - Pool
                          - Hot tub
                            - BBQ grill
                              - Patio / balcony
                              - Garden
                              - Beach access

                                ** 4. Entertainment:**
                                  - Cable / satellite TV
                                    - Netflix / streaming
                                    - Game console
                                      - Board games
                                        - Books

                                        ** 5. Family:**
                                          - Crib
                                          - High chair
                                            - Baby bath
                                              - Children's books/toys
                                                - Baby monitor
                                                  - Outlet covers

                                                    ** 6. Accessibility:**
                                                      - Step - free entrance
                                                        - Wide doorways
                                                          - Accessible bathroom
                                                            - Elevator access
                                                              - Grab bars

                                                                ** Selection:**
                                                                  - Checkbox selection
                                                                    - "Select all" option
                                                                      - Category filters
                                                                        - Search amenities

#### Step 5: Accommodations

  ** Guest Capacity:**
    - Maximum guests (number picker)
      - Maximum adults
        - Maximum children
          - Maximum infants
            - Pet allowance

              ** Sleeping Arrangements:**

** Bedrooms(add multiple):**
  - Bedroom 1:
- Bed Type (King, Queen, Double, Single)
  - Number of beds
    - Bedroom 2: (same)
      - Add more bedrooms

        ** Bathrooms:**
          - Number of bathrooms
            - Full bathrooms
              - Half bathrooms
                - Private vs shared

                  ** Additional Spaces:**
                    - Living room
                      - Dining room
                        - Kitchen
                        - Workspace
                        - Laundry room

#### Step 6: Pricing Details

  ** Base Pricing:**
    - Price per night (required)
      - Currency selection
        - Weekend pricing (optional)
          - Monthly discount(%)
            - Weekly discount(%)

              ** Additional Fees:**
                - Cleaning fee (one - time)
                  - Extra guest fee (per person)
                    - Security deposit (optional)

                      ** Custom Periods:**
                        - Add seasonal rates
                          - Holiday pricing
                            - Special event pricing
                              - Start and end dates
                                - Custom price

                                  ** Pricing Rules:**
                                    - Minimum nights stay
                                      - Maximum nights stay
                                        - Preparation time (days between bookings)

#### Step 7: Availability

  ** Calendar Settings:**
    - Available from (date)
      - Available until (date)
        - Block specific dates
          - Set as unavailable

          ** Booking Settings:**
            - Minimum advance notice
              - Maximum advance notice
                - Booking window
                  - Check-in cutoff time

                    ** Calendar Sync:** (future feature)
- Import from Airbnb
  - Import from Booking.com
    - Export to other platforms

#### Step 8: Policies & Rules

  ** House Rules:**
    - No smoking (toggle)
      - No pets (toggle)
        - No parties / events (toggle)
          - No children (toggle)
            - Quiet hours (time range)
              - Custom rules (text input)

                ** Check-in/Check-out:**
                - Check-in from (time)
                - Check-in until (time)
                - Check-out time
                  - Self check-in available
                    - Lockbox / keypad code

                      ** Cancellation Policy:**
                        - Flexible
                        - Moderate
                        - Strict
                        - Non - refundable

                        ** Additional Policies:**
                          - Smoking policy
                            - Pet policy
                              - Party / event policy
                                - Children policy
                                  - Additional rules text

#### Step 9: Terms & Conditions

  ** Agreement:**
    - Host terms checkbox
      - Listing agreement checkbox
        - Liability waiver checkbox
          - Read terms link

#### Step 10: Review & Publish

  ** Summary Display:**
    - Property title
      - Location
      - Price
      - Photos(count)
      - Amenities(count)
      - All entered information

        ** Actions:**
          - Preview listing(as guests see it)
            - Edit any section
              - Save as draft
              - Publish listing

                ** Validation:**
                  - Required fields check
                    - Photo minimum check
                      - Description minimum length
                        - Pricing validation

#### Step 11: Success

  ** Confirmation:**
    - Listing published successfully
      - Listing ID
        - Share listing
          - View listing
            - Manage listing

              ** Next Steps:**
                - Add more photos
                  - Set calendar availability
                    - Share on social media
                      - Wait for first booking

                        ** API Endpoint:**
                          - \`POST /wp-json/jwt-auth/v1/submit-listing\` - Submit new listing

### Manage Listings

  ** Location:** More → My Listings

    ** Listing Dashboard:**

** List View:**
  - All hosted properties
    - Property photo
      - Property title
        - Location
        - Price per night
          - Status badge:
- Active
  - Inactive
  - Pending approval
    - Draft

    ** Actions per Listing:**
      - Edit listing
        - View as guest
        - Duplicate listing
          - Deactivate / Activate
          - Delete listing
            - View analytics

              ** Filters:**
                - All listings
                  - Active
                  - Inactive
                  - Drafts
                  - Pending

                  ** Search:**
                    - Search by title
                      - Filter by location
                        - Sort by date created

### Edit Listing

  ** Accessible from:** "My Listings" → "Edit"

    ** Editable Sections:**
      - All 11 steps from creation
        - Edit individual sections
          - Save changes
            - Publish updates

              ** Version Control:**
                - Save as draft
                - Preview changes
                  - Revert changes
                    - Update history

                      ** Analytics:** (per listing)
- Total views
  - Total bookings
    - Revenue generated
      - Average rating
        - Booking conversion rate
          - Calendar occupancy

---

## Financial Management

### Wallet Overview

  ** Location:** "Drawer menu" → "Wallet"

    ** Dashboard Sections:**

      1. ** Balance Card **
        - Current balance
          - Pending earnings
            - Available for payout
              - Last update time

2. ** Quick Actions **
  - Request payout
    - View earnings
      - View payouts history
        - Add payout method

3. ** Earnings Summary **
  - This month
    - Last month
      - This year
        - All time
          - Visual graphs

### Earnings

  ** Location:** "Wallet" → "Earnings tab"

    ** Display:**
      - Earnings list
        - Chronological order
          - Filter by:
- All time
  - This year
    - This month
      - Custom date range

        ** Earning Card Details:**
          - Booking ID
            - Property name
              - Guest name
                - Check-in date
                - Check-out date
                  - Nights count
                    - Gross amount
                      - Platform fee
                        - Net earnings
                          - Payout status

                            ** Earnings Breakdown:**
                              \`\`\`Earnings Breakdown
Booking Amount:              $400
Service Fee (15%):           -$60
Transaction Fee:              -$5
──────────────────────────────────
Your Earnings:               $335
\`\`\`

                              ** Status Badges:**
                                - Pending (awaiting check-out)
                                - Available (ready for payout)
  - Processing (payout requested)
    - Paid (received)

    ** API Endpoints:**
      - \`GET /wp-json/jwt-auth/v1/wallet/earnings?user_id=\${id}\` - Get earnings
        - \`GET /wp-json/jwt-auth/v1/wallet/earnings_detail?booking_id=\${id}\` - Earning detail

### Payouts

  ** Location:** "Wallet" → "Payouts tab"

    ** Payout Methods:**

      1. ** Bank Transfer **
        - Bank name
          - Account number
            - Account holder name
              - Swift / BIC code
                - IBAN (for international)
  - Routing number

2. ** PayPal **
  - PayPal email address
    - Account verification

3. ** Stripe Connect ** (future)
  - Direct deposit
    - Faster transfers

      ** Request Payout:**

** Step 1: Select Amount **
  - Available balance displayed
    - Enter payout amount
      - Minimum payout: $50
        - Maximum: Full balance

          ** Step 2: Select Method **
            - Choose from saved methods
              - Or add new method

                ** Step 3: Confirm **
                  - Review details
                    - Processing time displayed
                      - Confirm payout

                        ** Step 4: Processing **
                          - Payout requested
                            - Pending admin approval
                              - Email confirmation sent

                                ** Payout Timeline:**
                                  - Request submitted
                                    - Review(1 - 2 business days)
                                    - Approved / Rejected
                                    - Transfer initiated
                                      - Received(3 - 5 business days)

                                      ** Payout History:**
                                        - All past payouts
                                          - Payout date
                                            - Amount
                                            - Method
                                            - Status
                                            - Transaction ID

                                              ** Status Types:**
                                                - Pending review
                                                  - Approved
                                                  - Processing
                                                  - Completed
                                                  - Rejected
                                                  - Cancelled

                                                  ** API Endpoints:**
                                                    - \`POST /wp-json/jwt-auth/v1/wallet/request_payout\` - Request payout
                                                      - \`GET /wp-json/jwt-auth/v1/wallet/payouts?user_id=\${id}\` - Get payout history

### Invoices

  ** Location:** Drawer menu → Invoices

    ** Invoice List:**
      - All payment invoices
        - For renters: Bookings paid
          - For hosts: Earnings received
            - Chronological order
              - Search functionality

                ** Filters:**
                  - All
                  - Paid
                  - Pending
                  - Cancelled
                  - Refunded

                  ** Invoice Card:**
                    - Invoice number
                      - Issue date
                        - Property name
                          - Amount
                          - Status badge
                            - "View" button

                              ** Invoice Detail:**

** Header:**
  - Invoice #
    - Issue date
      - Due date(if applicable)
- Status

    ** Billing Information:**
      - Bill to: Guest name and address
        - Bill from: Host / Company info
          - Payment method used

            ** Line Items:**
              \`\`\`Invoice Detail
Description          Quantity    Price    Total
────────────────────────────────────────────────
Accommodation         3 nights   $100    $300
Cleaning Fee                             $50
Service Fee                              $30
Taxes                                    $38
────────────────────────────────────────────────
                              Total:     $418
\`\`\`

              ** Payment Information:**
                - Amount paid
                  - Payment date
                    - Payment method
                      - Transaction ID

                        ** Actions:**
                          - Download PDF
                            - Share invoice
                              - Print invoice
                                - Send via email
                                  - Report issue

                                    ** PDF Generation:**
                                      - Professional format
                                        - Company logo
                                          - Complete billing details
                                            - Terms and conditions
                                              - Payment receipt

                                                ** API Endpoints:**
                                                  - \`GET /wp-json/jwt-auth/v1/invoices?user_id=\${id}\` - Get invoices
                                                    - \`GET /wp-json/jwt-auth/v1/invoice_detail?invoice_id=\${id}\` - Invoice details
                                                      - \`GET /wp-json/jwt-auth/v1/invoice_pdf?invoice_id=\${id}\` - Download PDF

---

## User Profile & Settings

### Profile Screen

  ** Location:** More → Profile

    ** Tabs:**

#### 1. Profile Tab

  ** Display Information:**
    - Profile photo
      - Full name
        - Email address
          - Phone number
            - Date joined
              - Verification badges
                - Bio / About me

                  ** Edit Profile:**
                    - Change photo
                      - Upload from gallery
                        - Take photo
                          - Remove photo
                            - Edit name
                              - Edit phone
                                - Edit bio(max 500 characters)
                                  - Add languages spoken
                                    - Add occupation
                                      - Add location

                                        ** Verification:**
                                          - Email verification badge
                                            - Phone verification badge
                                              - ID verification (future)
                                                - Trusted user badge

#### 2. Settings Tab

  ** Account Settings:**
    - Change password
      - Email preferences
        - Phone number
          - Language selection
            - Currency preference
              - Time zone

                ** Notification Settings:**
                  - Push notifications toggle
                    - Email notifications toggle
                      - SMS notifications toggle

                        ** Notification Types:**
                          - Booking confirmations
                            - Messages
                            - Payment receipts
                              - Reviews
                              - Promotions
                              - News and updates

                                ** Privacy Settings:**
                                  - Profile visibility
                                    - Show email to hosts
                                      - Show phone to hosts
                                        - Search indexing
                                          - Data sharing preferences

                                            ** Display Settings:**
                                              - Dark mode toggle
                                                - Language selection (i18n)
                                                  - Map provider (Google / OSM)
                                                    - Date format
                                                      - Distance units (km / miles)

#### 3. Bookings Tab

  ** Quick Access:**
    - Upcoming trips
      - Past trips
        - Cancelled trips
          - Favorites
          - Saved searches

            ** Booking Stats:**
              - Total trips
                - Total spent
                  - Countries visited
                    - Nights stayed

#### 4. Hosting Tab (Hosts only)

  ** Host Profile:**
    - Host since date
      - Properties hosted
        - Total bookings
          - Total earnings
            - Average rating
              - Response rate
                - Response time

                  ** Host Stats:**
                    - Active listings
                      - Upcoming reservations
                        - Completed bookings
                          - Revenue this month
                            - Occupancy rate

                              ** Host Tools:**
                                - Manage listings
                                  - Calendar management
                                    - Pricing tools
                                      - Performance metrics

#### 5. Reviews Tab

  ** Reviews About You:**
    - As a guest (reviews from hosts)
      - As a host (reviews from guests)
        - Overall rating
          - Category ratings
            - Total reviews count

              ** Review Display:**
                - Reviewer photo
                  - Reviewer name
                    - Rating stars
                      - Review text
                        - Review date
                          - Property name
                            - Your response (if added)

** Write Review:**
  - Rate cleanliness
    - Rate accuracy
      - Rate communication
        - Rate location
          - Rate check-in
            - Rate value
              - Write review text
                - Upload photos
                  - Submit review

#### 6. Account Tab

  ** Account Actions:**
    - Edit profile
      - Change password
        - Payment methods
          - Payout methods
            - Notification settings
              - Privacy settings

                ** Legal:**
                  - Terms of service
                    - Privacy policy
                      - Cookie policy
                        - Community guidelines
                          - Trust & safety

                          ** Support:**
                            - Help center
                              - Contact support
                                - Report a problem
                                  - FAQs

                                  ** Danger Zone:**
                                    - Deactivate account
                                      - Delete account

### Account Actions

  ** Change Password:**
    1. Enter current password
2. Enter new password
3. Confirm new password
4. Save changes
5. Re-login required

  ** Delete Account:**
    1. Confirm deletion request
2. Enter password
3. Acknowledge data deletion
4. 30 - day grace period
5. Permanent deletion after 30 days

  ** Deactivate Account:**
    - Temporary deactivation
      - Profile hidden
        - Listings hidden
          - Can reactivate anytime

            ** API Endpoints:**
              - \`GET /wp-json/jwt-auth/v1/profile?user_id=\${id}\` - Get profile data
                - \`POST /wp-json/jwt-auth/v1/profile/update\` - Update profile
                  - \`POST /wp-json/jwt-auth/v1/token/profile_image\` - Upload profile photo
                    - \`POST /wp-json/jwt-auth/v1/profile/change_password\` - Change password

---

## Favorites & Wishlists

### Favorites Screen

  ** Location:** "Drawer menu" → "Favourites"

    ** Features:**

** Favorites List:**
  - All saved properties
    - Grid or list view toggle
      - Quick preview
        - Remove from favorites

          ** Property Card:**
            - Property photo
              - Property title
                - Location
                - Price per night
                  - Rating stars
                    - Heart icon (filled)

                      ** Actions:**
                        - View property details
                          - Remove from favorites
                            - Share property
                              - Create wish list (future)

                                ** Organization:**
                                  - Default "Favorites" list
                                    - Create custom lists (future):
- "Dream destinations"
  - "Summer trips"
  - "Family vacations"
  - Custom names

    ** Empty State:**
      - "No favorites yet"
      - Illustration
      - "Start exploring" button
        - Browse suggestions

          ** Sync:**
            - Favorites synced across devices
              - Real - time updates
                - Persistent storage

                  ** API Endpoints:**
                    - \`GET /wp-json/jwt-auth/v1/listing/favorites?user_id=\${id}\` - Get favorites
                      - \`POST /wp-json/jwt-auth/v1/listing/favorite\` - Add / remove favorite

                        ** Toggle Favorite:**
                          - Heart icon on property cards
                            - Tap to add to favorites
                              - Tap again to remove
                                - Visual feedback (animation)
                                  - Instant sync to backend

---

## Reviews & Ratings

### Review System

  ** Two - Way Reviews:**
    - Guests review hosts / properties
      - Hosts review guests

        ** Review Components:**

#### 1. Overall Rating
  - 1 to 5 stars
    - Half - star increments
      - Required field

#### 2. Category Ratings

  ** For Properties:**
    - Cleanliness (1 - 5 stars)
    - Accuracy (1 - 5 stars)
    - Communication (1 - 5 stars)
    - Location (1 - 5 stars)
    - Check-in (1 - 5 stars)
    - Value (1 - 5 stars)

  ** For Guests:**
    - Cleanliness
    - Communication
    - House rules respect
      - Overall experience

#### 3. Written Review
  - Minimum 50 characters
    - Maximum 1000 characters
      - Text area input
        - Optional

#### 4. Photo Upload
  - Upload review photos (optional)
    - Maximum 5 photos
      - Show property condition
        - Visual evidence

### Leaving a Review

  ** Eligibility:**
    - Must have completed stay
      - Review window: 14 days after checkout
        - One review per booking
          - Cannot edit after submission

            ** Review Process:**

** Step 1: Rating **
  - Select overall rating
    - Rate each category
      - Visual star selector

        ** Step 2: Write Review **
          - Share your experience
            - Be honest and constructive
              - Follow community guidelines
                - Add photos (optional)

                  ** Step 3: Review Privacy **
                    - Choose to publish
                      - Keep private to host
                        - Publish to public

                          ** Step 4: Submit **
                            - Review submitted
                              - Both parties must review
                                - Reviews published simultaneously
                                  - Email notification sent

                                    ** Review Guidelines:**
                                      - Be honest and fair
                                        - Focus on facts
                                          - No personal attacks
                                            - No profanity
                                              - Constructive feedback
                                                - Relevant to stay

### Viewing Reviews

  ** On Property Listing:**
    - Overall rating (large display)
      - Total review count
        - Category ratings breakdown
          - Recent reviews (3 - 5)
            - "Show all reviews" button

              ** Reviews Page:**
                - All reviews chronologically
                  - Sort by:
- Most recent
  - Highest rated
    - Lowest rated
      - Most helpful
        - Filter by:
- Rating (5, 4, 3, 2, 1 stars)
  - With photos
    - Guest type (solo, family, couple)

      ** Review Card:**
        - Reviewer photo
          - Reviewer name
            - Review date
              - Rating stars
                - Review text
                  - Review photos
                    - Host response
                      - "Helpful" button
                        - "Report" button

                          ** Host Response:**
                            - Hosts can respond to reviews
                              - One response per review
                                - Maximum 500 characters
                                  - Shows publicly below review

### Review Notifications

  ** Email Notifications:**
    - New review received
      - Review reminder (3 days after checkout)
        - Review published
          - Review response received

            ** Push Notifications:**
              - New review alert
                - Review reminder
                  - Review milestone (10, 50, 100 reviews)

---

## Maps & Location

### Map Integration

  ** Provider:** Google Maps

    ** Implementation:** \`react-native-maps\` package

      ** Usage Locations:**

        1. ** Property Detail Screen **
          - Show exact property location
            - Marker on map
              - Address below map
                - "Get directions" button

2. ** Search Results - Map View **
  - Multiple property markers
    - Cluster markers(many properties)
      - Price labels on markers
        - Tap marker to see property
          - Drag / zoom to search

3. ** Add Listing - Location **
  - Interactive map picker
    - Drag marker to exact spot
      - Auto - detect current location
        - Search address
          - Save coordinates

4. ** Near Me Search **
  - Current location detection
    - Show nearby properties
      - Distance calculation
        - Sort by distance

### Map Features

  ** Interactive Elements:**
    - Pan and zoom
      - Marker clustering
        - Custom markers
          - Info windows
            - Route directions
              - Street view (future)

                ** Themes:**
                  - Light theme ( default )
                    - Dark theme ( follows app theme )
                      - Custom styling

                        ** Permissions:**
                          - Location permission requested
                            - "While using app" or "Always"
                              - GPS accuracy level
                                - Background location (optional)

                                  ** Location Services:**

** Get Current Location:**
  \`\`\`javascript
- Request permission
- Fetch GPS coordinates
- Accuracy check
- Reverse geocode to address
\`\`\`

  ** Distance Calculation:**
    \`\`\`javascript
- Calculate distance between two points
- Display in km or miles
- "X km away" labels
\`\`\`

    ** Directions:**
      - Open in Google Maps
        - Turn-by-turn navigation
          - Estimated time
            - Multiple routes

              ** API Integration:**
                - Google Maps API key from\`.env\`
                  - Maps SDK for iOS / Android
                    - Places API for search
                      - Geocoding API for addresses

                        ** Offline Maps:**
                          - Cache recently viewed areas
                            - Basic map tiles
                              - Limited functionality offline

---

## Notifications

### Push Notifications

  ** Implementation:** Expo Notifications

    ** Setup:**
      - Device token registration
        - Permission request
          - Server - side token storage
            - FCM / APNs integration

              ** Notification Types:**

#### 1. Booking Notifications

  ** For Renters:**
    - Booking confirmed
      - Booking request approved
        - Booking request declined
          - Check-in reminder (1 day before)
          - Check-out reminder (day of)
            - Booking cancelled

              ** For Hosts:**
                - New booking request
                  - Booking cancelled by guest
                    - Review reminder
                      - Payout available

#### 2. Message Notifications

  ** Real-time:**
    - New message received
      - Message delivered
        - Message read

          ** Content:**
            - Sender name
              - Message preview(first 50 chars)
                - Time received
                  - Tap to open chat

#### 3. Payment Notifications

  ** For Renters:**
    - Payment successful
      - Payment failed
        - Refund processed
          - Invoice available

            ** For Hosts:**
              - Payment received
                - Payout approved
                  - Payout transferred
                    - Payout rejected

#### 4. Review Notifications

  ** For All:**
    - New review received
      - Review reminder
        - Review response

#### 5. System Notifications

  ** Updates:**
    - App update available
      - New features announcement
        - System maintenance

          ** Promotions:**
            - Special offers
              - Discounts
              - Travel deals

### In - App Notifications

  ** Notification Center:**
    - All notifications list
      - Unread badge count
        - Notification categories
          - Mark as read
          - Clear all

            ** Notification Card:**
              - Icon / image
              - Title
              - Message
              - Timestamp
              - Action button
                - Swipe to dismiss

                  ** Real - time Updates:**
                    - WebSocket connection
                      - Instant delivery
                        - Badge updates
                          - Sound alerts
                            - Vibration

### Notification Settings

  ** Preferences:**
    - Enable / disable push notifications
      - Enable / disable email notifications
        - Enable / disable SMS (OTP only)

          ** Granular Control:**
            - Booking notifications
              - Message notifications
                - Payment notifications
                  - Review notifications
                    - Promotional notifications

                      ** Quiet Hours:**
                        - Do not disturb schedule
                          - Mute all notifications
                            - Emergency override

                              ** Delivery Method:**
                                - Push notifications
                                  - Email
                                  - SMS
                                  - In - app only

                                    ** API Endpoints:**
                                      - \`POST /wp-json/push/v1/register-token\` - Register device token
                                        - \`POST /wp-json/push/v1/send-notification\` - Send notification
                                          - \`GET /wp-json/push/v1/notifications?user_id=\${id}\` - Get notifications

---

## Multi - Language Support

### Localization(i18n)

  ** Implementation:** \`react-i18next\`

    ** Supported Languages:**
      - English(en)
      - Spanish(es)
      - French(fr)
      - German(de)
      - Italian(it)
      - Portuguese(pt)
      - Thai(th)
      - Japanese(ja)
      - Korean(ko)
      - Chinese Simplified(zh - CN)
        - Arabic(ar)

        ** Translation Scope:**

** UI Elements:**
  - All buttons and labels
    - Navigation items
      - Form placeholders
        - Error messages
          - Success messages
            - Empty states
              - Loading states

                ** Content:**
                  - Property descriptions
                    - Reviews (not translated)
                    - Messages (not translated)
                    - Static pages

                      ** Dynamic Content:**
                        - Date formatting
                          - Number formatting
                            - Currency symbols
                              - Distance units
                                - Time zones

### Language Selection

  ** Settings Location:**
    - "Profile" → "Settings" → "Language"

      ** Options:**
        - Device language (auto - detect)
          - Manual selection
            - Language list with native names

              ** Switching:**
                - Instant language switch
- No app restart required
  - Persistent across sessions

    ** Translation Features:**

** Date Localization:**
  \`\`\`
English:    Jan 15, 2026
Spanish:    15 ene 2026
French:     15 janv. 2026
\`\`\`

  ** Number Formatting:**
    \`\`\`
English:    1,234.56
German:     1.234,56
French:     1 234,56
\`\`\`

    ** Currency:**
      \`\`\`
USD: $100
EUR: €100
THB: ฿100
\`\`\`

      ** RTL Support:**
        - Right - to - left languages(Arabic)
          - Mirrored UI layout
            - Text alignment
              - Icon direction

                ** Translation Files:**
                  - Location: \`/src/localization/\`
                    - Format: JSON
                      - Structure: Nested keys
                        - Fallback to English

                          ** Example Translation:**
                            \`\`\`json
{
  "home": {
    "title": "Find your perfect stay",
    "search": "Search destinations",
    "trending": "Trending properties"
  }
}
\`\`\`

                            ** Usage in Code:**
                              \`\`\`javascript
import { useTranslation } from 'react-i18next';

const { t } = useTranslation();
<Text>{t('home.title')}</Text>
\`\`\`

---

## Dark Mode

### Theme System

  ** Implementation:**
    - React Context for theme state
      - Global theme provider
        - System preference detection

          ** Theme Options:**
            - Light mode
              - Dark mode
                - System default (auto)

                  ** Switching:**
                    - Profile → Settings → Display → Dark Mode
                      - Toggle switch
- Instant theme change
  - Preference saved

### Color Schemes

  ** Light Theme:**
    - Background: #FFFFFF
      - Card: #F5F5F5
        - Text: #000000
          - Border: #E0E0E0
            - Primary: #FF385C

              ** Dark Theme:**
                - Background: #121212
                  - Card: #1E1E1E
                    - Text: #FFFFFF
                      - Border: #333333
                        - Primary: #FF385C

                          ** Component Adaptation:**
                            - All screens support dark mode
                              - Text colors adjust automatically
                                - Background colors change
                                  - Border colors adapt
                                    - Map style changes
                                      - Image overlays adjust

                                        ** System Integration:**
                                          - Detects iOS / Android system theme
                                            - Auto - switches with system
                                            - Overrides available
                                              - Smooth transitions

                                                ** Benefits:**
                                                  - Reduced eye strain
                                                    - Battery saving(OLED screens)
                                                      - User preference
                                                        - Modern UI design

---

## Technical Features

### Offline Support

  ** Cached Data:**
    - Recently viewed properties
      - User profile
        - Favorites list
          - Conversations
          - Search history

            ** Offline Capabilities:**
              - Browse cached properties
                - View saved favorites
                  - Read past messages
                    - View profile

                      ** Sync on Reconnect:**
                        - Queue pending actions
                          - Upload when online
                            - Resolve conflicts
                              - Update local cache

### Performance Optimization

  ** Image Loading:**
    - Progressive loading
      - Image compression
        - Lazy loading
          - Cache management
            - Placeholder images

              ** List Rendering:**
                - FlatList virtualization
                  - Pagination
                  - Infinite scroll
                    - Pull to refresh

                      ** State Management:**
                        - Global state provider
                          - Context API
                            - Local component state
                              - Persistent storage

                                ** Navigation:**
                                  - React Navigation
                                    - Native animations
                                      - Screen preloading
                                        - Navigation persistence

### Analytics & Tracking

  ** User Analytics:**
    - Screen views
      - Button clicks
        - Search queries
          - Booking conversions
            - User flow

              ** Performance Metrics:**
                - App launch time
                  - Screen load time
                    - API response time
                      - Error rates

                        ** Business Metrics:**
                          - Total bookings
                            - Revenue
                            - User growth
                              - Property views
                                - Conversion rates

### Error Handling

  ** Error Boundary:**
    - Catches JavaScript errors
      - Prevents app crashes
        - Shows error screen
          - Log errors
            - Recovery option

              ** API Errors:**
                - Network timeout handling
                  - Retry logic
                    - Error messages
                      - Offline detection
                        - Fallback data

                          ** User Feedback:**
                            - Toast notifications
                              - Error modals
                                - Success messages
                                  - Loading indicators
                                    - Empty states

### Security Features

  ** Data Encryption:**
    - HTTPS for all API calls
      - Encrypted local storage
        - Secure token management
          - Biometric authentication

            ** Authentication:**
              - JWT tokens
                - Token refresh
                  - Session management
                    - Auto - logout

                    ** Privacy:**
                      - Data encryption
                        - Secure storage
                          - No sensitive data logs
                            - GDPR compliance

---

## API Integration

### Base Configuration

  ** Backend URL:** https://homey.webpenter.com/
** API Prefix:** \`/wp-json/jwt-auth/v1/\`

### Authentication Endpoints

  \`\`\`
POST /token                              - Login
POST /token/register                     - Register
POST /token/validate                     - Validate token
POST /token/refresh                      - Refresh token
\`\`\`

### User Endpoints

  \`\`\`
GET  /profile?user_id=\${id}              - Get user profile
POST /profile/update                     - Update profile
POST /token/profile_image                - Upload profile photo
POST /profile/change_password            - Change password
\`\`\`

### Listing Endpoints

  \`\`\`
GET  /get-all-listings                   - Get all properties
GET  /listing/list_detail?list_id=\${id}  - Property details
POST /submit-listing                     - Create listing
PUT  /listing/\${id}                      - Update listing
GET  /listing/get_trending               - Trending properties
POST /filter-listings                    - Filter properties
POST /listing/favorite                   - Add/remove favorite
GET  /listing/favorites?user_id=\${id}    - Get favorites
GET  /listing-amenity-facility           - Get amenities list
\`\`\`

### Booking Endpoints

  \`\`\`
POST /booking/instant_booking            - Instant book
POST /booking/booking_request            - Request to book
GET  /profile/rservation?user_id=\${id}   - Get reservations
POST /profile/confirm_reservation        - Confirm booking (host)
POST /profile/decline_reservation        - Decline booking (host)
POST /profile/cancelled_reservation      - Cancel booking
\`\`\`

### Payment Endpoints

  \`\`\`
GET  /token/stripe_pub                   - Get Stripe key
POST /token/stripe                       - Create payment intent
POST /token/paypal_data                  - Get PayPal config
POST /after-payment                      - Confirm payment
\`\`\`

### Messaging Endpoints

  \`\`\`
GET  /listing/message?user_id=\${id}      - Get conversations
GET  /messages/thread_messages?thread_id=\${id} - Get messages
POST /messages/send_message              - Send message
POST /messages/upload_media              - Upload media
\`\`\`

### Wallet Endpoints

  \`\`\`
GET  /wallet/earnings?user_id=\${id}      - Get earnings
GET  /wallet/payouts?user_id=\${id}       - Get payouts
POST /wallet/request_payout              - Request payout
\`\`\`

### Review Endpoints

  \`\`\`
GET  /listing/get_reviews?listing_id=\${id} - Get reviews
POST /listing/submit_review              - Submit review
POST /review/respond                     - Respond to review
\`\`\`

### Notification Endpoints

  \`\`\`
POST /push/v1/register-token             - Register device
POST /push/v1/send-notification          - Send notification
GET  /push/v1/notifications?user_id=\${id} - Get notifications
\`\`\`

---

## Dependencies

### Core Packages

  ** React Native Ecosystem:**
    - \`react-native\`: 0.77.8
      - \`react\`: 18.3.1
        - \`expo\`: ~53.0.23
          - \`typescript\`: 5.3.3

            ** Navigation:**
              - \`@react-navigation/native\`: 6.1.17
                - \`@react-navigation/stack\`: 6.3.29
                  - \`@react-navigation/bottom-tabs\`: 6.5.20
                    - \`@react-navigation/drawer\`: 6.6.15

                      ** UI Components:**
                        - \`react-native-paper\`: Material Design components
                          - \`expo-linear-gradient\`: Gradient backgrounds
                            - \`react-native-snap-carousel\`: Image carousels
                              - \`react-native-calendars\`: Calendar picker
                                - \`rn-range-slider\`: Price range slider

                                  ** Maps & Location:**
                                    - \`react-native-maps\`: 1.20.1
                                      - \`expo-location\`: 18.1.6
                                        - \`react-native-geolocation-service\`: Location services

                                          ** Authentication:**
                                            - \`@react-native-google-signin/google-signin\`: 16.1.1
                                              - \`expo-local-authentication\`: 17.0.7
                                                - \`expo-auth-session\`: 6.2.1

                                                  ** Storage:**
                                                    - \`expo-secure-store\`: 14.2.3
                                                      - \`@react-native-async-storage/async-storage\`: Async storage

                                                        ** Payments:**
                                                          - \`@stripe/stripe-react-native\`: 0.45.0
                                                            - PayPal SDK integration

                                                              ** Media:**
                                                                - \`expo-image-picker\`: 16.1.4
                                                                  - \`expo-image-manipulator\`: 14.0.7
                                                                    - \`expo-document-picker\`: 14.0.8
                                                                      - \`expo-file-system\`: 18.1.11

                                                                        ** Notifications:**
                                                                          - \`expo-notifications\`: 0.31.4
                                                                            - \`expo-device\`: 7.1.4

                                                                              ** Utilities:**
                                                                                - \`axios\`: 0.27.2
                                                                                  - \`moment\`: 2.30.1
                                                                                    - \`react-i18next\`: 15.5.1
                                                                                      - \`react-hook-form\`: 7.51.2

---

## Future Features(Roadmap)

### Planned Features

1. ** Social Features **
  - Connect with friends
  - Share trips
    - Travel together
      - Group bookings

2. ** Advanced Search **
  - AI - powered recommendations
    - Visual search
      - Voice search
        - Smart filters

3. ** Experiences **
  - Local activities
    - Tours and attractions
      - Restaurant bookings
        - Event tickets

4. ** Loyalty Program **
  - Reward points
    - Member benefits
      - Referral program
        - VIP status

5. ** Enhanced Communication **
  - Video calls
    - Voice calls
      - Translation in chat
      - Scheduled messages

6. ** Smart Home Integration **
  - Smart lock integration
    - Temperature control
      - Keyless entry
        - IoT device control

7. ** AR / VR Features **
  - Virtual property tours
    - AR room preview
      - 360° photos
        - Virtual staging

8. ** AI Assistant **
  - Chatbot support
    - Smart suggestions
      - Trip planning
        - Price predictions

---

## Support & Documentation

### Help Resources

  ** In - App Help:**
    - Profile → Help Center
      - FAQs
      - Contact support
        - Video tutorials
          - User guides

            ** External Resources:**
              - Website: https://your-website.com
- Email: support @webpenter.com
- Documentation: All.md files in \`/documentation/\`

### Reporting Issues

  ** Bug Reports:**
    - Profile → Report a Problem
      - Describe issue
        - Upload screenshots
          - Submit report

            ** Feature Requests:**
              - Contact support
                - Provide details
                  - Vote on requests

---

** Last Updated:** 2026-01 -08
  ** Version:** 3.0.1
    ** For:** BookHere Mobile App(iOS & Android)

This comprehensive guide covers all features and functions in the BookHere mobile application.For technical implementation details, see other documentation files.

---

**© 2026 WebPenter.All rights reserved.**


`},installation:{title:"Installation",icon:rS,tags:["setup","terminal","wordpress"],content:`
# Installation Guide - BookHere Mobile App

Complete step-by-step installation guide for setting up the BookHere property rental mobile application.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [System Setup](#system-setup)
3. [Project Installation](#project-installation)
4. [Backend Setup](#backend-setup)
5. [Third-Party Services Configuration](#third-party-services-configuration)
6. [Running the App](#running-the-app)
7. [Troubleshooting](#troubleshooting)

---

## 📦 What You Need - Complete Setup Guide

**CONNECTOR PLUGIN INCLUDED!** 🎉

This package includes a **Homey connector plugin** that bridges the mobile app with Homey theme.

**What's Included in This Package:**

1. ✅ **Mobile App** (iOS & Android) - What this guide covers below
2. ✅ **Homey Connector Plugin** - Covered in [Backend Setup](#backend-setup) section

**What You Need to Purchase Separately:**
- **Homey WordPress Theme** (~$59-79 from ThemeForest)
  - Search "Homey" on ThemeForest.net
  - Provides the backend functionality (property management, bookings, etc.)
  - Our included plugin connects the mobile app to it

**What You Need to Provide:**
- WordPress 6.0+ (FREE from WordPress.org)
- Web hosting ($5-20/month for shared hosting - works perfectly)
- Domain name (optional but recommended)

**Installation Order:**

**Option A: Backend First (Recommended)**
1. Set up WordPress + Homey theme (30 mins) → [Skip to Backend Setup](#backend-setup)
2. Install our connector plugin (10 mins)
3. Install mobile app (30 mins) → Continue below
4. Total time: ~70 mins ✅

**Option B: Mobile App First**
1. Install mobile app (30 mins) → Continue below
2. Set up WordPress + Homey theme (30 mins) → [Backend Setup](#backend-setup)
3. Install connector plugin (10 mins)
4. Connect them together (10 mins)

**Quick Start Summary:**
- WordPress + Homey Theme + Our Connector Plugin = Complete solution ✅
- Connector plugin included (saves 40-80 hours of API development!) ✅
- Homey theme must be purchased separately (~$59-79) ⚠️

---

## Prerequisites

Before you begin, ensure you have the following installed on your development machine:

### Required Software

#### For All Platforms

| Software | Version | Download Link |
|----------|---------|---------------|
| Node.js | 18.x or higher | https://nodejs.org/ |
| npm | 8.x or higher | Included with Node.js |
| Git | Latest | https://git-scm.com/ |
| Code Editor | Any | VS Code recommended: https://code.visualstudio.com/ |

#### For iOS Development (macOS Only)

| Software | Version | Download Link |
|----------|---------|---------------|
| macOS | Catalina or higher | - |
| Xcode | 14.x or higher | Mac App Store |
| Xcode Command Line Tools | Latest | \`xcode- select--install\` |
| CocoaPods | Latest | \`sudo gem install cocoapods\` |

#### For Android Development

| Software | Version | Download Link |
|----------|---------|---------------|
| Android Studio | Latest | https://developer.android.com/studio |
| Android SDK | API Level 21+ | Included with Android Studio |
| JDK | 11 or higher | https://adoptium.net/ |

### Account Requirements

Create accounts on the following platforms (free unless noted):

- [ ] **Expo Account** - https://expo.dev (Free)
- [ ] **Google Cloud Platform** - https://console.cloud.google.com (Free tier available)
- [ ] **Stripe Account** - https://stripe.com (Free, transaction fees apply)
- [ ] **Apple Developer** - https://developer.apple.com ($99/year for App Store)
- [ ] **Google Play Developer** - https://play.google.com/console ($25 one-time for Play Store)

---

## System Setup

### Step 1: Install Node.js and npm

1. **Download Node.js**
   - Visit https://nodejs.org/
   - Download the LTS (Long Term Support) version
   - Run the installer and follow the prompts

2. **Verify Installation**
   \`\`\`bash
node --version
   # Should output: v18.x.x or higher

npm --version
   # Should output: 8.x.x or higher
\`\`\`

### Step 2: Install Expo CLI (Optional but Recommended)

\`\`\`bash
npm install -g expo-cli
\`\`\`

Verify installation:
\`\`\`bash
expo --version
\`\`\`

### Step 3: Install EAS CLI (For Building)

\`\`\`bash
npm install -g eas-cli
\`\`\`

Verify installation:
\`\`\`bash
eas --version
\`\`\`

### Step 4: iOS Setup (macOS Only)

1. **Install Xcode**
   - Open Mac App Store
   - Search for "Xcode"
   - Click "Get" and wait for installation (large download, ~10GB)

2. **Install Xcode Command Line Tools**
\`\`\`bash
xcode-select --install
\`\`\`

3. **Install CocoaPods**
\`\`\`bash
sudo gem install cocoapods
\`\`\`

4. **Accept Xcode License**
\`\`\`bash
sudo xcodebuild -license accept
\`\`\`

### Step 5: Android Setup

1. **Install Android Studio**
   - Download from https://developer.android.com/studio
   - Run the installer
   - Follow the setup wizard
   - Install the Android SDK, Android SDK Platform, and Android Virtual Device

2. **Set Environment Variables**

   **On macOS/Linux** - Add to \`~/.bash_profile\` or \`~/.zshrc\`:
   \`\`\`bash
   export ANDROID_HOME = $HOME / Library / Android / sdk
   export PATH = $PATH: $ANDROID_HOME/emulator
   export PATH = $PATH: $ANDROID_HOME/platform-tools
  \`\`\`

   **On Windows** - Add to System Environment Variables:
   \`\`\`bash
ANDROID_HOME = C: UsersYourUsernameAppDataLocalAndroidSdk
  \`\`\`

3. **Reload Environment**
   \`\`\`bash
   source ~/.zshrc  # or source ~/.bash_profile
  \`\`\`

4. **Verify Android Setup**
   \`\`\`bash
adb --version
  \`\`\`

---

## Project Installation

### Step 1: Extract the Package

\`\`\`bash
# Navigate to your projects directory
cd ~/Projects

# Extract the downloaded zip file
unzip bookhere-mobile-app.zip

# Navigate to the project folder
cd bookhere-mobile-app
  \`\`\`

### Step 2: Install Dependencies

\`\`\`bash
# Using npm
npm install

# OR using Yarn (if you prefer)
yarn install
  \`\`\`

This will install all required packages from \`package.json\`. The installation may take 5-10 minutes depending on your internet connection.

### Step 3: Create Environment File

Create a \`.env\` file in the root directory:

\`\`\`bash
# Copy the example file
cp .env.example .env

# OR create a new file
touch .env
  \`\`\`

Edit \`.env\` and add your configuration:

\`\`\`env
# Google OAuth Configuration
EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID = your_ios_client_id_here
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID = your_web_client_id_here
\`\`\`

**Note:** We'll configure these values in the next section.

### Step 4: Configure API URL

Open \`src/ApiUrl.js\` and update the API URL:

\`\`\`javascript
export default {
  api_url: "https://your-backend-domain.com/"
}
\`\`\`

**Important:** Replace https://your-backend-domain.com/ with your actual WordPress backend URL (must end with a slash \`/\`).

---

## Backend Setup

BookHere requires a WordPress backend with the Homey theme installed.

### Option 1: Using Existing Homey Backend

If you already have a WordPress site with Homey theme:

1. ** Ensure WordPress is Updated **
  - WordPress 6.0 or higher recommended

2. ** Verify Homey Theme is Active **
  - Go to WordPress "Admin" → "Appearance" → "Themes"
    - Ensure Homey theme is activated

3. ** Enable REST API **
  - The REST API should be enabled by default
- Test by visiting: \`https://your-domain.com/wp-json/\`
  - You should see JSON response

4. ** Configure CORS(if needed)**

  Add to \`wp-config.php\` or use a plugin:
\`\`\`php
   header('Access-Control-Allow-Origin: *');
   header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
   header('Access-Control-Allow-Headers: Content-Type, Authorization');
\`\`\`

5. ** Test API Endpoints **

  Test these key endpoints in your browser or Postman:
- \`https://your-domain.com/wp-json/jwt-auth/v1/token\`(POST)
  - \`https://your-domain.com/wp-json/jwt-auth/v1/homey/search\`(GET)

### Option 2: Fresh WordPress + Homey Installation

1. ** Install WordPress **
  - Download from https://wordpress.org/download/
  - Upload to your hosting server
  - Complete the 5 - minute installation

2. ** Install Homey Theme **
  - Purchase Homey theme from ThemeForest
  - Upload and activate the theme
  - Complete Homey setup wizard

3. ** Install Required Plugins **
  - Homey Custom Post Types
  - JWT Authentication for WP REST API
  - Any other plugins required by Homey theme

4. ** Configure Permalinks **
  - Go to "Settings" → "Permalinks"
  - Select "Post name" structure
  - Save changes

### Backend Configuration Checklist

  - [ ] WordPress installed and running
  - [ ] Homey theme activated
  - [ ] Required plugins installed
  - [ ] Permalinks configured
  - [ ] REST API accessible
  - [ ] HTTPS enabled (SSL certificate)
  - [ ] CORS configured (if needed)
  - [ ] Test user accounts created

---

## Third - Party Services Configuration

### 1. Google Cloud Platform Setup(Maps & Sign - In)

#### A.Create Google Cloud Project

1. Go to https://console.cloud.google.com/
2. Click "Select a Project" → "New Project"
3. Enter project name: "BookHere"
4. Click "Create"

#### B.Enable APIs

1. Go to "APIs & Services" → "Library"
2. Search and enable these APIs:
   - ** Maps SDK for Android **
   - ** Maps SDK for iOS **
   - ** Places API **
   - ** Geocoding API **

#### C.Create API Credentials

  ** For Google Maps:**

    1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "API Key"
3. Name it "Google Maps API Key"
4. Click "Restrict Key" and select:
  - Maps SDK for Android
  - Maps SDK for iOS
  - Places API
  - Geocoding API
5. Copy the API key

  ** For Google Sign - In:**

    1. Go to "APIs & Services" → "OAuth consent screen"
2. Select "External" → Click "Create"
3. Fill in:
- App name: BookHere
  - User support email: "your@email.com"
- Developer contact: "your@email.com"
4. Click "Save and Continue"

5. Go to "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"

6. ** Create iOS Client ID:**
  - Application type: iOS
    - Name: BookHere iOS
      - Bundle ID: \`com.yourcompany.bookhere\`(use your actual bundle ID)
        - Click "Create"
          - Copy the "Client ID"

7. ** Create Web Client ID:**
  - Application type: Web application
    - Name: BookHere Web
      - Click "Create"
        - Copy the "Client ID"

#### D.Update Configuration

1. ** Update\`.env\` file:**
  \`\`\`env
   EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID=YOUR_IOS_CLIENT_ID_HERE
   EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=YOUR_WEB_CLIENT_ID_HERE
   \`\`\`

2. ** Update\`app.json\`:**
  \`\`\`json
   {
     "expo": {
       "ios": {
         "config": {
           "googleMapsApiKey": "YOUR_GOOGLE_MAPS_API_KEY"
         }
       },
       "android": {
         "config": {
           "googleMaps": {
             "apiKey": "YOUR_GOOGLE_MAPS_API_KEY"
           }
         }
       }
     }
   }
   \`\`\`

### 2. Stripe Setup(Payment Processing)

1. ** Create Stripe Account **
  - Go to https://stripe.com
- Click "Sign up"
  - Complete the registration

2. ** Get API Keys **
  - Go to Developers → API keys
    - Copy your "Publishable key"(starts with \`pk_test_\` for test mode)
      - Copy your "Secret key"(starts with \`sk_test_\` for test mode)

        3. ** Configure in App **

          Open\`src/screens/payment/stripe/config/helpers.ts\` and update:
\`\`\`typescript
   const publishableKey = "pk_test_YOUR_PUBLISHABLE_KEY_HERE";
   \`\`\`

4. ** Test Mode vs Live Mode **
  - Use test keys for development
    - Switch to live keys before production release
      - Never commit secret keys to version control

### 3. Expo Account Setup(For Builds)

1. ** Create Expo Account **
  - Go to https://expo.dev
- Click "Sign up"
  - Complete registration

2. ** Login via CLI **
  \`\`\`bash
   eas login
   \`\`\`

3. ** Create a Project **
  \`\`\`bash
   eas build:configure
   \`\`\`

4. ** Copy Project ID **
  - Go to https://expo.dev
- Open your project
  - Copy the Project ID

5. ** Update\`app.json\`:**
  \`\`\`json
   {
     "expo": {
       "extra": {
         "eas": {
           "projectId": "YOUR_PROJECT_ID_HERE"
         }
       }
     }
   }
   \`\`\`

### 4. Firebase Setup(Optional - for Enhanced Push Notifications)

  1. Go to https://console.firebase.google.com
2. Click "Add project"
3. Enter project name: "BookHere"
4. Complete setup wizard

  ** For Android:**
    1. Click "Add app" → "Android"
2. Enter package name: \`com.yourcompany.bookhere\`
3. Download\`google-services.json\`
4. Place in project root

  ** For iOS:**
    1. Click "Add app" → "iOS"
2. Enter bundle ID: \`com.yourcompany.bookhere\`
3. Download\`GoogleService-Info.plist\`
4. Place in project root

---

## Running the App

### Development Mode

1. ** Start Development Server **
  \`\`\`bash
   npm start
   \`\`\`

   This will:
- Start Metro bundler
  - Open Expo Dev Tools in browser
    - Display QR code for testing

2. ** Run on iOS Simulator(macOS only) **
  \`\`\`bash
   npm run ios
   \`\`\`

   Or press\`i\` in the terminal after running\`npm start\`

3. ** Run on Android Emulator **
  \`\`\`bash
   npm run android  
   \`\`\`

   Or press\`a\` in the terminal after running\`npm start\`

### Testing on Physical Device

#### Using Expo Go(Easiest for Testing)

  1. ** Install Expo Go App **
    - iOS: https://apps.apple.com/app/expo-go/id982107779
- Android: https://play.google.com/store/apps/details?id=host.exp.exponent

2. ** Scan QR Code **
  - Run\`npm start\`
  - Scan the QR code with:
  - iOS: Camera app
    - Android: Expo Go app

      ** Note:** Expo Go has limitations with custom native modules.For full testing, use development builds.

#### Using Development Build(Recommended)

1. ** Build Development Client **
  \`\`\`bash
   # For iOS
   eas build --profile development --platform ios

   # For Android
   eas build --profile development --platform android
   \`\`\`

2. ** Install on Device **
  - Download the build from EAS dashboard
    - Install on your device

3. ** Run Development Server **
  \`\`\`bash
   npm start --dev-client
   \`\`\`

### Common Startup Issues

  ** Metro bundler error:**
    \`\`\`bash
npm start --clear
\`\`\`

    ** iOS build error:**
      \`\`\`bash
cd ios && rm -rf build && cd ..
npx expo run:ios
\`\`\`

      ** Android build error:**
        \`\`\`bash
cd android && ./gradlew clean && cd ..
npx expo run:android
\`\`\`

---

## Troubleshooting

### Installation Issues

  ** Problem:** \`npm install\` fails with errors

  ** Solution:**
    \`\`\`bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
\`\`\`

---

** Problem:** "Cannot find module" errors

  ** Solution:**
    \`\`\`bash
# Ensure all dependencies are installed
npm install

# If using CocoaPods (iOS)
cd ios && pod install && cd ..
\`\`\`

---

** Problem:** Xcode build fails

  ** Solution:**
    1. Open Xcode
2. Clean Build Folder: "Product" → "Clean Build Folder"
3. Delete Derived Data
4. Try building again

---

** Problem:** Android build fails with "SDK not found"

** Solution:**
  1. Verify "ANDROID_HOME" environment variable
2. Open Android Studio
3. Go to SDK Manager
4. Ensure Android SDK is installed

---

### Runtime Issues

  ** Problem:** App shows blank white screen

    ** Solution:**
      \`\`\`bash
# Clear cache and restart
npm start --clear
\`\`\`

---

** Problem:** "Network request failed" errors

  ** Solution:**
    1. Verify backend URL in \`src/ApiUrl.js\`
2. Ensure backend is accessible
3. Check CORS configuration
4. Test API endpoints in browser

---

** Problem:** Maps not showing

  ** Solution:**
    1. Verify Google Maps API key in \`app.json\`
2. Enable Maps SDK in Google Cloud Console
3. Ensure billing is enabled on Google Cloud project
4. Rebuild the app

---

** Problem:** Google Sign - In not working

  ** Solution:**
    1. Verify client IDs in \`.env\`
2. Ensure bundle ID / package name matches Google Cloud Console
3. Rebuild the app after changing\`.env\`

---

** Problem:** Stripe payments failing

  ** Solution:**
    1. Verify publishable key in helpers.ts
2. Ensure using test mode for development
3. Check Stripe dashboard for error logs

---

## Post - Installation Checklist

Before proceeding to customization and deployment:

- [ ] App runs on iOS simulator / device
- [ ] App runs on Android emulator / device
- [ ] Backend API connection working
- [ ] Google Maps displaying correctly
- [ ] Google Sign-In functional
- [ ] Stripe payment test successful
- [ ] Push notifications working
- [ ] All screens navigable
- [ ] No console errors
- [ ] Image uploads working
- [ ] Messaging system functional

---

## Next Steps

After successful installation:

1. **Read Configuration Guide** - [CONFIGURATION](./configuration)
   - Customize app branding
   - Configure advanced settings
   - Set up payment webhooks

2. **Read Customization Guide** - [CUSTOMIZATION](./customization)
   - Change theme colors
   - Update app icon and splash screen
   - Customize UI components

3. **Test All Features** - [FEATURES](./features)
   - Test guest features
   - Test host features
   - Test payment flows

4. ** Build for Production **
  - iOS: \`eas build --platform ios\`
    - Android: \`eas build --platform android\`

---

## Getting Help

If you encounter issues during installation:

1. ** Check Documentation **
  - Review this guide carefully
    - Check FAQ.md for common questions

2. ** Check Error Messages **
  - Read error messages carefully
    - Search for error messages online

3. ** Contact Support **
  - Email: support @webpenter.com
- Include: purchase code, error messages, screenshots
  - Describe steps to reproduce

---

** Installation Complete! ** 🎉

You're now ready to start customizing and building your property rental app.

  `},configuration:{title:"Configuration",icon:$0,tags:["env","api","stripe"],content:`
# Configuration Guide - BookHere Mobile App

Complete configuration guide for setting up and customizing BookHere mobile application.

---

## Table of Contents

1. [App Configuration](#app-configuration)
2. [Backend Integration](#backend-integration)
3. [Google Services Setup](#google-services-setup)
4. [Payment Gateway Configuration](#payment-gateway-configuration)
5. [Push Notifications Setup](#push-notifications-setup)
6. [Authentication Configuration](#authentication-configuration)
7. [Maps Configuration](#maps-configuration)
8. [App Branding](#app-branding)
9. [Build Configuration](#build-configuration)
10. [Environment Variables](#environment-variables)

---

## App Configuration

### 1. Basic App Settings (app.json)

The \`app.json\` file is the main configuration file for your Expo/React Native app.

#### Update App Identity

\`\`\`json
{
  "expo": {
    "name": "Your App Name",           // Display name
    "slug": "your-app-slug",            // URL-friendly name
    "version": "1.0.0",                 // App version
    "orientation": "portrait",          // Screen orientation
    "userInterfaceStyle": "automatic",  // Light/dark mode support

    "icon": "./src/assets/images/icon.png",  // App icon (1024x1024px)

    "splash": {
      "image": "./src/assets/book-here-splash-screen/4.jpg",
      "resizeMode": "cover",
      "backgroundColor": "#ffffff"
    }
  }
}
\`\`\`

#### Update Bundle Identifiers

**For iOS:**
\`\`\`json
{
  "expo": {
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.yourcompany.yourapp",
      "buildNumber": "1"
    }
  }
}
\`\`\`

**For Android:**
\`\`\`json
{
  "expo": {
    "android": {
      "package": "com.yourcompany.yourapp",
      "versionCode": 1,
      "adaptiveIcon": {
        "foregroundImage": "./src/assets/images/icon.png",
        "backgroundColor": "#FFFFFF"
      }
    }
  }
}
\`\`\`

**Important:**
- Bundle identifier and package name must be unique (use your domain reversed)
- Format: \`com.yourcompany.appname\`
- Once published, cannot be changed
- Must match identifiers in Google Cloud Console and Apple Developer Account

#### Update App Scheme

\`\`\`json
{
  "expo": {
    "scheme": "yourapp"  // Deep linking scheme
  }
}
\`\`\`

This enables deep linking: \`yourapp://screen/details\`

---

## Backend Integration

### 1. Configure API URL

Edit \`src/ApiUrl.js\`:

\`\`\`javascript
export default {
    api_url: "https://yourdomain.com/"
}
\`\`\`

  ** Important Notes:**
    - Must be HTTPS in production
      - Must end with trailing slash\`/\`
        - Should be your WordPress site URL
          - Test the URL in browser first

            ** Example:**
              \`\`\`javascript
// Development
api_url: "https://dev.bookhere.com/"

// Production
api_url: "https://bookhere.com/"
\`\`\`

### 2. Backend API Requirements

Your WordPress backend must have these endpoints:

#### Authentication Endpoints
  \`\`\`
POST /wp-json/jwt-auth/v1/token
POST /wp-json/jwt-auth/v1/token/validate
POST /wp-json/jwt-auth/v1/user/register
\`\`\`

#### Property / Listing Endpoints
  \`\`\`
GET  /wp-json/jwt-auth/v1/homey/search
GET  /wp-json/jwt-auth/v1/listing/{id}
POST /wp-json/jwt-auth/v1/listing/add
PUT  /wp-json/jwt-auth/v1/listing/{id}
DELETE /wp-json/jwt-auth/v1/listing/{id}
\`\`\`

#### Booking Endpoints
  \`\`\`
GET  /wp-json/jwt-auth/v1/booking/list
POST /wp-json/jwt-auth/v1/booking/create
PUT  /wp-json/jwt-auth/v1/booking/{id}
\`\`\`

#### Message Endpoints
  \`\`\`
GET  /wp-json/jwt-auth/v1/messages
POST /wp-json/jwt-auth/v1/messages/send
\`\`\`

### 3. CORS Configuration

If you encounter CORS errors, add to your WordPress \`wp-config.php\`:

\`\`\`php
// Enable CORS for mobile app
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');
\`\`\`

Or use a plugin like "WP CORS" for easier management.

### 4. Test Backend Connection

  \`\`\`bash
# Test API is accessible
curl https://yourdomain.com/wp-json/

# Test authentication endpoint
curl -X POST https://yourdomain.com/wp-json/jwt-auth/v1/token   -H "Content-Type: application/json"   -d '{"username":"testuser","password":"testpass"}'
\`\`\`

---

## Google Services Setup

### 1. Google Cloud Console Configuration

#### Create Project
1. Go to https://console.cloud.google.com/
2. Create new project: "BookHere"(or your app name)
3. Note the Project ID

#### Enable Required APIs

Enable these APIs in "APIs & Services" → "Library":

- ✅ Maps SDK for Android
  - ✅ Maps SDK for iOS
    - ✅ Places API
      - ✅ Geocoding API
        - ✅ Geolocation API

#### Create API Key for Maps

1. Go to "Credentials" → "Create Credentials" → "API Key"
2. Name: "Google Maps API Key"
3. Click "Edit API key"
4. Under "API restrictions", select:
- Maps SDK for Android
  - Maps SDK for iOS
    - Places API
    - Geocoding API
5.(Optional) Add application restrictions for security
6. Copy the API key

### 2. Google Sign - In Setup

#### Configure OAuth Consent Screen

1. Go to "OAuth consent screen"
2. Select "External"(or "Internal" if G Suite)
3. Fill required fields:
\`\`\`
   App name: BookHere
   User support email: support@yourdomain.com
   Developer contact: dev@yourdomain.com
   \`\`\`
4. Add scopes(optional):
- \`userinfo.email\`
  - \`userinfo.profile\`
5. Save

#### Create OAuth 2.0 Credentials

  ** iOS Client ID:**
    1. "Create Credentials" → "OAuth 2.0 Client ID"
2. Application type: ** iOS **
  3. Name: "BookHere iOS"
4. Bundle ID: \`com.yourcompany.yourapp\`(same as app.json)
5. Click "Create"
6. Copy the ** Client ID **

** Web Client ID(required for Google Sign - In):**
  1. "Create Credentials" → "OAuth 2.0 Client ID"
2. Application type: ** Web application **
  3. Name: "BookHere Web"
4. No need to add URIs
5. Click "Create"
6. Copy the ** Client ID **

** Android(Automatic):**
  - Google Sign - In library handles this automatically
    - Uses SHA - 1 fingerprint from your keystore

### 3. Update App Configuration

#### Update \`.env\`:
\`\`\`env
EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID=YOUR_IOS_CLIENT_ID_HERE.apps.googleusercontent.com
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=YOUR_WEB_CLIENT_ID_HERE.apps.googleusercontent.com
\`\`\`

#### Update \`app.json\`:
\`\`\`json
{
  "expo": {
    "ios": {
      "config": {
        "googleMapsApiKey": "YOUR_GOOGLE_MAPS_API_KEY"
      },
      "bundleIdentifier": "com.yourcompany.yourapp",
      "googleServicesFile": "./GoogleService-Info.plist"
    },
    "android": {
      "config": {
        "googleMaps": {
          "apiKey": "YOUR_GOOGLE_MAPS_API_KEY"
        }
      },
      "package": "com.yourcompany.yourapp",
      "googleServicesFile": "./google-services.json"
    }
  }
}
\`\`\`

### 4. Google Services Files(Optional - For Firebase)

  ** For iOS ** - \`GoogleService-Info.plist\`:
1. Go to https://console.firebase.google.com
2. Create project or use existing
3. Add iOS app with your bundle ID
4. Download\`GoogleService-Info.plist\`
5. Place in project root
6. Reference in \`app.json\` as shown above

  ** For Android ** - \`google-services.json\`:
1. In same Firebase project
2. Add Android app with your package name
3. Download\`google-services.json\`
4. Place in project root
5. Reference in \`app.json\` as shown above

---

## Payment Gateway Configuration

### 1. Stripe Configuration

#### Get Stripe Keys

1. Sign up at https://stripe.com
2. Go to Developers → API keys
3. Copy keys:
   - ** Test Publishable Key **: \`pk_test_...\`
  - ** Test Secret Key **: \`sk_test_...\`
    - ** Live Publishable Key **: \`pk_live_...\`
      - ** Live Secret Key **: \`sk_live_...\`

#### Configure in App

Edit \`src/screens/payment/stripe/config/helpers.ts\`:

\`\`\`typescript
// For Development (Test Mode)
const publishableKey = "pk_test_YOUR_TEST_KEY_HERE";

// For Production (Live Mode)
// const publishableKey = "pk_live_YOUR_LIVE_KEY_HERE";

export const initializeStripe = () => {
  return initStripe({
    publishableKey,
    merchantIdentifier: "merchant.com.yourcompany.yourapp", // For Apple Pay
    urlScheme: "yourapp", // Same as app.json scheme
  });
};
\`\`\`

#### Apple Pay Configuration(iOS)

1. Create Merchant ID in Apple Developer Console:
- Go to Certificates, IDs & Profiles → Identifiers
  - Click + → Merchant IDs
    - Register: \`merchant.com.yourcompany.yourapp\`

2. Enable in Stripe Dashboard:
- Go to Settings → Payment Methods
  - Enable Apple Pay
    - Add domain verification

3. Update \`app.json\`:
\`\`\`json
{
  "expo": {
    "ios": {
      "entitlements": {
        "com.apple.developer.in-app-payments": [
          "merchant.com.yourcompany.yourapp"
        ]
      }
    }
  }
}
\`\`\`

#### Google Pay Configuration(Android)

1. Enable in Stripe Dashboard:
- Go to Settings → Payment Methods
  - Enable Google Pay

2. No additional app configuration needed

#### Webhook Setup(Backend)

Configure Stripe webhooks in your WordPress backend:
\`\`\`
Webhook URL: https://yourdomain.com/wp-json/stripe/webhook
Events to listen: payment_intent.succeeded, payment_intent.payment_failed
\`\`\`

### 2. PayPal Configuration

Edit PayPal component file:

\`\`\`javascript
const PayPalButton = () => {
  return (
    <PayPalButtons
      createOrder={(data, actions) => {
        return actions.order.create({
          purchase_units: [{
            amount: {
              value: "AMOUNT_HERE",
              currency_code: "USD"
            }
          }]
        });
      }}
      onApprove={(data, actions) => {
        // Handle successful payment
      }}
    />
  );
};
\`\`\`

### 3. Thai QR Payment

Configure in the Thai QR payment component with your QR payment provider credentials.

---

## Push Notifications Setup

### 1. Expo Push Notifications

#### Configure in \`app.json\`:

\`\`\`json
{
  "expo": {
    "plugins": [
      [
        "expo-notifications",
        {
          "icon": "./src/assets/images/icon.png",
          "defaultChannel": "default",
          "sounds": []
        }
      ]
    ]
  }
}
\`\`\`

### 2. iOS Push Notifications(APNs)

1. ** Create APNs Key in Apple Developer Console:**
  - Go to Certificates, IDs & Profiles → Keys
    - Click + to create new key
      - Enable "Apple Push Notifications service (APNs)"
        - Download the \`.p8\` key file
          - Note the Key ID

2. ** Upload to Expo:**
  \`\`\`bash
   eas credentials
   \`\`\`
   Follow prompts to upload APNs key

### 3. Android Push Notifications(FCM)

1. ** Get Server Key from Firebase:**
  - Go to Firebase Console
    - Project Settings → Cloud Messaging
      - Copy "Server key"

2. ** Configure in Expo:**
  \`\`\`bash
   eas credentials
   \`\`\`
   Follow prompts to add FCM server key

### 4. Test Push Notifications

Use Expo's push notification tool:
  \`\`\`bash
expo push:send --to YOUR_EXPO_PUSH_TOKEN --title "Test" --body "Hello!"
\`\`\`

---

## Authentication Configuration

### 1. JWT Token Configuration

The app uses JWT tokens for authentication.Ensure your WordPress backend has JWT Authentication plugin configured.

In WordPress \`wp-config.php\`:
\`\`\`php
define('JWT_AUTH_SECRET_KEY', 'your-secret-key-here-change-this');
define('JWT_AUTH_CORS_ENABLE', true);
\`\`\`

### 2. Biometric Authentication

Already configured via plugin in \`app.json\`:

\`\`\`json
{
  "expo": {
    "plugins": [
      [
        "expo-local-authentication",
        {
          "faceIDPermission": "Allow $(PRODUCT_NAME) to use Face ID for secure login."
        }
      ]
    ],
    "ios": {
      "infoPlist": {
        "NSFaceIDUsageDescription": "Allow BookHere to use Face ID for secure login."
      }
    },
    "android": {
      "permissions": [
        "android.permission.USE_BIOMETRIC",
        "android.permission.USE_FINGERPRINT"
      ]
    }
  }
}
\`\`\`

### 3. Session Management

Configure token expiration in your backend:
\`\`\`php
// Token expires in 7 days
define('JWT_AUTH_EXPIRE_TIME', 7 * DAY_IN_SECONDS);
\`\`\`

---

## Maps Configuration

### 1. Google Maps API Key

Already covered in Google Services Setup.Key should be in \`app.json\`:

\`\`\`json
{
  "expo": {
    "ios": {
      "config": {
        "googleMapsApiKey": "YOUR_API_KEY"
      }
    },
    "android": {
      "config": {
        "googleMaps": {
          "apiKey": "YOUR_API_KEY"
        }
      }
    }
  }
}
\`\`\`

### 2. Map Customization

Edit map styles in the code:

\`\`\`javascript
// Custom map style (optional)
const mapStyle = [
  {
    "featureType": "poi",
    "elementType": "labels",
    "stylers": [{ "visibility": "off" }]
  }
];

<MapView
  customMapStyle={mapStyle}
  // other props
/>
\`\`\`

### 3. Default Map Region

Configure default map region in code:

\`\`\`javascript
const defaultRegion = {
  latitude: 37.78825,      // Your default latitude
  longitude: -122.4324,    // Your default longitude
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};
\`\`\`

---

## App Branding

### 1. App Name

Update in multiple locations:

** \`app.json\`:**
  \`\`\`json
{
  "expo": {
    "name": "Your App Name"
  }
}
\`\`\`

  ** \`package.json\`:**
    \`\`\`json
{
  "name": "yourappname"
}
\`\`\`

### 2. App Icon

1. Create 1024x1024px PNG icon
2. Replace\`src/assets/images/icon.png\`
3. Icon should have:
- No transparency(use background)
  - No rounded corners(iOS handles this)
    - High resolution
      - Simple, recognizable design

### 3. Splash Screen

1. Create splash screen image(recommended: 2048x2048px)
2. Replace\`src/assets/book-here-splash-screen/4.jpg\`
3. Update \`app.json\`:

\`\`\`json
{
  "expo": {
    "splash": {
      "image": "./src/assets/book-here-splash-screen/4.jpg",
      "resizeMode": "cover",        // or "contain"
      "backgroundColor": "#ffffff"  // background color
    }
  }
}
\`\`\`

### 4. Theme Colors

Edit \`src/constants/Colors.ts\`:

\`\`\`typescript
export default {
  primary: '#YOUR_PRIMARY_COLOR',
  secondary: '#YOUR_SECONDARY_COLOR',
  light: {
    background: '#FFFFFF',
    text: '#000000',
    // ... other light theme colors
  },
  dark: {
    background: '#000000',
    text: '#FFFFFF',
    // ... other dark theme colors
  }
}
\`\`\`

---

## Build Configuration

### 1. EAS Build Configuration(\`eas.json\`)

  \`\`\`json
{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal"
    },
    "preview": {
      "distribution": "internal",
      "android": {
        "buildType": "apk"
      },
      "ios": {
        "simulator": true
      }
    },
    "production": {
      "android": {
        "buildType": "app-bundle"
      },
      "ios": {
        "simulator": false
      }
    }
  },
  "submit": {
    "production": {}
  }
}
\`\`\`

### 2. Android Build Settings

For smaller APK size, ProGuard is already configured in:
\`android/gradle.properties\`

### 3. iOS Build Settings

Build number increments automatically with EAS.Manual control in \`app.json\`:

\`\`\`json
{
  "expo": {
    "ios": {
      "buildNumber": "1"
    }
  }
}
\`\`\`

---

## Environment Variables

### Development vs Production

Create multiple \`.env\` files:

** \`.env.development\`:**
  \`\`\`env
API_URL=https://dev.yourapp.com/
STRIPE_KEY=pk_test_xxx
DEBUG_MODE=true
\`\`\`

  ** \`.env.production\`:**
    \`\`\`env
API_URL=https://yourapp.com/
STRIPE_KEY=pk_live_xxx
DEBUG_MODE=false
\`\`\`

### Loading Environment Variables

In code:
\`\`\`javascript
import Constants from 'expo-constants';

const config = {
  apiUrl: Constants.expoConfig.extra.apiUrl,
  // other config
};
\`\`\`

Update \`app.json\`:
\`\`\`json
{
  "expo": {
    "extra": {
      "apiUrl": process.env.API_URL
    }
  }
}
\`\`\`

---

## Configuration Checklist

Before going to production:

** App Identity:**
  - [] App name updated
    - [] Bundle identifier / package name set
      - [] Version number correct
        - [] App icon replaced
          - [] Splash screen customized

            ** Backend:**
              - [] API URL configured
                - [] Backend accessible via HTTPS
                  - [] CORS configured
                    - [] Test authentication working

                      ** Google Services:**
                        - [] Google Maps API key added
                          - [] Maps displaying correctly
                            - [] Google Sign - In client IDs configured
                              - [] Google Sign - In tested

                                ** Payments:**
                                  - [] Stripe keys configured
                                    - [] Test payment successful
                                      - [] PayPal configured(if using)
  - [] Apple Pay merchant ID set(if using)

** Push Notifications:**
  - [] Expo push notification token working
    - [] APNs configured for iOS
      - [] FCM configured for Android
        - [] Test notification received

          ** Branding:**
            - [] Theme colors customized
              - [] App name throughout app
                - [] Logo / branding updated

                  ** Build:**
                    - [] EAS project ID set
                      - [] Build profiles configured
                        - [] Test build successful

---

## Testing Configuration

### Test API Connection
  \`\`\`bash
# In app, check console for API calls
# Look for successful responses
\`\`\`

### Test Google Maps
  - Open app
    - Navigate to map screen
      - Verify maps load

### Test Google Sign - In
  - Click "Sign in with Google"
    - Verify successful authentication

### Test Payments
  - Use Stripe test cards:
- Success: \`4242 4242 4242 4242\`
  - Decline: \`4000 0000 0000 0002\`

### Test Push Notifications
  - Send test notification
    - Verify receipt on device

---

## Need Help ?

  If configuration issues arise:

1. Check error messages in console
2. Verify all IDs match across platforms
3. Ensure URLs are correct with HTTPS
4. Review this guide carefully
5. Contact support: support @webpenter.com

---

** Configuration Complete! ** 🎉

Your app is now fully configured and ready for customization and deployment.

    `},customization:{title:"Customization",icon:im,tags:["branding","ui","colors"],content:`
# Customization Guide - BookHere Mobile App

Complete guide for customizing and branding the BookHere mobile application.

---

## Table of Contents

1. [Theme Customization](#theme-customization)
2. [Branding](#branding)
3. [UI Components](#ui-components)
4. [Language & Localization](#language--localization)
5. [Navigation](#navigation)
6. [Adding New Features](#adding-new-features)
7. [Styling Guide](#styling-guide)
8. [Best Practices](#best-practices)

---

## Theme Customization

### 1. Color Scheme

Edit \`src/ constants / Colors.ts\`:

\`\`\`typescript
export default {
    // Primary brand colors
    primary: '#FF5A5F',        // Main brand color
    secondary: '#00A699',      // Secondary brand color
    accent: '#FC642D',         // Accent color for highlights

    // Functional colors
    success: '#4CAF50',        // Success messages
    error: '#F44336',          // Error messages
    warning: '#FF9800',        // Warning messages
    info: '#2196F3',           // Information messages

    // Light theme
    light: {
      background: '#FFFFFF',
      backgroundSecondary: '#F7F7F7',
      text: '#484848',
      textSecondary: '#767676',
      border: '#EBEBEB',
      card: '#FFFFFF',
      shadow: '#00000020',
      tabBar: '#FFFFFF',
      tabBarInactive: '#999999',
      inputBackground: '#F7F7F7',
      inputBorder: '#DDDDDD',
      placeholder: '#A0A0A0',
    },

    // Dark theme
    dark: {
      background: '#121212',
      backgroundSecondary: '#1E1E1E',
      text: '#FFFFFF',
      textSecondary: '#B3B3B3',
      border: '#2C2C2C',
      card: '#1E1E1E',
      shadow: '#00000040',
      tabBar: '#1E1E1E',
      tabBarInactive: '#666666',
      inputBackground: '#2C2C2C',
      inputBorder: '#3C3C3C',
      placeholder: '#666666',
    },

    // Gradient colors
    gradients: {
      primary: ['#FF5A5F', '#FF385C'],
      secondary: ['#00A699', '#008B80'],
      sunset: ['#FF6B6B', '#FFE66D'],
      ocean: ['#4FACFE', '#00F2FE'],
    }
  };
\`\`\`

### 2. Typography

Edit \`src/constants/Typography.ts\` (or create if not exists):

\`\`\`typescript
export const Typography = {
  // Font families
  fonts: {
    regular: 'Inter-Regular',
    medium: 'Inter-Medium',
    semiBold: 'Inter-SemiBold',
    bold: 'Inter-Bold',
  },

  // Font sizes
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
  },

  // Line heights
  lineHeights: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.75,
  },
};
\`\`\`

### 3. Spacing System

Edit \`src/constants/Layout.ts\`:

\`\`\`typescript
export const Layout = {
  // Spacing scale
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
  },

  // Border radius
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },

  // Screen padding
  padding: {
    horizontal: 16,
    vertical: 16,
  },

  // Dimensions
  window: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
};
\`\`\`

### 4. Applying Theme Changes

After updating colors:

1. **Restart development server:**
   \`\`\`bash
   npm start --clear
  \`\`\`

2. **Reload app** on device/simulator

3. **Test both light and dark modes**

---

## Branding

### 1. App Icon

#### Requirements:
- Size: 1024x1024 pixels
- Format: PNG with no transparency
- No rounded corners (handled by OS)
- Safe area: Keep important content in center 90%

#### Steps:
1. Create your icon at 1024x1024px
2. Replace \`src/assets/images/icon.png\`
3. Rebuild the app:
   \`\`\`bash
   eas build --platform all --profile preview
  \`\`\`

#### Icon Generator Tools:
- https://www.appicon.co/
- https://makeappicon.com/
- Figma / Sketch / Adobe XD

### 2. Splash Screen

#### Requirements:
- Recommended: 2048x2048 pixels
- Format: JPG or PNG
- Keep important content in center safe area

#### Steps:
1. Create splash screen image
2. Replace \`src/assets/book-here-splash-screen/4.jpg\`
3. Update \`app.json\`:
   \`\`\`json
{
  "expo": {
    "splash": {
      "image": "./src/assets/book-here-splash-screen/4.jpg",
      "resizeMode": "cover",
      "backgroundColor": "#FFFFFF"
    }
  }
}
\`\`\`

### 3. App Name

Update in multiple locations:

**\`app.json\`:**
\`\`\`json
{
  "expo": {
    "name": "Your App Name"
  }
}
\`\`\`

**\`package.json\`:**
\`\`\`json
{
  "name": "yourappname"
}
\`\`\`

**Throughout the app** - Search and replace:
\`\`\`bash
# Find all instances
grep - r "BookHere" src /

# Replace in specific files
# Edit manually or use find - replace in VS Code
\`\`\`

### 4. Logo

1. Create logo in SVG or PNG format
2. Place in \`src/assets/images/\`
3. Update header logo in \`src/screens/home/components/EnhancedHeader.tsx\`:

\`\`\`typescript
<Image
  source = { require('../../assets/images/your-logo.png') }
  style = { styles.logo }
/>
\`\`\`

### 5. Brand Colors Everywhere

Update these components to use your brand colors:

- **Primary buttons**: \`src/components/Button.tsx\`
- **Tab bar**: \`src/navigation/TabMenu.tsx\`
- **Headers**: \`src/navigation/DrawerMenu.tsx\`
- **Loading indicators**: \`src/LoadingSpinner.js\`
- **Gradients**: All gradient components

---

## UI Components

### 1. Button Styles

Edit \`src/components/Button.tsx\` (or create if not exists):

\`\`\`typescript
import { Colors } from '../constants/Colors';

export const Button = ({ title, onPress, variant = 'primary' }) => {
  const buttonStyles = {
    primary: {
      backgroundColor: Colors.primary,
      color: '#FFFFFF',
    },
    secondary: {
      backgroundColor: Colors.secondary,
      color: '#FFFFFF',
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 2,
      borderColor: Colors.primary,
      color: Colors.primary,
    },
  };

  return (
    <TouchableOpacity
      style= { [styles.button, buttonStyles[variant]]}
      onPress = { onPress }
    >
      <Text style={ [styles.text, { color: buttonStyles[variant].color }] }>
        { title }
      </Text>
    </TouchableOpacity>
  );
};
\`\`\`

### 2. Card Components

Customize property cards in \`src/components/PropertyCard.tsx\`:

\`\`\`typescript
const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.light.card,
    borderRadius: Layout.radius.lg,
    padding: Layout.spacing.md,
    shadowColor: Colors.light.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
});
\`\`\`

### 3. Input Fields

Customize inputs in form components:

\`\`\`typescript
const styles = StyleSheet.create({
  input: {
    backgroundColor: Colors.light.inputBackground,
    borderWidth: 1,
    borderColor: Colors.light.inputBorder,
    borderRadius: Layout.radius.md,
    padding: Layout.spacing.md,
    fontSize: Typography.sizes.base,
    color: Colors.light.text,
  },
});
\`\`\`

### 4. Custom Components

Create reusable components in \`src/components/\`:

\`\`\`typescript
// src/components/CustomBadge.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../constants/Colors';

export const CustomBadge = ({ text, color = 'primary' }) => {
  const badgeColors = {
    primary: Colors.primary,
    success: Colors.success,
    warning: Colors.warning,
  };

  return (
    <View style= { [styles.badge, { backgroundColor: badgeColors[color] }]} >
      <Text style={ styles.text }> { text } </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
});
\`\`\`

---

## Language & Localization

### 1. Adding New Language

1. **Create translation file:**
   \`\`\`bash
touch src/localization/translations/jp.ts
\`\`\`

2. **Add translations:**
   \`\`\`typescript
// src/localization/translations/jp.ts
export default {
  common: {
    home: 'ホーム',
    search: '検索',
    favorites: 'お気に入り',
    profile: 'プロフィール',
    // ... more translations
  },
  auth: {
    login: 'ログイン',
    signup: '登録',
    // ... more translations
  },
};
\`\`\`

3. **Register language in i18n:**
   \`\`\`typescript
// src/localization/i18n.ts
import jp from './translations/jp';

i18n.translations = {
  en,
  es,
  jp,  // Add new language
};
\`\`\`

4. **Add to language selector:**
   \`\`\`typescript
// src/navigation/TabMenu.tsx or Settings screen
const languages = [
  { code: 'en', name: 'English' },
  { code: 'es', name: 'Español' },
  { code: 'jp', name: '日本語' },  // Add here
];
\`\`\`

### 2. Using Translations in Components

\`\`\`typescript
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
  const { t } = useTranslation();

  return (
    <View>
      <Text>{ t('common.home') }</Text>
      <Text>{ t('auth.login') }</Text>
    </View>
  );
};
\`\`\`

### 3. RTL Support

For languages like Arabic and Urdu, RTL is already configured. To add RTL to new language:

\`\`\`typescript
// src/localization/i18n.ts
import { I18nManager } from 'react-native';

const isRTL = ['ar', 'ur', 'he', 'fa'].includes(currentLanguage);
I18nManager.forceRTL(isRTL);
\`\`\`

---

## Navigation

### 1. Customizing Tab Bar

Edit \`src/navigation/TabMenu.tsx\`:

\`\`\`typescript
<Tab.Navigator
  screenOptions={{
    tabBarActiveTintColor: Colors.primary,
    tabBarInactiveTintColor: Colors.light.tabBarInactive,
    tabBarStyle: {
      backgroundColor: Colors.light.tabBar,
      borderTopWidth: 1,
      borderTopColor: Colors.light.border,
      height: 60,
      paddingBottom: 8,
    },
    tabBarLabelStyle: {
      fontSize: 12,
      fontFamily: Typography.fonts.medium,
    },
  }}
>
  {/* Tab screens */ }
</Tab.Navigator>
\`\`\`

### 2. Adding New Screen

1. **Create screen file:**
   \`\`\`typescript
// src/screens/NewScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';

export const NewScreen = () => {
  return (
    <View>
      <Text>New Screen </Text>
    </View>
   );
};
\`\`\`

2. **Add to navigation:**
   \`\`\`typescript
// src/navigation/TabMenu.tsx
import { NewScreen } from '../screens/NewScreen';

<Tab.Screen
  name="NewScreen"
  component={NewScreen}
  options={{
    tabBarLabel: 'New',
    tabBarIcon: ({ color }) => (
      <Icon name="star" size={24} color={color} />
    ),
  }}
/>
\`\`\`

### 3. Customizing Headers

\`\`\`typescript
<Stack.Navigator
  screenOptions = {{
    headerStyle: {
      backgroundColor: Colors.primary,
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
      fontFamily: Typography.fonts.bold,
      fontSize: Typography.sizes.lg,
    },
    headerShadowVisible: false,
  }}
>
  {/* Screens */ }
</Stack.Navigator>
\`\`\`

---

## Adding New Features

### 1. Adding a New Payment Method

1. **Create payment component:**
   \`\`\`typescript
// src/screens/payment/NewPayment/index.tsx
import React from 'react';

export const NewPaymentMethod = ({ amount, onSuccess, onError }) => {
  const handlePayment = async () => {
    try {
      // Payment logic here
      onSuccess();
    } catch (error) {
      onError(error);
    }
  };

  return (
    <View>
      {/* Payment UI */ }
    </View>
  );
};
\`\`\`

2. **Add to payment selection:**
   \`\`\`typescript
// src/screens/payment/PaymentSelection.tsx
const paymentMethods = [
  { id: 'stripe', name: 'Credit Card', component: StripePayment },
  { id: 'paypal', name: 'PayPal', component: PayPalPayment },
  { id: 'new', name: 'New Method', component: NewPaymentMethod },
];
\`\`\`

### 2. Adding Social Login

1. **Install library:**
   \`\`\`bash
npm install @react-native - firebase / auth
npx expo install expo - auth - session
  \`\`\`

2. **Create auth provider:**
   \`\`\`typescript
// src/helper/SocialAuth.ts
export const signInWithFacebook = async () => {
  // Implementation
};
\`\`\`

3. **Add to login screen:**
   \`\`\`typescript
// src/screens/auth/LoginScreen.tsx
<Button
  title = "Continue with Facebook"
  onPress = { signInWithFacebook }
/>
  \`\`\`

### 3. Adding New Dashboard Widget

\`\`\`typescript
// src/screens/dashboard/components/NewWidget.tsx
export const NewWidget = ({ data }) => {
  return (
    <View style= { styles.widget } >
      <Text style={ styles.title }> Widget Title </Text>
      {/* Widget content */ }
    </View>
  );
};

// Add to dashboard:
// src/screens/dashboard/Dashboard.tsx
import { NewWidget } from './components/NewWidget';

<NewWidget data={ widgetData } />
\`\`\`

---

## Styling Guide

### 1. Consistent Styling

Use a style system throughout:

\`\`\`typescript
// Good - Using constants
const styles = StyleSheet.create({
  container: {
    padding: Layout.spacing.md,
    backgroundColor: Colors.light.background,
    borderRadius: Layout.radius.lg,
  },
  text: {
    fontSize: Typography.sizes.base,
    color: Colors.light.text,
    fontFamily: Typography.fonts.regular,
  },
});

// Avoid - Hardcoded values
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
});
\`\`\`

### 2. Responsive Design

\`\`\`typescript
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const isSmallDevice = width < 375;

const styles = StyleSheet.create({
  text: {
    fontSize: isSmallDevice ? 14 : 16,
  },
});
\`\`\`

### 3. Platform-Specific Styles

\`\`\`typescript
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
});
\`\`\`

### 4. Dark Mode Support

\`\`\`typescript
import { useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors';

const MyComponent = () => {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme ?? 'light'];

  return (
    <View style= {{ backgroundColor: colors.background }}>
      <Text style={ { color: colors.text } }> Hello </Text>
    </View>
  );
};
\`\`\`

---

## Best Practices

### 1. Code Organization

\`\`\`
src /
├── screens /           # Full screens
├── components /        # Reusable components
├── navigation /        # Navigation setup
├── hooks /             # Custom hooks
├── helper /            # Utility functions
├── constants /         # Constants(colors, layout, etc.)
├── assets /            # Images, fonts
└── localization /      # Translations
\`\`\`

### 2. Component Structure

\`\`\`typescript
// 1. Imports
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Layout, Typography } from '../constants';

// 2. Types/Interfaces
interface Props {
  title: string;
  onPress: () => void;
}

// 3. Component
export const MyComponent: React.FC<Props> = ({ title, onPress }) => {
  // Hooks
  const [state, setState] = useState();

  // Functions
  const handlePress = () => {
    onPress();
  };

  // Render
  return (
    <View style= { styles.container } >
    <Text>{ title } </Text>
    </View>
  );
};

// 4. Styles
const styles = StyleSheet.create({
  container: {
    padding: Layout.spacing.md,
  },
});
\`\`\`

### 3. Performance Optimization

\`\`\`typescript
// Use React.memo for expensive components
export const ExpensiveComponent = React.memo(({ data }) => {
  return <View>{/* Complex rendering */ } </View>;
});

// Use useCallback for functions
const handlePress = useCallback(() => {
  // Function logic
}, [dependencies]);

// Use useMemo for expensive calculations
const processedData = useMemo(() => {
  return data.map(item => /* processing */);
}, [data]);
\`\`\`

### 4. Error Handling

\`\`\`typescript
try {
  const result = await apiCall();
  // Handle success
} catch (error) {
  console.error('Error:', error);
  Alert.alert('Error', 'Something went wrong');
  // Handle error gracefully
}
\`\`\`

### 5. Testing Changes

Always test on:
- [ ] iOS Simulator
- [ ] Android Emulator
- [ ] Physical iOS device
- [ ] Physical Android device
- [ ] Light mode
- [ ] Dark mode
- [ ] Different screen sizes
- [ ] Different languages
- [ ] RTL languages (if applicable)

---

## Quick Customization Checklist

Essential customizations for branding:

- [ ] Update app name in \`app.json\` and \`package.json\`
- [ ] Replace app icon at \`src/assets/images/icon.png\`
- [ ] Replace splash screen at \`src/assets/book-here-splash-screen/4.jpg\`
- [ ] Update primary color in \`src/constants/Colors.ts\`
- [ ] Update secondary color in \`src/constants/Colors.ts\`
- [ ] Update bundle identifier (iOS) in \`app.json\`
- [ ] Update package name (Android) in \`app.json\`
- [ ] Update app scheme in \`app.json\`
- [ ] Replace logo images in \`src/assets/images/\`
- [ ] Test on both iOS and Android
- [ ] Test both light and dark modes
- [ ] Rebuild app with new branding

---

## Advanced Customization

### Custom Fonts

1. **Add font files** to \`src/assets/fonts/\`
2. **Load fonts** in \`App.tsx\`:
   \`\`\`typescript
import { useFonts } from 'expo-font';

const [fontsLoaded] = useFonts({
  'CustomFont-Regular': require('./assets/fonts/CustomFont-Regular.ttf'),
  'CustomFont-Bold': require('./assets/fonts/CustomFont-Bold.ttf'),
});
\`\`\`
3. **Use in styles:**
   \`\`\`typescript
text: {
  fontFamily: 'CustomFont-Regular',
}
\`\`\`

### Custom Animations

\`\`\`typescript
import Animated, {
  useAnimatedStyle,
  withSpring
} from 'react-native-reanimated';

const animatedStyle = useAnimatedStyle(() => {
  return {
    transform: [{ scale: withSpring(isPressed ? 0.95 : 1) }],
  };
});

<Animated.View style={ animatedStyle }>
  {/* Content */ }
</Animated.View>
    \`\`\`

---

## Need Help?

For customization support:

📧 Email: support@webpenter.com
📚 Include: Your purchase code and specific customization question

---

**Happy Customizing!** 🎨

Transform BookHere into your unique property rental brand!

    `},faq:{title:"FAQ",icon:Fh,tags:["help","qa","rtl"],content:`
# Frequently Asked Questions (FAQ)

Common questions and answers about the BookHere mobile app.

---

## Table of Contents

1. [General Questions](#general-questions)
2. [Installation & Setup](#installation--setup)
3. [Configuration](#configuration)
4. [Features & Functionality](#features--functionality)
5. [Customization](#customization)
6. [Payments & Billing](#payments--billing)
7. [Deployment & Building](#deployment--building)
8. [Support & Licensing](#support--licensing)

---

## General Questions

### What is BookHere?

BookHere is a complete, production-ready React Native mobile application for property rentals and bookings. It's similar to Airbnb and includes features for both property guests and hosts.

### What platforms does BookHere support?

- **iOS**: iOS 12.0 and higher
- **Android**: Android 5.0 (API 21) and higher

### Do I need a backend to use this app?

Yes, BookHere requires a WordPress backend with the Homey theme installed. The app communicates with the backend via REST API endpoints.

### Is the source code included?

Yes, you receive the complete React Native source code that you can modify and customize.

### Can I use this for my commercial project?

Yes, with the appropriate ThemeForest license (Regular or Extended), you can use this in your commercial projects.

### What technologies is this built with?

- **React Native** 0.79.5
- **Expo** SDK 53
- **TypeScript** 5.8.3
- **React Navigation** 6.x
- **React Native Paper** 4.12.8

---

## Backend & Infrastructure

### Is a backend included with this purchase?

**Partially!** The **connector plugin is included**, but you need to purchase the backend theme separately.

**What's Included:**
- ✅ BookHere-Homey Connector Plugin (bridges app with Homey theme)
- ✅ Mobile-optimized REST API endpoints
- ✅ Easy installation & configuration guide
- ✅ Saves you 40-80 hours of custom API development!

**What's NOT Included (Must Purchase Separately):**
- ❌ Homey WordPress Theme (~$59-79 from ThemeForest)
  - This provides the actual backend (property management, bookings, etc.)
  - Our plugin connects your mobile app to it

### What backend do I need?

**You need two things:**

1. **Homey WordPress Theme** (Purchase separately)
   - Cost: ~$59-79 on ThemeForest
   - Search "Homey" on ThemeForest.net
   - Provides complete property rental backend functionality

2. **WordPress Installation** (Free)
   - WordPress 6.0+ from WordPress.org
   - Web hosting with PHP & MySQL ($5-20/month)

**Our Included Connector Plugin:**
- Bridges mobile app with Homey theme
- Provides mobile-optimized API endpoints
- Handles authentication, data sync, push notifications
- Easy to install and configure

### Do I need to buy the Homey theme?

**YES!** ✅ Homey theme is required for the backend.

**Why Homey Theme is Needed:**
- Provides the property management system
- Handles bookings and reservations
- Manages payments and transactions
- Includes admin dashboard for hosts
- Search and filtering system
- User management

**What Our Included Plugin Does:**
- Connects your mobile app to Homey
- Provides mobile-optimized APIs
- Handles mobile-specific features
- You DON'T need to build custom APIs yourself (saves 40-80 hours!)

**Total Cost:**
- BookHere package: (your purchase)
- Homey theme: ~$59-79 (one-time)
- Web hosting: $5-20/month

### What exactly is the BookHere API Plugin?

It's a complete WordPress plugin (included in your purchase) that provides:

**Technical Features:**
- JWT authentication endpoints
- Property CRUD operations (Create, Read, Update, Delete)
- Booking management system
- Payment gateway webhooks (Stripe, PayPal)
- Real-time messaging backend
- Review & rating system
- Advanced search with filters
- User role management (Guest/Host/Admin)
- Earnings calculation & analytics
- Media upload handling
- Push notification integration

**User-Friendly:**
- Simple installation via WordPress admin
- Configuration wizard for easy setup
- Admin dashboard to manage everything
- Compatible with standard WordPress hosting

### How long does backend setup take?

**Super Fast!** ⚡

With our included plugin:
1. Install WordPress: 10 minutes (most hosts have 1-click install)
2. Upload our API plugin: 2 minutes
3. Activate & configure: 15 minutes
4. Connect mobile app: 5 minutes

**Total: 30-45 minutes** ✅

Compare this to building a custom backend: 40-80 hours!

### What hosting do I need?

Any standard WordPress hosting works! No special requirements.

**Recommended Hosting Providers:**
- **Shared Hosting** ($5-15/month): SiteGround, Bluehost, HostGator
  - Perfect for starting out
  - Handles 1,000-10,000 users easily

- **Managed WordPress** ($20-50/month): WP Engine, Kinsta, Flywheel
  - Better performance
  - Automatic backups & updates

- **VPS** ($20-50/month): DigitalOcean, Linode, Vultr
  - More control
  - Better for scaling

- **Cloud** ($10-100/month): AWS, Google Cloud, Azure
  - Maximum scalability
  - Pay for what you use

**For most users:** Start with shared hosting ($5-15/month). Upgrade later if needed.

### What's the total cost to get started?

**Complete breakdown:**

**One-time costs:**
- BookHere package (mobile app + connector plugin): (your purchase) ✅
- **Homey WordPress theme: $59-79** (required - purchase from ThemeForest)
- Domain name: $10-15/year (optional)
- SSL certificate: FREE (Let's Encrypt) ✅

**Monthly costs:**
- Web hosting: $5-20/month (shared hosting works fine)
- Transaction fees: 2.9% + $0.30 per booking (Stripe, when you start earning)

**Total first year:** Your purchase + $59-79 (theme) + $60-240 (hosting) = ~$119-319 total

**What You Save:**
- ✅ 40-80 hours of custom API development (would cost $2,000-4,000!)
- ✅ Mobile app development (would cost $8,000-15,000!)
- ✅ Our connector plugin makes integration seamless

**Compared to building from scratch:** You save $10,000-19,000!

### Can I use my existing WordPress website?

**Yes!** Absolutely!

If you already have a WordPress website:
1. Simply install our API plugin
2. Configure the plugin settings
3. Connect the mobile app
4. Your existing website continues working normally

The API plugin doesn't interfere with your website. It just adds API endpoints for the mobile app.

### What if I already have a property rental website (non-WordPress)?

You have options:

**Option 1: Use our WordPress plugin (Easiest)**
- Set up WordPress on a subdomain (e.g., api.yoursite.com)
- Install our plugin
- Mobile app connects to this subdomain
- Your main website stays unchanged

**Option 2: Build custom integration (Advanced)**
- Modify the mobile app to work with your existing API
- Requires development skills
- API documentation provided

**Option 3: Hybrid approach**
- Use our WordPress backend for mobile app
- Keep your existing website for web users
- Sync data between both (requires custom integration)

### Do I need technical skills to set up the backend?

**No! Basic WordPress knowledge is enough.**

If you can:
- ✅ Install WordPress (or use 1-click installer)
- ✅ Upload a plugin via WordPress admin
- ✅ Fill out a settings form
- ✅ Copy-paste a URL

Then you can set up the backend! 🎉

**We provide:**
- Step-by-step installation guide with screenshots
- Configuration wizard in the plugin
- Video tutorial (coming soon)
- Email support if you get stuck

### Can I test the app without setting up hosting?

**Demo Options:**

1. **Use local WordPress** (Fastest for testing)
   - Install XAMPP or MAMP on your computer (free)
   - Run WordPress locally
   - Install our plugin
   - Test app connecting to localhost
   - Takes 30 minutes to set up

2. **Use free hosting temporarily**
   - 000webhost.com, InfinityFree (free tier)
   - Install WordPress + our plugin
   - Test before buying paid hosting

3. **Request demo access**
   - Email support@webpenter.com with purchase code
   - We can provide temporary demo backend access

### Can you set up the backend for me?

**DIY (Recommended):** Setup is very easy with our guide

**Professional Setup Services:**
- Not included in base package
- Available as paid service: Email support@webpenter.com for quote
- Typical cost: $50-150 for complete setup
- Includes: WordPress installation, plugin configuration, app connection

**Freelancer Setup:**
- Any WordPress freelancer can help
- Should take them 30-60 minutes
- Provide them with our installation guide

### What happens if my backend is down?

**Mobile app shows error messages** and can't function until backend is back online.

**Prevent downtime:**
- Choose reliable hosting (99.9%+ uptime SLAs)
- Set up automatic backups (most hosts include this)
- Use monitoring service (free): UptimeRobot.com
- Keep WordPress & plugin updated

**Most shared hosting providers** have 99.9% uptime = less than 9 hours downtime per year.

### Is the plugin compatible with my WordPress theme?

**Yes!** The API plugin is backend-only and works with ANY WordPress theme.

**Compatible with:**
- ✅ Any WordPress theme (default themes, premium themes, custom themes)
- ✅ Page builders (Elementor, WPBakery, Divi, etc.)
- ✅ WooCommerce (if you want e-commerce features)
- ✅ Multilingual plugins (WPML, Polylang)
- ✅ Most popular WordPress plugins

The API plugin provides REST endpoints. It doesn't affect your WordPress frontend/theme at all.

---

## Installation & Setup

### How long does installation take?

Basic installation takes 15-30 minutes. Complete setup with backend configuration and third-party services can take 2-4 hours.

### Do I need a Mac to develop this app?

- **For iOS development**: Yes, macOS is required for iOS builds and testing
- **For Android only**: No, you can develop on Windows, Mac, or Linux

### What if I don't have React Native experience?

Basic knowledge of React Native and JavaScript is recommended. However, we provide comprehensive documentation to help you get started.

### Can I test the app without building it?

Yes, use Expo Go app to test on physical devices during development without building.

### Do I need paid developer accounts?

- **For testing**: No
- **For App Store submission**: Yes, Apple Developer ($99/year)
- **For Play Store submission**: Yes, Google Play Developer ($25 one-time)

### Installation fails with "Cannot find module" errors

This usually means dependencies weren't installed correctly:
\`\`\`bash
rm - rf node_modules package-lock.json
npm install
  \`\`\`

---

## Configuration

### Where do I configure the backend URL?

Edit \`src / ApiUrl.js\`:
\`\`\`javascript
export default {
  api_url: "https://yourdomain.com/"
}
  \`\`\`

### How do I get Google Maps API key?

1. Go to https://console.cloud.google.com/
2. Create a project
3. Enable Maps SDK for iOS and Android
4. Create credentials → API Key
5. Add to \`app.json\`

### Where do I put my Stripe keys?

Edit \`src/screens/payment/stripe/config/helpers.ts\` and update the \`publishableKey\` constant.

### How do I change the app name?

Update in multiple locations:
- \`app.json\` - \`expo.name\`
- \`package.json\` - \`name\` field
- Throughout the app code (search and replace)

### Can I use a different backend instead of WordPress?

Technically yes, but you'll need to modify the API integration code to match your backend's API endpoints. This requires intermediate to advanced development skills.

### How do I configure push notifications?

1. Create Expo account
2. Get your project ID from expo.dev
3. Add to \`app.json\` under \`extra.eas.projectId\`
4. For iOS: Configure APNs
5. For Android: Configure FCM (usually automatic)

---

## Features & Functionality

### Does it support multiple languages?

Yes, 10 languages are included:
- English, Spanish, Portuguese, French, German
- Russian, Chinese, Arabic (RTL), Urdu (RTL), Hindi

### Can I add more languages?

Yes! Create a new translation file in \`src/localization/translations/\` and register it in the i18n configuration.

### Does it support dark mode?

Yes, automatic dark mode is fully supported based on device settings.

### Can users book properties instantly?

Yes, the app includes instant booking functionality with payment processing.

### Is messaging real-time?

The app supports messaging between guests and hosts. Real-time updates depend on your backend implementation.

### Can hosts add properties from the mobile app?

Yes, hosts can add and manage properties using a 7-step wizard directly from the app.

### Does it support multiple payment methods?

Yes, included payment methods:
- Stripe (Credit/Debit cards)
- PayPal
- Thai QR Payment

### How does the favorites/wishlist work?

Users can save properties to their favorites list for quick access later. Favorites are synced with the backend.

### Is there a review/rating system?

Yes, guests can leave reviews and ratings for properties they've stayed at.

---

## Customization

### How do I change the color scheme?

Edit \`src/constants/Colors.ts\` and update the primary, secondary, and other color values.

### Can I change the app icon and splash screen?

Yes:
- **Icon**: Replace \`src/assets/images/icon.png\` (1024x1024px)
- **Splash**: Replace \`src/assets/book-here-splash-screen/4.jpg\`

### How do I add custom fonts?

1. Add font files to \`src/assets/fonts/\`
2. Load fonts in \`App.tsx\` using \`useFonts\`
3. Update \`Typography.ts\` with font names
4. Use in StyleSheets

### Can I modify the UI components?

Yes, all components are customizable. Edit files in \`src/components/\` and \`src/screens/\`.

### How do I add a new screen/page?

1. Create component in \`src/screens/\`
2. Add to navigation in \`src/navigation/\`
3. Configure navigation options

### Can I remove features I don't need?

Yes, you can remove unused features by:
- Removing screen components
- Updating navigation
- Removing dependencies (if applicable)

### Is the code documented?

Yes, the code includes comments and the documentation package provides comprehensive guides.

---

## Payments & Billing

### Is Stripe the only payment option?

No, PayPal and Thai QR payment are also included. You can add more payment gateways by integrating their SDKs.

### Do I need a Stripe account?

Yes, if you want to accept credit/debit card payments. Create a free account at https://stripe.com

### How do I test payments without real money?

Use Stripe test mode with test card numbers:
- Success: \`4242 4242 4242 4242\`
- Decline: \`4000 0000 0000 0002\`

### Does the app handle payment processing fees?

The app displays prices and processes payments. Stripe charges transaction fees (usually 2.9% + $0.30 per transaction).

### Can I use this in my country?

The app works globally. Check if Stripe and your chosen payment gateways support your country.

### How are host payouts handled?

The app includes a wallet/earnings dashboard for hosts. You'll need to implement the actual payout logic in your backend.

---

## Deployment & Building

### How do I build the app for production?

Using EAS Build:
\`\`\`bash
# iOS
eas build --platform ios --profile production

# Android
eas build --platform android --profile production
  \`\`\`

### Do I need a Mac to build for iOS?

No, EAS Build (Expo's cloud build service) can build iOS apps from any platform.

### How do I submit to App Store?

\`\`\`bash
eas submit --platform ios
  \`\`\`
Follow Apple's guidelines and provide required assets (screenshots, descriptions, etc.)

### How do I submit to Play Store?

\`\`\`bash
eas submit --platform android
  \`\`\`
Provide required Play Store assets and information.

### How long does App Store review take?

- **Apple**: Usually 1-3 days
- **Google**: Usually 1-2 days (sometimes hours)

### Can I update the app after it's published?

Yes, you can push updates using:
- **EAS Update**: For JavaScript/React changes (instant)
- **New Build**: For native code changes (requires store review)

### What's the difference between APK and AAB?

- **APK**: Android Package, for direct installation and testing
- **AAB**: Android App Bundle, required for Play Store (Google generates optimized APKs)

### Why is my app size so large?

Check \`APK_SIZE_OPTIMIZATION_GUIDE.md\` for tips on reducing app size. The app is already optimized to 30-40MB per architecture.

---

## Support & Licensing

### What support is included?

- 6 months of support from purchase date
- Bug fixes and issue resolution
- Installation and configuration help
- General usage questions

### What's NOT included in support?

- Custom development or new features
- Third-party service setup (beyond guidance)
- Server/hosting management
- App Store submission process

### How do I contact support?

Email: support@webpenter.com

Include:
- Your purchase code
- Detailed issue description
- Screenshots/error messages
- Steps to reproduce

### What's the difference between Regular and Extended License?

**Regular License:**
- Use in one project
- End users charged once or free

**Extended License:**
- Use in SaaS/subscription products
- End users charged on recurring basis

See: https://themeforest.net/licenses

### Can I get a refund?

Per ThemeForest policy, refunds are only granted if the item doesn't work as described or has major issues.

### Can I hire you for custom development?

Yes, contact us at support@webpenter.com for a quote on custom work.

### Will this work with the latest React Native version?

The app uses React Native 0.79.5. Upgrading to newer versions may require code changes. We provide updates to support new RN versions.

### Is WordPress Homey theme included?

No, the Homey WordPress theme must be purchased separately from ThemeForest.

### Can I use a different WordPress theme?

You'd need to modify the API integration to match your theme's API endpoints. This requires development work.

---

## Technical Questions

### Why can't I see Google Maps?

Common causes:
1. API key not configured in \`app.json\`
2. Maps SDK not enabled in Google Cloud Console
3. Billing not enabled on Google Cloud project
4. Wrong API key or restrictions

### Google Sign-In isn't working

Check:
1. Client IDs configured in \`.env\`
2. Bundle ID/package matches Google Cloud Console
3. App rebuilt after changing \`.env\`

### App crashes on startup

Try:
1. Clear cache: \`npm start --clear\`
2. Reinstall dependencies: \`rm - rf node_modules && npm install\`
3. Check console for error messages

### Images not uploading

Verify:
1. Backend API endpoint is correct
2. File size limits on server
3. Proper permissions in app
4. Network connectivity

### How do I enable debug mode?

\`\`\`bash
# React Native debugger
npm start
# Then press 'j' for JavaScript debugger
\`\`\`

### Can I use with Expo Go?

For development testing, yes. However, some native features may not work in Expo Go. Use development builds for full testing.

### How do I update dependencies?

\`\`\`bash
# Check for updates
npm outdated

# Update specific package
npm update package - name

# Update all(carefully!)
npm update
  \`\`\`

**Note:** Major updates may require code changes.

---

## Best Practices

### Should I modify the core files?

It's better to:
- Create new components for custom features
- Use configuration files for settings
- Document your changes

### How do I keep my customizations when updating?

- Use version control (Git)
- Create custom components separately
- Document changes in your own files
- Merge updates carefully

### What should I test before launching?

- [ ] All screens navigate correctly
- [ ] Backend API connection works
- [ ] Login/signup functional
- [ ] Property search works
- [ ] Booking flow complete
- [ ] Payment processing successful
- [ ] Notifications working
- [ ] Images upload properly
- [ ] Both iOS and Android
- [ ] Light and dark modes
- [ ] Multiple languages
- [ ] Different screen sizes

---

## Troubleshooting Quick Fixes

### Build fails

\`\`\`bash
# Clear everything and rebuild
rm -rf node_modules ios/build android/build
npm install
  \`\`\`

### Metro bundler errors

\`\`\`bash
npm start --clear
  \`\`\`

### iOS build issues

\`\`\`bash
cd ios
rm -rf build
pod deintegrate
pod install
cd..
\`\`\`

### Android build issues

\`\`\`bash
cd android
./gradlew clean
cd..
\`\`\`

### Environment changes not reflecting

\`\`\`bash
# Clear cache
npm start --clear

# Rebuild app
eas build --platform all --profile development
  \`\`\`

---

## Still Have Questions?

If your question isn't answered here:

1. **Check Documentation:**
   - INSTALLATION
   - CONFIGURATION
   - CUSTOMIZATION
   - TROUBLESHOOTING

2. **Search Error Messages:**
   - Google the exact error
   - Check Stack Overflow
   - Search React Native docs

3. **Contact Support:**
   - Email: support@webpenter.com
   - Include purchase code
   - Provide detailed information

---

## Useful Resources

- **React Native Docs**: https://reactnative.dev/docs/getting-started
- **Expo Docs**: https://docs.expo.dev/
- **React Navigation**: https://reactnavigation.org/docs/getting-started
- **Stripe Docs**: https://stripe.com/docs/payments
- **Google Maps**: https://developers.google.com/maps/documentation

---

**Need More Help?**

Don't hesitate to reach out to our support team at support@webpenter.com with your purchase code.

    `},troubleshooting:{title:"Troubleshooting",icon:im,tags:["help","fixes","errors"],content:`
# Troubleshooting Guide - BookHere Mobile App

Common issues and solutions for the BookHere mobile application.

---

## Table of Contents

1. [Installation Issues](#installation-issues)
2. [Build & Compilation Issues](#build--compilation-issues)
3. [Runtime Errors](#runtime-errors)
4. [Backend & API Issues](#backend--api-issues)
5. [Authentication Problems](#authentication-problems)
6. [Payment Issues](#payment-issues)
7. [Maps & Location Issues](#maps--location-issues)
8. [Push Notification Issues](#push-notification-issues)
9. [UI & Display Issues](#ui--display-issues)
10. [Performance Issues](#performance-issues)

---

## Installation Issues

### Cannot find module errors

**Problem:** After running \`npm install\`, getting "Cannot find module" errors

**Solution:**
\`\`\`bash
# 1. Clear npm cache
npm cache clean --force

# 2. Remove node_modules and lock file
rm - rf node_modules package - lock.json

# 3. Reinstall dependencies
npm install

# 4. If on iOS, reinstall pods
cd ios && pod install && cd..
\`\`\`

---

### npm install fails with EACCES permission denied

**Problem:** Permission errors during \`npm install\`

**Solution:**
\`\`\`bash
# Option 1: Use sudo(not recommended)
sudo npm install

# Option 2: Fix npm permissions(recommended)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.profile
source ~/.profile

# Then reinstall
npm install
  \`\`\`

---

### gyp ERR! or node-gyp errors

**Problem:** Native module compilation fails

**Solution:**
\`\`\`bash
# On macOS
xcode-select --install

# On Linux
sudo apt-get install build-essential

# On Windows
npm install --global windows-build-tools

# Then reinstall
npm install
  \`\`\`

---

### Expo CLI not found

**Problem:** \`expo: command not found\`

**Solution:**
\`\`\`bash
# Install Expo CLI globally
npm install -g expo-cli

# Verify installation
expo --version
  \`\`\`

---

## Build & Compilation Issues

### Metro bundler fails to start

**Problem:** Metro bundler crashes or shows errors

**Solution:**
\`\`\`bash
# Clear Metro cache
npm start --clear

# OR
npx react-native start --reset-cache

# If still failing, clear watchman
watchman watch-del-all
  \`\`\`

---

### iOS build fails with CocoaPods error

**Problem:** Pod install fails or iOS build errors

**Solution:**
\`\`\`bash
# Navigate to iOS directory
cd ios

# Remove Pods and Podfile.lock
rm -rf Pods Podfile.lock

# Reinstall pods
pod deintegrate
pod install

# If still failing, update CocoaPods
sudo gem install cocoapods

# Then retry
pod install --repo-update

cd..
\`\`\`

---

### Android build fails with Gradle error

**Problem:** Android build fails during Gradle compilation

**Solution:**
\`\`\`bash
# Navigate to android directory
cd android

# Clean build
  ./gradlew clean

# If permission denied
chmod + x gradlew

# Clear Gradle cache
rm -rf .gradle

# Return to root and rebuild
cd..
npx expo run:android
  \`\`\`

---

### Build fails with "ANDROID_HOME not set"

**Problem:** Android SDK path not configured

**Solution:**

**On macOS/Linux:**
\`\`\`bash
# Add to ~/.zshrc or ~/.bash_profile
export ANDROID_HOME = $HOME/Library/Android/sdk
export PATH = $PATH: $ANDROID_HOME/emulator
export PATH = $PATH: $ANDROID_HOME/platform-tools

# Reload
source ~/.zshrc
  \`\`\`

**On Windows:**
\`\`\`
# Add to Environment Variables
ANDROID_HOME = C:\\Users\\YourUsername\\AppData\\Local\\Android\\Sdk

# Add to Path
% ANDROID_HOME %\\platform-tools
% ANDROID_HOME %\\emulator
      \`\`\`

---

### EAS build fails

**Problem:** EAS Build cloud build fails

**Solution:**
\`\`\`bash
# 1. Check build logs
eas build: list

# 2. View specific build logs
eas build: view[BUILD_ID]

# 3. Common fixes:
# - Ensure eas.json is configured correctly
# - Check app.json for errors
# - Verify bundle identifier / package name
# - Clear EAS cache
eas build --clear -cache

# 4. Rebuild
eas build --platform ios --profile production
  \`\`\`

---

## Runtime Errors

### App shows blank white screen

**Problem:** App loads but shows blank screen

**Solution:**
\`\`\`bash
# 1. Check console for errors
# Look for JavaScript errors in terminal

# 2. Clear Metro cache
npm start --clear

# 3. Check App.tsx for syntax errors
# Ensure all imports are correct

# 4. Verify navigation setup
# Check if navigation is properly configured

# 5. Test with simplified App.tsx
# Temporarily simplify to isolate issue
  \`\`\`

---

### App crashes on startup

**Problem:** App crashes immediately when opening

**Solution:**
\`\`\`bash
# 1. Check device logs
# iOS: Xcode → Window → Devices and Simulators → View Device Logs
# Android: adb logcat

# 2. Common causes:
# - Missing native dependencies
# - Incorrect configuration
# - JavaScript errors

# 3. Rebuild with clean slate
rm -rf node_modules ios/build android/build
npm install
npx expo prebuild --clean

# 4. Rebuild app
npx expo run:ios  # or run: android
  \`\`\`

---

### "Network request failed" errors

**Problem:** All API calls failing with network errors

**Solution:**
1. **Check API URL**
   \`\`\`javascript
// src/ApiUrl.js
// Ensure URL is correct and ends with /
api_url: "https://yourdomain.com/"
  \`\`\`

2. **Verify backend is accessible**
   \`\`\`bash
   # Test in browser
   curl https://yourdomain.com/wp-json/
\`\`\`

3. **Check CORS configuration**
   - Backend must allow cross-origin requests
   - Add CORS headers in WordPress

4. **Test on physical device**
   - Simulators may have network restrictions
   - Use same WiFi network

5. **Check firewall/security settings**
   - Disable VPN temporarily
   - Check corporate firewall

---

### Undefined is not an object error

**Problem:** Errors like "undefined is not an object (evaluating 'x.y')"

**Solution:**
1. **Check the error stack trace**
   - Identify the file and line number
   - Look for the specific property access

2. **Add null checks**
   \`\`\`javascript
// Before
const value = data.property.subProperty;

// After
const value = data?.property?.subProperty;
\`\`\`

3. **Verify API responses**
   - Check if backend is returning expected data
   - Add console.log to inspect data

4. **Check AsyncStorage**
   - May be trying to access non-existent stored data
   - Add default values

---

### Cannot read property of undefined

**Problem:** Similar to above, accessing properties on undefined

**Solution:**
\`\`\`javascript
// Use optional chaining and nullish coalescing
const name = user?.profile?.name ?? 'Guest';

// Or check before accessing
if (user && user.profile) {
  const name = user.profile.name;
}

// For arrays
const firstItem = items?.[0] ?? null;
\`\`\`

---

## Backend & API Issues

### 401 Unauthorized errors

**Problem:** API returns 401 errors

**Solution:**
1. **Check authentication token**
   \`\`\`javascript
  // Verify token is being sent in headers
  // Check token expiration
  \`\`\`

2. **Re-login**
   - Token may have expired
   - Clear storage and login again

3. **Verify backend JWT configuration**
   \`\`\`php
// wp-config.php
define('JWT_AUTH_SECRET_KEY', 'your-secret-key');
\`\`\`

4. **Check token format**
   - Should be Bearer token
   - Format: \`Bearer eyJ0eXAiOiJKV1QiLCJhbGc...\`

---

### 404 Not Found on API calls

**Problem:** Backend endpoints return 404

**Solution:**
1. **Verify API URL**
   - Check \`src/ApiUrl.js\`
   - Ensure trailing slash: \`https://domain.com/\`

2. ** Check permalinks **
  - WordPress Settings → Permalinks
    - Should be "Post name" structure

3. ** Verify.htaccess **
  - Ensure mod_rewrite is enabled
    - Check.htaccess file exists

4. ** Test endpoint directly **
  \`\`\`bash
   curl https://yourdomain.com/wp-json/jwt-auth/v1/token
   \`\`\`

---

### CORS errors

  ** Problem:** "Access-Control-Allow-Origin" errors

    ** Solution:**

** Option 1: Add to wp - config.php **
  \`\`\`php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
\`\`\`

  ** Option 2: Use WordPress plugin **
    - Install "WP CORS" plugin
      - Configure allowed origins

        ** Option 3: Server configuration **
          \`\`\`apache
# .htaccess
<IfModule mod_headers.c>
    Header set Access-Control-Allow-Origin "*"
    Header set Access-Control-Allow-Methods "GET, POST, PUT, DELETE, OPTIONS"
    Header set Access-Control-Allow-Headers "Content-Type, Authorization"
</IfModule>
\`\`\`

---

### Slow API responses

  ** Problem:** API calls taking too long

    ** Solution:**
      1. ** Optimize backend **
        - Add caching plugin(WP Super Cache)
          - Optimize database
            - Use CDN for images

2. ** Reduce payload size **
    - Limit returned fields
      - Add pagination
        - Compress responses

3. ** Add timeout handling **
  \`\`\`javascript
   axios.defaults.timeout = 10000; // 10 seconds
   \`\`\`

---

## Authentication Problems

### Google Sign - In not working

  ** Problem:** Google Sign - In fails or shows errors

    ** Solution:**
      1. ** Verify Client IDs **
        \`\`\`env
   # .env
   EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID=correct_client_id
   EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=correct_web_client_id
   \`\`\`

2. ** Check bundle ID matches **
  - Google Cloud Console bundle ID
    - app.json bundle identifier
      - Must match exactly

3. ** Rebuild app after.env changes **
  \`\`\`bash
   npm start --clear
   eas build --platform all
   \`\`\`

4. ** Verify OAuth consent screen **
  - Check it's published (not in testing)
    - Add test users if in testing mode

5. ** Check Google Services files **
  - iOS: GoogleService-Info.plist in root
    - Android: google-services.json in root

---

### Biometric authentication fails

  ** Problem:** Face ID / Fingerprint not working

    ** Solution:**
      1. ** Check device support **
        \`\`\`javascript
   import * as LocalAuthentication from 'expo-local-authentication';

   const compatible = await LocalAuthentication.hasHardwareAsync();
   const enrolled = await LocalAuthentication.isEnrolledAsync();
   \`\`\`

2. ** Verify permissions **
  \`\`\`json
   // app.json
   "ios": {
     "infoPlist": {
       "NSFaceIDUsageDescription": "Allow app to use Face ID"
     }
   },
   "android": {
     "permissions": [
       "android.permission.USE_BIOMETRIC"
     ]
   }
   \`\`\`

3. ** Test on physical device **
  - Biometrics don't work in simulators
    - Must test on real device

---

### Login session expires quickly

  ** Problem:** Users logged out frequently

    ** Solution:**
      1. ** Extend token expiration **
        \`\`\`php
   // Backend wp-config.php
   define('JWT_AUTH_EXPIRE_TIME', 7 * DAY_IN_SECONDS);
   \`\`\`

2. ** Implement token refresh **
  - Add refresh token logic
    - Refresh before expiration

3. ** Check secure storage **
  - Verify tokens are stored securely
    - Check if tokens are being cleared

---

## Payment Issues

### Stripe payments failing

  ** Problem:** Payment processing fails with Stripe

  ** Solution:**
    1. ** Verify publishable key **
      \`\`\`typescript
   // Check helpers.ts
   const publishableKey = "pk_test_..." // Correct key
   \`\`\`

2. ** Use test cards **
  \`\`\`
   Success: 4242 4242 4242 4242
   Decline: 4000 0000 0000 0002
   3D Secure: 4000 0025 0000 3155
   \`\`\`

3. ** Check Stripe dashboard **
  - View error logs
    - Check webhook configuration
      - Verify API version

4. ** Test mode vs Live mode **
  - Ensure using correct keys
- Test mode for development
  - Live mode for production

5. ** Check error messages **
      \`\`\`javascript
   try {
     await stripe.createPaymentMethod(...);
   } catch (error) {
     console.log('Stripe error:', error.message);
   }
   \`\`\`

---

### Apple Pay not working(iOS)

  ** Problem:** Apple Pay option not showing or fails

    ** Solution:**
      1. ** Verify merchant ID **
        - Created in Apple Developer Console
          - Added to app.json entitlements
            - Configured in Stripe dashboard

2. ** Check device support **
  - Device must support Apple Pay
    - Card must be added to Wallet

3. ** Test on physical device **
  - Apple Pay doesn't work in simulator

4. ** Verify app.json configuration **
  \`\`\`json
   {
     "ios": {
       "entitlements": {
         "com.apple.developer.in-app-payments": [
           "merchant.com.yourcompany.yourapp"
         ]
       }
     }
   }
   \`\`\`

---

### Payment succeeds but booking not created

  ** Problem:** Payment processes but no reservation created

    ** Solution:**
      1. ** Check backend webhook **
        - Verify webhook URL is correct
          - Check webhook is receiving events
            - View webhook logs in Stripe

2. ** Verify payment metadata **
  \`\`\`javascript
   // Ensure booking info is sent
   metadata: {
     booking_id: bookingId,
     user_id: userId,
     property_id: propertyId
   }
   \`\`\`

3. ** Check backend processing **
  - View backend logs
    - Ensure booking creation logic works
      - Test webhook manually

---

## Maps & Location Issues

### Maps not showing

  ** Problem:** Google Maps component shows blank

    ** Solution:**
      1. ** Verify API key **
        \`\`\`json
   // app.json
   "ios": {
     "config": {
       "googleMapsApiKey": "AIza..."  // Correct key
     }
   }
   \`\`\`

2. ** Check APIs enabled **
  - Maps SDK for iOS
    - Maps SDK for Android
      - Places API(if using)

      3. ** Enable billing **
        - Google Cloud Console
          - Billing must be enabled
            - Free tier available

4. ** Check API restrictions **
  - Remove restrictions during testing
    - Add proper restrictions for production

5. ** Rebuild app **
  \`\`\`bash
   # Changes to app.json require rebuild
   eas build --platform all --profile development
   \`\`\`

---

### Location permissions denied

  ** Problem:** App can't access device location

    ** Solution:**
      1. ** Check permissions in app.json **
        \`\`\`json
   "ios": {
     "infoPlist": {
       "NSLocationWhenInUseUsageDescription": "We need location to show nearby properties"
     }
   }
   \`\`\`

2. ** Request permissions in code **
  \`\`\`javascript
   import * as Location from 'expo-location';

   const { status } = await Location.requestForegroundPermissionsAsync();
   if (status !== 'granted') {
     // Handle denial
   }
   \`\`\`

3. ** Check device settings **
  - iOS: Settings → App → Location
    - Android: Settings → Apps → App → Permissions

---

## Push Notification Issues

### Notifications not received

  ** Problem:** Push notifications don't appear

    ** Solution:**
      1. ** Verify permissions **
        \`\`\`javascript
   import * as Notifications from 'expo-notifications';

   const { status } = await Notifications.requestPermissionsAsync();
   \`\`\`

2. ** Check notification token **
  \`\`\`javascript
   const token = await Notifications.getExpoPushTokenAsync();
   console.log('Token:', token.data);
   \`\`\`

3. ** Test with Expo tool **
  \`\`\`bash
   expo push:send --to ExponentPushToken[xxx] --title "Test"
   \`\`\`

4. ** Verify backend sending **
  - Check backend notification sending logic
    - View Expo Push Notification logs

5. ** Test on physical device **
  - Notifications may not work on simulators
    - iOS simulator doesn't support push

6. ** Check notification settings **
  - Device notification settings
    - App - specific settings
      - Do Not Disturb mode

---

### APNs or FCM configuration errors

  ** Problem:** iOS(APNs) or Android(FCM) push not working

    ** Solution:**
      1. ** For iOS(APNs) **
        \`\`\`bash
   eas credentials
   # Select iOS → Push Notifications
   # Upload APNs key (.p8 file)
   \`\`\`

2. ** For Android(FCM) **
  \`\`\`bash
   eas credentials
   # Select Android → Push Notifications
   # Upload google-services.json
   \`\`\`

3. ** Verify credentials **
  - Check EAS credentials manager
    - Ensure correct team / account
      - Verify key IDs match

---

## UI & Display Issues

### Dark mode not working

  ** Problem:** App doesn't respect dark mode

    ** Solution:**
      1. ** Check device settings **
        - iOS: Settings → Display & Brightness → Dark
          - Android: Settings → Display → Dark theme

2. ** Verify useColorScheme **
  \`\`\`javascript
   import { useColorScheme } from 'react-native';

   const colorScheme = useColorScheme();
   const colors = Colors[colorScheme ?? 'light'];
   \`\`\`

3. ** Check Colors.ts **
  - Ensure dark colors are defined
    - Verify colors are used in components

---

### Images not loading

  ** Problem:** Images show broken or don't load

    ** Solution:**
      1. ** Check image URLs **
        - Verify URLs are correct and accessible
          - Test URLs in browser

2. ** Check network connection **
  - Ensure device has internet
    - Test API connectivity

3. ** Add error handling **
  \`\`\`javascript
   <Image
     source={{ uri: imageUrl }}
     onError={(error) => console.log('Image error:', error)}
     defaultSource={require('./assets/placeholder.png')}
   />
   \`\`\`

4. ** Check CORS for images **
  - Image server must allow CORS
    - Add appropriate headers

---

### Layout broken on different screen sizes

  ** Problem:** UI looks broken on some devices

    ** Solution:**
      1. ** Use responsive design **
        \`\`\`javascript
   import { Dimensions } from 'react-native';

   const { width, height } = Dimensions.get('window');

   // Use percentages or calculated values
   width: width * 0.9
   \`\`\`

2. ** Test on multiple devices **
  - Small phones(iPhone SE)
    - Large phones(iPhone Pro Max)
      - Tablets
      - Different aspect ratios

3. ** Use flexible layouts **
  \`\`\`javascript
   <View style={{ flex: 1 }}>
     <ScrollView>
       {/* Content */}
     </ScrollView>
   </View>
   \`\`\`

---

## Performance Issues

### App is slow or laggy

  ** Problem:** App performance is poor

    ** Solution:**
      1. ** Enable Hermes ** (if not enabled)
\`\`\`json
   // app.json
   "jsEngine": "hermes"
   \`\`\`

2. ** Optimize images **
  - Compress images
    - Use appropriate sizes
      - Consider WebP format

3. ** Use React.memo **
  \`\`\`javascript
   export const MyComponent = React.memo(({ prop }) => {
     return <View>{/* content */}</View>;
   });
   \`\`\`

4. ** Optimize re - renders **
  \`\`\`javascript
   // Use useCallback
   const handlePress = useCallback(() => {
     // logic
   }, [dependencies]);

   // Use useMemo
   const value = useMemo(() => {
     return expensiveCalculation();
   }, [dependencies]);
   \`\`\`

5. ** Profile with Flipper **
- Install Flipper
  - Use React DevTools
    - Profile performance

---

### App crashes with out of memory

  ** Problem:** App crashes due to memory issues

    ** Solution:**
      1. ** Optimize images **
        - Reduce image sizes
          - Use thumbnails for lists
            - Load full size on demand

2. ** Fix memory leaks **
  - Cleanup listeners in useEffect
    - Cancel timers and intervals
      - Clear intervals on unmount

3. ** Use FlatList for long lists **
  \`\`\`javascript
   <FlatList
     data={items}
     renderItem={renderItem}
     keyExtractor={item => item.id}
     maxToRenderPerBatch={10}
     windowSize={10}
   />
   \`\`\`

---

## Getting Further Help

If issues persist after trying these solutions:

1. ** Check Error Logs **
  - iOS: Xcode Console
    - Android: \`adb logcat\`

2. ** Search Documentation **
  - React Native: https://reactnative.dev
  - Expo: https://docs.expo.dev

3. ** Community Resources **
  - Stack Overflow
    - React Native GitHub Issues
      - Expo Forums

4. ** Contact Support **
   📧 Email: support @webpenter.com

Include:
- Your purchase code
  - Detailed error description
    - Error messages / screenshots
      - Steps to reproduce
        - Device / platform info

---

** Still stuck ?** Don't hesitate to reach out to our support team!


    `},changelog:{title:"ChangeLog",icon:Vh,tags:["updates","versions","history"],content:`
# Changelog

All notable changes to the BookHere mobile application will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [3.0.0] - 2026-01-05

### 🎉 Major Release - Complete Redesign & Performance Overhaul

This is the biggest update yet! Complete redesigns, multi-language support, and massive performance improvements.

### ✨ Added

#### Multi-Language Support
- **10 Languages** now supported:
  - English
  - Spanish (Español)
  - Portuguese (Português)
  - French (Français)
  - German (Deutsch)
  - Russian (Русский)
  - Chinese (中文)
  - Arabic (العربية) with RTL support
  - Urdu (اردو) with RTL support
  - Hindi (हिंदी)
- Automatic device language detection
- Runtime language switching
- Complete UI translation coverage

#### Blog System Redesign
- Beautiful full-screen image galleries with swipe navigation
- Reading progress bar
- Engagement metrics (likes, comments, saves)
- Author profile cards with detailed information
- Related articles carousel
- Quick actions bar for bookmarking and sharing
- Smooth animations throughout
- Modern magazine-style reading experience

#### Property Management Redesign
- Grid/list view toggle for property listings
- Advanced search within your properties
- Quick stats cards (Published, Pending, Rejected)
- Status-based filtering with one tap
- Swipe left for quick edit/delete actions
- Pull-to-refresh functionality
- Improved property status indicators
- Enhanced empty states

#### Social Sharing Integration
- Facebook sharing
- Twitter sharing
- WhatsApp sharing
- Telegram sharing
- Copy link functionality
- Native share sheet integration
- Smooth sharing animations

### 🎨 Changed

#### Performance Improvements
- **60% reduction in app size** (30-40MB vs 100MB)
- **40% faster app startup time**
- **30% less memory usage**
- **60fps scrolling** optimization
- Improved image loading and caching
- Better memory management
- Optimized animations and transitions

#### Messaging System
- Updated color scheme matching app branding
- All icons now use BookHere signature colors
- Improved message sync reliability
- Enhanced performance
- Better error handling
- Smoother animations

#### UI/UX Enhancements
- Consistent color usage throughout app
- Improved dark mode appearance
- Better loading states with shimmer effects
- Enhanced empty state messages
- Smoother transitions between screens
- Updated icons and indicators
- Refined spacing and typography

### 🐛 Fixed

#### Android Fixes
- Fixed back button not working properly in modals
- Improved keyboard handling in messages and forms
- Fixed status bar appearance on all Android devices
- Corrected shadows and elevations displaying
- Resolved navigation state persistence issues

#### Messaging Fixes
- Fixed message sync issues causing delays
- Prevented data loss when navigating from unsent messages
- Fixed crashes when loading images or documents
- Improved message delivery reliability
- Fixed notification handling for messages

#### Property Listing Fixes
- Fixed favorite/bookmark syncing across app
- Improved property image loading and caching
- Fixed layout issues on different screen sizes
- Better error handling when properties fail to load
- Fixed property search result accuracy

#### Search & Navigation Fixes
- Improved search results accuracy
- Fixed navigation history tracking
- Better deep linking support for notifications
- Navigation state now persists across app restarts
- Fixed filter application issues

#### Visual Polish Fixes
- Fixed inconsistent colors across the app
- Improved dark mode appearance
- Better loading states and animations
- Fixed visual glitches and layout shifts
- Corrected RTL layout issues

### 🔧 Technical Improvements

#### Under the Hood
- Enabled ProGuard code optimization for Android
- Split APKs by architecture for smaller downloads
- Improved image optimization and compression
- Better error boundaries prevent full app crashes
- Fixed memory leaks in auto-slide carousels
- Improved API request handling and cancellation
- Better TypeScript type coverage

### 📊 Statistics

- **11** new blog components created from scratch
- **10** languages supported
- **60%** reduction in app size
- **40%** faster app startup
- **30%** less memory usage
- **68** bug fixes and improvements
- **2** complete feature redesigns
- **Hundreds** of visual and performance enhancements

---

## [2.0.0] - 2025-08-15

### 🎉 Major Update - Enhanced Features & Stability

### ✨ Added
- **Dark Mode Support**: Automatic dark theme based on system settings
- **Biometric Authentication**: Face ID and Fingerprint login
- **Enhanced Wallet**: Detailed earnings analytics and charts
- **Invoice Generation**: Download and share booking invoices
- **Property Analytics**: View performance metrics for listings
- **Push Notification**: Real-time booking and message alerts
- **OTP Verification**: Phone number verification system

### 🎨 Changed
- Redesigned home screen with better property discovery
- Improved property detail page layout
- Enhanced search and filter interface
- Better image gallery with pinch-to-zoom
- Modernized profile settings screen
- Updated color scheme for better contrast

### 🐛 Fixed
- Fixed login session timeout issues
- Resolved image upload failures
- Fixed booking date selection bugs
- Improved API error handling
- Fixed payment processing edge cases
- Resolved navigation stack issues
- Fixed calendar date picker bugs

### 🔧 Technical
- Updated to React Native 0.72.0
- Updated to Expo SDK 49
- Migrated to React Navigation 6.x
- Improved TypeScript coverage
- Better code organization
- Performance optimizations

---

## [1.5.0] - 2025-05-20

### ✨ Added
- **Property Comparison**: Compare multiple properties side-by-side
- **Saved Searches**: Save search criteria for quick access
- **Price Alerts**: Get notified when prices drop
- **Instant Booking**: Book properties without host approval
- **Amenities Filtering**: Enhanced filter by property amenities
- **Map Clustering**: Better map performance with many properties

### 🎨 Changed
- Improved property card design
- Enhanced booking confirmation flow
- Better search results pagination
- Modernized settings interface
- Updated messaging UI

### 🐛 Fixed
- Fixed map marker clustering issues
- Resolved booking confirmation emails
- Fixed date range selection bugs
- Improved offline handling
- Fixed crash on property details
- Resolved payment webhook issues

---

## [1.4.2] - 2025-03-10

### 🐛 Fixed
- Critical payment processing bug
- Fixed Google Sign-In on iOS
- Resolved navigation crash
- Fixed property image carousel
- Improved API timeout handling

### 🔧 Technical
- Updated dependencies to latest stable versions
- Security patches applied
- Performance improvements

---

## [1.4.0] - 2025-02-01

### ✨ Added
- **PayPal Integration**: Alternative payment method
- **Thai QR Payment**: QR code-based payments
- **Property Video Tours**: Support for video uploads
- **Review Photos**: Guests can upload photos with reviews
- **Host Response**: Hosts can respond to reviews
- **Property Rules**: Detailed house rules section

### 🎨 Changed
- Improved booking flow with step-by-step wizard
- Enhanced property images with better quality
- Better loading indicators throughout app
- Modernized tab bar design

### 🐛 Fixed
- Fixed Stripe payment errors on some cards
- Resolved favorite sync issues
- Fixed messaging notification bugs
- Improved error messages

---

## [1.3.0] - 2024-12-15

### ✨ Added
- **Reservation Management**: Complete dashboard for hosts
- **Calendar View**: See bookings in calendar format
- **Guest Profiles**: View guest information and history
- **Cancellation Requests**: Request and manage cancellations
- **Property Status**: Track listing approval status
- **Earnings Dashboard**: Detailed revenue tracking

### 🎨 Changed
- Redesigned dashboard navigation
- Improved property management interface
- Enhanced messaging interface
- Better tablet support

### 🐛 Fixed
- Fixed reservation sync issues
- Resolved calendar date bugs
- Fixed profile update errors
- Improved image upload reliability

---

## [1.2.0] - 2024-10-20

### ✨ Added
- **Add Listing**: 7-step property submission wizard
- **Photo Upload**: Multiple image upload with preview
- **Pricing Setup**: Flexible pricing configuration
- **Amenities Selection**: Comprehensive amenities list
- **Location Picker**: Interactive map for location selection
- **Draft Saving**: Auto-save listing drafts

### 🎨 Changed
- Improved form validation throughout app
- Better error messages
- Enhanced loading states
- Modernized UI components

### 🐛 Fixed
- Fixed form submission errors
- Resolved image compression issues
- Fixed location picker bugs
- Improved validation feedback

---

## [1.1.0] - 2024-08-30

### ✨ Added
- **Google Maps Integration**: Interactive property maps
- **Advanced Search**: Search by location, dates, guests
- **Favorites**: Save properties to wishlist
- **Reviews & Ratings**: Read and write property reviews
- **Direct Messaging**: Chat with hosts
- **Booking System**: Complete reservation workflow

### 🎨 Changed
- Improved navigation structure
- Enhanced property detail page
- Better search interface
- Modernized authentication screens

### 🐛 Fixed
- Fixed map rendering issues
- Resolved booking calculation bugs
- Fixed messaging sync problems
- Improved search performance

---

## [1.0.0] - 2024-07-01

### 🎉 Initial Release

#### Core Features
- **User Authentication**: Login, signup, password recovery
- **Property Listings**: Browse and search properties
- **Property Details**: Detailed property information
- **User Profile**: Manage account settings
- **Basic Booking**: Make reservations
- **Stripe Payments**: Credit card payment processing
- **Basic Messaging**: Contact property hosts
- **Push Notifications**: Basic notification support

#### Platforms
- iOS 12.0+
- Android 5.0+

#### Technology Stack
- React Native 0.68.0
- Expo SDK 46
- React Navigation 5.x
- TypeScript support

---

## Version History Summary

| Version | Release Date | Key Feature |
|---------|-------------|-------------|
| 3.0.0   | 2026-01-05  | Multi-language, redesign, 60% smaller |
| 2.0.0   | 2025-08-15  | Dark mode, biometrics, analytics |
| 1.5.0   | 2025-05-20  | Property comparison, instant booking |
| 1.4.2   | 2025-03-10  | Critical bug fixes |
| 1.4.0   | 2025-02-01  | PayPal, QR payments, video tours |
| 1.3.0   | 2024-12-15  | Reservation management, calendar |
| 1.2.0   | 2024-10-20  | Add listing wizard |
| 1.1.0   | 2024-08-30  | Google Maps, messaging, reviews |
| 1.0.0   | 2024-07-01  | Initial release |

---

## Upgrade Guide

### From 2.x to 3.0.0

#### Breaking Changes
None - all changes are backward compatible

#### Recommended Updates
1. Update \`app.json\` with new configuration
2. Add \`.env\` file for Google OAuth
3. Update dependencies: \`npm install\`
4. Clear cache: \`npm start --clear\`
5. Rebuild app: \`eas build --platform all\`

#### New Features to Configure
- Multi-language support (optional)
- Social sharing (configure share URLs)
- Updated color scheme (customize in Colors.ts)

### From 1.x to 2.0.0

#### Breaking Changes
- Navigation structure changed to React Navigation 6.x
- Dark mode requires theme setup

#### Required Updates
1. Update dependencies: \`npm install\`
2. Update navigation imports
3. Add dark mode colors to Colors.ts
4. Rebuild app

---

## Deprecation Notices

### Version 3.0.0
- No deprecations in this version

### Version 2.0.0
- React Navigation 5.x support will be removed in v4.0.0
- Expo SDK 49 is minimum supported version

---

## Known Issues

### Version 3.0.0
- **iOS 12.x**: Some animations may appear slower on older devices (optimization in progress)
- **Android 5.x**: Dark mode transition may have minor visual glitches
- **Workaround**: Restart app after changing language for full effect

### Planned Fixes
These issues will be addressed in upcoming minor releases:
- Further optimization for iOS 12
- Dark mode transition smoothness on Android 5-6
- Language change instant application

---

## Coming Soon

### Version 3.1.0 (Planned)
- Apple Sign-In integration
- Facebook login
- Enhanced property comparison
- Saved payment methods
- AR room preview (iOS 13+)
- Improved accessibility
- More currency options

### Version 3.2.0 (Planned)
- Advanced host analytics
- Dynamic pricing suggestions
- Multi-property booking
- Split payments
- Group bookings
- Enhanced calendar management

---

## Support

For questions about updates or specific versions:

📧 Email: support@webpenter.com
🔖 Purchase Code: Required for support
📚 Documentation: See /documentation folder

---

## License

All versions are subject to the ThemeForest license terms.

- Regular License: Single use
- Extended License: Multiple/SaaS use

See LICENSE.txt for full terms.


    `},submission:{title:"App Submission",icon:gu,subItems:{play_store:{title:"Google Play Store",icon:V0,tags:["android","submission","checklist"],content:`
# Google Play Store Submission Checklist

This comprehensive checklist will guide you through preparing and submitting your BookHere app to the Google Play Store.

## Table of Contents

1. [Pre-Submission Setup](#pre-submission-setup)
2. [Environment Variables & API Keys](#environment-variables--api-keys)
3. [App Configuration](#app-configuration)
4. [Build & Testing](#build--testing)
5. [Store Listing Assets](#store-listing-assets)
6. [Google Play Console Setup](#google-play-console-setup)
7. [Final Checks](#final-checks)
8. [Submission](#submission)

---

## Pre-Submission Setup

### 1. Google Play Developer Account

- [ ] Create a Google Play Developer account ($25 one-time fee)
- [ ] Complete identity verification
- [ ] Set up payment profile (for paid apps or in-app purchases)
- [ ] Accept Google Play Developer Distribution Agreement

**URL:** https://play.google.com/console/signup

---

## Environment Variables & API Keys

### 2. Production Environment Variables

#### 2.1 Get Production SHA-1 Certificate

- [ ] Create your app in Google Play Console
- [ ] Opt in to Google Play App Signing (recommended)
- [ ] Go to: **Google Play Console → Your App → Setup → App Signing**
- [ ] Copy the **SHA-1 certificate fingerprint** (under "App signing key certificate")

#### 2.2 Configure Google Cloud Console

Go to: https://console.cloud.google.com/apis/credentials

##### Google OAuth (Sign-In)

- [ ] Create **Android OAuth 2.0 Client ID**:
  - Package name: \`com.webpenter.googlesignin\`
  - SHA-1 fingerprint: [Paste production SHA-1 from step 2.1]
  - Copy the Client ID

- [ ] Create **iOS OAuth 2.0 Client ID** (if not already created):
  - Bundle ID: \`com.webpenter.googlesignin\`
  - Copy the Client ID

- [ ] Create **Web OAuth 2.0 Client ID** (if not already created):
  - Copy the Client ID

##### Google Maps API

- [ ] Create a **production API key** (or use existing)
- [ ] Restrict the key:
  - Application restrictions: **Android apps**
  - Add package name: \`com.webpenter.googlesignin\`
  - Add SHA-1 fingerprint: [Paste production SHA-1]
- [ ] Enable required APIs:
  - [ ] Maps SDK for Android
  - [ ] Places API (if used)
  - [ ] Geocoding API (if used)

#### 2.3 Configure Firebase Console

Go to: https://console.firebase.google.com/

- [ ] Open your Firebase project
- [ ] Go to **Project Settings**
- [ ] Add production SHA-1 certificate fingerprint
- [ ] Download new **google-services.json** for Android
- [ ] Replace the file in your project root: \`/google-services.json\`

#### 2.4 Update Production Environment File

Edit: \`/Users/apple/homey-mobile-apps-react/.env.production\`

\`\`\`bash
# Production Environment Variables

# Google OAuth Client IDs(REPLACE WITH YOUR PRODUCTION VALUES)
EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID=YOUR_PRODUCTION_IOS_CLIENT_ID.apps.googleusercontent.com
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID=YOUR_PRODUCTION_WEB_CLIENT_ID.apps.googleusercontent.com
EXPO_PUBLIC_GOOGLE_ANDROID_CLIENT_ID=YOUR_PRODUCTION_ANDROID_CLIENT_ID.apps.googleusercontent.com

# Google Maps API Key(Production)
GOOGLE_MAPS_API_KEY=YOUR_PRODUCTION_GOOGLE_MAPS_API_KEY

# App Configuration
APP_VARIANT=production
          \`\`\`

- [ ] Replace all \`YOUR_PRODUCTION_*\` placeholders with actual values from steps 2.2 and 2.3
- [ ] Save the file
- [ ] **DO NOT commit this file to git** (already in .gitignore)

---

## App Configuration

### 3. Update App Version

Edit: \`app.config.js\`

- [ ] Update version number: \`version: "3.0.0"\` → \`"X.Y.Z"\`
- [ ] Update Android versionCode: \`versionCode: 10\` → increment by 1 (e.g., \`11\`)
- [ ] Update iOS buildNumber: \`buildNumber: "10"\` → increment by 1 (e.g., \`"11"\`)

**Version Guidelines:**
- Major version (X): Breaking changes
- Minor version (Y): New features
- Patch version (Z): Bug fixes
- versionCode: Must increment with each release (used by Google Play)

### 4. App Bundle Identifier

Verify in \`app.config.js\`:

\`\`\`javascript
android: {
  package: "com.webpenter.googlesignin",  // Must match Google Cloud Console
  versionCode: 11,
  // ...
}
\`\`\`

- [ ] Confirm package name matches all Google services configurations

### 5. App Permissions

Review in \`app.config.js\` (android.permissions):

- [ ] Remove any unnecessary permissions
- [ ] Ensure required permissions are present:
  - \`android.permission.INTERNET\`
  - \`android.permission.USE_BIOMETRIC\` (if using biometric auth)
  - \`android.permission.RECORD_AUDIO\` (if using audio features)

---

## Build & Testing

### 6. Build Production APK/AAB

#### 6.1 Clean Build

\`\`\`bash
# Remove old builds
rm -rf node_modules
rm -rf .expo

# Reinstall dependencies
npm install
\`\`\`

#### 6.2 Create Production Build

\`\`\`bash
# Build Android App Bundle(AAB) for production
eas build --platform android --profile production
  \`\`\`

**Build Configuration:**
- EAS will automatically use \`.env.production\` values (configured in \`eas.json\`)
- Build will create an \`.aab\` file (Android App Bundle)
- Wait for build to complete (check status at: https://expo.dev)

#### 6.3 Download Build

- [ ] Go to https://expo.dev/accounts/[your-account]/projects/bookhere/builds
- [ ] Download the production \`.aab\` file
- [ ] Save it to a secure location

### 7. Testing

#### 7.1 Internal Testing

- [ ] Upload \`.aab\` to Google Play Console → Internal Testing track
- [ ] Add testers (email addresses)
- [ ] Test all core features:
  - [ ] Google Sign-In (production credentials)
  - [ ] Google Maps functionality
  - [ ] Biometric authentication
  - [ ] Push notifications
  - [ ] Payment flow (if applicable)
  - [ ] All navigation and features

#### 7.2 Pre-Launch Report

- [ ] Review Google Play Console Pre-launch report
- [ ] Fix any crashes or issues found
- [ ] Re-build and re-test if necessary

---

## Store Listing Assets

### 8. App Icon & Graphics

Verify these files exist and meet requirements:

- [ ] App Icon: \`./src/assets/images/icon.png\` (512x512px, PNG)
- [ ] Feature Graphic: Required (1024x500px) - **CREATE THIS**
- [ ] Screenshots: See [SCREENSHOTS_GUIDE.md](./SCREENSHOTS_GUIDE.md)

#### 8.1 Feature Graphic

**Requirements:**
- Size: 1024 x 500 pixels
- Format: PNG or JPEG
- Max file size: 1024 KB

**Create using:**
- Figma, Canva, or design tool of your choice
- Should showcase your app's key feature or branding
- No device frames needed

**Reference:** \`documentation/SCREENSHOTS_GUIDE.md\` for design guidance

#### 8.2 Screenshots

**Requirements:**
- At least 2 screenshots
- Recommended: 4-8 screenshots
- Format: PNG or JPEG
- Dimensions: See guide below

**Phone Screenshots:**
- Min: 320px on short side
- Max: 3840px on long side
- Recommended: 1080 x 1920 (portrait) or 1920 x 1080 (landscape)

**Tablet Screenshots (optional but recommended):**
- Min: 1200px on short side
- Recommended: 1920 x 1200 or 2560 x 1800

**Screenshot Content:**
- [ ] Home screen
- [ ] Property listing
- [ ] Booking flow
- [ ] User profile
- [ ] Maps/location feature
- [ ] Additional key features

**Tool:** Use Figma templates from \`documentation/SCREENSHOTS_GUIDE.md\`

---

## Google Play Console Setup

### 9. Create App Listing

Go to: https://play.google.com/console/

#### 9.1 Create New App

- [ ] Click "Create app"
- [ ] App name: **BookHere** (or your custom name)
- [ ] Default language: **English (United States)**
- [ ] App or game: **App**
- [ ] Free or paid: **Free** (or Paid if applicable)
- [ ] Accept declarations

#### 9.2 Store Listing

**Main Store Listing:**

- [ ] **App name:** BookHere Mobile
- [ ] **Short description** (80 chars max):
  \`\`\`Example Short Description
  Book hotels, apartments, and vacation rentals with ease.
  \`\`\`

- [ ] **Full description** (4000 chars max):
  \`\`\`Example Full Description
  BookHere is your all-in-one mobile solution for discovering and booking accommodations.

  KEY FEATURES:
  • Browse thousands of properties worldwide
  • Advanced search with filters(price, location, amenities)
  • Secure booking and payment processing
  • Real - time availability and instant confirmation
  • Interactive maps with Google Maps integration
  • User reviews and ratings
  • Favorite properties and booking history
  • Biometric authentication for secure login
  • Push notifications for booking updates
  • Multiple payment options

  SEAMLESS BOOKING EXPERIENCE:
  Find your perfect stay with our intuitive interface.Search by location, dates, and preferences.
  View detailed property information, photos, and guest reviews.Book instantly with secure payment processing.

  USER-FRIENDLY FEATURES:
  • Easy property discovery with smart filters
  • Save favorite listings for later
  • Manage bookings in one place
  • Direct messaging with property owners
  • Split payments and flexible options

SECURE & RELIABLE:
  • Biometric authentication(Face ID / Fingerprint)
  • Secure payment processing with Stripe
  • Privacy - focused user data protection
  • 24 / 7 customer support

  Perfect for travelers, vacationers, and business professionals looking for accommodations.

  Download BookHere today and start exploring your next destination!
  \`\`\`

- [ ] **App icon:** Upload \`icon.png\` (512x512)
- [ ] **Feature graphic:** Upload feature graphic (1024x500)
- [ ] **Phone screenshots:** Upload 2-8 screenshots
- [ ] **Tablet screenshots:** Upload (optional)

**Categorization:**

- [ ] **App category:** Travel & Local
- [ ] **Tags:** Add up to 5 tags (e.g., "hotel booking", "travel", "vacation rental", "accommodation")

**Contact Details:**

- [ ] **Email:** your-support-email@example.com
- [ ] **Phone:** (optional) +1-XXX-XXX-XXXX
- [ ] **Website:** https://your-website.com
- [ ] **Privacy Policy URL:** **REQUIRED** - https://your-website.com/privacy-policy

> **Important:** You MUST have a privacy policy URL. Create one if you don't have it.

**External Marketing (optional):**

- [ ] Promotional video (YouTube URL)
- [ ] Marketing opt-in

#### 9.3 Store Settings

**App Access:**

- [ ] All functionality is available without restrictions
- [ ] OR: Provide instructions for special access/demo account

**Ads:**

- [ ] Select "Yes" or "No" for ads in app
- [ ] (If applicable) App uses Ads

**Content Rating:**

- [ ] Complete content rating questionnaire
- [ ] Answer all questions honestly
- [ ] Expected rating: Everyone or Teen (based on content)

**Target Audience:**

- [ ] Target age: 18 and over (or appropriate for your app)
- [ ] Store Listing Presence: All countries or select specific countries

**News Apps (if applicable):**

- [ ] Not applicable (unless your app is a news app)

---

### 10. App Content

#### 10.1 Privacy Policy

- [ ] Create privacy policy page on your website
- [ ] Must cover:
  - Data collection and usage
  - Third-party services (Google, Stripe, etc.)
  - User rights
  - Contact information
- [ ] Add URL to store listing

**Sample Privacy Policy Sections:**
\`\`\`
  - Information Collection
    - How We Use Your Information
      - Data Sharing and Third-party Services
        - Google Sign-In and OAuth
          - Payment Processing(Stripe)
            - Location Services(Google Maps)
              - Push Notifications
                - Data Security
                  - User Rights
                    - Contact Us
                      \`\`\`

#### 10.2 Data Safety

Google Play requires detailed information about data handling:

- [ ] Go to **App Content → Data Safety**
- [ ] Answer questions about:
  - [ ] Data collection (location, personal info, financial info, etc.)
  - [ ] Data sharing with third parties
  - [ ] Security practices (encryption, data deletion)
  - [ ] COPPA compliance

**Data Collected by BookHere:**
- Personal info: Name, email, phone
- Location: Approximate location (for search)
- Financial info: Payment info (processed by Stripe)
- Photos: Profile pictures (optional)
- App activity: Search history, booking history

**Data Shared:**
- With service providers: Google (auth, maps), Stripe (payments)
- Not sold to third parties

**Security:**
- Data encrypted in transit (HTTPS)
- Data encrypted at rest
- Users can request deletion

#### 10.3 App Category & Tags

- [ ] **Category:** Travel & Local
- [ ] **Tags:** hotel, booking, travel, vacation rental, accommodation

---

### 11. Release

#### 11.1 Production Release

- [ ] Go to **Release → Production**
- [ ] Click "Create new release"
- [ ] Upload \`.aab\` file from step 6.3
- [ ] Add release notes:

**Release Notes Example:**
\`\`\`
Initial release - BookHere Mobile v3.0.1

NEW FEATURES:
• Browse and book accommodations worldwide
• Google Sign-In for quick authentication
• Interactive maps with property locations
• Secure payment processing
• Biometric authentication support
• Push notifications for booking updates
• User reviews and ratings
• Favorite properties and booking history

We're excited to bring you BookHere Mobile! Download now and start exploring your next destination.
  \`\`\`

- [ ] Review release (click "Review release")
- [ ] Check for any warnings or errors
- [ ] Fix any issues before proceeding

#### 11.2 Countries & Regions

- [ ] Select countries/regions for distribution
  - All countries (default)
  - OR: Select specific countries

#### 11.3 Rollout Percentage (optional)

- [ ] Start with staged rollout (e.g., 10%, 50%, 100%)
- [ ] OR: Release to 100% immediately

---

## Final Checks

### 12. Pre-Submission Checklist

Before clicking "Submit for Review":

**App Quality:**
- [ ] App has been tested thoroughly
- [ ] No crashes or critical bugs
- [ ] All features work as expected
- [ ] Google Sign-In works with production credentials
- [ ] Google Maps displays correctly
- [ ] Payments process successfully (test mode OK for initial release)

**Store Listing:**
- [ ] App name is correct
- [ ] Descriptions are clear and compelling
- [ ] Screenshots showcase key features
- [ ] Feature graphic looks professional
- [ ] Contact details are accurate
- [ ] Privacy policy URL is live and accessible

**Compliance:**
- [ ] Content rating completed
- [ ] Data safety form completed
- [ ] Privacy policy covers all data collection
- [ ] App complies with Google Play policies
- [ ] No copyright or trademark violations

**Technical:**
- [ ] Correct package name (\`com.webpenter.googlesignin\`)
- [ ] Version code incremented
- [ ] Production environment variables configured
- [ ] google-services.json is production version
- [ ] App signed with correct keystore

**Legal:**
- [ ] Developer Distribution Agreement accepted
- [ ] Content guidelines reviewed
- [ ] No restricted content (see policies)

---

## Submission

### 13. Submit for Review

- [ ] Go to **Publishing overview**
- [ ] Review all sections (should show green checkmarks)
- [ ] Click **"Send X items for review"**
- [ ] Wait for Google review (typically 1-7 days)

### 14. Post-Submission

#### Monitor Review Status:

- [ ] Check Google Play Console daily
- [ ] Respond to any review requests promptly
- [ ] Fix issues if rejected and resubmit

#### After Approval:

- [ ] App will be live on Google Play Store
- [ ] Share store listing URL: \`https://play.google.com/store/apps/details?id=com.webpenter.googlesignin\`
-[] Monitor user reviews and ratings
  - [] Respond to user feedback
    - [] Plan updates and improvements

---

## Additional Resources

### Development Commands

  \`\`\`bash
# Local development build
npm start

# Preview build (development environment)
eas build --platform android --profile preview

# Production build (production environment)
eas build --platform android --profile production

# Check build status
eas build:list

# View credentials
eas credentials -p android
\`\`\`

### Environment Management

  ** Development:**
    \`\`\`bash
# Uses .env.development automatically
npm start
eas build --platform android --profile development
\`\`\`

    ** Production:**
      \`\`\`bash
# Uses .env.production automatically
eas build --platform android --profile production
\`\`\`

### Useful Links

- ** Google Play Console:** https://play.google.com/console/
- ** Google Cloud Console:** https://console.cloud.google.com/
- ** Firebase Console:** https://console.firebase.google.com/
- ** Expo Dashboard:** https://expo.dev/
- ** Google Play Policies:** https://play.google.com/about/developer-content-policy/
- ** App Quality Guidelines:** https://developer.android.com/quality

### Support

For issues or questions:
- ** Documentation:** See\`documentation/\` folder
  - ** Troubleshooting:** \`documentation/TROUBLESHOOTING.md\`
    - ** Configuration:** \`documentation/CONFIGURATION.md\`
      - ** Email:** support@webpenter.com

---

## Troubleshooting Common Issues

### "App not configured for OAuth"

  ** Issue:** Google Sign - In fails in production

    ** Solution:**
      1. Verify SHA-1 certificate in Google Cloud Console
2. Ensure production OAuth client ID is correct in \`.env.production\`
3. Check Firebase console has production SHA-1
4. Re-download\`google-services.json\` if needed

### "Google Maps not displaying"

  ** Issue:** Maps show blank or "For development purposes only"

    ** Solution:**
      1. Check Google Maps API key in \`.env.production\`
2. Verify API key restrictions in Google Cloud Console
3. Ensure Maps SDK for Android is enabled
4. Add production SHA-1 to API key restrictions

### "App rejected for policy violation"

  ** Issue:** Google rejects app submission

    ** Solution:**
      1. Review rejection email carefully
2. Check Google Play policies: https://play.google.com/about/developer-content-policy/
3. Common issues:
- Missing or inadequate privacy policy
  - Incomplete data safety section
    - Copyright / trademark issues
      - Misleading content or functionality
4. Fix issues and resubmit

### "Build fails during EAS build"

  ** Issue:** Production build fails

    ** Solution:**
      1. Check build logs in Expo dashboard
2. Verify all dependencies are installed
3. Ensure \`google-services.json\` is in project root
4. Check environment variables are set correctly
5. Try clearing cache: \`eas build --platform android --profile production --clear-cache\`

---

## Version History

  | Version | Date | Changes |
| ---------| ------| ---------|
| 3.0.0 | 2024 - XX - XX | Initial release |
| 3.0.1 | TBD | Bug fixes and improvements |

  ---

** Last Updated:** 2026-01 -08
  ** Author:** WebPenter Development Team

For ThemeForest buyers: This checklist is specifically tailored for the BookHere Mobile App.Follow all steps carefully to ensure a smooth submission process.

Good luck with your Google Play Store submission! 🚀


`},app_store:{title:"Apple App Store",icon:tS,tags:["ios","submission","checklist"],content:`
# Apple App Store Submission Checklist

This comprehensive checklist will guide you through preparing and submitting your BookHere app to the Apple App Store.

## Table of Contents

1. [Pre-Submission Setup](#pre-submission-setup)
2. [Apple Developer Account Setup](#apple-developer-account-setup)
3. [Certificates & Provisioning](#certificates--provisioning)
4. [Environment Variables & API Keys](#environment-variables--api-keys)
5. [App Configuration](#app-configuration)
6. [Build & Testing](#build--testing)
7. [TestFlight Beta Testing](#testflight-beta-testing)
8. [Store Listing Assets](#store-listing-assets)
9. [App Store Connect Setup](#app-store-connect-setup)
10. [Final Checks](#final-checks)
11. [Submission](#submission)
12. [After Submission](#after-submission)

---

## Pre-Submission Setup

### 1. Requirements

Before you begin, ensure you have:

- [ ] **Mac computer** (required for iOS development)
- [ ] **Xcode** installed (latest version from Mac App Store)
- [ ] **Apple Developer Program** membership ($99/year)
- [ ] **EAS CLI** installed (\`npm install -g eas-cli\`)
- [ ] **Expo account** (free at https://expo.dev)

**Time required:** 1-2 hours for initial setup

---

## Apple Developer Account Setup

### 2. Apple Developer Program

#### 2.1 Enroll in Apple Developer Program

- [ ] Go to https://developer.apple.com/programs/enroll/
- [ ] Choose account type:
  - **Individual**: Personal apps, sole proprietorship
  - **Organization**: Company apps, requires D-U-N-S number
- [ ] Pay $99 annual fee
- [ ] Wait for approval (typically 24-48 hours)

#### 2.2 Verify Enrollment

- [ ] Log in to https://developer.apple.com/account
- [ ] Confirm enrollment status shows "Active"
- [ ] Note your Team ID (needed later)

#### 2.3 Two-Factor Authentication

- [ ] Enable 2FA on your Apple ID (required)
- [ ] Go to https://appleid.apple.com
- [ ] Security → Two-Factor Authentication
- [ ] Add trusted phone number

---

## Certificates & Provisioning

### 3. App Identifiers & Bundle ID

#### 3.1 Create App ID

Go to: https://developer.apple.com/account/resources/identifiers/list

- [ ] Click the "+" button to create new identifier
- [ ] Select "App IDs" → Continue
- [ ] Select "App" → Continue
- [ ] Fill in details:
  - **Description**: BookHere Mobile App
  - **Bundle ID**: \`com.webpenter.googlesignin\` (must match app.config.js)
  - **Explicit Bundle ID** (not wildcard)
- [ ] Enable capabilities:
  - [ ] Push Notifications
  - [ ] Sign in with Apple (if using)
  - [ ] Associated Domains (if using deep links)
  - [ ] In-App Purchase (if applicable)
- [ ] Click "Continue" → "Register"

**Important:** Bundle ID must match exactly: \`com.webpenter.googlesignin\`

#### 3.2 EAS Managed Credentials (Recommended)

Let EAS handle certificates automatically:

\`\`\`bash
# EAS will create certificates during first build
eas build --platform ios --profile production

# EAS will prompt:
# ✔ Generate a new Apple Distribution Certificate
# ✔ Generate a new Apple Provisioning Profile
  \`\`\`

**Advantages:**
- Automatic certificate management
- No manual certificate creation
- Secure storage in Expo servers
- Easy renewal

#### 3.3 Manual Certificate Setup (Advanced)

If you prefer manual control:

**Create Distribution Certificate:**

\`\`\`bash
# View and manage certificates
eas credentials -p ios

# Select:
# → Set up a new iOS Distribution Certificate
# → Generate new certificate
# Or: Upload existing.p12 certificate
  \`\`\`

**Create Provisioning Profile:**

- [ ] Go to https://developer.apple.com/account/resources/profiles/list
- [ ] Click "+" to create new profile
- [ ] Select "App Store" → Continue
- [ ] Select your App ID → Continue
- [ ] Select your Distribution Certificate → Continue
- [ ] Name it: "BookHere App Store Distribution"
- [ ] Download the profile

---

## Environment Variables & API Keys

### 4. Production Environment Variables

#### 4.1 iOS-Specific Configuration

Edit: \`/Users/apple/homey-mobile-apps-react/.env.production\`

\`\`\`bash
# iOS OAuth Client ID(from Google Cloud Console)
EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID = YOUR_PRODUCTION_IOS_CLIENT_ID.apps.googleusercontent.com

# Web Client ID(for iOS Google Sign - In)
EXPO_PUBLIC_GOOGLE_WEB_CLIENT_ID = YOUR_PRODUCTION_WEB_CLIENT_ID.apps.googleusercontent.com

# Google Maps API Key(iOS)
GOOGLE_MAPS_API_KEY = YOUR_PRODUCTION_IOS_GOOGLE_MAPS_API_KEY

# App Configuration
APP_VARIANT = production
  \`\`\`

#### 4.2 Get iOS OAuth Client ID

Go to: https://console.cloud.google.com/apis/credentials

- [ ] Click "Create Credentials" → "OAuth 2.0 Client ID"
- [ ] Application type: **iOS**
- [ ] Name: "BookHere iOS Production"
- [ ] Bundle ID: \`com.webpenter.googlesignin\`
- [ ] Click "Create"
- [ ] Copy the Client ID
- [ ] Paste into \`.env.production\` as \`EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID\`

#### 4.3 Configure Google Maps for iOS

**Create or Update API Key:**

- [ ] Go to https://console.cloud.google.com/google/maps-apis/credentials
- [ ] Create new API key or use existing
- [ ] Click "Restrict Key"
- [ ] Application restrictions: **iOS apps**
- [ ] Add bundle identifier: \`com.webpenter.googlesignin\`
- [ ] API restrictions: Select APIs:
  - [ ] Maps SDK for iOS
  - [ ] Places API (if used)
  - [ ] Geocoding API (if used)
- [ ] Save
- [ ] Copy API key to \`.env.production\`

#### 4.4 Update GoogleService-Info.plist (iOS Firebase)

If using Firebase for iOS:

- [ ] Go to https://console.firebase.google.com/
- [ ] Select your project
- [ ] Add iOS app (if not already added):
  - iOS bundle ID: \`com.webpenter.googlesignin\`
  - App nickname: "BookHere iOS"
  - App Store ID: (leave blank for now)
- [ ] Download **GoogleService-Info.plist**
- [ ] Replace file in project root: \`/ GoogleService-Info.plist\`

**Verify file location:**
\`\`\`bash
ls - la GoogleService-Info.plist
# Should be in project root
  \`\`\`

---

## App Configuration

### 5. Update App Configuration

#### 5.1 Version and Build Numbers

Edit: \`app.config.js\`

\`\`\`javascript
ios: {
  supportsTablet: true,
  bundleIdentifier: "com.webpenter.googlesignin",
  buildNumber: "10",  // Increment for each submission
  // ...
}
\`\`\`

**Important Version Rules:**
- **buildNumber**: Must be unique for each build uploaded to App Store Connect
  - Format: Integer as string (e.g., "1", "2", "3")
  - Increment by 1 for each submission
  - Never reuse a build number
- **version**: User-facing version (e.g., "3.0.0")
  - Use semantic versioning: MAJOR.MINOR.PATCH
  - Can be the same across multiple builds

**Example progression:**
\`\`\`
Submission 1: version "3.0.0", buildNumber "10"
Submission 2: version "3.0.0", buildNumber "11"(bug fix, same version)
Submission 3: version "3.0.1", buildNumber "12"(new version)
  \`\`\`

#### 5.2 App Capabilities

Verify in \`app.config.js\`:

\`\`\`javascript
ios: {
  infoPlist: {
    NSFaceIDUsageDescription: "Allow BookHere Mobile to use Face ID for secure login.",
    NSLocationWhenInUseUsageDescription: "We need your location to show properties near you.",
    NSPhotoLibraryUsageDescription: "We need access to your photos to upload property images.",
    NSCameraUsageDescription: "We need camera access to take photos of properties.",
    ITSAppUsesNonExemptEncryption: false,
  },
  // ...
}
\`\`\`

**Required Usage Descriptions:**
- [ ] Face ID / Touch ID (if using biometrics)
- [ ] Location (if using maps/location)
- [ ] Photo Library (if users upload photos)
- [ ] Camera (if users take photos)
- [ ] Notifications (if using push notifications)

#### 5.3 Privacy Manifest (iOS 17+)

For iOS 17+, you may need a privacy manifest. EAS handles this automatically, but verify:

- [ ] App uses encryption: Set \`ITSAppUsesNonExemptEncryption: false\` (unless using custom encryption)
- [ ] Declare required reason APIs (EAS/Expo handles this)

---

## Build & Testing

### 6. Build Production IPA

#### 6.1 Pre-Build Checklist

- [ ] \`.env.production\` configured with production credentials
- [ ] \`app.config.js\` version and buildNumber updated
- [ ] \`GoogleService - Info.plist\` in project root (if using Firebase)
- [ ] All API keys are production keys
- [ ] Test locally first: \`npm start\`

#### 6.2 Build with EAS

\`\`\`bash
# Build for App Store submission
eas build --platform ios --profile production

# EAS will:
# 1. Load.env.production variables
# 2. Create / use distribution certificate
# 3. Create / use provisioning profile
# 4. Build IPA file
# 5. Upload to Expo servers
  \`\`\`

**Build Process:**
- Takes 10-25 minutes
- Builds on Expo's macOS servers
- No local Mac required during build
- Build status visible at: https://expo.dev

#### 6.3 Monitor Build

\`\`\`bash
# Check build status
eas build: list --platform ios

# View specific build
eas build: view [build - id]

# Or monitor in browser
# https://expo.dev/accounts/[account]/projects/bookhere/builds
\`\`\`

#### 6.4 Download Build (Optional)

\`\`\`bash
# Download IPA file
eas build: download --platform ios --profile production

# IPA file downloaded to current directory
# production - [timestamp].ipa
  \`\`\`

---

## TestFlight Beta Testing

### 7. Internal Testing with TestFlight

#### 7.1 Automatic Submission to TestFlight

After build completes:

\`\`\`bash
# Submit to TestFlight automatically
eas submit --platform ios --latest

# Or specify build ID
eas submit --platform ios --id [build - id]
  \`\`\`

**EAS will:**
1. Upload IPA to App Store Connect
2. Process build (takes 5-15 minutes)
3. Make available in TestFlight

#### 7.2 Manual Upload (Alternative)

If not using \`eas submit\`:

1. Download IPA: \`eas build: download --platform ios --profile production\`
2. Open **Transporter** app (Mac)
3. Sign in with Apple Developer account
4. Drag and drop IPA file
5. Click "Deliver"
6. Wait for processing

#### 7.3 Add TestFlight Testers

Go to: https://appstoreconnect.apple.com

- [ ] Select your app
- [ ] Go to **TestFlight** tab
- [ ] Click on the build version
- [ ] Add **Internal Testers**:
  - Up to 100 testers (must be in App Store Connect)
  - Add email addresses
  - They receive invitation automatically
- [ ] Or add **External Testers** (requires Beta App Review):
  - Up to 10,000 testers
  - Public link or email invitations
  - Must pass Beta App Review (1-2 days)

#### 7.4 Test with TestFlight

- [ ] Testers install TestFlight app from App Store
- [ ] Testers open invitation email and accept
- [ ] Install BookHere app via TestFlight
- [ ] Test all features:
  - [ ] Google Sign-In
  - [ ] Google Maps
  - [ ] Biometric authentication
  - [ ] Push notifications
  - [ ] Payment flow
  - [ ] All core features

---

## Store Listing Assets

### 8. App Icon & Graphics

#### 8.1 App Icon

- [ ] **Size**: 1024x1024 pixels
- [ ] **Format**: PNG (no alpha channel)
- [ ] **Location**: \`./src/assets/images/icon.png\`
- [ ] **Requirements**:
  - No rounded corners (Apple adds them)
  - No transparency
  - RGB color space
  - 72 DPI minimum

**Verify in app.config.js:**
\`\`\`javascript
icon: "./src/assets/images/icon.png"
  \`\`\`

#### 8.2 Screenshots

**Required Sizes:**

Must provide screenshots for at least one device size:

**6.7" Display (iPhone 15 Pro Max, 14 Pro Max, etc.):**
- [ ] Size: **1290 x 2796 pixels** (portrait) or **2796 x 1290** (landscape)
- [ ] Minimum: 2 screenshots
- [ ] Recommended: 4-8 screenshots

**6.5" Display (iPhone 11 Pro Max, XS Max, etc.):**
- [ ] Size: **1284 x 2778 pixels** (portrait)
- [ ] Fallback for older devices

**5.5" Display (iPhone 8 Plus, 7 Plus, etc.):**
- [ ] Size: **1242 x 2208 pixels** (portrait)
- [ ] Optional but recommended for compatibility

**iPad Pro (12.9-inch) - Optional but recommended:**
- [ ] Size: **2048 x 2732 pixels** (portrait)
- [ ] Shows app supports tablets

**Screenshot Content:**
- [ ] Home screen with property listings
- [ ] Property detail page
- [ ] Booking flow
- [ ] User profile
- [ ] Maps and location features
- [ ] Search and filters
- [ ] Key features showcase

**Tools:**
- Use Figma templates from \`documentation/SCREENSHOTS_GUIDE.md\`
- iOS Simulator (Xcode → Simulator → Cmd+S to screenshot)
- Third-party tools: Screenshot Creator, App Mockup, etc.

#### 8.3 App Preview Video (Optional)

- [ ] Duration: 15-30 seconds
- [ ] Format: M4V, MP4, or MOV
- [ ] Resolution: Match screenshot dimensions
- [ ] Size: Up to 500 MB
- [ ] Shows key features and UI flow

---

## App Store Connect Setup

### 9. Create App in App Store Connect

Go to: https://appstoreconnect.apple.com

#### 9.1 Create New App

- [ ] Click "+" → "New App"
- [ ] Platforms: **iOS**
- [ ] Name: **BookHere** (or your custom name, 30 chars max)
- [ ] Primary Language: **English (U.S.)**
- [ ] Bundle ID: Select \`com.webpenter.googlesignin\`
- [ ] SKU: \`bookhere - ios\` (unique identifier for your records)
- [ ] User Access: **Full Access**
- [ ] Click "Create"

#### 9.2 App Information

**General Information:**

- [ ] **App Name**: BookHere Mobile (30 chars max)
- [ ] **Subtitle**: Book Hotels & Vacation Rentals (30 chars max)
- [ ] **Category**:
  - Primary: **Travel**
  - Secondary: **Lifestyle** (optional)

**Age Rating:**

- [ ] Click "Edit" next to Age Rating
- [ ] Answer questionnaire honestly:
  - Unrestricted Web Access: No
  - Gambling: No
  - Contests: No
  - etc.
- [ ] Expected rating: **4+** or **12+**
- [ ] Click "Done"

#### 9.3 Pricing and Availability

- [ ] **Price**: Free (or set price if paid app)
- [ ] **Availability**: All countries/regions
  - Or select specific countries
- [ ] **Pre-Order**: No (for initial release)

#### 9.4 App Privacy

**Required since iOS 14.5:**

- [ ] Click "Get Started" under App Privacy
- [ ] Answer questions about data collection:

**Data Collection:**
- [ ] **Contact Info**: Email, Name, Phone (collected)
- [ ] **Location**: Approximate location (collected for search)
- [ ] **Identifiers**: User ID (collected)
- [ ] **Usage Data**: Product interactions (collected)
- [ ] **Financial Info**: Payment info (collected, processed by Stripe)
- [ ] **User Content**: Photos (optional, for profile/listings)

**Data Use:**
- [ ] App Functionality
- [ ] Analytics
- [ ] Product Personalization
- [ ] Other Purposes: Third-party services (Google, Stripe)

**Data Linking:**
- [ ] Data is linked to user identity: **Yes**

**Data Tracking:**
- [ ] Does this app use data for tracking?: **No** (unless you use advertising)

**Save and Publish Privacy Policy**

#### 9.5 Version Information

Click on "1.0 Prepare for Submission":

**Promotional Text** (170 chars, updatable without review):
\`\`\`
Discover and book amazing accommodations worldwide.Secure payments, instant confirmation, and seamless booking experience.
\`\`\`

**Description** (4000 chars):
\`\`\`
BookHere is your all-in-one mobile solution for discovering and booking accommodations worldwide.

KEY FEATURES

Browse & Discover
• Thousands of properties: hotels, apartments, vacation rentals
• Advanced search with smart filters(price, location, amenities)
• Interactive maps powered by Google Maps
• High - quality photos and detailed descriptions
• User reviews and ratings

Seamless Booking
• Real-time availability checking
• Instant booking confirmation
• Secure payment processing with Stripe
• Multiple payment options
• Transparent pricing with no hidden fees

User Features
• Face ID / Touch ID for secure login
• Save favorite properties
• Booking history and management
• Push notifications for booking updates
• In-app messaging with hosts
• Multi-language support

For Hosts
• Easy property listing management
• Reservation management
• Calendar synchronization
• Earnings tracking
• Guest communication

Security & Privacy
• Biometric authentication
• Secure payment processing
• Privacy - focused design
• Bank - level encryption

PERFECT FOR

• Vacationers seeking unique stays
• Business travelers needing accommodations
• Adventure seekers exploring new destinations
• Hosts managing rental properties

WHY BOOKHERE ?

✓ User-friendly interface
✓ Fast and responsive
✓ Reliable and secure
✓ 24 / 7 customer support
✓ Regular updates and improvements

Download BookHere today and start exploring your next destination!

REQUIREMENTS
• iOS 13.0 or later
• Internet connection
• Location services(optional, for nearby properties)

  SUPPORT
Questions or issues ? Contact us at support @webpenter.com

Follow us:
• Website: https://your-website.com
• Facebook: @bookhere
• Instagram: @bookhere

Start your journey with BookHere – where great stays begin!
  \`\`\`

**Keywords** (100 chars, comma-separated):
\`\`\`
hotel, booking, travel, vacation, rental, accommodation, airbnb, property, stay, lodging
  \`\`\`

**Support URL**:
\`\`\`
https://your-website.com/support
\`\`\`

**Marketing URL** (optional):
\`\`\`
https://your-website.com
\`\`\`

**Privacy Policy URL** (required):
\`\`\`
https://your-website.com/privacy-policy
\`\`\`

**Build:**
- [ ] Select the build uploaded via TestFlight
- [ ] Click the "+" next to Build

**What's New in This Version** (4000 chars):
\`\`\`
Welcome to BookHere v3.0.0!

NEW FEATURES
• Browse thousands of properties worldwide
• Google Sign-In for quick and secure authentication
• Interactive maps to explore properties
• Secure payment processing
• Biometric authentication(Face ID / Touch ID)
• Push notifications for booking updates
• User reviews and ratings
• Favorite properties and booking history
• Multi-language support

SEAMLESS EXPERIENCE
• Intuitive and beautiful user interface
• Fast property search and filtering
• Real-time availability checking
• Instant booking confirmation
• Easy property management for hosts

We're excited to bring you BookHere! Download now and start exploring amazing accommodations.

Have feedback ? Contact us at support @webpenter.com
  \`\`\`

#### 9.6 Upload Screenshots

- [ ] Click "+" under "iPhone 6.7" Display"
- [ ] Upload 2-8 screenshots
- [ ] Drag to reorder
- [ ] Repeat for other device sizes (if available)
- [ ] Upload iPad screenshots (if available)

#### 9.7 App Review Information

**Contact Information:**
- [ ] First Name: Your Name
- [ ] Last Name: Your Last Name
- [ ] Phone Number: +1-XXX-XXX-XXXX
- [ ] Email: your-email@example.com

**Demo Account** (if app requires login):
- [ ] Sign-in required: **Yes**
- [ ] Username: demo@bookhere.com (create demo account)
- [ ] Password: Demo123! (secure password)
- [ ] Notes: "Demo account for review purposes. Full access to all features."

**Notes:**
\`\`\`
Thank you for reviewing BookHere!

DEMO ACCOUNT CREDENTIALS:
Email: demo @bookhere.com
Password: Demo123!

TESTING NOTES:
- All features are accessible with demo account
  - Google Sign-In is optional(demo account available)
    - Payment processing uses Stripe test mode for demo
      - Test card: 4242 4242 4242 4242

KEY FEATURES TO TEST:
1. Browse properties
2. View property details
3. Use map to explore locations
4. Add properties to favorites
5. Simulate booking(test mode)

Please contact support @webpenter.com with any questions.
\`\`\`

**Attachment** (optional):
- [ ] Upload demo video or additional documentation if needed

#### 9.8 Version Release

- [ ] **Automatically release this version**: Recommended
  - App goes live immediately after approval
- [ ] **Manually release this version**: Alternative
  - You control when app goes live after approval

---

## Final Checks

### 10. Pre-Submission Checklist

Before clicking "Submit for Review":

**App Quality:**
- [ ] App tested thoroughly on physical device
- [ ] No crashes or critical bugs
- [ ] All features work as expected
- [ ] Google Sign-In works with production credentials
- [ ] Google Maps displays correctly
- [ ] Biometric authentication works
- [ ] Push notifications work
- [ ] Payment processing works (test mode OK)
- [ ] App performs well on older devices
- [ ] App works on different iOS versions (iOS 13+)

**Store Listing:**
- [ ] App name is compelling and clear
- [ ] Subtitle is descriptive
- [ ] Description showcases key features
- [ ] Keywords are relevant and optimized
- [ ] Screenshots showcase app beautifully
- [ ] App icon is professional
- [ ] Privacy policy URL is live and accessible
- [ ] Support URL is live

**Compliance:**
- [ ] Age rating completed accurately
- [ ] App Privacy information completed
- [ ] Privacy policy covers all data collection
- [ ] App complies with Apple Review Guidelines
- [ ] No copyright or trademark violations
- [ ] No misleading functionality

**Technical:**
- [ ] Correct bundle identifier: \`com.webpenter.googlesignin\`
- [ ] Build number incremented from previous submission
- [ ] Version number is appropriate
- [ ] Production environment variables configured
- [ ] GoogleService-Info.plist is production version
- [ ] All required permissions declared in infoPlist

**Legal:**
- [ ] Apple Developer Agreement accepted
- [ ] App Review Guidelines reviewed
- [ ] Export Compliance completed (if applicable)

---

## Submission

### 11. Submit for Review

#### 11.1 Export Compliance

- [ ] **Does your app use encryption?**
  - Select "No" (standard HTTPS doesn't count)
  - Or select "Yes" and answer follow-up questions

#### 11.2 Advertising Identifier (IDFA)

- [ ] **Does this app use the Advertising Identifier (IDFA)?**
  - Select "No" (unless you use advertising/analytics that tracks users)

#### 11.3 Submit

- [ ] Review all sections (should have green checkmarks)
- [ ] Click **"Add for Review"** (top right)
- [ ] Click **"Submit to App Review"**

**Confirmation:**
- [ ] Status changes to "Waiting for Review"
- [ ] You'll receive confirmation email

---

## After Submission

### 12. Review Process

#### 12.1 Review Timeline

**Typical Timeline:**
- **Waiting for Review**: 1-3 days
- **In Review**: Few hours to 1 day
- **Processing**: Few hours
- **Total**: Usually 1-4 days

**Status Tracking:**
- [ ] Monitor status in App Store Connect
- [ ] Check email for updates
- [ ] Respond to any review requests within 24 hours

#### 12.2 Possible Outcomes

**Approved ✅**
- Status: "Ready for Sale"
- App is live on App Store (if auto-release)
- Or ready to manually release

**Rejected ❌**
- Status: "Rejected"
- Reason provided in Resolution Center
- Fix issues and resubmit

**Metadata Rejected**
- Issue with store listing, not app itself
- Fix metadata and resubmit

**Developer Rejected**
- You cancelled submission
- Can resubmit anytime

#### 12.3 If Rejected

Common rejection reasons and solutions:

**1. Incomplete or Inaccurate Information**
- Solution: Provide accurate app information and demo account

**2. Crashes or Bugs**
- Solution: Fix bugs, test thoroughly, resubmit

**3. Guideline Violation**
- Solution: Review specific guideline, fix issue, explain in notes

**4. Privacy Policy Issues**
- Solution: Update privacy policy to cover all data collection

**5. Misleading Functionality**
- Solution: Ensure screenshots and description match actual app

**6. Performance Issues**
- Solution: Optimize app, reduce memory usage

**Resubmission Process:**
1. Fix issues mentioned in rejection
2. Update build if code changes needed (increment buildNumber)
3. Update metadata if needed
4. Reply in Resolution Center explaining changes
5. Resubmit for review

#### 12.4 After Approval

**App is Live!**

- [ ] App appears on App Store
- [ ] App Store URL: \`https://apps.apple.com/app/id[your-app-id]\`
-[] Share with users
- [] Announce on social media
  - [] Update website with App Store badge

    ** Monitor Performance:**
      -[] Check App Store Connect Analytics
        - [] Monitor reviews and ratings
          - [] Respond to user reviews
            - [] Track crashes(if using crash reporting)
-[] Plan updates and improvements

  ** Promote Your App:**
    -[] Add App Store badge to website
      - [] Share on social media
        - [] Create press release
          - [] Reach out to tech blogs
            - [] Run marketing campaigns

---

## Apple App Store Guidelines

### 13. Important Guidelines to Follow

  ** Review the full guidelines:** https://developer.apple.com/app-store/review/guidelines/

** Key Areas:**

#### Safety
  - [] User - generated content is moderated
    - [] Objectionable content is filtered
      - [] Privacy policy is comprehensive

#### Performance
  - [] App is complete and functional
    - [] No crashes, bugs, or broken links
      - [] Loads quickly and responds to user input

#### Business
  - [] In - app purchases use Apple's system (if applicable)
    - [] Subscriptions follow Apple guidelines
      - [] No alternative payment methods presented in -app

#### Design
  - [] Interface is polished and professional
    - [] Uses native iOS components appropriately
      - [] Supports all device sizes

#### Legal
  - [] Privacy policy meets requirements
    - [] Respects intellectual property
      - [] Follows data protection laws

---

## Troubleshooting Common Issues

### "Could not find a valid bundle identifier"

  ** Issue:** Bundle ID mismatch

    ** Solution:**
      1. Verify\`bundleIdentifier\` in \`app.config.js\`: \`com.webpenter.googlesignin\`
2. Ensure App ID exists in Apple Developer Portal
3. Rebuild app

### "Google Sign-In not working"

  ** Issue:** OAuth configuration for iOS

    ** Solution:**
      1. Verify iOS Client ID in \`.env.production\`
2. Check Bundle ID in Google Cloud Console matches\`com.webpenter.googlesignin\`
3. Ensure \`GoogleService-Info.plist\` is in project root

### "Build failed during EAS build"

  ** Issue:** Build configuration error

    ** Solution:**
      1. Check build logs: \`eas build:view [build-id]\`
2. Verify all certificates are valid
3. Ensure \`GoogleService-Info.plist\` exists if using Firebase
4. Try: \`eas build --platform ios --profile production --clear-cache\`

### "App crashes on launch"

  ** Issue:** Missing dependencies or configuration

    ** Solution:**
      1. Test on physical device via TestFlight
2. Check console logs in Xcode
3. Verify all environment variables are set
4. Ensure all required frameworks are linked

### "Rejection: Missing Privacy Policy"

  ** Issue:** Privacy policy not accessible

    ** Solution:**
      1. Create comprehensive privacy policy page
2. Ensure URL is publicly accessible
3. Cover all data collection and usage
4. Include third - party services(Google, Stripe)
5. Update in App Store Connect

---

## Version Updates

### 14. Updating Your App

When releasing updates:

#### 14.1 Prepare Update

  - [] Update version in \`app.config.js\`:
\`\`\`javascript
  version: "3.0.1",  // Increment version
  buildNumber: "11",  // Increment build number
  \`\`\`

  - [] Update \`.env.production\` if credentials changed

#### 14.2 Build New Version

  \`\`\`bash
# Build new version
eas build --platform ios --profile production

# Submit to TestFlight
eas submit --platform ios --latest
\`\`\`

#### 14.3 Create New Version in App Store Connect

  - [] Go to App Store Connect → Your App
    - [] Click "+" next to "iOS App"
      - [] Enter new version number: "3.0.1"
        - [] Fill in "What's New in This Version"
          - [] Select new build
            - [] Submit for review

---

## Useful Commands Reference

### Build Commands

  \`\`\`bash
# Build for App Store
eas build --platform ios --profile production

# Build for TestFlight with specific version
eas build --platform ios --profile production --clear-cache

# Check build status
eas build:list --platform ios

# View specific build
eas build:view [build-id]

# Download IPA
eas build:download --platform ios --profile production
\`\`\`

### Submission Commands

  \`\`\`bash
# Submit latest build to TestFlight
eas submit --platform ios --latest

# Submit specific build
eas submit --platform ios --id [build-id]
\`\`\`

### Credential Management

  \`\`\`bash
# View and manage iOS credentials
eas credentials -p ios

# Options:
# - View credentials
# - Set up new certificate
# - Upload existing certificate
# - Remove credentials
\`\`\`

---

## Additional Resources

### Apple Documentation

  - ** App Store Connect **: https://appstoreconnect.apple.com
- ** Developer Portal **: https://developer.apple.com/account
- ** Review Guidelines **: https://developer.apple.com/app-store/review/guidelines/
- ** Human Interface Guidelines **: https://developer.apple.com/design/human-interface-guidelines/
- ** App Store Marketing **: https://developer.apple.com/app-store/marketing/guidelines/

### Project Documentation

  - ** EAS Build Guide **: \`./EAS_BUILD_GUIDE.md\`
    - ** Environment Setup **: \`../ENVIRONMENT_SETUP.md\`
      - ** Configuration **: \`./CONFIGURATION.md\`
        - ** Troubleshooting **: \`./TROUBLESHOOTING.md\`
          - ** Screenshots Guide **: \`./SCREENSHOTS_GUIDE.md\`

### Support

  - ** Apple Developer Forums **: https://developer.apple.com/forums/
- ** Stack Overflow **: Tag \`ios\` or\`expo\`
  - ** Expo Discord **: https://chat.expo.dev/
- ** Project Support **: support @webpenter.com

---

## Quick Reference Card

### Most Common Commands

  \`\`\`bash
# Build for App Store
eas build -p ios --profile production

# Submit to TestFlight
eas submit -p ios --latest

# Check build status
eas build:list -p ios

# Manage credentials
eas credentials -p ios

# View build
eas build:view [build-id]
\`\`\`

### Important URLs

  - ** App Store Connect **: https://appstoreconnect.apple.com
- ** Developer Account **: https://developer.apple.com/account
- ** TestFlight **: https://appstoreconnect.apple.com (TestFlight tab)
- ** Review Status **: App Store Connect → My Apps →[Your App]

---

## Comparison: iOS vs Android

  | Aspect | iOS(Apple) | Android(Google) |
| --------| -------------| ------------------|
| ** Cost ** | $99 / year | $25 one - time |
| ** Review Time ** | 1 - 4 days | 1 - 7 days |
| ** Requirements ** | Mac required | Any computer |
| ** Certificate ** | Complex(managed by EAS) | Simple(keystore) |
| ** Testing ** | TestFlight | Internal testing track |
| ** Updates ** | Each update reviewed | Faster review for updates |
| ** Privacy ** | Strict privacy labels | Data safety form |
| ** Rejection Rate ** | Higher(~40 %) | Lower(~25 %) |

  ---

** Last Updated:** 2026-01 -08
  ** For:** BookHere Mobile App v3.0.0

For ThemeForest buyers: This comprehensive checklist ensures a smooth submission to the Apple App Store.Follow all steps carefully and refer to the troubleshooting section if you encounter issues.

Good luck with your App Store submission! 🚀


`}}},security:{title:"Security & License",icon:j0,tags:["legal","safety","privacy"],content:`
# Security Policy

BookHere - Property Rental Mobile App

---

## Table of Contents

1. [Security Best Practices](#security-best-practices)
2. [API Keys & Credentials](#api-keys--credentials)
3. [Data Protection](#data-protection)
4. [Common Security Issues](#common-security-issues)
5. [Reporting Vulnerabilities](#reporting-vulnerabilities)
6. [Security Checklist](#security-checklist)

---

## Security Best Practices

### 1. Environment Variables

**✅ DO:**
- Store all sensitive credentials in \`.env\` file
- Use \`.env.example\` as a template (no real credentials)
- Add \`.env\` to \`.gitignore\`
- Use different credentials for development/production
- Never commit \`.env\` to version control

**❌ DON'T:**
- Hardcode API keys in source code
- Share \`.env\` file publicly
- Include credentials in screenshots or documentation
- Commit API keys to Git
- Use production keys in development

**Example:**
\`\`\`env
# .env (never commit this)
STRIPE_PUBLISHABLE_KEY=pk_live_YOUR_REAL_KEY

# .env.example (safe to commit)
STRIPE_PUBLISHABLE_KEY=YOUR_STRIPE_PUBLISHABLE_KEY_HERE
\`\`\`

---

### 2. API Keys Management

#### Google Maps API Key
- **Restrict** key usage in Google Cloud Console
- Add application restrictions (iOS bundle ID, Android package name)
- Add API restrictions (only enable needed APIs)
- Monitor usage in Google Cloud Console
- Rotate keys if exposed

#### Stripe Keys
- **Never** expose secret keys in client code
- Use publishable keys only in mobile app
- Process payments through your backend
- Use test mode keys for development
- Enable webhook signing

#### Other API Keys
- Follow principle of least privilege
- Use separate keys for each environment
- Implement key rotation policy
- Monitor for unusual activity

---

## API Keys & Credentials

### What Should NEVER Be in Source Code

❌ API Keys and Secrets
❌ Database Credentials
❌ Payment Gateway Secret Keys
❌ OAuth Client Secrets
❌ Encryption Keys
❌ Private Keys (.p12, .p8, .pem)
❌ AWS/Cloud Credentials
❌ Firebase Admin SDK Keys

### What Can Be in Source Code

✅ Publishable API Keys (with restrictions)
✅ Public Configuration
✅ App Scheme/Bundle ID
✅ Non-sensitive URLs

---

## Data Protection

### 1. User Data Storage

**Local Storage (On Device):**
- Use \`expo-secure-store\` for sensitive data
- Never store passwords in plain text
- Encrypt user tokens
- Clear sensitive data on logout
- Don't cache sensitive API responses

**Example:**
\`\`\`typescript
import * as SecureStore from 'expo-secure-store';

// Store securely
await SecureStore.setItemAsync('authToken', token);

// Retrieve
const token = await SecureStore.getItemAsync('authToken');

// Delete on logout
await SecureStore.deleteItemAsync('authToken');
\`\`\`

### 2. Network Security

**HTTPS Only:**
- All API calls must use HTTPS
- No HTTP in production
- Verify SSL certificates
- Use certificate pinning for extra security (advanced)

**API Communication:**
\`\`\`typescript
// ✅ Good
const API_URL = 'https://your-backend.com';

// ❌ Bad
const API_URL = 'http://your-backend.com';
\`\`\`

### 3. Authentication Tokens

**JWT Tokens:**
- Store in secure storage
- Include expiration
- Implement token refresh
- Clear on logout
- Validate on backend

**Biometric Auth:**
- Use as additional security layer
- Still require password as fallback
- Store biometric availability, not biometric data

---

## Common Security Issues

### 1. SQL Injection (Backend)
While this is a mobile app, ensure your WordPress backend:
- Uses prepared statements
- Sanitizes all inputs
- Validates data types
- Escapes output

### 2. XSS (Cross-Site Scripting)
- Sanitize user inputs before displaying
- Use React's built-in XSS protection
- Don't use \`dangerouslySetInnerHTML\` unless necessary
- Validate URLs before opening

### 3. Insecure Data Storage
\`\`\`typescript
// ❌ Bad - AsyncStorage for sensitive data
await AsyncStorage.setItem('password', password);

// ✅ Good - SecureStore for sensitive data
await SecureStore.setItemAsync('authToken', token);
\`\`\`

### 4. Unencrypted Communication
\`\`\`typescript
// ❌ Bad
fetch('http://api.example.com/user/data')

// ✅ Good
fetch('https://api.example.com/user/data')
  \`\`\`

### 5. Insufficient Authentication
- Always validate tokens on backend
- Implement session timeout
- Use secure password requirements
- Enable 2FA where possible

---

## Reporting Vulnerabilities

If you discover a security vulnerability:

### Contact
**Email:** security@webpenter.com (or support@webpenter.com)

### What to Include
1. Description of the vulnerability
2. Steps to reproduce
3. Potential impact
4. Suggested fix (if any)
5. Your contact information

### Response Time
- **Acknowledgment:** Within 48 hours
- **Initial Assessment:** Within 1 week
- **Fix Timeline:** Depends on severity

### Disclosure Policy
- Please allow us reasonable time to fix
- We'll credit you in release notes (if desired)
- Coordinate public disclosure timing

---

## Security Checklist

### Before Development

- [ ] Create \`.env\` file from \`.env.example\`
- [ ] Verify \`.env\` is in \`.gitignore\`
- [ ] Use test API keys for development
- [ ] Enable HTTPS on backend
- [ ] Set up error monitoring (Sentry, etc.)

### During Development

- [ ] No hardcoded credentials
- [ ] Use SecureStore for sensitive data
- [ ] All API calls use HTTPS
- [ ] Validate all user inputs
- [ ] Sanitize data before display
- [ ] Implement proper error handling
- [ ] Don't log sensitive data
- [ ] Use environment variables

### Code Review Checklist

- [ ] No API keys in source code
- [ ] No passwords or secrets
- [ ] Proper input validation
- [ ] Secure data storage
- [ ] HTTPS for all API calls
- [ ] Error messages don't leak info
- [ ] Authentication properly implemented
- [ ] Authorization checks in place

### Before Production

- [ ] Switch to production API keys
- [ ] Review all environment variables
- [ ] Enable SSL/TLS on backend
- [ ] Implement rate limiting (backend)
- [ ] Set up monitoring and alerts
- [ ] Enable Stripe webhook signatures
- [ ] Restrict API keys in cloud consoles
- [ ] Test all payment flows
- [ ] Verify data encryption
- [ ] Check authentication flows
- [ ] Review error messages
- [ ] Enable security headers (backend)

### iOS/Android Specific

**iOS:**
- [ ] Enable App Transport Security
- [ ] Use keychain for sensitive data
- [ ] Implement Face ID/Touch ID securely
- [ ] Configure proper entitlements
- [ ] Enable data protection

**Android:**
- [ ] Use EncryptedSharedPreferences
- [ ] Enable ProGuard/R8 obfuscation
- [ ] Configure network security config
- [ ] Use Fingerprint/Biometric API correctly
- [ ] Enable backup encryption

---

## Security Configuration

### 1. App Transport Security (iOS)

Already configured in \`app.json\`, but verify:

\`\`\`json
{
  "ios": {
    "infoPlist": {
      "NSAppTransportSecurity": {
        "NSAllowsArbitraryLoads": false
      }
    }
  }
}
\`\`\`

### 2. Network Security (Android)

Create \`android/app/src/main/res/xml/network_security_config.xml\`:

\`\`\`xml
<? xml version = "1.0" encoding = "utf-8" ?>
<network-security-config>
  <base-config cleartextTrafficPermitted = "false" >
    <trust-anchors >
      <certificates src="system" />
    </trust-anchors>
  </base-config>
</network-security-config>
\`\`\`

### 3. ProGuard Rules (Android)

The app includes ProGuard configuration for code obfuscation.
Verify \`android/app/proguard-rules.pro\` includes:

\`\`\`proguard
# Keep React Native
  - keep class com.facebook.react.** { *; }

# Keep Expo
  - keep class expo.modules.** { *; }

# Keep your app classes
  - keep class com.yourcompany.yourapp.** { *; }
    \`\`\`

---

## Security Best Practices by Feature

### Payment Processing
- **✅** Use Stripe/PayPal SDKs (don't implement yourself)
- **✅** Process payments through backend
- **✅** Use webhook signatures
- **✅** Implement idempotency
- **❌** Never store credit card numbers
- **❌** Never log payment details

### User Authentication
- **✅** Use JWT with expiration
- **✅** Implement token refresh
- **✅** Hash passwords (backend)
- **✅** Use HTTPS for auth endpoints
- **✅** Implement rate limiting
- **❌** Never store plain-text passwords
- **❌** Don't expose user IDs in URLs

### File Uploads
- **✅** Validate file types
- **✅** Limit file sizes
- **✅** Scan for malware (backend)
- **✅** Use secure URLs
- **❌** Don't execute uploaded files
- **❌** Don't trust file extensions

---

## Compliance

### GDPR (If applicable)
- Obtain user consent for data collection
- Provide data export functionality
- Implement data deletion
- Have privacy policy
- Use data minimization

### PCI DSS (Payment Card Industry)
- Use certified payment processors (Stripe)
- Don't store card data
- Use tokenization
- Implement secure transmission

### CCPA (California Consumer Privacy Act)
- Disclose data collection practices
- Provide opt-out mechanisms
- Honor data deletion requests

---

## Incident Response Plan

### If Credentials Are Exposed

1. **Immediately** rotate all affected credentials
2. Review access logs for unauthorized use
3. Notify affected users if data was accessed
4. Update documentation
5. Implement additional safeguards

### If Vulnerability Is Found

1. Assess severity and impact
2. Develop and test fix
3. Deploy fix to production
4. Notify users if necessary
5. Document in security advisory

---

## Resources

### Security Tools
- **Dependency Scanning:** \`npm audit\`
- **Code Analysis:** ESLint with security plugins
- **Secret Scanning:** git-secrets, truffleHog
- **Monitoring:** Sentry for error tracking

### Security Guidelines
- OWASP Mobile Security Project
- OWASP Top 10
- React Native Security Best Practices
- Expo Security Considerations

### Commands
\`\`\`bash
# Check for vulnerabilities
npm audit

# Fix vulnerabilities
npm audit fix

# Check for exposed secrets
git log -p | grep -i "api[_-]key|password"
  \`\`\`

---

## Conclusion

Security is an ongoing process, not a one-time task. Stay informed about:
- New vulnerabilities in dependencies
- Security updates for React Native and Expo
- Best practices in mobile security
- Changes in compliance requirements

**Remember:** Security starts with you. Follow these guidelines and stay vigilant.

---

**Last Updated:** January 2026

For security concerns: security@webpenter.com


    `}},yS="v3.0.1",vS="support@webpenter.com",SS="https://demo.bookhere.app",CS=({content:o,onNavigate:t,onHeadersFound:s})=>{const[a,r]=Se.useState(null),[d,m]=Se.useState(null),g=(N,I)=>{navigator.clipboard.writeText(N),r(I),setTimeout(()=>r(null),2e3)},y=N=>{const I=`${window.location.origin}${window.location.pathname}#${N}`;navigator.clipboard.writeText(I),m(N),setTimeout(()=>m(null),2e3)},h=N=>N.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim(),v=N=>{const I=N.split(`
`),U=[];let q=null,B=null,X="",Q=null;const ee=()=>{Q&&(U.push(Q),Q=null)};return I.forEach(J=>{const $=J.trim();if($.startsWith("```")){ee(),q?(U.push({type:"code",content:q.join(`
`),language:X}),q=null,X=""):(q=[],X=$.replace("```","").trim());return}if(q!==null){q.push(J);return}if($.startsWith("|")&&$.endsWith("|")){ee();const z=J.split("|").filter((le,me,K)=>!(me===0||me===K.length-1)).map(le=>le.trim());if(z.every(le=>le.match(/^[ :-]+$/)))return;B?B.push(z):B=[z];return}else B&&(U.push({type:"table",content:B}),B=null);if($.startsWith("- [ ] ")||$.startsWith("- [] ")||$.startsWith("- [x] ")){ee();const z=$.startsWith("- [x] ");U.push({type:"task",content:$.replace(/- \[[ x]?\] /i,""),completed:z})}else if($.startsWith("- ")||$.startsWith("* ")||$.startsWith("+ ")){const z=$.replace(/^[-*+]\s+/,"");Q&&Q.type==="ul"?Q.items.push({content:z}):(ee(),Q={type:"ul",items:[{content:z}]})}else if($.match(/^\d+\.\s+/)){const z=$.match(/^(\d+)\.\s+/),le=z?z[1]:void 0,me=$.replace(/^\d+\.\s+/,"");Q&&Q.type==="ol"?Q.items.push({content:me,value:le}):(ee(),Q={type:"ol",items:[{content:me,value:le}]})}else if(ee(),$.startsWith("# ")){const z=$.replace("# ","");U.push({type:"h1",content:z,id:h(z)})}else if($.startsWith("## ")){const z=$.replace("## ","");U.push({type:"h2",content:z,id:h(z)})}else if($.startsWith("### ")){const z=$.replace("### ","");U.push({type:"h3",content:z,id:h(z)})}else if($.startsWith("#### ")){const z=$.replace("#### ","");U.push({type:"h4",content:z,id:h(z)})}else if($.startsWith("##### ")){const z=$.replace("##### ","");U.push({type:"h5",content:z,id:h(z)})}else if($.startsWith("###### ")){const z=$.replace("###### ","");U.push({type:"h6",content:z,id:h(z)})}else $==="---"||$==="***"||$==="___"?U.push({type:"hr"}):$.startsWith("> ")?U.push({type:"blockquote",content:$.replace("> ","")}):$!==""?U.push({type:"p",content:$}):U.push({type:"space"})}),ee(),B&&U.push({type:"table",content:B}),U},C=Se.useMemo(()=>v(o),[o]);Se.useEffect(()=>{if(s){const N=C.filter(I=>I.type==="h2"||I.type==="h3").map(I=>({id:I.id,text:I.content,level:I.type==="h2"?2:3}));s(N)}},[C,s]);const T=N=>{var q;const U=N.target.closest("a");if(U&&t){const B=U.getAttribute("href");if(B){if(B.endsWith(".md")||B.includes("./")){N.preventDefault();const X=(q=B.split("/").pop())==null?void 0:q.replace(".md","").toLowerCase();X&&t(X)}else if(B.startsWith("#")){N.preventDefault();const X=B.slice(1),Q=document.getElementById(X);if(Q){const J=Q.getBoundingClientRect().top+window.pageYOffset+-80;window.scrollTo({top:J,behavior:"smooth"})}}}}},b=N=>N.replace(/"([^"]+)"/g,'<span class="inline-flex items-center px-1.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-[13px] font-semibold mx-0.5 shadow-sm">$1</span>').replace(/\*\*(.*?)\*\*/g,'<strong class="text-slate-900 font-bold">$1</strong>').replace(/\*(.*?)\*/g,'<em class="italic">$1</em>').replace(/__(.*?)__/g,'<strong class="text-slate-900 font-bold">$1</strong>').replace(/_(.*?)_/g,'<em class="italic">$1</em>').replace(/~~(.*?)~~/g,'<del class="line-through text-slate-400">$1</del>').replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" class="text-rose-600 hover:underline font-semibold">$1</a>').replace(new RegExp('(?<!href=")(https?:\\/\\/[^\\s<]+)',"g"),'<a href="$1" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-rose-600 hover:text-rose-700 font-semibold bg-rose-50/50 hover:bg-rose-100/50 px-1.5 py-0.5 rounded-md transition-all border border-rose-100/50">$1<svg class="inline-block ml-1 w-3 h-3 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>').replace(new RegExp('(?<!href=")([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})',"g"),'<a href="mailto:$1" class="inline-flex items-center text-rose-600 hover:text-rose-700 font-semibold bg-rose-50/50 hover:bg-rose-100/50 px-1.5 py-0.5 rounded-md transition-all border border-rose-100/50">$1<svg class="inline-block ml-1 w-3 h-3 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>').replace(/`(.*?)`/g,'<code class="bg-slate-100 text-rose-600 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>').replace(/→/g,'<span class="text-slate-400 mx-1 font-light">→</span>'),k=(N,I,U)=>{const q={1:"text-4xl font-extrabold text-slate-900 mt-12 mb-6 border-b border-slate-200 pb-4 tracking-tight",2:"text-3xl font-bold text-slate-900 mt-10 mb-5 tracking-tight",3:"text-2xl font-bold text-slate-800 mt-8 mb-4 tracking-tight",4:"text-xl font-bold text-slate-800 mt-6 mb-3 tracking-tight",5:"text-lg font-bold text-slate-800 mt-4 mb-2 tracking-tight",6:"text-base font-bold text-slate-700 mt-4 mb-2 tracking-tight uppercase tracking-wider"}[N],B=E.jsxs("button",{onClick:()=>y(I.id),className:"opacity-0 group-hover:opacity-100 transition-all p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-rose-500 relative",title:"Copy section link",children:[d===I.id?E.jsx(hu,{size:16,className:"text-emerald-500"}):E.jsx(qh,{size:16}),d===I.id&&E.jsx("span",{className:"absolute left-full ml-2 px-2 py-1 bg-slate-900 text-white text-[10px] font-bold rounded whitespace-nowrap",children:"Copied!"})]});switch(N){case 1:return E.jsxs("h1",{id:I.id,className:`${q} group flex items-center gap-3`,children:[I.content,B]},U);case 2:return E.jsxs("h2",{id:I.id,className:`${q} group flex items-center gap-3`,children:[I.content,B]},U);case 3:return E.jsxs("h3",{id:I.id,className:`${q} group flex items-center gap-3`,children:[I.content,B]},U);case 4:return E.jsxs("h4",{id:I.id,className:`${q} group flex items-center gap-3`,children:[I.content,B]},U);case 5:return E.jsxs("h5",{id:I.id,className:`${q} group flex items-center gap-3`,children:[I.content,B]},U);case 6:return E.jsxs("h6",{id:I.id,className:`${q} group flex items-center gap-3`,children:[I.content,B]},U);default:return null}};return E.jsx("div",{className:"space-y-4",onClick:T,children:C.map((N,I)=>{if(N.type==="space")return E.jsx("div",{className:"h-2"},I);if(N.type.startsWith("h")){const U=parseInt(N.type.substring(1));return k(U,N,I)}if(N.type==="hr")return E.jsx("hr",{className:"my-12 border-t border-slate-200"},I);if(N.type==="blockquote")return E.jsxs("div",{className:"my-6 pl-6 border-l-4 border-rose-500 bg-rose-50/30 py-4 pr-4 rounded-r-xl flex gap-4",children:[E.jsx(z0,{className:"text-rose-500 shrink-0",size:20}),E.jsx("p",{className:"text-slate-700 italic leading-relaxed",dangerouslySetInnerHTML:{__html:b(N.content)}})]},I);if(N.type==="task")return E.jsxs("div",{className:"flex items-start gap-3 my-3 ml-2",children:[E.jsx("div",{className:"shrink-0 mt-1",children:N.completed?E.jsx(iS,{className:"text-rose-500",size:18}):E.jsx(aS,{className:"text-slate-300",size:18})}),E.jsx("span",{className:`text-slate-600 leading-relaxed ${N.completed?"line-through text-slate-400":""}`,dangerouslySetInnerHTML:{__html:b(N.content)}})]},I);if(N.type==="ul")return E.jsx("ul",{className:"ml-6 list-disc space-y-2 my-4",children:N.items.map((U,q)=>E.jsx("li",{className:"text-slate-600 leading-relaxed pl-2",dangerouslySetInnerHTML:{__html:b(U.content)}},q))},I);if(N.type==="ol")return E.jsx("ol",{className:"ml-6 list-decimal space-y-2 my-4",children:N.items.map((U,q)=>E.jsx("li",{value:U.value,className:"text-slate-600 leading-relaxed pl-2",dangerouslySetInnerHTML:{__html:b(U.content)}},q))},I);if(N.type==="table")return E.jsx("div",{className:"my-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm max-w-full",children:E.jsx("div",{className:"overflow-x-auto",children:E.jsxs("table",{className:"w-full text-left border-collapse min-w-[600px] md:min-w-full",children:[E.jsx("thead",{children:E.jsx("tr",{className:"bg-slate-50 border-b border-slate-200",children:N.content[0].map((U,q)=>E.jsx("th",{className:"px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500",children:U},q))})}),E.jsx("tbody",{className:"divide-y divide-slate-100",children:N.content.slice(1).map((U,q)=>E.jsx("tr",{className:"hover:bg-slate-50/50 transition-colors",children:U.map((B,X)=>E.jsx("td",{className:"px-6 py-4 text-sm text-slate-600",children:E.jsx("span",{dangerouslySetInnerHTML:{__html:b(B)}})},X))},q))})]})})},I);if(N.type==="code"){const U=N.content.split(`
`);return E.jsxs("div",{className:"relative group my-8 rounded-xl overflow-hidden border border-slate-800 shadow-2xl max-w-full",children:[E.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700",children:[E.jsxs("div",{className:"flex items-center gap-4",children:[E.jsxs("div",{className:"flex gap-1.5",children:[E.jsx("div",{className:"w-3 h-3 rounded-full bg-rose-500/50"}),E.jsx("div",{className:"w-3 h-3 rounded-full bg-amber-500/50"}),E.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-500/50"})]}),N.language&&E.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest text-slate-500",children:N.language})]}),E.jsx("button",{onClick:()=>g(N.content,I),className:"flex items-center gap-1.5 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors",children:a===I?E.jsxs(E.Fragment,{children:[E.jsx(hu,{size:12,className:"text-emerald-400"}),E.jsx("span",{className:"text-emerald-400",children:"Copied"})]}):E.jsxs(E.Fragment,{children:[E.jsx(D0,{size:12}),E.jsx("span",{children:"Copy Code"})]})})]}),E.jsx("div",{className:"bg-slate-900 overflow-x-auto",children:E.jsxs("pre",{className:"font-mono text-sm leading-6 py-4 flex min-w-full",children:[E.jsx("div",{className:"select-none text-right pr-4 pl-4 border-r border-slate-800 text-slate-600 bg-slate-900/50 sticky left-0 min-w-[3rem]",children:U.map((q,B)=>E.jsx("div",{className:"h-6",children:B+1},B))}),E.jsx("div",{className:"pl-4 pr-8 text-slate-300 min-w-full whitespace-pre",children:U.map((q,B)=>E.jsx("div",{className:"h-6 flex items-center",children:E.jsx("span",{className:"inline-block",children:q||" "})},B))})]})})]},I)}return N.type==="p"?E.jsx("p",{className:"text-slate-600 leading-relaxed text-lg break-words",dangerouslySetInnerHTML:{__html:b(N.content)}},I):null})})};var TS={};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let AS,ES;function bS(){return{geminiUrl:AS,vertexUrl:ES}}function _S(o,t,s,a){var r,d;if(!(o!=null&&o.baseUrl)){const m=bS();return t?(r=m.vertexUrl)!==null&&r!==void 0?r:s:(d=m.geminiUrl)!==null&&d!==void 0?d:a}return o.baseUrl}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class gn{}function Z(o,t){const s=/\{([^}]+)\}/g;return o.replace(s,(a,r)=>{if(Object.prototype.hasOwnProperty.call(t,r)){const d=t[r];return d!=null?String(d):""}else throw new Error(`Key '${r}' not found in valueMap.`)})}function c(o,t,s){for(let d=0;d<t.length-1;d++){const m=t[d];if(m.endsWith("[]")){const g=m.slice(0,-2);if(!(g in o))if(Array.isArray(s))o[g]=Array.from({length:s.length},()=>({}));else throw new Error(`Value must be a list given an array path ${m}`);if(Array.isArray(o[g])){const y=o[g];if(Array.isArray(s))for(let h=0;h<y.length;h++){const v=y[h];c(v,t.slice(d+1),s[h])}else for(const h of y)c(h,t.slice(d+1),s)}return}else if(m.endsWith("[0]")){const g=m.slice(0,-3);g in o||(o[g]=[{}]);const y=o[g];c(y[0],t.slice(d+1),s);return}(!o[m]||typeof o[m]!="object")&&(o[m]={}),o=o[m]}const a=t[t.length-1],r=o[a];if(r!==void 0){if(!s||typeof s=="object"&&Object.keys(s).length===0||s===r)return;if(typeof r=="object"&&typeof s=="object"&&r!==null&&s!==null)Object.assign(r,s);else throw new Error(`Cannot set value for an existing key. Key: ${a}`)}else a==="_self"&&typeof s=="object"&&s!==null&&!Array.isArray(s)?Object.assign(o,s):o[a]=s}function u(o,t,s=void 0){try{if(t.length===1&&t[0]==="_self")return o;for(let a=0;a<t.length;a++){if(typeof o!="object"||o===null)return s;const r=t[a];if(r.endsWith("[]")){const d=r.slice(0,-2);if(d in o){const m=o[d];return Array.isArray(m)?m.map(g=>u(g,t.slice(a+1),s)):s}else return s}else o=o[r]}return o}catch(a){if(a instanceof TypeError)return s;throw a}}function wS(o,t){for(const[s,a]of Object.entries(t)){const r=s.split("."),d=a.split("."),m=new Set;let g=-1;for(let y=0;y<r.length;y++)if(r[y]==="*"){g=y;break}if(g!==-1&&d.length>g)for(let y=g;y<d.length;y++){const h=d[y];h!=="*"&&!h.endsWith("[]")&&!h.endsWith("[0]")&&m.add(h)}vu(o,r,d,0,m)}}function vu(o,t,s,a,r){if(a>=t.length||typeof o!="object"||o===null)return;const d=t[a];if(d.endsWith("[]")){const m=d.slice(0,-2),g=o;if(m in g&&Array.isArray(g[m]))for(const y of g[m])vu(y,t,s,a+1,r)}else if(d==="*"){if(typeof o=="object"&&o!==null&&!Array.isArray(o)){const m=o,g=Object.keys(m).filter(h=>!h.startsWith("_")&&!r.has(h)),y={};for(const h of g)y[h]=m[h];for(const[h,v]of Object.entries(y)){const C=[];for(const T of s.slice(a))T==="*"?C.push(h):C.push(T);c(m,C,v)}for(const h of g)delete m[h]}}else{const m=o;d in m&&vu(m[d],t,s,a+1,r)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Du(o){if(typeof o!="string")throw new Error("fromImageBytes must be a string");return o}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function RS(o){const t={},s=u(o,["operationName"]);s!=null&&c(t,["operationName"],s);const a=u(o,["resourceName"]);return a!=null&&c(t,["_url","resourceName"],a),t}function IS(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["metadata"]);a!=null&&c(t,["metadata"],a);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["response","generateVideoResponse"]);return m!=null&&c(t,["response"],NS(m)),t}function xS(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["metadata"]);a!=null&&c(t,["metadata"],a);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["response"]);return m!=null&&c(t,["response"],MS(m)),t}function NS(o){const t={},s=u(o,["generatedSamples"]);if(s!=null){let d=s;Array.isArray(d)&&(d=d.map(m=>PS(m))),c(t,["generatedVideos"],d)}const a=u(o,["raiMediaFilteredCount"]);a!=null&&c(t,["raiMediaFilteredCount"],a);const r=u(o,["raiMediaFilteredReasons"]);return r!=null&&c(t,["raiMediaFilteredReasons"],r),t}function MS(o){const t={},s=u(o,["videos"]);if(s!=null){let d=s;Array.isArray(d)&&(d=d.map(m=>DS(m))),c(t,["generatedVideos"],d)}const a=u(o,["raiMediaFilteredCount"]);a!=null&&c(t,["raiMediaFilteredCount"],a);const r=u(o,["raiMediaFilteredReasons"]);return r!=null&&c(t,["raiMediaFilteredReasons"],r),t}function PS(o){const t={},s=u(o,["video"]);return s!=null&&c(t,["video"],BS(s)),t}function DS(o){const t={},s=u(o,["_self"]);return s!=null&&c(t,["video"],HS(s)),t}function kS(o){const t={},s=u(o,["operationName"]);return s!=null&&c(t,["_url","operationName"],s),t}function US(o){const t={},s=u(o,["operationName"]);return s!=null&&c(t,["_url","operationName"],s),t}function LS(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["metadata"]);a!=null&&c(t,["metadata"],a);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["response"]);return m!=null&&c(t,["response"],GS(m)),t}function GS(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["parent"]);a!=null&&c(t,["parent"],a);const r=u(o,["documentName"]);return r!=null&&c(t,["documentName"],r),t}function zh(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["metadata"]);a!=null&&c(t,["metadata"],a);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["response"]);return m!=null&&c(t,["response"],OS(m)),t}function OS(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["parent"]);a!=null&&c(t,["parent"],a);const r=u(o,["documentName"]);return r!=null&&c(t,["documentName"],r),t}function BS(o){const t={},s=u(o,["uri"]);s!=null&&c(t,["uri"],s);const a=u(o,["encodedVideo"]);a!=null&&c(t,["videoBytes"],Du(a));const r=u(o,["encoding"]);return r!=null&&c(t,["mimeType"],r),t}function HS(o){const t={},s=u(o,["gcsUri"]);s!=null&&c(t,["uri"],s);const a=u(o,["bytesBase64Encoded"]);a!=null&&c(t,["videoBytes"],Du(a));const r=u(o,["mimeType"]);return r!=null&&c(t,["mimeType"],r),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var sm;(function(o){o.OUTCOME_UNSPECIFIED="OUTCOME_UNSPECIFIED",o.OUTCOME_OK="OUTCOME_OK",o.OUTCOME_FAILED="OUTCOME_FAILED",o.OUTCOME_DEADLINE_EXCEEDED="OUTCOME_DEADLINE_EXCEEDED"})(sm||(sm={}));var am;(function(o){o.LANGUAGE_UNSPECIFIED="LANGUAGE_UNSPECIFIED",o.PYTHON="PYTHON"})(am||(am={}));var lm;(function(o){o.SCHEDULING_UNSPECIFIED="SCHEDULING_UNSPECIFIED",o.SILENT="SILENT",o.WHEN_IDLE="WHEN_IDLE",o.INTERRUPT="INTERRUPT"})(lm||(lm={}));var qn;(function(o){o.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",o.STRING="STRING",o.NUMBER="NUMBER",o.INTEGER="INTEGER",o.BOOLEAN="BOOLEAN",o.ARRAY="ARRAY",o.OBJECT="OBJECT",o.NULL="NULL"})(qn||(qn={}));var rm;(function(o){o.MODE_UNSPECIFIED="MODE_UNSPECIFIED",o.MODE_DYNAMIC="MODE_DYNAMIC"})(rm||(rm={}));var um;(function(o){o.API_SPEC_UNSPECIFIED="API_SPEC_UNSPECIFIED",o.SIMPLE_SEARCH="SIMPLE_SEARCH",o.ELASTIC_SEARCH="ELASTIC_SEARCH"})(um||(um={}));var cm;(function(o){o.AUTH_TYPE_UNSPECIFIED="AUTH_TYPE_UNSPECIFIED",o.NO_AUTH="NO_AUTH",o.API_KEY_AUTH="API_KEY_AUTH",o.HTTP_BASIC_AUTH="HTTP_BASIC_AUTH",o.GOOGLE_SERVICE_ACCOUNT_AUTH="GOOGLE_SERVICE_ACCOUNT_AUTH",o.OAUTH="OAUTH",o.OIDC_AUTH="OIDC_AUTH"})(cm||(cm={}));var dm;(function(o){o.HTTP_IN_UNSPECIFIED="HTTP_IN_UNSPECIFIED",o.HTTP_IN_QUERY="HTTP_IN_QUERY",o.HTTP_IN_HEADER="HTTP_IN_HEADER",o.HTTP_IN_PATH="HTTP_IN_PATH",o.HTTP_IN_BODY="HTTP_IN_BODY",o.HTTP_IN_COOKIE="HTTP_IN_COOKIE"})(dm||(dm={}));var pm;(function(o){o.PHISH_BLOCK_THRESHOLD_UNSPECIFIED="PHISH_BLOCK_THRESHOLD_UNSPECIFIED",o.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",o.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",o.BLOCK_HIGH_AND_ABOVE="BLOCK_HIGH_AND_ABOVE",o.BLOCK_HIGHER_AND_ABOVE="BLOCK_HIGHER_AND_ABOVE",o.BLOCK_VERY_HIGH_AND_ABOVE="BLOCK_VERY_HIGH_AND_ABOVE",o.BLOCK_ONLY_EXTREMELY_HIGH="BLOCK_ONLY_EXTREMELY_HIGH"})(pm||(pm={}));var fm;(function(o){o.THINKING_LEVEL_UNSPECIFIED="THINKING_LEVEL_UNSPECIFIED",o.LOW="LOW",o.MEDIUM="MEDIUM",o.HIGH="HIGH",o.MINIMAL="MINIMAL"})(fm||(fm={}));var mm;(function(o){o.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",o.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",o.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",o.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",o.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",o.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY",o.HARM_CATEGORY_IMAGE_HATE="HARM_CATEGORY_IMAGE_HATE",o.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT="HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT",o.HARM_CATEGORY_IMAGE_HARASSMENT="HARM_CATEGORY_IMAGE_HARASSMENT",o.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT="HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT",o.HARM_CATEGORY_JAILBREAK="HARM_CATEGORY_JAILBREAK"})(mm||(mm={}));var hm;(function(o){o.HARM_BLOCK_METHOD_UNSPECIFIED="HARM_BLOCK_METHOD_UNSPECIFIED",o.SEVERITY="SEVERITY",o.PROBABILITY="PROBABILITY"})(hm||(hm={}));var gm;(function(o){o.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",o.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",o.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",o.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",o.BLOCK_NONE="BLOCK_NONE",o.OFF="OFF"})(gm||(gm={}));var ym;(function(o){o.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",o.STOP="STOP",o.MAX_TOKENS="MAX_TOKENS",o.SAFETY="SAFETY",o.RECITATION="RECITATION",o.LANGUAGE="LANGUAGE",o.OTHER="OTHER",o.BLOCKLIST="BLOCKLIST",o.PROHIBITED_CONTENT="PROHIBITED_CONTENT",o.SPII="SPII",o.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",o.IMAGE_SAFETY="IMAGE_SAFETY",o.UNEXPECTED_TOOL_CALL="UNEXPECTED_TOOL_CALL",o.IMAGE_PROHIBITED_CONTENT="IMAGE_PROHIBITED_CONTENT",o.NO_IMAGE="NO_IMAGE",o.IMAGE_RECITATION="IMAGE_RECITATION",o.IMAGE_OTHER="IMAGE_OTHER"})(ym||(ym={}));var vm;(function(o){o.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",o.NEGLIGIBLE="NEGLIGIBLE",o.LOW="LOW",o.MEDIUM="MEDIUM",o.HIGH="HIGH"})(vm||(vm={}));var Sm;(function(o){o.HARM_SEVERITY_UNSPECIFIED="HARM_SEVERITY_UNSPECIFIED",o.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",o.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",o.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",o.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH"})(Sm||(Sm={}));var Cm;(function(o){o.URL_RETRIEVAL_STATUS_UNSPECIFIED="URL_RETRIEVAL_STATUS_UNSPECIFIED",o.URL_RETRIEVAL_STATUS_SUCCESS="URL_RETRIEVAL_STATUS_SUCCESS",o.URL_RETRIEVAL_STATUS_ERROR="URL_RETRIEVAL_STATUS_ERROR",o.URL_RETRIEVAL_STATUS_PAYWALL="URL_RETRIEVAL_STATUS_PAYWALL",o.URL_RETRIEVAL_STATUS_UNSAFE="URL_RETRIEVAL_STATUS_UNSAFE"})(Cm||(Cm={}));var Tm;(function(o){o.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",o.SAFETY="SAFETY",o.OTHER="OTHER",o.BLOCKLIST="BLOCKLIST",o.PROHIBITED_CONTENT="PROHIBITED_CONTENT",o.IMAGE_SAFETY="IMAGE_SAFETY",o.MODEL_ARMOR="MODEL_ARMOR",o.JAILBREAK="JAILBREAK"})(Tm||(Tm={}));var Am;(function(o){o.TRAFFIC_TYPE_UNSPECIFIED="TRAFFIC_TYPE_UNSPECIFIED",o.ON_DEMAND="ON_DEMAND",o.PROVISIONED_THROUGHPUT="PROVISIONED_THROUGHPUT"})(Am||(Am={}));var Na;(function(o){o.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",o.TEXT="TEXT",o.IMAGE="IMAGE",o.AUDIO="AUDIO"})(Na||(Na={}));var Em;(function(o){o.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",o.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",o.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",o.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH"})(Em||(Em={}));var bm;(function(o){o.TUNING_MODE_UNSPECIFIED="TUNING_MODE_UNSPECIFIED",o.TUNING_MODE_FULL="TUNING_MODE_FULL",o.TUNING_MODE_PEFT_ADAPTER="TUNING_MODE_PEFT_ADAPTER"})(bm||(bm={}));var _m;(function(o){o.ADAPTER_SIZE_UNSPECIFIED="ADAPTER_SIZE_UNSPECIFIED",o.ADAPTER_SIZE_ONE="ADAPTER_SIZE_ONE",o.ADAPTER_SIZE_TWO="ADAPTER_SIZE_TWO",o.ADAPTER_SIZE_FOUR="ADAPTER_SIZE_FOUR",o.ADAPTER_SIZE_EIGHT="ADAPTER_SIZE_EIGHT",o.ADAPTER_SIZE_SIXTEEN="ADAPTER_SIZE_SIXTEEN",o.ADAPTER_SIZE_THIRTY_TWO="ADAPTER_SIZE_THIRTY_TWO"})(_m||(_m={}));var Su;(function(o){o.JOB_STATE_UNSPECIFIED="JOB_STATE_UNSPECIFIED",o.JOB_STATE_QUEUED="JOB_STATE_QUEUED",o.JOB_STATE_PENDING="JOB_STATE_PENDING",o.JOB_STATE_RUNNING="JOB_STATE_RUNNING",o.JOB_STATE_SUCCEEDED="JOB_STATE_SUCCEEDED",o.JOB_STATE_FAILED="JOB_STATE_FAILED",o.JOB_STATE_CANCELLING="JOB_STATE_CANCELLING",o.JOB_STATE_CANCELLED="JOB_STATE_CANCELLED",o.JOB_STATE_PAUSED="JOB_STATE_PAUSED",o.JOB_STATE_EXPIRED="JOB_STATE_EXPIRED",o.JOB_STATE_UPDATING="JOB_STATE_UPDATING",o.JOB_STATE_PARTIALLY_SUCCEEDED="JOB_STATE_PARTIALLY_SUCCEEDED"})(Su||(Su={}));var wm;(function(o){o.TUNING_TASK_UNSPECIFIED="TUNING_TASK_UNSPECIFIED",o.TUNING_TASK_I2V="TUNING_TASK_I2V",o.TUNING_TASK_T2V="TUNING_TASK_T2V",o.TUNING_TASK_R2V="TUNING_TASK_R2V"})(wm||(wm={}));var Rm;(function(o){o.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",o.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",o.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",o.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH",o.MEDIA_RESOLUTION_ULTRA_HIGH="MEDIA_RESOLUTION_ULTRA_HIGH"})(Rm||(Rm={}));var Im;(function(o){o.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED="FEATURE_SELECTION_PREFERENCE_UNSPECIFIED",o.PRIORITIZE_QUALITY="PRIORITIZE_QUALITY",o.BALANCED="BALANCED",o.PRIORITIZE_COST="PRIORITIZE_COST"})(Im||(Im={}));var xm;(function(o){o.UNSPECIFIED="UNSPECIFIED",o.BLOCKING="BLOCKING",o.NON_BLOCKING="NON_BLOCKING"})(xm||(xm={}));var Nm;(function(o){o.MODE_UNSPECIFIED="MODE_UNSPECIFIED",o.MODE_DYNAMIC="MODE_DYNAMIC"})(Nm||(Nm={}));var Mm;(function(o){o.ENVIRONMENT_UNSPECIFIED="ENVIRONMENT_UNSPECIFIED",o.ENVIRONMENT_BROWSER="ENVIRONMENT_BROWSER"})(Mm||(Mm={}));var Pm;(function(o){o.MODE_UNSPECIFIED="MODE_UNSPECIFIED",o.AUTO="AUTO",o.ANY="ANY",o.NONE="NONE",o.VALIDATED="VALIDATED"})(Pm||(Pm={}));var Dm;(function(o){o.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",o.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",o.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",o.BLOCK_NONE="BLOCK_NONE"})(Dm||(Dm={}));var km;(function(o){o.DONT_ALLOW="DONT_ALLOW",o.ALLOW_ADULT="ALLOW_ADULT",o.ALLOW_ALL="ALLOW_ALL"})(km||(km={}));var Um;(function(o){o.auto="auto",o.en="en",o.ja="ja",o.ko="ko",o.hi="hi",o.zh="zh",o.pt="pt",o.es="es"})(Um||(Um={}));var Lm;(function(o){o.MASK_MODE_DEFAULT="MASK_MODE_DEFAULT",o.MASK_MODE_USER_PROVIDED="MASK_MODE_USER_PROVIDED",o.MASK_MODE_BACKGROUND="MASK_MODE_BACKGROUND",o.MASK_MODE_FOREGROUND="MASK_MODE_FOREGROUND",o.MASK_MODE_SEMANTIC="MASK_MODE_SEMANTIC"})(Lm||(Lm={}));var Gm;(function(o){o.CONTROL_TYPE_DEFAULT="CONTROL_TYPE_DEFAULT",o.CONTROL_TYPE_CANNY="CONTROL_TYPE_CANNY",o.CONTROL_TYPE_SCRIBBLE="CONTROL_TYPE_SCRIBBLE",o.CONTROL_TYPE_FACE_MESH="CONTROL_TYPE_FACE_MESH"})(Gm||(Gm={}));var Om;(function(o){o.SUBJECT_TYPE_DEFAULT="SUBJECT_TYPE_DEFAULT",o.SUBJECT_TYPE_PERSON="SUBJECT_TYPE_PERSON",o.SUBJECT_TYPE_ANIMAL="SUBJECT_TYPE_ANIMAL",o.SUBJECT_TYPE_PRODUCT="SUBJECT_TYPE_PRODUCT"})(Om||(Om={}));var Bm;(function(o){o.EDIT_MODE_DEFAULT="EDIT_MODE_DEFAULT",o.EDIT_MODE_INPAINT_REMOVAL="EDIT_MODE_INPAINT_REMOVAL",o.EDIT_MODE_INPAINT_INSERTION="EDIT_MODE_INPAINT_INSERTION",o.EDIT_MODE_OUTPAINT="EDIT_MODE_OUTPAINT",o.EDIT_MODE_CONTROLLED_EDITING="EDIT_MODE_CONTROLLED_EDITING",o.EDIT_MODE_STYLE="EDIT_MODE_STYLE",o.EDIT_MODE_BGSWAP="EDIT_MODE_BGSWAP",o.EDIT_MODE_PRODUCT_IMAGE="EDIT_MODE_PRODUCT_IMAGE"})(Bm||(Bm={}));var Hm;(function(o){o.FOREGROUND="FOREGROUND",o.BACKGROUND="BACKGROUND",o.PROMPT="PROMPT",o.SEMANTIC="SEMANTIC",o.INTERACTIVE="INTERACTIVE"})(Hm||(Hm={}));var Fm;(function(o){o.ASSET="ASSET",o.STYLE="STYLE"})(Fm||(Fm={}));var Vm;(function(o){o.INSERT="INSERT",o.REMOVE="REMOVE",o.REMOVE_STATIC="REMOVE_STATIC",o.OUTPAINT="OUTPAINT"})(Vm||(Vm={}));var qm;(function(o){o.OPTIMIZED="OPTIMIZED",o.LOSSLESS="LOSSLESS"})(qm||(qm={}));var zm;(function(o){o.SUPERVISED_FINE_TUNING="SUPERVISED_FINE_TUNING",o.PREFERENCE_TUNING="PREFERENCE_TUNING"})(zm||(zm={}));var Ym;(function(o){o.STATE_UNSPECIFIED="STATE_UNSPECIFIED",o.STATE_PENDING="STATE_PENDING",o.STATE_ACTIVE="STATE_ACTIVE",o.STATE_FAILED="STATE_FAILED"})(Ym||(Ym={}));var Jm;(function(o){o.STATE_UNSPECIFIED="STATE_UNSPECIFIED",o.PROCESSING="PROCESSING",o.ACTIVE="ACTIVE",o.FAILED="FAILED"})(Jm||(Jm={}));var Km;(function(o){o.SOURCE_UNSPECIFIED="SOURCE_UNSPECIFIED",o.UPLOADED="UPLOADED",o.GENERATED="GENERATED"})(Km||(Km={}));var Xm;(function(o){o.TURN_COMPLETE_REASON_UNSPECIFIED="TURN_COMPLETE_REASON_UNSPECIFIED",o.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",o.RESPONSE_REJECTED="RESPONSE_REJECTED",o.NEED_MORE_INPUT="NEED_MORE_INPUT"})(Xm||(Xm={}));var Wm;(function(o){o.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",o.TEXT="TEXT",o.IMAGE="IMAGE",o.VIDEO="VIDEO",o.AUDIO="AUDIO",o.DOCUMENT="DOCUMENT"})(Wm||(Wm={}));var Qm;(function(o){o.VAD_SIGNAL_TYPE_UNSPECIFIED="VAD_SIGNAL_TYPE_UNSPECIFIED",o.VAD_SIGNAL_TYPE_SOS="VAD_SIGNAL_TYPE_SOS",o.VAD_SIGNAL_TYPE_EOS="VAD_SIGNAL_TYPE_EOS"})(Qm||(Qm={}));var $m;(function(o){o.START_SENSITIVITY_UNSPECIFIED="START_SENSITIVITY_UNSPECIFIED",o.START_SENSITIVITY_HIGH="START_SENSITIVITY_HIGH",o.START_SENSITIVITY_LOW="START_SENSITIVITY_LOW"})($m||($m={}));var Zm;(function(o){o.END_SENSITIVITY_UNSPECIFIED="END_SENSITIVITY_UNSPECIFIED",o.END_SENSITIVITY_HIGH="END_SENSITIVITY_HIGH",o.END_SENSITIVITY_LOW="END_SENSITIVITY_LOW"})(Zm||(Zm={}));var jm;(function(o){o.ACTIVITY_HANDLING_UNSPECIFIED="ACTIVITY_HANDLING_UNSPECIFIED",o.START_OF_ACTIVITY_INTERRUPTS="START_OF_ACTIVITY_INTERRUPTS",o.NO_INTERRUPTION="NO_INTERRUPTION"})(jm||(jm={}));var eh;(function(o){o.TURN_COVERAGE_UNSPECIFIED="TURN_COVERAGE_UNSPECIFIED",o.TURN_INCLUDES_ONLY_ACTIVITY="TURN_INCLUDES_ONLY_ACTIVITY",o.TURN_INCLUDES_ALL_INPUT="TURN_INCLUDES_ALL_INPUT"})(eh||(eh={}));var th;(function(o){o.SCALE_UNSPECIFIED="SCALE_UNSPECIFIED",o.C_MAJOR_A_MINOR="C_MAJOR_A_MINOR",o.D_FLAT_MAJOR_B_FLAT_MINOR="D_FLAT_MAJOR_B_FLAT_MINOR",o.D_MAJOR_B_MINOR="D_MAJOR_B_MINOR",o.E_FLAT_MAJOR_C_MINOR="E_FLAT_MAJOR_C_MINOR",o.E_MAJOR_D_FLAT_MINOR="E_MAJOR_D_FLAT_MINOR",o.F_MAJOR_D_MINOR="F_MAJOR_D_MINOR",o.G_FLAT_MAJOR_E_FLAT_MINOR="G_FLAT_MAJOR_E_FLAT_MINOR",o.G_MAJOR_E_MINOR="G_MAJOR_E_MINOR",o.A_FLAT_MAJOR_F_MINOR="A_FLAT_MAJOR_F_MINOR",o.A_MAJOR_G_FLAT_MINOR="A_MAJOR_G_FLAT_MINOR",o.B_FLAT_MAJOR_G_MINOR="B_FLAT_MAJOR_G_MINOR",o.B_MAJOR_A_FLAT_MINOR="B_MAJOR_A_FLAT_MINOR"})(th||(th={}));var nh;(function(o){o.MUSIC_GENERATION_MODE_UNSPECIFIED="MUSIC_GENERATION_MODE_UNSPECIFIED",o.QUALITY="QUALITY",o.DIVERSITY="DIVERSITY",o.VOCALIZATION="VOCALIZATION"})(nh||(nh={}));var Zo;(function(o){o.PLAYBACK_CONTROL_UNSPECIFIED="PLAYBACK_CONTROL_UNSPECIFIED",o.PLAY="PLAY",o.PAUSE="PAUSE",o.STOP="STOP",o.RESET_CONTEXT="RESET_CONTEXT"})(Zo||(Zo={}));class Cu{constructor(t){const s={};for(const a of t.headers.entries())s[a[0]]=a[1];this.headers=s,this.responseInternal=t}json(){return this.responseInternal.json()}}class es{get text(){var t,s,a,r,d,m,g,y;if(((r=(a=(s=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||s===void 0?void 0:s.content)===null||a===void 0?void 0:a.parts)===null||r===void 0?void 0:r.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning text from the first one.");let h="",v=!1;const C=[];for(const T of(y=(g=(m=(d=this.candidates)===null||d===void 0?void 0:d[0])===null||m===void 0?void 0:m.content)===null||g===void 0?void 0:g.parts)!==null&&y!==void 0?y:[]){for(const[b,k]of Object.entries(T))b!=="text"&&b!=="thought"&&b!=="thoughtSignature"&&(k!==null||k!==void 0)&&C.push(b);if(typeof T.text=="string"){if(typeof T.thought=="boolean"&&T.thought)continue;v=!0,h+=T.text}}return C.length>0&&console.warn(`there are non-text parts ${C} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),v?h:void 0}get data(){var t,s,a,r,d,m,g,y;if(((r=(a=(s=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||s===void 0?void 0:s.content)===null||a===void 0?void 0:a.parts)===null||r===void 0?void 0:r.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning data from the first one.");let h="";const v=[];for(const C of(y=(g=(m=(d=this.candidates)===null||d===void 0?void 0:d[0])===null||m===void 0?void 0:m.content)===null||g===void 0?void 0:g.parts)!==null&&y!==void 0?y:[]){for(const[T,b]of Object.entries(C))T!=="inlineData"&&(b!==null||b!==void 0)&&v.push(T);C.inlineData&&typeof C.inlineData.data=="string"&&(h+=atob(C.inlineData.data))}return v.length>0&&console.warn(`there are non-data parts ${v} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),h.length>0?btoa(h):void 0}get functionCalls(){var t,s,a,r,d,m,g,y;if(((r=(a=(s=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||s===void 0?void 0:s.content)===null||a===void 0?void 0:a.parts)===null||r===void 0?void 0:r.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning function calls from the first one.");const h=(y=(g=(m=(d=this.candidates)===null||d===void 0?void 0:d[0])===null||m===void 0?void 0:m.content)===null||g===void 0?void 0:g.parts)===null||y===void 0?void 0:y.filter(v=>v.functionCall).map(v=>v.functionCall).filter(v=>v!==void 0);if((h==null?void 0:h.length)!==0)return h}get executableCode(){var t,s,a,r,d,m,g,y,h;if(((r=(a=(s=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||s===void 0?void 0:s.content)===null||a===void 0?void 0:a.parts)===null||r===void 0?void 0:r.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning executable code from the first one.");const v=(y=(g=(m=(d=this.candidates)===null||d===void 0?void 0:d[0])===null||m===void 0?void 0:m.content)===null||g===void 0?void 0:g.parts)===null||y===void 0?void 0:y.filter(C=>C.executableCode).map(C=>C.executableCode).filter(C=>C!==void 0);if((v==null?void 0:v.length)!==0)return(h=v==null?void 0:v[0])===null||h===void 0?void 0:h.code}get codeExecutionResult(){var t,s,a,r,d,m,g,y,h;if(((r=(a=(s=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||s===void 0?void 0:s.content)===null||a===void 0?void 0:a.parts)===null||r===void 0?void 0:r.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning code execution result from the first one.");const v=(y=(g=(m=(d=this.candidates)===null||d===void 0?void 0:d[0])===null||m===void 0?void 0:m.content)===null||g===void 0?void 0:g.parts)===null||y===void 0?void 0:y.filter(C=>C.codeExecutionResult).map(C=>C.codeExecutionResult).filter(C=>C!==void 0);if((v==null?void 0:v.length)!==0)return(h=v==null?void 0:v[0])===null||h===void 0?void 0:h.output}}class oh{}class ih{}class FS{}class VS{}class qS{}class zS{}class sh{}class ah{}class lh{}class YS{}class Ma{_fromAPIResponse({apiResponse:t,_isVertexAI:s}){const a=new Ma;let r;const d=t;return s?r=xS(d):r=IS(d),Object.assign(a,r),a}}class rh{}class uh{}class ch{}class dh{}class JS{}class KS{}class XS{}class ku{_fromAPIResponse({apiResponse:t,_isVertexAI:s}){const a=new ku,d=LS(t);return Object.assign(a,d),a}}class WS{}class QS{}class $S{}class ph{}class ZS{get text(){var t,s,a;let r="",d=!1;const m=[];for(const g of(a=(s=(t=this.serverContent)===null||t===void 0?void 0:t.modelTurn)===null||s===void 0?void 0:s.parts)!==null&&a!==void 0?a:[]){for(const[y,h]of Object.entries(g))y!=="text"&&y!=="thought"&&h!==null&&m.push(y);if(typeof g.text=="string"){if(typeof g.thought=="boolean"&&g.thought)continue;d=!0,r+=g.text}}return m.length>0&&console.warn(`there are non-text parts ${m} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),d?r:void 0}get data(){var t,s,a;let r="";const d=[];for(const m of(a=(s=(t=this.serverContent)===null||t===void 0?void 0:t.modelTurn)===null||s===void 0?void 0:s.parts)!==null&&a!==void 0?a:[]){for(const[g,y]of Object.entries(m))g!=="inlineData"&&y!==null&&d.push(g);m.inlineData&&typeof m.inlineData.data=="string"&&(r+=atob(m.inlineData.data))}return d.length>0&&console.warn(`there are non-data parts ${d} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),r.length>0?btoa(r):void 0}}class jS{get audioChunk(){if(this.serverContent&&this.serverContent.audioChunks&&this.serverContent.audioChunks.length>0)return this.serverContent.audioChunks[0]}}class Uu{_fromAPIResponse({apiResponse:t,_isVertexAI:s}){const a=new Uu,d=zh(t);return Object.assign(a,d),a}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function _e(o,t){if(!t||typeof t!="string")throw new Error("model is required and must be a string");if(t.includes("..")||t.includes("?")||t.includes("&"))throw new Error("invalid model parameter");if(o.isVertexAI()){if(t.startsWith("publishers/")||t.startsWith("projects/")||t.startsWith("models/"))return t;if(t.indexOf("/")>=0){const s=t.split("/",2);return`publishers/${s[0]}/models/${s[1]}`}else return`publishers/google/models/${t}`}else return t.startsWith("models/")||t.startsWith("tunedModels/")?t:`models/${t}`}function Yh(o,t){const s=_e(o,t);return s?s.startsWith("publishers/")&&o.isVertexAI()?`projects/${o.getProject()}/locations/${o.getLocation()}/${s}`:s.startsWith("models/")&&o.isVertexAI()?`projects/${o.getProject()}/locations/${o.getLocation()}/publishers/google/${s}`:s:""}function Jh(o){return Array.isArray(o)?o.map(t=>Pa(t)):[Pa(o)]}function Pa(o){if(typeof o=="object"&&o!==null)return o;throw new Error(`Could not parse input as Blob. Unsupported blob type: ${typeof o}`)}function Kh(o){const t=Pa(o);if(t.mimeType&&t.mimeType.startsWith("image/"))return t;throw new Error(`Unsupported mime type: ${t.mimeType}`)}function Xh(o){const t=Pa(o);if(t.mimeType&&t.mimeType.startsWith("audio/"))return t;throw new Error(`Unsupported mime type: ${t.mimeType}`)}function fh(o){if(o==null)throw new Error("PartUnion is required");if(typeof o=="object")return o;if(typeof o=="string")return{text:o};throw new Error(`Unsupported part type: ${typeof o}`)}function Wh(o){if(o==null||Array.isArray(o)&&o.length===0)throw new Error("PartListUnion is required");return Array.isArray(o)?o.map(t=>fh(t)):[fh(o)]}function Tu(o){return o!=null&&typeof o=="object"&&"parts"in o&&Array.isArray(o.parts)}function mh(o){return o!=null&&typeof o=="object"&&"functionCall"in o}function hh(o){return o!=null&&typeof o=="object"&&"functionResponse"in o}function st(o){if(o==null)throw new Error("ContentUnion is required");return Tu(o)?o:{role:"user",parts:Wh(o)}}function Lu(o,t){if(!t)return[];if(o.isVertexAI()&&Array.isArray(t))return t.flatMap(s=>{const a=st(s);return a.parts&&a.parts.length>0&&a.parts[0].text!==void 0?[a.parts[0].text]:[]});if(o.isVertexAI()){const s=st(t);return s.parts&&s.parts.length>0&&s.parts[0].text!==void 0?[s.parts[0].text]:[]}return Array.isArray(t)?t.map(s=>st(s)):[st(t)]}function Gt(o){if(o==null||Array.isArray(o)&&o.length===0)throw new Error("contents are required");if(!Array.isArray(o)){if(mh(o)||hh(o))throw new Error("To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them");return[st(o)]}const t=[],s=[],a=Tu(o[0]);for(const r of o){const d=Tu(r);if(d!=a)throw new Error("Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them");if(d)t.push(r);else{if(mh(r)||hh(r))throw new Error("To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them");s.push(r)}}return a||t.push({role:"user",parts:Wh(s)}),t}function eC(o,t){o.includes("null")&&(t.nullable=!0);const s=o.filter(a=>a!=="null");if(s.length===1)t.type=Object.values(qn).includes(s[0].toUpperCase())?s[0].toUpperCase():qn.TYPE_UNSPECIFIED;else{t.anyOf=[];for(const a of s)t.anyOf.push({type:Object.values(qn).includes(a.toUpperCase())?a.toUpperCase():qn.TYPE_UNSPECIFIED})}}function ei(o){const t={},s=["items"],a=["anyOf"],r=["properties"];if(o.type&&o.anyOf)throw new Error("type and anyOf cannot be both populated.");const d=o.anyOf;d!=null&&d.length==2&&(d[0].type==="null"?(t.nullable=!0,o=d[1]):d[1].type==="null"&&(t.nullable=!0,o=d[0])),o.type instanceof Array&&eC(o.type,t);for(const[m,g]of Object.entries(o))if(g!=null)if(m=="type"){if(g==="null")throw new Error("type: null can not be the only possible type for the field.");if(g instanceof Array)continue;t.type=Object.values(qn).includes(g.toUpperCase())?g.toUpperCase():qn.TYPE_UNSPECIFIED}else if(s.includes(m))t[m]=ei(g);else if(a.includes(m)){const y=[];for(const h of g){if(h.type=="null"){t.nullable=!0;continue}y.push(ei(h))}t[m]=y}else if(r.includes(m)){const y={};for(const[h,v]of Object.entries(g))y[h]=ei(v);t[m]=y}else{if(m==="additionalProperties")continue;t[m]=g}return t}function Gu(o){return ei(o)}function Ou(o){if(typeof o=="object")return o;if(typeof o=="string")return{voiceConfig:{prebuiltVoiceConfig:{voiceName:o}}};throw new Error(`Unsupported speechConfig type: ${typeof o}`)}function Bu(o){if("multiSpeakerVoiceConfig"in o)throw new Error("multiSpeakerVoiceConfig is not supported in the live API.");return o}function ni(o){if(o.functionDeclarations)for(const t of o.functionDeclarations)t.parameters&&(Object.keys(t.parameters).includes("$schema")?t.parametersJsonSchema||(t.parametersJsonSchema=t.parameters,delete t.parameters):t.parameters=ei(t.parameters)),t.response&&(Object.keys(t.response).includes("$schema")?t.responseJsonSchema||(t.responseJsonSchema=t.response,delete t.response):t.response=ei(t.response));return o}function oi(o){if(o==null)throw new Error("tools is required");if(!Array.isArray(o))throw new Error("tools is required and must be an array of Tools");const t=[];for(const s of o)t.push(s);return t}function tC(o,t,s,a=1){const r=!t.startsWith(`${s}/`)&&t.split("/").length===a;return o.isVertexAI()?t.startsWith("projects/")?t:t.startsWith("locations/")?`projects/${o.getProject()}/${t}`:t.startsWith(`${s}/`)?`projects/${o.getProject()}/locations/${o.getLocation()}/${t}`:r?`projects/${o.getProject()}/locations/${o.getLocation()}/${s}/${t}`:t:r?`${s}/${t}`:t}function yn(o,t){if(typeof t!="string")throw new Error("name must be a string");return tC(o,t,"cachedContents")}function Qh(o){switch(o){case"STATE_UNSPECIFIED":return"JOB_STATE_UNSPECIFIED";case"CREATING":return"JOB_STATE_RUNNING";case"ACTIVE":return"JOB_STATE_SUCCEEDED";case"FAILED":return"JOB_STATE_FAILED";default:return o}}function zn(o){return Du(o)}function nC(o){return o!=null&&typeof o=="object"&&"name"in o}function oC(o){return o!=null&&typeof o=="object"&&"video"in o}function iC(o){return o!=null&&typeof o=="object"&&"uri"in o}function $h(o){var t;let s;if(nC(o)&&(s=o.name),!(iC(o)&&(s=o.uri,s===void 0))&&!(oC(o)&&(s=(t=o.video)===null||t===void 0?void 0:t.uri,s===void 0))){if(typeof o=="string"&&(s=o),s===void 0)throw new Error("Could not extract file name from the provided input.");if(s.startsWith("https://")){const r=s.split("files/")[1].match(/[a-z0-9]+/);if(r===null)throw new Error(`Could not extract file name from URI ${s}`);s=r[0]}else s.startsWith("files/")&&(s=s.split("files/")[1]);return s}}function Zh(o,t){let s;return o.isVertexAI()?s=t?"publishers/google/models":"models":s=t?"models":"tunedModels",s}function jh(o){for(const t of["models","tunedModels","publisherModels"])if(sC(o,t))return o[t];return[]}function sC(o,t){return o!==null&&typeof o=="object"&&t in o}function aC(o,t={}){const s=o,a={name:s.name,description:s.description,parametersJsonSchema:s.inputSchema};return s.outputSchema&&(a.responseJsonSchema=s.outputSchema),t.behavior&&(a.behavior=t.behavior),{functionDeclarations:[a]}}function lC(o,t={}){const s=[],a=new Set;for(const r of o){const d=r.name;if(a.has(d))throw new Error(`Duplicate function name ${d} found in MCP tools. Please ensure function names are unique.`);a.add(d);const m=aC(r,t);m.functionDeclarations&&s.push(...m.functionDeclarations)}return{functionDeclarations:s}}function eg(o,t){let s;if(typeof t=="string")if(o.isVertexAI())if(t.startsWith("gs://"))s={format:"jsonl",gcsUri:[t]};else if(t.startsWith("bq://"))s={format:"bigquery",bigqueryUri:t};else throw new Error(`Unsupported string source for Vertex AI: ${t}`);else if(t.startsWith("files/"))s={fileName:t};else throw new Error(`Unsupported string source for Gemini API: ${t}`);else if(Array.isArray(t)){if(o.isVertexAI())throw new Error("InlinedRequest[] is not supported in Vertex AI.");s={inlinedRequests:t}}else s=t;const a=[s.gcsUri,s.bigqueryUri].filter(Boolean).length,r=[s.inlinedRequests,s.fileName].filter(Boolean).length;if(o.isVertexAI()){if(r>0||a!==1)throw new Error("Exactly one of `gcsUri` or `bigqueryUri` must be set for Vertex AI.")}else if(a>0||r!==1)throw new Error("Exactly one of `inlinedRequests`, `fileName`, must be set for Gemini API.");return s}function rC(o){if(typeof o!="string")return o;const t=o;if(t.startsWith("gs://"))return{format:"jsonl",gcsUri:t};if(t.startsWith("bq://"))return{format:"bigquery",bigqueryUri:t};throw new Error(`Unsupported destination: ${t}`)}function tg(o){if(typeof o!="object"||o===null)return{};const t=o,s=t.inlinedResponses;if(typeof s!="object"||s===null)return o;const r=s.inlinedResponses;if(!Array.isArray(r)||r.length===0)return o;let d=!1;for(const m of r){if(typeof m!="object"||m===null)continue;const y=m.response;if(typeof y!="object"||y===null)continue;if(y.embedding!==void 0){d=!0;break}}return d&&(t.inlinedEmbedContentResponses=t.inlinedResponses,delete t.inlinedResponses),o}function ii(o,t){const s=t;if(!o.isVertexAI()){if(/batches\/[^/]+$/.test(s))return s.split("/").pop();throw new Error(`Invalid batch job name: ${s}.`)}if(/^projects\/[^/]+\/locations\/[^/]+\/batchPredictionJobs\/[^/]+$/.test(s))return s.split("/").pop();if(/^\d+$/.test(s))return s;throw new Error(`Invalid batch job name: ${s}.`)}function ng(o){const t=o;return t==="BATCH_STATE_UNSPECIFIED"?"JOB_STATE_UNSPECIFIED":t==="BATCH_STATE_PENDING"?"JOB_STATE_PENDING":t==="BATCH_STATE_RUNNING"?"JOB_STATE_RUNNING":t==="BATCH_STATE_SUCCEEDED"?"JOB_STATE_SUCCEEDED":t==="BATCH_STATE_FAILED"?"JOB_STATE_FAILED":t==="BATCH_STATE_CANCELLED"?"JOB_STATE_CANCELLED":t==="BATCH_STATE_EXPIRED"?"JOB_STATE_EXPIRED":t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function uC(o){const t={},s=u(o,["responsesFile"]);s!=null&&c(t,["fileName"],s);const a=u(o,["inlinedResponses","inlinedResponses"]);if(a!=null){let d=a;Array.isArray(d)&&(d=d.map(m=>qC(m))),c(t,["inlinedResponses"],d)}const r=u(o,["inlinedEmbedContentResponses","inlinedResponses"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["inlinedEmbedContentResponses"],d)}return t}function cC(o){const t={},s=u(o,["predictionsFormat"]);s!=null&&c(t,["format"],s);const a=u(o,["gcsDestination","outputUriPrefix"]);a!=null&&c(t,["gcsUri"],a);const r=u(o,["bigqueryDestination","outputUri"]);return r!=null&&c(t,["bigqueryUri"],r),t}function dC(o){const t={},s=u(o,["format"]);s!=null&&c(t,["predictionsFormat"],s);const a=u(o,["gcsUri"]);a!=null&&c(t,["gcsDestination","outputUriPrefix"],a);const r=u(o,["bigqueryUri"]);if(r!=null&&c(t,["bigqueryDestination","outputUri"],r),u(o,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(u(o,["inlinedResponses"])!==void 0)throw new Error("inlinedResponses parameter is not supported in Vertex AI.");if(u(o,["inlinedEmbedContentResponses"])!==void 0)throw new Error("inlinedEmbedContentResponses parameter is not supported in Vertex AI.");return t}function Ia(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["metadata","displayName"]);a!=null&&c(t,["displayName"],a);const r=u(o,["metadata","state"]);r!=null&&c(t,["state"],ng(r));const d=u(o,["metadata","createTime"]);d!=null&&c(t,["createTime"],d);const m=u(o,["metadata","endTime"]);m!=null&&c(t,["endTime"],m);const g=u(o,["metadata","updateTime"]);g!=null&&c(t,["updateTime"],g);const y=u(o,["metadata","model"]);y!=null&&c(t,["model"],y);const h=u(o,["metadata","output"]);return h!=null&&c(t,["dest"],uC(tg(h))),t}function Au(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["displayName"]);a!=null&&c(t,["displayName"],a);const r=u(o,["state"]);r!=null&&c(t,["state"],ng(r));const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["createTime"]);m!=null&&c(t,["createTime"],m);const g=u(o,["startTime"]);g!=null&&c(t,["startTime"],g);const y=u(o,["endTime"]);y!=null&&c(t,["endTime"],y);const h=u(o,["updateTime"]);h!=null&&c(t,["updateTime"],h);const v=u(o,["model"]);v!=null&&c(t,["model"],v);const C=u(o,["inputConfig"]);C!=null&&c(t,["src"],pC(C));const T=u(o,["outputConfig"]);T!=null&&c(t,["dest"],cC(tg(T)));const b=u(o,["completionStats"]);return b!=null&&c(t,["completionStats"],b),t}function pC(o){const t={},s=u(o,["instancesFormat"]);s!=null&&c(t,["format"],s);const a=u(o,["gcsSource","uris"]);a!=null&&c(t,["gcsUri"],a);const r=u(o,["bigquerySource","inputUri"]);return r!=null&&c(t,["bigqueryUri"],r),t}function fC(o,t){const s={};if(u(t,["format"])!==void 0)throw new Error("format parameter is not supported in Gemini API.");if(u(t,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(u(t,["bigqueryUri"])!==void 0)throw new Error("bigqueryUri parameter is not supported in Gemini API.");const a=u(t,["fileName"]);a!=null&&c(s,["fileName"],a);const r=u(t,["inlinedRequests"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>VC(o,m))),c(s,["requests","requests"],d)}return s}function mC(o){const t={},s=u(o,["format"]);s!=null&&c(t,["instancesFormat"],s);const a=u(o,["gcsUri"]);a!=null&&c(t,["gcsSource","uris"],a);const r=u(o,["bigqueryUri"]);if(r!=null&&c(t,["bigquerySource","inputUri"],r),u(o,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(u(o,["inlinedRequests"])!==void 0)throw new Error("inlinedRequests parameter is not supported in Vertex AI.");return t}function hC(o){const t={},s=u(o,["data"]);if(s!=null&&c(t,["data"],s),u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function gC(o,t){const s={},a=u(t,["name"]);return a!=null&&c(s,["_url","name"],ii(o,a)),s}function yC(o,t){const s={},a=u(t,["name"]);return a!=null&&c(s,["_url","name"],ii(o,a)),s}function vC(o){const t={},s=u(o,["content"]);s!=null&&c(t,["content"],s);const a=u(o,["citationMetadata"]);a!=null&&c(t,["citationMetadata"],SC(a));const r=u(o,["tokenCount"]);r!=null&&c(t,["tokenCount"],r);const d=u(o,["finishReason"]);d!=null&&c(t,["finishReason"],d);const m=u(o,["avgLogprobs"]);m!=null&&c(t,["avgLogprobs"],m);const g=u(o,["groundingMetadata"]);g!=null&&c(t,["groundingMetadata"],g);const y=u(o,["index"]);y!=null&&c(t,["index"],y);const h=u(o,["logprobsResult"]);h!=null&&c(t,["logprobsResult"],h);const v=u(o,["safetyRatings"]);if(v!=null){let T=v;Array.isArray(T)&&(T=T.map(b=>b)),c(t,["safetyRatings"],T)}const C=u(o,["urlContextMetadata"]);return C!=null&&c(t,["urlContextMetadata"],C),t}function SC(o){const t={},s=u(o,["citationSources"]);if(s!=null){let a=s;Array.isArray(a)&&(a=a.map(r=>r)),c(t,["citations"],a)}return t}function og(o){const t={},s=u(o,["parts"]);if(s!=null){let r=s;Array.isArray(r)&&(r=r.map(d=>QC(d))),c(t,["parts"],r)}const a=u(o,["role"]);return a!=null&&c(t,["role"],a),t}function CC(o,t){const s={},a=u(o,["displayName"]);if(t!==void 0&&a!=null&&c(t,["batch","displayName"],a),u(o,["dest"])!==void 0)throw new Error("dest parameter is not supported in Gemini API.");return s}function TC(o,t){const s={},a=u(o,["displayName"]);t!==void 0&&a!=null&&c(t,["displayName"],a);const r=u(o,["dest"]);return t!==void 0&&r!=null&&c(t,["outputConfig"],dC(rC(r))),s}function gh(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],_e(o,a));const r=u(t,["src"]);r!=null&&c(s,["batch","inputConfig"],fC(o,eg(o,r)));const d=u(t,["config"]);return d!=null&&CC(d,s),s}function AC(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["model"],_e(o,a));const r=u(t,["src"]);r!=null&&c(s,["inputConfig"],mC(eg(o,r)));const d=u(t,["config"]);return d!=null&&TC(d,s),s}function EC(o,t){const s={},a=u(o,["displayName"]);return t!==void 0&&a!=null&&c(t,["batch","displayName"],a),s}function bC(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],_e(o,a));const r=u(t,["src"]);r!=null&&c(s,["batch","inputConfig"],MC(o,r));const d=u(t,["config"]);return d!=null&&EC(d,s),s}function _C(o,t){const s={},a=u(t,["name"]);return a!=null&&c(s,["_url","name"],ii(o,a)),s}function wC(o,t){const s={},a=u(t,["name"]);return a!=null&&c(s,["_url","name"],ii(o,a)),s}function RC(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["name"]);a!=null&&c(t,["name"],a);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);return d!=null&&c(t,["error"],d),t}function IC(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["name"]);a!=null&&c(t,["name"],a);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);return d!=null&&c(t,["error"],d),t}function xC(o,t){const s={},a=u(t,["contents"]);if(a!=null){let d=Lu(o,a);Array.isArray(d)&&(d=d.map(m=>m)),c(s,["requests[]","request","content"],d)}const r=u(t,["config"]);return r!=null&&(c(s,["_self"],NC(r,s)),wS(s,{"requests[].*":"requests[].request.*"})),s}function NC(o,t){const s={},a=u(o,["taskType"]);t!==void 0&&a!=null&&c(t,["requests[]","taskType"],a);const r=u(o,["title"]);t!==void 0&&r!=null&&c(t,["requests[]","title"],r);const d=u(o,["outputDimensionality"]);if(t!==void 0&&d!=null&&c(t,["requests[]","outputDimensionality"],d),u(o,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(u(o,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return s}function MC(o,t){const s={},a=u(t,["fileName"]);a!=null&&c(s,["file_name"],a);const r=u(t,["inlinedRequests"]);return r!=null&&c(s,["requests"],xC(o,r)),s}function PC(o){const t={};if(u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const s=u(o,["fileUri"]);s!=null&&c(t,["fileUri"],s);const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function DC(o){const t={},s=u(o,["id"]);s!=null&&c(t,["id"],s);const a=u(o,["args"]);a!=null&&c(t,["args"],a);const r=u(o,["name"]);if(r!=null&&c(t,["name"],r),u(o,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(o,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function kC(o){const t={},s=u(o,["mode"]);s!=null&&c(t,["mode"],s);const a=u(o,["allowedFunctionNames"]);if(a!=null&&c(t,["allowedFunctionNames"],a),u(o,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return t}function UC(o,t,s){const a={},r=u(t,["systemInstruction"]);s!==void 0&&r!=null&&c(s,["systemInstruction"],og(st(r)));const d=u(t,["temperature"]);d!=null&&c(a,["temperature"],d);const m=u(t,["topP"]);m!=null&&c(a,["topP"],m);const g=u(t,["topK"]);g!=null&&c(a,["topK"],g);const y=u(t,["candidateCount"]);y!=null&&c(a,["candidateCount"],y);const h=u(t,["maxOutputTokens"]);h!=null&&c(a,["maxOutputTokens"],h);const v=u(t,["stopSequences"]);v!=null&&c(a,["stopSequences"],v);const C=u(t,["responseLogprobs"]);C!=null&&c(a,["responseLogprobs"],C);const T=u(t,["logprobs"]);T!=null&&c(a,["logprobs"],T);const b=u(t,["presencePenalty"]);b!=null&&c(a,["presencePenalty"],b);const k=u(t,["frequencyPenalty"]);k!=null&&c(a,["frequencyPenalty"],k);const N=u(t,["seed"]);N!=null&&c(a,["seed"],N);const I=u(t,["responseMimeType"]);I!=null&&c(a,["responseMimeType"],I);const U=u(t,["responseSchema"]);U!=null&&c(a,["responseSchema"],Gu(U));const q=u(t,["responseJsonSchema"]);if(q!=null&&c(a,["responseJsonSchema"],q),u(t,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(u(t,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const B=u(t,["safetySettings"]);if(s!==void 0&&B!=null){let j=B;Array.isArray(j)&&(j=j.map(ce=>$C(ce))),c(s,["safetySettings"],j)}const X=u(t,["tools"]);if(s!==void 0&&X!=null){let j=oi(X);Array.isArray(j)&&(j=j.map(ce=>jC(ni(ce)))),c(s,["tools"],j)}const Q=u(t,["toolConfig"]);if(s!==void 0&&Q!=null&&c(s,["toolConfig"],ZC(Q)),u(t,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const ee=u(t,["cachedContent"]);s!==void 0&&ee!=null&&c(s,["cachedContent"],yn(o,ee));const J=u(t,["responseModalities"]);J!=null&&c(a,["responseModalities"],J);const $=u(t,["mediaResolution"]);$!=null&&c(a,["mediaResolution"],$);const z=u(t,["speechConfig"]);if(z!=null&&c(a,["speechConfig"],Ou(z)),u(t,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const le=u(t,["thinkingConfig"]);le!=null&&c(a,["thinkingConfig"],le);const me=u(t,["imageConfig"]);me!=null&&c(a,["imageConfig"],FC(me));const K=u(t,["enableEnhancedCivicAnswers"]);return K!=null&&c(a,["enableEnhancedCivicAnswers"],K),a}function LC(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["candidates"]);if(a!=null){let y=a;Array.isArray(y)&&(y=y.map(h=>vC(h))),c(t,["candidates"],y)}const r=u(o,["modelVersion"]);r!=null&&c(t,["modelVersion"],r);const d=u(o,["promptFeedback"]);d!=null&&c(t,["promptFeedback"],d);const m=u(o,["responseId"]);m!=null&&c(t,["responseId"],m);const g=u(o,["usageMetadata"]);return g!=null&&c(t,["usageMetadata"],g),t}function GC(o,t){const s={},a=u(t,["name"]);return a!=null&&c(s,["_url","name"],ii(o,a)),s}function OC(o,t){const s={},a=u(t,["name"]);return a!=null&&c(s,["_url","name"],ii(o,a)),s}function BC(o){const t={};if(u(o,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const s=u(o,["enableWidget"]);return s!=null&&c(t,["enableWidget"],s),t}function HC(o){const t={};if(u(o,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(u(o,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const s=u(o,["timeRangeFilter"]);return s!=null&&c(t,["timeRangeFilter"],s),t}function FC(o){const t={},s=u(o,["aspectRatio"]);s!=null&&c(t,["aspectRatio"],s);const a=u(o,["imageSize"]);if(a!=null&&c(t,["imageSize"],a),u(o,["outputMimeType"])!==void 0)throw new Error("outputMimeType parameter is not supported in Gemini API.");if(u(o,["outputCompressionQuality"])!==void 0)throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");return t}function VC(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["request","model"],_e(o,a));const r=u(t,["contents"]);if(r!=null){let g=Gt(r);Array.isArray(g)&&(g=g.map(y=>og(y))),c(s,["request","contents"],g)}const d=u(t,["metadata"]);d!=null&&c(s,["metadata"],d);const m=u(t,["config"]);return m!=null&&c(s,["request","generationConfig"],UC(o,m,u(s,["request"],{}))),s}function qC(o){const t={},s=u(o,["response"]);s!=null&&c(t,["response"],LC(s));const a=u(o,["error"]);return a!=null&&c(t,["error"],a),t}function zC(o,t){const s={},a=u(o,["pageSize"]);t!==void 0&&a!=null&&c(t,["_query","pageSize"],a);const r=u(o,["pageToken"]);if(t!==void 0&&r!=null&&c(t,["_query","pageToken"],r),u(o,["filter"])!==void 0)throw new Error("filter parameter is not supported in Gemini API.");return s}function YC(o,t){const s={},a=u(o,["pageSize"]);t!==void 0&&a!=null&&c(t,["_query","pageSize"],a);const r=u(o,["pageToken"]);t!==void 0&&r!=null&&c(t,["_query","pageToken"],r);const d=u(o,["filter"]);return t!==void 0&&d!=null&&c(t,["_query","filter"],d),s}function JC(o){const t={},s=u(o,["config"]);return s!=null&&zC(s,t),t}function KC(o){const t={},s=u(o,["config"]);return s!=null&&YC(s,t),t}function XC(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["nextPageToken"]);a!=null&&c(t,["nextPageToken"],a);const r=u(o,["operations"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>Ia(m))),c(t,["batchJobs"],d)}return t}function WC(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["nextPageToken"]);a!=null&&c(t,["nextPageToken"],a);const r=u(o,["batchPredictionJobs"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>Au(m))),c(t,["batchJobs"],d)}return t}function QC(o){const t={},s=u(o,["mediaResolution"]);s!=null&&c(t,["mediaResolution"],s);const a=u(o,["codeExecutionResult"]);a!=null&&c(t,["codeExecutionResult"],a);const r=u(o,["executableCode"]);r!=null&&c(t,["executableCode"],r);const d=u(o,["fileData"]);d!=null&&c(t,["fileData"],PC(d));const m=u(o,["functionCall"]);m!=null&&c(t,["functionCall"],DC(m));const g=u(o,["functionResponse"]);g!=null&&c(t,["functionResponse"],g);const y=u(o,["inlineData"]);y!=null&&c(t,["inlineData"],hC(y));const h=u(o,["text"]);h!=null&&c(t,["text"],h);const v=u(o,["thought"]);v!=null&&c(t,["thought"],v);const C=u(o,["thoughtSignature"]);C!=null&&c(t,["thoughtSignature"],C);const T=u(o,["videoMetadata"]);return T!=null&&c(t,["videoMetadata"],T),t}function $C(o){const t={},s=u(o,["category"]);if(s!=null&&c(t,["category"],s),u(o,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const a=u(o,["threshold"]);return a!=null&&c(t,["threshold"],a),t}function ZC(o){const t={},s=u(o,["functionCallingConfig"]);s!=null&&c(t,["functionCallingConfig"],kC(s));const a=u(o,["retrievalConfig"]);return a!=null&&c(t,["retrievalConfig"],a),t}function jC(o){const t={},s=u(o,["functionDeclarations"]);if(s!=null){let v=s;Array.isArray(v)&&(v=v.map(C=>C)),c(t,["functionDeclarations"],v)}if(u(o,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const a=u(o,["googleSearchRetrieval"]);a!=null&&c(t,["googleSearchRetrieval"],a);const r=u(o,["computerUse"]);r!=null&&c(t,["computerUse"],r);const d=u(o,["fileSearch"]);d!=null&&c(t,["fileSearch"],d);const m=u(o,["codeExecution"]);if(m!=null&&c(t,["codeExecution"],m),u(o,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const g=u(o,["googleMaps"]);g!=null&&c(t,["googleMaps"],BC(g));const y=u(o,["googleSearch"]);y!=null&&c(t,["googleSearch"],HC(y));const h=u(o,["urlContext"]);return h!=null&&c(t,["urlContext"],h),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var hn;(function(o){o.PAGED_ITEM_BATCH_JOBS="batchJobs",o.PAGED_ITEM_MODELS="models",o.PAGED_ITEM_TUNING_JOBS="tuningJobs",o.PAGED_ITEM_FILES="files",o.PAGED_ITEM_CACHED_CONTENTS="cachedContents",o.PAGED_ITEM_FILE_SEARCH_STORES="fileSearchStores",o.PAGED_ITEM_DOCUMENTS="documents"})(hn||(hn={}));class po{constructor(t,s,a,r){this.pageInternal=[],this.paramsInternal={},this.requestInternal=s,this.init(t,a,r)}init(t,s,a){var r,d;this.nameInternal=t,this.pageInternal=s[this.nameInternal]||[],this.sdkHttpResponseInternal=s==null?void 0:s.sdkHttpResponse,this.idxInternal=0;let m={config:{}};!a||Object.keys(a).length===0?m={config:{}}:typeof a=="object"?m=Object.assign({},a):m=a,m.config&&(m.config.pageToken=s.nextPageToken),this.paramsInternal=m,this.pageInternalSize=(d=(r=m.config)===null||r===void 0?void 0:r.pageSize)!==null&&d!==void 0?d:this.pageInternal.length}initNextPage(t){this.init(this.nameInternal,t,this.paramsInternal)}get page(){return this.pageInternal}get name(){return this.nameInternal}get pageSize(){return this.pageInternalSize}get sdkHttpResponse(){return this.sdkHttpResponseInternal}get params(){return this.paramsInternal}get pageLength(){return this.pageInternal.length}getItem(t){return this.pageInternal[t]}[Symbol.asyncIterator](){return{next:async()=>{if(this.idxInternal>=this.pageLength)if(this.hasNextPage())await this.nextPage();else return{value:void 0,done:!0};const t=this.getItem(this.idxInternal);return this.idxInternal+=1,{value:t,done:!1}},return:async()=>({value:void 0,done:!0})}}async nextPage(){if(!this.hasNextPage())throw new Error("No more pages to fetch.");const t=await this.requestInternal(this.params);return this.initNextPage(t),this.page}hasNextPage(){var t;return((t=this.params.config)===null||t===void 0?void 0:t.pageToken)!==void 0}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class eT extends gn{constructor(t){super(),this.apiClient=t,this.list=async(s={})=>new po(hn.PAGED_ITEM_BATCH_JOBS,a=>this.listInternal(a),await this.listInternal(s),s),this.create=async s=>(this.apiClient.isVertexAI()&&(s.config=this.formatDestination(s.src,s.config)),this.createInternal(s)),this.createEmbeddings=async s=>{if(console.warn("batches.createEmbeddings() is experimental and may change without notice."),this.apiClient.isVertexAI())throw new Error("Vertex AI does not support batches.createEmbeddings.");return this.createEmbeddingsInternal(s)}}createInlinedGenerateContentRequest(t){const s=gh(this.apiClient,t),a=s._url,r=Z("{model}:batchGenerateContent",a),g=s.batch.inputConfig.requests,y=g.requests,h=[];for(const v of y){const C=Object.assign({},v);if(C.systemInstruction){const T=C.systemInstruction;delete C.systemInstruction;const b=C.request;b.systemInstruction=T,C.request=b}h.push(C)}return g.requests=h,delete s.config,delete s._url,delete s._query,{path:r,body:s}}getGcsUri(t){if(typeof t=="string")return t.startsWith("gs://")?t:void 0;if(!Array.isArray(t)&&t.gcsUri&&t.gcsUri.length>0)return t.gcsUri[0]}getBigqueryUri(t){if(typeof t=="string")return t.startsWith("bq://")?t:void 0;if(!Array.isArray(t))return t.bigqueryUri}formatDestination(t,s){const a=s?Object.assign({},s):{},r=Date.now().toString();if(a.displayName||(a.displayName=`genaiBatchJob_${r}`),a.dest===void 0){const d=this.getGcsUri(t),m=this.getBigqueryUri(t);if(d)d.endsWith(".jsonl")?a.dest=`${d.slice(0,-6)}/dest`:a.dest=`${d}_dest_${r}`;else if(m)a.dest=`${m}_dest_${r}`;else throw new Error("Unsupported source for Vertex AI: No GCS or BigQuery URI found.")}return a}async createInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=AC(this.apiClient,t);return g=Z("batchPredictionJobs",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json()),m.then(v=>Au(v))}else{const h=gh(this.apiClient,t);return g=Z("{model}:batchGenerateContent",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>Ia(v))}}async createEmbeddingsInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=bC(this.apiClient,t);return d=Z("{model}:asyncBatchEmbedContent",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>Ia(y))}}async get(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=OC(this.apiClient,t);return g=Z("batchPredictionJobs/{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json()),m.then(v=>Au(v))}else{const h=GC(this.apiClient,t);return g=Z("batches/{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>Ia(v))}}async cancel(t){var s,a,r,d;let m="",g={};if(this.apiClient.isVertexAI()){const y=yC(this.apiClient,t);m=Z("batchPredictionJobs/{name}:cancel",y._url),g=y._query,delete y._url,delete y._query,await this.apiClient.request({path:m,queryParams:g,body:JSON.stringify(y),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal})}else{const y=gC(this.apiClient,t);m=Z("batches/{name}:cancel",y._url),g=y._query,delete y._url,delete y._query,await this.apiClient.request({path:m,queryParams:g,body:JSON.stringify(y),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal})}}async listInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=KC(t);return g=Z("batchPredictionJobs",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=WC(v),T=new ph;return Object.assign(T,C),T})}else{const h=JC(t);return g=Z("batches",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=XC(v),T=new ph;return Object.assign(T,C),T})}}async delete(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=wC(this.apiClient,t);return g=Z("batchPredictionJobs/{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>IC(v))}else{const h=_C(this.apiClient,t);return g=Z("batches/{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>RC(v))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function tT(o){const t={},s=u(o,["data"]);if(s!=null&&c(t,["data"],s),u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function yh(o){const t={},s=u(o,["parts"]);if(s!=null){let r=s;Array.isArray(r)&&(r=r.map(d=>bT(d))),c(t,["parts"],r)}const a=u(o,["role"]);return a!=null&&c(t,["role"],a),t}function nT(o,t){const s={},a=u(o,["ttl"]);t!==void 0&&a!=null&&c(t,["ttl"],a);const r=u(o,["expireTime"]);t!==void 0&&r!=null&&c(t,["expireTime"],r);const d=u(o,["displayName"]);t!==void 0&&d!=null&&c(t,["displayName"],d);const m=u(o,["contents"]);if(t!==void 0&&m!=null){let v=Gt(m);Array.isArray(v)&&(v=v.map(C=>yh(C))),c(t,["contents"],v)}const g=u(o,["systemInstruction"]);t!==void 0&&g!=null&&c(t,["systemInstruction"],yh(st(g)));const y=u(o,["tools"]);if(t!==void 0&&y!=null){let v=y;Array.isArray(v)&&(v=v.map(C=>wT(C))),c(t,["tools"],v)}const h=u(o,["toolConfig"]);if(t!==void 0&&h!=null&&c(t,["toolConfig"],_T(h)),u(o,["kmsKeyName"])!==void 0)throw new Error("kmsKeyName parameter is not supported in Gemini API.");return s}function oT(o,t){const s={},a=u(o,["ttl"]);t!==void 0&&a!=null&&c(t,["ttl"],a);const r=u(o,["expireTime"]);t!==void 0&&r!=null&&c(t,["expireTime"],r);const d=u(o,["displayName"]);t!==void 0&&d!=null&&c(t,["displayName"],d);const m=u(o,["contents"]);if(t!==void 0&&m!=null){let C=Gt(m);Array.isArray(C)&&(C=C.map(T=>T)),c(t,["contents"],C)}const g=u(o,["systemInstruction"]);t!==void 0&&g!=null&&c(t,["systemInstruction"],st(g));const y=u(o,["tools"]);if(t!==void 0&&y!=null){let C=y;Array.isArray(C)&&(C=C.map(T=>RT(T))),c(t,["tools"],C)}const h=u(o,["toolConfig"]);t!==void 0&&h!=null&&c(t,["toolConfig"],h);const v=u(o,["kmsKeyName"]);return t!==void 0&&v!=null&&c(t,["encryption_spec","kmsKeyName"],v),s}function iT(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["model"],Yh(o,a));const r=u(t,["config"]);return r!=null&&nT(r,s),s}function sT(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["model"],Yh(o,a));const r=u(t,["config"]);return r!=null&&oT(r,s),s}function aT(o,t){const s={},a=u(t,["name"]);return a!=null&&c(s,["_url","name"],yn(o,a)),s}function lT(o,t){const s={},a=u(t,["name"]);return a!=null&&c(s,["_url","name"],yn(o,a)),s}function rT(o){const t={},s=u(o,["sdkHttpResponse"]);return s!=null&&c(t,["sdkHttpResponse"],s),t}function uT(o){const t={},s=u(o,["sdkHttpResponse"]);return s!=null&&c(t,["sdkHttpResponse"],s),t}function cT(o){const t={};if(u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const s=u(o,["fileUri"]);s!=null&&c(t,["fileUri"],s);const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function dT(o){const t={},s=u(o,["id"]);s!=null&&c(t,["id"],s);const a=u(o,["args"]);a!=null&&c(t,["args"],a);const r=u(o,["name"]);if(r!=null&&c(t,["name"],r),u(o,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(o,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function pT(o){const t={},s=u(o,["mode"]);s!=null&&c(t,["mode"],s);const a=u(o,["allowedFunctionNames"]);if(a!=null&&c(t,["allowedFunctionNames"],a),u(o,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return t}function fT(o){const t={};if(u(o,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");const s=u(o,["description"]);s!=null&&c(t,["description"],s);const a=u(o,["name"]);a!=null&&c(t,["name"],a);const r=u(o,["parameters"]);r!=null&&c(t,["parameters"],r);const d=u(o,["parametersJsonSchema"]);d!=null&&c(t,["parametersJsonSchema"],d);const m=u(o,["response"]);m!=null&&c(t,["response"],m);const g=u(o,["responseJsonSchema"]);return g!=null&&c(t,["responseJsonSchema"],g),t}function mT(o,t){const s={},a=u(t,["name"]);return a!=null&&c(s,["_url","name"],yn(o,a)),s}function hT(o,t){const s={},a=u(t,["name"]);return a!=null&&c(s,["_url","name"],yn(o,a)),s}function gT(o){const t={};if(u(o,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const s=u(o,["enableWidget"]);return s!=null&&c(t,["enableWidget"],s),t}function yT(o){const t={};if(u(o,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(u(o,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const s=u(o,["timeRangeFilter"]);return s!=null&&c(t,["timeRangeFilter"],s),t}function vT(o,t){const s={},a=u(o,["pageSize"]);t!==void 0&&a!=null&&c(t,["_query","pageSize"],a);const r=u(o,["pageToken"]);return t!==void 0&&r!=null&&c(t,["_query","pageToken"],r),s}function ST(o,t){const s={},a=u(o,["pageSize"]);t!==void 0&&a!=null&&c(t,["_query","pageSize"],a);const r=u(o,["pageToken"]);return t!==void 0&&r!=null&&c(t,["_query","pageToken"],r),s}function CT(o){const t={},s=u(o,["config"]);return s!=null&&vT(s,t),t}function TT(o){const t={},s=u(o,["config"]);return s!=null&&ST(s,t),t}function AT(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["nextPageToken"]);a!=null&&c(t,["nextPageToken"],a);const r=u(o,["cachedContents"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["cachedContents"],d)}return t}function ET(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["nextPageToken"]);a!=null&&c(t,["nextPageToken"],a);const r=u(o,["cachedContents"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["cachedContents"],d)}return t}function bT(o){const t={},s=u(o,["mediaResolution"]);s!=null&&c(t,["mediaResolution"],s);const a=u(o,["codeExecutionResult"]);a!=null&&c(t,["codeExecutionResult"],a);const r=u(o,["executableCode"]);r!=null&&c(t,["executableCode"],r);const d=u(o,["fileData"]);d!=null&&c(t,["fileData"],cT(d));const m=u(o,["functionCall"]);m!=null&&c(t,["functionCall"],dT(m));const g=u(o,["functionResponse"]);g!=null&&c(t,["functionResponse"],g);const y=u(o,["inlineData"]);y!=null&&c(t,["inlineData"],tT(y));const h=u(o,["text"]);h!=null&&c(t,["text"],h);const v=u(o,["thought"]);v!=null&&c(t,["thought"],v);const C=u(o,["thoughtSignature"]);C!=null&&c(t,["thoughtSignature"],C);const T=u(o,["videoMetadata"]);return T!=null&&c(t,["videoMetadata"],T),t}function _T(o){const t={},s=u(o,["functionCallingConfig"]);s!=null&&c(t,["functionCallingConfig"],pT(s));const a=u(o,["retrievalConfig"]);return a!=null&&c(t,["retrievalConfig"],a),t}function wT(o){const t={},s=u(o,["functionDeclarations"]);if(s!=null){let v=s;Array.isArray(v)&&(v=v.map(C=>C)),c(t,["functionDeclarations"],v)}if(u(o,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const a=u(o,["googleSearchRetrieval"]);a!=null&&c(t,["googleSearchRetrieval"],a);const r=u(o,["computerUse"]);r!=null&&c(t,["computerUse"],r);const d=u(o,["fileSearch"]);d!=null&&c(t,["fileSearch"],d);const m=u(o,["codeExecution"]);if(m!=null&&c(t,["codeExecution"],m),u(o,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const g=u(o,["googleMaps"]);g!=null&&c(t,["googleMaps"],gT(g));const y=u(o,["googleSearch"]);y!=null&&c(t,["googleSearch"],yT(y));const h=u(o,["urlContext"]);return h!=null&&c(t,["urlContext"],h),t}function RT(o){const t={},s=u(o,["functionDeclarations"]);if(s!=null){let C=s;Array.isArray(C)&&(C=C.map(T=>fT(T))),c(t,["functionDeclarations"],C)}const a=u(o,["retrieval"]);a!=null&&c(t,["retrieval"],a);const r=u(o,["googleSearchRetrieval"]);r!=null&&c(t,["googleSearchRetrieval"],r);const d=u(o,["computerUse"]);if(d!=null&&c(t,["computerUse"],d),u(o,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const m=u(o,["codeExecution"]);m!=null&&c(t,["codeExecution"],m);const g=u(o,["enterpriseWebSearch"]);g!=null&&c(t,["enterpriseWebSearch"],g);const y=u(o,["googleMaps"]);y!=null&&c(t,["googleMaps"],y);const h=u(o,["googleSearch"]);h!=null&&c(t,["googleSearch"],h);const v=u(o,["urlContext"]);return v!=null&&c(t,["urlContext"],v),t}function IT(o,t){const s={},a=u(o,["ttl"]);t!==void 0&&a!=null&&c(t,["ttl"],a);const r=u(o,["expireTime"]);return t!==void 0&&r!=null&&c(t,["expireTime"],r),s}function xT(o,t){const s={},a=u(o,["ttl"]);t!==void 0&&a!=null&&c(t,["ttl"],a);const r=u(o,["expireTime"]);return t!==void 0&&r!=null&&c(t,["expireTime"],r),s}function NT(o,t){const s={},a=u(t,["name"]);a!=null&&c(s,["_url","name"],yn(o,a));const r=u(t,["config"]);return r!=null&&IT(r,s),s}function MT(o,t){const s={},a=u(t,["name"]);a!=null&&c(s,["_url","name"],yn(o,a));const r=u(t,["config"]);return r!=null&&xT(r,s),s}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class PT extends gn{constructor(t){super(),this.apiClient=t,this.list=async(s={})=>new po(hn.PAGED_ITEM_CACHED_CONTENTS,a=>this.listInternal(a),await this.listInternal(s),s)}async create(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=sT(this.apiClient,t);return g=Z("cachedContents",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json()),m.then(v=>v)}else{const h=iT(this.apiClient,t);return g=Z("cachedContents",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>v)}}async get(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=hT(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json()),m.then(v=>v)}else{const h=mT(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>v)}}async delete(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=lT(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=uT(v),T=new ch;return Object.assign(T,C),T})}else{const h=aT(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=rT(v),T=new ch;return Object.assign(T,C),T})}}async update(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=MT(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"PATCH",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json()),m.then(v=>v)}else{const h=NT(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"PATCH",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>v)}}async listInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=TT(t);return g=Z("cachedContents",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=ET(v),T=new dh;return Object.assign(T,C),T})}else{const h=CT(t);return g=Z("cachedContents",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=AT(v),T=new dh;return Object.assign(T,C),T})}}}function Da(o,t){var s={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&t.indexOf(a)<0&&(s[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(o);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(o,a[r])&&(s[a[r]]=o[a[r]]);return s}function vh(o){var t=typeof Symbol=="function"&&Symbol.iterator,s=t&&o[t],a=0;if(s)return s.call(o);if(o&&typeof o.length=="number")return{next:function(){return o&&a>=o.length&&(o=void 0),{value:o&&o[a++],done:!o}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function re(o){return this instanceof re?(this.v=o,this):new re(o)}function Vt(o,t,s){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a=s.apply(o,t||[]),r,d=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),g("next"),g("throw"),g("return",m),r[Symbol.asyncIterator]=function(){return this},r;function m(b){return function(k){return Promise.resolve(k).then(b,C)}}function g(b,k){a[b]&&(r[b]=function(N){return new Promise(function(I,U){d.push([b,N,I,U])>1||y(b,N)})},k&&(r[b]=k(r[b])))}function y(b,k){try{h(a[b](k))}catch(N){T(d[0][3],N)}}function h(b){b.value instanceof re?Promise.resolve(b.value.v).then(v,C):T(d[0][2],b)}function v(b){y("next",b)}function C(b){y("throw",b)}function T(b,k){b(k),d.shift(),d.length&&y(d[0][0],d[0][1])}}function qt(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=o[Symbol.asyncIterator],s;return t?t.call(o):(o=typeof vh=="function"?vh(o):o[Symbol.iterator](),s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s);function a(d){s[d]=o[d]&&function(m){return new Promise(function(g,y){m=o[d](m),r(g,y,m.done,m.value)})}}function r(d,m,g,y){Promise.resolve(y).then(function(h){d({value:h,done:g})},m)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function DT(o){var t;if(o.candidates==null||o.candidates.length===0)return!1;const s=(t=o.candidates[0])===null||t===void 0?void 0:t.content;return s===void 0?!1:ig(s)}function ig(o){if(o.parts===void 0||o.parts.length===0)return!1;for(const t of o.parts)if(t===void 0||Object.keys(t).length===0)return!1;return!0}function kT(o){if(o.length!==0){for(const t of o)if(t.role!=="user"&&t.role!=="model")throw new Error(`Role must be user or model, but got ${t.role}.`)}}function Sh(o){if(o===void 0||o.length===0)return[];const t=[],s=o.length;let a=0;for(;a<s;)if(o[a].role==="user")t.push(o[a]),a++;else{const r=[];let d=!0;for(;a<s&&o[a].role==="model";)r.push(o[a]),d&&!ig(o[a])&&(d=!1),a++;d?t.push(...r):t.pop()}return t}class UT{constructor(t,s){this.modelsModule=t,this.apiClient=s}create(t){return new LT(this.apiClient,this.modelsModule,t.model,t.config,structuredClone(t.history))}}class LT{constructor(t,s,a,r={},d=[]){this.apiClient=t,this.modelsModule=s,this.model=a,this.config=r,this.history=d,this.sendPromise=Promise.resolve(),kT(d)}async sendMessage(t){var s;await this.sendPromise;const a=st(t.message),r=this.modelsModule.generateContent({model:this.model,contents:this.getHistory(!0).concat(a),config:(s=t.config)!==null&&s!==void 0?s:this.config});return this.sendPromise=(async()=>{var d,m,g;const y=await r,h=(m=(d=y.candidates)===null||d===void 0?void 0:d[0])===null||m===void 0?void 0:m.content,v=y.automaticFunctionCallingHistory,C=this.getHistory(!0).length;let T=[];v!=null&&(T=(g=v.slice(C))!==null&&g!==void 0?g:[]);const b=h?[h]:[];this.recordHistory(a,b,T)})(),await this.sendPromise.catch(()=>{this.sendPromise=Promise.resolve()}),r}async sendMessageStream(t){var s;await this.sendPromise;const a=st(t.message),r=this.modelsModule.generateContentStream({model:this.model,contents:this.getHistory(!0).concat(a),config:(s=t.config)!==null&&s!==void 0?s:this.config});this.sendPromise=r.then(()=>{}).catch(()=>{});const d=await r;return this.processStreamResponse(d,a)}getHistory(t=!1){const s=t?Sh(this.history):this.history;return structuredClone(s)}processStreamResponse(t,s){return Vt(this,arguments,function*(){var r,d,m,g,y,h;const v=[];try{for(var C=!0,T=qt(t),b;b=yield re(T.next()),r=b.done,!r;C=!0){g=b.value,C=!1;const k=g;if(DT(k)){const N=(h=(y=k.candidates)===null||y===void 0?void 0:y[0])===null||h===void 0?void 0:h.content;N!==void 0&&v.push(N)}yield yield re(k)}}catch(k){d={error:k}}finally{try{!C&&!r&&(m=T.return)&&(yield re(m.call(T)))}finally{if(d)throw d.error}}this.recordHistory(s,v)})}recordHistory(t,s,a){let r=[];s.length>0&&s.every(d=>d.role!==void 0)?r=s:r.push({role:"model",parts:[]}),a&&a.length>0?this.history.push(...Sh(a)):this.history.push(t),this.history.push(...r)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class La extends Error{constructor(t){super(t.message),this.name="ApiError",this.status=t.status,Object.setPrototypeOf(this,La.prototype)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function GT(o){const t={},s=u(o,["file"]);return s!=null&&c(t,["file"],s),t}function OT(o){const t={},s=u(o,["sdkHttpResponse"]);return s!=null&&c(t,["sdkHttpResponse"],s),t}function BT(o){const t={},s=u(o,["name"]);return s!=null&&c(t,["_url","file"],$h(s)),t}function HT(o){const t={},s=u(o,["sdkHttpResponse"]);return s!=null&&c(t,["sdkHttpResponse"],s),t}function FT(o){const t={},s=u(o,["name"]);return s!=null&&c(t,["_url","file"],$h(s)),t}function VT(o,t){const s={},a=u(o,["pageSize"]);t!==void 0&&a!=null&&c(t,["_query","pageSize"],a);const r=u(o,["pageToken"]);return t!==void 0&&r!=null&&c(t,["_query","pageToken"],r),s}function qT(o){const t={},s=u(o,["config"]);return s!=null&&VT(s,t),t}function zT(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["nextPageToken"]);a!=null&&c(t,["nextPageToken"],a);const r=u(o,["files"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["files"],d)}return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class YT extends gn{constructor(t){super(),this.apiClient=t,this.list=async(s={})=>new po(hn.PAGED_ITEM_FILES,a=>this.listInternal(a),await this.listInternal(s),s)}async upload(t){if(this.apiClient.isVertexAI())throw new Error("Vertex AI does not support uploading files. You can share files through a GCS bucket.");return this.apiClient.uploadFile(t.file,t.config).then(s=>s)}async download(t){await this.apiClient.downloadFile(t)}async listInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=qT(t);return d=Z("files",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json().then(h=>{const v=h;return v.sdkHttpResponse={headers:y.headers},v})),r.then(y=>{const h=zT(y),v=new WS;return Object.assign(v,h),v})}}async createInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=GT(t);return d=Z("upload/v1beta/files",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>{const h=OT(y),v=new QS;return Object.assign(v,h),v})}}async get(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=FT(t);return d=Z("files/{file}",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>y)}}async delete(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=BT(t);return d=Z("files/{file}",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"DELETE",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json().then(h=>{const v=h;return v.sdkHttpResponse={headers:y.headers},v})),r.then(y=>{const h=HT(y),v=new $S;return Object.assign(v,h),v})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function xa(o){const t={},s=u(o,["data"]);if(s!=null&&c(t,["data"],s),u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function JT(o){const t={},s=u(o,["parts"]);if(s!=null){let r=s;Array.isArray(r)&&(r=r.map(d=>rA(d))),c(t,["parts"],r)}const a=u(o,["role"]);return a!=null&&c(t,["role"],a),t}function KT(o){const t={};if(u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const s=u(o,["fileUri"]);s!=null&&c(t,["fileUri"],s);const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function XT(o){const t={},s=u(o,["id"]);s!=null&&c(t,["id"],s);const a=u(o,["args"]);a!=null&&c(t,["args"],a);const r=u(o,["name"]);if(r!=null&&c(t,["name"],r),u(o,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(o,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function WT(o){const t={};if(u(o,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");const s=u(o,["description"]);s!=null&&c(t,["description"],s);const a=u(o,["name"]);a!=null&&c(t,["name"],a);const r=u(o,["parameters"]);r!=null&&c(t,["parameters"],r);const d=u(o,["parametersJsonSchema"]);d!=null&&c(t,["parametersJsonSchema"],d);const m=u(o,["response"]);m!=null&&c(t,["response"],m);const g=u(o,["responseJsonSchema"]);return g!=null&&c(t,["responseJsonSchema"],g),t}function QT(o){const t={},s=u(o,["modelSelectionConfig"]);s!=null&&c(t,["modelConfig"],s);const a=u(o,["responseJsonSchema"]);a!=null&&c(t,["responseJsonSchema"],a);const r=u(o,["audioTimestamp"]);r!=null&&c(t,["audioTimestamp"],r);const d=u(o,["candidateCount"]);d!=null&&c(t,["candidateCount"],d);const m=u(o,["enableAffectiveDialog"]);m!=null&&c(t,["enableAffectiveDialog"],m);const g=u(o,["frequencyPenalty"]);g!=null&&c(t,["frequencyPenalty"],g);const y=u(o,["logprobs"]);y!=null&&c(t,["logprobs"],y);const h=u(o,["maxOutputTokens"]);h!=null&&c(t,["maxOutputTokens"],h);const v=u(o,["mediaResolution"]);v!=null&&c(t,["mediaResolution"],v);const C=u(o,["presencePenalty"]);C!=null&&c(t,["presencePenalty"],C);const T=u(o,["responseLogprobs"]);T!=null&&c(t,["responseLogprobs"],T);const b=u(o,["responseMimeType"]);b!=null&&c(t,["responseMimeType"],b);const k=u(o,["responseModalities"]);k!=null&&c(t,["responseModalities"],k);const N=u(o,["responseSchema"]);N!=null&&c(t,["responseSchema"],N);const I=u(o,["routingConfig"]);I!=null&&c(t,["routingConfig"],I);const U=u(o,["seed"]);U!=null&&c(t,["seed"],U);const q=u(o,["speechConfig"]);q!=null&&c(t,["speechConfig"],q);const B=u(o,["stopSequences"]);B!=null&&c(t,["stopSequences"],B);const X=u(o,["temperature"]);X!=null&&c(t,["temperature"],X);const Q=u(o,["thinkingConfig"]);Q!=null&&c(t,["thinkingConfig"],Q);const ee=u(o,["topK"]);ee!=null&&c(t,["topK"],ee);const J=u(o,["topP"]);if(J!=null&&c(t,["topP"],J),u(o,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return t}function $T(o){const t={};if(u(o,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const s=u(o,["enableWidget"]);return s!=null&&c(t,["enableWidget"],s),t}function ZT(o){const t={};if(u(o,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(u(o,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const s=u(o,["timeRangeFilter"]);return s!=null&&c(t,["timeRangeFilter"],s),t}function jT(o,t){const s={},a=u(o,["generationConfig"]);t!==void 0&&a!=null&&c(t,["setup","generationConfig"],a);const r=u(o,["responseModalities"]);t!==void 0&&r!=null&&c(t,["setup","generationConfig","responseModalities"],r);const d=u(o,["temperature"]);t!==void 0&&d!=null&&c(t,["setup","generationConfig","temperature"],d);const m=u(o,["topP"]);t!==void 0&&m!=null&&c(t,["setup","generationConfig","topP"],m);const g=u(o,["topK"]);t!==void 0&&g!=null&&c(t,["setup","generationConfig","topK"],g);const y=u(o,["maxOutputTokens"]);t!==void 0&&y!=null&&c(t,["setup","generationConfig","maxOutputTokens"],y);const h=u(o,["mediaResolution"]);t!==void 0&&h!=null&&c(t,["setup","generationConfig","mediaResolution"],h);const v=u(o,["seed"]);t!==void 0&&v!=null&&c(t,["setup","generationConfig","seed"],v);const C=u(o,["speechConfig"]);t!==void 0&&C!=null&&c(t,["setup","generationConfig","speechConfig"],Bu(C));const T=u(o,["thinkingConfig"]);t!==void 0&&T!=null&&c(t,["setup","generationConfig","thinkingConfig"],T);const b=u(o,["enableAffectiveDialog"]);t!==void 0&&b!=null&&c(t,["setup","generationConfig","enableAffectiveDialog"],b);const k=u(o,["systemInstruction"]);t!==void 0&&k!=null&&c(t,["setup","systemInstruction"],JT(st(k)));const N=u(o,["tools"]);if(t!==void 0&&N!=null){let ee=oi(N);Array.isArray(ee)&&(ee=ee.map(J=>cA(ni(J)))),c(t,["setup","tools"],ee)}const I=u(o,["sessionResumption"]);t!==void 0&&I!=null&&c(t,["setup","sessionResumption"],uA(I));const U=u(o,["inputAudioTranscription"]);t!==void 0&&U!=null&&c(t,["setup","inputAudioTranscription"],U);const q=u(o,["outputAudioTranscription"]);t!==void 0&&q!=null&&c(t,["setup","outputAudioTranscription"],q);const B=u(o,["realtimeInputConfig"]);t!==void 0&&B!=null&&c(t,["setup","realtimeInputConfig"],B);const X=u(o,["contextWindowCompression"]);t!==void 0&&X!=null&&c(t,["setup","contextWindowCompression"],X);const Q=u(o,["proactivity"]);if(t!==void 0&&Q!=null&&c(t,["setup","proactivity"],Q),u(o,["explicitVadSignal"])!==void 0)throw new Error("explicitVadSignal parameter is not supported in Gemini API.");return s}function eA(o,t){const s={},a=u(o,["generationConfig"]);t!==void 0&&a!=null&&c(t,["setup","generationConfig"],QT(a));const r=u(o,["responseModalities"]);t!==void 0&&r!=null&&c(t,["setup","generationConfig","responseModalities"],r);const d=u(o,["temperature"]);t!==void 0&&d!=null&&c(t,["setup","generationConfig","temperature"],d);const m=u(o,["topP"]);t!==void 0&&m!=null&&c(t,["setup","generationConfig","topP"],m);const g=u(o,["topK"]);t!==void 0&&g!=null&&c(t,["setup","generationConfig","topK"],g);const y=u(o,["maxOutputTokens"]);t!==void 0&&y!=null&&c(t,["setup","generationConfig","maxOutputTokens"],y);const h=u(o,["mediaResolution"]);t!==void 0&&h!=null&&c(t,["setup","generationConfig","mediaResolution"],h);const v=u(o,["seed"]);t!==void 0&&v!=null&&c(t,["setup","generationConfig","seed"],v);const C=u(o,["speechConfig"]);t!==void 0&&C!=null&&c(t,["setup","generationConfig","speechConfig"],Bu(C));const T=u(o,["thinkingConfig"]);t!==void 0&&T!=null&&c(t,["setup","generationConfig","thinkingConfig"],T);const b=u(o,["enableAffectiveDialog"]);t!==void 0&&b!=null&&c(t,["setup","generationConfig","enableAffectiveDialog"],b);const k=u(o,["systemInstruction"]);t!==void 0&&k!=null&&c(t,["setup","systemInstruction"],st(k));const N=u(o,["tools"]);if(t!==void 0&&N!=null){let J=oi(N);Array.isArray(J)&&(J=J.map($=>dA(ni($)))),c(t,["setup","tools"],J)}const I=u(o,["sessionResumption"]);t!==void 0&&I!=null&&c(t,["setup","sessionResumption"],I);const U=u(o,["inputAudioTranscription"]);t!==void 0&&U!=null&&c(t,["setup","inputAudioTranscription"],U);const q=u(o,["outputAudioTranscription"]);t!==void 0&&q!=null&&c(t,["setup","outputAudioTranscription"],q);const B=u(o,["realtimeInputConfig"]);t!==void 0&&B!=null&&c(t,["setup","realtimeInputConfig"],B);const X=u(o,["contextWindowCompression"]);t!==void 0&&X!=null&&c(t,["setup","contextWindowCompression"],X);const Q=u(o,["proactivity"]);t!==void 0&&Q!=null&&c(t,["setup","proactivity"],Q);const ee=u(o,["explicitVadSignal"]);return t!==void 0&&ee!=null&&c(t,["setup","explicitVadSignal"],ee),s}function tA(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["setup","model"],_e(o,a));const r=u(t,["config"]);return r!=null&&c(s,["config"],jT(r,s)),s}function nA(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["setup","model"],_e(o,a));const r=u(t,["config"]);return r!=null&&c(s,["config"],eA(r,s)),s}function oA(o){const t={},s=u(o,["musicGenerationConfig"]);return s!=null&&c(t,["musicGenerationConfig"],s),t}function iA(o){const t={},s=u(o,["weightedPrompts"]);if(s!=null){let a=s;Array.isArray(a)&&(a=a.map(r=>r)),c(t,["weightedPrompts"],a)}return t}function sA(o){const t={},s=u(o,["media"]);if(s!=null){let h=Jh(s);Array.isArray(h)&&(h=h.map(v=>xa(v))),c(t,["mediaChunks"],h)}const a=u(o,["audio"]);a!=null&&c(t,["audio"],xa(Xh(a)));const r=u(o,["audioStreamEnd"]);r!=null&&c(t,["audioStreamEnd"],r);const d=u(o,["video"]);d!=null&&c(t,["video"],xa(Kh(d)));const m=u(o,["text"]);m!=null&&c(t,["text"],m);const g=u(o,["activityStart"]);g!=null&&c(t,["activityStart"],g);const y=u(o,["activityEnd"]);return y!=null&&c(t,["activityEnd"],y),t}function aA(o){const t={},s=u(o,["media"]);if(s!=null){let h=Jh(s);Array.isArray(h)&&(h=h.map(v=>v)),c(t,["mediaChunks"],h)}const a=u(o,["audio"]);a!=null&&c(t,["audio"],Xh(a));const r=u(o,["audioStreamEnd"]);r!=null&&c(t,["audioStreamEnd"],r);const d=u(o,["video"]);d!=null&&c(t,["video"],Kh(d));const m=u(o,["text"]);m!=null&&c(t,["text"],m);const g=u(o,["activityStart"]);g!=null&&c(t,["activityStart"],g);const y=u(o,["activityEnd"]);return y!=null&&c(t,["activityEnd"],y),t}function lA(o){const t={},s=u(o,["setupComplete"]);s!=null&&c(t,["setupComplete"],s);const a=u(o,["serverContent"]);a!=null&&c(t,["serverContent"],a);const r=u(o,["toolCall"]);r!=null&&c(t,["toolCall"],r);const d=u(o,["toolCallCancellation"]);d!=null&&c(t,["toolCallCancellation"],d);const m=u(o,["usageMetadata"]);m!=null&&c(t,["usageMetadata"],pA(m));const g=u(o,["goAway"]);g!=null&&c(t,["goAway"],g);const y=u(o,["sessionResumptionUpdate"]);y!=null&&c(t,["sessionResumptionUpdate"],y);const h=u(o,["voiceActivityDetectionSignal"]);return h!=null&&c(t,["voiceActivityDetectionSignal"],h),t}function rA(o){const t={},s=u(o,["mediaResolution"]);s!=null&&c(t,["mediaResolution"],s);const a=u(o,["codeExecutionResult"]);a!=null&&c(t,["codeExecutionResult"],a);const r=u(o,["executableCode"]);r!=null&&c(t,["executableCode"],r);const d=u(o,["fileData"]);d!=null&&c(t,["fileData"],KT(d));const m=u(o,["functionCall"]);m!=null&&c(t,["functionCall"],XT(m));const g=u(o,["functionResponse"]);g!=null&&c(t,["functionResponse"],g);const y=u(o,["inlineData"]);y!=null&&c(t,["inlineData"],xa(y));const h=u(o,["text"]);h!=null&&c(t,["text"],h);const v=u(o,["thought"]);v!=null&&c(t,["thought"],v);const C=u(o,["thoughtSignature"]);C!=null&&c(t,["thoughtSignature"],C);const T=u(o,["videoMetadata"]);return T!=null&&c(t,["videoMetadata"],T),t}function uA(o){const t={},s=u(o,["handle"]);if(s!=null&&c(t,["handle"],s),u(o,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return t}function cA(o){const t={},s=u(o,["functionDeclarations"]);if(s!=null){let v=s;Array.isArray(v)&&(v=v.map(C=>C)),c(t,["functionDeclarations"],v)}if(u(o,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const a=u(o,["googleSearchRetrieval"]);a!=null&&c(t,["googleSearchRetrieval"],a);const r=u(o,["computerUse"]);r!=null&&c(t,["computerUse"],r);const d=u(o,["fileSearch"]);d!=null&&c(t,["fileSearch"],d);const m=u(o,["codeExecution"]);if(m!=null&&c(t,["codeExecution"],m),u(o,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const g=u(o,["googleMaps"]);g!=null&&c(t,["googleMaps"],$T(g));const y=u(o,["googleSearch"]);y!=null&&c(t,["googleSearch"],ZT(y));const h=u(o,["urlContext"]);return h!=null&&c(t,["urlContext"],h),t}function dA(o){const t={},s=u(o,["functionDeclarations"]);if(s!=null){let C=s;Array.isArray(C)&&(C=C.map(T=>WT(T))),c(t,["functionDeclarations"],C)}const a=u(o,["retrieval"]);a!=null&&c(t,["retrieval"],a);const r=u(o,["googleSearchRetrieval"]);r!=null&&c(t,["googleSearchRetrieval"],r);const d=u(o,["computerUse"]);if(d!=null&&c(t,["computerUse"],d),u(o,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const m=u(o,["codeExecution"]);m!=null&&c(t,["codeExecution"],m);const g=u(o,["enterpriseWebSearch"]);g!=null&&c(t,["enterpriseWebSearch"],g);const y=u(o,["googleMaps"]);y!=null&&c(t,["googleMaps"],y);const h=u(o,["googleSearch"]);h!=null&&c(t,["googleSearch"],h);const v=u(o,["urlContext"]);return v!=null&&c(t,["urlContext"],v),t}function pA(o){const t={},s=u(o,["promptTokenCount"]);s!=null&&c(t,["promptTokenCount"],s);const a=u(o,["cachedContentTokenCount"]);a!=null&&c(t,["cachedContentTokenCount"],a);const r=u(o,["candidatesTokenCount"]);r!=null&&c(t,["responseTokenCount"],r);const d=u(o,["toolUsePromptTokenCount"]);d!=null&&c(t,["toolUsePromptTokenCount"],d);const m=u(o,["thoughtsTokenCount"]);m!=null&&c(t,["thoughtsTokenCount"],m);const g=u(o,["totalTokenCount"]);g!=null&&c(t,["totalTokenCount"],g);const y=u(o,["promptTokensDetails"]);if(y!=null){let b=y;Array.isArray(b)&&(b=b.map(k=>k)),c(t,["promptTokensDetails"],b)}const h=u(o,["cacheTokensDetails"]);if(h!=null){let b=h;Array.isArray(b)&&(b=b.map(k=>k)),c(t,["cacheTokensDetails"],b)}const v=u(o,["candidatesTokensDetails"]);if(v!=null){let b=v;Array.isArray(b)&&(b=b.map(k=>k)),c(t,["responseTokensDetails"],b)}const C=u(o,["toolUsePromptTokensDetails"]);if(C!=null){let b=C;Array.isArray(b)&&(b=b.map(k=>k)),c(t,["toolUsePromptTokensDetails"],b)}const T=u(o,["trafficType"]);return T!=null&&c(t,["trafficType"],T),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function fA(o){const t={},s=u(o,["data"]);if(s!=null&&c(t,["data"],s),u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function mA(o){const t={},s=u(o,["content"]);s!=null&&c(t,["content"],s);const a=u(o,["citationMetadata"]);a!=null&&c(t,["citationMetadata"],hA(a));const r=u(o,["tokenCount"]);r!=null&&c(t,["tokenCount"],r);const d=u(o,["finishReason"]);d!=null&&c(t,["finishReason"],d);const m=u(o,["avgLogprobs"]);m!=null&&c(t,["avgLogprobs"],m);const g=u(o,["groundingMetadata"]);g!=null&&c(t,["groundingMetadata"],g);const y=u(o,["index"]);y!=null&&c(t,["index"],y);const h=u(o,["logprobsResult"]);h!=null&&c(t,["logprobsResult"],h);const v=u(o,["safetyRatings"]);if(v!=null){let T=v;Array.isArray(T)&&(T=T.map(b=>b)),c(t,["safetyRatings"],T)}const C=u(o,["urlContextMetadata"]);return C!=null&&c(t,["urlContextMetadata"],C),t}function hA(o){const t={},s=u(o,["citationSources"]);if(s!=null){let a=s;Array.isArray(a)&&(a=a.map(r=>r)),c(t,["citations"],a)}return t}function gA(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],_e(o,a));const r=u(t,["contents"]);if(r!=null){let d=Gt(r);Array.isArray(d)&&(d=d.map(m=>m)),c(s,["contents"],d)}return s}function yA(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["tokensInfo"]);if(a!=null){let r=a;Array.isArray(r)&&(r=r.map(d=>d)),c(t,["tokensInfo"],r)}return t}function vA(o){const t={},s=u(o,["values"]);s!=null&&c(t,["values"],s);const a=u(o,["statistics"]);return a!=null&&c(t,["statistics"],SA(a)),t}function SA(o){const t={},s=u(o,["truncated"]);s!=null&&c(t,["truncated"],s);const a=u(o,["token_count"]);return a!=null&&c(t,["tokenCount"],a),t}function Ga(o){const t={},s=u(o,["parts"]);if(s!=null){let r=s;Array.isArray(r)&&(r=r.map(d=>IE(d))),c(t,["parts"],r)}const a=u(o,["role"]);return a!=null&&c(t,["role"],a),t}function CA(o){const t={},s=u(o,["controlType"]);s!=null&&c(t,["controlType"],s);const a=u(o,["enableControlImageComputation"]);return a!=null&&c(t,["computeControl"],a),t}function TA(o){const t={};if(u(o,["systemInstruction"])!==void 0)throw new Error("systemInstruction parameter is not supported in Gemini API.");if(u(o,["tools"])!==void 0)throw new Error("tools parameter is not supported in Gemini API.");if(u(o,["generationConfig"])!==void 0)throw new Error("generationConfig parameter is not supported in Gemini API.");return t}function AA(o,t){const s={},a=u(o,["systemInstruction"]);t!==void 0&&a!=null&&c(t,["systemInstruction"],st(a));const r=u(o,["tools"]);if(t!==void 0&&r!=null){let m=r;Array.isArray(m)&&(m=m.map(g=>rg(g))),c(t,["tools"],m)}const d=u(o,["generationConfig"]);return t!==void 0&&d!=null&&c(t,["generationConfig"],fE(d)),s}function EA(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],_e(o,a));const r=u(t,["contents"]);if(r!=null){let m=Gt(r);Array.isArray(m)&&(m=m.map(g=>Ga(g))),c(s,["contents"],m)}const d=u(t,["config"]);return d!=null&&TA(d),s}function bA(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],_e(o,a));const r=u(t,["contents"]);if(r!=null){let m=Gt(r);Array.isArray(m)&&(m=m.map(g=>g)),c(s,["contents"],m)}const d=u(t,["config"]);return d!=null&&AA(d,s),s}function _A(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["totalTokens"]);a!=null&&c(t,["totalTokens"],a);const r=u(o,["cachedContentTokenCount"]);return r!=null&&c(t,["cachedContentTokenCount"],r),t}function wA(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["totalTokens"]);return a!=null&&c(t,["totalTokens"],a),t}function RA(o,t){const s={},a=u(t,["model"]);return a!=null&&c(s,["_url","name"],_e(o,a)),s}function IA(o,t){const s={},a=u(t,["model"]);return a!=null&&c(s,["_url","name"],_e(o,a)),s}function xA(o){const t={},s=u(o,["sdkHttpResponse"]);return s!=null&&c(t,["sdkHttpResponse"],s),t}function NA(o){const t={},s=u(o,["sdkHttpResponse"]);return s!=null&&c(t,["sdkHttpResponse"],s),t}function MA(o,t){const s={},a=u(o,["outputGcsUri"]);t!==void 0&&a!=null&&c(t,["parameters","storageUri"],a);const r=u(o,["negativePrompt"]);t!==void 0&&r!=null&&c(t,["parameters","negativePrompt"],r);const d=u(o,["numberOfImages"]);t!==void 0&&d!=null&&c(t,["parameters","sampleCount"],d);const m=u(o,["aspectRatio"]);t!==void 0&&m!=null&&c(t,["parameters","aspectRatio"],m);const g=u(o,["guidanceScale"]);t!==void 0&&g!=null&&c(t,["parameters","guidanceScale"],g);const y=u(o,["seed"]);t!==void 0&&y!=null&&c(t,["parameters","seed"],y);const h=u(o,["safetyFilterLevel"]);t!==void 0&&h!=null&&c(t,["parameters","safetySetting"],h);const v=u(o,["personGeneration"]);t!==void 0&&v!=null&&c(t,["parameters","personGeneration"],v);const C=u(o,["includeSafetyAttributes"]);t!==void 0&&C!=null&&c(t,["parameters","includeSafetyAttributes"],C);const T=u(o,["includeRaiReason"]);t!==void 0&&T!=null&&c(t,["parameters","includeRaiReason"],T);const b=u(o,["language"]);t!==void 0&&b!=null&&c(t,["parameters","language"],b);const k=u(o,["outputMimeType"]);t!==void 0&&k!=null&&c(t,["parameters","outputOptions","mimeType"],k);const N=u(o,["outputCompressionQuality"]);t!==void 0&&N!=null&&c(t,["parameters","outputOptions","compressionQuality"],N);const I=u(o,["addWatermark"]);t!==void 0&&I!=null&&c(t,["parameters","addWatermark"],I);const U=u(o,["labels"]);t!==void 0&&U!=null&&c(t,["labels"],U);const q=u(o,["editMode"]);t!==void 0&&q!=null&&c(t,["parameters","editMode"],q);const B=u(o,["baseSteps"]);return t!==void 0&&B!=null&&c(t,["parameters","editConfig","baseSteps"],B),s}function PA(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],_e(o,a));const r=u(t,["prompt"]);r!=null&&c(s,["instances[0]","prompt"],r);const d=u(t,["referenceImages"]);if(d!=null){let g=d;Array.isArray(g)&&(g=g.map(y=>kE(y))),c(s,["instances[0]","referenceImages"],g)}const m=u(t,["config"]);return m!=null&&MA(m,s),s}function DA(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["predictions"]);if(a!=null){let r=a;Array.isArray(r)&&(r=r.map(d=>Oa(d))),c(t,["generatedImages"],r)}return t}function kA(o,t){const s={},a=u(o,["taskType"]);t!==void 0&&a!=null&&c(t,["requests[]","taskType"],a);const r=u(o,["title"]);t!==void 0&&r!=null&&c(t,["requests[]","title"],r);const d=u(o,["outputDimensionality"]);if(t!==void 0&&d!=null&&c(t,["requests[]","outputDimensionality"],d),u(o,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(u(o,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return s}function UA(o,t){const s={},a=u(o,["taskType"]);t!==void 0&&a!=null&&c(t,["instances[]","task_type"],a);const r=u(o,["title"]);t!==void 0&&r!=null&&c(t,["instances[]","title"],r);const d=u(o,["outputDimensionality"]);t!==void 0&&d!=null&&c(t,["parameters","outputDimensionality"],d);const m=u(o,["mimeType"]);t!==void 0&&m!=null&&c(t,["instances[]","mimeType"],m);const g=u(o,["autoTruncate"]);return t!==void 0&&g!=null&&c(t,["parameters","autoTruncate"],g),s}function LA(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],_e(o,a));const r=u(t,["contents"]);if(r!=null){let g=Lu(o,r);Array.isArray(g)&&(g=g.map(y=>y)),c(s,["requests[]","content"],g)}const d=u(t,["config"]);d!=null&&kA(d,s);const m=u(t,["model"]);return m!==void 0&&c(s,["requests[]","model"],_e(o,m)),s}function GA(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],_e(o,a));const r=u(t,["contents"]);if(r!=null){let m=Lu(o,r);Array.isArray(m)&&(m=m.map(g=>g)),c(s,["instances[]","content"],m)}const d=u(t,["config"]);return d!=null&&UA(d,s),s}function OA(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["embeddings"]);if(a!=null){let d=a;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["embeddings"],d)}const r=u(o,["metadata"]);return r!=null&&c(t,["metadata"],r),t}function BA(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["predictions[]","embeddings"]);if(a!=null){let d=a;Array.isArray(d)&&(d=d.map(m=>vA(m))),c(t,["embeddings"],d)}const r=u(o,["metadata"]);return r!=null&&c(t,["metadata"],r),t}function HA(o){const t={},s=u(o,["endpoint"]);s!=null&&c(t,["name"],s);const a=u(o,["deployedModelId"]);return a!=null&&c(t,["deployedModelId"],a),t}function FA(o){const t={};if(u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const s=u(o,["fileUri"]);s!=null&&c(t,["fileUri"],s);const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function VA(o){const t={},s=u(o,["id"]);s!=null&&c(t,["id"],s);const a=u(o,["args"]);a!=null&&c(t,["args"],a);const r=u(o,["name"]);if(r!=null&&c(t,["name"],r),u(o,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(o,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function qA(o){const t={},s=u(o,["mode"]);s!=null&&c(t,["mode"],s);const a=u(o,["allowedFunctionNames"]);if(a!=null&&c(t,["allowedFunctionNames"],a),u(o,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return t}function zA(o){const t={};if(u(o,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");const s=u(o,["description"]);s!=null&&c(t,["description"],s);const a=u(o,["name"]);a!=null&&c(t,["name"],a);const r=u(o,["parameters"]);r!=null&&c(t,["parameters"],r);const d=u(o,["parametersJsonSchema"]);d!=null&&c(t,["parametersJsonSchema"],d);const m=u(o,["response"]);m!=null&&c(t,["response"],m);const g=u(o,["responseJsonSchema"]);return g!=null&&c(t,["responseJsonSchema"],g),t}function YA(o,t,s){const a={},r=u(t,["systemInstruction"]);s!==void 0&&r!=null&&c(s,["systemInstruction"],Ga(st(r)));const d=u(t,["temperature"]);d!=null&&c(a,["temperature"],d);const m=u(t,["topP"]);m!=null&&c(a,["topP"],m);const g=u(t,["topK"]);g!=null&&c(a,["topK"],g);const y=u(t,["candidateCount"]);y!=null&&c(a,["candidateCount"],y);const h=u(t,["maxOutputTokens"]);h!=null&&c(a,["maxOutputTokens"],h);const v=u(t,["stopSequences"]);v!=null&&c(a,["stopSequences"],v);const C=u(t,["responseLogprobs"]);C!=null&&c(a,["responseLogprobs"],C);const T=u(t,["logprobs"]);T!=null&&c(a,["logprobs"],T);const b=u(t,["presencePenalty"]);b!=null&&c(a,["presencePenalty"],b);const k=u(t,["frequencyPenalty"]);k!=null&&c(a,["frequencyPenalty"],k);const N=u(t,["seed"]);N!=null&&c(a,["seed"],N);const I=u(t,["responseMimeType"]);I!=null&&c(a,["responseMimeType"],I);const U=u(t,["responseSchema"]);U!=null&&c(a,["responseSchema"],Gu(U));const q=u(t,["responseJsonSchema"]);if(q!=null&&c(a,["responseJsonSchema"],q),u(t,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(u(t,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const B=u(t,["safetySettings"]);if(s!==void 0&&B!=null){let j=B;Array.isArray(j)&&(j=j.map(ce=>UE(ce))),c(s,["safetySettings"],j)}const X=u(t,["tools"]);if(s!==void 0&&X!=null){let j=oi(X);Array.isArray(j)&&(j=j.map(ce=>VE(ni(ce)))),c(s,["tools"],j)}const Q=u(t,["toolConfig"]);if(s!==void 0&&Q!=null&&c(s,["toolConfig"],FE(Q)),u(t,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const ee=u(t,["cachedContent"]);s!==void 0&&ee!=null&&c(s,["cachedContent"],yn(o,ee));const J=u(t,["responseModalities"]);J!=null&&c(a,["responseModalities"],J);const $=u(t,["mediaResolution"]);$!=null&&c(a,["mediaResolution"],$);const z=u(t,["speechConfig"]);if(z!=null&&c(a,["speechConfig"],Ou(z)),u(t,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const le=u(t,["thinkingConfig"]);le!=null&&c(a,["thinkingConfig"],le);const me=u(t,["imageConfig"]);me!=null&&c(a,["imageConfig"],vE(me));const K=u(t,["enableEnhancedCivicAnswers"]);return K!=null&&c(a,["enableEnhancedCivicAnswers"],K),a}function JA(o,t,s){const a={},r=u(t,["systemInstruction"]);s!==void 0&&r!=null&&c(s,["systemInstruction"],st(r));const d=u(t,["temperature"]);d!=null&&c(a,["temperature"],d);const m=u(t,["topP"]);m!=null&&c(a,["topP"],m);const g=u(t,["topK"]);g!=null&&c(a,["topK"],g);const y=u(t,["candidateCount"]);y!=null&&c(a,["candidateCount"],y);const h=u(t,["maxOutputTokens"]);h!=null&&c(a,["maxOutputTokens"],h);const v=u(t,["stopSequences"]);v!=null&&c(a,["stopSequences"],v);const C=u(t,["responseLogprobs"]);C!=null&&c(a,["responseLogprobs"],C);const T=u(t,["logprobs"]);T!=null&&c(a,["logprobs"],T);const b=u(t,["presencePenalty"]);b!=null&&c(a,["presencePenalty"],b);const k=u(t,["frequencyPenalty"]);k!=null&&c(a,["frequencyPenalty"],k);const N=u(t,["seed"]);N!=null&&c(a,["seed"],N);const I=u(t,["responseMimeType"]);I!=null&&c(a,["responseMimeType"],I);const U=u(t,["responseSchema"]);U!=null&&c(a,["responseSchema"],Gu(U));const q=u(t,["responseJsonSchema"]);q!=null&&c(a,["responseJsonSchema"],q);const B=u(t,["routingConfig"]);B!=null&&c(a,["routingConfig"],B);const X=u(t,["modelSelectionConfig"]);X!=null&&c(a,["modelConfig"],X);const Q=u(t,["safetySettings"]);if(s!==void 0&&Q!=null){let G=Q;Array.isArray(G)&&(G=G.map(Y=>Y)),c(s,["safetySettings"],G)}const ee=u(t,["tools"]);if(s!==void 0&&ee!=null){let G=oi(ee);Array.isArray(G)&&(G=G.map(Y=>rg(ni(Y)))),c(s,["tools"],G)}const J=u(t,["toolConfig"]);s!==void 0&&J!=null&&c(s,["toolConfig"],J);const $=u(t,["labels"]);s!==void 0&&$!=null&&c(s,["labels"],$);const z=u(t,["cachedContent"]);s!==void 0&&z!=null&&c(s,["cachedContent"],yn(o,z));const le=u(t,["responseModalities"]);le!=null&&c(a,["responseModalities"],le);const me=u(t,["mediaResolution"]);me!=null&&c(a,["mediaResolution"],me);const K=u(t,["speechConfig"]);K!=null&&c(a,["speechConfig"],Ou(K));const j=u(t,["audioTimestamp"]);j!=null&&c(a,["audioTimestamp"],j);const ce=u(t,["thinkingConfig"]);ce!=null&&c(a,["thinkingConfig"],ce);const Pe=u(t,["imageConfig"]);if(Pe!=null&&c(a,["imageConfig"],SE(Pe)),u(t,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return a}function Ch(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],_e(o,a));const r=u(t,["contents"]);if(r!=null){let m=Gt(r);Array.isArray(m)&&(m=m.map(g=>Ga(g))),c(s,["contents"],m)}const d=u(t,["config"]);return d!=null&&c(s,["generationConfig"],YA(o,d,s)),s}function Th(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],_e(o,a));const r=u(t,["contents"]);if(r!=null){let m=Gt(r);Array.isArray(m)&&(m=m.map(g=>g)),c(s,["contents"],m)}const d=u(t,["config"]);return d!=null&&c(s,["generationConfig"],JA(o,d,s)),s}function Ah(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["candidates"]);if(a!=null){let y=a;Array.isArray(y)&&(y=y.map(h=>mA(h))),c(t,["candidates"],y)}const r=u(o,["modelVersion"]);r!=null&&c(t,["modelVersion"],r);const d=u(o,["promptFeedback"]);d!=null&&c(t,["promptFeedback"],d);const m=u(o,["responseId"]);m!=null&&c(t,["responseId"],m);const g=u(o,["usageMetadata"]);return g!=null&&c(t,["usageMetadata"],g),t}function Eh(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["candidates"]);if(a!=null){let h=a;Array.isArray(h)&&(h=h.map(v=>v)),c(t,["candidates"],h)}const r=u(o,["createTime"]);r!=null&&c(t,["createTime"],r);const d=u(o,["modelVersion"]);d!=null&&c(t,["modelVersion"],d);const m=u(o,["promptFeedback"]);m!=null&&c(t,["promptFeedback"],m);const g=u(o,["responseId"]);g!=null&&c(t,["responseId"],g);const y=u(o,["usageMetadata"]);return y!=null&&c(t,["usageMetadata"],y),t}function KA(o,t){const s={};if(u(o,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(u(o,["negativePrompt"])!==void 0)throw new Error("negativePrompt parameter is not supported in Gemini API.");const a=u(o,["numberOfImages"]);t!==void 0&&a!=null&&c(t,["parameters","sampleCount"],a);const r=u(o,["aspectRatio"]);t!==void 0&&r!=null&&c(t,["parameters","aspectRatio"],r);const d=u(o,["guidanceScale"]);if(t!==void 0&&d!=null&&c(t,["parameters","guidanceScale"],d),u(o,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const m=u(o,["safetyFilterLevel"]);t!==void 0&&m!=null&&c(t,["parameters","safetySetting"],m);const g=u(o,["personGeneration"]);t!==void 0&&g!=null&&c(t,["parameters","personGeneration"],g);const y=u(o,["includeSafetyAttributes"]);t!==void 0&&y!=null&&c(t,["parameters","includeSafetyAttributes"],y);const h=u(o,["includeRaiReason"]);t!==void 0&&h!=null&&c(t,["parameters","includeRaiReason"],h);const v=u(o,["language"]);t!==void 0&&v!=null&&c(t,["parameters","language"],v);const C=u(o,["outputMimeType"]);t!==void 0&&C!=null&&c(t,["parameters","outputOptions","mimeType"],C);const T=u(o,["outputCompressionQuality"]);if(t!==void 0&&T!=null&&c(t,["parameters","outputOptions","compressionQuality"],T),u(o,["addWatermark"])!==void 0)throw new Error("addWatermark parameter is not supported in Gemini API.");if(u(o,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const b=u(o,["imageSize"]);if(t!==void 0&&b!=null&&c(t,["parameters","sampleImageSize"],b),u(o,["enhancePrompt"])!==void 0)throw new Error("enhancePrompt parameter is not supported in Gemini API.");return s}function XA(o,t){const s={},a=u(o,["outputGcsUri"]);t!==void 0&&a!=null&&c(t,["parameters","storageUri"],a);const r=u(o,["negativePrompt"]);t!==void 0&&r!=null&&c(t,["parameters","negativePrompt"],r);const d=u(o,["numberOfImages"]);t!==void 0&&d!=null&&c(t,["parameters","sampleCount"],d);const m=u(o,["aspectRatio"]);t!==void 0&&m!=null&&c(t,["parameters","aspectRatio"],m);const g=u(o,["guidanceScale"]);t!==void 0&&g!=null&&c(t,["parameters","guidanceScale"],g);const y=u(o,["seed"]);t!==void 0&&y!=null&&c(t,["parameters","seed"],y);const h=u(o,["safetyFilterLevel"]);t!==void 0&&h!=null&&c(t,["parameters","safetySetting"],h);const v=u(o,["personGeneration"]);t!==void 0&&v!=null&&c(t,["parameters","personGeneration"],v);const C=u(o,["includeSafetyAttributes"]);t!==void 0&&C!=null&&c(t,["parameters","includeSafetyAttributes"],C);const T=u(o,["includeRaiReason"]);t!==void 0&&T!=null&&c(t,["parameters","includeRaiReason"],T);const b=u(o,["language"]);t!==void 0&&b!=null&&c(t,["parameters","language"],b);const k=u(o,["outputMimeType"]);t!==void 0&&k!=null&&c(t,["parameters","outputOptions","mimeType"],k);const N=u(o,["outputCompressionQuality"]);t!==void 0&&N!=null&&c(t,["parameters","outputOptions","compressionQuality"],N);const I=u(o,["addWatermark"]);t!==void 0&&I!=null&&c(t,["parameters","addWatermark"],I);const U=u(o,["labels"]);t!==void 0&&U!=null&&c(t,["labels"],U);const q=u(o,["imageSize"]);t!==void 0&&q!=null&&c(t,["parameters","sampleImageSize"],q);const B=u(o,["enhancePrompt"]);return t!==void 0&&B!=null&&c(t,["parameters","enhancePrompt"],B),s}function WA(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],_e(o,a));const r=u(t,["prompt"]);r!=null&&c(s,["instances[0]","prompt"],r);const d=u(t,["config"]);return d!=null&&KA(d,s),s}function QA(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],_e(o,a));const r=u(t,["prompt"]);r!=null&&c(s,["instances[0]","prompt"],r);const d=u(t,["config"]);return d!=null&&XA(d,s),s}function $A(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["predictions"]);if(a!=null){let d=a;Array.isArray(d)&&(d=d.map(m=>uE(m))),c(t,["generatedImages"],d)}const r=u(o,["positivePromptSafetyAttributes"]);return r!=null&&c(t,["positivePromptSafetyAttributes"],ag(r)),t}function ZA(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["predictions"]);if(a!=null){let d=a;Array.isArray(d)&&(d=d.map(m=>Oa(m))),c(t,["generatedImages"],d)}const r=u(o,["positivePromptSafetyAttributes"]);return r!=null&&c(t,["positivePromptSafetyAttributes"],lg(r)),t}function jA(o,t){const s={},a=u(o,["numberOfVideos"]);if(t!==void 0&&a!=null&&c(t,["parameters","sampleCount"],a),u(o,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(u(o,["fps"])!==void 0)throw new Error("fps parameter is not supported in Gemini API.");const r=u(o,["durationSeconds"]);if(t!==void 0&&r!=null&&c(t,["parameters","durationSeconds"],r),u(o,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const d=u(o,["aspectRatio"]);t!==void 0&&d!=null&&c(t,["parameters","aspectRatio"],d);const m=u(o,["resolution"]);t!==void 0&&m!=null&&c(t,["parameters","resolution"],m);const g=u(o,["personGeneration"]);if(t!==void 0&&g!=null&&c(t,["parameters","personGeneration"],g),u(o,["pubsubTopic"])!==void 0)throw new Error("pubsubTopic parameter is not supported in Gemini API.");const y=u(o,["negativePrompt"]);t!==void 0&&y!=null&&c(t,["parameters","negativePrompt"],y);const h=u(o,["enhancePrompt"]);if(t!==void 0&&h!=null&&c(t,["parameters","enhancePrompt"],h),u(o,["generateAudio"])!==void 0)throw new Error("generateAudio parameter is not supported in Gemini API.");const v=u(o,["lastFrame"]);t!==void 0&&v!=null&&c(t,["instances[0]","lastFrame"],Ba(v));const C=u(o,["referenceImages"]);if(t!==void 0&&C!=null){let T=C;Array.isArray(T)&&(T=T.map(b=>tb(b))),c(t,["instances[0]","referenceImages"],T)}if(u(o,["mask"])!==void 0)throw new Error("mask parameter is not supported in Gemini API.");if(u(o,["compressionQuality"])!==void 0)throw new Error("compressionQuality parameter is not supported in Gemini API.");return s}function eE(o,t){const s={},a=u(o,["numberOfVideos"]);t!==void 0&&a!=null&&c(t,["parameters","sampleCount"],a);const r=u(o,["outputGcsUri"]);t!==void 0&&r!=null&&c(t,["parameters","storageUri"],r);const d=u(o,["fps"]);t!==void 0&&d!=null&&c(t,["parameters","fps"],d);const m=u(o,["durationSeconds"]);t!==void 0&&m!=null&&c(t,["parameters","durationSeconds"],m);const g=u(o,["seed"]);t!==void 0&&g!=null&&c(t,["parameters","seed"],g);const y=u(o,["aspectRatio"]);t!==void 0&&y!=null&&c(t,["parameters","aspectRatio"],y);const h=u(o,["resolution"]);t!==void 0&&h!=null&&c(t,["parameters","resolution"],h);const v=u(o,["personGeneration"]);t!==void 0&&v!=null&&c(t,["parameters","personGeneration"],v);const C=u(o,["pubsubTopic"]);t!==void 0&&C!=null&&c(t,["parameters","pubsubTopic"],C);const T=u(o,["negativePrompt"]);t!==void 0&&T!=null&&c(t,["parameters","negativePrompt"],T);const b=u(o,["enhancePrompt"]);t!==void 0&&b!=null&&c(t,["parameters","enhancePrompt"],b);const k=u(o,["generateAudio"]);t!==void 0&&k!=null&&c(t,["parameters","generateAudio"],k);const N=u(o,["lastFrame"]);t!==void 0&&N!=null&&c(t,["instances[0]","lastFrame"],zt(N));const I=u(o,["referenceImages"]);if(t!==void 0&&I!=null){let B=I;Array.isArray(B)&&(B=B.map(X=>nb(X))),c(t,["instances[0]","referenceImages"],B)}const U=u(o,["mask"]);t!==void 0&&U!=null&&c(t,["instances[0]","mask"],eb(U));const q=u(o,["compressionQuality"]);return t!==void 0&&q!=null&&c(t,["parameters","compressionQuality"],q),s}function tE(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["metadata"]);a!=null&&c(t,["metadata"],a);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["response","generateVideoResponse"]);return m!=null&&c(t,["response"],sE(m)),t}function nE(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["metadata"]);a!=null&&c(t,["metadata"],a);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["response"]);return m!=null&&c(t,["response"],aE(m)),t}function oE(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],_e(o,a));const r=u(t,["prompt"]);r!=null&&c(s,["instances[0]","prompt"],r);const d=u(t,["image"]);d!=null&&c(s,["instances[0]","image"],Ba(d));const m=u(t,["video"]);m!=null&&c(s,["instances[0]","video"],ug(m));const g=u(t,["source"]);g!=null&&lE(g,s);const y=u(t,["config"]);return y!=null&&jA(y,s),s}function iE(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],_e(o,a));const r=u(t,["prompt"]);r!=null&&c(s,["instances[0]","prompt"],r);const d=u(t,["image"]);d!=null&&c(s,["instances[0]","image"],zt(d));const m=u(t,["video"]);m!=null&&c(s,["instances[0]","video"],cg(m));const g=u(t,["source"]);g!=null&&rE(g,s);const y=u(t,["config"]);return y!=null&&eE(y,s),s}function sE(o){const t={},s=u(o,["generatedSamples"]);if(s!=null){let d=s;Array.isArray(d)&&(d=d.map(m=>dE(m))),c(t,["generatedVideos"],d)}const a=u(o,["raiMediaFilteredCount"]);a!=null&&c(t,["raiMediaFilteredCount"],a);const r=u(o,["raiMediaFilteredReasons"]);return r!=null&&c(t,["raiMediaFilteredReasons"],r),t}function aE(o){const t={},s=u(o,["videos"]);if(s!=null){let d=s;Array.isArray(d)&&(d=d.map(m=>pE(m))),c(t,["generatedVideos"],d)}const a=u(o,["raiMediaFilteredCount"]);a!=null&&c(t,["raiMediaFilteredCount"],a);const r=u(o,["raiMediaFilteredReasons"]);return r!=null&&c(t,["raiMediaFilteredReasons"],r),t}function lE(o,t){const s={},a=u(o,["prompt"]);t!==void 0&&a!=null&&c(t,["instances[0]","prompt"],a);const r=u(o,["image"]);t!==void 0&&r!=null&&c(t,["instances[0]","image"],Ba(r));const d=u(o,["video"]);return t!==void 0&&d!=null&&c(t,["instances[0]","video"],ug(d)),s}function rE(o,t){const s={},a=u(o,["prompt"]);t!==void 0&&a!=null&&c(t,["instances[0]","prompt"],a);const r=u(o,["image"]);t!==void 0&&r!=null&&c(t,["instances[0]","image"],zt(r));const d=u(o,["video"]);return t!==void 0&&d!=null&&c(t,["instances[0]","video"],cg(d)),s}function uE(o){const t={},s=u(o,["_self"]);s!=null&&c(t,["image"],CE(s));const a=u(o,["raiFilteredReason"]);a!=null&&c(t,["raiFilteredReason"],a);const r=u(o,["_self"]);return r!=null&&c(t,["safetyAttributes"],ag(r)),t}function Oa(o){const t={},s=u(o,["_self"]);s!=null&&c(t,["image"],sg(s));const a=u(o,["raiFilteredReason"]);a!=null&&c(t,["raiFilteredReason"],a);const r=u(o,["_self"]);r!=null&&c(t,["safetyAttributes"],lg(r));const d=u(o,["prompt"]);return d!=null&&c(t,["enhancedPrompt"],d),t}function cE(o){const t={},s=u(o,["_self"]);s!=null&&c(t,["mask"],sg(s));const a=u(o,["labels"]);if(a!=null){let r=a;Array.isArray(r)&&(r=r.map(d=>d)),c(t,["labels"],r)}return t}function dE(o){const t={},s=u(o,["video"]);return s!=null&&c(t,["video"],ZE(s)),t}function pE(o){const t={},s=u(o,["_self"]);return s!=null&&c(t,["video"],jE(s)),t}function fE(o){const t={},s=u(o,["modelSelectionConfig"]);s!=null&&c(t,["modelConfig"],s);const a=u(o,["responseJsonSchema"]);a!=null&&c(t,["responseJsonSchema"],a);const r=u(o,["audioTimestamp"]);r!=null&&c(t,["audioTimestamp"],r);const d=u(o,["candidateCount"]);d!=null&&c(t,["candidateCount"],d);const m=u(o,["enableAffectiveDialog"]);m!=null&&c(t,["enableAffectiveDialog"],m);const g=u(o,["frequencyPenalty"]);g!=null&&c(t,["frequencyPenalty"],g);const y=u(o,["logprobs"]);y!=null&&c(t,["logprobs"],y);const h=u(o,["maxOutputTokens"]);h!=null&&c(t,["maxOutputTokens"],h);const v=u(o,["mediaResolution"]);v!=null&&c(t,["mediaResolution"],v);const C=u(o,["presencePenalty"]);C!=null&&c(t,["presencePenalty"],C);const T=u(o,["responseLogprobs"]);T!=null&&c(t,["responseLogprobs"],T);const b=u(o,["responseMimeType"]);b!=null&&c(t,["responseMimeType"],b);const k=u(o,["responseModalities"]);k!=null&&c(t,["responseModalities"],k);const N=u(o,["responseSchema"]);N!=null&&c(t,["responseSchema"],N);const I=u(o,["routingConfig"]);I!=null&&c(t,["routingConfig"],I);const U=u(o,["seed"]);U!=null&&c(t,["seed"],U);const q=u(o,["speechConfig"]);q!=null&&c(t,["speechConfig"],q);const B=u(o,["stopSequences"]);B!=null&&c(t,["stopSequences"],B);const X=u(o,["temperature"]);X!=null&&c(t,["temperature"],X);const Q=u(o,["thinkingConfig"]);Q!=null&&c(t,["thinkingConfig"],Q);const ee=u(o,["topK"]);ee!=null&&c(t,["topK"],ee);const J=u(o,["topP"]);if(J!=null&&c(t,["topP"],J),u(o,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return t}function mE(o,t){const s={},a=u(t,["model"]);return a!=null&&c(s,["_url","name"],_e(o,a)),s}function hE(o,t){const s={},a=u(t,["model"]);return a!=null&&c(s,["_url","name"],_e(o,a)),s}function gE(o){const t={};if(u(o,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const s=u(o,["enableWidget"]);return s!=null&&c(t,["enableWidget"],s),t}function yE(o){const t={};if(u(o,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(u(o,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const s=u(o,["timeRangeFilter"]);return s!=null&&c(t,["timeRangeFilter"],s),t}function vE(o){const t={},s=u(o,["aspectRatio"]);s!=null&&c(t,["aspectRatio"],s);const a=u(o,["imageSize"]);if(a!=null&&c(t,["imageSize"],a),u(o,["outputMimeType"])!==void 0)throw new Error("outputMimeType parameter is not supported in Gemini API.");if(u(o,["outputCompressionQuality"])!==void 0)throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");return t}function SE(o){const t={},s=u(o,["aspectRatio"]);s!=null&&c(t,["aspectRatio"],s);const a=u(o,["imageSize"]);a!=null&&c(t,["imageSize"],a);const r=u(o,["outputMimeType"]);r!=null&&c(t,["imageOutputOptions","mimeType"],r);const d=u(o,["outputCompressionQuality"]);return d!=null&&c(t,["imageOutputOptions","compressionQuality"],d),t}function CE(o){const t={},s=u(o,["bytesBase64Encoded"]);s!=null&&c(t,["imageBytes"],zn(s));const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function sg(o){const t={},s=u(o,["gcsUri"]);s!=null&&c(t,["gcsUri"],s);const a=u(o,["bytesBase64Encoded"]);a!=null&&c(t,["imageBytes"],zn(a));const r=u(o,["mimeType"]);return r!=null&&c(t,["mimeType"],r),t}function Ba(o){const t={};if(u(o,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");const s=u(o,["imageBytes"]);s!=null&&c(t,["bytesBase64Encoded"],zn(s));const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function zt(o){const t={},s=u(o,["gcsUri"]);s!=null&&c(t,["gcsUri"],s);const a=u(o,["imageBytes"]);a!=null&&c(t,["bytesBase64Encoded"],zn(a));const r=u(o,["mimeType"]);return r!=null&&c(t,["mimeType"],r),t}function TE(o,t,s){const a={},r=u(t,["pageSize"]);s!==void 0&&r!=null&&c(s,["_query","pageSize"],r);const d=u(t,["pageToken"]);s!==void 0&&d!=null&&c(s,["_query","pageToken"],d);const m=u(t,["filter"]);s!==void 0&&m!=null&&c(s,["_query","filter"],m);const g=u(t,["queryBase"]);return s!==void 0&&g!=null&&c(s,["_url","models_url"],Zh(o,g)),a}function AE(o,t,s){const a={},r=u(t,["pageSize"]);s!==void 0&&r!=null&&c(s,["_query","pageSize"],r);const d=u(t,["pageToken"]);s!==void 0&&d!=null&&c(s,["_query","pageToken"],d);const m=u(t,["filter"]);s!==void 0&&m!=null&&c(s,["_query","filter"],m);const g=u(t,["queryBase"]);return s!==void 0&&g!=null&&c(s,["_url","models_url"],Zh(o,g)),a}function EE(o,t){const s={},a=u(t,["config"]);return a!=null&&TE(o,a,s),s}function bE(o,t){const s={},a=u(t,["config"]);return a!=null&&AE(o,a,s),s}function _E(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["nextPageToken"]);a!=null&&c(t,["nextPageToken"],a);const r=u(o,["_self"]);if(r!=null){let d=jh(r);Array.isArray(d)&&(d=d.map(m=>Eu(m))),c(t,["models"],d)}return t}function wE(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["nextPageToken"]);a!=null&&c(t,["nextPageToken"],a);const r=u(o,["_self"]);if(r!=null){let d=jh(r);Array.isArray(d)&&(d=d.map(m=>bu(m))),c(t,["models"],d)}return t}function RE(o){const t={},s=u(o,["maskMode"]);s!=null&&c(t,["maskMode"],s);const a=u(o,["segmentationClasses"]);a!=null&&c(t,["maskClasses"],a);const r=u(o,["maskDilation"]);return r!=null&&c(t,["dilation"],r),t}function Eu(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["displayName"]);a!=null&&c(t,["displayName"],a);const r=u(o,["description"]);r!=null&&c(t,["description"],r);const d=u(o,["version"]);d!=null&&c(t,["version"],d);const m=u(o,["_self"]);m!=null&&c(t,["tunedModelInfo"],qE(m));const g=u(o,["inputTokenLimit"]);g!=null&&c(t,["inputTokenLimit"],g);const y=u(o,["outputTokenLimit"]);y!=null&&c(t,["outputTokenLimit"],y);const h=u(o,["supportedGenerationMethods"]);h!=null&&c(t,["supportedActions"],h);const v=u(o,["temperature"]);v!=null&&c(t,["temperature"],v);const C=u(o,["maxTemperature"]);C!=null&&c(t,["maxTemperature"],C);const T=u(o,["topP"]);T!=null&&c(t,["topP"],T);const b=u(o,["topK"]);b!=null&&c(t,["topK"],b);const k=u(o,["thinking"]);return k!=null&&c(t,["thinking"],k),t}function bu(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["displayName"]);a!=null&&c(t,["displayName"],a);const r=u(o,["description"]);r!=null&&c(t,["description"],r);const d=u(o,["versionId"]);d!=null&&c(t,["version"],d);const m=u(o,["deployedModels"]);if(m!=null){let C=m;Array.isArray(C)&&(C=C.map(T=>HA(T))),c(t,["endpoints"],C)}const g=u(o,["labels"]);g!=null&&c(t,["labels"],g);const y=u(o,["_self"]);y!=null&&c(t,["tunedModelInfo"],zE(y));const h=u(o,["defaultCheckpointId"]);h!=null&&c(t,["defaultCheckpointId"],h);const v=u(o,["checkpoints"]);if(v!=null){let C=v;Array.isArray(C)&&(C=C.map(T=>T)),c(t,["checkpoints"],C)}return t}function IE(o){const t={},s=u(o,["mediaResolution"]);s!=null&&c(t,["mediaResolution"],s);const a=u(o,["codeExecutionResult"]);a!=null&&c(t,["codeExecutionResult"],a);const r=u(o,["executableCode"]);r!=null&&c(t,["executableCode"],r);const d=u(o,["fileData"]);d!=null&&c(t,["fileData"],FA(d));const m=u(o,["functionCall"]);m!=null&&c(t,["functionCall"],VA(m));const g=u(o,["functionResponse"]);g!=null&&c(t,["functionResponse"],g);const y=u(o,["inlineData"]);y!=null&&c(t,["inlineData"],fA(y));const h=u(o,["text"]);h!=null&&c(t,["text"],h);const v=u(o,["thought"]);v!=null&&c(t,["thought"],v);const C=u(o,["thoughtSignature"]);C!=null&&c(t,["thoughtSignature"],C);const T=u(o,["videoMetadata"]);return T!=null&&c(t,["videoMetadata"],T),t}function xE(o){const t={},s=u(o,["productImage"]);return s!=null&&c(t,["image"],zt(s)),t}function NE(o,t){const s={},a=u(o,["numberOfImages"]);t!==void 0&&a!=null&&c(t,["parameters","sampleCount"],a);const r=u(o,["baseSteps"]);t!==void 0&&r!=null&&c(t,["parameters","baseSteps"],r);const d=u(o,["outputGcsUri"]);t!==void 0&&d!=null&&c(t,["parameters","storageUri"],d);const m=u(o,["seed"]);t!==void 0&&m!=null&&c(t,["parameters","seed"],m);const g=u(o,["safetyFilterLevel"]);t!==void 0&&g!=null&&c(t,["parameters","safetySetting"],g);const y=u(o,["personGeneration"]);t!==void 0&&y!=null&&c(t,["parameters","personGeneration"],y);const h=u(o,["addWatermark"]);t!==void 0&&h!=null&&c(t,["parameters","addWatermark"],h);const v=u(o,["outputMimeType"]);t!==void 0&&v!=null&&c(t,["parameters","outputOptions","mimeType"],v);const C=u(o,["outputCompressionQuality"]);t!==void 0&&C!=null&&c(t,["parameters","outputOptions","compressionQuality"],C);const T=u(o,["enhancePrompt"]);t!==void 0&&T!=null&&c(t,["parameters","enhancePrompt"],T);const b=u(o,["labels"]);return t!==void 0&&b!=null&&c(t,["labels"],b),s}function ME(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],_e(o,a));const r=u(t,["source"]);r!=null&&DE(r,s);const d=u(t,["config"]);return d!=null&&NE(d,s),s}function PE(o){const t={},s=u(o,["predictions"]);if(s!=null){let a=s;Array.isArray(a)&&(a=a.map(r=>Oa(r))),c(t,["generatedImages"],a)}return t}function DE(o,t){const s={},a=u(o,["prompt"]);t!==void 0&&a!=null&&c(t,["instances[0]","prompt"],a);const r=u(o,["personImage"]);t!==void 0&&r!=null&&c(t,["instances[0]","personImage","image"],zt(r));const d=u(o,["productImages"]);if(t!==void 0&&d!=null){let m=d;Array.isArray(m)&&(m=m.map(g=>xE(g))),c(t,["instances[0]","productImages"],m)}return s}function kE(o){const t={},s=u(o,["referenceImage"]);s!=null&&c(t,["referenceImage"],zt(s));const a=u(o,["referenceId"]);a!=null&&c(t,["referenceId"],a);const r=u(o,["referenceType"]);r!=null&&c(t,["referenceType"],r);const d=u(o,["maskImageConfig"]);d!=null&&c(t,["maskImageConfig"],RE(d));const m=u(o,["controlImageConfig"]);m!=null&&c(t,["controlImageConfig"],CA(m));const g=u(o,["styleImageConfig"]);g!=null&&c(t,["styleImageConfig"],g);const y=u(o,["subjectImageConfig"]);return y!=null&&c(t,["subjectImageConfig"],y),t}function ag(o){const t={},s=u(o,["safetyAttributes","categories"]);s!=null&&c(t,["categories"],s);const a=u(o,["safetyAttributes","scores"]);a!=null&&c(t,["scores"],a);const r=u(o,["contentType"]);return r!=null&&c(t,["contentType"],r),t}function lg(o){const t={},s=u(o,["safetyAttributes","categories"]);s!=null&&c(t,["categories"],s);const a=u(o,["safetyAttributes","scores"]);a!=null&&c(t,["scores"],a);const r=u(o,["contentType"]);return r!=null&&c(t,["contentType"],r),t}function UE(o){const t={},s=u(o,["category"]);if(s!=null&&c(t,["category"],s),u(o,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const a=u(o,["threshold"]);return a!=null&&c(t,["threshold"],a),t}function LE(o){const t={},s=u(o,["image"]);return s!=null&&c(t,["image"],zt(s)),t}function GE(o,t){const s={},a=u(o,["mode"]);t!==void 0&&a!=null&&c(t,["parameters","mode"],a);const r=u(o,["maxPredictions"]);t!==void 0&&r!=null&&c(t,["parameters","maxPredictions"],r);const d=u(o,["confidenceThreshold"]);t!==void 0&&d!=null&&c(t,["parameters","confidenceThreshold"],d);const m=u(o,["maskDilation"]);t!==void 0&&m!=null&&c(t,["parameters","maskDilation"],m);const g=u(o,["binaryColorThreshold"]);t!==void 0&&g!=null&&c(t,["parameters","binaryColorThreshold"],g);const y=u(o,["labels"]);return t!==void 0&&y!=null&&c(t,["labels"],y),s}function OE(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],_e(o,a));const r=u(t,["source"]);r!=null&&HE(r,s);const d=u(t,["config"]);return d!=null&&GE(d,s),s}function BE(o){const t={},s=u(o,["predictions"]);if(s!=null){let a=s;Array.isArray(a)&&(a=a.map(r=>cE(r))),c(t,["generatedMasks"],a)}return t}function HE(o,t){const s={},a=u(o,["prompt"]);t!==void 0&&a!=null&&c(t,["instances[0]","prompt"],a);const r=u(o,["image"]);t!==void 0&&r!=null&&c(t,["instances[0]","image"],zt(r));const d=u(o,["scribbleImage"]);return t!==void 0&&d!=null&&c(t,["instances[0]","scribble"],LE(d)),s}function FE(o){const t={},s=u(o,["functionCallingConfig"]);s!=null&&c(t,["functionCallingConfig"],qA(s));const a=u(o,["retrievalConfig"]);return a!=null&&c(t,["retrievalConfig"],a),t}function VE(o){const t={},s=u(o,["functionDeclarations"]);if(s!=null){let v=s;Array.isArray(v)&&(v=v.map(C=>C)),c(t,["functionDeclarations"],v)}if(u(o,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const a=u(o,["googleSearchRetrieval"]);a!=null&&c(t,["googleSearchRetrieval"],a);const r=u(o,["computerUse"]);r!=null&&c(t,["computerUse"],r);const d=u(o,["fileSearch"]);d!=null&&c(t,["fileSearch"],d);const m=u(o,["codeExecution"]);if(m!=null&&c(t,["codeExecution"],m),u(o,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const g=u(o,["googleMaps"]);g!=null&&c(t,["googleMaps"],gE(g));const y=u(o,["googleSearch"]);y!=null&&c(t,["googleSearch"],yE(y));const h=u(o,["urlContext"]);return h!=null&&c(t,["urlContext"],h),t}function rg(o){const t={},s=u(o,["functionDeclarations"]);if(s!=null){let C=s;Array.isArray(C)&&(C=C.map(T=>zA(T))),c(t,["functionDeclarations"],C)}const a=u(o,["retrieval"]);a!=null&&c(t,["retrieval"],a);const r=u(o,["googleSearchRetrieval"]);r!=null&&c(t,["googleSearchRetrieval"],r);const d=u(o,["computerUse"]);if(d!=null&&c(t,["computerUse"],d),u(o,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const m=u(o,["codeExecution"]);m!=null&&c(t,["codeExecution"],m);const g=u(o,["enterpriseWebSearch"]);g!=null&&c(t,["enterpriseWebSearch"],g);const y=u(o,["googleMaps"]);y!=null&&c(t,["googleMaps"],y);const h=u(o,["googleSearch"]);h!=null&&c(t,["googleSearch"],h);const v=u(o,["urlContext"]);return v!=null&&c(t,["urlContext"],v),t}function qE(o){const t={},s=u(o,["baseModel"]);s!=null&&c(t,["baseModel"],s);const a=u(o,["createTime"]);a!=null&&c(t,["createTime"],a);const r=u(o,["updateTime"]);return r!=null&&c(t,["updateTime"],r),t}function zE(o){const t={},s=u(o,["labels","google-vertex-llm-tuning-base-model-id"]);s!=null&&c(t,["baseModel"],s);const a=u(o,["createTime"]);a!=null&&c(t,["createTime"],a);const r=u(o,["updateTime"]);return r!=null&&c(t,["updateTime"],r),t}function YE(o,t){const s={},a=u(o,["displayName"]);t!==void 0&&a!=null&&c(t,["displayName"],a);const r=u(o,["description"]);t!==void 0&&r!=null&&c(t,["description"],r);const d=u(o,["defaultCheckpointId"]);return t!==void 0&&d!=null&&c(t,["defaultCheckpointId"],d),s}function JE(o,t){const s={},a=u(o,["displayName"]);t!==void 0&&a!=null&&c(t,["displayName"],a);const r=u(o,["description"]);t!==void 0&&r!=null&&c(t,["description"],r);const d=u(o,["defaultCheckpointId"]);return t!==void 0&&d!=null&&c(t,["defaultCheckpointId"],d),s}function KE(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","name"],_e(o,a));const r=u(t,["config"]);return r!=null&&YE(r,s),s}function XE(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],_e(o,a));const r=u(t,["config"]);return r!=null&&JE(r,s),s}function WE(o,t){const s={},a=u(o,["outputGcsUri"]);t!==void 0&&a!=null&&c(t,["parameters","storageUri"],a);const r=u(o,["safetyFilterLevel"]);t!==void 0&&r!=null&&c(t,["parameters","safetySetting"],r);const d=u(o,["personGeneration"]);t!==void 0&&d!=null&&c(t,["parameters","personGeneration"],d);const m=u(o,["includeRaiReason"]);t!==void 0&&m!=null&&c(t,["parameters","includeRaiReason"],m);const g=u(o,["outputMimeType"]);t!==void 0&&g!=null&&c(t,["parameters","outputOptions","mimeType"],g);const y=u(o,["outputCompressionQuality"]);t!==void 0&&y!=null&&c(t,["parameters","outputOptions","compressionQuality"],y);const h=u(o,["enhanceInputImage"]);t!==void 0&&h!=null&&c(t,["parameters","upscaleConfig","enhanceInputImage"],h);const v=u(o,["imagePreservationFactor"]);t!==void 0&&v!=null&&c(t,["parameters","upscaleConfig","imagePreservationFactor"],v);const C=u(o,["labels"]);t!==void 0&&C!=null&&c(t,["labels"],C);const T=u(o,["numberOfImages"]);t!==void 0&&T!=null&&c(t,["parameters","sampleCount"],T);const b=u(o,["mode"]);return t!==void 0&&b!=null&&c(t,["parameters","mode"],b),s}function QE(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],_e(o,a));const r=u(t,["image"]);r!=null&&c(s,["instances[0]","image"],zt(r));const d=u(t,["upscaleFactor"]);d!=null&&c(s,["parameters","upscaleConfig","upscaleFactor"],d);const m=u(t,["config"]);return m!=null&&WE(m,s),s}function $E(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["predictions"]);if(a!=null){let r=a;Array.isArray(r)&&(r=r.map(d=>Oa(d))),c(t,["generatedImages"],r)}return t}function ZE(o){const t={},s=u(o,["uri"]);s!=null&&c(t,["uri"],s);const a=u(o,["encodedVideo"]);a!=null&&c(t,["videoBytes"],zn(a));const r=u(o,["encoding"]);return r!=null&&c(t,["mimeType"],r),t}function jE(o){const t={},s=u(o,["gcsUri"]);s!=null&&c(t,["uri"],s);const a=u(o,["bytesBase64Encoded"]);a!=null&&c(t,["videoBytes"],zn(a));const r=u(o,["mimeType"]);return r!=null&&c(t,["mimeType"],r),t}function eb(o){const t={},s=u(o,["image"]);s!=null&&c(t,["_self"],zt(s));const a=u(o,["maskMode"]);return a!=null&&c(t,["maskMode"],a),t}function tb(o){const t={},s=u(o,["image"]);s!=null&&c(t,["image"],Ba(s));const a=u(o,["referenceType"]);return a!=null&&c(t,["referenceType"],a),t}function nb(o){const t={},s=u(o,["image"]);s!=null&&c(t,["image"],zt(s));const a=u(o,["referenceType"]);return a!=null&&c(t,["referenceType"],a),t}function ug(o){const t={},s=u(o,["uri"]);s!=null&&c(t,["uri"],s);const a=u(o,["videoBytes"]);a!=null&&c(t,["encodedVideo"],zn(a));const r=u(o,["mimeType"]);return r!=null&&c(t,["encoding"],r),t}function cg(o){const t={},s=u(o,["uri"]);s!=null&&c(t,["gcsUri"],s);const a=u(o,["videoBytes"]);a!=null&&c(t,["bytesBase64Encoded"],zn(a));const r=u(o,["mimeType"]);return r!=null&&c(t,["mimeType"],r),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ob(o,t){const s={},a=u(o,["displayName"]);return t!==void 0&&a!=null&&c(t,["displayName"],a),s}function ib(o){const t={},s=u(o,["config"]);return s!=null&&ob(s,t),t}function sb(o,t){const s={},a=u(o,["force"]);return t!==void 0&&a!=null&&c(t,["_query","force"],a),s}function ab(o){const t={},s=u(o,["name"]);s!=null&&c(t,["_url","name"],s);const a=u(o,["config"]);return a!=null&&sb(a,t),t}function lb(o){const t={},s=u(o,["name"]);return s!=null&&c(t,["_url","name"],s),t}function rb(o,t){const s={},a=u(o,["customMetadata"]);if(t!==void 0&&a!=null){let d=a;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["customMetadata"],d)}const r=u(o,["chunkingConfig"]);return t!==void 0&&r!=null&&c(t,["chunkingConfig"],r),s}function ub(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["metadata"]);a!=null&&c(t,["metadata"],a);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["response"]);return m!=null&&c(t,["response"],db(m)),t}function cb(o){const t={},s=u(o,["fileSearchStoreName"]);s!=null&&c(t,["_url","file_search_store_name"],s);const a=u(o,["fileName"]);a!=null&&c(t,["fileName"],a);const r=u(o,["config"]);return r!=null&&rb(r,t),t}function db(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["parent"]);a!=null&&c(t,["parent"],a);const r=u(o,["documentName"]);return r!=null&&c(t,["documentName"],r),t}function pb(o,t){const s={},a=u(o,["pageSize"]);t!==void 0&&a!=null&&c(t,["_query","pageSize"],a);const r=u(o,["pageToken"]);return t!==void 0&&r!=null&&c(t,["_query","pageToken"],r),s}function fb(o){const t={},s=u(o,["config"]);return s!=null&&pb(s,t),t}function mb(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["nextPageToken"]);a!=null&&c(t,["nextPageToken"],a);const r=u(o,["fileSearchStores"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["fileSearchStores"],d)}return t}function dg(o,t){const s={},a=u(o,["mimeType"]);t!==void 0&&a!=null&&c(t,["mimeType"],a);const r=u(o,["displayName"]);t!==void 0&&r!=null&&c(t,["displayName"],r);const d=u(o,["customMetadata"]);if(t!==void 0&&d!=null){let g=d;Array.isArray(g)&&(g=g.map(y=>y)),c(t,["customMetadata"],g)}const m=u(o,["chunkingConfig"]);return t!==void 0&&m!=null&&c(t,["chunkingConfig"],m),s}function hb(o){const t={},s=u(o,["fileSearchStoreName"]);s!=null&&c(t,["_url","file_search_store_name"],s);const a=u(o,["config"]);return a!=null&&dg(a,t),t}function gb(o){const t={},s=u(o,["sdkHttpResponse"]);return s!=null&&c(t,["sdkHttpResponse"],s),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const yb="Content-Type",vb="X-Server-Timeout",Sb="User-Agent",_u="x-goog-api-client",Cb="1.34.0",Tb=`google-genai-sdk/${Cb}`,Ab="v1beta1",Eb="v1beta";class bb{constructor(t){var s,a;this.clientOptions=Object.assign(Object.assign({},t),{project:t.project,location:t.location,apiKey:t.apiKey,vertexai:t.vertexai});const r={};this.clientOptions.vertexai?(r.apiVersion=(s=this.clientOptions.apiVersion)!==null&&s!==void 0?s:Ab,r.baseUrl=this.baseUrlFromProjectLocation(),this.normalizeAuthParameters()):(r.apiVersion=(a=this.clientOptions.apiVersion)!==null&&a!==void 0?a:Eb,r.baseUrl="https://generativelanguage.googleapis.com/"),r.headers=this.getDefaultHeaders(),this.clientOptions.httpOptions=r,t.httpOptions&&(this.clientOptions.httpOptions=this.patchHttpOptions(r,t.httpOptions))}baseUrlFromProjectLocation(){return this.clientOptions.project&&this.clientOptions.location&&this.clientOptions.location!=="global"?`https://${this.clientOptions.location}-aiplatform.googleapis.com/`:"https://aiplatform.googleapis.com/"}normalizeAuthParameters(){if(this.clientOptions.project&&this.clientOptions.location){this.clientOptions.apiKey=void 0;return}this.clientOptions.project=void 0,this.clientOptions.location=void 0}isVertexAI(){var t;return(t=this.clientOptions.vertexai)!==null&&t!==void 0?t:!1}getProject(){return this.clientOptions.project}getLocation(){return this.clientOptions.location}async getAuthHeaders(){const t=new Headers;return await this.clientOptions.auth.addAuthHeaders(t),t}getApiVersion(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.apiVersion!==void 0)return this.clientOptions.httpOptions.apiVersion;throw new Error("API version is not set.")}getBaseUrl(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.baseUrl!==void 0)return this.clientOptions.httpOptions.baseUrl;throw new Error("Base URL is not set.")}getRequestUrl(){return this.getRequestUrlInternal(this.clientOptions.httpOptions)}getHeaders(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.headers!==void 0)return this.clientOptions.httpOptions.headers;throw new Error("Headers are not set.")}getRequestUrlInternal(t){if(!t||t.baseUrl===void 0||t.apiVersion===void 0)throw new Error("HTTP options are not correctly set.");const a=[t.baseUrl.endsWith("/")?t.baseUrl.slice(0,-1):t.baseUrl];return t.apiVersion&&t.apiVersion!==""&&a.push(t.apiVersion),a.join("/")}getBaseResourcePath(){return`projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`}getApiKey(){return this.clientOptions.apiKey}getWebsocketBaseUrl(){const t=this.getBaseUrl(),s=new URL(t);return s.protocol=s.protocol=="http:"?"ws":"wss",s.toString()}setBaseUrl(t){if(this.clientOptions.httpOptions)this.clientOptions.httpOptions.baseUrl=t;else throw new Error("HTTP options are not correctly set.")}constructUrl(t,s,a){const r=[this.getRequestUrlInternal(s)];return a&&r.push(this.getBaseResourcePath()),t!==""&&r.push(t),new URL(`${r.join("/")}`)}shouldPrependVertexProjectPath(t){return!(this.clientOptions.apiKey||!this.clientOptions.vertexai||t.path.startsWith("projects/")||t.httpMethod==="GET"&&t.path.startsWith("publishers/google/models"))}async request(t){let s=this.clientOptions.httpOptions;t.httpOptions&&(s=this.patchHttpOptions(this.clientOptions.httpOptions,t.httpOptions));const a=this.shouldPrependVertexProjectPath(t),r=this.constructUrl(t.path,s,a);if(t.queryParams)for(const[m,g]of Object.entries(t.queryParams))r.searchParams.append(m,String(g));let d={};if(t.httpMethod==="GET"){if(t.body&&t.body!=="{}")throw new Error("Request body should be empty for GET request, but got non empty request body")}else d.body=t.body;return d=await this.includeExtraHttpOptionsToRequestInit(d,s,r.toString(),t.abortSignal),this.unaryApiCall(r,d,t.httpMethod)}patchHttpOptions(t,s){const a=JSON.parse(JSON.stringify(t));for(const[r,d]of Object.entries(s))typeof d=="object"?a[r]=Object.assign(Object.assign({},a[r]),d):d!==void 0&&(a[r]=d);return a}async requestStream(t){let s=this.clientOptions.httpOptions;t.httpOptions&&(s=this.patchHttpOptions(this.clientOptions.httpOptions,t.httpOptions));const a=this.shouldPrependVertexProjectPath(t),r=this.constructUrl(t.path,s,a);(!r.searchParams.has("alt")||r.searchParams.get("alt")!=="sse")&&r.searchParams.set("alt","sse");let d={};return d.body=t.body,d=await this.includeExtraHttpOptionsToRequestInit(d,s,r.toString(),t.abortSignal),this.streamApiCall(r,d,t.httpMethod)}async includeExtraHttpOptionsToRequestInit(t,s,a,r){if(s&&s.timeout||r){const d=new AbortController,m=d.signal;if(s.timeout&&(s==null?void 0:s.timeout)>0){const g=setTimeout(()=>d.abort(),s.timeout);g&&typeof g.unref=="function"&&g.unref()}r&&r.addEventListener("abort",()=>{d.abort()}),t.signal=m}return s&&s.extraBody!==null&&_b(t,s.extraBody),t.headers=await this.getHeadersInternal(s,a),t}async unaryApiCall(t,s,a){return this.apiCall(t.toString(),Object.assign(Object.assign({},s),{method:a})).then(async r=>(await bh(r),new Cu(r))).catch(r=>{throw r instanceof Error?r:new Error(JSON.stringify(r))})}async streamApiCall(t,s,a){return this.apiCall(t.toString(),Object.assign(Object.assign({},s),{method:a})).then(async r=>(await bh(r),this.processStreamResponse(r))).catch(r=>{throw r instanceof Error?r:new Error(JSON.stringify(r))})}processStreamResponse(t){return Vt(this,arguments,function*(){var a;const r=(a=t==null?void 0:t.body)===null||a===void 0?void 0:a.getReader(),d=new TextDecoder("utf-8");if(!r)throw new Error("Response body is empty");try{let m="";const g="data:",y=[`

`,"\r\r",`\r
\r
`];for(;;){const{done:h,value:v}=yield re(r.read());if(h){if(m.trim().length>0)throw new Error("Incomplete JSON segment at the end");break}const C=d.decode(v,{stream:!0});try{const k=JSON.parse(C);if("error"in k){const N=JSON.parse(JSON.stringify(k.error)),I=N.status,U=N.code,q=`got status: ${I}. ${JSON.stringify(k)}`;if(U>=400&&U<600)throw new La({message:q,status:U})}}catch(k){if(k.name==="ApiError")throw k}m+=C;let T=-1,b=0;for(;;){T=-1,b=0;for(const I of y){const U=m.indexOf(I);U!==-1&&(T===-1||U<T)&&(T=U,b=I.length)}if(T===-1)break;const k=m.substring(0,T);m=m.substring(T+b);const N=k.trim();if(N.startsWith(g)){const I=N.substring(g.length).trim();try{const U=new Response(I,{headers:t==null?void 0:t.headers,status:t==null?void 0:t.status,statusText:t==null?void 0:t.statusText});yield yield re(new Cu(U))}catch(U){throw new Error(`exception parsing stream chunk ${I}. ${U}`)}}}}}finally{r.releaseLock()}})}async apiCall(t,s){return fetch(t,s).catch(a=>{throw new Error(`exception ${a} sending request`)})}getDefaultHeaders(){const t={},s=Tb+" "+this.clientOptions.userAgentExtra;return t[Sb]=s,t[_u]=s,t[yb]="application/json",t}async getHeadersInternal(t,s){const a=new Headers;if(t&&t.headers){for(const[r,d]of Object.entries(t.headers))a.append(r,d);t.timeout&&t.timeout>0&&a.append(vb,String(Math.ceil(t.timeout/1e3)))}return await this.clientOptions.auth.addAuthHeaders(a,s),a}getFileName(t){var s;let a="";return typeof t=="string"&&(a=t.replace(/[/\\]+$/,""),a=(s=a.split(/[/\\]/).pop())!==null&&s!==void 0?s:""),a}async uploadFile(t,s){var a;const r={};s!=null&&(r.mimeType=s.mimeType,r.name=s.name,r.displayName=s.displayName),r.name&&!r.name.startsWith("files/")&&(r.name=`files/${r.name}`);const d=this.clientOptions.uploader,m=await d.stat(t);r.sizeBytes=String(m.size);const g=(a=s==null?void 0:s.mimeType)!==null&&a!==void 0?a:m.type;if(g===void 0||g==="")throw new Error("Can not determine mimeType. Please provide mimeType in the config.");r.mimeType=g;const y={file:r},h=this.getFileName(t),v=Z("upload/v1beta/files",y._url),C=await this.fetchUploadUrl(v,r.sizeBytes,r.mimeType,h,y,s==null?void 0:s.httpOptions);return d.upload(t,C,this)}async uploadFileToFileSearchStore(t,s,a){var r;const d=this.clientOptions.uploader,m=await d.stat(s),g=String(m.size),y=(r=a==null?void 0:a.mimeType)!==null&&r!==void 0?r:m.type;if(y===void 0||y==="")throw new Error("Can not determine mimeType. Please provide mimeType in the config.");const h=`upload/v1beta/${t}:uploadToFileSearchStore`,v=this.getFileName(s),C={};a!=null&&dg(a,C);const T=await this.fetchUploadUrl(h,g,y,v,C,a==null?void 0:a.httpOptions);return d.uploadToFileSearchStore(s,T,this)}async downloadFile(t){await this.clientOptions.downloader.download(t,this)}async fetchUploadUrl(t,s,a,r,d,m){var g;let y={};m?y=m:y={apiVersion:"",headers:Object.assign({"Content-Type":"application/json","X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s}`,"X-Goog-Upload-Header-Content-Type":`${a}`},r?{"X-Goog-Upload-File-Name":r}:{})};const h=await this.request({path:t,body:JSON.stringify(d),httpMethod:"POST",httpOptions:y});if(!h||!(h!=null&&h.headers))throw new Error("Server did not return an HttpResponse or the returned HttpResponse did not have headers.");const v=(g=h==null?void 0:h.headers)===null||g===void 0?void 0:g["x-goog-upload-url"];if(v===void 0)throw new Error("Failed to get upload url. Server did not return the x-google-upload-url in the headers");return v}}async function bh(o){var t;if(o===void 0)throw new Error("response is undefined");if(!o.ok){const s=o.status;let a;!((t=o.headers.get("content-type"))===null||t===void 0)&&t.includes("application/json")?a=await o.json():a={error:{message:await o.text(),code:o.status,status:o.statusText}};const r=JSON.stringify(a);throw s>=400&&s<600?new La({message:r,status:s}):new Error(r)}}function _b(o,t){if(!t||Object.keys(t).length===0)return;if(o.body instanceof Blob){console.warn("includeExtraBodyToRequestInit: extraBody provided but current request body is a Blob. extraBody will be ignored as merging is not supported for Blob bodies.");return}let s={};if(typeof o.body=="string"&&o.body.length>0)try{const d=JSON.parse(o.body);if(typeof d=="object"&&d!==null&&!Array.isArray(d))s=d;else{console.warn("includeExtraBodyToRequestInit: Original request body is valid JSON but not a non-array object. Skip applying extraBody to the request body.");return}}catch{console.warn("includeExtraBodyToRequestInit: Original request body is not valid JSON. Skip applying extraBody to the request body.");return}function a(d,m){const g=Object.assign({},d);for(const y in m)if(Object.prototype.hasOwnProperty.call(m,y)){const h=m[y],v=g[y];h&&typeof h=="object"&&!Array.isArray(h)&&v&&typeof v=="object"&&!Array.isArray(v)?g[y]=a(v,h):(v&&h&&typeof v!=typeof h&&console.warn(`includeExtraBodyToRequestInit:deepMerge: Type mismatch for key "${y}". Original type: ${typeof v}, New type: ${typeof h}. Overwriting.`),g[y]=h)}return g}const r=a(s,t);o.body=JSON.stringify(r)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const wb="mcp_used/unknown";let Rb=!1;function pg(o){for(const t of o)if(Ib(t)||typeof t=="object"&&"inputSchema"in t)return!0;return Rb}function fg(o){var t;const s=(t=o[_u])!==null&&t!==void 0?t:"";o[_u]=(s+` ${wb}`).trimStart()}function Ib(o){return o!==null&&typeof o=="object"&&o instanceof Hu}function xb(o){return Vt(this,arguments,function*(s,a=100){let r,d=0;for(;d<a;){const m=yield re(s.listTools({cursor:r}));for(const g of m.tools)yield yield re(g),d++;if(!m.nextCursor)break;r=m.nextCursor}})}class Hu{constructor(t=[],s){this.mcpTools=[],this.functionNameToMcpClient={},this.mcpClients=t,this.config=s}static create(t,s){return new Hu(t,s)}async initialize(){var t,s,a,r;if(this.mcpTools.length>0)return;const d={},m=[];for(const v of this.mcpClients)try{for(var g=!0,y=(s=void 0,qt(xb(v))),h;h=await y.next(),t=h.done,!t;g=!0){r=h.value,g=!1;const C=r;m.push(C);const T=C.name;if(d[T])throw new Error(`Duplicate function name ${T} found in MCP tools. Please ensure function names are unique.`);d[T]=v}}catch(C){s={error:C}}finally{try{!g&&!t&&(a=y.return)&&await a.call(y)}finally{if(s)throw s.error}}this.mcpTools=m,this.functionNameToMcpClient=d}async tool(){return await this.initialize(),lC(this.mcpTools,this.config)}async callTool(t){await this.initialize();const s=[];for(const a of t)if(a.name in this.functionNameToMcpClient){const r=this.functionNameToMcpClient[a.name];let d;this.config.timeout&&(d={timeout:this.config.timeout});const m=await r.callTool({name:a.name,arguments:a.args},void 0,d);s.push({functionResponse:{name:a.name,response:m.isError?{error:m}:m}})}return s}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function Nb(o,t,s){const a=new jS;let r;s.data instanceof Blob?r=JSON.parse(await s.data.text()):r=JSON.parse(s.data),Object.assign(a,r),t(a)}class Mb{constructor(t,s,a){this.apiClient=t,this.auth=s,this.webSocketFactory=a}async connect(t){var s,a;if(this.apiClient.isVertexAI())throw new Error("Live music is not supported for Vertex AI.");console.warn("Live music generation is experimental and may change in future versions.");const r=this.apiClient.getWebsocketBaseUrl(),d=this.apiClient.getApiVersion(),m=kb(this.apiClient.getDefaultHeaders()),g=this.apiClient.getApiKey(),y=`${r}/ws/google.ai.generativelanguage.${d}.GenerativeService.BidiGenerateMusic?key=${g}`;let h=()=>{};const v=new Promise(B=>{h=B}),C=t.callbacks,T=function(){h({})},b=this.apiClient,k={onopen:T,onmessage:B=>{Nb(b,C.onmessage,B)},onerror:(s=C==null?void 0:C.onerror)!==null&&s!==void 0?s:function(B){},onclose:(a=C==null?void 0:C.onclose)!==null&&a!==void 0?a:function(B){}},N=this.webSocketFactory.create(y,Db(m),k);N.connect(),await v;const q={setup:{model:_e(this.apiClient,t.model)}};return N.send(JSON.stringify(q)),new Pb(N,this.apiClient)}}class Pb{constructor(t,s){this.conn=t,this.apiClient=s}async setWeightedPrompts(t){if(!t.weightedPrompts||Object.keys(t.weightedPrompts).length===0)throw new Error("Weighted prompts must be set and contain at least one entry.");const s=iA(t);this.conn.send(JSON.stringify({clientContent:s}))}async setMusicGenerationConfig(t){t.musicGenerationConfig||(t.musicGenerationConfig={});const s=oA(t);this.conn.send(JSON.stringify(s))}sendPlaybackControl(t){const s={playbackControl:t};this.conn.send(JSON.stringify(s))}play(){this.sendPlaybackControl(Zo.PLAY)}pause(){this.sendPlaybackControl(Zo.PAUSE)}stop(){this.sendPlaybackControl(Zo.STOP)}resetContext(){this.sendPlaybackControl(Zo.RESET_CONTEXT)}close(){this.conn.close()}}function Db(o){const t={};return o.forEach((s,a)=>{t[a]=s}),t}function kb(o){const t=new Headers;for(const[s,a]of Object.entries(o))t.append(s,a);return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ub="FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.";async function Lb(o,t,s){const a=new ZS;let r;s.data instanceof Blob?r=await s.data.text():s.data instanceof ArrayBuffer?r=new TextDecoder().decode(s.data):r=s.data;const d=JSON.parse(r);if(o.isVertexAI()){const m=lA(d);Object.assign(a,m)}else Object.assign(a,d);t(a)}class Gb{constructor(t,s,a){this.apiClient=t,this.auth=s,this.webSocketFactory=a,this.music=new Mb(this.apiClient,this.auth,this.webSocketFactory)}async connect(t){var s,a,r,d,m,g;if(t.config&&t.config.httpOptions)throw new Error("The Live module does not support httpOptions at request-level in LiveConnectConfig yet. Please use the client-level httpOptions configuration instead.");const y=this.apiClient.getWebsocketBaseUrl(),h=this.apiClient.getApiVersion();let v;const C=this.apiClient.getHeaders();t.config&&t.config.tools&&pg(t.config.tools)&&fg(C);const T=Fb(C);if(this.apiClient.isVertexAI())v=`${y}/ws/google.cloud.aiplatform.${h}.LlmBidiService/BidiGenerateContent`,await this.auth.addAuthHeaders(T,v);else{const z=this.apiClient.getApiKey();let le="BidiGenerateContent",me="key";z!=null&&z.startsWith("auth_tokens/")&&(console.warn("Warning: Ephemeral token support is experimental and may change in future versions."),h!=="v1alpha"&&console.warn("Warning: The SDK's ephemeral token support is in v1alpha only. Please use const ai = new GoogleGenAI({apiKey: token.name, httpOptions: { apiVersion: 'v1alpha' }}); before session connection."),le="BidiGenerateContentConstrained",me="access_token"),v=`${y}/ws/google.ai.generativelanguage.${h}.GenerativeService.${le}?${me}=${z}`}let b=()=>{};const k=new Promise(z=>{b=z}),N=t.callbacks,I=function(){var z;(z=N==null?void 0:N.onopen)===null||z===void 0||z.call(N),b({})},U=this.apiClient,q={onopen:I,onmessage:z=>{Lb(U,N.onmessage,z)},onerror:(s=N==null?void 0:N.onerror)!==null&&s!==void 0?s:function(z){},onclose:(a=N==null?void 0:N.onclose)!==null&&a!==void 0?a:function(z){}},B=this.webSocketFactory.create(v,Hb(T),q);B.connect(),await k;let X=_e(this.apiClient,t.model);if(this.apiClient.isVertexAI()&&X.startsWith("publishers/")){const z=this.apiClient.getProject(),le=this.apiClient.getLocation();X=`projects/${z}/locations/${le}/`+X}let Q={};this.apiClient.isVertexAI()&&((r=t.config)===null||r===void 0?void 0:r.responseModalities)===void 0&&(t.config===void 0?t.config={responseModalities:[Na.AUDIO]}:t.config.responseModalities=[Na.AUDIO]),!((d=t.config)===null||d===void 0)&&d.generationConfig&&console.warn("Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).");const ee=(g=(m=t.config)===null||m===void 0?void 0:m.tools)!==null&&g!==void 0?g:[],J=[];for(const z of ee)if(this.isCallableTool(z)){const le=z;J.push(await le.tool())}else J.push(z);J.length>0&&(t.config.tools=J);const $={model:X,config:t.config,callbacks:t.callbacks};return this.apiClient.isVertexAI()?Q=nA(this.apiClient,$):Q=tA(this.apiClient,$),delete Q.config,B.send(JSON.stringify(Q)),new Bb(B,this.apiClient)}isCallableTool(t){return"callTool"in t&&typeof t.callTool=="function"}}const Ob={turnComplete:!0};class Bb{constructor(t,s){this.conn=t,this.apiClient=s}tLiveClientContent(t,s){if(s.turns!==null&&s.turns!==void 0){let a=[];try{a=Gt(s.turns),t.isVertexAI()||(a=a.map(r=>Ga(r)))}catch{throw new Error(`Failed to parse client content "turns", type: '${typeof s.turns}'`)}return{clientContent:{turns:a,turnComplete:s.turnComplete}}}return{clientContent:{turnComplete:s.turnComplete}}}tLiveClienttToolResponse(t,s){let a=[];if(s.functionResponses==null)throw new Error("functionResponses is required.");if(Array.isArray(s.functionResponses)?a=s.functionResponses:a=[s.functionResponses],a.length===0)throw new Error("functionResponses is required.");for(const d of a){if(typeof d!="object"||d===null||!("name"in d)||!("response"in d))throw new Error(`Could not parse function response, type '${typeof d}'.`);if(!t.isVertexAI()&&!("id"in d))throw new Error(Ub)}return{toolResponse:{functionResponses:a}}}sendClientContent(t){t=Object.assign(Object.assign({},Ob),t);const s=this.tLiveClientContent(this.apiClient,t);this.conn.send(JSON.stringify(s))}sendRealtimeInput(t){let s={};this.apiClient.isVertexAI()?s={realtimeInput:aA(t)}:s={realtimeInput:sA(t)},this.conn.send(JSON.stringify(s))}sendToolResponse(t){if(t.functionResponses==null)throw new Error("Tool response parameters are required.");const s=this.tLiveClienttToolResponse(this.apiClient,t);this.conn.send(JSON.stringify(s))}close(){this.conn.close()}}function Hb(o){const t={};return o.forEach((s,a)=>{t[a]=s}),t}function Fb(o){const t=new Headers;for(const[s,a]of Object.entries(o))t.append(s,a);return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const _h=10;function wh(o){var t,s,a;if(!((t=o==null?void 0:o.automaticFunctionCalling)===null||t===void 0)&&t.disable)return!0;let r=!1;for(const m of(s=o==null?void 0:o.tools)!==null&&s!==void 0?s:[])if(ti(m)){r=!0;break}if(!r)return!0;const d=(a=o==null?void 0:o.automaticFunctionCalling)===null||a===void 0?void 0:a.maximumRemoteCalls;return d&&(d<0||!Number.isInteger(d))||d==0?(console.warn("Invalid maximumRemoteCalls value provided for automatic function calling. Disabled automatic function calling. Please provide a valid integer value greater than 0. maximumRemoteCalls provided:",d),!0):!1}function ti(o){return"callTool"in o&&typeof o.callTool=="function"}function Vb(o){var t,s,a;return(a=(s=(t=o.config)===null||t===void 0?void 0:t.tools)===null||s===void 0?void 0:s.some(r=>ti(r)))!==null&&a!==void 0?a:!1}function Rh(o){var t;const s=[];return!((t=o==null?void 0:o.config)===null||t===void 0)&&t.tools&&o.config.tools.forEach((a,r)=>{if(ti(a))return;const d=a;d.functionDeclarations&&d.functionDeclarations.length>0&&s.push(r)}),s}function Ih(o){var t;return!(!((t=o==null?void 0:o.automaticFunctionCalling)===null||t===void 0)&&t.ignoreCallHistory)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class qb extends gn{constructor(t){super(),this.apiClient=t,this.generateContent=async s=>{var a,r,d,m,g;const y=await this.processParamsMaybeAddMcpUsage(s);if(this.maybeMoveToResponseJsonSchem(s),!Vb(s)||wh(s.config))return await this.generateContentInternal(y);const h=Rh(s);if(h.length>0){const N=h.map(I=>`tools[${I}]`).join(", ");throw new Error(`Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations is not yet supported. Incompatible tools found at ${N}.`)}let v,C;const T=Gt(y.contents),b=(d=(r=(a=y.config)===null||a===void 0?void 0:a.automaticFunctionCalling)===null||r===void 0?void 0:r.maximumRemoteCalls)!==null&&d!==void 0?d:_h;let k=0;for(;k<b&&(v=await this.generateContentInternal(y),!(!v.functionCalls||v.functionCalls.length===0));){const N=v.candidates[0].content,I=[];for(const U of(g=(m=s.config)===null||m===void 0?void 0:m.tools)!==null&&g!==void 0?g:[])if(ti(U)){const B=await U.callTool(v.functionCalls);I.push(...B)}k++,C={role:"user",parts:I},y.contents=Gt(y.contents),y.contents.push(N),y.contents.push(C),Ih(y.config)&&(T.push(N),T.push(C))}return Ih(y.config)&&(v.automaticFunctionCallingHistory=T),v},this.generateContentStream=async s=>{var a,r,d,m,g;if(this.maybeMoveToResponseJsonSchem(s),wh(s.config)){const C=await this.processParamsMaybeAddMcpUsage(s);return await this.generateContentStreamInternal(C)}const y=Rh(s);if(y.length>0){const C=y.map(T=>`tools[${T}]`).join(", ");throw new Error(`Incompatible tools found at ${C}. Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations" is not yet supported.`)}const h=(d=(r=(a=s==null?void 0:s.config)===null||a===void 0?void 0:a.toolConfig)===null||r===void 0?void 0:r.functionCallingConfig)===null||d===void 0?void 0:d.streamFunctionCallArguments,v=(g=(m=s==null?void 0:s.config)===null||m===void 0?void 0:m.automaticFunctionCalling)===null||g===void 0?void 0:g.disable;if(h&&!v)throw new Error("Running in streaming mode with 'streamFunctionCallArguments' enabled, this feature is not compatible with automatic function calling (AFC). Please set 'config.automaticFunctionCalling.disable' to true to disable AFC or leave 'config.toolConfig.functionCallingConfig.streamFunctionCallArguments' to be undefined or set to false to disable streaming function call arguments feature.");return await this.processAfcStream(s)},this.generateImages=async s=>await this.generateImagesInternal(s).then(a=>{var r;let d;const m=[];if(a!=null&&a.generatedImages)for(const y of a.generatedImages)y&&(y!=null&&y.safetyAttributes)&&((r=y==null?void 0:y.safetyAttributes)===null||r===void 0?void 0:r.contentType)==="Positive Prompt"?d=y==null?void 0:y.safetyAttributes:m.push(y);let g;return d?g={generatedImages:m,positivePromptSafetyAttributes:d,sdkHttpResponse:a.sdkHttpResponse}:g={generatedImages:m,sdkHttpResponse:a.sdkHttpResponse},g}),this.list=async s=>{var a;const m={config:Object.assign(Object.assign({},{queryBase:!0}),s==null?void 0:s.config)};if(this.apiClient.isVertexAI()&&!m.config.queryBase){if(!((a=m.config)===null||a===void 0)&&a.filter)throw new Error("Filtering tuned models list for Vertex AI is not currently supported");m.config.filter="labels.tune-type:*"}return new po(hn.PAGED_ITEM_MODELS,g=>this.listInternal(g),await this.listInternal(m),m)},this.editImage=async s=>{const a={model:s.model,prompt:s.prompt,referenceImages:[],config:s.config};return s.referenceImages&&s.referenceImages&&(a.referenceImages=s.referenceImages.map(r=>r.toReferenceImageAPI())),await this.editImageInternal(a)},this.upscaleImage=async s=>{let a={numberOfImages:1,mode:"upscale"};s.config&&(a=Object.assign(Object.assign({},a),s.config));const r={model:s.model,image:s.image,upscaleFactor:s.upscaleFactor,config:a};return await this.upscaleImageInternal(r)},this.generateVideos=async s=>{var a,r,d,m,g,y;if((s.prompt||s.image||s.video)&&s.source)throw new Error("Source and prompt/image/video are mutually exclusive. Please only use source.");return this.apiClient.isVertexAI()||(!((a=s.video)===null||a===void 0)&&a.uri&&(!((r=s.video)===null||r===void 0)&&r.videoBytes)?s.video={uri:s.video.uri,mimeType:s.video.mimeType}:!((m=(d=s.source)===null||d===void 0?void 0:d.video)===null||m===void 0)&&m.uri&&(!((y=(g=s.source)===null||g===void 0?void 0:g.video)===null||y===void 0)&&y.videoBytes)&&(s.source.video={uri:s.source.video.uri,mimeType:s.source.video.mimeType})),await this.generateVideosInternal(s)}}maybeMoveToResponseJsonSchem(t){t.config&&t.config.responseSchema&&(t.config.responseJsonSchema||Object.keys(t.config.responseSchema).includes("$schema")&&(t.config.responseJsonSchema=t.config.responseSchema,delete t.config.responseSchema))}async processParamsMaybeAddMcpUsage(t){var s,a,r;const d=(s=t.config)===null||s===void 0?void 0:s.tools;if(!d)return t;const m=await Promise.all(d.map(async y=>ti(y)?await y.tool():y)),g={model:t.model,contents:t.contents,config:Object.assign(Object.assign({},t.config),{tools:m})};if(g.config.tools=m,t.config&&t.config.tools&&pg(t.config.tools)){const y=(r=(a=t.config.httpOptions)===null||a===void 0?void 0:a.headers)!==null&&r!==void 0?r:{};let h=Object.assign({},y);Object.keys(h).length===0&&(h=this.apiClient.getDefaultHeaders()),fg(h),g.config.httpOptions=Object.assign(Object.assign({},t.config.httpOptions),{headers:h})}return g}async initAfcToolsMap(t){var s,a,r;const d=new Map;for(const m of(a=(s=t.config)===null||s===void 0?void 0:s.tools)!==null&&a!==void 0?a:[])if(ti(m)){const g=m,y=await g.tool();for(const h of(r=y.functionDeclarations)!==null&&r!==void 0?r:[]){if(!h.name)throw new Error("Function declaration name is required.");if(d.has(h.name))throw new Error(`Duplicate tool declaration name: ${h.name}`);d.set(h.name,g)}}return d}async processAfcStream(t){var s,a,r;const d=(r=(a=(s=t.config)===null||s===void 0?void 0:s.automaticFunctionCalling)===null||a===void 0?void 0:a.maximumRemoteCalls)!==null&&r!==void 0?r:_h;let m=!1,g=0;const y=await this.initAfcToolsMap(t);return(function(h,v,C){return Vt(this,arguments,function*(){for(var T,b,k,N,I,U;g<d;){m&&(g++,m=!1);const Q=yield re(h.processParamsMaybeAddMcpUsage(C)),ee=yield re(h.generateContentStreamInternal(Q)),J=[],$=[];try{for(var q=!0,B=(b=void 0,qt(ee)),X;X=yield re(B.next()),T=X.done,!T;q=!0){N=X.value,q=!1;const z=N;if(yield yield re(z),z.candidates&&(!((I=z.candidates[0])===null||I===void 0)&&I.content)){$.push(z.candidates[0].content);for(const le of(U=z.candidates[0].content.parts)!==null&&U!==void 0?U:[])if(g<d&&le.functionCall){if(!le.functionCall.name)throw new Error("Function call name was not returned by the model.");if(v.has(le.functionCall.name)){const me=yield re(v.get(le.functionCall.name).callTool([le.functionCall]));J.push(...me)}else throw new Error(`Automatic function calling was requested, but not all the tools the model used implement the CallableTool interface. Available tools: ${v.keys()}, mising tool: ${le.functionCall.name}`)}}}}catch(z){b={error:z}}finally{try{!q&&!T&&(k=B.return)&&(yield re(k.call(B)))}finally{if(b)throw b.error}}if(J.length>0){m=!0;const z=new es;z.candidates=[{content:{role:"user",parts:J}}],yield yield re(z);const le=[];le.push(...$),le.push({role:"user",parts:J});const me=Gt(C.contents).concat(le);C.contents=me}else break}})})(this,y,t)}async generateContentInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=Th(this.apiClient,t);return g=Z("{model}:generateContent",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=Eh(v),T=new es;return Object.assign(T,C),T})}else{const h=Ch(this.apiClient,t);return g=Z("{model}:generateContent",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=Ah(v),T=new es;return Object.assign(T,C),T})}}async generateContentStreamInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=Th(this.apiClient,t);return g=Z("{model}:streamGenerateContent?alt=sse",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.requestStream({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}),m.then(function(C){return Vt(this,arguments,function*(){var T,b,k,N;try{for(var I=!0,U=qt(C),q;q=yield re(U.next()),T=q.done,!T;I=!0){N=q.value,I=!1;const B=N,X=Eh(yield re(B.json()));X.sdkHttpResponse={headers:B.headers};const Q=new es;Object.assign(Q,X),yield yield re(Q)}}catch(B){b={error:B}}finally{try{!I&&!T&&(k=U.return)&&(yield re(k.call(U)))}finally{if(b)throw b.error}}})})}else{const h=Ch(this.apiClient,t);return g=Z("{model}:streamGenerateContent?alt=sse",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.requestStream({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}),m.then(function(C){return Vt(this,arguments,function*(){var T,b,k,N;try{for(var I=!0,U=qt(C),q;q=yield re(U.next()),T=q.done,!T;I=!0){N=q.value,I=!1;const B=N,X=Ah(yield re(B.json()));X.sdkHttpResponse={headers:B.headers};const Q=new es;Object.assign(Q,X),yield yield re(Q)}}catch(B){b={error:B}}finally{try{!I&&!T&&(k=U.return)&&(yield re(k.call(U)))}finally{if(b)throw b.error}}})})}}async embedContent(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=GA(this.apiClient,t);return g=Z("{model}:predict",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=BA(v),T=new oh;return Object.assign(T,C),T})}else{const h=LA(this.apiClient,t);return g=Z("{model}:batchEmbedContents",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=OA(v),T=new oh;return Object.assign(T,C),T})}}async generateImagesInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=QA(this.apiClient,t);return g=Z("{model}:predict",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=ZA(v),T=new ih;return Object.assign(T,C),T})}else{const h=WA(this.apiClient,t);return g=Z("{model}:predict",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=$A(v),T=new ih;return Object.assign(T,C),T})}}async editImageInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI()){const g=PA(this.apiClient,t);return d=Z("{model}:predict",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json().then(h=>{const v=h;return v.sdkHttpResponse={headers:y.headers},v})),r.then(y=>{const h=DA(y),v=new FS;return Object.assign(v,h),v})}else throw new Error("This method is only supported by the Vertex AI.")}async upscaleImageInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI()){const g=QE(this.apiClient,t);return d=Z("{model}:predict",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json().then(h=>{const v=h;return v.sdkHttpResponse={headers:y.headers},v})),r.then(y=>{const h=$E(y),v=new VS;return Object.assign(v,h),v})}else throw new Error("This method is only supported by the Vertex AI.")}async recontextImage(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI()){const g=ME(this.apiClient,t);return d=Z("{model}:predict",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>{const h=PE(y),v=new qS;return Object.assign(v,h),v})}else throw new Error("This method is only supported by the Vertex AI.")}async segmentImage(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI()){const g=OE(this.apiClient,t);return d=Z("{model}:predict",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>{const h=BE(y),v=new zS;return Object.assign(v,h),v})}else throw new Error("This method is only supported by the Vertex AI.")}async get(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=hE(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json()),m.then(v=>bu(v))}else{const h=mE(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>Eu(v))}}async listInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=bE(this.apiClient,t);return g=Z("{models_url}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=wE(v),T=new sh;return Object.assign(T,C),T})}else{const h=EE(this.apiClient,t);return g=Z("{models_url}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=_E(v),T=new sh;return Object.assign(T,C),T})}}async update(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=XE(this.apiClient,t);return g=Z("{model}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"PATCH",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json()),m.then(v=>bu(v))}else{const h=KE(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"PATCH",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>Eu(v))}}async delete(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=IA(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=NA(v),T=new ah;return Object.assign(T,C),T})}else{const h=RA(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=xA(v),T=new ah;return Object.assign(T,C),T})}}async countTokens(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=bA(this.apiClient,t);return g=Z("{model}:countTokens",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=wA(v),T=new lh;return Object.assign(T,C),T})}else{const h=EA(this.apiClient,t);return g=Z("{model}:countTokens",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=_A(v),T=new lh;return Object.assign(T,C),T})}}async computeTokens(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI()){const g=gA(this.apiClient,t);return d=Z("{model}:computeTokens",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json().then(h=>{const v=h;return v.sdkHttpResponse={headers:y.headers},v})),r.then(y=>{const h=yA(y),v=new YS;return Object.assign(v,h),v})}else throw new Error("This method is only supported by the Vertex AI.")}async generateVideosInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=iE(this.apiClient,t);return g=Z("{model}:predictLongRunning",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json()),m.then(v=>{const C=nE(v),T=new Ma;return Object.assign(T,C),T})}else{const h=oE(this.apiClient,t);return g=Z("{model}:predictLongRunning",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>{const C=tE(v),T=new Ma;return Object.assign(T,C),T})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class zb extends gn{constructor(t){super(),this.apiClient=t}async getVideosOperation(t){const s=t.operation,a=t.config;if(s.name===void 0||s.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const r=s.name.split("/operations/")[0];let d;a&&"httpOptions"in a&&(d=a.httpOptions);const m=await this.fetchPredictVideosOperationInternal({operationName:s.name,resourceName:r,config:{httpOptions:d}});return s._fromAPIResponse({apiResponse:m,_isVertexAI:!0})}else{const r=await this.getVideosOperationInternal({operationName:s.name,config:a});return s._fromAPIResponse({apiResponse:r,_isVertexAI:!1})}}async get(t){const s=t.operation,a=t.config;if(s.name===void 0||s.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const r=s.name.split("/operations/")[0];let d;a&&"httpOptions"in a&&(d=a.httpOptions);const m=await this.fetchPredictVideosOperationInternal({operationName:s.name,resourceName:r,config:{httpOptions:d}});return s._fromAPIResponse({apiResponse:m,_isVertexAI:!0})}else{const r=await this.getVideosOperationInternal({operationName:s.name,config:a});return s._fromAPIResponse({apiResponse:r,_isVertexAI:!1})}}async getVideosOperationInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=US(t);return g=Z("{operationName}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json()),m}else{const h=kS(t);return g=Z("{operationName}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m}}async fetchPredictVideosOperationInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI()){const g=RS(t);return d=Z("{resourceName}:fetchPredictOperation",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r}else throw new Error("This method is only supported by the Vertex AI.")}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Yb(o){const t={},s=u(o,["data"]);if(s!=null&&c(t,["data"],s),u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function Jb(o){const t={},s=u(o,["parts"]);if(s!=null){let r=s;Array.isArray(r)&&(r=r.map(d=>t_(d))),c(t,["parts"],r)}const a=u(o,["role"]);return a!=null&&c(t,["role"],a),t}function Kb(o,t,s){const a={},r=u(t,["expireTime"]);s!==void 0&&r!=null&&c(s,["expireTime"],r);const d=u(t,["newSessionExpireTime"]);s!==void 0&&d!=null&&c(s,["newSessionExpireTime"],d);const m=u(t,["uses"]);s!==void 0&&m!=null&&c(s,["uses"],m);const g=u(t,["liveConnectConstraints"]);s!==void 0&&g!=null&&c(s,["bidiGenerateContentSetup"],e_(o,g));const y=u(t,["lockAdditionalFields"]);return s!==void 0&&y!=null&&c(s,["fieldMask"],y),a}function Xb(o,t){const s={},a=u(t,["config"]);return a!=null&&c(s,["config"],Kb(o,a,s)),s}function Wb(o){const t={};if(u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const s=u(o,["fileUri"]);s!=null&&c(t,["fileUri"],s);const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function Qb(o){const t={},s=u(o,["id"]);s!=null&&c(t,["id"],s);const a=u(o,["args"]);a!=null&&c(t,["args"],a);const r=u(o,["name"]);if(r!=null&&c(t,["name"],r),u(o,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(o,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function $b(o){const t={};if(u(o,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const s=u(o,["enableWidget"]);return s!=null&&c(t,["enableWidget"],s),t}function Zb(o){const t={};if(u(o,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(u(o,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const s=u(o,["timeRangeFilter"]);return s!=null&&c(t,["timeRangeFilter"],s),t}function jb(o,t){const s={},a=u(o,["generationConfig"]);t!==void 0&&a!=null&&c(t,["setup","generationConfig"],a);const r=u(o,["responseModalities"]);t!==void 0&&r!=null&&c(t,["setup","generationConfig","responseModalities"],r);const d=u(o,["temperature"]);t!==void 0&&d!=null&&c(t,["setup","generationConfig","temperature"],d);const m=u(o,["topP"]);t!==void 0&&m!=null&&c(t,["setup","generationConfig","topP"],m);const g=u(o,["topK"]);t!==void 0&&g!=null&&c(t,["setup","generationConfig","topK"],g);const y=u(o,["maxOutputTokens"]);t!==void 0&&y!=null&&c(t,["setup","generationConfig","maxOutputTokens"],y);const h=u(o,["mediaResolution"]);t!==void 0&&h!=null&&c(t,["setup","generationConfig","mediaResolution"],h);const v=u(o,["seed"]);t!==void 0&&v!=null&&c(t,["setup","generationConfig","seed"],v);const C=u(o,["speechConfig"]);t!==void 0&&C!=null&&c(t,["setup","generationConfig","speechConfig"],Bu(C));const T=u(o,["thinkingConfig"]);t!==void 0&&T!=null&&c(t,["setup","generationConfig","thinkingConfig"],T);const b=u(o,["enableAffectiveDialog"]);t!==void 0&&b!=null&&c(t,["setup","generationConfig","enableAffectiveDialog"],b);const k=u(o,["systemInstruction"]);t!==void 0&&k!=null&&c(t,["setup","systemInstruction"],Jb(st(k)));const N=u(o,["tools"]);if(t!==void 0&&N!=null){let ee=oi(N);Array.isArray(ee)&&(ee=ee.map(J=>o_(ni(J)))),c(t,["setup","tools"],ee)}const I=u(o,["sessionResumption"]);t!==void 0&&I!=null&&c(t,["setup","sessionResumption"],n_(I));const U=u(o,["inputAudioTranscription"]);t!==void 0&&U!=null&&c(t,["setup","inputAudioTranscription"],U);const q=u(o,["outputAudioTranscription"]);t!==void 0&&q!=null&&c(t,["setup","outputAudioTranscription"],q);const B=u(o,["realtimeInputConfig"]);t!==void 0&&B!=null&&c(t,["setup","realtimeInputConfig"],B);const X=u(o,["contextWindowCompression"]);t!==void 0&&X!=null&&c(t,["setup","contextWindowCompression"],X);const Q=u(o,["proactivity"]);if(t!==void 0&&Q!=null&&c(t,["setup","proactivity"],Q),u(o,["explicitVadSignal"])!==void 0)throw new Error("explicitVadSignal parameter is not supported in Gemini API.");return s}function e_(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["setup","model"],_e(o,a));const r=u(t,["config"]);return r!=null&&c(s,["config"],jb(r,s)),s}function t_(o){const t={},s=u(o,["mediaResolution"]);s!=null&&c(t,["mediaResolution"],s);const a=u(o,["codeExecutionResult"]);a!=null&&c(t,["codeExecutionResult"],a);const r=u(o,["executableCode"]);r!=null&&c(t,["executableCode"],r);const d=u(o,["fileData"]);d!=null&&c(t,["fileData"],Wb(d));const m=u(o,["functionCall"]);m!=null&&c(t,["functionCall"],Qb(m));const g=u(o,["functionResponse"]);g!=null&&c(t,["functionResponse"],g);const y=u(o,["inlineData"]);y!=null&&c(t,["inlineData"],Yb(y));const h=u(o,["text"]);h!=null&&c(t,["text"],h);const v=u(o,["thought"]);v!=null&&c(t,["thought"],v);const C=u(o,["thoughtSignature"]);C!=null&&c(t,["thoughtSignature"],C);const T=u(o,["videoMetadata"]);return T!=null&&c(t,["videoMetadata"],T),t}function n_(o){const t={},s=u(o,["handle"]);if(s!=null&&c(t,["handle"],s),u(o,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return t}function o_(o){const t={},s=u(o,["functionDeclarations"]);if(s!=null){let v=s;Array.isArray(v)&&(v=v.map(C=>C)),c(t,["functionDeclarations"],v)}if(u(o,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const a=u(o,["googleSearchRetrieval"]);a!=null&&c(t,["googleSearchRetrieval"],a);const r=u(o,["computerUse"]);r!=null&&c(t,["computerUse"],r);const d=u(o,["fileSearch"]);d!=null&&c(t,["fileSearch"],d);const m=u(o,["codeExecution"]);if(m!=null&&c(t,["codeExecution"],m),u(o,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const g=u(o,["googleMaps"]);g!=null&&c(t,["googleMaps"],$b(g));const y=u(o,["googleSearch"]);y!=null&&c(t,["googleSearch"],Zb(y));const h=u(o,["urlContext"]);return h!=null&&c(t,["urlContext"],h),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function i_(o){const t=[];for(const s in o)if(Object.prototype.hasOwnProperty.call(o,s)){const a=o[s];if(typeof a=="object"&&a!=null&&Object.keys(a).length>0){const r=Object.keys(a).map(d=>`${s}.${d}`);t.push(...r)}else t.push(s)}return t.join(",")}function s_(o,t){let s=null;const a=o.bidiGenerateContentSetup;if(typeof a=="object"&&a!==null&&"setup"in a){const d=a.setup;typeof d=="object"&&d!==null?(o.bidiGenerateContentSetup=d,s=d):delete o.bidiGenerateContentSetup}else a!==void 0&&delete o.bidiGenerateContentSetup;const r=o.fieldMask;if(s){const d=i_(s);if(Array.isArray(t==null?void 0:t.lockAdditionalFields)&&(t==null?void 0:t.lockAdditionalFields.length)===0)d?o.fieldMask=d:delete o.fieldMask;else if(t!=null&&t.lockAdditionalFields&&t.lockAdditionalFields.length>0&&r!==null&&Array.isArray(r)&&r.length>0){const m=["temperature","topK","topP","maxOutputTokens","responseModalities","seed","speechConfig"];let g=[];r.length>0&&(g=r.map(h=>m.includes(h)?`generationConfig.${h}`:h));const y=[];d&&y.push(d),g.length>0&&y.push(...g),y.length>0?o.fieldMask=y.join(","):delete o.fieldMask}else delete o.fieldMask}else r!==null&&Array.isArray(r)&&r.length>0?o.fieldMask=r.join(","):delete o.fieldMask;return o}class a_ extends gn{constructor(t){super(),this.apiClient=t}async create(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("The client.tokens.create method is only supported by the Gemini Developer API.");{const g=Xb(this.apiClient,t);d=Z("auth_tokens",g._url),m=g._query,delete g.config,delete g._url,delete g._query;const y=s_(g,t.config);return r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(y),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(h=>h.json()),r.then(h=>h)}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function l_(o,t){const s={},a=u(o,["force"]);return t!==void 0&&a!=null&&c(t,["_query","force"],a),s}function r_(o){const t={},s=u(o,["name"]);s!=null&&c(t,["_url","name"],s);const a=u(o,["config"]);return a!=null&&l_(a,t),t}function u_(o){const t={},s=u(o,["name"]);return s!=null&&c(t,["_url","name"],s),t}function c_(o,t){const s={},a=u(o,["pageSize"]);t!==void 0&&a!=null&&c(t,["_query","pageSize"],a);const r=u(o,["pageToken"]);return t!==void 0&&r!=null&&c(t,["_query","pageToken"],r),s}function d_(o){const t={},s=u(o,["parent"]);s!=null&&c(t,["_url","parent"],s);const a=u(o,["config"]);return a!=null&&c_(a,t),t}function p_(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["nextPageToken"]);a!=null&&c(t,["nextPageToken"],a);const r=u(o,["documents"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["documents"],d)}return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class f_ extends gn{constructor(t){super(),this.apiClient=t,this.list=async s=>new po(hn.PAGED_ITEM_DOCUMENTS,a=>this.listInternal({parent:s.parent,config:a.config}),await this.listInternal(s),s)}async get(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=u_(t);return d=Z("{name}",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>y)}}async delete(t){var s,a;let r="",d={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=r_(t);r=Z("{name}",m._url),d=m._query,delete m._url,delete m._query,await this.apiClient.request({path:r,queryParams:d,body:JSON.stringify(m),httpMethod:"DELETE",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal})}}async listInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=d_(t);return d=Z("{parent}/documents",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>{const h=p_(y),v=new JS;return Object.assign(v,h),v})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class m_ extends gn{constructor(t,s=new f_(t)){super(),this.apiClient=t,this.documents=s,this.list=async(a={})=>new po(hn.PAGED_ITEM_FILE_SEARCH_STORES,r=>this.listInternal(r),await this.listInternal(a),a)}async uploadToFileSearchStore(t){if(this.apiClient.isVertexAI())throw new Error("Vertex AI does not support uploading files to a file search store.");return this.apiClient.uploadFileToFileSearchStore(t.fileSearchStoreName,t.file,t.config)}async create(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=ib(t);return d=Z("fileSearchStores",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>y)}}async get(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=lb(t);return d=Z("{name}",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>y)}}async delete(t){var s,a;let r="",d={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=ab(t);r=Z("{name}",m._url),d=m._query,delete m._url,delete m._query,await this.apiClient.request({path:r,queryParams:d,body:JSON.stringify(m),httpMethod:"DELETE",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal})}}async listInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=fb(t);return d=Z("fileSearchStores",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>{const h=mb(y),v=new KS;return Object.assign(v,h),v})}}async uploadToFileSearchStoreInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=hb(t);return d=Z("upload/v1beta/{file_search_store_name}:uploadToFileSearchStore",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>{const h=gb(y),v=new XS;return Object.assign(v,h),v})}}async importFile(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=cb(t);return d=Z("{file_search_store_name}:importFile",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>{const h=ub(y),v=new ku;return Object.assign(v,h),v})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let mg=function(){const{crypto:o}=globalThis;if(o!=null&&o.randomUUID)return mg=o.randomUUID.bind(o),o.randomUUID();const t=new Uint8Array(1),s=o?()=>o.getRandomValues(t)[0]:()=>Math.random()*255&255;return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,a=>(+a^s()&15>>+a/4).toString(16))};const h_=()=>mg();/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function wu(o){return typeof o=="object"&&o!==null&&("name"in o&&o.name==="AbortError"||"message"in o&&String(o.message).includes("FetchRequestCanceledException"))}const Ru=o=>{if(o instanceof Error)return o;if(typeof o=="object"&&o!==null){try{if(Object.prototype.toString.call(o)==="[object Error]"){const t=new Error(o.message,o.cause?{cause:o.cause}:{});return o.stack&&(t.stack=o.stack),o.cause&&!t.cause&&(t.cause=o.cause),o.name&&(t.name=o.name),t}}catch{}try{return new Error(JSON.stringify(o))}catch{}}return new Error(o)};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ot extends Error{}class ut extends Ot{constructor(t,s,a,r){super(`${ut.makeMessage(t,s,a)}`),this.status=t,this.headers=r,this.error=s}static makeMessage(t,s,a){const r=s!=null&&s.message?typeof s.message=="string"?s.message:JSON.stringify(s.message):s?JSON.stringify(s):a;return t&&r?`${t} ${r}`:t?`${t} status code (no body)`:r||"(no status code or body)"}static generate(t,s,a,r){if(!t||!r)return new Ha({message:a,cause:Ru(s)});const d=s;return t===400?new gg(t,d,a,r):t===401?new yg(t,d,a,r):t===403?new vg(t,d,a,r):t===404?new Sg(t,d,a,r):t===409?new Cg(t,d,a,r):t===422?new Tg(t,d,a,r):t===429?new Ag(t,d,a,r):t>=500?new Eg(t,d,a,r):new ut(t,d,a,r)}}class Iu extends ut{constructor({message:t}={}){super(void 0,void 0,t||"Request was aborted.",void 0)}}class Ha extends ut{constructor({message:t,cause:s}){super(void 0,void 0,t||"Connection error.",void 0),s&&(this.cause=s)}}class hg extends Ha{constructor({message:t}={}){super({message:t??"Request timed out."})}}class gg extends ut{}class yg extends ut{}class vg extends ut{}class Sg extends ut{}class Cg extends ut{}class Tg extends ut{}class Ag extends ut{}class Eg extends ut{}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const g_=/^[a-z][a-z0-9+.-]*:/i,y_=o=>g_.test(o);let xu=o=>(xu=Array.isArray,xu(o));const v_=xu;let S_=v_;const xh=S_;function C_(o){if(!o)return!0;for(const t in o)return!1;return!0}function T_(o,t){return Object.prototype.hasOwnProperty.call(o,t)}const A_=(o,t)=>{if(typeof t!="number"||!Number.isInteger(t))throw new Ot(`${o} must be an integer`);if(t<0)throw new Ot(`${o} must be a positive integer`);return t},E_=o=>{try{return JSON.parse(o)}catch{return}};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const b_=o=>new Promise(t=>setTimeout(t,o));/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $o="0.0.1";/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function __(){return typeof Deno<"u"&&Deno.build!=null?"deno":typeof EdgeRuntime<"u"?"edge":Object.prototype.toString.call(typeof globalThis.process<"u"?globalThis.process:0)==="[object process]"?"node":"unknown"}const w_=()=>{var o,t,s,a,r;const d=__();if(d==="deno")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":$o,"X-Stainless-OS":Mh(Deno.build.os),"X-Stainless-Arch":Nh(Deno.build.arch),"X-Stainless-Runtime":"deno","X-Stainless-Runtime-Version":typeof Deno.version=="string"?Deno.version:(t=(o=Deno.version)===null||o===void 0?void 0:o.deno)!==null&&t!==void 0?t:"unknown"};if(typeof EdgeRuntime<"u")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":$o,"X-Stainless-OS":"Unknown","X-Stainless-Arch":`other:${EdgeRuntime}`,"X-Stainless-Runtime":"edge","X-Stainless-Runtime-Version":globalThis.process.version};if(d==="node")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":$o,"X-Stainless-OS":Mh((s=globalThis.process.platform)!==null&&s!==void 0?s:"unknown"),"X-Stainless-Arch":Nh((a=globalThis.process.arch)!==null&&a!==void 0?a:"unknown"),"X-Stainless-Runtime":"node","X-Stainless-Runtime-Version":(r=globalThis.process.version)!==null&&r!==void 0?r:"unknown"};const m=R_();return m?{"X-Stainless-Lang":"js","X-Stainless-Package-Version":$o,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":`browser:${m.browser}`,"X-Stainless-Runtime-Version":m.version}:{"X-Stainless-Lang":"js","X-Stainless-Package-Version":$o,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":"unknown","X-Stainless-Runtime-Version":"unknown"}};function R_(){if(typeof navigator>"u"||!navigator)return null;const o=[{key:"edge",pattern:/Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"chrome",pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"firefox",pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"safari",pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}];for(const{key:t,pattern:s}of o){const a=s.exec(navigator.userAgent);if(a){const r=a[1]||0,d=a[2]||0,m=a[3]||0;return{browser:t,version:`${r}.${d}.${m}`}}}return null}const Nh=o=>o==="x32"?"x32":o==="x86_64"||o==="x64"?"x64":o==="arm"?"arm":o==="aarch64"||o==="arm64"?"arm64":o?`other:${o}`:"unknown",Mh=o=>(o=o.toLowerCase(),o.includes("ios")?"iOS":o==="android"?"Android":o==="darwin"?"MacOS":o==="win32"?"Windows":o==="freebsd"?"FreeBSD":o==="openbsd"?"OpenBSD":o==="linux"?"Linux":o?`Other:${o}`:"Unknown");let Aa;const I_=()=>Aa??(Aa=w_());/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function x_(){if(typeof fetch<"u")return fetch;throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new GeminiNextGenAPIClient({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")}function bg(...o){const t=globalThis.ReadableStream;if(typeof t>"u")throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");return new t(...o)}function N_(o){let t=Symbol.asyncIterator in o?o[Symbol.asyncIterator]():o[Symbol.iterator]();return bg({start(){},async pull(s){const{done:a,value:r}=await t.next();a?s.close():s.enqueue(r)},async cancel(){var s;await((s=t.return)===null||s===void 0?void 0:s.call(t))}})}function _g(o){if(o[Symbol.asyncIterator])return o;const t=o.getReader();return{async next(){try{const s=await t.read();return s!=null&&s.done&&t.releaseLock(),s}catch(s){throw t.releaseLock(),s}},async return(){const s=t.cancel();return t.releaseLock(),await s,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}async function M_(o){var t,s;if(o===null||typeof o!="object")return;if(o[Symbol.asyncIterator]){await((s=(t=o[Symbol.asyncIterator]()).return)===null||s===void 0?void 0:s.call(t));return}const a=o.getReader(),r=a.cancel();a.releaseLock(),await r}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const P_=({headers:o,body:t})=>({bodyHeaders:{"content-type":"application/json"},body:JSON.stringify(t)});/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const wg=()=>{var o;if(typeof File>"u"){const{process:t}=globalThis,s=typeof((o=t==null?void 0:t.versions)===null||o===void 0?void 0:o.node)=="string"&&parseInt(t.versions.node.split("."))<20;throw new Error("`File` is not defined as a global, which is required for file uploads."+(s?" Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`.":""))}};function fu(o,t,s){return wg(),new File(o,t??"unknown_file",s)}function D_(o){return(typeof o=="object"&&o!==null&&("name"in o&&o.name&&String(o.name)||"url"in o&&o.url&&String(o.url)||"filename"in o&&o.filename&&String(o.filename)||"path"in o&&o.path&&String(o.path))||"").split(/[\\/]/).pop()||void 0}const k_=o=>o!=null&&typeof o=="object"&&typeof o[Symbol.asyncIterator]=="function";/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Rg=o=>o!=null&&typeof o=="object"&&typeof o.size=="number"&&typeof o.type=="string"&&typeof o.text=="function"&&typeof o.slice=="function"&&typeof o.arrayBuffer=="function",U_=o=>o!=null&&typeof o=="object"&&typeof o.name=="string"&&typeof o.lastModified=="number"&&Rg(o),L_=o=>o!=null&&typeof o=="object"&&typeof o.url=="string"&&typeof o.blob=="function";async function G_(o,t,s){if(wg(),o=await o,U_(o))return o instanceof File?o:fu([await o.arrayBuffer()],o.name);if(L_(o)){const r=await o.blob();return t||(t=new URL(o.url).pathname.split(/[\\/]/).pop()),fu(await Nu(r),t,s)}const a=await Nu(o);if(t||(t=D_(o)),!(s!=null&&s.type)){const r=a.find(d=>typeof d=="object"&&"type"in d&&d.type);typeof r=="string"&&(s=Object.assign(Object.assign({},s),{type:r}))}return fu(a,t,s)}async function Nu(o){var t,s,a,r,d;let m=[];if(typeof o=="string"||ArrayBuffer.isView(o)||o instanceof ArrayBuffer)m.push(o);else if(Rg(o))m.push(o instanceof Blob?o:await o.arrayBuffer());else if(k_(o))try{for(var g=!0,y=qt(o),h;h=await y.next(),t=h.done,!t;g=!0){r=h.value,g=!1;const v=r;m.push(...await Nu(v))}}catch(v){s={error:v}}finally{try{!g&&!t&&(a=y.return)&&await a.call(y)}finally{if(s)throw s.error}}else{const v=(d=o==null?void 0:o.constructor)===null||d===void 0?void 0:d.name;throw new Error(`Unexpected data type: ${typeof o}${v?`; constructor: ${v}`:""}${O_(o)}`)}return m}function O_(o){return typeof o!="object"||o===null?"":`; props: [${Object.getOwnPropertyNames(o).map(s=>`"${s}"`).join(", ")}]`}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ig{constructor(t){this._client=t}}Ig._key=[];/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function xg(o){return o.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g,encodeURIComponent)}const Ph=Object.freeze(Object.create(null)),B_=(o=xg)=>(function(s,...a){if(s.length===1)return s[0];let r=!1;const d=[],m=s.reduce((v,C,T)=>{var b,k,N;/[?#]/.test(C)&&(r=!0);const I=a[T];let U=(r?encodeURIComponent:o)(""+I);return T!==a.length&&(I==null||typeof I=="object"&&I.toString===((N=Object.getPrototypeOf((k=Object.getPrototypeOf((b=I.hasOwnProperty)!==null&&b!==void 0?b:Ph))!==null&&k!==void 0?k:Ph))===null||N===void 0?void 0:N.toString))&&(U=I+"",d.push({start:v.length+C.length,length:U.length,error:`Value of type ${Object.prototype.toString.call(I).slice(8,-1)} is not a valid path parameter`})),v+C+(T===a.length?"":U)},""),g=m.split(/[?#]/,1)[0],y=new RegExp("(?<=^|\\/)(?:\\.|%2e){1,2}(?=\\/|$)","gi");let h;for(;(h=y.exec(g))!==null;)d.push({start:h.index,length:h[0].length,error:`Value "${h[0]}" can't be safely passed as a path parameter`});if(d.sort((v,C)=>v.start-C.start),d.length>0){let v=0;const C=d.reduce((T,b)=>{const k=" ".repeat(b.start-v),N="^".repeat(b.length);return v=b.start+b.length,T+k+N},"");throw new Ot(`Path parameters result in path with invalid segments:
${d.map(T=>T.error).join(`
`)}
${m}
${C}`)}return m}),Ea=B_(xg);/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ng extends Ig{create(t,s){var a;const{api_version:r=this._client.apiVersion}=t,d=Da(t,["api_version"]);if("model"in d&&"agent_config"in d)throw new Ot("Invalid request: specified `model` and `agent_config`. If specifying `model`, use `generation_config`.");if("agent"in d&&"generation_config"in d)throw new Ot("Invalid request: specified `agent` and `generation_config`. If specifying `agent`, use `agent_config`.");return this._client.post(Ea`/${r}/interactions`,Object.assign(Object.assign({body:d},s),{stream:(a=t.stream)!==null&&a!==void 0?a:!1}))}delete(t,s={},a){const{api_version:r=this._client.apiVersion}=s??{};return this._client.delete(Ea`/${r}/interactions/${t}`,a)}cancel(t,s={},a){const{api_version:r=this._client.apiVersion}=s??{};return this._client.post(Ea`/${r}/interactions/${t}/cancel`,a)}get(t,s={},a){var r;const d=s??{},{api_version:m=this._client.apiVersion}=d,g=Da(d,["api_version"]);return this._client.get(Ea`/${m}/interactions/${t}`,Object.assign(Object.assign({query:g},a),{stream:(r=s==null?void 0:s.stream)!==null&&r!==void 0?r:!1}))}}Ng._key=Object.freeze(["interactions"]);class Mg extends Ng{}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function H_(o){let t=0;for(const r of o)t+=r.length;const s=new Uint8Array(t);let a=0;for(const r of o)s.set(r,a),a+=r.length;return s}let ba;function Fu(o){let t;return(ba??(t=new globalThis.TextEncoder,ba=t.encode.bind(t)))(o)}let _a;function Dh(o){let t;return(_a??(t=new globalThis.TextDecoder,_a=t.decode.bind(t)))(o)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Fa{constructor(){this.buffer=new Uint8Array,this.carriageReturnIndex=null}decode(t){if(t==null)return[];const s=t instanceof ArrayBuffer?new Uint8Array(t):typeof t=="string"?Fu(t):t;this.buffer=H_([this.buffer,s]);const a=[];let r;for(;(r=F_(this.buffer,this.carriageReturnIndex))!=null;){if(r.carriage&&this.carriageReturnIndex==null){this.carriageReturnIndex=r.index;continue}if(this.carriageReturnIndex!=null&&(r.index!==this.carriageReturnIndex+1||r.carriage)){a.push(Dh(this.buffer.subarray(0,this.carriageReturnIndex-1))),this.buffer=this.buffer.subarray(this.carriageReturnIndex),this.carriageReturnIndex=null;continue}const d=this.carriageReturnIndex!==null?r.preceding-1:r.preceding,m=Dh(this.buffer.subarray(0,d));a.push(m),this.buffer=this.buffer.subarray(r.index),this.carriageReturnIndex=null}return a}flush(){return this.buffer.length?this.decode(`
`):[]}}Fa.NEWLINE_CHARS=new Set([`
`,"\r"]);Fa.NEWLINE_REGEXP=/\r\n|[\n\r]/g;function F_(o,t){for(let r=t??0;r<o.length;r++){if(o[r]===10)return{preceding:r,index:r+1,carriage:!1};if(o[r]===13)return{preceding:r,index:r+1,carriage:!0}}return null}function V_(o){for(let a=0;a<o.length-1;a++){if(o[a]===10&&o[a+1]===10||o[a]===13&&o[a+1]===13)return a+2;if(o[a]===13&&o[a+1]===10&&a+3<o.length&&o[a+2]===13&&o[a+3]===10)return a+4}return-1}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ka={off:0,error:200,warn:300,info:400,debug:500},kh=(o,t,s)=>{if(o){if(T_(ka,o))return o;rt(s).warn(`${t} was set to ${JSON.stringify(o)}, expected one of ${JSON.stringify(Object.keys(ka))}`)}};function ns(){}function wa(o,t,s){return!t||ka[o]>ka[s]?ns:t[o].bind(t)}const q_={error:ns,warn:ns,info:ns,debug:ns};let Uh=new WeakMap;function rt(o){var t;const s=o.logger,a=(t=o.logLevel)!==null&&t!==void 0?t:"off";if(!s)return q_;const r=Uh.get(s);if(r&&r[0]===a)return r[1];const d={error:wa("error",s,a),warn:wa("warn",s,a),info:wa("info",s,a),debug:wa("debug",s,a)};return Uh.set(s,[a,d]),d}const co=o=>(o.options&&(o.options=Object.assign({},o.options),delete o.options.headers),o.headers&&(o.headers=Object.fromEntries((o.headers instanceof Headers?[...o.headers]:Object.entries(o.headers)).map(([t,s])=>[t,t.toLowerCase()==="x-goog-api-key"||t.toLowerCase()==="authorization"||t.toLowerCase()==="cookie"||t.toLowerCase()==="set-cookie"?"***":s]))),"retryOfRequestLogID"in o&&(o.retryOfRequestLogID&&(o.retryOf=o.retryOfRequestLogID),delete o.retryOfRequestLogID),o);/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class jo{constructor(t,s,a){this.iterator=t,this.controller=s,this.client=a}static fromSSEResponse(t,s,a){let r=!1;const d=a?rt(a):console;function m(){return Vt(this,arguments,function*(){var y,h,v,C;if(r)throw new Ot("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");r=!0;let T=!1;try{try{for(var b=!0,k=qt(z_(t,s)),N;N=yield re(k.next()),y=N.done,!y;b=!0){C=N.value,b=!1;const I=C;if(!T)if(I.data.startsWith("[DONE]")){T=!0;continue}else try{yield yield re(JSON.parse(I.data))}catch(U){throw d.error("Could not parse message into JSON:",I.data),d.error("From chunk:",I.raw),U}}}catch(I){h={error:I}}finally{try{!b&&!y&&(v=k.return)&&(yield re(v.call(k)))}finally{if(h)throw h.error}}T=!0}catch(I){if(wu(I))return yield re(void 0);throw I}finally{T||s.abort()}})}return new jo(m,s,a)}static fromReadableStream(t,s,a){let r=!1;function d(){return Vt(this,arguments,function*(){var y,h,v,C;const T=new Fa,b=_g(t);try{for(var k=!0,N=qt(b),I;I=yield re(N.next()),y=I.done,!y;k=!0){C=I.value,k=!1;const U=C;for(const q of T.decode(U))yield yield re(q)}}catch(U){h={error:U}}finally{try{!k&&!y&&(v=N.return)&&(yield re(v.call(N)))}finally{if(h)throw h.error}}for(const U of T.flush())yield yield re(U)})}function m(){return Vt(this,arguments,function*(){var y,h,v,C;if(r)throw new Ot("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");r=!0;let T=!1;try{try{for(var b=!0,k=qt(d()),N;N=yield re(k.next()),y=N.done,!y;b=!0){C=N.value,b=!1;const I=C;T||I&&(yield yield re(JSON.parse(I)))}}catch(I){h={error:I}}finally{try{!b&&!y&&(v=k.return)&&(yield re(v.call(k)))}finally{if(h)throw h.error}}T=!0}catch(I){if(wu(I))return yield re(void 0);throw I}finally{T||s.abort()}})}return new jo(m,s,a)}[Symbol.asyncIterator](){return this.iterator()}tee(){const t=[],s=[],a=this.iterator(),r=d=>({next:()=>{if(d.length===0){const m=a.next();t.push(m),s.push(m)}return d.shift()}});return[new jo(()=>r(t),this.controller,this.client),new jo(()=>r(s),this.controller,this.client)]}toReadableStream(){const t=this;let s;return bg({async start(){s=t[Symbol.asyncIterator]()},async pull(a){try{const{value:r,done:d}=await s.next();if(d)return a.close();const m=Fu(JSON.stringify(r)+`
`);a.enqueue(m)}catch(r){a.error(r)}},async cancel(){var a;await((a=s.return)===null||a===void 0?void 0:a.call(s))}})}}function z_(o,t){return Vt(this,arguments,function*(){var a,r,d,m;if(!o.body)throw t.abort(),typeof globalThis.navigator<"u"&&globalThis.navigator.product==="ReactNative"?new Ot("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api"):new Ot("Attempted to iterate over a response with no body");const g=new J_,y=new Fa,h=_g(o.body);try{for(var v=!0,C=qt(Y_(h)),T;T=yield re(C.next()),a=T.done,!a;v=!0){m=T.value,v=!1;const b=m;for(const k of y.decode(b)){const N=g.decode(k);N&&(yield yield re(N))}}}catch(b){r={error:b}}finally{try{!v&&!a&&(d=C.return)&&(yield re(d.call(C)))}finally{if(r)throw r.error}}for(const b of y.flush()){const k=g.decode(b);k&&(yield yield re(k))}})}function Y_(o){return Vt(this,arguments,function*(){var s,a,r,d;let m=new Uint8Array;try{for(var g=!0,y=qt(o),h;h=yield re(y.next()),s=h.done,!s;g=!0){d=h.value,g=!1;const v=d;if(v==null)continue;const C=v instanceof ArrayBuffer?new Uint8Array(v):typeof v=="string"?Fu(v):v;let T=new Uint8Array(m.length+C.length);T.set(m),T.set(C,m.length),m=T;let b;for(;(b=V_(m))!==-1;)yield yield re(m.slice(0,b)),m=m.slice(b)}}catch(v){a={error:v}}finally{try{!g&&!s&&(r=y.return)&&(yield re(r.call(y)))}finally{if(a)throw a.error}}m.length>0&&(yield yield re(m))})}class J_{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(t){if(t.endsWith("\r")&&(t=t.substring(0,t.length-1)),!t){if(!this.event&&!this.data.length)return null;const d={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],d}if(this.chunks.push(t),t.startsWith(":"))return null;let[s,a,r]=K_(t,":");return r.startsWith(" ")&&(r=r.substring(1)),s==="event"?this.event=r:s==="data"&&this.data.push(r),null}}function K_(o,t){const s=o.indexOf(t);return s!==-1?[o.substring(0,s),t,o.substring(s+t.length)]:[o,"",""]}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function X_(o,t){const{response:s,requestLogID:a,retryOfRequestLogID:r,startTime:d}=t,m=await(async()=>{var g;if(t.options.stream)return rt(o).debug("response",s.status,s.url,s.headers,s.body),t.options.__streamClass?t.options.__streamClass.fromSSEResponse(s,t.controller,o):jo.fromSSEResponse(s,t.controller,o);if(s.status===204)return null;if(t.options.__binaryResponse)return s;const y=s.headers.get("content-type"),h=(g=y==null?void 0:y.split(";")[0])===null||g===void 0?void 0:g.trim();return(h==null?void 0:h.includes("application/json"))||(h==null?void 0:h.endsWith("+json"))?await s.json():await s.text()})();return rt(o).debug(`[${a}] response parsed`,co({retryOfRequestLogID:r,url:s.url,status:s.status,body:m,durationMs:Date.now()-d})),m}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Vu extends Promise{constructor(t,s,a=X_){super(r=>{r(null)}),this.responsePromise=s,this.parseResponse=a,this.client=t}_thenUnwrap(t){return new Vu(this.client,this.responsePromise,async(s,a)=>t(await this.parseResponse(s,a),a))}asResponse(){return this.responsePromise.then(t=>t.response)}async withResponse(){const[t,s]=await Promise.all([this.parse(),this.asResponse()]);return{data:t,response:s}}parse(){return this.parsedPromise||(this.parsedPromise=this.responsePromise.then(t=>this.parseResponse(this.client,t))),this.parsedPromise}then(t,s){return this.parse().then(t,s)}catch(t){return this.parse().catch(t)}finally(t){return this.parse().finally(t)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Pg=Symbol("brand.privateNullableHeaders");function*W_(o){if(!o)return;if(Pg in o){const{values:a,nulls:r}=o;yield*a.entries();for(const d of r)yield[d,null];return}let t=!1,s;o instanceof Headers?s=o.entries():xh(o)?s=o:(t=!0,s=Object.entries(o??{}));for(let a of s){const r=a[0];if(typeof r!="string")throw new TypeError("expected header name to be a string");const d=xh(a[1])?a[1]:[a[1]];let m=!1;for(const g of d)g!==void 0&&(t&&!m&&(m=!0,yield[r,null]),yield[r,g])}}const ts=o=>{const t=new Headers,s=new Set;for(const a of o){const r=new Set;for(const[d,m]of W_(a)){const g=d.toLowerCase();r.has(g)||(t.delete(d),r.add(g)),m===null?(t.delete(d),s.add(g)):(t.append(d,m),s.delete(g))}}return{[Pg]:!0,values:t,nulls:s}};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const mu=o=>{var t,s,a,r,d,m;if(typeof globalThis.process<"u")return(a=(s=(t=TS)===null||t===void 0?void 0:t[o])===null||s===void 0?void 0:s.trim())!==null&&a!==void 0?a:void 0;if(typeof globalThis.Deno<"u")return(m=(d=(r=globalThis.Deno.env)===null||r===void 0?void 0:r.get)===null||d===void 0?void 0:d.call(r,o))===null||m===void 0?void 0:m.trim()};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Dg;class Va{constructor(t){var s,a,r,d,m,g,y,{baseURL:h=mu("GEMINI_NEXT_GEN_API_BASE_URL"),apiKey:v=(s=mu("GEMINI_API_KEY"))!==null&&s!==void 0?s:null,apiVersion:C="v1beta"}=t,T=Da(t,["baseURL","apiKey","apiVersion"]);const b=Object.assign(Object.assign({apiKey:v,apiVersion:C},T),{baseURL:h||"https://generativelanguage.googleapis.com"});this.baseURL=b.baseURL,this.timeout=(a=b.timeout)!==null&&a!==void 0?a:Va.DEFAULT_TIMEOUT,this.logger=(r=b.logger)!==null&&r!==void 0?r:console;const k="warn";this.logLevel=k,this.logLevel=(m=(d=kh(b.logLevel,"ClientOptions.logLevel",this))!==null&&d!==void 0?d:kh(mu("GEMINI_NEXT_GEN_API_LOG"),"process.env['GEMINI_NEXT_GEN_API_LOG']",this))!==null&&m!==void 0?m:k,this.fetchOptions=b.fetchOptions,this.maxRetries=(g=b.maxRetries)!==null&&g!==void 0?g:2,this.fetch=(y=b.fetch)!==null&&y!==void 0?y:x_(),this.encoder=P_,this._options=b,this.apiKey=v,this.apiVersion=C,this.clientAdapter=b.clientAdapter}withOptions(t){return new this.constructor(Object.assign(Object.assign(Object.assign({},this._options),{baseURL:this.baseURL,maxRetries:this.maxRetries,timeout:this.timeout,logger:this.logger,logLevel:this.logLevel,fetch:this.fetch,fetchOptions:this.fetchOptions,apiKey:this.apiKey,apiVersion:this.apiVersion}),t))}baseURLOverridden(){return this.baseURL!=="https://generativelanguage.googleapis.com"}defaultQuery(){return this._options.defaultQuery}validateHeaders({values:t,nulls:s}){if(!(t.has("authorization")||t.has("x-goog-api-key"))&&!(this.apiKey&&t.get("x-goog-api-key"))&&!s.has("x-goog-api-key"))throw new Error('Could not resolve authentication method. Expected the apiKey to be set. Or for the "x-goog-api-key" headers to be explicitly omitted')}async authHeaders(t){const s=ts([t.headers]);if(!(s.values.has("authorization")||s.values.has("x-goog-api-key"))){if(this.apiKey)return ts([{"x-goog-api-key":this.apiKey}]);if(this.clientAdapter.isVertexAI())return ts([await this.clientAdapter.getAuthHeaders()])}}stringifyQuery(t){return Object.entries(t).filter(([s,a])=>typeof a<"u").map(([s,a])=>{if(typeof a=="string"||typeof a=="number"||typeof a=="boolean")return`${encodeURIComponent(s)}=${encodeURIComponent(a)}`;if(a===null)return`${encodeURIComponent(s)}=`;throw new Ot(`Cannot stringify type ${typeof a}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)}).join("&")}getUserAgent(){return`${this.constructor.name}/JS ${$o}`}defaultIdempotencyKey(){return`stainless-node-retry-${h_()}`}makeStatusError(t,s,a,r){return ut.generate(t,s,a,r)}buildURL(t,s,a){const r=!this.baseURLOverridden()&&a||this.baseURL,d=y_(t)?new URL(t):new URL(r+(r.endsWith("/")&&t.startsWith("/")?t.slice(1):t)),m=this.defaultQuery();return C_(m)||(s=Object.assign(Object.assign({},m),s)),typeof s=="object"&&s&&!Array.isArray(s)&&(d.search=this.stringifyQuery(s)),d.toString()}async prepareOptions(t){if(this.clientAdapter&&this.clientAdapter.isVertexAI()&&!t.path.startsWith(`/${this.apiVersion}/projects/`)){const s=t.path.slice(this.apiVersion.length+1);t.path=`/${this.apiVersion}/projects/${this.clientAdapter.getProject()}/locations/${this.clientAdapter.getLocation()}${s}`}}async prepareRequest(t,{url:s,options:a}){}get(t,s){return this.methodRequest("get",t,s)}post(t,s){return this.methodRequest("post",t,s)}patch(t,s){return this.methodRequest("patch",t,s)}put(t,s){return this.methodRequest("put",t,s)}delete(t,s){return this.methodRequest("delete",t,s)}methodRequest(t,s,a){return this.request(Promise.resolve(a).then(r=>Object.assign({method:t,path:s},r)))}request(t,s=null){return new Vu(this,this.makeRequest(t,s,void 0))}async makeRequest(t,s,a){var r,d,m;const g=await t,y=(r=g.maxRetries)!==null&&r!==void 0?r:this.maxRetries;s==null&&(s=y),await this.prepareOptions(g);const{req:h,url:v,timeout:C}=await this.buildRequest(g,{retryCount:y-s});await this.prepareRequest(h,{url:v,options:g});const T="log_"+(Math.random()*(1<<24)|0).toString(16).padStart(6,"0"),b=a===void 0?"":`, retryOf: ${a}`,k=Date.now();if(rt(this).debug(`[${T}] sending request`,co({retryOfRequestLogID:a,method:g.method,url:v,options:g,headers:h.headers})),!((d=g.signal)===null||d===void 0)&&d.aborted)throw new Iu;const N=new AbortController,I=await this.fetchWithTimeout(v,h,C,N).catch(Ru),U=Date.now();if(I instanceof globalThis.Error){const B=`retrying, ${s} attempts remaining`;if(!((m=g.signal)===null||m===void 0)&&m.aborted)throw new Iu;const X=wu(I)||/timed? ?out/i.test(String(I)+("cause"in I?String(I.cause):""));if(s)return rt(this).info(`[${T}] connection ${X?"timed out":"failed"} - ${B}`),rt(this).debug(`[${T}] connection ${X?"timed out":"failed"} (${B})`,co({retryOfRequestLogID:a,url:v,durationMs:U-k,message:I.message})),this.retryRequest(g,s,a??T);throw rt(this).info(`[${T}] connection ${X?"timed out":"failed"} - error; no more retries left`),rt(this).debug(`[${T}] connection ${X?"timed out":"failed"} (error; no more retries left)`,co({retryOfRequestLogID:a,url:v,durationMs:U-k,message:I.message})),X?new hg:new Ha({cause:I})}const q=`[${T}${b}] ${h.method} ${v} ${I.ok?"succeeded":"failed"} with status ${I.status} in ${U-k}ms`;if(!I.ok){const B=await this.shouldRetry(I);if(s&&B){const z=`retrying, ${s} attempts remaining`;return await M_(I.body),rt(this).info(`${q} - ${z}`),rt(this).debug(`[${T}] response error (${z})`,co({retryOfRequestLogID:a,url:I.url,status:I.status,headers:I.headers,durationMs:U-k})),this.retryRequest(g,s,a??T,I.headers)}const X=B?"error; no more retries left":"error; not retryable";rt(this).info(`${q} - ${X}`);const Q=await I.text().catch(z=>Ru(z).message),ee=E_(Q),J=ee?void 0:Q;throw rt(this).debug(`[${T}] response error (${X})`,co({retryOfRequestLogID:a,url:I.url,status:I.status,headers:I.headers,message:J,durationMs:Date.now()-k})),this.makeStatusError(I.status,ee,J,I.headers)}return rt(this).info(q),rt(this).debug(`[${T}] response start`,co({retryOfRequestLogID:a,url:I.url,status:I.status,headers:I.headers,durationMs:U-k})),{response:I,options:g,controller:N,requestLogID:T,retryOfRequestLogID:a,startTime:k}}async fetchWithTimeout(t,s,a,r){const d=s||{},{signal:m,method:g}=d,y=Da(d,["signal","method"]);m&&m.addEventListener("abort",()=>r.abort());const h=setTimeout(()=>r.abort(),a),v=globalThis.ReadableStream&&y.body instanceof globalThis.ReadableStream||typeof y.body=="object"&&y.body!==null&&Symbol.asyncIterator in y.body,C=Object.assign(Object.assign(Object.assign({signal:r.signal},v?{duplex:"half"}:{}),{method:"GET"}),y);g&&(C.method=g.toUpperCase());try{return await this.fetch.call(void 0,t,C)}finally{clearTimeout(h)}}async shouldRetry(t){const s=t.headers.get("x-should-retry");return s==="true"?!0:s==="false"?!1:t.status===408||t.status===409||t.status===429||t.status>=500}async retryRequest(t,s,a,r){var d;let m;const g=r==null?void 0:r.get("retry-after-ms");if(g){const h=parseFloat(g);Number.isNaN(h)||(m=h)}const y=r==null?void 0:r.get("retry-after");if(y&&!m){const h=parseFloat(y);Number.isNaN(h)?m=Date.parse(y)-Date.now():m=h*1e3}if(!(m&&0<=m&&m<60*1e3)){const h=(d=t.maxRetries)!==null&&d!==void 0?d:this.maxRetries;m=this.calculateDefaultRetryTimeoutMillis(s,h)}return await b_(m),this.makeRequest(t,s-1,a)}calculateDefaultRetryTimeoutMillis(t,s){const d=s-t,m=Math.min(.5*Math.pow(2,d),8),g=1-Math.random()*.25;return m*g*1e3}async buildRequest(t,{retryCount:s=0}={}){var a,r,d;const m=Object.assign({},t),{method:g,path:y,query:h,defaultBaseURL:v}=m,C=this.buildURL(y,h,v);"timeout"in m&&A_("timeout",m.timeout),m.timeout=(a=m.timeout)!==null&&a!==void 0?a:this.timeout;const{bodyHeaders:T,body:b}=this.buildBody({options:m}),k=await this.buildHeaders({options:t,method:g,bodyHeaders:T,retryCount:s});return{req:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({method:g,headers:k},m.signal&&{signal:m.signal}),globalThis.ReadableStream&&b instanceof globalThis.ReadableStream&&{duplex:"half"}),b&&{body:b}),(r=this.fetchOptions)!==null&&r!==void 0?r:{}),(d=m.fetchOptions)!==null&&d!==void 0?d:{}),url:C,timeout:m.timeout}}async buildHeaders({options:t,method:s,bodyHeaders:a,retryCount:r}){let d={};this.idempotencyHeader&&s!=="get"&&(t.idempotencyKey||(t.idempotencyKey=this.defaultIdempotencyKey()),d[this.idempotencyHeader]=t.idempotencyKey);const m=await this.authHeaders(t);let g=ts([d,Object.assign(Object.assign({Accept:"application/json","User-Agent":this.getUserAgent(),"X-Stainless-Retry-Count":String(r)},t.timeout?{"X-Stainless-Timeout":String(Math.trunc(t.timeout/1e3))}:{}),I_()),this._options.defaultHeaders,a,t.headers,m]);return this.validateHeaders(g),g.values}buildBody({options:{body:t,headers:s}}){if(!t)return{bodyHeaders:void 0,body:void 0};const a=ts([s]);return ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof DataView||typeof t=="string"&&a.values.has("content-type")||globalThis.Blob&&t instanceof globalThis.Blob||t instanceof FormData||t instanceof URLSearchParams||globalThis.ReadableStream&&t instanceof globalThis.ReadableStream?{bodyHeaders:void 0,body:t}:typeof t=="object"&&(Symbol.asyncIterator in t||Symbol.iterator in t&&"next"in t&&typeof t.next=="function")?{bodyHeaders:void 0,body:N_(t)}:this.encoder({body:t,headers:a})}}Va.DEFAULT_TIMEOUT=6e4;class Ze extends Va{constructor(){super(...arguments),this.interactions=new Mg(this)}}Dg=Ze;Ze.GeminiNextGenAPIClient=Dg;Ze.GeminiNextGenAPIClientError=Ot;Ze.APIError=ut;Ze.APIConnectionError=Ha;Ze.APIConnectionTimeoutError=hg;Ze.APIUserAbortError=Iu;Ze.NotFoundError=Sg;Ze.ConflictError=Cg;Ze.RateLimitError=Ag;Ze.BadRequestError=gg;Ze.AuthenticationError=yg;Ze.InternalServerError=Eg;Ze.PermissionDeniedError=vg;Ze.UnprocessableEntityError=Tg;Ze.toFile=G_;Ze.Interactions=Mg;/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Q_(o,t){const s={},a=u(o,["name"]);return a!=null&&c(s,["_url","name"],a),s}function $_(o,t){const s={},a=u(o,["name"]);return a!=null&&c(s,["_url","name"],a),s}function Z_(o,t){const s={},a=u(o,["sdkHttpResponse"]);return a!=null&&c(s,["sdkHttpResponse"],a),s}function j_(o,t){const s={},a=u(o,["sdkHttpResponse"]);return a!=null&&c(s,["sdkHttpResponse"],a),s}function ew(o,t,s){const a={};if(u(o,["validationDataset"])!==void 0)throw new Error("validationDataset parameter is not supported in Gemini API.");const r=u(o,["tunedModelDisplayName"]);if(t!==void 0&&r!=null&&c(t,["displayName"],r),u(o,["description"])!==void 0)throw new Error("description parameter is not supported in Gemini API.");const d=u(o,["epochCount"]);t!==void 0&&d!=null&&c(t,["tuningTask","hyperparameters","epochCount"],d);const m=u(o,["learningRateMultiplier"]);if(m!=null&&c(a,["tuningTask","hyperparameters","learningRateMultiplier"],m),u(o,["exportLastCheckpointOnly"])!==void 0)throw new Error("exportLastCheckpointOnly parameter is not supported in Gemini API.");if(u(o,["preTunedModelCheckpointId"])!==void 0)throw new Error("preTunedModelCheckpointId parameter is not supported in Gemini API.");if(u(o,["adapterSize"])!==void 0)throw new Error("adapterSize parameter is not supported in Gemini API.");const g=u(o,["batchSize"]);t!==void 0&&g!=null&&c(t,["tuningTask","hyperparameters","batchSize"],g);const y=u(o,["learningRate"]);if(t!==void 0&&y!=null&&c(t,["tuningTask","hyperparameters","learningRate"],y),u(o,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");if(u(o,["beta"])!==void 0)throw new Error("beta parameter is not supported in Gemini API.");return a}function tw(o,t,s){const a={};let r=u(s,["config","method"]);if(r===void 0&&(r="SUPERVISED_FINE_TUNING"),r==="SUPERVISED_FINE_TUNING"){const b=u(o,["validationDataset"]);t!==void 0&&b!=null&&c(t,["supervisedTuningSpec"],Lh(b))}else if(r==="PREFERENCE_TUNING"){const b=u(o,["validationDataset"]);t!==void 0&&b!=null&&c(t,["preferenceOptimizationSpec"],Lh(b))}const d=u(o,["tunedModelDisplayName"]);t!==void 0&&d!=null&&c(t,["tunedModelDisplayName"],d);const m=u(o,["description"]);t!==void 0&&m!=null&&c(t,["description"],m);let g=u(s,["config","method"]);if(g===void 0&&(g="SUPERVISED_FINE_TUNING"),g==="SUPERVISED_FINE_TUNING"){const b=u(o,["epochCount"]);t!==void 0&&b!=null&&c(t,["supervisedTuningSpec","hyperParameters","epochCount"],b)}else if(g==="PREFERENCE_TUNING"){const b=u(o,["epochCount"]);t!==void 0&&b!=null&&c(t,["preferenceOptimizationSpec","hyperParameters","epochCount"],b)}let y=u(s,["config","method"]);if(y===void 0&&(y="SUPERVISED_FINE_TUNING"),y==="SUPERVISED_FINE_TUNING"){const b=u(o,["learningRateMultiplier"]);t!==void 0&&b!=null&&c(t,["supervisedTuningSpec","hyperParameters","learningRateMultiplier"],b)}else if(y==="PREFERENCE_TUNING"){const b=u(o,["learningRateMultiplier"]);t!==void 0&&b!=null&&c(t,["preferenceOptimizationSpec","hyperParameters","learningRateMultiplier"],b)}let h=u(s,["config","method"]);if(h===void 0&&(h="SUPERVISED_FINE_TUNING"),h==="SUPERVISED_FINE_TUNING"){const b=u(o,["exportLastCheckpointOnly"]);t!==void 0&&b!=null&&c(t,["supervisedTuningSpec","exportLastCheckpointOnly"],b)}else if(h==="PREFERENCE_TUNING"){const b=u(o,["exportLastCheckpointOnly"]);t!==void 0&&b!=null&&c(t,["preferenceOptimizationSpec","exportLastCheckpointOnly"],b)}let v=u(s,["config","method"]);if(v===void 0&&(v="SUPERVISED_FINE_TUNING"),v==="SUPERVISED_FINE_TUNING"){const b=u(o,["adapterSize"]);t!==void 0&&b!=null&&c(t,["supervisedTuningSpec","hyperParameters","adapterSize"],b)}else if(v==="PREFERENCE_TUNING"){const b=u(o,["adapterSize"]);t!==void 0&&b!=null&&c(t,["preferenceOptimizationSpec","hyperParameters","adapterSize"],b)}if(u(o,["batchSize"])!==void 0)throw new Error("batchSize parameter is not supported in Vertex AI.");if(u(o,["learningRate"])!==void 0)throw new Error("learningRate parameter is not supported in Vertex AI.");const C=u(o,["labels"]);t!==void 0&&C!=null&&c(t,["labels"],C);const T=u(o,["beta"]);return t!==void 0&&T!=null&&c(t,["preferenceOptimizationSpec","hyperParameters","beta"],T),a}function nw(o,t){const s={},a=u(o,["baseModel"]);a!=null&&c(s,["baseModel"],a);const r=u(o,["preTunedModel"]);r!=null&&c(s,["preTunedModel"],r);const d=u(o,["trainingDataset"]);d!=null&&fw(d);const m=u(o,["config"]);return m!=null&&ew(m,s),s}function ow(o,t){const s={},a=u(o,["baseModel"]);a!=null&&c(s,["baseModel"],a);const r=u(o,["preTunedModel"]);r!=null&&c(s,["preTunedModel"],r);const d=u(o,["trainingDataset"]);d!=null&&mw(d,s,t);const m=u(o,["config"]);return m!=null&&tw(m,s,t),s}function iw(o,t){const s={},a=u(o,["name"]);return a!=null&&c(s,["_url","name"],a),s}function sw(o,t){const s={},a=u(o,["name"]);return a!=null&&c(s,["_url","name"],a),s}function aw(o,t,s){const a={},r=u(o,["pageSize"]);t!==void 0&&r!=null&&c(t,["_query","pageSize"],r);const d=u(o,["pageToken"]);t!==void 0&&d!=null&&c(t,["_query","pageToken"],d);const m=u(o,["filter"]);return t!==void 0&&m!=null&&c(t,["_query","filter"],m),a}function lw(o,t,s){const a={},r=u(o,["pageSize"]);t!==void 0&&r!=null&&c(t,["_query","pageSize"],r);const d=u(o,["pageToken"]);t!==void 0&&d!=null&&c(t,["_query","pageToken"],d);const m=u(o,["filter"]);return t!==void 0&&m!=null&&c(t,["_query","filter"],m),a}function rw(o,t){const s={},a=u(o,["config"]);return a!=null&&aw(a,s),s}function uw(o,t){const s={},a=u(o,["config"]);return a!=null&&lw(a,s),s}function cw(o,t){const s={},a=u(o,["sdkHttpResponse"]);a!=null&&c(s,["sdkHttpResponse"],a);const r=u(o,["nextPageToken"]);r!=null&&c(s,["nextPageToken"],r);const d=u(o,["tunedModels"]);if(d!=null){let m=d;Array.isArray(m)&&(m=m.map(g=>kg(g))),c(s,["tuningJobs"],m)}return s}function dw(o,t){const s={},a=u(o,["sdkHttpResponse"]);a!=null&&c(s,["sdkHttpResponse"],a);const r=u(o,["nextPageToken"]);r!=null&&c(s,["nextPageToken"],r);const d=u(o,["tuningJobs"]);if(d!=null){let m=d;Array.isArray(m)&&(m=m.map(g=>Mu(g))),c(s,["tuningJobs"],m)}return s}function pw(o,t){const s={},a=u(o,["name"]);a!=null&&c(s,["model"],a);const r=u(o,["name"]);return r!=null&&c(s,["endpoint"],r),s}function fw(o,t){const s={};if(u(o,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(u(o,["vertexDatasetResource"])!==void 0)throw new Error("vertexDatasetResource parameter is not supported in Gemini API.");const a=u(o,["examples"]);if(a!=null){let r=a;Array.isArray(r)&&(r=r.map(d=>d)),c(s,["examples","examples"],r)}return s}function mw(o,t,s){const a={};let r=u(s,["config","method"]);if(r===void 0&&(r="SUPERVISED_FINE_TUNING"),r==="SUPERVISED_FINE_TUNING"){const m=u(o,["gcsUri"]);t!==void 0&&m!=null&&c(t,["supervisedTuningSpec","trainingDatasetUri"],m)}else if(r==="PREFERENCE_TUNING"){const m=u(o,["gcsUri"]);t!==void 0&&m!=null&&c(t,["preferenceOptimizationSpec","trainingDatasetUri"],m)}let d=u(s,["config","method"]);if(d===void 0&&(d="SUPERVISED_FINE_TUNING"),d==="SUPERVISED_FINE_TUNING"){const m=u(o,["vertexDatasetResource"]);t!==void 0&&m!=null&&c(t,["supervisedTuningSpec","trainingDatasetUri"],m)}else if(d==="PREFERENCE_TUNING"){const m=u(o,["vertexDatasetResource"]);t!==void 0&&m!=null&&c(t,["preferenceOptimizationSpec","trainingDatasetUri"],m)}if(u(o,["examples"])!==void 0)throw new Error("examples parameter is not supported in Vertex AI.");return a}function kg(o,t){const s={},a=u(o,["sdkHttpResponse"]);a!=null&&c(s,["sdkHttpResponse"],a);const r=u(o,["name"]);r!=null&&c(s,["name"],r);const d=u(o,["state"]);d!=null&&c(s,["state"],Qh(d));const m=u(o,["createTime"]);m!=null&&c(s,["createTime"],m);const g=u(o,["tuningTask","startTime"]);g!=null&&c(s,["startTime"],g);const y=u(o,["tuningTask","completeTime"]);y!=null&&c(s,["endTime"],y);const h=u(o,["updateTime"]);h!=null&&c(s,["updateTime"],h);const v=u(o,["description"]);v!=null&&c(s,["description"],v);const C=u(o,["baseModel"]);C!=null&&c(s,["baseModel"],C);const T=u(o,["_self"]);return T!=null&&c(s,["tunedModel"],pw(T)),s}function Mu(o,t){const s={},a=u(o,["sdkHttpResponse"]);a!=null&&c(s,["sdkHttpResponse"],a);const r=u(o,["name"]);r!=null&&c(s,["name"],r);const d=u(o,["state"]);d!=null&&c(s,["state"],Qh(d));const m=u(o,["createTime"]);m!=null&&c(s,["createTime"],m);const g=u(o,["startTime"]);g!=null&&c(s,["startTime"],g);const y=u(o,["endTime"]);y!=null&&c(s,["endTime"],y);const h=u(o,["updateTime"]);h!=null&&c(s,["updateTime"],h);const v=u(o,["error"]);v!=null&&c(s,["error"],v);const C=u(o,["description"]);C!=null&&c(s,["description"],C);const T=u(o,["baseModel"]);T!=null&&c(s,["baseModel"],T);const b=u(o,["tunedModel"]);b!=null&&c(s,["tunedModel"],b);const k=u(o,["preTunedModel"]);k!=null&&c(s,["preTunedModel"],k);const N=u(o,["supervisedTuningSpec"]);N!=null&&c(s,["supervisedTuningSpec"],N);const I=u(o,["preferenceOptimizationSpec"]);I!=null&&c(s,["preferenceOptimizationSpec"],I);const U=u(o,["tuningDataStats"]);U!=null&&c(s,["tuningDataStats"],U);const q=u(o,["encryptionSpec"]);q!=null&&c(s,["encryptionSpec"],q);const B=u(o,["partnerModelTuningSpec"]);B!=null&&c(s,["partnerModelTuningSpec"],B);const X=u(o,["customBaseModel"]);X!=null&&c(s,["customBaseModel"],X);const Q=u(o,["experiment"]);Q!=null&&c(s,["experiment"],Q);const ee=u(o,["labels"]);ee!=null&&c(s,["labels"],ee);const J=u(o,["outputUri"]);J!=null&&c(s,["outputUri"],J);const $=u(o,["pipelineJob"]);$!=null&&c(s,["pipelineJob"],$);const z=u(o,["serviceAccount"]);z!=null&&c(s,["serviceAccount"],z);const le=u(o,["tunedModelDisplayName"]);le!=null&&c(s,["tunedModelDisplayName"],le);const me=u(o,["veoTuningSpec"]);return me!=null&&c(s,["veoTuningSpec"],me),s}function hw(o,t){const s={},a=u(o,["sdkHttpResponse"]);a!=null&&c(s,["sdkHttpResponse"],a);const r=u(o,["name"]);r!=null&&c(s,["name"],r);const d=u(o,["metadata"]);d!=null&&c(s,["metadata"],d);const m=u(o,["done"]);m!=null&&c(s,["done"],m);const g=u(o,["error"]);return g!=null&&c(s,["error"],g),s}function Lh(o,t){const s={},a=u(o,["gcsUri"]);a!=null&&c(s,["validationDatasetUri"],a);const r=u(o,["vertexDatasetResource"]);return r!=null&&c(s,["validationDatasetUri"],r),s}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class gw extends gn{constructor(t){super(),this.apiClient=t,this.list=async(s={})=>new po(hn.PAGED_ITEM_TUNING_JOBS,a=>this.listInternal(a),await this.listInternal(s),s),this.get=async s=>await this.getInternal(s),this.tune=async s=>{var a;if(this.apiClient.isVertexAI())if(s.baseModel.startsWith("projects/")){const r={tunedModelName:s.baseModel};!((a=s.config)===null||a===void 0)&&a.preTunedModelCheckpointId&&(r.checkpointId=s.config.preTunedModelCheckpointId);const d=Object.assign(Object.assign({},s),{preTunedModel:r});return d.baseModel=void 0,await this.tuneInternal(d)}else{const r=Object.assign({},s);return await this.tuneInternal(r)}else{const r=Object.assign({},s),d=await this.tuneMldevInternal(r);let m="";return d.metadata!==void 0&&d.metadata.tunedModel!==void 0?m=d.metadata.tunedModel:d.name!==void 0&&d.name.includes("/operations/")&&(m=d.name.split("/operations/")[0]),{name:m,state:Su.JOB_STATE_QUEUED}}}}async getInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=sw(t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>Mu(v))}else{const h=iw(t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>kg(v))}}async listInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=uw(t);return g=Z("tuningJobs",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=dw(v),T=new rh;return Object.assign(T,C),T})}else{const h=rw(t);return g=Z("tunedModels",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=cw(v),T=new rh;return Object.assign(T,C),T})}}async cancel(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=$_(t);return g=Z("{name}:cancel",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=j_(v),T=new uh;return Object.assign(T,C),T})}else{const h=Q_(t);return g=Z("{name}:cancel",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(C=>{const T=C;return T.sdkHttpResponse={headers:v.headers},T})),m.then(v=>{const C=Z_(v),T=new uh;return Object.assign(T,C),T})}}async tuneInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI()){const g=ow(t,t);return d=Z("tuningJobs",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json().then(h=>{const v=h;return v.sdkHttpResponse={headers:y.headers},v})),r.then(y=>Mu(y))}else throw new Error("This method is only supported by the Vertex AI.")}async tuneMldevInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=nw(t);return d=Z("tunedModels",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json().then(h=>{const v=h;return v.sdkHttpResponse={headers:y.headers},v})),r.then(y=>hw(y))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class yw{async download(t,s){throw new Error("Download to file is not supported in the browser, please use a browser compliant download like an <a> tag.")}}const vw=1024*1024*8,Sw=3,Cw=1e3,Tw=2,Ua="x-goog-upload-status";async function Aw(o,t,s){var a;const r=await Ug(o,t,s),d=await(r==null?void 0:r.json());if(((a=r==null?void 0:r.headers)===null||a===void 0?void 0:a[Ua])!=="final")throw new Error("Failed to upload file: Upload status is not finalized.");return d.file}async function Ew(o,t,s){var a;const r=await Ug(o,t,s),d=await(r==null?void 0:r.json());if(((a=r==null?void 0:r.headers)===null||a===void 0?void 0:a[Ua])!=="final")throw new Error("Failed to upload file: Upload status is not finalized.");const m=zh(d),g=new Uu;return Object.assign(g,m),g}async function Ug(o,t,s){var a,r;let d=0,m=0,g=new Cu(new Response),y="upload";for(d=o.size;m<d;){const h=Math.min(vw,d-m),v=o.slice(m,m+h);m+h>=d&&(y+=", finalize");let C=0,T=Cw;for(;C<Sw&&(g=await s.request({path:"",body:v,httpMethod:"POST",httpOptions:{apiVersion:"",baseUrl:t,headers:{"X-Goog-Upload-Command":y,"X-Goog-Upload-Offset":String(m),"Content-Length":String(h)}}}),!(!((a=g==null?void 0:g.headers)===null||a===void 0)&&a[Ua]));)C++,await _w(T),T=T*Tw;if(m+=h,((r=g==null?void 0:g.headers)===null||r===void 0?void 0:r[Ua])!=="active")break;if(d<=m)throw new Error("All content has been uploaded, but the upload status is not finalized.")}return g}async function bw(o){return{size:o.size,type:o.type}}function _w(o){return new Promise(t=>setTimeout(t,o))}class ww{async upload(t,s,a){if(typeof t=="string")throw new Error("File path is not supported in browser uploader.");return await Aw(t,s,a)}async uploadToFileSearchStore(t,s,a){if(typeof t=="string")throw new Error("File path is not supported in browser uploader.");return await Ew(t,s,a)}async stat(t){if(typeof t=="string")throw new Error("File path is not supported in browser uploader.");return await bw(t)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Rw{create(t,s,a){return new Iw(t,s,a)}}class Iw{constructor(t,s,a){this.url=t,this.headers=s,this.callbacks=a}connect(){this.ws=new WebSocket(this.url),this.ws.onopen=this.callbacks.onopen,this.ws.onerror=this.callbacks.onerror,this.ws.onclose=this.callbacks.onclose,this.ws.onmessage=this.callbacks.onmessage}send(t){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.send(t)}close(){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.close()}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Gh="x-goog-api-key";class xw{constructor(t){this.apiKey=t}async addAuthHeaders(t,s){if(t.get(Gh)===null){if(this.apiKey.startsWith("auth_tokens/"))throw new Error("Ephemeral tokens are only supported by the live API.");if(!this.apiKey)throw new Error("API key is missing. Please provide a valid API key.");t.append(Gh,this.apiKey)}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Nw="gl-node/";class Mw{get interactions(){if(this._interactions!==void 0)return this._interactions;console.warn("GoogleGenAI.interactions: Interactions usage is experimental and may change in future versions.");const t=this.httpOptions;t!=null&&t.extraBody&&console.warn("GoogleGenAI.interactions: Client level httpOptions.extraBody is not supported by the interactions client and will be ignored.");const s=new Ze({baseURL:this.apiClient.getBaseUrl(),apiKey:this.apiKey,apiVersion:this.apiClient.getApiVersion(),clientAdapter:this.apiClient,defaultHeaders:this.apiClient.getDefaultHeaders(),timeout:t==null?void 0:t.timeout});return this._interactions=s.interactions,this._interactions}constructor(t){var s;if(t.apiKey==null)throw new Error("An API Key must be set when running in a browser");if(t.project||t.location)throw new Error("Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location.");this.vertexai=(s=t.vertexai)!==null&&s!==void 0?s:!1,this.apiKey=t.apiKey;const a=_S(t.httpOptions,t.vertexai,void 0,void 0);a&&(t.httpOptions?t.httpOptions.baseUrl=a:t.httpOptions={baseUrl:a}),this.apiVersion=t.apiVersion,this.httpOptions=t.httpOptions;const r=new xw(this.apiKey);this.apiClient=new bb({auth:r,apiVersion:this.apiVersion,apiKey:this.apiKey,vertexai:this.vertexai,httpOptions:this.httpOptions,userAgentExtra:Nw+"web",uploader:new ww,downloader:new yw}),this.models=new qb(this.apiClient),this.live=new Gb(this.apiClient,r,new Rw),this.batches=new eT(this.apiClient),this.chats=new UT(this.models,this.apiClient),this.caches=new PT(this.apiClient),this.files=new YT(this.apiClient),this.operations=new zb(this.apiClient),this.authTokens=new a_(this.apiClient),this.tunings=new gw(this.apiClient),this.fileSearchStores=new m_(this.apiClient)}}const Pw=async o=>{const t=new Mw({apiKey:"PLACEHOLDER_API_KEY"}),a=`
    You are the BookHere Technical Support Assistant. 
    BookHere is a React Native mobile app for property rentals using WordPress (Homey Theme) as a backend.
    
    Use the following documentation context to answer the user's questions accurately:
    ${Object.values(Wt).map(r=>{let d=`Section: ${r.title}
Content: ${r.content||""}`;return r.subItems&&Object.values(r.subItems).forEach(m=>{d+=`

Sub-section: ${m.title}
Content: ${m.content}`}),d}).join(`

---

`)}
    
    Guidelines:
    1. Only answer questions related to BookHere and the provided documentation.
    2. If the answer is not in the docs, politely state that you don't have that information but can help with installation or setup.
    3. Keep answers concise, helpful, and technically accurate.
    4. Format your response using clean Markdown.
  `;try{return(await t.models.generateContent({model:"gemini-3-flash-preview",contents:o,config:{systemInstruction:a,temperature:.7}})).text||"I'm sorry, I couldn't generate a response at this time."}catch(r){return console.error("Gemini API Error:",r),"An error occurred while connecting to the AI assistant. Please try again later."}},Dw=({isOpen:o,onClose:t})=>{const[s,a]=Se.useState([{role:"assistant",content:"Hello! I'm your BookHere technical assistant. How can I help you set up your property rental app today?"}]),[r,d]=Se.useState(""),[m,g]=Se.useState(!1),y=Se.useRef(null),h=Se.useRef(null),v=Se.useRef(null);Se.useEffect(()=>{y.current&&(y.current.scrollTop=y.current.scrollHeight)},[s]),Se.useEffect(()=>{o&&h.current&&h.current.focus()},[o]),Se.useEffect(()=>{if(!o)return;const T=b=>{b.key==="Escape"&&t()};return window.addEventListener("keydown",T),()=>window.removeEventListener("keydown",T)},[o,t]);const C=async()=>{if(!r.trim()||m)return;const T=r.trim();d(""),a(k=>[...k,{role:"user",content:T}]),g(!0);const b=await Pw(T);a(k=>[...k,{role:"assistant",content:b}]),g(!1)};return o?E.jsxs("div",{ref:v,className:"fixed inset-y-0 right-0 w-full sm:w-[450px] bg-white shadow-2xl z-[60] flex flex-col border-l border-slate-200 transition-transform transform translate-x-0",role:"dialog","aria-modal":"true","aria-labelledby":"ai-assistant-title",children:[E.jsxs("div",{className:"p-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-rose-500 to-rose-600 text-white",children:[E.jsxs("div",{className:"flex items-center gap-2",children:[E.jsx(yu,{size:20}),E.jsx("h3",{id:"ai-assistant-title",className:"font-bold",children:"Technical Assistant"})]}),E.jsx("button",{onClick:t,className:"p-1 hover:bg-white/20 rounded-full transition-colors","aria-label":"Close AI Assistant",children:E.jsx(Ra,{size:24})})]}),E.jsxs("div",{ref:y,className:"flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50",children:[s.map((T,b)=>E.jsx("div",{className:`flex ${T.role==="user"?"justify-end":"justify-start"}`,children:E.jsxs("div",{className:`max-w-[85%] flex gap-3 ${T.role==="user"?"flex-row-reverse":""}`,children:[E.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${T.role==="user"?"bg-slate-200":"bg-rose-100 text-rose-600"}`,children:T.role==="user"?E.jsx(pS,{size:16}):E.jsx(R0,{size:16})}),E.jsx("div",{className:`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${T.role==="user"?"bg-rose-500 text-white rounded-tr-none":"bg-white text-slate-700 rounded-tl-none border border-slate-100"}`,children:T.content})]})},b)),m&&E.jsx("div",{className:"flex justify-start",children:E.jsxs("div",{className:"flex gap-3",children:[E.jsx("div",{className:"w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center",children:E.jsx(B0,{size:16,className:"animate-spin"})}),E.jsx("div",{className:"bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-none shadow-sm",children:E.jsxs("div",{className:"flex gap-1",children:[E.jsx("span",{className:"w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"}),E.jsx("span",{className:"w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"}),E.jsx("span",{className:"w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"})]})})]})})]}),E.jsxs("div",{className:"p-4 border-t border-slate-100 bg-white",children:[E.jsxs("div",{className:"flex gap-2 relative",children:[E.jsx("input",{ref:h,type:"text",value:r,onChange:T=>d(T.target.value),onKeyDown:T=>T.key==="Enter"&&C(),placeholder:"Ask a technical question...",className:"w-full bg-slate-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-rose-500 outline-none pr-12","aria-label":"Ask a question"}),E.jsx("button",{onClick:C,disabled:!r.trim()||m,className:"absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-rose-500 text-white rounded-lg disabled:opacity-50 hover:bg-rose-600 transition-colors",children:E.jsx(W0,{size:18})})]}),E.jsx("p",{className:"text-[10px] text-slate-400 mt-2 text-center uppercase tracking-widest font-bold",children:"Powered by Gemini 3 Flash"})]})]}):null},kw=()=>{var me;const[o,t]=Se.useState("getting_started"),[s,a]=Se.useState(!1),[r,d]=Se.useState(""),[m,g]=Se.useState(!1),[y,h]=Se.useState(!1),[v,C]=Se.useState([]),[T,b]=Se.useState(""),[k,N]=Se.useState(0),[I,U]=Se.useState(!1),[q,B]=Se.useState(null),[X,Q]=Se.useState(!1),ee=Bh.useRef(null);Se.useEffect(()=>{const K=j=>{if(j.key==="Escape"&&(m?g(!1):X?(Q(!1),d("")):I?U(!1):s&&a(!1)),(j.metaKey||j.ctrlKey)&&j.key==="k")if(j.preventDefault(),window.innerWidth<768)Q(!0);else{const ce=document.querySelector('input[aria-label="Search documentation"]');ce==null||ce.focus()}};return window.addEventListener("keydown",K),()=>window.removeEventListener("keydown",K)},[m,X,I,s]),Se.useEffect(()=>{if(T&&ee.current){const K=ee.current.querySelector(`[data-header-id="${T}"]`);K&&K.scrollIntoView({behavior:"smooth",block:"nearest"})}},[T]),Se.useEffect(()=>{const K=()=>{h(window.scrollY>400);const j=document.documentElement.scrollHeight-window.innerHeight,ce=j>0?window.scrollY/j*100:0;N(Math.min(ce,100))};return window.addEventListener("scroll",K),()=>window.removeEventListener("scroll",K)},[]),Se.useEffect(()=>{const K=new IntersectionObserver(j=>{j.forEach(ce=>{ce.isIntersecting&&b(ce.target.id)})},{rootMargin:"-80px 0px -80% 0px"});return v.forEach(j=>{const ce=document.getElementById(j.id);ce&&K.observe(ce)}),()=>K.disconnect()},[v]);const J=()=>{window.scrollTo({top:0,behavior:"smooth"})},$=K=>{const j=document.getElementById(K);if(j){const Pe=j.getBoundingClientRect().top+window.pageYOffset+-80;window.scrollTo({top:Pe,behavior:"smooth"})}},z=Se.useMemo(()=>{if(!r)return Wt;const K={},j=r.toLowerCase();return Object.entries(Wt).forEach(([ce,Pe])=>{var Y,se;if(Pe.title.toLowerCase().includes(j)||((Y=Pe.content)==null?void 0:Y.toLowerCase().includes(j))||((se=Pe.tags)==null?void 0:se.some(he=>he.toLowerCase().includes(j))))K[ce]=Pe;else if(Pe.subItems){const he={};Object.entries(Pe.subItems).forEach(([xe,R])=>{var V;(R.title.toLowerCase().includes(j)||R.content.toLowerCase().includes(j)||(V=R.tags)!=null&&V.some(W=>W.toLowerCase().includes(j)))&&(he[xe]=R)}),Object.keys(he).length>0&&(K[ce]={...Pe,subItems:he})}}),K},[r]),le=Se.useMemo(()=>{if(Wt[o])return Wt[o];for(const K of Object.values(Wt))if(K.subItems&&K.subItems[o])return K.subItems[o];return Wt.getting_started},[o]);return E.jsxs("div",{className:"min-h-screen bg-white flex flex-col font-sans selection:bg-rose-100 selection:text-rose-900",children:[E.jsxs("header",{className:"bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50",children:[E.jsx("div",{className:"absolute bottom-0 left-0 h-[2px] bg-rose-500 transition-all duration-150 ease-out z-50",style:{width:`${k}%`}}),E.jsxs("div",{className:"max-w-[1440px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between",children:[E.jsxs("div",{className:"flex items-center gap-4",children:[E.jsx("button",{onClick:()=>a(!s),className:"lg:hidden p-2 hover:bg-slate-100 rounded-lg text-slate-600","aria-label":s?"Close sidebar":"Open sidebar","aria-expanded":s,"aria-controls":"sidebar-navigation",children:s?E.jsx(Ra,{size:20}):E.jsx(om,{size:20})}),E.jsxs("button",{onClick:()=>{t("getting_started"),window.scrollTo({top:0,behavior:"smooth"})},className:"flex items-center gap-3 hover:opacity-80 transition-opacity",children:[E.jsx("div",{className:"flex items-center",children:E.jsx("img",{src:"assets/logo.png",alt:"BookHere Logo",className:"w-12 h-12 object-contain"})}),E.jsxs("div",{className:"hidden sm:block text-left",children:[E.jsx("h1",{className:"font-extrabold text-slate-900 text-xl tracking-tight leading-none",children:"BookHere"}),E.jsxs("p",{className:"text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-0.5",children:["Documentation Hub ",yS]})]})]})]}),E.jsx("div",{className:"hidden md:flex flex-1 max-w-xl mx-8",children:E.jsxs("div",{className:"relative w-full group",children:[E.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:E.jsx(Ta,{className:"text-slate-400 group-focus-within:text-rose-500 transition-colors",size:18})}),E.jsx("input",{type:"text",placeholder:"Search across 60+ guides...",className:"w-full bg-slate-100/50 border border-slate-200 rounded-2xl pl-12 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 focus:bg-white transition-all",value:r,onChange:K=>d(K.target.value),"aria-label":"Search documentation"})]})}),E.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[E.jsx("button",{onClick:()=>Q(!0),className:"md:hidden p-2 hover:bg-slate-100 rounded-lg text-slate-600","aria-label":"Open search",children:E.jsx(Ta,{size:20})}),E.jsxs("div",{className:"relative group",children:[E.jsxs("button",{onClick:()=>g(!0),className:"flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all shadow-md shadow-slate-200 group","aria-label":"Open AI Assistant",children:[E.jsx(yu,{size:16,className:"text-rose-400 group-hover:scale-110 transition-transform"}),E.jsx("span",{className:"hidden sm:inline",children:"Ask AI"})]}),E.jsxs("div",{className:"absolute top-full right-0 mt-2 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none whitespace-nowrap shadow-xl z-[60]",children:["Get AI Help",E.jsx("div",{className:"absolute bottom-full right-6 -mb-1 border-4 border-transparent border-b-slate-900"})]})]}),E.jsxs("a",{href:SS,target:"_blank",rel:"noopener noreferrer",className:"hidden sm:flex items-center gap-2 text-slate-600 hover:text-slate-900 px-3 py-2 rounded-xl text-sm font-semibold transition-colors",children:[E.jsx(gu,{size:16}),"Live Demo"]})]})]})]}),E.jsxs("div",{className:"flex flex-1 max-w-[1440px] mx-auto w-full relative",children:[E.jsx("aside",{id:"sidebar-navigation",className:`
          ${s?"translate-x-0":"-translate-x-full"}
          lg:translate-x-0 fixed lg:sticky top-16 h-[calc(100vh-64px)] w-72 border-r border-slate-100 bg-white z-40 transition-transform duration-300 ease-in-out lg:bg-slate-50/30
        `,"aria-label":"Main navigation",children:E.jsxs("nav",{className:"p-6 space-y-2 overflow-y-auto h-full hide-scrollbar",role:"navigation",children:[E.jsxs("div",{className:"mb-8",children:[E.jsx("p",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 mb-4",children:"Core Documentation"}),E.jsx("div",{className:"space-y-1",children:Object.entries(Wt).map(([K,j])=>{const ce=j.icon,Pe=j.subItems&&Object.keys(j.subItems).length>0,G=o===K||j.subItems&&Object.keys(j.subItems).includes(o);return E.jsxs("div",{className:"space-y-1",children:[E.jsxs("button",{onClick:()=>{Pe&&!j.content&&j.subItems?t(Object.keys(j.subItems)[0]):t(K),a(!1),window.scrollTo({top:0,behavior:"smooth"})},className:`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all group ${o===K?"bg-rose-50 text-rose-600 shadow-sm border border-rose-100":"text-slate-600 hover:bg-white hover:text-slate-900 border border-transparent hover:border-slate-100"}`,children:[E.jsx(ce,{size:18,className:`shrink-0 ${o===K?"text-rose-500":"text-slate-400 group-hover:text-slate-600"} transition-colors`}),j.title,Pe&&E.jsx(nm,{size:14,className:`ml-auto shrink-0 transition-transform ${G?"rotate-90":""} opacity-50`})]}),Pe&&G&&E.jsx("div",{className:"ml-9 space-y-1 mt-1 border-l-2 border-slate-100 pl-2",children:Object.entries(j.subItems).map(([Y,se])=>{const he=se.icon;return E.jsxs("button",{onClick:()=>{t(Y),a(!1),window.scrollTo({top:0,behavior:"smooth"})},className:`w-full flex items-center gap-2.5 px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${o===Y?"text-rose-600 bg-rose-50/50":"text-slate-500 hover:text-slate-900 hover:bg-slate-50"}`,children:[he&&E.jsx(he,{size:14,className:`shrink-0 ${o===Y?"text-rose-500":"text-slate-400"}`}),se.title]},Y)})})]},K)})})]}),E.jsxs("div",{className:"pt-8 border-t border-slate-200",children:[E.jsx("p",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 mb-4",children:"Community & Help"}),E.jsxs("div",{className:"space-y-4",children:[E.jsxs("a",{href:`mailto:${vS}`,className:"flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors",children:[E.jsx(Fh,{size:18,className:"text-slate-400"}),"Support Tickets"]}),E.jsxs("div",{className:"px-4 py-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl shadow-slate-200 overflow-hidden relative group",children:[E.jsx("div",{className:"absolute top-0 right-0 -mr-4 -mt-4 w-16 h-16 bg-rose-500/20 rounded-full blur-2xl group-hover:bg-rose-500/30 transition-colors"}),E.jsx("h4",{className:"text-white font-bold text-sm mb-2",children:"Extended Support"}),E.jsx("p",{className:"text-slate-400 text-xs mb-4 leading-relaxed",children:"Get custom builds and prioritized installation from our expert dev team."}),E.jsx("button",{className:"w-full py-2 bg-white text-slate-900 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors",children:"Upgrade Now"})]})]})]})]})}),E.jsx("main",{className:"flex-1 min-w-0 p-6 lg:p-16 min-h-screen",children:E.jsxs("div",{className:"max-w-4xl mx-auto",children:[E.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8",children:[E.jsx("span",{className:"hover:text-slate-600 cursor-pointer",children:"Docs"}),E.jsx(nm,{size:10}),E.jsx("span",{className:"text-rose-500",children:le.title})]}),E.jsxs("article",{className:"min-h-[60vh]",children:[E.jsx("div",{className:"mb-12",children:E.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:(me=le.tags)==null?void 0:me.map(K=>E.jsxs("span",{className:"px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-[10px] font-bold uppercase tracking-wider",children:["#",K]},K))})}),E.jsx(CS,{content:le.content||"",onNavigate:K=>{(Wt[K]||Object.values(Wt).some(ce=>ce.subItems&&ce.subItems[K]))&&(t(K),window.scrollTo({top:0,behavior:"smooth"}))},onHeadersFound:C})]}),E.jsxs("div",{className:"mt-20 pt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6",children:[E.jsxs("div",{className:"flex items-center gap-6",children:[E.jsxs("button",{className:"flex flex-col items-start gap-1 group",children:[E.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest",children:"Modified"}),E.jsxs("span",{className:"text-sm font-semibold text-slate-700 flex items-center gap-1.5",children:[E.jsx(Vh,{size:14,className:"text-slate-400"})," Jan 2026"]})]}),E.jsx("div",{className:"w-px h-8 bg-slate-200"}),E.jsxs("div",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest",children:["© WebPenter Solutions",E.jsx("br",{}),"All rights Reserved"]})]}),E.jsx("div",{className:"flex gap-4",children:E.jsxs("div",{className:"relative group",children:[E.jsx("button",{className:"p-3 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all",children:E.jsx(gu,{size:20})}),E.jsxs("div",{className:"absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none whitespace-nowrap shadow-xl",children:["Share Page",E.jsx("div",{className:"absolute top-full right-4 -mt-1 border-4 border-transparent border-t-slate-900"})]})]})})]})]})}),E.jsxs("aside",{className:"hidden xl:block w-72 p-12 sticky top-16 h-fit",children:[E.jsx("h4",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6",children:"Quick Actions"}),E.jsxs("div",{className:"space-y-4",children:[E.jsxs("button",{onClick:()=>g(!0),className:"w-full text-left p-4 rounded-2xl bg-rose-50 border border-rose-100 group hover:bg-rose-100 transition-colors",children:[E.jsx("div",{className:"bg-rose-500 p-1.5 rounded-lg w-fit mb-3 text-white shadow-lg shadow-rose-200",children:E.jsx(yu,{size:16})}),E.jsx("h5",{className:"font-bold text-rose-900 text-sm mb-1",children:"Stuck? Ask AI"}),E.jsx("p",{className:"text-rose-700/70 text-[11px] leading-relaxed",children:"Get instant answers to complex setup questions using our AI assistant."})]}),v.length>0&&E.jsxs("div",{className:"p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col max-h-[calc(85vh-250px)] shadow-sm",children:[E.jsxs("div",{className:"flex items-center justify-between mb-4 shrink-0",children:[E.jsxs("h5",{className:"font-bold text-slate-900 text-[10px] uppercase tracking-widest flex items-center gap-2",children:[E.jsx("div",{className:"w-1 h-1 rounded-full bg-rose-500"}),"On this page"]}),E.jsxs("button",{onClick:()=>{navigator.clipboard.writeText(window.location.href),B("page"),setTimeout(()=>B(null),2e3)},className:"text-slate-400 hover:text-rose-500 transition-colors relative",title:"Copy page link",children:[q==="page"?E.jsx(hu,{size:14,className:"text-emerald-500"}):E.jsx(qh,{size:14}),q==="page"&&E.jsx("span",{className:"absolute right-0 bottom-full mb-2 px-2 py-1 bg-slate-900 text-white text-[10px] font-bold rounded whitespace-nowrap",children:"Copied!"})]})]}),E.jsxs("div",{className:"relative overflow-hidden",children:[E.jsx("div",{className:"absolute left-[7px] top-0 bottom-0 w-[1px] bg-slate-200"}),E.jsx("ul",{ref:ee,className:"space-y-4 text-[13px] text-slate-500 overflow-y-auto pr-2 custom-scrollbar relative",children:v.map(K=>{const j=T===K.id;return E.jsxs("li",{"data-header-id":K.id,onClick:()=>$(K.id),className:`
                            relative pl-6 cursor-pointer transition-all duration-300 group
                            ${j?"text-rose-600 font-bold":"hover:text-slate-900 font-medium"}
                            ${K.level===3?"text-[12px] opacity-80":""}
                          `,children:[E.jsx("div",{className:`
                            absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-white transition-all duration-300 z-10
                            ${j?"bg-rose-500 scale-100 shadow-lg shadow-rose-200":"bg-slate-300 scale-50 group-hover:scale-75 group-hover:bg-slate-400"}
                          `}),E.jsx("span",{className:"block break-words leading-snug",children:K.text})]},K.id)})})]})]})]})]})]}),E.jsx(Dw,{isOpen:m,onClose:()=>g(!1)}),X&&E.jsxs("div",{className:"md:hidden fixed inset-x-0 top-16 bg-white border-b border-slate-200 p-6 z-50 shadow-2xl h-[calc(100vh-64px)] overflow-y-auto",children:[E.jsxs("div",{className:"flex items-center justify-between mb-6",children:[E.jsx("p",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest",children:r?`Search Results (${Object.keys(z).length})`:"Search Documentation"}),E.jsx("button",{onClick:()=>{Q(!1),d("")},className:"p-1 text-slate-400 hover:text-slate-900","aria-label":"Close search",children:E.jsx(Ra,{size:20})})]}),E.jsxs("div",{className:"relative w-full group mb-6",children:[E.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:E.jsx(Ta,{className:"text-slate-400 group-focus-within:text-rose-500 transition-colors",size:18})}),E.jsx("input",{type:"text",placeholder:"Search across 60+ guides...",className:"w-full bg-slate-100/50 border border-slate-200 rounded-2xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 focus:bg-white transition-all",value:r,onChange:K=>d(K.target.value),autoFocus:!0})]}),E.jsx("div",{className:"space-y-3",children:Object.keys(z).length>0?Object.entries(z).map(([K,j])=>{const ce=j.icon;return E.jsx("button",{onClick:()=>{t(K),d(""),Q(!1)},className:"w-full text-left p-4 bg-slate-50 hover:bg-rose-50 border border-slate-100 hover:border-rose-100 rounded-2xl group transition-all",children:E.jsxs("div",{className:"flex items-center gap-3",children:[E.jsx(ce,{size:18,className:"text-slate-400 group-hover:text-rose-500"}),E.jsx("span",{className:"text-sm font-bold text-slate-700 group-hover:text-rose-900",children:j.title})]})},K)}):E.jsxs("div",{className:"text-center py-12",children:[E.jsx(Ta,{size:48,className:"text-slate-200 mx-auto mb-4"}),E.jsx("p",{className:"text-sm text-slate-500",children:"No matching guides found. Try a different search term."})]})})]}),E.jsx("div",{className:`fixed bottom-8 right-8 z-50 transition-all duration-300 ${y?"opacity-100 translate-y-0":"opacity-0 translate-y-10 pointer-events-none"}`,children:E.jsxs("div",{className:"relative group",children:[E.jsx("button",{onClick:J,className:"p-4 bg-rose-500 text-white rounded-2xl shadow-2xl shadow-rose-200 hover:bg-rose-600 hover:-translate-y-1 active:scale-95 transition-all","aria-label":"Scroll back to top",children:E.jsx(E0,{size:24})}),E.jsxs("div",{className:"absolute bottom-full right-0 mb-4 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none whitespace-nowrap shadow-xl",children:["Back to Top",E.jsx("div",{className:"absolute top-full right-6 -mt-1 border-4 border-transparent border-t-slate-900"})]})]})}),v.length>0&&E.jsxs("button",{onClick:()=>U(!0),className:"xl:hidden fixed bottom-8 left-8 p-4 bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 z-40 hover:bg-slate-50 active:scale-95 transition-all flex items-center gap-2",children:[E.jsx(om,{size:20,className:"text-rose-500"}),E.jsx("span",{className:"text-xs font-bold uppercase tracking-wider",children:"On this page"})]}),E.jsxs("div",{className:`xl:hidden fixed inset-0 z-[100] transition-all duration-500 ${I?"opacity-100":"opacity-0 pointer-events-none"}`,children:[E.jsx("div",{className:"absolute inset-0 bg-slate-900/40 backdrop-blur-sm",onClick:()=>U(!1)}),E.jsxs("div",{className:`absolute inset-x-0 bottom-0 bg-white rounded-t-[32px] p-8 transition-transform duration-500 shadow-2xl ${I?"translate-y-0":"translate-y-full"}`,children:[E.jsx("div",{className:"w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-8"}),E.jsxs("div",{className:"flex items-center justify-between mb-6",children:[E.jsx("h5",{className:"font-bold text-slate-900 text-lg",children:"On this page"}),E.jsx("button",{onClick:()=>U(!1),className:"p-2 bg-slate-100 rounded-full text-slate-500",children:E.jsx(Ra,{size:20})})]}),E.jsx("ul",{className:"space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar pr-2",children:v.map(K=>E.jsxs("li",{onClick:()=>{$(K.id),U(!1)},className:`flex items-center gap-4 text-sm transition-colors ${T===K.id?"text-rose-600 font-bold":"text-slate-600 font-medium"} ${K.level===3?"pl-6 opacity-80":""}`,children:[E.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${T===K.id?"bg-rose-500":"bg-slate-200"}`}),K.text]},K.id))})]})]})]})};class Uw extends Se.Component{constructor(t){super(t),this.handleReset=()=>{this.setState({hasError:!1,error:null,errorInfo:null})},this.handleReload=()=>{window.location.reload()},this.handleGoHome=()=>{window.location.href="/"},this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(t){return{hasError:!0,error:t,errorInfo:null}}componentDidCatch(t,s){console.error("ErrorBoundary caught an error:",t,s),this.setState({error:t,errorInfo:s})}render(){return this.state.hasError?E.jsx("div",{className:"min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6",children:E.jsxs("div",{className:"max-w-2xl w-full bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden",children:[E.jsx("div",{className:"bg-gradient-to-r from-rose-500 to-rose-600 p-8 text-white",children:E.jsxs("div",{className:"flex items-center gap-4 mb-4",children:[E.jsx("div",{className:"p-3 bg-white/20 rounded-2xl",children:E.jsx(cS,{size:32})}),E.jsxs("div",{children:[E.jsx("h1",{className:"text-3xl font-bold",children:"Oops! Something went wrong"}),E.jsx("p",{className:"text-rose-100 text-sm mt-1",children:"The application encountered an unexpected error"})]})]})}),E.jsxs("div",{className:"p-8",children:[E.jsxs("div",{className:"mb-6",children:[E.jsx("h2",{className:"text-lg font-bold text-slate-900 mb-2",children:"What happened?"}),E.jsx("p",{className:"text-slate-600 leading-relaxed",children:"A component in the application failed to render properly. This is likely a temporary issue. Try reloading the page or going back to the home page."})]}),this.state.error&&E.jsxs("details",{className:"mb-6 group",children:[E.jsxs("summary",{className:"cursor-pointer text-sm font-bold text-slate-700 hover:text-rose-600 transition-colors list-none flex items-center gap-2",children:[E.jsx("span",{className:"text-xs uppercase tracking-wider",children:"Technical Details"}),E.jsx("span",{className:"text-xs text-slate-400",children:"(Click to expand)"})]}),E.jsxs("div",{className:"mt-4 p-4 bg-slate-900 rounded-xl overflow-auto max-h-64",children:[E.jsxs("p",{className:"text-red-400 font-mono text-xs mb-2 font-bold",children:[this.state.error.name,": ",this.state.error.message]}),this.state.error.stack&&E.jsx("pre",{className:"text-slate-400 font-mono text-[11px] leading-relaxed whitespace-pre-wrap",children:this.state.error.stack})]})]}),E.jsxs("div",{className:"flex flex-col sm:flex-row gap-3",children:[E.jsxs("button",{onClick:this.handleReload,className:"flex-1 flex items-center justify-center gap-2 bg-rose-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-rose-600 transition-all shadow-lg shadow-rose-200",children:[E.jsx(J0,{size:18}),"Reload Page"]}),E.jsxs("button",{onClick:this.handleGoHome,className:"flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-700 px-6 py-3 rounded-xl font-semibold hover:bg-slate-200 transition-all",children:[E.jsx(L0,{size:18}),"Go to Home"]})]}),E.jsx("div",{className:"mt-6 p-4 bg-slate-50 border border-slate-200 rounded-xl",children:E.jsx("p",{className:"text-xs text-slate-600 text-center",children:"If this problem persists, please contact support or check the browser console for more details."})})]})]})}):this.props.children}}const Lg=document.getElementById("root");if(!Lg)throw new Error("Could not find root element to mount to");const Lw=g0.createRoot(Lg);Lw.render(E.jsx(Bh.StrictMode,{children:E.jsx(Uw,{children:E.jsx(kw,{})})}));
