import vuetify from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      titleTemplate: '%s - Khotanese Project',
      title: 'Corpus',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },

  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css'
  ],

  build: {
    transpile: ['vuetify']
  },

  vite: {
    plugins: [
      vuetify({ autoImport: true })
    ]
  },

  compatibilityDate: '2025-01-01'
})
