(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3185],{2473:function(e,t,n){Promise.resolve().then(n.bind(n,3172))},3172:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b}});var r=n(6705),a=n(2941),s=n.n(a);n(135),n(6454);var l=n(7483),o=n(955);let i=["light","dark"],c="(prefers-color-scheme: dark)",m="undefined"==typeof window,u=(0,o.createContext)(void 0),d=e=>(0,o.useContext)(u)?o.createElement(o.Fragment,null,e.children):o.createElement(h,e),f=["light","dark"],h=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:n=!0,enableColorScheme:r=!0,storageKey:a="theme",themes:s=f,defaultTheme:l=n?"system":"light",attribute:m="data-theme",value:d,children:h,nonce:_})=>{let[b,$]=(0,o.useState)(()=>g(a,l)),[k,S]=(0,o.useState)(()=>g(a)),x=d?Object.values(d):s,E=(0,o.useCallback)(e=>{let a=e;if(!a)return;"system"===e&&n&&(a=v());let s=d?d[a]:a,o=t?p():null,c=document.documentElement;if("class"===m?(c.classList.remove(...x),s&&c.classList.add(s)):s?c.setAttribute(m,s):c.removeAttribute(m),r){let e=i.includes(l)?l:null,t=i.includes(a)?a:e;c.style.colorScheme=t}null==o||o()},[]),w=(0,o.useCallback)(e=>{$(e);try{localStorage.setItem(a,e)}catch(e){}},[e]),C=(0,o.useCallback)(t=>{let r=v(t);S(r),"system"===b&&n&&!e&&E("system")},[b,e]);(0,o.useEffect)(()=>{let e=window.matchMedia(c);return e.addListener(C),C(e),()=>e.removeListener(C)},[C]),(0,o.useEffect)(()=>{let e=e=>{e.key===a&&w(e.newValue||l)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[w]),(0,o.useEffect)(()=>{E(null!=e?e:b)},[e,b]);let T=(0,o.useMemo)(()=>({theme:b,setTheme:w,forcedTheme:e,resolvedTheme:"system"===b?k:b,themes:n?[...s,"system"]:s,systemTheme:n?k:void 0}),[b,w,e,k,n,s]);return o.createElement(u.Provider,{value:T},o.createElement(y,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:n,enableColorScheme:r,storageKey:a,themes:s,defaultTheme:l,attribute:m,value:d,children:h,attrs:x,nonce:_}),h)},y=(0,o.memo)(({forcedTheme:e,storageKey:t,attribute:n,enableSystem:r,enableColorScheme:a,defaultTheme:s,value:l,attrs:m,nonce:u})=>{let d="system"===s,f="class"===n?`var d=document.documentElement,c=d.classList;c.remove(${m.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${n}',s='setAttribute';`,h=a?i.includes(s)&&s?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${s}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",y=(e,t=!1,r=!0)=>{let s=l?l[e]:e,o=t?e+"|| ''":`'${s}'`,c="";return a&&r&&!t&&i.includes(e)&&(c+=`d.style.colorScheme = '${e}';`),"class"===n?c+=t||s?`c.add(${o})`:"null":s&&(c+=`d[s](n,${o})`),c},g=e?`!function(){${f}${y(e)}}()`:r?`!function(){try{${f}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${d})){var t='${c}',m=window.matchMedia(t);if(m.media!==t||m.matches){${y("dark")}}else{${y("light")}}}else if(e){${l?`var x=${JSON.stringify(l)};`:""}${y(l?"x[e]":"e",!0)}}${d?"":"else{"+y(s,!1,!1)+"}"}${h}}catch(e){}}()`:`!function(){try{${f}var e=localStorage.getItem('${t}');if(e){${l?`var x=${JSON.stringify(l)};`:""}${y(l?"x[e]":"e",!0)}}else{${y(s,!1,!1)};}${h}}catch(t){}}();`;return o.createElement("script",{nonce:u,dangerouslySetInnerHTML:{__html:g}})},()=>!0),g=(e,t)=>{let n;if(!m){try{n=localStorage.getItem(e)||void 0}catch(e){}return n||t}},p=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},v=e=>(e||(e=window.matchMedia(c)),e.matches?"dark":"light");function _(e){let{children:t}=e;return(0,r.jsx)(d,{attribute:"class",enableSystem:!1,defaultTheme:"light",children:t})}async function b(e){let{children:t}=e;return(0,r.jsxs)("html",{suppressHydrationWarning:!0,lang:"en",children:[(0,r.jsxs)("head",{children:[(0,r.jsx)("link",{rel:"shortcut icon",href:"/images/favicon.ico"}),(0,r.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/images/apple-touch-icon.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/images/favicon-32x32.png"}),(0,r.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/images/favicon-16x16.png"})]}),(0,r.jsxs)("body",{className:"bg-[#FCFCFC] dark:bg-black ".concat(s().className),children:[(0,r.jsx)(_,{children:t}),(0,r.jsx)(l.mh,{})]})]})}n(8846)},135:function(){},8846:function(){},6454:function(){},2941:function(e){e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},9991:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(955),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,s={},c=null,m=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(m=t.ref),t)l.call(t,r)&&!i.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:a,type:e,key:c,ref:m,props:s,_owner:o.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},6705:function(e,t,n){"use strict";e.exports=n(9991)}},function(e){e.O(0,[6,7483,4121,8114,1744],function(){return e(e.s=2473)}),_N_E=e.O()}]);