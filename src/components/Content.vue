<template>
  <div :class="['main', `${isDark}`]">
    <div class="main_content">
      <div :class="['item', 'item1', `${isDark}`]" style="--widht: 379px">
        <div>
          <div class="header">
            <img src="@/access/img/icons/Live.svg" alt="" />
            <h3>Helen Makkifani</h3>
          </div>
          <div class="info">
            <span>Age</span><div><b>37</b> year</div> <span>Blood</span
            ><span>O+</span> <span>Height</span><span>1.67 m</span>
            <span>Weight</span><span>63 kg</span>
          </div>
        </div>
        <div class="pie_content">
          <div
            v-if="isDark == false"
            class="pie animate"
            style="--p: 75; --c: #53a8f7; --f: #edfaff; --b: 15px; --w: 100px"
          >
            75%
          </div>
          <div
            v-else="isDark == true"
            class="pie animate"
            style="
              --p: 75;
              --c: rgba(32, 201, 255, 1);
              --f: #363c88;
              --b: 15px;
              --w: 100px;
            "
          >
            75%
          </div>
          <span>General health</span>
        </div>
      </div>
      <div :class="['item', `${isDark}`]" style="--widht: 236px">
        <div class="header">
          <img src="@/access/img/icons/Live-2.svg" alt="" />
          <h3>Vitamins</h3>
        </div>
        <div class="info">
          <span>Vitamin B12</span><span>2.4 mcg</span> <span>Vitamin C</span
          ><span>90 mg</span> <span>Vitamin D3</span><span>20 mcg</span>
        </div>
      </div>
      <div :class="['item', `${isDark}`, 'item3']" style= "--widht: 236px">
        <div class="glucose_content">
          <div class="header">
          <img src="@/access/img/icons/Live-3.svg" alt="" />
          <h3>Glucose level</h3>
        </div>
        <div class="info">
          <span>Average</span><span>71-90 mg</span> <span>Today’s</span
          ><span>84 mg</span>
          
        </div>
        </div>
        
        <GlucoseLine/>
      </div>
      <div :class="['item', 'oxi', `${isDark}`]" style="--widht: 236px">
        <p>Oxygen saturation</p>
        <div
          v-if="isDark == false"
          class="pie animate"
          style="--p: 97;--c: rgba(239, 239, 239, 0.36);--f: #0000;--b: 8px;--w: 100px;"
        >
          <span>97%</span>
        </div>
        <div
          v-if="isDark == true"
          class="pie animate"
          style="
            --p: 97;
            --c: rgba(54, 60, 136, 1);
            --f: #0000;
            --b: 8px;
            --w: 100px;
          "
        >
          <span>97%</span>
        </div>
        <p>Range 95-100%</p>
      </div>
      <div :class="['item', `${isDark}`]" style="--widht: 236px">
        <h3>Attention!</h3>
        <span
          >Your heart rate dropped below 40 this morning. <br> Don’t forget to give
          the report to your Doctor</span
        >
        <AttentionLine/>
      </div>
      <div :class="['item', `${isDark}`]" style="--widht: 75%">
      <LineChart :isDark="isDark"/>
      </div>
      <div :class="['item', `${isDark}`]" style="--widht: 329px">
        <Calendar :isDark="isDark" :date="date" />
      </div>
      <div :class="['item', `${isDark}`]" style="--widht: 236px">
        <div class="header">
          <h3>Water reminder</h3>
          <img src="@/access/img/icons/Settings.png" alt="Settings" />
        </div>
        <span>Target 3/6 cups</span>
        <div class="tracker">
           <div
          v-if="isDark == false"
          class="pie animate"
          style="--p: 50; --c: #53a8f7; --f: #edfaff; --b: 15px; --w: 100px"
        >
          50%
        </div>
        <div
          v-else="isDark == true"
          class="pie animate"
          style="--p: 50; --c: #53a8f7; --f: #363c88; --b: 15px; --w: 100px"
        >
          50%
        </div>
        </div>
       
      </div>
      <div :class="['item', `${isDark}`]" style="--widht: 236px">
        <div class="header">
          <h3>Calories tracker</h3>
          <img src="@/access/img/icons/Settings.png" alt="Settings" />
        </div>
        <span>Target 1900 ccal </span>
        <div class="tracker">
          <div
          v-if="isDark == false"
          class="pie animate"
          style="--p: 80; --c: #6adff5; --f: #edfaff; --b: 15px; --w: 100px"
        >
          1670
        </div>
        <div
          v-else="isDark == true"
          class="pie animate"
          style="--p: 80; --c: #6adff5; --f: #363c88; --b: 15px; --w: 100px"
        >
          1670
        </div>
        </div>
        
      </div>
      <div :class="['item', `${isDark}`]" style="--widht: 236px">
        <h3>Sleep progress</h3>
        <div class="sleep">
          <div class="sleep_item">
            <span>Deep</span>
            <span>2:03</span>
            <div class="Bar_wrapper">
              <span class="sleep_bar" style="--color: #c8f0ff"></span>
            </div>
          </div>
          <div class="sleep_item">
            <span>REM</span>
            <span>4:24</span>
            <span class="sleep_bar" style="--color: #53a8f7"></span>
          </div>
          <div class="sleep_item">
            <span>Light</span>
            <span>1:30</span>
            <span class="sleep_bar" style="--color: #45e3ed"></span>
          </div>
        </div>
        <div class="header">
          <h3>7</h3>
          <span>h </span>
          <h3>57</h3>
          <span>min</span>
        </div>
      </div>
      <div :class="['item', `${isDark}`]" style="--widht: 100%">
        <Shedule />
    </div>
    </div>
    <RightContent :isDark="isDark" />
  </div>
