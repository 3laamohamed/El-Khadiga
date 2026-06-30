"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Admin_Pages_Settings_Edit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Settings/Edit.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Settings/Edit.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");
/* harmony import */ var _inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-vue3 */ "./node_modules/@inertiajs/inertia-vue3/dist/index.js");
/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Shared/Layout */ "./resources/js/Admin/Shared/Layout.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Edit',
  props: {
    settings: Object
  },
  setup: function setup(__props, _ref) {
    var _pillars$, _pillars$2, _pillars$3, _pillars$4, _pillars$5, _pillars$6, _trustItems$, _trustItems$2, _trustItems$3, _trustItems$4, _trustItems$5, _trustItems$6;
    var __expose = _ref.expose;
    __expose();
    var props = __props;
    var activeTab = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)('branding');
    var tabs = [{
      id: 'branding',
      label: 'Logo',
      hint: 'Site branding',
      icon: 'L'
    }, {
      id: 'contact',
      label: 'Contact',
      hint: 'Phone, email & social',
      icon: 'C'
    }, {
      id: 'hero',
      label: 'Hero',
      hint: 'Banner & image',
      icon: 'H'
    }, {
      id: 'story',
      label: 'Story',
      hint: 'Who we are block',
      icon: 'S'
    }, {
      id: 'pillars',
      label: 'Pillars',
      hint: 'Trust & values',
      icon: 'P'
    }, {
      id: 'featured',
      label: 'Featured',
      hint: 'Products section',
      icon: 'F'
    }, {
      id: 'about',
      label: 'About',
      hint: 'About page copy',
      icon: 'A'
    }, {
      id: 'seo',
      label: 'SEO',
      hint: 'Search & social',
      icon: 'M'
    }];
    var seoPages = [{
      key: 'home',
      label: 'Home',
      titleField: 'seo_home_title',
      descriptionField: 'seo_home_description'
    }, {
      key: 'about',
      label: 'About',
      titleField: 'seo_about_title',
      descriptionField: 'seo_about_description'
    }, {
      key: 'products',
      label: 'Products',
      titleField: 'seo_products_title',
      descriptionField: 'seo_products_description'
    }, {
      key: 'contact',
      label: 'Contact',
      titleField: 'seo_contact_title',
      descriptionField: 'seo_contact_description'
    }];
    var pillars = props.settings.home_pillars || [{}, {}, {}];
    var trustItems = props.settings.home_trust_items || [{}, {}, {}];
    var heroPreview = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.settings.hero_image_url || '');
    var logoPreview = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.settings.site_logo_url || '/images/logo.png');
    var ogPreview = (0,vue__WEBPACK_IMPORTED_MODULE_0__.ref)(props.settings.seo_og_image_url || '');
    var form = (0,_inertiajs_inertia_vue3__WEBPACK_IMPORTED_MODULE_1__.useForm)({
      phone: props.settings.phone || '',
      email: props.settings.email || '',
      phone_secondary: props.settings.phone_secondary || '',
      social_facebook: props.settings.social_facebook || '',
      social_linkedin: props.settings.social_linkedin || '',
      hero_tagline: props.settings.hero_tagline || '',
      intro_en: props.settings.intro_en || '',
      about_us_en: props.settings.about_us_en || '',
      mission: props.settings.mission || '',
      vision: props.settings.vision || '',
      goal: props.settings.goal || '',
      home_loading_message: props.settings.home_loading_message || '',
      hero_eyebrow: props.settings.hero_eyebrow || '',
      hero_badge_1_label: props.settings.hero_badge_1_label || '',
      hero_badge_1_value: props.settings.hero_badge_1_value || '',
      hero_badge_2_label: props.settings.hero_badge_2_label || '',
      hero_badge_2_value: props.settings.hero_badge_2_value || '',
      home_about_excerpt: props.settings.home_about_excerpt || '',
      story_eyebrow: props.settings.story_eyebrow || '',
      story_heading: props.settings.story_heading || '',
      story_btn_primary: props.settings.story_btn_primary || '',
      story_btn_secondary: props.settings.story_btn_secondary || '',
      pillars_eyebrow: props.settings.pillars_eyebrow || '',
      pillars_heading: props.settings.pillars_heading || '',
      featured_eyebrow: props.settings.featured_eyebrow || '',
      featured_heading: props.settings.featured_heading || '',
      featured_intro: props.settings.featured_intro || '',
      featured_stats_label: props.settings.featured_stats_label || '',
      featured_link_text: props.settings.featured_link_text || '',
      featured_btn_text: props.settings.featured_btn_text || '',
      pillar_1_title: ((_pillars$ = pillars[0]) === null || _pillars$ === void 0 ? void 0 : _pillars$.title) || '',
      pillar_1_description: ((_pillars$2 = pillars[0]) === null || _pillars$2 === void 0 ? void 0 : _pillars$2.description) || '',
      pillar_2_title: ((_pillars$3 = pillars[1]) === null || _pillars$3 === void 0 ? void 0 : _pillars$3.title) || '',
      pillar_2_description: ((_pillars$4 = pillars[1]) === null || _pillars$4 === void 0 ? void 0 : _pillars$4.description) || '',
      pillar_3_title: ((_pillars$5 = pillars[2]) === null || _pillars$5 === void 0 ? void 0 : _pillars$5.title) || '',
      pillar_3_description: ((_pillars$6 = pillars[2]) === null || _pillars$6 === void 0 ? void 0 : _pillars$6.description) || '',
      trust_1_value: ((_trustItems$ = trustItems[0]) === null || _trustItems$ === void 0 ? void 0 : _trustItems$.value) || '',
      trust_1_label: ((_trustItems$2 = trustItems[0]) === null || _trustItems$2 === void 0 ? void 0 : _trustItems$2.label) || '',
      trust_2_value: ((_trustItems$3 = trustItems[1]) === null || _trustItems$3 === void 0 ? void 0 : _trustItems$3.value) || '',
      trust_2_label: ((_trustItems$4 = trustItems[1]) === null || _trustItems$4 === void 0 ? void 0 : _trustItems$4.label) || '',
      trust_3_value: ((_trustItems$5 = trustItems[2]) === null || _trustItems$5 === void 0 ? void 0 : _trustItems$5.value) || '',
      trust_3_label: ((_trustItems$6 = trustItems[2]) === null || _trustItems$6 === void 0 ? void 0 : _trustItems$6.label) || '',
      hero_image: null,
      site_logo: null,
      seo_og_image: null,
      seo_site_title: props.settings.seo_site_title || '',
      seo_meta_description: props.settings.seo_meta_description || '',
      seo_meta_keywords: props.settings.seo_meta_keywords || '',
      seo_home_title: props.settings.seo_home_title || '',
      seo_home_description: props.settings.seo_home_description || '',
      seo_about_title: props.settings.seo_about_title || '',
      seo_about_description: props.settings.seo_about_description || '',
      seo_products_title: props.settings.seo_products_title || '',
      seo_products_description: props.settings.seo_products_description || '',
      seo_contact_title: props.settings.seo_contact_title || '',
      seo_contact_description: props.settings.seo_contact_description || ''
    });
    var onOgImageChange = function onOgImageChange(event) {
      var file = event.target.files[0];
      if (!file) return;
      form.seo_og_image = file;
      ogPreview.value = URL.createObjectURL(file);
    };
    var onLogoChange = function onLogoChange(event) {
      var file = event.target.files[0];
      if (!file) return;
      form.site_logo = file;
      logoPreview.value = URL.createObjectURL(file);
    };
    var onHeroImageChange = function onHeroImageChange(event) {
      var file = event.target.files[0];
      if (!file) return;
      form.hero_image = file;
      heroPreview.value = URL.createObjectURL(file);
    };
    var submit = function submit() {
      form.post('/admin/settings/update', {
        forceFormData: true,
        preserveScroll: true
      });
    };
    var __returned__ = {
      props: props,
      activeTab: activeTab,
      tabs: tabs,
      seoPages: seoPages,
      pillars: pillars,
      trustItems: trustItems,
      heroPreview: heroPreview,
      logoPreview: logoPreview,
      ogPreview: ogPreview,
      form: form,
      onOgImageChange: onOgImageChange,
      onLogoChange: onLogoChange,
      onHeroImageChange: onHeroImageChange,
      submit: submit,
      ref: vue__WEBPACK_IMPORTED_MODULE_0__.ref,
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Settings/Edit.vue?vue&type=template&id=64d9205d&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Settings/Edit.vue?vue&type=template&id=64d9205d&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js");

var _hoisted_1 = {
  "class": "settings-hero"
};
var _hoisted_2 = ["disabled"];
var _hoisted_3 = {
  key: 0,
  "class": "settings-save-btn__spinner"
};
var _hoisted_4 = {
  "class": "settings-layout"
};
var _hoisted_5 = {
  "class": "settings-nav"
};
var _hoisted_6 = ["onClick"];
var _hoisted_7 = {
  "class": "settings-nav__icon"
};
var _hoisted_8 = {
  "class": "settings-content"
};
var _hoisted_9 = {
  "class": "settings-panel"
};
var _hoisted_10 = {
  "class": "settings-subsection"
};
var _hoisted_11 = {
  "class": "settings-upload"
};
var _hoisted_12 = {
  key: 0,
  "class": "settings-upload__preview settings-upload__preview--logo"
};
var _hoisted_13 = ["src"];
var _hoisted_14 = {
  "class": "settings-upload__dropzone"
};
var _hoisted_15 = {
  "class": "settings-panel"
};
var _hoisted_16 = {
  "class": "settings-grid"
};
var _hoisted_17 = {
  "class": "settings-field"
};
var _hoisted_18 = {
  "class": "settings-field"
};
var _hoisted_19 = {
  "class": "settings-field settings-field--full"
};
var _hoisted_20 = {
  "class": "settings-field"
};
var _hoisted_21 = {
  "class": "settings-field"
};
var _hoisted_22 = {
  "class": "settings-panel"
};
var _hoisted_23 = {
  "class": "settings-grid"
};
var _hoisted_24 = {
  "class": "settings-field"
};
var _hoisted_25 = {
  "class": "settings-field"
};
var _hoisted_26 = {
  "class": "settings-field settings-field--full"
};
var _hoisted_27 = {
  "class": "settings-field settings-field--full"
};
var _hoisted_28 = {
  "class": "settings-subsection"
};
var _hoisted_29 = {
  "class": "settings-mini-grid"
};
var _hoisted_30 = {
  "class": "settings-mini-card"
};
var _hoisted_31 = {
  "class": "settings-field"
};
var _hoisted_32 = {
  "class": "settings-field"
};
var _hoisted_33 = {
  "class": "settings-mini-card"
};
var _hoisted_34 = {
  "class": "settings-field"
};
var _hoisted_35 = {
  "class": "settings-field"
};
var _hoisted_36 = {
  "class": "settings-subsection"
};
var _hoisted_37 = {
  "class": "settings-upload"
};
var _hoisted_38 = {
  key: 0,
  "class": "settings-upload__preview"
};
var _hoisted_39 = ["src"];
var _hoisted_40 = {
  "class": "settings-upload__dropzone"
};
var _hoisted_41 = {
  "class": "settings-panel"
};
var _hoisted_42 = {
  "class": "settings-grid"
};
var _hoisted_43 = {
  "class": "settings-field"
};
var _hoisted_44 = {
  "class": "settings-field"
};
var _hoisted_45 = {
  "class": "settings-field settings-field--full"
};
var _hoisted_46 = {
  "class": "settings-field settings-field--full"
};
var _hoisted_47 = {
  "class": "settings-field"
};
var _hoisted_48 = {
  "class": "settings-panel"
};
var _hoisted_49 = {
  "class": "settings-grid"
};
var _hoisted_50 = {
  "class": "settings-field"
};
var _hoisted_51 = {
  "class": "settings-field settings-field--full"
};
var _hoisted_52 = {
  "class": "settings-subsection"
};
var _hoisted_53 = {
  "class": "settings-mini-grid settings-mini-grid--three"
};
var _hoisted_54 = {
  "class": "settings-mini-card__badge"
};
var _hoisted_55 = {
  "class": "settings-field"
};
var _hoisted_56 = ["onUpdate:modelValue"];
var _hoisted_57 = {
  "class": "settings-field"
};
var _hoisted_58 = ["onUpdate:modelValue"];
var _hoisted_59 = {
  "class": "settings-subsection"
};
var _hoisted_60 = {
  "class": "settings-stack"
};
var _hoisted_61 = {
  "class": "settings-pillar-card__head"
};
var _hoisted_62 = {
  "class": "settings-field"
};
var _hoisted_63 = ["onUpdate:modelValue"];
var _hoisted_64 = {
  "class": "settings-field"
};
var _hoisted_65 = ["onUpdate:modelValue"];
var _hoisted_66 = {
  "class": "settings-panel"
};
var _hoisted_67 = {
  "class": "settings-grid"
};
var _hoisted_68 = {
  "class": "settings-field"
};
var _hoisted_69 = {
  "class": "settings-field"
};
var _hoisted_70 = {
  "class": "settings-field settings-field--full"
};
var _hoisted_71 = {
  "class": "settings-field settings-field--full"
};
var _hoisted_72 = {
  "class": "settings-field"
};
var _hoisted_73 = {
  "class": "settings-field"
};
var _hoisted_74 = {
  "class": "settings-panel"
};
var _hoisted_75 = {
  "class": "settings-stack"
};
var _hoisted_76 = {
  "class": "settings-field"
};
var _hoisted_77 = {
  "class": "settings-field"
};
var _hoisted_78 = {
  "class": "settings-field"
};
var _hoisted_79 = {
  "class": "settings-field"
};
var _hoisted_80 = {
  "class": "settings-panel"
};
var _hoisted_81 = {
  "class": "settings-grid"
};
var _hoisted_82 = {
  "class": "settings-field settings-field--full"
};
var _hoisted_83 = {
  "class": "settings-field settings-field--full"
};
var _hoisted_84 = {
  "class": "settings-field settings-field--full"
};
var _hoisted_85 = {
  "class": "settings-subsection"
};
var _hoisted_86 = {
  "class": "settings-upload"
};
var _hoisted_87 = {
  key: 0,
  "class": "settings-upload__preview"
};
var _hoisted_88 = ["src"];
var _hoisted_89 = {
  "class": "settings-upload__dropzone"
};
var _hoisted_90 = {
  "class": "settings-grid"
};
var _hoisted_91 = {
  "class": "settings-field settings-field--full"
};
var _hoisted_92 = ["onUpdate:modelValue"];
var _hoisted_93 = {
  "class": "settings-field settings-field--full"
};
var _hoisted_94 = ["onUpdate:modelValue"];
var _hoisted_95 = {
  "class": "settings-footer"
};
var _hoisted_96 = ["disabled"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_Head = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Head");
  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Head, {
    title: "Settings"
  }), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Layout"], {
    prv_page: [{
      'name': 'Settings'
    }]
  }, {
    "default": (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(function () {
      return [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("form", {
        onSubmit: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withModifiers)($setup.submit, ["prevent"]),
        "class": "settings-page"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("header", _hoisted_1, [_cache[33] || (_cache[33] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "settings-hero__eyebrow"
      }, "Website CMS"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h1", {
        "class": "settings-hero__title"
      }, "Site Settings"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", {
        "class": "settings-hero__desc"
      }, " Manage contact details, homepage content, and about page copy from one place. ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "submit",
        "class": "settings-save-btn",
        disabled: $setup.form.processing
      }, [$setup.form.processing ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", _hoisted_3)) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.processing ? 'Saving...' : 'Save Changes'), 1 /* TEXT */)], 8 /* PROPS */, _hoisted_2)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("aside", _hoisted_5, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.tabs, function (tab) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          key: tab.id,
          type: "button",
          "class": (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(["settings-nav__item", {
            'settings-nav__item--active': $setup.activeTab === tab.id
          }]),
          onClick: function onClick($event) {
            return $setup.activeTab = tab.id;
          }
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_7, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tab.icon), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tab.label), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(tab.hint), 1 /* TEXT */)])], 10 /* CLASS, PROPS */, _hoisted_6);
      }), 64 /* STABLE_FRAGMENT */))]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Branding "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_9, [_cache[37] || (_cache[37] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "settings-panel__head"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Site Logo"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Used in the website header, footer, and admin dashboard.")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [$setup.logoPreview ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: $setup.logoPreview,
        alt: "Logo preview"
      }, null, 8 /* PROPS */, _hoisted_13)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_14, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "file",
        accept: "image/*",
        hidden: "",
        onChange: $setup.onLogoChange
      }, null, 32 /* NEED_HYDRATION */), _cache[34] || (_cache[34] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "settings-upload__icon"
      }, "+", -1 /* CACHED */)), _cache[35] || (_cache[35] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Upload site logo", -1 /* CACHED */)), _cache[36] || (_cache[36] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, "PNG or JPG with transparent background — recommended 400×120px", -1 /* CACHED */))])])])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.activeTab === 'branding']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Contact "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_15, [_cache[43] || (_cache[43] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "settings-panel__head"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Contact Information"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Displayed in the footer and contact page.")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [_cache[38] || (_cache[38] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Phone", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[0] || (_cache[0] = function ($event) {
          return $setup.form.phone = $event;
        }),
        placeholder: "+201282499021"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.phone]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [_cache[39] || (_cache[39] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Secondary Phone", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[1] || (_cache[1] = function ($event) {
          return $setup.form.phone_secondary = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.phone_secondary]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_19, [_cache[40] || (_cache[40] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Email", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "email",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[2] || (_cache[2] = function ($event) {
          return $setup.form.email = $event;
        }),
        placeholder: "info@example.com"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.email]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [_cache[41] || (_cache[41] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Facebook URL", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "url",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[3] || (_cache[3] = function ($event) {
          return $setup.form.social_facebook = $event;
        }),
        placeholder: "https://facebook.com/..."
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.social_facebook]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, [_cache[42] || (_cache[42] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "LinkedIn URL", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "url",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[4] || (_cache[4] = function ($event) {
          return $setup.form.social_linkedin = $event;
        }),
        placeholder: "https://linkedin.com/..."
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.social_linkedin]])])])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.activeTab === 'contact']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Hero "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_22, [_cache[59] || (_cache[59] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "settings-panel__head"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Homepage Hero"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Main banner at the top of the homepage.")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_23, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_24, [_cache[44] || (_cache[44] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Loading Message", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[5] || (_cache[5] = function ($event) {
          return $setup.form.home_loading_message = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.home_loading_message]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_25, [_cache[45] || (_cache[45] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Eyebrow Text", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[6] || (_cache[6] = function ($event) {
          return $setup.form.hero_eyebrow = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.hero_eyebrow]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_26, [_cache[46] || (_cache[46] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Hero Tagline", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[7] || (_cache[7] = function ($event) {
          return $setup.form.hero_tagline = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.hero_tagline]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_27, [_cache[47] || (_cache[47] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Hero Subtitle", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        rows: "3",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[8] || (_cache[8] = function ($event) {
          return $setup.form.intro_en = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.intro_en]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_28, [_cache[54] || (_cache[54] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Hero Badges", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_29, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_30, [_cache[50] || (_cache[50] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "settings-mini-card__badge"
      }, "Badge 1", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_31, [_cache[48] || (_cache[48] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Label", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[9] || (_cache[9] = function ($event) {
          return $setup.form.hero_badge_1_label = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.hero_badge_1_label]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_32, [_cache[49] || (_cache[49] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Value", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[10] || (_cache[10] = function ($event) {
          return $setup.form.hero_badge_1_value = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.hero_badge_1_value]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_33, [_cache[53] || (_cache[53] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "settings-mini-card__badge"
      }, "Badge 2", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_34, [_cache[51] || (_cache[51] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Label", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[11] || (_cache[11] = function ($event) {
          return $setup.form.hero_badge_2_label = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.hero_badge_2_label]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_35, [_cache[52] || (_cache[52] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Value", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[12] || (_cache[12] = function ($event) {
          return $setup.form.hero_badge_2_value = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.hero_badge_2_value]])])])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_36, [_cache[58] || (_cache[58] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Hero Image", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_37, [$setup.heroPreview ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_38, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: $setup.heroPreview,
        alt: "Hero preview"
      }, null, 8 /* PROPS */, _hoisted_39)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_40, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "file",
        accept: "image/*",
        hidden: "",
        onChange: $setup.onHeroImageChange
      }, null, 32 /* NEED_HYDRATION */), _cache[55] || (_cache[55] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "settings-upload__icon"
      }, "+", -1 /* CACHED */)), _cache[56] || (_cache[56] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Upload hero image", -1 /* CACHED */)), _cache[57] || (_cache[57] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, "JPG, PNG or WebP — recommended 1200×1200px", -1 /* CACHED */))])])])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.activeTab === 'hero']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Story "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_41, [_cache[65] || (_cache[65] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "settings-panel__head"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Story Section"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Intro block below the hero on the homepage.")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_42, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_43, [_cache[60] || (_cache[60] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Eyebrow", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[13] || (_cache[13] = function ($event) {
          return $setup.form.story_eyebrow = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.story_eyebrow]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_44, [_cache[61] || (_cache[61] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Primary Button", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[14] || (_cache[14] = function ($event) {
          return $setup.form.story_btn_primary = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.story_btn_primary]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_45, [_cache[62] || (_cache[62] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Section Heading", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[15] || (_cache[15] = function ($event) {
          return $setup.form.story_heading = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.story_heading]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_46, [_cache[63] || (_cache[63] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Story Text", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        rows: "5",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[16] || (_cache[16] = function ($event) {
          return $setup.form.home_about_excerpt = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.home_about_excerpt]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_47, [_cache[64] || (_cache[64] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Secondary Button", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[17] || (_cache[17] = function ($event) {
          return $setup.form.story_btn_secondary = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.story_btn_secondary]])])])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.activeTab === 'story']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Pillars "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_48, [_cache[74] || (_cache[74] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "settings-panel__head"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Pillars & Trust"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Why El-Khadiga section with trust indicators and value pillars.")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_49, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_50, [_cache[66] || (_cache[66] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Section Eyebrow", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[18] || (_cache[18] = function ($event) {
          return $setup.form.pillars_eyebrow = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.pillars_eyebrow]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_51, [_cache[67] || (_cache[67] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Section Heading", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[19] || (_cache[19] = function ($event) {
          return $setup.form.pillars_heading = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.pillars_heading]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_52, [_cache[70] || (_cache[70] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Trust Strip", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_53, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(3, function (index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          key: "trust-".concat(index),
          "class": "settings-mini-card"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_54, "#" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index), 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_55, [_cache[68] || (_cache[68] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Value", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "text",
          "class": "form-control settings-input",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $setup.form["trust_".concat(index, "_value")] = $event;
          }
        }, null, 8 /* PROPS */, _hoisted_56), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form["trust_".concat(index, "_value")]]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_57, [_cache[69] || (_cache[69] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Label", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "text",
          "class": "form-control settings-input",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $setup.form["trust_".concat(index, "_label")] = $event;
          }
        }, null, 8 /* PROPS */, _hoisted_58), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form["trust_".concat(index, "_label")]]])])]);
      }), 64 /* STABLE_FRAGMENT */))])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_59, [_cache[73] || (_cache[73] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Value Pillars", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_60, [((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)(3, function (index) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          key: "pillar-".concat(index),
          "class": "settings-pillar-card"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_61, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Pillar " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(index), 1 /* TEXT */)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_62, [_cache[71] || (_cache[71] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Title", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "text",
          "class": "form-control settings-input",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $setup.form["pillar_".concat(index, "_title")] = $event;
          }
        }, null, 8 /* PROPS */, _hoisted_63), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form["pillar_".concat(index, "_title")]]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_64, [_cache[72] || (_cache[72] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Description", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          rows: "3",
          "class": "form-control settings-input",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $setup.form["pillar_".concat(index, "_description")] = $event;
          }
        }, null, 8 /* PROPS */, _hoisted_65), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form["pillar_".concat(index, "_description")]]])])]);
      }), 64 /* STABLE_FRAGMENT */))])])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.activeTab === 'pillars']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Featured "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_66, [_cache[81] || (_cache[81] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "settings-panel__head"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "Featured Products"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Section copy on the homepage. Products are selected from the Products admin.")], -1 /* CACHED */)), _cache[82] || (_cache[82] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "settings-notice"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Tip:"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" Mark products as \"Featured on Home\" from "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", {
        href: "/admin/products"
      }, "Products"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" to control what appears here. ")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_67, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_68, [_cache[75] || (_cache[75] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Section Eyebrow", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[20] || (_cache[20] = function ($event) {
          return $setup.form.featured_eyebrow = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.featured_eyebrow]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_69, [_cache[76] || (_cache[76] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Stats Label", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[21] || (_cache[21] = function ($event) {
          return $setup.form.featured_stats_label = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.featured_stats_label]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_70, [_cache[77] || (_cache[77] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Section Heading", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[22] || (_cache[22] = function ($event) {
          return $setup.form.featured_heading = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.featured_heading]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_71, [_cache[78] || (_cache[78] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Intro Text", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        rows: "3",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[23] || (_cache[23] = function ($event) {
          return $setup.form.featured_intro = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.featured_intro]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_72, [_cache[79] || (_cache[79] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Catalog Link Text", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[24] || (_cache[24] = function ($event) {
          return $setup.form.featured_link_text = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.featured_link_text]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_73, [_cache[80] || (_cache[80] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Button Text", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[25] || (_cache[25] = function ($event) {
          return $setup.form.featured_btn_text = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.featured_btn_text]])])])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.activeTab === 'featured']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" About "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_74, [_cache[87] || (_cache[87] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "settings-panel__head"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "About Page"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Long-form content for the About Us page.")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_75, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_76, [_cache[83] || (_cache[83] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "About Us", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        rows: "8",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[26] || (_cache[26] = function ($event) {
          return $setup.form.about_us_en = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.about_us_en]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_77, [_cache[84] || (_cache[84] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Mission", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        rows: "4",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[27] || (_cache[27] = function ($event) {
          return $setup.form.mission = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.mission]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_78, [_cache[85] || (_cache[85] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Vision", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        rows: "4",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[28] || (_cache[28] = function ($event) {
          return $setup.form.vision = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.vision]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_79, [_cache[86] || (_cache[86] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Goal", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        rows: "4",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[29] || (_cache[29] = function ($event) {
          return $setup.form.goal = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.goal]])])])], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.activeTab === 'about']]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" SEO "), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("section", _hoisted_80, [_cache[97] || (_cache[97] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        "class": "settings-panel__head"
      }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, "SEO Settings"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, "Control search engine titles, descriptions, and social sharing previews.")], -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_81, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_82, [_cache[88] || (_cache[88] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Default Site Title", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[30] || (_cache[30] = function ($event) {
          return $setup.form.seo_site_title = $event;
        }),
        placeholder: "El-Khadiga for Export"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.seo_site_title]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_83, [_cache[89] || (_cache[89] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Default Meta Description", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
        rows: "3",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[31] || (_cache[31] = function ($event) {
          return $setup.form.seo_meta_description = $event;
        })
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.seo_meta_description]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_84, [_cache[90] || (_cache[90] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Meta Keywords", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "text",
        "class": "form-control settings-input",
        "onUpdate:modelValue": _cache[32] || (_cache[32] = function ($event) {
          return $setup.form.seo_meta_keywords = $event;
        }),
        placeholder: "frozen fruits, IQF, Egypt export"
      }, null, 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form.seo_meta_keywords]])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_85, [_cache[94] || (_cache[94] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, "Social Share Image (Open Graph)", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_86, [$setup.ogPreview ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_87, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("img", {
        src: $setup.ogPreview,
        alt: "OG image preview"
      }, null, 8 /* PROPS */, _hoisted_88)])) : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", _hoisted_89, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
        type: "file",
        accept: "image/*",
        hidden: "",
        onChange: $setup.onOgImageChange
      }, null, 32 /* NEED_HYDRATION */), _cache[91] || (_cache[91] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", {
        "class": "settings-upload__icon"
      }, "+", -1 /* CACHED */)), _cache[92] || (_cache[92] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("strong", null, "Upload OG image", -1 /* CACHED */)), _cache[93] || (_cache[93] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("small", null, "Used when pages are shared on social media — recommended 1200×630px", -1 /* CACHED */))])])]), ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.seoPages, function (page) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          key: page.key,
          "class": "settings-subsection"
        }, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h3", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(page.label) + " Page", 1 /* TEXT */), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_90, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_91, [_cache[95] || (_cache[95] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Page Title", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
          type: "text",
          "class": "form-control settings-input",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $setup.form[page.titleField] = $event;
          }
        }, null, 8 /* PROPS */, _hoisted_92), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form[page.titleField]]])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_93, [_cache[96] || (_cache[96] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("label", null, "Meta Description", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("textarea", {
          rows: "3",
          "class": "form-control settings-input",
          "onUpdate:modelValue": function onUpdateModelValue($event) {
            return $setup.form[page.descriptionField] = $event;
          }
        }, null, 8 /* PROPS */, _hoisted_94), [[vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, $setup.form[page.descriptionField]]])])])]);
      }), 64 /* STABLE_FRAGMENT */))], 512 /* NEED_PATCH */), [[vue__WEBPACK_IMPORTED_MODULE_0__.vShow, $setup.activeTab === 'seo']])])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("footer", _hoisted_95, [_cache[98] || (_cache[98] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Changes apply to the public website after saving.", -1 /* CACHED */)), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        type: "submit",
        "class": "settings-save-btn settings-save-btn--sm",
        disabled: $setup.form.processing
      }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.form.processing ? 'Saving...' : 'Save Changes'), 9 /* TEXT, PROPS */, _hoisted_96)])], 32 /* NEED_HYDRATION */)];
    }),

    _: 1 /* STABLE */
  })], 64 /* STABLE_FRAGMENT */);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Settings/Edit.vue?vue&type=style&index=0&id=64d9205d&scoped=true&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Settings/Edit.vue?vue&type=style&index=0&id=64d9205d&scoped=true&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.settings-page[data-v-64d9205d] {\n    --settings-primary: #A91E2C;\n    --settings-primary-dark: #8E1824;\n    --settings-secondary: #5A8F3C;\n    --settings-bg: #f4f6f4;\n    --settings-surface: #ffffff;\n    --settings-border: #e6ebe6;\n    --settings-text: #1a1a1a;\n    --settings-muted: #6b7280;\n    --settings-radius: 16px;\n    --settings-shadow: 0 8px 32px rgba(26, 26, 26, 0.06);\n    padding-bottom: 5rem;\n}\n.settings-hero[data-v-64d9205d] {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 1.5rem;\n    margin-bottom: 1.75rem;\n    padding: 1.75rem 2rem;\n    border: 1px solid var(--settings-border);\n    border-radius: 20px;\n    background:\n        radial-gradient(circle at 100% 0%, rgba(169, 30, 44, 0.08), transparent 40%),\n        radial-gradient(circle at 0% 100%, rgba(90, 143, 60, 0.1), transparent 35%),\n        var(--settings-surface);\n    box-shadow: var(--settings-shadow);\n}\n.settings-hero__eyebrow[data-v-64d9205d] {\n    display: inline-block;\n    margin-bottom: 0.5rem;\n    color: var(--settings-secondary);\n    font-size: 0.72rem;\n    font-weight: 800;\n    letter-spacing: 0.12em;\n    text-transform: uppercase;\n}\n.settings-hero__title[data-v-64d9205d] {\n    margin: 0;\n    color: var(--settings-text);\n    font-size: 1.85rem;\n    font-weight: 800;\n    letter-spacing: -0.03em;\n}\n.settings-hero__desc[data-v-64d9205d] {\n    max-width: 520px;\n    margin: 0.5rem 0 0;\n    color: var(--settings-muted);\n    font-size: 0.95rem;\n    line-height: 1.6;\n}\n.settings-save-btn[data-v-64d9205d] {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.5rem;\n    min-width: 148px;\n    min-height: 48px;\n    padding: 0.75rem 1.5rem;\n    border: none;\n    border-radius: 12px;\n    background: linear-gradient(135deg, var(--settings-primary), var(--settings-primary-dark));\n    color: #fff;\n    font-weight: 700;\n    font-size: 0.9rem;\n    letter-spacing: 0.02em;\n    cursor: pointer;\n    box-shadow: 0 8px 24px rgba(169, 30, 44, 0.28);\n    transition: transform 0.2s ease, box-shadow 0.2s ease, opacity 0.2s ease;\n    flex-shrink: 0;\n}\n.settings-save-btn[data-v-64d9205d]:hover:not(:disabled) {\n    transform: translateY(-2px);\n    box-shadow: 0 12px 28px rgba(169, 30, 44, 0.34);\n}\n.settings-save-btn[data-v-64d9205d]:disabled {\n    opacity: 0.72;\n    cursor: wait;\n}\n.settings-save-btn--sm[data-v-64d9205d] {\n    min-width: 120px;\n    min-height: 42px;\n    font-size: 0.85rem;\n}\n.settings-save-btn__spinner[data-v-64d9205d] {\n    width: 16px;\n    height: 16px;\n    border: 2px solid rgba(255, 255, 255, 0.35);\n    border-top-color: #fff;\n    border-radius: 50%;\n    animation: spin-64d9205d 0.7s linear infinite;\n}\n@keyframes spin-64d9205d {\nto { transform: rotate(360deg);\n}\n}\n.settings-layout[data-v-64d9205d] {\n    display: grid;\n    grid-template-columns: 260px minmax(0, 1fr);\n    gap: 1.25rem;\n    align-items: start;\n}\n.settings-nav[data-v-64d9205d] {\n    position: sticky;\n    top: 1rem;\n    display: flex;\n    flex-direction: column;\n    gap: 0.45rem;\n    padding: 0.75rem;\n    border: 1px solid var(--settings-border);\n    border-radius: 18px;\n    background: var(--settings-surface);\n    box-shadow: var(--settings-shadow);\n}\n.settings-nav__item[data-v-64d9205d] {\n    display: flex;\n    align-items: flex-start;\n    gap: 0.75rem;\n    width: 100%;\n    padding: 0.85rem 0.9rem;\n    border: 1px solid transparent;\n    border-radius: 12px;\n    background: transparent;\n    text-align: left;\n    cursor: pointer;\n    transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;\n}\n.settings-nav__item[data-v-64d9205d]:hover {\n    background: #f8faf8;\n    border-color: var(--settings-border);\n}\n.settings-nav__item--active[data-v-64d9205d] {\n    background: linear-gradient(135deg, rgba(169, 30, 44, 0.08), rgba(90, 143, 60, 0.08));\n    border-color: rgba(169, 30, 44, 0.18);\n}\n.settings-nav__item--active strong[data-v-64d9205d] {\n    color: var(--settings-primary);\n}\n.settings-nav__icon[data-v-64d9205d] {\n    display: grid;\n    width: 34px;\n    height: 34px;\n    flex-shrink: 0;\n    place-items: center;\n    border-radius: 10px;\n    background: #f0f4ef;\n    color: var(--settings-secondary);\n    font-size: 0.9rem;\n    font-weight: 800;\n}\n.settings-nav__item strong[data-v-64d9205d] {\n    display: block;\n    color: var(--settings-text);\n    font-size: 0.88rem;\n    line-height: 1.2;\n}\n.settings-nav__item small[data-v-64d9205d] {\n    display: block;\n    margin-top: 0.15rem;\n    color: var(--settings-muted);\n    font-size: 0.72rem;\n    line-height: 1.3;\n}\n.settings-content[data-v-64d9205d] {\n    min-width: 0;\n}\n.settings-panel[data-v-64d9205d] {\n    padding: 1.75rem;\n    border: 1px solid var(--settings-border);\n    border-radius: 20px;\n    background: var(--settings-surface);\n    box-shadow: var(--settings-shadow);\n    animation: fadeIn-64d9205d 0.25s ease;\n}\n@keyframes fadeIn-64d9205d {\nfrom { opacity: 0; transform: translateY(6px);\n}\nto { opacity: 1; transform: translateY(0);\n}\n}\n.settings-panel__head[data-v-64d9205d] {\n    margin-bottom: 1.5rem;\n    padding-bottom: 1rem;\n    border-bottom: 1px solid var(--settings-border);\n}\n.settings-panel__head h2[data-v-64d9205d] {\n    margin: 0;\n    color: var(--settings-text);\n    font-size: 1.35rem;\n    font-weight: 800;\n    letter-spacing: -0.02em;\n}\n.settings-panel__head p[data-v-64d9205d] {\n    margin: 0.35rem 0 0;\n    color: var(--settings-muted);\n    font-size: 0.9rem;\n}\n.settings-grid[data-v-64d9205d] {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 1rem 1.25rem;\n}\n.settings-stack[data-v-64d9205d] {\n    display: grid;\n    gap: 1rem;\n}\n.settings-field[data-v-64d9205d] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.4rem;\n}\n.settings-field--full[data-v-64d9205d] {\n    grid-column: 1 / -1;\n}\n.settings-field label[data-v-64d9205d] {\n    color: var(--settings-text);\n    font-size: 0.78rem;\n    font-weight: 700;\n    letter-spacing: 0.04em;\n    text-transform: uppercase;\n}\n.settings-input[data-v-64d9205d] {\n    border: 1px solid var(--settings-border) !important;\n    border-radius: 12px !important;\n    padding: 0.7rem 0.9rem !important;\n    font-size: 0.92rem !important;\n    transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n.settings-input[data-v-64d9205d]:focus {\n    border-color: rgba(90, 143, 60, 0.55) !important;\n    box-shadow: 0 0 0 3px rgba(90, 143, 60, 0.12) !important;\n}\n.settings-subsection[data-v-64d9205d] {\n    margin-top: 1.75rem;\n    padding-top: 1.5rem;\n    border-top: 1px dashed var(--settings-border);\n}\n.settings-subsection h3[data-v-64d9205d] {\n    margin: 0 0 1rem;\n    color: var(--settings-text);\n    font-size: 1rem;\n    font-weight: 800;\n}\n.settings-mini-grid[data-v-64d9205d] {\n    display: grid;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n    gap: 1rem;\n}\n.settings-mini-grid--three[data-v-64d9205d] {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.settings-mini-card[data-v-64d9205d],\n.settings-pillar-card[data-v-64d9205d] {\n    padding: 1rem;\n    border: 1px solid var(--settings-border);\n    border-radius: 14px;\n    background: #fafcfa;\n}\n.settings-mini-card__badge[data-v-64d9205d],\n.settings-pillar-card__head span[data-v-64d9205d] {\n    display: inline-flex;\n    margin-bottom: 0.75rem;\n    padding: 0.25rem 0.55rem;\n    border-radius: 999px;\n    background: rgba(169, 30, 44, 0.1);\n    color: var(--settings-primary);\n    font-size: 0.7rem;\n    font-weight: 800;\n    letter-spacing: 0.06em;\n    text-transform: uppercase;\n}\n.settings-pillar-card__head[data-v-64d9205d] {\n    margin-bottom: 0.25rem;\n}\n.settings-upload[data-v-64d9205d] {\n    display: grid;\n    grid-template-columns: 200px 1fr;\n    gap: 1rem;\n    align-items: stretch;\n}\n.settings-upload__preview[data-v-64d9205d] {\n    overflow: hidden;\n    border: 1px solid var(--settings-border);\n    border-radius: 14px;\n    background: #f8faf8;\n}\n.settings-upload__preview img[data-v-64d9205d] {\n    width: 100%;\n    height: 100%;\n    min-height: 160px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n.settings-upload__preview--logo img[data-v-64d9205d] {\n    min-height: 120px;\n    -o-object-fit: contain;\n       object-fit: contain;\n    padding: 1rem;\n}\n.settings-upload__dropzone[data-v-64d9205d] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 0.35rem;\n    min-height: 160px;\n    padding: 1.25rem;\n    border: 2px dashed #cfd8cf;\n    border-radius: 14px;\n    background: #f8faf8;\n    text-align: center;\n    cursor: pointer;\n    transition: border-color 0.2s ease, background 0.2s ease;\n}\n.settings-upload__dropzone[data-v-64d9205d]:hover {\n    border-color: var(--settings-secondary);\n    background: #f2f7f0;\n}\n.settings-upload__icon[data-v-64d9205d] {\n    display: grid;\n    width: 44px;\n    height: 44px;\n    place-items: center;\n    border-radius: 12px;\n    background: rgba(90, 143, 60, 0.12);\n    color: var(--settings-secondary);\n    font-size: 1.4rem;\n    font-weight: 300;\n}\n.settings-upload__dropzone strong[data-v-64d9205d] {\n    color: var(--settings-text);\n    font-size: 0.92rem;\n}\n.settings-upload__dropzone small[data-v-64d9205d] {\n    color: var(--settings-muted);\n    font-size: 0.78rem;\n}\n.settings-notice[data-v-64d9205d] {\n    margin-bottom: 1.25rem;\n    padding: 0.9rem 1rem;\n    border: 1px solid rgba(90, 143, 60, 0.2);\n    border-radius: 12px;\n    background: rgba(90, 143, 60, 0.08);\n    color: #3d5c2c;\n    font-size: 0.88rem;\n    line-height: 1.5;\n}\n.settings-notice a[data-v-64d9205d] {\n    color: var(--settings-primary);\n    font-weight: 700;\n    text-decoration: none;\n}\n.settings-notice a[data-v-64d9205d]:hover {\n    text-decoration: underline;\n}\n.settings-footer[data-v-64d9205d] {\n    position: fixed;\n    right: 1.5rem;\n    bottom: 1.25rem;\n    left: calc(250px + 1.5rem);\n    z-index: 20;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 1rem;\n    padding: 0.85rem 1.25rem;\n    border: 1px solid var(--settings-border);\n    border-radius: 14px;\n    background: rgba(255, 255, 255, 0.94);\n    -webkit-backdrop-filter: blur(10px);\n            backdrop-filter: blur(10px);\n    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n}\n.settings-footer span[data-v-64d9205d] {\n    color: var(--settings-muted);\n    font-size: 0.85rem;\n}\n@media (max-width: 1100px) {\n.settings-layout[data-v-64d9205d] {\n        grid-template-columns: 1fr;\n}\n.settings-nav[data-v-64d9205d] {\n        position: static;\n        flex-direction: row;\n        overflow-x: auto;\n        padding-bottom: 0.5rem;\n}\n.settings-nav__item[data-v-64d9205d] {\n        min-width: 180px;\n        flex-shrink: 0;\n}\n.settings-footer[data-v-64d9205d] {\n        left: 1rem;\n        right: 1rem;\n}\n}\n@media (max-width: 768px) {\n.settings-hero[data-v-64d9205d] {\n        flex-direction: column;\n        padding: 1.25rem;\n}\n.settings-save-btn[data-v-64d9205d] {\n        width: 100%;\n}\n.settings-grid[data-v-64d9205d],\n    .settings-mini-grid[data-v-64d9205d],\n    .settings-mini-grid--three[data-v-64d9205d] {\n        grid-template-columns: 1fr;\n}\n.settings-upload[data-v-64d9205d] {\n        grid-template-columns: 1fr;\n}\n.settings-footer[data-v-64d9205d] {\n        flex-direction: column;\n        align-items: stretch;\n        text-align: center;\n}\n.settings-footer .settings-save-btn[data-v-64d9205d] {\n        width: 100%;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Settings/Edit.vue?vue&type=style&index=0&id=64d9205d&scoped=true&lang=css":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Settings/Edit.vue?vue&type=style&index=0&id=64d9205d&scoped=true&lang=css ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_style_index_0_id_64d9205d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=style&index=0&id=64d9205d&scoped=true&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Settings/Edit.vue?vue&type=style&index=0&id=64d9205d&scoped=true&lang=css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_style_index_0_id_64d9205d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_style_index_0_id_64d9205d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/Admin/Pages/Settings/Edit.vue":
/*!****************************************************!*\
  !*** ./resources/js/Admin/Pages/Settings/Edit.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Edit_vue_vue_type_template_id_64d9205d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=64d9205d&scoped=true */ "./resources/js/Admin/Pages/Settings/Edit.vue?vue&type=template&id=64d9205d&scoped=true");
