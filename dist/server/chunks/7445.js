exports.id = 7445;
exports.ids = [7445];
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
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./components/marketplace/background/background.tsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const BackgroundImage = ()=>{
    const [open, setOpen] = (0,react_.useState)(false);
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "background",
            style: {
                backgroundImage: `url(${background.src})`
            },
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                style: {
                    zIndex: 99,
                    paddingBottom: "2rem"
                },
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: " \xbfNo encuentras lo que necesitas?"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        style: {
                            marginBottom: "4rem"
                        },
                        children: "Ingresa una solicitud de cotizaci\xf3n y recibe ofertas personalizadas."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "https://api.whatsapp.com/send?phone=+51941531016&text=\xa1Hola! Necesito una cotizaci\xf3n. Marca, modelo y a\xf1o del vehiculo: Placa: Producto: Original/Alternativo:",
                        target: "_blank",
                        onClick: ()=>setOpen(true),
                        children: "Ingresar solicitud"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const background_background = (BackgroundImage);


/***/ }),

/***/ 69034:
/***/ (() => {



/***/ })

};
;