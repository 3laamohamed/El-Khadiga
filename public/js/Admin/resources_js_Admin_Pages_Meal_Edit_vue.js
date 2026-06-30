"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Admin_Pages_Meal_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Meal/Edit.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Meal/Edit.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/Layout */ "./resources/js/Admin/Shared/Layout.vue");
function _readOnlyError(name) { throw new TypeError("\"" + name + "\" is read-only"); }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Edit',
  props: {
    restaurant: Object,
    meal: Object,
    meals: Object,
    categories: Object,
    meal_refMeal: Array,
    mealCategory: Array,
    images: Array
  },
  setup: function setup(__props, _ref) {
    var expose = _ref.expose;
    expose();
    var props = __props;
    var attrs = (0,vue__WEBPACK_IMPORTED_MODULE_1__.useAttrs)();
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
      name: props.meal.name,
      name_en: props.meal.name_en,
      category_id: props.mealCategory,
      restaurant_id: props.meal.restaurant_id,
      description_ar: props.meal.description_ar,
      description_en: props.meal.description_en,
      status_id: props.meal.status_id,
      image_url: props.meal.image,
      image: props.meal.image,
      price: props.meal.price,
      ref_meal_id: props.meal_refMeal,
      meal_url: props.meal.meal_url
    });
    var onFileChange = function onFileChange(e) {
      form.image = e.target.files[0];
      form.image_url = URL.createObjectURL(form.image);
    };
    (0,vue__WEBPACK_IMPORTED_MODULE_1__.onMounted)(function () {
      // load_category();
      load_meal();
    });
    // let categories = ref([]);
    var ref_meals = (0,vue__WEBPACK_IMPORTED_MODULE_1__.ref)([]);

    // let load_category = () => {
    //     axios
    //         .get('/category/restaurant/' + form.restaurant_id)
    //         .then(response => {
    //             form.category_id = props.mealCategory ;
    //            categories.value = response.data;
    //         })
    //         .catch(error => { alert('خطأ في تحميل البيانات') })
    // }
    // let load_meal = () => {
    //     axios
    //         .get('/meal/restaurant/'  +form.restaurant_id)
    //         .then(response => {
    //             form.ref_meal_id = props.meal_refMeal;
    //             ref_meals.value = response.data;
    //         })
    //         .catch(error => { alert('خطأ في تحميل البيانات') })
    // }
    var load_meal = function load_meal() {
      var mealIdToExclude = props.meal.id;
      axios.get("/meal/restaurant/".concat(form.restaurant_id), {
        params: {
          mealIdToExclude: mealIdToExclude
        }
      }).then(function (response) {
        form.ref_meal_id = props.meal_refMeal;
        ref_meals.value = response.data;
      })["catch"](function (error) {
        alert('خطأ في تحميل البيانات');
      });
    };
    var submit = function submit() {
      form.post('/meal/' + props.meal.id);
    };
    var att_form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm)({
      file: null
    });
    var submit_att = function submit_att() {
      att_form.post('/add/mael-img/' + props.meal.id);
    };

    // let delete_att = (file_name) => {
    //     Swal.fire({
    //         title: 'هل أنت متأكد من الحذف؟',
    //         text: "لا يمكن التراجع عن هذه العملية!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //     }).then((result) => {
    //         if (result.isConfirmed) {
    //             form.images = form.images.filter(function (item) {
    //                 return item.file_path !== file_name
    //             });
    //         }
    //     });
    // }

    var delete_att = function delete_att(id) {
      Swal.fire({
        title: 'هل أنت متأكد من الحذف؟',
        text: "لا يمكن التراجع عن هذه العملية!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33'
      }).then(function (result) {
        if (result.isConfirmed) {
          form["delete"]('/meal/images/' + id, {
            preserveState: true,
            replace: true,
            preserveScroll: true
          });
        }
      });
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
      get onFileChange() {
        return onFileChange;
      },
      set onFileChange(v) {
        onFileChange = v;
      },
      get ref_meals() {
        return ref_meals;
      },
      set ref_meals(v) {
        ref_meals = v;
      },
      get load_meal() {
        return load_meal;
      },
      set load_meal(v) {
        load_meal = v;
      },
      get submit() {
        return submit;
      },
      set submit(v) {
        submit = v;
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
      get delete_att() {
        return delete_att;
      },
      set delete_att(v) {
        delete_att = v;
      },
      get useForm() {
        return _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_0__.useForm;
      },
      onMounted: vue__WEBPACK_IMPORTED_MODULE_1__.onMounted,
      ref: vue__WEBPACK_IMPORTED_MODULE_1__.ref,
      useAttrs: vue__WEBPACK_IMPORTED_MODULE_1__.useAttrs,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Meal/Edit.vue?vue&type=template&id=da4e6786":
/*!********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Meal/Edit.vue?vue&type=template&id=da4e6786 ***!
  \********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "card mb-5 mb-xl-10"
};
var _hoisted_2 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-header border-0 cursor-pointer"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
  "class": "card-title m-0"
}, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", {
  "class": "fw-bolder m-0"
}, "تعديل الوجبه")])], -1 /* HOISTED */);
var _hoisted_3 = {
  "class": "card-body border-top p-9"
};
var _hoisted_4 = {
  "class": "row g-8 mb-8"
};
var _hoisted_5 = {
  "class": "col-lg-6"
};
var _hoisted_6 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "fs-6 form-label fw-bolder text-dark"
}, "اسم الوجبة(بالعربي)", -1 /* HOISTED */);
var _hoisted_7 = ["textContent"];
var _hoisted_8 = {
  "class": "col-lg-6"
};
var _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "fs-6 form-label fw-bolder text-dark"
}, "اسم الوجبة(بالانجليزي)", -1 /* HOISTED */);
var _hoisted_10 = ["textContent"];
var _hoisted_11 = {
  "class": "col-lg-6"
};
var _hoisted_12 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "fs-6 form-label fw-bolder text-dark"
}, "سعر الوجبة (بالريال السعودي)", -1 /* HOISTED */);
var _hoisted_13 = ["textContent"];
var _hoisted_14 = {
  "class": "col-lg-6"
};
var _hoisted_15 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "fs-6 form-label fw-bolder text-dark"
}, " رابط للوجبة على الانترنت ", -1 /* HOISTED */);
var _hoisted_16 = ["textContent"];
var _hoisted_17 = {
  "class": "col-lg-6"
};
var _hoisted_18 = {
  "class": "fs-6 form-label fw-bolder text-dark"
};
var _hoisted_19 = ["textContent"];
var _hoisted_20 = {
  "class": "col-lg-6"
};
var _hoisted_21 = {
  "class": "fs-6 form-labelform.category_id fw-bolder text-dark"
};
var _hoisted_22 = {
  "class": "col-lg-6"
};
var _hoisted_23 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "fs-6 form-label fw-bolder text-dark"
}, "وصف الوجبه(بالعربي)", -1 /* HOISTED */);
var _hoisted_24 = ["textContent"];
var _hoisted_25 = {
  "class": "col-lg-6"
};
var _hoisted_26 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "fs-6 form-label fw-bolder text-dark"
}, "وصف الوجبه(بالانجليزي)", -1 /* HOISTED */);
var _hoisted_27 = ["textContent"];
var _hoisted_28 = {
  "class": "col-lg-12"
};
var _hoisted_29 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "fs-6 form-label fw-bolder text-dark"
}, " الوجبات المرتبطة", -1 /* HOISTED */);
var _hoisted_30 = {
  "class": "col-lg-12"
};
var _hoisted_31 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "fs-6 form-label fw-bolder text-dark"
}, "الصورة", -1 /* HOISTED */);
var _hoisted_32 = ["textContent"];
var _hoisted_33 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */);
var _hoisted_34 = {
  key: 1
};
var _hoisted_35 = ["src"];
var _hoisted_36 = {
  "class": "col-lg-6"
};
var _hoisted_37 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", {
  "class": "fs-6 form-label fw-bolder text-dark"
}, "الحالة", -1 /* HOISTED */);
var _hoisted_38 = {
  "class": "form-check form-check-custom form-check-solid"
};
var _hoisted_39 = {
  key: 0,
  "class": "form-check-label",
  "for": "status_id"
};
var _hoisted_40 = {
  key: 1,
  "class": "form-check-label",
  "for": "status_id"
};
var _hoisted_41 = {
  "class": "card-body border-top p-9"
};
var _hoisted_42 = {
  "class": "row g-8 mb-8"
};
var _hoisted_43 = {
  "class": "rounded border p-10"
};
var _hoisted_44 = {
  "class": "row g-8 mb-8"
};
var _hoisted_45 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", {
  "class": "pb-3"
}, "الصور", -1 /* HOISTED */);
var _hoisted_46 = {
  "class": "row"
};
var _hoisted_47 = {
  "class": "col-2"
};
var _hoisted_48 = ["onClick"];
var _hoisted_49 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-x fs-2"
}, null, -1 /* HOISTED */);
var _hoisted_50 = [_hoisted_49];
var _hoisted_51 = {
  "class": "image-input image-input-outline"
};
var _hoisted_52 = ["src"];
var _hoisted_53 = {
  "class": "row g-8 mb-8"
};
var _hoisted_54 = {
  "class": "col-lg-5"
};
var _hoisted_55 = ["textContent"];
var _hoisted_56 = ["value"];
var _hoisted_57 = {
  "class": "col-lg-2"
};
var _hoisted_58 = ["disabled"];
var _hoisted_59 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
  "class": "bi bi-upload fs-4"
}, null, -1 /* HOISTED */);
var _hoisted_60 = [_hoisted_59];
var _hoisted_61 = {
  "class": "card-footer d-flex justify-content-end py-6 px-9"
};
var _hoisted_62 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_Select2 = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Select2");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "تعديل الوجبه"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Layout"], {
    prv_page: [{
      'name': 'ادارة الوجبات',
      'link': '/meal'
    }, {
      'name': 'تعديل الوجبة'
    }]
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [_hoisted_2, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: _cache[17] || (_cache[17] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $setup.submit && $setup.submit.apply($setup, arguments);
        }, ["prevent"])),
        "class": "form"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.form.name = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.name]]), $setup.form.errors.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: 0,
        textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.name),
        "class": "text-danger text-xs mt-1"
      }, null, 8 /* PROPS */, _hoisted_7)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [_hoisted_9, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $setup.form.name_en = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.name_en]]), $setup.form.errors.name ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: 0,
        textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.name),
        "class": "text-danger text-xs mt-1"
      }, null, 8 /* PROPS */, _hoisted_10)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [_hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "number",
        "class": "form-control",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.form.price = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.price]]), $setup.form.errors.price ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: 0,
        textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.price),
        "class": "text-danger text-xs mt-1"
      }, null, 8 /* PROPS */, _hoisted_13)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [_hoisted_15, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control",
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $setup.form.meal_url = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.meal_url]]), $setup.form.errors.meal_url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: 0,
        textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.meal_url),
        "class": "text-danger text-xs mt-1"
      }, null, 8 /* PROPS */, _hoisted_16)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                    <div class=\"col-lg-6\">"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                        <label class=\"fs-6 form-label fw-bolder text-dark\">{{ ('المطعم') }}</label>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                        <Select2 v-if=\"form.category_id !='' \" :disabled=\"true\"  v-model=\"form.restaurant_id\"  @select=\"load_meal() ,load_category() \"    :options=\"restaurant\" :settings=\"{ width: '100%', selectionCssClass: 'form-select form-select-solid' }\" />"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                        <Select2 v-else  v-model=\"form.restaurant_id\"  @select=\"load_meal() ,load_category() \"    :options=\"restaurant\" :settings=\"{ width: '100%', selectionCssClass: 'form-select form-select-solid' }\" />"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                        <div v-if=\"form.errors.restaurant_id\" v-text=\"form.errors.restaurant_id\" class=\"text-danger text-xs mt-1\"></div>"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("                    </div>   "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)('المطعم'), 1 /* TEXT */), $setup.form.category_id != '' ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Select2, {
        key: 0,
        disabled: true,
        modelValue: $setup.form.restaurant_id,
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $setup.form.restaurant_id = $event;
        }),
        onSelect: _cache[5] || (_cache[5] = function ($event) {
          return $setup.load_meal();
        }),
        options: $props.restaurant,
        settings: {
          width: '100%',
          selectionCssClass: 'form-select form-select-solid'
        }
      }, null, 8 /* PROPS */, ["modelValue", "options"])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_Select2, {
        key: 1,
        modelValue: $setup.form.restaurant_id,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return $setup.form.restaurant_id = $event;
        }),
        onSelect: _cache[7] || (_cache[7] = function ($event) {
          return $setup.load_meal();
        }),
        options: $props.restaurant,
        settings: {
          width: '100%',
          selectionCssClass: 'form-select form-select-solid'
        }
      }, null, 8 /* PROPS */, ["modelValue", "options"])), $setup.form.errors.restaurant_id ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: 2,
        textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.restaurant_id),
        "class": "text-danger text-xs mt-1"
      }, null, 8 /* PROPS */, _hoisted_19)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)('التصنيف'), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select2, {
        modelValue: $setup.form.category_id,
        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
          return $setup.form.category_id = $event;
        }),
        options: $props.categories,
        settings: {
          width: '100%',
          selectionCssClass: 'form-select form-select-solid',
          multiple: true
        }
      }, null, 8 /* PROPS */, ["modelValue", "options"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [_hoisted_23, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "class": "form-control",
        "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
          return $setup.form.description_ar = $event;
        }),
        rows: "5"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.description_ar]]), $setup.form.errors.description_ar ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: 0,
        textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.description_ar),
        "class": "text-danger text-xs mt-1"
      }, null, 8 /* PROPS */, _hoisted_24)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_hoisted_26, (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        "class": "form-control",
        "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
          return $setup.form.description_en = $event;
        }),
        rows: "5"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.description_en]]), $setup.form.errors.description_en ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: 0,
        textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.description_en),
        "class": "text-danger text-xs mt-1"
      }, null, 8 /* PROPS */, _hoisted_27)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_hoisted_29, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Select2, {
        modelValue: $setup.form.ref_meal_id,
        "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
          return $setup.form.ref_meal_id = $event;
        }),
        options: $setup.ref_meals,
        settings: {
          width: '100%',
          selectionCssClass: 'form-select form-select-solid',
          multiple: true
        }
      }, null, 8 /* PROPS */, ["modelValue", "options"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_hoisted_31, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "file",
        "class": "form-control",
        onChange: _cache[12] || (_cache[12] = function () {
          return $setup.onFileChange && $setup.onFileChange.apply($setup, arguments);
        })
      }, null, 32 /* HYDRATE_EVENTS */), $setup.form.errors.image ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: 0,
        textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.errors.image),
        "class": "text-danger text-xs mt-1"
      }, null, 8 /* PROPS */, _hoisted_32)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), _hoisted_33, $setup.form.image ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_34, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: $setup.form.image_url,
        style: {
          "width": "80px",
          "border-radius": "5px"
        }
      }, null, 8 /* PROPS */, _hoisted_35)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_hoisted_37, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "class": "form-check-input",
        type: "checkbox",
        "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
          return $setup.form.status_id = $event;
        }),
        "true-value": "1",
        "false-value": "0"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, $setup.form.status_id]]), $setup.form.status_id == 1 ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_39, " مفعل ")) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("label", _hoisted_40, " غير مفعل "))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: _cache[16] || (_cache[16] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $setup.submit && $setup.submit.apply($setup, arguments);
        }, ["prevent"])),
        "class": "form"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_41, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [_hoisted_45, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.images, function (att, index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_47, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          "class": "btn btn-icon btn-circle btn-color-muted btn-active-color-primary w-25px h-25px z-index-3 bg-body shadow",
          type: "button",
          style: {
            "position": "relative",
            "top": "15px",
            "left": "-110px"
          },
          onClick: function onClick($event) {
            return $setup.delete_att(att.id);
          }
        }, _hoisted_50, 8 /* PROPS */, _hoisted_48)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
          "class": "image-input-wrapper w-125px h-125px",
          src: '/get-image/' + att.path,
          alt: ""
        }, null, 8 /* PROPS */, _hoisted_52)])]);
      }), 256 /* UNKEYED_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: _cache[15] || (_cache[15] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)(function () {
          return $setup.submit_att && $setup.submit_att.apply($setup, arguments);
        }, ["prevent"])),
        "class": "form"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_54, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "file",
        "class": "form-control",
        id: "att_file",
        onInput: _cache[14] || (_cache[14] = function ($event) {
          return $setup.att_form.file = $event.target.files[0];
        })
      }, null, 32 /* HYDRATE_EVENTS */), $setup.att_form.errors.file ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
        key: 0,
        textContent: (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.att_form.errors.file),
        "class": "text-danger text-xs mt-1"
      }, null, 8 /* PROPS */, _hoisted_55)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), $setup.att_form.progress > 0 && $setup.att_form.file ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("progress", {
        key: 1,
        max: "100",
        "class": "w-100 mt-2",
        value: $setup.att_form.progress
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.att_form.progress), 9 /* TEXT, PROPS */, _hoisted_56)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "submit",
        "class": "btn btn-icon btn-primary",
        disabled: $setup.att_form.processing
      }, _hoisted_60, 8 /* PROPS */, _hoisted_58)])])], 32 /* HYDRATE_EVENTS */)])])])], 32 /* HYDRATE_EVENTS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "submit",
        "class": "btn btn-primary w-100",
        disabled: $setup.form.processing
      }, " حفظ التغيرات ", 8 /* PROPS */, _hoisted_62)])], 32 /* HYDRATE_EVENTS */)])];
    }),

    _: 1 /* STABLE */
  })], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./resources/js/Admin/Pages/Meal/Edit.vue":
/*!************************************************!*\
  !*** ./resources/js/Admin/Pages/Meal/Edit.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_da4e6786__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=da4e6786 */ "./resources/js/Admin/Pages/Meal/Edit.vue?vue&type=template&id=da4e6786");
/* harmony import */ var _Edit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Admin/Pages/Meal/Edit.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var F_www_foodbus_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_www_foodbus_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Edit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Edit_vue_vue_type_template_id_da4e6786__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Admin/Pages/Meal/Edit.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Admin/Pages/Meal/Edit.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************!*\
  !*** ./resources/js/Admin/Pages/Meal/Edit.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Meal/Edit.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Admin/Pages/Meal/Edit.vue?vue&type=template&id=da4e6786":
/*!******************************************************************************!*\
  !*** ./resources/js/Admin/Pages/Meal/Edit.vue?vue&type=template&id=da4e6786 ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_da4e6786__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_da4e6786__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=template&id=da4e6786 */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Meal/Edit.vue?vue&type=template&id=da4e6786");


/***/ })

}]);