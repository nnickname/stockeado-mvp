(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1255,4744],{36629:function(e,t,n){Promise.resolve().then(n.bind(n,50953))},50953:function(e,t,n){"use strict";n.r(t);var r=n(57437),i=n(27009),o=n(42105),l=n(24033),u=n(2265),a=n(57719),s=n(969),c=n(81550),d=n.n(c),f=n(61396),p=n.n(f),h=n(49882),g=n(58501);n(89840);var v=n(5803);n(72319),t.default=()=>{let e=(0,l.useRouter)(),[t,n]=(0,u.useState)(null),[c,f]=(0,u.useState)([]),[m,y]=(0,u.useState)(""),b=(0,s.h)({nodes:null!=c?c:[]},{state:{page:0,size:12}}),j=[{label:"Veh\xedculo",renderCell:e=>(0,r.jsx)("p",{children:null==e?void 0:e.vehicle})},{label:"Placa",renderCell:e=>(0,r.jsx)("p",{children:null==e?void 0:e.plate})},{label:"Productos",renderCell:e=>{var t;return(0,r.jsx)("p",{children:null==e?void 0:null===(t=e.products)||void 0===t?void 0:t.length})}},{label:"Fecha de creaci\xf3n",renderCell:e=>(0,r.jsxs)("p",{children:[new Date(e.date).getDay(),"/",new Date(e.date).getMonth(),"/",new Date(e.date).getFullYear()]})},{label:"Estado",renderCell:e=>{var t,n;return(0,r.jsx)("p",{style:{color:"Confirmed"===e.state?"#00771B":(null===(t=e.quotes)||void 0===t?void 0:t.length)>0?"#FF9017":"Pending"===e.state?"#666666":void 0},children:"Confirmed"===e.state?"Confirmado":(null===(n=e.quotes)||void 0===n?void 0:n.length)>0?"Cotizado":"Pending"===e.state?"Pendiente":void 0})}},{label:"",renderCell:e=>(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("div",{style:{cursor:"pointer",marginRight:".5rem"},children:(0,r.jsx)(p(),{target:"_blank",style:{fontSize:"1rem",color:"#3662E3",marginLeft:".5rem"},href:"/editquote?id="+(null==e?void 0:e._id),children:(0,r.jsx)(d(),{name:"eye-outline"})})}),(0,r.jsx)(d(),{onClick:async()=>{let t=await (0,v.UO)(null==e?void 0:e._id);t&&window.location.reload()},name:"trash-outline",style:{fontSize:"1rem",color:"#EE4B2B",cursor:"pointer"}})]})}],x=async()=>{let t=await (0,a.PR)();if(null==t){e.push("/");return}if((null==t?void 0:t.type)!=="workshop")return e.push("/hub");let r=await (0,v.QR)(null==t?void 0:t._id);if(null!==r){let e=null==r?void 0:r.map(e=>{var t;return{_id:null==e?void 0:e._id,vehicle:null==e?void 0:e.vehicle,plate:null==e?void 0:e.plate,products:null==e?void 0:e.requirements,quotes:null==e?void 0:e.sendedQuotes,date:null==e?void 0:e.date,state:null!==(t=null==e?void 0:e.state)&&void 0!==t?t:"Pending",action:""}});f(e)}n(t)},[w,O]=(0,u.useState)(0),C=()=>O(window.innerWidth);(0,u.useEffect)(()=>(x(),C(),window.addEventListener("resize",C),()=>window.removeEventListener("resize",C)),[]);let P=(0,h.u)([(0,g.g)(),{Table:"\n            --data-table-library_grid-template-columns: 150px 200px 200px 200px 200px 100px !important;\n             "}]);return(0,r.jsx)(r.Fragment,{children:null===t?(0,r.jsx)(d(),{name:"chevron-collapse-outline",className:"rotateItem",color:"#1366D9",style:{fontSize:"1.5rem",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}):(0,r.jsx)(i.Z,{user:t,route:"quotes",frameContennt:(0,r.jsx)("div",{className:"resume",style:{overflow:"hidden"},children:(0,r.jsx)("div",{children:(0,r.jsxs)("div",{style:{padding:"1rem"},children:[(0,r.jsxs)("div",{style:{width:"100%",marginBottom:"2rem",display:"flex"},children:[(0,r.jsx)("h1",{style:{marginRight:"1rem",marginTop:"0rem",fontSize:"1.2rem",fontWeight:"500"},children:"Cotizaciones"}),(0,r.jsx)("button",{className:"buttonsWithouthPadding",onClick:()=>e.push("/createquote"),style:{fontSize:".8rem",borderRadius:".5rem",padding:".2rem",paddingLeft:"1rem",paddingRight:"1rem",marginRight:"1rem",backgroundColor:"transparent",color:"#1366D9",border:"1px solid #1366D9"},children:"Crear"})]}),(0,r.jsx)(o._,{theme:P,layout:{custom:!0,horizontalScroll:!0},pagination:b,columns:j,data:{nodes:null==c?void 0:c.filter(e=>null==e?void 0:e.vehicle.toLowerCase().includes(m.toLowerCase()))}}),(0,r.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[(0,r.jsxs)("span",{style:{margin:".5rem"},children:["Paginas: ",b.state.getTotalPages(null!=c?c:[])]}),(0,r.jsxs)("span",{children:["Actual:","  ",b.state.getPages(null!=c?c:[]).map((e,t)=>(0,r.jsxs)("button",{type:"button",style:{fontWeight:b.state.page===t?"bold":"normal",color:b.state.page===t?"#3662E3":"black",margin:".5rem"},onClick:()=>b.fns.onSetPage(t),children:[t+1," ","  "]},t))]})]})]})})})})})}},89840:function(){},72319:function(){},61396:function(e,t,n){e.exports=n(46685)},17488:function(e,t,n){"use strict";function r(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}n.d(t,{Z:function(){return r}})},13428:function(e,t,n){"use strict";function r(){return(r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},63142:function(e,t,n){"use strict";function r(e,t){return(r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}n.d(t,{Z:function(){return i}})},969:function(e,t,n){"use strict";n.d(t,{h:function(){return g}});var r=n(40889),i=n(87121),o=n(2265),l=function(e,t,n){o.useEffect(function(){t&&(t.current[e]={state:n})},[t,e,n])},u=function(e,t,n,i,l){var u=o.useReducer(e,t),a=(0,r.s)(u,2),s=a[0],c=a[1],d=o.useRef(null),f=o.useRef(null);return o.useEffect(function(){f.current&&(i.forEach(function(e){return e(f.current,d.current,l?l.current:void 0)}),f.current=null,d.current=null)},[l,i,s]),[s,function(t){n.forEach(function(e){return e(t,s,l?l.current:void 0)});var r=e(s,t);d.current=r,f.current=t,c(t)}]},a=function(e,t){return JSON.stringify(e)===JSON.stringify(t)},s=function(e,t,n){var r=o.useRef(e),i=o.useRef(e);o.useEffect(function(){a(t,i.current)&&(a(e,r.current)||a(e,t)||n()),r.current=e,i.current=t},[t,n,e])};function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach(function(t){(0,i.d)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var f=function(e,t){if("SET"===t.type)return d(d({},e),t.payload);throw Error()},p={page:0,size:10},h={isServer:!1},g=function(e,t,n,i){var a,c=d(d({},p),null!==(a=null==t?void 0:t.state)&&void 0!==a?a:{}),g=u(f,c,[],[null!=t&&t.onChange?t.onChange:function(){}],i),v=(0,r.s)(g,2),m=v[0],y=v[1],b=o.useCallback(function(e){return y({type:"SET",payload:{page:e}})},[y]),j=o.useCallback(function(e){return y({type:"SET",payload:{size:e,page:0}})},[y]);s(c,m,function(){return y({type:"SET",payload:c})});var x=o.useCallback(function(e){return Math.ceil(e.length/m.size)},[m.size]),w=o.useCallback(function(e){return e.reduce(function(e,t,n){var r=Math.floor(n/m.size);return e[r]||(e[r]=[]),e[r].push(t),e},[])},[m.size]),O=o.useCallback(function(e){var t=m.page*m.size+1,n=m.page*m.size+m.size;return{start:t,end:n>e.length?e.length:n}},[m.page,m.size]),C=o.useMemo(function(){return{onSetPage:b,onSetSize:j}},[b,j]);l("pagination",i,m);var P=d(d({},h),null!=n?n:{}),E=d(d({},m),{},{getTotalPages:x,getPages:w,getPageBoundaries:O});return{state:E,fns:C,options:P,modifier:function(e){return P.isServer?e:E.getPages(e)[m.page]||[]}}}}},function(e){e.O(0,[8153,6352,2173,6685,4141,7790,2971,596,1744],function(){return e(e.s=36629)}),_N_E=e.O()}]);