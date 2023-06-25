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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Botones; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! toastify-js */ \"./node_modules/toastify-js/src/toastify.js\");\n/* harmony import */ var toastify_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(toastify_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_boton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/boton */ \"./src/components/boton.jsx\");\n\n\n\nconst colors = [\n    \"primary\",\n    \"gray\",\n    \"blue\",\n    \"cyan\",\n    \"pink\",\n    \"green\",\n    \"red\"\n];\nconst sizes = [\n    \"small\",\n    \"medium\",\n    \"large\"\n];\nfunction Botones() {\n    const copyClassToClipboard = (e)=>{\n        toastify_js__WEBPACK_IMPORTED_MODULE_1___default()({\n            text: \"Copiado al portapapeles\",\n            duration: 1500,\n            gravity: \"top\",\n            style: {\n                background: \"#4CAF50\",\n                color: \"#fff\",\n                fontSize: \"1.5rem\"\n            }\n        }).showToast();\n        const classToCopy = e.target.className;\n        let button = '<button class=\"'.concat(classToCopy, '\">Boton</button>');\n        navigator.clipboard.writeText(button);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"my-5\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-4xl font-bold\",\n                        children: \"Botones Tailwind\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-xl\",\n                        children: \"Da clic en el bot\\xf3n que quieras utilizar y copiaras el c\\xf3digo a tu portapapeles.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" space-y-5\",\n                        children: sizes.map((size)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-2xl font-bold\",\n                                        children: size\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                        lineNumber: 38,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col lg:flex-row gap-5\",\n                                        children: colors.map((color)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_boton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                color: color,\n                                                variant: \"filled\",\n                                                size: size,\n                                                onClickEvent: (e)=>copyClassToClipboard(e),\n                                                children: \"Hola\"\n                                            }, color, false, {\n                                                fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"bg-gray-100 p-5 mt-5 space-y-2\",\n                                        children: colors.map((color)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                children: [\n                                                    \"<Button \",\n                                                    \" key=\",\n                                                    color,\n                                                    \" color=\",\n                                                    color,\n                                                    ' variant=\"outlined\" size=',\n                                                    size,\n                                                    \" \",\n                                                    \">\",\n                                                    \"Hola\",\n                                                    \"</Button>\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                                lineNumber: 54,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, size, true, {\n                                fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \" space-y-5\",\n                        children: sizes.map((size)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        className: \"text-2xl font-bold\",\n                                        children: size\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"flex flex-col lg:flex-row gap-5\",\n                                        children: colors.map((color)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_boton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                                color: color,\n                                                variant: \"outlined\",\n                                                size: size,\n                                                onClickEvent: (e)=>copyClassToClipboard(e),\n                                                children: \"Hola\"\n                                            }, color, false, {\n                                                fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                                lineNumber: 71,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, size, true, {\n                                fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                                lineNumber: 67,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\crocode\\\\proyectos\\\\componentes\\\\src\\\\pages\\\\botones.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_c = Botones;\nvar _c;\n$RefreshReg$(_c, \"Botones\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYm90b25lcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1DO0FBRUk7QUFDdkMsTUFBTUUsU0FBUztJQUFDO0lBQVc7SUFBUTtJQUFRO0lBQVE7SUFBUTtJQUFTO0NBQU07QUFDMUUsTUFBTUMsUUFBUTtJQUFDO0lBQVM7SUFBVTtDQUFRO0FBRTNCLFNBQVNDLFVBQVU7SUFDaEMsTUFBTUMsdUJBQXVCLENBQUNDLElBQU07UUFDbENOLGtEQUFRQSxDQUFDO1lBQ1BPLE1BQU07WUFDTkMsVUFBVTtZQUNWQyxTQUFTO1lBQ1RDLE9BQU87Z0JBQ0xDLFlBQVk7Z0JBQ1pDLE9BQU87Z0JBQ1BDLFVBQVU7WUFDWjtRQUNGLEdBQUdDLFNBQVM7UUFDWixNQUFNQyxjQUFjVCxFQUFFVSxNQUFNLENBQUNDLFNBQVM7UUFDdEMsSUFBSUMsU0FBUyxrQkFBOEIsT0FBWkgsYUFBWTtRQUMzQ0ksVUFBVUMsU0FBUyxDQUFDQyxTQUFTLENBQUNIO0lBQ2hDO0lBRUEscUJBQ0UsOERBQUNJOzswQkFDQyw4REFBQ0M7Z0JBQUlOLFdBQVU7O2tDQUNiLDhEQUFDTzt3QkFBR1AsV0FBVTtrQ0FBcUI7Ozs7OztrQ0FDbkMsOERBQUNRO3dCQUFFUixXQUFVO2tDQUFVOzs7Ozs7Ozs7Ozs7MEJBTXpCLDhEQUFDTTtnQkFBSU4sV0FBVTs7a0NBQ2IsOERBQUNNO3dCQUFJTixXQUFVO2tDQUNaZCxNQUFNdUIsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDSjs7a0RBQ0MsOERBQUNLO3dDQUFHWCxXQUFVO2tEQUFzQlU7Ozs7OztrREFDcEMsOERBQUNKO3dDQUFJTixXQUFVO2tEQUNaZixPQUFPd0IsR0FBRyxDQUFDLENBQUNkLHNCQUNYLDhEQUFDWCx5REFBS0E7Z0RBRUpXLE9BQU9BO2dEQUNQaUIsU0FBUTtnREFDUkYsTUFBTUE7Z0RBQ05HLGNBQWMsQ0FBQ3hCLElBQU1ELHFCQUFxQkM7MERBQzNDOytDQUxNTTs7Ozs7Ozs7OztrREFVWCw4REFBQ1c7d0NBQUlOLFdBQVU7a0RBQ1pmLE9BQU93QixHQUFHLENBQUMsQ0FBQ2Qsc0JBQ1gsOERBQUNhOztvREFDRztvREFBVTtvREFBTWI7b0RBQU07b0RBQVFBO29EQUFNO29EQUNoQ2U7b0RBQUs7b0RBQUc7b0RBQUc7b0RBRWY7Ozs7Ozs7Ozs7Ozs7K0JBckJBQTs7Ozs7Ozs7OztrQ0E0QmQsOERBQUNKO3dCQUFJTixXQUFVO2tDQUNaZCxNQUFNdUIsR0FBRyxDQUFDLENBQUNDLHFCQUNWLDhEQUFDSjs7a0RBQ0MsOERBQUNLO3dDQUFHWCxXQUFVO2tEQUFzQlU7Ozs7OztrREFDcEMsOERBQUNKO3dDQUFJTixXQUFVO2tEQUNaZixPQUFPd0IsR0FBRyxDQUFDLENBQUNkLHNCQUNYLDhEQUFDWCx5REFBS0E7Z0RBRUpXLE9BQU9BO2dEQUNQaUIsU0FBUTtnREFDUkYsTUFBTUE7Z0RBQ05HLGNBQWMsQ0FBQ3hCLElBQU1ELHFCQUFxQkM7MERBQzNDOytDQUxNTTs7Ozs7Ozs7Ozs7K0JBTEhlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJ0QixDQUFDO0tBakZ1QnZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9ib3RvbmVzLmpzP2JiNzMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFRvYXN0aWZ5IGZyb20gXCJ0b2FzdGlmeS1qc1wiO1xyXG5cclxuaW1wb3J0IEJvdG9uIGZyb20gXCJAL2NvbXBvbmVudHMvYm90b25cIjtcclxuY29uc3QgY29sb3JzID0gW1wicHJpbWFyeVwiLCBcImdyYXlcIiwgXCJibHVlXCIsIFwiY3lhblwiLCBcInBpbmtcIiwgXCJncmVlblwiLCBcInJlZFwiXTtcclxuY29uc3Qgc2l6ZXMgPSBbXCJzbWFsbFwiLCBcIm1lZGl1bVwiLCBcImxhcmdlXCJdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm90b25lcygpIHtcclxuICBjb25zdCBjb3B5Q2xhc3NUb0NsaXBib2FyZCA9IChlKSA9PiB7XHJcbiAgICBUb2FzdGlmeSh7XHJcbiAgICAgIHRleHQ6IFwiQ29waWFkbyBhbCBwb3J0YXBhcGVsZXNcIixcclxuICAgICAgZHVyYXRpb246IDE1MDAsXHJcbiAgICAgIGdyYXZpdHk6IFwidG9wXCIsIC8vIGB0b3BgIG9yIGBib3R0b21gXHJcbiAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogXCIjNENBRjUwXCIsXHJcbiAgICAgICAgY29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxyXG4gICAgICB9LFxyXG4gICAgfSkuc2hvd1RvYXN0KCk7XHJcbiAgICBjb25zdCBjbGFzc1RvQ29weSA9IGUudGFyZ2V0LmNsYXNzTmFtZTtcclxuICAgIGxldCBidXR0b24gPSBgPGJ1dHRvbiBjbGFzcz1cIiR7Y2xhc3NUb0NvcHl9XCI+Qm90b248L2J1dHRvbj5gO1xyXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoYnV0dG9uKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXktNVwiPlxyXG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGRcIj5Cb3RvbmVzIFRhaWx3aW5kPC9oMT5cclxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsXCI+XHJcbiAgICAgICAgICBEYSBjbGljIGVuIGVsIGJvdMOzbiBxdWUgcXVpZXJhcyB1dGlsaXphciB5IGNvcGlhcmFzIGVsIGPDs2RpZ28gYSB0dVxyXG4gICAgICAgICAgcG9ydGFwYXBlbGVzLlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNwYWNlLXktMTBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBzcGFjZS15LTVcIj5cclxuICAgICAgICAgIHtzaXplcy5tYXAoKHNpemUpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e3NpemV9PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57c2l6ZX08L2gzPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBnYXAtNVwiPlxyXG4gICAgICAgICAgICAgICAge2NvbG9ycy5tYXAoKGNvbG9yKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxCb3RvblxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17Y29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9e3NpemV9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGlja0V2ZW50PXsoZSkgPT4gY29weUNsYXNzVG9DbGlwYm9hcmQoZSl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBIb2xhXHJcbiAgICAgICAgICAgICAgICAgIDwvQm90b24+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLWdyYXktMTAwIHAtNSBtdC01IHNwYWNlLXktMlwiPlxyXG4gICAgICAgICAgICAgICAge2NvbG9ycy5tYXAoKGNvbG9yKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIHtgPEJ1dHRvbiBgfSBrZXk9e2NvbG9yfSBjb2xvcj17Y29sb3J9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17c2l6ZX0ge2A+YH1cclxuICAgICAgICAgICAgICAgICAgICBIb2xhXHJcbiAgICAgICAgICAgICAgICAgICAge2A8L0J1dHRvbj5gfVxyXG4gICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBzcGFjZS15LTVcIj5cclxuICAgICAgICAgIHtzaXplcy5tYXAoKHNpemUpID0+IChcclxuICAgICAgICAgICAgPGRpdiBrZXk9e3NpemV9PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj57c2l6ZX08L2gzPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBsZzpmbGV4LXJvdyBnYXAtNVwiPlxyXG4gICAgICAgICAgICAgICAge2NvbG9ycy5tYXAoKGNvbG9yKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgIDxCb3RvblxyXG4gICAgICAgICAgICAgICAgICAgIGtleT17Y29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e2NvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT17c2l6ZX1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrRXZlbnQ9eyhlKSA9PiBjb3B5Q2xhc3NUb0NsaXBib2FyZChlKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEhvbGFcclxuICAgICAgICAgICAgICAgICAgPC9Cb3Rvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJUb2FzdGlmeSIsIkJvdG9uIiwiY29sb3JzIiwic2l6ZXMiLCJCb3RvbmVzIiwiY29weUNsYXNzVG9DbGlwYm9hcmQiLCJlIiwidGV4dCIsImR1cmF0aW9uIiwiZ3Jhdml0eSIsInN0eWxlIiwiYmFja2dyb3VuZCIsImNvbG9yIiwiZm9udFNpemUiLCJzaG93VG9hc3QiLCJjbGFzc1RvQ29weSIsInRhcmdldCIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsIm1haW4iLCJkaXYiLCJoMSIsInAiLCJtYXAiLCJzaXplIiwiaDMiLCJ2YXJpYW50Iiwib25DbGlja0V2ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/botones.js\n"));

/***/ })

});