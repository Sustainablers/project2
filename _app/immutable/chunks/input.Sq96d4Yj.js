import{h as c,ab as x,ai as z,q as w,ao as C,ap as D,P as L,aq as G,ar as K,r as R}from"./runtime._CATi4pl.js";import{d as A,f as S}from"./disclose-version.ClO7yVUi.js";import{i as V,n as Y,a as j}from"./render.CPq2uuMy.js";function F(s,r){if(r){const a=document.body;s.autofocus=!0,w(()=>{document.activeElement===a&&s.focus()})}}function Z(s){c&&x(s)!==null&&z(s)}let p=!1;function O(){p||(p=!0,document.addEventListener("reset",s=>{Promise.resolve().then(()=>{var r;if(!s.defaultPrevented)for(const a of s.target.elements)(r=a.__on_r)==null||r.call(a)})},{capture:!0}))}function m(s){if(c){var r=!1,a=()=>{if(!r){if(r=!0,s.hasAttribute("value")){var i=s.value;d(s,"value",null),s.value=i}if(s.hasAttribute("checked")){var e=s.checked;d(s,"checked",null),s.checked=e}}};s.__on_r=a,C(a),O()}}function d(s,r,a,i){var e=s.__attributes??(s.__attributes={});c&&(e[r]=s.getAttribute(r),r==="src"||r==="srcset"||r==="href"&&s.nodeName==="LINK")||e[r]!==(e[r]=a)&&(r==="style"&&"__styles"in s&&(s.__styles={}),r==="loading"&&(s[D]=a),a==null?s.removeAttribute(r):typeof a!="string"&&P(s).includes(r)?s[r]=a:s.setAttribute(r,a))}function ss(s,r,a,i,e=!1,l=!1,Q=!1){var _=r||{},T=s.tagName==="OPTION";for(var h in r)h in a||(a[h]=null);var I=P(s),B=s.__attributes??(s.__attributes={}),y=[];for(const t in a){let f=a[t];if(T&&t==="value"&&f==null){s.value=s.__value="",_[t]=f;continue}var g=_[t];if(f!==g){_[t]=f;var N=t[0]+t[1];if(N!=="$$"){if(N==="on"){const n={},v="$$"+t;let o=t.slice(2);var b=j(o);if(V(o)&&(o=o.slice(0,-7),n.capture=!0),!b&&g){if(f!=null)continue;s.removeEventListener(o,_[v],n),_[v]=null}if(f!=null)if(b)s[`__${o}`]=f,S([o]);else{let k=function(M){_[t].call(this,M)};r?_[v]=A(o,s,k,n):y.push([t,f,()=>_[v]=A(o,s,k,n)])}}else if(t==="style"&&f!=null)s.style.cssText=f+"";else if(t==="autofocus")F(s,!!f);else if(t==="__value"||t==="value"&&f!=null)s.value=s[t]=s.__value=f;else{var u=t;e||(u=Y(u)),f==null&&!l?(B[t]=null,s.removeAttribute(t)):I.includes(u)&&(l||typeof f!="string")?s[u]=f:typeof f!="function"&&(c&&(u==="src"||u==="href"||u==="srcset")||d(s,u,f))}t==="style"&&"__styles"in s&&(s.__styles={})}}}return r||w(()=>{if(s.isConnected)for(const[t,f,n]of y)_[t]===f&&n()}),_}var E=new Map;function P(s){var r=E.get(s.nodeName);if(r)return r;E.set(s.nodeName,r=[]);for(var a,i=L(s),e=Element.prototype;e!==i;){a=G(i);for(var l in a)a[l].set&&r.push(l);i=L(i)}return r}function rs(s,r){var a=s.__className,i=H(r);c&&s.className===i?s.__className=i:(a!==i||c&&s.className!==i)&&(r==null?s.removeAttribute("class"):s.className=i,s.__className=i)}function H(s){return s??""}function as(s,r,a){if(a){if(s.classList.contains(r))return;s.classList.add(r)}else{if(!s.classList.contains(r))return;s.classList.remove(r)}}function J(s,r,a,i=a){s.addEventListener(r,a);const e=s.__on_r;e?s.__on_r=()=>{e(),i()}:s.__on_r=i,O()}function es(s,r,a=r){var i=K();J(s,"input",()=>{var e=$(s)?q(s.value):s.value;a(e),i&&e!==(e=r())&&(s.value=e??"")}),R(()=>{var e=r();if(c&&s.defaultValue!==s.value){a(s.value);return}$(s)&&e===q(s.value)||s.type==="date"&&!e&&!s.value||e!==s.value&&(s.value=e??"")})}function $(s){var r=s.type;return r==="number"||r==="range"}function q(s){return s===""?null:+s}export{Z as a,es as b,rs as c,d,J as l,m as r,ss as s,as as t};
