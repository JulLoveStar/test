<template>
  <div class="wrapper">
    <aside>
      <div>
        <header>
          <img src="@/access/img/logo.png" alt="logo" />
          <h2>Healthcare</h2>
        </header>
        <div class="wrapper_content">
          <div class="content active">
            <img src="@/access/img/icons/Components.svg" alt="icon" />
            <p>Profile</p>
          </div>
          <div class="content">
            <img src="@/access/img/icons/Components-2.svg" alt="icon" />
            <p>Medical History</p>
          </div>
          <div class="content">
            <img src="@/access/img/icons/Components-3.svg" alt="icon" />
            <p>Current Medicines</p>
          </div>
          <div class="content">
            <img src="@/access/img/icons/Components-4.svg" alt="icon" />
            <p>Doctors</p>
          </div>
          <div class="content">
            <img src="@/access/img/icons/Components-5.svg" alt="icon" />
            <p>Calendar</p>
          </div>
          <div class="content">
            <img src="@/access/img/icons/Components-6.svg" alt="icon" />
            <p>Notifications</p>
          </div>
        </div>
        <div>
          <div class="content">
            <img src="@/access/img/icons/Components-7.svg" alt="icon" />
            <p>Settings</p>
          </div>
          <div class="content">
            <img src="@/access/img/icons/Components-8.svg" alt="icon" />
            <p>Log Out</p>
          </div>
        </div>
      </div>
      <div>
        <Todo :todos="todos" :date="date" />
        <div class="theme">
          <img src="@/access/img/icons/Components-9.svg" alt="" />
          <div></div>
          <img src="@/access/img/icons/Components-10.svg" alt="" />
        </div>
      </div>
    </aside>
    <Content/>
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
import Content from "@/components/Content.vue"
// import { text } from "body-parser";

export default {
  components: {
    Todo, Content
  },
  data() {
    return {
      date: new Date(),
      todos: [
        {
          id: 1,
          text: "Supplements",
          status: false,
        },
        {
          id: 2,
          text: "Go to gym",
          status: false,
        },
        {
          id: 3,
          text: "Meet a doctor",
          status: true,
        },
      ],
    };
  },
  methods: {},
};
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
}

aside {
  background: linear-gradient(178.34deg, #215bef -10.73%, #86f8ff 128.88%);
  width: 18%;
  border-radius: 10px;
  padding: 40px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

header {
  display: flex;
  flex-direction: row;
  color: #ffffff;
  gap: 20px;
  align-items: center;
}

.content {
  display: flex;
  flex-direction: row;
  color: #ffffff;
  align-items: center;
  cursor: pointer;
}

.active,
.content:hover {
  background: rgba(239, 239, 239, 0.36);
  box-shadow: 0px 2px 4px rgba(42, 105, 241, 0.22);
  border-radius: 8px;
}

.wrapper_content {
  margin: 40px 0 30px 0;
  border-top: 1px solid rgba(239, 239, 239, 0.36);
  border-bottom: 1px solid rgba(239, 239, 239, 0.36);
  padding: 30px 0;
}

p {
  font-size: 16px;
  line-height: 19px;
}

h2 {
  font-weight: 700;
  font-size: 30px;
  line-height: 36px;
}

.theme{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
</style>
