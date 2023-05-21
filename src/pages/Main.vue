<template>
  <div class="wrapper">
    <aside :class="[`${isDark}`]">
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
          <router-link to="login" :isDark="isDark">
            <div class="content">
              <img src="@/access/img/icons/Components-8.svg" alt="icon" />
              <p>Log Out</p>
            </div>
          </router-link>
        </div>
      </div>
      <div>
        <Todo :todos="todos" :date="date" :isDark="isDark" />
        <div class="theme">
          <div :class="['theme_icon',`${isDark}`,'sun']"></div>
          <div :class="['switch-btn',`${isDark}`]" @click="isDarks"></div>
          <div :class="['theme_icon',`${isDark}`,'moon']"></div>
        </div>
      </div>
    </aside>
    <Content :isDark="isDark" :date="date"/>
  </div>
</template>

<script>
import Todo from "@/components/Todo.vue";
import Content from "@/components/Content.vue";

export default {
  components: {
    Todo,
    Content,
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
      isDark: false,
    };
  },
  methods: {
    isDarks() {
      if (this.isDark === false) {
        this.isDark = true;
      } else if (this.isDark === true) {
        this.isDark = false;
      }

      console.log(this.isDark);
      localStorage.setItem('isDark', this.isDark)
      return this.isDark;
    },
  },
};
</script>

<style>
.wrapper {
  display: flex;
  flex-direction: row;
  /* height: 100vh; */
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

aside.true {
  background: linear-gradient(179.93deg, #0032b3 1.59%, #20c9ff 84.36%);
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

.theme_icon {
  width: 40px;
  height: 40px;
  background-color: #ffffff;
}

.theme_icon.true{
  background-color: #5046e5;
}

.sun{
  mask-image: url(../access/img/icons/Components-9.svg);
}

.moon{
  mask-image: url(../access/img/icons/Components-10.svg);
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

a {
  text-decoration: none;
}

.theme {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.switch-btn {
  display: inline-block;
  width: 48px; /* ширина */
  height: 24px; /* высота */
  border-radius: 12px; /* радиус скругления */
  background: rgba(239, 239, 239, 0.36); /* цвет фона */
  z-index: 0;
  margin: 0;
  padding: 0;
  border: none;
  cursor: pointer;
  position: relative;
  transition-duration: 300ms; /* анимация */
}
.switch-btn::after {
  content: "";
  height: 16px; /* высота кнопки */
  width: 16px; /* ширина кнопки */
  border-radius: 12px;
  background: #fff; /* цвет кнопки */
  top: 3px; /* положение кнопки по вертикали относительно основы */
  left: 3px; /* положение кнопки по горизонтали относительно основы */
  transition-duration: 300ms; /* анимация */
  position: absolute;
  z-index: 1;
}
.switch-btn.true {
  background: #171D66;
}
.switch-btn.true::after {
  left: 27px;
}
</style>
