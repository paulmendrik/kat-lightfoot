export default async function (ctx, inject) {
  const icons = {"64x64":"/_nuxt/icons/icon_64x64.57dfb8.png","120x120":"/_nuxt/icons/icon_120x120.57dfb8.png","144x144":"/_nuxt/icons/icon_144x144.57dfb8.png","152x152":"/_nuxt/icons/icon_152x152.57dfb8.png","192x192":"/_nuxt/icons/icon_192x192.57dfb8.png","384x384":"/_nuxt/icons/icon_384x384.57dfb8.png","512x512":"/_nuxt/icons/icon_512x512.57dfb8.png","ipad_1536x2048":"/_nuxt/icons/splash_ipad_1536x2048.57dfb8.png","ipadpro9_1536x2048":"/_nuxt/icons/splash_ipadpro9_1536x2048.57dfb8.png","ipadpro10_1668x2224":"/_nuxt/icons/splash_ipadpro10_1668x2224.57dfb8.png","ipadpro12_2048x2732":"/_nuxt/icons/splash_ipadpro12_2048x2732.57dfb8.png","iphonese_640x1136":"/_nuxt/icons/splash_iphonese_640x1136.57dfb8.png","iphone6_50x1334":"/_nuxt/icons/splash_iphone6_50x1334.57dfb8.png","iphoneplus_1080x1920":"/_nuxt/icons/splash_iphoneplus_1080x1920.57dfb8.png","iphonex_1125x2436":"/_nuxt/icons/splash_iphonex_1125x2436.57dfb8.png","iphonexr_828x1792":"/_nuxt/icons/splash_iphonexr_828x1792.57dfb8.png","iphonexsmax_1242x2688":"/_nuxt/icons/splash_iphonexsmax_1242x2688.57dfb8.png"}
  const getIcon = size => icons[size + 'x' + size] || ''
  inject('icon', getIcon)
}
