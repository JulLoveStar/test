<template>
  <div :class="['item', `${isDark}`,'right_content_wrapper' ]" style="--widht:339px">
    <div >
        <div class="header head">
            <h3>Activity</h3>
            <div class="header">
                <p>full report</p>
                <img src="@/access/img/icons/arrow-3.svg" alt="">
            </div>
        </div>
        <li style="--c:#0C77EB;">
            <span>Mobility </span><span>325/400 ccal</span>
        </li>
        <li style="--c: #53A8F7;"><span>Exercises</span><span>17/30 min</span></li>
        <li style="--c:#6ADFF5;"><span>Stretch</span><span>8/10 time</span></li>
    </div>
    <div>
        <div v-if="isDark==false" class="pie animate" style="--p:75;--c:#0C77EB;--f:#EDFAFF;--b:20px;--w:237px;">
            <div class="pie animate" style="--p:60;--c:#53A8F7;--f:#EDFAFF;--b:20px;--w:179px;">
                <div class="pie animate" style="--p:80;--c:#6ADFF5;--f:#EDFAFF;--b:20px;--w:123px;">05.08.22</div>
            </div>
        </div>
        <div v-else="isDark==true" class="pie animate" style="--p:75;--c:rgba(12, 119, 235, 1);--f:#363C88;--b:15px;--w:237px;">
            <div class="pie animate" style="--p:60;--c:#53A8F7;--f:#363C88;--b:20px;--w:179px;">
                <div class="pie animate" style="--p:80;--c:#6ADFF5;--f:#363C88;--b:20px;--w:123px;">05.08.22</div>
            </div>
        </div>
    </div>
    <div class="steps">
        <div class="header head">
            <h3>Steps</h3>
            <div class="header">
                <p>full report</p>
                <img src="@/access/img/icons/arrow-3.svg" alt="">
            </div>
        </div>
            <div class="info">
                <span>Today’s activity</span><span>4200 steps</span>
                <span>Average distance </span><span>3.2 km</span>
            </div>
        
    </div>
    <div class="bar">
        <BarChart/>
    </div>
  </div>
</template>

<script>
import BarChart from "@/components/Barchart.vue";

export default{
    components: { BarChart},
    props:{
    isDark:{
        type: Boolean,
        required: true,
    }
  },

};
</script>

<style>

li::marker{
    color: var(--c);
}

.bar{
    height: 35%;
}

.steps{
    padding: 25px 0;
    border-top: 1px solid #EDFAFF;
    margin-top: 30px;
}

/* .right_content_wrapper{
    justify-content: center;
} */

</style>
