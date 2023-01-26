/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./sentry.server.config.js":
/*!*********************************!*\
  !*** ./sentry.server.config.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/nextjs */ \"@sentry/nextjs\");\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__);\nvar _sentryCollisionFreeGlobalObject = \"undefined\" === \"undefined\" ? global : window;\n_sentryCollisionFreeGlobalObject[\"__sentryRewritesTunnelPath__\"] = undefined;\n_sentryCollisionFreeGlobalObject[\"SENTRY_RELEASE\"] = {\n    \"id\": \"development\"\n};\n_sentryCollisionFreeGlobalObject[\"__rewriteFramesDistDir__\"] = \".next\";\n// This file configures the initialization of Sentry on the server.\n// https://docs.sentry.io/platforms/javascript/guides/nextjs/\n\n_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.init({\n    environment: process.env.NEXT_PUBLIC_VERCEL_ENV,\n    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN,\n    // Adjust this value in production, or use tracesSampler for greater control\n    tracesSampleRate: 1.0\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZW50cnkuc2VydmVyLmNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFJQSxtQ0FBbUMsZ0JBQWtCLGNBQWNDLFNBQVNDLE1BQU07QUFDdEZGLGdDQUFnQyxDQUFDLCtCQUErQixHQUFHRztBQUNuRUgsZ0NBQWdDLENBQUMsaUJBQWlCLEdBQUc7SUFBQyxNQUFLO0FBQWE7QUFDeEVBLGdDQUFnQyxDQUFDLDJCQUEyQixHQUFHO0FBRS9ELG1FQUFtRTtBQUNuRSw2REFBNkQ7QUFFcEI7QUFFekNJLGdEQUFXLENBQUM7SUFDVkUsYUFBYUMsUUFBUUMsR0FBRyxDQUFDQyxzQkFBc0I7SUFDL0NDLEtBQUtILFFBQVFDLEdBQUcsQ0FBQ0csVUFBVSxJQUFJSixRQUFRQyxHQUFHLENBQUNJLHNCQUFzQjtJQUNqRSw0RUFBNEU7SUFDNUVDLGtCQUFrQjtBQUNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi9zZW50cnkuc2VydmVyLmNvbmZpZy5qcz83NjMwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfc2VudHJ5Q29sbGlzaW9uRnJlZUdsb2JhbE9iamVjdCA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB3aW5kb3c7XG5fc2VudHJ5Q29sbGlzaW9uRnJlZUdsb2JhbE9iamVjdFtcIl9fc2VudHJ5UmV3cml0ZXNUdW5uZWxQYXRoX19cIl0gPSB1bmRlZmluZWQ7XG5fc2VudHJ5Q29sbGlzaW9uRnJlZUdsb2JhbE9iamVjdFtcIlNFTlRSWV9SRUxFQVNFXCJdID0ge1wiaWRcIjpcImRldmVsb3BtZW50XCJ9O1xuX3NlbnRyeUNvbGxpc2lvbkZyZWVHbG9iYWxPYmplY3RbXCJfX3Jld3JpdGVGcmFtZXNEaXN0RGlyX19cIl0gPSBcIi5uZXh0XCI7XG5cbi8vIFRoaXMgZmlsZSBjb25maWd1cmVzIHRoZSBpbml0aWFsaXphdGlvbiBvZiBTZW50cnkgb24gdGhlIHNlcnZlci5cbi8vIGh0dHBzOi8vZG9jcy5zZW50cnkuaW8vcGxhdGZvcm1zL2phdmFzY3JpcHQvZ3VpZGVzL25leHRqcy9cblxuaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gXCJAc2VudHJ5L25leHRqc1wiO1xuXG5TZW50cnkuaW5pdCh7XG4gIGVudmlyb25tZW50OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19WRVJDRUxfRU5WLFxuICBkc246IHByb2Nlc3MuZW52LlNFTlRSWV9EU04gfHwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0VOVFJZX0RTTixcbiAgLy8gQWRqdXN0IHRoaXMgdmFsdWUgaW4gcHJvZHVjdGlvbiwgb3IgdXNlIHRyYWNlc1NhbXBsZXIgZm9yIGdyZWF0ZXIgY29udHJvbFxuICB0cmFjZXNTYW1wbGVSYXRlOiAxLjAsXG59KTtcbiJdLCJuYW1lcyI6WyJfc2VudHJ5Q29sbGlzaW9uRnJlZUdsb2JhbE9iamVjdCIsImdsb2JhbCIsIndpbmRvdyIsInVuZGVmaW5lZCIsIlNlbnRyeSIsImluaXQiLCJlbnZpcm9ubWVudCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19WRVJDRUxfRU5WIiwiZHNuIiwiU0VOVFJZX0RTTiIsIk5FWFRfUFVCTElDX1NFTlRSWV9EU04iLCJ0cmFjZXNTYW1wbGVSYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sentry.server.config.js\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Nextra)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles.css */ \"./styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../custom.css */ \"./custom.css\");\n/* harmony import */ var _custom_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_custom_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-aria/ssr */ \"@react-aria/ssr\");\n/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_react_aria_ssr__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _vercel_analytics_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vercel/analytics/react */ \"@vercel/analytics/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_4__]);\n_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n// Shim requestIdleCallback in Safari\nif (false) {}\nfunction Nextra({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_aria_ssr__WEBPACK_IMPORTED_MODULE_3__.SSRProvider, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                    height: \"0px\",\n                    width: \"0px\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"linearGradient\", {\n                            id: \"pink-gradient\",\n                            x1: \"0%\",\n                            y1: \"0%\",\n                            x2: \"100%\",\n                            y2: \"100%\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                    offset: \"0%\",\n                                    stopColor: \"rgba(156, 81, 161, 1)\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rayansaleh/Documents/sg-community/pages/_app.tsx\",\n                                    lineNumber: 37,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"stop\", {\n                                    offset: \"70%\",\n                                    stopColor: \"rgba(255, 30, 86, 1)\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/rayansaleh/Documents/sg-community/pages/_app.tsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/rayansaleh/Documents/sg-community/pages/_app.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/rayansaleh/Documents/sg-community/pages/_app.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/rayansaleh/Documents/sg-community/pages/_app.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"/Users/rayansaleh/Documents/sg-community/pages/_app.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_vercel_analytics_react__WEBPACK_IMPORTED_MODULE_4__.Analytics, {}, void 0, false, {\n                fileName: \"/Users/rayansaleh/Documents/sg-community/pages/_app.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/rayansaleh/Documents/sg-community/pages/_app.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNBO0FBRXVCO0FBR007QUFRcEQscUNBQXFDO0FBQ3JDLElBQUksS0FBaUUsRUFBSSxFQUd4RTtBQUVjLFNBQVNTLE9BQU8sRUFBRUMsVUFBUyxFQUFFQyxVQUFTLEVBQWtCLEVBQUU7SUFDdkUscUJBQ0UsOERBQUNYLHdEQUFXQTs7MEJBQ1Y7MEJBSUUsNEVBQUNZO29CQUFJQyxRQUFPO29CQUFNQyxPQUFNOzhCQUN0Qiw0RUFBQ0M7a0NBQ0MsNEVBQUNDOzRCQUNDQyxJQUFHOzRCQUNIQyxJQUFHOzRCQUNIQyxJQUFHOzRCQUNIQyxJQUFHOzRCQUNIQyxJQUFHOzs4Q0FFSCw4REFBQ0M7b0NBQUtDLFFBQU87b0NBQUtDLFdBQVU7Ozs7Ozs4Q0FDNUIsOERBQUNGO29DQUFLQyxRQUFPO29DQUFNQyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLckMsOERBQUNkO2dCQUFXLEdBQUdDLFNBQVM7Ozs7OzswQkFDeEIsOERBQUNWLDhEQUFTQTs7Ozs7Ozs7Ozs7QUFHaEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4uL3N0eWxlcy5jc3NcIjtcbmltcG9ydCBcIi4uL2N1c3RvbS5jc3NcIjtcblxuaW1wb3J0IHsgU1NSUHJvdmlkZXIgfSBmcm9tIFwiQHJlYWN0LWFyaWEvc3NyXCI7XG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XG5pbXBvcnQgdHlwZSB7IFJlYWN0Tm9kZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQW5hbHl0aWNzIH0gZnJvbSBcIkB2ZXJjZWwvYW5hbHl0aWNzL3JlYWN0XCI7XG5cbnR5cGUgTmV4dHJhQXBwUHJvcHMgPSBBcHBQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBBcHBQcm9wc1tcIkNvbXBvbmVudFwiXSAmIHtcbiAgICBnZXRMYXlvdXQ6IChwYWdlOiBSZWFjdE5vZGUpID0+IFJlYWN0Tm9kZTtcbiAgfTtcbn07XG5cbi8vIFNoaW0gcmVxdWVzdElkbGVDYWxsYmFjayBpbiBTYWZhcmlcbmlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmICEoXCJyZXF1ZXN0SWRsZUNhbGxiYWNrXCIgaW4gd2luZG93KSkge1xuICB3aW5kb3cucmVxdWVzdElkbGVDYWxsYmFjayA9IChmbikgPT4gc2V0VGltZW91dChmbiwgMSk7XG4gIHdpbmRvdy5jYW5jZWxJZGxlQ2FsbGJhY2sgPSAoZSkgPT4gY2xlYXJUaW1lb3V0KGUpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOZXh0cmEoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9OiBOZXh0cmFBcHBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxTU1JQcm92aWRlcj5cbiAgICAgIDw+XG4gICAgICAgIHsvKipcbiAgICAgICAgICogR2xvYmFsbHkgZGVmaW5lZCBzdmcgbGluZWFyIGdyYWRpZW50LCBmb3IgdXNlIGluIGljb25zXG4gICAgICAgICAqL31cbiAgICAgICAgPHN2ZyBoZWlnaHQ9XCIwcHhcIiB3aWR0aD1cIjBweFwiPlxuICAgICAgICAgIDxkZWZzPlxuICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XG4gICAgICAgICAgICAgIGlkPVwicGluay1ncmFkaWVudFwiXG4gICAgICAgICAgICAgIHgxPVwiMCVcIlxuICAgICAgICAgICAgICB5MT1cIjAlXCJcbiAgICAgICAgICAgICAgeDI9XCIxMDAlXCJcbiAgICAgICAgICAgICAgeTI9XCIxMDAlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMCVcIiBzdG9wQ29sb3I9XCJyZ2JhKDE1NiwgODEsIDE2MSwgMSlcIiAvPlxuICAgICAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCI3MCVcIiBzdG9wQ29sb3I9XCJyZ2JhKDI1NSwgMzAsIDg2LCAxKVwiIC8+XG4gICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgPC9zdmc+XG4gICAgICA8Lz5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDxBbmFseXRpY3MgLz5cbiAgICA8L1NTUlByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlNTUlByb3ZpZGVyIiwiQW5hbHl0aWNzIiwid2luZG93IiwicmVxdWVzdElkbGVDYWxsYmFjayIsImZuIiwic2V0VGltZW91dCIsImNhbmNlbElkbGVDYWxsYmFjayIsImUiLCJjbGVhclRpbWVvdXQiLCJOZXh0cmEiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdmciLCJoZWlnaHQiLCJ3aWR0aCIsImRlZnMiLCJsaW5lYXJHcmFkaWVudCIsImlkIiwieDEiLCJ5MSIsIngyIiwieTIiLCJzdG9wIiwib2Zmc2V0Iiwic3RvcENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./custom.css":
/*!********************!*\
  !*** ./custom.css ***!
  \********************/
/***/ (() => {



/***/ }),

/***/ "./styles.css":
/*!********************!*\
  !*** ./styles.css ***!
  \********************/
/***/ (() => {



/***/ }),

/***/ "@react-aria/ssr":
/*!**********************************!*\
  !*** external "@react-aria/ssr" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@react-aria/ssr");

/***/ }),

/***/ "@sentry/nextjs":
/*!*********************************!*\
  !*** external "@sentry/nextjs" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@sentry/nextjs");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@vercel/analytics/react":
/*!******************************************!*\
  !*** external "@vercel/analytics/react" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@vercel/analytics/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./sentry.server.config.js"), __webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();