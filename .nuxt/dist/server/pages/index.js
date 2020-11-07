exports.ids = [7];
exports.modules = {

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=236993c8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',_vm._l((_vm.slices),function(slice,index){return _vm._ssrNode("<div>","</div>",[(slice.slice_type === 'slider' )?[_c('carousel',{attrs:{"slice":slice}})]:_vm._e()],2)}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=236993c8&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Carousel.vue?vue&type=template&id=2c8cff34&
var Carouselvue_type_template_id_2c8cff34_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"hero section uk-height-large is-paddingless"},[_c('b-carousel',{staticClass:"hero-body is-paddingless"},_vm._l((_vm.slice.items),function(item,i){return _c('b-carousel-item',{key:i,staticClass:"is-paddingless"},[_c('img',{attrs:{"src":item.image.clipped.url}})])}),1)],1)}
var Carouselvue_type_template_id_2c8cff34_staticRenderFns = []


// CONCATENATED MODULE: ./components/Carousel.vue?vue&type=template&id=2c8cff34&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Carousel.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Carouselvue_type_script_lang_js_ = ({
  props: ['slice'],
  name: 'carousel'
});
// CONCATENATED MODULE: ./components/Carousel.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Carouselvue_type_script_lang_js_ = (Carouselvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Carousel.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Carouselvue_type_script_lang_js_,
  Carouselvue_type_template_id_2c8cff34_render,
  Carouselvue_type_template_id_2c8cff34_staticRenderFns,
  false,
  null,
  null,
  "ba71ed20"
  
)

/* harmony default export */ var Carousel = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
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

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "Slider",
  transition: "page",
  props: ['slice'],
  components: {
    Carousel: Carousel
  },

  head() {
    return {
      title: 'Kat Lightfoot - Paintings and Prints'
    };
  },

  data() {
    return {
      slices: []
    };
  },

  async asyncData({
    $prismic,
    error
  }) {
    try {
      const document = (await $prismic.api.getSingle('home')).data;
      return {
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
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var pages_component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "1eefcfde"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map