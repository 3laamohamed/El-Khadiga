"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Admin_Pages_ContactMessages_Index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Index.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Index.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    messages: Object,
    stats: Object,
    filters: Object,
    contactEmail: {
      type: String,
      "default": 'info@elkhadiga.com'
    }
  },
  setup: function setup(__props, _ref) {
    var _props$filters, _props$filters2;
    var __expose = _ref.expose;
    __expose();
    var icons = {
      search: "<svg width=\"18\" height=\"18\" viewBox=\"0 0 24 24\" fill=\"none\"><circle cx=\"11\" cy=\"11\" r=\"7\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M20 20L17 17\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/></svg>",
      eye: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z\" stroke=\"currentColor\" stroke-width=\"1.8\"/><circle cx=\"12\" cy=\"12\" r=\"3\" stroke=\"currentColor\" stroke-width=\"1.8\"/></svg>",
      trash: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M4 7H20M10 11V17M14 11V17M6 7L7 19H17L18 7M9 7V4H15V7\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
      mail: "<svg width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"14\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"1.8\"/><path d=\"M3 7L12 13L21 7\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linejoin=\"round\"/></svg>"
    };
    var props = __props;
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_2__.useForm)({});
    var q = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(((_props$filters = props.filters) === null || _props$filters === void 0 ? void 0 : _props$filters.q) || '');
    var status = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(((_props$filters2 = props.filters) === null || _props$filters2 === void 0 ? void 0 : _props$filters2.status) || '');
    var hasFilters = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      return Boolean(q.value || status.value);
    });
    var initials = function initials(name) {
      if (!name) return '?';
      return name.split(' ').filter(Boolean).map(function (part) {
        return part[0];
      }).join('').slice(0, 2).toUpperCase();
    };
    var excerpt = function excerpt(text) {
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 90;
      if (!text) return '';
      var normalized = text.replace(/\s+/g, ' ').trim();
      return normalized.length > limit ? "".concat(normalized.slice(0, limit), "...") : normalized;
    };
    var formatDate = function formatDate(value) {
      if (!value) return '—';
      return new Date(value).toLocaleString('en-GB', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    };
    var applyFilters = function applyFilters() {
      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_1__.Inertia.get('/admin/messages', {
        q: q.value || undefined,
        status: status.value || undefined
      }, {
        preserveState: true,
        replace: true,
        preserveScroll: true
      });
    };
    var setStatus = function setStatus(value) {
      status.value = value;
      applyFilters();
    };
    var clearFilters = function clearFilters() {
      q.value = '';
      status.value = '';
      applyFilters();
    };
    var deleteMessage = function deleteMessage(id) {
      Swal.fire({
        title: 'Delete this message?',
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
          form["delete"]("/admin/messages/".concat(id), {
            preserveScroll: true
          });
        }
      });
    };
    var __returned__ = {
      icons: icons,
      props: props,
      form: form,
      q: q,
      status: status,
      hasFilters: hasFilters,
      initials: initials,
      excerpt: excerpt,
      formatDate: formatDate,
      applyFilters: applyFilters,
      setStatus: setStatus,
      clearFilters: clearFilters,
      deleteMessage: deleteMessage,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Index.vue?vue&type=template&id=32b166b6&scoped=true":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Index.vue?vue&type=template&id=32b166b6&scoped=true ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "messages-page"
};
var _hoisted_2 = {
  "class": "messages-hero"
};
var _hoisted_3 = {
  "class": "messages-hero__desc"
};
var _hoisted_4 = {
  "class": "messages-stats"
};
var _hoisted_5 = {
  "class": "messages-panel"
};
var _hoisted_6 = {
  "class": "messages-toolbar"
};
var _hoisted_7 = {
  "class": "messages-search"
};
var _hoisted_8 = ["innerHTML"];
var _hoisted_9 = {
  key: 0,
  "class": "messages-table-wrap"
};
var _hoisted_10 = {
  "class": "messages-table"
};
var _hoisted_11 = {
  "class": "messages-cell"
};
var _hoisted_12 = {
  "class": "messages-preview"
};
var _hoisted_13 = {
  "class": "messages-date"
};
var _hoisted_14 = {
  "class": "messages-actions"
};
var _hoisted_15 = ["innerHTML"];
var _hoisted_16 = ["onClick"];
var _hoisted_17 = ["innerHTML"];
var _hoisted_18 = {
  key: 1,
  "class": "messages-empty"
};
var _hoisted_19 = ["innerHTML"];
var _hoisted_20 = {
  key: 2,
  "class": "messages-pagination"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Contact Messages"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Layout"], {
    prv_page: [{
      name: 'Messages'
    }]
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [_cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "messages-hero__eyebrow"
      }, "Inbox", -1 /* CACHED */)), _cache[7] || (_cache[7] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
        "class": "messages-hero__title"
      }, "Contact Messages", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_3, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Messages sent from the website contact form. New submissions are also emailed to ", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.contactEmail), 1 /* TEXT */), _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(". ", -1 /* CACHED */))])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["messages-stat", {
          'messages-stat--active': !$setup.status
        }]),
        onClick: _cache[0] || (_cache[0] = function ($event) {
          return $setup.setStatus('');
        })
      }, [_cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "messages-stat__label"
      }, "Total", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.stats.total), 1 /* TEXT */)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["messages-stat messages-stat--unread", {
          'messages-stat--active': $setup.status === 'unread'
        }]),
        onClick: _cache[1] || (_cache[1] = function ($event) {
          return $setup.setStatus('unread');
        })
      }, [_cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "messages-stat__label"
      }, "Unread", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.stats.unread), 1 /* TEXT */)], 2 /* CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["messages-stat", {
          'messages-stat--active': $setup.status === 'read'
        }]),
        onClick: _cache[2] || (_cache[2] = function ($event) {
          return $setup.setStatus('read');
        })
      }, [_cache[10] || (_cache[10] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "messages-stat__label"
      }, "Read", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.stats.read), 1 /* TEXT */)], 2 /* CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "messages-search__icon",
        innerHTML: $setup.icons.search
      }, null, 8 /* PROPS */, _hoisted_8), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $setup.q = $event;
        }),
        type: "text",
        "class": "messages-search__input",
        placeholder: "Search by name, email, or message...",
        onKeyup: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)($setup.applyFilters, ["enter"])
      }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.q]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "messages-btn messages-btn--ghost",
        onClick: $setup.applyFilters
      }, " Search "), $setup.hasFilters ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        type: "button",
        "class": "messages-btn messages-btn--ghost",
        onClick: $setup.clearFilters
      }, " Clear ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)]), $props.messages.data.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("table", _hoisted_10, [_cache[11] || (_cache[11] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("thead", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tr", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Sender"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Message"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Date"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", null, "Status"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("th", {
        "class": "messages-table__actions-head"
      }, "Actions")])], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("tbody", null, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($props.messages.data, function (item) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("tr", {
          key: item.id,
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)({
            'messages-table__row--unread': !item.read_at
          })
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["messages-avatar", {
            'messages-avatar--unread': !item.read_at
          }])
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.initials(item.name)), 3 /* TEXT, CLASS */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.email), 1 /* TEXT */)])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", _hoisted_12, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.excerpt(item.message)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_13, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.formatDate(item.created_at)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["messages-badge", item.read_at ? 'messages-badge--read' : 'messages-badge--unread'])
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.read_at ? 'Read' : 'Unread'), 3 /* TEXT, CLASS */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("td", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
          href: "/admin/messages/".concat(item.id),
          "class": "messages-action messages-action--view",
          title: "View message"
        }, {
          "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
              innerHTML: $setup.icons.eye
            }, null, 8 /* PROPS */, _hoisted_15)];
          }),
          _: 1 /* STABLE */
        }, 8 /* PROPS */, ["href"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          type: "button",
          "class": "messages-action messages-action--delete",
          title: "Delete message",
          onClick: function onClick($event) {
            return $setup.deleteMessage(item.id);
          }
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
          innerHTML: $setup.icons.trash
        }, null, 8 /* PROPS */, _hoisted_17)], 8 /* PROPS */, _hoisted_16)])])], 2 /* CLASS */);
      }), 128 /* KEYED_FRAGMENT */))])])])) : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_18, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "messages-empty__icon",
        innerHTML: $setup.icons.mail
      }, null, 8 /* PROPS */, _hoisted_19), _cache[12] || (_cache[12] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "No messages found", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.hasFilters ? 'Try adjusting your search or filters.' : 'Contact form submissions will appear here.'), 1 /* TEXT */)])), $props.messages.data.length ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_20, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Pagination"], {
        links: $props.messages.links
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Index.vue?vue&type=style&index=0&id=32b166b6&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Index.vue?vue&type=style&index=0&id=32b166b6&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.messages-page[data-v-32b166b6] {\n    --m-primary: #A91E2C;\n    --m-primary-dark: #8E1824;\n    --m-secondary: #5A8F3C;\n    --m-surface: #ffffff;\n    --m-border: #e6ebe6;\n    --m-text: #1a1a1a;\n    --m-muted: #6b7280;\n    --m-radius: 16px;\n    --m-shadow: 0 8px 32px rgba(26, 26, 26, 0.06);\n    padding-bottom: 2rem;\n}\n.messages-hero[data-v-32b166b6] {\n    margin-bottom: 1.25rem;\n    padding: 1.75rem 1.85rem;\n    border-radius: var(--m-radius);\n    background:\n        radial-gradient(circle at 100% 0%, rgba(90, 143, 60, 0.12), transparent 42%),\n        radial-gradient(circle at 0% 100%, rgba(169, 30, 44, 0.1), transparent 40%),\n        var(--m-surface);\n    border: 1px solid var(--m-border);\n    box-shadow: var(--m-shadow);\n}\n.messages-hero__eyebrow[data-v-32b166b6] {\n    display: inline-block;\n    margin-bottom: 0.45rem;\n    color: var(--m-secondary);\n    font-size: 0.72rem;\n    font-weight: 700;\n    letter-spacing: 0.1em;\n    text-transform: uppercase;\n}\n.messages-hero__title[data-v-32b166b6] {\n    margin: 0;\n    color: var(--m-text);\n    font-size: 1.75rem;\n    font-weight: 800;\n}\n.messages-hero__desc[data-v-32b166b6] {\n    margin: 0.45rem 0 0;\n    max-width: 40rem;\n    color: var(--m-muted);\n    font-size: 0.92rem;\n    line-height: 1.6;\n}\n.messages-hero__desc strong[data-v-32b166b6] {\n    color: var(--m-text);\n}\n.messages-stats[data-v-32b166b6] {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 0.9rem;\n    margin-bottom: 1rem;\n}\n.messages-stat[data-v-32b166b6] {\n    padding: 1rem 1.15rem;\n    border-radius: 14px;\n    background: var(--m-surface);\n    border: 1px solid var(--m-border);\n    text-align: left;\n    cursor: pointer;\n    transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;\n}\n.messages-stat[data-v-32b166b6]:hover {\n    transform: translateY(-1px);\n    box-shadow: var(--m-shadow);\n}\n.messages-stat--active[data-v-32b166b6] {\n    border-color: rgba(90, 143, 60, 0.45);\n    box-shadow: 0 0 0 3px rgba(90, 143, 60, 0.1);\n}\n.messages-stat--unread.messages-stat--active[data-v-32b166b6] {\n    border-color: rgba(169, 30, 44, 0.4);\n    box-shadow: 0 0 0 3px rgba(169, 30, 44, 0.1);\n}\n.messages-stat__label[data-v-32b166b6] {\n    display: block;\n    margin-bottom: 0.35rem;\n    color: var(--m-muted);\n    font-size: 0.76rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.06em;\n}\n.messages-stat strong[data-v-32b166b6] {\n    color: var(--m-text);\n    font-size: 1.45rem;\n    font-weight: 800;\n    line-height: 1;\n}\n.messages-panel[data-v-32b166b6] {\n    padding: 1.25rem;\n    border-radius: var(--m-radius);\n    background: var(--m-surface);\n    border: 1px solid var(--m-border);\n    box-shadow: var(--m-shadow);\n}\n.messages-toolbar[data-v-32b166b6] {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.75rem;\n    margin-bottom: 1.25rem;\n}\n.messages-search[data-v-32b166b6] {\n    position: relative;\n    flex: 1 1 260px;\n}\n.messages-search__icon[data-v-32b166b6] {\n    position: absolute;\n    top: 50%;\n    left: 0.9rem;\n    transform: translateY(-50%);\n    color: var(--m-muted);\n    pointer-events: none;\n}\n.messages-search__input[data-v-32b166b6] {\n    width: 100%;\n    min-height: 46px;\n    padding: 0.7rem 0.95rem 0.7rem 2.5rem;\n    border: 1px solid var(--m-border);\n    border-radius: 12px;\n    background: #fafbfa;\n    color: var(--m-text);\n    font-size: 0.9rem;\n    transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.messages-search__input[data-v-32b166b6]:focus {\n    outline: none;\n    border-color: rgba(90, 143, 60, 0.45);\n    box-shadow: 0 0 0 3px rgba(90, 143, 60, 0.12);\n    background: #fff;\n}\n.messages-btn[data-v-32b166b6] {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.45rem;\n    padding: 0.72rem 1.15rem;\n    border: none;\n    border-radius: 12px;\n    font-size: 0.88rem;\n    font-weight: 700;\n    cursor: pointer;\n    transition: background 0.2s ease;\n    white-space: nowrap;\n}\n.messages-btn--ghost[data-v-32b166b6] {\n    background: #fff;\n    border: 1px solid var(--m-border);\n    color: var(--m-text);\n}\n.messages-btn--ghost[data-v-32b166b6]:hover {\n    background: #f7f9f7;\n}\n.messages-table-wrap[data-v-32b166b6] {\n    overflow-x: auto;\n    border: 1px solid var(--m-border);\n    border-radius: 14px;\n}\n.messages-table[data-v-32b166b6] {\n    width: 100%;\n    border-collapse: collapse;\n    min-width: 820px;\n}\n.messages-table thead[data-v-32b166b6] {\n    background: #f7f9f7;\n}\n.messages-table th[data-v-32b166b6] {\n    padding: 0.9rem 1rem;\n    color: var(--m-muted);\n    font-size: 0.72rem;\n    font-weight: 700;\n    letter-spacing: 0.08em;\n    text-transform: uppercase;\n    text-align: left;\n    border-bottom: 1px solid var(--m-border);\n}\n.messages-table td[data-v-32b166b6] {\n    padding: 1rem;\n    border-bottom: 1px solid #eef2ee;\n    vertical-align: middle;\n}\n.messages-table tbody tr[data-v-32b166b6]:hover {\n    background: #fcfdfc;\n}\n.messages-table__row--unread[data-v-32b166b6] {\n    background: rgba(169, 30, 44, 0.03);\n}\n.messages-table tbody tr:last-child td[data-v-32b166b6] {\n    border-bottom: none;\n}\n.messages-table__actions-head[data-v-32b166b6] {\n    text-align: right;\n}\n.messages-cell[data-v-32b166b6] {\n    display: flex;\n    align-items: center;\n    gap: 0.85rem;\n    min-width: 200px;\n}\n.messages-avatar[data-v-32b166b6] {\n    display: grid;\n    place-items: center;\n    width: 42px;\n    height: 42px;\n    border-radius: 12px;\n    background: #f3f5f3;\n    color: var(--m-muted);\n    font-size: 0.78rem;\n    font-weight: 800;\n    flex-shrink: 0;\n}\n.messages-avatar--unread[data-v-32b166b6] {\n    background: linear-gradient(135deg, var(--m-primary), var(--m-primary-dark));\n    color: #fff;\n}\n.messages-cell strong[data-v-32b166b6] {\n    display: block;\n    color: var(--m-text);\n    font-size: 0.92rem;\n    font-weight: 700;\n}\n.messages-cell small[data-v-32b166b6] {\n    display: block;\n    margin-top: 0.15rem;\n    color: var(--m-muted);\n    font-size: 0.78rem;\n}\n.messages-preview[data-v-32b166b6] {\n    margin: 0;\n    max-width: 320px;\n    color: var(--m-muted);\n    font-size: 0.86rem;\n    line-height: 1.5;\n}\n.messages-date[data-v-32b166b6] {\n    color: var(--m-muted);\n    font-size: 0.82rem;\n    font-weight: 600;\n    white-space: nowrap;\n}\n.messages-badge[data-v-32b166b6] {\n    display: inline-flex;\n    padding: 0.35rem 0.7rem;\n    border-radius: 999px;\n    font-size: 0.76rem;\n    font-weight: 700;\n}\n.messages-badge--unread[data-v-32b166b6] {\n    background: rgba(169, 30, 44, 0.1);\n    color: var(--m-primary);\n}\n.messages-badge--read[data-v-32b166b6] {\n    background: #f3f4f6;\n    color: #6b7280;\n}\n.messages-actions[data-v-32b166b6] {\n    display: flex;\n    justify-content: flex-end;\n    gap: 0.45rem;\n}\n.messages-action[data-v-32b166b6] {\n    display: grid;\n    place-items: center;\n    width: 36px;\n    height: 36px;\n    border: 1px solid var(--m-border);\n    border-radius: 10px;\n    background: #fff;\n    color: var(--m-muted);\n    text-decoration: none;\n    cursor: pointer;\n    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;\n}\n.messages-action--view[data-v-32b166b6]:hover {\n    border-color: rgba(90, 143, 60, 0.35);\n    background: rgba(90, 143, 60, 0.08);\n    color: var(--m-secondary);\n}\n.messages-action--delete[data-v-32b166b6]:hover {\n    border-color: rgba(169, 30, 44, 0.35);\n    background: rgba(169, 30, 44, 0.08);\n    color: var(--m-primary);\n}\n.messages-empty[data-v-32b166b6] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 0.65rem;\n    padding: 3.5rem 1.5rem;\n    text-align: center;\n}\n.messages-empty__icon[data-v-32b166b6] {\n    display: grid;\n    place-items: center;\n    width: 64px;\n    height: 64px;\n    border-radius: 16px;\n    background: #f3f5f3;\n    color: #9ca3af;\n}\n.messages-empty h3[data-v-32b166b6] {\n    margin: 0.25rem 0 0;\n    color: var(--m-text);\n    font-size: 1.15rem;\n    font-weight: 800;\n}\n.messages-empty p[data-v-32b166b6] {\n    margin: 0;\n    color: var(--m-muted);\n    font-size: 0.9rem;\n}\n.messages-pagination[data-v-32b166b6] {\n    margin-top: 1.25rem;\n}\n@media (max-width: 900px) {\n.messages-stats[data-v-32b166b6] {\n        grid-template-columns: 1fr;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Index.vue?vue&type=style&index=0&id=32b166b6&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Index.vue?vue&type=style&index=0&id=32b166b6&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_32b166b6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=32b166b6&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Index.vue?vue&type=style&index=0&id=32b166b6&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_32b166b6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_32b166b6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Admin/Pages/ContactMessages/Index.vue":
/*!************************************************************!*\
  !*** ./resources/js/Admin/Pages/ContactMessages/Index.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Index_vue_vue_type_template_id_32b166b6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=32b166b6&scoped=true */ "./resources/js/Admin/Pages/ContactMessages/Index.vue?vue&type=template&id=32b166b6&scoped=true");
