/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/breakfast.js":
/*!**************************!*\
  !*** ./src/breakfast.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ breakfast)
/* harmony export */ });
/* harmony import */ var _createMenuHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMenuHeader */ "./src/createMenuHeader.js");
/* harmony import */ var _createMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMenuItem */ "./src/createMenuItem.js");


function breakfast() {
  var breakfast = document.createElement("div");
  breakfast.setAttribute("class", "breakfast");
  var header = (0,_createMenuHeader__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "Delicious Menu", "Breakfast");
  breakfast.appendChild(header);
  var egg = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"])("Eggs Benedict", "$12", "Fresh brewed coffee and steamed milk");
  var toast = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"])("French Toast", "$14.5", "Rich Milk and Foam");
  var avocado = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"])("Avocado Toast with Poached Egg", "$16", "Fresh brewed coffee and steamed milk");
  var veggie = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"])("Veggie Omelette", "$21.5", "Rich Milk and Foam");
  var bluebarry = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"])("Blueberry Pancakes", "$12", "Fresh brewed coffee and steamed milk");
  var waffles = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"])("Belgian Waffles", "$14.5", "Rich Milk and Foam");
  breakfast.appendChild(egg);
  breakfast.appendChild(toast);
  breakfast.appendChild(avocado);
  breakfast.appendChild(veggie);
  breakfast.appendChild(bluebarry);
  breakfast.appendChild(waffles);
  return breakfast;
}

/***/ }),

/***/ "./src/coffee.js":
/*!***********************!*\
  !*** ./src/coffee.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ coffee)
/* harmony export */ });
/* harmony import */ var _createMenuHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createMenuHeader */ "./src/createMenuHeader.js");
/* harmony import */ var _createMenuItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createMenuItem */ "./src/createMenuItem.js");


function coffee() {
  var coffee = document.createElement("div");
  coffee.setAttribute("class", "coffee");
  var header = (0,_createMenuHeader__WEBPACK_IMPORTED_MODULE_0__["default"])("div", "Favourite Menu", "Coffee");
  coffee.appendChild(header);
  var espresso = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"])("Espresso", "$8.5", "Fresh brewed coffee and steamed milk");
  var latte = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"])("Latte", "$7.5", "Fresh brewed coffee and steamed milk");
  var flat = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"])("Flat White ", "$5.5", "Rich Milk and Foam");
  var turkish = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"])("Turkish Coffee", "$6.5", "Fresh brewed coffee and steamed milk");
  var cappucino = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"])("Cappuccino", "$7", "Rich Milk and Foam");
  var macchiato = (0,_createMenuItem__WEBPACK_IMPORTED_MODULE_1__["default"])("Macchiato", "$6.5", "Rich Milk and Foam");
  coffee.appendChild(espresso);
  coffee.appendChild(latte);
  coffee.appendChild(flat);
  coffee.appendChild(turkish);
  coffee.appendChild(cappucino);
  coffee.appendChild(macchiato);
  return coffee;
}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _assets_location_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/location.jpg */ "./src/assets/location.jpg");

function contact() {
  var contactTab = document.createElement("div");
  contactTab.setAttribute("class", "container tab-content");
  contactTab.setAttribute("id", "tab-content-3");
  var contact = document.createElement("div");
  contact.setAttribute("class", "contact");
  var phone = document.createElement("div");
  phone.setAttribute("class", "phone-number contact-text");
  phone.textContent = "📞  +251 945 657 325";
  var location = document.createElement("div");
  location.setAttribute("class", "location contact-text");
  location.textContent = "🏠 Churchill Avenue, Addis Ababa, Ethiopia";
  var imgContainer = document.createElement("div");
  imgContainer.setAttribute("class", "map");
  var img = document.createElement("img");
  img.src = _assets_location_jpg__WEBPACK_IMPORTED_MODULE_0__;
  img.alt = "Churchill Avenue street image";
  imgContainer.appendChild(img);
  contact.appendChild(phone);
  contact.appendChild(location);
  contact.appendChild(imgContainer);
  contactTab.appendChild(contact);
  return contactTab;
}

