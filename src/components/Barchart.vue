<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" :style="myStyles"/>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  computed: {
    myStyles () {
      return {
        height: '100%',
        width: '100%',
        'aspect-ratio': '1/2',
        // position: 'relative'
      }
    }
  },
  data() {
    return {
      chartData: {
        labels: [
          "Ma",
          "Tu",
          "We",
          "Th",
          "Fr",
          "Sa",
          "Su",
          "Ma",
          "Tu",
          "We",
          "Th",
        ],
        datasets: [
          {
            data: [8, 6, 7, 4, 13, 8, 5, 9, 8, 11, 6],
            backgroundColor: [
              "rgba(83, 168, 247, 1)",
              "rgba(106, 223, 245, 1)",
              "rgba(106, 223, 245, 1)",
              "rgba(106, 223, 245, 1)",
              "rgba(12, 119, 235, 1)",
              "rgba(83, 168, 247, 1)",
              "rgba(106, 223, 245, 1)",
              "rgba(83, 168, 247, 1)",
              "rgba(83, 168, 247, 1)",
              "rgba(12, 119, 235, 1)",
              "rgba(106, 223, 245, 1)",
            ],
            borderRadius:50,
            borderSkipped: false,
          },
        ],
        
      },
      chartOptions: {
        responsive: true,
        plugins:{
          legend:{
            display:false
        },
        maintainAspectRatio: false,
        scales:{
          y:{
            display:false
          }
        }
      },
        
      },
    };
  },
};

</script>
