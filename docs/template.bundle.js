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
    foodImg.src = `../src/images/menu-images/${food}.jpg`;
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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/template.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHdEQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxvQkFBb0I7Ozs7Ozs7Ozs7Ozs7O0FDM0duQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGlEQUFrQjtBQUM5QyxNQUFNO0FBQ04sNEJBQTRCLHdEQUFpQjtBQUM3QyxNQUFNO0FBQ04sNEJBQTRCLG9EQUFvQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUtcmVuZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvdGVtcGxhdGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNyZWF0ZUZvcm0gZnJvbSAnLi9jb250YWN0Rm9ybSc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0U2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGNvbnRhY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhY3REaXYuY2xhc3NMaXN0LmFkZCgnY29udGFjdCcpO1xyXG5cclxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdEgxKCkpO1xyXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjcmVhdGVMb2NhdGlvbigpKTtcclxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGltZSgpKTtcclxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY3JlYXRlUGhvbmVOdW0oKSk7XHJcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUVtYWlsKCkpO1xyXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjcmVhdGVGb3JtKCkpO1xyXG5cclxuICAgIHJldHVybiBjb250YWN0RGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDb250YWN0SDEoKSB7XHJcbiAgICBjb25zdCBjb250YWN0SDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgY29udGFjdEgxLmFwcGVuZCgnQ29udGFjdCBVcycpO1xyXG4gICAgcmV0dXJuIGNvbnRhY3RIMTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24oKSB7XHJcbiAgICBjb25zdCBsb2NhdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbG9jYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcclxuXHJcbiAgICBjb25zdCBsb2NhdGlvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGxvY2F0aW9uSWNvbi5zcmMgPSAnLi4vc3JjL2ltYWdlcy9sb2NhdGlvbi1waW4ucG5nJztcclxuICAgIGxvY2F0aW9uSWNvbi5hbHQgPSAnTG9jYXRpb24gUGluJztcclxuICAgIGxvY2F0aW9uSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2F0aW9uLXBpbicpO1xyXG5cclxuICAgIGNvbnN0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGxvY2F0aW9uLmFwcGVuZCgnMTIzNCBNYWRlLVVwIFN0LCBTb21lQ2l0eSwgTkogMTIzNDUnKTtcclxuXHJcbiAgICBsb2NhdGlvbkRpdi5hcHBlbmRDaGlsZChsb2NhdGlvbkljb24pO1xyXG4gICAgbG9jYXRpb25EaXYuYXBwZW5kQ2hpbGQobG9jYXRpb24pO1xyXG5cclxuICAgIHJldHVybiBsb2NhdGlvbkRpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGltZSgpIHtcclxuICAgIGNvbnN0IHRpbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHRpbWVEaXYuY2xhc3NMaXN0LmFkZCgndGltZScpO1xyXG5cclxuICAgIGNvbnN0IHRpbWVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICB0aW1lSWNvbi5zcmMgPSAnLi4vc3JjL2ltYWdlcy90aW1lLnBuZyc7XHJcbiAgICB0aW1lSWNvbi5hbHQgPSAnY2xvY2staWNvbic7XHJcbiAgICB0aW1lSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb2NrLWljb24nKTtcclxuXHJcbiAgICB0aW1lRGl2LmFwcGVuZENoaWxkKHRpbWVJY29uKTtcclxuICAgIHRpbWVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlSG91cnMoKSk7XHJcblxyXG4gICAgcmV0dXJuIHRpbWVEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvdXJzKCkge1xyXG4gICAgY29uc3QgaG91cnNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhvdXJzRGl2LmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XHJcblxyXG4gICAgY29uc3Qgd2Vla2RheUhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHdlZWtkYXlIb3Vycy5hcHBlbmQoJ01vbmRheSAtIFRodXJzZGF5OiA4YW0gLSA4cG0nKTtcclxuXHJcbiAgICBjb25zdCB3ZWVrZW5kSG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgd2Vla2VuZEhvdXJzLmFwcGVuZCgnRnJpZGF5IC0gU3VuZGF5OiA4YW0gLSAxMXBtJyk7XHJcblxyXG4gICAgaG91cnNEaXYuYXBwZW5kQ2hpbGQod2Vla2RheUhvdXJzKTtcclxuICAgIGhvdXJzRGl2LmFwcGVuZENoaWxkKHdlZWtlbmRIb3Vycyk7XHJcblxyXG4gICAgcmV0dXJuIGhvdXJzRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQaG9uZU51bSgpIHtcclxuICAgIGNvbnN0IHBob25lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBwaG9uZURpdi5jbGFzc0xpc3QuYWRkKCd0ZWxlcGhvbmUnKTtcclxuXHJcbiAgICBjb25zdCBwaG9uZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHBob25lSWNvbi5zcmMgPSAnLi4vc3JjL2ltYWdlcy9jYWxsLnBuZyc7XHJcbiAgICBwaG9uZUljb24uYWx0ID0gJ3Bob25lLWljb24nO1xyXG4gICAgcGhvbmVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAncGhvbmUtaWNvbicpO1xyXG5cclxuICAgIGNvbnN0IHBob25lTnVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIHBob25lTnVtLmFwcGVuZCgnKDEyMyktNDU2LTc4OTAnKTtcclxuXHJcbiAgICBwaG9uZURpdi5hcHBlbmRDaGlsZChwaG9uZUljb24pO1xyXG4gICAgcGhvbmVEaXYuYXBwZW5kQ2hpbGQocGhvbmVOdW0pO1xyXG5cclxuICAgIHJldHVybiBwaG9uZURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRW1haWwoKSB7XHJcbiAgICBjb25zdCBlbWFpbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZW1haWxEaXYuY2xhc3NMaXN0LmFkZCgnZW1haWwnKTtcclxuXHJcbiAgICBjb25zdCBlbWFpbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGVtYWlsSWNvbi5zcmMgPSAnLi4vc3JjL2ltYWdlcy9lbWFpbC5wbmcnO1xyXG4gICAgZW1haWxJY29uLmFsdCA9ICdlbWFpbC1pY29uJztcclxuICAgIGVtYWlsSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VtYWlsLWljb24nKTtcclxuXHJcbiAgICBjb25zdCBlbWFpbEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgZW1haWxBZGRyZXNzLmFwcGVuZCgnZmFrZW1haWxAbm90cmVhbC5jb20nKTtcclxuXHJcbiAgICBlbWFpbERpdi5hcHBlbmRDaGlsZChlbWFpbEljb24pO1xyXG4gICAgZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxBZGRyZXNzKTtcclxuXHJcbiAgICByZXR1cm4gZW1haWxEaXY7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZUNvbnRhY3RTZWN0aW9uOyIsImZ1bmN0aW9uIGNyZWF0ZUZvcm0oKSB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xyXG5cclxuICAgIGNvbnN0IGZvcm1IZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgZm9ybUhlYWRlci5hcHBlbmQoJ01lc3NhZ2UgVXMnKTtcclxuXHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1IZWFkZXIpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVOYW1lRGl2KCkpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVFbWFpbERpdigpKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dEFyZWEoKSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUZvcm1CdXR0b24oKSk7XHJcblxyXG4gICAgcmV0dXJuIGZvcm07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hbWVEaXYoKSB7XHJcbiAgICBjb25zdCBuYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBuYW1lRGl2LmNsYXNzTGlzdC5hZGQoJ25hbWUnKTtcclxuXHJcbiAgICBjb25zdCBuYW1lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbmFtZUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25hbWUnKTtcclxuICAgIG5hbWVMYWJlbC5hcHBlbmQoJ0Z1bGwgTmFtZTonKTtcclxuXHJcbiAgICBjb25zdCBuYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbmFtZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XHJcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XHJcblxyXG4gICAgbmFtZURpdi5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xyXG4gICAgbmFtZURpdi5hcHBlbmRDaGlsZChuYW1lSW5wdXQpO1xyXG5cclxuICAgIHJldHVybiBuYW1lRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbWFpbERpdigpIHtcclxuICAgIGNvbnN0IGVtYWlsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbWFpbERpdi5jbGFzc0xpc3QuYWRkKCd1c2VyLWVtYWlsJyk7XHJcblxyXG4gICAgY29uc3QgZW1haWxMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBlbWFpbExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3VzZXItZW1haWwnKTtcclxuICAgIGVtYWlsTGFiZWwuYXBwZW5kKCdFbWFpbDonKTtcclxuXHJcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2VtYWlsJyk7XHJcbiAgICBlbWFpbElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAndXNlci1lbWFpbCcpO1xyXG5cclxuICAgIGVtYWlsRGl2LmFwcGVuZENoaWxkKGVtYWlsTGFiZWwpO1xyXG4gICAgZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxJbnB1dCk7XHJcblxyXG4gICAgcmV0dXJuIGVtYWlsRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUZXh0QXJlYSgpIHtcclxuICAgIGNvbnN0IHRleHRBcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcclxuICAgIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnbmFtZScsICdtZXNzYWdlJyk7XHJcbiAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lc3NhZ2UnKTtcclxuICAgIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnY29scycsICczMCcpO1xyXG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdyb3dzJywgJzEwJyk7XHJcbiAgICB0ZXh0QXJlYS5hcHBlbmQoJ1R5cGUgeW91ciBtZXNzYWdlLi4uJyk7XHJcblxyXG4gICAgcmV0dXJuIHRleHRBcmVhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb3JtQnV0dG9uKCkge1xyXG4gICAgY29uc3QgZm9ybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgZm9ybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAncmVzZXQnKTtcclxuICAgIGZvcm1CdXR0b24uYXBwZW5kKCdTdWJtaXQnKTtcclxuXHJcbiAgICByZXR1cm4gZm9ybUJ1dHRvbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRm9ybTtcclxuIiwiaW1wb3J0IHJlbmRlclRlbXBsYXRlIGZyb20gXCIuL3RlbXBsYXRlXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBYm91dFNlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBhYm91dERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYWJvdXREaXYuY2xhc3NMaXN0LmFkZCgnYWJvdXQnKTtcclxuXHJcbiAgICBhYm91dERpdi5hcHBlbmRDaGlsZChjcmVhdGVBYm91dEgxKCkpO1xyXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQ2hlZkltZygpKTtcclxuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUFib3V0UGFyYSgpKTtcclxuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUFib3V0SDIoKSk7XHJcbiAgICBhYm91dERpdi5hcHBlbmRDaGlsZChjcmVhdGVPcmRlckJ0bigpKTtcclxuXHJcbiAgICByZXR1cm4gYWJvdXREaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFib3V0SDEoKSB7XHJcbiAgICBjb25zdCBhYm91dEgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGFib3V0SDEuYXBwZW5kKCdXZWxjb21lICEhIScpO1xyXG4gICAgcmV0dXJuIGFib3V0SDE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNoZWZJbWcoKSB7XHJcbiAgICBjb25zdCBzdXNoaUNoZWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHN1c2hpQ2hlZi5zcmMgPSAnLi4vc3JjL2ltYWdlcy9UYW5vc2hpaS1zdXNoaS1jaGVmLmpwZyc7XHJcbiAgICBzdXNoaUNoZWYuYWx0ID0gJ1N1c2hpIENoZWYnO1xyXG4gICAgc3VzaGlDaGVmLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VzaGktY2hlZicpO1xyXG4gICAgcmV0dXJuIHN1c2hpQ2hlZjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWJvdXRQYXJhKCkge1xyXG4gICAgY29uc3QgYWJvdXRQYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgYWJvdXRQYXJhLmNsYXNzTGlzdC5hZGQoJ2Fib3V0LXR4dCcpO1xyXG4gICAgYWJvdXRQYXJhLmFwcGVuZCgnSGFuZC1DcmFmdGVkIFN1c2hpIHdpdGggZnJlc2hseSBwaWNrZWQsIG9yZ2FuaWMgaW5ncmVkaWVudHMhJyk7XHJcbiAgICByZXR1cm4gYWJvdXRQYXJhO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBYm91dEgyKCkge1xyXG4gICAgY29uc3QgYWJvdXRIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBhYm91dEgyLmFwcGVuZCgnRXN0LiAyMDIzJyk7XHJcbiAgICByZXR1cm4gYWJvdXRIMjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlT3JkZXJCdG4oKSB7XHJcbiAgICBjb25zdCBvcmRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgb3JkZXJCdG4udHlwZSA9ICdidXR0b24nO1xyXG4gICAgb3JkZXJCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdvcmRlci1idG4nKTtcclxuICAgIG9yZGVyQnRuLmFwcGVuZCgnT3JkZXIgTm93Jyk7XHJcblxyXG4gICAgb3JkZXJCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJUZW1wbGF0ZSgnTWVudScpKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBvcmRlckJ0bjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQWJvdXRTZWN0aW9uOyIsImltcG9ydCBtZW51IGZyb20gJy4vbWVudSc7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51U2VjdGlvbigpIHtcclxuICAgIGNvbnN0IG1lbnVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1lbnVEaXYuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xyXG5cclxuICAgIC8vIEFwcGVuZCBhbGwgbWVudSBzZWN0aW9ucyBhbmQgaGVhZGVycyAvL1xyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVBcHBzSGVhZGVyKCkpO1xyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVBcHBzRGl2KCkpO1xyXG5cclxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU3VzaGlIZWFkZXIoKSk7XHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZVN1c2hpRGl2KCkpO1xyXG5cclxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQmV2ZXJhZ2VzSGVhZGVyKCkpO1xyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVCZXZlcmFnZXNEaXYoKSk7XHJcblxyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVEZXNzZXJ0SGVhZGVyKCkpO1xyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVEZXNzZXJ0RGl2KCkpO1xyXG5cclxuICAgIHJldHVybiBtZW51RGl2O1xyXG59XHJcblxyXG4vLyBBcHBldGl6ZXJzIC8vXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBcHBzSGVhZGVyKCkge1xyXG4gICAgY29uc3QgYXBwc0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBhcHBzSGVhZGVyLmFwcGVuZCgnQXBwZXRpemVycycpO1xyXG5cclxuICAgIHJldHVybiBhcHBzSGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBcHBzRGl2KCkge1xyXG4gICAgY29uc3QgYXBwc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgYXBwc0Rpdi5jbGFzc0xpc3QuYWRkKCdhcHBldGl6ZXJzJyk7XHJcblxyXG4gICAgLy8gSXRlcmF0ZSB0aHJ1IGFsbCBpdGVtcyBpbiBhcHBldGl6ZXIgc2VjdGlvbiBhbmQgYXBwZW5kIHRvIGRpdiAvL1xyXG4gICAgZm9yIChsZXQgaXRlbSBpbiBtZW51LmFwcGV0aXplcnMpIHtcclxuICAgICAgICBhcHBzRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvb2REaXYoJ2FwcGV0aXplcnMnLCBpdGVtKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXBwc0RpdjtcclxufVxyXG5cclxuLy8gU3VzaGkgLy9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN1c2hpSGVhZGVyKCkge1xyXG4gICAgY29uc3Qgc3VzaGlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgc3VzaGlIZWFkZXIuYXBwZW5kKCdTdXNoaSBSb2xscycpO1xyXG5cclxuICAgIHJldHVybiBzdXNoaUhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3VzaGlEaXYoKSB7XHJcbiAgICBjb25zdCBzdXNoaURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3VzaGlEaXYuY2xhc3NMaXN0LmFkZCgnc3VzaGknKTtcclxuXHJcbiAgICBmb3IgKGxldCBpdGVtIGluIG1lbnUuc3VzaGkpIHtcclxuICAgICAgICBzdXNoaURpdi5hcHBlbmRDaGlsZChjcmVhdGVGb29kRGl2KCdzdXNoaScsIGl0ZW0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdXNoaURpdjtcclxufVxyXG5cclxuLy8gQmV2ZXJhZ2VzIC8vXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCZXZlcmFnZXNIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBiZXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgYmV2SGVhZGVyLmFwcGVuZCgnQmV2ZXJhZ2VzJyk7XHJcblxyXG4gICAgcmV0dXJuIGJldkhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQmV2ZXJhZ2VzRGl2KCkge1xyXG4gICAgY29uc3QgYmV2RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiZXZEaXYuY2xhc3NMaXN0LmFkZCgnYmV2ZXJhZ2VzJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaXRlbSBpbiBtZW51LmJldmVyYWdlcykge1xyXG4gICAgICAgIGJldkRpdi5hcHBlbmRDaGlsZChjcmVhdGVGb29kRGl2KCdiZXZlcmFnZXMnLCBpdGVtKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYmV2RGl2O1xyXG59XHJcblxyXG4vLyBEZXNzZXJ0IC8vXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEZXNzZXJ0SGVhZGVyKCkge1xyXG4gICAgY29uc3QgZGVzc2VydEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBkZXNzZXJ0SGVhZGVyLmFwcGVuZCgnRGVzc2VydCcpO1xyXG5cclxuICAgIHJldHVybiBkZXNzZXJ0SGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEZXNzZXJ0RGl2KCkge1xyXG4gICAgY29uc3QgZGVzc2VydERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVzc2VydERpdi5jbGFzc0xpc3QuYWRkKCdkZXNzZXJ0Jyk7XHJcblxyXG4gICAgZm9yIChsZXQgaXRlbSBpbiBtZW51LmRlc3NlcnQpIHtcclxuICAgICAgICBkZXNzZXJ0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvb2REaXYoJ2Rlc3NlcnQnLCBpdGVtKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVzc2VydERpdjtcclxufVxyXG5cclxuLy8gRm9vZERpdiBmdW5jIGFuZCBhbGwgdW5kZXJseWluZyBmdW5jIHVzZWQgZm9yIGFwcHMsIHN1c2hpLCBiZXZlcmFnZXMsIGFuZCBkZXNlcnQgc2VjdGlvbnMgLy9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb2REaXYoY291cnNlLCBmb29kKSB7XHJcbiAgICBjb25zdCBmb29kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBmb29kRGl2LmNsYXNzTGlzdC5hZGQoYCR7Zm9vZH1gKTtcclxuXHJcbiAgICBmb29kRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvb2RJbmZvKGNvdXJzZSwgZm9vZCkpO1xyXG4gICAgZm9vZERpdi5hcHBlbmRDaGlsZChjcmVhdGVGb29kRGVzY3JpcHRpb24oY291cnNlLCBmb29kKSk7XHJcblxyXG4gICAgcmV0dXJuIGZvb2REaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb2RJbmZvKGNvdXJzZSwgZm9vZCkge1xyXG4gICAgY29uc3QgaW5mb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW5mb0Rpdi5jbGFzc0xpc3QuYWRkKCdpbmZvJyk7XHJcblxyXG4gICAgaW5mb0Rpdi5hcHBlbmRDaGlsZChjcmVhdGVGb29kSW1nKGZvb2QpKTtcclxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlTmFtZVByaWNlRGl2KGNvdXJzZSwgZm9vZCkpO1xyXG5cclxuICAgIHJldHVybiBpbmZvRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb29kSW1nKGZvb2QpIHtcclxuICAgIGNvbnN0IGZvb2RJbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGZvb2RJbWcuc3JjID0gYC4uL3NyYy9pbWFnZXMvbWVudS1pbWFnZXMvJHtmb29kfS5qcGdgO1xyXG4gICAgZm9vZEltZy5hbHQgPSBgJHtmb29kfWA7XHJcbiAgICBmb29kSW1nLnNldEF0dHJpYnV0ZSgnaWQnLCBgJHtmb29kfWApO1xyXG5cclxuICAgIHJldHVybiBmb29kSW1nO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYW1lUHJpY2VEaXYoY291cnNlLCBmb29kKSB7XHJcbiAgICBjb25zdCBuYW1lUHJpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5hbWVQcmljZURpdi5jbGFzc0xpc3QuYWRkKCduYW1lLXByaWNlJyk7XHJcblxyXG4gICAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgZm9vZE5hbWUuYXBwZW5kKG1lbnVbY291cnNlXVtmb29kXS5uYW1lKTtcclxuICAgIG5hbWVQcmljZURpdi5hcHBlbmRDaGlsZChmb29kTmFtZSk7XHJcblxyXG4gICAgY29uc3QgZm9vZFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGNvbnN0IGNvc3QgPSBtZW51W2NvdXJzZV1bZm9vZF0ucHJpY2VcclxuICAgIGZvb2RQcmljZS5hcHBlbmQoYCQgJHtjb3N0LnRvRml4ZWQoMil9YCk7XHJcbiAgICBuYW1lUHJpY2VEaXYuYXBwZW5kQ2hpbGQoZm9vZFByaWNlKTtcclxuXHJcbiAgICByZXR1cm4gbmFtZVByaWNlRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGb29kRGVzY3JpcHRpb24oY291cnNlLCBmb29kKSB7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkZXNjcmlwdGlvblBhcmEuYXBwZW5kKG1lbnVbY291cnNlXVtmb29kXS5kZXNjcmlwdGlvbik7XHJcbiAgICBkZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblBhcmEpO1xyXG4gICAgXHJcbiAgICByZXR1cm4gZGVzY3JpcHRpb25EaXY7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZU1lbnVTZWN0aW9uOyIsIi8vIENsYXNzIGZvciBtZW51IGl0ZW1zIC8vXHJcbmNsYXNzIE1lbnVJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByaWNlLCBkZXNjcmlwdGlvbikge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGFwcGV0aXplcnMgPSB7XHJcbiAgICByaWNlOiBuZXcgTWVudUl0ZW0oJ1JpY2UnLCAzLjUwLCAnU3RlYW1pbmcgaG90IGJvd2wgb2Ygd2hpdGUgSmFzbWluZSByaWNlJyksXHJcbiAgICBzaHVtYWk6IG5ldyBNZW51SXRlbSgnU2h1bWFpJywgMy45OSwgJ1N0ZWFtZWQgc2hyaW1wIGR1bXBsaW5ncycpLFxyXG4gICAgZWRhbWFtZTogbmV3IE1lbnVJdGVtKCdFZGFtYW1lJywgMi45OSwgJ1N0ZWFtZWQgc295YmVhbiB3aXRoIHNlYSBzYWx0JyksXHJcbiAgICBzYWxhZDogbmV3IE1lbnVJdGVtKCdIb3VzZSBTYWxhZCcsIDMuOTksICdSb21haW5lIGxldHR1Y2UsIGNhcnJvdCwgdG9tYXRvLCBjdWN1bWJlciB3aXRoIGdpbmdlciBkcmVzc2luZycpLCBcclxufTtcclxuXHJcbmNvbnN0IHN1c2hpID0ge1xyXG4gICAgdmVnYXM6IG5ldyBNZW51SXRlbSgnTGFzIFZlZ2FzJywgOS45OSwgJ0NyYWIgbWVhdCwgY3VjdW1iZXIsIGF2b2NhZG8sIHNocmVkZGVkIGNyYWIgc3RpY2ssIHNwaWN5IG1heW8sIHN3ZWV0IGNydW5jaCcpLFxyXG4gICAgZHluYW1pdGU6IG5ldyBNZW51SXRlbSgnRHluYW1pdGUgKEJha2VkKScsIDEwLjk5LCAnQ3JhYiBtZWF0LCBjdWN1bWJlciwgYXZvY2Fkbywgd2hpdGUgZmlzaCwgY3JhYiwgc2hyaW1wIHdpdGggc3BpY3kgbWF5bywgc3dlZXQnKSxcclxuICAgIHZlZ2dpZTogbmV3IE1lbnVJdGVtKCdWZWdnaWUgUm9sbCcsIDguOTksICdDdWN1bWJlciwgbGV0dHVjZSwgdG9tYXRvLCBzbGljZSBhdm9jYWRvLCBzcGljeSBtYXlvLCB3aGl0ZSBjcnVuY2gnKSxcclxuICAgIGltcGVyaWFsOiBuZXcgTWVudUl0ZW0oJ0ltcGVyaWFsIFJvbGwnLCAxMy45OSwgJ1NwaWN5IHR1bmEsIHNocmltcCB0ZW1wdXJhLCBjcmVhbSBjaGVlc2UsIGF2b2NhZG8sIHNhbG1vbiwgY3JhYiBtZWF0IHdpdGggc3BpY3kgbWF5bywgc3dlZXQnKSxcclxufTtcclxuXHJcbmNvbnN0IGJldmVyYWdlcyA9IHtcclxuICAgIHRlYTogbmV3IE1lbnVJdGVtKCdIb3QgVGVhJywgMi41MCwgJ0dyZWVuLCBCbGFjaywgSmFzbWluZSwgQ2hhbW9taWxlJyksXHJcbiAgICBzb2RhOiBuZXcgTWVudUl0ZW0oJ0ZvdW50YWluIERyaW5rcycsIDIuOTksICdQZXBzaSwgTXQuIERldywgTGVtb25hZGUsIFJvb3QgQmVlciwgSWNlZCBUZWEsIERyLiBQZXBwZXInKSxcclxuICAgIGJlZXI6IG5ldyBNZW51SXRlbSgnQmVlcicsIDMuNTAsICdTYXBwb3JvLCBLaXJpbiwgQmx1ZSBNb29uLCBDb3JvbmEnKSxcclxuICAgIHNha2U6IG5ldyBNZW51SXRlbSgnU2FrZScsIDguMDAsICdTaGlybyBzYXNhLCBuaWdvcmksIHBlYWNoIHNwYXJrbGluZywgcGluZWFwcGxlIHNwYXJrbGluZywgeXV6dSBzcGFya2xpbmcnKSxcclxufTtcclxuXHJcbmNvbnN0IGRlc3NlcnQgPSB7XHJcbiAgICBpY2VDcmVhbTogbmV3IE1lbnVJdGVtKCdJY2UgQ3JlYW0nLCA1Ljk5LCAnVmFuaWxsYSwgQ2hvY29sYXRlLCBTdHJhd2JlcnJ5LCBNaW50LCBDb29raWVzIG5cXCcgQ3JlbWUnKSxcclxuICAgIG1vY2hpOiBuZXcgTWVudUl0ZW0oJ01vY2hpIEljZSBDcmVhbScsIDYuOTksICdWYW5pbGxhLCBDaG9jb2xhdGUsIFN0cmF3YmVycnksIEdyZWVuIFRlYScpLFxyXG59O1xyXG5cclxuY29uc3QgbWVudSA9IHthcHBldGl6ZXJzLCBzdXNoaSwgYmV2ZXJhZ2VzLCBkZXNzZXJ0fTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1lbnU7IiwiaW1wb3J0IGNyZWF0ZUFib3V0U2VjdGlvbiBmcm9tICcuL2hvbWUnO1xyXG5pbXBvcnQgY3JlYXRlTWVudVNlY3Rpb24gZnJvbSAnLi9tZW51LXJlbmRlcic7XHJcbmltcG9ydCBjcmVhdGVDb250YWN0U2VjdGlvbiBmcm9tICcuL2NvbnRhY3QnO1xyXG5cclxuZnVuY3Rpb24gcmVuZGVyVGVtcGxhdGUocGFnZSkge1xyXG4gICAgLy8gUmVtb3ZlIGFsbCBjaGlsZCBub2RlcyBmcm9tIGJvZHkgLy9cclxuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XHJcbiAgICB3aGlsZSAoYm9keS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgYm9keS5yZW1vdmVDaGlsZChib2R5LmZpcnN0Q2hpbGQpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgdGVtcGxhdGUgPSBjcmVhdGVDb250ZW50KHBhZ2UpO1xyXG5cclxuICAgIHJldHVybiB0ZW1wbGF0ZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGVudChwYWdlKSB7XHJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250ZW50LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29udGVudCcpO1xyXG5cclxuICAgIGNvbnN0IG5hdkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbmF2RGl2LmNsYXNzTGlzdC5hZGQoJ25hdicpO1xyXG4gICAgbmF2RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKTtcclxuXHJcbiAgICBjb25zdCBiYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3N1c2hpLXJlc3RhdXJhbnQtYmcuanBnJztcclxuICAgIGJhY2tncm91bmQuYWx0ID0gJ0phcGFuZXNlIFJlc3RhdXJhbnQgQmFja2dyb3VuZCc7XHJcbiAgICBiYWNrZ3JvdW5kLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VzaGktYmcnKTtcclxuXHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkRpdik7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJhY2tncm91bmQpO1xyXG5cclxuICAgIC8vIExvYWQgcGFnZSBiYXNlZCBvbiBhcmd1bWVudCBwYXNzZWQgaW5cclxuICAgIGlmIChwYWdlID09PSB1bmRlZmluZWQgfHwgcGFnZSA9PT0gJ0hvbWUnKSB7XHJcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjcmVhdGVBYm91dFNlY3Rpb24oKSk7XHJcbiAgICB9IGVsc2UgaWYgKHBhZ2UgPT09ICdNZW51Jykge1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlTWVudVNlY3Rpb24oKSk7XHJcbiAgICB9IGVsc2UgaWYgKHBhZ2UgPT09ICdDb250YWN0Jykge1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQ29udGFjdFNlY3Rpb24oKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNvbnRlbnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hdigpIHtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpO1xyXG4gICAgbmF2LmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChjcmVhdGVUYWJzKCkpO1xyXG5cclxuICAgIHJldHVybiBuYXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpIHtcclxuICAgIC8vIGNyZWF0ZSBkaXYgdG8gc2FuZHdpY2ggaGVhZGVyXHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcclxuXHJcbiAgICAvLyBjcmVhdGUgc3VzaGkgaWNvbiBpbWdcclxuICAgIGNvbnN0IHN1c2hpSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgc3VzaGlJY29uLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3N1c2hpLWljb24ucG5nJztcclxuICAgIHN1c2hpSWNvbi5hbHQgPSAnU3VzaGkgUm9sbCc7XHJcbiAgICBzdXNoaUljb24uc2V0QXR0cmlidXRlKCdpZCcsICdzdXNoaS1pY29uJyk7XHJcblxyXG4gICAgLy8gY3JlYXRlIGgxIG5hbWUgb2YgcmVzdGF1cmFudFxyXG4gICAgY29uc3QgcmVzdE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgcmVzdE5hbWUuYXBwZW5kKCdTb25pYyBTdXNoaScpO1xyXG5cclxuICAgIC8vIEFwcGVuZCBlbGVtZW50cyB0byBoZWFkZXIgZGl2IGFuZCByZXR1cm5cclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChzdXNoaUljb24pO1xyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHJlc3ROYW1lKTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYWJzKCkge1xyXG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcblxyXG4gICAgbGV0IHRhYnMgPSBbJ0hvbWUnLCAnTWVudScsICdDb250YWN0J107XHJcbiAgICBmb3IgKGxldCB0YWIgb2YgdGFicykge1xyXG4gICAgICAgIGxpc3QuYXBwZW5kQ2hpbGQoY3JlYXRlTGluayh0YWIpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGlzdDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTGluayhuYW1lKSB7XHJcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XHJcbiAgICBcclxuICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBsaW5rLnNldEF0dHJpYnV0ZSgnaWQnLCBuYW1lKTtcclxuICAgIGxpbmsuYXBwZW5kKG5hbWUpO1xyXG5cclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lciBkZXBlbmRpbmcgb24gZWFjaCB0YWIgbmFtZSAvLyBcclxuICAgIGlmIChuYW1lID09PSAnSG9tZScpIHtcclxuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlclRlbXBsYXRlKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnTWVudScpIHtcclxuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlclRlbXBsYXRlKCdNZW51JykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmIChuYW1lID09PSAnQ29udGFjdCcpIHtcclxuICAgICAgICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlclRlbXBsYXRlKCdDb250YWN0JykpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxpc3RJdGVtLmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgcmV0dXJuIGxpc3RJdGVtO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCByZW5kZXJUZW1wbGF0ZTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9