// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  imports: {
    dirs: ['types'],
  },
  modules: ['@nuxt/icon', 'nuxt-shiki'],
  shiki: {
    bundledLangs: ['xml'],
  },
})
