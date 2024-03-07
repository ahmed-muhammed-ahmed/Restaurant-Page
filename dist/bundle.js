/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\n  --dark-blue: #0c2d57;\n  --soft-red: #f15e50;\n  --dark-gray: #efecec;\n}\n\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-size: 1.8rem;\n  font-family: \"Inter\", sans-serif;\n  color: var(--dark-gray);\n}\n\n#content {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  object-fit: cover;\n  padding-bottom: 3.2rem;\n}\n\n.tab-content {\n  display: none;\n}\n\n.active {\n  display: block;\n}\n\n.container {\n  width: 100%;\n  max-width: 144rem;\n  margin: 0 auto;\n}\n\n.navigation {\n  background-color: rgba(12, 45, 87, 0.9);\n  padding: 2.4rem 0;\n  text-align: center;\n}\n\n.logo-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 3.2rem;\n}\n\n.logo-text {\n  font-size: 5.6rem;\n  font-style: italic;\n  letter-spacing: -1.5px;\n  line-height: 1.2;\n  color: var(--soft-red);\n  font-weight: 900;\n}\n\n.tabs {\n  display: flex;\n  justify-content: center;\n  gap: 3.2rem;\n}\n\n.btn {\n  border: 3px solid var(--soft-red);\n  padding: 1.6rem 3.2rem;\n  font-size: 2.2rem;\n  color: var(--soft-red);\n  background-color: var(--dark-gray);\n  cursor: pointer;\n  transition: all 1s ease;\n}\n\n.btn:hover {\n  transform: translateY(-0.8rem);\n}\n\n.selected-tab {\n  color: var(--dark-gray);\n  background-color: var(--soft-red);\n}\n.home-content {\n  margin: 4.8rem auto;\n  width: 50%;\n  background-color: rgba(12, 45, 87, 0.85);\n}\n\n.home {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 4.8rem 0;\n}\n\n.hero-img {\n  height: 45rem;\n  width: 45rem;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.welcome-text {\n  font-size: 2rem;\n}\n\nh1 {\n  font-size: 5.6rem;\n  margin-top: 0.5rem;\n  font-weight: 900;\n  margin-bottom: 3.2rem;\n}\n\n.hero-text {\n  font-size: 2.4rem;\n  margin: 2.4rem 0;\n}\n\n/* Menu */\n.menu-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  padding: 9.6rem 0;\n  gap: 4.8rem;\n}\n\n.breakfast,\n.coffee {\n  border-radius: 1.2rem;\n  padding: 5.6rem 4.8rem;\n  background-color: rgba(12, 45, 87, 0.9);\n}\n\n.menu-header {\n  text-align: center;\n  color: #efecec;\n}\n\n.menu-header h3 {\n  font-weight: 700;\n  font-size: 3.2rem;\n  margin-top: 0.5rem;\n  margin-bottom: 4.4rem;\n}\n\n.menu-item {\n  display: flex;\n  justify-content: space-between;\n  color: #fff;\n  font-size: 2.4rem;\n  font-weight: 700;\n}\n.price {\n  color: #fd7e14;\n}\n\n.br-btm {\n  width: 100%;\n  border-bottom: 1px solid #a9aaac;\n  margin: 1.8rem 0;\n}\n\n.detail {\n  color: #a9aaac;\n}\n\n.menu-detail {\n  margin-bottom: 3.2rem;\n}\n\n/* Contact Tab */\n.contact {\n  background-color: rgba(12, 45, 87, 0.9);\n  padding: 6.4rem;\n  margin: 5.6rem 0;\n}\n\n.map img {\n  width: 100%;\n  height: 100%;\n}\n\n.contact-text {\n  font-size: 2.4rem;\n}\n\n.phone-number {\n  margin-bottom: 3.2rem;\n}\n\n.location {\n  margin-bottom: 2.4rem;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/img/location.jpg":
/*!******************************!*\
  !*** ./src/img/location.jpg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/location.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/img/location.jpg?");

/***/ }),

