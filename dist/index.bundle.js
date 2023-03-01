"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n    --txt-color: #2D2926FF;\r\n    --red-bg: #e94b3c;\r\n}\r\n\r\nhtml,\r\nbody,\r\n#content,\r\n#sushi-bg {\r\n    padding: 0;\r\n    margin: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    min-width: 1170px;\r\n    min-height: 750px;\r\n}\r\n\r\n#sushi-bg {\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    opacity: 1;\r\n    top: 106px;\r\n    height: calc(100% - 106px);\r\n    z-index: -1;\r\n}\r\n\r\nnav {\r\n    background-color: var(--red-bg);\r\n    padding: 15px 50px;\r\n    background: linear-gradient(var(--txt-color), 25%, var(--red-bg), 85%, var(--txt-color));\r\n\r\n    display: grid;\r\n    grid-template: 1fr / 1fr 2fr;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n}\r\n\r\n#sushi-icon {\r\n    height: 75px;\r\n}\r\n\r\nnav h1 {\r\n    margin: 0;\r\n    font-size: 50pt;\r\n    color: var(--txt-color );\r\n    min-width: 328px;\r\n    align-self: center;\r\n    margin-left: 10px;\r\n}\r\n\r\nnav ul {\r\n    list-style: none;\r\n    font-size: 30pt;\r\n    color: var(--txt-color);\r\n    margin: 0;\r\n    align-self: center;  \r\n\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    gap: 20px;\r\n}\r\n\r\nli a {\r\n    text-decoration: none;\r\n    color: var(--txt-color);\r\n}\r\n\r\nli a:hover {\r\n    display: inline-block;\r\n    transform: scale(1.2);\r\n}\r\n\r\n/** Start of About Section */\r\n\r\n.about,\r\n.contact,\r\n.menu {\r\n    display: flex;\r\n    flex-flow: column;\r\n    align-items: center;\r\n    \r\n    margin-left: 250px;\r\n    margin-top: 65px;\r\n    width: 750px;\r\n\r\n    color: var(--txt-color);\r\n    text-shadow: 1px 1px 1px black;\r\n    background-color: rgba(233, 75, 60, .6);\r\n    border-radius: 25px;\r\n\r\n    z-index: 1;\r\n}\r\n\r\n.about h1,\r\n.contact h1,\r\n.menu h1 {\r\n    font-size: 40pt;\r\n}\r\n\r\n.about-txt {\r\n    font-size: 20pt;\r\n    margin-bottom: 15px;\r\n}\r\n\r\nh2 {\r\n    margin: 0;\r\n}\r\n\r\n#sushi-chef {\r\n    width: 500px;\r\n    border-radius: 10px;\r\n    border: 1px solid var(--txt-color);\r\n}\r\n\r\n#order-btn {\r\n    height: 40px;\r\n    width: 100px;\r\n    border-radius: 25px;\r\n    font-weight: bold;\r\n    box-shadow: 2px 2px 2px gray;\r\n\r\n    margin: 15px 0px;\r\n}\r\n\r\n#order-btn:hover {\r\n    transform: scale(1.1);\r\n    cursor: pointer;\r\n}\r\n\r\n#order-btn:active {\r\n    transform: scale(1);\r\n}\r\n\r\n/** Start of Contact Section */\r\n.contact {\r\n    display: grid;\r\n    row-gap: 20px;\r\n}\r\n\r\n.contact h1 {\r\n    justify-self: center;\r\n    margin: 20px 0 0;\r\n\r\n}\r\n\r\n.contact > div {\r\n    margin-left: 150px;\r\n}\r\n\r\n.location,\r\n.time,\r\n.telephone,\r\n.email {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n#location-pin,\r\n#clock-icon,\r\n#phone-icon,\r\n#email-icon {\r\n    width: 30px;\r\n}\r\n\r\n#clock-icon {\r\n    align-self: flex-start;\r\n}\r\n\r\ntextarea {\r\n    resize: none;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    width: fit-content;\r\n\r\n    justify-self: center;\r\n    margin-bottom: 20px;\r\n\r\n    color: black;\r\n    text-shadow: none;\r\n}\r\n\r\nform h2 {\r\n    align-self: center;\r\n}\r\n\r\nform div {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\nform div input {\r\n    margin-left: auto;\r\n}\r\n\r\nform button {\r\n    width: 120px;\r\n    height: 25px;\r\n    align-self: center;\r\n}\r\n\r\nform button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\nform button:active {\r\n    transform: scale(0.9);\r\n}\r\n\r\n/** Start of Menu Section */\r\n.menu {\r\n    width: max(1050px, 55%);\r\n    height: 735px;\r\n    overflow-y: scroll;\r\n\r\n    margin-top: 35px;\r\n    margin-left: 30px;\r\n\r\n    padding: 0 25px 20px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.menu > div {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(435px, 1fr));\r\n    gap: 35px;\r\n    \r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.menu > div img {\r\n    width: 300px;\r\n    height: 200px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.menu > div > div {\r\n    display: flex;\r\n    gap: 15px;\r\n}\r\n\r\n.info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.name-price {\r\n    padding: 0 10px;\r\n    width: 280px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.description {\r\n    color: black;\r\n    text-shadow: none;\r\n    width: 150px;\r\n    font-size: 20px;\r\n    font-weight: 550;\r\n    padding: 5px 0;\r\n}\r\n\r\n.description p {\r\n    margin: 0;\r\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;;;;IAII,UAAU;IACV,SAAS;IACT,YAAY;IACZ,WAAW;IACX,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,UAAU;IACV,UAAU;IACV,0BAA0B;IAC1B,WAAW;AACf;;AAEA;IACI,+BAA+B;IAC/B,kBAAkB;IAClB,wFAAwF;;IAExF,aAAa;IACb,4BAA4B;AAChC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,SAAS;IACT,eAAe;IACf,wBAAwB;IACxB,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,uBAAuB;IACvB,SAAS;IACT,kBAAkB;;IAElB,aAAa;IACb,6BAA6B;IAC7B,SAAS;AACb;;AAEA;IACI,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,qBAAqB;IACrB,qBAAqB;AACzB;;AAEA,4BAA4B;;AAE5B;;;IAGI,aAAa;IACb,iBAAiB;IACjB,mBAAmB;;IAEnB,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;;IAEZ,uBAAuB;IACvB,8BAA8B;IAC9B,uCAAuC;IACvC,mBAAmB;;IAEnB,UAAU;AACd;;AAEA;;;IAGI,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,mBAAmB;IACnB,kCAAkC;AACtC;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,mBAAmB;IACnB,iBAAiB;IACjB,4BAA4B;;IAE5B,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,eAAe;AACnB;;AAEA;IACI,mBAAmB;AACvB;;AAEA,8BAA8B;AAC9B;IACI,aAAa;IACb,aAAa;AACjB;;AAEA;IACI,oBAAoB;IACpB,gBAAgB;;AAEpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;;;;IAII,aAAa;IACb,mBAAmB;IACnB,SAAS;AACb;;AAEA;;;;IAII,WAAW;AACf;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,kBAAkB;;IAElB,oBAAoB;IACpB,mBAAmB;;IAEnB,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;AACtB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,qBAAqB;AACzB;;AAEA,2BAA2B;AAC3B;IACI,uBAAuB;IACvB,aAAa;IACb,kBAAkB;;IAElB,gBAAgB;IAChB,iBAAiB;;IAEjB,oBAAoB;;IAEpB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,2DAA2D;IAC3D,SAAS;;IAET,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;AACZ;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,cAAc;AAClB;;AAEA;IACI,SAAS;AACb","sourcesContent":["html {\r\n    --txt-color: #2D2926FF;\r\n    --red-bg: #e94b3c;\r\n}\r\n\r\nhtml,\r\nbody,\r\n#content,\r\n#sushi-bg {\r\n    padding: 0;\r\n    margin: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    min-width: 1170px;\r\n    min-height: 750px;\r\n}\r\n\r\n#sushi-bg {\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    opacity: 1;\r\n    top: 106px;\r\n    height: calc(100% - 106px);\r\n    z-index: -1;\r\n}\r\n\r\nnav {\r\n    background-color: var(--red-bg);\r\n    padding: 15px 50px;\r\n    background: linear-gradient(var(--txt-color), 25%, var(--red-bg), 85%, var(--txt-color));\r\n\r\n    display: grid;\r\n    grid-template: 1fr / 1fr 2fr;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n}\r\n\r\n#sushi-icon {\r\n    height: 75px;\r\n}\r\n\r\nnav h1 {\r\n    margin: 0;\r\n    font-size: 50pt;\r\n    color: var(--txt-color );\r\n    min-width: 328px;\r\n    align-self: center;\r\n    margin-left: 10px;\r\n}\r\n\r\nnav ul {\r\n    list-style: none;\r\n    font-size: 30pt;\r\n    color: var(--txt-color);\r\n    margin: 0;\r\n    align-self: center;  \r\n\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    gap: 20px;\r\n}\r\n\r\nli a {\r\n    text-decoration: none;\r\n    color: var(--txt-color);\r\n}\r\n\r\nli a:hover {\r\n    display: inline-block;\r\n    transform: scale(1.2);\r\n}\r\n\r\n/** Start of About Section */\r\n\r\n.about,\r\n.contact,\r\n.menu {\r\n    display: flex;\r\n    flex-flow: column;\r\n    align-items: center;\r\n    \r\n    margin-left: 250px;\r\n    margin-top: 65px;\r\n    width: 750px;\r\n\r\n    color: var(--txt-color);\r\n    text-shadow: 1px 1px 1px black;\r\n    background-color: rgba(233, 75, 60, .6);\r\n    border-radius: 25px;\r\n\r\n    z-index: 1;\r\n}\r\n\r\n.about h1,\r\n.contact h1,\r\n.menu h1 {\r\n    font-size: 40pt;\r\n}\r\n\r\n.about-txt {\r\n    font-size: 20pt;\r\n    margin-bottom: 15px;\r\n}\r\n\r\nh2 {\r\n    margin: 0;\r\n}\r\n\r\n#sushi-chef {\r\n    width: 500px;\r\n    border-radius: 10px;\r\n    border: 1px solid var(--txt-color);\r\n}\r\n\r\n#order-btn {\r\n    height: 40px;\r\n    width: 100px;\r\n    border-radius: 25px;\r\n    font-weight: bold;\r\n    box-shadow: 2px 2px 2px gray;\r\n\r\n    margin: 15px 0px;\r\n}\r\n\r\n#order-btn:hover {\r\n    transform: scale(1.1);\r\n    cursor: pointer;\r\n}\r\n\r\n#order-btn:active {\r\n    transform: scale(1);\r\n}\r\n\r\n/** Start of Contact Section */\r\n.contact {\r\n    display: grid;\r\n    row-gap: 20px;\r\n}\r\n\r\n.contact h1 {\r\n    justify-self: center;\r\n    margin: 20px 0 0;\r\n\r\n}\r\n\r\n.contact > div {\r\n    margin-left: 150px;\r\n}\r\n\r\n.location,\r\n.time,\r\n.telephone,\r\n.email {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n#location-pin,\r\n#clock-icon,\r\n#phone-icon,\r\n#email-icon {\r\n    width: 30px;\r\n}\r\n\r\n#clock-icon {\r\n    align-self: flex-start;\r\n}\r\n\r\ntextarea {\r\n    resize: none;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    width: fit-content;\r\n\r\n    justify-self: center;\r\n    margin-bottom: 20px;\r\n\r\n    color: black;\r\n    text-shadow: none;\r\n}\r\n\r\nform h2 {\r\n    align-self: center;\r\n}\r\n\r\nform div {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\nform div input {\r\n    margin-left: auto;\r\n}\r\n\r\nform button {\r\n    width: 120px;\r\n    height: 25px;\r\n    align-self: center;\r\n}\r\n\r\nform button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\nform button:active {\r\n    transform: scale(0.9);\r\n}\r\n\r\n/** Start of Menu Section */\r\n.menu {\r\n    width: max(1050px, 55%);\r\n    height: 735px;\r\n    overflow-y: scroll;\r\n\r\n    margin-top: 35px;\r\n    margin-left: 30px;\r\n\r\n    padding: 0 25px 20px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.menu > div {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(435px, 1fr));\r\n    gap: 35px;\r\n    \r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.menu > div img {\r\n    width: 300px;\r\n    height: 200px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.menu > div > div {\r\n    display: flex;\r\n    gap: 15px;\r\n}\r\n\r\n.info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.name-price {\r\n    padding: 0 10px;\r\n    width: 280px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.description {\r\n    color: black;\r\n    text-shadow: none;\r\n    width: 150px;\r\n    font-size: 20px;\r\n    font-weight: 550;\r\n    padding: 5px 0;\r\n}\r\n\r\n.description p {\r\n    margin: 0;\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/stylesheets/style.css":
/*!***********************************!*\
  !*** ./src/stylesheets/style.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/stylesheets/style.css");

      
      
      
      
      
      
      
      
      

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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheets_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheets/style.css */ "./src/stylesheets/style.css");
/* harmony import */ var _modules_template__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/template */ "./src/modules/template.js");



