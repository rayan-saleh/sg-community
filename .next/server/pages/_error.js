"use strict";
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
exports.id = "pages/_error";
exports.ids = ["pages/_error"];
exports.modules = {

/***/ "./sentry.server.config.js":
/*!*********************************!*\
  !*** ./sentry.server.config.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @sentry/nextjs */ \"@sentry/nextjs\");\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__);\nvar _sentryCollisionFreeGlobalObject = \"undefined\" === \"undefined\" ? global : window;\n_sentryCollisionFreeGlobalObject[\"__sentryRewritesTunnelPath__\"] = undefined;\n_sentryCollisionFreeGlobalObject[\"SENTRY_RELEASE\"] = {\n    \"id\": \"development\"\n};\n_sentryCollisionFreeGlobalObject[\"__rewriteFramesDistDir__\"] = \".next\";\n// This file configures the initialization of Sentry on the server.\n// https://docs.sentry.io/platforms/javascript/guides/nextjs/\n\n_sentry_nextjs__WEBPACK_IMPORTED_MODULE_0__.init({\n    environment: process.env.NEXT_PUBLIC_VERCEL_ENV,\n    dsn: process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN,\n    // Adjust this value in production, or use tracesSampler for greater control\n    tracesSampleRate: 1.0\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZW50cnkuc2VydmVyLmNvbmZpZy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFJQSxtQ0FBbUMsZ0JBQWtCLGNBQWNDLFNBQVNDLE1BQU07QUFDdEZGLGdDQUFnQyxDQUFDLCtCQUErQixHQUFHRztBQUNuRUgsZ0NBQWdDLENBQUMsaUJBQWlCLEdBQUc7SUFBQyxNQUFLO0FBQWE7QUFDeEVBLGdDQUFnQyxDQUFDLDJCQUEyQixHQUFHO0FBRS9ELG1FQUFtRTtBQUNuRSw2REFBNkQ7QUFFcEI7QUFFekNJLGdEQUFXLENBQUM7SUFDVkUsYUFBYUMsUUFBUUMsR0FBRyxDQUFDQyxzQkFBc0I7SUFDL0NDLEtBQUtILFFBQVFDLEdBQUcsQ0FBQ0csVUFBVSxJQUFJSixRQUFRQyxHQUFHLENBQUNJLHNCQUFzQjtJQUNqRSw0RUFBNEU7SUFDNUVDLGtCQUFrQjtBQUNwQiIsInNvdXJjZXMiOlsid2VicGFjazovL2RvY3MvLi9zZW50cnkuc2VydmVyLmNvbmZpZy5qcz83NjMwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfc2VudHJ5Q29sbGlzaW9uRnJlZUdsb2JhbE9iamVjdCA9IHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgPyBnbG9iYWwgOiB3aW5kb3c7XG5fc2VudHJ5Q29sbGlzaW9uRnJlZUdsb2JhbE9iamVjdFtcIl9fc2VudHJ5UmV3cml0ZXNUdW5uZWxQYXRoX19cIl0gPSB1bmRlZmluZWQ7XG5fc2VudHJ5Q29sbGlzaW9uRnJlZUdsb2JhbE9iamVjdFtcIlNFTlRSWV9SRUxFQVNFXCJdID0ge1wiaWRcIjpcImRldmVsb3BtZW50XCJ9O1xuX3NlbnRyeUNvbGxpc2lvbkZyZWVHbG9iYWxPYmplY3RbXCJfX3Jld3JpdGVGcmFtZXNEaXN0RGlyX19cIl0gPSBcIi5uZXh0XCI7XG5cbi8vIFRoaXMgZmlsZSBjb25maWd1cmVzIHRoZSBpbml0aWFsaXphdGlvbiBvZiBTZW50cnkgb24gdGhlIHNlcnZlci5cbi8vIGh0dHBzOi8vZG9jcy5zZW50cnkuaW8vcGxhdGZvcm1zL2phdmFzY3JpcHQvZ3VpZGVzL25leHRqcy9cblxuaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gXCJAc2VudHJ5L25leHRqc1wiO1xuXG5TZW50cnkuaW5pdCh7XG4gIGVudmlyb25tZW50OiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19WRVJDRUxfRU5WLFxuICBkc246IHByb2Nlc3MuZW52LlNFTlRSWV9EU04gfHwgcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfU0VOVFJZX0RTTixcbiAgLy8gQWRqdXN0IHRoaXMgdmFsdWUgaW4gcHJvZHVjdGlvbiwgb3IgdXNlIHRyYWNlc1NhbXBsZXIgZm9yIGdyZWF0ZXIgY29udHJvbFxuICB0cmFjZXNTYW1wbGVSYXRlOiAxLjAsXG59KTtcbiJdLCJuYW1lcyI6WyJfc2VudHJ5Q29sbGlzaW9uRnJlZUdsb2JhbE9iamVjdCIsImdsb2JhbCIsIndpbmRvdyIsInVuZGVmaW5lZCIsIlNlbnRyeSIsImluaXQiLCJlbnZpcm9ubWVudCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19WRVJDRUxfRU5WIiwiZHNuIiwiU0VOVFJZX0RTTiIsIk5FWFRfUFVCTElDX1NFTlRSWV9EU04iLCJ0cmFjZXNTYW1wbGVSYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sentry.server.config.js\n");

