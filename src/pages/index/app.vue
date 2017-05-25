<template>
  <div id="app">
    <div class="m-login">
      <div class="u-avatar"></div>
      <div class="u-title">远安县精准扶贫系统</div>
      <form class="u-login">
        <input type="text" placeholder="账号">
        <div class="u-rmbpw">
          <input type="password" placeholder="密码">
          <div class="remember">
            <input id="remember" type="checkbox">
            <label for="remember"></label>
            <span>记住密码</span>
          </div>
        </div>
        <div class="u-check">
          <input type="text" placeholder="验证码">
          <img src="">
        </div>
        <button @click="clickButton" type="button">登录</button>
      </form>
    </div>
    <div class="m-bottom">
      <a href="#1">重置密码</a>
      <a href="#2">忘记密码</a>
    </div>
  </div>
</template>

<script>
  import { Indicator } from 'mint-ui'

  export default {
    data () {
      return {
      } 
    },
    methods: {
      clickButton () {
        Indicator.open()
        setTimeout(() => {
          Indicator.close()
        }, 5000);
      }
    }
  }
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
    font-size: 62.5%;
}
a {
    -webkit-tap-highlight-color:rgba(255, 255, 255, .2);
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
.m-login {
  padding-top: 20vw;
}
.u-avatar {
  width: 24vw;
  height: 24vw;
  background: url("../../assets/img/login-logo.png") no-repeat;
  background-size: 100%;
  margin: 0 auto;
}
.u-title {
  font-size: 2.4rem;
  color: #fff;
  padding: 3vw 0 3vw;
}
.u-login ::-webkit-input-placeholder {
  color: #fff;
}
.u-login input[type="text"],
.u-login input[type="password"]{
  border-radius: 0;
  display: block;
  border: none;
  outline: none;
  background: none;
  color: #fff;
  margin: 0 auto;
  font-size: 1.4rem;
  border-bottom: 1px solid rgba(255, 255, 255, .4);
  height: 10vw;
  width: 63vw;
  padding: 3vw 1vw 1vw;
}
.u-rmbpw {
  position: relative;
}
.u-rmbpw span {
  font-size: 1.4rem;
  color: #fff;
}
.remember {
  position: absolute;
  width: 25vw;
  right: 15vw;
  top: 5.3vw;
}
.u-rmbpw input[type="checkbox"] {
  visibility: hidden;
  display: block;
  float: right;
}
.u-rmbpw input[type="checkbox"]+label::before {
  content: '\a0';
  display: block;
  float: left;
  width: 1rem;
  height: 1rem;
  margin: .3rem 0 0;
  border-radius: .2rem;
  border: 1px solid #fff;
  text-indent: .15rem;
  line-height: .65;
}
.u-rmbpw input[type="checkbox"]:checked+label::before {
  content: '\a0';
  background: url("../../assets/img/check.png") no-repeat;
  background-size: 100%;
  display: block;
  float:left;
  width: 1rem;
  height: 1rem;
  margin: .3rem 0 0;
  border-radius: .2rem;
  border: 1px solid #fff;
  text-indent: .15rem;
  line-height: .65;
}
.u-login button {
  display: block;
  margin: 15vw auto 0;
  outline: none;
  border: none;
  background: rgba(30, 130, 208, .8);
  height: 10vw;
  color: #fff;
  border-radius: 10vw;
  width: 65vw;
  letter-spacing: 5vw;
  text-indent: 5vw;
  font-size: 1.4rem;
}
.u-check {
  width: 65vw;
  margin: 0 auto;
  padding-bottom: 15vw;
}
.u-check input[type="text"] {
  width: 40vw;
  float: left;
}
.u-check img {
  height: 10vw;
  width: 20vw;
  float: right;
  padding-top: 4vw;
}
.m-bottom {
    width: 100%;
    position:absolute;
    bottom: 0;
    display: flex;
    justify-content: space-between;
  }
  .m-bottom a {
    font-size: 1.6rem;
    color: #fff;
    text-decoration: none;
    line-height: 10vw;
    padding: 5vw;
  }
</style>
