(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&l(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function N(){}function kt(t){return t()}function Ae(){return Object.create(null)}function Y(t){t.forEach(kt)}function $t(t){return typeof t=="function"}function K(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ve;function be(t,e){return ve||(ve=document.createElement("a")),ve.href=e,t===ve.href}function yt(t){return Object.keys(t).length===0}function St(t,...e){if(t==null)return N;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function V(t,e,n){t.$$.on_destroy.push(St(e,n))}function F(t){return t??""}function te(t,e,n){return t.set(n),e}function f(t,e){t.appendChild(e)}function L(t,e,n){t.insertBefore(e,n||null)}function O(t){t.parentNode&&t.parentNode.removeChild(t)}function re(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function E(t){return document.createTextNode(t)}function y(){return E(" ")}function I(t,e,n,l){return t.addEventListener(e,n,l),()=>t.removeEventListener(e,n,l)}function h(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ct(t){return Array.from(t.childNodes)}function z(t,e){e=""+e,t.data!==e&&(t.data=e)}function Z(t,e){t.value=e??""}function me(t,e,n,l){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,l?"important":"")}function Me(t,e,n){for(let l=0;l<t.options.length;l+=1){const s=t.options[l];if(s.__value===e){s.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Ot(t){const e=t.querySelector(":checked");return e&&e.__value}let pe;function he(t){pe=t}function Lt(){if(!pe)throw new Error("Function called outside component initialization");return pe}function Se(t){Lt().$$.on_mount.push(t)}const fe=[],Ne=[];let ue=[];const Te=[],Dt=Promise.resolve();let De=!1;function Wt(){De||(De=!0,Dt.then(wt))}function ke(t){ue.push(t)}const Oe=new Set;let ce=0;function wt(){if(ce!==0)return;const t=pe;do{try{for(;ce<fe.length;){const e=fe[ce];ce++,he(e),jt(e.$$)}}catch(e){throw fe.length=0,ce=0,e}for(he(null),fe.length=0,ce=0;Ne.length;)Ne.pop()();for(let e=0;e<ue.length;e+=1){const n=ue[e];Oe.has(n)||(Oe.add(n),n())}ue.length=0}while(fe.length);for(;Te.length;)Te.pop()();De=!1,Oe.clear(),he(t)}function jt(t){if(t.fragment!==null){t.update(),Y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ke)}}function Pt(t){const e=[],n=[];ue.forEach(l=>t.indexOf(l)===-1?e.push(l):n.push(l)),n.forEach(l=>l()),ue=e}const ge=new Set;let oe;function X(){oe={r:0,c:[],p:oe}}function Q(){oe.r||Y(oe.c),oe=oe.p}function W(t,e){t&&t.i&&(ge.delete(t),t.i(e))}function A(t,e,n,l){if(t&&t.o){if(ge.has(t))return;ge.add(t),oe.c.push(()=>{ge.delete(t),l&&(n&&t.d(1),l())}),t.o(e)}else l&&l()}function J(t){t&&t.c()}function R(t,e,n,l){const{fragment:s,after_update:i}=t.$$;s&&s.m(e,n),l||ke(()=>{const r=t.$$.on_mount.map(kt).filter($t);t.$$.on_destroy?t.$$.on_destroy.push(...r):Y(r),t.$$.on_mount=[]}),i.forEach(ke)}function B(t,e){const n=t.$$;n.fragment!==null&&(Pt(n.after_update),Y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function At(t,e){t.$$.dirty[0]===-1&&(fe.push(t),Wt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function x(t,e,n,l,s,i,r,c=[-1]){const o=pe;he(t);const a=t.$$={fragment:null,ctx:[],props:i,update:N,not_equal:s,bound:Ae(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:Ae(),dirty:c,skip_bound:!1,root:e.target||o.$$.root};r&&r(a.root);let u=!1;if(a.ctx=n?n(t,e.props||{},(d,$,...v)=>{const k=v.length?v[0]:$;return a.ctx&&s(a.ctx[d],a.ctx[d]=k)&&(!a.skip_bound&&a.bound[d]&&a.bound[d](k),u&&At(t,d)),$}):[],a.update(),u=!0,Y(a.before_update),a.fragment=l?l(a.ctx):!1,e.target){if(e.hydrate){const d=Ct(e.target);a.fragment&&a.fragment.l(d),d.forEach(O)}else a.fragment&&a.fragment.c();e.intro&&W(t.$$.fragment),R(t,e.target,e.anchor,e.customElement),wt()}he(o)}class ee{$destroy(){B(this,1),this.$destroy=N}$on(e,n){if(!$t(n))return N;const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(e){this.$$set&&!yt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const ae=[];function _e(t,e=N){let n;const l=new Set;function s(c){if(K(t,c)&&(t=c,n)){const o=!ae.length;for(const a of l)a[1](),ae.push(a,t);if(o){for(let a=0;a<ae.length;a+=2)ae[a][0](ae[a+1]);ae.length=0}}}function i(c){s(c(t))}function r(c,o=N){const a=[c,o];return l.add(a),l.size===1&&(n=e(s)||N),c(t),()=>{l.delete(a),l.size===0&&n&&(n(),n=null)}}return{set:s,update:i,subscribe:r}}const Pe="discordUser",Ee="currentSuggestion";let le=_e("home"),de={Noun:{french:"Nom",nbWords:0},Pronoun:{french:"Pronom",nbWords:0},Verb:{french:"Verbe",nbWords:0},Adjective:{french:"Adjectif",nbWords:0},Adverb:{french:"Adverbe",nbWords:0},Preposition:{french:"Préposition",nbWords:0},Conjonction:{french:"Conjonction",nbWords:0},Interjection:{french:"Interjection",nbWords:0},SpiritWord:{french:"Mot d'esprit",nbWords:0},FunctionParticule:{french:"Particule de fonction",nbWords:0},TransformationParticule:{french:"Particule de transformation",nbWords:0}},ne=_e(!1),se=_e();ne.set(!0);se.set({discord:{email:"iwi",id:"282136161588084738",avatar:"f506200355faa3c0013812ef90dab15a"}});const Ie=localStorage.getItem(Pe);Ie&&(ne.set(!0),se.set(JSON.parse(Ie)));function $e(t){return t?`https://cdn.discordapp.com/avatars/${t.discord.id}/${t.discord.avatar}.png`:""}function Mt(t){let e,n,l;return{c(){e=_("button"),e.textContent="Login"},m(s,i){L(s,e,i),n||(l=I(e,"click",t[4]),n=!0)},p:N,d(s){s&&O(e),n=!1,l()}}}function Nt(t){let e,n,l,s;return{c(){e=_("img"),h(e,"class","avatar svelte-1ici2vm"),h(e,"title","Connexion Discord"),be(e.src,n=$e(t[1]))||h(e,"src",n),h(e,"alt","Discord avatar")},m(i,r){L(i,e,r),l||(s=[I(e,"keypress",Ft),I(e,"click",t[3])],l=!0)},p(i,r){r&2&&!be(e.src,n=$e(i[1]))&&h(e,"src",n)},d(i){i&&O(e),l=!1,Y(s)}}}function Tt(t){let e,n,l,s,i,r;function c(u,d){return u[0]?Nt:Mt}let o=c(t),a=o(t);return{c(){e=_("div"),n=_("div"),l=y(),s=_("div"),s.innerHTML="<h1>Dibi v2</h1>",i=y(),r=_("div"),a.c(),h(n,"class","left f svelte-1ici2vm"),h(s,"class","center f svelte-1ici2vm"),h(r,"class","right f svelte-1ici2vm"),h(e,"class","header f svelte-1ici2vm")},m(u,d){L(u,e,d),f(e,n),f(e,l),f(e,s),f(e,i),f(e,r),a.m(r,null)},p(u,[d]){o===(o=c(u))&&a?a.p(u,d):(a.d(1),a=o(u),a&&(a.c(),a.m(r,null)))},i:N,o:N,d(u){u&&O(e),a.d()}}}const Et="https://discord.com/api/oauth2/authorize?client_id=1115564047048392754&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fauth&response_type=code&scope=identify%20email";function It(){window.location.href=Et}const Ft=()=>{};function Ht(t,e,n){let l,s,i;return V(t,ne,o=>n(0,l=o)),V(t,se,o=>n(1,s=o)),V(t,le,o=>n(2,i=o)),[l,s,i,()=>te(le,i="discordAccount",i),()=>It()]}class Ut extends ee{constructor(e){super(),x(this,e,Ht,Tt,K,{})}}function Fe(t){let e,n,l,s,i,r,c,o,a;return{c(){e=_("button"),n=_("span"),n.textContent="Proposer",s=y(),i=_("button"),r=_("span"),r.textContent="Voter",h(n,"class","svelte-1hhod8p"),h(e,"class",l=F(t[1]==="suggest"?"block-selected":"block")+" svelte-1hhod8p"),h(r,"class","svelte-1hhod8p"),h(i,"class",c=F(t[1]==="vote"?"block-selected":"block")+" svelte-1hhod8p")},m(u,d){L(u,e,d),f(e,n),L(u,s,d),L(u,i,d),f(i,r),o||(a=[I(e,"click",t[6]),I(i,"click",t[7])],o=!0)},p(u,d){d&2&&l!==(l=F(u[1]==="suggest"?"block-selected":"block")+" svelte-1hhod8p")&&h(e,"class",l),d&2&&c!==(c=F(u[1]==="vote"?"block-selected":"block")+" svelte-1hhod8p")&&h(i,"class",c)},d(u){u&&O(e),u&&O(s),u&&O(i),o=!1,Y(a)}}}function Vt(t){let e,n,l,s,i,r,c,o,a,u,d,$,v=t[2]&&Fe(t);return{c(){e=_("div"),n=_("button"),l=_("span"),l.textContent="Menu",i=y(),r=_("button"),c=_("span"),c.textContent="Dictionnaire",a=y(),v&&v.c(),h(l,"class","svelte-1hhod8p"),h(n,"class",s=F(t[1]==="home"?"block-selected":"block")+" svelte-1hhod8p"),h(c,"class","svelte-1hhod8p"),h(r,"class",o=F(t[1]==="dict"?"block-selected":"block")+" svelte-1hhod8p"),h(e,"class",u=F("nav "+t[0])+" svelte-1hhod8p")},m(k,p){L(k,e,p),f(e,n),f(n,l),f(e,i),f(e,r),f(r,c),f(e,a),v&&v.m(e,null),d||($=[I(n,"click",t[4]),I(r,"click",t[5])],d=!0)},p(k,[p]){p&2&&s!==(s=F(k[1]==="home"?"block-selected":"block")+" svelte-1hhod8p")&&h(n,"class",s),p&2&&o!==(o=F(k[1]==="dict"?"block-selected":"block")+" svelte-1hhod8p")&&h(r,"class",o),k[2]?v?v.p(k,p):(v=Fe(k),v.c(),v.m(e,null)):v&&(v.d(1),v=null),p&1&&u!==(u=F("nav "+k[0])+" svelte-1hhod8p")&&h(e,"class",u)},i:N,o:N,d(k){k&&O(e),v&&v.d(),d=!1,Y($)}}}function Rt(t,e,n){let l,s;V(t,le,d=>n(1,l=d)),V(t,ne,d=>n(2,s=d));let{display:i}=e;function r(d){te(le,l=d,l)}const c=()=>r("home"),o=()=>r("dict"),a=()=>r("suggest"),u=()=>r("vote");return t.$$set=d=>{"display"in d&&n(0,i=d.display)},[i,l,s,r,c,o,a,u]}class He extends ee{constructor(e){super(),x(this,e,Rt,Vt,K,{display:0})}}function Bt(t,e,n){let l,s,i;V(t,le,c=>n(1,l=c)),V(t,ne,c=>n(2,s=c)),V(t,se,c=>n(3,i=c));let{code:r}=e;return Se(()=>{fetch("http://localhost:5000/"+"exchange-code?code="+r).then(o=>o.json()).then(o=>{localStorage.setItem(Pe,JSON.stringify(o)),te(se,i=o,i),console.log(o),te(ne,s=!0,s);const a=window.location.protocol+"//"+window.location.host;window.history.replaceState({},document.title,a),te(le,l="discordAccount",l)}).catch(o=>{console.error(o)})}),t.$$set=c=>{"code"in c&&n(0,r=c.code)},[r]}class qt extends ee{constructor(e){super(),x(this,e,Bt,null,K,{code:0})}}function zt(t){let e;return{c(){e=_("span"),e.textContent="Non connecté."},m(n,l){L(n,e,l)},p:N,d(n){n&&O(e)}}}function Jt(t){let e,n,l,s,i,r,c=t[0].discord.username+"",o,a,u,d,$,v=t[0].xp+"",k,p,C,w,g=t[0].money+"",m,b,S,D;return{c(){e=_("div"),n=_("img"),s=y(),i=_("span"),r=E("Connecté en tant que "),o=E(c),a=y(),u=_("button"),u.textContent="Déconnexion",d=y(),$=_("p"),k=E(v),p=E(" XP"),C=y(),w=_("p"),m=E(g),b=E(" thunes"),me(n,"width","42px"),me(n,"height","42px"),me(n,"border-radius","42px"),be(n.src,l=$e(t[0]))||h(n,"src",l),h(n,"alt",""),h(e,"class","discord")},m(T,M){L(T,e,M),f(e,n),f(e,s),f(e,i),f(i,r),f(i,o),f(e,a),f(e,u),f(e,d),f(e,$),f($,k),f($,p),f(e,C),f(e,w),f(w,m),f(w,b),S||(D=I(u,"click",t[3]),S=!0)},p(T,M){M&1&&!be(n.src,l=$e(T[0]))&&h(n,"src",l),M&1&&c!==(c=T[0].discord.username+"")&&z(o,c),M&1&&v!==(v=T[0].xp+"")&&z(k,v),M&1&&g!==(g=T[0].money+"")&&z(m,g)},d(T){T&&O(e),S=!1,D()}}}function Gt(t){let e,n,l;function s(c,o){return c[1]?Jt:zt}let i=s(t),r=i(t);return{c(){e=_("div"),n=_("h1"),n.textContent="Gestion du compte",l=y(),r.c(),h(e,"class","all svelte-1ncp1wh")},m(c,o){L(c,e,o),f(e,n),f(e,l),r.m(e,null)},p(c,[o]){i===(i=s(c))&&r?r.p(c,o):(r.d(1),r=i(c),r&&(r.c(),r.m(e,null)))},i:N,o:N,d(c){c&&O(e),r.d()}}}function Yt(t,e,n){let l,s;V(t,se,c=>n(0,l=c)),V(t,ne,c=>n(1,s=c));function i(){te(ne,s=!1,s),te(se,l=void 0,l),window.localStorage.removeItem(Pe)}return[l,s,i,()=>i()]}class Kt extends ee{constructor(e){super(),x(this,e,Yt,Gt,K,{})}}function Ue(t){switch(t){case"Noun":return"Nom";case"Pronoun":return"Pronom";case"Verb":return"Verbe";case"Adjective":return"Adjectif";case"Adverb":return"Adverbe";case"Preposition":return"Préposition";case"Conjonction":return"Conjonction";case"Interjection":return"Interjection";case"SpiritWord":return"Mot d'esprit";case"FunctionParticule":return"Particule de fonction";case"TransformationParticule":return"Particule de transformation";default:return t}}function Ve(t){let e,n,l,s,i,r,c,o,a,u,d,$,v,k,p,C=t[0]._id+"",w,g=t[0].partOfSpeech&&Re(t),m=t[0].french&&Be(t),b=t[0].english&&qe(t),S=t[0].author&&ze(t),D=t[0].description&&Je(t),T=t[0].date&&Ge(t);return{c(){e=_("div"),g&&g.c(),n=y(),m&&m.c(),l=y(),b&&b.c(),s=y(),S&&S.c(),i=y(),D&&D.c(),r=y(),T&&T.c(),c=y(),o=_("div"),a=_("div"),u=_("a"),d=E("JSON"),v=y(),k=_("div"),p=_("span"),w=E(C),h(u,"href",$="/wordId?id="+t[0]._id),h(u,"target","_blank"),h(a,"class","label-div svelte-1l7ffii"),h(p,"class","value svelte-1l7ffii"),h(k,"class","value-div svelte-1l7ffii"),h(o,"class","block f svelte-1l7ffii"),h(e,"class","more-info fc svelte-1l7ffii")},m(M,q){L(M,e,q),g&&g.m(e,null),f(e,n),m&&m.m(e,null),f(e,l),b&&b.m(e,null),f(e,s),S&&S.m(e,null),f(e,i),D&&D.m(e,null),f(e,r),T&&T.m(e,null),f(e,c),f(e,o),f(o,a),f(a,u),f(u,d),f(o,v),f(o,k),f(k,p),f(p,w)},p(M,q){M[0].partOfSpeech?g?g.p(M,q):(g=Re(M),g.c(),g.m(e,n)):g&&(g.d(1),g=null),M[0].french?m?m.p(M,q):(m=Be(M),m.c(),m.m(e,l)):m&&(m.d(1),m=null),M[0].english?b?b.p(M,q):(b=qe(M),b.c(),b.m(e,s)):b&&(b.d(1),b=null),M[0].author?S?S.p(M,q):(S=ze(M),S.c(),S.m(e,i)):S&&(S.d(1),S=null),M[0].description?D?D.p(M,q):(D=Je(M),D.c(),D.m(e,r)):D&&(D.d(1),D=null),M[0].date?T?T.p(M,q):(T=Ge(M),T.c(),T.m(e,c)):T&&(T.d(1),T=null),q&1&&$!==($="/wordId?id="+M[0]._id)&&h(u,"href",$),q&1&&C!==(C=M[0]._id+"")&&z(w,C)},d(M){M&&O(e),g&&g.d(),m&&m.d(),b&&b.d(),S&&S.d(),D&&D.d(),T&&T.d()}}}function Re(t){let e,n,l,s,i,r=Ue(t[0].partOfSpeech)+"",c,o;return{c(){e=_("div"),n=_("div"),n.innerHTML='<span class="label svelte-1l7ffii">Nature</span>',l=y(),s=_("div"),i=_("span"),c=E(r),h(n,"class","label-div svelte-1l7ffii"),h(i,"class",o=F("value "+t[0].partOfSpeech)+" svelte-1l7ffii"),h(s,"class","value-div svelte-1l7ffii"),h(e,"class","block f svelte-1l7ffii")},m(a,u){L(a,e,u),f(e,n),f(e,l),f(e,s),f(s,i),f(i,c)},p(a,u){u&1&&r!==(r=Ue(a[0].partOfSpeech)+"")&&z(c,r),u&1&&o!==(o=F("value "+a[0].partOfSpeech)+" svelte-1l7ffii")&&h(i,"class",o)},d(a){a&&O(e)}}}function Be(t){let e,n,l,s,i,r=t[0].french+"",c;return{c(){e=_("div"),n=_("div"),n.innerHTML='<span class="label svelte-1l7ffii">Français</span>',l=y(),s=_("div"),i=_("span"),c=E(r),h(n,"class","label-div svelte-1l7ffii"),h(i,"class","value svelte-1l7ffii"),h(s,"class","value-div svelte-1l7ffii"),h(e,"class","block f svelte-1l7ffii")},m(o,a){L(o,e,a),f(e,n),f(e,l),f(e,s),f(s,i),f(i,c)},p(o,a){a&1&&r!==(r=o[0].french+"")&&z(c,r)},d(o){o&&O(e)}}}function qe(t){let e,n,l,s,i,r=t[0].english+"",c;return{c(){e=_("div"),n=_("div"),n.innerHTML='<span class="label svelte-1l7ffii">Anglais</span>',l=y(),s=_("div"),i=_("span"),c=E(r),h(n,"class","label-div svelte-1l7ffii"),h(i,"class","value svelte-1l7ffii"),h(s,"class","value-div svelte-1l7ffii"),h(e,"class","block f svelte-1l7ffii")},m(o,a){L(o,e,a),f(e,n),f(e,l),f(e,s),f(s,i),f(i,c)},p(o,a){a&1&&r!==(r=o[0].english+"")&&z(c,r)},d(o){o&&O(e)}}}function ze(t){let e,n,l,s,i,r=t[0].author+"",c;return{c(){e=_("div"),n=_("div"),n.innerHTML='<span class="label svelte-1l7ffii">Créateur</span>',l=y(),s=_("div"),i=_("span"),c=E(r),h(n,"class","label-div svelte-1l7ffii"),h(i,"class","value svelte-1l7ffii"),h(s,"class","value-div svelte-1l7ffii"),h(e,"class","block f svelte-1l7ffii")},m(o,a){L(o,e,a),f(e,n),f(e,l),f(e,s),f(s,i),f(i,c)},p(o,a){a&1&&r!==(r=o[0].author+"")&&z(c,r)},d(o){o&&O(e)}}}function Je(t){let e,n,l,s,i,r=t[0].description+"",c;return{c(){e=_("div"),n=_("div"),n.innerHTML='<span class="label svelte-1l7ffii">Description</span>',l=y(),s=_("div"),i=_("span"),c=E(r),h(n,"class","label-div svelte-1l7ffii"),h(i,"class","value svelte-1l7ffii"),h(s,"class","value-div svelte-1l7ffii"),h(e,"class","block f svelte-1l7ffii")},m(o,a){L(o,e,a),f(e,n),f(e,l),f(e,s),f(s,i),f(i,c)},p(o,a){a&1&&r!==(r=o[0].description+"")&&z(c,r)},d(o){o&&O(e)}}}function Ge(t){let e,n,l,s,i,r=Ke(t[0].date)+"",c;return{c(){e=_("div"),n=_("div"),n.innerHTML='<span class="label svelte-1l7ffii">Date d&#39;ajout</span>',l=y(),s=_("div"),i=_("span"),c=E(r),h(n,"class","label-div svelte-1l7ffii"),h(i,"class","value svelte-1l7ffii"),h(s,"class","value-div svelte-1l7ffii"),h(e,"class","block f svelte-1l7ffii")},m(o,a){L(o,e,a),f(e,n),f(e,l),f(e,s),f(s,i),f(i,c)},p(o,a){a&1&&r!==(r=Ke(o[0].date)+"")&&z(c,r)},d(o){o&&O(e)}}}function Xt(t){let e,n,l,s,i=t[0].dibi.toLowerCase()+"",r,c,o,a,u=t[0].french+"",d,$,v,k,p=Ye(t[0].date)+"",C,w,g,m,b=t[1]&&Ve(t);return{c(){e=_("div"),n=_("div"),l=_("div"),s=_("span"),r=E(i),o=y(),a=_("span"),d=E(u),$=y(),v=_("div"),k=_("span"),C=E(p),w=y(),b&&b.c(),h(s,"class",c=F("dibi "+t[0].partOfSpeech)+" svelte-1l7ffii"),h(a,"class","french svelte-1l7ffii"),h(l,"class","left f svelte-1l7ffii"),h(k,"class","date svelte-1l7ffii"),h(v,"class","right svelte-1l7ffii"),h(n,"class","word f svelte-1l7ffii"),h(e,"class","all fc svelte-1l7ffii")},m(S,D){L(S,e,D),f(e,n),f(n,l),f(l,s),f(s,r),f(l,o),f(l,a),f(a,d),f(n,$),f(n,v),f(v,k),f(k,C),f(e,w),b&&b.m(e,null),g||(m=[I(n,"click",t[2]),I(n,"keypress",Qt)],g=!0)},p(S,[D]){D&1&&i!==(i=S[0].dibi.toLowerCase()+"")&&z(r,i),D&1&&c!==(c=F("dibi "+S[0].partOfSpeech)+" svelte-1l7ffii")&&h(s,"class",c),D&1&&u!==(u=S[0].french+"")&&z(d,u),D&1&&p!==(p=Ye(S[0].date)+"")&&z(C,p),S[1]?b?b.p(S,D):(b=Ve(S),b.c(),b.m(e,null)):b&&(b.d(1),b=null)},i:N,o:N,d(S){S&&O(e),b&&b.d(),g=!1,Y(m)}}}function Ye(t){const e=new Date(t),n=String(e.getDate()).padStart(2,"0"),l=String(e.getMonth()+1).padStart(2,"0"),s=String(e.getFullYear()).slice(-2);return`${n}/${l}/${s}`}function Ke(t){const e=new Date(t),n=new Date;if(Xe(e,n))return Xe(e,n,-1)?"hier":`aujourd'hui à ${Qe(e)}`;const l=("0"+e.getDate()).slice(-2),s=("0"+(e.getMonth()+1)).slice(-2),i=e.getFullYear(),r=Qe(e);return`${l}/${s}/${i} à ${r}`}function Xe(t,e,n=0){return t.getDate()===e.getDate()+n&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function Qe(t){const e=("0"+t.getHours()).slice(-2),n=("0"+t.getMinutes()).slice(-2);return`${e}h${n}`}const Qt=()=>{};function Zt(t,e,n){let{word:l}=e,s=!1;const i=()=>n(1,s=!s);return t.$$set=r=>{"word"in r&&n(0,l=r.word)},[l,s,i]}class Ce extends ee{constructor(e){super(),x(this,e,Zt,Xt,K,{word:0})}}let ie=[],we=[],ye=_e("fetching"),Ze=_e("fetching");function xt(){fetch("http://localhost:5000/"+"dict").then(e=>e.json()).then(e=>{ie=e,el(),ye.set("ok")}).catch(e=>{console.error(e),ye.set("error")})}function el(){ie.forEach(t=>{de[t.partOfSpeech]?de[t.partOfSpeech].nbWords++:console.log(t)})}function tl(){fetch("http://localhost:5000/"+"suggestions").then(e=>e.json()).then(e=>{we=e,Ze.set("ok")}).catch(e=>{console.error(e),Ze.set("error")})}function xe(t,e,n){const l=t.slice();return l[5]=e[n][0],l[6]=e[n][1],l}function Le(t){const e=t.slice(),n=ie.length;return e[4]=n,e}function et(t){let e,n,l,s,i,r,c,o,a=t[4]+"",u,d,$,v,k,p=t[0]>0&&tt(t),C=Object.entries(de).sort(nt),w=[];for(let g=0;g<C.length;g+=1)w[g]=lt(xe(t,C,g));return{c(){e=_("h2"),e.textContent="Mot random",n=y(),p&&p.c(),l=y(),s=_("h2"),s.textContent="Stats",i=y(),r=_("div"),c=_("div"),o=_("span"),u=E(a),d=y(),$=_("span"),$.textContent="Mots",v=y();for(let g=0;g<w.length;g+=1)w[g].c();h(e,"class","svelte-thk7ka"),h(s,"class","svelte-thk7ka"),h(o,"class","val svelte-thk7ka"),h($,"class","lab svelte-thk7ka"),h(c,"class","block f"),h(r,"class","stats fc")},m(g,m){L(g,e,m),L(g,n,m),p&&p.m(g,m),L(g,l,m),L(g,s,m),L(g,i,m),L(g,r,m),f(r,c),f(c,o),f(o,u),f(c,d),f(c,$),f(r,v);for(let b=0;b<w.length;b+=1)w[b]&&w[b].m(r,null);k=!0},p(g,m){if(g[0]>0?p?(p.p(g,m),m&1&&W(p,1)):(p=tt(g),p.c(),W(p,1),p.m(l.parentNode,l)):p&&(X(),A(p,1,1,()=>{p=null}),Q()),m&0){C=Object.entries(de).sort(nt);let b;for(b=0;b<C.length;b+=1){const S=xe(g,C,b);w[b]?w[b].p(S,m):(w[b]=lt(S),w[b].c(),w[b].m(r,null))}for(;b<w.length;b+=1)w[b].d(1);w.length=C.length}},i(g){k||(W(p),k=!0)},o(g){A(p),k=!1},d(g){g&&O(e),g&&O(n),p&&p.d(g),g&&O(l),g&&O(s),g&&O(i),g&&O(r),re(w,g)}}}function tt(t){let e,n,l,s,i,r,c;return s=new Ce({props:{word:ie[t[0]]}}),{c(){e=_("div"),n=_("button"),n.textContent="Random",l=y(),J(s.$$.fragment),h(e,"class","random-word")},m(o,a){L(o,e,a),f(e,n),f(e,l),R(s,e,null),i=!0,r||(c=I(n,"click",t[3]),r=!0)},p(o,a){const u={};a&1&&(u.word=ie[o[0]]),s.$set(u)},i(o){i||(W(s.$$.fragment,o),i=!0)},o(o){A(s.$$.fragment,o),i=!1},d(o){o&&O(e),B(s),r=!1,c()}}}function lt(t){let e,n,l=t[6].nbWords+"",s,i,r,c=t[6].french+"",o,a,u,d,$=(t[6].nbWords*100/t[4]).toFixed(2)+"",v,k,p;return{c(){e=_("div"),n=_("span"),s=E(l),i=y(),r=_("span"),o=E(c),a=y(),u=_("span"),d=E("("),v=E($),k=E(" %)"),p=y(),h(n,"class",F(t[5]+" val")+" svelte-thk7ka"),h(r,"class",F(t[5]+" lab")+" svelte-thk7ka"),h(u,"class",F(t[5]+" percent")+" svelte-thk7ka"),h(e,"class","block f")},m(C,w){L(C,e,w),f(e,n),f(n,s),f(e,i),f(e,r),f(r,o),f(e,a),f(e,u),f(u,d),f(u,v),f(u,k),f(e,p)},p:N,d(C){C&&O(e)}}}function ll(t){let e,n,l,s,i,r,c,o,a,u,d,$,v,k,p=t[1]&&et(Le(t));return{c(){e=_("div"),n=_("h1"),n.textContent="V2 du dictionnaire",l=y(),s=_("ul"),s.innerHTML=`<li>Recodé en Svelte pour de meilleures perfomances navigateur et un code plus simple</li> 
        <li>Ajout de la proposition de mots</li> 
        <li>Authentification Discord</li>`,i=y(),r=_("h2"),r.textContent="Open source",c=y(),o=_("a"),o.textContent="Liste de tous les mots JSON",a=y(),u=_("br"),d=y(),$=_("span"),$.innerHTML='Ce dictionnaire est constitué d&#39;un <a href="https://github.com/MarioVieilledent/DirtyPazu-Server-v2" target="_blank">serveur</a> proposant une api simple et d&#39;une <a href="https://github.com/MarioVieilledent/DirtyPazu-Client-v2" target="_blank">web app</a> pour l&#39;interfacage. La base de données est enregistré sur MongoDB Cloud et est privée.',v=y(),p&&p.c(),me(s,"margin-left","36px"),h(r,"class","svelte-thk7ka"),h(o,"href","/dict"),h(o,"target","_blank"),h(e,"class","container svelte-thk7ka")},m(C,w){L(C,e,w),f(e,n),f(e,l),f(e,s),f(e,i),f(e,r),f(e,c),f(e,o),f(e,a),f(e,u),f(e,d),f(e,$),f(e,v),p&&p.m(e,null),k=!0},p(C,[w]){C[1]?p?(p.p(Le(C),w),w&2&&W(p,1)):(p=et(Le(C)),p.c(),W(p,1),p.m(e,null)):p&&(X(),A(p,1,1,()=>{p=null}),Q())},i(C){k||(W(p),k=!0)},o(C){A(p),k=!1},d(C){C&&O(e),p&&p.d()}}}const nt=(t,e)=>e[1].nbWords-t[1].nbWords;function nl(t,e,n){let l;V(t,ye,c=>n(1,l=c));let s;Se(()=>{i()});function i(){n(0,s=Math.floor(Math.random()*ie.length))}return[s,l,i,()=>i()]}class sl extends ee{constructor(e){super(),x(this,e,nl,ll,K,{})}}const We=(t,e)=>{if(ie){let n=[],l=new RegExp(e.toLowerCase());return ie.forEach(s=>{let i=!1;t.dibi&&l.test(s.dibi.toLowerCase())&&(i=!0),t.french&&l.test(s.french.toLowerCase())&&(i=!0),t.english&&l.test(s.english.toLowerCase())&&(i=!0),t.author&&l.test(s.author.toLowerCase())&&(i=!0),i&&n.push(s)}),n}else return[]},je=(t,e,n,l)=>(t.sort((s,i)=>{let r;switch(e){case"relevance":r=il(l,s,i);break;case"dibi":r=s.dibi.localeCompare(i.dibi);break;case"french":r=s.french.localeCompare(i.french);break;case"date":r=s.date.localeCompare(i.date);break}return n==="asc"?r:-r}),t);function il(t,e,n){let l=t.toLowerCase();if(l===e.dibi.toLowerCase()||l===e.french.toLowerCase()||l===e.english.toLowerCase())return 1e3;if(l===n.dibi.toLowerCase()||l===n.french.toLowerCase()||l===n.english.toLowerCase())return-1e3;let s=0,i=0;for(let r=1;r<=l.length;r++)for(let c=0;c<l.length-r;c++)l.slice(c,c+r)===e.dibi.toLowerCase()&&(s+=r*r),l.slice(c,c+r)===n.dibi.toLowerCase()&&(i+=r*r),l.slice(c,c+r)===e.french.toLowerCase()&&(s+=r*r),l.slice(c,c+r)===n.french.toLowerCase()&&(i+=r*r),l.slice(c,c+r)===e.english.toLowerCase()&&(s+=r*r),l.slice(c,c+r)===n.english.toLowerCase()&&(i+=r*r);return i-s}function st(t,e,n){const l=t.slice();return l[13]=e[n],l}function rl(t){let e,n,l,s,i,r,c,o,a;return{c(){e=_("div"),n=_("div"),l=_("input"),s=y(),i=_("div"),r=y(),c=_("div"),c.innerHTML='<img src="/chevron-down-solid.svg" alt="Bouton plus de paramètres de recherche"/>',h(l,"id","inputSimpleSearch"),h(l,"class","input-simple-search svelte-207jas"),h(l,"type","text"),h(l,"placeholder","Rechercher"),h(i,"class","cross"),h(n,"class","simple-search-bar svelte-207jas"),h(c,"class","more f svelte-207jas"),h(e,"class","simple-search f svelte-207jas")},m(u,d){L(u,e,d),f(e,n),f(n,l),Z(l,t[2]),f(n,s),f(n,i),f(e,r),f(e,c),o||(a=[I(l,"input",t[6]),I(l,"input",t[7])],o=!0)},p(u,d){d&4&&l.value!==u[2]&&Z(l,u[2])},d(u){u&&O(e),o=!1,Y(a)}}}function ol(t){let e;return{c(){e=_("span"),e.textContent="Erreur lors de la récupération des mots."},m(n,l){L(n,e,l)},p:N,i:N,o:N,d(n){n&&O(e)}}}function cl(t){let e,n,l=t[1],s=[];for(let r=0;r<l.length;r+=1)s[r]=it(st(t,l,r));const i=r=>A(s[r],1,1,()=>{s[r]=null});return{c(){e=_("div");for(let r=0;r<s.length;r+=1)s[r].c();h(e,"class","list svelte-207jas")},m(r,c){L(r,e,c);for(let o=0;o<s.length;o+=1)s[o]&&s[o].m(e,null);n=!0},p(r,c){if(c&2){l=r[1];let o;for(o=0;o<l.length;o+=1){const a=st(r,l,o);s[o]?(s[o].p(a,c),W(s[o],1)):(s[o]=it(a),s[o].c(),W(s[o],1),s[o].m(e,null))}for(X(),o=l.length;o<s.length;o+=1)i(o);Q()}},i(r){if(!n){for(let c=0;c<l.length;c+=1)W(s[c]);n=!0}},o(r){s=s.filter(Boolean);for(let c=0;c<s.length;c+=1)A(s[c]);n=!1},d(r){r&&O(e),re(s,r)}}}function al(t){let e;return{c(){e=_("span"),e.textContent="Chargement des mots..."},m(n,l){L(n,e,l)},p:N,i:N,o:N,d(n){n&&O(e)}}}function it(t){let e,n;return e=new Ce({props:{word:t[13]}}),{c(){J(e.$$.fragment)},m(l,s){R(e,l,s),n=!0},p(l,s){const i={};s&2&&(i.word=l[13]),e.$set(i)},i(l){n||(W(e.$$.fragment,l),n=!0)},o(l){A(e.$$.fragment,l),n=!1},d(l){B(e,l)}}}function fl(t){let e,n,l,s,i,r;function c(v,k){return rl}let a=c()(t);const u=[al,cl,ol],d=[];function $(v,k){return v[0]==="fetching"?0:v[0]==="ok"?1:2}return s=$(t),i=d[s]=u[s](t),{c(){e=_("div"),n=_("div"),a.c(),l=y(),i.c(),h(n,"class","search f svelte-207jas"),h(e,"class","container fc svelte-207jas")},m(v,k){L(v,e,k),f(e,n),a.m(n,null),f(e,l),d[s].m(e,null),r=!0},p(v,[k]){a.p(v,k);let p=s;s=$(v),s===p?d[s].p(v,k):(X(),A(d[p],1,1,()=>{d[p]=null}),Q(),i=d[s],i?i.p(v,k):(i=d[s]=u[s](v),i.c()),W(i,1),i.m(e,null))},i(v){r||(W(i),r=!0)},o(v){A(i),r=!1},d(v){v&&O(e),a.d(),d[s].d()}}}let ul=100,dl="desc";function hl(t,e,n){let l;V(t,ye,C=>n(0,l=C));let s=[],i={dibi:!0,french:!0,english:!0,author:!1},r=[],c="",o="relevance";Se(()=>{setTimeout(()=>{document.getElementById("inputSimpleSearch").focus()},200)});const a=()=>{s=We(i,c),u(),d()};function u(){c?o="relevance":o="date",s=je(s,o,dl,c)}function d(){n(1,r=s.slice(0,ul))}function $(C){n(2,c=C.target.value)}const v=(C,w=150)=>{let g;return function(...m){clearTimeout(g),g=setTimeout(()=>C.apply(this,m),w)}};function k(){c=this.value,n(2,c)}const p=C=>{$(C),v(a)()};return t.$$.update=()=>{t.$$.dirty&1&&l==="ok"&&a()},[l,r,c,a,$,v,k,p]}class pl extends ee{constructor(e){super(),x(this,e,hl,fl,K,{})}}function rt(t,e,n){const l=t.slice();return l[25]=e[n],l}function ot(t,e,n){const l=t.slice();return l[28]=e[n],l[29]=e,l[30]=n,l}function ct(t,e,n){const l=t.slice();return l[31]=e[n][0],l[32]=e[n][1],l}function _l(t){let e;return{c(){e=_("span"),e.textContent="Authentification Discord nécessaire"},m(n,l){L(n,e,l)},p:N,i:N,o:N,d(n){n&&O(e)}}}function vl(t){let e,n,l,s,i,r,c,o,a,u,d,$,v,k,p,C,w=t[0].versions[0].words,g=[];for(let b=0;b<w.length;b+=1)g[b]=ut(ot(t,w,b));let m=t[1].length>0&&dt(t);return{c(){e=_("h1"),e.textContent="Proposition",n=y(),l=_("div"),s=_("h2"),s.textContent="Proposer un ou plusieurs mots dibi",i=y();for(let b=0;b<g.length;b+=1)g[b].c();r=y(),c=_("button"),c.textContent="New word",o=y(),a=_("div"),u=_("div"),d=y(),m&&m.c(),$=y(),v=_("button"),v.textContent="Proposer",h(s,"class","svelte-5y5ras"),h(c,"class","svelte-5y5ras"),h(u,"class","separator"),h(a,"class","close-words fc svelte-5y5ras"),h(v,"class","svelte-5y5ras"),h(l,"class","suggest fc svelte-5y5ras")},m(b,S){L(b,e,S),L(b,n,S),L(b,l,S),f(l,s),f(l,i);for(let D=0;D<g.length;D+=1)g[D]&&g[D].m(l,null);f(l,r),f(l,c),f(l,o),f(l,a),f(a,u),f(a,d),m&&m.m(a,null),f(l,$),f(l,v),k=!0,p||(C=[I(c,"click",t[19]),I(v,"click",t[20])],p=!0)},p(b,S){if(S[0]&105){w=b[0].versions[0].words;let D;for(D=0;D<w.length;D+=1){const T=ot(b,w,D);g[D]?g[D].p(T,S):(g[D]=ut(T),g[D].c(),g[D].m(l,r))}for(;D<g.length;D+=1)g[D].d(1);g.length=w.length}b[1].length>0?m?(m.p(b,S),S[0]&2&&W(m,1)):(m=dt(b),m.c(),W(m,1),m.m(a,null)):m&&(X(),A(m,1,1,()=>{m=null}),Q())},i(b){k||(W(m),k=!0)},o(b){A(m),k=!1},d(b){b&&O(e),b&&O(n),b&&O(l),re(g,b),m&&m.d(),p=!1,Y(C)}}}function at(t){let e,n=t[32].french+"",l;return{c(){e=_("option"),l=E(n),h(e,"class",F(t[31])+" svelte-5y5ras"),e.__value=t[31],e.value=e.__value},m(s,i){L(s,e,i),f(e,l)},p:N,d(s){s&&O(e)}}}function ft(t){let e,n,l;function s(){return t[18](t[30])}return{c(){e=_("button"),e.textContent="Remove",h(e,"class","svelte-5y5ras")},m(i,r){L(i,e,r),n||(l=I(e,"click",s),n=!0)},p(i,r){t=i},d(i){i&&O(e),n=!1,l()}}}function ut(t){let e,n,l,s,i,r,c,o,a,u,d,$,v,k,p,C,w,g;function m(){t[8].call(l,t[29],t[30])}let b=Object.entries(de),S=[];for(let H=0;H<b.length;H+=1)S[H]=at(ct(t,b,H));function D(){t[10].call(r,t[29],t[30])}function T(){t[12].call(u,t[29],t[30])}function M(){t[14].call($,t[29],t[30])}function q(){t[16].call(p,t[29],t[30])}let U=t[0].versions[0].words.length>1&&ft(t);return{c(){e=_("div"),n=_("div"),l=_("input"),i=y(),r=_("select");for(let H=0;H<S.length;H+=1)S[H].c();o=y(),a=_("div"),u=_("input"),d=y(),$=_("input"),v=y(),k=_("div"),p=_("textarea"),C=y(),U&&U.c(),h(l,"placeholder","Dibi"),h(l,"type","text"),h(l,"class",s=F(t[28].partOfSpeech)+" svelte-5y5ras"),h(r,"class",c=F(t[28].partOfSpeech)+" svelte-5y5ras"),t[28].partOfSpeech===void 0&&ke(D),h(n,"class","dibi-partOfSpeech f svelte-5y5ras"),h(u,"placeholder","Français"),h(u,"type","text"),h(u,"class","svelte-5y5ras"),h($,"placeholder","Anglais"),h($,"type","text"),h($,"class","svelte-5y5ras"),h(a,"class","fr-en f svelte-5y5ras"),h(p,"placeholder","Description"),h(p,"class","svelte-5y5ras"),h(k,"class","description f svelte-5y5ras"),h(e,"class","word fc svelte-5y5ras")},m(H,j){L(H,e,j),f(e,n),f(n,l),Z(l,t[28].dibi),f(n,i),f(n,r);for(let P=0;P<S.length;P+=1)S[P]&&S[P].m(r,null);Me(r,t[28].partOfSpeech,!0),f(e,o),f(e,a),f(a,u),Z(u,t[28].french),f(a,d),f(a,$),Z($,t[28].english),f(e,v),f(e,k),f(k,p),Z(p,t[28].description),f(e,C),U&&U.m(e,null),w||(g=[I(l,"input",m),I(l,"change",t[9]),I(r,"change",D),I(r,"change",t[11]),I(u,"input",T),I(u,"change",t[13]),I($,"input",M),I($,"change",t[15]),I(p,"input",q),I(p,"change",t[17])],w=!0)},p(H,j){if(t=H,j[0]&1&&s!==(s=F(t[28].partOfSpeech)+" svelte-5y5ras")&&h(l,"class",s),j[0]&1&&l.value!==t[28].dibi&&Z(l,t[28].dibi),j&0){b=Object.entries(de);let P;for(P=0;P<b.length;P+=1){const G=ct(t,b,P);S[P]?S[P].p(G,j):(S[P]=at(G),S[P].c(),S[P].m(r,null))}for(;P<S.length;P+=1)S[P].d(1);S.length=b.length}j[0]&1&&c!==(c=F(t[28].partOfSpeech)+" svelte-5y5ras")&&h(r,"class",c),j[0]&1&&Me(r,t[28].partOfSpeech),j[0]&1&&u.value!==t[28].french&&Z(u,t[28].french),j[0]&1&&$.value!==t[28].english&&Z($,t[28].english),j[0]&1&&Z(p,t[28].description),t[0].versions[0].words.length>1?U?U.p(t,j):(U=ft(t),U.c(),U.m(e,null)):U&&(U.d(1),U=null)},d(H){H&&O(e),re(S,H),U&&U.d(),w=!1,Y(g)}}}function dt(t){let e,n,l,s,i,r,c=t[1],o=[];for(let u=0;u<c.length;u+=1)o[u]=ht(rt(t,c,u));const a=u=>A(o[u],1,1,()=>{o[u]=null});return{c(){e=_("h2"),e.textContent="Mots existants",n=y(),l=_("div");for(let u=0;u<o.length;u+=1)o[u].c();s=y(),i=_("div"),h(e,"class","svelte-5y5ras"),h(l,"class","close-words-list svelte-5y5ras"),h(i,"class","separator")},m(u,d){L(u,e,d),L(u,n,d),L(u,l,d);for(let $=0;$<o.length;$+=1)o[$]&&o[$].m(l,null);L(u,s,d),L(u,i,d),r=!0},p(u,d){if(d[0]&2){c=u[1];let $;for($=0;$<c.length;$+=1){const v=rt(u,c,$);o[$]?(o[$].p(v,d),W(o[$],1)):(o[$]=ht(v),o[$].c(),W(o[$],1),o[$].m(l,null))}for(X(),$=c.length;$<o.length;$+=1)a($);Q()}},i(u){if(!r){for(let d=0;d<c.length;d+=1)W(o[d]);r=!0}},o(u){o=o.filter(Boolean);for(let d=0;d<o.length;d+=1)A(o[d]);r=!1},d(u){u&&O(e),u&&O(n),u&&O(l),re(o,u),u&&O(s),u&&O(i)}}}function ht(t){let e,n;return e=new Ce({props:{word:t[25]}}),{c(){J(e.$$.fragment)},m(l,s){R(e,l,s),n=!0},p(l,s){const i={};s[0]&2&&(i.word=l[25]),e.$set(i)},i(l){n||(W(e.$$.fragment,l),n=!0)},o(l){A(e.$$.fragment,l),n=!1},d(l){B(e,l)}}}function ml(t){let e,n,l,s;const i=[vl,_l],r=[];function c(o,a){return o[2]?0:1}return n=c(t),l=r[n]=i[n](t),{c(){e=_("div"),l.c(),h(e,"class","content fc svelte-5y5ras")},m(o,a){L(o,e,a),r[n].m(e,null),s=!0},p(o,a){let u=n;n=c(o),n===u?r[n].p(o,a):(X(),A(r[u],1,1,()=>{r[u]=null}),Q(),l=r[n],l?l.p(o,a):(l=r[n]=i[n](o),l.c()),W(l,1),l.m(e,null))},i(o){s||(W(l),s=!0)},o(o){A(l),s=!1},d(o){o&&O(e),r[n].d()}}}function gl(t,e,n){let l,s;V(t,se,j=>n(21,l=j)),V(t,ne,j=>n(2,s=j));let i={state:"suggested",versions:[{versionNumber:1,words:[],upVote:[],downVote:[],thread:[]}],author:l.discord.email};const r=window.localStorage.getItem(Ee);r&&(i=JSON.parse(r)),a();let c=[];function o(){setTimeout(()=>{window.localStorage.setItem(Ee,JSON.stringify(i))},100)}function a(){i.versions[0].words.push({author:l.discord.username,dibi:"",partOfSpeech:"Noun",french:"",english:"",description:"",date:Date.now().toString()}),n(0,i)}function u(j){i.versions[0].words.length>1&&(i.versions[0].words.splice(j,1),n(0,i))}function d(){n(1,c=[]),setTimeout(()=>{i.versions[0].words.forEach(j=>{$(j.dibi),v(j.french)})},100)}function $(j){if(j){const P=`^${j}$`;let G=[];G=We({dibi:!0,author:!1,french:!1,english:!1},P),G=je(G,"relevance","asc",P),n(1,c=[...c,...G])}}function v(j){if(j){const P=`${j}`;let G=[];G=We({dibi:!1,author:!1,french:!0,english:!1},P),G=je(G,"relevance","asc",P),n(1,c=[...c,...G])}}function k(){setTimeout(()=>{console.log(i),fetch("http://localhost:5000/"+"suggest",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}).then(P=>P.json()).then(P=>{console.log(P)})},100)}function p(j,P){j[P].dibi=this.value,n(0,i)}const C=()=>{d(),o()};function w(j,P){j[P].partOfSpeech=Ot(this),n(0,i)}const g=()=>o();function m(j,P){j[P].french=this.value,n(0,i)}const b=()=>{d(),o()};function S(j,P){j[P].english=this.value,n(0,i)}const D=()=>o();function T(j,P){j[P].description=this.value,n(0,i)}return[i,c,s,o,a,u,d,k,p,C,w,g,m,b,S,D,T,()=>o(),j=>{u(j),o()},()=>{a(),o()},()=>k()]}class bl extends ee{constructor(e){super(),x(this,e,gl,ml,K,{},null,[-1,-1])}}function pt(t,e,n){const l=t.slice();return l[0]=e[n],l}function _t(t,e,n){const l=t.slice();return l[3]=e[n],l}function vt(t,e,n){const l=t.slice();return l[6]=e[n],l}function mt(t){let e,n;return e=new Ce({props:{word:t[6]}}),{c(){J(e.$$.fragment)},m(l,s){R(e,l,s),n=!0},p:N,i(l){n||(W(e.$$.fragment,l),n=!0)},o(l){A(e.$$.fragment,l),n=!1},d(l){B(e,l)}}}function gt(t){let e,n,l,s=t[3].versionNumber+"",i,r,c,o,a,u=t[3].words,d=[];for(let v=0;v<u.length;v+=1)d[v]=mt(vt(t,u,v));const $=v=>A(d[v],1,1,()=>{d[v]=null});return{c(){e=_("div"),n=_("span"),l=E("Version "),i=E(s),r=y(),c=_("div");for(let v=0;v<d.length;v+=1)d[v].c();o=y(),h(c,"class","words"),h(e,"class","version")},m(v,k){L(v,e,k),f(e,n),f(n,l),f(n,i),f(e,r),f(e,c);for(let p=0;p<d.length;p+=1)d[p]&&d[p].m(c,null);f(e,o),a=!0},p(v,k){if(k&0){u=v[3].words;let p;for(p=0;p<u.length;p+=1){const C=vt(v,u,p);d[p]?(d[p].p(C,k),W(d[p],1)):(d[p]=mt(C),d[p].c(),W(d[p],1),d[p].m(c,null))}for(X(),p=u.length;p<d.length;p+=1)$(p);Q()}},i(v){if(!a){for(let k=0;k<u.length;k+=1)W(d[k]);a=!0}},o(v){d=d.filter(Boolean);for(let k=0;k<d.length;k+=1)A(d[k]);a=!1},d(v){v&&O(e),re(d,v)}}}function bt(t){let e,n,l,s=t[0].author+"",i,r,c,o=t[0].state+"",a,u,d,$,v,k=t[0].versions,p=[];for(let w=0;w<k.length;w+=1)p[w]=gt(_t(t,k,w));const C=w=>A(p[w],1,1,()=>{p[w]=null});return{c(){e=_("div"),n=_("span"),l=E("Suggéré par "),i=E(s),r=y(),c=_("span"),a=E(o),u=y(),d=_("div");for(let w=0;w<p.length;w+=1)p[w].c();$=y(),h(d,"class","versions"),h(e,"class","suggestion")},m(w,g){L(w,e,g),f(e,n),f(n,l),f(n,i),f(e,r),f(e,c),f(c,a),f(e,u),f(e,d);for(let m=0;m<p.length;m+=1)p[m]&&p[m].m(d,null);f(e,$),v=!0},p(w,g){if(g&0){k=w[0].versions;let m;for(m=0;m<k.length;m+=1){const b=_t(w,k,m);p[m]?(p[m].p(b,g),W(p[m],1)):(p[m]=gt(b),p[m].c(),W(p[m],1),p[m].m(d,null))}for(X(),m=k.length;m<p.length;m+=1)C(m);Q()}},i(w){if(!v){for(let g=0;g<k.length;g+=1)W(p[g]);v=!0}},o(w){p=p.filter(Boolean);for(let g=0;g<p.length;g+=1)A(p[g]);v=!1},d(w){w&&O(e),re(p,w)}}}function kl(t){let e,n,l,s=we,i=[];for(let c=0;c<s.length;c+=1)i[c]=bt(pt(t,s,c));const r=c=>A(i[c],1,1,()=>{i[c]=null});return{c(){e=_("div"),n=_("div");for(let c=0;c<i.length;c+=1)i[c].c();h(n,"class","suggestion-list"),h(e,"class","container fc svelte-1pi5om1")},m(c,o){L(c,e,o),f(e,n);for(let a=0;a<i.length;a+=1)i[a]&&i[a].m(n,null);l=!0},p(c,[o]){if(o&0){s=we;let a;for(a=0;a<s.length;a+=1){const u=pt(c,s,a);i[a]?(i[a].p(u,o),W(i[a],1)):(i[a]=bt(u),i[a].c(),W(i[a],1),i[a].m(n,null))}for(X(),a=s.length;a<i.length;a+=1)r(a);Q()}},i(c){if(!l){for(let o=0;o<s.length;o+=1)W(i[o]);l=!0}},o(c){i=i.filter(Boolean);for(let o=0;o<i.length;o+=1)A(i[o]);l=!1},d(c){c&&O(e),re(i,c)}}}function $l(t){return console.log(we),[]}class wl extends ee{constructor(e){super(),x(this,e,$l,kl,K,{})}}function yl(t){let e,n;return e=new Kt({}),{c(){J(e.$$.fragment)},m(l,s){R(e,l,s),n=!0},p:N,i(l){n||(W(e.$$.fragment,l),n=!0)},o(l){A(e.$$.fragment,l),n=!1},d(l){B(e,l)}}}function Sl(t){let e,n;return e=new qt({props:{code:t[0]}}),{c(){J(e.$$.fragment)},m(l,s){R(e,l,s),n=!0},p(l,s){const i={};s&1&&(i.code=l[0]),e.$set(i)},i(l){n||(W(e.$$.fragment,l),n=!0)},o(l){A(e.$$.fragment,l),n=!1},d(l){B(e,l)}}}function Cl(t){let e,n;return e=new wl({}),{c(){J(e.$$.fragment)},m(l,s){R(e,l,s),n=!0},p:N,i(l){n||(W(e.$$.fragment,l),n=!0)},o(l){A(e.$$.fragment,l),n=!1},d(l){B(e,l)}}}function Ol(t){let e,n;return e=new bl({}),{c(){J(e.$$.fragment)},m(l,s){R(e,l,s),n=!0},p:N,i(l){n||(W(e.$$.fragment,l),n=!0)},o(l){A(e.$$.fragment,l),n=!1},d(l){B(e,l)}}}function Ll(t){let e,n;return e=new pl({}),{c(){J(e.$$.fragment)},m(l,s){R(e,l,s),n=!0},p:N,i(l){n||(W(e.$$.fragment,l),n=!0)},o(l){A(e.$$.fragment,l),n=!1},d(l){B(e,l)}}}function Dl(t){let e,n;return e=new sl({}),{c(){J(e.$$.fragment)},m(l,s){R(e,l,s),n=!0},p:N,i(l){n||(W(e.$$.fragment,l),n=!0)},o(l){A(e.$$.fragment,l),n=!1},d(l){B(e,l)}}}function Wl(t){let e,n,l,s,i,r,c,o,a,u,d,$,v,k,p;l=new Ut({}),c=new He({props:{display:"vertical"}});const C=[Dl,Ll,Ol,Cl,Sl,yl],w=[];function g(m,b){return m[1]==="home"?0:m[1]==="dict"?1:m[1]==="suggest"?2:m[1]==="vote"?3:m[1]==="discordAuth"?4:m[1]==="discordAccount"?5:-1}return~(u=g(t))&&(d=w[u]=C[u](t)),k=new He({props:{display:"horizontal"}}),{c(){e=_("div"),n=_("div"),J(l.$$.fragment),s=y(),i=_("div"),r=_("div"),J(c.$$.fragment),o=y(),a=_("div"),d&&d.c(),$=y(),v=_("div"),J(k.$$.fragment),h(n,"class","top f svelte-11vxhj6"),h(r,"class","left svelte-11vxhj6"),h(a,"class","right svelte-11vxhj6"),h(i,"class","middle f svelte-11vxhj6"),h(v,"class","bottom svelte-11vxhj6"),h(e,"class","all fc svelte-11vxhj6")},m(m,b){L(m,e,b),f(e,n),R(l,n,null),f(e,s),f(e,i),f(i,r),R(c,r,null),f(i,o),f(i,a),~u&&w[u].m(a,null),f(e,$),f(e,v),R(k,v,null),p=!0},p(m,[b]){let S=u;u=g(m),u===S?~u&&w[u].p(m,b):(d&&(X(),A(w[S],1,1,()=>{w[S]=null}),Q()),~u?(d=w[u],d?d.p(m,b):(d=w[u]=C[u](m),d.c()),W(d,1),d.m(a,null)):d=null)},i(m){p||(W(l.$$.fragment,m),W(c.$$.fragment,m),W(d),W(k.$$.fragment,m),p=!0)},o(m){A(l.$$.fragment,m),A(c.$$.fragment,m),A(d),A(k.$$.fragment,m),p=!1},d(m){m&&O(e),B(l),B(c),~u&&w[u].d(),B(k)}}}function jl(t,e,n){let l;V(t,le,i=>n(1,l=i));let s;return window.location.pathname.includes("/auth")?(s=window.location.search.split("code=")[1],te(le,l="discordAuth",l)):te(le,l="dict",l),Se(()=>{xt(),tl()}),[s,l]}class Pl extends ee{constructor(e){super(),x(this,e,jl,Wl,K,{})}}new Pl({target:document.getElementById("app")});