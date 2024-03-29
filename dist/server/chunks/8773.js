exports.id = 8773;
exports.ids = [8773];
exports.modules = {

/***/ 98773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports getTotalPriceInventory, getNoneStock, getLowStockAmmount, getTotalBrands */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3579);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _models_brands__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15431);



const getTotalPriceInventory = (cartItems)=>{
    var price = 0;
    cartItems?.map((e)=>{
        price = price + Number(e?.priceSelling) * e?.ammount;
    });
    return String(price.toFixed(2));
};
const getTotalItems = (orders, id)=>{
    var count = 0;
    orders?.map((e)=>{
        if (Number(e?.state) > 0) e?.items?.map((a)=>{
            if (String(a.item.owner_id) === id) count = count + Number(a.ammount);
        });
    });
    return count;
};
const getTotalValueinS = (orders, id)=>{
    var count = 0;
    orders?.map((e)=>{
        if (Number(e?.state) > 0) e?.items?.map((a)=>{
            if (String(a.item.owner_id) === id) count = count + Number(a.item?.priceSelling) * Number(a.ammount);
        });
    });
    return count.toFixed(2);
};
const getNoneStock = (cartItems)=>{
    var low = 0;
    cartItems?.map((e)=>{
        if (e?.ammount < 1) {
            low++;
        }
    });
    return String(low);
};
const getLowStockAmmount = (cartItems)=>{
    var low = 0;
    cartItems?.map((e)=>{
        if (e?.ammount < 5) {
            low++;
        }
    });
    return String(low);
};
const getTotalBrands = (cartItems)=>{
    var brands = [];
    var validatemoment;
    cartItems?.map((e)=>{
        for(var i = 0; i < brands?.length; i++){
            if (brands[i] === _models_brands__WEBPACK_IMPORTED_MODULE_2__/* .TypeBrands */ .PX[e?.brand]) {
                validatemoment = true;
            } else validatemoment = false;
            if (i === 0) brands.slice(0, 1);
        }
        if (!validatemoment) brands.push(_models_brands__WEBPACK_IMPORTED_MODULE_2__/* .TypeBrands */ .PX[e?.brand]);
    });
    return String(brands?.length);
};
const InventoryResume = ({ items, orders, user })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "content-frame-container resume",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            style: {
                width: "100%",
                textAlign: "left"
            },
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: "Resumen de Inventario"
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "resumeContainer displayGridResponsive",
                    style: {
                        display: "flex"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                padding: "1rem",
                                paddingRight: "3rem",
                                borderRight: "1px solid rgba(230, 230, 230, 0.5)"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    style: {
                                        color: "#1570EF",
                                        marginBottom: ".3rem"
                                    },
                                    children: "Marcas"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                    children: getTotalBrands(items)
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                padding: "1rem",
                                width: "100%",
                                borderRight: "1px solid rgba(230, 230, 230, 0.5)"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    style: {
                                        color: "#E19133",
                                        marginBottom: ".3rem"
                                    },
                                    children: "Total productos"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginBottom: ".3rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: items?.length
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: getTotalPriceInventory(items)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: {
                                                color: "#858D9D",
                                                fontSize: ".8rem"
                                            },
                                            children: "Productos"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: {
                                                color: "#858D9D",
                                                fontSize: ".8rem"
                                            },
                                            children: " Valor en soles"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                padding: "1rem",
                                width: "100%",
                                borderRight: "1px solid rgba(230, 230, 230, 0.5)"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    style: {
                                        color: "#58D365",
                                        marginBottom: ".3rem"
                                    },
                                    children: "Total ventas"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginBottom: ".3rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: getTotalItems(orders, String(user?._id))
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                " ",
                                                getTotalValueinS(orders, String(user?._id))
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: {
                                                color: "#858D9D",
                                                fontSize: ".8rem"
                                            },
                                            children: "Unidades"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: {
                                                color: "#858D9D",
                                                fontSize: ".8rem"
                                            },
                                            children: " Valor en soles"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                padding: "1rem",
                                width: "100%"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    style: {
                                        color: "#F36960",
                                        marginBottom: ".3rem"
                                    },
                                    children: "Bajo Stock"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginBottom: ".3rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            children: getLowStockAmmount(items)
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                " ",
                                                getNoneStock(items)
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                            style: {
                                                color: "#858D9D",
                                                fontSize: ".8rem"
                                            },
                                            children: "productos"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            style: {
                                                color: "#858D9D",
                                                fontSize: ".8rem"
                                            },
                                            children: [
                                                " ",
                                                "sin stock"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (InventoryResume);


/***/ }),

/***/ 15431:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FM: () => (/* binding */ TypeCategories),
/* harmony export */   PX: () => (/* binding */ TypeBrands),
/* harmony export */   rM: () => (/* binding */ TypeOfPiece)
/* harmony export */ });
const TypeBrands = [
    "Toyota",
    "Nissan",
    "Hyundai",
    "BMW",
    "Mercedes Benz",
    "Kia",
    "Chevrolet",
    "Mitsubishi",
    "Peugeot",
    "Suzuki",
    "Mazda",
    "Volkswagen",
    "Audi",
    "Jeep",
    "Land Rover",
    "Volvo",
    "Mini",
    "Porsche",
    "Geely",
    "Otro"
];
const TypeCategories = [
    "Partes de motor",
    "Neumaticos",
    "Otro"
];
const TypeOfPiece = [
    "Genuino",
    "Original",
    "Alternativo"
];


/***/ }),

/***/ 3579:
/***/ (() => {



/***/ })

};
;