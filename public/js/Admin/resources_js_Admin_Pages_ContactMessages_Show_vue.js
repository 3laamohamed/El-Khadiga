"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Admin_Pages_ContactMessages_Show_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Show.vue?vue&type=script&setup=true&lang=js":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Show.vue?vue&type=script&setup=true&lang=js ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/Layout */ "./resources/js/Admin/Shared/Layout.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Show',
  props: {
    message: Object,
    contactEmail: {
      type: String,
      "default": 'info@elkhadiga.com'
    }
  },
  setup: function setup(__props, _ref) {
    var __expose = _ref.expose;
    __expose();
    var icons = {
      back: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M15 6L9 12L15 18\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></svg>",
      reply: "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\"><path d=\"M10 8L4 14L10 20\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/><path d=\"M4 14H14C17.3137 14 20 16.6863 20 20V21\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\"/></svg>",
      calendar: "<svg width=\"15\" height=\"15\" viewBox=\"0 0 24 24\" fill=\"none\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M8 3V7M16 3V7M3 11H21\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/></svg>"
    };
    var props = __props;
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({});
    var initials = function initials(name) {
      if (!name) return '?';
      return name.split(' ').filter(Boolean).map(function (part) {
        return part[0];
      }).join('').slice(0, 2).toUpperCase();
    };
    var formatDate = function formatDate(value) {
      if (!value) return '—';
      return new Date(value).toLocaleString('en-GB', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    };
    var replyUrl = (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(function () {
      var subject = encodeURIComponent('Re: Your message to El Khadiga for Export');
      var body = encodeURIComponent("Hi ".concat(props.message.name, ",\n\n"));
      return "mailto:".concat(props.message.email, "?subject=").concat(subject, "&body=").concat(body);
    });
    var markUnread = function markUnread() {
      form.post("/admin/messages/".concat(props.message.id, "/unread"), {
        preserveScroll: true
      });
    };
    var deleteMessage = function deleteMessage() {
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
          form["delete"]("/admin/messages/".concat(props.message.id));
        }
      });
    };
    var __returned__ = {
      icons: icons,
      props: props,
      form: form,
      initials: initials,
      formatDate: formatDate,
      replyUrl: replyUrl,
      markUnread: markUnread,
      deleteMessage: deleteMessage,
      computed: vue__WEBPACK_IMPORTED_MODULE_0__.computed,
      get useForm() {
        return _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Show.vue?vue&type=template&id=c74e6d6e&scoped=true":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Show.vue?vue&type=template&id=c74e6d6e&scoped=true ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "message-page"
};
var _hoisted_2 = {
  "class": "message-hero"
};
var _hoisted_3 = {
  "class": "message-hero__main"
};
var _hoisted_4 = ["innerHTML"];
var _hoisted_5 = {
  "class": "message-hero__head"
};
var _hoisted_6 = {
  "class": "message-avatar"
};
var _hoisted_7 = {
  "class": "message-hero__title"
};
var _hoisted_8 = ["href"];
var _hoisted_9 = {
  "class": "message-meta"
};
var _hoisted_10 = {
  "class": "message-meta__item"
};
var _hoisted_11 = ["innerHTML"];
var _hoisted_12 = {
  "class": "message-hero__actions"
};
var _hoisted_13 = ["href"];
var _hoisted_14 = ["innerHTML"];
var _hoisted_15 = {
  "class": "message-panel"
};
var _hoisted_16 = {
  "class": "message-body"
};
var _hoisted_17 = {
  "class": "message-info"
};
var _hoisted_18 = {
  "class": "message-info__card"
};
var _hoisted_19 = {
  "class": "message-info__card"
};
var _hoisted_20 = ["href"];
var _hoisted_21 = {
  "class": "message-info__card"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  var _component_Link = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Link");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Message from ".concat($props.message.name)
  }, null, 8 /* PROPS */, ["title"]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Layout"], {
    prv_page: [{
      name: 'Messages',
      link: '/admin/messages'
    }, {
      name: $props.message.name
    }]
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Link, {
        href: "/admin/messages",
        "class": "message-back"
      }, {
        "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
          return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
            innerHTML: $setup.icons.back
          }, null, 8 /* PROPS */, _hoisted_4), _cache[0] || (_cache[0] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Back to inbox ", -1 /* CACHED */))];
        }),

        _: 1 /* STABLE */
      }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.initials($props.message.name)), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.message.name), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        href: "mailto:".concat($props.message.email),
        "class": "message-hero__email"
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.message.email), 9 /* TEXT, PROPS */, _hoisted_8)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        innerHTML: $setup.icons.calendar
      }, null, 8 /* PROPS */, _hoisted_11), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Received " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.formatDate($props.message.created_at)), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["message-badge", $props.message.read_at ? 'message-badge--read' : 'message-badge--unread'])
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.message.read_at ? 'Read' : 'Unread'), 3 /* TEXT, CLASS */)])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        href: $setup.replyUrl,
        "class": "message-btn message-btn--primary"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        innerHTML: $setup.icons.reply
      }, null, 8 /* PROPS */, _hoisted_14), _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Reply via Email ", -1 /* CACHED */))], 8 /* PROPS */, _hoisted_13), $props.message.read_at ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("button", {
        key: 0,
        type: "button",
        "class": "message-btn message-btn--ghost",
        onClick: $setup.markUnread
      }, " Mark Unread ")) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "button",
        "class": "message-btn message-btn--danger",
        onClick: $setup.deleteMessage
      }, " Delete ")])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_15, [_cache[2] || (_cache[2] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", {
        "class": "message-panel__title"
      }, "Message", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.message.message), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_17, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_cache[3] || (_cache[3] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "message-info__label"
      }, "Sender", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.message.name), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "message-info__label"
      }, "Email", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        href: "mailto:".concat($props.message.email)
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.message.email), 9 /* TEXT, PROPS */, _hoisted_20)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "message-info__label"
      }, "Email delivery", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.contactEmail), 1 /* TEXT */)])])])];
    }),

    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["prv_page"])], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Show.vue?vue&type=style&index=0&id=c74e6d6e&scoped=true&lang=css":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Show.vue?vue&type=style&index=0&id=c74e6d6e&scoped=true&lang=css ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.message-page[data-v-c74e6d6e] {\n    --msg-primary: #A91E2C;\n    --msg-primary-dark: #8E1824;\n    --msg-secondary: #5A8F3C;\n    --msg-surface: #ffffff;\n    --msg-border: #e6ebe6;\n    --msg-text: #1a1a1a;\n    --msg-muted: #6b7280;\n    --msg-radius: 16px;\n    --msg-shadow: 0 8px 32px rgba(26, 26, 26, 0.06);\n    padding-bottom: 2rem;\n}\n.message-hero[data-v-c74e6d6e] {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 1.5rem;\n    margin-bottom: 1rem;\n    padding: 1.75rem 1.85rem;\n    border-radius: var(--msg-radius);\n    background:\n        radial-gradient(circle at 100% 0%, rgba(90, 143, 60, 0.12), transparent 42%),\n        radial-gradient(circle at 0% 100%, rgba(169, 30, 44, 0.1), transparent 40%),\n        var(--msg-surface);\n    border: 1px solid var(--msg-border);\n    box-shadow: var(--msg-shadow);\n}\n.message-back[data-v-c74e6d6e] {\n    display: inline-flex;\n    align-items: center;\n    gap: 0.35rem;\n    margin-bottom: 1rem;\n    color: var(--msg-muted);\n    font-size: 0.84rem;\n    font-weight: 600;\n    text-decoration: none;\n    transition: color 0.2s ease;\n}\n.message-back[data-v-c74e6d6e]:hover {\n    color: var(--msg-secondary);\n}\n.message-hero__head[data-v-c74e6d6e] {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n    margin-bottom: 0.85rem;\n}\n.message-avatar[data-v-c74e6d6e] {\n    display: grid;\n    place-items: center;\n    width: 56px;\n    height: 56px;\n    border-radius: 14px;\n    background: linear-gradient(135deg, var(--msg-primary), var(--msg-primary-dark));\n    color: #fff;\n    font-size: 1rem;\n    font-weight: 800;\n    flex-shrink: 0;\n}\n.message-hero__title[data-v-c74e6d6e] {\n    margin: 0;\n    color: var(--msg-text);\n    font-size: 1.5rem;\n    font-weight: 800;\n}\n.message-hero__email[data-v-c74e6d6e] {\n    display: inline-block;\n    margin-top: 0.2rem;\n    color: var(--msg-secondary);\n    font-size: 0.9rem;\n    font-weight: 600;\n    text-decoration: none;\n}\n.message-hero__email[data-v-c74e6d6e]:hover {\n    color: var(--msg-primary);\n}\n.message-meta[data-v-c74e6d6e] {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    gap: 0.75rem;\n}\n.message-meta__item[data-v-c74e6d6e] {\n    display: inline-flex;\n    align-items: center;\n    gap: 0.4rem;\n    color: var(--msg-muted);\n    font-size: 0.84rem;\n    font-weight: 600;\n}\n.message-badge[data-v-c74e6d6e] {\n    display: inline-flex;\n    padding: 0.35rem 0.7rem;\n    border-radius: 999px;\n    font-size: 0.76rem;\n    font-weight: 700;\n}\n.message-badge--unread[data-v-c74e6d6e] {\n    background: rgba(169, 30, 44, 0.1);\n    color: var(--msg-primary);\n}\n.message-badge--read[data-v-c74e6d6e] {\n    background: #f3f4f6;\n    color: #6b7280;\n}\n.message-hero__actions[data-v-c74e6d6e] {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.65rem;\n    flex-shrink: 0;\n}\n.message-btn[data-v-c74e6d6e] {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.45rem;\n    padding: 0.72rem 1.15rem;\n    border: none;\n    border-radius: 12px;\n    font-size: 0.88rem;\n    font-weight: 700;\n    text-decoration: none;\n    cursor: pointer;\n    transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;\n    white-space: nowrap;\n}\n.message-btn--primary[data-v-c74e6d6e] {\n    background: linear-gradient(135deg, var(--msg-primary), var(--msg-primary-dark));\n    color: #fff;\n    box-shadow: 0 8px 20px rgba(169, 30, 44, 0.22);\n}\n.message-btn--primary[data-v-c74e6d6e]:hover {\n    transform: translateY(-1px);\n    color: #fff;\n}\n.message-btn--ghost[data-v-c74e6d6e] {\n    background: #fff;\n    border: 1px solid var(--msg-border);\n    color: var(--msg-text);\n}\n.message-btn--ghost[data-v-c74e6d6e]:hover {\n    background: #f7f9f7;\n}\n.message-btn--danger[data-v-c74e6d6e] {\n    background: #fff;\n    border: 1px solid rgba(169, 30, 44, 0.25);\n    color: var(--msg-primary);\n}\n.message-btn--danger[data-v-c74e6d6e]:hover {\n    background: rgba(169, 30, 44, 0.06);\n}\n.message-panel[data-v-c74e6d6e] {\n    margin-bottom: 1rem;\n    padding: 1.5rem 1.75rem;\n    border-radius: var(--msg-radius);\n    background: var(--msg-surface);\n    border: 1px solid var(--msg-border);\n    box-shadow: var(--msg-shadow);\n}\n.message-panel__title[data-v-c74e6d6e] {\n    margin: 0 0 1rem;\n    color: var(--msg-muted);\n    font-size: 0.76rem;\n    font-weight: 700;\n    letter-spacing: 0.08em;\n    text-transform: uppercase;\n}\n.message-body[data-v-c74e6d6e] {\n    color: var(--msg-text);\n    font-size: 1rem;\n    line-height: 1.75;\n    white-space: pre-wrap;\n    word-break: break-word;\n}\n.message-info[data-v-c74e6d6e] {\n    display: grid;\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n    gap: 0.9rem;\n}\n.message-info__card[data-v-c74e6d6e] {\n    padding: 1rem 1.15rem;\n    border-radius: 14px;\n    background: var(--msg-surface);\n    border: 1px solid var(--msg-border);\n}\n.message-info__label[data-v-c74e6d6e] {\n    display: block;\n    margin-bottom: 0.35rem;\n    color: var(--msg-muted);\n    font-size: 0.72rem;\n    font-weight: 600;\n    text-transform: uppercase;\n    letter-spacing: 0.06em;\n}\n.message-info__card strong[data-v-c74e6d6e],\n.message-info__card a[data-v-c74e6d6e] {\n    color: var(--msg-text);\n    font-size: 0.92rem;\n    font-weight: 700;\n    text-decoration: none;\n}\n.message-info__card a[data-v-c74e6d6e]:hover {\n    color: var(--msg-secondary);\n}\n@media (max-width: 900px) {\n.message-hero[data-v-c74e6d6e] {\n        flex-direction: column;\n        align-items: stretch;\n}\n.message-info[data-v-c74e6d6e] {\n        grid-template-columns: 1fr;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Show.vue?vue&type=style&index=0&id=c74e6d6e&scoped=true&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Show.vue?vue&type=style&index=0&id=c74e6d6e&scoped=true&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_style_index_0_id_c74e6d6e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=style&index=0&id=c74e6d6e&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Show.vue?vue&type=style&index=0&id=c74e6d6e&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_style_index_0_id_c74e6d6e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_style_index_0_id_c74e6d6e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Admin/Pages/ContactMessages/Show.vue":
