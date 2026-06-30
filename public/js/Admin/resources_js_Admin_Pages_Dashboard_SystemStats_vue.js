"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Admin_Pages_Dashboard_SystemStats_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/MLayout.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/MLayout.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Shared/Layout */ "./resources/js/Admin/Shared/Layout.vue");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "MLayout",
  layout: _Shared_Layout__WEBPACK_IMPORTED_MODULE_0__["default"],
  props: {
    period_id: Number,
    manageAllBranches: Array
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/SystemStats.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/SystemStats.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _Dashboard_MLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Dashboard/MLayout */ "./resources/js/Admin/Pages/Dashboard/MLayout.vue");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Shared/Layout */ "./resources/js/Admin/Shared/Layout.vue");
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }




var __default__ = {
  name: "edit",
  layout: [_Shared_Layout__WEBPACK_IMPORTED_MODULE_3__["default"]]
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  props: {
    ordersToday: Object,
    ordersCount: Object,
    ordersTotal: Object,
    orderCanceled: Object,
    orderComplete: Object,
    orderPeriod: Object,
    restaurants: Object,
    branchs: Object,
    employees: Object,
    meals: Object,
    filters: Object,
    manageAllBranches: Array
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var from_date = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.filters.from_date);
    var to_date = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.filters.to_date);
    var toggle_search = function toggle_search() {
      $('#search-box').toggle(1000);
      var v_button = $('#btn-search');
      v_button.text() === 'بحث' ? v_button.text('اخفاء الفلاتر') : v_button.text('بحث');
    };
    var do_search = function do_search() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.get('/dashboard/system-stats', {
        from_date: from_date.value,
        to_date: to_date.value
      }, {
        preserveState: true,
        replace: true,
        preserveScroll: true
      });
    };
    var __returned__ = {
      get props() {
        return props;
      },
      set props(v) {
        v, _readOnlyError("props");
      },
      get from_date() {
        return from_date;
      },
      set from_date(v) {
        from_date = v;
      },
      get to_date() {
        return to_date;
      },
      set to_date(v) {
        to_date = v;
      },
      get toggle_search() {
        return toggle_search;
      },
      set toggle_search(v) {
        toggle_search = v;
      },
      get do_search() {
        return do_search;
      },
      set do_search(v) {
        do_search = v;
      },
      get MLayout() {
        return _Dashboard_MLayout__WEBPACK_IMPORTED_MODULE_2__["default"];
      },
      get Layout() {
        return _Shared_Layout__WEBPACK_IMPORTED_MODULE_3__["default"];
      },
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      get Inertia() {
        return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia;
      }
    };
    Object.defineProperty(__returned__, '__isScriptSetup', {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/MLayout.vue?vue&type=template&id=0fd416a3":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/MLayout.vue?vue&type=template&id=0fd416a3 ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "row"
};
var _hoisted_2 = {
  "class": "col-12 mb-2"
};
var _hoisted_3 = {
  "class": "flex-column flex-lg-row-auto"
};
var _hoisted_4 = {
  "class": "card card-flush mb-0",
  "data-kt-sticky": "false",
  "data-kt-sticky-name": "inbox-aside-sticky",
  "data-kt-sticky-offset": "{default: false, xl: '0px'}",
  "data-kt-sticky-width": "{lg: '275px'}",
  "data-kt-sticky-left": "auto",
  "data-kt-sticky-top": "150px",
  "data-kt-sticky-animation": "false",
  "data-kt-sticky-zindex": "95"
};
var _hoisted_5 = {
  "class": "card-body py-0"
};
var _hoisted_6 = {
  "class": "menu menu-row menu-rounded menu-state-bg menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary"
};
var _hoisted_7 = {
  "class": "menu-item my-3"
};
var _hoisted_8 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "menu-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "menu-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Svg Icon | path: icons/duotune/abstract/abs024.svg"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "svg-icon svg-icon-2 me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  opacity: "0.3",
  d: "M7.16973 20.95C6.26973 21.55 5.16972 20.75 5.46972 19.75L7.36973 14.05L2.46972 10.55C1.56972 9.95005 2.06973 8.55005 3.06973 8.55005H20.8697C21.9697 8.55005 22.3697 9.95005 21.4697 10.55L7.16973 20.95Z",
  fill: "black"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M11.0697 2.75L7.46973 13.95L16.9697 20.85C17.8697 21.45 18.9697 20.65 18.6697 19.65L13.1697 2.75C12.7697 1.75 11.3697 1.75 11.0697 2.75Z",
  fill: "black"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Svg Icon")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "menu-title fw-bolder"
}, "احصائيات الفرع")], -1 /* HOISTED */);
var _hoisted_9 = {
  "class": "menu-item my-3"
};
var _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "menu-link"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "menu-icon"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Svg Icon | path: icons/duotune/abstract/abs024.svg"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "svg-icon svg-icon-2 me-3"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  opacity: "0.3",
  d: "M7.16973 20.95C6.26973 21.55 5.16972 20.75 5.46972 19.75L7.36973 14.05L2.46972 10.55C1.56972 9.95005 2.06973 8.55005 3.06973 8.55005H20.8697C21.9697 8.55005 22.3697 9.95005 21.4697 10.55L7.16973 20.95Z",
  fill: "black"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M11.0697 2.75L7.46973 13.95L16.9697 20.85C17.8697 21.45 18.9697 20.65 18.6697 19.65L13.1697 2.75C12.7697 1.75 11.3697 1.75 11.0697 2.75Z",
  fill: "black"
})])]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Svg Icon")]), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "menu-title fw-bolder"
}, "احصائات النظام")], -1 /* HOISTED */);
var _hoisted_11 = {
  "class": "row"
};
var _hoisted_12 = {
  "class": "col-12"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Sticky aside"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Aside content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Menu"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Menu item"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Marked"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["menu-link", _ctx.$page.component === 'Dashboard/Index' ? 'active' : '']),
    href: "/"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_8];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Marked")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Menu item"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Menu item"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Marked"), $props.manageAllBranches ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
    key: 0,
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["menu-link", _ctx.$page.component === 'Dashboard/SystemStats' ? 'active' : '']),
    href: "/dashboard/system-stats"
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [_hoisted_10];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["class"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Marked")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Menu item")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Menu")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Aside content")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Sticky aside")])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/SystemStats.vue?vue&type=template&id=327aeddc":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/SystemStats.vue?vue&type=template&id=327aeddc ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card mb-5 mb-xl-10"
};
var _hoisted_2 = {
  "class": "card-header border-0 cursor-pointer"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-title m-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "fw-bolder m-0"
}, "احصائيات النظام")], -1 /* HOISTED */);
var _hoisted_4 = {
  "class": "card-toolbar"
};
var _hoisted_5 = {
  "class": "card-body border-top p-9"
};
var _hoisted_6 = {
  id: "search-box",
  style: {
    "display": "none"
  }
};
var _hoisted_7 = {
  "class": "row g-8 mb-8 align-items-end"
};
var _hoisted_8 = {
  "class": "col-lg-2"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "fs-6 form-label fw-bolder text-dark"
}, "من تاريخ ", -1 /* HOISTED */);
var _hoisted_10 = {
  "class": "col-lg-2"
};
var _hoisted_11 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "fs-6 form-label fw-bolder text-dark"
}, "الى تاريخ", -1 /* HOISTED */);
var _hoisted_12 = {
  "class": "col-lg-3"
};
var _hoisted_13 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "las la-search fs-2 me-2"
}, null, -1 /* HOISTED */);
var _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "separator separator-dashed mt-9 mb-6"
}, null, -1 /* HOISTED */);
var _hoisted_15 = {
  "class": "row g-5 g-xl-8"
};
var _hoisted_16 = {
  "class": "col-xl-3"
};
var _hoisted_17 = {
  href: "/branch",
  "class": "card bg-body hoverable card-xl-stretch mb-xl-8"
};
var _hoisted_18 = {
  "class": "card-body"
};
var _hoisted_19 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "svg-icon svg-icon-primary svg-icon-3x ms-n1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z",
  fill: "black"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  opacity: "0.3",
  x: "8",
  y: "3",
  width: "8",
  height: "8",
  rx: "4",
  fill: "black"
})])], -1 /* HOISTED */);
var _hoisted_20 = {
  "class": "text-gray-900 fw-bolder fs-2 mb-2 mt-5"
};
var _hoisted_21 = {
  "class": "text-gray-900 fw-bolder fs-2 mb-2 mt-5"
};
var _hoisted_22 = {
  "class": "col-xl-3"
};
var _hoisted_23 = {
  href: "/meal",
  "class": "card bg-body hoverable card-xl-stretch mb-xl-8"
};
var _hoisted_24 = {
  "class": "card-body"
};
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "svg-icon svg-icon-primary svg-icon-3x ms-n1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z",
  fill: "black"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("rect", {
  opacity: "0.3",
  x: "8",
  y: "3",
  width: "8",
  height: "8",
  rx: "4",
  fill: "black"
})])], -1 /* HOISTED */);
var _hoisted_26 = {
  "class": "text-gray-900 fw-bolder fs-2 mb-2 mt-5"
};
var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-gray-900 fw-bolder fs-2 mb-2 mt-5"
}, " عدد الوجبات", -1 /* HOISTED */);
var _hoisted_28 = {
  "class": "col-xl-3"
};
var _hoisted_29 = {
  href: "/restaurant",
  "class": "card bg-body hoverable card-xl-stretch mb-xl-8"
};
var _hoisted_30 = {
  "class": "card-body"
};
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "svg-icon svg-icon-primary svg-icon-3x ms-n1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  opacity: "0.3",
  d: "M18 21.6C16.3 21.6 15 20.3 15 18.6V2.50001C15 2.20001 14.6 1.99996 14.3 2.19996L13 3.59999L11.7 2.3C11.3 1.9 10.7 1.9 10.3 2.3L9 3.59999L7.70001 2.3C7.30001 1.9 6.69999 1.9 6.29999 2.3L5 3.59999L3.70001 2.3C3.50001 2.1 3 2.20001 3 3.50001V18.6C3 20.3 4.3 21.6 6 21.6H18Z",
  fill: "black"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M12 12.6H11C10.4 12.6 10 12.2 10 11.6C10 11 10.4 10.6 11 10.6H12C12.6 10.6 13 11 13 11.6C13 12.2 12.6 12.6 12 12.6ZM9 11.6C9 11 8.6 10.6 8 10.6H6C5.4 10.6 5 11 5 11.6C5 12.2 5.4 12.6 6 12.6H8C8.6 12.6 9 12.2 9 11.6ZM9 7.59998C9 6.99998 8.6 6.59998 8 6.59998H6C5.4 6.59998 5 6.99998 5 7.59998C5 8.19998 5.4 8.59998 6 8.59998H8C8.6 8.59998 9 8.19998 9 7.59998ZM13 7.59998C13 6.99998 12.6 6.59998 12 6.59998H11C10.4 6.59998 10 6.99998 10 7.59998C10 8.19998 10.4 8.59998 11 8.59998H12C12.6 8.59998 13 8.19998 13 7.59998ZM13 15.6C13 15 12.6 14.6 12 14.6H10C9.4 14.6 9 15 9 15.6C9 16.2 9.4 16.6 10 16.6H12C12.6 16.6 13 16.2 13 15.6Z",
  fill: "black"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M15 18.6C15 20.3 16.3 21.6 18 21.6C19.7 21.6 21 20.3 21 18.6V12.5C21 12.2 20.6 12 20.3 12.2L19 13.6L17.7 12.3C17.3 11.9 16.7 11.9 16.3 12.3L15 13.6V18.6Z",
  fill: "black"
})])], -1 /* HOISTED */);
var _hoisted_32 = {
  "class": "text-gray-900 fw-bolder fs-2 mb-2 mt-5"
};
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-gray-900 fw-bolder fs-2 mb-2 mt-5"
}, "عدد المطاعم", -1 /* HOISTED */);
var _hoisted_34 = {
  "class": "col-xl-3"
};
var _hoisted_35 = {
  href: "/order",
  "class": "card bg-body hoverable card-xl-stretch mb-xl-8"
};
var _hoisted_36 = {
  "class": "card-body"
};
var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "svg-icon svg-icon-primary svg-icon-3x ms-n1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z",
  fill: "black"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  opacity: "0.3",
  d: "M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z",
  fill: "black"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  opacity: "0.3",
  d: "M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z",
  fill: "black"
})])], -1 /* HOISTED */);
var _hoisted_38 = {
  "class": "text-gray-900 fw-bolder fs-2 mb-2 mt-5"
};
var _hoisted_39 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-gray-900 fw-bolder fs-2 mb-2 mt-5"
}, " عدد طلبات اليوم", -1 /* HOISTED */);
var _hoisted_40 = {
  "class": "col-xl-3"
};
var _hoisted_41 = {
  href: "/order",
  "class": "card bg-body hoverable card-xl-stretch mb-xl-8"
};
var _hoisted_42 = {
  "class": "card-body"
};
var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "svg-icon svg-icon-primary svg-icon-3x ms-n1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z",
  fill: "black"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  opacity: "0.3",
  d: "M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z",
  fill: "black"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  opacity: "0.3",
  d: "M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z",
  fill: "black"
})])], -1 /* HOISTED */);
var _hoisted_44 = {
  "class": "text-gray-900 fw-bolder fs-2 mb-2 mt-5"
};
var _hoisted_45 = {
  "class": "text-gray-900 fw-bolder fs-2 mb-2 mt-5"
};
var _hoisted_46 = {
  "class": "col-xl-3"
};
var _hoisted_47 = {
  href: "/order",
  "class": "card bg-body hoverable card-xl-stretch mb-xl-8"
};
var _hoisted_48 = {
  "class": "card-body"
};
var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "svg-icon svg-icon-primary svg-icon-3x ms-n1"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M21 10H13V11C13 11.6 12.6 12 12 12C11.4 12 11 11.6 11 11V10H3C2.4 10 2 10.4 2 11V13H22V11C22 10.4 21.6 10 21 10Z",
  fill: "black"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  opacity: "0.3",
  d: "M12 12C11.4 12 11 11.6 11 11V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V11C13 11.6 12.6 12 12 12Z",
  fill: "black"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  opacity: "0.3",
  d: "M18.1 21H5.9C5.4 21 4.9 20.6 4.8 20.1L3 13H21L19.2 20.1C19.1 20.6 18.6 21 18.1 21ZM13 18V15C13 14.4 12.6 14 12 14C11.4 14 11 14.4 11 15V18C11 18.6 11.4 19 12 19C12.6 19 13 18.6 13 18ZM17 18V15C17 14.4 16.6 14 16 14C15.4 14 15 14.4 15 15V18C15 18.6 15.4 19 16 19C16.6 19 17 18.6 17 18ZM9 18V15C9 14.4 8.6 14 8 14C7.4 14 7 14.4 7 15V18C7 18.6 7.4 19 8 19C8.6 19 9 18.6 9 18Z",
  fill: "black"
})])], -1 /* HOISTED */);
var _hoisted_50 = {
  "class": "text-gray-900 fw-bolder fs-2 mb-2 mt-5"
};
var _hoisted_51 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "text-gray-900 fw-bolder fs-2 mb-2 mt-5"
}, " عدد الطلبات الملغية", -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "الرئيسية"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["MLayout"], {
    manageAllBranches: $props.manageAllBranches
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [_hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        id: "btn-search",
        "class": "nav-link btn btn-sm btn-success me-2",
        onClick: _cache[0] || (_cache[0] = function () {
          return $setup.toggle_search && $setup.toggle_search.apply($setup, arguments);
        })
      }, "بحث ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control flat-picker form-control-solid",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $setup.from_date = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.from_date]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [_hoisted_11, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control flat-picker form-control-solid",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.to_date = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.to_date]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "btn w-100 btn-icon btn-success",
        onClick: _cache[3] || (_cache[3] = function () {
          return $setup.do_search && $setup.do_search.apply($setup, arguments);
        })
      }, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" بحث ")])])]), _hoisted_14])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.branchs, function (branch) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Statistics Widget 5"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Svg Icon | path: icons/duotune/general/gen032.svg"), _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Svg Icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, " اسم الفرع:" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(branch.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, " عدد الموظفين:" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(branch.count_employees), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Statistics Widget 5")]);
      }), 256 /* UNKEYED_FRAGMENT */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Statistics Widget 5"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Svg Icon | path: icons/duotune/general/gen032.svg"), _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Svg Icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.meals), 1 /* TEXT */), _hoisted_27]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Statistics Widget 5")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Statistics Widget 5"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Svg Icon | path: icons/duotune/general/gen032.svg"), _hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Svg Icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.restaurants), 1 /* TEXT */), _hoisted_33]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Statistics Widget 5")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Statistics Widget 5"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_35, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Svg Icon | path: icons/duotune/general/gen032.svg"), _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Svg Icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.ordersToday), 1 /* TEXT */), _hoisted_39]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Statistics Widget 5")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Statistics Widget 5"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Svg Icon | path: icons/duotune/general/gen032.svg"), _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Svg Icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, " عدد الطلبات " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.ordersCount), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, " قيمة الطلبات " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.ordersTotal), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Statistics Widget 5")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Statistics Widget 5"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Svg Icon | path: icons/duotune/general/gen032.svg"), _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Svg Icon"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.orderCanceled), 1 /* TEXT */), _hoisted_51]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Statistics Widget 5")])])];
    }),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["manageAllBranches"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/Admin/Pages/Dashboard/MLayout.vue":
/*!********************************************************!*\
  !*** ./resources/js/Admin/Pages/Dashboard/MLayout.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MLayout_vue_vue_type_template_id_0fd416a3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MLayout.vue?vue&type=template&id=0fd416a3 */ "./resources/js/Admin/Pages/Dashboard/MLayout.vue?vue&type=template&id=0fd416a3");
