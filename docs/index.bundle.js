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
___CSS_LOADER_EXPORT___.push([module.id, "html {\r\n    --txt-color: #2D2926FF;\r\n    --red-bg: #e94b3c;\r\n}\r\n\r\nhtml,\r\nbody,\r\n#content,\r\n#sushi-bg {\r\n    padding: 0;\r\n    margin: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    min-width: 1170px;\r\n    min-height: 750px;\r\n}\r\n\r\n#sushi-bg {\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    opacity: 1;\r\n    top: 106px;\r\n    height: calc(100% - 106px);\r\n    z-index: -1;\r\n}\r\n\r\nnav {\r\n    background-color: var(--red-bg);\r\n    padding: 15px 50px;\r\n    background: linear-gradient(var(--txt-color), 25%, var(--red-bg), 85%, var(--txt-color));\r\n\r\n    display: grid;\r\n    grid-template: 1fr / 1fr 2fr;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n}\r\n\r\n#sushi-icon {\r\n    height: 75px;\r\n}\r\n\r\nnav h1 {\r\n    margin: 0;\r\n    font-size: 50pt;\r\n    color: var(--txt-color );\r\n    min-width: 328px;\r\n    align-self: center;\r\n    margin-left: 10px;\r\n}\r\n\r\nnav ul {\r\n    list-style: none;\r\n    font-size: 30pt;\r\n    color: var(--txt-color);\r\n    margin: 0;\r\n    align-self: center;  \r\n\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    gap: 20px;\r\n}\r\n\r\nli a {\r\n    text-decoration: none;\r\n    color: var(--txt-color);\r\n}\r\n\r\nli:hover {\r\n    cursor: pointer;\r\n}\r\n\r\nli a:hover {\r\n    display: inline-block;\r\n    transform: scale(1.2);\r\n    cursor: pointer;\r\n}\r\n\r\nli a:active {\r\n    transform: scale(1);\r\n}\r\n\r\n/** Start of About Section */\r\n\r\n.about,\r\n.contact,\r\n.menu {\r\n    display: flex;\r\n    flex-flow: column;\r\n    align-items: center;\r\n    \r\n    margin-left: 250px;\r\n    margin-top: 65px;\r\n    width: 750px;\r\n\r\n    color: var(--txt-color);\r\n    text-shadow: 1px 1px 1px black;\r\n    background-color: rgba(233, 75, 60, .6);\r\n    border-radius: 25px;\r\n\r\n    z-index: 1;\r\n}\r\n\r\n.about h1,\r\n.contact h1,\r\n.menu h1 {\r\n    font-size: 40pt;\r\n}\r\n\r\n.about-txt {\r\n    font-size: 20pt;\r\n    margin-bottom: 15px;\r\n}\r\n\r\nh2 {\r\n    margin: 0;\r\n}\r\n\r\n#sushi-chef {\r\n    width: 500px;\r\n    border-radius: 10px;\r\n    border: 1px solid var(--txt-color);\r\n}\r\n\r\n#order-btn {\r\n    height: 40px;\r\n    width: 100px;\r\n    border-radius: 25px;\r\n    font-weight: bold;\r\n    box-shadow: 2px 2px 2px gray;\r\n\r\n    margin: 15px 0px;\r\n}\r\n\r\n#order-btn:hover {\r\n    transform: scale(1.1);\r\n    cursor: pointer;\r\n}\r\n\r\n#order-btn:active {\r\n    transform: scale(1);\r\n}\r\n\r\n/** Start of Contact Section */\r\n.contact {\r\n    display: grid;\r\n    row-gap: 20px;\r\n}\r\n\r\n.contact h1 {\r\n    justify-self: center;\r\n    margin: 20px 0 0;\r\n\r\n}\r\n\r\n.contact > div {\r\n    margin-left: 150px;\r\n}\r\n\r\n.location,\r\n.time,\r\n.telephone,\r\n.email {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n#location-pin,\r\n#clock-icon,\r\n#phone-icon,\r\n#email-icon {\r\n    width: 30px;\r\n}\r\n\r\n#clock-icon {\r\n    align-self: flex-start;\r\n}\r\n\r\ntextarea {\r\n    resize: none;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    width: fit-content;\r\n\r\n    justify-self: center;\r\n    margin-bottom: 20px;\r\n\r\n    color: black;\r\n    text-shadow: none;\r\n}\r\n\r\nform h2 {\r\n    align-self: center;\r\n}\r\n\r\nform div {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\nform div input {\r\n    margin-left: auto;\r\n}\r\n\r\nform button {\r\n    width: 120px;\r\n    height: 25px;\r\n    align-self: center;\r\n}\r\n\r\nform button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\nform button:active {\r\n    transform: scale(0.9);\r\n}\r\n\r\n/** Start of Menu Section */\r\n.menu {\r\n    width: max(1050px, 55%);\r\n    height: 735px;\r\n    overflow-y: scroll;\r\n\r\n    margin-top: 35px;\r\n    margin-left: 30px;\r\n\r\n    padding: 0 25px 20px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    border-top-right-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n}\r\n\r\n.menu > div {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(435px, 1fr));\r\n    gap: 35px;\r\n    \r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.menu > div img {\r\n    width: 300px;\r\n    height: 200px;\r\n    border-radius: 15px;\r\n    box-shadow: -5px 4px 5px var(--txt-color);\r\n    outline: 1px solid black;\r\n}\r\n\r\n.menu > div > div {\r\n    display: flex;\r\n    gap: 15px;\r\n}\r\n\r\n.info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.name-price {\r\n    padding: 0 10px;\r\n    width: 280px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.description {\r\n    color: black;\r\n    text-shadow: none;\r\n    width: 150px;\r\n    font-size: 20px;\r\n    font-weight: 550;\r\n    padding: 5px 0;\r\n}\r\n\r\n.description p {\r\n    margin: 0;\r\n}\r\n\r\n.menu::-webkit-scrollbar {\r\n    width: 10px;\r\n    background-color: var(--txt-color);\r\n    border-radius: 10px;\r\n}\r\n\r\n.menu::-webkit-scrollbar-track {\r\n    border-radius: 10px;\r\n    background-color: var(--txt-color);\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);\r\n    height: 80%;\r\n}\r\n\r\n.menu::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    background-color: rgba(128, 128, 128, 0.404);\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);\r\n}", "",{"version":3,"sources":["webpack://./src/stylesheets/style.css"],"names":[],"mappings":"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","sourcesContent":["html {\r\n    --txt-color: #2D2926FF;\r\n    --red-bg: #e94b3c;\r\n}\r\n\r\nhtml,\r\nbody,\r\n#content,\r\n#sushi-bg {\r\n    padding: 0;\r\n    margin: 0;\r\n    height: 100%;\r\n    width: 100%;\r\n    min-width: 1170px;\r\n    min-height: 750px;\r\n}\r\n\r\n#sushi-bg {\r\n    box-sizing: border-box;\r\n    position: absolute;\r\n    opacity: 1;\r\n    top: 106px;\r\n    height: calc(100% - 106px);\r\n    z-index: -1;\r\n}\r\n\r\nnav {\r\n    background-color: var(--red-bg);\r\n    padding: 15px 50px;\r\n    background: linear-gradient(var(--txt-color), 25%, var(--red-bg), 85%, var(--txt-color));\r\n\r\n    display: grid;\r\n    grid-template: 1fr / 1fr 2fr;\r\n}\r\n\r\n.header {\r\n    display: flex;\r\n}\r\n\r\n#sushi-icon {\r\n    height: 75px;\r\n}\r\n\r\nnav h1 {\r\n    margin: 0;\r\n    font-size: 50pt;\r\n    color: var(--txt-color );\r\n    min-width: 328px;\r\n    align-self: center;\r\n    margin-left: 10px;\r\n}\r\n\r\nnav ul {\r\n    list-style: none;\r\n    font-size: 30pt;\r\n    color: var(--txt-color);\r\n    margin: 0;\r\n    align-self: center;  \r\n\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    gap: 20px;\r\n}\r\n\r\nli a {\r\n    text-decoration: none;\r\n    color: var(--txt-color);\r\n}\r\n\r\nli:hover {\r\n    cursor: pointer;\r\n}\r\n\r\nli a:hover {\r\n    display: inline-block;\r\n    transform: scale(1.2);\r\n    cursor: pointer;\r\n}\r\n\r\nli a:active {\r\n    transform: scale(1);\r\n}\r\n\r\n/** Start of About Section */\r\n\r\n.about,\r\n.contact,\r\n.menu {\r\n    display: flex;\r\n    flex-flow: column;\r\n    align-items: center;\r\n    \r\n    margin-left: 250px;\r\n    margin-top: 65px;\r\n    width: 750px;\r\n\r\n    color: var(--txt-color);\r\n    text-shadow: 1px 1px 1px black;\r\n    background-color: rgba(233, 75, 60, .6);\r\n    border-radius: 25px;\r\n\r\n    z-index: 1;\r\n}\r\n\r\n.about h1,\r\n.contact h1,\r\n.menu h1 {\r\n    font-size: 40pt;\r\n}\r\n\r\n.about-txt {\r\n    font-size: 20pt;\r\n    margin-bottom: 15px;\r\n}\r\n\r\nh2 {\r\n    margin: 0;\r\n}\r\n\r\n#sushi-chef {\r\n    width: 500px;\r\n    border-radius: 10px;\r\n    border: 1px solid var(--txt-color);\r\n}\r\n\r\n#order-btn {\r\n    height: 40px;\r\n    width: 100px;\r\n    border-radius: 25px;\r\n    font-weight: bold;\r\n    box-shadow: 2px 2px 2px gray;\r\n\r\n    margin: 15px 0px;\r\n}\r\n\r\n#order-btn:hover {\r\n    transform: scale(1.1);\r\n    cursor: pointer;\r\n}\r\n\r\n#order-btn:active {\r\n    transform: scale(1);\r\n}\r\n\r\n/** Start of Contact Section */\r\n.contact {\r\n    display: grid;\r\n    row-gap: 20px;\r\n}\r\n\r\n.contact h1 {\r\n    justify-self: center;\r\n    margin: 20px 0 0;\r\n\r\n}\r\n\r\n.contact > div {\r\n    margin-left: 150px;\r\n}\r\n\r\n.location,\r\n.time,\r\n.telephone,\r\n.email {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 10px;\r\n}\r\n\r\n#location-pin,\r\n#clock-icon,\r\n#phone-icon,\r\n#email-icon {\r\n    width: 30px;\r\n}\r\n\r\n#clock-icon {\r\n    align-self: flex-start;\r\n}\r\n\r\ntextarea {\r\n    resize: none;\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 10px;\r\n    width: fit-content;\r\n\r\n    justify-self: center;\r\n    margin-bottom: 20px;\r\n\r\n    color: black;\r\n    text-shadow: none;\r\n}\r\n\r\nform h2 {\r\n    align-self: center;\r\n}\r\n\r\nform div {\r\n    display: flex;\r\n    gap: 10px;\r\n}\r\n\r\nform div input {\r\n    margin-left: auto;\r\n}\r\n\r\nform button {\r\n    width: 120px;\r\n    height: 25px;\r\n    align-self: center;\r\n}\r\n\r\nform button:hover {\r\n    cursor: pointer;\r\n}\r\n\r\nform button:active {\r\n    transform: scale(0.9);\r\n}\r\n\r\n/** Start of Menu Section */\r\n.menu {\r\n    width: max(1050px, 55%);\r\n    height: 735px;\r\n    overflow-y: scroll;\r\n\r\n    margin-top: 35px;\r\n    margin-left: 30px;\r\n\r\n    padding: 0 25px 20px;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    border-top-right-radius: 10px;\r\n    border-bottom-right-radius: 10px;\r\n}\r\n\r\n.menu > div {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(435px, 1fr));\r\n    gap: 35px;\r\n    \r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n\r\n.menu > div img {\r\n    width: 300px;\r\n    height: 200px;\r\n    border-radius: 15px;\r\n    box-shadow: -5px 4px 5px var(--txt-color);\r\n    outline: 1px solid black;\r\n}\r\n\r\n.menu > div > div {\r\n    display: flex;\r\n    gap: 15px;\r\n}\r\n\r\n.info {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n}\r\n\r\n.name-price {\r\n    padding: 0 10px;\r\n    width: 280px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n}\r\n\r\n.description {\r\n    color: black;\r\n    text-shadow: none;\r\n    width: 150px;\r\n    font-size: 20px;\r\n    font-weight: 550;\r\n    padding: 5px 0;\r\n}\r\n\r\n.description p {\r\n    margin: 0;\r\n}\r\n\r\n.menu::-webkit-scrollbar {\r\n    width: 10px;\r\n    background-color: var(--txt-color);\r\n    border-radius: 10px;\r\n}\r\n\r\n.menu::-webkit-scrollbar-track {\r\n    border-radius: 10px;\r\n    background-color: var(--txt-color);\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);\r\n    height: 80%;\r\n}\r\n\r\n.menu::-webkit-scrollbar-thumb {\r\n    border-radius: 10px;\r\n    background-color: rgba(128, 128, 128, 0.404);\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);\r\n}"],"sourceRoot":""}]);
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
    locationIcon.src = '../docs/images/location-pin.png';
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
    timeIcon.src = '../docs/images/time.png';
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
    phoneIcon.src = '../docs/images/call.png';
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
    emailIcon.src = '../docs/images/email.png';
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
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template */ "./src/modules/template.js");


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
    sushiChef.src = '../docs/images/Tanoshii-sushi-chef.jpg';
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

    orderBtn.addEventListener('click', () => {
        document.body.appendChild((0,_template__WEBPACK_IMPORTED_MODULE_0__["default"])('Menu'));
    });

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
        appsDiv.appendChild(createFoodDiv('appetizers', item));
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
        sushiDiv.appendChild(createFoodDiv('sushi', item));
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
        bevDiv.appendChild(createFoodDiv('beverages', item));
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
        dessertDiv.appendChild(createFoodDiv('dessert', item));
    }
    return dessertDiv;
}

