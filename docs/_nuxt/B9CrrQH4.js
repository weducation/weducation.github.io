const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./5LYAagdv.js","./Z85lmpL7.js","./INzJc7_E.js","./D0aFVtdS.js","./error-404.ehK72JOs.css","./DCvb58Dz.js","./error-500._g0akJim.css"])))=>i.map(i=>d[i]);
var OA=Object.defineProperty;var DA=(t,e,n)=>e in t?OA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var Rs=(t,e,n)=>DA(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function s(r){if(r.ep)return;r.ep=!0;const i=n(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ld(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ue={},oi=[],Fn=()=>{},xA=()=>!1,ya=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),cd=t=>t.startsWith("onUpdate:"),dt=Object.assign,ud=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},MA=Object.prototype.hasOwnProperty,Oe=(t,e)=>MA.call(t,e),de=Array.isArray,ai=t=>va(t)==="[object Map]",Kv=t=>va(t)==="[object Set]",LA=t=>va(t)==="[object RegExp]",he=t=>typeof t=="function",Qe=t=>typeof t=="string",Zs=t=>typeof t=="symbol",$e=t=>t!==null&&typeof t=="object",zv=t=>($e(t)||he(t))&&he(t.then)&&he(t.catch),Gv=Object.prototype.toString,va=t=>Gv.call(t),VA=t=>va(t).slice(8,-1),Qv=t=>va(t)==="[object Object]",hd=t=>Qe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,li=ld(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Hc=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},FA=/-(\w)/g,hn=Hc(t=>t.replace(FA,(e,n)=>n?n.toUpperCase():"")),UA=/\B([A-Z])/g,Dr=Hc(t=>t.replace(UA,"-$1").toLowerCase()),$c=Hc(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ku=Hc(t=>t?`on${$c(t)}`:""),Us=(t,e)=>!Object.is(t,e),ko=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Yv=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},BA=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Xv=t=>{const e=Qe(t)?Number(t):NaN;return isNaN(e)?t:e};let Zg;const Wc=()=>Zg||(Zg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function qc(t){if(de(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],r=Qe(s)?WA(s):qc(s);if(r)for(const i in r)e[i]=r[i]}return e}else if(Qe(t)||$e(t))return t}const jA=/;(?![^(]*\))/g,HA=/:([^]+)/,$A=/\/\*[^]*?\*\//g;function WA(t){const e={};return t.replace($A,"").split(jA).forEach(n=>{if(n){const s=n.split(HA);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Kc(t){let e="";if(Qe(t))e=t;else if(de(t))for(let n=0;n<t.length;n++){const s=Kc(t[n]);s&&(e+=s+" ")}else if($e(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function qA(t){if(!t)return null;let{class:e,style:n}=t;return e&&!Qe(e)&&(t.class=Kc(e)),n&&(t.style=qc(n)),t}const KA="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zA=ld(KA);function Jv(t){return!!t||t===""}const Zv=t=>!!(t&&t.__v_isRef===!0),GA=t=>Qe(t)?t:t==null?"":de(t)||$e(t)&&(t.toString===Gv||!he(t.toString))?Zv(t)?GA(t.value):JSON.stringify(t,eE,2):String(t),eE=(t,e)=>Zv(e)?eE(t,e.value):ai(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,r],i)=>(n[zu(s,i)+" =>"]=r,n),{})}:Kv(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>zu(n))}:Zs(e)?zu(e):$e(e)&&!de(e)&&!Qv(e)?String(e):e,zu=(t,e="")=>{var n;return Zs(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Vt;class tE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Vt,!e&&Vt&&(this.index=(Vt.scopes||(Vt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=Vt;try{return Vt=this,e()}finally{Vt=n}}}on(){Vt=this}off(){Vt=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function nE(t){return new tE(t)}function fd(){return Vt}function QA(t,e=!1){Vt&&Vt.cleanups.push(t)}let Fe;const Gu=new WeakSet;class sE{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Vt&&Vt.active&&Vt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Gu.has(this)&&(Gu.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||iE(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,em(this),oE(this);const e=Fe,n=In;Fe=this,In=!0;try{return this.fn()}finally{aE(this),Fe=e,In=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)gd(e);this.deps=this.depsTail=void 0,em(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Gu.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Lh(this)&&this.run()}get dirty(){return Lh(this)}}let rE=0,No,Oo;function iE(t,e=!1){if(t.flags|=8,e){t.next=Oo,Oo=t;return}t.next=No,No=t}function dd(){rE++}function pd(){if(--rE>0)return;if(Oo){let e=Oo;for(Oo=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;No;){let e=No;for(No=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function oE(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function aE(t){let e,n=t.depsTail,s=n;for(;s;){const r=s.prevDep;s.version===-1?(s===n&&(n=r),gd(s),YA(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=r}t.deps=e,t.depsTail=n}function Lh(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(lE(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function lE(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Go))return;t.globalVersion=Go;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Lh(t)){t.flags&=-3;return}const n=Fe,s=In;Fe=t,In=!0;try{oE(t);const r=t.fn(t._value);(e.version===0||Us(r,t._value))&&(t._value=r,e.version++)}catch(r){throw e.version++,r}finally{Fe=n,In=s,aE(t),t.flags&=-3}}function gd(t,e=!1){const{dep:n,prevSub:s,nextSub:r}=t;if(s&&(s.nextSub=r,t.prevSub=void 0),r&&(r.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)gd(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function YA(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let In=!0;const cE=[];function er(){cE.push(In),In=!1}function tr(){const t=cE.pop();In=t===void 0?!0:t}function em(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Fe;Fe=void 0;try{e()}finally{Fe=n}}}let Go=0;class XA{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class md{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!Fe||!In||Fe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Fe)n=this.activeLink=new XA(Fe,this),Fe.deps?(n.prevDep=Fe.depsTail,Fe.depsTail.nextDep=n,Fe.depsTail=n):Fe.deps=Fe.depsTail=n,uE(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=Fe.depsTail,n.nextDep=void 0,Fe.depsTail.nextDep=n,Fe.depsTail=n,Fe.deps===n&&(Fe.deps=s)}return n}trigger(e){this.version++,Go++,this.notify(e)}notify(e){dd();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{pd()}}}function uE(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)uE(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ql=new WeakMap,yr=Symbol(""),Vh=Symbol(""),Qo=Symbol("");function Ct(t,e,n){if(In&&Fe){let s=ql.get(t);s||ql.set(t,s=new Map);let r=s.get(n);r||(s.set(n,r=new md),r.map=s,r.key=n),r.track()}}function rs(t,e,n,s,r,i){const o=ql.get(t);if(!o){Go++;return}const a=l=>{l&&l.trigger()};if(dd(),e==="clear")o.forEach(a);else{const l=de(t),u=l&&hd(n);if(l&&n==="length"){const h=Number(s);o.forEach((f,p)=>{(p==="length"||p===Qo||!Zs(p)&&p>=h)&&a(f)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),u&&a(o.get(Qo)),e){case"add":l?u&&a(o.get("length")):(a(o.get(yr)),ai(t)&&a(o.get(Vh)));break;case"delete":l||(a(o.get(yr)),ai(t)&&a(o.get(Vh)));break;case"set":ai(t)&&a(o.get(yr));break}}pd()}function JA(t,e){const n=ql.get(t);return n&&n.get(e)}function zr(t){const e=Pe(t);return e===t?e:(Ct(e,"iterate",Qo),bn(t)?e:e.map(Ft))}function _d(t){return Ct(t=Pe(t),"iterate",Qo),t}const ZA={__proto__:null,[Symbol.iterator](){return Qu(this,Symbol.iterator,Ft)},concat(...t){return zr(this).concat(...t.map(e=>de(e)?zr(e):e))},entries(){return Qu(this,"entries",t=>(t[1]=Ft(t[1]),t))},every(t,e){return Jn(this,"every",t,e,void 0,arguments)},filter(t,e){return Jn(this,"filter",t,e,n=>n.map(Ft),arguments)},find(t,e){return Jn(this,"find",t,e,Ft,arguments)},findIndex(t,e){return Jn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Jn(this,"findLast",t,e,Ft,arguments)},findLastIndex(t,e){return Jn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Jn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Yu(this,"includes",t)},indexOf(...t){return Yu(this,"indexOf",t)},join(t){return zr(this).join(t)},lastIndexOf(...t){return Yu(this,"lastIndexOf",t)},map(t,e){return Jn(this,"map",t,e,void 0,arguments)},pop(){return fo(this,"pop")},push(...t){return fo(this,"push",t)},reduce(t,...e){return tm(this,"reduce",t,e)},reduceRight(t,...e){return tm(this,"reduceRight",t,e)},shift(){return fo(this,"shift")},some(t,e){return Jn(this,"some",t,e,void 0,arguments)},splice(...t){return fo(this,"splice",t)},toReversed(){return zr(this).toReversed()},toSorted(t){return zr(this).toSorted(t)},toSpliced(...t){return zr(this).toSpliced(...t)},unshift(...t){return fo(this,"unshift",t)},values(){return Qu(this,"values",Ft)}};function Qu(t,e,n){const s=_d(t),r=s[e]();return s!==t&&!bn(t)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=n(i.value)),i}),r}const e0=Array.prototype;function Jn(t,e,n,s,r,i){const o=_d(t),a=o!==t&&!bn(t),l=o[e];if(l!==e0[e]){const f=l.apply(t,i);return a?Ft(f):f}let u=n;o!==t&&(a?u=function(f,p){return n.call(this,Ft(f),p,t)}:n.length>2&&(u=function(f,p){return n.call(this,f,p,t)}));const h=l.call(o,u,s);return a&&r?r(h):h}function tm(t,e,n,s){const r=_d(t);let i=n;return r!==t&&(bn(t)?n.length>3&&(i=function(o,a,l){return n.call(this,o,a,l,t)}):i=function(o,a,l){return n.call(this,o,Ft(a),l,t)}),r[e](i,...s)}function Yu(t,e,n){const s=Pe(t);Ct(s,"iterate",Qo);const r=s[e](...n);return(r===-1||r===!1)&&Ed(n[0])?(n[0]=Pe(n[0]),s[e](...n)):r}function fo(t,e,n=[]){er(),dd();const s=Pe(t)[e].apply(t,n);return pd(),tr(),s}const t0=ld("__proto__,__v_isRef,__isVue"),hE=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Zs));function n0(t){Zs(t)||(t=String(t));const e=Pe(this);return Ct(e,"has",t),e.hasOwnProperty(t)}class fE{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const r=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return i;if(n==="__v_raw")return s===(r?i?f0:mE:i?gE:pE).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=de(e);if(!r){let l;if(o&&(l=ZA[n]))return l;if(n==="hasOwnProperty")return n0}const a=Reflect.get(e,n,nt(e)?e:s);return(Zs(n)?hE.has(n):t0(n))||(r||Ct(e,"get",n),i)?a:nt(a)?o&&hd(n)?a:a.value:$e(a)?r?_E(a):_s(a):a}}class dE extends fE{constructor(e=!1){super(!1,e)}set(e,n,s,r){let i=e[n];if(!this._isShallow){const l=qs(i);if(!bn(s)&&!qs(s)&&(i=Pe(i),s=Pe(s)),!de(e)&&nt(i)&&!nt(s))return l?!1:(i.value=s,!0)}const o=de(e)&&hd(n)?Number(n)<e.length:Oe(e,n),a=Reflect.set(e,n,s,nt(e)?e:r);return e===Pe(r)&&(o?Us(s,i)&&rs(e,"set",n,s):rs(e,"add",n,s)),a}deleteProperty(e,n){const s=Oe(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&s&&rs(e,"delete",n,void 0),r}has(e,n){const s=Reflect.has(e,n);return(!Zs(n)||!hE.has(n))&&Ct(e,"has",n),s}ownKeys(e){return Ct(e,"iterate",de(e)?"length":yr),Reflect.ownKeys(e)}}class s0 extends fE{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const r0=new dE,i0=new s0,o0=new dE(!0);const Fh=t=>t,sl=t=>Reflect.getPrototypeOf(t);function a0(t,e,n){return function(...s){const r=this.__v_raw,i=Pe(r),o=ai(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=r[t](...s),h=n?Fh:e?Bh:Ft;return!e&&Ct(i,"iterate",l?Vh:yr),{next(){const{value:f,done:p}=u.next();return p?{value:f,done:p}:{value:a?[h(f[0]),h(f[1])]:h(f),done:p}},[Symbol.iterator](){return this}}}}function rl(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function l0(t,e){const n={get(r){const i=this.__v_raw,o=Pe(i),a=Pe(r);t||(Us(r,a)&&Ct(o,"get",r),Ct(o,"get",a));const{has:l}=sl(o),u=e?Fh:t?Bh:Ft;if(l.call(o,r))return u(i.get(r));if(l.call(o,a))return u(i.get(a));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!t&&Ct(Pe(r),"iterate",yr),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=Pe(i),a=Pe(r);return t||(Us(r,a)&&Ct(o,"has",r),Ct(o,"has",a)),r===a?i.has(r):i.has(r)||i.has(a)},forEach(r,i){const o=this,a=o.__v_raw,l=Pe(a),u=e?Fh:t?Bh:Ft;return!t&&Ct(l,"iterate",yr),a.forEach((h,f)=>r.call(i,u(h),u(f),o))}};return dt(n,t?{add:rl("add"),set:rl("set"),delete:rl("delete"),clear:rl("clear")}:{add(r){!e&&!bn(r)&&!qs(r)&&(r=Pe(r));const i=Pe(this);return sl(i).has.call(i,r)||(i.add(r),rs(i,"add",r,r)),this},set(r,i){!e&&!bn(i)&&!qs(i)&&(i=Pe(i));const o=Pe(this),{has:a,get:l}=sl(o);let u=a.call(o,r);u||(r=Pe(r),u=a.call(o,r));const h=l.call(o,r);return o.set(r,i),u?Us(i,h)&&rs(o,"set",r,i):rs(o,"add",r,i),this},delete(r){const i=Pe(this),{has:o,get:a}=sl(i);let l=o.call(i,r);l||(r=Pe(r),l=o.call(i,r)),a&&a.call(i,r);const u=i.delete(r);return l&&rs(i,"delete",r,void 0),u},clear(){const r=Pe(this),i=r.size!==0,o=r.clear();return i&&rs(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{n[r]=a0(r,t,e)}),n}function yd(t,e){const n=l0(t,e);return(s,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?s:Reflect.get(Oe(n,r)&&r in s?n:s,r,i)}const c0={get:yd(!1,!1)},u0={get:yd(!1,!0)},h0={get:yd(!0,!1)};const pE=new WeakMap,gE=new WeakMap,mE=new WeakMap,f0=new WeakMap;function d0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function p0(t){return t.__v_skip||!Object.isExtensible(t)?0:d0(VA(t))}function _s(t){return qs(t)?t:vd(t,!1,r0,c0,pE)}function is(t){return vd(t,!1,o0,u0,gE)}function _E(t){return vd(t,!0,i0,h0,mE)}function vd(t,e,n,s,r){if(!$e(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const o=p0(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return r.set(t,a),a}function ci(t){return qs(t)?ci(t.__v_raw):!!(t&&t.__v_isReactive)}function qs(t){return!!(t&&t.__v_isReadonly)}function bn(t){return!!(t&&t.__v_isShallow)}function Ed(t){return t?!!t.__v_raw:!1}function Pe(t){const e=t&&t.__v_raw;return e?Pe(e):t}function Uh(t){return!Oe(t,"__v_skip")&&Object.isExtensible(t)&&Yv(t,"__v_skip",!0),t}const Ft=t=>$e(t)?_s(t):t,Bh=t=>$e(t)?_E(t):t;function nt(t){return t?t.__v_isRef===!0:!1}function Gt(t){return yE(t,!1)}function Ei(t){return yE(t,!0)}function yE(t,e){return nt(t)?t:new g0(t,e)}class g0{constructor(e,n){this.dep=new md,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Pe(e),this._value=n?e:Ft(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||bn(e)||qs(e);e=s?e:Pe(e),Us(e,n)&&(this._rawValue=e,this._value=s?e:Ft(e),this.dep.trigger())}}function Ge(t){return nt(t)?t.value:t}function Dn(t){return he(t)?t():Ge(t)}const m0={get:(t,e,n)=>e==="__v_raw"?t:Ge(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const r=t[e];return nt(r)&&!nt(n)?(r.value=n,!0):Reflect.set(t,e,n,s)}};function vE(t){return ci(t)?t:new Proxy(t,m0)}class _0{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return JA(Pe(this._object),this._key)}}class y0{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0,this._value=void 0}get value(){return this._value=this._getter()}}function v0(t,e,n){return nt(t)?t:he(t)?new y0(t):$e(t)&&arguments.length>1?E0(t,e,n):Gt(t)}function E0(t,e,n){const s=t[e];return nt(s)?s:new _0(t,e,n)}class T0{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new md(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Go-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&Fe!==this)return iE(this,!0),!0}get value(){const e=this.dep.track();return lE(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function w0(t,e,n=!1){let s,r;return he(t)?s=t:(s=t.get,r=t.set),new T0(s,r,n)}const il={},Kl=new WeakMap;let fr;function I0(t,e=!1,n=fr){if(n){let s=Kl.get(n);s||Kl.set(n,s=[]),s.push(t)}}function b0(t,e,n=Ue){const{immediate:s,deep:r,once:i,scheduler:o,augmentJob:a,call:l}=n,u=C=>r?C:bn(C)||r===!1||r===0?Ds(C,1):Ds(C);let h,f,p,m,_=!1,y=!1;if(nt(t)?(f=()=>t.value,_=bn(t)):ci(t)?(f=()=>u(t),_=!0):de(t)?(y=!0,_=t.some(C=>ci(C)||bn(C)),f=()=>t.map(C=>{if(nt(C))return C.value;if(ci(C))return u(C);if(he(C))return l?l(C,2):C()})):he(t)?e?f=l?()=>l(t,2):t:f=()=>{if(p){er();try{p()}finally{tr()}}const C=fr;fr=h;try{return l?l(t,3,[m]):t(m)}finally{fr=C}}:f=Fn,e&&r){const C=f,x=r===!0?1/0:r;f=()=>Ds(C(),x)}const b=fd(),O=()=>{h.stop(),b&&b.active&&ud(b.effects,h)};if(i&&e){const C=e;e=(...x)=>{C(...x),O()}}let D=y?new Array(t.length).fill(il):il;const v=C=>{if(!(!(h.flags&1)||!h.dirty&&!C))if(e){const x=h.run();if(r||_||(y?x.some((M,I)=>Us(M,D[I])):Us(x,D))){p&&p();const M=fr;fr=h;try{const I=[x,D===il?void 0:y&&D[0]===il?[]:D,m];l?l(e,3,I):e(...I),D=x}finally{fr=M}}}else h.run()};return a&&a(v),h=new sE(f),h.scheduler=o?()=>o(v,!1):v,m=C=>I0(C,!1,h),p=h.onStop=()=>{const C=Kl.get(h);if(C){if(l)l(C,4);else for(const x of C)x();Kl.delete(h)}},e?s?v(!0):D=h.run():o?o(v.bind(null,!0),!0):h.run(),O.pause=h.pause.bind(h),O.resume=h.resume.bind(h),O.stop=O,O}function Ds(t,e=1/0,n){if(e<=0||!$e(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,nt(t))Ds(t.value,e,n);else if(de(t))for(let s=0;s<t.length;s++)Ds(t[s],e,n);else if(Kv(t)||ai(t))t.forEach(s=>{Ds(s,e,n)});else if(Qv(t)){for(const s in t)Ds(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&Ds(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ea(t,e,n,s){try{return s?t(...s):t()}catch(r){Ui(r,e,n)}}function Cn(t,e,n,s){if(he(t)){const r=Ea(t,e,n,s);return r&&zv(r)&&r.catch(i=>{Ui(i,e,n)}),r}if(de(t)){const r=[];for(let i=0;i<t.length;i++)r.push(Cn(t[i],e,n,s));return r}}function Ui(t,e,n,s=!0){const r=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ue;if(e){let a=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const h=a.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,l,u)===!1)return}a=a.parent}if(i){er(),Ea(i,null,10,[t,l,u]),tr();return}}R0(t,n,r,s,o)}function R0(t,e,n,s=!0,r=!1){if(r)throw t;console.error(t)}const Ut=[];let On=-1;const ui=[];let Ss=null,Yr=0;const EE=Promise.resolve();let zl=null;function Ta(t){const e=zl||EE;return t?e.then(this?t.bind(this):t):e}function A0(t){let e=On+1,n=Ut.length;for(;e<n;){const s=e+n>>>1,r=Ut[s],i=Yo(r);i<t||i===t&&r.flags&2?e=s+1:n=s}return e}function Td(t){if(!(t.flags&1)){const e=Yo(t),n=Ut[Ut.length-1];!n||!(t.flags&2)&&e>=Yo(n)?Ut.push(t):Ut.splice(A0(e),0,t),t.flags|=1,TE()}}function TE(){zl||(zl=EE.then(wE))}function jh(t){de(t)?ui.push(...t):Ss&&t.id===-1?Ss.splice(Yr+1,0,t):t.flags&1||(ui.push(t),t.flags|=1),TE()}function nm(t,e,n=On+1){for(;n<Ut.length;n++){const s=Ut[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ut.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Gl(t){if(ui.length){const e=[...new Set(ui)].sort((n,s)=>Yo(n)-Yo(s));if(ui.length=0,Ss){Ss.push(...e);return}for(Ss=e,Yr=0;Yr<Ss.length;Yr++){const n=Ss[Yr];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Ss=null,Yr=0}}const Yo=t=>t.id==null?t.flags&2?-1:1/0:t.id;function wE(t){try{for(On=0;On<Ut.length;On++){const e=Ut[On];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ea(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;On<Ut.length;On++){const e=Ut[On];e&&(e.flags&=-2)}On=-1,Ut.length=0,Gl(),zl=null,(Ut.length||ui.length)&&wE()}}let en=null,IE=null;function Ql(t){const e=en;return en=t,IE=t&&t.type.__scopeId||null,e}function bE(t,e=en,n){if(!e||t._n)return t;const s=(...r)=>{s._d&&pm(-1);const i=Ql(e);let o;try{o=t(...r)}finally{Ql(i),s._d&&pm(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function xn(t,e,n,s){const r=t.dirs,i=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(er(),Cn(l,n,8,[t.el,a,t,e]),tr())}}const C0=Symbol("_vte"),RE=t=>t.__isTeleport,Ps=Symbol("_leaveCb"),ol=Symbol("_enterCb");function S0(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Id(()=>{t.isMounted=!0}),Ia(()=>{t.isUnmounting=!0}),t}const ln=[Function,Array],AE={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ln,onEnter:ln,onAfterEnter:ln,onEnterCancelled:ln,onBeforeLeave:ln,onLeave:ln,onAfterLeave:ln,onLeaveCancelled:ln,onBeforeAppear:ln,onAppear:ln,onAfterAppear:ln,onAppearCancelled:ln},CE=t=>{const e=t.subTree;return e.component?CE(e.component):e},P0={name:"BaseTransition",props:AE,setup(t,{slots:e}){const n=ba(),s=S0();return()=>{const r=e.default&&kE(e.default(),!0);if(!r||!r.length)return;const i=SE(r),o=Pe(t),{mode:a}=o;if(s.isLeaving)return Xu(i);const l=sm(i);if(!l)return Xu(i);let u=Hh(l,o,s,n,f=>u=f);l.type!==Nt&&Ti(l,u);let h=n.subTree&&sm(n.subTree);if(h&&h.type!==Nt&&!mn(l,h)&&CE(n).type!==Nt){let f=Hh(h,o,s,n);if(Ti(h,f),a==="out-in"&&l.type!==Nt)return s.isLeaving=!0,f.afterLeave=()=>{s.isLeaving=!1,n.job.flags&8||n.update(),delete f.afterLeave,h=void 0},Xu(i);a==="in-out"&&l.type!==Nt?f.delayLeave=(p,m,_)=>{const y=PE(s,h);y[String(h.key)]=h,p[Ps]=()=>{m(),p[Ps]=void 0,delete u.delayedLeave,h=void 0},u.delayedLeave=()=>{_(),delete u.delayedLeave,h=void 0}}:h=void 0}else h&&(h=void 0);return i}}};function SE(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Nt){e=n;break}}return e}const k0=P0;function PE(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Hh(t,e,n,s,r){const{appear:i,mode:o,persisted:a=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:p,onLeave:m,onAfterLeave:_,onLeaveCancelled:y,onBeforeAppear:b,onAppear:O,onAfterAppear:D,onAppearCancelled:v}=e,C=String(t.key),x=PE(n,t),M=(w,R)=>{w&&Cn(w,s,9,R)},I=(w,R)=>{const N=R[1];M(w,R),de(w)?w.every(P=>P.length<=1)&&N():w.length<=1&&N()},T={mode:o,persisted:a,beforeEnter(w){let R=l;if(!n.isMounted)if(i)R=b||l;else return;w[Ps]&&w[Ps](!0);const N=x[C];N&&mn(t,N)&&N.el[Ps]&&N.el[Ps](),M(R,[w])},enter(w){let R=u,N=h,P=f;if(!n.isMounted)if(i)R=O||u,N=D||h,P=v||f;else return;let A=!1;const ge=w[ol]=Ee=>{A||(A=!0,Ee?M(P,[w]):M(N,[w]),T.delayedLeave&&T.delayedLeave(),w[ol]=void 0)};R?I(R,[w,ge]):ge()},leave(w,R){const N=String(t.key);if(w[ol]&&w[ol](!0),n.isUnmounting)return R();M(p,[w]);let P=!1;const A=w[Ps]=ge=>{P||(P=!0,R(),ge?M(y,[w]):M(_,[w]),w[Ps]=void 0,x[N]===t&&delete x[N])};x[N]=t,m?I(m,[w,A]):A()},clone(w){const R=Hh(w,e,n,s,r);return r&&r(R),R}};return T}function Xu(t){if(wa(t))return t=fs(t),t.children=null,t}function sm(t){if(!wa(t))return RE(t.type)&&t.children?SE(t.children):t;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&he(n.default))return n.default()}}function Ti(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ti(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function kE(t,e=!1,n){let s=[],r=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Yt?(o.patchFlag&128&&r++,s=s.concat(kE(o.children,e,a))):(e||o.type!==Nt)&&s.push(a!=null?fs(o,{key:a}):o)}if(r>1)for(let i=0;i<s.length;i++)s[i].patchFlag=-2;return s}/*! #__NO_SIDE_EFFECTS__ */function Bi(t,e){return he(t)?dt({name:t.name},e,{setup:t}):t}function wd(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Xo(t,e,n,s,r=!1){if(de(t)){t.forEach((_,y)=>Xo(_,e&&(de(e)?e[y]:e),n,s,r));return}if(vr(s)&&!r){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Xo(t,e,n,s.component.subTree);return}const i=s.shapeFlag&4?Sd(s.component):s.el,o=r?null:i,{i:a,r:l}=t,u=e&&e.r,h=a.refs===Ue?a.refs={}:a.refs,f=a.setupState,p=Pe(f),m=f===Ue?()=>!1:_=>Oe(p,_);if(u!=null&&u!==l&&(Qe(u)?(h[u]=null,m(u)&&(f[u]=null)):nt(u)&&(u.value=null)),he(l))Ea(l,a,12,[o,h]);else{const _=Qe(l),y=nt(l);if(_||y){const b=()=>{if(t.f){const O=_?m(l)?f[l]:h[l]:l.value;r?de(O)&&ud(O,i):de(O)?O.includes(i)||O.push(i):_?(h[l]=[i],m(l)&&(f[l]=h[l])):(l.value=[i],t.k&&(h[t.k]=l.value))}else _?(h[l]=o,m(l)&&(f[l]=o)):y&&(l.value=o,t.k&&(h[t.k]=o))};o?(b.id=-1,mt(b,n)):b()}}}let rm=!1;const Gr=()=>{rm||(console.error("Hydration completed but contains mismatches."),rm=!0)},N0=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",O0=t=>t.namespaceURI.includes("MathML"),al=t=>{if(t.nodeType===1){if(N0(t))return"svg";if(O0(t))return"mathml"}},si=t=>t.nodeType===8;function D0(t){const{mt:e,p:n,o:{patchProp:s,createText:r,nextSibling:i,parentNode:o,remove:a,insert:l,createComment:u}}=t,h=(v,C)=>{if(!C.hasChildNodes()){n(null,v,C),Gl(),C._vnode=v;return}f(C.firstChild,v,null,null,null),Gl(),C._vnode=v},f=(v,C,x,M,I,T=!1)=>{T=T||!!C.dynamicChildren;const w=si(v)&&v.data==="[",R=()=>y(v,C,x,M,I,w),{type:N,ref:P,shapeFlag:A,patchFlag:ge}=C;let Ee=v.nodeType;C.el=v,ge===-2&&(T=!1,C.dynamicChildren=null);let ne=null;switch(N){case wr:Ee!==3?C.children===""?(l(C.el=r(""),o(v),v),ne=v):ne=R():(v.data!==C.children&&(Gr(),v.data=C.children),ne=i(v));break;case Nt:D(v)?(ne=i(v),O(C.el=v.content.firstChild,v,x)):Ee!==8||w?ne=R():ne=i(v);break;case Rl:if(w&&(v=i(v),Ee=v.nodeType),Ee===1||Ee===3){ne=v;const ue=!C.children.length;for(let te=0;te<C.staticCount;te++)ue&&(C.children+=ne.nodeType===1?ne.outerHTML:ne.data),te===C.staticCount-1&&(C.anchor=ne),ne=i(ne);return w?i(ne):ne}else R();break;case Yt:w?ne=_(v,C,x,M,I,T):ne=R();break;default:if(A&1)(Ee!==1||C.type.toLowerCase()!==v.tagName.toLowerCase())&&!D(v)?ne=R():ne=p(v,C,x,M,I,T);else if(A&6){C.slotScopeIds=I;const ue=o(v);if(w?ne=b(v):si(v)&&v.data==="teleport start"?ne=b(v,v.data,"teleport end"):ne=i(v),e(C,ue,null,x,M,al(ue),T),vr(C)&&!C.type.__asyncResolved){let te;w?(te=tt(Yt),te.anchor=ne?ne.previousSibling:ue.lastChild):te=v.nodeType===3?dT(""):tt("div"),te.el=v,C.component.subTree=te}}else A&64?Ee!==8?ne=R():ne=C.type.hydrate(v,C,x,M,I,T,t,m):A&128&&(ne=C.type.hydrate(v,C,x,M,al(o(v)),I,T,t,f))}return P!=null&&Xo(P,null,M,C),ne},p=(v,C,x,M,I,T)=>{T=T||!!C.dynamicChildren;const{type:w,props:R,patchFlag:N,shapeFlag:P,dirs:A,transition:ge}=C,Ee=w==="input"||w==="option";if(Ee||N!==-1){A&&xn(C,null,x,"created");let ne=!1;if(D(v)){ne=ZE(null,ge)&&x&&x.vnode.props&&x.vnode.props.appear;const te=v.content.firstChild;ne&&ge.beforeEnter(te),O(te,v,x),C.el=v=te}if(P&16&&!(R&&(R.innerHTML||R.textContent))){let te=m(v.firstChild,C,v,x,M,I,T);for(;te;){ll(v,1)||Gr();const qe=te;te=te.nextSibling,a(qe)}}else if(P&8){let te=C.children;te[0]===`
`&&(v.tagName==="PRE"||v.tagName==="TEXTAREA")&&(te=te.slice(1)),v.textContent!==te&&(ll(v,0)||Gr(),v.textContent=C.children)}if(R){if(Ee||!T||N&48){const te=v.tagName.includes("-");for(const qe in R)(Ee&&(qe.endsWith("value")||qe==="indeterminate")||ya(qe)&&!li(qe)||qe[0]==="."||te)&&s(v,qe,null,R[qe],void 0,x)}else if(R.onClick)s(v,"onClick",null,R.onClick,void 0,x);else if(N&4&&ci(R.style))for(const te in R.style)R.style[te]}let ue;(ue=R&&R.onVnodeBeforeMount)&&$t(ue,x,C),A&&xn(C,null,x,"beforeMount"),((ue=R&&R.onVnodeMounted)||A||ne)&&oT(()=>{ue&&$t(ue,x,C),ne&&ge.enter(v),A&&xn(C,null,x,"mounted")},M)}return v.nextSibling},m=(v,C,x,M,I,T,w)=>{w=w||!!C.dynamicChildren;const R=C.children,N=R.length;for(let P=0;P<N;P++){const A=w?R[P]:R[P]=Xt(R[P]),ge=A.type===wr;v?(ge&&!w&&P+1<N&&Xt(R[P+1]).type===wr&&(l(r(v.data.slice(A.children.length)),x,i(v)),v.data=A.children),v=f(v,A,M,I,T,w)):ge&&!A.children?l(A.el=r(""),x):(ll(x,1)||Gr(),n(null,A,x,null,M,I,al(x),T))}return v},_=(v,C,x,M,I,T)=>{const{slotScopeIds:w}=C;w&&(I=I?I.concat(w):w);const R=o(v),N=m(i(v),C,R,x,M,I,T);return N&&si(N)&&N.data==="]"?i(C.anchor=N):(Gr(),l(C.anchor=u("]"),R,N),N)},y=(v,C,x,M,I,T)=>{if(ll(v.parentElement,1)||Gr(),C.el=null,T){const N=b(v);for(;;){const P=i(v);if(P&&P!==N)a(P);else break}}const w=i(v),R=o(v);return a(v),n(null,C,R,w,x,M,al(R),I),x&&(x.vnode.el=C.el,Qc(x,C.el)),w},b=(v,C="[",x="]")=>{let M=0;for(;v;)if(v=i(v),v&&si(v)&&(v.data===C&&M++,v.data===x)){if(M===0)return i(v);M--}return v},O=(v,C,x)=>{const M=C.parentNode;M&&M.replaceChild(v,C);let I=x;for(;I;)I.vnode.el===C&&(I.vnode.el=I.subTree.el=v),I=I.parent},D=v=>v.nodeType===1&&v.tagName==="TEMPLATE";return[h,f]}const im="data-allow-mismatch",x0={0:"text",1:"children",2:"class",3:"style",4:"attribute"};function ll(t,e){if(e===0||e===1)for(;t&&!t.hasAttribute(im);)t=t.parentElement;const n=t&&t.getAttribute(im);if(n==null)return!1;if(n==="")return!0;{const s=n.split(",");return e===0&&s.includes("children")?!0:n.split(",").includes(x0[e])}}Wc().requestIdleCallback;Wc().cancelIdleCallback;function M0(t,e){if(si(t)&&t.data==="["){let n=1,s=t.nextSibling;for(;s;){if(s.nodeType===1){if(e(s)===!1)break}else if(si(s))if(s.data==="]"){if(--n===0)break}else s.data==="["&&n++;s=s.nextSibling}}else e(t)}const vr=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function $h(t){he(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:s,delay:r=200,hydrate:i,timeout:o,suspensible:a=!0,onError:l}=t;let u=null,h,f=0;const p=()=>(f++,u=null,m()),m=()=>{let _;return u||(_=u=e().catch(y=>{if(y=y instanceof Error?y:new Error(String(y)),l)return new Promise((b,O)=>{l(y,()=>b(p()),()=>O(y),f+1)});throw y}).then(y=>_!==u&&u?u:(y&&(y.__esModule||y[Symbol.toStringTag]==="Module")&&(y=y.default),h=y,y)))};return Bi({name:"AsyncComponentWrapper",__asyncLoader:m,__asyncHydrate(_,y,b){const O=i?()=>{const D=i(b,v=>M0(_,v));D&&(y.bum||(y.bum=[])).push(D)}:b;h?O():m().then(()=>!y.isUnmounted&&O())},get __asyncResolved(){return h},setup(){const _=it;if(wd(_),h)return()=>Ju(h,_);const y=v=>{u=null,Ui(v,_,13,!s)};if(a&&_.suspense||bi)return m().then(v=>()=>Ju(v,_)).catch(v=>(y(v),()=>s?tt(s,{error:v}):null));const b=Gt(!1),O=Gt(),D=Gt(!!r);return r&&setTimeout(()=>{D.value=!1},r),o!=null&&setTimeout(()=>{if(!b.value&&!O.value){const v=new Error(`Async component timed out after ${o}ms.`);y(v),O.value=v}},o),m().then(()=>{b.value=!0,_.parent&&wa(_.parent.vnode)&&_.parent.update()}).catch(v=>{y(v),O.value=v}),()=>{if(b.value&&h)return Ju(h,_);if(O.value&&s)return tt(s,{error:O.value});if(n&&!D.value)return tt(n)}}})}function Ju(t,e){const{ref:n,props:s,children:r,ce:i}=e.vnode,o=tt(t,s,r);return o.ref=n,o.ce=i,delete e.vnode.ce,o}const wa=t=>t.type.__isKeepAlive,L0={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=ba(),s=n.ctx;if(!s.renderer)return()=>{const D=e.default&&e.default();return D&&D.length===1?D[0]:D};const r=new Map,i=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:u,um:h,o:{createElement:f}}}=s,p=f("div");s.activate=(D,v,C,x,M)=>{const I=D.component;u(D,v,C,0,a),l(I.vnode,D,v,C,I,a,x,D.slotScopeIds,M),mt(()=>{I.isDeactivated=!1,I.a&&ko(I.a);const T=D.props&&D.props.onVnodeMounted;T&&$t(T,I.parent,D)},a)},s.deactivate=D=>{const v=D.component;Xl(v.m),Xl(v.a),u(D,p,null,1,a),mt(()=>{v.da&&ko(v.da);const C=D.props&&D.props.onVnodeUnmounted;C&&$t(C,v.parent,D),v.isDeactivated=!0},a)};function m(D){Zu(D),h(D,n,a,!0)}function _(D){r.forEach((v,C)=>{const x=Xh(v.type);x&&!D(x)&&y(C)})}function y(D){const v=r.get(D);v&&(!o||!mn(v,o))?m(v):o&&Zu(o),r.delete(D),i.delete(D)}Tr(()=>[t.include,t.exclude],([D,v])=>{D&&_(C=>Io(D,C)),v&&_(C=>!Io(v,C))},{flush:"post",deep:!0});let b=null;const O=()=>{b!=null&&(Jl(n.subTree.type)?mt(()=>{r.set(b,cl(n.subTree))},n.subTree.suspense):r.set(b,cl(n.subTree)))};return Id(O),xE(O),Ia(()=>{r.forEach(D=>{const{subTree:v,suspense:C}=n,x=cl(v);if(D.type===x.type&&D.key===x.key){Zu(x);const M=x.component.da;M&&mt(M,C);return}m(D)})}),()=>{if(b=null,!e.default)return o=null;const D=e.default(),v=D[0];if(D.length>1)return o=null,D;if(!Ii(v)||!(v.shapeFlag&4)&&!(v.shapeFlag&128))return o=null,v;let C=cl(v);if(C.type===Nt)return o=null,C;const x=C.type,M=Xh(vr(C)?C.type.__asyncResolved||{}:x),{include:I,exclude:T,max:w}=t;if(I&&(!M||!Io(I,M))||T&&M&&Io(T,M))return C.shapeFlag&=-257,o=C,v;const R=C.key==null?x:C.key,N=r.get(R);return C.el&&(C=fs(C),v.shapeFlag&128&&(v.ssContent=C)),b=R,N?(C.el=N.el,C.component=N.component,C.transition&&Ti(C,C.transition),C.shapeFlag|=512,i.delete(R),i.add(R)):(i.add(R),w&&i.size>parseInt(w,10)&&y(i.values().next().value)),C.shapeFlag|=256,o=C,Jl(v.type)?v:C}}},V0=L0;function Io(t,e){return de(t)?t.some(n=>Io(n,e)):Qe(t)?t.split(",").includes(e):LA(t)?(t.lastIndex=0,t.test(e)):!1}function NE(t,e){DE(t,"a",e)}function OE(t,e){DE(t,"da",e)}function DE(t,e,n=it){const s=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(zc(e,s,n),n){let r=n.parent;for(;r&&r.parent;)wa(r.parent.vnode)&&F0(s,e,n,r),r=r.parent}}function F0(t,e,n,s){const r=zc(e,t,s,!0);ME(()=>{ud(s[e],r)},n)}function Zu(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function cl(t){return t.shapeFlag&128?t.ssContent:t}function zc(t,e,n=it,s=!1){if(n){const r=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{er();const a=Ra(n),l=Cn(e,n,t,o);return a(),tr(),l});return s?r.unshift(i):r.push(i),i}}const ys=t=>(e,n=it)=>{(!bi||t==="sp")&&zc(t,(...s)=>e(...s),n)},U0=ys("bm"),Id=ys("m"),B0=ys("bu"),xE=ys("u"),Ia=ys("bum"),ME=ys("um"),j0=ys("sp"),H0=ys("rtg"),$0=ys("rtc");function LE(t,e=it){zc("ec",t,e)}const VE="components";function w4(t,e){return UE(VE,t,!0,e)||t}const FE=Symbol.for("v-ndc");function W0(t){return Qe(t)?UE(VE,t,!1)||t:t||FE}function UE(t,e,n=!0,s=!1){const r=en||it;if(r){const i=r.type;{const a=Xh(i,!1);if(a&&(a===e||a===hn(e)||a===$c(hn(e))))return i}const o=om(r[t]||i[t],e)||om(r.appContext[t],e);return!o&&s?i:o}}function om(t,e){return t&&(t[e]||t[hn(e)]||t[$c(hn(e))])}const Wh=t=>t?pT(t)?Sd(t):Wh(t.parent):null,Do=dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Wh(t.parent),$root:t=>Wh(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>jE(t),$forceUpdate:t=>t.f||(t.f=()=>{Td(t.update)}),$nextTick:t=>t.n||(t.n=Ta.bind(t.proxy)),$watch:t=>hC.bind(t)}),eh=(t,e)=>t!==Ue&&!t.__isScriptSetup&&Oe(t,e),q0={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=t;let u;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return r[e];case 4:return n[e];case 3:return i[e]}else{if(eh(s,e))return o[e]=1,s[e];if(r!==Ue&&Oe(r,e))return o[e]=2,r[e];if((u=t.propsOptions[0])&&Oe(u,e))return o[e]=3,i[e];if(n!==Ue&&Oe(n,e))return o[e]=4,n[e];qh&&(o[e]=0)}}const h=Do[e];let f,p;if(h)return e==="$attrs"&&Ct(t.attrs,"get",""),h(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==Ue&&Oe(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Oe(p,e))return p[e]},set({_:t},e,n){const{data:s,setupState:r,ctx:i}=t;return eh(r,e)?(r[e]=n,!0):s!==Ue&&Oe(s,e)?(s[e]=n,!0):Oe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||t!==Ue&&Oe(t,o)||eh(e,o)||(a=i[0])&&Oe(a,o)||Oe(s,o)||Oe(Do,o)||Oe(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Oe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function am(t){return de(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let qh=!0;function K0(t){const e=jE(t),n=t.proxy,s=t.ctx;qh=!1,e.beforeCreate&&lm(e.beforeCreate,t,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:u,created:h,beforeMount:f,mounted:p,beforeUpdate:m,updated:_,activated:y,deactivated:b,beforeDestroy:O,beforeUnmount:D,destroyed:v,unmounted:C,render:x,renderTracked:M,renderTriggered:I,errorCaptured:T,serverPrefetch:w,expose:R,inheritAttrs:N,components:P,directives:A,filters:ge}=e;if(u&&z0(u,s,null),o)for(const ue in o){const te=o[ue];he(te)&&(s[ue]=te.bind(n))}if(r){const ue=r.call(n,n);$e(ue)&&(t.data=_s(ue))}if(qh=!0,i)for(const ue in i){const te=i[ue],qe=he(te)?te.bind(n,n):he(te.get)?te.get.bind(n,n):Fn,dn=!he(te)&&he(te.set)?te.set.bind(n):Fn,on=_n({get:qe,set:dn});Object.defineProperty(s,ue,{enumerable:!0,configurable:!0,get:()=>on.value,set:Ke=>on.value=Ke})}if(a)for(const ue in a)BE(a[ue],s,n,ue);if(l){const ue=he(l)?l.call(n):l;Reflect.ownKeys(ue).forEach(te=>{hi(te,ue[te])})}h&&lm(h,t,"c");function ne(ue,te){de(te)?te.forEach(qe=>ue(qe.bind(n))):te&&ue(te.bind(n))}if(ne(U0,f),ne(Id,p),ne(B0,m),ne(xE,_),ne(NE,y),ne(OE,b),ne(LE,T),ne($0,M),ne(H0,I),ne(Ia,D),ne(ME,C),ne(j0,w),de(R))if(R.length){const ue=t.exposed||(t.exposed={});R.forEach(te=>{Object.defineProperty(ue,te,{get:()=>n[te],set:qe=>n[te]=qe})})}else t.exposed||(t.exposed={});x&&t.render===Fn&&(t.render=x),N!=null&&(t.inheritAttrs=N),P&&(t.components=P),A&&(t.directives=A),w&&wd(t)}function z0(t,e,n=Fn){de(t)&&(t=Kh(t));for(const s in t){const r=t[s];let i;$e(r)?"default"in r?i=vt(r.from||s,r.default,!0):i=vt(r.from||s):i=vt(r),nt(i)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[s]=i}}function lm(t,e,n){Cn(de(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function BE(t,e,n,s){let r=s.includes(".")?nT(n,s):()=>n[s];if(Qe(t)){const i=e[t];he(i)&&Tr(r,i)}else if(he(t))Tr(r,t.bind(n));else if($e(t))if(de(t))t.forEach(i=>BE(i,e,n,s));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&Tr(r,i,t)}}function jE(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!r.length&&!n&&!s?l=e:(l={},r.length&&r.forEach(u=>Yl(l,u,o,!0)),Yl(l,e,o)),$e(e)&&i.set(e,l),l}function Yl(t,e,n,s=!1){const{mixins:r,extends:i}=e;i&&Yl(t,i,n,!0),r&&r.forEach(o=>Yl(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=G0[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const G0={data:cm,props:um,emits:um,methods:bo,computed:bo,beforeCreate:Lt,created:Lt,beforeMount:Lt,mounted:Lt,beforeUpdate:Lt,updated:Lt,beforeDestroy:Lt,beforeUnmount:Lt,destroyed:Lt,unmounted:Lt,activated:Lt,deactivated:Lt,errorCaptured:Lt,serverPrefetch:Lt,components:bo,directives:bo,watch:Y0,provide:cm,inject:Q0};function cm(t,e){return e?t?function(){return dt(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function Q0(t,e){return bo(Kh(t),Kh(e))}function Kh(t){if(de(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Lt(t,e){return t?[...new Set([].concat(t,e))]:e}function bo(t,e){return t?dt(Object.create(null),t,e):e}function um(t,e){return t?de(t)&&de(e)?[...new Set([...t,...e])]:dt(Object.create(null),am(t),am(e??{})):e}function Y0(t,e){if(!t)return e;if(!e)return t;const n=dt(Object.create(null),t);for(const s in e)n[s]=Lt(t[s],e[s]);return n}function HE(){return{app:null,config:{isNativeTag:xA,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let X0=0;function J0(t,e){return function(s,r=null){he(s)||(s=dt({},s)),r!=null&&!$e(r)&&(r=null);const i=HE(),o=new WeakSet,a=[];let l=!1;const u=i.app={_uid:X0++,_component:s,_props:r,_container:null,_context:i,_instance:null,version:xC,get config(){return i.config},set config(h){},use(h,...f){return o.has(h)||(h&&he(h.install)?(o.add(h),h.install(u,...f)):he(h)&&(o.add(h),h(u,...f))),u},mixin(h){return i.mixins.includes(h)||i.mixins.push(h),u},component(h,f){return f?(i.components[h]=f,u):i.components[h]},directive(h,f){return f?(i.directives[h]=f,u):i.directives[h]},mount(h,f,p){if(!l){const m=u._ceVNode||tt(s,r);return m.appContext=i,p===!0?p="svg":p===!1&&(p=void 0),f&&e?e(m,h):t(m,h,p),l=!0,u._container=h,h.__vue_app__=u,Sd(m.component)}},onUnmount(h){a.push(h)},unmount(){l&&(Cn(a,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return i.provides[h]=f,u},runWithContext(h){const f=Er;Er=u;try{return h()}finally{Er=f}}};return u}}let Er=null;function hi(t,e){if(it){let n=it.provides;const s=it.parent&&it.parent.provides;s===n&&(n=it.provides=Object.create(s)),n[t]=e}}function vt(t,e,n=!1){const s=it||en;if(s||Er){const r=Er?Er._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(r&&t in r)return r[t];if(arguments.length>1)return n&&he(e)?e.call(s&&s.proxy):e}}function bd(){return!!(it||en||Er)}const $E={},WE=()=>Object.create($E),qE=t=>Object.getPrototypeOf(t)===$E;function Z0(t,e,n,s=!1){const r={},i=WE();t.propsDefaults=Object.create(null),KE(t,e,r,i);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=s?r:is(r):t.type.props?t.props=r:t.props=i,t.attrs=i}function eC(t,e,n,s){const{props:r,attrs:i,vnode:{patchFlag:o}}=t,a=Pe(r),[l]=t.propsOptions;let u=!1;if((s||o>0)&&!(o&16)){if(o&8){const h=t.vnode.dynamicProps;for(let f=0;f<h.length;f++){let p=h[f];if(Gc(t.emitsOptions,p))continue;const m=e[p];if(l)if(Oe(i,p))m!==i[p]&&(i[p]=m,u=!0);else{const _=hn(p);r[_]=zh(l,a,_,m,t,!1)}else m!==i[p]&&(i[p]=m,u=!0)}}}else{KE(t,e,r,i)&&(u=!0);let h;for(const f in a)(!e||!Oe(e,f)&&((h=Dr(f))===f||!Oe(e,h)))&&(l?n&&(n[f]!==void 0||n[h]!==void 0)&&(r[f]=zh(l,a,f,void 0,t,!0)):delete r[f]);if(i!==a)for(const f in i)(!e||!Oe(e,f))&&(delete i[f],u=!0)}u&&rs(t.attrs,"set","")}function KE(t,e,n,s){const[r,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(li(l))continue;const u=e[l];let h;r&&Oe(r,h=hn(l))?!i||!i.includes(h)?n[h]=u:(a||(a={}))[h]=u:Gc(t.emitsOptions,l)||(!(l in s)||u!==s[l])&&(s[l]=u,o=!0)}if(i){const l=Pe(n),u=a||Ue;for(let h=0;h<i.length;h++){const f=i[h];n[f]=zh(r,l,f,u[f],t,!Oe(u,f))}}return o}function zh(t,e,n,s,r,i){const o=t[n];if(o!=null){const a=Oe(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:u}=r;if(n in u)s=u[n];else{const h=Ra(r);s=u[n]=l.call(null,e),h()}}else s=l;r.ce&&r.ce._setProp(n,s)}o[0]&&(i&&!a?s=!1:o[1]&&(s===""||s===Dr(n))&&(s=!0))}return s}const tC=new WeakMap;function zE(t,e,n=!1){const s=n?tC:e.propsCache,r=s.get(t);if(r)return r;const i=t.props,o={},a=[];let l=!1;if(!he(t)){const h=f=>{l=!0;const[p,m]=zE(f,e,!0);dt(o,p),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(h),t.extends&&h(t.extends),t.mixins&&t.mixins.forEach(h)}if(!i&&!l)return $e(t)&&s.set(t,oi),oi;if(de(i))for(let h=0;h<i.length;h++){const f=hn(i[h]);hm(f)&&(o[f]=Ue)}else if(i)for(const h in i){const f=hn(h);if(hm(f)){const p=i[h],m=o[f]=de(p)||he(p)?{type:p}:dt({},p),_=m.type;let y=!1,b=!0;if(de(_))for(let O=0;O<_.length;++O){const D=_[O],v=he(D)&&D.name;if(v==="Boolean"){y=!0;break}else v==="String"&&(b=!1)}else y=he(_)&&_.name==="Boolean";m[0]=y,m[1]=b,(y||Oe(m,"default"))&&a.push(f)}}const u=[o,a];return $e(t)&&s.set(t,u),u}function hm(t){return t[0]!=="$"&&!li(t)}const GE=t=>t[0]==="_"||t==="$stable",Rd=t=>de(t)?t.map(Xt):[Xt(t)],nC=(t,e,n)=>{if(e._n)return e;const s=bE((...r)=>Rd(e(...r)),n);return s._c=!1,s},QE=(t,e,n)=>{const s=t._ctx;for(const r in t){if(GE(r))continue;const i=t[r];if(he(i))e[r]=nC(r,i,s);else if(i!=null){const o=Rd(i);e[r]=()=>o}}},YE=(t,e)=>{const n=Rd(e);t.slots.default=()=>n},XE=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},sC=(t,e,n)=>{const s=t.slots=WE();if(t.vnode.shapeFlag&32){const r=e._;r?(XE(s,e,n),n&&Yv(s,"_",r,!0)):QE(e,s)}else e&&YE(t,e)},rC=(t,e,n)=>{const{vnode:s,slots:r}=t;let i=!0,o=Ue;if(s.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:XE(r,e,n):(i=!e.$stable,QE(e,r)),o=e}else e&&(YE(t,e),o={default:1});if(i)for(const a in r)!GE(a)&&o[a]==null&&delete r[a]},mt=oT;function iC(t){return JE(t)}function oC(t){return JE(t,D0)}function JE(t,e){const n=Wc();n.__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:u,setElementText:h,parentNode:f,nextSibling:p,setScopeId:m=Fn,insertStaticContent:_}=t,y=(S,k,V,H=null,U=null,W=null,Q=void 0,z=null,K=!!k.dynamicChildren)=>{if(S===k)return;S&&!mn(S,k)&&(H=B(S),Ke(S,U,W,!0),S=null),k.patchFlag===-2&&(K=!1,k.dynamicChildren=null);const{type:q,ref:ae,shapeFlag:J}=k;switch(q){case wr:b(S,k,V,H);break;case Nt:O(S,k,V,H);break;case Rl:S==null&&D(k,V,H,Q);break;case Yt:P(S,k,V,H,U,W,Q,z,K);break;default:J&1?x(S,k,V,H,U,W,Q,z,K):J&6?A(S,k,V,H,U,W,Q,z,K):(J&64||J&128)&&q.process(S,k,V,H,U,W,Q,z,K,se)}ae!=null&&U&&Xo(ae,S&&S.ref,W,k||S,!k)},b=(S,k,V,H)=>{if(S==null)s(k.el=a(k.children),V,H);else{const U=k.el=S.el;k.children!==S.children&&u(U,k.children)}},O=(S,k,V,H)=>{S==null?s(k.el=l(k.children||""),V,H):k.el=S.el},D=(S,k,V,H)=>{[S.el,S.anchor]=_(S.children,k,V,H,S.el,S.anchor)},v=({el:S,anchor:k},V,H)=>{let U;for(;S&&S!==k;)U=p(S),s(S,V,H),S=U;s(k,V,H)},C=({el:S,anchor:k})=>{let V;for(;S&&S!==k;)V=p(S),r(S),S=V;r(k)},x=(S,k,V,H,U,W,Q,z,K)=>{k.type==="svg"?Q="svg":k.type==="math"&&(Q="mathml"),S==null?M(k,V,H,U,W,Q,z,K):w(S,k,U,W,Q,z,K)},M=(S,k,V,H,U,W,Q,z)=>{let K,q;const{props:ae,shapeFlag:J,transition:ie,dirs:re}=S;if(K=S.el=o(S.type,W,ae&&ae.is,ae),J&8?h(K,S.children):J&16&&T(S.children,K,null,H,U,th(S,W),Q,z),re&&xn(S,null,H,"created"),I(K,S,S.scopeId,Q,H),ae){for(const ke in ae)ke!=="value"&&!li(ke)&&i(K,ke,null,ae[ke],W,H);"value"in ae&&i(K,"value",null,ae.value,W),(q=ae.onVnodeBeforeMount)&&$t(q,H,S)}re&&xn(S,null,H,"beforeMount");const ce=ZE(U,ie);ce&&ie.beforeEnter(K),s(K,k,V),((q=ae&&ae.onVnodeMounted)||ce||re)&&mt(()=>{q&&$t(q,H,S),ce&&ie.enter(K),re&&xn(S,null,H,"mounted")},U)},I=(S,k,V,H,U)=>{if(V&&m(S,V),H)for(let W=0;W<H.length;W++)m(S,H[W]);if(U){let W=U.subTree;if(k===W||Jl(W.type)&&(W.ssContent===k||W.ssFallback===k)){const Q=U.vnode;I(S,Q,Q.scopeId,Q.slotScopeIds,U.parent)}}},T=(S,k,V,H,U,W,Q,z,K=0)=>{for(let q=K;q<S.length;q++){const ae=S[q]=z?ks(S[q]):Xt(S[q]);y(null,ae,k,V,H,U,W,Q,z)}},w=(S,k,V,H,U,W,Q)=>{const z=k.el=S.el;let{patchFlag:K,dynamicChildren:q,dirs:ae}=k;K|=S.patchFlag&16;const J=S.props||Ue,ie=k.props||Ue;let re;if(V&&lr(V,!1),(re=ie.onVnodeBeforeUpdate)&&$t(re,V,k,S),ae&&xn(k,S,V,"beforeUpdate"),V&&lr(V,!0),(J.innerHTML&&ie.innerHTML==null||J.textContent&&ie.textContent==null)&&h(z,""),q?R(S.dynamicChildren,q,z,V,H,th(k,U),W):Q||te(S,k,z,null,V,H,th(k,U),W,!1),K>0){if(K&16)N(z,J,ie,V,U);else if(K&2&&J.class!==ie.class&&i(z,"class",null,ie.class,U),K&4&&i(z,"style",J.style,ie.style,U),K&8){const ce=k.dynamicProps;for(let ke=0;ke<ce.length;ke++){const Ce=ce[ke],Tt=J[Ce],lt=ie[Ce];(lt!==Tt||Ce==="value")&&i(z,Ce,Tt,lt,U,V)}}K&1&&S.children!==k.children&&h(z,k.children)}else!Q&&q==null&&N(z,J,ie,V,U);((re=ie.onVnodeUpdated)||ae)&&mt(()=>{re&&$t(re,V,k,S),ae&&xn(k,S,V,"updated")},H)},R=(S,k,V,H,U,W,Q)=>{for(let z=0;z<k.length;z++){const K=S[z],q=k[z],ae=K.el&&(K.type===Yt||!mn(K,q)||K.shapeFlag&70)?f(K.el):V;y(K,q,ae,null,H,U,W,Q,!0)}},N=(S,k,V,H,U)=>{if(k!==V){if(k!==Ue)for(const W in k)!li(W)&&!(W in V)&&i(S,W,k[W],null,U,H);for(const W in V){if(li(W))continue;const Q=V[W],z=k[W];Q!==z&&W!=="value"&&i(S,W,z,Q,U,H)}"value"in V&&i(S,"value",k.value,V.value,U)}},P=(S,k,V,H,U,W,Q,z,K)=>{const q=k.el=S?S.el:a(""),ae=k.anchor=S?S.anchor:a("");let{patchFlag:J,dynamicChildren:ie,slotScopeIds:re}=k;re&&(z=z?z.concat(re):re),S==null?(s(q,V,H),s(ae,V,H),T(k.children||[],V,ae,U,W,Q,z,K)):J>0&&J&64&&ie&&S.dynamicChildren?(R(S.dynamicChildren,ie,V,U,W,Q,z),(k.key!=null||U&&k===U.subTree)&&eT(S,k,!0)):te(S,k,V,ae,U,W,Q,z,K)},A=(S,k,V,H,U,W,Q,z,K)=>{k.slotScopeIds=z,S==null?k.shapeFlag&512?U.ctx.activate(k,V,H,Q,K):ge(k,V,H,U,W,Q,K):Ee(S,k,K)},ge=(S,k,V,H,U,W,Q)=>{const z=S.component=SC(S,H,U);if(wa(S)&&(z.ctx.renderer=se),PC(z,!1,Q),z.asyncDep){if(U&&U.registerDep(z,ne,Q),!S.el){const K=z.subTree=tt(Nt);O(null,K,k,V)}}else ne(z,S,k,V,U,W,Q)},Ee=(S,k,V)=>{const H=k.component=S.component;if(_C(S,k,V))if(H.asyncDep&&!H.asyncResolved){ue(H,k,V);return}else H.next=k,H.update();else k.el=S.el,H.vnode=k},ne=(S,k,V,H,U,W,Q)=>{const z=()=>{if(S.isMounted){let{next:J,bu:ie,u:re,parent:ce,vnode:ke}=S;{const wt=tT(S);if(wt){J&&(J.el=ke.el,ue(S,J,Q)),wt.asyncDep.then(()=>{S.isUnmounted||z()});return}}let Ce=J,Tt;lr(S,!1),J?(J.el=ke.el,ue(S,J,Q)):J=ke,ie&&ko(ie),(Tt=J.props&&J.props.onVnodeBeforeUpdate)&&$t(Tt,ce,J,ke),lr(S,!0);const lt=nh(S),pt=S.subTree;S.subTree=lt,y(pt,lt,f(pt.el),B(pt),S,U,W),J.el=lt.el,Ce===null&&Qc(S,lt.el),re&&mt(re,U),(Tt=J.props&&J.props.onVnodeUpdated)&&mt(()=>$t(Tt,ce,J,ke),U)}else{let J;const{el:ie,props:re}=k,{bm:ce,m:ke,parent:Ce,root:Tt,type:lt}=S,pt=vr(k);if(lr(S,!1),ce&&ko(ce),!pt&&(J=re&&re.onVnodeBeforeMount)&&$t(J,Ce,k),lr(S,!0),ie&&Me){const wt=()=>{S.subTree=nh(S),Me(ie,S.subTree,S,U,null)};pt&&lt.__asyncHydrate?lt.__asyncHydrate(ie,S,wt):wt()}else{Tt.ce&&Tt.ce._injectChildStyle(lt);const wt=S.subTree=nh(S);y(null,wt,V,H,S,U,W),k.el=wt.el}if(ke&&mt(ke,U),!pt&&(J=re&&re.onVnodeMounted)){const wt=k;mt(()=>$t(J,Ce,wt),U)}(k.shapeFlag&256||Ce&&vr(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&S.a&&mt(S.a,U),S.isMounted=!0,k=V=H=null}};S.scope.on();const K=S.effect=new sE(z);S.scope.off();const q=S.update=K.run.bind(K),ae=S.job=K.runIfDirty.bind(K);ae.i=S,ae.id=S.uid,K.scheduler=()=>Td(ae),lr(S,!0),q()},ue=(S,k,V)=>{k.component=S;const H=S.vnode.props;S.vnode=k,S.next=null,eC(S,k.props,H,V),rC(S,k.children,V),er(),nm(S),tr()},te=(S,k,V,H,U,W,Q,z,K=!1)=>{const q=S&&S.children,ae=S?S.shapeFlag:0,J=k.children,{patchFlag:ie,shapeFlag:re}=k;if(ie>0){if(ie&128){dn(q,J,V,H,U,W,Q,z,K);return}else if(ie&256){qe(q,J,V,H,U,W,Q,z,K);return}}re&8?(ae&16&&Ht(q,U,W),J!==q&&h(V,J)):ae&16?re&16?dn(q,J,V,H,U,W,Q,z,K):Ht(q,U,W,!0):(ae&8&&h(V,""),re&16&&T(J,V,H,U,W,Q,z,K))},qe=(S,k,V,H,U,W,Q,z,K)=>{S=S||oi,k=k||oi;const q=S.length,ae=k.length,J=Math.min(q,ae);let ie;for(ie=0;ie<J;ie++){const re=k[ie]=K?ks(k[ie]):Xt(k[ie]);y(S[ie],re,V,null,U,W,Q,z,K)}q>ae?Ht(S,U,W,!0,!1,J):T(k,V,H,U,W,Q,z,K,J)},dn=(S,k,V,H,U,W,Q,z,K)=>{let q=0;const ae=k.length;let J=S.length-1,ie=ae-1;for(;q<=J&&q<=ie;){const re=S[q],ce=k[q]=K?ks(k[q]):Xt(k[q]);if(mn(re,ce))y(re,ce,V,null,U,W,Q,z,K);else break;q++}for(;q<=J&&q<=ie;){const re=S[J],ce=k[ie]=K?ks(k[ie]):Xt(k[ie]);if(mn(re,ce))y(re,ce,V,null,U,W,Q,z,K);else break;J--,ie--}if(q>J){if(q<=ie){const re=ie+1,ce=re<ae?k[re].el:H;for(;q<=ie;)y(null,k[q]=K?ks(k[q]):Xt(k[q]),V,ce,U,W,Q,z,K),q++}}else if(q>ie)for(;q<=J;)Ke(S[q],U,W,!0),q++;else{const re=q,ce=q,ke=new Map;for(q=ce;q<=ie;q++){const xt=k[q]=K?ks(k[q]):Xt(k[q]);xt.key!=null&&ke.set(xt.key,q)}let Ce,Tt=0;const lt=ie-ce+1;let pt=!1,wt=0;const Ts=new Array(lt);for(q=0;q<lt;q++)Ts[q]=0;for(q=re;q<=J;q++){const xt=S[q];if(Tt>=lt){Ke(xt,U,W,!0);continue}let an;if(xt.key!=null)an=ke.get(xt.key);else for(Ce=ce;Ce<=ie;Ce++)if(Ts[Ce-ce]===0&&mn(xt,k[Ce])){an=Ce;break}an===void 0?Ke(xt,U,W,!0):(Ts[an-ce]=q+1,an>=wt?wt=an:pt=!0,y(xt,k[an],V,null,U,W,Q,z,K),Tt++)}const jr=pt?aC(Ts):oi;for(Ce=jr.length-1,q=lt-1;q>=0;q--){const xt=ce+q,an=k[xt],Hr=xt+1<ae?k[xt+1].el:H;Ts[q]===0?y(null,an,V,Hr,U,W,Q,z,K):pt&&(Ce<0||q!==jr[Ce]?on(an,V,Hr,2):Ce--)}}},on=(S,k,V,H,U=null)=>{const{el:W,type:Q,transition:z,children:K,shapeFlag:q}=S;if(q&6){on(S.component.subTree,k,V,H);return}if(q&128){S.suspense.move(k,V,H);return}if(q&64){Q.move(S,k,V,se);return}if(Q===Yt){s(W,k,V);for(let J=0;J<K.length;J++)on(K[J],k,V,H);s(S.anchor,k,V);return}if(Q===Rl){v(S,k,V);return}if(H!==2&&q&1&&z)if(H===0)z.beforeEnter(W),s(W,k,V),mt(()=>z.enter(W),U);else{const{leave:J,delayLeave:ie,afterLeave:re}=z,ce=()=>s(W,k,V),ke=()=>{J(W,()=>{ce(),re&&re()})};ie?ie(W,ce,ke):ke()}else s(W,k,V)},Ke=(S,k,V,H=!1,U=!1)=>{const{type:W,props:Q,ref:z,children:K,dynamicChildren:q,shapeFlag:ae,patchFlag:J,dirs:ie,cacheIndex:re}=S;if(J===-2&&(U=!1),z!=null&&Xo(z,null,V,S,!0),re!=null&&(k.renderCache[re]=void 0),ae&256){k.ctx.deactivate(S);return}const ce=ae&1&&ie,ke=!vr(S);let Ce;if(ke&&(Ce=Q&&Q.onVnodeBeforeUnmount)&&$t(Ce,k,S),ae&6)Nn(S.component,V,H);else{if(ae&128){S.suspense.unmount(V,H);return}ce&&xn(S,null,k,"beforeUnmount"),ae&64?S.type.remove(S,k,V,se,H):q&&!q.hasOnce&&(W!==Yt||J>0&&J&64)?Ht(q,k,V,!1,!0):(W===Yt&&J&384||!U&&ae&16)&&Ht(K,k,V),H&&ze(S)}(ke&&(Ce=Q&&Q.onVnodeUnmounted)||ce)&&mt(()=>{Ce&&$t(Ce,k,S),ce&&xn(S,null,k,"unmounted")},V)},ze=S=>{const{type:k,el:V,anchor:H,transition:U}=S;if(k===Yt){Es(V,H);return}if(k===Rl){C(S);return}const W=()=>{r(V),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(S.shapeFlag&1&&U&&!U.persisted){const{leave:Q,delayLeave:z}=U,K=()=>Q(V,W);z?z(S.el,W,K):K()}else W()},Es=(S,k)=>{let V;for(;S!==k;)V=p(S),r(S),S=V;r(k)},Nn=(S,k,V)=>{const{bum:H,scope:U,job:W,subTree:Q,um:z,m:K,a:q}=S;Xl(K),Xl(q),H&&ko(H),U.stop(),W&&(W.flags|=8,Ke(Q,S,k,V)),z&&mt(z,k),mt(()=>{S.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&S.asyncDep&&!S.asyncResolved&&S.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve())},Ht=(S,k,V,H=!1,U=!1,W=0)=>{for(let Q=W;Q<S.length;Q++)Ke(S[Q],k,V,H,U)},B=S=>{if(S.shapeFlag&6)return B(S.component.subTree);if(S.shapeFlag&128)return S.suspense.next();const k=p(S.anchor||S.el),V=k&&k[C0];return V?p(V):k};let Z=!1;const X=(S,k,V)=>{S==null?k._vnode&&Ke(k._vnode,null,null,!0):y(k._vnode||null,S,k,null,null,null,V),k._vnode=S,Z||(Z=!0,nm(),Gl(),Z=!1)},se={p:y,um:Ke,m:on,r:ze,mt:ge,mc:T,pc:te,pbc:R,n:B,o:t};let we,Me;return e&&([we,Me]=e(se)),{render:X,hydrate:we,createApp:J0(X,we)}}function th({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function lr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function ZE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function eT(t,e,n=!1){const s=t.children,r=e.children;if(de(s)&&de(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=ks(r[i]),a.el=o.el),!n&&a.patchFlag!==-2&&eT(o,a)),a.type===wr&&(a.el=o.el)}}function aC(t){const e=t.slice(),n=[0];let s,r,i,o,a;const l=t.length;for(s=0;s<l;s++){const u=t[s];if(u!==0){if(r=n[n.length-1],t[r]<u){e[s]=r,n.push(s);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<u?i=a+1:o=a;u<t[n[i]]&&(i>0&&(e[s]=n[i-1]),n[i]=s)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function tT(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:tT(e)}function Xl(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const lC=Symbol.for("v-scx"),cC=()=>vt(lC);function uC(t,e){return Ad(t,null,e)}function Tr(t,e,n){return Ad(t,e,n)}function Ad(t,e,n=Ue){const{immediate:s,deep:r,flush:i,once:o}=n,a=dt({},n),l=e&&s||!e&&i!=="post";let u;if(bi){if(i==="sync"){const m=cC();u=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Fn,m.resume=Fn,m.pause=Fn,m}}const h=it;a.call=(m,_,y)=>Cn(m,h,_,y);let f=!1;i==="post"?a.scheduler=m=>{mt(m,h&&h.suspense)}:i!=="sync"&&(f=!0,a.scheduler=(m,_)=>{_?m():Td(m)}),a.augmentJob=m=>{e&&(m.flags|=4),f&&(m.flags|=2,h&&(m.id=h.uid,m.i=h))};const p=b0(t,e,a);return bi&&(u?u.push(p):l&&p()),p}function hC(t,e,n){const s=this.proxy,r=Qe(t)?t.includes(".")?nT(s,t):()=>s[t]:t.bind(s,s);let i;he(e)?i=e:(i=e.handler,n=e);const o=Ra(this),a=Ad(r,i.bind(s),n);return o(),a}function nT(t,e){const n=e.split(".");return()=>{let s=t;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}const fC=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${hn(e)}Modifiers`]||t[`${Dr(e)}Modifiers`];function dC(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ue;let r=n;const i=e.startsWith("update:"),o=i&&fC(s,e.slice(7));o&&(o.trim&&(r=n.map(h=>Qe(h)?h.trim():h)),o.number&&(r=n.map(BA)));let a,l=s[a=Ku(e)]||s[a=Ku(hn(e))];!l&&i&&(l=s[a=Ku(Dr(e))]),l&&Cn(l,t,6,r);const u=s[a+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Cn(u,t,6,r)}}function sT(t,e,n=!1){const s=e.emitsCache,r=s.get(t);if(r!==void 0)return r;const i=t.emits;let o={},a=!1;if(!he(t)){const l=u=>{const h=sT(u,e,!0);h&&(a=!0,dt(o,h))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?($e(t)&&s.set(t,null),null):(de(i)?i.forEach(l=>o[l]=null):dt(o,i),$e(t)&&s.set(t,o),o)}function Gc(t,e){return!t||!ya(e)?!1:(e=e.slice(2).replace(/Once$/,""),Oe(t,e[0].toLowerCase()+e.slice(1))||Oe(t,Dr(e))||Oe(t,e))}function nh(t){const{type:e,vnode:n,proxy:s,withProxy:r,propsOptions:[i],slots:o,attrs:a,emit:l,render:u,renderCache:h,props:f,data:p,setupState:m,ctx:_,inheritAttrs:y}=t,b=Ql(t);let O,D;try{if(n.shapeFlag&4){const C=r||s,x=C;O=Xt(u.call(x,C,h,f,m,p,_)),D=a}else{const C=e;O=Xt(C.length>1?C(f,{attrs:a,slots:o,emit:l}):C(f,null)),D=e.props?a:gC(a)}}catch(C){xo.length=0,Ui(C,t,1),O=tt(Nt)}let v=O;if(D&&y!==!1){const C=Object.keys(D),{shapeFlag:x}=v;C.length&&x&7&&(i&&C.some(cd)&&(D=mC(D,i)),v=fs(v,D,!1,!0))}return n.dirs&&(v=fs(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(n.dirs):n.dirs),n.transition&&Ti(v,n.transition),O=v,Ql(b),O}function pC(t,e=!0){let n;for(let s=0;s<t.length;s++){const r=t[s];if(Ii(r)){if(r.type!==Nt||r.children==="v-if"){if(n)return;n=r}}else return}return n}const gC=t=>{let e;for(const n in t)(n==="class"||n==="style"||ya(n))&&((e||(e={}))[n]=t[n]);return e},mC=(t,e)=>{const n={};for(const s in t)(!cd(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function _C(t,e,n){const{props:s,children:r,component:i}=t,{props:o,children:a,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?fm(s,o,u):!!o;if(l&8){const h=e.dynamicProps;for(let f=0;f<h.length;f++){const p=h[f];if(o[p]!==s[p]&&!Gc(u,p))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?fm(s,o,u):!0:!!o;return!1}function fm(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(e[i]!==t[i]&&!Gc(n,i))return!0}return!1}function Qc({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Jl=t=>t.__isSuspense;let Gh=0;const yC={name:"Suspense",__isSuspense:!0,process(t,e,n,s,r,i,o,a,l,u){if(t==null)vC(e,n,s,r,i,o,a,l,u);else{if(i&&i.deps>0&&!t.suspense.isInFallback){e.suspense=t.suspense,e.suspense.vnode=e,e.el=t.el;return}EC(t,e,n,s,r,o,a,l,u)}},hydrate:TC,normalize:wC},rT=yC;function Jo(t,e){const n=t.props&&t.props[e];he(n)&&n()}function vC(t,e,n,s,r,i,o,a,l){const{p:u,o:{createElement:h}}=l,f=h("div"),p=t.suspense=iT(t,r,s,e,f,n,i,o,a,l);u(null,p.pendingBranch=t.ssContent,f,null,s,p,i,o),p.deps>0?(Jo(t,"onPending"),Jo(t,"onFallback"),u(null,t.ssFallback,e,n,s,null,i,o),fi(p,t.ssFallback)):p.resolve(!1,!0)}function EC(t,e,n,s,r,i,o,a,{p:l,um:u,o:{createElement:h}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const p=e.ssContent,m=e.ssFallback,{activeBranch:_,pendingBranch:y,isInFallback:b,isHydrating:O}=f;if(y)f.pendingBranch=p,mn(p,y)?(l(y,p,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0?f.resolve():b&&(O||(l(_,m,n,s,r,null,i,o,a),fi(f,m)))):(f.pendingId=Gh++,O?(f.isHydrating=!1,f.activeBranch=y):u(y,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=h("div"),b?(l(null,p,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0?f.resolve():(l(_,m,n,s,r,null,i,o,a),fi(f,m))):_&&mn(p,_)?(l(_,p,n,s,r,f,i,o,a),f.resolve(!0)):(l(null,p,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0&&f.resolve()));else if(_&&mn(p,_))l(_,p,n,s,r,f,i,o,a),fi(f,p);else if(Jo(e,"onPending"),f.pendingBranch=p,p.shapeFlag&512?f.pendingId=p.component.suspenseId:f.pendingId=Gh++,l(null,p,f.hiddenContainer,null,r,f,i,o,a),f.deps<=0)f.resolve();else{const{timeout:D,pendingId:v}=f;D>0?setTimeout(()=>{f.pendingId===v&&f.fallback(m)},D):D===0&&f.fallback(m)}}function iT(t,e,n,s,r,i,o,a,l,u,h=!1){const{p:f,m:p,um:m,n:_,o:{parentNode:y,remove:b}}=u;let O;const D=IC(t);D&&e&&e.pendingBranch&&(O=e.pendingId,e.deps++);const v=t.props?Xv(t.props.timeout):void 0,C=i,x={vnode:t,parent:e,parentComponent:n,namespace:o,container:s,hiddenContainer:r,deps:0,pendingId:Gh++,timeout:typeof v=="number"?v:-1,activeBranch:null,pendingBranch:null,isInFallback:!h,isHydrating:h,isUnmounted:!1,effects:[],resolve(M=!1,I=!1){const{vnode:T,activeBranch:w,pendingBranch:R,pendingId:N,effects:P,parentComponent:A,container:ge}=x;let Ee=!1;x.isHydrating?x.isHydrating=!1:M||(Ee=w&&R.transition&&R.transition.mode==="out-in",Ee&&(w.transition.afterLeave=()=>{N===x.pendingId&&(p(R,ge,i===C?_(w):i,0),jh(P))}),w&&(y(w.el)===ge&&(i=_(w)),m(w,A,x,!0)),Ee||p(R,ge,i,0)),fi(x,R),x.pendingBranch=null,x.isInFallback=!1;let ne=x.parent,ue=!1;for(;ne;){if(ne.pendingBranch){ne.effects.push(...P),ue=!0;break}ne=ne.parent}!ue&&!Ee&&jh(P),x.effects=[],D&&e&&e.pendingBranch&&O===e.pendingId&&(e.deps--,e.deps===0&&!I&&e.resolve()),Jo(T,"onResolve")},fallback(M){if(!x.pendingBranch)return;const{vnode:I,activeBranch:T,parentComponent:w,container:R,namespace:N}=x;Jo(I,"onFallback");const P=_(T),A=()=>{x.isInFallback&&(f(null,M,R,P,w,null,N,a,l),fi(x,M))},ge=M.transition&&M.transition.mode==="out-in";ge&&(T.transition.afterLeave=A),x.isInFallback=!0,m(T,w,null,!0),ge||A()},move(M,I,T){x.activeBranch&&p(x.activeBranch,M,I,T),x.container=M},next(){return x.activeBranch&&_(x.activeBranch)},registerDep(M,I,T){const w=!!x.pendingBranch;w&&x.deps++;const R=M.vnode.el;M.asyncDep.catch(N=>{Ui(N,M,0)}).then(N=>{if(M.isUnmounted||x.isUnmounted||x.pendingId!==M.suspenseId)return;M.asyncResolved=!0;const{vnode:P}=M;Yh(M,N),R&&(P.el=R);const A=!R&&M.subTree.el;I(M,P,y(R||M.subTree.el),R?null:_(M.subTree),x,o,T),A&&b(A),Qc(M,P.el),w&&--x.deps===0&&x.resolve()})},unmount(M,I){x.isUnmounted=!0,x.activeBranch&&m(x.activeBranch,n,M,I),x.pendingBranch&&m(x.pendingBranch,n,M,I)}};return x}function TC(t,e,n,s,r,i,o,a,l){const u=e.suspense=iT(e,s,n,t.parentNode,document.createElement("div"),null,r,i,o,a,!0),h=l(t,u.pendingBranch=e.ssContent,n,u,i,o);return u.deps===0&&u.resolve(!1,!0),h}function wC(t){const{shapeFlag:e,children:n}=t,s=e&32;t.ssContent=dm(s?n.default:n),t.ssFallback=s?dm(n.fallback):tt(Nt)}function dm(t){let e;if(he(t)){const n=wi&&t._c;n&&(t._d=!1,ss()),t=t(),n&&(t._d=!0,e=qt,aT())}return de(t)&&(t=pC(t)),t=Xt(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function oT(t,e){e&&e.pendingBranch?de(t)?e.effects.push(...t):e.effects.push(t):jh(t)}function fi(t,e){t.activeBranch=e;const{vnode:n,parentComponent:s}=t;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;n.el=r,s&&s.subTree===n&&(s.vnode.el=r,Qc(s,r))}function IC(t){const e=t.props&&t.props.suspensible;return e!=null&&e!==!1}const Yt=Symbol.for("v-fgt"),wr=Symbol.for("v-txt"),Nt=Symbol.for("v-cmt"),Rl=Symbol.for("v-stc"),xo=[];let qt=null;function ss(t=!1){xo.push(qt=t?null:[])}function aT(){xo.pop(),qt=xo[xo.length-1]||null}let wi=1;function pm(t,e=!1){wi+=t,t<0&&qt&&e&&(qt.hasOnce=!0)}function lT(t){return t.dynamicChildren=wi>0?qt||oi:null,aT(),wi>0&&qt&&qt.push(t),t}function cT(t,e,n,s,r,i){return lT(hT(t,e,n,s,r,i,!0))}function Xr(t,e,n,s,r){return lT(tt(t,e,n,s,r,!0))}function Ii(t){return t?t.__v_isVNode===!0:!1}function mn(t,e){return t.type===e.type&&t.key===e.key}const uT=({key:t})=>t??null,Al=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Qe(t)||nt(t)||he(t)?{i:en,r:t,k:e,f:!!n}:t:null);function hT(t,e=null,n=null,s=0,r=null,i=t===Yt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&uT(e),ref:e&&Al(e),scopeId:IE,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:en};return a?(Cd(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Qe(n)?8:16),wi>0&&!o&&qt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&qt.push(l),l}const tt=bC;function bC(t,e=null,n=null,s=0,r=null,i=!1){if((!t||t===FE)&&(t=Nt),Ii(t)){const a=fs(t,e,!0);return n&&Cd(a,n),wi>0&&!i&&qt&&(a.shapeFlag&6?qt[qt.indexOf(t)]=a:qt.push(a)),a.patchFlag=-2,a}if(DC(t)&&(t=t.__vccOpts),e){e=fT(e);let{class:a,style:l}=e;a&&!Qe(a)&&(e.class=Kc(a)),$e(l)&&(Ed(l)&&!de(l)&&(l=dt({},l)),e.style=qc(l))}const o=Qe(t)?1:Jl(t)?128:RE(t)?64:$e(t)?4:he(t)?2:0;return hT(t,e,n,s,r,o,i,!0)}function fT(t){return t?Ed(t)||qE(t)?dt({},t):t:null}function fs(t,e,n=!1,s=!1){const{props:r,ref:i,patchFlag:o,children:a,transition:l}=t,u=e?RC(r||{},e):r,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&uT(u),ref:e&&e.ref?n&&i?de(i)?i.concat(Al(e)):[i,Al(e)]:Al(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Yt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&fs(t.ssContent),ssFallback:t.ssFallback&&fs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Ti(h,l.clone(h)),h}function dT(t=" ",e=0){return tt(wr,null,t,e)}function Xt(t){return t==null||typeof t=="boolean"?tt(Nt):de(t)?tt(Yt,null,t.slice()):Ii(t)?ks(t):tt(wr,null,String(t))}function ks(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:fs(t)}function Cd(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(de(e))n=16;else if(typeof e=="object")if(s&65){const r=e.default;r&&(r._c&&(r._d=!1),Cd(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!qE(e)?e._ctx=en:r===3&&en&&(en.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else he(e)?(e={default:e,_ctx:en},n=32):(e=String(e),s&64?(n=16,e=[dT(e)]):n=8);t.children=e,t.shapeFlag|=n}function RC(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const r in s)if(r==="class")e.class!==s.class&&(e.class=Kc([e.class,s.class]));else if(r==="style")e.style=qc([e.style,s.style]);else if(ya(r)){const i=e[r],o=s[r];o&&i!==o&&!(de(i)&&i.includes(o))&&(e[r]=i?[].concat(i,o):o)}else r!==""&&(e[r]=s[r])}return e}function $t(t,e,n,s=null){Cn(t,e,7,[n,s])}const AC=HE();let CC=0;function SC(t,e,n){const s=t.type,r=(e?e.appContext:t.appContext)||AC,i={uid:CC++,vnode:t,type:s,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new tE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:zE(s,r),emitsOptions:sT(s,r),emit:null,emitted:null,propsDefaults:Ue,inheritAttrs:s.inheritAttrs,ctx:Ue,data:Ue,props:Ue,attrs:Ue,slots:Ue,refs:Ue,setupState:Ue,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=dC.bind(null,i),t.ce&&t.ce(i),i}let it=null;const ba=()=>it||en;let Zl,Qh;{const t=Wc(),e=(n,s)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(s),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Zl=e("__VUE_INSTANCE_SETTERS__",n=>it=n),Qh=e("__VUE_SSR_SETTERS__",n=>bi=n)}const Ra=t=>{const e=it;return Zl(t),t.scope.on(),()=>{t.scope.off(),Zl(e)}},gm=()=>{it&&it.scope.off(),Zl(null)};function pT(t){return t.vnode.shapeFlag&4}let bi=!1;function PC(t,e=!1,n=!1){e&&Qh(e);const{props:s,children:r}=t.vnode,i=pT(t);Z0(t,s,i,e),sC(t,r,n);const o=i?kC(t,e):void 0;return e&&Qh(!1),o}function kC(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,q0);const{setup:s}=n;if(s){er();const r=t.setupContext=s.length>1?OC(t):null,i=Ra(t),o=Ea(s,t,0,[t.props,r]),a=zv(o);if(tr(),i(),(a||t.sp)&&!vr(t)&&wd(t),a){if(o.then(gm,gm),e)return o.then(l=>{Yh(t,l)}).catch(l=>{Ui(l,t,0)});t.asyncDep=o}else Yh(t,o)}else gT(t)}function Yh(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:$e(e)&&(t.setupState=vE(e)),gT(t)}function gT(t,e,n){const s=t.type;t.render||(t.render=s.render||Fn);{const r=Ra(t);er();try{K0(t)}finally{tr(),r()}}}const NC={get(t,e){return Ct(t,"get",""),t[e]}};function OC(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,NC),slots:t.slots,emit:t.emit,expose:e}}function Sd(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(vE(Uh(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Do)return Do[n](t)},has(e,n){return n in e||n in Do}})):t.proxy}function Xh(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function DC(t){return he(t)&&"__vccOpts"in t}const _n=(t,e)=>w0(t,e,bi);function Kt(t,e,n){const s=arguments.length;return s===2?$e(e)&&!de(e)?Ii(e)?tt(t,null,[e]):tt(t,e):tt(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Ii(n)&&(n=[n]),tt(t,e,n))}const xC="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Jh;const mm=typeof window<"u"&&window.trustedTypes;if(mm)try{Jh=mm.createPolicy("vue",{createHTML:t=>t})}catch{}const mT=Jh?t=>Jh.createHTML(t):t=>t,MC="http://www.w3.org/2000/svg",LC="http://www.w3.org/1998/Math/MathML",ns=typeof document<"u"?document:null,_m=ns&&ns.createElement("template"),VC={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const r=e==="svg"?ns.createElementNS(MC,t):e==="mathml"?ns.createElementNS(LC,t):n?ns.createElement(t,{is:n}):ns.createElement(t);return t==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:t=>ns.createTextNode(t),createComment:t=>ns.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>ns.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,r,i){const o=n?n.previousSibling:e.lastChild;if(r&&(r===i||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===i||!(r=r.nextSibling)););else{_m.innerHTML=mT(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=_m.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},As="transition",po="animation",Zo=Symbol("_vtc"),_T={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},FC=dt({},AE,_T),UC=t=>(t.displayName="Transition",t.props=FC,t),BC=UC((t,{slots:e})=>Kt(k0,jC(t),e)),cr=(t,e=[])=>{de(t)?t.forEach(n=>n(...e)):t&&t(...e)},ym=t=>t?de(t)?t.some(e=>e.length>1):t.length>1:!1;function jC(t){const e={};for(const P in t)P in _T||(e[P]=t[P]);if(t.css===!1)return e;const{name:n="v",type:s,duration:r,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:h=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:p=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=t,_=HC(r),y=_&&_[0],b=_&&_[1],{onBeforeEnter:O,onEnter:D,onEnterCancelled:v,onLeave:C,onLeaveCancelled:x,onBeforeAppear:M=O,onAppear:I=D,onAppearCancelled:T=v}=e,w=(P,A,ge,Ee)=>{P._enterCancelled=Ee,ur(P,A?h:a),ur(P,A?u:o),ge&&ge()},R=(P,A)=>{P._isLeaving=!1,ur(P,f),ur(P,m),ur(P,p),A&&A()},N=P=>(A,ge)=>{const Ee=P?I:D,ne=()=>w(A,P,ge);cr(Ee,[A,ne]),vm(()=>{ur(A,P?l:i),Zn(A,P?h:a),ym(Ee)||Em(A,s,y,ne)})};return dt(e,{onBeforeEnter(P){cr(O,[P]),Zn(P,i),Zn(P,o)},onBeforeAppear(P){cr(M,[P]),Zn(P,l),Zn(P,u)},onEnter:N(!1),onAppear:N(!0),onLeave(P,A){P._isLeaving=!0;const ge=()=>R(P,A);Zn(P,f),P._enterCancelled?(Zn(P,p),Im()):(Im(),Zn(P,p)),vm(()=>{P._isLeaving&&(ur(P,f),Zn(P,m),ym(C)||Em(P,s,b,ge))}),cr(C,[P,ge])},onEnterCancelled(P){w(P,!1,void 0,!0),cr(v,[P])},onAppearCancelled(P){w(P,!0,void 0,!0),cr(T,[P])},onLeaveCancelled(P){R(P),cr(x,[P])}})}function HC(t){if(t==null)return null;if($e(t))return[sh(t.enter),sh(t.leave)];{const e=sh(t);return[e,e]}}function sh(t){return Xv(t)}function Zn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Zo]||(t[Zo]=new Set)).add(e)}function ur(t,e){e.split(/\s+/).forEach(s=>s&&t.classList.remove(s));const n=t[Zo];n&&(n.delete(e),n.size||(t[Zo]=void 0))}function vm(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let $C=0;function Em(t,e,n,s){const r=t._endId=++$C,i=()=>{r===t._endId&&s()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=WC(t,e);if(!o)return s();const u=o+"end";let h=0;const f=()=>{t.removeEventListener(u,p),i()},p=m=>{m.target===t&&++h>=l&&f()};setTimeout(()=>{h<l&&f()},a+1),t.addEventListener(u,p)}function WC(t,e){const n=window.getComputedStyle(t),s=_=>(n[_]||"").split(", "),r=s(`${As}Delay`),i=s(`${As}Duration`),o=Tm(r,i),a=s(`${po}Delay`),l=s(`${po}Duration`),u=Tm(a,l);let h=null,f=0,p=0;e===As?o>0&&(h=As,f=o,p=i.length):e===po?u>0&&(h=po,f=u,p=l.length):(f=Math.max(o,u),h=f>0?o>u?As:po:null,p=h?h===As?i.length:l.length:0);const m=h===As&&/\b(transform|all)(,|$)/.test(s(`${As}Property`).toString());return{type:h,timeout:f,propCount:p,hasTransform:m}}function Tm(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,s)=>wm(n)+wm(t[s])))}function wm(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Im(){return document.body.offsetHeight}function qC(t,e,n){const s=t[Zo];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const bm=Symbol("_vod"),KC=Symbol("_vsh"),zC=Symbol(""),GC=/(^|;)\s*display\s*:/;function QC(t,e,n){const s=t.style,r=Qe(n);let i=!1;if(n&&!r){if(e)if(Qe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Cl(s,a,"")}else for(const o in e)n[o]==null&&Cl(s,o,"");for(const o in n)o==="display"&&(i=!0),Cl(s,o,n[o])}else if(r){if(e!==n){const o=s[zC];o&&(n+=";"+o),s.cssText=n,i=GC.test(n)}}else e&&t.removeAttribute("style");bm in t&&(t[bm]=i?s.display:"",t[KC]&&(s.display="none"))}const Rm=/\s*!important$/;function Cl(t,e,n){if(de(n))n.forEach(s=>Cl(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=YC(t,e);Rm.test(n)?t.setProperty(Dr(s),n.replace(Rm,""),"important"):t[s]=n}}const Am=["Webkit","Moz","ms"],rh={};function YC(t,e){const n=rh[e];if(n)return n;let s=hn(e);if(s!=="filter"&&s in t)return rh[e]=s;s=$c(s);for(let r=0;r<Am.length;r++){const i=Am[r]+s;if(i in t)return rh[e]=i}return e}const Cm="http://www.w3.org/1999/xlink";function Sm(t,e,n,s,r,i=zA(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Cm,e.slice(6,e.length)):t.setAttributeNS(Cm,e,n):n==null||i&&!Jv(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Zs(n)?String(n):n)}function Pm(t,e,n,s,r){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?mT(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const a=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=Jv(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(r||e)}function XC(t,e,n,s){t.addEventListener(e,n,s)}function JC(t,e,n,s){t.removeEventListener(e,n,s)}const km=Symbol("_vei");function ZC(t,e,n,s,r=null){const i=t[km]||(t[km]={}),o=i[e];if(s&&o)o.value=s;else{const[a,l]=eS(e);if(s){const u=i[e]=sS(s,r);XC(t,a,u,l)}else o&&(JC(t,a,o,l),i[e]=void 0)}}const Nm=/(?:Once|Passive|Capture)$/;function eS(t){let e;if(Nm.test(t)){e={};let s;for(;s=t.match(Nm);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Dr(t.slice(2)),e]}let ih=0;const tS=Promise.resolve(),nS=()=>ih||(tS.then(()=>ih=0),ih=Date.now());function sS(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Cn(rS(s,n.value),e,5,[s])};return n.value=t,n.attached=nS(),n}function rS(t,e){if(de(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>r=>!r._stopped&&s&&s(r))}else return e}const Om=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,iS=(t,e,n,s,r,i)=>{const o=r==="svg";e==="class"?qC(t,s,o):e==="style"?QC(t,n,s):ya(e)?cd(e)||ZC(t,e,n,s,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):oS(t,e,s,o))?(Pm(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Sm(t,e,s,o,i,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Qe(s))?Pm(t,hn(e),s,i,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Sm(t,e,s,o))};function oS(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&Om(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Om(e)&&Qe(n)?!1:e in t}const aS=["ctrl","shift","alt","meta"],lS={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>aS.some(n=>t[`${n}Key`]&&!e.includes(n))},I4=(t,e)=>{const n=t._withMods||(t._withMods={}),s=e.join(".");return n[s]||(n[s]=(r,...i)=>{for(let o=0;o<e.length;o++){const a=lS[e[o]];if(a&&a(r,e))return}return t(r,...i)})},yT=dt({patchProp:iS},VC);let Mo,Dm=!1;function cS(){return Mo||(Mo=iC(yT))}function uS(){return Mo=Dm?Mo:oC(yT),Dm=!0,Mo}const hS=(...t)=>{const e=cS().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=ET(s);if(!r)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=n(r,!1,vT(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},fS=(...t)=>{const e=uS().createApp(...t),{mount:n}=e;return e.mount=s=>{const r=ET(s);if(r)return n(r,!0,vT(r))},e};function vT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function ET(t){return Qe(t)?document.querySelector(t):t}const dS=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,pS=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,gS=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function mS(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){_S(t);return}return e}function _S(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function ec(t,e={}){if(typeof t!="string")return t;if(t[0]==='"'&&t[t.length-1]==='"'&&t.indexOf("\\")===-1)return t.slice(1,-1);const n=t.trim();if(n.length<=9)switch(n.toLowerCase()){case"true":return!0;case"false":return!1;case"undefined":return;case"null":return null;case"nan":return Number.NaN;case"infinity":return Number.POSITIVE_INFINITY;case"-infinity":return Number.NEGATIVE_INFINITY}if(!gS.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(dS.test(t)||pS.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,mS)}return JSON.parse(t)}catch(s){if(e.strict)throw s;return t}}const yS=/#/g,vS=/&/g,ES=/\//g,TS=/=/g,Pd=/\+/g,wS=/%5e/gi,IS=/%60/gi,bS=/%7c/gi,RS=/%20/gi;function AS(t){return encodeURI(""+t).replace(bS,"|")}function Zh(t){return AS(typeof t=="string"?t:JSON.stringify(t)).replace(Pd,"%2B").replace(RS,"+").replace(yS,"%23").replace(vS,"%26").replace(IS,"`").replace(wS,"^").replace(ES,"%2F")}function oh(t){return Zh(t).replace(TS,"%3D")}function tc(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function CS(t){return tc(t.replace(Pd," "))}function SS(t){return tc(t.replace(Pd," "))}function TT(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const s=n.match(/([^=]+)=?(.*)/)||[];if(s.length<2)continue;const r=CS(s[1]);if(r==="__proto__"||r==="constructor")continue;const i=SS(s[2]||"");e[r]===void 0?e[r]=i:Array.isArray(e[r])?e[r].push(i):e[r]=[e[r],i]}return e}function PS(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${oh(t)}=${Zh(n)}`).join("&"):`${oh(t)}=${Zh(e)}`:oh(t)}function kS(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>PS(e,t[e])).filter(Boolean).join("&")}const NS=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,OS=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,DS=/^([/\\]\s*){2,}[^/\\]/,xS=/^[\s\0]*(blob|data|javascript|vbscript):$/i,MS=/\/$|\/\?|\/#/,LS=/^\.?\//;function xr(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?NS.test(t):OS.test(t)||(e.acceptRelative?DS.test(t):!1)}function VS(t){return!!t&&xS.test(t)}function ef(t="",e){return e?MS.test(t):t.endsWith("/")}function kd(t="",e){if(!e)return(ef(t)?t.slice(0,-1):t)||"/";if(!ef(t,!0))return t||"/";let n=t,s="";const r=t.indexOf("#");r>=0&&(n=t.slice(0,r),s=t.slice(r));const[i,...o]=n.split("?");return((i.endsWith("/")?i.slice(0,-1):i)||"/")+(o.length>0?`?${o.join("?")}`:"")+s}function tf(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(ef(t,!0))return t||"/";let n=t,s="";const r=t.indexOf("#");if(r>=0&&(n=t.slice(0,r),s=t.slice(r),!n))return s;const[i,...o]=n.split("?");return i+"/"+(o.length>0?`?${o.join("?")}`:"")+s}function FS(t=""){return t.startsWith("/")}function xm(t=""){return FS(t)?t:"/"+t}function US(t,e){if(IT(e)||xr(t))return t;const n=kd(e);return t.startsWith(n)?t:Nd(n,t)}function Mm(t,e){if(IT(e))return t;const n=kd(e);if(!t.startsWith(n))return t;const s=t.slice(n.length);return s[0]==="/"?s:"/"+s}function wT(t,e){const n=AT(t),s={...TT(n.search),...e};return n.search=kS(s),HS(n)}function IT(t){return!t||t==="/"}function BS(t){return t&&t!=="/"}function Nd(t,...e){let n=t||"";for(const s of e.filter(r=>BS(r)))if(n){const r=s.replace(LS,"");n=tf(n)+r}else n=s;return n}function bT(...t){var o,a,l,u;const e=/\/(?!\/)/,n=t.filter(Boolean),s=[];let r=0;for(const h of n)if(!(!h||h==="/")){for(const[f,p]of h.split(e).entries())if(!(!p||p===".")){if(p===".."){if(s.length===1&&xr(s[0]))continue;s.pop(),r--;continue}if(f===1&&((o=s[s.length-1])!=null&&o.endsWith(":/"))){s[s.length-1]+="/"+p;continue}s.push(p),r++}}let i=s.join("/");return r>=0?(a=n[0])!=null&&a.startsWith("/")&&!i.startsWith("/")?i="/"+i:(l=n[0])!=null&&l.startsWith("./")&&!i.startsWith("./")&&(i="./"+i):i="../".repeat(-1*r)+i,(u=n[n.length-1])!=null&&u.endsWith("/")&&!i.endsWith("/")&&(i+="/"),i}function jS(t,e,n={}){return n.trailingSlash||(t=tf(t),e=tf(e)),n.leadingSlash||(t=xm(t),e=xm(e)),n.encoding||(t=tc(t),e=tc(e)),t===e}const RT=Symbol.for("ufo:protocolRelative");function AT(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,p=""]=n;return{protocol:f.toLowerCase(),pathname:p,href:f+p,auth:"",host:"",search:"",hash:""}}if(!xr(t,{acceptRelative:!0}))return Lm(t);const[,s="",r,i=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[];let[,o="",a=""]=i.match(/([^#/?]*)(.*)?/)||[];s==="file:"&&(a=a.replace(/\/(?=[A-Za-z]:)/,""));const{pathname:l,search:u,hash:h}=Lm(a);return{protocol:s.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:l,search:u,hash:h,[RT]:!s}}function Lm(t=""){const[e="",n="",s=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:s}}function HS(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",s=t.hash||"",r=t.auth?t.auth+"@":"",i=t.host||"";return(t.protocol||t[RT]?(t.protocol||"")+"//":"")+r+i+e+n+s}class $S extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function WS(t){var l,u,h,f,p;const e=((l=t.error)==null?void 0:l.message)||((u=t.error)==null?void 0:u.toString())||"",n=((h=t.request)==null?void 0:h.method)||((f=t.options)==null?void 0:f.method)||"GET",s=((p=t.request)==null?void 0:p.url)||String(t.request)||"/",r=`[${n}] ${JSON.stringify(s)}`,i=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${r}: ${i}${e?` ${e}`:""}`,a=new $S(o,t.error?{cause:t.error}:void 0);for(const m of["request","options","response"])Object.defineProperty(a,m,{get(){return t[m]}});for(const[m,_]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,m,{get(){return t.response&&t.response[_]}});return a}const qS=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Vm(t="GET"){return qS.has(t.toUpperCase())}function KS(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const zS=new Set(["image/svg","application/xml","application/xhtml","application/html"]),GS=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function QS(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return GS.test(e)?"json":zS.has(e)||e.startsWith("text/")?"text":"blob"}function YS(t,e,n,s){const r=XS((e==null?void 0:e.headers)??(t==null?void 0:t.headers),n==null?void 0:n.headers,s);let i;return(n!=null&&n.query||n!=null&&n.params||e!=null&&e.params||e!=null&&e.query)&&(i={...n==null?void 0:n.params,...n==null?void 0:n.query,...e==null?void 0:e.params,...e==null?void 0:e.query}),{...n,...e,query:i,params:i,headers:r}}function XS(t,e,n){if(!e)return new n(t);const s=new n(e);if(t)for(const[r,i]of Symbol.iterator in t||Array.isArray(t)?t:new n(t))s.set(r,i);return s}async function ul(t,e){if(e)if(Array.isArray(e))for(const n of e)await n(t);else await e(t)}const JS=new Set([408,409,425,429,500,502,503,504]),ZS=new Set([101,204,205,304]);function CT(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:s=globalThis.AbortController}=t;async function r(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let h;typeof a.options.retry=="number"?h=a.options.retry:h=Vm(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(h>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):JS.has(f))){const p=typeof a.options.retryDelay=="function"?a.options.retryDelay(a):a.options.retryDelay||0;return p>0&&await new Promise(m=>setTimeout(m,p)),i(a.request,{...a.options,retry:h-1})}}const u=WS(a);throw Error.captureStackTrace&&Error.captureStackTrace(u,i),u}const i=async function(l,u={}){const h={request:l,options:YS(l,u,t.defaults,n),response:void 0,error:void 0};h.options.method&&(h.options.method=h.options.method.toUpperCase()),h.options.onRequest&&await ul(h,h.options.onRequest),typeof h.request=="string"&&(h.options.baseURL&&(h.request=US(h.request,h.options.baseURL)),h.options.query&&(h.request=wT(h.request,h.options.query),delete h.options.query),"query"in h.options&&delete h.options.query,"params"in h.options&&delete h.options.params),h.options.body&&Vm(h.options.method)&&(KS(h.options.body)?(h.options.body=typeof h.options.body=="string"?h.options.body:JSON.stringify(h.options.body),h.options.headers=new n(h.options.headers||{}),h.options.headers.has("content-type")||h.options.headers.set("content-type","application/json"),h.options.headers.has("accept")||h.options.headers.set("accept","application/json")):("pipeTo"in h.options.body&&typeof h.options.body.pipeTo=="function"||typeof h.options.body.pipe=="function")&&("duplex"in h.options||(h.options.duplex="half")));let f;if(!h.options.signal&&h.options.timeout){const m=new s;f=setTimeout(()=>{const _=new Error("[TimeoutError]: The operation was aborted due to timeout");_.name="TimeoutError",_.code=23,m.abort(_)},h.options.timeout),h.options.signal=m.signal}try{h.response=await e(h.request,h.options)}catch(m){return h.error=m,h.options.onRequestError&&await ul(h,h.options.onRequestError),await r(h)}finally{f&&clearTimeout(f)}if((h.response.body||h.response._bodyInit)&&!ZS.has(h.response.status)&&h.options.method!=="HEAD"){const m=(h.options.parseResponse?"json":h.options.responseType)||QS(h.response.headers.get("content-type")||"");switch(m){case"json":{const _=await h.response.text(),y=h.options.parseResponse||ec;h.response._data=y(_);break}case"stream":{h.response._data=h.response.body||h.response._bodyInit;break}default:h.response._data=await h.response[m]()}}return h.options.onResponse&&await ul(h,h.options.onResponse),!h.options.ignoreResponseError&&h.response.status>=400&&h.response.status<600?(h.options.onResponseError&&await ul(h,h.options.onResponseError),await r(h)):h.response},o=async function(l,u){return(await i(l,u))._data};return o.raw=i,o.native=(...a)=>e(...a),o.create=(a={},l={})=>CT({...t,...l,defaults:{...t.defaults,...l.defaults,...a}}),o}const nc=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),eP=nc.fetch?(...t)=>nc.fetch(...t):()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!")),tP=nc.Headers,nP=nc.AbortController,sP=CT({fetch:eP,Headers:tP,AbortController:nP}),rP=sP,iP=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},sc=iP().app,oP=()=>sc.baseURL,aP=()=>sc.buildAssetsDir,Od=(...t)=>bT(ST(),aP(),...t),ST=(...t)=>{const e=sc.cdnURL||sc.baseURL;return t.length?bT(e,...t):e};globalThis.__buildAssetsURL=Od,globalThis.__publicAssetsURL=ST;globalThis.$fetch||(globalThis.$fetch=rP.create({baseURL:oP()}));function nf(t,e={},n){for(const s in t){const r=t[s],i=n?`${n}:${s}`:s;typeof r=="object"&&r!==null?nf(r,e,i):typeof r=="function"&&(e[i]=r)}return e}const lP={run:t=>t()},cP=()=>lP,PT=typeof console.createTask<"u"?console.createTask:cP;function uP(t,e){const n=e.shift(),s=PT(n);return t.reduce((r,i)=>r.then(()=>s.run(()=>i(...e))),Promise.resolve())}function hP(t,e){const n=e.shift(),s=PT(n);return Promise.all(t.map(r=>s.run(()=>r(...e))))}function ah(t,e){for(const n of[...t])n(e)}class fP{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,s={}){if(!e||typeof n!="function")return()=>{};const r=e;let i;for(;this._deprecatedHooks[e];)i=this._deprecatedHooks[e],e=i.to;if(i&&!s.allowDeprecated){let o=i.message;o||(o=`${r} hook has been deprecated`+(i.to?`, please use ${i.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let s,r=(...i)=>(typeof s=="function"&&s(),s=void 0,r=void 0,n(...i));return s=this.hook(e,r),s}removeHook(e,n){if(this._hooks[e]){const s=this._hooks[e].indexOf(n);s!==-1&&this._hooks[e].splice(s,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const s=this._hooks[e]||[];delete this._hooks[e];for(const r of s)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=nf(e),s=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of s.splice(0,s.length))r()}}removeHooks(e){const n=nf(e);for(const s in n)this.removeHook(s,n[s])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(uP,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(hP,e,...n)}callHookWith(e,n,...s){const r=this._before||this._after?{name:n,args:s,context:{}}:void 0;this._before&&ah(this._before,r);const i=e(n in this._hooks?[...this._hooks[n]]:[],s);return i instanceof Promise?i.finally(()=>{this._after&&r&&ah(this._after,r)}):(this._after&&r&&ah(this._after,r),i)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function kT(){return new fP}function dP(t={}){let e,n=!1;const s=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const i=()=>{if(r){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=i();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>i(),set:(o,a)=>{a||s(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{s(o),e=o;try{return r?r.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},u=()=>e===o?l:void 0;sf.add(u);try{const h=r?r.run(o,a):a();return n||(e=void 0),await h}finally{sf.delete(u)}}}}function pP(t={}){const e={};return{get(n,s={}){return e[n]||(e[n]=dP({...t,...s})),e[n]}}}const rc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Fm="__unctx__",gP=rc[Fm]||(rc[Fm]=pP()),mP=(t,e={})=>gP.get(t,e),Um="__unctx_async_handlers__",sf=rc[Um]||(rc[Um]=new Set);function di(t){const e=[];for(const r of sf){const i=r();i&&e.push(i)}const n=()=>{for(const r of e)r()};let s=t();return s&&typeof s=="object"&&"catch"in s&&(s=s.catch(r=>{throw n(),r})),[s,n]}const rf=!1,_P=!0,yP=!1,Bm={id:"__nuxt-loader"},b4={prefetchOn:{interaction:!0,visibility:!1},componentName:"NuxtLink",prefetch:!0},vP=void 0,EP="#__nuxt",NT="nuxt-app",jm=36e5,TP="vite:preloadError";function OT(t=NT){return mP(t,{asyncContext:!1})}const wP="__nuxt_plugin";function IP(t){var r;let e=0;const n={_id:t.id||NT||"nuxt-app",_scope:nE(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.16.2"},get vue(){return n.vueApp.version}},payload:is({...((r=t.ssrContext)==null?void 0:r.payload)||{},data:is({}),state:_s({}),once:new Set,_errors:is({})}),static:{data:{}},runWithContext(i){return n._scope.active&&!fd()?n._scope.run(()=>Hm(n,i)):Hm(n,i)},isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let i=!1;return()=>{if(!i&&(i=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:is({}),_payloadRevivers:{},...t};{const i=window.__NUXT__;if(i)for(const o in i)switch(o){case"data":case"state":case"_errors":Object.assign(n.payload[o],i[o]);break;default:n.payload[o]=i[o]}}n.hooks=kT(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(i,o)=>{const a="$"+i;hl(n,a,o),hl(n.vueApp.config.globalProperties,a,o)},hl(n.vueApp,"$nuxt",n),hl(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener(TP,o=>{n.callHook("app:chunkError",{error:o.payload}),(n.isHydrating||o.payload.message.includes("Unable to preload CSS"))&&o.preventDefault()}),window.useNuxtApp||(window.useNuxtApp=st);const i=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",i)}const s=n.payload.config;return n.provide("config",s),n}function bP(t,e){e.hooks&&t.hooks.addHooks(e.hooks)}async function RP(t,e){if(typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const s in n)t.provide(s,n[s])}}async function AP(t,e){const n=[],s=[],r=[],i=[];let o=0;async function a(l){var h;const u=((h=l.dependsOn)==null?void 0:h.filter(f=>e.some(p=>p._name===f)&&!n.includes(f)))??[];if(u.length>0)s.push([new Set(u),l]);else{const f=RP(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(s.map(async([p,m])=>{p.has(l._name)&&(p.delete(l._name),p.size===0&&(o++,await a(m)))})))});l.parallel?r.push(f.catch(p=>i.push(p))):await f}}for(const l of e)bP(t,l);for(const l of e)await a(l);if(await Promise.all(r),o)for(let l=0;l<o;l++)await Promise.all(r);if(i.length)throw i[0]}function jt(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[wP]:!0,_name:e})}const CP=jt;function Hm(t,e,n){const s=()=>e();return OT(t._id).set(t),t.vueApp.runWithContext(s)}function SP(t){var n;let e;return bd()&&(e=(n=ba())==null?void 0:n.appContext.app.$nuxt),e||(e=OT(t).tryUse()),e||null}function st(t){const e=SP(t);if(!e)throw new Error("[nuxt] instance unavailable");return e}function ji(t){return st().$config}function hl(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function PP(t,e){return{ctx:{table:t},matchAll:n=>xT(n,t)}}function DT(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([s,r])=>[s,DT(r)])):new Map(Object.entries(t[n]));return e}function kP(t){return PP(DT(t))}function xT(t,e,n){t.endsWith("/")&&(t=t.slice(0,-1)||"/");const s=[];for(const[i,o]of $m(e.wildcard))(t===i||t.startsWith(i+"/"))&&s.push(o);for(const[i,o]of $m(e.dynamic))if(t.startsWith(i+"/")){const a="/"+t.slice(i.length).split("/").splice(2).join("/");s.push(...xT(a,o))}const r=e.static.get(t);return r&&s.push(r),s.filter(Boolean)}function $m(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function lh(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function of(t,e,n=".",s){if(!lh(e))return of(t,{},n,s);const r=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(s&&s(r,i,o,n)||(Array.isArray(o)&&Array.isArray(r[i])?r[i]=[...o,...r[i]]:lh(o)&&lh(r[i])?r[i]=of(o,r[i],(n?`${n}.`:"")+i.toString(),s):r[i]=o))}return r}function MT(t){return(...e)=>e.reduce((n,s)=>of(n,s,"",t),{})}const LT=MT(),NP=MT((t,e,n)=>{if(t[e]!==void 0&&typeof n=="function")return t[e]=n(t[e]),!0});function OP(t,e){try{return e in t}catch{return!1}}class af extends Error{constructor(n,s={}){super(n,s);Rs(this,"statusCode",500);Rs(this,"fatal",!1);Rs(this,"unhandled",!1);Rs(this,"statusMessage");Rs(this,"data");Rs(this,"cause");s.cause&&!this.cause&&(this.cause=s.cause)}toJSON(){const n={message:this.message,statusCode:lf(this.statusCode,500)};return this.statusMessage&&(n.statusMessage=VT(this.statusMessage)),this.data!==void 0&&(n.data=this.data),n}}Rs(af,"__h3_error__",!0);function Sl(t){if(typeof t=="string")return new af(t);if(DP(t))return t;const e=new af(t.message??t.statusMessage??"",{cause:t.cause||t});if(OP(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=lf(t.statusCode,e.statusCode):t.status&&(e.statusCode=lf(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;VT(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function DP(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const xP=/[^\u0009\u0020-\u007E]/g;function VT(t=""){return t.replace(xP,"")}function lf(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const MP=Symbol("layout-meta"),Yc=Symbol("route"),rn=()=>{var t;return(t=st())==null?void 0:t.$router},FT=()=>bd()?vt(Yc,st()._route):st()._route;function R4(t){return t}const LP=()=>{try{if(st()._processingMiddleware)return!0}catch{return!1}return!1},A4=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:"path"in t?VP(t):rn().resolve(t).href;if(e!=null&&e.open){const{target:l="_blank",windowFeatures:u={}}=e.open,h=Object.entries(u).filter(([f,p])=>p!==void 0).map(([f,p])=>`${f.toLowerCase()}=${p}`).join(", ");return open(n,l,h),Promise.resolve()}const s=xr(n,{acceptRelative:!0}),r=(e==null?void 0:e.external)||s;if(r){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const{protocol:l}=new URL(n,window.location.href);if(l&&VS(l))throw new Error(`Cannot navigate to a URL with '${l}' protocol.`)}const i=LP();if(!r&&i){if(e!=null&&e.replace){if(typeof t=="string"){const{pathname:l,search:u,hash:h}=AT(t);return{path:l,...u&&{query:TT(u)},...h&&{hash:h},replace:!0}}return{...t,replace:!0}}return t}const o=rn(),a=st();return r?(a._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,i?a.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?o.replace(t):o.push(t)};function VP(t){return wT(t.path||"",t.query||{})+(t.hash||"")}const UT="__nuxt_error",Xc=()=>v0(st().payload,"error"),Ns=t=>{const e=Jc(t);try{const n=st(),s=Xc();n.hooks.callHook("app:error",e),s.value||(s.value=e)}catch{throw e}return e},FP=async(t={})=>{const e=st(),n=Xc();e.callHook("app:error:cleared",t),t.redirect&&await rn().replace(t.redirect),n.value=vP},BT=t=>!!t&&typeof t=="object"&&UT in t,Jc=t=>{const e=Sl(t);return Object.defineProperty(e,UT,{value:!0,configurable:!1,writable:!1}),e},UP=()=>{};var Wm={};/**
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
 */const jT={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const Y=function(t,e){if(!t)throw Hi(e)},Hi=function(t){return new Error("Firebase Database ("+jT.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const HT=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},BP=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const r=t[n++];if(r<128)e[s++]=String.fromCharCode(r);else if(r>191&&r<224){const i=t[n++];e[s++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=t[n++],o=t[n++],a=t[n++],l=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[s++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Zc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<t.length;r+=3){const i=t[r],o=r+1<t.length,a=o?t[r+1]:0,l=r+2<t.length,u=l?t[r+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let p=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(p=64)),s.push(n[h],n[f],n[p],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(HT(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<t.length;){const i=n[t.charAt(r++)],a=r<t.length?n[t.charAt(r)]:0;++r;const u=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,i==null||a==null||u==null||f==null)throw new jP;const p=i<<2|a>>4;if(s.push(p),u!==64){const m=a<<4&240|u>>2;if(s.push(m),f!==64){const _=u<<6&192|f;s.push(_)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $T=function(t){const e=HT(t);return Zc.encodeByteArray(e,!0)},ic=function(t){return $T(t).replace(/\./g,"")},oc=function(t){try{return Zc.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function HP(t){return WT(void 0,t)}function WT(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!$P(n)||(t[n]=WT(t[n],e[n]));return t}function $P(t){return t!=="__proto__"}/**
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
 */function WP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const qP=()=>WP().__FIREBASE_DEFAULTS__,KP=()=>{if(typeof process>"u"||typeof Wm>"u")return;const t=Wm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&oc(t[1]);return e&&JSON.parse(e)},eu=()=>{try{return UP()||qP()||KP()||zP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},GP=t=>{var e,n;return(n=(e=eu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},QP=t=>{const e=GP(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},qT=()=>{var t;return(t=eu())===null||t===void 0?void 0:t.config},YP=t=>{var e;return(e=eu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class ea{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function XP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ic(JSON.stringify(n)),ic(JSON.stringify(o)),""].join(".")}/**
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
 */function Dt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Dd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Dt())}function JP(){var t;const e=(t=eu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(globalThis.process)==="[object process]"}catch{return!1}}function ZP(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ek(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function KT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tk(){const t=Dt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nk(){return jT.NODE_ADMIN===!0}function sk(){return!JP()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function zT(){try{return typeof indexedDB=="object"}catch{return!1}}function rk(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(s);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var i;e(((i=r.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ik="FirebaseError";class Gn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ik,Object.setPrototypeOf(this,Gn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$i.prototype.create)}}class $i{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?ok(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new Gn(r,a,s)}}function ok(t,e){return t.replace(ak,(n,s)=>{const r=e[s];return r!=null?String(r):`<${s}?>`})}const ak=/\{\$([^}]+)}/g;/**
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
 */function ta(t){return JSON.parse(t)}function _t(t){return JSON.stringify(t)}/**
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
 */const GT=function(t){let e={},n={},s={},r="";try{const i=t.split(".");e=ta(oc(i[0])||""),n=ta(oc(i[1])||""),r=i[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:r}},lk=function(t){const e=GT(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},ck=function(t){const e=GT(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function vs(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ri(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function cf(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ac(t,e,n){const s={};for(const r in t)Object.prototype.hasOwnProperty.call(t,r)&&(s[r]=e.call(n,t[r],r,t));return s}function na(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const r of n){if(!s.includes(r))return!1;const i=t[r],o=e[r];if(qm(i)&&qm(o)){if(!na(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function qm(t){return t!==null&&typeof t=="object"}/**
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
 */function Wi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class uk{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)s[f]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let f=0;f<16;f++)s[f]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let f=16;f<80;f++){const p=s[f-3]^s[f-8]^s[f-14]^s[f-16];s[f]=(p<<1|p>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],u,h;for(let f=0;f<80;f++){f<40?f<20?(u=a^i&(o^a),h=1518500249):(u=i^o^a,h=1859775393):f<60?(u=i&o|a&(i|o),h=2400959708):(u=i^o^a,h=3395469782);const p=(r<<5|r>>>27)+u+l+h+s[f]&4294967295;l=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=p}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<n;){if(o===0)for(;r<=s;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<n;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<n;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[s]=this.chain_[r]>>i&255,++s;return e}}function hk(t,e){const n=new fk(t,e);return n.subscribe.bind(n)}class fk{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let r;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");dk(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:s},r.next===void 0&&(r.next=ch),r.error===void 0&&(r.error=ch),r.complete===void 0&&(r.complete=ch);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dk(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function ch(){}function pk(t,e){return`${t} failed: ${e} argument `}/**
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
 */const gk=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let r=t.charCodeAt(s);if(r>=55296&&r<=56319){const i=r-55296;s++,Y(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;r=65536+(i<<10)+o}r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):r<65536?(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},tu=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Bt(t){return t&&t._delegate?t._delegate:t}class Sn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const dr="[DEFAULT]";/**
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
 */class mk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new ea;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yk(e))try{this.getOrInitializeService({instanceIdentifier:dr})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(e=dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=dr){return this.instances.has(e)}getOptions(e=dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);s===a&&o.resolve(r)}return r}onInit(e,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_k(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=dr){return this.component?this.component.multipleInstances?e:dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _k(t){return t===dr?void 0:t}function yk(t){return t.instantiationMode==="EAGER"}/**
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
 */class vk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const Ek={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},Tk=ve.INFO,wk={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},Ik=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),r=wk[e];if(r)console[r](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Aa{constructor(e){this.name=e,this._logLevel=Tk,this._logHandler=Ik,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ek[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const bk=(t,e)=>e.some(n=>t instanceof n);let Km,zm;function Rk(){return Km||(Km=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ak(){return zm||(zm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const QT=new WeakMap,uf=new WeakMap,YT=new WeakMap,uh=new WeakMap,xd=new WeakMap;function Ck(t){const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Bs(t.result)),r()},o=()=>{s(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&QT.set(n,t)}).catch(()=>{}),xd.set(e,t),e}function Sk(t){if(uf.has(t))return;const e=new Promise((n,s)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),r()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});uf.set(t,e)}let hf={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return uf.get(t);if(e==="objectStoreNames")return t.objectStoreNames||YT.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bs(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Pk(t){hf=t(hf)}function kk(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(hh(this),e,...n);return YT.set(s,e.sort?e.sort():[e]),Bs(s)}:Ak().includes(t)?function(...e){return t.apply(hh(this),e),Bs(QT.get(this))}:function(...e){return Bs(t.apply(hh(this),e))}}function Nk(t){return typeof t=="function"?kk(t):(t instanceof IDBTransaction&&Sk(t),bk(t,Rk())?new Proxy(t,hf):t)}function Bs(t){if(t instanceof IDBRequest)return Ck(t);if(uh.has(t))return uh.get(t);const e=Nk(t);return e!==t&&(uh.set(t,e),xd.set(e,t)),e}const hh=t=>xd.get(t);function Ok(t,e,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(t,e),a=Bs(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Bs(o.result),l.oldVersion,l.newVersion,Bs(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",u=>r(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Dk=["get","getKey","getAll","getAllKeys","count"],xk=["put","add","delete","clear"],fh=new Map;function Gm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(fh.get(e))return fh.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,r=xk.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(r||Dk.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let u=l.store;return s&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),r&&l.done]))[0]};return fh.set(e,i),i}Pk(t=>({...t,get:(e,n,s)=>Gm(e,n)||t.get(e,n,s),has:(e,n)=>!!Gm(e,n)||t.has(e,n)}));/**
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
 */class Mk{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lk(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Lk(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ff="@firebase/app",Qm="0.11.4";/**
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
 */const ds=new Aa("@firebase/app"),Vk="@firebase/app-compat",Fk="@firebase/analytics-compat",Uk="@firebase/analytics",Bk="@firebase/app-check-compat",jk="@firebase/app-check",Hk="@firebase/auth",$k="@firebase/auth-compat",Wk="@firebase/database",qk="@firebase/data-connect",Kk="@firebase/database-compat",zk="@firebase/functions",Gk="@firebase/functions-compat",Qk="@firebase/installations",Yk="@firebase/installations-compat",Xk="@firebase/messaging",Jk="@firebase/messaging-compat",Zk="@firebase/performance",eN="@firebase/performance-compat",tN="@firebase/remote-config",nN="@firebase/remote-config-compat",sN="@firebase/storage",rN="@firebase/storage-compat",iN="@firebase/firestore",oN="@firebase/vertexai",aN="@firebase/firestore-compat",lN="firebase",cN="11.6.0";/**
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
 */const df="[DEFAULT]",uN={[ff]:"fire-core",[Vk]:"fire-core-compat",[Uk]:"fire-analytics",[Fk]:"fire-analytics-compat",[jk]:"fire-app-check",[Bk]:"fire-app-check-compat",[Hk]:"fire-auth",[$k]:"fire-auth-compat",[Wk]:"fire-rtdb",[qk]:"fire-data-connect",[Kk]:"fire-rtdb-compat",[zk]:"fire-fn",[Gk]:"fire-fn-compat",[Qk]:"fire-iid",[Yk]:"fire-iid-compat",[Xk]:"fire-fcm",[Jk]:"fire-fcm-compat",[Zk]:"fire-perf",[eN]:"fire-perf-compat",[tN]:"fire-rc",[nN]:"fire-rc-compat",[sN]:"fire-gcs",[rN]:"fire-gcs-compat",[iN]:"fire-fst",[aN]:"fire-fst-compat",[oN]:"fire-vertex","fire-js":"fire-js",[lN]:"fire-js-all"};/**
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
 */const lc=new Map,hN=new Map,pf=new Map;function Ym(t,e){try{t.container.addComponent(e)}catch(n){ds.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $n(t){const e=t.name;if(pf.has(e))return ds.debug(`There were multiple attempts to register component ${e}.`),!1;pf.set(e,t);for(const n of lc.values())Ym(n,t);for(const n of hN.values())Ym(n,t);return!0}function XT(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const fN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},js=new $i("app","Firebase",fN);/**
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
 */class dN{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Sn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw js.create("app-deleted",{appName:this._name})}}/**
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
 */const nr=cN;function JT(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:df,automaticDataCollectionEnabled:!1},e),r=s.name;if(typeof r!="string"||!r)throw js.create("bad-app-name",{appName:String(r)});if(n||(n=qT()),!n)throw js.create("no-options");const i=lc.get(r);if(i){if(na(n,i.options)&&na(s,i.config))return i;throw js.create("duplicate-app",{appName:r})}const o=new vk(r);for(const l of pf.values())o.addComponent(l);const a=new dN(n,s,o);return lc.set(r,a),a}function ZT(t=df){const e=lc.get(t);if(!e&&t===df&&qT())return JT();if(!e)throw js.create("no-app",{appName:t});return e}function tn(t,e,n){var s;let r=(s=uN[t])!==null&&s!==void 0?s:t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${e}":`];i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ds.warn(a.join(" "));return}$n(new Sn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const pN="firebase-heartbeat-database",gN=1,sa="firebase-heartbeat-store";let dh=null;function ew(){return dh||(dh=Ok(pN,gN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(sa)}catch(n){console.warn(n)}}}}).catch(t=>{throw js.create("idb-open",{originalErrorMessage:t.message})})),dh}async function mN(t){try{const n=(await ew()).transaction(sa),s=await n.objectStore(sa).get(tw(t));return await n.done,s}catch(e){if(e instanceof Gn)ds.warn(e.message);else{const n=js.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ds.warn(n.message)}}}async function Xm(t,e){try{const s=(await ew()).transaction(sa,"readwrite");await s.objectStore(sa).put(e,tw(t)),await s.done}catch(n){if(n instanceof Gn)ds.warn(n.message);else{const s=js.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ds.warn(s.message)}}}function tw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const _N=1024,yN=30;class vN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new TN(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Jm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats.length>yN){const o=wN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ds.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Jm(),{heartbeatsToSend:s,unsentEntries:r}=EN(this._heartbeatsCache.heartbeats),i=ic(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return ds.warn(n),""}}}function Jm(){return new Date().toISOString().substring(0,10)}function EN(t,e=_N){const n=[];let s=t.slice();for(const r of t){const i=n.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),Zm(n)>e){i.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Zm(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class TN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return zT()?rk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mN(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return Xm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Zm(t){return ic(JSON.stringify({version:2,heartbeats:t})).length}function wN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function IN(t){$n(new Sn("platform-logger",e=>new Mk(e),"PRIVATE")),$n(new Sn("heartbeat",e=>new vN(e),"PRIVATE")),tn(ff,Qm,t),tn(ff,Qm,"esm2017"),tn("fire-js","")}IN("");var e_=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hs,nw;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,T){function w(){}w.prototype=T.prototype,I.D=T.prototype,I.prototype=new w,I.prototype.constructor=I,I.C=function(R,N,P){for(var A=Array(arguments.length-2),ge=2;ge<arguments.length;ge++)A[ge-2]=arguments[ge];return T.prototype[N].apply(R,A)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(s,n),s.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(I,T,w){w||(w=0);var R=Array(16);if(typeof T=="string")for(var N=0;16>N;++N)R[N]=T.charCodeAt(w++)|T.charCodeAt(w++)<<8|T.charCodeAt(w++)<<16|T.charCodeAt(w++)<<24;else for(N=0;16>N;++N)R[N]=T[w++]|T[w++]<<8|T[w++]<<16|T[w++]<<24;T=I.g[0],w=I.g[1],N=I.g[2];var P=I.g[3],A=T+(P^w&(N^P))+R[0]+3614090360&4294967295;T=w+(A<<7&4294967295|A>>>25),A=P+(N^T&(w^N))+R[1]+3905402710&4294967295,P=T+(A<<12&4294967295|A>>>20),A=N+(w^P&(T^w))+R[2]+606105819&4294967295,N=P+(A<<17&4294967295|A>>>15),A=w+(T^N&(P^T))+R[3]+3250441966&4294967295,w=N+(A<<22&4294967295|A>>>10),A=T+(P^w&(N^P))+R[4]+4118548399&4294967295,T=w+(A<<7&4294967295|A>>>25),A=P+(N^T&(w^N))+R[5]+1200080426&4294967295,P=T+(A<<12&4294967295|A>>>20),A=N+(w^P&(T^w))+R[6]+2821735955&4294967295,N=P+(A<<17&4294967295|A>>>15),A=w+(T^N&(P^T))+R[7]+4249261313&4294967295,w=N+(A<<22&4294967295|A>>>10),A=T+(P^w&(N^P))+R[8]+1770035416&4294967295,T=w+(A<<7&4294967295|A>>>25),A=P+(N^T&(w^N))+R[9]+2336552879&4294967295,P=T+(A<<12&4294967295|A>>>20),A=N+(w^P&(T^w))+R[10]+4294925233&4294967295,N=P+(A<<17&4294967295|A>>>15),A=w+(T^N&(P^T))+R[11]+2304563134&4294967295,w=N+(A<<22&4294967295|A>>>10),A=T+(P^w&(N^P))+R[12]+1804603682&4294967295,T=w+(A<<7&4294967295|A>>>25),A=P+(N^T&(w^N))+R[13]+4254626195&4294967295,P=T+(A<<12&4294967295|A>>>20),A=N+(w^P&(T^w))+R[14]+2792965006&4294967295,N=P+(A<<17&4294967295|A>>>15),A=w+(T^N&(P^T))+R[15]+1236535329&4294967295,w=N+(A<<22&4294967295|A>>>10),A=T+(N^P&(w^N))+R[1]+4129170786&4294967295,T=w+(A<<5&4294967295|A>>>27),A=P+(w^N&(T^w))+R[6]+3225465664&4294967295,P=T+(A<<9&4294967295|A>>>23),A=N+(T^w&(P^T))+R[11]+643717713&4294967295,N=P+(A<<14&4294967295|A>>>18),A=w+(P^T&(N^P))+R[0]+3921069994&4294967295,w=N+(A<<20&4294967295|A>>>12),A=T+(N^P&(w^N))+R[5]+3593408605&4294967295,T=w+(A<<5&4294967295|A>>>27),A=P+(w^N&(T^w))+R[10]+38016083&4294967295,P=T+(A<<9&4294967295|A>>>23),A=N+(T^w&(P^T))+R[15]+3634488961&4294967295,N=P+(A<<14&4294967295|A>>>18),A=w+(P^T&(N^P))+R[4]+3889429448&4294967295,w=N+(A<<20&4294967295|A>>>12),A=T+(N^P&(w^N))+R[9]+568446438&4294967295,T=w+(A<<5&4294967295|A>>>27),A=P+(w^N&(T^w))+R[14]+3275163606&4294967295,P=T+(A<<9&4294967295|A>>>23),A=N+(T^w&(P^T))+R[3]+4107603335&4294967295,N=P+(A<<14&4294967295|A>>>18),A=w+(P^T&(N^P))+R[8]+1163531501&4294967295,w=N+(A<<20&4294967295|A>>>12),A=T+(N^P&(w^N))+R[13]+2850285829&4294967295,T=w+(A<<5&4294967295|A>>>27),A=P+(w^N&(T^w))+R[2]+4243563512&4294967295,P=T+(A<<9&4294967295|A>>>23),A=N+(T^w&(P^T))+R[7]+1735328473&4294967295,N=P+(A<<14&4294967295|A>>>18),A=w+(P^T&(N^P))+R[12]+2368359562&4294967295,w=N+(A<<20&4294967295|A>>>12),A=T+(w^N^P)+R[5]+4294588738&4294967295,T=w+(A<<4&4294967295|A>>>28),A=P+(T^w^N)+R[8]+2272392833&4294967295,P=T+(A<<11&4294967295|A>>>21),A=N+(P^T^w)+R[11]+1839030562&4294967295,N=P+(A<<16&4294967295|A>>>16),A=w+(N^P^T)+R[14]+4259657740&4294967295,w=N+(A<<23&4294967295|A>>>9),A=T+(w^N^P)+R[1]+2763975236&4294967295,T=w+(A<<4&4294967295|A>>>28),A=P+(T^w^N)+R[4]+1272893353&4294967295,P=T+(A<<11&4294967295|A>>>21),A=N+(P^T^w)+R[7]+4139469664&4294967295,N=P+(A<<16&4294967295|A>>>16),A=w+(N^P^T)+R[10]+3200236656&4294967295,w=N+(A<<23&4294967295|A>>>9),A=T+(w^N^P)+R[13]+681279174&4294967295,T=w+(A<<4&4294967295|A>>>28),A=P+(T^w^N)+R[0]+3936430074&4294967295,P=T+(A<<11&4294967295|A>>>21),A=N+(P^T^w)+R[3]+3572445317&4294967295,N=P+(A<<16&4294967295|A>>>16),A=w+(N^P^T)+R[6]+76029189&4294967295,w=N+(A<<23&4294967295|A>>>9),A=T+(w^N^P)+R[9]+3654602809&4294967295,T=w+(A<<4&4294967295|A>>>28),A=P+(T^w^N)+R[12]+3873151461&4294967295,P=T+(A<<11&4294967295|A>>>21),A=N+(P^T^w)+R[15]+530742520&4294967295,N=P+(A<<16&4294967295|A>>>16),A=w+(N^P^T)+R[2]+3299628645&4294967295,w=N+(A<<23&4294967295|A>>>9),A=T+(N^(w|~P))+R[0]+4096336452&4294967295,T=w+(A<<6&4294967295|A>>>26),A=P+(w^(T|~N))+R[7]+1126891415&4294967295,P=T+(A<<10&4294967295|A>>>22),A=N+(T^(P|~w))+R[14]+2878612391&4294967295,N=P+(A<<15&4294967295|A>>>17),A=w+(P^(N|~T))+R[5]+4237533241&4294967295,w=N+(A<<21&4294967295|A>>>11),A=T+(N^(w|~P))+R[12]+1700485571&4294967295,T=w+(A<<6&4294967295|A>>>26),A=P+(w^(T|~N))+R[3]+2399980690&4294967295,P=T+(A<<10&4294967295|A>>>22),A=N+(T^(P|~w))+R[10]+4293915773&4294967295,N=P+(A<<15&4294967295|A>>>17),A=w+(P^(N|~T))+R[1]+2240044497&4294967295,w=N+(A<<21&4294967295|A>>>11),A=T+(N^(w|~P))+R[8]+1873313359&4294967295,T=w+(A<<6&4294967295|A>>>26),A=P+(w^(T|~N))+R[15]+4264355552&4294967295,P=T+(A<<10&4294967295|A>>>22),A=N+(T^(P|~w))+R[6]+2734768916&4294967295,N=P+(A<<15&4294967295|A>>>17),A=w+(P^(N|~T))+R[13]+1309151649&4294967295,w=N+(A<<21&4294967295|A>>>11),A=T+(N^(w|~P))+R[4]+4149444226&4294967295,T=w+(A<<6&4294967295|A>>>26),A=P+(w^(T|~N))+R[11]+3174756917&4294967295,P=T+(A<<10&4294967295|A>>>22),A=N+(T^(P|~w))+R[2]+718787259&4294967295,N=P+(A<<15&4294967295|A>>>17),A=w+(P^(N|~T))+R[9]+3951481745&4294967295,I.g[0]=I.g[0]+T&4294967295,I.g[1]=I.g[1]+(N+(A<<21&4294967295|A>>>11))&4294967295,I.g[2]=I.g[2]+N&4294967295,I.g[3]=I.g[3]+P&4294967295}s.prototype.u=function(I,T){T===void 0&&(T=I.length);for(var w=T-this.blockSize,R=this.B,N=this.h,P=0;P<T;){if(N==0)for(;P<=w;)r(this,I,P),P+=this.blockSize;if(typeof I=="string"){for(;P<T;)if(R[N++]=I.charCodeAt(P++),N==this.blockSize){r(this,R),N=0;break}}else for(;P<T;)if(R[N++]=I[P++],N==this.blockSize){r(this,R),N=0;break}}this.h=N,this.o+=T},s.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var T=1;T<I.length-8;++T)I[T]=0;var w=8*this.o;for(T=I.length-8;T<I.length;++T)I[T]=w&255,w/=256;for(this.u(I),I=Array(16),T=w=0;4>T;++T)for(var R=0;32>R;R+=8)I[w++]=this.g[T]>>>R&255;return I};function i(I,T){var w=a;return Object.prototype.hasOwnProperty.call(w,I)?w[I]:w[I]=T(I)}function o(I,T){this.h=T;for(var w=[],R=!0,N=I.length-1;0<=N;N--){var P=I[N]|0;R&&P==T||(w[N]=P,R=!1)}this.g=w}var a={};function l(I){return-128<=I&&128>I?i(I,function(T){return new o([T|0],0>T?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return f;if(0>I)return b(u(-I));for(var T=[],w=1,R=0;I>=w;R++)T[R]=I/w|0,w*=4294967296;return new o(T,0)}function h(I,T){if(I.length==0)throw Error("number format error: empty string");if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(I.charAt(0)=="-")return b(h(I.substring(1),T));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=u(Math.pow(T,8)),R=f,N=0;N<I.length;N+=8){var P=Math.min(8,I.length-N),A=parseInt(I.substring(N,N+P),T);8>P?(P=u(Math.pow(T,P)),R=R.j(P).add(u(A))):(R=R.j(w),R=R.add(u(A)))}return R}var f=l(0),p=l(1),m=l(16777216);t=o.prototype,t.m=function(){if(y(this))return-b(this).m();for(var I=0,T=1,w=0;w<this.g.length;w++){var R=this.i(w);I+=(0<=R?R:4294967296+R)*T,T*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(_(this))return"0";if(y(this))return"-"+b(this).toString(I);for(var T=u(Math.pow(I,6)),w=this,R="";;){var N=C(w,T).g;w=O(w,N.j(T));var P=((0<w.g.length?w.g[0]:w.h)>>>0).toString(I);if(w=N,_(w))return P+R;for(;6>P.length;)P="0"+P;R=P+R}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function _(I){if(I.h!=0)return!1;for(var T=0;T<I.g.length;T++)if(I.g[T]!=0)return!1;return!0}function y(I){return I.h==-1}t.l=function(I){return I=O(this,I),y(I)?-1:_(I)?0:1};function b(I){for(var T=I.g.length,w=[],R=0;R<T;R++)w[R]=~I.g[R];return new o(w,~I.h).add(p)}t.abs=function(){return y(this)?b(this):this},t.add=function(I){for(var T=Math.max(this.g.length,I.g.length),w=[],R=0,N=0;N<=T;N++){var P=R+(this.i(N)&65535)+(I.i(N)&65535),A=(P>>>16)+(this.i(N)>>>16)+(I.i(N)>>>16);R=A>>>16,P&=65535,A&=65535,w[N]=A<<16|P}return new o(w,w[w.length-1]&-2147483648?-1:0)};function O(I,T){return I.add(b(T))}t.j=function(I){if(_(this)||_(I))return f;if(y(this))return y(I)?b(this).j(b(I)):b(b(this).j(I));if(y(I))return b(this.j(b(I)));if(0>this.l(m)&&0>I.l(m))return u(this.m()*I.m());for(var T=this.g.length+I.g.length,w=[],R=0;R<2*T;R++)w[R]=0;for(R=0;R<this.g.length;R++)for(var N=0;N<I.g.length;N++){var P=this.i(R)>>>16,A=this.i(R)&65535,ge=I.i(N)>>>16,Ee=I.i(N)&65535;w[2*R+2*N]+=A*Ee,D(w,2*R+2*N),w[2*R+2*N+1]+=P*Ee,D(w,2*R+2*N+1),w[2*R+2*N+1]+=A*ge,D(w,2*R+2*N+1),w[2*R+2*N+2]+=P*ge,D(w,2*R+2*N+2)}for(R=0;R<T;R++)w[R]=w[2*R+1]<<16|w[2*R];for(R=T;R<2*T;R++)w[R]=0;return new o(w,0)};function D(I,T){for(;(I[T]&65535)!=I[T];)I[T+1]+=I[T]>>>16,I[T]&=65535,T++}function v(I,T){this.g=I,this.h=T}function C(I,T){if(_(T))throw Error("division by zero");if(_(I))return new v(f,f);if(y(I))return T=C(b(I),T),new v(b(T.g),b(T.h));if(y(T))return T=C(I,b(T)),new v(b(T.g),T.h);if(30<I.g.length){if(y(I)||y(T))throw Error("slowDivide_ only works with positive integers.");for(var w=p,R=T;0>=R.l(I);)w=x(w),R=x(R);var N=M(w,1),P=M(R,1);for(R=M(R,2),w=M(w,2);!_(R);){var A=P.add(R);0>=A.l(I)&&(N=N.add(w),P=A),R=M(R,1),w=M(w,1)}return T=O(I,N.j(T)),new v(N,T)}for(N=f;0<=I.l(T);){for(w=Math.max(1,Math.floor(I.m()/T.m())),R=Math.ceil(Math.log(w)/Math.LN2),R=48>=R?1:Math.pow(2,R-48),P=u(w),A=P.j(T);y(A)||0<A.l(I);)w-=R,P=u(w),A=P.j(T);_(P)&&(P=p),N=N.add(P),I=O(I,A)}return new v(N,I)}t.A=function(I){return C(this,I).h},t.and=function(I){for(var T=Math.max(this.g.length,I.g.length),w=[],R=0;R<T;R++)w[R]=this.i(R)&I.i(R);return new o(w,this.h&I.h)},t.or=function(I){for(var T=Math.max(this.g.length,I.g.length),w=[],R=0;R<T;R++)w[R]=this.i(R)|I.i(R);return new o(w,this.h|I.h)},t.xor=function(I){for(var T=Math.max(this.g.length,I.g.length),w=[],R=0;R<T;R++)w[R]=this.i(R)^I.i(R);return new o(w,this.h^I.h)};function x(I){for(var T=I.g.length+1,w=[],R=0;R<T;R++)w[R]=I.i(R)<<1|I.i(R-1)>>>31;return new o(w,I.h)}function M(I,T){var w=T>>5;T%=32;for(var R=I.g.length-w,N=[],P=0;P<R;P++)N[P]=0<T?I.i(P+w)>>>T|I.i(P+w+1)<<32-T:I.i(P+w);return new o(N,I.h)}s.prototype.digest=s.prototype.v,s.prototype.reset=s.prototype.s,s.prototype.update=s.prototype.u,nw=s,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=h,Hs=o}).apply(typeof e_<"u"?e_:typeof self<"u"?self:typeof window<"u"?window:{});var fl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sw,Ro,rw,Pl,gf,iw,ow,aw;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(c,d,g){return c==Array.prototype||c==Object.prototype||(c[d]=g.value),c};function n(c){c=[typeof globalThis=="object"&&globalThis,c,typeof window=="object"&&window,typeof self=="object"&&self,typeof fl=="object"&&fl];for(var d=0;d<c.length;++d){var g=c[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var s=n(this);function r(c,d){if(d)e:{var g=s;c=c.split(".");for(var E=0;E<c.length-1;E++){var L=c[E];if(!(L in g))break e;g=g[L]}c=c[c.length-1],E=g[c],d=d(E),d!=E&&d!=null&&e(g,c,{configurable:!0,writable:!0,value:d})}}function i(c,d){c instanceof String&&(c+="");var g=0,E=!1,L={next:function(){if(!E&&g<c.length){var F=g++;return{value:d(F,c[F]),done:!1}}return E=!0,{done:!0,value:void 0}}};return L[Symbol.iterator]=function(){return L},L}r("Array.prototype.values",function(c){return c||function(){return i(this,function(d,g){return g})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},a=this||self;function l(c){var d=typeof c;return d=d!="object"?d:c?Array.isArray(c)?"array":d:"null",d=="array"||d=="object"&&typeof c.length=="number"}function u(c){var d=typeof c;return d=="object"&&c!=null||d=="function"}function h(c,d,g){return c.call.apply(c.bind,arguments)}function f(c,d,g){if(!c)throw Error();if(2<arguments.length){var E=Array.prototype.slice.call(arguments,2);return function(){var L=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(L,E),c.apply(d,L)}}return function(){return c.apply(d,arguments)}}function p(c,d,g){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?h:f,p.apply(null,arguments)}function m(c,d){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),c.apply(this,E)}}function _(c,d){function g(){}g.prototype=d.prototype,c.aa=d.prototype,c.prototype=new g,c.prototype.constructor=c,c.Qb=function(E,L,F){for(var G=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)G[Ve-2]=arguments[Ve];return d.prototype[L].apply(E,G)}}function y(c){const d=c.length;if(0<d){const g=Array(d);for(let E=0;E<d;E++)g[E]=c[E];return g}return[]}function b(c,d){for(let g=1;g<arguments.length;g++){const E=arguments[g];if(l(E)){const L=c.length||0,F=E.length||0;c.length=L+F;for(let G=0;G<F;G++)c[L+G]=E[G]}else c.push(E)}}class O{constructor(d,g){this.i=d,this.j=g,this.h=0,this.g=null}get(){let d;return 0<this.h?(this.h--,d=this.g,this.g=d.next,d.next=null):d=this.i(),d}}function D(c){return/^[\s\xa0]*$/.test(c)}function v(){var c=a.navigator;return c&&(c=c.userAgent)?c:""}function C(c){return C[" "](c),c}C[" "]=function(){};var x=v().indexOf("Gecko")!=-1&&!(v().toLowerCase().indexOf("webkit")!=-1&&v().indexOf("Edge")==-1)&&!(v().indexOf("Trident")!=-1||v().indexOf("MSIE")!=-1)&&v().indexOf("Edge")==-1;function M(c,d,g){for(const E in c)d.call(g,c[E],E,c)}function I(c,d){for(const g in c)d.call(void 0,c[g],g,c)}function T(c){const d={};for(const g in c)d[g]=c[g];return d}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(c,d){let g,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(g in E)c[g]=E[g];for(let F=0;F<w.length;F++)g=w[F],Object.prototype.hasOwnProperty.call(E,g)&&(c[g]=E[g])}}function N(c){var d=1;c=c.split(":");const g=[];for(;0<d&&c.length;)g.push(c.shift()),d--;return c.length&&g.push(c.join(":")),g}function P(c){a.setTimeout(()=>{throw c},0)}function A(){var c=qe;let d=null;return c.g&&(d=c.g,c.g=c.g.next,c.g||(c.h=null),d.next=null),d}class ge{constructor(){this.h=this.g=null}add(d,g){const E=Ee.get();E.set(d,g),this.h?this.h.next=E:this.g=E,this.h=E}}var Ee=new O(()=>new ne,c=>c.reset());class ne{constructor(){this.next=this.g=this.h=null}set(d,g){this.h=d,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,te=!1,qe=new ge,dn=()=>{const c=a.Promise.resolve(void 0);ue=()=>{c.then(on)}};var on=()=>{for(var c;c=A();){try{c.h.call(c.g)}catch(g){P(g)}var d=Ee;d.j(c),100>d.h&&(d.h++,c.next=d.g,d.g=c)}te=!1};function Ke(){this.s=this.s,this.C=this.C}Ke.prototype.s=!1,Ke.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ke.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ze(c,d){this.type=c,this.g=this.target=d,this.defaultPrevented=!1}ze.prototype.h=function(){this.defaultPrevented=!0};var Es=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var c=!1,d=Object.defineProperty({},"passive",{get:function(){c=!0}});try{const g=()=>{};a.addEventListener("test",g,d),a.removeEventListener("test",g,d)}catch{}return c}();function Nn(c,d){if(ze.call(this,c?c.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,c){var g=this.type=c.type,E=c.changedTouches&&c.changedTouches.length?c.changedTouches[0]:null;if(this.target=c.target||c.srcElement,this.g=d,d=c.relatedTarget){if(x){e:{try{C(d.nodeName);var L=!0;break e}catch{}L=!1}L||(d=null)}}else g=="mouseover"?d=c.fromElement:g=="mouseout"&&(d=c.toElement);this.relatedTarget=d,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=c.clientX!==void 0?c.clientX:c.pageX,this.clientY=c.clientY!==void 0?c.clientY:c.pageY,this.screenX=c.screenX||0,this.screenY=c.screenY||0),this.button=c.button,this.key=c.key||"",this.ctrlKey=c.ctrlKey,this.altKey=c.altKey,this.shiftKey=c.shiftKey,this.metaKey=c.metaKey,this.pointerId=c.pointerId||0,this.pointerType=typeof c.pointerType=="string"?c.pointerType:Ht[c.pointerType]||"",this.state=c.state,this.i=c,c.defaultPrevented&&Nn.aa.h.call(this)}}_(Nn,ze);var Ht={2:"touch",3:"pen",4:"mouse"};Nn.prototype.h=function(){Nn.aa.h.call(this);var c=this.i;c.preventDefault?c.preventDefault():c.returnValue=!1};var B="closure_listenable_"+(1e6*Math.random()|0),Z=0;function X(c,d,g,E,L){this.listener=c,this.proxy=null,this.src=d,this.type=g,this.capture=!!E,this.ha=L,this.key=++Z,this.da=this.fa=!1}function se(c){c.da=!0,c.listener=null,c.proxy=null,c.src=null,c.ha=null}function we(c){this.src=c,this.g={},this.h=0}we.prototype.add=function(c,d,g,E,L){var F=c.toString();c=this.g[F],c||(c=this.g[F]=[],this.h++);var G=S(c,d,E,L);return-1<G?(d=c[G],g||(d.fa=!1)):(d=new X(d,this.src,F,!!E,L),d.fa=g,c.push(d)),d};function Me(c,d){var g=d.type;if(g in c.g){var E=c.g[g],L=Array.prototype.indexOf.call(E,d,void 0),F;(F=0<=L)&&Array.prototype.splice.call(E,L,1),F&&(se(d),c.g[g].length==0&&(delete c.g[g],c.h--))}}function S(c,d,g,E){for(var L=0;L<c.length;++L){var F=c[L];if(!F.da&&F.listener==d&&F.capture==!!g&&F.ha==E)return L}return-1}var k="closure_lm_"+(1e6*Math.random()|0),V={};function H(c,d,g,E,L){if(Array.isArray(d)){for(var F=0;F<d.length;F++)H(c,d[F],g,E,L);return null}return g=ie(g),c&&c[B]?c.K(d,g,u(E)?!!E.capture:!1,L):U(c,d,g,!1,E,L)}function U(c,d,g,E,L,F){if(!d)throw Error("Invalid event type");var G=u(L)?!!L.capture:!!L,Ve=ae(c);if(Ve||(c[k]=Ve=new we(c)),g=Ve.add(d,g,E,G,F),g.proxy)return g;if(E=W(),g.proxy=E,E.src=c,E.listener=g,c.addEventListener)Es||(L=G),L===void 0&&(L=!1),c.addEventListener(d.toString(),E,L);else if(c.attachEvent)c.attachEvent(K(d.toString()),E);else if(c.addListener&&c.removeListener)c.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function W(){function c(g){return d.call(c.src,c.listener,g)}const d=q;return c}function Q(c,d,g,E,L){if(Array.isArray(d))for(var F=0;F<d.length;F++)Q(c,d[F],g,E,L);else E=u(E)?!!E.capture:!!E,g=ie(g),c&&c[B]?(c=c.i,d=String(d).toString(),d in c.g&&(F=c.g[d],g=S(F,g,E,L),-1<g&&(se(F[g]),Array.prototype.splice.call(F,g,1),F.length==0&&(delete c.g[d],c.h--)))):c&&(c=ae(c))&&(d=c.g[d.toString()],c=-1,d&&(c=S(d,g,E,L)),(g=-1<c?d[c]:null)&&z(g))}function z(c){if(typeof c!="number"&&c&&!c.da){var d=c.src;if(d&&d[B])Me(d.i,c);else{var g=c.type,E=c.proxy;d.removeEventListener?d.removeEventListener(g,E,c.capture):d.detachEvent?d.detachEvent(K(g),E):d.addListener&&d.removeListener&&d.removeListener(E),(g=ae(d))?(Me(g,c),g.h==0&&(g.src=null,d[k]=null)):se(c)}}}function K(c){return c in V?V[c]:V[c]="on"+c}function q(c,d){if(c.da)c=!0;else{d=new Nn(d,this);var g=c.listener,E=c.ha||c.src;c.fa&&z(c),c=g.call(E,d)}return c}function ae(c){return c=c[k],c instanceof we?c:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function ie(c){return typeof c=="function"?c:(c[J]||(c[J]=function(d){return c.handleEvent(d)}),c[J])}function re(){Ke.call(this),this.i=new we(this),this.M=this,this.F=null}_(re,Ke),re.prototype[B]=!0,re.prototype.removeEventListener=function(c,d,g,E){Q(this,c,d,g,E)};function ce(c,d){var g,E=c.F;if(E)for(g=[];E;E=E.F)g.push(E);if(c=c.M,E=d.type||d,typeof d=="string")d=new ze(d,c);else if(d instanceof ze)d.target=d.target||c;else{var L=d;d=new ze(E,c),R(d,L)}if(L=!0,g)for(var F=g.length-1;0<=F;F--){var G=d.g=g[F];L=ke(G,E,!0,d)&&L}if(G=d.g=c,L=ke(G,E,!0,d)&&L,L=ke(G,E,!1,d)&&L,g)for(F=0;F<g.length;F++)G=d.g=g[F],L=ke(G,E,!1,d)&&L}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var c=this.i,d;for(d in c.g){for(var g=c.g[d],E=0;E<g.length;E++)se(g[E]);delete c.g[d],c.h--}}this.F=null},re.prototype.K=function(c,d,g,E){return this.i.add(String(c),d,!1,g,E)},re.prototype.L=function(c,d,g,E){return this.i.add(String(c),d,!0,g,E)};function ke(c,d,g,E){if(d=c.i.g[String(d)],!d)return!0;d=d.concat();for(var L=!0,F=0;F<d.length;++F){var G=d[F];if(G&&!G.da&&G.capture==g){var Ve=G.listener,gt=G.ha||G.src;G.fa&&Me(c.i,G),L=Ve.call(gt,E)!==!1&&L}}return L&&!E.defaultPrevented}function Ce(c,d,g){if(typeof c=="function")g&&(c=p(c,g));else if(c&&typeof c.handleEvent=="function")c=p(c.handleEvent,c);else throw Error("Invalid listener argument");return 2147483647<Number(d)?-1:a.setTimeout(c,d||0)}function Tt(c){c.g=Ce(()=>{c.g=null,c.i&&(c.i=!1,Tt(c))},c.l);const d=c.h;c.h=null,c.m.apply(null,d)}class lt extends Ke{constructor(d,g){super(),this.m=d,this.l=g,this.h=null,this.i=!1,this.g=null}j(d){this.h=arguments,this.g?this.i=!0:Tt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pt(c){Ke.call(this),this.h=c,this.g={}}_(pt,Ke);var wt=[];function Ts(c){M(c.g,function(d,g){this.g.hasOwnProperty(g)&&z(d)},c),c.g={}}pt.prototype.N=function(){pt.aa.N.call(this),Ts(this)},pt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var jr=a.JSON.stringify,xt=a.JSON.parse,an=class{stringify(c){return a.JSON.stringify(c,void 0)}parse(c){return a.JSON.parse(c,void 0)}};function Hr(){}Hr.prototype.h=null;function lg(c){return c.h||(c.h=c.i())}function cg(){}var eo={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ou(){ze.call(this,"d")}_(Ou,ze);function Du(){ze.call(this,"c")}_(Du,ze);var rr={},ug=null;function Ha(){return ug=ug||new re}rr.La="serverreachability";function hg(c){ze.call(this,rr.La,c)}_(hg,ze);function to(c){const d=Ha();ce(d,new hg(d))}rr.STAT_EVENT="statevent";function fg(c,d){ze.call(this,rr.STAT_EVENT,c),this.stat=d}_(fg,ze);function Mt(c){const d=Ha();ce(d,new fg(d,c))}rr.Ma="timingevent";function dg(c,d){ze.call(this,rr.Ma,c),this.size=d}_(dg,ze);function no(c,d){if(typeof c!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){c()},d)}function so(){this.g=!0}so.prototype.xa=function(){this.g=!1};function cA(c,d,g,E,L,F){c.info(function(){if(c.g)if(F)for(var G="",Ve=F.split("&"),gt=0;gt<Ve.length;gt++){var Se=Ve[gt].split("=");if(1<Se.length){var It=Se[0];Se=Se[1];var bt=It.split("_");G=2<=bt.length&&bt[1]=="type"?G+(It+"="+Se+"&"):G+(It+"=redacted&")}}else G=null;else G=F;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+d+`
`+g+`
`+G})}function uA(c,d,g,E,L,F,G){c.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+d+`
`+g+`
`+F+" "+G})}function $r(c,d,g,E){c.info(function(){return"XMLHTTP TEXT ("+d+"): "+fA(c,g)+(E?" "+E:"")})}function hA(c,d){c.info(function(){return"TIMEOUT: "+d})}so.prototype.info=function(){};function fA(c,d){if(!c.g)return d;if(!d)return null;try{var g=JSON.parse(d);if(g){for(c=0;c<g.length;c++)if(Array.isArray(g[c])){var E=g[c];if(!(2>E.length)){var L=E[1];if(Array.isArray(L)&&!(1>L.length)){var F=L[0];if(F!="noop"&&F!="stop"&&F!="close")for(var G=1;G<L.length;G++)L[G]=""}}}}return jr(g)}catch{return d}}var $a={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},pg={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},xu;function Wa(){}_(Wa,Hr),Wa.prototype.g=function(){return new XMLHttpRequest},Wa.prototype.i=function(){return{}},xu=new Wa;function ws(c,d,g,E){this.j=c,this.i=d,this.l=g,this.R=E||1,this.U=new pt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new gg}function gg(){this.i=null,this.g="",this.h=!1}var mg={},Mu={};function Lu(c,d,g){c.L=1,c.v=Ga(Yn(d)),c.m=g,c.P=!0,_g(c,null)}function _g(c,d){c.F=Date.now(),qa(c),c.A=Yn(c.v);var g=c.A,E=c.R;Array.isArray(E)||(E=[String(E)]),Ng(g.i,"t",E),c.C=0,g=c.j.J,c.h=new gg,c.g=Qg(c.j,g?d:null,!c.m),0<c.O&&(c.M=new lt(p(c.Y,c,c.g),c.O)),d=c.U,g=c.g,E=c.ca;var L="readystatechange";Array.isArray(L)||(L&&(wt[0]=L.toString()),L=wt);for(var F=0;F<L.length;F++){var G=H(g,L[F],E||d.handleEvent,!1,d.h||d);if(!G)break;d.g[G.key]=G}d=c.H?T(c.H):{},c.m?(c.u||(c.u="POST"),d["Content-Type"]="application/x-www-form-urlencoded",c.g.ea(c.A,c.u,c.m,d)):(c.u="GET",c.g.ea(c.A,c.u,null,d)),to(),cA(c.i,c.u,c.A,c.l,c.R,c.m)}ws.prototype.ca=function(c){c=c.target;const d=this.M;d&&Xn(c)==3?d.j():this.Y(c)},ws.prototype.Y=function(c){try{if(c==this.g)e:{const bt=Xn(this.g);var d=this.g.Ba();const Kr=this.g.Z();if(!(3>bt)&&(bt!=3||this.g&&(this.h.h||this.g.oa()||Fg(this.g)))){this.J||bt!=4||d==7||(d==8||0>=Kr?to(3):to(2)),Vu(this);var g=this.g.Z();this.X=g;t:if(yg(this)){var E=Fg(this.g);c="";var L=E.length,F=Xn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),ro(this);var G="";break t}this.h.i=new a.TextDecoder}for(d=0;d<L;d++)this.h.h=!0,c+=this.h.i.decode(E[d],{stream:!(F&&d==L-1)});E.length=0,this.h.g+=c,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=g==200,uA(this.i,this.u,this.A,this.l,this.R,bt,g),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,gt=this.g;if((Ve=gt.g?gt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(Ve)){var Se=Ve;break t}}Se=null}if(g=Se)$r(this.i,this.l,g,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Fu(this,g);else{this.o=!1,this.s=3,Mt(12),ir(this),ro(this);break e}}if(this.P){g=!0;let pn;for(;!this.J&&this.C<G.length;)if(pn=dA(this,G),pn==Mu){bt==4&&(this.s=4,Mt(14),g=!1),$r(this.i,this.l,null,"[Incomplete Response]");break}else if(pn==mg){this.s=4,Mt(15),$r(this.i,this.l,G,"[Invalid Chunk]"),g=!1;break}else $r(this.i,this.l,pn,null),Fu(this,pn);if(yg(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),bt!=4||G.length!=0||this.h.h||(this.s=1,Mt(16),g=!1),this.o=this.o&&g,!g)$r(this.i,this.l,G,"[Invalid Chunked Response]"),ir(this),ro(this);else if(0<G.length&&!this.W){this.W=!0;var It=this.j;It.g==this&&It.ba&&!It.M&&(It.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Wu(It),It.M=!0,Mt(11))}}else $r(this.i,this.l,G,null),Fu(this,G);bt==4&&ir(this),this.o&&!this.J&&(bt==4?qg(this.j,this):(this.o=!1,qa(this)))}else kA(this.g),g==400&&0<G.indexOf("Unknown SID")?(this.s=3,Mt(12)):(this.s=0,Mt(13)),ir(this),ro(this)}}}catch{}finally{}};function yg(c){return c.g?c.u=="GET"&&c.L!=2&&c.j.Ca:!1}function dA(c,d){var g=c.C,E=d.indexOf(`
`,g);return E==-1?Mu:(g=Number(d.substring(g,E)),isNaN(g)?mg:(E+=1,E+g>d.length?Mu:(d=d.slice(E,E+g),c.C=E+g,d)))}ws.prototype.cancel=function(){this.J=!0,ir(this)};function qa(c){c.S=Date.now()+c.I,vg(c,c.I)}function vg(c,d){if(c.B!=null)throw Error("WatchDog timer not null");c.B=no(p(c.ba,c),d)}function Vu(c){c.B&&(a.clearTimeout(c.B),c.B=null)}ws.prototype.ba=function(){this.B=null;const c=Date.now();0<=c-this.S?(hA(this.i,this.A),this.L!=2&&(to(),Mt(17)),ir(this),this.s=2,ro(this)):vg(this,this.S-c)};function ro(c){c.j.G==0||c.J||qg(c.j,c)}function ir(c){Vu(c);var d=c.M;d&&typeof d.ma=="function"&&d.ma(),c.M=null,Ts(c.U),c.g&&(d=c.g,c.g=null,d.abort(),d.ma())}function Fu(c,d){try{var g=c.j;if(g.G!=0&&(g.g==c||Uu(g.h,c))){if(!c.K&&Uu(g.h,c)&&g.G==3){try{var E=g.Da.g.parse(d)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!g.u){if(g.g)if(g.g.F+3e3<c.F)el(g),Ja(g);else break e;$u(g),Mt(18)}}else g.za=L[1],0<g.za-g.T&&37500>L[2]&&g.F&&g.v==0&&!g.C&&(g.C=no(p(g.Za,g),6e3));if(1>=wg(g.h)&&g.ca){try{g.ca()}catch{}g.ca=void 0}}else ar(g,11)}else if((c.K||g.g==c)&&el(g),!D(d))for(L=g.Da.g.parse(d),d=0;d<L.length;d++){let Se=L[d];if(g.T=Se[0],Se=Se[1],g.G==2)if(Se[0]=="c"){g.K=Se[1],g.ia=Se[2];const It=Se[3];It!=null&&(g.la=It,g.j.info("VER="+g.la));const bt=Se[4];bt!=null&&(g.Aa=bt,g.j.info("SVER="+g.Aa));const Kr=Se[5];Kr!=null&&typeof Kr=="number"&&0<Kr&&(E=1.5*Kr,g.L=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const pn=c.g;if(pn){const nl=pn.g?pn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(nl){var F=E.h;F.g||nl.indexOf("spdy")==-1&&nl.indexOf("quic")==-1&&nl.indexOf("h2")==-1||(F.j=F.l,F.g=new Set,F.h&&(Bu(F,F.h),F.h=null))}if(E.D){const qu=pn.g?pn.g.getResponseHeader("X-HTTP-Session-Id"):null;qu&&(E.ya=qu,Be(E.I,E.D,qu))}}g.G=3,g.l&&g.l.ua(),g.ba&&(g.R=Date.now()-c.F,g.j.info("Handshake RTT: "+g.R+"ms")),E=g;var G=c;if(E.qa=Gg(E,E.J?E.ia:null,E.W),G.K){Ig(E.h,G);var Ve=G,gt=E.L;gt&&(Ve.I=gt),Ve.B&&(Vu(Ve),qa(Ve)),E.g=G}else $g(E);0<g.i.length&&Za(g)}else Se[0]!="stop"&&Se[0]!="close"||ar(g,7);else g.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?ar(g,7):Hu(g):Se[0]!="noop"&&g.l&&g.l.ta(Se),g.v=0)}}to(4)}catch{}}var pA=class{constructor(c,d){this.g=c,this.map=d}};function Eg(c){this.l=c||10,a.PerformanceNavigationTiming?(c=a.performance.getEntriesByType("navigation"),c=0<c.length&&(c[0].nextHopProtocol=="hq"||c[0].nextHopProtocol=="h2")):c=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=c?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Tg(c){return c.h?!0:c.g?c.g.size>=c.j:!1}function wg(c){return c.h?1:c.g?c.g.size:0}function Uu(c,d){return c.h?c.h==d:c.g?c.g.has(d):!1}function Bu(c,d){c.g?c.g.add(d):c.h=d}function Ig(c,d){c.h&&c.h==d?c.h=null:c.g&&c.g.has(d)&&c.g.delete(d)}Eg.prototype.cancel=function(){if(this.i=bg(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const c of this.g.values())c.cancel();this.g.clear()}};function bg(c){if(c.h!=null)return c.i.concat(c.h.D);if(c.g!=null&&c.g.size!==0){let d=c.i;for(const g of c.g.values())d=d.concat(g.D);return d}return y(c.i)}function gA(c){if(c.V&&typeof c.V=="function")return c.V();if(typeof Map<"u"&&c instanceof Map||typeof Set<"u"&&c instanceof Set)return Array.from(c.values());if(typeof c=="string")return c.split("");if(l(c)){for(var d=[],g=c.length,E=0;E<g;E++)d.push(c[E]);return d}d=[],g=0;for(E in c)d[g++]=c[E];return d}function mA(c){if(c.na&&typeof c.na=="function")return c.na();if(!c.V||typeof c.V!="function"){if(typeof Map<"u"&&c instanceof Map)return Array.from(c.keys());if(!(typeof Set<"u"&&c instanceof Set)){if(l(c)||typeof c=="string"){var d=[];c=c.length;for(var g=0;g<c;g++)d.push(g);return d}d=[],g=0;for(const E in c)d[g++]=E;return d}}}function Rg(c,d){if(c.forEach&&typeof c.forEach=="function")c.forEach(d,void 0);else if(l(c)||typeof c=="string")Array.prototype.forEach.call(c,d,void 0);else for(var g=mA(c),E=gA(c),L=E.length,F=0;F<L;F++)d.call(void 0,E[F],g&&g[F],c)}var Ag=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function _A(c,d){if(c){c=c.split("&");for(var g=0;g<c.length;g++){var E=c[g].indexOf("="),L=null;if(0<=E){var F=c[g].substring(0,E);L=c[g].substring(E+1)}else F=c[g];d(F,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}function or(c){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,c instanceof or){this.h=c.h,Ka(this,c.j),this.o=c.o,this.g=c.g,za(this,c.s),this.l=c.l;var d=c.i,g=new ao;g.i=d.i,d.g&&(g.g=new Map(d.g),g.h=d.h),Cg(this,g),this.m=c.m}else c&&(d=String(c).match(Ag))?(this.h=!1,Ka(this,d[1]||"",!0),this.o=io(d[2]||""),this.g=io(d[3]||"",!0),za(this,d[4]),this.l=io(d[5]||"",!0),Cg(this,d[6]||"",!0),this.m=io(d[7]||"")):(this.h=!1,this.i=new ao(null,this.h))}or.prototype.toString=function(){var c=[],d=this.j;d&&c.push(oo(d,Sg,!0),":");var g=this.g;return(g||d=="file")&&(c.push("//"),(d=this.o)&&c.push(oo(d,Sg,!0),"@"),c.push(encodeURIComponent(String(g)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.s,g!=null&&c.push(":",String(g))),(g=this.l)&&(this.g&&g.charAt(0)!="/"&&c.push("/"),c.push(oo(g,g.charAt(0)=="/"?EA:vA,!0))),(g=this.i.toString())&&c.push("?",g),(g=this.m)&&c.push("#",oo(g,wA)),c.join("")};function Yn(c){return new or(c)}function Ka(c,d,g){c.j=g?io(d,!0):d,c.j&&(c.j=c.j.replace(/:$/,""))}function za(c,d){if(d){if(d=Number(d),isNaN(d)||0>d)throw Error("Bad port number "+d);c.s=d}else c.s=null}function Cg(c,d,g){d instanceof ao?(c.i=d,IA(c.i,c.h)):(g||(d=oo(d,TA)),c.i=new ao(d,c.h))}function Be(c,d,g){c.i.set(d,g)}function Ga(c){return Be(c,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),c}function io(c,d){return c?d?decodeURI(c.replace(/%25/g,"%2525")):decodeURIComponent(c):""}function oo(c,d,g){return typeof c=="string"?(c=encodeURI(c).replace(d,yA),g&&(c=c.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c):null}function yA(c){return c=c.charCodeAt(0),"%"+(c>>4&15).toString(16)+(c&15).toString(16)}var Sg=/[#\/\?@]/g,vA=/[#\?:]/g,EA=/[#\?]/g,TA=/[#\?@]/g,wA=/#/g;function ao(c,d){this.h=this.g=null,this.i=c||null,this.j=!!d}function Is(c){c.g||(c.g=new Map,c.h=0,c.i&&_A(c.i,function(d,g){c.add(decodeURIComponent(d.replace(/\+/g," ")),g)}))}t=ao.prototype,t.add=function(c,d){Is(this),this.i=null,c=Wr(this,c);var g=this.g.get(c);return g||this.g.set(c,g=[]),g.push(d),this.h+=1,this};function Pg(c,d){Is(c),d=Wr(c,d),c.g.has(d)&&(c.i=null,c.h-=c.g.get(d).length,c.g.delete(d))}function kg(c,d){return Is(c),d=Wr(c,d),c.g.has(d)}t.forEach=function(c,d){Is(this),this.g.forEach(function(g,E){g.forEach(function(L){c.call(d,L,E,this)},this)},this)},t.na=function(){Is(this);const c=Array.from(this.g.values()),d=Array.from(this.g.keys()),g=[];for(let E=0;E<d.length;E++){const L=c[E];for(let F=0;F<L.length;F++)g.push(d[E])}return g},t.V=function(c){Is(this);let d=[];if(typeof c=="string")kg(this,c)&&(d=d.concat(this.g.get(Wr(this,c))));else{c=Array.from(this.g.values());for(let g=0;g<c.length;g++)d=d.concat(c[g])}return d},t.set=function(c,d){return Is(this),this.i=null,c=Wr(this,c),kg(this,c)&&(this.h-=this.g.get(c).length),this.g.set(c,[d]),this.h+=1,this},t.get=function(c,d){return c?(c=this.V(c),0<c.length?String(c[0]):d):d};function Ng(c,d,g){Pg(c,d),0<g.length&&(c.i=null,c.g.set(Wr(c,d),y(g)),c.h+=g.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const c=[],d=Array.from(this.g.keys());for(var g=0;g<d.length;g++){var E=d[g];const F=encodeURIComponent(String(E)),G=this.V(E);for(E=0;E<G.length;E++){var L=F;G[E]!==""&&(L+="="+encodeURIComponent(String(G[E]))),c.push(L)}}return this.i=c.join("&")};function Wr(c,d){return d=String(d),c.j&&(d=d.toLowerCase()),d}function IA(c,d){d&&!c.j&&(Is(c),c.i=null,c.g.forEach(function(g,E){var L=E.toLowerCase();E!=L&&(Pg(this,E),Ng(this,L,g))},c)),c.j=d}function bA(c,d){const g=new so;if(a.Image){const E=new Image;E.onload=m(bs,g,"TestLoadImage: loaded",!0,d,E),E.onerror=m(bs,g,"TestLoadImage: error",!1,d,E),E.onabort=m(bs,g,"TestLoadImage: abort",!1,d,E),E.ontimeout=m(bs,g,"TestLoadImage: timeout",!1,d,E),a.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=c}else d(!1)}function RA(c,d){const g=new so,E=new AbortController,L=setTimeout(()=>{E.abort(),bs(g,"TestPingServer: timeout",!1,d)},1e4);fetch(c,{signal:E.signal}).then(F=>{clearTimeout(L),F.ok?bs(g,"TestPingServer: ok",!0,d):bs(g,"TestPingServer: server error",!1,d)}).catch(()=>{clearTimeout(L),bs(g,"TestPingServer: error",!1,d)})}function bs(c,d,g,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(g)}catch{}}function AA(){this.g=new an}function CA(c,d,g){const E=g||"";try{Rg(c,function(L,F){let G=L;u(L)&&(G=jr(L)),d.push(E+F+"="+encodeURIComponent(G))})}catch(L){throw d.push(E+"type="+encodeURIComponent("_badmap")),L}}function Qa(c){this.l=c.Ub||null,this.j=c.eb||!1}_(Qa,Hr),Qa.prototype.g=function(){return new Ya(this.l,this.j)},Qa.prototype.i=function(c){return function(){return c}}({});function Ya(c,d){re.call(this),this.D=c,this.o=d,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}_(Ya,re),t=Ya.prototype,t.open=function(c,d){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=c,this.A=d,this.readyState=1,co(this)},t.send=function(c){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const d={headers:this.u,method:this.B,credentials:this.m,cache:void 0};c&&(d.body=c),(this.D||a).fetch(new Request(this.A,d)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lo(this)),this.readyState=0},t.Sa=function(c){if(this.g&&(this.l=c,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=c.headers,this.readyState=2,co(this)),this.g&&(this.readyState=3,co(this),this.g)))if(this.responseType==="arraybuffer")c.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in c){if(this.j=c.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Og(this)}else c.text().then(this.Ra.bind(this),this.ga.bind(this))};function Og(c){c.j.read().then(c.Pa.bind(c)).catch(c.ga.bind(c))}t.Pa=function(c){if(this.g){if(this.o&&c.value)this.response.push(c.value);else if(!this.o){var d=c.value?c.value:new Uint8Array(0);(d=this.v.decode(d,{stream:!c.done}))&&(this.response=this.responseText+=d)}c.done?lo(this):co(this),this.readyState==3&&Og(this)}},t.Ra=function(c){this.g&&(this.response=this.responseText=c,lo(this))},t.Qa=function(c){this.g&&(this.response=c,lo(this))},t.ga=function(){this.g&&lo(this)};function lo(c){c.readyState=4,c.l=null,c.j=null,c.v=null,co(c)}t.setRequestHeader=function(c,d){this.u.append(c,d)},t.getResponseHeader=function(c){return this.h&&this.h.get(c.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const c=[],d=this.h.entries();for(var g=d.next();!g.done;)g=g.value,c.push(g[0]+": "+g[1]),g=d.next();return c.join(`\r
`)};function co(c){c.onreadystatechange&&c.onreadystatechange.call(c)}Object.defineProperty(Ya.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(c){this.m=c?"include":"same-origin"}});function Dg(c){let d="";return M(c,function(g,E){d+=E,d+=":",d+=g,d+=`\r
`}),d}function ju(c,d,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=Dg(g),typeof c=="string"?g!=null&&encodeURIComponent(String(g)):Be(c,d,g))}function Ye(c){re.call(this),this.headers=new Map,this.o=c||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}_(Ye,re);var SA=/^https?$/i,PA=["POST","PUT"];t=Ye.prototype,t.Ha=function(c){this.J=c},t.ea=function(c,d,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+c);d=d?d.toUpperCase():"GET",this.D=c,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():xu.g(),this.v=this.o?lg(this.o):lg(xu),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(d,String(c),!0),this.B=!1}catch(F){xg(this,F);return}if(c=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)g.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const F of E.keys())g.set(F,E.get(F));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(F=>F.toLowerCase()=="content-type"),L=a.FormData&&c instanceof a.FormData,!(0<=Array.prototype.indexOf.call(PA,d,void 0))||E||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[F,G]of g)this.g.setRequestHeader(F,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Vg(this),this.u=!0,this.g.send(c),this.u=!1}catch(F){xg(this,F)}};function xg(c,d){c.h=!1,c.g&&(c.j=!0,c.g.abort(),c.j=!1),c.l=d,c.m=5,Mg(c),Xa(c)}function Mg(c){c.A||(c.A=!0,ce(c,"complete"),ce(c,"error"))}t.abort=function(c){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=c||7,ce(this,"complete"),ce(this,"abort"),Xa(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Xa(this,!0)),Ye.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Lg(this):this.bb())},t.bb=function(){Lg(this)};function Lg(c){if(c.h&&typeof o<"u"&&(!c.v[1]||Xn(c)!=4||c.Z()!=2)){if(c.u&&Xn(c)==4)Ce(c.Ea,0,c);else if(ce(c,"readystatechange"),Xn(c)==4){c.h=!1;try{const G=c.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var d=!0;break e;default:d=!1}var g;if(!(g=d)){var E;if(E=G===0){var L=String(c.D).match(Ag)[1]||null;!L&&a.self&&a.self.location&&(L=a.self.location.protocol.slice(0,-1)),E=!SA.test(L?L.toLowerCase():"")}g=E}if(g)ce(c,"complete"),ce(c,"success");else{c.m=6;try{var F=2<Xn(c)?c.g.statusText:""}catch{F=""}c.l=F+" ["+c.Z()+"]",Mg(c)}}finally{Xa(c)}}}}function Xa(c,d){if(c.g){Vg(c);const g=c.g,E=c.v[0]?()=>{}:null;c.g=null,c.v=null,d||ce(c,"ready");try{g.onreadystatechange=E}catch{}}}function Vg(c){c.I&&(a.clearTimeout(c.I),c.I=null)}t.isActive=function(){return!!this.g};function Xn(c){return c.g?c.g.readyState:0}t.Z=function(){try{return 2<Xn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(c){if(this.g){var d=this.g.responseText;return c&&d.indexOf(c)==0&&(d=d.substring(c.length)),xt(d)}};function Fg(c){try{if(!c.g)return null;if("response"in c.g)return c.g.response;switch(c.H){case"":case"text":return c.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in c.g)return c.g.mozResponseArrayBuffer}return null}catch{return null}}function kA(c){const d={};c=(c.g&&2<=Xn(c)&&c.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<c.length;E++){if(D(c[E]))continue;var g=N(c[E]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const F=d[L]||[];d[L]=F,F.push(g)}I(d,function(E){return E.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function uo(c,d,g){return g&&g.internalChannelParams&&g.internalChannelParams[c]||d}function Ug(c){this.Aa=0,this.i=[],this.j=new so,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=uo("failFast",!1,c),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=uo("baseRetryDelayMs",5e3,c),this.cb=uo("retryDelaySeedMs",1e4,c),this.Wa=uo("forwardChannelMaxRetries",2,c),this.wa=uo("forwardChannelRequestTimeoutMs",2e4,c),this.pa=c&&c.xmlHttpFactory||void 0,this.Xa=c&&c.Tb||void 0,this.Ca=c&&c.useFetchStreams||!1,this.L=void 0,this.J=c&&c.supportsCrossDomainXhr||!1,this.K="",this.h=new Eg(c&&c.concurrentRequestLimit),this.Da=new AA,this.P=c&&c.fastHandshake||!1,this.O=c&&c.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=c&&c.Rb||!1,c&&c.xa&&this.j.xa(),c&&c.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&c&&c.detectBufferingProxy||!1,this.ja=void 0,c&&c.longPollingTimeout&&0<c.longPollingTimeout&&(this.ja=c.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Ug.prototype,t.la=8,t.G=1,t.connect=function(c,d,g,E){Mt(0),this.W=c,this.H=d||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.I=Gg(this,null,this.W),Za(this)};function Hu(c){if(Bg(c),c.G==3){var d=c.U++,g=Yn(c.I);if(Be(g,"SID",c.K),Be(g,"RID",d),Be(g,"TYPE","terminate"),ho(c,g),d=new ws(c,c.j,d),d.L=2,d.v=Ga(Yn(g)),g=!1,a.navigator&&a.navigator.sendBeacon)try{g=a.navigator.sendBeacon(d.v.toString(),"")}catch{}!g&&a.Image&&(new Image().src=d.v,g=!0),g||(d.g=Qg(d.j,null),d.g.ea(d.v)),d.F=Date.now(),qa(d)}zg(c)}function Ja(c){c.g&&(Wu(c),c.g.cancel(),c.g=null)}function Bg(c){Ja(c),c.u&&(a.clearTimeout(c.u),c.u=null),el(c),c.h.cancel(),c.s&&(typeof c.s=="number"&&a.clearTimeout(c.s),c.s=null)}function Za(c){if(!Tg(c.h)&&!c.s){c.s=!0;var d=c.Ga;ue||dn(),te||(ue(),te=!0),qe.add(d,c),c.B=0}}function NA(c,d){return wg(c.h)>=c.h.j-(c.s?1:0)?!1:c.s?(c.i=d.D.concat(c.i),!0):c.G==1||c.G==2||c.B>=(c.Va?0:c.Wa)?!1:(c.s=no(p(c.Ga,c,d),Kg(c,c.B)),c.B++,!0)}t.Ga=function(c){if(this.s)if(this.s=null,this.G==1){if(!c){this.U=Math.floor(1e5*Math.random()),c=this.U++;const L=new ws(this,this.j,c);let F=this.o;if(this.S&&(F?(F=T(F),R(F,this.S)):F=this.S),this.m!==null||this.O||(L.H=F,F=null),this.P)e:{for(var d=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(d+=E,4096<d){d=g;break e}if(d===4096||g===this.i.length-1){d=g+1;break e}}d=1e3}else d=1e3;d=Hg(this,L,d),g=Yn(this.I),Be(g,"RID",c),Be(g,"CVER",22),this.D&&Be(g,"X-HTTP-Session-Id",this.D),ho(this,g),F&&(this.O?d="headers="+encodeURIComponent(String(Dg(F)))+"&"+d:this.m&&ju(g,this.m,F)),Bu(this.h,L),this.Ua&&Be(g,"TYPE","init"),this.P?(Be(g,"$req",d),Be(g,"SID","null"),L.T=!0,Lu(L,g,null)):Lu(L,g,d),this.G=2}}else this.G==3&&(c?jg(this,c):this.i.length==0||Tg(this.h)||jg(this))};function jg(c,d){var g;d?g=d.l:g=c.U++;const E=Yn(c.I);Be(E,"SID",c.K),Be(E,"RID",g),Be(E,"AID",c.T),ho(c,E),c.m&&c.o&&ju(E,c.m,c.o),g=new ws(c,c.j,g,c.B+1),c.m===null&&(g.H=c.o),d&&(c.i=d.D.concat(c.i)),d=Hg(c,g,1e3),g.I=Math.round(.5*c.wa)+Math.round(.5*c.wa*Math.random()),Bu(c.h,g),Lu(g,E,d)}function ho(c,d){c.H&&M(c.H,function(g,E){Be(d,E,g)}),c.l&&Rg({},function(g,E){Be(d,E,g)})}function Hg(c,d,g){g=Math.min(c.i.length,g);var E=c.l?p(c.l.Na,c.l,c):null;e:{var L=c.i;let F=-1;for(;;){const G=["count="+g];F==-1?0<g?(F=L[0].g,G.push("ofs="+F)):F=0:G.push("ofs="+F);let Ve=!0;for(let gt=0;gt<g;gt++){let Se=L[gt].g;const It=L[gt].map;if(Se-=F,0>Se)F=Math.max(0,L[gt].g-100),Ve=!1;else try{CA(It,G,"req"+Se+"_")}catch{E&&E(It)}}if(Ve){E=G.join("&");break e}}}return c=c.i.splice(0,g),d.D=c,E}function $g(c){if(!c.g&&!c.u){c.Y=1;var d=c.Fa;ue||dn(),te||(ue(),te=!0),qe.add(d,c),c.v=0}}function $u(c){return c.g||c.u||3<=c.v?!1:(c.Y++,c.u=no(p(c.Fa,c),Kg(c,c.v)),c.v++,!0)}t.Fa=function(){if(this.u=null,Wg(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var c=2*this.R;this.j.info("BP detection timer enabled: "+c),this.A=no(p(this.ab,this),c)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Mt(10),Ja(this),Wg(this))};function Wu(c){c.A!=null&&(a.clearTimeout(c.A),c.A=null)}function Wg(c){c.g=new ws(c,c.j,"rpc",c.Y),c.m===null&&(c.g.H=c.o),c.g.O=0;var d=Yn(c.qa);Be(d,"RID","rpc"),Be(d,"SID",c.K),Be(d,"AID",c.T),Be(d,"CI",c.F?"0":"1"),!c.F&&c.ja&&Be(d,"TO",c.ja),Be(d,"TYPE","xmlhttp"),ho(c,d),c.m&&c.o&&ju(d,c.m,c.o),c.L&&(c.g.I=c.L);var g=c.g;c=c.ia,g.L=1,g.v=Ga(Yn(d)),g.m=null,g.P=!0,_g(g,c)}t.Za=function(){this.C!=null&&(this.C=null,Ja(this),$u(this),Mt(19))};function el(c){c.C!=null&&(a.clearTimeout(c.C),c.C=null)}function qg(c,d){var g=null;if(c.g==d){el(c),Wu(c),c.g=null;var E=2}else if(Uu(c.h,d))g=d.D,Ig(c.h,d),E=1;else return;if(c.G!=0){if(d.o)if(E==1){g=d.m?d.m.length:0,d=Date.now()-d.F;var L=c.B;E=Ha(),ce(E,new dg(E,g)),Za(c)}else $g(c);else if(L=d.s,L==3||L==0&&0<d.X||!(E==1&&NA(c,d)||E==2&&$u(c)))switch(g&&0<g.length&&(d=c.h,d.i=d.i.concat(g)),L){case 1:ar(c,5);break;case 4:ar(c,10);break;case 3:ar(c,6);break;default:ar(c,2)}}}function Kg(c,d){let g=c.Ta+Math.floor(Math.random()*c.cb);return c.isActive()||(g*=2),g*d}function ar(c,d){if(c.j.info("Error code "+d),d==2){var g=p(c.fb,c),E=c.Xa;const L=!E;E=new or(E||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||Ka(E,"https"),Ga(E),L?bA(E.toString(),g):RA(E.toString(),g)}else Mt(2);c.G=0,c.l&&c.l.sa(d),zg(c),Bg(c)}t.fb=function(c){c?(this.j.info("Successfully pinged google.com"),Mt(2)):(this.j.info("Failed to ping google.com"),Mt(1))};function zg(c){if(c.G=0,c.ka=[],c.l){const d=bg(c.h);(d.length!=0||c.i.length!=0)&&(b(c.ka,d),b(c.ka,c.i),c.h.i.length=0,y(c.i),c.i.length=0),c.l.ra()}}function Gg(c,d,g){var E=g instanceof or?Yn(g):new or(g);if(E.g!="")d&&(E.g=d+"."+E.g),za(E,E.s);else{var L=a.location;E=L.protocol,d=d?d+"."+L.hostname:L.hostname,L=+L.port;var F=new or(null);E&&Ka(F,E),d&&(F.g=d),L&&za(F,L),g&&(F.l=g),E=F}return g=c.D,d=c.ya,g&&d&&Be(E,g,d),Be(E,"VER",c.la),ho(c,E),E}function Qg(c,d,g){if(d&&!c.J)throw Error("Can't create secondary domain capable XhrIo object.");return d=c.Ca&&!c.pa?new Ye(new Qa({eb:g})):new Ye(c.pa),d.Ha(c.J),d}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Yg(){}t=Yg.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function tl(){}tl.prototype.g=function(c,d){return new Qt(c,d)};function Qt(c,d){re.call(this),this.g=new Ug(d),this.l=c,this.h=d&&d.messageUrlParams||null,c=d&&d.messageHeaders||null,d&&d.clientProtocolHeaderRequired&&(c?c["X-Client-Protocol"]="webchannel":c={"X-Client-Protocol":"webchannel"}),this.g.o=c,c=d&&d.initMessageHeaders||null,d&&d.messageContentType&&(c?c["X-WebChannel-Content-Type"]=d.messageContentType:c={"X-WebChannel-Content-Type":d.messageContentType}),d&&d.va&&(c?c["X-WebChannel-Client-Profile"]=d.va:c={"X-WebChannel-Client-Profile":d.va}),this.g.S=c,(c=d&&d.Sb)&&!D(c)&&(this.g.m=c),this.v=d&&d.supportsCrossDomainXhr||!1,this.u=d&&d.sendRawJson||!1,(d=d&&d.httpSessionIdParam)&&!D(d)&&(this.g.D=d,c=this.h,c!==null&&d in c&&(c=this.h,d in c&&delete c[d])),this.j=new qr(this)}_(Qt,re),Qt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Qt.prototype.close=function(){Hu(this.g)},Qt.prototype.o=function(c){var d=this.g;if(typeof c=="string"){var g={};g.__data__=c,c=g}else this.u&&(g={},g.__data__=jr(c),c=g);d.i.push(new pA(d.Ya++,c)),d.G==3&&Za(d)},Qt.prototype.N=function(){this.g.l=null,delete this.j,Hu(this.g),delete this.g,Qt.aa.N.call(this)};function Xg(c){Ou.call(this),c.__headers__&&(this.headers=c.__headers__,this.statusCode=c.__status__,delete c.__headers__,delete c.__status__);var d=c.__sm__;if(d){e:{for(const g in d){c=g;break e}c=void 0}(this.i=c)&&(c=this.i,d=d!==null&&c in d?d[c]:void 0),this.data=d}else this.data=c}_(Xg,Ou);function Jg(){Du.call(this),this.status=1}_(Jg,Du);function qr(c){this.g=c}_(qr,Yg),qr.prototype.ua=function(){ce(this.g,"a")},qr.prototype.ta=function(c){ce(this.g,new Xg(c))},qr.prototype.sa=function(c){ce(this.g,new Jg)},qr.prototype.ra=function(){ce(this.g,"b")},tl.prototype.createWebChannel=tl.prototype.g,Qt.prototype.send=Qt.prototype.o,Qt.prototype.open=Qt.prototype.m,Qt.prototype.close=Qt.prototype.close,aw=function(){return new tl},ow=function(){return Ha()},iw=rr,gf={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},$a.NO_ERROR=0,$a.TIMEOUT=8,$a.HTTP_ERROR=6,Pl=$a,pg.COMPLETE="complete",rw=pg,cg.EventType=eo,eo.OPEN="a",eo.CLOSE="b",eo.ERROR="c",eo.MESSAGE="d",re.prototype.listen=re.prototype.K,Ro=cg,Ye.prototype.listenOnce=Ye.prototype.L,Ye.prototype.getLastError=Ye.prototype.Ka,Ye.prototype.getLastErrorCode=Ye.prototype.Ba,Ye.prototype.getStatus=Ye.prototype.Z,Ye.prototype.getResponseJson=Ye.prototype.Oa,Ye.prototype.getResponseText=Ye.prototype.oa,Ye.prototype.send=Ye.prototype.ea,Ye.prototype.setWithCredentials=Ye.prototype.Ha,sw=Ye}).apply(typeof fl<"u"?fl:typeof self<"u"?self:typeof window<"u"?window:{});const t_="@firebase/firestore",n_="4.7.10";/**
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
 */class At{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}At.UNAUTHENTICATED=new At(null),At.GOOGLE_CREDENTIALS=new At("google-credentials-uid"),At.FIRST_PARTY=new At("first-party-uid"),At.MOCK_USER=new At("mock-user");/**
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
 */let qi="11.5.0";/**
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
 */const Rr=new Aa("@firebase/firestore");function Jr(){return Rr.logLevel}function ee(t,...e){if(Rr.logLevel<=ve.DEBUG){const n=e.map(Md);Rr.debug(`Firestore (${qi}): ${t}`,...n)}}function ps(t,...e){if(Rr.logLevel<=ve.ERROR){const n=e.map(Md);Rr.error(`Firestore (${qi}): ${t}`,...n)}}function Ai(t,...e){if(Rr.logLevel<=ve.WARN){const n=e.map(Md);Rr.warn(`Firestore (${qi}): ${t}`,...n)}}function Md(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function fe(t="Unexpected state"){const e=`FIRESTORE (${qi}) INTERNAL ASSERTION FAILED: `+t;throw ps(e),new Error(e)}function xe(t,e){t||fe()}function _e(t,e){return t}/**
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
 */const $={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class oe extends Gn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class cs{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class lw{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class bN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(At.UNAUTHENTICATED))}shutdown(){}}class RN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class AN{constructor(e){this.t=e,this.currentUser=At.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){xe(this.o===void 0);let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new cs;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new cs,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{ee("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(ee("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new cs)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(ee("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(xe(typeof s.accessToken=="string"),new lw(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return xe(e===null||typeof e=="string"),new At(e)}}class CN{constructor(e,n,s){this.l=e,this.h=n,this.P=s,this.type="FirstParty",this.user=At.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class SN{constructor(e,n,s){this.l=e,this.h=n,this.P=s}getToken(){return Promise.resolve(new CN(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(At.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class s_{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PN{constructor(e,n){this.A=n,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Jt(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,n){xe(this.o===void 0);const s=i=>{i.error!=null&&ee("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,ee("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{ee("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?r(i):ee("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new s_(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(xe(typeof n.token=="string"),this.R=n.token,new s_(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function kN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */function cw(){return new TextEncoder}/**
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
 */class uw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=kN(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=e.charAt(r[i]%62))}return s}}function ye(t,e){return t<e?-1:t>e?1:0}function mf(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=t.codePointAt(n),r=e.codePointAt(n);if(s!==r){if(s<128&&r<128)return ye(s,r);{const i=cw(),o=NN(i.encode(r_(t,n)),i.encode(r_(e,n)));return o!==0?o:ye(s,r)}}n+=s>65535?2:1}return ye(t.length,e.length)}function r_(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function NN(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ye(t[n],e[n]);return ye(t.length,e.length)}function Ci(t,e,n){return t.length===e.length&&t.every((s,r)=>n(s,e[r]))}/**
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
 */const i_=-62135596800,o_=1e6;class Ze{static now(){return Ze.fromMillis(Date.now())}static fromDate(e){return Ze.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor((e-1e3*n)*o_);return new Ze(n,s)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new oe($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new oe($.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<i_)throw new oe($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new oe($.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/o_}_compareTo(e){return this.seconds===e.seconds?ye(this.nanoseconds,e.nanoseconds):ye(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-i_;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new Ze(0,0))}static max(){return new pe(new Ze(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const a_="__name__";class Mn{constructor(e,n,s){n===void 0?n=0:n>e.length&&fe(),s===void 0?s=e.length-n:s>e.length-n&&fe(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Mn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Mn?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let r=0;r<s;r++){const i=Mn.compareSegments(e.get(r),n.get(r));if(i!==0)return i}return ye(e.length,n.length)}static compareSegments(e,n){const s=Mn.isNumericId(e),r=Mn.isNumericId(n);return s&&!r?-1:!s&&r?1:s&&r?Mn.extractNumericId(e).compare(Mn.extractNumericId(n)):mf(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Hs.fromString(e.substring(4,e.length-2))}}class Xe extends Mn{construct(e,n,s){return new Xe(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new oe($.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new Xe(n)}static emptyPath(){return new Xe([])}}const ON=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends Mn{construct(e,n,s){return new yt(e,n,s)}static isValidIdentifier(e){return ON.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===a_}static keyField(){return new yt([a_])}static fromServerFormat(e){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new oe($.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new oe($.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new oe($.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new oe($.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
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
 */class le{constructor(e){this.path=e}static fromPath(e){return new le(Xe.fromString(e))}static fromName(e){return new le(Xe.fromString(e).popFirst(5))}static empty(){return new le(Xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Xe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new le(new Xe(e.slice()))}}/**
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
 */const ra=-1;function DN(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,r=pe.fromTimestamp(s===1e9?new Ze(n+1,0):new Ze(n,s));return new Ks(r,le.empty(),e)}function xN(t){return new Ks(t.readTime,t.key,ra)}class Ks{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Ks(pe.min(),le.empty(),ra)}static max(){return new Ks(pe.max(),le.empty(),ra)}}function MN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=le.comparator(t.documentKey,e.documentKey),n!==0?n:ye(t.largestBatchId,e.largestBatchId))}/**
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
 */const LN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class VN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ki(t){if(t.code!==$.FAILED_PRECONDITION||t.message!==LN)throw t;ee("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class j{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&fe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new j((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof j?n:j.resolve(n)}catch(n){return j.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):j.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):j.reject(n)}static resolve(e){return new j((n,s)=>{n(e)})}static reject(e){return new j((n,s)=>{s(e)})}static waitFor(e){return new j((n,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(e){let n=j.resolve(!1);for(const s of e)n=n.next(r=>r?j.resolve(r):s());return n}static forEach(e,n){const s=[];return e.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(e,n){return new j((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===i&&s(o)},h=>r(h))}})}static doWhile(e,n){return new j((s,r)=>{const i=()=>{e()===!0?n().next(()=>{i()},r):s()};i()})}}function FN(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function zi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class nu{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.oe(s),this._e=s=>n.writeSequenceNumber(s))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}nu.ae=-1;/**
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
 */const Ld=-1;function su(t){return t==null}function cc(t){return t===0&&1/t==-1/0}function UN(t){return typeof t=="number"&&Number.isInteger(t)&&!cc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const hw="";function BN(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=l_(e)),e=jN(t.get(n),e);return l_(e)}function jN(t,e){let n=e;const s=t.length;for(let r=0;r<s;r++){const i=t.charAt(r);switch(i){case"\0":n+="";break;case hw:n+="";break;default:n+=i}}return n}function l_(t){return t+hw+""}/**
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
 */function c_(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function sr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fw(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */let rt=class _f{constructor(e,n){this.comparator=e,this.root=n||$s.EMPTY}insert(e,n){return new _f(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,$s.BLACK,null,null))}remove(e){return new _f(this.comparator,this.root.remove(e,this.comparator).copy(null,null,$s.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new dl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new dl(this.root,e,this.comparator,!1)}getReverseIterator(){return new dl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new dl(this.root,e,this.comparator,!0)}},dl=class{constructor(e,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?s(e.key,n):1,n&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},$s=class ts{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ts.RED,this.left=r??ts.EMPTY,this.right=i??ts.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,r,i){return new ts(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ts.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return ts.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ts.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ts.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}};$s.EMPTY=null,$s.RED=!0,$s.BLACK=!1;$s.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(e,n,s,r,i){return this}insert(e,n,s){return new $s(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class at{constructor(e){this.comparator=e,this.data=new rt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new u_(this.data.getIterator())}getIteratorFrom(e){return new u_(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof at)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new at(this.comparator);return n.data=e,n}}class u_{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class vn{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new vn([])}unionWith(e){let n=new at(yt.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new vn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ci(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class dw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new dw("Invalid base64 string: "+i):i}}(e);return new Et(n)}static fromUint8Array(e){const n=function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i}(e);return new Et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const s=new Uint8Array(n.length);for(let r=0;r<n.length;r++)s[r]=n.charCodeAt(r);return s}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ye(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Et.EMPTY_BYTE_STRING=new Et("");const HN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function zs(t){if(xe(!!t),typeof t=="string"){let e=0;const n=HN.exec(t);if(xe(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:Je(t.seconds),nanos:Je(t.nanos)}}function Je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Gs(t){return typeof t=="string"?Et.fromBase64String(t):Et.fromUint8Array(t)}/**
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
 */const pw="server_timestamp",gw="__type__",mw="__previous_value__",_w="__local_write_time__";function Vd(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[gw])===null||n===void 0?void 0:n.stringValue)===pw}function ru(t){const e=t.mapValue.fields[mw];return Vd(e)?ru(e):e}function ia(t){const e=zs(t.mapValue.fields[_w].timestampValue);return new Ze(e.seconds,e.nanos)}/**
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
 */class $N{constructor(e,n,s,r,i,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}const uc="(default)";class oa{constructor(e,n){this.projectId=e,this.database=n||uc}static empty(){return new oa("","")}get isDefaultDatabase(){return this.database===uc}isEqual(e){return e instanceof oa&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const yw="__type__",WN="__max__",pl={mapValue:{}},vw="__vector__",hc="value";function Qs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Vd(t)?4:KN(t)?9007199254740991:qN(t)?10:11:fe()}function Wn(t,e){if(t===e)return!0;const n=Qs(t);if(n!==Qs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ia(t).isEqual(ia(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const o=zs(r.timestampValue),a=zs(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Gs(r.bytesValue).isEqual(Gs(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Je(r.geoPointValue.latitude)===Je(i.geoPointValue.latitude)&&Je(r.geoPointValue.longitude)===Je(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Je(r.integerValue)===Je(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const o=Je(r.doubleValue),a=Je(i.doubleValue);return o===a?cc(o)===cc(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Ci(t.arrayValue.values||[],e.arrayValue.values||[],Wn);case 10:case 11:return function(r,i){const o=r.mapValue.fields||{},a=i.mapValue.fields||{};if(c_(o)!==c_(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Wn(o[l],a[l])))return!1;return!0}(t,e);default:return fe()}}function aa(t,e){return(t.values||[]).find(n=>Wn(n,e))!==void 0}function Si(t,e){if(t===e)return 0;const n=Qs(t),s=Qs(e);if(n!==s)return ye(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return ye(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Je(i.integerValue||i.doubleValue),l=Je(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return h_(t.timestampValue,e.timestampValue);case 4:return h_(ia(t),ia(e));case 5:return mf(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Gs(i),l=Gs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const h=ye(a[u],l[u]);if(h!==0)return h}return ye(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ye(Je(i.latitude),Je(o.latitude));return a!==0?a:ye(Je(i.longitude),Je(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return f_(t.arrayValue,e.arrayValue);case 10:return function(i,o){var a,l,u,h;const f=i.fields||{},p=o.fields||{},m=(a=f[hc])===null||a===void 0?void 0:a.arrayValue,_=(l=p[hc])===null||l===void 0?void 0:l.arrayValue,y=ye(((u=m==null?void 0:m.values)===null||u===void 0?void 0:u.length)||0,((h=_==null?void 0:_.values)===null||h===void 0?void 0:h.length)||0);return y!==0?y:f_(m,_)}(t.mapValue,e.mapValue);case 11:return function(i,o){if(i===pl.mapValue&&o===pl.mapValue)return 0;if(i===pl.mapValue)return 1;if(o===pl.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),u=o.fields||{},h=Object.keys(u);l.sort(),h.sort();for(let f=0;f<l.length&&f<h.length;++f){const p=mf(l[f],h[f]);if(p!==0)return p;const m=Si(a[l[f]],u[h[f]]);if(m!==0)return m}return ye(l.length,h.length)}(t.mapValue,e.mapValue);default:throw fe()}}function h_(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ye(t,e);const n=zs(t),s=zs(e),r=ye(n.seconds,s.seconds);return r!==0?r:ye(n.nanos,s.nanos)}function f_(t,e){const n=t.values||[],s=e.values||[];for(let r=0;r<n.length&&r<s.length;++r){const i=Si(n[r],s[r]);if(i)return i}return ye(n.length,s.length)}function Pi(t){return yf(t)}function yf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const s=zs(n);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Gs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return le.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let s="[",r=!0;for(const i of n.values||[])r?r=!1:s+=",",s+=yf(i);return s+"]"}(t.arrayValue):"mapValue"in t?function(n){const s=Object.keys(n.fields||{}).sort();let r="{",i=!0;for(const o of s)i?i=!1:r+=",",r+=`${o}:${yf(n.fields[o])}`;return r+"}"}(t.mapValue):fe()}function kl(t){switch(Qs(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ru(t);return e?16+kl(e):16;case 5:return 2*t.stringValue.length;case 6:return Gs(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(s){return(s.values||[]).reduce((r,i)=>r+kl(i),0)}(t.arrayValue);case 10:case 11:return function(s){let r=0;return sr(s.fields,(i,o)=>{r+=i.length+kl(o)}),r}(t.mapValue);default:throw fe()}}function vf(t){return!!t&&"integerValue"in t}function Fd(t){return!!t&&"arrayValue"in t}function d_(t){return!!t&&"nullValue"in t}function p_(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Nl(t){return!!t&&"mapValue"in t}function qN(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[yw])===null||n===void 0?void 0:n.stringValue)===vw}function Lo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return sr(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=Lo(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Lo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function KN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===WN}/**
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
 */class Zt{constructor(e){this.value=e}static empty(){return new Zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Nl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Lo(n)}setAll(e){let n=yt.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Lo(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(e){const n=this.field(e.popLast());Nl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=n.mapValue.fields[e.get(s)];Nl(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,s){sr(n,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new Zt(Lo(this.value))}}function Ew(t){const e=[];return sr(t.fields,(n,s)=>{const r=new yt([n]);if(Nl(s)){const i=Ew(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new vn(e)}/**
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
 */class St{constructor(e,n,s,r,i,o,a){this.key=e,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new St(e,0,pe.min(),pe.min(),pe.min(),Zt.empty(),0)}static newFoundDocument(e,n,s,r){return new St(e,1,n,pe.min(),s,r,0)}static newNoDocument(e,n){return new St(e,2,n,pe.min(),pe.min(),Zt.empty(),0)}static newUnknownDocument(e,n){return new St(e,3,n,pe.min(),pe.min(),Zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof St&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new St(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class fc{constructor(e,n){this.position=e,this.inclusive=n}}function g_(t,e,n){let s=0;for(let r=0;r<t.position.length;r++){const i=e[r],o=t.position[r];if(i.field.isKeyField()?s=le.comparator(le.fromName(o.referenceValue),n.key):s=Si(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function m_(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class dc{constructor(e,n="asc"){this.field=e,this.dir=n}}function zN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Tw{}class ot extends Tw{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new QN(e,n,s):n==="array-contains"?new JN(e,s):n==="in"?new ZN(e,s):n==="not-in"?new eO(e,s):n==="array-contains-any"?new tO(e,s):new ot(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new YN(e,s):new XN(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Si(n,this.value)):n!==null&&Qs(this.value)===Qs(n)&&this.matchesComparison(Si(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class qn extends Tw{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new qn(e,n)}matches(e){return ww(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function ww(t){return t.op==="and"}function Iw(t){return GN(t)&&ww(t)}function GN(t){for(const e of t.filters)if(e instanceof qn)return!1;return!0}function Ef(t){if(t instanceof ot)return t.field.canonicalString()+t.op.toString()+Pi(t.value);if(Iw(t))return t.filters.map(e=>Ef(e)).join(",");{const e=t.filters.map(n=>Ef(n)).join(",");return`${t.op}(${e})`}}function bw(t,e){return t instanceof ot?function(s,r){return r instanceof ot&&s.op===r.op&&s.field.isEqual(r.field)&&Wn(s.value,r.value)}(t,e):t instanceof qn?function(s,r){return r instanceof qn&&s.op===r.op&&s.filters.length===r.filters.length?s.filters.reduce((i,o,a)=>i&&bw(o,r.filters[a]),!0):!1}(t,e):void fe()}function Rw(t){return t instanceof ot?function(n){return`${n.field.canonicalString()} ${n.op} ${Pi(n.value)}`}(t):t instanceof qn?function(n){return n.op.toString()+" {"+n.getFilters().map(Rw).join(" ,")+"}"}(t):"Filter"}class QN extends ot{constructor(e,n,s){super(e,n,s),this.key=le.fromName(s.referenceValue)}matches(e){const n=le.comparator(e.key,this.key);return this.matchesComparison(n)}}class YN extends ot{constructor(e,n){super(e,"in",n),this.keys=Aw("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class XN extends ot{constructor(e,n){super(e,"not-in",n),this.keys=Aw("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Aw(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>le.fromName(s.referenceValue))}class JN extends ot{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fd(n)&&aa(n.arrayValue,this.value)}}class ZN extends ot{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&aa(this.value.arrayValue,n)}}class eO extends ot{constructor(e,n){super(e,"not-in",n)}matches(e){if(aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!aa(this.value.arrayValue,n)}}class tO extends ot{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>aa(this.value.arrayValue,s))}}/**
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
 */class nO{constructor(e,n=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.le=null}}function __(t,e=null,n=[],s=[],r=null,i=null,o=null){return new nO(t,e,n,s,r,i,o)}function Ud(t){const e=_e(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Ef(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),su(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Pi(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Pi(s)).join(",")),e.le=n}return e.le}function Bd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!zN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!bw(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!m_(t.startAt,e.startAt)&&m_(t.endAt,e.endAt)}function Tf(t){return le.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class iu{constructor(e,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function sO(t,e,n,s,r,i,o,a){return new iu(t,e,n,s,r,i,o,a)}function ou(t){return new iu(t)}function y_(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function rO(t){return t.collectionGroup!==null}function Vo(t){const e=_e(t);if(e.he===null){e.he=[];const n=new Set;for(const i of e.explicitOrderBy)e.he.push(i),n.add(i.field.canonicalString());const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new at(yt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.he.push(new dc(i,s))}),n.has(yt.keyField().canonicalString())||e.he.push(new dc(yt.keyField(),s))}return e.he}function Un(t){const e=_e(t);return e.Pe||(e.Pe=iO(e,Vo(t))),e.Pe}function iO(t,e){if(t.limitType==="F")return __(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const i=r.dir==="desc"?"asc":"desc";return new dc(r.field,i)});const n=t.endAt?new fc(t.endAt.position,t.endAt.inclusive):null,s=t.startAt?new fc(t.startAt.position,t.startAt.inclusive):null;return __(t.path,t.collectionGroup,e,t.filters,t.limit,n,s)}}function wf(t,e,n){return new iu(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function au(t,e){return Bd(Un(t),Un(e))&&t.limitType===e.limitType}function Cw(t){return`${Ud(Un(t))}|lt:${t.limitType}`}function Zr(t){return`Query(target=${function(n){let s=n.path.canonicalString();return n.collectionGroup!==null&&(s+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(s+=`, filters: [${n.filters.map(r=>Rw(r)).join(", ")}]`),su(n.limit)||(s+=", limit: "+n.limit),n.orderBy.length>0&&(s+=`, orderBy: [${n.orderBy.map(r=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(r)).join(", ")}]`),n.startAt&&(s+=", startAt: ",s+=n.startAt.inclusive?"b:":"a:",s+=n.startAt.position.map(r=>Pi(r)).join(",")),n.endAt&&(s+=", endAt: ",s+=n.endAt.inclusive?"a:":"b:",s+=n.endAt.position.map(r=>Pi(r)).join(",")),`Target(${s})`}(Un(t))}; limitType=${t.limitType})`}function lu(t,e){return e.isFoundDocument()&&function(s,r){const i=r.key.path;return s.collectionGroup!==null?r.key.hasCollectionId(s.collectionGroup)&&s.path.isPrefixOf(i):le.isDocumentKey(s.path)?s.path.isEqual(i):s.path.isImmediateParentOf(i)}(t,e)&&function(s,r){for(const i of Vo(s))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(s,r){for(const i of s.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(s,r){return!(s.startAt&&!function(o,a,l){const u=g_(o,a,l);return o.inclusive?u<=0:u<0}(s.startAt,Vo(s),r)||s.endAt&&!function(o,a,l){const u=g_(o,a,l);return o.inclusive?u>=0:u>0}(s.endAt,Vo(s),r))}(t,e)}function oO(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Sw(t){return(e,n)=>{let s=!1;for(const r of Vo(t)){const i=aO(r,e,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function aO(t,e,n){const s=t.field.isKeyField()?le.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),u=a.data.field(i);return l!==null&&u!==null?Si(l,u):fe()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return fe()}}/**
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
 */class Mr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){sr(this.inner,(n,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return fw(this.inner)}size(){return this.innerSize}}/**
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
 */const lO=new rt(le.comparator);function gs(){return lO}const Pw=new rt(le.comparator);function Ao(...t){let e=Pw;for(const n of t)e=e.insert(n.key,n);return e}function kw(t){let e=Pw;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function gr(){return Fo()}function Nw(){return Fo()}function Fo(){return new Mr(t=>t.toString(),(t,e)=>t.isEqual(e))}const cO=new rt(le.comparator),uO=new at(le.comparator);function Te(...t){let e=uO;for(const n of t)e=e.add(n);return e}const hO=new at(ye);function fO(){return hO}/**
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
 */function jd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:cc(e)?"-0":e}}function Ow(t){return{integerValue:""+t}}function Dw(t,e){return UN(e)?Ow(e):jd(t,e)}/**
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
 */class cu{constructor(){this._=void 0}}function dO(t,e,n){return t instanceof pc?function(r,i){const o={fields:{[gw]:{stringValue:pw},[_w]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Vd(i)&&(i=ru(i)),i&&(o.fields[mw]=i),{mapValue:o}}(n,e):t instanceof la?Mw(t,e):t instanceof ca?Lw(t,e):function(r,i){const o=xw(r,i),a=v_(o)+v_(r.Ie);return vf(o)&&vf(r.Ie)?Ow(a):jd(r.serializer,a)}(t,e)}function pO(t,e,n){return t instanceof la?Mw(t,e):t instanceof ca?Lw(t,e):n}function xw(t,e){return t instanceof ua?function(s){return vf(s)||function(i){return!!i&&"doubleValue"in i}(s)}(e)?e:{integerValue:0}:null}class pc extends cu{}class la extends cu{constructor(e){super(),this.elements=e}}function Mw(t,e){const n=Vw(e);for(const s of t.elements)n.some(r=>Wn(r,s))||n.push(s);return{arrayValue:{values:n}}}class ca extends cu{constructor(e){super(),this.elements=e}}function Lw(t,e){let n=Vw(e);for(const s of t.elements)n=n.filter(r=>!Wn(r,s));return{arrayValue:{values:n}}}class ua extends cu{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function v_(t){return Je(t.integerValue||t.doubleValue)}function Vw(t){return Fd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class gO{constructor(e,n){this.field=e,this.transform=n}}function mO(t,e){return t.field.isEqual(e.field)&&function(s,r){return s instanceof la&&r instanceof la||s instanceof ca&&r instanceof ca?Ci(s.elements,r.elements,Wn):s instanceof ua&&r instanceof ua?Wn(s.Ie,r.Ie):s instanceof pc&&r instanceof pc}(t.transform,e.transform)}class _O{constructor(e,n){this.version=e,this.transformResults=n}}class us{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new us}static exists(e){return new us(void 0,e)}static updateTime(e){return new us(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ol(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class uu{}function Fw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Bw(t.key,us.none()):new hu(t.key,t.data,us.none());{const n=t.data,s=Zt.empty();let r=new at(yt.comparator);for(let i of e.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Lr(t.key,s,new vn(r.toArray()),us.none())}}function yO(t,e,n){t instanceof hu?function(r,i,o){const a=r.value.clone(),l=T_(r.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Lr?function(r,i,o){if(!Ol(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=T_(r.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Uw(r)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Uo(t,e,n,s){return t instanceof hu?function(i,o,a,l){if(!Ol(i.precondition,o))return a;const u=i.value.clone(),h=w_(i.fieldTransforms,l,o);return u.setAll(h),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof Lr?function(i,o,a,l){if(!Ol(i.precondition,o))return a;const u=w_(i.fieldTransforms,l,o),h=o.data;return h.setAll(Uw(i)),h.setAll(u),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,s):function(i,o,a){return Ol(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function vO(t,e){let n=null;for(const s of t.fieldTransforms){const r=e.data.field(s.field),i=xw(s.transform,r||null);i!=null&&(n===null&&(n=Zt.empty()),n.set(s.field,i))}return n||null}function E_(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(s,r){return s===void 0&&r===void 0||!(!s||!r)&&Ci(s,r,(i,o)=>mO(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class hu extends uu{constructor(e,n,s,r=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Lr extends uu{constructor(e,n,s,r,i=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Uw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function T_(t,e,n){const s=new Map;xe(t.length===n.length);for(let r=0;r<n.length;r++){const i=t[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,pO(o,a,n[r]))}return s}function w_(t,e,n){const s=new Map;for(const r of t){const i=r.transform,o=n.data.field(r.field);s.set(r.field,dO(i,o,e))}return s}class Bw extends uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class EO extends uu{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class TO{constructor(e,n,s,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&yO(i,e,s[r])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=Uo(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=Uo(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Nw();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const l=Fw(o,a);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(pe.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Te())}isEqual(e){return this.batchId===e.batchId&&Ci(this.mutations,e.mutations,(n,s)=>E_(n,s))&&Ci(this.baseMutations,e.baseMutations,(n,s)=>E_(n,s))}}class Hd{constructor(e,n,s,r){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(e,n,s){xe(e.mutations.length===s.length);let r=function(){return cO}();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new Hd(e,n,s,r)}}/**
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
 */class wO{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class IO{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var et,be;function bO(t){switch(t){case $.OK:return fe();case $.CANCELLED:case $.UNKNOWN:case $.DEADLINE_EXCEEDED:case $.RESOURCE_EXHAUSTED:case $.INTERNAL:case $.UNAVAILABLE:case $.UNAUTHENTICATED:return!1;case $.INVALID_ARGUMENT:case $.NOT_FOUND:case $.ALREADY_EXISTS:case $.PERMISSION_DENIED:case $.FAILED_PRECONDITION:case $.ABORTED:case $.OUT_OF_RANGE:case $.UNIMPLEMENTED:case $.DATA_LOSS:return!0;default:return fe()}}function jw(t){if(t===void 0)return ps("GRPC error has no .code"),$.UNKNOWN;switch(t){case et.OK:return $.OK;case et.CANCELLED:return $.CANCELLED;case et.UNKNOWN:return $.UNKNOWN;case et.DEADLINE_EXCEEDED:return $.DEADLINE_EXCEEDED;case et.RESOURCE_EXHAUSTED:return $.RESOURCE_EXHAUSTED;case et.INTERNAL:return $.INTERNAL;case et.UNAVAILABLE:return $.UNAVAILABLE;case et.UNAUTHENTICATED:return $.UNAUTHENTICATED;case et.INVALID_ARGUMENT:return $.INVALID_ARGUMENT;case et.NOT_FOUND:return $.NOT_FOUND;case et.ALREADY_EXISTS:return $.ALREADY_EXISTS;case et.PERMISSION_DENIED:return $.PERMISSION_DENIED;case et.FAILED_PRECONDITION:return $.FAILED_PRECONDITION;case et.ABORTED:return $.ABORTED;case et.OUT_OF_RANGE:return $.OUT_OF_RANGE;case et.UNIMPLEMENTED:return $.UNIMPLEMENTED;case et.DATA_LOSS:return $.DATA_LOSS;default:return fe()}}(be=et||(et={}))[be.OK=0]="OK",be[be.CANCELLED=1]="CANCELLED",be[be.UNKNOWN=2]="UNKNOWN",be[be.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",be[be.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",be[be.NOT_FOUND=5]="NOT_FOUND",be[be.ALREADY_EXISTS=6]="ALREADY_EXISTS",be[be.PERMISSION_DENIED=7]="PERMISSION_DENIED",be[be.UNAUTHENTICATED=16]="UNAUTHENTICATED",be[be.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",be[be.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",be[be.ABORTED=10]="ABORTED",be[be.OUT_OF_RANGE=11]="OUT_OF_RANGE",be[be.UNIMPLEMENTED=12]="UNIMPLEMENTED",be[be.INTERNAL=13]="INTERNAL",be[be.UNAVAILABLE=14]="UNAVAILABLE",be[be.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const RO=new Hs([4294967295,4294967295],0);function I_(t){const e=cw().encode(t),n=new nw;return n.update(e),new Uint8Array(n.digest())}function b_(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),s=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Hs([n,s],0),new Hs([r,i],0)]}class $d{constructor(e,n,s){if(this.bitmap=e,this.padding=n,this.hashCount=s,n<0||n>=8)throw new Co(`Invalid padding: ${n}`);if(s<0)throw new Co(`Invalid hash count: ${s}`);if(e.length>0&&this.hashCount===0)throw new Co(`Invalid hash count: ${s}`);if(e.length===0&&n!==0)throw new Co(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Hs.fromNumber(this.Ee)}Ae(e,n,s){let r=e.add(n.multiply(Hs.fromNumber(s)));return r.compare(RO)===1&&(r=new Hs([r.getBits(0),r.getBits(1)],0)),r.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const n=I_(e),[s,r]=b_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(s,r,i);if(!this.Re(o))return!1}return!0}static create(e,n,s){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new $d(i,r,n);return s.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const n=I_(e),[s,r]=b_(n);for(let i=0;i<this.hashCount;i++){const o=this.Ae(s,r,i);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),s=e%8;this.bitmap[n]|=1<<s}}class Co extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class fu{constructor(e,n,s,r,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const r=new Map;return r.set(e,Ca.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new fu(pe.min(),r,new rt(ye),gs(),Te())}}class Ca{constructor(e,n,s,r,i){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new Ca(s,n,Te(),Te(),Te())}}/**
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
 */class Dl{constructor(e,n,s,r){this.me=e,this.removedTargetIds=n,this.key=s,this.fe=r}}class Hw{constructor(e,n){this.targetId=e,this.ge=n}}class $w{constructor(e,n,s=Et.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=r}}class R_{constructor(){this.pe=0,this.ye=A_(),this.we=Et.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Te(),n=Te(),s=Te();return this.ye.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:fe()}}),new Ca(this.we,this.Se,e,n,s)}Me(){this.be=!1,this.ye=A_()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,xe(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class AO{constructor(e){this.ke=e,this.qe=new Map,this.Qe=gs(),this.$e=gl(),this.Ue=gl(),this.Ke=new rt(ye)}We(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(n,e.fe):this.ze(n,e.key,e.fe);for(const n of e.removedTargetIds)this.ze(n,e.key,e.fe)}je(e){this.forEachTarget(e,n=>{const s=this.He(n);switch(e.state){case 0:this.Je(n)&&s.Ce(e.resumeToken);break;case 1:s.Be(),s.De||s.Me(),s.Ce(e.resumeToken);break;case 2:s.Be(),s.De||this.removeTarget(n);break;case 3:this.Je(n)&&(s.Le(),s.Ce(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),s.Ce(e.resumeToken));break;default:fe()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((s,r)=>{this.Je(r)&&n(r)})}Ze(e){const n=e.targetId,s=e.ge.count,r=this.Xe(n);if(r){const i=r.target;if(Tf(i))if(s===0){const o=new le(i.path);this.ze(n,o,St.newNoDocument(o,pe.min()))}else xe(s===1);else{const o=this.et(n);if(o!==s){const a=this.tt(e),l=a?this.nt(a,e,o):1;if(l!==0){this.Ye(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,u)}}}}}tt(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:s="",padding:r=0},hashCount:i=0}=n;let o,a;try{o=Gs(s).toUint8Array()}catch(l){if(l instanceof dw)return Ai("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new $d(o,r,i)}catch(l){return Ai(l instanceof Co?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ee===0?null:a}nt(e,n,s){return n.ge.count===s-this.st(e,n.targetId)?0:2}st(e,n){const s=this.ke.getRemoteKeysForTarget(n);let r=0;return s.forEach(i=>{const o=this.ke.it(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.ze(n,i,null),r++)}),r}ot(e){const n=new Map;this.qe.forEach((i,o)=>{const a=this.Xe(o);if(a){if(i.current&&Tf(a.target)){const l=new le(a.target.path);this._t(l).has(o)||this.ut(o,l)||this.ze(o,l,St.newNoDocument(l,e))}i.ve&&(n.set(o,i.Fe()),i.Me())}});let s=Te();this.Ue.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(s=s.add(i))}),this.Qe.forEach((i,o)=>o.setReadTime(e));const r=new fu(e,n,this.Ke,this.Qe,s);return this.Qe=gs(),this.$e=gl(),this.Ue=gl(),this.Ke=new rt(ye),r}Ge(e,n){if(!this.Je(e))return;const s=this.ut(e,n.key)?2:0;this.He(e).xe(n.key,s),this.Qe=this.Qe.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e)),this.Ue=this.Ue.insert(n.key,this.ct(n.key).add(e))}ze(e,n,s){if(!this.Je(e))return;const r=this.He(e);this.ut(e,n)?r.xe(n,1):r.Oe(n),this.Ue=this.Ue.insert(n,this.ct(n).delete(e)),this.Ue=this.Ue.insert(n,this.ct(n).add(e)),s&&(this.Qe=this.Qe.insert(n,s))}removeTarget(e){this.qe.delete(e)}et(e){const n=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let n=this.qe.get(e);return n||(n=new R_,this.qe.set(e,n)),n}ct(e){let n=this.Ue.get(e);return n||(n=new at(ye),this.Ue=this.Ue.insert(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new at(ye),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||ee("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new R_),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ut(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function gl(){return new rt(le.comparator)}function A_(){return new rt(le.comparator)}const CO={asc:"ASCENDING",desc:"DESCENDING"},SO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},PO={and:"AND",or:"OR"};class kO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function If(t,e){return t.useProto3Json||su(e)?e:{value:e}}function gc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ww(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function NO(t,e){return gc(t,e.toTimestamp())}function Bn(t){return xe(!!t),pe.fromTimestamp(function(n){const s=zs(n);return new Ze(s.seconds,s.nanos)}(t))}function Wd(t,e){return bf(t,e).canonicalString()}function bf(t,e){const n=function(r){return new Xe(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function qw(t){const e=Xe.fromString(t);return xe(Yw(e)),e}function Rf(t,e){return Wd(t.databaseId,e.path)}function ph(t,e){const n=qw(e);if(n.get(1)!==t.databaseId.projectId)throw new oe($.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new oe($.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new le(zw(n))}function Kw(t,e){return Wd(t.databaseId,e)}function OO(t){const e=qw(t);return e.length===4?Xe.emptyPath():zw(e)}function Af(t){return new Xe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zw(t){return xe(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function C_(t,e,n){return{name:Rf(t,e),fields:n.value.mapValue.fields}}function DO(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:fe()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,h){return u.useProto3Json?(xe(h===void 0||typeof h=="string"),Et.fromBase64String(h||"")):(xe(h===void 0||h instanceof Buffer||h instanceof Uint8Array),Et.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const h=u.code===void 0?$.UNKNOWN:jw(u.code);return new oe(h,u.message||"")}(o);n=new $w(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ph(t,s.document.name),i=Bn(s.document.updateTime),o=s.document.createTime?Bn(s.document.createTime):pe.min(),a=new Zt({mapValue:{fields:s.document.fields}}),l=St.newFoundDocument(r,i,o,a),u=s.targetIds||[],h=s.removedTargetIds||[];n=new Dl(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ph(t,s.document),i=s.readTime?Bn(s.readTime):pe.min(),o=St.newNoDocument(r,i),a=s.removedTargetIds||[];n=new Dl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ph(t,s.document),i=s.removedTargetIds||[];n=new Dl([],i,r,null)}else{if(!("filter"in e))return fe();{e.filter;const s=e.filter;s.targetId;const{count:r=0,unchangedNames:i}=s,o=new IO(r,i),a=s.targetId;n=new Hw(a,o)}}return n}function xO(t,e){let n;if(e instanceof hu)n={update:C_(t,e.key,e.value)};else if(e instanceof Bw)n={delete:Rf(t,e.key)};else if(e instanceof Lr)n={update:C_(t,e.key,e.data),updateMask:$O(e.fieldMask)};else{if(!(e instanceof EO))return fe();n={verify:Rf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,o){const a=o.transform;if(a instanceof pc)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof la)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof ca)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ua)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw fe()}(0,s))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:NO(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:fe()}(t,e.precondition)),n}function MO(t,e){return t&&t.length>0?(xe(e!==void 0),t.map(n=>function(r,i){let o=r.updateTime?Bn(r.updateTime):Bn(i);return o.isEqual(pe.min())&&(o=Bn(i)),new _O(o,r.transformResults||[])}(n,e))):[]}function LO(t,e){return{documents:[Kw(t,e.path)]}}function VO(t,e){const n={structuredQuery:{}},s=e.path;let r;e.collectionGroup!==null?(r=s,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=s.popLast(),n.structuredQuery.from=[{collectionId:s.lastSegment()}]),n.parent=Kw(t,r);const i=function(u){if(u.length!==0)return Qw(qn.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(u){if(u.length!==0)return u.map(h=>function(p){return{field:ei(p.field),direction:BO(p.dir)}}(h))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=If(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),{ht:n,parent:r}}function FO(t){let e=OO(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){xe(s===1);const h=n.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];n.where&&(i=function(f){const p=Gw(f);return p instanceof qn&&Iw(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(f){return f.map(p=>function(_){return new dc(ti(_.field),function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(f){let p;return p=typeof f=="object"?f.value:f,su(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(f){const p=!!f.before,m=f.values||[];return new fc(m,p)}(n.startAt));let u=null;return n.endAt&&(u=function(f){const p=!f.before,m=f.values||[];return new fc(m,p)}(n.endAt)),sO(e,r,o,i,a,"F",l,u)}function UO(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Gw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const s=ti(n.unaryFilter.field);return ot.create(s,"==",{doubleValue:NaN});case"IS_NULL":const r=ti(n.unaryFilter.field);return ot.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ti(n.unaryFilter.field);return ot.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ti(n.unaryFilter.field);return ot.create(o,"!=",{nullValue:"NULL_VALUE"});default:return fe()}}(t):t.fieldFilter!==void 0?function(n){return ot.create(ti(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fe()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return qn.create(n.compositeFilter.filters.map(s=>Gw(s)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return fe()}}(n.compositeFilter.op))}(t):fe()}function BO(t){return CO[t]}function jO(t){return SO[t]}function HO(t){return PO[t]}function ei(t){return{fieldPath:t.canonicalString()}}function ti(t){return yt.fromServerFormat(t.fieldPath)}function Qw(t){return t instanceof ot?function(n){if(n.op==="=="){if(p_(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NAN"}};if(d_(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(p_(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NOT_NAN"}};if(d_(n.value))return{unaryFilter:{field:ei(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ei(n.field),op:jO(n.op),value:n.value}}}(t):t instanceof qn?function(n){const s=n.getFilters().map(r=>Qw(r));return s.length===1?s[0]:{compositeFilter:{op:HO(n.op),filters:s}}}(t):fe()}function $O(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Yw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Fs{constructor(e,n,s,r,i=pe.min(),o=pe.min(),a=Et.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Fs(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fs(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fs(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class WO{constructor(e){this.Tt=e}}function qO(t){const e=FO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?wf(e,e.limit,"L"):e}/**
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
 */class KO{constructor(){this.Tn=new zO}addToCollectionParentIndex(e,n){return this.Tn.add(n),j.resolve()}getCollectionParents(e,n){return j.resolve(this.Tn.getEntries(n))}addFieldIndex(e,n){return j.resolve()}deleteFieldIndex(e,n){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,n){return j.resolve()}getDocumentsMatchingTarget(e,n){return j.resolve(null)}getIndexType(e,n){return j.resolve(0)}getFieldIndexes(e,n){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,n){return j.resolve(Ks.min())}getMinOffsetFromCollectionGroup(e,n){return j.resolve(Ks.min())}updateCollectionGroup(e,n,s){return j.resolve()}updateIndexEntries(e,n){return j.resolve()}}class zO{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n]||new at(Xe.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(e){const n=e.lastSegment(),s=e.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(e){return(this.index[e]||new at(Xe.comparator)).toArray()}}/**
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
 */const S_={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Xw=41943040;class Wt{static withCacheSize(e){return new Wt(e,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=s}}/**
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
 */Wt.DEFAULT_COLLECTION_PERCENTILE=10,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wt.DEFAULT=new Wt(Xw,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wt.DISABLED=new Wt(-1,0,0);/**
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
 */class ki{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new ki(0)}static Kn(){return new ki(-1)}}/**
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
 */const P_="LruGarbageCollector",GO=1048576;function k_([t,e],[n,s]){const r=ye(t,n);return r===0?ye(e,s):r}class QO{constructor(e){this.Hn=e,this.buffer=new at(k_),this.Jn=0}Yn(){return++this.Jn}Zn(e){const n=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(n);else{const s=this.buffer.last();k_(n,s)<0&&(this.buffer=this.buffer.delete(s).add(n))}}get maxValue(){return this.buffer.last()[0]}}class YO{constructor(e,n,s){this.garbageCollector=e,this.asyncQueue=n,this.localStore=s,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ee(P_,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){zi(n)?ee(P_,"Ignoring IndexedDB error during garbage collection: ",n):await Ki(n)}await this.er(3e5)})}}class XO{constructor(e,n){this.tr=e,this.params=n}calculateTargetCount(e,n){return this.tr.nr(e).next(s=>Math.floor(n/100*s))}nthSequenceNumber(e,n){if(n===0)return j.resolve(nu.ae);const s=new QO(n);return this.tr.forEachTarget(e,r=>s.Zn(r.sequenceNumber)).next(()=>this.tr.rr(e,r=>s.Zn(r))).next(()=>s.maxValue)}removeTargets(e,n,s){return this.tr.removeTargets(e,n,s)}removeOrphanedDocuments(e,n){return this.tr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(ee("LruGarbageCollector","Garbage collection skipped; disabled"),j.resolve(S_)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(ee("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),S_):this.ir(e,n))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,n){let s,r,i,o,a,l,u;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(ee("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),r=this.params.maximumSequenceNumbersToCollect):r=f,o=Date.now(),this.nthSequenceNumber(e,r))).next(f=>(s=f,a=Date.now(),this.removeTargets(e,s,n))).next(f=>(i=f,l=Date.now(),this.removeOrphanedDocuments(e,s))).next(f=>(u=Date.now(),Jr()<=ve.DEBUG&&ee("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(l-a)+`ms
	Removed ${f} documents in `+(u-l)+`ms
Total Duration: ${u-h}ms`),j.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:f})))}}function JO(t,e){return new XO(t,e)}/**
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
 */class ZO{constructor(){this.changes=new Mr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,St.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?j.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class eD{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class tD{constructor(e,n,s,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(s!==null&&Uo(s.mutation,r,vn.empty(),Ze.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,Te()).next(()=>s))}getLocalViewOfDocuments(e,n,s=Te()){const r=gr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,s).next(i=>{let o=Ao();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=gr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,Te()))}populateOverlays(e,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,s,r){let i=gs();const o=Fo(),a=function(){return Fo()}();return n.forEach((l,u)=>{const h=s.get(u.key);r.has(u.key)&&(h===void 0||h.mutation instanceof Lr)?i=i.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Uo(h.mutation,u,h.mutation.getFieldMask(),Ze.now())):o.set(u.key,vn.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var f;return a.set(u,new eD(h,(f=o.get(u))!==null&&f!==void 0?f:null))}),a))}recalculateAndSaveOverlays(e,n){const s=Fo();let r=new rt((o,a)=>o-a),i=Te();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=s.get(l)||vn.empty();h=a.applyToLocalView(u,h),s.set(l,h);const f=(r.get(a.batchId)||Te()).add(l);r=r.insert(a.batchId,f)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,f=Nw();h.forEach(p=>{if(!i.has(p)){const m=Fw(n.get(p),s.get(p));m!==null&&f.set(p,m),i=i.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,f))}return j.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s,r){return function(o){return le.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):rO(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s,r):this.getDocumentsMatchingCollectionQuery(e,n,s,r)}getNextDocuments(e,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,r-i.size):j.resolve(gr());let a=ra,l=i;return o.next(u=>j.forEach(u,(h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?j.resolve():this.remoteDocumentCache.getEntry(e,h).next(p=>{l=l.insert(h,p)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,l,u,Te())).next(h=>({batchId:a,changes:kw(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new le(n)).next(s=>{let r=Ao();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,s,r){const i=n.collectionGroup;let o=Ao();return this.indexManager.getCollectionParents(e,i).next(a=>j.forEach(a,l=>{const u=function(f,p){return new iu(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s,r).next(h=>{h.forEach((f,p)=>{o=o.insert(f,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,s,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i,r))).next(o=>{i.forEach((l,u)=>{const h=u.getKey();o.get(h)===null&&(o=o.insert(h,St.newInvalidDocument(h)))});let a=Ao();return o.forEach((l,u)=>{const h=i.get(l);h!==void 0&&Uo(h.mutation,u,vn.empty(),Ze.now()),lu(n,u)&&(a=a.insert(l,u))}),a})}}/**
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
 */class nD{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,n){return j.resolve(this.dr.get(n))}saveBundleMetadata(e,n){return this.dr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:Bn(r.createTime)}}(n)),j.resolve()}getNamedQuery(e,n){return j.resolve(this.Ar.get(n))}saveNamedQuery(e,n){return this.Ar.set(n.name,function(r){return{name:r.name,query:qO(r.bundledQuery),readTime:Bn(r.readTime)}}(n)),j.resolve()}}/**
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
 */class sD{constructor(){this.overlays=new rt(le.comparator),this.Rr=new Map}getOverlay(e,n){return j.resolve(this.overlays.get(n))}getOverlays(e,n){const s=gr();return j.forEach(n,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((r,i)=>{this.Et(e,n,i)}),j.resolve()}removeOverlaysForBatchId(e,n,s){const r=this.Rr.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.Rr.delete(s)),j.resolve()}getOverlaysForCollection(e,n,s){const r=gr(),i=n.length+1,o=new le(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return j.resolve(r)}getOverlaysForCollectionGroup(e,n,s,r){let i=new rt((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>s){let h=i.get(u.largestBatchId);h===null&&(h=gr(),i=i.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=gr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=r)););return j.resolve(a)}Et(e,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.Rr.get(r.largestBatchId).delete(s.key);this.Rr.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new wO(n,s));let i=this.Rr.get(n);i===void 0&&(i=Te(),this.Rr.set(n,i)),this.Rr.set(n,i.add(s.key))}}/**
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
 */class rD{constructor(){this.sessionToken=Et.EMPTY_BYTE_STRING}getSessionToken(e){return j.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,j.resolve()}}/**
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
 */class qd{constructor(){this.Vr=new at(ut.mr),this.gr=new at(ut.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,n){const s=new ut(e,n);this.Vr=this.Vr.add(s),this.gr=this.gr.add(s)}yr(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.wr(new ut(e,n))}Sr(e,n){e.forEach(s=>this.removeReference(s,n))}br(e){const n=new le(new Xe([])),s=new ut(n,e),r=new ut(n,e+1),i=[];return this.gr.forEachInRange([s,r],o=>{this.wr(o),i.push(o.key)}),i}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const n=new le(new Xe([])),s=new ut(n,e),r=new ut(n,e+1);let i=Te();return this.gr.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new ut(e,0),s=this.Vr.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class ut{constructor(e,n){this.key=e,this.Cr=n}static mr(e,n){return le.comparator(e.key,n.key)||ye(e.Cr,n.Cr)}static pr(e,n){return ye(e.Cr,n.Cr)||le.comparator(e.key,n.key)}}/**
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
 */class iD{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Fr=1,this.Mr=new at(ut.mr)}checkEmpty(e){return j.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,r){const i=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new TO(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this.Mr=this.Mr.add(new ut(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return j.resolve(o)}lookupMutationBatch(e,n){return j.resolve(this.Or(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,r=this.Nr(s),i=r<0?0:r;return j.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(this.mutationQueue.length===0?Ld:this.Fr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new ut(n,0),r=new ut(n,Number.POSITIVE_INFINITY),i=[];return this.Mr.forEachInRange([s,r],o=>{const a=this.Or(o.Cr);i.push(a)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new at(ye);return n.forEach(r=>{const i=new ut(r,0),o=new ut(r,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([i,o],a=>{s=s.add(a.Cr)})}),j.resolve(this.Br(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,r=s.length+1;let i=s;le.isDocumentKey(i)||(i=i.child(""));const o=new ut(new le(i),0);let a=new at(ye);return this.Mr.forEachWhile(l=>{const u=l.key.path;return!!s.isPrefixOf(u)&&(u.length===r&&(a=a.add(l.Cr)),!0)},o),j.resolve(this.Br(a))}Br(e){const n=[];return e.forEach(s=>{const r=this.Or(s);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){xe(this.Lr(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this.Mr;return j.forEach(n.mutations,r=>{const i=new ut(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Mr=s})}qn(e){}containsKey(e,n){const s=new ut(n,0),r=this.Mr.firstAfterOrEqual(s);return j.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}Lr(e,n){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const n=this.Nr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class oD{constructor(e){this.kr=e,this.docs=function(){return new rt(le.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.kr(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return j.resolve(s?s.document.mutableCopy():St.newInvalidDocument(n))}getEntries(e,n){let s=gs();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():St.newInvalidDocument(r))}),j.resolve(s)}getDocumentsMatchingQuery(e,n,s,r){let i=gs();const o=n.path,a=new le(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:h}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||MN(xN(h),s)<=0||(r.has(h.key)||lu(n,h))&&(i=i.insert(h.key,h.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,n,s,r){fe()}qr(e,n){return j.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new aD(this)}getSize(e){return j.resolve(this.size)}}class aD extends ZO{constructor(e){super(),this.Ir=e}applyChanges(e){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Ir.addEntry(e,r)):this.Ir.removeEntry(s)}),j.waitFor(n)}getFromCache(e,n){return this.Ir.getEntry(e,n)}getAllFromCache(e,n){return this.Ir.getEntries(e,n)}}/**
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
 */class lD{constructor(e){this.persistence=e,this.Qr=new Mr(n=>Ud(n),Bd),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.$r=0,this.Ur=new qd,this.targetCount=0,this.Kr=ki.Un()}forEachTarget(e,n){return this.Qr.forEach((s,r)=>n(r)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.$r&&(this.$r=n),j.resolve()}zn(e){this.Qr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Kr=new ki(n),this.highestTargetId=n),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,n){return this.zn(n),this.targetCount+=1,j.resolve()}updateTargetData(e,n){return this.zn(n),j.resolve()}removeTargetData(e,n){return this.Qr.delete(n.target),this.Ur.br(n.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,n,s){let r=0;const i=[];return this.Qr.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.Qr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),j.waitFor(i).next(()=>r)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,n){const s=this.Qr.get(n)||null;return j.resolve(s)}addMatchingKeys(e,n,s){return this.Ur.yr(n,s),j.resolve()}removeMatchingKeys(e,n,s){this.Ur.Sr(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Ur.br(n),j.resolve()}getMatchingKeysForTargetId(e,n){const s=this.Ur.vr(n);return j.resolve(s)}containsKey(e,n){return j.resolve(this.Ur.containsKey(n))}}/**
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
 */class Jw{constructor(e,n){this.Wr={},this.overlays={},this.Gr=new nu(0),this.zr=!1,this.zr=!0,this.jr=new rD,this.referenceDelegate=e(this),this.Hr=new lD(this),this.indexManager=new KO,this.remoteDocumentCache=function(r){return new oD(r)}(s=>this.referenceDelegate.Jr(s)),this.serializer=new WO(n),this.Yr=new nD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sD,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Wr[e.toKey()];return s||(s=new iD(n,this.referenceDelegate),this.Wr[e.toKey()]=s),s}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,n,s){ee("MemoryPersistence","Starting transaction:",e);const r=new cD(this.Gr.next());return this.referenceDelegate.Zr(),s(r).next(i=>this.referenceDelegate.Xr(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}ei(e,n){return j.or(Object.values(this.Wr).map(s=>()=>s.containsKey(e,n)))}}class cD extends VN{constructor(e){super(),this.currentSequenceNumber=e}}class Kd{constructor(e){this.persistence=e,this.ti=new qd,this.ni=null}static ri(e){return new Kd(e)}get ii(){if(this.ni)return this.ni;throw fe()}addReference(e,n,s){return this.ti.addReference(s,n),this.ii.delete(s.toString()),j.resolve()}removeReference(e,n,s){return this.ti.removeReference(s,n),this.ii.add(s.toString()),j.resolve()}markPotentiallyOrphaned(e,n){return this.ii.add(n.toString()),j.resolve()}removeTarget(e,n){this.ti.br(n.targetId).forEach(r=>this.ii.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(i=>this.ii.add(i.toString()))}).next(()=>s.removeTargetData(e,n))}Zr(){this.ni=new Set}Xr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.ii,s=>{const r=le.fromPath(s);return this.si(e,r).next(i=>{i||n.removeEntry(r,pe.min())})}).next(()=>(this.ni=null,n.apply(e)))}updateLimboDocument(e,n){return this.si(e,n).next(s=>{s?this.ii.delete(n.toString()):this.ii.add(n.toString())})}Jr(e){return 0}si(e,n){return j.or([()=>j.resolve(this.ti.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.ei(e,n)])}}class mc{constructor(e,n){this.persistence=e,this.oi=new Mr(s=>BN(s.path),(s,r)=>s.isEqual(r)),this.garbageCollector=JO(this,n)}static ri(e,n){return new mc(e,n)}Zr(){}Xr(e){return j.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}nr(e){const n=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(s=>n.next(r=>s+r))}sr(e){let n=0;return this.rr(e,s=>{n++}).next(()=>n)}rr(e,n){return j.forEach(this.oi,(s,r)=>this.ar(e,s,r).next(i=>i?j.resolve():n(r)))}removeTargets(e,n,s){return this.persistence.getTargetCache().removeTargets(e,n,s)}removeOrphanedDocuments(e,n){let s=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.qr(e,o=>this.ar(e,o,n).next(a=>{a||(s++,i.removeEntry(o,pe.min()))})).next(()=>i.apply(e)).next(()=>s)}markPotentiallyOrphaned(e,n){return this.oi.set(n,e.currentSequenceNumber),j.resolve()}removeTarget(e,n){const s=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,s)}addReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),j.resolve()}removeReference(e,n,s){return this.oi.set(s,e.currentSequenceNumber),j.resolve()}updateLimboDocument(e,n){return this.oi.set(n,e.currentSequenceNumber),j.resolve()}Jr(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=kl(e.data.value)),n}ar(e,n,s){return j.or([()=>this.persistence.ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const r=this.oi.get(n);return j.resolve(r!==void 0&&r>s)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class zd{constructor(e,n,s,r){this.targetId=e,this.fromCache=n,this.Hi=s,this.Ji=r}static Yi(e,n){let s=Te(),r=Te();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new zd(e,n.fromCache,s,r)}}/**
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
 */class uD{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class hD{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return sk()?8:FN(Dt())>0?6:4}()}initialize(e,n){this.ns=e,this.indexManager=n,this.Zi=!0}getDocumentsMatchingQuery(e,n,s,r){const i={result:null};return this.rs(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ss(e,n,r,s).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new uD;return this._s(e,n,o).next(a=>{if(i.result=a,this.Xi)return this.us(e,n,o,a.size)})}).next(()=>i.result)}us(e,n,s,r){return s.documentReadCount<this.es?(Jr()<=ve.DEBUG&&ee("QueryEngine","SDK will not create cache indexes for query:",Zr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),j.resolve()):(Jr()<=ve.DEBUG&&ee("QueryEngine","Query:",Zr(n),"scans",s.documentReadCount,"local documents and returns",r,"documents as results."),s.documentReadCount>this.ts*r?(Jr()<=ve.DEBUG&&ee("QueryEngine","The SDK decides to create cache indexes for query:",Zr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Un(n))):j.resolve())}rs(e,n){if(y_(n))return j.resolve(null);let s=Un(n);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=wf(n,null,"F"),s=Un(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=Te(...i);return this.ns.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(l=>{const u=this.cs(n,a);return this.ls(n,u,o,l.readTime)?this.rs(e,wf(n,null,"F")):this.hs(e,u,n,l)}))})))}ss(e,n,s,r){return y_(n)||r.isEqual(pe.min())?j.resolve(null):this.ns.getDocuments(e,s).next(i=>{const o=this.cs(n,i);return this.ls(n,o,s,r)?j.resolve(null):(Jr()<=ve.DEBUG&&ee("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Zr(n)),this.hs(e,o,n,DN(r,ra)).next(a=>a))})}cs(e,n){let s=new at(Sw(e));return n.forEach((r,i)=>{lu(e,i)&&(s=s.add(i))}),s}ls(e,n,s,r){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}_s(e,n,s){return Jr()<=ve.DEBUG&&ee("QueryEngine","Using full collection scan to execute query:",Zr(n)),this.ns.getDocumentsMatchingQuery(e,n,Ks.min(),s)}hs(e,n,s,r){return this.ns.getDocumentsMatchingQuery(e,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */const Gd="LocalStore",fD=3e8;class dD{constructor(e,n,s,r){this.persistence=e,this.Ps=n,this.serializer=r,this.Ts=new rt(ye),this.Is=new Mr(i=>Ud(i),Bd),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(s)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tD(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ts))}}function pD(t,e,n,s){return new dD(t,e,n,s)}async function Zw(t,e){const n=_e(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.As(e),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=Te();for(const u of r){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of i){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(s,l).next(u=>({Rs:u,removedBatchIds:o,addedBatchIds:a}))})})}function gD(t,e){const n=_e(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=n.ds.newChangeBuffer({trackRemovals:!0});return function(a,l,u,h){const f=u.batch,p=f.keys();let m=j.resolve();return p.forEach(_=>{m=m.next(()=>h.getEntry(l,_)).next(y=>{const b=u.docVersions.get(_);xe(b!==null),y.version.compareTo(b)<0&&(f.applyToRemoteDocument(y,u),y.isValidDocument()&&(y.setReadTime(u.commitVersion),h.addEntry(y)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,f))}(n,s,e,i).next(()=>i.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(a){let l=Te();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(s,r))})}function eI(t){const e=_e(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Hr.getLastRemoteSnapshotVersion(n))}function mD(t,e){const n=_e(t),s=e.snapshotVersion;let r=n.Ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ds.newChangeBuffer({trackRemovals:!0});r=n.Ts;const a=[];e.targetChanges.forEach((h,f)=>{const p=r.get(f);if(!p)return;a.push(n.Hr.removeMatchingKeys(i,h.removedDocuments,f).next(()=>n.Hr.addMatchingKeys(i,h.addedDocuments,f)));let m=p.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?m=m.withResumeToken(Et.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):h.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(h.resumeToken,s)),r=r.insert(f,m),function(y,b,O){return y.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=fD?!0:O.addedDocuments.size+O.modifiedDocuments.size+O.removedDocuments.size>0}(p,m,h)&&a.push(n.Hr.updateTargetData(i,m))});let l=gs(),u=Te();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,h))}),a.push(_D(i,o,e.documentUpdates).next(h=>{l=h.Vs,u=h.fs})),!s.isEqual(pe.min())){const h=n.Hr.getLastRemoteSnapshotVersion(i).next(f=>n.Hr.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(h)}return j.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,u)).next(()=>l)}).then(i=>(n.Ts=r,i))}function _D(t,e,n){let s=Te(),r=Te();return n.forEach(i=>s=s.add(i)),e.getEntries(t,s).next(i=>{let o=gs();return n.forEach((a,l)=>{const u=i.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(r=r.add(a)),l.isNoDocument()&&l.version.isEqual(pe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):ee(Gd,"Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Vs:o,fs:r}})}function yD(t,e){const n=_e(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=Ld),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function vD(t,e){const n=_e(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return n.Hr.getTargetData(s,e).next(i=>i?(r=i,j.resolve(r)):n.Hr.allocateTargetId(s).next(o=>(r=new Fs(e,o,"TargetPurposeListen",s.currentSequenceNumber),n.Hr.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=n.Ts.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Ts=n.Ts.insert(s.targetId,s),n.Is.set(e,s.targetId)),s})}async function Cf(t,e,n){const s=_e(t),r=s.Ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!zi(o))throw o;ee(Gd,`Failed to update sequence numbers for target ${e}: ${o}`)}s.Ts=s.Ts.remove(e),s.Is.delete(r.target)}function N_(t,e,n){const s=_e(t);let r=pe.min(),i=Te();return s.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,h){const f=_e(l),p=f.Is.get(h);return p!==void 0?j.resolve(f.Ts.get(p)):f.Hr.getTargetData(u,h)}(s,o,Un(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Hr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>s.Ps.getDocumentsMatchingQuery(o,e,n?r:pe.min(),n?i:Te())).next(a=>(ED(s,oO(e),a),{documents:a,gs:i})))}function ED(t,e,n){let s=t.Es.get(e)||pe.min();n.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),t.Es.set(e,s)}class O_{constructor(){this.activeTargetIds=fO()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class TD{constructor(){this.ho=new O_,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e,n=!0){return n&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,n,s){this.Po[e]=n}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new O_,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wD{To(e){}shutdown(){}}/**
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
 */const D_="ConnectivityMonitor";class x_{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ee(D_,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ee(D_,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ml=null;function Sf(){return ml===null?ml=function(){return 268435456+Math.round(2147483648*Math.random())}():ml++,"0x"+ml.toString(16)}/**
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
 */const gh="RestConnection",ID={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class bD{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=n+"://"+e.host,this.yo=`projects/${s}/databases/${r}`,this.wo=this.databaseId.database===uc?`project_id=${s}`:`project_id=${s}&database_id=${r}`}So(e,n,s,r,i){const o=Sf(),a=this.bo(e,n.toUriEncodedString());ee(gh,`Sending RPC '${e}' ${o}:`,a,s);const l={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(l,r,i),this.vo(e,a,l,s).then(u=>(ee(gh,`Received RPC '${e}' ${o}: `,u),u),u=>{throw Ai(gh,`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",s),u})}Co(e,n,s,r,i,o){return this.So(e,n,s,r,i)}Do(e,n,s){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}bo(e,n){const s=ID[e];return`${this.po}/v1/${n}:${s}`}terminate(){}}/**
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
 */class RD{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
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
 */const Rt="WebChannelConnection";class AD extends bD{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,n,s,r){const i=Sf();return new Promise((o,a)=>{const l=new sw;l.setWithCredentials(!0),l.listenOnce(rw.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case Pl.NO_ERROR:const h=l.getResponseJson();ee(Rt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(h)),o(h);break;case Pl.TIMEOUT:ee(Rt,`RPC '${e}' ${i} timed out`),a(new oe($.DEADLINE_EXCEEDED,"Request time out"));break;case Pl.HTTP_ERROR:const f=l.getStatus();if(ee(Rt,`RPC '${e}' ${i} failed with status:`,f,"response text:",l.getResponseText()),f>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const m=p==null?void 0:p.error;if(m&&m.status&&m.message){const _=function(b){const O=b.toLowerCase().replace(/_/g,"-");return Object.values($).indexOf(O)>=0?O:$.UNKNOWN}(m.status);a(new oe(_,m.message))}else a(new oe($.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new oe($.UNAVAILABLE,"Connection failed."));break;default:fe()}}finally{ee(Rt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);ee(Rt,`RPC '${e}' ${i} sending request:`,r),l.send(n,"POST",u,s,15)})}Wo(e,n,s){const r=Sf(),i=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=aw(),a=ow(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const h=i.join("");ee(Rt,`Creating RPC '${e}' stream ${r}: ${h}`,l);const f=o.createWebChannel(h,l);let p=!1,m=!1;const _=new RD({Fo:b=>{m?ee(Rt,`Not sending because RPC '${e}' stream ${r} is closed:`,b):(p||(ee(Rt,`Opening RPC '${e}' stream ${r} transport.`),f.open(),p=!0),ee(Rt,`RPC '${e}' stream ${r} sending:`,b),f.send(b))},Mo:()=>f.close()}),y=(b,O,D)=>{b.listen(O,v=>{try{D(v)}catch(C){setTimeout(()=>{throw C},0)}})};return y(f,Ro.EventType.OPEN,()=>{m||(ee(Rt,`RPC '${e}' stream ${r} transport opened.`),_.Qo())}),y(f,Ro.EventType.CLOSE,()=>{m||(m=!0,ee(Rt,`RPC '${e}' stream ${r} transport closed`),_.Uo())}),y(f,Ro.EventType.ERROR,b=>{m||(m=!0,Ai(Rt,`RPC '${e}' stream ${r} transport errored:`,b),_.Uo(new oe($.UNAVAILABLE,"The operation could not be completed")))}),y(f,Ro.EventType.MESSAGE,b=>{var O;if(!m){const D=b.data[0];xe(!!D);const v=D,C=(v==null?void 0:v.error)||((O=v[0])===null||O===void 0?void 0:O.error);if(C){ee(Rt,`RPC '${e}' stream ${r} received error:`,C);const x=C.status;let M=function(w){const R=et[w];if(R!==void 0)return jw(R)}(x),I=C.message;M===void 0&&(M=$.INTERNAL,I="Unknown error status: "+x+" with message "+C.message),m=!0,_.Uo(new oe(M,I)),f.close()}else ee(Rt,`RPC '${e}' stream ${r} received:`,D),_.Ko(D)}}),y(a,iw.STAT_EVENT,b=>{b.stat===gf.PROXY?ee(Rt,`RPC '${e}' stream ${r} detected buffering proxy`):b.stat===gf.NOPROXY&&ee(Rt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{_.$o()},0),_}}function mh(){return typeof document<"u"?document:null}/**
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
 */function du(t){return new kO(t,!0)}/**
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
 */class tI{constructor(e,n,s=1e3,r=1.5,i=6e4){this.Ti=e,this.timerId=n,this.Go=s,this.zo=r,this.jo=i,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const n=Math.floor(this.Ho+this.e_()),s=Math.max(0,Date.now()-this.Yo),r=Math.max(0,n-s);r>0&&ee("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Ho} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,r,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const M_="PersistentStream";class nI{constructor(e,n,s,r,i,o,a,l){this.Ti=e,this.n_=s,this.r_=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new tI(e,n)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,n){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():n&&n.code===$.RESOURCE_EXHAUSTED?(ps(n.toString()),ps("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):n&&n.code===$.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(n)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),n=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.i_===n&&this.V_(s,r)},s=>{e(()=>{const r=new oe($.UNKNOWN,"Fetching auth token failed: "+s.message);return this.m_(r)})})}V_(e,n){const s=this.R_(this.i_);this.stream=this.f_(e,n),this.stream.xo(()=>{s(()=>this.listener.xo())}),this.stream.No(()=>{s(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(r=>{s(()=>this.m_(r))}),this.stream.onMessage(r=>{s(()=>++this.__==1?this.g_(r):this.onNext(r))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ee(M_,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return n=>{this.Ti.enqueueAndForget(()=>this.i_===e?n():(ee(M_,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CD extends nI{constructor(e,n,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}f_(e,n){return this.connection.Wo("Listen",e,n)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const n=DO(this.serializer,e),s=function(i){if(!("targetChange"in i))return pe.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?pe.min():o.readTime?Bn(o.readTime):pe.min()}(e);return this.listener.p_(n,s)}y_(e){const n={};n.database=Af(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=Tf(l)?{documents:LO(i,l)}:{query:VO(i,l).ht},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Ww(i,o.resumeToken);const u=If(i,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(pe.min())>0){a.readTime=gc(i,o.snapshotVersion.toTimestamp());const u=If(i,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const s=UO(this.serializer,e);s&&(n.labels=s),this.I_(n)}w_(e){const n={};n.database=Af(this.serializer),n.removeTarget=e,this.I_(n)}}class SD extends nI{constructor(e,n,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,n){return this.connection.Wo("Write",e,n)}g_(e){return xe(!!e.streamToken),this.lastStreamToken=e.streamToken,xe(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const n=MO(e.writeResults,e.commitTime),s=Bn(e.commitTime);return this.listener.v_(s,n)}C_(){const e={};e.database=Af(this.serializer),this.I_(e)}b_(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>xO(this.serializer,s))};this.I_(n)}}/**
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
 */class PD{}class kD extends PD{constructor(e,n,s,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.F_=!1}M_(){if(this.F_)throw new oe($.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,s,r){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,bf(n,s),r,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new oe($.UNKNOWN,i.toString())})}Co(e,n,s,r,i){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.Co(e,bf(n,s),r,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===$.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new oe($.UNKNOWN,o.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class ND{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(ps(n),this.N_=!1):ee("OnlineStateTracker",n)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const Ar="RemoteStore";class OD{constructor(e,n,s,r,i){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=i,this.z_.To(o=>{s.enqueueAndForget(async()=>{Vr(this)&&(ee(Ar,"Restarting streams for network reachability change."),await async function(l){const u=_e(l);u.W_.add(4),await Sa(u),u.j_.set("Unknown"),u.W_.delete(4),await pu(u)}(this))})}),this.j_=new ND(s,r)}}async function pu(t){if(Vr(t))for(const e of t.G_)await e(!0)}async function Sa(t){for(const e of t.G_)await e(!1)}function sI(t,e){const n=_e(t);n.K_.has(e.targetId)||(n.K_.set(e.targetId,e),Jd(n)?Xd(n):Gi(n).c_()&&Yd(n,e))}function Qd(t,e){const n=_e(t),s=Gi(n);n.K_.delete(e),s.c_()&&rI(n,e),n.K_.size===0&&(s.c_()?s.P_():Vr(n)&&n.j_.set("Unknown"))}function Yd(t,e){if(t.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Gi(t).y_(e)}function rI(t,e){t.H_.Ne(e),Gi(t).w_(e)}function Xd(t){t.H_=new AO({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>t.K_.get(e)||null,it:()=>t.datastore.serializer.databaseId}),Gi(t).start(),t.j_.B_()}function Jd(t){return Vr(t)&&!Gi(t).u_()&&t.K_.size>0}function Vr(t){return _e(t).W_.size===0}function iI(t){t.H_=void 0}async function DD(t){t.j_.set("Online")}async function xD(t){t.K_.forEach((e,n)=>{Yd(t,e)})}async function MD(t,e){iI(t),Jd(t)?(t.j_.q_(e),Xd(t)):t.j_.set("Unknown")}async function LD(t,e,n){if(t.j_.set("Online"),e instanceof $w&&e.state===2&&e.cause)try{await async function(r,i){const o=i.cause;for(const a of i.targetIds)r.K_.has(a)&&(await r.remoteSyncer.rejectListen(a,o),r.K_.delete(a),r.H_.removeTarget(a))}(t,e)}catch(s){ee(Ar,"Failed to remove targets %s: %s ",e.targetIds.join(","),s),await _c(t,s)}else if(e instanceof Dl?t.H_.We(e):e instanceof Hw?t.H_.Ze(e):t.H_.je(e),!n.isEqual(pe.min()))try{const s=await eI(t.localStore);n.compareTo(s)>=0&&await function(i,o){const a=i.H_.ot(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const h=i.K_.get(u);h&&i.K_.set(u,h.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const h=i.K_.get(l);if(!h)return;i.K_.set(l,h.withResumeToken(Et.EMPTY_BYTE_STRING,h.snapshotVersion)),rI(i,l);const f=new Fs(h.target,l,u,h.sequenceNumber);Yd(i,f)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(s){ee(Ar,"Failed to raise snapshot:",s),await _c(t,s)}}async function _c(t,e,n){if(!zi(e))throw e;t.W_.add(1),await Sa(t),t.j_.set("Offline"),n||(n=()=>eI(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{ee(Ar,"Retrying IndexedDB access"),await n(),t.W_.delete(1),await pu(t)})}function oI(t,e){return e().catch(n=>_c(t,n,e))}async function gu(t){const e=_e(t),n=Ys(e);let s=e.U_.length>0?e.U_[e.U_.length-1].batchId:Ld;for(;VD(e);)try{const r=await yD(e.localStore,s);if(r===null){e.U_.length===0&&n.P_();break}s=r.batchId,FD(e,r)}catch(r){await _c(e,r)}aI(e)&&lI(e)}function VD(t){return Vr(t)&&t.U_.length<10}function FD(t,e){t.U_.push(e);const n=Ys(t);n.c_()&&n.S_&&n.b_(e.mutations)}function aI(t){return Vr(t)&&!Ys(t).u_()&&t.U_.length>0}function lI(t){Ys(t).start()}async function UD(t){Ys(t).C_()}async function BD(t){const e=Ys(t);for(const n of t.U_)e.b_(n.mutations)}async function jD(t,e,n){const s=t.U_.shift(),r=Hd.from(s,e,n);await oI(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await gu(t)}async function HD(t,e){e&&Ys(t).S_&&await async function(s,r){if(function(o){return bO(o)&&o!==$.ABORTED}(r.code)){const i=s.U_.shift();Ys(s).h_(),await oI(s,()=>s.remoteSyncer.rejectFailedWrite(i.batchId,r)),await gu(s)}}(t,e),aI(t)&&lI(t)}async function L_(t,e){const n=_e(t);n.asyncQueue.verifyOperationInProgress(),ee(Ar,"RemoteStore received new credentials");const s=Vr(n);n.W_.add(3),await Sa(n),s&&n.j_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.W_.delete(3),await pu(n)}async function $D(t,e){const n=_e(t);e?(n.W_.delete(2),await pu(n)):e||(n.W_.add(2),await Sa(n),n.j_.set("Unknown"))}function Gi(t){return t.J_||(t.J_=function(n,s,r){const i=_e(n);return i.M_(),new CD(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{xo:DD.bind(null,t),No:xD.bind(null,t),Lo:MD.bind(null,t),p_:LD.bind(null,t)}),t.G_.push(async e=>{e?(t.J_.h_(),Jd(t)?Xd(t):t.j_.set("Unknown")):(await t.J_.stop(),iI(t))})),t.J_}function Ys(t){return t.Y_||(t.Y_=function(n,s,r){const i=_e(n);return i.M_(),new SD(s,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)}(t.datastore,t.asyncQueue,{xo:()=>Promise.resolve(),No:UD.bind(null,t),Lo:HD.bind(null,t),D_:BD.bind(null,t),v_:jD.bind(null,t)}),t.G_.push(async e=>{e?(t.Y_.h_(),await gu(t)):(await t.Y_.stop(),t.U_.length>0&&(ee(Ar,`Stopping write stream with ${t.U_.length} pending writes`),t.U_=[]))})),t.Y_}/**
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
 */class Zd{constructor(e,n,s,r,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new cs,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,s,r,i){const o=Date.now()+s,a=new Zd(e,n,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new oe($.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ep(t,e){if(ps("AsyncQueue",`${e}: ${t}`),zi(t))return new oe($.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class pi{static emptySet(e){return new pi(e.comparator)}constructor(e){this.comparator=e?(n,s)=>e(n,s)||le.comparator(n.key,s.key):(n,s)=>le.comparator(n.key,s.key),this.keyedMap=Ao(),this.sortedSet=new rt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof pi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new pi;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class V_{constructor(){this.Z_=new rt(le.comparator)}track(e){const n=e.doc.key,s=this.Z_.get(n);s?e.type!==0&&s.type===3?this.Z_=this.Z_.insert(n,e):e.type===3&&s.type!==1?this.Z_=this.Z_.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Z_=this.Z_.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Z_=this.Z_.remove(n):e.type===1&&s.type===2?this.Z_=this.Z_.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Z_=this.Z_.insert(n,{type:2,doc:e.doc}):fe():this.Z_=this.Z_.insert(n,e)}X_(){const e=[];return this.Z_.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ni{constructor(e,n,s,r,i,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ni(e,n,pi.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&au(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class WD{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class qD{constructor(){this.queries=F_(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(n,s){const r=_e(n),i=r.queries;r.queries=F_(),i.forEach((o,a)=>{for(const l of a.ta)l.onError(s)})})(this,new oe($.ABORTED,"Firestore shutting down"))}}function F_(){return new Mr(t=>Cw(t),au)}async function tp(t,e){const n=_e(t);let s=3;const r=e.query;let i=n.queries.get(r);i?!i.na()&&e.ra()&&(s=2):(i=new WD,s=e.ra()?0:1);try{switch(s){case 0:i.ea=await n.onListen(r,!0);break;case 1:i.ea=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(o){const a=ep(o,`Initialization of query '${Zr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.ta.push(e),e.sa(n.onlineState),i.ea&&e.oa(i.ea)&&sp(n)}async function np(t,e){const n=_e(t),s=e.query;let r=3;const i=n.queries.get(s);if(i){const o=i.ta.indexOf(e);o>=0&&(i.ta.splice(o,1),i.ta.length===0?r=e.ra()?0:1:!i.na()&&e.ra()&&(r=2))}switch(r){case 0:return n.queries.delete(s),n.onUnlisten(s,!0);case 1:return n.queries.delete(s),n.onUnlisten(s,!1);case 2:return n.onLastRemoteStoreUnlisten(s);default:return}}function KD(t,e){const n=_e(t);let s=!1;for(const r of e){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.ta)a.oa(r)&&(s=!0);o.ea=r}}s&&sp(n)}function zD(t,e,n){const s=_e(t),r=s.queries.get(e);if(r)for(const i of r.ta)i.onError(n);s.queries.delete(e)}function sp(t){t.ia.forEach(e=>{e.next()})}var Pf,U_;(U_=Pf||(Pf={}))._a="default",U_.Cache="cache";class rp{constructor(e,n,s){this.query=e,this.aa=n,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=s||{}}oa(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Ni(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ua?this.la(e)&&(this.aa.next(e),n=!0):this.ha(e,this.onlineState)&&(this.Pa(e),n=!0),this.ca=e,n}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let n=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),n=!0),n}ha(e,n){if(!e.fromCache||!this.ra())return!0;const s=n!=="Offline";return(!this.options.Ta||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}la(e){if(e.docChanges.length>0)return!0;const n=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Pa(e){e=Ni.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Pf.Cache}}/**
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
 */class cI{constructor(e){this.key=e}}class uI{constructor(e){this.key=e}}class GD{constructor(e,n){this.query=e,this.fa=n,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Te(),this.mutatedKeys=Te(),this.ya=Sw(e),this.wa=new pi(this.ya)}get Sa(){return this.fa}ba(e,n){const s=n?n.Da:new V_,r=n?n.wa:this.wa;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,u=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((h,f)=>{const p=r.get(h),m=lu(this.query,f)?f:null,_=!!p&&this.mutatedKeys.has(p.key),y=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let b=!1;p&&m?p.data.isEqual(m.data)?_!==y&&(s.track({type:3,doc:m}),b=!0):this.va(p,m)||(s.track({type:2,doc:m}),b=!0,(l&&this.ya(m,l)>0||u&&this.ya(m,u)<0)&&(a=!0)):!p&&m?(s.track({type:0,doc:m}),b=!0):p&&!m&&(s.track({type:1,doc:p}),b=!0,(l||u)&&(a=!0)),b&&(m?(o=o.add(m),i=y?i.add(h):i.delete(h)):(o=o.delete(h),i=i.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),i=i.delete(h.key),s.track({type:1,doc:h})}return{wa:o,Da:s,ls:a,mutatedKeys:i}}va(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s,r){const i=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const o=e.Da.X_();o.sort((h,f)=>function(m,_){const y=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe()}};return y(m)-y(_)}(h.type,f.type)||this.ya(h.doc,f.doc)),this.Ca(s),r=r!=null&&r;const a=n&&!r?this.Fa():[],l=this.pa.size===0&&this.current&&!r?1:0,u=l!==this.ga;return this.ga=l,o.length!==0||u?{snapshot:new Ni(this.query,e.wa,i,o,e.mutatedKeys,l===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),Ma:a}:{Ma:a}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new V_,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(n=>this.fa=this.fa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.fa=this.fa.delete(n)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Te(),this.wa.forEach(s=>{this.xa(s.key)&&(this.pa=this.pa.add(s.key))});const n=[];return e.forEach(s=>{this.pa.has(s)||n.push(new uI(s))}),this.pa.forEach(s=>{e.has(s)||n.push(new cI(s))}),n}Oa(e){this.fa=e.gs,this.pa=Te();const n=this.ba(e.documents);return this.applyChanges(n,!0)}Na(){return Ni.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const ip="SyncEngine";class QD{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class YD{constructor(e){this.key=e,this.Ba=!1}}class XD{constructor(e,n,s,r,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.La={},this.ka=new Mr(a=>Cw(a),au),this.qa=new Map,this.Qa=new Set,this.$a=new rt(le.comparator),this.Ua=new Map,this.Ka=new qd,this.Wa={},this.Ga=new Map,this.za=ki.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function JD(t,e,n=!0){const s=mI(t);let r;const i=s.ka.get(e);return i?(s.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.Na()):r=await hI(s,e,n,!0),r}async function ZD(t,e){const n=mI(t);await hI(n,e,!0,!1)}async function hI(t,e,n,s){const r=await vD(t.localStore,Un(e)),i=r.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let a;return s&&(a=await ex(t,e,i,o==="current",r.resumeToken)),t.isPrimaryClient&&n&&sI(t.remoteStore,r),a}async function ex(t,e,n,s,r){t.Ha=(f,p,m)=>async function(y,b,O,D){let v=b.view.ba(O);v.ls&&(v=await N_(y.localStore,b.query,!1).then(({documents:I})=>b.view.ba(I,v)));const C=D&&D.targetChanges.get(b.targetId),x=D&&D.targetMismatches.get(b.targetId)!=null,M=b.view.applyChanges(v,y.isPrimaryClient,C,x);return j_(y,b.targetId,M.Ma),M.snapshot}(t,f,p,m);const i=await N_(t.localStore,e,!0),o=new GD(e,i.gs),a=o.ba(i.documents),l=Ca.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",r),u=o.applyChanges(a,t.isPrimaryClient,l);j_(t,n,u.Ma);const h=new QD(e,n,o);return t.ka.set(e,h),t.qa.has(n)?t.qa.get(n).push(e):t.qa.set(n,[e]),u.snapshot}async function tx(t,e,n){const s=_e(t),r=s.ka.get(e),i=s.qa.get(r.targetId);if(i.length>1)return s.qa.set(r.targetId,i.filter(o=>!au(o,e))),void s.ka.delete(e);s.isPrimaryClient?(s.sharedClientState.removeLocalQueryTarget(r.targetId),s.sharedClientState.isActiveQueryTarget(r.targetId)||await Cf(s.localStore,r.targetId,!1).then(()=>{s.sharedClientState.clearQueryState(r.targetId),n&&Qd(s.remoteStore,r.targetId),kf(s,r.targetId)}).catch(Ki)):(kf(s,r.targetId),await Cf(s.localStore,r.targetId,!0))}async function nx(t,e){const n=_e(t),s=n.ka.get(e),r=n.qa.get(s.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(s.targetId),Qd(n.remoteStore,s.targetId))}async function sx(t,e,n){const s=ux(t);try{const r=await function(o,a){const l=_e(o),u=Ze.now(),h=a.reduce((m,_)=>m.add(_.key),Te());let f,p;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let _=gs(),y=Te();return l.ds.getEntries(m,h).next(b=>{_=b,_.forEach((O,D)=>{D.isValidDocument()||(y=y.add(O))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,_)).next(b=>{f=b;const O=[];for(const D of a){const v=vO(D,f.get(D.key).overlayedDocument);v!=null&&O.push(new Lr(D.key,v,Ew(v.value.mapValue),us.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,O,a)}).next(b=>{p=b;const O=b.applyToLocalDocumentSet(f,y);return l.documentOverlayCache.saveOverlays(m,b.batchId,O)})}).then(()=>({batchId:p.batchId,changes:kw(f)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(o,a,l){let u=o.Wa[o.currentUser.toKey()];u||(u=new rt(ye)),u=u.insert(a,l),o.Wa[o.currentUser.toKey()]=u}(s,r.batchId,n),await Pa(s,r.changes),await gu(s.remoteStore)}catch(r){const i=ep(r,"Failed to persist write");n.reject(i)}}async function fI(t,e){const n=_e(t);try{const s=await mD(n.localStore,e);e.targetChanges.forEach((r,i)=>{const o=n.Ua.get(i);o&&(xe(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.Ba=!0:r.modifiedDocuments.size>0?xe(o.Ba):r.removedDocuments.size>0&&(xe(o.Ba),o.Ba=!1))}),await Pa(n,s,e)}catch(s){await Ki(s)}}function B_(t,e,n){const s=_e(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.ka.forEach((i,o)=>{const a=o.view.sa(e);a.snapshot&&r.push(a.snapshot)}),function(o,a){const l=_e(o);l.onlineState=a;let u=!1;l.queries.forEach((h,f)=>{for(const p of f.ta)p.sa(a)&&(u=!0)}),u&&sp(l)}(s.eventManager,e),r.length&&s.La.p_(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function rx(t,e,n){const s=_e(t);s.sharedClientState.updateQueryState(e,"rejected",n);const r=s.Ua.get(e),i=r&&r.key;if(i){let o=new rt(le.comparator);o=o.insert(i,St.newNoDocument(i,pe.min()));const a=Te().add(i),l=new fu(pe.min(),new Map,new rt(ye),o,a);await fI(s,l),s.$a=s.$a.remove(i),s.Ua.delete(e),op(s)}else await Cf(s.localStore,e,!1).then(()=>kf(s,e,n)).catch(Ki)}async function ix(t,e){const n=_e(t),s=e.batch.batchId;try{const r=await gD(n.localStore,e);pI(n,s,null),dI(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await Pa(n,r)}catch(r){await Ki(r)}}async function ox(t,e,n){const s=_e(t);try{const r=await function(o,a){const l=_e(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return l.mutationQueue.lookupMutationBatch(u,a).next(f=>(xe(f!==null),h=f.keys(),l.mutationQueue.removeMutationBatch(u,f))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,h,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>l.localDocuments.getDocuments(u,h))})}(s.localStore,e);pI(s,e,n),dI(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await Pa(s,r)}catch(r){await Ki(r)}}function dI(t,e){(t.Ga.get(e)||[]).forEach(n=>{n.resolve()}),t.Ga.delete(e)}function pI(t,e,n){const s=_e(t);let r=s.Wa[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(n?i.reject(n):i.resolve(),r=r.remove(e)),s.Wa[s.currentUser.toKey()]=r}}function kf(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.qa.get(e))t.ka.delete(s),n&&t.La.Ja(s,n);t.qa.delete(e),t.isPrimaryClient&&t.Ka.br(e).forEach(s=>{t.Ka.containsKey(s)||gI(t,s)})}function gI(t,e){t.Qa.delete(e.path.canonicalString());const n=t.$a.get(e);n!==null&&(Qd(t.remoteStore,n),t.$a=t.$a.remove(e),t.Ua.delete(n),op(t))}function j_(t,e,n){for(const s of n)s instanceof cI?(t.Ka.addReference(s.key,e),ax(t,s)):s instanceof uI?(ee(ip,"Document no longer in limbo: "+s.key),t.Ka.removeReference(s.key,e),t.Ka.containsKey(s.key)||gI(t,s.key)):fe()}function ax(t,e){const n=e.key,s=n.path.canonicalString();t.$a.get(n)||t.Qa.has(s)||(ee(ip,"New document in limbo: "+n),t.Qa.add(s),op(t))}function op(t){for(;t.Qa.size>0&&t.$a.size<t.maxConcurrentLimboResolutions;){const e=t.Qa.values().next().value;t.Qa.delete(e);const n=new le(Xe.fromString(e)),s=t.za.next();t.Ua.set(s,new YD(n)),t.$a=t.$a.insert(n,s),sI(t.remoteStore,new Fs(Un(ou(n.path)),s,"TargetPurposeLimboResolution",nu.ae))}}async function Pa(t,e,n){const s=_e(t),r=[],i=[],o=[];s.ka.isEmpty()||(s.ka.forEach((a,l)=>{o.push(s.Ha(l,e,n).then(u=>{var h;if((u||n)&&s.isPrimaryClient){const f=u?!u.fromCache:(h=n==null?void 0:n.targetChanges.get(l.targetId))===null||h===void 0?void 0:h.current;s.sharedClientState.updateQueryState(l.targetId,f?"current":"not-current")}if(u){r.push(u);const f=zd.Yi(l.targetId,u);i.push(f)}}))}),await Promise.all(o),s.La.p_(r),await async function(l,u){const h=_e(l);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>j.forEach(u,p=>j.forEach(p.Hi,m=>h.persistence.referenceDelegate.addReference(f,p.targetId,m)).next(()=>j.forEach(p.Ji,m=>h.persistence.referenceDelegate.removeReference(f,p.targetId,m)))))}catch(f){if(!zi(f))throw f;ee(Gd,"Failed to update sequence numbers: "+f)}for(const f of u){const p=f.targetId;if(!f.fromCache){const m=h.Ts.get(p),_=m.snapshotVersion,y=m.withLastLimboFreeSnapshotVersion(_);h.Ts=h.Ts.insert(p,y)}}}(s.localStore,i))}async function lx(t,e){const n=_e(t);if(!n.currentUser.isEqual(e)){ee(ip,"User change. New user:",e.toKey());const s=await Zw(n.localStore,e);n.currentUser=e,function(i,o){i.Ga.forEach(a=>{a.forEach(l=>{l.reject(new oe($.CANCELLED,o))})}),i.Ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Pa(n,s.Rs)}}function cx(t,e){const n=_e(t),s=n.Ua.get(e);if(s&&s.Ba)return Te().add(s.key);{let r=Te();const i=n.qa.get(e);if(!i)return r;for(const o of i){const a=n.ka.get(o);r=r.unionWith(a.view.Sa)}return r}}function mI(t){const e=_e(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=fI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=cx.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rx.bind(null,e),e.La.p_=KD.bind(null,e.eventManager),e.La.Ja=zD.bind(null,e.eventManager),e}function ux(t){const e=_e(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ix.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ox.bind(null,e),e}class yc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=du(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,n){return null}nu(e,n){return null}eu(e){return pD(this.persistence,new hD,e.initialUser,this.serializer)}Xa(e){return new Jw(Kd.ri,this.serializer)}Za(e){return new TD}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yc.provider={build:()=>new yc};class hx extends yc{constructor(e){super(),this.cacheSizeBytes=e}tu(e,n){xe(this.persistence.referenceDelegate instanceof mc);const s=this.persistence.referenceDelegate.garbageCollector;return new YO(s,e.asyncQueue,n)}Xa(e){const n=this.cacheSizeBytes!==void 0?Wt.withCacheSize(this.cacheSizeBytes):Wt.DEFAULT;return new Jw(s=>mc.ri(s,n),this.serializer)}}class Nf{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>B_(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=lx.bind(null,this.syncEngine),await $D(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new qD}()}createDatastore(e){const n=du(e.databaseInfo.databaseId),s=function(i){return new AD(i)}(e.databaseInfo);return function(i,o,a,l){return new kD(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return function(s,r,i,o,a){return new OD(s,r,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>B_(this.syncEngine,n,0),function(){return x_.D()?new x_:new wD}())}createSyncEngine(e,n){return function(r,i,o,a,l,u,h){const f=new XD(r,i,o,a,l,u);return h&&(f.ja=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(r){const i=_e(r);ee(Ar,"RemoteStore shutting down."),i.W_.add(5),await Sa(i),i.z_.shutdown(),i.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Nf.provider={build:()=>new Nf};/**
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
 */class ap{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):ps("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const Xs="FirestoreClient";class fx{constructor(e,n,s,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=At.UNAUTHENTICATED,this.clientId=uw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(s,async o=>{ee(Xs,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(s,o=>(ee(Xs,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new cs;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=ep(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function _h(t,e){t.asyncQueue.verifyOperationInProgress(),ee(Xs,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Zw(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function H_(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dx(t);ee(Xs,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(s=>L_(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>L_(e.remoteStore,r)),t._onlineComponents=e}async function dx(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){ee(Xs,"Using user provided OfflineComponentProvider");try{await _h(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(r){return r.name==="FirebaseError"?r.code===$.FAILED_PRECONDITION||r.code===$.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}(n))throw n;Ai("Error using user provided cache. Falling back to memory cache: "+n),await _h(t,new yc)}}else ee(Xs,"Using default OfflineComponentProvider"),await _h(t,new hx(void 0));return t._offlineComponents}async function _I(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(ee(Xs,"Using user provided OnlineComponentProvider"),await H_(t,t._uninitializedComponentsProvider._online)):(ee(Xs,"Using default OnlineComponentProvider"),await H_(t,new Nf))),t._onlineComponents}function px(t){return _I(t).then(e=>e.syncEngine)}async function vc(t){const e=await _I(t),n=e.eventManager;return n.onListen=JD.bind(null,e.syncEngine),n.onUnlisten=tx.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=ZD.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=nx.bind(null,e.syncEngine),n}function gx(t,e,n={}){const s=new cs;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new ap({next:p=>{h.su(),o.enqueueAndForget(()=>np(i,f));const m=p.docs.has(a);!m&&p.fromCache?u.reject(new oe($.UNAVAILABLE,"Failed to get document because the client is offline.")):m&&p.fromCache&&l&&l.source==="server"?u.reject(new oe($.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new rp(ou(a.path),h,{includeMetadataChanges:!0,Ta:!0});return tp(i,f)}(await vc(t),t.asyncQueue,e,n,s)),s.promise}function mx(t,e,n={}){const s=new cs;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,u){const h=new ap({next:p=>{h.su(),o.enqueueAndForget(()=>np(i,f)),p.fromCache&&l.source==="server"?u.reject(new oe($.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),f=new rp(a,h,{includeMetadataChanges:!0,Ta:!0});return tp(i,f)}(await vc(t),t.asyncQueue,e,n,s)),s.promise}/**
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
 */function yI(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const $_=new Map;/**
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
 */function _x(t,e,n){if(!n)throw new oe($.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yx(t,e,n,s){if(e===!0&&s===!0)throw new oe($.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function W_(t){if(!le.isDocumentKey(t))throw new oe($.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function lp(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(s){return s.constructor?s.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":fe()}function jn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new oe($.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lp(t);throw new oe($.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */const vI="firestore.googleapis.com",q_=!0;class K_{constructor(e){var n,s;if(e.host===void 0){if(e.ssl!==void 0)throw new oe($.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=vI,this.ssl=q_}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:q_;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Xw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<GO)throw new oe($.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yI((s=e.experimentalLongPollingOptions)!==null&&s!==void 0?s:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new oe($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new oe($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new oe($.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(s,r){return s.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cp{constructor(e,n,s,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new K_({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new oe($.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new oe($.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new K_(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(s){if(!s)return new bN;switch(s.type){case"firstParty":return new SN(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new oe($.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const s=$_.get(n);s&&(ee("ComponentProvider","Removing Datastore"),$_.delete(n),s.terminate())}(this),Promise.resolve()}}function vx(t,e,n,s={}){var r;const i=(t=jn(t,cp))._getSettings(),o=Object.assign(Object.assign({},i),{emulatorOptions:t._getEmulatorOptions()}),a=`${e}:${n}`;i.host!==vI&&i.host!==a&&Ai("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const l=Object.assign(Object.assign({},i),{host:a,ssl:!1,emulatorOptions:s});if(!na(l,o)&&(t._setSettings(l),s.mockUserToken)){let u,h;if(typeof s.mockUserToken=="string")u=s.mockUserToken,h=At.MOCK_USER;else{u=XP(s.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const f=s.mockUserToken.sub||s.mockUserToken.user_id;if(!f)throw new oe($.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new At(f)}t._authCredentials=new RN(new lw(u,h))}}/**
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
 */class ka{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new ka(this.firestore,e,this._query)}}class nn{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ha(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new nn(this.firestore,e,this._key)}}class ha extends ka{constructor(e,n,s){super(e,n,ou(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new nn(this.firestore,null,new le(e))}withConverter(e){return new ha(this.firestore,e,this._path)}}function P4(t,e,...n){if(t=Bt(t),arguments.length===1&&(e=uw.newId()),_x("doc","path",e),t instanceof cp){const s=Xe.fromString(e,...n);return W_(s),new nn(t,null,new le(s))}{if(!(t instanceof nn||t instanceof ha))throw new oe($.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(Xe.fromString(e,...n));return W_(s),new nn(t.firestore,t instanceof ha?t.converter:null,new le(s))}}/**
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
 */const z_="AsyncQueue";class G_{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new tI(this,"async_queue_retry"),this.Su=()=>{const s=mh();s&&ee(z_,"Visibility state changed to "+s.visibilityState),this.a_.t_()},this.bu=e;const n=mh();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const n=mh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const n=new cs;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!zi(e))throw e;ee(z_,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const n=this.bu.then(()=>(this.pu=!0,e().catch(s=>{this.gu=s,this.pu=!1;const r=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(s);throw ps("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.pu=!1,s))));return this.bu=n,n}enqueueAfterDelay(e,n,s){this.Du(),this.wu.indexOf(e)>-1&&(n=0);const r=Zd.createAndSchedule(this,e,n,s,i=>this.Fu(i));return this.fu.push(r),r}Du(){this.gu&&fe()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const n of this.fu)if(n.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.fu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const n=this.fu.indexOf(e);this.fu.splice(n,1)}}function Q_(t){return function(n,s){if(typeof n!="object"||n===null)return!1;const r=n;for(const i of s)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Oi extends cp{constructor(e,n,s,r){super(e,n,s,r),this.type="firestore",this._queue=new G_,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new G_(e),this._firestoreClient=void 0,await e}}}function Ex(t,e){const n=typeof t=="object"?t:ZT(),s=typeof t=="string"?t:uc,r=XT(n,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=QP("firestore");i&&vx(r,...i)}return r}function mu(t){if(t._terminated)throw new oe($.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Tx(t),t._firestoreClient}function Tx(t){var e,n,s;const r=t._freezeSettings(),i=function(a,l,u,h){return new $N(a,l,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,yI(h.experimentalLongPollingOptions),h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._componentsProvider||!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.localCache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._componentsProvider={_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider}),t._firestoreClient=new fx(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&function(a){const l=a==null?void 0:a._online.build();return{_offline:a==null?void 0:a._offline.build(l),_online:l}}(t._componentsProvider))}/**
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
 */class Di{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Di(Et.fromBase64String(e))}catch(n){throw new oe($.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Di(Et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class _u{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new oe($.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class yu{constructor(e){this._methodName=e}}/**
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
 */class Na{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new oe($.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new oe($.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ye(this._lat,e._lat)||ye(this._long,e._long)}}/**
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
 */class up{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(s,r){if(s.length!==r.length)return!1;for(let i=0;i<s.length;++i)if(s[i]!==r[i])return!1;return!0}(this._values,e._values)}}/**
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
 */const wx=/^__.*__$/;class EI{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function TI(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class hp{constructor(e,n,s,r,i,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Bu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new hp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ku({path:s,Qu:!1});return r.$u(e),r}Uu(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.ku({path:s,Qu:!1});return r.Bu(),r}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ec(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(TI(this.Lu)&&wx.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class Ix{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||du(e)}ju(e,n,s,r=!1){return new hp({Lu:e,methodName:n,zu:s,path:yt.emptyPath(),Qu:!1,Gu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function bx(t){const e=t._freezeSettings(),n=du(t._databaseId);return new Ix(t._databaseId,!!e.ignoreUndefinedProperties,n)}class vu extends yu{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof vu}}class fp extends yu{constructor(e,n){super(e),this.Ju=n}_toFieldTransform(e){const n=new ua(e.serializer,Dw(e.serializer,this.Ju));return new gO(e.path,n)}isEqual(e){return e instanceof fp&&this.Ju===e.Ju}}function Rx(t,e,n,s){const r=t.ju(1,e,n);II("Data must be an object, but it was:",r,s);const i=[],o=Zt.empty();sr(s,(l,u)=>{const h=dp(e,l,n);u=Bt(u);const f=r.Uu(h);if(u instanceof vu)i.push(h);else{const p=Eu(u,f);p!=null&&(i.push(h),o.set(h,p))}});const a=new vn(i);return new EI(o,a,r.fieldTransforms)}function Ax(t,e,n,s,r,i){const o=t.ju(1,e,n),a=[Y_(e,s,n)],l=[r];if(i.length%2!=0)throw new oe($.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<i.length;p+=2)a.push(Y_(e,i[p])),l.push(i[p+1]);const u=[],h=Zt.empty();for(let p=a.length-1;p>=0;--p)if(!Px(u,a[p])){const m=a[p];let _=l[p];_=Bt(_);const y=o.Uu(m);if(_ instanceof vu)u.push(m);else{const b=Eu(_,y);b!=null&&(u.push(m),h.set(m,b))}}const f=new vn(u);return new EI(h,f,o.fieldTransforms)}function Eu(t,e){if(wI(t=Bt(t)))return II("Unsupported field value:",e,t),Cx(t,e);if(t instanceof yu)return function(s,r){if(!TI(r.Lu))throw r.Wu(`${s._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Wu(`${s._methodName}() is not currently supported inside arrays`);const i=s._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(s,r){const i=[];let o=0;for(const a of s){let l=Eu(a,r.Ku(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(s,r){if((s=Bt(s))===null)return{nullValue:"NULL_VALUE"};if(typeof s=="number")return Dw(r.serializer,s);if(typeof s=="boolean")return{booleanValue:s};if(typeof s=="string")return{stringValue:s};if(s instanceof Date){const i=Ze.fromDate(s);return{timestampValue:gc(r.serializer,i)}}if(s instanceof Ze){const i=new Ze(s.seconds,1e3*Math.floor(s.nanoseconds/1e3));return{timestampValue:gc(r.serializer,i)}}if(s instanceof Na)return{geoPointValue:{latitude:s.latitude,longitude:s.longitude}};if(s instanceof Di)return{bytesValue:Ww(r.serializer,s._byteString)};if(s instanceof nn){const i=r.databaseId,o=s.firestore._databaseId;if(!o.isEqual(i))throw r.Wu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wd(s.firestore._databaseId||r.databaseId,s._key.path)}}if(s instanceof up)return function(o,a){return{mapValue:{fields:{[yw]:{stringValue:vw},[hc]:{arrayValue:{values:o.toArray().map(u=>{if(typeof u!="number")throw a.Wu("VectorValues must only contain numeric values.");return jd(a.serializer,u)})}}}}}}(s,r);throw r.Wu(`Unsupported field value: ${lp(s)}`)}(t,e)}function Cx(t,e){const n={};return fw(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):sr(t,(s,r)=>{const i=Eu(r,e.qu(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function wI(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ze||t instanceof Na||t instanceof Di||t instanceof nn||t instanceof yu||t instanceof up)}function II(t,e,n){if(!wI(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const s=lp(n);throw s==="an object"?e.Wu(t+" a custom object"):e.Wu(t+" "+s)}}function Y_(t,e,n){if((e=Bt(e))instanceof _u)return e._internalPath;if(typeof e=="string")return dp(t,e);throw Ec("Field path arguments must be of type string or ",t,!1,void 0,n)}const Sx=new RegExp("[~\\*/\\[\\]]");function dp(t,e,n){if(e.search(Sx)>=0)throw Ec(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new _u(...e.split("."))._internalPath}catch{throw Ec(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ec(t,e,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new oe($.INVALID_ARGUMENT,a+t+l)}function Px(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class bI{constructor(e,n,s,r,i){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new nn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new kx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(RI("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class kx extends bI{data(){return super.data()}}function RI(t,e){return typeof e=="string"?dp(t,e):e instanceof _u?e._internalPath:e._delegate._internalPath}/**
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
 */function AI(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new oe($.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Nx{convertValue(e,n="none"){switch(Qs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Gs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw fe()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const s={};return sr(e,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertVectorValue(e){var n,s,r;const i=(r=(s=(n=e.fields)===null||n===void 0?void 0:n[hc].arrayValue)===null||s===void 0?void 0:s.values)===null||r===void 0?void 0:r.map(o=>Je(o.doubleValue));return new up(i)}convertGeoPoint(e){return new Na(Je(e.latitude),Je(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=ru(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(ia(e));default:return null}}convertTimestamp(e){const n=zs(e);return new Ze(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=Xe.fromString(e);xe(Yw(s));const r=new oa(s.get(1),s.get(3)),i=new le(s.popFirst(5));return r.isEqual(n)||ps(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */class So{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class CI extends bI{constructor(e,n,s,r,i,o){super(e,n,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new xl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(RI("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class xl extends CI{data(e={}){return super.data(e)}}class SI{constructor(e,n,s,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new So(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new xl(this._firestore,this._userDataWriter,s.key,s,new So(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new oe($.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map(a=>{const l=new xl(r._firestore,r._userDataWriter,a.doc.key,a.doc,new So(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new xl(r._firestore,r._userDataWriter,a.doc.key,a.doc,new So(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,h=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:Ox(a.type),doc:l,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ox(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe()}}/**
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
 */function PI(t){t=jn(t,nn);const e=jn(t.firestore,Oi);return gx(mu(e),t._key).then(n=>kI(e,t,n))}class pp extends Nx{constructor(e){super(),this.firestore=e}convertBytes(e){return new Di(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new nn(this.firestore,null,n)}}function Dx(t){t=jn(t,ka);const e=jn(t.firestore,Oi),n=mu(e),s=new pp(e);return AI(t._query),mx(n,t._query).then(r=>new SI(e,s,t,r))}function k4(t,e,n,...s){t=jn(t,nn);const r=jn(t.firestore,Oi),i=bx(r);let o;return o=typeof(e=Bt(e))=="string"||e instanceof _u?Ax(i,"updateDoc",t._key,e,n,s):Rx(i,"updateDoc",t._key,e),xx(r,[o.toMutation(t._key,us.exists(!0))])}function gp(t,...e){var n,s,r;t=Bt(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Q_(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Q_(e[o])){const f=e[o];e[o]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[o+1]=(s=f.error)===null||s===void 0?void 0:s.bind(f),e[o+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let l,u,h;if(t instanceof nn)u=jn(t.firestore,Oi),h=ou(t._key.path),l={next:f=>{e[o]&&e[o](kI(u,t,f))},error:e[o+1],complete:e[o+2]};else{const f=jn(t,ka);u=jn(f.firestore,Oi),h=f._query;const p=new pp(u);l={next:m=>{e[o]&&e[o](new SI(u,p,f,m))},error:e[o+1],complete:e[o+2]},AI(t._query)}return function(p,m,_,y){const b=new ap(y),O=new rp(m,b,_);return p.asyncQueue.enqueueAndForget(async()=>tp(await vc(p),O)),()=>{b.su(),p.asyncQueue.enqueueAndForget(async()=>np(await vc(p),O))}}(mu(u),h,a,l)}function xx(t,e){return function(s,r){const i=new cs;return s.asyncQueue.enqueueAndForget(async()=>sx(await px(s),r,i)),i.promise}(mu(t),e)}function kI(t,e,n){const s=n.docs.get(e._key),r=new pp(t);return new CI(t,r,e._key,s,new So(n.hasPendingWrites,n.fromCache),e.converter)}function N4(t){return new fp("increment",t)}(function(e,n=!0){(function(r){qi=r})(nr),$n(new Sn("firestore",(s,{instanceIdentifier:r,options:i})=>{const o=s.getProvider("app").getImmediate(),a=new Oi(new AN(s.getProvider("auth-internal")),new PN(o,s.getProvider("app-check-internal")),function(u,h){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new oe($.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new oa(u.options.projectId,h)}(o,r),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),tn(t_,n_,e),tn(t_,n_,"esm2017")})();function X_(t){const e=Lx(t),n=new ArrayBuffer(e.length),s=new DataView(n);for(let r=0;r<n.byteLength;r++)s.setUint8(r,e.charCodeAt(r));return n}const Mx="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Lx(t){t.length%4===0&&(t=t.replace(/==?$/,""));let e="",n=0,s=0;for(let r=0;r<t.length;r++)n<<=6,n|=Mx.indexOf(t[r]),s+=6,s===24&&(e+=String.fromCharCode((n&16711680)>>16),e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255),n=s=0);return s===12?(n>>=4,e+=String.fromCharCode(n)):s===18&&(n>>=2,e+=String.fromCharCode((n&65280)>>8),e+=String.fromCharCode(n&255)),e}const Vx=-1,Fx=-2,Ux=-3,Bx=-4,jx=-5,Hx=-6;function $x(t,e){return Wx(JSON.parse(t),e)}function Wx(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,s=Array(n.length);function r(i,o=!1){if(i===Vx)return;if(i===Ux)return NaN;if(i===Bx)return 1/0;if(i===jx)return-1/0;if(i===Hx)return-0;if(o)throw new Error("Invalid input");if(i in s)return s[i];const a=n[i];if(!a||typeof a!="object")s[i]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],u=e==null?void 0:e[l];if(u)return s[i]=u(r(a[1]));switch(l){case"Date":s[i]=new Date(a[1]);break;case"Set":const h=new Set;s[i]=h;for(let m=1;m<a.length;m+=1)h.add(r(a[m]));break;case"Map":const f=new Map;s[i]=f;for(let m=1;m<a.length;m+=2)f.set(r(a[m]),r(a[m+1]));break;case"RegExp":s[i]=new RegExp(a[1],a[2]);break;case"Object":s[i]=Object(a[1]);break;case"BigInt":s[i]=BigInt(a[1]);break;case"null":const p=Object.create(null);s[i]=p;for(let m=1;m<a.length;m+=2)p[a[m]]=r(a[m+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const m=globalThis[l],_=a[1],y=X_(_),b=new m(y);s[i]=b;break}case"ArrayBuffer":{const m=a[1],_=X_(m);s[i]=_;break}default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);s[i]=l;for(let u=0;u<a.length;u+=1){const h=a[u];h!==Fx&&(l[u]=r(h))}}else{const l={};s[i]=l;for(const u in a){const h=a[u];l[u]=r(h)}}return s[i]}return r(0)}const qx=new Set(["link","style","script","noscript"]),Kx=new Set(["title","titleTemplate","script","style","noscript"]),J_=new Set(["base","meta","link","style","script","noscript"]),zx=new Set(["title","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"]),Gx=new Set(["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"]),Qx=new Set(["key","tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent","processTemplateParams"]),Yx=new Set(["templateParams","htmlAttrs","bodyAttrs"]),Xx=new Set(["theme-color","google-site-verification","og","article","book","profile","twitter","author"]),Jx=["name","property","http-equiv"];function NI(t){const e=t.split(":")[1];return Xx.has(e)}function Of(t){const{props:e,tag:n}=t;if(Gx.has(n))return n;if(n==="link"&&e.rel==="canonical")return"canonical";if(e.charset)return"charset";if(t.tag==="meta"){for(const s of Jx)if(e[s]!==void 0)return`${n}:${e[s]}`}if(t.key)return`${n}:key:${t.key}`;if(e.id)return`${n}:id:${e.id}`;if(Kx.has(n)){const s=t.textContent||t.innerHTML;if(s)return`${n}:content:${s}`}}function Z_(t){const e=t._h||t._d;if(e)return e;const n=t.textContent||t.innerHTML;return n||`${t.tag}:${Object.entries(t.props).map(([s,r])=>`${s}:${String(r)}`).join(",")}`}function Tc(t,e,n){typeof t==="function"&&(!n||n!=="titleTemplate"&&!(n[0]==="o"&&n[1]==="n"))&&(t=t());let r;if(e&&(r=e(n,t)),Array.isArray(r))return r.map(i=>Tc(i,e));if((r==null?void 0:r.constructor)===Object){const i={};for(const o of Object.keys(r))i[o]=Tc(r[o],e,o);return i}return r}function Zx(t,e){const n=t==="style"?new Map:new Set;function s(r){const i=r.trim();if(i)if(t==="style"){const[o,...a]=i.split(":").map(l=>l.trim());o&&a.length&&n.set(o,a.join(":"))}else i.split(" ").filter(Boolean).forEach(o=>n.add(o))}return typeof e=="string"?t==="style"?e.split(";").forEach(s):s(e):Array.isArray(e)?e.forEach(r=>s(r)):e&&typeof e=="object"&&Object.entries(e).forEach(([r,i])=>{i&&i!=="false"&&(t==="style"?n.set(r.trim(),i):s(r))}),n}function OI(t,e){return t.props=t.props||{},e&&Object.entries(e).forEach(([n,s])=>{if(s===null){t.props[n]=null;return}if(n==="class"||n==="style"){t.props[n]=Zx(n,s);return}if(Qx.has(n)){if(["textContent","innerHTML"].includes(n)&&typeof s=="object"){let o=e.type;if(e.type||(o="application/json"),!(o!=null&&o.endsWith("json"))&&o!=="speculationrules")return;e.type=o,t.props.type=o,t[n]=JSON.stringify(s)}else t[n]=s;return}const r=String(s),i=n.startsWith("data-");r==="true"||r===""?t.props[n]=i?r:!0:!s&&i&&r==="false"?t.props[n]="false":s!==void 0&&(t.props[n]=s)}),t}function eM(t,e){const n=typeof e=="object"&&typeof e!="function"?e:{[t==="script"||t==="noscript"||t==="style"?"innerHTML":"textContent"]:e},s=OI({tag:t,props:{}},n);return s.key&&qx.has(s.tag)&&(s.props["data-hid"]=s._h=s.key),s.tag==="script"&&typeof s.innerHTML=="object"&&(s.innerHTML=JSON.stringify(s.innerHTML),s.props.type=s.props.type||"application/json"),Array.isArray(s.props.content)?s.props.content.map(r=>({...s,props:{...s.props,content:r}})):s}function tM(t,e){if(!t)return[];typeof t=="function"&&(t=t());const n=(r,i)=>{for(let o=0;o<e.length;o++)i=e[o](r,i);return i};t=n(void 0,t);const s=[];return t=Tc(t,n),Object.entries(t||{}).forEach(([r,i])=>{if(i!==void 0)for(const o of Array.isArray(i)?i:[i])s.push(eM(r,o))}),s.flat()}const ey=(t,e)=>t._w===e._w?t._p-e._p:t._w-e._w,ty={base:-10,title:10},nM={critical:-8,high:-1,low:2},ny={meta:{"content-security-policy":-30,charset:-20,viewport:-15},link:{preconnect:20,stylesheet:60,preload:70,modulepreload:70,prefetch:90,"dns-prefetch":90,prerender:90},script:{async:30,defer:80,sync:50},style:{imported:40,sync:60}},sM=/@import/,go=t=>t===""||t===!0;function rM(t,e){var i;if(typeof e.tagPriority=="number")return e.tagPriority;let n=100;const s=nM[e.tagPriority]||0,r=t.resolvedOptions.disableCapoSorting?{link:{},script:{},style:{}}:ny;if(e.tag in ty)n=ty[e.tag];else if(e.tag==="meta"){const o=e.props["http-equiv"]==="content-security-policy"?"content-security-policy":e.props.charset?"charset":e.props.name==="viewport"?"viewport":null;o&&(n=ny.meta[o])}else e.tag==="link"&&e.props.rel?n=r.link[e.props.rel]:e.tag==="script"?go(e.props.async)?n=r.script.async:e.props.src&&!go(e.props.defer)&&!go(e.props.async)&&e.props.type!=="module"&&!((i=e.props.type)!=null&&i.endsWith("json"))?n=r.script.sync:go(e.props.defer)&&e.props.src&&!go(e.props.async)&&(n=r.script.defer):e.tag==="style"&&(n=e.innerHTML&&sM.test(e.innerHTML)?r.style.imported:r.style.sync);return(n||100)+s}function sy(t,e){const n=typeof e=="function"?e(t):e,s=n.key||String(t.plugins.size+1);t.plugins.get(s)||(t.plugins.set(s,n),t.hooks.addHooks(n.hooks||{}))}function iM(t={}){var a;const e=kT();e.addHooks(t.hooks||{});const n=!t.document,s=new Map,r=new Map,i=[],o={_entryCount:1,plugins:r,dirty:!1,resolvedOptions:t,hooks:e,ssr:n,entries:s,headEntries(){return[...s.values()]},use:l=>sy(o,l),push(l,u){const h={...u||{}};delete h.head;const f=h._index??o._entryCount++,p={_i:f,input:l,options:h},m={_poll(_=!1){o.dirty=!0,!_&&i.push(f),e.callHook("entries:updated",o)},dispose(){s.delete(f)&&m._poll(!0)},patch(_){(!h.mode||h.mode==="server"&&n||h.mode==="client"&&!n)&&(p.input=_,s.set(f,p),m._poll())}};return m.patch(l),m},async resolveTags(){var m;const l={tagMap:new Map,tags:[],entries:[...o.entries.values()]};for(await e.callHook("entries:resolve",l);i.length;){const _=i.shift(),y=s.get(_);if(y){const b={tags:tM(y.input,t.propResolvers||[]).map(O=>Object.assign(O,y.options)),entry:y};await e.callHook("entries:normalize",b),y._tags=b.tags.map((O,D)=>(O._w=rM(o,O),O._p=(y._i<<10)+D,O._d=Of(O),O))}}let u=!1;l.entries.flatMap(_=>(_._tags||[]).map(y=>({...y,props:{...y.props}}))).sort(ey).reduce((_,y)=>{const b=String(y._d||y._p);if(!_.has(b))return _.set(b,y);const O=_.get(b);if(((y==null?void 0:y.tagDuplicateStrategy)||(Yx.has(y.tag)?"merge":null)||(y.key&&y.key===O.key?"merge":null))==="merge"){const v={...O.props};Object.entries(y.props).forEach(([C,x])=>v[C]=C==="style"?new Map([...O.props.style||new Map,...x]):C==="class"?new Set([...O.props.class||new Set,...x]):x),_.set(b,{...y,props:v})}else y._p>>10===O._p>>10&&NI(y._d)?(_.set(b,Object.assign([...Array.isArray(O)?O:[O],y],y)),u=!0):(y._w===O._w?y._p>O._p:(y==null?void 0:y._w)<(O==null?void 0:O._w))&&_.set(b,y);return _},l.tagMap);const h=l.tagMap.get("title"),f=l.tagMap.get("titleTemplate");if(o._title=h==null?void 0:h.textContent,f){const _=f==null?void 0:f.textContent;if(o._titleTemplate=_,_){let y=typeof _=="function"?_(h==null?void 0:h.textContent):_;typeof y=="string"&&!o.plugins.has("template-params")&&(y=y.replace("%s",(h==null?void 0:h.textContent)||"")),h?y===null?l.tagMap.delete("title"):l.tagMap.set("title",{...h,textContent:y}):(f.tag="title",f.textContent=y)}}l.tags=Array.from(l.tagMap.values()),u&&(l.tags=l.tags.flat().sort(ey)),await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l);const p=[];for(const _ of l.tags){const{innerHTML:y,tag:b,props:O}=_;if(zx.has(b)&&!(Object.keys(O).length===0&&!_.innerHTML&&!_.textContent)&&!(b==="meta"&&!O.content&&!O["http-equiv"]&&!O.charset)){if(b==="script"&&y){if((m=O.type)!=null&&m.endsWith("json")){const D=typeof y=="string"?y:JSON.stringify(y);_.innerHTML=D.replace(/</g,"\\u003C")}else typeof y=="string"&&(_.innerHTML=y.replace(new RegExp(`</${b}`,"g"),`<\\/${b}`));_._d=Of(_)}p.push(_)}}return p}};return((t==null?void 0:t.plugins)||[]).forEach(l=>sy(o,l)),o.hooks.callHook("init",o),(a=t.init)==null||a.forEach(l=>l&&o.push(l)),o}const oM=(t,e)=>nt(e)?Dn(e):e,DI="usehead";function aM(t){return{install(n){n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(DI,t)}}.install}function lM(){if(bd()){const t=vt(DI);if(!t)throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.");return t}throw new Error("useHead() was called without provide context, ensure you call it through the setup() function.")}function O4(t,e={}){const n=e.head||lM();return n.ssr?n.push(t||{},e):cM(n,t,e)}function cM(t,e,n={}){const s=Gt(!1);let r;return uC(()=>{const o=s.value?{}:Tc(e,oM);r?r.patch(o):r=t.push(o,n)}),ba()&&(Ia(()=>{r.dispose()}),OE(()=>{s.value=!0}),NE(()=>{s.value=!1})),r}const uM="modulepreload",hM=function(t,e){return new URL(t,e).href},ry={},Ir=function(e,n,s){let r=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),l=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(n.map(u=>{if(u=hM(u,s),u in ry)return;ry[u]=!0;const h=u.endsWith(".css"),f=h?'[rel="stylesheet"]':"";if(!!s)for(let _=o.length-1;_>=0;_--){const y=o[_];if(y.href===u&&(!h||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${f}`))return;const m=document.createElement("link");if(m.rel=h?"stylesheet":uM,h||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),h)return new Promise((_,y)=>{m.addEventListener("load",_),m.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return e().catch(i)})};let Ml,Ll;function fM(){return Ml=$fetch(Od(`builds/meta/${ji().app.buildId}.json`),{responseType:"json"}),Ml.then(t=>{Ll=kP(t.matcher)}).catch(t=>{console.error("[nuxt] Error fetching app manifest.",t)}),Ml}function Tu(){return Ml||fM()}async function mp(t){const e=typeof t=="string"?t:t.path;if(await Tu(),!Ll)return console.error("[nuxt] Error creating app manifest matcher.",Ll),{};try{return LT({},...Ll.matchAll(e).reverse())}catch(n){return console.error("[nuxt] Error matching route rules.",n),{}}}async function iy(t,e={}){if(!await MI(t))return null;const s=await pM(t,e);return await xI(s)||null}const dM="_payload.json";async function pM(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||xr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const s=ji(),r=e.hash||(e.fresh?Date.now():s.app.buildId),i=s.app.cdnURL,o=i&&await MI(t)?i:s.app.baseURL;return Nd(o,n.pathname,dM+(r?`?${r}`:""))}async function xI(t){const e=fetch(t,{cache:"force-cache"}).then(n=>n.text().then(LI));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function MI(t=FT().path){const e=st();return t=kd(t),(await Tu()).prerendered.includes(t)?!0:e.runWithContext(async()=>{const s=await mp({path:t});return!!s.prerender&&!s.redirect})}let hr=null;async function gM(){var s;if(hr)return hr;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await LI(t.textContent||""),n=t.dataset.src?await xI(t.dataset.src):void 0;return hr={...e,...n,...window.__NUXT__},(s=hr.config)!=null&&s.public&&(hr.config.public=_s(hr.config.public)),hr}async function LI(t){return await $x(t,st()._payloadRevivers)}function Vl(t,e){st()._payloadRevivers[t]=e}const mM=CP(()=>{Vl("FirebaseTimestamp",t=>Uh(new Ze(t.seconds,t.nanoseconds))),Vl("FirebaseGeoPoint",t=>Uh(new Na(t.latitude,t.longitude))),Vl("DocumentData",t=>{const e=typeof t=="string"?JSON.parse(t):t,n=e.id;return delete e.id,Object.defineProperty(e,"id",{value:n})})}),_M=[["NuxtError",t=>Jc(t)],["EmptyShallowRef",t=>Ei(t==="_"?void 0:t==="0n"?BigInt(0):ec(t))],["EmptyRef",t=>Gt(t==="_"?void 0:t==="0n"?BigInt(0):ec(t))],["ShallowRef",t=>Ei(t)],["ShallowReactive",t=>is(t)],["Ref",t=>Gt(t)],["Reactive",t=>_s(t)]],yM=jt({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const[s,r]of _M)Vl(s,r);Object.assign(t.payload,([e,n]=di(()=>t.runWithContext(gM)),e=await e,n(),e)),window.__NUXT__=t.payload}});async function _p(t,e={}){const n=e.document||t.resolvedOptions.document;if(!n||!t.dirty)return;const s={shouldRender:!0,tags:[]};if(await t.hooks.callHook("dom:beforeRender",s),!!s.shouldRender)return t._domUpdatePromise||(t._domUpdatePromise=new Promise(async r=>{var m;const i=new Map,o=new Promise(_=>{t.resolveTags().then(y=>{_(y.map(b=>{const O=i.get(b._d)||0,D={tag:b,id:(O?`${b._d}:${O}`:b._d)||Z_(b),shouldRender:!0};return b._d&&NI(b._d)&&i.set(b._d,O+1),D}))})});let a=t._dom;if(!a){a={title:n.title,elMap:new Map().set("htmlAttrs",n.documentElement).set("bodyAttrs",n.body)};for(const _ of["body","head"]){const y=(m=n[_])==null?void 0:m.children;for(const b of y){const O=b.tagName.toLowerCase();if(!J_.has(O))continue;const D=OI({tag:O,props:{}},{innerHTML:b.innerHTML,...b.getAttributeNames().reduce((v,C)=>(v[C]=b.getAttribute(C),v),{})||{}});if(D.key=b.getAttribute("data-hid")||void 0,D._d=Of(D)||Z_(D),a.elMap.has(D._d)){let v=1,C=D._d;for(;a.elMap.has(C);)C=`${D._d}:${v++}`;a.elMap.set(C,b)}else a.elMap.set(D._d,b)}}}a.pendingSideEffects={...a.sideEffects},a.sideEffects={};function l(_,y,b){const O=`${_}:${y}`;a.sideEffects[O]=b,delete a.pendingSideEffects[O]}function u({id:_,$el:y,tag:b}){const O=b.tag.endsWith("Attrs");a.elMap.set(_,y),O||(b.textContent&&b.textContent!==y.textContent&&(y.textContent=b.textContent),b.innerHTML&&b.innerHTML!==y.innerHTML&&(y.innerHTML=b.innerHTML),l(_,"el",()=>{y==null||y.remove(),a.elMap.delete(_)}));for(const D in b.props){if(!Object.prototype.hasOwnProperty.call(b.props,D))continue;const v=b.props[D];if(D.startsWith("on")&&typeof v=="function"){const x=y==null?void 0:y.dataset;if(x&&x[`${D}fired`]){const M=D.slice(0,-5);v.call(y,new Event(M.substring(2)))}y.getAttribute(`data-${D}`)!==""&&((b.tag==="bodyAttrs"?n.defaultView:y).addEventListener(D.substring(2),v.bind(y)),y.setAttribute(`data-${D}`,""));continue}const C=`attr:${D}`;if(D==="class"){if(!v)continue;for(const x of v)O&&l(_,`${C}:${x}`,()=>y.classList.remove(x)),!y.classList.contains(x)&&y.classList.add(x)}else if(D==="style"){if(!v)continue;for(const[x,M]of v)l(_,`${C}:${x}`,()=>{y.style.removeProperty(x)}),y.style.setProperty(x,M)}else v!==!1&&v!==null&&(y.getAttribute(D)!==v&&y.setAttribute(D,v===!0?"":String(v)),O&&l(_,C,()=>y.removeAttribute(D)))}}const h=[],f={bodyClose:void 0,bodyOpen:void 0,head:void 0},p=await o;for(const _ of p){const{tag:y,shouldRender:b,id:O}=_;if(b){if(y.tag==="title"){n.title=y.textContent,l("title","",()=>n.title=a.title);continue}_.$el=_.$el||a.elMap.get(O),_.$el?u(_):J_.has(y.tag)&&h.push(_)}}for(const _ of h){const y=_.tag.tagPosition||"head";_.$el=n.createElement(_.tag.tag),u(_),f[y]=f[y]||n.createDocumentFragment(),f[y].appendChild(_.$el)}for(const _ of p)await t.hooks.callHook("dom:renderTag",_,n,l);f.head&&n.head.appendChild(f.head),f.bodyOpen&&n.body.insertBefore(f.bodyOpen,n.body.firstChild),f.bodyClose&&n.body.appendChild(f.bodyClose);for(const _ in a.pendingSideEffects)a.pendingSideEffects[_]();t._dom=a,await t.hooks.callHook("dom:rendered",{renders:p}),r()}).finally(()=>{t._domUpdatePromise=void 0,t.dirty=!1})),t._domUpdatePromise}function vM(t={}){var s,r,i;const e=((s=t.domOptions)==null?void 0:s.render)||_p;t.document=t.document||(typeof window<"u"?document:void 0);const n=((i=(r=t.document)==null?void 0:r.head.querySelector('script[id="unhead:payload"]'))==null?void 0:i.innerHTML)||!1;return iM({...t,plugins:[...t.plugins||[],{key:"client",hooks:{"entries:updated":e}}],init:[n?JSON.parse(n):!1,...t.init||[]]})}function EM(t,e){let n=0;return()=>{const s=++n;e(()=>{n===s&&t()})}}function TM(t={}){const e=vM({domOptions:{render:EM(()=>_p(e),Ta)},...t});return e.install=aM(e),e}const wM={disableDefaults:!0},IM=jt({name:"nuxt:head",enforce:"pre",setup(t){const e=TM(wM);t.vueApp.use(e);{let n=!0;const s=async()=>{n=!1,await _p(e)};e.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||s()}),t.hooks.hook("app:error",s),t.hooks.hook("app:suspense:resolve",s)}}});/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ni=typeof document<"u";function VI(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function bM(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&VI(t.default)}const Ne=Object.assign;function yh(t,e){const n={};for(const s in e){const r=e[s];n[s]=Pn(r)?r.map(t):t(r)}return n}const Bo=()=>{},Pn=Array.isArray,FI=/#/g,RM=/&/g,AM=/\//g,CM=/=/g,SM=/\?/g,UI=/\+/g,PM=/%5B/g,kM=/%5D/g,BI=/%5E/g,NM=/%60/g,jI=/%7B/g,OM=/%7C/g,HI=/%7D/g,DM=/%20/g;function yp(t){return encodeURI(""+t).replace(OM,"|").replace(PM,"[").replace(kM,"]")}function xM(t){return yp(t).replace(jI,"{").replace(HI,"}").replace(BI,"^")}function Df(t){return yp(t).replace(UI,"%2B").replace(DM,"+").replace(FI,"%23").replace(RM,"%26").replace(NM,"`").replace(jI,"{").replace(HI,"}").replace(BI,"^")}function MM(t){return Df(t).replace(CM,"%3D")}function LM(t){return yp(t).replace(FI,"%23").replace(SM,"%3F")}function VM(t){return t==null?"":LM(t).replace(AM,"%2F")}function fa(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const FM=/\/$/,UM=t=>t.replace(FM,"");function vh(t,e,n="/"){let s,r={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),r=t(i)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=$M(s??e,n),{fullPath:s+(i&&"?")+i+o,path:s,query:r,hash:fa(o)}}function BM(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function oy(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function jM(t,e,n){const s=e.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&xi(e.matched[s],n.matched[r])&&$I(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function xi(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function $I(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!HM(t[n],e[n]))return!1;return!0}function HM(t,e){return Pn(t)?ay(t,e):Pn(e)?ay(e,t):t===e}function ay(t,e){return Pn(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function $M(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),r=s[s.length-1];(r===".."||r===".")&&s.push("");let i=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+s.slice(o).join("/")}const gn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var da;(function(t){t.pop="pop",t.push="push"})(da||(da={}));var jo;(function(t){t.back="back",t.forward="forward",t.unknown=""})(jo||(jo={}));function WM(t){if(!t)if(ni){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),UM(t)}const qM=/^[^#]+#/;function KM(t,e){return t.replace(qM,"#")+e}function zM(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const wu=()=>({left:window.scrollX,top:window.scrollY});function GM(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=zM(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ly(t,e){return(history.state?history.state.position-e:-1)+t}const xf=new Map;function QM(t,e){xf.set(t,e)}function YM(t){const e=xf.get(t);return xf.delete(t),e}let XM=()=>location.protocol+"//"+location.host;function WI(t,e){const{pathname:n,search:s,hash:r}=e,i=t.indexOf("#");if(i>-1){let a=r.includes(t.slice(i))?t.slice(i).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),oy(l,"")}return oy(n,t)+s+r}function JM(t,e,n,s){let r=[],i=[],o=null;const a=({state:p})=>{const m=WI(t,location),_=n.value,y=e.value;let b=0;if(p){if(n.value=m,e.value=p,o&&o===_){o=null;return}b=y?p.position-y.position:0}else s(m);r.forEach(O=>{O(n.value,_,{delta:b,type:da.pop,direction:b?b>0?jo.forward:jo.back:jo.unknown})})};function l(){o=n.value}function u(p){r.push(p);const m=()=>{const _=r.indexOf(p);_>-1&&r.splice(_,1)};return i.push(m),m}function h(){const{history:p}=window;p.state&&p.replaceState(Ne({},p.state,{scroll:wu()}),"")}function f(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",h,{passive:!0}),{pauseListeners:l,listen:u,destroy:f}}function cy(t,e,n,s=!1,r=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:r?wu():null}}function ZM(t){const{history:e,location:n}=window,s={value:WI(t,n)},r={value:e.state};r.value||i(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,h){const f=t.indexOf("#"),p=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:XM()+t+l;try{e[h?"replaceState":"pushState"](u,"",p),r.value=u}catch(m){console.error(m),n[h?"replace":"assign"](p)}}function o(l,u){const h=Ne({},e.state,cy(r.value.back,l,r.value.forward,!0),u,{position:r.value.position});i(l,h,!0),s.value=l}function a(l,u){const h=Ne({},r.value,e.state,{forward:l,scroll:wu()});i(h.current,h,!0);const f=Ne({},cy(s.value,l,null),{position:h.position+1},u);i(l,f,!1),s.value=l}return{location:s,state:r,push:a,replace:o}}function e1(t){t=WM(t);const e=ZM(t),n=JM(t,e.state,e.location,e.replace);function s(i,o=!0){o||n.pauseListeners(),history.go(i)}const r=Ne({location:"",base:t,go:s,createHref:KM.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function t1(t){return typeof t=="string"||t&&typeof t=="object"}function qI(t){return typeof t=="string"||typeof t=="symbol"}const KI=Symbol("");var uy;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(uy||(uy={}));function Mi(t,e){return Ne(new Error,{type:t,[KI]:!0},e)}function es(t,e){return t instanceof Error&&KI in t&&(e==null||!!(t.type&e))}const hy="[^/]+?",n1={sensitive:!1,strict:!1,start:!0,end:!0},s1=/[.+*?^${}()[\]/\\]/g;function r1(t,e){const n=Ne({},n1,e),s=[];let r=n.start?"^":"";const i=[];for(const u of t){const h=u.length?[]:[90];n.strict&&!u.length&&(r+="/");for(let f=0;f<u.length;f++){const p=u[f];let m=40+(n.sensitive?.25:0);if(p.type===0)f||(r+="/"),r+=p.value.replace(s1,"\\$&"),m+=40;else if(p.type===1){const{value:_,repeatable:y,optional:b,regexp:O}=p;i.push({name:_,repeatable:y,optional:b});const D=O||hy;if(D!==hy){m+=10;try{new RegExp(`(${D})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${_}" (${D}): `+C.message)}}let v=y?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;f||(v=b&&u.length<2?`(?:/${v})`:"/"+v),b&&(v+="?"),r+=v,m+=20,b&&(m+=-8),y&&(m+=-20),D===".*"&&(m+=-50)}h.push(m)}s.push(h)}if(n.strict&&n.end){const u=s.length-1;s[u][s[u].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&!r.endsWith("/")&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(u){const h=u.match(o),f={};if(!h)return null;for(let p=1;p<h.length;p++){const m=h[p]||"",_=i[p-1];f[_.name]=m&&_.repeatable?m.split("/"):m}return f}function l(u){let h="",f=!1;for(const p of t){(!f||!h.endsWith("/"))&&(h+="/"),f=!1;for(const m of p)if(m.type===0)h+=m.value;else if(m.type===1){const{value:_,repeatable:y,optional:b}=m,O=_ in u?u[_]:"";if(Pn(O)&&!y)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const D=Pn(O)?O.join("/"):O;if(!D)if(b)p.length<2&&(h.endsWith("/")?h=h.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);h+=D}}return h||"/"}return{re:o,score:s,keys:i,parse:a,stringify:l}}function i1(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function zI(t,e){let n=0;const s=t.score,r=e.score;for(;n<s.length&&n<r.length;){const i=i1(s[n],r[n]);if(i)return i;n++}if(Math.abs(r.length-s.length)===1){if(fy(s))return 1;if(fy(r))return-1}return r.length-s.length}function fy(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const o1={type:0,value:""},a1=/[a-zA-Z0-9_]/;function l1(t){if(!t)return[[]];if(t==="/")return[[o1]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${u}": ${m}`)}let n=0,s=n;const r=[];let i;function o(){i&&r.push(i),i=[]}let a=0,l,u="",h="";function f(){u&&(n===0?i.push({type:0,value:u}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:h,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function p(){u+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(u&&f(),o()):l===":"?(f(),n=1):p();break;case 4:p(),n=s;break;case 1:l==="("?n=2:a1.test(l)?p():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?h[h.length-1]=="\\"?h=h.slice(0,-1)+l:n=3:h+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,h="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${u}"`),f(),o(),r}function c1(t,e,n){const s=r1(l1(t.path),n),r=Ne(s,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function u1(t,e){const n=[],s=new Map;e=my({strict:!1,end:!0,sensitive:!1},e);function r(f){return s.get(f)}function i(f,p,m){const _=!m,y=py(f);y.aliasOf=m&&m.record;const b=my(e,f),O=[y];if("alias"in f){const C=typeof f.alias=="string"?[f.alias]:f.alias;for(const x of C)O.push(py(Ne({},y,{components:m?m.record.components:y.components,path:x,aliasOf:m?m.record:y})))}let D,v;for(const C of O){const{path:x}=C;if(p&&x[0]!=="/"){const M=p.record.path,I=M[M.length-1]==="/"?"":"/";C.path=p.record.path+(x&&I+x)}if(D=c1(C,p,b),m?m.alias.push(D):(v=v||D,v!==D&&v.alias.push(D),_&&f.name&&!gy(D)&&o(f.name)),GI(D)&&l(D),y.children){const M=y.children;for(let I=0;I<M.length;I++)i(M[I],D,m&&m.children[I])}m=m||D}return v?()=>{o(v)}:Bo}function o(f){if(qI(f)){const p=s.get(f);p&&(s.delete(f),n.splice(n.indexOf(p),1),p.children.forEach(o),p.alias.forEach(o))}else{const p=n.indexOf(f);p>-1&&(n.splice(p,1),f.record.name&&s.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function l(f){const p=d1(f,n);n.splice(p,0,f),f.record.name&&!gy(f)&&s.set(f.record.name,f)}function u(f,p){let m,_={},y,b;if("name"in f&&f.name){if(m=s.get(f.name),!m)throw Mi(1,{location:f});b=m.record.name,_=Ne(dy(p.params,m.keys.filter(v=>!v.optional).concat(m.parent?m.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),f.params&&dy(f.params,m.keys.map(v=>v.name))),y=m.stringify(_)}else if(f.path!=null)y=f.path,m=n.find(v=>v.re.test(y)),m&&(_=m.parse(y),b=m.record.name);else{if(m=p.name?s.get(p.name):n.find(v=>v.re.test(p.path)),!m)throw Mi(1,{location:f,currentLocation:p});b=m.record.name,_=Ne({},p.params,f.params),y=m.stringify(_)}const O=[];let D=m;for(;D;)O.unshift(D.record),D=D.parent;return{name:b,path:y,params:_,matched:O,meta:f1(O)}}t.forEach(f=>i(f));function h(){n.length=0,s.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:h,getRoutes:a,getRecordMatcher:r}}function dy(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function py(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:h1(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function h1(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function gy(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function f1(t){return t.reduce((e,n)=>Ne(e,n.meta),{})}function my(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function d1(t,e){let n=0,s=e.length;for(;n!==s;){const i=n+s>>1;zI(t,e[i])<0?s=i:n=i+1}const r=p1(t);return r&&(s=e.lastIndexOf(r,s-1)),s}function p1(t){let e=t;for(;e=e.parent;)if(GI(e)&&zI(t,e)===0)return e}function GI({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function g1(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<s.length;++r){const i=s[r].replace(UI," "),o=i.indexOf("="),a=fa(o<0?i:i.slice(0,o)),l=o<0?null:fa(i.slice(o+1));if(a in e){let u=e[a];Pn(u)||(u=e[a]=[u]),u.push(l)}else e[a]=l}return e}function _y(t){let e="";for(let n in t){const s=t[n];if(n=MM(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Pn(s)?s.map(i=>i&&Df(i)):[s&&Df(s)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function m1(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Pn(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return e}const _1=Symbol(""),yy=Symbol(""),vp=Symbol(""),QI=Symbol(""),Mf=Symbol("");function mo(){let t=[];function e(s){return t.push(s),()=>{const r=t.indexOf(s);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Os(t,e,n,s,r,i=o=>o()){const o=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const u=p=>{p===!1?l(Mi(4,{from:n,to:e})):p instanceof Error?l(p):t1(p)?l(Mi(2,{from:e,to:p})):(o&&s.enterCallbacks[r]===o&&typeof p=="function"&&o.push(p),a())},h=i(()=>t.call(s&&s.instances[r],e,n,u));let f=Promise.resolve(h);t.length<3&&(f=f.then(u)),f.catch(p=>l(p))})}function Eh(t,e,n,s,r=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(VI(l)){const h=(l.__vccOpts||l)[e];h&&i.push(Os(h,n,s,o,a,r))}else{let u=l();i.push(()=>u.then(h=>{if(!h)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const f=bM(h)?h.default:h;o.mods[a]=h,o.components[a]=f;const m=(f.__vccOpts||f)[e];return m&&Os(m,n,s,o,a,r)()}))}}return i}function vy(t){const e=vt(vp),n=vt(QI),s=_n(()=>{const l=Ge(t.to);return e.resolve(l)}),r=_n(()=>{const{matched:l}=s.value,{length:u}=l,h=l[u-1],f=n.matched;if(!h||!f.length)return-1;const p=f.findIndex(xi.bind(null,h));if(p>-1)return p;const m=Ey(l[u-2]);return u>1&&Ey(h)===m&&f[f.length-1].path!==m?f.findIndex(xi.bind(null,l[u-2])):p}),i=_n(()=>r.value>-1&&w1(n.params,s.value.params)),o=_n(()=>r.value>-1&&r.value===n.matched.length-1&&$I(n.params,s.value.params));function a(l={}){if(T1(l)){const u=e[Ge(t.replace)?"replace":"push"](Ge(t.to)).catch(Bo);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:s,href:_n(()=>s.value.href),isActive:i,isExactActive:o,navigate:a}}function y1(t){return t.length===1?t[0]:t}const v1=Bi({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:vy,setup(t,{slots:e}){const n=_s(vy(t)),{options:s}=vt(vp),r=_n(()=>({[Ty(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ty(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&y1(e.default(n));return t.custom?i:Kt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},i)}}}),E1=v1;function T1(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function w1(t,e){for(const n in e){const s=e[n],r=t[n];if(typeof s=="string"){if(s!==r)return!1}else if(!Pn(r)||r.length!==s.length||s.some((i,o)=>i!==r[o]))return!1}return!0}function Ey(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Ty=(t,e,n)=>t??e??n,I1=Bi({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=vt(Mf),r=_n(()=>t.route||s.value),i=vt(yy,0),o=_n(()=>{let u=Ge(i);const{matched:h}=r.value;let f;for(;(f=h[u])&&!f.components;)u++;return u}),a=_n(()=>r.value.matched[o.value]);hi(yy,_n(()=>o.value+1)),hi(_1,a),hi(Mf,r);const l=Gt();return Tr(()=>[l.value,a.value,t.name],([u,h,f],[p,m,_])=>{h&&(h.instances[f]=u,m&&m!==h&&u&&u===p&&(h.leaveGuards.size||(h.leaveGuards=m.leaveGuards),h.updateGuards.size||(h.updateGuards=m.updateGuards))),u&&h&&(!m||!xi(h,m)||!p)&&(h.enterCallbacks[f]||[]).forEach(y=>y(u))},{flush:"post"}),()=>{const u=r.value,h=t.name,f=a.value,p=f&&f.components[h];if(!p)return wy(n.default,{Component:p,route:u});const m=f.props[h],_=m?m===!0?u.params:typeof m=="function"?m(u):m:null,b=Kt(p,Ne({},_,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(f.instances[h]=null)},ref:l}));return wy(n.default,{Component:b,route:u})||b}}});function wy(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const YI=I1;function b1(t){const e=u1(t.routes,t),n=t.parseQuery||g1,s=t.stringifyQuery||_y,r=t.history,i=mo(),o=mo(),a=mo(),l=Ei(gn);let u=gn;ni&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const h=yh.bind(null,B=>""+B),f=yh.bind(null,VM),p=yh.bind(null,fa);function m(B,Z){let X,se;return qI(B)?(X=e.getRecordMatcher(B),se=Z):se=B,e.addRoute(se,X)}function _(B){const Z=e.getRecordMatcher(B);Z&&e.removeRoute(Z)}function y(){return e.getRoutes().map(B=>B.record)}function b(B){return!!e.getRecordMatcher(B)}function O(B,Z){if(Z=Ne({},Z||l.value),typeof B=="string"){const k=vh(n,B,Z.path),V=e.resolve({path:k.path},Z),H=r.createHref(k.fullPath);return Ne(k,V,{params:p(V.params),hash:fa(k.hash),redirectedFrom:void 0,href:H})}let X;if(B.path!=null)X=Ne({},B,{path:vh(n,B.path,Z.path).path});else{const k=Ne({},B.params);for(const V in k)k[V]==null&&delete k[V];X=Ne({},B,{params:f(k)}),Z.params=f(Z.params)}const se=e.resolve(X,Z),we=B.hash||"";se.params=h(p(se.params));const Me=BM(s,Ne({},B,{hash:xM(we),path:se.path})),S=r.createHref(Me);return Ne({fullPath:Me,hash:we,query:s===_y?m1(B.query):B.query||{}},se,{redirectedFrom:void 0,href:S})}function D(B){return typeof B=="string"?vh(n,B,l.value.path):Ne({},B)}function v(B,Z){if(u!==B)return Mi(8,{from:Z,to:B})}function C(B){return I(B)}function x(B){return C(Ne(D(B),{replace:!0}))}function M(B){const Z=B.matched[B.matched.length-1];if(Z&&Z.redirect){const{redirect:X}=Z;let se=typeof X=="function"?X(B):X;return typeof se=="string"&&(se=se.includes("?")||se.includes("#")?se=D(se):{path:se},se.params={}),Ne({query:B.query,hash:B.hash,params:se.path!=null?{}:B.params},se)}}function I(B,Z){const X=u=O(B),se=l.value,we=B.state,Me=B.force,S=B.replace===!0,k=M(X);if(k)return I(Ne(D(k),{state:typeof k=="object"?Ne({},we,k.state):we,force:Me,replace:S}),Z||X);const V=X;V.redirectedFrom=Z;let H;return!Me&&jM(s,se,X)&&(H=Mi(16,{to:V,from:se}),on(se,se,!0,!1)),(H?Promise.resolve(H):R(V,se)).catch(U=>es(U)?es(U,2)?U:dn(U):te(U,V,se)).then(U=>{if(U){if(es(U,2))return I(Ne({replace:S},D(U.to),{state:typeof U.to=="object"?Ne({},we,U.to.state):we,force:Me}),Z||V)}else U=P(V,se,!0,S,we);return N(V,se,U),U})}function T(B,Z){const X=v(B,Z);return X?Promise.reject(X):Promise.resolve()}function w(B){const Z=Es.values().next().value;return Z&&typeof Z.runWithContext=="function"?Z.runWithContext(B):B()}function R(B,Z){let X;const[se,we,Me]=R1(B,Z);X=Eh(se.reverse(),"beforeRouteLeave",B,Z);for(const k of se)k.leaveGuards.forEach(V=>{X.push(Os(V,B,Z))});const S=T.bind(null,B,Z);return X.push(S),Ht(X).then(()=>{X=[];for(const k of i.list())X.push(Os(k,B,Z));return X.push(S),Ht(X)}).then(()=>{X=Eh(we,"beforeRouteUpdate",B,Z);for(const k of we)k.updateGuards.forEach(V=>{X.push(Os(V,B,Z))});return X.push(S),Ht(X)}).then(()=>{X=[];for(const k of Me)if(k.beforeEnter)if(Pn(k.beforeEnter))for(const V of k.beforeEnter)X.push(Os(V,B,Z));else X.push(Os(k.beforeEnter,B,Z));return X.push(S),Ht(X)}).then(()=>(B.matched.forEach(k=>k.enterCallbacks={}),X=Eh(Me,"beforeRouteEnter",B,Z,w),X.push(S),Ht(X))).then(()=>{X=[];for(const k of o.list())X.push(Os(k,B,Z));return X.push(S),Ht(X)}).catch(k=>es(k,8)?k:Promise.reject(k))}function N(B,Z,X){a.list().forEach(se=>w(()=>se(B,Z,X)))}function P(B,Z,X,se,we){const Me=v(B,Z);if(Me)return Me;const S=Z===gn,k=ni?history.state:{};X&&(se||S?r.replace(B.fullPath,Ne({scroll:S&&k&&k.scroll},we)):r.push(B.fullPath,we)),l.value=B,on(B,Z,X,S),dn()}let A;function ge(){A||(A=r.listen((B,Z,X)=>{if(!Nn.listening)return;const se=O(B),we=M(se);if(we){I(Ne(we,{replace:!0,force:!0}),se).catch(Bo);return}u=se;const Me=l.value;ni&&QM(ly(Me.fullPath,X.delta),wu()),R(se,Me).catch(S=>es(S,12)?S:es(S,2)?(I(Ne(D(S.to),{force:!0}),se).then(k=>{es(k,20)&&!X.delta&&X.type===da.pop&&r.go(-1,!1)}).catch(Bo),Promise.reject()):(X.delta&&r.go(-X.delta,!1),te(S,se,Me))).then(S=>{S=S||P(se,Me,!1),S&&(X.delta&&!es(S,8)?r.go(-X.delta,!1):X.type===da.pop&&es(S,20)&&r.go(-1,!1)),N(se,Me,S)}).catch(Bo)}))}let Ee=mo(),ne=mo(),ue;function te(B,Z,X){dn(B);const se=ne.list();return se.length?se.forEach(we=>we(B,Z,X)):console.error(B),Promise.reject(B)}function qe(){return ue&&l.value!==gn?Promise.resolve():new Promise((B,Z)=>{Ee.add([B,Z])})}function dn(B){return ue||(ue=!B,ge(),Ee.list().forEach(([Z,X])=>B?X(B):Z()),Ee.reset()),B}function on(B,Z,X,se){const{scrollBehavior:we}=t;if(!ni||!we)return Promise.resolve();const Me=!X&&YM(ly(B.fullPath,0))||(se||!X)&&history.state&&history.state.scroll||null;return Ta().then(()=>we(B,Z,Me)).then(S=>S&&GM(S)).catch(S=>te(S,B,Z))}const Ke=B=>r.go(B);let ze;const Es=new Set,Nn={currentRoute:l,listening:!0,addRoute:m,removeRoute:_,clearRoutes:e.clearRoutes,hasRoute:b,getRoutes:y,resolve:O,options:t,push:C,replace:x,go:Ke,back:()=>Ke(-1),forward:()=>Ke(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ne.add,isReady:qe,install(B){const Z=this;B.component("RouterLink",E1),B.component("RouterView",YI),B.config.globalProperties.$router=Z,Object.defineProperty(B.config.globalProperties,"$route",{enumerable:!0,get:()=>Ge(l)}),ni&&!ze&&l.value===gn&&(ze=!0,C(r.location).catch(we=>{}));const X={};for(const we in gn)Object.defineProperty(X,we,{get:()=>l.value[we],enumerable:!0});B.provide(vp,Z),B.provide(QI,is(X)),B.provide(Mf,l);const se=B.unmount;Es.add(B),B.unmount=function(){Es.delete(B),Es.size<1&&(u=gn,A&&A(),A=null,l.value=gn,ze=!1,ue=!1),se()}}};function Ht(B){return B.reduce((Z,X)=>Z.then(()=>w(X)),Promise.resolve())}return Nn}function R1(t,e){const n=[],s=[],r=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(u=>xi(u,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(u=>xi(u,l))||r.push(l))}return[n,s,r]}const A1=/(:\w+)\([^)]+\)/g,C1=/(:\w+)[?+*]/g,S1=/:\w+/g,P1=(t,e)=>e.path.replace(A1,"$1").replace(C1,"$1").replace(S1,n=>{var s;return((s=t.params[n.slice(1)])==null?void 0:s.toString())||""}),Lf=(t,e)=>{const n=t.route.matched.find(r=>{var i;return((i=r.components)==null?void 0:i.default)===t.Component.type}),s=e??(n==null?void 0:n.meta.key)??(n&&P1(t.route,n));return typeof s=="function"?s(t.route):s},k1=(t,e)=>({default:()=>t?Kt(V0,t===!0?{}:t,e):e});function Ep(t){return Array.isArray(t)?t:[t]}const N1={middleware:"auth"},O1={middleware:"auth"};const Th=[{name:"auth",path:"/auth",meta:N1||{},component:()=>Ir(()=>import("./DvxDw_o2.js"),[],import.meta.url)},{name:"index",path:"/",component:()=>Ir(()=>import("./5LYAagdv.js"),__vite__mapDeps([0,1]),import.meta.url)},{name:"loggedin",path:"/loggedin",meta:O1||{},component:()=>Ir(()=>import("./0On7qsrA.js"),[],import.meta.url)}],D1=(t,e)=>({default:()=>{var n;return t?Kt(BC,t===!0?{}:t,e):(n=e.default)==null?void 0:n.call(e)}}),x1=/(:\w+)\([^)]+\)/g,M1=/(:\w+)[?+*]/g,L1=/:\w+/g;function Iy(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(x1,"$1").replace(M1,"$1").replace(L1,n=>{var s;return((s=t.params[n.slice(1)])==null?void 0:s.toString())||""});return typeof e=="function"?e(t):e}function XI(t,e){return t===e||e===gn?!1:Iy(t)!==Iy(e)?!0:!t.matched.every((s,r)=>{var i,o;return s.components&&s.components.default===((o=(i=e.matched[r])==null?void 0:i.components)==null?void 0:o.default)})}const V1={scrollBehavior(t,e,n){var u;const s=st(),r=((u=rn().options)==null?void 0:u.scrollBehaviorType)??"auto";let i=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!i&&e&&t&&o!==!1&&XI(t,e)&&(i={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:JI(t.hash),behavior:r}:!1;const a=h=>!!(h.meta.pageTransition??rf),l=a(e)&&a(t)?"page:transition:finish":"page:loading:end";return new Promise(h=>{s.hooks.hookOnce(l,()=>{requestAnimationFrame(()=>h(F1(t,"instant",i)))})})}};function JI(t){try{const e=document.querySelector(t);if(e)return(Number.parseFloat(getComputedStyle(e).scrollMarginTop)||0)+(Number.parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0)}catch{}return 0}function F1(t,e,n){return n||(t.hash?{el:t.hash,top:JI(t.hash),behavior:e}:{left:0,top:0,behavior:e})}const U1={hashMode:!1,scrollBehaviorType:"auto"},cn={...U1,...V1},B1=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const s=st(),r=rn(),i=([e,n]=di(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e);if(i===!0)return;const o=Jc({statusCode:i&&i.statusCode||404,statusMessage:i&&i.statusMessage||`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=r.beforeResolve(u=>{if(a(),u===t){const h=r.afterEach(async()=>{h(),await s.runWithContext(()=>Ns(o)),window==null||window.history.pushState({},"",t.fullPath)});return!1}})},j1=async t=>{let e,n;const s=([e,n]=di(()=>mp({path:t.path})),e=await e,n(),e);if(s.redirect)return xr(s.redirect,{acceptRelative:!0})?(window.location.href=s.redirect,!1):s.redirect},H1=[B1,j1],Ho={auth:()=>Ir(()=>import("./Bf6MA6mP.js"),[],import.meta.url)};function $1(t,e,n){const{pathname:s,search:r,hash:i}=e,o=t.indexOf("#");if(o>-1){const u=i.includes(t.slice(o))?t.slice(o).length:1;let h=i.slice(u);return h[0]!=="/"&&(h="/"+h),Mm(h,"")}const a=Mm(s,t),l=!n||jS(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":r)+i}const W1=jt({name:"nuxt:router",enforce:"pre",async setup(t){var b;let e,n,s=ji().app.baseURL;const r=((b=cn.history)==null?void 0:b.call(cn,s))??e1(s),i=cn.routes?([e,n]=di(()=>cn.routes(Th)),e=await e,n(),e??Th):Th;let o;const a=b1({...cn,scrollBehavior:(O,D,v)=>{if(D===gn){o=v;return}if(cn.scrollBehavior){if(a.options.scrollBehavior=cn.scrollBehavior,"scrollRestoration"in window.history){const C=a.beforeEach(()=>{C(),window.history.scrollRestoration="manual"})}return cn.scrollBehavior(O,gn,o||v)}},history:r,routes:i});cn.routes&&cn.routes,"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(a);const l=Ei(a.currentRoute.value);a.afterEach((O,D)=>{l.value=D}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>l.value});const u=$1(s,window.location,t.payload.path),h=Ei(a.currentRoute.value),f=()=>{h.value=a.currentRoute.value};t.hook("page:finish",f),a.afterEach((O,D)=>{var v,C,x,M;((C=(v=O.matched[0])==null?void 0:v.components)==null?void 0:C.default)===((M=(x=D.matched[0])==null?void 0:x.components)==null?void 0:M.default)&&f()});const p={};for(const O in h.value)Object.defineProperty(p,O,{get:()=>h.value[O],enumerable:!0});t._route=is(p),t._middleware||(t._middleware={global:[],named:{}});const m=Xc();a.afterEach(async(O,D,v)=>{delete t._processingMiddleware,!t.isHydrating&&m.value&&await t.runWithContext(FP),v&&await t.callHook("page:loading:end")});try{[e,n]=di(()=>a.isReady()),await e,n()}catch(O){[e,n]=di(()=>t.runWithContext(()=>Ns(O))),await e,n()}const _=u!==a.currentRoute.value.fullPath?a.resolve(u):a.currentRoute.value;f();const y=t.payload.state._layout;return a.beforeEach(async(O,D)=>{var v;await t.callHook("page:loading:start"),O.meta=_s(O.meta),t.isHydrating&&y&&!qs(O.meta.layout)&&(O.meta.layout=y),t._processingMiddleware=!0;{const C=new Set([...H1,...t._middleware.global]);for(const x of O.matched){const M=x.meta.middleware;if(M)for(const I of Ep(M))C.add(I)}{const x=await t.runWithContext(()=>mp({path:O.path}));if(x.appMiddleware)for(const M in x.appMiddleware)x.appMiddleware[M]?C.add(M):C.delete(M)}for(const x of C){const M=typeof x=="string"?t._middleware.named[x]||await((v=Ho[x])==null?void 0:v.call(Ho).then(I=>I.default||I)):x;if(!M)throw new Error(`Unknown route middleware: '${x}'.`);try{const I=await t.runWithContext(()=>M(O,D));if(!t.payload.serverRendered&&t.isHydrating&&(I===!1||I instanceof Error)){const T=I||Sl({statusCode:404,statusMessage:`Page Not Found: ${u}`});return await t.runWithContext(()=>Ns(T)),!1}if(I===!0)continue;if(I===!1)return I;if(I)return BT(I)&&I.fatal&&await t.runWithContext(()=>Ns(I)),I}catch(I){const T=Sl(I);return T.fatal&&await t.runWithContext(()=>Ns(T)),T}}}}),a.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),a.afterEach(async(O,D)=>{O.matched.length===0&&await t.runWithContext(()=>Ns(Sl({statusCode:404,fatal:!1,statusMessage:`Page not found: ${O.fullPath}`,data:{path:O.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{"name"in _&&(_.name=void 0),await a.replace({..._,force:!0}),a.options.scrollBehavior=cn.scrollBehavior}catch(O){await t.runWithContext(()=>Ns(O))}}),{provide:{router:a}}}}),by=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),D4=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),Tp=t=>{const e=st();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{by(()=>t())}):by(()=>t())},q1=jt({name:"nuxt:payload",setup(t){const e=new Set;rn().beforeResolve(async(n,s)=>{if(n.path===s.path)return;const r=await iy(n.path);if(r){for(const i of e)delete t.static.data[i];for(const i in r.data)i in t.static.data||e.add(i),t.static.data[i]=r.data[i]}}),Tp(()=>{var n;t.hooks.hook("link:prefetch",async s=>{const{hostname:r}=new URL(s,window.location.href);r===window.location.hostname&&await iy(s).catch(()=>{console.warn("[nuxt] Error preloading payload for",s)})}),((n=navigator.connection)==null?void 0:n.effectiveType)!=="slow-2g"&&setTimeout(Tu,1e3)})}}),K1=jt(()=>{const t=rn();Tp(()=>{t.beforeResolve(async()=>{await new Promise(e=>{setTimeout(e,100),requestAnimationFrame(()=>{setTimeout(e,0)})})})})}),z1=jt(t=>{let e;async function n(){const s=await Tu();e&&clearTimeout(e),e=setTimeout(n,jm);try{const r=await $fetch(Od("builds/latest.json")+`?${Date.now()}`);r.id!==s.id&&t.hooks.callHook("app:manifest:update",r)}catch{}}Tp(()=>{e=setTimeout(n,jm)})}),G1=jt(t=>{if(!document.startViewTransition)return;let e,n;rn().beforeResolve(async(r,i)=>{const o=r.meta.viewTransition??_P,l=window.matchMedia("(prefers-reduced-motion: reduce)").matches&&o!=="always";if(o===!1||l||!XI(r,i))return;const u=new Promise((m,_)=>{e=m,n=_});let h;const f=new Promise(m=>h=m),p=document.startViewTransition(()=>(h(),u));return p.finished.then(()=>{n=void 0,e=void 0}),await t.callHook("page:view-transition:start",p),f}),t.hook("vue:error",()=>{n==null||n(),n=void 0}),t.hook("page:finish",()=>{e==null||e(),e=void 0})});function Q1(t={}){const e=t.path||window.location.pathname;let n={};try{n=ec(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:st().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const Y1=jt({name:"nuxt:chunk-reload",setup(t){const e=rn(),n=ji(),s=new Set;e.beforeEach(()=>{s.clear()}),t.hook("app:chunkError",({error:i})=>{s.add(i)});function r(i){const a="href"in i&&i.href[0]==="#"?n.app.baseURL+i.href:Nd(n.app.baseURL,i.fullPath);Q1({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(r)}),e.onError((i,o)=>{s.has(i)&&r(o)})}}),X1=$h(()=>Ir(()=>import("./Z85lmpL7.js"),[],import.meta.url).then(t=>t.default||t.default||t)),J1=[["Icon",X1]],Z1=jt({name:"nuxt:global-components",setup(t){for(const[e,n]of J1)t.vueApp.component(e,n),t.vueApp.component("Lazy"+e,n)}}),_l={},eL=jt({name:"nuxt:prefetch",setup(t){const e=rn();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var r;const s=(r=n==null?void 0:n.meta)==null?void 0:r.layout;s&&typeof _l[s]=="function"&&await _l[s]()})}),t.hooks.hook("link:prefetch",n=>{if(xr(n))return;const s=e.resolve(n);if(!s)return;const r=s.meta.layout;let i=Ep(s.meta.middleware);i=i.filter(o=>typeof o=="string");for(const o of i)typeof Ho[o]=="function"&&Ho[o]();r&&typeof _l[r]=="function"&&_l[r]()})}});var tL="firebase",nL="11.6.0";/**
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
 */tn(tL,nL,"app");const sL=jt(()=>({provide:{firebaseApp:JT(ji().public.vuefire.config)}}));function wp(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,s=Object.getOwnPropertySymbols(t);r<s.length;r++)e.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(t,s[r])&&(n[s[r]]=t[s[r]]);return n}function ZI(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const eb=ZI,tb=new $i("auth","Firebase",ZI());/**
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
 */const wc=new Aa("@firebase/auth");function rL(t,...e){wc.logLevel<=ve.WARN&&wc.warn(`Auth (${nr}): ${t}`,...e)}function Fl(t,...e){wc.logLevel<=ve.ERROR&&wc.error(`Auth (${nr}): ${t}`,...e)}/**
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
 */function Kn(t,...e){throw bp(t,...e)}function Rn(t,...e){return bp(t,...e)}function Ip(t,e,n){const s=Object.assign(Object.assign({},eb()),{[e]:n});return new $i("auth","Firebase",s).create(e,{appName:t.name})}function br(t){return Ip(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function iL(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Kn(t,"argument-error"),Ip(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bp(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return tb.create(t,...e)}function me(t,e,...n){if(!t)throw bp(e,...n)}function os(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Fl(e),new Error(e)}function ms(t,e){t||os(e)}/**
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
 */function Vf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function oL(){return Ry()==="http:"||Ry()==="https:"}function Ry(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function aL(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(oL()||ek()||"connection"in navigator)?navigator.onLine:!0}function lL(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Oa{constructor(e,n){this.shortDelay=e,this.longDelay=n,ms(n>e,"Short delay should be less than long delay!"),this.isMobile=Dd()||KT()}get(){return aL()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Rp(t,e){ms(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class nb{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;os("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;os("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;os("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const cL={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const uL=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],hL=new Oa(3e4,6e4);function Ap(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Qi(t,e,n,s,r={}){return sb(t,r,async()=>{let i={},o={};s&&(e==="GET"?o=s:i={body:JSON.stringify(s)});const a=Wi(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return ZP()||(u.referrerPolicy="no-referrer"),nb.fetch()(await rb(t,t.config.apiHost,n,a),u)})}async function sb(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},cL),e);try{const r=new dL(t),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw yl(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw yl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw yl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw yl(t,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ip(t,h,u);Kn(t,h)}}catch(r){if(r instanceof Gn)throw r;Kn(t,"network-request-failed",{message:String(r)})}}async function fL(t,e,n,s,r={}){const i=await Qi(t,e,n,s,r);return"mfaPendingCredential"in i&&Kn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function rb(t,e,n,s){const r=`${e}${n}?${s}`,i=t,o=i.config.emulator?Rp(t.config,r):`${t.config.apiScheme}://${r}`;return uL.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}class dL{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Rn(this.auth,"network-request-failed")),hL.get())})}}function yl(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=Rn(t,e,s);return r.customData._tokenResponse=n,r}/**
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
 */async function pL(t,e){return Qi(t,"POST","/v1/accounts:delete",e)}async function Ic(t,e){return Qi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function $o(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function gL(t,e=!1){const n=Bt(t),s=await n.getIdToken(e),r=Cp(s);me(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:r,token:s,authTime:$o(wh(r.auth_time)),issuedAtTime:$o(wh(r.iat)),expirationTime:$o(wh(r.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function wh(t){return Number(t)*1e3}function Cp(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Fl("JWT malformed, contained fewer than 3 sections"),null;try{const r=oc(n);return r?JSON.parse(r):(Fl("Failed to decode base64 JWT payload"),null)}catch(r){return Fl("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function Ay(t){const e=Cp(t);return me(e,"internal-error"),me(typeof e.exp<"u","internal-error"),me(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function pa(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Gn&&mL(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function mL({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class _L{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ff{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=$o(this.lastLoginAt),this.creationTime=$o(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function bc(t){var e;const n=t.auth,s=await t.getIdToken(),r=await pa(t,Ic(n,{idToken:s}));me(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ib(i.providerUserInfo):[],a=vL(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Ff(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,f)}async function yL(t){const e=Bt(t);await bc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function vL(t,e){return[...t.filter(s=>!e.some(r=>r.providerId===s.providerId)),...e]}function ib(t){return t.map(e=>{var{providerId:n}=e,s=wp(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function EL(t,e){const n=await sb(t,{},async()=>{const s=Wi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=t.config,o=await rb(t,r,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nb.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function TL(t,e){return Qi(t,"POST","/v2/accounts:revokeToken",Ap(t,e))}/**
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
 */class gi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){me(e.idToken,"internal-error"),me(typeof e.idToken<"u","internal-error"),me(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ay(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){me(e.length!==0,"internal-error");const n=Ay(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(me(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await EL(e,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new gi;return s&&(me(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),r&&(me(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(me(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new gi,this.toJSON())}_performRefresh(){return os("not implemented")}}/**
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
 */function Cs(t,e){me(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class En{constructor(e){var{uid:n,auth:s,stsTokenManager:r}=e,i=wp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _L(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ff(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await pa(this,this.stsTokenManager.getToken(this.auth,e));return me(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return gL(this,e)}reload(){return yL(this)}_assign(e){this!==e&&(me(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new En(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){me(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await bc(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(br(this.auth));const e=await this.getIdToken();return await pa(this,pL(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,r,i,o,a,l,u,h;const f=(s=n.displayName)!==null&&s!==void 0?s:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,m=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,b=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,O=(u=n.createdAt)!==null&&u!==void 0?u:void 0,D=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:v,emailVerified:C,isAnonymous:x,providerData:M,stsTokenManager:I}=n;me(v&&I,e,"internal-error");const T=gi.fromJSON(this.name,I);me(typeof v=="string",e,"internal-error"),Cs(f,e.name),Cs(p,e.name),me(typeof C=="boolean",e,"internal-error"),me(typeof x=="boolean",e,"internal-error"),Cs(m,e.name),Cs(_,e.name),Cs(y,e.name),Cs(b,e.name),Cs(O,e.name),Cs(D,e.name);const w=new En({uid:v,auth:e,email:p,emailVerified:C,displayName:f,isAnonymous:x,photoURL:_,phoneNumber:m,tenantId:y,stsTokenManager:T,createdAt:O,lastLoginAt:D});return M&&Array.isArray(M)&&(w.providerData=M.map(R=>Object.assign({},R))),b&&(w._redirectEventId=b),w}static async _fromIdTokenResponse(e,n,s=!1){const r=new gi;r.updateFromServerResponse(n);const i=new En({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:s});return await bc(i),i}static async _fromGetAccountInfoResponse(e,n,s){const r=n.users[0];me(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?ib(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!(i!=null&&i.length),a=new gi;a.updateFromIdToken(s);const l=new En({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new Ff(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const Cy=new Map;function as(t){ms(t instanceof Function,"Expected a class definition");let e=Cy.get(t);return e?(ms(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Cy.set(t,e),e)}/**
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
 */class ob{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ob.type="NONE";const Sy=ob;/**
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
 */function Ul(t,e,n){return`firebase:${t}:${e}:${n}`}class mi{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Ul(this.userKey,r.apiKey,i),this.fullPersistenceKey=Ul("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ic(this.auth,{idToken:e}).catch(()=>{});return n?En._fromGetAccountInfoResponse(this.auth,n,e):null}return En._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new mi(as(Sy),e,s);const r=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=r[0]||as(Sy);const o=Ul(s,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){let f;if(typeof h=="string"){const p=await Ic(e,{idToken:h}).catch(()=>{});if(!p)break;f=await En._fromGetAccountInfoResponse(e,p,h)}else f=En._fromJSON(e,h);u!==i&&(a=f),i=u;break}}catch{}const l=r.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new mi(i,e,s):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new mi(i,e,s))}}/**
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
 */function Py(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ub(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ab(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(fb(e))return"Blackberry";if(db(e))return"Webos";if(lb(e))return"Safari";if((e.includes("chrome/")||cb(e))&&!e.includes("edge/"))return"Chrome";if(hb(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ab(t=Dt()){return/firefox\//i.test(t)}function lb(t=Dt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cb(t=Dt()){return/crios\//i.test(t)}function ub(t=Dt()){return/iemobile/i.test(t)}function hb(t=Dt()){return/android/i.test(t)}function fb(t=Dt()){return/blackberry/i.test(t)}function db(t=Dt()){return/webos/i.test(t)}function Sp(t=Dt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function wL(t=Dt()){var e;return Sp(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function IL(){return tk()&&document.documentMode===10}function pb(t=Dt()){return Sp(t)||hb(t)||db(t)||fb(t)||/windows phone/i.test(t)||ub(t)}/**
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
 */function gb(t,e=[]){let n;switch(t){case"Browser":n=Py(Dt());break;case"Worker":n=`${Py(Dt())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${nr}/${s}`}/**
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
 */class bL{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function RL(t,e={}){return Qi(t,"GET","/v2/passwordPolicy",Ap(t,e))}/**
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
 */const AL=6;class CL{constructor(e){var n,s,r,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:AL,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,r,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsLowercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let r=0;r<e.length;r++)s=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class SL{constructor(e,n,s,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ky(this),this.idTokenSubscription=new ky(this),this.beforeStateQueue=new bL(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tb,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=as(n)),this._initializationPromise=this.queue(async()=>{var s,r,i;if(!this._deleted&&(this.persistenceManager=await mi.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ic(this,{idToken:e}),s=await En._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return me(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await bc(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=lL()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(br(this));const n=e?Bt(e):null;return n&&me(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&me(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(br(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(br(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(as(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await RL(this),n=new CL(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new $i("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await TL(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&as(e)||this._popupRedirectResolver;me(n,this,"argument-error"),this.redirectPersistenceManager=await mi.create(this,[as(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(me(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,r);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return me(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=gb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;if(Jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&rL(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pp(t){return Bt(t)}class ky{constructor(e){this.auth=e,this.observer=null,this.addObserver=hk(n=>this.observer=n)}get next(){return me(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let kp={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function PL(t){kp=t}function kL(t){return kp.loadJS(t)}function NL(){return kp.gapiScript}function OL(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function DL(t,e){const n=XT(t,"auth");if(n.isInitialized()){const r=n.getImmediate(),i=n.getOptions();if(na(i,e??{}))return r;Kn(r,"already-initialized")}return n.initialize({options:e})}function xL(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(as);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}/**
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
 */class mb{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return os("not implemented")}_getIdTokenResponse(e){return os("not implemented")}_linkToIdToken(e,n){return os("not implemented")}_getReauthenticationResolver(e){return os("not implemented")}}/**
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
 */async function _i(t,e){return fL(t,"POST","/v1/accounts:signInWithIdp",Ap(t,e))}/**
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
 */const ML="http://localhost";class Cr extends mb{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Kn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:r}=n,i=wp(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new Cr(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return _i(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,_i(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_i(e,n)}buildRequest(){const e={requestUri:ML,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Wi(n)}return e}}/**
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
 */class Np{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Da extends Np{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class xs extends Da{constructor(){super("facebook.com")}static credential(e){return Cr._fromParams({providerId:xs.PROVIDER_ID,signInMethod:xs.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xs.credentialFromTaggedObject(e)}static credentialFromError(e){return xs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xs.credential(e.oauthAccessToken)}catch{return null}}}xs.FACEBOOK_SIGN_IN_METHOD="facebook.com";xs.PROVIDER_ID="facebook.com";/**
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
 */class Ms extends Da{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cr._fromParams({providerId:Ms.PROVIDER_ID,signInMethod:Ms.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ms.credentialFromTaggedObject(e)}static credentialFromError(e){return Ms.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Ms.credential(n,s)}catch{return null}}}Ms.GOOGLE_SIGN_IN_METHOD="google.com";Ms.PROVIDER_ID="google.com";/**
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
 */class Ls extends Da{constructor(){super("github.com")}static credential(e){return Cr._fromParams({providerId:Ls.PROVIDER_ID,signInMethod:Ls.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ls.credentialFromTaggedObject(e)}static credentialFromError(e){return Ls.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ls.credential(e.oauthAccessToken)}catch{return null}}}Ls.GITHUB_SIGN_IN_METHOD="github.com";Ls.PROVIDER_ID="github.com";/**
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
 */class Vs extends Da{constructor(){super("twitter.com")}static credential(e,n){return Cr._fromParams({providerId:Vs.PROVIDER_ID,signInMethod:Vs.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Vs.credentialFromTaggedObject(e)}static credentialFromError(e){return Vs.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Vs.credential(n,s)}catch{return null}}}Vs.TWITTER_SIGN_IN_METHOD="twitter.com";Vs.PROVIDER_ID="twitter.com";/**
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
 */class Li{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,r=!1){const i=await En._fromIdTokenResponse(e,s,r),o=Ny(s);return new Li({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const r=Ny(s);return new Li({user:e,providerId:r,_tokenResponse:s,operationType:n})}}function Ny(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Rc extends Gn{constructor(e,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,Rc.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,r){return new Rc(e,n,s,r)}}function _b(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Rc._fromErrorAndOperation(t,i,e,s):i})}async function LL(t,e,n=!1){const s=await pa(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Li._forOperation(t,"link",s)}/**
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
 */async function VL(t,e,n=!1){const{auth:s}=t;if(Jt(s.app))return Promise.reject(br(s));const r="reauthenticate";try{const i=await pa(t,_b(s,r,e,t),n);me(i.idToken,s,"internal-error");const o=Cp(i.idToken);me(o,s,"internal-error");const{sub:a}=o;return me(t.uid===a,s,"user-mismatch"),Li._forOperation(t,r,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Kn(s,"user-mismatch"),i}}/**
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
 */async function FL(t,e,n=!1){if(Jt(t.app))return Promise.reject(br(t));const s="signIn",r=await _b(t,s,e),i=await Li._fromIdTokenResponse(t,s,r);return n||await t._updateCurrentUser(i.user),i}function UL(t,e,n,s){return Bt(t).onIdTokenChanged(e,n,s)}function x4(t){return Bt(t).signOut()}const Ac="__sak";/**
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
 */class yb{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ac,"1"),this.storage.removeItem(Ac),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const BL=1e3,jL=10;class vb extends yb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=pb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&e(n,r,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},i=this.storage.getItem(s);IL()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,jL):r()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},BL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vb.type="LOCAL";const HL=vb;/**
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
 */class Eb extends yb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Eb.type="SESSION";const $L=Eb;/**
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
 */function WL(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Iu{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const s=new Iu(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async u=>u(n.origin,i)),l=await WL(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Iu.receivers=[];/**
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
 */function Op(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class qL{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const u=Op("",20);r.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(f){const p=f;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(h),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Hn(){return window}function KL(t){Hn().location.href=t}/**
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
 */function Tb(){return typeof Hn().WorkerGlobalScope<"u"&&typeof Hn().importScripts=="function"}async function zL(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function GL(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function QL(){return Tb()?self:null}/**
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
 */const wb="firebaseLocalStorageDb",YL=1,Cc="firebaseLocalStorage",Ib="fbase_key";class xa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function bu(t,e){return t.transaction([Cc],e?"readwrite":"readonly").objectStore(Cc)}function XL(){const t=indexedDB.deleteDatabase(wb);return new xa(t).toPromise()}function Uf(){const t=indexedDB.open(wb,YL);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Cc,{keyPath:Ib})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Cc)?e(s):(s.close(),await XL(),e(await Uf()))})})}async function Oy(t,e,n){const s=bu(t,!0).put({[Ib]:e,value:n});return new xa(s).toPromise()}async function JL(t,e){const n=bu(t,!1).get(e),s=await new xa(n).toPromise();return s===void 0?null:s.value}function Dy(t,e){const n=bu(t,!0).delete(e);return new xa(n).toPromise()}const ZL=800,eV=3;class bb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Uf(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>eV)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Tb()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Iu._getInstance(QL()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zL(),!this.activeServiceWorker)return;this.sender=new qL(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||GL()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Uf();return await Oy(e,Ac,"1"),await Dy(e,Ac),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Oy(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>JL(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Dy(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const i=bu(r,!1).getAll();return new xa(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ZL)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bb.type="LOCAL";const tV=bb;new Oa(3e4,6e4);/**
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
 */function Rb(t,e){return e?as(e):(me(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Dp extends mb{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _i(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _i(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _i(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nV(t){return FL(t.auth,new Dp(t),t.bypassAuthState)}function sV(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),VL(n,new Dp(t),t.bypassAuthState)}async function rV(t){const{auth:e,user:n}=t;return me(n,e,"internal-error"),LL(n,new Dp(t),t.bypassAuthState)}/**
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
 */class Ab{constructor(e,n,s,r,i=!1){this.auth=e,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nV;case"linkViaPopup":case"linkViaRedirect":return rV;case"reauthViaPopup":case"reauthViaRedirect":return sV;default:Kn(this.auth,"internal-error")}}resolve(e){ms(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ms(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const iV=new Oa(2e3,1e4);async function M4(t,e,n){if(Jt(t.app))return Promise.reject(Rn(t,"operation-not-supported-in-this-environment"));const s=Pp(t);iL(t,e,Np);const r=Rb(s,n);return new mr(s,"signInViaPopup",e,r).executeNotNull()}class mr extends Ab{constructor(e,n,s,r,i){super(e,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,mr.currentPopupAction&&mr.currentPopupAction.cancel(),mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return me(e,this.auth,"internal-error"),e}async onExecution(){ms(this.filter.length===1,"Popup operations only handle one event");const e=Op();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Rn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Rn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,iV.get())};e()}}mr.currentPopupAction=null;/**
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
 */const oV="pendingRedirect",Bl=new Map;class aV extends Ab{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Bl.get(this.auth._key());if(!e){try{const s=await lV(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Bl.set(this.auth._key(),e)}return this.bypassAuthState||Bl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function lV(t,e){const n=hV(e),s=uV(t);if(!await s._isAvailable())return!1;const r=await s._get(n)==="true";return await s._remove(n),r}function cV(t,e){Bl.set(t._key(),e)}function uV(t){return as(t._redirectPersistence)}function hV(t){return Ul(oV,t.config.apiKey,t.name)}async function fV(t,e,n=!1){if(Jt(t.app))return Promise.reject(br(t));const s=Pp(t),r=Rb(s,e),o=await new aV(s,r,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const dV=10*60*1e3;class pV{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gV(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Cb(e)){const r=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Rn(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dV&&this.cachedEventUids.clear(),this.cachedEventUids.has(xy(e))}saveEventToCache(e){this.cachedEventUids.add(xy(e)),this.lastProcessedEventTime=Date.now()}}function xy(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Cb({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gV(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Cb(t);default:return!1}}/**
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
 */async function mV(t,e={}){return Qi(t,"GET","/v1/projects",e)}/**
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
 */const _V=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yV=/^https?/;async function vV(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mV(t);for(const n of e)try{if(EV(n))return}catch{}Kn(t,"unauthorized-domain")}function EV(t){const e=Vf(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!yV.test(n))return!1;if(_V.test(t))return s===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
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
 */const TV=new Oa(3e4,6e4);function My(){const t=Hn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wV(t){return new Promise((e,n)=>{var s,r,i;function o(){My(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{My(),n(Rn(t,"network-request-failed"))},timeout:TV.get()})}if(!((r=(s=Hn().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((i=Hn().gapi)===null||i===void 0)&&i.load)o();else{const a=OL("iframefcb");return Hn()[a]=()=>{gapi.load?o():n(Rn(t,"network-request-failed"))},kL(`${NL()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw jl=null,e})}let jl=null;function IV(t){return jl=jl||wV(t),jl}/**
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
 */const bV=new Oa(5e3,15e3),RV="__/auth/iframe",AV="emulator/auth/iframe",CV={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},SV=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function PV(t){const e=t.config;me(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rp(e,AV):`https://${t.config.authDomain}/${RV}`,s={apiKey:e.apiKey,appName:t.name,v:nr},r=SV.get(t.config.apiHost);r&&(s.eid=r);const i=t._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Wi(s).slice(1)}`}async function kV(t){const e=await IV(t),n=Hn().gapi;return me(n,t,"internal-error"),e.open({where:document.body,url:PV(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:CV,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=Rn(t,"network-request-failed"),a=Hn().setTimeout(()=>{i(o)},bV.get());function l(){Hn().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const NV={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},OV=500,DV=600,xV="_blank",MV="http://localhost";class Ly{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function LV(t,e,n,s=OV,r=DV){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},NV),{width:s.toString(),height:r.toString(),top:i,left:o}),u=Dt().toLowerCase();n&&(a=cb(u)?xV:n),ab(u)&&(e=e||MV,l.scrollbars="yes");const h=Object.entries(l).reduce((p,[m,_])=>`${p}${m}=${_},`,"");if(wL(u)&&a!=="_self")return VV(e||"",a),new Ly(null);const f=window.open(e||"",a,h);me(f,t,"popup-blocked");try{f.focus()}catch{}return new Ly(f)}function VV(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const FV="__/auth/handler",UV="emulator/auth/handler",BV=encodeURIComponent("fac");async function Vy(t,e,n,s,r,i){me(t.config.authDomain,t,"auth-domain-config-required"),me(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:nr,eventId:r};if(e instanceof Np){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cf(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Da){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await t._getAppCheckToken(),u=l?`#${BV}=${encodeURIComponent(l)}`:"";return`${jV(t)}?${Wi(a).slice(1)}${u}`}function jV({config:t}){return t.emulator?Rp(t,UV):`https://${t.authDomain}/${FV}`}/**
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
 */const Ih="webStorageSupport";class HV{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$L,this._completeRedirectFn=fV,this._overrideRedirectResult=cV}async _openPopup(e,n,s,r){var i;ms((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Vy(e,n,s,Vf(),r);return LV(e,o,Op())}async _openRedirect(e,n,s,r){await this._originValidation(e);const i=await Vy(e,n,s,Vf(),r);return KL(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:i}=this.eventManagers[n];return r?Promise.resolve(r):(ms(i,"If manager is not set, promise should be"),i)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await kV(e),s=new pV(e);return n.register("authEvent",r=>(me(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:s.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ih,{type:Ih},r=>{var i;const o=(i=r==null?void 0:r[0])===null||i===void 0?void 0:i[Ih];o!==void 0&&n(!!o),Kn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vV(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return pb()||lb()||Sp()}}const $V=HV;var Fy="@firebase/auth",Uy="1.10.0";/**
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
 */class WV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){me(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function qV(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function KV(t){$n(new Sn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;me(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:gb(t)},u=new SL(s,r,i,l);return xL(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),$n(new Sn("auth-internal",e=>{const n=Pp(e.getProvider("auth").getImmediate());return(s=>new WV(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),tn(Fy,Uy,qV(t)),tn(Fy,Uy,"esm2017")}/**
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
 */const zV=5*60;YP("authIdTokenMaxAge");function GV(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}PL({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=r=>{const i=Rn("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",GV().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});KV("Browser");/**
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
 */const QV=new Map,YV={activated:!1,tokenObservers:[]};function kn(t){return QV.get(t)||Object.assign({},YV)}const By={RETRIAL_MIN_WAIT:30*1e3,RETRIAL_MAX_WAIT:16*60*1e3};/**
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
 */class XV{constructor(e,n,s,r,i){if(this.operation=e,this.retryPolicy=n,this.getWaitDuration=s,this.lowerBound=r,this.upperBound=i,this.pending=null,this.nextErrorWaitInterval=r,r>i)throw new Error("Proactive refresh lower bound greater than upper bound!")}start(){this.nextErrorWaitInterval=this.lowerBound,this.process(!0).catch(()=>{})}stop(){this.pending&&(this.pending.reject("cancelled"),this.pending=null)}isRunning(){return!!this.pending}async process(e){this.stop();try{this.pending=new ea,this.pending.promise.catch(n=>{}),await JV(this.getNextRun(e)),this.pending.resolve(),await this.pending.promise,this.pending=new ea,this.pending.promise.catch(n=>{}),await this.operation(),this.pending.resolve(),await this.pending.promise,this.process(!0).catch(()=>{})}catch(n){this.retryPolicy(n)?this.process(!1).catch(()=>{}):this.stop()}}getNextRun(e){if(e)return this.nextErrorWaitInterval=this.lowerBound,this.getWaitDuration();{const n=this.nextErrorWaitInterval;return this.nextErrorWaitInterval*=2,this.nextErrorWaitInterval>this.upperBound&&(this.nextErrorWaitInterval=this.upperBound),n}}}function JV(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */const ZV={"already-initialized":"You have already called initializeAppCheck() for FirebaseApp {$appName} with different options. To avoid this error, call initializeAppCheck() with the same options as when it was originally called. This will return the already initialized instance.","use-before-activation":"App Check is being used before initializeAppCheck() is called for FirebaseApp {$appName}. Call initializeAppCheck() before instantiating other Firebase services.","fetch-network-error":"Fetch failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-parse-error":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status-error":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","recaptcha-error":"ReCAPTCHA error.","initial-throttle":"{$httpStatus} error. Attempts allowed again after {$time}",throttled:"Requests throttled due to previous {$httpStatus} error. Attempts allowed again after {$time}"},Sc=new $i("appCheck","AppCheck",ZV);function Sb(t){if(!kn(t).activated)throw Sc.create("use-before-activation",{appName:t.name})}/**
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
 */const eF="firebase-app-check-database",tF=1,Bf="firebase-app-check-store";let vl=null;function nF(){return vl||(vl=new Promise((t,e)=>{try{const n=indexedDB.open(eF,tF);n.onsuccess=s=>{t(s.target.result)},n.onerror=s=>{var r;e(Sc.create("storage-open",{originalErrorMessage:(r=s.target.error)===null||r===void 0?void 0:r.message}))},n.onupgradeneeded=s=>{const r=s.target.result;switch(s.oldVersion){case 0:r.createObjectStore(Bf,{keyPath:"compositeKey"})}}}catch(n){e(Sc.create("storage-open",{originalErrorMessage:n==null?void 0:n.message}))}}),vl)}function sF(t,e){return rF(iF(t),e)}async function rF(t,e){const s=(await nF()).transaction(Bf,"readwrite"),i=s.objectStore(Bf).put({compositeKey:t,value:e});return new Promise((o,a)=>{i.onsuccess=l=>{o()},s.onerror=l=>{var u;a(Sc.create("storage-set",{originalErrorMessage:(u=l.target.error)===null||u===void 0?void 0:u.message}))}})}function iF(t){return`${t.options.appId}-${t.name}`}/**
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
 */const jf=new Aa("@firebase/app-check");function jy(t,e){return zT()?sF(t,e).catch(n=>{jf.warn(`Failed to write token to IndexedDB. Error: ${n}`)}):Promise.resolve()}/**
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
 */const oF={error:"UNKNOWN_ERROR"};function aF(t){return Zc.encodeString(JSON.stringify(t),!1)}async function Hf(t,e=!1,n=!1){const s=t.app;Sb(s);const r=kn(s);let i=r.token,o;if(i&&!Po(i)&&(r.token=void 0,i=void 0),!i){const u=await r.cachedTokenPromise;u&&(Po(u)?i=u:await jy(s,void 0))}if(!e&&i&&Po(i))return{token:i.token};let a=!1;try{r.exchangeTokenPromise||(r.exchangeTokenPromise=r.provider.getToken().finally(()=>{r.exchangeTokenPromise=void 0}),a=!0),i=await kn(s).exchangeTokenPromise}catch(u){u.code==="appCheck/throttled"||u.code==="appCheck/initial-throttle"?jf.warn(u.message):n&&jf.error(u),o=u}let l;return i?o?Po(i)?l={token:i.token,internalError:o}:l=$y(o):(l={token:i.token},r.token=i,await jy(s,i)):l=$y(o),a&&hF(s,l),l}async function lF(t){const e=t.app;Sb(e);const{provider:n}=kn(e);{const{token:s}=await n.getToken();return{token:s}}}function cF(t,e,n,s){const{app:r}=t,i=kn(r),o={next:n,error:s,type:e};if(i.tokenObservers=[...i.tokenObservers,o],i.token&&Po(i.token)){const a=i.token;Promise.resolve().then(()=>{n({token:a.token}),Hy(t)}).catch(()=>{})}i.cachedTokenPromise.then(()=>Hy(t))}function Pb(t,e){const n=kn(t),s=n.tokenObservers.filter(r=>r.next!==e);s.length===0&&n.tokenRefresher&&n.tokenRefresher.isRunning()&&n.tokenRefresher.stop(),n.tokenObservers=s}function Hy(t){const{app:e}=t,n=kn(e);let s=n.tokenRefresher;s||(s=uF(t),n.tokenRefresher=s),!s.isRunning()&&n.isTokenAutoRefreshEnabled&&s.start()}function uF(t){const{app:e}=t;return new XV(async()=>{const n=kn(e);let s;if(n.token?s=await Hf(t,!0):s=await Hf(t),s.error)throw s.error;if(s.internalError)throw s.internalError},()=>!0,()=>{const n=kn(e);if(n.token){let s=n.token.issuedAtTimeMillis+(n.token.expireTimeMillis-n.token.issuedAtTimeMillis)*.5+3e5;const r=n.token.expireTimeMillis-5*60*1e3;return s=Math.min(s,r),Math.max(0,s-Date.now())}else return 0},By.RETRIAL_MIN_WAIT,By.RETRIAL_MAX_WAIT)}function hF(t,e){const n=kn(t).tokenObservers;for(const s of n)try{s.type==="EXTERNAL"&&e.error!=null?s.error(e.error):s.next(e)}catch{}}function Po(t){return t.expireTimeMillis-Date.now()>0}function $y(t){return{token:aF(oF),error:t}}/**
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
 */class fF{constructor(e,n){this.app=e,this.heartbeatServiceProvider=n}_delete(){const{tokenObservers:e}=kn(this.app);for(const n of e)Pb(this.app,n.next);return Promise.resolve()}}function dF(t,e){return new fF(t,e)}function pF(t){return{getToken:e=>Hf(t,e),getLimitedUseToken:()=>lF(t),addTokenListener:e=>cF(t,"INTERNAL",e),removeTokenListener:e=>Pb(t.app,e)}}const gF="@firebase/app-check",mF="0.8.13",_F="app-check",Wy="app-check-internal";function yF(){$n(new Sn(_F,t=>{const e=t.getProvider("app").getImmediate(),n=t.getProvider("heartbeat");return dF(e,n)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,n)=>{t.getProvider(Wy).initialize()})),$n(new Sn(Wy,t=>{const e=t.getProvider("app-check").getImmediate();return pF(e)},"PUBLIC").setInstantiationMode("EXPLICIT")),tn(gF,mF)}yF();const kb=Symbol("firebaseApp");function Ma(t){return ba()&&vt(kb,null)||ZT(t)}const Ln=()=>{},vF=typeof window<"u";function xp(t,e){return e.split(".").reduce((n,s)=>n&&n[s],t)}function EF(t,e,n){const s=(""+e).split("."),r=s.pop(),i=s.reduce((o,a)=>o&&o[a],t);if(i!=null)return Array.isArray(i)?i.splice(Number(r),1,n):i[r]=n}function Fr(t){return!!t&&typeof t=="object"}const TF=Object.prototype;function wF(t){return Fr(t)&&Object.getPrototypeOf(t)===TF}function Mp(t){return Fr(t)&&t.type==="document"}function IF(t){return Fr(t)&&t.type==="collection"}function bF(t){return Mp(t)||IF(t)}function RF(t){return Fr(t)&&t.type==="query"}function AF(t){return Fr(t)&&"ref"in t}function CF(t){return Fr(t)&&typeof t.bucket=="string"}function SF(t,e){let n;return()=>{if(!n)return n=!0,t(e())}}const PF=Symbol.for("v-scx");function kF(){return!!vt(PF,0)}const El=new WeakMap;function NF(t,e){if(!El.has(t)){const n=nE(!0);El.set(t,n);const{unmount:s}=e;e.unmount=()=>{s.call(e),n.stop(),El.delete(t)}}return El.get(t)}const Nb=new WeakMap;function L4(t){return Nb.get(Ma(t))}const Tl=new WeakMap;function Ob(t){const e=Ma(t);if(!Tl.has(e)){let n;const r=[new Promise(i=>{n=i}),i=>{Tl.set(e,i),n(i.value)}];Tl.set(e,r)}return Tl.get(e)}function V4(t){const e=Ob(t);return Array.isArray(e)?e[0]:Promise.resolve(e.value)}function OF(t,e){UL(e,n=>{const s=Ob();t.value=n,Array.isArray(s)&&s[1](t)})}var qy={};const Ky="@firebase/database",zy="1.0.14";/**
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
 */let Db="";function DF(t){Db=t}/**
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
 */class xF{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),_t(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ta(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class MF{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return vs(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const xb=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new xF(e)}}catch{}return new MF},_r=xb("localStorage"),LF=xb("sessionStorage");/**
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
 */const yi=new Aa("@firebase/database"),VF=function(){let t=1;return function(){return t++}}(),Mb=function(t){const e=gk(t),n=new uk;n.update(e);const s=n.digest();return Zc.encodeByteArray(s)},La=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=La.apply(null,s):typeof s=="object"?e+=_t(s):e+=s,e+=" "}return e};let Wo=null,Gy=!0;const FF=function(t,e){Y(!0,"Can't turn on custom loggers persistently."),yi.logLevel=ve.VERBOSE,Wo=yi.log.bind(yi)},Pt=function(...t){if(Gy===!0&&(Gy=!1,Wo===null&&LF.get("logging_enabled")===!0&&FF()),Wo){const e=La.apply(null,t);Wo(e)}},Va=function(t){return function(...e){Pt(t,...e)}},$f=function(...t){const e="FIREBASE INTERNAL ERROR: "+La(...t);yi.error(e)},Sr=function(...t){const e=`FIREBASE FATAL ERROR: ${La(...t)}`;throw yi.error(e),new Error(e)},sn=function(...t){const e="FIREBASE WARNING: "+La(...t);yi.warn(e)},UF=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&sn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Lb=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},BF=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Vi="[MIN_NAME]",Pr="[MAX_NAME]",Yi=function(t,e){if(t===e)return 0;if(t===Vi||e===Pr)return-1;if(e===Vi||t===Pr)return 1;{const n=Qy(t),s=Qy(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},jF=function(t,e){return t===e?0:t<e?-1:1},_o=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+_t(e))},Lp=function(t){if(typeof t!="object"||t===null)return _t(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=_t(e[s]),n+=":",n+=Lp(t[e[s]]);return n+="}",n},Vb=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let r=0;r<n;r+=e)r+e>n?s.push(t.substring(r,n)):s.push(t.substring(r,r+e));return s};function fn(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Fb=function(t){Y(!Lb(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let r,i,o,a,l;t===0?(i=0,o=0,r=1/t===-1/0?1:0):(r=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),i=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(i=0,o=Math.round(t/Math.pow(2,1-s-n))));const u=[];for(l=n;l;l-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)u.push(i%2?1:0),i=Math.floor(i/2);u.push(r?1:0),u.reverse();const h=u.join("");let f="";for(l=0;l<64;l+=8){let p=parseInt(h.substr(l,8),2).toString(16);p.length===1&&(p="0"+p),f=f+p}return f.toLowerCase()},HF=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$F=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},WF=new RegExp("^-?(0*)\\d{1,10}$"),qF=-2147483648,KF=2147483647,Qy=function(t){if(WF.test(t)){const e=Number(t);if(e>=qF&&e<=KF)return e}return null},Fa=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw sn("Exception was thrown by user callback.",n),e},Math.floor(0))}},zF=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},qo=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class GF{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Jt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){sn(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class QF{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Pt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',sn(e)}}/**
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
 */const Vp="5",Ub="v",Bb="s",jb="r",Hb="f",$b=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Wb="ls",qb="p",Wf="ac",Kb="websocket",zb="long_polling";/**
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
 */class YF{constructor(e,n,s,r,i=!1,o="",a=!1,l=!1,u=null){this.secure=n,this.namespace=s,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=_r.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&_r.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function XF(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Gb(t,e,n){Y(typeof e=="string","typeof type must == string"),Y(typeof n=="object","typeof params must == object");let s;if(e===Kb)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===zb)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);XF(t)&&(n.ns=t.namespace);const r=[];return fn(n,(i,o)=>{r.push(i+"="+o)}),s+r.join("&")}/**
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
 */class JF{constructor(){this.counters_={}}incrementCounter(e,n=1){vs(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return HP(this.counters_)}}/**
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
 */const bh={},Rh={};function Fp(t){const e=t.toString();return bh[e]||(bh[e]=new JF),bh[e]}function ZF(t,e){const n=t.toString();return Rh[n]||(Rh[n]=e()),Rh[n]}/**
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
 */class eU{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<s.length;++r)s[r]&&Fa(()=>{this.onMessage_(s[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Yy="start",tU="close",nU="pLPCommand",sU="pRTLPCB",Qb="id",Yb="pw",Xb="ser",rU="cb",iU="seg",oU="ts",aU="d",lU="dframe",Jb=1870,Zb=30,cU=Jb-Zb,uU=25e3,hU=3e4;class ri{constructor(e,n,s,r,i,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Va(e),this.stats_=Fp(n),this.urlFn=l=>(this.appCheckToken&&(l[Wf]=this.appCheckToken),Gb(n,zb,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new eU(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(hU)),BF(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Up((...i)=>{const[o,a,l,u,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Yy)this.id=a,this.password=l;else if(o===tU)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Yy]="t",s[Xb]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[rU]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ub]=Vp,this.transportSessionId&&(s[Bb]=this.transportSessionId),this.lastSessionId&&(s[Wb]=this.lastSessionId),this.applicationId&&(s[qb]=this.applicationId),this.appCheckToken&&(s[Wf]=this.appCheckToken),typeof location<"u"&&location.hostname&&$b.test(location.hostname)&&(s[jb]=Hb);const r=this.urlFn(s);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){ri.forceAllow_=!0}static forceDisallow(){ri.forceDisallow_=!0}static isAvailable(){return ri.forceAllow_?!0:!ri.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!HF()&&!$F()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=_t(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=$T(n),r=Vb(s,cU);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[lU]="t",s[Qb]=e,s[Yb]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=_t(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Up{constructor(e,n,s,r){this.onDisconnect=s,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=VF(),window[nU+this.uniqueCallbackIdentifier]=e,window[sU+this.uniqueCallbackIdentifier]=n,this.myIFrame=Up.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Pt("frame writing exception"),a.stack&&Pt(a.stack),Pt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Pt("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Qb]=this.myID,e[Yb]=this.myPW,e[Xb]=this.currentSerial;let n=this.urlFn(e),s="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Zb+s.length<=Jb;){const o=this.pendingSegs.shift();s=s+"&"+iU+r+"="+o.seg+"&"+oU+r+"="+o.ts+"&"+aU+r+"="+o.d,r++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},r=setTimeout(s,Math.floor(uU)),i=()=>{clearTimeout(r),s()};this.addTag(e,i)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const r=s.readyState;(!r||r==="loaded"||r==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Pt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const fU=16384,dU=45e3;let Pc=null;typeof MozWebSocket<"u"?Pc=MozWebSocket:typeof WebSocket<"u"&&(Pc=WebSocket);class yn{constructor(e,n,s,r,i,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Va(this.connId),this.stats_=Fp(n),this.connURL=yn.connectionURL_(n,o,a,r,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,r,i){const o={};return o[Ub]=Vp,typeof location<"u"&&location.hostname&&$b.test(location.hostname)&&(o[jb]=Hb),n&&(o[Bb]=n),s&&(o[Wb]=s),r&&(o[Wf]=r),i&&(o[qb]=i),Gb(e,Kb,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,_r.set("previous_websocket_failure",!0);try{let s;nk(),this.mySock=new Pc(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const r=s.message||s.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){yn.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Pc!==null&&!yn.forceDisallow_}static previouslyFailed(){return _r.isInMemoryStorage||_r.get("previous_websocket_failure")===!0}markConnectionHealthy(){_r.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=ta(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Y(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=_t(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Vb(n,fU);s.length>1&&this.sendString_(String(s.length));for(let r=0;r<s.length;r++)this.sendString_(s[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(dU))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}yn.responsesRequiredToBeHealthy=2;yn.healthyTimeout=3e4;/**
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
 */class ga{static get ALL_TRANSPORTS(){return[ri,yn]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=yn&&yn.isAvailable();let s=n&&!yn.previouslyFailed();if(e.webSocketOnly&&(n||sn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[yn];else{const r=this.transports_=[];for(const i of ga.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);ga.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ga.globalTransportInitialized_=!1;/**
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
 */const pU=6e4,gU=5e3,mU=10*1024,_U=100*1024,Ah="t",Xy="d",yU="s",Jy="r",vU="e",Zy="o",ev="a",tv="n",nv="p",EU="h";class TU{constructor(e,n,s,r,i,o,a,l,u,h){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=u,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Va("c:"+this.id+":"),this.transportManager_=new ga(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=qo(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>_U?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>mU?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ah in e){const n=e[Ah];n===ev?this.upgradeIfSecondaryHealthy_():n===Jy?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Zy&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=_o("t",e),s=_o("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:nv,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ev,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:tv,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=_o("t",e),s=_o("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=_o(Ah,e);if(Xy in e){const s=e[Xy];if(n===EU){const r=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(n===tv){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===yU?this.onConnectionShutdown_(s):n===Jy?this.onReset_(s):n===vU?$f("Server Error: "+s):n===Zy?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$f("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Vp!==s&&sn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),qo(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(pU))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):qo(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gU))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:nv,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(_r.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class eR{put(e,n,s,r){}merge(e,n,s,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class tR{constructor(e){this.allowedEvents_=e,this.listeners_={},Y(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let r=0;r<s.length;r++)s[r].callback.apply(s[r].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const r=this.getInitialEvent(e);r&&n.apply(s,r)}off(e,n,s){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===n&&(!s||s===r[i].context)){r.splice(i,1);return}}validateEventType_(e){Y(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class kc extends tR{static getInstance(){return new kc}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Dd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return Y(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const sv=32,rv=768;class We{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[s]=this.pieces_[r],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function Le(){return new We("")}function Re(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Js(t){return t.pieces_.length-t.pieceNum_}function He(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new We(t.pieces_,e)}function nR(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function wU(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function sR(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function rR(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new We(e,0)}function ft(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof We)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let r=0;r<s.length;r++)s[r].length>0&&n.push(s[r])}return new We(n,0)}function Ie(t){return t.pieceNum_>=t.pieces_.length}function un(t,e){const n=Re(t),s=Re(e);if(n===null)return e;if(n===s)return un(He(t),He(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function iR(t,e){if(Js(t)!==Js(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function Tn(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Js(t)>Js(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class IU{constructor(e,n){this.errorPrefix_=n,this.parts_=sR(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=tu(this.parts_[s]);oR(this)}}function bU(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=tu(e),oR(t)}function RU(t){const e=t.parts_.pop();t.byteLength_-=tu(e),t.parts_.length>0&&(t.byteLength_-=1)}function oR(t){if(t.byteLength_>rv)throw new Error(t.errorPrefix_+"has a key path longer than "+rv+" bytes ("+t.byteLength_+").");if(t.parts_.length>sv)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+sv+") or object contains a cycle "+pr(t))}function pr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Bp extends tR{static getInstance(){return new Bp}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return Y(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const yo=1e3,AU=60*5*1e3,iv=30*1e3,CU=1.3,SU=3e4,PU="server_kill",ov=3;class hs extends eR{constructor(e,n,s,r,i,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=hs.nextPersistentConnectionId_++,this.log_=Va("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yo,this.maxReconnectDelay_=AU,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Bp.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&kc.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const r=++this.requestNumber_,i={r,a:e,b:n};this.log_(_t(i)),Y(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),s&&(this.requestCBHash_[r]=s)}get(e){this.initConnection_();const n=new ea,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),n.promise}listen(e,n,s,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),Y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Y(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:n,query:e,tag:s};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),r=n._queryIdentifier;this.log_("Listen on "+s+" for "+r);const i={p:s},o="q";e.tag&&(i.q=n._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const l=a.d,u=a.s;hs.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(r))===e&&(this.log_("listen response",a),u!=="ok"&&this.removeListen_(s,r),e.onComplete&&e.onComplete(u,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&vs(e,"w")){const s=Ri(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const r='".indexOn": "'+n._queryParams.getIndex().toString()+'"',i=n._path.toString();sn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||ck(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=iv)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=lk(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+r),Y(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,r)&&this.connected_&&this.sendUnlisten_(s,r,e._queryObject,n)}sendUnlisten_(e,n,s,r){this.log_("Unlisten on "+e+" for "+n);const i={p:e},o="n";r&&(i.q=s,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,r){const i={p:n,d:s};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,n,s,r){this.putInternal("p",e,n,s,r)}merge(e,n,s,r){this.putInternal("m",e,n,s,r)}putInternal(e,n,s,r,i){this.initConnection_();const o={p:n,d:s};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,i=>{this.log_(n+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const i=s.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+_t(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):$f("Unrecognized action received from server: "+_t(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Y(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>SU&&(this.reconnectDelay_=yo),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*CU)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+hs.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},u=function(f){Y(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:l,sendRequest:u};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,p]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Pt("getToken() completed but was canceled"):(Pt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=p&&p.token,a=new TU(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{sn(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(PU)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&sn(f),l())}}}interrupt(e){Pt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Pt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],cf(this.interruptReasons_)&&(this.reconnectDelay_=yo,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(i=>Lp(i)).join("$"):s="default";const r=this.removeListen_(e,s);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,n){const s=new We(e).toString();let r;if(this.listens.has(s)){const i=this.listens.get(s);r=i.get(n),i.delete(n),i.size===0&&this.listens.delete(s)}else r=void 0;return r}onAuthRevoked_(e,n){Pt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=ov&&(this.reconnectDelay_=iv,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Pt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=ov&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Db.replace(/\./g,"-")]=1,Dd()?e["framework.cordova"]=1:KT()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=kc.getInstance().currentlyOnline();return cf(this.interruptReasons_)&&e}}hs.nextPersistentConnectionId_=0;hs.nextConnectionId_=0;/**
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
 */class Ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new Ae(e,n)}}/**
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
 */class Ru{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new Ae(Vi,e),r=new Ae(Vi,n);return this.compare(s,r)!==0}minPost(){return Ae.MIN}}/**
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
 */let wl;class aR extends Ru{static get __EMPTY_NODE(){return wl}static set __EMPTY_NODE(e){wl=e}compare(e,n){return Yi(e.name,n.name)}isDefinedOn(e){throw Hi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return Ae.MIN}maxPost(){return new Ae(Pr,wl)}makePost(e,n){return Y(typeof e=="string","KeyIndex indexValue must always be a string."),new Ae(e,wl)}toString(){return".key"}}const vi=new aR;/**
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
 */class Il{constructor(e,n,s,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class ht{constructor(e,n,s,r,i){this.key=e,this.value=n,this.color=s??ht.RED,this.left=r??zt.EMPTY_NODE,this.right=i??zt.EMPTY_NODE}copy(e,n,s,r,i){return new ht(e??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let r=this;const i=s(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,n,s),null):i===0?r=r.copy(null,n,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,n,s)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return zt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,r;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return zt.EMPTY_NODE;r=s.right.min_(),s=s.copy(r.key,r.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}ht.RED=!0;ht.BLACK=!1;class kU{copy(e,n,s,r,i){return this}insert(e,n,s){return new ht(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class zt{constructor(e,n=zt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new zt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,ht.BLACK,null,null))}remove(e){return new zt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,ht.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,r=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return r?r.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(r=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Il(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new Il(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new Il(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new Il(this.root_,null,this.comparator_,!0,e)}}zt.EMPTY_NODE=new kU;/**
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
 */function NU(t,e){return Yi(t.name,e.name)}function jp(t,e){return Yi(t,e)}/**
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
 */let qf;function OU(t){qf=t}const lR=function(t){return typeof t=="number"?"number:"+Fb(t):"string:"+t},cR=function(t){if(t.isLeafNode()){const e=t.val();Y(typeof e=="string"||typeof e=="number"||typeof e=="object"&&vs(e,".sv"),"Priority must be a string or number.")}else Y(t===qf||t.isEmpty(),"priority of unexpected type.");Y(t===qf||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let av;class ct{static set __childrenNodeConstructor(e){av=e}static get __childrenNodeConstructor(){return av}constructor(e,n=ct.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,Y(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),cR(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new ct(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return Ie(e)?this:Re(e)===".priority"?this.priorityNode_:ct.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:ct.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Re(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(Y(s!==".priority"||Js(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,ct.__childrenNodeConstructor.EMPTY_NODE.updateChild(He(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+lR(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Fb(this.value_):e+=this.value_,this.lazyHash_=Mb(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===ct.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof ct.__childrenNodeConstructor?-1:(Y(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,r=ct.VALUE_TYPE_ORDER.indexOf(n),i=ct.VALUE_TYPE_ORDER.indexOf(s);return Y(r>=0,"Unknown leaf type: "+n),Y(i>=0,"Unknown leaf type: "+s),r===i?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}ct.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let uR,hR;function DU(t){uR=t}function xU(t){hR=t}class MU extends Ru{compare(e,n){const s=e.node.getPriority(),r=n.node.getPriority(),i=s.compareTo(r);return i===0?Yi(e.name,n.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return Ae.MIN}maxPost(){return new Ae(Pr,new ct("[PRIORITY-POST]",hR))}makePost(e,n){const s=uR(e);return new Ae(n,new ct("[PRIORITY-POST]",s))}toString(){return".priority"}}const Ot=new MU;/**
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
 */const LU=Math.log(2);class VU{constructor(e){const n=i=>parseInt(Math.log(i)/LU,10),s=i=>parseInt(Array(i+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const r=s(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Nc=function(t,e,n,s){t.sort(e);const r=function(l,u){const h=u-l;let f,p;if(h===0)return null;if(h===1)return f=t[l],p=n?n(f):f,new ht(p,f.node,ht.BLACK,null,null);{const m=parseInt(h/2,10)+l,_=r(l,m),y=r(m+1,u);return f=t[m],p=n?n(f):f,new ht(p,f.node,ht.BLACK,_,y)}},i=function(l){let u=null,h=null,f=t.length;const p=function(_,y){const b=f-_,O=f;f-=_;const D=r(b+1,O),v=t[b],C=n?n(v):v;m(new ht(C,v.node,y,null,D))},m=function(_){u?(u.left=_,u=_):(h=_,u=_)};for(let _=0;_<l.count;++_){const y=l.nextBitIsOne(),b=Math.pow(2,l.count-(_+1));y?p(b,ht.BLACK):(p(b,ht.BLACK),p(b,ht.RED))}return h},o=new VU(t.length),a=i(o);return new zt(s||e,a)};/**
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
 */let Ch;const Qr={};class ls{static get Default(){return Y(Qr&&Ot,"ChildrenNode.ts has not been loaded"),Ch=Ch||new ls({".priority":Qr},{".priority":Ot}),Ch}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ri(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof zt?n:null}hasIndex(e){return vs(this.indexSet_,e.toString())}addIndex(e,n){Y(e!==vi,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let r=!1;const i=n.getIterator(Ae.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),s.push(o),o=i.getNext();let a;r?a=Nc(s,e.getCompare()):a=Qr;const l=e.toString(),u=Object.assign({},this.indexSet_);u[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new ls(h,u)}addToIndexes(e,n){const s=ac(this.indexes_,(r,i)=>{const o=Ri(this.indexSet_,i);if(Y(o,"Missing index implementation for "+i),r===Qr)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(Ae.Wrap);let u=l.getNext();for(;u;)u.name!==e.name&&a.push(u),u=l.getNext();return a.push(e),Nc(a,o.getCompare())}else return Qr;else{const a=n.get(e.name);let l=r;return a&&(l=l.remove(new Ae(e.name,a))),l.insert(e,e.node)}});return new ls(s,this.indexSet_)}removeFromIndexes(e,n){const s=ac(this.indexes_,r=>{if(r===Qr)return r;{const i=n.get(e.name);return i?r.remove(new Ae(e.name,i)):r}});return new ls(s,this.indexSet_)}}/**
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
 */let vo;class De{static get EMPTY_NODE(){return vo||(vo=new De(new zt(jp),null,ls.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&cR(this.priorityNode_),this.children_.isEmpty()&&Y(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vo}updatePriority(e){return this.children_.isEmpty()?this:new De(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?vo:n}}getChild(e){const n=Re(e);return n===null?this:this.getImmediateChild(n).getChild(He(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(Y(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new Ae(e,n);let r,i;n.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(s,this.children_)):(r=this.children_.insert(e,n),i=this.indexMap_.addToIndexes(s,this.children_));const o=r.isEmpty()?vo:this.priorityNode_;return new De(r,o,i)}}updateChild(e,n){const s=Re(e);if(s===null)return n;{Y(Re(e)!==".priority"||Js(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(s).updateChild(He(e),n);return this.updateImmediateChild(s,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,r=0,i=!0;if(this.forEachChild(Ot,(o,a)=>{n[o]=a.val(e),s++,i&&De.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+lR(this.getPriority().val())+":"),this.forEachChild(Ot,(n,s)=>{const r=s.hash();r!==""&&(e+=":"+n+":"+r)}),this.lazyHash_=e===""?"":Mb(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const r=this.resolveIndex_(s);if(r){const i=r.getPredecessorKey(new Ae(e,n));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new Ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new Ae(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(r=>n(r.name,r.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,Ae.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,Ae.Wrap);let i=r.peek();for(;i!=null&&n.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ua?-1:0}withIndex(e){if(e===vi||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new De(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===vi||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Ot),r=n.getIterator(Ot);let i=s.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=s.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===vi?null:this.indexMap_.get(e.toString())}}De.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class FU extends De{constructor(){super(new zt(jp),De.EMPTY_NODE,ls.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return De.EMPTY_NODE}isEmpty(){return!1}}const Ua=new FU;Object.defineProperties(Ae,{MIN:{value:new Ae(Vi,De.EMPTY_NODE)},MAX:{value:new Ae(Pr,Ua)}});aR.__EMPTY_NODE=De.EMPTY_NODE;ct.__childrenNodeConstructor=De;OU(Ua);xU(Ua);/**
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
 */const UU=!0;function kt(t,e=null){if(t===null)return De.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),Y(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new ct(n,kt(e))}if(!(t instanceof Array)&&UU){const n=[];let s=!1;if(fn(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=kt(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new Ae(o,l)))}}),n.length===0)return De.EMPTY_NODE;const i=Nc(n,NU,o=>o.name,jp);if(s){const o=Nc(n,Ot.getCompare());return new De(i,kt(e),new ls({".priority":o},{".priority":Ot}))}else return new De(i,kt(e),ls.Default)}else{let n=De.EMPTY_NODE;return fn(t,(s,r)=>{if(vs(t,s)&&s.substring(0,1)!=="."){const i=kt(r);(i.isLeafNode()||!i.isEmpty())&&(n=n.updateImmediateChild(s,i))}}),n.updatePriority(kt(e))}}DU(kt);/**
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
 */class BU extends Ru{constructor(e){super(),this.indexPath_=e,Y(!Ie(e)&&Re(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),r=this.extractChild(n.node),i=s.compareTo(r);return i===0?Yi(e.name,n.name):i}makePost(e,n){const s=kt(e),r=De.EMPTY_NODE.updateChild(this.indexPath_,s);return new Ae(n,r)}maxPost(){const e=De.EMPTY_NODE.updateChild(this.indexPath_,Ua);return new Ae(Pr,e)}toString(){return sR(this.indexPath_,0).join("/")}}/**
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
 */class jU extends Ru{compare(e,n){const s=e.node.compareTo(n.node);return s===0?Yi(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return Ae.MIN}maxPost(){return Ae.MAX}makePost(e,n){const s=kt(e);return new Ae(n,s)}toString(){return".value"}}const HU=new jU;/**
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
 */function $U(t){return{type:"value",snapshotNode:t}}function WU(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function qU(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function lv(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function KU(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Hp{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ot}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Y(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Y(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Vi}hasEnd(){return this.endSet_}getIndexEndValue(){return Y(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Y(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Pr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Y(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ot}copy(){const e=new Hp;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function cv(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Ot?n="$priority":t.index_===HU?n="$value":t.index_===vi?n="$key":(Y(t.index_ instanceof BU,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=_t(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=_t(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+_t(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=_t(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+_t(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function uv(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Ot&&(e.i=t.index_.toString()),e}/**
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
 */class Oc extends eR{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(Y(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,r){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=r,this.log_=Va("p:rest:"),this.listens_={}}listen(e,n,s,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=Oc.getListenId_(e,s),a={};this.listens_[o]=a;const l=cv(e._queryParams);this.restRequest_(i+".json",l,(u,h)=>{let f=h;if(u===404&&(f=null,u=null),u===null&&this.onDataUpdate_(i,f,!1,s),Ri(this.listens_,o)===a){let p;u?u===401?p="permission_denied":p="rest_error:"+u:p="ok",r(p,null)}})}unlisten(e,n){const s=Oc.getListenId_(e,n);delete this.listens_[s]}get(e){const n=cv(e._queryParams),s=e._path.toString(),r=new ea;return this.restRequest_(s+".json",n,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(s,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(n.auth=r.accessToken),i&&i.token&&(n.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Wi(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=ta(a.responseText)}catch{sn("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&sn("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class zU{constructor(){this.rootNode_=De.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Dc(){return{value:null,children:new Map}}function fR(t,e,n){if(Ie(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Re(e);t.children.has(s)||t.children.set(s,Dc());const r=t.children.get(s);e=He(e),fR(r,e,n)}}function Kf(t,e,n){t.value!==null?n(e,t.value):GU(t,(s,r)=>{const i=new We(e.toString()+"/"+s);Kf(r,i,n)})}function GU(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class QU{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&fn(this.last_,(s,r)=>{n[s]=n[s]-r}),this.last_=e,n}}/**
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
 */const hv=10*1e3,YU=30*1e3,XU=5*60*1e3;class JU{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new QU(e);const s=hv+(YU-hv)*Math.random();qo(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;fn(e,(r,i)=>{i>0&&vs(this.statsToReport_,r)&&(n[r]=i,s=!0)}),s&&this.server_.reportStats(n),qo(this.reportStats_.bind(this),Math.floor(Math.random()*2*XU))}}/**
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
 */var Vn;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Vn||(Vn={}));function dR(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function pR(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function gR(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class xc{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Vn.ACK_USER_WRITE,this.source=dR()}operationForChild(e){if(Ie(this.path)){if(this.affectedTree.value!=null)return Y(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new We(e));return new xc(Le(),n,this.revert)}}else return Y(Re(this.path)===e,"operationForChild called for unrelated child."),new xc(He(this.path),this.affectedTree,this.revert)}}/**
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
 */class kr{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Vn.OVERWRITE}operationForChild(e){return Ie(this.path)?new kr(this.source,Le(),this.snap.getImmediateChild(e)):new kr(this.source,He(this.path),this.snap)}}/**
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
 */class ma{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Vn.MERGE}operationForChild(e){if(Ie(this.path)){const n=this.children.subtree(new We(e));return n.isEmpty()?null:n.value?new kr(this.source,Le(),n.value):new ma(this.source,Le(),n)}else return Y(Re(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ma(this.source,He(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class $p{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(Ie(e))return this.isFullyInitialized()&&!this.filtered_;const n=Re(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}function ZU(t,e,n,s){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(KU(o.childName,o.snapshotNode))}),Eo(t,r,"child_removed",e,s,n),Eo(t,r,"child_added",e,s,n),Eo(t,r,"child_moved",i,s,n),Eo(t,r,"child_changed",e,s,n),Eo(t,r,"value",e,s,n),r}function Eo(t,e,n,s,r,i){const o=s.filter(a=>a.type===n);o.sort((a,l)=>t2(t,a,l)),o.forEach(a=>{const l=e2(t,a,i);r.forEach(u=>{u.respondsTo(a.type)&&e.push(u.createEvent(l,t.query_))})})}function e2(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function t2(t,e,n){if(e.childName==null||n.childName==null)throw Hi("Should only compare child_ events.");const s=new Ae(e.childName,e.snapshotNode),r=new Ae(n.childName,n.snapshotNode);return t.index_.compare(s,r)}/**
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
 */function mR(t,e){return{eventCache:t,serverCache:e}}function Ko(t,e,n,s){return mR(new $p(e,n,s),t.serverCache)}function _R(t,e,n,s){return mR(t.eventCache,new $p(e,n,s))}function zf(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Nr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let Sh;const n2=()=>(Sh||(Sh=new zt(jF)),Sh);class je{static fromObject(e){let n=new je(null);return fn(e,(s,r)=>{n=n.set(new We(s),r)}),n}constructor(e,n=n2()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:Le(),value:this.value};if(Ie(e))return null;{const s=Re(e),r=this.children.get(s);if(r!==null){const i=r.findRootMostMatchingPathAndValue(He(e),n);return i!=null?{path:ft(new We(s),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(Ie(e))return this;{const n=Re(e),s=this.children.get(n);return s!==null?s.subtree(He(e)):new je(null)}}set(e,n){if(Ie(e))return new je(n,this.children);{const s=Re(e),i=(this.children.get(s)||new je(null)).set(He(e),n),o=this.children.insert(s,i);return new je(this.value,o)}}remove(e){if(Ie(e))return this.children.isEmpty()?new je(null):new je(null,this.children);{const n=Re(e),s=this.children.get(n);if(s){const r=s.remove(He(e));let i;return r.isEmpty()?i=this.children.remove(n):i=this.children.insert(n,r),this.value===null&&i.isEmpty()?new je(null):new je(this.value,i)}else return this}}get(e){if(Ie(e))return this.value;{const n=Re(e),s=this.children.get(n);return s?s.get(He(e)):null}}setTree(e,n){if(Ie(e))return n;{const s=Re(e),i=(this.children.get(s)||new je(null)).setTree(He(e),n);let o;return i.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,i),new je(this.value,o)}}fold(e){return this.fold_(Le(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((r,i)=>{s[r]=i.fold_(ft(e,r),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,Le(),n)}findOnPath_(e,n,s){const r=this.value?s(n,this.value):!1;if(r)return r;if(Ie(e))return null;{const i=Re(e),o=this.children.get(i);return o?o.findOnPath_(He(e),ft(n,i),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,Le(),n)}foreachOnPath_(e,n,s){if(Ie(e))return this;{this.value&&s(n,this.value);const r=Re(e),i=this.children.get(r);return i?i.foreachOnPath_(He(e),ft(n,r),s):new je(null)}}foreach(e){this.foreach_(Le(),e)}foreach_(e,n){this.children.inorderTraversal((s,r)=>{r.foreach_(ft(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class An{constructor(e){this.writeTree_=e}static empty(){return new An(new je(null))}}function zo(t,e,n){if(Ie(e))return new An(new je(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const r=s.path;let i=s.value;const o=un(r,e);return i=i.updateChild(o,n),new An(t.writeTree_.set(r,i))}else{const r=new je(n),i=t.writeTree_.setTree(e,r);return new An(i)}}}function fv(t,e,n){let s=t;return fn(n,(r,i)=>{s=zo(s,ft(e,r),i)}),s}function dv(t,e){if(Ie(e))return An.empty();{const n=t.writeTree_.setTree(e,new je(null));return new An(n)}}function Gf(t,e){return Ur(t,e)!=null}function Ur(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(un(n.path,e)):null}function pv(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ot,(s,r)=>{e.push(new Ae(s,r))}):t.writeTree_.children.inorderTraversal((s,r)=>{r.value!=null&&e.push(new Ae(s,r.value))}),e}function Ws(t,e){if(Ie(e))return t;{const n=Ur(t,e);return n!=null?new An(new je(n)):new An(t.writeTree_.subtree(e))}}function Qf(t){return t.writeTree_.isEmpty()}function Fi(t,e){return yR(Le(),t.writeTree_,e)}function yR(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(Y(i.value!==null,"Priority writes must always be leaf nodes"),s=i.value):n=yR(ft(t,r),i,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ft(t,".priority"),s)),n}}/**
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
 */function vR(t,e){return bR(e,t)}function s2(t,e,n,s,r){Y(s>t.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:r}),r&&(t.visibleWrites=zo(t.visibleWrites,e,n)),t.lastWriteId=s}function r2(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function i2(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);Y(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let r=s.visible,i=!1,o=t.allWrites.length-1;for(;r&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&o2(a,s.path)?r=!1:Tn(s.path,a.path)&&(i=!0)),o--}if(r){if(i)return a2(t),!0;if(s.snap)t.visibleWrites=dv(t.visibleWrites,s.path);else{const a=s.children;fn(a,l=>{t.visibleWrites=dv(t.visibleWrites,ft(s.path,l))})}return!0}else return!1}function o2(t,e){if(t.snap)return Tn(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&Tn(ft(t.path,n),e))return!0;return!1}function a2(t){t.visibleWrites=ER(t.allWrites,l2,Le()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function l2(t){return t.visible}function ER(t,e,n){let s=An.empty();for(let r=0;r<t.length;++r){const i=t[r];if(e(i)){const o=i.path;let a;if(i.snap)Tn(n,o)?(a=un(n,o),s=zo(s,a,i.snap)):Tn(o,n)&&(a=un(o,n),s=zo(s,Le(),i.snap.getChild(a)));else if(i.children){if(Tn(n,o))a=un(n,o),s=fv(s,a,i.children);else if(Tn(o,n))if(a=un(o,n),Ie(a))s=fv(s,Le(),i.children);else{const l=Ri(i.children,Re(a));if(l){const u=l.getChild(He(a));s=zo(s,Le(),u)}}}else throw Hi("WriteRecord should have .snap or .children")}}return s}function TR(t,e,n,s,r){if(!s&&!r){const i=Ur(t.visibleWrites,e);if(i!=null)return i;{const o=Ws(t.visibleWrites,e);if(Qf(o))return n;if(n==null&&!Gf(o,Le()))return null;{const a=n||De.EMPTY_NODE;return Fi(o,a)}}}else{const i=Ws(t.visibleWrites,e);if(!r&&Qf(i))return n;if(!r&&n==null&&!Gf(i,Le()))return null;{const o=function(u){return(u.visible||r)&&(!s||!~s.indexOf(u.writeId))&&(Tn(u.path,e)||Tn(e,u.path))},a=ER(t.allWrites,o,e),l=n||De.EMPTY_NODE;return Fi(a,l)}}}function c2(t,e,n){let s=De.EMPTY_NODE;const r=Ur(t.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Ot,(i,o)=>{s=s.updateImmediateChild(i,o)}),s;if(n){const i=Ws(t.visibleWrites,e);return n.forEachChild(Ot,(o,a)=>{const l=Fi(Ws(i,new We(o)),a);s=s.updateImmediateChild(o,l)}),pv(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const i=Ws(t.visibleWrites,e);return pv(i).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function u2(t,e,n,s,r){Y(s||r,"Either existingEventSnap or existingServerSnap must exist");const i=ft(e,n);if(Gf(t.visibleWrites,i))return null;{const o=Ws(t.visibleWrites,i);return Qf(o)?r.getChild(n):Fi(o,r.getChild(n))}}function h2(t,e,n,s){const r=ft(e,n),i=Ur(t.visibleWrites,r);if(i!=null)return i;if(s.isCompleteForChild(n)){const o=Ws(t.visibleWrites,r);return Fi(o,s.getNode().getImmediateChild(n))}else return null}function f2(t,e){return Ur(t.visibleWrites,e)}function d2(t,e,n,s,r,i,o){let a;const l=Ws(t.visibleWrites,e),u=Ur(l,Le());if(u!=null)a=u;else if(n!=null)a=Fi(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),p=i?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=p.getNext();for(;m&&h.length<r;)f(m,s)!==0&&h.push(m),m=p.getNext();return h}else return[]}function p2(){return{visibleWrites:An.empty(),allWrites:[],lastWriteId:-1}}function Yf(t,e,n,s){return TR(t.writeTree,t.treePath,e,n,s)}function wR(t,e){return c2(t.writeTree,t.treePath,e)}function gv(t,e,n,s){return u2(t.writeTree,t.treePath,e,n,s)}function Mc(t,e){return f2(t.writeTree,ft(t.treePath,e))}function g2(t,e,n,s,r,i){return d2(t.writeTree,t.treePath,e,n,s,r,i)}function Wp(t,e,n){return h2(t.writeTree,t.treePath,e,n)}function IR(t,e){return bR(ft(t.treePath,e),t.writeTree)}function bR(t,e){return{treePath:t,writeTree:e}}/**
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
 */class m2{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;Y(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),Y(s!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(s);if(r){const i=r.type;if(n==="child_added"&&i==="child_removed")this.changeMap.set(s,lv(s,e.snapshotNode,r.snapshotNode));else if(n==="child_removed"&&i==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&i==="child_changed")this.changeMap.set(s,qU(s,r.oldSnap));else if(n==="child_changed"&&i==="child_added")this.changeMap.set(s,WU(s,e.snapshotNode));else if(n==="child_changed"&&i==="child_changed")this.changeMap.set(s,lv(s,e.snapshotNode,r.oldSnap));else throw Hi("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class _2{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const RR=new _2;class qp{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new $p(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Wp(this.writes_,e,s)}}getChildAfterChild(e,n,s){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Nr(this.viewCache_),i=g2(this.writes_,r,n,1,s,e);return i.length===0?null:i[0]}}function y2(t,e){Y(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),Y(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function v2(t,e,n,s,r){const i=new m2;let o,a;if(n.type===Vn.OVERWRITE){const u=n;u.source.fromUser?o=Xf(t,e,u.path,u.snap,s,r,i):(Y(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered()&&!Ie(u.path),o=Lc(t,e,u.path,u.snap,s,r,a,i))}else if(n.type===Vn.MERGE){const u=n;u.source.fromUser?o=T2(t,e,u.path,u.children,s,r,i):(Y(u.source.fromServer,"Unknown source."),a=u.source.tagged||e.serverCache.isFiltered(),o=Jf(t,e,u.path,u.children,s,r,a,i))}else if(n.type===Vn.ACK_USER_WRITE){const u=n;u.revert?o=b2(t,e,u.path,s,r,i):o=w2(t,e,u.path,u.affectedTree,s,r,i)}else if(n.type===Vn.LISTEN_COMPLETE)o=I2(t,e,n.path,s,i);else throw Hi("Unknown operation type: "+n.type);const l=i.getChanges();return E2(e,o,l),{viewCache:o,changes:l}}function E2(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const r=s.getNode().isLeafNode()||s.getNode().isEmpty(),i=zf(t);(n.length>0||!t.eventCache.isFullyInitialized()||r&&!s.getNode().equals(i)||!s.getNode().getPriority().equals(i.getPriority()))&&n.push($U(zf(e)))}}function AR(t,e,n,s,r,i){const o=e.eventCache;if(Mc(s,n)!=null)return e;{let a,l;if(Ie(n))if(Y(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=Nr(e),h=u instanceof De?u:De.EMPTY_NODE,f=wR(s,h);a=t.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const u=Yf(s,Nr(e));a=t.filter.updateFullNode(e.eventCache.getNode(),u,i)}else{const u=Re(n);if(u===".priority"){Y(Js(n)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const f=gv(s,n,h,l);f!=null?a=t.filter.updatePriority(h,f):a=o.getNode()}else{const h=He(n);let f;if(o.isCompleteForChild(u)){l=e.serverCache.getNode();const p=gv(s,n,o.getNode(),l);p!=null?f=o.getNode().getImmediateChild(u).updateChild(h,p):f=o.getNode().getImmediateChild(u)}else f=Wp(s,u,e.serverCache);f!=null?a=t.filter.updateChild(o.getNode(),u,f,h,r,i):a=o.getNode()}}return Ko(e,a,o.isFullyInitialized()||Ie(n),t.filter.filtersNodes())}}function Lc(t,e,n,s,r,i,o,a){const l=e.serverCache;let u;const h=o?t.filter:t.filter.getIndexedFilter();if(Ie(n))u=h.updateFullNode(l.getNode(),s,null);else if(h.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,s);u=h.updateFullNode(l.getNode(),m,null)}else{const m=Re(n);if(!l.isCompleteForPath(n)&&Js(n)>1)return e;const _=He(n),b=l.getNode().getImmediateChild(m).updateChild(_,s);m===".priority"?u=h.updatePriority(l.getNode(),b):u=h.updateChild(l.getNode(),m,b,_,RR,null)}const f=_R(e,u,l.isFullyInitialized()||Ie(n),h.filtersNodes()),p=new qp(r,f,i);return AR(t,f,n,r,p,a)}function Xf(t,e,n,s,r,i,o){const a=e.eventCache;let l,u;const h=new qp(r,e,i);if(Ie(n))u=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ko(e,u,!0,t.filter.filtersNodes());else{const f=Re(n);if(f===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ko(e,u,a.isFullyInitialized(),a.isFiltered());else{const p=He(n),m=a.getNode().getImmediateChild(f);let _;if(Ie(p))_=s;else{const y=h.getCompleteChild(f);y!=null?nR(p)===".priority"&&y.getChild(rR(p)).isEmpty()?_=y:_=y.updateChild(p,s):_=De.EMPTY_NODE}if(m.equals(_))l=e;else{const y=t.filter.updateChild(a.getNode(),f,_,p,h,o);l=Ko(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function mv(t,e){return t.eventCache.isCompleteForChild(e)}function T2(t,e,n,s,r,i,o){let a=e;return s.foreach((l,u)=>{const h=ft(n,l);mv(e,Re(h))&&(a=Xf(t,a,h,u,r,i,o))}),s.foreach((l,u)=>{const h=ft(n,l);mv(e,Re(h))||(a=Xf(t,a,h,u,r,i,o))}),a}function _v(t,e,n){return n.foreach((s,r)=>{e=e.updateChild(s,r)}),e}function Jf(t,e,n,s,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,u;Ie(n)?u=s:u=new je(null).setTree(n,s);const h=e.serverCache.getNode();return u.children.inorderTraversal((f,p)=>{if(h.hasChild(f)){const m=e.serverCache.getNode().getImmediateChild(f),_=_v(t,m,p);l=Lc(t,l,new We(f),_,r,i,o,a)}}),u.children.inorderTraversal((f,p)=>{const m=!e.serverCache.isCompleteForChild(f)&&p.value===null;if(!h.hasChild(f)&&!m){const _=e.serverCache.getNode().getImmediateChild(f),y=_v(t,_,p);l=Lc(t,l,new We(f),y,r,i,o,a)}}),l}function w2(t,e,n,s,r,i,o){if(Mc(r,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(Ie(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Lc(t,e,n,l.getNode().getChild(n),r,i,a,o);if(Ie(n)){let u=new je(null);return l.getNode().forEachChild(vi,(h,f)=>{u=u.set(new We(h),f)}),Jf(t,e,n,u,r,i,a,o)}else return e}else{let u=new je(null);return s.foreach((h,f)=>{const p=ft(n,h);l.isCompleteForPath(p)&&(u=u.set(h,l.getNode().getChild(p)))}),Jf(t,e,n,u,r,i,a,o)}}function I2(t,e,n,s,r){const i=e.serverCache,o=_R(e,i.getNode(),i.isFullyInitialized()||Ie(n),i.isFiltered());return AR(t,o,n,s,RR,r)}function b2(t,e,n,s,r,i){let o;if(Mc(s,n)!=null)return e;{const a=new qp(s,e,r),l=e.eventCache.getNode();let u;if(Ie(n)||Re(n)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Yf(s,Nr(e));else{const f=e.serverCache.getNode();Y(f instanceof De,"serverChildren would be complete if leaf node"),h=wR(s,f)}h=h,u=t.filter.updateFullNode(l,h,i)}else{const h=Re(n);let f=Wp(s,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=l.getImmediateChild(h)),f!=null?u=t.filter.updateChild(l,h,f,He(n),a,i):e.eventCache.getNode().hasChild(h)?u=t.filter.updateChild(l,h,De.EMPTY_NODE,He(n),a,i):u=l,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Yf(s,Nr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,i)))}return o=e.serverCache.isFullyInitialized()||Mc(s,Le())!=null,Ko(e,u,o,t.filter.filtersNodes())}}function R2(t,e){const n=Nr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!Ie(e)&&!n.getImmediateChild(Re(e)).isEmpty())?n.getChild(e):null}function yv(t,e,n,s){e.type===Vn.MERGE&&e.source.queryId!==null&&(Y(Nr(t.viewCache_),"We should always have a full cache before handling merges"),Y(zf(t.viewCache_),"Missing event cache, even though we have a server cache"));const r=t.viewCache_,i=v2(t.processor_,r,e,n,s);return y2(t.processor_,i.viewCache),Y(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=i.viewCache,A2(t,i.changes,i.viewCache.eventCache.getNode())}function A2(t,e,n,s){const r=t.eventRegistrations_;return ZU(t.eventGenerator_,e,n,r)}/**
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
 */let vv;function C2(t){Y(!vv,"__referenceConstructor has already been defined"),vv=t}function Kp(t,e,n,s){const r=e.source.queryId;if(r!==null){const i=t.views.get(r);return Y(i!=null,"SyncTree gave us an op for an invalid query."),yv(i,e,n,s)}else{let i=[];for(const o of t.views.values())i=i.concat(yv(o,e,n,s));return i}}function zp(t,e){let n=null;for(const s of t.views.values())n=n||R2(s,e);return n}/**
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
 */let Ev;function S2(t){Y(!Ev,"__referenceConstructor has already been defined"),Ev=t}class Tv{constructor(e){this.listenProvider_=e,this.syncPointTree_=new je(null),this.pendingWriteTree_=p2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function P2(t,e,n,s,r){return s2(t.pendingWriteTree_,e,n,s,r),r?Cu(t,new kr(dR(),e,n)):[]}function ii(t,e,n=!1){const s=r2(t.pendingWriteTree_,e);if(i2(t.pendingWriteTree_,e)){let i=new je(null);return s.snap!=null?i=i.set(Le(),!0):fn(s.children,o=>{i=i.set(new We(o),!0)}),Cu(t,new xc(s.path,i,n))}else return[]}function Au(t,e,n){return Cu(t,new kr(pR(),e,n))}function k2(t,e,n){const s=je.fromObject(n);return Cu(t,new ma(pR(),e,s))}function N2(t,e,n,s){const r=kR(t,s);if(r!=null){const i=NR(r),o=i.path,a=i.queryId,l=un(o,e),u=new kr(gR(a),l,n);return OR(t,o,u)}else return[]}function O2(t,e,n,s){const r=kR(t,s);if(r){const i=NR(r),o=i.path,a=i.queryId,l=un(o,e),u=je.fromObject(n),h=new ma(gR(a),l,u);return OR(t,o,h)}else return[]}function CR(t,e,n){const r=t.pendingWriteTree_,i=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=un(o,e),u=zp(a,l);if(u)return u});return TR(r,e,i,n,!0)}function Cu(t,e){return SR(e,t.syncPointTree_,null,vR(t.pendingWriteTree_,Le()))}function SR(t,e,n,s){if(Ie(t.path))return PR(t,e,n,s);{const r=e.get(Le());n==null&&r!=null&&(n=zp(r,Le()));let i=[];const o=Re(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const u=n?n.getImmediateChild(o):null,h=IR(s,o);i=i.concat(SR(a,l,u,h))}return r&&(i=i.concat(Kp(r,t,s,n))),i}}function PR(t,e,n,s){const r=e.get(Le());n==null&&r!=null&&(n=zp(r,Le()));let i=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,u=IR(s,o),h=t.operationForChild(o);h&&(i=i.concat(PR(h,a,l,u)))}),r&&(i=i.concat(Kp(r,t,s,n))),i}function kR(t,e){return t.tagToQueryMap.get(e)}function NR(t){const e=t.indexOf("$");return Y(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new We(t.substr(0,e))}}function OR(t,e,n){const s=t.syncPointTree_.get(e);Y(s,"Missing sync point for query tag that we're tracking");const r=vR(t.pendingWriteTree_,e);return Kp(s,n,r,null)}/**
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
 */class Gp{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Gp(n)}node(){return this.node_}}class Qp{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ft(this.path_,e);return new Qp(this.syncTree_,n)}node(){return CR(this.syncTree_,this.path_)}}const D2=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},wv=function(t,e,n){if(!t||typeof t!="object")return t;if(Y(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return x2(t[".sv"],e,n);if(typeof t[".sv"]=="object")return M2(t[".sv"],e);Y(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},x2=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:Y(!1,"Unexpected server value: "+t)}},M2=function(t,e,n){t.hasOwnProperty("increment")||Y(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&Y(!1,"Unexpected increment value: "+s);const r=e.node();if(Y(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return s;const o=r.getValue();return typeof o!="number"?s:o+s},L2=function(t,e,n,s){return Yp(e,new Qp(n,t),s)},V2=function(t,e,n){return Yp(t,new Gp(e),n)};function Yp(t,e,n){const s=t.getPriority().val(),r=wv(s,e.getImmediateChild(".priority"),n);let i;if(t.isLeafNode()){const o=t,a=wv(o.getValue(),e,n);return a!==o.getValue()||r!==o.getPriority().val()?new ct(a,kt(r)):t}else{const o=t;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new ct(r))),o.forEachChild(Ot,(a,l)=>{const u=Yp(l,e.getImmediateChild(a),n);u!==l&&(i=i.updateImmediateChild(a,u))}),i}}/**
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
 */class Xp{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function Jp(t,e){let n=e instanceof We?e:new We(e),s=t,r=Re(n);for(;r!==null;){const i=Ri(s.node.children,r)||{children:{},childCount:0};s=new Xp(r,s,i),n=He(n),r=Re(n)}return s}function Xi(t){return t.node.value}function DR(t,e){t.node.value=e,Zf(t)}function xR(t){return t.node.childCount>0}function F2(t){return Xi(t)===void 0&&!xR(t)}function Su(t,e){fn(t.node.children,(n,s)=>{e(new Xp(n,t,s))})}function MR(t,e,n,s){n&&e(t),Su(t,r=>{MR(r,e,!0)})}function U2(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ba(t){return new We(t.parent===null?t.name:Ba(t.parent)+"/"+t.name)}function Zf(t){t.parent!==null&&B2(t.parent,t.name,t)}function B2(t,e,n){const s=F2(n),r=vs(t.node.children,e);s&&r?(delete t.node.children[e],t.node.childCount--,Zf(t)):!s&&!r&&(t.node.children[e]=n.node,t.node.childCount++,Zf(t))}/**
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
 */const j2=/[\[\].#$\/\u0000-\u001F\u007F]/,H2=/[\[\].#$\u0000-\u001F\u007F]/,Ph=10*1024*1024,LR=function(t){return typeof t=="string"&&t.length!==0&&!j2.test(t)},$2=function(t){return typeof t=="string"&&t.length!==0&&!H2.test(t)},W2=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),$2(t)},VR=function(t,e,n){const s=n instanceof We?new IU(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+pr(s));if(typeof e=="function")throw new Error(t+"contains a function "+pr(s)+" with contents = "+e.toString());if(Lb(e))throw new Error(t+"contains "+e.toString()+" "+pr(s));if(typeof e=="string"&&e.length>Ph/3&&tu(e)>Ph)throw new Error(t+"contains a string greater than "+Ph+" utf8 bytes "+pr(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(fn(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!LR(o)))throw new Error(t+" contains an invalid key ("+o+") "+pr(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);bU(s,o),VR(t,a,s),RU(s)}),r&&i)throw new Error(t+' contains ".value" child '+pr(s)+" in addition to actual children.")}},q2=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!LR(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!W2(n))throw new Error(pk(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class K2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function z2(t,e){let n=null;for(let s=0;s<e.length;s++){const r=e[s],i=r.getPath();n!==null&&!iR(i,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:i}),n.events.push(r)}n&&t.eventLists_.push(n)}function Br(t,e,n){z2(t,n),G2(t,s=>Tn(s,e)||Tn(e,s))}function G2(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const r=t.eventLists_[s];if(r){const i=r.path;e(i)?(Q2(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function Q2(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Wo&&Pt("event: "+n.toString()),Fa(s)}}}/**
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
 */const Y2="repo_interrupt",X2=25;class J2{constructor(e,n,s,r){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new K2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Dc(),this.transactionQueueTree_=new Xp,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function Z2(t,e,n){if(t.stats_=Fp(t.repoInfo_),t.forceRestClient_||zF())t.server_=new Oc(t.repoInfo_,(s,r,i,o)=>{Iv(t,s,r,i,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>bv(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{_t(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new hs(t.repoInfo_,e,(s,r,i,o)=>{Iv(t,s,r,i,o)},s=>{bv(t,s)},s=>{tB(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=ZF(t.repoInfo_,()=>new JU(t.stats_,t.server_)),t.infoData_=new zU,t.infoSyncTree_=new Tv({startListening:(s,r,i,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Au(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Zp(t,"connected",!1),t.serverSyncTree_=new Tv({startListening:(s,r,i,o)=>(t.server_.listen(s,i,r,(a,l)=>{const u=o(a,l);Br(t.eventQueue_,s._path,u)}),[]),stopListening:(s,r)=>{t.server_.unlisten(s,r)}})}function eB(t){const n=t.infoData_.getNode(new We(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function FR(t){return D2({timestamp:eB(t)})}function Iv(t,e,n,s,r){t.dataUpdateCount++;const i=new We(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(r)if(s){const l=ac(n,u=>kt(u));o=O2(t.serverSyncTree_,i,l,r)}else{const l=kt(n);o=N2(t.serverSyncTree_,i,l,r)}else if(s){const l=ac(n,u=>kt(u));o=k2(t.serverSyncTree_,i,l)}else{const l=kt(n);o=Au(t.serverSyncTree_,i,l)}let a=i;o.length>0&&(a=tg(t,i)),Br(t.eventQueue_,a,o)}function bv(t,e){Zp(t,"connected",e),e===!1&&sB(t)}function tB(t,e){fn(e,(n,s)=>{Zp(t,n,s)})}function Zp(t,e,n){const s=new We("/.info/"+e),r=kt(n);t.infoData_.updateSnapshot(s,r);const i=Au(t.infoSyncTree_,s,r);Br(t.eventQueue_,s,i)}function nB(t){return t.nextWriteId_++}function sB(t){UR(t,"onDisconnectEvents");const e=FR(t),n=Dc();Kf(t.onDisconnect_,Le(),(r,i)=>{const o=L2(r,i,t.serverSyncTree_,e);fR(n,r,o)});let s=[];Kf(n,Le(),(r,i)=>{s=s.concat(Au(t.serverSyncTree_,r,i));const o=aB(t,r);tg(t,o)}),t.onDisconnect_=Dc(),Br(t.eventQueue_,Le(),s)}function rB(t){t.persistentConnection_&&t.persistentConnection_.interrupt(Y2)}function UR(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Pt(n,...e)}function BR(t,e,n){return CR(t.serverSyncTree_,e,n)||De.EMPTY_NODE}function eg(t,e=t.transactionQueueTree_){if(e||Pu(t,e),Xi(e)){const n=HR(t,e);Y(n.length>0,"Sending zero length transaction queue"),n.every(r=>r.status===0)&&iB(t,Ba(e),n)}else xR(e)&&Su(e,n=>{eg(t,n)})}function iB(t,e,n){const s=n.map(u=>u.currentWriteId),r=BR(t,e,s);let i=r;const o=r.hash();for(let u=0;u<n.length;u++){const h=n[u];Y(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=un(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),l=e;t.server_.put(l.toString(),a,u=>{UR(t,"transaction put response",{path:l.toString(),status:u});let h=[];if(u==="ok"){const f=[];for(let p=0;p<n.length;p++)n[p].status=2,h=h.concat(ii(t.serverSyncTree_,n[p].currentWriteId)),n[p].onComplete&&f.push(()=>n[p].onComplete(null,!0,n[p].currentOutputSnapshotResolved)),n[p].unwatcher();Pu(t,Jp(t.transactionQueueTree_,e)),eg(t,t.transactionQueueTree_),Br(t.eventQueue_,e,h);for(let p=0;p<f.length;p++)Fa(f[p])}else{if(u==="datastale")for(let f=0;f<n.length;f++)n[f].status===3?n[f].status=4:n[f].status=0;else{sn("transaction at "+l.toString()+" failed: "+u);for(let f=0;f<n.length;f++)n[f].status=4,n[f].abortReason=u}tg(t,e)}},o)}function tg(t,e){const n=jR(t,e),s=Ba(n),r=HR(t,n);return oB(t,r,s),s}function oB(t,e,n){if(e.length===0)return;const s=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],u=un(n,l.path);let h=!1,f;if(Y(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,f=l.abortReason,r=r.concat(ii(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=X2)h=!0,f="maxretry",r=r.concat(ii(t.serverSyncTree_,l.currentWriteId,!0));else{const p=BR(t,l.path,o);l.currentInputSnapshot=p;const m=e[a].update(p.val());if(m!==void 0){VR("transaction failed: Data returned ",m,l.path);let _=kt(m);typeof m=="object"&&m!=null&&vs(m,".priority")||(_=_.updatePriority(p.getPriority()));const b=l.currentWriteId,O=FR(t),D=V2(_,p,O);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=D,l.currentWriteId=nB(t),o.splice(o.indexOf(b),1),r=r.concat(P2(t.serverSyncTree_,l.path,D,l.currentWriteId,l.applyLocally)),r=r.concat(ii(t.serverSyncTree_,b,!0))}else h=!0,f="nodata",r=r.concat(ii(t.serverSyncTree_,l.currentWriteId,!0))}Br(t.eventQueue_,n,r),r=[],h&&(e[a].status=2,function(p){setTimeout(p,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(f),!1,null))))}Pu(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Fa(s[a]);eg(t,t.transactionQueueTree_)}function jR(t,e){let n,s=t.transactionQueueTree_;for(n=Re(e);n!==null&&Xi(s)===void 0;)s=Jp(s,n),e=He(e),n=Re(e);return s}function HR(t,e){const n=[];return $R(t,e,n),n.sort((s,r)=>s.order-r.order),n}function $R(t,e,n){const s=Xi(e);if(s)for(let r=0;r<s.length;r++)n.push(s[r]);Su(e,r=>{$R(t,r,n)})}function Pu(t,e){const n=Xi(e);if(n){let s=0;for(let r=0;r<n.length;r++)n[r].status!==2&&(n[s]=n[r],s++);n.length=s,DR(e,n.length>0?n:void 0)}Su(e,s=>{Pu(t,s)})}function aB(t,e){const n=Ba(jR(t,e)),s=Jp(t.transactionQueueTree_,e);return U2(s,r=>{kh(t,r)}),kh(t,s),MR(s,r=>{kh(t,r)}),n}function kh(t,e){const n=Xi(e);if(n){const s=[];let r=[],i=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(Y(i===o-1,"All SENT items should be at beginning of queue."),i=o,n[o].status=3,n[o].abortReason="set"):(Y(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),r=r.concat(ii(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?DR(e,void 0):n.length=i+1,Br(t.eventQueue_,Ba(e),r);for(let o=0;o<s.length;o++)Fa(s[o])}}/**
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
 */function lB(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let r=n[s];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function cB(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):sn(`Invalid query segment '${n}' in query '${t}'`)}return e}const Rv=function(t,e){const n=uB(t),s=n.namespace;n.domain==="firebase.com"&&Sr(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&Sr("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||UF();const r=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new YF(n.host,n.secure,s,r,e,"",s!==n.subdomain),path:new We(n.pathString)}},uB=function(t){let e="",n="",s="",r="",i="",o=!0,a="https",l=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(a=t.substring(0,u-1),t=t.substring(u+2));let h=t.indexOf("/");h===-1&&(h=t.length);let f=t.indexOf("?");f===-1&&(f=t.length),e=t.substring(0,Math.min(h,f)),h<f&&(r=lB(t.substring(h,f)));const p=cB(t.substring(Math.min(t.length,f)));u=e.indexOf(":"),u>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const _=e.indexOf(".");s=e.substring(0,_).toLowerCase(),n=e.substring(_+1),i=s}"ns"in p&&(i=p.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:r,namespace:i}};/**
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
 */class ng{constructor(e,n,s,r){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=r}get key(){return Ie(this._path)?null:nR(this._path)}get ref(){return new Ji(this._repo,this._path)}get _queryIdentifier(){const e=uv(this._queryParams),n=Lp(e);return n==="{}"?"default":n}get _queryObject(){return uv(this._queryParams)}isEqual(e){if(e=Bt(e),!(e instanceof ng))return!1;const n=this._repo===e._repo,s=iR(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return n&&s&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+wU(this._path)}}class Ji extends ng{constructor(e,n){super(e,n,new Hp,!1)}get parent(){const e=rR(this._path);return e===null?null:new Ji(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}C2(Ji);S2(Ji);/**
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
 */const hB="FIREBASE_DATABASE_EMULATOR_HOST",ed={};let fB=!1;function dB(t,e,n,s,r){let i=s||t.options.databaseURL;i===void 0&&(t.options.projectId||Sr("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Pt("Using default host for project ",t.options.projectId),i=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=Rv(i,r),a=o.repoInfo,l;typeof process<"u"&&qy&&(l=qy[hB]),l?(i=`http://${l}?ns=${a.namespace}`,o=Rv(i,r),a=o.repoInfo):o.repoInfo.secure;const u=new QF(t.name,t.options,e);q2("Invalid Firebase Database URL",o),Ie(o.path)||Sr("Database URL must point to the root of a Firebase Database (not including a child path).");const h=gB(a,t,u,new GF(t,n));return new mB(h,t)}function pB(t,e){const n=ed[e];(!n||n[t.key]!==t)&&Sr(`Database ${e}(${t.repoInfo_}) has already been deleted.`),rB(t),delete n[t.key]}function gB(t,e,n,s){let r=ed[e.name];r||(r={},ed[e.name]=r);let i=r[t.toURLString()];return i&&Sr("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new J2(t,fB,n,s),r[t.toURLString()]=i,i}class mB{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(Z2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ji(this._repo,Le())),this._rootInternal}_delete(){return this._rootInternal!==null&&(pB(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Sr("Cannot call "+e+" on a deleted database.")}}/**
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
 */function _B(t){DF(nr),$n(new Sn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return dB(s,r,i,n)},"PUBLIC").setMultipleInstances(!0)),tn(Ky,zy,t),tn(Ky,zy,"esm2017")}hs.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};hs.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};_B();/**
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
 */const WR="firebasestorage.googleapis.com",yB="storageBucket",vB=2*60*1e3,EB=10*60*1e3;/**
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
 */class Qn extends Gn{constructor(e,n,s=0){super(Nh(e),`Firebase Storage: ${n} (${Nh(e)})`),this.status_=s,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Qn.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Nh(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var zn;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(zn||(zn={}));function Nh(t){return"storage/"+t}function TB(){const t="An unknown error occurred, please check the error payload for server response.";return new Qn(zn.UNKNOWN,t)}function wB(){return new Qn(zn.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function IB(){return new Qn(zn.CANCELED,"User canceled the upload/download.")}function bB(t){return new Qn(zn.INVALID_URL,"Invalid URL '"+t+"'.")}function RB(t){return new Qn(zn.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Av(t){return new Qn(zn.INVALID_ARGUMENT,t)}function qR(){return new Qn(zn.APP_DELETED,"The Firebase app was deleted.")}function AB(t){return new Qn(zn.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class wn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let s;try{s=wn.makeFromUrl(e,n)}catch{return new wn(e,"")}if(s.path==="")return s;throw RB(e)}static makeFromUrl(e,n){let s=null;const r="([A-Za-z0-9.\\-_]+)";function i(C){C.path.charAt(C.path.length-1)==="/"&&(C.path_=C.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+r+o,"i"),l={bucket:1,path:3};function u(C){C.path_=decodeURIComponent(C.path)}const h="v[A-Za-z0-9_]+",f=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",m=new RegExp(`^https?://${f}/${h}/b/${r}/o${p}`,"i"),_={bucket:1,path:3},y=n===WR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,b="([^?#]*)",O=new RegExp(`^https?://${y}/${r}/${b}`,"i"),v=[{regex:a,indices:l,postModify:i},{regex:m,indices:_,postModify:u},{regex:O,indices:{bucket:1,path:2},postModify:u}];for(let C=0;C<v.length;C++){const x=v[C],M=x.regex.exec(e);if(M){const I=M[x.indices.bucket];let T=M[x.indices.path];T||(T=""),s=new wn(I,T),x.postModify(s);break}}if(s==null)throw bB(e);return s}}class CB{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function SB(t,e,n){let s=1,r=null,i=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...b){u||(u=!0,e.apply(null,b))}function f(b){r=setTimeout(()=>{r=null,t(m,l())},b)}function p(){i&&clearTimeout(i)}function m(b,...O){if(u){p();return}if(b){p(),h.call(null,b,...O);return}if(l()||o){p(),h.call(null,b,...O);return}s<64&&(s*=2);let v;a===1?(a=2,v=0):v=(s+Math.random())*1e3,f(v)}let _=!1;function y(b){_||(_=!0,p(),!u&&(r!==null?(b||(a=2),clearTimeout(r),f(0)):b||(a=1)))}return f(0),i=setTimeout(()=>{o=!0,y(!0)},n),y}function PB(t){t(!1)}/**
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
 */function kB(t){return t!==void 0}function Cv(t,e,n,s){if(s<e)throw Av(`Invalid value for '${t}'. Expected ${e} or greater.`);if(s>n)throw Av(`Invalid value for '${t}'. Expected ${n} or less.`)}function NB(t){const e=encodeURIComponent;let n="?";for(const s in t)if(t.hasOwnProperty(s)){const r=e(s)+"="+e(t[s]);n=n+r+"&"}return n=n.slice(0,-1),n}var Vc;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Vc||(Vc={}));/**
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
 */function OB(t,e){const n=t>=500&&t<600,r=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||r||i}/**
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
 */class DB{constructor(e,n,s,r,i,o,a,l,u,h,f,p=!0){this.url_=e,this.method_=n,this.headers_=s,this.body_=r,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=f,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,_)=>{this.resolve_=m,this.reject_=_,this.start_()})}start_(){const e=(s,r)=>{if(r){s(!1,new bl(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Vc.NO_ERROR,l=i.getStatus();if(!a||OB(l,this.additionalRetryCodes_)&&this.retry){const h=i.getErrorCode()===Vc.ABORT;s(!1,new bl(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;s(!0,new bl(u,i))})},n=(s,r)=>{const i=this.resolve_,o=this.reject_,a=r.connection;if(r.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());kB(l)?i(l):i()}catch(l){o(l)}else if(a!==null){const l=TB();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(r.canceled){const l=this.appDelete_?qR():IB();o(l)}else{const l=wB();o(l)}};this.canceled_?n(!1,new bl(!1,null,!0)):this.backoffId_=SB(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&PB(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class bl{constructor(e,n,s){this.wasSuccessCode=e,this.connection=n,this.canceled=!!s}}function xB(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function MB(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function LB(t,e){e&&(t["X-Firebase-GMPID"]=e)}function VB(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function FB(t,e,n,s,r,i,o=!0){const a=NB(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return LB(u,e),xB(u,n),MB(u,i),VB(u,s),new DB(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,r,o)}/**
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
 */function UB(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function BB(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */class Fc{constructor(e,n){this._service=e,n instanceof wn?this._location=n:this._location=wn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Fc(e,n)}get root(){const e=new wn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return BB(this._location.path)}get storage(){return this._service}get parent(){const e=UB(this._location.path);if(e===null)return null;const n=new wn(this._location.bucket,e);return new Fc(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw AB(e)}}function Sv(t,e){const n=e==null?void 0:e[yB];return n==null?null:wn.makeFromBucketSpec(n,t)}class jB{constructor(e,n,s,r,i){this.app=e,this._authProvider=n,this._appCheckProvider=s,this._url=r,this._firebaseVersion=i,this._bucket=null,this._host=WR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=vB,this._maxUploadRetryTime=EB,this._requests=new Set,r!=null?this._bucket=wn.makeFromBucketSpec(r,this._host):this._bucket=Sv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wn.makeFromBucketSpec(this._url,e):this._bucket=Sv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Cv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Cv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(Jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Fc(this,e)}_makeRequest(e,n,s,r,i=!0){if(this._deleted)return new CB(qR());{const o=FB(e,this._appId,s,r,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[s,r]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,s,r).getPromise()}}const Pv="@firebase/storage",kv="0.13.7";/**
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
 */const HB="storage";function $B(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),s=t.getProvider("auth-internal"),r=t.getProvider("app-check-internal");return new jB(n,s,r,e,nr)}function WB(){$n(new Sn(HB,$B,"PUBLIC").setMultipleInstances(!0)),tn(Pv,kv,""),tn(Pv,kv,"esm2017")}WB();const Oh=new WeakMap;function sg(t,e){return Oh.has(e)||Oh.set(e,t||{f:{},r:{},s:{},u:{}}),Oh.get(e)}function qB(t,e,n,s){if(!t)return n;const[r,i]=KR(t);if(!r)return n;const o=sg(void 0,s)[r]||{},a=e||i;return a&&a in o?o[a]:n}function KB(t,e,n,s){if(!t)return;const[r,i]=KR(t);if(!r)return;const o=sg(void 0,s)[r],a=e||i;if(a)return n.then(l=>{o[a]=l}).catch(Ln),a}function KR(t){return bF(t)||RF(t)?["f",t.path]:AF(t)?["r",t.toString()]:CF(t)?["s",t.toString()]:[]}const Dh=new WeakMap;function zB(t,e,n){const s=Ma();Dh.has(s)||Dh.set(s,new Map);const r=Dh.get(s),i=KB(e,n,t,s);return i&&r.set(i,t),i?()=>r.delete(i):Ln}const GB={toFirestore(t){return t},fromFirestore(t,e){return t.exists()?Object.defineProperties(t.data(e),{id:{value:t.id}}):null}};function td(t,e,n,s){if(!wF(t))return[t,{}];const r=[{},{}],i=Object.keys(n).reduce((a,l)=>{const u=n[l];return a[u.path]=u.data(),a},{});function o(a,l,u,h){l=l||{};const[f,p]=h;Object.getOwnPropertyNames(a).forEach(m=>{const _=Object.getOwnPropertyDescriptor(a,m);_&&!_.enumerable&&Object.defineProperty(f,m,_)});for(const m in a){const _=a[m];if(_==null||_ instanceof Date||_ instanceof Ze||_ instanceof Na)f[m]=_;else if(Mp(_)){const y=u+m;f[m]=y in n?l[m]:_.path,p[y]=_.converter?_:_.withConverter(s.converter)}else if(Array.isArray(_)){f[m]=Array(_.length);for(let y=0;y<_.length;y++){const b=_[y];b&&b.path in i&&(f[m][y]=i[b.path])}o(_,l[m]||f[m],u+m+".",[f[m],p])}else Fr(_)?(f[m]={},o(_,l[m],u+m+".",[f[m],p])):f[m]=_}}return o(t,e,"",r),r}const rg={reset:!1,wait:!0,maxRefDepth:2,converter:GB,snapshotOptions:{serverTimestamps:"estimate"}};function Uc(t){for(const e in t)t[e].unsub()}function nd(t,e,n,s,r,i,o,a,l){const[u,h]=td(s.data(t.snapshotOptions),xp(e,n),r,t);i.set(e,n,u),sd(t,e,n,r,h,i,o,a,l)}function QB({ref:t,target:e,path:n,depth:s,resolve:r,reject:i,ops:o},a){const l=Object.create(null);let u=Ln;return a.once?PI(t).then(h=>{h.exists()?nd(a,e,n,h,l,o,s,r,i):(o.set(e,n,null),r())}).catch(i):u=gp(t,h=>{h.exists()?nd(a,e,n,h,l,o,s,r,i):(o.set(e,n,null),r())},i),()=>{u(),Uc(l)}}function sd(t,e,n,s,r,i,o,a,l){const u=Object.keys(r);if(Object.keys(s).filter(y=>u.indexOf(y)<0).forEach(y=>{s[y].unsub(),delete s[y]}),!u.length||++o>t.maxRefDepth)return a(n);let f=0;const p=u.length,m=Object.create(null);function _(y){y in m&&++f>=p&&a(n)}u.forEach(y=>{const b=s[y],O=r[y],D=`${n}.${y}`;if(m[D]=!0,b)if(b.path!==O.path)b.unsub();else return;s[y]={data:()=>xp(e,D),unsub:QB({ref:O,target:e,path:D,depth:o,ops:i,resolve:_.bind(null,D),reject:l},t),path:O.path}})}function YB(t,e,n,s,r,i){const o=Object.assign({},rg,i),{snapshotListenOptions:a,snapshotOptions:l,wait:u,once:h}=o,f="value";let p=Gt(u?[]:t.value);u||n.set(t,f,[]);const m=s;let _,y=Ln;const b=[],O={added:({newIndex:v,doc:C})=>{b.splice(v,0,Object.create(null));const x=b[v],[M,I]=td(C.data(l),void 0,x,o);n.add(Dn(p),v,M),sd(o,p,`${f}.${v}`,x,I,n,0,s.bind(null,C),r)},modified:({oldIndex:v,newIndex:C,doc:x})=>{const M=Dn(p),I=b[v],T=M[v],[w,R]=td(x.data(l),T,I,o);b.splice(C,0,I),n.remove(M,v),n.add(M,C,w),sd(o,p,`${f}.${C}`,I,R,n,0,s,r)},removed:({oldIndex:v})=>{const C=Dn(p);n.remove(C,v),Uc(b.splice(v,1)[0])}};function D(v){const C=v.docChanges(a);if(!_&&C.length){_=!0;let x=0;const M=C.length,I=Object.create(null);for(let T=0;T<M;T++)I[C[T].doc.id]=!0;s=T=>{T&&T.id in I&&++x>=M&&(u&&(n.set(t,f,Dn(p)),p=t),m(Dn(p)),s=Ln)}}C.forEach(x=>{O[x.type](x)}),C.length||(u&&(n.set(t,f,Dn(p)),p=t),s(Dn(p)))}return h?Dx(e).then(D).catch(r):y=gp(e,D,r),v=>{if(y(),v){const C=typeof v=="function"?v():[];n.set(t,f,C)}b.forEach(Uc)}}function XB(t,e,n,s,r,i){const o=Object.assign({},rg,i),a="value",l=Object.create(null);s=SF(s,()=>xp(t,a));let u=Ln;function h(f){f.exists()?nd(o,t,a,f,l,n,0,s,r):(n.set(t,a,null),s(null))}return o.once?PI(e).then(h).catch(r):u=gp(e,h,r),f=>{if(u(),f){const p=typeof f=="function"?f():null;n.set(t,a,p)}Uc(l)}}const Nv=Symbol();function JB(t,e){let n=Ln;const s=Object.assign({},rg,e),r=Dn(t),i=s.target||Gt();kF()&&(s.once=!0);const o=qB(r,s.ssrKey,Nv,Ma()),a=o!==Nv;a&&(i.value=o);let l=!a;const u=Gt(!1),h=Gt(),f=Ei(),p=fd();let m=Ln;function _(){let O=Dn(t);const D=new Promise((v,C)=>{if(n(s.reset),!O)return n=Ln,v(null);u.value=l,l=!0,O.converter||(O=O.withConverter(s.converter)),n=(Mp(O)?XB:YB)(i,O,ZB,v,C,s)}).catch(v=>(f.value===D&&(h.value=v),Promise.reject(v))).finally(()=>{f.value===D&&(u.value=!1)});f.value=D}let y=Ln;(nt(t)||typeof t=="function")&&(y=Tr(t,_)),_(),r&&(m=zB(f.value,r,s.ssrKey)),p&&QA(b);function b(O=s.reset){y(),m(),n(O)}return Object.defineProperties(i,{error:{get:()=>h},data:{get:()=>i},pending:{get:()=>u},promise:{get:()=>f},stop:{get:()=>b}})}const ZB={set:(t,e,n)=>EF(t,e,n),add:(t,e,n)=>t.splice(e,0,n),remove:(t,e)=>t.splice(e,1)};function F4(t,e){return JB(t,e)}function U4(t){return Ex(Ma(t))}const ig=Symbol("VueFireAuth");function ej({dependencies:t,initialUser:e}){return(n,s)=>{const[r,i]=tj(n,s,e,t);OF(r,i)}}function tj(t,e,n,s,r=DL(t,s)){const i=NF(t,e).run(()=>Gt(n));return Nb.set(t,i),e.provide(ig,r),[i,r]}function B4(t){return vF?vt(ig):null}function nj(t,{firebaseApp:e,modules:n=[]}){t.provide(kb,e);for(const s of n)s(e,t)}const sj=jt(t=>{const e=t.$firebaseApp;return ej({initialUser:t.payload.vuefireUser,dependencies:{errorMap:eb,persistence:[tV,HL],popupRedirectResolver:$V}})(e,t.vueApp),{provide:{firebaseAuth:t.vueApp.runWithContext(()=>vt(ig))}}}),rj=jt(t=>{var n;const e=t.$firebaseApp;t.vueApp.use(nj,{firebaseApp:e}),(n=t.payload)!=null&&n.vuefire&&sg(t.payload.vuefire,e)}),zR=/^[a-z0-9]+(-[a-z0-9]+)*$/,ja=(t,e,n,s="")=>{const r=t.split(":");if(t.slice(0,1)==="@"){if(r.length<2||r.length>3)return null;s=r.shift().slice(1)}if(r.length>3||!r.length)return null;if(r.length>1){const a=r.pop(),l=r.pop(),u={provider:r.length>0?r[0]:s,prefix:l,name:a};return e&&!Hl(u)?null:u}const i=r[0],o=i.split("-");if(o.length>1){const a={provider:s,prefix:o.shift(),name:o.join("-")};return e&&!Hl(a)?null:a}if(n&&s===""){const a={provider:s,prefix:"",name:i};return e&&!Hl(a,n)?null:a}return null},Hl=(t,e)=>t?!!((e&&t.prefix===""||t.prefix)&&t.name):!1,GR=Object.freeze({left:0,top:0,width:16,height:16}),Bc=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),Zi=Object.freeze({...GR,...Bc}),rd=Object.freeze({...Zi,body:"",hidden:!1});function ij(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const s=((t.rotate||0)+(e.rotate||0))%4;return s&&(n.rotate=s),n}function Ov(t,e){const n=ij(t,e);for(const s in rd)s in Bc?s in t&&!(s in n)&&(n[s]=Bc[s]):s in e?n[s]=e[s]:s in t&&(n[s]=t[s]);return n}function oj(t,e){const n=t.icons,s=t.aliases||Object.create(null),r=Object.create(null);function i(o){if(n[o])return r[o]=[];if(!(o in r)){r[o]=null;const a=s[o]&&s[o].parent,l=a&&i(a);l&&(r[o]=[a].concat(l))}return r[o]}return Object.keys(n).concat(Object.keys(s)).forEach(i),r}function aj(t,e,n){const s=t.icons,r=t.aliases||Object.create(null);let i={};function o(a){i=Ov(s[a]||r[a],i)}return o(e),n.forEach(o),Ov(t,i)}function QR(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(r=>{e(r,null),n.push(r)});const s=oj(t);for(const r in s){const i=s[r];i&&(e(r,aj(t,r,i)),n.push(r))}return n}const lj={provider:"",aliases:{},not_found:{},...GR};function xh(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function YR(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!xh(t,lj))return null;const n=e.icons;for(const r in n){const i=n[r];if(!r||typeof i.body!="string"||!xh(i,rd))return null}const s=e.aliases||Object.create(null);for(const r in s){const i=s[r],o=i.parent;if(!r||typeof o!="string"||!n[o]&&!s[o]||!xh(i,rd))return null}return e}const Dv=Object.create(null);function cj(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function Or(t,e){const n=Dv[t]||(Dv[t]=Object.create(null));return n[e]||(n[e]=cj(t,e))}function XR(t,e){return YR(e)?QR(e,(n,s)=>{s?t.icons[n]=s:t.missing.add(n)}):[]}function uj(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let _a=!1;function JR(t){return typeof t=="boolean"&&(_a=t),_a}function og(t){const e=typeof t=="string"?ja(t,!0,_a):t;if(e){const n=Or(e.provider,e.prefix),s=e.name;return n.icons[s]||(n.missing.has(s)?null:void 0)}}function hj(t,e){const n=ja(t,!0,_a);if(!n)return!1;const s=Or(n.provider,n.prefix);return e?uj(s,n.name,e):(s.missing.add(n.name),!0)}function fj(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),_a&&!e&&!t.prefix){let r=!1;return YR(t)&&(t.prefix="",QR(t,(i,o)=>{hj(i,o)&&(r=!0)})),r}const n=t.prefix;if(!Hl({prefix:n,name:"a"}))return!1;const s=Or(e,n);return!!XR(s,t)}function j4(t){const e=og(t);return e&&{...Zi,...e}}const ZR=Object.freeze({width:null,height:null}),eA=Object.freeze({...ZR,...Bc}),dj=/(-?[0-9.]*[0-9]+[0-9.]*)/g,pj=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function xv(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const s=t.split(dj);if(s===null||!s.length)return t;const r=[];let i=s.shift(),o=pj.test(i);for(;;){if(o){const a=parseFloat(i);isNaN(a)?r.push(i):r.push(Math.ceil(a*e*n)/n)}else r.push(i);if(i=s.shift(),i===void 0)return r.join("");o=!o}}function gj(t,e="defs"){let n="";const s=t.indexOf("<"+e);for(;s>=0;){const r=t.indexOf(">",s),i=t.indexOf("</"+e);if(r===-1||i===-1)break;const o=t.indexOf(">",i);if(o===-1)break;n+=t.slice(r+1,i).trim(),t=t.slice(0,s).trim()+t.slice(o+1)}return{defs:n,content:t}}function mj(t,e){return t?"<defs>"+t+"</defs>"+e:e}function _j(t,e,n){const s=gj(t);return mj(s.defs,e+s.content+n)}const yj=t=>t==="unset"||t==="undefined"||t==="none";function vj(t,e){const n={...Zi,...t},s={...eA,...e},r={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,s].forEach(y=>{const b=[],O=y.hFlip,D=y.vFlip;let v=y.rotate;O?D?v+=2:(b.push("translate("+(r.width+r.left).toString()+" "+(0-r.top).toString()+")"),b.push("scale(-1 1)"),r.top=r.left=0):D&&(b.push("translate("+(0-r.left).toString()+" "+(r.height+r.top).toString()+")"),b.push("scale(1 -1)"),r.top=r.left=0);let C;switch(v<0&&(v-=Math.floor(v/4)*4),v=v%4,v){case 1:C=r.height/2+r.top,b.unshift("rotate(90 "+C.toString()+" "+C.toString()+")");break;case 2:b.unshift("rotate(180 "+(r.width/2+r.left).toString()+" "+(r.height/2+r.top).toString()+")");break;case 3:C=r.width/2+r.left,b.unshift("rotate(-90 "+C.toString()+" "+C.toString()+")");break}v%2===1&&(r.left!==r.top&&(C=r.left,r.left=r.top,r.top=C),r.width!==r.height&&(C=r.width,r.width=r.height,r.height=C)),b.length&&(i=_j(i,'<g transform="'+b.join(" ")+'">',"</g>"))});const o=s.width,a=s.height,l=r.width,u=r.height;let h,f;o===null?(f=a===null?"1em":a==="auto"?u:a,h=xv(f,l/u)):(h=o==="auto"?l:o,f=a===null?xv(h,u/l):a==="auto"?u:a);const p={},m=(y,b)=>{yj(b)||(p[y]=b.toString())};m("width",h),m("height",f);const _=[r.left,r.top,l,u];return p.viewBox=_.join(" "),{attributes:p,viewBox:_,body:i}}const Ej=/\sid="(\S+)"/g,Tj="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let wj=0;function Ij(t,e=Tj){const n=[];let s;for(;s=Ej.exec(t);)n.push(s[1]);if(!n.length)return t;const r="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const o=typeof e=="function"?e(i):e+(wj++).toString(),a=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+a+')([")]|\\.[a-z])',"g"),"$1"+o+r+"$3")}),t=t.replace(new RegExp(r,"g"),""),t}const id=Object.create(null);function tA(t,e){id[t]=e}function od(t){return id[t]||id[""]}function ag(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const ku=Object.create(null),To=["https://api.simplesvg.com","https://api.unisvg.com"],$l=[];for(;To.length>0;)To.length===1||Math.random()>.5?$l.push(To.shift()):$l.push(To.pop());ku[""]=ag({resources:["https://api.iconify.design"].concat($l)});function nA(t,e){const n=ag(e);return n===null?!1:(ku[t]=n,!0)}function Nu(t){return ku[t]}function bj(){return Object.keys(ku)}const Rj=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let jc=Rj();function Aj(t){jc=t}function Cj(){return jc}function Sj(t,e){const n=Nu(t);if(!n)return 0;let s;if(!n.maxURL)s=0;else{let r=0;n.resources.forEach(o=>{r=Math.max(r,o.length)});const i=e+".json?icons=";s=n.maxURL-r-n.path.length-i.length}return s}function Pj(t){return t===404}const kj=(t,e,n)=>{const s=[],r=Sj(t,e),i="icons";let o={type:i,provider:t,prefix:e,icons:[]},a=0;return n.forEach((l,u)=>{a+=l.length+1,a>=r&&u>0&&(s.push(o),o={type:i,provider:t,prefix:e,icons:[]},a=l.length),o.icons.push(l)}),s.push(o),s};function Nj(t){if(typeof t=="string"){const e=Nu(t);if(e)return e.path}return"/"}const Oj=(t,e,n)=>{if(!jc){n("abort",424);return}let s=Nj(e.provider);switch(e.type){case"icons":{const i=e.prefix,a=e.icons.join(","),l=new URLSearchParams({icons:a});s+=i+".json?"+l.toString();break}case"custom":{const i=e.uri;s+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let r=503;jc(t+s).then(i=>{const o=i.status;if(o!==200){setTimeout(()=>{n(Pj(o)?"abort":"next",o)});return}return r=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",r)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",r)})},Dj={prepare:kj,send:Oj};function xj(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((r,i)=>r.provider!==i.provider?r.provider.localeCompare(i.provider):r.prefix!==i.prefix?r.prefix.localeCompare(i.prefix):r.name.localeCompare(i.name));let s={provider:"",prefix:"",name:""};return t.forEach(r=>{if(s.name===r.name&&s.prefix===r.prefix&&s.provider===r.provider)return;s=r;const i=r.provider,o=r.prefix,a=r.name,l=n[i]||(n[i]=Object.create(null)),u=l[o]||(l[o]=Or(i,o));let h;a in u.icons?h=e.loaded:o===""||u.missing.has(a)?h=e.missing:h=e.pending;const f={provider:i,prefix:o,name:a};h.push(f)}),e}function sA(t,e){t.forEach(n=>{const s=n.loaderCallbacks;s&&(n.loaderCallbacks=s.filter(r=>r.id!==e))})}function Mj(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const s=t.provider,r=t.prefix;e.forEach(i=>{const o=i.icons,a=o.pending.length;o.pending=o.pending.filter(l=>{if(l.prefix!==r)return!0;const u=l.name;if(t.icons[u])o.loaded.push({provider:s,prefix:r,name:u});else if(t.missing.has(u))o.missing.push({provider:s,prefix:r,name:u});else return n=!0,!0;return!1}),o.pending.length!==a&&(n||sA([t],i.id),i.callback(o.loaded.slice(0),o.missing.slice(0),o.pending.slice(0),i.abort))})}))}let Lj=0;function Vj(t,e,n){const s=Lj++,r=sA.bind(null,n,s);if(!e.pending.length)return r;const i={id:s,icons:e,callback:t,abort:r};return n.forEach(o=>{(o.loaderCallbacks||(o.loaderCallbacks=[])).push(i)}),r}function Fj(t,e=!0,n=!1){const s=[];return t.forEach(r=>{const i=typeof r=="string"?ja(r,e,n):r;i&&s.push(i)}),s}var Uj={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function Bj(t,e,n,s){const r=t.resources.length,i=t.random?Math.floor(Math.random()*r):t.index;let o;if(t.random){let M=t.resources.slice(0);for(o=[];M.length>1;){const I=Math.floor(Math.random()*M.length);o.push(M[I]),M=M.slice(0,I).concat(M.slice(I+1))}o=o.concat(M)}else o=t.resources.slice(i).concat(t.resources.slice(0,i));const a=Date.now();let l="pending",u=0,h,f=null,p=[],m=[];typeof s=="function"&&m.push(s);function _(){f&&(clearTimeout(f),f=null)}function y(){l==="pending"&&(l="aborted"),_(),p.forEach(M=>{M.status==="pending"&&(M.status="aborted")}),p=[]}function b(M,I){I&&(m=[]),typeof M=="function"&&m.push(M)}function O(){return{startTime:a,payload:e,status:l,queriesSent:u,queriesPending:p.length,subscribe:b,abort:y}}function D(){l="failed",m.forEach(M=>{M(void 0,h)})}function v(){p.forEach(M=>{M.status==="pending"&&(M.status="aborted")}),p=[]}function C(M,I,T){const w=I!=="success";switch(p=p.filter(R=>R!==M),l){case"pending":break;case"failed":if(w||!t.dataAfterTimeout)return;break;default:return}if(I==="abort"){h=T,D();return}if(w){h=T,p.length||(o.length?x():D());return}if(_(),v(),!t.random){const R=t.resources.indexOf(M.resource);R!==-1&&R!==t.index&&(t.index=R)}l="completed",m.forEach(R=>{R(T)})}function x(){if(l!=="pending")return;_();const M=o.shift();if(M===void 0){if(p.length){f=setTimeout(()=>{_(),l==="pending"&&(v(),D())},t.timeout);return}D();return}const I={status:"pending",resource:M,callback:(T,w)=>{C(I,T,w)}};p.push(I),u++,f=setTimeout(x,t.rotate),n(M,e,I.callback)}return setTimeout(x),O}function rA(t){const e={...Uj,...t};let n=[];function s(){n=n.filter(a=>a().status==="pending")}function r(a,l,u){const h=Bj(e,a,l,(f,p)=>{s(),u&&u(f,p)});return n.push(h),h}function i(a){return n.find(l=>a(l))||null}return{query:r,find:i,setIndex:a=>{e.index=a},getIndex:()=>e.index,cleanup:s}}function Mv(){}const Mh=Object.create(null);function jj(t){if(!Mh[t]){const e=Nu(t);if(!e)return;const n=rA(e),s={config:e,redundancy:n};Mh[t]=s}return Mh[t]}function iA(t,e,n){let s,r;if(typeof t=="string"){const i=od(t);if(!i)return n(void 0,424),Mv;r=i.send;const o=jj(t);o&&(s=o.redundancy)}else{const i=ag(t);if(i){s=rA(i);const o=t.resources?t.resources[0]:"",a=od(o);a&&(r=a.send)}}return!s||!r?(n(void 0,424),Mv):s.query(e,r,n)().abort}function Lv(){}function Hj(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,Mj(t)}))}function $j(t){const e=[],n=[];return t.forEach(s=>{(s.match(zR)?e:n).push(s)}),{valid:e,invalid:n}}function wo(t,e,n){function s(){const r=t.pendingIcons;e.forEach(i=>{r&&r.delete(i),t.icons[i]||t.missing.add(i)})}if(n&&typeof n=="object")try{if(!XR(t,n).length){s();return}}catch(r){console.error(r)}s(),Hj(t)}function Vv(t,e){t instanceof Promise?t.then(n=>{e(n)}).catch(()=>{e(null)}):e(t)}function Wj(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:s}=t,r=t.iconsToLoad;if(delete t.iconsToLoad,!r||!r.length)return;const i=t.loadIcon;if(t.loadIcons&&(r.length>1||!i)){Vv(t.loadIcons(r,s,n),h=>{wo(t,r,h)});return}if(i){r.forEach(h=>{const f=i(h,s,n);Vv(f,p=>{const m=p?{prefix:s,icons:{[h]:p}}:null;wo(t,[h],m)})});return}const{valid:o,invalid:a}=$j(r);if(a.length&&wo(t,a,null),!o.length)return;const l=s.match(zR)?od(n):null;if(!l){wo(t,o,null);return}l.prepare(n,s,o).forEach(h=>{iA(n,h,f=>{wo(t,h.icons,f)})})}))}const oA=(t,e)=>{const n=Fj(t,!0,JR()),s=xj(n);if(!s.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(s.loaded,s.missing,s.pending,Lv)}),()=>{l=!1}}const r=Object.create(null),i=[];let o,a;return s.pending.forEach(l=>{const{provider:u,prefix:h}=l;if(h===a&&u===o)return;o=u,a=h,i.push(Or(u,h));const f=r[u]||(r[u]=Object.create(null));f[h]||(f[h]=[])}),s.pending.forEach(l=>{const{provider:u,prefix:h,name:f}=l,p=Or(u,h),m=p.pendingIcons||(p.pendingIcons=new Set);m.has(f)||(m.add(f),r[u][h].push(f))}),i.forEach(l=>{const u=r[l.provider][l.prefix];u.length&&Wj(l,u)}),e?Vj(e,s,i):Lv},H4=t=>new Promise((e,n)=>{const s=typeof t=="string"?ja(t,!0):t;if(!s){n(t);return}oA([s||t],r=>{if(r.length&&s){const i=og(s);if(i){e({...Zi,...i});return}}n(t)})});function qj(t,e,n){Or("",e).loadIcons=t}function Kj(t,e){const n={...t};for(const s in e){const r=e[s],i=typeof r;s in ZR?(r===null||r&&(i==="string"||i==="number"))&&(n[s]=r):i===typeof n[s]&&(n[s]=s==="rotate"?r%4:r)}return n}const zj=/[\s,]+/;function Gj(t,e){e.split(zj).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Qj(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function s(r){for(;r<0;)r+=4;return r%4}if(n===""){const r=parseInt(t);return isNaN(r)?0:s(r)}else if(n!==t){let r=0;switch(n){case"%":r=25;break;case"deg":r=90}if(r){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/r,i%1===0?s(i):0)}}return e}function Yj(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const s in e)n+=" "+s+'="'+e[s]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function Xj(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Jj(t){return"data:image/svg+xml,"+Xj(t)}function Zj(t){return'url("'+Jj(t)+'")'}const Fv={...eA,inline:!1},e4={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},t4={display:"inline-block"},ad={backgroundColor:"currentColor"},aA={backgroundColor:"transparent"},Uv={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},Bv={webkitMask:ad,mask:ad,background:aA};for(const t in Bv){const e=Bv[t];for(const n in Uv)e[t+n]=Uv[n]}const Wl={};["horizontal","vertical"].forEach(t=>{const e=t.slice(0,1)+"Flip";Wl[t+"-flip"]=e,Wl[t.slice(0,1)+"-flip"]=e,Wl[t+"Flip"]=e});function jv(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Hv=(t,e)=>{const n=Kj(Fv,e),s={...e4},r=e.mode||"svg",i={},o=e.style,a=typeof o=="object"&&!(o instanceof Array)?o:{};for(let y in e){const b=e[y];if(b!==void 0)switch(y){case"icon":case"style":case"onLoad":case"mode":case"ssr":break;case"inline":case"hFlip":case"vFlip":n[y]=b===!0||b==="true"||b===1;break;case"flip":typeof b=="string"&&Gj(n,b);break;case"color":i.color=b;break;case"rotate":typeof b=="string"?n[y]=Qj(b):typeof b=="number"&&(n[y]=b);break;case"ariaHidden":case"aria-hidden":b!==!0&&b!=="true"&&delete s["aria-hidden"];break;default:{const O=Wl[y];O?(b===!0||b==="true"||b===1)&&(n[O]=!0):Fv[y]===void 0&&(s[y]=b)}}}const l=vj(t,n),u=l.attributes;if(n.inline&&(i.verticalAlign="-0.125em"),r==="svg"){s.style={...i,...a},Object.assign(s,u);let y=0,b=e.id;return typeof b=="string"&&(b=b.replace(/-/g,"_")),s.innerHTML=Ij(l.body,b?()=>b+"ID"+y++:"iconifyVue"),Kt("svg",s)}const{body:h,width:f,height:p}=t,m=r==="mask"||(r==="bg"?!1:h.indexOf("currentColor")!==-1),_=Yj(h,{...u,width:f+"",height:p+""});return s.style={...i,"--svg":Zj(_),width:jv(u.width),height:jv(u.height),...t4,...m?ad:aA,...a},Kt("span",s)};JR(!0);tA("",Dj);if(typeof document<"u"&&typeof window<"u"){const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(s=>{try{(typeof s!="object"||s===null||s instanceof Array||typeof s.icons!="object"||typeof s.prefix!="string"||!fj(s))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const s="IconifyProviders["+n+"] is invalid.";try{const r=e[n];if(typeof r!="object"||!r||r.resources===void 0)continue;nA(n,r)||console.error(s)}catch{console.error(s)}}}}const n4={...Zi,body:""},$4=Bi({inheritAttrs:!1,data(){return{_name:"",_loadingIcon:null,iconMounted:!1,counter:0}},mounted(){this.iconMounted=!0},unmounted(){this.abortLoading()},methods:{abortLoading(){this._loadingIcon&&(this._loadingIcon.abort(),this._loadingIcon=null)},getIcon(t,e,n){if(typeof t=="object"&&t!==null&&typeof t.body=="string")return this._name="",this.abortLoading(),{data:t};let s;if(typeof t!="string"||(s=ja(t,!1,!0))===null)return this.abortLoading(),null;let r=og(s);if(!r)return(!this._loadingIcon||this._loadingIcon.name!==t)&&(this.abortLoading(),this._name="",r!==null&&(this._loadingIcon={name:t,abort:oA([s],()=>{this.counter++})})),null;if(this.abortLoading(),this._name!==t&&(this._name=t,e&&e(t)),n){r=Object.assign({},r);const o=n(r.body,s.name,s.prefix,s.provider);typeof o=="string"&&(r.body=o)}const i=["iconify"];return s.prefix!==""&&i.push("iconify--"+s.prefix),s.provider!==""&&i.push("iconify--"+s.provider),{data:r,classes:i}}},render(){this.counter;const t=this.$attrs,e=this.iconMounted||t.ssr?this.getIcon(t.icon,t.onLoad,t.customise):null;if(!e)return Hv(n4,t);let n=t;return e.classes&&(n={...t,class:(typeof t.class=="string"?t.class+" ":"")+e.classes.join(" ")}),Hv({...Zi,...e.data},n)}}),s4={getAPIConfig:Nu,setAPIModule:tA,sendAPIQuery:iA,setFetch:Aj,getFetch:Cj,listAPIProviders:bj},r4={nuxt:{},icon:{provider:"iconify",class:"",aliases:{},iconifyApiEndpoint:"https://api.iconify.design",localApiEndpoint:"/api/_nuxt_icon",fallbackToApi:!0,cssSelectorPrefix:"i-",cssWherePseudo:!0,mode:"css",attrs:{"aria-hidden":!0},collections:["academicons","akar-icons","ant-design","arcticons","basil","bi","bitcoin-icons","bpmn","brandico","bx","bxl","bxs","bytesize","carbon","catppuccin","cbi","charm","ci","cib","cif","cil","circle-flags","circum","clarity","codicon","covid","cryptocurrency","cryptocurrency-color","dashicons","devicon","devicon-plain","ei","el","emojione","emojione-monotone","emojione-v1","entypo","entypo-social","eos-icons","ep","et","eva","f7","fa","fa-brands","fa-regular","fa-solid","fa6-brands","fa6-regular","fa6-solid","fad","fe","feather","file-icons","flag","flagpack","flat-color-icons","flat-ui","flowbite","fluent","fluent-emoji","fluent-emoji-flat","fluent-emoji-high-contrast","fluent-mdl2","fontelico","fontisto","formkit","foundation","fxemoji","gala","game-icons","geo","gg","gis","gravity-ui","gridicons","grommet-icons","guidance","healthicons","heroicons","heroicons-outline","heroicons-solid","hugeicons","humbleicons","ic","icomoon-free","icon-park","icon-park-outline","icon-park-solid","icon-park-twotone","iconamoon","iconoir","icons8","il","ion","iwwa","jam","la","lets-icons","line-md","logos","ls","lucide","lucide-lab","mage","majesticons","maki","map","marketeq","material-symbols","material-symbols-light","mdi","mdi-light","medical-icon","memory","meteocons","mi","mingcute","mono-icons","mynaui","nimbus","nonicons","noto","noto-v1","octicon","oi","ooui","openmoji","oui","pajamas","pepicons","pepicons-pencil","pepicons-pop","pepicons-print","ph","pixelarticons","prime","ps","quill","radix-icons","raphael","ri","rivet-icons","si-glyph","simple-icons","simple-line-icons","skill-icons","solar","streamline","streamline-emojis","subway","svg-spinners","system-uicons","tabler","tdesign","teenyicons","token","token-branded","topcoat","twemoji","typcn","uil","uim","uis","uit","uiw","unjs","vaadin","vs","vscode-icons","websymbol","weui","whh","wi","wpf","zmdi","zondicons"],fetchTimeout:1500}},i4=NP(r4);function o4(){const t=st();return t._appConfig||(t._appConfig=_s(i4)),t._appConfig}const a4=jt({name:"@nuxt/icon",setup(){var r,i;const t=ji(),e=o4().icon;s4.setFetch($fetch.native);const n=[];if(e.provider==="server"){const o=((i=(r=t.app)==null?void 0:r.baseURL)==null?void 0:i.replace(/\/$/,""))??"";n.push(o+(e.localApiEndpoint||"/api/_nuxt_icon")),(e.fallbackToApi===!0||e.fallbackToApi==="client-only")&&n.push(e.iconifyApiEndpoint)}else n.push(e.iconifyApiEndpoint);async function s(o,a){try{const l=await $fetch(n[0]+"/"+a+".json",{query:{icons:o.join(",")}});if(!l||l.prefix!==a||!l.icons)throw new Error("Invalid data"+JSON.stringify(l));return l}catch(l){return console.error("Failed to load custom icons",l),null}}nA("",{resources:n});for(const o of e.customCollections||[])o&&qj(s,o)}}),l4=[mM,yM,IM,W1,q1,K1,z1,G1,Y1,Z1,eL,sL,sj,rj,a4],lA=(t="RouteProvider")=>Bi({name:t,props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(e){const n=e.renderKey,s=e.route,r={};for(const i in e.route)Object.defineProperty(r,i,{get:()=>n===e.renderKey?e.route[i]:s[i],enumerable:!0});return hi(Yc,is(r)),()=>Kt(e.vnode,{ref:e.vnodeRef})}}),c4=lA(),$v=new WeakMap,u4=Bi({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,slots:n,expose:s}){const r=st(),i=Gt(),o=vt(Yc,null);let a;s({pageRef:i});const l=vt(MP,null);let u;const h=r.deferHydration();if(r.isHydrating){const p=r.hooks.hookOnce("app:error",h);rn().beforeEach(p)}t.pageKey&&Tr(()=>t.pageKey,(p,m)=>{p!==m&&r.callHook("page:loading:start")});let f=!1;{const p=rn().beforeResolve(()=>{f=!1});Ia(()=>{p()})}return()=>Kt(YI,{name:t.name,route:t.route,...e},{default:p=>{const m=f4(o,p.route,p.Component),_=o&&o.matched.length===p.route.matched.length;if(!p.Component){if(u&&!_)return u;h();return}if(u&&l&&!l.isCurrent(p.route))return u;if(m&&o&&(!l||l!=null&&l.isCurrent(o)))return _?u:null;const y=Lf(p,t.pageKey),b=d4(o,p.route,p.Component);!r.isHydrating&&a===y&&!b&&(r.callHook("page:loading:end"),f=!0),a=y;const O=!!(t.transition??p.route.meta.pageTransition??rf),D=O&&h4([t.transition,p.route.meta.pageTransition,rf,{onAfterLeave:()=>{r.callHook("page:transition:finish",p.Component)}}]),v=t.keepalive??p.route.meta.keepalive??yP;return u=D1(O&&D,k1(v,Kt(rT,{suspensible:!0,onPending:()=>r.callHook("page:start",p.Component),onResolve:()=>{Ta(()=>r.callHook("page:finish",p.Component).then(()=>{if(!f&&!b)return f=!0,r.callHook("page:loading:end")}).finally(h))}},{default:()=>{const C={key:y||void 0,vnode:n.default?p4(n.default,p):p.Component,route:p.route,renderKey:y||void 0,trackRootNodes:O,vnodeRef:i};if(!v)return Kt(c4,C);const x=p.Component.type,M=x;let I=$v.get(M);return I||(I=lA(x.name||x.__name),$v.set(M,I)),Kt(I,C)}}))).default(),u}})}});function h4(t){const e=t.filter(Boolean).map(n=>({...n,onAfterLeave:n.onAfterLeave?Ep(n.onAfterLeave):void 0}));return LT(...e)}function f4(t,e,n){if(!t)return!1;const s=e.matched.findIndex(r=>{var i;return((i=r.components)==null?void 0:i.default)===(n==null?void 0:n.type)});return!s||s===-1?!1:e.matched.slice(0,s).some((r,i)=>{var o,a,l;return((o=r.components)==null?void 0:o.default)!==((l=(a=t.matched[i])==null?void 0:a.components)==null?void 0:l.default)})||n&&Lf({route:e,Component:n})!==Lf({route:t,Component:n})}function d4(t,e,n){return t?e.matched.findIndex(r=>{var i;return((i=r.components)==null?void 0:i.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}function p4(t,e){const n=t(e);return n.length===1?Kt(n[0]):Kt(Yt,void 0,n)}const g4=(t,e)=>{const n=t.__vccOpts||t;for(const[s,r]of e)n[s]=r;return n},m4={};function _4(t,e){const n=u4;return ss(),cT("div",null,[tt(n)])}const y4=g4(m4,[["render",_4]]),v4={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;n.stack&&n.stack.split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const s=Number(n.statusCode||500),r=s===404,i=n.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,h=r?$h(()=>Ir(()=>import("./INzJc7_E.js"),__vite__mapDeps([2,3,4]),import.meta.url)):$h(()=>Ir(()=>import("./DCvb58Dz.js"),__vite__mapDeps([5,3,6]),import.meta.url));return(f,p)=>(ss(),Xr(Ge(h),qA(fT({statusCode:Ge(s),statusMessage:Ge(i),description:Ge(o),stack:Ge(a)})),null,16))}},E4={key:0},Wv={__name:"nuxt-root",setup(t){const e=()=>null,n=st(),s=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",s);rn().beforeEach(l)}const r=!1;hi(Yc,FT()),n.hooks.callHookWith(l=>l.map(u=>u()),"vue:setup");const i=Xc(),o=!1;LE((l,u,h)=>{if(n.hooks.callHook("vue:error",l,u,h).catch(f=>console.error("[nuxt] Error in `vue:error` hook",f)),BT(l)&&(l.fatal||l.unhandled))return n.runWithContext(()=>Ns(l)),!1});const a=!1;return(l,u)=>(ss(),Xr(rT,{onResolve:Ge(s)},{default:bE(()=>[Ge(o)?(ss(),cT("div",E4)):Ge(i)?(ss(),Xr(Ge(v4),{key:1,error:Ge(i)},null,8,["error"])):Ge(a)?(ss(),Xr(Ge(e),{key:2,context:Ge(a)},null,8,["context"])):Ge(r)?(ss(),Xr(W0(Ge(r)),{key:3})):(ss(),Xr(Ge(y4),{key:4}))]),_:1},8,["onResolve"]))}};let qv;{let t;qv=async function(){var o,a;if(t)return t;const n=!!(((o=window.__NUXT__)==null?void 0:o.serverRendered)??((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true"),s=n?fS(Wv):hS(Wv),r=IP({vueApp:s});async function i(l){var u;await r.callHook("app:error",l),(u=r.payload).error||(u.error=Jc(l))}s.config.errorHandler=i,r.hook("app:suspense:resolve",()=>{s.config.errorHandler===i&&(s.config.errorHandler=void 0)}),!n&&Bm.id&&r.hook("app:suspense:resolve",()=>{var l;(l=document.getElementById(Bm.id))==null||l.remove()});try{await AP(r,l4)}catch(l){i(l)}try{await r.hooks.callHook("app:created",s),await r.hooks.callHook("app:beforeMount",s),s.mount(EP),await r.hooks.callHook("app:mounted",s),await Ta()}catch(l){i(l)}return s},t=qv().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{hj as $,bE as A,dT as B,O4 as C,bd as D,vt as E,DI as F,B4 as G,Ms as H,I4 as I,M4 as J,U4 as K,P4 as L,F4 as M,Ge as N,k4 as O,N4 as P,L4 as Q,uC as R,x4 as S,V4 as T,R4 as U,di as V,o4 as W,j4 as X,H4 as Y,Tr as Z,g4 as _,st as a,$4 as a0,Tp as b,by as c,Bi as d,Ia as e,D4 as f,w4 as g,Kt as h,VP as i,_n as j,xr as k,Nd as l,ji as m,A4 as n,Id as o,TT as p,kd as q,Gt as r,b4 as s,cT as t,rn as u,ss as v,tf as w,hT as x,GA as y,tt as z};
