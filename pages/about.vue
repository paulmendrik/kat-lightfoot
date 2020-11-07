<template>
<div class="columns is-centered">
<div class="column main">
<prismic-rich-text :field="document.title" class="title"/>
<div class="columns">
<div class="column is-full">
<figure class="image is-one-third is-pulled-left about">
<prismic-image  :field="document.image" />
</figure>
<prismic-rich-text :field="document.content" class="about"/>
</div>
</div>
</div>
</div>

</template>

<script>


export default {
  name: "About",
  transition: "page",
  head () {
    return {
      title: 'Kat Lightfoot - About',
    }
  },
  async asyncData({ $prismic, error }) {
    try {
      const document = (await $prismic.api.getSingle('about')).data

    return {
      document
    };
  } catch (e) {
    error({ statusCode: 404, message: "Page not found" });
  }
}
}
</script>
