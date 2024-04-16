"use strict";
exports.id = 8407;
exports.ids = [8407];
exports.modules = {

/***/ 48407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dashboard_Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./components/dashboard/Header/menuData.tsx
const menuData = [
    {
        id: 1,
        title: "Para talleres",
        path: "/workshops",
        newTab: true
    },
    {
        id: 1,
        title: "Marketplace",
        path: "/marketplace",
        newTab: true
    },
    {
        id: 3,
        title: "Para proveedores",
        path: "/providers",
        newTab: true
    }
];
/* harmony default export */ const Header_menuData = (menuData);

;// CONCATENATED MODULE: ./components/dashboard/Header/index.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Header = ()=>{
    // Navbar toggle
    const [navbarOpen, setNavbarOpen] = (0,react_.useState)(false);
    const navbarToggleHandler = ()=>{
        setNavbarOpen(!navbarOpen);
    };
    // Sticky Navbar
    const [sticky, setSticky] = (0,react_.useState)(false);
    const handleStickyNavbar = ()=>{
        if (window.scrollY >= 80) {
            setSticky(true);
        } else {
            setSticky(false);
        }
    };
    (0,react_.useEffect)(()=>{
        window.addEventListener("scroll", handleStickyNavbar);
    });
    // submenu handler
    const [openIndex, setOpenIndex] = (0,react_.useState)(-1);
    const handleSubmenu = (index)=>{
        if (openIndex === index) {
            setOpenIndex(-1);
        } else {
            setOpenIndex(index);
        }
    };
    const usePathName = (0,navigation.usePathname)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("header", {
            style: {
                zIndex: 55
            },
            className: `header left-0 top-0 z-40 flex w-full items-center ${sticky ? "dark:bg-gray-dark dark:shadow-sticky-dark fixed z-[9999] bg-white !bg-opacity-80 shadow-sticky backdrop-blur-sm transition" : "absolute bg-transparent"}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative -mx-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-60 max-w-full px-4 xl:mr-12",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                href: "/dashboard",
                                className: `header-logo block w-full ${sticky ? "py-5 lg:py-2" : "py-8"} `,
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
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex w-full items-center justify-between px-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            onClick: navbarToggleHandler,
                                            id: "navbarToggler",
                                            "aria-label": "Mobile Menu",
                                            className: "absolute right-4 top-1/2 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: `relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[7px] rotate-45" : " "}`
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: `relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? "opacity-0 " : " "}`
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    className: `relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? " top-[-8px] -rotate-45" : " "}`
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                                            id: "navbarCollapse",
                                            className: `navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${navbarOpen ? "visibility top-full opacity-100" : "invisible top-[120%] opacity-0"}`,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                                className: "block lg:flex lg:space-x-12",
                                                children: Header_menuData.map((menuItem, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "group relative",
                                                        children: menuItem.path ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                            href: menuItem.path,
                                                            className: `flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${usePathName === menuItem.path ? "text-primary dark:text-white" : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"}`,
                                                            children: [
                                                                menuItem.title,
                                                                " ",
                                                                menuItem?.path === "/workshops" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                        style: {
                                                                            marginBottom: ".4rem",
                                                                            color: "green",
                                                                            fontSize: ".6rem",
                                                                            padding: ".2rem",
                                                                            border: "1px solid green",
                                                                            borderRadius: ".2rem",
                                                                            marginLeft: ".2rem"
                                                                        },
                                                                        children: "Nuevo"
                                                                    })
                                                                }) : ""
                                                            ]
                                                        }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                                                    onClick: ()=>handleSubmenu(index),
                                                                    className: "flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6",
                                                                    children: [
                                                                        menuItem.title,
                                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                                            className: "pl-3",
                                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                                                width: "25",
                                                                                height: "24",
                                                                                viewBox: "0 0 25 24",
                                                                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                                                    fillRule: "evenodd",
                                                                                    clipRule: "evenodd",
                                                                                    d: "M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z",
                                                                                    fill: "currentColor"
                                                                                })
                                                                            })
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                                    className: `submenu relative left-0 top-full rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${openIndex === index ? "block" : "hidden"}`,
                                                                    children: menuItem.submenu.map((submenuItem, index)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                                            href: submenuItem.path,
                                                                            className: "block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3",
                                                                            children: submenuItem.title
                                                                        }, index))
                                                                })
                                                            ]
                                                        })
                                                    }, index))
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center justify-end pr-16 lg:pr-0",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/workshops",
                                            className: "hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block",
                                            style: {
                                                color: "white",
                                                margin: ".5rem",
                                                borderRadius: ".5rem",
                                                backgroundImage: 'linear-gradient(89deg, var(--token-dc60c65c-2692-4b09-8d77-49a86f7aedee, rgb(24, 36, 61)) /* {"name":"Azul prinicipal"} */ 0%, var(--token-1632e6e1-d1e5-427f-b435-20cb1e67f695, rgb(54, 98, 227)) /* {"name":"Azul claro"} */ 123.5068681091516%)'
                                            },
                                            children: "Registrarme"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "/signin",
                                            className: "ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9",
                                            style: {
                                                backgroundColor: "transparent",
                                                color: "#3662E3",
                                                border: "1px solid #3662E3",
                                                borderRadius: ".5rem"
                                            },
                                            children: "Iniciar sesi\xf3n"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {})
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const dashboard_Header = (Header);


/***/ })

};
;