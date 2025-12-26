export default defineNuxtConfig({
  compatibilityDate: "2025-12-26",
  modules: ["@nuxtjs/tailwindcss"],
  ssr: false, // Menghindari masalah hydration saat dev
  app: {
    baseURL: "/agri-dashboard/", // Sesuaikan dengan nama repository GitHub
    buildAssetsDir: "assets",
  },

  experimental: {
    payloadExtraction: false,
  },

  compatibilityDate: "2024-04-09",
});