/***/ }),

/***/ "./src/createButton.js":
/*!*****************************!*\
  !*** ./src/createButton.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createButton)
/* harmony export */ });
function createButton(classAttribute, idAttribute, dataIndex) {
  var button = document.createElement("button");
  button.setAttribute("class", classAttribute);
  button.setAttribute("id", idAttribute);
  button.dataset.index = dataIndex;
  return button;
}

/***/ }),

/***/ "./src/createMenuHeader.js":
/*!*********************************!*\
  !*** ./src/createMenuHeader.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuHeader)
/* harmony export */ });
function menuHeader(element, content, title) {
  var el = document.createElement(element);
  el.setAttribute("class", "menu-header");
  var span = document.createElement("span");
  var h3 = document.createElement("h3");
  h3.textContent = title;
  span.textContent = content;
  el.appendChild(span);
  el.appendChild(h3);
  return el;
}

/***/ }),

/***/ "./src/createMenuItem.js":
/*!*******************************!*\
  !*** ./src/createMenuItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuItem)
/* harmony export */ });
function menuItem(name, price, description) {
  var element = document.createElement("div");
  element.setAttribute("class", "menu-detail");
  var menuItem = document.createElement("div");
  menuItem.setAttribute("class", "menu-item");
  var menuTitle = document.createElement("p");
  menuTitle.textContent = name;
  menuTitle.setAttribute("class", "menu-title");
  var pr = document.createElement("p");
  pr.textContent = price;
  pr.setAttribute("class", "price");
  menuItem.appendChild(menuTitle);
  menuItem.appendChild(pr);
  element.appendChild(menuItem);
  var brbtm = document.createElement("div");
  brbtm.setAttribute("class", "br-btm");
  element.appendChild(brbtm);
  var detail = document.createElement("div");
  detail.setAttribute("class", "detail");
  detail.textContent = description;
  element.appendChild(detail);
  return element;
}

/***/ }),

/***/ "./src/createTab.js":
/*!**************************!*\
  !*** ./src/createTab.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTab)
/* harmony export */ });
function createTab() {
  var container = document.createElement("nav");
  var logoContainer = document.createElement("div");
  var logoText = document.createElement("span");
  container.setAttribute("class", "navigation");
  logoText.setAttribute("class", "logo-text");
  logoContainer.setAttribute("class", "logo-container");
  logoText.textContent = "Wildflower Eatery";
  logoContainer.appendChild(logoText);
  container.appendChild(logoContainer);
  return container;
}

/***/ }),

/***/ "./src/createTabContent.js":
/*!*********************************!*\
  !*** ./src/createTabContent.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTabConent)
/* harmony export */ });
/* harmony import */ var _createButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createButton */ "./src/createButton.js");

function createTabConent() {
  var div = document.createElement("div");
  div.setAttribute("class", "tabs");

  // Tab2
  var btn1 = (0,_createButton__WEBPACK_IMPORTED_MODULE_0__["default"])("btn tab selected-tab", "tab-1", "0");
  btn1.textContent = "Home";
  div.appendChild(btn1);

  // Tab2
  var btn2 = (0,_createButton__WEBPACK_IMPORTED_MODULE_0__["default"])("btn tab", "tab-2", "1");
  btn2.textContent = "Our Menu";
  div.appendChild(btn2);

  // Tab3
  var btn3 = (0,_createButton__WEBPACK_IMPORTED_MODULE_0__["default"])("btn tab", "tab-3", "2");
  btn3.textContent = "Contact";
  div.appendChild(btn3);
  return div;
}

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ home)
/* harmony export */ });
/* harmony import */ var _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/pizza.jpg */ "./src/assets/pizza.jpg");

