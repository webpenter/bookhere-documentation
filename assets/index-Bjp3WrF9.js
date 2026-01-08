(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const d of r)if(d.type==="childList")for(const m of d.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function l(r){const d={};return r.integrity&&(d.integrity=r.integrity),r.referrerPolicy&&(d.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?d.credentials="include":r.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(r){if(r.ep)return;r.ep=!0;const d=l(r);fetch(r.href,d)}})();function Gh(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var au={exports:{}},$i={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fp;function i0(){if(Fp)return $i;Fp=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function l(s,r,d){var m=null;if(d!==void 0&&(m=""+d),r.key!==void 0&&(m=""+r.key),"key"in r){d={};for(var g in r)g!=="key"&&(d[g]=r[g])}else d=r;return r=d.ref,{$$typeof:o,type:s,key:m,ref:r!==void 0?r:null,props:d}}return $i.Fragment=t,$i.jsx=l,$i.jsxs=l,$i}var Yp;function l0(){return Yp||(Yp=1,au.exports=i0()),au.exports}var b=l0(),ru={exports:{}},re={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function s0(){if(Jp)return re;Jp=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),d=Symbol.for("react.consumer"),m=Symbol.for("react.context"),g=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),E=Symbol.iterator;function _(R){return R===null||typeof R!="object"?null:(R=E&&R[E]||R["@@iterator"],typeof R=="function"?R:null)}var k={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,I={};function U(R,q,W){this.props=R,this.context=q,this.refs=I,this.updater=W||k}U.prototype.isReactComponent={},U.prototype.setState=function(R,q){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,q,"setState")},U.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function V(){}V.prototype=U.prototype;function B(R,q,W){this.props=R,this.context=q,this.refs=I,this.updater=W||k}var K=B.prototype=new V;K.constructor=B,M(K,U.prototype),K.isPureReactComponent=!0;var $=Array.isArray;function ee(){}var J={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function F(R,q,W){var te=W.ref;return{$$typeof:o,type:R,key:q,ref:te!==void 0?te:null,props:W}}function Y(R,q){return F(R.type,q,R.props)}function oe(R){return typeof R=="object"&&R!==null&&R.$$typeof===o}function ue(R){var q={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(W){return q[W]})}var Se=/\/+/g;function Ge(R,q){return typeof R=="object"&&R!==null&&R.key!=null?ue(""+R.key):q.toString(36)}function ot(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(ee,ee):(R.status="pending",R.then(function(q){R.status==="pending"&&(R.status="fulfilled",R.value=q)},function(q){R.status==="pending"&&(R.status="rejected",R.reason=q)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function H(R,q,W,te,ce){var pe=typeof R;(pe==="undefined"||pe==="boolean")&&(R=null);var Ae=!1;if(R===null)Ae=!0;else switch(pe){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(R.$$typeof){case o:case t:Ae=!0;break;case v:return Ae=R._init,H(Ae(R._payload),q,W,te,ce)}}if(Ae)return ce=ce(R),Ae=te===""?"."+Ge(R,0):te,$(ce)?(W="",Ae!=null&&(W=Ae.replace(Se,"$&/")+"/"),H(ce,q,W,"",function(li){return li})):ce!=null&&(oe(ce)&&(ce=Y(ce,W+(ce.key==null||R&&R.key===ce.key?"":(""+ce.key).replace(Se,"$&/")+"/")+Ae)),q.push(ce)),1;Ae=0;var st=te===""?".":te+":";if($(R))for(var Oe=0;Oe<R.length;Oe++)te=R[Oe],pe=st+Ge(te,Oe),Ae+=H(te,q,W,pe,ce);else if(Oe=_(R),typeof Oe=="function")for(R=Oe.call(R),Oe=0;!(te=R.next()).done;)te=te.value,pe=st+Ge(te,Oe++),Ae+=H(te,q,W,pe,ce);else if(pe==="object"){if(typeof R.then=="function")return H(ot(R),q,W,te,ce);throw q=String(R),Error("Objects are not valid as a React child (found: "+(q==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":q)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function X(R,q,W){if(R==null)return R;var te=[],ce=0;return H(R,te,"","",function(pe){return q.call(W,pe,ce++)}),te}function se(R){if(R._status===-1){var q=R._result;q=q(),q.then(function(W){(R._status===0||R._status===-1)&&(R._status=1,R._result=W)},function(W){(R._status===0||R._status===-1)&&(R._status=2,R._result=W)}),R._status===-1&&(R._status=0,R._result=q)}if(R._status===1)return R._result.default;throw R._result}var Re=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var q=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(q))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},we={map:X,forEach:function(R,q,W){X(R,function(){q.apply(this,arguments)},W)},count:function(R){var q=0;return X(R,function(){q++}),q},toArray:function(R){return X(R,function(q){return q})||[]},only:function(R){if(!oe(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return re.Activity=T,re.Children=we,re.Component=U,re.Fragment=l,re.Profiler=r,re.PureComponent=B,re.StrictMode=s,re.Suspense=y,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=J,re.__COMPILER_RUNTIME={__proto__:null,c:function(R){return J.H.useMemoCache(R)}},re.cache=function(R){return function(){return R.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(R,q,W){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var te=M({},R.props),ce=R.key;if(q!=null)for(pe in q.key!==void 0&&(ce=""+q.key),q)!Q.call(q,pe)||pe==="key"||pe==="__self"||pe==="__source"||pe==="ref"&&q.ref===void 0||(te[pe]=q[pe]);var pe=arguments.length-2;if(pe===1)te.children=W;else if(1<pe){for(var Ae=Array(pe),st=0;st<pe;st++)Ae[st]=arguments[st+2];te.children=Ae}return F(R.type,ce,te)},re.createContext=function(R){return R={$$typeof:m,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:d,_context:R},R},re.createElement=function(R,q,W){var te,ce={},pe=null;if(q!=null)for(te in q.key!==void 0&&(pe=""+q.key),q)Q.call(q,te)&&te!=="key"&&te!=="__self"&&te!=="__source"&&(ce[te]=q[te]);var Ae=arguments.length-2;if(Ae===1)ce.children=W;else if(1<Ae){for(var st=Array(Ae),Oe=0;Oe<Ae;Oe++)st[Oe]=arguments[Oe+2];ce.children=st}if(R&&R.defaultProps)for(te in Ae=R.defaultProps,Ae)ce[te]===void 0&&(ce[te]=Ae[te]);return F(R,pe,ce)},re.createRef=function(){return{current:null}},re.forwardRef=function(R){return{$$typeof:g,render:R}},re.isValidElement=oe,re.lazy=function(R){return{$$typeof:v,_payload:{_status:-1,_result:R},_init:se}},re.memo=function(R,q){return{$$typeof:h,type:R,compare:q===void 0?null:q}},re.startTransition=function(R){var q=J.T,W={};J.T=W;try{var te=R(),ce=J.S;ce!==null&&ce(W,te),typeof te=="object"&&te!==null&&typeof te.then=="function"&&te.then(ee,Re)}catch(pe){Re(pe)}finally{q!==null&&W.types!==null&&(q.types=W.types),J.T=q}},re.unstable_useCacheRefresh=function(){return J.H.useCacheRefresh()},re.use=function(R){return J.H.use(R)},re.useActionState=function(R,q,W){return J.H.useActionState(R,q,W)},re.useCallback=function(R,q){return J.H.useCallback(R,q)},re.useContext=function(R){return J.H.useContext(R)},re.useDebugValue=function(){},re.useDeferredValue=function(R,q){return J.H.useDeferredValue(R,q)},re.useEffect=function(R,q){return J.H.useEffect(R,q)},re.useEffectEvent=function(R){return J.H.useEffectEvent(R)},re.useId=function(){return J.H.useId()},re.useImperativeHandle=function(R,q,W){return J.H.useImperativeHandle(R,q,W)},re.useInsertionEffect=function(R,q){return J.H.useInsertionEffect(R,q)},re.useLayoutEffect=function(R,q){return J.H.useLayoutEffect(R,q)},re.useMemo=function(R,q){return J.H.useMemo(R,q)},re.useOptimistic=function(R,q){return J.H.useOptimistic(R,q)},re.useReducer=function(R,q,W){return J.H.useReducer(R,q,W)},re.useRef=function(R){return J.H.useRef(R)},re.useState=function(R){return J.H.useState(R)},re.useSyncExternalStore=function(R,q,W){return J.H.useSyncExternalStore(R,q,W)},re.useTransition=function(){return J.H.useTransition()},re.version="19.2.3",re}var Kp;function wu(){return Kp||(Kp=1,ru.exports=s0()),ru.exports}var ke=wu();const ol=Gh(ke);var uu={exports:{}},ji={},cu={exports:{}},du={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xp;function a0(){return Xp||(Xp=1,(function(o){function t(H,X){var se=H.length;H.push(X);e:for(;0<se;){var Re=se-1>>>1,we=H[Re];if(0<r(we,X))H[Re]=X,H[se]=we,se=Re;else break e}}function l(H){return H.length===0?null:H[0]}function s(H){if(H.length===0)return null;var X=H[0],se=H.pop();if(se!==X){H[0]=se;e:for(var Re=0,we=H.length,R=we>>>1;Re<R;){var q=2*(Re+1)-1,W=H[q],te=q+1,ce=H[te];if(0>r(W,se))te<we&&0>r(ce,W)?(H[Re]=ce,H[te]=se,Re=te):(H[Re]=W,H[q]=se,Re=q);else if(te<we&&0>r(ce,se))H[Re]=ce,H[te]=se,Re=te;else break e}}return X}function r(H,X){var se=H.sortIndex-X.sortIndex;return se!==0?se:H.id-X.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var d=performance;o.unstable_now=function(){return d.now()}}else{var m=Date,g=m.now();o.unstable_now=function(){return m.now()-g}}var y=[],h=[],v=1,T=null,E=3,_=!1,k=!1,M=!1,I=!1,U=typeof setTimeout=="function"?setTimeout:null,V=typeof clearTimeout=="function"?clearTimeout:null,B=typeof setImmediate<"u"?setImmediate:null;function K(H){for(var X=l(h);X!==null;){if(X.callback===null)s(h);else if(X.startTime<=H)s(h),X.sortIndex=X.expirationTime,t(y,X);else break;X=l(h)}}function $(H){if(M=!1,K(H),!k)if(l(y)!==null)k=!0,ee||(ee=!0,ue());else{var X=l(h);X!==null&&ot($,X.startTime-H)}}var ee=!1,J=-1,Q=5,F=-1;function Y(){return I?!0:!(o.unstable_now()-F<Q)}function oe(){if(I=!1,ee){var H=o.unstable_now();F=H;var X=!0;try{e:{k=!1,M&&(M=!1,V(J),J=-1),_=!0;var se=E;try{t:{for(K(H),T=l(y);T!==null&&!(T.expirationTime>H&&Y());){var Re=T.callback;if(typeof Re=="function"){T.callback=null,E=T.priorityLevel;var we=Re(T.expirationTime<=H);if(H=o.unstable_now(),typeof we=="function"){T.callback=we,K(H),X=!0;break t}T===l(y)&&s(y),K(H)}else s(y);T=l(y)}if(T!==null)X=!0;else{var R=l(h);R!==null&&ot($,R.startTime-H),X=!1}}break e}finally{T=null,E=se,_=!1}X=void 0}}finally{X?ue():ee=!1}}}var ue;if(typeof B=="function")ue=function(){B(oe)};else if(typeof MessageChannel<"u"){var Se=new MessageChannel,Ge=Se.port2;Se.port1.onmessage=oe,ue=function(){Ge.postMessage(null)}}else ue=function(){U(oe,0)};function ot(H,X){J=U(function(){H(o.unstable_now())},X)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(H){H.callback=null},o.unstable_forceFrameRate=function(H){0>H||125<H?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<H?Math.floor(1e3/H):5},o.unstable_getCurrentPriorityLevel=function(){return E},o.unstable_next=function(H){switch(E){case 1:case 2:case 3:var X=3;break;default:X=E}var se=E;E=X;try{return H()}finally{E=se}},o.unstable_requestPaint=function(){I=!0},o.unstable_runWithPriority=function(H,X){switch(H){case 1:case 2:case 3:case 4:case 5:break;default:H=3}var se=E;E=H;try{return X()}finally{E=se}},o.unstable_scheduleCallback=function(H,X,se){var Re=o.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?Re+se:Re):se=Re,H){case 1:var we=-1;break;case 2:we=250;break;case 5:we=1073741823;break;case 4:we=1e4;break;default:we=5e3}return we=se+we,H={id:v++,callback:X,priorityLevel:H,startTime:se,expirationTime:we,sortIndex:-1},se>Re?(H.sortIndex=se,t(h,H),l(y)===null&&H===l(h)&&(M?(V(J),J=-1):M=!0,ot($,se-Re))):(H.sortIndex=we,t(y,H),k||_||(k=!0,ee||(ee=!0,ue()))),H},o.unstable_shouldYield=Y,o.unstable_wrapCallback=function(H){var X=E;return function(){var se=E;E=X;try{return H.apply(this,arguments)}finally{E=se}}}})(du)),du}var Qp;function r0(){return Qp||(Qp=1,cu.exports=a0()),cu.exports}var fu={exports:{}},it={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wp;function u0(){if(Wp)return it;Wp=1;var o=wu();function t(y){var h="https://react.dev/errors/"+y;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)h+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+y+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(){}var s={d:{f:l,r:function(){throw Error(t(522))},D:l,C:l,L:l,m:l,X:l,S:l,M:l},p:0,findDOMNode:null},r=Symbol.for("react.portal");function d(y,h,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:r,key:T==null?null:""+T,children:y,containerInfo:h,implementation:v}}var m=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function g(y,h){if(y==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return it.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,it.createPortal=function(y,h){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(t(299));return d(y,h,null,v)},it.flushSync=function(y){var h=m.T,v=s.p;try{if(m.T=null,s.p=2,y)return y()}finally{m.T=h,s.p=v,s.d.f()}},it.preconnect=function(y,h){typeof y=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,s.d.C(y,h))},it.prefetchDNS=function(y){typeof y=="string"&&s.d.D(y)},it.preinit=function(y,h){if(typeof y=="string"&&h&&typeof h.as=="string"){var v=h.as,T=g(v,h.crossOrigin),E=typeof h.integrity=="string"?h.integrity:void 0,_=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;v==="style"?s.d.S(y,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:T,integrity:E,fetchPriority:_}):v==="script"&&s.d.X(y,{crossOrigin:T,integrity:E,fetchPriority:_,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},it.preinitModule=function(y,h){if(typeof y=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var v=g(h.as,h.crossOrigin);s.d.M(y,{crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&s.d.M(y)},it.preload=function(y,h){if(typeof y=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var v=h.as,T=g(v,h.crossOrigin);s.d.L(y,v,{crossOrigin:T,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},it.preloadModule=function(y,h){if(typeof y=="string")if(h){var v=g(h.as,h.crossOrigin);s.d.m(y,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:v,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else s.d.m(y)},it.requestFormReset=function(y){s.d.r(y)},it.unstable_batchedUpdates=function(y,h){return y(h)},it.useFormState=function(y,h,v){return m.H.useFormState(y,h,v)},it.useFormStatus=function(){return m.H.useHostTransitionStatus()},it.version="19.2.3",it}var Zp;function c0(){if(Zp)return fu.exports;Zp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),fu.exports=u0(),fu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $p;function d0(){if($p)return ji;$p=1;var o=r0(),t=wu(),l=c0();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var i=2;i<arguments.length;i++)n+="&args[]="+encodeURIComponent(arguments[i])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function r(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function d(e){var n=e,i=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(i=n.return),e=n.return;while(e)}return n.tag===3?i:null}function m(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function g(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function y(e){if(d(e)!==e)throw Error(s(188))}function h(e){var n=e.alternate;if(!n){if(n=d(e),n===null)throw Error(s(188));return n!==e?null:e}for(var i=e,a=n;;){var f=i.return;if(f===null)break;var p=f.alternate;if(p===null){if(a=f.return,a!==null){i=a;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===i)return y(f),e;if(p===a)return y(f),n;p=p.sibling}throw Error(s(188))}if(i.return!==a.return)i=f,a=p;else{for(var S=!1,C=f.child;C;){if(C===i){S=!0,i=f,a=p;break}if(C===a){S=!0,a=f,i=p;break}C=C.sibling}if(!S){for(C=p.child;C;){if(C===i){S=!0,i=p,a=f;break}if(C===a){S=!0,a=p,i=f;break}C=C.sibling}if(!S)throw Error(s(189))}}if(i.alternate!==a)throw Error(s(190))}if(i.tag!==3)throw Error(s(188));return i.stateNode.current===i?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var T=Object.assign,E=Symbol.for("react.element"),_=Symbol.for("react.transitional.element"),k=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),I=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),V=Symbol.for("react.consumer"),B=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),ee=Symbol.for("react.suspense_list"),J=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),F=Symbol.for("react.activity"),Y=Symbol.for("react.memo_cache_sentinel"),oe=Symbol.iterator;function ue(e){return e===null||typeof e!="object"?null:(e=oe&&e[oe]||e["@@iterator"],typeof e=="function"?e:null)}var Se=Symbol.for("react.client.reference");function Ge(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Se?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case U:return"Profiler";case I:return"StrictMode";case $:return"Suspense";case ee:return"SuspenseList";case F:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case k:return"Portal";case B:return e.displayName||"Context";case V:return(e._context.displayName||"Context")+".Consumer";case K:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J:return n=e.displayName||null,n!==null?n:Ge(e.type)||"Memo";case Q:n=e._payload,e=e._init;try{return Ge(e(n))}catch{}}return null}var ot=Array.isArray,H=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,X=l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,se={pending:!1,data:null,method:null,action:null},Re=[],we=-1;function R(e){return{current:e}}function q(e){0>we||(e.current=Re[we],Re[we]=null,we--)}function W(e,n){we++,Re[we]=e.current,e.current=n}var te=R(null),ce=R(null),pe=R(null),Ae=R(null);function st(e,n){switch(W(pe,n),W(ce,e),W(te,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?pp(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=pp(n),e=mp(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}q(te),W(te,e)}function Oe(){q(te),q(ce),q(pe)}function li(e){e.memoizedState!==null&&W(Ae,e);var n=te.current,i=mp(n,e.type);n!==i&&(W(ce,e),W(te,i))}function il(e){ce.current===e&&(q(te),q(ce)),Ae.current===e&&(q(Ae),Xi._currentValue=se)}var Vs,qu;function Fn(e){if(Vs===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);Vs=n&&n[1]||"",qu=-1<i.stack.indexOf(`
    at`)?" (<anonymous>)":-1<i.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vs+e+qu}var Fs=!1;function Ys(e,n){if(!e||Fs)return"";Fs=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var O=function(){throw Error()};if(Object.defineProperty(O.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(O,[])}catch(L){var P=L}Reflect.construct(e,[],O)}else{try{O.call()}catch(L){P=L}e.call(O.prototype)}}else{try{throw Error()}catch(L){P=L}(O=e())&&typeof O.catch=="function"&&O.catch(function(){})}}catch(L){if(L&&P&&typeof L.stack=="string")return[L.stack,P.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=a.DetermineComponentFrameRoot(),S=p[0],C=p[1];if(S&&C){var A=S.split(`
`),D=C.split(`
`);for(f=a=0;a<A.length&&!A[a].includes("DetermineComponentFrameRoot");)a++;for(;f<D.length&&!D[f].includes("DetermineComponentFrameRoot");)f++;if(a===A.length||f===D.length)for(a=A.length-1,f=D.length-1;1<=a&&0<=f&&A[a]!==D[f];)f--;for(;1<=a&&0<=f;a--,f--)if(A[a]!==D[f]){if(a!==1||f!==1)do if(a--,f--,0>f||A[a]!==D[f]){var G=`
`+A[a].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=a&&0<=f);break}}}finally{Fs=!1,Error.prepareStackTrace=i}return(i=e?e.displayName||e.name:"")?Fn(i):""}function kg(e,n){switch(e.tag){case 26:case 27:case 5:return Fn(e.type);case 16:return Fn("Lazy");case 13:return e.child!==n&&n!==null?Fn("Suspense Fallback"):Fn("Suspense");case 19:return Fn("SuspenseList");case 0:case 15:return Ys(e.type,!1);case 11:return Ys(e.type.render,!1);case 1:return Ys(e.type,!0);case 31:return Fn("Activity");default:return""}}function Vu(e){try{var n="",i=null;do n+=kg(e,i),i=e,e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}var Js=Object.prototype.hasOwnProperty,Ks=o.unstable_scheduleCallback,Xs=o.unstable_cancelCallback,Lg=o.unstable_shouldYield,Hg=o.unstable_requestPaint,yt=o.unstable_now,Gg=o.unstable_getCurrentPriorityLevel,Fu=o.unstable_ImmediatePriority,Yu=o.unstable_UserBlockingPriority,ll=o.unstable_NormalPriority,Bg=o.unstable_LowPriority,Ju=o.unstable_IdlePriority,zg=o.log,Og=o.unstable_setDisableYieldValue,si=null,vt=null;function yn(e){if(typeof zg=="function"&&Og(e),vt&&typeof vt.setStrictMode=="function")try{vt.setStrictMode(si,e)}catch{}}var St=Math.clz32?Math.clz32:Fg,qg=Math.log,Vg=Math.LN2;function Fg(e){return e>>>=0,e===0?32:31-(qg(e)/Vg|0)|0}var sl=256,al=262144,rl=4194304;function Yn(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function ul(e,n,i){var a=e.pendingLanes;if(a===0)return 0;var f=0,p=e.suspendedLanes,S=e.pingedLanes;e=e.warmLanes;var C=a&134217727;return C!==0?(a=C&~p,a!==0?f=Yn(a):(S&=C,S!==0?f=Yn(S):i||(i=C&~e,i!==0&&(f=Yn(i))))):(C=a&~p,C!==0?f=Yn(C):S!==0?f=Yn(S):i||(i=a&~e,i!==0&&(f=Yn(i)))),f===0?0:n!==0&&n!==f&&(n&p)===0&&(p=f&-f,i=n&-n,p>=i||p===32&&(i&4194048)!==0)?n:f}function ai(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Yg(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ku(){var e=rl;return rl<<=1,(rl&62914560)===0&&(rl=4194304),e}function Qs(e){for(var n=[],i=0;31>i;i++)n.push(e);return n}function ri(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Jg(e,n,i,a,f,p){var S=e.pendingLanes;e.pendingLanes=i,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=i,e.entangledLanes&=i,e.errorRecoveryDisabledLanes&=i,e.shellSuspendCounter=0;var C=e.entanglements,A=e.expirationTimes,D=e.hiddenUpdates;for(i=S&~i;0<i;){var G=31-St(i),O=1<<G;C[G]=0,A[G]=-1;var P=D[G];if(P!==null)for(D[G]=null,G=0;G<P.length;G++){var L=P[G];L!==null&&(L.lane&=-536870913)}i&=~O}a!==0&&Xu(e,a,0),p!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=p&~(S&~n))}function Xu(e,n,i){e.pendingLanes|=n,e.suspendedLanes&=~n;var a=31-St(n);e.entangledLanes|=n,e.entanglements[a]=e.entanglements[a]|1073741824|i&261930}function Qu(e,n){var i=e.entangledLanes|=n;for(e=e.entanglements;i;){var a=31-St(i),f=1<<a;f&n|e[a]&n&&(e[a]|=n),i&=~f}}function Wu(e,n){var i=n&-n;return i=(i&42)!==0?1:Ws(i),(i&(e.suspendedLanes|n))!==0?0:i}function Ws(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Zs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Zu(){var e=X.p;return e!==0?e:(e=window.event,e===void 0?32:Hp(e.type))}function $u(e,n){var i=X.p;try{return X.p=e,n()}finally{X.p=i}}var vn=Math.random().toString(36).slice(2),$e="__reactFiber$"+vn,ct="__reactProps$"+vn,fo="__reactContainer$"+vn,$s="__reactEvents$"+vn,Kg="__reactListeners$"+vn,Xg="__reactHandles$"+vn,ju="__reactResources$"+vn,ui="__reactMarker$"+vn;function js(e){delete e[$e],delete e[ct],delete e[$s],delete e[Kg],delete e[Xg]}function po(e){var n=e[$e];if(n)return n;for(var i=e.parentNode;i;){if(n=i[fo]||i[$e]){if(i=n.alternate,n.child!==null||i!==null&&i.child!==null)for(e=Ep(e);e!==null;){if(i=e[$e])return i;e=Ep(e)}return n}e=i,i=e.parentNode}return null}function mo(e){if(e=e[$e]||e[fo]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ci(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function ho(e){var n=e[ju];return n||(n=e[ju]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Qe(e){e[ui]=!0}var ec=new Set,tc={};function Jn(e,n){go(e,n),go(e+"Capture",n)}function go(e,n){for(tc[e]=n,e=0;e<n.length;e++)ec.add(n[e])}var Qg=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),nc={},oc={};function Wg(e){return Js.call(oc,e)?!0:Js.call(nc,e)?!1:Qg.test(e)?oc[e]=!0:(nc[e]=!0,!1)}function cl(e,n,i){if(Wg(n))if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+i)}}function dl(e,n,i){if(i===null)e.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+i)}}function Qt(e,n,i,a){if(a===null)e.removeAttribute(i);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttributeNS(n,i,""+a)}}function Rt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ic(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zg(e,n,i){var a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,p=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return f.call(this)},set:function(S){i=""+S,p.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return i},setValue:function(S){i=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ea(e){if(!e._valueTracker){var n=ic(e)?"checked":"value";e._valueTracker=Zg(e,n,""+e[n])}}function lc(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var i=n.getValue(),a="";return e&&(a=ic(e)?e.checked?"true":"false":e.value),e=a,e!==i?(n.setValue(e),!0):!1}function fl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var $g=/[\n"\\]/g;function Nt(e){return e.replace($g,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function ta(e,n,i,a,f,p,S,C){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Rt(n)):e.value!==""+Rt(n)&&(e.value=""+Rt(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?na(e,S,Rt(n)):i!=null?na(e,S,Rt(i)):a!=null&&e.removeAttribute("value"),f==null&&p!=null&&(e.defaultChecked=!!p),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+Rt(C):e.removeAttribute("name")}function sc(e,n,i,a,f,p,S,C){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(e.type=p),n!=null||i!=null){if(!(p!=="submit"&&p!=="reset"||n!=null)){ea(e);return}i=i!=null?""+Rt(i):"",n=n!=null?""+Rt(n):i,C||n===e.value||(e.value=n),e.defaultValue=n}a=a??f,a=typeof a!="function"&&typeof a!="symbol"&&!!a,e.checked=C?e.checked:!!a,e.defaultChecked=!!a,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S),ea(e)}function na(e,n,i){n==="number"&&fl(e.ownerDocument)===e||e.defaultValue===""+i||(e.defaultValue=""+i)}function yo(e,n,i,a){if(e=e.options,n){n={};for(var f=0;f<i.length;f++)n["$"+i[f]]=!0;for(i=0;i<e.length;i++)f=n.hasOwnProperty("$"+e[i].value),e[i].selected!==f&&(e[i].selected=f),f&&a&&(e[i].defaultSelected=!0)}else{for(i=""+Rt(i),n=null,f=0;f<e.length;f++){if(e[f].value===i){e[f].selected=!0,a&&(e[f].defaultSelected=!0);return}n!==null||e[f].disabled||(n=e[f])}n!==null&&(n.selected=!0)}}function ac(e,n,i){if(n!=null&&(n=""+Rt(n),n!==e.value&&(e.value=n),i==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=i!=null?""+Rt(i):""}function rc(e,n,i,a){if(n==null){if(a!=null){if(i!=null)throw Error(s(92));if(ot(a)){if(1<a.length)throw Error(s(93));a=a[0]}i=a}i==null&&(i=""),n=i}i=Rt(n),e.defaultValue=i,a=e.textContent,a===i&&a!==""&&a!==null&&(e.value=a),ea(e)}function vo(e,n){if(n){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=n;return}}e.textContent=n}var jg=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uc(e,n,i){var a=n.indexOf("--")===0;i==null||typeof i=="boolean"||i===""?a?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":a?e.setProperty(n,i):typeof i!="number"||i===0||jg.has(n)?n==="float"?e.cssFloat=i:e[n]=(""+i).trim():e[n]=i+"px"}function cc(e,n,i){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,i!=null){for(var a in i)!i.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?e.setProperty(a,""):a==="float"?e.cssFloat="":e[a]="");for(var f in n)a=n[f],n.hasOwnProperty(f)&&i[f]!==a&&uc(e,f,a)}else for(var p in n)n.hasOwnProperty(p)&&uc(e,p,n[p])}function oa(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ey=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),ty=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function pl(e){return ty.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Wt(){}var ia=null;function la(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var So=null,To=null;function dc(e){var n=mo(e);if(n&&(e=n.stateNode)){var i=e[ct]||null;e:switch(e=n.stateNode,n.type){case"input":if(ta(e,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name),n=i.name,i.type==="radio"&&n!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll('input[name="'+Nt(""+n)+'"][type="radio"]'),n=0;n<i.length;n++){var a=i[n];if(a!==e&&a.form===e.form){var f=a[ct]||null;if(!f)throw Error(s(90));ta(a,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<i.length;n++)a=i[n],a.form===e.form&&lc(a)}break e;case"textarea":ac(e,i.value,i.defaultValue);break e;case"select":n=i.value,n!=null&&yo(e,!!i.multiple,n,!1)}}}var sa=!1;function fc(e,n,i){if(sa)return e(n,i);sa=!0;try{var a=e(n);return a}finally{if(sa=!1,(So!==null||To!==null)&&(es(),So&&(n=So,e=To,To=So=null,dc(n),e)))for(n=0;n<e.length;n++)dc(e[n])}}function di(e,n){var i=e.stateNode;if(i===null)return null;var a=i[ct]||null;if(a===null)return null;i=a[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(s(231,n,typeof i));return i}var Zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),aa=!1;if(Zt)try{var fi={};Object.defineProperty(fi,"passive",{get:function(){aa=!0}}),window.addEventListener("test",fi,fi),window.removeEventListener("test",fi,fi)}catch{aa=!1}var Sn=null,ra=null,ml=null;function pc(){if(ml)return ml;var e,n=ra,i=n.length,a,f="value"in Sn?Sn.value:Sn.textContent,p=f.length;for(e=0;e<i&&n[e]===f[e];e++);var S=i-e;for(a=1;a<=S&&n[i-a]===f[p-a];a++);return ml=f.slice(e,1<a?1-a:void 0)}function hl(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function gl(){return!0}function mc(){return!1}function dt(e){function n(i,a,f,p,S){this._reactName=i,this._targetInst=f,this.type=a,this.nativeEvent=p,this.target=S,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(i=e[C],this[C]=i?i(p):p[C]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?gl:mc,this.isPropagationStopped=mc,this}return T(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=gl)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=gl)},persist:function(){},isPersistent:gl}),n}var Kn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},yl=dt(Kn),pi=T({},Kn,{view:0,detail:0}),ny=dt(pi),ua,ca,mi,vl=T({},pi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:fa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==mi&&(mi&&e.type==="mousemove"?(ua=e.screenX-mi.screenX,ca=e.screenY-mi.screenY):ca=ua=0,mi=e),ua)},movementY:function(e){return"movementY"in e?e.movementY:ca}}),hc=dt(vl),oy=T({},vl,{dataTransfer:0}),iy=dt(oy),ly=T({},pi,{relatedTarget:0}),da=dt(ly),sy=T({},Kn,{animationName:0,elapsedTime:0,pseudoElement:0}),ay=dt(sy),ry=T({},Kn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),uy=dt(ry),cy=T({},Kn,{data:0}),gc=dt(cy),dy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function my(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=py[e])?!!n[e]:!1}function fa(){return my}var hy=T({},pi,{key:function(e){if(e.key){var n=dy[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=hl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?fy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:fa,charCode:function(e){return e.type==="keypress"?hl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?hl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),gy=dt(hy),yy=T({},vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yc=dt(yy),vy=T({},pi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:fa}),Sy=dt(vy),Ty=T({},Kn,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ey=dt(Ty),Cy=T({},vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),_y=dt(Cy),Ay=T({},Kn,{newState:0,oldState:0}),by=dt(Ay),xy=[9,13,27,32],pa=Zt&&"CompositionEvent"in window,hi=null;Zt&&"documentMode"in document&&(hi=document.documentMode);var Ry=Zt&&"TextEvent"in window&&!hi,vc=Zt&&(!pa||hi&&8<hi&&11>=hi),Sc=" ",Tc=!1;function Ec(e,n){switch(e){case"keyup":return xy.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Cc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Eo=!1;function Ny(e,n){switch(e){case"compositionend":return Cc(n);case"keypress":return n.which!==32?null:(Tc=!0,Sc);case"textInput":return e=n.data,e===Sc&&Tc?null:e;default:return null}}function Iy(e,n){if(Eo)return e==="compositionend"||!pa&&Ec(e,n)?(e=pc(),ml=ra=Sn=null,Eo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return vc&&n.locale!=="ko"?null:n.data;default:return null}}var My={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _c(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!My[e.type]:n==="textarea"}function Ac(e,n,i,a){So?To?To.push(a):To=[a]:So=a,n=as(n,"onChange"),0<n.length&&(i=new yl("onChange","change",null,i,a),e.push({event:i,listeners:n}))}var gi=null,yi=null;function wy(e){ap(e,0)}function Sl(e){var n=ci(e);if(lc(n))return e}function bc(e,n){if(e==="change")return n}var xc=!1;if(Zt){var ma;if(Zt){var ha="oninput"in document;if(!ha){var Rc=document.createElement("div");Rc.setAttribute("oninput","return;"),ha=typeof Rc.oninput=="function"}ma=ha}else ma=!1;xc=ma&&(!document.documentMode||9<document.documentMode)}function Nc(){gi&&(gi.detachEvent("onpropertychange",Ic),yi=gi=null)}function Ic(e){if(e.propertyName==="value"&&Sl(yi)){var n=[];Ac(n,yi,e,la(e)),fc(wy,n)}}function Dy(e,n,i){e==="focusin"?(Nc(),gi=n,yi=i,gi.attachEvent("onpropertychange",Ic)):e==="focusout"&&Nc()}function Uy(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Sl(yi)}function Py(e,n){if(e==="click")return Sl(n)}function ky(e,n){if(e==="input"||e==="change")return Sl(n)}function Ly(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Tt=typeof Object.is=="function"?Object.is:Ly;function vi(e,n){if(Tt(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var i=Object.keys(e),a=Object.keys(n);if(i.length!==a.length)return!1;for(a=0;a<i.length;a++){var f=i[a];if(!Js.call(n,f)||!Tt(e[f],n[f]))return!1}return!0}function Mc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wc(e,n){var i=Mc(e);e=0;for(var a;i;){if(i.nodeType===3){if(a=e+i.textContent.length,e<=n&&a>=n)return{node:i,offset:n-e};e=a}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=Mc(i)}}function Dc(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Dc(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Uc(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=fl(e.document);n instanceof e.HTMLIFrameElement;){try{var i=typeof n.contentWindow.location.href=="string"}catch{i=!1}if(i)e=n.contentWindow;else break;n=fl(e.document)}return n}function ga(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Hy=Zt&&"documentMode"in document&&11>=document.documentMode,Co=null,ya=null,Si=null,va=!1;function Pc(e,n,i){var a=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;va||Co==null||Co!==fl(a)||(a=Co,"selectionStart"in a&&ga(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Si&&vi(Si,a)||(Si=a,a=as(ya,"onSelect"),0<a.length&&(n=new yl("onSelect","select",null,n,i),e.push({event:n,listeners:a}),n.target=Co)))}function Xn(e,n){var i={};return i[e.toLowerCase()]=n.toLowerCase(),i["Webkit"+e]="webkit"+n,i["Moz"+e]="moz"+n,i}var _o={animationend:Xn("Animation","AnimationEnd"),animationiteration:Xn("Animation","AnimationIteration"),animationstart:Xn("Animation","AnimationStart"),transitionrun:Xn("Transition","TransitionRun"),transitionstart:Xn("Transition","TransitionStart"),transitioncancel:Xn("Transition","TransitionCancel"),transitionend:Xn("Transition","TransitionEnd")},Sa={},kc={};Zt&&(kc=document.createElement("div").style,"AnimationEvent"in window||(delete _o.animationend.animation,delete _o.animationiteration.animation,delete _o.animationstart.animation),"TransitionEvent"in window||delete _o.transitionend.transition);function Qn(e){if(Sa[e])return Sa[e];if(!_o[e])return e;var n=_o[e],i;for(i in n)if(n.hasOwnProperty(i)&&i in kc)return Sa[e]=n[i];return e}var Lc=Qn("animationend"),Hc=Qn("animationiteration"),Gc=Qn("animationstart"),Gy=Qn("transitionrun"),By=Qn("transitionstart"),zy=Qn("transitioncancel"),Bc=Qn("transitionend"),zc=new Map,Ta="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Ta.push("scrollEnd");function Bt(e,n){zc.set(e,n),Jn(n,[e])}var Tl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},It=[],Ao=0,Ea=0;function El(){for(var e=Ao,n=Ea=Ao=0;n<e;){var i=It[n];It[n++]=null;var a=It[n];It[n++]=null;var f=It[n];It[n++]=null;var p=It[n];if(It[n++]=null,a!==null&&f!==null){var S=a.pending;S===null?f.next=f:(f.next=S.next,S.next=f),a.pending=f}p!==0&&Oc(i,f,p)}}function Cl(e,n,i,a){It[Ao++]=e,It[Ao++]=n,It[Ao++]=i,It[Ao++]=a,Ea|=a,e.lanes|=a,e=e.alternate,e!==null&&(e.lanes|=a)}function Ca(e,n,i,a){return Cl(e,n,i,a),_l(e)}function Wn(e,n){return Cl(e,null,null,n),_l(e)}function Oc(e,n,i){e.lanes|=i;var a=e.alternate;a!==null&&(a.lanes|=i);for(var f=!1,p=e.return;p!==null;)p.childLanes|=i,a=p.alternate,a!==null&&(a.childLanes|=i),p.tag===22&&(e=p.stateNode,e===null||e._visibility&1||(f=!0)),e=p,p=p.return;return e.tag===3?(p=e.stateNode,f&&n!==null&&(f=31-St(i),e=p.hiddenUpdates,a=e[f],a===null?e[f]=[n]:a.push(n),n.lane=i|536870912),p):null}function _l(e){if(50<Oi)throw Oi=0,wr=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var bo={};function Oy(e,n,i,a){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Et(e,n,i,a){return new Oy(e,n,i,a)}function _a(e){return e=e.prototype,!(!e||!e.isReactComponent)}function $t(e,n){var i=e.alternate;return i===null?(i=Et(e.tag,n,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=n,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&65011712,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,n=e.dependencies,i.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i.refCleanup=e.refCleanup,i}function qc(e,n){e.flags&=65011714;var i=e.alternate;return i===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=i.childLanes,e.lanes=i.lanes,e.child=i.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=i.memoizedProps,e.memoizedState=i.memoizedState,e.updateQueue=i.updateQueue,e.type=i.type,n=i.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Al(e,n,i,a,f,p){var S=0;if(a=e,typeof e=="function")_a(e)&&(S=1);else if(typeof e=="string")S=Jv(e,i,te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case F:return e=Et(31,i,n,f),e.elementType=F,e.lanes=p,e;case M:return Zn(i.children,f,p,n);case I:S=8,f|=24;break;case U:return e=Et(12,i,n,f|2),e.elementType=U,e.lanes=p,e;case $:return e=Et(13,i,n,f),e.elementType=$,e.lanes=p,e;case ee:return e=Et(19,i,n,f),e.elementType=ee,e.lanes=p,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case B:S=10;break e;case V:S=9;break e;case K:S=11;break e;case J:S=14;break e;case Q:S=16,a=null;break e}S=29,i=Error(s(130,e===null?"null":typeof e,"")),a=null}return n=Et(S,i,n,f),n.elementType=e,n.type=a,n.lanes=p,n}function Zn(e,n,i,a){return e=Et(7,e,a,n),e.lanes=i,e}function Aa(e,n,i){return e=Et(6,e,null,n),e.lanes=i,e}function Vc(e){var n=Et(18,null,null,0);return n.stateNode=e,n}function ba(e,n,i){return n=Et(4,e.children!==null?e.children:[],e.key,n),n.lanes=i,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Fc=new WeakMap;function Mt(e,n){if(typeof e=="object"&&e!==null){var i=Fc.get(e);return i!==void 0?i:(n={value:e,source:n,stack:Vu(n)},Fc.set(e,n),n)}return{value:e,source:n,stack:Vu(n)}}var xo=[],Ro=0,bl=null,Ti=0,wt=[],Dt=0,Tn=null,Yt=1,Jt="";function jt(e,n){xo[Ro++]=Ti,xo[Ro++]=bl,bl=e,Ti=n}function Yc(e,n,i){wt[Dt++]=Yt,wt[Dt++]=Jt,wt[Dt++]=Tn,Tn=e;var a=Yt;e=Jt;var f=32-St(a)-1;a&=~(1<<f),i+=1;var p=32-St(n)+f;if(30<p){var S=f-f%5;p=(a&(1<<S)-1).toString(32),a>>=S,f-=S,Yt=1<<32-St(n)+f|i<<f|a,Jt=p+e}else Yt=1<<p|i<<f|a,Jt=e}function xa(e){e.return!==null&&(jt(e,1),Yc(e,1,0))}function Ra(e){for(;e===bl;)bl=xo[--Ro],xo[Ro]=null,Ti=xo[--Ro],xo[Ro]=null;for(;e===Tn;)Tn=wt[--Dt],wt[Dt]=null,Jt=wt[--Dt],wt[Dt]=null,Yt=wt[--Dt],wt[Dt]=null}function Jc(e,n){wt[Dt++]=Yt,wt[Dt++]=Jt,wt[Dt++]=Tn,Yt=n.id,Jt=n.overflow,Tn=e}var je=null,Ue=null,ve=!1,En=null,Ut=!1,Na=Error(s(519));function Cn(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ei(Mt(n,e)),Na}function Kc(e){var n=e.stateNode,i=e.type,a=e.memoizedProps;switch(n[$e]=e,n[ct]=a,i){case"dialog":he("cancel",n),he("close",n);break;case"iframe":case"object":case"embed":he("load",n);break;case"video":case"audio":for(i=0;i<Vi.length;i++)he(Vi[i],n);break;case"source":he("error",n);break;case"img":case"image":case"link":he("error",n),he("load",n);break;case"details":he("toggle",n);break;case"input":he("invalid",n),sc(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0);break;case"select":he("invalid",n);break;case"textarea":he("invalid",n),rc(n,a.value,a.defaultValue,a.children)}i=a.children,typeof i!="string"&&typeof i!="number"&&typeof i!="bigint"||n.textContent===""+i||a.suppressHydrationWarning===!0||dp(n.textContent,i)?(a.popover!=null&&(he("beforetoggle",n),he("toggle",n)),a.onScroll!=null&&he("scroll",n),a.onScrollEnd!=null&&he("scrollend",n),a.onClick!=null&&(n.onclick=Wt),n=!0):n=!1,n||Cn(e,!0)}function Xc(e){for(je=e.return;je;)switch(je.tag){case 5:case 31:case 13:Ut=!1;return;case 27:case 3:Ut=!0;return;default:je=je.return}}function No(e){if(e!==je)return!1;if(!ve)return Xc(e),ve=!0,!1;var n=e.tag,i;if((i=n!==3&&n!==27)&&((i=n===5)&&(i=e.type,i=!(i!=="form"&&i!=="button")||Jr(e.type,e.memoizedProps)),i=!i),i&&Ue&&Cn(e),Xc(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ue=Tp(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));Ue=Tp(e)}else n===27?(n=Ue,Ln(e.type)?(e=Zr,Zr=null,Ue=e):Ue=n):Ue=je?kt(e.stateNode.nextSibling):null;return!0}function $n(){Ue=je=null,ve=!1}function Ia(){var e=En;return e!==null&&(ht===null?ht=e:ht.push.apply(ht,e),En=null),e}function Ei(e){En===null?En=[e]:En.push(e)}var Ma=R(null),jn=null,en=null;function _n(e,n,i){W(Ma,n._currentValue),n._currentValue=i}function tn(e){e._currentValue=Ma.current,q(Ma)}function wa(e,n,i){for(;e!==null;){var a=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),e===i)break;e=e.return}}function Da(e,n,i,a){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var p=f.dependencies;if(p!==null){var S=f.child;p=p.firstContext;e:for(;p!==null;){var C=p;p=f;for(var A=0;A<n.length;A++)if(C.context===n[A]){p.lanes|=i,C=p.alternate,C!==null&&(C.lanes|=i),wa(p.return,i,e),a||(S=null);break e}p=C.next}}else if(f.tag===18){if(S=f.return,S===null)throw Error(s(341));S.lanes|=i,p=S.alternate,p!==null&&(p.lanes|=i),wa(S,i,e),S=null}else S=f.child;if(S!==null)S.return=f;else for(S=f;S!==null;){if(S===e){S=null;break}if(f=S.sibling,f!==null){f.return=S.return,S=f;break}S=S.return}f=S}}function Io(e,n,i,a){e=null;for(var f=n,p=!1;f!==null;){if(!p){if((f.flags&524288)!==0)p=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var S=f.alternate;if(S===null)throw Error(s(387));if(S=S.memoizedProps,S!==null){var C=f.type;Tt(f.pendingProps.value,S.value)||(e!==null?e.push(C):e=[C])}}else if(f===Ae.current){if(S=f.alternate,S===null)throw Error(s(387));S.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Xi):e=[Xi])}f=f.return}e!==null&&Da(n,e,i,a),n.flags|=262144}function xl(e){for(e=e.firstContext;e!==null;){if(!Tt(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function eo(e){jn=e,en=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function et(e){return Qc(jn,e)}function Rl(e,n){return jn===null&&eo(e),Qc(e,n)}function Qc(e,n){var i=n._currentValue;if(n={context:n,memoizedValue:i,next:null},en===null){if(e===null)throw Error(s(308));en=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else en=en.next=n;return i}var qy=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(i,a){e.push(a)}};this.abort=function(){n.aborted=!0,e.forEach(function(i){return i()})}},Vy=o.unstable_scheduleCallback,Fy=o.unstable_NormalPriority,Fe={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ua(){return{controller:new qy,data:new Map,refCount:0}}function Ci(e){e.refCount--,e.refCount===0&&Vy(Fy,function(){e.controller.abort()})}var _i=null,Pa=0,Mo=0,wo=null;function Yy(e,n){if(_i===null){var i=_i=[];Pa=0,Mo=Hr(),wo={status:"pending",value:void 0,then:function(a){i.push(a)}}}return Pa++,n.then(Wc,Wc),n}function Wc(){if(--Pa===0&&_i!==null){wo!==null&&(wo.status="fulfilled");var e=_i;_i=null,Mo=0,wo=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Jy(e,n){var i=[],a={status:"pending",value:null,reason:null,then:function(f){i.push(f)}};return e.then(function(){a.status="fulfilled",a.value=n;for(var f=0;f<i.length;f++)(0,i[f])(n)},function(f){for(a.status="rejected",a.reason=f,f=0;f<i.length;f++)(0,i[f])(void 0)}),a}var Zc=H.S;H.S=function(e,n){kf=yt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Yy(e,n),Zc!==null&&Zc(e,n)};var to=R(null);function ka(){var e=to.current;return e!==null?e:De.pooledCache}function Nl(e,n){n===null?W(to,to.current):W(to,n.pool)}function $c(){var e=ka();return e===null?null:{parent:Fe._currentValue,pool:e}}var Do=Error(s(460)),La=Error(s(474)),Il=Error(s(542)),Ml={then:function(){}};function jc(e){return e=e.status,e==="fulfilled"||e==="rejected"}function ed(e,n,i){switch(i=e[i],i===void 0?e.push(n):i!==n&&(n.then(Wt,Wt),n=i),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,nd(e),e;default:if(typeof n.status=="string")n.then(Wt,Wt);else{if(e=De,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(a){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=a}},function(a){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,nd(e),e}throw oo=n,Do}}function no(e){try{var n=e._init;return n(e._payload)}catch(i){throw i!==null&&typeof i=="object"&&typeof i.then=="function"?(oo=i,Do):i}}var oo=null;function td(){if(oo===null)throw Error(s(459));var e=oo;return oo=null,e}function nd(e){if(e===Do||e===Il)throw Error(s(483))}var Uo=null,Ai=0;function wl(e){var n=Ai;return Ai+=1,Uo===null&&(Uo=[]),ed(Uo,e,n)}function bi(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Dl(e,n){throw n.$$typeof===E?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function od(e){function n(N,x){if(e){var w=N.deletions;w===null?(N.deletions=[x],N.flags|=16):w.push(x)}}function i(N,x){if(!e)return null;for(;x!==null;)n(N,x),x=x.sibling;return null}function a(N){for(var x=new Map;N!==null;)N.key!==null?x.set(N.key,N):x.set(N.index,N),N=N.sibling;return x}function f(N,x){return N=$t(N,x),N.index=0,N.sibling=null,N}function p(N,x,w){return N.index=w,e?(w=N.alternate,w!==null?(w=w.index,w<x?(N.flags|=67108866,x):w):(N.flags|=67108866,x)):(N.flags|=1048576,x)}function S(N){return e&&N.alternate===null&&(N.flags|=67108866),N}function C(N,x,w,z){return x===null||x.tag!==6?(x=Aa(w,N.mode,z),x.return=N,x):(x=f(x,w),x.return=N,x)}function A(N,x,w,z){var ie=w.type;return ie===M?G(N,x,w.props.children,z,w.key):x!==null&&(x.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===Q&&no(ie)===x.type)?(x=f(x,w.props),bi(x,w),x.return=N,x):(x=Al(w.type,w.key,w.props,null,N.mode,z),bi(x,w),x.return=N,x)}function D(N,x,w,z){return x===null||x.tag!==4||x.stateNode.containerInfo!==w.containerInfo||x.stateNode.implementation!==w.implementation?(x=ba(w,N.mode,z),x.return=N,x):(x=f(x,w.children||[]),x.return=N,x)}function G(N,x,w,z,ie){return x===null||x.tag!==7?(x=Zn(w,N.mode,z,ie),x.return=N,x):(x=f(x,w),x.return=N,x)}function O(N,x,w){if(typeof x=="string"&&x!==""||typeof x=="number"||typeof x=="bigint")return x=Aa(""+x,N.mode,w),x.return=N,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case _:return w=Al(x.type,x.key,x.props,null,N.mode,w),bi(w,x),w.return=N,w;case k:return x=ba(x,N.mode,w),x.return=N,x;case Q:return x=no(x),O(N,x,w)}if(ot(x)||ue(x))return x=Zn(x,N.mode,w,null),x.return=N,x;if(typeof x.then=="function")return O(N,wl(x),w);if(x.$$typeof===B)return O(N,Rl(N,x),w);Dl(N,x)}return null}function P(N,x,w,z){var ie=x!==null?x.key:null;if(typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint")return ie!==null?null:C(N,x,""+w,z);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case _:return w.key===ie?A(N,x,w,z):null;case k:return w.key===ie?D(N,x,w,z):null;case Q:return w=no(w),P(N,x,w,z)}if(ot(w)||ue(w))return ie!==null?null:G(N,x,w,z,null);if(typeof w.then=="function")return P(N,x,wl(w),z);if(w.$$typeof===B)return P(N,x,Rl(N,w),z);Dl(N,w)}return null}function L(N,x,w,z,ie){if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return N=N.get(w)||null,C(x,N,""+z,ie);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case _:return N=N.get(z.key===null?w:z.key)||null,A(x,N,z,ie);case k:return N=N.get(z.key===null?w:z.key)||null,D(x,N,z,ie);case Q:return z=no(z),L(N,x,w,z,ie)}if(ot(z)||ue(z))return N=N.get(w)||null,G(x,N,z,ie,null);if(typeof z.then=="function")return L(N,x,w,wl(z),ie);if(z.$$typeof===B)return L(N,x,w,Rl(x,z),ie);Dl(x,z)}return null}function j(N,x,w,z){for(var ie=null,Te=null,ne=x,fe=x=0,ye=null;ne!==null&&fe<w.length;fe++){ne.index>fe?(ye=ne,ne=null):ye=ne.sibling;var Ee=P(N,ne,w[fe],z);if(Ee===null){ne===null&&(ne=ye);break}e&&ne&&Ee.alternate===null&&n(N,ne),x=p(Ee,x,fe),Te===null?ie=Ee:Te.sibling=Ee,Te=Ee,ne=ye}if(fe===w.length)return i(N,ne),ve&&jt(N,fe),ie;if(ne===null){for(;fe<w.length;fe++)ne=O(N,w[fe],z),ne!==null&&(x=p(ne,x,fe),Te===null?ie=ne:Te.sibling=ne,Te=ne);return ve&&jt(N,fe),ie}for(ne=a(ne);fe<w.length;fe++)ye=L(ne,N,fe,w[fe],z),ye!==null&&(e&&ye.alternate!==null&&ne.delete(ye.key===null?fe:ye.key),x=p(ye,x,fe),Te===null?ie=ye:Te.sibling=ye,Te=ye);return e&&ne.forEach(function(On){return n(N,On)}),ve&&jt(N,fe),ie}function le(N,x,w,z){if(w==null)throw Error(s(151));for(var ie=null,Te=null,ne=x,fe=x=0,ye=null,Ee=w.next();ne!==null&&!Ee.done;fe++,Ee=w.next()){ne.index>fe?(ye=ne,ne=null):ye=ne.sibling;var On=P(N,ne,Ee.value,z);if(On===null){ne===null&&(ne=ye);break}e&&ne&&On.alternate===null&&n(N,ne),x=p(On,x,fe),Te===null?ie=On:Te.sibling=On,Te=On,ne=ye}if(Ee.done)return i(N,ne),ve&&jt(N,fe),ie;if(ne===null){for(;!Ee.done;fe++,Ee=w.next())Ee=O(N,Ee.value,z),Ee!==null&&(x=p(Ee,x,fe),Te===null?ie=Ee:Te.sibling=Ee,Te=Ee);return ve&&jt(N,fe),ie}for(ne=a(ne);!Ee.done;fe++,Ee=w.next())Ee=L(ne,N,fe,Ee.value,z),Ee!==null&&(e&&Ee.alternate!==null&&ne.delete(Ee.key===null?fe:Ee.key),x=p(Ee,x,fe),Te===null?ie=Ee:Te.sibling=Ee,Te=Ee);return e&&ne.forEach(function(o0){return n(N,o0)}),ve&&jt(N,fe),ie}function Me(N,x,w,z){if(typeof w=="object"&&w!==null&&w.type===M&&w.key===null&&(w=w.props.children),typeof w=="object"&&w!==null){switch(w.$$typeof){case _:e:{for(var ie=w.key;x!==null;){if(x.key===ie){if(ie=w.type,ie===M){if(x.tag===7){i(N,x.sibling),z=f(x,w.props.children),z.return=N,N=z;break e}}else if(x.elementType===ie||typeof ie=="object"&&ie!==null&&ie.$$typeof===Q&&no(ie)===x.type){i(N,x.sibling),z=f(x,w.props),bi(z,w),z.return=N,N=z;break e}i(N,x);break}else n(N,x);x=x.sibling}w.type===M?(z=Zn(w.props.children,N.mode,z,w.key),z.return=N,N=z):(z=Al(w.type,w.key,w.props,null,N.mode,z),bi(z,w),z.return=N,N=z)}return S(N);case k:e:{for(ie=w.key;x!==null;){if(x.key===ie)if(x.tag===4&&x.stateNode.containerInfo===w.containerInfo&&x.stateNode.implementation===w.implementation){i(N,x.sibling),z=f(x,w.children||[]),z.return=N,N=z;break e}else{i(N,x);break}else n(N,x);x=x.sibling}z=ba(w,N.mode,z),z.return=N,N=z}return S(N);case Q:return w=no(w),Me(N,x,w,z)}if(ot(w))return j(N,x,w,z);if(ue(w)){if(ie=ue(w),typeof ie!="function")throw Error(s(150));return w=ie.call(w),le(N,x,w,z)}if(typeof w.then=="function")return Me(N,x,wl(w),z);if(w.$$typeof===B)return Me(N,x,Rl(N,w),z);Dl(N,w)}return typeof w=="string"&&w!==""||typeof w=="number"||typeof w=="bigint"?(w=""+w,x!==null&&x.tag===6?(i(N,x.sibling),z=f(x,w),z.return=N,N=z):(i(N,x),z=Aa(w,N.mode,z),z.return=N,N=z),S(N)):i(N,x)}return function(N,x,w,z){try{Ai=0;var ie=Me(N,x,w,z);return Uo=null,ie}catch(ne){if(ne===Do||ne===Il)throw ne;var Te=Et(29,ne,null,N.mode);return Te.lanes=z,Te.return=N,Te}finally{}}}var io=od(!0),id=od(!1),An=!1;function Ha(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ga(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function bn(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function xn(e,n,i){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(_e&2)!==0){var f=a.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),a.pending=n,n=_l(e),Oc(e,null,i),n}return Cl(e,a,n,i),_l(e)}function xi(e,n,i){if(n=n.updateQueue,n!==null&&(n=n.shared,(i&4194048)!==0)){var a=n.lanes;a&=e.pendingLanes,i|=a,n.lanes=i,Qu(e,i)}}function Ba(e,n){var i=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,i===a)){var f=null,p=null;if(i=i.firstBaseUpdate,i!==null){do{var S={lane:i.lane,tag:i.tag,payload:i.payload,callback:null,next:null};p===null?f=p=S:p=p.next=S,i=i.next}while(i!==null);p===null?f=p=n:p=p.next=n}else f=p=n;i={baseState:a.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:a.shared,callbacks:a.callbacks},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=n:e.next=n,i.lastBaseUpdate=n}var za=!1;function Ri(){if(za){var e=wo;if(e!==null)throw e}}function Ni(e,n,i,a){za=!1;var f=e.updateQueue;An=!1;var p=f.firstBaseUpdate,S=f.lastBaseUpdate,C=f.shared.pending;if(C!==null){f.shared.pending=null;var A=C,D=A.next;A.next=null,S===null?p=D:S.next=D,S=A;var G=e.alternate;G!==null&&(G=G.updateQueue,C=G.lastBaseUpdate,C!==S&&(C===null?G.firstBaseUpdate=D:C.next=D,G.lastBaseUpdate=A))}if(p!==null){var O=f.baseState;S=0,G=D=A=null,C=p;do{var P=C.lane&-536870913,L=P!==C.lane;if(L?(ge&P)===P:(a&P)===P){P!==0&&P===Mo&&(za=!0),G!==null&&(G=G.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});e:{var j=e,le=C;P=n;var Me=i;switch(le.tag){case 1:if(j=le.payload,typeof j=="function"){O=j.call(Me,O,P);break e}O=j;break e;case 3:j.flags=j.flags&-65537|128;case 0:if(j=le.payload,P=typeof j=="function"?j.call(Me,O,P):j,P==null)break e;O=T({},O,P);break e;case 2:An=!0}}P=C.callback,P!==null&&(e.flags|=64,L&&(e.flags|=8192),L=f.callbacks,L===null?f.callbacks=[P]:L.push(P))}else L={lane:P,tag:C.tag,payload:C.payload,callback:C.callback,next:null},G===null?(D=G=L,A=O):G=G.next=L,S|=P;if(C=C.next,C===null){if(C=f.shared.pending,C===null)break;L=C,C=L.next,L.next=null,f.lastBaseUpdate=L,f.shared.pending=null}}while(!0);G===null&&(A=O),f.baseState=A,f.firstBaseUpdate=D,f.lastBaseUpdate=G,p===null&&(f.shared.lanes=0),wn|=S,e.lanes=S,e.memoizedState=O}}function ld(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function sd(e,n){var i=e.callbacks;if(i!==null)for(e.callbacks=null,e=0;e<i.length;e++)ld(i[e],n)}var Po=R(null),Ul=R(0);function ad(e,n){e=dn,W(Ul,e),W(Po,n),dn=e|n.baseLanes}function Oa(){W(Ul,dn),W(Po,Po.current)}function qa(){dn=Ul.current,q(Po),q(Ul)}var Ct=R(null),Pt=null;function Rn(e){var n=e.alternate;W(qe,qe.current&1),W(Ct,e),Pt===null&&(n===null||Po.current!==null||n.memoizedState!==null)&&(Pt=e)}function Va(e){W(qe,qe.current),W(Ct,e),Pt===null&&(Pt=e)}function rd(e){e.tag===22?(W(qe,qe.current),W(Ct,e),Pt===null&&(Pt=e)):Nn()}function Nn(){W(qe,qe.current),W(Ct,Ct.current)}function _t(e){q(Ct),Pt===e&&(Pt=null),q(qe)}var qe=R(0);function Pl(e){for(var n=e;n!==null;){if(n.tag===13){var i=n.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||Qr(i)||Wr(i)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var nn=0,de=null,Ne=null,Ye=null,kl=!1,ko=!1,lo=!1,Ll=0,Ii=0,Lo=null,Ky=0;function Be(){throw Error(s(321))}function Fa(e,n){if(n===null)return!1;for(var i=0;i<n.length&&i<e.length;i++)if(!Tt(e[i],n[i]))return!1;return!0}function Ya(e,n,i,a,f,p){return nn=p,de=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,H.H=e===null||e.memoizedState===null?Yd:sr,lo=!1,p=i(a,f),lo=!1,ko&&(p=cd(n,i,a,f)),ud(e),p}function ud(e){H.H=Di;var n=Ne!==null&&Ne.next!==null;if(nn=0,Ye=Ne=de=null,kl=!1,Ii=0,Lo=null,n)throw Error(s(300));e===null||Je||(e=e.dependencies,e!==null&&xl(e)&&(Je=!0))}function cd(e,n,i,a){de=e;var f=0;do{if(ko&&(Lo=null),Ii=0,ko=!1,25<=f)throw Error(s(301));if(f+=1,Ye=Ne=null,e.updateQueue!=null){var p=e.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}H.H=Jd,p=n(i,a)}while(ko);return p}function Xy(){var e=H.H,n=e.useState()[0];return n=typeof n.then=="function"?Mi(n):n,e=e.useState()[0],(Ne!==null?Ne.memoizedState:null)!==e&&(de.flags|=1024),n}function Ja(){var e=Ll!==0;return Ll=0,e}function Ka(e,n,i){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~i}function Xa(e){if(kl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}kl=!1}nn=0,Ye=Ne=de=null,ko=!1,Ii=Ll=0,Lo=null}function at(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?de.memoizedState=Ye=e:Ye=Ye.next=e,Ye}function Ve(){if(Ne===null){var e=de.alternate;e=e!==null?e.memoizedState:null}else e=Ne.next;var n=Ye===null?de.memoizedState:Ye.next;if(n!==null)Ye=n,Ne=e;else{if(e===null)throw de.alternate===null?Error(s(467)):Error(s(310));Ne=e,e={memoizedState:Ne.memoizedState,baseState:Ne.baseState,baseQueue:Ne.baseQueue,queue:Ne.queue,next:null},Ye===null?de.memoizedState=Ye=e:Ye=Ye.next=e}return Ye}function Hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Mi(e){var n=Ii;return Ii+=1,Lo===null&&(Lo=[]),e=ed(Lo,e,n),n=de,(Ye===null?n.memoizedState:Ye.next)===null&&(n=n.alternate,H.H=n===null||n.memoizedState===null?Yd:sr),e}function Gl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Mi(e);if(e.$$typeof===B)return et(e)}throw Error(s(438,String(e)))}function Qa(e){var n=null,i=de.updateQueue;if(i!==null&&(n=i.memoCache),n==null){var a=de.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),i===null&&(i=Hl(),de.updateQueue=i),i.memoCache=n,i=n.data[n.index],i===void 0)for(i=n.data[n.index]=Array(e),a=0;a<e;a++)i[a]=Y;return n.index++,i}function on(e,n){return typeof n=="function"?n(e):n}function Bl(e){var n=Ve();return Wa(n,Ne,e)}function Wa(e,n,i){var a=e.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=i;var f=e.baseQueue,p=a.pending;if(p!==null){if(f!==null){var S=f.next;f.next=p.next,p.next=S}n.baseQueue=f=p,a.pending=null}if(p=e.baseState,f===null)e.memoizedState=p;else{n=f.next;var C=S=null,A=null,D=n,G=!1;do{var O=D.lane&-536870913;if(O!==D.lane?(ge&O)===O:(nn&O)===O){var P=D.revertLane;if(P===0)A!==null&&(A=A.next={lane:0,revertLane:0,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null}),O===Mo&&(G=!0);else if((nn&P)===P){D=D.next,P===Mo&&(G=!0);continue}else O={lane:0,revertLane:D.revertLane,gesture:null,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},A===null?(C=A=O,S=p):A=A.next=O,de.lanes|=P,wn|=P;O=D.action,lo&&i(p,O),p=D.hasEagerState?D.eagerState:i(p,O)}else P={lane:O,revertLane:D.revertLane,gesture:D.gesture,action:D.action,hasEagerState:D.hasEagerState,eagerState:D.eagerState,next:null},A===null?(C=A=P,S=p):A=A.next=P,de.lanes|=O,wn|=O;D=D.next}while(D!==null&&D!==n);if(A===null?S=p:A.next=C,!Tt(p,e.memoizedState)&&(Je=!0,G&&(i=wo,i!==null)))throw i;e.memoizedState=p,e.baseState=S,e.baseQueue=A,a.lastRenderedState=p}return f===null&&(a.lanes=0),[e.memoizedState,a.dispatch]}function Za(e){var n=Ve(),i=n.queue;if(i===null)throw Error(s(311));i.lastRenderedReducer=e;var a=i.dispatch,f=i.pending,p=n.memoizedState;if(f!==null){i.pending=null;var S=f=f.next;do p=e(p,S.action),S=S.next;while(S!==f);Tt(p,n.memoizedState)||(Je=!0),n.memoizedState=p,n.baseQueue===null&&(n.baseState=p),i.lastRenderedState=p}return[p,a]}function dd(e,n,i){var a=de,f=Ve(),p=ve;if(p){if(i===void 0)throw Error(s(407));i=i()}else i=n();var S=!Tt((Ne||f).memoizedState,i);if(S&&(f.memoizedState=i,Je=!0),f=f.queue,er(md.bind(null,a,f,e),[e]),f.getSnapshot!==n||S||Ye!==null&&Ye.memoizedState.tag&1){if(a.flags|=2048,Ho(9,{destroy:void 0},pd.bind(null,a,f,i,n),null),De===null)throw Error(s(349));p||(nn&127)!==0||fd(a,n,i)}return i}function fd(e,n,i){e.flags|=16384,e={getSnapshot:n,value:i},n=de.updateQueue,n===null?(n=Hl(),de.updateQueue=n,n.stores=[e]):(i=n.stores,i===null?n.stores=[e]:i.push(e))}function pd(e,n,i,a){n.value=i,n.getSnapshot=a,hd(n)&&gd(e)}function md(e,n,i){return i(function(){hd(n)&&gd(e)})}function hd(e){var n=e.getSnapshot;e=e.value;try{var i=n();return!Tt(e,i)}catch{return!0}}function gd(e){var n=Wn(e,2);n!==null&&gt(n,e,2)}function $a(e){var n=at();if(typeof e=="function"){var i=e;if(e=i(),lo){yn(!0);try{i()}finally{yn(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:on,lastRenderedState:e},n}function yd(e,n,i,a){return e.baseState=i,Wa(e,Ne,typeof a=="function"?a:on)}function Qy(e,n,i,a,f){if(ql(e))throw Error(s(485));if(e=n.action,e!==null){var p={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){p.listeners.push(S)}};H.T!==null?i(!0):p.isTransition=!1,a(p),i=n.pending,i===null?(p.next=n.pending=p,vd(n,p)):(p.next=i.next,n.pending=i.next=p)}}function vd(e,n){var i=n.action,a=n.payload,f=e.state;if(n.isTransition){var p=H.T,S={};H.T=S;try{var C=i(f,a),A=H.S;A!==null&&A(S,C),Sd(e,n,C)}catch(D){ja(e,n,D)}finally{p!==null&&S.types!==null&&(p.types=S.types),H.T=p}}else try{p=i(f,a),Sd(e,n,p)}catch(D){ja(e,n,D)}}function Sd(e,n,i){i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(function(a){Td(e,n,a)},function(a){return ja(e,n,a)}):Td(e,n,i)}function Td(e,n,i){n.status="fulfilled",n.value=i,Ed(n),e.state=i,n=e.pending,n!==null&&(i=n.next,i===n?e.pending=null:(i=i.next,n.next=i,vd(e,i)))}function ja(e,n,i){var a=e.pending;if(e.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=i,Ed(n),n=n.next;while(n!==a)}e.action=null}function Ed(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Cd(e,n){return n}function _d(e,n){if(ve){var i=De.formState;if(i!==null){e:{var a=de;if(ve){if(Ue){t:{for(var f=Ue,p=Ut;f.nodeType!==8;){if(!p){f=null;break t}if(f=kt(f.nextSibling),f===null){f=null;break t}}p=f.data,f=p==="F!"||p==="F"?f:null}if(f){Ue=kt(f.nextSibling),a=f.data==="F!";break e}}Cn(a)}a=!1}a&&(n=i[0])}}return i=at(),i.memoizedState=i.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Cd,lastRenderedState:n},i.queue=a,i=qd.bind(null,de,a),a.dispatch=i,a=$a(!1),p=lr.bind(null,de,!1,a.queue),a=at(),f={state:n,dispatch:null,action:e,pending:null},a.queue=f,i=Qy.bind(null,de,f,p,i),f.dispatch=i,a.memoizedState=e,[n,i,!1]}function Ad(e){var n=Ve();return bd(n,Ne,e)}function bd(e,n,i){if(n=Wa(e,n,Cd)[0],e=Bl(on)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var a=Mi(n)}catch(S){throw S===Do?Il:S}else a=n;n=Ve();var f=n.queue,p=f.dispatch;return i!==n.memoizedState&&(de.flags|=2048,Ho(9,{destroy:void 0},Wy.bind(null,f,i),null)),[a,p,e]}function Wy(e,n){e.action=n}function xd(e){var n=Ve(),i=Ne;if(i!==null)return bd(n,i,e);Ve(),n=n.memoizedState,i=Ve();var a=i.queue.dispatch;return i.memoizedState=e,[n,a,!1]}function Ho(e,n,i,a){return e={tag:e,create:i,deps:a,inst:n,next:null},n=de.updateQueue,n===null&&(n=Hl(),de.updateQueue=n),i=n.lastEffect,i===null?n.lastEffect=e.next=e:(a=i.next,i.next=e,e.next=a,n.lastEffect=e),e}function Rd(){return Ve().memoizedState}function zl(e,n,i,a){var f=at();de.flags|=e,f.memoizedState=Ho(1|n,{destroy:void 0},i,a===void 0?null:a)}function Ol(e,n,i,a){var f=Ve();a=a===void 0?null:a;var p=f.memoizedState.inst;Ne!==null&&a!==null&&Fa(a,Ne.memoizedState.deps)?f.memoizedState=Ho(n,p,i,a):(de.flags|=e,f.memoizedState=Ho(1|n,p,i,a))}function Nd(e,n){zl(8390656,8,e,n)}function er(e,n){Ol(2048,8,e,n)}function Zy(e){de.flags|=4;var n=de.updateQueue;if(n===null)n=Hl(),de.updateQueue=n,n.events=[e];else{var i=n.events;i===null?n.events=[e]:i.push(e)}}function Id(e){var n=Ve().memoizedState;return Zy({ref:n,nextImpl:e}),function(){if((_e&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Md(e,n){return Ol(4,2,e,n)}function wd(e,n){return Ol(4,4,e,n)}function Dd(e,n){if(typeof n=="function"){e=e();var i=n(e);return function(){typeof i=="function"?i():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ud(e,n,i){i=i!=null?i.concat([e]):null,Ol(4,4,Dd.bind(null,n,e),i)}function tr(){}function Pd(e,n){var i=Ve();n=n===void 0?null:n;var a=i.memoizedState;return n!==null&&Fa(n,a[1])?a[0]:(i.memoizedState=[e,n],e)}function kd(e,n){var i=Ve();n=n===void 0?null:n;var a=i.memoizedState;if(n!==null&&Fa(n,a[1]))return a[0];if(a=e(),lo){yn(!0);try{e()}finally{yn(!1)}}return i.memoizedState=[a,n],a}function nr(e,n,i){return i===void 0||(nn&1073741824)!==0&&(ge&261930)===0?e.memoizedState=n:(e.memoizedState=i,e=Hf(),de.lanes|=e,wn|=e,i)}function Ld(e,n,i,a){return Tt(i,n)?i:Po.current!==null?(e=nr(e,i,a),Tt(e,n)||(Je=!0),e):(nn&42)===0||(nn&1073741824)!==0&&(ge&261930)===0?(Je=!0,e.memoizedState=i):(e=Hf(),de.lanes|=e,wn|=e,n)}function Hd(e,n,i,a,f){var p=X.p;X.p=p!==0&&8>p?p:8;var S=H.T,C={};H.T=C,lr(e,!1,n,i);try{var A=f(),D=H.S;if(D!==null&&D(C,A),A!==null&&typeof A=="object"&&typeof A.then=="function"){var G=Jy(A,a);wi(e,n,G,xt(e))}else wi(e,n,a,xt(e))}catch(O){wi(e,n,{then:function(){},status:"rejected",reason:O},xt())}finally{X.p=p,S!==null&&C.types!==null&&(S.types=C.types),H.T=S}}function $y(){}function or(e,n,i,a){if(e.tag!==5)throw Error(s(476));var f=Gd(e).queue;Hd(e,f,n,se,i===null?$y:function(){return Bd(e),i(a)})}function Gd(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:se,baseState:se,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:on,lastRenderedState:se},next:null};var i={};return n.next={memoizedState:i,baseState:i,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:on,lastRenderedState:i},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Bd(e){var n=Gd(e);n.next===null&&(n=e.alternate.memoizedState),wi(e,n.next.queue,{},xt())}function ir(){return et(Xi)}function zd(){return Ve().memoizedState}function Od(){return Ve().memoizedState}function jy(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var i=xt();e=bn(i);var a=xn(n,e,i);a!==null&&(gt(a,n,i),xi(a,n,i)),n={cache:Ua()},e.payload=n;return}n=n.return}}function ev(e,n,i){var a=xt();i={lane:a,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ql(e)?Vd(n,i):(i=Ca(e,n,i,a),i!==null&&(gt(i,e,a),Fd(i,n,a)))}function qd(e,n,i){var a=xt();wi(e,n,i,a)}function wi(e,n,i,a){var f={lane:a,revertLane:0,gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null};if(ql(e))Vd(n,f);else{var p=e.alternate;if(e.lanes===0&&(p===null||p.lanes===0)&&(p=n.lastRenderedReducer,p!==null))try{var S=n.lastRenderedState,C=p(S,i);if(f.hasEagerState=!0,f.eagerState=C,Tt(C,S))return Cl(e,n,f,0),De===null&&El(),!1}catch{}finally{}if(i=Ca(e,n,f,a),i!==null)return gt(i,e,a),Fd(i,n,a),!0}return!1}function lr(e,n,i,a){if(a={lane:2,revertLane:Hr(),gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ql(e)){if(n)throw Error(s(479))}else n=Ca(e,i,a,2),n!==null&&gt(n,e,2)}function ql(e){var n=e.alternate;return e===de||n!==null&&n===de}function Vd(e,n){ko=kl=!0;var i=e.pending;i===null?n.next=n:(n.next=i.next,i.next=n),e.pending=n}function Fd(e,n,i){if((i&4194048)!==0){var a=n.lanes;a&=e.pendingLanes,i|=a,n.lanes=i,Qu(e,i)}}var Di={readContext:et,use:Gl,useCallback:Be,useContext:Be,useEffect:Be,useImperativeHandle:Be,useLayoutEffect:Be,useInsertionEffect:Be,useMemo:Be,useReducer:Be,useRef:Be,useState:Be,useDebugValue:Be,useDeferredValue:Be,useTransition:Be,useSyncExternalStore:Be,useId:Be,useHostTransitionStatus:Be,useFormState:Be,useActionState:Be,useOptimistic:Be,useMemoCache:Be,useCacheRefresh:Be};Di.useEffectEvent=Be;var Yd={readContext:et,use:Gl,useCallback:function(e,n){return at().memoizedState=[e,n===void 0?null:n],e},useContext:et,useEffect:Nd,useImperativeHandle:function(e,n,i){i=i!=null?i.concat([e]):null,zl(4194308,4,Dd.bind(null,n,e),i)},useLayoutEffect:function(e,n){return zl(4194308,4,e,n)},useInsertionEffect:function(e,n){zl(4,2,e,n)},useMemo:function(e,n){var i=at();n=n===void 0?null:n;var a=e();if(lo){yn(!0);try{e()}finally{yn(!1)}}return i.memoizedState=[a,n],a},useReducer:function(e,n,i){var a=at();if(i!==void 0){var f=i(n);if(lo){yn(!0);try{i(n)}finally{yn(!1)}}}else f=n;return a.memoizedState=a.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},a.queue=e,e=e.dispatch=ev.bind(null,de,e),[a.memoizedState,e]},useRef:function(e){var n=at();return e={current:e},n.memoizedState=e},useState:function(e){e=$a(e);var n=e.queue,i=qd.bind(null,de,n);return n.dispatch=i,[e.memoizedState,i]},useDebugValue:tr,useDeferredValue:function(e,n){var i=at();return nr(i,e,n)},useTransition:function(){var e=$a(!1);return e=Hd.bind(null,de,e.queue,!0,!1),at().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,i){var a=de,f=at();if(ve){if(i===void 0)throw Error(s(407));i=i()}else{if(i=n(),De===null)throw Error(s(349));(ge&127)!==0||fd(a,n,i)}f.memoizedState=i;var p={value:i,getSnapshot:n};return f.queue=p,Nd(md.bind(null,a,p,e),[e]),a.flags|=2048,Ho(9,{destroy:void 0},pd.bind(null,a,p,i,n),null),i},useId:function(){var e=at(),n=De.identifierPrefix;if(ve){var i=Jt,a=Yt;i=(a&~(1<<32-St(a)-1)).toString(32)+i,n="_"+n+"R_"+i,i=Ll++,0<i&&(n+="H"+i.toString(32)),n+="_"}else i=Ky++,n="_"+n+"r_"+i.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:ir,useFormState:_d,useActionState:_d,useOptimistic:function(e){var n=at();n.memoizedState=n.baseState=e;var i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=i,n=lr.bind(null,de,!0,i),i.dispatch=n,[e,n]},useMemoCache:Qa,useCacheRefresh:function(){return at().memoizedState=jy.bind(null,de)},useEffectEvent:function(e){var n=at(),i={impl:e};return n.memoizedState=i,function(){if((_e&2)!==0)throw Error(s(440));return i.impl.apply(void 0,arguments)}}},sr={readContext:et,use:Gl,useCallback:Pd,useContext:et,useEffect:er,useImperativeHandle:Ud,useInsertionEffect:Md,useLayoutEffect:wd,useMemo:kd,useReducer:Bl,useRef:Rd,useState:function(){return Bl(on)},useDebugValue:tr,useDeferredValue:function(e,n){var i=Ve();return Ld(i,Ne.memoizedState,e,n)},useTransition:function(){var e=Bl(on)[0],n=Ve().memoizedState;return[typeof e=="boolean"?e:Mi(e),n]},useSyncExternalStore:dd,useId:zd,useHostTransitionStatus:ir,useFormState:Ad,useActionState:Ad,useOptimistic:function(e,n){var i=Ve();return yd(i,Ne,e,n)},useMemoCache:Qa,useCacheRefresh:Od};sr.useEffectEvent=Id;var Jd={readContext:et,use:Gl,useCallback:Pd,useContext:et,useEffect:er,useImperativeHandle:Ud,useInsertionEffect:Md,useLayoutEffect:wd,useMemo:kd,useReducer:Za,useRef:Rd,useState:function(){return Za(on)},useDebugValue:tr,useDeferredValue:function(e,n){var i=Ve();return Ne===null?nr(i,e,n):Ld(i,Ne.memoizedState,e,n)},useTransition:function(){var e=Za(on)[0],n=Ve().memoizedState;return[typeof e=="boolean"?e:Mi(e),n]},useSyncExternalStore:dd,useId:zd,useHostTransitionStatus:ir,useFormState:xd,useActionState:xd,useOptimistic:function(e,n){var i=Ve();return Ne!==null?yd(i,Ne,e,n):(i.baseState=e,[e,i.queue.dispatch])},useMemoCache:Qa,useCacheRefresh:Od};Jd.useEffectEvent=Id;function ar(e,n,i,a){n=e.memoizedState,i=i(a,n),i=i==null?n:T({},n,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var rr={enqueueSetState:function(e,n,i){e=e._reactInternals;var a=xt(),f=bn(a);f.payload=n,i!=null&&(f.callback=i),n=xn(e,f,a),n!==null&&(gt(n,e,a),xi(n,e,a))},enqueueReplaceState:function(e,n,i){e=e._reactInternals;var a=xt(),f=bn(a);f.tag=1,f.payload=n,i!=null&&(f.callback=i),n=xn(e,f,a),n!==null&&(gt(n,e,a),xi(n,e,a))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var i=xt(),a=bn(i);a.tag=2,n!=null&&(a.callback=n),n=xn(e,a,i),n!==null&&(gt(n,e,i),xi(n,e,i))}};function Kd(e,n,i,a,f,p,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,p,S):n.prototype&&n.prototype.isPureReactComponent?!vi(i,a)||!vi(f,p):!0}function Xd(e,n,i,a){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(i,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(i,a),n.state!==e&&rr.enqueueReplaceState(n,n.state,null)}function so(e,n){var i=n;if("ref"in n){i={};for(var a in n)a!=="ref"&&(i[a]=n[a])}if(e=e.defaultProps){i===n&&(i=T({},i));for(var f in e)i[f]===void 0&&(i[f]=e[f])}return i}function Qd(e){Tl(e)}function Wd(e){console.error(e)}function Zd(e){Tl(e)}function Vl(e,n){try{var i=e.onUncaughtError;i(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function $d(e,n,i){try{var a=e.onCaughtError;a(i.value,{componentStack:i.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function ur(e,n,i){return i=bn(i),i.tag=3,i.payload={element:null},i.callback=function(){Vl(e,n)},i}function jd(e){return e=bn(e),e.tag=3,e}function ef(e,n,i,a){var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var p=a.value;e.payload=function(){return f(p)},e.callback=function(){$d(n,i,a)}}var S=i.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){$d(n,i,a),typeof f!="function"&&(Dn===null?Dn=new Set([this]):Dn.add(this));var C=a.stack;this.componentDidCatch(a.value,{componentStack:C!==null?C:""})})}function tv(e,n,i,a,f){if(i.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=i.alternate,n!==null&&Io(n,i,f,!0),i=Ct.current,i!==null){switch(i.tag){case 31:case 13:return Pt===null?ts():i.alternate===null&&ze===0&&(ze=3),i.flags&=-257,i.flags|=65536,i.lanes=f,a===Ml?i.flags|=16384:(n=i.updateQueue,n===null?i.updateQueue=new Set([a]):n.add(a),Pr(e,a,f)),!1;case 22:return i.flags|=65536,a===Ml?i.flags|=16384:(n=i.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},i.updateQueue=n):(i=n.retryQueue,i===null?n.retryQueue=new Set([a]):i.add(a)),Pr(e,a,f)),!1}throw Error(s(435,i.tag))}return Pr(e,a,f),ts(),!1}if(ve)return n=Ct.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,a!==Na&&(e=Error(s(422),{cause:a}),Ei(Mt(e,i)))):(a!==Na&&(n=Error(s(423),{cause:a}),Ei(Mt(n,i))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,a=Mt(a,i),f=ur(e.stateNode,a,f),Ba(e,f),ze!==4&&(ze=2)),!1;var p=Error(s(520),{cause:a});if(p=Mt(p,i),zi===null?zi=[p]:zi.push(p),ze!==4&&(ze=2),n===null)return!0;a=Mt(a,i),i=n;do{switch(i.tag){case 3:return i.flags|=65536,e=f&-f,i.lanes|=e,e=ur(i.stateNode,a,e),Ba(i,e),!1;case 1:if(n=i.type,p=i.stateNode,(i.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Dn===null||!Dn.has(p))))return i.flags|=65536,f&=-f,i.lanes|=f,f=jd(f),ef(f,e,i,a),Ba(i,f),!1}i=i.return}while(i!==null);return!1}var cr=Error(s(461)),Je=!1;function tt(e,n,i,a){n.child=e===null?id(n,null,i,a):io(n,e.child,i,a)}function tf(e,n,i,a,f){i=i.render;var p=n.ref;if("ref"in a){var S={};for(var C in a)C!=="ref"&&(S[C]=a[C])}else S=a;return eo(n),a=Ya(e,n,i,S,p,f),C=Ja(),e!==null&&!Je?(Ka(e,n,f),ln(e,n,f)):(ve&&C&&xa(n),n.flags|=1,tt(e,n,a,f),n.child)}function nf(e,n,i,a,f){if(e===null){var p=i.type;return typeof p=="function"&&!_a(p)&&p.defaultProps===void 0&&i.compare===null?(n.tag=15,n.type=p,of(e,n,p,a,f)):(e=Al(i.type,null,a,n,n.mode,f),e.ref=n.ref,e.return=n,n.child=e)}if(p=e.child,!vr(e,f)){var S=p.memoizedProps;if(i=i.compare,i=i!==null?i:vi,i(S,a)&&e.ref===n.ref)return ln(e,n,f)}return n.flags|=1,e=$t(p,a),e.ref=n.ref,e.return=n,n.child=e}function of(e,n,i,a,f){if(e!==null){var p=e.memoizedProps;if(vi(p,a)&&e.ref===n.ref)if(Je=!1,n.pendingProps=a=p,vr(e,f))(e.flags&131072)!==0&&(Je=!0);else return n.lanes=e.lanes,ln(e,n,f)}return dr(e,n,i,a,f)}function lf(e,n,i,a){var f=a.children,p=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),a.mode==="hidden"){if((n.flags&128)!==0){if(p=p!==null?p.baseLanes|i:i,e!==null){for(a=n.child=e.child,f=0;a!==null;)f=f|a.lanes|a.childLanes,a=a.sibling;a=f&~p}else a=0,n.child=null;return sf(e,n,p,i,a)}if((i&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Nl(n,p!==null?p.cachePool:null),p!==null?ad(n,p):Oa(),rd(n);else return a=n.lanes=536870912,sf(e,n,p!==null?p.baseLanes|i:i,i,a)}else p!==null?(Nl(n,p.cachePool),ad(n,p),Nn(),n.memoizedState=null):(e!==null&&Nl(n,null),Oa(),Nn());return tt(e,n,f,i),n.child}function Ui(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function sf(e,n,i,a,f){var p=ka();return p=p===null?null:{parent:Fe._currentValue,pool:p},n.memoizedState={baseLanes:i,cachePool:p},e!==null&&Nl(n,null),Oa(),rd(n),e!==null&&Io(e,n,a,!0),n.childLanes=f,null}function Fl(e,n){return n=Jl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function af(e,n,i){return io(n,e.child,null,i),e=Fl(n,n.pendingProps),e.flags|=2,_t(n),n.memoizedState=null,e}function nv(e,n,i){var a=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ve){if(a.mode==="hidden")return e=Fl(n,a),n.lanes=536870912,Ui(null,e);if(Va(n),(e=Ue)?(e=Sp(e,Ut),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Tn!==null?{id:Yt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},i=Vc(e),i.return=n,n.child=i,je=n,Ue=null)):e=null,e===null)throw Cn(n);return n.lanes=536870912,null}return Fl(n,a)}var p=e.memoizedState;if(p!==null){var S=p.dehydrated;if(Va(n),f)if(n.flags&256)n.flags&=-257,n=af(e,n,i);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(Je||Io(e,n,i,!1),f=(i&e.childLanes)!==0,Je||f){if(a=De,a!==null&&(S=Wu(a,i),S!==0&&S!==p.retryLane))throw p.retryLane=S,Wn(e,S),gt(a,e,S),cr;ts(),n=af(e,n,i)}else e=p.treeContext,Ue=kt(S.nextSibling),je=n,ve=!0,En=null,Ut=!1,e!==null&&Jc(n,e),n=Fl(n,a),n.flags|=4096;return n}return e=$t(e.child,{mode:a.mode,children:a.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Yl(e,n){var i=n.ref;if(i===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof i!="function"&&typeof i!="object")throw Error(s(284));(e===null||e.ref!==i)&&(n.flags|=4194816)}}function dr(e,n,i,a,f){return eo(n),i=Ya(e,n,i,a,void 0,f),a=Ja(),e!==null&&!Je?(Ka(e,n,f),ln(e,n,f)):(ve&&a&&xa(n),n.flags|=1,tt(e,n,i,f),n.child)}function rf(e,n,i,a,f,p){return eo(n),n.updateQueue=null,i=cd(n,a,i,f),ud(e),a=Ja(),e!==null&&!Je?(Ka(e,n,p),ln(e,n,p)):(ve&&a&&xa(n),n.flags|=1,tt(e,n,i,p),n.child)}function uf(e,n,i,a,f){if(eo(n),n.stateNode===null){var p=bo,S=i.contextType;typeof S=="object"&&S!==null&&(p=et(S)),p=new i(a,p),n.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=rr,n.stateNode=p,p._reactInternals=n,p=n.stateNode,p.props=a,p.state=n.memoizedState,p.refs={},Ha(n),S=i.contextType,p.context=typeof S=="object"&&S!==null?et(S):bo,p.state=n.memoizedState,S=i.getDerivedStateFromProps,typeof S=="function"&&(ar(n,i,S,a),p.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(S=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),S!==p.state&&rr.enqueueReplaceState(p,p.state,null),Ni(n,a,p,f),Ri(),p.state=n.memoizedState),typeof p.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(e===null){p=n.stateNode;var C=n.memoizedProps,A=so(i,C);p.props=A;var D=p.context,G=i.contextType;S=bo,typeof G=="object"&&G!==null&&(S=et(G));var O=i.getDerivedStateFromProps;G=typeof O=="function"||typeof p.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,G||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(C||D!==S)&&Xd(n,p,a,S),An=!1;var P=n.memoizedState;p.state=P,Ni(n,a,p,f),Ri(),D=n.memoizedState,C||P!==D||An?(typeof O=="function"&&(ar(n,i,O,a),D=n.memoizedState),(A=An||Kd(n,i,A,a,P,D,S))?(G||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(n.flags|=4194308)):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=D),p.props=a,p.state=D,p.context=S,a=A):(typeof p.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{p=n.stateNode,Ga(e,n),S=n.memoizedProps,G=so(i,S),p.props=G,O=n.pendingProps,P=p.context,D=i.contextType,A=bo,typeof D=="object"&&D!==null&&(A=et(D)),C=i.getDerivedStateFromProps,(D=typeof C=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(S!==O||P!==A)&&Xd(n,p,a,A),An=!1,P=n.memoizedState,p.state=P,Ni(n,a,p,f),Ri();var L=n.memoizedState;S!==O||P!==L||An||e!==null&&e.dependencies!==null&&xl(e.dependencies)?(typeof C=="function"&&(ar(n,i,C,a),L=n.memoizedState),(G=An||Kd(n,i,G,a,P,L,A)||e!==null&&e.dependencies!==null&&xl(e.dependencies))?(D||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(a,L,A),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(a,L,A)),typeof p.componentDidUpdate=="function"&&(n.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof p.componentDidUpdate!="function"||S===e.memoizedProps&&P===e.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&P===e.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=L),p.props=a,p.state=L,p.context=A,a=G):(typeof p.componentDidUpdate!="function"||S===e.memoizedProps&&P===e.memoizedState||(n.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&P===e.memoizedState||(n.flags|=1024),a=!1)}return p=a,Yl(e,n),a=(n.flags&128)!==0,p||a?(p=n.stateNode,i=a&&typeof i.getDerivedStateFromError!="function"?null:p.render(),n.flags|=1,e!==null&&a?(n.child=io(n,e.child,null,f),n.child=io(n,null,i,f)):tt(e,n,i,f),n.memoizedState=p.state,e=n.child):e=ln(e,n,f),e}function cf(e,n,i,a){return $n(),n.flags|=256,tt(e,n,i,a),n.child}var fr={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function pr(e){return{baseLanes:e,cachePool:$c()}}function mr(e,n,i){return e=e!==null?e.childLanes&~i:0,n&&(e|=bt),e}function df(e,n,i){var a=n.pendingProps,f=!1,p=(n.flags&128)!==0,S;if((S=p)||(S=e!==null&&e.memoizedState===null?!1:(qe.current&2)!==0),S&&(f=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(ve){if(f?Rn(n):Nn(),(e=Ue)?(e=Sp(e,Ut),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Tn!==null?{id:Yt,overflow:Jt}:null,retryLane:536870912,hydrationErrors:null},i=Vc(e),i.return=n,n.child=i,je=n,Ue=null)):e=null,e===null)throw Cn(n);return Wr(e)?n.lanes=32:n.lanes=536870912,null}var C=a.children;return a=a.fallback,f?(Nn(),f=n.mode,C=Jl({mode:"hidden",children:C},f),a=Zn(a,f,i,null),C.return=n,a.return=n,C.sibling=a,n.child=C,a=n.child,a.memoizedState=pr(i),a.childLanes=mr(e,S,i),n.memoizedState=fr,Ui(null,a)):(Rn(n),hr(n,C))}var A=e.memoizedState;if(A!==null&&(C=A.dehydrated,C!==null)){if(p)n.flags&256?(Rn(n),n.flags&=-257,n=gr(e,n,i)):n.memoizedState!==null?(Nn(),n.child=e.child,n.flags|=128,n=null):(Nn(),C=a.fallback,f=n.mode,a=Jl({mode:"visible",children:a.children},f),C=Zn(C,f,i,null),C.flags|=2,a.return=n,C.return=n,a.sibling=C,n.child=a,io(n,e.child,null,i),a=n.child,a.memoizedState=pr(i),a.childLanes=mr(e,S,i),n.memoizedState=fr,n=Ui(null,a));else if(Rn(n),Wr(C)){if(S=C.nextSibling&&C.nextSibling.dataset,S)var D=S.dgst;S=D,a=Error(s(419)),a.stack="",a.digest=S,Ei({value:a,source:null,stack:null}),n=gr(e,n,i)}else if(Je||Io(e,n,i,!1),S=(i&e.childLanes)!==0,Je||S){if(S=De,S!==null&&(a=Wu(S,i),a!==0&&a!==A.retryLane))throw A.retryLane=a,Wn(e,a),gt(S,e,a),cr;Qr(C)||ts(),n=gr(e,n,i)}else Qr(C)?(n.flags|=192,n.child=e.child,n=null):(e=A.treeContext,Ue=kt(C.nextSibling),je=n,ve=!0,En=null,Ut=!1,e!==null&&Jc(n,e),n=hr(n,a.children),n.flags|=4096);return n}return f?(Nn(),C=a.fallback,f=n.mode,A=e.child,D=A.sibling,a=$t(A,{mode:"hidden",children:a.children}),a.subtreeFlags=A.subtreeFlags&65011712,D!==null?C=$t(D,C):(C=Zn(C,f,i,null),C.flags|=2),C.return=n,a.return=n,a.sibling=C,n.child=a,Ui(null,a),a=n.child,C=e.child.memoizedState,C===null?C=pr(i):(f=C.cachePool,f!==null?(A=Fe._currentValue,f=f.parent!==A?{parent:A,pool:A}:f):f=$c(),C={baseLanes:C.baseLanes|i,cachePool:f}),a.memoizedState=C,a.childLanes=mr(e,S,i),n.memoizedState=fr,Ui(e.child,a)):(Rn(n),i=e.child,e=i.sibling,i=$t(i,{mode:"visible",children:a.children}),i.return=n,i.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=i,n.memoizedState=null,i)}function hr(e,n){return n=Jl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Jl(e,n){return e=Et(22,e,null,n),e.lanes=0,e}function gr(e,n,i){return io(n,e.child,null,i),e=hr(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function ff(e,n,i){e.lanes|=n;var a=e.alternate;a!==null&&(a.lanes|=n),wa(e.return,n,i)}function yr(e,n,i,a,f,p){var S=e.memoizedState;S===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:i,tailMode:f,treeForkCount:p}:(S.isBackwards=n,S.rendering=null,S.renderingStartTime=0,S.last=a,S.tail=i,S.tailMode=f,S.treeForkCount=p)}function pf(e,n,i){var a=n.pendingProps,f=a.revealOrder,p=a.tail;a=a.children;var S=qe.current,C=(S&2)!==0;if(C?(S=S&1|2,n.flags|=128):S&=1,W(qe,S),tt(e,n,a,i),a=ve?Ti:0,!C&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ff(e,i,n);else if(e.tag===19)ff(e,i,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(i=n.child,f=null;i!==null;)e=i.alternate,e!==null&&Pl(e)===null&&(f=i),i=i.sibling;i=f,i===null?(f=n.child,n.child=null):(f=i.sibling,i.sibling=null),yr(n,!1,f,i,p,a);break;case"backwards":case"unstable_legacy-backwards":for(i=null,f=n.child,n.child=null;f!==null;){if(e=f.alternate,e!==null&&Pl(e)===null){n.child=f;break}e=f.sibling,f.sibling=i,i=f,f=e}yr(n,!0,i,null,p,a);break;case"together":yr(n,!1,null,null,void 0,a);break;default:n.memoizedState=null}return n.child}function ln(e,n,i){if(e!==null&&(n.dependencies=e.dependencies),wn|=n.lanes,(i&n.childLanes)===0)if(e!==null){if(Io(e,n,i,!1),(i&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,i=$t(e,e.pendingProps),n.child=i,i.return=n;e.sibling!==null;)e=e.sibling,i=i.sibling=$t(e,e.pendingProps),i.return=n;i.sibling=null}return n.child}function vr(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&xl(e)))}function ov(e,n,i){switch(n.tag){case 3:st(n,n.stateNode.containerInfo),_n(n,Fe,e.memoizedState.cache),$n();break;case 27:case 5:li(n);break;case 4:st(n,n.stateNode.containerInfo);break;case 10:_n(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Va(n),null;break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(Rn(n),n.flags|=128,null):(i&n.child.childLanes)!==0?df(e,n,i):(Rn(n),e=ln(e,n,i),e!==null?e.sibling:null);Rn(n);break;case 19:var f=(e.flags&128)!==0;if(a=(i&n.childLanes)!==0,a||(Io(e,n,i,!1),a=(i&n.childLanes)!==0),f){if(a)return pf(e,n,i);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),W(qe,qe.current),a)break;return null;case 22:return n.lanes=0,lf(e,n,i,n.pendingProps);case 24:_n(n,Fe,e.memoizedState.cache)}return ln(e,n,i)}function mf(e,n,i){if(e!==null)if(e.memoizedProps!==n.pendingProps)Je=!0;else{if(!vr(e,i)&&(n.flags&128)===0)return Je=!1,ov(e,n,i);Je=(e.flags&131072)!==0}else Je=!1,ve&&(n.flags&1048576)!==0&&Yc(n,Ti,n.index);switch(n.lanes=0,n.tag){case 16:e:{var a=n.pendingProps;if(e=no(n.elementType),n.type=e,typeof e=="function")_a(e)?(a=so(e,a),n.tag=1,n=uf(null,n,e,a,i)):(n.tag=0,n=dr(null,n,e,a,i));else{if(e!=null){var f=e.$$typeof;if(f===K){n.tag=11,n=tf(null,n,e,a,i);break e}else if(f===J){n.tag=14,n=nf(null,n,e,a,i);break e}}throw n=Ge(e)||e,Error(s(306,n,""))}}return n;case 0:return dr(e,n,n.type,n.pendingProps,i);case 1:return a=n.type,f=so(a,n.pendingProps),uf(e,n,a,f,i);case 3:e:{if(st(n,n.stateNode.containerInfo),e===null)throw Error(s(387));a=n.pendingProps;var p=n.memoizedState;f=p.element,Ga(e,n),Ni(n,a,null,i);var S=n.memoizedState;if(a=S.cache,_n(n,Fe,a),a!==p.cache&&Da(n,[Fe],i,!0),Ri(),a=S.element,p.isDehydrated)if(p={element:a,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=p,n.memoizedState=p,n.flags&256){n=cf(e,n,a,i);break e}else if(a!==f){f=Mt(Error(s(424)),n),Ei(f),n=cf(e,n,a,i);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(Ue=kt(e.firstChild),je=n,ve=!0,En=null,Ut=!0,i=id(n,null,a,i),n.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling}else{if($n(),a===f){n=ln(e,n,i);break e}tt(e,n,a,i)}n=n.child}return n;case 26:return Yl(e,n),e===null?(i=bp(n.type,null,n.pendingProps,null))?n.memoizedState=i:ve||(i=n.type,e=n.pendingProps,a=rs(pe.current).createElement(i),a[$e]=n,a[ct]=e,nt(a,i,e),Qe(a),n.stateNode=a):n.memoizedState=bp(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return li(n),e===null&&ve&&(a=n.stateNode=Cp(n.type,n.pendingProps,pe.current),je=n,Ut=!0,f=Ue,Ln(n.type)?(Zr=f,Ue=kt(a.firstChild)):Ue=f),tt(e,n,n.pendingProps.children,i),Yl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ve&&((f=a=Ue)&&(a=Uv(a,n.type,n.pendingProps,Ut),a!==null?(n.stateNode=a,je=n,Ue=kt(a.firstChild),Ut=!1,f=!0):f=!1),f||Cn(n)),li(n),f=n.type,p=n.pendingProps,S=e!==null?e.memoizedProps:null,a=p.children,Jr(f,p)?a=null:S!==null&&Jr(f,S)&&(n.flags|=32),n.memoizedState!==null&&(f=Ya(e,n,Xy,null,null,i),Xi._currentValue=f),Yl(e,n),tt(e,n,a,i),n.child;case 6:return e===null&&ve&&((e=i=Ue)&&(i=Pv(i,n.pendingProps,Ut),i!==null?(n.stateNode=i,je=n,Ue=null,e=!0):e=!1),e||Cn(n)),null;case 13:return df(e,n,i);case 4:return st(n,n.stateNode.containerInfo),a=n.pendingProps,e===null?n.child=io(n,null,a,i):tt(e,n,a,i),n.child;case 11:return tf(e,n,n.type,n.pendingProps,i);case 7:return tt(e,n,n.pendingProps,i),n.child;case 8:return tt(e,n,n.pendingProps.children,i),n.child;case 12:return tt(e,n,n.pendingProps.children,i),n.child;case 10:return a=n.pendingProps,_n(n,n.type,a.value),tt(e,n,a.children,i),n.child;case 9:return f=n.type._context,a=n.pendingProps.children,eo(n),f=et(f),a=a(f),n.flags|=1,tt(e,n,a,i),n.child;case 14:return nf(e,n,n.type,n.pendingProps,i);case 15:return of(e,n,n.type,n.pendingProps,i);case 19:return pf(e,n,i);case 31:return nv(e,n,i);case 22:return lf(e,n,i,n.pendingProps);case 24:return eo(n),a=et(Fe),e===null?(f=ka(),f===null&&(f=De,p=Ua(),f.pooledCache=p,p.refCount++,p!==null&&(f.pooledCacheLanes|=i),f=p),n.memoizedState={parent:a,cache:f},Ha(n),_n(n,Fe,f)):((e.lanes&i)!==0&&(Ga(e,n),Ni(n,null,null,i),Ri()),f=e.memoizedState,p=n.memoizedState,f.parent!==a?(f={parent:a,cache:a},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),_n(n,Fe,a)):(a=p.cache,_n(n,Fe,a),a!==f.cache&&Da(n,[Fe],i,!0))),tt(e,n,n.pendingProps.children,i),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function sn(e){e.flags|=4}function Sr(e,n,i,a,f){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Of())e.flags|=8192;else throw oo=Ml,La}else e.flags&=-16777217}function hf(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Mp(n))if(Of())e.flags|=8192;else throw oo=Ml,La}function Kl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ku():536870912,e.lanes|=n,Oo|=n)}function Pi(e,n){if(!ve)switch(e.tailMode){case"hidden":n=e.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function Pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,i=0,a=0;if(n)for(var f=e.child;f!==null;)i|=f.lanes|f.childLanes,a|=f.subtreeFlags&65011712,a|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)i|=f.lanes|f.childLanes,a|=f.subtreeFlags,a|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=a,e.childLanes=i,n}function iv(e,n,i){var a=n.pendingProps;switch(Ra(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(n),null;case 1:return Pe(n),null;case 3:return i=n.stateNode,a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),tn(Fe),Oe(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(No(n)?sn(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Ia())),Pe(n),null;case 26:var f=n.type,p=n.memoizedState;return e===null?(sn(n),p!==null?(Pe(n),hf(n,p)):(Pe(n),Sr(n,f,null,a,i))):p?p!==e.memoizedState?(sn(n),Pe(n),hf(n,p)):(Pe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==a&&sn(n),Pe(n),Sr(n,f,e,a,i)),null;case 27:if(il(n),i=pe.current,f=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&sn(n);else{if(!a){if(n.stateNode===null)throw Error(s(166));return Pe(n),null}e=te.current,No(n)?Kc(n):(e=Cp(f,a,i),n.stateNode=e,sn(n))}return Pe(n),null;case 5:if(il(n),f=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==a&&sn(n);else{if(!a){if(n.stateNode===null)throw Error(s(166));return Pe(n),null}if(p=te.current,No(n))Kc(n);else{var S=rs(pe.current);switch(p){case 1:p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":p=S.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":p=S.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":p=S.createElement("div"),p.innerHTML="<script><\/script>",p=p.removeChild(p.firstChild);break;case"select":p=typeof a.is=="string"?S.createElement("select",{is:a.is}):S.createElement("select"),a.multiple?p.multiple=!0:a.size&&(p.size=a.size);break;default:p=typeof a.is=="string"?S.createElement(f,{is:a.is}):S.createElement(f)}}p[$e]=n,p[ct]=a;e:for(S=n.child;S!==null;){if(S.tag===5||S.tag===6)p.appendChild(S.stateNode);else if(S.tag!==4&&S.tag!==27&&S.child!==null){S.child.return=S,S=S.child;continue}if(S===n)break e;for(;S.sibling===null;){if(S.return===null||S.return===n)break e;S=S.return}S.sibling.return=S.return,S=S.sibling}n.stateNode=p;e:switch(nt(p,f,a),f){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}a&&sn(n)}}return Pe(n),Sr(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,i),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==a&&sn(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(s(166));if(e=pe.current,No(n)){if(e=n.stateNode,i=n.memoizedProps,a=null,f=je,f!==null)switch(f.tag){case 27:case 5:a=f.memoizedProps}e[$e]=n,e=!!(e.nodeValue===i||a!==null&&a.suppressHydrationWarning===!0||dp(e.nodeValue,i)),e||Cn(n,!0)}else e=rs(e).createTextNode(a),e[$e]=n,n.stateNode=e}return Pe(n),null;case 31:if(i=n.memoizedState,e===null||e.memoizedState!==null){if(a=No(n),i!==null){if(e===null){if(!a)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[$e]=n}else $n(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Pe(n),e=!1}else i=Ia(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),e=!0;if(!e)return n.flags&256?(_t(n),n):(_t(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Pe(n),null;case 13:if(a=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=No(n),a!==null&&a.dehydrated!==null){if(e===null){if(!f)throw Error(s(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(s(317));f[$e]=n}else $n(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Pe(n),f=!1}else f=Ia(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(_t(n),n):(_t(n),null)}return _t(n),(n.flags&128)!==0?(n.lanes=i,n):(i=a!==null,e=e!==null&&e.memoizedState!==null,i&&(a=n.child,f=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(f=a.alternate.memoizedState.cachePool.pool),p=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(p=a.memoizedState.cachePool.pool),p!==f&&(a.flags|=2048)),i!==e&&i&&(n.child.flags|=8192),Kl(n,n.updateQueue),Pe(n),null);case 4:return Oe(),e===null&&Or(n.stateNode.containerInfo),Pe(n),null;case 10:return tn(n.type),Pe(n),null;case 19:if(q(qe),a=n.memoizedState,a===null)return Pe(n),null;if(f=(n.flags&128)!==0,p=a.rendering,p===null)if(f)Pi(a,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(p=Pl(e),p!==null){for(n.flags|=128,Pi(a,!1),e=p.updateQueue,n.updateQueue=e,Kl(n,e),n.subtreeFlags=0,e=i,i=n.child;i!==null;)qc(i,e),i=i.sibling;return W(qe,qe.current&1|2),ve&&jt(n,a.treeForkCount),n.child}e=e.sibling}a.tail!==null&&yt()>$l&&(n.flags|=128,f=!0,Pi(a,!1),n.lanes=4194304)}else{if(!f)if(e=Pl(p),e!==null){if(n.flags|=128,f=!0,e=e.updateQueue,n.updateQueue=e,Kl(n,e),Pi(a,!0),a.tail===null&&a.tailMode==="hidden"&&!p.alternate&&!ve)return Pe(n),null}else 2*yt()-a.renderingStartTime>$l&&i!==536870912&&(n.flags|=128,f=!0,Pi(a,!1),n.lanes=4194304);a.isBackwards?(p.sibling=n.child,n.child=p):(e=a.last,e!==null?e.sibling=p:n.child=p,a.last=p)}return a.tail!==null?(e=a.tail,a.rendering=e,a.tail=e.sibling,a.renderingStartTime=yt(),e.sibling=null,i=qe.current,W(qe,f?i&1|2:i&1),ve&&jt(n,a.treeForkCount),e):(Pe(n),null);case 22:case 23:return _t(n),qa(),a=n.memoizedState!==null,e!==null?e.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(i&536870912)!==0&&(n.flags&128)===0&&(Pe(n),n.subtreeFlags&6&&(n.flags|=8192)):Pe(n),i=n.updateQueue,i!==null&&Kl(n,i.retryQueue),i=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==i&&(n.flags|=2048),e!==null&&q(to),null;case 24:return i=null,e!==null&&(i=e.memoizedState.cache),n.memoizedState.cache!==i&&(n.flags|=2048),tn(Fe),Pe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function lv(e,n){switch(Ra(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return tn(Fe),Oe(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return il(n),null;case 31:if(n.memoizedState!==null){if(_t(n),n.alternate===null)throw Error(s(340));$n()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(_t(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));$n()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return q(qe),null;case 4:return Oe(),null;case 10:return tn(n.type),null;case 22:case 23:return _t(n),qa(),e!==null&&q(to),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return tn(Fe),null;case 25:return null;default:return null}}function gf(e,n){switch(Ra(n),n.tag){case 3:tn(Fe),Oe();break;case 26:case 27:case 5:il(n);break;case 4:Oe();break;case 31:n.memoizedState!==null&&_t(n);break;case 13:_t(n);break;case 19:q(qe);break;case 10:tn(n.type);break;case 22:case 23:_t(n),qa(),e!==null&&q(to);break;case 24:tn(Fe)}}function ki(e,n){try{var i=n.updateQueue,a=i!==null?i.lastEffect:null;if(a!==null){var f=a.next;i=f;do{if((i.tag&e)===e){a=void 0;var p=i.create,S=i.inst;a=p(),S.destroy=a}i=i.next}while(i!==f)}}catch(C){xe(n,n.return,C)}}function In(e,n,i){try{var a=n.updateQueue,f=a!==null?a.lastEffect:null;if(f!==null){var p=f.next;a=p;do{if((a.tag&e)===e){var S=a.inst,C=S.destroy;if(C!==void 0){S.destroy=void 0,f=n;var A=i,D=C;try{D()}catch(G){xe(f,A,G)}}}a=a.next}while(a!==p)}}catch(G){xe(n,n.return,G)}}function yf(e){var n=e.updateQueue;if(n!==null){var i=e.stateNode;try{sd(n,i)}catch(a){xe(e,e.return,a)}}}function vf(e,n,i){i.props=so(e.type,e.memoizedProps),i.state=e.memoizedState;try{i.componentWillUnmount()}catch(a){xe(e,n,a)}}function Li(e,n){try{var i=e.ref;if(i!==null){switch(e.tag){case 26:case 27:case 5:var a=e.stateNode;break;case 30:a=e.stateNode;break;default:a=e.stateNode}typeof i=="function"?e.refCleanup=i(a):i.current=a}}catch(f){xe(e,n,f)}}function Kt(e,n){var i=e.ref,a=e.refCleanup;if(i!==null)if(typeof a=="function")try{a()}catch(f){xe(e,n,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof i=="function")try{i(null)}catch(f){xe(e,n,f)}else i.current=null}function Sf(e){var n=e.type,i=e.memoizedProps,a=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":i.autoFocus&&a.focus();break e;case"img":i.src?a.src=i.src:i.srcSet&&(a.srcset=i.srcSet)}}catch(f){xe(e,e.return,f)}}function Tr(e,n,i){try{var a=e.stateNode;Rv(a,e.type,i,n),a[ct]=n}catch(f){xe(e,e.return,f)}}function Tf(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ln(e.type)||e.tag===4}function Er(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ln(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Cr(e,n,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?(i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i).insertBefore(e,n):(n=i.nodeType===9?i.body:i.nodeName==="HTML"?i.ownerDocument.body:i,n.appendChild(e),i=i._reactRootContainer,i!=null||n.onclick!==null||(n.onclick=Wt));else if(a!==4&&(a===27&&Ln(e.type)&&(i=e.stateNode,n=null),e=e.child,e!==null))for(Cr(e,n,i),e=e.sibling;e!==null;)Cr(e,n,i),e=e.sibling}function Xl(e,n,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,n?i.insertBefore(e,n):i.appendChild(e);else if(a!==4&&(a===27&&Ln(e.type)&&(i=e.stateNode),e=e.child,e!==null))for(Xl(e,n,i),e=e.sibling;e!==null;)Xl(e,n,i),e=e.sibling}function Ef(e){var n=e.stateNode,i=e.memoizedProps;try{for(var a=e.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);nt(n,a,i),n[$e]=e,n[ct]=i}catch(p){xe(e,e.return,p)}}var an=!1,Ke=!1,_r=!1,Cf=typeof WeakSet=="function"?WeakSet:Set,We=null;function sv(e,n){if(e=e.containerInfo,Fr=hs,e=Uc(e),ga(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var f=a.anchorOffset,p=a.focusNode;a=a.focusOffset;try{i.nodeType,p.nodeType}catch{i=null;break e}var S=0,C=-1,A=-1,D=0,G=0,O=e,P=null;t:for(;;){for(var L;O!==i||f!==0&&O.nodeType!==3||(C=S+f),O!==p||a!==0&&O.nodeType!==3||(A=S+a),O.nodeType===3&&(S+=O.nodeValue.length),(L=O.firstChild)!==null;)P=O,O=L;for(;;){if(O===e)break t;if(P===i&&++D===f&&(C=S),P===p&&++G===a&&(A=S),(L=O.nextSibling)!==null)break;O=P,P=O.parentNode}O=L}i=C===-1||A===-1?null:{start:C,end:A}}else i=null}i=i||{start:0,end:0}}else i=null;for(Yr={focusedElem:e,selectionRange:i},hs=!1,We=n;We!==null;)if(n=We,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,We=e;else for(;We!==null;){switch(n=We,p=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(i=0;i<e.length;i++)f=e[i],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&p!==null){e=void 0,i=n,f=p.memoizedProps,p=p.memoizedState,a=i.stateNode;try{var j=so(i.type,f);e=a.getSnapshotBeforeUpdate(j,p),a.__reactInternalSnapshotBeforeUpdate=e}catch(le){xe(i,i.return,le)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,i=e.nodeType,i===9)Xr(e);else if(i===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Xr(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,We=e;break}We=n.return}}function _f(e,n,i){var a=i.flags;switch(i.tag){case 0:case 11:case 15:un(e,i),a&4&&ki(5,i);break;case 1:if(un(e,i),a&4)if(e=i.stateNode,n===null)try{e.componentDidMount()}catch(S){xe(i,i.return,S)}else{var f=so(i.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(f,n,e.__reactInternalSnapshotBeforeUpdate)}catch(S){xe(i,i.return,S)}}a&64&&yf(i),a&512&&Li(i,i.return);break;case 3:if(un(e,i),a&64&&(e=i.updateQueue,e!==null)){if(n=null,i.child!==null)switch(i.child.tag){case 27:case 5:n=i.child.stateNode;break;case 1:n=i.child.stateNode}try{sd(e,n)}catch(S){xe(i,i.return,S)}}break;case 27:n===null&&a&4&&Ef(i);case 26:case 5:un(e,i),n===null&&a&4&&Sf(i),a&512&&Li(i,i.return);break;case 12:un(e,i);break;case 31:un(e,i),a&4&&xf(e,i);break;case 13:un(e,i),a&4&&Rf(e,i),a&64&&(e=i.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(i=hv.bind(null,i),kv(e,i))));break;case 22:if(a=i.memoizedState!==null||an,!a){n=n!==null&&n.memoizedState!==null||Ke,f=an;var p=Ke;an=a,(Ke=n)&&!p?cn(e,i,(i.subtreeFlags&8772)!==0):un(e,i),an=f,Ke=p}break;case 30:break;default:un(e,i)}}function Af(e){var n=e.alternate;n!==null&&(e.alternate=null,Af(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&js(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var He=null,ft=!1;function rn(e,n,i){for(i=i.child;i!==null;)bf(e,n,i),i=i.sibling}function bf(e,n,i){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(si,i)}catch{}switch(i.tag){case 26:Ke||Kt(i,n),rn(e,n,i),i.memoizedState?i.memoizedState.count--:i.stateNode&&(i=i.stateNode,i.parentNode.removeChild(i));break;case 27:Ke||Kt(i,n);var a=He,f=ft;Ln(i.type)&&(He=i.stateNode,ft=!1),rn(e,n,i),Yi(i.stateNode),He=a,ft=f;break;case 5:Ke||Kt(i,n);case 6:if(a=He,f=ft,He=null,rn(e,n,i),He=a,ft=f,He!==null)if(ft)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(i.stateNode)}catch(p){xe(i,n,p)}else try{He.removeChild(i.stateNode)}catch(p){xe(i,n,p)}break;case 18:He!==null&&(ft?(e=He,yp(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,i.stateNode),Qo(e)):yp(He,i.stateNode));break;case 4:a=He,f=ft,He=i.stateNode.containerInfo,ft=!0,rn(e,n,i),He=a,ft=f;break;case 0:case 11:case 14:case 15:In(2,i,n),Ke||In(4,i,n),rn(e,n,i);break;case 1:Ke||(Kt(i,n),a=i.stateNode,typeof a.componentWillUnmount=="function"&&vf(i,n,a)),rn(e,n,i);break;case 21:rn(e,n,i);break;case 22:Ke=(a=Ke)||i.memoizedState!==null,rn(e,n,i),Ke=a;break;default:rn(e,n,i)}}function xf(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Qo(e)}catch(i){xe(n,n.return,i)}}}function Rf(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Qo(e)}catch(i){xe(n,n.return,i)}}function av(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Cf),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Cf),n;default:throw Error(s(435,e.tag))}}function Ql(e,n){var i=av(e);n.forEach(function(a){if(!i.has(a)){i.add(a);var f=gv.bind(null,e,a);a.then(f,f)}})}function pt(e,n){var i=n.deletions;if(i!==null)for(var a=0;a<i.length;a++){var f=i[a],p=e,S=n,C=S;e:for(;C!==null;){switch(C.tag){case 27:if(Ln(C.type)){He=C.stateNode,ft=!1;break e}break;case 5:He=C.stateNode,ft=!1;break e;case 3:case 4:He=C.stateNode.containerInfo,ft=!0;break e}C=C.return}if(He===null)throw Error(s(160));bf(p,S,f),He=null,ft=!1,p=f.alternate,p!==null&&(p.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Nf(n,e),n=n.sibling}var zt=null;function Nf(e,n){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:pt(n,e),mt(e),a&4&&(In(3,e,e.return),ki(3,e),In(5,e,e.return));break;case 1:pt(n,e),mt(e),a&512&&(Ke||i===null||Kt(i,i.return)),a&64&&an&&(e=e.updateQueue,e!==null&&(a=e.callbacks,a!==null&&(i=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=i===null?a:i.concat(a))));break;case 26:var f=zt;if(pt(n,e),mt(e),a&512&&(Ke||i===null||Kt(i,i.return)),a&4){var p=i!==null?i.memoizedState:null;if(a=e.memoizedState,i===null)if(a===null)if(e.stateNode===null){e:{a=e.type,i=e.memoizedProps,f=f.ownerDocument||f;t:switch(a){case"title":p=f.getElementsByTagName("title")[0],(!p||p[ui]||p[$e]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=f.createElement(a),f.head.insertBefore(p,f.querySelector("head > title"))),nt(p,a,i),p[$e]=e,Qe(p),a=p;break e;case"link":var S=Np("link","href",f).get(a+(i.href||""));if(S){for(var C=0;C<S.length;C++)if(p=S[C],p.getAttribute("href")===(i.href==null||i.href===""?null:i.href)&&p.getAttribute("rel")===(i.rel==null?null:i.rel)&&p.getAttribute("title")===(i.title==null?null:i.title)&&p.getAttribute("crossorigin")===(i.crossOrigin==null?null:i.crossOrigin)){S.splice(C,1);break t}}p=f.createElement(a),nt(p,a,i),f.head.appendChild(p);break;case"meta":if(S=Np("meta","content",f).get(a+(i.content||""))){for(C=0;C<S.length;C++)if(p=S[C],p.getAttribute("content")===(i.content==null?null:""+i.content)&&p.getAttribute("name")===(i.name==null?null:i.name)&&p.getAttribute("property")===(i.property==null?null:i.property)&&p.getAttribute("http-equiv")===(i.httpEquiv==null?null:i.httpEquiv)&&p.getAttribute("charset")===(i.charSet==null?null:i.charSet)){S.splice(C,1);break t}}p=f.createElement(a),nt(p,a,i),f.head.appendChild(p);break;default:throw Error(s(468,a))}p[$e]=e,Qe(p),a=p}e.stateNode=a}else Ip(f,e.type,e.stateNode);else e.stateNode=Rp(f,a,e.memoizedProps);else p!==a?(p===null?i.stateNode!==null&&(i=i.stateNode,i.parentNode.removeChild(i)):p.count--,a===null?Ip(f,e.type,e.stateNode):Rp(f,a,e.memoizedProps)):a===null&&e.stateNode!==null&&Tr(e,e.memoizedProps,i.memoizedProps)}break;case 27:pt(n,e),mt(e),a&512&&(Ke||i===null||Kt(i,i.return)),i!==null&&a&4&&Tr(e,e.memoizedProps,i.memoizedProps);break;case 5:if(pt(n,e),mt(e),a&512&&(Ke||i===null||Kt(i,i.return)),e.flags&32){f=e.stateNode;try{vo(f,"")}catch(j){xe(e,e.return,j)}}a&4&&e.stateNode!=null&&(f=e.memoizedProps,Tr(e,f,i!==null?i.memoizedProps:f)),a&1024&&(_r=!0);break;case 6:if(pt(n,e),mt(e),a&4){if(e.stateNode===null)throw Error(s(162));a=e.memoizedProps,i=e.stateNode;try{i.nodeValue=a}catch(j){xe(e,e.return,j)}}break;case 3:if(ds=null,f=zt,zt=us(n.containerInfo),pt(n,e),zt=f,mt(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Qo(n.containerInfo)}catch(j){xe(e,e.return,j)}_r&&(_r=!1,If(e));break;case 4:a=zt,zt=us(e.stateNode.containerInfo),pt(n,e),mt(e),zt=a;break;case 12:pt(n,e),mt(e);break;case 31:pt(n,e),mt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ql(e,a)));break;case 13:pt(n,e),mt(e),e.child.flags&8192&&e.memoizedState!==null!=(i!==null&&i.memoizedState!==null)&&(Zl=yt()),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ql(e,a)));break;case 22:f=e.memoizedState!==null;var A=i!==null&&i.memoizedState!==null,D=an,G=Ke;if(an=D||f,Ke=G||A,pt(n,e),Ke=G,an=D,mt(e),a&8192)e:for(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(i===null||A||an||Ke||ao(e)),i=null,n=e;;){if(n.tag===5||n.tag===26){if(i===null){A=i=n;try{if(p=A.stateNode,f)S=p.style,typeof S.setProperty=="function"?S.setProperty("display","none","important"):S.display="none";else{C=A.stateNode;var O=A.memoizedProps.style,P=O!=null&&O.hasOwnProperty("display")?O.display:null;C.style.display=P==null||typeof P=="boolean"?"":(""+P).trim()}}catch(j){xe(A,A.return,j)}}}else if(n.tag===6){if(i===null){A=n;try{A.stateNode.nodeValue=f?"":A.memoizedProps}catch(j){xe(A,A.return,j)}}}else if(n.tag===18){if(i===null){A=n;try{var L=A.stateNode;f?vp(L,!0):vp(A.stateNode,!1)}catch(j){xe(A,A.return,j)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;i===n&&(i=null),n=n.return}i===n&&(i=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=e.updateQueue,a!==null&&(i=a.retryQueue,i!==null&&(a.retryQueue=null,Ql(e,i))));break;case 19:pt(n,e),mt(e),a&4&&(a=e.updateQueue,a!==null&&(e.updateQueue=null,Ql(e,a)));break;case 30:break;case 21:break;default:pt(n,e),mt(e)}}function mt(e){var n=e.flags;if(n&2){try{for(var i,a=e.return;a!==null;){if(Tf(a)){i=a;break}a=a.return}if(i==null)throw Error(s(160));switch(i.tag){case 27:var f=i.stateNode,p=Er(e);Xl(e,p,f);break;case 5:var S=i.stateNode;i.flags&32&&(vo(S,""),i.flags&=-33);var C=Er(e);Xl(e,C,S);break;case 3:case 4:var A=i.stateNode.containerInfo,D=Er(e);Cr(e,D,A);break;default:throw Error(s(161))}}catch(G){xe(e,e.return,G)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function If(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;If(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function un(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)_f(e,n.alternate,n),n=n.sibling}function ao(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:In(4,n,n.return),ao(n);break;case 1:Kt(n,n.return);var i=n.stateNode;typeof i.componentWillUnmount=="function"&&vf(n,n.return,i),ao(n);break;case 27:Yi(n.stateNode);case 26:case 5:Kt(n,n.return),ao(n);break;case 22:n.memoizedState===null&&ao(n);break;case 30:ao(n);break;default:ao(n)}e=e.sibling}}function cn(e,n,i){for(i=i&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,f=e,p=n,S=p.flags;switch(p.tag){case 0:case 11:case 15:cn(f,p,i),ki(4,p);break;case 1:if(cn(f,p,i),a=p,f=a.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(D){xe(a,a.return,D)}if(a=p,f=a.updateQueue,f!==null){var C=a.stateNode;try{var A=f.shared.hiddenCallbacks;if(A!==null)for(f.shared.hiddenCallbacks=null,f=0;f<A.length;f++)ld(A[f],C)}catch(D){xe(a,a.return,D)}}i&&S&64&&yf(p),Li(p,p.return);break;case 27:Ef(p);case 26:case 5:cn(f,p,i),i&&a===null&&S&4&&Sf(p),Li(p,p.return);break;case 12:cn(f,p,i);break;case 31:cn(f,p,i),i&&S&4&&xf(f,p);break;case 13:cn(f,p,i),i&&S&4&&Rf(f,p);break;case 22:p.memoizedState===null&&cn(f,p,i),Li(p,p.return);break;case 30:break;default:cn(f,p,i)}n=n.sibling}}function Ar(e,n){var i=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==i&&(e!=null&&e.refCount++,i!=null&&Ci(i))}function br(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ci(e))}function Ot(e,n,i,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mf(e,n,i,a),n=n.sibling}function Mf(e,n,i,a){var f=n.flags;switch(n.tag){case 0:case 11:case 15:Ot(e,n,i,a),f&2048&&ki(9,n);break;case 1:Ot(e,n,i,a);break;case 3:Ot(e,n,i,a),f&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Ci(e)));break;case 12:if(f&2048){Ot(e,n,i,a),e=n.stateNode;try{var p=n.memoizedProps,S=p.id,C=p.onPostCommit;typeof C=="function"&&C(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(A){xe(n,n.return,A)}}else Ot(e,n,i,a);break;case 31:Ot(e,n,i,a);break;case 13:Ot(e,n,i,a);break;case 23:break;case 22:p=n.stateNode,S=n.alternate,n.memoizedState!==null?p._visibility&2?Ot(e,n,i,a):Hi(e,n):p._visibility&2?Ot(e,n,i,a):(p._visibility|=2,Go(e,n,i,a,(n.subtreeFlags&10256)!==0||!1)),f&2048&&Ar(S,n);break;case 24:Ot(e,n,i,a),f&2048&&br(n.alternate,n);break;default:Ot(e,n,i,a)}}function Go(e,n,i,a,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var p=e,S=n,C=i,A=a,D=S.flags;switch(S.tag){case 0:case 11:case 15:Go(p,S,C,A,f),ki(8,S);break;case 23:break;case 22:var G=S.stateNode;S.memoizedState!==null?G._visibility&2?Go(p,S,C,A,f):Hi(p,S):(G._visibility|=2,Go(p,S,C,A,f)),f&&D&2048&&Ar(S.alternate,S);break;case 24:Go(p,S,C,A,f),f&&D&2048&&br(S.alternate,S);break;default:Go(p,S,C,A,f)}n=n.sibling}}function Hi(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var i=e,a=n,f=a.flags;switch(a.tag){case 22:Hi(i,a),f&2048&&Ar(a.alternate,a);break;case 24:Hi(i,a),f&2048&&br(a.alternate,a);break;default:Hi(i,a)}n=n.sibling}}var Gi=8192;function Bo(e,n,i){if(e.subtreeFlags&Gi)for(e=e.child;e!==null;)wf(e,n,i),e=e.sibling}function wf(e,n,i){switch(e.tag){case 26:Bo(e,n,i),e.flags&Gi&&e.memoizedState!==null&&Kv(i,zt,e.memoizedState,e.memoizedProps);break;case 5:Bo(e,n,i);break;case 3:case 4:var a=zt;zt=us(e.stateNode.containerInfo),Bo(e,n,i),zt=a;break;case 22:e.memoizedState===null&&(a=e.alternate,a!==null&&a.memoizedState!==null?(a=Gi,Gi=16777216,Bo(e,n,i),Gi=a):Bo(e,n,i));break;default:Bo(e,n,i)}}function Df(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Bi(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];We=a,Pf(a,e)}Df(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Uf(e),e=e.sibling}function Uf(e){switch(e.tag){case 0:case 11:case 15:Bi(e),e.flags&2048&&In(9,e,e.return);break;case 3:Bi(e);break;case 12:Bi(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Wl(e)):Bi(e);break;default:Bi(e)}}function Wl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];We=a,Pf(a,e)}Df(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:In(8,n,n.return),Wl(n);break;case 22:i=n.stateNode,i._visibility&2&&(i._visibility&=-3,Wl(n));break;default:Wl(n)}e=e.sibling}}function Pf(e,n){for(;We!==null;){var i=We;switch(i.tag){case 0:case 11:case 15:In(8,i,n);break;case 23:case 22:if(i.memoizedState!==null&&i.memoizedState.cachePool!==null){var a=i.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:Ci(i.memoizedState.cache)}if(a=i.child,a!==null)a.return=i,We=a;else e:for(i=e;We!==null;){a=We;var f=a.sibling,p=a.return;if(Af(a),a===i){We=null;break e}if(f!==null){f.return=p,We=f;break e}We=p}}}var rv={getCacheForType:function(e){var n=et(Fe),i=n.data.get(e);return i===void 0&&(i=e(),n.data.set(e,i)),i},cacheSignal:function(){return et(Fe).controller.signal}},uv=typeof WeakMap=="function"?WeakMap:Map,_e=0,De=null,me=null,ge=0,be=0,At=null,Mn=!1,zo=!1,xr=!1,dn=0,ze=0,wn=0,ro=0,Rr=0,bt=0,Oo=0,zi=null,ht=null,Nr=!1,Zl=0,kf=0,$l=1/0,jl=null,Dn=null,Xe=0,Un=null,qo=null,fn=0,Ir=0,Mr=null,Lf=null,Oi=0,wr=null;function xt(){return(_e&2)!==0&&ge!==0?ge&-ge:H.T!==null?Hr():Zu()}function Hf(){if(bt===0)if((ge&536870912)===0||ve){var e=al;al<<=1,(al&3932160)===0&&(al=262144),bt=e}else bt=536870912;return e=Ct.current,e!==null&&(e.flags|=32),bt}function gt(e,n,i){(e===De&&(be===2||be===9)||e.cancelPendingCommit!==null)&&(Vo(e,0),Pn(e,ge,bt,!1)),ri(e,i),((_e&2)===0||e!==De)&&(e===De&&((_e&2)===0&&(ro|=i),ze===4&&Pn(e,ge,bt,!1)),Xt(e))}function Gf(e,n,i){if((_e&6)!==0)throw Error(s(327));var a=!i&&(n&127)===0&&(n&e.expiredLanes)===0||ai(e,n),f=a?fv(e,n):Ur(e,n,!0),p=a;do{if(f===0){zo&&!a&&Pn(e,n,0,!1);break}else{if(i=e.current.alternate,p&&!cv(i)){f=Ur(e,n,!1),p=!1;continue}if(f===2){if(p=n,e.errorRecoveryDisabledLanes&p)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;e:{var C=e;f=zi;var A=C.current.memoizedState.isDehydrated;if(A&&(Vo(C,S).flags|=256),S=Ur(C,S,!1),S!==2){if(xr&&!A){C.errorRecoveryDisabledLanes|=p,ro|=p,f=4;break e}p=ht,ht=f,p!==null&&(ht===null?ht=p:ht.push.apply(ht,p))}f=S}if(p=!1,f!==2)continue}}if(f===1){Vo(e,0),Pn(e,n,0,!0);break}e:{switch(a=e,p=f,p){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Pn(a,n,bt,!Mn);break e;case 2:ht=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(f=Zl+300-yt(),10<f)){if(Pn(a,n,bt,!Mn),ul(a,0,!0)!==0)break e;fn=n,a.timeoutHandle=hp(Bf.bind(null,a,i,ht,jl,Nr,n,bt,ro,Oo,Mn,p,"Throttled",-0,0),f);break e}Bf(a,i,ht,jl,Nr,n,bt,ro,Oo,Mn,p,null,-0,0)}}break}while(!0);Xt(e)}function Bf(e,n,i,a,f,p,S,C,A,D,G,O,P,L){if(e.timeoutHandle=-1,O=n.subtreeFlags,O&8192||(O&16785408)===16785408){O={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Wt},wf(n,p,O);var j=(p&62914560)===p?Zl-yt():(p&4194048)===p?kf-yt():0;if(j=Xv(O,j),j!==null){fn=p,e.cancelPendingCommit=j(Kf.bind(null,e,n,p,i,a,f,S,C,A,G,O,null,P,L)),Pn(e,p,S,!D);return}}Kf(e,n,p,i,a,f,S,C,A)}function cv(e){for(var n=e;;){var i=n.tag;if((i===0||i===11||i===15)&&n.flags&16384&&(i=n.updateQueue,i!==null&&(i=i.stores,i!==null)))for(var a=0;a<i.length;a++){var f=i[a],p=f.getSnapshot;f=f.value;try{if(!Tt(p(),f))return!1}catch{return!1}}if(i=n.child,n.subtreeFlags&16384&&i!==null)i.return=n,n=i;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Pn(e,n,i,a){n&=~Rr,n&=~ro,e.suspendedLanes|=n,e.pingedLanes&=~n,a&&(e.warmLanes|=n),a=e.expirationTimes;for(var f=n;0<f;){var p=31-St(f),S=1<<p;a[p]=-1,f&=~S}i!==0&&Xu(e,i,n)}function es(){return(_e&6)===0?(qi(0),!1):!0}function Dr(){if(me!==null){if(be===0)var e=me.return;else e=me,en=jn=null,Xa(e),Uo=null,Ai=0,e=me;for(;e!==null;)gf(e.alternate,e),e=e.return;me=null}}function Vo(e,n){var i=e.timeoutHandle;i!==-1&&(e.timeoutHandle=-1,Mv(i)),i=e.cancelPendingCommit,i!==null&&(e.cancelPendingCommit=null,i()),fn=0,Dr(),De=e,me=i=$t(e.current,null),ge=n,be=0,At=null,Mn=!1,zo=ai(e,n),xr=!1,Oo=bt=Rr=ro=wn=ze=0,ht=zi=null,Nr=!1,(n&8)!==0&&(n|=n&32);var a=e.entangledLanes;if(a!==0)for(e=e.entanglements,a&=n;0<a;){var f=31-St(a),p=1<<f;n|=e[f],a&=~p}return dn=n,El(),i}function zf(e,n){de=null,H.H=Di,n===Do||n===Il?(n=td(),be=3):n===La?(n=td(),be=4):be=n===cr?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,At=n,me===null&&(ze=1,Vl(e,Mt(n,e.current)))}function Of(){var e=Ct.current;return e===null?!0:(ge&4194048)===ge?Pt===null:(ge&62914560)===ge||(ge&536870912)!==0?e===Pt:!1}function qf(){var e=H.H;return H.H=Di,e===null?Di:e}function Vf(){var e=H.A;return H.A=rv,e}function ts(){ze=4,Mn||(ge&4194048)!==ge&&Ct.current!==null||(zo=!0),(wn&134217727)===0&&(ro&134217727)===0||De===null||Pn(De,ge,bt,!1)}function Ur(e,n,i){var a=_e;_e|=2;var f=qf(),p=Vf();(De!==e||ge!==n)&&(jl=null,Vo(e,n)),n=!1;var S=ze;e:do try{if(be!==0&&me!==null){var C=me,A=At;switch(be){case 8:Dr(),S=6;break e;case 3:case 2:case 9:case 6:Ct.current===null&&(n=!0);var D=be;if(be=0,At=null,Fo(e,C,A,D),i&&zo){S=0;break e}break;default:D=be,be=0,At=null,Fo(e,C,A,D)}}dv(),S=ze;break}catch(G){zf(e,G)}while(!0);return n&&e.shellSuspendCounter++,en=jn=null,_e=a,H.H=f,H.A=p,me===null&&(De=null,ge=0,El()),S}function dv(){for(;me!==null;)Ff(me)}function fv(e,n){var i=_e;_e|=2;var a=qf(),f=Vf();De!==e||ge!==n?(jl=null,$l=yt()+500,Vo(e,n)):zo=ai(e,n);e:do try{if(be!==0&&me!==null){n=me;var p=At;t:switch(be){case 1:be=0,At=null,Fo(e,n,p,1);break;case 2:case 9:if(jc(p)){be=0,At=null,Yf(n);break}n=function(){be!==2&&be!==9||De!==e||(be=7),Xt(e)},p.then(n,n);break e;case 3:be=7;break e;case 4:be=5;break e;case 7:jc(p)?(be=0,At=null,Yf(n)):(be=0,At=null,Fo(e,n,p,7));break;case 5:var S=null;switch(me.tag){case 26:S=me.memoizedState;case 5:case 27:var C=me;if(S?Mp(S):C.stateNode.complete){be=0,At=null;var A=C.sibling;if(A!==null)me=A;else{var D=C.return;D!==null?(me=D,ns(D)):me=null}break t}}be=0,At=null,Fo(e,n,p,5);break;case 6:be=0,At=null,Fo(e,n,p,6);break;case 8:Dr(),ze=6;break e;default:throw Error(s(462))}}pv();break}catch(G){zf(e,G)}while(!0);return en=jn=null,H.H=a,H.A=f,_e=i,me!==null?0:(De=null,ge=0,El(),ze)}function pv(){for(;me!==null&&!Lg();)Ff(me)}function Ff(e){var n=mf(e.alternate,e,dn);e.memoizedProps=e.pendingProps,n===null?ns(e):me=n}function Yf(e){var n=e,i=n.alternate;switch(n.tag){case 15:case 0:n=rf(i,n,n.pendingProps,n.type,void 0,ge);break;case 11:n=rf(i,n,n.pendingProps,n.type.render,n.ref,ge);break;case 5:Xa(n);default:gf(i,n),n=me=qc(n,dn),n=mf(i,n,dn)}e.memoizedProps=e.pendingProps,n===null?ns(e):me=n}function Fo(e,n,i,a){en=jn=null,Xa(n),Uo=null,Ai=0;var f=n.return;try{if(tv(e,f,n,i,ge)){ze=1,Vl(e,Mt(i,e.current)),me=null;return}}catch(p){if(f!==null)throw me=f,p;ze=1,Vl(e,Mt(i,e.current)),me=null;return}n.flags&32768?(ve||a===1?e=!0:zo||(ge&536870912)!==0?e=!1:(Mn=e=!0,(a===2||a===9||a===3||a===6)&&(a=Ct.current,a!==null&&a.tag===13&&(a.flags|=16384))),Jf(n,e)):ns(n)}function ns(e){var n=e;do{if((n.flags&32768)!==0){Jf(n,Mn);return}e=n.return;var i=iv(n.alternate,n,dn);if(i!==null){me=i;return}if(n=n.sibling,n!==null){me=n;return}me=n=e}while(n!==null);ze===0&&(ze=5)}function Jf(e,n){do{var i=lv(e.alternate,e);if(i!==null){i.flags&=32767,me=i;return}if(i=e.return,i!==null&&(i.flags|=32768,i.subtreeFlags=0,i.deletions=null),!n&&(e=e.sibling,e!==null)){me=e;return}me=e=i}while(e!==null);ze=6,me=null}function Kf(e,n,i,a,f,p,S,C,A){e.cancelPendingCommit=null;do os();while(Xe!==0);if((_e&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(p=n.lanes|n.childLanes,p|=Ea,Jg(e,i,p,S,C,A),e===De&&(me=De=null,ge=0),qo=n,Un=e,fn=i,Ir=p,Mr=f,Lf=a,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,yv(ll,function(){return $f(),null})):(e.callbackNode=null,e.callbackPriority=0),a=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||a){a=H.T,H.T=null,f=X.p,X.p=2,S=_e,_e|=4;try{sv(e,n,i)}finally{_e=S,X.p=f,H.T=a}}Xe=1,Xf(),Qf(),Wf()}}function Xf(){if(Xe===1){Xe=0;var e=Un,n=qo,i=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||i){i=H.T,H.T=null;var a=X.p;X.p=2;var f=_e;_e|=4;try{Nf(n,e);var p=Yr,S=Uc(e.containerInfo),C=p.focusedElem,A=p.selectionRange;if(S!==C&&C&&C.ownerDocument&&Dc(C.ownerDocument.documentElement,C)){if(A!==null&&ga(C)){var D=A.start,G=A.end;if(G===void 0&&(G=D),"selectionStart"in C)C.selectionStart=D,C.selectionEnd=Math.min(G,C.value.length);else{var O=C.ownerDocument||document,P=O&&O.defaultView||window;if(P.getSelection){var L=P.getSelection(),j=C.textContent.length,le=Math.min(A.start,j),Me=A.end===void 0?le:Math.min(A.end,j);!L.extend&&le>Me&&(S=Me,Me=le,le=S);var N=wc(C,le),x=wc(C,Me);if(N&&x&&(L.rangeCount!==1||L.anchorNode!==N.node||L.anchorOffset!==N.offset||L.focusNode!==x.node||L.focusOffset!==x.offset)){var w=O.createRange();w.setStart(N.node,N.offset),L.removeAllRanges(),le>Me?(L.addRange(w),L.extend(x.node,x.offset)):(w.setEnd(x.node,x.offset),L.addRange(w))}}}}for(O=[],L=C;L=L.parentNode;)L.nodeType===1&&O.push({element:L,left:L.scrollLeft,top:L.scrollTop});for(typeof C.focus=="function"&&C.focus(),C=0;C<O.length;C++){var z=O[C];z.element.scrollLeft=z.left,z.element.scrollTop=z.top}}hs=!!Fr,Yr=Fr=null}finally{_e=f,X.p=a,H.T=i}}e.current=n,Xe=2}}function Qf(){if(Xe===2){Xe=0;var e=Un,n=qo,i=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||i){i=H.T,H.T=null;var a=X.p;X.p=2;var f=_e;_e|=4;try{_f(e,n.alternate,n)}finally{_e=f,X.p=a,H.T=i}}Xe=3}}function Wf(){if(Xe===4||Xe===3){Xe=0,Hg();var e=Un,n=qo,i=fn,a=Lf;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Xe=5:(Xe=0,qo=Un=null,Zf(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(Dn=null),Zs(i),n=n.stateNode,vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(si,n,void 0,(n.current.flags&128)===128)}catch{}if(a!==null){n=H.T,f=X.p,X.p=2,H.T=null;try{for(var p=e.onRecoverableError,S=0;S<a.length;S++){var C=a[S];p(C.value,{componentStack:C.stack})}}finally{H.T=n,X.p=f}}(fn&3)!==0&&os(),Xt(e),f=e.pendingLanes,(i&261930)!==0&&(f&42)!==0?e===wr?Oi++:(Oi=0,wr=e):Oi=0,qi(0)}}function Zf(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Ci(n)))}function os(){return Xf(),Qf(),Wf(),$f()}function $f(){if(Xe!==5)return!1;var e=Un,n=Ir;Ir=0;var i=Zs(fn),a=H.T,f=X.p;try{X.p=32>i?32:i,H.T=null,i=Mr,Mr=null;var p=Un,S=fn;if(Xe=0,qo=Un=null,fn=0,(_e&6)!==0)throw Error(s(331));var C=_e;if(_e|=4,Uf(p.current),Mf(p,p.current,S,i),_e=C,qi(0,!1),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(si,p)}catch{}return!0}finally{X.p=f,H.T=a,Zf(e,n)}}function jf(e,n,i){n=Mt(i,n),n=ur(e.stateNode,n,2),e=xn(e,n,2),e!==null&&(ri(e,2),Xt(e))}function xe(e,n,i){if(e.tag===3)jf(e,e,i);else for(;n!==null;){if(n.tag===3){jf(n,e,i);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Dn===null||!Dn.has(a))){e=Mt(i,e),i=jd(2),a=xn(n,i,2),a!==null&&(ef(i,a,n,e),ri(a,2),Xt(a));break}}n=n.return}}function Pr(e,n,i){var a=e.pingCache;if(a===null){a=e.pingCache=new uv;var f=new Set;a.set(n,f)}else f=a.get(n),f===void 0&&(f=new Set,a.set(n,f));f.has(i)||(xr=!0,f.add(i),e=mv.bind(null,e,n,i),n.then(e,e))}function mv(e,n,i){var a=e.pingCache;a!==null&&a.delete(n),e.pingedLanes|=e.suspendedLanes&i,e.warmLanes&=~i,De===e&&(ge&i)===i&&(ze===4||ze===3&&(ge&62914560)===ge&&300>yt()-Zl?(_e&2)===0&&Vo(e,0):Rr|=i,Oo===ge&&(Oo=0)),Xt(e)}function ep(e,n){n===0&&(n=Ku()),e=Wn(e,n),e!==null&&(ri(e,n),Xt(e))}function hv(e){var n=e.memoizedState,i=0;n!==null&&(i=n.retryLane),ep(e,i)}function gv(e,n){var i=0;switch(e.tag){case 31:case 13:var a=e.stateNode,f=e.memoizedState;f!==null&&(i=f.retryLane);break;case 19:a=e.stateNode;break;case 22:a=e.stateNode._retryCache;break;default:throw Error(s(314))}a!==null&&a.delete(n),ep(e,i)}function yv(e,n){return Ks(e,n)}var is=null,Yo=null,kr=!1,ls=!1,Lr=!1,kn=0;function Xt(e){e!==Yo&&e.next===null&&(Yo===null?is=Yo=e:Yo=Yo.next=e),ls=!0,kr||(kr=!0,Sv())}function qi(e,n){if(!Lr&&ls){Lr=!0;do for(var i=!1,a=is;a!==null;){if(e!==0){var f=a.pendingLanes;if(f===0)var p=0;else{var S=a.suspendedLanes,C=a.pingedLanes;p=(1<<31-St(42|e)+1)-1,p&=f&~(S&~C),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(i=!0,ip(a,p))}else p=ge,p=ul(a,a===De?p:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),(p&3)===0||ai(a,p)||(i=!0,ip(a,p));a=a.next}while(i);Lr=!1}}function vv(){tp()}function tp(){ls=kr=!1;var e=0;kn!==0&&Iv()&&(e=kn);for(var n=yt(),i=null,a=is;a!==null;){var f=a.next,p=np(a,n);p===0?(a.next=null,i===null?is=f:i.next=f,f===null&&(Yo=i)):(i=a,(e!==0||(p&3)!==0)&&(ls=!0)),a=f}Xe!==0&&Xe!==5||qi(e),kn!==0&&(kn=0)}function np(e,n){for(var i=e.suspendedLanes,a=e.pingedLanes,f=e.expirationTimes,p=e.pendingLanes&-62914561;0<p;){var S=31-St(p),C=1<<S,A=f[S];A===-1?((C&i)===0||(C&a)!==0)&&(f[S]=Yg(C,n)):A<=n&&(e.expiredLanes|=C),p&=~C}if(n=De,i=ge,i=ul(e,e===n?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a=e.callbackNode,i===0||e===n&&(be===2||be===9)||e.cancelPendingCommit!==null)return a!==null&&a!==null&&Xs(a),e.callbackNode=null,e.callbackPriority=0;if((i&3)===0||ai(e,i)){if(n=i&-i,n===e.callbackPriority)return n;switch(a!==null&&Xs(a),Zs(i)){case 2:case 8:i=Yu;break;case 32:i=ll;break;case 268435456:i=Ju;break;default:i=ll}return a=op.bind(null,e),i=Ks(i,a),e.callbackPriority=n,e.callbackNode=i,n}return a!==null&&a!==null&&Xs(a),e.callbackPriority=2,e.callbackNode=null,2}function op(e,n){if(Xe!==0&&Xe!==5)return e.callbackNode=null,e.callbackPriority=0,null;var i=e.callbackNode;if(os()&&e.callbackNode!==i)return null;var a=ge;return a=ul(e,e===De?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),a===0?null:(Gf(e,a,n),np(e,yt()),e.callbackNode!=null&&e.callbackNode===i?op.bind(null,e):null)}function ip(e,n){if(os())return null;Gf(e,n,!0)}function Sv(){wv(function(){(_e&6)!==0?Ks(Fu,vv):tp()})}function Hr(){if(kn===0){var e=Mo;e===0&&(e=sl,sl<<=1,(sl&261888)===0&&(sl=256)),kn=e}return kn}function lp(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:pl(""+e)}function sp(e,n){var i=n.ownerDocument.createElement("input");return i.name=n.name,i.value=n.value,e.id&&i.setAttribute("form",e.id),n.parentNode.insertBefore(i,n),e=new FormData(e),i.parentNode.removeChild(i),e}function Tv(e,n,i,a,f){if(n==="submit"&&i&&i.stateNode===f){var p=lp((f[ct]||null).action),S=a.submitter;S&&(n=(n=S[ct]||null)?lp(n.formAction):S.getAttribute("formAction"),n!==null&&(p=n,S=null));var C=new yl("action","action",null,a,f);e.push({event:C,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(kn!==0){var A=S?sp(f,S):new FormData(f);or(i,{pending:!0,data:A,method:f.method,action:p},null,A)}}else typeof p=="function"&&(C.preventDefault(),A=S?sp(f,S):new FormData(f),or(i,{pending:!0,data:A,method:f.method,action:p},p,A))},currentTarget:f}]})}}for(var Gr=0;Gr<Ta.length;Gr++){var Br=Ta[Gr],Ev=Br.toLowerCase(),Cv=Br[0].toUpperCase()+Br.slice(1);Bt(Ev,"on"+Cv)}Bt(Lc,"onAnimationEnd"),Bt(Hc,"onAnimationIteration"),Bt(Gc,"onAnimationStart"),Bt("dblclick","onDoubleClick"),Bt("focusin","onFocus"),Bt("focusout","onBlur"),Bt(Gy,"onTransitionRun"),Bt(By,"onTransitionStart"),Bt(zy,"onTransitionCancel"),Bt(Bc,"onTransitionEnd"),go("onMouseEnter",["mouseout","mouseover"]),go("onMouseLeave",["mouseout","mouseover"]),go("onPointerEnter",["pointerout","pointerover"]),go("onPointerLeave",["pointerout","pointerover"]),Jn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Jn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Jn("onBeforeInput",["compositionend","keypress","textInput","paste"]),Jn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Jn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_v=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vi));function ap(e,n){n=(n&4)!==0;for(var i=0;i<e.length;i++){var a=e[i],f=a.event;a=a.listeners;e:{var p=void 0;if(n)for(var S=a.length-1;0<=S;S--){var C=a[S],A=C.instance,D=C.currentTarget;if(C=C.listener,A!==p&&f.isPropagationStopped())break e;p=C,f.currentTarget=D;try{p(f)}catch(G){Tl(G)}f.currentTarget=null,p=A}else for(S=0;S<a.length;S++){if(C=a[S],A=C.instance,D=C.currentTarget,C=C.listener,A!==p&&f.isPropagationStopped())break e;p=C,f.currentTarget=D;try{p(f)}catch(G){Tl(G)}f.currentTarget=null,p=A}}}}function he(e,n){var i=n[$s];i===void 0&&(i=n[$s]=new Set);var a=e+"__bubble";i.has(a)||(rp(n,e,2,!1),i.add(a))}function zr(e,n,i){var a=0;n&&(a|=4),rp(i,e,a,n)}var ss="_reactListening"+Math.random().toString(36).slice(2);function Or(e){if(!e[ss]){e[ss]=!0,ec.forEach(function(i){i!=="selectionchange"&&(_v.has(i)||zr(i,!1,e),zr(i,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[ss]||(n[ss]=!0,zr("selectionchange",!1,n))}}function rp(e,n,i,a){switch(Hp(n)){case 2:var f=Zv;break;case 8:f=$v;break;default:f=nu}i=f.bind(null,n,i,e),f=void 0,!aa||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),a?f!==void 0?e.addEventListener(n,i,{capture:!0,passive:f}):e.addEventListener(n,i,!0):f!==void 0?e.addEventListener(n,i,{passive:f}):e.addEventListener(n,i,!1)}function qr(e,n,i,a,f){var p=a;if((n&1)===0&&(n&2)===0&&a!==null)e:for(;;){if(a===null)return;var S=a.tag;if(S===3||S===4){var C=a.stateNode.containerInfo;if(C===f)break;if(S===4)for(S=a.return;S!==null;){var A=S.tag;if((A===3||A===4)&&S.stateNode.containerInfo===f)return;S=S.return}for(;C!==null;){if(S=po(C),S===null)return;if(A=S.tag,A===5||A===6||A===26||A===27){a=p=S;continue e}C=C.parentNode}}a=a.return}fc(function(){var D=p,G=la(i),O=[];e:{var P=zc.get(e);if(P!==void 0){var L=yl,j=e;switch(e){case"keypress":if(hl(i)===0)break e;case"keydown":case"keyup":L=gy;break;case"focusin":j="focus",L=da;break;case"focusout":j="blur",L=da;break;case"beforeblur":case"afterblur":L=da;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=hc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=iy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Sy;break;case Lc:case Hc:case Gc:L=ay;break;case Bc:L=Ey;break;case"scroll":case"scrollend":L=ny;break;case"wheel":L=_y;break;case"copy":case"cut":case"paste":L=uy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=yc;break;case"toggle":case"beforetoggle":L=by}var le=(n&4)!==0,Me=!le&&(e==="scroll"||e==="scrollend"),N=le?P!==null?P+"Capture":null:P;le=[];for(var x=D,w;x!==null;){var z=x;if(w=z.stateNode,z=z.tag,z!==5&&z!==26&&z!==27||w===null||N===null||(z=di(x,N),z!=null&&le.push(Fi(x,z,w))),Me)break;x=x.return}0<le.length&&(P=new L(P,j,null,i,G),O.push({event:P,listeners:le}))}}if((n&7)===0){e:{if(P=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",P&&i!==ia&&(j=i.relatedTarget||i.fromElement)&&(po(j)||j[fo]))break e;if((L||P)&&(P=G.window===G?G:(P=G.ownerDocument)?P.defaultView||P.parentWindow:window,L?(j=i.relatedTarget||i.toElement,L=D,j=j?po(j):null,j!==null&&(Me=d(j),le=j.tag,j!==Me||le!==5&&le!==27&&le!==6)&&(j=null)):(L=null,j=D),L!==j)){if(le=hc,z="onMouseLeave",N="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(le=yc,z="onPointerLeave",N="onPointerEnter",x="pointer"),Me=L==null?P:ci(L),w=j==null?P:ci(j),P=new le(z,x+"leave",L,i,G),P.target=Me,P.relatedTarget=w,z=null,po(G)===D&&(le=new le(N,x+"enter",j,i,G),le.target=w,le.relatedTarget=Me,z=le),Me=z,L&&j)t:{for(le=Av,N=L,x=j,w=0,z=N;z;z=le(z))w++;z=0;for(var ie=x;ie;ie=le(ie))z++;for(;0<w-z;)N=le(N),w--;for(;0<z-w;)x=le(x),z--;for(;w--;){if(N===x||x!==null&&N===x.alternate){le=N;break t}N=le(N),x=le(x)}le=null}else le=null;L!==null&&up(O,P,L,le,!1),j!==null&&Me!==null&&up(O,Me,j,le,!0)}}e:{if(P=D?ci(D):window,L=P.nodeName&&P.nodeName.toLowerCase(),L==="select"||L==="input"&&P.type==="file")var Te=bc;else if(_c(P))if(xc)Te=ky;else{Te=Uy;var ne=Dy}else L=P.nodeName,!L||L.toLowerCase()!=="input"||P.type!=="checkbox"&&P.type!=="radio"?D&&oa(D.elementType)&&(Te=bc):Te=Py;if(Te&&(Te=Te(e,D))){Ac(O,Te,i,G);break e}ne&&ne(e,P,D),e==="focusout"&&D&&P.type==="number"&&D.memoizedProps.value!=null&&na(P,"number",P.value)}switch(ne=D?ci(D):window,e){case"focusin":(_c(ne)||ne.contentEditable==="true")&&(Co=ne,ya=D,Si=null);break;case"focusout":Si=ya=Co=null;break;case"mousedown":va=!0;break;case"contextmenu":case"mouseup":case"dragend":va=!1,Pc(O,i,G);break;case"selectionchange":if(Hy)break;case"keydown":case"keyup":Pc(O,i,G)}var fe;if(pa)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Eo?Ec(e,i)&&(ye="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(ye="onCompositionStart");ye&&(vc&&i.locale!=="ko"&&(Eo||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Eo&&(fe=pc()):(Sn=G,ra="value"in Sn?Sn.value:Sn.textContent,Eo=!0)),ne=as(D,ye),0<ne.length&&(ye=new gc(ye,e,null,i,G),O.push({event:ye,listeners:ne}),fe?ye.data=fe:(fe=Cc(i),fe!==null&&(ye.data=fe)))),(fe=Ry?Ny(e,i):Iy(e,i))&&(ye=as(D,"onBeforeInput"),0<ye.length&&(ne=new gc("onBeforeInput","beforeinput",null,i,G),O.push({event:ne,listeners:ye}),ne.data=fe)),Tv(O,e,D,i,G)}ap(O,n)})}function Fi(e,n,i){return{instance:e,listener:n,currentTarget:i}}function as(e,n){for(var i=n+"Capture",a=[];e!==null;){var f=e,p=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||p===null||(f=di(e,i),f!=null&&a.unshift(Fi(e,f,p)),f=di(e,n),f!=null&&a.push(Fi(e,f,p))),e.tag===3)return a;e=e.return}return[]}function Av(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function up(e,n,i,a,f){for(var p=n._reactName,S=[];i!==null&&i!==a;){var C=i,A=C.alternate,D=C.stateNode;if(C=C.tag,A!==null&&A===a)break;C!==5&&C!==26&&C!==27||D===null||(A=D,f?(D=di(i,p),D!=null&&S.unshift(Fi(i,D,A))):f||(D=di(i,p),D!=null&&S.push(Fi(i,D,A)))),i=i.return}S.length!==0&&e.push({event:n,listeners:S})}var bv=/\r\n?/g,xv=/\u0000|\uFFFD/g;function cp(e){return(typeof e=="string"?e:""+e).replace(bv,`
`).replace(xv,"")}function dp(e,n){return n=cp(n),cp(e)===n}function Ie(e,n,i,a,f,p){switch(i){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||vo(e,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&vo(e,""+a);break;case"className":dl(e,"class",a);break;case"tabIndex":dl(e,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":dl(e,i,a);break;case"style":cc(e,a,p);break;case"data":if(n!=="object"){dl(e,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||i!=="href")){e.removeAttribute(i);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(i);break}a=pl(""+a),e.setAttribute(i,a);break;case"action":case"formAction":if(typeof a=="function"){e.setAttribute(i,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(i==="formAction"?(n!=="input"&&Ie(e,n,"name",f.name,f,null),Ie(e,n,"formEncType",f.formEncType,f,null),Ie(e,n,"formMethod",f.formMethod,f,null),Ie(e,n,"formTarget",f.formTarget,f,null)):(Ie(e,n,"encType",f.encType,f,null),Ie(e,n,"method",f.method,f,null),Ie(e,n,"target",f.target,f,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){e.removeAttribute(i);break}a=pl(""+a),e.setAttribute(i,a);break;case"onClick":a!=null&&(e.onclick=Wt);break;case"onScroll":a!=null&&he("scroll",e);break;case"onScrollEnd":a!=null&&he("scrollend",e);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(i=a.__html,i!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=i}}break;case"multiple":e.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":e.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){e.removeAttribute("xlink:href");break}i=pl(""+a),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",i);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(i,""+a):e.removeAttribute(i);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(i,""):e.removeAttribute(i);break;case"capture":case"download":a===!0?e.setAttribute(i,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?e.setAttribute(i,a):e.removeAttribute(i);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?e.setAttribute(i,a):e.removeAttribute(i);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?e.removeAttribute(i):e.setAttribute(i,a);break;case"popover":he("beforetoggle",e),he("toggle",e),cl(e,"popover",a);break;case"xlinkActuate":Qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Qt(e,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Qt(e,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Qt(e,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Qt(e,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":cl(e,"is",a);break;case"innerText":case"textContent":break;default:(!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(i=ey.get(i)||i,cl(e,i,a))}}function Vr(e,n,i,a,f,p){switch(i){case"style":cc(e,a,p);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(s(61));if(i=a.__html,i!=null){if(f.children!=null)throw Error(s(60));e.innerHTML=i}}break;case"children":typeof a=="string"?vo(e,a):(typeof a=="number"||typeof a=="bigint")&&vo(e,""+a);break;case"onScroll":a!=null&&he("scroll",e);break;case"onScrollEnd":a!=null&&he("scrollend",e);break;case"onClick":a!=null&&(e.onclick=Wt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tc.hasOwnProperty(i))e:{if(i[0]==="o"&&i[1]==="n"&&(f=i.endsWith("Capture"),n=i.slice(2,f?i.length-7:void 0),p=e[ct]||null,p=p!=null?p[i]:null,typeof p=="function"&&e.removeEventListener(n,p,f),typeof a=="function")){typeof p!="function"&&p!==null&&(i in e?e[i]=null:e.hasAttribute(i)&&e.removeAttribute(i)),e.addEventListener(n,a,f);break e}i in e?e[i]=a:a===!0?e.setAttribute(i,""):cl(e,i,a)}}}function nt(e,n,i){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":he("error",e),he("load",e);var a=!1,f=!1,p;for(p in i)if(i.hasOwnProperty(p)){var S=i[p];if(S!=null)switch(p){case"src":a=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(e,n,p,S,i,null)}}f&&Ie(e,n,"srcSet",i.srcSet,i,null),a&&Ie(e,n,"src",i.src,i,null);return;case"input":he("invalid",e);var C=p=S=f=null,A=null,D=null;for(a in i)if(i.hasOwnProperty(a)){var G=i[a];if(G!=null)switch(a){case"name":f=G;break;case"type":S=G;break;case"checked":A=G;break;case"defaultChecked":D=G;break;case"value":p=G;break;case"defaultValue":C=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(s(137,n));break;default:Ie(e,n,a,G,i,null)}}sc(e,p,C,A,D,S,f,!1);return;case"select":he("invalid",e),a=S=p=null;for(f in i)if(i.hasOwnProperty(f)&&(C=i[f],C!=null))switch(f){case"value":p=C;break;case"defaultValue":S=C;break;case"multiple":a=C;default:Ie(e,n,f,C,i,null)}n=p,i=S,e.multiple=!!a,n!=null?yo(e,!!a,n,!1):i!=null&&yo(e,!!a,i,!0);return;case"textarea":he("invalid",e),p=f=a=null;for(S in i)if(i.hasOwnProperty(S)&&(C=i[S],C!=null))switch(S){case"value":a=C;break;case"defaultValue":f=C;break;case"children":p=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(s(91));break;default:Ie(e,n,S,C,i,null)}rc(e,a,f,p);return;case"option":for(A in i)if(i.hasOwnProperty(A)&&(a=i[A],a!=null))switch(A){case"selected":e.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:Ie(e,n,A,a,i,null)}return;case"dialog":he("beforetoggle",e),he("toggle",e),he("cancel",e),he("close",e);break;case"iframe":case"object":he("load",e);break;case"video":case"audio":for(a=0;a<Vi.length;a++)he(Vi[a],e);break;case"image":he("error",e),he("load",e);break;case"details":he("toggle",e);break;case"embed":case"source":case"link":he("error",e),he("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(D in i)if(i.hasOwnProperty(D)&&(a=i[D],a!=null))switch(D){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ie(e,n,D,a,i,null)}return;default:if(oa(n)){for(G in i)i.hasOwnProperty(G)&&(a=i[G],a!==void 0&&Vr(e,n,G,a,i,void 0));return}}for(C in i)i.hasOwnProperty(C)&&(a=i[C],a!=null&&Ie(e,n,C,a,i,null))}function Rv(e,n,i,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,p=null,S=null,C=null,A=null,D=null,G=null;for(L in i){var O=i[L];if(i.hasOwnProperty(L)&&O!=null)switch(L){case"checked":break;case"value":break;case"defaultValue":A=O;default:a.hasOwnProperty(L)||Ie(e,n,L,null,a,O)}}for(var P in a){var L=a[P];if(O=i[P],a.hasOwnProperty(P)&&(L!=null||O!=null))switch(P){case"type":p=L;break;case"name":f=L;break;case"checked":D=L;break;case"defaultChecked":G=L;break;case"value":S=L;break;case"defaultValue":C=L;break;case"children":case"dangerouslySetInnerHTML":if(L!=null)throw Error(s(137,n));break;default:L!==O&&Ie(e,n,P,L,a,O)}}ta(e,S,C,A,D,G,p,f);return;case"select":L=S=C=P=null;for(p in i)if(A=i[p],i.hasOwnProperty(p)&&A!=null)switch(p){case"value":break;case"multiple":L=A;default:a.hasOwnProperty(p)||Ie(e,n,p,null,a,A)}for(f in a)if(p=a[f],A=i[f],a.hasOwnProperty(f)&&(p!=null||A!=null))switch(f){case"value":P=p;break;case"defaultValue":C=p;break;case"multiple":S=p;default:p!==A&&Ie(e,n,f,p,a,A)}n=C,i=S,a=L,P!=null?yo(e,!!i,P,!1):!!a!=!!i&&(n!=null?yo(e,!!i,n,!0):yo(e,!!i,i?[]:"",!1));return;case"textarea":L=P=null;for(C in i)if(f=i[C],i.hasOwnProperty(C)&&f!=null&&!a.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Ie(e,n,C,null,a,f)}for(S in a)if(f=a[S],p=i[S],a.hasOwnProperty(S)&&(f!=null||p!=null))switch(S){case"value":P=f;break;case"defaultValue":L=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(s(91));break;default:f!==p&&Ie(e,n,S,f,a,p)}ac(e,P,L);return;case"option":for(var j in i)if(P=i[j],i.hasOwnProperty(j)&&P!=null&&!a.hasOwnProperty(j))switch(j){case"selected":e.selected=!1;break;default:Ie(e,n,j,null,a,P)}for(A in a)if(P=a[A],L=i[A],a.hasOwnProperty(A)&&P!==L&&(P!=null||L!=null))switch(A){case"selected":e.selected=P&&typeof P!="function"&&typeof P!="symbol";break;default:Ie(e,n,A,P,a,L)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var le in i)P=i[le],i.hasOwnProperty(le)&&P!=null&&!a.hasOwnProperty(le)&&Ie(e,n,le,null,a,P);for(D in a)if(P=a[D],L=i[D],a.hasOwnProperty(D)&&P!==L&&(P!=null||L!=null))switch(D){case"children":case"dangerouslySetInnerHTML":if(P!=null)throw Error(s(137,n));break;default:Ie(e,n,D,P,a,L)}return;default:if(oa(n)){for(var Me in i)P=i[Me],i.hasOwnProperty(Me)&&P!==void 0&&!a.hasOwnProperty(Me)&&Vr(e,n,Me,void 0,a,P);for(G in a)P=a[G],L=i[G],!a.hasOwnProperty(G)||P===L||P===void 0&&L===void 0||Vr(e,n,G,P,a,L);return}}for(var N in i)P=i[N],i.hasOwnProperty(N)&&P!=null&&!a.hasOwnProperty(N)&&Ie(e,n,N,null,a,P);for(O in a)P=a[O],L=i[O],!a.hasOwnProperty(O)||P===L||P==null&&L==null||Ie(e,n,O,P,a,L)}function fp(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Nv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,i=performance.getEntriesByType("resource"),a=0;a<i.length;a++){var f=i[a],p=f.transferSize,S=f.initiatorType,C=f.duration;if(p&&C&&fp(S)){for(S=0,C=f.responseEnd,a+=1;a<i.length;a++){var A=i[a],D=A.startTime;if(D>C)break;var G=A.transferSize,O=A.initiatorType;G&&fp(O)&&(A=A.responseEnd,S+=G*(A<C?1:(C-D)/(A-D)))}if(--a,n+=8*(p+S)/(f.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Fr=null,Yr=null;function rs(e){return e.nodeType===9?e:e.ownerDocument}function pp(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function mp(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Jr(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kr=null;function Iv(){var e=window.event;return e&&e.type==="popstate"?e===Kr?!1:(Kr=e,!0):(Kr=null,!1)}var hp=typeof setTimeout=="function"?setTimeout:void 0,Mv=typeof clearTimeout=="function"?clearTimeout:void 0,gp=typeof Promise=="function"?Promise:void 0,wv=typeof queueMicrotask=="function"?queueMicrotask:typeof gp<"u"?function(e){return gp.resolve(null).then(e).catch(Dv)}:hp;function Dv(e){setTimeout(function(){throw e})}function Ln(e){return e==="head"}function yp(e,n){var i=n,a=0;do{var f=i.nextSibling;if(e.removeChild(i),f&&f.nodeType===8)if(i=f.data,i==="/$"||i==="/&"){if(a===0){e.removeChild(f),Qo(n);return}a--}else if(i==="$"||i==="$?"||i==="$~"||i==="$!"||i==="&")a++;else if(i==="html")Yi(e.ownerDocument.documentElement);else if(i==="head"){i=e.ownerDocument.head,Yi(i);for(var p=i.firstChild;p;){var S=p.nextSibling,C=p.nodeName;p[ui]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&p.rel.toLowerCase()==="stylesheet"||i.removeChild(p),p=S}}else i==="body"&&Yi(e.ownerDocument.body);i=f}while(i);Qo(n)}function vp(e,n){var i=e;e=0;do{var a=i.nextSibling;if(i.nodeType===1?n?(i._stashedDisplay=i.style.display,i.style.display="none"):(i.style.display=i._stashedDisplay||"",i.getAttribute("style")===""&&i.removeAttribute("style")):i.nodeType===3&&(n?(i._stashedText=i.nodeValue,i.nodeValue=""):i.nodeValue=i._stashedText||""),a&&a.nodeType===8)if(i=a.data,i==="/$"){if(e===0)break;e--}else i!=="$"&&i!=="$?"&&i!=="$~"&&i!=="$!"||e++;i=a}while(i)}function Xr(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var i=n;switch(n=n.nextSibling,i.nodeName){case"HTML":case"HEAD":case"BODY":Xr(i),js(i);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(i.rel.toLowerCase()==="stylesheet")continue}e.removeChild(i)}}function Uv(e,n,i,a){for(;e.nodeType===1;){var f=i;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(a){if(!e[ui])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(p=e.getAttribute("rel"),p==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(p!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(p=e.getAttribute("src"),(p!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&p&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var p=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===p)return e}else return e;if(e=kt(e.nextSibling),e===null)break}return null}function Pv(e,n,i){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=kt(e.nextSibling),e===null))return null;return e}function Sp(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=kt(e.nextSibling),e===null))return null;return e}function Qr(e){return e.data==="$?"||e.data==="$~"}function Wr(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function kv(e,n){var i=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||i.readyState!=="loading")n();else{var a=function(){n(),i.removeEventListener("DOMContentLoaded",a)};i.addEventListener("DOMContentLoaded",a),e._reactRetry=a}}function kt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Zr=null;function Tp(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"||i==="/&"){if(n===0)return kt(e.nextSibling);n--}else i!=="$"&&i!=="$!"&&i!=="$?"&&i!=="$~"&&i!=="&"||n++}e=e.nextSibling}return null}function Ep(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"){if(n===0)return e;n--}else i!=="/$"&&i!=="/&"||n++}e=e.previousSibling}return null}function Cp(e,n,i){switch(n=rs(i),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Yi(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);js(e)}var Lt=new Map,_p=new Set;function us(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var pn=X.d;X.d={f:Lv,r:Hv,D:Gv,C:Bv,L:zv,m:Ov,X:Vv,S:qv,M:Fv};function Lv(){var e=pn.f(),n=es();return e||n}function Hv(e){var n=mo(e);n!==null&&n.tag===5&&n.type==="form"?Bd(n):pn.r(e)}var Jo=typeof document>"u"?null:document;function Ap(e,n,i){var a=Jo;if(a&&typeof n=="string"&&n){var f=Nt(n);f='link[rel="'+e+'"][href="'+f+'"]',typeof i=="string"&&(f+='[crossorigin="'+i+'"]'),_p.has(f)||(_p.add(f),e={rel:e,crossOrigin:i,href:n},a.querySelector(f)===null&&(n=a.createElement("link"),nt(n,"link",e),Qe(n),a.head.appendChild(n)))}}function Gv(e){pn.D(e),Ap("dns-prefetch",e,null)}function Bv(e,n){pn.C(e,n),Ap("preconnect",e,n)}function zv(e,n,i){pn.L(e,n,i);var a=Jo;if(a&&e&&n){var f='link[rel="preload"][as="'+Nt(n)+'"]';n==="image"&&i&&i.imageSrcSet?(f+='[imagesrcset="'+Nt(i.imageSrcSet)+'"]',typeof i.imageSizes=="string"&&(f+='[imagesizes="'+Nt(i.imageSizes)+'"]')):f+='[href="'+Nt(e)+'"]';var p=f;switch(n){case"style":p=Ko(e);break;case"script":p=Xo(e)}Lt.has(p)||(e=T({rel:"preload",href:n==="image"&&i&&i.imageSrcSet?void 0:e,as:n},i),Lt.set(p,e),a.querySelector(f)!==null||n==="style"&&a.querySelector(Ji(p))||n==="script"&&a.querySelector(Ki(p))||(n=a.createElement("link"),nt(n,"link",e),Qe(n),a.head.appendChild(n)))}}function Ov(e,n){pn.m(e,n);var i=Jo;if(i&&e){var a=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+Nt(a)+'"][href="'+Nt(e)+'"]',p=f;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Xo(e)}if(!Lt.has(p)&&(e=T({rel:"modulepreload",href:e},n),Lt.set(p,e),i.querySelector(f)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(i.querySelector(Ki(p)))return}a=i.createElement("link"),nt(a,"link",e),Qe(a),i.head.appendChild(a)}}}function qv(e,n,i){pn.S(e,n,i);var a=Jo;if(a&&e){var f=ho(a).hoistableStyles,p=Ko(e);n=n||"default";var S=f.get(p);if(!S){var C={loading:0,preload:null};if(S=a.querySelector(Ji(p)))C.loading=5;else{e=T({rel:"stylesheet",href:e,"data-precedence":n},i),(i=Lt.get(p))&&$r(e,i);var A=S=a.createElement("link");Qe(A),nt(A,"link",e),A._p=new Promise(function(D,G){A.onload=D,A.onerror=G}),A.addEventListener("load",function(){C.loading|=1}),A.addEventListener("error",function(){C.loading|=2}),C.loading|=4,cs(S,n,a)}S={type:"stylesheet",instance:S,count:1,state:C},f.set(p,S)}}}function Vv(e,n){pn.X(e,n);var i=Jo;if(i&&e){var a=ho(i).hoistableScripts,f=Xo(e),p=a.get(f);p||(p=i.querySelector(Ki(f)),p||(e=T({src:e,async:!0},n),(n=Lt.get(f))&&jr(e,n),p=i.createElement("script"),Qe(p),nt(p,"link",e),i.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},a.set(f,p))}}function Fv(e,n){pn.M(e,n);var i=Jo;if(i&&e){var a=ho(i).hoistableScripts,f=Xo(e),p=a.get(f);p||(p=i.querySelector(Ki(f)),p||(e=T({src:e,async:!0,type:"module"},n),(n=Lt.get(f))&&jr(e,n),p=i.createElement("script"),Qe(p),nt(p,"link",e),i.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},a.set(f,p))}}function bp(e,n,i,a){var f=(f=pe.current)?us(f):null;if(!f)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof i.precedence=="string"&&typeof i.href=="string"?(n=Ko(i.href),i=ho(f).hoistableStyles,a=i.get(n),a||(a={type:"style",instance:null,count:0,state:null},i.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(i.rel==="stylesheet"&&typeof i.href=="string"&&typeof i.precedence=="string"){e=Ko(i.href);var p=ho(f).hoistableStyles,S=p.get(e);if(S||(f=f.ownerDocument||f,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(e,S),(p=f.querySelector(Ji(e)))&&!p._p&&(S.instance=p,S.state.loading=5),Lt.has(e)||(i={rel:"preload",as:"style",href:i.href,crossOrigin:i.crossOrigin,integrity:i.integrity,media:i.media,hrefLang:i.hrefLang,referrerPolicy:i.referrerPolicy},Lt.set(e,i),p||Yv(f,e,i,S.state))),n&&a===null)throw Error(s(528,""));return S}if(n&&a!==null)throw Error(s(529,""));return null;case"script":return n=i.async,i=i.src,typeof i=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Xo(i),i=ho(f).hoistableScripts,a=i.get(n),a||(a={type:"script",instance:null,count:0,state:null},i.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function Ko(e){return'href="'+Nt(e)+'"'}function Ji(e){return'link[rel="stylesheet"]['+e+"]"}function xp(e){return T({},e,{"data-precedence":e.precedence,precedence:null})}function Yv(e,n,i,a){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=e.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),nt(n,"link",i),Qe(n),e.head.appendChild(n))}function Xo(e){return'[src="'+Nt(e)+'"]'}function Ki(e){return"script[async]"+e}function Rp(e,n,i){if(n.count++,n.instance===null)switch(n.type){case"style":var a=e.querySelector('style[data-href~="'+Nt(i.href)+'"]');if(a)return n.instance=a,Qe(a),a;var f=T({},i,{"data-href":i.href,"data-precedence":i.precedence,href:null,precedence:null});return a=(e.ownerDocument||e).createElement("style"),Qe(a),nt(a,"style",f),cs(a,i.precedence,e),n.instance=a;case"stylesheet":f=Ko(i.href);var p=e.querySelector(Ji(f));if(p)return n.state.loading|=4,n.instance=p,Qe(p),p;a=xp(i),(f=Lt.get(f))&&$r(a,f),p=(e.ownerDocument||e).createElement("link"),Qe(p);var S=p;return S._p=new Promise(function(C,A){S.onload=C,S.onerror=A}),nt(p,"link",a),n.state.loading|=4,cs(p,i.precedence,e),n.instance=p;case"script":return p=Xo(i.src),(f=e.querySelector(Ki(p)))?(n.instance=f,Qe(f),f):(a=i,(f=Lt.get(p))&&(a=T({},i),jr(a,f)),e=e.ownerDocument||e,f=e.createElement("script"),Qe(f),nt(f,"link",a),e.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,cs(a,i.precedence,e));return n.instance}function cs(e,n,i){for(var a=i.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=a.length?a[a.length-1]:null,p=f,S=0;S<a.length;S++){var C=a[S];if(C.dataset.precedence===n)p=C;else if(p!==f)break}p?p.parentNode.insertBefore(e,p.nextSibling):(n=i.nodeType===9?i.head:i,n.insertBefore(e,n.firstChild))}function $r(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function jr(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var ds=null;function Np(e,n,i){if(ds===null){var a=new Map,f=ds=new Map;f.set(i,a)}else f=ds,a=f.get(i),a||(a=new Map,f.set(i,a));if(a.has(e))return a;for(a.set(e,null),i=i.getElementsByTagName(e),f=0;f<i.length;f++){var p=i[f];if(!(p[ui]||p[$e]||e==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var S=p.getAttribute(n)||"";S=e+S;var C=a.get(S);C?C.push(p):a.set(S,[p])}}return a}function Ip(e,n,i){e=e.ownerDocument||e,e.head.insertBefore(i,n==="title"?e.querySelector("head > title"):null)}function Jv(e,n,i){if(i===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Mp(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Kv(e,n,i,a){if(i.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&(i.state.loading&4)===0){if(i.instance===null){var f=Ko(a.href),p=n.querySelector(Ji(f));if(p){n=p._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=fs.bind(e),n.then(e,e)),i.state.loading|=4,i.instance=p,Qe(p);return}p=n.ownerDocument||n,a=xp(a),(f=Lt.get(f))&&$r(a,f),p=p.createElement("link"),Qe(p);var S=p;S._p=new Promise(function(C,A){S.onload=C,S.onerror=A}),nt(p,"link",a),i.instance=p}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(i,n),(n=i.state.preload)&&(i.state.loading&3)===0&&(e.count++,i=fs.bind(e),n.addEventListener("load",i),n.addEventListener("error",i))}}var eu=0;function Xv(e,n){return e.stylesheets&&e.count===0&&ms(e,e.stylesheets),0<e.count||0<e.imgCount?function(i){var a=setTimeout(function(){if(e.stylesheets&&ms(e,e.stylesheets),e.unsuspend){var p=e.unsuspend;e.unsuspend=null,p()}},6e4+n);0<e.imgBytes&&eu===0&&(eu=62500*Nv());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ms(e,e.stylesheets),e.unsuspend)){var p=e.unsuspend;e.unsuspend=null,p()}},(e.imgBytes>eu?50:800)+n);return e.unsuspend=i,function(){e.unsuspend=null,clearTimeout(a),clearTimeout(f)}}:null}function fs(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ms(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ps=null;function ms(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ps=new Map,n.forEach(Qv,e),ps=null,fs.call(e))}function Qv(e,n){if(!(n.state.loading&4)){var i=ps.get(e);if(i)var a=i.get(null);else{i=new Map,ps.set(e,i);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<f.length;p++){var S=f[p];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(i.set(S.dataset.precedence,S),a=S)}a&&i.set(null,a)}f=n.instance,S=f.getAttribute("data-precedence"),p=i.get(S)||a,p===a&&i.set(null,f),i.set(S,f),this.count++,a=fs.bind(this),f.addEventListener("load",a),f.addEventListener("error",a),p?p.parentNode.insertBefore(f,p.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),n.state.loading|=4}}var Xi={$$typeof:B,Provider:null,Consumer:null,_currentValue:se,_currentValue2:se,_threadCount:0};function Wv(e,n,i,a,f,p,S,C,A){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Qs(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Qs(0),this.hiddenUpdates=Qs(null),this.identifierPrefix=a,this.onUncaughtError=f,this.onCaughtError=p,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function wp(e,n,i,a,f,p,S,C,A,D,G,O){return e=new Wv(e,n,i,S,A,D,G,O,C),n=1,p===!0&&(n|=24),p=Et(3,null,null,n),e.current=p,p.stateNode=e,n=Ua(),n.refCount++,e.pooledCache=n,n.refCount++,p.memoizedState={element:a,isDehydrated:i,cache:n},Ha(p),e}function Dp(e){return e?(e=bo,e):bo}function Up(e,n,i,a,f,p){f=Dp(f),a.context===null?a.context=f:a.pendingContext=f,a=bn(n),a.payload={element:i},p=p===void 0?null:p,p!==null&&(a.callback=p),i=xn(e,a,n),i!==null&&(gt(i,e,n),xi(i,e,n))}function Pp(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<n?i:n}}function tu(e,n){Pp(e,n),(e=e.alternate)&&Pp(e,n)}function kp(e){if(e.tag===13||e.tag===31){var n=Wn(e,67108864);n!==null&&gt(n,e,67108864),tu(e,67108864)}}function Lp(e){if(e.tag===13||e.tag===31){var n=xt();n=Ws(n);var i=Wn(e,n);i!==null&&gt(i,e,n),tu(e,n)}}var hs=!0;function Zv(e,n,i,a){var f=H.T;H.T=null;var p=X.p;try{X.p=2,nu(e,n,i,a)}finally{X.p=p,H.T=f}}function $v(e,n,i,a){var f=H.T;H.T=null;var p=X.p;try{X.p=8,nu(e,n,i,a)}finally{X.p=p,H.T=f}}function nu(e,n,i,a){if(hs){var f=ou(a);if(f===null)qr(e,n,a,gs,i),Gp(e,a);else if(e0(f,e,n,i,a))a.stopPropagation();else if(Gp(e,a),n&4&&-1<jv.indexOf(e)){for(;f!==null;){var p=mo(f);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var S=Yn(p.pendingLanes);if(S!==0){var C=p;for(C.pendingLanes|=2,C.entangledLanes|=2;S;){var A=1<<31-St(S);C.entanglements[1]|=A,S&=~A}Xt(p),(_e&6)===0&&($l=yt()+500,qi(0))}}break;case 31:case 13:C=Wn(p,2),C!==null&&gt(C,p,2),es(),tu(p,2)}if(p=ou(a),p===null&&qr(e,n,a,gs,i),p===f)break;f=p}f!==null&&a.stopPropagation()}else qr(e,n,a,null,i)}}function ou(e){return e=la(e),iu(e)}var gs=null;function iu(e){if(gs=null,e=po(e),e!==null){var n=d(e);if(n===null)e=null;else{var i=n.tag;if(i===13){if(e=m(n),e!==null)return e;e=null}else if(i===31){if(e=g(n),e!==null)return e;e=null}else if(i===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return gs=e,null}function Hp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Gg()){case Fu:return 2;case Yu:return 8;case ll:case Bg:return 32;case Ju:return 268435456;default:return 32}default:return 32}}var lu=!1,Hn=null,Gn=null,Bn=null,Qi=new Map,Wi=new Map,zn=[],jv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Gp(e,n){switch(e){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":Bn=null;break;case"pointerover":case"pointerout":Qi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wi.delete(n.pointerId)}}function Zi(e,n,i,a,f,p){return e===null||e.nativeEvent!==p?(e={blockedOn:n,domEventName:i,eventSystemFlags:a,nativeEvent:p,targetContainers:[f]},n!==null&&(n=mo(n),n!==null&&kp(n)),e):(e.eventSystemFlags|=a,n=e.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),e)}function e0(e,n,i,a,f){switch(n){case"focusin":return Hn=Zi(Hn,e,n,i,a,f),!0;case"dragenter":return Gn=Zi(Gn,e,n,i,a,f),!0;case"mouseover":return Bn=Zi(Bn,e,n,i,a,f),!0;case"pointerover":var p=f.pointerId;return Qi.set(p,Zi(Qi.get(p)||null,e,n,i,a,f)),!0;case"gotpointercapture":return p=f.pointerId,Wi.set(p,Zi(Wi.get(p)||null,e,n,i,a,f)),!0}return!1}function Bp(e){var n=po(e.target);if(n!==null){var i=d(n);if(i!==null){if(n=i.tag,n===13){if(n=m(i),n!==null){e.blockedOn=n,$u(e.priority,function(){Lp(i)});return}}else if(n===31){if(n=g(i),n!==null){e.blockedOn=n,$u(e.priority,function(){Lp(i)});return}}else if(n===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function ys(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var i=ou(e.nativeEvent);if(i===null){i=e.nativeEvent;var a=new i.constructor(i.type,i);ia=a,i.target.dispatchEvent(a),ia=null}else return n=mo(i),n!==null&&kp(n),e.blockedOn=i,!1;n.shift()}return!0}function zp(e,n,i){ys(e)&&i.delete(n)}function t0(){lu=!1,Hn!==null&&ys(Hn)&&(Hn=null),Gn!==null&&ys(Gn)&&(Gn=null),Bn!==null&&ys(Bn)&&(Bn=null),Qi.forEach(zp),Wi.forEach(zp)}function vs(e,n){e.blockedOn===n&&(e.blockedOn=null,lu||(lu=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,t0)))}var Ss=null;function Op(e){Ss!==e&&(Ss=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ss===e&&(Ss=null);for(var n=0;n<e.length;n+=3){var i=e[n],a=e[n+1],f=e[n+2];if(typeof a!="function"){if(iu(a||i)===null)continue;break}var p=mo(i);p!==null&&(e.splice(n,3),n-=3,or(p,{pending:!0,data:f,method:i.method,action:a},a,f))}}))}function Qo(e){function n(A){return vs(A,e)}Hn!==null&&vs(Hn,e),Gn!==null&&vs(Gn,e),Bn!==null&&vs(Bn,e),Qi.forEach(n),Wi.forEach(n);for(var i=0;i<zn.length;i++){var a=zn[i];a.blockedOn===e&&(a.blockedOn=null)}for(;0<zn.length&&(i=zn[0],i.blockedOn===null);)Bp(i),i.blockedOn===null&&zn.shift();if(i=(e.ownerDocument||e).$$reactFormReplay,i!=null)for(a=0;a<i.length;a+=3){var f=i[a],p=i[a+1],S=f[ct]||null;if(typeof p=="function")S||Op(i);else if(S){var C=null;if(p&&p.hasAttribute("formAction")){if(f=p,S=p[ct]||null)C=S.formAction;else if(iu(f)!==null)continue}else C=S.action;typeof C=="function"?i[a+1]=C:(i.splice(a,3),a-=3),Op(i)}}}function qp(){function e(p){p.canIntercept&&p.info==="react-transition"&&p.intercept({handler:function(){return new Promise(function(S){return f=S})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),a||setTimeout(i,20)}function i(){if(!a&&!navigation.transition){var p=navigation.currentEntry;p&&p.url!=null&&navigation.navigate(p.url,{state:p.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var a=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(i,100),function(){a=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function su(e){this._internalRoot=e}Ts.prototype.render=su.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var i=n.current,a=xt();Up(i,a,e,n,null,null)},Ts.prototype.unmount=su.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Up(e.current,2,null,e,null,null),es(),n[fo]=null}};function Ts(e){this._internalRoot=e}Ts.prototype.unstable_scheduleHydration=function(e){if(e){var n=Zu();e={blockedOn:null,target:e,priority:n};for(var i=0;i<zn.length&&n!==0&&n<zn[i].priority;i++);zn.splice(i,0,e),i===0&&Bp(e)}};var Vp=t.version;if(Vp!=="19.2.3")throw Error(s(527,Vp,"19.2.3"));X.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=h(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var n0={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:H,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Es=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Es.isDisabled&&Es.supportsFiber)try{si=Es.inject(n0),vt=Es}catch{}}return ji.createRoot=function(e,n){if(!r(e))throw Error(s(299));var i=!1,a="",f=Qd,p=Wd,S=Zd;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(p=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError)),n=wp(e,1,!1,null,null,i,a,null,f,p,S,qp),e[fo]=n.current,Or(e),new su(n)},ji.hydrateRoot=function(e,n,i){if(!r(e))throw Error(s(299));var a=!1,f="",p=Qd,S=Wd,C=Zd,A=null;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(f=i.identifierPrefix),i.onUncaughtError!==void 0&&(p=i.onUncaughtError),i.onCaughtError!==void 0&&(S=i.onCaughtError),i.onRecoverableError!==void 0&&(C=i.onRecoverableError),i.formState!==void 0&&(A=i.formState)),n=wp(e,1,!0,n,i??null,a,f,A,p,S,C,qp),n.context=Dp(null),i=n.current,a=xt(),a=Ws(a),f=bn(a),f.callback=null,xn(i,f,a),i=a,n.current.lanes=i,ri(n,i),Xt(n),e[fo]=n.current,Or(e),new Ts(n)},ji.version="19.2.3",ji}var jp;function f0(){if(jp)return uu.exports;jp=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),uu.exports=d0(),uu.exports}var p0=f0();const m0=Gh(p0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=o=>o.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),g0=o=>o.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,l,s)=>s?s.toUpperCase():l.toLowerCase()),em=o=>{const t=g0(o);return t.charAt(0).toUpperCase()+t.slice(1)},Bh=(...o)=>o.filter((t,l,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===l).join(" ").trim(),y0=o=>{for(const t in o)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var v0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=ke.forwardRef(({color:o="currentColor",size:t=24,strokeWidth:l=2,absoluteStrokeWidth:s,className:r="",children:d,iconNode:m,...g},y)=>ke.createElement("svg",{ref:y,...v0,width:t,height:t,stroke:o,strokeWidth:s?Number(l)*24/Number(t):l,className:Bh("lucide",r),...!d&&!y0(g)&&{"aria-hidden":"true"},...g},[...m.map(([h,v])=>ke.createElement(h,v)),...Array.isArray(d)?d:[d]]));/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=(o,t)=>{const l=ke.forwardRef(({className:s,...r},d)=>ke.createElement(S0,{ref:d,iconNode:t,className:Bh(`lucide-${h0(em(o))}`,`lucide-${o}`,s),...r}));return l.displayName=em(o),l};/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]],E0=Le("arrow-up",T0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20",key:"k3hazp"}]],_0=Le("book",C0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]],b0=Le("bot",A0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],hu=Le("check",x0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],tm=Le("chevron-right",R0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],zh=Le("circle-question-mark",N0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],M0=Le("clock",I0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],D0=Le("copy",w0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],nm=Le("external-link",U0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]],Oh=Le("link",P0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],L0=Le("loader-circle",k0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],om=Le("menu",H0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]],B0=Le("panels-top-left",G0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]],O0=Le("quote",z0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],im=Le("search",q0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],F0=Le("send",V0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],J0=Le("settings",Y0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],X0=Le("shield-check",K0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],gu=Le("sparkles",Q0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344",key:"2acyp4"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Z0=Le("square-check-big",W0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],j0=Le("square",$0);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eS=[["path",{d:"M12 19h8",key:"baeox8"}],["path",{d:"m4 17 6-6-6-6",key:"1yngyt"}]],tS=Le("terminal",eS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],oS=Le("user",nS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iS=[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z",key:"1ngwbx"}]],lS=Le("wrench",iS);/**
 * @license lucide-react v0.562.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Rs=Le("x",sS),Wo={getting_started:{title:"Getting Started",icon:_0,tags:["welcome","overview","stack"],content:`
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
    `},installation:{title:"Installation",icon:tS,tags:["setup","terminal","wordpress"],content:`
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

  `},configuration:{title:"Configuration",icon:J0,tags:["env","api","stripe"],content:`
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

    `},customization:{title:"Customization",icon:lS,tags:["branding","ui","colors"],content:`
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

    `},faq:{title:"FAQ",icon:zh,tags:["help","qa","rtl"],content:`
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

    `},security:{title:"Security & License",icon:X0,tags:["legal","safety","privacy"],content:`
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


    `}},aS="v3.0.0",rS="support@webpenter.com",uS="https://demo.bookhere.app",cS=({content:o,onNavigate:t,onHeadersFound:l})=>{const[s,r]=ol.useState(null),[d,m]=ol.useState(null);ol.useEffect(()=>{if(l){const I=v(o).filter(U=>U.type==="h2"||U.type==="h3").map(U=>({id:U.id,text:U.content,level:U.type==="h2"?2:3}));l(I)}},[o,l]);const g=(M,I)=>{navigator.clipboard.writeText(M),r(I),setTimeout(()=>r(null),2e3)},y=M=>{const I=`${window.location.origin}${window.location.pathname}#${M}`;navigator.clipboard.writeText(I),m(M),setTimeout(()=>m(null),2e3)},h=M=>M.toLowerCase().replace(/[^\w\s-]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-").trim(),v=M=>{const I=M.split(`
`),U=[];let V=null,B=null,K="",$=null;const ee=()=>{$&&(U.push($),$=null)};return I.forEach(J=>{const Q=J.trim();if(Q.startsWith("```")){ee(),V?(U.push({type:"code",content:V.join(`
`),language:K}),V=null,K=""):(V=[],K=Q.replace("```","").trim());return}if(V!==null){V.push(J);return}if(Q.startsWith("|")&&Q.endsWith("|")){ee();const F=J.split("|").filter((Y,oe,ue)=>!(oe===0||oe===ue.length-1)).map(Y=>Y.trim());if(F.every(Y=>Y.match(/^[ :-]+$/)))return;B?B.push(F):B=[F];return}else B&&(U.push({type:"table",content:B}),B=null);if(Q.startsWith("- [ ] ")||Q.startsWith("- [] ")||Q.startsWith("- [x] ")){ee();const F=Q.startsWith("- [x] ");U.push({type:"task",content:Q.replace(/- \[[ x]?\] /i,""),completed:F})}else if(Q.startsWith("- ")||Q.startsWith("* ")||Q.startsWith("+ ")){const F=Q.replace(/^[-*+]\s+/,"");$&&$.type==="ul"?$.items.push({content:F}):(ee(),$={type:"ul",items:[{content:F}]})}else if(Q.match(/^\d+\.\s+/)){const F=Q.match(/^(\d+)\.\s+/),Y=F?F[1]:void 0,oe=Q.replace(/^\d+\.\s+/,"");$&&$.type==="ol"?$.items.push({content:oe,value:Y}):(ee(),$={type:"ol",items:[{content:oe,value:Y}]})}else if(ee(),Q.startsWith("# ")){const F=Q.replace("# ","");U.push({type:"h1",content:F,id:h(F)})}else if(Q.startsWith("## ")){const F=Q.replace("## ","");U.push({type:"h2",content:F,id:h(F)})}else if(Q.startsWith("### ")){const F=Q.replace("### ","");U.push({type:"h3",content:F,id:h(F)})}else if(Q.startsWith("#### ")){const F=Q.replace("#### ","");U.push({type:"h4",content:F,id:h(F)})}else if(Q.startsWith("##### ")){const F=Q.replace("##### ","");U.push({type:"h5",content:F,id:h(F)})}else if(Q.startsWith("###### ")){const F=Q.replace("###### ","");U.push({type:"h6",content:F,id:h(F)})}else Q==="---"||Q==="***"||Q==="___"?U.push({type:"hr"}):Q.startsWith("> ")?U.push({type:"blockquote",content:Q.replace("> ","")}):Q!==""?U.push({type:"p",content:Q}):U.push({type:"space"})}),ee(),B&&U.push({type:"table",content:B}),U},T=v(o),E=M=>{var V;const U=M.target.closest("a");if(U&&t){const B=U.getAttribute("href");if(B){if(B.endsWith(".md")||B.includes("./")){M.preventDefault();const K=(V=B.split("/").pop())==null?void 0:V.replace(".md","").toLowerCase();K&&t(K)}else if(B.startsWith("#")){M.preventDefault();const K=B.slice(1),$=document.getElementById(K);if($){const J=$.getBoundingClientRect().top+window.pageYOffset+-80;window.scrollTo({top:J,behavior:"smooth"})}}}}},_=M=>M.replace(/"([^"]+)"/g,'<span class="inline-flex items-center px-1.5 py-0.5 rounded-md bg-slate-100 border border-slate-200 text-slate-700 text-[13px] font-semibold mx-0.5 shadow-sm">$1</span>').replace(/\*\*(.*?)\*\*/g,'<strong class="text-slate-900 font-bold">$1</strong>').replace(/\*(.*?)\*/g,'<em class="italic">$1</em>').replace(/__(.*?)__/g,'<strong class="text-slate-900 font-bold">$1</strong>').replace(/_(.*?)_/g,'<em class="italic">$1</em>').replace(/~~(.*?)~~/g,'<del class="line-through text-slate-400">$1</del>').replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" class="text-rose-600 hover:underline font-semibold">$1</a>').replace(new RegExp('(?<!href=")(https?:\\/\\/[^\\s<]+)',"g"),'<a href="$1" target="_blank" rel="noopener noreferrer" class="inline-flex items-center text-rose-600 hover:text-rose-700 font-semibold bg-rose-50/50 hover:bg-rose-100/50 px-1.5 py-0.5 rounded-md transition-all border border-rose-100/50">$1<svg class="inline-block ml-1 w-3 h-3 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg></a>').replace(new RegExp('(?<!href=")([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})',"g"),'<a href="mailto:$1" class="inline-flex items-center text-rose-600 hover:text-rose-700 font-semibold bg-rose-50/50 hover:bg-rose-100/50 px-1.5 py-0.5 rounded-md transition-all border border-rose-100/50">$1<svg class="inline-block ml-1 w-3 h-3 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg></a>').replace(/`(.*?)`/g,'<code class="bg-slate-100 text-rose-600 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>').replace(/→/g,'<span class="text-slate-400 mx-1 font-light">→</span>'),k=(M,I,U)=>{const V={1:"text-4xl font-extrabold text-slate-900 mt-12 mb-6 border-b border-slate-200 pb-4 tracking-tight",2:"text-3xl font-bold text-slate-900 mt-10 mb-5 tracking-tight",3:"text-2xl font-bold text-slate-800 mt-8 mb-4 tracking-tight",4:"text-xl font-bold text-slate-800 mt-6 mb-3 tracking-tight",5:"text-lg font-bold text-slate-800 mt-4 mb-2 tracking-tight",6:"text-base font-bold text-slate-700 mt-4 mb-2 tracking-tight uppercase tracking-wider"}[M],B=b.jsxs("button",{onClick:()=>y(I.id),className:"opacity-0 group-hover:opacity-100 transition-all p-1.5 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-rose-500 relative",title:"Copy section link",children:[d===I.id?b.jsx(hu,{size:16,className:"text-emerald-500"}):b.jsx(Oh,{size:16}),d===I.id&&b.jsx("span",{className:"absolute left-full ml-2 px-2 py-1 bg-slate-900 text-white text-[10px] font-bold rounded whitespace-nowrap",children:"Copied!"})]});switch(M){case 1:return b.jsxs("h1",{id:I.id,className:`${V} group flex items-center gap-3`,children:[I.content,B]},U);case 2:return b.jsxs("h2",{id:I.id,className:`${V} group flex items-center gap-3`,children:[I.content,B]},U);case 3:return b.jsxs("h3",{id:I.id,className:`${V} group flex items-center gap-3`,children:[I.content,B]},U);case 4:return b.jsxs("h4",{id:I.id,className:`${V} group flex items-center gap-3`,children:[I.content,B]},U);case 5:return b.jsxs("h5",{id:I.id,className:`${V} group flex items-center gap-3`,children:[I.content,B]},U);case 6:return b.jsxs("h6",{id:I.id,className:`${V} group flex items-center gap-3`,children:[I.content,B]},U);default:return null}};return b.jsx("div",{className:"space-y-4",onClick:E,children:T.map((M,I)=>{if(M.type==="space")return b.jsx("div",{className:"h-2"},I);if(M.type.startsWith("h")){const U=parseInt(M.type.substring(1));return k(U,M,I)}if(M.type==="hr")return b.jsx("hr",{className:"my-12 border-t border-slate-200"},I);if(M.type==="blockquote")return b.jsxs("div",{className:"my-6 pl-6 border-l-4 border-rose-500 bg-rose-50/30 py-4 pr-4 rounded-r-xl flex gap-4",children:[b.jsx(O0,{className:"text-rose-500 shrink-0",size:20}),b.jsx("p",{className:"text-slate-700 italic leading-relaxed",dangerouslySetInnerHTML:{__html:_(M.content)}})]},I);if(M.type==="task")return b.jsxs("div",{className:"flex items-center gap-3 my-2 ml-2",children:[M.completed?b.jsx(Z0,{className:"text-rose-500",size:18}):b.jsx(j0,{className:"text-slate-300",size:18}),b.jsx("span",{className:`text-slate-600 ${M.completed?"line-through text-slate-400":""}`,dangerouslySetInnerHTML:{__html:_(M.content)}})]},I);if(M.type==="ul")return b.jsx("ul",{className:"ml-6 list-disc space-y-2 my-4",children:M.items.map((U,V)=>b.jsx("li",{className:"text-slate-600 leading-relaxed pl-2",dangerouslySetInnerHTML:{__html:_(U.content)}},V))},I);if(M.type==="ol")return b.jsx("ol",{className:"ml-6 list-decimal space-y-2 my-4",children:M.items.map((U,V)=>b.jsx("li",{value:U.value,className:"text-slate-600 leading-relaxed pl-2",dangerouslySetInnerHTML:{__html:_(U.content)}},V))},I);if(M.type==="table")return b.jsx("div",{className:"my-8 overflow-hidden rounded-2xl border border-slate-200 shadow-sm max-w-full",children:b.jsx("div",{className:"overflow-x-auto",children:b.jsxs("table",{className:"w-full text-left border-collapse min-w-[600px] md:min-w-full",children:[b.jsx("thead",{children:b.jsx("tr",{className:"bg-slate-50 border-b border-slate-200",children:M.content[0].map((U,V)=>b.jsx("th",{className:"px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500",children:U},V))})}),b.jsx("tbody",{className:"divide-y divide-slate-100",children:M.content.slice(1).map((U,V)=>b.jsx("tr",{className:"hover:bg-slate-50/50 transition-colors",children:U.map((B,K)=>b.jsx("td",{className:"px-6 py-4 text-sm text-slate-600",children:b.jsx("span",{dangerouslySetInnerHTML:{__html:_(B)}})},K))},V))})]})})},I);if(M.type==="code"){const U=M.content.split(`
`);return b.jsxs("div",{className:"relative group my-8 rounded-xl overflow-hidden border border-slate-800 shadow-2xl max-w-full",children:[b.jsxs("div",{className:"flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700",children:[b.jsxs("div",{className:"flex items-center gap-4",children:[b.jsxs("div",{className:"flex gap-1.5",children:[b.jsx("div",{className:"w-3 h-3 rounded-full bg-rose-500/50"}),b.jsx("div",{className:"w-3 h-3 rounded-full bg-amber-500/50"}),b.jsx("div",{className:"w-3 h-3 rounded-full bg-emerald-500/50"})]}),M.language&&b.jsx("span",{className:"text-[10px] font-bold uppercase tracking-widest text-slate-500",children:M.language})]}),b.jsx("button",{onClick:()=>g(M.content,I),className:"flex items-center gap-1.5 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 hover:text-white transition-colors",children:s===I?b.jsxs(b.Fragment,{children:[b.jsx(hu,{size:12,className:"text-emerald-400"}),b.jsx("span",{className:"text-emerald-400",children:"Copied"})]}):b.jsxs(b.Fragment,{children:[b.jsx(D0,{size:12}),b.jsx("span",{children:"Copy Code"})]})})]}),b.jsx("div",{className:"bg-slate-900 overflow-x-auto",children:b.jsxs("pre",{className:"font-mono text-sm leading-6 py-4 flex min-w-full",children:[b.jsx("div",{className:"select-none text-right pr-4 pl-4 border-r border-slate-800 text-slate-600 bg-slate-900/50 sticky left-0 min-w-[3rem]",children:U.map((V,B)=>b.jsx("div",{className:"h-6",children:B+1},B))}),b.jsx("div",{className:"pl-4 pr-8 text-slate-300 min-w-full whitespace-pre",children:U.map((V,B)=>b.jsx("div",{className:"h-6 flex items-center",children:b.jsx("span",{className:"inline-block",children:V||" "})},B))})]})})]},I)}return M.type==="p"?b.jsx("p",{className:"text-slate-600 leading-relaxed text-lg break-words",dangerouslySetInnerHTML:{__html:_(M.content)}},I):null})})};var dS={};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let fS,pS;function mS(){return{geminiUrl:fS,vertexUrl:pS}}function hS(o,t,l,s){var r,d;if(!(o!=null&&o.baseUrl)){const m=mS();return t?(r=m.vertexUrl)!==null&&r!==void 0?r:l:(d=m.geminiUrl)!==null&&d!==void 0?d:s}return o.baseUrl}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class hn{}function Z(o,t){const l=/\{([^}]+)\}/g;return o.replace(l,(s,r)=>{if(Object.prototype.hasOwnProperty.call(t,r)){const d=t[r];return d!=null?String(d):""}else throw new Error(`Key '${r}' not found in valueMap.`)})}function c(o,t,l){for(let d=0;d<t.length-1;d++){const m=t[d];if(m.endsWith("[]")){const g=m.slice(0,-2);if(!(g in o))if(Array.isArray(l))o[g]=Array.from({length:l.length},()=>({}));else throw new Error(`Value must be a list given an array path ${m}`);if(Array.isArray(o[g])){const y=o[g];if(Array.isArray(l))for(let h=0;h<y.length;h++){const v=y[h];c(v,t.slice(d+1),l[h])}else for(const h of y)c(h,t.slice(d+1),l)}return}else if(m.endsWith("[0]")){const g=m.slice(0,-3);g in o||(o[g]=[{}]);const y=o[g];c(y[0],t.slice(d+1),l);return}(!o[m]||typeof o[m]!="object")&&(o[m]={}),o=o[m]}const s=t[t.length-1],r=o[s];if(r!==void 0){if(!l||typeof l=="object"&&Object.keys(l).length===0||l===r)return;if(typeof r=="object"&&typeof l=="object"&&r!==null&&l!==null)Object.assign(r,l);else throw new Error(`Cannot set value for an existing key. Key: ${s}`)}else s==="_self"&&typeof l=="object"&&l!==null&&!Array.isArray(l)?Object.assign(o,l):o[s]=l}function u(o,t,l=void 0){try{if(t.length===1&&t[0]==="_self")return o;for(let s=0;s<t.length;s++){if(typeof o!="object"||o===null)return l;const r=t[s];if(r.endsWith("[]")){const d=r.slice(0,-2);if(d in o){const m=o[d];return Array.isArray(m)?m.map(g=>u(g,t.slice(s+1),l)):l}else return l}else o=o[r]}return o}catch(s){if(s instanceof TypeError)return l;throw s}}function gS(o,t){for(const[l,s]of Object.entries(t)){const r=l.split("."),d=s.split("."),m=new Set;let g=-1;for(let y=0;y<r.length;y++)if(r[y]==="*"){g=y;break}if(g!==-1&&d.length>g)for(let y=g;y<d.length;y++){const h=d[y];h!=="*"&&!h.endsWith("[]")&&!h.endsWith("[0]")&&m.add(h)}yu(o,r,d,0,m)}}function yu(o,t,l,s,r){if(s>=t.length||typeof o!="object"||o===null)return;const d=t[s];if(d.endsWith("[]")){const m=d.slice(0,-2),g=o;if(m in g&&Array.isArray(g[m]))for(const y of g[m])yu(y,t,l,s+1,r)}else if(d==="*"){if(typeof o=="object"&&o!==null&&!Array.isArray(o)){const m=o,g=Object.keys(m).filter(h=>!h.startsWith("_")&&!r.has(h)),y={};for(const h of g)y[h]=m[h];for(const[h,v]of Object.entries(y)){const T=[];for(const E of l.slice(s))E==="*"?T.push(h):T.push(E);c(m,T,v)}for(const h of g)delete m[h]}}else{const m=o;d in m&&yu(m[d],t,l,s+1,r)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Du(o){if(typeof o!="string")throw new Error("fromImageBytes must be a string");return o}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function yS(o){const t={},l=u(o,["operationName"]);l!=null&&c(t,["operationName"],l);const s=u(o,["resourceName"]);return s!=null&&c(t,["_url","resourceName"],s),t}function vS(o){const t={},l=u(o,["name"]);l!=null&&c(t,["name"],l);const s=u(o,["metadata"]);s!=null&&c(t,["metadata"],s);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["response","generateVideoResponse"]);return m!=null&&c(t,["response"],TS(m)),t}function SS(o){const t={},l=u(o,["name"]);l!=null&&c(t,["name"],l);const s=u(o,["metadata"]);s!=null&&c(t,["metadata"],s);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["response"]);return m!=null&&c(t,["response"],ES(m)),t}function TS(o){const t={},l=u(o,["generatedSamples"]);if(l!=null){let d=l;Array.isArray(d)&&(d=d.map(m=>CS(m))),c(t,["generatedVideos"],d)}const s=u(o,["raiMediaFilteredCount"]);s!=null&&c(t,["raiMediaFilteredCount"],s);const r=u(o,["raiMediaFilteredReasons"]);return r!=null&&c(t,["raiMediaFilteredReasons"],r),t}function ES(o){const t={},l=u(o,["videos"]);if(l!=null){let d=l;Array.isArray(d)&&(d=d.map(m=>_S(m))),c(t,["generatedVideos"],d)}const s=u(o,["raiMediaFilteredCount"]);s!=null&&c(t,["raiMediaFilteredCount"],s);const r=u(o,["raiMediaFilteredReasons"]);return r!=null&&c(t,["raiMediaFilteredReasons"],r),t}function CS(o){const t={},l=u(o,["video"]);return l!=null&&c(t,["video"],IS(l)),t}function _S(o){const t={},l=u(o,["_self"]);return l!=null&&c(t,["video"],MS(l)),t}function AS(o){const t={},l=u(o,["operationName"]);return l!=null&&c(t,["_url","operationName"],l),t}function bS(o){const t={},l=u(o,["operationName"]);return l!=null&&c(t,["_url","operationName"],l),t}function xS(o){const t={},l=u(o,["name"]);l!=null&&c(t,["name"],l);const s=u(o,["metadata"]);s!=null&&c(t,["metadata"],s);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["response"]);return m!=null&&c(t,["response"],RS(m)),t}function RS(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["parent"]);s!=null&&c(t,["parent"],s);const r=u(o,["documentName"]);return r!=null&&c(t,["documentName"],r),t}function qh(o){const t={},l=u(o,["name"]);l!=null&&c(t,["name"],l);const s=u(o,["metadata"]);s!=null&&c(t,["metadata"],s);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["response"]);return m!=null&&c(t,["response"],NS(m)),t}function NS(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["parent"]);s!=null&&c(t,["parent"],s);const r=u(o,["documentName"]);return r!=null&&c(t,["documentName"],r),t}function IS(o){const t={},l=u(o,["uri"]);l!=null&&c(t,["uri"],l);const s=u(o,["encodedVideo"]);s!=null&&c(t,["videoBytes"],Du(s));const r=u(o,["encoding"]);return r!=null&&c(t,["mimeType"],r),t}function MS(o){const t={},l=u(o,["gcsUri"]);l!=null&&c(t,["uri"],l);const s=u(o,["bytesBase64Encoded"]);s!=null&&c(t,["videoBytes"],Du(s));const r=u(o,["mimeType"]);return r!=null&&c(t,["mimeType"],r),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var lm;(function(o){o.OUTCOME_UNSPECIFIED="OUTCOME_UNSPECIFIED",o.OUTCOME_OK="OUTCOME_OK",o.OUTCOME_FAILED="OUTCOME_FAILED",o.OUTCOME_DEADLINE_EXCEEDED="OUTCOME_DEADLINE_EXCEEDED"})(lm||(lm={}));var sm;(function(o){o.LANGUAGE_UNSPECIFIED="LANGUAGE_UNSPECIFIED",o.PYTHON="PYTHON"})(sm||(sm={}));var am;(function(o){o.SCHEDULING_UNSPECIFIED="SCHEDULING_UNSPECIFIED",o.SILENT="SILENT",o.WHEN_IDLE="WHEN_IDLE",o.INTERRUPT="INTERRUPT"})(am||(am={}));var qn;(function(o){o.TYPE_UNSPECIFIED="TYPE_UNSPECIFIED",o.STRING="STRING",o.NUMBER="NUMBER",o.INTEGER="INTEGER",o.BOOLEAN="BOOLEAN",o.ARRAY="ARRAY",o.OBJECT="OBJECT",o.NULL="NULL"})(qn||(qn={}));var rm;(function(o){o.MODE_UNSPECIFIED="MODE_UNSPECIFIED",o.MODE_DYNAMIC="MODE_DYNAMIC"})(rm||(rm={}));var um;(function(o){o.API_SPEC_UNSPECIFIED="API_SPEC_UNSPECIFIED",o.SIMPLE_SEARCH="SIMPLE_SEARCH",o.ELASTIC_SEARCH="ELASTIC_SEARCH"})(um||(um={}));var cm;(function(o){o.AUTH_TYPE_UNSPECIFIED="AUTH_TYPE_UNSPECIFIED",o.NO_AUTH="NO_AUTH",o.API_KEY_AUTH="API_KEY_AUTH",o.HTTP_BASIC_AUTH="HTTP_BASIC_AUTH",o.GOOGLE_SERVICE_ACCOUNT_AUTH="GOOGLE_SERVICE_ACCOUNT_AUTH",o.OAUTH="OAUTH",o.OIDC_AUTH="OIDC_AUTH"})(cm||(cm={}));var dm;(function(o){o.HTTP_IN_UNSPECIFIED="HTTP_IN_UNSPECIFIED",o.HTTP_IN_QUERY="HTTP_IN_QUERY",o.HTTP_IN_HEADER="HTTP_IN_HEADER",o.HTTP_IN_PATH="HTTP_IN_PATH",o.HTTP_IN_BODY="HTTP_IN_BODY",o.HTTP_IN_COOKIE="HTTP_IN_COOKIE"})(dm||(dm={}));var fm;(function(o){o.PHISH_BLOCK_THRESHOLD_UNSPECIFIED="PHISH_BLOCK_THRESHOLD_UNSPECIFIED",o.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",o.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",o.BLOCK_HIGH_AND_ABOVE="BLOCK_HIGH_AND_ABOVE",o.BLOCK_HIGHER_AND_ABOVE="BLOCK_HIGHER_AND_ABOVE",o.BLOCK_VERY_HIGH_AND_ABOVE="BLOCK_VERY_HIGH_AND_ABOVE",o.BLOCK_ONLY_EXTREMELY_HIGH="BLOCK_ONLY_EXTREMELY_HIGH"})(fm||(fm={}));var pm;(function(o){o.THINKING_LEVEL_UNSPECIFIED="THINKING_LEVEL_UNSPECIFIED",o.LOW="LOW",o.MEDIUM="MEDIUM",o.HIGH="HIGH",o.MINIMAL="MINIMAL"})(pm||(pm={}));var mm;(function(o){o.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",o.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",o.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",o.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",o.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",o.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY",o.HARM_CATEGORY_IMAGE_HATE="HARM_CATEGORY_IMAGE_HATE",o.HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT="HARM_CATEGORY_IMAGE_DANGEROUS_CONTENT",o.HARM_CATEGORY_IMAGE_HARASSMENT="HARM_CATEGORY_IMAGE_HARASSMENT",o.HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT="HARM_CATEGORY_IMAGE_SEXUALLY_EXPLICIT",o.HARM_CATEGORY_JAILBREAK="HARM_CATEGORY_JAILBREAK"})(mm||(mm={}));var hm;(function(o){o.HARM_BLOCK_METHOD_UNSPECIFIED="HARM_BLOCK_METHOD_UNSPECIFIED",o.SEVERITY="SEVERITY",o.PROBABILITY="PROBABILITY"})(hm||(hm={}));var gm;(function(o){o.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",o.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",o.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",o.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",o.BLOCK_NONE="BLOCK_NONE",o.OFF="OFF"})(gm||(gm={}));var ym;(function(o){o.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",o.STOP="STOP",o.MAX_TOKENS="MAX_TOKENS",o.SAFETY="SAFETY",o.RECITATION="RECITATION",o.LANGUAGE="LANGUAGE",o.OTHER="OTHER",o.BLOCKLIST="BLOCKLIST",o.PROHIBITED_CONTENT="PROHIBITED_CONTENT",o.SPII="SPII",o.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",o.IMAGE_SAFETY="IMAGE_SAFETY",o.UNEXPECTED_TOOL_CALL="UNEXPECTED_TOOL_CALL",o.IMAGE_PROHIBITED_CONTENT="IMAGE_PROHIBITED_CONTENT",o.NO_IMAGE="NO_IMAGE",o.IMAGE_RECITATION="IMAGE_RECITATION",o.IMAGE_OTHER="IMAGE_OTHER"})(ym||(ym={}));var vm;(function(o){o.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",o.NEGLIGIBLE="NEGLIGIBLE",o.LOW="LOW",o.MEDIUM="MEDIUM",o.HIGH="HIGH"})(vm||(vm={}));var Sm;(function(o){o.HARM_SEVERITY_UNSPECIFIED="HARM_SEVERITY_UNSPECIFIED",o.HARM_SEVERITY_NEGLIGIBLE="HARM_SEVERITY_NEGLIGIBLE",o.HARM_SEVERITY_LOW="HARM_SEVERITY_LOW",o.HARM_SEVERITY_MEDIUM="HARM_SEVERITY_MEDIUM",o.HARM_SEVERITY_HIGH="HARM_SEVERITY_HIGH"})(Sm||(Sm={}));var Tm;(function(o){o.URL_RETRIEVAL_STATUS_UNSPECIFIED="URL_RETRIEVAL_STATUS_UNSPECIFIED",o.URL_RETRIEVAL_STATUS_SUCCESS="URL_RETRIEVAL_STATUS_SUCCESS",o.URL_RETRIEVAL_STATUS_ERROR="URL_RETRIEVAL_STATUS_ERROR",o.URL_RETRIEVAL_STATUS_PAYWALL="URL_RETRIEVAL_STATUS_PAYWALL",o.URL_RETRIEVAL_STATUS_UNSAFE="URL_RETRIEVAL_STATUS_UNSAFE"})(Tm||(Tm={}));var Em;(function(o){o.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",o.SAFETY="SAFETY",o.OTHER="OTHER",o.BLOCKLIST="BLOCKLIST",o.PROHIBITED_CONTENT="PROHIBITED_CONTENT",o.IMAGE_SAFETY="IMAGE_SAFETY",o.MODEL_ARMOR="MODEL_ARMOR",o.JAILBREAK="JAILBREAK"})(Em||(Em={}));var Cm;(function(o){o.TRAFFIC_TYPE_UNSPECIFIED="TRAFFIC_TYPE_UNSPECIFIED",o.ON_DEMAND="ON_DEMAND",o.PROVISIONED_THROUGHPUT="PROVISIONED_THROUGHPUT"})(Cm||(Cm={}));var Ms;(function(o){o.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",o.TEXT="TEXT",o.IMAGE="IMAGE",o.AUDIO="AUDIO"})(Ms||(Ms={}));var _m;(function(o){o.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",o.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",o.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",o.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH"})(_m||(_m={}));var Am;(function(o){o.TUNING_MODE_UNSPECIFIED="TUNING_MODE_UNSPECIFIED",o.TUNING_MODE_FULL="TUNING_MODE_FULL",o.TUNING_MODE_PEFT_ADAPTER="TUNING_MODE_PEFT_ADAPTER"})(Am||(Am={}));var bm;(function(o){o.ADAPTER_SIZE_UNSPECIFIED="ADAPTER_SIZE_UNSPECIFIED",o.ADAPTER_SIZE_ONE="ADAPTER_SIZE_ONE",o.ADAPTER_SIZE_TWO="ADAPTER_SIZE_TWO",o.ADAPTER_SIZE_FOUR="ADAPTER_SIZE_FOUR",o.ADAPTER_SIZE_EIGHT="ADAPTER_SIZE_EIGHT",o.ADAPTER_SIZE_SIXTEEN="ADAPTER_SIZE_SIXTEEN",o.ADAPTER_SIZE_THIRTY_TWO="ADAPTER_SIZE_THIRTY_TWO"})(bm||(bm={}));var vu;(function(o){o.JOB_STATE_UNSPECIFIED="JOB_STATE_UNSPECIFIED",o.JOB_STATE_QUEUED="JOB_STATE_QUEUED",o.JOB_STATE_PENDING="JOB_STATE_PENDING",o.JOB_STATE_RUNNING="JOB_STATE_RUNNING",o.JOB_STATE_SUCCEEDED="JOB_STATE_SUCCEEDED",o.JOB_STATE_FAILED="JOB_STATE_FAILED",o.JOB_STATE_CANCELLING="JOB_STATE_CANCELLING",o.JOB_STATE_CANCELLED="JOB_STATE_CANCELLED",o.JOB_STATE_PAUSED="JOB_STATE_PAUSED",o.JOB_STATE_EXPIRED="JOB_STATE_EXPIRED",o.JOB_STATE_UPDATING="JOB_STATE_UPDATING",o.JOB_STATE_PARTIALLY_SUCCEEDED="JOB_STATE_PARTIALLY_SUCCEEDED"})(vu||(vu={}));var xm;(function(o){o.TUNING_TASK_UNSPECIFIED="TUNING_TASK_UNSPECIFIED",o.TUNING_TASK_I2V="TUNING_TASK_I2V",o.TUNING_TASK_T2V="TUNING_TASK_T2V",o.TUNING_TASK_R2V="TUNING_TASK_R2V"})(xm||(xm={}));var Rm;(function(o){o.MEDIA_RESOLUTION_UNSPECIFIED="MEDIA_RESOLUTION_UNSPECIFIED",o.MEDIA_RESOLUTION_LOW="MEDIA_RESOLUTION_LOW",o.MEDIA_RESOLUTION_MEDIUM="MEDIA_RESOLUTION_MEDIUM",o.MEDIA_RESOLUTION_HIGH="MEDIA_RESOLUTION_HIGH",o.MEDIA_RESOLUTION_ULTRA_HIGH="MEDIA_RESOLUTION_ULTRA_HIGH"})(Rm||(Rm={}));var Nm;(function(o){o.FEATURE_SELECTION_PREFERENCE_UNSPECIFIED="FEATURE_SELECTION_PREFERENCE_UNSPECIFIED",o.PRIORITIZE_QUALITY="PRIORITIZE_QUALITY",o.BALANCED="BALANCED",o.PRIORITIZE_COST="PRIORITIZE_COST"})(Nm||(Nm={}));var Im;(function(o){o.UNSPECIFIED="UNSPECIFIED",o.BLOCKING="BLOCKING",o.NON_BLOCKING="NON_BLOCKING"})(Im||(Im={}));var Mm;(function(o){o.MODE_UNSPECIFIED="MODE_UNSPECIFIED",o.MODE_DYNAMIC="MODE_DYNAMIC"})(Mm||(Mm={}));var wm;(function(o){o.ENVIRONMENT_UNSPECIFIED="ENVIRONMENT_UNSPECIFIED",o.ENVIRONMENT_BROWSER="ENVIRONMENT_BROWSER"})(wm||(wm={}));var Dm;(function(o){o.MODE_UNSPECIFIED="MODE_UNSPECIFIED",o.AUTO="AUTO",o.ANY="ANY",o.NONE="NONE",o.VALIDATED="VALIDATED"})(Dm||(Dm={}));var Um;(function(o){o.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",o.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",o.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",o.BLOCK_NONE="BLOCK_NONE"})(Um||(Um={}));var Pm;(function(o){o.DONT_ALLOW="DONT_ALLOW",o.ALLOW_ADULT="ALLOW_ADULT",o.ALLOW_ALL="ALLOW_ALL"})(Pm||(Pm={}));var km;(function(o){o.auto="auto",o.en="en",o.ja="ja",o.ko="ko",o.hi="hi",o.zh="zh",o.pt="pt",o.es="es"})(km||(km={}));var Lm;(function(o){o.MASK_MODE_DEFAULT="MASK_MODE_DEFAULT",o.MASK_MODE_USER_PROVIDED="MASK_MODE_USER_PROVIDED",o.MASK_MODE_BACKGROUND="MASK_MODE_BACKGROUND",o.MASK_MODE_FOREGROUND="MASK_MODE_FOREGROUND",o.MASK_MODE_SEMANTIC="MASK_MODE_SEMANTIC"})(Lm||(Lm={}));var Hm;(function(o){o.CONTROL_TYPE_DEFAULT="CONTROL_TYPE_DEFAULT",o.CONTROL_TYPE_CANNY="CONTROL_TYPE_CANNY",o.CONTROL_TYPE_SCRIBBLE="CONTROL_TYPE_SCRIBBLE",o.CONTROL_TYPE_FACE_MESH="CONTROL_TYPE_FACE_MESH"})(Hm||(Hm={}));var Gm;(function(o){o.SUBJECT_TYPE_DEFAULT="SUBJECT_TYPE_DEFAULT",o.SUBJECT_TYPE_PERSON="SUBJECT_TYPE_PERSON",o.SUBJECT_TYPE_ANIMAL="SUBJECT_TYPE_ANIMAL",o.SUBJECT_TYPE_PRODUCT="SUBJECT_TYPE_PRODUCT"})(Gm||(Gm={}));var Bm;(function(o){o.EDIT_MODE_DEFAULT="EDIT_MODE_DEFAULT",o.EDIT_MODE_INPAINT_REMOVAL="EDIT_MODE_INPAINT_REMOVAL",o.EDIT_MODE_INPAINT_INSERTION="EDIT_MODE_INPAINT_INSERTION",o.EDIT_MODE_OUTPAINT="EDIT_MODE_OUTPAINT",o.EDIT_MODE_CONTROLLED_EDITING="EDIT_MODE_CONTROLLED_EDITING",o.EDIT_MODE_STYLE="EDIT_MODE_STYLE",o.EDIT_MODE_BGSWAP="EDIT_MODE_BGSWAP",o.EDIT_MODE_PRODUCT_IMAGE="EDIT_MODE_PRODUCT_IMAGE"})(Bm||(Bm={}));var zm;(function(o){o.FOREGROUND="FOREGROUND",o.BACKGROUND="BACKGROUND",o.PROMPT="PROMPT",o.SEMANTIC="SEMANTIC",o.INTERACTIVE="INTERACTIVE"})(zm||(zm={}));var Om;(function(o){o.ASSET="ASSET",o.STYLE="STYLE"})(Om||(Om={}));var qm;(function(o){o.INSERT="INSERT",o.REMOVE="REMOVE",o.REMOVE_STATIC="REMOVE_STATIC",o.OUTPAINT="OUTPAINT"})(qm||(qm={}));var Vm;(function(o){o.OPTIMIZED="OPTIMIZED",o.LOSSLESS="LOSSLESS"})(Vm||(Vm={}));var Fm;(function(o){o.SUPERVISED_FINE_TUNING="SUPERVISED_FINE_TUNING",o.PREFERENCE_TUNING="PREFERENCE_TUNING"})(Fm||(Fm={}));var Ym;(function(o){o.STATE_UNSPECIFIED="STATE_UNSPECIFIED",o.STATE_PENDING="STATE_PENDING",o.STATE_ACTIVE="STATE_ACTIVE",o.STATE_FAILED="STATE_FAILED"})(Ym||(Ym={}));var Jm;(function(o){o.STATE_UNSPECIFIED="STATE_UNSPECIFIED",o.PROCESSING="PROCESSING",o.ACTIVE="ACTIVE",o.FAILED="FAILED"})(Jm||(Jm={}));var Km;(function(o){o.SOURCE_UNSPECIFIED="SOURCE_UNSPECIFIED",o.UPLOADED="UPLOADED",o.GENERATED="GENERATED"})(Km||(Km={}));var Xm;(function(o){o.TURN_COMPLETE_REASON_UNSPECIFIED="TURN_COMPLETE_REASON_UNSPECIFIED",o.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",o.RESPONSE_REJECTED="RESPONSE_REJECTED",o.NEED_MORE_INPUT="NEED_MORE_INPUT"})(Xm||(Xm={}));var Qm;(function(o){o.MODALITY_UNSPECIFIED="MODALITY_UNSPECIFIED",o.TEXT="TEXT",o.IMAGE="IMAGE",o.VIDEO="VIDEO",o.AUDIO="AUDIO",o.DOCUMENT="DOCUMENT"})(Qm||(Qm={}));var Wm;(function(o){o.VAD_SIGNAL_TYPE_UNSPECIFIED="VAD_SIGNAL_TYPE_UNSPECIFIED",o.VAD_SIGNAL_TYPE_SOS="VAD_SIGNAL_TYPE_SOS",o.VAD_SIGNAL_TYPE_EOS="VAD_SIGNAL_TYPE_EOS"})(Wm||(Wm={}));var Zm;(function(o){o.START_SENSITIVITY_UNSPECIFIED="START_SENSITIVITY_UNSPECIFIED",o.START_SENSITIVITY_HIGH="START_SENSITIVITY_HIGH",o.START_SENSITIVITY_LOW="START_SENSITIVITY_LOW"})(Zm||(Zm={}));var $m;(function(o){o.END_SENSITIVITY_UNSPECIFIED="END_SENSITIVITY_UNSPECIFIED",o.END_SENSITIVITY_HIGH="END_SENSITIVITY_HIGH",o.END_SENSITIVITY_LOW="END_SENSITIVITY_LOW"})($m||($m={}));var jm;(function(o){o.ACTIVITY_HANDLING_UNSPECIFIED="ACTIVITY_HANDLING_UNSPECIFIED",o.START_OF_ACTIVITY_INTERRUPTS="START_OF_ACTIVITY_INTERRUPTS",o.NO_INTERRUPTION="NO_INTERRUPTION"})(jm||(jm={}));var eh;(function(o){o.TURN_COVERAGE_UNSPECIFIED="TURN_COVERAGE_UNSPECIFIED",o.TURN_INCLUDES_ONLY_ACTIVITY="TURN_INCLUDES_ONLY_ACTIVITY",o.TURN_INCLUDES_ALL_INPUT="TURN_INCLUDES_ALL_INPUT"})(eh||(eh={}));var th;(function(o){o.SCALE_UNSPECIFIED="SCALE_UNSPECIFIED",o.C_MAJOR_A_MINOR="C_MAJOR_A_MINOR",o.D_FLAT_MAJOR_B_FLAT_MINOR="D_FLAT_MAJOR_B_FLAT_MINOR",o.D_MAJOR_B_MINOR="D_MAJOR_B_MINOR",o.E_FLAT_MAJOR_C_MINOR="E_FLAT_MAJOR_C_MINOR",o.E_MAJOR_D_FLAT_MINOR="E_MAJOR_D_FLAT_MINOR",o.F_MAJOR_D_MINOR="F_MAJOR_D_MINOR",o.G_FLAT_MAJOR_E_FLAT_MINOR="G_FLAT_MAJOR_E_FLAT_MINOR",o.G_MAJOR_E_MINOR="G_MAJOR_E_MINOR",o.A_FLAT_MAJOR_F_MINOR="A_FLAT_MAJOR_F_MINOR",o.A_MAJOR_G_FLAT_MINOR="A_MAJOR_G_FLAT_MINOR",o.B_FLAT_MAJOR_G_MINOR="B_FLAT_MAJOR_G_MINOR",o.B_MAJOR_A_FLAT_MINOR="B_MAJOR_A_FLAT_MINOR"})(th||(th={}));var nh;(function(o){o.MUSIC_GENERATION_MODE_UNSPECIFIED="MUSIC_GENERATION_MODE_UNSPECIFIED",o.QUALITY="QUALITY",o.DIVERSITY="DIVERSITY",o.VOCALIZATION="VOCALIZATION"})(nh||(nh={}));var $o;(function(o){o.PLAYBACK_CONTROL_UNSPECIFIED="PLAYBACK_CONTROL_UNSPECIFIED",o.PLAY="PLAY",o.PAUSE="PAUSE",o.STOP="STOP",o.RESET_CONTEXT="RESET_CONTEXT"})($o||($o={}));class Su{constructor(t){const l={};for(const s of t.headers.entries())l[s[0]]=s[1];this.headers=l,this.responseInternal=t}json(){return this.responseInternal.json()}}class el{get text(){var t,l,s,r,d,m,g,y;if(((r=(s=(l=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||l===void 0?void 0:l.content)===null||s===void 0?void 0:s.parts)===null||r===void 0?void 0:r.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning text from the first one.");let h="",v=!1;const T=[];for(const E of(y=(g=(m=(d=this.candidates)===null||d===void 0?void 0:d[0])===null||m===void 0?void 0:m.content)===null||g===void 0?void 0:g.parts)!==null&&y!==void 0?y:[]){for(const[_,k]of Object.entries(E))_!=="text"&&_!=="thought"&&_!=="thoughtSignature"&&(k!==null||k!==void 0)&&T.push(_);if(typeof E.text=="string"){if(typeof E.thought=="boolean"&&E.thought)continue;v=!0,h+=E.text}}return T.length>0&&console.warn(`there are non-text parts ${T} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),v?h:void 0}get data(){var t,l,s,r,d,m,g,y;if(((r=(s=(l=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||l===void 0?void 0:l.content)===null||s===void 0?void 0:s.parts)===null||r===void 0?void 0:r.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning data from the first one.");let h="";const v=[];for(const T of(y=(g=(m=(d=this.candidates)===null||d===void 0?void 0:d[0])===null||m===void 0?void 0:m.content)===null||g===void 0?void 0:g.parts)!==null&&y!==void 0?y:[]){for(const[E,_]of Object.entries(T))E!=="inlineData"&&(_!==null||_!==void 0)&&v.push(E);T.inlineData&&typeof T.inlineData.data=="string"&&(h+=atob(T.inlineData.data))}return v.length>0&&console.warn(`there are non-data parts ${v} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),h.length>0?btoa(h):void 0}get functionCalls(){var t,l,s,r,d,m,g,y;if(((r=(s=(l=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||l===void 0?void 0:l.content)===null||s===void 0?void 0:s.parts)===null||r===void 0?void 0:r.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning function calls from the first one.");const h=(y=(g=(m=(d=this.candidates)===null||d===void 0?void 0:d[0])===null||m===void 0?void 0:m.content)===null||g===void 0?void 0:g.parts)===null||y===void 0?void 0:y.filter(v=>v.functionCall).map(v=>v.functionCall).filter(v=>v!==void 0);if((h==null?void 0:h.length)!==0)return h}get executableCode(){var t,l,s,r,d,m,g,y,h;if(((r=(s=(l=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||l===void 0?void 0:l.content)===null||s===void 0?void 0:s.parts)===null||r===void 0?void 0:r.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning executable code from the first one.");const v=(y=(g=(m=(d=this.candidates)===null||d===void 0?void 0:d[0])===null||m===void 0?void 0:m.content)===null||g===void 0?void 0:g.parts)===null||y===void 0?void 0:y.filter(T=>T.executableCode).map(T=>T.executableCode).filter(T=>T!==void 0);if((v==null?void 0:v.length)!==0)return(h=v==null?void 0:v[0])===null||h===void 0?void 0:h.code}get codeExecutionResult(){var t,l,s,r,d,m,g,y,h;if(((r=(s=(l=(t=this.candidates)===null||t===void 0?void 0:t[0])===null||l===void 0?void 0:l.content)===null||s===void 0?void 0:s.parts)===null||r===void 0?void 0:r.length)===0)return;this.candidates&&this.candidates.length>1&&console.warn("there are multiple candidates in the response, returning code execution result from the first one.");const v=(y=(g=(m=(d=this.candidates)===null||d===void 0?void 0:d[0])===null||m===void 0?void 0:m.content)===null||g===void 0?void 0:g.parts)===null||y===void 0?void 0:y.filter(T=>T.codeExecutionResult).map(T=>T.codeExecutionResult).filter(T=>T!==void 0);if((v==null?void 0:v.length)!==0)return(h=v==null?void 0:v[0])===null||h===void 0?void 0:h.output}}class oh{}class ih{}class wS{}class DS{}class US{}class PS{}class lh{}class sh{}class ah{}class kS{}class ws{_fromAPIResponse({apiResponse:t,_isVertexAI:l}){const s=new ws;let r;const d=t;return l?r=SS(d):r=vS(d),Object.assign(s,r),s}}class rh{}class uh{}class ch{}class dh{}class LS{}class HS{}class GS{}class Uu{_fromAPIResponse({apiResponse:t,_isVertexAI:l}){const s=new Uu,d=xS(t);return Object.assign(s,d),s}}class BS{}class zS{}class OS{}class fh{}class qS{get text(){var t,l,s;let r="",d=!1;const m=[];for(const g of(s=(l=(t=this.serverContent)===null||t===void 0?void 0:t.modelTurn)===null||l===void 0?void 0:l.parts)!==null&&s!==void 0?s:[]){for(const[y,h]of Object.entries(g))y!=="text"&&y!=="thought"&&h!==null&&m.push(y);if(typeof g.text=="string"){if(typeof g.thought=="boolean"&&g.thought)continue;d=!0,r+=g.text}}return m.length>0&&console.warn(`there are non-text parts ${m} in the response, returning concatenation of all text parts. Please refer to the non text parts for a full response from model.`),d?r:void 0}get data(){var t,l,s;let r="";const d=[];for(const m of(s=(l=(t=this.serverContent)===null||t===void 0?void 0:t.modelTurn)===null||l===void 0?void 0:l.parts)!==null&&s!==void 0?s:[]){for(const[g,y]of Object.entries(m))g!=="inlineData"&&y!==null&&d.push(g);m.inlineData&&typeof m.inlineData.data=="string"&&(r+=atob(m.inlineData.data))}return d.length>0&&console.warn(`there are non-data parts ${d} in the response, returning concatenation of all data parts. Please refer to the non data parts for a full response from model.`),r.length>0?btoa(r):void 0}}class VS{get audioChunk(){if(this.serverContent&&this.serverContent.audioChunks&&this.serverContent.audioChunks.length>0)return this.serverContent.audioChunks[0]}}class Pu{_fromAPIResponse({apiResponse:t,_isVertexAI:l}){const s=new Pu,d=qh(t);return Object.assign(s,d),s}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Ce(o,t){if(!t||typeof t!="string")throw new Error("model is required and must be a string");if(t.includes("..")||t.includes("?")||t.includes("&"))throw new Error("invalid model parameter");if(o.isVertexAI()){if(t.startsWith("publishers/")||t.startsWith("projects/")||t.startsWith("models/"))return t;if(t.indexOf("/")>=0){const l=t.split("/",2);return`publishers/${l[0]}/models/${l[1]}`}else return`publishers/google/models/${t}`}else return t.startsWith("models/")||t.startsWith("tunedModels/")?t:`models/${t}`}function Vh(o,t){const l=Ce(o,t);return l?l.startsWith("publishers/")&&o.isVertexAI()?`projects/${o.getProject()}/locations/${o.getLocation()}/${l}`:l.startsWith("models/")&&o.isVertexAI()?`projects/${o.getProject()}/locations/${o.getLocation()}/publishers/google/${l}`:l:""}function Fh(o){return Array.isArray(o)?o.map(t=>Ds(t)):[Ds(o)]}function Ds(o){if(typeof o=="object"&&o!==null)return o;throw new Error(`Could not parse input as Blob. Unsupported blob type: ${typeof o}`)}function Yh(o){const t=Ds(o);if(t.mimeType&&t.mimeType.startsWith("image/"))return t;throw new Error(`Unsupported mime type: ${t.mimeType}`)}function Jh(o){const t=Ds(o);if(t.mimeType&&t.mimeType.startsWith("audio/"))return t;throw new Error(`Unsupported mime type: ${t.mimeType}`)}function ph(o){if(o==null)throw new Error("PartUnion is required");if(typeof o=="object")return o;if(typeof o=="string")return{text:o};throw new Error(`Unsupported part type: ${typeof o}`)}function Kh(o){if(o==null||Array.isArray(o)&&o.length===0)throw new Error("PartListUnion is required");return Array.isArray(o)?o.map(t=>ph(t)):[ph(o)]}function Tu(o){return o!=null&&typeof o=="object"&&"parts"in o&&Array.isArray(o.parts)}function mh(o){return o!=null&&typeof o=="object"&&"functionCall"in o}function hh(o){return o!=null&&typeof o=="object"&&"functionResponse"in o}function lt(o){if(o==null)throw new Error("ContentUnion is required");return Tu(o)?o:{role:"user",parts:Kh(o)}}function ku(o,t){if(!t)return[];if(o.isVertexAI()&&Array.isArray(t))return t.flatMap(l=>{const s=lt(l);return s.parts&&s.parts.length>0&&s.parts[0].text!==void 0?[s.parts[0].text]:[]});if(o.isVertexAI()){const l=lt(t);return l.parts&&l.parts.length>0&&l.parts[0].text!==void 0?[l.parts[0].text]:[]}return Array.isArray(t)?t.map(l=>lt(l)):[lt(t)]}function Ht(o){if(o==null||Array.isArray(o)&&o.length===0)throw new Error("contents are required");if(!Array.isArray(o)){if(mh(o)||hh(o))throw new Error("To specify functionCall or functionResponse parts, please wrap them in a Content object, specifying the role for them");return[lt(o)]}const t=[],l=[],s=Tu(o[0]);for(const r of o){const d=Tu(r);if(d!=s)throw new Error("Mixing Content and Parts is not supported, please group the parts into a the appropriate Content objects and specify the roles for them");if(d)t.push(r);else{if(mh(r)||hh(r))throw new Error("To specify functionCall or functionResponse parts, please wrap them, and any other parts, in Content objects as appropriate, specifying the role for them");l.push(r)}}return s||t.push({role:"user",parts:Kh(l)}),t}function FS(o,t){o.includes("null")&&(t.nullable=!0);const l=o.filter(s=>s!=="null");if(l.length===1)t.type=Object.values(qn).includes(l[0].toUpperCase())?l[0].toUpperCase():qn.TYPE_UNSPECIFIED;else{t.anyOf=[];for(const s of l)t.anyOf.push({type:Object.values(qn).includes(s.toUpperCase())?s.toUpperCase():qn.TYPE_UNSPECIFIED})}}function ei(o){const t={},l=["items"],s=["anyOf"],r=["properties"];if(o.type&&o.anyOf)throw new Error("type and anyOf cannot be both populated.");const d=o.anyOf;d!=null&&d.length==2&&(d[0].type==="null"?(t.nullable=!0,o=d[1]):d[1].type==="null"&&(t.nullable=!0,o=d[0])),o.type instanceof Array&&FS(o.type,t);for(const[m,g]of Object.entries(o))if(g!=null)if(m=="type"){if(g==="null")throw new Error("type: null can not be the only possible type for the field.");if(g instanceof Array)continue;t.type=Object.values(qn).includes(g.toUpperCase())?g.toUpperCase():qn.TYPE_UNSPECIFIED}else if(l.includes(m))t[m]=ei(g);else if(s.includes(m)){const y=[];for(const h of g){if(h.type=="null"){t.nullable=!0;continue}y.push(ei(h))}t[m]=y}else if(r.includes(m)){const y={};for(const[h,v]of Object.entries(g))y[h]=ei(v);t[m]=y}else{if(m==="additionalProperties")continue;t[m]=g}return t}function Lu(o){return ei(o)}function Hu(o){if(typeof o=="object")return o;if(typeof o=="string")return{voiceConfig:{prebuiltVoiceConfig:{voiceName:o}}};throw new Error(`Unsupported speechConfig type: ${typeof o}`)}function Gu(o){if("multiSpeakerVoiceConfig"in o)throw new Error("multiSpeakerVoiceConfig is not supported in the live API.");return o}function ni(o){if(o.functionDeclarations)for(const t of o.functionDeclarations)t.parameters&&(Object.keys(t.parameters).includes("$schema")?t.parametersJsonSchema||(t.parametersJsonSchema=t.parameters,delete t.parameters):t.parameters=ei(t.parameters)),t.response&&(Object.keys(t.response).includes("$schema")?t.responseJsonSchema||(t.responseJsonSchema=t.response,delete t.response):t.response=ei(t.response));return o}function oi(o){if(o==null)throw new Error("tools is required");if(!Array.isArray(o))throw new Error("tools is required and must be an array of Tools");const t=[];for(const l of o)t.push(l);return t}function YS(o,t,l,s=1){const r=!t.startsWith(`${l}/`)&&t.split("/").length===s;return o.isVertexAI()?t.startsWith("projects/")?t:t.startsWith("locations/")?`projects/${o.getProject()}/${t}`:t.startsWith(`${l}/`)?`projects/${o.getProject()}/locations/${o.getLocation()}/${t}`:r?`projects/${o.getProject()}/locations/${o.getLocation()}/${l}/${t}`:t:r?`${l}/${t}`:t}function gn(o,t){if(typeof t!="string")throw new Error("name must be a string");return YS(o,t,"cachedContents")}function Xh(o){switch(o){case"STATE_UNSPECIFIED":return"JOB_STATE_UNSPECIFIED";case"CREATING":return"JOB_STATE_RUNNING";case"ACTIVE":return"JOB_STATE_SUCCEEDED";case"FAILED":return"JOB_STATE_FAILED";default:return o}}function Vn(o){return Du(o)}function JS(o){return o!=null&&typeof o=="object"&&"name"in o}function KS(o){return o!=null&&typeof o=="object"&&"video"in o}function XS(o){return o!=null&&typeof o=="object"&&"uri"in o}function Qh(o){var t;let l;if(JS(o)&&(l=o.name),!(XS(o)&&(l=o.uri,l===void 0))&&!(KS(o)&&(l=(t=o.video)===null||t===void 0?void 0:t.uri,l===void 0))){if(typeof o=="string"&&(l=o),l===void 0)throw new Error("Could not extract file name from the provided input.");if(l.startsWith("https://")){const r=l.split("files/")[1].match(/[a-z0-9]+/);if(r===null)throw new Error(`Could not extract file name from URI ${l}`);l=r[0]}else l.startsWith("files/")&&(l=l.split("files/")[1]);return l}}function Wh(o,t){let l;return o.isVertexAI()?l=t?"publishers/google/models":"models":l=t?"models":"tunedModels",l}function Zh(o){for(const t of["models","tunedModels","publisherModels"])if(QS(o,t))return o[t];return[]}function QS(o,t){return o!==null&&typeof o=="object"&&t in o}function WS(o,t={}){const l=o,s={name:l.name,description:l.description,parametersJsonSchema:l.inputSchema};return l.outputSchema&&(s.responseJsonSchema=l.outputSchema),t.behavior&&(s.behavior=t.behavior),{functionDeclarations:[s]}}function ZS(o,t={}){const l=[],s=new Set;for(const r of o){const d=r.name;if(s.has(d))throw new Error(`Duplicate function name ${d} found in MCP tools. Please ensure function names are unique.`);s.add(d);const m=WS(r,t);m.functionDeclarations&&l.push(...m.functionDeclarations)}return{functionDeclarations:l}}function $h(o,t){let l;if(typeof t=="string")if(o.isVertexAI())if(t.startsWith("gs://"))l={format:"jsonl",gcsUri:[t]};else if(t.startsWith("bq://"))l={format:"bigquery",bigqueryUri:t};else throw new Error(`Unsupported string source for Vertex AI: ${t}`);else if(t.startsWith("files/"))l={fileName:t};else throw new Error(`Unsupported string source for Gemini API: ${t}`);else if(Array.isArray(t)){if(o.isVertexAI())throw new Error("InlinedRequest[] is not supported in Vertex AI.");l={inlinedRequests:t}}else l=t;const s=[l.gcsUri,l.bigqueryUri].filter(Boolean).length,r=[l.inlinedRequests,l.fileName].filter(Boolean).length;if(o.isVertexAI()){if(r>0||s!==1)throw new Error("Exactly one of `gcsUri` or `bigqueryUri` must be set for Vertex AI.")}else if(s>0||r!==1)throw new Error("Exactly one of `inlinedRequests`, `fileName`, must be set for Gemini API.");return l}function $S(o){if(typeof o!="string")return o;const t=o;if(t.startsWith("gs://"))return{format:"jsonl",gcsUri:t};if(t.startsWith("bq://"))return{format:"bigquery",bigqueryUri:t};throw new Error(`Unsupported destination: ${t}`)}function jh(o){if(typeof o!="object"||o===null)return{};const t=o,l=t.inlinedResponses;if(typeof l!="object"||l===null)return o;const r=l.inlinedResponses;if(!Array.isArray(r)||r.length===0)return o;let d=!1;for(const m of r){if(typeof m!="object"||m===null)continue;const y=m.response;if(typeof y!="object"||y===null)continue;if(y.embedding!==void 0){d=!0;break}}return d&&(t.inlinedEmbedContentResponses=t.inlinedResponses,delete t.inlinedResponses),o}function ii(o,t){const l=t;if(!o.isVertexAI()){if(/batches\/[^/]+$/.test(l))return l.split("/").pop();throw new Error(`Invalid batch job name: ${l}.`)}if(/^projects\/[^/]+\/locations\/[^/]+\/batchPredictionJobs\/[^/]+$/.test(l))return l.split("/").pop();if(/^\d+$/.test(l))return l;throw new Error(`Invalid batch job name: ${l}.`)}function eg(o){const t=o;return t==="BATCH_STATE_UNSPECIFIED"?"JOB_STATE_UNSPECIFIED":t==="BATCH_STATE_PENDING"?"JOB_STATE_PENDING":t==="BATCH_STATE_RUNNING"?"JOB_STATE_RUNNING":t==="BATCH_STATE_SUCCEEDED"?"JOB_STATE_SUCCEEDED":t==="BATCH_STATE_FAILED"?"JOB_STATE_FAILED":t==="BATCH_STATE_CANCELLED"?"JOB_STATE_CANCELLED":t==="BATCH_STATE_EXPIRED"?"JOB_STATE_EXPIRED":t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function jS(o){const t={},l=u(o,["responsesFile"]);l!=null&&c(t,["fileName"],l);const s=u(o,["inlinedResponses","inlinedResponses"]);if(s!=null){let d=s;Array.isArray(d)&&(d=d.map(m=>UT(m))),c(t,["inlinedResponses"],d)}const r=u(o,["inlinedEmbedContentResponses","inlinedResponses"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["inlinedEmbedContentResponses"],d)}return t}function eT(o){const t={},l=u(o,["predictionsFormat"]);l!=null&&c(t,["format"],l);const s=u(o,["gcsDestination","outputUriPrefix"]);s!=null&&c(t,["gcsUri"],s);const r=u(o,["bigqueryDestination","outputUri"]);return r!=null&&c(t,["bigqueryUri"],r),t}function tT(o){const t={},l=u(o,["format"]);l!=null&&c(t,["predictionsFormat"],l);const s=u(o,["gcsUri"]);s!=null&&c(t,["gcsDestination","outputUriPrefix"],s);const r=u(o,["bigqueryUri"]);if(r!=null&&c(t,["bigqueryDestination","outputUri"],r),u(o,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(u(o,["inlinedResponses"])!==void 0)throw new Error("inlinedResponses parameter is not supported in Vertex AI.");if(u(o,["inlinedEmbedContentResponses"])!==void 0)throw new Error("inlinedEmbedContentResponses parameter is not supported in Vertex AI.");return t}function Ns(o){const t={},l=u(o,["name"]);l!=null&&c(t,["name"],l);const s=u(o,["metadata","displayName"]);s!=null&&c(t,["displayName"],s);const r=u(o,["metadata","state"]);r!=null&&c(t,["state"],eg(r));const d=u(o,["metadata","createTime"]);d!=null&&c(t,["createTime"],d);const m=u(o,["metadata","endTime"]);m!=null&&c(t,["endTime"],m);const g=u(o,["metadata","updateTime"]);g!=null&&c(t,["updateTime"],g);const y=u(o,["metadata","model"]);y!=null&&c(t,["model"],y);const h=u(o,["metadata","output"]);return h!=null&&c(t,["dest"],jS(jh(h))),t}function Eu(o){const t={},l=u(o,["name"]);l!=null&&c(t,["name"],l);const s=u(o,["displayName"]);s!=null&&c(t,["displayName"],s);const r=u(o,["state"]);r!=null&&c(t,["state"],eg(r));const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["createTime"]);m!=null&&c(t,["createTime"],m);const g=u(o,["startTime"]);g!=null&&c(t,["startTime"],g);const y=u(o,["endTime"]);y!=null&&c(t,["endTime"],y);const h=u(o,["updateTime"]);h!=null&&c(t,["updateTime"],h);const v=u(o,["model"]);v!=null&&c(t,["model"],v);const T=u(o,["inputConfig"]);T!=null&&c(t,["src"],nT(T));const E=u(o,["outputConfig"]);E!=null&&c(t,["dest"],eT(jh(E)));const _=u(o,["completionStats"]);return _!=null&&c(t,["completionStats"],_),t}function nT(o){const t={},l=u(o,["instancesFormat"]);l!=null&&c(t,["format"],l);const s=u(o,["gcsSource","uris"]);s!=null&&c(t,["gcsUri"],s);const r=u(o,["bigquerySource","inputUri"]);return r!=null&&c(t,["bigqueryUri"],r),t}function oT(o,t){const l={};if(u(t,["format"])!==void 0)throw new Error("format parameter is not supported in Gemini API.");if(u(t,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(u(t,["bigqueryUri"])!==void 0)throw new Error("bigqueryUri parameter is not supported in Gemini API.");const s=u(t,["fileName"]);s!=null&&c(l,["fileName"],s);const r=u(t,["inlinedRequests"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>DT(o,m))),c(l,["requests","requests"],d)}return l}function iT(o){const t={},l=u(o,["format"]);l!=null&&c(t,["instancesFormat"],l);const s=u(o,["gcsUri"]);s!=null&&c(t,["gcsSource","uris"],s);const r=u(o,["bigqueryUri"]);if(r!=null&&c(t,["bigquerySource","inputUri"],r),u(o,["fileName"])!==void 0)throw new Error("fileName parameter is not supported in Vertex AI.");if(u(o,["inlinedRequests"])!==void 0)throw new Error("inlinedRequests parameter is not supported in Vertex AI.");return t}function lT(o){const t={},l=u(o,["data"]);if(l!=null&&c(t,["data"],l),u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const s=u(o,["mimeType"]);return s!=null&&c(t,["mimeType"],s),t}function sT(o,t){const l={},s=u(t,["name"]);return s!=null&&c(l,["_url","name"],ii(o,s)),l}function aT(o,t){const l={},s=u(t,["name"]);return s!=null&&c(l,["_url","name"],ii(o,s)),l}function rT(o){const t={},l=u(o,["content"]);l!=null&&c(t,["content"],l);const s=u(o,["citationMetadata"]);s!=null&&c(t,["citationMetadata"],uT(s));const r=u(o,["tokenCount"]);r!=null&&c(t,["tokenCount"],r);const d=u(o,["finishReason"]);d!=null&&c(t,["finishReason"],d);const m=u(o,["avgLogprobs"]);m!=null&&c(t,["avgLogprobs"],m);const g=u(o,["groundingMetadata"]);g!=null&&c(t,["groundingMetadata"],g);const y=u(o,["index"]);y!=null&&c(t,["index"],y);const h=u(o,["logprobsResult"]);h!=null&&c(t,["logprobsResult"],h);const v=u(o,["safetyRatings"]);if(v!=null){let E=v;Array.isArray(E)&&(E=E.map(_=>_)),c(t,["safetyRatings"],E)}const T=u(o,["urlContextMetadata"]);return T!=null&&c(t,["urlContextMetadata"],T),t}function uT(o){const t={},l=u(o,["citationSources"]);if(l!=null){let s=l;Array.isArray(s)&&(s=s.map(r=>r)),c(t,["citations"],s)}return t}function tg(o){const t={},l=u(o,["parts"]);if(l!=null){let r=l;Array.isArray(r)&&(r=r.map(d=>zT(d))),c(t,["parts"],r)}const s=u(o,["role"]);return s!=null&&c(t,["role"],s),t}function cT(o,t){const l={},s=u(o,["displayName"]);if(t!==void 0&&s!=null&&c(t,["batch","displayName"],s),u(o,["dest"])!==void 0)throw new Error("dest parameter is not supported in Gemini API.");return l}function dT(o,t){const l={},s=u(o,["displayName"]);t!==void 0&&s!=null&&c(t,["displayName"],s);const r=u(o,["dest"]);return t!==void 0&&r!=null&&c(t,["outputConfig"],tT($S(r))),l}function gh(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["_url","model"],Ce(o,s));const r=u(t,["src"]);r!=null&&c(l,["batch","inputConfig"],oT(o,$h(o,r)));const d=u(t,["config"]);return d!=null&&cT(d,l),l}function fT(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["model"],Ce(o,s));const r=u(t,["src"]);r!=null&&c(l,["inputConfig"],iT($h(o,r)));const d=u(t,["config"]);return d!=null&&dT(d,l),l}function pT(o,t){const l={},s=u(o,["displayName"]);return t!==void 0&&s!=null&&c(t,["batch","displayName"],s),l}function mT(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["_url","model"],Ce(o,s));const r=u(t,["src"]);r!=null&&c(l,["batch","inputConfig"],ET(o,r));const d=u(t,["config"]);return d!=null&&pT(d,l),l}function hT(o,t){const l={},s=u(t,["name"]);return s!=null&&c(l,["_url","name"],ii(o,s)),l}function gT(o,t){const l={},s=u(t,["name"]);return s!=null&&c(l,["_url","name"],ii(o,s)),l}function yT(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["name"]);s!=null&&c(t,["name"],s);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);return d!=null&&c(t,["error"],d),t}function vT(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["name"]);s!=null&&c(t,["name"],s);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);return d!=null&&c(t,["error"],d),t}function ST(o,t){const l={},s=u(t,["contents"]);if(s!=null){let d=ku(o,s);Array.isArray(d)&&(d=d.map(m=>m)),c(l,["requests[]","request","content"],d)}const r=u(t,["config"]);return r!=null&&(c(l,["_self"],TT(r,l)),gS(l,{"requests[].*":"requests[].request.*"})),l}function TT(o,t){const l={},s=u(o,["taskType"]);t!==void 0&&s!=null&&c(t,["requests[]","taskType"],s);const r=u(o,["title"]);t!==void 0&&r!=null&&c(t,["requests[]","title"],r);const d=u(o,["outputDimensionality"]);if(t!==void 0&&d!=null&&c(t,["requests[]","outputDimensionality"],d),u(o,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(u(o,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return l}function ET(o,t){const l={},s=u(t,["fileName"]);s!=null&&c(l,["file_name"],s);const r=u(t,["inlinedRequests"]);return r!=null&&c(l,["requests"],ST(o,r)),l}function CT(o){const t={};if(u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const l=u(o,["fileUri"]);l!=null&&c(t,["fileUri"],l);const s=u(o,["mimeType"]);return s!=null&&c(t,["mimeType"],s),t}function _T(o){const t={},l=u(o,["id"]);l!=null&&c(t,["id"],l);const s=u(o,["args"]);s!=null&&c(t,["args"],s);const r=u(o,["name"]);if(r!=null&&c(t,["name"],r),u(o,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(o,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function AT(o){const t={},l=u(o,["mode"]);l!=null&&c(t,["mode"],l);const s=u(o,["allowedFunctionNames"]);if(s!=null&&c(t,["allowedFunctionNames"],s),u(o,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return t}function bT(o,t,l){const s={},r=u(t,["systemInstruction"]);l!==void 0&&r!=null&&c(l,["systemInstruction"],tg(lt(r)));const d=u(t,["temperature"]);d!=null&&c(s,["temperature"],d);const m=u(t,["topP"]);m!=null&&c(s,["topP"],m);const g=u(t,["topK"]);g!=null&&c(s,["topK"],g);const y=u(t,["candidateCount"]);y!=null&&c(s,["candidateCount"],y);const h=u(t,["maxOutputTokens"]);h!=null&&c(s,["maxOutputTokens"],h);const v=u(t,["stopSequences"]);v!=null&&c(s,["stopSequences"],v);const T=u(t,["responseLogprobs"]);T!=null&&c(s,["responseLogprobs"],T);const E=u(t,["logprobs"]);E!=null&&c(s,["logprobs"],E);const _=u(t,["presencePenalty"]);_!=null&&c(s,["presencePenalty"],_);const k=u(t,["frequencyPenalty"]);k!=null&&c(s,["frequencyPenalty"],k);const M=u(t,["seed"]);M!=null&&c(s,["seed"],M);const I=u(t,["responseMimeType"]);I!=null&&c(s,["responseMimeType"],I);const U=u(t,["responseSchema"]);U!=null&&c(s,["responseSchema"],Lu(U));const V=u(t,["responseJsonSchema"]);if(V!=null&&c(s,["responseJsonSchema"],V),u(t,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(u(t,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const B=u(t,["safetySettings"]);if(l!==void 0&&B!=null){let Se=B;Array.isArray(Se)&&(Se=Se.map(Ge=>OT(Ge))),c(l,["safetySettings"],Se)}const K=u(t,["tools"]);if(l!==void 0&&K!=null){let Se=oi(K);Array.isArray(Se)&&(Se=Se.map(Ge=>VT(ni(Ge)))),c(l,["tools"],Se)}const $=u(t,["toolConfig"]);if(l!==void 0&&$!=null&&c(l,["toolConfig"],qT($)),u(t,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const ee=u(t,["cachedContent"]);l!==void 0&&ee!=null&&c(l,["cachedContent"],gn(o,ee));const J=u(t,["responseModalities"]);J!=null&&c(s,["responseModalities"],J);const Q=u(t,["mediaResolution"]);Q!=null&&c(s,["mediaResolution"],Q);const F=u(t,["speechConfig"]);if(F!=null&&c(s,["speechConfig"],Hu(F)),u(t,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const Y=u(t,["thinkingConfig"]);Y!=null&&c(s,["thinkingConfig"],Y);const oe=u(t,["imageConfig"]);oe!=null&&c(s,["imageConfig"],wT(oe));const ue=u(t,["enableEnhancedCivicAnswers"]);return ue!=null&&c(s,["enableEnhancedCivicAnswers"],ue),s}function xT(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["candidates"]);if(s!=null){let y=s;Array.isArray(y)&&(y=y.map(h=>rT(h))),c(t,["candidates"],y)}const r=u(o,["modelVersion"]);r!=null&&c(t,["modelVersion"],r);const d=u(o,["promptFeedback"]);d!=null&&c(t,["promptFeedback"],d);const m=u(o,["responseId"]);m!=null&&c(t,["responseId"],m);const g=u(o,["usageMetadata"]);return g!=null&&c(t,["usageMetadata"],g),t}function RT(o,t){const l={},s=u(t,["name"]);return s!=null&&c(l,["_url","name"],ii(o,s)),l}function NT(o,t){const l={},s=u(t,["name"]);return s!=null&&c(l,["_url","name"],ii(o,s)),l}function IT(o){const t={};if(u(o,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const l=u(o,["enableWidget"]);return l!=null&&c(t,["enableWidget"],l),t}function MT(o){const t={};if(u(o,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(u(o,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const l=u(o,["timeRangeFilter"]);return l!=null&&c(t,["timeRangeFilter"],l),t}function wT(o){const t={},l=u(o,["aspectRatio"]);l!=null&&c(t,["aspectRatio"],l);const s=u(o,["imageSize"]);if(s!=null&&c(t,["imageSize"],s),u(o,["outputMimeType"])!==void 0)throw new Error("outputMimeType parameter is not supported in Gemini API.");if(u(o,["outputCompressionQuality"])!==void 0)throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");return t}function DT(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["request","model"],Ce(o,s));const r=u(t,["contents"]);if(r!=null){let g=Ht(r);Array.isArray(g)&&(g=g.map(y=>tg(y))),c(l,["request","contents"],g)}const d=u(t,["metadata"]);d!=null&&c(l,["metadata"],d);const m=u(t,["config"]);return m!=null&&c(l,["request","generationConfig"],bT(o,m,u(l,["request"],{}))),l}function UT(o){const t={},l=u(o,["response"]);l!=null&&c(t,["response"],xT(l));const s=u(o,["error"]);return s!=null&&c(t,["error"],s),t}function PT(o,t){const l={},s=u(o,["pageSize"]);t!==void 0&&s!=null&&c(t,["_query","pageSize"],s);const r=u(o,["pageToken"]);if(t!==void 0&&r!=null&&c(t,["_query","pageToken"],r),u(o,["filter"])!==void 0)throw new Error("filter parameter is not supported in Gemini API.");return l}function kT(o,t){const l={},s=u(o,["pageSize"]);t!==void 0&&s!=null&&c(t,["_query","pageSize"],s);const r=u(o,["pageToken"]);t!==void 0&&r!=null&&c(t,["_query","pageToken"],r);const d=u(o,["filter"]);return t!==void 0&&d!=null&&c(t,["_query","filter"],d),l}function LT(o){const t={},l=u(o,["config"]);return l!=null&&PT(l,t),t}function HT(o){const t={},l=u(o,["config"]);return l!=null&&kT(l,t),t}function GT(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["nextPageToken"]);s!=null&&c(t,["nextPageToken"],s);const r=u(o,["operations"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>Ns(m))),c(t,["batchJobs"],d)}return t}function BT(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["nextPageToken"]);s!=null&&c(t,["nextPageToken"],s);const r=u(o,["batchPredictionJobs"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>Eu(m))),c(t,["batchJobs"],d)}return t}function zT(o){const t={},l=u(o,["mediaResolution"]);l!=null&&c(t,["mediaResolution"],l);const s=u(o,["codeExecutionResult"]);s!=null&&c(t,["codeExecutionResult"],s);const r=u(o,["executableCode"]);r!=null&&c(t,["executableCode"],r);const d=u(o,["fileData"]);d!=null&&c(t,["fileData"],CT(d));const m=u(o,["functionCall"]);m!=null&&c(t,["functionCall"],_T(m));const g=u(o,["functionResponse"]);g!=null&&c(t,["functionResponse"],g);const y=u(o,["inlineData"]);y!=null&&c(t,["inlineData"],lT(y));const h=u(o,["text"]);h!=null&&c(t,["text"],h);const v=u(o,["thought"]);v!=null&&c(t,["thought"],v);const T=u(o,["thoughtSignature"]);T!=null&&c(t,["thoughtSignature"],T);const E=u(o,["videoMetadata"]);return E!=null&&c(t,["videoMetadata"],E),t}function OT(o){const t={},l=u(o,["category"]);if(l!=null&&c(t,["category"],l),u(o,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const s=u(o,["threshold"]);return s!=null&&c(t,["threshold"],s),t}function qT(o){const t={},l=u(o,["functionCallingConfig"]);l!=null&&c(t,["functionCallingConfig"],AT(l));const s=u(o,["retrievalConfig"]);return s!=null&&c(t,["retrievalConfig"],s),t}function VT(o){const t={},l=u(o,["functionDeclarations"]);if(l!=null){let v=l;Array.isArray(v)&&(v=v.map(T=>T)),c(t,["functionDeclarations"],v)}if(u(o,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const s=u(o,["googleSearchRetrieval"]);s!=null&&c(t,["googleSearchRetrieval"],s);const r=u(o,["computerUse"]);r!=null&&c(t,["computerUse"],r);const d=u(o,["fileSearch"]);d!=null&&c(t,["fileSearch"],d);const m=u(o,["codeExecution"]);if(m!=null&&c(t,["codeExecution"],m),u(o,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const g=u(o,["googleMaps"]);g!=null&&c(t,["googleMaps"],IT(g));const y=u(o,["googleSearch"]);y!=null&&c(t,["googleSearch"],MT(y));const h=u(o,["urlContext"]);return h!=null&&c(t,["urlContext"],h),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var mn;(function(o){o.PAGED_ITEM_BATCH_JOBS="batchJobs",o.PAGED_ITEM_MODELS="models",o.PAGED_ITEM_TUNING_JOBS="tuningJobs",o.PAGED_ITEM_FILES="files",o.PAGED_ITEM_CACHED_CONTENTS="cachedContents",o.PAGED_ITEM_FILE_SEARCH_STORES="fileSearchStores",o.PAGED_ITEM_DOCUMENTS="documents"})(mn||(mn={}));class co{constructor(t,l,s,r){this.pageInternal=[],this.paramsInternal={},this.requestInternal=l,this.init(t,s,r)}init(t,l,s){var r,d;this.nameInternal=t,this.pageInternal=l[this.nameInternal]||[],this.sdkHttpResponseInternal=l==null?void 0:l.sdkHttpResponse,this.idxInternal=0;let m={config:{}};!s||Object.keys(s).length===0?m={config:{}}:typeof s=="object"?m=Object.assign({},s):m=s,m.config&&(m.config.pageToken=l.nextPageToken),this.paramsInternal=m,this.pageInternalSize=(d=(r=m.config)===null||r===void 0?void 0:r.pageSize)!==null&&d!==void 0?d:this.pageInternal.length}initNextPage(t){this.init(this.nameInternal,t,this.paramsInternal)}get page(){return this.pageInternal}get name(){return this.nameInternal}get pageSize(){return this.pageInternalSize}get sdkHttpResponse(){return this.sdkHttpResponseInternal}get params(){return this.paramsInternal}get pageLength(){return this.pageInternal.length}getItem(t){return this.pageInternal[t]}[Symbol.asyncIterator](){return{next:async()=>{if(this.idxInternal>=this.pageLength)if(this.hasNextPage())await this.nextPage();else return{value:void 0,done:!0};const t=this.getItem(this.idxInternal);return this.idxInternal+=1,{value:t,done:!1}},return:async()=>({value:void 0,done:!0})}}async nextPage(){if(!this.hasNextPage())throw new Error("No more pages to fetch.");const t=await this.requestInternal(this.params);return this.initNextPage(t),this.page}hasNextPage(){var t;return((t=this.params.config)===null||t===void 0?void 0:t.pageToken)!==void 0}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class FT extends hn{constructor(t){super(),this.apiClient=t,this.list=async(l={})=>new co(mn.PAGED_ITEM_BATCH_JOBS,s=>this.listInternal(s),await this.listInternal(l),l),this.create=async l=>(this.apiClient.isVertexAI()&&(l.config=this.formatDestination(l.src,l.config)),this.createInternal(l)),this.createEmbeddings=async l=>{if(console.warn("batches.createEmbeddings() is experimental and may change without notice."),this.apiClient.isVertexAI())throw new Error("Vertex AI does not support batches.createEmbeddings.");return this.createEmbeddingsInternal(l)}}createInlinedGenerateContentRequest(t){const l=gh(this.apiClient,t),s=l._url,r=Z("{model}:batchGenerateContent",s),g=l.batch.inputConfig.requests,y=g.requests,h=[];for(const v of y){const T=Object.assign({},v);if(T.systemInstruction){const E=T.systemInstruction;delete T.systemInstruction;const _=T.request;_.systemInstruction=E,T.request=_}h.push(T)}return g.requests=h,delete l.config,delete l._url,delete l._query,{path:r,body:l}}getGcsUri(t){if(typeof t=="string")return t.startsWith("gs://")?t:void 0;if(!Array.isArray(t)&&t.gcsUri&&t.gcsUri.length>0)return t.gcsUri[0]}getBigqueryUri(t){if(typeof t=="string")return t.startsWith("bq://")?t:void 0;if(!Array.isArray(t))return t.bigqueryUri}formatDestination(t,l){const s=l?Object.assign({},l):{},r=Date.now().toString();if(s.displayName||(s.displayName=`genaiBatchJob_${r}`),s.dest===void 0){const d=this.getGcsUri(t),m=this.getBigqueryUri(t);if(d)d.endsWith(".jsonl")?s.dest=`${d.slice(0,-6)}/dest`:s.dest=`${d}_dest_${r}`;else if(m)s.dest=`${m}_dest_${r}`;else throw new Error("Unsupported source for Vertex AI: No GCS or BigQuery URI found.")}return s}async createInternal(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=fT(this.apiClient,t);return g=Z("batchPredictionJobs",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json()),m.then(v=>Eu(v))}else{const h=gh(this.apiClient,t);return g=Z("{model}:batchGenerateContent",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>Ns(v))}}async createEmbeddingsInternal(t){var l,s;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=mT(this.apiClient,t);return d=Z("{model}:asyncBatchEmbedContent",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(y=>y.json()),r.then(y=>Ns(y))}}async get(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=NT(this.apiClient,t);return g=Z("batchPredictionJobs/{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json()),m.then(v=>Eu(v))}else{const h=RT(this.apiClient,t);return g=Z("batches/{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>Ns(v))}}async cancel(t){var l,s,r,d;let m="",g={};if(this.apiClient.isVertexAI()){const y=aT(this.apiClient,t);m=Z("batchPredictionJobs/{name}:cancel",y._url),g=y._query,delete y._url,delete y._query,await this.apiClient.request({path:m,queryParams:g,body:JSON.stringify(y),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal})}else{const y=sT(this.apiClient,t);m=Z("batches/{name}:cancel",y._url),g=y._query,delete y._url,delete y._query,await this.apiClient.request({path:m,queryParams:g,body:JSON.stringify(y),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal})}}async listInternal(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=HT(t);return g=Z("batchPredictionJobs",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=BT(v),E=new fh;return Object.assign(E,T),E})}else{const h=LT(t);return g=Z("batches",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=GT(v),E=new fh;return Object.assign(E,T),E})}}async delete(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=gT(this.apiClient,t);return g=Z("batchPredictionJobs/{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>vT(v))}else{const h=hT(this.apiClient,t);return g=Z("batches/{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>yT(v))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function YT(o){const t={},l=u(o,["data"]);if(l!=null&&c(t,["data"],l),u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const s=u(o,["mimeType"]);return s!=null&&c(t,["mimeType"],s),t}function yh(o){const t={},l=u(o,["parts"]);if(l!=null){let r=l;Array.isArray(r)&&(r=r.map(d=>mE(d))),c(t,["parts"],r)}const s=u(o,["role"]);return s!=null&&c(t,["role"],s),t}function JT(o,t){const l={},s=u(o,["ttl"]);t!==void 0&&s!=null&&c(t,["ttl"],s);const r=u(o,["expireTime"]);t!==void 0&&r!=null&&c(t,["expireTime"],r);const d=u(o,["displayName"]);t!==void 0&&d!=null&&c(t,["displayName"],d);const m=u(o,["contents"]);if(t!==void 0&&m!=null){let v=Ht(m);Array.isArray(v)&&(v=v.map(T=>yh(T))),c(t,["contents"],v)}const g=u(o,["systemInstruction"]);t!==void 0&&g!=null&&c(t,["systemInstruction"],yh(lt(g)));const y=u(o,["tools"]);if(t!==void 0&&y!=null){let v=y;Array.isArray(v)&&(v=v.map(T=>gE(T))),c(t,["tools"],v)}const h=u(o,["toolConfig"]);if(t!==void 0&&h!=null&&c(t,["toolConfig"],hE(h)),u(o,["kmsKeyName"])!==void 0)throw new Error("kmsKeyName parameter is not supported in Gemini API.");return l}function KT(o,t){const l={},s=u(o,["ttl"]);t!==void 0&&s!=null&&c(t,["ttl"],s);const r=u(o,["expireTime"]);t!==void 0&&r!=null&&c(t,["expireTime"],r);const d=u(o,["displayName"]);t!==void 0&&d!=null&&c(t,["displayName"],d);const m=u(o,["contents"]);if(t!==void 0&&m!=null){let T=Ht(m);Array.isArray(T)&&(T=T.map(E=>E)),c(t,["contents"],T)}const g=u(o,["systemInstruction"]);t!==void 0&&g!=null&&c(t,["systemInstruction"],lt(g));const y=u(o,["tools"]);if(t!==void 0&&y!=null){let T=y;Array.isArray(T)&&(T=T.map(E=>yE(E))),c(t,["tools"],T)}const h=u(o,["toolConfig"]);t!==void 0&&h!=null&&c(t,["toolConfig"],h);const v=u(o,["kmsKeyName"]);return t!==void 0&&v!=null&&c(t,["encryption_spec","kmsKeyName"],v),l}function XT(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["model"],Vh(o,s));const r=u(t,["config"]);return r!=null&&JT(r,l),l}function QT(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["model"],Vh(o,s));const r=u(t,["config"]);return r!=null&&KT(r,l),l}function WT(o,t){const l={},s=u(t,["name"]);return s!=null&&c(l,["_url","name"],gn(o,s)),l}function ZT(o,t){const l={},s=u(t,["name"]);return s!=null&&c(l,["_url","name"],gn(o,s)),l}function $T(o){const t={},l=u(o,["sdkHttpResponse"]);return l!=null&&c(t,["sdkHttpResponse"],l),t}function jT(o){const t={},l=u(o,["sdkHttpResponse"]);return l!=null&&c(t,["sdkHttpResponse"],l),t}function eE(o){const t={};if(u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const l=u(o,["fileUri"]);l!=null&&c(t,["fileUri"],l);const s=u(o,["mimeType"]);return s!=null&&c(t,["mimeType"],s),t}function tE(o){const t={},l=u(o,["id"]);l!=null&&c(t,["id"],l);const s=u(o,["args"]);s!=null&&c(t,["args"],s);const r=u(o,["name"]);if(r!=null&&c(t,["name"],r),u(o,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(o,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function nE(o){const t={},l=u(o,["mode"]);l!=null&&c(t,["mode"],l);const s=u(o,["allowedFunctionNames"]);if(s!=null&&c(t,["allowedFunctionNames"],s),u(o,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return t}function oE(o){const t={};if(u(o,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");const l=u(o,["description"]);l!=null&&c(t,["description"],l);const s=u(o,["name"]);s!=null&&c(t,["name"],s);const r=u(o,["parameters"]);r!=null&&c(t,["parameters"],r);const d=u(o,["parametersJsonSchema"]);d!=null&&c(t,["parametersJsonSchema"],d);const m=u(o,["response"]);m!=null&&c(t,["response"],m);const g=u(o,["responseJsonSchema"]);return g!=null&&c(t,["responseJsonSchema"],g),t}function iE(o,t){const l={},s=u(t,["name"]);return s!=null&&c(l,["_url","name"],gn(o,s)),l}function lE(o,t){const l={},s=u(t,["name"]);return s!=null&&c(l,["_url","name"],gn(o,s)),l}function sE(o){const t={};if(u(o,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const l=u(o,["enableWidget"]);return l!=null&&c(t,["enableWidget"],l),t}function aE(o){const t={};if(u(o,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(u(o,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const l=u(o,["timeRangeFilter"]);return l!=null&&c(t,["timeRangeFilter"],l),t}function rE(o,t){const l={},s=u(o,["pageSize"]);t!==void 0&&s!=null&&c(t,["_query","pageSize"],s);const r=u(o,["pageToken"]);return t!==void 0&&r!=null&&c(t,["_query","pageToken"],r),l}function uE(o,t){const l={},s=u(o,["pageSize"]);t!==void 0&&s!=null&&c(t,["_query","pageSize"],s);const r=u(o,["pageToken"]);return t!==void 0&&r!=null&&c(t,["_query","pageToken"],r),l}function cE(o){const t={},l=u(o,["config"]);return l!=null&&rE(l,t),t}function dE(o){const t={},l=u(o,["config"]);return l!=null&&uE(l,t),t}function fE(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["nextPageToken"]);s!=null&&c(t,["nextPageToken"],s);const r=u(o,["cachedContents"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["cachedContents"],d)}return t}function pE(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["nextPageToken"]);s!=null&&c(t,["nextPageToken"],s);const r=u(o,["cachedContents"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["cachedContents"],d)}return t}function mE(o){const t={},l=u(o,["mediaResolution"]);l!=null&&c(t,["mediaResolution"],l);const s=u(o,["codeExecutionResult"]);s!=null&&c(t,["codeExecutionResult"],s);const r=u(o,["executableCode"]);r!=null&&c(t,["executableCode"],r);const d=u(o,["fileData"]);d!=null&&c(t,["fileData"],eE(d));const m=u(o,["functionCall"]);m!=null&&c(t,["functionCall"],tE(m));const g=u(o,["functionResponse"]);g!=null&&c(t,["functionResponse"],g);const y=u(o,["inlineData"]);y!=null&&c(t,["inlineData"],YT(y));const h=u(o,["text"]);h!=null&&c(t,["text"],h);const v=u(o,["thought"]);v!=null&&c(t,["thought"],v);const T=u(o,["thoughtSignature"]);T!=null&&c(t,["thoughtSignature"],T);const E=u(o,["videoMetadata"]);return E!=null&&c(t,["videoMetadata"],E),t}function hE(o){const t={},l=u(o,["functionCallingConfig"]);l!=null&&c(t,["functionCallingConfig"],nE(l));const s=u(o,["retrievalConfig"]);return s!=null&&c(t,["retrievalConfig"],s),t}function gE(o){const t={},l=u(o,["functionDeclarations"]);if(l!=null){let v=l;Array.isArray(v)&&(v=v.map(T=>T)),c(t,["functionDeclarations"],v)}if(u(o,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const s=u(o,["googleSearchRetrieval"]);s!=null&&c(t,["googleSearchRetrieval"],s);const r=u(o,["computerUse"]);r!=null&&c(t,["computerUse"],r);const d=u(o,["fileSearch"]);d!=null&&c(t,["fileSearch"],d);const m=u(o,["codeExecution"]);if(m!=null&&c(t,["codeExecution"],m),u(o,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const g=u(o,["googleMaps"]);g!=null&&c(t,["googleMaps"],sE(g));const y=u(o,["googleSearch"]);y!=null&&c(t,["googleSearch"],aE(y));const h=u(o,["urlContext"]);return h!=null&&c(t,["urlContext"],h),t}function yE(o){const t={},l=u(o,["functionDeclarations"]);if(l!=null){let T=l;Array.isArray(T)&&(T=T.map(E=>oE(E))),c(t,["functionDeclarations"],T)}const s=u(o,["retrieval"]);s!=null&&c(t,["retrieval"],s);const r=u(o,["googleSearchRetrieval"]);r!=null&&c(t,["googleSearchRetrieval"],r);const d=u(o,["computerUse"]);if(d!=null&&c(t,["computerUse"],d),u(o,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const m=u(o,["codeExecution"]);m!=null&&c(t,["codeExecution"],m);const g=u(o,["enterpriseWebSearch"]);g!=null&&c(t,["enterpriseWebSearch"],g);const y=u(o,["googleMaps"]);y!=null&&c(t,["googleMaps"],y);const h=u(o,["googleSearch"]);h!=null&&c(t,["googleSearch"],h);const v=u(o,["urlContext"]);return v!=null&&c(t,["urlContext"],v),t}function vE(o,t){const l={},s=u(o,["ttl"]);t!==void 0&&s!=null&&c(t,["ttl"],s);const r=u(o,["expireTime"]);return t!==void 0&&r!=null&&c(t,["expireTime"],r),l}function SE(o,t){const l={},s=u(o,["ttl"]);t!==void 0&&s!=null&&c(t,["ttl"],s);const r=u(o,["expireTime"]);return t!==void 0&&r!=null&&c(t,["expireTime"],r),l}function TE(o,t){const l={},s=u(t,["name"]);s!=null&&c(l,["_url","name"],gn(o,s));const r=u(t,["config"]);return r!=null&&vE(r,l),l}function EE(o,t){const l={},s=u(t,["name"]);s!=null&&c(l,["_url","name"],gn(o,s));const r=u(t,["config"]);return r!=null&&SE(r,l),l}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class CE extends hn{constructor(t){super(),this.apiClient=t,this.list=async(l={})=>new co(mn.PAGED_ITEM_CACHED_CONTENTS,s=>this.listInternal(s),await this.listInternal(l),l)}async create(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=QT(this.apiClient,t);return g=Z("cachedContents",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json()),m.then(v=>v)}else{const h=XT(this.apiClient,t);return g=Z("cachedContents",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>v)}}async get(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=lE(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json()),m.then(v=>v)}else{const h=iE(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>v)}}async delete(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=ZT(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=jT(v),E=new ch;return Object.assign(E,T),E})}else{const h=WT(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=$T(v),E=new ch;return Object.assign(E,T),E})}}async update(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=EE(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"PATCH",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json()),m.then(v=>v)}else{const h=TE(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"PATCH",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>v)}}async listInternal(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=dE(t);return g=Z("cachedContents",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=pE(v),E=new dh;return Object.assign(E,T),E})}else{const h=cE(t);return g=Z("cachedContents",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=fE(v),E=new dh;return Object.assign(E,T),E})}}}function Us(o,t){var l={};for(var s in o)Object.prototype.hasOwnProperty.call(o,s)&&t.indexOf(s)<0&&(l[s]=o[s]);if(o!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(o);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(o,s[r])&&(l[s[r]]=o[s[r]]);return l}function vh(o){var t=typeof Symbol=="function"&&Symbol.iterator,l=t&&o[t],s=0;if(l)return l.call(o);if(o&&typeof o.length=="number")return{next:function(){return o&&s>=o.length&&(o=void 0),{value:o&&o[s++],done:!o}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function ae(o){return this instanceof ae?(this.v=o,this):new ae(o)}function qt(o,t,l){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=l.apply(o,t||[]),r,d=[];return r=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),g("next"),g("throw"),g("return",m),r[Symbol.asyncIterator]=function(){return this},r;function m(_){return function(k){return Promise.resolve(k).then(_,T)}}function g(_,k){s[_]&&(r[_]=function(M){return new Promise(function(I,U){d.push([_,M,I,U])>1||y(_,M)})},k&&(r[_]=k(r[_])))}function y(_,k){try{h(s[_](k))}catch(M){E(d[0][3],M)}}function h(_){_.value instanceof ae?Promise.resolve(_.value.v).then(v,T):E(d[0][2],_)}function v(_){y("next",_)}function T(_){y("throw",_)}function E(_,k){_(k),d.shift(),d.length&&y(d[0][0],d[0][1])}}function Vt(o){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t=o[Symbol.asyncIterator],l;return t?t.call(o):(o=typeof vh=="function"?vh(o):o[Symbol.iterator](),l={},s("next"),s("throw"),s("return"),l[Symbol.asyncIterator]=function(){return this},l);function s(d){l[d]=o[d]&&function(m){return new Promise(function(g,y){m=o[d](m),r(g,y,m.done,m.value)})}}function r(d,m,g,y){Promise.resolve(y).then(function(h){d({value:h,done:g})},m)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function _E(o){var t;if(o.candidates==null||o.candidates.length===0)return!1;const l=(t=o.candidates[0])===null||t===void 0?void 0:t.content;return l===void 0?!1:ng(l)}function ng(o){if(o.parts===void 0||o.parts.length===0)return!1;for(const t of o.parts)if(t===void 0||Object.keys(t).length===0)return!1;return!0}function AE(o){if(o.length!==0){for(const t of o)if(t.role!=="user"&&t.role!=="model")throw new Error(`Role must be user or model, but got ${t.role}.`)}}function Sh(o){if(o===void 0||o.length===0)return[];const t=[],l=o.length;let s=0;for(;s<l;)if(o[s].role==="user")t.push(o[s]),s++;else{const r=[];let d=!0;for(;s<l&&o[s].role==="model";)r.push(o[s]),d&&!ng(o[s])&&(d=!1),s++;d?t.push(...r):t.pop()}return t}class bE{constructor(t,l){this.modelsModule=t,this.apiClient=l}create(t){return new xE(this.apiClient,this.modelsModule,t.model,t.config,structuredClone(t.history))}}class xE{constructor(t,l,s,r={},d=[]){this.apiClient=t,this.modelsModule=l,this.model=s,this.config=r,this.history=d,this.sendPromise=Promise.resolve(),AE(d)}async sendMessage(t){var l;await this.sendPromise;const s=lt(t.message),r=this.modelsModule.generateContent({model:this.model,contents:this.getHistory(!0).concat(s),config:(l=t.config)!==null&&l!==void 0?l:this.config});return this.sendPromise=(async()=>{var d,m,g;const y=await r,h=(m=(d=y.candidates)===null||d===void 0?void 0:d[0])===null||m===void 0?void 0:m.content,v=y.automaticFunctionCallingHistory,T=this.getHistory(!0).length;let E=[];v!=null&&(E=(g=v.slice(T))!==null&&g!==void 0?g:[]);const _=h?[h]:[];this.recordHistory(s,_,E)})(),await this.sendPromise.catch(()=>{this.sendPromise=Promise.resolve()}),r}async sendMessageStream(t){var l;await this.sendPromise;const s=lt(t.message),r=this.modelsModule.generateContentStream({model:this.model,contents:this.getHistory(!0).concat(s),config:(l=t.config)!==null&&l!==void 0?l:this.config});this.sendPromise=r.then(()=>{}).catch(()=>{});const d=await r;return this.processStreamResponse(d,s)}getHistory(t=!1){const l=t?Sh(this.history):this.history;return structuredClone(l)}processStreamResponse(t,l){return qt(this,arguments,function*(){var r,d,m,g,y,h;const v=[];try{for(var T=!0,E=Vt(t),_;_=yield ae(E.next()),r=_.done,!r;T=!0){g=_.value,T=!1;const k=g;if(_E(k)){const M=(h=(y=k.candidates)===null||y===void 0?void 0:y[0])===null||h===void 0?void 0:h.content;M!==void 0&&v.push(M)}yield yield ae(k)}}catch(k){d={error:k}}finally{try{!T&&!r&&(m=E.return)&&(yield ae(m.call(E)))}finally{if(d)throw d.error}}this.recordHistory(l,v)})}recordHistory(t,l,s){let r=[];l.length>0&&l.every(d=>d.role!==void 0)?r=l:r.push({role:"model",parts:[]}),s&&s.length>0?this.history.push(...Sh(s)):this.history.push(t),this.history.push(...r)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ls extends Error{constructor(t){super(t.message),this.name="ApiError",this.status=t.status,Object.setPrototypeOf(this,Ls.prototype)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function RE(o){const t={},l=u(o,["file"]);return l!=null&&c(t,["file"],l),t}function NE(o){const t={},l=u(o,["sdkHttpResponse"]);return l!=null&&c(t,["sdkHttpResponse"],l),t}function IE(o){const t={},l=u(o,["name"]);return l!=null&&c(t,["_url","file"],Qh(l)),t}function ME(o){const t={},l=u(o,["sdkHttpResponse"]);return l!=null&&c(t,["sdkHttpResponse"],l),t}function wE(o){const t={},l=u(o,["name"]);return l!=null&&c(t,["_url","file"],Qh(l)),t}function DE(o,t){const l={},s=u(o,["pageSize"]);t!==void 0&&s!=null&&c(t,["_query","pageSize"],s);const r=u(o,["pageToken"]);return t!==void 0&&r!=null&&c(t,["_query","pageToken"],r),l}function UE(o){const t={},l=u(o,["config"]);return l!=null&&DE(l,t),t}function PE(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["nextPageToken"]);s!=null&&c(t,["nextPageToken"],s);const r=u(o,["files"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["files"],d)}return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class kE extends hn{constructor(t){super(),this.apiClient=t,this.list=async(l={})=>new co(mn.PAGED_ITEM_FILES,s=>this.listInternal(s),await this.listInternal(l),l)}async upload(t){if(this.apiClient.isVertexAI())throw new Error("Vertex AI does not support uploading files. You can share files through a GCS bucket.");return this.apiClient.uploadFile(t.file,t.config).then(l=>l)}async download(t){await this.apiClient.downloadFile(t)}async listInternal(t){var l,s;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=UE(t);return d=Z("files",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"GET",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(y=>y.json().then(h=>{const v=h;return v.sdkHttpResponse={headers:y.headers},v})),r.then(y=>{const h=PE(y),v=new BS;return Object.assign(v,h),v})}}async createInternal(t){var l,s;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=RE(t);return d=Z("upload/v1beta/files",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(y=>y.json()),r.then(y=>{const h=NE(y),v=new zS;return Object.assign(v,h),v})}}async get(t){var l,s;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=wE(t);return d=Z("files/{file}",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"GET",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(y=>y.json()),r.then(y=>y)}}async delete(t){var l,s;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=IE(t);return d=Z("files/{file}",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"DELETE",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(y=>y.json().then(h=>{const v=h;return v.sdkHttpResponse={headers:y.headers},v})),r.then(y=>{const h=ME(y),v=new OS;return Object.assign(v,h),v})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Is(o){const t={},l=u(o,["data"]);if(l!=null&&c(t,["data"],l),u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const s=u(o,["mimeType"]);return s!=null&&c(t,["mimeType"],s),t}function LE(o){const t={},l=u(o,["parts"]);if(l!=null){let r=l;Array.isArray(r)&&(r=r.map(d=>$E(d))),c(t,["parts"],r)}const s=u(o,["role"]);return s!=null&&c(t,["role"],s),t}function HE(o){const t={};if(u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const l=u(o,["fileUri"]);l!=null&&c(t,["fileUri"],l);const s=u(o,["mimeType"]);return s!=null&&c(t,["mimeType"],s),t}function GE(o){const t={},l=u(o,["id"]);l!=null&&c(t,["id"],l);const s=u(o,["args"]);s!=null&&c(t,["args"],s);const r=u(o,["name"]);if(r!=null&&c(t,["name"],r),u(o,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(o,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function BE(o){const t={};if(u(o,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");const l=u(o,["description"]);l!=null&&c(t,["description"],l);const s=u(o,["name"]);s!=null&&c(t,["name"],s);const r=u(o,["parameters"]);r!=null&&c(t,["parameters"],r);const d=u(o,["parametersJsonSchema"]);d!=null&&c(t,["parametersJsonSchema"],d);const m=u(o,["response"]);m!=null&&c(t,["response"],m);const g=u(o,["responseJsonSchema"]);return g!=null&&c(t,["responseJsonSchema"],g),t}function zE(o){const t={},l=u(o,["modelSelectionConfig"]);l!=null&&c(t,["modelConfig"],l);const s=u(o,["responseJsonSchema"]);s!=null&&c(t,["responseJsonSchema"],s);const r=u(o,["audioTimestamp"]);r!=null&&c(t,["audioTimestamp"],r);const d=u(o,["candidateCount"]);d!=null&&c(t,["candidateCount"],d);const m=u(o,["enableAffectiveDialog"]);m!=null&&c(t,["enableAffectiveDialog"],m);const g=u(o,["frequencyPenalty"]);g!=null&&c(t,["frequencyPenalty"],g);const y=u(o,["logprobs"]);y!=null&&c(t,["logprobs"],y);const h=u(o,["maxOutputTokens"]);h!=null&&c(t,["maxOutputTokens"],h);const v=u(o,["mediaResolution"]);v!=null&&c(t,["mediaResolution"],v);const T=u(o,["presencePenalty"]);T!=null&&c(t,["presencePenalty"],T);const E=u(o,["responseLogprobs"]);E!=null&&c(t,["responseLogprobs"],E);const _=u(o,["responseMimeType"]);_!=null&&c(t,["responseMimeType"],_);const k=u(o,["responseModalities"]);k!=null&&c(t,["responseModalities"],k);const M=u(o,["responseSchema"]);M!=null&&c(t,["responseSchema"],M);const I=u(o,["routingConfig"]);I!=null&&c(t,["routingConfig"],I);const U=u(o,["seed"]);U!=null&&c(t,["seed"],U);const V=u(o,["speechConfig"]);V!=null&&c(t,["speechConfig"],V);const B=u(o,["stopSequences"]);B!=null&&c(t,["stopSequences"],B);const K=u(o,["temperature"]);K!=null&&c(t,["temperature"],K);const $=u(o,["thinkingConfig"]);$!=null&&c(t,["thinkingConfig"],$);const ee=u(o,["topK"]);ee!=null&&c(t,["topK"],ee);const J=u(o,["topP"]);if(J!=null&&c(t,["topP"],J),u(o,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return t}function OE(o){const t={};if(u(o,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const l=u(o,["enableWidget"]);return l!=null&&c(t,["enableWidget"],l),t}function qE(o){const t={};if(u(o,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(u(o,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const l=u(o,["timeRangeFilter"]);return l!=null&&c(t,["timeRangeFilter"],l),t}function VE(o,t){const l={},s=u(o,["generationConfig"]);t!==void 0&&s!=null&&c(t,["setup","generationConfig"],s);const r=u(o,["responseModalities"]);t!==void 0&&r!=null&&c(t,["setup","generationConfig","responseModalities"],r);const d=u(o,["temperature"]);t!==void 0&&d!=null&&c(t,["setup","generationConfig","temperature"],d);const m=u(o,["topP"]);t!==void 0&&m!=null&&c(t,["setup","generationConfig","topP"],m);const g=u(o,["topK"]);t!==void 0&&g!=null&&c(t,["setup","generationConfig","topK"],g);const y=u(o,["maxOutputTokens"]);t!==void 0&&y!=null&&c(t,["setup","generationConfig","maxOutputTokens"],y);const h=u(o,["mediaResolution"]);t!==void 0&&h!=null&&c(t,["setup","generationConfig","mediaResolution"],h);const v=u(o,["seed"]);t!==void 0&&v!=null&&c(t,["setup","generationConfig","seed"],v);const T=u(o,["speechConfig"]);t!==void 0&&T!=null&&c(t,["setup","generationConfig","speechConfig"],Gu(T));const E=u(o,["thinkingConfig"]);t!==void 0&&E!=null&&c(t,["setup","generationConfig","thinkingConfig"],E);const _=u(o,["enableAffectiveDialog"]);t!==void 0&&_!=null&&c(t,["setup","generationConfig","enableAffectiveDialog"],_);const k=u(o,["systemInstruction"]);t!==void 0&&k!=null&&c(t,["setup","systemInstruction"],LE(lt(k)));const M=u(o,["tools"]);if(t!==void 0&&M!=null){let ee=oi(M);Array.isArray(ee)&&(ee=ee.map(J=>eC(ni(J)))),c(t,["setup","tools"],ee)}const I=u(o,["sessionResumption"]);t!==void 0&&I!=null&&c(t,["setup","sessionResumption"],jE(I));const U=u(o,["inputAudioTranscription"]);t!==void 0&&U!=null&&c(t,["setup","inputAudioTranscription"],U);const V=u(o,["outputAudioTranscription"]);t!==void 0&&V!=null&&c(t,["setup","outputAudioTranscription"],V);const B=u(o,["realtimeInputConfig"]);t!==void 0&&B!=null&&c(t,["setup","realtimeInputConfig"],B);const K=u(o,["contextWindowCompression"]);t!==void 0&&K!=null&&c(t,["setup","contextWindowCompression"],K);const $=u(o,["proactivity"]);if(t!==void 0&&$!=null&&c(t,["setup","proactivity"],$),u(o,["explicitVadSignal"])!==void 0)throw new Error("explicitVadSignal parameter is not supported in Gemini API.");return l}function FE(o,t){const l={},s=u(o,["generationConfig"]);t!==void 0&&s!=null&&c(t,["setup","generationConfig"],zE(s));const r=u(o,["responseModalities"]);t!==void 0&&r!=null&&c(t,["setup","generationConfig","responseModalities"],r);const d=u(o,["temperature"]);t!==void 0&&d!=null&&c(t,["setup","generationConfig","temperature"],d);const m=u(o,["topP"]);t!==void 0&&m!=null&&c(t,["setup","generationConfig","topP"],m);const g=u(o,["topK"]);t!==void 0&&g!=null&&c(t,["setup","generationConfig","topK"],g);const y=u(o,["maxOutputTokens"]);t!==void 0&&y!=null&&c(t,["setup","generationConfig","maxOutputTokens"],y);const h=u(o,["mediaResolution"]);t!==void 0&&h!=null&&c(t,["setup","generationConfig","mediaResolution"],h);const v=u(o,["seed"]);t!==void 0&&v!=null&&c(t,["setup","generationConfig","seed"],v);const T=u(o,["speechConfig"]);t!==void 0&&T!=null&&c(t,["setup","generationConfig","speechConfig"],Gu(T));const E=u(o,["thinkingConfig"]);t!==void 0&&E!=null&&c(t,["setup","generationConfig","thinkingConfig"],E);const _=u(o,["enableAffectiveDialog"]);t!==void 0&&_!=null&&c(t,["setup","generationConfig","enableAffectiveDialog"],_);const k=u(o,["systemInstruction"]);t!==void 0&&k!=null&&c(t,["setup","systemInstruction"],lt(k));const M=u(o,["tools"]);if(t!==void 0&&M!=null){let J=oi(M);Array.isArray(J)&&(J=J.map(Q=>tC(ni(Q)))),c(t,["setup","tools"],J)}const I=u(o,["sessionResumption"]);t!==void 0&&I!=null&&c(t,["setup","sessionResumption"],I);const U=u(o,["inputAudioTranscription"]);t!==void 0&&U!=null&&c(t,["setup","inputAudioTranscription"],U);const V=u(o,["outputAudioTranscription"]);t!==void 0&&V!=null&&c(t,["setup","outputAudioTranscription"],V);const B=u(o,["realtimeInputConfig"]);t!==void 0&&B!=null&&c(t,["setup","realtimeInputConfig"],B);const K=u(o,["contextWindowCompression"]);t!==void 0&&K!=null&&c(t,["setup","contextWindowCompression"],K);const $=u(o,["proactivity"]);t!==void 0&&$!=null&&c(t,["setup","proactivity"],$);const ee=u(o,["explicitVadSignal"]);return t!==void 0&&ee!=null&&c(t,["setup","explicitVadSignal"],ee),l}function YE(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["setup","model"],Ce(o,s));const r=u(t,["config"]);return r!=null&&c(l,["config"],VE(r,l)),l}function JE(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["setup","model"],Ce(o,s));const r=u(t,["config"]);return r!=null&&c(l,["config"],FE(r,l)),l}function KE(o){const t={},l=u(o,["musicGenerationConfig"]);return l!=null&&c(t,["musicGenerationConfig"],l),t}function XE(o){const t={},l=u(o,["weightedPrompts"]);if(l!=null){let s=l;Array.isArray(s)&&(s=s.map(r=>r)),c(t,["weightedPrompts"],s)}return t}function QE(o){const t={},l=u(o,["media"]);if(l!=null){let h=Fh(l);Array.isArray(h)&&(h=h.map(v=>Is(v))),c(t,["mediaChunks"],h)}const s=u(o,["audio"]);s!=null&&c(t,["audio"],Is(Jh(s)));const r=u(o,["audioStreamEnd"]);r!=null&&c(t,["audioStreamEnd"],r);const d=u(o,["video"]);d!=null&&c(t,["video"],Is(Yh(d)));const m=u(o,["text"]);m!=null&&c(t,["text"],m);const g=u(o,["activityStart"]);g!=null&&c(t,["activityStart"],g);const y=u(o,["activityEnd"]);return y!=null&&c(t,["activityEnd"],y),t}function WE(o){const t={},l=u(o,["media"]);if(l!=null){let h=Fh(l);Array.isArray(h)&&(h=h.map(v=>v)),c(t,["mediaChunks"],h)}const s=u(o,["audio"]);s!=null&&c(t,["audio"],Jh(s));const r=u(o,["audioStreamEnd"]);r!=null&&c(t,["audioStreamEnd"],r);const d=u(o,["video"]);d!=null&&c(t,["video"],Yh(d));const m=u(o,["text"]);m!=null&&c(t,["text"],m);const g=u(o,["activityStart"]);g!=null&&c(t,["activityStart"],g);const y=u(o,["activityEnd"]);return y!=null&&c(t,["activityEnd"],y),t}function ZE(o){const t={},l=u(o,["setupComplete"]);l!=null&&c(t,["setupComplete"],l);const s=u(o,["serverContent"]);s!=null&&c(t,["serverContent"],s);const r=u(o,["toolCall"]);r!=null&&c(t,["toolCall"],r);const d=u(o,["toolCallCancellation"]);d!=null&&c(t,["toolCallCancellation"],d);const m=u(o,["usageMetadata"]);m!=null&&c(t,["usageMetadata"],nC(m));const g=u(o,["goAway"]);g!=null&&c(t,["goAway"],g);const y=u(o,["sessionResumptionUpdate"]);y!=null&&c(t,["sessionResumptionUpdate"],y);const h=u(o,["voiceActivityDetectionSignal"]);return h!=null&&c(t,["voiceActivityDetectionSignal"],h),t}function $E(o){const t={},l=u(o,["mediaResolution"]);l!=null&&c(t,["mediaResolution"],l);const s=u(o,["codeExecutionResult"]);s!=null&&c(t,["codeExecutionResult"],s);const r=u(o,["executableCode"]);r!=null&&c(t,["executableCode"],r);const d=u(o,["fileData"]);d!=null&&c(t,["fileData"],HE(d));const m=u(o,["functionCall"]);m!=null&&c(t,["functionCall"],GE(m));const g=u(o,["functionResponse"]);g!=null&&c(t,["functionResponse"],g);const y=u(o,["inlineData"]);y!=null&&c(t,["inlineData"],Is(y));const h=u(o,["text"]);h!=null&&c(t,["text"],h);const v=u(o,["thought"]);v!=null&&c(t,["thought"],v);const T=u(o,["thoughtSignature"]);T!=null&&c(t,["thoughtSignature"],T);const E=u(o,["videoMetadata"]);return E!=null&&c(t,["videoMetadata"],E),t}function jE(o){const t={},l=u(o,["handle"]);if(l!=null&&c(t,["handle"],l),u(o,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return t}function eC(o){const t={},l=u(o,["functionDeclarations"]);if(l!=null){let v=l;Array.isArray(v)&&(v=v.map(T=>T)),c(t,["functionDeclarations"],v)}if(u(o,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const s=u(o,["googleSearchRetrieval"]);s!=null&&c(t,["googleSearchRetrieval"],s);const r=u(o,["computerUse"]);r!=null&&c(t,["computerUse"],r);const d=u(o,["fileSearch"]);d!=null&&c(t,["fileSearch"],d);const m=u(o,["codeExecution"]);if(m!=null&&c(t,["codeExecution"],m),u(o,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const g=u(o,["googleMaps"]);g!=null&&c(t,["googleMaps"],OE(g));const y=u(o,["googleSearch"]);y!=null&&c(t,["googleSearch"],qE(y));const h=u(o,["urlContext"]);return h!=null&&c(t,["urlContext"],h),t}function tC(o){const t={},l=u(o,["functionDeclarations"]);if(l!=null){let T=l;Array.isArray(T)&&(T=T.map(E=>BE(E))),c(t,["functionDeclarations"],T)}const s=u(o,["retrieval"]);s!=null&&c(t,["retrieval"],s);const r=u(o,["googleSearchRetrieval"]);r!=null&&c(t,["googleSearchRetrieval"],r);const d=u(o,["computerUse"]);if(d!=null&&c(t,["computerUse"],d),u(o,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const m=u(o,["codeExecution"]);m!=null&&c(t,["codeExecution"],m);const g=u(o,["enterpriseWebSearch"]);g!=null&&c(t,["enterpriseWebSearch"],g);const y=u(o,["googleMaps"]);y!=null&&c(t,["googleMaps"],y);const h=u(o,["googleSearch"]);h!=null&&c(t,["googleSearch"],h);const v=u(o,["urlContext"]);return v!=null&&c(t,["urlContext"],v),t}function nC(o){const t={},l=u(o,["promptTokenCount"]);l!=null&&c(t,["promptTokenCount"],l);const s=u(o,["cachedContentTokenCount"]);s!=null&&c(t,["cachedContentTokenCount"],s);const r=u(o,["candidatesTokenCount"]);r!=null&&c(t,["responseTokenCount"],r);const d=u(o,["toolUsePromptTokenCount"]);d!=null&&c(t,["toolUsePromptTokenCount"],d);const m=u(o,["thoughtsTokenCount"]);m!=null&&c(t,["thoughtsTokenCount"],m);const g=u(o,["totalTokenCount"]);g!=null&&c(t,["totalTokenCount"],g);const y=u(o,["promptTokensDetails"]);if(y!=null){let _=y;Array.isArray(_)&&(_=_.map(k=>k)),c(t,["promptTokensDetails"],_)}const h=u(o,["cacheTokensDetails"]);if(h!=null){let _=h;Array.isArray(_)&&(_=_.map(k=>k)),c(t,["cacheTokensDetails"],_)}const v=u(o,["candidatesTokensDetails"]);if(v!=null){let _=v;Array.isArray(_)&&(_=_.map(k=>k)),c(t,["responseTokensDetails"],_)}const T=u(o,["toolUsePromptTokensDetails"]);if(T!=null){let _=T;Array.isArray(_)&&(_=_.map(k=>k)),c(t,["toolUsePromptTokensDetails"],_)}const E=u(o,["trafficType"]);return E!=null&&c(t,["trafficType"],E),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function oC(o){const t={},l=u(o,["data"]);if(l!=null&&c(t,["data"],l),u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const s=u(o,["mimeType"]);return s!=null&&c(t,["mimeType"],s),t}function iC(o){const t={},l=u(o,["content"]);l!=null&&c(t,["content"],l);const s=u(o,["citationMetadata"]);s!=null&&c(t,["citationMetadata"],lC(s));const r=u(o,["tokenCount"]);r!=null&&c(t,["tokenCount"],r);const d=u(o,["finishReason"]);d!=null&&c(t,["finishReason"],d);const m=u(o,["avgLogprobs"]);m!=null&&c(t,["avgLogprobs"],m);const g=u(o,["groundingMetadata"]);g!=null&&c(t,["groundingMetadata"],g);const y=u(o,["index"]);y!=null&&c(t,["index"],y);const h=u(o,["logprobsResult"]);h!=null&&c(t,["logprobsResult"],h);const v=u(o,["safetyRatings"]);if(v!=null){let E=v;Array.isArray(E)&&(E=E.map(_=>_)),c(t,["safetyRatings"],E)}const T=u(o,["urlContextMetadata"]);return T!=null&&c(t,["urlContextMetadata"],T),t}function lC(o){const t={},l=u(o,["citationSources"]);if(l!=null){let s=l;Array.isArray(s)&&(s=s.map(r=>r)),c(t,["citations"],s)}return t}function sC(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["_url","model"],Ce(o,s));const r=u(t,["contents"]);if(r!=null){let d=Ht(r);Array.isArray(d)&&(d=d.map(m=>m)),c(l,["contents"],d)}return l}function aC(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["tokensInfo"]);if(s!=null){let r=s;Array.isArray(r)&&(r=r.map(d=>d)),c(t,["tokensInfo"],r)}return t}function rC(o){const t={},l=u(o,["values"]);l!=null&&c(t,["values"],l);const s=u(o,["statistics"]);return s!=null&&c(t,["statistics"],uC(s)),t}function uC(o){const t={},l=u(o,["truncated"]);l!=null&&c(t,["truncated"],l);const s=u(o,["token_count"]);return s!=null&&c(t,["tokenCount"],s),t}function Hs(o){const t={},l=u(o,["parts"]);if(l!=null){let r=l;Array.isArray(r)&&(r=r.map(d=>v_(d))),c(t,["parts"],r)}const s=u(o,["role"]);return s!=null&&c(t,["role"],s),t}function cC(o){const t={},l=u(o,["controlType"]);l!=null&&c(t,["controlType"],l);const s=u(o,["enableControlImageComputation"]);return s!=null&&c(t,["computeControl"],s),t}function dC(o){const t={};if(u(o,["systemInstruction"])!==void 0)throw new Error("systemInstruction parameter is not supported in Gemini API.");if(u(o,["tools"])!==void 0)throw new Error("tools parameter is not supported in Gemini API.");if(u(o,["generationConfig"])!==void 0)throw new Error("generationConfig parameter is not supported in Gemini API.");return t}function fC(o,t){const l={},s=u(o,["systemInstruction"]);t!==void 0&&s!=null&&c(t,["systemInstruction"],lt(s));const r=u(o,["tools"]);if(t!==void 0&&r!=null){let m=r;Array.isArray(m)&&(m=m.map(g=>sg(g))),c(t,["tools"],m)}const d=u(o,["generationConfig"]);return t!==void 0&&d!=null&&c(t,["generationConfig"],o_(d)),l}function pC(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["_url","model"],Ce(o,s));const r=u(t,["contents"]);if(r!=null){let m=Ht(r);Array.isArray(m)&&(m=m.map(g=>Hs(g))),c(l,["contents"],m)}const d=u(t,["config"]);return d!=null&&dC(d),l}function mC(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["_url","model"],Ce(o,s));const r=u(t,["contents"]);if(r!=null){let m=Ht(r);Array.isArray(m)&&(m=m.map(g=>g)),c(l,["contents"],m)}const d=u(t,["config"]);return d!=null&&fC(d,l),l}function hC(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["totalTokens"]);s!=null&&c(t,["totalTokens"],s);const r=u(o,["cachedContentTokenCount"]);return r!=null&&c(t,["cachedContentTokenCount"],r),t}function gC(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["totalTokens"]);return s!=null&&c(t,["totalTokens"],s),t}function yC(o,t){const l={},s=u(t,["model"]);return s!=null&&c(l,["_url","name"],Ce(o,s)),l}function vC(o,t){const l={},s=u(t,["model"]);return s!=null&&c(l,["_url","name"],Ce(o,s)),l}function SC(o){const t={},l=u(o,["sdkHttpResponse"]);return l!=null&&c(t,["sdkHttpResponse"],l),t}function TC(o){const t={},l=u(o,["sdkHttpResponse"]);return l!=null&&c(t,["sdkHttpResponse"],l),t}function EC(o,t){const l={},s=u(o,["outputGcsUri"]);t!==void 0&&s!=null&&c(t,["parameters","storageUri"],s);const r=u(o,["negativePrompt"]);t!==void 0&&r!=null&&c(t,["parameters","negativePrompt"],r);const d=u(o,["numberOfImages"]);t!==void 0&&d!=null&&c(t,["parameters","sampleCount"],d);const m=u(o,["aspectRatio"]);t!==void 0&&m!=null&&c(t,["parameters","aspectRatio"],m);const g=u(o,["guidanceScale"]);t!==void 0&&g!=null&&c(t,["parameters","guidanceScale"],g);const y=u(o,["seed"]);t!==void 0&&y!=null&&c(t,["parameters","seed"],y);const h=u(o,["safetyFilterLevel"]);t!==void 0&&h!=null&&c(t,["parameters","safetySetting"],h);const v=u(o,["personGeneration"]);t!==void 0&&v!=null&&c(t,["parameters","personGeneration"],v);const T=u(o,["includeSafetyAttributes"]);t!==void 0&&T!=null&&c(t,["parameters","includeSafetyAttributes"],T);const E=u(o,["includeRaiReason"]);t!==void 0&&E!=null&&c(t,["parameters","includeRaiReason"],E);const _=u(o,["language"]);t!==void 0&&_!=null&&c(t,["parameters","language"],_);const k=u(o,["outputMimeType"]);t!==void 0&&k!=null&&c(t,["parameters","outputOptions","mimeType"],k);const M=u(o,["outputCompressionQuality"]);t!==void 0&&M!=null&&c(t,["parameters","outputOptions","compressionQuality"],M);const I=u(o,["addWatermark"]);t!==void 0&&I!=null&&c(t,["parameters","addWatermark"],I);const U=u(o,["labels"]);t!==void 0&&U!=null&&c(t,["labels"],U);const V=u(o,["editMode"]);t!==void 0&&V!=null&&c(t,["parameters","editMode"],V);const B=u(o,["baseSteps"]);return t!==void 0&&B!=null&&c(t,["parameters","editConfig","baseSteps"],B),l}function CC(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["_url","model"],Ce(o,s));const r=u(t,["prompt"]);r!=null&&c(l,["instances[0]","prompt"],r);const d=u(t,["referenceImages"]);if(d!=null){let g=d;Array.isArray(g)&&(g=g.map(y=>A_(y))),c(l,["instances[0]","referenceImages"],g)}const m=u(t,["config"]);return m!=null&&EC(m,l),l}function _C(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["predictions"]);if(s!=null){let r=s;Array.isArray(r)&&(r=r.map(d=>Gs(d))),c(t,["generatedImages"],r)}return t}function AC(o,t){const l={},s=u(o,["taskType"]);t!==void 0&&s!=null&&c(t,["requests[]","taskType"],s);const r=u(o,["title"]);t!==void 0&&r!=null&&c(t,["requests[]","title"],r);const d=u(o,["outputDimensionality"]);if(t!==void 0&&d!=null&&c(t,["requests[]","outputDimensionality"],d),u(o,["mimeType"])!==void 0)throw new Error("mimeType parameter is not supported in Gemini API.");if(u(o,["autoTruncate"])!==void 0)throw new Error("autoTruncate parameter is not supported in Gemini API.");return l}function bC(o,t){const l={},s=u(o,["taskType"]);t!==void 0&&s!=null&&c(t,["instances[]","task_type"],s);const r=u(o,["title"]);t!==void 0&&r!=null&&c(t,["instances[]","title"],r);const d=u(o,["outputDimensionality"]);t!==void 0&&d!=null&&c(t,["parameters","outputDimensionality"],d);const m=u(o,["mimeType"]);t!==void 0&&m!=null&&c(t,["instances[]","mimeType"],m);const g=u(o,["autoTruncate"]);return t!==void 0&&g!=null&&c(t,["parameters","autoTruncate"],g),l}function xC(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["_url","model"],Ce(o,s));const r=u(t,["contents"]);if(r!=null){let g=ku(o,r);Array.isArray(g)&&(g=g.map(y=>y)),c(l,["requests[]","content"],g)}const d=u(t,["config"]);d!=null&&AC(d,l);const m=u(t,["model"]);return m!==void 0&&c(l,["requests[]","model"],Ce(o,m)),l}function RC(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["_url","model"],Ce(o,s));const r=u(t,["contents"]);if(r!=null){let m=ku(o,r);Array.isArray(m)&&(m=m.map(g=>g)),c(l,["instances[]","content"],m)}const d=u(t,["config"]);return d!=null&&bC(d,l),l}function NC(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["embeddings"]);if(s!=null){let d=s;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["embeddings"],d)}const r=u(o,["metadata"]);return r!=null&&c(t,["metadata"],r),t}function IC(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["predictions[]","embeddings"]);if(s!=null){let d=s;Array.isArray(d)&&(d=d.map(m=>rC(m))),c(t,["embeddings"],d)}const r=u(o,["metadata"]);return r!=null&&c(t,["metadata"],r),t}function MC(o){const t={},l=u(o,["endpoint"]);l!=null&&c(t,["name"],l);const s=u(o,["deployedModelId"]);return s!=null&&c(t,["deployedModelId"],s),t}function wC(o){const t={};if(u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const l=u(o,["fileUri"]);l!=null&&c(t,["fileUri"],l);const s=u(o,["mimeType"]);return s!=null&&c(t,["mimeType"],s),t}function DC(o){const t={},l=u(o,["id"]);l!=null&&c(t,["id"],l);const s=u(o,["args"]);s!=null&&c(t,["args"],s);const r=u(o,["name"]);if(r!=null&&c(t,["name"],r),u(o,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(o,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function UC(o){const t={},l=u(o,["mode"]);l!=null&&c(t,["mode"],l);const s=u(o,["allowedFunctionNames"]);if(s!=null&&c(t,["allowedFunctionNames"],s),u(o,["streamFunctionCallArguments"])!==void 0)throw new Error("streamFunctionCallArguments parameter is not supported in Gemini API.");return t}function PC(o){const t={};if(u(o,["behavior"])!==void 0)throw new Error("behavior parameter is not supported in Vertex AI.");const l=u(o,["description"]);l!=null&&c(t,["description"],l);const s=u(o,["name"]);s!=null&&c(t,["name"],s);const r=u(o,["parameters"]);r!=null&&c(t,["parameters"],r);const d=u(o,["parametersJsonSchema"]);d!=null&&c(t,["parametersJsonSchema"],d);const m=u(o,["response"]);m!=null&&c(t,["response"],m);const g=u(o,["responseJsonSchema"]);return g!=null&&c(t,["responseJsonSchema"],g),t}function kC(o,t,l){const s={},r=u(t,["systemInstruction"]);l!==void 0&&r!=null&&c(l,["systemInstruction"],Hs(lt(r)));const d=u(t,["temperature"]);d!=null&&c(s,["temperature"],d);const m=u(t,["topP"]);m!=null&&c(s,["topP"],m);const g=u(t,["topK"]);g!=null&&c(s,["topK"],g);const y=u(t,["candidateCount"]);y!=null&&c(s,["candidateCount"],y);const h=u(t,["maxOutputTokens"]);h!=null&&c(s,["maxOutputTokens"],h);const v=u(t,["stopSequences"]);v!=null&&c(s,["stopSequences"],v);const T=u(t,["responseLogprobs"]);T!=null&&c(s,["responseLogprobs"],T);const E=u(t,["logprobs"]);E!=null&&c(s,["logprobs"],E);const _=u(t,["presencePenalty"]);_!=null&&c(s,["presencePenalty"],_);const k=u(t,["frequencyPenalty"]);k!=null&&c(s,["frequencyPenalty"],k);const M=u(t,["seed"]);M!=null&&c(s,["seed"],M);const I=u(t,["responseMimeType"]);I!=null&&c(s,["responseMimeType"],I);const U=u(t,["responseSchema"]);U!=null&&c(s,["responseSchema"],Lu(U));const V=u(t,["responseJsonSchema"]);if(V!=null&&c(s,["responseJsonSchema"],V),u(t,["routingConfig"])!==void 0)throw new Error("routingConfig parameter is not supported in Gemini API.");if(u(t,["modelSelectionConfig"])!==void 0)throw new Error("modelSelectionConfig parameter is not supported in Gemini API.");const B=u(t,["safetySettings"]);if(l!==void 0&&B!=null){let Se=B;Array.isArray(Se)&&(Se=Se.map(Ge=>b_(Ge))),c(l,["safetySettings"],Se)}const K=u(t,["tools"]);if(l!==void 0&&K!=null){let Se=oi(K);Array.isArray(Se)&&(Se=Se.map(Ge=>D_(ni(Ge)))),c(l,["tools"],Se)}const $=u(t,["toolConfig"]);if(l!==void 0&&$!=null&&c(l,["toolConfig"],w_($)),u(t,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const ee=u(t,["cachedContent"]);l!==void 0&&ee!=null&&c(l,["cachedContent"],gn(o,ee));const J=u(t,["responseModalities"]);J!=null&&c(s,["responseModalities"],J);const Q=u(t,["mediaResolution"]);Q!=null&&c(s,["mediaResolution"],Q);const F=u(t,["speechConfig"]);if(F!=null&&c(s,["speechConfig"],Hu(F)),u(t,["audioTimestamp"])!==void 0)throw new Error("audioTimestamp parameter is not supported in Gemini API.");const Y=u(t,["thinkingConfig"]);Y!=null&&c(s,["thinkingConfig"],Y);const oe=u(t,["imageConfig"]);oe!=null&&c(s,["imageConfig"],r_(oe));const ue=u(t,["enableEnhancedCivicAnswers"]);return ue!=null&&c(s,["enableEnhancedCivicAnswers"],ue),s}function LC(o,t,l){const s={},r=u(t,["systemInstruction"]);l!==void 0&&r!=null&&c(l,["systemInstruction"],lt(r));const d=u(t,["temperature"]);d!=null&&c(s,["temperature"],d);const m=u(t,["topP"]);m!=null&&c(s,["topP"],m);const g=u(t,["topK"]);g!=null&&c(s,["topK"],g);const y=u(t,["candidateCount"]);y!=null&&c(s,["candidateCount"],y);const h=u(t,["maxOutputTokens"]);h!=null&&c(s,["maxOutputTokens"],h);const v=u(t,["stopSequences"]);v!=null&&c(s,["stopSequences"],v);const T=u(t,["responseLogprobs"]);T!=null&&c(s,["responseLogprobs"],T);const E=u(t,["logprobs"]);E!=null&&c(s,["logprobs"],E);const _=u(t,["presencePenalty"]);_!=null&&c(s,["presencePenalty"],_);const k=u(t,["frequencyPenalty"]);k!=null&&c(s,["frequencyPenalty"],k);const M=u(t,["seed"]);M!=null&&c(s,["seed"],M);const I=u(t,["responseMimeType"]);I!=null&&c(s,["responseMimeType"],I);const U=u(t,["responseSchema"]);U!=null&&c(s,["responseSchema"],Lu(U));const V=u(t,["responseJsonSchema"]);V!=null&&c(s,["responseJsonSchema"],V);const B=u(t,["routingConfig"]);B!=null&&c(s,["routingConfig"],B);const K=u(t,["modelSelectionConfig"]);K!=null&&c(s,["modelConfig"],K);const $=u(t,["safetySettings"]);if(l!==void 0&&$!=null){let H=$;Array.isArray(H)&&(H=H.map(X=>X)),c(l,["safetySettings"],H)}const ee=u(t,["tools"]);if(l!==void 0&&ee!=null){let H=oi(ee);Array.isArray(H)&&(H=H.map(X=>sg(ni(X)))),c(l,["tools"],H)}const J=u(t,["toolConfig"]);l!==void 0&&J!=null&&c(l,["toolConfig"],J);const Q=u(t,["labels"]);l!==void 0&&Q!=null&&c(l,["labels"],Q);const F=u(t,["cachedContent"]);l!==void 0&&F!=null&&c(l,["cachedContent"],gn(o,F));const Y=u(t,["responseModalities"]);Y!=null&&c(s,["responseModalities"],Y);const oe=u(t,["mediaResolution"]);oe!=null&&c(s,["mediaResolution"],oe);const ue=u(t,["speechConfig"]);ue!=null&&c(s,["speechConfig"],Hu(ue));const Se=u(t,["audioTimestamp"]);Se!=null&&c(s,["audioTimestamp"],Se);const Ge=u(t,["thinkingConfig"]);Ge!=null&&c(s,["thinkingConfig"],Ge);const ot=u(t,["imageConfig"]);if(ot!=null&&c(s,["imageConfig"],u_(ot)),u(t,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return s}function Th(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["_url","model"],Ce(o,s));const r=u(t,["contents"]);if(r!=null){let m=Ht(r);Array.isArray(m)&&(m=m.map(g=>Hs(g))),c(l,["contents"],m)}const d=u(t,["config"]);return d!=null&&c(l,["generationConfig"],kC(o,d,l)),l}function Eh(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["_url","model"],Ce(o,s));const r=u(t,["contents"]);if(r!=null){let m=Ht(r);Array.isArray(m)&&(m=m.map(g=>g)),c(l,["contents"],m)}const d=u(t,["config"]);return d!=null&&c(l,["generationConfig"],LC(o,d,l)),l}function Ch(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["candidates"]);if(s!=null){let y=s;Array.isArray(y)&&(y=y.map(h=>iC(h))),c(t,["candidates"],y)}const r=u(o,["modelVersion"]);r!=null&&c(t,["modelVersion"],r);const d=u(o,["promptFeedback"]);d!=null&&c(t,["promptFeedback"],d);const m=u(o,["responseId"]);m!=null&&c(t,["responseId"],m);const g=u(o,["usageMetadata"]);return g!=null&&c(t,["usageMetadata"],g),t}function _h(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["candidates"]);if(s!=null){let h=s;Array.isArray(h)&&(h=h.map(v=>v)),c(t,["candidates"],h)}const r=u(o,["createTime"]);r!=null&&c(t,["createTime"],r);const d=u(o,["modelVersion"]);d!=null&&c(t,["modelVersion"],d);const m=u(o,["promptFeedback"]);m!=null&&c(t,["promptFeedback"],m);const g=u(o,["responseId"]);g!=null&&c(t,["responseId"],g);const y=u(o,["usageMetadata"]);return y!=null&&c(t,["usageMetadata"],y),t}function HC(o,t){const l={};if(u(o,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(u(o,["negativePrompt"])!==void 0)throw new Error("negativePrompt parameter is not supported in Gemini API.");const s=u(o,["numberOfImages"]);t!==void 0&&s!=null&&c(t,["parameters","sampleCount"],s);const r=u(o,["aspectRatio"]);t!==void 0&&r!=null&&c(t,["parameters","aspectRatio"],r);const d=u(o,["guidanceScale"]);if(t!==void 0&&d!=null&&c(t,["parameters","guidanceScale"],d),u(o,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const m=u(o,["safetyFilterLevel"]);t!==void 0&&m!=null&&c(t,["parameters","safetySetting"],m);const g=u(o,["personGeneration"]);t!==void 0&&g!=null&&c(t,["parameters","personGeneration"],g);const y=u(o,["includeSafetyAttributes"]);t!==void 0&&y!=null&&c(t,["parameters","includeSafetyAttributes"],y);const h=u(o,["includeRaiReason"]);t!==void 0&&h!=null&&c(t,["parameters","includeRaiReason"],h);const v=u(o,["language"]);t!==void 0&&v!=null&&c(t,["parameters","language"],v);const T=u(o,["outputMimeType"]);t!==void 0&&T!=null&&c(t,["parameters","outputOptions","mimeType"],T);const E=u(o,["outputCompressionQuality"]);if(t!==void 0&&E!=null&&c(t,["parameters","outputOptions","compressionQuality"],E),u(o,["addWatermark"])!==void 0)throw new Error("addWatermark parameter is not supported in Gemini API.");if(u(o,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");const _=u(o,["imageSize"]);if(t!==void 0&&_!=null&&c(t,["parameters","sampleImageSize"],_),u(o,["enhancePrompt"])!==void 0)throw new Error("enhancePrompt parameter is not supported in Gemini API.");return l}function GC(o,t){const l={},s=u(o,["outputGcsUri"]);t!==void 0&&s!=null&&c(t,["parameters","storageUri"],s);const r=u(o,["negativePrompt"]);t!==void 0&&r!=null&&c(t,["parameters","negativePrompt"],r);const d=u(o,["numberOfImages"]);t!==void 0&&d!=null&&c(t,["parameters","sampleCount"],d);const m=u(o,["aspectRatio"]);t!==void 0&&m!=null&&c(t,["parameters","aspectRatio"],m);const g=u(o,["guidanceScale"]);t!==void 0&&g!=null&&c(t,["parameters","guidanceScale"],g);const y=u(o,["seed"]);t!==void 0&&y!=null&&c(t,["parameters","seed"],y);const h=u(o,["safetyFilterLevel"]);t!==void 0&&h!=null&&c(t,["parameters","safetySetting"],h);const v=u(o,["personGeneration"]);t!==void 0&&v!=null&&c(t,["parameters","personGeneration"],v);const T=u(o,["includeSafetyAttributes"]);t!==void 0&&T!=null&&c(t,["parameters","includeSafetyAttributes"],T);const E=u(o,["includeRaiReason"]);t!==void 0&&E!=null&&c(t,["parameters","includeRaiReason"],E);const _=u(o,["language"]);t!==void 0&&_!=null&&c(t,["parameters","language"],_);const k=u(o,["outputMimeType"]);t!==void 0&&k!=null&&c(t,["parameters","outputOptions","mimeType"],k);const M=u(o,["outputCompressionQuality"]);t!==void 0&&M!=null&&c(t,["parameters","outputOptions","compressionQuality"],M);const I=u(o,["addWatermark"]);t!==void 0&&I!=null&&c(t,["parameters","addWatermark"],I);const U=u(o,["labels"]);t!==void 0&&U!=null&&c(t,["labels"],U);const V=u(o,["imageSize"]);t!==void 0&&V!=null&&c(t,["parameters","sampleImageSize"],V);const B=u(o,["enhancePrompt"]);return t!==void 0&&B!=null&&c(t,["parameters","enhancePrompt"],B),l}function BC(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["_url","model"],Ce(o,s));const r=u(t,["prompt"]);r!=null&&c(l,["instances[0]","prompt"],r);const d=u(t,["config"]);return d!=null&&HC(d,l),l}function zC(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["_url","model"],Ce(o,s));const r=u(t,["prompt"]);r!=null&&c(l,["instances[0]","prompt"],r);const d=u(t,["config"]);return d!=null&&GC(d,l),l}function OC(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["predictions"]);if(s!=null){let d=s;Array.isArray(d)&&(d=d.map(m=>jC(m))),c(t,["generatedImages"],d)}const r=u(o,["positivePromptSafetyAttributes"]);return r!=null&&c(t,["positivePromptSafetyAttributes"],ig(r)),t}function qC(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["predictions"]);if(s!=null){let d=s;Array.isArray(d)&&(d=d.map(m=>Gs(m))),c(t,["generatedImages"],d)}const r=u(o,["positivePromptSafetyAttributes"]);return r!=null&&c(t,["positivePromptSafetyAttributes"],lg(r)),t}function VC(o,t){const l={},s=u(o,["numberOfVideos"]);if(t!==void 0&&s!=null&&c(t,["parameters","sampleCount"],s),u(o,["outputGcsUri"])!==void 0)throw new Error("outputGcsUri parameter is not supported in Gemini API.");if(u(o,["fps"])!==void 0)throw new Error("fps parameter is not supported in Gemini API.");const r=u(o,["durationSeconds"]);if(t!==void 0&&r!=null&&c(t,["parameters","durationSeconds"],r),u(o,["seed"])!==void 0)throw new Error("seed parameter is not supported in Gemini API.");const d=u(o,["aspectRatio"]);t!==void 0&&d!=null&&c(t,["parameters","aspectRatio"],d);const m=u(o,["resolution"]);t!==void 0&&m!=null&&c(t,["parameters","resolution"],m);const g=u(o,["personGeneration"]);if(t!==void 0&&g!=null&&c(t,["parameters","personGeneration"],g),u(o,["pubsubTopic"])!==void 0)throw new Error("pubsubTopic parameter is not supported in Gemini API.");const y=u(o,["negativePrompt"]);t!==void 0&&y!=null&&c(t,["parameters","negativePrompt"],y);const h=u(o,["enhancePrompt"]);if(t!==void 0&&h!=null&&c(t,["parameters","enhancePrompt"],h),u(o,["generateAudio"])!==void 0)throw new Error("generateAudio parameter is not supported in Gemini API.");const v=u(o,["lastFrame"]);t!==void 0&&v!=null&&c(t,["instances[0]","lastFrame"],Bs(v));const T=u(o,["referenceImages"]);if(t!==void 0&&T!=null){let E=T;Array.isArray(E)&&(E=E.map(_=>Y_(_))),c(t,["instances[0]","referenceImages"],E)}if(u(o,["mask"])!==void 0)throw new Error("mask parameter is not supported in Gemini API.");if(u(o,["compressionQuality"])!==void 0)throw new Error("compressionQuality parameter is not supported in Gemini API.");return l}function FC(o,t){const l={},s=u(o,["numberOfVideos"]);t!==void 0&&s!=null&&c(t,["parameters","sampleCount"],s);const r=u(o,["outputGcsUri"]);t!==void 0&&r!=null&&c(t,["parameters","storageUri"],r);const d=u(o,["fps"]);t!==void 0&&d!=null&&c(t,["parameters","fps"],d);const m=u(o,["durationSeconds"]);t!==void 0&&m!=null&&c(t,["parameters","durationSeconds"],m);const g=u(o,["seed"]);t!==void 0&&g!=null&&c(t,["parameters","seed"],g);const y=u(o,["aspectRatio"]);t!==void 0&&y!=null&&c(t,["parameters","aspectRatio"],y);const h=u(o,["resolution"]);t!==void 0&&h!=null&&c(t,["parameters","resolution"],h);const v=u(o,["personGeneration"]);t!==void 0&&v!=null&&c(t,["parameters","personGeneration"],v);const T=u(o,["pubsubTopic"]);t!==void 0&&T!=null&&c(t,["parameters","pubsubTopic"],T);const E=u(o,["negativePrompt"]);t!==void 0&&E!=null&&c(t,["parameters","negativePrompt"],E);const _=u(o,["enhancePrompt"]);t!==void 0&&_!=null&&c(t,["parameters","enhancePrompt"],_);const k=u(o,["generateAudio"]);t!==void 0&&k!=null&&c(t,["parameters","generateAudio"],k);const M=u(o,["lastFrame"]);t!==void 0&&M!=null&&c(t,["instances[0]","lastFrame"],Ft(M));const I=u(o,["referenceImages"]);if(t!==void 0&&I!=null){let B=I;Array.isArray(B)&&(B=B.map(K=>J_(K))),c(t,["instances[0]","referenceImages"],B)}const U=u(o,["mask"]);t!==void 0&&U!=null&&c(t,["instances[0]","mask"],F_(U));const V=u(o,["compressionQuality"]);return t!==void 0&&V!=null&&c(t,["parameters","compressionQuality"],V),l}function YC(o){const t={},l=u(o,["name"]);l!=null&&c(t,["name"],l);const s=u(o,["metadata"]);s!=null&&c(t,["metadata"],s);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["response","generateVideoResponse"]);return m!=null&&c(t,["response"],QC(m)),t}function JC(o){const t={},l=u(o,["name"]);l!=null&&c(t,["name"],l);const s=u(o,["metadata"]);s!=null&&c(t,["metadata"],s);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["response"]);return m!=null&&c(t,["response"],WC(m)),t}function KC(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["_url","model"],Ce(o,s));const r=u(t,["prompt"]);r!=null&&c(l,["instances[0]","prompt"],r);const d=u(t,["image"]);d!=null&&c(l,["instances[0]","image"],Bs(d));const m=u(t,["video"]);m!=null&&c(l,["instances[0]","video"],ag(m));const g=u(t,["source"]);g!=null&&ZC(g,l);const y=u(t,["config"]);return y!=null&&VC(y,l),l}function XC(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["_url","model"],Ce(o,s));const r=u(t,["prompt"]);r!=null&&c(l,["instances[0]","prompt"],r);const d=u(t,["image"]);d!=null&&c(l,["instances[0]","image"],Ft(d));const m=u(t,["video"]);m!=null&&c(l,["instances[0]","video"],rg(m));const g=u(t,["source"]);g!=null&&$C(g,l);const y=u(t,["config"]);return y!=null&&FC(y,l),l}function QC(o){const t={},l=u(o,["generatedSamples"]);if(l!=null){let d=l;Array.isArray(d)&&(d=d.map(m=>t_(m))),c(t,["generatedVideos"],d)}const s=u(o,["raiMediaFilteredCount"]);s!=null&&c(t,["raiMediaFilteredCount"],s);const r=u(o,["raiMediaFilteredReasons"]);return r!=null&&c(t,["raiMediaFilteredReasons"],r),t}function WC(o){const t={},l=u(o,["videos"]);if(l!=null){let d=l;Array.isArray(d)&&(d=d.map(m=>n_(m))),c(t,["generatedVideos"],d)}const s=u(o,["raiMediaFilteredCount"]);s!=null&&c(t,["raiMediaFilteredCount"],s);const r=u(o,["raiMediaFilteredReasons"]);return r!=null&&c(t,["raiMediaFilteredReasons"],r),t}function ZC(o,t){const l={},s=u(o,["prompt"]);t!==void 0&&s!=null&&c(t,["instances[0]","prompt"],s);const r=u(o,["image"]);t!==void 0&&r!=null&&c(t,["instances[0]","image"],Bs(r));const d=u(o,["video"]);return t!==void 0&&d!=null&&c(t,["instances[0]","video"],ag(d)),l}function $C(o,t){const l={},s=u(o,["prompt"]);t!==void 0&&s!=null&&c(t,["instances[0]","prompt"],s);const r=u(o,["image"]);t!==void 0&&r!=null&&c(t,["instances[0]","image"],Ft(r));const d=u(o,["video"]);return t!==void 0&&d!=null&&c(t,["instances[0]","video"],rg(d)),l}function jC(o){const t={},l=u(o,["_self"]);l!=null&&c(t,["image"],c_(l));const s=u(o,["raiFilteredReason"]);s!=null&&c(t,["raiFilteredReason"],s);const r=u(o,["_self"]);return r!=null&&c(t,["safetyAttributes"],ig(r)),t}function Gs(o){const t={},l=u(o,["_self"]);l!=null&&c(t,["image"],og(l));const s=u(o,["raiFilteredReason"]);s!=null&&c(t,["raiFilteredReason"],s);const r=u(o,["_self"]);r!=null&&c(t,["safetyAttributes"],lg(r));const d=u(o,["prompt"]);return d!=null&&c(t,["enhancedPrompt"],d),t}function e_(o){const t={},l=u(o,["_self"]);l!=null&&c(t,["mask"],og(l));const s=u(o,["labels"]);if(s!=null){let r=s;Array.isArray(r)&&(r=r.map(d=>d)),c(t,["labels"],r)}return t}function t_(o){const t={},l=u(o,["video"]);return l!=null&&c(t,["video"],q_(l)),t}function n_(o){const t={},l=u(o,["_self"]);return l!=null&&c(t,["video"],V_(l)),t}function o_(o){const t={},l=u(o,["modelSelectionConfig"]);l!=null&&c(t,["modelConfig"],l);const s=u(o,["responseJsonSchema"]);s!=null&&c(t,["responseJsonSchema"],s);const r=u(o,["audioTimestamp"]);r!=null&&c(t,["audioTimestamp"],r);const d=u(o,["candidateCount"]);d!=null&&c(t,["candidateCount"],d);const m=u(o,["enableAffectiveDialog"]);m!=null&&c(t,["enableAffectiveDialog"],m);const g=u(o,["frequencyPenalty"]);g!=null&&c(t,["frequencyPenalty"],g);const y=u(o,["logprobs"]);y!=null&&c(t,["logprobs"],y);const h=u(o,["maxOutputTokens"]);h!=null&&c(t,["maxOutputTokens"],h);const v=u(o,["mediaResolution"]);v!=null&&c(t,["mediaResolution"],v);const T=u(o,["presencePenalty"]);T!=null&&c(t,["presencePenalty"],T);const E=u(o,["responseLogprobs"]);E!=null&&c(t,["responseLogprobs"],E);const _=u(o,["responseMimeType"]);_!=null&&c(t,["responseMimeType"],_);const k=u(o,["responseModalities"]);k!=null&&c(t,["responseModalities"],k);const M=u(o,["responseSchema"]);M!=null&&c(t,["responseSchema"],M);const I=u(o,["routingConfig"]);I!=null&&c(t,["routingConfig"],I);const U=u(o,["seed"]);U!=null&&c(t,["seed"],U);const V=u(o,["speechConfig"]);V!=null&&c(t,["speechConfig"],V);const B=u(o,["stopSequences"]);B!=null&&c(t,["stopSequences"],B);const K=u(o,["temperature"]);K!=null&&c(t,["temperature"],K);const $=u(o,["thinkingConfig"]);$!=null&&c(t,["thinkingConfig"],$);const ee=u(o,["topK"]);ee!=null&&c(t,["topK"],ee);const J=u(o,["topP"]);if(J!=null&&c(t,["topP"],J),u(o,["enableEnhancedCivicAnswers"])!==void 0)throw new Error("enableEnhancedCivicAnswers parameter is not supported in Vertex AI.");return t}function i_(o,t){const l={},s=u(t,["model"]);return s!=null&&c(l,["_url","name"],Ce(o,s)),l}function l_(o,t){const l={},s=u(t,["model"]);return s!=null&&c(l,["_url","name"],Ce(o,s)),l}function s_(o){const t={};if(u(o,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const l=u(o,["enableWidget"]);return l!=null&&c(t,["enableWidget"],l),t}function a_(o){const t={};if(u(o,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(u(o,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const l=u(o,["timeRangeFilter"]);return l!=null&&c(t,["timeRangeFilter"],l),t}function r_(o){const t={},l=u(o,["aspectRatio"]);l!=null&&c(t,["aspectRatio"],l);const s=u(o,["imageSize"]);if(s!=null&&c(t,["imageSize"],s),u(o,["outputMimeType"])!==void 0)throw new Error("outputMimeType parameter is not supported in Gemini API.");if(u(o,["outputCompressionQuality"])!==void 0)throw new Error("outputCompressionQuality parameter is not supported in Gemini API.");return t}function u_(o){const t={},l=u(o,["aspectRatio"]);l!=null&&c(t,["aspectRatio"],l);const s=u(o,["imageSize"]);s!=null&&c(t,["imageSize"],s);const r=u(o,["outputMimeType"]);r!=null&&c(t,["imageOutputOptions","mimeType"],r);const d=u(o,["outputCompressionQuality"]);return d!=null&&c(t,["imageOutputOptions","compressionQuality"],d),t}function c_(o){const t={},l=u(o,["bytesBase64Encoded"]);l!=null&&c(t,["imageBytes"],Vn(l));const s=u(o,["mimeType"]);return s!=null&&c(t,["mimeType"],s),t}function og(o){const t={},l=u(o,["gcsUri"]);l!=null&&c(t,["gcsUri"],l);const s=u(o,["bytesBase64Encoded"]);s!=null&&c(t,["imageBytes"],Vn(s));const r=u(o,["mimeType"]);return r!=null&&c(t,["mimeType"],r),t}function Bs(o){const t={};if(u(o,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");const l=u(o,["imageBytes"]);l!=null&&c(t,["bytesBase64Encoded"],Vn(l));const s=u(o,["mimeType"]);return s!=null&&c(t,["mimeType"],s),t}function Ft(o){const t={},l=u(o,["gcsUri"]);l!=null&&c(t,["gcsUri"],l);const s=u(o,["imageBytes"]);s!=null&&c(t,["bytesBase64Encoded"],Vn(s));const r=u(o,["mimeType"]);return r!=null&&c(t,["mimeType"],r),t}function d_(o,t,l){const s={},r=u(t,["pageSize"]);l!==void 0&&r!=null&&c(l,["_query","pageSize"],r);const d=u(t,["pageToken"]);l!==void 0&&d!=null&&c(l,["_query","pageToken"],d);const m=u(t,["filter"]);l!==void 0&&m!=null&&c(l,["_query","filter"],m);const g=u(t,["queryBase"]);return l!==void 0&&g!=null&&c(l,["_url","models_url"],Wh(o,g)),s}function f_(o,t,l){const s={},r=u(t,["pageSize"]);l!==void 0&&r!=null&&c(l,["_query","pageSize"],r);const d=u(t,["pageToken"]);l!==void 0&&d!=null&&c(l,["_query","pageToken"],d);const m=u(t,["filter"]);l!==void 0&&m!=null&&c(l,["_query","filter"],m);const g=u(t,["queryBase"]);return l!==void 0&&g!=null&&c(l,["_url","models_url"],Wh(o,g)),s}function p_(o,t){const l={},s=u(t,["config"]);return s!=null&&d_(o,s,l),l}function m_(o,t){const l={},s=u(t,["config"]);return s!=null&&f_(o,s,l),l}function h_(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["nextPageToken"]);s!=null&&c(t,["nextPageToken"],s);const r=u(o,["_self"]);if(r!=null){let d=Zh(r);Array.isArray(d)&&(d=d.map(m=>Cu(m))),c(t,["models"],d)}return t}function g_(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["nextPageToken"]);s!=null&&c(t,["nextPageToken"],s);const r=u(o,["_self"]);if(r!=null){let d=Zh(r);Array.isArray(d)&&(d=d.map(m=>_u(m))),c(t,["models"],d)}return t}function y_(o){const t={},l=u(o,["maskMode"]);l!=null&&c(t,["maskMode"],l);const s=u(o,["segmentationClasses"]);s!=null&&c(t,["maskClasses"],s);const r=u(o,["maskDilation"]);return r!=null&&c(t,["dilation"],r),t}function Cu(o){const t={},l=u(o,["name"]);l!=null&&c(t,["name"],l);const s=u(o,["displayName"]);s!=null&&c(t,["displayName"],s);const r=u(o,["description"]);r!=null&&c(t,["description"],r);const d=u(o,["version"]);d!=null&&c(t,["version"],d);const m=u(o,["_self"]);m!=null&&c(t,["tunedModelInfo"],U_(m));const g=u(o,["inputTokenLimit"]);g!=null&&c(t,["inputTokenLimit"],g);const y=u(o,["outputTokenLimit"]);y!=null&&c(t,["outputTokenLimit"],y);const h=u(o,["supportedGenerationMethods"]);h!=null&&c(t,["supportedActions"],h);const v=u(o,["temperature"]);v!=null&&c(t,["temperature"],v);const T=u(o,["maxTemperature"]);T!=null&&c(t,["maxTemperature"],T);const E=u(o,["topP"]);E!=null&&c(t,["topP"],E);const _=u(o,["topK"]);_!=null&&c(t,["topK"],_);const k=u(o,["thinking"]);return k!=null&&c(t,["thinking"],k),t}function _u(o){const t={},l=u(o,["name"]);l!=null&&c(t,["name"],l);const s=u(o,["displayName"]);s!=null&&c(t,["displayName"],s);const r=u(o,["description"]);r!=null&&c(t,["description"],r);const d=u(o,["versionId"]);d!=null&&c(t,["version"],d);const m=u(o,["deployedModels"]);if(m!=null){let T=m;Array.isArray(T)&&(T=T.map(E=>MC(E))),c(t,["endpoints"],T)}const g=u(o,["labels"]);g!=null&&c(t,["labels"],g);const y=u(o,["_self"]);y!=null&&c(t,["tunedModelInfo"],P_(y));const h=u(o,["defaultCheckpointId"]);h!=null&&c(t,["defaultCheckpointId"],h);const v=u(o,["checkpoints"]);if(v!=null){let T=v;Array.isArray(T)&&(T=T.map(E=>E)),c(t,["checkpoints"],T)}return t}function v_(o){const t={},l=u(o,["mediaResolution"]);l!=null&&c(t,["mediaResolution"],l);const s=u(o,["codeExecutionResult"]);s!=null&&c(t,["codeExecutionResult"],s);const r=u(o,["executableCode"]);r!=null&&c(t,["executableCode"],r);const d=u(o,["fileData"]);d!=null&&c(t,["fileData"],wC(d));const m=u(o,["functionCall"]);m!=null&&c(t,["functionCall"],DC(m));const g=u(o,["functionResponse"]);g!=null&&c(t,["functionResponse"],g);const y=u(o,["inlineData"]);y!=null&&c(t,["inlineData"],oC(y));const h=u(o,["text"]);h!=null&&c(t,["text"],h);const v=u(o,["thought"]);v!=null&&c(t,["thought"],v);const T=u(o,["thoughtSignature"]);T!=null&&c(t,["thoughtSignature"],T);const E=u(o,["videoMetadata"]);return E!=null&&c(t,["videoMetadata"],E),t}function S_(o){const t={},l=u(o,["productImage"]);return l!=null&&c(t,["image"],Ft(l)),t}function T_(o,t){const l={},s=u(o,["numberOfImages"]);t!==void 0&&s!=null&&c(t,["parameters","sampleCount"],s);const r=u(o,["baseSteps"]);t!==void 0&&r!=null&&c(t,["parameters","baseSteps"],r);const d=u(o,["outputGcsUri"]);t!==void 0&&d!=null&&c(t,["parameters","storageUri"],d);const m=u(o,["seed"]);t!==void 0&&m!=null&&c(t,["parameters","seed"],m);const g=u(o,["safetyFilterLevel"]);t!==void 0&&g!=null&&c(t,["parameters","safetySetting"],g);const y=u(o,["personGeneration"]);t!==void 0&&y!=null&&c(t,["parameters","personGeneration"],y);const h=u(o,["addWatermark"]);t!==void 0&&h!=null&&c(t,["parameters","addWatermark"],h);const v=u(o,["outputMimeType"]);t!==void 0&&v!=null&&c(t,["parameters","outputOptions","mimeType"],v);const T=u(o,["outputCompressionQuality"]);t!==void 0&&T!=null&&c(t,["parameters","outputOptions","compressionQuality"],T);const E=u(o,["enhancePrompt"]);t!==void 0&&E!=null&&c(t,["parameters","enhancePrompt"],E);const _=u(o,["labels"]);return t!==void 0&&_!=null&&c(t,["labels"],_),l}function E_(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["_url","model"],Ce(o,s));const r=u(t,["source"]);r!=null&&__(r,l);const d=u(t,["config"]);return d!=null&&T_(d,l),l}function C_(o){const t={},l=u(o,["predictions"]);if(l!=null){let s=l;Array.isArray(s)&&(s=s.map(r=>Gs(r))),c(t,["generatedImages"],s)}return t}function __(o,t){const l={},s=u(o,["prompt"]);t!==void 0&&s!=null&&c(t,["instances[0]","prompt"],s);const r=u(o,["personImage"]);t!==void 0&&r!=null&&c(t,["instances[0]","personImage","image"],Ft(r));const d=u(o,["productImages"]);if(t!==void 0&&d!=null){let m=d;Array.isArray(m)&&(m=m.map(g=>S_(g))),c(t,["instances[0]","productImages"],m)}return l}function A_(o){const t={},l=u(o,["referenceImage"]);l!=null&&c(t,["referenceImage"],Ft(l));const s=u(o,["referenceId"]);s!=null&&c(t,["referenceId"],s);const r=u(o,["referenceType"]);r!=null&&c(t,["referenceType"],r);const d=u(o,["maskImageConfig"]);d!=null&&c(t,["maskImageConfig"],y_(d));const m=u(o,["controlImageConfig"]);m!=null&&c(t,["controlImageConfig"],cC(m));const g=u(o,["styleImageConfig"]);g!=null&&c(t,["styleImageConfig"],g);const y=u(o,["subjectImageConfig"]);return y!=null&&c(t,["subjectImageConfig"],y),t}function ig(o){const t={},l=u(o,["safetyAttributes","categories"]);l!=null&&c(t,["categories"],l);const s=u(o,["safetyAttributes","scores"]);s!=null&&c(t,["scores"],s);const r=u(o,["contentType"]);return r!=null&&c(t,["contentType"],r),t}function lg(o){const t={},l=u(o,["safetyAttributes","categories"]);l!=null&&c(t,["categories"],l);const s=u(o,["safetyAttributes","scores"]);s!=null&&c(t,["scores"],s);const r=u(o,["contentType"]);return r!=null&&c(t,["contentType"],r),t}function b_(o){const t={},l=u(o,["category"]);if(l!=null&&c(t,["category"],l),u(o,["method"])!==void 0)throw new Error("method parameter is not supported in Gemini API.");const s=u(o,["threshold"]);return s!=null&&c(t,["threshold"],s),t}function x_(o){const t={},l=u(o,["image"]);return l!=null&&c(t,["image"],Ft(l)),t}function R_(o,t){const l={},s=u(o,["mode"]);t!==void 0&&s!=null&&c(t,["parameters","mode"],s);const r=u(o,["maxPredictions"]);t!==void 0&&r!=null&&c(t,["parameters","maxPredictions"],r);const d=u(o,["confidenceThreshold"]);t!==void 0&&d!=null&&c(t,["parameters","confidenceThreshold"],d);const m=u(o,["maskDilation"]);t!==void 0&&m!=null&&c(t,["parameters","maskDilation"],m);const g=u(o,["binaryColorThreshold"]);t!==void 0&&g!=null&&c(t,["parameters","binaryColorThreshold"],g);const y=u(o,["labels"]);return t!==void 0&&y!=null&&c(t,["labels"],y),l}function N_(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["_url","model"],Ce(o,s));const r=u(t,["source"]);r!=null&&M_(r,l);const d=u(t,["config"]);return d!=null&&R_(d,l),l}function I_(o){const t={},l=u(o,["predictions"]);if(l!=null){let s=l;Array.isArray(s)&&(s=s.map(r=>e_(r))),c(t,["generatedMasks"],s)}return t}function M_(o,t){const l={},s=u(o,["prompt"]);t!==void 0&&s!=null&&c(t,["instances[0]","prompt"],s);const r=u(o,["image"]);t!==void 0&&r!=null&&c(t,["instances[0]","image"],Ft(r));const d=u(o,["scribbleImage"]);return t!==void 0&&d!=null&&c(t,["instances[0]","scribble"],x_(d)),l}function w_(o){const t={},l=u(o,["functionCallingConfig"]);l!=null&&c(t,["functionCallingConfig"],UC(l));const s=u(o,["retrievalConfig"]);return s!=null&&c(t,["retrievalConfig"],s),t}function D_(o){const t={},l=u(o,["functionDeclarations"]);if(l!=null){let v=l;Array.isArray(v)&&(v=v.map(T=>T)),c(t,["functionDeclarations"],v)}if(u(o,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const s=u(o,["googleSearchRetrieval"]);s!=null&&c(t,["googleSearchRetrieval"],s);const r=u(o,["computerUse"]);r!=null&&c(t,["computerUse"],r);const d=u(o,["fileSearch"]);d!=null&&c(t,["fileSearch"],d);const m=u(o,["codeExecution"]);if(m!=null&&c(t,["codeExecution"],m),u(o,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const g=u(o,["googleMaps"]);g!=null&&c(t,["googleMaps"],s_(g));const y=u(o,["googleSearch"]);y!=null&&c(t,["googleSearch"],a_(y));const h=u(o,["urlContext"]);return h!=null&&c(t,["urlContext"],h),t}function sg(o){const t={},l=u(o,["functionDeclarations"]);if(l!=null){let T=l;Array.isArray(T)&&(T=T.map(E=>PC(E))),c(t,["functionDeclarations"],T)}const s=u(o,["retrieval"]);s!=null&&c(t,["retrieval"],s);const r=u(o,["googleSearchRetrieval"]);r!=null&&c(t,["googleSearchRetrieval"],r);const d=u(o,["computerUse"]);if(d!=null&&c(t,["computerUse"],d),u(o,["fileSearch"])!==void 0)throw new Error("fileSearch parameter is not supported in Vertex AI.");const m=u(o,["codeExecution"]);m!=null&&c(t,["codeExecution"],m);const g=u(o,["enterpriseWebSearch"]);g!=null&&c(t,["enterpriseWebSearch"],g);const y=u(o,["googleMaps"]);y!=null&&c(t,["googleMaps"],y);const h=u(o,["googleSearch"]);h!=null&&c(t,["googleSearch"],h);const v=u(o,["urlContext"]);return v!=null&&c(t,["urlContext"],v),t}function U_(o){const t={},l=u(o,["baseModel"]);l!=null&&c(t,["baseModel"],l);const s=u(o,["createTime"]);s!=null&&c(t,["createTime"],s);const r=u(o,["updateTime"]);return r!=null&&c(t,["updateTime"],r),t}function P_(o){const t={},l=u(o,["labels","google-vertex-llm-tuning-base-model-id"]);l!=null&&c(t,["baseModel"],l);const s=u(o,["createTime"]);s!=null&&c(t,["createTime"],s);const r=u(o,["updateTime"]);return r!=null&&c(t,["updateTime"],r),t}function k_(o,t){const l={},s=u(o,["displayName"]);t!==void 0&&s!=null&&c(t,["displayName"],s);const r=u(o,["description"]);t!==void 0&&r!=null&&c(t,["description"],r);const d=u(o,["defaultCheckpointId"]);return t!==void 0&&d!=null&&c(t,["defaultCheckpointId"],d),l}function L_(o,t){const l={},s=u(o,["displayName"]);t!==void 0&&s!=null&&c(t,["displayName"],s);const r=u(o,["description"]);t!==void 0&&r!=null&&c(t,["description"],r);const d=u(o,["defaultCheckpointId"]);return t!==void 0&&d!=null&&c(t,["defaultCheckpointId"],d),l}function H_(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["_url","name"],Ce(o,s));const r=u(t,["config"]);return r!=null&&k_(r,l),l}function G_(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["_url","model"],Ce(o,s));const r=u(t,["config"]);return r!=null&&L_(r,l),l}function B_(o,t){const l={},s=u(o,["outputGcsUri"]);t!==void 0&&s!=null&&c(t,["parameters","storageUri"],s);const r=u(o,["safetyFilterLevel"]);t!==void 0&&r!=null&&c(t,["parameters","safetySetting"],r);const d=u(o,["personGeneration"]);t!==void 0&&d!=null&&c(t,["parameters","personGeneration"],d);const m=u(o,["includeRaiReason"]);t!==void 0&&m!=null&&c(t,["parameters","includeRaiReason"],m);const g=u(o,["outputMimeType"]);t!==void 0&&g!=null&&c(t,["parameters","outputOptions","mimeType"],g);const y=u(o,["outputCompressionQuality"]);t!==void 0&&y!=null&&c(t,["parameters","outputOptions","compressionQuality"],y);const h=u(o,["enhanceInputImage"]);t!==void 0&&h!=null&&c(t,["parameters","upscaleConfig","enhanceInputImage"],h);const v=u(o,["imagePreservationFactor"]);t!==void 0&&v!=null&&c(t,["parameters","upscaleConfig","imagePreservationFactor"],v);const T=u(o,["labels"]);t!==void 0&&T!=null&&c(t,["labels"],T);const E=u(o,["numberOfImages"]);t!==void 0&&E!=null&&c(t,["parameters","sampleCount"],E);const _=u(o,["mode"]);return t!==void 0&&_!=null&&c(t,["parameters","mode"],_),l}function z_(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["_url","model"],Ce(o,s));const r=u(t,["image"]);r!=null&&c(l,["instances[0]","image"],Ft(r));const d=u(t,["upscaleFactor"]);d!=null&&c(l,["parameters","upscaleConfig","upscaleFactor"],d);const m=u(t,["config"]);return m!=null&&B_(m,l),l}function O_(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["predictions"]);if(s!=null){let r=s;Array.isArray(r)&&(r=r.map(d=>Gs(d))),c(t,["generatedImages"],r)}return t}function q_(o){const t={},l=u(o,["uri"]);l!=null&&c(t,["uri"],l);const s=u(o,["encodedVideo"]);s!=null&&c(t,["videoBytes"],Vn(s));const r=u(o,["encoding"]);return r!=null&&c(t,["mimeType"],r),t}function V_(o){const t={},l=u(o,["gcsUri"]);l!=null&&c(t,["uri"],l);const s=u(o,["bytesBase64Encoded"]);s!=null&&c(t,["videoBytes"],Vn(s));const r=u(o,["mimeType"]);return r!=null&&c(t,["mimeType"],r),t}function F_(o){const t={},l=u(o,["image"]);l!=null&&c(t,["_self"],Ft(l));const s=u(o,["maskMode"]);return s!=null&&c(t,["maskMode"],s),t}function Y_(o){const t={},l=u(o,["image"]);l!=null&&c(t,["image"],Bs(l));const s=u(o,["referenceType"]);return s!=null&&c(t,["referenceType"],s),t}function J_(o){const t={},l=u(o,["image"]);l!=null&&c(t,["image"],Ft(l));const s=u(o,["referenceType"]);return s!=null&&c(t,["referenceType"],s),t}function ag(o){const t={},l=u(o,["uri"]);l!=null&&c(t,["uri"],l);const s=u(o,["videoBytes"]);s!=null&&c(t,["encodedVideo"],Vn(s));const r=u(o,["mimeType"]);return r!=null&&c(t,["encoding"],r),t}function rg(o){const t={},l=u(o,["uri"]);l!=null&&c(t,["gcsUri"],l);const s=u(o,["videoBytes"]);s!=null&&c(t,["bytesBase64Encoded"],Vn(s));const r=u(o,["mimeType"]);return r!=null&&c(t,["mimeType"],r),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function K_(o,t){const l={},s=u(o,["displayName"]);return t!==void 0&&s!=null&&c(t,["displayName"],s),l}function X_(o){const t={},l=u(o,["config"]);return l!=null&&K_(l,t),t}function Q_(o,t){const l={},s=u(o,["force"]);return t!==void 0&&s!=null&&c(t,["_query","force"],s),l}function W_(o){const t={},l=u(o,["name"]);l!=null&&c(t,["_url","name"],l);const s=u(o,["config"]);return s!=null&&Q_(s,t),t}function Z_(o){const t={},l=u(o,["name"]);return l!=null&&c(t,["_url","name"],l),t}function $_(o,t){const l={},s=u(o,["customMetadata"]);if(t!==void 0&&s!=null){let d=s;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["customMetadata"],d)}const r=u(o,["chunkingConfig"]);return t!==void 0&&r!=null&&c(t,["chunkingConfig"],r),l}function j_(o){const t={},l=u(o,["name"]);l!=null&&c(t,["name"],l);const s=u(o,["metadata"]);s!=null&&c(t,["metadata"],s);const r=u(o,["done"]);r!=null&&c(t,["done"],r);const d=u(o,["error"]);d!=null&&c(t,["error"],d);const m=u(o,["response"]);return m!=null&&c(t,["response"],tA(m)),t}function eA(o){const t={},l=u(o,["fileSearchStoreName"]);l!=null&&c(t,["_url","file_search_store_name"],l);const s=u(o,["fileName"]);s!=null&&c(t,["fileName"],s);const r=u(o,["config"]);return r!=null&&$_(r,t),t}function tA(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["parent"]);s!=null&&c(t,["parent"],s);const r=u(o,["documentName"]);return r!=null&&c(t,["documentName"],r),t}function nA(o,t){const l={},s=u(o,["pageSize"]);t!==void 0&&s!=null&&c(t,["_query","pageSize"],s);const r=u(o,["pageToken"]);return t!==void 0&&r!=null&&c(t,["_query","pageToken"],r),l}function oA(o){const t={},l=u(o,["config"]);return l!=null&&nA(l,t),t}function iA(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["nextPageToken"]);s!=null&&c(t,["nextPageToken"],s);const r=u(o,["fileSearchStores"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["fileSearchStores"],d)}return t}function ug(o,t){const l={},s=u(o,["mimeType"]);t!==void 0&&s!=null&&c(t,["mimeType"],s);const r=u(o,["displayName"]);t!==void 0&&r!=null&&c(t,["displayName"],r);const d=u(o,["customMetadata"]);if(t!==void 0&&d!=null){let g=d;Array.isArray(g)&&(g=g.map(y=>y)),c(t,["customMetadata"],g)}const m=u(o,["chunkingConfig"]);return t!==void 0&&m!=null&&c(t,["chunkingConfig"],m),l}function lA(o){const t={},l=u(o,["fileSearchStoreName"]);l!=null&&c(t,["_url","file_search_store_name"],l);const s=u(o,["config"]);return s!=null&&ug(s,t),t}function sA(o){const t={},l=u(o,["sdkHttpResponse"]);return l!=null&&c(t,["sdkHttpResponse"],l),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const aA="Content-Type",rA="X-Server-Timeout",uA="User-Agent",Au="x-goog-api-client",cA="1.34.0",dA=`google-genai-sdk/${cA}`,fA="v1beta1",pA="v1beta";class mA{constructor(t){var l,s;this.clientOptions=Object.assign(Object.assign({},t),{project:t.project,location:t.location,apiKey:t.apiKey,vertexai:t.vertexai});const r={};this.clientOptions.vertexai?(r.apiVersion=(l=this.clientOptions.apiVersion)!==null&&l!==void 0?l:fA,r.baseUrl=this.baseUrlFromProjectLocation(),this.normalizeAuthParameters()):(r.apiVersion=(s=this.clientOptions.apiVersion)!==null&&s!==void 0?s:pA,r.baseUrl="https://generativelanguage.googleapis.com/"),r.headers=this.getDefaultHeaders(),this.clientOptions.httpOptions=r,t.httpOptions&&(this.clientOptions.httpOptions=this.patchHttpOptions(r,t.httpOptions))}baseUrlFromProjectLocation(){return this.clientOptions.project&&this.clientOptions.location&&this.clientOptions.location!=="global"?`https://${this.clientOptions.location}-aiplatform.googleapis.com/`:"https://aiplatform.googleapis.com/"}normalizeAuthParameters(){if(this.clientOptions.project&&this.clientOptions.location){this.clientOptions.apiKey=void 0;return}this.clientOptions.project=void 0,this.clientOptions.location=void 0}isVertexAI(){var t;return(t=this.clientOptions.vertexai)!==null&&t!==void 0?t:!1}getProject(){return this.clientOptions.project}getLocation(){return this.clientOptions.location}async getAuthHeaders(){const t=new Headers;return await this.clientOptions.auth.addAuthHeaders(t),t}getApiVersion(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.apiVersion!==void 0)return this.clientOptions.httpOptions.apiVersion;throw new Error("API version is not set.")}getBaseUrl(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.baseUrl!==void 0)return this.clientOptions.httpOptions.baseUrl;throw new Error("Base URL is not set.")}getRequestUrl(){return this.getRequestUrlInternal(this.clientOptions.httpOptions)}getHeaders(){if(this.clientOptions.httpOptions&&this.clientOptions.httpOptions.headers!==void 0)return this.clientOptions.httpOptions.headers;throw new Error("Headers are not set.")}getRequestUrlInternal(t){if(!t||t.baseUrl===void 0||t.apiVersion===void 0)throw new Error("HTTP options are not correctly set.");const s=[t.baseUrl.endsWith("/")?t.baseUrl.slice(0,-1):t.baseUrl];return t.apiVersion&&t.apiVersion!==""&&s.push(t.apiVersion),s.join("/")}getBaseResourcePath(){return`projects/${this.clientOptions.project}/locations/${this.clientOptions.location}`}getApiKey(){return this.clientOptions.apiKey}getWebsocketBaseUrl(){const t=this.getBaseUrl(),l=new URL(t);return l.protocol=l.protocol=="http:"?"ws":"wss",l.toString()}setBaseUrl(t){if(this.clientOptions.httpOptions)this.clientOptions.httpOptions.baseUrl=t;else throw new Error("HTTP options are not correctly set.")}constructUrl(t,l,s){const r=[this.getRequestUrlInternal(l)];return s&&r.push(this.getBaseResourcePath()),t!==""&&r.push(t),new URL(`${r.join("/")}`)}shouldPrependVertexProjectPath(t){return!(this.clientOptions.apiKey||!this.clientOptions.vertexai||t.path.startsWith("projects/")||t.httpMethod==="GET"&&t.path.startsWith("publishers/google/models"))}async request(t){let l=this.clientOptions.httpOptions;t.httpOptions&&(l=this.patchHttpOptions(this.clientOptions.httpOptions,t.httpOptions));const s=this.shouldPrependVertexProjectPath(t),r=this.constructUrl(t.path,l,s);if(t.queryParams)for(const[m,g]of Object.entries(t.queryParams))r.searchParams.append(m,String(g));let d={};if(t.httpMethod==="GET"){if(t.body&&t.body!=="{}")throw new Error("Request body should be empty for GET request, but got non empty request body")}else d.body=t.body;return d=await this.includeExtraHttpOptionsToRequestInit(d,l,r.toString(),t.abortSignal),this.unaryApiCall(r,d,t.httpMethod)}patchHttpOptions(t,l){const s=JSON.parse(JSON.stringify(t));for(const[r,d]of Object.entries(l))typeof d=="object"?s[r]=Object.assign(Object.assign({},s[r]),d):d!==void 0&&(s[r]=d);return s}async requestStream(t){let l=this.clientOptions.httpOptions;t.httpOptions&&(l=this.patchHttpOptions(this.clientOptions.httpOptions,t.httpOptions));const s=this.shouldPrependVertexProjectPath(t),r=this.constructUrl(t.path,l,s);(!r.searchParams.has("alt")||r.searchParams.get("alt")!=="sse")&&r.searchParams.set("alt","sse");let d={};return d.body=t.body,d=await this.includeExtraHttpOptionsToRequestInit(d,l,r.toString(),t.abortSignal),this.streamApiCall(r,d,t.httpMethod)}async includeExtraHttpOptionsToRequestInit(t,l,s,r){if(l&&l.timeout||r){const d=new AbortController,m=d.signal;if(l.timeout&&(l==null?void 0:l.timeout)>0){const g=setTimeout(()=>d.abort(),l.timeout);g&&typeof g.unref=="function"&&g.unref()}r&&r.addEventListener("abort",()=>{d.abort()}),t.signal=m}return l&&l.extraBody!==null&&hA(t,l.extraBody),t.headers=await this.getHeadersInternal(l,s),t}async unaryApiCall(t,l,s){return this.apiCall(t.toString(),Object.assign(Object.assign({},l),{method:s})).then(async r=>(await Ah(r),new Su(r))).catch(r=>{throw r instanceof Error?r:new Error(JSON.stringify(r))})}async streamApiCall(t,l,s){return this.apiCall(t.toString(),Object.assign(Object.assign({},l),{method:s})).then(async r=>(await Ah(r),this.processStreamResponse(r))).catch(r=>{throw r instanceof Error?r:new Error(JSON.stringify(r))})}processStreamResponse(t){return qt(this,arguments,function*(){var s;const r=(s=t==null?void 0:t.body)===null||s===void 0?void 0:s.getReader(),d=new TextDecoder("utf-8");if(!r)throw new Error("Response body is empty");try{let m="";const g="data:",y=[`

`,"\r\r",`\r
\r
`];for(;;){const{done:h,value:v}=yield ae(r.read());if(h){if(m.trim().length>0)throw new Error("Incomplete JSON segment at the end");break}const T=d.decode(v,{stream:!0});try{const k=JSON.parse(T);if("error"in k){const M=JSON.parse(JSON.stringify(k.error)),I=M.status,U=M.code,V=`got status: ${I}. ${JSON.stringify(k)}`;if(U>=400&&U<600)throw new Ls({message:V,status:U})}}catch(k){if(k.name==="ApiError")throw k}m+=T;let E=-1,_=0;for(;;){E=-1,_=0;for(const I of y){const U=m.indexOf(I);U!==-1&&(E===-1||U<E)&&(E=U,_=I.length)}if(E===-1)break;const k=m.substring(0,E);m=m.substring(E+_);const M=k.trim();if(M.startsWith(g)){const I=M.substring(g.length).trim();try{const U=new Response(I,{headers:t==null?void 0:t.headers,status:t==null?void 0:t.status,statusText:t==null?void 0:t.statusText});yield yield ae(new Su(U))}catch(U){throw new Error(`exception parsing stream chunk ${I}. ${U}`)}}}}}finally{r.releaseLock()}})}async apiCall(t,l){return fetch(t,l).catch(s=>{throw new Error(`exception ${s} sending request`)})}getDefaultHeaders(){const t={},l=dA+" "+this.clientOptions.userAgentExtra;return t[uA]=l,t[Au]=l,t[aA]="application/json",t}async getHeadersInternal(t,l){const s=new Headers;if(t&&t.headers){for(const[r,d]of Object.entries(t.headers))s.append(r,d);t.timeout&&t.timeout>0&&s.append(rA,String(Math.ceil(t.timeout/1e3)))}return await this.clientOptions.auth.addAuthHeaders(s,l),s}getFileName(t){var l;let s="";return typeof t=="string"&&(s=t.replace(/[/\\]+$/,""),s=(l=s.split(/[/\\]/).pop())!==null&&l!==void 0?l:""),s}async uploadFile(t,l){var s;const r={};l!=null&&(r.mimeType=l.mimeType,r.name=l.name,r.displayName=l.displayName),r.name&&!r.name.startsWith("files/")&&(r.name=`files/${r.name}`);const d=this.clientOptions.uploader,m=await d.stat(t);r.sizeBytes=String(m.size);const g=(s=l==null?void 0:l.mimeType)!==null&&s!==void 0?s:m.type;if(g===void 0||g==="")throw new Error("Can not determine mimeType. Please provide mimeType in the config.");r.mimeType=g;const y={file:r},h=this.getFileName(t),v=Z("upload/v1beta/files",y._url),T=await this.fetchUploadUrl(v,r.sizeBytes,r.mimeType,h,y,l==null?void 0:l.httpOptions);return d.upload(t,T,this)}async uploadFileToFileSearchStore(t,l,s){var r;const d=this.clientOptions.uploader,m=await d.stat(l),g=String(m.size),y=(r=s==null?void 0:s.mimeType)!==null&&r!==void 0?r:m.type;if(y===void 0||y==="")throw new Error("Can not determine mimeType. Please provide mimeType in the config.");const h=`upload/v1beta/${t}:uploadToFileSearchStore`,v=this.getFileName(l),T={};s!=null&&ug(s,T);const E=await this.fetchUploadUrl(h,g,y,v,T,s==null?void 0:s.httpOptions);return d.uploadToFileSearchStore(l,E,this)}async downloadFile(t){await this.clientOptions.downloader.download(t,this)}async fetchUploadUrl(t,l,s,r,d,m){var g;let y={};m?y=m:y={apiVersion:"",headers:Object.assign({"Content-Type":"application/json","X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${l}`,"X-Goog-Upload-Header-Content-Type":`${s}`},r?{"X-Goog-Upload-File-Name":r}:{})};const h=await this.request({path:t,body:JSON.stringify(d),httpMethod:"POST",httpOptions:y});if(!h||!(h!=null&&h.headers))throw new Error("Server did not return an HttpResponse or the returned HttpResponse did not have headers.");const v=(g=h==null?void 0:h.headers)===null||g===void 0?void 0:g["x-goog-upload-url"];if(v===void 0)throw new Error("Failed to get upload url. Server did not return the x-google-upload-url in the headers");return v}}async function Ah(o){var t;if(o===void 0)throw new Error("response is undefined");if(!o.ok){const l=o.status;let s;!((t=o.headers.get("content-type"))===null||t===void 0)&&t.includes("application/json")?s=await o.json():s={error:{message:await o.text(),code:o.status,status:o.statusText}};const r=JSON.stringify(s);throw l>=400&&l<600?new Ls({message:r,status:l}):new Error(r)}}function hA(o,t){if(!t||Object.keys(t).length===0)return;if(o.body instanceof Blob){console.warn("includeExtraBodyToRequestInit: extraBody provided but current request body is a Blob. extraBody will be ignored as merging is not supported for Blob bodies.");return}let l={};if(typeof o.body=="string"&&o.body.length>0)try{const d=JSON.parse(o.body);if(typeof d=="object"&&d!==null&&!Array.isArray(d))l=d;else{console.warn("includeExtraBodyToRequestInit: Original request body is valid JSON but not a non-array object. Skip applying extraBody to the request body.");return}}catch{console.warn("includeExtraBodyToRequestInit: Original request body is not valid JSON. Skip applying extraBody to the request body.");return}function s(d,m){const g=Object.assign({},d);for(const y in m)if(Object.prototype.hasOwnProperty.call(m,y)){const h=m[y],v=g[y];h&&typeof h=="object"&&!Array.isArray(h)&&v&&typeof v=="object"&&!Array.isArray(v)?g[y]=s(v,h):(v&&h&&typeof v!=typeof h&&console.warn(`includeExtraBodyToRequestInit:deepMerge: Type mismatch for key "${y}". Original type: ${typeof v}, New type: ${typeof h}. Overwriting.`),g[y]=h)}return g}const r=s(l,t);o.body=JSON.stringify(r)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const gA="mcp_used/unknown";let yA=!1;function cg(o){for(const t of o)if(vA(t)||typeof t=="object"&&"inputSchema"in t)return!0;return yA}function dg(o){var t;const l=(t=o[Au])!==null&&t!==void 0?t:"";o[Au]=(l+` ${gA}`).trimStart()}function vA(o){return o!==null&&typeof o=="object"&&o instanceof Bu}function SA(o){return qt(this,arguments,function*(l,s=100){let r,d=0;for(;d<s;){const m=yield ae(l.listTools({cursor:r}));for(const g of m.tools)yield yield ae(g),d++;if(!m.nextCursor)break;r=m.nextCursor}})}class Bu{constructor(t=[],l){this.mcpTools=[],this.functionNameToMcpClient={},this.mcpClients=t,this.config=l}static create(t,l){return new Bu(t,l)}async initialize(){var t,l,s,r;if(this.mcpTools.length>0)return;const d={},m=[];for(const v of this.mcpClients)try{for(var g=!0,y=(l=void 0,Vt(SA(v))),h;h=await y.next(),t=h.done,!t;g=!0){r=h.value,g=!1;const T=r;m.push(T);const E=T.name;if(d[E])throw new Error(`Duplicate function name ${E} found in MCP tools. Please ensure function names are unique.`);d[E]=v}}catch(T){l={error:T}}finally{try{!g&&!t&&(s=y.return)&&await s.call(y)}finally{if(l)throw l.error}}this.mcpTools=m,this.functionNameToMcpClient=d}async tool(){return await this.initialize(),ZS(this.mcpTools,this.config)}async callTool(t){await this.initialize();const l=[];for(const s of t)if(s.name in this.functionNameToMcpClient){const r=this.functionNameToMcpClient[s.name];let d;this.config.timeout&&(d={timeout:this.config.timeout});const m=await r.callTool({name:s.name,arguments:s.args},void 0,d);l.push({functionResponse:{name:s.name,response:m.isError?{error:m}:m}})}return l}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function TA(o,t,l){const s=new VS;let r;l.data instanceof Blob?r=JSON.parse(await l.data.text()):r=JSON.parse(l.data),Object.assign(s,r),t(s)}class EA{constructor(t,l,s){this.apiClient=t,this.auth=l,this.webSocketFactory=s}async connect(t){var l,s;if(this.apiClient.isVertexAI())throw new Error("Live music is not supported for Vertex AI.");console.warn("Live music generation is experimental and may change in future versions.");const r=this.apiClient.getWebsocketBaseUrl(),d=this.apiClient.getApiVersion(),m=AA(this.apiClient.getDefaultHeaders()),g=this.apiClient.getApiKey(),y=`${r}/ws/google.ai.generativelanguage.${d}.GenerativeService.BidiGenerateMusic?key=${g}`;let h=()=>{};const v=new Promise(B=>{h=B}),T=t.callbacks,E=function(){h({})},_=this.apiClient,k={onopen:E,onmessage:B=>{TA(_,T.onmessage,B)},onerror:(l=T==null?void 0:T.onerror)!==null&&l!==void 0?l:function(B){},onclose:(s=T==null?void 0:T.onclose)!==null&&s!==void 0?s:function(B){}},M=this.webSocketFactory.create(y,_A(m),k);M.connect(),await v;const V={setup:{model:Ce(this.apiClient,t.model)}};return M.send(JSON.stringify(V)),new CA(M,this.apiClient)}}class CA{constructor(t,l){this.conn=t,this.apiClient=l}async setWeightedPrompts(t){if(!t.weightedPrompts||Object.keys(t.weightedPrompts).length===0)throw new Error("Weighted prompts must be set and contain at least one entry.");const l=XE(t);this.conn.send(JSON.stringify({clientContent:l}))}async setMusicGenerationConfig(t){t.musicGenerationConfig||(t.musicGenerationConfig={});const l=KE(t);this.conn.send(JSON.stringify(l))}sendPlaybackControl(t){const l={playbackControl:t};this.conn.send(JSON.stringify(l))}play(){this.sendPlaybackControl($o.PLAY)}pause(){this.sendPlaybackControl($o.PAUSE)}stop(){this.sendPlaybackControl($o.STOP)}resetContext(){this.sendPlaybackControl($o.RESET_CONTEXT)}close(){this.conn.close()}}function _A(o){const t={};return o.forEach((l,s)=>{t[s]=l}),t}function AA(o){const t=new Headers;for(const[l,s]of Object.entries(o))t.append(l,s);return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const bA="FunctionResponse request must have an `id` field from the response of a ToolCall.FunctionalCalls in Google AI.";async function xA(o,t,l){const s=new qS;let r;l.data instanceof Blob?r=await l.data.text():l.data instanceof ArrayBuffer?r=new TextDecoder().decode(l.data):r=l.data;const d=JSON.parse(r);if(o.isVertexAI()){const m=ZE(d);Object.assign(s,m)}else Object.assign(s,d);t(s)}class RA{constructor(t,l,s){this.apiClient=t,this.auth=l,this.webSocketFactory=s,this.music=new EA(this.apiClient,this.auth,this.webSocketFactory)}async connect(t){var l,s,r,d,m,g;if(t.config&&t.config.httpOptions)throw new Error("The Live module does not support httpOptions at request-level in LiveConnectConfig yet. Please use the client-level httpOptions configuration instead.");const y=this.apiClient.getWebsocketBaseUrl(),h=this.apiClient.getApiVersion();let v;const T=this.apiClient.getHeaders();t.config&&t.config.tools&&cg(t.config.tools)&&dg(T);const E=wA(T);if(this.apiClient.isVertexAI())v=`${y}/ws/google.cloud.aiplatform.${h}.LlmBidiService/BidiGenerateContent`,await this.auth.addAuthHeaders(E,v);else{const F=this.apiClient.getApiKey();let Y="BidiGenerateContent",oe="key";F!=null&&F.startsWith("auth_tokens/")&&(console.warn("Warning: Ephemeral token support is experimental and may change in future versions."),h!=="v1alpha"&&console.warn("Warning: The SDK's ephemeral token support is in v1alpha only. Please use const ai = new GoogleGenAI({apiKey: token.name, httpOptions: { apiVersion: 'v1alpha' }}); before session connection."),Y="BidiGenerateContentConstrained",oe="access_token"),v=`${y}/ws/google.ai.generativelanguage.${h}.GenerativeService.${Y}?${oe}=${F}`}let _=()=>{};const k=new Promise(F=>{_=F}),M=t.callbacks,I=function(){var F;(F=M==null?void 0:M.onopen)===null||F===void 0||F.call(M),_({})},U=this.apiClient,V={onopen:I,onmessage:F=>{xA(U,M.onmessage,F)},onerror:(l=M==null?void 0:M.onerror)!==null&&l!==void 0?l:function(F){},onclose:(s=M==null?void 0:M.onclose)!==null&&s!==void 0?s:function(F){}},B=this.webSocketFactory.create(v,MA(E),V);B.connect(),await k;let K=Ce(this.apiClient,t.model);if(this.apiClient.isVertexAI()&&K.startsWith("publishers/")){const F=this.apiClient.getProject(),Y=this.apiClient.getLocation();K=`projects/${F}/locations/${Y}/`+K}let $={};this.apiClient.isVertexAI()&&((r=t.config)===null||r===void 0?void 0:r.responseModalities)===void 0&&(t.config===void 0?t.config={responseModalities:[Ms.AUDIO]}:t.config.responseModalities=[Ms.AUDIO]),!((d=t.config)===null||d===void 0)&&d.generationConfig&&console.warn("Setting `LiveConnectConfig.generation_config` is deprecated, please set the fields on `LiveConnectConfig` directly. This will become an error in a future version (not before Q3 2025).");const ee=(g=(m=t.config)===null||m===void 0?void 0:m.tools)!==null&&g!==void 0?g:[],J=[];for(const F of ee)if(this.isCallableTool(F)){const Y=F;J.push(await Y.tool())}else J.push(F);J.length>0&&(t.config.tools=J);const Q={model:K,config:t.config,callbacks:t.callbacks};return this.apiClient.isVertexAI()?$=JE(this.apiClient,Q):$=YE(this.apiClient,Q),delete $.config,B.send(JSON.stringify($)),new IA(B,this.apiClient)}isCallableTool(t){return"callTool"in t&&typeof t.callTool=="function"}}const NA={turnComplete:!0};class IA{constructor(t,l){this.conn=t,this.apiClient=l}tLiveClientContent(t,l){if(l.turns!==null&&l.turns!==void 0){let s=[];try{s=Ht(l.turns),t.isVertexAI()||(s=s.map(r=>Hs(r)))}catch{throw new Error(`Failed to parse client content "turns", type: '${typeof l.turns}'`)}return{clientContent:{turns:s,turnComplete:l.turnComplete}}}return{clientContent:{turnComplete:l.turnComplete}}}tLiveClienttToolResponse(t,l){let s=[];if(l.functionResponses==null)throw new Error("functionResponses is required.");if(Array.isArray(l.functionResponses)?s=l.functionResponses:s=[l.functionResponses],s.length===0)throw new Error("functionResponses is required.");for(const d of s){if(typeof d!="object"||d===null||!("name"in d)||!("response"in d))throw new Error(`Could not parse function response, type '${typeof d}'.`);if(!t.isVertexAI()&&!("id"in d))throw new Error(bA)}return{toolResponse:{functionResponses:s}}}sendClientContent(t){t=Object.assign(Object.assign({},NA),t);const l=this.tLiveClientContent(this.apiClient,t);this.conn.send(JSON.stringify(l))}sendRealtimeInput(t){let l={};this.apiClient.isVertexAI()?l={realtimeInput:WE(t)}:l={realtimeInput:QE(t)},this.conn.send(JSON.stringify(l))}sendToolResponse(t){if(t.functionResponses==null)throw new Error("Tool response parameters are required.");const l=this.tLiveClienttToolResponse(this.apiClient,t);this.conn.send(JSON.stringify(l))}close(){this.conn.close()}}function MA(o){const t={};return o.forEach((l,s)=>{t[s]=l}),t}function wA(o){const t=new Headers;for(const[l,s]of Object.entries(o))t.append(l,s);return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const bh=10;function xh(o){var t,l,s;if(!((t=o==null?void 0:o.automaticFunctionCalling)===null||t===void 0)&&t.disable)return!0;let r=!1;for(const m of(l=o==null?void 0:o.tools)!==null&&l!==void 0?l:[])if(ti(m)){r=!0;break}if(!r)return!0;const d=(s=o==null?void 0:o.automaticFunctionCalling)===null||s===void 0?void 0:s.maximumRemoteCalls;return d&&(d<0||!Number.isInteger(d))||d==0?(console.warn("Invalid maximumRemoteCalls value provided for automatic function calling. Disabled automatic function calling. Please provide a valid integer value greater than 0. maximumRemoteCalls provided:",d),!0):!1}function ti(o){return"callTool"in o&&typeof o.callTool=="function"}function DA(o){var t,l,s;return(s=(l=(t=o.config)===null||t===void 0?void 0:t.tools)===null||l===void 0?void 0:l.some(r=>ti(r)))!==null&&s!==void 0?s:!1}function Rh(o){var t;const l=[];return!((t=o==null?void 0:o.config)===null||t===void 0)&&t.tools&&o.config.tools.forEach((s,r)=>{if(ti(s))return;const d=s;d.functionDeclarations&&d.functionDeclarations.length>0&&l.push(r)}),l}function Nh(o){var t;return!(!((t=o==null?void 0:o.automaticFunctionCalling)===null||t===void 0)&&t.ignoreCallHistory)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class UA extends hn{constructor(t){super(),this.apiClient=t,this.generateContent=async l=>{var s,r,d,m,g;const y=await this.processParamsMaybeAddMcpUsage(l);if(this.maybeMoveToResponseJsonSchem(l),!DA(l)||xh(l.config))return await this.generateContentInternal(y);const h=Rh(l);if(h.length>0){const M=h.map(I=>`tools[${I}]`).join(", ");throw new Error(`Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations is not yet supported. Incompatible tools found at ${M}.`)}let v,T;const E=Ht(y.contents),_=(d=(r=(s=y.config)===null||s===void 0?void 0:s.automaticFunctionCalling)===null||r===void 0?void 0:r.maximumRemoteCalls)!==null&&d!==void 0?d:bh;let k=0;for(;k<_&&(v=await this.generateContentInternal(y),!(!v.functionCalls||v.functionCalls.length===0));){const M=v.candidates[0].content,I=[];for(const U of(g=(m=l.config)===null||m===void 0?void 0:m.tools)!==null&&g!==void 0?g:[])if(ti(U)){const B=await U.callTool(v.functionCalls);I.push(...B)}k++,T={role:"user",parts:I},y.contents=Ht(y.contents),y.contents.push(M),y.contents.push(T),Nh(y.config)&&(E.push(M),E.push(T))}return Nh(y.config)&&(v.automaticFunctionCallingHistory=E),v},this.generateContentStream=async l=>{var s,r,d,m,g;if(this.maybeMoveToResponseJsonSchem(l),xh(l.config)){const T=await this.processParamsMaybeAddMcpUsage(l);return await this.generateContentStreamInternal(T)}const y=Rh(l);if(y.length>0){const T=y.map(E=>`tools[${E}]`).join(", ");throw new Error(`Incompatible tools found at ${T}. Automatic function calling with CallableTools (or MCP objects) and basic FunctionDeclarations" is not yet supported.`)}const h=(d=(r=(s=l==null?void 0:l.config)===null||s===void 0?void 0:s.toolConfig)===null||r===void 0?void 0:r.functionCallingConfig)===null||d===void 0?void 0:d.streamFunctionCallArguments,v=(g=(m=l==null?void 0:l.config)===null||m===void 0?void 0:m.automaticFunctionCalling)===null||g===void 0?void 0:g.disable;if(h&&!v)throw new Error("Running in streaming mode with 'streamFunctionCallArguments' enabled, this feature is not compatible with automatic function calling (AFC). Please set 'config.automaticFunctionCalling.disable' to true to disable AFC or leave 'config.toolConfig.functionCallingConfig.streamFunctionCallArguments' to be undefined or set to false to disable streaming function call arguments feature.");return await this.processAfcStream(l)},this.generateImages=async l=>await this.generateImagesInternal(l).then(s=>{var r;let d;const m=[];if(s!=null&&s.generatedImages)for(const y of s.generatedImages)y&&(y!=null&&y.safetyAttributes)&&((r=y==null?void 0:y.safetyAttributes)===null||r===void 0?void 0:r.contentType)==="Positive Prompt"?d=y==null?void 0:y.safetyAttributes:m.push(y);let g;return d?g={generatedImages:m,positivePromptSafetyAttributes:d,sdkHttpResponse:s.sdkHttpResponse}:g={generatedImages:m,sdkHttpResponse:s.sdkHttpResponse},g}),this.list=async l=>{var s;const m={config:Object.assign(Object.assign({},{queryBase:!0}),l==null?void 0:l.config)};if(this.apiClient.isVertexAI()&&!m.config.queryBase){if(!((s=m.config)===null||s===void 0)&&s.filter)throw new Error("Filtering tuned models list for Vertex AI is not currently supported");m.config.filter="labels.tune-type:*"}return new co(mn.PAGED_ITEM_MODELS,g=>this.listInternal(g),await this.listInternal(m),m)},this.editImage=async l=>{const s={model:l.model,prompt:l.prompt,referenceImages:[],config:l.config};return l.referenceImages&&l.referenceImages&&(s.referenceImages=l.referenceImages.map(r=>r.toReferenceImageAPI())),await this.editImageInternal(s)},this.upscaleImage=async l=>{let s={numberOfImages:1,mode:"upscale"};l.config&&(s=Object.assign(Object.assign({},s),l.config));const r={model:l.model,image:l.image,upscaleFactor:l.upscaleFactor,config:s};return await this.upscaleImageInternal(r)},this.generateVideos=async l=>{var s,r,d,m,g,y;if((l.prompt||l.image||l.video)&&l.source)throw new Error("Source and prompt/image/video are mutually exclusive. Please only use source.");return this.apiClient.isVertexAI()||(!((s=l.video)===null||s===void 0)&&s.uri&&(!((r=l.video)===null||r===void 0)&&r.videoBytes)?l.video={uri:l.video.uri,mimeType:l.video.mimeType}:!((m=(d=l.source)===null||d===void 0?void 0:d.video)===null||m===void 0)&&m.uri&&(!((y=(g=l.source)===null||g===void 0?void 0:g.video)===null||y===void 0)&&y.videoBytes)&&(l.source.video={uri:l.source.video.uri,mimeType:l.source.video.mimeType})),await this.generateVideosInternal(l)}}maybeMoveToResponseJsonSchem(t){t.config&&t.config.responseSchema&&(t.config.responseJsonSchema||Object.keys(t.config.responseSchema).includes("$schema")&&(t.config.responseJsonSchema=t.config.responseSchema,delete t.config.responseSchema))}async processParamsMaybeAddMcpUsage(t){var l,s,r;const d=(l=t.config)===null||l===void 0?void 0:l.tools;if(!d)return t;const m=await Promise.all(d.map(async y=>ti(y)?await y.tool():y)),g={model:t.model,contents:t.contents,config:Object.assign(Object.assign({},t.config),{tools:m})};if(g.config.tools=m,t.config&&t.config.tools&&cg(t.config.tools)){const y=(r=(s=t.config.httpOptions)===null||s===void 0?void 0:s.headers)!==null&&r!==void 0?r:{};let h=Object.assign({},y);Object.keys(h).length===0&&(h=this.apiClient.getDefaultHeaders()),dg(h),g.config.httpOptions=Object.assign(Object.assign({},t.config.httpOptions),{headers:h})}return g}async initAfcToolsMap(t){var l,s,r;const d=new Map;for(const m of(s=(l=t.config)===null||l===void 0?void 0:l.tools)!==null&&s!==void 0?s:[])if(ti(m)){const g=m,y=await g.tool();for(const h of(r=y.functionDeclarations)!==null&&r!==void 0?r:[]){if(!h.name)throw new Error("Function declaration name is required.");if(d.has(h.name))throw new Error(`Duplicate tool declaration name: ${h.name}`);d.set(h.name,g)}}return d}async processAfcStream(t){var l,s,r;const d=(r=(s=(l=t.config)===null||l===void 0?void 0:l.automaticFunctionCalling)===null||s===void 0?void 0:s.maximumRemoteCalls)!==null&&r!==void 0?r:bh;let m=!1,g=0;const y=await this.initAfcToolsMap(t);return(function(h,v,T){return qt(this,arguments,function*(){for(var E,_,k,M,I,U;g<d;){m&&(g++,m=!1);const $=yield ae(h.processParamsMaybeAddMcpUsage(T)),ee=yield ae(h.generateContentStreamInternal($)),J=[],Q=[];try{for(var V=!0,B=(_=void 0,Vt(ee)),K;K=yield ae(B.next()),E=K.done,!E;V=!0){M=K.value,V=!1;const F=M;if(yield yield ae(F),F.candidates&&(!((I=F.candidates[0])===null||I===void 0)&&I.content)){Q.push(F.candidates[0].content);for(const Y of(U=F.candidates[0].content.parts)!==null&&U!==void 0?U:[])if(g<d&&Y.functionCall){if(!Y.functionCall.name)throw new Error("Function call name was not returned by the model.");if(v.has(Y.functionCall.name)){const oe=yield ae(v.get(Y.functionCall.name).callTool([Y.functionCall]));J.push(...oe)}else throw new Error(`Automatic function calling was requested, but not all the tools the model used implement the CallableTool interface. Available tools: ${v.keys()}, mising tool: ${Y.functionCall.name}`)}}}}catch(F){_={error:F}}finally{try{!V&&!E&&(k=B.return)&&(yield ae(k.call(B)))}finally{if(_)throw _.error}}if(J.length>0){m=!0;const F=new el;F.candidates=[{content:{role:"user",parts:J}}],yield yield ae(F);const Y=[];Y.push(...Q),Y.push({role:"user",parts:J});const oe=Ht(T.contents).concat(Y);T.contents=oe}else break}})})(this,y,t)}async generateContentInternal(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=Eh(this.apiClient,t);return g=Z("{model}:generateContent",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=_h(v),E=new el;return Object.assign(E,T),E})}else{const h=Th(this.apiClient,t);return g=Z("{model}:generateContent",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=Ch(v),E=new el;return Object.assign(E,T),E})}}async generateContentStreamInternal(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=Eh(this.apiClient,t);return g=Z("{model}:streamGenerateContent?alt=sse",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.requestStream({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}),m.then(function(T){return qt(this,arguments,function*(){var E,_,k,M;try{for(var I=!0,U=Vt(T),V;V=yield ae(U.next()),E=V.done,!E;I=!0){M=V.value,I=!1;const B=M,K=_h(yield ae(B.json()));K.sdkHttpResponse={headers:B.headers};const $=new el;Object.assign($,K),yield yield ae($)}}catch(B){_={error:B}}finally{try{!I&&!E&&(k=U.return)&&(yield ae(k.call(U)))}finally{if(_)throw _.error}}})})}else{const h=Th(this.apiClient,t);return g=Z("{model}:streamGenerateContent?alt=sse",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.requestStream({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}),m.then(function(T){return qt(this,arguments,function*(){var E,_,k,M;try{for(var I=!0,U=Vt(T),V;V=yield ae(U.next()),E=V.done,!E;I=!0){M=V.value,I=!1;const B=M,K=Ch(yield ae(B.json()));K.sdkHttpResponse={headers:B.headers};const $=new el;Object.assign($,K),yield yield ae($)}}catch(B){_={error:B}}finally{try{!I&&!E&&(k=U.return)&&(yield ae(k.call(U)))}finally{if(_)throw _.error}}})})}}async embedContent(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=RC(this.apiClient,t);return g=Z("{model}:predict",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=IC(v),E=new oh;return Object.assign(E,T),E})}else{const h=xC(this.apiClient,t);return g=Z("{model}:batchEmbedContents",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=NC(v),E=new oh;return Object.assign(E,T),E})}}async generateImagesInternal(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=zC(this.apiClient,t);return g=Z("{model}:predict",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=qC(v),E=new ih;return Object.assign(E,T),E})}else{const h=BC(this.apiClient,t);return g=Z("{model}:predict",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=OC(v),E=new ih;return Object.assign(E,T),E})}}async editImageInternal(t){var l,s;let r,d="",m={};if(this.apiClient.isVertexAI()){const g=CC(this.apiClient,t);return d=Z("{model}:predict",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(y=>y.json().then(h=>{const v=h;return v.sdkHttpResponse={headers:y.headers},v})),r.then(y=>{const h=_C(y),v=new wS;return Object.assign(v,h),v})}else throw new Error("This method is only supported by the Vertex AI.")}async upscaleImageInternal(t){var l,s;let r,d="",m={};if(this.apiClient.isVertexAI()){const g=z_(this.apiClient,t);return d=Z("{model}:predict",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(y=>y.json().then(h=>{const v=h;return v.sdkHttpResponse={headers:y.headers},v})),r.then(y=>{const h=O_(y),v=new DS;return Object.assign(v,h),v})}else throw new Error("This method is only supported by the Vertex AI.")}async recontextImage(t){var l,s;let r,d="",m={};if(this.apiClient.isVertexAI()){const g=E_(this.apiClient,t);return d=Z("{model}:predict",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(y=>y.json()),r.then(y=>{const h=C_(y),v=new US;return Object.assign(v,h),v})}else throw new Error("This method is only supported by the Vertex AI.")}async segmentImage(t){var l,s;let r,d="",m={};if(this.apiClient.isVertexAI()){const g=N_(this.apiClient,t);return d=Z("{model}:predict",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(y=>y.json()),r.then(y=>{const h=I_(y),v=new PS;return Object.assign(v,h),v})}else throw new Error("This method is only supported by the Vertex AI.")}async get(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=l_(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json()),m.then(v=>_u(v))}else{const h=i_(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>Cu(v))}}async listInternal(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=m_(this.apiClient,t);return g=Z("{models_url}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=g_(v),E=new lh;return Object.assign(E,T),E})}else{const h=p_(this.apiClient,t);return g=Z("{models_url}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=h_(v),E=new lh;return Object.assign(E,T),E})}}async update(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=G_(this.apiClient,t);return g=Z("{model}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"PATCH",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json()),m.then(v=>_u(v))}else{const h=H_(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"PATCH",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>Cu(v))}}async delete(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=vC(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=TC(v),E=new sh;return Object.assign(E,T),E})}else{const h=yC(this.apiClient,t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"DELETE",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=SC(v),E=new sh;return Object.assign(E,T),E})}}async countTokens(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=mC(this.apiClient,t);return g=Z("{model}:countTokens",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=gC(v),E=new ah;return Object.assign(E,T),E})}else{const h=pC(this.apiClient,t);return g=Z("{model}:countTokens",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=hC(v),E=new ah;return Object.assign(E,T),E})}}async computeTokens(t){var l,s;let r,d="",m={};if(this.apiClient.isVertexAI()){const g=sC(this.apiClient,t);return d=Z("{model}:computeTokens",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(y=>y.json().then(h=>{const v=h;return v.sdkHttpResponse={headers:y.headers},v})),r.then(y=>{const h=aC(y),v=new kS;return Object.assign(v,h),v})}else throw new Error("This method is only supported by the Vertex AI.")}async generateVideosInternal(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=XC(this.apiClient,t);return g=Z("{model}:predictLongRunning",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json()),m.then(v=>{const T=JC(v),E=new ws;return Object.assign(E,T),E})}else{const h=KC(this.apiClient,t);return g=Z("{model}:predictLongRunning",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m.then(v=>{const T=YC(v),E=new ws;return Object.assign(E,T),E})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class PA extends hn{constructor(t){super(),this.apiClient=t}async getVideosOperation(t){const l=t.operation,s=t.config;if(l.name===void 0||l.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const r=l.name.split("/operations/")[0];let d;s&&"httpOptions"in s&&(d=s.httpOptions);const m=await this.fetchPredictVideosOperationInternal({operationName:l.name,resourceName:r,config:{httpOptions:d}});return l._fromAPIResponse({apiResponse:m,_isVertexAI:!0})}else{const r=await this.getVideosOperationInternal({operationName:l.name,config:s});return l._fromAPIResponse({apiResponse:r,_isVertexAI:!1})}}async get(t){const l=t.operation,s=t.config;if(l.name===void 0||l.name==="")throw new Error("Operation name is required.");if(this.apiClient.isVertexAI()){const r=l.name.split("/operations/")[0];let d;s&&"httpOptions"in s&&(d=s.httpOptions);const m=await this.fetchPredictVideosOperationInternal({operationName:l.name,resourceName:r,config:{httpOptions:d}});return l._fromAPIResponse({apiResponse:m,_isVertexAI:!0})}else{const r=await this.getVideosOperationInternal({operationName:l.name,config:s});return l._fromAPIResponse({apiResponse:r,_isVertexAI:!1})}}async getVideosOperationInternal(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=bS(t);return g=Z("{operationName}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json()),m}else{const h=AS(t);return g=Z("{operationName}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json()),m}}async fetchPredictVideosOperationInternal(t){var l,s;let r,d="",m={};if(this.apiClient.isVertexAI()){const g=yS(t);return d=Z("{resourceName}:fetchPredictOperation",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(y=>y.json()),r}else throw new Error("This method is only supported by the Vertex AI.")}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function kA(o){const t={},l=u(o,["data"]);if(l!=null&&c(t,["data"],l),u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const s=u(o,["mimeType"]);return s!=null&&c(t,["mimeType"],s),t}function LA(o){const t={},l=u(o,["parts"]);if(l!=null){let r=l;Array.isArray(r)&&(r=r.map(d=>YA(d))),c(t,["parts"],r)}const s=u(o,["role"]);return s!=null&&c(t,["role"],s),t}function HA(o,t,l){const s={},r=u(t,["expireTime"]);l!==void 0&&r!=null&&c(l,["expireTime"],r);const d=u(t,["newSessionExpireTime"]);l!==void 0&&d!=null&&c(l,["newSessionExpireTime"],d);const m=u(t,["uses"]);l!==void 0&&m!=null&&c(l,["uses"],m);const g=u(t,["liveConnectConstraints"]);l!==void 0&&g!=null&&c(l,["bidiGenerateContentSetup"],FA(o,g));const y=u(t,["lockAdditionalFields"]);return l!==void 0&&y!=null&&c(l,["fieldMask"],y),s}function GA(o,t){const l={},s=u(t,["config"]);return s!=null&&c(l,["config"],HA(o,s,l)),l}function BA(o){const t={};if(u(o,["displayName"])!==void 0)throw new Error("displayName parameter is not supported in Gemini API.");const l=u(o,["fileUri"]);l!=null&&c(t,["fileUri"],l);const s=u(o,["mimeType"]);return s!=null&&c(t,["mimeType"],s),t}function zA(o){const t={},l=u(o,["id"]);l!=null&&c(t,["id"],l);const s=u(o,["args"]);s!=null&&c(t,["args"],s);const r=u(o,["name"]);if(r!=null&&c(t,["name"],r),u(o,["partialArgs"])!==void 0)throw new Error("partialArgs parameter is not supported in Gemini API.");if(u(o,["willContinue"])!==void 0)throw new Error("willContinue parameter is not supported in Gemini API.");return t}function OA(o){const t={};if(u(o,["authConfig"])!==void 0)throw new Error("authConfig parameter is not supported in Gemini API.");const l=u(o,["enableWidget"]);return l!=null&&c(t,["enableWidget"],l),t}function qA(o){const t={};if(u(o,["excludeDomains"])!==void 0)throw new Error("excludeDomains parameter is not supported in Gemini API.");if(u(o,["blockingConfidence"])!==void 0)throw new Error("blockingConfidence parameter is not supported in Gemini API.");const l=u(o,["timeRangeFilter"]);return l!=null&&c(t,["timeRangeFilter"],l),t}function VA(o,t){const l={},s=u(o,["generationConfig"]);t!==void 0&&s!=null&&c(t,["setup","generationConfig"],s);const r=u(o,["responseModalities"]);t!==void 0&&r!=null&&c(t,["setup","generationConfig","responseModalities"],r);const d=u(o,["temperature"]);t!==void 0&&d!=null&&c(t,["setup","generationConfig","temperature"],d);const m=u(o,["topP"]);t!==void 0&&m!=null&&c(t,["setup","generationConfig","topP"],m);const g=u(o,["topK"]);t!==void 0&&g!=null&&c(t,["setup","generationConfig","topK"],g);const y=u(o,["maxOutputTokens"]);t!==void 0&&y!=null&&c(t,["setup","generationConfig","maxOutputTokens"],y);const h=u(o,["mediaResolution"]);t!==void 0&&h!=null&&c(t,["setup","generationConfig","mediaResolution"],h);const v=u(o,["seed"]);t!==void 0&&v!=null&&c(t,["setup","generationConfig","seed"],v);const T=u(o,["speechConfig"]);t!==void 0&&T!=null&&c(t,["setup","generationConfig","speechConfig"],Gu(T));const E=u(o,["thinkingConfig"]);t!==void 0&&E!=null&&c(t,["setup","generationConfig","thinkingConfig"],E);const _=u(o,["enableAffectiveDialog"]);t!==void 0&&_!=null&&c(t,["setup","generationConfig","enableAffectiveDialog"],_);const k=u(o,["systemInstruction"]);t!==void 0&&k!=null&&c(t,["setup","systemInstruction"],LA(lt(k)));const M=u(o,["tools"]);if(t!==void 0&&M!=null){let ee=oi(M);Array.isArray(ee)&&(ee=ee.map(J=>KA(ni(J)))),c(t,["setup","tools"],ee)}const I=u(o,["sessionResumption"]);t!==void 0&&I!=null&&c(t,["setup","sessionResumption"],JA(I));const U=u(o,["inputAudioTranscription"]);t!==void 0&&U!=null&&c(t,["setup","inputAudioTranscription"],U);const V=u(o,["outputAudioTranscription"]);t!==void 0&&V!=null&&c(t,["setup","outputAudioTranscription"],V);const B=u(o,["realtimeInputConfig"]);t!==void 0&&B!=null&&c(t,["setup","realtimeInputConfig"],B);const K=u(o,["contextWindowCompression"]);t!==void 0&&K!=null&&c(t,["setup","contextWindowCompression"],K);const $=u(o,["proactivity"]);if(t!==void 0&&$!=null&&c(t,["setup","proactivity"],$),u(o,["explicitVadSignal"])!==void 0)throw new Error("explicitVadSignal parameter is not supported in Gemini API.");return l}function FA(o,t){const l={},s=u(t,["model"]);s!=null&&c(l,["setup","model"],Ce(o,s));const r=u(t,["config"]);return r!=null&&c(l,["config"],VA(r,l)),l}function YA(o){const t={},l=u(o,["mediaResolution"]);l!=null&&c(t,["mediaResolution"],l);const s=u(o,["codeExecutionResult"]);s!=null&&c(t,["codeExecutionResult"],s);const r=u(o,["executableCode"]);r!=null&&c(t,["executableCode"],r);const d=u(o,["fileData"]);d!=null&&c(t,["fileData"],BA(d));const m=u(o,["functionCall"]);m!=null&&c(t,["functionCall"],zA(m));const g=u(o,["functionResponse"]);g!=null&&c(t,["functionResponse"],g);const y=u(o,["inlineData"]);y!=null&&c(t,["inlineData"],kA(y));const h=u(o,["text"]);h!=null&&c(t,["text"],h);const v=u(o,["thought"]);v!=null&&c(t,["thought"],v);const T=u(o,["thoughtSignature"]);T!=null&&c(t,["thoughtSignature"],T);const E=u(o,["videoMetadata"]);return E!=null&&c(t,["videoMetadata"],E),t}function JA(o){const t={},l=u(o,["handle"]);if(l!=null&&c(t,["handle"],l),u(o,["transparent"])!==void 0)throw new Error("transparent parameter is not supported in Gemini API.");return t}function KA(o){const t={},l=u(o,["functionDeclarations"]);if(l!=null){let v=l;Array.isArray(v)&&(v=v.map(T=>T)),c(t,["functionDeclarations"],v)}if(u(o,["retrieval"])!==void 0)throw new Error("retrieval parameter is not supported in Gemini API.");const s=u(o,["googleSearchRetrieval"]);s!=null&&c(t,["googleSearchRetrieval"],s);const r=u(o,["computerUse"]);r!=null&&c(t,["computerUse"],r);const d=u(o,["fileSearch"]);d!=null&&c(t,["fileSearch"],d);const m=u(o,["codeExecution"]);if(m!=null&&c(t,["codeExecution"],m),u(o,["enterpriseWebSearch"])!==void 0)throw new Error("enterpriseWebSearch parameter is not supported in Gemini API.");const g=u(o,["googleMaps"]);g!=null&&c(t,["googleMaps"],OA(g));const y=u(o,["googleSearch"]);y!=null&&c(t,["googleSearch"],qA(y));const h=u(o,["urlContext"]);return h!=null&&c(t,["urlContext"],h),t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function XA(o){const t=[];for(const l in o)if(Object.prototype.hasOwnProperty.call(o,l)){const s=o[l];if(typeof s=="object"&&s!=null&&Object.keys(s).length>0){const r=Object.keys(s).map(d=>`${l}.${d}`);t.push(...r)}else t.push(l)}return t.join(",")}function QA(o,t){let l=null;const s=o.bidiGenerateContentSetup;if(typeof s=="object"&&s!==null&&"setup"in s){const d=s.setup;typeof d=="object"&&d!==null?(o.bidiGenerateContentSetup=d,l=d):delete o.bidiGenerateContentSetup}else s!==void 0&&delete o.bidiGenerateContentSetup;const r=o.fieldMask;if(l){const d=XA(l);if(Array.isArray(t==null?void 0:t.lockAdditionalFields)&&(t==null?void 0:t.lockAdditionalFields.length)===0)d?o.fieldMask=d:delete o.fieldMask;else if(t!=null&&t.lockAdditionalFields&&t.lockAdditionalFields.length>0&&r!==null&&Array.isArray(r)&&r.length>0){const m=["temperature","topK","topP","maxOutputTokens","responseModalities","seed","speechConfig"];let g=[];r.length>0&&(g=r.map(h=>m.includes(h)?`generationConfig.${h}`:h));const y=[];d&&y.push(d),g.length>0&&y.push(...g),y.length>0?o.fieldMask=y.join(","):delete o.fieldMask}else delete o.fieldMask}else r!==null&&Array.isArray(r)&&r.length>0?o.fieldMask=r.join(","):delete o.fieldMask;return o}class WA extends hn{constructor(t){super(),this.apiClient=t}async create(t){var l,s;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("The client.tokens.create method is only supported by the Gemini Developer API.");{const g=GA(this.apiClient,t);d=Z("auth_tokens",g._url),m=g._query,delete g.config,delete g._url,delete g._query;const y=QA(g,t.config);return r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(y),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(h=>h.json()),r.then(h=>h)}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function ZA(o,t){const l={},s=u(o,["force"]);return t!==void 0&&s!=null&&c(t,["_query","force"],s),l}function $A(o){const t={},l=u(o,["name"]);l!=null&&c(t,["_url","name"],l);const s=u(o,["config"]);return s!=null&&ZA(s,t),t}function jA(o){const t={},l=u(o,["name"]);return l!=null&&c(t,["_url","name"],l),t}function eb(o,t){const l={},s=u(o,["pageSize"]);t!==void 0&&s!=null&&c(t,["_query","pageSize"],s);const r=u(o,["pageToken"]);return t!==void 0&&r!=null&&c(t,["_query","pageToken"],r),l}function tb(o){const t={},l=u(o,["parent"]);l!=null&&c(t,["_url","parent"],l);const s=u(o,["config"]);return s!=null&&eb(s,t),t}function nb(o){const t={},l=u(o,["sdkHttpResponse"]);l!=null&&c(t,["sdkHttpResponse"],l);const s=u(o,["nextPageToken"]);s!=null&&c(t,["nextPageToken"],s);const r=u(o,["documents"]);if(r!=null){let d=r;Array.isArray(d)&&(d=d.map(m=>m)),c(t,["documents"],d)}return t}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ob extends hn{constructor(t){super(),this.apiClient=t,this.list=async l=>new co(mn.PAGED_ITEM_DOCUMENTS,s=>this.listInternal({parent:l.parent,config:s.config}),await this.listInternal(l),l)}async get(t){var l,s;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=jA(t);return d=Z("{name}",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"GET",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(y=>y.json()),r.then(y=>y)}}async delete(t){var l,s;let r="",d={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=$A(t);r=Z("{name}",m._url),d=m._query,delete m._url,delete m._query,await this.apiClient.request({path:r,queryParams:d,body:JSON.stringify(m),httpMethod:"DELETE",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal})}}async listInternal(t){var l,s;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=tb(t);return d=Z("{parent}/documents",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"GET",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(y=>y.json()),r.then(y=>{const h=nb(y),v=new LS;return Object.assign(v,h),v})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ib extends hn{constructor(t,l=new ob(t)){super(),this.apiClient=t,this.documents=l,this.list=async(s={})=>new co(mn.PAGED_ITEM_FILE_SEARCH_STORES,r=>this.listInternal(r),await this.listInternal(s),s)}async uploadToFileSearchStore(t){if(this.apiClient.isVertexAI())throw new Error("Vertex AI does not support uploading files to a file search store.");return this.apiClient.uploadFileToFileSearchStore(t.fileSearchStoreName,t.file,t.config)}async create(t){var l,s;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=X_(t);return d=Z("fileSearchStores",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(y=>y.json()),r.then(y=>y)}}async get(t){var l,s;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=Z_(t);return d=Z("{name}",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"GET",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(y=>y.json()),r.then(y=>y)}}async delete(t){var l,s;let r="",d={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const m=W_(t);r=Z("{name}",m._url),d=m._query,delete m._url,delete m._query,await this.apiClient.request({path:r,queryParams:d,body:JSON.stringify(m),httpMethod:"DELETE",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal})}}async listInternal(t){var l,s;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=oA(t);return d=Z("fileSearchStores",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"GET",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(y=>y.json()),r.then(y=>{const h=iA(y),v=new HS;return Object.assign(v,h),v})}}async uploadToFileSearchStoreInternal(t){var l,s;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=lA(t);return d=Z("upload/v1beta/{file_search_store_name}:uploadToFileSearchStore",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(y=>y.json()),r.then(y=>{const h=sA(y),v=new GS;return Object.assign(v,h),v})}}async importFile(t){var l,s;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=eA(t);return d=Z("{file_search_store_name}:importFile",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(y=>y.json()),r.then(y=>{const h=j_(y),v=new Uu;return Object.assign(v,h),v})}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */let fg=function(){const{crypto:o}=globalThis;if(o!=null&&o.randomUUID)return fg=o.randomUUID.bind(o),o.randomUUID();const t=new Uint8Array(1),l=o?()=>o.getRandomValues(t)[0]:()=>Math.random()*255&255;return"10000000-1000-4000-8000-100000000000".replace(/[018]/g,s=>(+s^l()&15>>+s/4).toString(16))};const lb=()=>fg();/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function bu(o){return typeof o=="object"&&o!==null&&("name"in o&&o.name==="AbortError"||"message"in o&&String(o.message).includes("FetchRequestCanceledException"))}const xu=o=>{if(o instanceof Error)return o;if(typeof o=="object"&&o!==null){try{if(Object.prototype.toString.call(o)==="[object Error]"){const t=new Error(o.message,o.cause?{cause:o.cause}:{});return o.stack&&(t.stack=o.stack),o.cause&&!t.cause&&(t.cause=o.cause),o.name&&(t.name=o.name),t}}catch{}try{return new Error(JSON.stringify(o))}catch{}}return new Error(o)};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Gt extends Error{}class ut extends Gt{constructor(t,l,s,r){super(`${ut.makeMessage(t,l,s)}`),this.status=t,this.headers=r,this.error=l}static makeMessage(t,l,s){const r=l!=null&&l.message?typeof l.message=="string"?l.message:JSON.stringify(l.message):l?JSON.stringify(l):s;return t&&r?`${t} ${r}`:t?`${t} status code (no body)`:r||"(no status code or body)"}static generate(t,l,s,r){if(!t||!r)return new zs({message:s,cause:xu(l)});const d=l;return t===400?new mg(t,d,s,r):t===401?new hg(t,d,s,r):t===403?new gg(t,d,s,r):t===404?new yg(t,d,s,r):t===409?new vg(t,d,s,r):t===422?new Sg(t,d,s,r):t===429?new Tg(t,d,s,r):t>=500?new Eg(t,d,s,r):new ut(t,d,s,r)}}class Ru extends ut{constructor({message:t}={}){super(void 0,void 0,t||"Request was aborted.",void 0)}}class zs extends ut{constructor({message:t,cause:l}){super(void 0,void 0,t||"Connection error.",void 0),l&&(this.cause=l)}}class pg extends zs{constructor({message:t}={}){super({message:t??"Request timed out."})}}class mg extends ut{}class hg extends ut{}class gg extends ut{}class yg extends ut{}class vg extends ut{}class Sg extends ut{}class Tg extends ut{}class Eg extends ut{}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const sb=/^[a-z][a-z0-9+.-]*:/i,ab=o=>sb.test(o);let Nu=o=>(Nu=Array.isArray,Nu(o));const rb=Nu;let ub=rb;const Ih=ub;function cb(o){if(!o)return!0;for(const t in o)return!1;return!0}function db(o,t){return Object.prototype.hasOwnProperty.call(o,t)}const fb=(o,t)=>{if(typeof t!="number"||!Number.isInteger(t))throw new Gt(`${o} must be an integer`);if(t<0)throw new Gt(`${o} must be a positive integer`);return t},pb=o=>{try{return JSON.parse(o)}catch{return}};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const mb=o=>new Promise(t=>setTimeout(t,o));/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Zo="0.0.1";/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function hb(){return typeof Deno<"u"&&Deno.build!=null?"deno":typeof EdgeRuntime<"u"?"edge":Object.prototype.toString.call(typeof globalThis.process<"u"?globalThis.process:0)==="[object process]"?"node":"unknown"}const gb=()=>{var o,t,l,s,r;const d=hb();if(d==="deno")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Zo,"X-Stainless-OS":wh(Deno.build.os),"X-Stainless-Arch":Mh(Deno.build.arch),"X-Stainless-Runtime":"deno","X-Stainless-Runtime-Version":typeof Deno.version=="string"?Deno.version:(t=(o=Deno.version)===null||o===void 0?void 0:o.deno)!==null&&t!==void 0?t:"unknown"};if(typeof EdgeRuntime<"u")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Zo,"X-Stainless-OS":"Unknown","X-Stainless-Arch":`other:${EdgeRuntime}`,"X-Stainless-Runtime":"edge","X-Stainless-Runtime-Version":globalThis.process.version};if(d==="node")return{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Zo,"X-Stainless-OS":wh((l=globalThis.process.platform)!==null&&l!==void 0?l:"unknown"),"X-Stainless-Arch":Mh((s=globalThis.process.arch)!==null&&s!==void 0?s:"unknown"),"X-Stainless-Runtime":"node","X-Stainless-Runtime-Version":(r=globalThis.process.version)!==null&&r!==void 0?r:"unknown"};const m=yb();return m?{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Zo,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":`browser:${m.browser}`,"X-Stainless-Runtime-Version":m.version}:{"X-Stainless-Lang":"js","X-Stainless-Package-Version":Zo,"X-Stainless-OS":"Unknown","X-Stainless-Arch":"unknown","X-Stainless-Runtime":"unknown","X-Stainless-Runtime-Version":"unknown"}};function yb(){if(typeof navigator>"u"||!navigator)return null;const o=[{key:"edge",pattern:/Edge(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/MSIE(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"ie",pattern:/Trident(?:.*rv\:(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"chrome",pattern:/Chrome(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"firefox",pattern:/Firefox(?:\W+(\d+)\.(\d+)(?:\.(\d+))?)?/},{key:"safari",pattern:/(?:Version\W+(\d+)\.(\d+)(?:\.(\d+))?)?(?:\W+Mobile\S*)?\W+Safari/}];for(const{key:t,pattern:l}of o){const s=l.exec(navigator.userAgent);if(s){const r=s[1]||0,d=s[2]||0,m=s[3]||0;return{browser:t,version:`${r}.${d}.${m}`}}}return null}const Mh=o=>o==="x32"?"x32":o==="x86_64"||o==="x64"?"x64":o==="arm"?"arm":o==="aarch64"||o==="arm64"?"arm64":o?`other:${o}`:"unknown",wh=o=>(o=o.toLowerCase(),o.includes("ios")?"iOS":o==="android"?"Android":o==="darwin"?"MacOS":o==="win32"?"Windows":o==="freebsd"?"FreeBSD":o==="openbsd"?"OpenBSD":o==="linux"?"Linux":o?`Other:${o}`:"Unknown");let Cs;const vb=()=>Cs??(Cs=gb());/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Sb(){if(typeof fetch<"u")return fetch;throw new Error("`fetch` is not defined as a global; Either pass `fetch` to the client, `new GeminiNextGenAPIClient({ fetch })` or polyfill the global, `globalThis.fetch = fetch`")}function Cg(...o){const t=globalThis.ReadableStream;if(typeof t>"u")throw new Error("`ReadableStream` is not defined as a global; You will need to polyfill it, `globalThis.ReadableStream = ReadableStream`");return new t(...o)}function Tb(o){let t=Symbol.asyncIterator in o?o[Symbol.asyncIterator]():o[Symbol.iterator]();return Cg({start(){},async pull(l){const{done:s,value:r}=await t.next();s?l.close():l.enqueue(r)},async cancel(){var l;await((l=t.return)===null||l===void 0?void 0:l.call(t))}})}function _g(o){if(o[Symbol.asyncIterator])return o;const t=o.getReader();return{async next(){try{const l=await t.read();return l!=null&&l.done&&t.releaseLock(),l}catch(l){throw t.releaseLock(),l}},async return(){const l=t.cancel();return t.releaseLock(),await l,{done:!0,value:void 0}},[Symbol.asyncIterator](){return this}}}async function Eb(o){var t,l;if(o===null||typeof o!="object")return;if(o[Symbol.asyncIterator]){await((l=(t=o[Symbol.asyncIterator]()).return)===null||l===void 0?void 0:l.call(t));return}const s=o.getReader(),r=s.cancel();s.releaseLock(),await r}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Cb=({headers:o,body:t})=>({bodyHeaders:{"content-type":"application/json"},body:JSON.stringify(t)});/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ag=()=>{var o;if(typeof File>"u"){const{process:t}=globalThis,l=typeof((o=t==null?void 0:t.versions)===null||o===void 0?void 0:o.node)=="string"&&parseInt(t.versions.node.split("."))<20;throw new Error("`File` is not defined as a global, which is required for file uploads."+(l?" Update to Node 20 LTS or newer, or set `globalThis.File` to `import('node:buffer').File`.":""))}};function pu(o,t,l){return Ag(),new File(o,t??"unknown_file",l)}function _b(o){return(typeof o=="object"&&o!==null&&("name"in o&&o.name&&String(o.name)||"url"in o&&o.url&&String(o.url)||"filename"in o&&o.filename&&String(o.filename)||"path"in o&&o.path&&String(o.path))||"").split(/[\\/]/).pop()||void 0}const Ab=o=>o!=null&&typeof o=="object"&&typeof o[Symbol.asyncIterator]=="function";/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const bg=o=>o!=null&&typeof o=="object"&&typeof o.size=="number"&&typeof o.type=="string"&&typeof o.text=="function"&&typeof o.slice=="function"&&typeof o.arrayBuffer=="function",bb=o=>o!=null&&typeof o=="object"&&typeof o.name=="string"&&typeof o.lastModified=="number"&&bg(o),xb=o=>o!=null&&typeof o=="object"&&typeof o.url=="string"&&typeof o.blob=="function";async function Rb(o,t,l){if(Ag(),o=await o,bb(o))return o instanceof File?o:pu([await o.arrayBuffer()],o.name);if(xb(o)){const r=await o.blob();return t||(t=new URL(o.url).pathname.split(/[\\/]/).pop()),pu(await Iu(r),t,l)}const s=await Iu(o);if(t||(t=_b(o)),!(l!=null&&l.type)){const r=s.find(d=>typeof d=="object"&&"type"in d&&d.type);typeof r=="string"&&(l=Object.assign(Object.assign({},l),{type:r}))}return pu(s,t,l)}async function Iu(o){var t,l,s,r,d;let m=[];if(typeof o=="string"||ArrayBuffer.isView(o)||o instanceof ArrayBuffer)m.push(o);else if(bg(o))m.push(o instanceof Blob?o:await o.arrayBuffer());else if(Ab(o))try{for(var g=!0,y=Vt(o),h;h=await y.next(),t=h.done,!t;g=!0){r=h.value,g=!1;const v=r;m.push(...await Iu(v))}}catch(v){l={error:v}}finally{try{!g&&!t&&(s=y.return)&&await s.call(y)}finally{if(l)throw l.error}}else{const v=(d=o==null?void 0:o.constructor)===null||d===void 0?void 0:d.name;throw new Error(`Unexpected data type: ${typeof o}${v?`; constructor: ${v}`:""}${Nb(o)}`)}return m}function Nb(o){return typeof o!="object"||o===null?"":`; props: [${Object.getOwnPropertyNames(o).map(l=>`"${l}"`).join(", ")}]`}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class xg{constructor(t){this._client=t}}xg._key=[];/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Rg(o){return o.replace(/[^A-Za-z0-9\-._~!$&'()*+,;=:@]+/g,encodeURIComponent)}const Dh=Object.freeze(Object.create(null)),Ib=(o=Rg)=>(function(l,...s){if(l.length===1)return l[0];let r=!1;const d=[],m=l.reduce((v,T,E)=>{var _,k,M;/[?#]/.test(T)&&(r=!0);const I=s[E];let U=(r?encodeURIComponent:o)(""+I);return E!==s.length&&(I==null||typeof I=="object"&&I.toString===((M=Object.getPrototypeOf((k=Object.getPrototypeOf((_=I.hasOwnProperty)!==null&&_!==void 0?_:Dh))!==null&&k!==void 0?k:Dh))===null||M===void 0?void 0:M.toString))&&(U=I+"",d.push({start:v.length+T.length,length:U.length,error:`Value of type ${Object.prototype.toString.call(I).slice(8,-1)} is not a valid path parameter`})),v+T+(E===s.length?"":U)},""),g=m.split(/[?#]/,1)[0],y=new RegExp("(?<=^|\\/)(?:\\.|%2e){1,2}(?=\\/|$)","gi");let h;for(;(h=y.exec(g))!==null;)d.push({start:h.index,length:h[0].length,error:`Value "${h[0]}" can't be safely passed as a path parameter`});if(d.sort((v,T)=>v.start-T.start),d.length>0){let v=0;const T=d.reduce((E,_)=>{const k=" ".repeat(_.start-v),M="^".repeat(_.length);return v=_.start+_.length,E+k+M},"");throw new Gt(`Path parameters result in path with invalid segments:
${d.map(E=>E.error).join(`
`)}
${m}
${T}`)}return m}),_s=Ib(Rg);/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ng extends xg{create(t,l){var s;const{api_version:r=this._client.apiVersion}=t,d=Us(t,["api_version"]);if("model"in d&&"agent_config"in d)throw new Gt("Invalid request: specified `model` and `agent_config`. If specifying `model`, use `generation_config`.");if("agent"in d&&"generation_config"in d)throw new Gt("Invalid request: specified `agent` and `generation_config`. If specifying `agent`, use `agent_config`.");return this._client.post(_s`/${r}/interactions`,Object.assign(Object.assign({body:d},l),{stream:(s=t.stream)!==null&&s!==void 0?s:!1}))}delete(t,l={},s){const{api_version:r=this._client.apiVersion}=l??{};return this._client.delete(_s`/${r}/interactions/${t}`,s)}cancel(t,l={},s){const{api_version:r=this._client.apiVersion}=l??{};return this._client.post(_s`/${r}/interactions/${t}/cancel`,s)}get(t,l={},s){var r;const d=l??{},{api_version:m=this._client.apiVersion}=d,g=Us(d,["api_version"]);return this._client.get(_s`/${m}/interactions/${t}`,Object.assign(Object.assign({query:g},s),{stream:(r=l==null?void 0:l.stream)!==null&&r!==void 0?r:!1}))}}Ng._key=Object.freeze(["interactions"]);class Ig extends Ng{}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function Mb(o){let t=0;for(const r of o)t+=r.length;const l=new Uint8Array(t);let s=0;for(const r of o)l.set(r,s),s+=r.length;return l}let As;function zu(o){let t;return(As??(t=new globalThis.TextEncoder,As=t.encode.bind(t)))(o)}let bs;function Uh(o){let t;return(bs??(t=new globalThis.TextDecoder,bs=t.decode.bind(t)))(o)}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Os{constructor(){this.buffer=new Uint8Array,this.carriageReturnIndex=null}decode(t){if(t==null)return[];const l=t instanceof ArrayBuffer?new Uint8Array(t):typeof t=="string"?zu(t):t;this.buffer=Mb([this.buffer,l]);const s=[];let r;for(;(r=wb(this.buffer,this.carriageReturnIndex))!=null;){if(r.carriage&&this.carriageReturnIndex==null){this.carriageReturnIndex=r.index;continue}if(this.carriageReturnIndex!=null&&(r.index!==this.carriageReturnIndex+1||r.carriage)){s.push(Uh(this.buffer.subarray(0,this.carriageReturnIndex-1))),this.buffer=this.buffer.subarray(this.carriageReturnIndex),this.carriageReturnIndex=null;continue}const d=this.carriageReturnIndex!==null?r.preceding-1:r.preceding,m=Uh(this.buffer.subarray(0,d));s.push(m),this.buffer=this.buffer.subarray(r.index),this.carriageReturnIndex=null}return s}flush(){return this.buffer.length?this.decode(`
`):[]}}Os.NEWLINE_CHARS=new Set([`
`,"\r"]);Os.NEWLINE_REGEXP=/\r\n|[\n\r]/g;function wb(o,t){for(let r=t??0;r<o.length;r++){if(o[r]===10)return{preceding:r,index:r+1,carriage:!1};if(o[r]===13)return{preceding:r,index:r+1,carriage:!0}}return null}function Db(o){for(let s=0;s<o.length-1;s++){if(o[s]===10&&o[s+1]===10||o[s]===13&&o[s+1]===13)return s+2;if(o[s]===13&&o[s+1]===10&&s+3<o.length&&o[s+2]===13&&o[s+3]===10)return s+4}return-1}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Ps={off:0,error:200,warn:300,info:400,debug:500},Ph=(o,t,l)=>{if(o){if(db(Ps,o))return o;rt(l).warn(`${t} was set to ${JSON.stringify(o)}, expected one of ${JSON.stringify(Object.keys(Ps))}`)}};function nl(){}function xs(o,t,l){return!t||Ps[o]>Ps[l]?nl:t[o].bind(t)}const Ub={error:nl,warn:nl,info:nl,debug:nl};let kh=new WeakMap;function rt(o){var t;const l=o.logger,s=(t=o.logLevel)!==null&&t!==void 0?t:"off";if(!l)return Ub;const r=kh.get(l);if(r&&r[0]===s)return r[1];const d={error:xs("error",l,s),warn:xs("warn",l,s),info:xs("info",l,s),debug:xs("debug",l,s)};return kh.set(l,[s,d]),d}const uo=o=>(o.options&&(o.options=Object.assign({},o.options),delete o.options.headers),o.headers&&(o.headers=Object.fromEntries((o.headers instanceof Headers?[...o.headers]:Object.entries(o.headers)).map(([t,l])=>[t,t.toLowerCase()==="x-goog-api-key"||t.toLowerCase()==="authorization"||t.toLowerCase()==="cookie"||t.toLowerCase()==="set-cookie"?"***":l]))),"retryOfRequestLogID"in o&&(o.retryOfRequestLogID&&(o.retryOf=o.retryOfRequestLogID),delete o.retryOfRequestLogID),o);/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class jo{constructor(t,l,s){this.iterator=t,this.controller=l,this.client=s}static fromSSEResponse(t,l,s){let r=!1;const d=s?rt(s):console;function m(){return qt(this,arguments,function*(){var y,h,v,T;if(r)throw new Gt("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");r=!0;let E=!1;try{try{for(var _=!0,k=Vt(Pb(t,l)),M;M=yield ae(k.next()),y=M.done,!y;_=!0){T=M.value,_=!1;const I=T;if(!E)if(I.data.startsWith("[DONE]")){E=!0;continue}else try{yield yield ae(JSON.parse(I.data))}catch(U){throw d.error("Could not parse message into JSON:",I.data),d.error("From chunk:",I.raw),U}}}catch(I){h={error:I}}finally{try{!_&&!y&&(v=k.return)&&(yield ae(v.call(k)))}finally{if(h)throw h.error}}E=!0}catch(I){if(bu(I))return yield ae(void 0);throw I}finally{E||l.abort()}})}return new jo(m,l,s)}static fromReadableStream(t,l,s){let r=!1;function d(){return qt(this,arguments,function*(){var y,h,v,T;const E=new Os,_=_g(t);try{for(var k=!0,M=Vt(_),I;I=yield ae(M.next()),y=I.done,!y;k=!0){T=I.value,k=!1;const U=T;for(const V of E.decode(U))yield yield ae(V)}}catch(U){h={error:U}}finally{try{!k&&!y&&(v=M.return)&&(yield ae(v.call(M)))}finally{if(h)throw h.error}}for(const U of E.flush())yield yield ae(U)})}function m(){return qt(this,arguments,function*(){var y,h,v,T;if(r)throw new Gt("Cannot iterate over a consumed stream, use `.tee()` to split the stream.");r=!0;let E=!1;try{try{for(var _=!0,k=Vt(d()),M;M=yield ae(k.next()),y=M.done,!y;_=!0){T=M.value,_=!1;const I=T;E||I&&(yield yield ae(JSON.parse(I)))}}catch(I){h={error:I}}finally{try{!_&&!y&&(v=k.return)&&(yield ae(v.call(k)))}finally{if(h)throw h.error}}E=!0}catch(I){if(bu(I))return yield ae(void 0);throw I}finally{E||l.abort()}})}return new jo(m,l,s)}[Symbol.asyncIterator](){return this.iterator()}tee(){const t=[],l=[],s=this.iterator(),r=d=>({next:()=>{if(d.length===0){const m=s.next();t.push(m),l.push(m)}return d.shift()}});return[new jo(()=>r(t),this.controller,this.client),new jo(()=>r(l),this.controller,this.client)]}toReadableStream(){const t=this;let l;return Cg({async start(){l=t[Symbol.asyncIterator]()},async pull(s){try{const{value:r,done:d}=await l.next();if(d)return s.close();const m=zu(JSON.stringify(r)+`
`);s.enqueue(m)}catch(r){s.error(r)}},async cancel(){var s;await((s=l.return)===null||s===void 0?void 0:s.call(l))}})}}function Pb(o,t){return qt(this,arguments,function*(){var s,r,d,m;if(!o.body)throw t.abort(),typeof globalThis.navigator<"u"&&globalThis.navigator.product==="ReactNative"?new Gt("The default react-native fetch implementation does not support streaming. Please use expo/fetch: https://docs.expo.dev/versions/latest/sdk/expo/#expofetch-api"):new Gt("Attempted to iterate over a response with no body");const g=new Lb,y=new Os,h=_g(o.body);try{for(var v=!0,T=Vt(kb(h)),E;E=yield ae(T.next()),s=E.done,!s;v=!0){m=E.value,v=!1;const _=m;for(const k of y.decode(_)){const M=g.decode(k);M&&(yield yield ae(M))}}}catch(_){r={error:_}}finally{try{!v&&!s&&(d=T.return)&&(yield ae(d.call(T)))}finally{if(r)throw r.error}}for(const _ of y.flush()){const k=g.decode(_);k&&(yield yield ae(k))}})}function kb(o){return qt(this,arguments,function*(){var l,s,r,d;let m=new Uint8Array;try{for(var g=!0,y=Vt(o),h;h=yield ae(y.next()),l=h.done,!l;g=!0){d=h.value,g=!1;const v=d;if(v==null)continue;const T=v instanceof ArrayBuffer?new Uint8Array(v):typeof v=="string"?zu(v):v;let E=new Uint8Array(m.length+T.length);E.set(m),E.set(T,m.length),m=E;let _;for(;(_=Db(m))!==-1;)yield yield ae(m.slice(0,_)),m=m.slice(_)}}catch(v){s={error:v}}finally{try{!g&&!l&&(r=y.return)&&(yield ae(r.call(y)))}finally{if(s)throw s.error}}m.length>0&&(yield yield ae(m))})}class Lb{constructor(){this.event=null,this.data=[],this.chunks=[]}decode(t){if(t.endsWith("\r")&&(t=t.substring(0,t.length-1)),!t){if(!this.event&&!this.data.length)return null;const d={event:this.event,data:this.data.join(`
`),raw:this.chunks};return this.event=null,this.data=[],this.chunks=[],d}if(this.chunks.push(t),t.startsWith(":"))return null;let[l,s,r]=Hb(t,":");return r.startsWith(" ")&&(r=r.substring(1)),l==="event"?this.event=r:l==="data"&&this.data.push(r),null}}function Hb(o,t){const l=o.indexOf(t);return l!==-1?[o.substring(0,l),t,o.substring(l+t.length)]:[o,"",""]}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */async function Gb(o,t){const{response:l,requestLogID:s,retryOfRequestLogID:r,startTime:d}=t,m=await(async()=>{var g;if(t.options.stream)return rt(o).debug("response",l.status,l.url,l.headers,l.body),t.options.__streamClass?t.options.__streamClass.fromSSEResponse(l,t.controller,o):jo.fromSSEResponse(l,t.controller,o);if(l.status===204)return null;if(t.options.__binaryResponse)return l;const y=l.headers.get("content-type"),h=(g=y==null?void 0:y.split(";")[0])===null||g===void 0?void 0:g.trim();return(h==null?void 0:h.includes("application/json"))||(h==null?void 0:h.endsWith("+json"))?await l.json():await l.text()})();return rt(o).debug(`[${s}] response parsed`,uo({retryOfRequestLogID:r,url:l.url,status:l.status,body:m,durationMs:Date.now()-d})),m}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class Ou extends Promise{constructor(t,l,s=Gb){super(r=>{r(null)}),this.responsePromise=l,this.parseResponse=s,this.client=t}_thenUnwrap(t){return new Ou(this.client,this.responsePromise,async(l,s)=>t(await this.parseResponse(l,s),s))}asResponse(){return this.responsePromise.then(t=>t.response)}async withResponse(){const[t,l]=await Promise.all([this.parse(),this.asResponse()]);return{data:t,response:l}}parse(){return this.parsedPromise||(this.parsedPromise=this.responsePromise.then(t=>this.parseResponse(this.client,t))),this.parsedPromise}then(t,l){return this.parse().then(t,l)}catch(t){return this.parse().catch(t)}finally(t){return this.parse().finally(t)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Mg=Symbol("brand.privateNullableHeaders");function*Bb(o){if(!o)return;if(Mg in o){const{values:s,nulls:r}=o;yield*s.entries();for(const d of r)yield[d,null];return}let t=!1,l;o instanceof Headers?l=o.entries():Ih(o)?l=o:(t=!0,l=Object.entries(o??{}));for(let s of l){const r=s[0];if(typeof r!="string")throw new TypeError("expected header name to be a string");const d=Ih(s[1])?s[1]:[s[1]];let m=!1;for(const g of d)g!==void 0&&(t&&!m&&(m=!0,yield[r,null]),yield[r,g])}}const tl=o=>{const t=new Headers,l=new Set;for(const s of o){const r=new Set;for(const[d,m]of Bb(s)){const g=d.toLowerCase();r.has(g)||(t.delete(d),r.add(g)),m===null?(t.delete(d),l.add(g)):(t.append(d,m),l.delete(g))}}return{[Mg]:!0,values:t,nulls:l}};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const mu=o=>{var t,l,s,r,d,m;if(typeof globalThis.process<"u")return(s=(l=(t=dS)===null||t===void 0?void 0:t[o])===null||l===void 0?void 0:l.trim())!==null&&s!==void 0?s:void 0;if(typeof globalThis.Deno<"u")return(m=(d=(r=globalThis.Deno.env)===null||r===void 0?void 0:r.get)===null||d===void 0?void 0:d.call(r,o))===null||m===void 0?void 0:m.trim()};/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */var wg;class qs{constructor(t){var l,s,r,d,m,g,y,{baseURL:h=mu("GEMINI_NEXT_GEN_API_BASE_URL"),apiKey:v=(l=mu("GEMINI_API_KEY"))!==null&&l!==void 0?l:null,apiVersion:T="v1beta"}=t,E=Us(t,["baseURL","apiKey","apiVersion"]);const _=Object.assign(Object.assign({apiKey:v,apiVersion:T},E),{baseURL:h||"https://generativelanguage.googleapis.com"});this.baseURL=_.baseURL,this.timeout=(s=_.timeout)!==null&&s!==void 0?s:qs.DEFAULT_TIMEOUT,this.logger=(r=_.logger)!==null&&r!==void 0?r:console;const k="warn";this.logLevel=k,this.logLevel=(m=(d=Ph(_.logLevel,"ClientOptions.logLevel",this))!==null&&d!==void 0?d:Ph(mu("GEMINI_NEXT_GEN_API_LOG"),"process.env['GEMINI_NEXT_GEN_API_LOG']",this))!==null&&m!==void 0?m:k,this.fetchOptions=_.fetchOptions,this.maxRetries=(g=_.maxRetries)!==null&&g!==void 0?g:2,this.fetch=(y=_.fetch)!==null&&y!==void 0?y:Sb(),this.encoder=Cb,this._options=_,this.apiKey=v,this.apiVersion=T,this.clientAdapter=_.clientAdapter}withOptions(t){return new this.constructor(Object.assign(Object.assign(Object.assign({},this._options),{baseURL:this.baseURL,maxRetries:this.maxRetries,timeout:this.timeout,logger:this.logger,logLevel:this.logLevel,fetch:this.fetch,fetchOptions:this.fetchOptions,apiKey:this.apiKey,apiVersion:this.apiVersion}),t))}baseURLOverridden(){return this.baseURL!=="https://generativelanguage.googleapis.com"}defaultQuery(){return this._options.defaultQuery}validateHeaders({values:t,nulls:l}){if(!(t.has("authorization")||t.has("x-goog-api-key"))&&!(this.apiKey&&t.get("x-goog-api-key"))&&!l.has("x-goog-api-key"))throw new Error('Could not resolve authentication method. Expected the apiKey to be set. Or for the "x-goog-api-key" headers to be explicitly omitted')}async authHeaders(t){const l=tl([t.headers]);if(!(l.values.has("authorization")||l.values.has("x-goog-api-key"))){if(this.apiKey)return tl([{"x-goog-api-key":this.apiKey}]);if(this.clientAdapter.isVertexAI())return tl([await this.clientAdapter.getAuthHeaders()])}}stringifyQuery(t){return Object.entries(t).filter(([l,s])=>typeof s<"u").map(([l,s])=>{if(typeof s=="string"||typeof s=="number"||typeof s=="boolean")return`${encodeURIComponent(l)}=${encodeURIComponent(s)}`;if(s===null)return`${encodeURIComponent(l)}=`;throw new Gt(`Cannot stringify type ${typeof s}; Expected string, number, boolean, or null. If you need to pass nested query parameters, you can manually encode them, e.g. { query: { 'foo[key1]': value1, 'foo[key2]': value2 } }, and please open a GitHub issue requesting better support for your use case.`)}).join("&")}getUserAgent(){return`${this.constructor.name}/JS ${Zo}`}defaultIdempotencyKey(){return`stainless-node-retry-${lb()}`}makeStatusError(t,l,s,r){return ut.generate(t,l,s,r)}buildURL(t,l,s){const r=!this.baseURLOverridden()&&s||this.baseURL,d=ab(t)?new URL(t):new URL(r+(r.endsWith("/")&&t.startsWith("/")?t.slice(1):t)),m=this.defaultQuery();return cb(m)||(l=Object.assign(Object.assign({},m),l)),typeof l=="object"&&l&&!Array.isArray(l)&&(d.search=this.stringifyQuery(l)),d.toString()}async prepareOptions(t){if(this.clientAdapter&&this.clientAdapter.isVertexAI()&&!t.path.startsWith(`/${this.apiVersion}/projects/`)){const l=t.path.slice(this.apiVersion.length+1);t.path=`/${this.apiVersion}/projects/${this.clientAdapter.getProject()}/locations/${this.clientAdapter.getLocation()}${l}`}}async prepareRequest(t,{url:l,options:s}){}get(t,l){return this.methodRequest("get",t,l)}post(t,l){return this.methodRequest("post",t,l)}patch(t,l){return this.methodRequest("patch",t,l)}put(t,l){return this.methodRequest("put",t,l)}delete(t,l){return this.methodRequest("delete",t,l)}methodRequest(t,l,s){return this.request(Promise.resolve(s).then(r=>Object.assign({method:t,path:l},r)))}request(t,l=null){return new Ou(this,this.makeRequest(t,l,void 0))}async makeRequest(t,l,s){var r,d,m;const g=await t,y=(r=g.maxRetries)!==null&&r!==void 0?r:this.maxRetries;l==null&&(l=y),await this.prepareOptions(g);const{req:h,url:v,timeout:T}=await this.buildRequest(g,{retryCount:y-l});await this.prepareRequest(h,{url:v,options:g});const E="log_"+(Math.random()*(1<<24)|0).toString(16).padStart(6,"0"),_=s===void 0?"":`, retryOf: ${s}`,k=Date.now();if(rt(this).debug(`[${E}] sending request`,uo({retryOfRequestLogID:s,method:g.method,url:v,options:g,headers:h.headers})),!((d=g.signal)===null||d===void 0)&&d.aborted)throw new Ru;const M=new AbortController,I=await this.fetchWithTimeout(v,h,T,M).catch(xu),U=Date.now();if(I instanceof globalThis.Error){const B=`retrying, ${l} attempts remaining`;if(!((m=g.signal)===null||m===void 0)&&m.aborted)throw new Ru;const K=bu(I)||/timed? ?out/i.test(String(I)+("cause"in I?String(I.cause):""));if(l)return rt(this).info(`[${E}] connection ${K?"timed out":"failed"} - ${B}`),rt(this).debug(`[${E}] connection ${K?"timed out":"failed"} (${B})`,uo({retryOfRequestLogID:s,url:v,durationMs:U-k,message:I.message})),this.retryRequest(g,l,s??E);throw rt(this).info(`[${E}] connection ${K?"timed out":"failed"} - error; no more retries left`),rt(this).debug(`[${E}] connection ${K?"timed out":"failed"} (error; no more retries left)`,uo({retryOfRequestLogID:s,url:v,durationMs:U-k,message:I.message})),K?new pg:new zs({cause:I})}const V=`[${E}${_}] ${h.method} ${v} ${I.ok?"succeeded":"failed"} with status ${I.status} in ${U-k}ms`;if(!I.ok){const B=await this.shouldRetry(I);if(l&&B){const F=`retrying, ${l} attempts remaining`;return await Eb(I.body),rt(this).info(`${V} - ${F}`),rt(this).debug(`[${E}] response error (${F})`,uo({retryOfRequestLogID:s,url:I.url,status:I.status,headers:I.headers,durationMs:U-k})),this.retryRequest(g,l,s??E,I.headers)}const K=B?"error; no more retries left":"error; not retryable";rt(this).info(`${V} - ${K}`);const $=await I.text().catch(F=>xu(F).message),ee=pb($),J=ee?void 0:$;throw rt(this).debug(`[${E}] response error (${K})`,uo({retryOfRequestLogID:s,url:I.url,status:I.status,headers:I.headers,message:J,durationMs:Date.now()-k})),this.makeStatusError(I.status,ee,J,I.headers)}return rt(this).info(V),rt(this).debug(`[${E}] response start`,uo({retryOfRequestLogID:s,url:I.url,status:I.status,headers:I.headers,durationMs:U-k})),{response:I,options:g,controller:M,requestLogID:E,retryOfRequestLogID:s,startTime:k}}async fetchWithTimeout(t,l,s,r){const d=l||{},{signal:m,method:g}=d,y=Us(d,["signal","method"]);m&&m.addEventListener("abort",()=>r.abort());const h=setTimeout(()=>r.abort(),s),v=globalThis.ReadableStream&&y.body instanceof globalThis.ReadableStream||typeof y.body=="object"&&y.body!==null&&Symbol.asyncIterator in y.body,T=Object.assign(Object.assign(Object.assign({signal:r.signal},v?{duplex:"half"}:{}),{method:"GET"}),y);g&&(T.method=g.toUpperCase());try{return await this.fetch.call(void 0,t,T)}finally{clearTimeout(h)}}async shouldRetry(t){const l=t.headers.get("x-should-retry");return l==="true"?!0:l==="false"?!1:t.status===408||t.status===409||t.status===429||t.status>=500}async retryRequest(t,l,s,r){var d;let m;const g=r==null?void 0:r.get("retry-after-ms");if(g){const h=parseFloat(g);Number.isNaN(h)||(m=h)}const y=r==null?void 0:r.get("retry-after");if(y&&!m){const h=parseFloat(y);Number.isNaN(h)?m=Date.parse(y)-Date.now():m=h*1e3}if(!(m&&0<=m&&m<60*1e3)){const h=(d=t.maxRetries)!==null&&d!==void 0?d:this.maxRetries;m=this.calculateDefaultRetryTimeoutMillis(l,h)}return await mb(m),this.makeRequest(t,l-1,s)}calculateDefaultRetryTimeoutMillis(t,l){const d=l-t,m=Math.min(.5*Math.pow(2,d),8),g=1-Math.random()*.25;return m*g*1e3}async buildRequest(t,{retryCount:l=0}={}){var s,r,d;const m=Object.assign({},t),{method:g,path:y,query:h,defaultBaseURL:v}=m,T=this.buildURL(y,h,v);"timeout"in m&&fb("timeout",m.timeout),m.timeout=(s=m.timeout)!==null&&s!==void 0?s:this.timeout;const{bodyHeaders:E,body:_}=this.buildBody({options:m}),k=await this.buildHeaders({options:t,method:g,bodyHeaders:E,retryCount:l});return{req:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({method:g,headers:k},m.signal&&{signal:m.signal}),globalThis.ReadableStream&&_ instanceof globalThis.ReadableStream&&{duplex:"half"}),_&&{body:_}),(r=this.fetchOptions)!==null&&r!==void 0?r:{}),(d=m.fetchOptions)!==null&&d!==void 0?d:{}),url:T,timeout:m.timeout}}async buildHeaders({options:t,method:l,bodyHeaders:s,retryCount:r}){let d={};this.idempotencyHeader&&l!=="get"&&(t.idempotencyKey||(t.idempotencyKey=this.defaultIdempotencyKey()),d[this.idempotencyHeader]=t.idempotencyKey);const m=await this.authHeaders(t);let g=tl([d,Object.assign(Object.assign({Accept:"application/json","User-Agent":this.getUserAgent(),"X-Stainless-Retry-Count":String(r)},t.timeout?{"X-Stainless-Timeout":String(Math.trunc(t.timeout/1e3))}:{}),vb()),this._options.defaultHeaders,s,t.headers,m]);return this.validateHeaders(g),g.values}buildBody({options:{body:t,headers:l}}){if(!t)return{bodyHeaders:void 0,body:void 0};const s=tl([l]);return ArrayBuffer.isView(t)||t instanceof ArrayBuffer||t instanceof DataView||typeof t=="string"&&s.values.has("content-type")||globalThis.Blob&&t instanceof globalThis.Blob||t instanceof FormData||t instanceof URLSearchParams||globalThis.ReadableStream&&t instanceof globalThis.ReadableStream?{bodyHeaders:void 0,body:t}:typeof t=="object"&&(Symbol.asyncIterator in t||Symbol.iterator in t&&"next"in t&&typeof t.next=="function")?{bodyHeaders:void 0,body:Tb(t)}:this.encoder({body:t,headers:s})}}qs.DEFAULT_TIMEOUT=6e4;class Ze extends qs{constructor(){super(...arguments),this.interactions=new Ig(this)}}wg=Ze;Ze.GeminiNextGenAPIClient=wg;Ze.GeminiNextGenAPIClientError=Gt;Ze.APIError=ut;Ze.APIConnectionError=zs;Ze.APIConnectionTimeoutError=pg;Ze.APIUserAbortError=Ru;Ze.NotFoundError=yg;Ze.ConflictError=vg;Ze.RateLimitError=Tg;Ze.BadRequestError=mg;Ze.AuthenticationError=hg;Ze.InternalServerError=Eg;Ze.PermissionDeniedError=gg;Ze.UnprocessableEntityError=Sg;Ze.toFile=Rb;Ze.Interactions=Ig;/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */function zb(o,t){const l={},s=u(o,["name"]);return s!=null&&c(l,["_url","name"],s),l}function Ob(o,t){const l={},s=u(o,["name"]);return s!=null&&c(l,["_url","name"],s),l}function qb(o,t){const l={},s=u(o,["sdkHttpResponse"]);return s!=null&&c(l,["sdkHttpResponse"],s),l}function Vb(o,t){const l={},s=u(o,["sdkHttpResponse"]);return s!=null&&c(l,["sdkHttpResponse"],s),l}function Fb(o,t,l){const s={};if(u(o,["validationDataset"])!==void 0)throw new Error("validationDataset parameter is not supported in Gemini API.");const r=u(o,["tunedModelDisplayName"]);if(t!==void 0&&r!=null&&c(t,["displayName"],r),u(o,["description"])!==void 0)throw new Error("description parameter is not supported in Gemini API.");const d=u(o,["epochCount"]);t!==void 0&&d!=null&&c(t,["tuningTask","hyperparameters","epochCount"],d);const m=u(o,["learningRateMultiplier"]);if(m!=null&&c(s,["tuningTask","hyperparameters","learningRateMultiplier"],m),u(o,["exportLastCheckpointOnly"])!==void 0)throw new Error("exportLastCheckpointOnly parameter is not supported in Gemini API.");if(u(o,["preTunedModelCheckpointId"])!==void 0)throw new Error("preTunedModelCheckpointId parameter is not supported in Gemini API.");if(u(o,["adapterSize"])!==void 0)throw new Error("adapterSize parameter is not supported in Gemini API.");const g=u(o,["batchSize"]);t!==void 0&&g!=null&&c(t,["tuningTask","hyperparameters","batchSize"],g);const y=u(o,["learningRate"]);if(t!==void 0&&y!=null&&c(t,["tuningTask","hyperparameters","learningRate"],y),u(o,["labels"])!==void 0)throw new Error("labels parameter is not supported in Gemini API.");if(u(o,["beta"])!==void 0)throw new Error("beta parameter is not supported in Gemini API.");return s}function Yb(o,t,l){const s={};let r=u(l,["config","method"]);if(r===void 0&&(r="SUPERVISED_FINE_TUNING"),r==="SUPERVISED_FINE_TUNING"){const _=u(o,["validationDataset"]);t!==void 0&&_!=null&&c(t,["supervisedTuningSpec"],Lh(_))}else if(r==="PREFERENCE_TUNING"){const _=u(o,["validationDataset"]);t!==void 0&&_!=null&&c(t,["preferenceOptimizationSpec"],Lh(_))}const d=u(o,["tunedModelDisplayName"]);t!==void 0&&d!=null&&c(t,["tunedModelDisplayName"],d);const m=u(o,["description"]);t!==void 0&&m!=null&&c(t,["description"],m);let g=u(l,["config","method"]);if(g===void 0&&(g="SUPERVISED_FINE_TUNING"),g==="SUPERVISED_FINE_TUNING"){const _=u(o,["epochCount"]);t!==void 0&&_!=null&&c(t,["supervisedTuningSpec","hyperParameters","epochCount"],_)}else if(g==="PREFERENCE_TUNING"){const _=u(o,["epochCount"]);t!==void 0&&_!=null&&c(t,["preferenceOptimizationSpec","hyperParameters","epochCount"],_)}let y=u(l,["config","method"]);if(y===void 0&&(y="SUPERVISED_FINE_TUNING"),y==="SUPERVISED_FINE_TUNING"){const _=u(o,["learningRateMultiplier"]);t!==void 0&&_!=null&&c(t,["supervisedTuningSpec","hyperParameters","learningRateMultiplier"],_)}else if(y==="PREFERENCE_TUNING"){const _=u(o,["learningRateMultiplier"]);t!==void 0&&_!=null&&c(t,["preferenceOptimizationSpec","hyperParameters","learningRateMultiplier"],_)}let h=u(l,["config","method"]);if(h===void 0&&(h="SUPERVISED_FINE_TUNING"),h==="SUPERVISED_FINE_TUNING"){const _=u(o,["exportLastCheckpointOnly"]);t!==void 0&&_!=null&&c(t,["supervisedTuningSpec","exportLastCheckpointOnly"],_)}else if(h==="PREFERENCE_TUNING"){const _=u(o,["exportLastCheckpointOnly"]);t!==void 0&&_!=null&&c(t,["preferenceOptimizationSpec","exportLastCheckpointOnly"],_)}let v=u(l,["config","method"]);if(v===void 0&&(v="SUPERVISED_FINE_TUNING"),v==="SUPERVISED_FINE_TUNING"){const _=u(o,["adapterSize"]);t!==void 0&&_!=null&&c(t,["supervisedTuningSpec","hyperParameters","adapterSize"],_)}else if(v==="PREFERENCE_TUNING"){const _=u(o,["adapterSize"]);t!==void 0&&_!=null&&c(t,["preferenceOptimizationSpec","hyperParameters","adapterSize"],_)}if(u(o,["batchSize"])!==void 0)throw new Error("batchSize parameter is not supported in Vertex AI.");if(u(o,["learningRate"])!==void 0)throw new Error("learningRate parameter is not supported in Vertex AI.");const T=u(o,["labels"]);t!==void 0&&T!=null&&c(t,["labels"],T);const E=u(o,["beta"]);return t!==void 0&&E!=null&&c(t,["preferenceOptimizationSpec","hyperParameters","beta"],E),s}function Jb(o,t){const l={},s=u(o,["baseModel"]);s!=null&&c(l,["baseModel"],s);const r=u(o,["preTunedModel"]);r!=null&&c(l,["preTunedModel"],r);const d=u(o,["trainingDataset"]);d!=null&&ox(d);const m=u(o,["config"]);return m!=null&&Fb(m,l),l}function Kb(o,t){const l={},s=u(o,["baseModel"]);s!=null&&c(l,["baseModel"],s);const r=u(o,["preTunedModel"]);r!=null&&c(l,["preTunedModel"],r);const d=u(o,["trainingDataset"]);d!=null&&ix(d,l,t);const m=u(o,["config"]);return m!=null&&Yb(m,l,t),l}function Xb(o,t){const l={},s=u(o,["name"]);return s!=null&&c(l,["_url","name"],s),l}function Qb(o,t){const l={},s=u(o,["name"]);return s!=null&&c(l,["_url","name"],s),l}function Wb(o,t,l){const s={},r=u(o,["pageSize"]);t!==void 0&&r!=null&&c(t,["_query","pageSize"],r);const d=u(o,["pageToken"]);t!==void 0&&d!=null&&c(t,["_query","pageToken"],d);const m=u(o,["filter"]);return t!==void 0&&m!=null&&c(t,["_query","filter"],m),s}function Zb(o,t,l){const s={},r=u(o,["pageSize"]);t!==void 0&&r!=null&&c(t,["_query","pageSize"],r);const d=u(o,["pageToken"]);t!==void 0&&d!=null&&c(t,["_query","pageToken"],d);const m=u(o,["filter"]);return t!==void 0&&m!=null&&c(t,["_query","filter"],m),s}function $b(o,t){const l={},s=u(o,["config"]);return s!=null&&Wb(s,l),l}function jb(o,t){const l={},s=u(o,["config"]);return s!=null&&Zb(s,l),l}function ex(o,t){const l={},s=u(o,["sdkHttpResponse"]);s!=null&&c(l,["sdkHttpResponse"],s);const r=u(o,["nextPageToken"]);r!=null&&c(l,["nextPageToken"],r);const d=u(o,["tunedModels"]);if(d!=null){let m=d;Array.isArray(m)&&(m=m.map(g=>Dg(g))),c(l,["tuningJobs"],m)}return l}function tx(o,t){const l={},s=u(o,["sdkHttpResponse"]);s!=null&&c(l,["sdkHttpResponse"],s);const r=u(o,["nextPageToken"]);r!=null&&c(l,["nextPageToken"],r);const d=u(o,["tuningJobs"]);if(d!=null){let m=d;Array.isArray(m)&&(m=m.map(g=>Mu(g))),c(l,["tuningJobs"],m)}return l}function nx(o,t){const l={},s=u(o,["name"]);s!=null&&c(l,["model"],s);const r=u(o,["name"]);return r!=null&&c(l,["endpoint"],r),l}function ox(o,t){const l={};if(u(o,["gcsUri"])!==void 0)throw new Error("gcsUri parameter is not supported in Gemini API.");if(u(o,["vertexDatasetResource"])!==void 0)throw new Error("vertexDatasetResource parameter is not supported in Gemini API.");const s=u(o,["examples"]);if(s!=null){let r=s;Array.isArray(r)&&(r=r.map(d=>d)),c(l,["examples","examples"],r)}return l}function ix(o,t,l){const s={};let r=u(l,["config","method"]);if(r===void 0&&(r="SUPERVISED_FINE_TUNING"),r==="SUPERVISED_FINE_TUNING"){const m=u(o,["gcsUri"]);t!==void 0&&m!=null&&c(t,["supervisedTuningSpec","trainingDatasetUri"],m)}else if(r==="PREFERENCE_TUNING"){const m=u(o,["gcsUri"]);t!==void 0&&m!=null&&c(t,["preferenceOptimizationSpec","trainingDatasetUri"],m)}let d=u(l,["config","method"]);if(d===void 0&&(d="SUPERVISED_FINE_TUNING"),d==="SUPERVISED_FINE_TUNING"){const m=u(o,["vertexDatasetResource"]);t!==void 0&&m!=null&&c(t,["supervisedTuningSpec","trainingDatasetUri"],m)}else if(d==="PREFERENCE_TUNING"){const m=u(o,["vertexDatasetResource"]);t!==void 0&&m!=null&&c(t,["preferenceOptimizationSpec","trainingDatasetUri"],m)}if(u(o,["examples"])!==void 0)throw new Error("examples parameter is not supported in Vertex AI.");return s}function Dg(o,t){const l={},s=u(o,["sdkHttpResponse"]);s!=null&&c(l,["sdkHttpResponse"],s);const r=u(o,["name"]);r!=null&&c(l,["name"],r);const d=u(o,["state"]);d!=null&&c(l,["state"],Xh(d));const m=u(o,["createTime"]);m!=null&&c(l,["createTime"],m);const g=u(o,["tuningTask","startTime"]);g!=null&&c(l,["startTime"],g);const y=u(o,["tuningTask","completeTime"]);y!=null&&c(l,["endTime"],y);const h=u(o,["updateTime"]);h!=null&&c(l,["updateTime"],h);const v=u(o,["description"]);v!=null&&c(l,["description"],v);const T=u(o,["baseModel"]);T!=null&&c(l,["baseModel"],T);const E=u(o,["_self"]);return E!=null&&c(l,["tunedModel"],nx(E)),l}function Mu(o,t){const l={},s=u(o,["sdkHttpResponse"]);s!=null&&c(l,["sdkHttpResponse"],s);const r=u(o,["name"]);r!=null&&c(l,["name"],r);const d=u(o,["state"]);d!=null&&c(l,["state"],Xh(d));const m=u(o,["createTime"]);m!=null&&c(l,["createTime"],m);const g=u(o,["startTime"]);g!=null&&c(l,["startTime"],g);const y=u(o,["endTime"]);y!=null&&c(l,["endTime"],y);const h=u(o,["updateTime"]);h!=null&&c(l,["updateTime"],h);const v=u(o,["error"]);v!=null&&c(l,["error"],v);const T=u(o,["description"]);T!=null&&c(l,["description"],T);const E=u(o,["baseModel"]);E!=null&&c(l,["baseModel"],E);const _=u(o,["tunedModel"]);_!=null&&c(l,["tunedModel"],_);const k=u(o,["preTunedModel"]);k!=null&&c(l,["preTunedModel"],k);const M=u(o,["supervisedTuningSpec"]);M!=null&&c(l,["supervisedTuningSpec"],M);const I=u(o,["preferenceOptimizationSpec"]);I!=null&&c(l,["preferenceOptimizationSpec"],I);const U=u(o,["tuningDataStats"]);U!=null&&c(l,["tuningDataStats"],U);const V=u(o,["encryptionSpec"]);V!=null&&c(l,["encryptionSpec"],V);const B=u(o,["partnerModelTuningSpec"]);B!=null&&c(l,["partnerModelTuningSpec"],B);const K=u(o,["customBaseModel"]);K!=null&&c(l,["customBaseModel"],K);const $=u(o,["experiment"]);$!=null&&c(l,["experiment"],$);const ee=u(o,["labels"]);ee!=null&&c(l,["labels"],ee);const J=u(o,["outputUri"]);J!=null&&c(l,["outputUri"],J);const Q=u(o,["pipelineJob"]);Q!=null&&c(l,["pipelineJob"],Q);const F=u(o,["serviceAccount"]);F!=null&&c(l,["serviceAccount"],F);const Y=u(o,["tunedModelDisplayName"]);Y!=null&&c(l,["tunedModelDisplayName"],Y);const oe=u(o,["veoTuningSpec"]);return oe!=null&&c(l,["veoTuningSpec"],oe),l}function lx(o,t){const l={},s=u(o,["sdkHttpResponse"]);s!=null&&c(l,["sdkHttpResponse"],s);const r=u(o,["name"]);r!=null&&c(l,["name"],r);const d=u(o,["metadata"]);d!=null&&c(l,["metadata"],d);const m=u(o,["done"]);m!=null&&c(l,["done"],m);const g=u(o,["error"]);return g!=null&&c(l,["error"],g),l}function Lh(o,t){const l={},s=u(o,["gcsUri"]);s!=null&&c(l,["validationDatasetUri"],s);const r=u(o,["vertexDatasetResource"]);return r!=null&&c(l,["validationDatasetUri"],r),l}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class sx extends hn{constructor(t){super(),this.apiClient=t,this.list=async(l={})=>new co(mn.PAGED_ITEM_TUNING_JOBS,s=>this.listInternal(s),await this.listInternal(l),l),this.get=async l=>await this.getInternal(l),this.tune=async l=>{var s;if(this.apiClient.isVertexAI())if(l.baseModel.startsWith("projects/")){const r={tunedModelName:l.baseModel};!((s=l.config)===null||s===void 0)&&s.preTunedModelCheckpointId&&(r.checkpointId=l.config.preTunedModelCheckpointId);const d=Object.assign(Object.assign({},l),{preTunedModel:r});return d.baseModel=void 0,await this.tuneInternal(d)}else{const r=Object.assign({},l);return await this.tuneInternal(r)}else{const r=Object.assign({},l),d=await this.tuneMldevInternal(r);let m="";return d.metadata!==void 0&&d.metadata.tunedModel!==void 0?m=d.metadata.tunedModel:d.name!==void 0&&d.name.includes("/operations/")&&(m=d.name.split("/operations/")[0]),{name:m,state:vu.JOB_STATE_QUEUED}}}}async getInternal(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=Qb(t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>Mu(v))}else{const h=Xb(t);return g=Z("{name}",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>Dg(v))}}async listInternal(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=jb(t);return g=Z("tuningJobs",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=tx(v),E=new rh;return Object.assign(E,T),E})}else{const h=$b(t);return g=Z("tunedModels",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"GET",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=ex(v),E=new rh;return Object.assign(E,T),E})}}async cancel(t){var l,s,r,d;let m,g="",y={};if(this.apiClient.isVertexAI()){const h=Ob(t);return g=Z("{name}:cancel",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=Vb(v),E=new uh;return Object.assign(E,T),E})}else{const h=zb(t);return g=Z("{name}:cancel",h._url),y=h._query,delete h._url,delete h._query,m=this.apiClient.request({path:g,queryParams:y,body:JSON.stringify(h),httpMethod:"POST",httpOptions:(r=t.config)===null||r===void 0?void 0:r.httpOptions,abortSignal:(d=t.config)===null||d===void 0?void 0:d.abortSignal}).then(v=>v.json().then(T=>{const E=T;return E.sdkHttpResponse={headers:v.headers},E})),m.then(v=>{const T=qb(v),E=new uh;return Object.assign(E,T),E})}}async tuneInternal(t){var l,s;let r,d="",m={};if(this.apiClient.isVertexAI()){const g=Kb(t,t);return d=Z("tuningJobs",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(y=>y.json().then(h=>{const v=h;return v.sdkHttpResponse={headers:y.headers},v})),r.then(y=>Mu(y))}else throw new Error("This method is only supported by the Vertex AI.")}async tuneMldevInternal(t){var l,s;let r,d="",m={};if(this.apiClient.isVertexAI())throw new Error("This method is only supported by the Gemini Developer API.");{const g=Jb(t);return d=Z("tunedModels",g._url),m=g._query,delete g._url,delete g._query,r=this.apiClient.request({path:d,queryParams:m,body:JSON.stringify(g),httpMethod:"POST",httpOptions:(l=t.config)===null||l===void 0?void 0:l.httpOptions,abortSignal:(s=t.config)===null||s===void 0?void 0:s.abortSignal}).then(y=>y.json().then(h=>{const v=h;return v.sdkHttpResponse={headers:y.headers},v})),r.then(y=>lx(y))}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class ax{async download(t,l){throw new Error("Download to file is not supported in the browser, please use a browser compliant download like an <a> tag.")}}const rx=1024*1024*8,ux=3,cx=1e3,dx=2,ks="x-goog-upload-status";async function fx(o,t,l){var s;const r=await Ug(o,t,l),d=await(r==null?void 0:r.json());if(((s=r==null?void 0:r.headers)===null||s===void 0?void 0:s[ks])!=="final")throw new Error("Failed to upload file: Upload status is not finalized.");return d.file}async function px(o,t,l){var s;const r=await Ug(o,t,l),d=await(r==null?void 0:r.json());if(((s=r==null?void 0:r.headers)===null||s===void 0?void 0:s[ks])!=="final")throw new Error("Failed to upload file: Upload status is not finalized.");const m=qh(d),g=new Pu;return Object.assign(g,m),g}async function Ug(o,t,l){var s,r;let d=0,m=0,g=new Su(new Response),y="upload";for(d=o.size;m<d;){const h=Math.min(rx,d-m),v=o.slice(m,m+h);m+h>=d&&(y+=", finalize");let T=0,E=cx;for(;T<ux&&(g=await l.request({path:"",body:v,httpMethod:"POST",httpOptions:{apiVersion:"",baseUrl:t,headers:{"X-Goog-Upload-Command":y,"X-Goog-Upload-Offset":String(m),"Content-Length":String(h)}}}),!(!((s=g==null?void 0:g.headers)===null||s===void 0)&&s[ks]));)T++,await hx(E),E=E*dx;if(m+=h,((r=g==null?void 0:g.headers)===null||r===void 0?void 0:r[ks])!=="active")break;if(d<=m)throw new Error("All content has been uploaded, but the upload status is not finalized.")}return g}async function mx(o){return{size:o.size,type:o.type}}function hx(o){return new Promise(t=>setTimeout(t,o))}class gx{async upload(t,l,s){if(typeof t=="string")throw new Error("File path is not supported in browser uploader.");return await fx(t,l,s)}async uploadToFileSearchStore(t,l,s){if(typeof t=="string")throw new Error("File path is not supported in browser uploader.");return await px(t,l,s)}async stat(t){if(typeof t=="string")throw new Error("File path is not supported in browser uploader.");return await mx(t)}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */class yx{create(t,l,s){return new vx(t,l,s)}}class vx{constructor(t,l,s){this.url=t,this.headers=l,this.callbacks=s}connect(){this.ws=new WebSocket(this.url),this.ws.onopen=this.callbacks.onopen,this.ws.onerror=this.callbacks.onerror,this.ws.onclose=this.callbacks.onclose,this.ws.onmessage=this.callbacks.onmessage}send(t){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.send(t)}close(){if(this.ws===void 0)throw new Error("WebSocket is not connected");this.ws.close()}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Hh="x-goog-api-key";class Sx{constructor(t){this.apiKey=t}async addAuthHeaders(t,l){if(t.get(Hh)===null){if(this.apiKey.startsWith("auth_tokens/"))throw new Error("Ephemeral tokens are only supported by the live API.");if(!this.apiKey)throw new Error("API key is missing. Please provide a valid API key.");t.append(Hh,this.apiKey)}}}/**
 * @license
 * Copyright 2025 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */const Tx="gl-node/";class Ex{get interactions(){if(this._interactions!==void 0)return this._interactions;console.warn("GoogleGenAI.interactions: Interactions usage is experimental and may change in future versions.");const t=this.httpOptions;t!=null&&t.extraBody&&console.warn("GoogleGenAI.interactions: Client level httpOptions.extraBody is not supported by the interactions client and will be ignored.");const l=new Ze({baseURL:this.apiClient.getBaseUrl(),apiKey:this.apiKey,apiVersion:this.apiClient.getApiVersion(),clientAdapter:this.apiClient,defaultHeaders:this.apiClient.getDefaultHeaders(),timeout:t==null?void 0:t.timeout});return this._interactions=l.interactions,this._interactions}constructor(t){var l;if(t.apiKey==null)throw new Error("An API Key must be set when running in a browser");if(t.project||t.location)throw new Error("Vertex AI project based authentication is not supported on browser runtimes. Please do not provide a project or location.");this.vertexai=(l=t.vertexai)!==null&&l!==void 0?l:!1,this.apiKey=t.apiKey;const s=hS(t.httpOptions,t.vertexai,void 0,void 0);s&&(t.httpOptions?t.httpOptions.baseUrl=s:t.httpOptions={baseUrl:s}),this.apiVersion=t.apiVersion,this.httpOptions=t.httpOptions;const r=new Sx(this.apiKey);this.apiClient=new mA({auth:r,apiVersion:this.apiVersion,apiKey:this.apiKey,vertexai:this.vertexai,httpOptions:this.httpOptions,userAgentExtra:Tx+"web",uploader:new gx,downloader:new ax}),this.models=new UA(this.apiClient),this.live=new RA(this.apiClient,r,new yx),this.batches=new FT(this.apiClient),this.chats=new bE(this.models,this.apiClient),this.caches=new CE(this.apiClient),this.files=new kE(this.apiClient),this.operations=new PA(this.apiClient),this.authTokens=new WA(this.apiClient),this.tunings=new sx(this.apiClient),this.fileSearchStores=new ib(this.apiClient)}}const Cx=async o=>{const t=new Ex({apiKey:"PLACEHOLDER_API_KEY"}),s=`
    You are the BookHere Technical Support Assistant. 
    BookHere is a React Native mobile app for property rentals using WordPress (Homey Theme) as a backend.
    
    Use the following documentation context to answer the user's questions accurately:
    ${Object.values(Wo).map(r=>`Section: ${r.title}
Content: ${r.content}`).join(`

---

`)}
    
    Guidelines:
    1. Only answer questions related to BookHere and the provided documentation.
    2. If the answer is not in the docs, politely state that you don't have that information but can help with installation or setup.
    3. Keep answers concise, helpful, and technically accurate.
    4. Format your response using clean Markdown.
  `;try{return(await t.models.generateContent({model:"gemini-3-flash-preview",contents:o,config:{systemInstruction:s,temperature:.7}})).text||"I'm sorry, I couldn't generate a response at this time."}catch(r){return console.error("Gemini API Error:",r),"An error occurred while connecting to the AI assistant. Please try again later."}},_x=({isOpen:o,onClose:t})=>{const[l,s]=ke.useState([{role:"assistant",content:"Hello! I'm your BookHere technical assistant. How can I help you set up your property rental app today?"}]),[r,d]=ke.useState(""),[m,g]=ke.useState(!1),y=ke.useRef(null);ke.useEffect(()=>{y.current&&(y.current.scrollTop=y.current.scrollHeight)},[l]);const h=async()=>{if(!r.trim()||m)return;const v=r.trim();d(""),s(E=>[...E,{role:"user",content:v}]),g(!0);const T=await Cx(v);s(E=>[...E,{role:"assistant",content:T}]),g(!1)};return o?b.jsxs("div",{className:"fixed inset-y-0 right-0 w-full sm:w-[450px] bg-white shadow-2xl z-[60] flex flex-col border-l border-slate-200 transition-transform transform translate-x-0",children:[b.jsxs("div",{className:"p-4 border-b border-slate-100 flex items-center justify-between bg-gradient-to-r from-rose-500 to-rose-600 text-white",children:[b.jsxs("div",{className:"flex items-center gap-2",children:[b.jsx(gu,{size:20}),b.jsx("h3",{className:"font-bold",children:"Technical Assistant"})]}),b.jsx("button",{onClick:t,className:"p-1 hover:bg-white/20 rounded-full transition-colors",children:b.jsx(Rs,{size:24})})]}),b.jsxs("div",{ref:y,className:"flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50",children:[l.map((v,T)=>b.jsx("div",{className:`flex ${v.role==="user"?"justify-end":"justify-start"}`,children:b.jsxs("div",{className:`max-w-[85%] flex gap-3 ${v.role==="user"?"flex-row-reverse":""}`,children:[b.jsx("div",{className:`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${v.role==="user"?"bg-slate-200":"bg-rose-100 text-rose-600"}`,children:v.role==="user"?b.jsx(oS,{size:16}):b.jsx(b0,{size:16})}),b.jsx("div",{className:`p-3 rounded-2xl text-sm leading-relaxed shadow-sm ${v.role==="user"?"bg-rose-500 text-white rounded-tr-none":"bg-white text-slate-700 rounded-tl-none border border-slate-100"}`,children:v.content})]})},T)),m&&b.jsx("div",{className:"flex justify-start",children:b.jsxs("div",{className:"flex gap-3",children:[b.jsx("div",{className:"w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center",children:b.jsx(L0,{size:16,className:"animate-spin"})}),b.jsx("div",{className:"bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-none shadow-sm",children:b.jsxs("div",{className:"flex gap-1",children:[b.jsx("span",{className:"w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"}),b.jsx("span",{className:"w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"}),b.jsx("span",{className:"w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"})]})})]})})]}),b.jsxs("div",{className:"p-4 border-t border-slate-100 bg-white",children:[b.jsxs("div",{className:"flex gap-2 relative",children:[b.jsx("input",{type:"text",value:r,onChange:v=>d(v.target.value),onKeyDown:v=>v.key==="Enter"&&h(),placeholder:"Ask a technical question...",className:"w-full bg-slate-100 border-none rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-rose-500 outline-none pr-12"}),b.jsx("button",{onClick:h,disabled:!r.trim()||m,className:"absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-rose-500 text-white rounded-lg disabled:opacity-50 hover:bg-rose-600 transition-colors",children:b.jsx(F0,{size:18})})]}),b.jsx("p",{className:"text-[10px] text-slate-400 mt-2 text-center uppercase tracking-widest font-bold",children:"Powered by Gemini 3 Flash"})]})]}):null},Ax=()=>{var F;const[o,t]=ke.useState("getting_started"),[l,s]=ke.useState(!1),[r,d]=ke.useState(""),[m,g]=ke.useState(!1),[y,h]=ke.useState(!1),[v,T]=ke.useState([]),[E,_]=ke.useState(""),[k,M]=ke.useState(0),[I,U]=ke.useState(!1),[V,B]=ke.useState(null),K=ol.useRef(null);ke.useEffect(()=>{if(E&&K.current){const Y=K.current.querySelector(`[data-header-id="${E}"]`);Y&&Y.scrollIntoView({behavior:"smooth",block:"nearest"})}},[E]),ke.useEffect(()=>{const Y=()=>{h(window.scrollY>400);const oe=document.documentElement.scrollHeight-window.innerHeight,ue=window.scrollY/oe*100;M(ue)};return window.addEventListener("scroll",Y),()=>window.removeEventListener("scroll",Y)},[]),ke.useEffect(()=>{const Y=new IntersectionObserver(oe=>{oe.forEach(ue=>{ue.isIntersecting&&_(ue.target.id)})},{rootMargin:"-80px 0px -80% 0px"});return v.forEach(oe=>{const ue=document.getElementById(oe.id);ue&&Y.observe(ue)}),()=>Y.disconnect()},[v]);const $=()=>{window.scrollTo({top:0,behavior:"smooth"})},ee=Y=>{const oe=document.getElementById(Y);if(oe){const Se=oe.getBoundingClientRect().top+window.pageYOffset+-80;window.scrollTo({top:Se,behavior:"smooth"})}},J=ke.useMemo(()=>{if(!r)return Wo;const Y={};return Object.entries(Wo).forEach(([oe,ue])=>{var Ge;(ue.title.toLowerCase().includes(r.toLowerCase())||ue.content.toLowerCase().includes(r.toLowerCase())||((Ge=ue.tags)==null?void 0:Ge.some(ot=>ot.toLowerCase().includes(r.toLowerCase()))))&&(Y[oe]=ue)}),Y},[r]),Q=Wo[o];return b.jsxs("div",{className:"min-h-screen bg-white flex flex-col font-sans selection:bg-rose-100 selection:text-rose-900",children:[b.jsxs("header",{className:"bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50",children:[b.jsx("div",{className:"absolute bottom-0 left-0 h-[2px] bg-rose-500 transition-all duration-150 ease-out z-50",style:{width:`${k}%`}}),b.jsxs("div",{className:"max-w-[1440px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between",children:[b.jsxs("div",{className:"flex items-center gap-4",children:[b.jsx("button",{onClick:()=>s(!l),className:"lg:hidden p-2 hover:bg-slate-100 rounded-lg text-slate-600",children:l?b.jsx(Rs,{size:20}):b.jsx(om,{size:20})}),b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx("div",{className:"bg-rose-500 p-2 rounded-xl shadow-lg shadow-rose-200",children:b.jsx(B0,{className:"text-white",size:24})}),b.jsxs("div",{className:"hidden sm:block",children:[b.jsx("h1",{className:"font-extrabold text-slate-900 text-xl tracking-tight leading-none",children:"BookHere"}),b.jsxs("p",{className:"text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-0.5",children:["Documentation Hub ",aS]})]})]})]}),b.jsx("div",{className:"hidden md:flex flex-1 max-w-xl mx-8",children:b.jsxs("div",{className:"relative w-full group",children:[b.jsx("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:b.jsx(im,{className:"text-slate-400 group-focus-within:text-rose-500 transition-colors",size:18})}),b.jsx("input",{type:"text",placeholder:"Search across 60+ guides...",className:"w-full bg-slate-100/50 border border-slate-200 rounded-2xl pl-12 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 focus:bg-white transition-all",value:r,onChange:Y=>d(Y.target.value)})]})}),b.jsxs("div",{className:"flex items-center gap-2 sm:gap-4",children:[b.jsxs("div",{className:"relative group",children:[b.jsxs("button",{onClick:()=>g(!0),className:"flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all shadow-md shadow-slate-200 group",children:[b.jsx(gu,{size:16,className:"text-rose-400 group-hover:scale-110 transition-transform"}),b.jsx("span",{className:"hidden sm:inline",children:"Ask AI"})]}),b.jsxs("div",{className:"absolute top-full right-0 mt-2 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 -translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none whitespace-nowrap shadow-xl z-[60]",children:["Get AI Help",b.jsx("div",{className:"absolute bottom-full right-6 -mb-1 border-4 border-transparent border-b-slate-900"})]})]}),b.jsxs("a",{href:uS,target:"_blank",rel:"noopener noreferrer",className:"hidden sm:flex items-center gap-2 text-slate-600 hover:text-slate-900 px-3 py-2 rounded-xl text-sm font-semibold transition-colors",children:[b.jsx(nm,{size:16}),"Live Demo"]})]})]})]}),b.jsxs("div",{className:"flex flex-1 max-w-[1440px] mx-auto w-full relative",children:[b.jsx("aside",{className:`
          ${l?"translate-x-0":"-translate-x-full"} 
          lg:translate-x-0 fixed lg:sticky top-16 h-[calc(100vh-64px)] w-72 border-r border-slate-100 bg-white z-40 transition-transform duration-300 ease-in-out lg:bg-slate-50/30
        `,children:b.jsxs("nav",{className:"p-6 space-y-2 overflow-y-auto h-full hide-scrollbar",children:[b.jsxs("div",{className:"mb-8",children:[b.jsx("p",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 mb-4",children:"Core Documentation"}),b.jsx("div",{className:"space-y-1",children:Object.entries(Wo).map(([Y,oe])=>{const ue=oe.icon;return b.jsxs("button",{onClick:()=>{t(Y),s(!1),window.scrollTo({top:0,behavior:"smooth"})},className:`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all group ${o===Y?"bg-rose-50 text-rose-600 shadow-sm border border-rose-100":"text-slate-600 hover:bg-white hover:text-slate-900 border border-transparent hover:border-slate-100"}`,children:[b.jsx(ue,{size:18,className:`${o===Y?"text-rose-500":"text-slate-400 group-hover:text-slate-600"} transition-colors`}),oe.title,o===Y&&b.jsx(tm,{size:14,className:"ml-auto opacity-50"})]},Y)})})]}),b.jsxs("div",{className:"pt-8 border-t border-slate-200",children:[b.jsx("p",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest px-4 mb-4",children:"Community & Help"}),b.jsxs("div",{className:"space-y-4",children:[b.jsxs("a",{href:`mailto:${rS}`,className:"flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors",children:[b.jsx(zh,{size:18,className:"text-slate-400"}),"Support Tickets"]}),b.jsxs("div",{className:"px-4 py-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-xl shadow-slate-200 overflow-hidden relative group",children:[b.jsx("div",{className:"absolute top-0 right-0 -mr-4 -mt-4 w-16 h-16 bg-rose-500/20 rounded-full blur-2xl group-hover:bg-rose-500/30 transition-colors"}),b.jsx("h4",{className:"text-white font-bold text-sm mb-2",children:"Extended Support"}),b.jsx("p",{className:"text-slate-400 text-xs mb-4 leading-relaxed",children:"Get custom builds and prioritized installation from our expert dev team."}),b.jsx("button",{className:"w-full py-2 bg-white text-slate-900 rounded-lg text-xs font-bold hover:bg-slate-100 transition-colors",children:"Upgrade Now"})]})]})]})]})}),b.jsx("main",{className:"flex-1 min-w-0 p-6 lg:p-16 min-h-screen",children:b.jsxs("div",{className:"max-w-4xl mx-auto",children:[b.jsxs("div",{className:"flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-8",children:[b.jsx("span",{className:"hover:text-slate-600 cursor-pointer",children:"Docs"}),b.jsx(tm,{size:10}),b.jsx("span",{className:"text-rose-500",children:Q.title})]}),b.jsxs("article",{className:"min-h-[60vh]",children:[b.jsx("div",{className:"mb-12",children:b.jsx("div",{className:"flex flex-wrap gap-2 mb-4",children:(F=Q.tags)==null?void 0:F.map(Y=>b.jsxs("span",{className:"px-2 py-0.5 bg-slate-100 text-slate-500 rounded text-[10px] font-bold uppercase tracking-wider",children:["#",Y]},Y))})}),b.jsx(cS,{content:Q.content,onNavigate:Y=>{Wo[Y]&&(t(Y),window.scrollTo({top:0,behavior:"smooth"}))},onHeadersFound:T})]}),b.jsxs("div",{className:"mt-20 pt-12 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6",children:[b.jsxs("div",{className:"flex items-center gap-6",children:[b.jsxs("button",{className:"flex flex-col items-start gap-1 group",children:[b.jsx("span",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest",children:"Modified"}),b.jsxs("span",{className:"text-sm font-semibold text-slate-700 flex items-center gap-1.5",children:[b.jsx(M0,{size:14,className:"text-slate-400"})," Jan 2026"]})]}),b.jsx("div",{className:"w-px h-8 bg-slate-200"}),b.jsxs("div",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest",children:["© WebPenter Solutions",b.jsx("br",{}),"All rights Reserved"]})]}),b.jsx("div",{className:"flex gap-4",children:b.jsxs("div",{className:"relative group",children:[b.jsx("button",{className:"p-3 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-xl transition-all",children:b.jsx(nm,{size:20})}),b.jsxs("div",{className:"absolute bottom-full right-0 mb-2 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none whitespace-nowrap shadow-xl",children:["Share Page",b.jsx("div",{className:"absolute top-full right-4 -mt-1 border-4 border-transparent border-t-slate-900"})]})]})})]})]})}),b.jsxs("aside",{className:"hidden xl:block w-72 p-12 sticky top-16 h-fit",children:[b.jsx("h4",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-6",children:"Quick Actions"}),b.jsxs("div",{className:"space-y-4",children:[b.jsxs("button",{onClick:()=>g(!0),className:"w-full text-left p-4 rounded-2xl bg-rose-50 border border-rose-100 group hover:bg-rose-100 transition-colors",children:[b.jsx("div",{className:"bg-rose-500 p-1.5 rounded-lg w-fit mb-3 text-white shadow-lg shadow-rose-200",children:b.jsx(gu,{size:16})}),b.jsx("h5",{className:"font-bold text-rose-900 text-sm mb-1",children:"Stuck? Ask AI"}),b.jsx("p",{className:"text-rose-700/70 text-[11px] leading-relaxed",children:"Get instant answers to complex setup questions using our AI assistant."})]}),v.length>0&&b.jsxs("div",{className:"p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col max-h-[calc(85vh-250px)] shadow-sm",children:[b.jsxs("div",{className:"flex items-center justify-between mb-4 shrink-0",children:[b.jsxs("h5",{className:"font-bold text-slate-900 text-[10px] uppercase tracking-widest flex items-center gap-2",children:[b.jsx("div",{className:"w-1 h-1 rounded-full bg-rose-500"}),"On this page"]}),b.jsxs("button",{onClick:()=>{navigator.clipboard.writeText(window.location.href),B("page"),setTimeout(()=>B(null),2e3)},className:"text-slate-400 hover:text-rose-500 transition-colors relative",title:"Copy page link",children:[V==="page"?b.jsx(hu,{size:14,className:"text-emerald-500"}):b.jsx(Oh,{size:14}),V==="page"&&b.jsx("span",{className:"absolute right-0 bottom-full mb-2 px-2 py-1 bg-slate-900 text-white text-[10px] font-bold rounded whitespace-nowrap",children:"Copied!"})]})]}),b.jsxs("div",{className:"relative overflow-hidden",children:[b.jsx("div",{className:"absolute left-[7px] top-0 bottom-0 w-[1px] bg-slate-200"}),b.jsx("ul",{ref:K,className:"space-y-4 text-[13px] text-slate-500 overflow-y-auto pr-2 custom-scrollbar relative",children:v.map(Y=>{const oe=E===Y.id;return b.jsxs("li",{"data-header-id":Y.id,onClick:()=>ee(Y.id),className:`
                            relative pl-6 cursor-pointer transition-all duration-300 group
                            ${oe?"text-rose-600 font-bold":"hover:text-slate-900 font-medium"}
                            ${Y.level===3?"text-[12px] opacity-80":""}
                          `,children:[b.jsx("div",{className:`
                            absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-white transition-all duration-300 z-10
                            ${oe?"bg-rose-500 scale-100 shadow-lg shadow-rose-200":"bg-slate-300 scale-50 group-hover:scale-75 group-hover:bg-slate-400"}
                          `}),b.jsx("span",{className:"block break-words leading-snug",children:Y.text})]},Y.id)})})]})]})]})]})]}),b.jsx(_x,{isOpen:m,onClose:()=>g(!1)}),r&&b.jsxs("div",{className:"lg:hidden fixed inset-x-0 top-16 bg-white border-b border-slate-200 p-6 z-50 shadow-2xl h-[calc(100vh-64px)] overflow-y-auto",children:[b.jsxs("div",{className:"flex items-center justify-between mb-6",children:[b.jsxs("p",{className:"text-[10px] font-bold text-slate-400 uppercase tracking-widest",children:["Search Results (",Object.keys(J).length,")"]}),b.jsx("button",{onClick:()=>d(""),className:"p-1 text-slate-400 hover:text-slate-900",children:b.jsx(Rs,{size:20})})]}),b.jsx("div",{className:"space-y-3",children:Object.keys(J).length>0?Object.entries(J).map(([Y,oe])=>{const ue=oe.icon;return b.jsx("button",{onClick:()=>{t(Y),d("")},className:"w-full text-left p-4 bg-slate-50 hover:bg-rose-50 border border-slate-100 hover:border-rose-100 rounded-2xl group transition-all",children:b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsx(ue,{size:18,className:"text-slate-400 group-hover:text-rose-500"}),b.jsx("span",{className:"text-sm font-bold text-slate-700 group-hover:text-rose-900",children:oe.title})]})},Y)}):b.jsxs("div",{className:"text-center py-12",children:[b.jsx(im,{size:48,className:"text-slate-200 mx-auto mb-4"}),b.jsx("p",{className:"text-sm text-slate-500",children:"No matching guides found. Try a different search term."})]})})]}),b.jsx("div",{className:`fixed bottom-8 right-8 z-50 transition-all duration-300 ${y?"opacity-100 translate-y-0":"opacity-0 translate-y-10 pointer-events-none"}`,children:b.jsxs("div",{className:"relative group",children:[b.jsx("button",{onClick:$,className:"p-4 bg-rose-500 text-white rounded-2xl shadow-2xl shadow-rose-200 hover:bg-rose-600 hover:-translate-y-1 active:scale-95 transition-all",children:b.jsx(E0,{size:24})}),b.jsxs("div",{className:"absolute bottom-full right-0 mb-4 px-3 py-1.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-lg opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all pointer-events-none whitespace-nowrap shadow-xl",children:["Back to Top",b.jsx("div",{className:"absolute top-full right-6 -mt-1 border-4 border-transparent border-t-slate-900"})]})]})}),v.length>0&&b.jsxs("button",{onClick:()=>U(!0),className:"xl:hidden fixed bottom-8 left-8 p-4 bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 z-40 hover:bg-slate-50 active:scale-95 transition-all flex items-center gap-2",children:[b.jsx(om,{size:20,className:"text-rose-500"}),b.jsx("span",{className:"text-xs font-bold uppercase tracking-wider",children:"On this page"})]}),b.jsxs("div",{className:`xl:hidden fixed inset-0 z-[100] transition-all duration-500 ${I?"opacity-100":"opacity-0 pointer-events-none"}`,children:[b.jsx("div",{className:"absolute inset-0 bg-slate-900/40 backdrop-blur-sm",onClick:()=>U(!1)}),b.jsxs("div",{className:`absolute inset-x-0 bottom-0 bg-white rounded-t-[32px] p-8 transition-transform duration-500 shadow-2xl ${I?"translate-y-0":"translate-y-full"}`,children:[b.jsx("div",{className:"w-12 h-1.5 bg-slate-200 rounded-full mx-auto mb-8"}),b.jsxs("div",{className:"flex items-center justify-between mb-6",children:[b.jsx("h5",{className:"font-bold text-slate-900 text-lg",children:"On this page"}),b.jsx("button",{onClick:()=>U(!1),className:"p-2 bg-slate-100 rounded-full text-slate-500",children:b.jsx(Rs,{size:20})})]}),b.jsx("ul",{className:"space-y-6 max-h-[60vh] overflow-y-auto custom-scrollbar pr-2",children:v.map(Y=>b.jsxs("li",{onClick:()=>{ee(Y.id),U(!1)},className:`flex items-center gap-4 text-sm transition-colors ${E===Y.id?"text-rose-600 font-bold":"text-slate-600 font-medium"} ${Y.level===3?"pl-6 opacity-80":""}`,children:[b.jsx("div",{className:`w-1.5 h-1.5 rounded-full ${E===Y.id?"bg-rose-500":"bg-slate-200"}`}),Y.text]},Y.id))})]})]})]})},Pg=document.getElementById("root");if(!Pg)throw new Error("Could not find root element to mount to");const bx=m0.createRoot(Pg);bx.render(b.jsx(ol.StrictMode,{children:b.jsx(Ax,{})}));