/***/ "./src/img/pizza.jpg":
/*!***************************!*\
  !*** ./src/img/pizza.jpg ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"img/pizza.jpg\");\n\n//# sourceURL=webpack://restaurant-page/./src/img/pizza.jpg?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/breakfast.js":
/*!**************************!*\
  !*** ./src/breakfast.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ breakfast)\n/* harmony export */ });\n/* harmony import */ var _createMenuHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMenuHeader */ \"./src/createMenuHeader.js\");\n/* harmony import */ var _createMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMenuItem */ \"./src/createMenuItem.js\");\n\n\nfunction breakfast() {\n  const breakfast = document.createElement(\"div\");\n  breakfast.setAttribute(\"class\", \"breakfast\");\n  const header = (0,_createMenuHeader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"Delicious Menu\", \"Breakfast\");\n  breakfast.appendChild(header);\n\n  const egg = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    \"Eggs Benedict\",\n    \"$12\",\n    \"Fresh brewed coffee and steamed milk\"\n  );\n\n  const toast = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"French Toast\", \"$14.5\", \"Rich Milk and Foam\");\n  const avocado = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    \"Avocado Toast with Poached Egg\",\n    \"$16\",\n    \"Fresh brewed coffee and steamed milk\"\n  );\n  const veggie = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Veggie Omelette\", \"$21.5\", \"Rich Milk and Foam\");\n  const bluebarry = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    \"Blueberry Pancakes\",\n    \"$12\",\n    \"Fresh brewed coffee and steamed milk\"\n  );\n  const waffles = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Belgian Waffles\", \"$14.5\", \"Rich Milk and Foam\");\n  breakfast.appendChild(egg);\n  breakfast.appendChild(toast);\n  breakfast.appendChild(avocado);\n  breakfast.appendChild(veggie);\n  breakfast.appendChild(bluebarry);\n  breakfast.appendChild(waffles);\n  return breakfast;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/breakfast.js?");

/***/ }),

/***/ "./src/coffee.js":
/*!***********************!*\
  !*** ./src/coffee.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ coffee)\n/* harmony export */ });\n/* harmony import */ var _createMenuHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMenuHeader */ \"./src/createMenuHeader.js\");\n/* harmony import */ var _createMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMenuItem */ \"./src/createMenuItem.js\");\n\n\nfunction coffee() {\n  const coffee = document.createElement(\"div\");\n  coffee.setAttribute(\"class\", \"coffee\");\n  const header = (0,_createMenuHeader__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\", \"Favourite Menu\", \"Coffee\");\n  coffee.appendChild(header);\n\n  const espresso = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    \"Espresso\",\n    \"$8.5\",\n    \"Fresh brewed coffee and steamed milk\"\n  );\n  const latte = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    \"Latte\",\n    \"$7.5\",\n    \"Fresh brewed coffee and steamed milk\"\n  );\n\n  const flat = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Flat White \", \"$5.5\", \"Rich Milk and Foam\");\n  const turkish = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n    \"Turkish Coffee\",\n    \"$6.5\",\n    \"Fresh brewed coffee and steamed milk\"\n  );\n  const cappucino = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Cappuccino\", \"$7\", \"Rich Milk and Foam\");\n  const macchiato = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"Macchiato\", \"$6.5\", \"Rich Milk and Foam\");\n\n  coffee.appendChild(espresso);\n  coffee.appendChild(latte);\n  coffee.appendChild(flat);\n  coffee.appendChild(turkish);\n  coffee.appendChild(cappucino);\n  coffee.appendChild(macchiato);\n  return coffee;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/coffee.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ contact)\n/* harmony export */ });\n/* harmony import */ var _img_location_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/location.jpg */ \"./src/img/location.jpg\");\n\nfunction contact() {\n  const contactTab = document.createElement(\"div\");\n  contactTab.setAttribute(\"class\", \"container tab-content\");\n  contactTab.setAttribute(\"id\", \"tab-content-3\");\n  const contact = document.createElement(\"div\");\n  contact.setAttribute(\"class\", \"contact\");\n\n  const phone = document.createElement(\"div\");\n  phone.setAttribute(\"class\", \"phone-number contact-text\");\n  phone.textContent = \"📞  +251 945 657 325\";\n\n  const location = document.createElement(\"div\");\n  location.setAttribute(\"class\", \"location contact-text\");\n  location.textContent = \"🏠 Churchill Avenue, Addis Ababa, Ethiopia\";\n\n  const imgContainer = document.createElement(\"div\");\n  imgContainer.setAttribute(\"class\", \"map\");\n\n  const img = document.createElement(\"img\");\n  img.src = _img_location_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  img.alt = \"Churchill Avenue street image\";\n\n  imgContainer.appendChild(img);\n\n  contact.appendChild(phone);\n  contact.appendChild(location);\n  contact.appendChild(imgContainer);\n\n  contactTab.appendChild(contact);\n  return contactTab;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/createButton.js":
