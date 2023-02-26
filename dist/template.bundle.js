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


function renderTemplate() {
    const template = createContent();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7OztBQ2hETztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpREFBa0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvdGVtcGxhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY3JlYXRlQWJvdXRTZWN0aW9uKCkge1xyXG4gICAgY29uc3QgYWJvdXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGFib3V0RGl2LmNsYXNzTGlzdC5hZGQoJ2Fib3V0Jyk7XHJcblxyXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXRIMSgpKTtcclxuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUNoZWZJbWcoKSk7XHJcbiAgICBhYm91dERpdi5hcHBlbmRDaGlsZChjcmVhdGVBYm91dFBhcmEoKSk7XHJcbiAgICBhYm91dERpdi5hcHBlbmRDaGlsZChjcmVhdGVBYm91dEgyKCkpO1xyXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlT3JkZXJCdG4oKSk7XHJcblxyXG4gICAgcmV0dXJuIGFib3V0RGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBYm91dEgxKCkge1xyXG4gICAgY29uc3QgYWJvdXRIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBhYm91dEgxLmFwcGVuZCgnV2VsY29tZSAhISEnKTtcclxuICAgIHJldHVybiBhYm91dEgxO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDaGVmSW1nKCkge1xyXG4gICAgY29uc3Qgc3VzaGlDaGVmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBzdXNoaUNoZWYuc3JjID0gJy4uL3NyYy9pbWFnZXMvVGFub3NoaWktc3VzaGktY2hlZi5qcGcnO1xyXG4gICAgc3VzaGlDaGVmLmFsdCA9ICdTdXNoaSBDaGVmJztcclxuICAgIHN1c2hpQ2hlZi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1c2hpLWNoZWYnKTtcclxuICAgIHJldHVybiBzdXNoaUNoZWY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFib3V0UGFyYSgpIHtcclxuICAgIGNvbnN0IGFib3V0UGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGFib3V0UGFyYS5jbGFzc0xpc3QuYWRkKCdhYm91dC10eHQnKTtcclxuICAgIGFib3V0UGFyYS5hcHBlbmQoJ0hhbmQtQ3JhZnRlZCBTdXNoaSB3aXRoIGZyZXNobHkgcGlja2VkLCBvcmdhbmljIGluZ3JlZGllbnRzIScpO1xyXG4gICAgcmV0dXJuIGFib3V0UGFyYTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWJvdXRIMigpIHtcclxuICAgIGNvbnN0IGFib3V0SDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgYWJvdXRIMi5hcHBlbmQoJ0VzdC4gMjAyMycpO1xyXG4gICAgcmV0dXJuIGFib3V0SDI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU9yZGVyQnRuKCkge1xyXG4gICAgY29uc3Qgb3JkZXJCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIG9yZGVyQnRuLnR5cGUgPSAnYnV0dG9uJztcclxuICAgIG9yZGVyQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnb3JkZXItYnRuJyk7XHJcbiAgICBvcmRlckJ0bi5hcHBlbmQoJ09yZGVyIE5vdycpO1xyXG4gICAgcmV0dXJuIG9yZGVyQnRuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBYm91dFNlY3Rpb247IiwiaW1wb3J0IGNyZWF0ZUFib3V0U2VjdGlvbiBmcm9tICcuL2hvbWUnO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyVGVtcGxhdGUoKSB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGNyZWF0ZUNvbnRlbnQoKTtcclxuXHJcbiAgICByZXR1cm4gdGVtcGxhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQocGFnZSkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcclxuXHJcbiAgICBjb25zdCBuYXZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5hdkRpdi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcclxuICAgIG5hdkRpdi5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XHJcblxyXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgYmFja2dyb3VuZC5zcmMgPSAnLi4vc3JjL2ltYWdlcy9zdXNoaS1yZXN0YXVyYW50LWJnLmpwZyc7XHJcbiAgICBiYWNrZ3JvdW5kLmFsdCA9ICdKYXBhbmVzZSBSZXN0YXVyYW50IEJhY2tncm91bmQnO1xyXG4gICAgYmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1c2hpLWJnJyk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZEaXYpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcclxuXHJcbiAgICAvLyBMb2FkIHBhZ2UgYmFzZWQgb24gYXJndW1lbnQgcGFzc2VkIGluXHJcbiAgICBpZiAocGFnZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVBYm91dFNlY3Rpb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChjcmVhdGVUYWJzKCkpO1xyXG5cclxuICAgIHJldHVybiBuYXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICAgIC8vIGNyZWF0ZSBkaXYgdG8gc2FuZHdpY2ggaGVhZGVyXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgc3VzaGkgaWNvbiBpbWdcclxuICAgIGNvbnN0IHN1c2hpSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgc3VzaGlJY29uLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3N1c2hpLWljb24ucG5nJztcclxuICAgIHN1c2hpSWNvbi5hbHQgPSAnU3VzaGkgUm9sbCc7XHJcbiAgICBzdXNoaUljb24uc2V0QXR0cmlidXRlKCdpZCcsICdzdXNoaS1pY29uJyk7XHJcblxyXG4gICAgLy8gY3JlYXRlIGgxIG5hbWUgb2YgcmVzdGF1cmFudFxyXG4gICAgY29uc3QgcmVzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgcmVzdE5hbWUuYXBwZW5kKCdTb25pYyBTdXNoaScpO1xyXG5cclxuICAgIC8vIEFwcGVuZCBlbGVtZW50cyB0byBoZWFkZXIgZGl2IGFuZCByZXR1cm5cclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzdXNoaUljb24pO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3ROYW1lKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYWJzKCkge1xyXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG4gICAgbGV0IHRhYnMgPSBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J107XHJcbiAgICBmb3IgKGxldCB0YWIgb2YgdGFicykge1xyXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGluayh0YWIpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGlzdDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGluayhuYW1lKSB7XHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAvLyBBZGQgaHJlZiBhdHRyLiAoY2hhbmdlIGxhdGVyKVxyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGxpbmsuaHJlZiA9ICcjJztcclxuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpO1xyXG4gICAgbGluay5hcHBlbmQobmFtZSk7XHJcblxyXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICByZXR1cm4gbGlzdEl0ZW07XHJcbn1cclxuXHJcbi8vIExpbmsgaW1wb3J0ZWQgZnVuY3Rpb25zIHRvIGVhY2ggbWVudSB0YWIgLy9cclxuY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdIb21lJyk7XHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTWVudScpO1xyXG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NvbnRhY3QnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlclRlbXBsYXRlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==