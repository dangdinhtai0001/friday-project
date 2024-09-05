import { type App } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'

export function initialVueQuery(app: App) {
  app.use(VueQueryPlugin)
}
