"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4028],{1338:function(e,t){/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */t.Q=function(e,t){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var r={},o=e.split(n),s=(t||{}).decode||i,a=0;a<o.length;a++){var l=o[a],d=l.indexOf("=");if(!(d<0)){var c=l.substr(0,d).trim(),u=l.substr(++d,l.length).trim();'"'==u[0]&&(u=u.slice(1,-1)),void 0==r[c]&&(r[c]=function(e,t){try{return t(e)}catch(t){return e}}(u,s))}}return r},t.q=function(e,t,i){var n=i||{},s=n.encode||r;if("function"!=typeof s)throw TypeError("option encode is invalid");if(!o.test(e))throw TypeError("argument name is invalid");var a=s(t);if(a&&!o.test(a))throw TypeError("argument val is invalid");var l=e+"="+a;if(null!=n.maxAge){var d=n.maxAge-0;if(isNaN(d)||!isFinite(d))throw TypeError("option maxAge is invalid");l+="; Max-Age="+Math.floor(d)}if(n.domain){if(!o.test(n.domain))throw TypeError("option domain is invalid");l+="; Domain="+n.domain}if(n.path){if(!o.test(n.path))throw TypeError("option path is invalid");l+="; Path="+n.path}if(n.expires){if("function"!=typeof n.expires.toUTCString)throw TypeError("option expires is invalid");l+="; Expires="+n.expires.toUTCString()}if(n.httpOnly&&(l+="; HttpOnly"),n.secure&&(l+="; Secure"),n.sameSite)switch("string"==typeof n.sameSite?n.sameSite.toLowerCase():n.sameSite){case!0:case"strict":l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"none":l+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return l};var i=decodeURIComponent,r=encodeURIComponent,n=/; */,o=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},2123:function(e,t,i){i.d(t,{$v:function(){return c},Dk:function(){return d},RF:function(){return u},RZ:function(){return l},Rd:function(){return s},SI:function(){return a},qU:function(){return o}});var r=i(9110),n=i(7286);let o=async e=>{try{var t;let i=await n.Z.get("/inventoryy/edit",{headers:{id:e}});if((null==i?void 0:null===(t=i.data)||void 0===t?void 0:t.deleted)!==void 0)return!0;return!1}catch(e){return!1}},s=async e=>{try{var t;let i=await n.Z.post("/inventoryy",{...e});if((null==i?void 0:null===(t=i.data)||void 0===t?void 0:t.item)!==void 0)return!0;return!1}catch(e){return!1}},a=async e=>{try{var t,i;let r=await n.Z.get("/inventoryy/load",{headers:{id:e}});if(console.log(r),(null==r?void 0:null===(t=r.data)||void 0===t?void 0:t.item)!==void 0)return null==r?void 0:null===(i=r.data)||void 0===i?void 0:i.item;return null}catch(e){return null}},l=async e=>{try{var t;let i=await n.Z.post("/inventoryy/load",{items:[...e]});if((null==i?void 0:null===(t=i.data)||void 0===t?void 0:t.item)!==void 0)return!0;return!1}catch(e){return!1}},d=async e=>{try{var t;let i=await n.Z.post("/inventoryy/edit",{...e});if((null==i?void 0:null===(t=i.data)||void 0===t?void 0:t.item)!==void 0)return!0;return!1}catch(e){return!1}},c=async()=>{try{var e;let t=new r.Z,i=t.get("access_token"),o=await n.Z.get("/inventoryy",{headers:{token:i}});return null==o?void 0:null===(e=o.data)||void 0===e?void 0:e.items}catch(e){return null}},u=async e=>{try{let t=await n.Z.get("/inventoryy/marketplace",{headers:{id:e}});return null==t?void 0:t.data}catch(e){return null}}},4028:function(e,t,i){i.r(t);var r=i(7437),n=i(2123),o=i(7190),s=i(793),a=i(2265);i(947);var l=i(2300);i(6764);var d=i(2131),c=i(6807),u=i(1550),p=i.n(u),h=i(2071),m=i(2725);t.default=()=>{let[e,t]=(0,a.useState)(),[i,u]=(0,a.useState)([]),[g,v]=(0,a.useState)(null),[y,x]=(0,a.useState)([]),[f,j]=(0,a.useState)(0),b=async()=>{var e,i;let r=new URLSearchParams(window.location.search),o=r.get("id");if(null!==o&&(null==o?void 0:o.length)>0){let r=await (0,n.RF)(o);u(null!==(e=null==r?void 0:r.items)&&void 0!==e?e:[]),v(null!==(i=null==r?void 0:r.items)&&void 0!==i?i:[]),t(null==r?void 0:r.user)}},k=(e,t)=>{t?v(i.filter(t=>t.brand===e)):v(i)},C=(e,t)=>{t?v(i.filter(t=>Number(t.type===e))):v(i)},S=(e,t)=>{t?v(i.filter(t=>Number(t.categorie===e))):v(i)},[w,T]=(0,a.useState)(""),O=async()=>{if((null==w?void 0:w.length)>1){let e=await (0,d.V_)(w);v(null!=e?e:[])}else v(i)},[N,R]=(0,a.useState)(!1),[E,_]=(0,a.useState)(!1),[M,P]=(0,a.useState)(!1);(0,a.useEffect)(()=>{b();let e=JSON.parse(sessionStorage.getItem("cart"));void 0!==e&&x(null!=e?e:[])},[]);let[L,I]=(0,a.useState)(1);return(0,r.jsx)(r.Fragment,{children:null===g?(0,r.jsx)(p(),{name:"chevron-collapse-outline",className:"rotateItem",color:"#1366D9",style:{fontSize:"1.5rem",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}):(0,r.jsxs)("div",{children:[(0,r.jsx)(l.Z,{cartItems:y,setCart:x}),(0,r.jsx)("img",{alt:"Logo",className:"noTopResponsive",style:{margin:"auto",marginTop:"7rem",borderTop:"1px solid rgba(0,0,0, 0.2)",borderBottom:"1px solid rgba(0,0,0, 0.2)"},src:null==e?void 0:e.image}),(0,r.jsxs)("div",{className:"marketplace displayBlockResponsive",children:[(0,r.jsxs)("div",{className:"sidebarM hideResponsive",children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{style:{marginTop:"auto",width:"100%",padding:"1.1rem",height:"40px",border:"1px solid grey"},onChange:e=>T(e.target.value),type:"text",name:"email",placeholder:"N\xfamero de parte",value:w})}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{style:{height:"40px",paddingLeft:"1rem",paddingRight:"1rem",border:"1px solid grey"},onClick:()=>O(),children:"Buscar"})})]}),(0,r.jsx)("h1",{style:{marginTop:"1rem"},children:"Categorias"}),s.FM.map((e,t)=>(0,r.jsxs)("div",{style:{display:"flex",marginTop:".4rem"},children:[(0,r.jsx)("input",{onChange:e=>S(t,e.target.checked),type:"checkbox",style:{marginRight:".5rem"}}),(0,r.jsx)("p",{children:e})]},t)),(0,r.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem",width:"100%",height:"1px",background:"rgba(0,0,0, 0.2)"}}),(0,r.jsx)("h1",{children:"Tipo de pieza"}),s.rM.map((e,t)=>(0,r.jsxs)("div",{style:{display:"flex",marginTop:".4rem"},children:[(0,r.jsx)("input",{onChange:e=>C(t,e.target.checked),type:"checkbox",style:{marginRight:".5rem"}}),(0,r.jsx)("p",{children:e})]},t)),(0,r.jsx)("div",{style:{marginTop:".5rem",marginBottom:".5rem",width:"100%",height:"1px",background:"rgba(0,0,0, 0.2)"}}),(0,r.jsx)("h1",{children:"Marcas"}),(0,r.jsx)("form",{children:s.PX.map((e,t)=>(0,r.jsxs)("div",{style:{display:"flex",marginTop:".4rem"},children:[(0,r.jsx)("input",{name:"colors",onChange:e=>k(s.PX[t],e.target.checked),type:"checkbox",id:"colors",style:{marginRight:".5rem"}}),(0,r.jsx)("p",{children:e})]},t))})]}),(0,r.jsxs)("div",{className:"sidebarM showResponsive",style:{display:"none"},children:[(0,r.jsxs)("div",{style:{display:"flex"},children:[(0,r.jsx)("div",{children:(0,r.jsx)("input",{style:{marginTop:"auto",width:"100%",padding:"1.1rem",height:"40px",border:"1px solid grey"},onChange:e=>T(e.target.value),type:"text",name:"email",placeholder:"N\xfamero de parte",value:w})}),(0,r.jsx)("div",{children:(0,r.jsx)("button",{style:{height:"40px",paddingLeft:"1rem",paddingRight:"1rem",border:"1px solid grey"},onClick:()=>O(),children:"Buscar"})})]}),(0,r.jsxs)("div",{className:"displayFlexResponsive",style:{marginTop:"2rem"},children:[(0,r.jsx)(c.Popover,{onClickOutside:()=>_(!1),containerStyle:{backgroundColor:"white",padding:"1.3rem",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:".5rem"},isOpen:E,positions:["bottom","top","left","right"],content:(0,r.jsx)("form",{children:s.FM.map((e,t)=>(0,r.jsxs)("div",{onClick:()=>_(!1),style:{cursor:"pointer",display:"flex",marginTop:".4rem"},children:[(0,r.jsx)("input",{onChange:e=>S(t,e.target.checked),type:"checkbox",style:{marginRight:".5rem"}}),(0,r.jsx)("p",{children:e})]},t))}),children:(0,r.jsx)("h1",{style:{cursor:"pointer"},onClick:()=>_(!0),children:"Categorias"})}),(0,r.jsx)(c.Popover,{onClickOutside:()=>P(!1),containerStyle:{backgroundColor:"white",padding:"1.3rem",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:".5rem"},isOpen:M,positions:["bottom","top","left","right"],content:(0,r.jsx)("form",{children:s.rM.map((e,t)=>(0,r.jsxs)("div",{onClick:()=>P(!1),style:{cursor:"pointer",display:"flex",marginTop:".4rem"},children:[(0,r.jsx)("input",{onChange:e=>C(t,e.target.checked),type:"checkbox",style:{marginRight:".5rem"}}),(0,r.jsx)("p",{children:e})]},t))}),children:(0,r.jsx)("h1",{style:{cursor:"pointer"},onClick:()=>P(!0),children:"Tipo de pieza"})}),(0,r.jsx)(c.Popover,{onClickOutside:()=>R(!1),containerStyle:{backgroundColor:"white",padding:"1.3rem",border:"1px solid rgba(0, 0, 0, 0.2)",borderRadius:".5rem"},isOpen:N,positions:["bottom","top","left","right"],content:(0,r.jsx)("form",{children:s.PX.map((e,t)=>(0,r.jsxs)("div",{onClick:()=>R(!1),style:{cursor:"pointer",display:"flex",marginTop:".4rem"},children:[(0,r.jsx)("input",{name:"colors",onChange:e=>k(s.PX[t],e.target.checked),type:"checkbox",id:"colors",style:{marginRight:".5rem"}}),(0,r.jsx)("p",{children:e})]},t))}),children:(0,r.jsx)("h1",{style:{cursor:"pointer"},onClick:()=>R(!0),children:"Marcas"})})]})]}),(0,r.jsxs)("div",{className:"contentM",children:[(0,r.jsx)("div",{style:{paddingRight:"auto",paddingLeft:"auto",marginTop:"1rem"},children:(0,r.jsxs)("p",{style:{color:"grey",fontSize:".8rem",marginBottom:"1rem"},children:[" MarketPlace ","> "+(null==e?void 0:e.nameShop)]})}),(0,r.jsx)("div",{style:{marginTop:"0rem",padding:".6rem",width:"100%",borderRadius:".5rem",border:"1px solid rgba(0, 0, 0, 0.2)"},children:(0,r.jsxs)("p",{children:["Se encontraron ",(0,r.jsxs)("span",{style:{fontWeight:"700"},children:[null==g?void 0:g.length," productos"]})]})}),(null==g?void 0:g.length)>0?(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"gridItems",children:null==g?void 0:g.slice(18*L-18,18*L).map((e,t)=>(0,r.jsx)(o.Z,{item:e,setCart:x,setAmmountItem:j,ammountItem:f,cart:y},t))}),(0,r.jsx)(h.Z,{setCurrentPage:I,currentPage:L,postPerPage:18,postData:null!=g?g:[]})]}):(0,r.jsx)("div",{children:" "})]})]}),(0,r.jsx)(m.default,{})]})})}},9110:function(e,t,i){i.d(t,{Z:function(){return s}});var r=i(1338);function n(e,t){void 0===t&&(t={});var i,r=e&&"j"===e[0]&&":"===e[1]?e.substr(2):e;if(void 0===(i=t.doNotParse)&&(i=!r||"{"!==r[0]&&"["!==r[0]&&'"'!==r[0]),!i)try{return JSON.parse(r)}catch(e){}return e}var o=function(){return(o=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++)for(var n in t=arguments[i])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},s=function(){function e(e,t){var i=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies="string"==typeof e?r.Q(e,t):"object"==typeof e&&null!==e?e:{},new Promise(function(){i.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie}).catch(function(){})}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=r.Q(document.cookie,e))},e.prototype._emitChange=function(e){for(var t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)},e.prototype.get=function(e,t,i){return void 0===t&&(t={}),this._updateBrowserValues(i),n(this.cookies[e],t)},e.prototype.getAll=function(e,t){void 0===e&&(e={}),this._updateBrowserValues(t);var i={};for(var r in this.cookies)i[r]=n(this.cookies[r],e);return i},e.prototype.set=function(e,t,i){var n;"object"==typeof t&&(t=JSON.stringify(t)),this.cookies=o(o({},this.cookies),((n={})[e]=t,n)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=r.q(e,t,i)),this._emitChange({name:e,value:t,options:i})},e.prototype.remove=function(e,t){var i=t=o(o({},t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=o({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=r.q(e,"",i)),this._emitChange({name:e,value:void 0,options:t})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1)},e}()}}]);