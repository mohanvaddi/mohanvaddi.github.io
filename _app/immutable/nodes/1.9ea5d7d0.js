import{S as T,i as j,s as A,k as _,q as x,a as C,l as b,m as g,r as k,h as u,c as G,n as p,b as P,G as i,u as w,H as S,I as H}from"../chunks/index.df21106d.js";import{s as z}from"../chunks/singletons.64f933d1.js";const B=()=>{const o=z;return{page:{subscribe:o.page.subscribe},navigating:{subscribe:o.navigating.subscribe},updated:o.updated}},F={subscribe(o){return B().page.subscribe(o)}};function q(o){let e,r,t,a,c;return{c(){e=_("p"),r=x("There’s no place like "),t=_("a"),a=x("home"),c=x("."),this.h()},l(l){e=b(l,"P",{class:!0});var n=g(e);r=k(n,"There’s no place like "),t=b(n,"A",{class:!0,href:!0});var f=g(t);a=k(f,"home"),f.forEach(u),c=k(n,"."),n.forEach(u),this.h()},h(){p(t,"class","underline-offset-8 underline dark:text-primary cursor-pointer custom-underline-effect-primary"),p(t,"href","/"),p(e,"class","text-3xl dark:text-white font-roboto-mono ")},m(l,n){P(l,e,n),i(e,r),i(e,t),i(t,a),i(e,c)},d(l){l&&u(e)}}}function J(o){var $;let e,r,t,a,c=o[0].status+"",l,n,f=(($=o[0].error)==null?void 0:$.message)+"",E,I,h,s=o[0].status===404&&q();return{c(){e=_("div"),r=_("div"),t=_("div"),a=_("p"),l=x(c),n=x(` :
				`),E=x(f),I=C(),h=_("div"),s&&s.c(),this.h()},l(d){e=b(d,"DIV",{class:!0});var m=g(e);r=b(m,"DIV",{class:!0});var v=g(r);t=b(v,"DIV",{class:!0});var D=g(t);a=b(D,"P",{class:!0});var y=g(a);l=k(y,c),n=k(y,` :
				`),E=k(y,f),y.forEach(u),D.forEach(u),I=G(v),h=b(v,"DIV",{class:!0});var V=g(h);s&&s.l(V),V.forEach(u),v.forEach(u),m.forEach(u),this.h()},h(){p(a,"class","text-5xl font-montserrat font-extrabold dark:text-red-500 "),p(t,"class","p-4"),p(h,"class","py-4 text-center"),p(r,"class","grid grid-rows-2"),p(e,"class","dark:bg-dark flex-grow flex items-center justify-center")},m(d,m){P(d,e,m),i(e,r),i(r,t),i(t,a),i(a,l),i(a,n),i(a,E),i(r,I),i(r,h),s&&s.m(h,null)},p(d,[m]){var v;m&1&&c!==(c=d[0].status+"")&&w(l,c),m&1&&f!==(f=((v=d[0].error)==null?void 0:v.message)+"")&&w(E,f),d[0].status===404?s||(s=q(),s.c(),s.m(h,null)):s&&(s.d(1),s=null)},i:S,o:S,d(d){d&&u(e),s&&s.d()}}}function K(o,e,r){let t;return H(o,F,a=>r(0,t=a)),[t]}let N=class extends T{constructor(e){super(),j(this,e,K,J,A,{})}};export{N as component};