function home() {
  var homeContainer = document.createElement("div");
  homeContainer.setAttribute("class", "container tab-content active");
  homeContainer.setAttribute("id", "tab-content-1");
  var homeContent = document.createElement("div");
  homeContent.setAttribute("class", "home-content");
  var home = document.createElement("div");
  home.setAttribute("class", "home");
  homeContent.appendChild(home);
  homeContainer.appendChild(homeContent);
  var em = document.createElement("em");
  em.setAttribute("class", "welcome-text");
  em.textContent = "Welcome to Wildflower.co";
  home.appendChild(em);
  var h1 = document.createElement("h1");
  h1.textContent = "Cafe Eatry";
  home.appendChild(h1);
  var heroImg = document.createElement("img");
  heroImg.setAttribute("class", "hero-img");
  heroImg.src = _assets_pizza_jpg__WEBPACK_IMPORTED_MODULE_0__;
  home.appendChild(heroImg);
  var heroText = document.createElement("p");
  heroText.textContent = "your favourite pizza.";
  heroText.setAttribute("class", "hero-text");
  home.appendChild(heroText);
  return homeContainer;
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _breakfast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./breakfast */ "./src/breakfast.js");
/* harmony import */ var _coffee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./coffee */ "./src/coffee.js");


function menu() {
  var menuContainer = document.createElement("div");
  menuContainer.setAttribute("class", "container tab-content");
  menuContainer.setAttribute("id", "tab-content-2");
  var breakFast = (0,_breakfast__WEBPACK_IMPORTED_MODULE_0__["default"])();
  var coffeeMenu = (0,_coffee__WEBPACK_IMPORTED_MODULE_1__["default"])();
  var menu = document.createElement("div");
  menu.setAttribute("class", "menu-container");
  menu.appendChild(breakFast);
  menu.appendChild(coffeeMenu);
  menuContainer.appendChild(menu);
  return menuContainer;
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --dark-blue: #0c2d57;
  --soft-red: #f15e50;
  --dark-gray: #efecec;
}

*,
*::before,
*::after {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: 1.8rem;
  font-family: "Inter", sans-serif;
  color: var(--dark-gray);
}

#content {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  padding-bottom: 3.2rem;
}

.tab-content {
  display: none;
}

.active {
  display: block;
}

.container {
  width: 100%;
  max-width: 144rem;
  margin: 0 auto;
}

.navigation {
  background-color: rgba(12, 45, 87, 0.9);
  padding: 2.4rem 0;
  text-align: center;
}

.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3.2rem;
}

.logo-text {
  font-size: 5.6rem;
  font-style: italic;
  letter-spacing: -1.5px;
  line-height: 1.2;
  color: var(--soft-red);
  font-weight: 900;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 3.2rem;
}

.btn {
  border: 3px solid var(--soft-red);
  padding: 1.6rem 3.2rem;
  font-size: 2.2rem;
  color: var(--soft-red);
  background-color: var(--dark-gray);
  cursor: pointer;
  transition: all 1s ease;
}

.btn:hover {
  transform: translateY(-0.8rem);
}

.selected-tab {
  color: var(--dark-gray);
  background-color: var(--soft-red);
}
.home-content {
  margin: 4.8rem auto;
  width: 50%;
  background-color: rgba(12, 45, 87, 0.85);
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4.8rem 0;
}

.hero-img {
  height: 45rem;
  width: 45rem;
  object-fit: cover;
  border-radius: 50%;
}

.welcome-text {
  font-size: 2rem;
}

h1 {
  font-size: 5.6rem;
  margin-top: 0.5rem;
  font-weight: 900;
  margin-bottom: 3.2rem;
}

.hero-text {
  font-size: 2.4rem;
  margin: 2.4rem 0;
}

/* Menu */
.menu-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 9.6rem 0;
  gap: 4.8rem;
}

.breakfast,
.coffee {
  border-radius: 1.2rem;
  padding: 5.6rem 4.8rem;
  background-color: rgba(12, 45, 87, 0.9);
}

.menu-header {
  text-align: center;
  color: #efecec;
}

.menu-header h3 {
  font-weight: 700;
  font-size: 3.2rem;
  margin-top: 0.5rem;
  margin-bottom: 4.4rem;
}

.menu-item {
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-size: 2.4rem;
  font-weight: 700;
}
.price {
  color: #fd7e14;
}

