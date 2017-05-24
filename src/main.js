// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Login from './components/Login'
import Bottom from './components/Bottom'
import 'mint-ui/lib/style.css'
import {Indicator} from 'mint-ui'

Vue.use(Indicator)

Vue.component('login', Login)
Vue.component('bottom', Bottom)

Vue.config.productionTip = false

/* eslint-disable no-new */
var app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App, Login, Bottom },
  data: {
    scnHeight: '',
    scnWidth: ''
  },
  methods: {
    setScreen: () => {
      const viewHeight = window.innerHeight
      const viewWidth = window.innerWidth
      const screen = document.getElementById('app')

      screen.style.height = viewHeight + 'px'
      screen.style.width = viewWidth + 'px'
    },
    clickButton: () => {
      Indicator.open({
        spinnerType: 'fading-circle'
      })
      setTimeout(() => {
        Indicator.close()
      }, 5000)
    }
  }
})

app.setScreen()
