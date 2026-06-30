"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Admin_Pages_Dashboard_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/Index.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/Index.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/Layout */ "./resources/js/Admin/Shared/Layout.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Index',
  props: {
    categoriesCount: Number,
    productsCount: Number,
    featuredCount: Number,
    categoriesWithIcons: Number,
    unreadMessagesCount: Number,
    recentProducts: Array,
    recentCategories: Array,
    recentMessages: Array
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var icons = {
      plus: "<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M12 5V19M5 12H19\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>",
      external: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M14 5H19V10\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M10 14L19 5\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/><path d=\"M19 14V19C19 19.5523 18.5523 20 18 20H5C4.44772 20 4 19.5523 4 19V6C4 5.44772 4.44772 5 5 5H10\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/></svg>",
      arrow: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M5 12H19M19 12L13 6M19 12L13 18\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
      edit: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M4 20H8L18.5 9.5C19.3284 8.67157 19.3284 7.32843 18.5 6.5V6.5C17.6716 5.67157 16.3284 5.67157 15.5 6.5L5 17V20H4Z\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linejoin=\"round\"/></svg>",
      box: "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M4 7.5L12 3.5L20 7.5L12 11.5L4 7.5Z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/><path d=\"M4 12L12 16L20 12\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/><path d=\"M4 16.5L12 20.5L20 16.5\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/></svg>",
      grid: "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\"><rect x=\"3\" y=\"3\" width=\"8\" height=\"8\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"1.6\"/><rect x=\"13\" y=\"3\" width=\"8\" height=\"8\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"1.6\"/><rect x=\"3\" y=\"13\" width=\"8\" height=\"8\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"1.6\"/><rect x=\"13\" y=\"13\" width=\"8\" height=\"8\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"1.6\"/></svg>",
      star: "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M12 3.5L14.8 9.2L21 10.1L16.5 14.4L17.6 20.6L12 17.6L6.4 20.6L7.5 14.4L3 10.1L9.2 9.2L12 3.5Z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/></svg>",
      settings: "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\"><circle cx=\"12\" cy=\"12\" r=\"3\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M12 2V4M12 20V22M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M2 12H4M20 12H22M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/></svg>",
      mail: "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M3 7L12 13L21 7\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/></svg>"
    };
    var props = __props;
    var page = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.usePage)();
    var firstName = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var _page$props$value, _page$props$value$use;
      var name = ((_page$props$value = page.props.value) === null || _page$props$value === void 0 ? void 0 : (_page$props$value$use = _page$props$value.user) === null || _page$props$value$use === void 0 ? void 0 : _page$props$value$use.name) || 'Admin';
      return name.split(' ')[0];
    });
    var greeting = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var hour = new Date().getHours();
      if (hour < 12) return 'Good morning';
      if (hour < 17) return 'Good afternoon';
      return 'Good evening';
    });
    var standardCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return Math.max(0, (props.productsCount || 0) - (props.featuredCount || 0));
    });
    var excerpt = function excerpt(text) {
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 72;
      if (!text) return '';
      var normalized = text.replace(/\s+/g, ' ').trim();
      return normalized.length > limit ? "".concat(normalized.slice(0, limit), "...") : normalized;
    };
    var __returned__ = {
      icons: icons,
      props: props,
      page: page,
      firstName: firstName,
      greeting: greeting,
      standardCount: standardCount,
      excerpt: excerpt,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      get usePage() {
        return _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.usePage;
      },
      get Layout() {
        return _Shared_Layout__WEBPACK_IMPORTED_MODULE_2__["default"];
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/Index.vue?vue&type=template&id=b1d8e604&scoped=true":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/Index.vue?vue&type=template&id=b1d8e604&scoped=true ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

var _hoisted_1 = {
  "class": "dashboard-page"
};
var _hoisted_2 = {
  "class": "dashboard-hero"
};
var _hoisted_3 = {
  "class": "dashboard-hero__content"
};
var _hoisted_4 = {
  "class": "dashboard-hero__title"
};
var _hoisted_5 = {
  "class": "dashboard-hero__actions"
};
var _hoisted_6 = {
  href: "/",
  target: "_blank",
  rel: "noopener noreferrer",
  "class": "dashboard-btn dashboard-btn--ghost"
};
var _hoisted_7 = ["innerHTML"];
var _hoisted_8 = ["innerHTML"];
var _hoisted_9 = {
  "class": "dashboard-stats"
};
var _hoisted_10 = ["innerHTML"];
var _hoisted_11 = {
  "class": "dashboard-stat__body"
};
var _hoisted_12 = ["innerHTML"];
var _hoisted_13 = ["innerHTML"];
var _hoisted_14 = {
  "class": "dashboard-stat__body"
};
var _hoisted_15 = ["innerHTML"];
var _hoisted_16 = ["innerHTML"];
var _hoisted_17 = {
  "class": "dashboard-stat__body"
};
var _hoisted_18 = ["innerHTML"];
var _hoisted_19 = ["innerHTML"];
var _hoisted_20 = {
  "class": "dashboard-stat__body"
};
var _hoisted_21 = ["innerHTML"];
var _hoisted_22 = {
  "class": "dashboard-quick"
};
var _hoisted_23 = {
  "class": "dashboard-quick__grid"
};
var _hoisted_24 = ["innerHTML"];
var _hoisted_25 = ["innerHTML"];
var _hoisted_26 = ["innerHTML"];
var _hoisted_27 = ["innerHTML"];
var _hoisted_28 = {
  key: 0,
  "class": "dashboard-panel dashboard-panel--full"
};
var _hoisted_29 = {
  "class": "dashboard-panel__head"
};
var _hoisted_30 = {
  "class": "dashboard-table-wrap"
};
var _hoisted_31 = {
  "class": "dashboard-table"
};
var _hoisted_32 = {
  "class": "dashboard-cell"
};
var _hoisted_33 = {
  "class": "dashboard-message-preview"
};
var _hoisted_34 = ["innerHTML"];
var _hoisted_35 = {
  "class": "dashboard-panels"
};
var _hoisted_36 = {
  "class": "dashboard-panel"
};
var _hoisted_37 = {
  "class": "dashboard-panel__head"
};
var _hoisted_38 = {
  key: 0,
  "class": "dashboard-table-wrap"
};
var _hoisted_39 = {
  "class": "dashboard-table"
};
var _hoisted_40 = {
  "class": "dashboard-cell"
};
var _hoisted_41 = {
  "class": "dashboard-thumb"
};
var _hoisted_42 = ["src", "alt"];
var _hoisted_43 = ["innerHTML"];
var _hoisted_44 = {
  "class": "dashboard-chip"
};
var _hoisted_45 = ["innerHTML"];
var _hoisted_46 = {
  key: 1,
  "class": "dashboard-empty"
};
var _hoisted_47 = ["innerHTML"];
var _hoisted_48 = {
  "class": "dashboard-panel"
};
var _hoisted_49 = {
  "class": "dashboard-panel__head"
};
var _hoisted_50 = {
  key: 0,
  "class": "dashboard-table-wrap"
};
var _hoisted_51 = {
  "class": "dashboard-table"
};
var _hoisted_52 = {
  "class": "dashboard-cell"
};
var _hoisted_53 = {
  "class": "dashboard-thumb dashboard-thumb--round"
};
var _hoisted_54 = ["src", "alt"];
var _hoisted_55 = ["innerHTML"];
var _hoisted_56 = {
  "class": "dashboard-count"
};
var _hoisted_57 = ["innerHTML"];
var _hoisted_58 = {
  key: 1,
  "class": "dashboard-empty"
};
var _hoisted_59 = ["innerHTML"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Dashboard"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Layout"], {
    prv_page: [{
      name: 'Dashboard'
    }]
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "dashboard-hero__eyebrow"
      }, "Admin Overview", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.greeting) + ", " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.firstName), 1 /* TEXT */), _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
        "class": "dashboard-hero__desc"
      }, " Manage your IQF export catalog, featured homepage products, and site settings from one place. ", -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        innerHTML: $setup.icons.external
      }, null, 8 /* PROPS */, _hoisted_7), _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" View Website ", -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: "/admin/products/create",
        "class": "dashboard-btn dashboard-btn--primary"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            innerHTML: $setup.icons.plus
          }, null, 8 /* PROPS */, _hoisted_8), _cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Product ", -1 /* CACHED */))];
        }),

        _: 1 /* STABLE */
      })])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: "/admin/category",
        "class": "dashboard-stat dashboard-stat--categories"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            "class": "dashboard-stat__icon",
            innerHTML: $setup.icons.grid
          }, null, 8 /* PROPS */, _hoisted_10), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            "class": "dashboard-stat__label"
          }, "Categories", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.categoriesCount), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.categoriesWithIcons) + " with icons", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            "class": "dashboard-stat__arrow",
            innerHTML: $setup.icons.arrow
          }, null, 8 /* PROPS */, _hoisted_12)];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: "/admin/products",
        "class": "dashboard-stat dashboard-stat--products"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            "class": "dashboard-stat__icon",
            innerHTML: $setup.icons.box
          }, null, 8 /* PROPS */, _hoisted_13), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            "class": "dashboard-stat__label"
          }, "Products", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.productsCount), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.standardCount) + " standard items", 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            "class": "dashboard-stat__arrow",
            innerHTML: $setup.icons.arrow
          }, null, 8 /* PROPS */, _hoisted_15)];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: "/admin/products",
        "class": "dashboard-stat dashboard-stat--featured"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            "class": "dashboard-stat__icon",
            innerHTML: $setup.icons.star
          }, null, 8 /* PROPS */, _hoisted_16), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            "class": "dashboard-stat__label"
          }, "Featured", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.featuredCount), 1 /* TEXT */), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, "shown on homepage", -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            "class": "dashboard-stat__arrow",
            innerHTML: $setup.icons.arrow
          }, null, 8 /* PROPS */, _hoisted_18)];
        }),
        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: "/admin/messages",
        "class": "dashboard-stat dashboard-stat--messages"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            "class": "dashboard-stat__icon",
            innerHTML: $setup.icons.mail
          }, null, 8 /* PROPS */, _hoisted_19), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            "class": "dashboard-stat__label"
          }, "Messages", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.unreadMessagesCount), 1 /* TEXT */), _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, "unread inquiries", -1 /* CACHED */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            "class": "dashboard-stat__arrow",
            innerHTML: $setup.icons.arrow
          }, null, 8 /* PROPS */, _hoisted_21)];
        }),
        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_22, [_cache[14] || (_cache[14] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
        "class": "dashboard-quick__title"
      }, "Quick Actions", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: "/admin/category/create",
        "class": "dashboard-quick__item"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            "class": "dashboard-quick__icon",
            innerHTML: $setup.icons.grid
          }, null, 8 /* PROPS */, _hoisted_24), _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "New Category", -1 /* CACHED */))];
        }),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: "/admin/products/create",
        "class": "dashboard-quick__item"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            "class": "dashboard-quick__icon",
            innerHTML: $setup.icons.box
          }, null, 8 /* PROPS */, _hoisted_25), _cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "New Product", -1 /* CACHED */))];
        }),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: "/admin/messages",
        "class": "dashboard-quick__item"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            "class": "dashboard-quick__icon",
            innerHTML: $setup.icons.mail
          }, null, 8 /* PROPS */, _hoisted_26), _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "View Messages", -1 /* CACHED */))];
        }),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: "/admin/settings",
        "class": "dashboard-quick__item"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            "class": "dashboard-quick__icon",
            innerHTML: $setup.icons.settings
          }, null, 8 /* PROPS */, _hoisted_27), _cache[13] || (_cache[13] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Site Settings", -1 /* CACHED */))];
        }),

        _: 1 /* STABLE */
      })])]), $props.recentMessages.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("section", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [_cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
        "class": "dashboard-panel__title"
      }, "Recent Messages"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
        "class": "dashboard-panel__subtitle"
      }, "Latest contact form submissions")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: "/admin/messages",
        "class": "dashboard-link"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return _toConsumableArray(_cache[15] || (_cache[15] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("View inbox", -1 /* CACHED */)]));
        }),

        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_31, [_cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Sender"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Message"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Status"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "dashboard-table__actions-head"
      })])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.recentMessages, function (item) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: item.id,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'dashboard-row--unread': !item.read_at
          })
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.email), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.excerpt(item.message)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["dashboard-badge", item.read_at ? 'dashboard-badge--default' : 'dashboard-badge--featured'])
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.read_at ? 'Read' : 'Unread'), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
          href: "/admin/messages/".concat(item.id),
          "class": "dashboard-action",
          title: "View message"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
              innerHTML: $setup.icons.edit
            }, null, 8 /* PROPS */, _hoisted_34)];
          }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["href"])])], 2 /* CLASS */);
      }), 128 /* KEYED_FRAGMENT */))])])])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [_cache[19] || (_cache[19] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
        "class": "dashboard-panel__title"
      }, "Recent Products"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
        "class": "dashboard-panel__subtitle"
      }, "Latest additions to your catalog")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: "/admin/products",
        "class": "dashboard-link"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return _toConsumableArray(_cache[18] || (_cache[18] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("View all", -1 /* CACHED */)]));
        }),

        _: 1 /* STABLE */
      })]), $props.recentProducts.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_39, [_cache[20] || (_cache[20] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Product"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Category"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Featured"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "dashboard-table__actions-head"
      })])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.recentProducts, function (item) {
        var _item$category;
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: item.id
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [item.image_url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
          key: 0,
          src: item.image_url,
          alt: item.name
        }, null, 8 /* PROPS */, _hoisted_42)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
          key: 1,
          "class": "dashboard-thumb__placeholder",
          innerHTML: $setup.icons.box
        }, null, 8 /* PROPS */, _hoisted_43))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_44, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(((_item$category = item.category) === null || _item$category === void 0 ? void 0 : _item$category.title_en) || '—'), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["dashboard-badge", item.is_featured ? 'dashboard-badge--featured' : 'dashboard-badge--default'])
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.is_featured ? 'Featured' : 'Standard'), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
          href: "/admin/products/".concat(item.id, "/edit"),
          "class": "dashboard-action",
          title: "Edit product"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
              innerHTML: $setup.icons.edit
            }, null, 8 /* PROPS */, _hoisted_45)];
          }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["href"])])]);
      }), 128 /* KEYED_FRAGMENT */))])])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "dashboard-empty__icon",
        innerHTML: $setup.icons.box
      }, null, 8 /* PROPS */, _hoisted_47), _cache[22] || (_cache[22] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "No products yet", -1 /* CACHED */)), _cache[23] || (_cache[23] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Start building your export catalog.", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: "/admin/products/create",
        "class": "dashboard-btn dashboard-btn--primary"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return _toConsumableArray(_cache[21] || (_cache[21] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Product ", -1 /* CACHED */)]));
        }),

        _: 1 /* STABLE */
      })]))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [_cache[25] || (_cache[25] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
        "class": "dashboard-panel__title"
      }, "Recent Categories"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
        "class": "dashboard-panel__subtitle"
      }, "Product groups and navigation")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: "/admin/category",
        "class": "dashboard-link"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return _toConsumableArray(_cache[24] || (_cache[24] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("View all", -1 /* CACHED */)]));
        }),

        _: 1 /* STABLE */
      })]), $props.recentCategories.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_51, [_cache[26] || (_cache[26] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Category"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Products"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "dashboard-table__actions-head"
      })])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.recentCategories, function (item) {
        var _item$products_count;
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: item.id
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [item.icon_url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
          key: 0,
          src: item.icon_url,
          alt: item.title_en
        }, null, 8 /* PROPS */, _hoisted_54)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
          key: 1,
          "class": "dashboard-thumb__placeholder",
          innerHTML: $setup.icons.grid
        }, null, 8 /* PROPS */, _hoisted_55))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title_en), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title_ar), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_56, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_item$products_count = item.products_count) !== null && _item$products_count !== void 0 ? _item$products_count : 0), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
          href: "/admin/category/".concat(item.id, "/edit"),
          "class": "dashboard-action",
          title: "Edit category"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
              innerHTML: $setup.icons.edit
            }, null, 8 /* PROPS */, _hoisted_57)];
          }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["href"])])]);
      }), 128 /* KEYED_FRAGMENT */))])])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "dashboard-empty__icon",
        innerHTML: $setup.icons.grid
      }, null, 8 /* PROPS */, _hoisted_59), _cache[28] || (_cache[28] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "No categories yet", -1 /* CACHED */)), _cache[29] || (_cache[29] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Create your first product group.", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: "/admin/category/create",
        "class": "dashboard-btn dashboard-btn--primary"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return _toConsumableArray(_cache[27] || (_cache[27] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Category ", -1 /* CACHED */)]));
        }),

        _: 1 /* STABLE */
      })]))])])])];
    }),

    _: 1 /* STABLE */
  })], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/Index.vue?vue&type=style&index=0&id=b1d8e604&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/Index.vue?vue&type=style&index=0&id=b1d8e604&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.dashboard-page[data-v-b1d8e604] {\n    --d-primary: #A91E2C;\n    --d-primary-dark: #8E1824;\n    --d-secondary: #5A8F3C;\n    --d-surface: #ffffff;\n    --d-border: #e6ebe6;\n    --d-text: #1a1a1a;\n    --d-muted: #6b7280;\n    --d-radius: 16px;\n    --d-shadow: 0 8px 32px rgba(26, 26, 26, 0.06);\n    padding-bottom: 2rem;\n}\n.dashboard-hero[data-v-b1d8e604] {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 1.5rem;\n    margin-bottom: 1.25rem;\n    padding: 1.85rem 2rem;\n    border-radius: var(--d-radius);\n    background:\n        radial-gradient(circle at 100% 0%, rgba(90, 143, 60, 0.14), transparent 45%),\n        radial-gradient(circle at 0% 100%, rgba(169, 30, 44, 0.12), transparent 42%),\n        var(--d-surface);\n    border: 1px solid var(--d-border);\n    box-shadow: var(--d-shadow);\n}\n.dashboard-hero__eyebrow[data-v-b1d8e604] {\n    display: inline-block;\n    margin-bottom: 0.45rem;\n    color: var(--d-secondary);\n    font-size: 0.72rem;\n    font-weight: 700;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n}\n.dashboard-hero__title[data-v-b1d8e604] {\n    margin: 0;\n    color: var(--d-text);\n    font-size: 1.85rem;\n    font-weight: 800;\n    line-height: 1.2;\n}\n.dashboard-hero__desc[data-v-b1d8e604] {\n    margin: 0.55rem 0 0;\n    max-width: 38rem;\n    color: var(--d-muted);\n    font-size: 0.92rem;\n    line-height: 1.65;\n}\n.dashboard-hero__actions[data-v-b1d8e604] {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.65rem;\n    flex-shrink: 0;\n}\n.dashboard-btn[data-v-b1d8e604] {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.45rem;\n    padding: 0.72rem 1.15rem;\n    border: none;\n    border-radius: 12px;\n    font-size: 0.88rem;\n    font-weight: 700;\n    text-decoration: none;\n    cursor: pointer;\n    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;\n    white-space: nowrap;\n}\n.dashboard-btn--primary[data-v-b1d8e604] {\n    background: linear-gradient(135deg, var(--d-primary), var(--d-primary-dark));\n    color: #fff;\n    box-shadow: 0 8px 20px rgba(169, 30, 44, 0.22);\n}\n.dashboard-btn--primary[data-v-b1d8e604]:hover {\n    transform: translateY(-1px);\n    color: #fff;\n    box-shadow: 0 10px 24px rgba(169, 30, 44, 0.28);\n}\n.dashboard-btn--ghost[data-v-b1d8e604] {\n    background: #fff;\n    border: 1px solid var(--d-border);\n    color: var(--d-text);\n}\n.dashboard-btn--ghost[data-v-b1d8e604]:hover {\n    background: #f7f9f7;\n    color: var(--d-text);\n}\n.dashboard-stats[data-v-b1d8e604] {\n    display: grid;\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n    gap: 0.9rem;\n    margin-bottom: 1rem;\n}\n.dashboard-stat[data-v-b1d8e604] {\n    display: flex;\n    align-items: center;\n    gap: 0.85rem;\n    padding: 1.1rem 1.15rem;\n    border-radius: 14px;\n    background: var(--d-surface);\n    border: 1px solid var(--d-border);\n    text-decoration: none;\n    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;\n}\n.dashboard-stat[data-v-b1d8e604]:hover {\n    transform: translateY(-2px);\n    box-shadow: var(--d-shadow);\n    border-color: rgba(90, 143, 60, 0.25);\n}\n.dashboard-stat__icon[data-v-b1d8e604] {\n    display: grid;\n    place-items: center;\n    width: 46px;\n    height: 46px;\n    border-radius: 12px;\n    flex-shrink: 0;\n}\n.dashboard-stat--categories .dashboard-stat__icon[data-v-b1d8e604] {\n    background: rgba(90, 143, 60, 0.12);\n    color: var(--d-secondary);\n}\n.dashboard-stat--products .dashboard-stat__icon[data-v-b1d8e604] {\n    background: rgba(169, 30, 44, 0.1);\n    color: var(--d-primary);\n}\n.dashboard-stat--featured .dashboard-stat__icon[data-v-b1d8e604] {\n    background: rgba(234, 179, 8, 0.14);\n    color: #b45309;\n}\n.dashboard-stat--settings .dashboard-stat__icon[data-v-b1d8e604] {\n    background: #f3f4f6;\n    color: #4b5563;\n}\n.dashboard-stat--messages .dashboard-stat__icon[data-v-b1d8e604] {\n    background: rgba(59, 130, 246, 0.12);\n    color: #2563eb;\n}\n.dashboard-panel--full[data-v-b1d8e604] {\n    margin-bottom: 1rem;\n}\n.dashboard-row--unread[data-v-b1d8e604] {\n    background: rgba(169, 30, 44, 0.03);\n}\n.dashboard-message-preview[data-v-b1d8e604] {\n    color: var(--d-muted);\n    font-size: 0.84rem;\n    line-height: 1.45;\n}\n.dashboard-cell small[data-v-b1d8e604] {\n    display: block;\n    margin-top: 0.1rem;\n    color: var(--d-muted);\n    font-size: 0.76rem;\n    font-weight: 500;\n}\n.dashboard-stat__body[data-v-b1d8e604] {\n    flex: 1;\n    min-width: 0;\n}\n.dashboard-stat__label[data-v-b1d8e604] {\n    display: block;\n    margin-bottom: 0.2rem;\n    color: var(--d-muted);\n    font-size: 0.72rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.06em;\n}\n.dashboard-stat__body strong[data-v-b1d8e604] {\n    display: block;\n    color: var(--d-text);\n    font-size: 1.5rem;\n    font-weight: 800;\n    line-height: 1.1;\n}\n.dashboard-stat__body small[data-v-b1d8e604] {\n    display: block;\n    margin-top: 0.2rem;\n    color: var(--d-muted);\n    font-size: 0.76rem;\n}\n.dashboard-stat__arrow[data-v-b1d8e604] {\n    color: #c4cbc4;\n    flex-shrink: 0;\n    transition: color 0.2s ease, transform 0.2s ease;\n}\n.dashboard-stat:hover .dashboard-stat__arrow[data-v-b1d8e604] {\n    color: var(--d-secondary);\n    transform: translateX(2px);\n}\n.dashboard-quick[data-v-b1d8e604] {\n    margin-bottom: 1rem;\n    padding: 1.15rem 1.25rem;\n    border-radius: var(--d-radius);\n    background: var(--d-surface);\n    border: 1px solid var(--d-border);\n}\n.dashboard-quick__title[data-v-b1d8e604] {\n    margin: 0 0 0.85rem;\n    color: var(--d-text);\n    font-size: 0.82rem;\n    font-weight: 700;\n    letter-spacing: 0.06em;\n    text-transform: uppercase;\n}\n.dashboard-quick__grid[data-v-b1d8e604] {\n    display: grid;\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n    gap: 0.65rem;\n}\n.dashboard-quick__item[data-v-b1d8e604] {\n    display: flex;\n    align-items: center;\n    gap: 0.65rem;\n    padding: 0.8rem 1rem;\n    border-radius: 12px;\n    background: #f7f9f7;\n    border: 1px solid transparent;\n    color: var(--d-text);\n    font-size: 0.86rem;\n    font-weight: 600;\n    text-decoration: none;\n    transition: background 0.2s ease, border-color 0.2s ease, color 0.2s ease;\n}\n.dashboard-quick__item[data-v-b1d8e604]:hover {\n    background: #fff;\n    border-color: rgba(90, 143, 60, 0.3);\n    color: var(--d-secondary);\n}\n.dashboard-quick__icon[data-v-b1d8e604] {\n    display: grid;\n    place-items: center;\n    width: 34px;\n    height: 34px;\n    border-radius: 10px;\n    background: #fff;\n    color: var(--d-muted);\n    flex-shrink: 0;\n}\n.dashboard-quick__item:hover .dashboard-quick__icon[data-v-b1d8e604] {\n    color: var(--d-secondary);\n}\n.dashboard-panels[data-v-b1d8e604] {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 1rem;\n}\n.dashboard-panel[data-v-b1d8e604] {\n    padding: 1.25rem;\n    border-radius: var(--d-radius);\n    background: var(--d-surface);\n    border: 1px solid var(--d-border);\n    box-shadow: var(--d-shadow);\n}\n.dashboard-panel__head[data-v-b1d8e604] {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 1rem;\n    margin-bottom: 1.1rem;\n}\n.dashboard-panel__title[data-v-b1d8e604] {\n    margin: 0;\n    color: var(--d-text);\n    font-size: 1.05rem;\n    font-weight: 800;\n}\n.dashboard-panel__subtitle[data-v-b1d8e604] {\n    margin: 0.25rem 0 0;\n    color: var(--d-muted);\n    font-size: 0.82rem;\n}\n.dashboard-link[data-v-b1d8e604] {\n    color: var(--d-secondary);\n    font-size: 0.84rem;\n    font-weight: 700;\n    text-decoration: none;\n    white-space: nowrap;\n}\n.dashboard-link[data-v-b1d8e604]:hover {\n    color: var(--d-primary);\n}\n.dashboard-table-wrap[data-v-b1d8e604] {\n    overflow-x: auto;\n    border: 1px solid var(--d-border);\n    border-radius: 14px;\n}\n.dashboard-table[data-v-b1d8e604] {\n    width: 100%;\n    border-collapse: collapse;\n    min-width: 320px;\n}\n.dashboard-table thead[data-v-b1d8e604] {\n    background: #f7f9f7;\n}\n.dashboard-table th[data-v-b1d8e604] {\n    padding: 0.75rem 0.9rem;\n    color: var(--d-muted);\n    font-size: 0.7rem;\n    font-weight: 700;\n    letter-spacing: 0.08em;\n    text-transform: uppercase;\n    text-align: left;\n    border-bottom: 1px solid var(--d-border);\n}\n.dashboard-table td[data-v-b1d8e604] {\n    padding: 0.85rem 0.9rem;\n    border-bottom: 1px solid #eef2ee;\n    vertical-align: middle;\n}\n.dashboard-table tbody tr[data-v-b1d8e604]:hover {\n    background: #fcfdfc;\n}\n.dashboard-table tbody tr:last-child td[data-v-b1d8e604] {\n    border-bottom: none;\n}\n.dashboard-table__actions-head[data-v-b1d8e604] {\n    width: 48px;\n    text-align: right;\n}\n.dashboard-cell[data-v-b1d8e604] {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n    min-width: 0;\n}\n.dashboard-cell strong[data-v-b1d8e604] {\n    display: block;\n    color: var(--d-text);\n    font-size: 0.88rem;\n    font-weight: 700;\n}\n.dashboard-cell small[data-v-b1d8e604] {\n    display: block;\n    margin-top: 0.1rem;\n    color: var(--d-muted);\n    font-size: 0.76rem;\n}\n.dashboard-thumb[data-v-b1d8e604] {\n    width: 44px;\n    height: 44px;\n    border-radius: 11px;\n    overflow: hidden;\n    background: #f3f5f3;\n    border: 1px solid var(--d-border);\n    flex-shrink: 0;\n}\n.dashboard-thumb--round[data-v-b1d8e604] {\n    border-radius: 50%;\n}\n.dashboard-thumb img[data-v-b1d8e604] {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n.dashboard-thumb__placeholder[data-v-b1d8e604] {\n    display: grid;\n    place-items: center;\n    width: 100%;\n    height: 100%;\n    color: #9ca3af;\n}\n.dashboard-chip[data-v-b1d8e604] {\n    display: inline-flex;\n    padding: 0.3rem 0.65rem;\n    border-radius: 999px;\n    background: rgba(90, 143, 60, 0.1);\n    color: var(--d-secondary);\n    font-size: 0.76rem;\n    font-weight: 700;\n}\n.dashboard-badge[data-v-b1d8e604] {\n    display: inline-flex;\n    padding: 0.3rem 0.65rem;\n    border-radius: 999px;\n    font-size: 0.74rem;\n    font-weight: 700;\n}\n.dashboard-badge--featured[data-v-b1d8e604] {\n    background: rgba(169, 30, 44, 0.1);\n    color: var(--d-primary);\n}\n.dashboard-badge--default[data-v-b1d8e604] {\n    background: #f3f4f6;\n    color: #6b7280;\n}\n.dashboard-count[data-v-b1d8e604] {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    min-width: 28px;\n    height: 28px;\n    padding: 0 0.5rem;\n    border-radius: 8px;\n    background: #f3f5f3;\n    color: var(--d-text);\n    font-size: 0.82rem;\n    font-weight: 700;\n}\n.dashboard-action[data-v-b1d8e604] {\n    display: grid;\n    place-items: center;\n    width: 34px;\n    height: 34px;\n    margin-left: auto;\n    border: 1px solid var(--d-border);\n    border-radius: 10px;\n    background: #fff;\n    color: var(--d-muted);\n    text-decoration: none;\n    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;\n}\n.dashboard-action[data-v-b1d8e604]:hover {\n    border-color: rgba(90, 143, 60, 0.35);\n    background: rgba(90, 143, 60, 0.08);\n    color: var(--d-secondary);\n}\n.dashboard-empty[data-v-b1d8e604] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 0.55rem;\n    padding: 2.5rem 1.25rem;\n    text-align: center;\n}\n.dashboard-empty__icon[data-v-b1d8e604] {\n    display: grid;\n    place-items: center;\n    width: 56px;\n    height: 56px;\n    border-radius: 14px;\n    background: #f3f5f3;\n    color: #9ca3af;\n}\n.dashboard-empty h3[data-v-b1d8e604] {\n    margin: 0.2rem 0 0;\n    color: var(--d-text);\n    font-size: 1rem;\n    font-weight: 800;\n}\n.dashboard-empty p[data-v-b1d8e604] {\n    margin: 0 0 0.5rem;\n    color: var(--d-muted);\n    font-size: 0.86rem;\n}\n@media (max-width: 1100px) {\n.dashboard-stats[data-v-b1d8e604],\n    .dashboard-quick__grid[data-v-b1d8e604] {\n        grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n}\n@media (max-width: 900px) {\n.dashboard-hero[data-v-b1d8e604] {\n        flex-direction: column;\n        align-items: stretch;\n}\n.dashboard-panels[data-v-b1d8e604] {\n        grid-template-columns: 1fr;\n}\n}\n@media (max-width: 600px) {\n.dashboard-stats[data-v-b1d8e604],\n    .dashboard-quick__grid[data-v-b1d8e604] {\n        grid-template-columns: 1fr;\n}\n.dashboard-hero__title[data-v-b1d8e604] {\n        font-size: 1.5rem;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/Index.vue?vue&type=style&index=0&id=b1d8e604&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/Index.vue?vue&type=style&index=0&id=b1d8e604&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_b1d8e604_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=b1d8e604&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/Index.vue?vue&type=style&index=0&id=b1d8e604&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_b1d8e604_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_b1d8e604_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Admin/Pages/Dashboard/Index.vue":
/*!******************************************************!*\
  !*** ./resources/js/Admin/Pages/Dashboard/Index.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_b1d8e604_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=b1d8e604&scoped=true */ "./resources/js/Admin/Pages/Dashboard/Index.vue?vue&type=template&id=b1d8e604&scoped=true");
