exports.id = 8088;
exports.ids = [8088];
exports.modules = {

/***/ 28088:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_images_logo_logopreferente_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57286);
/* harmony import */ var _public_images_logo_blueimage_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23360);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5874);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(52451);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _reacticons_ionicons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(99816);
/* harmony import */ var _reacticons_ionicons__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_reacticons_ionicons__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(18284);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57114);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_7__);
/* __next_internal_client_entry_do_not_use__ default auto */ 








const SideBarComponent = ({ user, frameContennt, route })=>{
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const cookies = new (universal_cookie__WEBPACK_IMPORTED_MODULE_8___default())();
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "responsiveButtonViewNavigation",
                style: {
                    display: "none",
                    width: "100%",
                    textAlign: "right"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    style: {
                        fontSize: ".9rem",
                        color: "grey",
                        position: "absolute",
                        top: "1rem",
                        right: "1rem"
                    },
                    onClick: ()=>setOpen(!open),
                    children: open ? "Esconder barra de navegaci\xf3n" : "Mostrar barra de navegaci\xf3n"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "sideBar",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "sidebarCustomStyle",
                        style: {
                            display: open ? "block" : "none"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                src: _public_images_logo_logopreferente_png__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
                                alt: "Logo"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                className: "avatar",
                                alt: "",
                                src: user?.imageLogo !== "" ? user?.imageLogo : _public_images_logo_blueimage_png__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.src
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                className: "title",
                                children: user?.nameShop
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginTop: "3rem"
                                }
                            }),
                            user?.type === "workshop" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "list",
                                onClick: ()=>{
                                    router.push("/quotes");
                                    setTimeout(()=>{
                                        window.location.reload();
                                    }, 1500);
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_reacticons_ionicons__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        style: {
                                            color: route === "quoutes" ? "#1570EF" : "#25d366"
                                        },
                                        className: "icon",
                                        name: "cash-outline"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            color: route === "quotes" ? "#1570EF" : "black"
                                        },
                                        className: "text",
                                        children: "Cotizaciones"
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "list",
                                        onClick: ()=>router.push("/hub"),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_reacticons_ionicons__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                style: {
                                                    color: route === "dashboard" ? "#1570EF" : "black"
                                                },
                                                className: "icon",
                                                name: "home-outline"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                style: {
                                                    color: route === "dashboard" ? "#1570EF" : "black"
                                                },
                                                className: "text",
                                                children: "Dashboard"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "list",
                                        onClick: ()=>{
                                            router.push("/inventory", {});
                                            setTimeout(()=>{
                                                window.location.reload();
                                            }, 1500);
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_reacticons_ionicons__WEBPACK_IMPORTED_MODULE_5___default()), {
                                                style: {
                                                    color: route === "inventory" ? "#1570EF" : "black"
                                                },
                                                className: "icon",
                                                name: "cart-outline"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                style: {
                                                    color: route === "inventory" ? "#1570EF" : "black"
                                                },
                                                className: "text",
                                                children: "Inventario Web"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "list",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_reacticons_ionicons__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        style: {
                                            color: route === "request" ? "#1570EF" : "black"
                                        },
                                        className: "icon",
                                        name: "person-outline"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            color: route === "request" ? "#1570EF" : "black"
                                        },
                                        className: "text",
                                        children: "Solicitudes"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                onClick: ()=>router.push("/orders"),
                                className: "list",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_reacticons_ionicons__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        style: {
                                            color: route === "orders" ? "#1570EF" : "black"
                                        },
                                        className: "icon",
                                        name: "mail-unread-outline"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            color: route === "orders" ? "#1570EF" : "black"
                                        },
                                        className: "text",
                                        children: "Ordenes finales"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginTop: "3rem"
                                }
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                onClick: ()=>router.push("/configuration"),
                                className: "list",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_reacticons_ionicons__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        style: {
                                            color: route === "configuration" ? "#1570EF" : "black"
                                        },
                                        className: "icon",
                                        name: "settings-outline"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        style: {
                                            color: route === "configuration" ? "#1570EF" : "black"
                                        },
                                        className: "text",
                                        children: "Configuraci\xf3n"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "list logout",
                                onClick: async ()=>{
                                    cookies.remove("access_token");
                                    router.push("/signin");
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((_reacticons_ionicons__WEBPACK_IMPORTED_MODULE_5___default()), {
                                        className: "icon",
                                        name: "log-out-outline"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        className: "text",
                                        children: "Cerrar sesi\xf3n"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "sideBarContainer",
                        children: frameContennt
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SideBarComponent);


/***/ }),

/***/ 23360:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/blueimage.a34531f7.png","height":194,"width":259,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAA1BMVEUAAP+KeNJXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAADElEQVR4nGNgIAcAAAA2AAG2dLktAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 57286:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/logopreferente.bbc72056.png","height":200,"width":640,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAHlBMVEUrQY0bK0ssU7ktSaUdMWEzXNUYJDsYIzwqS6wnQoxrmA7DAAAACnRSTlMEGSAOboSRcmx7+e+bqwAAAAlwSFlzAAALEwAACxMBAJqcGAAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAgSURBVHicY2BkYGBmAGE2dhYWTg5WVgZGRkZGJiYmJgADaQBE56VQMAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ 5874:
/***/ (() => {



/***/ })

};
;