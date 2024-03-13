exports.id = 6322;
exports.ids = [6322];
exports.modules = {

/***/ 31270:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ panel_sellresume)
});

// UNUSED EXPORTS: getTotalSellings

// EXTERNAL MODULE: external "next/dist/compiled/react-experimental/jsx-runtime"
var jsx_runtime_ = __webpack_require__(76931);
// EXTERNAL MODULE: ./components/panel/sellresume/index.css
var sellresume = __webpack_require__(64739);
;// CONCATENATED MODULE: ./public/images/logo/icon1.png
/* harmony default export */ const icon1 = ({"src":"/_next/static/media/icon1.a2628423.png","height":24,"width":26,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAApElEQVR42l2NvQ4BQRRGb6LQKHgI2VLhAZCNQqdEsXFXFDaewCNI7KIbPzOIBKVHszN6p3aTk3vud+dH/kutT9SGlboQT11ZFT37xsx+o9SGKDGfCgfacGHeQEsYTsg+tf7JzYVQeI88Y14KslPnDf3GYgJ1vANdiIQghwKuBEOY428wcBeCLRzhwVdj+ojFCz/ghfB8k2FA2FdX1ghjyGGt1mc/OF13zw4qqKoAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":7});
;// CONCATENATED MODULE: ./public/images/logo/icon2.png
/* harmony default export */ const icon2 = ({"src":"/_next/static/media/icon2.e6483d00.png","height":25,"width":26,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAArklEQVR42kWNzwpBURDGL7b2SoolKWVna+kBlFLYeAWaI+45/sWCiyKPyRwP4Hdu3e7Ur2bm+2a+KKutaMEaXwy9W/mKFZ9Y0S4jC1GEvBA7iONYPo0gltIPRqtO/ASxj7iEKcyiXNQRi5qVX9sZHdK/4E22L3M5IL9pjS5gDgJrZ/yJvG+LrDqLHjzgAEeIOUww6J3hjHtPjGWOmUO/gUswPOFGxC69BsDIF9HrH6iYfdltp3AZAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/logo/icon3.png
/* harmony default export */ const icon3 = ({"src":"/_next/static/media/icon3.0624775a.png","height":27,"width":26,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAApElEQVR42mWMsQrCQBBEg4W9pVUKK0GIoKgBk0Kx0KAIojZC9krBxj/K3Vdlcz/jIwki5mCY2523E/y+yknv+7fmybzrBGrzvneSojVQ+N8wRkctZFhaGXlnXoE6GbCM0E2tzFHC5QVgBnAHkAnLEF3Vmg1BTJDhyxqAPlVWovrSmaTECfb4omkozBmIQLYAKZ62wKptkJwgxjP8oE3DA596Z94fctRvTBVPwjAAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./public/images/logo/icon4.png
/* harmony default export */ const icon4 = ({"src":"/_next/static/media/icon4.a37a50e7.png","height":26,"width":26,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAsUlEQVR42k2NwQrCMBBEY5F68Vbw4klQ0IteBRHppahYLFpJInqx2fyAf2pWRPBjnGDUBpbM7rydFcqZhghPOdorpqp8UtP30JGomYVmO9DOJDD04UHxz9SOVjDH/950AZXF6xL5zRMqDymZZKKgJ4Cu/s4QlYWbCxi7oGeK7RxxVVszpZ+hnUq2yReQd9uDMAmApR8eHbVg9AOQAhgJdTMxYktAWwxz7WgNvcF/VkydN2ytU3Sp2+ntAAAAAElFTkSuQmCC","blurWidth":8,"blurHeight":8});
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
            if (a.item._id === id) count += Number(a.item?.price);
        });
    });
    return count;
};
const getBenefitEarning = (orders, id)=>{
    var count = 0;
    orders?.map((e)=>{
        if (Number(e?.state) > 0) e?.items?.map((a)=>{
            if (a.item._id === id) count += Number(a.item?.priceSelling);
        });
    });
    return count;
};
const calculatePercentage = (x, y)=>{
    const ammount = (x - y) / y * 100;
    if (Number.isNaN(ammount)) {
        return 0;
    }
    return ((x - y) / y * 100) ?? "";
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
                                            calculatePercentage(getTotalEarning(orders, String(user?._id)), getBenefitEarning(orders, String(user?._id))) ?? "0",
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
    "Alternativo",
    "Segunda"
];


/***/ }),

/***/ 64739:
/***/ (() => {



/***/ })

};
;