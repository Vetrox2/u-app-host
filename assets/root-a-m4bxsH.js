import{C as e,F as t,L as n,M as r,N as i,P as a,a as o,c as s,d as c,f as l,k as u,o as d,t as f}from"./jsx-runtime-9CBvd6NR.js";import{gt as p,r as m,vt as h}from"./tooltip-B9TBuCOa.js";import{A as g,D as _,O as v,k as y,t as b}from"./auth-xCHglk8l.js";import{t as x}from"./FullScreenLoader-B4h93t0R.js";import"./i18n-Cgjkr3RH.js";var S=n(t(),1),C=f(),w=`
              (function() {
                try {
                  var saved = localStorage.getItem('${v.theme}');
                  var theme = saved || 'chestnut';
                  document.documentElement.setAttribute('data-theme', theme);
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                  }
                  var savedLang = localStorage.getItem('${v.language}');
                  if (savedLang) {
                    document.documentElement.lang = savedLang;
                  }
                } catch(e) {}
              })();
            `;function T({children:e}){return(0,C.jsxs)(`html`,{lang:`pl`,className:`dark`,suppressHydrationWarning:!0,children:[(0,C.jsxs)(`head`,{children:[(0,C.jsx)(`meta`,{charSet:`utf-8`}),(0,C.jsx)(`meta`,{name:`viewport`,content:`width=device-width, initial-scale=1`}),(0,C.jsx)(`title`,{children:`Dating Assistant`}),(0,C.jsx)(`script`,{dangerouslySetInnerHTML:{__html:w}}),(0,C.jsx)(d,{}),(0,C.jsx)(o,{})]}),(0,C.jsxs)(`body`,{className:`bg-background text-foreground antialiased selection:bg-primary/20 selection:text-primary`,children:[e,(0,C.jsx)(p,{position:`bottom-right`,richColors:!0,closeButton:!0}),(0,C.jsx)(l,{}),(0,C.jsx)(c,{})]})]})}var E=`/app`;function D(){let e=u();S.useEffect(()=>{let{data:t}=_.auth.onAuthStateChange(t=>{t===`SIGNED_OUT`&&(b(),g(window.location.pathname).startsWith(E)&&e(`/login`,{replace:!0}))});return()=>t.subscription.unsubscribe()},[e])}var O=r(function(){return D(),(0,C.jsx)(h,{client:y,children:(0,C.jsx)(m,{children:(0,C.jsx)(s,{})})})}),k=a(function(){return(0,C.jsx)(x,{})}),A=i(function({error:t}){let n=`Coś poszło nie tak`,r=`Wystąpił nieoczekiwany błąd w aplikacji.`,i;return e(t)&&(n=t.status===404?`404 - Nie znaleziono`:`Błąd`,r=t.status===404?`Żądana strona nie została znaleziona.`:t.statusText||r),(0,C.jsxs)(`main`,{className:`container mx-auto flex flex-col items-center justify-center p-4 pt-16 text-center`,children:[(0,C.jsx)(`h1`,{className:`mb-2 font-heading text-2xl font-semibold tracking-tight text-destructive`,children:n}),(0,C.jsx)(`p`,{className:`mb-4 text-sm text-muted-foreground`,children:r}),i]})});export{A as ErrorBoundary,k as HydrateFallback,T as Layout,O as default};