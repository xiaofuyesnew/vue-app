<template>
  <div class="m-bottom">
    <a href="#1">重置密码</a>
    <a href="#2">忘记密码</a>
  </div>
</template>

<script>
export default {
  name: 'bottom'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
