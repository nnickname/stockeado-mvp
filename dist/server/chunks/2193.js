"use strict";
exports.id = 2193;
exports.ids = [2193];
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

/***/ 98384:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports OrderStates, getOrderState */
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const OrderStates = (/* unused pure expression or super */ null && ([
    "Pendiente",
    "Confirmado",
    "Pagado",
    "Enviando",
    "Entregado"
]));
const getOrderState = (id)=>{
    switch(id){
        case 0:
            return "Pendiente";
            break;
        case 1:
            return "Confirmado";
            break;
        case 2:
            return "Pagado";
            break;
        case 3:
            return "Enviando";
            break;
        case 4:
            return "Entregado";
            break;
        default:
            return "Pendiente";
            break;
    }
};
/* PetSchema will correspond to a collection in your MongoDB database. */ const OrderSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    nameShop: {
        type: String,
        required: [
            true
        ]
    },
    ruc: {
        type: String,
        required: [
            true
        ]
    },
    phone: {
        type: String,
        required: [
            true
        ]
    },
    name: {
        type: String,
        required: [
            true,
            "Please provide a name."
        ],
        maxlength: [
            60,
            "Name cannot be more than 60 characters"
        ]
    },
    lastname: {
        type: String,
        required: [
            true,
            "Please provide a lastname."
        ],
        maxlength: [
            60,
            "Name cannot be more than 60 characters"
        ]
    },
    direction: {
        type: String,
        required: [
            true,
            "Please provide a direction."
        ],
        maxlength: [
            60,
            "Name cannot be more than 60 characters"
        ]
    },
    maxDate: {
        type: String,
        required: [
            true,
            "Please provide a Date."
        ]
    },
    state: {
        type: Number,
        required: [
            true,
            "Please provide a state."
        ],
        maxlength: [
            60,
            "Name cannot be more than 60 characters"
        ]
    },
    items: {
        type: Object,
        required: [
            true,
            "Please provide a items."
        ]
    },
    payType: {
        type: Number,
        required: [
            true,
            "Please provide a pay type."
        ]
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).orders || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("orders", OrderSchema));


/***/ }),

/***/ 40063:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(74937);


/***/ })

};
;