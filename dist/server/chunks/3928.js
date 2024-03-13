"use strict";
exports.id = 3928;
exports.ids = [3928];
exports.modules = {

/***/ 93928:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);


/* PetSchema will correspond to a collection in your MongoDB database. */ const InventorySchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({
    name: {
        /* The name of this pet */ type: String,
        required: [
            true,
            "Please provide a name."
        ],
        maxlength: [
            160,
            "Name cannot be more than 60 characters"
        ]
    },
    price: {
        /* The name of this pet */ type: String,
        required: [
            true,
            "Please provide a price."
        ],
        maxlength: [
            60,
            "Price cannot be more than 60 characters"
        ]
    },
    stars: {
        /* The name of this pet */ type: Number,
        required: [
            true,
            "Stars"
        ]
    },
    owner_id: {
        /* The name of this pet */ type: String,
        required: [
            true,
            "Please provide a ownerId."
        ],
        maxlength: [
            50,
            "OwnerId cannot be more than 60 characters"
        ]
    },
    type: {
        /* The name of this pet */ type: Number,
        required: [
            true,
            "Please provide a type."
        ]
    },
    brand: {
        /* The name of this pet */ type: Number,
        required: [
            true,
            "Please provide a type."
        ]
    },
    categorie: {
        /* The name of this pet */ type: Number,
        required: [
            true,
            "Please provide a Categorie."
        ]
    },
    ammount: {
        /* The name of this pet */ type: Number,
        required: [
            true,
            "Please provide a amount."
        ]
    },
    sku: {
        /* The name of this pet */ type: String,
        required: [
            true,
            "Please provide a Categorie."
        ]
    },
    sellings: {
        type: Object,
        required: [
            true,
            "Provide a sellings"
        ]
    },
    image: {
        /* The name of this pet */ type: String,
        required: [
            true,
            "Please provide a image."
        ]
    },
    model: {
        /* The name of this pet */ type: String,
        required: [
            true,
            "Please provide a model."
        ]
    },
    inMP: {
        /* The name of this pet */ type: Boolean,
        required: [
            true,
            "Please provide a boolean."
        ]
    },
    priceSelling: {
        /* The name of this pet */ type: String,
        required: [
            true,
            "Please provide a price of Selling."
        ],
        maxlength: [
            60,
            "Price cannot be more than 60 characters"
        ]
    },
    numberPart: {
        /* The name of this pet */ type: String,
        required: [
            true,
            "Please provide a price of Selling."
        ],
        maxlength: [
            160,
            "Price cannot be more than 60 characters"
        ]
    },
    description: {
        /* The name of this pet */ type: String,
        required: [
            true,
            "Please provide a price of Selling."
        ],
        maxlength: [
            260,
            "Price cannot be more than 60 characters"
        ]
    }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Inventories || (0,mongoose__WEBPACK_IMPORTED_MODULE_0__.model)("Inventories", InventorySchema));


/***/ })

};
;