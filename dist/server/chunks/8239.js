exports.id = 8239;
exports.ids = [8239];
exports.modules = {

/***/ 53315:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kb: () => (/* binding */ findRandomProducts),
/* harmony export */   V_: () => (/* binding */ findProduct),
/* harmony export */   li: () => (/* binding */ findMostViewedShops)
/* harmony export */ });
/* harmony import */ var _call__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14328);

const findProduct = async (keyword)=>{
    try {
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/marketplacee", {
            headers: {
                "token": keyword
            }
        });
        if (response?.data?.items !== undefined) {
            return response?.data?.items;
        } else return null;
    } catch (error) {
        return null;
    }
};
const findRandomProducts = async ()=>{
    try {
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/marketplacee/random");
        if (response?.data?.items !== undefined) {
            return response?.data?.items;
        } else return null;
    } catch (error) {
        return null;
    }
};
const findMostViewedShops = async ()=>{
    try {
        const response = await _call__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("/marketplacee/mostviewed");
        if (response?.data?.items !== undefined) {
            return response?.data?.items;
        } else return null;
    } catch (error) {
        return null;
    }
};


/***/ }),

/***/ 34884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53608);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_tiny_popover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(36413);
/* harmony import */ var react_tiny_popover__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_tiny_popover__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reacticons_ionicons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99816);
/* harmony import */ var _reacticons_ionicons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_reacticons_ionicons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_5__);
/* __next_internal_client_entry_do_not_use__ default auto */ 





const CardMarketPlace = ({ item, setCart, setAmmountItem, ammountItem, cart })=>{
    const [isPopoverOpen, setIsPopoverOpen] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "cardMarketPlace",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "contentImage",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                    style: {
                        cursor: "pointer",
                        maxHeight: "200px"
                    },
                    onClick: ()=>router.push("/marketplace/item?id=" + item._id),
                    src: item?.image,
                    alt: "Item Image"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "card-content",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        display: "flex",
                        justifyContent: "space-between"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    style: {
                                        fontSize: "1rem",
                                        color: "#3e9c35"
                                    },
                                    children: [
                                        " s/. ",
                                        Number(item?.priceSelling).toFixed(2) ?? 0
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                    style: {
                                        cursor: "pointer"
                                    },
                                    onClick: ()=>router.push("/marketplace/item?id=" + item._id),
                                    children: [
                                        item?.name + " ",
                                        "  ",
                                        item?.model ?? ""
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_tiny_popover__WEBPACK_IMPORTED_MODULE_2__.Popover, {
                                containerStyle: {
                                    backgroundColor: "white",
                                    padding: "1rem",
                                    border: "1px solid rgba(0, 0, 0, 0.2)",
                                    borderRadius: ".5rem"
                                },
                                isOpen: isPopoverOpen,
                                positions: [
                                    "top",
                                    "bottom",
                                    "left",
                                    "right"
                                ],
                                content: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            value: ammountItem,
                                            onChange: (e)=>setAmmountItem(Number(e?.target?.value)),
                                            min: "0",
                                            max: item?.ammount,
                                            style: {
                                                padding: ".5rem",
                                                border: "1px solid rgba(0,0,0, 0.1)",
                                                width: "100%"
                                            },
                                            type: "number",
                                            placeholder: "Cantidad"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                            onClick: ()=>{
                                                if (ammountItem > 0) {
                                                    const cartCast = [
                                                        ...cart,
                                                        {
                                                            item: item ?? {},
                                                            ammount: ammountItem
                                                        }
                                                    ];
                                                    setCart(cartCast);
                                                    sessionStorage.setItem("cart", String(JSON.stringify(cartCast)));
                                                    setIsPopoverOpen(false);
                                                }
                                            },
                                            style: {
                                                marginTop: "1rem",
                                                padding: ".5rem",
                                                textAlign: "center",
                                                width: "100%",
                                                background: "green",
                                                color: "white"
                                            },
                                            children: "A\xf1adir al carrito"
                                        })
                                    ]
                                }),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        padding: ".3rem",
                                        borderRadius: ".5rem",
                                        color: "#3662E3",
                                        fontSize: "1rem",
                                        cursor: "pointer",
                                        border: "1px solid rgba(0, 0, 0, 0.1)"
                                    },
                                    onClick: ()=>{
                                        setIsPopoverOpen(!isPopoverOpen), setAmmountItem(0);
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_reacticons_ionicons__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        style: {
                                            fontSize: "1.5rem"
                                        },
                                        name: "cart-outline"
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CardMarketPlace);


/***/ }),

/***/ 92526:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reacticons_ionicons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(99816);
/* harmony import */ var _reacticons_ionicons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reacticons_ionicons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Pagination = ({ setCurrentPage, currentPage, postPerPage, postData })=>{
    const renderPages = [];
    for(var i = 0; i <= postData.length / postPerPage; i++)renderPages.push({});
    console.log(postData.length);
    //on clicking next
    const nextHandle = ()=>{
        currentPage < postData.length / postPerPage && setCurrentPage((page)=>page + 1);
    };
    //on clicking previous
    const previousHandle = ()=>{
        currentPage > 1 && setCurrentPage((page)=>page - 1);
    };
    //on clicking page number
    const clickPageNumber = (pageNumber)=>{
        setCurrentPage(pageNumber);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "responsiveNavMarketplace",
        style: {
            marginTop: "1rem",
            display: "flex",
            justifyContent: "space-between"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                style: {
                    padding: ".5rem",
                    cursor: "pointer"
                },
                onClick: previousHandle,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_reacticons_ionicons__WEBPACK_IMPORTED_MODULE_1___default()), {
                    name: "arrow-back-outline"
                })
            }),
            postData.length > 0 && renderPages.map((_, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    style: {
                        cursor: "pointer",
                        padding: ".5rem"
                    },
                    className: currentPage === index + 1 && "active_pagenumber",
                    onClick: ()=>clickPageNumber(index + 1),
                    children: index + 1
                }, index)),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                style: {
                    padding: ".5rem",
                    cursor: "pointer"
                },
                onClick: nextHandle,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_reacticons_ionicons__WEBPACK_IMPORTED_MODULE_1___default()), {
                    name: "arrow-forward-outline"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Pagination);


/***/ }),

/***/ 35514:
/***/ (() => {



/***/ }),

/***/ 2032:
/***/ (() => {



/***/ }),

/***/ 53608:
/***/ (() => {



/***/ })

};
;