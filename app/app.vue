<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <header class="mb-8 flex justify-between items-end">
      <div>
        <h1 class="text-3xl font-bold text-green-800">AgriDashboard v1.0</h1>
        <p class="text-gray-600">Monitoring Distribusi & Pemasaran Produk</p>
      </div>
      <div class="text-sm text-gray-400 font-mono">Status: Live Data</div>
    </header>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
      <div class="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <h3 class="text-lg font-semibold mb-4 text-gray-700">Volume Stok per Kategori</h3>
        <BarChart :chartData="dataGrafik" />
      </div>

      <div class="space-y-4">
        <div v-for="item in stats" :key="item.label" class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100">
          <p class="text-xs font-bold text-green-600 uppercase tracking-wider">{{ item.label }}</p>
          <p class="text-2xl font-bold text-gray-800">{{ item.value }}</p>
        </div>
      </div>
    </div>

    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div class="p-6 border-b border-gray-50">
        <h3 class="text-lg font-semibold text-gray-700">Detail Distribusi Produk</h3>
      </div>
      <table class="w-full text-left">
        <thead class="bg-gray-50 text-gray-500 text-sm uppercase">
          <tr>
            <th class="p-4 font-medium">Nama Produk</th>
            <th class="p-4 font-medium">Kategori</th>
            <th class="p-4 font-medium">Stok</th>
            <th class="p-4 font-medium">Status</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-50">
          <tr v-for="p in products" :key="p.id" class="hover:bg-green-50/50 transition-colors">
            <td class="p-4 font-semibold text-gray-700">{{ p.produk }}</td>
            <td class="p-4 text-gray-600">{{ p.kategori }}</td>
            <td class="p-4 text-gray-600">{{ p.stok }}</td>
            <td class="p-4">
              <span :class="p.status === 'Tersedia' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'" class="px-3 py-1 rounded-lg text-xs font-bold">
                {{ p.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
// Mock Data untuk Grafik
import BarChart from "../components/BarChart.vue";

const dataGrafik = {
  labels: ["Pertanian", "Peternakan", "Akuakultur", "Perawatan Hewan"],
  datasets: [
    {
      label: "Volume Stok",
      backgroundColor: ["#16a34a", "#22c55e", "#4ade80", "#86efac"],
      data: [1200, 450, 5000, 150],
    },
  ],
};

// Data tabel (mengambil dari server/api/products.ts sebelumnya)
const { data: products } = await useFetch("/api/products");

const stats = [
  { label: "Pertanian", value: "1.200 Ton" },
  { label: "Peternakan", value: "450 Ekor" },
  { label: "Akuakultur", value: "5.000 Kg" },
];
</script>
