# 🌾 AgriDashboard v1.0 https://agunggema-debug.github.io/agri-dashboard/

> **Platform Monitoring Distribusi & Pemasaran Produk Unggulan Agrikultur**

AgriDashboard adalah solusi berbasis web modern untuk memantau inventaris dan distribusi produk di sektor **Pertanian**, **Peternakan**, **Akuakultur**, dan **Perawatan Hewan**. Dibangun dengan teknologi mutakhir untuk performa tinggi dan tampilan yang elegan.

## ✨ Fitur Utama

- **Visualisasi Data Intuitif**: Grafik batang interaktif menggunakan Chart.js untuk memantau volume stok.
- **Manajemen Produk**: Tabel distribusi yang bersih dengan label status berbasis warna.
- **Desain Responsif**: Tampilan yang menyesuaikan sempurna mulai dari layar ponsel hingga desktop.
- **Otomatisasi Deployment**: Terintegrasi dengan GitHub Actions untuk publikasi instan ke GitHub Pages.

## 🚀 Teknologi yang Digunakan

| Teknologi          | Kegunaan                              |
| :----------------- | :------------------------------------ |
| **Nuxt.js 3**      | Framework utama (Vue.js)              |
| **Tailwind CSS**   | Styling UI yang modern dan elegan     |
| **Chart.js**       | Library visualisasi grafik data       |
| **Node.js**        | Runtime environment untuk development |
| **GitHub Actions** | CI/CD untuk deployment otomatis       |

## 🛠️ Instalasi Lokal

Ikuti langkah-langkah berikut untuk menjalankan proyek di komputer Anda:

1. **Clone Repository**

   ```
   git clone [https://github.com/agunggema-debug/agri-Dashboard.git]
   cd agri-Dashboard

   ```

2. **Instal Dependensi**

   ```
   npm install
   ```

3. **Jalankan Server Development**
   ```
   npm run dev
   ```

📦 Build & Deployment
Proyek ini dikonfigurasi menggunakan Static Site Generation (SSG) untuk di-host di GitHub Pages.
``       # Untuk menghasilkan folder .output/public (statis)
npx nuxi generate   `
   ``
Deployment dilakukan secara otomatis setiap kali Anda melakukan push ke branch main melalui alur kerja GitHub Actions.

📁 Struktur Folder - components/ - Komponen UI Vue (termasuk grafik).

    - server/api/ - Simulasi data produk (Mock API).

    - .github/workflows/ - Konfigurasi otomatisasi deployment.

    - app.vue - Halaman utama dashboard.

Dibuat dengan ❤️ oleh Agung Gema
