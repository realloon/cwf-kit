import '@/assets/styles/main.css'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: setupLayouts(routes),
})

const app = createApp(App)
app.use(router)

app.mount('#app')
