import '@/assets/styles/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'

import App from './App.vue'
import router from './router'

// load
import { loadSvg, initialVueQuery, initialLottie } from '@/plugins'

const app = createApp(App)

loadSvg(app)
initialVueQuery(app)
initialLottie(app)

app.use(createPinia())
app.use(router)
app.use(MotionPlugin)

app.mount('#app')
