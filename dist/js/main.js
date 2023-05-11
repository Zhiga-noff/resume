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
/* harmony import */ var _modules_midnight__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/midnight */ "./js/modules/midnight.js");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _util_createHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util/createHeader */ "./js/util/createHeader.js");
/* harmony import */ var _util_createFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./util/createFooter */ "./js/util/createFooter.js");





// Подключение стилей


// Подключение шапки


//Подключение футтера

_modules_functions__WEBPACK_IMPORTED_MODULE_0__.isWebp();
(0,_modules_buttonMove__WEBPACK_IMPORTED_MODULE_1__.buttonHoverAnimation)();
(0,_modules_animateElements__WEBPACK_IMPORTED_MODULE_2__.addAnimateInDOM)();
(0,_modules_midnight__WEBPACK_IMPORTED_MODULE_3__.midnight)();
(0,_util_createHeader__WEBPACK_IMPORTED_MODULE_5__.createHeader)();
(0,_util_createFooter__WEBPACK_IMPORTED_MODULE_6__.createFooter)();

// Start midnight
$(document).ready(function () {
  // Change this to the correct selector.
  $('header').midnight();
});
var burger = document.querySelector('.header__burger');
var menu = document.querySelectorAll('.header__menu');
var logo = document.querySelector('.logo');
var bodyElement = document.body;

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
/* harmony export */   "addAnimateInDOM": function() { return /* binding */ addAnimateInDOM; }
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
  console.log(blockSelector);
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

/***/ "./js/modules/midnight.js":
/*!********************************!*\
  !*** ./js/modules/midnight.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "midnight": function() { return /* binding */ midnight; }
