(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1255,4744],{36629:function(e,n,t){Promise.resolve().then(t.bind(t,50953))},50953:function(e,n,t){"use strict";t.r(n);var o=t(57437),r=t(27009),l=t(42105),i=t(24033),a=t(2265),s=t(57719),d=t(969),c=t(81550),u=t.n(c),p=t(61396),f=t.n(p),h=t(49882),v=t(58501);t(89840);var m=t(5803);t(72319),n.default=()=>{let e=(0,i.useRouter)(),[n,t]=(0,a.useState)(null),[c,p]=(0,a.useState)([]),[g,b]=(0,a.useState)(""),x=(0,d.h)({nodes:null!=c?c:[]},{state:{page:0,size:12}}),y=[{label:"Veh\xedculo",renderCell:e=>(0,o.jsx)("p",{children:null==e?void 0:e.vehicle})},{label:"Placa",renderCell:e=>(0,o.jsx)("p",{children:null==e?void 0:e.plate})},{label:"Productos",renderCell:e=>{var n;return(0,o.jsx)("p",{children:null==e?void 0:null===(n=e.products)||void 0===n?void 0:n.length})}},{label:"Fecha de creaci\xf3n",renderCell:e=>(0,o.jsxs)("p",{children:[new Date(e.date).getDay(),"/",new Date(e.date).getMonth(),"/",new Date(e.date).getFullYear()]})},{label:"Estado",renderCell:e=>{var n,t;return(0,o.jsx)("p",{style:{color:"Confirmed"===e.state?"#00771B":(null===(n=e.products)||void 0===n?void 0:n.length)>0?"#FF9017":"Pending"===e.state?"#666666":void 0},children:"Confirmed"===e.state?"Confirmado":(null===(t=e.products)||void 0===t?void 0:t.length)>0?"Cotizado":"Pending"===e.state?"Pendiente":void 0})}},{label:"",renderCell:e=>(0,o.jsxs)("div",{style:{display:"flex"},children:[(0,o.jsx)("div",{style:{cursor:"pointer",marginRight:".5rem"},children:(0,o.jsx)(f(),{target:"_blank",style:{fontSize:"1rem",color:"#3662E3",marginLeft:".5rem"},href:"/editquote?id="+(null==e?void 0:e._id),children:(0,o.jsx)(u(),{name:"eye-outline"})})}),(0,o.jsx)(u(),{onClick:async()=>{let n=await (0,m.UO)(null==e?void 0:e._id);n&&window.location.reload()},name:"trash-outline",style:{fontSize:"1rem",color:"#EE4B2B",cursor:"pointer"}})]})}],j=async()=>{let n=await (0,s.PR)();if(null==n){e.push("/");return}let o=await (0,m.QR)(null==n?void 0:n._id);if(null!==o){let e=null==o?void 0:o.map(e=>{var n;return{_id:null==e?void 0:e._id,vehicle:null==e?void 0:e.vehicle,plate:null==e?void 0:e.plate,products:null==e?void 0:e.requirements,date:null==e?void 0:e.date,state:null!==(n=null==e?void 0:e.state)&&void 0!==n?n:"Pending",action:""}});p(e)}t(n)},[w,C]=(0,a.useState)(0),_=()=>C(window.innerWidth);(0,a.useEffect)(()=>(j(),_(),window.addEventListener("resize",_),()=>window.removeEventListener("resize",_)),[]);let P=(0,h.u)([(0,v.g)(),{}]);return(0,o.jsx)(o.Fragment,{children:null===n?(0,o.jsx)(u(),{name:"chevron-collapse-outline",className:"rotateItem",color:"#1366D9",style:{fontSize:"1.5rem",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}):(0,o.jsx)(r.Z,{user:n,route:"quotes",frameContennt:(0,o.jsx)("div",{className:"resume",style:{overflow:"hidden"},children:(0,o.jsx)("div",{children:(0,o.jsxs)("div",{style:{padding:"1rem"},children:[(0,o.jsxs)("div",{style:{width:"100%",marginBottom:"2rem",display:"flex"},children:[(0,o.jsx)("h1",{style:{marginRight:"1rem",marginTop:"0rem",fontSize:"1.2rem",fontWeight:"500"},children:"Cotizaciones"}),(0,o.jsx)("button",{className:"buttonsWithouthPadding",onClick:()=>e.push("/createquote"),style:{fontSize:".8rem",borderRadius:".5rem",padding:".2rem",paddingLeft:"1rem",paddingRight:"1rem",marginRight:"1rem",backgroundColor:"transparent",color:"#1366D9",border:"1px solid #1366D9"},children:"Crear"})]}),(0,o.jsx)(l._,{theme:P,layout:{custom:!0,horizontalScroll:!0},pagination:x,columns:y,data:{nodes:null==c?void 0:c.filter(e=>null==e?void 0:e.vehicle.toLowerCase().includes(g.toLowerCase()))}}),(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,o.jsxs)("span",{style:{margin:".5rem"},children:["Paginas: ",x.state.getTotalPages(null!=c?c:[])]}),(0,o.jsxs)("span",{children:["Actual:","  ",x.state.getPages(null!=c?c:[]).map((e,n)=>(0,o.jsxs)("button",{type:"button",style:{fontWeight:x.state.page===n?"bold":"normal",color:x.state.page===n?"#3662E3":"black",margin:".5rem"},onClick:()=>x.fns.onSetPage(n),children:[n+1," ","  "]},n))]})]})]})})})})})}},89840:function(){},72319:function(){},61396:function(e,n,t){e.exports=t(46685)},17488:function(e,n,t){"use strict";function o(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}t.d(n,{Z:function(){return o}})},13428:function(e,n,t){"use strict";function o(){return(o=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return o}})},63142:function(e,n,t){"use strict";function o(e,n){return(o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,n){return e.__proto__=n,e})(e,n)}function r(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,o(e,n)}t.d(n,{Z:function(){return r}})},58501:function(e,n,t){"use strict";t.d(n,{g:function(){return a}});var o="#141414",r="#dde2eb",l=t(49882),i={Table:"",Header:"",Body:"",BaseRow:"\n    font-size: 16px;\n  ",HeaderRow:"\n    color: ".concat(o,";\n  "),Row:"\n    color: ".concat("#757575",";\n\n    &.disabled {\n      color: ").concat("#9e9e9e",";\n    }\n\n    &:hover {\n      color: ").concat(o,";\n    }\n\n    &:not(:last-of-type) > .td {\n      border-bottom: 1px solid ").concat(r,";\n    }\n  "),BaseCell:"\n    padding: 6px 12px;\n  ",HeaderCell:"\n    font-weight: bold;\n    border-bottom: 1px solid ".concat(r,";\n\n    .resizer-handle {\n      background-color: ").concat(r,";\n    }\n\n    svg,\n    path {\n      fill: currentColor;\n    }\n  "),Cell:"\n    &:focus {\n      outline: dotted;\n      outline-width: 1px;\n      outline-offset: -1px;\n    }\n  "},a=function(){return(0,l.z)([i])}}},function(e){e.O(0,[8153,6352,2173,6685,7904,2967,2971,596,1744],function(){return e(e.s=36629)}),_N_E=e.O()}]);