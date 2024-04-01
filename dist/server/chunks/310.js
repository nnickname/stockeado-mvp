"use strict";
exports.id = 310;
exports.ids = [310];
exports.modules = {

/***/ 310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GA: () => (/* binding */ getUserById),
/* harmony export */   PR: () => (/* binding */ getUser),
/* harmony export */   pH: () => (/* binding */ loginUser),
/* harmony export */   r4: () => (/* binding */ createUser),
/* harmony export */   uz: () => (/* binding */ editUser)
/* harmony export */ });
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18284);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14328);


const loginUser = async (email, password)=>{
    try {
        const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_1___default())();
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/userr/login", {
            email,
            password
        });
        if (response?.data?.user !== undefined) {
            cookies.set("access_token", response?.data?.token, {
                path: "/"
            });
            return true;
        } else return false;
    } catch (error) {
        return false;
    }
};
const getUserById = async (id)=>{
    try {
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/userr/login", {
            headers: {
                "token": id
            }
        });
        console.log(response);
        return response?.data?.user;
    } catch (error) {
        return null;
    }
};
const getUser = async ()=>{
    try {
        const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_1___default())();
        const token = cookies.get("access_token");
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/userr", {
            headers: {
                "token": token
            }
        });
        return response?.data?.user;
    } catch (error) {
        return null;
    }
};
const editUser = async (body)=>{
    try {
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/userr/edit", {
            ...body
        });
        if (response?.data?.user !== undefined) {
            return true;
        } else return false;
    } catch (error) {
        return false;
    }
};
const createUser = async (body)=>{
    try {
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.post("/userr/edit/create", {
            ...body
        });
        if (response?.data?.user !== undefined && response?.data?.user !== null) {
            return true;
        } else return false;
    } catch (error) {
        return false;
    }
};


/***/ })

};
;