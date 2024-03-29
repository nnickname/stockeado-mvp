exports.id = 3933;
exports.ids = [3933];
exports.modules = {

/***/ 72549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ background_background)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./public/images/logo/background.jpeg
/* harmony default export */ const background = ({"src":"/_next/static/media/background.7d2b71fd.jpeg","height":1080,"width":1920,"blurDataURL":"data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAFAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAZEAACAwEAAAAAAAAAAAAAAAAAAQIFESH/xAAVAQEBAAAAAAAAAAAAAAAAAAAFBv/EABgRAAMBAQAAAAAAAAAAAAAAAAABBCIz/9oADAMBAAIRAxEAPwCJr5yePegArZeaAqFs/9k=","blurWidth":8,"blurHeight":5});
// EXTERNAL MODULE: ./components/marketplace/background/index.css
var marketplace_background = __webpack_require__(2032);
// EXTERNAL MODULE: ./models/brands.ts
var brands = __webpack_require__(15431);
// EXTERNAL MODULE: ./node_modules/@reacticons/ionicons/lib/IonIcon.js
var IonIcon = __webpack_require__(99816);
var IonIcon_default = /*#__PURE__*/__webpack_require__.n(IonIcon);
// EXTERNAL MODULE: ./node_modules/react-responsive-modal/dist/index.js
var dist = __webpack_require__(7654);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./components/marketplace/background/background.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const BackgroundImage = ()=>{
    const [open, setOpen] = (0,react_.useState)(false);
    const [openAdd, setOpenAdd] = (0,react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "background",
                style: {
                    backgroundImage: `url(${background.src})`
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    style: {
                        zIndex: 99
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                            children: " \xbfNo encuentras lo que necesitas?"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            children: "Ingresa una solicitud de cotizaci\xf3n y recibe ofertas personalizadas."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            onClick: ()=>setOpen(true),
                            children: "Ingresar solicitud"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist["default"], {
                closeIcon: /*#__PURE__*/ jsx_runtime_.jsx((IonIcon_default()), {
                    name: "close",
                    color: "white"
                }),
                styles: {
                    modal: {
                        borderRadius: "1rem",
                        maxWidth: "500px",
                        padding: "0rem",
                        backgroundColor: "rgb(245, 243, 243)",
                        zIndex: 56
                    },
                    closeIcon: {
                        color: "white !important"
                    },
                    overlay: {
                        backgroundColor: "rgba(220, 217, 217, 0.5)"
                    }
                },
                open: open,
                center: true,
                onClose: ()=>setOpen(false),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        style: {
                            background: 'linear-gradient(89deg, var(--token-dc60c65c-2692-4b09-8d77-49a86f7aedee, rgb(24, 36, 61)) /* {"name":"Azul prinicipal"} */ 0%, var(--token-1632e6e1-d1e5-427f-b435-20cb1e67f695, rgb(54, 98, 227)) /* {"name":"Azul claro"} */ 123.5068681091516%)',
                            width: "100%",
                            padding: "1rem",
                            color: "white"
                        },
                        children: "Envia tu solicitud"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            padding: ".5rem"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                className: "dark:text-body-color-dark mb-8 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",
                                children: [
                                    "Recibe tus cotizaciones por Whatsapp con un link de pago directo o ",
                                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        style: {
                                            color: "#3662E3"
                                        },
                                        href: "#",
                                        children: "crea tu cuenta"
                                    }),
                                    " para conectar con proveedores"
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                        className: "border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",
                                        style: {
                                            background: "transparent"
                                        },
                                        children: brands/* TypeBrands */.PX.map((e, index)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                value: index + 1,
                                                children: e
                                            }, index))
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                                        className: "border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",
                                        style: {
                                            background: "transparent"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                value: -1,
                                                children: "Medio de pago"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                value: -1,
                                                children: "Efectivo"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                value: -1,
                                                children: "Billetera virtual"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                value: -1,
                                                children: "Online"
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        placeholder: "Whatsapp",
                                        className: "border-stroke dark:text-body-color-dark dark:shadow-two  w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",
                                        style: {
                                            background: "transparent"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        placeholder: "Placa(Opcional)",
                                        className: "border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",
                                        style: {
                                            background: "transparent"
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "dark:text-body-color-dark mb-1 text-base ml-4 mt-4 !leading-relaxed text-body-color sm:text-xl md:text-xl",
                                style: {
                                    color: "#3662E3"
                                },
                                children: "Items"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    backgroundColor: "white",
                                    borderRadius: ".5rem",
                                    padding: "1rem",
                                    margin: "1rem"
                                },
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
                                                children: "Nombre"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",
                                                children: "Cantidad"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {})
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        style: {
                                            display: "flex",
                                            justifyContent: "space-between",
                                            borderBottom: "1px solid rgba(220, 220, 220, .3)"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",
                                                children: "Nombre"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",
                                                children: "6"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                style: {
                                                    color: "orange"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((IonIcon_default()), {
                                                    name: "pencil-outline",
                                                    color: "orange"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        style: {
                                            paddingTop: ".5rem",
                                            display: "flex",
                                            justifyContent: "space-between"
                                        },
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",
                                                children: "Nombre"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                className: "dark:text-body-color-dark mb-1 text-base !leading-relaxed text-body-color sm:text-sm md:text-sm",
                                                children: "8"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                                style: {
                                                    color: "orange"
                                                },
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((IonIcon_default()), {
                                                    name: "pencil-outline",
                                                    color: "orange"
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        style: {
                                            textAlign: "right",
                                            width: "100%"
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            onClick: ()=>setOpenAdd(!openAdd),
                                            style: {
                                                marginTop: ".5rem",
                                                color: "grey"
                                            },
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((IonIcon_default()), {
                                                    name: "add"
                                                }),
                                                "A\xf1adir"
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            textAlign: "center"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            style: {
                                background: "#1366D9",
                                color: "white",
                                padding: ".5rem",
                                margin: ".5rem",
                                borderRadius: ".5rem",
                                fontWeight: "500"
                            },
                            className: "rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80",
                            children: "Enviar solicitud"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dist["default"], {
                closeIcon: /*#__PURE__*/ jsx_runtime_.jsx((IonIcon_default()), {
                    name: "close"
                }),
                styles: {
                    modal: {
                        borderRadius: "1rem",
                        minWidth: "300px",
                        padding: "0rem"
                    },
                    closeIcon: {
                        color: "white !important"
                    },
                    overlay: {
                        backgroundColor: "rgba(220, 217, 217, 0.5)"
                    }
                },
                open: openAdd,
                center: true,
                onClose: ()=>setOpenAdd(false),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        style: {
                            background: 'linear-gradient(89deg, var(--token-dc60c65c-2692-4b09-8d77-49a86f7aedee, rgb(24, 36, 61)) /* {"name":"Azul prinicipal"} */ 0%, var(--token-1632e6e1-d1e5-427f-b435-20cb1e67f695, rgb(54, 98, 227)) /* {"name":"Azul claro"} */ 123.5068681091516%)',
                            width: "100%",
                            padding: "1rem",
                            color: "white"
                        },
                        children: "Nuevo producto"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            margin: "2rem"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-between"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        placeholder: "Nombre",
                                        className: "border-stroke dark:text-body-color-dark dark:shadow-two  rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",
                                        style: {
                                            background: "transparent",
                                            width: "70%"
                                        }
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        placeholder: "Cantidad",
                                        type: "number",
                                        className: "border-stroke dark:text-body-color-dark dark:shadow-two rounded-sm border  px-6 py-3 text-base text-body-color outline-none transition-all duration-300 focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none",
                                        style: {
                                            background: "transparent",
                                            width: "30%"
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                style: {
                                    textAlign: "right"
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    style: {
                                        background: "green",
                                        color: "white",
                                        padding: ".5rem",
                                        margin: ".5rem",
                                        borderRadius: ".5rem"
                                    },
                                    className: "rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80",
                                    children: "A\xf1adir"
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const background_background = (BackgroundImage);


/***/ }),

/***/ 69034:
/***/ (() => {



/***/ }),

/***/ 42055:
/***/ (() => {



/***/ })

};
;