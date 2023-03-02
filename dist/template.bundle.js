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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/template.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVtcGxhdGUuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHdEQUFVO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxvQkFBb0I7Ozs7Ozs7Ozs7Ozs7O0FDM0duQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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NEIsaURBQWtCO0FBQzlDLE1BQU07QUFDTiw0QkFBNEIsd0RBQWlCO0FBQzdDLE1BQU07QUFDTiw0QkFBNEIsb0RBQW9CO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxNQUFNO0FBQ047QUFDQTtBQUNBLFNBQVM7QUFDVCxNQUFNO0FBQ047QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2NvbnRhY3RGb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tb2R1bGVzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS1yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21vZHVsZXMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbW9kdWxlcy90ZW1wbGF0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3JlYXRlRm9ybSBmcm9tICcuL2NvbnRhY3RGb3JtJztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RTZWN0aW9uKCkge1xyXG4gICAgY29uc3QgY29udGFjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFjdERpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XHJcblxyXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjcmVhdGVDb250YWN0SDEoKSk7XHJcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUxvY2F0aW9uKCkpO1xyXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjcmVhdGVUaW1lKCkpO1xyXG4gICAgY29udGFjdERpdi5hcHBlbmRDaGlsZChjcmVhdGVQaG9uZU51bSgpKTtcclxuICAgIGNvbnRhY3REaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRW1haWwoKSk7XHJcbiAgICBjb250YWN0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvcm0oKSk7XHJcblxyXG4gICAgcmV0dXJuIGNvbnRhY3REaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhY3RIMSgpIHtcclxuICAgIGNvbnN0IGNvbnRhY3RIMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBjb250YWN0SDEuYXBwZW5kKCdDb250YWN0IFVzJyk7XHJcbiAgICByZXR1cm4gY29udGFjdEgxO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbigpIHtcclxuICAgIGNvbnN0IGxvY2F0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsb2NhdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbicpO1xyXG5cclxuICAgIGNvbnN0IGxvY2F0aW9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgbG9jYXRpb25JY29uLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL2xvY2F0aW9uLXBpbi5wbmcnO1xyXG4gICAgbG9jYXRpb25JY29uLmFsdCA9ICdMb2NhdGlvbiBQaW4nO1xyXG4gICAgbG9jYXRpb25JY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnbG9jYXRpb24tcGluJyk7XHJcblxyXG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgbG9jYXRpb24uYXBwZW5kKCcxMjM0IE1hZGUtVXAgU3QsIFNvbWVDaXR5LCBOSiAxMjM0NScpO1xyXG5cclxuICAgIGxvY2F0aW9uRGl2LmFwcGVuZENoaWxkKGxvY2F0aW9uSWNvbik7XHJcbiAgICBsb2NhdGlvbkRpdi5hcHBlbmRDaGlsZChsb2NhdGlvbik7XHJcblxyXG4gICAgcmV0dXJuIGxvY2F0aW9uRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUaW1lKCkge1xyXG4gICAgY29uc3QgdGltZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGltZURpdi5jbGFzc0xpc3QuYWRkKCd0aW1lJyk7XHJcblxyXG4gICAgY29uc3QgdGltZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHRpbWVJY29uLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL3RpbWUucG5nJztcclxuICAgIHRpbWVJY29uLmFsdCA9ICdjbG9jay1pY29uJztcclxuICAgIHRpbWVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvY2staWNvbicpO1xyXG5cclxuICAgIHRpbWVEaXYuYXBwZW5kQ2hpbGQodGltZUljb24pO1xyXG4gICAgdGltZURpdi5hcHBlbmRDaGlsZChjcmVhdGVIb3VycygpKTtcclxuXHJcbiAgICByZXR1cm4gdGltZURpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSG91cnMoKSB7XHJcbiAgICBjb25zdCBob3Vyc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaG91cnNEaXYuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcclxuXHJcbiAgICBjb25zdCB3ZWVrZGF5SG91cnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgd2Vla2RheUhvdXJzLmFwcGVuZCgnTW9uZGF5IC0gVGh1cnNkYXk6IDhhbSAtIDhwbScpO1xyXG5cclxuICAgIGNvbnN0IHdlZWtlbmRIb3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICB3ZWVrZW5kSG91cnMuYXBwZW5kKCdGcmlkYXkgLSBTdW5kYXk6IDhhbSAtIDExcG0nKTtcclxuXHJcbiAgICBob3Vyc0Rpdi5hcHBlbmRDaGlsZCh3ZWVrZGF5SG91cnMpO1xyXG4gICAgaG91cnNEaXYuYXBwZW5kQ2hpbGQod2Vla2VuZEhvdXJzKTtcclxuXHJcbiAgICByZXR1cm4gaG91cnNEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBob25lTnVtKCkge1xyXG4gICAgY29uc3QgcGhvbmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHBob25lRGl2LmNsYXNzTGlzdC5hZGQoJ3RlbGVwaG9uZScpO1xyXG5cclxuICAgIGNvbnN0IHBob25lSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgcGhvbmVJY29uLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL2NhbGwucG5nJztcclxuICAgIHBob25lSWNvbi5hbHQgPSAncGhvbmUtaWNvbic7XHJcbiAgICBwaG9uZUljb24uc2V0QXR0cmlidXRlKCdpZCcsICdwaG9uZS1pY29uJyk7XHJcblxyXG4gICAgY29uc3QgcGhvbmVOdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgcGhvbmVOdW0uYXBwZW5kKCcoMTIzKS00NTYtNzg5MCcpO1xyXG5cclxuICAgIHBob25lRGl2LmFwcGVuZENoaWxkKHBob25lSWNvbik7XHJcbiAgICBwaG9uZURpdi5hcHBlbmRDaGlsZChwaG9uZU51bSk7XHJcblxyXG4gICAgcmV0dXJuIHBob25lRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFbWFpbCgpIHtcclxuICAgIGNvbnN0IGVtYWlsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbWFpbERpdi5jbGFzc0xpc3QuYWRkKCdlbWFpbCcpO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZW1haWxJY29uLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL2VtYWlsLnBuZyc7XHJcbiAgICBlbWFpbEljb24uYWx0ID0gJ2VtYWlsLWljb24nO1xyXG4gICAgZW1haWxJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnZW1haWwtaWNvbicpO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsQWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBlbWFpbEFkZHJlc3MuYXBwZW5kKCdmYWtlbWFpbEBub3RyZWFsLmNvbScpO1xyXG5cclxuICAgIGVtYWlsRGl2LmFwcGVuZENoaWxkKGVtYWlsSWNvbik7XHJcbiAgICBlbWFpbERpdi5hcHBlbmRDaGlsZChlbWFpbEFkZHJlc3MpO1xyXG5cclxuICAgIHJldHVybiBlbWFpbERpdjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdFNlY3Rpb247IiwiZnVuY3Rpb24gY3JlYXRlRm9ybSgpIHtcclxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XHJcblxyXG4gICAgY29uc3QgZm9ybUhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBmb3JtSGVhZGVyLmFwcGVuZCgnTWVzc2FnZSBVcycpO1xyXG5cclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUhlYWRlcik7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZU5hbWVEaXYoKSk7XHJcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNyZWF0ZUVtYWlsRGl2KCkpO1xyXG4gICAgZm9ybS5hcHBlbmRDaGlsZChjcmVhdGVUZXh0QXJlYSgpKTtcclxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY3JlYXRlRm9ybUJ1dHRvbigpKTtcclxuXHJcbiAgICByZXR1cm4gZm9ybTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmFtZURpdigpIHtcclxuICAgIGNvbnN0IG5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5hbWVEaXYuY2xhc3NMaXN0LmFkZCgnbmFtZScpO1xyXG5cclxuICAgIGNvbnN0IG5hbWVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBuYW1lTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmFtZScpO1xyXG4gICAgbmFtZUxhYmVsLmFwcGVuZCgnRnVsbCBOYW1lOicpO1xyXG5cclxuICAgIGNvbnN0IG5hbWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBuYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcclxuICAgIG5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcclxuXHJcbiAgICBuYW1lRGl2LmFwcGVuZENoaWxkKG5hbWVMYWJlbCk7XHJcbiAgICBuYW1lRGl2LmFwcGVuZENoaWxkKG5hbWVJbnB1dCk7XHJcblxyXG4gICAgcmV0dXJuIG5hbWVEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVtYWlsRGl2KCkge1xyXG4gICAgY29uc3QgZW1haWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVtYWlsRGl2LmNsYXNzTGlzdC5hZGQoJ3VzZXItZW1haWwnKTtcclxuXHJcbiAgICBjb25zdCBlbWFpbExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGVtYWlsTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAndXNlci1lbWFpbCcpO1xyXG4gICAgZW1haWxMYWJlbC5hcHBlbmQoJ0VtYWlsOicpO1xyXG5cclxuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgZW1haWxJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnZW1haWwnKTtcclxuICAgIGVtYWlsSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICd1c2VyLWVtYWlsJyk7XHJcblxyXG4gICAgZW1haWxEaXYuYXBwZW5kQ2hpbGQoZW1haWxMYWJlbCk7XHJcbiAgICBlbWFpbERpdi5hcHBlbmRDaGlsZChlbWFpbElucHV0KTtcclxuXHJcbiAgICByZXR1cm4gZW1haWxEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRleHRBcmVhKCkge1xyXG4gICAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xyXG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCduYW1lJywgJ21lc3NhZ2UnKTtcclxuICAgIHRleHRBcmVhLnNldEF0dHJpYnV0ZSgnaWQnLCAnbWVzc2FnZScpO1xyXG4gICAgdGV4dEFyZWEuc2V0QXR0cmlidXRlKCdjb2xzJywgJzMwJyk7XHJcbiAgICB0ZXh0QXJlYS5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCAnMTAnKTtcclxuICAgIHRleHRBcmVhLmFwcGVuZCgnVHlwZSB5b3VyIG1lc3NhZ2UuLi4nKTtcclxuXHJcbiAgICByZXR1cm4gdGV4dEFyZWE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvcm1CdXR0b24oKSB7XHJcbiAgICBjb25zdCBmb3JtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBmb3JtQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdyZXNldCcpO1xyXG4gICAgZm9ybUJ1dHRvbi5hcHBlbmQoJ1N1Ym1pdCcpO1xyXG5cclxuICAgIHJldHVybiBmb3JtQnV0dG9uO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGb3JtO1xyXG4iLCJpbXBvcnQgcmVuZGVyVGVtcGxhdGUgZnJvbSBcIi4vdGVtcGxhdGVcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFib3V0U2VjdGlvbigpIHtcclxuICAgIGNvbnN0IGFib3V0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhYm91dERpdi5jbGFzc0xpc3QuYWRkKCdhYm91dCcpO1xyXG5cclxuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUFib3V0SDEoKSk7XHJcbiAgICBhYm91dERpdi5hcHBlbmRDaGlsZChjcmVhdGVDaGVmSW1nKCkpO1xyXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXRQYXJhKCkpO1xyXG4gICAgYWJvdXREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXRIMigpKTtcclxuICAgIGFib3V0RGl2LmFwcGVuZENoaWxkKGNyZWF0ZU9yZGVyQnRuKCkpO1xyXG5cclxuICAgIHJldHVybiBhYm91dERpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQWJvdXRIMSgpIHtcclxuICAgIGNvbnN0IGFib3V0SDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgYWJvdXRIMS5hcHBlbmQoJ1dlbGNvbWUgISEhJyk7XHJcbiAgICByZXR1cm4gYWJvdXRIMTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ2hlZkltZygpIHtcclxuICAgIGNvbnN0IHN1c2hpQ2hlZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgc3VzaGlDaGVmLnNyYyA9ICcuLi9zcmMvaW1hZ2VzL1Rhbm9zaGlpLXN1c2hpLWNoZWYuanBnJztcclxuICAgIHN1c2hpQ2hlZi5hbHQgPSAnU3VzaGkgQ2hlZic7XHJcbiAgICBzdXNoaUNoZWYuc2V0QXR0cmlidXRlKCdpZCcsICdzdXNoaS1jaGVmJyk7XHJcbiAgICByZXR1cm4gc3VzaGlDaGVmO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVBYm91dFBhcmEoKSB7XHJcbiAgICBjb25zdCBhYm91dFBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBhYm91dFBhcmEuY2xhc3NMaXN0LmFkZCgnYWJvdXQtdHh0Jyk7XHJcbiAgICBhYm91dFBhcmEuYXBwZW5kKCdIYW5kLUNyYWZ0ZWQgU3VzaGkgd2l0aCBmcmVzaGx5IHBpY2tlZCwgb3JnYW5pYyBpbmdyZWRpZW50cyEnKTtcclxuICAgIHJldHVybiBhYm91dFBhcmE7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFib3V0SDIoKSB7XHJcbiAgICBjb25zdCBhYm91dEgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcclxuICAgIGFib3V0SDIuYXBwZW5kKCdFc3QuIDIwMjMnKTtcclxuICAgIHJldHVybiBhYm91dEgyO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVPcmRlckJ0bigpIHtcclxuICAgIGNvbnN0IG9yZGVyQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICBvcmRlckJ0bi50eXBlID0gJ2J1dHRvbic7XHJcbiAgICBvcmRlckJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ29yZGVyLWJ0bicpO1xyXG4gICAgb3JkZXJCdG4uYXBwZW5kKCdPcmRlciBOb3cnKTtcclxuXHJcbiAgICBvcmRlckJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHJlbmRlclRlbXBsYXRlKCdNZW51JykpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIG9yZGVyQnRuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVBYm91dFNlY3Rpb247IiwiaW1wb3J0IG1lbnUgZnJvbSAnLi9tZW51JztcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnVTZWN0aW9uKCkge1xyXG4gICAgY29uc3QgbWVudURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWVudURpdi5jbGFzc0xpc3QuYWRkKCdtZW51Jyk7XHJcblxyXG4gICAgLy8gQXBwZW5kIGFsbCBtZW51IHNlY3Rpb25zIGFuZCBoZWFkZXJzIC8vXHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUFwcHNIZWFkZXIoKSk7XHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUFwcHNEaXYoKSk7XHJcblxyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVTdXNoaUhlYWRlcigpKTtcclxuICAgIG1lbnVEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlU3VzaGlEaXYoKSk7XHJcblxyXG4gICAgbWVudURpdi5hcHBlbmRDaGlsZChjcmVhdGVCZXZlcmFnZXNIZWFkZXIoKSk7XHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZUJldmVyYWdlc0RpdigpKTtcclxuXHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZURlc3NlcnRIZWFkZXIoKSk7XHJcbiAgICBtZW51RGl2LmFwcGVuZENoaWxkKGNyZWF0ZURlc3NlcnREaXYoKSk7XHJcblxyXG4gICAgcmV0dXJuIG1lbnVEaXY7XHJcbn1cclxuXHJcbi8vIEFwcGV0aXplcnMgLy9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFwcHNIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBhcHBzSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGFwcHNIZWFkZXIuYXBwZW5kKCdBcHBldGl6ZXJzJyk7XHJcblxyXG4gICAgcmV0dXJuIGFwcHNIZWFkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUFwcHNEaXYoKSB7XHJcbiAgICBjb25zdCBhcHBzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBhcHBzRGl2LmNsYXNzTGlzdC5hZGQoJ2FwcGV0aXplcnMnKTtcclxuXHJcbiAgICAvLyBJdGVyYXRlIHRocnUgYWxsIGl0ZW1zIGluIGFwcGV0aXplciBzZWN0aW9uIGFuZCBhcHBlbmQgdG8gZGl2IC8vXHJcbiAgICBmb3IgKGxldCBpdGVtIGluIG1lbnUuYXBwZXRpemVycykge1xyXG4gICAgICAgIGFwcHNEaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZERpdihpdGVtKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXBwc0RpdjtcclxufVxyXG5cclxuLy8gU3VzaGkgLy9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVN1c2hpSGVhZGVyKCkge1xyXG4gICAgY29uc3Qgc3VzaGlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgc3VzaGlIZWFkZXIuYXBwZW5kKCdTdXNoaSBSb2xscycpO1xyXG5cclxuICAgIHJldHVybiBzdXNoaUhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3VzaGlEaXYoKSB7XHJcbiAgICBjb25zdCBzdXNoaURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgc3VzaGlEaXYuY2xhc3NMaXN0LmFkZCgnc3VzaGknKTtcclxuXHJcbiAgICBmb3IgKGxldCBpdGVtIGluIG1lbnUuc3VzaGkpIHtcclxuICAgICAgICBzdXNoaURpdi5hcHBlbmRDaGlsZChjcmVhdGVGb29kRGl2KGl0ZW0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdXNoaURpdjtcclxufVxyXG5cclxuLy8gQmV2ZXJhZ2VzIC8vXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVCZXZlcmFnZXNIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBiZXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xyXG4gICAgYmV2SGVhZGVyLmFwcGVuZCgnQmV2ZXJhZ2VzJyk7XHJcblxyXG4gICAgcmV0dXJuIGJldkhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlQmV2ZXJhZ2VzRGl2KCkge1xyXG4gICAgY29uc3QgYmV2RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBiZXZEaXYuY2xhc3NMaXN0LmFkZCgnYmV2ZXJhZ2VzJyk7XHJcblxyXG4gICAgZm9yIChsZXQgaXRlbSBpbiBtZW51LmJldmVyYWdlcykge1xyXG4gICAgICAgIGJldkRpdi5hcHBlbmRDaGlsZChjcmVhdGVGb29kRGl2KGl0ZW0pKTtcclxuICAgIH1cclxuICAgIHJldHVybiBiZXZEaXY7XHJcbn1cclxuXHJcbi8vIERlc3NlcnQgLy9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURlc3NlcnRIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBkZXNzZXJ0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIGRlc3NlcnRIZWFkZXIuYXBwZW5kKCdEZXNzZXJ0Jyk7XHJcblxyXG4gICAgcmV0dXJuIGRlc3NlcnRIZWFkZXI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURlc3NlcnREaXYoKSB7XHJcbiAgICBjb25zdCBkZXNzZXJ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBkZXNzZXJ0RGl2LmNsYXNzTGlzdC5hZGQoJ2Rlc3NlcnQnKTtcclxuXHJcbiAgICBmb3IgKGxldCBpdGVtIGluIG1lbnUuZGVzc2VydCkge1xyXG4gICAgICAgIGRlc3NlcnREaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZERpdihpdGVtKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGVzc2VydERpdjtcclxufVxyXG5cclxuLy8gRm9vZERpdiBmdW5jIGFuZCBhbGwgdW5kZXJseWluZyBmdW5jIHVzZWQgZm9yIGFwcHMsIHN1c2hpLCBiZXZlcmFnZXMsIGFuZCBkZXNlcnQgc2VjdGlvbnMgLy9cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb2REaXYoZm9vZCkge1xyXG4gICAgY29uc3QgZm9vZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZm9vZERpdi5jbGFzc0xpc3QuYWRkKGAke2Zvb2R9YCk7XHJcblxyXG4gICAgZm9vZERpdi5hcHBlbmRDaGlsZChjcmVhdGVGb29kSW5mbyhmb29kKSk7XHJcbiAgICBmb29kRGl2LmFwcGVuZENoaWxkKGNyZWF0ZUZvb2REZXNjcmlwdGlvbihmb29kKSk7XHJcblxyXG4gICAgcmV0dXJuIGZvb2REaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb2RJbmZvKGZvb2QpIHtcclxuICAgIGNvbnN0IGluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGluZm9EaXYuY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xyXG5cclxuICAgIGluZm9EaXYuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vZEltZyhmb29kKSk7XHJcbiAgICBpbmZvRGl2LmFwcGVuZENoaWxkKGNyZWF0ZU5hbWVQcmljZURpdihmb29kKSk7XHJcblxyXG4gICAgcmV0dXJuIGluZm9EaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb2RJbWcoZm9vZCkge1xyXG4gICAgY29uc3QgZm9vZEltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZm9vZEltZy5zcmMgPSBgLi4vc3JjL2ltYWdlcy9tZW51LWltYWdlcy8ke2Zvb2R9LmpwZ2A7XHJcbiAgICBmb29kSW1nLmFsdCA9IGAke2Zvb2R9YDtcclxuICAgIGZvb2RJbWcuc2V0QXR0cmlidXRlKCdpZCcsIGAke2Zvb2R9YCk7XHJcblxyXG4gICAgcmV0dXJuIGZvb2RJbWc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5hbWVQcmljZURpdihmb29kKSB7XHJcbiAgICBjb25zdCBuYW1lUHJpY2VEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5hbWVQcmljZURpdi5jbGFzc0xpc3QuYWRkKCduYW1lLXByaWNlJyk7XHJcblxyXG4gICAgY29uc3QgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgZm9vZE5hbWUuYXBwZW5kKGZvb2QubmFtZSk7XHJcbiAgICBuYW1lUHJpY2VEaXYuYXBwZW5kQ2hpbGQoZm9vZE5hbWUpO1xyXG5cclxuICAgIGNvbnN0IGZvb2RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XHJcbiAgICBmb29kUHJpY2UuYXBwZW5kKGAkICR7Zm9vZC5wcmljZX1gKTtcclxuICAgIG5hbWVQcmljZURpdi5hcHBlbmRDaGlsZChmb29kUHJpY2UpO1xyXG5cclxuICAgIHJldHVybiBuYW1lUHJpY2VEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUZvb2REZXNjcmlwdGlvbihmb29kKSB7XHJcbiAgICBjb25zdCBkZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKTtcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBkZXNjcmlwdGlvblBhcmEuYXBwZW5kKGZvb2QuZGVzY3JpcHRpb24pO1xyXG4gICAgZGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QYXJhKTtcclxuICAgIFxyXG4gICAgcmV0dXJuIGRlc2NyaXB0aW9uRGl2O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51U2VjdGlvbjsiLCIvLyBDbGFzcyBmb3IgbWVudSBpdGVtcyAvL1xyXG5jbGFzcyBNZW51SXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBwcmljZSwgZGVzY3JpcHRpb24pIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBhcHBldGl6ZXJzID0ge1xyXG4gICAgcmljZTogbmV3IE1lbnVJdGVtKCdSaWNlJywgMy41MCwgJ1N0ZWFtaW5nIGhvdCBib3dsIG9mIHdoaXRlIEphc21pbmUgcmljZScpLFxyXG4gICAgc2h1bWFpOiBuZXcgTWVudUl0ZW0oJ1NodW1haScsIDMuOTksICdTdGVhbWVkIHNocmltcCBkdW1wbGluZ3MnKSxcclxuICAgIGVkYW1hbWU6IG5ldyBNZW51SXRlbSgnRWRhbWFtZScsIDIuOTksICdTdGVhbWVkIHNveWJlYW4gd2l0aCBzZWEgc2FsdCcpLFxyXG4gICAgc2FsYWQ6IG5ldyBNZW51SXRlbSgnSG91c2UgU2FsYWQnLCAzLjk5LCAnUm9tYWluZSBsZXR0dWNlLCBjYXJyb3QsIHRvbWF0bywgY3VjdW1iZXIgd2l0aCBnaW5nZXIgZHJlc3NpbmcnKSwgXHJcbn07XHJcblxyXG5jb25zdCBzdXNoaSA9IHtcclxuICAgIHZlZ2FzOiBuZXcgTWVudUl0ZW0oJ0xhcyBWZWdhcycsIDkuOTksICdDcmFiIG1lYXQsIGN1Y3VtYmVyLCBhdm9jYWRvLCBzaHJlZGRlZCBjcmFiIHN0aWNrLCBzcGljeSBtYXlvLCBzd2VldCBjcnVuY2gnKSxcclxuICAgIGR5bmFtaXRlOiBuZXcgTWVudUl0ZW0oJ0R5bmFtaXRlIChCYWtlZCknLCAxMC45OSwgJ0NyYWIgbWVhdCwgY3VjdW1iZXIsIGF2b2NhZG8sIHdoaXRlIGZpc2gsIGNyYWIsIHNocmltcCB3aXRoIHNwaWN5IG1heW8sIHN3ZWV0JyksXHJcbiAgICB2ZWdnaWU6IG5ldyBNZW51SXRlbSgnVmVnZ2llIFJvbGwnLCA4Ljk5LCAnQ3VjdW1iZXIsIGxldHR1Y2UsIHRvbWF0bywgc2xpY2UgYXZvY2Fkbywgc3BpY3kgbWF5bywgd2hpdGUgY3J1bmNoJyksXHJcbiAgICBpbXBlcmlhbDogbmV3IE1lbnVJdGVtKCdJbXBlcmlhbCBSb2xsJywgMTMuOTksICdTcGljeSB0dW5hLCBzaHJpbXAgdGVtcHVyYSwgY3JlYW0gY2hlZXNlLCBhdm9jYWRvLCBzYWxtb24sIGNyYWIgbWVhdCB3aXRoIHNwaWN5IG1heW8sIHN3ZWV0JyksXHJcbn07XHJcblxyXG5jb25zdCBiZXZlcmFnZXMgPSB7XHJcbiAgICB0ZWE6IG5ldyBNZW51SXRlbSgnSG90IFRlYScsIDIuNTAsICdHcmVlbiwgQmxhY2ssIEphc21pbmUsIENoYW1vbWlsZScpLFxyXG4gICAgc29kYTogbmV3IE1lbnVJdGVtKCdGb3VudGFpbiBEcmlua3MnLCAyLjk5LCAnUGVwc2ksIE10LiBEZXcsIExlbW9uYWRlLCBSb290IEJlZXIsIEljZWQgVGVhLCBEci4gUGVwcGVyJyksXHJcbiAgICBiZWVyOiBuZXcgTWVudUl0ZW0oJ0JlZXInLCAzLjUwLCAnU2FwcG9ybywgS2lyaW4sIEJsdWUgTW9vbiwgQ29yb25hJyksXHJcbiAgICBzYWtlOiBuZXcgTWVudUl0ZW0oJ1Nha2UnLCA4LjAwLCAnU2hpcm8gc2FzYSwgbmlnb3JpLCBwZWFjaCBzcGFya2xpbmcsIHBpbmVhcHBsZSBzcGFya2xpbmcsIHl1enUgc3BhcmtsaW5nJyksXHJcbn07XHJcblxyXG5jb25zdCBkZXNzZXJ0ID0ge1xyXG4gICAgaWNlQ3JlYW06IG5ldyBNZW51SXRlbSgnSWNlIENyZWFtJywgNS45OSwgJ1ZhbmlsbGEsIENob2NvbGF0ZSwgU3RyYXdiZXJyeSwgTWludCwgQ29va2llcyBuXFwnIENyZW1lJyksXHJcbiAgICBtb2NoaTogbmV3IE1lbnVJdGVtKCdNb2NoaSBJY2UgQ3JlYW0nLCA2Ljk5LCAnVmFuaWxsYSwgQ2hvY29sYXRlLCBTdHJhd2JlcnJ5LCBHcmVlbiBUZWEnKSxcclxufTtcclxuXHJcbmNvbnN0IG1lbnUgPSB7YXBwZXRpemVycywgc3VzaGksIGJldmVyYWdlcywgZGVzc2VydH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW51OyIsImltcG9ydCBjcmVhdGVBYm91dFNlY3Rpb24gZnJvbSAnLi9ob21lJztcclxuaW1wb3J0IGNyZWF0ZU1lbnVTZWN0aW9uIGZyb20gJy4vbWVudS1yZW5kZXInO1xyXG5pbXBvcnQgY3JlYXRlQ29udGFjdFNlY3Rpb24gZnJvbSAnLi9jb250YWN0JztcclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRlbXBsYXRlKHBhZ2UpIHtcclxuICAgIC8vIFJlbW92ZSBhbGwgY2hpbGQgbm9kZXMgZnJvbSBib2R5IC8vXHJcbiAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xyXG4gICAgd2hpbGUgKGJvZHkuZmlyc3RDaGlsZCkge1xyXG4gICAgICAgIGJvZHkucmVtb3ZlQ2hpbGQoYm9keS5maXJzdENoaWxkKTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRlbXBsYXRlID0gY3JlYXRlQ29udGVudChwYWdlKTtcclxuXHJcbiAgICByZXR1cm4gdGVtcGxhdGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQocGFnZSkge1xyXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGVudC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbnRlbnQnKTtcclxuXHJcbiAgICBjb25zdCBuYXZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5hdkRpdi5jbGFzc0xpc3QuYWRkKCduYXYnKTtcclxuICAgIG5hdkRpdi5hcHBlbmRDaGlsZChjcmVhdGVOYXYoKSk7XHJcblxyXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgYmFja2dyb3VuZC5zcmMgPSAnLi4vc3JjL2ltYWdlcy9zdXNoaS1yZXN0YXVyYW50LWJnLmpwZyc7XHJcbiAgICBiYWNrZ3JvdW5kLmFsdCA9ICdKYXBhbmVzZSBSZXN0YXVyYW50IEJhY2tncm91bmQnO1xyXG4gICAgYmFja2dyb3VuZC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1c2hpLWJnJyk7XHJcblxyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChuYXZEaXYpO1xyXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcclxuXHJcbiAgICAvLyBMb2FkIHBhZ2UgYmFzZWQgb24gYXJndW1lbnQgcGFzc2VkIGluXHJcbiAgICBpZiAocGFnZSA9PT0gdW5kZWZpbmVkIHx8IHBhZ2UgPT09ICdIb21lJykge1xyXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQWJvdXRTZWN0aW9uKCkpO1xyXG4gICAgfSBlbHNlIGlmIChwYWdlID09PSAnTWVudScpIHtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZU1lbnVTZWN0aW9uKCkpO1xyXG4gICAgfSBlbHNlIGlmIChwYWdlID09PSAnQ29udGFjdCcpIHtcclxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUNvbnRhY3RTZWN0aW9uKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjb250ZW50O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXYoKSB7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcclxuICAgIG5hdi5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSk7XHJcbiAgICBuYXYuYXBwZW5kQ2hpbGQoY3JlYXRlVGFicygpKTtcclxuXHJcbiAgICByZXR1cm4gbmF2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XHJcbiAgICAvLyBjcmVhdGUgZGl2IHRvIHNhbmR3aWNoIGhlYWRlclxyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XHJcblxyXG4gICAgLy8gY3JlYXRlIHN1c2hpIGljb24gaW1nXHJcbiAgICBjb25zdCBzdXNoaUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIHN1c2hpSWNvbi5zcmMgPSAnLi4vc3JjL2ltYWdlcy9zdXNoaS1pY29uLnBuZyc7XHJcbiAgICBzdXNoaUljb24uYWx0ID0gJ1N1c2hpIFJvbGwnO1xyXG4gICAgc3VzaGlJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VzaGktaWNvbicpO1xyXG5cclxuICAgIC8vIGNyZWF0ZSBoMSBuYW1lIG9mIHJlc3RhdXJhbnRcclxuICAgIGNvbnN0IHJlc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcclxuICAgIHJlc3ROYW1lLmFwcGVuZCgnU29uaWMgU3VzaGknKTtcclxuXHJcbiAgICAvLyBBcHBlbmQgZWxlbWVudHMgdG8gaGVhZGVyIGRpdiBhbmQgcmV0dXJuXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc3VzaGlJY29uKTtcclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChyZXN0TmFtZSk7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFicygpIHtcclxuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xyXG5cclxuICAgIGxldCB0YWJzID0gWydIb21lJywgJ01lbnUnLCAnQ29udGFjdCddO1xyXG4gICAgZm9yIChsZXQgdGFiIG9mIHRhYnMpIHtcclxuICAgICAgICBsaXN0LmFwcGVuZENoaWxkKGNyZWF0ZUxpbmsodGFiKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxpc3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUxpbmsobmFtZSkge1xyXG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xyXG4gICAgXHJcbiAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgbGluay5zZXRBdHRyaWJ1dGUoJ2lkJywgbmFtZSk7XHJcbiAgICBsaW5rLmFwcGVuZChuYW1lKTtcclxuXHJcbiAgICAvLyBBZGQgZXZlbnQgbGlzdGVuZXIgZGVwZW5kaW5nIG9uIGVhY2ggdGFiIG5hbWUgLy8gXHJcbiAgICBpZiAobmFtZSA9PT0gJ0hvbWUnKSB7XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJUZW1wbGF0ZSgpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ01lbnUnKSB7XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJUZW1wbGF0ZSgnTWVudScpKTtcclxuICAgICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gJ0NvbnRhY3QnKSB7XHJcbiAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZW5kZXJUZW1wbGF0ZSgnQ29udGFjdCcpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBsaXN0SXRlbS5hcHBlbmRDaGlsZChsaW5rKTtcclxuICAgIHJldHVybiBsaXN0SXRlbTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyVGVtcGxhdGU7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==