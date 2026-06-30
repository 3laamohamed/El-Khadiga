"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Admin_Pages_FormReservation_CreateReservation_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/CreateReservation.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/CreateReservation.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }



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
    divideTimeIntoQuarters: function divideTimeIntoQuarters() {
      var timeParts = this.form.reservation_time.split(':'); // Split the time by colon
      var hours = parseInt(timeParts[0]); // Get the hours as an integer
      var minutes = parseInt(timeParts[1]); // Get the minutes as an integer

      // Calculate the number of quarter-hours from midnight
      var totalQuarters = hours * 4 + Math.floor(minutes / 15);

      // Calculate the new time with quarters of an hour
      var newHours = Math.floor(totalQuarters / 4); // Get the new hours
      var newMinutes = totalQuarters % 4 * 15; // Get the new minutes

      // Update the reservation_time with the new time format
      this.form.reservation_time = "".concat(newHours.toString().padStart(2, '0'), ":").concat(newMinutes.toString().padStart(2, '0'));
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/Object.assign(__default__, {
  __name: 'CreateReservation',
  props: {
    shop: Object,
    typeOccasions: Object,
    services: Object,
    empId: Object,
    appointmentsTimes: Object,
    shopSetting: Object,
    mobile: String,
    name: String,
    category: String
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var attrs = (0,vue__WEBPACK_IMPORTED_MODULE_1__.useAttrs)();
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.useForm)({
      shop_id: props.shop.id,
      name: props.name,
      mobile: props.mobile,
      count_people: '',
      reservation_time: '',
      reservation_date: '',
      notes: '',
      type_occasion_id: '',
      table_type: '',
      service_id: '',
      casher_id: props.empId
    });
    var submit = function submit() {
      form.post('/website/form', {
        onSuccess: function onSuccess(response) {
          console.log(response);
          // window.location = response
        }
      });
    };

    var showTimePicker = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(false);
    var quarterHours = Array.from({
      length: 96
    }, function (_, index) {
      var hours = Math.floor(index / 4);
      var minutes = index % 4 * 15;
      var timeString = "".concat(hours.toString().padStart(2, '0'), ":").concat(minutes.toString().padStart(2, '0'));
      return timeString;
    });
    var openTimePicker = function openTimePicker() {
      showTimePicker.value = true;
    };
    var selectTime = function selectTime(time) {
      form.data.reservation_time = time;
      showTimePicker.value = false;
    };
    var __returned__ = {
      attrs: attrs,
      get props() {
        return props;
      },
      set props(v) {
        v, _readOnlyError("props");
      },
      get form() {
        return form;
      },
      set form(v) {
        form = v;
      },
      get submit() {
        return submit;
      },
      set submit(v) {
        submit = v;
      },
      showTimePicker: showTimePicker,
      quarterHours: quarterHours,
      openTimePicker: openTimePicker,
      selectTime: selectTime,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/CreateReservation.vue?vue&type=template&id=15eeb020&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/CreateReservation.vue?vue&type=template&id=15eeb020&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _withScopeId = function _withScopeId(n) {
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)("data-v-15eeb020"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n;
};
var _hoisted_1 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("head", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("base", {
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
    rel: "icon",
    href: "/assets/media/logos/cover.png"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <link rel=\"icon\" type=\"image/x-icon\" href=\"/images/favicon.ico\"> "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Fonts"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Fonts"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Global Stylesheets Bundle(used by all pages)"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
    href: "/assets/plugins/global/plugins.bundle.css",
    rel: "stylesheet",
    type: "text/css"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("link", {
    href: "/assets/css/style.bundle.css",
    rel: "stylesheet",
    type: "text/css"
  }), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Global Stylesheets Bundle")], -1 /* HOISTED */);
});
var _hoisted_2 = {
  id: "kt_body",
  "class": "bg-light"
};
var _hoisted_3 = {
  "class": "d-flex flex-column flex-root"
};
var _hoisted_4 = {
  "class": "d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed"
};
var _hoisted_5 = {
  "class": "w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto"
};
var _hoisted_6 = {
  "class": "text-center mb-2"
};
var _hoisted_7 = {
  "class": "logo2"
};
var _hoisted_8 = ["src"];
var _hoisted_9 = {
  "class": "text-center mb-2"
};
var _hoisted_10 = {
  "class": "logo"
};
var _hoisted_11 = ["src"];
var _hoisted_12 = {
  "class": "fv-row mb-2"
};
var _hoisted_13 = ["textContent"];
var _hoisted_14 = {
  "class": "fv-row mb-2"
};
var _hoisted_15 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex flex-stack mb-2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                <label class=\"form-label fw-bolder text-dark fs-6 mb-0\">رقم صاحب الحجز </label>")], -1 /* HOISTED */);
});
var _hoisted_16 = ["textContent"];
var _hoisted_17 = {
  "class": "fv-row mb-2"
};
var _hoisted_18 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex flex-stack mb-2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                <label class=\"form-label fw-bolder text-dark fs-6 mb-0\">عددالاشخاص</label>")], -1 /* HOISTED */);
});
var _hoisted_19 = ["textContent"];
var _hoisted_20 = {
  "class": "row"
};
var _hoisted_21 = {
  "class": "col-lg-6"
};
var _hoisted_22 = {
  "class": "fv-row mb-2"
};
var _hoisted_23 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex flex-stack mb-2"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                <label class=\"form-label fw-bolder text-dark fs-6 mb-0\">تاريخ الحجز </label>")], -1 /* HOISTED */);
});
var _hoisted_24 = ["textContent"];
var _hoisted_25 = {
  "class": "col-lg-6"
};
var _hoisted_26 = {
  "class": "fv-row mb-2"
};
var _hoisted_27 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex flex-stack mb-2"
  }, null, -1 /* HOISTED */);
});
var _hoisted_28 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: ""
  }, "اختر الوقت..", -1 /* HOISTED */);
});
var _hoisted_29 = ["value"];
var _hoisted_30 = {
  key: 1,
  "class": "form-control form-control-lg form-control-solid",
  disabled: "",
  type: "text",
  placeholder: "الوقت",
  autocomplete: "off"
};
var _hoisted_31 = ["textContent"];
var _hoisted_32 = {
  "class": "row"
};
var _hoisted_33 = {
  key: 0,
  "class": "col-lg-6"
};
var _hoisted_34 = {
  "class": "fv-row mb-2"
};
var _hoisted_35 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex flex-stack mb-2"
  }, null, -1 /* HOISTED */);
});
var _hoisted_36 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
    value: "",
    disabled: ""
  }, "اختر المناسبة..", -1 /* HOISTED */);
});
var _hoisted_37 = ["value"];
var _hoisted_38 = ["textContent"];
var _hoisted_39 = {
  "class": "col-lg-6"
};
var _hoisted_40 = {
  "class": "fv-row mb-2"
};
var _hoisted_41 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex flex-stack mb-2"
  }, null, -1 /* HOISTED */);
});
var _hoisted_42 = {
  value: "",
  disabled: ""
};
var _hoisted_43 = ["value"];
var _hoisted_44 = ["textContent"];
var _hoisted_45 = {
  "class": "fv-row mb-2"
};
var _hoisted_46 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
    "class": "d-flex flex-stack mb-2"
  }, null, -1 /* HOISTED */);
});
var _hoisted_47 = ["textContent"];
var _hoisted_48 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", {
    style: {
      "color": "red"
    }
  }, "تنويه:")], -1 /* HOISTED */);
});
var _hoisted_49 = {
  style: {
    "color": "#115da6"
  }
};
var _hoisted_50 = {
  key: 0
};
var _hoisted_51 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, " لا يوجد دفع عند الحجز ", -1 /* HOISTED */);
});
var _hoisted_52 = [_hoisted_51];
var _hoisted_53 = {
  key: 1
};
var _hoisted_54 = {
  key: 2
};
var _hoisted_55 = {
  "class": "text-center"
};
var _hoisted_56 = ["disabled"];
var _hoisted_57 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "indicator-label"
  }, "تأكيد الحجز", -1 /* HOISTED */);
});
var _hoisted_58 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "indicator-progress"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Please wait... "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "spinner-border spinner-border-sm align-middle ms-2"
  })], -1 /* HOISTED */);
});
var _hoisted_59 = [_hoisted_57, _hoisted_58];
var _hoisted_60 = ["disabled"];
var _hoisted_61 = {
  "class": "indicator-label"
};
var _hoisted_62 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "indicator-progress"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Please wait... "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "spinner-border spinner-border-sm align-middle ms-2"
  })], -1 /* HOISTED */);
});
var _hoisted_63 = ["disabled"];
var _hoisted_64 = {
  "class": "indicator-label"
};
var _hoisted_65 = /*#__PURE__*/_withScopeId(function () {
  return /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "indicator-progress"
  }, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Please wait... "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
    "class": "spinner-border spinner-border-sm align-middle ms-2"
  })], -1 /* HOISTED */);
});

