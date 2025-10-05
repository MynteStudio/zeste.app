/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import '../css/reset.css'
import 'virtual:uno.css'
import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { createInertiaApp } from '@inertiajs/vue3'
import { useCookies } from '@vueuse/integrations/useCookies'
import { createSSRApp, h } from 'vue'
import { i18n } from './i18n'
import type { DefineComponent } from 'vue'

createInertiaApp({
  progress: { color: '#000' },

  title: (title) => `${title} - Zeste`,

  resolve: (name) => {
    return resolvePageComponent(
      `../pages/${name}.vue`,
      import.meta.glob<DefineComponent>('../pages/**/*.vue'),
    )
  },

  setup({ el, App, props, plugin }) {
    createSSRApp({ render: () => h(App, props) })
      .use(plugin)
      .use(i18n)
      .mount(el)
    const cookie = useCookies(['locale'])
    i18n.global.locale.value = cookie.get('locale')
  },
})
