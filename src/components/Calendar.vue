<template>
    <div class="calendar">
        <div class="month">
            <img src="@/access/img/icons/Chevron_Left_MD.svg" alt="">
            <div>{{ date.toLocaleString(locale="en-us", {month:'long'}) }}</div>
            <img class="right_arrow" src="@/access/img/icons/Chevron_Left_MD.svg" alt="">
        </div>
        <div class="week">
            <div class="day" v-for="day in week_days">
                <h5>{{day}}</h5>
            </div>
        </div>
        <div class="days">
            <span class="day not_active_elem">31</span>
            <span class="day" v-for="day in 31">{{ day }}
        </span>
        </div>
    </div>
</template>

<script>
  export default{
  props:{
    isDark:{
        type: Boolean,
        required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  data(){
    return{
        week_days:['Su','Mo','Tu','We','Tr','Fr','Sa'],
        active_days:[12,15,24]
    }
    },
methods:{
    qwerty(){
        let elems=document.querySelectorAll('.day')
        for (let elem of elems){
            for(let day in this.active_days){
                if(elem.textContent==`${this.active_days[day]}`){
                    elem.classList.add('active_elem')
                }
            }
        }
    }


},
mounted(){
    this.qwerty()
}
};

</script>

<style>
.calendar{
    font-size: 16px;
line-height: 19px;
padding: 0 30px;
}

.month{
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
gap: 5px;
}

.week{
    /* display: flex;
    flex-direction: row;
    gap: 20px; */
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    margin: 10px 0;
}

.days{
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    
}

.day{
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 24px;
    height: 24px; */
    cursor: pointer;
}

.right_arrow{
    transform: rotate(180deg);
}

.active_elem, .day:hover{
    font-feature-settings: 'pnum' on, 'lnum' on;
color: #FFFFFF;
background: #53A8F7;
border-radius: 50%;
gap: 4px;
padding:5px 0 ;
}

.not_active_elem{
    color: #D5D5D5;
}
</style>