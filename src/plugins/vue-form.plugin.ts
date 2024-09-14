import { type App } from 'vue'
import Vueform from '@vueform/vueform'

import en from '@vueform/vueform/locales/en'
import tailwind from '@vueform/vueform/dist/tailwind'
import { defineConfig } from '@vueform/vueform'

const vueformConfig = defineConfig({
  theme: tailwind,
  locales: { en },
  locale: 'en'
})

export function initialVueForm(app: App) {
  app.use(Vueform, vueformConfig)
}
