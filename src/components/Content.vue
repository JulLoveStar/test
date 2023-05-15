<template>
  <div class="main">
    <div>
      <div>
        <div>
          <div class="header">
            <img src="@/access/img/icons/Live.svg" alt="" />
            <h3>Helen Makkifani</h3>
          </div>
          <div>
            <span>Age</span><span>37 year</span>
            <span>Blood</span><span>O+</span>
            <span>Height</span><span>1.67 m</span>
            <span>Weight</span><span>63 kg</span>
          </div>
        </div>
        <div>
            <canvas ref="canvas" class="chart"></canvas>
        </div>
      </div>
      <div>
        <div class="header">
          <img src="@/access/img/icons/Live-2.svg" alt="" />
          <h3></h3>
        </div>
      </div>
      <div>
        <div class="header">
          <img src="@/access/img/icons/Live-3.svg" alt="" />
          <h3></h3>
        </div>
      </div>
      <div></div>
    </div>
    <div></div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
 
 export default {
   extends: Bar,
   data: () => ({
     chartdata: {
       labels: ['Январь', 'Февраль'],
       datasets: [
         {
           label: 'Данные 1',
           backgroundColor: '#f87979',
           data: [40, 20]
         }
       ]
     },
     options: {
       responsive: true,
       maintainAspectRatio: false
     }
   }),
  
   mounted () {
     this.renderChart(this.chartdata, this.options)
   }
 }
</script>

<style>
.main {
  background: #f4fcff;
  width: 100%;
}
</style>
