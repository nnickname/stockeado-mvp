(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8299],{58858:function(e,t,r){"use strict";r.r(t);var i=r(57437),s=r(32300),n=r(21948),l=r(70793);r(20947);var a=r(27190),o=r(2265),d=r(72131),c=r(81550),p=r.n(c),h=r(46807),m=r(22071),x=r(63139);t.default=()=>{let[e,t]=(0,o.useState)(!1),[r,c]=(0,o.useState)(!1),[g,u]=(0,o.useState)([]),[j,y]=(0,o.useState)([]),[v,b]=(0,o.useState)(null),[f,k]=(0,o.useState)(0),C=async()=>{let e=await (0,d.Kb)();null!==e&&b(e),null!==e&&y(e),X(!0)},S=(e,t)=>{t?b(j.filter(t=>t.brand===e)):b(j)},N=(e,t)=>{t?b(j.filter(t=>Number(t.type===e))):b(j)},T=(e,t)=>{t?b(j.filter(t=>Number(t.categorie===e))):b(j)};(0,o.useEffect)(()=>{C();let e=JSON.parse(sessionStorage.getItem("cart"));void 0!==e&&u(null!=e?e:[])},[]);let[w,R]=(0,o.useState)(""),P=async()=>{if((null==w?void 0:w.length)>1){let e=await (0,d.V_)(w);b(null!=e?e:[])}else b(j)},[I,M]=(0,o.useState)(!1),[z,O]=(0,o.useState)(!1),[B,_]=(0,o.useState)(!1),[Z,X]=(0,o.useState)(!1),[A,D]=(0,o.useState)(1),[E,F]=(0,o.useState)(!1);return(0,i.jsx)("div",{children:null===v?(0,i.jsx)(p(),{name:"chevron-collapse-outline",className:"rotateItem",color:"#1366D9",style:{fontSize:"1.5rem",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}):(0,i.jsxs)("div",{children:[(0,i.jsx)(s.Z,{cartItems:g,setCart:u}),(0,i.jsx)(n.Z,{}),(0,i.jsxs)("div",{className:"marketplace displayBlockResponsive",children:[(0,i.jsxs)("div",{className:"sidebarM hideResponsive",children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{children:(0,i.jsx)("input",{style:{marginTop:"auto",width:"100%",padding:"1.1rem",height:"40px",border:"1px solid grey"},onChange:e=>R(e.target.value),type:"text",name:"email",placeholder:"N\xfamero de parte",value:w})}),(0,i.jsx)("div",{children:(0,i.jsx)("button",{style:{height:"40px",paddingLeft:"1rem",paddingRight:"1rem",border:"1px solid grey"},onClick:()=>P(),children:"Buscar"})})]}),(0,i.jsx)("h1",{style:{marginTop:"1rem"},children:"Categorias"}),l.FM.map((e,t)=>(0,i.jsxs)("div",{style:{display:"flex",marginTop:".4rem"},children:[(0,i.jsx)("input",{onChange:e=>T(t,e.target.checked),type:"checkbox",style:{marginRight:".5rem"}}),(0,i.jsx)("p",{children:e})]},t)),(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem",width:"100%",height:"1px",background:"rgba(0,0,0, 0.2)"}}),(0,i.jsx)("h1",{children:"Tipo de pieza"}),l.rM.map((e,t)=>(0,i.jsxs)("div",{style:{display:"flex",marginTop:".4rem"},children:[(0,i.jsx)("input",{onChange:e=>N(t,e.target.checked),type:"checkbox",style:{marginRight:".5rem"}}),(0,i.jsx)("p",{children:e})]},t)),(0,i.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem",width:"100%",height:"1px",background:"rgba(0,0,0, 0.2)"}}),(0,i.jsx)("h1",{children:"Marcas"}),(0,i.jsx)("form",{children:l.PX.map((e,t)=>(0,i.jsxs)("div",{style:{display:"flex",marginTop:".4rem"},children:[(0,i.jsx)("input",{name:"colors",onChange:e=>S(l.PX[t],e.target.checked),type:"checkbox",id:"colors",style:{marginRight:".5rem"}}),(0,i.jsx)("p",{children:e})]},t))})]}),(0,i.jsxs)("div",{className:"sidebarM showResponsive",style:{display:"none"},children:[(0,i.jsxs)("div",{style:{display:"flex"},children:[(0,i.jsx)("div",{children:(0,i.jsx)("input",{style:{marginTop:"auto",width:"100%",padding:"1.1rem",height:"40px",border:"1px solid grey"},onChange:e=>R(e.target.value),type:"text",name:"email",placeholder:"N\xfamero de parte",value:w})}),(0,i.jsx)("div",{children:(0,i.jsx)("button",{style:{height:"40px",paddingLeft:"1rem",paddingRight:"1rem",border:"1px solid grey"},onClick:()=>P(),children:"Buscar"})})]}),(0,i.jsxs)("div",{className:"displayFlexResponsive",style:{marginTop:"2rem"},children:[(0,i.jsx)(h.Popover,{onClickOutside:()=>O(!1),containerStyle:{backgroundColor:"white",padding:"1.3rem",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:".5rem"},isOpen:z,positions:["bottom","top","left","right"],content:(0,i.jsx)("form",{children:l.FM.map((e,t)=>(0,i.jsxs)("div",{onClick:()=>O(!1),style:{cursor:"pointer",display:"flex",marginTop:".4rem"},children:[(0,i.jsx)("input",{onChange:e=>T(t,e.target.checked),type:"checkbox",style:{marginRight:".5rem"}}),(0,i.jsx)("p",{children:e})]},t))}),children:(0,i.jsx)("h1",{style:{cursor:"pointer"},onClick:()=>O(!0),children:"Categorias"})}),(0,i.jsx)(h.Popover,{onClickOutside:()=>_(!1),containerStyle:{backgroundColor:"white",padding:"1.3rem",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:".5rem"},isOpen:B,positions:["bottom","top","left","right"],content:(0,i.jsx)("form",{children:l.rM.map((e,t)=>(0,i.jsxs)("div",{onClick:()=>_(!1),style:{cursor:"pointer",display:"flex",marginTop:".4rem"},children:[(0,i.jsx)("input",{onChange:e=>N(t,e.target.checked),type:"checkbox",style:{marginRight:".5rem"}}),(0,i.jsx)("p",{children:e})]},t))}),children:(0,i.jsx)("h1",{style:{cursor:"pointer"},onClick:()=>_(!0),children:"Tipo de pieza"})}),(0,i.jsx)(h.Popover,{onClickOutside:()=>M(!1),containerStyle:{backgroundColor:"white",padding:"1.3rem",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:".5rem"},isOpen:I,positions:["bottom","top","left","right"],content:(0,i.jsx)("form",{children:l.PX.map((e,t)=>(0,i.jsxs)("div",{onClick:()=>M(!1),style:{cursor:"pointer",display:"flex",marginTop:".4rem"},children:[(0,i.jsx)("input",{name:"colors",onChange:e=>S(l.PX[t],e.target.checked),type:"checkbox",id:"colors",style:{marginRight:".5rem"}}),(0,i.jsx)("p",{children:e})]},t))}),children:(0,i.jsx)("h1",{style:{cursor:"pointer"},onClick:()=>M(!0),children:"Marcas"})})]})]}),(0,i.jsxs)("div",{className:"contentM",children:[(0,i.jsx)("div",{style:{marginTop:"0rem",padding:".6rem",width:"100%",borderRadius:".5rem",border:"1px solid rgba(0, 0, 0, 0.2)"},children:(0,i.jsxs)("p",{children:["Se encontraron ",(0,i.jsxs)("span",{style:{fontWeight:"700"},children:["+",null==v?void 0:v.length," productos"]})]})}),!0===E?(0,i.jsx)("div",{style:{width:"100%",textAlign:"center"},children:(0,i.jsx)(p(),{name:"chevron-collapse-outline",className:"rotateItem",color:"#1366D9",style:{fontSize:"1.5rem",marginTop:"5rem"}})}):(0,i.jsx)("div",{children:(null==v?void 0:v.length)>0?(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:"gridItems",children:null==v?void 0:v.slice(18*A-18,18*A).map((e,t)=>(0,i.jsx)(a.Z,{item:e,setCart:u,setAmmountItem:k,ammountItem:f,cart:g},t))}),(0,i.jsx)(m.Z,{setCurrentPage:e=>{D(e),window.scrollTo(0,0),F(!0),setTimeout(()=>{F(!1)},2500)},currentPage:A,postPerPage:18,postData:null!=v?v:[]})]}):(0,i.jsx)("div",{children:" "})})]})]}),(0,i.jsx)(x.default,{})]})})}},21948:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var i=r(57437);r(56764);var s=r(2265),n=()=>{let[e,t]=(0,s.useState)(!1);return(0,i.jsx)("div",{children:(0,i.jsx)("div",{className:"background",style:{backgroundImage:"url(".concat("/_next/static/media/background.7d2b71fd.jpeg",")")},children:(0,i.jsxs)("div",{style:{zIndex:99,paddingBottom:"2rem"},children:[(0,i.jsx)("h1",{children:" \xbfNo encuentras lo que necesitas?"}),(0,i.jsx)("p",{style:{marginBottom:"4rem"},children:"Ingresa una solicitud de cotizaci\xf3n y recibe ofertas personalizadas."}),(0,i.jsx)("a",{href:"https://api.whatsapp.com/send?phone=+51941531016&text=\xa1Hola! Necesito una cotizaci\xf3n. Marca, modelo y a\xf1o del vehiculo: Placa: Producto: Original/Alternativo:",target:"_blank",onClick:()=>t(!0),children:"Ingresar solicitud"})]})})})}},22990:function(){}}]);