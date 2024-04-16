(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1197],{34482:function(e,i){"use strict";/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */i.Q=function(e,i){if("string"!=typeof e)throw TypeError("argument str must be a string");for(var n={},s=e.split(r),o=(i||{}).decode||t,a=0;a<s.length;a++){var l=s[a],A=l.indexOf("=");if(!(A<0)){var d=l.substr(0,A).trim(),c=l.substr(++A,l.length).trim();'"'==c[0]&&(c=c.slice(1,-1)),void 0==n[d]&&(n[d]=function(e,i){try{return i(e)}catch(i){return e}}(c,o))}}return n},i.q=function(e,i,t){var r=t||{},o=r.encode||n;if("function"!=typeof o)throw TypeError("option encode is invalid");if(!s.test(e))throw TypeError("argument name is invalid");var a=o(i);if(a&&!s.test(a))throw TypeError("argument val is invalid");var l=e+"="+a;if(null!=r.maxAge){var A=r.maxAge-0;if(isNaN(A)||!isFinite(A))throw TypeError("option maxAge is invalid");l+="; Max-Age="+Math.floor(A)}if(r.domain){if(!s.test(r.domain))throw TypeError("option domain is invalid");l+="; Domain="+r.domain}if(r.path){if(!s.test(r.path))throw TypeError("option path is invalid");l+="; Path="+r.path}if(r.expires){if("function"!=typeof r.expires.toUTCString)throw TypeError("option expires is invalid");l+="; Expires="+r.expires.toUTCString()}if(r.httpOnly&&(l+="; HttpOnly"),r.secure&&(l+="; Secure"),r.sameSite)switch("string"==typeof r.sameSite?r.sameSite.toLowerCase():r.sameSite){case!0:case"strict":l+="; SameSite=Strict";break;case"lax":l+="; SameSite=Lax";break;case"none":l+="; SameSite=None";break;default:throw TypeError("option sameSite is invalid")}return l};var t=decodeURIComponent,n=encodeURIComponent,r=/; */,s=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/},4536:function(e,i,t){Promise.resolve().then(t.bind(t,82345))},82345:function(e,i,t){"use strict";t.r(i);var n=t(57437),r=t(24033),s=t(40901),o=t(5922),a=t(27009),l=t(2265),A=t(57719),d=t(42123),c=t(76373),u=t(81550),h=t.n(u);i.default=()=>{let e=(0,r.useRouter)(),[i,t]=(0,l.useState)(null),[u,p]=(0,l.useState)([]),[g,m]=(0,l.useState)([]),v=async()=>{let i=await (0,A.PR)();null==i&&e.push("/signin"),(null==i?void 0:i.type)==="workshop"&&e.push("/quotes");let n=await (0,c.AU)(null==i?void 0:i._id);m(n),t(i)},f=async()=>{let e=await (0,d.$v)();await p(e)};return(0,l.useEffect)(()=>{v(),f()},[]),(0,n.jsx)("div",{children:null===i?(0,n.jsx)(h(),{name:"chevron-collapse-outline",className:"rotateItem",color:"#1366D9",style:{fontSize:"1.5rem",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}}):(0,n.jsx)(a.Z,{user:i,route:"dashboard",frameContennt:(0,n.jsxs)("div",{children:[(0,n.jsx)(o.Z,{orders:g,user:i}),(0,n.jsx)(s.ZP,{items:u,orders:g,user:i})]})})})}},5922:function(e,i,t){"use strict";t.d(i,{Z:function(){return p}});var n=t(57437);t(81636);var r={src:"/_next/static/media/icon1.a2628423.png",height:24,width:26,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAG1BMVEVhnvNilvRhnfNgnfRgnvJhnvJhnfJhnfRhnPI+0Dh2AAAACXRSTlObBYw5aVurHU9bi4DGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALklEQVR4nAXBhwEAMAjDMGcA/f/iSkhS/cQlOgiwVVoMo+SweV3A7MxiMnMP9wMTFwCpNNW6GAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:7},s={src:"/_next/static/media/icon2.e6483d00.png",height:25,width:26,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEWAefKAefJMaXF/efGAePGAefKAefJ/efGBePNVsWt/AAAACXRSTlOJgAA0G5RfeFC7PfYzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nB3IwRHAQAjDQHG2gf4rzhC9dsS7jPihPrg13TyvtQleTU8VsgIFUBckdSMfHXMAvv79L94AAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},o={src:"/_next/static/media/icon3.0624775a.png",height:27,width:26,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEXYoGDXoF5MaXHZoGDZoWDZoF7bomBHXWMUAAAAB3RSTlM/MABMXBZyGcKt2AAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC5JREFUeJwtxsENwDAMw0Cykr3/yEGK8MPj+1u4G5wLMy5jpRYnEEvkgYeSUPcAFK8AjTCdC1YAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},a={src:"/_next/static/media/icon4.a37a50e7.png",height:26,width:26,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVMaXFY0mRY0mRX0mFY02NY02VX02PGBb8VAAAAB3RSTlMAR1MPJTlm9Dq4HQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADBJREFUeJwdyrkRwEAQhEDmu/xDVq2w2gDAL1xufFKhBhs99qiY2YhYWA/pP1qSnA8RRQCBXLgm/gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},l=t(16691),A=t.n(l);let d=e=>{var i=0;return null==e||e.map(e=>{Number(null==e?void 0:e.state)>3&&i++}),i},c=(e,i)=>{var t=0;return null==e||e.map(e=>{var n;Number(null==e?void 0:e.state)>3&&(null==e||null===(n=e.items)||void 0===n||n.map(e=>{var n;String(e.item.owner_id)===i&&(t+=Number(null===(n=e.item)||void 0===n?void 0:n.priceSelling)*e.ammount)}))}),t.toFixed(2)},u=(e,i)=>{var t=0;return null==e||e.map(e=>{var n;Number(null==e?void 0:e.state)>3&&(null==e||null===(n=e.items)||void 0===n||n.map(e=>{var n;String(e.item.owner_id)===i&&(t+=Number(null===(n=e.item)||void 0===n?void 0:n.price)*e.ammount)}))}),t.toFixed(2)},h=(e,i)=>{let t=i/e*100;return Number.isNaN(t)?0:t.toFixed(1)};var p=e=>{var i,t;let{orders:l,user:p}=e;return(0,n.jsxs)("div",{className:"content-frame-container resume",children:[(0,n.jsx)("div",{style:{width:"100%",textAlign:"left"},children:(0,n.jsx)("h1",{children:"Resumen de Ventas"})}),(0,n.jsxs)("div",{className:"resumeContainer",children:[(0,n.jsxs)("div",{style:{textAlign:"center",width:"100%",borderRight:"1px solid rgba(230, 230, 230, 0.5)"},children:[(0,n.jsx)("div",{className:"centerIcon",children:(0,n.jsx)("div",{style:{backgroundColor:"#E8F1FD",borderRadius:".5rem",padding:".2rem",width:"max-content"},children:(0,n.jsx)(A(),{src:r,alt:""})})}),(0,n.jsxs)("div",{style:{display:"inline-block"},children:[(0,n.jsx)("p",{style:{display:"inline-block"},children:d(l)}),(0,n.jsx)("p",{style:{marginLeft:"1.5rem",color:"grey",display:"inline-block"},children:"Ventas"})]})]}),(0,n.jsxs)("div",{style:{textAlign:"center",width:"100%",borderRight:"1px solid rgba(230, 230, 230, 0.5)"},children:[(0,n.jsx)("div",{className:"centerIcon",children:(0,n.jsx)("div",{style:{backgroundColor:"#ECEAFF",borderRadius:".5rem",padding:".2rem",width:"max-content"},children:(0,n.jsx)(A(),{src:s,alt:""})})}),(0,n.jsxs)("div",{style:{display:"inline-block"},children:[(0,n.jsxs)("p",{style:{display:"inline-block"},children:["s/. ",c(l,String(null==p?void 0:p._id))]}),(0,n.jsx)("p",{style:{marginLeft:"1.5rem",color:"grey",display:"inline-block"},children:"Ingresos"})]})]}),(0,n.jsxs)("div",{style:{textAlign:"center",width:"100%",borderRight:"1px solid rgba(230, 230, 230, 0.5)"},children:[(0,n.jsx)("div",{className:"centerIcon",children:(0,n.jsx)("div",{style:{backgroundColor:"#FFEEDB",borderRadius:".5rem",padding:".2rem",width:"max-content"},children:(0,n.jsx)(A(),{src:o,alt:""})})}),(0,n.jsxs)("div",{style:{display:"inline-block"},children:[(0,n.jsxs)("p",{style:{display:"inline-block"},children:["s/. ",null!==(i=u(l,String(null==p?void 0:p._id)))&&void 0!==i?i:0]}),(0,n.jsx)("p",{style:{marginLeft:"1.5rem",color:"grey",display:"inline-block"},children:"Beneficio"})]})]}),(0,n.jsxs)("div",{style:{textAlign:"center",width:"100%"},children:[(0,n.jsx)("div",{className:"centerIcon",children:(0,n.jsx)("div",{style:{backgroundColor:"#EBFFED",borderRadius:".5rem",padding:".2rem",width:"max-content"},children:(0,n.jsx)(A(),{src:a,alt:""})})}),(0,n.jsxs)("div",{style:{display:"inline-block"},children:[(0,n.jsxs)("p",{style:{display:"inline-block"},children:[null!==(t=h(Number(c(l,String(null==p?void 0:p._id))),Number(u(l,String(null==p?void 0:p._id)))))&&void 0!==t?t:"0","%"]}),(0,n.jsx)("p",{style:{marginLeft:"1.5rem",color:"grey",display:"inline-block"},children:"Margen"})]})]})]})]})}},81636:function(){},99110:function(e,i,t){"use strict";t.d(i,{Z:function(){return o}});var n=t(34482);function r(e,i){void 0===i&&(i={});var t,n=e&&"j"===e[0]&&":"===e[1]?e.substr(2):e;if(void 0===(t=i.doNotParse)&&(t=!n||"{"!==n[0]&&"["!==n[0]&&'"'!==n[0]),!t)try{return JSON.parse(n)}catch(e){}return e}var s=function(){return(s=Object.assign||function(e){for(var i,t=1,n=arguments.length;t<n;t++)for(var r in i=arguments[t])Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);return e}).apply(this,arguments)},o=function(){function e(e,i){var t=this;this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.cookies="string"==typeof e?n.Q(e,i):"object"==typeof e&&null!==e?e:{},new Promise(function(){t.HAS_DOCUMENT_COOKIE="object"==typeof document&&"string"==typeof document.cookie}).catch(function(){})}return e.prototype._updateBrowserValues=function(e){this.HAS_DOCUMENT_COOKIE&&(this.cookies=n.Q(document.cookie,e))},e.prototype._emitChange=function(e){for(var i=0;i<this.changeListeners.length;++i)this.changeListeners[i](e)},e.prototype.get=function(e,i,t){return void 0===i&&(i={}),this._updateBrowserValues(t),r(this.cookies[e],i)},e.prototype.getAll=function(e,i){void 0===e&&(e={}),this._updateBrowserValues(i);var t={};for(var n in this.cookies)t[n]=r(this.cookies[n],e);return t},e.prototype.set=function(e,i,t){var r;"object"==typeof i&&(i=JSON.stringify(i)),this.cookies=s(s({},this.cookies),((r={})[e]=i,r)),this.HAS_DOCUMENT_COOKIE&&(document.cookie=n.q(e,i,t)),this._emitChange({name:e,value:i,options:t})},e.prototype.remove=function(e,i){var t=i=s(s({},i),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=s({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=n.q(e,"",t)),this._emitChange({name:e,value:void 0,options:i})},e.prototype.addChangeListener=function(e){this.changeListeners.push(e)},e.prototype.removeChangeListener=function(e){var i=this.changeListeners.indexOf(e);i>=0&&this.changeListeners.splice(i,1)},e}()}}]);