</template>

<script>
import BarChart from "@/components/Barchart.vue";
import RightContent from "@/components/RightContent.vue";
import Calendar from "@/components/Calendar.vue";
import Shedule from "@/components/Shedule.vue";
import LineChart from "@/components/LineChart.vue"
import GlucoseLine from "@/components/GlucoseLine.vue"
import AttentionLine from "@/components/AttentoinLine.vue"

export default {
  components: { BarChart, RightContent, Calendar, Shedule, LineChart,GlucoseLine, AttentionLine},
  props: {
    isDark: {
      type: Boolean,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.main {
  background: #f4fcff;
  width: 100%;
  padding: 62px;
  gap: 30px;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  line-height: 19px;
}

.main.true {
  background: #080d47;
  color: #ffffff;
}

.main.true h3 {
  color: #53a8f7;
}

.main h3 {
  color: #0c77eb;
}

.main_content {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  gap: 30px;
}

.item {
  background: #ffffff;
  padding: 30px 20px;
  box-shadow: 0px 2px 4px rgba(42, 105, 241, 0.22);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: var(--widht);
  /* width: 176px; */
  gap: 10px;
  /* align-items: center;
  text-align: left; */
}

.item.true {
  background: #1f2567;
  box-shadow: 0px 2px 4px rgba(42, 105, 241, 0.22);
}

.item1 {
  flex-direction: row;
}

.item3{
  padding: 0;
  justify-content: space-between;
}

.glucose_content{
  padding: 30px 20px 0 30px;
}

.header {
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  align-items: center;
  gap: 10px;
  /* color: #0C77EB; */
}


.pie_content {
  display: flex;
  flex-direction: column;
}

.info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 10px;
  column-gap: 20px;
}

.oxi {
  background: linear-gradient(178.34deg, #215bef -10.73%, #86f8ff 128.88%);
  color: #ffffff;
  padding: 20px;
  justify-content: center;
  align-items: center;
}

.oxi.true {
  background: linear-gradient(179.93deg, #0032b3 -10.41%, #20c9ff 110.9%);
  box-shadow: 0px 2px 4px rgba(42, 105, 241, 0.22);
}

/* .oxi>.pie{
  opacity: .5;
} */

.oxi > .pie > span {
  text-shadow: 0px 2px 4px rgba(42, 105, 241, 0.22);
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;
  font-feature-settings: "tnum" on, "lnum" on;
  z-index: 1;
  position: relative;
}

.sleep {
  display: grid;
  grid-template-columns: 1fr 40% 1fr;
}

.sleep_item {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.Bar_wrapper {
  height: 40px;
}

.tracker{
  display: flex;
  align-items: center;
  justify-content: center;
}

.sleep_bar {
  width: 100%;
  display: block;
  background: linear-gradient(
    180deg,
    var(--color) 5%,
    rgba(244, 252, 255, 0) 103.75%
  );
  border-radius: 8px;
  animation: ch 1s 0.5s both;
}

@keyframes ch {
  from {
    height: 0px;
  }
  to {
    height: 40px;
  }
}

@property --p {
  syntax: "<number>";
  inherits: true;
  initial-value: 0;
}

.pie {
  /* --p:20;
  --b:22px;
  --c:darkred; */
  /* --w:150px; */

  width: var(--w);
  aspect-ratio: 1;
  position: relative;
  display: inline-grid;
  margin: 5px;
  place-content: center;
  font-weight: 400;
  font-size: 20px;
  /* line-height: 24px; */
  filter: drop-shadow(0px 2px 4px rgba(42, 105, 241, 0.22));
}

.pie:before,
.pie:after {
  content: "";
  position: absolute;
  border-radius: 50%;
}

.pie:before {
  inset: 0;
  background: radial-gradient(farthest-side, var(--c) 98%, #0000) top/var(--b)
      var(--b) no-repeat,
    conic-gradient(var(--c) calc(var(--p) * 1%), var(--f) 0);
  -webkit-mask: radial-gradient(
    farthest-side,
    #0000 calc(99% - var(--b)),
    #000 calc(100% - var(--b))
  );
  mask: radial-gradient(
    farthest-side,
    #0000 calc(99% - var(--b)),
    #000 calc(100% - var(--b))
  );
}

.pie:after {
  inset: calc(50% - var(--b) / 2);
  background: var(--c);
  transform: rotate(calc(var(--p) * 3.6deg))
    translateY(calc(50% - var(--w) / 2));
}

.animate {
  animation: p 1s 0.5s both;
}

@keyframes p {
  from {
    --p: 0;
  }
}
</style>
