"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Admin_Pages_OrderPeriod_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/OrderPeriod/Show.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/OrderPeriod/Show.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Shared_Pagination__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../Shared/Pagination */ "./resources/js/Admin/Shared/Pagination.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Shared/Layout */ "./resources/js/Admin/Shared/Layout.vue");
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Show',
  props: {
    orderPeriod: Object,
    currentDate: Object,
    canCancelOrder: Object,
    canDeletePriorDateOrder: Object,
    filters: Object
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var attrs = (0,vue__WEBPACK_IMPORTED_MODULE_1__.useAttrs)();
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.useForm)({
      attachments: []
    });
    var att_form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.useForm)({
      file: null,
      name: props.currentDate
    });
    var submit_att = function submit_att() {
      att_form.post('/add/attachments', {
        preserveScroll: true,
        onSuccess: function onSuccess() {
          if (attrs.flash.additional_data) {
            form.attachments.push(attrs.flash.additional_data);
            att_form.reset();
          }
        }
      });
    };
    var submit = function submit() {
      form.post('/add/period/attachment/' + props.orderPeriod.id);
    };
    var delete_att = function delete_att(file_name) {
      Swal.fire({
        title: 'هل أنت متأكد من الحذف؟',
        text: "لا يمكن التراجع عن هذه العملية!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
      }).then(function (result) {
        if (result.isConfirmed) {
          form.attachments = form.attachments.filter(function (item) {
            return item.file_path !== file_name;
          });
        }
      });
    };
    var name = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(props.filters.name);
    var status_id = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(props.filters.status_id);
    var from_date = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(props.filters.from_date);
    var to_date = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)(props.filters.to_date);
    var toggle_search = function toggle_search() {
      $('#search-box').toggle(1000);
      var v_button = $('#btn-search');
      v_button.text() === 'بحث' ? v_button.text('اخفاء الفلاتر') : v_button.text('بحث');
    };
    var do_search = function do_search() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia.get('/order-period', {
        name: name.value,
        status_id: status_id.value,
        from_date: from_date.value,
        to_date: to_date.value
      }, {
        preserveState: true,
        replace: true,
        preserveScroll: true
      });
    };
    var show_period = function show_period(item) {
      form.order_period_id = item.id;
      form.branch_id = item.branch.id;
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
      get att_form() {
        return att_form;
      },
      set att_form(v) {
        att_form = v;
      },
      get submit_att() {
        return submit_att;
      },
      set submit_att(v) {
        submit_att = v;
      },
      get submit() {
        return submit;
      },
      set submit(v) {
        submit = v;
      },
      get delete_att() {
        return delete_att;
      },
      set delete_att(v) {
        delete_att = v;
      },
      get name() {
        return name;
      },
      set name(v) {
        name = v;
      },
      get status_id() {
        return status_id;
      },
      set status_id(v) {
        status_id = v;
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
      get show_period() {
        return show_period;
      },
      set show_period(v) {
        show_period = v;
      },
      get Pagination() {
        return _Shared_Pagination__WEBPACK_IMPORTED_MODULE_0__["default"];
      },
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,
      useAttrs: vue__WEBPACK_IMPORTED_MODULE_1__.useAttrs,
      get Inertia() {
        return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_2__.Inertia;
      },
      get useForm() {
        return _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_3__.useForm;
      },
      get Layout() {
        return _Shared_Layout__WEBPACK_IMPORTED_MODULE_4__["default"];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Shared/Pagination.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Shared/Pagination.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    links: Array
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/OrderPeriod/Show.vue?vue&type=template&id=73efb406":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/OrderPeriod/Show.vue?vue&type=template&id=73efb406 ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "card-header"
};
var _hoisted_3 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-title"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
  "class": "fw-bolder"
}, "تفاصيل الفترة")], -1 /* HOISTED */);
var _hoisted_4 = {
  "class": "card-toolbar",
  hidden: ""
};
var _hoisted_5 = {
  "class": "card-body pt-3"
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
  "class": "mb-10"
};
var _hoisted_16 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "mb-4"
}, "بيانات الفترة:", -1 /* HOISTED */);
var _hoisted_17 = {
  "class": "d-flex flex-wrap py-5"
};
var _hoisted_18 = {
  "class": "flex-equal me-5"
};
var _hoisted_19 = {
  "class": "table fs-6 fw-bold gs-0 gy-2 gx-2 m-0"
};
var _hoisted_20 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-gray-400 min-w-175px w-175px"
}, "اسم الفترة:", -1 /* HOISTED */);
var _hoisted_21 = {
  "class": "text-gray-800 min-w-200px"
};
var _hoisted_22 = {
  "class": "text-gray-800 text-hover-primary"
};
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-gray-400"
}, "اسم الفرع:", -1 /* HOISTED */);
var _hoisted_24 = {
  "class": "text-gray-800"
};
var _hoisted_25 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-gray-400"
}, "تاريخ الفترة:", -1 /* HOISTED */);
var _hoisted_26 = {
  "class": "text-gray-800"
};
var _hoisted_27 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-gray-400"
}, "حالة الفترة:", -1 /* HOISTED */);
var _hoisted_28 = {
  "class": "text-gray-800"
};
var _hoisted_29 = {
  "class": "flex-equal"
};
var _hoisted_30 = {
  "class": "table fs-6 fw-bold gs-0 gy-2 gx-2 m-0"
};
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-gray-400 min-w-175px w-175px"
}, "ساعة بداء الفترة", -1 /* HOISTED */);
var _hoisted_32 = {
  "class": "text-gray-800 min-w-200px"
};
var _hoisted_33 = {
  "class": "text-gray-800 text-hover-primary"
};
var _hoisted_34 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", {
  "class": "text-gray-400"
}, "ساعة اغلاق الفترة", -1 /* HOISTED */);
var _hoisted_35 = {
  "class": "text-gray-800"
};
var _hoisted_36 = {
  "class": "mb-0"
};
var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "mb-4"
}, "المطاعم المتوفرة ضمن الفترة", -1 /* HOISTED */);
var _hoisted_38 = {
  "class": "table-responsive"
};
var _hoisted_39 = {
  "class": "table table-hover table-rounded table-row-bordered border gy-3 gs-3"
};
var _hoisted_40 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-bolder fs-6 text-gray-800 border-bottom-2 border-gray-200 bg-light"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "p-5"
}, "#"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "p-5"
}, "الاسم"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "p-5"
}, "العنوان"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "p-5"
}, "الحالة"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "p-5"
}, "تاريخ الاضافة"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "p-5"
}, "###")])], -1 /* HOISTED */);
var _hoisted_41 = ["href"];
var _hoisted_42 = {
  "class": "mb-0"
};
var _hoisted_43 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "mb-4"
}, "طلبات الفترة", -1 /* HOISTED */);
var _hoisted_44 = {
  "class": "table-responsive"
};
var _hoisted_45 = {
  "class": "table table-hover table-rounded table-row-bordered border gy-3 gs-3"
};
var _hoisted_46 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-bolder fs-6 text-gray-800 border-bottom-2 border-gray-200 bg-light"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "p-5"
}, "#"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "p-5"
}, "رقم الطلب"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "p-5"
}, "اجمالي الطلب"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "p-5"
}, "صاحب الطلب"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "p-5"
}, "الحالة "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "p-5"
}, "تاريخ الاضافة "), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "p-5 text-center"
}, "###")])], -1 /* HOISTED */);
var _hoisted_47 = {
  "class": "text-center"
};
var _hoisted_48 = {
  "class": "card mb-5 mb-xl-10"
};
var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header border-0 cursor-pointer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-title m-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "fw-bolder m-0"
}, "ارفاق فواتير ")])], -1 /* HOISTED */);
var _hoisted_50 = {
  "class": "card-body border-top p-9"
};
var _hoisted_51 = {
  "class": "row g-8 mb-8"
};
var _hoisted_52 = {
  "class": "rounded border p-10"
};
var _hoisted_53 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
  "class": "pb-3"
}, "النماذج", -1 /* HOISTED */);
var _hoisted_54 = {
  "class": "row g-8 mb-8"
};
var _hoisted_55 = {
  "class": "col-lg-4"
};
var _hoisted_56 = {
  "class": "d-flex align-items-sm-center mb-7 border rounded p-2"
};
var _hoisted_57 = {
  "class": "d-flex align-items-center flex-row-fluid flex-wrap"
};
var _hoisted_58 = {
  "class": "flex-grow-1 me-2"
};
var _hoisted_59 = ["href"];
var _hoisted_60 = {
  "class": "text-muted fw-bold d-block fs-7"
};
var _hoisted_61 = ["onClick"];
var _hoisted_62 = {
  "class": "row g-8 mb-8"
};
var _hoisted_63 = {
  "class": "col-lg-5"
};
var _hoisted_64 = ["textContent"];
var _hoisted_65 = {
  "class": "col-lg-5"
};
var _hoisted_66 = ["textContent"];
var _hoisted_67 = ["value"];
var _hoisted_68 = {
  "class": "col-lg-2"
};
var _hoisted_69 = ["disabled"];
var _hoisted_70 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-upload fs-4"
}, null, -1 /* HOISTED */);
var _hoisted_71 = [_hoisted_70];
var _hoisted_72 = {
  "class": "card-footer d-flex justify-content-end py-6 px-9"
};
var _hoisted_73 = ["disabled"];
var _hoisted_74 = {
  "class": "card-body border-top p-9"
};
var _hoisted_75 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h5", {
  "class": "mb-4"
}, "المرفقات", -1 /* HOISTED */);
var _hoisted_76 = {
  "class": "table-responsive"
};
var _hoisted_77 = {
  "class": "table table-hover table-rounded table-row-bordered border gy-3 gs-3"
};
var _hoisted_78 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", {
  "class": "fw-bolder fs-6 text-gray-800 border-bottom-2 border-gray-200 bg-light"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "p-5"
}, "#"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "p-5"
}, "المرفقات"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "p-5"
}, "الاسم"), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
  "class": "p-5"
}, "تاريخ الاضافة")])], -1 /* HOISTED */);
var _hoisted_79 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
  "class": "svg-icon svg-icon-2x svg-icon-primary me-4"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  opacity: "0.3",
  d: "M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22Z",
  fill: "black"
}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("path", {
  d: "M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z",
  fill: "black"
})])], -1 /* HOISTED */);
var _hoisted_80 = ["href"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  var _component_AttIcon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("AttIcon");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "عرض فترة الطلب"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Layout"], {
    prv_page: [{
      'name': 'فترات الطلب',
      'link': '/order-period'
    }, {
      'name': 'عرض فترة الطلب'
    }]
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card title"), _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card toolbar"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        id: "btn-search",
        "class": "nav-link btn btn-sm btn-success me-2",
        onClick: _cache[0] || (_cache[0] = function () {
          return $setup.toggle_search && $setup.toggle_search.apply($setup, arguments);
        })
      }, "بحث ")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card toolbar")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card header"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Card body"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
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
      }, [_hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" بحث ")])])]), _hoisted_14]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Title"), _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Details"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Details"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_19, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_21, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_22, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.orderPeriod.title), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_24, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.orderPeriod.branch ? $props.orderPeriod.branch.name : ''), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_25, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.orderPeriod.period_date), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_27, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_28, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.orderPeriod.status == 1 ? 'مفعل' : 'غير مفعل'), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Row")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Details")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Details"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_30, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_32, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_33, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.orderPeriod.start_time), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [_hoisted_34, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_35, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.orderPeriod.end_time), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Row"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Row")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Details")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Row")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Row")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Title"), _hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Product table"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_39, [_hoisted_40, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.orderPeriod.restaurant_period, function (item, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'table-active': index % 2 !== 0
          })
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(++index), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.restaurant.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.restaurant.address), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.restaurant.status_id == 1 ? 'مفعل' : 'غير مفعل'), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.restaurant.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
          target: "_blank",
          href: "/print/orders-restaurant-period/".concat(item.id),
          "class": "nav-link btn btn-sm btn-success me-2"
        }, " طباعة ", 8 /* PROPS */, _hoisted_41)])], 2 /* CLASS */);
      }), 256 /* UNKEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Product table")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Title"), _hoisted_43, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Product table"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_45, [_hoisted_46, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.orderPeriod.orders, function (item, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'table-active': index % 2 !== 0
          })
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(++index), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.order_number), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.total), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.employee.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.status == 0 ? 'ملغي' : item.status == 1 ? 'جديد' : item.status == 2 ? 'مكتمل' : ''), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.created_at), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
          href: "/order/".concat(item.id, "/show"),
          "class": "btn btn-primary btn-sm px-4 me-2",
          textContent: 'عرض'
        }, null, 8 /* PROPS */, ["href"]), $props.canCancelOrder && $props.currentDate == item.created_at && item.status == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
          key: 0,
          href: "/cancel/order/".concat(item.id),
          "class": "btn btn-warning btn-sm px-4 me-2",
          textContent: 'الغاء'
        }, null, 8 /* PROPS */, ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $props.canDeletePriorDateOrder ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Link, {
          key: 1,
          href: "/delete/order/".concat(item.id),
          "class": "btn btn-danger btn-sm px-4 me-2",
          textContent: 'حذف'
        }, null, 8 /* PROPS */, ["href"])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])], 2 /* CLASS */);
      }), 256 /* UNKEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Product table")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Section")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Card body")]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_48, [_hoisted_49, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $setup.submit && $setup.submit.apply($setup, arguments);
        }, ["prevent"])),
        "class": "form"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [_hoisted_53, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.form.attachments, function (att) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_55, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_56, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_AttIcon), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_58, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
          href: '/get-temp-att/' + att.file_path,
          target: "_blank",
          "class": "text-gray-800 text-hover-primary fs-6 fw-bolder"
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(att.name), 9 /* TEXT, PROPS */, _hoisted_59), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_60, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(att.name), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
          href: "#",
          onClick: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function ($event) {
            return $setup.delete_att(att.file_path);
          }, ["prevent"]),
          "class": "btn btn-sm btn-danger"
        }, " حذف ", 8 /* PROPS */, _hoisted_61)])])])]);
      }), 256 /* UNKEYED_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $setup.submit_att && $setup.submit_att.apply($setup, arguments);
        }, ["prevent"])),
        "class": "form"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_63, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control",
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $setup.att_form.name = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.att_form.name]]), $setup.att_form.errors.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: 0,
        textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.att_form.errors.name),
        "class": "text-danger text-xs mt-1"
      }, null, 8 /* PROPS */, _hoisted_64)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_65, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "file",
        "class": "form-control",
        id: "att_file",
        onInput: _cache[5] || (_cache[5] = function ($event) {
          return $setup.att_form.file = $event.target.files[0];
        })
      }, null, 32 /* HYDRATE_EVENTS */), $setup.att_form.errors.file ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: 0,
        textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.att_form.errors.file),
        "class": "text-danger text-xs mt-1"
      }, null, 8 /* PROPS */, _hoisted_66)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.att_form.progress > 0 && $setup.att_form.file ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("progress", {
        key: 1,
        max: "100",
        "class": "w-100 mt-2",
        value: $setup.att_form.progress
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.att_form.progress), 9 /* TEXT, PROPS */, _hoisted_67)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "submit",
        "class": "btn btn-icon btn-primary",
        disabled: $setup.att_form.processing
      }, _hoisted_71, 8 /* PROPS */, _hoisted_69)])])], 32 /* HYDRATE_EVENTS */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "submit",
        "class": "btn btn-primary w-100",
        disabled: $setup.form.processing
      }, " حفظ التغيرات ", 8 /* PROPS */, _hoisted_73)])], 32 /* HYDRATE_EVENTS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_74, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Title"), _hoisted_75, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Title"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("begin::Product table"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_77, [_hoisted_78, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.orderPeriod.period_attachments, function (item, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'table-active': index % 2 !== 0
          })
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(++index), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [_hoisted_79, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
          href: '/get-temp-att/' + item.path,
          target: "_blank",
          "class": "text-gray-800 text-hover-primary fs-6 fw-bolder"
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 9 /* TEXT, PROPS */, _hoisted_80)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.created_at), 1 /* TEXT */)], 2 /* CLASS */);
      }), 256 /* UNKEYED_FRAGMENT */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("end::Product table")])])];
    }),
    _: 1 /* STABLE */
  })], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Shared/Pagination.vue?vue&type=template&id=922b9ed4":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Shared/Pagination.vue?vue&type=template&id=922b9ed4 ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "m-3"
};
var _hoisted_2 = {
  "class": "pagination pagination-outline"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_2, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.links, function (link) {
    return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
      "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["page-item", {
        'disabled': !link.url,
        'active': link.active
      }])
    }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
      href: link.url,
      "class": "page-link",
      innerHTML: link.label
    }, null, 8 /* PROPS */, ["href", "innerHTML"])], 2 /* CLASS */);
  }), 256 /* UNKEYED_FRAGMENT */))])]);
}

