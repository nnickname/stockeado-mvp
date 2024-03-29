exports.id = 1270;
exports.ids = [1270];
exports.modules = {

/***/ 31270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ panel_sellresume)
});

// UNUSED EXPORTS: getTotalSellings

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./components/panel/sellresume/index.css
var sellresume = __webpack_require__(64739);
;// CONCATENATED MODULE: ./public/images/logo/icon1.png
/* harmony default export */ const icon1 = ({"src":"/_next/static/media/icon1.a2628423.png","height":24,"width":26,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAG1BMVEVhnvNilvRhnfNgnfRgnvJhnvJhnfJhnfRhnPI+0Dh2AAAACXRSTlObBYw5aVurHU9bi4DGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAALklEQVR4nAXBhwEAMAjDMGcA/f/iSkhS/cQlOgiwVVoMo+SweV3A7MxiMnMP9wMTFwCpNNW6GAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./public/images/logo/icon2.png
/* harmony default export */ const icon2 = ({"src":"/_next/static/media/icon2.e6483d00.png","height":25,"width":26,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEWAefKAefJMaXF/efGAePGAefKAefJ/efGBePNVsWt/AAAACXRSTlOJgAA0G5RfeFC7PfYzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMklEQVR4nB3IwRHAQAjDQHG2gf4rzhC9dsS7jPihPrg13TyvtQleTU8VsgIFUBckdSMfHXMAvv79L94AAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/logo/icon3.png
/* harmony default export */ const icon3 = ({"src":"/_next/static/media/icon3.0624775a.png","height":27,"width":26,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEXYoGDXoF5MaXHZoGDZoWDZoF7bomBHXWMUAAAAB3RSTlM/MABMXBZyGcKt2AAAAAlwSFlzAAALEwAACxMBAJqcGAAAAC5JREFUeJwtxsENwDAMw0Cykr3/yEGK8MPj+1u4G5wLMy5jpRYnEEvkgYeSUPcAFK8AjTCdC1YAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/logo/icon4.png
/* harmony default export */ const icon4 = ({"src":"/_next/static/media/icon4.a37a50e7.png","height":26,"width":26,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAFVBMVEVMaXFY0mRY0mRX0mFY02NY02VX02PGBb8VAAAAB3RSTlMAR1MPJTlm9Dq4HQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADBJREFUeJwdyrkRwEAQhEDmu/xDVq2w2gDAL1xufFKhBhs99qiY2YhYWA/pP1qSnA8RRQCBXLgm/gAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(52451);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/panel/sellresume/index.tsx







const getTotalSellings = (orders)=>{
    var counter = 0;
    orders?.map((e)=>{
        if (Number(e?.state) > 0) counter++;
    });
    return counter;
};
const getTotalEarning = (orders, id)=>{
    var count = 0;
    orders?.map((e)=>{
        if (Number(e?.state) > 0) e?.items?.map((a)=>{
            if (String(a.item.owner_id) === id) count = count + Number(a.item?.priceSelling) * a.ammount;
        });
    });
    return count.toFixed(2);
};
const getBenefitEarning = (orders, id)=>{
    var count = 0;
    orders?.map((e)=>{
        if (Number(e?.state) > 0) e?.items?.map((a)=>{
            if (String(a.item.owner_id) === id) count = count + Number(a.item?.price) * a.ammount;
        });
    });
    return count.toFixed(2);
};
const calculatePercentage = (x, y)=>{
    const ammount = (x - y) / y * 100;
    if (Number.isNaN(ammount)) {
        return 0;
    }
    return Number(((x - y) / y * 100) ?? 0).toFixed(1);
};
const SellResume = ({ orders, user })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "content-frame-container resume",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                style: {
                    width: "100%",
                    textAlign: "left"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                    children: "Resumen de Ventas"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "resumeContainer",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            textAlign: "center",
                            width: "100%",
                            borderRight: "1px solid rgba(230, 230, 230, 0.5)"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "centerIcon",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        backgroundColor: "#E8F1FD",
                                        borderRadius: ".5rem",
                                        padding: ".2rem",
                                        width: "max-content"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: icon1,
                                        alt: ""
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    display: "inline-block"
                                },
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            display: "inline-block"
                                        },
                                        children: getTotalSellings(orders)
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            marginLeft: "1.5rem",
                                            color: "grey",
                                            display: "inline-block"
                                        },
                                        children: "Ventas"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            textAlign: "center",
                            width: "100%",
                            borderRight: "1px solid rgba(230, 230, 230, 0.5)"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "centerIcon",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        backgroundColor: "#ECEAFF",
                                        borderRadius: ".5rem",
                                        padding: ".2rem",
                                        width: "max-content"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: icon2,
                                        alt: ""
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    display: "inline-block"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        style: {
                                            display: "inline-block"
                                        },
                                        children: [
                                            "s/. ",
                                            getTotalEarning(orders, String(user?._id))
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            marginLeft: "1.5rem",
                                            color: "grey",
                                            display: "inline-block"
                                        },
                                        children: "Ingresos"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            textAlign: "center",
                            width: "100%",
                            borderRight: "1px solid rgba(230, 230, 230, 0.5)"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "centerIcon",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        backgroundColor: "#FFEEDB",
                                        borderRadius: ".5rem",
                                        padding: ".2rem",
                                        width: "max-content"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: icon3,
                                        alt: ""
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    display: "inline-block"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        style: {
                                            display: "inline-block"
                                        },
                                        children: [
                                            "s/. ",
                                            getBenefitEarning(orders, String(user?._id)) ?? 0
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            marginLeft: "1.5rem",
                                            color: "grey",
                                            display: "inline-block"
                                        },
                                        children: "Beneficio"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        style: {
                            textAlign: "center",
                            width: "100%"
                        },
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "centerIcon",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    style: {
                                        backgroundColor: "#EBFFED",
                                        borderRadius: ".5rem",
                                        padding: ".2rem",
                                        width: "max-content"
                                    },
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: icon4,
                                        alt: ""
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                style: {
                                    display: "inline-block"
                                },
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                        style: {
                                            display: "inline-block"
                                        },
                                        children: [
                                            calculatePercentage(Number(getTotalEarning(orders, String(user?._id))), Number(getBenefitEarning(orders, String(user?._id)))) ?? "0",
                                            "%"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        style: {
                                            marginLeft: "1.5rem",
                                            color: "grey",
                                            display: "inline-block"
                                        },
                                        children: "Margen"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const panel_sellresume = (SellResume);


/***/ }),

/***/ 64739:
/***/ (() => {



/***/ })

};
;