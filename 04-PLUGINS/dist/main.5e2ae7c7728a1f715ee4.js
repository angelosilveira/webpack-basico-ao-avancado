/*! For license information please see main.5e2ae7c7728a1f715ee4.js.LICENSE.txt */
(()=>{"use strict";var __webpack_modules__={"./src/components/heading/heading.css":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://04-PLUGINS/./src/components/heading/heading.css?")},"./src/components/heading/heading.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Heading)\n/* harmony export */ });\n/* harmony import */ var _heading_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./heading.css */ "./src/components/heading/heading.css");\n\n\nclass Heading {\n  create(title) {\n    const h1 = document.createElement("h1");\n    h1.innerText = title;\n    h1.classList.add("title");\n    document.querySelector("body").appendChild(h1);\n  }\n}\n\n\n//# sourceURL=webpack://04-PLUGINS/./src/components/heading/heading.js?')},"./src/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_heading_heading__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/heading/heading */ "./src/components/heading/heading.js");\n\n\nconst heading = new _components_heading_heading__WEBPACK_IMPORTED_MODULE_0__.default();\n\nheading.create("pagina principal");\n\nconsole.log("1.0.2");\nconsole.log("8080");\nconsole.log("fsfsfsfsfsfsfsfsf");\n\n\n//# sourceURL=webpack://04-PLUGINS/./src/index.js?')}},__webpack_module_cache__={};function __webpack_require__(e){var _=__webpack_module_cache__[e];if(void 0!==_)return _.exports;var n=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](n,n.exports,__webpack_require__),n.exports}__webpack_require__.d=(e,_)=>{for(var n in _)__webpack_require__.o(_,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:_[n]})},__webpack_require__.o=(e,_)=>Object.prototype.hasOwnProperty.call(e,_),__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var __webpack_exports__=__webpack_require__("./src/index.js")})();