/***/ }),

/***/ "./resources/js/Admin/Pages/OrderPeriod/Show.vue":
/*!*******************************************************!*\
  !*** ./resources/js/Admin/Pages/OrderPeriod/Show.vue ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_73efb406__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=73efb406 */ "./resources/js/Admin/Pages/OrderPeriod/Show.vue?vue&type=template&id=73efb406");
/* harmony import */ var _Show_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Admin/Pages/OrderPeriod/Show.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var F_www_foodbus_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_www_foodbus_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Show_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Show_vue_vue_type_template_id_73efb406__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Admin/Pages/OrderPeriod/Show.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Admin/Shared/Pagination.vue":
/*!**************************************************!*\
  !*** ./resources/js/Admin/Shared/Pagination.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Pagination_vue_vue_type_template_id_922b9ed4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Pagination.vue?vue&type=template&id=922b9ed4 */ "./resources/js/Admin/Shared/Pagination.vue?vue&type=template&id=922b9ed4");
/* harmony import */ var _Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Pagination.vue?vue&type=script&lang=js */ "./resources/js/Admin/Shared/Pagination.vue?vue&type=script&lang=js");
/* harmony import */ var F_www_foodbus_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_www_foodbus_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Pagination_vue_vue_type_template_id_922b9ed4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Admin/Shared/Pagination.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Admin/Pages/OrderPeriod/Show.vue?vue&type=script&setup=true&lang=js":
/*!******************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/OrderPeriod/Show.vue?vue&type=script&setup=true&lang=js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/OrderPeriod/Show.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Admin/Shared/Pagination.vue?vue&type=script&lang=js":
/*!**************************************************************************!*\
  !*** ./resources/js/Admin/Shared/Pagination.vue?vue&type=script&lang=js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Shared/Pagination.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./resources/js/Admin/Pages/OrderPeriod/Show.vue?vue&type=template&id=73efb406":
/*!*************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/OrderPeriod/Show.vue?vue&type=template&id=73efb406 ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_73efb406__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_73efb406__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=template&id=73efb406 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/OrderPeriod/Show.vue?vue&type=template&id=73efb406");


/***/ }),

/***/ "./resources/js/Admin/Shared/Pagination.vue?vue&type=template&id=922b9ed4":
/*!********************************************************************************!*\
  !*** ./resources/js/Admin/Shared/Pagination.vue?vue&type=template&id=922b9ed4 ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_922b9ed4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Pagination_vue_vue_type_template_id_922b9ed4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Pagination.vue?vue&type=template&id=922b9ed4 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Shared/Pagination.vue?vue&type=template&id=922b9ed4");


/***/ })

}]);