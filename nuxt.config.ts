// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  srcDir: 'src/',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: '',
  },
})
