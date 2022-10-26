(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function _(){}function z(e){return e()}function I(){return Object.create(null)}function C(e){e.forEach(z)}function D(e){return typeof e=="function"}function G(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let E;function K(e,t){return E||(E=document.createElement("a")),E.href=t,e===E.href}function ee(e){return Object.keys(e).length===0}function c(e,t){e.appendChild(t)}function J(e,t,n){e.insertBefore(t,n||null)}function M(e){e.parentNode.removeChild(e)}function h(e){return document.createElement(e)}function N(e){return document.createTextNode(e)}function y(){return N(" ")}function te(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function f(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ne(e){return Array.from(e.childNodes)}function re(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}let P;function x(e){P=e}const b=[],F=[],S=[],H=[],oe=Promise.resolve();let V=!1;function se(){V||(V=!0,oe.then(Q))}function q(e){S.push(e)}const O=new Set;let k=0;function Q(){const e=P;do{for(;k<b.length;){const t=b[k];k++,x(t),ie(t.$$)}for(x(null),b.length=0,k=0;F.length;)F.pop()();for(let t=0;t<S.length;t+=1){const n=S[t];O.has(n)||(O.add(n),n())}S.length=0}while(b.length);for(;H.length;)H.pop()();V=!1,O.clear(),x(e)}function ie(e){if(e.fragment!==null){e.update(),C(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(q)}}const j=new Set;let le;function R(e,t){e&&e.i&&(j.delete(e),e.i(t))}function ce(e,t,n,o){if(e&&e.o){if(j.has(e))return;j.add(e),le.c.push(()=>{j.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function ue(e){e&&e.c()}function U(e,t,n,o){const{fragment:r,after_update:s}=e.$$;r&&r.m(t,n),o||q(()=>{const l=e.$$.on_mount.map(z).filter(D);e.$$.on_destroy?e.$$.on_destroy.push(...l):C(l),e.$$.on_mount=[]}),s.forEach(q)}function W(e,t){const n=e.$$;n.fragment!==null&&(C(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function fe(e,t){e.$$.dirty[0]===-1&&(b.push(e),se(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function X(e,t,n,o,r,s,l,a=[-1]){const d=P;x(e);const i=e.$$={fragment:null,ctx:[],props:s,update:_,not_equal:r,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:I(),dirty:a,skip_bound:!1,root:t.target||d.$$.root};l&&l(i.root);let $=!1;if(i.ctx=n?n(e,t.props||{},(u,v,...g)=>{const m=g.length?g[0]:v;return i.ctx&&r(i.ctx[u],i.ctx[u]=m)&&(!i.skip_bound&&i.bound[u]&&i.bound[u](m),$&&fe(e,u)),v}):[],i.update(),$=!0,C(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const u=ne(t.target);i.fragment&&i.fragment.l(u),u.forEach(M)}else i.fragment&&i.fragment.c();t.intro&&R(e.$$.fragment),U(e,t.target,t.anchor,t.customElement),Q()}x(d)}class Y{$destroy(){W(this,1),this.$destroy=_}$on(t,n){if(!D(n))return _;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!ee(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ae="https://albarracin-jorge.github.io/svelte-actions/assets/vite.4a748afd.svg",de="https://albarracin-jorge.github.io/svelte-actions/assets/svelte.a39f39b7.svg";function he(e){let t,n,o,r,s;return{c(){t=h("button"),n=N("count is "),o=N(e[0])},m(l,a){J(l,t,a),c(t,n),c(t,o),r||(s=te(t,"click",e[1]),r=!0)},p(l,[a]){a&1&&re(o,l[0])},i:_,o:_,d(l){l&&M(t),r=!1,s()}}}function me(e,t,n){let o=0;return[o,()=>{n(0,o+=1)}]}class ge extends Y{constructor(t){super(),X(this,t,me,he,G,{})}}function pe(e){let t,n,o,r,s,l,a,d,i,$,u,v,g,m,T,A,B,w,L;return m=new ge({}),{c(){t=h("main"),n=h("div"),o=h("a"),r=h("img"),l=y(),a=h("a"),d=h("img"),$=y(),u=h("h1"),u.textContent="Vite + Svelte",v=y(),g=h("div"),ue(m.$$.fragment),T=y(),A=h("p"),A.innerHTML='Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank">SvelteKit</a>, the official Svelte app framework powered by Vite!',B=y(),w=h("p"),w.textContent="Click on the Vite and Svelte logos to learn more",K(r.src,s=ae)||f(r,"src",s),f(r,"class","logo svelte-c9fbf7"),f(r,"alt","Vite Logo"),f(o,"href","https://vitejs.dev"),f(o,"target","_blank"),K(d.src,i=de)||f(d,"src",i),f(d,"class","logo svelte svelte-c9fbf7"),f(d,"alt","Svelte Logo"),f(a,"href","https://svelte.dev"),f(a,"target","_blank"),f(g,"class","card"),f(w,"class","read-the-docs svelte-c9fbf7")},m(p,Z){J(p,t,Z),c(t,n),c(n,o),c(o,r),c(n,l),c(n,a),c(a,d),c(t,$),c(t,u),c(t,v),c(t,g),U(m,g,null),c(t,T),c(t,A),c(t,B),c(t,w),L=!0},p:_,i(p){L||(R(m.$$.fragment,p),L=!0)},o(p){ce(m.$$.fragment,p),L=!1},d(p){p&&M(t),W(m)}}}class _e extends Y{constructor(t){super(),X(this,t,null,pe,G,{})}}new _e({target:document.getElementById("app")});
