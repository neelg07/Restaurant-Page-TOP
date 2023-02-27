"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["template"],{

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
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/modules/contact.js");



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
    if (page === undefined || page === 'Home') {
        content.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_0__["default"])());
    } else if (page === 'Contact') {
        content.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_1__["default"])());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHdEQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxvQkFBb0I7Ozs7Ozs7Ozs7Ozs7O0FDM0duQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdEUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRE87QUFDSztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpREFBa0I7QUFDOUMsTUFBTTtBQUNOLDRCQUE0QixvREFBb0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvY29udGFjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy90ZW1wbGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlRm9ybSBmcm9tICcuL2NvbnRhY3RGb3JtJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RTZWN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XHJcblxyXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0SDEoKSk7XHJcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxvY2F0aW9uKCkpO1xyXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjcmVhdGVUaW1lKCkpO1xyXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjcmVhdGVQaG9uZU51bSgpKTtcclxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRW1haWwoKSk7XHJcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvcm0oKSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhY3REaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RIMSgpIHtcclxuICAgIGNvbnN0IGNvbnRhY3RIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBjb250YWN0SDEuYXBwZW5kKCdDb250YWN0IFVzJyk7XHJcbiAgICByZXR1cm4gY29udGFjdEgxO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbigpIHtcclxuICAgIGNvbnN0IGxvY2F0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsb2NhdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xyXG5cclxuICAgIGNvbnN0IGxvY2F0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbG9jYXRpb25JY29uLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL2xvY2F0aW9uLXBpbi5wbmcnO1xyXG4gICAgbG9jYXRpb25JY29uLmFsdCA9ICdMb2NhdGlvbiBQaW4nO1xyXG4gICAgbG9jYXRpb25JY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9jYXRpb24tcGluJyk7XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgbG9jYXRpb24uYXBwZW5kKCcxMjM0IE1hZGUtVXAgU3QsIFNvbWVDaXR5LCBOSiAxMjM0NScpO1xyXG5cclxuICAgIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uSWNvbik7XHJcbiAgICBsb2NhdGlvbkRpdi5hcHBlbmRDaGlsZChsb2NhdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIGxvY2F0aW9uRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUaW1lKCkge1xyXG4gICAgY29uc3QgdGltZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGltZURpdi5jbGFzc0xpc3QuYWRkKCd0aW1lJyk7XHJcblxyXG4gICAgY29uc3QgdGltZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHRpbWVJY29uLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3RpbWUucG5nJztcclxuICAgIHRpbWVJY29uLmFsdCA9ICdjbG9jay1pY29uJztcclxuICAgIHRpbWVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvY2staWNvbicpO1xyXG5cclxuICAgIHRpbWVEaXYuYXBwZW5kQ2hpbGQodGltZUljb24pO1xyXG4gICAgdGltZURpdi5hcHBlbmRDaGlsZChjcmVhdGVIb3VycygpKTtcclxuXHJcbiAgICByZXR1cm4gdGltZURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSG91cnMoKSB7XHJcbiAgICBjb25zdCBob3Vyc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaG91cnNEaXYuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcclxuXHJcbiAgICBjb25zdCB3ZWVrZGF5SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgd2Vla2RheUhvdXJzLmFwcGVuZCgnTW9uZGF5IC0gVGh1cnNkYXk6IDhhbSAtIDhwbScpO1xyXG5cclxuICAgIGNvbnN0IHdlZWtlbmRIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB3ZWVrZW5kSG91cnMuYXBwZW5kKCdGcmlkYXkgLSBTdW5kYXk6IDhhbSAtIDExcG0nKTtcclxuXHJcbiAgICBob3Vyc0Rpdi5hcHBlbmRDaGlsZCh3ZWVrZGF5SG91cnMpO1xyXG4gICAgaG91cnNEaXYuYXBwZW5kQ2hpbGQod2Vla2VuZEhvdXJzKTtcclxuXHJcbiAgICByZXR1cm4gaG91cnNEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBob25lTnVtKCkge1xyXG4gICAgY29uc3QgcGhvbmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBob25lRGl2LmNsYXNzTGlzdC5hZGQoJ3RlbGVwaG9uZScpO1xyXG5cclxuICAgIGNvbnN0IHBob25lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgcGhvbmVJY29uLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL2NhbGwucG5nJztcclxuICAgIHBob25lSWNvbi5hbHQgPSAncGhvbmUtaWNvbic7XHJcbiAgICBwaG9uZUljb24uc2V0QXR0cmlidXRlKCdpZCcsICdwaG9uZS1pY29uJyk7XHJcblxyXG4gICAgY29uc3QgcGhvbmVOdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgcGhvbmVOdW0uYXBwZW5kKCcoMTIzKS00NTYtNzg5MCcpO1xyXG5cclxuICAgIHBob25lRGl2LmFwcGVuZENoaWxkKHBob25lSWNvbik7XHJcbiAgICBwaG9uZURpdi5hcHBlbmRDaGlsZChwaG9uZU51bSk7XHJcblxyXG4gICAgcmV0dXJuIHBob25lRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbWFpbCgpIHtcclxuICAgIGNvbnN0IGVtYWlsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbWFpbERpdi5jbGFzc0xpc3QuYWRkKCdlbWFpbCcpO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZW1haWxJY29uLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL2VtYWlsLnBuZyc7XHJcbiAgICBlbWFpbEljb24uYWx0ID0gJ2VtYWlsLWljb24nO1xyXG4gICAgZW1haWxJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZW1haWwtaWNvbicpO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBlbWFpbEFkZHJlc3MuYXBwZW5kKCdmYWtlbWFpbEBub3RyZWFsLmNvbScpO1xyXG5cclxuICAgIGVtYWlsRGl2LmFwcGVuZENoaWxkKGVtYWlsSWNvbik7XHJcbiAgICBlbWFpbERpdi5hcHBlbmRDaGlsZChlbWFpbEFkZHJlc3MpO1xyXG5cclxuICAgIHJldHVybiBlbWFpbERpdjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdFNlY3Rpb247IiwiZnVuY3Rpb24gY3JlYXRlRm9ybSgpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblxyXG4gICAgY29uc3QgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBmb3JtSGVhZGVyLmFwcGVuZCgnTWVzc2FnZSBVcycpO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUhlYWRlcik7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZU5hbWVEaXYoKSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUVtYWlsRGl2KCkpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0QXJlYSgpKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybUJ1dHRvbigpKTtcclxuXHJcbiAgICByZXR1cm4gZm9ybTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmFtZURpdigpIHtcclxuICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5hbWVEaXYuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xyXG5cclxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xyXG4gICAgbmFtZUxhYmVsLmFwcGVuZCgnRnVsbCBOYW1lOicpO1xyXG5cclxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcclxuXHJcbiAgICBuYW1lRGl2LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgICBuYW1lRGl2LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XHJcblxyXG4gICAgcmV0dXJuIG5hbWVEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVtYWlsRGl2KCkge1xyXG4gICAgY29uc3QgZW1haWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVtYWlsRGl2LmNsYXNzTGlzdC5hZGQoJ3VzZXItZW1haWwnKTtcclxuXHJcbiAgICBjb25zdCBlbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGVtYWlsTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndXNlci1lbWFpbCcpO1xyXG4gICAgZW1haWxMYWJlbC5hcHBlbmQoJ0VtYWlsOicpO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKTtcclxuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd1c2VyLWVtYWlsJyk7XHJcblxyXG4gICAgZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxMYWJlbCk7XHJcbiAgICBlbWFpbERpdi5hcHBlbmRDaGlsZChlbWFpbElucHV0KTtcclxuXHJcbiAgICByZXR1cm4gZW1haWxEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRleHRBcmVhKCkge1xyXG4gICAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywgJ21lc3NhZ2UnKTtcclxuICAgIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZScpO1xyXG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdjb2xzJywgJzMwJyk7XHJcbiAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMTAnKTtcclxuICAgIHRleHRBcmVhLmFwcGVuZCgnVHlwZSB5b3VyIG1lc3NhZ2UuLi4nKTtcclxuXHJcbiAgICByZXR1cm4gdGV4dEFyZWE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvcm1CdXR0b24oKSB7XHJcbiAgICBjb25zdCBmb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBmb3JtQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdyZXNldCcpO1xyXG4gICAgZm9ybUJ1dHRvbi5hcHBlbmQoJ1N1Ym1pdCcpO1xyXG5cclxuICAgIHJldHVybiBmb3JtQnV0dG9uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb3JtO1xyXG4iLCJmdW5jdGlvbiBjcmVhdGVBYm91dFNlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWJvdXREaXYuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcclxuXHJcbiAgICBhYm91dERpdi5hcHBlbmRDaGlsZChjcmVhdGVBYm91dEgxKCkpO1xyXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQ2hlZkltZygpKTtcclxuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUFib3V0UGFyYSgpKTtcclxuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUFib3V0SDIoKSk7XHJcbiAgICBhYm91dERpdi5hcHBlbmRDaGlsZChjcmVhdGVPcmRlckJ0bigpKTtcclxuXHJcbiAgICByZXR1cm4gYWJvdXREaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFib3V0SDEoKSB7XHJcbiAgICBjb25zdCBhYm91dEgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGFib3V0SDEuYXBwZW5kKCdXZWxjb21lICEhIScpO1xyXG4gICAgcmV0dXJuIGFib3V0SDE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNoZWZJbWcoKSB7XHJcbiAgICBjb25zdCBzdXNoaUNoZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHN1c2hpQ2hlZi5zcmMgPSAnLi4vc3JjL2ltYWdlcy9UYW5vc2hpaS1zdXNoaS1jaGVmLmpwZyc7XHJcbiAgICBzdXNoaUNoZWYuYWx0ID0gJ1N1c2hpIENoZWYnO1xyXG4gICAgc3VzaGlDaGVmLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VzaGktY2hlZicpO1xyXG4gICAgcmV0dXJuIHN1c2hpQ2hlZjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWJvdXRQYXJhKCkge1xyXG4gICAgY29uc3QgYWJvdXRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgYWJvdXRQYXJhLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXR4dCcpO1xyXG4gICAgYWJvdXRQYXJhLmFwcGVuZCgnSGFuZC1DcmFmdGVkIFN1c2hpIHdpdGggZnJlc2hseSBwaWNrZWQsIG9yZ2FuaWMgaW5ncmVkaWVudHMhJyk7XHJcbiAgICByZXR1cm4gYWJvdXRQYXJhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBYm91dEgyKCkge1xyXG4gICAgY29uc3QgYWJvdXRIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBhYm91dEgyLmFwcGVuZCgnRXN0LiAyMDIzJyk7XHJcbiAgICByZXR1cm4gYWJvdXRIMjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlT3JkZXJCdG4oKSB7XHJcbiAgICBjb25zdCBvcmRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgb3JkZXJCdG4udHlwZSA9ICdidXR0b24nO1xyXG4gICAgb3JkZXJCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdvcmRlci1idG4nKTtcclxuICAgIG9yZGVyQnRuLmFwcGVuZCgnT3JkZXIgTm93Jyk7XHJcbiAgICByZXR1cm4gb3JkZXJCdG47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUFib3V0U2VjdGlvbjsiLCJpbXBvcnQgY3JlYXRlQWJvdXRTZWN0aW9uIGZyb20gJy4vaG9tZSc7XHJcbmltcG9ydCBjcmVhdGVDb250YWN0U2VjdGlvbiBmcm9tICcuL2NvbnRhY3QnO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyVGVtcGxhdGUocGFnZSkge1xyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBjcmVhdGVDb250ZW50KHBhZ2UpO1xyXG5cclxuICAgIHJldHVybiB0ZW1wbGF0ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGVudChwYWdlKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IG5hdkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmF2RGl2LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xyXG4gICAgbmF2RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcclxuXHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3N1c2hpLXJlc3RhdXJhbnQtYmcuanBnJztcclxuICAgIGJhY2tncm91bmQuYWx0ID0gJ0phcGFuZXNlIFJlc3RhdXJhbnQgQmFja2dyb3VuZCc7XHJcbiAgICBiYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VzaGktYmcnKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkRpdik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xyXG5cclxuICAgIC8vIExvYWQgcGFnZSBiYXNlZCBvbiBhcmd1bWVudCBwYXNzZWQgaW5cclxuICAgIGlmIChwYWdlID09PSB1bmRlZmluZWQgfHwgcGFnZSA9PT0gJ0hvbWUnKSB7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVBYm91dFNlY3Rpb24oKSk7XHJcbiAgICB9IGVsc2UgaWYgKHBhZ2UgPT09ICdDb250YWN0Jykge1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdFNlY3Rpb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChjcmVhdGVUYWJzKCkpO1xyXG5cclxuICAgIHJldHVybiBuYXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICAgIC8vIGNyZWF0ZSBkaXYgdG8gc2FuZHdpY2ggaGVhZGVyXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgc3VzaGkgaWNvbiBpbWdcclxuICAgIGNvbnN0IHN1c2hpSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgc3VzaGlJY29uLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3N1c2hpLWljb24ucG5nJztcclxuICAgIHN1c2hpSWNvbi5hbHQgPSAnU3VzaGkgUm9sbCc7XHJcbiAgICBzdXNoaUljb24uc2V0QXR0cmlidXRlKCdpZCcsICdzdXNoaS1pY29uJyk7XHJcblxyXG4gICAgLy8gY3JlYXRlIGgxIG5hbWUgb2YgcmVzdGF1cmFudFxyXG4gICAgY29uc3QgcmVzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgcmVzdE5hbWUuYXBwZW5kKCdTb25pYyBTdXNoaScpO1xyXG5cclxuICAgIC8vIEFwcGVuZCBlbGVtZW50cyB0byBoZWFkZXIgZGl2IGFuZCByZXR1cm5cclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzdXNoaUljb24pO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3ROYW1lKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYWJzKCkge1xyXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG4gICAgbGV0IHRhYnMgPSBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J107XHJcbiAgICBmb3IgKGxldCB0YWIgb2YgdGFicykge1xyXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGluayh0YWIpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGlzdDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGluayhuYW1lKSB7XHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICAvLyBBZGQgaHJlZiBhdHRyLiAoY2hhbmdlIGxhdGVyKVxyXG4gICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGxpbmsuaHJlZiA9ICcjJztcclxuICAgIGxpbmsuc2V0QXR0cmlidXRlKCdpZCcsIG5hbWUpO1xyXG4gICAgbGluay5hcHBlbmQobmFtZSk7XHJcblxyXG4gICAgbGlzdEl0ZW0uYXBwZW5kQ2hpbGQobGluayk7XHJcbiAgICByZXR1cm4gbGlzdEl0ZW07XHJcbn1cclxuXHJcbi8vIExpbmsgaW1wb3J0ZWQgZnVuY3Rpb25zIHRvIGVhY2ggbWVudSB0YWIgLy9cclxuY29uc3QgaG9tZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdIb21lJyk7XHJcbmNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnTWVudScpO1xyXG5jb25zdCBjb250YWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0NvbnRhY3QnKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJlbmRlclRlbXBsYXRlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==