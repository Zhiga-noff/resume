/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/app.js":
/*!*******************!*\
  !*** ./js/app.js ***!
  \*******************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions */ "./js/modules/functions.js");
/* harmony import */ var _modules_buttonMove__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/buttonMove */ "./js/modules/buttonMove.js");
/* harmony import */ var _modules_animateElements__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/animateElements */ "./js/modules/animateElements.js");
/* harmony import */ var _modules_rename_description_in_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/rename-description-in-menu */ "./js/modules/rename-description-in-menu.js");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _util_createHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/createHeader */ "./js/util/createHeader.js");
/* harmony import */ var _util_createFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/createFooter */ "./js/util/createFooter.js");





// Подключение стилей


// Подключение шапки


//Подключение футтера

_modules_functions__WEBPACK_IMPORTED_MODULE_0__.isWebp();
(0,_modules_buttonMove__WEBPACK_IMPORTED_MODULE_1__.buttonHoverAnimation)();
(0,_modules_animateElements__WEBPACK_IMPORTED_MODULE_2__.addAnimateInDOM)();
(0,_util_createHeader__WEBPACK_IMPORTED_MODULE_5__.createHeader)();
(0,_util_createFooter__WEBPACK_IMPORTED_MODULE_6__.createFooter)();
(0,_modules_rename_description_in_menu__WEBPACK_IMPORTED_MODULE_3__.renameDescription)();
var burger = document.querySelector('.header__burger');
var menu = document.querySelectorAll('.header__menu');
var logo = document.querySelector('.logo');
var bodyElement = document.body;
(0,_modules_animateElements__WEBPACK_IMPORTED_MODULE_2__.recolorHeaderAndBurger)(logo, burger);
// Самостоятельная функция для бургер меню
burger.addEventListener('click', function (event) {
  menu.forEach(function (element) {
    return element.classList.toggle('active');
  });
  logo.classList.toggle('hidden');
  bodyElement.classList.toggle('lock');
  burger.classList.toggle('active');
});

/***/ }),

/***/ "./js/modules/animateElements.js":
/*!***************************************!*\
  !*** ./js/modules/animateElements.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addAnimateInDOM": function() { return /* binding */ addAnimateInDOM; },
/* harmony export */   "recolorHeaderAndBurger": function() { return /* binding */ recolorHeaderAndBurger; }
/* harmony export */ });
function addAnimateInDOM() {
  var animItems = document.querySelectorAll('.animate');
  if (animItems.length > 0) {
    var animateScroll = function animateScroll() {
      animItems.forEach(function (animItem) {
        var animItemHeight = animItem.offsetHeight;
        var animItemOffset = offset(animItem).top;
        var animStart = 4;
        var animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
          animItem.classList.add('active');
        } else {
          if (!animItem.classList.contains('no-anim-again')) {
            animItem.classList.remove('active');
          }
        }
      });
    };
    window.addEventListener('scroll', animateScroll, true);
    animateScroll();
  }
  function offset(el) {
    var rect = el.getBoundingClientRect();
    var scrollLeft = window.scrollY || document.documentElement.scrollLeft;
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  }
}
function recolorHeaderAndBurger(logo, burger) {
  var animItems = document.querySelectorAll('.recolor-header');
  if (animItems.length > 0) {
    var animateScroll = function animateScroll() {
      animItems.forEach(function (animItem) {
        var animItemHeight = animItem.offsetHeight;
        var animItemOffset = offset(animItem).top;
        var animStart = 1;
        var animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
          burger.classList.add('white-burger');
          logo.classList.add('white-header');
        } else {
          burger.classList.remove('white-burger');
          logo.classList.remove('white-header');
        }
      });
    };
    window.addEventListener('scroll', animateScroll, true);
    animateScroll();
  }
  function offset(el) {
    var rect = el.getBoundingClientRect();
    var scrollLeft = window.scrollY || document.documentElement.scrollLeft;
    var scrollTop = window.scrollY || document.documentElement.scrollTop;
    return {
      top: rect.top + scrollTop,
      left: rect.left + scrollLeft
    };
  }
}

/***/ }),

/***/ "./js/modules/buttonMove.js":
/*!**********************************!*\
  !*** ./js/modules/buttonMove.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonHoverAnimation": function() { return /* binding */ buttonHoverAnimation; }
