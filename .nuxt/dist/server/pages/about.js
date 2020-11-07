exports.ids = [1];
exports.modules = {

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=template&id=36e6aea0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"columns is-centered"},[_vm._ssrNode("<div class=\"column main\">","</div>",[_c('prismic-rich-text',{staticClass:"title",attrs:{"field":_vm.document.title}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"columns\">","</div>",[_vm._ssrNode("<div class=\"column is-full\">","</div>",[_vm._ssrNode("<figure class=\"image is-one-third is-pulled-left about\">","</figure>",[_c('prismic-image',{attrs:{"field":_vm.document.image}})],1),_vm._ssrNode(" "),_c('prismic-rich-text',{staticClass:"about",attrs:{"field":_vm.document.content}})],2)])],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/about.vue?vue&type=template&id=36e6aea0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/about.vue?vue&type=script&lang=js&
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
/* harmony default export */ var aboutvue_type_script_lang_js_ = ({
  name: "About",
  transition: "page",

  head() {
    return {
      title: 'Kat Lightfoot - About'
    };
  },

  async asyncData({
    $prismic,
    error
  }) {
    try {
      const document = (await $prismic.api.getSingle('about')).data;
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
// CONCATENATED MODULE: ./pages/about.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_aboutvue_type_script_lang_js_ = (aboutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/about.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_aboutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "019015ce"
  
)

/* harmony default export */ var about = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=about.js.map