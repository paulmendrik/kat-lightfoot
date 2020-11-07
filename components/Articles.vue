<template>
<div class="press">
<prismic-rich-text :field="article.data.title" class="article-title"/>
<prismic-rich-text :field="article.data.publication" class="publication"/>
<prismic-rich-text :field="article.data.intro" class="content"/>
<nuxt-link class="button" :to="link" prefetch>Read More</nuxt-link>
</div>
</template>

<script>
  import LinkResolver from "~/plugins/link-resolver.js";

  export default {
    props: ["article"],
    name: "Articles",
    data: function() {
      return {
        link: ''
      };
    },
    created() {
      this.link = LinkResolver(this.article)
    }
  };
</script>
