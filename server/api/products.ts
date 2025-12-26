// server/api/products.ts
export default defineEventHandler(() => {
  return [
    { id: 1, kategori: "Pertanian", produk: "Padi Unggul", stok: 500, status: "Tersedia" },
    { id: 2, kategori: "Peternakan", produk: "Sapi Wagyu", stok: 20, status: "Dikirim" },
    { id: 3, kategori: "Akuakultur", produk: "Ikan Nila", stok: 1000, status: "Tersedia" },
    { id: 4, kategori: "Perawatan Hewan", produk: "Vitamin Kucing", stok: 150, status: "Habis" },
  ];
});