/* harmony import */ var _MLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MLayout.vue?vue&type=script&lang=js */ "./resources/js/Admin/Pages/Dashboard/MLayout.vue?vue&type=script&lang=js");
/* harmony import */ var F_www_reservation_restaurants_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_www_reservation_restaurants_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_MLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_MLayout_vue_vue_type_template_id_0fd416a3__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Admin/Pages/Dashboard/MLayout.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Admin/Pages/Dashboard/SystemStats.vue":
/*!************************************************************!*\
  !*** ./resources/js/Admin/Pages/Dashboard/SystemStats.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SystemStats_vue_vue_type_template_id_327aeddc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SystemStats.vue?vue&type=template&id=327aeddc */ "./resources/js/Admin/Pages/Dashboard/SystemStats.vue?vue&type=template&id=327aeddc");
/* harmony import */ var _SystemStats_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SystemStats.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Admin/Pages/Dashboard/SystemStats.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var F_www_reservation_restaurants_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_www_reservation_restaurants_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_SystemStats_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_SystemStats_vue_vue_type_template_id_327aeddc__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Admin/Pages/Dashboard/SystemStats.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Admin/Pages/Dashboard/MLayout.vue?vue&type=script&lang=js":
/*!********************************************************************************!*\
  !*** ./resources/js/Admin/Pages/Dashboard/MLayout.vue?vue&type=script&lang=js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MLayout_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MLayout.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/MLayout.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Admin/Pages/Dashboard/SystemStats.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/Dashboard/SystemStats.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SystemStats_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SystemStats_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SystemStats.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/SystemStats.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Admin/Pages/Dashboard/MLayout.vue?vue&type=template&id=0fd416a3":
/*!**************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/Dashboard/MLayout.vue?vue&type=template&id=0fd416a3 ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MLayout_vue_vue_type_template_id_0fd416a3__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_MLayout_vue_vue_type_template_id_0fd416a3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./MLayout.vue?vue&type=template&id=0fd416a3 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/MLayout.vue?vue&type=template&id=0fd416a3");


/***/ }),

/***/ "./resources/js/Admin/Pages/Dashboard/SystemStats.vue?vue&type=template&id=327aeddc":
/*!******************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/Dashboard/SystemStats.vue?vue&type=template&id=327aeddc ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SystemStats_vue_vue_type_template_id_327aeddc__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_SystemStats_vue_vue_type_template_id_327aeddc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./SystemStats.vue?vue&type=template&id=327aeddc */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Dashboard/SystemStats.vue?vue&type=template&id=327aeddc");


/***/ })

}]);