/* harmony import */ var _Edit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&setup=true&lang=js */ "./resources/js/Admin/Pages/Settings/Edit.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _Edit_vue_vue_type_style_index_0_id_64d9205d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Edit.vue?vue&type=style&index=0&id=64d9205d&scoped=true&lang=css */ "./resources/js/Admin/Pages/Settings/Edit.vue?vue&type=style&index=0&id=64d9205d&scoped=true&lang=css");
/* harmony import */ var F_Arkan_partners_El_Khadiga_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,F_Arkan_partners_El_Khadiga_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_Edit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Edit_vue_vue_type_template_id_64d9205d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-64d9205d"],['__file',"resources/js/Admin/Pages/Settings/Edit.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./resources/js/Admin/Pages/Settings/Edit.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/Settings/Edit.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=script&setup=true&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Settings/Edit.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./resources/js/Admin/Pages/Settings/Edit.vue?vue&type=template&id=64d9205d&scoped=true":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/Settings/Edit.vue?vue&type=template&id=64d9205d&scoped=true ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_64d9205d_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_template_id_64d9205d_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=template&id=64d9205d&scoped=true */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Settings/Edit.vue?vue&type=template&id=64d9205d&scoped=true");


/***/ }),

/***/ "./resources/js/Admin/Pages/Settings/Edit.vue?vue&type=style&index=0&id=64d9205d&scoped=true&lang=css":
/*!************************************************************************************************************!*\
  !*** ./resources/js/Admin/Pages/Settings/Edit.vue?vue&type=style&index=0&id=64d9205d&scoped=true&lang=css ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_10_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_10_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_Edit_vue_vue_type_style_index_0_id_64d9205d_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!../../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!../../../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./Edit.vue?vue&type=style&index=0&id=64d9205d&scoped=true&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-10.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-10.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/js/Admin/Pages/Settings/Edit.vue?vue&type=style&index=0&id=64d9205d&scoped=true&lang=css");


/***/ })

}]);