// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    viewTransition: true,
    defaults: {
      nuxtLink: {
        prefetchOn: {
          interaction: true,
          visibility: false,
        },
      },
    },
  },
  devtools: { enabled: true },
  modules: ['@nuxt/icon', '@nuxt/fonts', '@nuxtjs/tailwindcss', 'nuxt-vuefire'],
  vuefire: {
    auth: true,
    config: {
      apiKey: 'AIzaSyAqAMxJxgkETj4KSJmbctoCIhE6Kw927Ag',
      authDomain: 'demoproject-10027.firebaseapp.com',
      projectId: 'demoproject-10027',
      appId: '1:660694173450:web:d6d0a3f545a0310bbe9cf3',
    },
  },
  tailwindcss: {
    exposeConfig: true,
  },
});
