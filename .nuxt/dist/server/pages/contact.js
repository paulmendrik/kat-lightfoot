exports.ids = [3];
exports.modules = {

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=template&id=6f00b854&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"columns is-centered"},[_vm._ssrNode("<div class=\"column main\">","</div>",[_c('prismic-rich-text',{staticClass:"title",attrs:{"field":_vm.document.title}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"columns\">","</div>",[_vm._ssrNode("<div class=\"column is-two-fifths contact\">","</div>",[_vm._ssrNode("<figure class=\"image\">","</figure>",[_c('prismic-image',{attrs:{"field":_vm.document.image}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column is-three-fifths\">","</div>",[_c('prismic-rich-text',{staticClass:"contact",attrs:{"field":_vm.document.content}})],1)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/contact.vue?vue&type=template&id=6f00b854&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/contact.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var contactvue_type_script_lang_js_ = ({
  name: "Contact",
  transition: "page",

  head() {
    return {
      title: 'Kat Lightfoot - Contact'
    };
  },

  async asyncData({
    $prismic,
    error
  }) {
    try {
      const document = (await $prismic.api.getSingle('contact')).data;
      return {
        document
      };
    } catch (e) {
      error({
        statusCode: 404,
        message: "Page not found"
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/contact.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_contactvue_type_script_lang_js_ = (contactvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/contact.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_contactvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "138be72c"
  
)

/* harmony default export */ var contact = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=contact.js.map