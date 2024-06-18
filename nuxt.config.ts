// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  srcDir: 'src/',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content',
  ],
  colorMode: {
    classSuffix: '',
  },
  content: {
    highlight: {
      theme: {
        default: 'min-light',
        dark: 'min-dark',
      },
    },
    markdown: {
      toc: {
        depth: 4,
        searchDepth: 4,
      },
    },
  },
  app: {
    head: {
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.ico',
        },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in',
    },
  },
  nitro: {
    prerender: {
      routes: [
        '/sitemap.xml',
      ],
    },
  },
  runtimeConfig: {
    public: {
      hostname: process.env.HOSTNAME,
    },
  },
})