// FoodDiv func and all underlying func used for apps, sushi, beverages, and desert sections //

function createFoodDiv(course, food) {
    const foodDiv = document.createElement('div');
    foodDiv.classList.add(`${food}`);

    foodDiv.appendChild(createFoodInfo(course, food));
    foodDiv.appendChild(createFoodDescription(course, food));

    return foodDiv;
}

function createFoodInfo(course, food) {
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');

    infoDiv.appendChild(createFoodImg(food));
    infoDiv.appendChild(createNamePriceDiv(course, food));

    return infoDiv;
}

function createFoodImg(food) {
    const foodImg = document.createElement('img');
    foodImg.src = `../docs/images/menu-images/${food}.jpg`;
    foodImg.alt = `${food}`;
    foodImg.setAttribute('id', `${food}`);

    return foodImg;
}

function createNamePriceDiv(course, food) {
    const namePriceDiv = document.createElement('div');
    namePriceDiv.classList.add('name-price');

    const foodName = document.createElement('h2');
    foodName.append(_menu__WEBPACK_IMPORTED_MODULE_0__["default"][course][food].name);
    namePriceDiv.appendChild(foodName);

    const foodPrice = document.createElement('h2');
    const cost = _menu__WEBPACK_IMPORTED_MODULE_0__["default"][course][food].price
    foodPrice.append(`$ ${cost.toFixed(2)}`);
    namePriceDiv.appendChild(foodPrice);

    return namePriceDiv;
}

