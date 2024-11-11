import{e as Y,a as k,t as j}from"../chunks/disclose-version.ClO7yVUi.js";import{g as e,L as a,C as s,F as r,D as i,A as I,am as q,an as o}from"../chunks/runtime._CATi4pl.js";import{s as L}from"../chunks/render.CPq2uuMy.js";import{i as O}from"../chunks/if.CCE8pw1Q.js";import{b as p,r as M,a as z,t as U}from"../chunks/input.Sq96d4Yj.js";function G(c){return function(...d){var v=d[0];return v.preventDefault(),c==null?void 0:c.apply(this,d)}}var J=j('<div class="alert svelte-1u804ef"> </div>'),K=j('<div class="error svelte-1u804ef"> </div>'),N=j(`<div class="min-h-screen flex flex-col items-center justify-start bg-white"><div class="w-full max-w-4xl p-8"><h1 class="text-5xl font-bold mb-4 text-center">Contact Us</h1> <hr class="border-t-2 border-green-700 mb-8"> <!> <!> <div class="flex flex-col md:flex-row"><div class="md:w-1/2 mb-8 md:mb-0 flex flex-col items-start"><div class="mb-6"><h2 class="text-2xl font-bold mb-2">Address</h2> <p>East Tapinac, Olongapo, Philippines</p></div> <div class="mb-6"><h2 class="text-2xl font-bold mb-2">Phone</h2> <p>Mobile: 09054718434</p></div> <div class="mb-6"><h2 class="text-2xl font-bold mb-2">Email</h2> <p>sustainablers@gmail.com</p></div> <div class="mb-6"><h2 class="text-2xl font-bold mb-2">Working Time</h2> <p>Monday-Saturday: 9:00 am  - 5:00 pm</p></div></div> <div class="md:w-1/2 md:pl-8 flex flex-col items-center"><form class="space-y-4 w-full"><div><label class="block text-gray-700">Your name</label> <input type="text" class="w-full p-2 border border-gray-300 rounded" placeholder="Abc"></div> <div><label class="block text-gray-700">Email address</label> <input type="email" class="w-full p-2 border border-gray-300 rounded" placeholder="Abc@def.com"></div> <div><label class="block text-gray-700">Subject</label> <input type="text" class="w-full p-2 border border-gray-300 rounded" placeholder="This is optional"></div> <div><label class="block text-gray-700">Message</label> <textarea class="w-full p-2 border border-gray-300 rounded" placeholder="Hi! I'd like to ask about"></textarea></div> <div><button type="submit" class="w-full p-2 text-white rounded" style="background-color: #426B1F;">Submit</button></div></form></div></div></div></div>`);function ee(c){let d=o(""),v=o(""),m=o(""),n=o(""),A=o(""),b=o(!1),f=o(""),u=o(!1);function W(){a(u,!1),a(f,"");const{isValid:t,errorMessage:l}=validateForm(e(d),e(v),e(n));if(!t){a(f,l),a(u,!0);return}console.log({name:e(d),email:e(v),subject:e(m),message:e(n)}),a(A,"Message successfully sent!"),a(b,!0),setTimeout(()=>{a(b,!1)},3e3),a(d,""),a(v,""),a(m,""),a(n,"")}var x=N(),S=s(x),T=r(s(S),4);O(T,()=>e(b),t=>{var l=J(),w=s(l,!0);i(l),I(()=>{U(l,"hidden",!e(b)),L(w,e(A))}),k(t,l)});var D=r(T,2);O(D,()=>e(u),t=>{var l=K(),w=s(l,!0);i(l),I(()=>{U(l,"hidden",!e(u)),L(w,e(f))}),k(t,l)});var E=r(D,2),F=r(s(E),2),g=s(F),h=s(g),V=r(s(h),2);M(V),i(h);var _=r(h,2),C=r(s(_),2);M(C),i(_);var y=r(_,2),P=r(s(y),2);M(P),i(y);var B=r(y,2),H=r(s(B),2);z(H),i(B),q(2),i(g),i(F),i(E),i(S),i(x),p(V,()=>e(d),t=>a(d,t)),p(C,()=>e(v),t=>a(v,t)),p(P,()=>e(m),t=>a(m,t)),p(H,()=>e(n),t=>a(n,t)),Y("submit",g,G(W)),k(c,x)}export{ee as component};
