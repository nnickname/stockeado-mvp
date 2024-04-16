"use strict";
exports.id = 2402;
exports.ids = [2402];
exports.modules = {

/***/ 28342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ middlewareApi)
/* harmony export */ });
function middlewareApi() {
    return true;
// DONT WORK ENV
/*const token = headers().get('Authorization'); 
    const foo = process.env.NEXT_PUBLIC_API_TOKEN;
    if (typeof foo === 'undefined') {
        throw new Error("Env var `foo` is not defined")
    }
    if (token === null) {
        return false
    } else {
        if(token === foo){
            return true
        }
        return false;   
    }
    */ }


/***/ }),

/***/ 1377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

/* PetSchema will correspond to a collection in your MongoDB database. */ const QuotesSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    owner_id: {
        type: String
    },
    vehicle: {
        type: String
    },
    plate: {
        type: String
    },
    date: {
        type: String
    },
    requirements: {
        type: Array
    },
    sendedQuotes: {
        type: Array
    },
    state: {
        type: String
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Quotes || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Quotes", QuotesSchema));


/***/ }),

/***/ 40063:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(74937);


/***/ })

};
;