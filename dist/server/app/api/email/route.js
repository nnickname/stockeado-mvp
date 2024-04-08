"use strict";
(() => {
var exports = {};
exports.id = 7433;
exports.ids = [7433];
exports.modules = {

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

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

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 76224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 98391:
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

// NAMESPACE OBJECT: ./app/api/email/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(19513);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./node_modules/@sendgrid/mail/index.js
var mail = __webpack_require__(13343);
;// CONCATENATED MODULE: ./utils/mail/mail.ts

mail.setApiKey(process.env.SENDGRID_API_KEY);
const sendMailMessage = async (to, text, title, orderid, templateId)=>{
    const msg = {
        to,
        from: "bruno@stockeado.com",
        html: "<div></div>",
        subject: title,
        text,
        templateId,
        dynamic_template_data: {
            orderid: orderid
        }
    };
    const response = await mail.send(msg).then(()=>{
        console.log("Email sent");
        return true;
    }).catch((error)=>{
        console.error(error);
        return false;
    });
    return response;
};
/* harmony default export */ const mail_mail = (sendMailMessage);

;// CONCATENATED MODULE: ./app/api/email/route.ts


async function POST(req) {
    try {
        const body = await req?.json();
        const response = await mail_mail(body?.tomail, body?.text, body?.title, body?.orderid, body?.templateId);
        if (response) {
            return next_response/* default */.Z.json({
                message: "Mail send",
                send: true
            });
        }
        return next_response/* default */.Z.json({
            message: "Invalid mail",
            send: false
        });
    } catch (errors) {
        return next_response/* default */.Z.json({
            message: "Invalid body or error",
            send: false
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Femail%2Froute&name=app%2Fapi%2Femail%2Froute&pagePath=private-next-app-dir%2Fapi%2Femail%2Froute.ts&appDir=C%3A%5CUsers%5Cbarto%5COneDrive%5CDesktop%5Cstockeado%5Cstockeado-mvp%5Capp&appPaths=%2Fapi%2Femail%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

// @ts-ignore this need to be imported from next/dist to be external


// @ts-expect-error - replaced by webpack/turbopack loader

const AppRouteRouteModule = app_route_module.AppRouteRouteModule;
// We inject the nextConfigOutput here so that we can use them in the route
// module.
const nextConfigOutput = ""
const routeModule = new AppRouteRouteModule({
    definition: {
        kind: route_kind.RouteKind.APP_ROUTE,
        page: "/api/email/route",
        pathname: "/api/email",
        filename: "route",
        bundlePath: "app/api/email/route"
    },
    resolvedPagePath: "C:\\Users\\barto\\OneDrive\\Desktop\\stockeado\\stockeado-mvp\\app\\api\\email\\route.ts",
    nextConfigOutput,
    userland: route_namespaceObject
});
// Pull out the exports that we need to expose from the module. This should
// be eliminated when we've moved the other routes to the new format. These
// are used to hook into the route.
const { requestAsyncStorage , staticGenerationAsyncStorage , serverHooks , headerHooks , staticGenerationBailout  } = routeModule;
const originalPathname = "/api/email/route";


//# sourceMappingURL=app-route.js.map

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [8478,1835,3343], () => (__webpack_exec__(98391)));
module.exports = __webpack_exports__;

})();