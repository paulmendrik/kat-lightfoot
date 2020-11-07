<template>
<section class="hero section uk-height-large is-paddingless">
<b-carousel class="hero-body is-paddingless">
<b-carousel-item  v-for="(item,i) in slice.items" :key="i" class="is-paddingless" >
  <img :src="item.image.clipped.url">
</b-carousel-item>
</b-carousel>
</section>
</template>


<script>
  export default {
    props: ['slice'],
    name: 'carousel'
  }
</script>
