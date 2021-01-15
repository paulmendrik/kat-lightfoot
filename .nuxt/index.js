import Vue from 'vue'

import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from './components/nuxt-error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'

/* Plugins */

import nuxt_plugin_NuxtVuikit_3a392ce0 from 'nuxt_plugin_NuxtVuikit_3a392ce0' // Source: ./Nuxt-Vuikit.js (mode: 'all')
import nuxt_plugin_prismic_2946f77e from 'nuxt_plugin_prismic_2946f77e' // Source: ./prismic/plugins/prismic.js (mode: 'all')
import nuxt_plugin_prismiccomponents_2860bfa6 from 'nuxt_plugin_prismiccomponents_2860bfa6' // Source: ./prismic/plugins/prismic-components.js (mode: 'all')
import nuxt_plugin_prismicpreview_b1cac846 from 'nuxt_plugin_prismicpreview_b1cac846' // Source: ./prismic/middleware/prismic_preview.js (mode: 'all')
import nuxt_plugin_staticplugin6e6364ac_6e4e0551 from 'nuxt_plugin_staticplugin6e6364ac_6e4e0551' // Source: ./static.plugin.6e6364ac.js (mode: 'all')
import nuxt_plugin_workbox_cd719848 from 'nuxt_plugin_workbox_cd719848' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_meta_230a0e9e from 'nuxt_plugin_meta_230a0e9e' // Source: ./pwa/meta.js (mode: 'all')
import nuxt_plugin_icons_2d340d51 from 'nuxt_plugin_icons_2d340d51' // Source: ./pwa/icons.js (mode: 'all')
import nuxt_plugin_buefy_61766e11 from 'nuxt_plugin_buefy_61766e11' // Source: ./buefy.js (mode: 'all')
import nuxt_plugin_aos_2279b4c6 from 'nuxt_plugin_aos_2279b4c6' // Source: ../plugins/aos.js (mode: 'client')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":false,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext)

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"title":"Kat Lightfoot","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Kat Lightfoot Paintings"},{"hid":"charset","charset":"utf-8"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"gallery"},{"hid":"author","name":"author","content":"imwd"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"gallery"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"gallery"},{"hid":"og:description","name":"og:description","property":"og:description","content":"kat lightfoot gallery"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fanimate.css\u002F3.7.2\u002Fanimate.min.css"},{"rel":"stylesheet","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Ffancyapps\u002Ffancybox@3.5.7\u002Fdist\u002Fjquery.fancybox.min.css"},{"rel":"stylesheet","href":"https:\u002F\u002Fuse.typekit.net\u002Fzbx2mkf.css"},{"rel":"stylesheet","type":"text\u002Fcss","href":"\u002F\u002Fcdn.materialdesignicons.com\u002F5.0.45\u002Fcss\u002Fmaterialdesignicons.min.css"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64x64.57dfb8.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512x512.57dfb8.png","sizes":"512x512"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.ef7a4029.json","hid":"manifest"}],"script":[{"src":"https:\u002F\u002Fcode.jquery.com\u002Fjquery-3.3.1.slim.min.js","defer":true},{"src":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fgh\u002Ffancyapps\u002Ffancybox@3.5.7\u002Fdist\u002Fjquery.fancybox.min.js","defer":true}],"style":[],"htmlAttrs":{"lang":"en"}},

    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_NuxtVuikit_3a392ce0 === 'function') {
    await nuxt_plugin_NuxtVuikit_3a392ce0(app.context, inject)
  }

  if (typeof nuxt_plugin_prismic_2946f77e === 'function') {
    await nuxt_plugin_prismic_2946f77e(app.context, inject)
  }

  if (typeof nuxt_plugin_prismiccomponents_2860bfa6 === 'function') {
    await nuxt_plugin_prismiccomponents_2860bfa6(app.context, inject)
  }

  if (typeof nuxt_plugin_prismicpreview_b1cac846 === 'function') {
    await nuxt_plugin_prismicpreview_b1cac846(app.context, inject)
  }

  if (typeof nuxt_plugin_staticplugin6e6364ac_6e4e0551 === 'function') {
    await nuxt_plugin_staticplugin6e6364ac_6e4e0551(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_cd719848 === 'function') {
    await nuxt_plugin_workbox_cd719848(app.context, inject)
  }

  if (typeof nuxt_plugin_meta_230a0e9e === 'function') {
    await nuxt_plugin_meta_230a0e9e(app.context, inject)
  }

  if (typeof nuxt_plugin_icons_2d340d51 === 'function') {
    await nuxt_plugin_icons_2d340d51(app.context, inject)
  }

  if (typeof nuxt_plugin_buefy_61766e11 === 'function') {
    await nuxt_plugin_buefy_61766e11(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_aos_2279b4c6 === 'function') {
    await nuxt_plugin_aos_2279b4c6(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    app,
    router
  }
}

export { createApp, NuxtError }
