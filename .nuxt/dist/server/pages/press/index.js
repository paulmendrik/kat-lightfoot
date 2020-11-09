exports.ids = [9];
exports.modules = {

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4f35216ba1b8d639fcfff0401bc77289.svg";

/***/ }),

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/press/index.vue?vue&type=template&id=0c6e50e9&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"columns is-centered"},[_vm._ssrNode("<div class=\"column main\">","</div>",[_vm._ssrNode("<div class=\"title\"><h1>Press</h1></div> "),_vm._ssrNode("<div class=\"columns\">","</div>",[_vm._ssrNode("<div class=\"column is-two-fifths\"><figure class=\"image press\"><img"+(_vm._ssrAttr("src",__webpack_require__(35)))+"></figure></div> "),_vm._ssrNode("<div class=\"column is-three-fifths press\">","</div>",_vm._l((_vm.articles),function(article){return _vm._ssrNode("<div"+(_vm._ssrAttr("article",article.title))+">","</div>",[_c('Articles',{attrs:{"article":article}})],1)}),0)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/press/index.vue?vue&type=template&id=0c6e50e9&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Articles.vue?vue&type=template&id=f411d22a&
var Articlesvue_type_template_id_f411d22a_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"press"},[_c('prismic-rich-text',{staticClass:"article-title",attrs:{"field":_vm.article.data.title}}),_vm._ssrNode(" "),_c('prismic-rich-text',{staticClass:"publication",attrs:{"field":_vm.article.data.publication}}),_vm._ssrNode(" "),_c('prismic-rich-text',{staticClass:"content",attrs:{"field":_vm.article.data.intro}}),_vm._ssrNode(" "),_c('nuxt-link',{staticClass:"button",attrs:{"to":_vm.link,"prefetch":""}},[_vm._v("Read More")])],2)}
var Articlesvue_type_template_id_f411d22a_staticRenderFns = []


// CONCATENATED MODULE: ./components/Articles.vue?vue&type=template&id=f411d22a&

// EXTERNAL MODULE: ./plugins/link-resolver.js
var link_resolver = __webpack_require__(5);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Articles.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Articlesvue_type_script_lang_js_ = ({
  props: ["article"],
  name: "Articles",
  data: function () {
    return {
      link: ''
    };
  },

  created() {
    this.link = Object(link_resolver["a" /* default */])(this.article);
  }

});
// CONCATENATED MODULE: ./components/Articles.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Articlesvue_type_script_lang_js_ = (Articlesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Articles.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Articlesvue_type_script_lang_js_,
  Articlesvue_type_template_id_f411d22a_render,
  Articlesvue_type_template_id_f411d22a_staticRenderFns,
  false,
  null,
  null,
  "3cb928ad"
  
)

/* harmony default export */ var Articles = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/press/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var pressvue_type_script_lang_js_ = ({
  name: "Press",
  transition: "page",
  components: {
    Articles: Articles
  },

  head() {
    return {
      title: 'Kat Lightfoot - Press'
    };
  },

  async asyncData({
    $prismic,
    error
  }) {
    try {
      const pressArticles = await $prismic.api.query($prismic.predicates.at("document.type", "press"), {
        orderings: '[my.post.date desc]'
      });
      return {
        articles: pressArticles.results
      };
    } catch (e) {
      error({
        statusCode: 404,
        message: "Page not found"
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/press/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_pressvue_type_script_lang_js_ = (pressvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/press/index.vue





/* normalize component */

var press_component = Object(componentNormalizer["a" /* default */])(
  pages_pressvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "258536f2"
  
)

/* harmony default export */ var press = __webpack_exports__["default"] = (press_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map