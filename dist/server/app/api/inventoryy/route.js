"use strict";
(() => {
var exports = {};
exports.id = 1924;
exports.ids = [1924];
exports.modules = {

/***/ 66860:
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 50852:
/***/ ((module) => {

module.exports = require("async_hooks");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 41808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 76224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 49459:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

// NAMESPACE OBJECT: ./app/api/inventoryy/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./app/api/db.ts
var db = __webpack_require__(66971);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./app/api/midd/_middleware.ts
var _middleware = __webpack_require__(60783);
// EXTERNAL MODULE: ./models/inventoryModel.ts
var inventoryModel = __webpack_require__(93928);
// EXTERNAL MODULE: ./app/api/midd/_middleware.api.ts
var _middleware_api = __webpack_require__(28342);
;// CONCATENATED MODULE: ./app/api/inventoryy/route.ts





async function GET(req, res, next) {
    try {
        if ((0,_middleware_api/* default */.Z)()) {
            await (0,db/* default */.Z)();
            const midd = await (0,_middleware/* default */.Z)(req, res);
            if (midd === null) {
                return next_response/* default */.Z.json({
                    message: "Invalid token"
                });
            }
            var response = await inventoryModel/* default */.Z.find({
                owner_id: midd
            });
            return next_response/* default */.Z.json({
                message: "Items found",
                items: response
            });
        }
        return next_response/* default */.Z.json({
            message: "Invalid auth"
        });
    } catch (error) {}
}
async function POST(req) {
    try {
        if ((0,_middleware_api/* default */.Z)()) {
            await (0,db/* default */.Z)();
            let body = await req.json();
            if (body === undefined || body === null) return next_response/* default */.Z.json({
                message: "Invalid body men and yes, I didn't take the trouble to validate the body"
            });
            const object = {
                ...body,
                sellings: []
            };
            const addingInventory = new inventoryModel/* default */.Z(object);
            addingInventory.markModified("inventory");
            addingInventory.save();
            if (addingInventory) {
                return next_response/* default */.Z.json({
                    message: "Item registered",
                    item: addingInventory
                });
            } else return next_response/* default */.Z.json({
                message: "Item not registered"
            });
        }
        return next_response/* default */.Z.json({
            message: "Invalid auth"
        });
    } catch (errors) {
        return next_response/* default */.Z.json({
            message: "Invalid body or error"
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Finventoryy%2Froute&name=app%2Fapi%2Finventoryy%2Froute&pagePath=private-next-app-dir%2Fapi%2Finventoryy%2Froute.ts&appDir=C%3A%5CUsers%5Cbarto%5COneDrive%5CDesktop%5Cstockeado%5Cstockeado-mvp%5Capp&appPaths=%2Fapi%2Finventoryy%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/inventoryy/route",
        pathname: "/api/inventoryy",
        filename: "route",
        bundlePath: "app/api/inventoryy/route"
    },
    resolvedPagePath: "C:\\Users\\barto\\OneDrive\\Desktop\\stockeado\\stockeado-mvp\\app\\api\\inventoryy\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/inventoryy/route";


//# sourceMappingURL=app-route.js.map

/***/ }),

/***/ 28342:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 60783:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ middleware)
/* harmony export */ });
/* unused harmony export config */
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69877);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40063);
/* harmony import */ var next_headers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_headers__WEBPACK_IMPORTED_MODULE_1__);


async function middleware(req, res) {
    const token = (0,next_headers__WEBPACK_IMPORTED_MODULE_1__.headers)().get("token");
    if (token === null) {
        return null;
    }
    try {
        const data = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, process.env.JWT_KEY);
        if (data) {
            return data._id;
        }
    } catch  {
        return null;
    }
}
const config = {
    matcher: [
        "/api/user"
    ]
};


/***/ }),

/***/ 40063:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(74937);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8478,1835,5177,9877,6971,3928], () => (__webpack_exec__(49459)));
module.exports = __webpack_exports__;

})();