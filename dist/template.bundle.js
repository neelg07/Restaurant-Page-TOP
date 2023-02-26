"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["template"],{

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


function renderTemplate(page) {
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
    if (page === undefined) {
        content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
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
    // Add href attr. (change later)
    const link = document.createElement('a');
    link.href = '#';
    link.setAttribute('id', name);
    link.append(name);

    listItem.appendChild(link);
    return listItem;
}

// Link imported functions to each menu tab //
const home = document.getElementById('Home');
const menu = document.getElementById('Menu');
const contact = document.getElementById('Contact');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderTemplate);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/template.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7OztBQ2hETztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpREFBa0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvdGVtcGxhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQWJvdXRTZWN0aW9uKCkge1xyXG4gICAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFib3V0RGl2LmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XHJcblxyXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXRIMSgpKTtcclxuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUNoZWZJbWcoKSk7XHJcbiAgICBhYm91dERpdi5hcHBlbmRDaGlsZChjcmVhdGVBYm91dFBhcmEoKSk7XHJcbiAgICBhYm91dERpdi5hcHBlbmRDaGlsZChjcmVhdGVBYm91dEgyKCkpO1xyXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlT3JkZXJCdG4oKSk7XHJcblxyXG4gICAgcmV0dXJuIGFib3V0RGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBYm91dEgxKCkge1xyXG4gICAgY29uc3QgYWJvdXRIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBhYm91dEgxLmFwcGVuZCgnV2VsY29tZSAhISEnKTtcclxuICAgIHJldHVybiBhYm91dEgxO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDaGVmSW1nKCkge1xyXG4gICAgY29uc3Qgc3VzaGlDaGVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBzdXNoaUNoZWYuc3JjID0gJy4uL3NyYy9pbWFnZXMvVGFub3NoaWktc3VzaGktY2hlZi5qcGcnO1xyXG4gICAgc3VzaGlDaGVmLmFsdCA9ICdTdXNoaSBDaGVmJztcclxuICAgIHN1c2hpQ2hlZi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1c2hpLWNoZWYnKTtcclxuICAgIHJldHVybiBzdXNoaUNoZWY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFib3V0UGFyYSgpIHtcclxuICAgIGNvbnN0IGFib3V0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGFib3V0UGFyYS5jbGFzc0xpc3QuYWRkKCdhYm91dC10eHQnKTtcclxuICAgIGFib3V0UGFyYS5hcHBlbmQoJ0hhbmQtQ3JhZnRlZCBTdXNoaSB3aXRoIGZyZXNobHkgcGlja2VkLCBvcmdhbmljIGluZ3JlZGllbnRzIScpO1xyXG4gICAgcmV0dXJuIGFib3V0UGFyYTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWJvdXRIMigpIHtcclxuICAgIGNvbnN0IGFib3V0SDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgYWJvdXRIMi5hcHBlbmQoJ0VzdC4gMjAyMycpO1xyXG4gICAgcmV0dXJuIGFib3V0SDI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU9yZGVyQnRuKCkge1xyXG4gICAgY29uc3Qgb3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG9yZGVyQnRuLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIG9yZGVyQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnb3JkZXItYnRuJyk7XHJcbiAgICBvcmRlckJ0bi5hcHBlbmQoJ09yZGVyIE5vdycpO1xyXG4gICAgcmV0dXJuIG9yZGVyQnRuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBYm91dFNlY3Rpb247IiwiaW1wb3J0IGNyZWF0ZUFib3V0U2VjdGlvbiBmcm9tICcuL2hvbWUnO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyVGVtcGxhdGUocGFnZSkge1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBjcmVhdGVDb250ZW50KHBhZ2UpO1xyXG5cclxuICAgIHJldHVybiB0ZW1wbGF0ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGVudChwYWdlKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IG5hdkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmF2RGl2LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xyXG4gICAgbmF2RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcclxuXHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3N1c2hpLXJlc3RhdXJhbnQtYmcuanBnJztcclxuICAgIGJhY2tncm91bmQuYWx0ID0gJ0phcGFuZXNlIFJlc3RhdXJhbnQgQmFja2dyb3VuZCc7XHJcbiAgICBiYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VzaGktYmcnKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkRpdik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xyXG5cclxuICAgIC8vIExvYWQgcGFnZSBiYXNlZCBvbiBhcmd1bWVudCBwYXNzZWQgaW5cclxuICAgIGlmIChwYWdlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUFib3V0U2VjdGlvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZVRhYnMoKSk7XHJcblxyXG4gICAgcmV0dXJuIG5hdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gICAgLy8gY3JlYXRlIGRpdiB0byBzYW5kd2ljaCBoZWFkZXJcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBzdXNoaSBpY29uIGltZ1xyXG4gICAgY29uc3Qgc3VzaGlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBzdXNoaUljb24uc3JjID0gJy4uL3NyYy9pbWFnZXMvc3VzaGktaWNvbi5wbmcnO1xyXG4gICAgc3VzaGlJY29uLmFsdCA9ICdTdXNoaSBSb2xsJztcclxuICAgIHN1c2hpSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1c2hpLWljb24nKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgaDEgbmFtZSBvZiByZXN0YXVyYW50XHJcbiAgICBjb25zdCByZXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICByZXN0TmFtZS5hcHBlbmQoJ1NvbmljIFN1c2hpJyk7XHJcblxyXG4gICAgLy8gQXBwZW5kIGVsZW1lbnRzIHRvIGhlYWRlciBkaXYgYW5kIHJldHVyblxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHN1c2hpSWNvbik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdE5hbWUpO1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhYnMoKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgICBsZXQgdGFicyA9IFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXTtcclxuICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKSB7XHJcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaW5rKHRhYikpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaXN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rKG5hbWUpIHtcclxuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIC8vIEFkZCBocmVmIGF0dHIuIChjaGFuZ2UgbGF0ZXIpXHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbGluay5ocmVmID0gJyMnO1xyXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZSk7XHJcbiAgICBsaW5rLmFwcGVuZChuYW1lKTtcclxuXHJcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgIHJldHVybiBsaXN0SXRlbTtcclxufVxyXG5cclxuLy8gTGluayBpbXBvcnRlZCBmdW5jdGlvbnMgdG8gZWFjaCBtZW51IHRhYiAvL1xyXG5jb25zdCBob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0hvbWUnKTtcclxuY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdNZW51Jyk7XHJcbmNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ29udGFjdCcpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyVGVtcGxhdGU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9