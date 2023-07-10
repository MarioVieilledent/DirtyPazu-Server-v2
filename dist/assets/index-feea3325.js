(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=l(s);fetch(s.href,i)}})();function T(){}function bt(t){return t()}function Ae(){return Object.create(null)}function Y(t){t.forEach(bt)}function kt(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let _e;function ge(t,e){return _e||(_e=document.createElement("a")),_e.href=e,t===_e.href}function wt(t){return Object.keys(t).length===0}function yt(t,...e){if(t==null)return T;const l=t.subscribe(...e);return l.unsubscribe?()=>l.unsubscribe():l}function V(t,e,l){t.$$.on_destroy.push(yt(e,l))}function F(t){return t??""}function le(t,e,l){return t.set(l),e}function a(t,e){t.appendChild(e)}function L(t,e,l){t.insertBefore(e,l||null)}function O(t){t.parentNode&&t.parentNode.removeChild(t)}function se(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function _(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function y(){return E(" ")}function I(t,e,l,n){return t.addEventListener(e,l,n),()=>t.removeEventListener(e,l,n)}function h(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function Ct(t){return Array.from(t.childNodes)}function z(t,e){e=""+e,t.data!==e&&(t.data=e)}function Z(t,e){t.value=e??""}function ve(t,e,l,n){l==null?t.style.removeProperty(e):t.style.setProperty(e,l,n?"important":"")}function Me(t,e,l){for(let n=0;n<t.options.length;n+=1){const s=t.options[n];if(s.__value===e){s.selected=!0;return}}(!l||e!==void 0)&&(t.selectedIndex=-1)}function St(t){const e=t.querySelector(":checked");return e&&e.__value}let he;function de(t){he=t}function Ot(){if(!he)throw new Error("Function called outside component initialization");return he}function Ce(t){Ot().$$.on_mount.push(t)}const fe=[],Te=[];let ae=[];const Ne=[],Lt=Promise.resolve();let We=!1;function Wt(){We||(We=!0,Lt.then($t))}function be(t){ae.push(t)}const Oe=new Set;let oe=0;function $t(){if(oe!==0)return;const t=he;do{try{for(;oe<fe.length;){const e=fe[oe];oe++,de(e),jt(e.$$)}}catch(e){throw fe.length=0,oe=0,e}for(de(null),fe.length=0,oe=0;Te.length;)Te.pop()();for(let e=0;e<ae.length;e+=1){const l=ae[e];Oe.has(l)||(Oe.add(l),l())}ae.length=0}while(fe.length);for(;Ne.length;)Ne.pop()();We=!1,Oe.clear(),de(t)}function jt(t){if(t.fragment!==null){t.update(),Y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(be)}}function Dt(t){const e=[],l=[];ae.forEach(n=>t.indexOf(n)===-1?e.push(n):l.push(n)),l.forEach(n=>n()),ae=e}const me=new Set;let ie;function X(){ie={r:0,c:[],p:ie}}function Q(){ie.r||Y(ie.c),ie=ie.p}function j(t,e){t&&t.i&&(me.delete(t),t.i(e))}function A(t,e,l,n){if(t&&t.o){if(me.has(t))return;me.add(t),ie.c.push(()=>{me.delete(t),n&&(l&&t.d(1),n())}),t.o(e)}else n&&n()}function J(t){t&&t.c()}function B(t,e,l,n){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,l),n||be(()=>{const r=t.$$.on_mount.map(bt).filter(kt);t.$$.on_destroy?t.$$.on_destroy.push(...r):Y(r),t.$$.on_mount=[]}),i.forEach(be)}function U(t,e){const l=t.$$;l.fragment!==null&&(Dt(l.after_update),Y(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function Pt(t,e){t.$$.dirty[0]===-1&&(fe.push(t),Wt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function x(t,e,l,n,s,i,r,o=[-1]){const c=he;de(t);const f=t.$$={fragment:null,ctx:[],props:i,update:T,not_equal:s,bound:Ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Ae(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};r&&r(f.root);let u=!1;if(f.ctx=l?l(t,e.props||{},(d,$,...v)=>{const k=v.length?v[0]:$;return f.ctx&&s(f.ctx[d],f.ctx[d]=k)&&(!f.skip_bound&&f.bound[d]&&f.bound[d](k),u&&Pt(t,d)),$}):[],f.update(),u=!0,Y(f.before_update),f.fragment=n?n(f.ctx):!1,e.target){if(e.hydrate){const d=Ct(e.target);f.fragment&&f.fragment.l(d),d.forEach(O)}else f.fragment&&f.fragment.c();e.intro&&j(t.$$.fragment),B(t,e.target,e.anchor,e.customElement),$t()}de(c)}class ee{$destroy(){U(this,1),this.$destroy=T}$on(e,l){if(!kt(l))return T;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(l),()=>{const s=n.indexOf(l);s!==-1&&n.splice(s,1)}}$set(e){this.$$set&&!wt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ce=[];function pe(t,e=T){let l;const n=new Set;function s(o){if(K(t,o)&&(t=o,l)){const c=!ce.length;for(const f of n)f[1](),ce.push(f,t);if(c){for(let f=0;f<ce.length;f+=2)ce[f][0](ce[f+1]);ce.length=0}}}function i(o){s(o(t))}function r(o,c=T){const f=[o,c];return n.add(f),n.size===1&&(l=e(s)||T),o(t),()=>{n.delete(f),n.size===0&&l&&(l(),l=null)}}return{set:s,update:i,subscribe:r}}const Pe="discordUser",Ee="currentSuggestion",At="https://discord.com/api/oauth2/authorize?client_id=1115564047048392754&redirect_uri=https%3A%2F%2Fdibi.onrender.com%2Fauth&response_type=code&scope=identify%20email",Mt=At;let te=pe("home"),ue={Noun:{french:"Nom",nbWords:0},Pronoun:{french:"Pronom",nbWords:0},Verb:{french:"Verbe",nbWords:0},Adjective:{french:"Adjectif",nbWords:0},Adverb:{french:"Adverbe",nbWords:0},Preposition:{french:"Préposition",nbWords:0},Conjonction:{french:"Conjonction",nbWords:0},Interjection:{french:"Interjection",nbWords:0},SpiritWord:{french:"Mot d'esprit",nbWords:0},FunctionParticule:{french:"Particule de fonction",nbWords:0},TransformationParticule:{french:"Particule de transformation",nbWords:0}},re=pe(!1),ke=pe();localStorage.getItem(Pe);function $e(t){var e,l;return(e=t==null?void 0:t.discord)!=null&&e.id&&((l=t==null?void 0:t.discord)!=null&&l.avatar)?`https://cdn.discordapp.com/avatars/${t.discord.id}/${t.discord.avatar}.png`:""}function Tt(t){let e,l,n;return{c(){e=_("button"),e.textContent="Login"},m(s,i){L(s,e,i),l||(n=I(e,"click",t[5]),l=!0)},p:T,d(s){s&&O(e),l=!1,n()}}}function Nt(t){let e,l,n,s;return{c(){e=_("img"),h(e,"class","avatar svelte-1ici2vm"),h(e,"title","Connexion Discord"),ge(e.src,l=$e(t[1]))||h(e,"src",l),h(e,"alt","Discord avatar")},m(i,r){L(i,e,r),n||(s=[I(e,"keypress",It),I(e,"click",t[4])],n=!0)},p(i,r){r&2&&!ge(e.src,l=$e(i[1]))&&h(e,"src",l)},d(i){i&&O(e),n=!1,Y(s)}}}function Et(t){let e,l,n,s,i,r;function o(u,d){return u[0]?Nt:Tt}let c=o(t),f=c(t);return{c(){e=_("div"),l=_("div"),n=y(),s=_("div"),s.innerHTML="<h1>Dibi v2</h1>",i=y(),r=_("div"),f.c(),h(l,"class","left f svelte-1ici2vm"),h(s,"class","center f svelte-1ici2vm"),h(r,"class","right f svelte-1ici2vm"),h(e,"class","header f svelte-1ici2vm")},m(u,d){L(u,e,d),a(e,l),a(e,n),a(e,s),a(e,i),a(e,r),f.m(r,null)},p(u,[d]){c===(c=o(u))&&f?f.p(u,d):(f.d(1),f=c(u),f&&(f.c(),f.m(r,null)))},i:T,o:T,d(u){u&&O(e),f.d()}}}const It=()=>{};function Ft(t,e,l){let n,s,i;V(t,re,f=>l(0,n=f)),V(t,ke,f=>l(1,s=f)),V(t,te,f=>l(2,i=f));function r(){window.location.href=Mt}return[n,s,i,r,()=>le(te,i="discordAccount",i),()=>r()]}class Ht extends ee{constructor(e){super(),x(this,e,Ft,Et,K,{})}}function Ie(t){let e,l,n,s,i,r,o,c,f;return{c(){e=_("button"),l=_("span"),l.textContent="Proposer",s=y(),i=_("button"),r=_("span"),r.textContent="Voter",h(l,"class","svelte-1hhod8p"),h(e,"class",n=F(t[1]==="suggest"?"block-selected":"block")+" svelte-1hhod8p"),h(r,"class","svelte-1hhod8p"),h(i,"class",o=F(t[1]==="vote"?"block-selected":"block")+" svelte-1hhod8p")},m(u,d){L(u,e,d),a(e,l),L(u,s,d),L(u,i,d),a(i,r),c||(f=[I(e,"click",t[6]),I(i,"click",t[7])],c=!0)},p(u,d){d&2&&n!==(n=F(u[1]==="suggest"?"block-selected":"block")+" svelte-1hhod8p")&&h(e,"class",n),d&2&&o!==(o=F(u[1]==="vote"?"block-selected":"block")+" svelte-1hhod8p")&&h(i,"class",o)},d(u){u&&O(e),u&&O(s),u&&O(i),c=!1,Y(f)}}}function Rt(t){let e,l,n,s,i,r,o,c,f,u,d,$,v=t[2]&&Ie(t);return{c(){e=_("div"),l=_("button"),n=_("span"),n.textContent="Menu",i=y(),r=_("button"),o=_("span"),o.textContent="Dictionnaire",f=y(),v&&v.c(),h(n,"class","svelte-1hhod8p"),h(l,"class",s=F(t[1]==="home"?"block-selected":"block")+" svelte-1hhod8p"),h(o,"class","svelte-1hhod8p"),h(r,"class",c=F(t[1]==="dict"?"block-selected":"block")+" svelte-1hhod8p"),h(e,"class",u=F("nav "+t[0])+" svelte-1hhod8p")},m(k,p){L(k,e,p),a(e,l),a(l,n),a(e,i),a(e,r),a(r,o),a(e,f),v&&v.m(e,null),d||($=[I(l,"click",t[4]),I(r,"click",t[5])],d=!0)},p(k,[p]){p&2&&s!==(s=F(k[1]==="home"?"block-selected":"block")+" svelte-1hhod8p")&&h(l,"class",s),p&2&&c!==(c=F(k[1]==="dict"?"block-selected":"block")+" svelte-1hhod8p")&&h(r,"class",c),k[2]?v?v.p(k,p):(v=Ie(k),v.c(),v.m(e,null)):v&&(v.d(1),v=null),p&1&&u!==(u=F("nav "+k[0])+" svelte-1hhod8p")&&h(e,"class",u)},i:T,o:T,d(k){k&&O(e),v&&v.d(),d=!1,Y($)}}}function Vt(t,e,l){let n,s;V(t,te,d=>l(1,n=d)),V(t,re,d=>l(2,s=d));let{display:i}=e;function r(d){le(te,n=d,n)}const o=()=>r("home"),c=()=>r("dict"),f=()=>r("suggest"),u=()=>r("vote");return t.$$set=d=>{"display"in d&&l(0,i=d.display)},[i,n,s,r,o,c,f,u]}class Fe extends ee{constructor(e){super(),x(this,e,Vt,Rt,K,{display:0})}}function Bt(t,e,l){let n,s;V(t,te,r=>l(1,n=r)),V(t,re,r=>l(2,s=r));let{code:i}=e;return Ce(()=>{let r=window.location.origin+"/";fetch(r+"exchange-code?code="+i).then(o=>o.json()).then(o=>{if(o.err)console.log(o.err);else{localStorage.setItem(Pe,JSON.stringify(o)),console.log(o),le(re,s=!0,s);const c=window.location.protocol+"//"+window.location.host;window.history.replaceState({},document.title,c),le(te,n="discordAccount",n)}}).catch(o=>{console.error(o)})}),t.$$set=r=>{"code"in r&&l(0,i=r.code)},[i]}class Ut extends ee{constructor(e){super(),x(this,e,Bt,null,K,{code:0})}}function qt(t){let e;return{c(){e=_("span"),e.textContent="Non connecté."},m(l,n){L(l,e,n)},p:T,d(l){l&&O(e)}}}function zt(t){let e,l,n,s,i,r,o=t[0].discord.username+"",c,f,u,d,$,v=t[0].xp+"",k,p,S,w,g=t[0].money+"",m,b,C,W;return{c(){e=_("div"),l=_("img"),s=y(),i=_("span"),r=E("Connecté en tant que "),c=E(o),f=y(),u=_("button"),u.textContent="Déconnexion",d=y(),$=_("p"),k=E(v),p=E(" XP"),S=y(),w=_("p"),m=E(g),b=E(" thunes"),ve(l,"width","42px"),ve(l,"height","42px"),ve(l,"border-radius","42px"),ge(l.src,n=$e(t[0]))||h(l,"src",n),h(l,"alt",""),h(e,"class","discord")},m(N,M){L(N,e,M),a(e,l),a(e,s),a(e,i),a(i,r),a(i,c),a(e,f),a(e,u),a(e,d),a(e,$),a($,k),a($,p),a(e,S),a(e,w),a(w,m),a(w,b),C||(W=I(u,"click",t[3]),C=!0)},p(N,M){M&1&&!ge(l.src,n=$e(N[0]))&&h(l,"src",n),M&1&&o!==(o=N[0].discord.username+"")&&z(c,o),M&1&&v!==(v=N[0].xp+"")&&z(k,v),M&1&&g!==(g=N[0].money+"")&&z(m,g)},d(N){N&&O(e),C=!1,W()}}}function Jt(t){let e,l,n;function s(o,c){return o[1]?zt:qt}let i=s(t),r=i(t);return{c(){e=_("div"),l=_("h1"),l.textContent="Gestion du compte",n=y(),r.c(),h(e,"class","all svelte-1ncp1wh")},m(o,c){L(o,e,c),a(e,l),a(e,n),r.m(e,null)},p(o,[c]){i===(i=s(o))&&r?r.p(o,c):(r.d(1),r=i(o),r&&(r.c(),r.m(e,null)))},i:T,o:T,d(o){o&&O(e),r.d()}}}function Gt(t,e,l){let n,s;V(t,ke,o=>l(0,n=o)),V(t,re,o=>l(1,s=o));function i(){le(re,s=!1,s),le(ke,n=void 0,n),window.localStorage.removeItem(Pe)}return[n,s,i,()=>i()]}class Yt extends ee{constructor(e){super(),x(this,e,Gt,Jt,K,{})}}function He(t){switch(t){case"Noun":return"Nom";case"Pronoun":return"Pronom";case"Verb":return"Verbe";case"Adjective":return"Adjectif";case"Adverb":return"Adverbe";case"Preposition":return"Préposition";case"Conjonction":return"Conjonction";case"Interjection":return"Interjection";case"SpiritWord":return"Mot d'esprit";case"FunctionParticule":return"Particule de fonction";case"TransformationParticule":return"Particule de transformation";default:return t}}function Re(t){let e,l,n,s,i,r,o,c,f,u,d,$,v,k,p,S=t[0]._id+"",w,g=t[0].partOfSpeech&&Ve(t),m=t[0].french&&Be(t),b=t[0].english&&Ue(t),C=t[0].author&&qe(t),W=t[0].description&&ze(t),N=t[0].date&&Je(t);return{c(){e=_("div"),g&&g.c(),l=y(),m&&m.c(),n=y(),b&&b.c(),s=y(),C&&C.c(),i=y(),W&&W.c(),r=y(),N&&N.c(),o=y(),c=_("div"),f=_("div"),u=_("a"),d=E("JSON"),v=y(),k=_("div"),p=_("span"),w=E(S),h(u,"href",$="/wordId?id="+t[0]._id),h(u,"target","_blank"),h(f,"class","label-div svelte-1l7ffii"),h(p,"class","value svelte-1l7ffii"),h(k,"class","value-div svelte-1l7ffii"),h(c,"class","block f svelte-1l7ffii"),h(e,"class","more-info fc svelte-1l7ffii")},m(M,q){L(M,e,q),g&&g.m(e,null),a(e,l),m&&m.m(e,null),a(e,n),b&&b.m(e,null),a(e,s),C&&C.m(e,null),a(e,i),W&&W.m(e,null),a(e,r),N&&N.m(e,null),a(e,o),a(e,c),a(c,f),a(f,u),a(u,d),a(c,v),a(c,k),a(k,p),a(p,w)},p(M,q){M[0].partOfSpeech?g?g.p(M,q):(g=Ve(M),g.c(),g.m(e,l)):g&&(g.d(1),g=null),M[0].french?m?m.p(M,q):(m=Be(M),m.c(),m.m(e,n)):m&&(m.d(1),m=null),M[0].english?b?b.p(M,q):(b=Ue(M),b.c(),b.m(e,s)):b&&(b.d(1),b=null),M[0].author?C?C.p(M,q):(C=qe(M),C.c(),C.m(e,i)):C&&(C.d(1),C=null),M[0].description?W?W.p(M,q):(W=ze(M),W.c(),W.m(e,r)):W&&(W.d(1),W=null),M[0].date?N?N.p(M,q):(N=Je(M),N.c(),N.m(e,o)):N&&(N.d(1),N=null),q&1&&$!==($="/wordId?id="+M[0]._id)&&h(u,"href",$),q&1&&S!==(S=M[0]._id+"")&&z(w,S)},d(M){M&&O(e),g&&g.d(),m&&m.d(),b&&b.d(),C&&C.d(),W&&W.d(),N&&N.d()}}}function Ve(t){let e,l,n,s,i,r=He(t[0].partOfSpeech)+"",o,c;return{c(){e=_("div"),l=_("div"),l.innerHTML='<span class="label svelte-1l7ffii">Nature</span>',n=y(),s=_("div"),i=_("span"),o=E(r),h(l,"class","label-div svelte-1l7ffii"),h(i,"class",c=F("value "+t[0].partOfSpeech)+" svelte-1l7ffii"),h(s,"class","value-div svelte-1l7ffii"),h(e,"class","block f svelte-1l7ffii")},m(f,u){L(f,e,u),a(e,l),a(e,n),a(e,s),a(s,i),a(i,o)},p(f,u){u&1&&r!==(r=He(f[0].partOfSpeech)+"")&&z(o,r),u&1&&c!==(c=F("value "+f[0].partOfSpeech)+" svelte-1l7ffii")&&h(i,"class",c)},d(f){f&&O(e)}}}function Be(t){let e,l,n,s,i,r=t[0].french+"",o;return{c(){e=_("div"),l=_("div"),l.innerHTML='<span class="label svelte-1l7ffii">Français</span>',n=y(),s=_("div"),i=_("span"),o=E(r),h(l,"class","label-div svelte-1l7ffii"),h(i,"class","value svelte-1l7ffii"),h(s,"class","value-div svelte-1l7ffii"),h(e,"class","block f svelte-1l7ffii")},m(c,f){L(c,e,f),a(e,l),a(e,n),a(e,s),a(s,i),a(i,o)},p(c,f){f&1&&r!==(r=c[0].french+"")&&z(o,r)},d(c){c&&O(e)}}}function Ue(t){let e,l,n,s,i,r=t[0].english+"",o;return{c(){e=_("div"),l=_("div"),l.innerHTML='<span class="label svelte-1l7ffii">Anglais</span>',n=y(),s=_("div"),i=_("span"),o=E(r),h(l,"class","label-div svelte-1l7ffii"),h(i,"class","value svelte-1l7ffii"),h(s,"class","value-div svelte-1l7ffii"),h(e,"class","block f svelte-1l7ffii")},m(c,f){L(c,e,f),a(e,l),a(e,n),a(e,s),a(s,i),a(i,o)},p(c,f){f&1&&r!==(r=c[0].english+"")&&z(o,r)},d(c){c&&O(e)}}}function qe(t){let e,l,n,s,i,r=t[0].author+"",o;return{c(){e=_("div"),l=_("div"),l.innerHTML='<span class="label svelte-1l7ffii">Créateur</span>',n=y(),s=_("div"),i=_("span"),o=E(r),h(l,"class","label-div svelte-1l7ffii"),h(i,"class","value svelte-1l7ffii"),h(s,"class","value-div svelte-1l7ffii"),h(e,"class","block f svelte-1l7ffii")},m(c,f){L(c,e,f),a(e,l),a(e,n),a(e,s),a(s,i),a(i,o)},p(c,f){f&1&&r!==(r=c[0].author+"")&&z(o,r)},d(c){c&&O(e)}}}function ze(t){let e,l,n,s,i,r=t[0].description+"",o;return{c(){e=_("div"),l=_("div"),l.innerHTML='<span class="label svelte-1l7ffii">Description</span>',n=y(),s=_("div"),i=_("span"),o=E(r),h(l,"class","label-div svelte-1l7ffii"),h(i,"class","value svelte-1l7ffii"),h(s,"class","value-div svelte-1l7ffii"),h(e,"class","block f svelte-1l7ffii")},m(c,f){L(c,e,f),a(e,l),a(e,n),a(e,s),a(s,i),a(i,o)},p(c,f){f&1&&r!==(r=c[0].description+"")&&z(o,r)},d(c){c&&O(e)}}}function Je(t){let e,l,n,s,i,r=Ye(t[0].date)+"",o;return{c(){e=_("div"),l=_("div"),l.innerHTML='<span class="label svelte-1l7ffii">Date d&#39;ajout</span>',n=y(),s=_("div"),i=_("span"),o=E(r),h(l,"class","label-div svelte-1l7ffii"),h(i,"class","value svelte-1l7ffii"),h(s,"class","value-div svelte-1l7ffii"),h(e,"class","block f svelte-1l7ffii")},m(c,f){L(c,e,f),a(e,l),a(e,n),a(e,s),a(s,i),a(i,o)},p(c,f){f&1&&r!==(r=Ye(c[0].date)+"")&&z(o,r)},d(c){c&&O(e)}}}function Kt(t){let e,l,n,s,i=t[0].dibi.toLowerCase()+"",r,o,c,f,u=t[0].french+"",d,$,v,k,p=Ge(t[0].date)+"",S,w,g,m,b=t[1]&&Re(t);return{c(){e=_("div"),l=_("div"),n=_("div"),s=_("span"),r=E(i),c=y(),f=_("span"),d=E(u),$=y(),v=_("div"),k=_("span"),S=E(p),w=y(),b&&b.c(),h(s,"class",o=F("dibi "+t[0].partOfSpeech)+" svelte-1l7ffii"),h(f,"class","french svelte-1l7ffii"),h(n,"class","left f svelte-1l7ffii"),h(k,"class","date svelte-1l7ffii"),h(v,"class","right svelte-1l7ffii"),h(l,"class","word f svelte-1l7ffii"),h(e,"class","all fc svelte-1l7ffii")},m(C,W){L(C,e,W),a(e,l),a(l,n),a(n,s),a(s,r),a(n,c),a(n,f),a(f,d),a(l,$),a(l,v),a(v,k),a(k,S),a(e,w),b&&b.m(e,null),g||(m=[I(l,"click",t[2]),I(l,"keypress",Xt)],g=!0)},p(C,[W]){W&1&&i!==(i=C[0].dibi.toLowerCase()+"")&&z(r,i),W&1&&o!==(o=F("dibi "+C[0].partOfSpeech)+" svelte-1l7ffii")&&h(s,"class",o),W&1&&u!==(u=C[0].french+"")&&z(d,u),W&1&&p!==(p=Ge(C[0].date)+"")&&z(S,p),C[1]?b?b.p(C,W):(b=Re(C),b.c(),b.m(e,null)):b&&(b.d(1),b=null)},i:T,o:T,d(C){C&&O(e),b&&b.d(),g=!1,Y(m)}}}function Ge(t){const e=new Date(t),l=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getFullYear()).slice(-2);return`${l}/${n}/${s}`}function Ye(t){const e=new Date(t),l=new Date;if(Ke(e,l))return Ke(e,l,-1)?"hier":`aujourd'hui à ${Xe(e)}`;const n=("0"+e.getDate()).slice(-2),s=("0"+(e.getMonth()+1)).slice(-2),i=e.getFullYear(),r=Xe(e);return`${n}/${s}/${i} à ${r}`}function Ke(t,e,l=0){return t.getDate()===e.getDate()+l&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function Xe(t){const e=("0"+t.getHours()).slice(-2),l=("0"+t.getMinutes()).slice(-2);return`${e}h${l}`}const Xt=()=>{};function Qt(t,e,l){let{word:n}=e,s=!1;const i=()=>l(1,s=!s);return t.$$set=r=>{"word"in r&&l(0,n=r.word)},[n,s,i]}class Se extends ee{constructor(e){super(),x(this,e,Qt,Kt,K,{word:0})}}let ne=[],we=[],ye=pe("fetching"),Qe=pe("fetching");function Zt(){let t=window.location.href;fetch(t+"dict").then(e=>e.json()).then(e=>{ne=e,xt(),ye.set("ok")}).catch(e=>{console.error(e),ye.set("error")})}function xt(){ne.forEach(t=>{ue[t.partOfSpeech]?ue[t.partOfSpeech].nbWords++:console.log(t)})}function el(){let t=window.location.href;fetch(t+"suggestions").then(e=>e.json()).then(e=>{we=e,Qe.set("ok")}).catch(e=>{console.error(e),Qe.set("error")})}function Ze(t,e,l){const n=t.slice();return n[5]=e[l][0],n[6]=e[l][1],n}function Le(t){const e=t.slice(),l=ne.length;return e[4]=l,e}function xe(t){let e,l,n,s,i,r,o,c,f=t[4]+"",u,d,$,v,k,p=t[0]>0&&et(t),S=Object.entries(ue).sort(lt),w=[];for(let g=0;g<S.length;g+=1)w[g]=tt(Ze(t,S,g));return{c(){e=_("h2"),e.textContent="Mot random",l=y(),p&&p.c(),n=y(),s=_("h2"),s.textContent="Stats",i=y(),r=_("div"),o=_("div"),c=_("span"),u=E(f),d=y(),$=_("span"),$.textContent="Mots",v=y();for(let g=0;g<w.length;g+=1)w[g].c();h(e,"class","svelte-thk7ka"),h(s,"class","svelte-thk7ka"),h(c,"class","val svelte-thk7ka"),h($,"class","lab svelte-thk7ka"),h(o,"class","block f"),h(r,"class","stats fc")},m(g,m){L(g,e,m),L(g,l,m),p&&p.m(g,m),L(g,n,m),L(g,s,m),L(g,i,m),L(g,r,m),a(r,o),a(o,c),a(c,u),a(o,d),a(o,$),a(r,v);for(let b=0;b<w.length;b+=1)w[b]&&w[b].m(r,null);k=!0},p(g,m){if(g[0]>0?p?(p.p(g,m),m&1&&j(p,1)):(p=et(g),p.c(),j(p,1),p.m(n.parentNode,n)):p&&(X(),A(p,1,1,()=>{p=null}),Q()),m&0){S=Object.entries(ue).sort(lt);let b;for(b=0;b<S.length;b+=1){const C=Ze(g,S,b);w[b]?w[b].p(C,m):(w[b]=tt(C),w[b].c(),w[b].m(r,null))}for(;b<w.length;b+=1)w[b].d(1);w.length=S.length}},i(g){k||(j(p),k=!0)},o(g){A(p),k=!1},d(g){g&&O(e),g&&O(l),p&&p.d(g),g&&O(n),g&&O(s),g&&O(i),g&&O(r),se(w,g)}}}function et(t){let e,l,n,s,i,r,o;return s=new Se({props:{word:ne[t[0]]}}),{c(){e=_("div"),l=_("button"),l.textContent="Random",n=y(),J(s.$$.fragment),h(e,"class","random-word")},m(c,f){L(c,e,f),a(e,l),a(e,n),B(s,e,null),i=!0,r||(o=I(l,"click",t[3]),r=!0)},p(c,f){const u={};f&1&&(u.word=ne[c[0]]),s.$set(u)},i(c){i||(j(s.$$.fragment,c),i=!0)},o(c){A(s.$$.fragment,c),i=!1},d(c){c&&O(e),U(s),r=!1,o()}}}function tt(t){let e,l,n=t[6].nbWords+"",s,i,r,o=t[6].french+"",c,f,u,d,$=(t[6].nbWords*100/t[4]).toFixed(2)+"",v,k,p;return{c(){e=_("div"),l=_("span"),s=E(n),i=y(),r=_("span"),c=E(o),f=y(),u=_("span"),d=E("("),v=E($),k=E(" %)"),p=y(),h(l,"class",F(t[5]+" val")+" svelte-thk7ka"),h(r,"class",F(t[5]+" lab")+" svelte-thk7ka"),h(u,"class",F(t[5]+" percent")+" svelte-thk7ka"),h(e,"class","block f")},m(S,w){L(S,e,w),a(e,l),a(l,s),a(e,i),a(e,r),a(r,c),a(e,f),a(e,u),a(u,d),a(u,v),a(u,k),a(e,p)},p:T,d(S){S&&O(e)}}}function tl(t){let e,l,n,s,i,r,o,c,f,u,d,$,v,k,p=t[1]&&xe(Le(t));return{c(){e=_("div"),l=_("h1"),l.textContent="V2 du dictionnaire",n=y(),s=_("ul"),s.innerHTML=`<li>Recodé en Svelte pour de meilleures perfomances navigateur et un code plus simple</li> 
        <li>Ajout de la proposition de mots</li> 
        <li>Authentification Discord</li>`,i=y(),r=_("h2"),r.textContent="Open source",o=y(),c=_("a"),c.textContent="Liste de tous les mots JSON",f=y(),u=_("br"),d=y(),$=_("span"),$.innerHTML='Ce dictionnaire est constitué d&#39;un <a href="https://github.com/MarioVieilledent/DirtyPazu-Server-v2" target="_blank">serveur</a> proposant une api simple et d&#39;une <a href="https://github.com/MarioVieilledent/DirtyPazu-Client-v2" target="_blank">web app</a> pour l&#39;interfacage. La base de données est enregistré sur MongoDB Cloud et est privée.',v=y(),p&&p.c(),ve(s,"margin-left","36px"),h(r,"class","svelte-thk7ka"),h(c,"href","/dict"),h(c,"target","_blank"),h(e,"class","container svelte-thk7ka")},m(S,w){L(S,e,w),a(e,l),a(e,n),a(e,s),a(e,i),a(e,r),a(e,o),a(e,c),a(e,f),a(e,u),a(e,d),a(e,$),a(e,v),p&&p.m(e,null),k=!0},p(S,[w]){S[1]?p?(p.p(Le(S),w),w&2&&j(p,1)):(p=xe(Le(S)),p.c(),j(p,1),p.m(e,null)):p&&(X(),A(p,1,1,()=>{p=null}),Q())},i(S){k||(j(p),k=!0)},o(S){A(p),k=!1},d(S){S&&O(e),p&&p.d()}}}const lt=(t,e)=>e[1].nbWords-t[1].nbWords;function ll(t,e,l){let n;V(t,ye,o=>l(1,n=o));let s;Ce(()=>{i()});function i(){l(0,s=Math.floor(Math.random()*ne.length))}return[s,n,i,()=>i()]}class nl extends ee{constructor(e){super(),x(this,e,ll,tl,K,{})}}const je=(t,e)=>{if(ne){let l=[],n=new RegExp(e.toLowerCase());return ne.forEach(s=>{let i=!1;t.dibi&&n.test(s.dibi.toLowerCase())&&(i=!0),t.french&&n.test(s.french.toLowerCase())&&(i=!0),t.english&&n.test(s.english.toLowerCase())&&(i=!0),t.author&&n.test(s.author.toLowerCase())&&(i=!0),i&&l.push(s)}),l}else return[]},De=(t,e,l,n)=>(t.sort((s,i)=>{let r;switch(e){case"relevance":r=sl(n,s,i);break;case"dibi":r=s.dibi.localeCompare(i.dibi);break;case"french":r=s.french.localeCompare(i.french);break;case"date":r=s.date.localeCompare(i.date);break}return l==="asc"?r:-r}),t);function sl(t,e,l){let n=t.toLowerCase();if(n===e.dibi.toLowerCase()||n===e.french.toLowerCase()||n===e.english.toLowerCase())return 1e3;if(n===l.dibi.toLowerCase()||n===l.french.toLowerCase()||n===l.english.toLowerCase())return-1e3;let s=0,i=0;for(let r=1;r<=n.length;r++)for(let o=0;o<n.length-r;o++)n.slice(o,o+r)===e.dibi.toLowerCase()&&(s+=r*r),n.slice(o,o+r)===l.dibi.toLowerCase()&&(i+=r*r),n.slice(o,o+r)===e.french.toLowerCase()&&(s+=r*r),n.slice(o,o+r)===l.french.toLowerCase()&&(i+=r*r),n.slice(o,o+r)===e.english.toLowerCase()&&(s+=r*r),n.slice(o,o+r)===l.english.toLowerCase()&&(i+=r*r);return i-s}function nt(t,e,l){const n=t.slice();return n[13]=e[l],n}function il(t){let e,l,n,s,i,r,o,c,f;return{c(){e=_("div"),l=_("div"),n=_("input"),s=y(),i=_("div"),r=y(),o=_("div"),o.innerHTML='<img src="/chevron-down-solid.svg" alt="Bouton plus de paramètres de recherche"/>',h(n,"id","inputSimpleSearch"),h(n,"class","input-simple-search svelte-207jas"),h(n,"type","text"),h(n,"placeholder","Rechercher"),h(i,"class","cross"),h(l,"class","simple-search-bar svelte-207jas"),h(o,"class","more f svelte-207jas"),h(e,"class","simple-search f svelte-207jas")},m(u,d){L(u,e,d),a(e,l),a(l,n),Z(n,t[2]),a(l,s),a(l,i),a(e,r),a(e,o),c||(f=[I(n,"input",t[6]),I(n,"input",t[7])],c=!0)},p(u,d){d&4&&n.value!==u[2]&&Z(n,u[2])},d(u){u&&O(e),c=!1,Y(f)}}}function rl(t){let e;return{c(){e=_("span"),e.textContent="Erreur lors de la récupération des mots."},m(l,n){L(l,e,n)},p:T,i:T,o:T,d(l){l&&O(e)}}}function ol(t){let e,l,n=t[1],s=[];for(let r=0;r<n.length;r+=1)s[r]=st(nt(t,n,r));const i=r=>A(s[r],1,1,()=>{s[r]=null});return{c(){e=_("div");for(let r=0;r<s.length;r+=1)s[r].c();h(e,"class","list svelte-207jas")},m(r,o){L(r,e,o);for(let c=0;c<s.length;c+=1)s[c]&&s[c].m(e,null);l=!0},p(r,o){if(o&2){n=r[1];let c;for(c=0;c<n.length;c+=1){const f=nt(r,n,c);s[c]?(s[c].p(f,o),j(s[c],1)):(s[c]=st(f),s[c].c(),j(s[c],1),s[c].m(e,null))}for(X(),c=n.length;c<s.length;c+=1)i(c);Q()}},i(r){if(!l){for(let o=0;o<n.length;o+=1)j(s[o]);l=!0}},o(r){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)A(s[o]);l=!1},d(r){r&&O(e),se(s,r)}}}function cl(t){let e;return{c(){e=_("span"),e.textContent="Chargement des mots..."},m(l,n){L(l,e,n)},p:T,i:T,o:T,d(l){l&&O(e)}}}function st(t){let e,l;return e=new Se({props:{word:t[13]}}),{c(){J(e.$$.fragment)},m(n,s){B(e,n,s),l=!0},p(n,s){const i={};s&2&&(i.word=n[13]),e.$set(i)},i(n){l||(j(e.$$.fragment,n),l=!0)},o(n){A(e.$$.fragment,n),l=!1},d(n){U(e,n)}}}function fl(t){let e,l,n,s,i,r;function o(v,k){return il}let f=o()(t);const u=[cl,ol,rl],d=[];function $(v,k){return v[0]==="fetching"?0:v[0]==="ok"?1:2}return s=$(t),i=d[s]=u[s](t),{c(){e=_("div"),l=_("div"),f.c(),n=y(),i.c(),h(l,"class","search f svelte-207jas"),h(e,"class","container fc svelte-207jas")},m(v,k){L(v,e,k),a(e,l),f.m(l,null),a(e,n),d[s].m(e,null),r=!0},p(v,[k]){f.p(v,k);let p=s;s=$(v),s===p?d[s].p(v,k):(X(),A(d[p],1,1,()=>{d[p]=null}),Q(),i=d[s],i?i.p(v,k):(i=d[s]=u[s](v),i.c()),j(i,1),i.m(e,null))},i(v){r||(j(i),r=!0)},o(v){A(i),r=!1},d(v){v&&O(e),f.d(),d[s].d()}}}let al=100,ul="desc";function dl(t,e,l){let n;V(t,ye,S=>l(0,n=S));let s=[],i={dibi:!0,french:!0,english:!0,author:!1},r=[],o="",c="relevance";Ce(()=>{setTimeout(()=>{document.getElementById("inputSimpleSearch").focus()},200)});const f=()=>{s=je(i,o),u(),d()};function u(){o?c="relevance":c="date",s=De(s,c,ul,o)}function d(){l(1,r=s.slice(0,al))}function $(S){l(2,o=S.target.value)}const v=(S,w=150)=>{let g;return function(...m){clearTimeout(g),g=setTimeout(()=>S.apply(this,m),w)}};function k(){o=this.value,l(2,o)}const p=S=>{$(S),v(f)()};return t.$$.update=()=>{t.$$.dirty&1&&n==="ok"&&f()},[n,r,o,f,$,v,k,p]}class hl extends ee{constructor(e){super(),x(this,e,dl,fl,K,{})}}function it(t,e,l){const n=t.slice();return n[25]=e[l],n}function rt(t,e,l){const n=t.slice();return n[28]=e[l],n[29]=e,n[30]=l,n}function ot(t,e,l){const n=t.slice();return n[31]=e[l][0],n[32]=e[l][1],n}function pl(t){let e;return{c(){e=_("span"),e.textContent="Authentification Discord nécessaire"},m(l,n){L(l,e,n)},p:T,i:T,o:T,d(l){l&&O(e)}}}function _l(t){let e,l,n,s,i,r,o,c,f,u,d,$,v,k,p,S,w=t[0].versions[0].words,g=[];for(let b=0;b<w.length;b+=1)g[b]=at(rt(t,w,b));let m=t[1].length>0&&ut(t);return{c(){e=_("h1"),e.textContent="Proposition",l=y(),n=_("div"),s=_("h2"),s.textContent="Proposer un ou plusieurs mots dibi",i=y();for(let b=0;b<g.length;b+=1)g[b].c();r=y(),o=_("button"),o.textContent="New word",c=y(),f=_("div"),u=_("div"),d=y(),m&&m.c(),$=y(),v=_("button"),v.textContent="Proposer",h(s,"class","svelte-5y5ras"),h(o,"class","svelte-5y5ras"),h(u,"class","separator"),h(f,"class","close-words fc svelte-5y5ras"),h(v,"class","svelte-5y5ras"),h(n,"class","suggest fc svelte-5y5ras")},m(b,C){L(b,e,C),L(b,l,C),L(b,n,C),a(n,s),a(n,i);for(let W=0;W<g.length;W+=1)g[W]&&g[W].m(n,null);a(n,r),a(n,o),a(n,c),a(n,f),a(f,u),a(f,d),m&&m.m(f,null),a(n,$),a(n,v),k=!0,p||(S=[I(o,"click",t[19]),I(v,"click",t[20])],p=!0)},p(b,C){if(C[0]&105){w=b[0].versions[0].words;let W;for(W=0;W<w.length;W+=1){const N=rt(b,w,W);g[W]?g[W].p(N,C):(g[W]=at(N),g[W].c(),g[W].m(n,r))}for(;W<g.length;W+=1)g[W].d(1);g.length=w.length}b[1].length>0?m?(m.p(b,C),C[0]&2&&j(m,1)):(m=ut(b),m.c(),j(m,1),m.m(f,null)):m&&(X(),A(m,1,1,()=>{m=null}),Q())},i(b){k||(j(m),k=!0)},o(b){A(m),k=!1},d(b){b&&O(e),b&&O(l),b&&O(n),se(g,b),m&&m.d(),p=!1,Y(S)}}}function ct(t){let e,l=t[32].french+"",n;return{c(){e=_("option"),n=E(l),h(e,"class",F(t[31])+" svelte-5y5ras"),e.__value=t[31],e.value=e.__value},m(s,i){L(s,e,i),a(e,n)},p:T,d(s){s&&O(e)}}}function ft(t){let e,l,n;function s(){return t[18](t[30])}return{c(){e=_("button"),e.textContent="Remove",h(e,"class","svelte-5y5ras")},m(i,r){L(i,e,r),l||(n=I(e,"click",s),l=!0)},p(i,r){t=i},d(i){i&&O(e),l=!1,n()}}}function at(t){let e,l,n,s,i,r,o,c,f,u,d,$,v,k,p,S,w,g;function m(){t[8].call(n,t[29],t[30])}let b=Object.entries(ue),C=[];for(let H=0;H<b.length;H+=1)C[H]=ct(ot(t,b,H));function W(){t[10].call(r,t[29],t[30])}function N(){t[12].call(u,t[29],t[30])}function M(){t[14].call($,t[29],t[30])}function q(){t[16].call(p,t[29],t[30])}let R=t[0].versions[0].words.length>1&&ft(t);return{c(){e=_("div"),l=_("div"),n=_("input"),i=y(),r=_("select");for(let H=0;H<C.length;H+=1)C[H].c();c=y(),f=_("div"),u=_("input"),d=y(),$=_("input"),v=y(),k=_("div"),p=_("textarea"),S=y(),R&&R.c(),h(n,"placeholder","Dibi"),h(n,"type","text"),h(n,"class",s=F(t[28].partOfSpeech)+" svelte-5y5ras"),h(r,"class",o=F(t[28].partOfSpeech)+" svelte-5y5ras"),t[28].partOfSpeech===void 0&&be(W),h(l,"class","dibi-partOfSpeech f svelte-5y5ras"),h(u,"placeholder","Français"),h(u,"type","text"),h(u,"class","svelte-5y5ras"),h($,"placeholder","Anglais"),h($,"type","text"),h($,"class","svelte-5y5ras"),h(f,"class","fr-en f svelte-5y5ras"),h(p,"placeholder","Description"),h(p,"class","svelte-5y5ras"),h(k,"class","description f svelte-5y5ras"),h(e,"class","word fc svelte-5y5ras")},m(H,D){L(H,e,D),a(e,l),a(l,n),Z(n,t[28].dibi),a(l,i),a(l,r);for(let P=0;P<C.length;P+=1)C[P]&&C[P].m(r,null);Me(r,t[28].partOfSpeech,!0),a(e,c),a(e,f),a(f,u),Z(u,t[28].french),a(f,d),a(f,$),Z($,t[28].english),a(e,v),a(e,k),a(k,p),Z(p,t[28].description),a(e,S),R&&R.m(e,null),w||(g=[I(n,"input",m),I(n,"change",t[9]),I(r,"change",W),I(r,"change",t[11]),I(u,"input",N),I(u,"change",t[13]),I($,"input",M),I($,"change",t[15]),I(p,"input",q),I(p,"change",t[17])],w=!0)},p(H,D){if(t=H,D[0]&1&&s!==(s=F(t[28].partOfSpeech)+" svelte-5y5ras")&&h(n,"class",s),D[0]&1&&n.value!==t[28].dibi&&Z(n,t[28].dibi),D&0){b=Object.entries(ue);let P;for(P=0;P<b.length;P+=1){const G=ot(t,b,P);C[P]?C[P].p(G,D):(C[P]=ct(G),C[P].c(),C[P].m(r,null))}for(;P<C.length;P+=1)C[P].d(1);C.length=b.length}D[0]&1&&o!==(o=F(t[28].partOfSpeech)+" svelte-5y5ras")&&h(r,"class",o),D[0]&1&&Me(r,t[28].partOfSpeech),D[0]&1&&u.value!==t[28].french&&Z(u,t[28].french),D[0]&1&&$.value!==t[28].english&&Z($,t[28].english),D[0]&1&&Z(p,t[28].description),t[0].versions[0].words.length>1?R?R.p(t,D):(R=ft(t),R.c(),R.m(e,null)):R&&(R.d(1),R=null)},d(H){H&&O(e),se(C,H),R&&R.d(),w=!1,Y(g)}}}function ut(t){let e,l,n,s,i,r,o=t[1],c=[];for(let u=0;u<o.length;u+=1)c[u]=dt(it(t,o,u));const f=u=>A(c[u],1,1,()=>{c[u]=null});return{c(){e=_("h2"),e.textContent="Mots existants",l=y(),n=_("div");for(let u=0;u<c.length;u+=1)c[u].c();s=y(),i=_("div"),h(e,"class","svelte-5y5ras"),h(n,"class","close-words-list svelte-5y5ras"),h(i,"class","separator")},m(u,d){L(u,e,d),L(u,l,d),L(u,n,d);for(let $=0;$<c.length;$+=1)c[$]&&c[$].m(n,null);L(u,s,d),L(u,i,d),r=!0},p(u,d){if(d[0]&2){o=u[1];let $;for($=0;$<o.length;$+=1){const v=it(u,o,$);c[$]?(c[$].p(v,d),j(c[$],1)):(c[$]=dt(v),c[$].c(),j(c[$],1),c[$].m(n,null))}for(X(),$=o.length;$<c.length;$+=1)f($);Q()}},i(u){if(!r){for(let d=0;d<o.length;d+=1)j(c[d]);r=!0}},o(u){c=c.filter(Boolean);for(let d=0;d<c.length;d+=1)A(c[d]);r=!1},d(u){u&&O(e),u&&O(l),u&&O(n),se(c,u),u&&O(s),u&&O(i)}}}function dt(t){let e,l;return e=new Se({props:{word:t[25]}}),{c(){J(e.$$.fragment)},m(n,s){B(e,n,s),l=!0},p(n,s){const i={};s[0]&2&&(i.word=n[25]),e.$set(i)},i(n){l||(j(e.$$.fragment,n),l=!0)},o(n){A(e.$$.fragment,n),l=!1},d(n){U(e,n)}}}function vl(t){let e,l,n,s;const i=[_l,pl],r=[];function o(c,f){return c[2]?0:1}return l=o(t),n=r[l]=i[l](t),{c(){e=_("div"),n.c(),h(e,"class","content fc svelte-5y5ras")},m(c,f){L(c,e,f),r[l].m(e,null),s=!0},p(c,f){let u=l;l=o(c),l===u?r[l].p(c,f):(X(),A(r[u],1,1,()=>{r[u]=null}),Q(),n=r[l],n?n.p(c,f):(n=r[l]=i[l](c),n.c()),j(n,1),n.m(e,null))},i(c){s||(j(n),s=!0)},o(c){A(n),s=!1},d(c){c&&O(e),r[l].d()}}}function ml(t,e,l){let n,s;V(t,ke,D=>l(21,n=D)),V(t,re,D=>l(2,s=D));let i={state:"suggested",versions:[{versionNumber:1,words:[],upVote:[],downVote:[],thread:[]}],author:n.discord.email};const r=window.localStorage.getItem(Ee);r&&(i=JSON.parse(r)),f();let o=[];function c(){setTimeout(()=>{window.localStorage.setItem(Ee,JSON.stringify(i))},100)}function f(){i.versions[0].words.push({author:n.discord.username,dibi:"",partOfSpeech:"Noun",french:"",english:"",description:"",date:Date.now().toString()}),l(0,i)}function u(D){i.versions[0].words.length>1&&(i.versions[0].words.splice(D,1),l(0,i))}function d(){l(1,o=[]),setTimeout(()=>{i.versions[0].words.forEach(D=>{$(D.dibi),v(D.french)})},100)}function $(D){if(D){const P=`^${D}$`;let G=[];G=je({dibi:!0,author:!1,french:!1,english:!1},P),G=De(G,"relevance","asc",P),l(1,o=[...o,...G])}}function v(D){if(D){const P=`${D}`;let G=[];G=je({dibi:!1,author:!1,french:!0,english:!1},P),G=De(G,"relevance","asc",P),l(1,o=[...o,...G])}}function k(){setTimeout(()=>{console.log(i);let D=window.location.href;fetch(D+"suggest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then(P=>P.json()).then(P=>{console.log(P)})},100)}function p(D,P){D[P].dibi=this.value,l(0,i)}const S=()=>{d(),c()};function w(D,P){D[P].partOfSpeech=St(this),l(0,i)}const g=()=>c();function m(D,P){D[P].french=this.value,l(0,i)}const b=()=>{d(),c()};function C(D,P){D[P].english=this.value,l(0,i)}const W=()=>c();function N(D,P){D[P].description=this.value,l(0,i)}return[i,o,s,c,f,u,d,k,p,S,w,g,m,b,C,W,N,()=>c(),D=>{u(D),c()},()=>{f(),c()},()=>k()]}class gl extends ee{constructor(e){super(),x(this,e,ml,vl,K,{},null,[-1,-1])}}function ht(t,e,l){const n=t.slice();return n[0]=e[l],n}function pt(t,e,l){const n=t.slice();return n[3]=e[l],n}function _t(t,e,l){const n=t.slice();return n[6]=e[l],n}function vt(t){let e,l;return e=new Se({props:{word:t[6]}}),{c(){J(e.$$.fragment)},m(n,s){B(e,n,s),l=!0},p:T,i(n){l||(j(e.$$.fragment,n),l=!0)},o(n){A(e.$$.fragment,n),l=!1},d(n){U(e,n)}}}function mt(t){let e,l,n,s=t[3].versionNumber+"",i,r,o,c,f,u=t[3].words,d=[];for(let v=0;v<u.length;v+=1)d[v]=vt(_t(t,u,v));const $=v=>A(d[v],1,1,()=>{d[v]=null});return{c(){e=_("div"),l=_("span"),n=E("Version "),i=E(s),r=y(),o=_("div");for(let v=0;v<d.length;v+=1)d[v].c();c=y(),h(o,"class","words"),h(e,"class","version")},m(v,k){L(v,e,k),a(e,l),a(l,n),a(l,i),a(e,r),a(e,o);for(let p=0;p<d.length;p+=1)d[p]&&d[p].m(o,null);a(e,c),f=!0},p(v,k){if(k&0){u=v[3].words;let p;for(p=0;p<u.length;p+=1){const S=_t(v,u,p);d[p]?(d[p].p(S,k),j(d[p],1)):(d[p]=vt(S),d[p].c(),j(d[p],1),d[p].m(o,null))}for(X(),p=u.length;p<d.length;p+=1)$(p);Q()}},i(v){if(!f){for(let k=0;k<u.length;k+=1)j(d[k]);f=!0}},o(v){d=d.filter(Boolean);for(let k=0;k<d.length;k+=1)A(d[k]);f=!1},d(v){v&&O(e),se(d,v)}}}function gt(t){let e,l,n,s=t[0].author+"",i,r,o,c=t[0].state+"",f,u,d,$,v,k=t[0].versions,p=[];for(let w=0;w<k.length;w+=1)p[w]=mt(pt(t,k,w));const S=w=>A(p[w],1,1,()=>{p[w]=null});return{c(){e=_("div"),l=_("span"),n=E("Suggéré par "),i=E(s),r=y(),o=_("span"),f=E(c),u=y(),d=_("div");for(let w=0;w<p.length;w+=1)p[w].c();$=y(),h(d,"class","versions"),h(e,"class","suggestion")},m(w,g){L(w,e,g),a(e,l),a(l,n),a(l,i),a(e,r),a(e,o),a(o,f),a(e,u),a(e,d);for(let m=0;m<p.length;m+=1)p[m]&&p[m].m(d,null);a(e,$),v=!0},p(w,g){if(g&0){k=w[0].versions;let m;for(m=0;m<k.length;m+=1){const b=pt(w,k,m);p[m]?(p[m].p(b,g),j(p[m],1)):(p[m]=mt(b),p[m].c(),j(p[m],1),p[m].m(d,null))}for(X(),m=k.length;m<p.length;m+=1)S(m);Q()}},i(w){if(!v){for(let g=0;g<k.length;g+=1)j(p[g]);v=!0}},o(w){p=p.filter(Boolean);for(let g=0;g<p.length;g+=1)A(p[g]);v=!1},d(w){w&&O(e),se(p,w)}}}function bl(t){let e,l,n,s=we,i=[];for(let o=0;o<s.length;o+=1)i[o]=gt(ht(t,s,o));const r=o=>A(i[o],1,1,()=>{i[o]=null});return{c(){e=_("div"),l=_("div");for(let o=0;o<i.length;o+=1)i[o].c();h(l,"class","suggestion-list"),h(e,"class","container fc svelte-1pi5om1")},m(o,c){L(o,e,c),a(e,l);for(let f=0;f<i.length;f+=1)i[f]&&i[f].m(l,null);n=!0},p(o,[c]){if(c&0){s=we;let f;for(f=0;f<s.length;f+=1){const u=ht(o,s,f);i[f]?(i[f].p(u,c),j(i[f],1)):(i[f]=gt(u),i[f].c(),j(i[f],1),i[f].m(l,null))}for(X(),f=s.length;f<i.length;f+=1)r(f);Q()}},i(o){if(!n){for(let c=0;c<s.length;c+=1)j(i[c]);n=!0}},o(o){i=i.filter(Boolean);for(let c=0;c<i.length;c+=1)A(i[c]);n=!1},d(o){o&&O(e),se(i,o)}}}function kl(t){return console.log(we),[]}class $l extends ee{constructor(e){super(),x(this,e,kl,bl,K,{})}}function wl(t){let e,l;return e=new Yt({}),{c(){J(e.$$.fragment)},m(n,s){B(e,n,s),l=!0},p:T,i(n){l||(j(e.$$.fragment,n),l=!0)},o(n){A(e.$$.fragment,n),l=!1},d(n){U(e,n)}}}function yl(t){let e,l;return e=new Ut({props:{code:t[0]}}),{c(){J(e.$$.fragment)},m(n,s){B(e,n,s),l=!0},p(n,s){const i={};s&1&&(i.code=n[0]),e.$set(i)},i(n){l||(j(e.$$.fragment,n),l=!0)},o(n){A(e.$$.fragment,n),l=!1},d(n){U(e,n)}}}function Cl(t){let e,l;return e=new $l({}),{c(){J(e.$$.fragment)},m(n,s){B(e,n,s),l=!0},p:T,i(n){l||(j(e.$$.fragment,n),l=!0)},o(n){A(e.$$.fragment,n),l=!1},d(n){U(e,n)}}}function Sl(t){let e,l;return e=new gl({}),{c(){J(e.$$.fragment)},m(n,s){B(e,n,s),l=!0},p:T,i(n){l||(j(e.$$.fragment,n),l=!0)},o(n){A(e.$$.fragment,n),l=!1},d(n){U(e,n)}}}function Ol(t){let e,l;return e=new hl({}),{c(){J(e.$$.fragment)},m(n,s){B(e,n,s),l=!0},p:T,i(n){l||(j(e.$$.fragment,n),l=!0)},o(n){A(e.$$.fragment,n),l=!1},d(n){U(e,n)}}}function Ll(t){let e,l;return e=new nl({}),{c(){J(e.$$.fragment)},m(n,s){B(e,n,s),l=!0},p:T,i(n){l||(j(e.$$.fragment,n),l=!0)},o(n){A(e.$$.fragment,n),l=!1},d(n){U(e,n)}}}function Wl(t){let e,l,n,s,i,r,o,c,f,u,d,$,v,k,p;n=new Ht({}),o=new Fe({props:{display:"vertical"}});const S=[Ll,Ol,Sl,Cl,yl,wl],w=[];function g(m,b){return m[1]==="home"?0:m[1]==="dict"?1:m[1]==="suggest"?2:m[1]==="vote"?3:m[1]==="discordAuth"?4:m[1]==="discordAccount"?5:-1}return~(u=g(t))&&(d=w[u]=S[u](t)),k=new Fe({props:{display:"horizontal"}}),{c(){e=_("div"),l=_("div"),J(n.$$.fragment),s=y(),i=_("div"),r=_("div"),J(o.$$.fragment),c=y(),f=_("div"),d&&d.c(),$=y(),v=_("div"),J(k.$$.fragment),h(l,"class","top f svelte-11vxhj6"),h(r,"class","left svelte-11vxhj6"),h(f,"class","right svelte-11vxhj6"),h(i,"class","middle f svelte-11vxhj6"),h(v,"class","bottom svelte-11vxhj6"),h(e,"class","all fc svelte-11vxhj6")},m(m,b){L(m,e,b),a(e,l),B(n,l,null),a(e,s),a(e,i),a(i,r),B(o,r,null),a(i,c),a(i,f),~u&&w[u].m(f,null),a(e,$),a(e,v),B(k,v,null),p=!0},p(m,[b]){let C=u;u=g(m),u===C?~u&&w[u].p(m,b):(d&&(X(),A(w[C],1,1,()=>{w[C]=null}),Q()),~u?(d=w[u],d?d.p(m,b):(d=w[u]=S[u](m),d.c()),j(d,1),d.m(f,null)):d=null)},i(m){p||(j(n.$$.fragment,m),j(o.$$.fragment,m),j(d),j(k.$$.fragment,m),p=!0)},o(m){A(n.$$.fragment,m),A(o.$$.fragment,m),A(d),A(k.$$.fragment,m),p=!1},d(m){m&&O(e),U(n),U(o),~u&&w[u].d(),U(k)}}}function jl(t,e,l){let n;V(t,te,i=>l(1,n=i));let s;return window.location.pathname.includes("/auth")?(s=window.location.search.split("code=")[1],le(te,n="discordAuth",n)):le(te,n="dict",n),Ce(()=>{Zt(),el()}),[s,n]}class Dl extends ee{constructor(e){super(),x(this,e,jl,Wl,K,{})}}new Dl({target:document.getElementById("app")});