document.body.appendChild((0,_modules_template__WEBPACK_IMPORTED_MODULE_1__["default"])());

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _contactForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contactForm */ "./src/modules/contactForm.js");


function createContactSection() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    contactDiv.appendChild(createContactH1());
    contactDiv.appendChild(createLocation());
    contactDiv.appendChild(createTime());
    contactDiv.appendChild(createPhoneNum());
    contactDiv.appendChild(createEmail());
    contactDiv.appendChild((0,_contactForm__WEBPACK_IMPORTED_MODULE_0__["default"])());

    return contactDiv;
}

function createContactH1() {
    const contactH1 = document.createElement('h1');
    contactH1.append('Contact Us');
    return contactH1;
}

function createLocation() {
    const locationDiv = document.createElement('div');
    locationDiv.classList.add('location');

    const locationIcon = document.createElement('img');
    locationIcon.src = '../src/images/location-pin.png';
    locationIcon.alt = 'Location Pin';
    locationIcon.setAttribute('id', 'location-pin');

    const location = document.createElement('h2');
    location.append('1234 Made-Up St, SomeCity, NJ 12345');

    locationDiv.appendChild(locationIcon);
    locationDiv.appendChild(location);

    return locationDiv;
}

function createTime() {
    const timeDiv = document.createElement('div');
    timeDiv.classList.add('time');

    const timeIcon = document.createElement('img');
    timeIcon.src = '../src/images/time.png';
    timeIcon.alt = 'clock-icon';
    timeIcon.setAttribute('id', 'clock-icon');

    timeDiv.appendChild(timeIcon);
    timeDiv.appendChild(createHours());

    return timeDiv;
}

function createHours() {
    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('hours');

    const weekdayHours = document.createElement('h2');
    weekdayHours.append('Monday - Thursday: 8am - 8pm');

    const weekendHours = document.createElement('h2');
    weekendHours.append('Friday - Sunday: 8am - 11pm');

    hoursDiv.appendChild(weekdayHours);
    hoursDiv.appendChild(weekendHours);

    return hoursDiv;
}

function createPhoneNum() {
    const phoneDiv = document.createElement('div');
    phoneDiv.classList.add('telephone');

    const phoneIcon = document.createElement('img');
    phoneIcon.src = '../src/images/call.png';
    phoneIcon.alt = 'phone-icon';
    phoneIcon.setAttribute('id', 'phone-icon');

    const phoneNum = document.createElement('h2');
    phoneNum.append('(123)-456-7890');

    phoneDiv.appendChild(phoneIcon);
    phoneDiv.appendChild(phoneNum);

    return phoneDiv;
}

function createEmail() {
    const emailDiv = document.createElement('div');
    emailDiv.classList.add('email');

    const emailIcon = document.createElement('img');
    emailIcon.src = '../src/images/email.png';
    emailIcon.alt = 'email-icon';
    emailIcon.setAttribute('id', 'email-icon');

    const emailAddress = document.createElement('h2');
    emailAddress.append('fakemail@notreal.com');

    emailDiv.appendChild(emailIcon);
    emailDiv.appendChild(emailAddress);

    return emailDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactSection);

/***/ }),

