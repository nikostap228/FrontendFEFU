// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    ["@nuxtjs/google-fonts", {
      families: {
        'Open Sans': [400, 700],
        'Montserrat': true,
      }
    }],
    "nuxt-swiper",
    'reka-ui/nuxt',
    'vue-yandex-maps/nuxt',
  ],
  css: ['~/assets/css/dialog.css', '~/assets/css/main.css', , '~/assets/css/pagination.css'],
  yandexMaps: {
    apikey: 'cf4b9da0-b9b5-4e86-b783-ab47290b9a86', // ← ВАЖНО!
    lang: 'ru_RU'
  }
})