/***/ }),

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @sentry/nextjs */ \"@sentry/nextjs\");\n/* harmony import */ var _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/error */ \"next/error\");\n/* harmony import */ var next_error__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_error__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst CustomErrorComponent = (props)=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_error__WEBPACK_IMPORTED_MODULE_2___default()), {\n        statusCode: props.statusCode\n    }, void 0, false, {\n        fileName: \"/Users/rayansaleh/Documents/sg-community/pages/_error.js\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, undefined);\n};\nCustomErrorComponent.getInitialProps = async (contextData)=>{\n    // In case this is running in a serverless function, await this in order to give Sentry\n    // time to send the error before the lambda exits\n    await _sentry_nextjs__WEBPACK_IMPORTED_MODULE_1__.captureUnderscoreErrorException(contextData);\n    // This will contain the status code of the response\n    return next_error__WEBPACK_IMPORTED_MODULE_2___default().getInitialProps(contextData);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomErrorComponent);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZXJyb3IuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBeUM7QUFDRztBQUU1QyxNQUFNRSx1QkFBdUIsQ0FBQ0MsUUFBVTtJQUN0QyxxQkFBTyw4REFBQ0YsbURBQWtCQTtRQUFDRyxZQUFZRCxNQUFNQyxVQUFVOzs7Ozs7QUFDekQ7QUFFQUYscUJBQXFCRyxlQUFlLEdBQUcsT0FBT0MsY0FBZ0I7SUFDNUQsdUZBQXVGO0lBQ3ZGLGlEQUFpRDtJQUNqRCxNQUFNTiwyRUFBc0MsQ0FBQ007SUFFN0Msb0RBQW9EO0lBQ3BELE9BQU9MLGlFQUFrQyxDQUFDSztBQUM1QztBQUVBLGlFQUFlSixvQkFBb0JBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb2NzLy4vcGFnZXMvX2Vycm9yLmpzPzIwMTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgU2VudHJ5IGZyb20gXCJAc2VudHJ5L25leHRqc1wiO1xuaW1wb3J0IE5leHRFcnJvckNvbXBvbmVudCBmcm9tIFwibmV4dC9lcnJvclwiO1xuXG5jb25zdCBDdXN0b21FcnJvckNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gPE5leHRFcnJvckNvbXBvbmVudCBzdGF0dXNDb2RlPXtwcm9wcy5zdGF0dXNDb2RlfSAvPjtcbn07XG5cbkN1c3RvbUVycm9yQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0RGF0YSkgPT4ge1xuICAvLyBJbiBjYXNlIHRoaXMgaXMgcnVubmluZyBpbiBhIHNlcnZlcmxlc3MgZnVuY3Rpb24sIGF3YWl0IHRoaXMgaW4gb3JkZXIgdG8gZ2l2ZSBTZW50cnlcbiAgLy8gdGltZSB0byBzZW5kIHRoZSBlcnJvciBiZWZvcmUgdGhlIGxhbWJkYSBleGl0c1xuICBhd2FpdCBTZW50cnkuY2FwdHVyZVVuZGVyc2NvcmVFcnJvckV4Y2VwdGlvbihjb250ZXh0RGF0YSk7XG5cbiAgLy8gVGhpcyB3aWxsIGNvbnRhaW4gdGhlIHN0YXR1cyBjb2RlIG9mIHRoZSByZXNwb25zZVxuICByZXR1cm4gTmV4dEVycm9yQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcyhjb250ZXh0RGF0YSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21FcnJvckNvbXBvbmVudDtcbiJdLCJuYW1lcyI6WyJTZW50cnkiLCJOZXh0RXJyb3JDb21wb25lbnQiLCJDdXN0b21FcnJvckNvbXBvbmVudCIsInByb3BzIiwic3RhdHVzQ29kZSIsImdldEluaXRpYWxQcm9wcyIsImNvbnRleHREYXRhIiwiY2FwdHVyZVVuZGVyc2NvcmVFcnJvckV4Y2VwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_error.js\n");

/***/ }),

/***/ "@sentry/nextjs":
/*!*********************************!*\
  !*** external "@sentry/nextjs" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@sentry/nextjs");

/***/ }),

/***/ "next/error":
/*!*****************************!*\
  !*** external "next/error" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("next/error");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./sentry.server.config.js"), __webpack_exec__("./pages/_error.js"));
module.exports = __webpack_exports__;

})();