/*!*****************************!*\
  !*** ./src/createButton.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createButton)\n/* harmony export */ });\nfunction createButton(classAttribute, idAttribute, dataIndex) {\n  const button = document.createElement(\"button\");\n  button.setAttribute(\"class\", classAttribute);\n  button.setAttribute(\"id\", idAttribute);\n  button.dataset.index = dataIndex;\n  return button;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/createButton.js?");

/***/ }),

/***/ "./src/createMenuHeader.js":
/*!*********************************!*\
  !*** ./src/createMenuHeader.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuHeader)\n/* harmony export */ });\nfunction menuHeader(element, content, title) {\n  const el = document.createElement(element);\n  el.setAttribute(\"class\", \"menu-header\");\n  const span = document.createElement(\"span\");\n  const h3 = document.createElement(\"h3\");\n  h3.textContent = title;\n  span.textContent = content;\n  el.appendChild(span);\n  el.appendChild(h3);\n  return el;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/createMenuHeader.js?");

/***/ }),

/***/ "./src/createMenuItem.js":
/*!*******************************!*\
  !*** ./src/createMenuItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuItem)\n/* harmony export */ });\nfunction menuItem(name, price, description) {\n  const element = document.createElement(\"div\");\n  element.setAttribute(\"class\", \"menu-detail\");\n\n  const menuItem = document.createElement(\"div\");\n  menuItem.setAttribute(\"class\", \"menu-item\");\n\n  const menuTitle = document.createElement(\"p\");\n  menuTitle.textContent = name;\n  menuTitle.setAttribute(\"class\", \"menu-title\");\n\n  const pr = document.createElement(\"p\");\n  pr.textContent = price;\n  pr.setAttribute(\"class\", \"price\");\n\n  menuItem.appendChild(menuTitle);\n  menuItem.appendChild(pr);\n  element.appendChild(menuItem);\n\n  const brbtm = document.createElement(\"div\");\n  brbtm.setAttribute(\"class\", \"br-btm\");\n  element.appendChild(brbtm);\n\n  const detail = document.createElement(\"div\");\n  detail.setAttribute(\"class\", \"detail\");\n  detail.textContent = description;\n  element.appendChild(detail);\n\n  return element;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/createMenuItem.js?");

/***/ }),

/***/ "./src/createTab.js":
/*!**************************!*\
  !*** ./src/createTab.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTab)\n/* harmony export */ });\nfunction createTab() {\n  const container = document.createElement(\"nav\");\n  const logoContainer = document.createElement(\"div\");\n  const logoText = document.createElement(\"span\");\n  container.setAttribute(\"class\", \"navigation\");\n  logoText.setAttribute(\"class\", \"logo-text\");\n\n  logoContainer.setAttribute(\"class\", \"logo-container\");\n  logoText.textContent = \"Wildflower Eatery\";\n\n  logoContainer.appendChild(logoText);\n  container.appendChild(logoContainer);\n  return container;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/createTab.js?");

/***/ }),

