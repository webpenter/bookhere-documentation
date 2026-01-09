(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function s(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function a(r){if(r.ep)return;r.ep=!0;const d=s(r);fetch(r.href,d)}})();function Bh(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var lu={exports:{}},Zi={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yp;function a0(){if(Yp)return Zi;Yp=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function s(a,r,d){var m=null;if(d!==void 0&&(m=""+d),r.key!==void 0&&(m=""+r.key),"key"in r){d={};for(var g in r)g!=="key"&&(d[g]=r[g])}else d=r;return r=d.ref,{$$typeof:o,type:a,key:m,ref:r!==void 0?r:null,props:d}}return Zi.Fragment=t,Zi.jsx=s,Zi.jsxs=s,Zi}var Jp;function l0(){return Jp||(Jp=1,lu.exports=a0()),lu.exports}var b=l0(),ru={exports:{}},ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kp;function r0(){if(Kp)return ce;Kp=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),C=Symbol.iterator;function A(R){return R===null||typeof R!="object"?null:(R=C&&R[C]||R["@@iterator"],typeof R=="function"?R:null)}var U={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,I={};function D(R,q,W){this.props=R,this.context=q,this.refs=I,this.updater=W||U}D.prototype.isReactComponent={},D.prototype.setState=function(R,q){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,q,"setState")},D.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function V(){}V.prototype=D.prototype;function B(R,q,W){this.props=R,this.context=q,this.refs=I,this.updater=W||U}var X=B.prototype=new V;X.constructor=B,M(X,D.prototype),X.isPureReactComponent=!0;var Z=Array.isArray;function te(){}var K={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function Y(R,q,W){var ne=W.ref;return{$$typeof:o,type:R,key:q,ref:ne!==void 0?ne:null,props:W}}function z(R,q){return Y(R.type,q,R.props)}function j(R){return typeof R=="object"&&R!==null&&R.$$typeof===o}function re(R){var q={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(W){return q[W]})}var ue=/\/+/g;function Ge(R,q){return typeof R=="object"&&R!==null&&R.key!=null?re(""+R.key):q.toString(36)}function Be(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(te,te):(R.status="pending",R.then(function(q){R.status==="pending"&&(R.status="fulfilled",R.value=q)},function(q){R.status==="pending"&&(R.status="rejected",R.reason=q)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function G(R,q,W,ne,de){var me=typeof R;(me==="undefined"||me==="boolean")&&(R=null);var we=!1;if(R===null)we=!0;else switch(me){case"bigint":case"string":case"number":we=!0;break;case"object":switch(R.$$typeof){case o:case t:we=!0;break;case v:return we=R._init,G(we(R._payload),q,W,ne,de)}}if(we)return de=de(R),we=ne===""?"."+Ge(R,0):ne,Z(de)?(W="",we!=null&&(W=we.replace(ue,"$&/")+"/"),G(de,q,W,"",function(si){return si})):de!=null&&(j(de)&&(de=z(de,W+(de.key==null||R&&R.key===de.key?"":(""+de.key).replace(ue,"$&/")+"/")+we)),q.push(de)),1;we=0;var at=ne===""?".":ne+":";if(Z(R))for(var qe=0;qe<R.length;qe++)ne=R[qe],me=at+Ge(ne,qe),we+=G(ne,q,W,me,de);else if(qe=A(R),typeof qe=="function")for(R=qe.call(R),qe=0;!(ne=R.next()).done;)ne=ne.value,me=at+Ge(ne,qe++),we+=G(ne,q,W,me,de);else if(me==="object"){if(typeof R.then=="function")return G(Be(R),q,W,ne,de);throw q=String(R),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return we}function J(R,q,W){if(R==null)return R;var ne=[],de=0;return G(R,ne,"","",function(me){return q.call(W,me,de++)}),ne}function ae(R){if(R._status===-1){var q=R._result;q=q(),q.then(function(W){(R._status===0||R._status===-1)&&(R._status=1,R._result=W)},function(W){(R._status===0||R._status===-1)&&(R._status=2,R._result=W)}),R._status===-1&&(R._status=0,R._result=q)}if(R._status===1)return R._result.default;throw R._result}var Te=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},be={map:J,forEach:function(R,q,W){J(R,function(){q.apply(this,arguments)},W)},count:function(R){var q=0;return J(R,function(){q++}),q},toArray:function(R){return J(R,function(q){return q})||[]},only:function(R){if(!j(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return ce.Activity=T,ce.Children=be,ce.Component=D,ce.Fragment=s,ce.Profiler=r,ce.PureComponent=B,ce.StrictMode=a,ce.Suspense=y,ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,ce.__COMPILER_RUNTIME={__proto__:null,c:function(R){return K.H.useMemoCache(R)}},ce.cache=function(R){return function(){return R.apply(null,arguments)}},ce.cacheSignal=function(){return null},ce.cloneElement=function(R,q,W){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var ne=M({},R.props),de=R.key;if(q!=null)for(me in q.key!==void 0&&(de=""+q.key),q)!Q.call(q,me)||me==="key"||me==="__self"||me==="__source"||me==="ref"&&q.ref===void 0||(ne[me]=q[me]);var me=arguments.length-2;if(me===1)ne.children=W;else if(1<me){for(var we=Array(me),at=0;at<me;at++)we[at]=arguments[at+2];ne.children=we}return Y(R.type,de,ne)},ce.createContext=function(R){return R={$$typeof:m,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:d,_context:R},R},ce.createElement=function(R,q,W){var ne,de={},me=null;if(q!=null)for(ne in q.key!==void 0&&(me=""+q.key),q)Q.call(q,ne)&&ne!=="key"&&ne!=="__self"&&ne!=="__source"&&(de[ne]=q[ne]);var we=arguments.length-2;if(we===1)de.children=W;else if(1<we){for(var at=Array(we),qe=0;qe<we;qe++)at[qe]=arguments[qe+2];de.children=at}if(R&&R.defaultProps)for(ne in we=R.defaultProps,we)de[ne]===void 0&&(de[ne]=we[ne]);return Y(R,me,de)},ce.createRef=function(){return{current:null}},ce.forwardRef=function(R){return{$$typeof:g,render:R}},ce.isValidElement=j,ce.lazy=function(R){return{$$typeof:v,_payload:{_status:-1,_result:R},_init:ae}},ce.memo=function(R,q){return{$$typeof:h,type:R,compare:q===void 0?null:q}},ce.startTransition=function(R){var q=K.T,W={};K.T=W;try{var ne=R(),de=K.S;de!==null&&de(W,ne),typeof ne=="object"&&ne!==null&&typeof ne.then=="function"&&ne.then(te,Te)}catch(me){Te(me)}finally{q!==null&&W.types!==null&&(q.types=W.types),K.T=q}},ce.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},ce.use=function(R){return K.H.use(R)},ce.useActionState=function(R,q,W){return K.H.useActionState(R,q,W)},ce.useCallback=function(R,q){return K.H.useCallback(R,q)},ce.useContext=function(R){return K.H.useContext(R)},ce.useDebugValue=function(){},ce.useDeferredValue=function(R,q){return K.H.useDeferredValue(R,q)},ce.useEffect=function(R,q){return K.H.useEffect(R,q)},ce.useEffectEvent=function(R){return K.H.useEffectEvent(R)},ce.useId=function(){return K.H.useId()},ce.useImperativeHandle=function(R,q,W){return K.H.useImperativeHandle(R,q,W)},ce.useInsertionEffect=function(R,q){return K.H.useInsertionEffect(R,q)},ce.useLayoutEffect=function(R,q){return K.H.useLayoutEffect(R,q)},ce.useMemo=function(R,q){return K.H.useMemo(R,q)},ce.useOptimistic=function(R,q){return K.H.useOptimistic(R,q)},ce.useReducer=function(R,q,W){return K.H.useReducer(R,q,W)},ce.useRef=function(R){return K.H.useRef(R)},ce.useState=function(R){return K.H.useState(R)},ce.useSyncExternalStore=function(R,q,W){return K.H.useSyncExternalStore(R,q,W)},ce.useTransition=function(){return K.H.useTransition()},ce.version="19.2.3",ce}var Xp;function Pu(){return Xp||(Xp=1,ru.exports=r0()),ru.exports}var ke=Pu();const os=Bh(ke);var uu={exports:{}},ji={},cu={exports:{}},du={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qp;function u0(){return Qp||(Qp=1,(function(o){function t(G,J){var ae=G.length;G.push(J);e:for(;0<ae;){var Te=ae-1>>>1,be=G[Te];if(0<r(be,J))G[Te]=J,G[ae]=be,ae=Te;else break e}}function s(G){return G.length===0?null:G[0]}function a(G){if(G.length===0)return null;var J=G[0],ae=G.pop();if(ae!==J){G[0]=ae;e:for(var Te=0,be=G.length,R=be>>>1;Te<R;){var q=2*(Te+1)-1,W=G[q],ne=q+1,de=G[ne];if(0>r(W,ae))ne<be&&0>r(de,W)?(G[Te]=de,G[ne]=ae,Te=ne):(G[Te]=W,G[q]=ae,Te=q);else if(ne<be&&0>r(de,ae))G[Te]=de,G[ne]=ae,Te=ne;else break e}}return J}function r(G,J){var ae=G.sortIndex-J.sortIndex;return ae!==0?ae:G.id-J.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;o.unstable_now=function(){return d.now()}}else{var m=Date,g=m.now();o.unstable_now=function(){return m.now()-g}}var y=[],h=[],v=1,T=null,C=3,A=!1,U=!1,M=!1,I=!1,D=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function X(G){for(var J=s(h);J!==null;){if(J.callback===null)a(h);else if(J.startTime<=G)a(h),J.sortIndex=J.expirationTime,t(y,J);else break;J=s(h)}}function Z(G){if(M=!1,X(G),!U)if(s(y)!==null)U=!0,te||(te=!0,re());else{var J=s(h);J!==null&&Be(Z,J.startTime-G)}}var te=!1,K=-1,Q=5,Y=-1;function z(){return I?!0:!(o.unstable_now()-Y<Q)}function j(){if(I=!1,te){var G=o.unstable_now();Y=G;var J=!0;try{e:{U=!1,M&&(M=!1,V(K),K=-1),A=!0;var ae=C;try{t:{for(X(G),T=s(y);T!==null&&!(T.expirationTime>G&&z());){var Te=T.callback;if(typeof Te=="function"){T.callback=null,C=T.priorityLevel;var be=Te(T.expirationTime<=G);if(G=o.unstable_now(),typeof be=="function"){T.callback=be,X(G),J=!0;break t}T===s(y)&&a(y),X(G)}else a(y);T=s(y)}if(T!==null)J=!0;else{var R=s(h);R!==null&&Be(Z,R.startTime-G),J=!1}}break e}finally{T=null,C=ae,A=!1}J=void 0}}finally{J?re():te=!1}}}var re;if(typeof B=="function")re=function(){B(j)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,Ge=ue.port2;ue.port1.onmessage=j,re=function(){Ge.postMessage(null)}}else re=function(){D(j,0)};function Be(G,J){K=D(function(){G(o.unstable_now())},J)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(G){G.callback=null},o.unstable_forceFrameRate=function(G){0>G||125<G?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<G?Math.floor(1e3/G):5},o.unstable_getCurrentPriorityLevel=function(){return C},o.unstable_next=function(G){switch(C){case 1:case 2:case 3:var J=3;break;default:J=C}var ae=C;C=J;try{return G()}finally{C=ae}},o.unstable_requestPaint=function(){I=!0},o.unstable_runWithPriority=function(G,J){switch(G){case 1:case 2:case 3:case 4:case 5:break;default:G=3}var ae=C;C=G;try{return J()}finally{C=ae}},o.unstable_scheduleCallback=function(G,J,ae){var Te=o.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Te+ae:Te):ae=Te,G){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=ae+be,G={id:v++,callback:J,priorityLevel:G,startTime:ae,expirationTime:be,sortIndex:-1},ae>Te?(G.sortIndex=ae,t(h,G),s(y)===null&&G===s(h)&&(M?(V(K),K=-1):M=!0,Be(Z,ae-Te))):(G.sortIndex=be,t(y,G),U||A||(U=!0,te||(te=!0,re()))),G},o.unstable_shouldYield=z,o.unstable_wrapCallback=function(G){var J=C;return function(){var ae=C;C=J;try{return G.apply(this,arguments)}finally{C=ae}}}})(du)),du}var Wp;function c0(){return Wp||(Wp=1,cu.exports=u0()),cu.exports}var fu={exports:{}},it={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function d0(){if($p)return it;$p=1;var o=Pu();function t(y){var h="https://react.dev/errors/"+y;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var a={d:{f:s,r:function(){throw Error(t(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},r=Symbol.for("react.portal");function d(y,h,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:T==null?null:""+T,children:y,containerInfo:h,implementation:v}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,h){if(y==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,it.createPortal=function(y,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return d(y,h,null,v)},it.flushSync=function(y){var h=m.T,v=a.p;try{if(m.T=null,a.p=2,y)return y()}finally{m.T=h,a.p=v,a.d.f()}},it.preconnect=function(y,h){typeof y=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,a.d.C(y,h))},it.prefetchDNS=function(y){typeof y=="string"&&a.d.D(y)},it.preinit=function(y,h){if(typeof y=="string"&&h&&typeof h.as=="string"){var v=h.as,T=g(v,h.crossOrigin),C=typeof h.integrity=="string"?h.integrity:void 0,A=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?a.d.S(y,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:T,integrity:C,fetchPriority:A}):v==="script"&&a.d.X(y,{crossOrigin:T,integrity:C,fetchPriority:A,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},it.preinitModule=function(y,h){if(typeof y=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=g(h.as,h.crossOrigin);a.d.M(y,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&a.d.M(y)},it.preload=function(y,h){if(typeof y=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,T=g(v,h.crossOrigin);a.d.L(y,v,{crossOrigin:T,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},it.preloadModule=function(y,h){if(typeof y=="string")if(h){var v=g(h.as,h.crossOrigin);a.d.m(y,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else a.d.m(y)},it.requestFormReset=function(y){a.d.r(y)},it.unstable_batchedUpdates=function(y,h){return y(h)},it.useFormState=function(y,h,v){return m.H.useFormState(y,h,v)},it.useFormStatus=function(){return m.H.useHostTransitionStatus()},it.version="19.2.3",it}var Zp;function f0(){if(Zp)return fu.exports;Zp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),fu.exports=d0(),fu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jp;function p0(){if(jp)return ji;jp=1;var o=c0(),t=Pu(),s=f0();function a(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function m(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function y(e){if(d(e)!==e)throw Error(a(188))}function h(e){var n=e.alternate;if(!n){if(n=d(e),n===null)throw Error(a(188));return n!==e?null:e}for(var i=e,l=n;;){var f=i.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){i=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===i)return y(f),e;if(p===l)return y(f),n;p=p.sibling}throw Error(a(188))}if(i.return!==l.return)i=f,l=p;else{for(var S=!1,E=f.child;E;){if(E===i){S=!0,i=f,l=p;break}if(E===l){S=!0,l=f,i=p;break}E=E.sibling}if(!S){for(E=p.child;E;){if(E===i){S=!0,i=p,l=f;break}if(E===l){S=!0,l=p,i=f;break}E=E.sibling}if(!S)throw Error(a(189))}}if(i.alternate!==l)throw Error(a(190))}if(i.tag!==3)throw Error(a(188));return i.stateNode.current===i?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var T=Object.assign,C=Symbol.for("react.element"),A=Symbol.for("react.transitional.element"),U=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),B=Symbol.for("react.context"),X=Symbol.for("react.forward_ref"),Z=Symbol.for("react.suspense"),te=Symbol.for("react.suspense_list"),K=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),Y=Symbol.for("react.activity"),z=Symbol.for("react.memo_cache_sentinel"),j=Symbol.iterator;function re(e){return e===null||typeof e!="object"?null:(e=j&&e[j]||e["@@iterator"],typeof e=="function"?e:null)}var ue=Symbol.for("react.client.reference");function Ge(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===ue?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case D:return"Profiler";case I:return"StrictMode";case Z:return"Suspense";case te:return"SuspenseList";case Y:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case U:return"Portal";case B:return e.displayName||"Context";case V:return(e._context.displayName||"Context")+".Consumer";case X:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case K:return n=e.displayName||null,n!==null?n:Ge(e.type)||"Memo";case Q:n=e._payload,e=e._init;try{return Ge(e(n))}catch{}}return null}var Be=Array.isArray,G=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,J=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},Te=[],be=-1;function R(e){return{current:e}}function q(e){0>be||(e.current=Te[be],Te[be]=null,be--)}function W(e,n){be++,Te[be]=e.current,e.current=n}var ne=R(null),de=R(null),me=R(null),we=R(null);function at(e,n){switch(W(me,n),W(de,e),W(ne,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?mp(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=mp(n),e=hp(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(ne),W(ne,e)}function qe(){q(ne),q(de),q(me)}function si(e){e.memoizedState!==null&&W(we,e);var n=ne.current,i=hp(n,e.type);n!==i&&(W(de,e),W(ne,i))}function is(e){de.current===e&&(q(ne),q(de)),we.current===e&&(q(we),Xi._currentValue=ae)}var Va,Vu;function Yn(e){if(Va===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Va=n&&n[1]||"",Vu=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Va+e+Vu}var za=!1;function Ya(e,n){if(!e||za)return"";za=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var l={DetermineComponentFrameRoot:function(){try{if(n){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(L){var k=L}Reflect.construct(e,[],F)}else{try{F.call()}catch(L){k=L}e.call(F.prototype)}}else{try{throw Error()}catch(L){k=L}(F=e())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(L){if(L&&k&&typeof L.stack=="string")return[L.stack,k.stack]}return[null,null]}};l.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(l.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(l.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=l.DetermineComponentFrameRoot(),S=p[0],E=p[1];if(S&&E){var _=S.split(`
`),P=E.split(`
`);for(f=l=0;l<_.length&&!_[l].includes("DetermineComponentFrameRoot");)l++;for(;f<P.length&&!P[f].includes("DetermineComponentFrameRoot");)f++;if(l===_.length||f===P.length)for(l=_.length-1,f=P.length-1;1<=l&&0<=f&&_[l]!==P[f];)f--;for(;1<=l&&0<=f;l--,f--)if(_[l]!==P[f]){if(l!==1||f!==1)do if(l--,f--,0>f||_[l]!==P[f]){var H=`
`+_[l].replace(" at new "," at ");return e.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",e.displayName)),H}while(1<=l&&0<=f);break}}}finally{za=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?Yn(i):""}function Gg(e,n){switch(e.tag){case 26:case 27:case 5:return Yn(e.type);case 16:return Yn("Lazy");case 13:return e.child!==n&&n!==null?Yn("Suspense Fallback"):Yn("Suspense");case 19:return Yn("SuspenseList");case 0:case 15:return Ya(e.type,!1);case 11:return Ya(e.type.render,!1);case 1:return Ya(e.type,!0);case 31:return Yn("Activity");default:return""}}function zu(e){try{var n="",i=null;do n+=Gg(e,i),i=e,e=e.return;while(e);return n}catch(l){return`
Error generating stack: `+l.message+`
`+l.stack}}var Ja=Object.prototype.hasOwnProperty,Ka=o.unstable_scheduleCallback,Xa=o.unstable_cancelCallback,Hg=o.unstable_shouldYield,Bg=o.unstable_requestPaint,yt=o.unstable_now,Og=o.unstable_getCurrentPriorityLevel,Yu=o.unstable_ImmediatePriority,Ju=o.unstable_UserBlockingPriority,ss=o.unstable_NormalPriority,Fg=o.unstable_LowPriority,Ku=o.unstable_IdlePriority,qg=o.log,Vg=o.unstable_setDisableYieldValue,ai=null,vt=null;function vn(e){if(typeof qg=="function"&&Vg(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(ai,e)}catch{}}var St=Math.clz32?Math.clz32:Jg,zg=Math.log,Yg=Math.LN2;function Jg(e){return e>>>=0,e===0?32:31-(zg(e)/Yg|0)|0}var as=256,ls=262144,rs=4194304;function Jn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function us(e,n,i){var l=e.pendingLanes;if(l===0)return 0;var f=0,p=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var E=l&134217727;return E!==0?(l=E&~p,l!==0?f=Jn(l):(S&=E,S!==0?f=Jn(S):i||(i=E&~e,i!==0&&(f=Jn(i))))):(E=l&~p,E!==0?f=Jn(E):S!==0?f=Jn(S):i||(i=l&~e,i!==0&&(f=Jn(i)))),f===0?0:n!==0&&n!==f&&(n&p)===0&&(p=f&-f,i=n&-n,p>=i||p===32&&(i&4194048)!==0)?n:f}function li(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Kg(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xu(){var e=rs;return rs<<=1,(rs&62914560)===0&&(rs=4194304),e}function Qa(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function ri(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Xg(e,n,i,l,f,p){var S=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var E=e.entanglements,_=e.expirationTimes,P=e.hiddenUpdates;for(i=S&~i;0<i;){var H=31-St(i),F=1<<H;E[H]=0,_[H]=-1;var k=P[H];if(k!==null)for(P[H]=null,H=0;H<k.length;H++){var L=k[H];L!==null&&(L.lane&=-536870913)}i&=~F}l!==0&&Qu(e,l,0),p!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=p&~(S&~n))}function Qu(e,n,i){e.pendingLanes|=n,e.suspendedLanes&=~n;var l=31-St(n);e.entangledLanes|=n,e.entanglements[l]=e.entanglements[l]|1073741824|i&261930}function Wu(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var l=31-St(i),f=1<<l;f&n|e[l]&n&&(e[l]|=n),i&=~f}}function $u(e,n){var i=n&-n;return i=(i&42)!==0?1:Wa(i),(i&(e.suspendedLanes|n))!==0?0:i}function Wa(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function $a(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zu(){var e=J.p;return e!==0?e:(e=window.event,e===void 0?32:Hp(e.type))}function ju(e,n){var i=J.p;try{return J.p=e,n()}finally{J.p=i}}var Sn=Math.random().toString(36).slice(2),je="__reactFiber$"+Sn,ct="__reactProps$"+Sn,po="__reactContainer$"+Sn,Za="__reactEvents$"+Sn,Qg="__reactListeners$"+Sn,Wg="__reactHandles$"+Sn,ec="__reactResources$"+Sn,ui="__reactMarker$"+Sn;function ja(e){delete e[je],delete e[ct],delete e[Za],delete e[Qg],delete e[Wg]}function mo(e){var n=e[je];if(n)return n;for(var i=e.parentNode;i;){if(n=i[po]||i[je]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=Ep(e);e!==null;){if(i=e[je])return i;e=Ep(e)}return n}e=i,i=e.parentNode}return null}function ho(e){if(e=e[je]||e[po]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ci(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(a(33))}function go(e){var n=e[ec];return n||(n=e[ec]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function We(e){e[ui]=!0}var tc=new Set,nc={};function Kn(e,n){yo(e,n),yo(e+"Capture",n)}function yo(e,n){for(nc[e]=n,e=0;e<n.length;e++)tc.add(n[e])}var $g=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),oc={},ic={};function Zg(e){return Ja.call(ic,e)?!0:Ja.call(oc,e)?!1:$g.test(e)?ic[e]=!0:(oc[e]=!0,!1)}function cs(e,n,i){if(Zg(n))if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var l=n.toLowerCase().slice(0,5);if(l!=="data-"&&l!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+i)}}function ds(e,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+i)}}function Wt(e,n,i,l){if(l===null)e.removeAttribute(i);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(n,i,""+l)}}function Rt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function sc(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function jg(e,n,i){var l=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var f=l.get,p=l.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return f.call(this)},set:function(S){i=""+S,p.call(this,S)}}),Object.defineProperty(e,n,{enumerable:l.enumerable}),{getValue:function(){return i},setValue:function(S){i=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function el(e){if(!e._valueTracker){var n=sc(e)?"checked":"value";e._valueTracker=jg(e,n,""+e[n])}}function ac(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),l="";return e&&(l=sc(e)?e.checked?"true":"false":e.value),e=l,e!==i?(n.setValue(e),!0):!1}function fs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ey=/[\n"\\]/g;function xt(e){return e.replace(ey,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function tl(e,n,i,l,f,p,S,E){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Rt(n)):e.value!==""+Rt(n)&&(e.value=""+Rt(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?nl(e,S,Rt(n)):i!=null?nl(e,S,Rt(i)):l!=null&&e.removeAttribute("value"),f==null&&p!=null&&(e.defaultChecked=!!p),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+Rt(E):e.removeAttribute("name")}function lc(e,n,i,l,f,p,S,E){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),n!=null||i!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){el(e);return}i=i!=null?""+Rt(i):"",n=n!=null?""+Rt(n):i,E||n===e.value||(e.value=n),e.defaultValue=n}l=l??f,l=typeof l!="function"&&typeof l!="symbol"&&!!l,e.checked=E?e.checked:!!l,e.defaultChecked=!!l,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),el(e)}function nl(e,n,i){n==="number"&&fs(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function vo(e,n,i,l){if(e=e.options,n){n={};for(var f=0;f<i.length;f++)n["$"+i[f]]=!0;for(i=0;i<e.length;i++)f=n.hasOwnProperty("$"+e[i].value),e[i].selected!==f&&(e[i].selected=f),f&&l&&(e[i].defaultSelected=!0)}else{for(i=""+Rt(i),n=null,f=0;f<e.length;f++){if(e[f].value===i){e[f].selected=!0,l&&(e[f].defaultSelected=!0);return}n!==null||e[f].disabled||(n=e[f])}n!==null&&(n.selected=!0)}}function rc(e,n,i){if(n!=null&&(n=""+Rt(n),n!==e.value&&(e.value=n),i==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=i!=null?""+Rt(i):""}function uc(e,n,i,l){if(n==null){if(l!=null){if(i!=null)throw Error(a(92));if(Be(l)){if(1<l.length)throw Error(a(93));l=l[0]}i=l}i==null&&(i=""),n=i}i=Rt(n),e.defaultValue=i,l=e.textContent,l===i&&l!==""&&l!==null&&(e.value=l),el(e)}function So(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var ty=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cc(e,n,i){var l=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?l?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":l?e.setProperty(n,i):typeof i!="number"||i===0||ty.has(n)?n==="float"?e.cssFloat=i:e[n]=(""+i).trim():e[n]=i+"px"}function dc(e,n,i){if(n!=null&&typeof n!="object")throw Error(a(62));if(e=e.style,i!=null){for(var l in i)!i.hasOwnProperty(l)||n!=null&&n.hasOwnProperty(l)||(l.indexOf("--")===0?e.setProperty(l,""):l==="float"?e.cssFloat="":e[l]="");for(var f in n)l=n[f],n.hasOwnProperty(f)&&i[f]!==l&&cc(e,f,l)}else for(var p in n)n.hasOwnProperty(p)&&cc(e,p,n[p])}function ol(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ny=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),oy=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ps(e){return oy.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $t(){}var il=null;function sl(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var To=null,Co=null;function fc(e){var n=ho(e);if(n&&(e=n.stateNode)){var i=e[ct]||null;e:switch(e=n.stateNode,n.type){case"input":if(tl(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+xt(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var l=i[n];if(l!==e&&l.form===e.form){var f=l[ct]||null;if(!f)throw Error(a(90));tl(l,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<i.length;n++)l=i[n],l.form===e.form&&ac(l)}break e;case"textarea":rc(e,i.value,i.defaultValue);break e;case"select":n=i.value,n!=null&&vo(e,!!i.multiple,n,!1)}}}var al=!1;function pc(e,n,i){if(al)return e(n,i);al=!0;try{var l=e(n);return l}finally{if(al=!1,(To!==null||Co!==null)&&(ea(),To&&(n=To,e=Co,Co=To=null,fc(n),e)))for(n=0;n<e.length;n++)fc(e[n])}}function di(e,n){var i=e.stateNode;if(i===null)return null;var l=i[ct]||null;if(l===null)return null;i=l[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(e=e.type,l=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!l;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(a(231,n,typeof i));return i}var Zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ll=!1;if(Zt)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){ll=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{ll=!1}var Tn=null,rl=null,ms=null;function mc(){if(ms)return ms;var e,n=rl,i=n.length,l,f="value"in Tn?Tn.value:Tn.textContent,p=f.length;for(e=0;e<i&&n[e]===f[e];e++);var S=i-e;for(l=1;l<=S&&n[i-l]===f[p-l];l++);return ms=f.slice(e,1<l?1-l:void 0)}function hs(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function gs(){return!0}function hc(){return!1}function dt(e){function n(i,l,f,p,S){this._reactName=i,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(i=e[E],this[E]=i?i(p):p[E]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?gs:hc,this.isPropagationStopped=hc,this}return T(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=gs)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=gs)},persist:function(){},isPersistent:gs}),n}var Xn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ys=dt(Xn),pi=T({},Xn,{view:0,detail:0}),iy=dt(pi),ul,cl,mi,vs=T({},pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fl,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mi&&(mi&&e.type==="mousemove"?(ul=e.screenX-mi.screenX,cl=e.screenY-mi.screenY):cl=ul=0,mi=e),ul)},movementY:function(e){return"movementY"in e?e.movementY:cl}}),gc=dt(vs),sy=T({},vs,{dataTransfer:0}),ay=dt(sy),ly=T({},pi,{relatedTarget:0}),dl=dt(ly),ry=T({},Xn,{animationName:0,elapsedTime:0,pseudoElement:0}),uy=dt(ry),cy=T({},Xn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),dy=dt(cy),fy=T({},Xn,{data:0}),yc=dt(fy),py={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},my={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},hy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gy(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=hy[e])?!!n[e]:!1}function fl(){return gy}var yy=T({},pi,{key:function(e){if(e.key){var n=py[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hs(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?my[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fl,charCode:function(e){return e.type==="keypress"?hs(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hs(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),vy=dt(yy),Sy=T({},vs,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vc=dt(Sy),Ty=T({},pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fl}),Cy=dt(Ty),Ey=T({},Xn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ay=dt(Ey),_y=T({},vs,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),by=dt(_y),wy=T({},Xn,{newState:0,oldState:0}),Ry=dt(wy),xy=[9,13,27,32],pl=Zt&&"CompositionEvent"in window,hi=null;Zt&&"documentMode"in document&&(hi=document.documentMode);var Iy=Zt&&"TextEvent"in window&&!hi,Sc=Zt&&(!pl||hi&&8<hi&&11>=hi),Tc=" ",Cc=!1;function Ec(e,n){switch(e){case"keyup":return xy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ac(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Eo=!1;function My(e,n){switch(e){case"compositionend":return Ac(n);case"keypress":return n.which!==32?null:(Cc=!0,Tc);case"textInput":return e=n.data,e===Tc&&Cc?null:e;default:return null}}function Ny(e,n){if(Eo)return e==="compositionend"||!pl&&Ec(e,n)?(e=mc(),ms=rl=Tn=null,Eo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Sc&&n.locale!=="ko"?null:n.data;default:return null}}var Py={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _c(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!Py[e.type]:n==="textarea"}function bc(e,n,i,l){To?Co?Co.push(l):Co=[l]:To=l,n=la(n,"onChange"),0<n.length&&(i=new ys("onChange","change",null,i,l),e.push({event:i,listeners:n}))}var gi=null,yi=null;function Dy(e){rp(e,0)}function Ss(e){var n=ci(e);if(ac(n))return e}function wc(e,n){if(e==="change")return n}var Rc=!1;if(Zt){var ml;if(Zt){var hl="oninput"in document;if(!hl){var xc=document.createElement("div");xc.setAttribute("oninput","return;"),hl=typeof xc.oninput=="function"}ml=hl}else ml=!1;Rc=ml&&(!document.documentMode||9<document.documentMode)}function Ic(){gi&&(gi.detachEvent("onpropertychange",Mc),yi=gi=null)}function Mc(e){if(e.propertyName==="value"&&Ss(yi)){var n=[];bc(n,yi,e,sl(e)),pc(Dy,n)}}function ky(e,n,i){e==="focusin"?(Ic(),gi=n,yi=i,gi.attachEvent("onpropertychange",Mc)):e==="focusout"&&Ic()}function Uy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ss(yi)}function Ly(e,n){if(e==="click")return Ss(n)}function Gy(e,n){if(e==="input"||e==="change")return Ss(n)}function Hy(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Tt=typeof Object.is=="function"?Object.is:Hy;function vi(e,n){if(Tt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),l=Object.keys(n);if(i.length!==l.length)return!1;for(l=0;l<i.length;l++){var f=i[l];if(!Ja.call(n,f)||!Tt(e[f],n[f]))return!1}return!0}function Nc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Pc(e,n){var i=Nc(e);e=0;for(var l;i;){if(i.nodeType===3){if(l=e+i.textContent.length,e<=n&&l>=n)return{node:i,offset:n-e};e=l}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Nc(i)}}function Dc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Dc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function kc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=fs(e.document);n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=fs(e.document)}return n}function gl(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var By=Zt&&"documentMode"in document&&11>=document.documentMode,Ao=null,yl=null,Si=null,vl=!1;function Uc(e,n,i){var l=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;vl||Ao==null||Ao!==fs(l)||(l=Ao,"selectionStart"in l&&gl(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Si&&vi(Si,l)||(Si=l,l=la(yl,"onSelect"),0<l.length&&(n=new ys("onSelect","select",null,n,i),e.push({event:n,listeners:l}),n.target=Ao)))}function Qn(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var _o={animationend:Qn("Animation","AnimationEnd"),animationiteration:Qn("Animation","AnimationIteration"),animationstart:Qn("Animation","AnimationStart"),transitionrun:Qn("Transition","TransitionRun"),transitionstart:Qn("Transition","TransitionStart"),transitioncancel:Qn("Transition","TransitionCancel"),transitionend:Qn("Transition","TransitionEnd")},Sl={},Lc={};Zt&&(Lc=document.createElement("div").style,"AnimationEvent"in window||(delete _o.animationend.animation,delete _o.animationiteration.animation,delete _o.animationstart.animation),"TransitionEvent"in window||delete _o.transitionend.transition);function Wn(e){if(Sl[e])return Sl[e];if(!_o[e])return e;var n=_o[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in Lc)return Sl[e]=n[i];return e}var Gc=Wn("animationend"),Hc=Wn("animationiteration"),Bc=Wn("animationstart"),Oy=Wn("transitionrun"),Fy=Wn("transitionstart"),qy=Wn("transitioncancel"),Oc=Wn("transitionend"),Fc=new Map,Tl="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Tl.push("scrollEnd");function Bt(e,n){Fc.set(e,n),Kn(n,[e])}var Ts=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},It=[],bo=0,Cl=0;function Cs(){for(var e=bo,n=Cl=bo=0;n<e;){var i=It[n];It[n++]=null;var l=It[n];It[n++]=null;var f=It[n];It[n++]=null;var p=It[n];if(It[n++]=null,l!==null&&f!==null){var S=l.pending;S===null?f.next=f:(f.next=S.next,S.next=f),l.pending=f}p!==0&&qc(i,f,p)}}function Es(e,n,i,l){It[bo++]=e,It[bo++]=n,It[bo++]=i,It[bo++]=l,Cl|=l,e.lanes|=l,e=e.alternate,e!==null&&(e.lanes|=l)}function El(e,n,i,l){return Es(e,n,i,l),As(e)}function $n(e,n){return Es(e,null,null,n),As(e)}function qc(e,n,i){e.lanes|=i;var l=e.alternate;l!==null&&(l.lanes|=i);for(var f=!1,p=e.return;p!==null;)p.childLanes|=i,l=p.alternate,l!==null&&(l.childLanes|=i),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(f=!0)),e=p,p=p.return;return e.tag===3?(p=e.stateNode,f&&n!==null&&(f=31-St(i),e=p.hiddenUpdates,l=e[f],l===null?e[f]=[n]:l.push(n),n.lane=i|536870912),p):null}function As(e){if(50<Fi)throw Fi=0,Nr=null,Error(a(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var wo={};function Vy(e,n,i,l){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(e,n,i,l){return new Vy(e,n,i,l)}function Al(e){return e=e.prototype,!(!e||!e.isReactComponent)}function jt(e,n){var i=e.alternate;return i===null?(i=Ct(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function Vc(e,n){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,n=i.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function _s(e,n,i,l,f,p){var S=0;if(l=e,typeof e=="function")Al(e)&&(S=1);else if(typeof e=="string")S=Xv(e,i,ne.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Y:return e=Ct(31,i,n,f),e.elementType=Y,e.lanes=p,e;case M:return Zn(i.children,f,p,n);case I:S=8,f|=24;break;case D:return e=Ct(12,i,n,f|2),e.elementType=D,e.lanes=p,e;case Z:return e=Ct(13,i,n,f),e.elementType=Z,e.lanes=p,e;case te:return e=Ct(19,i,n,f),e.elementType=te,e.lanes=p,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:S=10;break e;case V:S=9;break e;case X:S=11;break e;case K:S=14;break e;case Q:S=16,l=null;break e}S=29,i=Error(a(130,e===null?"null":typeof e,"")),l=null}return n=Ct(S,i,n,f),n.elementType=e,n.type=l,n.lanes=p,n}function Zn(e,n,i,l){return e=Ct(7,e,l,n),e.lanes=i,e}function _l(e,n,i){return e=Ct(6,e,null,n),e.lanes=i,e}function zc(e){var n=Ct(18,null,null,0);return n.stateNode=e,n}function bl(e,n,i){return n=Ct(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Yc=new WeakMap;function Mt(e,n){if(typeof e=="object"&&e!==null){var i=Yc.get(e);return i!==void 0?i:(n={value:e,source:n,stack:zu(n)},Yc.set(e,n),n)}return{value:e,source:n,stack:zu(n)}}var Ro=[],xo=0,bs=null,Ti=0,Nt=[],Pt=0,Cn=null,Yt=1,Jt="";function en(e,n){Ro[xo++]=Ti,Ro[xo++]=bs,bs=e,Ti=n}function Jc(e,n,i){Nt[Pt++]=Yt,Nt[Pt++]=Jt,Nt[Pt++]=Cn,Cn=e;var l=Yt;e=Jt;var f=32-St(l)-1;l&=~(1<<f),i+=1;var p=32-St(n)+f;if(30<p){var S=f-f%5;p=(l&(1<<S)-1).toString(32),l>>=S,f-=S,Yt=1<<32-St(n)+f|i<<f|l,Jt=p+e}else Yt=1<<p|i<<f|l,Jt=e}function wl(e){e.return!==null&&(en(e,1),Jc(e,1,0))}function Rl(e){for(;e===bs;)bs=Ro[--xo],Ro[xo]=null,Ti=Ro[--xo],Ro[xo]=null;for(;e===Cn;)Cn=Nt[--Pt],Nt[Pt]=null,Jt=Nt[--Pt],Nt[Pt]=null,Yt=Nt[--Pt],Nt[Pt]=null}function Kc(e,n){Nt[Pt++]=Yt,Nt[Pt++]=Jt,Nt[Pt++]=Cn,Yt=n.id,Jt=n.overflow,Cn=e}var et=null,Ue=null,Se=!1,En=null,Dt=!1,xl=Error(a(519));function An(e){var n=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ci(Mt(n,e)),xl}function Xc(e){var n=e.stateNode,i=e.type,l=e.memoizedProps;switch(n[je]=e,n[ct]=l,i){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(i=0;i<Vi.length;i++)ge(Vi[i],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),lc(n,l.value,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),uc(n,l.value,l.defaultValue,l.children)}i=l.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||l.suppressHydrationWarning===!0||fp(n.textContent,i)?(l.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),l.onScroll!=null&&ge("scroll",n),l.onScrollEnd!=null&&ge("scrollend",n),l.onClick!=null&&(n.onclick=$t),n=!0):n=!1,n||An(e,!0)}function Qc(e){for(et=e.return;et;)switch(et.tag){case 5:case 31:case 13:Dt=!1;return;case 27:case 3:Dt=!0;return;default:et=et.return}}function Io(e){if(e!==et)return!1;if(!Se)return Qc(e),Se=!0,!1;var n=e.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||Jr(e.type,e.memoizedProps)),i=!i),i&&Ue&&An(e),Qc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ue=Cp(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));Ue=Cp(e)}else n===27?(n=Ue,Gn(e.type)?(e=$r,$r=null,Ue=e):Ue=n):Ue=et?Ut(e.stateNode.nextSibling):null;return!0}function jn(){Ue=et=null,Se=!1}function Il(){var e=En;return e!==null&&(ht===null?ht=e:ht.push.apply(ht,e),En=null),e}function Ci(e){En===null?En=[e]:En.push(e)}var Ml=R(null),eo=null,tn=null;function _n(e,n,i){W(Ml,n._currentValue),n._currentValue=i}function nn(e){e._currentValue=Ml.current,q(Ml)}function Nl(e,n,i){for(;e!==null;){var l=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,l!==null&&(l.childLanes|=n)):l!==null&&(l.childLanes&n)!==n&&(l.childLanes|=n),e===i)break;e=e.return}}function Pl(e,n,i,l){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var p=f.dependencies;if(p!==null){var S=f.child;p=p.firstContext;e:for(;p!==null;){var E=p;p=f;for(var _=0;_<n.length;_++)if(E.context===n[_]){p.lanes|=i,E=p.alternate,E!==null&&(E.lanes|=i),Nl(p.return,i,e),l||(S=null);break e}p=E.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(a(341));S.lanes|=i,p=S.alternate,p!==null&&(p.lanes|=i),Nl(S,i,e),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===e){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function Mo(e,n,i,l){e=null;for(var f=n,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(a(387));if(S=S.memoizedProps,S!==null){var E=f.type;Tt(f.pendingProps.value,S.value)||(e!==null?e.push(E):e=[E])}}else if(f===we.current){if(S=f.alternate,S===null)throw Error(a(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Xi):e=[Xi])}f=f.return}e!==null&&Pl(n,e,i,l),n.flags|=262144}function ws(e){for(e=e.firstContext;e!==null;){if(!Tt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function to(e){eo=e,tn=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function tt(e){return Wc(eo,e)}function Rs(e,n){return eo===null&&to(e),Wc(e,n)}function Wc(e,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},tn===null){if(e===null)throw Error(a(308));tn=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else tn=tn.next=n;return i}var zy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(i,l){e.push(l)}};this.abort=function(){n.aborted=!0,e.forEach(function(i){return i()})}},Yy=o.unstable_scheduleCallback,Jy=o.unstable_NormalPriority,Ye={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Dl(){return{controller:new zy,data:new Map,refCount:0}}function Ei(e){e.refCount--,e.refCount===0&&Yy(Jy,function(){e.controller.abort()})}var Ai=null,kl=0,No=0,Po=null;function Ky(e,n){if(Ai===null){var i=Ai=[];kl=0,No=Gr(),Po={status:"pending",value:void 0,then:function(l){i.push(l)}}}return kl++,n.then($c,$c),n}function $c(){if(--kl===0&&Ai!==null){Po!==null&&(Po.status="fulfilled");var e=Ai;Ai=null,No=0,Po=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Xy(e,n){var i=[],l={status:"pending",value:null,reason:null,then:function(f){i.push(f)}};return e.then(function(){l.status="fulfilled",l.value=n;for(var f=0;f<i.length;f++)(0,i[f])(n)},function(f){for(l.status="rejected",l.reason=f,f=0;f<i.length;f++)(0,i[f])(void 0)}),l}var Zc=G.S;G.S=function(e,n){Lf=yt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ky(e,n),Zc!==null&&Zc(e,n)};var no=R(null);function Ul(){var e=no.current;return e!==null?e:De.pooledCache}function xs(e,n){n===null?W(no,no.current):W(no,n.pool)}function jc(){var e=Ul();return e===null?null:{parent:Ye._currentValue,pool:e}}var Do=Error(a(460)),Ll=Error(a(474)),Is=Error(a(542)),Ms={then:function(){}};function ed(e){return e=e.status,e==="fulfilled"||e==="rejected"}function td(e,n,i){switch(i=e[i],i===void 0?e.push(n):i!==n&&(n.then($t,$t),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,od(e),e;default:if(typeof n.status=="string")n.then($t,$t);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=n,e.status="pending",e.then(function(l){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=l}},function(l){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=l}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,od(e),e}throw io=n,Do}}function oo(e){try{var n=e._init;return n(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(io=i,Do):i}}var io=null;function nd(){if(io===null)throw Error(a(459));var e=io;return io=null,e}function od(e){if(e===Do||e===Is)throw Error(a(483))}var ko=null,_i=0;function Ns(e){var n=_i;return _i+=1,ko===null&&(ko=[]),td(ko,e,n)}function bi(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Ps(e,n){throw n.$$typeof===C?Error(a(525)):(e=Object.prototype.toString.call(n),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function id(e){function n(x,w){if(e){var N=x.deletions;N===null?(x.deletions=[w],x.flags|=16):N.push(w)}}function i(x,w){if(!e)return null;for(;w!==null;)n(x,w),w=w.sibling;return null}function l(x){for(var w=new Map;x!==null;)x.key!==null?w.set(x.key,x):w.set(x.index,x),x=x.sibling;return w}function f(x,w){return x=jt(x,w),x.index=0,x.sibling=null,x}function p(x,w,N){return x.index=N,e?(N=x.alternate,N!==null?(N=N.index,N<w?(x.flags|=67108866,w):N):(x.flags|=67108866,w)):(x.flags|=1048576,w)}function S(x){return e&&x.alternate===null&&(x.flags|=67108866),x}function E(x,w,N,O){return w===null||w.tag!==6?(w=_l(N,x.mode,O),w.return=x,w):(w=f(w,N),w.return=x,w)}function _(x,w,N,O){var ie=N.type;return ie===M?H(x,w,N.props.children,O,N.key):w!==null&&(w.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===Q&&oo(ie)===w.type)?(w=f(w,N.props),bi(w,N),w.return=x,w):(w=_s(N.type,N.key,N.props,null,x.mode,O),bi(w,N),w.return=x,w)}function P(x,w,N,O){return w===null||w.tag!==4||w.stateNode.containerInfo!==N.containerInfo||w.stateNode.implementation!==N.implementation?(w=bl(N,x.mode,O),w.return=x,w):(w=f(w,N.children||[]),w.return=x,w)}function H(x,w,N,O,ie){return w===null||w.tag!==7?(w=Zn(N,x.mode,O,ie),w.return=x,w):(w=f(w,N),w.return=x,w)}function F(x,w,N){if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return w=_l(""+w,x.mode,N),w.return=x,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case A:return N=_s(w.type,w.key,w.props,null,x.mode,N),bi(N,w),N.return=x,N;case U:return w=bl(w,x.mode,N),w.return=x,w;case Q:return w=oo(w),F(x,w,N)}if(Be(w)||re(w))return w=Zn(w,x.mode,N,null),w.return=x,w;if(typeof w.then=="function")return F(x,Ns(w),N);if(w.$$typeof===B)return F(x,Rs(x,w),N);Ps(x,w)}return null}function k(x,w,N,O){var ie=w!==null?w.key:null;if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return ie!==null?null:E(x,w,""+N,O);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case A:return N.key===ie?_(x,w,N,O):null;case U:return N.key===ie?P(x,w,N,O):null;case Q:return N=oo(N),k(x,w,N,O)}if(Be(N)||re(N))return ie!==null?null:H(x,w,N,O,null);if(typeof N.then=="function")return k(x,w,Ns(N),O);if(N.$$typeof===B)return k(x,w,Rs(x,N),O);Ps(x,N)}return null}function L(x,w,N,O,ie){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return x=x.get(N)||null,E(w,x,""+O,ie);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case A:return x=x.get(O.key===null?N:O.key)||null,_(w,x,O,ie);case U:return x=x.get(O.key===null?N:O.key)||null,P(w,x,O,ie);case Q:return O=oo(O),L(x,w,N,O,ie)}if(Be(O)||re(O))return x=x.get(N)||null,H(w,x,O,ie,null);if(typeof O.then=="function")return L(x,w,N,Ns(O),ie);if(O.$$typeof===B)return L(x,w,N,Rs(w,O),ie);Ps(w,O)}return null}function ee(x,w,N,O){for(var ie=null,Ce=null,oe=w,pe=w=0,ve=null;oe!==null&&pe<N.length;pe++){oe.index>pe?(ve=oe,oe=null):ve=oe.sibling;var Ee=k(x,oe,N[pe],O);if(Ee===null){oe===null&&(oe=ve);break}e&&oe&&Ee.alternate===null&&n(x,oe),w=p(Ee,w,pe),Ce===null?ie=Ee:Ce.sibling=Ee,Ce=Ee,oe=ve}if(pe===N.length)return i(x,oe),Se&&en(x,pe),ie;if(oe===null){for(;pe<N.length;pe++)oe=F(x,N[pe],O),oe!==null&&(w=p(oe,w,pe),Ce===null?ie=oe:Ce.sibling=oe,Ce=oe);return Se&&en(x,pe),ie}for(oe=l(oe);pe<N.length;pe++)ve=L(oe,x,pe,N[pe],O),ve!==null&&(e&&ve.alternate!==null&&oe.delete(ve.key===null?pe:ve.key),w=p(ve,w,pe),Ce===null?ie=ve:Ce.sibling=ve,Ce=ve);return e&&oe.forEach(function(qn){return n(x,qn)}),Se&&en(x,pe),ie}function se(x,w,N,O){if(N==null)throw Error(a(151));for(var ie=null,Ce=null,oe=w,pe=w=0,ve=null,Ee=N.next();oe!==null&&!Ee.done;pe++,Ee=N.next()){oe.index>pe?(ve=oe,oe=null):ve=oe.sibling;var qn=k(x,oe,Ee.value,O);if(qn===null){oe===null&&(oe=ve);break}e&&oe&&qn.alternate===null&&n(x,oe),w=p(qn,w,pe),Ce===null?ie=qn:Ce.sibling=qn,Ce=qn,oe=ve}if(Ee.done)return i(x,oe),Se&&en(x,pe),ie;if(oe===null){for(;!Ee.done;pe++,Ee=N.next())Ee=F(x,Ee.value,O),Ee!==null&&(w=p(Ee,w,pe),Ce===null?ie=Ee:Ce.sibling=Ee,Ce=Ee);return Se&&en(x,pe),ie}for(oe=l(oe);!Ee.done;pe++,Ee=N.next())Ee=L(oe,x,pe,Ee.value,O),Ee!==null&&(e&&Ee.alternate!==null&&oe.delete(Ee.key===null?pe:Ee.key),w=p(Ee,w,pe),Ce===null?ie=Ee:Ce.sibling=Ee,Ce=Ee);return e&&oe.forEach(function(s0){return n(x,s0)}),Se&&en(x,pe),ie}function Ne(x,w,N,O){if(typeof N=="object"&&N!==null&&N.type===M&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case A:e:{for(var ie=N.key;w!==null;){if(w.key===ie){if(ie=N.type,ie===M){if(w.tag===7){i(x,w.sibling),O=f(w,N.props.children),O.return=x,x=O;break e}}else if(w.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===Q&&oo(ie)===w.type){i(x,w.sibling),O=f(w,N.props),bi(O,N),O.return=x,x=O;break e}i(x,w);break}else n(x,w);w=w.sibling}N.type===M?(O=Zn(N.props.children,x.mode,O,N.key),O.return=x,x=O):(O=_s(N.type,N.key,N.props,null,x.mode,O),bi(O,N),O.return=x,x=O)}return S(x);case U:e:{for(ie=N.key;w!==null;){if(w.key===ie)if(w.tag===4&&w.stateNode.containerInfo===N.containerInfo&&w.stateNode.implementation===N.implementation){i(x,w.sibling),O=f(w,N.children||[]),O.return=x,x=O;break e}else{i(x,w);break}else n(x,w);w=w.sibling}O=bl(N,x.mode,O),O.return=x,x=O}return S(x);case Q:return N=oo(N),Ne(x,w,N,O)}if(Be(N))return ee(x,w,N,O);if(re(N)){if(ie=re(N),typeof ie!="function")throw Error(a(150));return N=ie.call(N),se(x,w,N,O)}if(typeof N.then=="function")return Ne(x,w,Ns(N),O);if(N.$$typeof===B)return Ne(x,w,Rs(x,N),O);Ps(x,N)}return typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint"?(N=""+N,w!==null&&w.tag===6?(i(x,w.sibling),O=f(w,N),O.return=x,x=O):(i(x,w),O=_l(N,x.mode,O),O.return=x,x=O),S(x)):i(x,w)}return function(x,w,N,O){try{_i=0;var ie=Ne(x,w,N,O);return ko=null,ie}catch(oe){if(oe===Do||oe===Is)throw oe;var Ce=Ct(29,oe,null,x.mode);return Ce.lanes=O,Ce.return=x,Ce}finally{}}}var so=id(!0),sd=id(!1),bn=!1;function Gl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hl(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function wn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Rn(e,n,i){var l=e.updateQueue;if(l===null)return null;if(l=l.shared,(_e&2)!==0){var f=l.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),l.pending=n,n=As(e),qc(e,null,i),n}return Es(e,l,n,i),As(e)}function wi(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,Wu(e,i)}}function Bl(e,n){var i=e.updateQueue,l=e.alternate;if(l!==null&&(l=l.updateQueue,i===l)){var f=null,p=null;if(i=i.firstBaseUpdate,i!==null){do{var S={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};p===null?f=p=S:p=p.next=S,i=i.next}while(i!==null);p===null?f=p=n:p=p.next=n}else f=p=n;i={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,callbacks:l.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}var Ol=!1;function Ri(){if(Ol){var e=Po;if(e!==null)throw e}}function xi(e,n,i,l){Ol=!1;var f=e.updateQueue;bn=!1;var p=f.firstBaseUpdate,S=f.lastBaseUpdate,E=f.shared.pending;if(E!==null){f.shared.pending=null;var _=E,P=_.next;_.next=null,S===null?p=P:S.next=P,S=_;var H=e.alternate;H!==null&&(H=H.updateQueue,E=H.lastBaseUpdate,E!==S&&(E===null?H.firstBaseUpdate=P:E.next=P,H.lastBaseUpdate=_))}if(p!==null){var F=f.baseState;S=0,H=P=_=null,E=p;do{var k=E.lane&-536870913,L=k!==E.lane;if(L?(ye&k)===k:(l&k)===k){k!==0&&k===No&&(Ol=!0),H!==null&&(H=H.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var ee=e,se=E;k=n;var Ne=i;switch(se.tag){case 1:if(ee=se.payload,typeof ee=="function"){F=ee.call(Ne,F,k);break e}F=ee;break e;case 3:ee.flags=ee.flags&-65537|128;case 0:if(ee=se.payload,k=typeof ee=="function"?ee.call(Ne,F,k):ee,k==null)break e;F=T({},F,k);break e;case 2:bn=!0}}k=E.callback,k!==null&&(e.flags|=64,L&&(e.flags|=8192),L=f.callbacks,L===null?f.callbacks=[k]:L.push(k))}else L={lane:k,tag:E.tag,payload:E.payload,callback:E.callback,next:null},H===null?(P=H=L,_=F):H=H.next=L,S|=k;if(E=E.next,E===null){if(E=f.shared.pending,E===null)break;L=E,E=L.next,L.next=null,f.lastBaseUpdate=L,f.shared.pending=null}}while(!0);H===null&&(_=F),f.baseState=_,f.firstBaseUpdate=P,f.lastBaseUpdate=H,p===null&&(f.shared.lanes=0),Pn|=S,e.lanes=S,e.memoizedState=F}}function ad(e,n){if(typeof e!="function")throw Error(a(191,e));e.call(n)}function ld(e,n){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)ad(i[e],n)}var Uo=R(null),Ds=R(0);function rd(e,n){e=fn,W(Ds,e),W(Uo,n),fn=e|n.baseLanes}function Fl(){W(Ds,fn),W(Uo,Uo.current)}function ql(){fn=Ds.current,q(Uo),q(Ds)}var Et=R(null),kt=null;function xn(e){var n=e.alternate;W(Ve,Ve.current&1),W(Et,e),kt===null&&(n===null||Uo.current!==null||n.memoizedState!==null)&&(kt=e)}function Vl(e){W(Ve,Ve.current),W(Et,e),kt===null&&(kt=e)}function ud(e){e.tag===22?(W(Ve,Ve.current),W(Et,e),kt===null&&(kt=e)):In()}function In(){W(Ve,Ve.current),W(Et,Et.current)}function At(e){q(Et),kt===e&&(kt=null),q(Ve)}var Ve=R(0);function ks(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Qr(i)||Wr(i)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var on=0,fe=null,Ie=null,Je=null,Us=!1,Lo=!1,ao=!1,Ls=0,Ii=0,Go=null,Qy=0;function Oe(){throw Error(a(321))}function zl(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!Tt(e[i],n[i]))return!1;return!0}function Yl(e,n,i,l,f,p){return on=p,fe=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,G.H=e===null||e.memoizedState===null?Jd:ar,ao=!1,p=i(l,f),ao=!1,Lo&&(p=dd(n,i,l,f)),cd(e),p}function cd(e){G.H=Pi;var n=Ie!==null&&Ie.next!==null;if(on=0,Je=Ie=fe=null,Us=!1,Ii=0,Go=null,n)throw Error(a(300));e===null||Ke||(e=e.dependencies,e!==null&&ws(e)&&(Ke=!0))}function dd(e,n,i,l){fe=e;var f=0;do{if(Lo&&(Go=null),Ii=0,Lo=!1,25<=f)throw Error(a(301));if(f+=1,Je=Ie=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}G.H=Kd,p=n(i,l)}while(Lo);return p}function Wy(){var e=G.H,n=e.useState()[0];return n=typeof n.then=="function"?Mi(n):n,e=e.useState()[0],(Ie!==null?Ie.memoizedState:null)!==e&&(fe.flags|=1024),n}function Jl(){var e=Ls!==0;return Ls=0,e}function Kl(e,n,i){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i}function Xl(e){if(Us){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Us=!1}on=0,Je=Ie=fe=null,Lo=!1,Ii=Ls=0,Go=null}function lt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Je===null?fe.memoizedState=Je=e:Je=Je.next=e,Je}function ze(){if(Ie===null){var e=fe.alternate;e=e!==null?e.memoizedState:null}else e=Ie.next;var n=Je===null?fe.memoizedState:Je.next;if(n!==null)Je=n,Ie=e;else{if(e===null)throw fe.alternate===null?Error(a(467)):Error(a(310));Ie=e,e={memoizedState:Ie.memoizedState,baseState:Ie.baseState,baseQueue:Ie.baseQueue,queue:Ie.queue,next:null},Je===null?fe.memoizedState=Je=e:Je=Je.next=e}return Je}function Gs(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mi(e){var n=Ii;return Ii+=1,Go===null&&(Go=[]),e=td(Go,e,n),n=fe,(Je===null?n.memoizedState:Je.next)===null&&(n=n.alternate,G.H=n===null||n.memoizedState===null?Jd:ar),e}function Hs(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mi(e);if(e.$$typeof===B)return tt(e)}throw Error(a(438,String(e)))}function Ql(e){var n=null,i=fe.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var l=fe.alternate;l!==null&&(l=l.updateQueue,l!==null&&(l=l.memoCache,l!=null&&(n={data:l.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=Gs(),fe.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(e),l=0;l<e;l++)i[l]=z;return n.index++,i}function sn(e,n){return typeof n=="function"?n(e):n}function Bs(e){var n=ze();return Wl(n,Ie,e)}function Wl(e,n,i){var l=e.queue;if(l===null)throw Error(a(311));l.lastRenderedReducer=i;var f=e.baseQueue,p=l.pending;if(p!==null){if(f!==null){var S=f.next;f.next=p.next,p.next=S}n.baseQueue=f=p,l.pending=null}if(p=e.baseState,f===null)e.memoizedState=p;else{n=f.next;var E=S=null,_=null,P=n,H=!1;do{var F=P.lane&-536870913;if(F!==P.lane?(ye&F)===F:(on&F)===F){var k=P.revertLane;if(k===0)_!==null&&(_=_.next={lane:0,revertLane:0,gesture:null,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),F===No&&(H=!0);else if((on&k)===k){P=P.next,k===No&&(H=!0);continue}else F={lane:0,revertLane:P.revertLane,gesture:null,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},_===null?(E=_=F,S=p):_=_.next=F,fe.lanes|=k,Pn|=k;F=P.action,ao&&i(p,F),p=P.hasEagerState?P.eagerState:i(p,F)}else k={lane:F,revertLane:P.revertLane,gesture:P.gesture,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null},_===null?(E=_=k,S=p):_=_.next=k,fe.lanes|=F,Pn|=F;P=P.next}while(P!==null&&P!==n);if(_===null?S=p:_.next=E,!Tt(p,e.memoizedState)&&(Ke=!0,H&&(i=Po,i!==null)))throw i;e.memoizedState=p,e.baseState=S,e.baseQueue=_,l.lastRenderedState=p}return f===null&&(l.lanes=0),[e.memoizedState,l.dispatch]}function $l(e){var n=ze(),i=n.queue;if(i===null)throw Error(a(311));i.lastRenderedReducer=e;var l=i.dispatch,f=i.pending,p=n.memoizedState;if(f!==null){i.pending=null;var S=f=f.next;do p=e(p,S.action),S=S.next;while(S!==f);Tt(p,n.memoizedState)||(Ke=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),i.lastRenderedState=p}return[p,l]}function fd(e,n,i){var l=fe,f=ze(),p=Se;if(p){if(i===void 0)throw Error(a(407));i=i()}else i=n();var S=!Tt((Ie||f).memoizedState,i);if(S&&(f.memoizedState=i,Ke=!0),f=f.queue,er(hd.bind(null,l,f,e),[e]),f.getSnapshot!==n||S||Je!==null&&Je.memoizedState.tag&1){if(l.flags|=2048,Ho(9,{destroy:void 0},md.bind(null,l,f,i,n),null),De===null)throw Error(a(349));p||(on&127)!==0||pd(l,n,i)}return i}function pd(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=fe.updateQueue,n===null?(n=Gs(),fe.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function md(e,n,i,l){n.value=i,n.getSnapshot=l,gd(n)&&yd(e)}function hd(e,n,i){return i(function(){gd(n)&&yd(e)})}function gd(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!Tt(e,i)}catch{return!0}}function yd(e){var n=$n(e,2);n!==null&&gt(n,e,2)}function Zl(e){var n=lt();if(typeof e=="function"){var i=e;if(e=i(),ao){vn(!0);try{i()}finally{vn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:sn,lastRenderedState:e},n}function vd(e,n,i,l){return e.baseState=i,Wl(e,Ie,typeof l=="function"?l:sn)}function $y(e,n,i,l,f){if(qs(e))throw Error(a(485));if(e=n.action,e!==null){var p={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){p.listeners.push(S)}};G.T!==null?i(!0):p.isTransition=!1,l(p),i=n.pending,i===null?(p.next=n.pending=p,Sd(n,p)):(p.next=i.next,n.pending=i.next=p)}}function Sd(e,n){var i=n.action,l=n.payload,f=e.state;if(n.isTransition){var p=G.T,S={};G.T=S;try{var E=i(f,l),_=G.S;_!==null&&_(S,E),Td(e,n,E)}catch(P){jl(e,n,P)}finally{p!==null&&S.types!==null&&(p.types=S.types),G.T=p}}else try{p=i(f,l),Td(e,n,p)}catch(P){jl(e,n,P)}}function Td(e,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(l){Cd(e,n,l)},function(l){return jl(e,n,l)}):Cd(e,n,i)}function Cd(e,n,i){n.status="fulfilled",n.value=i,Ed(n),e.state=i,n=e.pending,n!==null&&(i=n.next,i===n?e.pending=null:(i=i.next,n.next=i,Sd(e,i)))}function jl(e,n,i){var l=e.pending;if(e.pending=null,l!==null){l=l.next;do n.status="rejected",n.reason=i,Ed(n),n=n.next;while(n!==l)}e.action=null}function Ed(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Ad(e,n){return n}function _d(e,n){if(Se){var i=De.formState;if(i!==null){e:{var l=fe;if(Se){if(Ue){t:{for(var f=Ue,p=Dt;f.nodeType!==8;){if(!p){f=null;break t}if(f=Ut(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){Ue=Ut(f.nextSibling),l=f.data==="F!";break e}}An(l)}l=!1}l&&(n=i[0])}}return i=lt(),i.memoizedState=i.baseState=n,l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ad,lastRenderedState:n},i.queue=l,i=Vd.bind(null,fe,l),l.dispatch=i,l=Zl(!1),p=sr.bind(null,fe,!1,l.queue),l=lt(),f={state:n,dispatch:null,action:e,pending:null},l.queue=f,i=$y.bind(null,fe,f,p,i),f.dispatch=i,l.memoizedState=e,[n,i,!1]}function bd(e){var n=ze();return wd(n,Ie,e)}function wd(e,n,i){if(n=Wl(e,n,Ad)[0],e=Bs(sn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var l=Mi(n)}catch(S){throw S===Do?Is:S}else l=n;n=ze();var f=n.queue,p=f.dispatch;return i!==n.memoizedState&&(fe.flags|=2048,Ho(9,{destroy:void 0},Zy.bind(null,f,i),null)),[l,p,e]}function Zy(e,n){e.action=n}function Rd(e){var n=ze(),i=Ie;if(i!==null)return wd(n,i,e);ze(),n=n.memoizedState,i=ze();var l=i.queue.dispatch;return i.memoizedState=e,[n,l,!1]}function Ho(e,n,i,l){return e={tag:e,create:i,deps:l,inst:n,next:null},n=fe.updateQueue,n===null&&(n=Gs(),fe.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=e.next=e:(l=i.next,i.next=e,e.next=l,n.lastEffect=e),e}function xd(){return ze().memoizedState}function Os(e,n,i,l){var f=lt();fe.flags|=e,f.memoizedState=Ho(1|n,{destroy:void 0},i,l===void 0?null:l)}function Fs(e,n,i,l){var f=ze();l=l===void 0?null:l;var p=f.memoizedState.inst;Ie!==null&&l!==null&&zl(l,Ie.memoizedState.deps)?f.memoizedState=Ho(n,p,i,l):(fe.flags|=e,f.memoizedState=Ho(1|n,p,i,l))}function Id(e,n){Os(8390656,8,e,n)}function er(e,n){Fs(2048,8,e,n)}function jy(e){fe.flags|=4;var n=fe.updateQueue;if(n===null)n=Gs(),fe.updateQueue=n,n.events=[e];else{var i=n.events;i===null?n.events=[e]:i.push(e)}}function Md(e){var n=ze().memoizedState;return jy({ref:n,nextImpl:e}),function(){if((_e&2)!==0)throw Error(a(440));return n.impl.apply(void 0,arguments)}}function Nd(e,n){return Fs(4,2,e,n)}function Pd(e,n){return Fs(4,4,e,n)}function Dd(e,n){if(typeof n=="function"){e=e();var i=n(e);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function kd(e,n,i){i=i!=null?i.concat([e]):null,Fs(4,4,Dd.bind(null,n,e),i)}function tr(){}function Ud(e,n){var i=ze();n=n===void 0?null:n;var l=i.memoizedState;return n!==null&&zl(n,l[1])?l[0]:(i.memoizedState=[e,n],e)}function Ld(e,n){var i=ze();n=n===void 0?null:n;var l=i.memoizedState;if(n!==null&&zl(n,l[1]))return l[0];if(l=e(),ao){vn(!0);try{e()}finally{vn(!1)}}return i.memoizedState=[l,n],l}function nr(e,n,i){return i===void 0||(on&1073741824)!==0&&(ye&261930)===0?e.memoizedState=n:(e.memoizedState=i,e=Hf(),fe.lanes|=e,Pn|=e,i)}function Gd(e,n,i,l){return Tt(i,n)?i:Uo.current!==null?(e=nr(e,i,l),Tt(e,n)||(Ke=!0),e):(on&42)===0||(on&1073741824)!==0&&(ye&261930)===0?(Ke=!0,e.memoizedState=i):(e=Hf(),fe.lanes|=e,Pn|=e,n)}function Hd(e,n,i,l,f){var p=J.p;J.p=p!==0&&8>p?p:8;var S=G.T,E={};G.T=E,sr(e,!1,n,i);try{var _=f(),P=G.S;if(P!==null&&P(E,_),_!==null&&typeof _=="object"&&typeof _.then=="function"){var H=Xy(_,l);Ni(e,n,H,wt(e))}else Ni(e,n,l,wt(e))}catch(F){Ni(e,n,{then:function(){},status:"rejected",reason:F},wt())}finally{J.p=p,S!==null&&E.types!==null&&(S.types=E.types),G.T=S}}function ev(){}function or(e,n,i,l){if(e.tag!==5)throw Error(a(476));var f=Bd(e).queue;Hd(e,f,n,ae,i===null?ev:function(){return Od(e),i(l)})}function Bd(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sn,lastRenderedState:ae},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:sn,lastRenderedState:i},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Od(e){var n=Bd(e);n.next===null&&(n=e.alternate.memoizedState),Ni(e,n.next.queue,{},wt())}function ir(){return tt(Xi)}function Fd(){return ze().memoizedState}function qd(){return ze().memoizedState}function tv(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var i=wt();e=wn(i);var l=Rn(n,e,i);l!==null&&(gt(l,n,i),wi(l,n,i)),n={cache:Dl()},e.payload=n;return}n=n.return}}function nv(e,n,i){var l=wt();i={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},qs(e)?zd(n,i):(i=El(e,n,i,l),i!==null&&(gt(i,e,l),Yd(i,n,l)))}function Vd(e,n,i){var l=wt();Ni(e,n,i,l)}function Ni(e,n,i,l){var f={lane:l,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(qs(e))zd(n,f);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var S=n.lastRenderedState,E=p(S,i);if(f.hasEagerState=!0,f.eagerState=E,Tt(E,S))return Es(e,n,f,0),De===null&&Cs(),!1}catch{}finally{}if(i=El(e,n,f,l),i!==null)return gt(i,e,l),Yd(i,n,l),!0}return!1}function sr(e,n,i,l){if(l={lane:2,revertLane:Gr(),gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},qs(e)){if(n)throw Error(a(479))}else n=El(e,i,l,2),n!==null&&gt(n,e,2)}function qs(e){var n=e.alternate;return e===fe||n!==null&&n===fe}function zd(e,n){Lo=Us=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function Yd(e,n,i){if((i&4194048)!==0){var l=n.lanes;l&=e.pendingLanes,i|=l,n.lanes=i,Wu(e,i)}}var Pi={readContext:tt,use:Hs,useCallback:Oe,useContext:Oe,useEffect:Oe,useImperativeHandle:Oe,useLayoutEffect:Oe,useInsertionEffect:Oe,useMemo:Oe,useReducer:Oe,useRef:Oe,useState:Oe,useDebugValue:Oe,useDeferredValue:Oe,useTransition:Oe,useSyncExternalStore:Oe,useId:Oe,useHostTransitionStatus:Oe,useFormState:Oe,useActionState:Oe,useOptimistic:Oe,useMemoCache:Oe,useCacheRefresh:Oe};Pi.useEffectEvent=Oe;var Jd={readContext:tt,use:Hs,useCallback:function(e,n){return lt().memoizedState=[e,n===void 0?null:n],e},useContext:tt,useEffect:Id,useImperativeHandle:function(e,n,i){i=i!=null?i.concat([e]):null,Os(4194308,4,Dd.bind(null,n,e),i)},useLayoutEffect:function(e,n){return Os(4194308,4,e,n)},useInsertionEffect:function(e,n){Os(4,2,e,n)},useMemo:function(e,n){var i=lt();n=n===void 0?null:n;var l=e();if(ao){vn(!0);try{e()}finally{vn(!1)}}return i.memoizedState=[l,n],l},useReducer:function(e,n,i){var l=lt();if(i!==void 0){var f=i(n);if(ao){vn(!0);try{i(n)}finally{vn(!1)}}}else f=n;return l.memoizedState=l.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},l.queue=e,e=e.dispatch=nv.bind(null,fe,e),[l.memoizedState,e]},useRef:function(e){var n=lt();return e={current:e},n.memoizedState=e},useState:function(e){e=Zl(e);var n=e.queue,i=Vd.bind(null,fe,n);return n.dispatch=i,[e.memoizedState,i]},useDebugValue:tr,useDeferredValue:function(e,n){var i=lt();return nr(i,e,n)},useTransition:function(){var e=Zl(!1);return e=Hd.bind(null,fe,e.queue,!0,!1),lt().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,i){var l=fe,f=lt();if(Se){if(i===void 0)throw Error(a(407));i=i()}else{if(i=n(),De===null)throw Error(a(349));(ye&127)!==0||pd(l,n,i)}f.memoizedState=i;var p={value:i,getSnapshot:n};return f.queue=p,Id(hd.bind(null,l,p,e),[e]),l.flags|=2048,Ho(9,{destroy:void 0},md.bind(null,l,p,i,n),null),i},useId:function(){var e=lt(),n=De.identifierPrefix;if(Se){var i=Jt,l=Yt;i=(l&~(1<<32-St(l)-1)).toString(32)+i,n="_"+n+"R_"+i,i=Ls++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=Qy++,n="_"+n+"r_"+i.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ir,useFormState:_d,useActionState:_d,useOptimistic:function(e){var n=lt();n.memoizedState=n.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=sr.bind(null,fe,!0,i),i.dispatch=n,[e,n]},useMemoCache:Ql,useCacheRefresh:function(){return lt().memoizedState=tv.bind(null,fe)},useEffectEvent:function(e){var n=lt(),i={impl:e};return n.memoizedState=i,function(){if((_e&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}},ar={readContext:tt,use:Hs,useCallback:Ud,useContext:tt,useEffect:er,useImperativeHandle:kd,useInsertionEffect:Nd,useLayoutEffect:Pd,useMemo:Ld,useReducer:Bs,useRef:xd,useState:function(){return Bs(sn)},useDebugValue:tr,useDeferredValue:function(e,n){var i=ze();return Gd(i,Ie.memoizedState,e,n)},useTransition:function(){var e=Bs(sn)[0],n=ze().memoizedState;return[typeof e=="boolean"?e:Mi(e),n]},useSyncExternalStore:fd,useId:Fd,useHostTransitionStatus:ir,useFormState:bd,useActionState:bd,useOptimistic:function(e,n){var i=ze();return vd(i,Ie,e,n)},useMemoCache:Ql,useCacheRefresh:qd};ar.useEffectEvent=Md;var Kd={readContext:tt,use:Hs,useCallback:Ud,useContext:tt,useEffect:er,useImperativeHandle:kd,useInsertionEffect:Nd,useLayoutEffect:Pd,useMemo:Ld,useReducer:$l,useRef:xd,useState:function(){return $l(sn)},useDebugValue:tr,useDeferredValue:function(e,n){var i=ze();return Ie===null?nr(i,e,n):Gd(i,Ie.memoizedState,e,n)},useTransition:function(){var e=$l(sn)[0],n=ze().memoizedState;return[typeof e=="boolean"?e:Mi(e),n]},useSyncExternalStore:fd,useId:Fd,useHostTransitionStatus:ir,useFormState:Rd,useActionState:Rd,useOptimistic:function(e,n){var i=ze();return Ie!==null?vd(i,Ie,e,n):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:Ql,useCacheRefresh:qd};Kd.useEffectEvent=Md;function lr(e,n,i,l){n=e.memoizedState,i=i(l,n),i=i==null?n:T({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var rr={enqueueSetState:function(e,n,i){e=e._reactInternals;var l=wt(),f=wn(l);f.payload=n,i!=null&&(f.callback=i),n=Rn(e,f,l),n!==null&&(gt(n,e,l),wi(n,e,l))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var l=wt(),f=wn(l);f.tag=1,f.payload=n,i!=null&&(f.callback=i),n=Rn(e,f,l),n!==null&&(gt(n,e,l),wi(n,e,l))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=wt(),l=wn(i);l.tag=2,n!=null&&(l.callback=n),n=Rn(e,l,i),n!==null&&(gt(n,e,i),wi(n,e,i))}};function Xd(e,n,i,l,f,p,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(l,p,S):n.prototype&&n.prototype.isPureReactComponent?!vi(i,l)||!vi(f,p):!0}function Qd(e,n,i,l){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,l),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,l),n.state!==e&&rr.enqueueReplaceState(n,n.state,null)}function lo(e,n){var i=n;if("ref"in n){i={};for(var l in n)l!=="ref"&&(i[l]=n[l])}if(e=e.defaultProps){i===n&&(i=T({},i));for(var f in e)i[f]===void 0&&(i[f]=e[f])}return i}function Wd(e){Ts(e)}function $d(e){console.error(e)}function Zd(e){Ts(e)}function Vs(e,n){try{var i=e.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(l){setTimeout(function(){throw l})}}function jd(e,n,i){try{var l=e.onCaughtError;l(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function ur(e,n,i){return i=wn(i),i.tag=3,i.payload={element:null},i.callback=function(){Vs(e,n)},i}function ef(e){return e=wn(e),e.tag=3,e}function tf(e,n,i,l){var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var p=l.value;e.payload=function(){return f(p)},e.callback=function(){jd(n,i,l)}}var S=i.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){jd(n,i,l),typeof f!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var E=l.stack;this.componentDidCatch(l.value,{componentStack:E!==null?E:""})})}function ov(e,n,i,l,f){if(i.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){if(n=i.alternate,n!==null&&Mo(n,i,f,!0),i=Et.current,i!==null){switch(i.tag){case 31:case 13:return kt===null?ta():i.alternate===null&&Fe===0&&(Fe=3),i.flags&=-257,i.flags|=65536,i.lanes=f,l===Ms?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([l]):n.add(l),kr(e,l,f)),!1;case 22:return i.flags|=65536,l===Ms?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([l])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([l]):i.add(l)),kr(e,l,f)),!1}throw Error(a(435,i.tag))}return kr(e,l,f),ta(),!1}if(Se)return n=Et.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,l!==xl&&(e=Error(a(422),{cause:l}),Ci(Mt(e,i)))):(l!==xl&&(n=Error(a(423),{cause:l}),Ci(Mt(n,i))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,l=Mt(l,i),f=ur(e.stateNode,l,f),Bl(e,f),Fe!==4&&(Fe=2)),!1;var p=Error(a(520),{cause:l});if(p=Mt(p,i),Oi===null?Oi=[p]:Oi.push(p),Fe!==4&&(Fe=2),n===null)return!0;l=Mt(l,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,e=f&-f,i.lanes|=e,e=ur(i.stateNode,l,e),Bl(i,e),!1;case 1:if(n=i.type,p=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Dn===null||!Dn.has(p))))return i.flags|=65536,f&=-f,i.lanes|=f,f=ef(f),tf(f,e,i,l),Bl(i,f),!1}i=i.return}while(i!==null);return!1}var cr=Error(a(461)),Ke=!1;function nt(e,n,i,l){n.child=e===null?sd(n,null,i,l):so(n,e.child,i,l)}function nf(e,n,i,l,f){i=i.render;var p=n.ref;if("ref"in l){var S={};for(var E in l)E!=="ref"&&(S[E]=l[E])}else S=l;return to(n),l=Yl(e,n,i,S,p,f),E=Jl(),e!==null&&!Ke?(Kl(e,n,f),an(e,n,f)):(Se&&E&&wl(n),n.flags|=1,nt(e,n,l,f),n.child)}function of(e,n,i,l,f){if(e===null){var p=i.type;return typeof p=="function"&&!Al(p)&&p.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=p,sf(e,n,p,l,f)):(e=_s(i.type,null,l,n,n.mode,f),e.ref=n.ref,e.return=n,n.child=e)}if(p=e.child,!vr(e,f)){var S=p.memoizedProps;if(i=i.compare,i=i!==null?i:vi,i(S,l)&&e.ref===n.ref)return an(e,n,f)}return n.flags|=1,e=jt(p,l),e.ref=n.ref,e.return=n,n.child=e}function sf(e,n,i,l,f){if(e!==null){var p=e.memoizedProps;if(vi(p,l)&&e.ref===n.ref)if(Ke=!1,n.pendingProps=l=p,vr(e,f))(e.flags&131072)!==0&&(Ke=!0);else return n.lanes=e.lanes,an(e,n,f)}return dr(e,n,i,l,f)}function af(e,n,i,l){var f=l.children,p=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),l.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|i:i,e!==null){for(l=n.child=e.child,f=0;l!==null;)f=f|l.lanes|l.childLanes,l=l.sibling;l=f&~p}else l=0,n.child=null;return lf(e,n,p,i,l)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&xs(n,p!==null?p.cachePool:null),p!==null?rd(n,p):Fl(),ud(n);else return l=n.lanes=536870912,lf(e,n,p!==null?p.baseLanes|i:i,i,l)}else p!==null?(xs(n,p.cachePool),rd(n,p),In(),n.memoizedState=null):(e!==null&&xs(n,null),Fl(),In());return nt(e,n,f,i),n.child}function Di(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function lf(e,n,i,l,f){var p=Ul();return p=p===null?null:{parent:Ye._currentValue,pool:p},n.memoizedState={baseLanes:i,cachePool:p},e!==null&&xs(n,null),Fl(),ud(n),e!==null&&Mo(e,n,l,!0),n.childLanes=f,null}function zs(e,n){return n=Js({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function rf(e,n,i){return so(n,e.child,null,i),e=zs(n,n.pendingProps),e.flags|=2,At(n),n.memoizedState=null,e}function iv(e,n,i){var l=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(Se){if(l.mode==="hidden")return e=zs(n,l),n.lanes=536870912,Di(null,e);if(Vl(n),(e=Ue)?(e=Tp(e,Dt),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Cn!==null?{id:Yt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},i=zc(e),i.return=n,n.child=i,et=n,Ue=null)):e=null,e===null)throw An(n);return n.lanes=536870912,null}return zs(n,l)}var p=e.memoizedState;if(p!==null){var S=p.dehydrated;if(Vl(n),f)if(n.flags&256)n.flags&=-257,n=rf(e,n,i);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(a(558));else if(Ke||Mo(e,n,i,!1),f=(i&e.childLanes)!==0,Ke||f){if(l=De,l!==null&&(S=$u(l,i),S!==0&&S!==p.retryLane))throw p.retryLane=S,$n(e,S),gt(l,e,S),cr;ta(),n=rf(e,n,i)}else e=p.treeContext,Ue=Ut(S.nextSibling),et=n,Se=!0,En=null,Dt=!1,e!==null&&Kc(n,e),n=zs(n,l),n.flags|=4096;return n}return e=jt(e.child,{mode:l.mode,children:l.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ys(e,n){var i=n.ref;if(i===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(a(284));(e===null||e.ref!==i)&&(n.flags|=4194816)}}function dr(e,n,i,l,f){return to(n),i=Yl(e,n,i,l,void 0,f),l=Jl(),e!==null&&!Ke?(Kl(e,n,f),an(e,n,f)):(Se&&l&&wl(n),n.flags|=1,nt(e,n,i,f),n.child)}function uf(e,n,i,l,f,p){return to(n),n.updateQueue=null,i=dd(n,l,i,f),cd(e),l=Jl(),e!==null&&!Ke?(Kl(e,n,p),an(e,n,p)):(Se&&l&&wl(n),n.flags|=1,nt(e,n,i,p),n.child)}function cf(e,n,i,l,f){if(to(n),n.stateNode===null){var p=wo,S=i.contextType;typeof S=="object"&&S!==null&&(p=tt(S)),p=new i(l,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=rr,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=l,p.state=n.memoizedState,p.refs={},Gl(n),S=i.contextType,p.context=typeof S=="object"&&S!==null?tt(S):wo,p.state=n.memoizedState,S=i.getDerivedStateFromProps,typeof S=="function"&&(lr(n,i,S,l),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(S=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),S!==p.state&&rr.enqueueReplaceState(p,p.state,null),xi(n,l,p,f),Ri(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!0}else if(e===null){p=n.stateNode;var E=n.memoizedProps,_=lo(i,E);p.props=_;var P=p.context,H=i.contextType;S=wo,typeof H=="object"&&H!==null&&(S=tt(H));var F=i.getDerivedStateFromProps;H=typeof F=="function"||typeof p.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,H||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(E||P!==S)&&Qd(n,p,l,S),bn=!1;var k=n.memoizedState;p.state=k,xi(n,l,p,f),Ri(),P=n.memoizedState,E||k!==P||bn?(typeof F=="function"&&(lr(n,i,F,l),P=n.memoizedState),(_=bn||Xd(n,i,_,l,k,P,S))?(H||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=l,n.memoizedState=P),p.props=l,p.state=P,p.context=S,l=_):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),l=!1)}else{p=n.stateNode,Hl(e,n),S=n.memoizedProps,H=lo(i,S),p.props=H,F=n.pendingProps,k=p.context,P=i.contextType,_=wo,typeof P=="object"&&P!==null&&(_=tt(P)),E=i.getDerivedStateFromProps,(P=typeof E=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==F||k!==_)&&Qd(n,p,l,_),bn=!1,k=n.memoizedState,p.state=k,xi(n,l,p,f),Ri();var L=n.memoizedState;S!==F||k!==L||bn||e!==null&&e.dependencies!==null&&ws(e.dependencies)?(typeof E=="function"&&(lr(n,i,E,l),L=n.memoizedState),(H=bn||Xd(n,i,H,l,k,L,_)||e!==null&&e.dependencies!==null&&ws(e.dependencies))?(P||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(l,L,_),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(l,L,_)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===e.memoizedProps&&k===e.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&k===e.memoizedState||(n.flags|=1024),n.memoizedProps=l,n.memoizedState=L),p.props=l,p.state=L,p.context=_,l=H):(typeof p.componentDidUpdate!="function"||S===e.memoizedProps&&k===e.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&k===e.memoizedState||(n.flags|=1024),l=!1)}return p=l,Ys(e,n),l=(n.flags&128)!==0,p||l?(p=n.stateNode,i=l&&typeof i.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,e!==null&&l?(n.child=so(n,e.child,null,f),n.child=so(n,null,i,f)):nt(e,n,i,f),n.memoizedState=p.state,e=n.child):e=an(e,n,f),e}function df(e,n,i,l){return jn(),n.flags|=256,nt(e,n,i,l),n.child}var fr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pr(e){return{baseLanes:e,cachePool:jc()}}function mr(e,n,i){return e=e!==null?e.childLanes&~i:0,n&&(e|=bt),e}function ff(e,n,i){var l=n.pendingProps,f=!1,p=(n.flags&128)!==0,S;if((S=p)||(S=e!==null&&e.memoizedState===null?!1:(Ve.current&2)!==0),S&&(f=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(Se){if(f?xn(n):In(),(e=Ue)?(e=Tp(e,Dt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Cn!==null?{id:Yt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},i=zc(e),i.return=n,n.child=i,et=n,Ue=null)):e=null,e===null)throw An(n);return Wr(e)?n.lanes=32:n.lanes=536870912,null}var E=l.children;return l=l.fallback,f?(In(),f=n.mode,E=Js({mode:"hidden",children:E},f),l=Zn(l,f,i,null),E.return=n,l.return=n,E.sibling=l,n.child=E,l=n.child,l.memoizedState=pr(i),l.childLanes=mr(e,S,i),n.memoizedState=fr,Di(null,l)):(xn(n),hr(n,E))}var _=e.memoizedState;if(_!==null&&(E=_.dehydrated,E!==null)){if(p)n.flags&256?(xn(n),n.flags&=-257,n=gr(e,n,i)):n.memoizedState!==null?(In(),n.child=e.child,n.flags|=128,n=null):(In(),E=l.fallback,f=n.mode,l=Js({mode:"visible",children:l.children},f),E=Zn(E,f,i,null),E.flags|=2,l.return=n,E.return=n,l.sibling=E,n.child=l,so(n,e.child,null,i),l=n.child,l.memoizedState=pr(i),l.childLanes=mr(e,S,i),n.memoizedState=fr,n=Di(null,l));else if(xn(n),Wr(E)){if(S=E.nextSibling&&E.nextSibling.dataset,S)var P=S.dgst;S=P,l=Error(a(419)),l.stack="",l.digest=S,Ci({value:l,source:null,stack:null}),n=gr(e,n,i)}else if(Ke||Mo(e,n,i,!1),S=(i&e.childLanes)!==0,Ke||S){if(S=De,S!==null&&(l=$u(S,i),l!==0&&l!==_.retryLane))throw _.retryLane=l,$n(e,l),gt(S,e,l),cr;Qr(E)||ta(),n=gr(e,n,i)}else Qr(E)?(n.flags|=192,n.child=e.child,n=null):(e=_.treeContext,Ue=Ut(E.nextSibling),et=n,Se=!0,En=null,Dt=!1,e!==null&&Kc(n,e),n=hr(n,l.children),n.flags|=4096);return n}return f?(In(),E=l.fallback,f=n.mode,_=e.child,P=_.sibling,l=jt(_,{mode:"hidden",children:l.children}),l.subtreeFlags=_.subtreeFlags&65011712,P!==null?E=jt(P,E):(E=Zn(E,f,i,null),E.flags|=2),E.return=n,l.return=n,l.sibling=E,n.child=l,Di(null,l),l=n.child,E=e.child.memoizedState,E===null?E=pr(i):(f=E.cachePool,f!==null?(_=Ye._currentValue,f=f.parent!==_?{parent:_,pool:_}:f):f=jc(),E={baseLanes:E.baseLanes|i,cachePool:f}),l.memoizedState=E,l.childLanes=mr(e,S,i),n.memoizedState=fr,Di(e.child,l)):(xn(n),i=e.child,e=i.sibling,i=jt(i,{mode:"visible",children:l.children}),i.return=n,i.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=i,n.memoizedState=null,i)}function hr(e,n){return n=Js({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Js(e,n){return e=Ct(22,e,null,n),e.lanes=0,e}function gr(e,n,i){return so(n,e.child,null,i),e=hr(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function pf(e,n,i){e.lanes|=n;var l=e.alternate;l!==null&&(l.lanes|=n),Nl(e.return,n,i)}function yr(e,n,i,l,f,p){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:l,tail:i,tailMode:f,treeForkCount:p}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=l,S.tail=i,S.tailMode=f,S.treeForkCount=p)}function mf(e,n,i){var l=n.pendingProps,f=l.revealOrder,p=l.tail;l=l.children;var S=Ve.current,E=(S&2)!==0;if(E?(S=S&1|2,n.flags|=128):S&=1,W(Ve,S),nt(e,n,l,i),l=Se?Ti:0,!E&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&pf(e,i,n);else if(e.tag===19)pf(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(i=n.child,f=null;i!==null;)e=i.alternate,e!==null&&ks(e)===null&&(f=i),i=i.sibling;i=f,i===null?(f=n.child,n.child=null):(f=i.sibling,i.sibling=null),yr(n,!1,f,i,p,l);break;case"backwards":case"unstable_legacy-backwards":for(i=null,f=n.child,n.child=null;f!==null;){if(e=f.alternate,e!==null&&ks(e)===null){n.child=f;break}e=f.sibling,f.sibling=i,i=f,f=e}yr(n,!0,i,null,p,l);break;case"together":yr(n,!1,null,null,void 0,l);break;default:n.memoizedState=null}return n.child}function an(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),Pn|=n.lanes,(i&n.childLanes)===0)if(e!==null){if(Mo(e,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(a(153));if(n.child!==null){for(e=n.child,i=jt(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=jt(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function vr(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&ws(e)))}function sv(e,n,i){switch(n.tag){case 3:at(n,n.stateNode.containerInfo),_n(n,Ye,e.memoizedState.cache),jn();break;case 27:case 5:si(n);break;case 4:at(n,n.stateNode.containerInfo);break;case 10:_n(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Vl(n),null;break;case 13:var l=n.memoizedState;if(l!==null)return l.dehydrated!==null?(xn(n),n.flags|=128,null):(i&n.child.childLanes)!==0?ff(e,n,i):(xn(n),e=an(e,n,i),e!==null?e.sibling:null);xn(n);break;case 19:var f=(e.flags&128)!==0;if(l=(i&n.childLanes)!==0,l||(Mo(e,n,i,!1),l=(i&n.childLanes)!==0),f){if(l)return mf(e,n,i);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),W(Ve,Ve.current),l)break;return null;case 22:return n.lanes=0,af(e,n,i,n.pendingProps);case 24:_n(n,Ye,e.memoizedState.cache)}return an(e,n,i)}function hf(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps)Ke=!0;else{if(!vr(e,i)&&(n.flags&128)===0)return Ke=!1,sv(e,n,i);Ke=(e.flags&131072)!==0}else Ke=!1,Se&&(n.flags&1048576)!==0&&Jc(n,Ti,n.index);switch(n.lanes=0,n.tag){case 16:e:{var l=n.pendingProps;if(e=oo(n.elementType),n.type=e,typeof e=="function")Al(e)?(l=lo(e,l),n.tag=1,n=cf(null,n,e,l,i)):(n.tag=0,n=dr(null,n,e,l,i));else{if(e!=null){var f=e.$$typeof;if(f===X){n.tag=11,n=nf(null,n,e,l,i);break e}else if(f===K){n.tag=14,n=of(null,n,e,l,i);break e}}throw n=Ge(e)||e,Error(a(306,n,""))}}return n;case 0:return dr(e,n,n.type,n.pendingProps,i);case 1:return l=n.type,f=lo(l,n.pendingProps),cf(e,n,l,f,i);case 3:e:{if(at(n,n.stateNode.containerInfo),e===null)throw Error(a(387));l=n.pendingProps;var p=n.memoizedState;f=p.element,Hl(e,n),xi(n,l,null,i);var S=n.memoizedState;if(l=S.cache,_n(n,Ye,l),l!==p.cache&&Pl(n,[Ye],i,!0),Ri(),l=S.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=df(e,n,l,i);break e}else if(l!==f){f=Mt(Error(a(424)),n),Ci(f),n=df(e,n,l,i);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=Ut(e.firstChild),et=n,Se=!0,En=null,Dt=!0,i=sd(n,null,l,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if(jn(),l===f){n=an(e,n,i);break e}nt(e,n,l,i)}n=n.child}return n;case 26:return Ys(e,n),e===null?(i=wp(n.type,null,n.pendingProps,null))?n.memoizedState=i:Se||(i=n.type,e=n.pendingProps,l=ra(me.current).createElement(i),l[je]=n,l[ct]=e,ot(l,i,e),We(l),n.stateNode=l):n.memoizedState=wp(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return si(n),e===null&&Se&&(l=n.stateNode=Ap(n.type,n.pendingProps,me.current),et=n,Dt=!0,f=Ue,Gn(n.type)?($r=f,Ue=Ut(l.firstChild)):Ue=f),nt(e,n,n.pendingProps.children,i),Ys(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&Se&&((f=l=Ue)&&(l=Uv(l,n.type,n.pendingProps,Dt),l!==null?(n.stateNode=l,et=n,Ue=Ut(l.firstChild),Dt=!1,f=!0):f=!1),f||An(n)),si(n),f=n.type,p=n.pendingProps,S=e!==null?e.memoizedProps:null,l=p.children,Jr(f,p)?l=null:S!==null&&Jr(f,S)&&(n.flags|=32),n.memoizedState!==null&&(f=Yl(e,n,Wy,null,null,i),Xi._currentValue=f),Ys(e,n),nt(e,n,l,i),n.child;case 6:return e===null&&Se&&((e=i=Ue)&&(i=Lv(i,n.pendingProps,Dt),i!==null?(n.stateNode=i,et=n,Ue=null,e=!0):e=!1),e||An(n)),null;case 13:return ff(e,n,i);case 4:return at(n,n.stateNode.containerInfo),l=n.pendingProps,e===null?n.child=so(n,null,l,i):nt(e,n,l,i),n.child;case 11:return nf(e,n,n.type,n.pendingProps,i);case 7:return nt(e,n,n.pendingProps,i),n.child;case 8:return nt(e,n,n.pendingProps.children,i),n.child;case 12:return nt(e,n,n.pendingProps.children,i),n.child;case 10:return l=n.pendingProps,_n(n,n.type,l.value),nt(e,n,l.children,i),n.child;case 9:return f=n.type._context,l=n.pendingProps.children,to(n),f=tt(f),l=l(f),n.flags|=1,nt(e,n,l,i),n.child;case 14:return of(e,n,n.type,n.pendingProps,i);case 15:return sf(e,n,n.type,n.pendingProps,i);case 19:return mf(e,n,i);case 31:return iv(e,n,i);case 22:return af(e,n,i,n.pendingProps);case 24:return to(n),l=tt(Ye),e===null?(f=Ul(),f===null&&(f=De,p=Dl(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=i),f=p),n.memoizedState={parent:l,cache:f},Gl(n),_n(n,Ye,f)):((e.lanes&i)!==0&&(Hl(e,n),xi(n,null,null,i),Ri()),f=e.memoizedState,p=n.memoizedState,f.parent!==l?(f={parent:l,cache:l},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),_n(n,Ye,l)):(l=p.cache,_n(n,Ye,l),l!==f.cache&&Pl(n,[Ye],i,!0))),nt(e,n,n.pendingProps.children,i),n.child;case 29:throw n.pendingProps}throw Error(a(156,n.tag))}function ln(e){e.flags|=4}function Sr(e,n,i,l,f){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(qf())e.flags|=8192;else throw io=Ms,Ll}else e.flags&=-16777217}function gf(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Np(n))if(qf())e.flags|=8192;else throw io=Ms,Ll}function Ks(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Xu():536870912,e.lanes|=n,qo|=n)}function ki(e,n){if(!Se)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var l=null;i!==null;)i.alternate!==null&&(l=i),i=i.sibling;l===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:l.sibling=null}}function Le(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,l=0;if(n)for(var f=e.child;f!==null;)i|=f.lanes|f.childLanes,l|=f.subtreeFlags&65011712,l|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)i|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=l,e.childLanes=i,n}function av(e,n,i){var l=n.pendingProps;switch(Rl(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(n),null;case 1:return Le(n),null;case 3:return i=n.stateNode,l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),nn(Ye),qe(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Io(n)?ln(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Il())),Le(n),null;case 26:var f=n.type,p=n.memoizedState;return e===null?(ln(n),p!==null?(Le(n),gf(n,p)):(Le(n),Sr(n,f,null,l,i))):p?p!==e.memoizedState?(ln(n),Le(n),gf(n,p)):(Le(n),n.flags&=-16777217):(e=e.memoizedProps,e!==l&&ln(n),Le(n),Sr(n,f,e,l,i)),null;case 27:if(is(n),i=me.current,f=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&ln(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return Le(n),null}e=ne.current,Io(n)?Xc(n):(e=Ap(f,l,i),n.stateNode=e,ln(n))}return Le(n),null;case 5:if(is(n),f=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==l&&ln(n);else{if(!l){if(n.stateNode===null)throw Error(a(166));return Le(n),null}if(p=ne.current,Io(n))Xc(n);else{var S=ra(me.current);switch(p){case 1:p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=S.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof l.is=="string"?S.createElement("select",{is:l.is}):S.createElement("select"),l.multiple?p.multiple=!0:l.size&&(p.size=l.size);break;default:p=typeof l.is=="string"?S.createElement(f,{is:l.is}):S.createElement(f)}}p[je]=n,p[ct]=l;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)p.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=p;e:switch(ot(p,f,l),f){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}l&&ln(n)}}return Le(n),Sr(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,i),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==l&&ln(n);else{if(typeof l!="string"&&n.stateNode===null)throw Error(a(166));if(e=me.current,Io(n)){if(e=n.stateNode,i=n.memoizedProps,l=null,f=et,f!==null)switch(f.tag){case 27:case 5:l=f.memoizedProps}e[je]=n,e=!!(e.nodeValue===i||l!==null&&l.suppressHydrationWarning===!0||fp(e.nodeValue,i)),e||An(n,!0)}else e=ra(e).createTextNode(l),e[je]=n,n.stateNode=e}return Le(n),null;case 31:if(i=n.memoizedState,e===null||e.memoizedState!==null){if(l=Io(n),i!==null){if(e===null){if(!l)throw Error(a(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[je]=n}else jn(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Le(n),e=!1}else i=Il(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return n.flags&256?(At(n),n):(At(n),null);if((n.flags&128)!==0)throw Error(a(558))}return Le(n),null;case 13:if(l=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=Io(n),l!==null&&l.dehydrated!==null){if(e===null){if(!f)throw Error(a(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(a(317));f[je]=n}else jn(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Le(n),f=!1}else f=Il(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(At(n),n):(At(n),null)}return At(n),(n.flags&128)!==0?(n.lanes=i,n):(i=l!==null,e=e!==null&&e.memoizedState!==null,i&&(l=n.child,f=null,l.alternate!==null&&l.alternate.memoizedState!==null&&l.alternate.memoizedState.cachePool!==null&&(f=l.alternate.memoizedState.cachePool.pool),p=null,l.memoizedState!==null&&l.memoizedState.cachePool!==null&&(p=l.memoizedState.cachePool.pool),p!==f&&(l.flags|=2048)),i!==e&&i&&(n.child.flags|=8192),Ks(n,n.updateQueue),Le(n),null);case 4:return qe(),e===null&&Fr(n.stateNode.containerInfo),Le(n),null;case 10:return nn(n.type),Le(n),null;case 19:if(q(Ve),l=n.memoizedState,l===null)return Le(n),null;if(f=(n.flags&128)!==0,p=l.rendering,p===null)if(f)ki(l,!1);else{if(Fe!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(p=ks(e),p!==null){for(n.flags|=128,ki(l,!1),e=p.updateQueue,n.updateQueue=e,Ks(n,e),n.subtreeFlags=0,e=i,i=n.child;i!==null;)Vc(i,e),i=i.sibling;return W(Ve,Ve.current&1|2),Se&&en(n,l.treeForkCount),n.child}e=e.sibling}l.tail!==null&&yt()>Zs&&(n.flags|=128,f=!0,ki(l,!1),n.lanes=4194304)}else{if(!f)if(e=ks(p),e!==null){if(n.flags|=128,f=!0,e=e.updateQueue,n.updateQueue=e,Ks(n,e),ki(l,!0),l.tail===null&&l.tailMode==="hidden"&&!p.alternate&&!Se)return Le(n),null}else 2*yt()-l.renderingStartTime>Zs&&i!==536870912&&(n.flags|=128,f=!0,ki(l,!1),n.lanes=4194304);l.isBackwards?(p.sibling=n.child,n.child=p):(e=l.last,e!==null?e.sibling=p:n.child=p,l.last=p)}return l.tail!==null?(e=l.tail,l.rendering=e,l.tail=e.sibling,l.renderingStartTime=yt(),e.sibling=null,i=Ve.current,W(Ve,f?i&1|2:i&1),Se&&en(n,l.treeForkCount),e):(Le(n),null);case 22:case 23:return At(n),ql(),l=n.memoizedState!==null,e!==null?e.memoizedState!==null!==l&&(n.flags|=8192):l&&(n.flags|=8192),l?(i&536870912)!==0&&(n.flags&128)===0&&(Le(n),n.subtreeFlags&6&&(n.flags|=8192)):Le(n),i=n.updateQueue,i!==null&&Ks(n,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==i&&(n.flags|=2048),e!==null&&q(no),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),nn(Ye),Le(n),null;case 25:return null;case 30:return null}throw Error(a(156,n.tag))}function lv(e,n){switch(Rl(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return nn(Ye),qe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return is(n),null;case 31:if(n.memoizedState!==null){if(At(n),n.alternate===null)throw Error(a(340));jn()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(At(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(a(340));jn()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return q(Ve),null;case 4:return qe(),null;case 10:return nn(n.type),null;case 22:case 23:return At(n),ql(),e!==null&&q(no),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return nn(Ye),null;case 25:return null;default:return null}}function yf(e,n){switch(Rl(n),n.tag){case 3:nn(Ye),qe();break;case 26:case 27:case 5:is(n);break;case 4:qe();break;case 31:n.memoizedState!==null&&At(n);break;case 13:At(n);break;case 19:q(Ve);break;case 10:nn(n.type);break;case 22:case 23:At(n),ql(),e!==null&&q(no);break;case 24:nn(Ye)}}function Ui(e,n){try{var i=n.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var f=l.next;i=f;do{if((i.tag&e)===e){l=void 0;var p=i.create,S=i.inst;l=p(),S.destroy=l}i=i.next}while(i!==f)}}catch(E){xe(n,n.return,E)}}function Mn(e,n,i){try{var l=n.updateQueue,f=l!==null?l.lastEffect:null;if(f!==null){var p=f.next;l=p;do{if((l.tag&e)===e){var S=l.inst,E=S.destroy;if(E!==void 0){S.destroy=void 0,f=n;var _=i,P=E;try{P()}catch(H){xe(f,_,H)}}}l=l.next}while(l!==p)}}catch(H){xe(n,n.return,H)}}function vf(e){var n=e.updateQueue;if(n!==null){var i=e.stateNode;try{ld(n,i)}catch(l){xe(e,e.return,l)}}}function Sf(e,n,i){i.props=lo(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(l){xe(e,n,l)}}function Li(e,n){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var l=e.stateNode;break;case 30:l=e.stateNode;break;default:l=e.stateNode}typeof i=="function"?e.refCleanup=i(l):i.current=l}}catch(f){xe(e,n,f)}}function Kt(e,n){var i=e.ref,l=e.refCleanup;if(i!==null)if(typeof l=="function")try{l()}catch(f){xe(e,n,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(f){xe(e,n,f)}else i.current=null}function Tf(e){var n=e.type,i=e.memoizedProps,l=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&l.focus();break e;case"img":i.src?l.src=i.src:i.srcSet&&(l.srcset=i.srcSet)}}catch(f){xe(e,e.return,f)}}function Tr(e,n,i){try{var l=e.stateNode;Iv(l,e.type,i,n),l[ct]=n}catch(f){xe(e,e.return,f)}}function Cf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Gn(e.type)||e.tag===4}function Cr(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Gn(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Er(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(e),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=$t));else if(l!==4&&(l===27&&Gn(e.type)&&(i=e.stateNode,n=null),e=e.child,e!==null))for(Er(e,n,i),e=e.sibling;e!==null;)Er(e,n,i),e=e.sibling}function Xs(e,n,i){var l=e.tag;if(l===5||l===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(l!==4&&(l===27&&Gn(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(Xs(e,n,i),e=e.sibling;e!==null;)Xs(e,n,i),e=e.sibling}function Ef(e){var n=e.stateNode,i=e.memoizedProps;try{for(var l=e.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);ot(n,l,i),n[je]=e,n[ct]=i}catch(p){xe(e,e.return,p)}}var rn=!1,Xe=!1,Ar=!1,Af=typeof WeakSet=="function"?WeakSet:Set,$e=null;function rv(e,n){if(e=e.containerInfo,zr=ha,e=kc(e),gl(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var l=i.getSelection&&i.getSelection();if(l&&l.rangeCount!==0){i=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{i.nodeType,p.nodeType}catch{i=null;break e}var S=0,E=-1,_=-1,P=0,H=0,F=e,k=null;t:for(;;){for(var L;F!==i||f!==0&&F.nodeType!==3||(E=S+f),F!==p||l!==0&&F.nodeType!==3||(_=S+l),F.nodeType===3&&(S+=F.nodeValue.length),(L=F.firstChild)!==null;)k=F,F=L;for(;;){if(F===e)break t;if(k===i&&++P===f&&(E=S),k===p&&++H===l&&(_=S),(L=F.nextSibling)!==null)break;F=k,k=F.parentNode}F=L}i=E===-1||_===-1?null:{start:E,end:_}}else i=null}i=i||{start:0,end:0}}else i=null;for(Yr={focusedElem:e,selectionRange:i},ha=!1,$e=n;$e!==null;)if(n=$e,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,$e=e;else for(;$e!==null;){switch(n=$e,p=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)f=e[i],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,i=n,f=p.memoizedProps,p=p.memoizedState,l=i.stateNode;try{var ee=lo(i.type,f);e=l.getSnapshotBeforeUpdate(ee,p),l.__reactInternalSnapshotBeforeUpdate=e}catch(se){xe(i,i.return,se)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,i=e.nodeType,i===9)Xr(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=n.sibling,e!==null){e.return=n.return,$e=e;break}$e=n.return}}function _f(e,n,i){var l=i.flags;switch(i.tag){case 0:case 11:case 15:cn(e,i),l&4&&Ui(5,i);break;case 1:if(cn(e,i),l&4)if(e=i.stateNode,n===null)try{e.componentDidMount()}catch(S){xe(i,i.return,S)}else{var f=lo(i.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(f,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){xe(i,i.return,S)}}l&64&&vf(i),l&512&&Li(i,i.return);break;case 3:if(cn(e,i),l&64&&(e=i.updateQueue,e!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{ld(e,n)}catch(S){xe(i,i.return,S)}}break;case 27:n===null&&l&4&&Ef(i);case 26:case 5:cn(e,i),n===null&&l&4&&Tf(i),l&512&&Li(i,i.return);break;case 12:cn(e,i);break;case 31:cn(e,i),l&4&&Rf(e,i);break;case 13:cn(e,i),l&4&&xf(e,i),l&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=yv.bind(null,i),Gv(e,i))));break;case 22:if(l=i.memoizedState!==null||rn,!l){n=n!==null&&n.memoizedState!==null||Xe,f=rn;var p=Xe;rn=l,(Xe=n)&&!p?dn(e,i,(i.subtreeFlags&8772)!==0):cn(e,i),rn=f,Xe=p}break;case 30:break;default:cn(e,i)}}function bf(e){var n=e.alternate;n!==null&&(e.alternate=null,bf(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&ja(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var He=null,ft=!1;function un(e,n,i){for(i=i.child;i!==null;)wf(e,n,i),i=i.sibling}function wf(e,n,i){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(ai,i)}catch{}switch(i.tag){case 26:Xe||Kt(i,n),un(e,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Xe||Kt(i,n);var l=He,f=ft;Gn(i.type)&&(He=i.stateNode,ft=!1),un(e,n,i),Yi(i.stateNode),He=l,ft=f;break;case 5:Xe||Kt(i,n);case 6:if(l=He,f=ft,He=null,un(e,n,i),He=l,ft=f,He!==null)if(ft)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(i.stateNode)}catch(p){xe(i,n,p)}else try{He.removeChild(i.stateNode)}catch(p){xe(i,n,p)}break;case 18:He!==null&&(ft?(e=He,vp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Wo(e)):vp(He,i.stateNode));break;case 4:l=He,f=ft,He=i.stateNode.containerInfo,ft=!0,un(e,n,i),He=l,ft=f;break;case 0:case 11:case 14:case 15:Mn(2,i,n),Xe||Mn(4,i,n),un(e,n,i);break;case 1:Xe||(Kt(i,n),l=i.stateNode,typeof l.componentWillUnmount=="function"&&Sf(i,n,l)),un(e,n,i);break;case 21:un(e,n,i);break;case 22:Xe=(l=Xe)||i.memoizedState!==null,un(e,n,i),Xe=l;break;default:un(e,n,i)}}function Rf(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Wo(e)}catch(i){xe(n,n.return,i)}}}function xf(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Wo(e)}catch(i){xe(n,n.return,i)}}function uv(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Af),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Af),n;default:throw Error(a(435,e.tag))}}function Qs(e,n){var i=uv(e);n.forEach(function(l){if(!i.has(l)){i.add(l);var f=vv.bind(null,e,l);l.then(f,f)}})}function pt(e,n){var i=n.deletions;if(i!==null)for(var l=0;l<i.length;l++){var f=i[l],p=e,S=n,E=S;e:for(;E!==null;){switch(E.tag){case 27:if(Gn(E.type)){He=E.stateNode,ft=!1;break e}break;case 5:He=E.stateNode,ft=!1;break e;case 3:case 4:He=E.stateNode.containerInfo,ft=!0;break e}E=E.return}if(He===null)throw Error(a(160));wf(p,S,f),He=null,ft=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)If(n,e),n=n.sibling}var Ot=null;function If(e,n){var i=e.alternate,l=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pt(n,e),mt(e),l&4&&(Mn(3,e,e.return),Ui(3,e),Mn(5,e,e.return));break;case 1:pt(n,e),mt(e),l&512&&(Xe||i===null||Kt(i,i.return)),l&64&&rn&&(e=e.updateQueue,e!==null&&(l=e.callbacks,l!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?l:i.concat(l))));break;case 26:var f=Ot;if(pt(n,e),mt(e),l&512&&(Xe||i===null||Kt(i,i.return)),l&4){var p=i!==null?i.memoizedState:null;if(l=e.memoizedState,i===null)if(l===null)if(e.stateNode===null){e:{l=e.type,i=e.memoizedProps,f=f.ownerDocument||f;t:switch(l){case"title":p=f.getElementsByTagName("title")[0],(!p||p[ui]||p[je]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(l),f.head.insertBefore(p,f.querySelector("head > title"))),ot(p,l,i),p[je]=e,We(p),l=p;break e;case"link":var S=Ip("link","href",f).get(l+(i.href||""));if(S){for(var E=0;E<S.length;E++)if(p=S[E],p.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&p.getAttribute("rel")===(i.rel==null?null:i.rel)&&p.getAttribute("title")===(i.title==null?null:i.title)&&p.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){S.splice(E,1);break t}}p=f.createElement(l),ot(p,l,i),f.head.appendChild(p);break;case"meta":if(S=Ip("meta","content",f).get(l+(i.content||""))){for(E=0;E<S.length;E++)if(p=S[E],p.getAttribute("content")===(i.content==null?null:""+i.content)&&p.getAttribute("name")===(i.name==null?null:i.name)&&p.getAttribute("property")===(i.property==null?null:i.property)&&p.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&p.getAttribute("charset")===(i.charSet==null?null:i.charSet)){S.splice(E,1);break t}}p=f.createElement(l),ot(p,l,i),f.head.appendChild(p);break;default:throw Error(a(468,l))}p[je]=e,We(p),l=p}e.stateNode=l}else Mp(f,e.type,e.stateNode);else e.stateNode=xp(f,l,e.memoizedProps);else p!==l?(p===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):p.count--,l===null?Mp(f,e.type,e.stateNode):xp(f,l,e.memoizedProps)):l===null&&e.stateNode!==null&&Tr(e,e.memoizedProps,i.memoizedProps)}break;case 27:pt(n,e),mt(e),l&512&&(Xe||i===null||Kt(i,i.return)),i!==null&&l&4&&Tr(e,e.memoizedProps,i.memoizedProps);break;case 5:if(pt(n,e),mt(e),l&512&&(Xe||i===null||Kt(i,i.return)),e.flags&32){f=e.stateNode;try{So(f,"")}catch(ee){xe(e,e.return,ee)}}l&4&&e.stateNode!=null&&(f=e.memoizedProps,Tr(e,f,i!==null?i.memoizedProps:f)),l&1024&&(Ar=!0);break;case 6:if(pt(n,e),mt(e),l&4){if(e.stateNode===null)throw Error(a(162));l=e.memoizedProps,i=e.stateNode;try{i.nodeValue=l}catch(ee){xe(e,e.return,ee)}}break;case 3:if(da=null,f=Ot,Ot=ua(n.containerInfo),pt(n,e),Ot=f,mt(e),l&4&&i!==null&&i.memoizedState.isDehydrated)try{Wo(n.containerInfo)}catch(ee){xe(e,e.return,ee)}Ar&&(Ar=!1,Mf(e));break;case 4:l=Ot,Ot=ua(e.stateNode.containerInfo),pt(n,e),mt(e),Ot=l;break;case 12:pt(n,e),mt(e);break;case 31:pt(n,e),mt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Qs(e,l)));break;case 13:pt(n,e),mt(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&($s=yt()),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Qs(e,l)));break;case 22:f=e.memoizedState!==null;var _=i!==null&&i.memoizedState!==null,P=rn,H=Xe;if(rn=P||f,Xe=H||_,pt(n,e),Xe=H,rn=P,mt(e),l&8192)e:for(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(i===null||_||rn||Xe||ro(e)),i=null,n=e;;){if(n.tag===5||n.tag===26){if(i===null){_=i=n;try{if(p=_.stateNode,f)S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{E=_.stateNode;var F=_.memoizedProps.style,k=F!=null&&F.hasOwnProperty("display")?F.display:null;E.style.display=k==null||typeof k=="boolean"?"":(""+k).trim()}}catch(ee){xe(_,_.return,ee)}}}else if(n.tag===6){if(i===null){_=n;try{_.stateNode.nodeValue=f?"":_.memoizedProps}catch(ee){xe(_,_.return,ee)}}}else if(n.tag===18){if(i===null){_=n;try{var L=_.stateNode;f?Sp(L,!0):Sp(_.stateNode,!1)}catch(ee){xe(_,_.return,ee)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;i===n&&(i=null),n=n.return}i===n&&(i=null),n.sibling.return=n.return,n=n.sibling}l&4&&(l=e.updateQueue,l!==null&&(i=l.retryQueue,i!==null&&(l.retryQueue=null,Qs(e,i))));break;case 19:pt(n,e),mt(e),l&4&&(l=e.updateQueue,l!==null&&(e.updateQueue=null,Qs(e,l)));break;case 30:break;case 21:break;default:pt(n,e),mt(e)}}function mt(e){var n=e.flags;if(n&2){try{for(var i,l=e.return;l!==null;){if(Cf(l)){i=l;break}l=l.return}if(i==null)throw Error(a(160));switch(i.tag){case 27:var f=i.stateNode,p=Cr(e);Xs(e,p,f);break;case 5:var S=i.stateNode;i.flags&32&&(So(S,""),i.flags&=-33);var E=Cr(e);Xs(e,E,S);break;case 3:case 4:var _=i.stateNode.containerInfo,P=Cr(e);Er(e,P,_);break;default:throw Error(a(161))}}catch(H){xe(e,e.return,H)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Mf(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Mf(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function cn(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)_f(e,n.alternate,n),n=n.sibling}function ro(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Mn(4,n,n.return),ro(n);break;case 1:Kt(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount=="function"&&Sf(n,n.return,i),ro(n);break;case 27:Yi(n.stateNode);case 26:case 5:Kt(n,n.return),ro(n);break;case 22:n.memoizedState===null&&ro(n);break;case 30:ro(n);break;default:ro(n)}e=e.sibling}}function dn(e,n,i){for(i=i&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var l=n.alternate,f=e,p=n,S=p.flags;switch(p.tag){case 0:case 11:case 15:dn(f,p,i),Ui(4,p);break;case 1:if(dn(f,p,i),l=p,f=l.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(P){xe(l,l.return,P)}if(l=p,f=l.updateQueue,f!==null){var E=l.stateNode;try{var _=f.shared.hiddenCallbacks;if(_!==null)for(f.shared.hiddenCallbacks=null,f=0;f<_.length;f++)ad(_[f],E)}catch(P){xe(l,l.return,P)}}i&&S&64&&vf(p),Li(p,p.return);break;case 27:Ef(p);case 26:case 5:dn(f,p,i),i&&l===null&&S&4&&Tf(p),Li(p,p.return);break;case 12:dn(f,p,i);break;case 31:dn(f,p,i),i&&S&4&&Rf(f,p);break;case 13:dn(f,p,i),i&&S&4&&xf(f,p);break;case 22:p.memoizedState===null&&dn(f,p,i),Li(p,p.return);break;case 30:break;default:dn(f,p,i)}n=n.sibling}}function _r(e,n){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&Ei(i))}function br(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ei(e))}function Ft(e,n,i,l){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Nf(e,n,i,l),n=n.sibling}function Nf(e,n,i,l){var f=n.flags;switch(n.tag){case 0:case 11:case 15:Ft(e,n,i,l),f&2048&&Ui(9,n);break;case 1:Ft(e,n,i,l);break;case 3:Ft(e,n,i,l),f&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ei(e)));break;case 12:if(f&2048){Ft(e,n,i,l),e=n.stateNode;try{var p=n.memoizedProps,S=p.id,E=p.onPostCommit;typeof E=="function"&&E(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(_){xe(n,n.return,_)}}else Ft(e,n,i,l);break;case 31:Ft(e,n,i,l);break;case 13:Ft(e,n,i,l);break;case 23:break;case 22:p=n.stateNode,S=n.alternate,n.memoizedState!==null?p._visibility&2?Ft(e,n,i,l):Gi(e,n):p._visibility&2?Ft(e,n,i,l):(p._visibility|=2,Bo(e,n,i,l,(n.subtreeFlags&10256)!==0||!1)),f&2048&&_r(S,n);break;case 24:Ft(e,n,i,l),f&2048&&br(n.alternate,n);break;default:Ft(e,n,i,l)}}function Bo(e,n,i,l,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=e,S=n,E=i,_=l,P=S.flags;switch(S.tag){case 0:case 11:case 15:Bo(p,S,E,_,f),Ui(8,S);break;case 23:break;case 22:var H=S.stateNode;S.memoizedState!==null?H._visibility&2?Bo(p,S,E,_,f):Gi(p,S):(H._visibility|=2,Bo(p,S,E,_,f)),f&&P&2048&&_r(S.alternate,S);break;case 24:Bo(p,S,E,_,f),f&&P&2048&&br(S.alternate,S);break;default:Bo(p,S,E,_,f)}n=n.sibling}}function Gi(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=e,l=n,f=l.flags;switch(l.tag){case 22:Gi(i,l),f&2048&&_r(l.alternate,l);break;case 24:Gi(i,l),f&2048&&br(l.alternate,l);break;default:Gi(i,l)}n=n.sibling}}var Hi=8192;function Oo(e,n,i){if(e.subtreeFlags&Hi)for(e=e.child;e!==null;)Pf(e,n,i),e=e.sibling}function Pf(e,n,i){switch(e.tag){case 26:Oo(e,n,i),e.flags&Hi&&e.memoizedState!==null&&Qv(i,Ot,e.memoizedState,e.memoizedProps);break;case 5:Oo(e,n,i);break;case 3:case 4:var l=Ot;Ot=ua(e.stateNode.containerInfo),Oo(e,n,i),Ot=l;break;case 22:e.memoizedState===null&&(l=e.alternate,l!==null&&l.memoizedState!==null?(l=Hi,Hi=16777216,Oo(e,n,i),Hi=l):Oo(e,n,i));break;default:Oo(e,n,i)}}function Df(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Bi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];$e=l,Uf(l,e)}Df(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)kf(e),e=e.sibling}function kf(e){switch(e.tag){case 0:case 11:case 15:Bi(e),e.flags&2048&&Mn(9,e,e.return);break;case 3:Bi(e);break;case 12:Bi(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Ws(e)):Bi(e);break;default:Bi(e)}}function Ws(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var l=n[i];$e=l,Uf(l,e)}Df(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Mn(8,n,n.return),Ws(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,Ws(n));break;default:Ws(n)}e=e.sibling}}function Uf(e,n){for(;$e!==null;){var i=$e;switch(i.tag){case 0:case 11:case 15:Mn(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var l=i.memoizedState.cachePool.pool;l!=null&&l.refCount++}break;case 24:Ei(i.memoizedState.cache)}if(l=i.child,l!==null)l.return=i,$e=l;else e:for(i=e;$e!==null;){l=$e;var f=l.sibling,p=l.return;if(bf(l),l===i){$e=null;break e}if(f!==null){f.return=p,$e=f;break e}$e=p}}}var cv={getCacheForType:function(e){var n=tt(Ye),i=n.data.get(e);return i===void 0&&(i=e(),n.data.set(e,i)),i},cacheSignal:function(){return tt(Ye).controller.signal}},dv=typeof WeakMap=="function"?WeakMap:Map,_e=0,De=null,he=null,ye=0,Re=0,_t=null,Nn=!1,Fo=!1,wr=!1,fn=0,Fe=0,Pn=0,uo=0,Rr=0,bt=0,qo=0,Oi=null,ht=null,xr=!1,$s=0,Lf=0,Zs=1/0,js=null,Dn=null,Qe=0,kn=null,Vo=null,pn=0,Ir=0,Mr=null,Gf=null,Fi=0,Nr=null;function wt(){return(_e&2)!==0&&ye!==0?ye&-ye:G.T!==null?Gr():Zu()}function Hf(){if(bt===0)if((ye&536870912)===0||Se){var e=ls;ls<<=1,(ls&3932160)===0&&(ls=262144),bt=e}else bt=536870912;return e=Et.current,e!==null&&(e.flags|=32),bt}function gt(e,n,i){(e===De&&(Re===2||Re===9)||e.cancelPendingCommit!==null)&&(zo(e,0),Un(e,ye,bt,!1)),ri(e,i),((_e&2)===0||e!==De)&&(e===De&&((_e&2)===0&&(uo|=i),Fe===4&&Un(e,ye,bt,!1)),Xt(e))}function Bf(e,n,i){if((_e&6)!==0)throw Error(a(327));var l=!i&&(n&127)===0&&(n&e.expiredLanes)===0||li(e,n),f=l?mv(e,n):Dr(e,n,!0),p=l;do{if(f===0){Fo&&!l&&Un(e,n,0,!1);break}else{if(i=e.current.alternate,p&&!fv(i)){f=Dr(e,n,!1),p=!1;continue}if(f===2){if(p=n,e.errorRecoveryDisabledLanes&p)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var E=e;f=Oi;var _=E.current.memoizedState.isDehydrated;if(_&&(zo(E,S).flags|=256),S=Dr(E,S,!1),S!==2){if(wr&&!_){E.errorRecoveryDisabledLanes|=p,uo|=p,f=4;break e}p=ht,ht=f,p!==null&&(ht===null?ht=p:ht.push.apply(ht,p))}f=S}if(p=!1,f!==2)continue}}if(f===1){zo(e,0),Un(e,n,0,!0);break}e:{switch(l=e,p=f,p){case 0:case 1:throw Error(a(345));case 4:if((n&4194048)!==n)break;case 6:Un(l,n,bt,!Nn);break e;case 2:ht=null;break;case 3:case 5:break;default:throw Error(a(329))}if((n&62914560)===n&&(f=$s+300-yt(),10<f)){if(Un(l,n,bt,!Nn),us(l,0,!0)!==0)break e;pn=n,l.timeoutHandle=gp(Of.bind(null,l,i,ht,js,xr,n,bt,uo,qo,Nn,p,"Throttled",-0,0),f);break e}Of(l,i,ht,js,xr,n,bt,uo,qo,Nn,p,null,-0,0)}}break}while(!0);Xt(e)}function Of(e,n,i,l,f,p,S,E,_,P,H,F,k,L){if(e.timeoutHandle=-1,F=n.subtreeFlags,F&8192||(F&16785408)===16785408){F={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$t},Pf(n,p,F);var ee=(p&62914560)===p?$s-yt():(p&4194048)===p?Lf-yt():0;if(ee=Wv(F,ee),ee!==null){pn=p,e.cancelPendingCommit=ee(Xf.bind(null,e,n,p,i,l,f,S,E,_,H,F,null,k,L)),Un(e,p,S,!P);return}}Xf(e,n,p,i,l,f,S,E,_)}function fv(e){for(var n=e;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var l=0;l<i.length;l++){var f=i[l],p=f.getSnapshot;f=f.value;try{if(!Tt(p(),f))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Un(e,n,i,l){n&=~Rr,n&=~uo,e.suspendedLanes|=n,e.pingedLanes&=~n,l&&(e.warmLanes|=n),l=e.expirationTimes;for(var f=n;0<f;){var p=31-St(f),S=1<<p;l[p]=-1,f&=~S}i!==0&&Qu(e,i,n)}function ea(){return(_e&6)===0?(qi(0),!1):!0}function Pr(){if(he!==null){if(Re===0)var e=he.return;else e=he,tn=eo=null,Xl(e),ko=null,_i=0,e=he;for(;e!==null;)yf(e.alternate,e),e=e.return;he=null}}function zo(e,n){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,Pv(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),pn=0,Pr(),De=e,he=i=jt(e.current,null),ye=n,Re=0,_t=null,Nn=!1,Fo=li(e,n),wr=!1,qo=bt=Rr=uo=Pn=Fe=0,ht=Oi=null,xr=!1,(n&8)!==0&&(n|=n&32);var l=e.entangledLanes;if(l!==0)for(e=e.entanglements,l&=n;0<l;){var f=31-St(l),p=1<<f;n|=e[f],l&=~p}return fn=n,Cs(),i}function Ff(e,n){fe=null,G.H=Pi,n===Do||n===Is?(n=nd(),Re=3):n===Ll?(n=nd(),Re=4):Re=n===cr?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,_t=n,he===null&&(Fe=1,Vs(e,Mt(n,e.current)))}function qf(){var e=Et.current;return e===null?!0:(ye&4194048)===ye?kt===null:(ye&62914560)===ye||(ye&536870912)!==0?e===kt:!1}function Vf(){var e=G.H;return G.H=Pi,e===null?Pi:e}function zf(){var e=G.A;return G.A=cv,e}function ta(){Fe=4,Nn||(ye&4194048)!==ye&&Et.current!==null||(Fo=!0),(Pn&134217727)===0&&(uo&134217727)===0||De===null||Un(De,ye,bt,!1)}function Dr(e,n,i){var l=_e;_e|=2;var f=Vf(),p=zf();(De!==e||ye!==n)&&(js=null,zo(e,n)),n=!1;var S=Fe;e:do try{if(Re!==0&&he!==null){var E=he,_=_t;switch(Re){case 8:Pr(),S=6;break e;case 3:case 2:case 9:case 6:Et.current===null&&(n=!0);var P=Re;if(Re=0,_t=null,Yo(e,E,_,P),i&&Fo){S=0;break e}break;default:P=Re,Re=0,_t=null,Yo(e,E,_,P)}}pv(),S=Fe;break}catch(H){Ff(e,H)}while(!0);return n&&e.shellSuspendCounter++,tn=eo=null,_e=l,G.H=f,G.A=p,he===null&&(De=null,ye=0,Cs()),S}function pv(){for(;he!==null;)Yf(he)}function mv(e,n){var i=_e;_e|=2;var l=Vf(),f=zf();De!==e||ye!==n?(js=null,Zs=yt()+500,zo(e,n)):Fo=li(e,n);e:do try{if(Re!==0&&he!==null){n=he;var p=_t;t:switch(Re){case 1:Re=0,_t=null,Yo(e,n,p,1);break;case 2:case 9:if(ed(p)){Re=0,_t=null,Jf(n);break}n=function(){Re!==2&&Re!==9||De!==e||(Re=7),Xt(e)},p.then(n,n);break e;case 3:Re=7;break e;case 4:Re=5;break e;case 7:ed(p)?(Re=0,_t=null,Jf(n)):(Re=0,_t=null,Yo(e,n,p,7));break;case 5:var S=null;switch(he.tag){case 26:S=he.memoizedState;case 5:case 27:var E=he;if(S?Np(S):E.stateNode.complete){Re=0,_t=null;var _=E.sibling;if(_!==null)he=_;else{var P=E.return;P!==null?(he=P,na(P)):he=null}break t}}Re=0,_t=null,Yo(e,n,p,5);break;case 6:Re=0,_t=null,Yo(e,n,p,6);break;case 8:Pr(),Fe=6;break e;default:throw Error(a(462))}}hv();break}catch(H){Ff(e,H)}while(!0);return tn=eo=null,G.H=l,G.A=f,_e=i,he!==null?0:(De=null,ye=0,Cs(),Fe)}function hv(){for(;he!==null&&!Hg();)Yf(he)}function Yf(e){var n=hf(e.alternate,e,fn);e.memoizedProps=e.pendingProps,n===null?na(e):he=n}function Jf(e){var n=e,i=n.alternate;switch(n.tag){case 15:case 0:n=uf(i,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=uf(i,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:Xl(n);default:yf(i,n),n=he=Vc(n,fn),n=hf(i,n,fn)}e.memoizedProps=e.pendingProps,n===null?na(e):he=n}function Yo(e,n,i,l){tn=eo=null,Xl(n),ko=null,_i=0;var f=n.return;try{if(ov(e,f,n,i,ye)){Fe=1,Vs(e,Mt(i,e.current)),he=null;return}}catch(p){if(f!==null)throw he=f,p;Fe=1,Vs(e,Mt(i,e.current)),he=null;return}n.flags&32768?(Se||l===1?e=!0:Fo||(ye&536870912)!==0?e=!1:(Nn=e=!0,(l===2||l===9||l===3||l===6)&&(l=Et.current,l!==null&&l.tag===13&&(l.flags|=16384))),Kf(n,e)):na(n)}function na(e){var n=e;do{if((n.flags&32768)!==0){Kf(n,Nn);return}e=n.return;var i=av(n.alternate,n,fn);if(i!==null){he=i;return}if(n=n.sibling,n!==null){he=n;return}he=n=e}while(n!==null);Fe===0&&(Fe=5)}function Kf(e,n){do{var i=lv(e.alternate,e);if(i!==null){i.flags&=32767,he=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(e=e.sibling,e!==null)){he=e;return}he=e=i}while(e!==null);Fe=6,he=null}function Xf(e,n,i,l,f,p,S,E,_){e.cancelPendingCommit=null;do oa();while(Qe!==0);if((_e&6)!==0)throw Error(a(327));if(n!==null){if(n===e.current)throw Error(a(177));if(p=n.lanes|n.childLanes,p|=Cl,Xg(e,i,p,S,E,_),e===De&&(he=De=null,ye=0),Vo=n,kn=e,pn=i,Ir=p,Mr=f,Gf=l,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Sv(ss,function(){return jf(),null})):(e.callbackNode=null,e.callbackPriority=0),l=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||l){l=G.T,G.T=null,f=J.p,J.p=2,S=_e,_e|=4;try{rv(e,n,i)}finally{_e=S,J.p=f,G.T=l}}Qe=1,Qf(),Wf(),$f()}}function Qf(){if(Qe===1){Qe=0;var e=kn,n=Vo,i=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||i){i=G.T,G.T=null;var l=J.p;J.p=2;var f=_e;_e|=4;try{If(n,e);var p=Yr,S=kc(e.containerInfo),E=p.focusedElem,_=p.selectionRange;if(S!==E&&E&&E.ownerDocument&&Dc(E.ownerDocument.documentElement,E)){if(_!==null&&gl(E)){var P=_.start,H=_.end;if(H===void 0&&(H=P),"selectionStart"in E)E.selectionStart=P,E.selectionEnd=Math.min(H,E.value.length);else{var F=E.ownerDocument||document,k=F&&F.defaultView||window;if(k.getSelection){var L=k.getSelection(),ee=E.textContent.length,se=Math.min(_.start,ee),Ne=_.end===void 0?se:Math.min(_.end,ee);!L.extend&&se>Ne&&(S=Ne,Ne=se,se=S);var x=Pc(E,se),w=Pc(E,Ne);if(x&&w&&(L.rangeCount!==1||L.anchorNode!==x.node||L.anchorOffset!==x.offset||L.focusNode!==w.node||L.focusOffset!==w.offset)){var N=F.createRange();N.setStart(x.node,x.offset),L.removeAllRanges(),se>Ne?(L.addRange(N),L.extend(w.node,w.offset)):(N.setEnd(w.node,w.offset),L.addRange(N))}}}}for(F=[],L=E;L=L.parentNode;)L.nodeType===1&&F.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<F.length;E++){var O=F[E];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}ha=!!zr,Yr=zr=null}finally{_e=f,J.p=l,G.T=i}}e.current=n,Qe=2}}function Wf(){if(Qe===2){Qe=0;var e=kn,n=Vo,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=G.T,G.T=null;var l=J.p;J.p=2;var f=_e;_e|=4;try{_f(e,n.alternate,n)}finally{_e=f,J.p=l,G.T=i}}Qe=3}}function $f(){if(Qe===4||Qe===3){Qe=0,Bg();var e=kn,n=Vo,i=pn,l=Gf;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Qe=5:(Qe=0,Vo=kn=null,Zf(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Dn=null),$a(i),n=n.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(ai,n,void 0,(n.current.flags&128)===128)}catch{}if(l!==null){n=G.T,f=J.p,J.p=2,G.T=null;try{for(var p=e.onRecoverableError,S=0;S<l.length;S++){var E=l[S];p(E.value,{componentStack:E.stack})}}finally{G.T=n,J.p=f}}(pn&3)!==0&&oa(),Xt(e),f=e.pendingLanes,(i&261930)!==0&&(f&42)!==0?e===Nr?Fi++:(Fi=0,Nr=e):Fi=0,qi(0)}}function Zf(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ei(n)))}function oa(){return Qf(),Wf(),$f(),jf()}function jf(){if(Qe!==5)return!1;var e=kn,n=Ir;Ir=0;var i=$a(pn),l=G.T,f=J.p;try{J.p=32>i?32:i,G.T=null,i=Mr,Mr=null;var p=kn,S=pn;if(Qe=0,Vo=kn=null,pn=0,(_e&6)!==0)throw Error(a(331));var E=_e;if(_e|=4,kf(p.current),Nf(p,p.current,S,i),_e=E,qi(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(ai,p)}catch{}return!0}finally{J.p=f,G.T=l,Zf(e,n)}}function ep(e,n,i){n=Mt(i,n),n=ur(e.stateNode,n,2),e=Rn(e,n,2),e!==null&&(ri(e,2),Xt(e))}function xe(e,n,i){if(e.tag===3)ep(e,e,i);else for(;n!==null;){if(n.tag===3){ep(n,e,i);break}else if(n.tag===1){var l=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(Dn===null||!Dn.has(l))){e=Mt(i,e),i=ef(2),l=Rn(n,i,2),l!==null&&(tf(i,l,n,e),ri(l,2),Xt(l));break}}n=n.return}}function kr(e,n,i){var l=e.pingCache;if(l===null){l=e.pingCache=new dv;var f=new Set;l.set(n,f)}else f=l.get(n),f===void 0&&(f=new Set,l.set(n,f));f.has(i)||(wr=!0,f.add(i),e=gv.bind(null,e,n,i),n.then(e,e))}function gv(e,n,i){var l=e.pingCache;l!==null&&l.delete(n),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,De===e&&(ye&i)===i&&(Fe===4||Fe===3&&(ye&62914560)===ye&&300>yt()-$s?(_e&2)===0&&zo(e,0):Rr|=i,qo===ye&&(qo=0)),Xt(e)}function tp(e,n){n===0&&(n=Xu()),e=$n(e,n),e!==null&&(ri(e,n),Xt(e))}function yv(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),tp(e,i)}function vv(e,n){var i=0;switch(e.tag){case 31:case 13:var l=e.stateNode,f=e.memoizedState;f!==null&&(i=f.retryLane);break;case 19:l=e.stateNode;break;case 22:l=e.stateNode._retryCache;break;default:throw Error(a(314))}l!==null&&l.delete(n),tp(e,i)}function Sv(e,n){return Ka(e,n)}var ia=null,Jo=null,Ur=!1,sa=!1,Lr=!1,Ln=0;function Xt(e){e!==Jo&&e.next===null&&(Jo===null?ia=Jo=e:Jo=Jo.next=e),sa=!0,Ur||(Ur=!0,Cv())}function qi(e,n){if(!Lr&&sa){Lr=!0;do for(var i=!1,l=ia;l!==null;){if(e!==0){var f=l.pendingLanes;if(f===0)var p=0;else{var S=l.suspendedLanes,E=l.pingedLanes;p=(1<<31-St(42|e)+1)-1,p&=f&~(S&~E),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(i=!0,sp(l,p))}else p=ye,p=us(l,l===De?p:0,l.cancelPendingCommit!==null||l.timeoutHandle!==-1),(p&3)===0||li(l,p)||(i=!0,sp(l,p));l=l.next}while(i);Lr=!1}}function Tv(){np()}function np(){sa=Ur=!1;var e=0;Ln!==0&&Nv()&&(e=Ln);for(var n=yt(),i=null,l=ia;l!==null;){var f=l.next,p=op(l,n);p===0?(l.next=null,i===null?ia=f:i.next=f,f===null&&(Jo=i)):(i=l,(e!==0||(p&3)!==0)&&(sa=!0)),l=f}Qe!==0&&Qe!==5||qi(e),Ln!==0&&(Ln=0)}function op(e,n){for(var i=e.suspendedLanes,l=e.pingedLanes,f=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var S=31-St(p),E=1<<S,_=f[S];_===-1?((E&i)===0||(E&l)!==0)&&(f[S]=Kg(E,n)):_<=n&&(e.expiredLanes|=E),p&=~E}if(n=De,i=ye,i=us(e,e===n?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l=e.callbackNode,i===0||e===n&&(Re===2||Re===9)||e.cancelPendingCommit!==null)return l!==null&&l!==null&&Xa(l),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||li(e,i)){if(n=i&-i,n===e.callbackPriority)return n;switch(l!==null&&Xa(l),$a(i)){case 2:case 8:i=Ju;break;case 32:i=ss;break;case 268435456:i=Ku;break;default:i=ss}return l=ip.bind(null,e),i=Ka(i,l),e.callbackPriority=n,e.callbackNode=i,n}return l!==null&&l!==null&&Xa(l),e.callbackPriority=2,e.callbackNode=null,2}function ip(e,n){if(Qe!==0&&Qe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(oa()&&e.callbackNode!==i)return null;var l=ye;return l=us(e,e===De?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),l===0?null:(Bf(e,l,n),op(e,yt()),e.callbackNode!=null&&e.callbackNode===i?ip.bind(null,e):null)}function sp(e,n){if(oa())return null;Bf(e,n,!0)}function Cv(){Dv(function(){(_e&6)!==0?Ka(Yu,Tv):np()})}function Gr(){if(Ln===0){var e=No;e===0&&(e=as,as<<=1,(as&261888)===0&&(as=256)),Ln=e}return Ln}function ap(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ps(""+e)}function lp(e,n){var i=n.ownerDocument.createElement("input");return i.name=n.name,i.value=n.value,e.id&&i.setAttribute("form",e.id),n.parentNode.insertBefore(i,n),e=new FormData(e),i.parentNode.removeChild(i),e}function Ev(e,n,i,l,f){if(n==="submit"&&i&&i.stateNode===f){var p=ap((f[ct]||null).action),S=l.submitter;S&&(n=(n=S[ct]||null)?ap(n.formAction):S.getAttribute("formAction"),n!==null&&(p=n,S=null));var E=new ys("action","action",null,l,f);e.push({event:E,listeners:[{instance:null,listener:function(){if(l.defaultPrevented){if(Ln!==0){var _=S?lp(f,S):new FormData(f);or(i,{pending:!0,data:_,method:f.method,action:p},null,_)}}else typeof p=="function"&&(E.preventDefault(),_=S?lp(f,S):new FormData(f),or(i,{pending:!0,data:_,method:f.method,action:p},p,_))},currentTarget:f}]})}}for(var Hr=0;Hr<Tl.length;Hr++){var Br=Tl[Hr],Av=Br.toLowerCase(),_v=Br[0].toUpperCase()+Br.slice(1);Bt(Av,"on"+_v)}Bt(Gc,"onAnimationEnd"),Bt(Hc,"onAnimationIteration"),Bt(Bc,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(Oy,"onTransitionRun"),Bt(Fy,"onTransitionStart"),Bt(qy,"onTransitionCancel"),Bt(Oc,"onTransitionEnd"),yo("onMouseEnter",["mouseout","mouseover"]),yo("onMouseLeave",["mouseout","mouseover"]),yo("onPointerEnter",["pointerout","pointerover"]),yo("onPointerLeave",["pointerout","pointerover"]),Kn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Kn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Kn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Kn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Kn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Kn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),bv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vi));function rp(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var l=e[i],f=l.event;l=l.listeners;e:{var p=void 0;if(n)for(var S=l.length-1;0<=S;S--){var E=l[S],_=E.instance,P=E.currentTarget;if(E=E.listener,_!==p&&f.isPropagationStopped())break e;p=E,f.currentTarget=P;try{p(f)}catch(H){Ts(H)}f.currentTarget=null,p=_}else for(S=0;S<l.length;S++){if(E=l[S],_=E.instance,P=E.currentTarget,E=E.listener,_!==p&&f.isPropagationStopped())break e;p=E,f.currentTarget=P;try{p(f)}catch(H){Ts(H)}f.currentTarget=null,p=_}}}}function ge(e,n){var i=n[Za];i===void 0&&(i=n[Za]=new Set);var l=e+"__bubble";i.has(l)||(up(n,e,2,!1),i.add(l))}function Or(e,n,i){var l=0;n&&(l|=4),up(i,e,l,n)}var aa="_reactListening"+Math.random().toString(36).slice(2);function Fr(e){if(!e[aa]){e[aa]=!0,tc.forEach(function(i){i!=="selectionchange"&&(bv.has(i)||Or(i,!1,e),Or(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[aa]||(n[aa]=!0,Or("selectionchange",!1,n))}}function up(e,n,i,l){switch(Hp(n)){case 2:var f=jv;break;case 8:f=e0;break;default:f=nu}i=f.bind(null,n,i,e),f=void 0,!ll||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),l?f!==void 0?e.addEventListener(n,i,{capture:!0,passive:f}):e.addEventListener(n,i,!0):f!==void 0?e.addEventListener(n,i,{passive:f}):e.addEventListener(n,i,!1)}function qr(e,n,i,l,f){var p=l;if((n&1)===0&&(n&2)===0&&l!==null)e:for(;;){if(l===null)return;var S=l.tag;if(S===3||S===4){var E=l.stateNode.containerInfo;if(E===f)break;if(S===4)for(S=l.return;S!==null;){var _=S.tag;if((_===3||_===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;E!==null;){if(S=mo(E),S===null)return;if(_=S.tag,_===5||_===6||_===26||_===27){l=p=S;continue e}E=E.parentNode}}l=l.return}pc(function(){var P=p,H=sl(i),F=[];e:{var k=Fc.get(e);if(k!==void 0){var L=ys,ee=e;switch(e){case"keypress":if(hs(i)===0)break e;case"keydown":case"keyup":L=vy;break;case"focusin":ee="focus",L=dl;break;case"focusout":ee="blur",L=dl;break;case"beforeblur":case"afterblur":L=dl;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=gc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=ay;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Cy;break;case Gc:case Hc:case Bc:L=uy;break;case Oc:L=Ay;break;case"scroll":case"scrollend":L=iy;break;case"wheel":L=by;break;case"copy":case"cut":case"paste":L=dy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=vc;break;case"toggle":case"beforetoggle":L=Ry}var se=(n&4)!==0,Ne=!se&&(e==="scroll"||e==="scrollend"),x=se?k!==null?k+"Capture":null:k;se=[];for(var w=P,N;w!==null;){var O=w;if(N=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||N===null||x===null||(O=di(w,x),O!=null&&se.push(zi(w,O,N))),Ne)break;w=w.return}0<se.length&&(k=new L(k,ee,null,i,H),F.push({event:k,listeners:se}))}}if((n&7)===0){e:{if(k=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",k&&i!==il&&(ee=i.relatedTarget||i.fromElement)&&(mo(ee)||ee[po]))break e;if((L||k)&&(k=H.window===H?H:(k=H.ownerDocument)?k.defaultView||k.parentWindow:window,L?(ee=i.relatedTarget||i.toElement,L=P,ee=ee?mo(ee):null,ee!==null&&(Ne=d(ee),se=ee.tag,ee!==Ne||se!==5&&se!==27&&se!==6)&&(ee=null)):(L=null,ee=P),L!==ee)){if(se=gc,O="onMouseLeave",x="onMouseEnter",w="mouse",(e==="pointerout"||e==="pointerover")&&(se=vc,O="onPointerLeave",x="onPointerEnter",w="pointer"),Ne=L==null?k:ci(L),N=ee==null?k:ci(ee),k=new se(O,w+"leave",L,i,H),k.target=Ne,k.relatedTarget=N,O=null,mo(H)===P&&(se=new se(x,w+"enter",ee,i,H),se.target=N,se.relatedTarget=Ne,O=se),Ne=O,L&&ee)t:{for(se=wv,x=L,w=ee,N=0,O=x;O;O=se(O))N++;O=0;for(var ie=w;ie;ie=se(ie))O++;for(;0<N-O;)x=se(x),N--;for(;0<O-N;)w=se(w),O--;for(;N--;){if(x===w||w!==null&&x===w.alternate){se=x;break t}x=se(x),w=se(w)}se=null}else se=null;L!==null&&cp(F,k,L,se,!1),ee!==null&&Ne!==null&&cp(F,Ne,ee,se,!0)}}e:{if(k=P?ci(P):window,L=k.nodeName&&k.nodeName.toLowerCase(),L==="select"||L==="input"&&k.type==="file")var Ce=wc;else if(_c(k))if(Rc)Ce=Gy;else{Ce=Uy;var oe=ky}else L=k.nodeName,!L||L.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?P&&ol(P.elementType)&&(Ce=wc):Ce=Ly;if(Ce&&(Ce=Ce(e,P))){bc(F,Ce,i,H);break e}oe&&oe(e,k,P),e==="focusout"&&P&&k.type==="number"&&P.memoizedProps.value!=null&&nl(k,"number",k.value)}switch(oe=P?ci(P):window,e){case"focusin":(_c(oe)||oe.contentEditable==="true")&&(Ao=oe,yl=P,Si=null);break;case"focusout":Si=yl=Ao=null;break;case"mousedown":vl=!0;break;case"contextmenu":case"mouseup":case"dragend":vl=!1,Uc(F,i,H);break;case"selectionchange":if(By)break;case"keydown":case"keyup":Uc(F,i,H)}var pe;if(pl)e:{switch(e){case"compositionstart":var ve="onCompositionStart";break e;case"compositionend":ve="onCompositionEnd";break e;case"compositionupdate":ve="onCompositionUpdate";break e}ve=void 0}else Eo?Ec(e,i)&&(ve="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(ve="onCompositionStart");ve&&(Sc&&i.locale!=="ko"&&(Eo||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Eo&&(pe=mc()):(Tn=H,rl="value"in Tn?Tn.value:Tn.textContent,Eo=!0)),oe=la(P,ve),0<oe.length&&(ve=new yc(ve,e,null,i,H),F.push({event:ve,listeners:oe}),pe?ve.data=pe:(pe=Ac(i),pe!==null&&(ve.data=pe)))),(pe=Iy?My(e,i):Ny(e,i))&&(ve=la(P,"onBeforeInput"),0<ve.length&&(oe=new yc("onBeforeInput","beforeinput",null,i,H),F.push({event:oe,listeners:ve}),oe.data=pe)),Ev(F,e,P,i,H)}rp(F,n)})}function zi(e,n,i){return{instance:e,listener:n,currentTarget:i}}function la(e,n){for(var i=n+"Capture",l=[];e!==null;){var f=e,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=di(e,i),f!=null&&l.unshift(zi(e,f,p)),f=di(e,n),f!=null&&l.push(zi(e,f,p))),e.tag===3)return l;e=e.return}return[]}function wv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function cp(e,n,i,l,f){for(var p=n._reactName,S=[];i!==null&&i!==l;){var E=i,_=E.alternate,P=E.stateNode;if(E=E.tag,_!==null&&_===l)break;E!==5&&E!==26&&E!==27||P===null||(_=P,f?(P=di(i,p),P!=null&&S.unshift(zi(i,P,_))):f||(P=di(i,p),P!=null&&S.push(zi(i,P,_)))),i=i.return}S.length!==0&&e.push({event:n,listeners:S})}var Rv=/\r\n?/g,xv=/\u0000|\uFFFD/g;function dp(e){return(typeof e=="string"?e:""+e).replace(Rv,`
`).replace(xv,"")}function fp(e,n){return n=dp(n),dp(e)===n}function Me(e,n,i,l,f,p){switch(i){case"children":typeof l=="string"?n==="body"||n==="textarea"&&l===""||So(e,l):(typeof l=="number"||typeof l=="bigint")&&n!=="body"&&So(e,""+l);break;case"className":ds(e,"class",l);break;case"tabIndex":ds(e,"tabindex",l);break;case"dir":case"role":case"viewBox":case"width":case"height":ds(e,i,l);break;case"style":dc(e,l,p);break;case"data":if(n!=="object"){ds(e,"data",l);break}case"src":case"href":if(l===""&&(n!=="a"||i!=="href")){e.removeAttribute(i);break}if(l==null||typeof l=="function"||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(i);break}l=ps(""+l),e.setAttribute(i,l);break;case"action":case"formAction":if(typeof l=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(i==="formAction"?(n!=="input"&&Me(e,n,"name",f.name,f,null),Me(e,n,"formEncType",f.formEncType,f,null),Me(e,n,"formMethod",f.formMethod,f,null),Me(e,n,"formTarget",f.formTarget,f,null)):(Me(e,n,"encType",f.encType,f,null),Me(e,n,"method",f.method,f,null),Me(e,n,"target",f.target,f,null)));if(l==null||typeof l=="symbol"||typeof l=="boolean"){e.removeAttribute(i);break}l=ps(""+l),e.setAttribute(i,l);break;case"onClick":l!=null&&(e.onclick=$t);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(i=l.__html,i!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=i}}break;case"multiple":e.multiple=l&&typeof l!="function"&&typeof l!="symbol";break;case"muted":e.muted=l&&typeof l!="function"&&typeof l!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(l==null||typeof l=="function"||typeof l=="boolean"||typeof l=="symbol"){e.removeAttribute("xlink:href");break}i=ps(""+l),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,""+l):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":l&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":l===!0?e.setAttribute(i,""):l!==!1&&l!=null&&typeof l!="function"&&typeof l!="symbol"?e.setAttribute(i,l):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":l!=null&&typeof l!="function"&&typeof l!="symbol"&&!isNaN(l)&&1<=l?e.setAttribute(i,l):e.removeAttribute(i);break;case"rowSpan":case"start":l==null||typeof l=="function"||typeof l=="symbol"||isNaN(l)?e.removeAttribute(i):e.setAttribute(i,l);break;case"popover":ge("beforetoggle",e),ge("toggle",e),cs(e,"popover",l);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",l);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",l);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",l);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",l);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",l);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",l);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",l);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",l);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",l);break;case"is":cs(e,"is",l);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=ny.get(i)||i,cs(e,i,l))}}function Vr(e,n,i,l,f,p){switch(i){case"style":dc(e,l,p);break;case"dangerouslySetInnerHTML":if(l!=null){if(typeof l!="object"||!("__html"in l))throw Error(a(61));if(i=l.__html,i!=null){if(f.children!=null)throw Error(a(60));e.innerHTML=i}}break;case"children":typeof l=="string"?So(e,l):(typeof l=="number"||typeof l=="bigint")&&So(e,""+l);break;case"onScroll":l!=null&&ge("scroll",e);break;case"onScrollEnd":l!=null&&ge("scrollend",e);break;case"onClick":l!=null&&(e.onclick=$t);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!nc.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(f=i.endsWith("Capture"),n=i.slice(2,f?i.length-7:void 0),p=e[ct]||null,p=p!=null?p[i]:null,typeof p=="function"&&e.removeEventListener(n,p,f),typeof l=="function")){typeof p!="function"&&p!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(n,l,f);break e}i in e?e[i]=l:l===!0?e.setAttribute(i,""):cs(e,i,l)}}}function ot(e,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",e),ge("load",e);var l=!1,f=!1,p;for(p in i)if(i.hasOwnProperty(p)){var S=i[p];if(S!=null)switch(p){case"src":l=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Me(e,n,p,S,i,null)}}f&&Me(e,n,"srcSet",i.srcSet,i,null),l&&Me(e,n,"src",i.src,i,null);return;case"input":ge("invalid",e);var E=p=S=f=null,_=null,P=null;for(l in i)if(i.hasOwnProperty(l)){var H=i[l];if(H!=null)switch(l){case"name":f=H;break;case"type":S=H;break;case"checked":_=H;break;case"defaultChecked":P=H;break;case"value":p=H;break;case"defaultValue":E=H;break;case"children":case"dangerouslySetInnerHTML":if(H!=null)throw Error(a(137,n));break;default:Me(e,n,l,H,i,null)}}lc(e,p,E,_,P,S,f,!1);return;case"select":ge("invalid",e),l=S=p=null;for(f in i)if(i.hasOwnProperty(f)&&(E=i[f],E!=null))switch(f){case"value":p=E;break;case"defaultValue":S=E;break;case"multiple":l=E;default:Me(e,n,f,E,i,null)}n=p,i=S,e.multiple=!!l,n!=null?vo(e,!!l,n,!1):i!=null&&vo(e,!!l,i,!0);return;case"textarea":ge("invalid",e),p=f=l=null;for(S in i)if(i.hasOwnProperty(S)&&(E=i[S],E!=null))switch(S){case"value":l=E;break;case"defaultValue":f=E;break;case"children":p=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(a(91));break;default:Me(e,n,S,E,i,null)}uc(e,l,f,p);return;case"option":for(_ in i)if(i.hasOwnProperty(_)&&(l=i[_],l!=null))switch(_){case"selected":e.selected=l&&typeof l!="function"&&typeof l!="symbol";break;default:Me(e,n,_,l,i,null)}return;case"dialog":ge("beforetoggle",e),ge("toggle",e),ge("cancel",e),ge("close",e);break;case"iframe":case"object":ge("load",e);break;case"video":case"audio":for(l=0;l<Vi.length;l++)ge(Vi[l],e);break;case"image":ge("error",e),ge("load",e);break;case"details":ge("toggle",e);break;case"embed":case"source":case"link":ge("error",e),ge("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(P in i)if(i.hasOwnProperty(P)&&(l=i[P],l!=null))switch(P){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,n));default:Me(e,n,P,l,i,null)}return;default:if(ol(n)){for(H in i)i.hasOwnProperty(H)&&(l=i[H],l!==void 0&&Vr(e,n,H,l,i,void 0));return}}for(E in i)i.hasOwnProperty(E)&&(l=i[E],l!=null&&Me(e,n,E,l,i,null))}function Iv(e,n,i,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,S=null,E=null,_=null,P=null,H=null;for(L in i){var F=i[L];if(i.hasOwnProperty(L)&&F!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":_=F;default:l.hasOwnProperty(L)||Me(e,n,L,null,l,F)}}for(var k in l){var L=l[k];if(F=i[k],l.hasOwnProperty(k)&&(L!=null||F!=null))switch(k){case"type":p=L;break;case"name":f=L;break;case"checked":P=L;break;case"defaultChecked":H=L;break;case"value":S=L;break;case"defaultValue":E=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(a(137,n));break;default:L!==F&&Me(e,n,k,L,l,F)}}tl(e,S,E,_,P,H,p,f);return;case"select":L=S=E=k=null;for(p in i)if(_=i[p],i.hasOwnProperty(p)&&_!=null)switch(p){case"value":break;case"multiple":L=_;default:l.hasOwnProperty(p)||Me(e,n,p,null,l,_)}for(f in l)if(p=l[f],_=i[f],l.hasOwnProperty(f)&&(p!=null||_!=null))switch(f){case"value":k=p;break;case"defaultValue":E=p;break;case"multiple":S=p;default:p!==_&&Me(e,n,f,p,l,_)}n=E,i=S,l=L,k!=null?vo(e,!!i,k,!1):!!l!=!!i&&(n!=null?vo(e,!!i,n,!0):vo(e,!!i,i?[]:"",!1));return;case"textarea":L=k=null;for(E in i)if(f=i[E],i.hasOwnProperty(E)&&f!=null&&!l.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Me(e,n,E,null,l,f)}for(S in l)if(f=l[S],p=i[S],l.hasOwnProperty(S)&&(f!=null||p!=null))switch(S){case"value":k=f;break;case"defaultValue":L=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(a(91));break;default:f!==p&&Me(e,n,S,f,l,p)}rc(e,k,L);return;case"option":for(var ee in i)if(k=i[ee],i.hasOwnProperty(ee)&&k!=null&&!l.hasOwnProperty(ee))switch(ee){case"selected":e.selected=!1;break;default:Me(e,n,ee,null,l,k)}for(_ in l)if(k=l[_],L=i[_],l.hasOwnProperty(_)&&k!==L&&(k!=null||L!=null))switch(_){case"selected":e.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:Me(e,n,_,k,l,L)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var se in i)k=i[se],i.hasOwnProperty(se)&&k!=null&&!l.hasOwnProperty(se)&&Me(e,n,se,null,l,k);for(P in l)if(k=l[P],L=i[P],l.hasOwnProperty(P)&&k!==L&&(k!=null||L!=null))switch(P){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(a(137,n));break;default:Me(e,n,P,k,l,L)}return;default:if(ol(n)){for(var Ne in i)k=i[Ne],i.hasOwnProperty(Ne)&&k!==void 0&&!l.hasOwnProperty(Ne)&&Vr(e,n,Ne,void 0,l,k);for(H in l)k=l[H],L=i[H],!l.hasOwnProperty(H)||k===L||k===void 0&&L===void 0||Vr(e,n,H,k,l,L);return}}for(var x in i)k=i[x],i.hasOwnProperty(x)&&k!=null&&!l.hasOwnProperty(x)&&Me(e,n,x,null,l,k);for(F in l)k=l[F],L=i[F],!l.hasOwnProperty(F)||k===L||k==null&&L==null||Me(e,n,F,k,l,L)}function pp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Mv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,i=performance.getEntriesByType("resource"),l=0;l<i.length;l++){var f=i[l],p=f.transferSize,S=f.initiatorType,E=f.duration;if(p&&E&&pp(S)){for(S=0,E=f.responseEnd,l+=1;l<i.length;l++){var _=i[l],P=_.startTime;if(P>E)break;var H=_.transferSize,F=_.initiatorType;H&&pp(F)&&(_=_.responseEnd,S+=H*(_<E?1:(E-P)/(_-P)))}if(--l,n+=8*(p+S)/(f.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var zr=null,Yr=null;function ra(e){return e.nodeType===9?e:e.ownerDocument}function mp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function hp(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Jr(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kr=null;function Nv(){var e=window.event;return e&&e.type==="popstate"?e===Kr?!1:(Kr=e,!0):(Kr=null,!1)}var gp=typeof setTimeout=="function"?setTimeout:void 0,Pv=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,Dv=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(e){return yp.resolve(null).then(e).catch(kv)}:gp;function kv(e){setTimeout(function(){throw e})}function Gn(e){return e==="head"}function vp(e,n){var i=n,l=0;do{var f=i.nextSibling;if(e.removeChild(i),f&&f.nodeType===8)if(i=f.data,i==="/$"||i==="/&"){if(l===0){e.removeChild(f),Wo(n);return}l--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")l++;else if(i==="html")Yi(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,Yi(i);for(var p=i.firstChild;p;){var S=p.nextSibling,E=p.nodeName;p[ui]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&p.rel.toLowerCase()==="stylesheet"||i.removeChild(p),p=S}}else i==="body"&&Yi(e.ownerDocument.body);i=f}while(i);Wo(n)}function Sp(e,n){var i=e;e=0;do{var l=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),l&&l.nodeType===8)if(i=l.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=l}while(i)}function Xr(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Xr(i),ja(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function Uv(e,n,i,l){for(;e.nodeType===1;){var f=i;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!l&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(l){if(!e[ui])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=Ut(e.nextSibling),e===null)break}return null}function Lv(e,n,i){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=Ut(e.nextSibling),e===null))return null;return e}function Tp(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=Ut(e.nextSibling),e===null))return null;return e}function Qr(e){return e.data==="$?"||e.data==="$~"}function Wr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Gv(e,n){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||i.readyState!=="loading")n();else{var l=function(){n(),i.removeEventListener("DOMContentLoaded",l)};i.addEventListener("DOMContentLoaded",l),e._reactRetry=l}}function Ut(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var $r=null;function Cp(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(n===0)return Ut(e.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}e=e.nextSibling}return null}function Ep(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return e;n--}else i!=="/$"&&i!=="/&"||n++}e=e.previousSibling}return null}function Ap(e,n,i){switch(n=ra(i),e){case"html":if(e=n.documentElement,!e)throw Error(a(452));return e;case"head":if(e=n.head,!e)throw Error(a(453));return e;case"body":if(e=n.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function Yi(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);ja(e)}var Lt=new Map,_p=new Set;function ua(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var mn=J.d;J.d={f:Hv,r:Bv,D:Ov,C:Fv,L:qv,m:Vv,X:Yv,S:zv,M:Jv};function Hv(){var e=mn.f(),n=ea();return e||n}function Bv(e){var n=ho(e);n!==null&&n.tag===5&&n.type==="form"?Od(n):mn.r(e)}var Ko=typeof document>"u"?null:document;function bp(e,n,i){var l=Ko;if(l&&typeof n=="string"&&n){var f=xt(n);f='link[rel="'+e+'"][href="'+f+'"]',typeof i=="string"&&(f+='[crossorigin="'+i+'"]'),_p.has(f)||(_p.add(f),e={rel:e,crossOrigin:i,href:n},l.querySelector(f)===null&&(n=l.createElement("link"),ot(n,"link",e),We(n),l.head.appendChild(n)))}}function Ov(e){mn.D(e),bp("dns-prefetch",e,null)}function Fv(e,n){mn.C(e,n),bp("preconnect",e,n)}function qv(e,n,i){mn.L(e,n,i);var l=Ko;if(l&&e&&n){var f='link[rel="preload"][as="'+xt(n)+'"]';n==="image"&&i&&i.imageSrcSet?(f+='[imagesrcset="'+xt(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(f+='[imagesizes="'+xt(i.imageSizes)+'"]')):f+='[href="'+xt(e)+'"]';var p=f;switch(n){case"style":p=Xo(e);break;case"script":p=Qo(e)}Lt.has(p)||(e=T({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:e,as:n},i),Lt.set(p,e),l.querySelector(f)!==null||n==="style"&&l.querySelector(Ji(p))||n==="script"&&l.querySelector(Ki(p))||(n=l.createElement("link"),ot(n,"link",e),We(n),l.head.appendChild(n)))}}function Vv(e,n){mn.m(e,n);var i=Ko;if(i&&e){var l=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+xt(l)+'"][href="'+xt(e)+'"]',p=f;switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Qo(e)}if(!Lt.has(p)&&(e=T({rel:"modulepreload",href:e},n),Lt.set(p,e),i.querySelector(f)===null)){switch(l){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Ki(p)))return}l=i.createElement("link"),ot(l,"link",e),We(l),i.head.appendChild(l)}}}function zv(e,n,i){mn.S(e,n,i);var l=Ko;if(l&&e){var f=go(l).hoistableStyles,p=Xo(e);n=n||"default";var S=f.get(p);if(!S){var E={loading:0,preload:null};if(S=l.querySelector(Ji(p)))E.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":n},i),(i=Lt.get(p))&&Zr(e,i);var _=S=l.createElement("link");We(_),ot(_,"link",e),_._p=new Promise(function(P,H){_.onload=P,_.onerror=H}),_.addEventListener("load",function(){E.loading|=1}),_.addEventListener("error",function(){E.loading|=2}),E.loading|=4,ca(S,n,l)}S={type:"stylesheet",instance:S,count:1,state:E},f.set(p,S)}}}function Yv(e,n){mn.X(e,n);var i=Ko;if(i&&e){var l=go(i).hoistableScripts,f=Qo(e),p=l.get(f);p||(p=i.querySelector(Ki(f)),p||(e=T({src:e,async:!0},n),(n=Lt.get(f))&&jr(e,n),p=i.createElement("script"),We(p),ot(p,"link",e),i.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function Jv(e,n){mn.M(e,n);var i=Ko;if(i&&e){var l=go(i).hoistableScripts,f=Qo(e),p=l.get(f);p||(p=i.querySelector(Ki(f)),p||(e=T({src:e,async:!0,type:"module"},n),(n=Lt.get(f))&&jr(e,n),p=i.createElement("script"),We(p),ot(p,"link",e),i.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},l.set(f,p))}}function wp(e,n,i,l){var f=(f=me.current)?ua(f):null;if(!f)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(n=Xo(i.href),i=go(f).hoistableStyles,l=i.get(n),l||(l={type:"style",instance:null,count:0,state:null},i.set(n,l)),l):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=Xo(i.href);var p=go(f).hoistableStyles,S=p.get(e);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,S),(p=f.querySelector(Ji(e)))&&!p._p&&(S.instance=p,S.state.loading=5),Lt.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Lt.set(e,i),p||Kv(f,e,i,S.state))),n&&l===null)throw Error(a(528,""));return S}if(n&&l!==null)throw Error(a(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Qo(i),i=go(f).hoistableScripts,l=i.get(n),l||(l={type:"script",instance:null,count:0,state:null},i.set(n,l)),l):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function Xo(e){return'href="'+xt(e)+'"'}function Ji(e){return'link[rel="stylesheet"]['+e+"]"}function Rp(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Kv(e,n,i,l){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?l.loading=1:(n=e.createElement("link"),l.preload=n,n.addEventListener("load",function(){return l.loading|=1}),n.addEventListener("error",function(){return l.loading|=2}),ot(n,"link",i),We(n),e.head.appendChild(n))}function Qo(e){return'[src="'+xt(e)+'"]'}function Ki(e){return"script[async]"+e}function xp(e,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var l=e.querySelector('style[data-href~="'+xt(i.href)+'"]');if(l)return n.instance=l,We(l),l;var f=T({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return l=(e.ownerDocument||e).createElement("style"),We(l),ot(l,"style",f),ca(l,i.precedence,e),n.instance=l;case"stylesheet":f=Xo(i.href);var p=e.querySelector(Ji(f));if(p)return n.state.loading|=4,n.instance=p,We(p),p;l=Rp(i),(f=Lt.get(f))&&Zr(l,f),p=(e.ownerDocument||e).createElement("link"),We(p);var S=p;return S._p=new Promise(function(E,_){S.onload=E,S.onerror=_}),ot(p,"link",l),n.state.loading|=4,ca(p,i.precedence,e),n.instance=p;case"script":return p=Qo(i.src),(f=e.querySelector(Ki(p)))?(n.instance=f,We(f),f):(l=i,(f=Lt.get(p))&&(l=T({},i),jr(l,f)),e=e.ownerDocument||e,f=e.createElement("script"),We(f),ot(f,"link",l),e.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(a(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(l=n.instance,n.state.loading|=4,ca(l,i.precedence,e));return n.instance}function ca(e,n,i){for(var l=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=l.length?l[l.length-1]:null,p=f,S=0;S<l.length;S++){var E=l[S];if(E.dataset.precedence===n)p=E;else if(p!==f)break}p?p.parentNode.insertBefore(e,p.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(e,n.firstChild))}function Zr(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function jr(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var da=null;function Ip(e,n,i){if(da===null){var l=new Map,f=da=new Map;f.set(i,l)}else f=da,l=f.get(i),l||(l=new Map,f.set(i,l));if(l.has(e))return l;for(l.set(e,null),i=i.getElementsByTagName(e),f=0;f<i.length;f++){var p=i[f];if(!(p[ui]||p[je]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var S=p.getAttribute(n)||"";S=e+S;var E=l.get(S);E?E.push(p):l.set(S,[p])}}return l}function Mp(e,n,i){e=e.ownerDocument||e,e.head.insertBefore(i,n==="title"?e.querySelector("head > title"):null)}function Xv(e,n,i){if(i===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Np(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Qv(e,n,i,l){if(i.type==="stylesheet"&&(typeof l.media!="string"||matchMedia(l.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=Xo(l.href),p=n.querySelector(Ji(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=fa.bind(e),n.then(e,e)),i.state.loading|=4,i.instance=p,We(p);return}p=n.ownerDocument||n,l=Rp(l),(f=Lt.get(f))&&Zr(l,f),p=p.createElement("link"),We(p);var S=p;S._p=new Promise(function(E,_){S.onload=E,S.onerror=_}),ot(p,"link",l),i.instance=p}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=fa.bind(e),n.addEventListener("load",i),n.addEventListener("error",i))}}var eu=0;function Wv(e,n){return e.stylesheets&&e.count===0&&ma(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var l=setTimeout(function(){if(e.stylesheets&&ma(e,e.stylesheets),e.unsuspend){var p=e.unsuspend;e.unsuspend=null,p()}},6e4+n);0<e.imgBytes&&eu===0&&(eu=62500*Mv());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ma(e,e.stylesheets),e.unsuspend)){var p=e.unsuspend;e.unsuspend=null,p()}},(e.imgBytes>eu?50:800)+n);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(l),clearTimeout(f)}}:null}function fa(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ma(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var pa=null;function ma(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,pa=new Map,n.forEach($v,e),pa=null,fa.call(e))}function $v(e,n){if(!(n.state.loading&4)){var i=pa.get(e);if(i)var l=i.get(null);else{i=new Map,pa.set(e,i);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var S=f[p];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(i.set(S.dataset.precedence,S),l=S)}l&&i.set(null,l)}f=n.instance,S=f.getAttribute("data-precedence"),p=i.get(S)||l,p===l&&i.set(null,f),i.set(S,f),this.count++,l=fa.bind(this),f.addEventListener("load",l),f.addEventListener("error",l),p?p.parentNode.insertBefore(f,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),n.state.loading|=4}}var Xi={$$typeof:B,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function Zv(e,n,i,l,f,p,S,E,_){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qa(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qa(0),this.hiddenUpdates=Qa(null),this.identifierPrefix=l,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=_,this.incompleteTransitions=new Map}function Pp(e,n,i,l,f,p,S,E,_,P,H,F){return e=new Zv(e,n,i,S,_,P,H,F,E),n=1,p===!0&&(n|=24),p=Ct(3,null,null,n),e.current=p,p.stateNode=e,n=Dl(),n.refCount++,e.pooledCache=n,n.refCount++,p.memoizedState={element:l,isDehydrated:i,cache:n},Gl(p),e}function Dp(e){return e?(e=wo,e):wo}function kp(e,n,i,l,f,p){f=Dp(f),l.context===null?l.context=f:l.pendingContext=f,l=wn(n),l.payload={element:i},p=p===void 0?null:p,p!==null&&(l.callback=p),i=Rn(e,l,n),i!==null&&(gt(i,e,n),wi(i,e,n))}function Up(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function tu(e,n){Up(e,n),(e=e.alternate)&&Up(e,n)}function Lp(e){if(e.tag===13||e.tag===31){var n=$n(e,67108864);n!==null&&gt(n,e,67108864),tu(e,67108864)}}function Gp(e){if(e.tag===13||e.tag===31){var n=wt();n=Wa(n);var i=$n(e,n);i!==null&&gt(i,e,n),tu(e,n)}}var ha=!0;function jv(e,n,i,l){var f=G.T;G.T=null;var p=J.p;try{J.p=2,nu(e,n,i,l)}finally{J.p=p,G.T=f}}function e0(e,n,i,l){var f=G.T;G.T=null;var p=J.p;try{J.p=8,nu(e,n,i,l)}finally{J.p=p,G.T=f}}function nu(e,n,i,l){if(ha){var f=ou(l);if(f===null)qr(e,n,l,ga,i),Bp(e,l);else if(n0(f,e,n,i,l))l.stopPropagation();else if(Bp(e,l),n&4&&-1<t0.indexOf(e)){for(;f!==null;){var p=ho(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var S=Jn(p.pendingLanes);if(S!==0){var E=p;for(E.pendingLanes|=2,E.entangledLanes|=2;S;){var _=1<<31-St(S);E.entanglements[1]|=_,S&=~_}Xt(p),(_e&6)===0&&(Zs=yt()+500,qi(0))}}break;case 31:case 13:E=$n(p,2),E!==null&&gt(E,p,2),ea(),tu(p,2)}if(p=ou(l),p===null&&qr(e,n,l,ga,i),p===f)break;f=p}f!==null&&l.stopPropagation()}else qr(e,n,l,null,i)}}function ou(e){return e=sl(e),iu(e)}var ga=null;function iu(e){if(ga=null,e=mo(e),e!==null){var n=d(e);if(n===null)e=null;else{var i=n.tag;if(i===13){if(e=m(n),e!==null)return e;e=null}else if(i===31){if(e=g(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ga=e,null}function Hp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Og()){case Yu:return 2;case Ju:return 8;case ss:case Fg:return 32;case Ku:return 268435456;default:return 32}default:return 32}}var su=!1,Hn=null,Bn=null,On=null,Qi=new Map,Wi=new Map,Fn=[],t0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Bp(e,n){switch(e){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Bn=null;break;case"mouseover":case"mouseout":On=null;break;case"pointerover":case"pointerout":Qi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wi.delete(n.pointerId)}}function $i(e,n,i,l,f,p){return e===null||e.nativeEvent!==p?(e={blockedOn:n,domEventName:i,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},n!==null&&(n=ho(n),n!==null&&Lp(n)),e):(e.eventSystemFlags|=l,n=e.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),e)}function n0(e,n,i,l,f){switch(n){case"focusin":return Hn=$i(Hn,e,n,i,l,f),!0;case"dragenter":return Bn=$i(Bn,e,n,i,l,f),!0;case"mouseover":return On=$i(On,e,n,i,l,f),!0;case"pointerover":var p=f.pointerId;return Qi.set(p,$i(Qi.get(p)||null,e,n,i,l,f)),!0;case"gotpointercapture":return p=f.pointerId,Wi.set(p,$i(Wi.get(p)||null,e,n,i,l,f)),!0}return!1}function Op(e){var n=mo(e.target);if(n!==null){var i=d(n);if(i!==null){if(n=i.tag,n===13){if(n=m(i),n!==null){e.blockedOn=n,ju(e.priority,function(){Gp(i)});return}}else if(n===31){if(n=g(i),n!==null){e.blockedOn=n,ju(e.priority,function(){Gp(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ya(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=ou(e.nativeEvent);if(i===null){i=e.nativeEvent;var l=new i.constructor(i.type,i);il=l,i.target.dispatchEvent(l),il=null}else return n=ho(i),n!==null&&Lp(n),e.blockedOn=i,!1;n.shift()}return!0}function Fp(e,n,i){ya(e)&&i.delete(n)}function o0(){su=!1,Hn!==null&&ya(Hn)&&(Hn=null),Bn!==null&&ya(Bn)&&(Bn=null),On!==null&&ya(On)&&(On=null),Qi.forEach(Fp),Wi.forEach(Fp)}function va(e,n){e.blockedOn===n&&(e.blockedOn=null,su||(su=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,o0)))}var Sa=null;function qp(e){Sa!==e&&(Sa=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Sa===e&&(Sa=null);for(var n=0;n<e.length;n+=3){var i=e[n],l=e[n+1],f=e[n+2];if(typeof l!="function"){if(iu(l||i)===null)continue;break}var p=ho(i);p!==null&&(e.splice(n,3),n-=3,or(p,{pending:!0,data:f,method:i.method,action:l},l,f))}}))}function Wo(e){function n(_){return va(_,e)}Hn!==null&&va(Hn,e),Bn!==null&&va(Bn,e),On!==null&&va(On,e),Qi.forEach(n),Wi.forEach(n);for(var i=0;i<Fn.length;i++){var l=Fn[i];l.blockedOn===e&&(l.blockedOn=null)}for(;0<Fn.length&&(i=Fn[0],i.blockedOn===null);)Op(i),i.blockedOn===null&&Fn.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(l=0;l<i.length;l+=3){var f=i[l],p=i[l+1],S=f[ct]||null;if(typeof p=="function")S||qp(i);else if(S){var E=null;if(p&&p.hasAttribute("formAction")){if(f=p,S=p[ct]||null)E=S.formAction;else if(iu(f)!==null)continue}else E=S.action;typeof E=="function"?i[l+1]=E:(i.splice(l,3),l-=3),qp(i)}}}function Vp(){function e(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),l||setTimeout(i,20)}function i(){if(!l&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var l=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){l=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function au(e){this._internalRoot=e}Ta.prototype.render=au.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(a(409));var i=n.current,l=wt();kp(i,l,e,n,null,null)},Ta.prototype.unmount=au.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;kp(e.current,2,null,e,null,null),ea(),n[po]=null}};function Ta(e){this._internalRoot=e}Ta.prototype.unstable_scheduleHydration=function(e){if(e){var n=Zu();e={blockedOn:null,target:e,priority:n};for(var i=0;i<Fn.length&&n!==0&&n<Fn[i].priority;i++);Fn.splice(i,0,e),i===0&&Op(e)}};var zp=t.version;if(zp!=="19.2.3")throw Error(a(527,zp,"19.2.3"));J.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=h(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var i0={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:G,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ca=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ca.isDisabled&&Ca.supportsFiber)try{ai=Ca.inject(i0),vt=Ca}catch{}}return ji.createRoot=function(e,n){if(!r(e))throw Error(a(299));var i=!1,l="",f=Wd,p=$d,S=Zd;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=Pp(e,1,!1,null,null,i,l,null,f,p,S,Vp),e[po]=n.current,Fr(e),new au(n)},ji.hydrateRoot=function(e,n,i){if(!r(e))throw Error(a(299));var l=!1,f="",p=Wd,S=$d,E=Zd,_=null;return i!=null&&(i.unstable_strictMode===!0&&(l=!0),i.identifierPrefix!==void 0&&(f=i.identifierPrefix),i.onUncaughtError!==void 0&&(p=i.onUncaughtError),i.onCaughtError!==void 0&&(S=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError),i.formState!==void 0&&(_=i.formState)),n=Pp(e,1,!0,n,i??null,l,f,_,p,S,E,Vp),n.context=Dp(null),i=n.current,l=wt(),l=Wa(l),f=wn(l),f.callback=null,Rn(i,f,l),i=l,n.current.lanes=i,ri(n,i),Xt(n),e[po]=n.current,Fr(e),new Ta(n)},ji.version="19.2.3",ji}var em;function m0(){if(em)return uu.exports;em=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),uu.exports=p0(),uu.exports}var h0=m0();const g0=Bh(h0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),v0=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,s,a)=>a?a.toUpperCase():s.toLowerCase()),tm=o=>{const t=v0(o);return t.charAt(0).toUpperCase()+t.slice(1)},Oh=(...o)=>o.filter((t,s,a)=>!!t&&t.trim()!==""&&a.indexOf(t)===s).join(" ").trim(),S0=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var T0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=ke.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:r="",children:d,iconNode:m,...g},y)=>ke.createElement("svg",{ref:y,...T0,width:t,height:t,stroke:o,strokeWidth:a?Number(s)*24/Number(t):s,className:Oh("lucide",r),...!d&&!S0(g)&&{"aria-hidden":"true"},...g},[...m.map(([h,v])=>ke.createElement(h,v)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=(o,t)=>{const s=ke.forwardRef(({className:a,...r},d)=>ke.createElement(C0,{ref:d,iconNode:t,className:Oh(`lucide-${y0(tm(o))}`,`lucide-${o}`,a),...r}));return s.displayName=tm(o),s};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],A0=Pe("arrow-up",E0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],b0=Pe("book",_0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],R0=Pe("bot",w0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],hu=Pe("check",x0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],nm=Pe("chevron-right",I0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],Fh=Pe("circle-question-mark",M0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],qh=Pe("clock",N0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],D0=Pe("copy",P0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],gu=Pe("external-link",k0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],Vh=Pe("link",U0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],G0=Pe("loader-circle",L0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],om=Pe("menu",H0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],O0=Pe("panels-top-left",B0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],q0=Pe("play",F0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],z0=Pe("quote",V0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],im=Pe("search",Y0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],K0=Pe("send",J0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Q0=Pe("settings",X0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],$0=Pe("shield-check",W0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],j0=Pe("smartphone",Z0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],yu=Pe("sparkles",eS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tS=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],nS=Pe("square-check-big",tS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],iS=Pe("square",oS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],aS=Pe("terminal",sS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],rS=Pe("user",lS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uS=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],sm=Pe("wrench",uS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Ra=Pe("x",cS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dS=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],fS=Pe("zap",dS),Qt={getting_started:{title:"Getting Started",icon:b0,tags:["welcome","overview","stack"],content:`
# Welcome to BookHere v3.0.0

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
    `},features:{title:"Features",icon:fS,tags:["capabilities","functionality","highlights"],content:`
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


`},installation:{title:"Installation",icon:aS,tags:["setup","terminal","wordpress"],content:`
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

  `},configuration:{title:"Configuration",icon:Q0,tags:["env","api","stripe"],content:`
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

    `},customization:{title:"Customization",icon:sm,tags:["branding","ui","colors"],content:`
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

    `},security:{title:"Security & License",icon:$0,tags:["legal","safety","privacy"],content:`
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


    `},troubleshooting:{title:"Troubleshooting",icon:sm,tags:["help","fixes","errors"],content:`
# Troubleshooting Guide

Common issues and their solutions when setting up or running the BookHere mobile app.

---

## Installation Issues

### npm install fails with errors
**Problem:** \`npm install\` fails with dependency conflicts or permission errors.
**Solution:**
\`\`\`bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
\`\`\`

### "Cannot find module" errors
**Problem:** The app fails to start with "Cannot find module" errors.
**Solution:** Ensure all dependencies are installed and the Metro bundler is restarted with a clear cache:
\`\`\`bash
npm start --clear
\`\`\`

### Xcode build fails (iOS)
**Problem:** Build fails in Xcode with various errors.
**Solution:**
1. Open Xcode and "Clean Build Folder" (Product → Clean Build Folder).
2. Delete Derived Data.
3. Reinstall pods:
\`\`\`bash
cd ios
pod deintegrate
pod install
cd ..
\`\`\`

---

## Runtime Issues

### App shows blank white screen
**Problem:** The app loads but only shows a white screen.
**Solution:** This is often a bundle error. Restart the development server with a clear cache:
\`\`\`bash
npm start --clear
\`\`\`

### "Network request failed"
**Problem:** The app cannot connect to the backend API.
**Solution:**
1. Verify \`api_url\` in \`src/ApiUrl.js\` includes \`https://\` and ends with \`/\`.
2. Ensure your backend server is running and accessible from your device's network.
3. Check CORS configuration on your WordPress server.

---

## Third-Party Services

### Google Maps not showing
**Problem:** Map markers or the map itself are missing.
**Solution:**
1. Verify the Google Maps API key in \`app.json\`.
2. Ensure "Maps SDK for Android/iOS" is enabled in Google Cloud Console.
3. Check that billing is enabled for your Google Cloud project.

### Google Sign-In not working
**Problem:** Users cannot sign in with Google.
**Solution:**
1. Verify Client IDs in \`.env\`.
2. Ensure the Bundle ID (iOS) and Package Name (Android) match exactly with the Google Cloud Console settings.
3. Rebuild the app after any changes to \`.env\`.

---

## Need More Help?
If you're still stuck, please contact our support team at [support@webpenter.com](mailto:support@webpenter.com) with your purchase code and a detailed description of the issue.
    `},changelog:{title:"ChangeLog",icon:qh,tags:["updates","versions","history"],content:`
# ChangeLog

All notable changes to the BookHere Documentation Hub will be documented in this file.

---

## [3.0.0] - 2026-01-08

### Added
- **AI Assistant**: Integrated Google Gemini-powered "Ask AI" feature for technical support.
- **Smart Search**: Real-time search across all documentation sections.
- **Responsive Design**: Fully optimized mobile experience with a premium bottom-sheet TOC.
- **Reading Progress**: Visual indicator for tracking position in long guides.
- **Interactive TOC**: Dynamic "On this page" navigation for desktop and mobile.
- **Premium UI**: Modern aesthetics with glassmorphism and smooth transitions.

### Changed
- Migrated documentation to a React-based high-performance portal.
- Updated installation and configuration guides for Expo SDK 53.

---

## [2.0.0] - 2025-11-15

### Added
- Initial support for React Native 0.79.
- Added Stripe and PayPal payment integration guides.
- Expanded FAQ section with common setup questions.

---

## [1.0.0] - 2025-09-01
- Initial release of the BookHere mobile app documentation.
    `},submission:{title:"App Submission",icon:gu,subItems:{play_store:{title:"Google Play Store",icon:q0,tags:["android","submission","checklist"],content:`
# Google Play Store Submission Checklist

Follow this checklist to ensure a smooth submission process for the Android version of your app.

---

## 1. Preparation
- [ ] **Developer Account**: Ensure you have a Google Play Developer account ($25 one-time fee).
- [ ] **App Name**: Finalize your app's display name (max 50 characters).
- [ ] **Package Name**: Verify \`com.yourcompany.yourapp\` is unique and matches \`app.json\`.

## 2. Assets & Metadata
- [ ] **App Icon**: 512x512px PNG (32-bit).
- [ ] **Feature Graphic**: 1024x500px JPG or 24-bit PNG.
- [ ] **Screenshots**: At least 2-8 screenshots for Phone, 7-inch Tablet, and 10-inch Tablet.
- [ ] **Descriptions**: Short description (80 chars) and Full description (4000 chars).
- [ ] **Privacy Policy**: Hosted URL for your app's privacy policy.

## 3. Technical Requirements
- [ ] **Production Build**: Generate a signed Android App Bundle (AAB) using \`eas build --platform android --profile production\`.
- [ ] **Permissions**: Ensure all requested permissions are necessary and documented.
- [ ] **Target API Level**: Ensure the app targets the latest Android API level (usually 34+).

## 4. Submission
- [ ] **Content Rating**: Complete the content rating questionnaire.
- [ ] **App Access**: Provide login credentials if your app requires authentication.
- [ ] **Internal/Production Track**: Upload the AAB to the Production track.
- [ ] **Review**: Submit for review (usually takes 1-3 days).
`},app_store:{title:"Apple App Store",icon:j0,tags:["ios","submission","checklist"],content:`
# Apple App Store Submission Checklist

Follow this checklist to ensure your iOS app meets Apple's strict submission guidelines.

---

## 1. Preparation
- [ ] **Developer Account**: Ensure you have an active Apple Developer Program membership ($99/year).
- [ ] **App Name**: Finalize your app name (max 30 characters).
- [ ] **Bundle ID**: Verify your Bundle Identifier matches \`app.json\`.

## 2. Assets & Metadata
- [ ] **App Icon**: 1024x1024px PNG (no transparency).
- [ ] **Screenshots**: Required for 6.5" (iPhone 15/14/13 Pro Max) and 5.5" (iPhone 8 Plus) displays.
- [ ] **Keywords**: Up to 100 characters of comma-separated keywords.
- [ ] **Support URL**: A URL where users can find support for the app.

## 3. Technical Requirements
- [ ] **Production Build**: Generate an IPA using \`eas build --platform ios --profile production\`.
- [ ] **Upload**: Use Transporter or \`eas submit\` to upload the build to App Store Connect.
- [ ] **App Privacy**: Complete the "App Privacy" section (Data Types, Tracking).

## 4. Submission
- [ ] **App Review Information**: Provide a demo account (username/password) for Apple reviewers.
- [ ] **Version Release**: Choose between Manual or Automatic release after approval.
- [ ] **Submit**: Click "Add for Review" and wait for the status to change to "Waiting for Review".
`}}}},pS="v3.0.0",mS="support@webpenter.com",hS="https://demo.bookhere.app",gS=({content:o,onNavigate:t,onHeadersFound:s})=>{const[a,r]=os.useState(null),[d,m]=os.useState(null);os.useEffect(()=>{if(s){const I=v(o).filter(D=>D.type==="h2"||D.type==="h3").map(D=>({id:D.id,text:D.content,level:D.type==="h2"?2:3}));s(I)}},[o,s]);const g=(M,I)=>{navigator.clipboard.writeText(M),r(I),setTimeout(()=>r(null),2e3)},y=M=>{const I=`${window.location.origin}${window.location.pathname}#${M}`;navigator.clipboard.writeText(I),m(M),setTimeout(()=>m(null),2e3)},h=M=>M.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim(),v=M=>{const I=M.split(`
`),D=[];let V=null,B=null,X="",Z=null;const te=()=>{Z&&(D.push(Z),Z=null)};return I.forEach(K=>{const Q=K.trim();if(Q.startsWith("```")){te(),V?(D.push({type:"code",content:V.join(`
`),language:X}),V=null,X=""):(V=[],X=Q.replace("```","").trim());return}if(V!==null){V.push(K);return}if(Q.startsWith("|")&&Q.endsWith("|")){te();const Y=K.split("|").filter((z,j,re)=>!(j===0||j===re.length-1)).map(z=>z.trim());if(Y.every(z=>z.match(/^[ :-]+$/)))return;B?B.push(Y):B=[Y];return}else B&&(D.push({type:"table",content:B}),B=null);if(Q.startsWith("- [ ] ")||Q.startsWith("- [] ")||Q.startsWith("- [x] ")){te();const Y=Q.startsWith("- [x] ");D.push({type:"task",content:Q.replace(/- \[[ x]?\] /i,""),completed:Y})}else if(Q.startsWith("- ")||Q.startsWith("* ")||Q.startsWith("+ ")){const Y=Q.replace(/^[-*+]\s+/,"");Z&&Z.type==="ul"?Z.items.push({content:Y}):(te(),Z={type:"ul",items:[{content:Y}]})}else if(Q.match(/^\d+\.\s+/)){const Y=Q.match(/^(\d+)\.\s+/),z=Y?Y[1]:void 0,j=Q.replace(/^\d+\.\s+/,"");Z&&Z.type==="ol"?Z.items.push({content:j,value:z}):(te(),Z={type:"ol",items:[{content:j,value:z}]})}else if(te(),Q.startsWith("# ")){const Y=Q.replace("# ","");D.push({type:"h1",content:Y,id:h(Y)})}else if(Q.startsWith("## ")){const Y=Q.replace("## ","");D.push({type:"h2",content:Y,id:h(Y)})}else if(Q.startsWith("### ")){const Y=Q.replace("### ","");D.push({type:"h3",content:Y,id:h(Y)})}else if(Q.startsWith("#### ")){const Y=Q.replace("#### ","");D.push({type:"h4",content:Y,id:h(Y)})}else if(Q.startsWith("##### ")){const Y=Q.replace("##### ","");D.push({type:"h5",content:Y,id:h(Y)})}else if(Q.startsWith("###### ")){const Y=Q.replace("###### ","");D.push({type:"h6",content:Y,id:h(Y)})}else Q==="---"||Q==="***"||Q==="___"?D.push({type:"hr"}):Q.startsWith("> ")?D.push({type:"blockquote",content:Q.replace("> ","")}):Q!==""?D.push({type:"p",content:Q}):D.push({type:"space"})}),te(),B&&D.push({type:"table",content:B}),D},T=v(o),C=M=>{var V;const D=M.target.closest("a");if(D&&t){const B=D.getAttribute("href");if(B){if(B.endsWith(".md")||B.includes("./")){M.preventDefault();const X=(V=B.split("/").pop())==null?void 0:V.replace(".md","").toLowerCase();X&&t(X)}else if(B.startsWith("#")){M.preventDefault();const X=B.slice(1),Z=document.getElementById(X);if(Z){const K=Z.getBoundingClientRect().top+window.pageYOffset+-80;window.scrollTo({top:K,behavior:"smooth"})}}}}},A=M=>M.replace(/"([^"]+)"/g,'<span class="inline-flex items-center px-1.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-[13px] font-semibold mx-0.5 shadow-sm">$1</span>').replace(/\*\*(.*?)\*\*/g,'<strong class="text-slate-900 font-bold">$1</strong>').replace(/\*(.*?)\*/g,'<em class="italic">$1</em>').replace(/__(.*?)__/g,'<strong class="text-slate-900 font-bold">$1</strong>').replace(/_(.*?)_/g,'<em class="italic">$1</em>').replace(/~~(.*?)~~/g,'<del class="line-through text-slate-400">$1</del>').replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" class="text-rose-600 hover:underline font-semibold">$1</a>').replace(new RegExp('(?<!href=")(https?:\\/\\/[^\\s<]+)',"g"),'<a href="$1" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-rose-600 hover:text-rose-700 font-semibold bg-rose-50/50 hover:bg-rose-100/50 px-1.5 py-0.5 rounded-md transition-all border border-rose-100/50">$1<svg class="inline-block ml-1 w-3 h-3 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>').replace(new RegExp('(?<!href=")([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})',"g"),'<a href="mailto:$1" class="inline-flex items-center text-rose-600 hover:text-rose-700 font-semibold bg-rose-50/50 hover:bg-rose-100/50 px-1.5 py-0.5 rounded-md transition-all border border-rose-100/50">$1<svg class="inline-block ml-1 w-3 h-3 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>').replace(/`(.*?)`/g,'<code class="bg-slate-100 text-rose-600 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>').replace(/→/g,'<span class="text-slate-400 mx-1 font-light">→</span>'),U=(M,I,D)=>{const V={1:"text-4xl font-extrabold text-slate-900 mt-12 mb-6 border-b border-slate-200 pb-4 tracking-tight",2:"text-3xl font-bold text-slate-900 mt-10 mb-5 tracking-tight",3:"text-2xl font-bold text-slate-800 mt-8 mb-4 tracking-tight",4:"text-xl font-bold text-slate-800 mt-6 mb-3 tracking-tight",5:"text-lg font-bold text-slate-800 mt-4 mb-2 tracking-tight",6:"text-base font-bold text-slate-700 mt-4 mb-2 tracking-tight uppercase tracking-wider"}[M],B=b.jsxs("button",{onClick:()=>y(I.id),className:"opacity-0 group-hover:opacity-100 transition-all p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-rose-500 relative",title:"Copy section link",children:[d===I.id?b.jsx(hu,{size:16,className:"text-emerald-500"}):b.jsx(Vh,{size:16}),d===I.id&&b.jsx("span",{className:"absolute left-full ml-2 px-2 py-1 bg-slate-900 text-white text-[10px] font-bold rounded whitespace-nowrap",children:"Copied!"})]});switch(M){case 1:return b.jsxs("h1",{id:I.id,className:`${V} group flex items-center gap-3`,children:[I.content,B]},D);case 2:return b.jsxs("h2",{id:I.id,className:`${V} group flex items-center gap-3`,children:[I.content,B]},D);case 3:return b.jsxs("h3",{id:I.id,className:`${V} group flex items-center gap-3`,children:[I.content,B]},D);case 4:return b.jsxs("h4",{id:I.id,className:`${V} group flex items-center gap-3`,children:[I.content,B]},D);case 5:return b.jsxs("h5",{id:I.id,className:`${V} group flex items-center gap-3`,children:[I.content,B]},D);case 6:return b.jsxs("h6",{id:I.id,className:`${V} group flex items-center gap-3`,children:[I.content,B]},D);default:return null}};return b.jsx("div",{className:"space-y-4",onClick:C,children:T.map((M,I)=>{if(M.type==="space")return b.jsx("div",{className:"h-2"},I);if(M.type.startsWith("h")){const D=parseInt(M.type.substring(1));return U(D,M,I)}if(M.type==="hr")return b.jsx("hr",{className:"my-12 border-t border-slate-200"},I);if(M.type==="blockquote")return b.jsxs("div",{className:"my-6 pl-6 border-l-4 border-rose-500 bg-rose-50/30 py-4 pr-4 rounded-r-xl flex gap-4",children:[b.jsx(z0,{className:"text-rose-500 shrink-0",size:20}),b.jsx("p",{className:"text-slate-700 italic leading-relaxed",dangerouslySetInnerHTML:{__html:A(M.content)}})]},I);if(M.type==="task")return b.jsxs("div",{className:"flex items-start gap-3 my-3 ml-2",children:[b.jsx("div",{className:"shrink-0 mt-1",children:M.completed?b.jsx(nS,{className:"text-rose-500",size:18}):b.jsx(iS,{className:"text-slate-300",size:18})}),b.jsx("span",{className:`text-slate-600 leading-relaxed ${M.completed?"line-through text-slate-400":""}`,dangerouslySetInnerHTML:{__html:A(M.content)}})]},I);if(M.type==="ul")return b.jsx("ul",{className:"ml-6 list-disc space-y-2 my-4",children:M.items.map((D,V)=>b.jsx("li",{className:"text-slate-600 leading-relaxed pl-2",dangerouslySetInnerHTML:{__html:A(D.content)}},V))},I);if(M.type==="ol")return b.jsx("ol",{className:"ml-6 list-decimal space-y-2 my-4",children:M.items.map((D,V)=>b.jsx("li",{value:D.value,className:"text-slate-600 leading-relaxed pl-2",dangerouslySetInnerHTML:{__html:A(D.content)}},V))},I);if(M.type==="table")return b.jsx("div",{className:"my-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm max-w-full",children:b.jsx("div",{className:"overflow-x-auto",children:b.jsxs("table",{className:"w-full text-left border-collapse min-w-[600px] md:min-w-full",children:[b.jsx("thead",{children:b.jsx("tr",{className:"bg-slate-50 border-b border-slate-200",children:M.content[0].map((D,V)=>b.jsx("th",{className:"px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500",children:D},V))})}),b.jsx("tbody",{className:"divide-y divide-slate-100",children:M.content.slice(1).map((D,V)=>b.jsx("tr",{className:"hover:bg-slate-50/50 transition-colors",children:D.map((B,X)=>b.jsx("td",{className:"px-6 py-4 text-sm text-slate-600",children:b.jsx("span",{dangerouslySetInnerHTML:{__html:A(B)}})},X))},V))})]})})},I);if(M.type==="code"){const D=M.content.split(`
`);return b.jsxs("div",{className:"relative group my-8 rounded-xl overflow-hidden border border-slate-800 shadow-2xl max-w-full",children:[b.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700",children:[b.jsxs("div",{className:"flex items-center gap-4",children:[b.jsxs("div",{className:"flex gap-1.5",children:[b.jsx("div",{className:"w-3 h-3 rounded-full bg-rose-500/50"}),b.jsx("div",{className:"w-3 h-3 rounded-full bg-amber-500/50"}),b.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-500/50"})]}),M.language&&b.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest text-slate-500",children:M.language})]}),b.jsx("button",{onClick:()=>g(M.content,I),className:"flex items-center gap-1.5 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors",children:a===I?b.jsxs(b.Fragment,{children:[b.jsx(hu,{size:12,className:"text-emerald-400"}),b.jsx("span",{className:"text-emerald-400",children:"Copied"})]}):b.jsxs(b.Fragment,{children:[b.jsx(D0,{size:12}),b.jsx("span",{children:"Copy Code"})]})})]}),b.jsx("div",{className:"bg-slate-900 overflow-x-auto",children:b.jsxs("pre",{className:"font-mono text-sm leading-6 py-4 flex min-w-full",children:[b.jsx("div",{className:"select-none text-right pr-4 pl-4 border-r border-slate-800 text-slate-600 bg-slate-900/50 sticky left-0 min-w-[3rem]",children:D.map((V,B)=>b.jsx("div",{className:"h-6",children:B+1},B))}),b.jsx("div",{className:"pl-4 pr-8 text-slate-300 min-w-full whitespace-pre",children:D.map((V,B)=>b.jsx("div",{className:"h-6 flex items-center",children:b.jsx("span",{className:"inline-block",children:V||" "})},B))})]})})]},I)}return M.type==="p"?b.jsx("p",{className:"text-slate-600 leading-relaxed text-lg break-words",dangerouslySetInnerHTML:{__html:A(M.content)}},I):null})})};var yS={};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let vS,SS;function TS(){return{geminiUrl:vS,vertexUrl:SS}}function CS(o,t,s,a){var r,d;if(!(o!=null&&o.baseUrl)){const m=TS();return t?(r=m.vertexUrl)!==null&&r!==void 0?r:s:(d=m.geminiUrl)!==null&&d!==void 0?d:a}return o.baseUrl}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class gn{}function $(o,t){const s=/\{([^}]+)\}/g;return o.replace(s,(a,r)=>{if(Object.prototype.hasOwnProperty.call(t,r)){const d=t[r];return d!=null?String(d):""}else throw new Error(`Key '${r}' not found in valueMap.`)})}function c(o,t,s){for(let d=0;d<t.length-1;d++){const m=t[d];if(m.endsWith("[]")){const g=m.slice(0,-2);if(!(g in o))if(Array.isArray(s))o[g]=Array.from({length:s.length},()=>({}));else throw new Error(`Value must be a list given an array path ${m}`);if(Array.isArray(o[g])){const y=o[g];if(Array.isArray(s))for(let h=0;h<y.length;h++){const v=y[h];c(v,t.slice(d+1),s[h])}else for(const h of y)c(h,t.slice(d+1),s)}return}else if(m.endsWith("[0]")){const g=m.slice(0,-3);g in o||(o[g]=[{}]);const y=o[g];c(y[0],t.slice(d+1),s);return}(!o[m]||typeof o[m]!="object")&&(o[m]={}),o=o[m]}const a=t[t.length-1],r=o[a];if(r!==void 0){if(!s||typeof s=="object"&&Object.keys(s).length===0||s===r)return;if(typeof r=="object"&&typeof s=="object"&&r!==null&&s!==null)Object.assign(r,s);else throw new Error(`Cannot set value for an existing key. Key: ${a}`)}else a==="_self"&&typeof s=="object"&&s!==null&&!Array.isArray(s)?Object.assign(o,s):o[a]=s}function u(o,t,s=void 0){try{if(t.length===1&&t[0]==="_self")return o;for(let a=0;a<t.length;a++){if(typeof o!="object"||o===null)return s;const r=t[a];if(r.endsWith("[]")){const d=r.slice(0,-2);if(d in o){const m=o[d];return Array.isArray(m)?m.map(g=>u(g,t.slice(a+1),s)):s}else return s}else o=o[r]}return o}catch(a){if(a instanceof TypeError)return s;throw a}}function ES(o,t){for(const[s,a]of Object.entries(t)){const r=s.split("."),d=a.split("."),m=new Set;let g=-1;for(let y=0;y<r.length;y++)if(r[y]==="*"){g=y;break}if(g!==-1&&d.length>g)for(let y=g;y<d.length;y++){const h=d[y];h!=="*"&&!h.endsWith("[]")&&!h.endsWith("[0]")&&m.add(h)}vu(o,r,d,0,m)}}function vu(o,t,s,a,r){if(a>=t.length||typeof o!="object"||o===null)return;const d=t[a];if(d.endsWith("[]")){const m=d.slice(0,-2),g=o;if(m in g&&Array.isArray(g[m]))for(const y of g[m])vu(y,t,s,a+1,r)}else if(d==="*"){if(typeof o=="object"&&o!==null&&!Array.isArray(o)){const m=o,g=Object.keys(m).filter(h=>!h.startsWith("_")&&!r.has(h)),y={};for(const h of g)y[h]=m[h];for(const[h,v]of Object.entries(y)){const T=[];for(const C of s.slice(a))C==="*"?T.push(h):T.push(C);c(m,T,v)}for(const h of g)delete m[h]}}else{const m=o;d in m&&vu(m[d],t,s,a+1,r)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Du(o){if(typeof o!="string")throw new Error("fromImageBytes must be a string");return o}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function AS(o){const t={},s=u(o,["operationName"]);s!=null&&c(t,["operationName"],s);const a=u(o,["resourceName"]);return a!=null&&c(t,["_url","resourceName"],a),t}function _S(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["metadata"]);a!=null&&c(t,["metadata"],a);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["response","generateVideoResponse"]);return m!=null&&c(t,["response"],wS(m)),t}function bS(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["metadata"]);a!=null&&c(t,["metadata"],a);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["response"]);return m!=null&&c(t,["response"],RS(m)),t}function wS(o){const t={},s=u(o,["generatedSamples"]);if(s!=null){let d=s;Array.isArray(d)&&(d=d.map(m=>xS(m))),c(t,["generatedVideos"],d)}const a=u(o,["raiMediaFilteredCount"]);a!=null&&c(t,["raiMediaFilteredCount"],a);const r=u(o,["raiMediaFilteredReasons"]);return r!=null&&c(t,["raiMediaFilteredReasons"],r),t}function RS(o){const t={},s=u(o,["videos"]);if(s!=null){let d=s;Array.isArray(d)&&(d=d.map(m=>IS(m))),c(t,["generatedVideos"],d)}const a=u(o,["raiMediaFilteredCount"]);a!=null&&c(t,["raiMediaFilteredCount"],a);const r=u(o,["raiMediaFilteredReasons"]);return r!=null&&c(t,["raiMediaFilteredReasons"],r),t}function xS(o){const t={},s=u(o,["video"]);return s!=null&&c(t,["video"],US(s)),t}function IS(o){const t={},s=u(o,["_self"]);return s!=null&&c(t,["video"],LS(s)),t}function MS(o){const t={},s=u(o,["operationName"]);return s!=null&&c(t,["_url","operationName"],s),t}function NS(o){const t={},s=u(o,["operationName"]);return s!=null&&c(t,["_url","operationName"],s),t}function PS(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["metadata"]);a!=null&&c(t,["metadata"],a);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["response"]);return m!=null&&c(t,["response"],DS(m)),t}function DS(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["parent"]);a!=null&&c(t,["parent"],a);const r=u(o,["documentName"]);return r!=null&&c(t,["documentName"],r),t}function zh(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["metadata"]);a!=null&&c(t,["metadata"],a);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["response"]);return m!=null&&c(t,["response"],kS(m)),t}function kS(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["parent"]);a!=null&&c(t,["parent"],a);const r=u(o,["documentName"]);return r!=null&&c(t,["documentName"],r),t}function US(o){const t={},s=u(o,["uri"]);s!=null&&c(t,["uri"],s);const a=u(o,["encodedVideo"]);a!=null&&c(t,["videoBytes"],Du(a));const r=u(o,["encoding"]);return r!=null&&c(t,["mimeType"],r),t}function LS(o){const t={},s=u(o,["gcsUri"]);s!=null&&c(t,["uri"],s);const a=u(o,["bytesBase64Encoded"]);a!=null&&c(t,["videoBytes"],Du(a));const r=u(o,["mimeType"]);return r!=null&&c(t,["mimeType"],r),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var am;(function(o){o.OUTCOME_UNSPECIFIED="OUTCOME_UNSPECIFIED",o.OUTCOME_OK="OUTCOME_OK",o.OUTCOME_FAILED="OUTCOME_FAILED",o.OUTCOME_DEADLINE_EXCEEDED="OUTCOME_DEADLINE_EXCEEDED"})(am||(am={}));var lm;(function(o){o.LANGUAGE_UNSPECIFIED="LANGUAGE_UNSPECIFIED",o.PYTHON="PYTHON"})(lm||(lm={}));var rm;(function(o){o.SCHEDULING_UNSPECIFIED="SCHEDULING_UNSPECIFIED",o.SILENT="SILENT",o.WHEN_IDLE="WHEN_IDLE",o.INTERRUPT="INTERRUPT"})(rm||(rm={}));var Vn;(function(o){o.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",o.STRING="STRING",o.NUMBER="NUMBER",o.INTEGER="INTEGER",o.BOOLEAN="BOOLEAN",o.ARRAY="ARRAY",o.OBJECT="OBJECT",o.NULL="NULL"})(Vn||(Vn={}));var um;(function(o){o.MODE_UNSPECIFIED="MODE_UNSPECIFIED",o.MODE_DYNAMIC="MODE_DYNAMIC"})(um||(um={}));var cm;(function(o){o.API_SPEC_UNSPECIFIED="API_SPEC_UNSPECIFIED",o.SIMPLE_SEARCH="SIMPLE_SEARCH",o.ELASTIC_SEARCH="ELASTIC_SEARCH"})(cm||(cm={}));var dm;(function(o){o.AUTH_TYPE_UNSPECIFIED="AUTH_TYPE_UNSPECIFIED",o.NO_AUTH="NO_AUTH",o.API_KEY_AUTH="API_KEY_AUTH",o.HTTP_BASIC_AUTH="HTTP_BASIC_AUTH",o.GOOGLE_SERVICE_ACCOUNT_AUTH="GOOGLE_SERVICE_ACCOUNT_AUTH",o.OAUTH="OAUTH",o.OIDC_AUTH="OIDC_AUTH"})(dm||(dm={}));var fm;(function(o){o.HTTP_IN_UNSPECIFIED="HTTP_IN_UNSPECIFIED",o.HTTP_IN_QUERY="HTTP_IN_QUERY",o.HTTP_IN_HEADER="HTTP_IN_HEADER",o.HTTP_IN_PATH="HTTP_IN_PATH",o.HTTP_IN_BODY="HTTP_IN_BODY",o.HTTP_IN_COOKIE="HTTP_IN_COOKIE"})(fm||(fm={}));var pm;(function(o){o.PHISH_BLOCK_THRESHOLD_UNSPECIFIED="PHISH_BLOCK_THRESHOLD_UNSPECIFIED",o.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",o.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",o.BLOCK_HIGH_AND_ABOVE="BLOCK_HIGH_AND_ABOVE",o.BLOCK_HIGHER_AND_ABOVE="BLOCK_HIGHER_AND_ABOVE",o.BLOCK_VERY_HIGH_AND_ABOVE="BLOCK_VERY_HIGH_AND_ABOVE",o.BLOCK_ONLY_EXTREMELY_HIGH="BLOCK_ONLY_EXTREMELY_HIGH"})(pm||(pm={}));var mm;(function(o){o.THINKING_LEVEL_UNSPECIFIED="THINKING_LEVEL_UNSPECIFIED",o.LOW="LOW",o.MEDIUM="MEDIUM",o.HIGH="HIGH",o.MINIMAL="MINIMAL"})(mm||(mm={}));var hm;(function(o){o.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",o.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",o.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",o.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",o.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",o.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY",o.HARM_CATEGORY_IMAGE_HATE="HARM_CATEGORY_IMAGE_HATE",o.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT="HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT",o.HARM_CATEGORY_IMAGE_HARASSMENT="HARM_CATEGORY_IMAGE_HARASSMENT",o.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT="HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT",o.HARM_CATEGORY_JAILBREAK="HARM_CATEGORY_JAILBREAK"})(hm||(hm={}));var gm;(function(o){o.HARM_BLOCK_METHOD_UNSPECIFIED="HARM_BLOCK_METHOD_UNSPECIFIED",o.SEVERITY="SEVERITY",o.PROBABILITY="PROBABILITY"})(gm||(gm={}));var ym;(function(o){o.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",o.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",o.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",o.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",o.BLOCK_NONE="BLOCK_NONE",o.OFF="OFF"})(ym||(ym={}));var vm;(function(o){o.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",o.STOP="STOP",o.MAX_TOKENS="MAX_TOKENS",o.SAFETY="SAFETY",o.RECITATION="RECITATION",o.LANGUAGE="LANGUAGE",o.OTHER="OTHER",o.BLOCKLIST="BLOCKLIST",o.PROHIBITED_CONTENT="PROHIBITED_CONTENT",o.SPII="SPII",o.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",o.IMAGE_SAFETY="IMAGE_SAFETY",o.UNEXPECTED_TOOL_CALL="UNEXPECTED_TOOL_CALL",o.IMAGE_PROHIBITED_CONTENT="IMAGE_PROHIBITED_CONTENT",o.NO_IMAGE="NO_IMAGE",o.IMAGE_RECITATION="IMAGE_RECITATION",o.IMAGE_OTHER="IMAGE_OTHER"})(vm||(vm={}));var Sm;(function(o){o.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",o.NEGLIGIBLE="NEGLIGIBLE",o.LOW="LOW",o.MEDIUM="MEDIUM",o.HIGH="HIGH"})(Sm||(Sm={}));var Tm;(function(o){o.HARM_SEVERITY_UNSPECIFIED="HARM_SEVERITY_UNSPECIFIED",o.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",o.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",o.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",o.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH"})(Tm||(Tm={}));var Cm;(function(o){o.URL_RETRIEVAL_STATUS_UNSPECIFIED="URL_RETRIEVAL_STATUS_UNSPECIFIED",o.URL_RETRIEVAL_STATUS_SUCCESS="URL_RETRIEVAL_STATUS_SUCCESS",o.URL_RETRIEVAL_STATUS_ERROR="URL_RETRIEVAL_STATUS_ERROR",o.URL_RETRIEVAL_STATUS_PAYWALL="URL_RETRIEVAL_STATUS_PAYWALL",o.URL_RETRIEVAL_STATUS_UNSAFE="URL_RETRIEVAL_STATUS_UNSAFE"})(Cm||(Cm={}));var Em;(function(o){o.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",o.SAFETY="SAFETY",o.OTHER="OTHER",o.BLOCKLIST="BLOCKLIST",o.PROHIBITED_CONTENT="PROHIBITED_CONTENT",o.IMAGE_SAFETY="IMAGE_SAFETY",o.MODEL_ARMOR="MODEL_ARMOR",o.JAILBREAK="JAILBREAK"})(Em||(Em={}));var Am;(function(o){o.TRAFFIC_TYPE_UNSPECIFIED="TRAFFIC_TYPE_UNSPECIFIED",o.ON_DEMAND="ON_DEMAND",o.PROVISIONED_THROUGHPUT="PROVISIONED_THROUGHPUT"})(Am||(Am={}));var Ma;(function(o){o.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",o.TEXT="TEXT",o.IMAGE="IMAGE",o.AUDIO="AUDIO"})(Ma||(Ma={}));var _m;(function(o){o.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",o.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",o.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",o.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH"})(_m||(_m={}));var bm;(function(o){o.TUNING_MODE_UNSPECIFIED="TUNING_MODE_UNSPECIFIED",o.TUNING_MODE_FULL="TUNING_MODE_FULL",o.TUNING_MODE_PEFT_ADAPTER="TUNING_MODE_PEFT_ADAPTER"})(bm||(bm={}));var wm;(function(o){o.ADAPTER_SIZE_UNSPECIFIED="ADAPTER_SIZE_UNSPECIFIED",o.ADAPTER_SIZE_ONE="ADAPTER_SIZE_ONE",o.ADAPTER_SIZE_TWO="ADAPTER_SIZE_TWO",o.ADAPTER_SIZE_FOUR="ADAPTER_SIZE_FOUR",o.ADAPTER_SIZE_EIGHT="ADAPTER_SIZE_EIGHT",o.ADAPTER_SIZE_SIXTEEN="ADAPTER_SIZE_SIXTEEN",o.ADAPTER_SIZE_THIRTY_TWO="ADAPTER_SIZE_THIRTY_TWO"})(wm||(wm={}));var Su;(function(o){o.JOB_STATE_UNSPECIFIED="JOB_STATE_UNSPECIFIED",o.JOB_STATE_QUEUED="JOB_STATE_QUEUED",o.JOB_STATE_PENDING="JOB_STATE_PENDING",o.JOB_STATE_RUNNING="JOB_STATE_RUNNING",o.JOB_STATE_SUCCEEDED="JOB_STATE_SUCCEEDED",o.JOB_STATE_FAILED="JOB_STATE_FAILED",o.JOB_STATE_CANCELLING="JOB_STATE_CANCELLING",o.JOB_STATE_CANCELLED="JOB_STATE_CANCELLED",o.JOB_STATE_PAUSED="JOB_STATE_PAUSED",o.JOB_STATE_EXPIRED="JOB_STATE_EXPIRED",o.JOB_STATE_UPDATING="JOB_STATE_UPDATING",o.JOB_STATE_PARTIALLY_SUCCEEDED="JOB_STATE_PARTIALLY_SUCCEEDED"})(Su||(Su={}));var Rm;(function(o){o.TUNING_TASK_UNSPECIFIED="TUNING_TASK_UNSPECIFIED",o.TUNING_TASK_I2V="TUNING_TASK_I2V",o.TUNING_TASK_T2V="TUNING_TASK_T2V",o.TUNING_TASK_R2V="TUNING_TASK_R2V"})(Rm||(Rm={}));var xm;(function(o){o.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",o.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",o.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",o.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH",o.MEDIA_RESOLUTION_ULTRA_HIGH="MEDIA_RESOLUTION_ULTRA_HIGH"})(xm||(xm={}));var Im;(function(o){o.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED="FEATURE_SELECTION_PREFERENCE_UNSPECIFIED",o.PRIORITIZE_QUALITY="PRIORITIZE_QUALITY",o.BALANCED="BALANCED",o.PRIORITIZE_COST="PRIORITIZE_COST"})(Im||(Im={}));var Mm;(function(o){o.UNSPECIFIED="UNSPECIFIED",o.BLOCKING="BLOCKING",o.NON_BLOCKING="NON_BLOCKING"})(Mm||(Mm={}));var Nm;(function(o){o.MODE_UNSPECIFIED="MODE_UNSPECIFIED",o.MODE_DYNAMIC="MODE_DYNAMIC"})(Nm||(Nm={}));var Pm;(function(o){o.ENVIRONMENT_UNSPECIFIED="ENVIRONMENT_UNSPECIFIED",o.ENVIRONMENT_BROWSER="ENVIRONMENT_BROWSER"})(Pm||(Pm={}));var Dm;(function(o){o.MODE_UNSPECIFIED="MODE_UNSPECIFIED",o.AUTO="AUTO",o.ANY="ANY",o.NONE="NONE",o.VALIDATED="VALIDATED"})(Dm||(Dm={}));var km;(function(o){o.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",o.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",o.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",o.BLOCK_NONE="BLOCK_NONE"})(km||(km={}));var Um;(function(o){o.DONT_ALLOW="DONT_ALLOW",o.ALLOW_ADULT="ALLOW_ADULT",o.ALLOW_ALL="ALLOW_ALL"})(Um||(Um={}));var Lm;(function(o){o.auto="auto",o.en="en",o.ja="ja",o.ko="ko",o.hi="hi",o.zh="zh",o.pt="pt",o.es="es"})(Lm||(Lm={}));var Gm;(function(o){o.MASK_MODE_DEFAULT="MASK_MODE_DEFAULT",o.MASK_MODE_USER_PROVIDED="MASK_MODE_USER_PROVIDED",o.MASK_MODE_BACKGROUND="MASK_MODE_BACKGROUND",o.MASK_MODE_FOREGROUND="MASK_MODE_FOREGROUND",o.MASK_MODE_SEMANTIC="MASK_MODE_SEMANTIC"})(Gm||(Gm={}));var Hm;(function(o){o.CONTROL_TYPE_DEFAULT="CONTROL_TYPE_DEFAULT",o.CONTROL_TYPE_CANNY="CONTROL_TYPE_CANNY",o.CONTROL_TYPE_SCRIBBLE="CONTROL_TYPE_SCRIBBLE",o.CONTROL_TYPE_FACE_MESH="CONTROL_TYPE_FACE_MESH"})(Hm||(Hm={}));var Bm;(function(o){o.SUBJECT_TYPE_DEFAULT="SUBJECT_TYPE_DEFAULT",o.SUBJECT_TYPE_PERSON="SUBJECT_TYPE_PERSON",o.SUBJECT_TYPE_ANIMAL="SUBJECT_TYPE_ANIMAL",o.SUBJECT_TYPE_PRODUCT="SUBJECT_TYPE_PRODUCT"})(Bm||(Bm={}));var Om;(function(o){o.EDIT_MODE_DEFAULT="EDIT_MODE_DEFAULT",o.EDIT_MODE_INPAINT_REMOVAL="EDIT_MODE_INPAINT_REMOVAL",o.EDIT_MODE_INPAINT_INSERTION="EDIT_MODE_INPAINT_INSERTION",o.EDIT_MODE_OUTPAINT="EDIT_MODE_OUTPAINT",o.EDIT_MODE_CONTROLLED_EDITING="EDIT_MODE_CONTROLLED_EDITING",o.EDIT_MODE_STYLE="EDIT_MODE_STYLE",o.EDIT_MODE_BGSWAP="EDIT_MODE_BGSWAP",o.EDIT_MODE_PRODUCT_IMAGE="EDIT_MODE_PRODUCT_IMAGE"})(Om||(Om={}));var Fm;(function(o){o.FOREGROUND="FOREGROUND",o.BACKGROUND="BACKGROUND",o.PROMPT="PROMPT",o.SEMANTIC="SEMANTIC",o.INTERACTIVE="INTERACTIVE"})(Fm||(Fm={}));var qm;(function(o){o.ASSET="ASSET",o.STYLE="STYLE"})(qm||(qm={}));var Vm;(function(o){o.INSERT="INSERT",o.REMOVE="REMOVE",o.REMOVE_STATIC="REMOVE_STATIC",o.OUTPAINT="OUTPAINT"})(Vm||(Vm={}));var zm;(function(o){o.OPTIMIZED="OPTIMIZED",o.LOSSLESS="LOSSLESS"})(zm||(zm={}));var Ym;(function(o){o.SUPERVISED_FINE_TUNING="SUPERVISED_FINE_TUNING",o.PREFERENCE_TUNING="PREFERENCE_TUNING"})(Ym||(Ym={}));var Jm;(function(o){o.STATE_UNSPECIFIED="STATE_UNSPECIFIED",o.STATE_PENDING="STATE_PENDING",o.STATE_ACTIVE="STATE_ACTIVE",o.STATE_FAILED="STATE_FAILED"})(Jm||(Jm={}));var Km;(function(o){o.STATE_UNSPECIFIED="STATE_UNSPECIFIED",o.PROCESSING="PROCESSING",o.ACTIVE="ACTIVE",o.FAILED="FAILED"})(Km||(Km={}));var Xm;(function(o){o.SOURCE_UNSPECIFIED="SOURCE_UNSPECIFIED",o.UPLOADED="UPLOADED",o.GENERATED="GENERATED"})(Xm||(Xm={}));var Qm;(function(o){o.TURN_COMPLETE_REASON_UNSPECIFIED="TURN_COMPLETE_REASON_UNSPECIFIED",o.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",o.RESPONSE_REJECTED="RESPONSE_REJECTED",o.NEED_MORE_INPUT="NEED_MORE_INPUT"})(Qm||(Qm={}));var Wm;(function(o){o.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",o.TEXT="TEXT",o.IMAGE="IMAGE",o.VIDEO="VIDEO",o.AUDIO="AUDIO",o.DOCUMENT="DOCUMENT"})(Wm||(Wm={}));var $m;(function(o){o.VAD_SIGNAL_TYPE_UNSPECIFIED="VAD_SIGNAL_TYPE_UNSPECIFIED",o.VAD_SIGNAL_TYPE_SOS="VAD_SIGNAL_TYPE_SOS",o.VAD_SIGNAL_TYPE_EOS="VAD_SIGNAL_TYPE_EOS"})($m||($m={}));var Zm;(function(o){o.START_SENSITIVITY_UNSPECIFIED="START_SENSITIVITY_UNSPECIFIED",o.START_SENSITIVITY_HIGH="START_SENSITIVITY_HIGH",o.START_SENSITIVITY_LOW="START_SENSITIVITY_LOW"})(Zm||(Zm={}));var jm;(function(o){o.END_SENSITIVITY_UNSPECIFIED="END_SENSITIVITY_UNSPECIFIED",o.END_SENSITIVITY_HIGH="END_SENSITIVITY_HIGH",o.END_SENSITIVITY_LOW="END_SENSITIVITY_LOW"})(jm||(jm={}));var eh;(function(o){o.ACTIVITY_HANDLING_UNSPECIFIED="ACTIVITY_HANDLING_UNSPECIFIED",o.START_OF_ACTIVITY_INTERRUPTS="START_OF_ACTIVITY_INTERRUPTS",o.NO_INTERRUPTION="NO_INTERRUPTION"})(eh||(eh={}));var th;(function(o){o.TURN_COVERAGE_UNSPECIFIED="TURN_COVERAGE_UNSPECIFIED",o.TURN_INCLUDES_ONLY_ACTIVITY="TURN_INCLUDES_ONLY_ACTIVITY",o.TURN_INCLUDES_ALL_INPUT="TURN_INCLUDES_ALL_INPUT"})(th||(th={}));var nh;(function(o){o.SCALE_UNSPECIFIED="SCALE_UNSPECIFIED",o.C_MAJOR_A_MINOR="C_MAJOR_A_MINOR",o.D_FLAT_MAJOR_B_FLAT_MINOR="D_FLAT_MAJOR_B_FLAT_MINOR",o.D_MAJOR_B_MINOR="D_MAJOR_B_MINOR",o.E_FLAT_MAJOR_C_MINOR="E_FLAT_MAJOR_C_MINOR",o.E_MAJOR_D_FLAT_MINOR="E_MAJOR_D_FLAT_MINOR",o.F_MAJOR_D_MINOR="F_MAJOR_D_MINOR",o.G_FLAT_MAJOR_E_FLAT_MINOR="G_FLAT_MAJOR_E_FLAT_MINOR",o.G_MAJOR_E_MINOR="G_MAJOR_E_MINOR",o.A_FLAT_MAJOR_F_MINOR="A_FLAT_MAJOR_F_MINOR",o.A_MAJOR_G_FLAT_MINOR="A_MAJOR_G_FLAT_MINOR",o.B_FLAT_MAJOR_G_MINOR="B_FLAT_MAJOR_G_MINOR",o.B_MAJOR_A_FLAT_MINOR="B_MAJOR_A_FLAT_MINOR"})(nh||(nh={}));var oh;(function(o){o.MUSIC_GENERATION_MODE_UNSPECIFIED="MUSIC_GENERATION_MODE_UNSPECIFIED",o.QUALITY="QUALITY",o.DIVERSITY="DIVERSITY",o.VOCALIZATION="VOCALIZATION"})(oh||(oh={}));var Zo;(function(o){o.PLAYBACK_CONTROL_UNSPECIFIED="PLAYBACK_CONTROL_UNSPECIFIED",o.PLAY="PLAY",o.PAUSE="PAUSE",o.STOP="STOP",o.RESET_CONTEXT="RESET_CONTEXT"})(Zo||(Zo={}));class Tu{constructor(t){const s={};for(const a of t.headers.entries())s[a[0]]=a[1];this.headers=s,this.responseInternal=t}json(){return this.responseInternal.json()}}class es{get text(){var t,s,a,r,d,m,g,y;if(((r=(a=(s=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||s===void 0?void 0:s.content)===null||a===void 0?void 0:a.parts)===null||r===void 0?void 0:r.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning text from the first one.");let h="",v=!1;const T=[];for(const C of(y=(g=(m=(d=this.candidates)===null||d===void 0?void 0:d[0])===null||m===void 0?void 0:m.content)===null||g===void 0?void 0:g.parts)!==null&&y!==void 0?y:[]){for(const[A,U]of Object.entries(C))A!=="text"&&A!=="thought"&&A!=="thoughtSignature"&&(U!==null||U!==void 0)&&T.push(A);if(typeof C.text=="string"){if(typeof C.thought=="boolean"&&C.thought)continue;v=!0,h+=C.text}}return T.length>0&&console.warn(`there are non-text parts ${T} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),v?h:void 0}get data(){var t,s,a,r,d,m,g,y;if(((r=(a=(s=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||s===void 0?void 0:s.content)===null||a===void 0?void 0:a.parts)===null||r===void 0?void 0:r.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning data from the first one.");let h="";const v=[];for(const T of(y=(g=(m=(d=this.candidates)===null||d===void 0?void 0:d[0])===null||m===void 0?void 0:m.content)===null||g===void 0?void 0:g.parts)!==null&&y!==void 0?y:[]){for(const[C,A]of Object.entries(T))C!=="inlineData"&&(A!==null||A!==void 0)&&v.push(C);T.inlineData&&typeof T.inlineData.data=="string"&&(h+=atob(T.inlineData.data))}return v.length>0&&console.warn(`there are non-data parts ${v} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),h.length>0?btoa(h):void 0}get functionCalls(){var t,s,a,r,d,m,g,y;if(((r=(a=(s=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||s===void 0?void 0:s.content)===null||a===void 0?void 0:a.parts)===null||r===void 0?void 0:r.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning function calls from the first one.");const h=(y=(g=(m=(d=this.candidates)===null||d===void 0?void 0:d[0])===null||m===void 0?void 0:m.content)===null||g===void 0?void 0:g.parts)===null||y===void 0?void 0:y.filter(v=>v.functionCall).map(v=>v.functionCall).filter(v=>v!==void 0);if((h==null?void 0:h.length)!==0)return h}get executableCode(){var t,s,a,r,d,m,g,y,h;if(((r=(a=(s=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||s===void 0?void 0:s.content)===null||a===void 0?void 0:a.parts)===null||r===void 0?void 0:r.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning executable code from the first one.");const v=(y=(g=(m=(d=this.candidates)===null||d===void 0?void 0:d[0])===null||m===void 0?void 0:m.content)===null||g===void 0?void 0:g.parts)===null||y===void 0?void 0:y.filter(T=>T.executableCode).map(T=>T.executableCode).filter(T=>T!==void 0);if((v==null?void 0:v.length)!==0)return(h=v==null?void 0:v[0])===null||h===void 0?void 0:h.code}get codeExecutionResult(){var t,s,a,r,d,m,g,y,h;if(((r=(a=(s=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||s===void 0?void 0:s.content)===null||a===void 0?void 0:a.parts)===null||r===void 0?void 0:r.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning code execution result from the first one.");const v=(y=(g=(m=(d=this.candidates)===null||d===void 0?void 0:d[0])===null||m===void 0?void 0:m.content)===null||g===void 0?void 0:g.parts)===null||y===void 0?void 0:y.filter(T=>T.codeExecutionResult).map(T=>T.codeExecutionResult).filter(T=>T!==void 0);if((v==null?void 0:v.length)!==0)return(h=v==null?void 0:v[0])===null||h===void 0?void 0:h.output}}class ih{}class sh{}class GS{}class HS{}class BS{}class OS{}class ah{}class lh{}class rh{}class FS{}class Na{_fromAPIResponse({apiResponse:t,_isVertexAI:s}){const a=new Na;let r;const d=t;return s?r=bS(d):r=_S(d),Object.assign(a,r),a}}class uh{}class ch{}class dh{}class fh{}class qS{}class VS{}class zS{}class ku{_fromAPIResponse({apiResponse:t,_isVertexAI:s}){const a=new ku,d=PS(t);return Object.assign(a,d),a}}class YS{}class JS{}class KS{}class ph{}class XS{get text(){var t,s,a;let r="",d=!1;const m=[];for(const g of(a=(s=(t=this.serverContent)===null||t===void 0?void 0:t.modelTurn)===null||s===void 0?void 0:s.parts)!==null&&a!==void 0?a:[]){for(const[y,h]of Object.entries(g))y!=="text"&&y!=="thought"&&h!==null&&m.push(y);if(typeof g.text=="string"){if(typeof g.thought=="boolean"&&g.thought)continue;d=!0,r+=g.text}}return m.length>0&&console.warn(`there are non-text parts ${m} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),d?r:void 0}get data(){var t,s,a;let r="";const d=[];for(const m of(a=(s=(t=this.serverContent)===null||t===void 0?void 0:t.modelTurn)===null||s===void 0?void 0:s.parts)!==null&&a!==void 0?a:[]){for(const[g,y]of Object.entries(m))g!=="inlineData"&&y!==null&&d.push(g);m.inlineData&&typeof m.inlineData.data=="string"&&(r+=atob(m.inlineData.data))}return d.length>0&&console.warn(`there are non-data parts ${d} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),r.length>0?btoa(r):void 0}}class QS{get audioChunk(){if(this.serverContent&&this.serverContent.audioChunks&&this.serverContent.audioChunks.length>0)return this.serverContent.audioChunks[0]}}class Uu{_fromAPIResponse({apiResponse:t,_isVertexAI:s}){const a=new Uu,d=zh(t);return Object.assign(a,d),a}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ae(o,t){if(!t||typeof t!="string")throw new Error("model is required and must be a string");if(t.includes("..")||t.includes("?")||t.includes("&"))throw new Error("invalid model parameter");if(o.isVertexAI()){if(t.startsWith("publishers/")||t.startsWith("projects/")||t.startsWith("models/"))return t;if(t.indexOf("/")>=0){const s=t.split("/",2);return`publishers/${s[0]}/models/${s[1]}`}else return`publishers/google/models/${t}`}else return t.startsWith("models/")||t.startsWith("tunedModels/")?t:`models/${t}`}function Yh(o,t){const s=Ae(o,t);return s?s.startsWith("publishers/")&&o.isVertexAI()?`projects/${o.getProject()}/locations/${o.getLocation()}/${s}`:s.startsWith("models/")&&o.isVertexAI()?`projects/${o.getProject()}/locations/${o.getLocation()}/publishers/google/${s}`:s:""}function Jh(o){return Array.isArray(o)?o.map(t=>Pa(t)):[Pa(o)]}function Pa(o){if(typeof o=="object"&&o!==null)return o;throw new Error(`Could not parse input as Blob. Unsupported blob type: ${typeof o}`)}function Kh(o){const t=Pa(o);if(t.mimeType&&t.mimeType.startsWith("image/"))return t;throw new Error(`Unsupported mime type: ${t.mimeType}`)}function Xh(o){const t=Pa(o);if(t.mimeType&&t.mimeType.startsWith("audio/"))return t;throw new Error(`Unsupported mime type: ${t.mimeType}`)}function mh(o){if(o==null)throw new Error("PartUnion is required");if(typeof o=="object")return o;if(typeof o=="string")return{text:o};throw new Error(`Unsupported part type: ${typeof o}`)}function Qh(o){if(o==null||Array.isArray(o)&&o.length===0)throw new Error("PartListUnion is required");return Array.isArray(o)?o.map(t=>mh(t)):[mh(o)]}function Cu(o){return o!=null&&typeof o=="object"&&"parts"in o&&Array.isArray(o.parts)}function hh(o){return o!=null&&typeof o=="object"&&"functionCall"in o}function gh(o){return o!=null&&typeof o=="object"&&"functionResponse"in o}function st(o){if(o==null)throw new Error("ContentUnion is required");return Cu(o)?o:{role:"user",parts:Qh(o)}}function Lu(o,t){if(!t)return[];if(o.isVertexAI()&&Array.isArray(t))return t.flatMap(s=>{const a=st(s);return a.parts&&a.parts.length>0&&a.parts[0].text!==void 0?[a.parts[0].text]:[]});if(o.isVertexAI()){const s=st(t);return s.parts&&s.parts.length>0&&s.parts[0].text!==void 0?[s.parts[0].text]:[]}return Array.isArray(t)?t.map(s=>st(s)):[st(t)]}function Gt(o){if(o==null||Array.isArray(o)&&o.length===0)throw new Error("contents are required");if(!Array.isArray(o)){if(hh(o)||gh(o))throw new Error("To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them");return[st(o)]}const t=[],s=[],a=Cu(o[0]);for(const r of o){const d=Cu(r);if(d!=a)throw new Error("Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them");if(d)t.push(r);else{if(hh(r)||gh(r))throw new Error("To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them");s.push(r)}}return a||t.push({role:"user",parts:Qh(s)}),t}function WS(o,t){o.includes("null")&&(t.nullable=!0);const s=o.filter(a=>a!=="null");if(s.length===1)t.type=Object.values(Vn).includes(s[0].toUpperCase())?s[0].toUpperCase():Vn.TYPE_UNSPECIFIED;else{t.anyOf=[];for(const a of s)t.anyOf.push({type:Object.values(Vn).includes(a.toUpperCase())?a.toUpperCase():Vn.TYPE_UNSPECIFIED})}}function ei(o){const t={},s=["items"],a=["anyOf"],r=["properties"];if(o.type&&o.anyOf)throw new Error("type and anyOf cannot be both populated.");const d=o.anyOf;d!=null&&d.length==2&&(d[0].type==="null"?(t.nullable=!0,o=d[1]):d[1].type==="null"&&(t.nullable=!0,o=d[0])),o.type instanceof Array&&WS(o.type,t);for(const[m,g]of Object.entries(o))if(g!=null)if(m=="type"){if(g==="null")throw new Error("type: null can not be the only possible type for the field.");if(g instanceof Array)continue;t.type=Object.values(Vn).includes(g.toUpperCase())?g.toUpperCase():Vn.TYPE_UNSPECIFIED}else if(s.includes(m))t[m]=ei(g);else if(a.includes(m)){const y=[];for(const h of g){if(h.type=="null"){t.nullable=!0;continue}y.push(ei(h))}t[m]=y}else if(r.includes(m)){const y={};for(const[h,v]of Object.entries(g))y[h]=ei(v);t[m]=y}else{if(m==="additionalProperties")continue;t[m]=g}return t}function Gu(o){return ei(o)}function Hu(o){if(typeof o=="object")return o;if(typeof o=="string")return{voiceConfig:{prebuiltVoiceConfig:{voiceName:o}}};throw new Error(`Unsupported speechConfig type: ${typeof o}`)}function Bu(o){if("multiSpeakerVoiceConfig"in o)throw new Error("multiSpeakerVoiceConfig is not supported in the live API.");return o}function ni(o){if(o.functionDeclarations)for(const t of o.functionDeclarations)t.parameters&&(Object.keys(t.parameters).includes("$schema")?t.parametersJsonSchema||(t.parametersJsonSchema=t.parameters,delete t.parameters):t.parameters=ei(t.parameters)),t.response&&(Object.keys(t.response).includes("$schema")?t.responseJsonSchema||(t.responseJsonSchema=t.response,delete t.response):t.response=ei(t.response));return o}function oi(o){if(o==null)throw new Error("tools is required");if(!Array.isArray(o))throw new Error("tools is required and must be an array of Tools");const t=[];for(const s of o)t.push(s);return t}function $S(o,t,s,a=1){const r=!t.startsWith(`${s}/`)&&t.split("/").length===a;return o.isVertexAI()?t.startsWith("projects/")?t:t.startsWith("locations/")?`projects/${o.getProject()}/${t}`:t.startsWith(`${s}/`)?`projects/${o.getProject()}/locations/${o.getLocation()}/${t}`:r?`projects/${o.getProject()}/locations/${o.getLocation()}/${s}/${t}`:t:r?`${s}/${t}`:t}function yn(o,t){if(typeof t!="string")throw new Error("name must be a string");return $S(o,t,"cachedContents")}function Wh(o){switch(o){case"STATE_UNSPECIFIED":return"JOB_STATE_UNSPECIFIED";case"CREATING":return"JOB_STATE_RUNNING";case"ACTIVE":return"JOB_STATE_SUCCEEDED";case"FAILED":return"JOB_STATE_FAILED";default:return o}}function zn(o){return Du(o)}function ZS(o){return o!=null&&typeof o=="object"&&"name"in o}function jS(o){return o!=null&&typeof o=="object"&&"video"in o}function eT(o){return o!=null&&typeof o=="object"&&"uri"in o}function $h(o){var t;let s;if(ZS(o)&&(s=o.name),!(eT(o)&&(s=o.uri,s===void 0))&&!(jS(o)&&(s=(t=o.video)===null||t===void 0?void 0:t.uri,s===void 0))){if(typeof o=="string"&&(s=o),s===void 0)throw new Error("Could not extract file name from the provided input.");if(s.startsWith("https://")){const r=s.split("files/")[1].match(/[a-z0-9]+/);if(r===null)throw new Error(`Could not extract file name from URI ${s}`);s=r[0]}else s.startsWith("files/")&&(s=s.split("files/")[1]);return s}}function Zh(o,t){let s;return o.isVertexAI()?s=t?"publishers/google/models":"models":s=t?"models":"tunedModels",s}function jh(o){for(const t of["models","tunedModels","publisherModels"])if(tT(o,t))return o[t];return[]}function tT(o,t){return o!==null&&typeof o=="object"&&t in o}function nT(o,t={}){const s=o,a={name:s.name,description:s.description,parametersJsonSchema:s.inputSchema};return s.outputSchema&&(a.responseJsonSchema=s.outputSchema),t.behavior&&(a.behavior=t.behavior),{functionDeclarations:[a]}}function oT(o,t={}){const s=[],a=new Set;for(const r of o){const d=r.name;if(a.has(d))throw new Error(`Duplicate function name ${d} found in MCP tools. Please ensure function names are unique.`);a.add(d);const m=nT(r,t);m.functionDeclarations&&s.push(...m.functionDeclarations)}return{functionDeclarations:s}}function eg(o,t){let s;if(typeof t=="string")if(o.isVertexAI())if(t.startsWith("gs://"))s={format:"jsonl",gcsUri:[t]};else if(t.startsWith("bq://"))s={format:"bigquery",bigqueryUri:t};else throw new Error(`Unsupported string source for Vertex AI: ${t}`);else if(t.startsWith("files/"))s={fileName:t};else throw new Error(`Unsupported string source for Gemini API: ${t}`);else if(Array.isArray(t)){if(o.isVertexAI())throw new Error("InlinedRequest[] is not supported in Vertex AI.");s={inlinedRequests:t}}else s=t;const a=[s.gcsUri,s.bigqueryUri].filter(Boolean).length,r=[s.inlinedRequests,s.fileName].filter(Boolean).length;if(o.isVertexAI()){if(r>0||a!==1)throw new Error("Exactly one of `gcsUri` or `bigqueryUri` must be set for Vertex AI.")}else if(a>0||r!==1)throw new Error("Exactly one of `inlinedRequests`, `fileName`, must be set for Gemini API.");return s}function iT(o){if(typeof o!="string")return o;const t=o;if(t.startsWith("gs://"))return{format:"jsonl",gcsUri:t};if(t.startsWith("bq://"))return{format:"bigquery",bigqueryUri:t};throw new Error(`Unsupported destination: ${t}`)}function tg(o){if(typeof o!="object"||o===null)return{};const t=o,s=t.inlinedResponses;if(typeof s!="object"||s===null)return o;const r=s.inlinedResponses;if(!Array.isArray(r)||r.length===0)return o;let d=!1;for(const m of r){if(typeof m!="object"||m===null)continue;const y=m.response;if(typeof y!="object"||y===null)continue;if(y.embedding!==void 0){d=!0;break}}return d&&(t.inlinedEmbedContentResponses=t.inlinedResponses,delete t.inlinedResponses),o}function ii(o,t){const s=t;if(!o.isVertexAI()){if(/batches\/[^/]+$/.test(s))return s.split("/").pop();throw new Error(`Invalid batch job name: ${s}.`)}if(/^projects\/[^/]+\/locations\/[^/]+\/batchPredictionJobs\/[^/]+$/.test(s))return s.split("/").pop();if(/^\d+$/.test(s))return s;throw new Error(`Invalid batch job name: ${s}.`)}function ng(o){const t=o;return t==="BATCH_STATE_UNSPECIFIED"?"JOB_STATE_UNSPECIFIED":t==="BATCH_STATE_PENDING"?"JOB_STATE_PENDING":t==="BATCH_STATE_RUNNING"?"JOB_STATE_RUNNING":t==="BATCH_STATE_SUCCEEDED"?"JOB_STATE_SUCCEEDED":t==="BATCH_STATE_FAILED"?"JOB_STATE_FAILED":t==="BATCH_STATE_CANCELLED"?"JOB_STATE_CANCELLED":t==="BATCH_STATE_EXPIRED"?"JOB_STATE_EXPIRED":t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function sT(o){const t={},s=u(o,["responsesFile"]);s!=null&&c(t,["fileName"],s);const a=u(o,["inlinedResponses","inlinedResponses"]);if(a!=null){let d=a;Array.isArray(d)&&(d=d.map(m=>BT(m))),c(t,["inlinedResponses"],d)}const r=u(o,["inlinedEmbedContentResponses","inlinedResponses"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["inlinedEmbedContentResponses"],d)}return t}function aT(o){const t={},s=u(o,["predictionsFormat"]);s!=null&&c(t,["format"],s);const a=u(o,["gcsDestination","outputUriPrefix"]);a!=null&&c(t,["gcsUri"],a);const r=u(o,["bigqueryDestination","outputUri"]);return r!=null&&c(t,["bigqueryUri"],r),t}function lT(o){const t={},s=u(o,["format"]);s!=null&&c(t,["predictionsFormat"],s);const a=u(o,["gcsUri"]);a!=null&&c(t,["gcsDestination","outputUriPrefix"],a);const r=u(o,["bigqueryUri"]);if(r!=null&&c(t,["bigqueryDestination","outputUri"],r),u(o,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(u(o,["inlinedResponses"])!==void 0)throw new Error("inlinedResponses parameter is not supported in Vertex AI.");if(u(o,["inlinedEmbedContentResponses"])!==void 0)throw new Error("inlinedEmbedContentResponses parameter is not supported in Vertex AI.");return t}function xa(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["metadata","displayName"]);a!=null&&c(t,["displayName"],a);const r=u(o,["metadata","state"]);r!=null&&c(t,["state"],ng(r));const d=u(o,["metadata","createTime"]);d!=null&&c(t,["createTime"],d);const m=u(o,["metadata","endTime"]);m!=null&&c(t,["endTime"],m);const g=u(o,["metadata","updateTime"]);g!=null&&c(t,["updateTime"],g);const y=u(o,["metadata","model"]);y!=null&&c(t,["model"],y);const h=u(o,["metadata","output"]);return h!=null&&c(t,["dest"],sT(tg(h))),t}function Eu(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["displayName"]);a!=null&&c(t,["displayName"],a);const r=u(o,["state"]);r!=null&&c(t,["state"],ng(r));const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["createTime"]);m!=null&&c(t,["createTime"],m);const g=u(o,["startTime"]);g!=null&&c(t,["startTime"],g);const y=u(o,["endTime"]);y!=null&&c(t,["endTime"],y);const h=u(o,["updateTime"]);h!=null&&c(t,["updateTime"],h);const v=u(o,["model"]);v!=null&&c(t,["model"],v);const T=u(o,["inputConfig"]);T!=null&&c(t,["src"],rT(T));const C=u(o,["outputConfig"]);C!=null&&c(t,["dest"],aT(tg(C)));const A=u(o,["completionStats"]);return A!=null&&c(t,["completionStats"],A),t}function rT(o){const t={},s=u(o,["instancesFormat"]);s!=null&&c(t,["format"],s);const a=u(o,["gcsSource","uris"]);a!=null&&c(t,["gcsUri"],a);const r=u(o,["bigquerySource","inputUri"]);return r!=null&&c(t,["bigqueryUri"],r),t}function uT(o,t){const s={};if(u(t,["format"])!==void 0)throw new Error("format parameter is not supported in Gemini API.");if(u(t,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(u(t,["bigqueryUri"])!==void 0)throw new Error("bigqueryUri parameter is not supported in Gemini API.");const a=u(t,["fileName"]);a!=null&&c(s,["fileName"],a);const r=u(t,["inlinedRequests"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>HT(o,m))),c(s,["requests","requests"],d)}return s}function cT(o){const t={},s=u(o,["format"]);s!=null&&c(t,["instancesFormat"],s);const a=u(o,["gcsUri"]);a!=null&&c(t,["gcsSource","uris"],a);const r=u(o,["bigqueryUri"]);if(r!=null&&c(t,["bigquerySource","inputUri"],r),u(o,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(u(o,["inlinedRequests"])!==void 0)throw new Error("inlinedRequests parameter is not supported in Vertex AI.");return t}function dT(o){const t={},s=u(o,["data"]);if(s!=null&&c(t,["data"],s),u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function fT(o,t){const s={},a=u(t,["name"]);return a!=null&&c(s,["_url","name"],ii(o,a)),s}function pT(o,t){const s={},a=u(t,["name"]);return a!=null&&c(s,["_url","name"],ii(o,a)),s}function mT(o){const t={},s=u(o,["content"]);s!=null&&c(t,["content"],s);const a=u(o,["citationMetadata"]);a!=null&&c(t,["citationMetadata"],hT(a));const r=u(o,["tokenCount"]);r!=null&&c(t,["tokenCount"],r);const d=u(o,["finishReason"]);d!=null&&c(t,["finishReason"],d);const m=u(o,["avgLogprobs"]);m!=null&&c(t,["avgLogprobs"],m);const g=u(o,["groundingMetadata"]);g!=null&&c(t,["groundingMetadata"],g);const y=u(o,["index"]);y!=null&&c(t,["index"],y);const h=u(o,["logprobsResult"]);h!=null&&c(t,["logprobsResult"],h);const v=u(o,["safetyRatings"]);if(v!=null){let C=v;Array.isArray(C)&&(C=C.map(A=>A)),c(t,["safetyRatings"],C)}const T=u(o,["urlContextMetadata"]);return T!=null&&c(t,["urlContextMetadata"],T),t}function hT(o){const t={},s=u(o,["citationSources"]);if(s!=null){let a=s;Array.isArray(a)&&(a=a.map(r=>r)),c(t,["citations"],a)}return t}function og(o){const t={},s=u(o,["parts"]);if(s!=null){let r=s;Array.isArray(r)&&(r=r.map(d=>JT(d))),c(t,["parts"],r)}const a=u(o,["role"]);return a!=null&&c(t,["role"],a),t}function gT(o,t){const s={},a=u(o,["displayName"]);if(t!==void 0&&a!=null&&c(t,["batch","displayName"],a),u(o,["dest"])!==void 0)throw new Error("dest parameter is not supported in Gemini API.");return s}function yT(o,t){const s={},a=u(o,["displayName"]);t!==void 0&&a!=null&&c(t,["displayName"],a);const r=u(o,["dest"]);return t!==void 0&&r!=null&&c(t,["outputConfig"],lT(iT(r))),s}function yh(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],Ae(o,a));const r=u(t,["src"]);r!=null&&c(s,["batch","inputConfig"],uT(o,eg(o,r)));const d=u(t,["config"]);return d!=null&&gT(d,s),s}function vT(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["model"],Ae(o,a));const r=u(t,["src"]);r!=null&&c(s,["inputConfig"],cT(eg(o,r)));const d=u(t,["config"]);return d!=null&&yT(d,s),s}function ST(o,t){const s={},a=u(o,["displayName"]);return t!==void 0&&a!=null&&c(t,["batch","displayName"],a),s}function TT(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],Ae(o,a));const r=u(t,["src"]);r!=null&&c(s,["batch","inputConfig"],RT(o,r));const d=u(t,["config"]);return d!=null&&ST(d,s),s}function CT(o,t){const s={},a=u(t,["name"]);return a!=null&&c(s,["_url","name"],ii(o,a)),s}function ET(o,t){const s={},a=u(t,["name"]);return a!=null&&c(s,["_url","name"],ii(o,a)),s}function AT(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["name"]);a!=null&&c(t,["name"],a);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);return d!=null&&c(t,["error"],d),t}function _T(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["name"]);a!=null&&c(t,["name"],a);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);return d!=null&&c(t,["error"],d),t}function bT(o,t){const s={},a=u(t,["contents"]);if(a!=null){let d=Lu(o,a);Array.isArray(d)&&(d=d.map(m=>m)),c(s,["requests[]","request","content"],d)}const r=u(t,["config"]);return r!=null&&(c(s,["_self"],wT(r,s)),ES(s,{"requests[].*":"requests[].request.*"})),s}function wT(o,t){const s={},a=u(o,["taskType"]);t!==void 0&&a!=null&&c(t,["requests[]","taskType"],a);const r=u(o,["title"]);t!==void 0&&r!=null&&c(t,["requests[]","title"],r);const d=u(o,["outputDimensionality"]);if(t!==void 0&&d!=null&&c(t,["requests[]","outputDimensionality"],d),u(o,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(u(o,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return s}function RT(o,t){const s={},a=u(t,["fileName"]);a!=null&&c(s,["file_name"],a);const r=u(t,["inlinedRequests"]);return r!=null&&c(s,["requests"],bT(o,r)),s}function xT(o){const t={};if(u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const s=u(o,["fileUri"]);s!=null&&c(t,["fileUri"],s);const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function IT(o){const t={},s=u(o,["id"]);s!=null&&c(t,["id"],s);const a=u(o,["args"]);a!=null&&c(t,["args"],a);const r=u(o,["name"]);if(r!=null&&c(t,["name"],r),u(o,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(o,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function MT(o){const t={},s=u(o,["mode"]);s!=null&&c(t,["mode"],s);const a=u(o,["allowedFunctionNames"]);if(a!=null&&c(t,["allowedFunctionNames"],a),u(o,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return t}function NT(o,t,s){const a={},r=u(t,["systemInstruction"]);s!==void 0&&r!=null&&c(s,["systemInstruction"],og(st(r)));const d=u(t,["temperature"]);d!=null&&c(a,["temperature"],d);const m=u(t,["topP"]);m!=null&&c(a,["topP"],m);const g=u(t,["topK"]);g!=null&&c(a,["topK"],g);const y=u(t,["candidateCount"]);y!=null&&c(a,["candidateCount"],y);const h=u(t,["maxOutputTokens"]);h!=null&&c(a,["maxOutputTokens"],h);const v=u(t,["stopSequences"]);v!=null&&c(a,["stopSequences"],v);const T=u(t,["responseLogprobs"]);T!=null&&c(a,["responseLogprobs"],T);const C=u(t,["logprobs"]);C!=null&&c(a,["logprobs"],C);const A=u(t,["presencePenalty"]);A!=null&&c(a,["presencePenalty"],A);const U=u(t,["frequencyPenalty"]);U!=null&&c(a,["frequencyPenalty"],U);const M=u(t,["seed"]);M!=null&&c(a,["seed"],M);const I=u(t,["responseMimeType"]);I!=null&&c(a,["responseMimeType"],I);const D=u(t,["responseSchema"]);D!=null&&c(a,["responseSchema"],Gu(D));const V=u(t,["responseJsonSchema"]);if(V!=null&&c(a,["responseJsonSchema"],V),u(t,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(u(t,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const B=u(t,["safetySettings"]);if(s!==void 0&&B!=null){let ue=B;Array.isArray(ue)&&(ue=ue.map(Ge=>KT(Ge))),c(s,["safetySettings"],ue)}const X=u(t,["tools"]);if(s!==void 0&&X!=null){let ue=oi(X);Array.isArray(ue)&&(ue=ue.map(Ge=>QT(ni(Ge)))),c(s,["tools"],ue)}const Z=u(t,["toolConfig"]);if(s!==void 0&&Z!=null&&c(s,["toolConfig"],XT(Z)),u(t,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const te=u(t,["cachedContent"]);s!==void 0&&te!=null&&c(s,["cachedContent"],yn(o,te));const K=u(t,["responseModalities"]);K!=null&&c(a,["responseModalities"],K);const Q=u(t,["mediaResolution"]);Q!=null&&c(a,["mediaResolution"],Q);const Y=u(t,["speechConfig"]);if(Y!=null&&c(a,["speechConfig"],Hu(Y)),u(t,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const z=u(t,["thinkingConfig"]);z!=null&&c(a,["thinkingConfig"],z);const j=u(t,["imageConfig"]);j!=null&&c(a,["imageConfig"],GT(j));const re=u(t,["enableEnhancedCivicAnswers"]);return re!=null&&c(a,["enableEnhancedCivicAnswers"],re),a}function PT(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["candidates"]);if(a!=null){let y=a;Array.isArray(y)&&(y=y.map(h=>mT(h))),c(t,["candidates"],y)}const r=u(o,["modelVersion"]);r!=null&&c(t,["modelVersion"],r);const d=u(o,["promptFeedback"]);d!=null&&c(t,["promptFeedback"],d);const m=u(o,["responseId"]);m!=null&&c(t,["responseId"],m);const g=u(o,["usageMetadata"]);return g!=null&&c(t,["usageMetadata"],g),t}function DT(o,t){const s={},a=u(t,["name"]);return a!=null&&c(s,["_url","name"],ii(o,a)),s}function kT(o,t){const s={},a=u(t,["name"]);return a!=null&&c(s,["_url","name"],ii(o,a)),s}function UT(o){const t={};if(u(o,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const s=u(o,["enableWidget"]);return s!=null&&c(t,["enableWidget"],s),t}function LT(o){const t={};if(u(o,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(u(o,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const s=u(o,["timeRangeFilter"]);return s!=null&&c(t,["timeRangeFilter"],s),t}function GT(o){const t={},s=u(o,["aspectRatio"]);s!=null&&c(t,["aspectRatio"],s);const a=u(o,["imageSize"]);if(a!=null&&c(t,["imageSize"],a),u(o,["outputMimeType"])!==void 0)throw new Error("outputMimeType parameter is not supported in Gemini API.");if(u(o,["outputCompressionQuality"])!==void 0)throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");return t}function HT(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["request","model"],Ae(o,a));const r=u(t,["contents"]);if(r!=null){let g=Gt(r);Array.isArray(g)&&(g=g.map(y=>og(y))),c(s,["request","contents"],g)}const d=u(t,["metadata"]);d!=null&&c(s,["metadata"],d);const m=u(t,["config"]);return m!=null&&c(s,["request","generationConfig"],NT(o,m,u(s,["request"],{}))),s}function BT(o){const t={},s=u(o,["response"]);s!=null&&c(t,["response"],PT(s));const a=u(o,["error"]);return a!=null&&c(t,["error"],a),t}function OT(o,t){const s={},a=u(o,["pageSize"]);t!==void 0&&a!=null&&c(t,["_query","pageSize"],a);const r=u(o,["pageToken"]);if(t!==void 0&&r!=null&&c(t,["_query","pageToken"],r),u(o,["filter"])!==void 0)throw new Error("filter parameter is not supported in Gemini API.");return s}function FT(o,t){const s={},a=u(o,["pageSize"]);t!==void 0&&a!=null&&c(t,["_query","pageSize"],a);const r=u(o,["pageToken"]);t!==void 0&&r!=null&&c(t,["_query","pageToken"],r);const d=u(o,["filter"]);return t!==void 0&&d!=null&&c(t,["_query","filter"],d),s}function qT(o){const t={},s=u(o,["config"]);return s!=null&&OT(s,t),t}function VT(o){const t={},s=u(o,["config"]);return s!=null&&FT(s,t),t}function zT(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["nextPageToken"]);a!=null&&c(t,["nextPageToken"],a);const r=u(o,["operations"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>xa(m))),c(t,["batchJobs"],d)}return t}function YT(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["nextPageToken"]);a!=null&&c(t,["nextPageToken"],a);const r=u(o,["batchPredictionJobs"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>Eu(m))),c(t,["batchJobs"],d)}return t}function JT(o){const t={},s=u(o,["mediaResolution"]);s!=null&&c(t,["mediaResolution"],s);const a=u(o,["codeExecutionResult"]);a!=null&&c(t,["codeExecutionResult"],a);const r=u(o,["executableCode"]);r!=null&&c(t,["executableCode"],r);const d=u(o,["fileData"]);d!=null&&c(t,["fileData"],xT(d));const m=u(o,["functionCall"]);m!=null&&c(t,["functionCall"],IT(m));const g=u(o,["functionResponse"]);g!=null&&c(t,["functionResponse"],g);const y=u(o,["inlineData"]);y!=null&&c(t,["inlineData"],dT(y));const h=u(o,["text"]);h!=null&&c(t,["text"],h);const v=u(o,["thought"]);v!=null&&c(t,["thought"],v);const T=u(o,["thoughtSignature"]);T!=null&&c(t,["thoughtSignature"],T);const C=u(o,["videoMetadata"]);return C!=null&&c(t,["videoMetadata"],C),t}function KT(o){const t={},s=u(o,["category"]);if(s!=null&&c(t,["category"],s),u(o,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const a=u(o,["threshold"]);return a!=null&&c(t,["threshold"],a),t}function XT(o){const t={},s=u(o,["functionCallingConfig"]);s!=null&&c(t,["functionCallingConfig"],MT(s));const a=u(o,["retrievalConfig"]);return a!=null&&c(t,["retrievalConfig"],a),t}function QT(o){const t={},s=u(o,["functionDeclarations"]);if(s!=null){let v=s;Array.isArray(v)&&(v=v.map(T=>T)),c(t,["functionDeclarations"],v)}if(u(o,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const a=u(o,["googleSearchRetrieval"]);a!=null&&c(t,["googleSearchRetrieval"],a);const r=u(o,["computerUse"]);r!=null&&c(t,["computerUse"],r);const d=u(o,["fileSearch"]);d!=null&&c(t,["fileSearch"],d);const m=u(o,["codeExecution"]);if(m!=null&&c(t,["codeExecution"],m),u(o,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const g=u(o,["googleMaps"]);g!=null&&c(t,["googleMaps"],UT(g));const y=u(o,["googleSearch"]);y!=null&&c(t,["googleSearch"],LT(y));const h=u(o,["urlContext"]);return h!=null&&c(t,["urlContext"],h),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var hn;(function(o){o.PAGED_ITEM_BATCH_JOBS="batchJobs",o.PAGED_ITEM_MODELS="models",o.PAGED_ITEM_TUNING_JOBS="tuningJobs",o.PAGED_ITEM_FILES="files",o.PAGED_ITEM_CACHED_CONTENTS="cachedContents",o.PAGED_ITEM_FILE_SEARCH_STORES="fileSearchStores",o.PAGED_ITEM_DOCUMENTS="documents"})(hn||(hn={}));class fo{constructor(t,s,a,r){this.pageInternal=[],this.paramsInternal={},this.requestInternal=s,this.init(t,a,r)}init(t,s,a){var r,d;this.nameInternal=t,this.pageInternal=s[this.nameInternal]||[],this.sdkHttpResponseInternal=s==null?void 0:s.sdkHttpResponse,this.idxInternal=0;let m={config:{}};!a||Object.keys(a).length===0?m={config:{}}:typeof a=="object"?m=Object.assign({},a):m=a,m.config&&(m.config.pageToken=s.nextPageToken),this.paramsInternal=m,this.pageInternalSize=(d=(r=m.config)===null||r===void 0?void 0:r.pageSize)!==null&&d!==void 0?d:this.pageInternal.length}initNextPage(t){this.init(this.nameInternal,t,this.paramsInternal)}get page(){return this.pageInternal}get name(){return this.nameInternal}get pageSize(){return this.pageInternalSize}get sdkHttpResponse(){return this.sdkHttpResponseInternal}get params(){return this.paramsInternal}get pageLength(){return this.pageInternal.length}getItem(t){return this.pageInternal[t]}[Symbol.asyncIterator](){return{next:async()=>{if(this.idxInternal>=this.pageLength)if(this.hasNextPage())await this.nextPage();else return{value:void 0,done:!0};const t=this.getItem(this.idxInternal);return this.idxInternal+=1,{value:t,done:!1}},return:async()=>({value:void 0,done:!0})}}async nextPage(){if(!this.hasNextPage())throw new Error("No more pages to fetch.");const t=await this.requestInternal(this.params);return this.initNextPage(t),this.page}hasNextPage(){var t;return((t=this.params.config)===null||t===void 0?void 0:t.pageToken)!==void 0}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class WT extends gn{constructor(t){super(),this.apiClient=t,this.list=async(s={})=>new fo(hn.PAGED_ITEM_BATCH_JOBS,a=>this.listInternal(a),await this.listInternal(s),s),this.create=async s=>(this.apiClient.isVertexAI()&&(s.config=this.formatDestination(s.src,s.config)),this.createInternal(s)),this.createEmbeddings=async s=>{if(console.warn("batches.createEmbeddings() is experimental and may change without notice."),this.apiClient.isVertexAI())throw new Error("Vertex AI does not support batches.createEmbeddings.");return this.createEmbeddingsInternal(s)}}createInlinedGenerateContentRequest(t){const s=yh(this.apiClient,t),a=s._url,r=$("{model}:batchGenerateContent",a),g=s.batch.inputConfig.requests,y=g.requests,h=[];for(const v of y){const T=Object.assign({},v);if(T.systemInstruction){const C=T.systemInstruction;delete T.systemInstruction;const A=T.request;A.systemInstruction=C,T.request=A}h.push(T)}return g.requests=h,delete s.config,delete s._url,delete s._query,{path:r,body:s}}getGcsUri(t){if(typeof t=="string")return t.startsWith("gs://")?t:void 0;if(!Array.isArray(t)&&t.gcsUri&&t.gcsUri.length>0)return t.gcsUri[0]}getBigqueryUri(t){if(typeof t=="string")return t.startsWith("bq://")?t:void 0;if(!Array.isArray(t))return t.bigqueryUri}formatDestination(t,s){const a=s?Object.assign({},s):{},r=Date.now().toString();if(a.displayName||(a.displayName=`genaiBatchJob_${r}`),a.dest===void 0){const d=this.getGcsUri(t),m=this.getBigqueryUri(t);if(d)d.endsWith(".jsonl")?a.dest=`${d.slice(0,-6)}/dest`:a.dest=`${d}_dest_${r}`;else if(m)a.dest=`${m}_dest_${r}`;else throw new Error("Unsupported source for Vertex AI: No GCS or BigQuery URI found.")}return a}async createInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=vT(this.apiClient,t);return g=$("batchPredictionJobs",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json()),m.then(v=>Eu(v))}else{const h=yh(this.apiClient,t);return g=$("{model}:batchGenerateContent",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>xa(v))}}async createEmbeddingsInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=TT(this.apiClient,t);return d=$("{model}:asyncBatchEmbedContent",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>xa(y))}}async get(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=kT(this.apiClient,t);return g=$("batchPredictionJobs/{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json()),m.then(v=>Eu(v))}else{const h=DT(this.apiClient,t);return g=$("batches/{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>xa(v))}}async cancel(t){var s,a,r,d;let m="",g={};if(this.apiClient.isVertexAI()){const y=pT(this.apiClient,t);m=$("batchPredictionJobs/{name}:cancel",y._url),g=y._query,delete y._url,delete y._query,await this.apiClient.request({path:m,queryParams:g,body:JSON.stringify(y),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal})}else{const y=fT(this.apiClient,t);m=$("batches/{name}:cancel",y._url),g=y._query,delete y._url,delete y._query,await this.apiClient.request({path:m,queryParams:g,body:JSON.stringify(y),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal})}}async listInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=VT(t);return g=$("batchPredictionJobs",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=YT(v),C=new ph;return Object.assign(C,T),C})}else{const h=qT(t);return g=$("batches",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=zT(v),C=new ph;return Object.assign(C,T),C})}}async delete(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=ET(this.apiClient,t);return g=$("batchPredictionJobs/{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>_T(v))}else{const h=CT(this.apiClient,t);return g=$("batches/{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>AT(v))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function $T(o){const t={},s=u(o,["data"]);if(s!=null&&c(t,["data"],s),u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function vh(o){const t={},s=u(o,["parts"]);if(s!=null){let r=s;Array.isArray(r)&&(r=r.map(d=>TC(d))),c(t,["parts"],r)}const a=u(o,["role"]);return a!=null&&c(t,["role"],a),t}function ZT(o,t){const s={},a=u(o,["ttl"]);t!==void 0&&a!=null&&c(t,["ttl"],a);const r=u(o,["expireTime"]);t!==void 0&&r!=null&&c(t,["expireTime"],r);const d=u(o,["displayName"]);t!==void 0&&d!=null&&c(t,["displayName"],d);const m=u(o,["contents"]);if(t!==void 0&&m!=null){let v=Gt(m);Array.isArray(v)&&(v=v.map(T=>vh(T))),c(t,["contents"],v)}const g=u(o,["systemInstruction"]);t!==void 0&&g!=null&&c(t,["systemInstruction"],vh(st(g)));const y=u(o,["tools"]);if(t!==void 0&&y!=null){let v=y;Array.isArray(v)&&(v=v.map(T=>EC(T))),c(t,["tools"],v)}const h=u(o,["toolConfig"]);if(t!==void 0&&h!=null&&c(t,["toolConfig"],CC(h)),u(o,["kmsKeyName"])!==void 0)throw new Error("kmsKeyName parameter is not supported in Gemini API.");return s}function jT(o,t){const s={},a=u(o,["ttl"]);t!==void 0&&a!=null&&c(t,["ttl"],a);const r=u(o,["expireTime"]);t!==void 0&&r!=null&&c(t,["expireTime"],r);const d=u(o,["displayName"]);t!==void 0&&d!=null&&c(t,["displayName"],d);const m=u(o,["contents"]);if(t!==void 0&&m!=null){let T=Gt(m);Array.isArray(T)&&(T=T.map(C=>C)),c(t,["contents"],T)}const g=u(o,["systemInstruction"]);t!==void 0&&g!=null&&c(t,["systemInstruction"],st(g));const y=u(o,["tools"]);if(t!==void 0&&y!=null){let T=y;Array.isArray(T)&&(T=T.map(C=>AC(C))),c(t,["tools"],T)}const h=u(o,["toolConfig"]);t!==void 0&&h!=null&&c(t,["toolConfig"],h);const v=u(o,["kmsKeyName"]);return t!==void 0&&v!=null&&c(t,["encryption_spec","kmsKeyName"],v),s}function eC(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["model"],Yh(o,a));const r=u(t,["config"]);return r!=null&&ZT(r,s),s}function tC(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["model"],Yh(o,a));const r=u(t,["config"]);return r!=null&&jT(r,s),s}function nC(o,t){const s={},a=u(t,["name"]);return a!=null&&c(s,["_url","name"],yn(o,a)),s}function oC(o,t){const s={},a=u(t,["name"]);return a!=null&&c(s,["_url","name"],yn(o,a)),s}function iC(o){const t={},s=u(o,["sdkHttpResponse"]);return s!=null&&c(t,["sdkHttpResponse"],s),t}function sC(o){const t={},s=u(o,["sdkHttpResponse"]);return s!=null&&c(t,["sdkHttpResponse"],s),t}function aC(o){const t={};if(u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const s=u(o,["fileUri"]);s!=null&&c(t,["fileUri"],s);const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function lC(o){const t={},s=u(o,["id"]);s!=null&&c(t,["id"],s);const a=u(o,["args"]);a!=null&&c(t,["args"],a);const r=u(o,["name"]);if(r!=null&&c(t,["name"],r),u(o,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(o,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function rC(o){const t={},s=u(o,["mode"]);s!=null&&c(t,["mode"],s);const a=u(o,["allowedFunctionNames"]);if(a!=null&&c(t,["allowedFunctionNames"],a),u(o,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return t}function uC(o){const t={};if(u(o,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");const s=u(o,["description"]);s!=null&&c(t,["description"],s);const a=u(o,["name"]);a!=null&&c(t,["name"],a);const r=u(o,["parameters"]);r!=null&&c(t,["parameters"],r);const d=u(o,["parametersJsonSchema"]);d!=null&&c(t,["parametersJsonSchema"],d);const m=u(o,["response"]);m!=null&&c(t,["response"],m);const g=u(o,["responseJsonSchema"]);return g!=null&&c(t,["responseJsonSchema"],g),t}function cC(o,t){const s={},a=u(t,["name"]);return a!=null&&c(s,["_url","name"],yn(o,a)),s}function dC(o,t){const s={},a=u(t,["name"]);return a!=null&&c(s,["_url","name"],yn(o,a)),s}function fC(o){const t={};if(u(o,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const s=u(o,["enableWidget"]);return s!=null&&c(t,["enableWidget"],s),t}function pC(o){const t={};if(u(o,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(u(o,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const s=u(o,["timeRangeFilter"]);return s!=null&&c(t,["timeRangeFilter"],s),t}function mC(o,t){const s={},a=u(o,["pageSize"]);t!==void 0&&a!=null&&c(t,["_query","pageSize"],a);const r=u(o,["pageToken"]);return t!==void 0&&r!=null&&c(t,["_query","pageToken"],r),s}function hC(o,t){const s={},a=u(o,["pageSize"]);t!==void 0&&a!=null&&c(t,["_query","pageSize"],a);const r=u(o,["pageToken"]);return t!==void 0&&r!=null&&c(t,["_query","pageToken"],r),s}function gC(o){const t={},s=u(o,["config"]);return s!=null&&mC(s,t),t}function yC(o){const t={},s=u(o,["config"]);return s!=null&&hC(s,t),t}function vC(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["nextPageToken"]);a!=null&&c(t,["nextPageToken"],a);const r=u(o,["cachedContents"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["cachedContents"],d)}return t}function SC(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["nextPageToken"]);a!=null&&c(t,["nextPageToken"],a);const r=u(o,["cachedContents"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["cachedContents"],d)}return t}function TC(o){const t={},s=u(o,["mediaResolution"]);s!=null&&c(t,["mediaResolution"],s);const a=u(o,["codeExecutionResult"]);a!=null&&c(t,["codeExecutionResult"],a);const r=u(o,["executableCode"]);r!=null&&c(t,["executableCode"],r);const d=u(o,["fileData"]);d!=null&&c(t,["fileData"],aC(d));const m=u(o,["functionCall"]);m!=null&&c(t,["functionCall"],lC(m));const g=u(o,["functionResponse"]);g!=null&&c(t,["functionResponse"],g);const y=u(o,["inlineData"]);y!=null&&c(t,["inlineData"],$T(y));const h=u(o,["text"]);h!=null&&c(t,["text"],h);const v=u(o,["thought"]);v!=null&&c(t,["thought"],v);const T=u(o,["thoughtSignature"]);T!=null&&c(t,["thoughtSignature"],T);const C=u(o,["videoMetadata"]);return C!=null&&c(t,["videoMetadata"],C),t}function CC(o){const t={},s=u(o,["functionCallingConfig"]);s!=null&&c(t,["functionCallingConfig"],rC(s));const a=u(o,["retrievalConfig"]);return a!=null&&c(t,["retrievalConfig"],a),t}function EC(o){const t={},s=u(o,["functionDeclarations"]);if(s!=null){let v=s;Array.isArray(v)&&(v=v.map(T=>T)),c(t,["functionDeclarations"],v)}if(u(o,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const a=u(o,["googleSearchRetrieval"]);a!=null&&c(t,["googleSearchRetrieval"],a);const r=u(o,["computerUse"]);r!=null&&c(t,["computerUse"],r);const d=u(o,["fileSearch"]);d!=null&&c(t,["fileSearch"],d);const m=u(o,["codeExecution"]);if(m!=null&&c(t,["codeExecution"],m),u(o,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const g=u(o,["googleMaps"]);g!=null&&c(t,["googleMaps"],fC(g));const y=u(o,["googleSearch"]);y!=null&&c(t,["googleSearch"],pC(y));const h=u(o,["urlContext"]);return h!=null&&c(t,["urlContext"],h),t}function AC(o){const t={},s=u(o,["functionDeclarations"]);if(s!=null){let T=s;Array.isArray(T)&&(T=T.map(C=>uC(C))),c(t,["functionDeclarations"],T)}const a=u(o,["retrieval"]);a!=null&&c(t,["retrieval"],a);const r=u(o,["googleSearchRetrieval"]);r!=null&&c(t,["googleSearchRetrieval"],r);const d=u(o,["computerUse"]);if(d!=null&&c(t,["computerUse"],d),u(o,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const m=u(o,["codeExecution"]);m!=null&&c(t,["codeExecution"],m);const g=u(o,["enterpriseWebSearch"]);g!=null&&c(t,["enterpriseWebSearch"],g);const y=u(o,["googleMaps"]);y!=null&&c(t,["googleMaps"],y);const h=u(o,["googleSearch"]);h!=null&&c(t,["googleSearch"],h);const v=u(o,["urlContext"]);return v!=null&&c(t,["urlContext"],v),t}function _C(o,t){const s={},a=u(o,["ttl"]);t!==void 0&&a!=null&&c(t,["ttl"],a);const r=u(o,["expireTime"]);return t!==void 0&&r!=null&&c(t,["expireTime"],r),s}function bC(o,t){const s={},a=u(o,["ttl"]);t!==void 0&&a!=null&&c(t,["ttl"],a);const r=u(o,["expireTime"]);return t!==void 0&&r!=null&&c(t,["expireTime"],r),s}function wC(o,t){const s={},a=u(t,["name"]);a!=null&&c(s,["_url","name"],yn(o,a));const r=u(t,["config"]);return r!=null&&_C(r,s),s}function RC(o,t){const s={},a=u(t,["name"]);a!=null&&c(s,["_url","name"],yn(o,a));const r=u(t,["config"]);return r!=null&&bC(r,s),s}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class xC extends gn{constructor(t){super(),this.apiClient=t,this.list=async(s={})=>new fo(hn.PAGED_ITEM_CACHED_CONTENTS,a=>this.listInternal(a),await this.listInternal(s),s)}async create(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=tC(this.apiClient,t);return g=$("cachedContents",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json()),m.then(v=>v)}else{const h=eC(this.apiClient,t);return g=$("cachedContents",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>v)}}async get(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=dC(this.apiClient,t);return g=$("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json()),m.then(v=>v)}else{const h=cC(this.apiClient,t);return g=$("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>v)}}async delete(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=oC(this.apiClient,t);return g=$("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=sC(v),C=new dh;return Object.assign(C,T),C})}else{const h=nC(this.apiClient,t);return g=$("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=iC(v),C=new dh;return Object.assign(C,T),C})}}async update(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=RC(this.apiClient,t);return g=$("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"PATCH",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json()),m.then(v=>v)}else{const h=wC(this.apiClient,t);return g=$("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"PATCH",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>v)}}async listInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=yC(t);return g=$("cachedContents",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=SC(v),C=new fh;return Object.assign(C,T),C})}else{const h=gC(t);return g=$("cachedContents",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=vC(v),C=new fh;return Object.assign(C,T),C})}}}function Da(o,t){var s={};for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&t.indexOf(a)<0&&(s[a]=o[a]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,a=Object.getOwnPropertySymbols(o);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(o,a[r])&&(s[a[r]]=o[a[r]]);return s}function Sh(o){var t=typeof Symbol=="function"&&Symbol.iterator,s=t&&o[t],a=0;if(s)return s.call(o);if(o&&typeof o.length=="number")return{next:function(){return o&&a>=o.length&&(o=void 0),{value:o&&o[a++],done:!o}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function le(o){return this instanceof le?(this.v=o,this):new le(o)}function qt(o,t,s){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a=s.apply(o,t||[]),r,d=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),g("next"),g("throw"),g("return",m),r[Symbol.asyncIterator]=function(){return this},r;function m(A){return function(U){return Promise.resolve(U).then(A,T)}}function g(A,U){a[A]&&(r[A]=function(M){return new Promise(function(I,D){d.push([A,M,I,D])>1||y(A,M)})},U&&(r[A]=U(r[A])))}function y(A,U){try{h(a[A](U))}catch(M){C(d[0][3],M)}}function h(A){A.value instanceof le?Promise.resolve(A.value.v).then(v,T):C(d[0][2],A)}function v(A){y("next",A)}function T(A){y("throw",A)}function C(A,U){A(U),d.shift(),d.length&&y(d[0][0],d[0][1])}}function Vt(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=o[Symbol.asyncIterator],s;return t?t.call(o):(o=typeof Sh=="function"?Sh(o):o[Symbol.iterator](),s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s);function a(d){s[d]=o[d]&&function(m){return new Promise(function(g,y){m=o[d](m),r(g,y,m.done,m.value)})}}function r(d,m,g,y){Promise.resolve(y).then(function(h){d({value:h,done:g})},m)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function IC(o){var t;if(o.candidates==null||o.candidates.length===0)return!1;const s=(t=o.candidates[0])===null||t===void 0?void 0:t.content;return s===void 0?!1:ig(s)}function ig(o){if(o.parts===void 0||o.parts.length===0)return!1;for(const t of o.parts)if(t===void 0||Object.keys(t).length===0)return!1;return!0}function MC(o){if(o.length!==0){for(const t of o)if(t.role!=="user"&&t.role!=="model")throw new Error(`Role must be user or model, but got ${t.role}.`)}}function Th(o){if(o===void 0||o.length===0)return[];const t=[],s=o.length;let a=0;for(;a<s;)if(o[a].role==="user")t.push(o[a]),a++;else{const r=[];let d=!0;for(;a<s&&o[a].role==="model";)r.push(o[a]),d&&!ig(o[a])&&(d=!1),a++;d?t.push(...r):t.pop()}return t}class NC{constructor(t,s){this.modelsModule=t,this.apiClient=s}create(t){return new PC(this.apiClient,this.modelsModule,t.model,t.config,structuredClone(t.history))}}class PC{constructor(t,s,a,r={},d=[]){this.apiClient=t,this.modelsModule=s,this.model=a,this.config=r,this.history=d,this.sendPromise=Promise.resolve(),MC(d)}async sendMessage(t){var s;await this.sendPromise;const a=st(t.message),r=this.modelsModule.generateContent({model:this.model,contents:this.getHistory(!0).concat(a),config:(s=t.config)!==null&&s!==void 0?s:this.config});return this.sendPromise=(async()=>{var d,m,g;const y=await r,h=(m=(d=y.candidates)===null||d===void 0?void 0:d[0])===null||m===void 0?void 0:m.content,v=y.automaticFunctionCallingHistory,T=this.getHistory(!0).length;let C=[];v!=null&&(C=(g=v.slice(T))!==null&&g!==void 0?g:[]);const A=h?[h]:[];this.recordHistory(a,A,C)})(),await this.sendPromise.catch(()=>{this.sendPromise=Promise.resolve()}),r}async sendMessageStream(t){var s;await this.sendPromise;const a=st(t.message),r=this.modelsModule.generateContentStream({model:this.model,contents:this.getHistory(!0).concat(a),config:(s=t.config)!==null&&s!==void 0?s:this.config});this.sendPromise=r.then(()=>{}).catch(()=>{});const d=await r;return this.processStreamResponse(d,a)}getHistory(t=!1){const s=t?Th(this.history):this.history;return structuredClone(s)}processStreamResponse(t,s){return qt(this,arguments,function*(){var r,d,m,g,y,h;const v=[];try{for(var T=!0,C=Vt(t),A;A=yield le(C.next()),r=A.done,!r;T=!0){g=A.value,T=!1;const U=g;if(IC(U)){const M=(h=(y=U.candidates)===null||y===void 0?void 0:y[0])===null||h===void 0?void 0:h.content;M!==void 0&&v.push(M)}yield yield le(U)}}catch(U){d={error:U}}finally{try{!T&&!r&&(m=C.return)&&(yield le(m.call(C)))}finally{if(d)throw d.error}}this.recordHistory(s,v)})}recordHistory(t,s,a){let r=[];s.length>0&&s.every(d=>d.role!==void 0)?r=s:r.push({role:"model",parts:[]}),a&&a.length>0?this.history.push(...Th(a)):this.history.push(t),this.history.push(...r)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class La extends Error{constructor(t){super(t.message),this.name="ApiError",this.status=t.status,Object.setPrototypeOf(this,La.prototype)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function DC(o){const t={},s=u(o,["file"]);return s!=null&&c(t,["file"],s),t}function kC(o){const t={},s=u(o,["sdkHttpResponse"]);return s!=null&&c(t,["sdkHttpResponse"],s),t}function UC(o){const t={},s=u(o,["name"]);return s!=null&&c(t,["_url","file"],$h(s)),t}function LC(o){const t={},s=u(o,["sdkHttpResponse"]);return s!=null&&c(t,["sdkHttpResponse"],s),t}function GC(o){const t={},s=u(o,["name"]);return s!=null&&c(t,["_url","file"],$h(s)),t}function HC(o,t){const s={},a=u(o,["pageSize"]);t!==void 0&&a!=null&&c(t,["_query","pageSize"],a);const r=u(o,["pageToken"]);return t!==void 0&&r!=null&&c(t,["_query","pageToken"],r),s}function BC(o){const t={},s=u(o,["config"]);return s!=null&&HC(s,t),t}function OC(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["nextPageToken"]);a!=null&&c(t,["nextPageToken"],a);const r=u(o,["files"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["files"],d)}return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class FC extends gn{constructor(t){super(),this.apiClient=t,this.list=async(s={})=>new fo(hn.PAGED_ITEM_FILES,a=>this.listInternal(a),await this.listInternal(s),s)}async upload(t){if(this.apiClient.isVertexAI())throw new Error("Vertex AI does not support uploading files. You can share files through a GCS bucket.");return this.apiClient.uploadFile(t.file,t.config).then(s=>s)}async download(t){await this.apiClient.downloadFile(t)}async listInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=BC(t);return d=$("files",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json().then(h=>{const v=h;return v.sdkHttpResponse={headers:y.headers},v})),r.then(y=>{const h=OC(y),v=new YS;return Object.assign(v,h),v})}}async createInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=DC(t);return d=$("upload/v1beta/files",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>{const h=kC(y),v=new JS;return Object.assign(v,h),v})}}async get(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=GC(t);return d=$("files/{file}",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>y)}}async delete(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=UC(t);return d=$("files/{file}",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"DELETE",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json().then(h=>{const v=h;return v.sdkHttpResponse={headers:y.headers},v})),r.then(y=>{const h=LC(y),v=new KS;return Object.assign(v,h),v})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ia(o){const t={},s=u(o,["data"]);if(s!=null&&c(t,["data"],s),u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function qC(o){const t={},s=u(o,["parts"]);if(s!=null){let r=s;Array.isArray(r)&&(r=r.map(d=>iE(d))),c(t,["parts"],r)}const a=u(o,["role"]);return a!=null&&c(t,["role"],a),t}function VC(o){const t={};if(u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const s=u(o,["fileUri"]);s!=null&&c(t,["fileUri"],s);const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function zC(o){const t={},s=u(o,["id"]);s!=null&&c(t,["id"],s);const a=u(o,["args"]);a!=null&&c(t,["args"],a);const r=u(o,["name"]);if(r!=null&&c(t,["name"],r),u(o,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(o,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function YC(o){const t={};if(u(o,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");const s=u(o,["description"]);s!=null&&c(t,["description"],s);const a=u(o,["name"]);a!=null&&c(t,["name"],a);const r=u(o,["parameters"]);r!=null&&c(t,["parameters"],r);const d=u(o,["parametersJsonSchema"]);d!=null&&c(t,["parametersJsonSchema"],d);const m=u(o,["response"]);m!=null&&c(t,["response"],m);const g=u(o,["responseJsonSchema"]);return g!=null&&c(t,["responseJsonSchema"],g),t}function JC(o){const t={},s=u(o,["modelSelectionConfig"]);s!=null&&c(t,["modelConfig"],s);const a=u(o,["responseJsonSchema"]);a!=null&&c(t,["responseJsonSchema"],a);const r=u(o,["audioTimestamp"]);r!=null&&c(t,["audioTimestamp"],r);const d=u(o,["candidateCount"]);d!=null&&c(t,["candidateCount"],d);const m=u(o,["enableAffectiveDialog"]);m!=null&&c(t,["enableAffectiveDialog"],m);const g=u(o,["frequencyPenalty"]);g!=null&&c(t,["frequencyPenalty"],g);const y=u(o,["logprobs"]);y!=null&&c(t,["logprobs"],y);const h=u(o,["maxOutputTokens"]);h!=null&&c(t,["maxOutputTokens"],h);const v=u(o,["mediaResolution"]);v!=null&&c(t,["mediaResolution"],v);const T=u(o,["presencePenalty"]);T!=null&&c(t,["presencePenalty"],T);const C=u(o,["responseLogprobs"]);C!=null&&c(t,["responseLogprobs"],C);const A=u(o,["responseMimeType"]);A!=null&&c(t,["responseMimeType"],A);const U=u(o,["responseModalities"]);U!=null&&c(t,["responseModalities"],U);const M=u(o,["responseSchema"]);M!=null&&c(t,["responseSchema"],M);const I=u(o,["routingConfig"]);I!=null&&c(t,["routingConfig"],I);const D=u(o,["seed"]);D!=null&&c(t,["seed"],D);const V=u(o,["speechConfig"]);V!=null&&c(t,["speechConfig"],V);const B=u(o,["stopSequences"]);B!=null&&c(t,["stopSequences"],B);const X=u(o,["temperature"]);X!=null&&c(t,["temperature"],X);const Z=u(o,["thinkingConfig"]);Z!=null&&c(t,["thinkingConfig"],Z);const te=u(o,["topK"]);te!=null&&c(t,["topK"],te);const K=u(o,["topP"]);if(K!=null&&c(t,["topP"],K),u(o,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return t}function KC(o){const t={};if(u(o,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const s=u(o,["enableWidget"]);return s!=null&&c(t,["enableWidget"],s),t}function XC(o){const t={};if(u(o,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(u(o,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const s=u(o,["timeRangeFilter"]);return s!=null&&c(t,["timeRangeFilter"],s),t}function QC(o,t){const s={},a=u(o,["generationConfig"]);t!==void 0&&a!=null&&c(t,["setup","generationConfig"],a);const r=u(o,["responseModalities"]);t!==void 0&&r!=null&&c(t,["setup","generationConfig","responseModalities"],r);const d=u(o,["temperature"]);t!==void 0&&d!=null&&c(t,["setup","generationConfig","temperature"],d);const m=u(o,["topP"]);t!==void 0&&m!=null&&c(t,["setup","generationConfig","topP"],m);const g=u(o,["topK"]);t!==void 0&&g!=null&&c(t,["setup","generationConfig","topK"],g);const y=u(o,["maxOutputTokens"]);t!==void 0&&y!=null&&c(t,["setup","generationConfig","maxOutputTokens"],y);const h=u(o,["mediaResolution"]);t!==void 0&&h!=null&&c(t,["setup","generationConfig","mediaResolution"],h);const v=u(o,["seed"]);t!==void 0&&v!=null&&c(t,["setup","generationConfig","seed"],v);const T=u(o,["speechConfig"]);t!==void 0&&T!=null&&c(t,["setup","generationConfig","speechConfig"],Bu(T));const C=u(o,["thinkingConfig"]);t!==void 0&&C!=null&&c(t,["setup","generationConfig","thinkingConfig"],C);const A=u(o,["enableAffectiveDialog"]);t!==void 0&&A!=null&&c(t,["setup","generationConfig","enableAffectiveDialog"],A);const U=u(o,["systemInstruction"]);t!==void 0&&U!=null&&c(t,["setup","systemInstruction"],qC(st(U)));const M=u(o,["tools"]);if(t!==void 0&&M!=null){let te=oi(M);Array.isArray(te)&&(te=te.map(K=>aE(ni(K)))),c(t,["setup","tools"],te)}const I=u(o,["sessionResumption"]);t!==void 0&&I!=null&&c(t,["setup","sessionResumption"],sE(I));const D=u(o,["inputAudioTranscription"]);t!==void 0&&D!=null&&c(t,["setup","inputAudioTranscription"],D);const V=u(o,["outputAudioTranscription"]);t!==void 0&&V!=null&&c(t,["setup","outputAudioTranscription"],V);const B=u(o,["realtimeInputConfig"]);t!==void 0&&B!=null&&c(t,["setup","realtimeInputConfig"],B);const X=u(o,["contextWindowCompression"]);t!==void 0&&X!=null&&c(t,["setup","contextWindowCompression"],X);const Z=u(o,["proactivity"]);if(t!==void 0&&Z!=null&&c(t,["setup","proactivity"],Z),u(o,["explicitVadSignal"])!==void 0)throw new Error("explicitVadSignal parameter is not supported in Gemini API.");return s}function WC(o,t){const s={},a=u(o,["generationConfig"]);t!==void 0&&a!=null&&c(t,["setup","generationConfig"],JC(a));const r=u(o,["responseModalities"]);t!==void 0&&r!=null&&c(t,["setup","generationConfig","responseModalities"],r);const d=u(o,["temperature"]);t!==void 0&&d!=null&&c(t,["setup","generationConfig","temperature"],d);const m=u(o,["topP"]);t!==void 0&&m!=null&&c(t,["setup","generationConfig","topP"],m);const g=u(o,["topK"]);t!==void 0&&g!=null&&c(t,["setup","generationConfig","topK"],g);const y=u(o,["maxOutputTokens"]);t!==void 0&&y!=null&&c(t,["setup","generationConfig","maxOutputTokens"],y);const h=u(o,["mediaResolution"]);t!==void 0&&h!=null&&c(t,["setup","generationConfig","mediaResolution"],h);const v=u(o,["seed"]);t!==void 0&&v!=null&&c(t,["setup","generationConfig","seed"],v);const T=u(o,["speechConfig"]);t!==void 0&&T!=null&&c(t,["setup","generationConfig","speechConfig"],Bu(T));const C=u(o,["thinkingConfig"]);t!==void 0&&C!=null&&c(t,["setup","generationConfig","thinkingConfig"],C);const A=u(o,["enableAffectiveDialog"]);t!==void 0&&A!=null&&c(t,["setup","generationConfig","enableAffectiveDialog"],A);const U=u(o,["systemInstruction"]);t!==void 0&&U!=null&&c(t,["setup","systemInstruction"],st(U));const M=u(o,["tools"]);if(t!==void 0&&M!=null){let K=oi(M);Array.isArray(K)&&(K=K.map(Q=>lE(ni(Q)))),c(t,["setup","tools"],K)}const I=u(o,["sessionResumption"]);t!==void 0&&I!=null&&c(t,["setup","sessionResumption"],I);const D=u(o,["inputAudioTranscription"]);t!==void 0&&D!=null&&c(t,["setup","inputAudioTranscription"],D);const V=u(o,["outputAudioTranscription"]);t!==void 0&&V!=null&&c(t,["setup","outputAudioTranscription"],V);const B=u(o,["realtimeInputConfig"]);t!==void 0&&B!=null&&c(t,["setup","realtimeInputConfig"],B);const X=u(o,["contextWindowCompression"]);t!==void 0&&X!=null&&c(t,["setup","contextWindowCompression"],X);const Z=u(o,["proactivity"]);t!==void 0&&Z!=null&&c(t,["setup","proactivity"],Z);const te=u(o,["explicitVadSignal"]);return t!==void 0&&te!=null&&c(t,["setup","explicitVadSignal"],te),s}function $C(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["setup","model"],Ae(o,a));const r=u(t,["config"]);return r!=null&&c(s,["config"],QC(r,s)),s}function ZC(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["setup","model"],Ae(o,a));const r=u(t,["config"]);return r!=null&&c(s,["config"],WC(r,s)),s}function jC(o){const t={},s=u(o,["musicGenerationConfig"]);return s!=null&&c(t,["musicGenerationConfig"],s),t}function eE(o){const t={},s=u(o,["weightedPrompts"]);if(s!=null){let a=s;Array.isArray(a)&&(a=a.map(r=>r)),c(t,["weightedPrompts"],a)}return t}function tE(o){const t={},s=u(o,["media"]);if(s!=null){let h=Jh(s);Array.isArray(h)&&(h=h.map(v=>Ia(v))),c(t,["mediaChunks"],h)}const a=u(o,["audio"]);a!=null&&c(t,["audio"],Ia(Xh(a)));const r=u(o,["audioStreamEnd"]);r!=null&&c(t,["audioStreamEnd"],r);const d=u(o,["video"]);d!=null&&c(t,["video"],Ia(Kh(d)));const m=u(o,["text"]);m!=null&&c(t,["text"],m);const g=u(o,["activityStart"]);g!=null&&c(t,["activityStart"],g);const y=u(o,["activityEnd"]);return y!=null&&c(t,["activityEnd"],y),t}function nE(o){const t={},s=u(o,["media"]);if(s!=null){let h=Jh(s);Array.isArray(h)&&(h=h.map(v=>v)),c(t,["mediaChunks"],h)}const a=u(o,["audio"]);a!=null&&c(t,["audio"],Xh(a));const r=u(o,["audioStreamEnd"]);r!=null&&c(t,["audioStreamEnd"],r);const d=u(o,["video"]);d!=null&&c(t,["video"],Kh(d));const m=u(o,["text"]);m!=null&&c(t,["text"],m);const g=u(o,["activityStart"]);g!=null&&c(t,["activityStart"],g);const y=u(o,["activityEnd"]);return y!=null&&c(t,["activityEnd"],y),t}function oE(o){const t={},s=u(o,["setupComplete"]);s!=null&&c(t,["setupComplete"],s);const a=u(o,["serverContent"]);a!=null&&c(t,["serverContent"],a);const r=u(o,["toolCall"]);r!=null&&c(t,["toolCall"],r);const d=u(o,["toolCallCancellation"]);d!=null&&c(t,["toolCallCancellation"],d);const m=u(o,["usageMetadata"]);m!=null&&c(t,["usageMetadata"],rE(m));const g=u(o,["goAway"]);g!=null&&c(t,["goAway"],g);const y=u(o,["sessionResumptionUpdate"]);y!=null&&c(t,["sessionResumptionUpdate"],y);const h=u(o,["voiceActivityDetectionSignal"]);return h!=null&&c(t,["voiceActivityDetectionSignal"],h),t}function iE(o){const t={},s=u(o,["mediaResolution"]);s!=null&&c(t,["mediaResolution"],s);const a=u(o,["codeExecutionResult"]);a!=null&&c(t,["codeExecutionResult"],a);const r=u(o,["executableCode"]);r!=null&&c(t,["executableCode"],r);const d=u(o,["fileData"]);d!=null&&c(t,["fileData"],VC(d));const m=u(o,["functionCall"]);m!=null&&c(t,["functionCall"],zC(m));const g=u(o,["functionResponse"]);g!=null&&c(t,["functionResponse"],g);const y=u(o,["inlineData"]);y!=null&&c(t,["inlineData"],Ia(y));const h=u(o,["text"]);h!=null&&c(t,["text"],h);const v=u(o,["thought"]);v!=null&&c(t,["thought"],v);const T=u(o,["thoughtSignature"]);T!=null&&c(t,["thoughtSignature"],T);const C=u(o,["videoMetadata"]);return C!=null&&c(t,["videoMetadata"],C),t}function sE(o){const t={},s=u(o,["handle"]);if(s!=null&&c(t,["handle"],s),u(o,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return t}function aE(o){const t={},s=u(o,["functionDeclarations"]);if(s!=null){let v=s;Array.isArray(v)&&(v=v.map(T=>T)),c(t,["functionDeclarations"],v)}if(u(o,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const a=u(o,["googleSearchRetrieval"]);a!=null&&c(t,["googleSearchRetrieval"],a);const r=u(o,["computerUse"]);r!=null&&c(t,["computerUse"],r);const d=u(o,["fileSearch"]);d!=null&&c(t,["fileSearch"],d);const m=u(o,["codeExecution"]);if(m!=null&&c(t,["codeExecution"],m),u(o,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const g=u(o,["googleMaps"]);g!=null&&c(t,["googleMaps"],KC(g));const y=u(o,["googleSearch"]);y!=null&&c(t,["googleSearch"],XC(y));const h=u(o,["urlContext"]);return h!=null&&c(t,["urlContext"],h),t}function lE(o){const t={},s=u(o,["functionDeclarations"]);if(s!=null){let T=s;Array.isArray(T)&&(T=T.map(C=>YC(C))),c(t,["functionDeclarations"],T)}const a=u(o,["retrieval"]);a!=null&&c(t,["retrieval"],a);const r=u(o,["googleSearchRetrieval"]);r!=null&&c(t,["googleSearchRetrieval"],r);const d=u(o,["computerUse"]);if(d!=null&&c(t,["computerUse"],d),u(o,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const m=u(o,["codeExecution"]);m!=null&&c(t,["codeExecution"],m);const g=u(o,["enterpriseWebSearch"]);g!=null&&c(t,["enterpriseWebSearch"],g);const y=u(o,["googleMaps"]);y!=null&&c(t,["googleMaps"],y);const h=u(o,["googleSearch"]);h!=null&&c(t,["googleSearch"],h);const v=u(o,["urlContext"]);return v!=null&&c(t,["urlContext"],v),t}function rE(o){const t={},s=u(o,["promptTokenCount"]);s!=null&&c(t,["promptTokenCount"],s);const a=u(o,["cachedContentTokenCount"]);a!=null&&c(t,["cachedContentTokenCount"],a);const r=u(o,["candidatesTokenCount"]);r!=null&&c(t,["responseTokenCount"],r);const d=u(o,["toolUsePromptTokenCount"]);d!=null&&c(t,["toolUsePromptTokenCount"],d);const m=u(o,["thoughtsTokenCount"]);m!=null&&c(t,["thoughtsTokenCount"],m);const g=u(o,["totalTokenCount"]);g!=null&&c(t,["totalTokenCount"],g);const y=u(o,["promptTokensDetails"]);if(y!=null){let A=y;Array.isArray(A)&&(A=A.map(U=>U)),c(t,["promptTokensDetails"],A)}const h=u(o,["cacheTokensDetails"]);if(h!=null){let A=h;Array.isArray(A)&&(A=A.map(U=>U)),c(t,["cacheTokensDetails"],A)}const v=u(o,["candidatesTokensDetails"]);if(v!=null){let A=v;Array.isArray(A)&&(A=A.map(U=>U)),c(t,["responseTokensDetails"],A)}const T=u(o,["toolUsePromptTokensDetails"]);if(T!=null){let A=T;Array.isArray(A)&&(A=A.map(U=>U)),c(t,["toolUsePromptTokensDetails"],A)}const C=u(o,["trafficType"]);return C!=null&&c(t,["trafficType"],C),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function uE(o){const t={},s=u(o,["data"]);if(s!=null&&c(t,["data"],s),u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function cE(o){const t={},s=u(o,["content"]);s!=null&&c(t,["content"],s);const a=u(o,["citationMetadata"]);a!=null&&c(t,["citationMetadata"],dE(a));const r=u(o,["tokenCount"]);r!=null&&c(t,["tokenCount"],r);const d=u(o,["finishReason"]);d!=null&&c(t,["finishReason"],d);const m=u(o,["avgLogprobs"]);m!=null&&c(t,["avgLogprobs"],m);const g=u(o,["groundingMetadata"]);g!=null&&c(t,["groundingMetadata"],g);const y=u(o,["index"]);y!=null&&c(t,["index"],y);const h=u(o,["logprobsResult"]);h!=null&&c(t,["logprobsResult"],h);const v=u(o,["safetyRatings"]);if(v!=null){let C=v;Array.isArray(C)&&(C=C.map(A=>A)),c(t,["safetyRatings"],C)}const T=u(o,["urlContextMetadata"]);return T!=null&&c(t,["urlContextMetadata"],T),t}function dE(o){const t={},s=u(o,["citationSources"]);if(s!=null){let a=s;Array.isArray(a)&&(a=a.map(r=>r)),c(t,["citations"],a)}return t}function fE(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],Ae(o,a));const r=u(t,["contents"]);if(r!=null){let d=Gt(r);Array.isArray(d)&&(d=d.map(m=>m)),c(s,["contents"],d)}return s}function pE(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["tokensInfo"]);if(a!=null){let r=a;Array.isArray(r)&&(r=r.map(d=>d)),c(t,["tokensInfo"],r)}return t}function mE(o){const t={},s=u(o,["values"]);s!=null&&c(t,["values"],s);const a=u(o,["statistics"]);return a!=null&&c(t,["statistics"],hE(a)),t}function hE(o){const t={},s=u(o,["truncated"]);s!=null&&c(t,["truncated"],s);const a=u(o,["token_count"]);return a!=null&&c(t,["tokenCount"],a),t}function Ga(o){const t={},s=u(o,["parts"]);if(s!=null){let r=s;Array.isArray(r)&&(r=r.map(d=>_A(d))),c(t,["parts"],r)}const a=u(o,["role"]);return a!=null&&c(t,["role"],a),t}function gE(o){const t={},s=u(o,["controlType"]);s!=null&&c(t,["controlType"],s);const a=u(o,["enableControlImageComputation"]);return a!=null&&c(t,["computeControl"],a),t}function yE(o){const t={};if(u(o,["systemInstruction"])!==void 0)throw new Error("systemInstruction parameter is not supported in Gemini API.");if(u(o,["tools"])!==void 0)throw new Error("tools parameter is not supported in Gemini API.");if(u(o,["generationConfig"])!==void 0)throw new Error("generationConfig parameter is not supported in Gemini API.");return t}function vE(o,t){const s={},a=u(o,["systemInstruction"]);t!==void 0&&a!=null&&c(t,["systemInstruction"],st(a));const r=u(o,["tools"]);if(t!==void 0&&r!=null){let m=r;Array.isArray(m)&&(m=m.map(g=>rg(g))),c(t,["tools"],m)}const d=u(o,["generationConfig"]);return t!==void 0&&d!=null&&c(t,["generationConfig"],uA(d)),s}function SE(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],Ae(o,a));const r=u(t,["contents"]);if(r!=null){let m=Gt(r);Array.isArray(m)&&(m=m.map(g=>Ga(g))),c(s,["contents"],m)}const d=u(t,["config"]);return d!=null&&yE(d),s}function TE(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],Ae(o,a));const r=u(t,["contents"]);if(r!=null){let m=Gt(r);Array.isArray(m)&&(m=m.map(g=>g)),c(s,["contents"],m)}const d=u(t,["config"]);return d!=null&&vE(d,s),s}function CE(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["totalTokens"]);a!=null&&c(t,["totalTokens"],a);const r=u(o,["cachedContentTokenCount"]);return r!=null&&c(t,["cachedContentTokenCount"],r),t}function EE(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["totalTokens"]);return a!=null&&c(t,["totalTokens"],a),t}function AE(o,t){const s={},a=u(t,["model"]);return a!=null&&c(s,["_url","name"],Ae(o,a)),s}function _E(o,t){const s={},a=u(t,["model"]);return a!=null&&c(s,["_url","name"],Ae(o,a)),s}function bE(o){const t={},s=u(o,["sdkHttpResponse"]);return s!=null&&c(t,["sdkHttpResponse"],s),t}function wE(o){const t={},s=u(o,["sdkHttpResponse"]);return s!=null&&c(t,["sdkHttpResponse"],s),t}function RE(o,t){const s={},a=u(o,["outputGcsUri"]);t!==void 0&&a!=null&&c(t,["parameters","storageUri"],a);const r=u(o,["negativePrompt"]);t!==void 0&&r!=null&&c(t,["parameters","negativePrompt"],r);const d=u(o,["numberOfImages"]);t!==void 0&&d!=null&&c(t,["parameters","sampleCount"],d);const m=u(o,["aspectRatio"]);t!==void 0&&m!=null&&c(t,["parameters","aspectRatio"],m);const g=u(o,["guidanceScale"]);t!==void 0&&g!=null&&c(t,["parameters","guidanceScale"],g);const y=u(o,["seed"]);t!==void 0&&y!=null&&c(t,["parameters","seed"],y);const h=u(o,["safetyFilterLevel"]);t!==void 0&&h!=null&&c(t,["parameters","safetySetting"],h);const v=u(o,["personGeneration"]);t!==void 0&&v!=null&&c(t,["parameters","personGeneration"],v);const T=u(o,["includeSafetyAttributes"]);t!==void 0&&T!=null&&c(t,["parameters","includeSafetyAttributes"],T);const C=u(o,["includeRaiReason"]);t!==void 0&&C!=null&&c(t,["parameters","includeRaiReason"],C);const A=u(o,["language"]);t!==void 0&&A!=null&&c(t,["parameters","language"],A);const U=u(o,["outputMimeType"]);t!==void 0&&U!=null&&c(t,["parameters","outputOptions","mimeType"],U);const M=u(o,["outputCompressionQuality"]);t!==void 0&&M!=null&&c(t,["parameters","outputOptions","compressionQuality"],M);const I=u(o,["addWatermark"]);t!==void 0&&I!=null&&c(t,["parameters","addWatermark"],I);const D=u(o,["labels"]);t!==void 0&&D!=null&&c(t,["labels"],D);const V=u(o,["editMode"]);t!==void 0&&V!=null&&c(t,["parameters","editMode"],V);const B=u(o,["baseSteps"]);return t!==void 0&&B!=null&&c(t,["parameters","editConfig","baseSteps"],B),s}function xE(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],Ae(o,a));const r=u(t,["prompt"]);r!=null&&c(s,["instances[0]","prompt"],r);const d=u(t,["referenceImages"]);if(d!=null){let g=d;Array.isArray(g)&&(g=g.map(y=>MA(y))),c(s,["instances[0]","referenceImages"],g)}const m=u(t,["config"]);return m!=null&&RE(m,s),s}function IE(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["predictions"]);if(a!=null){let r=a;Array.isArray(r)&&(r=r.map(d=>Ha(d))),c(t,["generatedImages"],r)}return t}function ME(o,t){const s={},a=u(o,["taskType"]);t!==void 0&&a!=null&&c(t,["requests[]","taskType"],a);const r=u(o,["title"]);t!==void 0&&r!=null&&c(t,["requests[]","title"],r);const d=u(o,["outputDimensionality"]);if(t!==void 0&&d!=null&&c(t,["requests[]","outputDimensionality"],d),u(o,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(u(o,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return s}function NE(o,t){const s={},a=u(o,["taskType"]);t!==void 0&&a!=null&&c(t,["instances[]","task_type"],a);const r=u(o,["title"]);t!==void 0&&r!=null&&c(t,["instances[]","title"],r);const d=u(o,["outputDimensionality"]);t!==void 0&&d!=null&&c(t,["parameters","outputDimensionality"],d);const m=u(o,["mimeType"]);t!==void 0&&m!=null&&c(t,["instances[]","mimeType"],m);const g=u(o,["autoTruncate"]);return t!==void 0&&g!=null&&c(t,["parameters","autoTruncate"],g),s}function PE(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],Ae(o,a));const r=u(t,["contents"]);if(r!=null){let g=Lu(o,r);Array.isArray(g)&&(g=g.map(y=>y)),c(s,["requests[]","content"],g)}const d=u(t,["config"]);d!=null&&ME(d,s);const m=u(t,["model"]);return m!==void 0&&c(s,["requests[]","model"],Ae(o,m)),s}function DE(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],Ae(o,a));const r=u(t,["contents"]);if(r!=null){let m=Lu(o,r);Array.isArray(m)&&(m=m.map(g=>g)),c(s,["instances[]","content"],m)}const d=u(t,["config"]);return d!=null&&NE(d,s),s}function kE(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["embeddings"]);if(a!=null){let d=a;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["embeddings"],d)}const r=u(o,["metadata"]);return r!=null&&c(t,["metadata"],r),t}function UE(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["predictions[]","embeddings"]);if(a!=null){let d=a;Array.isArray(d)&&(d=d.map(m=>mE(m))),c(t,["embeddings"],d)}const r=u(o,["metadata"]);return r!=null&&c(t,["metadata"],r),t}function LE(o){const t={},s=u(o,["endpoint"]);s!=null&&c(t,["name"],s);const a=u(o,["deployedModelId"]);return a!=null&&c(t,["deployedModelId"],a),t}function GE(o){const t={};if(u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const s=u(o,["fileUri"]);s!=null&&c(t,["fileUri"],s);const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function HE(o){const t={},s=u(o,["id"]);s!=null&&c(t,["id"],s);const a=u(o,["args"]);a!=null&&c(t,["args"],a);const r=u(o,["name"]);if(r!=null&&c(t,["name"],r),u(o,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(o,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function BE(o){const t={},s=u(o,["mode"]);s!=null&&c(t,["mode"],s);const a=u(o,["allowedFunctionNames"]);if(a!=null&&c(t,["allowedFunctionNames"],a),u(o,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return t}function OE(o){const t={};if(u(o,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");const s=u(o,["description"]);s!=null&&c(t,["description"],s);const a=u(o,["name"]);a!=null&&c(t,["name"],a);const r=u(o,["parameters"]);r!=null&&c(t,["parameters"],r);const d=u(o,["parametersJsonSchema"]);d!=null&&c(t,["parametersJsonSchema"],d);const m=u(o,["response"]);m!=null&&c(t,["response"],m);const g=u(o,["responseJsonSchema"]);return g!=null&&c(t,["responseJsonSchema"],g),t}function FE(o,t,s){const a={},r=u(t,["systemInstruction"]);s!==void 0&&r!=null&&c(s,["systemInstruction"],Ga(st(r)));const d=u(t,["temperature"]);d!=null&&c(a,["temperature"],d);const m=u(t,["topP"]);m!=null&&c(a,["topP"],m);const g=u(t,["topK"]);g!=null&&c(a,["topK"],g);const y=u(t,["candidateCount"]);y!=null&&c(a,["candidateCount"],y);const h=u(t,["maxOutputTokens"]);h!=null&&c(a,["maxOutputTokens"],h);const v=u(t,["stopSequences"]);v!=null&&c(a,["stopSequences"],v);const T=u(t,["responseLogprobs"]);T!=null&&c(a,["responseLogprobs"],T);const C=u(t,["logprobs"]);C!=null&&c(a,["logprobs"],C);const A=u(t,["presencePenalty"]);A!=null&&c(a,["presencePenalty"],A);const U=u(t,["frequencyPenalty"]);U!=null&&c(a,["frequencyPenalty"],U);const M=u(t,["seed"]);M!=null&&c(a,["seed"],M);const I=u(t,["responseMimeType"]);I!=null&&c(a,["responseMimeType"],I);const D=u(t,["responseSchema"]);D!=null&&c(a,["responseSchema"],Gu(D));const V=u(t,["responseJsonSchema"]);if(V!=null&&c(a,["responseJsonSchema"],V),u(t,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(u(t,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const B=u(t,["safetySettings"]);if(s!==void 0&&B!=null){let ue=B;Array.isArray(ue)&&(ue=ue.map(Ge=>NA(Ge))),c(s,["safetySettings"],ue)}const X=u(t,["tools"]);if(s!==void 0&&X!=null){let ue=oi(X);Array.isArray(ue)&&(ue=ue.map(Ge=>HA(ni(Ge)))),c(s,["tools"],ue)}const Z=u(t,["toolConfig"]);if(s!==void 0&&Z!=null&&c(s,["toolConfig"],GA(Z)),u(t,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const te=u(t,["cachedContent"]);s!==void 0&&te!=null&&c(s,["cachedContent"],yn(o,te));const K=u(t,["responseModalities"]);K!=null&&c(a,["responseModalities"],K);const Q=u(t,["mediaResolution"]);Q!=null&&c(a,["mediaResolution"],Q);const Y=u(t,["speechConfig"]);if(Y!=null&&c(a,["speechConfig"],Hu(Y)),u(t,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const z=u(t,["thinkingConfig"]);z!=null&&c(a,["thinkingConfig"],z);const j=u(t,["imageConfig"]);j!=null&&c(a,["imageConfig"],mA(j));const re=u(t,["enableEnhancedCivicAnswers"]);return re!=null&&c(a,["enableEnhancedCivicAnswers"],re),a}function qE(o,t,s){const a={},r=u(t,["systemInstruction"]);s!==void 0&&r!=null&&c(s,["systemInstruction"],st(r));const d=u(t,["temperature"]);d!=null&&c(a,["temperature"],d);const m=u(t,["topP"]);m!=null&&c(a,["topP"],m);const g=u(t,["topK"]);g!=null&&c(a,["topK"],g);const y=u(t,["candidateCount"]);y!=null&&c(a,["candidateCount"],y);const h=u(t,["maxOutputTokens"]);h!=null&&c(a,["maxOutputTokens"],h);const v=u(t,["stopSequences"]);v!=null&&c(a,["stopSequences"],v);const T=u(t,["responseLogprobs"]);T!=null&&c(a,["responseLogprobs"],T);const C=u(t,["logprobs"]);C!=null&&c(a,["logprobs"],C);const A=u(t,["presencePenalty"]);A!=null&&c(a,["presencePenalty"],A);const U=u(t,["frequencyPenalty"]);U!=null&&c(a,["frequencyPenalty"],U);const M=u(t,["seed"]);M!=null&&c(a,["seed"],M);const I=u(t,["responseMimeType"]);I!=null&&c(a,["responseMimeType"],I);const D=u(t,["responseSchema"]);D!=null&&c(a,["responseSchema"],Gu(D));const V=u(t,["responseJsonSchema"]);V!=null&&c(a,["responseJsonSchema"],V);const B=u(t,["routingConfig"]);B!=null&&c(a,["routingConfig"],B);const X=u(t,["modelSelectionConfig"]);X!=null&&c(a,["modelConfig"],X);const Z=u(t,["safetySettings"]);if(s!==void 0&&Z!=null){let G=Z;Array.isArray(G)&&(G=G.map(J=>J)),c(s,["safetySettings"],G)}const te=u(t,["tools"]);if(s!==void 0&&te!=null){let G=oi(te);Array.isArray(G)&&(G=G.map(J=>rg(ni(J)))),c(s,["tools"],G)}const K=u(t,["toolConfig"]);s!==void 0&&K!=null&&c(s,["toolConfig"],K);const Q=u(t,["labels"]);s!==void 0&&Q!=null&&c(s,["labels"],Q);const Y=u(t,["cachedContent"]);s!==void 0&&Y!=null&&c(s,["cachedContent"],yn(o,Y));const z=u(t,["responseModalities"]);z!=null&&c(a,["responseModalities"],z);const j=u(t,["mediaResolution"]);j!=null&&c(a,["mediaResolution"],j);const re=u(t,["speechConfig"]);re!=null&&c(a,["speechConfig"],Hu(re));const ue=u(t,["audioTimestamp"]);ue!=null&&c(a,["audioTimestamp"],ue);const Ge=u(t,["thinkingConfig"]);Ge!=null&&c(a,["thinkingConfig"],Ge);const Be=u(t,["imageConfig"]);if(Be!=null&&c(a,["imageConfig"],hA(Be)),u(t,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return a}function Ch(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],Ae(o,a));const r=u(t,["contents"]);if(r!=null){let m=Gt(r);Array.isArray(m)&&(m=m.map(g=>Ga(g))),c(s,["contents"],m)}const d=u(t,["config"]);return d!=null&&c(s,["generationConfig"],FE(o,d,s)),s}function Eh(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],Ae(o,a));const r=u(t,["contents"]);if(r!=null){let m=Gt(r);Array.isArray(m)&&(m=m.map(g=>g)),c(s,["contents"],m)}const d=u(t,["config"]);return d!=null&&c(s,["generationConfig"],qE(o,d,s)),s}function Ah(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["candidates"]);if(a!=null){let y=a;Array.isArray(y)&&(y=y.map(h=>cE(h))),c(t,["candidates"],y)}const r=u(o,["modelVersion"]);r!=null&&c(t,["modelVersion"],r);const d=u(o,["promptFeedback"]);d!=null&&c(t,["promptFeedback"],d);const m=u(o,["responseId"]);m!=null&&c(t,["responseId"],m);const g=u(o,["usageMetadata"]);return g!=null&&c(t,["usageMetadata"],g),t}function _h(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["candidates"]);if(a!=null){let h=a;Array.isArray(h)&&(h=h.map(v=>v)),c(t,["candidates"],h)}const r=u(o,["createTime"]);r!=null&&c(t,["createTime"],r);const d=u(o,["modelVersion"]);d!=null&&c(t,["modelVersion"],d);const m=u(o,["promptFeedback"]);m!=null&&c(t,["promptFeedback"],m);const g=u(o,["responseId"]);g!=null&&c(t,["responseId"],g);const y=u(o,["usageMetadata"]);return y!=null&&c(t,["usageMetadata"],y),t}function VE(o,t){const s={};if(u(o,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(u(o,["negativePrompt"])!==void 0)throw new Error("negativePrompt parameter is not supported in Gemini API.");const a=u(o,["numberOfImages"]);t!==void 0&&a!=null&&c(t,["parameters","sampleCount"],a);const r=u(o,["aspectRatio"]);t!==void 0&&r!=null&&c(t,["parameters","aspectRatio"],r);const d=u(o,["guidanceScale"]);if(t!==void 0&&d!=null&&c(t,["parameters","guidanceScale"],d),u(o,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const m=u(o,["safetyFilterLevel"]);t!==void 0&&m!=null&&c(t,["parameters","safetySetting"],m);const g=u(o,["personGeneration"]);t!==void 0&&g!=null&&c(t,["parameters","personGeneration"],g);const y=u(o,["includeSafetyAttributes"]);t!==void 0&&y!=null&&c(t,["parameters","includeSafetyAttributes"],y);const h=u(o,["includeRaiReason"]);t!==void 0&&h!=null&&c(t,["parameters","includeRaiReason"],h);const v=u(o,["language"]);t!==void 0&&v!=null&&c(t,["parameters","language"],v);const T=u(o,["outputMimeType"]);t!==void 0&&T!=null&&c(t,["parameters","outputOptions","mimeType"],T);const C=u(o,["outputCompressionQuality"]);if(t!==void 0&&C!=null&&c(t,["parameters","outputOptions","compressionQuality"],C),u(o,["addWatermark"])!==void 0)throw new Error("addWatermark parameter is not supported in Gemini API.");if(u(o,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const A=u(o,["imageSize"]);if(t!==void 0&&A!=null&&c(t,["parameters","sampleImageSize"],A),u(o,["enhancePrompt"])!==void 0)throw new Error("enhancePrompt parameter is not supported in Gemini API.");return s}function zE(o,t){const s={},a=u(o,["outputGcsUri"]);t!==void 0&&a!=null&&c(t,["parameters","storageUri"],a);const r=u(o,["negativePrompt"]);t!==void 0&&r!=null&&c(t,["parameters","negativePrompt"],r);const d=u(o,["numberOfImages"]);t!==void 0&&d!=null&&c(t,["parameters","sampleCount"],d);const m=u(o,["aspectRatio"]);t!==void 0&&m!=null&&c(t,["parameters","aspectRatio"],m);const g=u(o,["guidanceScale"]);t!==void 0&&g!=null&&c(t,["parameters","guidanceScale"],g);const y=u(o,["seed"]);t!==void 0&&y!=null&&c(t,["parameters","seed"],y);const h=u(o,["safetyFilterLevel"]);t!==void 0&&h!=null&&c(t,["parameters","safetySetting"],h);const v=u(o,["personGeneration"]);t!==void 0&&v!=null&&c(t,["parameters","personGeneration"],v);const T=u(o,["includeSafetyAttributes"]);t!==void 0&&T!=null&&c(t,["parameters","includeSafetyAttributes"],T);const C=u(o,["includeRaiReason"]);t!==void 0&&C!=null&&c(t,["parameters","includeRaiReason"],C);const A=u(o,["language"]);t!==void 0&&A!=null&&c(t,["parameters","language"],A);const U=u(o,["outputMimeType"]);t!==void 0&&U!=null&&c(t,["parameters","outputOptions","mimeType"],U);const M=u(o,["outputCompressionQuality"]);t!==void 0&&M!=null&&c(t,["parameters","outputOptions","compressionQuality"],M);const I=u(o,["addWatermark"]);t!==void 0&&I!=null&&c(t,["parameters","addWatermark"],I);const D=u(o,["labels"]);t!==void 0&&D!=null&&c(t,["labels"],D);const V=u(o,["imageSize"]);t!==void 0&&V!=null&&c(t,["parameters","sampleImageSize"],V);const B=u(o,["enhancePrompt"]);return t!==void 0&&B!=null&&c(t,["parameters","enhancePrompt"],B),s}function YE(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],Ae(o,a));const r=u(t,["prompt"]);r!=null&&c(s,["instances[0]","prompt"],r);const d=u(t,["config"]);return d!=null&&VE(d,s),s}function JE(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],Ae(o,a));const r=u(t,["prompt"]);r!=null&&c(s,["instances[0]","prompt"],r);const d=u(t,["config"]);return d!=null&&zE(d,s),s}function KE(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["predictions"]);if(a!=null){let d=a;Array.isArray(d)&&(d=d.map(m=>sA(m))),c(t,["generatedImages"],d)}const r=u(o,["positivePromptSafetyAttributes"]);return r!=null&&c(t,["positivePromptSafetyAttributes"],ag(r)),t}function XE(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["predictions"]);if(a!=null){let d=a;Array.isArray(d)&&(d=d.map(m=>Ha(m))),c(t,["generatedImages"],d)}const r=u(o,["positivePromptSafetyAttributes"]);return r!=null&&c(t,["positivePromptSafetyAttributes"],lg(r)),t}function QE(o,t){const s={},a=u(o,["numberOfVideos"]);if(t!==void 0&&a!=null&&c(t,["parameters","sampleCount"],a),u(o,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(u(o,["fps"])!==void 0)throw new Error("fps parameter is not supported in Gemini API.");const r=u(o,["durationSeconds"]);if(t!==void 0&&r!=null&&c(t,["parameters","durationSeconds"],r),u(o,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const d=u(o,["aspectRatio"]);t!==void 0&&d!=null&&c(t,["parameters","aspectRatio"],d);const m=u(o,["resolution"]);t!==void 0&&m!=null&&c(t,["parameters","resolution"],m);const g=u(o,["personGeneration"]);if(t!==void 0&&g!=null&&c(t,["parameters","personGeneration"],g),u(o,["pubsubTopic"])!==void 0)throw new Error("pubsubTopic parameter is not supported in Gemini API.");const y=u(o,["negativePrompt"]);t!==void 0&&y!=null&&c(t,["parameters","negativePrompt"],y);const h=u(o,["enhancePrompt"]);if(t!==void 0&&h!=null&&c(t,["parameters","enhancePrompt"],h),u(o,["generateAudio"])!==void 0)throw new Error("generateAudio parameter is not supported in Gemini API.");const v=u(o,["lastFrame"]);t!==void 0&&v!=null&&c(t,["instances[0]","lastFrame"],Ba(v));const T=u(o,["referenceImages"]);if(t!==void 0&&T!=null){let C=T;Array.isArray(C)&&(C=C.map(A=>$A(A))),c(t,["instances[0]","referenceImages"],C)}if(u(o,["mask"])!==void 0)throw new Error("mask parameter is not supported in Gemini API.");if(u(o,["compressionQuality"])!==void 0)throw new Error("compressionQuality parameter is not supported in Gemini API.");return s}function WE(o,t){const s={},a=u(o,["numberOfVideos"]);t!==void 0&&a!=null&&c(t,["parameters","sampleCount"],a);const r=u(o,["outputGcsUri"]);t!==void 0&&r!=null&&c(t,["parameters","storageUri"],r);const d=u(o,["fps"]);t!==void 0&&d!=null&&c(t,["parameters","fps"],d);const m=u(o,["durationSeconds"]);t!==void 0&&m!=null&&c(t,["parameters","durationSeconds"],m);const g=u(o,["seed"]);t!==void 0&&g!=null&&c(t,["parameters","seed"],g);const y=u(o,["aspectRatio"]);t!==void 0&&y!=null&&c(t,["parameters","aspectRatio"],y);const h=u(o,["resolution"]);t!==void 0&&h!=null&&c(t,["parameters","resolution"],h);const v=u(o,["personGeneration"]);t!==void 0&&v!=null&&c(t,["parameters","personGeneration"],v);const T=u(o,["pubsubTopic"]);t!==void 0&&T!=null&&c(t,["parameters","pubsubTopic"],T);const C=u(o,["negativePrompt"]);t!==void 0&&C!=null&&c(t,["parameters","negativePrompt"],C);const A=u(o,["enhancePrompt"]);t!==void 0&&A!=null&&c(t,["parameters","enhancePrompt"],A);const U=u(o,["generateAudio"]);t!==void 0&&U!=null&&c(t,["parameters","generateAudio"],U);const M=u(o,["lastFrame"]);t!==void 0&&M!=null&&c(t,["instances[0]","lastFrame"],zt(M));const I=u(o,["referenceImages"]);if(t!==void 0&&I!=null){let B=I;Array.isArray(B)&&(B=B.map(X=>ZA(X))),c(t,["instances[0]","referenceImages"],B)}const D=u(o,["mask"]);t!==void 0&&D!=null&&c(t,["instances[0]","mask"],WA(D));const V=u(o,["compressionQuality"]);return t!==void 0&&V!=null&&c(t,["parameters","compressionQuality"],V),s}function $E(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["metadata"]);a!=null&&c(t,["metadata"],a);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["response","generateVideoResponse"]);return m!=null&&c(t,["response"],tA(m)),t}function ZE(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["metadata"]);a!=null&&c(t,["metadata"],a);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["response"]);return m!=null&&c(t,["response"],nA(m)),t}function jE(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],Ae(o,a));const r=u(t,["prompt"]);r!=null&&c(s,["instances[0]","prompt"],r);const d=u(t,["image"]);d!=null&&c(s,["instances[0]","image"],Ba(d));const m=u(t,["video"]);m!=null&&c(s,["instances[0]","video"],ug(m));const g=u(t,["source"]);g!=null&&oA(g,s);const y=u(t,["config"]);return y!=null&&QE(y,s),s}function eA(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],Ae(o,a));const r=u(t,["prompt"]);r!=null&&c(s,["instances[0]","prompt"],r);const d=u(t,["image"]);d!=null&&c(s,["instances[0]","image"],zt(d));const m=u(t,["video"]);m!=null&&c(s,["instances[0]","video"],cg(m));const g=u(t,["source"]);g!=null&&iA(g,s);const y=u(t,["config"]);return y!=null&&WE(y,s),s}function tA(o){const t={},s=u(o,["generatedSamples"]);if(s!=null){let d=s;Array.isArray(d)&&(d=d.map(m=>lA(m))),c(t,["generatedVideos"],d)}const a=u(o,["raiMediaFilteredCount"]);a!=null&&c(t,["raiMediaFilteredCount"],a);const r=u(o,["raiMediaFilteredReasons"]);return r!=null&&c(t,["raiMediaFilteredReasons"],r),t}function nA(o){const t={},s=u(o,["videos"]);if(s!=null){let d=s;Array.isArray(d)&&(d=d.map(m=>rA(m))),c(t,["generatedVideos"],d)}const a=u(o,["raiMediaFilteredCount"]);a!=null&&c(t,["raiMediaFilteredCount"],a);const r=u(o,["raiMediaFilteredReasons"]);return r!=null&&c(t,["raiMediaFilteredReasons"],r),t}function oA(o,t){const s={},a=u(o,["prompt"]);t!==void 0&&a!=null&&c(t,["instances[0]","prompt"],a);const r=u(o,["image"]);t!==void 0&&r!=null&&c(t,["instances[0]","image"],Ba(r));const d=u(o,["video"]);return t!==void 0&&d!=null&&c(t,["instances[0]","video"],ug(d)),s}function iA(o,t){const s={},a=u(o,["prompt"]);t!==void 0&&a!=null&&c(t,["instances[0]","prompt"],a);const r=u(o,["image"]);t!==void 0&&r!=null&&c(t,["instances[0]","image"],zt(r));const d=u(o,["video"]);return t!==void 0&&d!=null&&c(t,["instances[0]","video"],cg(d)),s}function sA(o){const t={},s=u(o,["_self"]);s!=null&&c(t,["image"],gA(s));const a=u(o,["raiFilteredReason"]);a!=null&&c(t,["raiFilteredReason"],a);const r=u(o,["_self"]);return r!=null&&c(t,["safetyAttributes"],ag(r)),t}function Ha(o){const t={},s=u(o,["_self"]);s!=null&&c(t,["image"],sg(s));const a=u(o,["raiFilteredReason"]);a!=null&&c(t,["raiFilteredReason"],a);const r=u(o,["_self"]);r!=null&&c(t,["safetyAttributes"],lg(r));const d=u(o,["prompt"]);return d!=null&&c(t,["enhancedPrompt"],d),t}function aA(o){const t={},s=u(o,["_self"]);s!=null&&c(t,["mask"],sg(s));const a=u(o,["labels"]);if(a!=null){let r=a;Array.isArray(r)&&(r=r.map(d=>d)),c(t,["labels"],r)}return t}function lA(o){const t={},s=u(o,["video"]);return s!=null&&c(t,["video"],XA(s)),t}function rA(o){const t={},s=u(o,["_self"]);return s!=null&&c(t,["video"],QA(s)),t}function uA(o){const t={},s=u(o,["modelSelectionConfig"]);s!=null&&c(t,["modelConfig"],s);const a=u(o,["responseJsonSchema"]);a!=null&&c(t,["responseJsonSchema"],a);const r=u(o,["audioTimestamp"]);r!=null&&c(t,["audioTimestamp"],r);const d=u(o,["candidateCount"]);d!=null&&c(t,["candidateCount"],d);const m=u(o,["enableAffectiveDialog"]);m!=null&&c(t,["enableAffectiveDialog"],m);const g=u(o,["frequencyPenalty"]);g!=null&&c(t,["frequencyPenalty"],g);const y=u(o,["logprobs"]);y!=null&&c(t,["logprobs"],y);const h=u(o,["maxOutputTokens"]);h!=null&&c(t,["maxOutputTokens"],h);const v=u(o,["mediaResolution"]);v!=null&&c(t,["mediaResolution"],v);const T=u(o,["presencePenalty"]);T!=null&&c(t,["presencePenalty"],T);const C=u(o,["responseLogprobs"]);C!=null&&c(t,["responseLogprobs"],C);const A=u(o,["responseMimeType"]);A!=null&&c(t,["responseMimeType"],A);const U=u(o,["responseModalities"]);U!=null&&c(t,["responseModalities"],U);const M=u(o,["responseSchema"]);M!=null&&c(t,["responseSchema"],M);const I=u(o,["routingConfig"]);I!=null&&c(t,["routingConfig"],I);const D=u(o,["seed"]);D!=null&&c(t,["seed"],D);const V=u(o,["speechConfig"]);V!=null&&c(t,["speechConfig"],V);const B=u(o,["stopSequences"]);B!=null&&c(t,["stopSequences"],B);const X=u(o,["temperature"]);X!=null&&c(t,["temperature"],X);const Z=u(o,["thinkingConfig"]);Z!=null&&c(t,["thinkingConfig"],Z);const te=u(o,["topK"]);te!=null&&c(t,["topK"],te);const K=u(o,["topP"]);if(K!=null&&c(t,["topP"],K),u(o,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return t}function cA(o,t){const s={},a=u(t,["model"]);return a!=null&&c(s,["_url","name"],Ae(o,a)),s}function dA(o,t){const s={},a=u(t,["model"]);return a!=null&&c(s,["_url","name"],Ae(o,a)),s}function fA(o){const t={};if(u(o,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const s=u(o,["enableWidget"]);return s!=null&&c(t,["enableWidget"],s),t}function pA(o){const t={};if(u(o,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(u(o,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const s=u(o,["timeRangeFilter"]);return s!=null&&c(t,["timeRangeFilter"],s),t}function mA(o){const t={},s=u(o,["aspectRatio"]);s!=null&&c(t,["aspectRatio"],s);const a=u(o,["imageSize"]);if(a!=null&&c(t,["imageSize"],a),u(o,["outputMimeType"])!==void 0)throw new Error("outputMimeType parameter is not supported in Gemini API.");if(u(o,["outputCompressionQuality"])!==void 0)throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");return t}function hA(o){const t={},s=u(o,["aspectRatio"]);s!=null&&c(t,["aspectRatio"],s);const a=u(o,["imageSize"]);a!=null&&c(t,["imageSize"],a);const r=u(o,["outputMimeType"]);r!=null&&c(t,["imageOutputOptions","mimeType"],r);const d=u(o,["outputCompressionQuality"]);return d!=null&&c(t,["imageOutputOptions","compressionQuality"],d),t}function gA(o){const t={},s=u(o,["bytesBase64Encoded"]);s!=null&&c(t,["imageBytes"],zn(s));const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function sg(o){const t={},s=u(o,["gcsUri"]);s!=null&&c(t,["gcsUri"],s);const a=u(o,["bytesBase64Encoded"]);a!=null&&c(t,["imageBytes"],zn(a));const r=u(o,["mimeType"]);return r!=null&&c(t,["mimeType"],r),t}function Ba(o){const t={};if(u(o,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");const s=u(o,["imageBytes"]);s!=null&&c(t,["bytesBase64Encoded"],zn(s));const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function zt(o){const t={},s=u(o,["gcsUri"]);s!=null&&c(t,["gcsUri"],s);const a=u(o,["imageBytes"]);a!=null&&c(t,["bytesBase64Encoded"],zn(a));const r=u(o,["mimeType"]);return r!=null&&c(t,["mimeType"],r),t}function yA(o,t,s){const a={},r=u(t,["pageSize"]);s!==void 0&&r!=null&&c(s,["_query","pageSize"],r);const d=u(t,["pageToken"]);s!==void 0&&d!=null&&c(s,["_query","pageToken"],d);const m=u(t,["filter"]);s!==void 0&&m!=null&&c(s,["_query","filter"],m);const g=u(t,["queryBase"]);return s!==void 0&&g!=null&&c(s,["_url","models_url"],Zh(o,g)),a}function vA(o,t,s){const a={},r=u(t,["pageSize"]);s!==void 0&&r!=null&&c(s,["_query","pageSize"],r);const d=u(t,["pageToken"]);s!==void 0&&d!=null&&c(s,["_query","pageToken"],d);const m=u(t,["filter"]);s!==void 0&&m!=null&&c(s,["_query","filter"],m);const g=u(t,["queryBase"]);return s!==void 0&&g!=null&&c(s,["_url","models_url"],Zh(o,g)),a}function SA(o,t){const s={},a=u(t,["config"]);return a!=null&&yA(o,a,s),s}function TA(o,t){const s={},a=u(t,["config"]);return a!=null&&vA(o,a,s),s}function CA(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["nextPageToken"]);a!=null&&c(t,["nextPageToken"],a);const r=u(o,["_self"]);if(r!=null){let d=jh(r);Array.isArray(d)&&(d=d.map(m=>Au(m))),c(t,["models"],d)}return t}function EA(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["nextPageToken"]);a!=null&&c(t,["nextPageToken"],a);const r=u(o,["_self"]);if(r!=null){let d=jh(r);Array.isArray(d)&&(d=d.map(m=>_u(m))),c(t,["models"],d)}return t}function AA(o){const t={},s=u(o,["maskMode"]);s!=null&&c(t,["maskMode"],s);const a=u(o,["segmentationClasses"]);a!=null&&c(t,["maskClasses"],a);const r=u(o,["maskDilation"]);return r!=null&&c(t,["dilation"],r),t}function Au(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["displayName"]);a!=null&&c(t,["displayName"],a);const r=u(o,["description"]);r!=null&&c(t,["description"],r);const d=u(o,["version"]);d!=null&&c(t,["version"],d);const m=u(o,["_self"]);m!=null&&c(t,["tunedModelInfo"],BA(m));const g=u(o,["inputTokenLimit"]);g!=null&&c(t,["inputTokenLimit"],g);const y=u(o,["outputTokenLimit"]);y!=null&&c(t,["outputTokenLimit"],y);const h=u(o,["supportedGenerationMethods"]);h!=null&&c(t,["supportedActions"],h);const v=u(o,["temperature"]);v!=null&&c(t,["temperature"],v);const T=u(o,["maxTemperature"]);T!=null&&c(t,["maxTemperature"],T);const C=u(o,["topP"]);C!=null&&c(t,["topP"],C);const A=u(o,["topK"]);A!=null&&c(t,["topK"],A);const U=u(o,["thinking"]);return U!=null&&c(t,["thinking"],U),t}function _u(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["displayName"]);a!=null&&c(t,["displayName"],a);const r=u(o,["description"]);r!=null&&c(t,["description"],r);const d=u(o,["versionId"]);d!=null&&c(t,["version"],d);const m=u(o,["deployedModels"]);if(m!=null){let T=m;Array.isArray(T)&&(T=T.map(C=>LE(C))),c(t,["endpoints"],T)}const g=u(o,["labels"]);g!=null&&c(t,["labels"],g);const y=u(o,["_self"]);y!=null&&c(t,["tunedModelInfo"],OA(y));const h=u(o,["defaultCheckpointId"]);h!=null&&c(t,["defaultCheckpointId"],h);const v=u(o,["checkpoints"]);if(v!=null){let T=v;Array.isArray(T)&&(T=T.map(C=>C)),c(t,["checkpoints"],T)}return t}function _A(o){const t={},s=u(o,["mediaResolution"]);s!=null&&c(t,["mediaResolution"],s);const a=u(o,["codeExecutionResult"]);a!=null&&c(t,["codeExecutionResult"],a);const r=u(o,["executableCode"]);r!=null&&c(t,["executableCode"],r);const d=u(o,["fileData"]);d!=null&&c(t,["fileData"],GE(d));const m=u(o,["functionCall"]);m!=null&&c(t,["functionCall"],HE(m));const g=u(o,["functionResponse"]);g!=null&&c(t,["functionResponse"],g);const y=u(o,["inlineData"]);y!=null&&c(t,["inlineData"],uE(y));const h=u(o,["text"]);h!=null&&c(t,["text"],h);const v=u(o,["thought"]);v!=null&&c(t,["thought"],v);const T=u(o,["thoughtSignature"]);T!=null&&c(t,["thoughtSignature"],T);const C=u(o,["videoMetadata"]);return C!=null&&c(t,["videoMetadata"],C),t}function bA(o){const t={},s=u(o,["productImage"]);return s!=null&&c(t,["image"],zt(s)),t}function wA(o,t){const s={},a=u(o,["numberOfImages"]);t!==void 0&&a!=null&&c(t,["parameters","sampleCount"],a);const r=u(o,["baseSteps"]);t!==void 0&&r!=null&&c(t,["parameters","baseSteps"],r);const d=u(o,["outputGcsUri"]);t!==void 0&&d!=null&&c(t,["parameters","storageUri"],d);const m=u(o,["seed"]);t!==void 0&&m!=null&&c(t,["parameters","seed"],m);const g=u(o,["safetyFilterLevel"]);t!==void 0&&g!=null&&c(t,["parameters","safetySetting"],g);const y=u(o,["personGeneration"]);t!==void 0&&y!=null&&c(t,["parameters","personGeneration"],y);const h=u(o,["addWatermark"]);t!==void 0&&h!=null&&c(t,["parameters","addWatermark"],h);const v=u(o,["outputMimeType"]);t!==void 0&&v!=null&&c(t,["parameters","outputOptions","mimeType"],v);const T=u(o,["outputCompressionQuality"]);t!==void 0&&T!=null&&c(t,["parameters","outputOptions","compressionQuality"],T);const C=u(o,["enhancePrompt"]);t!==void 0&&C!=null&&c(t,["parameters","enhancePrompt"],C);const A=u(o,["labels"]);return t!==void 0&&A!=null&&c(t,["labels"],A),s}function RA(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],Ae(o,a));const r=u(t,["source"]);r!=null&&IA(r,s);const d=u(t,["config"]);return d!=null&&wA(d,s),s}function xA(o){const t={},s=u(o,["predictions"]);if(s!=null){let a=s;Array.isArray(a)&&(a=a.map(r=>Ha(r))),c(t,["generatedImages"],a)}return t}function IA(o,t){const s={},a=u(o,["prompt"]);t!==void 0&&a!=null&&c(t,["instances[0]","prompt"],a);const r=u(o,["personImage"]);t!==void 0&&r!=null&&c(t,["instances[0]","personImage","image"],zt(r));const d=u(o,["productImages"]);if(t!==void 0&&d!=null){let m=d;Array.isArray(m)&&(m=m.map(g=>bA(g))),c(t,["instances[0]","productImages"],m)}return s}function MA(o){const t={},s=u(o,["referenceImage"]);s!=null&&c(t,["referenceImage"],zt(s));const a=u(o,["referenceId"]);a!=null&&c(t,["referenceId"],a);const r=u(o,["referenceType"]);r!=null&&c(t,["referenceType"],r);const d=u(o,["maskImageConfig"]);d!=null&&c(t,["maskImageConfig"],AA(d));const m=u(o,["controlImageConfig"]);m!=null&&c(t,["controlImageConfig"],gE(m));const g=u(o,["styleImageConfig"]);g!=null&&c(t,["styleImageConfig"],g);const y=u(o,["subjectImageConfig"]);return y!=null&&c(t,["subjectImageConfig"],y),t}function ag(o){const t={},s=u(o,["safetyAttributes","categories"]);s!=null&&c(t,["categories"],s);const a=u(o,["safetyAttributes","scores"]);a!=null&&c(t,["scores"],a);const r=u(o,["contentType"]);return r!=null&&c(t,["contentType"],r),t}function lg(o){const t={},s=u(o,["safetyAttributes","categories"]);s!=null&&c(t,["categories"],s);const a=u(o,["safetyAttributes","scores"]);a!=null&&c(t,["scores"],a);const r=u(o,["contentType"]);return r!=null&&c(t,["contentType"],r),t}function NA(o){const t={},s=u(o,["category"]);if(s!=null&&c(t,["category"],s),u(o,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const a=u(o,["threshold"]);return a!=null&&c(t,["threshold"],a),t}function PA(o){const t={},s=u(o,["image"]);return s!=null&&c(t,["image"],zt(s)),t}function DA(o,t){const s={},a=u(o,["mode"]);t!==void 0&&a!=null&&c(t,["parameters","mode"],a);const r=u(o,["maxPredictions"]);t!==void 0&&r!=null&&c(t,["parameters","maxPredictions"],r);const d=u(o,["confidenceThreshold"]);t!==void 0&&d!=null&&c(t,["parameters","confidenceThreshold"],d);const m=u(o,["maskDilation"]);t!==void 0&&m!=null&&c(t,["parameters","maskDilation"],m);const g=u(o,["binaryColorThreshold"]);t!==void 0&&g!=null&&c(t,["parameters","binaryColorThreshold"],g);const y=u(o,["labels"]);return t!==void 0&&y!=null&&c(t,["labels"],y),s}function kA(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],Ae(o,a));const r=u(t,["source"]);r!=null&&LA(r,s);const d=u(t,["config"]);return d!=null&&DA(d,s),s}function UA(o){const t={},s=u(o,["predictions"]);if(s!=null){let a=s;Array.isArray(a)&&(a=a.map(r=>aA(r))),c(t,["generatedMasks"],a)}return t}function LA(o,t){const s={},a=u(o,["prompt"]);t!==void 0&&a!=null&&c(t,["instances[0]","prompt"],a);const r=u(o,["image"]);t!==void 0&&r!=null&&c(t,["instances[0]","image"],zt(r));const d=u(o,["scribbleImage"]);return t!==void 0&&d!=null&&c(t,["instances[0]","scribble"],PA(d)),s}function GA(o){const t={},s=u(o,["functionCallingConfig"]);s!=null&&c(t,["functionCallingConfig"],BE(s));const a=u(o,["retrievalConfig"]);return a!=null&&c(t,["retrievalConfig"],a),t}function HA(o){const t={},s=u(o,["functionDeclarations"]);if(s!=null){let v=s;Array.isArray(v)&&(v=v.map(T=>T)),c(t,["functionDeclarations"],v)}if(u(o,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const a=u(o,["googleSearchRetrieval"]);a!=null&&c(t,["googleSearchRetrieval"],a);const r=u(o,["computerUse"]);r!=null&&c(t,["computerUse"],r);const d=u(o,["fileSearch"]);d!=null&&c(t,["fileSearch"],d);const m=u(o,["codeExecution"]);if(m!=null&&c(t,["codeExecution"],m),u(o,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const g=u(o,["googleMaps"]);g!=null&&c(t,["googleMaps"],fA(g));const y=u(o,["googleSearch"]);y!=null&&c(t,["googleSearch"],pA(y));const h=u(o,["urlContext"]);return h!=null&&c(t,["urlContext"],h),t}function rg(o){const t={},s=u(o,["functionDeclarations"]);if(s!=null){let T=s;Array.isArray(T)&&(T=T.map(C=>OE(C))),c(t,["functionDeclarations"],T)}const a=u(o,["retrieval"]);a!=null&&c(t,["retrieval"],a);const r=u(o,["googleSearchRetrieval"]);r!=null&&c(t,["googleSearchRetrieval"],r);const d=u(o,["computerUse"]);if(d!=null&&c(t,["computerUse"],d),u(o,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const m=u(o,["codeExecution"]);m!=null&&c(t,["codeExecution"],m);const g=u(o,["enterpriseWebSearch"]);g!=null&&c(t,["enterpriseWebSearch"],g);const y=u(o,["googleMaps"]);y!=null&&c(t,["googleMaps"],y);const h=u(o,["googleSearch"]);h!=null&&c(t,["googleSearch"],h);const v=u(o,["urlContext"]);return v!=null&&c(t,["urlContext"],v),t}function BA(o){const t={},s=u(o,["baseModel"]);s!=null&&c(t,["baseModel"],s);const a=u(o,["createTime"]);a!=null&&c(t,["createTime"],a);const r=u(o,["updateTime"]);return r!=null&&c(t,["updateTime"],r),t}function OA(o){const t={},s=u(o,["labels","google-vertex-llm-tuning-base-model-id"]);s!=null&&c(t,["baseModel"],s);const a=u(o,["createTime"]);a!=null&&c(t,["createTime"],a);const r=u(o,["updateTime"]);return r!=null&&c(t,["updateTime"],r),t}function FA(o,t){const s={},a=u(o,["displayName"]);t!==void 0&&a!=null&&c(t,["displayName"],a);const r=u(o,["description"]);t!==void 0&&r!=null&&c(t,["description"],r);const d=u(o,["defaultCheckpointId"]);return t!==void 0&&d!=null&&c(t,["defaultCheckpointId"],d),s}function qA(o,t){const s={},a=u(o,["displayName"]);t!==void 0&&a!=null&&c(t,["displayName"],a);const r=u(o,["description"]);t!==void 0&&r!=null&&c(t,["description"],r);const d=u(o,["defaultCheckpointId"]);return t!==void 0&&d!=null&&c(t,["defaultCheckpointId"],d),s}function VA(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","name"],Ae(o,a));const r=u(t,["config"]);return r!=null&&FA(r,s),s}function zA(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],Ae(o,a));const r=u(t,["config"]);return r!=null&&qA(r,s),s}function YA(o,t){const s={},a=u(o,["outputGcsUri"]);t!==void 0&&a!=null&&c(t,["parameters","storageUri"],a);const r=u(o,["safetyFilterLevel"]);t!==void 0&&r!=null&&c(t,["parameters","safetySetting"],r);const d=u(o,["personGeneration"]);t!==void 0&&d!=null&&c(t,["parameters","personGeneration"],d);const m=u(o,["includeRaiReason"]);t!==void 0&&m!=null&&c(t,["parameters","includeRaiReason"],m);const g=u(o,["outputMimeType"]);t!==void 0&&g!=null&&c(t,["parameters","outputOptions","mimeType"],g);const y=u(o,["outputCompressionQuality"]);t!==void 0&&y!=null&&c(t,["parameters","outputOptions","compressionQuality"],y);const h=u(o,["enhanceInputImage"]);t!==void 0&&h!=null&&c(t,["parameters","upscaleConfig","enhanceInputImage"],h);const v=u(o,["imagePreservationFactor"]);t!==void 0&&v!=null&&c(t,["parameters","upscaleConfig","imagePreservationFactor"],v);const T=u(o,["labels"]);t!==void 0&&T!=null&&c(t,["labels"],T);const C=u(o,["numberOfImages"]);t!==void 0&&C!=null&&c(t,["parameters","sampleCount"],C);const A=u(o,["mode"]);return t!==void 0&&A!=null&&c(t,["parameters","mode"],A),s}function JA(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["_url","model"],Ae(o,a));const r=u(t,["image"]);r!=null&&c(s,["instances[0]","image"],zt(r));const d=u(t,["upscaleFactor"]);d!=null&&c(s,["parameters","upscaleConfig","upscaleFactor"],d);const m=u(t,["config"]);return m!=null&&YA(m,s),s}function KA(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["predictions"]);if(a!=null){let r=a;Array.isArray(r)&&(r=r.map(d=>Ha(d))),c(t,["generatedImages"],r)}return t}function XA(o){const t={},s=u(o,["uri"]);s!=null&&c(t,["uri"],s);const a=u(o,["encodedVideo"]);a!=null&&c(t,["videoBytes"],zn(a));const r=u(o,["encoding"]);return r!=null&&c(t,["mimeType"],r),t}function QA(o){const t={},s=u(o,["gcsUri"]);s!=null&&c(t,["uri"],s);const a=u(o,["bytesBase64Encoded"]);a!=null&&c(t,["videoBytes"],zn(a));const r=u(o,["mimeType"]);return r!=null&&c(t,["mimeType"],r),t}function WA(o){const t={},s=u(o,["image"]);s!=null&&c(t,["_self"],zt(s));const a=u(o,["maskMode"]);return a!=null&&c(t,["maskMode"],a),t}function $A(o){const t={},s=u(o,["image"]);s!=null&&c(t,["image"],Ba(s));const a=u(o,["referenceType"]);return a!=null&&c(t,["referenceType"],a),t}function ZA(o){const t={},s=u(o,["image"]);s!=null&&c(t,["image"],zt(s));const a=u(o,["referenceType"]);return a!=null&&c(t,["referenceType"],a),t}function ug(o){const t={},s=u(o,["uri"]);s!=null&&c(t,["uri"],s);const a=u(o,["videoBytes"]);a!=null&&c(t,["encodedVideo"],zn(a));const r=u(o,["mimeType"]);return r!=null&&c(t,["encoding"],r),t}function cg(o){const t={},s=u(o,["uri"]);s!=null&&c(t,["gcsUri"],s);const a=u(o,["videoBytes"]);a!=null&&c(t,["bytesBase64Encoded"],zn(a));const r=u(o,["mimeType"]);return r!=null&&c(t,["mimeType"],r),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function jA(o,t){const s={},a=u(o,["displayName"]);return t!==void 0&&a!=null&&c(t,["displayName"],a),s}function e_(o){const t={},s=u(o,["config"]);return s!=null&&jA(s,t),t}function t_(o,t){const s={},a=u(o,["force"]);return t!==void 0&&a!=null&&c(t,["_query","force"],a),s}function n_(o){const t={},s=u(o,["name"]);s!=null&&c(t,["_url","name"],s);const a=u(o,["config"]);return a!=null&&t_(a,t),t}function o_(o){const t={},s=u(o,["name"]);return s!=null&&c(t,["_url","name"],s),t}function i_(o,t){const s={},a=u(o,["customMetadata"]);if(t!==void 0&&a!=null){let d=a;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["customMetadata"],d)}const r=u(o,["chunkingConfig"]);return t!==void 0&&r!=null&&c(t,["chunkingConfig"],r),s}function s_(o){const t={},s=u(o,["name"]);s!=null&&c(t,["name"],s);const a=u(o,["metadata"]);a!=null&&c(t,["metadata"],a);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["response"]);return m!=null&&c(t,["response"],l_(m)),t}function a_(o){const t={},s=u(o,["fileSearchStoreName"]);s!=null&&c(t,["_url","file_search_store_name"],s);const a=u(o,["fileName"]);a!=null&&c(t,["fileName"],a);const r=u(o,["config"]);return r!=null&&i_(r,t),t}function l_(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["parent"]);a!=null&&c(t,["parent"],a);const r=u(o,["documentName"]);return r!=null&&c(t,["documentName"],r),t}function r_(o,t){const s={},a=u(o,["pageSize"]);t!==void 0&&a!=null&&c(t,["_query","pageSize"],a);const r=u(o,["pageToken"]);return t!==void 0&&r!=null&&c(t,["_query","pageToken"],r),s}function u_(o){const t={},s=u(o,["config"]);return s!=null&&r_(s,t),t}function c_(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["nextPageToken"]);a!=null&&c(t,["nextPageToken"],a);const r=u(o,["fileSearchStores"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["fileSearchStores"],d)}return t}function dg(o,t){const s={},a=u(o,["mimeType"]);t!==void 0&&a!=null&&c(t,["mimeType"],a);const r=u(o,["displayName"]);t!==void 0&&r!=null&&c(t,["displayName"],r);const d=u(o,["customMetadata"]);if(t!==void 0&&d!=null){let g=d;Array.isArray(g)&&(g=g.map(y=>y)),c(t,["customMetadata"],g)}const m=u(o,["chunkingConfig"]);return t!==void 0&&m!=null&&c(t,["chunkingConfig"],m),s}function d_(o){const t={},s=u(o,["fileSearchStoreName"]);s!=null&&c(t,["_url","file_search_store_name"],s);const a=u(o,["config"]);return a!=null&&dg(a,t),t}function f_(o){const t={},s=u(o,["sdkHttpResponse"]);return s!=null&&c(t,["sdkHttpResponse"],s),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const p_="Content-Type",m_="X-Server-Timeout",h_="User-Agent",bu="x-goog-api-client",g_="1.34.0",y_=`google-genai-sdk/${g_}`,v_="v1beta1",S_="v1beta";class T_{constructor(t){var s,a;this.clientOptions=Object.assign(Object.assign({},t),{project:t.project,location:t.location,apiKey:t.apiKey,vertexai:t.vertexai});const r={};this.clientOptions.vertexai?(r.apiVersion=(s=this.clientOptions.apiVersion)!==null&&s!==void 0?s:v_,r.baseUrl=this.baseUrlFromProjectLocation(),this.normalizeAuthParameters()):(r.apiVersion=(a=this.clientOptions.apiVersion)!==null&&a!==void 0?a:S_,r.baseUrl="https://generativelanguage.googleapis.com/"),r.headers=this.getDefaultHeaders(),this.clientOptions.httpOptions=r,t.httpOptions&&(this.clientOptions.httpOptions=this.patchHttpOptions(r,t.httpOptions))}baseUrlFromProjectLocation(){return this.clientOptions.project&&this.clientOptions.location&&this.clientOptions.location!=="global"?`https://${this.clientOptions.location}-aiplatform.googleapis.com/`:"https://aiplatform.googleapis.com/"}normalizeAuthParameters(){if(this.clientOptions.project&&this.clientOptions.location){this.clientOptions.apiKey=void 0;return}this.clientOptions.project=void 0,this.clientOptions.location=void 0}isVertexAI(){var t;return(t=this.clientOptions.vertexai)!==null&&t!==void 0?t:!1}getProject(){return this.clientOptions.project}getLocation(){return this.clientOptions.location}async getAuthHeaders(){const t=new Headers;return await this.clientOptions.auth.addAuthHeaders(t),t}getApiVersion(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.apiVersion!==void 0)return this.clientOptions.httpOptions.apiVersion;throw new Error("API version is not set.")}getBaseUrl(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.baseUrl!==void 0)return this.clientOptions.httpOptions.baseUrl;throw new Error("Base URL is not set.")}getRequestUrl(){return this.getRequestUrlInternal(this.clientOptions.httpOptions)}getHeaders(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.headers!==void 0)return this.clientOptions.httpOptions.headers;throw new Error("Headers are not set.")}getRequestUrlInternal(t){if(!t||t.baseUrl===void 0||t.apiVersion===void 0)throw new Error("HTTP options are not correctly set.");const a=[t.baseUrl.endsWith("/")?t.baseUrl.slice(0,-1):t.baseUrl];return t.apiVersion&&t.apiVersion!==""&&a.push(t.apiVersion),a.join("/")}getBaseResourcePath(){return`projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`}getApiKey(){return this.clientOptions.apiKey}getWebsocketBaseUrl(){const t=this.getBaseUrl(),s=new URL(t);return s.protocol=s.protocol=="http:"?"ws":"wss",s.toString()}setBaseUrl(t){if(this.clientOptions.httpOptions)this.clientOptions.httpOptions.baseUrl=t;else throw new Error("HTTP options are not correctly set.")}constructUrl(t,s,a){const r=[this.getRequestUrlInternal(s)];return a&&r.push(this.getBaseResourcePath()),t!==""&&r.push(t),new URL(`${r.join("/")}`)}shouldPrependVertexProjectPath(t){return!(this.clientOptions.apiKey||!this.clientOptions.vertexai||t.path.startsWith("projects/")||t.httpMethod==="GET"&&t.path.startsWith("publishers/google/models"))}async request(t){let s=this.clientOptions.httpOptions;t.httpOptions&&(s=this.patchHttpOptions(this.clientOptions.httpOptions,t.httpOptions));const a=this.shouldPrependVertexProjectPath(t),r=this.constructUrl(t.path,s,a);if(t.queryParams)for(const[m,g]of Object.entries(t.queryParams))r.searchParams.append(m,String(g));let d={};if(t.httpMethod==="GET"){if(t.body&&t.body!=="{}")throw new Error("Request body should be empty for GET request, but got non empty request body")}else d.body=t.body;return d=await this.includeExtraHttpOptionsToRequestInit(d,s,r.toString(),t.abortSignal),this.unaryApiCall(r,d,t.httpMethod)}patchHttpOptions(t,s){const a=JSON.parse(JSON.stringify(t));for(const[r,d]of Object.entries(s))typeof d=="object"?a[r]=Object.assign(Object.assign({},a[r]),d):d!==void 0&&(a[r]=d);return a}async requestStream(t){let s=this.clientOptions.httpOptions;t.httpOptions&&(s=this.patchHttpOptions(this.clientOptions.httpOptions,t.httpOptions));const a=this.shouldPrependVertexProjectPath(t),r=this.constructUrl(t.path,s,a);(!r.searchParams.has("alt")||r.searchParams.get("alt")!=="sse")&&r.searchParams.set("alt","sse");let d={};return d.body=t.body,d=await this.includeExtraHttpOptionsToRequestInit(d,s,r.toString(),t.abortSignal),this.streamApiCall(r,d,t.httpMethod)}async includeExtraHttpOptionsToRequestInit(t,s,a,r){if(s&&s.timeout||r){const d=new AbortController,m=d.signal;if(s.timeout&&(s==null?void 0:s.timeout)>0){const g=setTimeout(()=>d.abort(),s.timeout);g&&typeof g.unref=="function"&&g.unref()}r&&r.addEventListener("abort",()=>{d.abort()}),t.signal=m}return s&&s.extraBody!==null&&C_(t,s.extraBody),t.headers=await this.getHeadersInternal(s,a),t}async unaryApiCall(t,s,a){return this.apiCall(t.toString(),Object.assign(Object.assign({},s),{method:a})).then(async r=>(await bh(r),new Tu(r))).catch(r=>{throw r instanceof Error?r:new Error(JSON.stringify(r))})}async streamApiCall(t,s,a){return this.apiCall(t.toString(),Object.assign(Object.assign({},s),{method:a})).then(async r=>(await bh(r),this.processStreamResponse(r))).catch(r=>{throw r instanceof Error?r:new Error(JSON.stringify(r))})}processStreamResponse(t){return qt(this,arguments,function*(){var a;const r=(a=t==null?void 0:t.body)===null||a===void 0?void 0:a.getReader(),d=new TextDecoder("utf-8");if(!r)throw new Error("Response body is empty");try{let m="";const g="data:",y=[`

`,"\r\r",`\r
\r
`];for(;;){const{done:h,value:v}=yield le(r.read());if(h){if(m.trim().length>0)throw new Error("Incomplete JSON segment at the end");break}const T=d.decode(v,{stream:!0});try{const U=JSON.parse(T);if("error"in U){const M=JSON.parse(JSON.stringify(U.error)),I=M.status,D=M.code,V=`got status: ${I}. ${JSON.stringify(U)}`;if(D>=400&&D<600)throw new La({message:V,status:D})}}catch(U){if(U.name==="ApiError")throw U}m+=T;let C=-1,A=0;for(;;){C=-1,A=0;for(const I of y){const D=m.indexOf(I);D!==-1&&(C===-1||D<C)&&(C=D,A=I.length)}if(C===-1)break;const U=m.substring(0,C);m=m.substring(C+A);const M=U.trim();if(M.startsWith(g)){const I=M.substring(g.length).trim();try{const D=new Response(I,{headers:t==null?void 0:t.headers,status:t==null?void 0:t.status,statusText:t==null?void 0:t.statusText});yield yield le(new Tu(D))}catch(D){throw new Error(`exception parsing stream chunk ${I}. ${D}`)}}}}}finally{r.releaseLock()}})}async apiCall(t,s){return fetch(t,s).catch(a=>{throw new Error(`exception ${a} sending request`)})}getDefaultHeaders(){const t={},s=y_+" "+this.clientOptions.userAgentExtra;return t[h_]=s,t[bu]=s,t[p_]="application/json",t}async getHeadersInternal(t,s){const a=new Headers;if(t&&t.headers){for(const[r,d]of Object.entries(t.headers))a.append(r,d);t.timeout&&t.timeout>0&&a.append(m_,String(Math.ceil(t.timeout/1e3)))}return await this.clientOptions.auth.addAuthHeaders(a,s),a}getFileName(t){var s;let a="";return typeof t=="string"&&(a=t.replace(/[/\\]+$/,""),a=(s=a.split(/[/\\]/).pop())!==null&&s!==void 0?s:""),a}async uploadFile(t,s){var a;const r={};s!=null&&(r.mimeType=s.mimeType,r.name=s.name,r.displayName=s.displayName),r.name&&!r.name.startsWith("files/")&&(r.name=`files/${r.name}`);const d=this.clientOptions.uploader,m=await d.stat(t);r.sizeBytes=String(m.size);const g=(a=s==null?void 0:s.mimeType)!==null&&a!==void 0?a:m.type;if(g===void 0||g==="")throw new Error("Can not determine mimeType. Please provide mimeType in the config.");r.mimeType=g;const y={file:r},h=this.getFileName(t),v=$("upload/v1beta/files",y._url),T=await this.fetchUploadUrl(v,r.sizeBytes,r.mimeType,h,y,s==null?void 0:s.httpOptions);return d.upload(t,T,this)}async uploadFileToFileSearchStore(t,s,a){var r;const d=this.clientOptions.uploader,m=await d.stat(s),g=String(m.size),y=(r=a==null?void 0:a.mimeType)!==null&&r!==void 0?r:m.type;if(y===void 0||y==="")throw new Error("Can not determine mimeType. Please provide mimeType in the config.");const h=`upload/v1beta/${t}:uploadToFileSearchStore`,v=this.getFileName(s),T={};a!=null&&dg(a,T);const C=await this.fetchUploadUrl(h,g,y,v,T,a==null?void 0:a.httpOptions);return d.uploadToFileSearchStore(s,C,this)}async downloadFile(t){await this.clientOptions.downloader.download(t,this)}async fetchUploadUrl(t,s,a,r,d,m){var g;let y={};m?y=m:y={apiVersion:"",headers:Object.assign({"Content-Type":"application/json","X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${s}`,"X-Goog-Upload-Header-Content-Type":`${a}`},r?{"X-Goog-Upload-File-Name":r}:{})};const h=await this.request({path:t,body:JSON.stringify(d),httpMethod:"POST",httpOptions:y});if(!h||!(h!=null&&h.headers))throw new Error("Server did not return an HttpResponse or the returned HttpResponse did not have headers.");const v=(g=h==null?void 0:h.headers)===null||g===void 0?void 0:g["x-goog-upload-url"];if(v===void 0)throw new Error("Failed to get upload url. Server did not return the x-google-upload-url in the headers");return v}}async function bh(o){var t;if(o===void 0)throw new Error("response is undefined");if(!o.ok){const s=o.status;let a;!((t=o.headers.get("content-type"))===null||t===void 0)&&t.includes("application/json")?a=await o.json():a={error:{message:await o.text(),code:o.status,status:o.statusText}};const r=JSON.stringify(a);throw s>=400&&s<600?new La({message:r,status:s}):new Error(r)}}function C_(o,t){if(!t||Object.keys(t).length===0)return;if(o.body instanceof Blob){console.warn("includeExtraBodyToRequestInit: extraBody provided but current request body is a Blob. extraBody will be ignored as merging is not supported for Blob bodies.");return}let s={};if(typeof o.body=="string"&&o.body.length>0)try{const d=JSON.parse(o.body);if(typeof d=="object"&&d!==null&&!Array.isArray(d))s=d;else{console.warn("includeExtraBodyToRequestInit: Original request body is valid JSON but not a non-array object. Skip applying extraBody to the request body.");return}}catch{console.warn("includeExtraBodyToRequestInit: Original request body is not valid JSON. Skip applying extraBody to the request body.");return}function a(d,m){const g=Object.assign({},d);for(const y in m)if(Object.prototype.hasOwnProperty.call(m,y)){const h=m[y],v=g[y];h&&typeof h=="object"&&!Array.isArray(h)&&v&&typeof v=="object"&&!Array.isArray(v)?g[y]=a(v,h):(v&&h&&typeof v!=typeof h&&console.warn(`includeExtraBodyToRequestInit:deepMerge: Type mismatch for key "${y}". Original type: ${typeof v}, New type: ${typeof h}. Overwriting.`),g[y]=h)}return g}const r=a(s,t);o.body=JSON.stringify(r)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const E_="mcp_used/unknown";let A_=!1;function fg(o){for(const t of o)if(__(t)||typeof t=="object"&&"inputSchema"in t)return!0;return A_}function pg(o){var t;const s=(t=o[bu])!==null&&t!==void 0?t:"";o[bu]=(s+` ${E_}`).trimStart()}function __(o){return o!==null&&typeof o=="object"&&o instanceof Ou}function b_(o){return qt(this,arguments,function*(s,a=100){let r,d=0;for(;d<a;){const m=yield le(s.listTools({cursor:r}));for(const g of m.tools)yield yield le(g),d++;if(!m.nextCursor)break;r=m.nextCursor}})}class Ou{constructor(t=[],s){this.mcpTools=[],this.functionNameToMcpClient={},this.mcpClients=t,this.config=s}static create(t,s){return new Ou(t,s)}async initialize(){var t,s,a,r;if(this.mcpTools.length>0)return;const d={},m=[];for(const v of this.mcpClients)try{for(var g=!0,y=(s=void 0,Vt(b_(v))),h;h=await y.next(),t=h.done,!t;g=!0){r=h.value,g=!1;const T=r;m.push(T);const C=T.name;if(d[C])throw new Error(`Duplicate function name ${C} found in MCP tools. Please ensure function names are unique.`);d[C]=v}}catch(T){s={error:T}}finally{try{!g&&!t&&(a=y.return)&&await a.call(y)}finally{if(s)throw s.error}}this.mcpTools=m,this.functionNameToMcpClient=d}async tool(){return await this.initialize(),oT(this.mcpTools,this.config)}async callTool(t){await this.initialize();const s=[];for(const a of t)if(a.name in this.functionNameToMcpClient){const r=this.functionNameToMcpClient[a.name];let d;this.config.timeout&&(d={timeout:this.config.timeout});const m=await r.callTool({name:a.name,arguments:a.args},void 0,d);s.push({functionResponse:{name:a.name,response:m.isError?{error:m}:m}})}return s}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function w_(o,t,s){const a=new QS;let r;s.data instanceof Blob?r=JSON.parse(await s.data.text()):r=JSON.parse(s.data),Object.assign(a,r),t(a)}class R_{constructor(t,s,a){this.apiClient=t,this.auth=s,this.webSocketFactory=a}async connect(t){var s,a;if(this.apiClient.isVertexAI())throw new Error("Live music is not supported for Vertex AI.");console.warn("Live music generation is experimental and may change in future versions.");const r=this.apiClient.getWebsocketBaseUrl(),d=this.apiClient.getApiVersion(),m=M_(this.apiClient.getDefaultHeaders()),g=this.apiClient.getApiKey(),y=`${r}/ws/google.ai.generativelanguage.${d}.GenerativeService.BidiGenerateMusic?key=${g}`;let h=()=>{};const v=new Promise(B=>{h=B}),T=t.callbacks,C=function(){h({})},A=this.apiClient,U={onopen:C,onmessage:B=>{w_(A,T.onmessage,B)},onerror:(s=T==null?void 0:T.onerror)!==null&&s!==void 0?s:function(B){},onclose:(a=T==null?void 0:T.onclose)!==null&&a!==void 0?a:function(B){}},M=this.webSocketFactory.create(y,I_(m),U);M.connect(),await v;const V={setup:{model:Ae(this.apiClient,t.model)}};return M.send(JSON.stringify(V)),new x_(M,this.apiClient)}}class x_{constructor(t,s){this.conn=t,this.apiClient=s}async setWeightedPrompts(t){if(!t.weightedPrompts||Object.keys(t.weightedPrompts).length===0)throw new Error("Weighted prompts must be set and contain at least one entry.");const s=eE(t);this.conn.send(JSON.stringify({clientContent:s}))}async setMusicGenerationConfig(t){t.musicGenerationConfig||(t.musicGenerationConfig={});const s=jC(t);this.conn.send(JSON.stringify(s))}sendPlaybackControl(t){const s={playbackControl:t};this.conn.send(JSON.stringify(s))}play(){this.sendPlaybackControl(Zo.PLAY)}pause(){this.sendPlaybackControl(Zo.PAUSE)}stop(){this.sendPlaybackControl(Zo.STOP)}resetContext(){this.sendPlaybackControl(Zo.RESET_CONTEXT)}close(){this.conn.close()}}function I_(o){const t={};return o.forEach((s,a)=>{t[a]=s}),t}function M_(o){const t=new Headers;for(const[s,a]of Object.entries(o))t.append(s,a);return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const N_="FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.";async function P_(o,t,s){const a=new XS;let r;s.data instanceof Blob?r=await s.data.text():s.data instanceof ArrayBuffer?r=new TextDecoder().decode(s.data):r=s.data;const d=JSON.parse(r);if(o.isVertexAI()){const m=oE(d);Object.assign(a,m)}else Object.assign(a,d);t(a)}class D_{constructor(t,s,a){this.apiClient=t,this.auth=s,this.webSocketFactory=a,this.music=new R_(this.apiClient,this.auth,this.webSocketFactory)}async connect(t){var s,a,r,d,m,g;if(t.config&&t.config.httpOptions)throw new Error("The Live module does not support httpOptions at request-level in LiveConnectConfig yet. Please use the client-level httpOptions configuration instead.");const y=this.apiClient.getWebsocketBaseUrl(),h=this.apiClient.getApiVersion();let v;const T=this.apiClient.getHeaders();t.config&&t.config.tools&&fg(t.config.tools)&&pg(T);const C=G_(T);if(this.apiClient.isVertexAI())v=`${y}/ws/google.cloud.aiplatform.${h}.LlmBidiService/BidiGenerateContent`,await this.auth.addAuthHeaders(C,v);else{const Y=this.apiClient.getApiKey();let z="BidiGenerateContent",j="key";Y!=null&&Y.startsWith("auth_tokens/")&&(console.warn("Warning: Ephemeral token support is experimental and may change in future versions."),h!=="v1alpha"&&console.warn("Warning: The SDK's ephemeral token support is in v1alpha only. Please use const ai = new GoogleGenAI({apiKey: token.name, httpOptions: { apiVersion: 'v1alpha' }}); before session connection."),z="BidiGenerateContentConstrained",j="access_token"),v=`${y}/ws/google.ai.generativelanguage.${h}.GenerativeService.${z}?${j}=${Y}`}let A=()=>{};const U=new Promise(Y=>{A=Y}),M=t.callbacks,I=function(){var Y;(Y=M==null?void 0:M.onopen)===null||Y===void 0||Y.call(M),A({})},D=this.apiClient,V={onopen:I,onmessage:Y=>{P_(D,M.onmessage,Y)},onerror:(s=M==null?void 0:M.onerror)!==null&&s!==void 0?s:function(Y){},onclose:(a=M==null?void 0:M.onclose)!==null&&a!==void 0?a:function(Y){}},B=this.webSocketFactory.create(v,L_(C),V);B.connect(),await U;let X=Ae(this.apiClient,t.model);if(this.apiClient.isVertexAI()&&X.startsWith("publishers/")){const Y=this.apiClient.getProject(),z=this.apiClient.getLocation();X=`projects/${Y}/locations/${z}/`+X}let Z={};this.apiClient.isVertexAI()&&((r=t.config)===null||r===void 0?void 0:r.responseModalities)===void 0&&(t.config===void 0?t.config={responseModalities:[Ma.AUDIO]}:t.config.responseModalities=[Ma.AUDIO]),!((d=t.config)===null||d===void 0)&&d.generationConfig&&console.warn("Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).");const te=(g=(m=t.config)===null||m===void 0?void 0:m.tools)!==null&&g!==void 0?g:[],K=[];for(const Y of te)if(this.isCallableTool(Y)){const z=Y;K.push(await z.tool())}else K.push(Y);K.length>0&&(t.config.tools=K);const Q={model:X,config:t.config,callbacks:t.callbacks};return this.apiClient.isVertexAI()?Z=ZC(this.apiClient,Q):Z=$C(this.apiClient,Q),delete Z.config,B.send(JSON.stringify(Z)),new U_(B,this.apiClient)}isCallableTool(t){return"callTool"in t&&typeof t.callTool=="function"}}const k_={turnComplete:!0};class U_{constructor(t,s){this.conn=t,this.apiClient=s}tLiveClientContent(t,s){if(s.turns!==null&&s.turns!==void 0){let a=[];try{a=Gt(s.turns),t.isVertexAI()||(a=a.map(r=>Ga(r)))}catch{throw new Error(`Failed to parse client content "turns", type: '${typeof s.turns}'`)}return{clientContent:{turns:a,turnComplete:s.turnComplete}}}return{clientContent:{turnComplete:s.turnComplete}}}tLiveClienttToolResponse(t,s){let a=[];if(s.functionResponses==null)throw new Error("functionResponses is required.");if(Array.isArray(s.functionResponses)?a=s.functionResponses:a=[s.functionResponses],a.length===0)throw new Error("functionResponses is required.");for(const d of a){if(typeof d!="object"||d===null||!("name"in d)||!("response"in d))throw new Error(`Could not parse function response, type '${typeof d}'.`);if(!t.isVertexAI()&&!("id"in d))throw new Error(N_)}return{toolResponse:{functionResponses:a}}}sendClientContent(t){t=Object.assign(Object.assign({},k_),t);const s=this.tLiveClientContent(this.apiClient,t);this.conn.send(JSON.stringify(s))}sendRealtimeInput(t){let s={};this.apiClient.isVertexAI()?s={realtimeInput:nE(t)}:s={realtimeInput:tE(t)},this.conn.send(JSON.stringify(s))}sendToolResponse(t){if(t.functionResponses==null)throw new Error("Tool response parameters are required.");const s=this.tLiveClienttToolResponse(this.apiClient,t);this.conn.send(JSON.stringify(s))}close(){this.conn.close()}}function L_(o){const t={};return o.forEach((s,a)=>{t[a]=s}),t}function G_(o){const t=new Headers;for(const[s,a]of Object.entries(o))t.append(s,a);return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const wh=10;function Rh(o){var t,s,a;if(!((t=o==null?void 0:o.automaticFunctionCalling)===null||t===void 0)&&t.disable)return!0;let r=!1;for(const m of(s=o==null?void 0:o.tools)!==null&&s!==void 0?s:[])if(ti(m)){r=!0;break}if(!r)return!0;const d=(a=o==null?void 0:o.automaticFunctionCalling)===null||a===void 0?void 0:a.maximumRemoteCalls;return d&&(d<0||!Number.isInteger(d))||d==0?(console.warn("Invalid maximumRemoteCalls value provided for automatic function calling. Disabled automatic function calling. Please provide a valid integer value greater than 0. maximumRemoteCalls provided:",d),!0):!1}function ti(o){return"callTool"in o&&typeof o.callTool=="function"}function H_(o){var t,s,a;return(a=(s=(t=o.config)===null||t===void 0?void 0:t.tools)===null||s===void 0?void 0:s.some(r=>ti(r)))!==null&&a!==void 0?a:!1}function xh(o){var t;const s=[];return!((t=o==null?void 0:o.config)===null||t===void 0)&&t.tools&&o.config.tools.forEach((a,r)=>{if(ti(a))return;const d=a;d.functionDeclarations&&d.functionDeclarations.length>0&&s.push(r)}),s}function Ih(o){var t;return!(!((t=o==null?void 0:o.automaticFunctionCalling)===null||t===void 0)&&t.ignoreCallHistory)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class B_ extends gn{constructor(t){super(),this.apiClient=t,this.generateContent=async s=>{var a,r,d,m,g;const y=await this.processParamsMaybeAddMcpUsage(s);if(this.maybeMoveToResponseJsonSchem(s),!H_(s)||Rh(s.config))return await this.generateContentInternal(y);const h=xh(s);if(h.length>0){const M=h.map(I=>`tools[${I}]`).join(", ");throw new Error(`Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations is not yet supported. Incompatible tools found at ${M}.`)}let v,T;const C=Gt(y.contents),A=(d=(r=(a=y.config)===null||a===void 0?void 0:a.automaticFunctionCalling)===null||r===void 0?void 0:r.maximumRemoteCalls)!==null&&d!==void 0?d:wh;let U=0;for(;U<A&&(v=await this.generateContentInternal(y),!(!v.functionCalls||v.functionCalls.length===0));){const M=v.candidates[0].content,I=[];for(const D of(g=(m=s.config)===null||m===void 0?void 0:m.tools)!==null&&g!==void 0?g:[])if(ti(D)){const B=await D.callTool(v.functionCalls);I.push(...B)}U++,T={role:"user",parts:I},y.contents=Gt(y.contents),y.contents.push(M),y.contents.push(T),Ih(y.config)&&(C.push(M),C.push(T))}return Ih(y.config)&&(v.automaticFunctionCallingHistory=C),v},this.generateContentStream=async s=>{var a,r,d,m,g;if(this.maybeMoveToResponseJsonSchem(s),Rh(s.config)){const T=await this.processParamsMaybeAddMcpUsage(s);return await this.generateContentStreamInternal(T)}const y=xh(s);if(y.length>0){const T=y.map(C=>`tools[${C}]`).join(", ");throw new Error(`Incompatible tools found at ${T}. Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations" is not yet supported.`)}const h=(d=(r=(a=s==null?void 0:s.config)===null||a===void 0?void 0:a.toolConfig)===null||r===void 0?void 0:r.functionCallingConfig)===null||d===void 0?void 0:d.streamFunctionCallArguments,v=(g=(m=s==null?void 0:s.config)===null||m===void 0?void 0:m.automaticFunctionCalling)===null||g===void 0?void 0:g.disable;if(h&&!v)throw new Error("Running in streaming mode with 'streamFunctionCallArguments' enabled, this feature is not compatible with automatic function calling (AFC). Please set 'config.automaticFunctionCalling.disable' to true to disable AFC or leave 'config.toolConfig.functionCallingConfig.streamFunctionCallArguments' to be undefined or set to false to disable streaming function call arguments feature.");return await this.processAfcStream(s)},this.generateImages=async s=>await this.generateImagesInternal(s).then(a=>{var r;let d;const m=[];if(a!=null&&a.generatedImages)for(const y of a.generatedImages)y&&(y!=null&&y.safetyAttributes)&&((r=y==null?void 0:y.safetyAttributes)===null||r===void 0?void 0:r.contentType)==="Positive Prompt"?d=y==null?void 0:y.safetyAttributes:m.push(y);let g;return d?g={generatedImages:m,positivePromptSafetyAttributes:d,sdkHttpResponse:a.sdkHttpResponse}:g={generatedImages:m,sdkHttpResponse:a.sdkHttpResponse},g}),this.list=async s=>{var a;const m={config:Object.assign(Object.assign({},{queryBase:!0}),s==null?void 0:s.config)};if(this.apiClient.isVertexAI()&&!m.config.queryBase){if(!((a=m.config)===null||a===void 0)&&a.filter)throw new Error("Filtering tuned models list for Vertex AI is not currently supported");m.config.filter="labels.tune-type:*"}return new fo(hn.PAGED_ITEM_MODELS,g=>this.listInternal(g),await this.listInternal(m),m)},this.editImage=async s=>{const a={model:s.model,prompt:s.prompt,referenceImages:[],config:s.config};return s.referenceImages&&s.referenceImages&&(a.referenceImages=s.referenceImages.map(r=>r.toReferenceImageAPI())),await this.editImageInternal(a)},this.upscaleImage=async s=>{let a={numberOfImages:1,mode:"upscale"};s.config&&(a=Object.assign(Object.assign({},a),s.config));const r={model:s.model,image:s.image,upscaleFactor:s.upscaleFactor,config:a};return await this.upscaleImageInternal(r)},this.generateVideos=async s=>{var a,r,d,m,g,y;if((s.prompt||s.image||s.video)&&s.source)throw new Error("Source and prompt/image/video are mutually exclusive. Please only use source.");return this.apiClient.isVertexAI()||(!((a=s.video)===null||a===void 0)&&a.uri&&(!((r=s.video)===null||r===void 0)&&r.videoBytes)?s.video={uri:s.video.uri,mimeType:s.video.mimeType}:!((m=(d=s.source)===null||d===void 0?void 0:d.video)===null||m===void 0)&&m.uri&&(!((y=(g=s.source)===null||g===void 0?void 0:g.video)===null||y===void 0)&&y.videoBytes)&&(s.source.video={uri:s.source.video.uri,mimeType:s.source.video.mimeType})),await this.generateVideosInternal(s)}}maybeMoveToResponseJsonSchem(t){t.config&&t.config.responseSchema&&(t.config.responseJsonSchema||Object.keys(t.config.responseSchema).includes("$schema")&&(t.config.responseJsonSchema=t.config.responseSchema,delete t.config.responseSchema))}async processParamsMaybeAddMcpUsage(t){var s,a,r;const d=(s=t.config)===null||s===void 0?void 0:s.tools;if(!d)return t;const m=await Promise.all(d.map(async y=>ti(y)?await y.tool():y)),g={model:t.model,contents:t.contents,config:Object.assign(Object.assign({},t.config),{tools:m})};if(g.config.tools=m,t.config&&t.config.tools&&fg(t.config.tools)){const y=(r=(a=t.config.httpOptions)===null||a===void 0?void 0:a.headers)!==null&&r!==void 0?r:{};let h=Object.assign({},y);Object.keys(h).length===0&&(h=this.apiClient.getDefaultHeaders()),pg(h),g.config.httpOptions=Object.assign(Object.assign({},t.config.httpOptions),{headers:h})}return g}async initAfcToolsMap(t){var s,a,r;const d=new Map;for(const m of(a=(s=t.config)===null||s===void 0?void 0:s.tools)!==null&&a!==void 0?a:[])if(ti(m)){const g=m,y=await g.tool();for(const h of(r=y.functionDeclarations)!==null&&r!==void 0?r:[]){if(!h.name)throw new Error("Function declaration name is required.");if(d.has(h.name))throw new Error(`Duplicate tool declaration name: ${h.name}`);d.set(h.name,g)}}return d}async processAfcStream(t){var s,a,r;const d=(r=(a=(s=t.config)===null||s===void 0?void 0:s.automaticFunctionCalling)===null||a===void 0?void 0:a.maximumRemoteCalls)!==null&&r!==void 0?r:wh;let m=!1,g=0;const y=await this.initAfcToolsMap(t);return(function(h,v,T){return qt(this,arguments,function*(){for(var C,A,U,M,I,D;g<d;){m&&(g++,m=!1);const Z=yield le(h.processParamsMaybeAddMcpUsage(T)),te=yield le(h.generateContentStreamInternal(Z)),K=[],Q=[];try{for(var V=!0,B=(A=void 0,Vt(te)),X;X=yield le(B.next()),C=X.done,!C;V=!0){M=X.value,V=!1;const Y=M;if(yield yield le(Y),Y.candidates&&(!((I=Y.candidates[0])===null||I===void 0)&&I.content)){Q.push(Y.candidates[0].content);for(const z of(D=Y.candidates[0].content.parts)!==null&&D!==void 0?D:[])if(g<d&&z.functionCall){if(!z.functionCall.name)throw new Error("Function call name was not returned by the model.");if(v.has(z.functionCall.name)){const j=yield le(v.get(z.functionCall.name).callTool([z.functionCall]));K.push(...j)}else throw new Error(`Automatic function calling was requested, but not all the tools the model used implement the CallableTool interface. Available tools: ${v.keys()}, mising tool: ${z.functionCall.name}`)}}}}catch(Y){A={error:Y}}finally{try{!V&&!C&&(U=B.return)&&(yield le(U.call(B)))}finally{if(A)throw A.error}}if(K.length>0){m=!0;const Y=new es;Y.candidates=[{content:{role:"user",parts:K}}],yield yield le(Y);const z=[];z.push(...Q),z.push({role:"user",parts:K});const j=Gt(T.contents).concat(z);T.contents=j}else break}})})(this,y,t)}async generateContentInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=Eh(this.apiClient,t);return g=$("{model}:generateContent",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=_h(v),C=new es;return Object.assign(C,T),C})}else{const h=Ch(this.apiClient,t);return g=$("{model}:generateContent",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=Ah(v),C=new es;return Object.assign(C,T),C})}}async generateContentStreamInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=Eh(this.apiClient,t);return g=$("{model}:streamGenerateContent?alt=sse",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.requestStream({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}),m.then(function(T){return qt(this,arguments,function*(){var C,A,U,M;try{for(var I=!0,D=Vt(T),V;V=yield le(D.next()),C=V.done,!C;I=!0){M=V.value,I=!1;const B=M,X=_h(yield le(B.json()));X.sdkHttpResponse={headers:B.headers};const Z=new es;Object.assign(Z,X),yield yield le(Z)}}catch(B){A={error:B}}finally{try{!I&&!C&&(U=D.return)&&(yield le(U.call(D)))}finally{if(A)throw A.error}}})})}else{const h=Ch(this.apiClient,t);return g=$("{model}:streamGenerateContent?alt=sse",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.requestStream({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}),m.then(function(T){return qt(this,arguments,function*(){var C,A,U,M;try{for(var I=!0,D=Vt(T),V;V=yield le(D.next()),C=V.done,!C;I=!0){M=V.value,I=!1;const B=M,X=Ah(yield le(B.json()));X.sdkHttpResponse={headers:B.headers};const Z=new es;Object.assign(Z,X),yield yield le(Z)}}catch(B){A={error:B}}finally{try{!I&&!C&&(U=D.return)&&(yield le(U.call(D)))}finally{if(A)throw A.error}}})})}}async embedContent(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=DE(this.apiClient,t);return g=$("{model}:predict",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=UE(v),C=new ih;return Object.assign(C,T),C})}else{const h=PE(this.apiClient,t);return g=$("{model}:batchEmbedContents",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=kE(v),C=new ih;return Object.assign(C,T),C})}}async generateImagesInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=JE(this.apiClient,t);return g=$("{model}:predict",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=XE(v),C=new sh;return Object.assign(C,T),C})}else{const h=YE(this.apiClient,t);return g=$("{model}:predict",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=KE(v),C=new sh;return Object.assign(C,T),C})}}async editImageInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI()){const g=xE(this.apiClient,t);return d=$("{model}:predict",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json().then(h=>{const v=h;return v.sdkHttpResponse={headers:y.headers},v})),r.then(y=>{const h=IE(y),v=new GS;return Object.assign(v,h),v})}else throw new Error("This method is only supported by the Vertex AI.")}async upscaleImageInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI()){const g=JA(this.apiClient,t);return d=$("{model}:predict",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json().then(h=>{const v=h;return v.sdkHttpResponse={headers:y.headers},v})),r.then(y=>{const h=KA(y),v=new HS;return Object.assign(v,h),v})}else throw new Error("This method is only supported by the Vertex AI.")}async recontextImage(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI()){const g=RA(this.apiClient,t);return d=$("{model}:predict",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>{const h=xA(y),v=new BS;return Object.assign(v,h),v})}else throw new Error("This method is only supported by the Vertex AI.")}async segmentImage(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI()){const g=kA(this.apiClient,t);return d=$("{model}:predict",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>{const h=UA(y),v=new OS;return Object.assign(v,h),v})}else throw new Error("This method is only supported by the Vertex AI.")}async get(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=dA(this.apiClient,t);return g=$("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json()),m.then(v=>_u(v))}else{const h=cA(this.apiClient,t);return g=$("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>Au(v))}}async listInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=TA(this.apiClient,t);return g=$("{models_url}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=EA(v),C=new ah;return Object.assign(C,T),C})}else{const h=SA(this.apiClient,t);return g=$("{models_url}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=CA(v),C=new ah;return Object.assign(C,T),C})}}async update(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=zA(this.apiClient,t);return g=$("{model}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"PATCH",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json()),m.then(v=>_u(v))}else{const h=VA(this.apiClient,t);return g=$("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"PATCH",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>Au(v))}}async delete(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=_E(this.apiClient,t);return g=$("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=wE(v),C=new lh;return Object.assign(C,T),C})}else{const h=AE(this.apiClient,t);return g=$("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=bE(v),C=new lh;return Object.assign(C,T),C})}}async countTokens(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=TE(this.apiClient,t);return g=$("{model}:countTokens",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=EE(v),C=new rh;return Object.assign(C,T),C})}else{const h=SE(this.apiClient,t);return g=$("{model}:countTokens",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=CE(v),C=new rh;return Object.assign(C,T),C})}}async computeTokens(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI()){const g=fE(this.apiClient,t);return d=$("{model}:computeTokens",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json().then(h=>{const v=h;return v.sdkHttpResponse={headers:y.headers},v})),r.then(y=>{const h=pE(y),v=new FS;return Object.assign(v,h),v})}else throw new Error("This method is only supported by the Vertex AI.")}async generateVideosInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=eA(this.apiClient,t);return g=$("{model}:predictLongRunning",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json()),m.then(v=>{const T=ZE(v),C=new Na;return Object.assign(C,T),C})}else{const h=jE(this.apiClient,t);return g=$("{model}:predictLongRunning",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>{const T=$E(v),C=new Na;return Object.assign(C,T),C})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class O_ extends gn{constructor(t){super(),this.apiClient=t}async getVideosOperation(t){const s=t.operation,a=t.config;if(s.name===void 0||s.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const r=s.name.split("/operations/")[0];let d;a&&"httpOptions"in a&&(d=a.httpOptions);const m=await this.fetchPredictVideosOperationInternal({operationName:s.name,resourceName:r,config:{httpOptions:d}});return s._fromAPIResponse({apiResponse:m,_isVertexAI:!0})}else{const r=await this.getVideosOperationInternal({operationName:s.name,config:a});return s._fromAPIResponse({apiResponse:r,_isVertexAI:!1})}}async get(t){const s=t.operation,a=t.config;if(s.name===void 0||s.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const r=s.name.split("/operations/")[0];let d;a&&"httpOptions"in a&&(d=a.httpOptions);const m=await this.fetchPredictVideosOperationInternal({operationName:s.name,resourceName:r,config:{httpOptions:d}});return s._fromAPIResponse({apiResponse:m,_isVertexAI:!0})}else{const r=await this.getVideosOperationInternal({operationName:s.name,config:a});return s._fromAPIResponse({apiResponse:r,_isVertexAI:!1})}}async getVideosOperationInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=NS(t);return g=$("{operationName}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json()),m}else{const h=MS(t);return g=$("{operationName}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m}}async fetchPredictVideosOperationInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI()){const g=AS(t);return d=$("{resourceName}:fetchPredictOperation",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r}else throw new Error("This method is only supported by the Vertex AI.")}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function F_(o){const t={},s=u(o,["data"]);if(s!=null&&c(t,["data"],s),u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function q_(o){const t={},s=u(o,["parts"]);if(s!=null){let r=s;Array.isArray(r)&&(r=r.map(d=>$_(d))),c(t,["parts"],r)}const a=u(o,["role"]);return a!=null&&c(t,["role"],a),t}function V_(o,t,s){const a={},r=u(t,["expireTime"]);s!==void 0&&r!=null&&c(s,["expireTime"],r);const d=u(t,["newSessionExpireTime"]);s!==void 0&&d!=null&&c(s,["newSessionExpireTime"],d);const m=u(t,["uses"]);s!==void 0&&m!=null&&c(s,["uses"],m);const g=u(t,["liveConnectConstraints"]);s!==void 0&&g!=null&&c(s,["bidiGenerateContentSetup"],W_(o,g));const y=u(t,["lockAdditionalFields"]);return s!==void 0&&y!=null&&c(s,["fieldMask"],y),a}function z_(o,t){const s={},a=u(t,["config"]);return a!=null&&c(s,["config"],V_(o,a,s)),s}function Y_(o){const t={};if(u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const s=u(o,["fileUri"]);s!=null&&c(t,["fileUri"],s);const a=u(o,["mimeType"]);return a!=null&&c(t,["mimeType"],a),t}function J_(o){const t={},s=u(o,["id"]);s!=null&&c(t,["id"],s);const a=u(o,["args"]);a!=null&&c(t,["args"],a);const r=u(o,["name"]);if(r!=null&&c(t,["name"],r),u(o,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(o,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function K_(o){const t={};if(u(o,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const s=u(o,["enableWidget"]);return s!=null&&c(t,["enableWidget"],s),t}function X_(o){const t={};if(u(o,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(u(o,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const s=u(o,["timeRangeFilter"]);return s!=null&&c(t,["timeRangeFilter"],s),t}function Q_(o,t){const s={},a=u(o,["generationConfig"]);t!==void 0&&a!=null&&c(t,["setup","generationConfig"],a);const r=u(o,["responseModalities"]);t!==void 0&&r!=null&&c(t,["setup","generationConfig","responseModalities"],r);const d=u(o,["temperature"]);t!==void 0&&d!=null&&c(t,["setup","generationConfig","temperature"],d);const m=u(o,["topP"]);t!==void 0&&m!=null&&c(t,["setup","generationConfig","topP"],m);const g=u(o,["topK"]);t!==void 0&&g!=null&&c(t,["setup","generationConfig","topK"],g);const y=u(o,["maxOutputTokens"]);t!==void 0&&y!=null&&c(t,["setup","generationConfig","maxOutputTokens"],y);const h=u(o,["mediaResolution"]);t!==void 0&&h!=null&&c(t,["setup","generationConfig","mediaResolution"],h);const v=u(o,["seed"]);t!==void 0&&v!=null&&c(t,["setup","generationConfig","seed"],v);const T=u(o,["speechConfig"]);t!==void 0&&T!=null&&c(t,["setup","generationConfig","speechConfig"],Bu(T));const C=u(o,["thinkingConfig"]);t!==void 0&&C!=null&&c(t,["setup","generationConfig","thinkingConfig"],C);const A=u(o,["enableAffectiveDialog"]);t!==void 0&&A!=null&&c(t,["setup","generationConfig","enableAffectiveDialog"],A);const U=u(o,["systemInstruction"]);t!==void 0&&U!=null&&c(t,["setup","systemInstruction"],q_(st(U)));const M=u(o,["tools"]);if(t!==void 0&&M!=null){let te=oi(M);Array.isArray(te)&&(te=te.map(K=>j_(ni(K)))),c(t,["setup","tools"],te)}const I=u(o,["sessionResumption"]);t!==void 0&&I!=null&&c(t,["setup","sessionResumption"],Z_(I));const D=u(o,["inputAudioTranscription"]);t!==void 0&&D!=null&&c(t,["setup","inputAudioTranscription"],D);const V=u(o,["outputAudioTranscription"]);t!==void 0&&V!=null&&c(t,["setup","outputAudioTranscription"],V);const B=u(o,["realtimeInputConfig"]);t!==void 0&&B!=null&&c(t,["setup","realtimeInputConfig"],B);const X=u(o,["contextWindowCompression"]);t!==void 0&&X!=null&&c(t,["setup","contextWindowCompression"],X);const Z=u(o,["proactivity"]);if(t!==void 0&&Z!=null&&c(t,["setup","proactivity"],Z),u(o,["explicitVadSignal"])!==void 0)throw new Error("explicitVadSignal parameter is not supported in Gemini API.");return s}function W_(o,t){const s={},a=u(t,["model"]);a!=null&&c(s,["setup","model"],Ae(o,a));const r=u(t,["config"]);return r!=null&&c(s,["config"],Q_(r,s)),s}function $_(o){const t={},s=u(o,["mediaResolution"]);s!=null&&c(t,["mediaResolution"],s);const a=u(o,["codeExecutionResult"]);a!=null&&c(t,["codeExecutionResult"],a);const r=u(o,["executableCode"]);r!=null&&c(t,["executableCode"],r);const d=u(o,["fileData"]);d!=null&&c(t,["fileData"],Y_(d));const m=u(o,["functionCall"]);m!=null&&c(t,["functionCall"],J_(m));const g=u(o,["functionResponse"]);g!=null&&c(t,["functionResponse"],g);const y=u(o,["inlineData"]);y!=null&&c(t,["inlineData"],F_(y));const h=u(o,["text"]);h!=null&&c(t,["text"],h);const v=u(o,["thought"]);v!=null&&c(t,["thought"],v);const T=u(o,["thoughtSignature"]);T!=null&&c(t,["thoughtSignature"],T);const C=u(o,["videoMetadata"]);return C!=null&&c(t,["videoMetadata"],C),t}function Z_(o){const t={},s=u(o,["handle"]);if(s!=null&&c(t,["handle"],s),u(o,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return t}function j_(o){const t={},s=u(o,["functionDeclarations"]);if(s!=null){let v=s;Array.isArray(v)&&(v=v.map(T=>T)),c(t,["functionDeclarations"],v)}if(u(o,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const a=u(o,["googleSearchRetrieval"]);a!=null&&c(t,["googleSearchRetrieval"],a);const r=u(o,["computerUse"]);r!=null&&c(t,["computerUse"],r);const d=u(o,["fileSearch"]);d!=null&&c(t,["fileSearch"],d);const m=u(o,["codeExecution"]);if(m!=null&&c(t,["codeExecution"],m),u(o,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const g=u(o,["googleMaps"]);g!=null&&c(t,["googleMaps"],K_(g));const y=u(o,["googleSearch"]);y!=null&&c(t,["googleSearch"],X_(y));const h=u(o,["urlContext"]);return h!=null&&c(t,["urlContext"],h),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function eb(o){const t=[];for(const s in o)if(Object.prototype.hasOwnProperty.call(o,s)){const a=o[s];if(typeof a=="object"&&a!=null&&Object.keys(a).length>0){const r=Object.keys(a).map(d=>`${s}.${d}`);t.push(...r)}else t.push(s)}return t.join(",")}function tb(o,t){let s=null;const a=o.bidiGenerateContentSetup;if(typeof a=="object"&&a!==null&&"setup"in a){const d=a.setup;typeof d=="object"&&d!==null?(o.bidiGenerateContentSetup=d,s=d):delete o.bidiGenerateContentSetup}else a!==void 0&&delete o.bidiGenerateContentSetup;const r=o.fieldMask;if(s){const d=eb(s);if(Array.isArray(t==null?void 0:t.lockAdditionalFields)&&(t==null?void 0:t.lockAdditionalFields.length)===0)d?o.fieldMask=d:delete o.fieldMask;else if(t!=null&&t.lockAdditionalFields&&t.lockAdditionalFields.length>0&&r!==null&&Array.isArray(r)&&r.length>0){const m=["temperature","topK","topP","maxOutputTokens","responseModalities","seed","speechConfig"];let g=[];r.length>0&&(g=r.map(h=>m.includes(h)?`generationConfig.${h}`:h));const y=[];d&&y.push(d),g.length>0&&y.push(...g),y.length>0?o.fieldMask=y.join(","):delete o.fieldMask}else delete o.fieldMask}else r!==null&&Array.isArray(r)&&r.length>0?o.fieldMask=r.join(","):delete o.fieldMask;return o}class nb extends gn{constructor(t){super(),this.apiClient=t}async create(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("The client.tokens.create method is only supported by the Gemini Developer API.");{const g=z_(this.apiClient,t);d=$("auth_tokens",g._url),m=g._query,delete g.config,delete g._url,delete g._query;const y=tb(g,t.config);return r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(y),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(h=>h.json()),r.then(h=>h)}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ob(o,t){const s={},a=u(o,["force"]);return t!==void 0&&a!=null&&c(t,["_query","force"],a),s}function ib(o){const t={},s=u(o,["name"]);s!=null&&c(t,["_url","name"],s);const a=u(o,["config"]);return a!=null&&ob(a,t),t}function sb(o){const t={},s=u(o,["name"]);return s!=null&&c(t,["_url","name"],s),t}function ab(o,t){const s={},a=u(o,["pageSize"]);t!==void 0&&a!=null&&c(t,["_query","pageSize"],a);const r=u(o,["pageToken"]);return t!==void 0&&r!=null&&c(t,["_query","pageToken"],r),s}function lb(o){const t={},s=u(o,["parent"]);s!=null&&c(t,["_url","parent"],s);const a=u(o,["config"]);return a!=null&&ab(a,t),t}function rb(o){const t={},s=u(o,["sdkHttpResponse"]);s!=null&&c(t,["sdkHttpResponse"],s);const a=u(o,["nextPageToken"]);a!=null&&c(t,["nextPageToken"],a);const r=u(o,["documents"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["documents"],d)}return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ub extends gn{constructor(t){super(),this.apiClient=t,this.list=async s=>new fo(hn.PAGED_ITEM_DOCUMENTS,a=>this.listInternal({parent:s.parent,config:a.config}),await this.listInternal(s),s)}async get(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=sb(t);return d=$("{name}",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>y)}}async delete(t){var s,a;let r="",d={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=ib(t);r=$("{name}",m._url),d=m._query,delete m._url,delete m._query,await this.apiClient.request({path:r,queryParams:d,body:JSON.stringify(m),httpMethod:"DELETE",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal})}}async listInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=lb(t);return d=$("{parent}/documents",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>{const h=rb(y),v=new qS;return Object.assign(v,h),v})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class cb extends gn{constructor(t,s=new ub(t)){super(),this.apiClient=t,this.documents=s,this.list=async(a={})=>new fo(hn.PAGED_ITEM_FILE_SEARCH_STORES,r=>this.listInternal(r),await this.listInternal(a),a)}async uploadToFileSearchStore(t){if(this.apiClient.isVertexAI())throw new Error("Vertex AI does not support uploading files to a file search store.");return this.apiClient.uploadFileToFileSearchStore(t.fileSearchStoreName,t.file,t.config)}async create(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=e_(t);return d=$("fileSearchStores",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>y)}}async get(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=o_(t);return d=$("{name}",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>y)}}async delete(t){var s,a;let r="",d={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=n_(t);r=$("{name}",m._url),d=m._query,delete m._url,delete m._query,await this.apiClient.request({path:r,queryParams:d,body:JSON.stringify(m),httpMethod:"DELETE",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal})}}async listInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=u_(t);return d=$("fileSearchStores",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>{const h=c_(y),v=new VS;return Object.assign(v,h),v})}}async uploadToFileSearchStoreInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=d_(t);return d=$("upload/v1beta/{file_search_store_name}:uploadToFileSearchStore",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>{const h=f_(y),v=new zS;return Object.assign(v,h),v})}}async importFile(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=a_(t);return d=$("{file_search_store_name}:importFile",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json()),r.then(y=>{const h=s_(y),v=new ku;return Object.assign(v,h),v})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let mg=function(){const{crypto:o}=globalThis;if(o!=null&&o.randomUUID)return mg=o.randomUUID.bind(o),o.randomUUID();const t=new Uint8Array(1),s=o?()=>o.getRandomValues(t)[0]:()=>Math.random()*255&255;return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,a=>(+a^s()&15>>+a/4).toString(16))};const db=()=>mg();/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function wu(o){return typeof o=="object"&&o!==null&&("name"in o&&o.name==="AbortError"||"message"in o&&String(o.message).includes("FetchRequestCanceledException"))}const Ru=o=>{if(o instanceof Error)return o;if(typeof o=="object"&&o!==null){try{if(Object.prototype.toString.call(o)==="[object Error]"){const t=new Error(o.message,o.cause?{cause:o.cause}:{});return o.stack&&(t.stack=o.stack),o.cause&&!t.cause&&(t.cause=o.cause),o.name&&(t.name=o.name),t}}catch{}try{return new Error(JSON.stringify(o))}catch{}}return new Error(o)};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ht extends Error{}class ut extends Ht{constructor(t,s,a,r){super(`${ut.makeMessage(t,s,a)}`),this.status=t,this.headers=r,this.error=s}static makeMessage(t,s,a){const r=s!=null&&s.message?typeof s.message=="string"?s.message:JSON.stringify(s.message):s?JSON.stringify(s):a;return t&&r?`${t} ${r}`:t?`${t} status code (no body)`:r||"(no status code or body)"}static generate(t,s,a,r){if(!t||!r)return new Oa({message:a,cause:Ru(s)});const d=s;return t===400?new gg(t,d,a,r):t===401?new yg(t,d,a,r):t===403?new vg(t,d,a,r):t===404?new Sg(t,d,a,r):t===409?new Tg(t,d,a,r):t===422?new Cg(t,d,a,r):t===429?new Eg(t,d,a,r):t>=500?new Ag(t,d,a,r):new ut(t,d,a,r)}}class xu extends ut{constructor({message:t}={}){super(void 0,void 0,t||"Request was aborted.",void 0)}}class Oa extends ut{constructor({message:t,cause:s}){super(void 0,void 0,t||"Connection error.",void 0),s&&(this.cause=s)}}class hg extends Oa{constructor({message:t}={}){super({message:t??"Request timed out."})}}class gg extends ut{}class yg extends ut{}class vg extends ut{}class Sg extends ut{}class Tg extends ut{}class Cg extends ut{}class Eg extends ut{}class Ag extends ut{}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const fb=/^[a-z][a-z0-9+.-]*:/i,pb=o=>fb.test(o);let Iu=o=>(Iu=Array.isArray,Iu(o));const mb=Iu;let hb=mb;const Mh=hb;function gb(o){if(!o)return!0;for(const t in o)return!1;return!0}function yb(o,t){return Object.prototype.hasOwnProperty.call(o,t)}const vb=(o,t)=>{if(typeof t!="number"||!Number.isInteger(t))throw new Ht(`${o} must be an integer`);if(t<0)throw new Ht(`${o} must be a positive integer`);return t},Sb=o=>{try{return JSON.parse(o)}catch{return}};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Tb=o=>new Promise(t=>setTimeout(t,o));/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const $o="0.0.1";/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Cb(){return typeof Deno<"u"&&Deno.build!=null?"deno":typeof EdgeRuntime<"u"?"edge":Object.prototype.toString.call(typeof globalThis.process<"u"?globalThis.process:0)==="[object process]"?"node":"unknown"}const Eb=()=>{var o,t,s,a,r;const d=Cb();if(d==="deno")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":$o,"X-Stainless-OS":Ph(Deno.build.os),"X-Stainless-Arch":Nh(Deno.build.arch),"X-Stainless-Runtime":"deno","X-Stainless-Runtime-Version":typeof Deno.version=="string"?Deno.version:(t=(o=Deno.version)===null||o===void 0?void 0:o.deno)!==null&&t!==void 0?t:"unknown"};if(typeof EdgeRuntime<"u")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":$o,"X-Stainless-OS":"Unknown","X-Stainless-Arch":`other:${EdgeRuntime}`,"X-Stainless-Runtime":"edge","X-Stainless-Runtime-Version":globalThis.process.version};if(d==="node")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":$o,"X-Stainless-OS":Ph((s=globalThis.process.platform)!==null&&s!==void 0?s:"unknown"),"X-Stainless-Arch":Nh((a=globalThis.process.arch)!==null&&a!==void 0?a:"unknown"),"X-Stainless-Runtime":"node","X-Stainless-Runtime-Version":(r=globalThis.process.version)!==null&&r!==void 0?r:"unknown"};const m=Ab();return m?{"X-Stainless-Lang":"js","X-Stainless-Package-Version":$o,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":`browser:${m.browser}`,"X-Stainless-Runtime-Version":m.version}:{"X-Stainless-Lang":"js","X-Stainless-Package-Version":$o,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":"unknown","X-Stainless-Runtime-Version":"unknown"}};function Ab(){if(typeof navigator>"u"||!navigator)return null;const o=[{key:"edge",pattern:/Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"chrome",pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"firefox",pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"safari",pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}];for(const{key:t,pattern:s}of o){const a=s.exec(navigator.userAgent);if(a){const r=a[1]||0,d=a[2]||0,m=a[3]||0;return{browser:t,version:`${r}.${d}.${m}`}}}return null}const Nh=o=>o==="x32"?"x32":o==="x86_64"||o==="x64"?"x64":o==="arm"?"arm":o==="aarch64"||o==="arm64"?"arm64":o?`other:${o}`:"unknown",Ph=o=>(o=o.toLowerCase(),o.includes("ios")?"iOS":o==="android"?"Android":o==="darwin"?"MacOS":o==="win32"?"Windows":o==="freebsd"?"FreeBSD":o==="openbsd"?"OpenBSD":o==="linux"?"Linux":o?`Other:${o}`:"Unknown");let Ea;const _b=()=>Ea??(Ea=Eb());/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function bb(){if(typeof fetch<"u")return fetch;throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new GeminiNextGenAPIClient({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")}function _g(...o){const t=globalThis.ReadableStream;if(typeof t>"u")throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");return new t(...o)}function wb(o){let t=Symbol.asyncIterator in o?o[Symbol.asyncIterator]():o[Symbol.iterator]();return _g({start(){},async pull(s){const{done:a,value:r}=await t.next();a?s.close():s.enqueue(r)},async cancel(){var s;await((s=t.return)===null||s===void 0?void 0:s.call(t))}})}function bg(o){if(o[Symbol.asyncIterator])return o;const t=o.getReader();return{async next(){try{const s=await t.read();return s!=null&&s.done&&t.releaseLock(),s}catch(s){throw t.releaseLock(),s}},async return(){const s=t.cancel();return t.releaseLock(),await s,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}async function Rb(o){var t,s;if(o===null||typeof o!="object")return;if(o[Symbol.asyncIterator]){await((s=(t=o[Symbol.asyncIterator]()).return)===null||s===void 0?void 0:s.call(t));return}const a=o.getReader(),r=a.cancel();a.releaseLock(),await r}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const xb=({headers:o,body:t})=>({bodyHeaders:{"content-type":"application/json"},body:JSON.stringify(t)});/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const wg=()=>{var o;if(typeof File>"u"){const{process:t}=globalThis,s=typeof((o=t==null?void 0:t.versions)===null||o===void 0?void 0:o.node)=="string"&&parseInt(t.versions.node.split("."))<20;throw new Error("`File` is not defined as a global, which is required for file uploads."+(s?" Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`.":""))}};function pu(o,t,s){return wg(),new File(o,t??"unknown_file",s)}function Ib(o){return(typeof o=="object"&&o!==null&&("name"in o&&o.name&&String(o.name)||"url"in o&&o.url&&String(o.url)||"filename"in o&&o.filename&&String(o.filename)||"path"in o&&o.path&&String(o.path))||"").split(/[\\/]/).pop()||void 0}const Mb=o=>o!=null&&typeof o=="object"&&typeof o[Symbol.asyncIterator]=="function";/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Rg=o=>o!=null&&typeof o=="object"&&typeof o.size=="number"&&typeof o.type=="string"&&typeof o.text=="function"&&typeof o.slice=="function"&&typeof o.arrayBuffer=="function",Nb=o=>o!=null&&typeof o=="object"&&typeof o.name=="string"&&typeof o.lastModified=="number"&&Rg(o),Pb=o=>o!=null&&typeof o=="object"&&typeof o.url=="string"&&typeof o.blob=="function";async function Db(o,t,s){if(wg(),o=await o,Nb(o))return o instanceof File?o:pu([await o.arrayBuffer()],o.name);if(Pb(o)){const r=await o.blob();return t||(t=new URL(o.url).pathname.split(/[\\/]/).pop()),pu(await Mu(r),t,s)}const a=await Mu(o);if(t||(t=Ib(o)),!(s!=null&&s.type)){const r=a.find(d=>typeof d=="object"&&"type"in d&&d.type);typeof r=="string"&&(s=Object.assign(Object.assign({},s),{type:r}))}return pu(a,t,s)}async function Mu(o){var t,s,a,r,d;let m=[];if(typeof o=="string"||ArrayBuffer.isView(o)||o instanceof ArrayBuffer)m.push(o);else if(Rg(o))m.push(o instanceof Blob?o:await o.arrayBuffer());else if(Mb(o))try{for(var g=!0,y=Vt(o),h;h=await y.next(),t=h.done,!t;g=!0){r=h.value,g=!1;const v=r;m.push(...await Mu(v))}}catch(v){s={error:v}}finally{try{!g&&!t&&(a=y.return)&&await a.call(y)}finally{if(s)throw s.error}}else{const v=(d=o==null?void 0:o.constructor)===null||d===void 0?void 0:d.name;throw new Error(`Unexpected data type: ${typeof o}${v?`; constructor: ${v}`:""}${kb(o)}`)}return m}function kb(o){return typeof o!="object"||o===null?"":`; props: [${Object.getOwnPropertyNames(o).map(s=>`"${s}"`).join(", ")}]`}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class xg{constructor(t){this._client=t}}xg._key=[];/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ig(o){return o.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g,encodeURIComponent)}const Dh=Object.freeze(Object.create(null)),Ub=(o=Ig)=>(function(s,...a){if(s.length===1)return s[0];let r=!1;const d=[],m=s.reduce((v,T,C)=>{var A,U,M;/[?#]/.test(T)&&(r=!0);const I=a[C];let D=(r?encodeURIComponent:o)(""+I);return C!==a.length&&(I==null||typeof I=="object"&&I.toString===((M=Object.getPrototypeOf((U=Object.getPrototypeOf((A=I.hasOwnProperty)!==null&&A!==void 0?A:Dh))!==null&&U!==void 0?U:Dh))===null||M===void 0?void 0:M.toString))&&(D=I+"",d.push({start:v.length+T.length,length:D.length,error:`Value of type ${Object.prototype.toString.call(I).slice(8,-1)} is not a valid path parameter`})),v+T+(C===a.length?"":D)},""),g=m.split(/[?#]/,1)[0],y=new RegExp("(?<=^|\\/)(?:\\.|%2e){1,2}(?=\\/|$)","gi");let h;for(;(h=y.exec(g))!==null;)d.push({start:h.index,length:h[0].length,error:`Value "${h[0]}" can't be safely passed as a path parameter`});if(d.sort((v,T)=>v.start-T.start),d.length>0){let v=0;const T=d.reduce((C,A)=>{const U=" ".repeat(A.start-v),M="^".repeat(A.length);return v=A.start+A.length,C+U+M},"");throw new Ht(`Path parameters result in path with invalid segments:
${d.map(C=>C.error).join(`
`)}
${m}
${T}`)}return m}),Aa=Ub(Ig);/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Mg extends xg{create(t,s){var a;const{api_version:r=this._client.apiVersion}=t,d=Da(t,["api_version"]);if("model"in d&&"agent_config"in d)throw new Ht("Invalid request: specified `model` and `agent_config`. If specifying `model`, use `generation_config`.");if("agent"in d&&"generation_config"in d)throw new Ht("Invalid request: specified `agent` and `generation_config`. If specifying `agent`, use `agent_config`.");return this._client.post(Aa`/${r}/interactions`,Object.assign(Object.assign({body:d},s),{stream:(a=t.stream)!==null&&a!==void 0?a:!1}))}delete(t,s={},a){const{api_version:r=this._client.apiVersion}=s??{};return this._client.delete(Aa`/${r}/interactions/${t}`,a)}cancel(t,s={},a){const{api_version:r=this._client.apiVersion}=s??{};return this._client.post(Aa`/${r}/interactions/${t}/cancel`,a)}get(t,s={},a){var r;const d=s??{},{api_version:m=this._client.apiVersion}=d,g=Da(d,["api_version"]);return this._client.get(Aa`/${m}/interactions/${t}`,Object.assign(Object.assign({query:g},a),{stream:(r=s==null?void 0:s.stream)!==null&&r!==void 0?r:!1}))}}Mg._key=Object.freeze(["interactions"]);class Ng extends Mg{}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Lb(o){let t=0;for(const r of o)t+=r.length;const s=new Uint8Array(t);let a=0;for(const r of o)s.set(r,a),a+=r.length;return s}let _a;function Fu(o){let t;return(_a??(t=new globalThis.TextEncoder,_a=t.encode.bind(t)))(o)}let ba;function kh(o){let t;return(ba??(t=new globalThis.TextDecoder,ba=t.decode.bind(t)))(o)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Fa{constructor(){this.buffer=new Uint8Array,this.carriageReturnIndex=null}decode(t){if(t==null)return[];const s=t instanceof ArrayBuffer?new Uint8Array(t):typeof t=="string"?Fu(t):t;this.buffer=Lb([this.buffer,s]);const a=[];let r;for(;(r=Gb(this.buffer,this.carriageReturnIndex))!=null;){if(r.carriage&&this.carriageReturnIndex==null){this.carriageReturnIndex=r.index;continue}if(this.carriageReturnIndex!=null&&(r.index!==this.carriageReturnIndex+1||r.carriage)){a.push(kh(this.buffer.subarray(0,this.carriageReturnIndex-1))),this.buffer=this.buffer.subarray(this.carriageReturnIndex),this.carriageReturnIndex=null;continue}const d=this.carriageReturnIndex!==null?r.preceding-1:r.preceding,m=kh(this.buffer.subarray(0,d));a.push(m),this.buffer=this.buffer.subarray(r.index),this.carriageReturnIndex=null}return a}flush(){return this.buffer.length?this.decode(`
`):[]}}Fa.NEWLINE_CHARS=new Set([`
`,"\r"]);Fa.NEWLINE_REGEXP=/\r\n|[\n\r]/g;function Gb(o,t){for(let r=t??0;r<o.length;r++){if(o[r]===10)return{preceding:r,index:r+1,carriage:!1};if(o[r]===13)return{preceding:r,index:r+1,carriage:!0}}return null}function Hb(o){for(let a=0;a<o.length-1;a++){if(o[a]===10&&o[a+1]===10||o[a]===13&&o[a+1]===13)return a+2;if(o[a]===13&&o[a+1]===10&&a+3<o.length&&o[a+2]===13&&o[a+3]===10)return a+4}return-1}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ka={off:0,error:200,warn:300,info:400,debug:500},Uh=(o,t,s)=>{if(o){if(yb(ka,o))return o;rt(s).warn(`${t} was set to ${JSON.stringify(o)}, expected one of ${JSON.stringify(Object.keys(ka))}`)}};function ns(){}function wa(o,t,s){return!t||ka[o]>ka[s]?ns:t[o].bind(t)}const Bb={error:ns,warn:ns,info:ns,debug:ns};let Lh=new WeakMap;function rt(o){var t;const s=o.logger,a=(t=o.logLevel)!==null&&t!==void 0?t:"off";if(!s)return Bb;const r=Lh.get(s);if(r&&r[0]===a)return r[1];const d={error:wa("error",s,a),warn:wa("warn",s,a),info:wa("info",s,a),debug:wa("debug",s,a)};return Lh.set(s,[a,d]),d}const co=o=>(o.options&&(o.options=Object.assign({},o.options),delete o.options.headers),o.headers&&(o.headers=Object.fromEntries((o.headers instanceof Headers?[...o.headers]:Object.entries(o.headers)).map(([t,s])=>[t,t.toLowerCase()==="x-goog-api-key"||t.toLowerCase()==="authorization"||t.toLowerCase()==="cookie"||t.toLowerCase()==="set-cookie"?"***":s]))),"retryOfRequestLogID"in o&&(o.retryOfRequestLogID&&(o.retryOf=o.retryOfRequestLogID),delete o.retryOfRequestLogID),o);/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class jo{constructor(t,s,a){this.iterator=t,this.controller=s,this.client=a}static fromSSEResponse(t,s,a){let r=!1;const d=a?rt(a):console;function m(){return qt(this,arguments,function*(){var y,h,v,T;if(r)throw new Ht("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");r=!0;let C=!1;try{try{for(var A=!0,U=Vt(Ob(t,s)),M;M=yield le(U.next()),y=M.done,!y;A=!0){T=M.value,A=!1;const I=T;if(!C)if(I.data.startsWith("[DONE]")){C=!0;continue}else try{yield yield le(JSON.parse(I.data))}catch(D){throw d.error("Could not parse message into JSON:",I.data),d.error("From chunk:",I.raw),D}}}catch(I){h={error:I}}finally{try{!A&&!y&&(v=U.return)&&(yield le(v.call(U)))}finally{if(h)throw h.error}}C=!0}catch(I){if(wu(I))return yield le(void 0);throw I}finally{C||s.abort()}})}return new jo(m,s,a)}static fromReadableStream(t,s,a){let r=!1;function d(){return qt(this,arguments,function*(){var y,h,v,T;const C=new Fa,A=bg(t);try{for(var U=!0,M=Vt(A),I;I=yield le(M.next()),y=I.done,!y;U=!0){T=I.value,U=!1;const D=T;for(const V of C.decode(D))yield yield le(V)}}catch(D){h={error:D}}finally{try{!U&&!y&&(v=M.return)&&(yield le(v.call(M)))}finally{if(h)throw h.error}}for(const D of C.flush())yield yield le(D)})}function m(){return qt(this,arguments,function*(){var y,h,v,T;if(r)throw new Ht("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");r=!0;let C=!1;try{try{for(var A=!0,U=Vt(d()),M;M=yield le(U.next()),y=M.done,!y;A=!0){T=M.value,A=!1;const I=T;C||I&&(yield yield le(JSON.parse(I)))}}catch(I){h={error:I}}finally{try{!A&&!y&&(v=U.return)&&(yield le(v.call(U)))}finally{if(h)throw h.error}}C=!0}catch(I){if(wu(I))return yield le(void 0);throw I}finally{C||s.abort()}})}return new jo(m,s,a)}[Symbol.asyncIterator](){return this.iterator()}tee(){const t=[],s=[],a=this.iterator(),r=d=>({next:()=>{if(d.length===0){const m=a.next();t.push(m),s.push(m)}return d.shift()}});return[new jo(()=>r(t),this.controller,this.client),new jo(()=>r(s),this.controller,this.client)]}toReadableStream(){const t=this;let s;return _g({async start(){s=t[Symbol.asyncIterator]()},async pull(a){try{const{value:r,done:d}=await s.next();if(d)return a.close();const m=Fu(JSON.stringify(r)+`
`);a.enqueue(m)}catch(r){a.error(r)}},async cancel(){var a;await((a=s.return)===null||a===void 0?void 0:a.call(s))}})}}function Ob(o,t){return qt(this,arguments,function*(){var a,r,d,m;if(!o.body)throw t.abort(),typeof globalThis.navigator<"u"&&globalThis.navigator.product==="ReactNative"?new Ht("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api"):new Ht("Attempted to iterate over a response with no body");const g=new qb,y=new Fa,h=bg(o.body);try{for(var v=!0,T=Vt(Fb(h)),C;C=yield le(T.next()),a=C.done,!a;v=!0){m=C.value,v=!1;const A=m;for(const U of y.decode(A)){const M=g.decode(U);M&&(yield yield le(M))}}}catch(A){r={error:A}}finally{try{!v&&!a&&(d=T.return)&&(yield le(d.call(T)))}finally{if(r)throw r.error}}for(const A of y.flush()){const U=g.decode(A);U&&(yield yield le(U))}})}function Fb(o){return qt(this,arguments,function*(){var s,a,r,d;let m=new Uint8Array;try{for(var g=!0,y=Vt(o),h;h=yield le(y.next()),s=h.done,!s;g=!0){d=h.value,g=!1;const v=d;if(v==null)continue;const T=v instanceof ArrayBuffer?new Uint8Array(v):typeof v=="string"?Fu(v):v;let C=new Uint8Array(m.length+T.length);C.set(m),C.set(T,m.length),m=C;let A;for(;(A=Hb(m))!==-1;)yield yield le(m.slice(0,A)),m=m.slice(A)}}catch(v){a={error:v}}finally{try{!g&&!s&&(r=y.return)&&(yield le(r.call(y)))}finally{if(a)throw a.error}}m.length>0&&(yield yield le(m))})}class qb{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(t){if(t.endsWith("\r")&&(t=t.substring(0,t.length-1)),!t){if(!this.event&&!this.data.length)return null;const d={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],d}if(this.chunks.push(t),t.startsWith(":"))return null;let[s,a,r]=Vb(t,":");return r.startsWith(" ")&&(r=r.substring(1)),s==="event"?this.event=r:s==="data"&&this.data.push(r),null}}function Vb(o,t){const s=o.indexOf(t);return s!==-1?[o.substring(0,s),t,o.substring(s+t.length)]:[o,"",""]}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function zb(o,t){const{response:s,requestLogID:a,retryOfRequestLogID:r,startTime:d}=t,m=await(async()=>{var g;if(t.options.stream)return rt(o).debug("response",s.status,s.url,s.headers,s.body),t.options.__streamClass?t.options.__streamClass.fromSSEResponse(s,t.controller,o):jo.fromSSEResponse(s,t.controller,o);if(s.status===204)return null;if(t.options.__binaryResponse)return s;const y=s.headers.get("content-type"),h=(g=y==null?void 0:y.split(";")[0])===null||g===void 0?void 0:g.trim();return(h==null?void 0:h.includes("application/json"))||(h==null?void 0:h.endsWith("+json"))?await s.json():await s.text()})();return rt(o).debug(`[${a}] response parsed`,co({retryOfRequestLogID:r,url:s.url,status:s.status,body:m,durationMs:Date.now()-d})),m}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class qu extends Promise{constructor(t,s,a=zb){super(r=>{r(null)}),this.responsePromise=s,this.parseResponse=a,this.client=t}_thenUnwrap(t){return new qu(this.client,this.responsePromise,async(s,a)=>t(await this.parseResponse(s,a),a))}asResponse(){return this.responsePromise.then(t=>t.response)}async withResponse(){const[t,s]=await Promise.all([this.parse(),this.asResponse()]);return{data:t,response:s}}parse(){return this.parsedPromise||(this.parsedPromise=this.responsePromise.then(t=>this.parseResponse(this.client,t))),this.parsedPromise}then(t,s){return this.parse().then(t,s)}catch(t){return this.parse().catch(t)}finally(t){return this.parse().finally(t)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Pg=Symbol("brand.privateNullableHeaders");function*Yb(o){if(!o)return;if(Pg in o){const{values:a,nulls:r}=o;yield*a.entries();for(const d of r)yield[d,null];return}let t=!1,s;o instanceof Headers?s=o.entries():Mh(o)?s=o:(t=!0,s=Object.entries(o??{}));for(let a of s){const r=a[0];if(typeof r!="string")throw new TypeError("expected header name to be a string");const d=Mh(a[1])?a[1]:[a[1]];let m=!1;for(const g of d)g!==void 0&&(t&&!m&&(m=!0,yield[r,null]),yield[r,g])}}const ts=o=>{const t=new Headers,s=new Set;for(const a of o){const r=new Set;for(const[d,m]of Yb(a)){const g=d.toLowerCase();r.has(g)||(t.delete(d),r.add(g)),m===null?(t.delete(d),s.add(g)):(t.append(d,m),s.delete(g))}}return{[Pg]:!0,values:t,nulls:s}};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const mu=o=>{var t,s,a,r,d,m;if(typeof globalThis.process<"u")return(a=(s=(t=yS)===null||t===void 0?void 0:t[o])===null||s===void 0?void 0:s.trim())!==null&&a!==void 0?a:void 0;if(typeof globalThis.Deno<"u")return(m=(d=(r=globalThis.Deno.env)===null||r===void 0?void 0:r.get)===null||d===void 0?void 0:d.call(r,o))===null||m===void 0?void 0:m.trim()};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var Dg;class qa{constructor(t){var s,a,r,d,m,g,y,{baseURL:h=mu("GEMINI_NEXT_GEN_API_BASE_URL"),apiKey:v=(s=mu("GEMINI_API_KEY"))!==null&&s!==void 0?s:null,apiVersion:T="v1beta"}=t,C=Da(t,["baseURL","apiKey","apiVersion"]);const A=Object.assign(Object.assign({apiKey:v,apiVersion:T},C),{baseURL:h||"https://generativelanguage.googleapis.com"});this.baseURL=A.baseURL,this.timeout=(a=A.timeout)!==null&&a!==void 0?a:qa.DEFAULT_TIMEOUT,this.logger=(r=A.logger)!==null&&r!==void 0?r:console;const U="warn";this.logLevel=U,this.logLevel=(m=(d=Uh(A.logLevel,"ClientOptions.logLevel",this))!==null&&d!==void 0?d:Uh(mu("GEMINI_NEXT_GEN_API_LOG"),"process.env['GEMINI_NEXT_GEN_API_LOG']",this))!==null&&m!==void 0?m:U,this.fetchOptions=A.fetchOptions,this.maxRetries=(g=A.maxRetries)!==null&&g!==void 0?g:2,this.fetch=(y=A.fetch)!==null&&y!==void 0?y:bb(),this.encoder=xb,this._options=A,this.apiKey=v,this.apiVersion=T,this.clientAdapter=A.clientAdapter}withOptions(t){return new this.constructor(Object.assign(Object.assign(Object.assign({},this._options),{baseURL:this.baseURL,maxRetries:this.maxRetries,timeout:this.timeout,logger:this.logger,logLevel:this.logLevel,fetch:this.fetch,fetchOptions:this.fetchOptions,apiKey:this.apiKey,apiVersion:this.apiVersion}),t))}baseURLOverridden(){return this.baseURL!=="https://generativelanguage.googleapis.com"}defaultQuery(){return this._options.defaultQuery}validateHeaders({values:t,nulls:s}){if(!(t.has("authorization")||t.has("x-goog-api-key"))&&!(this.apiKey&&t.get("x-goog-api-key"))&&!s.has("x-goog-api-key"))throw new Error('Could not resolve authentication method. Expected the apiKey to be set. Or for the "x-goog-api-key" headers to be explicitly omitted')}async authHeaders(t){const s=ts([t.headers]);if(!(s.values.has("authorization")||s.values.has("x-goog-api-key"))){if(this.apiKey)return ts([{"x-goog-api-key":this.apiKey}]);if(this.clientAdapter.isVertexAI())return ts([await this.clientAdapter.getAuthHeaders()])}}stringifyQuery(t){return Object.entries(t).filter(([s,a])=>typeof a<"u").map(([s,a])=>{if(typeof a=="string"||typeof a=="number"||typeof a=="boolean")return`${encodeURIComponent(s)}=${encodeURIComponent(a)}`;if(a===null)return`${encodeURIComponent(s)}=`;throw new Ht(`Cannot stringify type ${typeof a}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)}).join("&")}getUserAgent(){return`${this.constructor.name}/JS ${$o}`}defaultIdempotencyKey(){return`stainless-node-retry-${db()}`}makeStatusError(t,s,a,r){return ut.generate(t,s,a,r)}buildURL(t,s,a){const r=!this.baseURLOverridden()&&a||this.baseURL,d=pb(t)?new URL(t):new URL(r+(r.endsWith("/")&&t.startsWith("/")?t.slice(1):t)),m=this.defaultQuery();return gb(m)||(s=Object.assign(Object.assign({},m),s)),typeof s=="object"&&s&&!Array.isArray(s)&&(d.search=this.stringifyQuery(s)),d.toString()}async prepareOptions(t){if(this.clientAdapter&&this.clientAdapter.isVertexAI()&&!t.path.startsWith(`/${this.apiVersion}/projects/`)){const s=t.path.slice(this.apiVersion.length+1);t.path=`/${this.apiVersion}/projects/${this.clientAdapter.getProject()}/locations/${this.clientAdapter.getLocation()}${s}`}}async prepareRequest(t,{url:s,options:a}){}get(t,s){return this.methodRequest("get",t,s)}post(t,s){return this.methodRequest("post",t,s)}patch(t,s){return this.methodRequest("patch",t,s)}put(t,s){return this.methodRequest("put",t,s)}delete(t,s){return this.methodRequest("delete",t,s)}methodRequest(t,s,a){return this.request(Promise.resolve(a).then(r=>Object.assign({method:t,path:s},r)))}request(t,s=null){return new qu(this,this.makeRequest(t,s,void 0))}async makeRequest(t,s,a){var r,d,m;const g=await t,y=(r=g.maxRetries)!==null&&r!==void 0?r:this.maxRetries;s==null&&(s=y),await this.prepareOptions(g);const{req:h,url:v,timeout:T}=await this.buildRequest(g,{retryCount:y-s});await this.prepareRequest(h,{url:v,options:g});const C="log_"+(Math.random()*(1<<24)|0).toString(16).padStart(6,"0"),A=a===void 0?"":`, retryOf: ${a}`,U=Date.now();if(rt(this).debug(`[${C}] sending request`,co({retryOfRequestLogID:a,method:g.method,url:v,options:g,headers:h.headers})),!((d=g.signal)===null||d===void 0)&&d.aborted)throw new xu;const M=new AbortController,I=await this.fetchWithTimeout(v,h,T,M).catch(Ru),D=Date.now();if(I instanceof globalThis.Error){const B=`retrying, ${s} attempts remaining`;if(!((m=g.signal)===null||m===void 0)&&m.aborted)throw new xu;const X=wu(I)||/timed? ?out/i.test(String(I)+("cause"in I?String(I.cause):""));if(s)return rt(this).info(`[${C}] connection ${X?"timed out":"failed"} - ${B}`),rt(this).debug(`[${C}] connection ${X?"timed out":"failed"} (${B})`,co({retryOfRequestLogID:a,url:v,durationMs:D-U,message:I.message})),this.retryRequest(g,s,a??C);throw rt(this).info(`[${C}] connection ${X?"timed out":"failed"} - error; no more retries left`),rt(this).debug(`[${C}] connection ${X?"timed out":"failed"} (error; no more retries left)`,co({retryOfRequestLogID:a,url:v,durationMs:D-U,message:I.message})),X?new hg:new Oa({cause:I})}const V=`[${C}${A}] ${h.method} ${v} ${I.ok?"succeeded":"failed"} with status ${I.status} in ${D-U}ms`;if(!I.ok){const B=await this.shouldRetry(I);if(s&&B){const Y=`retrying, ${s} attempts remaining`;return await Rb(I.body),rt(this).info(`${V} - ${Y}`),rt(this).debug(`[${C}] response error (${Y})`,co({retryOfRequestLogID:a,url:I.url,status:I.status,headers:I.headers,durationMs:D-U})),this.retryRequest(g,s,a??C,I.headers)}const X=B?"error; no more retries left":"error; not retryable";rt(this).info(`${V} - ${X}`);const Z=await I.text().catch(Y=>Ru(Y).message),te=Sb(Z),K=te?void 0:Z;throw rt(this).debug(`[${C}] response error (${X})`,co({retryOfRequestLogID:a,url:I.url,status:I.status,headers:I.headers,message:K,durationMs:Date.now()-U})),this.makeStatusError(I.status,te,K,I.headers)}return rt(this).info(V),rt(this).debug(`[${C}] response start`,co({retryOfRequestLogID:a,url:I.url,status:I.status,headers:I.headers,durationMs:D-U})),{response:I,options:g,controller:M,requestLogID:C,retryOfRequestLogID:a,startTime:U}}async fetchWithTimeout(t,s,a,r){const d=s||{},{signal:m,method:g}=d,y=Da(d,["signal","method"]);m&&m.addEventListener("abort",()=>r.abort());const h=setTimeout(()=>r.abort(),a),v=globalThis.ReadableStream&&y.body instanceof globalThis.ReadableStream||typeof y.body=="object"&&y.body!==null&&Symbol.asyncIterator in y.body,T=Object.assign(Object.assign(Object.assign({signal:r.signal},v?{duplex:"half"}:{}),{method:"GET"}),y);g&&(T.method=g.toUpperCase());try{return await this.fetch.call(void 0,t,T)}finally{clearTimeout(h)}}async shouldRetry(t){const s=t.headers.get("x-should-retry");return s==="true"?!0:s==="false"?!1:t.status===408||t.status===409||t.status===429||t.status>=500}async retryRequest(t,s,a,r){var d;let m;const g=r==null?void 0:r.get("retry-after-ms");if(g){const h=parseFloat(g);Number.isNaN(h)||(m=h)}const y=r==null?void 0:r.get("retry-after");if(y&&!m){const h=parseFloat(y);Number.isNaN(h)?m=Date.parse(y)-Date.now():m=h*1e3}if(!(m&&0<=m&&m<60*1e3)){const h=(d=t.maxRetries)!==null&&d!==void 0?d:this.maxRetries;m=this.calculateDefaultRetryTimeoutMillis(s,h)}return await Tb(m),this.makeRequest(t,s-1,a)}calculateDefaultRetryTimeoutMillis(t,s){const d=s-t,m=Math.min(.5*Math.pow(2,d),8),g=1-Math.random()*.25;return m*g*1e3}async buildRequest(t,{retryCount:s=0}={}){var a,r,d;const m=Object.assign({},t),{method:g,path:y,query:h,defaultBaseURL:v}=m,T=this.buildURL(y,h,v);"timeout"in m&&vb("timeout",m.timeout),m.timeout=(a=m.timeout)!==null&&a!==void 0?a:this.timeout;const{bodyHeaders:C,body:A}=this.buildBody({options:m}),U=await this.buildHeaders({options:t,method:g,bodyHeaders:C,retryCount:s});return{req:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({method:g,headers:U},m.signal&&{signal:m.signal}),globalThis.ReadableStream&&A instanceof globalThis.ReadableStream&&{duplex:"half"}),A&&{body:A}),(r=this.fetchOptions)!==null&&r!==void 0?r:{}),(d=m.fetchOptions)!==null&&d!==void 0?d:{}),url:T,timeout:m.timeout}}async buildHeaders({options:t,method:s,bodyHeaders:a,retryCount:r}){let d={};this.idempotencyHeader&&s!=="get"&&(t.idempotencyKey||(t.idempotencyKey=this.defaultIdempotencyKey()),d[this.idempotencyHeader]=t.idempotencyKey);const m=await this.authHeaders(t);let g=ts([d,Object.assign(Object.assign({Accept:"application/json","User-Agent":this.getUserAgent(),"X-Stainless-Retry-Count":String(r)},t.timeout?{"X-Stainless-Timeout":String(Math.trunc(t.timeout/1e3))}:{}),_b()),this._options.defaultHeaders,a,t.headers,m]);return this.validateHeaders(g),g.values}buildBody({options:{body:t,headers:s}}){if(!t)return{bodyHeaders:void 0,body:void 0};const a=ts([s]);return ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof DataView||typeof t=="string"&&a.values.has("content-type")||globalThis.Blob&&t instanceof globalThis.Blob||t instanceof FormData||t instanceof URLSearchParams||globalThis.ReadableStream&&t instanceof globalThis.ReadableStream?{bodyHeaders:void 0,body:t}:typeof t=="object"&&(Symbol.asyncIterator in t||Symbol.iterator in t&&"next"in t&&typeof t.next=="function")?{bodyHeaders:void 0,body:wb(t)}:this.encoder({body:t,headers:a})}}qa.DEFAULT_TIMEOUT=6e4;class Ze extends qa{constructor(){super(...arguments),this.interactions=new Ng(this)}}Dg=Ze;Ze.GeminiNextGenAPIClient=Dg;Ze.GeminiNextGenAPIClientError=Ht;Ze.APIError=ut;Ze.APIConnectionError=Oa;Ze.APIConnectionTimeoutError=hg;Ze.APIUserAbortError=xu;Ze.NotFoundError=Sg;Ze.ConflictError=Tg;Ze.RateLimitError=Eg;Ze.BadRequestError=gg;Ze.AuthenticationError=yg;Ze.InternalServerError=Ag;Ze.PermissionDeniedError=vg;Ze.UnprocessableEntityError=Cg;Ze.toFile=Db;Ze.Interactions=Ng;/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Jb(o,t){const s={},a=u(o,["name"]);return a!=null&&c(s,["_url","name"],a),s}function Kb(o,t){const s={},a=u(o,["name"]);return a!=null&&c(s,["_url","name"],a),s}function Xb(o,t){const s={},a=u(o,["sdkHttpResponse"]);return a!=null&&c(s,["sdkHttpResponse"],a),s}function Qb(o,t){const s={},a=u(o,["sdkHttpResponse"]);return a!=null&&c(s,["sdkHttpResponse"],a),s}function Wb(o,t,s){const a={};if(u(o,["validationDataset"])!==void 0)throw new Error("validationDataset parameter is not supported in Gemini API.");const r=u(o,["tunedModelDisplayName"]);if(t!==void 0&&r!=null&&c(t,["displayName"],r),u(o,["description"])!==void 0)throw new Error("description parameter is not supported in Gemini API.");const d=u(o,["epochCount"]);t!==void 0&&d!=null&&c(t,["tuningTask","hyperparameters","epochCount"],d);const m=u(o,["learningRateMultiplier"]);if(m!=null&&c(a,["tuningTask","hyperparameters","learningRateMultiplier"],m),u(o,["exportLastCheckpointOnly"])!==void 0)throw new Error("exportLastCheckpointOnly parameter is not supported in Gemini API.");if(u(o,["preTunedModelCheckpointId"])!==void 0)throw new Error("preTunedModelCheckpointId parameter is not supported in Gemini API.");if(u(o,["adapterSize"])!==void 0)throw new Error("adapterSize parameter is not supported in Gemini API.");const g=u(o,["batchSize"]);t!==void 0&&g!=null&&c(t,["tuningTask","hyperparameters","batchSize"],g);const y=u(o,["learningRate"]);if(t!==void 0&&y!=null&&c(t,["tuningTask","hyperparameters","learningRate"],y),u(o,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");if(u(o,["beta"])!==void 0)throw new Error("beta parameter is not supported in Gemini API.");return a}function $b(o,t,s){const a={};let r=u(s,["config","method"]);if(r===void 0&&(r="SUPERVISED_FINE_TUNING"),r==="SUPERVISED_FINE_TUNING"){const A=u(o,["validationDataset"]);t!==void 0&&A!=null&&c(t,["supervisedTuningSpec"],Gh(A))}else if(r==="PREFERENCE_TUNING"){const A=u(o,["validationDataset"]);t!==void 0&&A!=null&&c(t,["preferenceOptimizationSpec"],Gh(A))}const d=u(o,["tunedModelDisplayName"]);t!==void 0&&d!=null&&c(t,["tunedModelDisplayName"],d);const m=u(o,["description"]);t!==void 0&&m!=null&&c(t,["description"],m);let g=u(s,["config","method"]);if(g===void 0&&(g="SUPERVISED_FINE_TUNING"),g==="SUPERVISED_FINE_TUNING"){const A=u(o,["epochCount"]);t!==void 0&&A!=null&&c(t,["supervisedTuningSpec","hyperParameters","epochCount"],A)}else if(g==="PREFERENCE_TUNING"){const A=u(o,["epochCount"]);t!==void 0&&A!=null&&c(t,["preferenceOptimizationSpec","hyperParameters","epochCount"],A)}let y=u(s,["config","method"]);if(y===void 0&&(y="SUPERVISED_FINE_TUNING"),y==="SUPERVISED_FINE_TUNING"){const A=u(o,["learningRateMultiplier"]);t!==void 0&&A!=null&&c(t,["supervisedTuningSpec","hyperParameters","learningRateMultiplier"],A)}else if(y==="PREFERENCE_TUNING"){const A=u(o,["learningRateMultiplier"]);t!==void 0&&A!=null&&c(t,["preferenceOptimizationSpec","hyperParameters","learningRateMultiplier"],A)}let h=u(s,["config","method"]);if(h===void 0&&(h="SUPERVISED_FINE_TUNING"),h==="SUPERVISED_FINE_TUNING"){const A=u(o,["exportLastCheckpointOnly"]);t!==void 0&&A!=null&&c(t,["supervisedTuningSpec","exportLastCheckpointOnly"],A)}else if(h==="PREFERENCE_TUNING"){const A=u(o,["exportLastCheckpointOnly"]);t!==void 0&&A!=null&&c(t,["preferenceOptimizationSpec","exportLastCheckpointOnly"],A)}let v=u(s,["config","method"]);if(v===void 0&&(v="SUPERVISED_FINE_TUNING"),v==="SUPERVISED_FINE_TUNING"){const A=u(o,["adapterSize"]);t!==void 0&&A!=null&&c(t,["supervisedTuningSpec","hyperParameters","adapterSize"],A)}else if(v==="PREFERENCE_TUNING"){const A=u(o,["adapterSize"]);t!==void 0&&A!=null&&c(t,["preferenceOptimizationSpec","hyperParameters","adapterSize"],A)}if(u(o,["batchSize"])!==void 0)throw new Error("batchSize parameter is not supported in Vertex AI.");if(u(o,["learningRate"])!==void 0)throw new Error("learningRate parameter is not supported in Vertex AI.");const T=u(o,["labels"]);t!==void 0&&T!=null&&c(t,["labels"],T);const C=u(o,["beta"]);return t!==void 0&&C!=null&&c(t,["preferenceOptimizationSpec","hyperParameters","beta"],C),a}function Zb(o,t){const s={},a=u(o,["baseModel"]);a!=null&&c(s,["baseModel"],a);const r=u(o,["preTunedModel"]);r!=null&&c(s,["preTunedModel"],r);const d=u(o,["trainingDataset"]);d!=null&&uw(d);const m=u(o,["config"]);return m!=null&&Wb(m,s),s}function jb(o,t){const s={},a=u(o,["baseModel"]);a!=null&&c(s,["baseModel"],a);const r=u(o,["preTunedModel"]);r!=null&&c(s,["preTunedModel"],r);const d=u(o,["trainingDataset"]);d!=null&&cw(d,s,t);const m=u(o,["config"]);return m!=null&&$b(m,s,t),s}function ew(o,t){const s={},a=u(o,["name"]);return a!=null&&c(s,["_url","name"],a),s}function tw(o,t){const s={},a=u(o,["name"]);return a!=null&&c(s,["_url","name"],a),s}function nw(o,t,s){const a={},r=u(o,["pageSize"]);t!==void 0&&r!=null&&c(t,["_query","pageSize"],r);const d=u(o,["pageToken"]);t!==void 0&&d!=null&&c(t,["_query","pageToken"],d);const m=u(o,["filter"]);return t!==void 0&&m!=null&&c(t,["_query","filter"],m),a}function ow(o,t,s){const a={},r=u(o,["pageSize"]);t!==void 0&&r!=null&&c(t,["_query","pageSize"],r);const d=u(o,["pageToken"]);t!==void 0&&d!=null&&c(t,["_query","pageToken"],d);const m=u(o,["filter"]);return t!==void 0&&m!=null&&c(t,["_query","filter"],m),a}function iw(o,t){const s={},a=u(o,["config"]);return a!=null&&nw(a,s),s}function sw(o,t){const s={},a=u(o,["config"]);return a!=null&&ow(a,s),s}function aw(o,t){const s={},a=u(o,["sdkHttpResponse"]);a!=null&&c(s,["sdkHttpResponse"],a);const r=u(o,["nextPageToken"]);r!=null&&c(s,["nextPageToken"],r);const d=u(o,["tunedModels"]);if(d!=null){let m=d;Array.isArray(m)&&(m=m.map(g=>kg(g))),c(s,["tuningJobs"],m)}return s}function lw(o,t){const s={},a=u(o,["sdkHttpResponse"]);a!=null&&c(s,["sdkHttpResponse"],a);const r=u(o,["nextPageToken"]);r!=null&&c(s,["nextPageToken"],r);const d=u(o,["tuningJobs"]);if(d!=null){let m=d;Array.isArray(m)&&(m=m.map(g=>Nu(g))),c(s,["tuningJobs"],m)}return s}function rw(o,t){const s={},a=u(o,["name"]);a!=null&&c(s,["model"],a);const r=u(o,["name"]);return r!=null&&c(s,["endpoint"],r),s}function uw(o,t){const s={};if(u(o,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(u(o,["vertexDatasetResource"])!==void 0)throw new Error("vertexDatasetResource parameter is not supported in Gemini API.");const a=u(o,["examples"]);if(a!=null){let r=a;Array.isArray(r)&&(r=r.map(d=>d)),c(s,["examples","examples"],r)}return s}function cw(o,t,s){const a={};let r=u(s,["config","method"]);if(r===void 0&&(r="SUPERVISED_FINE_TUNING"),r==="SUPERVISED_FINE_TUNING"){const m=u(o,["gcsUri"]);t!==void 0&&m!=null&&c(t,["supervisedTuningSpec","trainingDatasetUri"],m)}else if(r==="PREFERENCE_TUNING"){const m=u(o,["gcsUri"]);t!==void 0&&m!=null&&c(t,["preferenceOptimizationSpec","trainingDatasetUri"],m)}let d=u(s,["config","method"]);if(d===void 0&&(d="SUPERVISED_FINE_TUNING"),d==="SUPERVISED_FINE_TUNING"){const m=u(o,["vertexDatasetResource"]);t!==void 0&&m!=null&&c(t,["supervisedTuningSpec","trainingDatasetUri"],m)}else if(d==="PREFERENCE_TUNING"){const m=u(o,["vertexDatasetResource"]);t!==void 0&&m!=null&&c(t,["preferenceOptimizationSpec","trainingDatasetUri"],m)}if(u(o,["examples"])!==void 0)throw new Error("examples parameter is not supported in Vertex AI.");return a}function kg(o,t){const s={},a=u(o,["sdkHttpResponse"]);a!=null&&c(s,["sdkHttpResponse"],a);const r=u(o,["name"]);r!=null&&c(s,["name"],r);const d=u(o,["state"]);d!=null&&c(s,["state"],Wh(d));const m=u(o,["createTime"]);m!=null&&c(s,["createTime"],m);const g=u(o,["tuningTask","startTime"]);g!=null&&c(s,["startTime"],g);const y=u(o,["tuningTask","completeTime"]);y!=null&&c(s,["endTime"],y);const h=u(o,["updateTime"]);h!=null&&c(s,["updateTime"],h);const v=u(o,["description"]);v!=null&&c(s,["description"],v);const T=u(o,["baseModel"]);T!=null&&c(s,["baseModel"],T);const C=u(o,["_self"]);return C!=null&&c(s,["tunedModel"],rw(C)),s}function Nu(o,t){const s={},a=u(o,["sdkHttpResponse"]);a!=null&&c(s,["sdkHttpResponse"],a);const r=u(o,["name"]);r!=null&&c(s,["name"],r);const d=u(o,["state"]);d!=null&&c(s,["state"],Wh(d));const m=u(o,["createTime"]);m!=null&&c(s,["createTime"],m);const g=u(o,["startTime"]);g!=null&&c(s,["startTime"],g);const y=u(o,["endTime"]);y!=null&&c(s,["endTime"],y);const h=u(o,["updateTime"]);h!=null&&c(s,["updateTime"],h);const v=u(o,["error"]);v!=null&&c(s,["error"],v);const T=u(o,["description"]);T!=null&&c(s,["description"],T);const C=u(o,["baseModel"]);C!=null&&c(s,["baseModel"],C);const A=u(o,["tunedModel"]);A!=null&&c(s,["tunedModel"],A);const U=u(o,["preTunedModel"]);U!=null&&c(s,["preTunedModel"],U);const M=u(o,["supervisedTuningSpec"]);M!=null&&c(s,["supervisedTuningSpec"],M);const I=u(o,["preferenceOptimizationSpec"]);I!=null&&c(s,["preferenceOptimizationSpec"],I);const D=u(o,["tuningDataStats"]);D!=null&&c(s,["tuningDataStats"],D);const V=u(o,["encryptionSpec"]);V!=null&&c(s,["encryptionSpec"],V);const B=u(o,["partnerModelTuningSpec"]);B!=null&&c(s,["partnerModelTuningSpec"],B);const X=u(o,["customBaseModel"]);X!=null&&c(s,["customBaseModel"],X);const Z=u(o,["experiment"]);Z!=null&&c(s,["experiment"],Z);const te=u(o,["labels"]);te!=null&&c(s,["labels"],te);const K=u(o,["outputUri"]);K!=null&&c(s,["outputUri"],K);const Q=u(o,["pipelineJob"]);Q!=null&&c(s,["pipelineJob"],Q);const Y=u(o,["serviceAccount"]);Y!=null&&c(s,["serviceAccount"],Y);const z=u(o,["tunedModelDisplayName"]);z!=null&&c(s,["tunedModelDisplayName"],z);const j=u(o,["veoTuningSpec"]);return j!=null&&c(s,["veoTuningSpec"],j),s}function dw(o,t){const s={},a=u(o,["sdkHttpResponse"]);a!=null&&c(s,["sdkHttpResponse"],a);const r=u(o,["name"]);r!=null&&c(s,["name"],r);const d=u(o,["metadata"]);d!=null&&c(s,["metadata"],d);const m=u(o,["done"]);m!=null&&c(s,["done"],m);const g=u(o,["error"]);return g!=null&&c(s,["error"],g),s}function Gh(o,t){const s={},a=u(o,["gcsUri"]);a!=null&&c(s,["validationDatasetUri"],a);const r=u(o,["vertexDatasetResource"]);return r!=null&&c(s,["validationDatasetUri"],r),s}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class fw extends gn{constructor(t){super(),this.apiClient=t,this.list=async(s={})=>new fo(hn.PAGED_ITEM_TUNING_JOBS,a=>this.listInternal(a),await this.listInternal(s),s),this.get=async s=>await this.getInternal(s),this.tune=async s=>{var a;if(this.apiClient.isVertexAI())if(s.baseModel.startsWith("projects/")){const r={tunedModelName:s.baseModel};!((a=s.config)===null||a===void 0)&&a.preTunedModelCheckpointId&&(r.checkpointId=s.config.preTunedModelCheckpointId);const d=Object.assign(Object.assign({},s),{preTunedModel:r});return d.baseModel=void 0,await this.tuneInternal(d)}else{const r=Object.assign({},s);return await this.tuneInternal(r)}else{const r=Object.assign({},s),d=await this.tuneMldevInternal(r);let m="";return d.metadata!==void 0&&d.metadata.tunedModel!==void 0?m=d.metadata.tunedModel:d.name!==void 0&&d.name.includes("/operations/")&&(m=d.name.split("/operations/")[0]),{name:m,state:Su.JOB_STATE_QUEUED}}}}async getInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=tw(t);return g=$("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>Nu(v))}else{const h=ew(t);return g=$("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>kg(v))}}async listInternal(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=sw(t);return g=$("tuningJobs",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=lw(v),C=new uh;return Object.assign(C,T),C})}else{const h=iw(t);return g=$("tunedModels",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=aw(v),C=new uh;return Object.assign(C,T),C})}}async cancel(t){var s,a,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=Kb(t);return g=$("{name}:cancel",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=Qb(v),C=new ch;return Object.assign(C,T),C})}else{const h=Jb(t);return g=$("{name}:cancel",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const C=T;return C.sdkHttpResponse={headers:v.headers},C})),m.then(v=>{const T=Xb(v),C=new ch;return Object.assign(C,T),C})}}async tuneInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI()){const g=jb(t,t);return d=$("tuningJobs",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json().then(h=>{const v=h;return v.sdkHttpResponse={headers:y.headers},v})),r.then(y=>Nu(y))}else throw new Error("This method is only supported by the Vertex AI.")}async tuneMldevInternal(t){var s,a;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=Zb(t);return d=$("tunedModels",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(s=t.config)===null||s===void 0?void 0:s.httpOptions,abortSignal:(a=t.config)===null||a===void 0?void 0:a.abortSignal}).then(y=>y.json().then(h=>{const v=h;return v.sdkHttpResponse={headers:y.headers},v})),r.then(y=>dw(y))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class pw{async download(t,s){throw new Error("Download to file is not supported in the browser, please use a browser compliant download like an <a> tag.")}}const mw=1024*1024*8,hw=3,gw=1e3,yw=2,Ua="x-goog-upload-status";async function vw(o,t,s){var a;const r=await Ug(o,t,s),d=await(r==null?void 0:r.json());if(((a=r==null?void 0:r.headers)===null||a===void 0?void 0:a[Ua])!=="final")throw new Error("Failed to upload file: Upload status is not finalized.");return d.file}async function Sw(o,t,s){var a;const r=await Ug(o,t,s),d=await(r==null?void 0:r.json());if(((a=r==null?void 0:r.headers)===null||a===void 0?void 0:a[Ua])!=="final")throw new Error("Failed to upload file: Upload status is not finalized.");const m=zh(d),g=new Uu;return Object.assign(g,m),g}async function Ug(o,t,s){var a,r;let d=0,m=0,g=new Tu(new Response),y="upload";for(d=o.size;m<d;){const h=Math.min(mw,d-m),v=o.slice(m,m+h);m+h>=d&&(y+=", finalize");let T=0,C=gw;for(;T<hw&&(g=await s.request({path:"",body:v,httpMethod:"POST",httpOptions:{apiVersion:"",baseUrl:t,headers:{"X-Goog-Upload-Command":y,"X-Goog-Upload-Offset":String(m),"Content-Length":String(h)}}}),!(!((a=g==null?void 0:g.headers)===null||a===void 0)&&a[Ua]));)T++,await Cw(C),C=C*yw;if(m+=h,((r=g==null?void 0:g.headers)===null||r===void 0?void 0:r[Ua])!=="active")break;if(d<=m)throw new Error("All content has been uploaded, but the upload status is not finalized.")}return g}async function Tw(o){return{size:o.size,type:o.type}}function Cw(o){return new Promise(t=>setTimeout(t,o))}class Ew{async upload(t,s,a){if(typeof t=="string")throw new Error("File path is not supported in browser uploader.");return await vw(t,s,a)}async uploadToFileSearchStore(t,s,a){if(typeof t=="string")throw new Error("File path is not supported in browser uploader.");return await Sw(t,s,a)}async stat(t){if(typeof t=="string")throw new Error("File path is not supported in browser uploader.");return await Tw(t)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Aw{create(t,s,a){return new _w(t,s,a)}}class _w{constructor(t,s,a){this.url=t,this.headers=s,this.callbacks=a}connect(){this.ws=new WebSocket(this.url),this.ws.onopen=this.callbacks.onopen,this.ws.onerror=this.callbacks.onerror,this.ws.onclose=this.callbacks.onclose,this.ws.onmessage=this.callbacks.onmessage}send(t){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.send(t)}close(){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.close()}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Hh="x-goog-api-key";class bw{constructor(t){this.apiKey=t}async addAuthHeaders(t,s){if(t.get(Hh)===null){if(this.apiKey.startsWith("auth_tokens/"))throw new Error("Ephemeral tokens are only supported by the live API.");if(!this.apiKey)throw new Error("API key is missing. Please provide a valid API key.");t.append(Hh,this.apiKey)}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const ww="gl-node/";class Rw{get interactions(){if(this._interactions!==void 0)return this._interactions;console.warn("GoogleGenAI.interactions: Interactions usage is experimental and may change in future versions.");const t=this.httpOptions;t!=null&&t.extraBody&&console.warn("GoogleGenAI.interactions: Client level httpOptions.extraBody is not supported by the interactions client and will be ignored.");const s=new Ze({baseURL:this.apiClient.getBaseUrl(),apiKey:this.apiKey,apiVersion:this.apiClient.getApiVersion(),clientAdapter:this.apiClient,defaultHeaders:this.apiClient.getDefaultHeaders(),timeout:t==null?void 0:t.timeout});return this._interactions=s.interactions,this._interactions}constructor(t){var s;if(t.apiKey==null)throw new Error("An API Key must be set when running in a browser");if(t.project||t.location)throw new Error("Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location.");this.vertexai=(s=t.vertexai)!==null&&s!==void 0?s:!1,this.apiKey=t.apiKey;const a=CS(t.httpOptions,t.vertexai,void 0,void 0);a&&(t.httpOptions?t.httpOptions.baseUrl=a:t.httpOptions={baseUrl:a}),this.apiVersion=t.apiVersion,this.httpOptions=t.httpOptions;const r=new bw(this.apiKey);this.apiClient=new T_({auth:r,apiVersion:this.apiVersion,apiKey:this.apiKey,vertexai:this.vertexai,httpOptions:this.httpOptions,userAgentExtra:ww+"web",uploader:new Ew,downloader:new pw}),this.models=new B_(this.apiClient),this.live=new D_(this.apiClient,r,new Aw),this.batches=new WT(this.apiClient),this.chats=new NC(this.models,this.apiClient),this.caches=new xC(this.apiClient),this.files=new FC(this.apiClient),this.operations=new O_(this.apiClient),this.authTokens=new nb(this.apiClient),this.tunings=new fw(this.apiClient),this.fileSearchStores=new cb(this.apiClient)}}const xw=async o=>{const t=new Rw({apiKey:"PLACEHOLDER_API_KEY"}),a=`
    You are the BookHere Technical Support Assistant. 
    BookHere is a React Native mobile app for property rentals using WordPress (Homey Theme) as a backend.
    
    Use the following documentation context to answer the user's questions accurately:
    ${Object.values(Qt).map(r=>{let d=`Section: ${r.title}
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
  `;try{return(await t.models.generateContent({model:"gemini-3-flash-preview",contents:o,config:{systemInstruction:a,temperature:.7}})).text||"I'm sorry, I couldn't generate a response at this time."}catch(r){return console.error("Gemini API Error:",r),"An error occurred while connecting to the AI assistant. Please try again later."}},Iw=({isOpen:o,onClose:t})=>{const[s,a]=ke.useState([{role:"assistant",content:"Hello! I'm your BookHere technical assistant. How can I help you set up your property rental app today?"}]),[r,d]=ke.useState(""),[m,g]=ke.useState(!1),y=ke.useRef(null);ke.useEffect(()=>{y.current&&(y.current.scrollTop=y.current.scrollHeight)},[s]);const h=async()=>{if(!r.trim()||m)return;const v=r.trim();d(""),a(C=>[...C,{role:"user",content:v}]),g(!0);const T=await xw(v);a(C=>[...C,{role:"assistant",content:T}]),g(!1)};return o?b.jsxs("div",{className:"fixed inset-y-0 right-0 w-full sm:w-[450px] bg-white shadow-2xl z-[60] flex flex-col border-l border-slate-200 transition-transform transform translate-x-0",children:[b.jsxs("div",{className:"p-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-rose-500 to-rose-600 text-white",children:[b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx(yu,{size:20}),b.jsx("h3",{className:"font-bold",children:"Technical Assistant"})]}),b.jsx("button",{onClick:t,className:"p-1 hover:bg-white/20 rounded-full transition-colors",children:b.jsx(Ra,{size:24})})]}),b.jsxs("div",{ref:y,className:"flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50",children:[s.map((v,T)=>b.jsx("div",{className:`flex ${v.role==="user"?"justify-end":"justify-start"}`,children:b.jsxs("div",{className:`max-w-[85%] flex gap-3 ${v.role==="user"?"flex-row-reverse":""}`,children:[b.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${v.role==="user"?"bg-slate-200":"bg-rose-100 text-rose-600"}`,children:v.role==="user"?b.jsx(rS,{size:16}):b.jsx(R0,{size:16})}),b.jsx("div",{className:`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${v.role==="user"?"bg-rose-500 text-white rounded-tr-none":"bg-white text-slate-700 rounded-tl-none border border-slate-100"}`,children:v.content})]})},T)),m&&b.jsx("div",{className:"flex justify-start",children:b.jsxs("div",{className:"flex gap-3",children:[b.jsx("div",{className:"w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center",children:b.jsx(G0,{size:16,className:"animate-spin"})}),b.jsx("div",{className:"bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-none shadow-sm",children:b.jsxs("div",{className:"flex gap-1",children:[b.jsx("span",{className:"w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"}),b.jsx("span",{className:"w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"}),b.jsx("span",{className:"w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"})]})})]})})]}),b.jsxs("div",{className:"p-4 border-t border-slate-100 bg-white",children:[b.jsxs("div",{className:"flex gap-2 relative",children:[b.jsx("input",{type:"text",value:r,onChange:v=>d(v.target.value),onKeyDown:v=>v.key==="Enter"&&h(),placeholder:"Ask a technical question...",className:"w-full bg-slate-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-rose-500 outline-none pr-12"}),b.jsx("button",{onClick:h,disabled:!r.trim()||m,className:"absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-rose-500 text-white rounded-lg disabled:opacity-50 hover:bg-rose-600 transition-colors",children:b.jsx(K0,{size:18})})]}),b.jsx("p",{className:"text-[10px] text-slate-400 mt-2 text-center uppercase tracking-widest font-bold",children:"Powered by Gemini 3 Flash"})]})]}):null},Mw=()=>{var Y;const[o,t]=ke.useState("getting_started"),[s,a]=ke.useState(!1),[r,d]=ke.useState(""),[m,g]=ke.useState(!1),[y,h]=ke.useState(!1),[v,T]=ke.useState([]),[C,A]=ke.useState(""),[U,M]=ke.useState(0),[I,D]=ke.useState(!1),[V,B]=ke.useState(null),X=os.useRef(null);ke.useEffect(()=>{if(C&&X.current){const z=X.current.querySelector(`[data-header-id="${C}"]`);z&&z.scrollIntoView({behavior:"smooth",block:"nearest"})}},[C]),ke.useEffect(()=>{const z=()=>{h(window.scrollY>400);const j=document.documentElement.scrollHeight-window.innerHeight,re=window.scrollY/j*100;M(re)};return window.addEventListener("scroll",z),()=>window.removeEventListener("scroll",z)},[]),ke.useEffect(()=>{const z=new IntersectionObserver(j=>{j.forEach(re=>{re.isIntersecting&&A(re.target.id)})},{rootMargin:"-80px 0px -80% 0px"});return v.forEach(j=>{const re=document.getElementById(j.id);re&&z.observe(re)}),()=>z.disconnect()},[v]);const Z=()=>{window.scrollTo({top:0,behavior:"smooth"})},te=z=>{const j=document.getElementById(z);if(j){const ue=j.getBoundingClientRect().top+window.pageYOffset+-80;window.scrollTo({top:ue,behavior:"smooth"})}},K=ke.useMemo(()=>{if(!r)return Qt;const z={},j=r.toLowerCase();return Object.entries(Qt).forEach(([re,ue])=>{var Be,G;if(ue.title.toLowerCase().includes(j)||((Be=ue.content)==null?void 0:Be.toLowerCase().includes(j))||((G=ue.tags)==null?void 0:G.some(J=>J.toLowerCase().includes(j))))z[re]=ue;else if(ue.subItems){const J={};Object.entries(ue.subItems).forEach(([ae,Te])=>{var be;(Te.title.toLowerCase().includes(j)||Te.content.toLowerCase().includes(j)||(be=Te.tags)!=null&&be.some(R=>R.toLowerCase().includes(j)))&&(J[ae]=Te)}),Object.keys(J).length>0&&(z[re]={...ue,subItems:J})}}),z},[r]),Q=ke.useMemo(()=>{if(Qt[o])return Qt[o];for(const z of Object.values(Qt))if(z.subItems&&z.subItems[o])return z.subItems[o];return Qt.getting_started},[o]);return b.jsxs("div",{className:"min-h-screen bg-white flex flex-col font-sans selection:bg-rose-100 selection:text-rose-900",children:[b.jsxs("header",{className:"bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50",children:[b.jsx("div",{className:"absolute bottom-0 left-0 h-[2px] bg-rose-500 transition-all duration-150 ease-out z-50",style:{width:`${U}%`}}),b.jsxs("div",{className:"max-w-[1440px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between",children:[b.jsxs("div",{className:"flex items-center gap-4",children:[b.jsx("button",{onClick:()=>a(!s),className:"lg:hidden p-2 hover:bg-slate-100 rounded-lg text-slate-600",children:s?b.jsx(Ra,{size:20}):b.jsx(om,{size:20})}),b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("div",{className:"bg-rose-500 p-2 rounded-xl shadow-lg shadow-rose-200",children:b.jsx(O0,{className:"text-white",size:24})}),b.jsxs("div",{className:"hidden sm:block",children:[b.jsx("h1",{className:"font-extrabold text-slate-900 text-xl tracking-tight leading-none",children:"BookHere"}),b.jsxs("p",{className:"text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-0.5",children:["Documentation Hub ",pS]})]})]})]}),b.jsx("div",{className:"hidden md:flex flex-1 max-w-xl mx-8",children:b.jsxs("div",{className:"relative w-full group",children:[b.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:b.jsx(im,{className:"text-slate-400 group-focus-within:text-rose-500 transition-colors",size:18})}),b.jsx("input",{type:"text",placeholder:"Search across 60+ guides...",className:"w-full bg-slate-100/50 border border-slate-200 rounded-2xl pl-12 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 focus:bg-white transition-all",value:r,onChange:z=>d(z.target.value)})]})}),b.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[b.jsxs("div",{className:"relative group",children:[b.jsxs("button",{onClick:()=>g(!0),className:"flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all shadow-md shadow-slate-200 group",children:[b.jsx(yu,{size:16,className:"text-rose-400 group-hover:scale-110 transition-transform"}),b.jsx("span",{className:"hidden sm:inline",children:"Ask AI"})]}),b.jsxs("div",{className:"absolute top-full right-0 mt-2 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none whitespace-nowrap shadow-xl z-[60]",children:["Get AI Help",b.jsx("div",{className:"absolute bottom-full right-6 -mb-1 border-4 border-transparent border-b-slate-900"})]})]}),b.jsxs("a",{href:hS,target:"_blank",rel:"noopener noreferrer",className:"hidden sm:flex items-center gap-2 text-slate-600 hover:text-slate-900 px-3 py-2 rounded-xl text-sm font-semibold transition-colors",children:[b.jsx(gu,{size:16}),"Live Demo"]})]})]})]}),b.jsxs("div",{className:"flex flex-1 max-w-[1440px] mx-auto w-full relative",children:[b.jsx("aside",{className:`
          ${s?"translate-x-0":"-translate-x-full"} 
          lg:translate-x-0 fixed lg:sticky top-16 h-[calc(100vh-64px)] w-72 border-r border-slate-100 bg-white z-40 transition-transform duration-300 ease-in-out lg:bg-slate-50/30
        `,children:b.jsxs("nav",{className:"p-6 space-y-2 overflow-y-auto h-full hide-scrollbar",children:[b.jsxs("div",{className:"mb-8",children:[b.jsx("p",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 mb-4",children:"Core Documentation"}),b.jsx("div",{className:"space-y-1",children:Object.entries(Qt).map(([z,j])=>{const re=j.icon,ue=j.subItems&&Object.keys(j.subItems).length>0,Ge=o===z||j.subItems&&Object.keys(j.subItems).includes(o);return b.jsxs("div",{className:"space-y-1",children:[b.jsxs("button",{onClick:()=>{ue&&!j.content&&j.subItems?t(Object.keys(j.subItems)[0]):t(z),a(!1),window.scrollTo({top:0,behavior:"smooth"})},className:`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all group ${o===z?"bg-rose-50 text-rose-600 shadow-sm border border-rose-100":"text-slate-600 hover:bg-white hover:text-slate-900 border border-transparent hover:border-slate-100"}`,children:[b.jsx(re,{size:18,className:`shrink-0 ${o===z?"text-rose-500":"text-slate-400 group-hover:text-slate-600"} transition-colors`}),j.title,ue&&b.jsx(nm,{size:14,className:`ml-auto shrink-0 transition-transform ${Ge?"rotate-90":""} opacity-50`})]}),ue&&Ge&&b.jsx("div",{className:"ml-9 space-y-1 mt-1 border-l-2 border-slate-100 pl-2",children:Object.entries(j.subItems).map(([Be,G])=>{const J=G.icon;return b.jsxs("button",{onClick:()=>{t(Be),a(!1),window.scrollTo({top:0,behavior:"smooth"})},className:`w-full flex items-center gap-2.5 px-4 py-2 rounded-lg text-[13px] font-medium transition-all ${o===Be?"text-rose-600 bg-rose-50/50":"text-slate-500 hover:text-slate-900 hover:bg-slate-50"}`,children:[J&&b.jsx(J,{size:14,className:`shrink-0 ${o===Be?"text-rose-500":"text-slate-400"}`}),G.title]},Be)})})]},z)})})]}),b.jsxs("div",{className:"pt-8 border-t border-slate-200",children:[b.jsx("p",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 mb-4",children:"Community & Help"}),b.jsxs("div",{className:"space-y-4",children:[b.jsxs("a",{href:`mailto:${mS}`,className:"flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors",children:[b.jsx(Fh,{size:18,className:"text-slate-400"}),"Support Tickets"]}),b.jsxs("div",{className:"px-4 py-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl shadow-slate-200 overflow-hidden relative group",children:[b.jsx("div",{className:"absolute top-0 right-0 -mr-4 -mt-4 w-16 h-16 bg-rose-500/20 rounded-full blur-2xl group-hover:bg-rose-500/30 transition-colors"}),b.jsx("h4",{className:"text-white font-bold text-sm mb-2",children:"Extended Support"}),b.jsx("p",{className:"text-slate-400 text-xs mb-4 leading-relaxed",children:"Get custom builds and prioritized installation from our expert dev team."}),b.jsx("button",{className:"w-full py-2 bg-white text-slate-900 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors",children:"Upgrade Now"})]})]})]})]})}),b.jsx("main",{className:"flex-1 min-w-0 p-6 lg:p-16 min-h-screen",children:b.jsxs("div",{className:"max-w-4xl mx-auto",children:[b.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8",children:[b.jsx("span",{className:"hover:text-slate-600 cursor-pointer",children:"Docs"}),b.jsx(nm,{size:10}),b.jsx("span",{className:"text-rose-500",children:Q.title})]}),b.jsxs("article",{className:"min-h-[60vh]",children:[b.jsx("div",{className:"mb-12",children:b.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:(Y=Q.tags)==null?void 0:Y.map(z=>b.jsxs("span",{className:"px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-[10px] font-bold uppercase tracking-wider",children:["#",z]},z))})}),b.jsx(gS,{content:Q.content||"",onNavigate:z=>{(Qt[z]||Object.values(Qt).some(re=>re.subItems&&re.subItems[z]))&&(t(z),window.scrollTo({top:0,behavior:"smooth"}))},onHeadersFound:T})]}),b.jsxs("div",{className:"mt-20 pt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6",children:[b.jsxs("div",{className:"flex items-center gap-6",children:[b.jsxs("button",{className:"flex flex-col items-start gap-1 group",children:[b.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest",children:"Modified"}),b.jsxs("span",{className:"text-sm font-semibold text-slate-700 flex items-center gap-1.5",children:[b.jsx(qh,{size:14,className:"text-slate-400"})," Jan 2026"]})]}),b.jsx("div",{className:"w-px h-8 bg-slate-200"}),b.jsxs("div",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest",children:["© WebPenter Solutions",b.jsx("br",{}),"All rights Reserved"]})]}),b.jsx("div",{className:"flex gap-4",children:b.jsxs("div",{className:"relative group",children:[b.jsx("button",{className:"p-3 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all",children:b.jsx(gu,{size:20})}),b.jsxs("div",{className:"absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none whitespace-nowrap shadow-xl",children:["Share Page",b.jsx("div",{className:"absolute top-full right-4 -mt-1 border-4 border-transparent border-t-slate-900"})]})]})})]})]})}),b.jsxs("aside",{className:"hidden xl:block w-72 p-12 sticky top-16 h-fit",children:[b.jsx("h4",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6",children:"Quick Actions"}),b.jsxs("div",{className:"space-y-4",children:[b.jsxs("button",{onClick:()=>g(!0),className:"w-full text-left p-4 rounded-2xl bg-rose-50 border border-rose-100 group hover:bg-rose-100 transition-colors",children:[b.jsx("div",{className:"bg-rose-500 p-1.5 rounded-lg w-fit mb-3 text-white shadow-lg shadow-rose-200",children:b.jsx(yu,{size:16})}),b.jsx("h5",{className:"font-bold text-rose-900 text-sm mb-1",children:"Stuck? Ask AI"}),b.jsx("p",{className:"text-rose-700/70 text-[11px] leading-relaxed",children:"Get instant answers to complex setup questions using our AI assistant."})]}),v.length>0&&b.jsxs("div",{className:"p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col max-h-[calc(85vh-250px)] shadow-sm",children:[b.jsxs("div",{className:"flex items-center justify-between mb-4 shrink-0",children:[b.jsxs("h5",{className:"font-bold text-slate-900 text-[10px] uppercase tracking-widest flex items-center gap-2",children:[b.jsx("div",{className:"w-1 h-1 rounded-full bg-rose-500"}),"On this page"]}),b.jsxs("button",{onClick:()=>{navigator.clipboard.writeText(window.location.href),B("page"),setTimeout(()=>B(null),2e3)},className:"text-slate-400 hover:text-rose-500 transition-colors relative",title:"Copy page link",children:[V==="page"?b.jsx(hu,{size:14,className:"text-emerald-500"}):b.jsx(Vh,{size:14}),V==="page"&&b.jsx("span",{className:"absolute right-0 bottom-full mb-2 px-2 py-1 bg-slate-900 text-white text-[10px] font-bold rounded whitespace-nowrap",children:"Copied!"})]})]}),b.jsxs("div",{className:"relative overflow-hidden",children:[b.jsx("div",{className:"absolute left-[7px] top-0 bottom-0 w-[1px] bg-slate-200"}),b.jsx("ul",{ref:X,className:"space-y-4 text-[13px] text-slate-500 overflow-y-auto pr-2 custom-scrollbar relative",children:v.map(z=>{const j=C===z.id;return b.jsxs("li",{"data-header-id":z.id,onClick:()=>te(z.id),className:`
                            relative pl-6 cursor-pointer transition-all duration-300 group
                            ${j?"text-rose-600 font-bold":"hover:text-slate-900 font-medium"}
                            ${z.level===3?"text-[12px] opacity-80":""}
                          `,children:[b.jsx("div",{className:`
                            absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-white transition-all duration-300 z-10
                            ${j?"bg-rose-500 scale-100 shadow-lg shadow-rose-200":"bg-slate-300 scale-50 group-hover:scale-75 group-hover:bg-slate-400"}
                          `}),b.jsx("span",{className:"block break-words leading-snug",children:z.text})]},z.id)})})]})]})]})]})]}),b.jsx(Iw,{isOpen:m,onClose:()=>g(!1)}),r&&b.jsxs("div",{className:"lg:hidden fixed inset-x-0 top-16 bg-white border-b border-slate-200 p-6 z-50 shadow-2xl h-[calc(100vh-64px)] overflow-y-auto",children:[b.jsxs("div",{className:"flex items-center justify-between mb-6",children:[b.jsxs("p",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest",children:["Search Results (",Object.keys(K).length,")"]}),b.jsx("button",{onClick:()=>d(""),className:"p-1 text-slate-400 hover:text-slate-900",children:b.jsx(Ra,{size:20})})]}),b.jsx("div",{className:"space-y-3",children:Object.keys(K).length>0?Object.entries(K).map(([z,j])=>{const re=j.icon;return b.jsx("button",{onClick:()=>{t(z),d("")},className:"w-full text-left p-4 bg-slate-50 hover:bg-rose-50 border border-slate-100 hover:border-rose-100 rounded-2xl group transition-all",children:b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx(re,{size:18,className:"text-slate-400 group-hover:text-rose-500"}),b.jsx("span",{className:"text-sm font-bold text-slate-700 group-hover:text-rose-900",children:j.title})]})},z)}):b.jsxs("div",{className:"text-center py-12",children:[b.jsx(im,{size:48,className:"text-slate-200 mx-auto mb-4"}),b.jsx("p",{className:"text-sm text-slate-500",children:"No matching guides found. Try a different search term."})]})})]}),b.jsx("div",{className:`fixed bottom-8 right-8 z-50 transition-all duration-300 ${y?"opacity-100 translate-y-0":"opacity-0 translate-y-10 pointer-events-none"}`,children:b.jsxs("div",{className:"relative group",children:[b.jsx("button",{onClick:Z,className:"p-4 bg-rose-500 text-white rounded-2xl shadow-2xl shadow-rose-200 hover:bg-rose-600 hover:-translate-y-1 active:scale-95 transition-all",children:b.jsx(A0,{size:24})}),b.jsxs("div",{className:"absolute bottom-full right-0 mb-4 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none whitespace-nowrap shadow-xl",children:["Back to Top",b.jsx("div",{className:"absolute top-full right-6 -mt-1 border-4 border-transparent border-t-slate-900"})]})]})}),v.length>0&&b.jsxs("button",{onClick:()=>D(!0),className:"xl:hidden fixed bottom-8 left-8 p-4 bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 z-40 hover:bg-slate-50 active:scale-95 transition-all flex items-center gap-2",children:[b.jsx(om,{size:20,className:"text-rose-500"}),b.jsx("span",{className:"text-xs font-bold uppercase tracking-wider",children:"On this page"})]}),b.jsxs("div",{className:`xl:hidden fixed inset-0 z-[100] transition-all duration-500 ${I?"opacity-100":"opacity-0 pointer-events-none"}`,children:[b.jsx("div",{className:"absolute inset-0 bg-slate-900/40 backdrop-blur-sm",onClick:()=>D(!1)}),b.jsxs("div",{className:`absolute inset-x-0 bottom-0 bg-white rounded-t-[32px] p-8 transition-transform duration-500 shadow-2xl ${I?"translate-y-0":"translate-y-full"}`,children:[b.jsx("div",{className:"w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-8"}),b.jsxs("div",{className:"flex items-center justify-between mb-6",children:[b.jsx("h5",{className:"font-bold text-slate-900 text-lg",children:"On this page"}),b.jsx("button",{onClick:()=>D(!1),className:"p-2 bg-slate-100 rounded-full text-slate-500",children:b.jsx(Ra,{size:20})})]}),b.jsx("ul",{className:"space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar pr-2",children:v.map(z=>b.jsxs("li",{onClick:()=>{te(z.id),D(!1)},className:`flex items-center gap-4 text-sm transition-colors ${C===z.id?"text-rose-600 font-bold":"text-slate-600 font-medium"} ${z.level===3?"pl-6 opacity-80":""}`,children:[b.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${C===z.id?"bg-rose-500":"bg-slate-200"}`}),z.text]},z.id))})]})]})]})},Lg=document.getElementById("root");if(!Lg)throw new Error("Could not find root element to mount to");const Nw=g0.createRoot(Lg);Nw.render(b.jsx(os.StrictMode,{children:b.jsx(Mw,{})}));
