import{S as N,K as Z,L as $,M as h,N as V,q as w,U as v,O as x,g as b,P as L,Q as z,R as G,i as H,T as Q,V as W,W as X,X as J,Y as K,Z as k,b as q,j as B,_ as ee,$ as F,a0 as re,a1 as ne,a2 as ie,a3 as te,a4 as se,a5 as fe,a6 as ae,a7 as ue,a8 as M,a9 as D}from"./runtime.NBAfo0iF.js";import{c as le}from"./store.Cx1hATE_.js";function I(e,r=null,f){if(typeof e!="object"||e===null||N in e)return e;const a=G(e);if(a!==Z&&a!==$)return e;var t=new Map,c=H(e),m=h(0);c&&t.set("length",h(e.length));var y;return new Proxy(e,{defineProperty(l,n,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&V();var s=t.get(n);return s===void 0?(s=h(i.value),t.set(n,s)):w(s,I(i.value,y)),!0},deleteProperty(l,n){var i=t.get(n);if(i===void 0)n in l&&t.set(n,h(v));else{if(c&&typeof n=="string"){var s=t.get("length"),u=Number(n);Number.isInteger(u)&&u<s.v&&w(s,u)}w(i,v),U(m)}return!0},get(l,n,i){var p;if(n===N)return e;var s=t.get(n),u=n in l;if(s===void 0&&(!u||(p=x(l,n))!=null&&p.writable)&&(s=h(I(u?l[n]:v,y)),t.set(n,s)),s!==void 0){var d=b(s);return d===v?void 0:d}return Reflect.get(l,n,i)},getOwnPropertyDescriptor(l,n){var i=Reflect.getOwnPropertyDescriptor(l,n);if(i&&"value"in i){var s=t.get(n);s&&(i.value=b(s))}else if(i===void 0){var u=t.get(n),d=u==null?void 0:u.v;if(u!==void 0&&d!==v)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return i},has(l,n){var d;if(n===N)return!0;var i=t.get(n),s=i!==void 0&&i.v!==v||Reflect.has(l,n);if(i!==void 0||L!==null&&(!s||(d=x(l,n))!=null&&d.writable)){i===void 0&&(i=h(s?I(l[n],y):v),t.set(n,i));var u=b(i);if(u===v)return!1}return s},set(l,n,i,s){var O;var u=t.get(n),d=n in l;if(c&&n==="length")for(var p=i;p<u.v;p+=1){var _=t.get(p+"");_!==void 0?w(_,v):p in l&&(_=h(v),t.set(p+"",_))}u===void 0?(!d||(O=x(l,n))!=null&&O.writable)&&(u=h(void 0),w(u,I(i,y)),t.set(n,u)):(d=u.v!==v,w(u,I(i,y)));var g=Reflect.getOwnPropertyDescriptor(l,n);if(g!=null&&g.set&&g.set.call(s,i),!d){if(c&&typeof n=="string"){var T=t.get("length"),P=Number(n);Number.isInteger(P)&&P>=T.v&&w(T,P+1)}U(m)}return!0},ownKeys(l){b(m);var n=Reflect.ownKeys(l).filter(u=>{var d=t.get(u);return d===void 0||d.v!==v});for(var[i,s]of t)s.v!==v&&!(i in l)&&n.push(i);return n},setPrototypeOf(){z()}})}function U(e,r=1){w(e,e.v+r)}function Y(e){return e!==null&&typeof e=="object"&&N in e?e[N]:e}function pe(e,r){return Object.is(Y(e),Y(r))}const de={get(e,r){if(!e.exclude.includes(r))return b(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,f){return r in e.special||(e.special[r]=ce({get[r](){return e.props[r]}},r,F)),e.special[r](f),M(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),M(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function be(e,r){return new Proxy({props:e,exclude:r,special:{},version:h(0)},de)}const oe={get(e,r){let f=e.props.length;for(;f--;){let a=e.props[f];if(D(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a)return a[r]}},set(e,r,f){let a=e.props.length;for(;a--;){let t=e.props[a];D(t)&&(t=t());const c=x(t,r);if(c&&c.set)return c.set(f),!0}return!1},getOwnPropertyDescriptor(e,r){let f=e.props.length;for(;f--;){let a=e.props[f];if(D(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a){const t=x(a,r);return t&&!t.configurable&&(t.configurable=!0),t}}},has(e,r){for(let f of e.props)if(D(f)&&(f=f()),f!=null&&r in f)return!0;return!1},ownKeys(e){const r=[];for(let f of e.props){D(f)&&(f=f());for(const a in f)r.includes(a)||r.push(a)}return r}};function he(...e){return new Proxy({props:e},oe)}function C(e){for(var r=L,f=L;r!==null&&!(r.f&(X|J));)r=r.parent;try{return K(r),e()}finally{K(f)}}function ce(e,r,f,a){var j;var t=(f&te)!==0,c=(f&k)!==0,m=(f&se)!==0,y=(f&fe)!==0,l=!1,n;m?[n,l]=le(()=>e[r]):n=e[r];var i=(j=x(e,r))==null?void 0:j.set,s=a,u=!0,d=!1,p=()=>(d=!0,u&&(u=!1,y?s=q(a):s=a),s);n===void 0&&a!==void 0&&(i&&c&&Q(),n=p(),i&&i(n));var _;if(c)_=()=>{var o=e[r];return o===void 0?p():(u=!0,d=!1,o)};else{var g=C(()=>(t?B:ee)(()=>e[r]));g.f|=W,_=()=>{var o=b(g);return o!==void 0&&(s=void 0),o===void 0?s:o}}if(!(f&F))return _;if(i){var T=e.$$legacy;return function(o,R){return arguments.length>0?((!c||!R||T||l)&&i(R?_():o),o):_()}}var P=!1,O=!1,A=ae(n),E=C(()=>B(()=>{var o=_(),R=b(A),S=re;return P||o===void 0&&S.f&ne?(P=!1,O=!0,R):(O=!1,A.v=o)}));return t||(E.equals=ie),function(o,R){if(ue&&(P=O,_(),b(A)),arguments.length>0){const S=R?b(E):c&&m?I(o):o;return E.equals(S)||(P=!0,w(A,S),d&&s!==void 0&&(s=S),q(()=>b(E))),o}return b(E)}}export{I as a,pe as i,be as l,ce as p,he as s};
