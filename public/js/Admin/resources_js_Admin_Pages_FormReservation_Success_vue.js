"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Admin_Pages_FormReservation_Success_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/Success.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/Success.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }



var __default__ = {
  layout: [],
  data: function data() {
    return {
      form: {
        reservation_time: ''
      }
    };
  },
  watch: {
    "$page.props.flash.message": {
      handler: function handler() {
        if (this.$page.props.flash.message) {
          toastr.options = {
            "closeButton": true,
            "debug": false,
            "newestOnTop": false,
            "progressBar": false,
            "positionClass": "toastr-top-left p-5",
            "preventDuplicates": false,
            "onclick": null,
            "showDuration": "300",
            "hideDuration": "1000",
            "timeOut": "5000",
            "extendedTimeOut": "1000",
            "showEasing": "swing",
            "hideEasing": "linear",
            "showMethod": "fadeIn",
            "hideMethod": "fadeOut"
          };
          var msg = this.$page.props.flash.message.msg;
          if (this.$page.props.flash.message.type === 'success') toastr.success(msg);else if (this.$page.props.flash.message.type === 'warning') toastr.warning(msg);else if (this.$page.props.flash.message.type === 'error') toastr.error(msg);else toastr.info(msg);
        }
      },
      deep: true
    },
    'form.reservation_time': function formReservation_time(newValue) {
      // Triggered whenever the reservation_time changes
      if (newValue) {
        this.divideTimeIntoQuarters();
      }
    }
  },
  methods: {
    get_day_name_from_date_string: function get_day_name_from_date_string(dateString) {
      var date = new Date(dateString);
      var options = {
        weekday: 'long',
        timeZone: 'UTC',
        timeZoneName: 'short'
      };
      var formatter = new Intl.DateTimeFormat('ar-SA', options);
      var parts = formatter.formatToParts(date);
      var arabicDayName = '';
      var _iterator = _createForOfIteratorHelper(parts),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var part = _step.value;
          if (part.type === 'weekday') {
            arabicDayName = part.value;
            break;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      return arabicDayName;
    },
    get_time_with_arabic_am_pm: function get_time_with_arabic_am_pm(timeString) {
      var arabicTranslations = {
        am: 'صباحاً',
        pm: 'مساءاً'
      };
      return timeString.replace(/am|pm/gi, function (match) {
        return arabicTranslations[match.toLowerCase()];
      });
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'Success',
  props: {
    reservations: Object,
    client: String,
    tables_ids: String,
    category: String,
    returnMessage: String
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var attrs = (0,vue__WEBPACK_IMPORTED_MODULE_1__.useAttrs)();
    var __returned__ = {
      get props() {
        return props;
      },
      set props(v) {
        v, _readOnlyError("props");
      },
      attrs: attrs,
      get Inertia() {
        return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia;
      },
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,
      useAttrs: vue__WEBPACK_IMPORTED_MODULE_1__.useAttrs,
      get useForm() {
        return _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.useForm;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/Success.vue?vue&type=template&id=54aa797a":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/Success.vue?vue&type=template&id=54aa797a ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("head", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("base", {
  href: "../../../"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  charset: "utf-8"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  name: "description",
  content: "The most advanced Bootstrap Admin Theme on Themeforest trusted by 94,000 beginners and professionals. Multi-demo, Dark Mode, RTL support and complete React, Angular, Vue & Laravel versions. Grab your copy now and get life-time updates for free."
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  name: "keywords",
  content: "Metronic, bootstrap, bootstrap 5, Angular, VueJs, React, Laravel, admin themes, web design, figma, web development, free templates, free admin themes, bootstrap theme, bootstrap template, bootstrap dashboard, bootstrap dak mode, bootstrap button, bootstrap datepicker, bootstrap timepicker, fullcalendar, datatables, flaticon"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  name: "viewport",
  content: "width=device-width, initial-scale=1"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  property: "og:locale",
  content: "en_US"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  property: "og:type",
  content: "article"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  property: "og:title",
  content: "Metronic - Bootstrap 5 HTML, VueJS, React, Angular & Laravel Admin Dashboard Theme"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  property: "og:url",
  content: "https://keenthemes.com/metronic"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("meta", {
  property: "og:site_name",
  content: "Keenthemes | Metronic"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
  rel: "canonical",
  href: "https://preview.keenthemes.com/metronic8"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
  rel: "shortcut icon",
  href: "/assets/media/logos/favicon.ico"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Fonts"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\"/> "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Fonts"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Global Stylesheets Bundle(used by all pages)"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
  href: "/assets/plugins/global/plugins.bundle.css",
  rel: "stylesheet",
  type: "text/css"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
  href: "/assets/css/style.bundle.css",
  rel: "stylesheet",
  type: "text/css"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Global Stylesheets Bundle")], -1 /* HOISTED */);
var _hoisted_2 = {
  id: "kt_body",
  "class": "bg-light",
  style: {
    "height": "95vh"
  }
};
var _hoisted_3 = {
  "class": "congrats-screen"
};
var _hoisted_4 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "congrats-title"
}, "!تهانينا لك", -1 /* HOISTED */);
var _hoisted_5 = {
  "class": "congrats-description"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/assets/success/verificationIcon.png",
  alt: "verification-icon"
}, null, -1 /* HOISTED */);
var _hoisted_7 = {
  "class": "collection"
};
var _hoisted_8 = {
  "class": "top-image-container"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/assets/success/Subtract-top.png"
}, null, -1 /* HOISTED */);
var _hoisted_10 = {
  "class": "first-row"
};
var _hoisted_11 = {
  "class": "reservation-people"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "reservation-people-title"
}, "عدد الاشخاص:", -1 /* HOISTED */);
var _hoisted_13 = {
  "class": "reservation-people-number"
};
var _hoisted_14 = {
  "class": "reservation-table"
};
var _hoisted_15 = {
  "class": "reservation-table-title"
};
var _hoisted_16 = {
  "class": "reservation-table-number"
};
var _hoisted_17 = {
  "class": "top-image-container"
};
var _hoisted_18 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  src: "/assets/success/Subtract-bottom.png"
}, null, -1 /* HOISTED */);
var _hoisted_19 = {
  "class": "second-row"
};
var _hoisted_20 = {
  "class": "reservation-time"
};
var _hoisted_21 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "reservation-time-title"
}, "وقت الحجز:", -1 /* HOISTED */);
var _hoisted_22 = {
  "class": "reservation-time-description"
};
var _hoisted_23 = {
  "class": "reservation-date"
};
var _hoisted_24 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "reservation-date-title"
}, "تاريخ الحجز:", -1 /* HOISTED */);
var _hoisted_25 = {
  "class": "reservation-date-description"
};
var _hoisted_26 = {
  "class": "reservation"
};
var _hoisted_27 = {
  "class": "reservation-circle"
};
var _hoisted_28 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "reservation-title"
}, "رقم الحجز", -1 /* HOISTED */);
var _hoisted_29 = {
  "class": "reservation-number"
};
var _hoisted_30 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
  "class": "info"
}, "يرجي حفظ الشاشة وتقديمها لموظف الحجز", -1 /* HOISTED */);
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
  "class": "logo",
  src: "/assets/success/bookingLogo.png",
  alt: "booking-logo"
}, null, -1 /* HOISTED */);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "حجز الموعد"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Head"), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Head"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("body", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Main"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Root"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [_hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.returnMessage), 1 /* TEXT */), _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.reservations.count_people), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_15, "رقم " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.category) + ":", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.tables_ids), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.get_time_with_arabic_am_pm($props.reservations.reservation_time)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [_hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($options.get_day_name_from_date_string($props.reservations.reservation_date)) + " " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.reservations.reservation_date), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.reservations.id), 1 /* TEXT */)])])]), _hoisted_30, _hoisted_31]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"d-flex flex-column flex-root\" style=\"height: 100%;\">\n        <div style=\"height: 100%;\"\n             class=\"d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed\">\n            <div class=\"w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto\" style=\"margin-top: auto !important;margin-bottom: auto !important;\">\n                    <div class=\"row text-center\">\n                        <h1 style=\"    text-align: center;padding: 10px;\">\n                            👏 تهانينا لك\n                            {{ client }}\n                            !\n                        </h1>\n                        <h1 style=\"    text-align: center;padding: 10px;\">\n                            تم تأكيد حجزك بنجاح\n                        </h1>\n                        <img :src=\"'/assets/media/success-check.png'\" style=\"width: 75px;margin: 15px auto;\" alt=\"\">\n\n                        <h3 style=\"color: #667085\">رقم الحجز: {{ reservations.id }}</h3>\n                        <h3 style=\"color: #667085\">الخدمة : {{ tables_ids }}</h3>\n                        <h3 style=\"color: #667085\">عدد الاشخاص: {{ reservations.count_people }}</h3>\n                        <h3 style=\"color: #667085\">{{ get_day_name_from_date_string(reservations.reservation_date) }} {{ reservations.reservation_date }} </h3>\n                        <h3 style=\"color: #667085\">{{ get_time_with_arabic_am_pm(reservations.reservation_time) }}</h3>\n                        <h3 style=\"color: #667085;font-size: 12px;padding-top: 16px;\">\n                            يرجى حفظ الشاشة وتقديمها لموظف الاستقبال\n                        </h3>\n                    </div>\n            </div>\n        </div>\n    </div> ")])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/Success.vue?vue&type=style&index=0&id=54aa797a&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/Success.vue?vue&type=style&index=0&id=54aa797a&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n@font-face {\n  font-family: \"Somar\";\n  src: url(\"/assets/success/alfont_com_SomarGX.ttf\");\n}\n* {\n  font-family: \"Somar\", sans-serif;\n}\n*:where(:not(html, iframe, canvas, img, svg, video, audio):not(svg *, symbol *)) {\n  all: unset;\n  display: revert;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\na,\nbutton {\n  cursor: revert;\n}\nol,\nul,\nmenu {\n  list-style: none;\n}\nimg {\n  max-inline-size: 100%;\n  max-block-size: 100%;\n}\ntable {\n  border-collapse: collapse;\n}\ninput,\ntextarea {\n  -webkit-user-select: auto;\n}\ntextarea {\n  white-space: revert;\n}\nmeter {\n  -webkit-appearance: revert;\n  -moz-appearance: revert;\n       appearance: revert;\n}\n:where(pre) {\n  all: revert;\n}\n::-moz-placeholder {\n  color: unset;\n}\n::placeholder {\n  color: unset;\n}\n::marker {\n  content: initial;\n}\n:where([hidden]) {\n  display: none;\n}\n:where([contenteditable]:not([contenteditable=\"false\"])) {\n  -moz-user-modify: read-write;\n  -webkit-user-modify: read-write;\n  overflow-wrap: break-word;\n  -webkit-line-break: after-white-space;\n  -webkit-user-select: auto;\n}\n:where([draggable=\"true\"]) {\n  -webkit-user-drag: element;\n}\n:where(dialog:modal) {\n  all: revert;\n}\n:root {\n  --primary-color: #115da6;\n  --secondary-color: #013363;\n  --light-color: #a5a5a5;\n}\n.congrats-screen {\n  background-color: #f4f8fb;\n  padding-top: 30px;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.congrats-title {\n  font-weight: 700;\n  font-size: 32px;\n  color: var(--primary-color);\n  line-height: 40px;\n  text-align: center;\n}\n.congrats-description {\n  font-size: 16px;\n  color: var(--light-color);\n  line-height: 40px;\n}\n.reservation {\n  padding: 15px;\n  padding-top: 60px;\n  display: flex;\n\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.collection {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n}\n.reservation {\n  position: absolute;\n  width: 100%;\n}\n.reservation-circle {\n  background: #f8fcff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n}\n.reservation-title {\n  font-size: 14px;\n  color: var(--secondary-color);\n}\n.reservation-number {\n  font-size: 48px;\n  font-weight: 700;\n  color: var(--primary-color);\n}\n.reservation-people {\n  display: flex;\n  flex-direction: column;\n}\n.reservation-table {\n  display: flex;\n  flex-direction: column;\n}\n.first-row {\n  position: absolute;\n  top: 70%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 250px;\n  text-align: right;\n}\n.second-row {\n  position: absolute;\n  color: white;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 250px;\n  text-align: right;\n}\n.top-image-container {\n  position: relative;\n}\n.reservation-people-title,\n.reservation-table-title {\n  font-size: 14px;\n  line-height: 22px;\n  font-weight: 700;\n  color: var(--secondary-color);\n  text-align :center;\n}\n.reservation-people-number,\n.reservation-table-number {\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 40px;\n  text-align: center;\n  color: var(--primary-color);\n}\n.info {\n  color: var(--light-color);\n  font-size: 14px;\n  margin: 20px 0px;\n}\n.reservation-time-title,\n.reservation-date-title {\n  color: white;\n  font-weight: 700;\n  font-size: 12px;\n  text-align: center;\n}\n.reservation-time-description,\n.reservation-date-description {\n  color: white;\n  font-size: 14px;\n  font-weight: 700;\n}\n.logo {\n  margin-top: 15px;\n  margin-bottom: 20px;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/Success.vue?vue&type=style&index=0&id=54aa797a&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/Success.vue?vue&type=style&index=0&id=54aa797a&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Success_vue_vue_type_style_index_0_id_54aa797a_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Success.vue?vue&type=style&index=0&id=54aa797a&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/Success.vue?vue&type=style&index=0&id=54aa797a&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Success_vue_vue_type_style_index_0_id_54aa797a_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Success_vue_vue_type_style_index_0_id_54aa797a_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Admin/Pages/FormReservation/Success.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Admin/Pages/FormReservation/Success.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Success_vue_vue_type_template_id_54aa797a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Success.vue?vue&type=template&id=54aa797a */ "./resources/js/Admin/Pages/FormReservation/Success.vue?vue&type=template&id=54aa797a");
/* harmony import */ var _Success_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Success.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Admin/Pages/FormReservation/Success.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Success_vue_vue_type_style_index_0_id_54aa797a_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Success.vue?vue&type=style&index=0&id=54aa797a&lang=css */ "./resources/js/Admin/Pages/FormReservation/Success.vue?vue&type=style&index=0&id=54aa797a&lang=css");
/* harmony import */ var C_xampp_htdocs_amyal_jahez_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_amyal_jahez_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Success_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Success_vue_vue_type_template_id_54aa797a__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Admin/Pages/FormReservation/Success.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Admin/Pages/FormReservation/Success.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/FormReservation/Success.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Success_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Success_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Success.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/Success.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Admin/Pages/FormReservation/Success.vue?vue&type=template&id=54aa797a":
/*!********************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/FormReservation/Success.vue?vue&type=template&id=54aa797a ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Success_vue_vue_type_template_id_54aa797a__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Success_vue_vue_type_template_id_54aa797a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Success.vue?vue&type=template&id=54aa797a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/Success.vue?vue&type=template&id=54aa797a");


/***/ }),

/***/ "./resources/js/Admin/Pages/FormReservation/Success.vue?vue&type=style&index=0&id=54aa797a&lang=css":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/FormReservation/Success.vue?vue&type=style&index=0&id=54aa797a&lang=css ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Success_vue_vue_type_style_index_0_id_54aa797a_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Success.vue?vue&type=style&index=0&id=54aa797a&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/Success.vue?vue&type=style&index=0&id=54aa797a&lang=css");


/***/ })

}]);