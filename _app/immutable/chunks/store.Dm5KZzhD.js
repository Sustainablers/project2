import{_ as Y,$ as D,K as A,H as $,O as C,o as L,a0 as E,m as P,a1 as j,a2 as q,a3 as T,a4 as y,x as H,y as B,w as h,a5 as K,a6 as W,a7 as Z,a8 as z,a9 as F,aa as G,l as J,ab as Q,p as U,v as S,i as X,c as x,ac as N,b as ee,ad as re,Z as ae,g as te,D as se}from"./runtime.DUnEXJsc.js";import{c as ne}from"./template.DlPZK4b4.js";const ie=new Set,I=new Set;function g(e){var R;var r=this,s=r.ownerDocument,t=e.type,u=((R=e.composedPath)==null?void 0:R.call(e))||[],a=u[0]||e.target,c=0,b=e.__root;if(b){var d=u.indexOf(b);if(d!==-1&&(r===document||r===window)){e.__root=r;return}var l=u.indexOf(r);if(l===-1)return;d<=l&&(c=d)}if(a=u[c]||e.target,a!==r){Y(e,"currentTarget",{configurable:!0,get(){return a||s}});var m=C,o=L;D(null),A(null);try{for(var n,i=[];a!==null;){var f=a.assignedSlot||a.parentNode||a.host||null;try{var _=a["__"+t];if(_!==void 0&&!a.disabled)if($(_)){var[k,...M]=_;k.apply(a,[e,...M])}else _.call(a,e)}catch(p){n?i.push(p):n=p}if(e.cancelBubble||f===r||f===null)break;a=f}if(n){for(let p of i)queueMicrotask(()=>{throw p});throw n}}finally{e.__root=r,delete e.currentTarget,D(m),A(o)}}}const ue=["touchstart","touchmove"];function oe(e){return ue.includes(e)}function _e(e,r){var s=r==null?"":typeof r=="object"?r+"":r;s!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=s,e.nodeValue=s==null?"":s+"")}function fe(e,r){return V(e,r)}function be(e,r){E(),r.intro=r.intro??!1;const s=r.target,t=S,u=h;try{for(var a=P(s);a&&(a.nodeType!==8||a.data!==j);)a=q(a);if(!a)throw T;y(!0),H(a),B();const c=V(e,{...r,anchor:a});if(h===null||h.nodeType!==8||h.data!==K)throw W(),T;return y(!1),c}catch(c){if(c===T)return r.recover===!1&&Z(),E(),z(s),y(!1),fe(e,r);throw c}finally{y(t),H(u)}}const v=new Map;function V(e,{target:r,anchor:s,props:t={},events:u,context:a,intro:c=!0}){E();var b=new Set,d=o=>{for(var n=0;n<o.length;n++){var i=o[n];if(!b.has(i)){b.add(i);var f=oe(i);r.addEventListener(i,g,{passive:f});var _=v.get(i);_===void 0?(document.addEventListener(i,g,{passive:f}),v.set(i,1)):v.set(i,_+1)}}};d(F(ie)),I.add(d);var l=void 0,m=G(()=>{var o=s??r.appendChild(J());return Q(()=>{if(a){U({});var n=x;n.c=a}u&&(t.$$events=u),S&&ne(o,null),l=e(o,t)||{},S&&(L.nodes_end=h),a&&X()}),()=>{var f;for(var n of b){r.removeEventListener(n,g);var i=v.get(n);--i===0?(document.removeEventListener(n,g),v.delete(n)):v.set(n,i)}I.delete(d),O.delete(l),o!==s&&((f=o.parentNode)==null||f.removeChild(o))}});return O.set(l,m),l}let O=new WeakMap;function ve(e){const r=O.get(e);r&&r()}function ce(e,r,s){if(e==null)return r(void 0),N;const t=ee(()=>e.subscribe(r,s));return t.unsubscribe?()=>t.unsubscribe():t}let w=!1;function he(e,r,s){const t=s[r]??(s[r]={store:null,source:ae(void 0),unsubscribe:N});if(t.store!==e)if(t.unsubscribe(),t.store=e??null,e==null)t.source.v=void 0,t.unsubscribe=N;else{var u=!0;t.unsubscribe=ce(e,a=>{u?t.source.v=a:se(t.source,a)}),u=!1}return te(t.source)}function pe(){const e={};return re(()=>{for(var r in e)e[r].unsubscribe()}),e}function ye(e){var r=w;try{return w=!1,[e(),w]}finally{w=r}}export{_e as a,he as b,ye as c,be as h,fe as m,pe as s,ve as u};
