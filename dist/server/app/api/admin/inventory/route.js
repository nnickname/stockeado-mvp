(() => {
var exports = {};
exports.id = 7841;
exports.ids = [7841];
exports.modules = {

/***/ 66860:
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ 11185:
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ 56786:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/react/jsx-runtime");

/***/ }),

/***/ 50852:
/***/ ((module) => {

"use strict";
module.exports = require("async_hooks");

/***/ }),

/***/ 14300:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 41808:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 22037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 63477:
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 76224:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 73837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ 96491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/admin/inventory/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./app/api/db.ts
var db = __webpack_require__(66971);
// EXTERNAL MODULE: ./models/inventoryModel.ts
var inventoryModel = __webpack_require__(93928);
// EXTERNAL MODULE: ./app/api/midd/_middleware.api.ts
var _middleware_api = __webpack_require__(28342);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./components/panel/inventoryresume/index.css
var inventoryresume = __webpack_require__(29545);
;// CONCATENATED MODULE: ./components/panel/inventoryresume/index.tsx



const getTotalPriceInventory = (cartItems)=>{
    var price = 0;
    cartItems?.map((e)=>{
        price = price + Number(e?.priceSelling) * Number(e?.ammount);
    });
    return String(price.toFixed(2));
};
const getTotalItems = (orders, id)=>{
    var count = 0;
    orders?.map((e)=>{
        if (Number(e?.state) > 3) e?.items?.map((a)=>{
            if (String(a.item.owner_id) === id) count = count + Number(a.ammount);
        });
    });
    return count;
};
const getTotalValueinS = (orders, id)=>{
    var count = 0;
    orders?.map((e)=>{
        if (Number(e?.state) > 3) e?.items?.map((a)=>{
            if (String(a.item.owner_id) === id) count = count + Number(a.item?.priceSelling) * Number(a.ammount);
        });
    });
    return count.toFixed(2);
};
const getNoneStock = (cartItems)=>{
    var low = 0;
    cartItems?.map((e)=>{
        if (Number(e?.ammount) < 1) {
            low++;
        }
    });
    return String(low);
};
const getLowStockAmmount = (cartItems)=>{
    var low = 0;
    cartItems?.map((e)=>{
        if (Number(e?.ammount) < 5) {
            low++;
        }
    });
    return String(low);
};
const getTotalBrands = (cartItems)=>{
    var brands = [];
    var validatemoment;
    cartItems?.map((e)=>{
        for(var i = 0; i < brands?.length; i++){
            if (brands[i] === TypeBrands[e?.brand]) {
                validatemoment = true;
            } else validatemoment = false;
            if (i === 0) brands.slice(0, 1);
        }
        if (!validatemoment) brands.push(TypeBrands[e?.brand]);
    });
    return String(brands?.length);
};
const InventoryResume = ({ items, orders, user })=>{
    return /*#__PURE__*/ _jsx("div", {
        className: "content-frame-container resume",
        children: /*#__PURE__*/ _jsxs("div", {
            style: {
                width: "100%",
                textAlign: "left"
            },
            children: [
                /*#__PURE__*/ _jsx("h1", {
                    children: "Resumen de Inventario"
                }),
                /*#__PURE__*/ _jsxs("div", {
                    className: "resumeContainer displayGridResponsive",
                    style: {
                        display: "flex"
                    },
                    children: [
                        /*#__PURE__*/ _jsxs("div", {
                            style: {
                                padding: "1rem",
                                paddingRight: "3rem",
                                borderRight: "1px solid rgba(230, 230, 230, 0.5)"
                            },
                            children: [
                                /*#__PURE__*/ _jsx("h1", {
                                    style: {
                                        color: "#1570EF",
                                        marginBottom: ".3rem"
                                    },
                                    children: "Marcas"
                                }),
                                /*#__PURE__*/ _jsx("p", {
                                    children: getTotalBrands(items)
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            style: {
                                padding: "1rem",
                                width: "100%",
                                borderRight: "1px solid rgba(230, 230, 230, 0.5)"
                            },
                            children: [
                                /*#__PURE__*/ _jsx("h1", {
                                    style: {
                                        color: "#E19133",
                                        marginBottom: ".3rem"
                                    },
                                    children: "Total productos"
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginBottom: ".3rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("p", {
                                            children: items?.length
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            children: getTotalPriceInventory(items)
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("p", {
                                            style: {
                                                color: "#858D9D",
                                                fontSize: ".8rem"
                                            },
                                            children: "Productos"
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            style: {
                                                color: "#858D9D",
                                                fontSize: ".8rem"
                                            },
                                            children: " Valor en soles"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            style: {
                                padding: "1rem",
                                width: "100%",
                                borderRight: "1px solid rgba(230, 230, 230, 0.5)"
                            },
                            children: [
                                /*#__PURE__*/ _jsx("h1", {
                                    style: {
                                        color: "#58D365",
                                        marginBottom: ".3rem"
                                    },
                                    children: "Total ventas"
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginBottom: ".3rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("p", {
                                            children: getTotalItems(orders, String(user?._id))
                                        }),
                                        /*#__PURE__*/ _jsxs("p", {
                                            children: [
                                                " ",
                                                getTotalValueinS(orders, String(user?._id))
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("p", {
                                            style: {
                                                color: "#858D9D",
                                                fontSize: ".8rem"
                                            },
                                            children: "Unidades"
                                        }),
                                        /*#__PURE__*/ _jsx("p", {
                                            style: {
                                                color: "#858D9D",
                                                fontSize: ".8rem"
                                            },
                                            children: " Valor en soles"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("div", {
                            style: {
                                padding: "1rem",
                                width: "100%"
                            },
                            children: [
                                /*#__PURE__*/ _jsx("h1", {
                                    style: {
                                        color: "#F36960",
                                        marginBottom: ".3rem"
                                    },
                                    children: "Bajo Stock"
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between",
                                        marginBottom: ".3rem"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("p", {
                                            children: getLowStockAmmount(items)
                                        }),
                                        /*#__PURE__*/ _jsxs("p", {
                                            children: [
                                                " ",
                                                getNoneStock(items)
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsxs("div", {
                                    style: {
                                        display: "flex",
                                        justifyContent: "space-between"
                                    },
                                    children: [
                                        /*#__PURE__*/ _jsx("p", {
                                            style: {
                                                color: "#858D9D",
                                                fontSize: ".8rem"
                                            },
                                            children: "productos"
                                        }),
                                        /*#__PURE__*/ _jsxs("p", {
                                            style: {
                                                color: "#858D9D",
                                                fontSize: ".8rem"
                                            },
                                            children: [
                                                " ",
                                                "sin stock"
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const panel_inventoryresume = ((/* unused pure expression or super */ null && (InventoryResume)));

;// CONCATENATED MODULE: ./app/api/admin/inventory/route.ts





async function GET(req) {
    try {
        if ((0,_middleware_api/* default */.Z)()) {
            await (0,db/* default */.Z)();
            const items = await inventoryModel/* default */.Z.find({
                stars: 0
            });
            console.log(items);
            if (items) {
                const totalvalue = getTotalPriceInventory(items);
                return next_response/* default */.Z.json({
                    message: "Items find",
                    items: items.length,
                    totalvalue
                });
            } else return next_response/* default */.Z.json({
                message: "Item not find"
            });
        }
        return next_response/* default */.Z.json({
            message: "Invalid auth"
        });
    } catch (errors) {
        console.log(errors);
        return next_response/* default */.Z.json({
            message: "Invalid body or error"
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fadmin%2Finventory%2Froute&name=app%2Fapi%2Fadmin%2Finventory%2Froute&pagePath=private-next-app-dir%2Fapi%2Fadmin%2Finventory%2Froute.ts&appDir=C%3A%5CUsers%5Cbarto%5COneDrive%5CDesktop%5Cstockeado%5Cstockeado-mvp%5Capp&appPaths=%2Fapi%2Fadmin%2Finventory%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/admin/inventory/route",
        pathname: "/api/admin/inventory",
        filename: "route",
        bundlePath: "app/api/admin/inventory/route"
    },
    resolvedPagePath: "C:\\Users\\barto\\OneDrive\\Desktop\\stockeado\\stockeado-mvp\\app\\api\\admin\\inventory\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/admin/inventory/route";


//# sourceMappingURL=app-route.js.map

/***/ }),

/***/ 28342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ middlewareApi)
/* harmony export */ });
function middlewareApi() {
    return true;
// DONT WORK ENV
/*const token = headers().get('Authorization'); 
    const foo = process.env.NEXT_PUBLIC_API_TOKEN;
    if (typeof foo === 'undefined') {
        throw new Error("Env var `foo` is not defined")
    }
    if (token === null) {
        return false
    } else {
        if(token === foo){
            return true
        }
        return false;   
    }
    */ }


/***/ }),

/***/ 29545:
/***/ (() => {



/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8478,1835,5177,6971,3928], () => (__webpack_exec__(96491)));
module.exports = __webpack_exports__;

})();