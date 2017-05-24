<template>
  <div id="app">
    <login></login>
    <bottom></bottom>
  </div>
</template>

<script>
export default {
  name: 'app'
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
body {
  background: url("assets/login-bg.png") no-repeat;
  background-size: cover;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
}
</style>