function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _$props$shop$logo_url;
  var _component_VueDatePicker = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("VueDatePicker");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <Head title=\"حجز الموعد\"/> "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Head"), _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Head"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("body", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Main"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Root"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Authentication - Sign-in "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Content"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("            <div  class=\"d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20\" style=\"max-width: 100%; overflow-x: auto;\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                &lt;!&ndash;begin::Logo&ndash;&gt;"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                <div class=\"d-flex flex-stack flex-wrap flex-md-nowrap card-rounded shadow p-8 p-lg-8 mb-n5 mb-lg-n13\" style=\"width: 800px; height: 150px; background-image: url('/assets/media/logos/cover.png')\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                </div>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                &lt;!&ndash;end::Wrapper&ndash;&gt;"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("            </div>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
    onSubmit: _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
      return $setup.submit && $setup.submit.apply($setup, arguments);
    }, ["prevent"])),
    "class": "form"
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "d-none",
    type: "text",
    "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
      return $setup.form.casher_id = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.casher_id]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: '/assets/media/logos/01.png',
    alt: "logo"
  }, null, 8 /* PROPS */, _hoisted_8)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
    src: (_$props$shop$logo_url = $props.shop.logo_url) !== null && _$props$shop$logo_url !== void 0 ? _$props$shop$logo_url : '/assets/media/logos/01.png',
    alt: "logo"
  }, null, 8 /* PROPS */, _hoisted_11)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                            <label class=\"form-label fs-6 fw-bolder text-dark\">اسم صاحب الحجز </label>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control form-control-lg form-control-solid",
    placeholder: "الاسم",
    type: "text",
    "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
      return $setup.form.name = $event;
    }),
    autocomplete: "off"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.name]]), $setup.form.errors.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.name),
    "class": "text-danger text-xs mt-1"
  }, null, 8 /* PROPS */, _hoisted_13)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control form-control-lg form-control-solid",
    placeholder: "رقم الجوال",
    type: "tel",
    style: {
      "text-align": "right"
    },
    "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
      return $setup.form.mobile = $event;
    }),
    autocomplete: "off"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.mobile]]), $setup.form.errors.mobile ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.mobile),
    "class": "text-danger text-xs mt-1"
  }, null, 8 /* PROPS */, _hoisted_16)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
    "class": "form-control form-control-lg form-control-solid",
    placeholder: "عدد الاشخاص",
    type: "number",
    "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
      return $setup.form.count_people = $event;
    }),
    autocomplete: "off"
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.count_people]]), $setup.form.errors.count_people ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.count_people),
    "class": "text-danger text-xs mt-1"
  }, null, 8 /* PROPS */, _hoisted_19)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                <input class=\"form-control form-control-lg form-control-solid  \" id=\"datepicker\" type=\"text\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                       placeholder=\"اختر التاريخ\" style=\"width: 100%;\"   v-model=\"form.reservation_date\""), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                                       />"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_VueDatePicker, {
    "input-class-name": "form-control form-control-lg form-control-solid vue-date-picker-custom",
    "enable-time-picker": false,
    modelValue: $setup.form.reservation_date,
    "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
      return $setup.form.reservation_date = $event;
    }),
    "min-date": new Date(),
    "model-type": "yyyy.MM.dd",
    placeholder: "تاريخ الحجز",
    "auto-apply": ""
  }, null, 8 /* PROPS */, ["modelValue", "min-date"]), $setup.form.errors.reservation_date ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.reservation_date),
    "class": "text-danger text-xs mt-1"
  }, null, 8 /* PROPS */, _hoisted_24)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_hoisted_27, $props.appointmentsTimes ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("select", {
    key: 0,
    "class": "form-control form-control-lg form-control-solid form-control m-bootstrap-select m-bootstrap-select--solid m_selectpicker",
    "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
      return $setup.form.reservation_time = $event;
    }),
    onFocus: $setup.openTimePicker,
    "data-live-search": "true",
    "data-size": "5",
    "data-width": "100%"
  }, [_hoisted_28, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.appointmentsTimes, function (time) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      value: time,
      key: time
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(time), 9 /* TEXT, PROPS */, _hoisted_29);
  }), 128 /* KEYED_FRAGMENT */))], 544 /* HYDRATE_EVENTS, NEED_PATCH */)), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.form.reservation_time]]) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), !$props.appointmentsTimes ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("input", _hoisted_30)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.form.errors.reservation_time ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 2,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.reservation_time),
    "class": "text-danger text-xs mt-1"
  }, null, 8 /* PROPS */, _hoisted_31)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [$props.typeOccasions.length > 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_33, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control form-control-lg form-control-solid",
    "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
      return $setup.form.type_occasion_id = $event;
    })
  }, [_hoisted_36, ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.typeOccasions, function (type_occasion) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: type_occasion.id,
      value: type_occasion.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(type_occasion.title), 9 /* TEXT, PROPS */, _hoisted_37);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.form.type_occasion_id]]), $setup.form.errors.reservation_time ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.reservation_time),
    "class": "text-danger text-xs mt-1"
  }, null, 8 /* PROPS */, _hoisted_38)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_39, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_40, [_hoisted_41, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
    "class": "form-control form-control-lg form-control-solid",
    "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
      return $setup.form.service_id = $event;
    })
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", _hoisted_42, "اختر " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.category) + " ..", 1 /* TEXT */), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.services, function (service) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
      key: service.id,
      value: service.id
    }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(service.title) + " | " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(service.table_type == 2 ? '' : service.table_type == 1 ? 'داخلية' : 'خارجية'), 9 /* TEXT, PROPS */, _hoisted_43);
  }), 128 /* KEYED_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.form.service_id]]), $setup.form.errors.reservation_time ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.reservation_time),
    "class": "text-danger text-xs mt-1"
  }, null, 8 /* PROPS */, _hoisted_44)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
    "class": "form-control form-control-lg form-control-solid",
    placeholder: "الملاحظات",
    "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
      return $setup.form.notes = $event;
    })
  }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.notes]]), $setup.form.errors.notes ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
    key: 0,
    textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.notes),
    "class": "text-danger text-xs mt-1"
  }, null, 8 /* PROPS */, _hoisted_47)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), _hoisted_48, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" في حال عدم الحضور خلال "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("b", _hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.shopSetting.reservation_period) + " دقائق", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" يعتبر الحجز ملغي ")])]), $props.shopSetting.payment_method == 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_50, _hoisted_52)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.shopSetting.payment_method == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, " يتم احتساب الدفع بقيمة " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.shopSetting.payment_value) + " ريال لكل شخص ", 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.shopSetting.payment_method == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, " قيمة الحجز ثابتة وتساوي " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.shopSetting.payment_value) + " ريال ", 1 /* TEXT */)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Input group"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Actions"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Submit button"), $props.shopSetting.payment_method == 2 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 0,
    type: "submit",
    "class": "btn btn-lg w-100 mb-5",
    style: {
      "background-color": "#115da6",
      "color": "#ffffff"
    },
    disabled: $setup.form.processing
  }, _hoisted_59, 8 /* PROPS */, _hoisted_56)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.shopSetting.payment_method == 0 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 1,
    type: "submit",
    "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(['btn', 'btn-lg', 'w-100', 'mb-5', $setup.form.count_people == 0 ? 'disabled' : '']),
    disabled: $setup.form.count_people == 0 ? true : $setup.form.processing ? true : false,
    style: {
      "background-color": "#115da6",
      "color": "#ffffff"
    }
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("ادفع "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.shopSetting.payment_value * $setup.form.count_people), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ريال ")]), _hoisted_62], 10 /* CLASS, PROPS */, _hoisted_60)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.shopSetting.payment_method == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
    key: 2,
    type: "submit",
    "class": "btn btn-lg w-100 mb-5",
    style: {
      "background-color": "#115da6",
      "color": "#ffffff"
    },
    disabled: $setup.form.processing
  }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_64, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("ادفع "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.shopSetting.payment_value), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" ريال ")]), _hoisted_65], 8 /* PROPS */, _hoisted_63)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Link"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Submit button")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Actions")], 32 /* HYDRATE_EVENTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Form")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Content")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Authentication - Sign-in")])])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/CreateReservation.vue?vue&type=style&index=0&id=15eeb020&scoped=true&lang=css":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/CreateReservation.vue?vue&type=style&index=0&id=15eeb020&scoped=true&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\ninput[type=\"number\"][data-v-15eeb020] {\n    direction: rtl;\n}\n.logo2[data-v-15eeb020] {\n    width: 100%;\n    display: flex;\n    align-items: flex-end;\n    justify-content: flex-end;\n    margin-bottom: 2rem;\n}\n.logo2 div[data-v-15eeb020] {\n    width: 100px;\n    height: 100px;\n}\n.logo2 div img[data-v-15eeb020] {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n.logo[data-v-15eeb020] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-bottom: 2rem;\n}\n.logo div[data-v-15eeb020] {\n    width: 100px;\n    height: 100px;\n}\n.logo div img[data-v-15eeb020] {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 50%;\n    -webkit-border-radius: 50%;\n    -moz-border-radius: 50%;\n    -ms-border-radius: 50%;\n    -o-border-radius: 50%;\n}\ninput [type= 'date'][data-v-15eeb020]::after{\n    color: #fff;\n    content: attr(placeholder);\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/CreateReservation.vue?vue&type=style&index=0&id=15eeb020&scoped=true&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/CreateReservation.vue?vue&type=style&index=0&id=15eeb020&scoped=true&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateReservation_vue_vue_type_style_index_0_id_15eeb020_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateReservation.vue?vue&type=style&index=0&id=15eeb020&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/CreateReservation.vue?vue&type=style&index=0&id=15eeb020&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateReservation_vue_vue_type_style_index_0_id_15eeb020_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateReservation_vue_vue_type_style_index_0_id_15eeb020_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Admin/Pages/FormReservation/CreateReservation.vue":
