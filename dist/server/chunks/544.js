"use strict";
exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 544:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ BankOptions),
  C: () => (/* binding */ OrderStates)
});

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: ./node_modules/@reacticons/ionicons/lib/IonIcon.js
var IonIcon = __webpack_require__(99816);
var IonIcon_default = /*#__PURE__*/__webpack_require__.n(IonIcon);
// EXTERNAL MODULE: external "next/dist/compiled/react-experimental"
var react_experimental_ = __webpack_require__(17640);
;// CONCATENATED MODULE: ./public/images/logo/BBVA_2019.svg.png
/* harmony default export */ const BBVA_2019_svg = ({"src":"/_next/static/media/BBVA_2019.svg.7880810a.png","height":383,"width":1280,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAAOklEQVR4nGNkcG1oYvjPcIuBgYGPgZGBHUhfA+KvQOwKxCcZGVwaJgMZz4GYF6gARL8AYg0g3g3EYgCWDgsmLXiyGwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./public/images/logo/Interbank_logo.svg.png
/* harmony default export */ const Interbank_logo_svg = ({"src":"/_next/static/media/Interbank_logo.svg.5c4fd121.png","height":486,"width":2560,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASklEQVR4nGNkiFk1i0Hk02kGy0kPGL6rsTMw/WJg+M/wg4GR8S/D//9cQAWrpzGIfrjCYD79JcMPRUkGpj9vgQr4GRgZ/gFV/gIAIJAYja9FeVwAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./public/images/logo/Logo-bcp-vector.svg.png
/* harmony default export */ const Logo_bcp_vector_svg = ({"src":"/_next/static/media/Logo-bcp-vector.svg.80651f66.png","height":645,"width":2560,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAATUlEQVR4nGPcFVmW/+kPK1/ICykdeZY/Dx7+Zzwrwvg/6M0f5ssXFG/wMf7PdauZ8cRaNPONMJ8sy9+3LAwM5+//YZE7rXDrkD7voxAACg4eal47fGwAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":2});
;// CONCATENATED MODULE: ./public/images/logo/plin-logo-0C4106153C-seeklogo.com.png
/* harmony default export */ const plin_logo_0C4106153C_seeklogo_com = ({"src":"/_next/static/media/plin-logo-0C4106153C-seeklogo.com.5b229474.png","height":300,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA7UlEQVR42gWAsUrDQBiAv/+/yzUWNJrBRVwEoV2cXIqLo4/SwcG3sT6Gk5NjKw6i4GJBECyilNoqNiRNc3ciAAevz51piAOjsec0UCp3uZE+8CL7D+POJFkPSXyORrCABFDmXaMndlLJ5am4/Mes6/Nsy80+F1xnWpca86fGD6R7+1ZfdXeSRj3bqaFY1WyklioGLhYftc0K59uqSRkjeCFtOabrFT4GjrWFLZfJ4+yX3s2iaO5DZffakT/X1N4G9y5hZMu5y86GFWxGS6bQNJDiSOM3aejbUCRfh+DFURaFHAUV9UZGu9b0WTL+BxoVadjvHH0rAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/logo/tunki.png
/* harmony default export */ const tunki = ({"src":"/_next/static/media/tunki.436c34c2.png","height":300,"width":300,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA0klEQVR42k2NPWsCQRCG9+fsz0hvlS59+vRp0yV9UqazFUJIkSKwFsFSEBUVUTxUzo9FXTi9md291x1tfIph3g9mlEBEGkAzz1c8nExY9hiCvg3twTnc39XwqBTmWQbxjkWhVYyxeVHOUePhCd1UWP7+kXjRe6OqquLoAwTbaqOfCvlnHUJ6w3KBRez2Dl/1Bmqp8P/9AyFIIQ0jotsf0fPLK97eP1AQXV/EaBQAHUqy284A294INM5wHE4hnmRK8KdS89oab/dcbiwXs4XhnbuEZ4jSzRGwZ840AAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/logo/Yape_text_app_icon.png
/* harmony default export */ const Yape_text_app_icon = ({"src":"/_next/static/media/Yape_text_app_icon.f5385f88.png","height":511,"width":515,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABAElEQVR42g2LPy9DURjGn/c95x7aImmqBiKkkXao1b9Uwmr0AXwIYrXZDBKzweoLiARTN5NBhEWFCLdK75V7y+3te27P80ue/JYf7S8cNmBxDAVDHllSBDcidqfpQINx5GRJQkH/YwBxAITM4UGdaAlsUdqCwnJO5ranaaxcgKSCqfkS+63OuC5vFKXSmEV9rUbWWlZaoTCRz0QsXu6urV7cqqK+WkPyl0CzAhPDf21DGY3ucwh+araUdlUv+odnvGwkZzLr6reHd3xddllv7qwE/STFffORo+8eIj9G5zbA4FOQr47GFP78rl+c3Zye711NzqAkDIKpGGaPYptmu0Mg12TL4pcs9AAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./app/marketplace/payment/bank.tsx









const OrderStates = [
    "Pendiente",
    "Confirmado",
    "Enviando",
    "Entregado"
];
const BankOptions = ()=>{
    const [copied, setCopied] = (0,react_experimental_.useState)("stockeado.shop.transfer");
    const copyDirection = ()=>{
        setCopied("Copiado");
        navigator.clipboard.writeText("stockeado.shop.transfer");
        setTimeout(()=>{
            setCopied("stockeado.shop.transfer");
        }, 3000);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    display: "flex"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        style: {
                            color: "grey"
                        },
                        children: "Para confirmar el pedido necesitamos que transfieras el monto total a la siguiente direcci\xf3n"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            onClick: ()=>copyDirection(),
                            style: {
                                color: "black",
                                border: "1px solid rgba(0,0,0, 0.2)",
                                paddingTop: ".5rem",
                                paddingLeft: "1rem",
                                paddingRight: "1rem",
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
                    display: "inline-block"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: BBVA_2019_svg.src,
                        alt: "LOGOBVVA",
                        style: {
                            maxWidth: "50px",
                            display: "inline-block",
                            margin: ".5rem"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: Interbank_logo_svg.src,
                        alt: "LOGOINTERBANK",
                        style: {
                            maxWidth: "50px",
                            display: "inline-block",
                            margin: ".5rem"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: Logo_bcp_vector_svg.src,
                        alt: "LOGOBCP",
                        style: {
                            maxWidth: "50px",
                            display: "inline-block",
                            margin: ".5rem"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: plin_logo_0C4106153C_seeklogo_com.src,
                        alt: "LOGOPLIN",
                        style: {
                            maxWidth: "50px",
                            display: "inline-block",
                            margin: ".5rem"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: tunki.src,
                        alt: "LOGOTUNKI",
                        style: {
                            maxWidth: "50px",
                            display: "inline-block",
                            margin: ".5rem"
                        }
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: Yape_text_app_icon.src,
                        alt: "LOGOYAPE",
                        style: {
                            maxWidth: "50px",
                            display: "inline-block",
                            margin: ".5rem"
                        }
                    })
                ]
            })
        ]
    });
};


/***/ })

};
;