(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2995],{92995:function(e,r,t){Promise.resolve().then(t.bind(t,72325))},72325:function(e,r,t){"use strict";t.r(r);var a=t(57437),o=t(40901),n=t(27009),l=t(81550),d=t.n(l),s=t(2265),i=t(70508);t(22990);var u=t(61396),c=t.n(u),p=t(24033),b=t(42123),g=t(57719),m=t(969),f=t(42105);t(38912),t(82340);var y=t(17483),h=t(39784),x=t(76373);let k=e=>{var r,t;let{user:o,item:n,makeData:l}=e,[d,i]=(0,s.useState)(n.name),[u,c]=(0,s.useState)(null),[p,g]=(0,s.useState)(n.sku),[m,f]=(0,s.useState)(null!==(r=null==n?void 0:n.numberPart)&&void 0!==r?r:"No definido"),[h,x]=(0,s.useState)(null!==(t=null==n?void 0:n.description)&&void 0!==t?t:"No definido"),[k,v]=(0,s.useState)(String(n.ammount)),[w,j]=(0,s.useState)(n.price),[C,S]=(0,s.useState)(null==n?void 0:n.priceSelling),[N,P]=(0,s.useState)(n.brand),[R,E]=(0,s.useState)(n.categorie),[z,B]=(0,s.useState)(null),[O,A]=(0,s.useState)(n.model),[D,_]=(0,s.useState)(n.type),L=async()=>{let e=null===u?n.image:u;n.name=d,n.image=e,n.sku=p,n.ammount=String(k),n.description=h,n.numberPart=m,n.price=w,n.priceSelling=C,n.brand=String(N),n.categorie=R,n.inMP="on"===z,n.model=O,n.type=D,n._id=String(n._id);let r=await (0,b.Dk)(n);r?(y.fn.success("Editaste un item.","Success"),await l(!0)):y.fn.error("Ocurrio un error","Error")},I=async e=>{let r=e.target.files[0],t=new FileReader;t.readAsDataURL(r),t.onload=()=>{c(t.result)},t.onerror=e=>{console.log(e)}};return(0,a.jsxs)("div",{children:[(0,a.jsx)("p",{style:{background:'linear-gradient(89deg, var(--token-dc60c65c-2692-4b09-8d77-49a86f7aedee, rgb(24, 36, 61)) /* {"name":"Azul prinicipal"} */ 0%, var(--token-1632e6e1-d1e5-427f-b435-20cb1e67f695, rgb(54, 98, 227)) /* {"name":"Azul claro"} */ 123.5068681091516%)',width:"100%",padding:"1rem",color:"white"},children:"Editar producto"}),(0,a.jsxs)("div",{style:{margin:"2rem"},children:[(0,a.jsxs)("div",{style:{width:"100%",textAlign:"center"},children:[(0,a.jsx)("div",{style:{marginTop:"1rem"}}),(0,a.jsx)("label",{htmlFor:"image",style:{width:"100%",padding:"4rem",margin:"0px",backgroundSize:"100%",backgroundImage:null!==u?u:"rgba(0,0,0, 0.2)",cursor:"pointer"},children:(0,a.jsx)("img",{height:"400px",src:null===u?n.image:u})}),(0,a.jsx)("input",{accept:"image",id:"image",onChange:I,type:"file",placeholder:"Subir archivo",style:{visibility:"hidden",display:"none"}}),(0,a.jsx)("div",{style:{marginTop:"4rem"},children:(0,a.jsx)("input",{value:d,onChange:e=>i(e.target.value),placeholder:"Nombre/Descripci\xf3n de producto",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})}),(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)("input",{value:p,onChange:e=>g(e.target.value),placeholder:"SKU",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,a.jsx)("input",{value:k,onChange:e=>v(e.target.value),placeholder:"Cantidad",type:"number",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)("input",{placeholder:"Marca",value:N,onChange:e=>P(e.target.value),className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,a.jsx)("input",{value:O,onChange:e=>A(e.target.value),placeholder:"Modelo de auto",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)("input",{value:w,onChange:e=>{var r;j(e.target.value),S((Number(e.target.value)+(Number(r=Number(e.target.value))-Number(82)/100*Number(r))).toFixed(2))},placeholder:"Precio(ej 0.68)",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,a.jsx)("input",{disabled:!0,value:C,onChange:e=>S(e.target.value),placeholder:"Precio de venta sin igv(ej 1.68)",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,a.jsx)("input",{value:m,onChange:e=>f(e.target.value),placeholder:"N\xfamero de parte",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,a.jsx)("input",{value:h,onChange:e=>x(e.target.value),placeholder:"Descripci\xf3n",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,a.jsx)("div",{style:{width:"100%",textAlign:"left",margin:".5rem",marginBottom:"0rem"},children:(0,a.jsxs)("p",{style:{fontSize:".9rem",color:"grey"},children:["Actual: ",!0===n.inMP?"Publicado":"No esta publicado"]})}),(0,a.jsxs)("div",{style:{display:"flex",margin:".5rem",marginTop:"0rem"},children:[(0,a.jsx)("input",{value:z,onChange:e=>{B(e.target.value),console.log(e.target.value)},type:"checkbox",style:{marginRight:".5rem"}}),(0,a.jsx)("p",{children:"Publicar en Marketplace"})]})]}),(0,a.jsx)("div",{style:{width:"100%",textAlign:"right"},children:(0,a.jsx)("button",{onClick:()=>L(),className:"inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5",style:{color:"#3662E3",background:"transparent",fontWeight:"400",fontSize:"1rem"},children:"Editar"})})]})]})},v=e=>{var r,t;let{user:o,inventoryData:n,realInventoryData:l,setInventoryRealData:u,setInventory:g}=e,x=(0,m.h)({nodes:[...null!=n?n:[]]},{state:{page:0,size:12}}),v=async e=>{let r=await (0,b.$v)();null==r||r.map((e,t)=>{var a,o,n;r[t].id=t,r[t].sellings=null!==(n=null===(o=r[t])||void 0===o?void 0:null===(a=o.sellings)||void 0===a?void 0:a.length)&&void 0!==n?n:0}),g(null!==r?r:[]),u(r),e&&(E(!1),P(!1))};(0,s.useEffect)(()=>{v(!1)},[]);let[w,j]=(0,s.useState)(""),[C,S]=(0,s.useState)(!1),[N,P]=(0,s.useState)(!1),[R,E]=(0,s.useState)(!1),[z,B]=(0,s.useState)(""),[O,A]=(0,s.useState)(""),[D,_]=(0,s.useState)(null),[L,I]=(0,s.useState)(null),[M,T]=(0,s.useState)(null),[F,U]=(0,s.useState)(null),[W,Z]=(0,s.useState)(null),[q,V]=(0,s.useState)(null),[K,G]=(0,s.useState)(null),[J,$]=(0,s.useState)(null),H=(0,p.useRouter)(),Q=[{label:"SKU",renderCell:e=>e.sku},{label:"Nombre Producto",renderCell:e=>e.name},{label:"Cantidad",renderCell:e=>(0,a.jsx)("p",{style:{color:e.ammount<4?"tomato":"black"},children:e.ammount})},{label:"Ventas",renderCell:e=>e.sellings},{label:"Precio sin igv",renderCell:e=>"s/."+Number(e.price).toFixed(2)},{label:"Precio venta",renderCell:e=>"s/."+Number(e.priceSelling).toFixed(2)},{label:"",pinRigth:!0,renderCell:e=>(0,a.jsxs)("div",{style:{display:"flex",fontSize:"1.2rem"},children:[(0,a.jsx)("div",{style:{color:"tomato",marginRight:".5rem",cursor:"pointer"},onClick:()=>{j(e._id),S(!0)},children:(0,a.jsx)(d(),{name:"trash-outline"})}),(0,a.jsx)("div",{onClick:()=>{},style:{cursor:"pointer",marginRight:".5rem"},children:(0,a.jsx)("span",{style:{fontSize:"1rem",color:"#3662E3",marginLeft:".5rem",marginRight:".5rem"},onClick:()=>H.push("/marketplace/item?id="+(null==e?void 0:e._id)),children:(0,a.jsx)(d(),{name:"eye-outline"})})}),(0,a.jsx)("div",{onClick:()=>{j(e._id),P(!0)},style:{color:"orange",cursor:"pointer"},children:(0,a.jsx)(d(),{name:"pencil-outline"})})]})}],X=async e=>{let r=e.target.files[0],t=new FileReader;t.readAsDataURL(r),t.onload=()=>{_(t.result)},t.onerror=e=>{console.log(e)}},Y=async()=>{await (0,b.qU)(w)?(S(!1),y.fn.success("Eliminaste el item","Success"),window.location.reload()):y.fn.error("Ocurrio un error","Error")},[ee,er]=(0,s.useState)(null),[et,ea]=(0,s.useState)(null),eo=async()=>{let e={name:z,image:D,sku:L,ammount:M,price:F,priceSelling:W,brand:q,numberPart:ee,description:et,categorie:0,inMP:"on"===K,model:J,stars:0,type:0,owner_id:o._id};if(""!==z&&null!==D&&null!==L&&null!==M&&null!==F&&null!==q&&null!==W&&null!==J){let r=await (0,b.Rd)(e);r?(y.fn.success("A\xf1adiste un item.","Cargado"),window.location.reload()):y.fn.error("Ocurrio un error","Error")}else y.fn.error("Completa el formulario.","Error")},en=async e=>{let r=e.target.files[0];(0,h.ExcelRenderer)(r,async(e,r)=>{if(e)console.log(e);else{var t;let e=null===(t=r.rows)||void 0===t?void 0:t.map((e,r)=>{var t,a,n;return{sku:String(e[0]),name:String(e[2]),ammount:String(e[3]),image:null!==(t=String(e[6]))&&void 0!==t?t:" ",price:null!==(a=String(Number(e[4]).toFixed(2)))&&void 0!==a?a:"",priceSelling:null!==(n=String(Number(e[5]).toFixed(2)))&&void 0!==n?n:"",brand:String(e[1]),categorie:0,inMP:!0,description:"undefined"===String(e[8])?" ":String(e[8]),numberPart:String(e[0]),model:"undefined"===String(e[7])?" ":String(e[7]),stars:0,type:0,owner_id:o._id}});e.splice(0,1),await (0,b.RZ)(e)?(y.fn.success("Logramos cargar tu inventario con exito, recuerda editarlo correctamente","Cargado"),window.location.reload()):y.fn.error("Ocurrio un error cargando tu CSV, recorda que tu csv debe tener los encabezados SKU, description y cantidad","Error")}})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{style:{width:"100%",display:"flex",justifyContent:"space-between"},children:[(0,a.jsxs)("h1",{style:{marginBottom:"1rem",marginTop:".5rem",fontSize:"1rem",fontWeight:"500"},children:["Productos en MarketPlace ",(0,a.jsxs)(c(),{target:"_blank",style:{fontSize:"1rem",color:"#3662E3",marginLeft:".5rem"},href:"/marketplace/shop?id="+(null==o?void 0:o._id),children:["Mi URL",(0,a.jsx)(d(),{name:"open-outline"})]})]}),(0,a.jsxs)("div",{style:{display:"flex"},children:[(0,a.jsx)("button",{className:"buttonsWithouthPadding",onClick:()=>E(!0),style:{fontSize:".8rem",borderRadius:".5rem",padding:".2rem",paddingLeft:"1rem",paddingRight:"1rem",marginRight:"1rem",backgroundColor:"#1366D9",color:"white"},children:"Cargar productos"}),(0,a.jsx)("button",{className:"buttonsWithouthPadding",style:{fontSize:".8rem",border:"1px solid grey",borderRadius:".5rem",padding:".2rem",paddingLeft:"1rem",paddingRight:"1rem",backgroundColor:"transparent",color:"grey"},children:"Descargar todo"})]})]}),(0,a.jsxs)("div",{className:"input-search",style:{marginTop:"1rem",marginBottom:"1rem"},children:[(0,a.jsx)("div",{className:"iconinput",children:(0,a.jsx)(d(),{name:"search-outline"})}),(0,a.jsx)("input",{placeholder:"Busca por nombre de producto",type:"text",value:O,onChange:e=>{A(e.target.value)}}),(0,a.jsx)("button",{children:"Buscar"})]}),(0,a.jsx)("div",{style:{background:"white"},children:(0,a.jsx)(f._,{layout:{custom:!0,horizontalScroll:!0},pagination:x,columns:Q,data:{nodes:null!==(t=null==n?void 0:n.filter(e=>e.name.toLowerCase().includes(O.toLowerCase())||e.sku.toLowerCase().includes(O.toLowerCase())))&&void 0!==t?t:[]}})}),(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsxs)("span",{style:{margin:".5rem"},children:["Paginas: ",x.state.getTotalPages(null!=n?n:[])]}),(0,a.jsxs)("span",{children:["Actual:","  ",x.state.getPages(null!=n?n:[]).map((e,r)=>(0,a.jsxs)("button",{type:"button",style:{fontWeight:x.state.page===r?"bold":"normal",color:x.state.page===r?"#3662E3":"black",margin:".5rem"},onClick:()=>x.fns.onSetPage(r),children:[r+1," ","  "]},r))]})]}),(0,a.jsxs)(i.Z,{closeIcon:(0,a.jsx)(d(),{name:"close"}),styles:{modal:{borderRadius:"1rem",minWidth:"300px",padding:"0rem"},closeIcon:{color:"white !important"},overlay:{backgroundColor:"rgba(220, 217, 217, 0.5)"}},open:R,center:!0,onClose:()=>E(!1),children:[(0,a.jsx)("p",{style:{background:'linear-gradient(89deg, var(--token-dc60c65c-2692-4b09-8d77-49a86f7aedee, rgb(24, 36, 61)) /* {"name":"Azul prinicipal"} */ 0%, var(--token-1632e6e1-d1e5-427f-b435-20cb1e67f695, rgb(54, 98, 227)) /* {"name":"Azul claro"} */ 123.5068681091516%)',width:"100%",padding:"1rem",color:"white"},children:"Cargar Inventario"}),(0,a.jsxs)("div",{style:{margin:"2rem"},children:[(0,a.jsxs)("p",{style:{color:"grey"},children:["Carga tu inventario desde los siguientes formatos","(csv, xlsx)",": "]}),(0,a.jsx)("input",{type:"file",id:"fileUpload",onChange:en}),(0,a.jsxs)("div",{style:{width:"100%",textAlign:"center"},children:[(0,a.jsx)("div",{style:{width:"1px",height:"53px",background:"rgba(10, 10, 10, 0.2)",marginRight:"auto",marginLeft:"auto"}}),(0,a.jsx)("p",{style:{color:"grey"},children:" o cargalo manualmente"}),(0,a.jsx)("div",{style:{marginTop:"2rem"}}),(0,a.jsx)("label",{htmlFor:"image",style:{width:"100%",padding:"4rem",margin:"0px",backgroundSize:"100%",backgroundImage:null!==D?D:"rgba(0,0,0, 0.2)",cursor:"pointer"},children:null===D?"Subir imagen":(0,a.jsx)("img",{style:{maxHeight:"400px !important"},src:D})}),(0,a.jsx)("input",{accept:"image",id:"image",onChange:X,type:"file",placeholder:"Subir archivo",style:{visibility:"hidden",display:"none"}}),(0,a.jsx)("div",{style:{marginTop:"4rem"},children:(0,a.jsx)("input",{value:z,onChange:e=>B(e.target.value),placeholder:"Nombre/Descripci\xf3n de producto",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})}),(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)("input",{value:L,onChange:e=>I(e.target.value),placeholder:"SKU/id",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,a.jsx)("input",{value:M,onChange:e=>T(e.target.value),placeholder:"Cantidad",type:"number",className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)("input",{placeholder:"Marca",value:q,onChange:e=>V(e.target.value),className:"border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,a.jsx)("input",{value:ee,onChange:e=>er(e.target.value),placeholder:"N\xfamero de parte(Ej: L33D15241)",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,a.jsx)("input",{value:F,onChange:e=>{var r;U(e.target.value),Z((Number(e.target.value)+(Number(r=Number(e.target.value))-Number(82)/100*Number(r))).toFixed(2))},placeholder:"Precio sin IGV(ej 0.68)",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,a.jsx)("input",{value:W,disabled:!0,placeholder:"Precio venta con IGV",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}})]}),(0,a.jsx)("input",{value:J,onChange:e=>$(e.target.value),placeholder:"Modelo de auto(Ej: Suzuki Vitara del 2006 al 2018)",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,a.jsx)("input",{value:et,onChange:e=>ea(e.target.value),placeholder:"Opcional",className:"border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",style:{background:"transparent"}}),(0,a.jsxs)("div",{style:{display:"flex",margin:".5rem"},children:[(0,a.jsx)("input",{value:K,onChange:e=>G(e.target.value),type:"checkbox",style:{marginRight:".5rem"}}),(0,a.jsx)("p",{children:"Publicar en marketplace"})]})]}),(0,a.jsx)("div",{style:{width:"100%",textAlign:"right"},children:(0,a.jsx)("button",{onClick:()=>eo(),className:"inline-block rounded-sm bg-black px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-black/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5",style:{color:"#3662E3",background:"transparent",fontWeight:"400",fontSize:"1rem"},children:"A\xf1adir"})})]})]}),(0,a.jsx)(i.Z,{closeIcon:(0,a.jsx)(d(),{name:"close"}),styles:{modal:{borderRadius:"1rem",minWidth:"300px",padding:"0rem"},closeIcon:{color:"white !important"},overlay:{backgroundColor:"rgba(220, 217, 217, 0.5)"}},open:N,center:!0,onClose:()=>P(!1),children:(0,a.jsx)(k,{user:o,item:null==l?void 0:l.find(e=>String(e._id)===w),makeData:v})}),(0,a.jsxs)(i.Z,{closeIcon:(0,a.jsx)(d(),{name:"close"}),styles:{modal:{borderRadius:"1rem",minWidth:"300px",padding:"0rem"},closeIcon:{color:"white !important"},overlay:{backgroundColor:"rgba(220, 217, 217, 0.5)"}},open:C,center:!0,onClose:()=>S(!1),children:[(0,a.jsx)("p",{style:{background:'linear-gradient(89deg, var(--token-dc60c65c-2692-4b09-8d77-49a86f7aedee, rgb(24, 36, 61)) /* {"name":"Azul prinicipal"} */ 0%, var(--token-1632e6e1-d1e5-427f-b435-20cb1e67f695, rgb(54, 98, 227)) /* {"name":"Azul claro"} */ 123.5068681091516%)',width:"100%",padding:"1rem",color:"white"},children:"Eliminar producto"}),(0,a.jsxs)("div",{style:{marginTop:"2rem"},children:[(0,a.jsxs)("p",{children:[" \xbfEstas seguro que quieres eliminar el item: ",null==l?void 0:null===(r=l.find(e=>String(e._id)===w))||void 0===r?void 0:r.name," ?"]}),(0,a.jsxs)("div",{style:{display:"flex",padding:"2rem",textAlign:"center"},children:[(0,a.jsx)("button",{onClick:()=>S(!1),style:{width:"100%",fontSize:"1rem",borderRadius:".5rem",padding:".2rem",paddingLeft:"1rem",paddingRight:"1rem",marginRight:"1rem",backgroundColor:"#1366D9",color:"white"},children:"Cancelar"}),(0,a.jsx)("button",{onClick:()=>{Y()},style:{width:"100%",fontSize:"1rem",borderRadius:".5rem",padding:".2rem",paddingLeft:"1rem",paddingRight:"1rem",marginRight:"1rem",backgroundColor:"tomato",color:"white"},children:"Eliminar"})]})]})]})]})};r.default=()=>{let[e,r]=(0,s.useState)(),[t,l]=(0,s.useState)(null),[i,u]=(0,s.useState)([]),c=(0,p.useRouter)(),m=async e=>{let t=await (0,b.$v)();await r(t),null==t||t.map((e,r)=>{var a,o,n;t[r].id=r,t[r].sellings=null!==(n=null===(o=t[r])||void 0===o?void 0:null===(a=o.sellings)||void 0===a?void 0:a.length)&&void 0!==n?n:0}),l(null!==t?t:[]),r(t)},[f,y]=(0,s.useState)(),h=async()=>{let e=await (0,g.PR)();(void 0===e||null===f)&&c.push("/"),(null==e?void 0:e.type)==="workshop"&&c.push("/quotes"),y(e);let r=await (0,x.AU)(null==e?void 0:e._id);u(r),await m(!0)};return(0,s.useEffect)(()=>{h()},[]),(0,a.jsx)(a.Fragment,{children:null===t?(0,a.jsx)(d(),{name:"chevron-collapse-outline",className:"rotateItem",color:"#1366D9",style:{fontSize:"1.5rem",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}):(0,a.jsxs)("div",{children:[(0,a.jsx)(n.Z,{user:f,route:"inventory",frameContennt:(0,a.jsx)("div",{className:"resume",style:{overflow:"hidden"},children:(0,a.jsxs)("div",{children:[(0,a.jsx)(o.ZP,{items:e,orders:i,user:f}),(0,a.jsx)("div",{style:{padding:"1rem"},children:(0,a.jsx)(v,{user:f,inventoryData:t,realInventoryData:e,setInventoryRealData:r,setInventory:l})})]})})}),";"]})})}},38912:function(){},82340:function(){},61396:function(e,r,t){e.exports=t(46685)},969:function(e,r,t){"use strict";t.d(r,{h:function(){return m}});var a=t(40889),o=t(87121),n=t(2265),l=function(e,r,t){n.useEffect(function(){r&&(r.current[e]={state:t})},[r,e,t])},d=function(e,r,t,o,l){var d=n.useReducer(e,r),s=(0,a.s)(d,2),i=s[0],u=s[1],c=n.useRef(null),p=n.useRef(null);return n.useEffect(function(){p.current&&(o.forEach(function(e){return e(p.current,c.current,l?l.current:void 0)}),p.current=null,c.current=null)},[l,o,i]),[i,function(r){t.forEach(function(e){return e(r,i,l?l.current:void 0)});var a=e(i,r);c.current=a,p.current=r,u(r)}]},s=function(e,r){return JSON.stringify(e)===JSON.stringify(r)},i=function(e,r,t){var a=n.useRef(e),o=n.useRef(e);n.useEffect(function(){s(r,o.current)&&(s(e,a.current)||s(e,r)||t()),a.current=e,o.current=r},[r,t,e])};function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),t.push.apply(t,a)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach(function(r){(0,o.d)(e,r,t[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))})}return e}var p=function(e,r){if("SET"===r.type)return c(c({},e),r.payload);throw Error()},b={page:0,size:10},g={isServer:!1},m=function(e,r,t,o){var s,u=c(c({},b),null!==(s=null==r?void 0:r.state)&&void 0!==s?s:{}),m=d(p,u,[],[null!=r&&r.onChange?r.onChange:function(){}],o),f=(0,a.s)(m,2),y=f[0],h=f[1],x=n.useCallback(function(e){return h({type:"SET",payload:{page:e}})},[h]),k=n.useCallback(function(e){return h({type:"SET",payload:{size:e,page:0}})},[h]);i(u,y,function(){return h({type:"SET",payload:u})});var v=n.useCallback(function(e){return Math.ceil(e.length/y.size)},[y.size]),w=n.useCallback(function(e){return e.reduce(function(e,r,t){var a=Math.floor(t/y.size);return e[a]||(e[a]=[]),e[a].push(r),e},[])},[y.size]),j=n.useCallback(function(e){var r=y.page*y.size+1,t=y.page*y.size+y.size;return{start:r,end:t>e.length?e.length:t}},[y.page,y.size]),C=n.useMemo(function(){return{onSetPage:x,onSetSize:k}},[x,k]);l("pagination",o,y);var S=c(c({},g),null!=t?t:{}),N=c(c({},y),{},{getTotalPages:v,getPages:w,getPageBoundaries:j});return{state:N,fns:C,options:S,modifier:function(e){return S.isServer?e:N.getPages(e)[y.page]||[]}}}}}]);