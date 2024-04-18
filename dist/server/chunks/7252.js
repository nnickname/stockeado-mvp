"use strict";
exports.id = 7252;
exports.ids = [7252];
exports.modules = {

/***/ 17252:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h: () => (/* binding */ f)
});

// EXTERNAL MODULE: ./node_modules/@table-library/react-table-library/slicedToArray-c92cae3a.js
var slicedToArray_c92cae3a = __webpack_require__(58784);
// EXTERNAL MODULE: ./node_modules/@table-library/react-table-library/defineProperty-9f9de5d0.js
var defineProperty_9f9de5d0 = __webpack_require__(93949);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./node_modules/@table-library/react-table-library/useSyncControlledState-6e39bfdc.js
var u=function(n,u,e){react_.useEffect((function(){u&&(u.current[n]={state:e})}),[u,n,e])},e=function(u,e,t,c,f){var o=react_.useReducer(u,e),i=(0,slicedToArray_c92cae3a.s)(o,2),s=i[0],a=i[1],l=react_.useRef(null),v=react_.useRef(null);return react_.useEffect((function(){v.current&&(c.forEach((function(r){return r(v.current,l.current,f?f.current:void 0)})),v.current=null,l.current=null)}),[f,c,s]),[s,function(r){t.forEach((function(n){return n(r,s,f?f.current:void 0)}));var n=u(s,r);l.current=n,v.current=r,a(r)}]},t=function(r,n){return JSON.stringify(r)===JSON.stringify(n)},c=function(n,u,e){var c=react_.useRef(n),f=react_.useRef(n);react_.useEffect((function(){t(u,f.current)&&(t(n,c.current)||t(n,u)||e()),c.current=n,f.current=u}),[u,e,n])};
//# sourceMappingURL=useSyncControlledState-6e39bfdc.js.map

;// CONCATENATED MODULE: ./node_modules/@table-library/react-table-library/pagination.js
function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){(0,defineProperty_9f9de5d0.d)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}var pagination_u="SET",pagination_c=function(e,r){if(r.type===pagination_u)return function(e,r){return s(s({},e),r.payload)}(e,r);throw new Error},p={page:0,size:10},l={isServer:!1},f=function(r,i,f,g){var y,b=s(s({},p),null!==(y=null==i?void 0:i.state)&&void 0!==y?y:{}),d=null!=i&&i.onChange?i.onChange:function(){},O=e(pagination_c,b,[],[d],g),j=(0,slicedToArray_c92cae3a.s)(O,2),m=j[0],v=j[1],P=react_.useCallback((function(e){return v({type:pagination_u,payload:{page:e}})}),[v]),h=react_.useCallback((function(e){return v({type:pagination_u,payload:{size:e,page:0}})}),[v]);c(b,m,(function(){return v({type:pagination_u,payload:b})}));var z=react_.useCallback((function(e){return Math.ceil(e.length/m.size)}),[m.size]),S=react_.useCallback((function(e){return e.reduce((function(e,r,t){var n=Math.floor(t/m.size);return e[n]||(e[n]=[]),e[n].push(r),e}),[])}),[m.size]),w=react_.useCallback((function(e){var r=m.page*m.size+1,t=m.page*m.size+m.size;return{start:r,end:t>e.length?e.length:t}}),[m.page,m.size]),C=react_.useMemo((function(){return{onSetPage:P,onSetSize:h}}),[P,h]);u("pagination",g,m);var k=s(s({},l),null!=f?f:{}),D=s(s({},m),{},{getTotalPages:z,getPages:S,getPageBoundaries:w});return{state:D,fns:C,options:k,modifier:function(e){return k.isServer?e:D.getPages(e)[m.page]||[]}}};
//# sourceMappingURL=pagination.js.map


/***/ })

};
;