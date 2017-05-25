import Vue from 'vue'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './app.vue'
import loginBg from 'assets/img/login-bg.png'

Vue.use(MintUI)

var myApp = new Vue({
  el: '#app',
  render: h => h(App),
  methods: {
    setBg: () => {
      var bodyNode = document.getElementsByTagName('body')[0]

      bodyNode.style.background = 'url(' + loginBg + ') no-repeat'
      bodyNode.style.backgroundSize = 'cover'
    },
    setScreen: () => {
      var screenHeight = window.innerHeight
      var appNode = document.getElementById('app')

      appNode.style.height = screenHeight + 'px'
    }
  }
})

myApp.setBg()
myApp.setScreen()
