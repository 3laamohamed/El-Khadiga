"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Admin_Pages_Products_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Products/Index.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Products/Index.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Shared_Pagination__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Shared/Pagination */ "./resources/js/Admin/Shared/Pagination.vue");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Shared/Layout */ "./resources/js/Admin/Shared/Layout.vue");





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Index',
  props: {
    products: Object,
    categories: Array,
    filters: Object
  },
  setup: function setup(__props, _ref) {
    var _props$filters, _props$filters2;
    var __expose = _ref.expose;
    __expose();
    var icons = {
      plus: "<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M12 5V19M5 12H19\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\"/></svg>",
      search: "<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><circle cx=\"11\" cy=\"11\" r=\"7\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M20 20L17 17\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/></svg>",
      edit: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M4 20H8L18.5 9.5C19.3284 8.67157 19.3284 7.32843 18.5 6.5V6.5C17.6716 5.67157 16.3284 5.67157 15.5 6.5L5 17V20H4Z\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linejoin=\"round\"/></svg>",
      trash: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M4 7H20M10 11V17M14 11V17M6 7L7 19H17L18 7M9 7V4H15V7\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
      box: "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M4 7.5L12 3.5L20 7.5L12 11.5L4 7.5Z\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/><path d=\"M4 12L12 16L20 12\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/><path d=\"M4 16.5L12 20.5L20 16.5\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linejoin=\"round\"/></svg>"
    };
    var props = __props;
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.useForm)({});
    var name = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(((_props$filters = props.filters) === null || _props$filters === void 0 ? void 0 : _props$filters.name) || '');
    var categoryId = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(((_props$filters2 = props.filters) === null || _props$filters2 === void 0 ? void 0 : _props$filters2.category_id) || '');
    var featuredCount = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return props.products.data.filter(function (item) {
        return item.is_featured;
      }).length;
    });
    var hasFilters = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return Boolean(name.value || categoryId.value);
    });
    var excerpt = function excerpt(text) {
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 72;
      if (!text) return '';
      return text.length > limit ? "".concat(text.slice(0, limit), "...") : text;
    };
    var applyFilters = function applyFilters() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.get('/admin/products', {
        name: name.value || undefined,
        category_id: categoryId.value || undefined
      }, {
        preserveState: true,
        replace: true,
        preserveScroll: true
      });
    };
    var clearFilters = function clearFilters() {
      name.value = '';
      categoryId.value = '';
      applyFilters();
    };
    var deleteProduct = function deleteProduct(id) {
      Swal.fire({
        title: 'Delete this product?',
        text: 'This action cannot be undone.',
        icon: 'warning',
        iconColor: '#A91E2C',
        showCancelButton: true,
        confirmButtonColor: '#A91E2C',
        cancelButtonColor: '#6b7280',
        cancelButtonText: 'Cancel',
        confirmButtonText: 'Delete',
        backdrop: 'static',
        allowOutsideClick: false
      }).then(function (result) {
        if (result.isConfirmed) {
          form["delete"]("/admin/products/".concat(id), {
            preserveScroll: true
          });
        }
      });
    };
    var __returned__ = {
      icons: icons,
      props: props,
      form: form,
      name: name,
      categoryId: categoryId,
      featuredCount: featuredCount,
      hasFilters: hasFilters,
      excerpt: excerpt,
      applyFilters: applyFilters,
      clearFilters: clearFilters,
      deleteProduct: deleteProduct,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
      get Inertia() {
        return _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia;
      },
      get useForm() {
        return _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.useForm;
      },
      get Pagination() {
        return _Shared_Pagination__WEBPACK_IMPORTED_MODULE_3__["default"];
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Products/Index.vue?vue&type=template&id=0fb245e0&scoped=true":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Products/Index.vue?vue&type=template&id=0fb245e0&scoped=true ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************/
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
  "class": "products-page"
};
var _hoisted_2 = {
  "class": "products-hero"
};
var _hoisted_3 = ["innerHTML"];
var _hoisted_4 = {
  "class": "products-stats"
};
var _hoisted_5 = {
  "class": "products-stat"
};
var _hoisted_6 = {
  "class": "products-stat"
};
var _hoisted_7 = {
  "class": "products-stat"
};
var _hoisted_8 = {
  "class": "products-panel"
};
var _hoisted_9 = {
  "class": "products-toolbar"
};
var _hoisted_10 = {
  "class": "products-search"
};
var _hoisted_11 = ["innerHTML"];
var _hoisted_12 = ["value"];
var _hoisted_13 = {
  key: 0,
  "class": "products-table-wrap"
};
var _hoisted_14 = {
  "class": "products-table"
};
var _hoisted_15 = {
  "class": "products-cell-product"
};
var _hoisted_16 = {
  "class": "products-thumb"
};
var _hoisted_17 = ["src", "alt"];
var _hoisted_18 = ["innerHTML"];
var _hoisted_19 = {
  key: 0
};
var _hoisted_20 = {
  "class": "products-chip"
};
var _hoisted_21 = {
  "class": "products-order"
};
var _hoisted_22 = {
  "class": "products-actions"
};
var _hoisted_23 = ["innerHTML"];
var _hoisted_24 = ["onClick"];
var _hoisted_25 = ["innerHTML"];
var _hoisted_26 = {
  key: 1,
  "class": "products-empty"
};
var _hoisted_27 = ["innerHTML"];
var _hoisted_28 = {
  key: 2,
  "class": "products-pagination"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Products"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Layout"], {
    prv_page: [{
      name: 'Products'
    }]
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      var _$props$products$tota;
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_2, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "products-hero__eyebrow"
      }, "Catalog Management"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
        "class": "products-hero__title"
      }, "Products"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
        "class": "products-hero__desc"
      }, " Manage your IQF product catalog, images, and homepage featured items. ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: "/admin/products/create",
        "class": "products-btn products-btn--primary"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            innerHTML: $setup.icons.plus
          }, null, 8 /* PROPS */, _hoisted_3), _cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Product ", -1 /* CACHED */))];
        }),

        _: 1 /* STABLE */
      })]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "products-stat__label"
      }, "Total Products", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_$props$products$tota = $props.products.total) !== null && _$props$products$tota !== void 0 ? _$props$products$tota : $props.products.data.length), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [_cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "products-stat__label"
      }, "Featured on Home", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.featuredCount), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "products-stat__label"
      }, "Categories", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.categories.length), 1 /* TEXT */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "products-search__icon",
        innerHTML: $setup.icons.search
      }, null, 8 /* PROPS */, _hoisted_11), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.name = $event;
        }),
        type: "text",
        "class": "products-search__input",
        placeholder: "Search by product name...",
        onKeyup: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)($setup.applyFilters, ["enter"])
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.name]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("select", {
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $setup.categoryId = $event;
        }),
        "class": "products-select",
        onChange: $setup.applyFilters
      }, [_cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("option", {
        value: ""
      }, "All categories", -1 /* CACHED */)), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.categories, function (category) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("option", {
          key: category.id,
          value: category.id
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(category.title_en), 9 /* TEXT, PROPS */, _hoisted_12);
      }), 128 /* KEYED_FRAGMENT */))], 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelSelect, $setup.categoryId]]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "products-btn products-btn--ghost",
        onClick: $setup.applyFilters
      }, " Search "), $setup.hasFilters ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        type: "button",
        "class": "products-btn products-btn--ghost",
        onClick: $setup.clearFilters
      }, " Clear ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $props.products.data.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_14, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Product"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Category"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Order"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Featured"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "products-table__actions-head"
      }, "Actions")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.products.data, function (item) {
        var _item$category, _item$sort_order;
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: item.id
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [item.image_url ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("img", {
          key: 0,
          src: item.image_url,
          alt: item.name
        }, null, 8 /* PROPS */, _hoisted_17)) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
          key: 1,
          "class": "products-thumb__placeholder",
          innerHTML: $setup.icons.box
        }, null, 8 /* PROPS */, _hoisted_18))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1 /* TEXT */), item.description ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("small", _hoisted_19, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.excerpt(item.description)), 1 /* TEXT */)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_20, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(((_item$category = item.category) === null || _item$category === void 0 ? void 0 : _item$category.title_en) || '—'), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_21, "#" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)((_item$sort_order = item.sort_order) !== null && _item$sort_order !== void 0 ? _item$sort_order : 0), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["products-badge", item.is_featured ? 'products-badge--featured' : 'products-badge--default'])
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.is_featured ? 'Featured' : 'Standard'), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_22, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
          href: "/admin/products/".concat(item.id, "/edit"),
          "class": "products-action products-action--edit",
          title: "Edit product"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
              innerHTML: $setup.icons.edit
            }, null, 8 /* PROPS */, _hoisted_23)];
          }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          type: "button",
          "class": "products-action products-action--delete",
          title: "Delete product",
          onClick: function onClick($event) {
            return $setup.deleteProduct(item.id);
          }
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          innerHTML: $setup.icons.trash
        }, null, 8 /* PROPS */, _hoisted_25)], 8 /* PROPS */, _hoisted_24)])])]);
      }), 128 /* KEYED_FRAGMENT */))])])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_26, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "products-empty__icon",
        innerHTML: $setup.icons.box
      }, null, 8 /* PROPS */, _hoisted_27), _cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "No products found", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.hasFilters ? 'Try adjusting your search or filters.' : 'Start by adding your first product to the catalog.'), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: "/admin/products/create",
        "class": "products-btn products-btn--primary"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return _toConsumableArray(_cache[9] || (_cache[9] = [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Add Product ", -1 /* CACHED */)]));
        }),

        _: 1 /* STABLE */
      })])), $props.products.data.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_28, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Pagination"], {
        links: $props.products.links
      }, null, 8 /* PROPS */, ["links"])])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)])])];
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Products/Index.vue?vue&type=style&index=0&id=0fb245e0&scoped=true&lang=css":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Products/Index.vue?vue&type=style&index=0&id=0fb245e0&scoped=true&lang=css ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.products-page[data-v-0fb245e0] {\n    --p-primary: #A91E2C;\n    --p-primary-dark: #8E1824;\n    --p-secondary: #5A8F3C;\n    --p-bg: #f4f6f4;\n    --p-surface: #ffffff;\n    --p-border: #e6ebe6;\n    --p-text: #1a1a1a;\n    --p-muted: #6b7280;\n    --p-radius: 16px;\n    --p-shadow: 0 8px 32px rgba(26, 26, 26, 0.06);\n    padding-bottom: 2rem;\n}\n.products-hero[data-v-0fb245e0] {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 1.5rem;\n    margin-bottom: 1.25rem;\n    padding: 1.75rem 1.85rem;\n    border-radius: var(--p-radius);\n    background:\n        radial-gradient(circle at 100% 0%, rgba(90, 143, 60, 0.12), transparent 42%),\n        radial-gradient(circle at 0% 100%, rgba(169, 30, 44, 0.1), transparent 40%),\n        var(--p-surface);\n    border: 1px solid var(--p-border);\n    box-shadow: var(--p-shadow);\n}\n.products-hero__eyebrow[data-v-0fb245e0] {\n    display: inline-block;\n    margin-bottom: 0.45rem;\n    color: var(--p-secondary);\n    font-size: 0.72rem;\n    font-weight: 700;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n}\n.products-hero__title[data-v-0fb245e0] {\n    margin: 0;\n    color: var(--p-text);\n    font-size: 1.75rem;\n    font-weight: 800;\n}\n.products-hero__desc[data-v-0fb245e0] {\n    margin: 0.45rem 0 0;\n    max-width: 36rem;\n    color: var(--p-muted);\n    font-size: 0.92rem;\n    line-height: 1.6;\n}\n.products-btn[data-v-0fb245e0] {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.45rem;\n    padding: 0.72rem 1.15rem;\n    border: none;\n    border-radius: 12px;\n    font-size: 0.88rem;\n    font-weight: 700;\n    text-decoration: none;\n    cursor: pointer;\n    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;\n    white-space: nowrap;\n}\n.products-btn--primary[data-v-0fb245e0] {\n    background: linear-gradient(135deg, var(--p-primary), var(--p-primary-dark));\n    color: #fff;\n    box-shadow: 0 8px 20px rgba(169, 30, 44, 0.22);\n}\n.products-btn--primary[data-v-0fb245e0]:hover {\n    transform: translateY(-1px);\n    color: #fff;\n    box-shadow: 0 10px 24px rgba(169, 30, 44, 0.28);\n}\n.products-btn--ghost[data-v-0fb245e0] {\n    background: #fff;\n    border: 1px solid var(--p-border);\n    color: var(--p-text);\n}\n.products-btn--ghost[data-v-0fb245e0]:hover {\n    background: #f7f9f7;\n}\n.products-stats[data-v-0fb245e0] {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 0.9rem;\n    margin-bottom: 1rem;\n}\n.products-stat[data-v-0fb245e0] {\n    padding: 1rem 1.15rem;\n    border-radius: 14px;\n    background: var(--p-surface);\n    border: 1px solid var(--p-border);\n}\n.products-stat__label[data-v-0fb245e0] {\n    display: block;\n    margin-bottom: 0.35rem;\n    color: var(--p-muted);\n    font-size: 0.76rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.06em;\n}\n.products-stat strong[data-v-0fb245e0] {\n    color: var(--p-text);\n    font-size: 1.45rem;\n    font-weight: 800;\n    line-height: 1;\n}\n.products-panel[data-v-0fb245e0] {\n    padding: 1.25rem;\n    border-radius: var(--p-radius);\n    background: var(--p-surface);\n    border: 1px solid var(--p-border);\n    box-shadow: var(--p-shadow);\n}\n.products-toolbar[data-v-0fb245e0] {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.75rem;\n    margin-bottom: 1.25rem;\n}\n.products-search[data-v-0fb245e0] {\n    position: relative;\n    flex: 1 1 260px;\n}\n.products-search__icon[data-v-0fb245e0] {\n    position: absolute;\n    top: 50%;\n    left: 0.9rem;\n    transform: translateY(-50%);\n    color: var(--p-muted);\n    pointer-events: none;\n}\n.products-search__input[data-v-0fb245e0],\n.products-select[data-v-0fb245e0] {\n    width: 100%;\n    min-height: 46px;\n    padding: 0.7rem 0.95rem;\n    border: 1px solid var(--p-border);\n    border-radius: 12px;\n    background: #fafbfa;\n    color: var(--p-text);\n    font-size: 0.9rem;\n    transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.products-search__input[data-v-0fb245e0] {\n    padding-left: 2.5rem;\n}\n.products-search__input[data-v-0fb245e0]:focus,\n.products-select[data-v-0fb245e0]:focus {\n    outline: none;\n    border-color: rgba(90, 143, 60, 0.45);\n    box-shadow: 0 0 0 3px rgba(90, 143, 60, 0.12);\n    background: #fff;\n}\n.products-select[data-v-0fb245e0] {\n    flex: 0 1 220px;\n    cursor: pointer;\n}\n.products-table-wrap[data-v-0fb245e0] {\n    overflow-x: auto;\n    border: 1px solid var(--p-border);\n    border-radius: 14px;\n}\n.products-table[data-v-0fb245e0] {\n    width: 100%;\n    border-collapse: collapse;\n    min-width: 760px;\n}\n.products-table thead[data-v-0fb245e0] {\n    background: #f7f9f7;\n}\n.products-table th[data-v-0fb245e0] {\n    padding: 0.9rem 1rem;\n    color: var(--p-muted);\n    font-size: 0.72rem;\n    font-weight: 700;\n    letter-spacing: 0.08em;\n    text-transform: uppercase;\n    text-align: left;\n    border-bottom: 1px solid var(--p-border);\n}\n.products-table td[data-v-0fb245e0] {\n    padding: 1rem;\n    border-bottom: 1px solid #eef2ee;\n    vertical-align: middle;\n}\n.products-table tbody tr[data-v-0fb245e0]:hover {\n    background: #fcfdfc;\n}\n.products-table tbody tr:last-child td[data-v-0fb245e0] {\n    border-bottom: none;\n}\n.products-table__actions-head[data-v-0fb245e0] {\n    text-align: right;\n}\n.products-cell-product[data-v-0fb245e0] {\n    display: flex;\n    align-items: center;\n    gap: 0.85rem;\n    min-width: 240px;\n}\n.products-cell-product strong[data-v-0fb245e0] {\n    display: block;\n    color: var(--p-text);\n    font-size: 0.92rem;\n    font-weight: 700;\n}\n.products-cell-product small[data-v-0fb245e0] {\n    display: block;\n    margin-top: 0.15rem;\n    color: var(--p-muted);\n    font-size: 0.78rem;\n    line-height: 1.4;\n}\n.products-thumb[data-v-0fb245e0] {\n    width: 52px;\n    height: 52px;\n    border-radius: 12px;\n    overflow: hidden;\n    background: #f3f5f3;\n    border: 1px solid var(--p-border);\n    flex-shrink: 0;\n}\n.products-thumb img[data-v-0fb245e0] {\n    width: 100%;\n    height: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n.products-thumb__placeholder[data-v-0fb245e0] {\n    display: grid;\n    place-items: center;\n    width: 100%;\n    height: 100%;\n    color: #9ca3af;\n}\n.products-chip[data-v-0fb245e0] {\n    display: inline-flex;\n    padding: 0.35rem 0.7rem;\n    border-radius: 999px;\n    background: rgba(90, 143, 60, 0.1);\n    color: var(--p-secondary);\n    font-size: 0.78rem;\n    font-weight: 700;\n}\n.products-order[data-v-0fb245e0] {\n    color: var(--p-muted);\n    font-size: 0.86rem;\n    font-weight: 600;\n}\n.products-badge[data-v-0fb245e0] {\n    display: inline-flex;\n    padding: 0.35rem 0.7rem;\n    border-radius: 999px;\n    font-size: 0.76rem;\n    font-weight: 700;\n}\n.products-badge--featured[data-v-0fb245e0] {\n    background: rgba(169, 30, 44, 0.1);\n    color: var(--p-primary);\n}\n.products-badge--default[data-v-0fb245e0] {\n    background: #f3f4f6;\n    color: #6b7280;\n}\n.products-actions[data-v-0fb245e0] {\n    display: flex;\n    justify-content: flex-end;\n    gap: 0.45rem;\n}\n.products-action[data-v-0fb245e0] {\n    display: grid;\n    place-items: center;\n    width: 36px;\n    height: 36px;\n    border: 1px solid var(--p-border);\n    border-radius: 10px;\n    background: #fff;\n    color: var(--p-muted);\n    text-decoration: none;\n    cursor: pointer;\n    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;\n}\n.products-action--edit[data-v-0fb245e0]:hover {\n    border-color: rgba(90, 143, 60, 0.35);\n    background: rgba(90, 143, 60, 0.08);\n    color: var(--p-secondary);\n}\n.products-action--delete[data-v-0fb245e0]:hover {\n    border-color: rgba(169, 30, 44, 0.35);\n    background: rgba(169, 30, 44, 0.08);\n    color: var(--p-primary);\n}\n.products-empty[data-v-0fb245e0] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 0.65rem;\n    padding: 3.5rem 1.5rem;\n    text-align: center;\n}\n.products-empty__icon[data-v-0fb245e0] {\n    display: grid;\n    place-items: center;\n    width: 64px;\n    height: 64px;\n    border-radius: 16px;\n    background: #f3f5f3;\n    color: #9ca3af;\n}\n.products-empty h3[data-v-0fb245e0] {\n    margin: 0.25rem 0 0;\n    color: var(--p-text);\n    font-size: 1.15rem;\n    font-weight: 800;\n}\n.products-empty p[data-v-0fb245e0] {\n    margin: 0;\n    color: var(--p-muted);\n    font-size: 0.9rem;\n}\n.products-pagination[data-v-0fb245e0] {\n    margin-top: 1.25rem;\n}\n@media (max-width: 900px) {\n.products-hero[data-v-0fb245e0] {\n        flex-direction: column;\n        align-items: stretch;\n}\n.products-stats[data-v-0fb245e0] {\n        grid-template-columns: 1fr;\n}\n.products-select[data-v-0fb245e0] {\n        flex: 1 1 100%;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Products/Index.vue?vue&type=style&index=0&id=0fb245e0&scoped=true&lang=css":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Products/Index.vue?vue&type=style&index=0&id=0fb245e0&scoped=true&lang=css ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_0fb245e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=0fb245e0&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Products/Index.vue?vue&type=style&index=0&id=0fb245e0&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_0fb245e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_0fb245e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Admin/Pages/Products/Index.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Admin/Pages/Products/Index.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_0fb245e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=0fb245e0&scoped=true */ "./resources/js/Admin/Pages/Products/Index.vue?vue&type=template&id=0fb245e0&scoped=true");
/* harmony import */ var _Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Admin/Pages/Products/Index.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_0fb245e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=0fb245e0&scoped=true&lang=css */ "./resources/js/Admin/Pages/Products/Index.vue?vue&type=style&index=0&id=0fb245e0&scoped=true&lang=css");
/* harmony import */ var F_Arkan_partners_El_Khadiga_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,F_Arkan_partners_El_Khadiga_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_0fb245e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-0fb245e0"],['__file',"resources/js/Admin/Pages/Products/Index.vue"]])
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
/* harmony import */ var F_Arkan_partners_El_Khadiga_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,F_Arkan_partners_El_Khadiga_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Pagination_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Pagination_vue_vue_type_template_id_922b9ed4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"resources/js/Admin/Shared/Pagination.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Admin/Pages/Products/Index.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/Products/Index.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Products/Index.vue?vue&type=script&setup=true&lang=js");
 

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

/***/ "./resources/js/Admin/Pages/Products/Index.vue?vue&type=template&id=0fb245e0&scoped=true":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/Products/Index.vue?vue&type=template&id=0fb245e0&scoped=true ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_0fb245e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_0fb245e0_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=0fb245e0&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Products/Index.vue?vue&type=template&id=0fb245e0&scoped=true");


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


/***/ }),

/***/ "./resources/js/Admin/Pages/Products/Index.vue?vue&type=style&index=0&id=0fb245e0&scoped=true&lang=css":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/Products/Index.vue?vue&type=style&index=0&id=0fb245e0&scoped=true&lang=css ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_0fb245e0_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=0fb245e0&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Products/Index.vue?vue&type=style&index=0&id=0fb245e0&scoped=true&lang=css");


/***/ })

}]);