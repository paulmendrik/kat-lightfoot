exports.ids = [4];
exports.modules = {

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/exhibitions.vue?vue&type=template&id=1e0afd02&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"columns is-centered"},[_vm._ssrNode("<div class=\"column main\">","</div>",[_c('prismic-rich-text',{staticClass:"title",attrs:{"field":_vm.document.title}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"columns\">","</div>",[_vm._ssrNode("<div class=\"column is-two-fifths exhibitions\">","</div>",[_vm._ssrNode("<figure class=\"image\">","</figure>",[_c('prismic-image',{attrs:{"field":_vm.document.image}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column is-three-fifths\">","</div>",[_c('prismic-rich-text',{staticClass:"exhibitions",attrs:{"field":_vm.document.intro}})],1)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"columns exhibitions\">","</div>",[_vm._l((_vm.slices),function(slice,index){return _vm._ssrNode("<div class=\"column is-two-fifths\">","</div>",[_vm._ssrNode("<h4>The Great Barn</h4> "),_c('b-carousel',[(slice.slice_type === 'slider' )?_vm._l((slice.items),function(item,i){return _c('b-carousel-item',{key:i},[_c('prismic-image',{staticClass:"slider is-1by1",attrs:{"field":item.slider_image}})],1)}):_vm._e()],2)],2)}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column is-three-fifths\">","</div>",[_c('prismic-rich-text',{staticClass:"content",attrs:{"field":_vm.document.exhibitions}})],1)],2)],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/exhibitions.vue?vue&type=template&id=1e0afd02&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/exhibitions.vue?vue&type=script&lang=js&
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
/* harmony default export */ var exhibitionsvue_type_script_lang_js_ = ({
  name: "Exhibitions",
  transition: "page",

  head() {
    return {
      title: 'Kat Lightfoot - Exhibitions'
    };
  },

  data() {
    return {
      slices: [],
      carousel: 0,
      animated: 'fade',
      drag: false,
      autoPlay: false,
      arrow: false,
      pauseHover: false,
      pauseInfo: false,
      pauseType: 'is-white',
      interval: 1000
    };
  },

  async asyncData({
    $prismic,
    error
  }) {
    try {
      const document = (await $prismic.api.getSingle('exhibitions')).data;
      return {
        document,
        slices: document.body
      };
    } catch (e) {
      error({
        statusCode: 404,
        message: "Page not found"
      });
    }
  }

});
// CONCATENATED MODULE: ./pages/exhibitions.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_exhibitionsvue_type_script_lang_js_ = (exhibitionsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/exhibitions.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_exhibitionsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "34db5870"
  
)

/* harmony default export */ var exhibitions = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=exhibitions.js.map