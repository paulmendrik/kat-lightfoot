<template>
<div class="columns is-centered">
<div class="column main">
<div v-for="(slice, index) in slices" :key="'slice-' + index" >
<template v-if="slice.slice_type === 'gallery' " >
<prismic-rich-text :field="slice.primary.title" class="title"/>
<grid :slice="slice"/>
</template>
</div>
</div>
</div>
</template>

<script>
import Grid from "~/components/Grid.vue";


export default {
  name: "Canvas Prints",
  transition: "page",
  components: {
    Grid
  },
  head () {
    return {
      title: 'Kat Lightfoot - Canvas Prints'
    }
  },
  data() {
    return {
      slices: [],
    };
  },
  mounted() {
    $( '[data-fancybox="gallery"]' ).fancybox({
      caption : function( instance, item ) {
        return $(this).find('ul').html();
      }
    });
  },
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getSingle('canvas')).data

      return {
        document,
        slices: document.body
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
