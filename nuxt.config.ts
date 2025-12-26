export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  ssr: false, // Penting untuk GitHub Pages
  app: {
    baseURL: "/agri-Dashboard/", // Sesuaikan dengan nama repository GitHub
  },
});