/* harmony import */ var _Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Admin/Pages/Dashboard/Index.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_b1d8e604_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=b1d8e604&scoped=true&lang=css */ "./resources/js/Admin/Pages/Dashboard/Index.vue?vue&type=style&index=0&id=b1d8e604&scoped=true&lang=css");
/* harmony import */ var F_Arkan_partners_El_Khadiga_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,F_Arkan_partners_El_Khadiga_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_b1d8e604_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-b1d8e604"],['__file',"resources/js/Admin/Pages/Dashboard/Index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Admin/Pages/Dashboard/Index.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/Dashboard/Index.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/Index.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Admin/Pages/Dashboard/Index.vue?vue&type=template&id=b1d8e604&scoped=true":
/*!************************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/Dashboard/Index.vue?vue&type=template&id=b1d8e604&scoped=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_b1d8e604_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_b1d8e604_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=b1d8e604&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/Index.vue?vue&type=template&id=b1d8e604&scoped=true");


/***/ }),

/***/ "./resources/js/Admin/Pages/Dashboard/Index.vue?vue&type=style&index=0&id=b1d8e604&scoped=true&lang=css":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/Dashboard/Index.vue?vue&type=style&index=0&id=b1d8e604&scoped=true&lang=css ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_b1d8e604_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=b1d8e604&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/Index.vue?vue&type=style&index=0&id=b1d8e604&scoped=true&lang=css");


/***/ })

}]);