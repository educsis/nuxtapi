// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  css: ["@picocss/pico"],
  modules: [
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    families: {
      Roboto: [400, 700],   // weights
      "Open+Sans": true,    // default weights
    },
    display: 'swap'
  }
  devtools: { enabled: true }
})
