export default defineNuxtConfig({
  compatibilityDate: "2025-12-26",
  modules: ["@nuxtjs/tailwindcss"],
  ssr: false, // Menghindari masalah hydration saat dev
  target: "static", // Memberitahu Nuxt untuk mode statis
  app: {
    baseURL: "/agri-dashboard/", // Sesuaikan dengan nama repository GitHub
  },
  experimental: {
    payloadExtraction: false,
  },
});