/***/ "./src/modules/contactForm.js":
/*!************************************!*\
  !*** ./src/modules/contactForm.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createForm() {
    const form = document.createElement('form');

    const formHeader = document.createElement('h2');
    formHeader.append('Message Us');

    form.appendChild(formHeader);
    form.appendChild(createNameDiv());
    form.appendChild(createEmailDiv());
    form.appendChild(createTextArea());
    form.appendChild(createFormButton());

    return form;
}

function createNameDiv() {
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('name');

    const nameLabel = document.createElement('label');
    nameLabel.setAttribute('for', 'name');
    nameLabel.append('Full Name:');

    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('id', 'name');

    nameDiv.appendChild(nameLabel);
    nameDiv.appendChild(nameInput);

    return nameDiv;
}

function createEmailDiv() {
    const emailDiv = document.createElement('div');
    emailDiv.classList.add('user-email');

    const emailLabel = document.createElement('label');
    emailLabel.setAttribute('for', 'user-email');
    emailLabel.append('Email:');

    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('id', 'user-email');

    emailDiv.appendChild(emailLabel);
    emailDiv.appendChild(emailInput);

    return emailDiv;
}

function createTextArea() {
    const textArea = document.createElement('textarea');
    textArea.setAttribute('name', 'message');
    textArea.setAttribute('id', 'message');
    textArea.setAttribute('cols', '30');
    textArea.setAttribute('rows', '10');
    textArea.append('Type your message...');

    return textArea;
}

function createFormButton() {
    const formButton = document.createElement('button');
    formButton.setAttribute('type', 'reset');
    formButton.append('Submit');

    return formButton;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createForm);


/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createAboutSection() {
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('about');

    aboutDiv.appendChild(createAboutH1());
    aboutDiv.appendChild(createChefImg());
    aboutDiv.appendChild(createAboutPara());
    aboutDiv.appendChild(createAboutH2());
    aboutDiv.appendChild(createOrderBtn());

    return aboutDiv;
}

function createAboutH1() {
    const aboutH1 = document.createElement('h1');
    aboutH1.append('Welcome !!!');
    return aboutH1;
}

function createChefImg() {
    const sushiChef = document.createElement('img');
    sushiChef.src = '../src/images/Tanoshii-sushi-chef.jpg';
    sushiChef.alt = 'Sushi Chef';
    sushiChef.setAttribute('id', 'sushi-chef');
    return sushiChef;
}

function createAboutPara() {
    const aboutPara = document.createElement('p');
    aboutPara.classList.add('about-txt');
    aboutPara.append('Hand-Crafted Sushi with freshly picked, organic ingredients!');
    return aboutPara;
}

function createAboutH2() {
    const aboutH2 = document.createElement('h2');
    aboutH2.append('Est. 2023');
    return aboutH2;
}

function createOrderBtn() {
    const orderBtn = document.createElement('button');
    orderBtn.type = 'button';
    orderBtn.setAttribute('id', 'order-btn');
    orderBtn.append('Order Now');
    return orderBtn;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createAboutSection);

/***/ }),

/***/ "./src/modules/menu-render.js":
/*!************************************!*\
  !*** ./src/modules/menu-render.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/modules/menu.js");


function createMenuSection() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    // Append all menu sections and headers //
    menuDiv.appendChild(createAppsHeader());
    menuDiv.appendChild(createAppsDiv());

    menuDiv.appendChild(createSushiHeader());
    menuDiv.appendChild(createSushiDiv());

    menuDiv.appendChild(createBeveragesHeader());
    menuDiv.appendChild(createBeveragesDiv());

    menuDiv.appendChild(createDessertHeader());
    menuDiv.appendChild(createDessertDiv());

    return menuDiv;
}

// Appetizers //

function createAppsHeader() {
    const appsHeader = document.createElement('h1');
    appsHeader.append('Appetizers');

    return appsHeader;
}

function createAppsDiv() {
    const appsDiv = document.createElement('div');
    appsDiv.classList.add('appetizers');

    // Iterate thru all items in appetizer section and append to div //
    for (let item in _menu__WEBPACK_IMPORTED_MODULE_0__["default"].appetizers) {
        appsDiv.appendChild(createFoodDiv(item));
    }
    return appsDiv;
}

// Sushi //

function createSushiHeader() {
    const sushiHeader = document.createElement('h1');
    sushiHeader.append('Sushi Rolls');

    return sushiHeader;
}

function createSushiDiv() {
    const sushiDiv = document.createElement('div');
    sushiDiv.classList.add('sushi');

    for (let item in _menu__WEBPACK_IMPORTED_MODULE_0__["default"].sushi) {
        sushiDiv.appendChild(createFoodDiv(item));
    }
    return sushiDiv;
}

// Beverages //

function createBeveragesHeader() {
    const bevHeader = document.createElement('h1');
    bevHeader.append('Beverages');

    return bevHeader;
}

function createBeveragesDiv() {
    const bevDiv = document.createElement('div');
    bevDiv.classList.add('beverages');

    for (let item in _menu__WEBPACK_IMPORTED_MODULE_0__["default"].beverages) {
        bevDiv.appendChild(createFoodDiv(item));
    }
    return bevDiv;
}

// Dessert //

function createDessertHeader() {
    const dessertHeader = document.createElement('h1');
    dessertHeader.append('Dessert');

    return dessertHeader;
}

function createDessertDiv() {
    const dessertDiv = document.createElement('div');
    dessertDiv.classList.add('dessert');

    for (let item in _menu__WEBPACK_IMPORTED_MODULE_0__["default"].dessert) {
        dessertDiv.appendChild(createFoodDiv(item));
    }
    return dessertDiv;
}

// FoodDiv func and all underlying func used for apps, sushi, beverages, and desert sections //

function createFoodDiv(food) {
    const foodDiv = document.createElement('div');
    foodDiv.classList.add(`${food}`);

    foodDiv.appendChild(createFoodInfo(food));
    foodDiv.appendChild(createFoodDescription(food));

    return foodDiv;
}

function createFoodInfo(food) {
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');

    infoDiv.appendChild(createFoodImg(food));
    infoDiv.appendChild(createNamePriceDiv(food));

    return infoDiv;
}

function createFoodImg(food) {
    const foodImg = document.createElement('img');
    foodImg.src = `../src/images/menu-images/${food}.jpg`;
    foodImg.alt = `${food}`;
    foodImg.setAttribute('id', `${food}`);

    return foodImg;
}

function createNamePriceDiv(food) {
    const namePriceDiv = document.createElement('div');
    namePriceDiv.classList.add('name-price');

    const foodName = document.createElement('h2');
    foodName.append(food.name);
    namePriceDiv.appendChild(foodName);

    const foodPrice = document.createElement('h2');
    foodPrice.append(`$ ${food.price}`);
    namePriceDiv.appendChild(foodPrice);

    return namePriceDiv;
}

function createFoodDescription(food) {
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');

    const descriptionPara = document.createElement('p');
    descriptionPara.append(food.description);
    descriptionDiv.appendChild(descriptionPara);
    
    return descriptionDiv;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuSection);

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Class for menu items //
class MenuItem {
    constructor(name, price, description) {
        this.name = name;
        this.description = description;
        this.price = price;
    }
};

const appetizers = {
    rice: new MenuItem('Rice', 3.50, 'Steaming hot bowl of white Jasmine rice'),
    shumai: new MenuItem('Shumai', 3.99, 'Steamed shrimp dumplings'),
    edamame: new MenuItem('Edamame', 2.99, 'Steamed soybean with sea salt'),
    salad: new MenuItem('House Salad', 3.99, 'Romaine lettuce, carrot, tomato, cucumber with ginger dressing'), 
};

const sushi = {
    vegas: new MenuItem('Las Vegas', 9.99, 'Crab meat, cucumber, avocado, shredded crab stick, spicy mayo, sweet crunch'),
    dynamite: new MenuItem('Dynamite (Baked)', 10.99, 'Crab meat, cucumber, avocado, white fish, crab, shrimp with spicy mayo, sweet'),
    veggie: new MenuItem('Veggie Roll', 8.99, 'Cucumber, lettuce, tomato, slice avocado, spicy mayo, white crunch'),
    imperial: new MenuItem('Imperial Roll', 13.99, 'Spicy tuna, shrimp tempura, cream cheese, avocado, salmon, crab meat with spicy mayo, sweet'),
};

const beverages = {
    tea: new MenuItem('Hot Tea', 2.50, 'Green, Black, Jasmine, Chamomile'),
    soda: new MenuItem('Fountain Drinks', 2.99, 'Pepsi, Mt. Dew, Lemonade, Root Beer, Iced Tea, Dr. Pepper'),
    beer: new MenuItem('Beer', 3.50, 'Sapporo, Kirin, Blue Moon, Corona'),
    sake: new MenuItem('Sake', 8.00, 'Shiro sasa, nigori, peach sparkling, pineapple sparkling, yuzu sparkling'),
};

const dessert = {
    iceCream: new MenuItem('Ice Cream', 5.99, 'Vanilla, Chocolate, Strawberry, Mint, Cookies n\' Creme'),
    mochi: new MenuItem('Mochi Ice Cream', 6.99, 'Vanilla, Chocolate, Strawberry, Green Tea'),
};

const menu = {appetizers, sushi, beverages, dessert};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);

/***/ }),

