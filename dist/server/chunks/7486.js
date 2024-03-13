"use strict";
exports.id = 7486;
exports.ids = [7486];
exports.modules = {

/***/ 17486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

/* PetSchema will correspond to a collection in your MongoDB database. */ const UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    name: {
        /* The name of this pet */ type: String,
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
        /* The name of this pet */ type: String,
        required: [
            true,
            "Please provide a lastname."
        ],
        maxlength: [
            60,
            "Name cannot be more than 60 characters"
        ]
    },
    nameShop: {
        /* The name of this pet */ type: String,
        required: [
            true,
            "Please provide a nameShop."
        ],
        maxlength: [
            60,
            "Name cannot be more than 60 characters"
        ]
    },
    phone: {
        type: String,
        required: [
            true,
            "Please provide a Phone."
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
    email: {
        type: String,
        required: [
            true,
            "Please provide a email."
        ],
        maxlength: [
            60,
            "Email cannot be more than 60 characters"
        ]
    },
    password: {
        type: String,
        required: [
            true,
            "Please provide the password owner's name"
        ],
        maxlength: [
            60,
            "Password Name cannot be more than 60 characters"
        ]
    },
    visits: {
        type: Number,
        required: [
            true,
            "Please provide the Number"
        ]
    },
    image: {
        type: String,
        required: [
            true,
            "Please provide the image"
        ]
    },
    imageLogo: {
        type: String,
        required: [
            true,
            "Please provide the imageBanner"
        ]
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Users || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Users", UserSchema));


/***/ })

};
;