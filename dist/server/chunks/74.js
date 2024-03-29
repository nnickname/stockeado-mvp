exports.id = 74;
exports.ids = [74];
exports.modules = {

/***/ 35889:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ BankOptions),
  C: () => (/* binding */ OrderStates)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/@reacticons/ionicons/lib/IonIcon.js
var IonIcon = __webpack_require__(99816);
var IonIcon_default = /*#__PURE__*/__webpack_require__.n(IonIcon);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./public/images/logo/plin-logo-0C4106153C-seeklogo.com.png
/* harmony default export */ const plin_logo_0C4106153C_seeklogo_com = ({"src":"/_next/static/media/plin-logo-0C4106153C-seeklogo.com.5b229474.png","height":300,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEVMaXETwOUMyN4Oz9ogpukil/YQx94C39EH3NEC4dEf1uMD19gU1dYG188F5c4Vr+MOtfA7yOQlivQQu99JyNMK4tkhtOcO4tUn5Nqe7u4K7OCQ5e137OiJ7Owbrv+H2fkH2eda5eKa5POPTQxeAAAAGXRSTlMA+K4tusT+8v2w/ur5LSzh/fmk4/6q8uHgtMDlrgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEVJREFUeJwFwYUBwCAQBLBDH68LVtt/yCZAtEQ2AcIXYwolcBfelYoFqz3X3A/sX825tRPynrQLZYO6RqYfHzErOSxc4AeH1wPcqyzAgAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/logo/Yape_text_app_icon.png
/* harmony default export */ const Yape_text_app_icon = ({"src":"/_next/static/media/Yape_text_app_icon.f5385f88.png","height":511,"width":515,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAATlBMVEV1I4WGO5TTuNl7LIu4kMF0JIV4J4lyHoPLrtKRTp+eZal3IYdyH4J8MoyIRJaQTp6KQ5hkCHbZyd7Cmsp0HIXEosuhZ63avuB+JZDCnctol24xAAAAFHRSTlPC/v7O/Eb80P79y/ze39/dzNM+ukc5mHoAAAAJcEhZcwAACxMAAAsTAQCanBgAAABBSURBVHicHcGHEYAwDASwT7UdOriE/RflDgkNvwbMRVWVQNqTiB8obmYcO0Zm5vpuOKNyrr7iCZHUZ8E9LiKi9gFc9QK4fxmKMwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/marketplace/payment/bank.tsx





const OrderStates = [
    "Pendiente",
    "Confirmado",
    "Pagado",
    "Enviando",
    "Entregado"
];
const BankOptions = ()=>{
    const [copied, setCopied] = (0,react_.useState)("stockeado.shop.transfer");
    const copyDirection = ()=>{
        setCopied("Copiado");
        navigator.clipboard.writeText("stockeado.shop.transfer");
        setTimeout(()=>{
            setCopied("stockeado.shop.transfer");
        }, 3000);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                style: {
                    marginTop: "1.5rem",
                    fontSize: "1rem"
                },
                children: "Instrucciones de pago"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                style: {
                    color: "gray",
                    fontSize: ".9rem",
                    marginTop: ".5rem",
                    marginBottom: "1rem"
                },
                children: "Se debe realizar el dep\xf3sito a la cuenta de Stockeado previo al env\xedo de la orden.        Enviar la captura del dep\xf3sito a Whatsapp e indicar datos de factura si as\xed lo requiera."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                style: {
                    marginTop: "1.5rem",
                    fontSize: "1rem"
                },
                children: "Datos de pago:"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex",
                    width: "100%"
                },
                className: "displayBlockResponsive",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            width: "100%"
                        },
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    width: "100%",
                                    marginTop: "1rem"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            color: "grey"
                                        },
                                        children: "Cuenta BCP:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        style: {
                                            marginLeft: "2rem"
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            onClick: ()=>copyDirection(),
                                            style: {
                                                color: "black",
                                                border: "1px solid rgba(0,0,0, 0.2)",
                                                paddingTop: ".2rem",
                                                paddingBottom: ".2rem",
                                                paddingLeft: ".5rem",
                                                paddingRight: ".5rem",
                                                display: "flex",
                                                borderRadius: ".5rem"
                                            },
                                            children: [
                                                copied,
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx((IonIcon_default()), {
                                                    style: {
                                                        margin: ".2rem"
                                                    },
                                                    name: "clipboard-outline"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    width: "100%",
                                    marginTop: "1rem"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            width: "max-content",
                                            color: "grey"
                                        },
                                        children: "Cuenta CCI:"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        style: {
                                            marginLeft: "2rem"
                                        },
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            onClick: ()=>copyDirection(),
                                            style: {
                                                color: "black",
                                                border: "1px solid rgba(0,0,0, 0.2)",
                                                paddingTop: ".2rem",
                                                paddingBottom: ".2rem",
                                                paddingLeft: ".5rem",
                                                paddingRight: ".5rem",
                                                display: "flex",
                                                borderRadius: ".5rem"
                                            },
                                            children: [
                                                copied,
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx((IonIcon_default()), {
                                                    style: {
                                                        margin: ".2rem"
                                                    },
                                                    name: "clipboard-outline"
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        style: {
                            width: "6rem"
                        },
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            style: {
                                marginRight: "auto",
                                marginLeft: "auto",
                                height: "100%",
                                width: "1px",
                                background: "rgba(0,0,0,0.2)"
                            }
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    width: "100%",
                                    marginTop: "1rem",
                                    display: "inline-block"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        style: {
                                            display: "inline-block"
                                        },
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                            style: {
                                                color: "grey"
                                            },
                                            children: "Yape y Plin"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        style: {
                                            display: "inline-block",
                                            marginLeft: "1rem",
                                            marginRight: "1rem"
                                        },
                                        width: "50px",
                                        src: Yape_text_app_icon.src
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        style: {
                                            display: "inline-block"
                                        },
                                        width: "50px",
                                        src: plin_logo_0C4106153C_seeklogo_com.src
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                onClick: ()=>copyDirection(),
                                style: {
                                    marginTop: "1rem",
                                    color: "black",
                                    border: "1px solid rgba(0,0,0, 0.2)",
                                    paddingTop: ".2rem",
                                    paddingBottom: ".2rem",
                                    paddingLeft: ".5rem",
                                    paddingRight: ".5rem",
                                    display: "flex",
                                    borderRadius: ".5rem"
                                },
                                children: [
                                    copied,
                                    " ",
                                    /*#__PURE__*/ jsx_runtime_.jsx((IonIcon_default()), {
                                        style: {
                                            margin: ".2rem"
                                        },
                                        name: "clipboard-outline"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex",
                    width: "100%",
                    marginTop: "1rem"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        style: {
                            color: "grey",
                            marginRight: "1rem"
                        },
                        children: "Nombre de Cuenta:"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: " Bruno Gabriel Rojas Serv\xe1n"
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex",
                    width: "100%",
                    marginTop: "1rem"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        style: {
                            color: "grey",
                            marginRight: "1rem"
                        },
                        children: "Enviar dep\xf3sito a Whatsapp"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx((IonIcon_default()), {
                        name: "logo-whatsapp",
                        size: "large",
                        style: {
                            color: "#25d366",
                            cursor: "pointer"
                        }
                    })
                ]
            })
        ]
    });
};


/***/ }),

/***/ 49462:
/***/ (() => {



/***/ })

};
;