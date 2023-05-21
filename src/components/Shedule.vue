<template>
<div class="header head">
    <h3>Sheduled appointments and tests</h3>
    <p>August, 2022</p>
</div>   
<div class="table_wrapper">
    <div class="table_row table_head">
      <span v-for="key in Object.keys(shedule[0])">{{ key }}</span>  
    </div>
    <div class="table_row" v-for="item in shedule">
        <span>{{ item.Date }}</span> <span>{{ item.Time }}</span>
        <span>{{ item.Hospital }}</span><span>{{ item.Doctor }}</span><span>{{ item.Treatment }}</span>
    </div>
</div>

</template>

<script>

export default{
    data(){
        return{
            shedule:[{
                Date:'12.08.22',
                Time:'18:30',
                Hospital:'St. Maria Hospital ',
                Doctor:'Doctor Sarah Clay',
                Treatment:'Palmonary'
            },{
                Date:'15.08.22',
                Time:'8:10',
                Hospital:'St. Maria Hospital ',
                Doctor:'Doctor Michael Stent',
                Treatment:'Dantist'
            },
            {
                Date:'15.08.22',
                Time:'8:10',
                Hospital:'St. Maria Hospital ',
                Doctor:'Doctor Michael Stent',
                Treatment:'Dantist'
            },{
                Date:'15.08.22',
                Time:'8:10',
                Hospital:'St. Maria Hospital ',
                Doctor:'Doctor Michael Stent',
                Treatment:'Dantist'
            },]
        }
    }
}

</script>

<style>
.table_row{
    display: grid;
    grid-template-columns: repeat(5,1fr);
    font-size: 16px;
line-height: 19px;
}

.table_wrapper{
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100px;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: #1f2567 #20c9ff;
}
.table_wrapper::-webkit-scrollbar{
    width: 100%;
    height: 8px;
    background-color: #20c9ff;
}

.table_head{
    color: #D5D5D5;
    border-bottom: 1px solid #D5D5D5;
    padding-bottom: 5px;
}

.head{
    justify-content: space-between;
    color: #D5D5D5;
}
</style>