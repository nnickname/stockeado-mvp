"use strict";
exports.id = 627;
exports.ids = [627];
exports.modules = {

/***/ 627:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $v: () => (/* binding */ getInventory),
/* harmony export */   Dk: () => (/* binding */ editInventory),
/* harmony export */   RF: () => (/* binding */ getMarketPlace),
/* harmony export */   RZ: () => (/* binding */ createManyInventories),
/* harmony export */   Rd: () => (/* binding */ createInventory),
/* harmony export */   SI: () => (/* binding */ getInventoryById),
/* harmony export */   qU: () => (/* binding */ deleteInventory)
/* harmony export */ });
/* unused harmony exports setCartCookies, getCartCookies */
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18284);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14328);


const setCartCookies = (name, value)=>{
    const cookies = new Cookie();
    cookies.set(name, value, {
        path: "/"
    });
};
const getCartCookies = ()=>{
    const cookies = new Cookie();
    const cart = cookies.getAll();
    return cart;
};
const deleteInventory = async (id)=>{
    try {
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/inventoryy/edit", {
            headers: {
                "id": id,
                authorization: "41212756478495-stockea2.token-auth"
            }
        });
        if (response?.data?.deleted !== undefined) {
            return true;
        } else return false;
    } catch (error) {
        return false;
    }
};
const createInventory = async (body)=>{
    try {
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/inventoryy", {
            ...body
        }, {
            headers: {
                authorization: "41212756478495-stockea2.token-auth"
            }
        });
        if (response?.data?.item !== undefined) {
            return true;
        } else return false;
    } catch (error) {
        return false;
    }
};
const getInventoryById = async (id)=>{
    try {
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/inventoryy/load", {
            headers: {
                "id": id,
                authorization: "41212756478495-stockea2.token-auth"
            }
        });
        console.log(response);
        if (response?.data?.item !== undefined) {
            return response?.data?.item;
        } else return null;
    } catch (error) {
        return null;
    }
};
const createManyInventories = async (body)=>{
    try {
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/inventoryy/load", {
            items: [
                ...body
            ]
        }, {
            headers: {
                authorization: "41212756478495-stockea2.token-auth"
            }
        });
        if (response?.data?.item !== undefined) {
            return true;
        } else return false;
    } catch (error) {
        return false;
    }
};
const editInventory = async (body)=>{
    try {
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/inventoryy/edit", {
            ...body
        }, {
            headers: {
                authorization: "41212756478495-stockea2.token-auth"
            }
        });
        if (response?.data?.item !== undefined) {
            return true;
        } else return false;
    } catch (error) {
        return false;
    }
};
const getInventory = async ()=>{
    try {
        const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_1___default())();
        const token = cookies.get("access_token");
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/inventoryy", {
            headers: {
                "token": token,
                authorization: "41212756478495-stockea2.token-auth"
            }
        });
        return response?.data?.items;
    } catch (error) {
        return null;
    }
};
const getMarketPlace = async (id)=>{
    try {
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/inventoryy/marketplace", {
            headers: {
                "id": id,
                authorization: "41212756478495-stockea2.token-auth"
            }
        });
        return response?.data;
    } catch (error) {
        return null;
    }
};


/***/ })

};
;