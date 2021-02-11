exports.ids = [2];
exports.modules = {

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Grid.vue?vue&type=template&id=06ab7c2a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:" columns is-multiline is-gapless",attrs:{"uk-grid":"masonry: true"}},_vm._l((_vm.slice.items),function(item,i){return _vm._ssrNode("<div class=\"gallery column is-4\">","</div>",[_vm._ssrNode("<a"+(_vm._ssrAttr("href",item.large.url || item.image.url))+" data-fancybox=\"gallery\">","</a>",[_vm._ssrNode("<div class=\"image is-1by1 image-wrap\""+(_vm._ssrStyle(null,{ 'background-image': 'url( '+ item.image.url + ')' }, null))+"></div> "),_vm._ssrNode("<ul>","</ul>",[_vm._ssrNode("<li class=\"caption\">","</li>",[_c('prismic-rich-text',{attrs:{"field":item.caption}})],1)])],2)])}),0)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Grid.vue?vue&type=template&id=06ab7c2a&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Grid.vue?vue&type=script&lang=js&
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
/* harmony default export */ var Gridvue_type_script_lang_js_ = ({
  props: ['slice'],
  name: 'grid'
});
// CONCATENATED MODULE: ./components/Grid.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Gridvue_type_script_lang_js_ = (Gridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Grid.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Gridvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "67362136"
  
)

/* harmony default export */ var Grid = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/canvas.vue?vue&type=template&id=0419b0d8&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"columns is-centered"},[_vm._ssrNode("<div class=\"column main\">","</div>",_vm._l((_vm.slices),function(slice,index){return _vm._ssrNode("<div>","</div>",[(slice.slice_type === 'gallery' )?[_vm._ssrNode("<h1 class=\"title\">Canvas Prints</h1> <h2 class=\"subtitle\">The canvas prints are all hand finished and signed in oil </h2> "),_c('grid',{attrs:{"slice":slice}})]:_vm._e()],2)}),0)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/canvas.vue?vue&type=template&id=0419b0d8&

// EXTERNAL MODULE: ./components/Grid.vue + 4 modules
var Grid = __webpack_require__(35);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/canvas.vue?vue&type=script&lang=js&
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

/* harmony default export */ var canvasvue_type_script_lang_js_ = ({
  name: "Canvas Prints",
  transition: "page",
  components: {
    Grid: Grid["a" /* default */]
  },

  head() {
    return {
      title: 'Kat Lightfoot - Canvas Prints'
    };
  },

  data() {
    return {
      slices: []
    };
  },

  mounted() {
    $('[data-fancybox="gallery"]').fancybox({
      caption: function (instance, item) {
        return $(this).find('ul').html();
      }
    });
  },

  async asyncData({
    $prismic,
    error
  }) {
    try {
      const document = (await $prismic.api.getSingle('canvas')).data;
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
// CONCATENATED MODULE: ./pages/canvas.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_canvasvue_type_script_lang_js_ = (canvasvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/canvas.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_canvasvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "7ad7d7c8"
  
)

/* harmony default export */ var canvas = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=canvas.js.map