/***/ "./src/createTabContent.js":
/*!*********************************!*\
  !*** ./src/createTabContent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createTabConent)\n/* harmony export */ });\n/* harmony import */ var _createButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createButton */ \"./src/createButton.js\");\n\nfunction createTabConent() {\n  const div = document.createElement(\"div\");\n  div.setAttribute(\"class\", \"tabs\");\n\n  // Tab2\n  const btn1 = (0,_createButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"btn tab selected-tab\", \"tab-1\", \"0\");\n  btn1.textContent = \"Home\";\n  div.appendChild(btn1);\n\n  // Tab2\n  const btn2 = (0,_createButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"btn tab\", \"tab-2\", \"1\");\n  btn2.textContent = \"Our Menu\";\n  div.appendChild(btn2);\n\n  // Tab3\n  const btn3 = (0,_createButton__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"btn tab\", \"tab-3\", \"2\");\n  btn3.textContent = \"Contact\";\n  div.appendChild(btn3);\n\n  return div;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/createTabContent.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ home)\n/* harmony export */ });\n/* harmony import */ var _img_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/pizza.jpg */ \"./src/img/pizza.jpg\");\n\nfunction home() {\n  const homeContainer = document.createElement(\"div\");\n  homeContainer.setAttribute(\"class\", \"container tab-content active\");\n  homeContainer.setAttribute(\"id\", \"tab-content-1\");\n\n  const homeContent = document.createElement(\"div\");\n  homeContent.setAttribute(\"class\", \"home-content\");\n\n  const home = document.createElement(\"div\");\n  home.setAttribute(\"class\", \"home\");\n\n  homeContent.appendChild(home);\n  homeContainer.appendChild(homeContent);\n\n  const em = document.createElement(\"em\");\n  em.setAttribute(\"class\", \"welcome-text\");\n\n  em.textContent = \"Welcome to Wildflower.co\";\n  home.appendChild(em);\n\n  const h1 = document.createElement(\"h1\");\n  h1.textContent = \"Cafe Eatry\";\n  home.appendChild(h1);\n\n  const heroImg = document.createElement(\"img\");\n  heroImg.setAttribute(\"class\", \"hero-img\");\n  heroImg.src = _img_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  home.appendChild(heroImg);\n\n  const heroText = document.createElement(\"p\");\n  heroText.textContent = \"your favourite pizza.\";\n  heroText.setAttribute(\"class\", \"hero-text\");\n  home.appendChild(heroText);\n  return homeContainer;\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _createTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTab */ \"./src/createTab.js\");\n/* harmony import */ var _createTabContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTabContent */ \"./src/createTabContent.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\nconst content = document.querySelector(\"#content\");\nconst tab = (0,_createTabContent__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nconst nav = (0,_createTab__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst homeTab = (0,_home__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nconst menuTab = (0,_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nconst contactTabEl = (0,_contact__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\nnav.appendChild(tab);\ncontent.style.backgroundImage = 'url(\"./img/bg.jpg\")';\ncontent.appendChild(nav);\ncontent.appendChild(homeTab);\ncontent.appendChild(menuTab);\ncontent.appendChild(contactTabEl);\n\nconst tabs = document.querySelectorAll(\".tab\");\nconst tabContents = document.querySelectorAll(\".tab-content\");\n\ntabs.forEach(function (tab) {\n  tab.addEventListener(\"click\", function () {\n    const index = tab.getAttribute(\"data-index\");\n\n    closeTab();\n    displaySelectedTab();\n    tab.classList.add(\"selected-tab\");\n    tabContents[index].classList.add(\"active\");\n  });\n});\n\nfunction closeTab() {\n  tabContents.forEach(function (tabContent) {\n    tabContent.classList.remove(\"active\");\n  });\n}\n\nfunction displaySelectedTab() {\n  tabs.forEach(function (tab) {\n    tab.classList.remove(\"selected-tab\");\n  });\n}\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _breakfast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakfast */ \"./src/breakfast.js\");\n/* harmony import */ var _coffee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coffee */ \"./src/coffee.js\");\n\n\nfunction menu() {\n  const menuContainer = document.createElement(\"div\");\n  menuContainer.setAttribute(\"class\", \"container tab-content\");\n  menuContainer.setAttribute(\"id\", \"tab-content-2\");\n  const breakFast = (0,_breakfast__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const coffeeMenu = (0,_coffee__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n  const menu = document.createElement(\"div\");\n  menu.setAttribute(\"class\", \"menu-container\");\n  menu.appendChild(breakFast);\n  menu.appendChild(coffeeMenu);\n\n  menuContainer.appendChild(menu);\n  return menuContainer;\n}\n\n/*\n      <div class=\"menu-container container\">\n        <div class=\"breakfast\">\n          <div class=\"menu-header\">\n            <span>Delicious Menu </span>\n            <h3>Breakfast</h3>\n          </div>\n\n          <div class=\"menu-detail\">\n            <div class=\"menu-item\">\n              <p class=\"menu-title\">Eggs Benedict</p>\n              <p class=\"price\">$12</p>\n            </div>\n            <div class=\"br-btm\"></div>\n            <div class=\"detail\">Fresh brewed coffee and steamed milk</div>\n          </div>\n\n          <div class=\"menu-detail\">\n            <div class=\"menu-item\">\n              <p class=\"menu-title\">French Toast</p>\n              <p class=\"price\"><span class=\"discount\">$14.5</span>$10</p>\n            </div>\n            <div class=\"br-btm\"></div>\n            <div class=\"detail\">Rich Milk and Foam</div>\n          </div>\n\n          <div class=\"menu-detail\">\n            <div class=\"menu-item\">\n              <p class=\"menu-title\">Avocado Toast with Poached Egg</p>\n              <p class=\"price\">$16</p>\n            </div>\n            <div class=\"br-btm\"></div>\n            <div class=\"detail\">Fresh brewed coffee and steamed milk</div>\n          </div>\n\n          <div class=\"menu-detail\">\n            <div class=\"menu-item\">\n              <p class=\"menu-title\">\n                Veggie Omelette <span class=\"badge\">Recommended</span>\n              </p>\n              <p class=\"price\">$20</p>\n            </div>\n            <div class=\"br-btm\"></div>\n            <div class=\"detail\">Rich Milk and Foam</div>\n          </div>\n\n          <div class=\"menu-detail\">\n            <div class=\"menu-item\">\n              <p class=\"menu-title\">Blueberry Pancakes</p>\n              <p class=\"price\">$12</p>\n            </div>\n            <div class=\"br-btm\"></div>\n            <div class=\"detail\">Fresh brewed coffee and steamed milk</div>\n          </div>\n\n          <div class=\"menu-detail\">\n            <div class=\"menu-item\">\n              <p class=\"menu-title\">Belgian Waffles</p>\n              <p class=\"price\">$22</p>\n            </div>\n            <div class=\"br-btm\"></div>\n            <div class=\"detail\">Rich Milk and Foam</div>\n          </div>\n        </div>\n\n        <div class=\"coffee\">\n          <div class=\"menu-header\">\n            <span>Favourite Menu </span>\n            <h3>Coffee</h3>\n          </div>\n\n          <div class=\"menu-detail\">\n            <div class=\"menu-item\">\n              <p class=\"menu-title\">Espresso</p>\n              <p class=\"price\"><span class=\"discount\">$8.5</span>$7.50</p>\n            </div>\n            <div class=\"br-btm\"></div>\n            <div class=\"detail\">Fresh brewed coffee and steamed milk</div>\n          </div>\n\n          <div class=\"menu-detail\">\n            <div class=\"menu-item\">\n              <p class=\"menu-title\">Latte</p>\n              <p class=\"price\">$8.50</p>\n            </div>\n            <div class=\"br-btm\"></div>\n            <div class=\"detail\">Fresh brewed coffee and steamed milk</div>\n          </div>\n\n          <div class=\"menu-detail\">\n            <div class=\"menu-item\">\n              <p class=\"menu-title\">\n                Flat White <span class=\"badge\">Recommended</span>\n              </p>\n              <p class=\"price\">$5.5</p>\n            </div>\n            <div class=\"br-btm\"></div>\n            <div class=\"detail\">Rich Milk and Foam</div>\n          </div>\n\n          <div class=\"menu-detail\">\n            <div class=\"menu-item\">\n              <p class=\"menu-title\">Turkish Coffee</p>\n              <p class=\"price\">$6.5</p>\n            </div>\n            <div class=\"br-btm\"></div>\n            <div class=\"detail\">Fresh brewed coffee and steamed milk</div>\n          </div>\n\n          <div class=\"menu-detail\">\n            <div class=\"menu-item\">\n              <p class=\"menu-title\">Cappuccino</p>\n              <p class=\"price\">$7</p>\n            </div>\n            <div class=\"br-btm\"></div>\n            <div class=\"detail\">Rich Milk and Foam</div>\n          </div>\n\n          <div class=\"menu-detail\">\n            <div class=\"menu-item\">\n              <p class=\"menu-title\">Macchiato</p>\n              <p class=\"price\">$6.50</p>\n            </div>\n            <div class=\"br-btm\"></div>\n            <div class=\"detail\">Rich Milk and Foam</div>\n          </div>\n        </div>\n      </div>\n */\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;