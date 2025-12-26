<template>
  <div class="min-h-screen bg-gray-50 p-8">
    <header class="mb-8">
      <h1 class="text-3xl font-bold text-green-800">AgriDashboard v1.0</h1>
      <p class="text-gray-600">Monitoring Distribusi Produk Unggulan</p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div v-for="item in stats" :key="item.label" class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
        <p class="text-sm text-gray-500 uppercase">{{ item.label }}</p>
        <p class="text-2xl font-bold text-gray-800">{{ item.value }}</p>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm overflow-hidden">
      <table class="w-full text-left">
        <thead class="bg-green-600 text-white">
          <tr>
            <th class="p-4">Produk</th>
            <th class="p-4">Kategori</th>
            <th class="p-4">Stok</th>
            <th class="p-4">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="p in products" :key="p.id" class="border-b hover:bg-gray-50">
            <td class="p-4 font-medium">{{ p.produk }}</td>
            <td class="p-4">{{ p.kategori }}</td>
            <td class="p-4">{{ p.stok }}</td>
            <td class="p-4">
              <span :class="p.status === 'Tersedia' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'" class="px-3 py-1 rounded-full text-xs">
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
const { data: products } = await useFetch("/api/products");

const stats = [
  { label: "Total Pertanian", value: "1.200 Ton" },
  { label: "Total Peternakan", value: "450 Ekor" },
  { label: "Total Akuakultur", value: "5.000 Kg" },
  { label: "Pending Order", value: "12" },
];
</script>