/*!***********************************************************!*\
  !*** ./resources/js/Admin/Pages/ContactMessages/Show.vue ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Show_vue_vue_type_template_id_c74e6d6e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=c74e6d6e&scoped=true */ "./resources/js/Admin/Pages/ContactMessages/Show.vue?vue&type=template&id=c74e6d6e&scoped=true");
/* harmony import */ var _Show_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Admin/Pages/ContactMessages/Show.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Show_vue_vue_type_style_index_0_id_c74e6d6e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Show.vue?vue&type=style&index=0&id=c74e6d6e&scoped=true&lang=css */ "./resources/js/Admin/Pages/ContactMessages/Show.vue?vue&type=style&index=0&id=c74e6d6e&scoped=true&lang=css");
/* harmony import */ var F_Arkan_partners_El_Khadiga_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,F_Arkan_partners_El_Khadiga_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Show_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Show_vue_vue_type_template_id_c74e6d6e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-c74e6d6e"],['__file',"resources/js/Admin/Pages/ContactMessages/Show.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Admin/Pages/ContactMessages/Show.vue?vue&type=script&setup=true&lang=js":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/ContactMessages/Show.vue?vue&type=script&setup=true&lang=js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Show.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Admin/Pages/ContactMessages/Show.vue?vue&type=template&id=c74e6d6e&scoped=true":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/ContactMessages/Show.vue?vue&type=template&id=c74e6d6e&scoped=true ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_c74e6d6e_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_template_id_c74e6d6e_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=template&id=c74e6d6e&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Show.vue?vue&type=template&id=c74e6d6e&scoped=true");


/***/ }),

/***/ "./resources/js/Admin/Pages/ContactMessages/Show.vue?vue&type=style&index=0&id=c74e6d6e&scoped=true&lang=css":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/ContactMessages/Show.vue?vue&type=style&index=0&id=c74e6d6e&scoped=true&lang=css ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Show_vue_vue_type_style_index_0_id_c74e6d6e_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Show.vue?vue&type=style&index=0&id=c74e6d6e&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/ContactMessages/Show.vue?vue&type=style&index=0&id=c74e6d6e&scoped=true&lang=css");


/***/ })

}]);