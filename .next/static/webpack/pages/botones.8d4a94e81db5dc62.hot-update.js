"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/botones",{

/***/ "./src/pages/botones.js":
/*!******************************!*\
  !*** ./src/pages/botones.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Botones; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! toastify-js */ \"./node_modules/toastify-js/src/toastify.js\");\n/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(toastify_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_boton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/boton */ \"./src/components/boton.jsx\");\n\n\n\nconst colors = [\n    \"primary\",\n    \"gray\",\n    \"blue\",\n    \"cyan\",\n    \"pink\",\n    \"green\",\n    \"red\"\n];\nconst sizes = [\n    \"small\",\n    \"medium\",\n    \"large\"\n];\nfunction Botones() {\n    const copyClassToClipboard = (e)=>{\n        toastify_js__WEBPACK_IMPORTED_MODULE_1___default()({\n            text: \"Copiado al portapapeles\",\n            duration: 1500,\n            gravity: \"top\",\n            style: {\n                background: \"#4CAF50\",\n                color: \"#fff\",\n                fontSize: \"1.5rem\"\n            }\n        }).showToast();\n        const classToCopy = e.target.className;\n        let button = '<button class=\"'.concat(classToCopy, '\">Boton</button>');\n        navigator.clipboard.writeText(button);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"space-y-10\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" space-y-5\",\n                    children: sizes.map((size)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-2xl font-bold\",\n                                    children: size\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                    lineNumber: 30,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"space-x-5\",\n                                    children: colors.map((color)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_boton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            color: color,\n                                            variant: \"filled\",\n                                            size: size,\n                                            onClickEvent: (e)=>copyClassToClipboard(e),\n                                            children: \"Hola\"\n                                        }, color, false, {\n                                            fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                            lineNumber: 33,\n                                            columnNumber: 19\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                    lineNumber: 31,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, size, true, {\n                            fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                            lineNumber: 29,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \" space-y-5\",\n                    children: sizes.map((size)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    className: \"text-2xl font-bold\",\n                                    children: size\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"space-x-5\",\n                                    children: colors.map((color)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_boton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                            color: color,\n                                            variant: \"outlined\",\n                                            size: size,\n                                            onClickEvent: (e)=>copyClassToClipboard(e),\n                                            children: \"Hola\"\n                                        }, color, false, {\n                                            fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 19\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, size, true, {\n                            fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_c = Botones;\nvar _c;\n$RefreshReg$(_c, \"Botones\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYm90b25lcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1DO0FBRUk7QUFDdkMsTUFBTUUsU0FBUztJQUFDO0lBQVc7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUFTO0NBQU07QUFDMUUsTUFBTUMsUUFBUTtJQUFDO0lBQVM7SUFBVTtDQUFRO0FBRTNCLFNBQVNDLFVBQVU7SUFDaEMsTUFBTUMsdUJBQXVCLENBQUNDLElBQU07UUFDbENOLGtEQUFRQSxDQUFDO1lBQ1BPLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxTQUFTO1lBQ1RDLE9BQU87Z0JBQ0xDLFlBQVk7Z0JBQ1pDLE9BQU87Z0JBQ1BDLFVBQVU7WUFDWjtRQUNGLEdBQUdDLFNBQVM7UUFDWixNQUFNQyxjQUFjVCxFQUFFVSxNQUFNLENBQUNDLFNBQVM7UUFDdEMsSUFBSUMsU0FBUyxrQkFBOEIsT0FBWkgsYUFBWTtRQUMzQ0ksVUFBVUMsU0FBUyxDQUFDQyxTQUFTLENBQUNIO0lBQ2hDO0lBRUEscUJBQ0UsOERBQUNJO2tCQUNDLDRFQUFDQztZQUFJTixXQUFVOzs4QkFDYiw4REFBQ007b0JBQUlOLFdBQVU7OEJBQ1pkLE1BQU1xQixHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNGOzs4Q0FDQyw4REFBQ0c7b0NBQUdULFdBQVU7OENBQXNCUTs7Ozs7OzhDQUNwQyw4REFBQ0Y7b0NBQUlOLFdBQVU7OENBQ1pmLE9BQU9zQixHQUFHLENBQUMsQ0FBQ1osc0JBQ1gsOERBQUNYLHlEQUFLQTs0Q0FFSlcsT0FBT0E7NENBQ1BlLFNBQVE7NENBQ1JGLE1BQU1BOzRDQUNORyxjQUFjLENBQUN0QixJQUFNRCxxQkFBcUJDO3NEQUMzQzsyQ0FMTU07Ozs7Ozs7Ozs7OzJCQUxIYTs7Ozs7Ozs7Ozs4QkFrQmQsOERBQUNGO29CQUFJTixXQUFVOzhCQUNaZCxNQUFNcUIsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDRjs7OENBQ0MsOERBQUNHO29DQUFHVCxXQUFVOzhDQUFzQlE7Ozs7Ozs4Q0FDcEMsOERBQUNGO29DQUFJTixXQUFVOzhDQUNaZixPQUFPc0IsR0FBRyxDQUFDLENBQUNaLHNCQUNYLDhEQUFDWCx5REFBS0E7NENBRUpXLE9BQU9BOzRDQUNQZSxTQUFROzRDQUNSRixNQUFNQTs0Q0FDTkcsY0FBYyxDQUFDdEIsSUFBTUQscUJBQXFCQztzREFDM0M7MkNBTE1NOzs7Ozs7Ozs7OzsyQkFMSGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCdEIsQ0FBQztLQS9EdUJyQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYm90b25lcy5qcz9iYjczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb2FzdGlmeSBmcm9tIFwidG9hc3RpZnktanNcIjtcclxuXHJcbmltcG9ydCBCb3RvbiBmcm9tIFwiQC9jb21wb25lbnRzL2JvdG9uXCI7XHJcbmNvbnN0IGNvbG9ycyA9IFtcInByaW1hcnlcIiwgXCJncmF5XCIsIFwiYmx1ZVwiLCBcImN5YW5cIiwgXCJwaW5rXCIsIFwiZ3JlZW5cIiwgXCJyZWRcIl07XHJcbmNvbnN0IHNpemVzID0gW1wic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvdG9uZXMoKSB7XHJcbiAgY29uc3QgY29weUNsYXNzVG9DbGlwYm9hcmQgPSAoZSkgPT4ge1xyXG4gICAgVG9hc3RpZnkoe1xyXG4gICAgICB0ZXh0OiBcIkNvcGlhZG8gYWwgcG9ydGFwYXBlbGVzXCIsXHJcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxyXG4gICAgICBncmF2aXR5OiBcInRvcFwiLCAvLyBgdG9wYCBvciBgYm90dG9tYFxyXG4gICAgICBzdHlsZToge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiIzRDQUY1MFwiLFxyXG4gICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgICAgfSxcclxuICAgIH0pLnNob3dUb2FzdCgpO1xyXG4gICAgY29uc3QgY2xhc3NUb0NvcHkgPSBlLnRhcmdldC5jbGFzc05hbWU7XHJcbiAgICBsZXQgYnV0dG9uID0gYDxidXR0b24gY2xhc3M9XCIke2NsYXNzVG9Db3B5fVwiPkJvdG9uPC9idXR0b24+YDtcclxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGJ1dHRvbik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBzcGFjZS15LTVcIj5cclxuICAgICAgICAgIHtzaXplcy5tYXAoKHNpemUpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e3NpemV9PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57c2l6ZX08L2gzPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteC01XCI+XHJcbiAgICAgICAgICAgICAgICB7Y29sb3JzLm1hcCgoY29sb3IpID0+IChcclxuICAgICAgICAgICAgICAgICAgPEJvdG9uXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtjb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17Y29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrRXZlbnQ9eyhlKSA9PiBjb3B5Q2xhc3NUb0NsaXBib2FyZChlKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEhvbGFcclxuICAgICAgICAgICAgICAgICAgPC9Cb3Rvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHNwYWNlLXktNVwiPlxyXG4gICAgICAgICAge3NpemVzLm1hcCgoc2l6ZSkgPT4gKFxyXG4gICAgICAgICAgICA8ZGl2IGtleT17c2l6ZX0+XHJcbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPntzaXplfTwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS14LTVcIj5cclxuICAgICAgICAgICAgICAgIHtjb2xvcnMubWFwKChjb2xvcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Qm90b25cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9e3NpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGlja0V2ZW50PXsoZSkgPT4gY29weUNsYXNzVG9DbGlwYm9hcmQoZSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBIb2xhXHJcbiAgICAgICAgICAgICAgICAgIDwvQm90b24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiVG9hc3RpZnkiLCJCb3RvbiIsImNvbG9ycyIsInNpemVzIiwiQm90b25lcyIsImNvcHlDbGFzc1RvQ2xpcGJvYXJkIiwiZSIsInRleHQiLCJkdXJhdGlvbiIsImdyYXZpdHkiLCJzdHlsZSIsImJhY2tncm91bmQiLCJjb2xvciIsImZvbnRTaXplIiwic2hvd1RvYXN0IiwiY2xhc3NUb0NvcHkiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJidXR0b24iLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJtYWluIiwiZGl2IiwibWFwIiwic2l6ZSIsImgzIiwidmFyaWFudCIsIm9uQ2xpY2tFdmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/botones.js\n"));

/***/ })

});