/***/ "./src/modules/template.js":
/*!*********************************!*\
  !*** ./src/modules/template.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/modules/home.js");
/* harmony import */ var _menu_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-render */ "./src/modules/menu-render.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/modules/contact.js");




function renderTemplate(page) {
    // Remove all child nodes from body //
    const body = document.querySelector('body');
    while (body.firstChild) {
        body.removeChild(body.firstChild);
    }
    const template = createContent(page);

    return template;
}

function createContent(page) {
    const content = document.createElement('div');
    content.setAttribute('id', 'content');

    const navDiv = document.createElement('div');
    navDiv.classList.add('nav');
    navDiv.appendChild(createNav());

    const background = document.createElement('img');
    background.src = '../src/images/sushi-restaurant-bg.jpg';
    background.alt = 'Japanese Restaurant Background';
    background.setAttribute('id', 'sushi-bg');

    content.appendChild(navDiv);
    content.appendChild(background);

    // Load page based on argument passed in
    if (page === undefined || page === 'Home') {
        content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
    } else if (page === 'Menu') {
        content.appendChild((0,_menu_render__WEBPACK_IMPORTED_MODULE_1__["default"])());
    } else if (page === 'Contact') {
        content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])());
    }

    return content;
}

function createNav() {
    const nav = document.createElement('nav');
    nav.appendChild(createHeader());
    nav.appendChild(createTabs());

    return nav;
}

function createHeader() {
    // create div to sandwich header
    const header = document.createElement('div');
    header.classList.add('header');

    // create sushi icon img
    const sushiIcon = document.createElement('img');
    sushiIcon.src = '../src/images/sushi-icon.png';
    sushiIcon.alt = 'Sushi Roll';
    sushiIcon.setAttribute('id', 'sushi-icon');

    // create h1 name of restaurant
    const restName = document.createElement('h1');
    restName.append('Sonic Sushi');

    // Append elements to header div and return
    header.appendChild(sushiIcon);
    header.appendChild(restName);

    return header;
}

function createTabs() {
    const list = document.createElement('ul');

    let tabs = ['Home', 'Menu', 'Contact'];
    for (let tab of tabs) {
        list.appendChild(createLink(tab));
    }

    return list;
}

