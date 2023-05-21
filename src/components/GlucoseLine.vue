<template>
     <div id="chart">
    <Line :options="chartOptions" :data="chartData" :style="myStyles"/>
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
import {Filler} from 'chart.js'

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
    
  name: "GlucoseLine",
  components: {
    Line,
  },
  props:{
    isDark:{
        type: Boolean,
        required: true,
    }
  },
  computed: {
    myStyles () {
      return {
        height: '50px',
        // widht: '250px',
        'aspect-ratio': '7/1 ',
        backgroundColor:'radial-gradient(134.77% 137.19% at 39.65% -52.01%, rgba(33, 91, 239, 0.16) 41.59%, rgba(134, 248, 255, 0.0368) 100%)',
        // position: 'relative',
        // top:'35px',
        // left:'-10px'
      }
    }
  },
  data() {
    return {
      chartData: {
        labels: [
          "","","","","","","",
        ],
        datasets: [
          {
            label: "Data One",
            pointBackgroundColor: "#6ADFF5",
            borderColor:'#6ADFF5',
            data: [20, 30, 20, 40, 30, 40,10],
            colors: ['#008FFB'],
            pointBackgroundColor: "#ffffff",
            pointBorderWidth: 2,
            pointRadius: 4,
            // fill: {
            //     type: 'gradient',
            //     gradient: {
            //     shadeIntensity: 1,
            //     inverseColors: false,
            //     opacityFrom: 0.5,
            //     opacityTo: 0,
            //     stops: [0, 90, 100]
            //   },
            // },
            fill:true,
            backgroundColor: "rgba(200, 240, 255, 0.5)",
          },
        ],
      },
      chartOptions:{
        responsive: true,
        plugins:{
          legend:{
            display:false,
        }},
        maintainAspectRatio: false,
        scales:{
          y:{
            display:false,
            gridLines: {
            display: false
            }
          },
          x:{display:false,
            gridLines: {
            display: false
            }
          }
          
        }
      }
    };
  },
};
</script>

<style scoped></style>