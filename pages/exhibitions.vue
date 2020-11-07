<template>
<div class="columns is-centered">
<div class="column main">
<prismic-rich-text :field="document.title" class="title"/>

<div class="columns">
<div class="column is-two-fifths exhibitions">
<figure class="image">
<prismic-image  :field="document.image" />
</figure>
</div>
<div class="column is-three-fifths">
<prismic-rich-text :field="document.intro" class="exhibitions"/>
</div>
</div>


<div class="columns exhibitions">
<div v-for="(slice, index) in slices" :key="'slice-' + index" class="column is-two-fifths" >
<h4>The Great Barn</h4>
<b-carousel>
<template v-if="slice.slice_type === 'slider' " >
<b-carousel-item v-for="(item, i) in slice.items" :key="i" >
<prismic-image  :field="item.slider_image" class="slider is-1by1"/>
</b-carousel-item>
</template>
</b-carousel>
</div>
<div class="column is-three-fifths">
<prismic-rich-text :field="document.exhibitions" class="content"/>
</div>
</div>





</div>
</div>
</template>


<script>

export default {
  name: "Exhibitions",
  transition: "page",
  head () {
    return {
      title: 'Kat Lightfoot - Exhibitions',
    }
  },
  data () {
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
    }
  },
  async asyncData({ $prismic, error }) {
    try {

      const document = (await $prismic.api.getSingle('exhibitions')).data

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
