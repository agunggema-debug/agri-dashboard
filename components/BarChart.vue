<script setup>
import { Bar } from "vue-chartjs"; // Kita menggunakan komponen 'Bar' dari library
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

// Mendefinisikan props yang diterima dari app.vue
const props = defineProps({
  chartData: {
    type: Object,
    required: true,
  },
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};
</script>

<template>
  <div class="h-64">
    <Bar :data="props.chartData" :options="chartOptions" />
  </div>
</template>
