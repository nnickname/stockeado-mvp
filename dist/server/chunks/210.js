"use strict";
exports.id = 210;
exports.ids = [210];
exports.modules = {

/***/ 74322:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76931);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_marketplace_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71142);
/* harmony import */ var react_responsive_modal_styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42055);
/* harmony import */ var react_responsive_modal_styles_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_modal_styles_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_marketplace_background_background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(72549);
/* harmony import */ var _models_brands__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(15431);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(35514);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_marketplace_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34884);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17640);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api_marketplacee_call__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(53315);
/* harmony import */ var _reacticons_ionicons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(99816);
/* harmony import */ var _reacticons_ionicons__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_reacticons_ionicons__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_tiny_popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(36413);
/* harmony import */ var react_tiny_popover__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_tiny_popover__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_marketplace_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(92526);
/* harmony import */ var _components_dashboard_Footer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90507);
/* __next_internal_client_entry_do_not_use__ default auto */ 












const LayoutMarketPlaceNative = ()=>{
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const [openAdd, setOpenAdd] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const [cart, setCart] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
    const [realItems, setRealItems] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
    const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);
    const [ammountItem, setAmmountItem] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(0);
    const [mostViewed, setMostViewed] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
    const findStaticProducts = async ()=>{
        const response = await (0,_api_marketplacee_call__WEBPACK_IMPORTED_MODULE_7__/* .findRandomProducts */ .Kb)();
        const responseMostViewed = await (0,_api_marketplacee_call__WEBPACK_IMPORTED_MODULE_7__/* .findMostViewedShops */ .li)() ?? [];
        if (responseMostViewed !== null) setMostViewed(responseMostViewed);
        if (response !== null) setItems(response);
        if (response !== null) setRealItems(response);
        setLoading(true);
    };
    const filterByBrand = (brand, checked)=>{
        if (checked) {
            setItems(realItems.filter((item)=>Number(item.brand === brand)));
        } else setItems(realItems);
    };
    const filterByType = (type, checked)=>{
        if (checked) {
            setItems(realItems.filter((item)=>Number(item.type === type)));
        } else setItems(realItems);
    };
    const filterByCategorie = (categorie, checked)=>{
        if (checked) {
            setItems(realItems.filter((item)=>Number(item.categorie === categorie)));
        } else setItems(realItems);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        findStaticProducts();
        const cartCast = JSON.parse(sessionStorage.getItem("cart"));
        if (cartCast !== undefined) setCart(cartCast ?? []);
    }, []);
    const [keywordFind, setKeyword] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)("");
    const findProductAndSet = async ()=>{
        if (keywordFind?.length > 1) {
            const response = await (0,_api_marketplacee_call__WEBPACK_IMPORTED_MODULE_7__/* .findProduct */ .V_)(keywordFind);
            setItems(response ?? []);
        } else setItems(realItems);
    };
    const [isPopoverOpenBrand, setPopoverOpenBrand] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const [isPopoverOpenCategorie, setPopoverOpenCategorie] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const [isPopoverOpenType, setPopoverOpenType] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const [currentPage, setCurrentPage] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(1);
    const postPerPage = 18;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: items === null ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_reacticons_ionicons__WEBPACK_IMPORTED_MODULE_8___default()), {
            name: "chevron-collapse-outline",
            className: "rotateItem",
            color: "#1366D9",
            style: {
                fontSize: "1.5rem",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)"
            }
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_marketplace_header__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                    cartItems: cart,
                    setCart: setCart
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_marketplace_background_background__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "marketplace displayBlockResponsive",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "sidebarM hideResponsive",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        display: "flex"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                style: {
                                                    marginTop: "auto",
                                                    width: "100%",
                                                    padding: "1.1rem",
                                                    height: "40px",
                                                    border: "1px solid grey"
                                                },
                                                onChange: (e)=>setKeyword(e.target.value),
                                                type: "text",
                                                name: "email",
                                                placeholder: "N\xfamero de parte",
                                                value: keywordFind
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                style: {
                                                    height: "40px",
                                                    paddingLeft: "1rem",
                                                    paddingRight: "1rem",
                                                    border: "1px solid grey"
                                                },
                                                onClick: ()=>findProductAndSet(),
                                                children: "Buscar"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    style: {
                                        marginTop: "1rem"
                                    },
                                    children: "Categorias"
                                }),
                                _models_brands__WEBPACK_IMPORTED_MODULE_12__/* .TypeCategories */ .FM.map((e, index)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            marginTop: ".4rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                onChange: (e)=>filterByCategorie(index, e.target.checked),
                                                type: "checkbox",
                                                style: {
                                                    marginRight: ".5rem"
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: e
                                            })
                                        ]
                                    }, index);
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        marginTop: ".5rem",
                                        marginBottom: ".5rem",
                                        width: "100%",
                                        height: "1px",
                                        background: "rgba(0,0,0, 0.2)"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: "Tipo de pieza"
                                }),
                                _models_brands__WEBPACK_IMPORTED_MODULE_12__/* .TypeOfPiece */ .rM.map((e, index)=>{
                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            marginTop: ".4rem"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                onChange: (e)=>filterByType(index, e.target.checked),
                                                type: "checkbox",
                                                style: {
                                                    marginRight: ".5rem"
                                                }
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                children: e
                                            })
                                        ]
                                    }, index);
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        marginTop: ".5rem",
                                        marginBottom: ".5rem",
                                        width: "100%",
                                        height: "1px",
                                        background: "rgba(0,0,0, 0.2)"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                    children: "Marcas"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                    children: _models_brands__WEBPACK_IMPORTED_MODULE_12__/* .TypeBrands */ .PX.map((e, index)=>{
                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                marginTop: ".4rem"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    name: "colors",
                                                    onChange: (e)=>filterByBrand(index, e.target.checked),
                                                    type: "checkbox",
                                                    id: "colors",
                                                    style: {
                                                        marginRight: ".5rem"
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: e
                                                })
                                            ]
                                        }, index);
                                    })
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "sidebarM showResponsive",
                            style: {
                                display: "none"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        display: "flex"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                style: {
                                                    marginTop: "auto",
                                                    width: "100%",
                                                    padding: "1.1rem",
                                                    height: "40px",
                                                    border: "1px solid grey"
                                                },
                                                onChange: (e)=>setKeyword(e.target.value),
                                                type: "text",
                                                name: "email",
                                                placeholder: "N\xfamero de parte",
                                                value: keywordFind
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                style: {
                                                    height: "40px",
                                                    paddingLeft: "1rem",
                                                    paddingRight: "1rem",
                                                    border: "1px solid grey"
                                                },
                                                onClick: ()=>findProductAndSet(),
                                                children: "Buscar"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "displayFlexResponsive",
                                    style: {
                                        marginTop: "2rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_tiny_popover__WEBPACK_IMPORTED_MODULE_9__.Popover, {
                                            onClickOutside: ()=>setPopoverOpenCategorie(false),
                                            containerStyle: {
                                                backgroundColor: "white",
                                                padding: "1.3rem",
                                                border: "1px solid rgba(0, 0, 0, 0.2)",
                                                borderRadius: ".5rem"
                                            },
                                            isOpen: isPopoverOpenCategorie,
                                            positions: [
                                                "bottom",
                                                "top",
                                                "left",
                                                "right"
                                            ],
                                            content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                                children: _models_brands__WEBPACK_IMPORTED_MODULE_12__/* .TypeCategories */ .FM.map((e, index)=>{
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        onClick: ()=>setPopoverOpenCategorie(false),
                                                        style: {
                                                            cursor: "pointer",
                                                            display: "flex",
                                                            marginTop: ".4rem"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                onChange: (e)=>filterByCategorie(index, e.target.checked),
                                                                type: "checkbox",
                                                                style: {
                                                                    marginRight: ".5rem"
                                                                }
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: e
                                                            })
                                                        ]
                                                    }, index);
                                                })
                                            }),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                onClick: ()=>setPopoverOpenCategorie(true),
                                                children: "Categorias"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_tiny_popover__WEBPACK_IMPORTED_MODULE_9__.Popover, {
                                            onClickOutside: ()=>setPopoverOpenType(false),
                                            containerStyle: {
                                                backgroundColor: "white",
                                                padding: "1.3rem",
                                                border: "1px solid rgba(0, 0, 0, 0.2)",
                                                borderRadius: ".5rem"
                                            },
                                            isOpen: isPopoverOpenType,
                                            positions: [
                                                "bottom",
                                                "top",
                                                "left",
                                                "right"
                                            ],
                                            content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                                children: _models_brands__WEBPACK_IMPORTED_MODULE_12__/* .TypeOfPiece */ .rM.map((e, index)=>{
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        onClick: ()=>setPopoverOpenType(false),
                                                        style: {
                                                            cursor: "pointer",
                                                            display: "flex",
                                                            marginTop: ".4rem"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                onChange: (e)=>filterByType(index, e.target.checked),
                                                                type: "checkbox",
                                                                style: {
                                                                    marginRight: ".5rem"
                                                                }
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: e
                                                            })
                                                        ]
                                                    }, index);
                                                })
                                            }),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                onClick: ()=>setPopoverOpenType(true),
                                                children: "Tipo de pieza"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_tiny_popover__WEBPACK_IMPORTED_MODULE_9__.Popover, {
                                            onClickOutside: ()=>setPopoverOpenBrand(false),
                                            containerStyle: {
                                                backgroundColor: "white",
                                                padding: "1.3rem",
                                                border: "1px solid rgba(0, 0, 0, 0.2)",
                                                borderRadius: ".5rem"
                                            },
                                            isOpen: isPopoverOpenBrand,
                                            positions: [
                                                "bottom",
                                                "top",
                                                "left",
                                                "right"
                                            ],
                                            content: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                                                children: _models_brands__WEBPACK_IMPORTED_MODULE_12__/* .TypeBrands */ .PX.map((e, index)=>{
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        onClick: ()=>setPopoverOpenBrand(false),
                                                        style: {
                                                            cursor: "pointer",
                                                            display: "flex",
                                                            marginTop: ".4rem"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                name: "colors",
                                                                onChange: (e)=>filterByBrand(index, e.target.checked),
                                                                type: "checkbox",
                                                                id: "colors",
                                                                style: {
                                                                    marginRight: ".5rem"
                                                                }
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                children: e
                                                            })
                                                        ]
                                                    }, index);
                                                })
                                            }),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                onClick: ()=>setPopoverOpenBrand(true),
                                                children: "Marcas"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "contentM",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        marginTop: "0rem",
                                        padding: ".6rem",
                                        width: "100%",
                                        borderRadius: ".5rem",
                                        border: "1px solid rgba(0, 0, 0, 0.2)"
                                    },
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                        children: [
                                            "Se encontraron ",
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                style: {
                                                    fontWeight: "700"
                                                },
                                                children: [
                                                    "+",
                                                    items?.length,
                                                    " productos"
                                                ]
                                            })
                                        ]
                                    })
                                }),
                                items?.length > 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "gridItems",
                                            children: items?.slice(currentPage * postPerPage - postPerPage, currentPage * postPerPage).map((e, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_marketplace_item__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                    item: e,
                                                    setCart: setCart,
                                                    setAmmountItem: setAmmountItem,
                                                    ammountItem: ammountItem,
                                                    cart: cart
                                                }, index))
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_marketplace_pagination__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {
                                            setCurrentPage: setCurrentPage,
                                            currentPage: currentPage,
                                            postPerPage: postPerPage,
                                            postData: items ?? []
                                        })
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: " "
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_dashboard_Footer__WEBPACK_IMPORTED_MODULE_11__["default"], {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutMarketPlaceNative);


/***/ }),

/***/ 52819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\barto\OneDrive\Desktop\stockeado\stockeado-mvp\app\marketplace\layoutMP.tsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;