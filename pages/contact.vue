<template>
<div class="columns is-centered">
<div class="column main">
<prismic-rich-text :field="document.title" class="title"/>

<div class="columns">
<div class="column is-two-fifths contact">
<figure class="image">
<prismic-image  :field="document.image" />
</figure>
</div>
<div class="column is-three-fifths">
<prismic-rich-text :field="document.content" class="contact"/>
</div>
</div>

</div>
</div>
</template>

<script>



export default {
  name: "Contact",
  transition: "page",
  head () {
    return {
      title: 'Kat Lightfoot - Contact',
    }
  },
  async asyncData({ $prismic, error }) {
  try {

    const document = (await $prismic.api.getSingle('contact')).data

    return {
      document
    };
  } catch (e) {
    error({ statusCode: 404, message: "Page not found" });
  }
}
}
</script>
