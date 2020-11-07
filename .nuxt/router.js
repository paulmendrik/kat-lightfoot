import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _253aed82 = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _13c2bdd4 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _5b6edec2 = () => interopDefault(import('../pages/canvas.vue' /* webpackChunkName: "pages/canvas" */))
const _2910f02e = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _4e1f35cd = () => interopDefault(import('../pages/exhibitions.vue' /* webpackChunkName: "pages/exhibitions" */))
const _68ebf21b = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _7816af1c = () => interopDefault(import('../pages/giclee.vue' /* webpackChunkName: "pages/giclee" */))
const _3ec9144f = () => interopDefault(import('../pages/press/index.vue' /* webpackChunkName: "pages/press/index" */))
const _13093324 = () => interopDefault(import('../pages/press/_uid.vue' /* webpackChunkName: "pages/press/_uid" */))
const _15d67bdb = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/preview",
    component: _253aed82,
    name: "prismic-preview"
  }, {
    path: "/about",
    component: _13c2bdd4,
    name: "about"
  }, {
    path: "/canvas",
    component: _5b6edec2,
    name: "canvas"
  }, {
    path: "/contact",
    component: _2910f02e,
    name: "contact"
  }, {
    path: "/exhibitions",
    component: _4e1f35cd,
    name: "exhibitions"
  }, {
    path: "/gallery",
    component: _68ebf21b,
    name: "gallery"
  }, {
    path: "/giclee",
    component: _7816af1c,
    name: "giclee"
  }, {
    path: "/press",
    component: _3ec9144f,
    name: "press"
  }, {
    path: "/press/:uid",
    component: _13093324,
    name: "press-uid"
  }, {
    path: "/",
    component: _15d67bdb,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