function createFoodDescription(course, food) {
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('description');

    const descriptionPara = document.createElement('p');
    descriptionPara.append(_menu__WEBPACK_IMPORTED_MODULE_0__["default"][course][food].description);
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
    background.src = '../docs/images/sushi-restaurant-bg.jpg';
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
    sushiIcon.src = '../docs/images/sushi-icon.png';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sYUFBYSxRQUFRLFVBQVUsWUFBWSxjQUFjLGFBQWEsYUFBYSxZQUFZLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxNQUFNLE9BQU8sVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxPQUFPLFFBQVEsVUFBVSxZQUFZLFdBQVcsTUFBTSxRQUFRLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLFlBQVksTUFBTSxZQUFZLFdBQVcsYUFBYSxhQUFhLGNBQWMsY0FBYyxXQUFXLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUs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IndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlc2hlZXRzL3N0eWxlLmNzcz9iZmZjIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvY29udGFjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LXJlbmRlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3RlbXBsYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCB7XFxyXFxuICAgIC0tdHh0LWNvbG9yOiAjMkQyOTI2RkY7XFxyXFxuICAgIC0tcmVkLWJnOiAjZTk0YjNjO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHksXFxyXFxuI2NvbnRlbnQsXFxyXFxuI3N1c2hpLWJnIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtaW4td2lkdGg6IDExNzBweDtcXHJcXG4gICAgbWluLWhlaWdodDogNzUwcHg7XFxyXFxufVxcclxcblxcclxcbiNzdXNoaS1iZyB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdG9wOiAxMDZweDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDZweCk7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYmcpO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS10eHQtY29sb3IpLCAyNSUsIHZhcigtLXJlZC1iZyksIDg1JSwgdmFyKC0tdHh0LWNvbG9yKSk7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAyZnI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3VzaGktaWNvbiB7XFxyXFxuICAgIGhlaWdodDogNzVweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGgxIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXNpemU6IDUwcHQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10eHQtY29sb3IgKTtcXHJcXG4gICAgbWluLXdpZHRoOiAzMjhweDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB0O1xcclxcbiAgICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yKTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7ICBcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubGkgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXR4dC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmxpOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5saSBhOmhvdmVyIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubGkgYTphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiogU3RhcnQgb2YgQWJvdXQgU2VjdGlvbiAqL1xcclxcblxcclxcbi5hYm91dCxcXHJcXG4uY29udGFjdCxcXHJcXG4ubWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA2NXB4O1xcclxcbiAgICB3aWR0aDogNzUwcHg7XFxyXFxuXFxyXFxuICAgIGNvbG9yOiB2YXIoLS10eHQtY29sb3IpO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMzLCA3NSwgNjAsIC42KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG5cXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IGgxLFxcclxcbi5jb250YWN0IGgxLFxcclxcbi5tZW51IGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdHh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB0O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3N1c2hpLWNoZWYge1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXR4dC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNvcmRlci1idG4ge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IGdyYXk7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogMTVweCAwcHg7XFxyXFxufVxcclxcblxcclxcbiNvcmRlci1idG46aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI29yZGVyLWJ0bjphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiogU3RhcnQgb2YgQ29udGFjdCBTZWN0aW9uICovXFxyXFxuLmNvbnRhY3Qge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICByb3ctZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBoMSB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDIwcHggMCAwO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCA+IGRpdiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uLFxcclxcbi50aW1lLFxcclxcbi50ZWxlcGhvbmUsXFxyXFxuLmVtYWlsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9jYXRpb24tcGluLFxcclxcbiNjbG9jay1pY29uLFxcclxcbiNwaG9uZS1pY29uLFxcclxcbiNlbWFpbC1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiNjbG9jay1pY29uIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG5cXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaDIge1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGRpdiBpbnB1dCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbjphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxyXFxufVxcclxcblxcclxcbi8qKiBTdGFydCBvZiBNZW51IFNlY3Rpb24gKi9cXHJcXG4ubWVudSB7XFxyXFxuICAgIHdpZHRoOiBtYXgoMTA1MHB4LCA1NSUpO1xcclxcbiAgICBoZWlnaHQ6IDczNXB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuXFxyXFxuICAgIG1hcmdpbi10b3A6IDM1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAwIDI1cHggMjBweDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSA+IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDM1cHgsIDFmcikpO1xcclxcbiAgICBnYXA6IDM1cHg7XFxyXFxuICAgIFxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSA+IGRpdiBpbWcge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IC01cHggNHB4IDVweCB2YXIoLS10eHQtY29sb3IpO1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5tZW51ID4gZGl2ID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1wcmljZSB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgd2lkdGg6IDI4MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTUwO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5tZW51Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10eHQtY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10eHQtY29sb3IpO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAuMyk7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDA0KTtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgLjMpO1xcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzaGVldHMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTs7OztJQUlJLFVBQVU7SUFDVixTQUFTO0lBQ1QsWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLHdGQUF3Rjs7SUFFeEYsYUFBYTtJQUNiLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksU0FBUztJQUNULGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1Qsa0JBQWtCOztJQUVsQixhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBLDRCQUE0Qjs7QUFFNUI7OztJQUdJLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1COztJQUVuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLFlBQVk7O0lBRVosdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5Qix1Q0FBdUM7SUFDdkMsbUJBQW1COztJQUVuQixVQUFVO0FBQ2Q7O0FBRUE7OztJQUdJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsNEJBQTRCOztJQUU1QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQSw4QkFBOEI7QUFDOUI7SUFDSSxhQUFhO0lBQ2IsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOzs7O0lBSUksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7O0FBRUE7Ozs7SUFJSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1Qsa0JBQWtCOztJQUVsQixvQkFBb0I7SUFDcEIsbUJBQW1COztJQUVuQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQSwyQkFBMkI7QUFDM0I7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjs7SUFFbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7SUFFakIsb0JBQW9COztJQUVwQixhQUFhO0lBQ2Isc0JBQXNCOztJQUV0Qiw2QkFBNkI7SUFDN0IsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJEQUEyRDtJQUMzRCxTQUFTOztJQUVULFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQ0FBa0M7SUFDbEMsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtDQUFrQztJQUNsQyxtREFBbUQ7SUFDbkQsV0FBVztBQUNmOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLDRDQUE0QztJQUM1QyxtREFBbUQ7QUFDdkRcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxyXFxuICAgIC0tdHh0LWNvbG9yOiAjMkQyOTI2RkY7XFxyXFxuICAgIC0tcmVkLWJnOiAjZTk0YjNjO1xcclxcbn1cXHJcXG5cXHJcXG5odG1sLFxcclxcbmJvZHksXFxyXFxuI2NvbnRlbnQsXFxyXFxuI3N1c2hpLWJnIHtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtaW4td2lkdGg6IDExNzBweDtcXHJcXG4gICAgbWluLWhlaWdodDogNzUwcHg7XFxyXFxufVxcclxcblxcclxcbiNzdXNoaS1iZyB7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgdG9wOiAxMDZweDtcXHJcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDZweCk7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbn1cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1yZWQtYmcpO1xcclxcbiAgICBwYWRkaW5nOiAxNXB4IDUwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh2YXIoLS10eHQtY29sb3IpLCAyNSUsIHZhcigtLXJlZC1iZyksIDg1JSwgdmFyKC0tdHh0LWNvbG9yKSk7XFxyXFxuXFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIDFmciAyZnI7XFxyXFxufVxcclxcblxcclxcbi5oZWFkZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4jc3VzaGktaWNvbiB7XFxyXFxuICAgIGhlaWdodDogNzVweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IGgxIHtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBmb250LXNpemU6IDUwcHQ7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10eHQtY29sb3IgKTtcXHJcXG4gICAgbWluLXdpZHRoOiAzMjhweDtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAgZm9udC1zaXplOiAzMHB0O1xcclxcbiAgICBjb2xvcjogdmFyKC0tdHh0LWNvbG9yKTtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7ICBcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxubGkgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXR4dC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbmxpOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5saSBhOmhvdmVyIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxubGkgYTphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiogU3RhcnQgb2YgQWJvdXQgU2VjdGlvbiAqL1xcclxcblxcclxcbi5hYm91dCxcXHJcXG4uY29udGFjdCxcXHJcXG4ubWVudSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA2NXB4O1xcclxcbiAgICB3aWR0aDogNzUwcHg7XFxyXFxuXFxyXFxuICAgIGNvbG9yOiB2YXIoLS10eHQtY29sb3IpO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAxcHggYmxhY2s7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMzLCA3NSwgNjAsIC42KTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG5cXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IGgxLFxcclxcbi5jb250YWN0IGgxLFxcclxcbi5tZW51IGgxIHtcXHJcXG4gICAgZm9udC1zaXplOiA0MHB0O1xcclxcbn1cXHJcXG5cXHJcXG4uYWJvdXQtdHh0IHtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB0O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuI3N1c2hpLWNoZWYge1xcclxcbiAgICB3aWR0aDogNTAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXR4dC1jb2xvcik7XFxyXFxufVxcclxcblxcclxcbiNvcmRlci1idG4ge1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IGdyYXk7XFxyXFxuXFxyXFxuICAgIG1hcmdpbjogMTVweCAwcHg7XFxyXFxufVxcclxcblxcclxcbiNvcmRlci1idG46aG92ZXIge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuI29yZGVyLWJ0bjphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcclxcbn1cXHJcXG5cXHJcXG4vKiogU3RhcnQgb2YgQ29udGFjdCBTZWN0aW9uICovXFxyXFxuLmNvbnRhY3Qge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICByb3ctZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBoMSB7XFxyXFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDIwcHggMCAwO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCA+IGRpdiB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvY2F0aW9uLFxcclxcbi50aW1lLFxcclxcbi50ZWxlcGhvbmUsXFxyXFxuLmVtYWlsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jbG9jYXRpb24tcGluLFxcclxcbiNjbG9jay1pY29uLFxcclxcbiNwaG9uZS1pY29uLFxcclxcbiNlbWFpbC1pY29uIHtcXHJcXG4gICAgd2lkdGg6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbiNjbG9jay1pY29uIHtcXHJcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEge1xcclxcbiAgICByZXNpemU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBnYXA6IDEwcHg7XFxyXFxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcXHJcXG5cXHJcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuXFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmZvcm0gaDIge1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGRpdiBpbnB1dCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbiB7XFxyXFxuICAgIHdpZHRoOiAxMjBweDtcXHJcXG4gICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvcm0gYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIGJ1dHRvbjphY3RpdmUge1xcclxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxyXFxufVxcclxcblxcclxcbi8qKiBTdGFydCBvZiBNZW51IFNlY3Rpb24gKi9cXHJcXG4ubWVudSB7XFxyXFxuICAgIHdpZHRoOiBtYXgoMTA1MHB4LCA1NSUpO1xcclxcbiAgICBoZWlnaHQ6IDczNXB4O1xcclxcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxyXFxuXFxyXFxuICAgIG1hcmdpbi10b3A6IDM1cHg7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcclxcblxcclxcbiAgICBwYWRkaW5nOiAwIDI1cHggMjBweDtcXHJcXG5cXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG5cXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSA+IGRpdiB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoNDM1cHgsIDFmcikpO1xcclxcbiAgICBnYXA6IDM1cHg7XFxyXFxuICAgIFxcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSA+IGRpdiBpbWcge1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxuICAgIGhlaWdodDogMjAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIGJveC1zaGFkb3c6IC01cHggNHB4IDVweCB2YXIoLS10eHQtY29sb3IpO1xcclxcbiAgICBvdXRsaW5lOiAxcHggc29saWQgYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi5tZW51ID4gZGl2ID4gZGl2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGdhcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmFtZS1wcmljZSB7XFxyXFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgd2lkdGg6IDI4MHB4O1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi5kZXNjcmlwdGlvbiB7XFxyXFxuICAgIGNvbG9yOiBibGFjaztcXHJcXG4gICAgdGV4dC1zaGFkb3c6IG5vbmU7XFxyXFxuICAgIHdpZHRoOiAxNTBweDtcXHJcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICBmb250LXdlaWdodDogNTUwO1xcclxcbiAgICBwYWRkaW5nOiA1cHggMDtcXHJcXG59XFxyXFxuXFxyXFxuLmRlc2NyaXB0aW9uIHAge1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi5tZW51Ojotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuICAgIHdpZHRoOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10eHQtY29sb3IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10eHQtY29sb3IpO1xcclxcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAuMyk7XFxyXFxuICAgIGhlaWdodDogODAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDA0KTtcXHJcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgLjMpO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vc3R5bGVzaGVldHMvc3R5bGUuY3NzJztcclxuaW1wb3J0IHJlbmRlclRlbXBsYXRlIGZyb20gJy4vbW9kdWxlcy90ZW1wbGF0ZSc7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlclRlbXBsYXRlKCkpOyIsImltcG9ydCBjcmVhdGVGb3JtIGZyb20gJy4vY29udGFjdEZvcm0nO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdFNlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcclxuXHJcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RIMSgpKTtcclxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTG9jYXRpb24oKSk7XHJcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRpbWUoKSk7XHJcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZVBob25lTnVtKCkpO1xyXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjcmVhdGVFbWFpbCgpKTtcclxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybSgpKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFjdERpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdEgxKCkge1xyXG4gICAgY29uc3QgY29udGFjdEgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGNvbnRhY3RIMS5hcHBlbmQoJ0NvbnRhY3QgVXMnKTtcclxuICAgIHJldHVybiBjb250YWN0SDE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKCkge1xyXG4gICAgY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxvY2F0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uJyk7XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBsb2NhdGlvbkljb24uc3JjID0gJy4uL2RvY3MvaW1hZ2VzL2xvY2F0aW9uLXBpbi5wbmcnO1xyXG4gICAgbG9jYXRpb25JY29uLmFsdCA9ICdMb2NhdGlvbiBQaW4nO1xyXG4gICAgbG9jYXRpb25JY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9jYXRpb24tcGluJyk7XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgbG9jYXRpb24uYXBwZW5kKCcxMjM0IE1hZGUtVXAgU3QsIFNvbWVDaXR5LCBOSiAxMjM0NScpO1xyXG5cclxuICAgIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uSWNvbik7XHJcbiAgICBsb2NhdGlvbkRpdi5hcHBlbmRDaGlsZChsb2NhdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIGxvY2F0aW9uRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUaW1lKCkge1xyXG4gICAgY29uc3QgdGltZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGltZURpdi5jbGFzc0xpc3QuYWRkKCd0aW1lJyk7XHJcblxyXG4gICAgY29uc3QgdGltZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHRpbWVJY29uLnNyYyA9ICcuLi9kb2NzL2ltYWdlcy90aW1lLnBuZyc7XHJcbiAgICB0aW1lSWNvbi5hbHQgPSAnY2xvY2staWNvbic7XHJcbiAgICB0aW1lSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb2NrLWljb24nKTtcclxuXHJcbiAgICB0aW1lRGl2LmFwcGVuZENoaWxkKHRpbWVJY29uKTtcclxuICAgIHRpbWVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSG91cnMoKSk7XHJcblxyXG4gICAgcmV0dXJuIHRpbWVEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvdXJzKCkge1xyXG4gICAgY29uc3QgaG91cnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvdXJzRGl2LmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XHJcblxyXG4gICAgY29uc3Qgd2Vla2RheUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHdlZWtkYXlIb3Vycy5hcHBlbmQoJ01vbmRheSAtIFRodXJzZGF5OiA4YW0gLSA4cG0nKTtcclxuXHJcbiAgICBjb25zdCB3ZWVrZW5kSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgd2Vla2VuZEhvdXJzLmFwcGVuZCgnRnJpZGF5IC0gU3VuZGF5OiA4YW0gLSAxMXBtJyk7XHJcblxyXG4gICAgaG91cnNEaXYuYXBwZW5kQ2hpbGQod2Vla2RheUhvdXJzKTtcclxuICAgIGhvdXJzRGl2LmFwcGVuZENoaWxkKHdlZWtlbmRIb3Vycyk7XHJcblxyXG4gICAgcmV0dXJuIGhvdXJzRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQaG9uZU51bSgpIHtcclxuICAgIGNvbnN0IHBob25lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwaG9uZURpdi5jbGFzc0xpc3QuYWRkKCd0ZWxlcGhvbmUnKTtcclxuXHJcbiAgICBjb25zdCBwaG9uZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHBob25lSWNvbi5zcmMgPSAnLi4vZG9jcy9pbWFnZXMvY2FsbC5wbmcnO1xyXG4gICAgcGhvbmVJY29uLmFsdCA9ICdwaG9uZS1pY29uJztcclxuICAgIHBob25lSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Bob25lLWljb24nKTtcclxuXHJcbiAgICBjb25zdCBwaG9uZU51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBwaG9uZU51bS5hcHBlbmQoJygxMjMpLTQ1Ni03ODkwJyk7XHJcblxyXG4gICAgcGhvbmVEaXYuYXBwZW5kQ2hpbGQocGhvbmVJY29uKTtcclxuICAgIHBob25lRGl2LmFwcGVuZENoaWxkKHBob25lTnVtKTtcclxuXHJcbiAgICByZXR1cm4gcGhvbmVEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVtYWlsKCkge1xyXG4gICAgY29uc3QgZW1haWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVtYWlsRGl2LmNsYXNzTGlzdC5hZGQoJ2VtYWlsJyk7XHJcblxyXG4gICAgY29uc3QgZW1haWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBlbWFpbEljb24uc3JjID0gJy4uL2RvY3MvaW1hZ2VzL2VtYWlsLnBuZyc7XHJcbiAgICBlbWFpbEljb24uYWx0ID0gJ2VtYWlsLWljb24nO1xyXG4gICAgZW1haWxJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZW1haWwtaWNvbicpO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBlbWFpbEFkZHJlc3MuYXBwZW5kKCdmYWtlbWFpbEBub3RyZWFsLmNvbScpO1xyXG5cclxuICAgIGVtYWlsRGl2LmFwcGVuZENoaWxkKGVtYWlsSWNvbik7XHJcbiAgICBlbWFpbERpdi5hcHBlbmRDaGlsZChlbWFpbEFkZHJlc3MpO1xyXG5cclxuICAgIHJldHVybiBlbWFpbERpdjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdFNlY3Rpb247IiwiZnVuY3Rpb24gY3JlYXRlRm9ybSgpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblxyXG4gICAgY29uc3QgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBmb3JtSGVhZGVyLmFwcGVuZCgnTWVzc2FnZSBVcycpO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUhlYWRlcik7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZU5hbWVEaXYoKSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUVtYWlsRGl2KCkpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0QXJlYSgpKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybUJ1dHRvbigpKTtcclxuXHJcbiAgICByZXR1cm4gZm9ybTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmFtZURpdigpIHtcclxuICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5hbWVEaXYuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xyXG5cclxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xyXG4gICAgbmFtZUxhYmVsLmFwcGVuZCgnRnVsbCBOYW1lOicpO1xyXG5cclxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcclxuXHJcbiAgICBuYW1lRGl2LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgICBuYW1lRGl2LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XHJcblxyXG4gICAgcmV0dXJuIG5hbWVEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVtYWlsRGl2KCkge1xyXG4gICAgY29uc3QgZW1haWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVtYWlsRGl2LmNsYXNzTGlzdC5hZGQoJ3VzZXItZW1haWwnKTtcclxuXHJcbiAgICBjb25zdCBlbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGVtYWlsTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndXNlci1lbWFpbCcpO1xyXG4gICAgZW1haWxMYWJlbC5hcHBlbmQoJ0VtYWlsOicpO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKTtcclxuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd1c2VyLWVtYWlsJyk7XHJcblxyXG4gICAgZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxMYWJlbCk7XHJcbiAgICBlbWFpbERpdi5hcHBlbmRDaGlsZChlbWFpbElucHV0KTtcclxuXHJcbiAgICByZXR1cm4gZW1haWxEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRleHRBcmVhKCkge1xyXG4gICAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywgJ21lc3NhZ2UnKTtcclxuICAgIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZScpO1xyXG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdjb2xzJywgJzMwJyk7XHJcbiAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMTAnKTtcclxuICAgIHRleHRBcmVhLmFwcGVuZCgnVHlwZSB5b3VyIG1lc3NhZ2UuLi4nKTtcclxuXHJcbiAgICByZXR1cm4gdGV4dEFyZWE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvcm1CdXR0b24oKSB7XHJcbiAgICBjb25zdCBmb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBmb3JtQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdyZXNldCcpO1xyXG4gICAgZm9ybUJ1dHRvbi5hcHBlbmQoJ1N1Ym1pdCcpO1xyXG5cclxuICAgIHJldHVybiBmb3JtQnV0dG9uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb3JtO1xyXG4iLCJpbXBvcnQgcmVuZGVyVGVtcGxhdGUgZnJvbSBcIi4vdGVtcGxhdGVcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFib3V0U2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dERpdi5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xyXG5cclxuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUFib3V0SDEoKSk7XHJcbiAgICBhYm91dERpdi5hcHBlbmRDaGlsZChjcmVhdGVDaGVmSW1nKCkpO1xyXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXRQYXJhKCkpO1xyXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXRIMigpKTtcclxuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU9yZGVyQnRuKCkpO1xyXG5cclxuICAgIHJldHVybiBhYm91dERpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWJvdXRIMSgpIHtcclxuICAgIGNvbnN0IGFib3V0SDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgYWJvdXRIMS5hcHBlbmQoJ1dlbGNvbWUgISEhJyk7XHJcbiAgICByZXR1cm4gYWJvdXRIMTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2hlZkltZygpIHtcclxuICAgIGNvbnN0IHN1c2hpQ2hlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgc3VzaGlDaGVmLnNyYyA9ICcuLi9kb2NzL2ltYWdlcy9UYW5vc2hpaS1zdXNoaS1jaGVmLmpwZyc7XHJcbiAgICBzdXNoaUNoZWYuYWx0ID0gJ1N1c2hpIENoZWYnO1xyXG4gICAgc3VzaGlDaGVmLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VzaGktY2hlZicpO1xyXG4gICAgcmV0dXJuIHN1c2hpQ2hlZjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWJvdXRQYXJhKCkge1xyXG4gICAgY29uc3QgYWJvdXRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgYWJvdXRQYXJhLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXR4dCcpO1xyXG4gICAgYWJvdXRQYXJhLmFwcGVuZCgnSGFuZC1DcmFmdGVkIFN1c2hpIHdpdGggZnJlc2hseSBwaWNrZWQsIG9yZ2FuaWMgaW5ncmVkaWVudHMhJyk7XHJcbiAgICByZXR1cm4gYWJvdXRQYXJhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBYm91dEgyKCkge1xyXG4gICAgY29uc3QgYWJvdXRIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBhYm91dEgyLmFwcGVuZCgnRXN0LiAyMDIzJyk7XHJcbiAgICByZXR1cm4gYWJvdXRIMjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlT3JkZXJCdG4oKSB7XHJcbiAgICBjb25zdCBvcmRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgb3JkZXJCdG4udHlwZSA9ICdidXR0b24nO1xyXG4gICAgb3JkZXJCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdvcmRlci1idG4nKTtcclxuICAgIG9yZGVyQnRuLmFwcGVuZCgnT3JkZXIgTm93Jyk7XHJcblxyXG4gICAgb3JkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJUZW1wbGF0ZSgnTWVudScpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBvcmRlckJ0bjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWJvdXRTZWN0aW9uOyIsImltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51U2VjdGlvbigpIHtcclxuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xyXG5cclxuICAgIC8vIEFwcGVuZCBhbGwgbWVudSBzZWN0aW9ucyBhbmQgaGVhZGVycyAvL1xyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVBcHBzSGVhZGVyKCkpO1xyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVBcHBzRGl2KCkpO1xyXG5cclxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU3VzaGlIZWFkZXIoKSk7XHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZVN1c2hpRGl2KCkpO1xyXG5cclxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQmV2ZXJhZ2VzSGVhZGVyKCkpO1xyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVCZXZlcmFnZXNEaXYoKSk7XHJcblxyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVEZXNzZXJ0SGVhZGVyKCkpO1xyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVEZXNzZXJ0RGl2KCkpO1xyXG5cclxuICAgIHJldHVybiBtZW51RGl2O1xyXG59XHJcblxyXG4vLyBBcHBldGl6ZXJzIC8vXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBcHBzSGVhZGVyKCkge1xyXG4gICAgY29uc3QgYXBwc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBhcHBzSGVhZGVyLmFwcGVuZCgnQXBwZXRpemVycycpO1xyXG5cclxuICAgIHJldHVybiBhcHBzSGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBcHBzRGl2KCkge1xyXG4gICAgY29uc3QgYXBwc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYXBwc0Rpdi5jbGFzc0xpc3QuYWRkKCdhcHBldGl6ZXJzJyk7XHJcblxyXG4gICAgLy8gSXRlcmF0ZSB0aHJ1IGFsbCBpdGVtcyBpbiBhcHBldGl6ZXIgc2VjdGlvbiBhbmQgYXBwZW5kIHRvIGRpdiAvL1xyXG4gICAgZm9yIChsZXQgaXRlbSBpbiBtZW51LmFwcGV0aXplcnMpIHtcclxuICAgICAgICBhcHBzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvb2REaXYoJ2FwcGV0aXplcnMnLCBpdGVtKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXBwc0RpdjtcclxufVxyXG5cclxuLy8gU3VzaGkgLy9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN1c2hpSGVhZGVyKCkge1xyXG4gICAgY29uc3Qgc3VzaGlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgc3VzaGlIZWFkZXIuYXBwZW5kKCdTdXNoaSBSb2xscycpO1xyXG5cclxuICAgIHJldHVybiBzdXNoaUhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3VzaGlEaXYoKSB7XHJcbiAgICBjb25zdCBzdXNoaURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3VzaGlEaXYuY2xhc3NMaXN0LmFkZCgnc3VzaGknKTtcclxuXHJcbiAgICBmb3IgKGxldCBpdGVtIGluIG1lbnUuc3VzaGkpIHtcclxuICAgICAgICBzdXNoaURpdi5hcHBlbmRDaGlsZChjcmVhdGVGb29kRGl2KCdzdXNoaScsIGl0ZW0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdXNoaURpdjtcclxufVxyXG5cclxuLy8gQmV2ZXJhZ2VzIC8vXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCZXZlcmFnZXNIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBiZXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgYmV2SGVhZGVyLmFwcGVuZCgnQmV2ZXJhZ2VzJyk7XHJcblxyXG4gICAgcmV0dXJuIGJldkhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQmV2ZXJhZ2VzRGl2KCkge1xyXG4gICAgY29uc3QgYmV2RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiZXZEaXYuY2xhc3NMaXN0LmFkZCgnYmV2ZXJhZ2VzJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaXRlbSBpbiBtZW51LmJldmVyYWdlcykge1xyXG4gICAgICAgIGJldkRpdi5hcHBlbmRDaGlsZChjcmVhdGVGb29kRGl2KCdiZXZlcmFnZXMnLCBpdGVtKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYmV2RGl2O1xyXG59XHJcblxyXG4vLyBEZXNzZXJ0IC8vXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEZXNzZXJ0SGVhZGVyKCkge1xyXG4gICAgY29uc3QgZGVzc2VydEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBkZXNzZXJ0SGVhZGVyLmFwcGVuZCgnRGVzc2VydCcpO1xyXG5cclxuICAgIHJldHVybiBkZXNzZXJ0SGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEZXNzZXJ0RGl2KCkge1xyXG4gICAgY29uc3QgZGVzc2VydERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVzc2VydERpdi5jbGFzc0xpc3QuYWRkKCdkZXNzZXJ0Jyk7XHJcblxyXG4gICAgZm9yIChsZXQgaXRlbSBpbiBtZW51LmRlc3NlcnQpIHtcclxuICAgICAgICBkZXNzZXJ0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvb2REaXYoJ2Rlc3NlcnQnLCBpdGVtKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVzc2VydERpdjtcclxufVxyXG5cclxuLy8gRm9vZERpdiBmdW5jIGFuZCBhbGwgdW5kZXJseWluZyBmdW5jIHVzZWQgZm9yIGFwcHMsIHN1c2hpLCBiZXZlcmFnZXMsIGFuZCBkZXNlcnQgc2VjdGlvbnMgLy9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb2REaXYoY291cnNlLCBmb29kKSB7XHJcbiAgICBjb25zdCBmb29kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb29kRGl2LmNsYXNzTGlzdC5hZGQoYCR7Zm9vZH1gKTtcclxuXHJcbiAgICBmb29kRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvb2RJbmZvKGNvdXJzZSwgZm9vZCkpO1xyXG4gICAgZm9vZERpdi5hcHBlbmRDaGlsZChjcmVhdGVGb29kRGVzY3JpcHRpb24oY291cnNlLCBmb29kKSk7XHJcblxyXG4gICAgcmV0dXJuIGZvb2REaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb2RJbmZvKGNvdXJzZSwgZm9vZCkge1xyXG4gICAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XHJcblxyXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVGb29kSW1nKGZvb2QpKTtcclxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTmFtZVByaWNlRGl2KGNvdXJzZSwgZm9vZCkpO1xyXG5cclxuICAgIHJldHVybiBpbmZvRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb29kSW1nKGZvb2QpIHtcclxuICAgIGNvbnN0IGZvb2RJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGZvb2RJbWcuc3JjID0gYC4uL2RvY3MvaW1hZ2VzL21lbnUtaW1hZ2VzLyR7Zm9vZH0uanBnYDtcclxuICAgIGZvb2RJbWcuYWx0ID0gYCR7Zm9vZH1gO1xyXG4gICAgZm9vZEltZy5zZXRBdHRyaWJ1dGUoJ2lkJywgYCR7Zm9vZH1gKTtcclxuXHJcbiAgICByZXR1cm4gZm9vZEltZztcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmFtZVByaWNlRGl2KGNvdXJzZSwgZm9vZCkge1xyXG4gICAgY29uc3QgbmFtZVByaWNlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuYW1lUHJpY2VEaXYuY2xhc3NMaXN0LmFkZCgnbmFtZS1wcmljZScpO1xyXG5cclxuICAgIGNvbnN0IGZvb2ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGZvb2ROYW1lLmFwcGVuZChtZW51W2NvdXJzZV1bZm9vZF0ubmFtZSk7XHJcbiAgICBuYW1lUHJpY2VEaXYuYXBwZW5kQ2hpbGQoZm9vZE5hbWUpO1xyXG5cclxuICAgIGNvbnN0IGZvb2RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBjb25zdCBjb3N0ID0gbWVudVtjb3Vyc2VdW2Zvb2RdLnByaWNlXHJcbiAgICBmb29kUHJpY2UuYXBwZW5kKGAkICR7Y29zdC50b0ZpeGVkKDIpfWApO1xyXG4gICAgbmFtZVByaWNlRGl2LmFwcGVuZENoaWxkKGZvb2RQcmljZSk7XHJcblxyXG4gICAgcmV0dXJuIG5hbWVQcmljZURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9vZERlc2NyaXB0aW9uKGNvdXJzZSwgZm9vZCkge1xyXG4gICAgY29uc3QgZGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgZGVzY3JpcHRpb25QYXJhLmFwcGVuZChtZW51W2NvdXJzZV1bZm9vZF0uZGVzY3JpcHRpb24pO1xyXG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QYXJhKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uRGl2O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51U2VjdGlvbjsiLCIvLyBDbGFzcyBmb3IgbWVudSBpdGVtcyAvL1xyXG5jbGFzcyBNZW51SXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBhcHBldGl6ZXJzID0ge1xyXG4gICAgcmljZTogbmV3IE1lbnVJdGVtKCdSaWNlJywgMy41MCwgJ1N0ZWFtaW5nIGhvdCBib3dsIG9mIHdoaXRlIEphc21pbmUgcmljZScpLFxyXG4gICAgc2h1bWFpOiBuZXcgTWVudUl0ZW0oJ1NodW1haScsIDMuOTksICdTdGVhbWVkIHNocmltcCBkdW1wbGluZ3MnKSxcclxuICAgIGVkYW1hbWU6IG5ldyBNZW51SXRlbSgnRWRhbWFtZScsIDIuOTksICdTdGVhbWVkIHNveWJlYW4gd2l0aCBzZWEgc2FsdCcpLFxyXG4gICAgc2FsYWQ6IG5ldyBNZW51SXRlbSgnSG91c2UgU2FsYWQnLCAzLjk5LCAnUm9tYWluZSBsZXR0dWNlLCBjYXJyb3QsIHRvbWF0bywgY3VjdW1iZXIgd2l0aCBnaW5nZXIgZHJlc3NpbmcnKSwgXHJcbn07XHJcblxyXG5jb25zdCBzdXNoaSA9IHtcclxuICAgIHZlZ2FzOiBuZXcgTWVudUl0ZW0oJ0xhcyBWZWdhcycsIDkuOTksICdDcmFiIG1lYXQsIGN1Y3VtYmVyLCBhdm9jYWRvLCBzaHJlZGRlZCBjcmFiIHN0aWNrLCBzcGljeSBtYXlvLCBzd2VldCBjcnVuY2gnKSxcclxuICAgIGR5bmFtaXRlOiBuZXcgTWVudUl0ZW0oJ0R5bmFtaXRlIChCYWtlZCknLCAxMC45OSwgJ0NyYWIgbWVhdCwgY3VjdW1iZXIsIGF2b2NhZG8sIHdoaXRlIGZpc2gsIGNyYWIsIHNocmltcCB3aXRoIHNwaWN5IG1heW8sIHN3ZWV0JyksXHJcbiAgICB2ZWdnaWU6IG5ldyBNZW51SXRlbSgnVmVnZ2llIFJvbGwnLCA4Ljk5LCAnQ3VjdW1iZXIsIGxldHR1Y2UsIHRvbWF0bywgc2xpY2UgYXZvY2Fkbywgc3BpY3kgbWF5bywgd2hpdGUgY3J1bmNoJyksXHJcbiAgICBpbXBlcmlhbDogbmV3IE1lbnVJdGVtKCdJbXBlcmlhbCBSb2xsJywgMTMuOTksICdTcGljeSB0dW5hLCBzaHJpbXAgdGVtcHVyYSwgY3JlYW0gY2hlZXNlLCBhdm9jYWRvLCBzYWxtb24sIGNyYWIgbWVhdCB3aXRoIHNwaWN5IG1heW8sIHN3ZWV0JyksXHJcbn07XHJcblxyXG5jb25zdCBiZXZlcmFnZXMgPSB7XHJcbiAgICB0ZWE6IG5ldyBNZW51SXRlbSgnSG90IFRlYScsIDIuNTAsICdHcmVlbiwgQmxhY2ssIEphc21pbmUsIENoYW1vbWlsZScpLFxyXG4gICAgc29kYTogbmV3IE1lbnVJdGVtKCdGb3VudGFpbiBEcmlua3MnLCAyLjk5LCAnUGVwc2ksIE10LiBEZXcsIExlbW9uYWRlLCBSb290IEJlZXIsIEljZWQgVGVhLCBEci4gUGVwcGVyJyksXHJcbiAgICBiZWVyOiBuZXcgTWVudUl0ZW0oJ0JlZXInLCAzLjUwLCAnU2FwcG9ybywgS2lyaW4sIEJsdWUgTW9vbiwgQ29yb25hJyksXHJcbiAgICBzYWtlOiBuZXcgTWVudUl0ZW0oJ1Nha2UnLCA4LjAwLCAnU2hpcm8gc2FzYSwgbmlnb3JpLCBwZWFjaCBzcGFya2xpbmcsIHBpbmVhcHBsZSBzcGFya2xpbmcsIHl1enUgc3BhcmtsaW5nJyksXHJcbn07XHJcblxyXG5jb25zdCBkZXNzZXJ0ID0ge1xyXG4gICAgaWNlQ3JlYW06IG5ldyBNZW51SXRlbSgnSWNlIENyZWFtJywgNS45OSwgJ1ZhbmlsbGEsIENob2NvbGF0ZSwgU3RyYXdiZXJyeSwgTWludCwgQ29va2llcyBuXFwnIENyZW1lJyksXHJcbiAgICBtb2NoaTogbmV3IE1lbnVJdGVtKCdNb2NoaSBJY2UgQ3JlYW0nLCA2Ljk5LCAnVmFuaWxsYSwgQ2hvY29sYXRlLCBTdHJhd2JlcnJ5LCBHcmVlbiBUZWEnKSxcclxufTtcclxuXHJcbmNvbnN0IG1lbnUgPSB7YXBwZXRpemVycywgc3VzaGksIGJldmVyYWdlcywgZGVzc2VydH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51OyIsImltcG9ydCBjcmVhdGVBYm91dFNlY3Rpb24gZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IGNyZWF0ZU1lbnVTZWN0aW9uIGZyb20gJy4vbWVudS1yZW5kZXInO1xyXG5pbXBvcnQgY3JlYXRlQ29udGFjdFNlY3Rpb24gZnJvbSAnLi9jb250YWN0JztcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRlbXBsYXRlKHBhZ2UpIHtcclxuICAgIC8vIFJlbW92ZSBhbGwgY2hpbGQgbm9kZXMgZnJvbSBib2R5IC8vXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgd2hpbGUgKGJvZHkuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRlbXBsYXRlID0gY3JlYXRlQ29udGVudChwYWdlKTtcclxuXHJcbiAgICByZXR1cm4gdGVtcGxhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQocGFnZSkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcclxuXHJcbiAgICBjb25zdCBuYXZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5hdkRpdi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcclxuICAgIG5hdkRpdi5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XHJcblxyXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgYmFja2dyb3VuZC5zcmMgPSAnLi4vZG9jcy9pbWFnZXMvc3VzaGktcmVzdGF1cmFudC1iZy5qcGcnO1xyXG4gICAgYmFja2dyb3VuZC5hbHQgPSAnSmFwYW5lc2UgUmVzdGF1cmFudCBCYWNrZ3JvdW5kJztcclxuICAgIGJhY2tncm91bmQuc2V0QXR0cmlidXRlKCdpZCcsICdzdXNoaS1iZycpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2RGl2KTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZCk7XHJcblxyXG4gICAgLy8gTG9hZCBwYWdlIGJhc2VkIG9uIGFyZ3VtZW50IHBhc3NlZCBpblxyXG4gICAgaWYgKHBhZ2UgPT09IHVuZGVmaW5lZCB8fCBwYWdlID09PSAnSG9tZScpIHtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUFib3V0U2VjdGlvbigpKTtcclxuICAgIH0gZWxzZSBpZiAocGFnZSA9PT0gJ01lbnUnKSB7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVNZW51U2VjdGlvbigpKTtcclxuICAgIH0gZWxzZSBpZiAocGFnZSA9PT0gJ0NvbnRhY3QnKSB7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0U2VjdGlvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZVRhYnMoKSk7XHJcblxyXG4gICAgcmV0dXJuIG5hdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gICAgLy8gY3JlYXRlIGRpdiB0byBzYW5kd2ljaCBoZWFkZXJcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBzdXNoaSBpY29uIGltZ1xyXG4gICAgY29uc3Qgc3VzaGlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBzdXNoaUljb24uc3JjID0gJy4uL2RvY3MvaW1hZ2VzL3N1c2hpLWljb24ucG5nJztcclxuICAgIHN1c2hpSWNvbi5hbHQgPSAnU3VzaGkgUm9sbCc7XHJcbiAgICBzdXNoaUljb24uc2V0QXR0cmlidXRlKCdpZCcsICdzdXNoaS1pY29uJyk7XHJcblxyXG4gICAgLy8gY3JlYXRlIGgxIG5hbWUgb2YgcmVzdGF1cmFudFxyXG4gICAgY29uc3QgcmVzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgcmVzdE5hbWUuYXBwZW5kKCdTb25pYyBTdXNoaScpO1xyXG5cclxuICAgIC8vIEFwcGVuZCBlbGVtZW50cyB0byBoZWFkZXIgZGl2IGFuZCByZXR1cm5cclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzdXNoaUljb24pO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3ROYW1lKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYWJzKCkge1xyXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG4gICAgbGV0IHRhYnMgPSBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J107XHJcbiAgICBmb3IgKGxldCB0YWIgb2YgdGFicykge1xyXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGluayh0YWIpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGlzdDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGluayhuYW1lKSB7XHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaWQnLCBuYW1lKTtcclxuICAgIGxpbmsuYXBwZW5kKG5hbWUpO1xyXG5cclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciBkZXBlbmRpbmcgb24gZWFjaCB0YWIgbmFtZSAvLyBcclxuICAgIGlmIChuYW1lID09PSAnSG9tZScpIHtcclxuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlclRlbXBsYXRlKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnTWVudScpIHtcclxuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlclRlbXBsYXRlKCdNZW51JykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnQ29udGFjdCcpIHtcclxuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlclRlbXBsYXRlKCdDb250YWN0JykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgcmV0dXJuIGxpc3RJdGVtO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJUZW1wbGF0ZTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9