/* harmony export */ });
function midnight() {
  /*!
   * Midnight.js 1.1.1
   * jQuery plugin to switch between multiple fixed header designs on the fly, so it looks in line with the content below it.
   * http://aerolab.github.io/midnight.js/
   *
   * Copyright (c) 2014 Aerolab <info@aerolab.co>
   *
   * Released under the MIT license
   * http://aerolab.github.io/midnight.js/LICENSE.txt
   */
  !function (t) {
    'function' == typeof define && __webpack_require__.amdO ? define(['jquery'], t) : t(jQuery);
  }(function (t) {
    var e = 0,
      s = Array.prototype.slice;
    t.cleanData = function (e) {
      return function (s) {
        var i, n, o;
        for (o = 0; null != (n = s[o]); o++) try {
          i = t._data(n, 'events'), i && i.remove && t(n).triggerHandler('remove');
        } catch (r) {}
        e(s);
      };
    }(t.cleanData), t.widget = function (e, s, i) {
      var n,
        o,
        r,
        a,
        h = {},
        d = e.split('.')[0];
      return e = e.split('.')[1], n = d + '-' + e, i || (i = s, s = t.Widget), t.expr[':'][n.toLowerCase()] = function (e) {
        return !!t.data(e, n);
      }, t[d] = t[d] || {}, o = t[d][e], r = t[d][e] = function (t, e) {
        return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new r(t, e);
      }, t.extend(r, o, {
        version: i.version,
        _proto: t.extend({}, i),
        _childConstructors: []
      }), a = new s(), a.options = t.widget.extend({}, a.options), t.each(i, function (e, i) {
        return t.isFunction(i) ? void (h[e] = function () {
          var t = function t() {
              return s.prototype[e].apply(this, arguments);
            },
            n = function n(t) {
              return s.prototype[e].apply(this, t);
            };
          return function () {
            var e,
              s = this._super,
              o = this._superApply;
            return this._super = t, this._superApply = n, e = i.apply(this, arguments), this._super = s, this._superApply = o, e;
          };
        }()) : void (h[e] = i);
      }), r.prototype = t.widget.extend(a, {
        widgetEventPrefix: o ? a.widgetEventPrefix || e : e
      }, h, {
        constructor: r,
        namespace: d,
        widgetName: e,
        widgetFullName: n
      }), o ? (t.each(o._childConstructors, function (e, s) {
        var i = s.prototype;
        t.widget(i.namespace + '.' + i.widgetName, r, s._proto);
      }), delete o._childConstructors) : s._childConstructors.push(r), t.widget.bridge(e, r), r;
    }, t.widget.extend = function (e) {
      for (var i, n, o = s.call(arguments, 1), r = 0, a = o.length; a > r; r++) for (i in o[r]) n = o[r][i], o[r].hasOwnProperty(i) && void 0 !== n && (e[i] = t.isPlainObject(n) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : n);
      return e;
    }, t.widget.bridge = function (e, i) {
      var n = i.prototype.widgetFullName || e;
      t.fn[e] = function (o) {
        var r = 'string' == typeof o,
          a = s.call(arguments, 1),
          h = this;
        return o = !r && a.length ? t.widget.extend.apply(null, [o].concat(a)) : o, r ? this.each(function () {
          var s,
            i = t.data(this, n);
          return 'instance' === o ? (h = i, !1) : i ? t.isFunction(i[o]) && '_' !== o.charAt(0) ? (s = i[o].apply(i, a), s !== i && void 0 !== s ? (h = s && s.jquery ? h.pushStack(s.get()) : s, !1) : void 0) : t.error("no such method '" + o + "' for " + e + ' widget instance') : t.error('cannot call methods on ' + e + " prior to initialization; attempted to call method '" + o + "'");
        }) : this.each(function () {
          var e = t.data(this, n);
          e ? (e.option(o || {}), e._init && e._init()) : t.data(this, n, new i(o, this));
        }), h;
      };
    }, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = {
      widgetName: 'widget',
      widgetEventPrefix: '',
      defaultElement: '<div>',
      options: {
        disabled: !1,
        create: null
      },
      _createWidget: function _createWidget(s, i) {
        i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = e++, this.eventNamespace = '.' + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
          remove: function remove(t) {
            t.target === i && this.destroy();
          }
        }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), s), this._create(), this._trigger('create', null, this._getCreateEventData()), this._init();
      },
      _getCreateOptions: t.noop,
      _getCreateEventData: t.noop,
      _create: t.noop,
      _init: t.noop,
      destroy: function destroy() {
        this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr('aria-disabled').removeClass(this.widgetFullName + '-disabled ui-state-disabled'), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass('ui-state-hover'), this.focusable.removeClass('ui-state-focus');
      },
      _destroy: t.noop,
      widget: function widget() {
        return this.element;
      },
      option: function option(e, s) {
        var i,
          n,
          o,
          r = e;
        if (0 === arguments.length) return t.widget.extend({}, this.options);
        if ('string' == typeof e) if (r = {}, i = e.split('.'), e = i.shift(), i.length) {
          for (n = r[e] = t.widget.extend({}, this.options[e]), o = 0; i.length - 1 > o; o++) n[i[o]] = n[i[o]] || {}, n = n[i[o]];
          if (e = i.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];
          n[e] = s;
        } else {
          if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
          r[e] = s;
        }
        return this._setOptions(r), this;
      },
      _setOptions: function _setOptions(t) {
        var e;
        for (e in t) this._setOption(e, t[e]);
        return this;
      },
      _setOption: function _setOption(t, e) {
        return this.options[t] = e, 'disabled' === t && (this.widget().toggleClass(this.widgetFullName + '-disabled', !!e), e && (this.hoverable.removeClass('ui-state-hover'), this.focusable.removeClass('ui-state-focus'))), this;
      },
      enable: function enable() {
        return this._setOptions({
          disabled: !1
        });
      },
      disable: function disable() {
        return this._setOptions({
          disabled: !0
        });
      },
      _on: function _on(e, s, i) {
        var n,
          o = this;
        'boolean' != typeof e && (i = s, s = e, e = !1), i ? (s = n = t(s), this.bindings = this.bindings.add(s)) : (i = s, s = this.element, n = this.widget()), t.each(i, function (i, r) {
          function a() {
            return e || o.options.disabled !== !0 && !t(this).hasClass('ui-state-disabled') ? ('string' == typeof r ? o[r] : r).apply(o, arguments) : void 0;
          }
          'string' != typeof r && (a.guid = r.guid = r.guid || a.guid || t.guid++);
          var h = i.match(/^([\w:-]*)\s*(.*)$/),
            d = h[1] + o.eventNamespace,
            l = h[2];
          l ? n.delegate(l, d, a) : s.bind(d, a);
        });
      },
      _off: function _off(e, s) {
        s = (s || '').split(' ').join(this.eventNamespace + ' ') + this.eventNamespace, e.unbind(s).undelegate(s), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get());
      },
      _delay: function _delay(t, e) {
        function s() {
          return ('string' == typeof t ? i[t] : t).apply(i, arguments);
        }
        var i = this;
        return setTimeout(s, e || 0);
      },
      _hoverable: function _hoverable(e) {
        this.hoverable = this.hoverable.add(e), this._on(e, {
          mouseenter: function mouseenter(e) {
            t(e.currentTarget).addClass('ui-state-hover');
          },
          mouseleave: function mouseleave(e) {
            t(e.currentTarget).removeClass('ui-state-hover');
          }
        });
      },
      _focusable: function _focusable(e) {
        this.focusable = this.focusable.add(e), this._on(e, {
          focusin: function focusin(e) {
            t(e.currentTarget).addClass('ui-state-focus');
          },
          focusout: function focusout(e) {
            t(e.currentTarget).removeClass('ui-state-focus');
          }
        });
      },
      _trigger: function _trigger(e, s, i) {
        var n,
          o,
          r = this.options[e];
        if (i = i || {}, s = t.Event(s), s.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), s.target = this.element[0], o = s.originalEvent) for (n in o) n in s || (s[n] = o[n]);
        return this.element.trigger(s, i), !(t.isFunction(r) && r.apply(this.element[0], [s].concat(i)) === !1 || s.isDefaultPrevented());
      }
    }, t.each({
      show: 'fadeIn',
      hide: 'fadeOut'
    }, function (e, s) {
      t.Widget.prototype['_' + e] = function (i, n, o) {
        'string' == typeof n && (n = {
          effect: n
        });
        var r,
          a = n ? n === !0 || 'number' == typeof n ? s : n.effect || s : e;
        n = n || {}, 'number' == typeof n && (n = {
          duration: n
        }), r = !t.isEmptyObject(n), n.complete = o, n.delay && i.delay(n.delay), r && t.effects && t.effects.effect[a] ? i[e](n) : a !== e && i[a] ? i[a](n.duration, n.easing, o) : i.queue(function (s) {
          t(this)[e](), o && o.call(i[0]), s();
        });
      };
    }), t.widget;
  }), function (t) {
    'use strict';

    t.widget('aerolab.midnight', {
      options: {
        headerClass: 'midnightHeader',
        innerClass: 'midnightInner',
        defaultClass: 'default',
        classPrefix: '',
        sectionSelector: 'midnight'
      },
      _headers: {},
      _headerInfo: {
        top: 0,
        height: 0
      },
      _$sections: [],
      _sections: [],
      _scrollTop: 0,
      _documentHeight: 0,
      _transformMode: !1,
      refresh: function refresh() {
        this._headerInfo = {
          top: 0,
          height: this.element.outerHeight()
        }, this._$sections = t('[data-' + this.options.sectionSelector + ']:not(:hidden)'), this._sections = [], this._setupHeaders(), this.recalculate();
      },
      _create: function _create() {
        var e = this;
        this._scrollTop = window.pageYOffset || document.documentElement.scrollTop, this._documentHeight = t(document).height(), this._headers = {}, this._transformMode = this._getSupportedTransform(), this.refresh(), setInterval(function () {
          e._recalculateSections();
        }, 1e3), e.recalculate(), t(window).resize(function () {
          e.recalculate();
        }), this._updateHeadersLoop();
      },
      recalculate: function recalculate() {
        this._recalculateSections(), this._updateHeaderHeight(), this._recalculateHeaders(), this._updateHeaders();
      },
      _getSupportedTransform: function _getSupportedTransform() {
        for (var t = ['transform', 'WebkitTransform', 'MozTransform', 'OTransform', 'msTransform'], e = 0; e < t.length; e++) if (void 0 !== document.createElement('div').style[t[e]]) return t[e];
        return !1;
      },
      _getContainerHeight: function _getContainerHeight() {
        var e = this.element.find('> .' + this.options.headerClass),
          s = 0,
          i = 0,
          n = this;
        return e.length ? e.each(function () {
          var e = t(this),
            o = e.find('> .' + n.options.innerClass);
          o.length ? (o.css('bottom', 'auto').css('overflow', 'auto'), i = o.outerHeight(), o.css('bottom', '0')) : (e.css('bottom', 'auto'), i = e.outerHeight(), e.css('bottom', '0')), s = i > s ? i : s;
        }) : s = i = this.element.outerHeight(), s;
      },
      _setupHeaders: function _setupHeaders() {
        var e = this;
        this._headers[this.options.defaultClass] = {};
        for (var s = 0; s < this._$sections.length; s++) {
          var i = t(this._$sections[s]),
            n = i.data(this.options.sectionSelector);
          'string' == typeof n && (n = n.trim(), '' !== n && (e._headers[n] = {}));
        }
        ({
          top: this.element.css('padding-top'),
          right: this.element.css('padding-right'),
          bottom: this.element.css('padding-bottom'),
          left: this.element.css('padding-left')
        });
        this.element.css({
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          overflow: 'hidden'
        }), this._updateHeaderHeight();
        var o = this.element.find('> .' + this.options.headerClass);
        o.length ? o.filter('.' + this.options.defaultClass).length || o.filter('.' + this.options.headerClass + ':first').clone(!0, !0).attr('class', this.options.headerClass + ' ' + this.options.defaultClass) : this.element.wrapInner('<div class="' + this.options.headerClass + ' ' + this.options.defaultClass + '"></div>');
        var o = this.element.find('> .' + this.options.headerClass),
          r = o.filter('.' + this.options.defaultClass).clone(!0, !0);
        for (var n in this._headers) if (this._headers.hasOwnProperty(n) && 'undefined' == typeof this._headers[n].element) {
          var a = o.filter('.' + n);
          a.length ? this._headers[n].element = a : this._headers[n].element = r.clone(!0, !0).removeClass(this.options.defaultClass).addClass(n).appendTo(this.element);
          var h = {
            position: 'absolute',
            overflow: 'hidden',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          };
          this._headers[n].element.css(h), this._transformMode !== !1 && this._headers[n].element.css(this._transformMode, 'translateZ(0)'), this._headers[n].element.find('> .' + this.options.innerClass).length || this._headers[n].element.wrapInner('<div class="' + this.options.innerClass + '"></div>'), this._headers[n].inner = this._headers[n].element.find('> .' + this.options.innerClass), this._headers[n].inner.css(h), this._transformMode !== !1 && this._headers[n].inner.css(this._transformMode, 'translateZ(0)'), this._headers[n].from = '', this._headers[n].progress = 0;
        }
        o.each(function () {
          var s = t(this),
            i = !1;
          for (var n in e._headers) e._headers.hasOwnProperty(n) && s.hasClass(n) && (i = !0);
          s.find('> .' + e.options.innerClass).length || s.wrapInner('<div class="' + e.options.innerClass + '"></div>'), i ? s.show() : s.hide();
        });
      },
      _recalculateHeaders: function _recalculateHeaders() {
        this._scrollTop = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop, this._scrollTop = Math.max(this._scrollTop, 0), this._scrollTop = Math.min(this._scrollTop, this._documentHeight);
        var t = this._headerInfo.height,
          e = this._scrollTop + this._headerInfo.top,
          s = e + t;
        if ('function' == typeof window.getComputedStyle) {
          var i = window.getComputedStyle(this.element[0], null),
            n = 0,
            o = 0;
          if (this._transformMode !== !1 && 'string' == typeof i.transform) {
            var r = i.transform.match(/(-?[0-9\.]+)/g);
            null !== r && r.length >= 6 && !isNaN(parseFloat(r[5])) && (o = parseFloat(r[5]));
          }
          i.top.indexOf('px') >= 0 && !isNaN(parseFloat(i.top)) && (n = parseFloat(i.top)), e += n + o, s += n + o;
        }
        for (var a in this._headers) this._headers.hasOwnProperty(a) && (this._headers[a].from = '', this._headers[a].progress = 0);
        for (var h = 0; h < this._sections.length; h++) s >= this._sections[h].start && e <= this._sections[h].end && (this._headers[this._sections[h].className].visible = !0, e >= this._sections[h].start && s <= this._sections[h].end ? (this._headers[this._sections[h].className].from = 'top', this._headers[this._sections[h].className].progress += 1) : s > this._sections[h].end && e < this._sections[h].end ? (this._headers[this._sections[h].className].from = 'top', this._headers[this._sections[h].className].progress = 1 - (s - this._sections[h].end) / t) : s > this._sections[h].start && e < this._sections[h].start && ('top' === this._headers[this._sections[h].className].from ? this._headers[this._sections[h].className].progress += (s - this._sections[h].start) / t : (this._headers[this._sections[h].className].from = 'bottom', this._headers[this._sections[h].className].progress = (s - this._sections[h].start) / t)));
      },
      _updateHeaders: function _updateHeaders() {
        if ('undefined' != typeof this._headers[this.options.defaultClass]) {
          var t = 0,
            e = '';
          for (var s in this._headers) this._headers.hasOwnProperty(s) && '' !== !this._headers[s].from && (t += this._headers[s].progress, e = s);
          t < 1 && ('' === this._headers[this.options.defaultClass].from ? (this._headers[this.options.defaultClass].from = 'top' === this._headers[e].from ? 'bottom' : 'top', this._headers[this.options.defaultClass].progress = 1 - t) : this._headers[this.options.defaultClass].progress += 1 - t);
          for (var i in this._headers) if (this._headers.hasOwnProperty(i) && '' !== !this._headers[i].from) {
            var n = 100 * (1 - this._headers[i].progress);
            n >= 100 && (n = 110), n <= -100 && (n = -110), 'top' === this._headers[i].from ? this._transformMode !== !1 ? (this._headers[i].element[0].style[this._transformMode] = 'translateY(-' + n + '%) translateZ(0)', this._headers[i].inner[0].style[this._transformMode] = 'translateY(+' + n + '%) translateZ(0)') : (this._headers[i].element[0].style.top = '-' + n + '%', this._headers[i].inner[0].style.top = '+' + n + '%') : this._transformMode !== !1 ? (this._headers[i].element[0].style[this._transformMode] = 'translateY(+' + n + '%) translateZ(0)', this._headers[i].inner[0].style[this._transformMode] = 'translateY(-' + n + '%) translateZ(0)') : (this._headers[i].element[0].style.top = '+' + n + '%', this._headers[i].inner[0].style.top = '-' + n + '%');
          }
        }
      },
      _recalculateSections: function _recalculateSections() {
        this._documentHeight = t(document).height(), this._sections = [];
        for (var e = 0; e < this._$sections.length; e++) {
          var s = t(this._$sections[e]);
          this._sections.push({
            element: s,
            className: s.data(this.options.sectionSelector),
            start: s.offset().top,
            end: s.offset().top + s.outerHeight()
          });
        }
      },
      _updateHeaderHeight: function _updateHeaderHeight() {
        this._headerInfo.height = this._getContainerHeight(), this.element.css('height', this._headerInfo.height + 'px');
      },
      _updateHeadersLoop: function _updateHeadersLoop() {
        var t = this;
        this._requestAnimationFrame(function () {
          t._updateHeadersLoop();
        }), this._recalculateHeaders(), this._updateHeaders();
      },
      _requestAnimationFrame: function _requestAnimationFrame(t) {
        var e = e || function () {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (t) {
            window.setTimeout(t, 1e3 / 60);
          };
        }();
        e(t);
      }
    });
  }(jQuery);
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
  wrapper.insertAdjacentHTML('afterbegin', "\n  <header class='header' id='header'>\n  <div class='header__row'>\n    <div class='header__logo logo coluna'>\n      <a href='index.html'\n        >\u041A\u0416\n        <!-- <span class=\"logo__item\">\u0418</span>\n                           <span class=\"logo__item\">\u0420</span>\n                           <span class=\"logo__item\">\u0418</span>\n                           <span class=\"logo__item\">\u041B</span>\n                           <span class=\"logo__item\">\u041B</span> -->\n        <!-- <span class=\"logo__item\">\u0418</span>\n                           <span class=\"logo__item\">\u0413</span>\n                           <span class=\"logo__item\">\u0410</span>\n                           <span class=\"logo__item\">\u041D</span>\n                           <span class=\"logo__item\">\u041E</span>\n                           <span class=\"logo__item\">\u0412</span> -->\n      </a>\n    </div>\n    <div class='header__menu header__menu_left'>\n      <p class='header__wisw'>\u041D\u0430\u0434\u0435\u044E\u0441\u044C, \u0443 \u0442\u0435\u0431\u044F \u043E\u0442\u043B\u0438\u0447\u043D\u044B\u0439 \u0434\u0435\u043D\u044C ;)</p>\n      <div class='header__info-about-page'>\n        <p class='header__number-page'>01/</p>\n        <p class='header__text-info'>\u0413\u043B\u0430\u0432\u043D\u0430\u044F \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0430 \u043C\u043E\u0435\u0433\u043E \u043F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E</p>\n      </div>\n    </div>\n    <div class='header__menu header__menu_right'>\n      <div class='header__my-name'>\n        <p class=''>\u041A\u0438\u0440\u0438\u043B\u043B \u0416\u0438\u0433\u0430\u043D\u043E\u0432 - \u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E</p>\n      </div>\n      <ul class='header__menu-list'>\n        <li>\n          <a href='#' class='header__link active'>\n            <p class='header__number-page header__number-page_visible'>01/</p>\n            <p class='header__link-page'>\u0413\u043B\u0430\u0432\u043D\u0430\u044F</p>\n          </a>\n        </li>\n        <li>\n          <a href='#' class='header__link'>\n            <p class='header__number-page header__number-page_visible'>02/</p>\n            <p class='header__link-page'>\u041F\u043E\u0440\u0442\u0444\u043E\u043B\u0438\u043E</p>\n          </a>\n        </li>\n        <li>\n          <a href='#' class='header__link'>\n            <p class='header__number-page header__number-page_visible'>03/</p>\n            <p class='header__link-page'>\u041E\u0431\u043E \u043C\u043D\u0435</p>\n          </a>\n        </li>\n        <li>\n          <a href='#' class='header__link'>\n            <p class='header__number-page header__number-page_visible'>04/</p>\n            <p class='header__link-page'>\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B</p>\n          </a>\n        </li>\n      </ul>\n    </div>\n    <div class='header__burger'></div>\n  </div>\n</header>\n\n  ");
}

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
/******/ 	/* webpack/runtime/amd options */
/******/ 	!function() {
/******/ 		__webpack_require__.amdO = {};
/******/ 	}();
/******/ 	
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