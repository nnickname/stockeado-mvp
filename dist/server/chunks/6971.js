"use strict";
exports.id = 6971;
exports.ids = [6971];
exports.modules = {

/***/ 66971:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33716);
/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(66860);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(99961);
/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);




function createServer() {
    const app = express__WEBPACK_IMPORTED_MODULE_2___default()();
    app.use(express__WEBPACK_IMPORTED_MODULE_2___default().json());
    app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().json());
    app.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({
        extended: true
    }));
    app.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());
    const cors = {
        origin: [
            "www.stockeado.com",
            "stockeado.com",
            "64.225.62.133"
        ]
    };
    app.all("*", function(req, res, next) {
        let origin = req.headers.origin;
        if (cors.origin.indexOf(origin) >= 0) {
            res.header("Access-Control-Allow-Origin", origin);
        }
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });
    return app;
}
const MONGODB_URI = process.env.MONGO_URI;
if (!MONGODB_URI) {
    console.log("Error on connect MongoDb");
}
let cached = global.mongoose;
if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    };
}
async function dbConnect() {
    createServer();
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        cached.promise = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI).then((mongoose)=>{
            return mongoose;
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }
    return cached.conn;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);


/***/ })

};
;