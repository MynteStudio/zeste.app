import path from 'node:path'
import { getDirname } from '@adonisjs/core/helpers'
import Inertia from '@adonisjs/inertia/client'
import Adonisjs from '@adonisjs/vite/client'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    Inertia({ ssr: { enabled: true, entrypoint: 'inertia/app/ssr.ts' } }),
    Vue(),
    VueI18nPlugin({
      include: path.resolve(__dirname, 'inertia/locales/**'),
    }),
    Adonisjs({ entrypoints: ['inertia/app/app.ts'], reload: ['resources/views/**/*.edge'] }),
    UnoCSS(),
  ],

  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      '~/': `${getDirname(import.meta.url)}/inertia/`,
    },
  },
})
