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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Botones; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! toastify-js */ \"./node_modules/toastify-js/src/toastify.js\");\n/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(toastify_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_boton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/boton */ \"./src/components/boton.jsx\");\n\n\n\nconst colors = [\n    \"primary\",\n    \"gray\",\n    \"blue\",\n    \"cyan\",\n    \"pink\",\n    \"green\",\n    \"red\"\n];\nconst sizes = [\n    \"small\",\n    \"medium\",\n    \"large\"\n];\nfunction Botones() {\n    const copyClassToClipboard = (e)=>{\n        toastify_js__WEBPACK_IMPORTED_MODULE_1___default()({\n            text: \"Copiado al portapapeles\",\n            duration: 1500,\n            gravity: \"top\",\n            style: {\n                background: \"#4CAF50\",\n                color: \"#fff\",\n                fontSize: \"1.5rem\"\n            }\n        }).showToast();\n        const classToCopy = e.target.className;\n        let button = '<button class=\"'.concat(classToCopy, '\">Boton</button>');\n        navigator.clipboard.writeText(button);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold\",\n                        children: \"Botones Tailwind\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl\",\n                        children: \"Da clic en el bot\\xf3n que quieras utilizar y copiaras el c\\xf3digo a tu portapapeles.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" space-y-5\",\n                        children: sizes.map((size)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-2xl font-bold\",\n                                        children: size\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col lg:flex-row gap-5\",\n                                        children: colors.map((color)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_boton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                color: color,\n                                                variant: \"filled\",\n                                                size: size,\n                                                onClickEvent: (e)=>copyClassToClipboard(e),\n                                                children: \"Hola\"\n                                            }, color, false, {\n                                                fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-gray-100 p-5 mt-5 space-y-2\",\n                                        children: colors.map((color)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    \"<Button \",\n                                                    \" key=\",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-orange-500\",\n                                                        children: [\n                                                            '\"',\n                                                            color,\n                                                            '\"'\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                                        lineNumber: 56,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    \" color=\",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-orange-500\",\n                                                        children: [\n                                                            '\"',\n                                                            color,\n                                                            '\"'\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                                        lineNumber: 57,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    \" variant=\",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-orange-500\",\n                                                        children: '\"outlined\"'\n                                                    }, void 0, false, {\n                                                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                                        lineNumber: 58,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    \" size=\",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                        className: \"text-orange-500\",\n                                                        children: [\n                                                            '\"',\n                                                            size,\n                                                            '\"'\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                                        lineNumber: 59,\n                                                        columnNumber: 21\n                                                    }, this),\n                                                    \" \",\n                                                    \">\",\n                                                    \"Hola\",\n                                                    \"</Button>\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, size, true, {\n                                fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" space-y-5\",\n                        children: sizes.map((size)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-2xl font-bold\",\n                                        children: size\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col lg:flex-row gap-5\",\n                                        children: colors.map((color)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_boton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                color: color,\n                                                variant: \"outlined\",\n                                                size: size,\n                                                onClickEvent: (e)=>copyClassToClipboard(e),\n                                                children: \"Hola\"\n                                            }, color, false, {\n                                                fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                                lineNumber: 74,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, size, true, {\n                                fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                lineNumber: 70,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_c = Botones;\nvar _c;\n$RefreshReg$(_c, \"Botones\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYm90b25lcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1DO0FBRUk7QUFDdkMsTUFBTUUsU0FBUztJQUFDO0lBQVc7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUFTO0NBQU07QUFDMUUsTUFBTUMsUUFBUTtJQUFDO0lBQVM7SUFBVTtDQUFRO0FBRTNCLFNBQVNDLFVBQVU7SUFDaEMsTUFBTUMsdUJBQXVCLENBQUNDLElBQU07UUFDbENOLGtEQUFRQSxDQUFDO1lBQ1BPLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxTQUFTO1lBQ1RDLE9BQU87Z0JBQ0xDLFlBQVk7Z0JBQ1pDLE9BQU87Z0JBQ1BDLFVBQVU7WUFDWjtRQUNGLEdBQUdDLFNBQVM7UUFDWixNQUFNQyxjQUFjVCxFQUFFVSxNQUFNLENBQUNDLFNBQVM7UUFDdEMsSUFBSUMsU0FBUyxrQkFBOEIsT0FBWkgsYUFBWTtRQUMzQ0ksVUFBVUMsU0FBUyxDQUFDQyxTQUFTLENBQUNIO0lBQ2hDO0lBRUEscUJBQ0UsOERBQUNJOzswQkFDQyw4REFBQ0M7Z0JBQUlOLFdBQVU7O2tDQUNiLDhEQUFDTzt3QkFBR1AsV0FBVTtrQ0FBcUI7Ozs7OztrQ0FDbkMsOERBQUNRO3dCQUFFUixXQUFVO2tDQUFVOzs7Ozs7Ozs7Ozs7MEJBTXpCLDhEQUFDTTtnQkFBSU4sV0FBVTs7a0NBQ2IsOERBQUNNO3dCQUFJTixXQUFVO2tDQUNaZCxNQUFNdUIsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDSjs7a0RBQ0MsOERBQUNLO3dDQUFHWCxXQUFVO2tEQUFzQlU7Ozs7OztrREFDcEMsOERBQUNKO3dDQUFJTixXQUFVO2tEQUNaZixPQUFPd0IsR0FBRyxDQUFDLENBQUNkLHNCQUNYLDhEQUFDWCx5REFBS0E7Z0RBRUpXLE9BQU9BO2dEQUNQaUIsU0FBUTtnREFDUkYsTUFBTUE7Z0RBQ05HLGNBQWMsQ0FBQ3hCLElBQU1ELHFCQUFxQkM7MERBQzNDOytDQUxNTTs7Ozs7Ozs7OztrREFVWCw4REFBQ1c7d0NBQUlOLFdBQVU7a0RBQ1pmLE9BQU93QixHQUFHLENBQUMsQ0FBQ2Qsc0JBQ1gsOERBQUNhOztvREFDRztvREFBVTtrRUFDWiw4REFBQ007d0RBQUtkLFdBQVU7OzREQUFrQjs0REFBRUw7NERBQU07Ozs7Ozs7b0RBQVE7a0VBQ2xELDhEQUFDbUI7d0RBQUtkLFdBQVU7OzREQUFrQjs0REFBRUw7NERBQU07Ozs7Ozs7b0RBQVE7a0VBQ2xELDhEQUFDbUI7d0RBQUtkLFdBQVU7a0VBQWtCOzs7Ozs7b0RBQWlCO2tFQUNuRCw4REFBQ2M7d0RBQUtkLFdBQVU7OzREQUFrQjs0REFBRVU7NERBQUs7Ozs7Ozs7b0RBQVE7b0RBQUc7b0RBQUc7b0RBRXJEOzs7Ozs7Ozs7Ozs7OytCQXhCQUE7Ozs7Ozs7Ozs7a0NBK0JkLDhEQUFDSjt3QkFBSU4sV0FBVTtrQ0FDWmQsTUFBTXVCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ0o7O2tEQUNDLDhEQUFDSzt3Q0FBR1gsV0FBVTtrREFBc0JVOzs7Ozs7a0RBQ3BDLDhEQUFDSjt3Q0FBSU4sV0FBVTtrREFDWmYsT0FBT3dCLEdBQUcsQ0FBQyxDQUFDZCxzQkFDWCw4REFBQ1gseURBQUtBO2dEQUVKVyxPQUFPQTtnREFDUGlCLFNBQVE7Z0RBQ1JGLE1BQU1BO2dEQUNORyxjQUFjLENBQUN4QixJQUFNRCxxQkFBcUJDOzBEQUMzQzsrQ0FMTU07Ozs7Ozs7Ozs7OytCQUxIZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCdEIsQ0FBQztLQXBGdUJ2QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvYm90b25lcy5qcz9iYjczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUb2FzdGlmeSBmcm9tIFwidG9hc3RpZnktanNcIjtcclxuXHJcbmltcG9ydCBCb3RvbiBmcm9tIFwiQC9jb21wb25lbnRzL2JvdG9uXCI7XHJcbmNvbnN0IGNvbG9ycyA9IFtcInByaW1hcnlcIiwgXCJncmF5XCIsIFwiYmx1ZVwiLCBcImN5YW5cIiwgXCJwaW5rXCIsIFwiZ3JlZW5cIiwgXCJyZWRcIl07XHJcbmNvbnN0IHNpemVzID0gW1wic21hbGxcIiwgXCJtZWRpdW1cIiwgXCJsYXJnZVwiXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvdG9uZXMoKSB7XHJcbiAgY29uc3QgY29weUNsYXNzVG9DbGlwYm9hcmQgPSAoZSkgPT4ge1xyXG4gICAgVG9hc3RpZnkoe1xyXG4gICAgICB0ZXh0OiBcIkNvcGlhZG8gYWwgcG9ydGFwYXBlbGVzXCIsXHJcbiAgICAgIGR1cmF0aW9uOiAxNTAwLFxyXG4gICAgICBncmF2aXR5OiBcInRvcFwiLCAvLyBgdG9wYCBvciBgYm90dG9tYFxyXG4gICAgICBzdHlsZToge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IFwiIzRDQUY1MFwiLFxyXG4gICAgICAgIGNvbG9yOiBcIiNmZmZcIixcclxuICAgICAgICBmb250U2l6ZTogXCIxLjVyZW1cIixcclxuICAgICAgfSxcclxuICAgIH0pLnNob3dUb2FzdCgpO1xyXG4gICAgY29uc3QgY2xhc3NUb0NvcHkgPSBlLnRhcmdldC5jbGFzc05hbWU7XHJcbiAgICBsZXQgYnV0dG9uID0gYDxidXR0b24gY2xhc3M9XCIke2NsYXNzVG9Db3B5fVwiPkJvdG9uPC9idXR0b24+YDtcclxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGJ1dHRvbik7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm15LTVcIj5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkXCI+Qm90b25lcyBUYWlsd2luZDwvaDE+XHJcbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC14bFwiPlxyXG4gICAgICAgICAgRGEgY2xpYyBlbiBlbCBib3TDs24gcXVlIHF1aWVyYXMgdXRpbGl6YXIgeSBjb3BpYXJhcyBlbCBjw7NkaWdvIGEgdHVcclxuICAgICAgICAgIHBvcnRhcGFwZWxlcy5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTEwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCIgc3BhY2UteS01XCI+XHJcbiAgICAgICAgICB7c2l6ZXMubWFwKChzaXplKSA9PiAoXHJcbiAgICAgICAgICAgIDxkaXYga2V5PXtzaXplfT5cclxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC0yeGwgZm9udC1ib2xkXCI+e3NpemV9PC9oMz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgbGc6ZmxleC1yb3cgZ2FwLTVcIj5cclxuICAgICAgICAgICAgICAgIHtjb2xvcnMubWFwKChjb2xvcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8Qm90b25cclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiZmlsbGVkXCJcclxuICAgICAgICAgICAgICAgICAgICBzaXplPXtzaXplfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tFdmVudD17KGUpID0+IGNvcHlDbGFzc1RvQ2xpcGJvYXJkKGUpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgSG9sYVxyXG4gICAgICAgICAgICAgICAgICA8L0JvdG9uPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZy1ncmF5LTEwMCBwLTUgbXQtNSBzcGFjZS15LTJcIj5cclxuICAgICAgICAgICAgICAgIHtjb2xvcnMubWFwKChjb2xvcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgICAgICB7YDxCdXR0b24gYH0ga2V5PVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtb3JhbmdlLTUwMFwiPlwie2NvbG9yfVwiPC9zcGFuPiBjb2xvcj1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS01MDBcIj5cIntjb2xvcn1cIjwvc3Bhbj4gdmFyaWFudD1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW9yYW5nZS01MDBcIj5cIm91dGxpbmVkXCI8L3NwYW4+IHNpemU9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1vcmFuZ2UtNTAwXCI+XCJ7c2l6ZX1cIjwvc3Bhbj4ge2A+YH1cclxuICAgICAgICAgICAgICAgICAgICBIb2xhXHJcbiAgICAgICAgICAgICAgICAgICAge2A8L0J1dHRvbj5gfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBzcGFjZS15LTVcIj5cclxuICAgICAgICAgIHtzaXplcy5tYXAoKHNpemUpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e3NpemV9PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57c2l6ZX08L2gzPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBnYXAtNVwiPlxyXG4gICAgICAgICAgICAgICAge2NvbG9ycy5tYXAoKGNvbG9yKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxCb3RvblxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17Y29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrRXZlbnQ9eyhlKSA9PiBjb3B5Q2xhc3NUb0NsaXBib2FyZChlKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEhvbGFcclxuICAgICAgICAgICAgICAgICAgPC9Cb3Rvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJUb2FzdGlmeSIsIkJvdG9uIiwiY29sb3JzIiwic2l6ZXMiLCJCb3RvbmVzIiwiY29weUNsYXNzVG9DbGlwYm9hcmQiLCJlIiwidGV4dCIsImR1cmF0aW9uIiwiZ3Jhdml0eSIsInN0eWxlIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiZm9udFNpemUiLCJzaG93VG9hc3QiLCJjbGFzc1RvQ29weSIsInRhcmdldCIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsIm1haW4iLCJkaXYiLCJoMSIsInAiLCJtYXAiLCJzaXplIiwiaDMiLCJ2YXJpYW50Iiwib25DbGlja0V2ZW50Iiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/botones.js\n"));

/***/ })

});