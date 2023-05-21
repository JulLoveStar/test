<template>
    <div class="line_head">
        <h3>Pulse</h3>
        <div class="period">
            <span>Yearly</span><span class="active_period">Monthly</span><span>Weekly</span>
        </div>
        <div class="perion_info"><p>Average Heart Rate</p><h5>50</h5></div>
    </div>
  <div id="chart">
    <Line :options="chartOptions" :data="chartData" id="my_chart11"/>
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

// var ctx = document.getElementById('');
// // console.log(ctx)
// var gradient = ctx.createLinearGradient(0,0,0,150);
// gradient.addColorStop(0, '#ff003a');
// gradient.addColorStop(1, "transparent");


  // var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
  // gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.6)");
  // gradientFill.addColorStop(1, "rgba(244, 144, 128, 0.6)");

  export default {
  name: "LineChart",
  components: {
    Line,
  },
  props:{
    isDark:{
        type: Boolean,
        required: true,
    }
  },
  data() {
    return {
      chartData: {
        labels: [
          "Mar",
          "","","",
          "Apr",
          "","","",
          "May",
          "","","",
          "Jun",
          "","","",
          "Jul",
          "","","",
          "Aug",
        ],
        datasets: [
          {
            label: "Data One",
            pointBackgroundColor: "#ffffff",
            pointBorderWidth: 2,
            pointRadius: 4,
            borderColor:'#6ADFF5',
            data: [47, 45, 47, 50, 41, 39, 55,51,63,58,61,52,50,56,47,47,50,41,43,50,55],
            colors: ['#008FFB'],
            fill:true,
            backgroundColor: "rgba(200, 240, 255, 0.5)",
          },
        ],
      },
      chartOptions:{
        responsive: true,
        plugins:{
          legend:{
            display:false
        }},
        maintainAspectRatio: false,
        scales:{
          y:{
            display:true,
            position:'right',
            gridLines: {
              display: false
            }
            // ticks: { display: false },
          },
          x:{
            gridLines: {
              display: false
            },
            ticks:{
              min:30,
              max:60,
              stepSize:20
            }
          }
        }
      }
    };
  },
  // mounted(){
  //   var ctx = document.getElementById('my_chart11').getContext("2d");
  //     var gradientFill = ctx.createLinearGradient(500, 0, 100, 0);
  //           gradientFill.addColorStop(0, "rgba(128, 182, 244, 0.6)");
  //           gradientFill.addColorStop(1, "rgba(244, 144, 128, 0.6)");
  //     return gradientFill
  // }
};
</script>

<style>

.line_head{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.period{
    display: flex;
    flex-direction: row;
    gap: 50px;
    align-items: center;
}

.active_period, .period span:hover{
    background: #EDFAFF;
    border-radius: 8px;
    color: #0C77EB;
    padding: 5px 10px;
    cursor: pointer;
}

.perion_info{
    display: flex;
    flex-direction: row;
    gap: 10px;
    color: #D5D5D5;
}

.perion_info h5{
    color: #0C77EB;
}

</style>
