export default {
  target: 'server',
  head: {
    title: "Kat Lightfoot",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Kat Lightfoot Paintings"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css" },
      { rel: "stylesheet", href: "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.css" },
      { rel: "stylesheet", href: "https://use.typekit.net/zbx2mkf.css" },
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.3.1.slim.min.js", defer: true },
      { src: "https://cdn.jsdelivr.net/gh/fancyapps/fancybox@3.5.7/dist/jquery.fancybox.min.js", defer: true }
    ],
  },
  loading: { color: "#fff" },
  css: ["~/assets/css/app.css"],
  plugins: [{src: "@/plugins/aos.js", ssr: false }],
  modules: ["nuxt-buefy", "nuxt-vuikit","@nuxtjs/svg", "@nuxtjs/pwa", "@/modules/static", "@/modules/crawler", "@nuxtjs/prismic"],
  prismic : {
    endpoint: 'https://lightfoot.cdn.prismic.io/api/v2',
    linkResolver: '@/plugins/link-resolver',
    htmlSerializer: '@/plugins/html-serializer',
  },
  build: {
    extend(config, ctx) {}
}
};
