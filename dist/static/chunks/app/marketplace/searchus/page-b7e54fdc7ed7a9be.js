(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2011],{8482:function(e,r,i){Promise.resolve().then(i.bind(i,9363)),Promise.resolve().then(i.t.bind(i,2990,23))},9363:function(e,r,i){"use strict";i.r(r);var t=i(6705),s=i(2300);i(2990);var n=i(1948),l=i(793);i(947);var o=i(955),a=i(4033),d=i(2131),c=i(7190),p=i(6807),h=i(1550),m=i.n(h),x=i(2071),g=i(2725);r.default=()=>{var e;let[r,i]=(0,o.useState)([]),[h,u]=(0,o.useState)(null),[j,y]=(0,o.useState)([]);(0,a.useRouter)();let v=(0,a.useSearchParams)(),b=v.get("name"),[f,k]=(0,o.useState)(0),C=async()=>{if(null!==b&&(null==b?void 0:b.length)>3){let e=await (0,d.V_)(b);null!==e&&u(null!=e?e:[]),null!==e&&i(e)}},R=(e,i)=>{i&&u(r.filter(r=>Number(r.brand===e)))},S=(e,i)=>{i&&u(r.filter(r=>Number(r.type===e)))},N=(e,i)=>{i&&u(r.filter(r=>Number(r.categorie===e)))};(0,o.useEffect)(()=>{let e=JSON.parse(sessionStorage.getItem("cart"));void 0!==e&&y(null!=e?e:[]),C()},[b]);let[T,w]=(0,o.useState)(""),P=async()=>{if((null==T?void 0:T.length)>1){let e=await (0,d.V_)(T);u(null!=e?e:[])}else u(null!=r?r:[])},[M,O]=(0,o.useState)(!1),[_,B]=(0,o.useState)(!1),[I,E]=(0,o.useState)(!1),[Z,z]=(0,o.useState)(1);return(0,t.jsx)("div",{children:null===h?(0,t.jsx)(m(),{name:"chevron-collapse-outline",className:"rotateItem",color:"#1366D9",style:{fontSize:"1.5rem",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}):(0,t.jsxs)("div",{children:[(0,t.jsx)(s.Z,{cartItems:j,setCart:y}),(0,t.jsx)(n.Z,{}),(0,t.jsxs)("div",{className:"marketplace displayBlockResponsive",children:[(0,t.jsxs)("div",{className:"sidebarM hideResponsive",children:[(0,t.jsxs)("div",{style:{display:"flex"},children:[(0,t.jsx)("div",{children:(0,t.jsx)("input",{style:{marginTop:"auto",width:"100%",padding:"1.1rem",height:"40px",border:"1px solid grey"},onChange:e=>w(e.target.value),type:"text",name:"email",placeholder:"Buscar por n\xfamero de parte",value:null!=T?T:""})}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{style:{height:"40px",paddingLeft:"1rem",paddingRight:"1rem",border:"1px solid grey"},onClick:()=>P(),children:"Buscar"})})]}),(0,t.jsx)("h1",{style:{marginTop:"1rem"},children:"Categorias"}),l.FM.map((e,r)=>(0,t.jsxs)("div",{style:{display:"flex",marginTop:".4rem"},children:[(0,t.jsx)("input",{onChange:e=>N(r,e.target.checked),type:"checkbox",style:{marginRight:".5rem"}}),(0,t.jsx)("p",{children:e})]},r)),(0,t.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem",width:"100%",height:"1px",background:"rgba(0,0,0, 0.2)"}}),(0,t.jsx)("h1",{children:"Tipo de pieza"}),l.rM.map((e,r)=>(0,t.jsxs)("div",{style:{display:"flex",marginTop:".4rem"},children:[(0,t.jsx)("input",{onChange:e=>S(r,e.target.checked),type:"checkbox",style:{marginRight:".5rem"}}),(0,t.jsx)("p",{children:e})]},r)),(0,t.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem",width:"100%",height:"1px",background:"rgba(0,0,0, 0.2)"}}),(0,t.jsx)("h1",{children:"Marcas"}),(0,t.jsx)("form",{children:l.PX.map((e,r)=>(0,t.jsxs)("div",{style:{display:"flex",marginTop:".4rem"},children:[(0,t.jsx)("input",{name:"colors",onChange:e=>R(r,e.target.checked),type:"checkbox",id:"colors",style:{marginRight:".5rem"}}),(0,t.jsx)("p",{children:e})]},r))})]}),(0,t.jsxs)("div",{className:"sidebarM showResponsive",style:{display:"none"},children:[(0,t.jsxs)("div",{style:{display:"flex"},children:[(0,t.jsx)("div",{children:(0,t.jsx)("input",{style:{marginTop:"auto",width:"100%",padding:"1.1rem",height:"40px",border:"1px solid grey"},onChange:e=>w(e.target.value),type:"text",name:"email",placeholder:"N\xfamero de parte",value:null!=T?T:""})}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{style:{height:"40px",paddingLeft:"1rem",paddingRight:"1rem",border:"1px solid grey"},onClick:()=>P(),children:"Buscar"})})]}),(0,t.jsxs)("div",{className:"displayFlexResponsive",style:{marginTop:"2rem"},children:[(0,t.jsx)(p.Popover,{onClickOutside:()=>B(!1),containerStyle:{backgroundColor:"white",padding:"1.3rem",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:".5rem"},isOpen:_,positions:["bottom","top","left","right"],content:(0,t.jsx)("form",{children:l.FM.map((e,r)=>(0,t.jsxs)("div",{onClick:()=>B(!1),style:{cursor:"pointer",display:"flex",marginTop:".4rem"},children:[(0,t.jsx)("input",{onChange:e=>N(r,e.target.checked),type:"checkbox",style:{marginRight:".5rem"}}),(0,t.jsx)("p",{children:e})]},r))}),children:(0,t.jsx)("h1",{style:{cursor:"pointer"},onClick:()=>B(!0),children:"Categorias"})}),(0,t.jsx)(p.Popover,{onClickOutside:()=>E(!1),containerStyle:{backgroundColor:"white",padding:"1.3rem",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:".5rem"},isOpen:I,positions:["bottom","top","left","right"],content:(0,t.jsx)("form",{children:l.rM.map((e,r)=>(0,t.jsxs)("div",{onClick:()=>E(!1),style:{cursor:"pointer",display:"flex",marginTop:".4rem"},children:[(0,t.jsx)("input",{onChange:e=>S(r,e.target.checked),type:"checkbox",style:{marginRight:".5rem"}}),(0,t.jsx)("p",{children:e})]},r))}),children:(0,t.jsx)("h1",{style:{cursor:"pointer"},onClick:()=>E(!0),children:"Tipo de pieza"})}),(0,t.jsx)(p.Popover,{onClickOutside:()=>O(!1),containerStyle:{backgroundColor:"white",padding:"1.3rem",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:".5rem"},isOpen:M,positions:["bottom","top","left","right"],content:(0,t.jsx)("form",{children:l.PX.map((e,r)=>(0,t.jsxs)("div",{onClick:()=>O(!1),style:{cursor:"pointer",display:"flex",marginTop:".4rem"},children:[(0,t.jsx)("input",{name:"colors",onChange:e=>R(r,e.target.checked),type:"checkbox",id:"colors",style:{marginRight:".5rem"}}),(0,t.jsx)("p",{children:e})]},r))}),children:(0,t.jsx)("h1",{style:{cursor:"pointer"},onClick:()=>O(!0),children:"Marcas"})})]})]}),(0,t.jsxs)("div",{className:"contentM",children:[(0,t.jsx)("div",{style:{marginTop:"0rem",padding:".6rem",width:"100%",borderRadius:".5rem",border:"1px solid rgba(0, 0, 0, 0.2)"},children:(0,t.jsxs)("p",{children:["Se encontraron ",(0,t.jsxs)("span",{style:{fontWeight:"700"},children:[null!==(e=null==h?void 0:h.length)&&void 0!==e?e:0," productos"]})]})}),(null==h?void 0:h.length)>0?(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"gridItems",children:null==h?void 0:h.slice(18*Z-18,18*Z).map((e,r)=>(0,t.jsx)(c.Z,{item:e,setCart:y,setAmmountItem:k,ammountItem:f,cart:j},r))}),(0,t.jsx)(x.Z,{setCurrentPage:z,currentPage:Z,postPerPage:18,postData:null!=h?h:[]})]}):(0,t.jsx)("div",{children:" "})]})]}),(0,t.jsx)(g.default,{})]})})}}},function(e){e.O(0,[8153,3972,2173,6685,8821,8312,96,2138,1131,4121,8114,1744],function(){return e(e.s=8482)}),_N_E=e.O()}]);