/* harmony export */ });
function buttonHoverAnimation() {
  // Получаю блок в котором находят нужные кнопки
  var blockSelector = document.querySelectorAll('.template-block__row');
  blockSelector.forEach(function (item) {
    // Получаю кнопку внутри блока
    var buttonSelector = item.querySelector('.button-move');

    // Функция для mousemove
    function mousemoveFn(event) {
      // Получаю координату X и Y для левого верхнего края кнопки
      var buttonPosX = event.currentTarget.getBoundingClientRect().left;
      var buttonPosY = event.currentTarget.getBoundingClientRect().top;

      // Получаю положение мыши внутри элемента от левого верхнего края
      // (текущая позиция мыши по оси X и Y - координата кнопки по оси x)
      var xPosOfMouse = event.clientX - buttonPosX;
      var yPosOfMouse = event.clientY - buttonPosY;

      // Получить положение мыши относительно центра кнопки
      // Позиция мыши внутри элемента - ширина кнопки / 2
      // Чтобы получить положительное или отрицательное движение
      var xPosOfMouseInsideButton = xPosOfMouse - item.offsetWidth / 1.8;
      var yPosOfMouseInsideButton = yPosOfMouse - item.offsetHeight;

      // Разделитель текста кнопки для увеличения или уменьшения пути текста
      // в моем случае методом подбора подобрал центр кнопки
      var animationDivider = 1.2;

      // Анимация текста кнопки в положительном или отрицательном направлении от центра
      TweenMax.to(buttonSelector, 2, {
        x: xPosOfMouseInsideButton / animationDivider,
        y: yPosOfMouseInsideButton / animationDivider,
        ease: Power3.easeOut
      });
    }

    // функция для mouseleave
    function mouseleaveFn() {
      // сбрасывается анимации кнопки в исходное положение (в центре)
      TweenMax.to(buttonSelector, 1, {
        x: 0,
        ease: Power3.easeOut
      });
    }
    item.addEventListener('mousemove', mousemoveFn);
    item.addEventListener('mouseleave', mouseleaveFn);
  });
}

/***/ }),

/***/ "./js/modules/functions.js":
/*!*********************************!*\
  !*** ./js/modules/functions.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isWebp": function() { return /* binding */ isWebp; }
/* harmony export */ });
function isWebp() {
  function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2);
    };
    webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
  }
  testWebP(function (support) {
    if (support == true) {
      document.querySelector('body').classList.add('webp');
    } else {
      document.querySelector('body').classList.add('no-webp');
    }
  });
}

/***/ }),

/***/ "./js/modules/rename-description-in-menu.js":
/*!**************************************************!*\
  !*** ./js/modules/rename-description-in-menu.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renameDescription": function() { return /* binding */ renameDescription; }
/* harmony export */ });
/* harmony import */ var _util_page_info_arr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/page-info-arr */ "./js/util/page-info-arr.js");

function renameDescription() {
  // const headerLinks = document.querySelectorAll('.header__link');
  var menuList = document.querySelector('.header__menu-list');
  var infoPage = document.querySelector('.header__info-about-page');
  menuList.addEventListener('mouseover', function (event) {
    infoPage.classList.add('selected');
    setTimeout(listener(event, _util_page_info_arr__WEBPACK_IMPORTED_MODULE_0__.pageMenu, infoPage), 3000);
    // listener(event, pageMenu, infoPage);
    // infoPage.classList.remove('selected');
  });

  menuList.addEventListener('mouseout', function () {
    infoPage.classList.add('selected');
    infoPage.textContent = '';
    infoPage.insertAdjacentHTML('beforeend', "\n        <p class='header__number-page'>01/</p>\n        <p class='header__text-info'>\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043C\u043E\u0435\u0433\u043E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E</p>");
  });
  infoPage.classList.remove('selected');
}
function listener(event, array, info) {
  var target = event.target;
  var parent = target.closest('.header__link');
  if (!parent) {
    return;
  }
  array.forEach(function (element) {
    if (parent.id === element.id) {
      info.textContent = '';
      info.insertAdjacentHTML('beforeend', "\n        <p class='header__number-page'>".concat(element.number, "</p>\n        <p class='header__text-info'>").concat(element.textInfo, "</p>\n        "));
    }
  });
  info.classList.remove('selected');
}

/***/ }),

/***/ "./js/util/createFooter.js":
/*!*********************************!*\
  !*** ./js/util/createFooter.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": function() { return /* binding */ createFooter; }
/* harmony export */ });
function createFooter() {
  var wrapper = document.querySelector('.wrapper');
  wrapper.insertAdjacentHTML('beforeend', "\n  <footer class='footer footer_dark'>\n  <nav class='footer__row'>\n    <div class='footer__block-with-link'>\n      <h3 class='footer__title'>01/ \u043A\u0430\u0440\u0442\u0430 \u0441\u0430\u0439\u0442\u0430</h3>\n      <ul class='footer__list'>\n        <li class='footer__link'><a href=''>\u0413\u043B\u0430\u0432\u043D\u0430\u044F</a></li>\n        <li class='footer__link'><a href=''>\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E</a></li>\n        <li class='footer__link'><a href=''>\u041E\u0431\u043E \u043C\u043D\u0435</a></li>\n      </ul>\n    </div>\n    <div class='footer__block-with-link'>\n      <h3 class='footer__title'>02/ \u0421\u043E\u0446. \u0441\u0435\u0442\u0438</h3>\n      <ul class='footer__list'>\n        <li class='footer__link'><a href=''>HeadHunter</a></li>\n        <li class='footer__link'><a href=''>Dribbble</a></li>\n        <li class='footer__link'><a href=''>Behance</a></li>\n        <li class='footer__link'><a href=''>Instagram</a></li>\n      </ul>\n    </div>\n    <div class='footer__block-with-link'>\n      <h3 class='footer__title'>03/ \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</h3>\n      <ul class='footer__list'>\n        <li class='footer__link'><a href=''>\u0422\u0435\u043B: +7 (916) 695 49-54</a></li>\n        <li class='footer__link'><a href=''>E-mail: zhiganov_k.n@mail.ru</a></li>\n      </ul>\n    </div>\n  </nav>\n  <h2 class='footer__full-name coluna'>\u041A\u0438\u0440\u0438\u043B\u043B \u0416\u0438\u0433\u0430\u043D\u043E\u0432</h2>\n</footer>\n  ");
}

