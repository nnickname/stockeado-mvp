exports.id = 1142;
exports.ids = [1142];
exports.modules = {

/***/ 71142:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ marketplace_header),
  m: () => (/* binding */ getTotalPrice)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(17640);
// EXTERNAL MODULE: ./components/marketplace/header/index.css
var header = __webpack_require__(79999);
// EXTERNAL MODULE: ./node_modules/@reacticons/ionicons/lib/IonIcon.js
var IonIcon = __webpack_require__(99816);
var IonIcon_default = /*#__PURE__*/__webpack_require__.n(IonIcon);
// EXTERNAL MODULE: ./node_modules/react-tiny-popover/dist/Popover.js
var Popover = __webpack_require__(36413);
;// CONCATENATED MODULE: ./public/images/favicon.png
/* harmony default export */ const favicon = ({"src":"/_next/static/media/favicon.8adc2b25.png","height":32,"width":32,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAYFBMVEUtULQqSqYxVLgmP4EiP5EZJkMaJkMkSbEXK14LGTjy9frV2OAVI0FBUoAZKlEnRJREW54bMm////+dqMZ7iKiDk7+ruN9hdq6Km840S4yotNMjOnTj5u+do7J4gZcvPWAv54iwAAAACnRSTlPf/////t/f/v7+FeL47QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEVJREFUeJwFwQUCwCAMBLArnQAtztz+/8slgJmNmQ1AtHu/EmHItW1LSuDj9mdmxlW4iw8FNkhvNVjE7xF5Y8SkTtXp+ANjfgMd507WMgAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./components/marketplace/header/index.tsx
/* __next_internal_client_entry_do_not_use__ getTotalPrice,default auto */ 








const getTotalPrice = (cartItems, deliveried)=>{
    var price = 0;
    if (deliveried) price = 15.0;
    cartItems?.map((e)=>{
        price = price + Number(e?.item?.priceSelling) * e?.ammount;
    });
    return String(price);
};
const HeaderMarketPlace = ({ cartItems, setCart })=>{
    const router = (0,navigation.useRouter)();
    // Navbar toggle
    const [navbarOpen, setNavbarOpen] = (0,react_experimental_.useState)(false);
    const navbarToggleHandler = ()=>{
        setNavbarOpen(!navbarOpen);
    };
    // Sticky Navbar
    const [sticky, setSticky] = (0,react_experimental_.useState)(false);
    const handleStickyNavbar = ()=>{
        if (window.scrollY >= 80) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    (0,react_experimental_.useEffect)(()=>{
        window.addEventListener("scroll", handleStickyNavbar);
    });
    // submenu handler
    const [openIndex, setOpenIndex] = (0,react_experimental_.useState)(-1);
    const handleSubmenu = (index)=>{
        if (openIndex === index) {
            setOpenIndex(-1);
        } else {
            setOpenIndex(index);
        }
    };
    const [isPopoverOpen, setIsPopoverOpen] = (0,react_experimental_.useState)(false);
    const [keywordFind, setKeyword] = (0,react_experimental_.useState)("");
    const findProductAndSet = async ()=>{
        if (keywordFind?.length > 3) {
            var keywordCast = keywordFind?.replace(/%20/g, " ");
            router.push("/marketplace/searchus?name=" + String(keywordCast));
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            style: {
                zIndex: 55
            },
            className: `header left-0 top-0 flex w-full items-center ${sticky ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition" : "absolute bg-transparent"}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative -mx-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "py-8 px-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    onClick: ()=>router.push("/dashboard"),
                                    style: {
                                        cursor: "pointer",
                                        display: "none",
                                        width: "50px"
                                    },
                                    className: "showResponsive",
                                    src: favicon.src,
                                    alt: "logo"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                    href: "/dashboard",
                                    className: `header-logo block w-full hideResponsive`,
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/images/logo/color.png",
                                            alt: "logo",
                                            width: 140,
                                            height: 30,
                                            className: "w-full dark:hidden"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                            src: "/images/logo/white.png",
                                            alt: "logo",
                                            width: 140,
                                            height: 30,
                                            className: "hidden w-full dark:block"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "input-search",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((IonIcon_default()), {
                                    name: "search-outline",
                                    className: "iconinput hideResponsive"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    value: keywordFind,
                                    onChange: (e)=>setKeyword(e.target.value),
                                    placeholder: "Busca por nombre de producto",
                                    type: "text"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: ()=>findProductAndSet(),
                                    children: "Buscar"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "cart cartResponsive",
                            onClick: ()=>router.push("/signin"),
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((IonIcon_default()), {
                                    name: "person-outline"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    children: "Cuenta"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Popover.Popover, {
                            containerStyle: {
                                minWidth: "350px",
                                backgroundColor: "white",
                                padding: "1rem",
                                border: "1px solid rgba(0, 0, 0, 0.2)",
                                borderRadius: "0rem 0rem .5rem .5rem"
                            },
                            isOpen: isPopoverOpen,
                            positions: [
                                "bottom",
                                "left",
                                "right",
                                "top"
                            ],
                            content: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    marginTop: "1.5rem"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    paddingBottom: "1rem"
                                                },
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",
                                                        children: "Imagen"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",
                                                        children: "Nombre"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",
                                                        children: "Cantidad"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",
                                                        children: "Precio"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        className: "dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",
                                                        children: "Action"
                                                    })
                                                ]
                                            }),
                                            cartItems?.length === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                style: {
                                                    textAlign: "center",
                                                    color: "grey"
                                                },
                                                children: "Todavia no a\xf1adiste nada"
                                            }) : "",
                                            cartItems?.map((e, index)=>{
                                                const nameString = e?.item?.name + " " + e?.item?.model;
                                                return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                        style: {
                                                            width: "100%",
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            borderBottom: "1px solid rgba(220, 220, 220, .3)"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                                                style: {
                                                                    width: "35px",
                                                                    maxHeight: "35px"
                                                                },
                                                                src: e?.item?.image,
                                                                alt: "Product Image"
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                style: {
                                                                    maxWidth: "100px"
                                                                },
                                                                className: "dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",
                                                                children: [
                                                                    nameString.substring(0, 30),
                                                                    "..."
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                                className: "dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",
                                                                children: String(e?.ammount)
                                                            }),
                                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                className: "dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",
                                                                children: [
                                                                    "s/. ",
                                                                    Number(e?.item?.priceSelling).toFixed(2)
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                                onClick: ()=>{
                                                                    setCart(cartItems.filter((obj, indexx)=>index !== indexx));
                                                                    sessionStorage.setItem("cart", JSON.stringify(cartItems.filter((obj, indexx)=>index !== indexx)));
                                                                },
                                                                style: {
                                                                    color: "#ff6347"
                                                                },
                                                                children: /*#__PURE__*/ jsx_runtime_.jsx((IonIcon_default()), {
                                                                    name: "trash-outline",
                                                                    color: "#ff6347"
                                                                })
                                                            })
                                                        ]
                                                    })
                                                }, index);
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        style: {
                                            marginTop: "1rem",
                                            display: "flex",
                                            justifyContent: "space-between"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                style: {
                                                    fontSize: "1.1rem"
                                                },
                                                children: "Total"
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                children: [
                                                    "s/. ",
                                                    Number(getTotalPrice(cartItems, false)).toFixed(2)
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        onClick: ()=>router.push("/marketplace/payment"),
                                        style: {
                                            padding: ".5rem",
                                            textAlign: "center",
                                            width: "100%",
                                            background: "linear-gradient(180deg, #127FFF 0%, #3662E3 100%)",
                                            color: "white"
                                        },
                                        children: "Ir a pagar"
                                    })
                                ]
                            }),
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "cart cartResponsive",
                                style: {
                                    minWidth: "130px"
                                },
                                onClick: ()=>setIsPopoverOpen(!isPopoverOpen),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((IonIcon_default()), {
                                        name: "cart-outline"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        children: [
                                            "Mi Carrito",
                                            " (" + (cartItems?.length ?? 0) + ")"
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const marketplace_header = (HeaderMarketPlace);


/***/ }),

/***/ 79999:
/***/ (() => {



/***/ })

};
;