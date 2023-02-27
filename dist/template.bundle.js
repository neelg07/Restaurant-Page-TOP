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
    link.setAttribute('id', name);
    link.append(name);

    if (name === 'Home') {
        link.addEventListener('click', () => {
            document.body.appendChild(renderTemplate());
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/template.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHdEQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxvQkFBb0I7Ozs7Ozs7Ozs7Ozs7O0FDM0duQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdEUxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxrQkFBa0I7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRE87QUFDSztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaURBQWtCO0FBQzlDLE1BQU07QUFDTiw0QkFBNEIsb0RBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL3RlbXBsYXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjcmVhdGVGb3JtIGZyb20gJy4vY29udGFjdEZvcm0nO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdFNlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBjb250YWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWN0RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcclxuXHJcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RIMSgpKTtcclxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTG9jYXRpb24oKSk7XHJcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZVRpbWUoKSk7XHJcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZVBob25lTnVtKCkpO1xyXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjcmVhdGVFbWFpbCgpKTtcclxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybSgpKTtcclxuXHJcbiAgICByZXR1cm4gY29udGFjdERpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdEgxKCkge1xyXG4gICAgY29uc3QgY29udGFjdEgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGNvbnRhY3RIMS5hcHBlbmQoJ0NvbnRhY3QgVXMnKTtcclxuICAgIHJldHVybiBjb250YWN0SDE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKCkge1xyXG4gICAgY29uc3QgbG9jYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxvY2F0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uJyk7XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBsb2NhdGlvbkljb24uc3JjID0gJy4uL3NyYy9pbWFnZXMvbG9jYXRpb24tcGluLnBuZyc7XHJcbiAgICBsb2NhdGlvbkljb24uYWx0ID0gJ0xvY2F0aW9uIFBpbic7XHJcbiAgICBsb2NhdGlvbkljb24uc2V0QXR0cmlidXRlKCdpZCcsICdsb2NhdGlvbi1waW4nKTtcclxuXHJcbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBsb2NhdGlvbi5hcHBlbmQoJzEyMzQgTWFkZS1VcCBTdCwgU29tZUNpdHksIE5KIDEyMzQ1Jyk7XHJcblxyXG4gICAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQobG9jYXRpb25JY29uKTtcclxuICAgIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcclxuXHJcbiAgICByZXR1cm4gbG9jYXRpb25EaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRpbWUoKSB7XHJcbiAgICBjb25zdCB0aW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0aW1lRGl2LmNsYXNzTGlzdC5hZGQoJ3RpbWUnKTtcclxuXHJcbiAgICBjb25zdCB0aW1lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgdGltZUljb24uc3JjID0gJy4uL3NyYy9pbWFnZXMvdGltZS5wbmcnO1xyXG4gICAgdGltZUljb24uYWx0ID0gJ2Nsb2NrLWljb24nO1xyXG4gICAgdGltZUljb24uc2V0QXR0cmlidXRlKCdpZCcsICdjbG9jay1pY29uJyk7XHJcblxyXG4gICAgdGltZURpdi5hcHBlbmRDaGlsZCh0aW1lSWNvbik7XHJcbiAgICB0aW1lRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUhvdXJzKCkpO1xyXG5cclxuICAgIHJldHVybiB0aW1lRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb3VycygpIHtcclxuICAgIGNvbnN0IGhvdXJzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBob3Vyc0Rpdi5jbGFzc0xpc3QuYWRkKCdob3VycycpO1xyXG5cclxuICAgIGNvbnN0IHdlZWtkYXlIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB3ZWVrZGF5SG91cnMuYXBwZW5kKCdNb25kYXkgLSBUaHVyc2RheTogOGFtIC0gOHBtJyk7XHJcblxyXG4gICAgY29uc3Qgd2Vla2VuZEhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHdlZWtlbmRIb3Vycy5hcHBlbmQoJ0ZyaWRheSAtIFN1bmRheTogOGFtIC0gMTFwbScpO1xyXG5cclxuICAgIGhvdXJzRGl2LmFwcGVuZENoaWxkKHdlZWtkYXlIb3Vycyk7XHJcbiAgICBob3Vyc0Rpdi5hcHBlbmRDaGlsZCh3ZWVrZW5kSG91cnMpO1xyXG5cclxuICAgIHJldHVybiBob3Vyc0RpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGhvbmVOdW0oKSB7XHJcbiAgICBjb25zdCBwaG9uZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgcGhvbmVEaXYuY2xhc3NMaXN0LmFkZCgndGVsZXBob25lJyk7XHJcblxyXG4gICAgY29uc3QgcGhvbmVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBwaG9uZUljb24uc3JjID0gJy4uL3NyYy9pbWFnZXMvY2FsbC5wbmcnO1xyXG4gICAgcGhvbmVJY29uLmFsdCA9ICdwaG9uZS1pY29uJztcclxuICAgIHBob25lSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Bob25lLWljb24nKTtcclxuXHJcbiAgICBjb25zdCBwaG9uZU51bSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBwaG9uZU51bS5hcHBlbmQoJygxMjMpLTQ1Ni03ODkwJyk7XHJcblxyXG4gICAgcGhvbmVEaXYuYXBwZW5kQ2hpbGQocGhvbmVJY29uKTtcclxuICAgIHBob25lRGl2LmFwcGVuZENoaWxkKHBob25lTnVtKTtcclxuXHJcbiAgICByZXR1cm4gcGhvbmVEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVtYWlsKCkge1xyXG4gICAgY29uc3QgZW1haWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVtYWlsRGl2LmNsYXNzTGlzdC5hZGQoJ2VtYWlsJyk7XHJcblxyXG4gICAgY29uc3QgZW1haWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBlbWFpbEljb24uc3JjID0gJy4uL3NyYy9pbWFnZXMvZW1haWwucG5nJztcclxuICAgIGVtYWlsSWNvbi5hbHQgPSAnZW1haWwtaWNvbic7XHJcbiAgICBlbWFpbEljb24uc2V0QXR0cmlidXRlKCdpZCcsICdlbWFpbC1pY29uJyk7XHJcblxyXG4gICAgY29uc3QgZW1haWxBZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGVtYWlsQWRkcmVzcy5hcHBlbmQoJ2Zha2VtYWlsQG5vdHJlYWwuY29tJyk7XHJcblxyXG4gICAgZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxJY29uKTtcclxuICAgIGVtYWlsRGl2LmFwcGVuZENoaWxkKGVtYWlsQWRkcmVzcyk7XHJcblxyXG4gICAgcmV0dXJuIGVtYWlsRGl2O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0U2VjdGlvbjsiLCJmdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcclxuXHJcbiAgICBjb25zdCBmb3JtSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGZvcm1IZWFkZXIuYXBwZW5kKCdNZXNzYWdlIFVzJyk7XHJcblxyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChmb3JtSGVhZGVyKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlTmFtZURpdigpKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRW1haWxEaXYoKSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRBcmVhKCkpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVGb3JtQnV0dG9uKCkpO1xyXG5cclxuICAgIHJldHVybiBmb3JtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYW1lRGl2KCkge1xyXG4gICAgY29uc3QgbmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmFtZURpdi5jbGFzc0xpc3QuYWRkKCduYW1lJyk7XHJcblxyXG4gICAgY29uc3QgbmFtZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIG5hbWVMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduYW1lJyk7XHJcbiAgICBuYW1lTGFiZWwuYXBwZW5kKCdGdWxsIE5hbWU6Jyk7XHJcblxyXG4gICAgY29uc3QgbmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xyXG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xyXG5cclxuICAgIG5hbWVEaXYuYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcclxuICAgIG5hbWVEaXYuYXBwZW5kQ2hpbGQobmFtZUlucHV0KTtcclxuXHJcbiAgICByZXR1cm4gbmFtZURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRW1haWxEaXYoKSB7XHJcbiAgICBjb25zdCBlbWFpbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZW1haWxEaXYuY2xhc3NMaXN0LmFkZCgndXNlci1lbWFpbCcpO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgZW1haWxMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICd1c2VyLWVtYWlsJyk7XHJcbiAgICBlbWFpbExhYmVsLmFwcGVuZCgnRW1haWw6Jyk7XHJcblxyXG4gICAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdlbWFpbCcpO1xyXG4gICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VzZXItZW1haWwnKTtcclxuXHJcbiAgICBlbWFpbERpdi5hcHBlbmRDaGlsZChlbWFpbExhYmVsKTtcclxuICAgIGVtYWlsRGl2LmFwcGVuZENoaWxkKGVtYWlsSW5wdXQpO1xyXG5cclxuICAgIHJldHVybiBlbWFpbERpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGV4dEFyZWEoKSB7XHJcbiAgICBjb25zdCB0ZXh0QXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbiAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbWVzc2FnZScpO1xyXG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdpZCcsICdtZXNzYWdlJyk7XHJcbiAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCAnMzAnKTtcclxuICAgIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgncm93cycsICcxMCcpO1xyXG4gICAgdGV4dEFyZWEuYXBwZW5kKCdUeXBlIHlvdXIgbWVzc2FnZS4uLicpO1xyXG5cclxuICAgIHJldHVybiB0ZXh0QXJlYTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRm9ybUJ1dHRvbigpIHtcclxuICAgIGNvbnN0IGZvcm1CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgIGZvcm1CdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3Jlc2V0Jyk7XHJcbiAgICBmb3JtQnV0dG9uLmFwcGVuZCgnU3VibWl0Jyk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm1CdXR0b247XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUZvcm07XHJcbiIsImZ1bmN0aW9uIGNyZWF0ZUFib3V0U2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dERpdi5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xyXG5cclxuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUFib3V0SDEoKSk7XHJcbiAgICBhYm91dERpdi5hcHBlbmRDaGlsZChjcmVhdGVDaGVmSW1nKCkpO1xyXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXRQYXJhKCkpO1xyXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXRIMigpKTtcclxuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU9yZGVyQnRuKCkpO1xyXG5cclxuICAgIHJldHVybiBhYm91dERpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWJvdXRIMSgpIHtcclxuICAgIGNvbnN0IGFib3V0SDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgYWJvdXRIMS5hcHBlbmQoJ1dlbGNvbWUgISEhJyk7XHJcbiAgICByZXR1cm4gYWJvdXRIMTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2hlZkltZygpIHtcclxuICAgIGNvbnN0IHN1c2hpQ2hlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgc3VzaGlDaGVmLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL1Rhbm9zaGlpLXN1c2hpLWNoZWYuanBnJztcclxuICAgIHN1c2hpQ2hlZi5hbHQgPSAnU3VzaGkgQ2hlZic7XHJcbiAgICBzdXNoaUNoZWYuc2V0QXR0cmlidXRlKCdpZCcsICdzdXNoaS1jaGVmJyk7XHJcbiAgICByZXR1cm4gc3VzaGlDaGVmO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBYm91dFBhcmEoKSB7XHJcbiAgICBjb25zdCBhYm91dFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBhYm91dFBhcmEuY2xhc3NMaXN0LmFkZCgnYWJvdXQtdHh0Jyk7XHJcbiAgICBhYm91dFBhcmEuYXBwZW5kKCdIYW5kLUNyYWZ0ZWQgU3VzaGkgd2l0aCBmcmVzaGx5IHBpY2tlZCwgb3JnYW5pYyBpbmdyZWRpZW50cyEnKTtcclxuICAgIHJldHVybiBhYm91dFBhcmE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFib3V0SDIoKSB7XHJcbiAgICBjb25zdCBhYm91dEgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGFib3V0SDIuYXBwZW5kKCdFc3QuIDIwMjMnKTtcclxuICAgIHJldHVybiBhYm91dEgyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPcmRlckJ0bigpIHtcclxuICAgIGNvbnN0IG9yZGVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBvcmRlckJ0bi50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBvcmRlckJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29yZGVyLWJ0bicpO1xyXG4gICAgb3JkZXJCdG4uYXBwZW5kKCdPcmRlciBOb3cnKTtcclxuICAgIHJldHVybiBvcmRlckJ0bjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWJvdXRTZWN0aW9uOyIsImltcG9ydCBjcmVhdGVBYm91dFNlY3Rpb24gZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IGNyZWF0ZUNvbnRhY3RTZWN0aW9uIGZyb20gJy4vY29udGFjdCc7XHJcblxyXG5mdW5jdGlvbiByZW5kZXJUZW1wbGF0ZShwYWdlKSB7XHJcbiAgICAvLyBSZW1vdmUgYWxsIGNoaWxkIG5vZGVzIGZyb20gYm9keSAvL1xyXG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcclxuICAgIHdoaWxlIChib2R5LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICBib2R5LnJlbW92ZUNoaWxkKGJvZHkuZmlyc3RDaGlsZCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGNyZWF0ZUNvbnRlbnQocGFnZSk7XHJcblxyXG4gICAgcmV0dXJuIHRlbXBsYXRlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KHBhZ2UpIHtcclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRlbnQuc2V0QXR0cmlidXRlKCdpZCcsICdjb250ZW50Jyk7XHJcblxyXG4gICAgY29uc3QgbmF2RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuYXZEaXYuY2xhc3NMaXN0LmFkZCgnbmF2Jyk7XHJcbiAgICBuYXZEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpO1xyXG5cclxuICAgIGNvbnN0IGJhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGJhY2tncm91bmQuc3JjID0gJy4uL3NyYy9pbWFnZXMvc3VzaGktcmVzdGF1cmFudC1iZy5qcGcnO1xyXG4gICAgYmFja2dyb3VuZC5hbHQgPSAnSmFwYW5lc2UgUmVzdGF1cmFudCBCYWNrZ3JvdW5kJztcclxuICAgIGJhY2tncm91bmQuc2V0QXR0cmlidXRlKCdpZCcsICdzdXNoaS1iZycpO1xyXG5cclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobmF2RGl2KTtcclxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYmFja2dyb3VuZCk7XHJcblxyXG4gICAgLy8gTG9hZCBwYWdlIGJhc2VkIG9uIGFyZ3VtZW50IHBhc3NlZCBpblxyXG4gICAgaWYgKHBhZ2UgPT09IHVuZGVmaW5lZCB8fCBwYWdlID09PSAnSG9tZScpIHtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUFib3V0U2VjdGlvbigpKTtcclxuICAgIH0gZWxzZSBpZiAocGFnZSA9PT0gJ0NvbnRhY3QnKSB7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0U2VjdGlvbigpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29udGVudDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2KCkge1xyXG4gICAgY29uc3QgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY3JlYXRlSGVhZGVyKCkpO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZVRhYnMoKSk7XHJcblxyXG4gICAgcmV0dXJuIG5hdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xyXG4gICAgLy8gY3JlYXRlIGRpdiB0byBzYW5kd2ljaCBoZWFkZXJcclxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBzdXNoaSBpY29uIGltZ1xyXG4gICAgY29uc3Qgc3VzaGlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBzdXNoaUljb24uc3JjID0gJy4uL3NyYy9pbWFnZXMvc3VzaGktaWNvbi5wbmcnO1xyXG4gICAgc3VzaGlJY29uLmFsdCA9ICdTdXNoaSBSb2xsJztcclxuICAgIHN1c2hpSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1c2hpLWljb24nKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgaDEgbmFtZSBvZiByZXN0YXVyYW50XHJcbiAgICBjb25zdCByZXN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICByZXN0TmFtZS5hcHBlbmQoJ1NvbmljIFN1c2hpJyk7XHJcblxyXG4gICAgLy8gQXBwZW5kIGVsZW1lbnRzIHRvIGhlYWRlciBkaXYgYW5kIHJldHVyblxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHN1c2hpSWNvbik7XHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQocmVzdE5hbWUpO1xyXG5cclxuICAgIHJldHVybiBoZWFkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhYnMoKSB7XHJcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcclxuXHJcbiAgICBsZXQgdGFicyA9IFsnSG9tZScsICdNZW51JywgJ0NvbnRhY3QnXTtcclxuICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKSB7XHJcbiAgICAgICAgbGlzdC5hcHBlbmRDaGlsZChjcmVhdGVMaW5rKHRhYikpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsaXN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMaW5rKG5hbWUpIHtcclxuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIC8vIEFkZCBocmVmIGF0dHIuIChjaGFuZ2UgbGF0ZXIpXHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZSk7XHJcbiAgICBsaW5rLmFwcGVuZChuYW1lKTtcclxuXHJcbiAgICBpZiAobmFtZSA9PT0gJ0hvbWUnKSB7XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJUZW1wbGF0ZSgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ0NvbnRhY3QnKSB7XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJUZW1wbGF0ZSgnQ29udGFjdCcpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgIHJldHVybiBsaXN0SXRlbTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyVGVtcGxhdGU7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==