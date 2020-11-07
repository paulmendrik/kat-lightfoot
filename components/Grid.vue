<template>
<div class=" columns is-multiline is-gapless" uk-grid="masonry: true">
<div  v-for="(item, i) in slice.items" :key="i" class="gallery column is-4">
<a  :href="item.large.url || item.image.url" data-fancybox="gallery" >
<div class="image is-1by1 image-wrap" :style="{ 'background-image': 'url( '+ item.image.url + ')' }"></div>
<ul>
<li class="caption"><prismic-rich-text :field="item.caption" /></li>
</ul>
</a>
</div>
</div>
</template>


<script>
export default {
  props: ['slice'],
  name: 'grid'
}
</script>