.br-btm {
  width: 100%;
  border-bottom: 1px solid #a9aaac;
  margin: 1.8rem 0;
}

.detail {
  color: #a9aaac;
}

.menu-detail {
  margin-bottom: 3.2rem;
}

/* Contact Tab */
.contact {
  background-color: rgba(12, 45, 87, 0.9);
  padding: 6.4rem;
  margin: 5.6rem 0;
}

.map img {
  width: 100%;
  height: 100%;
}

.contact-text {
  font-size: 2.4rem;
}

.phone-number {
  margin-bottom: 3.2rem;
}

.location {
  margin-bottom: 2.4rem;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,oBAAoB;AACtB;;AAEA;;;EAGE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,gCAAgC;EAChC,uBAAuB;AACzB;;AAEA;EACE,4BAA4B;EAC5B,sBAAsB;EACtB,2BAA2B;EAC3B,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,iBAAiB;EACjB,cAAc;AAChB;;AAEA;EACE,uCAAuC;EACvC,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,sBAAsB;EACtB,gBAAgB;EAChB,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,WAAW;AACb;;AAEA;EACE,iCAAiC;EACjC,sBAAsB;EACtB,iBAAiB;EACjB,sBAAsB;EACtB,kCAAkC;EAClC,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,uBAAuB;EACvB,iCAAiC;AACnC;AACA;EACE,mBAAmB;EACnB,UAAU;EACV,wCAAwC;AAC1C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,SAAS;AACT;EACE,aAAa;EACb,qCAAqC;EACrC,iBAAiB;EACjB,WAAW;AACb;;AAEA;;EAEE,qBAAqB;EACrB,sBAAsB;EACtB,uCAAuC;AACzC;;AAEA;EACE,kBAAkB;EAClB,cAAc;AAChB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;EACX,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,cAAc;AAChB;;AAEA;EACE,WAAW;EACX,gCAAgC;EAChC,gBAAgB;AAClB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,qBAAqB;AACvB;;AAEA,gBAAgB;AAChB;EACE,uCAAuC;EACvC,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;AACvB","sourcesContent":[":root {\n  --dark-blue: #0c2d57;\n  --soft-red: #f15e50;\n  --dark-gray: #efecec;\n}\n\n*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nhtml {\n  font-size: 62.5%;\n}\n\nbody {\n  font-size: 1.8rem;\n  font-family: \"Inter\", sans-serif;\n  color: var(--dark-gray);\n}\n\n#content {\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  object-fit: cover;\n  padding-bottom: 3.2rem;\n}\n\n.tab-content {\n  display: none;\n}\n\n.active {\n  display: block;\n}\n\n.container {\n  width: 100%;\n  max-width: 144rem;\n  margin: 0 auto;\n}\n\n.navigation {\n  background-color: rgba(12, 45, 87, 0.9);\n  padding: 2.4rem 0;\n  text-align: center;\n}\n\n.logo-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 3.2rem;\n}\n\n.logo-text {\n  font-size: 5.6rem;\n  font-style: italic;\n  letter-spacing: -1.5px;\n  line-height: 1.2;\n  color: var(--soft-red);\n  font-weight: 900;\n}\n\n.tabs {\n  display: flex;\n  justify-content: center;\n  gap: 3.2rem;\n}\n\n.btn {\n  border: 3px solid var(--soft-red);\n  padding: 1.6rem 3.2rem;\n  font-size: 2.2rem;\n  color: var(--soft-red);\n  background-color: var(--dark-gray);\n  cursor: pointer;\n  transition: all 1s ease;\n}\n\n.btn:hover {\n  transform: translateY(-0.8rem);\n}\n\n.selected-tab {\n  color: var(--dark-gray);\n  background-color: var(--soft-red);\n}\n.home-content {\n  margin: 4.8rem auto;\n  width: 50%;\n  background-color: rgba(12, 45, 87, 0.85);\n}\n\n.home {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 4.8rem 0;\n}\n\n.hero-img {\n  height: 45rem;\n  width: 45rem;\n  object-fit: cover;\n  border-radius: 50%;\n}\n\n.welcome-text {\n  font-size: 2rem;\n}\n\nh1 {\n  font-size: 5.6rem;\n  margin-top: 0.5rem;\n  font-weight: 900;\n  margin-bottom: 3.2rem;\n}\n\n.hero-text {\n  font-size: 2.4rem;\n  margin: 2.4rem 0;\n}\n\n/* Menu */\n.menu-container {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  padding: 9.6rem 0;\n  gap: 4.8rem;\n}\n\n.breakfast,\n.coffee {\n  border-radius: 1.2rem;\n  padding: 5.6rem 4.8rem;\n  background-color: rgba(12, 45, 87, 0.9);\n}\n\n.menu-header {\n  text-align: center;\n  color: #efecec;\n}\n\n.menu-header h3 {\n  font-weight: 700;\n  font-size: 3.2rem;\n  margin-top: 0.5rem;\n  margin-bottom: 4.4rem;\n}\n\n.menu-item {\n  display: flex;\n  justify-content: space-between;\n  color: #fff;\n  font-size: 2.4rem;\n  font-weight: 700;\n}\n.price {\n  color: #fd7e14;\n}\n\n.br-btm {\n  width: 100%;\n  border-bottom: 1px solid #a9aaac;\n  margin: 1.8rem 0;\n}\n\n.detail {\n  color: #a9aaac;\n}\n\n.menu-detail {\n  margin-bottom: 3.2rem;\n}\n\n/* Contact Tab */\n.contact {\n  background-color: rgba(12, 45, 87, 0.9);\n  padding: 6.4rem;\n  margin: 5.6rem 0;\n}\n\n.map img {\n  width: 100%;\n  height: 100%;\n}\n\n.contact-text {\n  font-size: 2.4rem;\n}\n\n.phone-number {\n  margin-bottom: 3.2rem;\n}\n\n.location {\n  margin-bottom: 2.4rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/bg.jpg":
/*!***************************!*\
  !*** ./src/assets/bg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/bg.jpg";

/***/ }),

