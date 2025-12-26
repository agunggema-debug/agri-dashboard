export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  ssr: false, // Penting untuk GitHub Pages
  app: {
    baseURL: "https://github.com/agunggema-debug/agri-Dashboard.git", // Sesuaikan dengan nama repository GitHub
  },
});
