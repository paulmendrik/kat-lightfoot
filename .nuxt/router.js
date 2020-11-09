import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _36dc2082 = () => interopDefault(import('./prismic/pages/preview.vue' /* webpackChunkName: "" */))
const _2dbd1e59 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _e30c8888 = () => interopDefault(import('../pages/canvas.vue' /* webpackChunkName: "pages/canvas" */))
const _95287f28 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _1a6d74d0 = () => interopDefault(import('../pages/exhibitions.vue' /* webpackChunkName: "pages/exhibitions" */))
const _32e02a9e = () => interopDefault(import('../pages/gallery.vue' /* webpackChunkName: "pages/gallery" */))
const _ffb458e2 = () => interopDefault(import('../pages/giclee.vue' /* webpackChunkName: "pages/giclee" */))
const _0b175352 = () => interopDefault(import('../pages/press/index.vue' /* webpackChunkName: "pages/press/index" */))
const _a374f07e = () => interopDefault(import('../pages/press/_uid.vue' /* webpackChunkName: "pages/press/_uid" */))
const _4d74f91e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _36dc2082,
    name: "prismic-preview"
  }, {
    path: "/about",
    component: _2dbd1e59,
    name: "about"
  }, {
    path: "/canvas",
    component: _e30c8888,
    name: "canvas"
  }, {
    path: "/contact",
    component: _95287f28,
    name: "contact"
  }, {
    path: "/exhibitions",
    component: _1a6d74d0,
    name: "exhibitions"
  }, {
    path: "/gallery",
    component: _32e02a9e,
    name: "gallery"
  }, {
    path: "/giclee",
    component: _ffb458e2,
    name: "giclee"
  }, {
    path: "/press",
    component: _0b175352,
    name: "press"
  }, {
    path: "/press/:uid",
    component: _a374f07e,
    name: "press-uid"
  }, {
    path: "/",
    component: _4d74f91e,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
