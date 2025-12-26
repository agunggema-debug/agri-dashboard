export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  ssr: false, // Penting untuk GitHub Pages
  app: {
    baseURL: "https://github.com/agunggema-debug/agri-dashboard.git", // Sesuaikan dengan nama repository GitHub
  },
});