function createLink(name) {
    const listItem = document.createElement('li');
    
    const link = document.createElement('a');
    link.setAttribute('id', name);
    link.append(name);

    // Add event listener depending on each tab name // 
    if (name === 'Home') {
        link.addEventListener('click', () => {
            document.body.appendChild(renderTemplate());
        });
    } else if (name === 'Menu') {
        link.addEventListener('click', () => {
            document.body.appendChild(renderTemplate('Menu'));
        });
    } else if (name === 'Contact') {
        link.addEventListener('click', () => {
            document.body.appendChild(renderTemplate('Contact'));
        });
    }

    listItem.appendChild(link);
    return listItem;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTemplate);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUEyQix3REFBVTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsb0JBQW9COzs7Ozs7Ozs7Ozs7OztBQzNHbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxNQUFNO0FBQ047QUFDQTtBQUNBLFNBQVM7QUFDVCxNQUFNO0FBQ047QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLmNzcz9iZmZjIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvY29udGFjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LXJlbmRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3RlbXBsYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxyXFxuICAgIC0tdHh0LWNvbG9yOiAjMkQyOTI2RkY7XFxyXFxuICAgIC0tcmVkLWJnOiAjZTk0YjNjO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHksXFxyXFxuI2NvbnRlbnQsXFxyXFxuI3N1c2hpLWJnIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtaW4td2lkdGg6IDExNzBweDtcXHJcXG4gICAgbWluLWhlaWdodDogNzUwcHg7XFxyXFxufVxcclxcblxcclxcbiNzdXNoaS1iZyB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdG9wOiAxMDZweDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDZweCk7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYmcpO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS10eHQtY29sb3IpLCAyNSUsIHZhcigtLXJlZC1iZyksIDg1JSwgdmFyKC0tdHh0LWNvbG9yKSk7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAyZnI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3VzaGktaWNvbiB7XFxyXFxuICAgIGhlaWdodDogNzVweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGgxIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXNpemU6IDUwcHQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10eHQtY29sb3IgKTtcXHJcXG4gICAgbWluLXdpZHRoOiAzMjhweDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB0O1xcclxcbiAgICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yKTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7ICBcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubGkgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXR4dC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmxpIGE6aG92ZXIge1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIFN0YXJ0IG9mIEFib3V0IFNlY3Rpb24gKi9cXHJcXG5cXHJcXG4uYWJvdXQsXFxyXFxuLmNvbnRhY3QsXFxyXFxuLm1lbnUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyNTBweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNjVweDtcXHJcXG4gICAgd2lkdGg6IDc1MHB4O1xcclxcblxcclxcbiAgICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yKTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4IGJsYWNrO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMywgNzUsIDYwLCAuNik7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuXFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCBoMSxcXHJcXG4uY29udGFjdCBoMSxcXHJcXG4ubWVudSBoMSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNDBwdDtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0LXR4dCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMjBwdDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbiNzdXNoaS1jaGVmIHtcXHJcXG4gICAgd2lkdGg6IDUwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS10eHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG4jb3JkZXItYnRuIHtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDJweCBncmF5O1xcclxcblxcclxcbiAgICBtYXJnaW46IDE1cHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jb3JkZXItYnRuOmhvdmVyIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbiNvcmRlci1idG46YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIFN0YXJ0IG9mIENvbnRhY3QgU2VjdGlvbiAqL1xcclxcbi5jb250YWN0IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgcm93LWdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgaDEge1xcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAyMHB4IDAgMDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgPiBkaXYge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTUwcHg7XFxyXFxufVxcclxcblxcclxcbi5sb2NhdGlvbixcXHJcXG4udGltZSxcXHJcXG4udGVsZXBob25lLFxcclxcbi5lbWFpbCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2xvY2F0aW9uLXBpbixcXHJcXG4jY2xvY2staWNvbixcXHJcXG4jcGhvbmUtaWNvbixcXHJcXG4jZW1haWwtaWNvbiB7XFxyXFxuICAgIHdpZHRoOiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY2xvY2staWNvbiB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbnRleHRhcmVhIHtcXHJcXG4gICAgcmVzaXplOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XFxyXFxuXFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcclxcblxcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHRleHQtc2hhZG93OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGgyIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBkaXYgaW5wdXQge1xcclxcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b24ge1xcclxcbiAgICB3aWR0aDogMTIwcHg7XFxyXFxuICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b246YWN0aXZlIHtcXHJcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiogU3RhcnQgb2YgTWVudSBTZWN0aW9uICovXFxyXFxuLm1lbnUge1xcclxcbiAgICB3aWR0aDogbWF4KDEwNTBweCwgNTUlKTtcXHJcXG4gICAgaGVpZ2h0OiA3MzVweDtcXHJcXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcclxcblxcclxcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcXHJcXG5cXHJcXG4gICAgcGFkZGluZzogMCAyNXB4IDIwcHg7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbi5tZW51ID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCg0MzVweCwgMWZyKSk7XFxyXFxuICAgIGdhcDogMzVweDtcXHJcXG4gICAgXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tZW51ID4gZGl2IGltZyB7XFxyXFxuICAgIHdpZHRoOiAzMDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgPiBkaXYgPiBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5pbmZvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgZ2FwOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi5uYW1lLXByaWNlIHtcXHJcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICB3aWR0aDogMjgwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1NTA7XFxyXFxuICAgIHBhZGRpbmc6IDVweCAwO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVzY3JpcHRpb24gcCB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHNCQUFzQjtJQUN0Qixp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O0lBQ0ksZUFBZTtJQUNmLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksU0FBUztBQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcclxcbiAgICAtLXR4dC1jb2xvcjogIzJEMjkyNkZGO1xcclxcbiAgICAtLXJlZC1iZzogI2U5NGIzYztcXHJcXG59XFxyXFxuXFxyXFxuaHRtbCxcXHJcXG5ib2R5LFxcclxcbiNjb250ZW50LFxcclxcbiNzdXNoaS1iZyB7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWluLXdpZHRoOiAxMTcwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDc1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3VzaGktYmcge1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRvcDogMTA2cHg7XFxyXFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTA2cHgpO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkLWJnKTtcXHJcXG4gICAgcGFkZGluZzogMTVweCA1MHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodmFyKC0tdHh0LWNvbG9yKSwgMjUlLCB2YXIoLS1yZWQtYmcpLCA4NSUsIHZhcigtLXR4dC1jb2xvcikpO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlOiAxZnIgLyAxZnIgMmZyO1xcclxcbn1cXHJcXG5cXHJcXG4uaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuXFxyXFxuI3N1c2hpLWljb24ge1xcclxcbiAgICBoZWlnaHQ6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbm5hdiBoMSB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgZm9udC1zaXplOiA1MHB0O1xcclxcbiAgICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yICk7XFxyXFxuICAgIG1pbi13aWR0aDogMzI4cHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbm5hdiB1bCB7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMzBwdDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXR4dC1jb2xvcik7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyOyAgXFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbmxpIGEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10eHQtY29sb3IpO1xcclxcbn1cXHJcXG5cXHJcXG5saSBhOmhvdmVyIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxufVxcclxcblxcclxcbi8qKiBTdGFydCBvZiBBYm91dCBTZWN0aW9uICovXFxyXFxuXFxyXFxuLmFib3V0LFxcclxcbi5jb250YWN0LFxcclxcbi5tZW51IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIFxcclxcbiAgICBtYXJnaW4tbGVmdDogMjUwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDY1cHg7XFxyXFxuICAgIHdpZHRoOiA3NTBweDtcXHJcXG5cXHJcXG4gICAgY29sb3I6IHZhcigtLXR4dC1jb2xvcik7XFxyXFxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDFweCBibGFjaztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzMsIDc1LCA2MCwgLjYpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcblxcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQgaDEsXFxyXFxuLmNvbnRhY3QgaDEsXFxyXFxuLm1lbnUgaDEge1xcclxcbiAgICBmb250LXNpemU6IDQwcHQ7XFxyXFxufVxcclxcblxcclxcbi5hYm91dC10eHQge1xcclxcbiAgICBmb250LXNpemU6IDIwcHQ7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4jc3VzaGktY2hlZiB7XFxyXFxuICAgIHdpZHRoOiA1MDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tdHh0LWNvbG9yKTtcXHJcXG59XFxyXFxuXFxyXFxuI29yZGVyLWJ0biB7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggZ3JheTtcXHJcXG5cXHJcXG4gICAgbWFyZ2luOiAxNXB4IDBweDtcXHJcXG59XFxyXFxuXFxyXFxuI29yZGVyLWJ0bjpob3ZlciB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4jb3JkZXItYnRuOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxyXFxufVxcclxcblxcclxcbi8qKiBTdGFydCBvZiBDb250YWN0IFNlY3Rpb24gKi9cXHJcXG4uY29udGFjdCB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIHJvdy1nYXA6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IGgxIHtcXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMjBweCAwIDA7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi5jb250YWN0ID4gZGl2IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9jYXRpb24sXFxyXFxuLnRpbWUsXFxyXFxuLnRlbGVwaG9uZSxcXHJcXG4uZW1haWwge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNsb2NhdGlvbi1waW4sXFxyXFxuI2Nsb2NrLWljb24sXFxyXFxuI3Bob25lLWljb24sXFxyXFxuI2VtYWlsLWljb24ge1xcclxcbiAgICB3aWR0aDogMzBweDtcXHJcXG59XFxyXFxuXFxyXFxuI2Nsb2NrLWljb24ge1xcclxcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAgIHJlc2l6ZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogMTBweDtcXHJcXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xcclxcblxcclxcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXHJcXG5cXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBoMiB7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBkaXYge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxufVxcclxcblxcclxcbmZvcm0gZGl2IGlucHV0IHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmZvcm0gYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDEyMHB4O1xcclxcbiAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSBidXR0b246aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0gYnV0dG9uOmFjdGl2ZSB7XFxyXFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqIFN0YXJ0IG9mIE1lbnUgU2VjdGlvbiAqL1xcclxcbi5tZW51IHtcXHJcXG4gICAgd2lkdGg6IG1heCgxMDUwcHgsIDU1JSk7XFxyXFxuICAgIGhlaWdodDogNzM1cHg7XFxyXFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXHJcXG5cXHJcXG4gICAgbWFyZ2luLXRvcDogMzVweDtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxyXFxuXFxyXFxuICAgIHBhZGRpbmc6IDAgMjVweCAyMHB4O1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSA+IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDM1cHgsIDFmcikpO1xcclxcbiAgICBnYXA6IDM1cHg7XFxyXFxuICAgIFxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSA+IGRpdiBpbWcge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51ID4gZGl2ID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1wcmljZSB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgd2lkdGg6IDI4MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTUwO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZXNoZWV0cy9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgcmVuZGVyVGVtcGxhdGUgZnJvbSAnLi9tb2R1bGVzL3RlbXBsYXRlJztcclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocmVuZGVyVGVtcGxhdGUoKSk7IiwiaW1wb3J0IGNyZWF0ZUZvcm0gZnJvbSAnLi9jb250YWN0Rm9ybSc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0U2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3REaXYuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xyXG5cclxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdEgxKCkpO1xyXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjcmVhdGVMb2NhdGlvbigpKTtcclxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGltZSgpKTtcclxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY3JlYXRlUGhvbmVOdW0oKSk7XHJcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUVtYWlsKCkpO1xyXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjcmVhdGVGb3JtKCkpO1xyXG5cclxuICAgIHJldHVybiBjb250YWN0RGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0SDEoKSB7XHJcbiAgICBjb25zdCBjb250YWN0SDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgY29udGFjdEgxLmFwcGVuZCgnQ29udGFjdCBVcycpO1xyXG4gICAgcmV0dXJuIGNvbnRhY3RIMTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oKSB7XHJcbiAgICBjb25zdCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbG9jYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcclxuXHJcbiAgICBjb25zdCBsb2NhdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGxvY2F0aW9uSWNvbi5zcmMgPSAnLi4vc3JjL2ltYWdlcy9sb2NhdGlvbi1waW4ucG5nJztcclxuICAgIGxvY2F0aW9uSWNvbi5hbHQgPSAnTG9jYXRpb24gUGluJztcclxuICAgIGxvY2F0aW9uSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2F0aW9uLXBpbicpO1xyXG5cclxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGxvY2F0aW9uLmFwcGVuZCgnMTIzNCBNYWRlLVVwIFN0LCBTb21lQ2l0eSwgTkogMTIzNDUnKTtcclxuXHJcbiAgICBsb2NhdGlvbkRpdi5hcHBlbmRDaGlsZChsb2NhdGlvbkljb24pO1xyXG4gICAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xyXG5cclxuICAgIHJldHVybiBsb2NhdGlvbkRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGltZSgpIHtcclxuICAgIGNvbnN0IHRpbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRpbWVEaXYuY2xhc3NMaXN0LmFkZCgndGltZScpO1xyXG5cclxuICAgIGNvbnN0IHRpbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICB0aW1lSWNvbi5zcmMgPSAnLi4vc3JjL2ltYWdlcy90aW1lLnBuZyc7XHJcbiAgICB0aW1lSWNvbi5hbHQgPSAnY2xvY2staWNvbic7XHJcbiAgICB0aW1lSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb2NrLWljb24nKTtcclxuXHJcbiAgICB0aW1lRGl2LmFwcGVuZENoaWxkKHRpbWVJY29uKTtcclxuICAgIHRpbWVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSG91cnMoKSk7XHJcblxyXG4gICAgcmV0dXJuIHRpbWVEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvdXJzKCkge1xyXG4gICAgY29uc3QgaG91cnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvdXJzRGl2LmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XHJcblxyXG4gICAgY29uc3Qgd2Vla2RheUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHdlZWtkYXlIb3Vycy5hcHBlbmQoJ01vbmRheSAtIFRodXJzZGF5OiA4YW0gLSA4cG0nKTtcclxuXHJcbiAgICBjb25zdCB3ZWVrZW5kSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgd2Vla2VuZEhvdXJzLmFwcGVuZCgnRnJpZGF5IC0gU3VuZGF5OiA4YW0gLSAxMXBtJyk7XHJcblxyXG4gICAgaG91cnNEaXYuYXBwZW5kQ2hpbGQod2Vla2RheUhvdXJzKTtcclxuICAgIGhvdXJzRGl2LmFwcGVuZENoaWxkKHdlZWtlbmRIb3Vycyk7XHJcblxyXG4gICAgcmV0dXJuIGhvdXJzRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQaG9uZU51bSgpIHtcclxuICAgIGNvbnN0IHBob25lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwaG9uZURpdi5jbGFzc0xpc3QuYWRkKCd0ZWxlcGhvbmUnKTtcclxuXHJcbiAgICBjb25zdCBwaG9uZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHBob25lSWNvbi5zcmMgPSAnLi4vc3JjL2ltYWdlcy9jYWxsLnBuZyc7XHJcbiAgICBwaG9uZUljb24uYWx0ID0gJ3Bob25lLWljb24nO1xyXG4gICAgcGhvbmVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAncGhvbmUtaWNvbicpO1xyXG5cclxuICAgIGNvbnN0IHBob25lTnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHBob25lTnVtLmFwcGVuZCgnKDEyMyktNDU2LTc4OTAnKTtcclxuXHJcbiAgICBwaG9uZURpdi5hcHBlbmRDaGlsZChwaG9uZUljb24pO1xyXG4gICAgcGhvbmVEaXYuYXBwZW5kQ2hpbGQocGhvbmVOdW0pO1xyXG5cclxuICAgIHJldHVybiBwaG9uZURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRW1haWwoKSB7XHJcbiAgICBjb25zdCBlbWFpbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZW1haWxEaXYuY2xhc3NMaXN0LmFkZCgnZW1haWwnKTtcclxuXHJcbiAgICBjb25zdCBlbWFpbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGVtYWlsSWNvbi5zcmMgPSAnLi4vc3JjL2ltYWdlcy9lbWFpbC5wbmcnO1xyXG4gICAgZW1haWxJY29uLmFsdCA9ICdlbWFpbC1pY29uJztcclxuICAgIGVtYWlsSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtYWlsLWljb24nKTtcclxuXHJcbiAgICBjb25zdCBlbWFpbEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgZW1haWxBZGRyZXNzLmFwcGVuZCgnZmFrZW1haWxAbm90cmVhbC5jb20nKTtcclxuXHJcbiAgICBlbWFpbERpdi5hcHBlbmRDaGlsZChlbWFpbEljb24pO1xyXG4gICAgZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxBZGRyZXNzKTtcclxuXHJcbiAgICByZXR1cm4gZW1haWxEaXY7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3RTZWN0aW9uOyIsImZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgZm9ybUhlYWRlci5hcHBlbmQoJ01lc3NhZ2UgVXMnKTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVOYW1lRGl2KCkpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVFbWFpbERpdigpKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dEFyZWEoKSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZvcm1CdXR0b24oKSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hbWVEaXYoKSB7XHJcbiAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcclxuXHJcbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcclxuICAgIG5hbWVMYWJlbC5hcHBlbmQoJ0Z1bGwgTmFtZTonKTtcclxuXHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XHJcblxyXG4gICAgbmFtZURpdi5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xyXG4gICAgbmFtZURpdi5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG5cclxuICAgIHJldHVybiBuYW1lRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbWFpbERpdigpIHtcclxuICAgIGNvbnN0IGVtYWlsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbWFpbERpdi5jbGFzc0xpc3QuYWRkKCd1c2VyLWVtYWlsJyk7XHJcblxyXG4gICAgY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBlbWFpbExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3VzZXItZW1haWwnKTtcclxuICAgIGVtYWlsTGFiZWwuYXBwZW5kKCdFbWFpbDonKTtcclxuXHJcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2VtYWlsJyk7XHJcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndXNlci1lbWFpbCcpO1xyXG5cclxuICAgIGVtYWlsRGl2LmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xyXG4gICAgZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XHJcblxyXG4gICAgcmV0dXJuIGVtYWlsRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUZXh0QXJlYSgpIHtcclxuICAgIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsICdtZXNzYWdlJyk7XHJcbiAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lc3NhZ2UnKTtcclxuICAgIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnY29scycsICczMCcpO1xyXG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywgJzEwJyk7XHJcbiAgICB0ZXh0QXJlYS5hcHBlbmQoJ1R5cGUgeW91ciBtZXNzYWdlLi4uJyk7XHJcblxyXG4gICAgcmV0dXJuIHRleHRBcmVhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb3JtQnV0dG9uKCkge1xyXG4gICAgY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZm9ybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmVzZXQnKTtcclxuICAgIGZvcm1CdXR0b24uYXBwZW5kKCdTdWJtaXQnKTtcclxuXHJcbiAgICByZXR1cm4gZm9ybUJ1dHRvbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9ybTtcclxuIiwiZnVuY3Rpb24gY3JlYXRlQWJvdXRTZWN0aW9uKCkge1xyXG4gICAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFib3V0RGl2LmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XHJcblxyXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXRIMSgpKTtcclxuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUNoZWZJbWcoKSk7XHJcbiAgICBhYm91dERpdi5hcHBlbmRDaGlsZChjcmVhdGVBYm91dFBhcmEoKSk7XHJcbiAgICBhYm91dERpdi5hcHBlbmRDaGlsZChjcmVhdGVBYm91dEgyKCkpO1xyXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlT3JkZXJCdG4oKSk7XHJcblxyXG4gICAgcmV0dXJuIGFib3V0RGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBYm91dEgxKCkge1xyXG4gICAgY29uc3QgYWJvdXRIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBhYm91dEgxLmFwcGVuZCgnV2VsY29tZSAhISEnKTtcclxuICAgIHJldHVybiBhYm91dEgxO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDaGVmSW1nKCkge1xyXG4gICAgY29uc3Qgc3VzaGlDaGVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBzdXNoaUNoZWYuc3JjID0gJy4uL3NyYy9pbWFnZXMvVGFub3NoaWktc3VzaGktY2hlZi5qcGcnO1xyXG4gICAgc3VzaGlDaGVmLmFsdCA9ICdTdXNoaSBDaGVmJztcclxuICAgIHN1c2hpQ2hlZi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1c2hpLWNoZWYnKTtcclxuICAgIHJldHVybiBzdXNoaUNoZWY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFib3V0UGFyYSgpIHtcclxuICAgIGNvbnN0IGFib3V0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGFib3V0UGFyYS5jbGFzc0xpc3QuYWRkKCdhYm91dC10eHQnKTtcclxuICAgIGFib3V0UGFyYS5hcHBlbmQoJ0hhbmQtQ3JhZnRlZCBTdXNoaSB3aXRoIGZyZXNobHkgcGlja2VkLCBvcmdhbmljIGluZ3JlZGllbnRzIScpO1xyXG4gICAgcmV0dXJuIGFib3V0UGFyYTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWJvdXRIMigpIHtcclxuICAgIGNvbnN0IGFib3V0SDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgYWJvdXRIMi5hcHBlbmQoJ0VzdC4gMjAyMycpO1xyXG4gICAgcmV0dXJuIGFib3V0SDI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU9yZGVyQnRuKCkge1xyXG4gICAgY29uc3Qgb3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG9yZGVyQnRuLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIG9yZGVyQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnb3JkZXItYnRuJyk7XHJcbiAgICBvcmRlckJ0bi5hcHBlbmQoJ09yZGVyIE5vdycpO1xyXG4gICAgcmV0dXJuIG9yZGVyQnRuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBYm91dFNlY3Rpb247IiwiaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVTZWN0aW9uKCkge1xyXG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudURpdi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcblxyXG4gICAgLy8gQXBwZW5kIGFsbCBtZW51IHNlY3Rpb25zIGFuZCBoZWFkZXJzIC8vXHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUFwcHNIZWFkZXIoKSk7XHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUFwcHNEaXYoKSk7XHJcblxyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVTdXNoaUhlYWRlcigpKTtcclxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU3VzaGlEaXYoKSk7XHJcblxyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVCZXZlcmFnZXNIZWFkZXIoKSk7XHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUJldmVyYWdlc0RpdigpKTtcclxuXHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZURlc3NlcnRIZWFkZXIoKSk7XHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZURlc3NlcnREaXYoKSk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnVEaXY7XHJcbn1cclxuXHJcbi8vIEFwcGV0aXplcnMgLy9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFwcHNIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBhcHBzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGFwcHNIZWFkZXIuYXBwZW5kKCdBcHBldGl6ZXJzJyk7XHJcblxyXG4gICAgcmV0dXJuIGFwcHNIZWFkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFwcHNEaXYoKSB7XHJcbiAgICBjb25zdCBhcHBzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhcHBzRGl2LmNsYXNzTGlzdC5hZGQoJ2FwcGV0aXplcnMnKTtcclxuXHJcbiAgICAvLyBJdGVyYXRlIHRocnUgYWxsIGl0ZW1zIGluIGFwcGV0aXplciBzZWN0aW9uIGFuZCBhcHBlbmQgdG8gZGl2IC8vXHJcbiAgICBmb3IgKGxldCBpdGVtIGluIG1lbnUuYXBwZXRpemVycykge1xyXG4gICAgICAgIGFwcHNEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZERpdihpdGVtKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXBwc0RpdjtcclxufVxyXG5cclxuLy8gU3VzaGkgLy9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN1c2hpSGVhZGVyKCkge1xyXG4gICAgY29uc3Qgc3VzaGlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgc3VzaGlIZWFkZXIuYXBwZW5kKCdTdXNoaSBSb2xscycpO1xyXG5cclxuICAgIHJldHVybiBzdXNoaUhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3VzaGlEaXYoKSB7XHJcbiAgICBjb25zdCBzdXNoaURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3VzaGlEaXYuY2xhc3NMaXN0LmFkZCgnc3VzaGknKTtcclxuXHJcbiAgICBmb3IgKGxldCBpdGVtIGluIG1lbnUuc3VzaGkpIHtcclxuICAgICAgICBzdXNoaURpdi5hcHBlbmRDaGlsZChjcmVhdGVGb29kRGl2KGl0ZW0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdXNoaURpdjtcclxufVxyXG5cclxuLy8gQmV2ZXJhZ2VzIC8vXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCZXZlcmFnZXNIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBiZXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgYmV2SGVhZGVyLmFwcGVuZCgnQmV2ZXJhZ2VzJyk7XHJcblxyXG4gICAgcmV0dXJuIGJldkhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQmV2ZXJhZ2VzRGl2KCkge1xyXG4gICAgY29uc3QgYmV2RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiZXZEaXYuY2xhc3NMaXN0LmFkZCgnYmV2ZXJhZ2VzJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaXRlbSBpbiBtZW51LmJldmVyYWdlcykge1xyXG4gICAgICAgIGJldkRpdi5hcHBlbmRDaGlsZChjcmVhdGVGb29kRGl2KGl0ZW0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBiZXZEaXY7XHJcbn1cclxuXHJcbi8vIERlc3NlcnQgLy9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURlc3NlcnRIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBkZXNzZXJ0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGRlc3NlcnRIZWFkZXIuYXBwZW5kKCdEZXNzZXJ0Jyk7XHJcblxyXG4gICAgcmV0dXJuIGRlc3NlcnRIZWFkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURlc3NlcnREaXYoKSB7XHJcbiAgICBjb25zdCBkZXNzZXJ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXNzZXJ0RGl2LmNsYXNzTGlzdC5hZGQoJ2Rlc3NlcnQnKTtcclxuXHJcbiAgICBmb3IgKGxldCBpdGVtIGluIG1lbnUuZGVzc2VydCkge1xyXG4gICAgICAgIGRlc3NlcnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZERpdihpdGVtKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVzc2VydERpdjtcclxufVxyXG5cclxuLy8gRm9vZERpdiBmdW5jIGFuZCBhbGwgdW5kZXJseWluZyBmdW5jIHVzZWQgZm9yIGFwcHMsIHN1c2hpLCBiZXZlcmFnZXMsIGFuZCBkZXNlcnQgc2VjdGlvbnMgLy9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb2REaXYoZm9vZCkge1xyXG4gICAgY29uc3QgZm9vZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vZERpdi5jbGFzc0xpc3QuYWRkKGAke2Zvb2R9YCk7XHJcblxyXG4gICAgZm9vZERpdi5hcHBlbmRDaGlsZChjcmVhdGVGb29kSW5mbyhmb29kKSk7XHJcbiAgICBmb29kRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvb2REZXNjcmlwdGlvbihmb29kKSk7XHJcblxyXG4gICAgcmV0dXJuIGZvb2REaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb2RJbmZvKGZvb2QpIHtcclxuICAgIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGluZm9EaXYuY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xyXG5cclxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZEltZyhmb29kKSk7XHJcbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKGNyZWF0ZU5hbWVQcmljZURpdihmb29kKSk7XHJcblxyXG4gICAgcmV0dXJuIGluZm9EaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb2RJbWcoZm9vZCkge1xyXG4gICAgY29uc3QgZm9vZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZm9vZEltZy5zcmMgPSBgLi4vc3JjL2ltYWdlcy9tZW51LWltYWdlcy8ke2Zvb2R9LmpwZ2A7XHJcbiAgICBmb29kSW1nLmFsdCA9IGAke2Zvb2R9YDtcclxuICAgIGZvb2RJbWcuc2V0QXR0cmlidXRlKCdpZCcsIGAke2Zvb2R9YCk7XHJcblxyXG4gICAgcmV0dXJuIGZvb2RJbWc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hbWVQcmljZURpdihmb29kKSB7XHJcbiAgICBjb25zdCBuYW1lUHJpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5hbWVQcmljZURpdi5jbGFzc0xpc3QuYWRkKCduYW1lLXByaWNlJyk7XHJcblxyXG4gICAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgZm9vZE5hbWUuYXBwZW5kKGZvb2QubmFtZSk7XHJcbiAgICBuYW1lUHJpY2VEaXYuYXBwZW5kQ2hpbGQoZm9vZE5hbWUpO1xyXG5cclxuICAgIGNvbnN0IGZvb2RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBmb29kUHJpY2UuYXBwZW5kKGAkICR7Zm9vZC5wcmljZX1gKTtcclxuICAgIG5hbWVQcmljZURpdi5hcHBlbmRDaGlsZChmb29kUHJpY2UpO1xyXG5cclxuICAgIHJldHVybiBuYW1lUHJpY2VEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb2REZXNjcmlwdGlvbihmb29kKSB7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkZXNjcmlwdGlvblBhcmEuYXBwZW5kKGZvb2QuZGVzY3JpcHRpb24pO1xyXG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QYXJhKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uRGl2O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51U2VjdGlvbjsiLCIvLyBDbGFzcyBmb3IgbWVudSBpdGVtcyAvL1xyXG5jbGFzcyBNZW51SXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBhcHBldGl6ZXJzID0ge1xyXG4gICAgcmljZTogbmV3IE1lbnVJdGVtKCdSaWNlJywgMy41MCwgJ1N0ZWFtaW5nIGhvdCBib3dsIG9mIHdoaXRlIEphc21pbmUgcmljZScpLFxyXG4gICAgc2h1bWFpOiBuZXcgTWVudUl0ZW0oJ1NodW1haScsIDMuOTksICdTdGVhbWVkIHNocmltcCBkdW1wbGluZ3MnKSxcclxuICAgIGVkYW1hbWU6IG5ldyBNZW51SXRlbSgnRWRhbWFtZScsIDIuOTksICdTdGVhbWVkIHNveWJlYW4gd2l0aCBzZWEgc2FsdCcpLFxyXG4gICAgc2FsYWQ6IG5ldyBNZW51SXRlbSgnSG91c2UgU2FsYWQnLCAzLjk5LCAnUm9tYWluZSBsZXR0dWNlLCBjYXJyb3QsIHRvbWF0bywgY3VjdW1iZXIgd2l0aCBnaW5nZXIgZHJlc3NpbmcnKSwgXHJcbn07XHJcblxyXG5jb25zdCBzdXNoaSA9IHtcclxuICAgIHZlZ2FzOiBuZXcgTWVudUl0ZW0oJ0xhcyBWZWdhcycsIDkuOTksICdDcmFiIG1lYXQsIGN1Y3VtYmVyLCBhdm9jYWRvLCBzaHJlZGRlZCBjcmFiIHN0aWNrLCBzcGljeSBtYXlvLCBzd2VldCBjcnVuY2gnKSxcclxuICAgIGR5bmFtaXRlOiBuZXcgTWVudUl0ZW0oJ0R5bmFtaXRlIChCYWtlZCknLCAxMC45OSwgJ0NyYWIgbWVhdCwgY3VjdW1iZXIsIGF2b2NhZG8sIHdoaXRlIGZpc2gsIGNyYWIsIHNocmltcCB3aXRoIHNwaWN5IG1heW8sIHN3ZWV0JyksXHJcbiAgICB2ZWdnaWU6IG5ldyBNZW51SXRlbSgnVmVnZ2llIFJvbGwnLCA4Ljk5LCAnQ3VjdW1iZXIsIGxldHR1Y2UsIHRvbWF0bywgc2xpY2UgYXZvY2Fkbywgc3BpY3kgbWF5bywgd2hpdGUgY3J1bmNoJyksXHJcbiAgICBpbXBlcmlhbDogbmV3IE1lbnVJdGVtKCdJbXBlcmlhbCBSb2xsJywgMTMuOTksICdTcGljeSB0dW5hLCBzaHJpbXAgdGVtcHVyYSwgY3JlYW0gY2hlZXNlLCBhdm9jYWRvLCBzYWxtb24sIGNyYWIgbWVhdCB3aXRoIHNwaWN5IG1heW8sIHN3ZWV0JyksXHJcbn07XHJcblxyXG5jb25zdCBiZXZlcmFnZXMgPSB7XHJcbiAgICB0ZWE6IG5ldyBNZW51SXRlbSgnSG90IFRlYScsIDIuNTAsICdHcmVlbiwgQmxhY2ssIEphc21pbmUsIENoYW1vbWlsZScpLFxyXG4gICAgc29kYTogbmV3IE1lbnVJdGVtKCdGb3VudGFpbiBEcmlua3MnLCAyLjk5LCAnUGVwc2ksIE10LiBEZXcsIExlbW9uYWRlLCBSb290IEJlZXIsIEljZWQgVGVhLCBEci4gUGVwcGVyJyksXHJcbiAgICBiZWVyOiBuZXcgTWVudUl0ZW0oJ0JlZXInLCAzLjUwLCAnU2FwcG9ybywgS2lyaW4sIEJsdWUgTW9vbiwgQ29yb25hJyksXHJcbiAgICBzYWtlOiBuZXcgTWVudUl0ZW0oJ1Nha2UnLCA4LjAwLCAnU2hpcm8gc2FzYSwgbmlnb3JpLCBwZWFjaCBzcGFya2xpbmcsIHBpbmVhcHBsZSBzcGFya2xpbmcsIHl1enUgc3BhcmtsaW5nJyksXHJcbn07XHJcblxyXG5jb25zdCBkZXNzZXJ0ID0ge1xyXG4gICAgaWNlQ3JlYW06IG5ldyBNZW51SXRlbSgnSWNlIENyZWFtJywgNS45OSwgJ1ZhbmlsbGEsIENob2NvbGF0ZSwgU3RyYXdiZXJyeSwgTWludCwgQ29va2llcyBuXFwnIENyZW1lJyksXHJcbiAgICBtb2NoaTogbmV3IE1lbnVJdGVtKCdNb2NoaSBJY2UgQ3JlYW0nLCA2Ljk5LCAnVmFuaWxsYSwgQ2hvY29sYXRlLCBTdHJhd2JlcnJ5LCBHcmVlbiBUZWEnKSxcclxufTtcclxuXHJcbmNvbnN0IG1lbnUgPSB7YXBwZXRpemVycywgc3VzaGksIGJldmVyYWdlcywgZGVzc2VydH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51OyIsImltcG9ydCBjcmVhdGVBYm91dFNlY3Rpb24gZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IGNyZWF0ZU1lbnVTZWN0aW9uIGZyb20gJy4vbWVudS1yZW5kZXInO1xyXG5pbXBvcnQgY3JlYXRlQ29udGFjdFNlY3Rpb24gZnJvbSAnLi9jb250YWN0JztcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRlbXBsYXRlKHBhZ2UpIHtcclxuICAgIC8vIFJlbW92ZSBhbGwgY2hpbGQgbm9kZXMgZnJvbSBib2R5IC8vXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgd2hpbGUgKGJvZHkuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRlbXBsYXRlID0gY3JlYXRlQ29udGVudChwYWdlKTtcclxuXHJcbiAgICByZXR1cm4gdGVtcGxhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQocGFnZSkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcclxuXHJcbiAgICBjb25zdCBuYXZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5hdkRpdi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcclxuICAgIG5hdkRpdi5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XHJcblxyXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgYmFja2dyb3VuZC5zcmMgPSAnLi4vc3JjL2ltYWdlcy9zdXNoaS1yZXN0YXVyYW50LWJnLmpwZyc7XHJcbiAgICBiYWNrZ3JvdW5kLmFsdCA9ICdKYXBhbmVzZSBSZXN0YXVyYW50IEJhY2tncm91bmQnO1xyXG4gICAgYmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1c2hpLWJnJyk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZEaXYpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcclxuXHJcbiAgICAvLyBMb2FkIHBhZ2UgYmFzZWQgb24gYXJndW1lbnQgcGFzc2VkIGluXHJcbiAgICBpZiAocGFnZSA9PT0gdW5kZWZpbmVkIHx8IHBhZ2UgPT09ICdIb21lJykge1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXRTZWN0aW9uKCkpO1xyXG4gICAgfSBlbHNlIGlmIChwYWdlID09PSAnTWVudScpIHtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVTZWN0aW9uKCkpO1xyXG4gICAgfSBlbHNlIGlmIChwYWdlID09PSAnQ29udGFjdCcpIHtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RTZWN0aW9uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGFicygpKTtcclxuXHJcbiAgICByZXR1cm4gbmF2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICAvLyBjcmVhdGUgZGl2IHRvIHNhbmR3aWNoIGhlYWRlclxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcblxyXG4gICAgLy8gY3JlYXRlIHN1c2hpIGljb24gaW1nXHJcbiAgICBjb25zdCBzdXNoaUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHN1c2hpSWNvbi5zcmMgPSAnLi4vc3JjL2ltYWdlcy9zdXNoaS1pY29uLnBuZyc7XHJcbiAgICBzdXNoaUljb24uYWx0ID0gJ1N1c2hpIFJvbGwnO1xyXG4gICAgc3VzaGlJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VzaGktaWNvbicpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBoMSBuYW1lIG9mIHJlc3RhdXJhbnRcclxuICAgIGNvbnN0IHJlc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHJlc3ROYW1lLmFwcGVuZCgnU29uaWMgU3VzaGknKTtcclxuXHJcbiAgICAvLyBBcHBlbmQgZWxlbWVudHMgdG8gaGVhZGVyIGRpdiBhbmQgcmV0dXJuXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc3VzaGlJY29uKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChyZXN0TmFtZSk7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFicygpIHtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICAgIGxldCB0YWJzID0gWydIb21lJywgJ01lbnUnLCAnQ29udGFjdCddO1xyXG4gICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpIHtcclxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpbmsodGFiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmsobmFtZSkge1xyXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgXHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZSk7XHJcbiAgICBsaW5rLmFwcGVuZChuYW1lKTtcclxuXHJcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgZGVwZW5kaW5nIG9uIGVhY2ggdGFiIG5hbWUgLy8gXHJcbiAgICBpZiAobmFtZSA9PT0gJ0hvbWUnKSB7XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJUZW1wbGF0ZSgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ01lbnUnKSB7XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJUZW1wbGF0ZSgnTWVudScpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ0NvbnRhY3QnKSB7XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJUZW1wbGF0ZSgnQ29udGFjdCcpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgIHJldHVybiBsaXN0SXRlbTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyVGVtcGxhdGU7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==