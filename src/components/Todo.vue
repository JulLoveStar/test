<template>
  <div :class="['todo_list', `${isDark}`]">
    <h4>Your to do list</h4>
    <div class="calend">
      <img src="@/access/img/icons/Calendar_Days.svg" alt="" />
      <p>
        {{ date.getDate() }}.0{{ date.getMonth() }}.{{ date.getFullYear() }}
        {{ date.getHours() }}:{{ date.getMinutes() }}
      </p>
    </div>
    <div  class="todo_item" v-for="todo in todos">
      <div v-if="todo.status == true" :class="['todo', 'done']" >✓</div>
      <div  v-else="todo.status !== true" :class="['todo']" ></div>
      <p @click="changeStatus(todo.id)">{{ todo.text }} </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todos: {
      type: Array,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    isDark:{
        type: Boolean,
      required: true,
    }
  },methods:{
    changeStatus(id){
          this.todos.forEach(elem => {
            if(elem.id ==id){
              if(elem.status===true){
                elem.status=false
              }else if(elem.status===false){
                elem.status=true
              }
            }
          });
    },
  },mounted(){
    // this.changeStatus(status)
  }
  
};
</script>

<style scoped>
.todo_list {
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(42, 105, 241, 0.22);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
}

.true{
    background: #1F2567;
    color: #ffffff;
}

.calend, .todo_item{
    display: flex;
    flex-direction: row;
    gap: 10px;
}

.todo{
    border: 2px solid #D5D5D5;
    width: 10px;
height: 10px;
border-radius: 3px;
}

.done{
    border: 2px solid #0c77eb;
    color: #0c77eb;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;

}

p {
  font-size: 16px;
  line-height: 19px;
}

h4 {
    text-align: center;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #0c77eb;
  margin-bottom: 20px;
}
</style>
