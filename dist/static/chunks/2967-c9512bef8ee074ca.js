(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2967],{47286:function(e,t,a){"use strict";var n=a(92173);t.Z=n.Z.create({baseURL:"https://www.stockeado.com/api",withCredentials:!0,headers:{"Content-type":"application/json","Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"*","Access-Control-Expose-Headers":"*","Access-Control-Allow-Credentials":"true"}})},5803:function(e,t,a){"use strict";a.d(t,{Ol:function(){return o},QR:function(){return l},UO:function(){return r},UR:function(){return i},Wz:function(){return s}});var n=a(47286);let o=async e=>{try{var t,a;let o=await n.Z.post("/quotess",{...e},{headers:{authorization:"41212756478495-stockea2.token-auth"}});if((null==o?void 0:null===(t=o.data)||void 0===t?void 0:t.quote)!==void 0)return null==o?void 0:null===(a=o.data)||void 0===a?void 0:a.quote;return null}catch(e){return null}},s=async e=>{try{var t,a;let o=await n.Z.post("/quotess/edit",{...e},{headers:{authorization:"41212756478495-stockea2.token-auth"}});if((null==o?void 0:null===(t=o.data)||void 0===t?void 0:t.quote)!==void 0)return null==o?void 0:null===(a=o.data)||void 0===a?void 0:a.quote;return null}catch(e){return null}},l=async e=>{try{var t;let a=await n.Z.get("/quotess",{headers:{token:e,authorization:"41212756478495-stockea2.token-auth"}});return null==a?void 0:null===(t=a.data)||void 0===t?void 0:t.quotes}catch(e){return null}},i=async e=>{try{var t;let a=await n.Z.get("/quotess/edit",{headers:{token:e,authorization:"41212756478495-stockea2.token-auth"}});return null==a?void 0:null===(t=a.data)||void 0===t?void 0:t.quote}catch(e){return null}},r=async e=>{try{var t;let a=await n.Z.get("/quotess/delete",{headers:{token:e,authorization:"41212756478495-stockea2.token-auth"}});return null==a?void 0:null===(t=a.data)||void 0===t?void 0:t.quote}catch(e){return null}}},57719:function(e,t,a){"use strict";a.d(t,{GA:function(){return l},PR:function(){return i},pH:function(){return s},r4:function(){return c},uz:function(){return r}});var n=a(99110),o=a(47286);let s=async(e,t)=>{try{var a,s;let l=new n.Z,i=await o.Z.post("/userr/login",{email:e,password:t},{headers:{authorization:"41212756478495-stockea2.token-auth"}});if((null==i?void 0:null===(a=i.data)||void 0===a?void 0:a.user)!==void 0)return l.set("access_token",null==i?void 0:null===(s=i.data)||void 0===s?void 0:s.token,{path:"/"}),!0;return!1}catch(e){return!1}},l=async e=>{try{var t;let a=await o.Z.get("/userr/login",{headers:{token:e,authorization:"41212756478495-stockea2.token-auth"}});return console.log(a),null==a?void 0:null===(t=a.data)||void 0===t?void 0:t.user}catch(e){return null}},i=async()=>{try{var e;let t=new n.Z,a=t.get("access_token"),s=await o.Z.get("/userr",{headers:{token:a,authorization:"41212756478495-stockea2.token-auth"}});return null==s?void 0:null===(e=s.data)||void 0===e?void 0:e.user}catch(e){return null}},r=async e=>{try{var t;let a=await o.Z.post("/userr/edit",{...e},{headers:{authorization:"41212756478495-stockea2.token-auth"}});if((null==a?void 0:null===(t=a.data)||void 0===t?void 0:t.user)!==void 0)return!0;return!1}catch(e){return!1}},c=async e=>{try{var t,a,s;let l=new n.Z,i=await o.Z.post("/userr/edit/create",{...e},{headers:{authorization:"41212756478495-stockea2.token-auth"}});if((null==i?void 0:null===(t=i.data)||void 0===t?void 0:t.user)!==void 0&&(null==i?void 0:null===(a=i.data)||void 0===a?void 0:a.user)!==null)return l.set("access_token",null==i?void 0:null===(s=i.data)||void 0===s?void 0:s.token,{path:"/"}),!0;return!1}catch(e){return!1}}},27009:function(e,t,a){"use strict";var n=a(57437),o=a(96821),s=a(43690);a(25420);var l=a(16691),i=a.n(l),r=a(81550),c=a.n(r),u=a(2265),d=a(99110),A=a(24033);t.Z=e=>{let{user:t,frameContennt:a,route:l}=e,r=(0,A.useRouter)(),h=new d.Z,[v,m]=(0,u.useState)(!0);return(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"responsiveButtonViewNavigation",style:{display:"none",width:"100%",textAlign:"right"},children:(0,n.jsx)("button",{style:{fontSize:".9rem",color:"grey",position:"absolute",top:"1rem",right:"1rem"},onClick:()=>m(!v),children:v?"Esconder barra de navegaci\xf3n":"Mostrar barra de navegaci\xf3n"})}),(0,n.jsxs)("div",{className:"sideBar",children:[(0,n.jsxs)("div",{className:"sidebarCustomStyle",style:{display:v?"block":"none"},children:[(0,n.jsx)(i(),{src:o.Z,alt:"Logo"}),(0,n.jsx)("img",{className:"avatar",alt:"",src:(null==t?void 0:t.imageLogo)!==""?null==t?void 0:t.imageLogo:s.Z.src}),(0,n.jsx)("h1",{className:"title",children:null==t?void 0:t.nameShop}),(0,n.jsx)("div",{style:{marginTop:"3rem"}}),(null==t?void 0:t.type)==="workshop"?(0,n.jsxs)("div",{className:"list",onClick:()=>{r.push("/quotes"),setTimeout(()=>{window.location.reload()},1500)},children:[(0,n.jsx)(c(),{style:{color:"quoutes"===l?"#1570EF":"#25d366"},className:"icon",name:"cash-outline"}),(0,n.jsx)("p",{style:{color:"quotes"===l?"#1570EF":"black"},className:"text",children:"Cotizaciones"})]}):(0,n.jsxs)("div",{children:[(0,n.jsxs)("div",{className:"list",onClick:()=>r.push("/hub"),children:[(0,n.jsx)(c(),{style:{color:"dashboard"===l?"#1570EF":"black"},className:"icon",name:"home-outline"}),(0,n.jsx)("p",{style:{color:"dashboard"===l?"#1570EF":"black"},className:"text",children:"Dashboard"})]}),(0,n.jsxs)("div",{className:"list",onClick:()=>{r.push("/inventory",{}),setTimeout(()=>{window.location.reload()},1500)},children:[(0,n.jsx)(c(),{style:{color:"inventory"===l?"#1570EF":"black"},className:"icon",name:"cart-outline"}),(0,n.jsx)("p",{style:{color:"inventory"===l?"#1570EF":"black"},className:"text",children:"Inventario Web"})]})]}),(0,n.jsxs)("div",{className:"list",children:[(0,n.jsx)(c(),{style:{color:"request"===l?"#1570EF":"black"},className:"icon",name:"person-outline"}),(0,n.jsx)("p",{style:{color:"request"===l?"#1570EF":"black"},className:"text",children:"Solicitudes"})]}),(0,n.jsxs)("div",{onClick:()=>r.push("/orders"),className:"list",children:[(0,n.jsx)(c(),{style:{color:"orders"===l?"#1570EF":"black"},className:"icon",name:"mail-unread-outline"}),(0,n.jsx)("p",{style:{color:"orders"===l?"#1570EF":"black"},className:"text",children:"Ordenes finales"})]}),(0,n.jsx)("div",{style:{marginTop:"3rem"}}),(0,n.jsxs)("div",{onClick:()=>r.push("/configuration"),className:"list",children:[(0,n.jsx)(c(),{style:{color:"configuration"===l?"#1570EF":"black"},className:"icon",name:"settings-outline"}),(0,n.jsx)("p",{style:{color:"configuration"===l?"#1570EF":"black"},className:"text",children:"Configuraci\xf3n"})]}),(0,n.jsxs)("div",{className:"list logout",onClick:async()=>{h.remove("access_token"),r.push("/signin")},children:[(0,n.jsx)(c(),{className:"icon",name:"log-out-outline"}),(0,n.jsx)("p",{className:"text",children:"Cerrar sesi\xf3n"})]})]}),(0,n.jsx)("div",{className:"sideBarContainer",children:a})]})]})}},25420:function(){},43690:function(e,t){"use strict";t.Z={src:"/_next/static/media/blueimage.a34531f7.png",height:194,width:259,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAA1BMVEUAAP+KeNJXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAADElEQVR4nGNgIAcAAAA2AAG2dLktAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:6}},96821:function(e,t){"use strict";t.Z={src:"/_next/static/media/logopreferente.bbc72056.png",height:200,width:640,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEUrQY0bK0ssU7ktSaUdMWEzXNUYJDsYIzwqS6wnQoxrmA7DAAAACnRSTlMEGSAOboSRcmx7+e+bqwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAgSURBVHicY2BkYGBmAGE2dhYWTg5WVgZGRkZGJiYmJgADaQBE56VQMAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}}}]);