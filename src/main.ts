import '@/assets/styles/main.css'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'
import { createHead } from '@vueuse/head'
import App from './App.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes),
})

const head = createHead()

app.use(router)
app.use(head)

app.mount('#app')
