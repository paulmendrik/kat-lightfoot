<template>
<div class="columns is-centered">
<div class="column main">
<div class="title"><h1>Press</h1></div>

<div class="columns press">
<div class="column is-two-fifths">
<figure class="image">
  <img src="@/assets/img/kat.svg" />
</figure>
</div>
<div class="column is-three-fifths">
<prismic-rich-text :field="document.title" class="article-title"/>
<prismic-rich-text :field="document.publication" class="publication"/>
<prismic-rich-text :field="document.intro" />
<prismic-rich-text :field="document.main" />
<a  class="button" @click="$router.go(-1)">Back</a>
</div>
</div>

</div>
</div>
</template>

<script>

export default {
  name: "Article",
  head() {
    return {
      title: "Kat Lightfoot Press Articles"
    };
  },
  async asyncData({ $prismic, params, error }) {
    try {
      const article = (await $prismic.api.getByUID('press', params.uid)).data

      return {
        document: article
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
