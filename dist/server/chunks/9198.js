"use strict";
exports.id = 9198;
exports.ids = [9198];
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
                "token": id
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
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/orderss/edit", body);
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
                "token": id
            }
        });
        return response?.data?.order;
    } catch (error) {
        return null;
    }
};


/***/ })

};
;