(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1200],{2131:function(e,r,t){"use strict";t.d(r,{Kb:function(){return a},V_:function(){return n},li:function(){return d}});var o=t(7286);let n=async e=>{try{var r,t;let n=await o.Z.get("/marketplacee",{headers:{token:e}});if((null==n?void 0:null===(r=n.data)||void 0===r?void 0:r.items)!==void 0)return null==n?void 0:null===(t=n.data)||void 0===t?void 0:t.items;return null}catch(e){return null}},a=async()=>{try{var e,r;let t=await o.Z.get("/marketplacee/random");if((null==t?void 0:null===(e=t.data)||void 0===e?void 0:e.items)!==void 0)return null==t?void 0:null===(r=t.data)||void 0===r?void 0:r.items;return null}catch(e){return null}},d=async()=>{try{var e,r;let t=await o.Z.get("/marketplacee/mostviewed");if((null==t?void 0:null===(e=t.data)||void 0===e?void 0:e.items)!==void 0)return null==t?void 0:null===(r=t.data)||void 0===r?void 0:r.items;return null}catch(e){return null}}},1948:function(e,r,t){"use strict";t.d(r,{Z:function(){return l}});var o=t(6705);t(6764);var n=t(793),a=t(1550),d=t.n(a),i=t(508),s=t(955),l=()=>{let[e,r]=(0,s.useState)(!1),[t,a]=(0,s.useState)(!1);return(0,o.jsxs)("div",{children:[(0,o.jsx)("div",{className:"background",style:{backgroundImage:"url(".concat("/_next/static/media/background.7d2b71fd.jpeg",")")},children:(0,o.jsxs)("div",{style:{zIndex:99},children:[(0,o.jsx)("h1",{children:" \xbfNo encuentras lo que necesitas?"}),(0,o.jsx)("p",{children:"Ingresa una solicitud de cotizaci\xf3n y recibe ofertas personalizadas."}),(0,o.jsx)("button",{onClick:()=>r(!0),children:"Ingresar solicitud"})]})}),(0,o.jsxs)(i.Z,{closeIcon:(0,o.jsx)(d(),{name:"close",color:"white"}),styles:{modal:{borderRadius:"1rem",maxWidth:"500px",padding:"0rem",backgroundColor:"rgb(245, 243, 243)",zIndex:56},closeIcon:{color:"white !important"},overlay:{backgroundColor:"rgba(220, 217, 217, 0.5)"}},open:e,center:!0,onClose:()=>r(!1),children:[(0,o.jsx)("p",{style:{background:'linear-gradient(89deg, var(--token-dc60c65c-2692-4b09-8d77-49a86f7aedee, rgb(24, 36, 61)) /* {"name":"Azul prinicipal"} */ 0%, var(--token-1632e6e1-d1e5-427f-b435-20cb1e67f695, rgb(54, 98, 227)) /* {"name":"Azul claro"} */ 123.5068681091516%)',width:"100%",padding:"1rem",color:"white"},children:"Envia tu solicitud"}),(0,o.jsxs)("div",{style:{padding:".5rem"},children:[(0,o.jsxs)("p",{className:"dark:text-body-color-dark mb-8 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",children:["Recibe tus cotizaciones por Whatsapp con un link de pago directo o ",(0,o.jsx)("a",{style:{color:"#3662E3"},href:"#",children:"crea tu cuenta"})," para conectar con proveedores"]}),(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,o.jsx)("select",{className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"},children:n.PX.map((e,r)=>(0,o.jsx)("option",{value:r+1,children:e},r))}),(0,o.jsxs)("select",{className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"},children:[(0,o.jsx)("option",{value:-1,children:"Medio de pago"}),(0,o.jsx)("option",{value:-1,children:"Efectivo"}),(0,o.jsx)("option",{value:-1,children:"Billetera virtual"}),(0,o.jsx)("option",{value:-1,children:"Online"})]})]}),(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,o.jsx)("input",{placeholder:"Whatsapp",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,o.jsx)("input",{placeholder:"Placa(Opcional)",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,o.jsx)("p",{className:"dark:text-body-color-dark mb-1 text-base ml-4 mt-4 !leading-relaxed text-body-color sm:text-xl md:text-xl",style:{color:"#3662E3"},children:"Items"}),(0,o.jsxs)("div",{style:{backgroundColor:"white",borderRadius:".5rem",padding:"1rem",margin:"1rem"},children:[(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",paddingBottom:"1rem"},children:[(0,o.jsx)("p",{className:"dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",children:"Nombre"}),(0,o.jsx)("p",{className:"dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",children:"Cantidad"}),(0,o.jsx)("button",{})]}),(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",borderBottom:"1px solid rgba(220, 220, 220, .3)"},children:[(0,o.jsx)("p",{className:"dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",children:"Nombre"}),(0,o.jsx)("p",{className:"dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",children:"6"}),(0,o.jsx)("button",{style:{color:"orange"},children:(0,o.jsx)(d(),{name:"pencil-outline",color:"orange"})})]}),(0,o.jsxs)("div",{style:{paddingTop:".5rem",display:"flex",justifyContent:"space-between"},children:[(0,o.jsx)("p",{className:"dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",children:"Nombre"}),(0,o.jsx)("p",{className:"dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",children:"8"}),(0,o.jsx)("button",{style:{color:"orange"},children:(0,o.jsx)(d(),{name:"pencil-outline",color:"orange"})})]}),(0,o.jsx)("div",{style:{textAlign:"right",width:"100%"},children:(0,o.jsxs)("button",{onClick:()=>a(!t),style:{marginTop:".5rem",color:"grey"},children:[(0,o.jsx)(d(),{name:"add"}),"A\xf1adir"]})})]})]}),(0,o.jsx)("div",{style:{textAlign:"center"},children:(0,o.jsx)("button",{style:{background:"#1366D9",color:"white",padding:".5rem",margin:".5rem",borderRadius:".5rem",fontWeight:"500"},className:"rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80",children:"Enviar solicitud"})})]}),(0,o.jsxs)(i.Z,{closeIcon:(0,o.jsx)(d(),{name:"close"}),styles:{modal:{borderRadius:"1rem",minWidth:"300px",padding:"0rem"},closeIcon:{color:"white !important"},overlay:{backgroundColor:"rgba(220, 217, 217, 0.5)"}},open:t,center:!0,onClose:()=>a(!1),children:[(0,o.jsx)("p",{style:{background:'linear-gradient(89deg, var(--token-dc60c65c-2692-4b09-8d77-49a86f7aedee, rgb(24, 36, 61)) /* {"name":"Azul prinicipal"} */ 0%, var(--token-1632e6e1-d1e5-427f-b435-20cb1e67f695, rgb(54, 98, 227)) /* {"name":"Azul claro"} */ 123.5068681091516%)',width:"100%",padding:"1rem",color:"white"},children:"Nuevo producto"}),(0,o.jsxs)("div",{style:{margin:"2rem"},children:[(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,o.jsx)("input",{placeholder:"Nombre",className:"border-stroke dark:text-body-color-dark dark:shadow-two  rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent",width:"70%"}}),(0,o.jsx)("input",{placeholder:"Cantidad",type:"number",className:"border-stroke dark:text-body-color-dark dark:shadow-two rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent",width:"30%"}})]}),(0,o.jsx)("div",{style:{textAlign:"right"},children:(0,o.jsx)("button",{style:{background:"green",color:"white",padding:".5rem",margin:".5rem",borderRadius:".5rem"},className:"rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80",children:"A\xf1adir"})})]})]})]})}},7190:function(e,r,t){"use strict";var o=t(6705);t(575);var n=t(6807),a=t(955),d=t(1550),i=t.n(d),s=t(4033);r.Z=e=>{var r,t;let{item:d,setCart:l,setAmmountItem:c,ammountItem:u,cart:m}=e,[x,b]=(0,a.useState)(!1),p=(0,s.useRouter)();return(0,o.jsxs)("div",{className:"cardMarketPlace",children:[(0,o.jsx)("div",{className:"contentImage",children:(0,o.jsx)("img",{style:{cursor:"pointer",maxHeight:"200px"},onClick:()=>p.push("/marketplace/item?id="+d._id),src:null==d?void 0:d.image,alt:"Item Image"})}),(0,o.jsx)("div",{className:"card-content",children:(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,o.jsxs)("div",{children:[(0,o.jsxs)("span",{style:{fontSize:"1rem",color:"#3e9c35"},children:[" s/. ",null!==(r=Number(null==d?void 0:d.priceSelling).toFixed(2))&&void 0!==r?r:0]}),(0,o.jsxs)("p",{style:{cursor:"pointer"},onClick:()=>p.push("/marketplace/item?id="+d._id),children:[(null==d?void 0:d.name)+" ","  ",null!==(t=null==d?void 0:d.model)&&void 0!==t?t:""]})]}),(0,o.jsx)("div",{children:(0,o.jsx)(n.Popover,{containerStyle:{backgroundColor:"white",padding:"1rem",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:".5rem"},isOpen:x,positions:["top","bottom","left","right"],content:(0,o.jsxs)("div",{children:[(0,o.jsx)("input",{value:u,onChange:e=>{var r;return c(Number(null==e?void 0:null===(r=e.target)||void 0===r?void 0:r.value))},min:"0",max:null==d?void 0:d.ammount,style:{padding:".5rem",border:"1px solid rgba(0,0,0, 0.1)",width:"100%"},type:"number",placeholder:"Cantidad"}),(0,o.jsx)("br",{}),(0,o.jsx)("button",{onClick:()=>{if(u>0){let e=[...m,{item:null!=d?d:{},ammount:u}];l(e),sessionStorage.setItem("cart",String(JSON.stringify(e))),b(!1)}},style:{marginTop:"1rem",padding:".5rem",textAlign:"center",width:"100%",background:"green",color:"white"},children:"A\xf1adir al carrito"})]}),children:(0,o.jsx)("div",{style:{padding:".3rem",borderRadius:".5rem",color:"#3662E3",fontSize:"1rem",cursor:"pointer",border:"1px solid rgba(0, 0, 0, 0.1)"},onClick:()=>{b(!x),c(0)},children:(0,o.jsx)(i(),{style:{fontSize:"1.5rem"},name:"cart-outline"})})})})]})})]})}},793:function(e,r,t){"use strict";t.d(r,{FM:function(){return n},PX:function(){return o},rM:function(){return a}});let o=["Toyota","Nissan","Hyundai","BMW","Mercedes Benz","Kia","Chevrolet","Mitsubishi","Peugeot","Suzuki","Mazda","Volkswagen","Audi","Jeep","Land Rover","Volvo","Mini","Porsche","Geely","Otro"],n=["Partes de motor","Neumaticos","Otro"],a=["Genuino","Original","Alternativo","Segunda"]},947:function(){},6764:function(){},575:function(){},2744:function(e,r){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e="",r=0;r<arguments.length;r++){var t=arguments[r];t&&(e=a(e,function(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var t in e)o.call(e,t)&&e[t]&&(r=a(r,t));return r}(t)))}return e}function a(e,r){return r?e?e+" "+r:e+r:e}e.exports?(n.default=n,e.exports=n):void 0!==(t=(function(){return n}).apply(r,[]))&&(e.exports=t)}()}}]);