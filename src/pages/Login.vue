<template>
    <div :class="['conteiner', `${this.dark}`]">
      <div class="left_conteiner">
        <div class="logo_wrapper">
          <img src="@/access/img/logo.png" alt="logo" />
          <h3>Healthcare</h3>
        </div>
        <form @submit.prevent="registrUser" class="content_wrapper">
          <h2>Welcome Back!</h2>
          <div class="input_wrapper" >
            <input :value="email" @input="email=$event.target.value" type="text" placeholder="Email" />
            <input :value="password" @input="password=$event.target.value" type="password" placeholder="Password" />
          </div>
          <div class="btn_wrapper">
            <p @click="loginShowForm">Can’t login?</p>
          <registration v-model:show="loginFormVisible">
            <h3>Forgot your password?</h3>
            <p>Please enter your email and we will remind you of your password</p>
            <input :value="email" @input="email=$event.target.value" type="text" placeholder="Email" />
            <button @click="findPassword">Confirm</button>
            <p>Your password is: {{this.currentPassword}}</p>
          </registration>
            <!-- <button v-if="this.activeBtn==true" @click="logIn" type="submit">Sign in</button> -->
            <!-- <router-link to="/"> -->
              <button type="submit">Sign in</button>
            <!-- </router-link> -->
            
          </div>
          <div>
            <span>Not registered? </span>
            <a href="javascript:void(0);"><span @click="showForm" class="blue_text">Request an account.</span></a>
            <registration v-model:show="formVisible" >
              
            <input :value="email" @input="email=$event.target.value" type="text" placeholder="Email" />
            <input :value="password" @input="password=$event.target.value" type="password" placeholder="Password" />
            <button @click="logIn">Register</button>
             </registration>
          </div>
        </form>
        <p>Term of use and Privacy Policy</p>
      </div>
      <div class="right_container">
        <img src="@/access/img/joyful-female-doctor.png" alt="login_doctor" />
      </div>
    </div>
  </template>
  
<script>
import registration from '@/components/Registration.vue'
  export default{
    components:{registration},
    props:{
    isDark:{
        type: Boolean,
        required: true,
    }
  },data(){
    return {
      users:[
        {
        id:1,
        email: 'test@test',
        password: 'test'
        }
      ],
      email:'',
      password:'',
      formVisible:false,
      loginFormVisible:false,
      activeBtn:false,
      currentPassword:'',
    }
  },methods:{
    darkTheme(){
      let dark = localStorage.getItem('isDark')
          const container=document.querySelector('.conteiner')
          container.classList.add(dark)
          var childs=container.childNodes;
          for(var i=0; i<childs.length; ++i){
            let next_childs=childs[i].childNodes
            for (let j=0; j<next_childs.length; ++j){
              next_childs[j].classList.add(dark)
            }
          }
    },
    logIn(){
      const user ={
        id:Date.now(),
        email:this.email,
        password:this.password
      }
      this.users.push(user)
      this.formVisible=false
      this.email=''
      this.password=''
    },
    registrUser(){
      for(let i=0; i<this.users.length; ++i){
        if(this.email==this.users[i].email&&this.password==this.users[i].password){
          this.activeBtn=true
          console.log('match')
        } else{
          console.log('not match')
        }
        
      } 

    },
    showForm(){
      this.formVisible = true
    },
    loginShowForm(){
      this.loginFormVisible = true
    },
    findPassword(){
      
      for(let i=0; i<this.users.length; ++i){
        if(this.email==this.users[i].email){
          this.currentPassword = this.users[i].password
        }
      }
    }
  },
  
  mounted(){
    this.darkTheme()
    // console.log(this.newEmail)
    
  }

};

</script>
  
  <style scoped>
  
  .conteiner {
    display: flex;
    flex-direction: row;
    height: 100vh;
  }
  
  .logo_wrapper{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
  }
  
  .left_conteiner {
    width: 44%;
    padding: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    /* text-align: center; */
  }
  
  .left_conteiner p{
      text-align: center;
  }
  
  p{
      color: #8DA9C7;
  }
  
  .input_wrapper{
      display: flex;
      flex-direction: column;
      gap: 30px;
      margin-top: 70px;
      margin-bottom: 40px;
  }
  
  input{
      border: inherit;
      width: 286px;
      height: 38px;
      color: #0c77eb;
      background-color: inherit;
      /* border-bottom: 1px solid #8DA9C7; */
  }
  
  input::placeholder{
     font-weight: 400;
  font-size: 15px; 
  color: #8DA9C7;
  border: inherit;
  
  
  }

  input::placeholder:placeholder-shown {
  /* border: 2px solid silver; */
  border: none;
}
  
  h3{
      font-weight: 700;
  font-size: 30px;
  line-height: 36px;
  }
  
  h2{
      font-weight: 700;
  font-size: 48px;
  line-height: 58px;
  }
  
  .right_container {
    width: 100%;
    background: linear-gradient(178.34deg, #215bef -10.73%, #86f8ff 128.88%);
    border-radius: 600px 0px 0px 600px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .content_wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
  }
  
  .btn_wrapper{
      display: flex;
      flex-direction: row;
      width: 70%;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 50px;
      /* gap: 136px; */
  }
  
  button{
      background: #0C77EB;
      border-radius: 30px;
      color: #F7F7F7;
      padding: 8px 24px;
      align-items: center;
      border: inherit;
  }
  
  .blue_text,
  h2,
  h3 {
    color: #0c77eb;
  }

  a{
    text-decoration: none;
  }
  .conteiner.true{
    background: #1F2567;
    
  }
  .conteiner.true> .right_container{
    background: linear-gradient(179.93deg, #0032B3 -10.41%, #20C9FF 110.9%);
  }
  .true>h2, .true>h3, .true, .true>div>input, .true>div>input::placeholder,.true>div>a>p{
    color: #ffffff;
    border: inherit;
  }
  /* .conteiner.true>div>div>h2,h3,span,input::placeholder,p{
  color: #ffffff;
  } */
  </style>
  