/***/ "./src/assets/location.jpg":
/*!*********************************!*\
  !*** ./src/assets/location.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/location.jpg";

/***/ }),

/***/ "./src/assets/pizza.jpg":
/*!******************************!*\
  !*** ./src/assets/pizza.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/pizza.jpg";

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _createTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTab */ "./src/createTab.js");
/* harmony import */ var _createTabContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createTabContent */ "./src/createTabContent.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _assets_bg_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/bg.jpg */ "./src/assets/bg.jpg");







var content = document.querySelector("#content");
var tab = (0,_createTabContent__WEBPACK_IMPORTED_MODULE_2__["default"])();
var nav = (0,_createTab__WEBPACK_IMPORTED_MODULE_1__["default"])();
var homeTab = (0,_home__WEBPACK_IMPORTED_MODULE_3__["default"])();
var menuTab = (0,_menu__WEBPACK_IMPORTED_MODULE_4__["default"])();
var contactTabEl = (0,_contact__WEBPACK_IMPORTED_MODULE_5__["default"])();
nav.appendChild(tab);
content.style.backgroundImage = "url(".concat(_assets_bg_jpg__WEBPACK_IMPORTED_MODULE_6__, ")");
content.appendChild(nav);
content.appendChild(homeTab);
content.appendChild(menuTab);
content.appendChild(contactTabEl);
var tabs = document.querySelectorAll(".tab");
var tabContents = document.querySelectorAll(".tab-content");
tabs.forEach(function (tab) {
  tab.addEventListener("click", function () {
    var index = tab.getAttribute("data-index");
    closeTab();
    displaySelectedTab();
    tab.classList.add("selected-tab");
    tabContents[index].classList.add("active");
  });
});
function closeTab() {
  tabContents.forEach(function (tabContent) {
    tabContent.classList.remove("active");
  });
}
function displaySelectedTab() {
  tabs.forEach(function (tab) {
    tab.classList.remove("selected-tab");
  });
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.40548307ed6f54f615be.js.map