/***/ }),

/***/ "./js/util/createHeader.js":
/*!*********************************!*\
  !*** ./js/util/createHeader.js ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": function() { return /* binding */ createHeader; }
/* harmony export */ });
function createHeader() {
  var wrapper = document.querySelector('.wrapper');
  wrapper.insertAdjacentHTML('afterbegin', "\n  <header class='header' id='header'>\n  <div class='header__row'>\n    <div class='header__logo logo coluna'>\n      <a href='index.html'\n        >\u041A\u0416\n        <!-- <span class=\"logo__item\">\u0418</span>\n                           <span class=\"logo__item\">\u0420</span>\n                           <span class=\"logo__item\">\u0418</span>\n                           <span class=\"logo__item\">\u041B</span>\n                           <span class=\"logo__item\">\u041B</span> -->\n        <!-- <span class=\"logo__item\">\u0418</span>\n                           <span class=\"logo__item\">\u0413</span>\n                           <span class=\"logo__item\">\u0410</span>\n                           <span class=\"logo__item\">\u041D</span>\n                           <span class=\"logo__item\">\u041E</span>\n                           <span class=\"logo__item\">\u0412</span> -->\n      </a>\n    </div>\n    <div class='header__menu header__menu_left'>\n      <p class='header__wisw'>\u041D\u0430\u0434\u0435\u044E\u0441\u044C, \u0443 \u0442\u0435\u0431\u044F \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u0439 \u0434\u0435\u043D\u044C ;)</p>\n      <div class='header__info-about-page'>\n        <p class='header__number-page'>01/</p>\n        <p class='header__text-info'>\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043C\u043E\u0435\u0433\u043E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E</p>\n      </div>\n    </div>\n    <div class='header__menu header__menu_right'>\n      <div class='header__my-name'>\n        <p class=''>\u041A\u0438\u0440\u0438\u043B\u043B \u0416\u0438\u0433\u0430\u043D\u043E\u0432 - \u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E</p>\n      </div>\n      <ul class='header__menu-list'>\n        <li>\n          <a href='#' class='header__link active' id=\"main-item\">\n            <p class='header__number-page header__number-page_visible'>01/</p>\n            <p class='header__link-page'>\u0413\u043B\u0430\u0432\u043D\u0430\u044F</p>\n          </a>\n        </li>\n        <li>\n          <a href='#' class='header__link' id=\"portfolio-item\">\n            <p class='header__number-page header__number-page_visible'>02/</p>\n            <p class='header__link-page'>\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E</p>\n          </a>\n        </li>\n        <li>\n          <a href='#' class='header__link' id=\"about-item\">\n            <p class='header__number-page header__number-page_visible'>03/</p>\n            <p class='header__link-page'>\u041E\u0431\u043E \u043C\u043D\u0435</p>\n          </a>\n        </li>\n        <li>\n          <a href='#' class='header__link' id=\"contacts-item\">\n            <p class='header__number-page header__number-page_visible'>04/</p>\n            <p class='header__link-page'>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</p>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class='header__burger'></div>\n  </div>\n</header>\n\n  ");
}

/***/ }),

/***/ "./js/util/page-info-arr.js":
/*!**********************************!*\
  !*** ./js/util/page-info-arr.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageMenu": function() { return /* binding */ pageMenu; }
/* harmony export */ });
var pageMenu = [{
  id: 'main-item',
  number: '01/',
  textInfo: 'Главная страница моего портфолио'
}, {
  id: 'portfolio-item',
  number: '02/',
  textInfo: 'Тут вы найдете все проекты'
}, {
  id: 'about-item',
  number: '03/',
  textInfo: 'Совсем немного обо мне'
}, {
  id: 'contacts-item',
  number: '04/',
  textInfo: 'То что нужно что бы связаться'
}];

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("../node_modules/@babel/polyfill/lib/index.js"); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_babel_polyfill_lib_index_js"], function() { return __webpack_require__("./js/app.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map