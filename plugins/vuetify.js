import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: { mdi }
    },
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#1565C0',
            accent: '#424242',
            secondary: '#FF8F00',
            info: '#26A69A',
            warning: '#FFC107',
            error: '#DD2C00',
            success: '#00E676'
          }
        }
      }
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
