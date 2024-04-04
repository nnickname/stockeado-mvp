"use strict";
exports.id = 4892;
exports.ids = [4892];
exports.modules = {

/***/ 59198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AU: () => (/* binding */ getOrders),
/* harmony export */   LV: () => (/* binding */ createOrder),
/* harmony export */   co: () => (/* binding */ getOrder),
/* harmony export */   oW: () => (/* binding */ updateOrderState)
/* harmony export */ });
/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14328);

const createOrder = async (body)=>{
    try {
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/orderss", {
            ...body
        }, {
            headers: {
                authorization: "4756478495-stockea2.token-auth"
            }
        });
        console.log(response);
        if (response?.data?.order !== undefined) {
            return response?.data?.order;
        } else return null;
    } catch (error) {
        return null;
    }
};
const getOrders = async (id)=>{
    try {
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/orderss/edit", {
            headers: {
                "token": id,
                authorization: "4756478495-stockea2.token-auth"
            }
        });
        console.log(response);
        return response?.data?.orders;
    } catch (error) {
        return null;
    }
};
const updateOrderState = async (body)=>{
    try {
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/orderss/edit", body, {
            headers: {
                authorization: "4756478495-stockea2.token-auth"
            }
        });
        if (response?.data?.order !== undefined) {
            return response?.data?.order;
        } else return null;
    } catch (error) {
        return null;
    }
};
const getOrder = async (id)=>{
    try {
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/orderss", {
            headers: {
                "token": id,
                authorization: "4756478495-stockea2.token-auth"
            }
        });
        return response?.data?.order;
    } catch (error) {
        return null;
    }
};


/***/ }),

/***/ 57286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logopreferente.bbc72056.png","height":200,"width":640,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEUrQY0bK0ssU7ktSaUdMWEzXNUYJDsYIzwqS6wnQoxrmA7DAAAACnRSTlMEGSAOboSRcmx7+e+bqwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAgSURBVHicY2BkYGBmAGE2dhYWTg5WVgZGRkZGJiYmJgADaQBE56VQMAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":3});

/***/ })

};
;