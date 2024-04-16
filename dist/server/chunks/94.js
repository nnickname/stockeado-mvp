"use strict";
exports.id = 94;
exports.ids = [94];
exports.modules = {

/***/ 94:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ol: () => (/* binding */ createQuote),
/* harmony export */   QR: () => (/* binding */ getQuotes),
/* harmony export */   UO: () => (/* binding */ deleteQuote),
/* harmony export */   UR: () => (/* binding */ confirmQuote),
/* harmony export */   Wz: () => (/* binding */ editQuote)
/* harmony export */ });
/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14328);

const createQuote = async (body)=>{
    try {
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/quotess", {
            ...body
        }, {
            headers: {
                authorization: "41212756478495-stockea2.token-auth"
            }
        });
        if (response?.data?.quote !== undefined) {
            return response?.data?.quote;
        } else return null;
    } catch (error) {
        return null;
    }
};
const editQuote = async (body)=>{
    try {
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/quotess/edit", {
            ...body
        }, {
            headers: {
                authorization: "41212756478495-stockea2.token-auth"
            }
        });
        if (response?.data?.quote !== undefined) {
            return response?.data?.quote;
        } else return null;
    } catch (error) {
        return null;
    }
};
const getQuotes = async (id)=>{
    try {
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/quotess", {
            headers: {
                "token": id,
                authorization: "41212756478495-stockea2.token-auth"
            }
        });
        return response?.data?.quotes;
    } catch (error) {
        return null;
    }
};
const confirmQuote = async (id)=>{
    try {
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/quotess/edit", {
            headers: {
                "token": id,
                authorization: "41212756478495-stockea2.token-auth"
            }
        });
        return response?.data?.quote;
    } catch (error) {
        return null;
    }
};
const deleteQuote = async (id)=>{
    try {
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/quotess/delete", {
            headers: {
                "token": id,
                authorization: "41212756478495-stockea2.token-auth"
            }
        });
        return response?.data?.quote;
    } catch (error) {
        return null;
    }
};


/***/ })

};
;