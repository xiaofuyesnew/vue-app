<template>
  <button @click="clickBtn">点击</button>
</template>

<script>
import { Indicator } from 'mint-ui'
  export default {
    components: {
    },
    data () {
      return {
      }
    },
    methods: {
      clickBtn () {
          Indicator.open()
      }
    }
  }
</script>

<style>
  
</style>
