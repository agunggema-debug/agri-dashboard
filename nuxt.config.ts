// nuxt.config.ts
export default defineNuxtConfig({
  ssr: false, // Penting agar aplikasi berjalan sebagai SPA di GitHub Pages

  modules: ["@nuxtjs/tailwindcss"],

  app: {
    // Pastikan '/' di awal dan di akhir. Sesuaikan dengan nama repo Anda.
    baseURL: "/agri-dashboard/",
    buildAssetsDir: "assets", // Mengubah '_nuxt' menjadi 'assets' agar tidak diblokir GitHub
  },

  experimental: {
    // Mematikan payload extraction mencegah Nuxt mencari file _payload.json
    payloadExtraction: false,
  },

  // Memastikan router menggunakan mode hash atau jalur yang sesuai dengan baseURL
  router: {
    options: {
      hashMode: false,
    },
  },

  compatibilityDate: "2024-04-03",
});
