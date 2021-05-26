(function() {
var exports = {};
exports.id = "pages/home";
exports.ids = ["pages/home"];
exports.modules = {

/***/ "./pages/home.tsx":
/*!************************!*\
  !*** ./pages/home.tsx ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getServerSideProps": function() { return /* binding */ getServerSideProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\andyh\\Desktop\\refactor-test\\web-app\\src\\client\\pages\\home.tsx";


const Home = ({
  products
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Hello from NextJS! - Home"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), products && products.map(prod => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [" ", prod.name, " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 43
    }, undefined))]
  }, void 0, true);
};

async function getServerSideProps({
  req
}) {
  const products = await (await fetch('http://localhost:3001/products')).json();
  return {
    props: {
      products
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/home.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkhvbWUiLCJwcm9kdWN0cyIsIm1hcCIsInByb2QiLCJuYW1lIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicmVxIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQU9BLE1BQU1BLElBQXlCLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDbEQsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUVHQSxRQUFRLElBQUlBLFFBQVEsQ0FBQ0MsR0FBVCxDQUFjQyxJQUFELGlCQUFVO0FBQUEsc0JBQUtBLElBQUksQ0FBQ0MsSUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQXZCLENBRmY7QUFBQSxrQkFERjtBQU1ELENBUEQ7O0FBU08sZUFBZUMsa0JBQWYsQ0FBa0M7QUFBRUM7QUFBRixDQUFsQyxFQUEyQztBQUNoRCxRQUFNTCxRQUFRLEdBQUcsTUFBTSxDQUFDLE1BQU1NLEtBQUssQ0FBQyxnQ0FBRCxDQUFaLEVBQWdEQyxJQUFoRCxFQUF2QjtBQUNBLFNBQU87QUFDTEMsU0FBSyxFQUFFO0FBQUVSO0FBQUY7QUFERixHQUFQO0FBR0Q7QUFFRCwrREFBZUQsSUFBZixFOzs7Ozs7Ozs7OztBQ3ZCQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9ob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcclxuXHJcbmludGVyZmFjZSBQcm9kUHJvcHMge1xyXG4gIHByb2R1Y3RzOiBhbnk7XHJcbn1cclxuXHJcbmNvbnN0IEhvbWU6IE5leHRQYWdlPFByb2RQcm9wcz4gPSAoeyBwcm9kdWN0cyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxoMT5IZWxsbyBmcm9tIE5leHRKUyEgLSBIb21lPC9oMT5cclxuICAgICAge3Byb2R1Y3RzICYmIHByb2R1Y3RzLm1hcCgocHJvZCkgPT4gPHA+IHtwcm9kLm5hbWV9IDwvcD4pfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoeyByZXEgfSkge1xyXG4gIGNvbnN0IHByb2R1Y3RzID0gYXdhaXQgKGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjMwMDEvcHJvZHVjdHMnKSkuanNvbigpO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczogeyBwcm9kdWN0cyB9LFxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhvbWU7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=