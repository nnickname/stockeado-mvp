(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7575],{34482:function(e,t){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.Q=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var o={},n=e.split(a),i=(t||{}).decode||r,s=0;s<n.length;s++){var l=n[s],d=l.indexOf("=");if(!(d<0)){var c=l.substr(0,d).trim(),u=l.substr(++d,l.length).trim();'"'==u[0]&&(u=u.slice(1,-1)),void 0==o[c]&&(o[c]=function(e,t){try{return t(e)}catch(t){return e}}(u,i))}}return o},t.q=function(e,t,r){var a=r||{},i=a.encode||o;if("function"!=typeof i)throw TypeError("option encode is invalid");if(!n.test(e))throw TypeError("argument name is invalid");var s=i(t);if(s&&!n.test(s))throw TypeError("argument val is invalid");var l=e+"="+s;if(null!=a.maxAge){var d=a.maxAge-0;if(isNaN(d)||!isFinite(d))throw TypeError("option maxAge is invalid");l+="; Max-Age="+Math.floor(d)}if(a.domain){if(!n.test(a.domain))throw TypeError("option domain is invalid");l+="; Domain="+a.domain}if(a.path){if(!n.test(a.path))throw TypeError("option path is invalid");l+="; Path="+a.path}if(a.expires){if("function"!=typeof a.expires.toUTCString)throw TypeError("option expires is invalid");l+="; Expires="+a.expires.toUTCString()}if(a.httpOnly&&(l+="; HttpOnly"),a.secure&&(l+="; Secure"),a.sameSite)switch("string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:case"strict":l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"none":l+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return l};var r=decodeURIComponent,o=encodeURIComponent,a=/; */,n=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},2852:function(e,t,r){"use strict";r.d(t,{h:function(){return a}});var o=r(47286);let a=async e=>{try{var t;let r=await o.Z.post("/email",{...e},{headers:{authorization:"41212756478495-stockea2.token-auth"}});if(null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.send)return!0;return!1}catch(e){return!1}}},76373:function(e,t,r){"use strict";r.d(t,{AU:function(){return n},LV:function(){return a},XU:function(){return i},co:function(){return l},oW:function(){return s}});var o=r(47286);let a=async e=>{try{var t,r;let a=await o.Z.post("/orderss",{...e},{headers:{authorization:"41212756478495-stockea2.token-auth"}});if(console.log(a),(null==a?void 0:null===(t=a.data)||void 0===t?void 0:t.order)!==void 0)return null==a?void 0:null===(r=a.data)||void 0===r?void 0:r.order;return null}catch(e){return null}},n=async e=>{try{var t;let r=await o.Z.get("/orderss/edit",{headers:{token:e,authorization:"41212756478495-stockea2.token-auth"}});return console.log(r),null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.orders}catch(e){return null}},i=async e=>{try{var t;let r=await o.Z.get("/orderss/get",{headers:{token:e,authorization:"41212756478495-stockea2.token-auth"}});return console.log(r),null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.orders}catch(e){return null}},s=async e=>{try{var t,r;let a=await o.Z.post("/orderss/edit",e,{headers:{authorization:"41212756478495-stockea2.token-auth"}});if((null==a?void 0:null===(t=a.data)||void 0===t?void 0:t.order)!==void 0)return null==a?void 0:null===(r=a.data)||void 0===r?void 0:r.order;return null}catch(e){return null}},l=async e=>{try{var t;let r=await o.Z.get("/orderss",{headers:{token:e,authorization:"41212756478495-stockea2.token-auth"}});return null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.order}catch(e){return null}}},57719:function(e,t,r){"use strict";r.d(t,{GA:function(){return i},PR:function(){return s},pH:function(){return n},r4:function(){return d},uz:function(){return l}});var o=r(99110),a=r(47286);let n=async(e,t)=>{try{var r,n;let i=new o.Z,s=await a.Z.post("/userr/login",{email:e,password:t},{headers:{authorization:"41212756478495-stockea2.token-auth"}});if((null==s?void 0:null===(r=s.data)||void 0===r?void 0:r.user)!==void 0)return i.set("access_token",null==s?void 0:null===(n=s.data)||void 0===n?void 0:n.token,{path:"/"}),!0;return!1}catch(e){return!1}},i=async e=>{try{var t;let r=await a.Z.get("/userr/login",{headers:{token:e,authorization:"41212756478495-stockea2.token-auth"}});return console.log(r),null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.user}catch(e){return null}},s=async()=>{try{var e;let t=new o.Z,r=t.get("access_token"),n=await a.Z.get("/userr",{headers:{token:r,authorization:"41212756478495-stockea2.token-auth"}});return null==n?void 0:null===(e=n.data)||void 0===e?void 0:e.user}catch(e){return null}},l=async e=>{try{var t;let r=await a.Z.post("/userr/edit",{...e},{headers:{authorization:"41212756478495-stockea2.token-auth"}});if((null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.user)!==void 0)return!0;return!1}catch(e){return!1}},d=async e=>{try{var t,r,n;let i=new o.Z,s=await a.Z.post("/userr/edit/create",{...e},{headers:{authorization:"41212756478495-stockea2.token-auth"}});if((null==s?void 0:null===(t=s.data)||void 0===t?void 0:t.user)!==void 0&&(null==s?void 0:null===(r=s.data)||void 0===r?void 0:r.user)!==null)return i.set("access_token",null==s?void 0:null===(n=s.data)||void 0===n?void 0:n.token,{path:"/"}),!0;return!1}catch(e){return!1}}},77575:function(e,t,r){"use strict";r.r(t);var o=r(57437),a=r(2265);r(20340);var n=r(81550),i=r.n(n),s=r(32300),l=r(96821),d=r(17483),c=r(76373),u=r(24033),m=r(63139),h=r(2852),p=r(57719);t.default=()=>{let e=(0,u.useRouter)(),[t,r]=(0,a.useState)(""),[n,x]=(0,a.useState)(""),[b,f]=(0,a.useState)(""),[v,k]=(0,a.useState)(""),[y,g]=(0,a.useState)(""),[w,j]=(0,a.useState)(""),[A,N]=(0,a.useState)(null),[C,S]=(0,a.useState)([]),[E,T]=(0,a.useState)(0),[_,O]=(0,a.useState)(""),B=async()=>{if(""!==v&&""!==y&&""!==b&&""!==t&&""!==n&&""!==w&&null!==A){if((null==C?void 0:C.length)>0){let r=await (0,c.LV)({name:t,lastname:n,direction:w,maxDate:A,payType:E,state:0,nameShop:b,ruc:y,phone:v,items:C,sendPricing:"0",sendDate:"0",email:_,note:" "});null!==r&&(await (0,h.h)({tomail:_,title:"Stockeado",text:"Creamos tu orden",orderid:null==r?void 0:r._id,templateId:"d-d3182e5de32145d29fe053124e00a3b0"}),await (0,h.h)({tomail:"bruno@stockeado.com",title:"Stockeado",text:"Creamos tu orden",orderid:null==r?void 0:r._id,templateId:"d-d3182e5de32145d29fe053124e00a3b0"}),d.fn.success("Creaste una nueva orden","Creado"),e.push("/marketplace/order?id="+(null==r?void 0:r._id)))}else d.fn.error("No tienes elementos en el carrito.","Error")}else d.fn.error("Completa el formulario.","Error")},U=async()=>{let e=await (0,p.PR)();null!=e&&(null==e?void 0:e.type)==="workshop"&&(O(null==e?void 0:e.email),r(null==e?void 0:e.name),x(null==e?void 0:e.lastname),f(null==e?void 0:e.nameShop))};return(0,a.useEffect)(()=>{S(JSON.parse(sessionStorage.getItem("cart"))),U()},[]),(0,o.jsxs)("div",{style:{margin:"0px",padding:"0px"},children:[(0,o.jsxs)("p",{style:{padding:"1rem",color:"#3662E3",cursor:"pointer"},onClick:()=>e.push("/marketplace"),children:[(0,o.jsx)(i(),{name:"chevron-back-outline"})," Regresar al Marketplace"]}),(0,o.jsx)("div",{className:"payment",children:(0,o.jsxs)("div",{className:"selectPayment",children:[(0,o.jsx)("img",{style:{marginRight:"auto",marginLeft:"auto",maxWidth:"250px"},src:l.Z.src,alt:"LogoStockeado"}),(0,o.jsx)("h1",{style:{marginTop:"1rem",marginBottom:"1rem"},children:"1. Introduce tus datos y la fecha m\xe1xima de env\xedo. "}),(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,o.jsx)("input",{value:b,onChange:e=>f(e.target.value),placeholder:"Nombre del taller",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,o.jsx)("input",{value:y,onChange:e=>g(e.target.value),placeholder:"RUC",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,o.jsxs)("div",{style:{marginTop:"1rem",display:"flex",justifyContent:"space-between"},children:[(0,o.jsx)("input",{value:t,onChange:e=>r(e.target.value),placeholder:"Nombre",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,o.jsx)("input",{value:n,onChange:e=>x(e.target.value),placeholder:"Apellido",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,o.jsx)("input",{value:w,onChange:e=>j(e.target.value),placeholder:"Direcci\xf3n",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,o.jsx)("input",{value:A,onChange:e=>N(e.target.value),placeholder:"Fecha maxima",type:"datetime-local",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,o.jsx)("input",{value:_,onChange:e=>O(e.target.value),placeholder:"Correo electr\xf3nico",type:"email",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,o.jsx)("input",{value:v,onChange:e=>k(e.target.value),placeholder:"Celular",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,o.jsx)("h1",{style:{marginTop:"2rem",marginBottom:"1rem"},children:"2. Revisa tu orden. "}),(0,o.jsx)("p",{style:{color:"grey",marginBottom:"2rem",fontSize:".9rem"},children:"Antes de realizar la compra, confirma el pedido para poder calcular la fecha, monto de env\xedo y hora confirmada por el proveedor. Al colocar “Confirmar Pedido” se le notificar\xe1 al proveedor, Tiempo estimado de 5 a 10 minutos para confirmar orden."}),(0,o.jsx)("div",{className:"responsiveItems",children:null==C?void 0:C.map((e,t)=>{var r,a,n,s;return(0,o.jsx)("div",{children:(0,o.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",borderBottom:"1px solid rgba(220, 220, 220, .3)"},children:[(0,o.jsx)("img",{style:{width:"105px",maxHeight:"105px"},src:null==e?void 0:null===(r=e.item)||void 0===r?void 0:r.image,alt:"Product Image"}),(0,o.jsx)("p",{className:"dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",children:(0,o.jsxs)("p",{style:{minWidth:"250px",margin:"auto"},children:[(null==e?void 0:null===(a=e.item)||void 0===a?void 0:a.name)+" ","  ",null==e?void 0:null===(n=e.item)||void 0===n?void 0:n.brand]})}),(0,o.jsx)("p",{className:"dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",children:String(null==e?void 0:e.ammount)}),(0,o.jsxs)("p",{className:"dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",style:{marginLeft:"4rem",maxWidth:"100px"},children:["s/. ",Number(null==e?void 0:null===(s=e.item)||void 0===s?void 0:s.priceSelling).toFixed(2)]}),(0,o.jsx)("button",{onClick:()=>{S(null==C?void 0:C.filter((e,r)=>t!==r)),sessionStorage.setItem("cart",JSON.stringify(null==C?void 0:C.filter((e,r)=>t!==r)))},style:{color:"#ff6347",marginLeft:"2rem",minWidth:"100px"},children:(0,o.jsx)(i(),{name:"trash-outline",color:"#ff6347"})})]})},t)})}),(0,o.jsx)("p",{style:{color:"grey",textAlign:"center"},children:(null==C?void 0:C.length)===0?"No encontramos nada":""}),(0,o.jsxs)("div",{style:{marginTop:"3rem",display:"flex",justifyContent:"space-between"},children:[(0,o.jsx)("p",{style:{fontSize:"1.1rem"},children:"Total"}),(0,o.jsxs)("p",{children:["s/. ",Number((0,s.m)(C,!1,0)).toFixed(2)]})]}),(0,o.jsx)("button",{type:"button",onClick:()=>B(),style:{marginTop:"1rem",padding:".5rem",textAlign:"center",width:"100%",background:"linear-gradient(180deg, #127FFF 0%, #3662E3 100%)",color:"white"},children:"Confirmar Pedido"}),(0,o.jsxs)("div",{style:{textAlign:"center"},children:[(0,o.jsx)("p",{style:{marginTop:"3rem",fontSize:"1rem"},children:"\xbfTenes alguna duda?"}),(0,o.jsxs)("button",{className:"btn-whatsapp",children:[(0,o.jsx)(i(),{style:{marginRight:"1rem"},name:"logo-whatsapp"}),"Escribenos por WhatsApp"]})]})]})}),(0,o.jsx)(m.default,{})]})}},63139:function(e,t,r){"use strict";r.r(t);var o=r(57437),a=r(81550),n=r.n(a),i=r(16691),s=r.n(i),l=r(61396),d=r.n(l);t.default=()=>(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("footer",{className:"wow fadeInUp dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24","data-wow-delay":".1s",children:(0,o.jsxs)("div",{className:"container",children:[(0,o.jsxs)("div",{className:"-mx-4 flex flex-wrap",children:[(0,o.jsx)("div",{className:"w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12",children:(0,o.jsxs)("div",{className:"mb-12 max-w-[360px] lg:mb-16",children:[(0,o.jsxs)(d(),{href:"/",className:"mb-8 inline-block",children:[(0,o.jsx)(s(),{src:"/images/logo/logopreferente.png",alt:"logo",className:"w-full dark:hidden",width:140,height:30,style:{transform:"translateX(-15%)"}}),(0,o.jsx)(s(),{src:"/images/logo/logopreferente.png",alt:"logo",className:"hidden w-full dark:block",width:140,height:30})]}),(0,o.jsxs)("div",{className:"flex items-center",children:[(0,o.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/company/stockeado/",className:"dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary",children:(0,o.jsx)(n(),{style:{color:"grey",fontSize:"1.5rem",margin:"1rem",cursor:"pointer"},name:"logo-linkedin"})}),(0,o.jsx)("a",{target:"_blank",href:"https://www.instagram.com/stockeado_/",className:"dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary",children:(0,o.jsx)(n(),{style:{color:"grey",fontSize:"1.5rem",margin:"1rem",cursor:"pointer"},name:"logo-instagram"})})]})]})}),(0,o.jsx)("div",{className:"w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12",children:(0,o.jsxs)("div",{className:"mb-12 lg:mb-16",children:[(0,o.jsx)("h2",{className:"mb-10 text-xl font-bold text-black dark:text-white",children:"Links"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"/signup",className:"dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary",children:"Crear cuenta"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"/signin",className:"dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary",children:"Ingresar"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"/",className:"dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary",children:"Marketplace"})})]})]})}),(0,o.jsx)("div",{className:"w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12",children:(0,o.jsxs)("div",{className:"mb-12 lg:mb-16",children:[(0,o.jsx)("h2",{className:"mb-10 text-xl font-bold text-black dark:text-white",children:"Terms"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"/privacy",className:"dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary",children:"Pol\xedtica de Privacidad"})}),(0,o.jsx)("li",{children:(0,o.jsx)("a",{href:"/terms",className:"dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary",children:"T\xe9rminos y condiciones"})})]})]})}),(0,o.jsx)("div",{className:"w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12",children:(0,o.jsxs)("div",{className:"mb-12 lg:mb-16",children:[(0,o.jsx)("h2",{className:"mb-10 text-xl font-bold text-black dark:text-white",children:"Soporte"}),(0,o.jsx)("ul",{children:(0,o.jsx)("li",{children:(0,o.jsx)("a",{target:"_blank",href:"https://api.whatsapp.com/send?phone=+51941531016&text=\xbfEn que podemos ayudarte?",className:"dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary",children:"WhatsApp"})})})]})})]}),(0,o.jsx)("div",{className:"h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"}),(0,o.jsx)("div",{className:"py-8",children:(0,o.jsxs)("p",{className:"text-center text-base text-body-color dark:text-white",children:["Desarrollado por @Stockeado"," "]})})]})})})},20340:function(){},96821:function(e,t){"use strict";t.Z={src:"/_next/static/media/logopreferente.bbc72056.png",height:200,width:640,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEUrQY0bK0ssU7ktSaUdMWEzXNUYJDsYIzwqS6wnQoxrmA7DAAAACnRSTlMEGSAOboSRcmx7+e+bqwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAgSURBVHicY2BkYGBmAGE2dhYWTg5WVgZGRkZGJiYmJgADaQBE56VQMAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:3}},99110:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var o=r(34482);function a(e,t){void 0===t&&(t={});var r,o=e&&"j"===e[0]&&":"===e[1]?e.substr(2):e;if(void 0===(r=t.doNotParse)&&(r=!o||"{"!==o[0]&&"["!==o[0]&&'"'!==o[0]),!r)try{return JSON.parse(o)}catch(e){}return e}var n=function(){return(n=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(){function e(e,t){var r=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies="string"==typeof e?o.Q(e,t):"object"==typeof e&&null!==e?e:{},new Promise(function(){r.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie}).catch(function(){})}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=o.Q(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,r){return void 0===t&&(t={}),this._updateBrowserValues(r),a(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var r={};for(var o in this.cookies)r[o]=a(this.cookies[o],e);return r},e.prototype.set=function(e,t,r){var a;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=n(n({},this.cookies),((a={})[e]=t,a)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=o.q(e,t,r)),this._emitChange({name:e,value:t,options:r})},e.prototype.remove=function(e,t){var r=t=n(n({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=n({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=o.q(e,"",r)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}()}}]);