/*!************************************************************************!*\
  !*** ./resources/js/Admin/Pages/FormReservation/CreateReservation.vue ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CreateReservation_vue_vue_type_template_id_15eeb020_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateReservation.vue?vue&type=template&id=15eeb020&scoped=true */ "./resources/js/Admin/Pages/FormReservation/CreateReservation.vue?vue&type=template&id=15eeb020&scoped=true");
/* harmony import */ var _CreateReservation_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateReservation.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Admin/Pages/FormReservation/CreateReservation.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _CreateReservation_vue_vue_type_style_index_0_id_15eeb020_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateReservation.vue?vue&type=style&index=0&id=15eeb020&scoped=true&lang=css */ "./resources/js/Admin/Pages/FormReservation/CreateReservation.vue?vue&type=style&index=0&id=15eeb020&scoped=true&lang=css");
/* harmony import */ var C_xampp_htdocs_amyal_jahez_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,C_xampp_htdocs_amyal_jahez_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_CreateReservation_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_CreateReservation_vue_vue_type_template_id_15eeb020_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-15eeb020"],['__file',"resources/js/Admin/Pages/FormReservation/CreateReservation.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Admin/Pages/FormReservation/CreateReservation.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/FormReservation/CreateReservation.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateReservation_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateReservation_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateReservation.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/CreateReservation.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Admin/Pages/FormReservation/CreateReservation.vue?vue&type=template&id=15eeb020&scoped=true":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/FormReservation/CreateReservation.vue?vue&type=template&id=15eeb020&scoped=true ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateReservation_vue_vue_type_template_id_15eeb020_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateReservation_vue_vue_type_template_id_15eeb020_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateReservation.vue?vue&type=template&id=15eeb020&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/CreateReservation.vue?vue&type=template&id=15eeb020&scoped=true");


/***/ }),

/***/ "./resources/js/Admin/Pages/FormReservation/CreateReservation.vue?vue&type=style&index=0&id=15eeb020&scoped=true&lang=css":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/FormReservation/CreateReservation.vue?vue&type=style&index=0&id=15eeb020&scoped=true&lang=css ***!
  \********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_CreateReservation_vue_vue_type_style_index_0_id_15eeb020_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./CreateReservation.vue?vue&type=style&index=0&id=15eeb020&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/FormReservation/CreateReservation.vue?vue&type=style&index=0&id=15eeb020&scoped=true&lang=css");


/***/ })

}]);