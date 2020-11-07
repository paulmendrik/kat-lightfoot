<template>
<div class="columns is-centered">
<div class="column main">
<div class="title"><h1>Press</h1></div>
<div class="columns">
<div class="column is-two-fifths">
<figure class="image press">
<img src="@/assets/img/kat.svg" />

</figure>
</div>
<div class="column is-three-fifths press">
<div v-for="article in articles" :key="article.id" v-bind:article="article.title" >
<Articles :article="article" ></Articles>
</div>
</div>
</div>

</div>
</div>
</template>

<script>

import Articles from "~/components/Articles.vue"



export default {
  name: "Press",
  transition: "page",
  components: {
    Articles
  },
  head () {
    return {
      title: 'Kat Lightfoot - Press',
    }
  },
  async asyncData({ $prismic, error }) {
  try {
    const pressArticles = await $prismic.api.query(
      $prismic.predicates.at("document.type", "press"),
      { orderings : '[my.post.date desc]' }
    )

    return {
      articles: pressArticles.results,
    };
  } catch (e) {
    error({ statusCode: 404, message: "Page not found" });
  }
}
}
</script>
