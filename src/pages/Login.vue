<template>
    <div class="conteiner">
      <div class="left_conteiner">
        <div class="logo_wrapper">
          <img src="@/access/img/logo.png" alt="logo" />
          <h3>Healthcare</h3>
        </div>
        <div class="content_wrapper">
          <h2>Welcome Back!</h2>
          <div class="input_wrapper">
            <input type="text" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>
          <div class="btn_wrapper">
            <a href="javascript:void(0);"><p>Can’t login?</p></a>
            <button>Sign in</button>
          </div>
          <div>
            <span>Not registered? </span>
            <a href="javascript:void(0);"><span class="blue_text">Request an account.</span></a>
          </div>
        </div>
        <p>Term of use and Privacy Policy</p>
      </div>
      <div class="right_container">
        <img src="@/access/img/joyful-female-doctor.png" alt="login_doctor" />
      </div>
    </div>
  </template>
  
  <script></script>
  
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
  
  }
  
  input::placeholder{
     font-weight: 400;
  font-size: 15px; 
  color: #8DA9C7;
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
      width: 55%;
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
  </style>
  