<template>
  <div>
    <div class="row first">
      <p>42</p>
      <span>bpm</span>
    </div>
    <div id="chart">
      <Line :options="chartOptions" :data="chartData" :style="myStyles" />
    </div>
    <div class="row second">
      <p>39</p>
      <span>bpm</span>
    </div>
  </div>
</template>

<script>
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "vue-chartjs";
import { Filler } from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default {
  name: "AttentionLine",
  components: {
    Line,
  },
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    myStyles() {
      return {
        height: "45px",
        // widht: '250px',
        "aspect-ratio": "1/4 ",
        backgroundColor:
          "radial-gradient(134.77% 137.19% at 39.65% -52.01%, rgba(33, 91, 239, 0.16) 41.59%, rgba(134, 248, 255, 0.0368) 100%)",
        // position: 'relative',
        // top:'35px',
        // left:'-10px'
      };
    },
  },
  data() {
    return {
      chartData: {
        labels: ["", "", "", "", "", "", ""],
        datasets: [
          {
            label: "Data One",
            pointBackgroundColor: "#6ADFF5",
            borderColor: "#6ADFF5",
            data: [42, 38, 35, 35, 36, 40, 43],
            colors: ["#008FFB"],
            pointBackgroundColor: "#ffffff",
            pointBorderWidth: 2,
            pointRadius: 4,
            fill: false,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        maintainAspectRatio: false,
        scales: {
          y: {
            display: true,
            gridLines: {
              display: false,
            },
            ticks: {
              display: false,
              min: 30,
              barPercentage: 0.5,
            },
          },
          x: {
            display: false,
            gridLines: {
              display: true,
            },
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  gap: 3px;
  align-items: center;
}

.row p {
  color: rgba(12, 119, 235, 1);
  margin: 0;
}

.second{
    display: flex;
    justify-content: end;
}
</style>
