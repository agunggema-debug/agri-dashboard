// nuxt.config.ts
export default defineNuxtConfig({
  ssr: false,

  app: {
    // Pastikan diawali dan diakhiri dengan slash
    baseURL: "/agri-dashboard/",
    // Mengubah '_nuxt' menjadi 'assets' karena GitHub Pages
    // terkadang memblokir folder dengan awalan underscore
    buildAssetsDir: "assets",
  },

  experimental: {
    // Ini akan menghentikan pencarian file _payload.json
    payloadExtraction: false,
    // Menghentikan pencarian manifest build yang menyebabkan error 404 pada .json
    renderJsonPayloads: true,
  },

  // Mencegah preloading otomatis yang gagal pada environment GitHub Pages
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },

  modules: ["@nuxtjs/tailwindcss"],
  compatibilityDate: "2024-04-03",
});
