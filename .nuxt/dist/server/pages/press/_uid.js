exports.ids = [8];
exports.modules = {

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4f35216ba1b8d639fcfff0401bc77289.svg";

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/press/_uid.vue?vue&type=template&id=203cf880&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"columns is-centered"},[_vm._ssrNode("<div class=\"column main\">","</div>",[_vm._ssrNode("<div class=\"title\"><h1>Press</h1></div> "),_vm._ssrNode("<div class=\"columns press\">","</div>",[_vm._ssrNode("<div class=\"column is-two-fifths\"><figure class=\"image\"><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+"></figure></div> "),_vm._ssrNode("<div class=\"column is-three-fifths\">","</div>",[_c('prismic-rich-text',{staticClass:"article-title",attrs:{"field":_vm.document.title}}),_vm._ssrNode(" "),_c('prismic-rich-text',{staticClass:"publication",attrs:{"field":_vm.document.publication}}),_vm._ssrNode(" "),_c('prismic-rich-text',{attrs:{"field":_vm.document.intro}}),_vm._ssrNode(" "),_c('prismic-rich-text',{attrs:{"field":_vm.document.main}}),_vm._ssrNode(" <a class=\"button\">Back</a>")],2)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/press/_uid.vue?vue&type=template&id=203cf880&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/press/_uid.vue?vue&type=script&lang=js&
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
//
//
//
//
/* harmony default export */ var _uidvue_type_script_lang_js_ = ({
  name: "Article",

  head() {
    return {
      title: "Kat Lightfoot Press Articles"
    };
  },

  async asyncData({
    $prismic,
    params,
    error
  }) {
    try {
      const article = (await $prismic.api.getByUID('press', params.uid)).data;
      return {
        document: article
      };
    } catch (e) {
      error({
        statusCode: 404,
        message: "Page not found"
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/press/_uid.vue?vue&type=script&lang=js&
 /* harmony default export */ var press_uidvue_type_script_lang_js_ = (_uidvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/press/_uid.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  press_uidvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "22bcb021"
  
)

/* harmony default export */ var _uid = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_uid.js.map