/* harmony import */ var _Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Admin/Pages/ContactMessages/Index.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Index_vue_vue_type_style_index_0_id_32b166b6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index.vue?vue&type=style&index=0&id=32b166b6&scoped=true&lang=css */ "./resources/js/Admin/Pages/ContactMessages/Index.vue?vue&type=style&index=0&id=32b166b6&scoped=true&lang=css");
/* harmony import */ var F_Arkan_partners_El_Khadiga_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,F_Arkan_partners_El_Khadiga_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Index_vue_vue_type_template_id_32b166b6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-32b166b6"],['__file',"resources/js/Admin/Pages/ContactMessages/Index.vue"]])
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

/***/ "./resources/js/Admin/Pages/ContactMessages/Index.vue?vue&type=script&setup=true&lang=js":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/ContactMessages/Index.vue?vue&type=script&setup=true&lang=js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Index.vue?vue&type=script&setup=true&lang=js");
 

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

/***/ "./resources/js/Admin/Pages/ContactMessages/Index.vue?vue&type=template&id=32b166b6&scoped=true":
/*!******************************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/ContactMessages/Index.vue?vue&type=template&id=32b166b6&scoped=true ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_32b166b6_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_template_id_32b166b6_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=template&id=32b166b6&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Index.vue?vue&type=template&id=32b166b6&scoped=true");


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

/***/ "./resources/js/Admin/Pages/ContactMessages/Index.vue?vue&type=style&index=0&id=32b166b6&scoped=true&lang=css":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/ContactMessages/Index.vue?vue&type=style&index=0&id=32b166b6&scoped=true&lang=css ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Index_vue_vue_type_style_index_0_id_32b166b6_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Index.vue?vue&type=style&index=0&id=32b166b6&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Index.vue?vue&type=style&index=0&id=32b166b6&scoped=true&lang=css");


/***/ })

}]);