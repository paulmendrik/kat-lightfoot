<template>
<div>
<div v-for="(slice, index) in slices" :key="'slice-' + index">
<template v-if="slice.slice_type === 'slider' ">
<carousel :slice="slice"/>
</template>
</div>
</div>
</template>


<script>
import Carousel from "~/components/Carousel.vue";

export default {
  name: "Slider",
  transition: "page",
  props: ['slice' ],
  components: {
   Carousel
  },
  head () {
    return {
      title: 'Kat Lightfoot - Paintings and Prints',
    }
  },
  data () {
    return {
      slices: []
    }
  },
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getSingle('home')).data

      return {
        slices: document.body
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
