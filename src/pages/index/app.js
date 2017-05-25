import Vue from 'vue'
import { Indicator } from 'mint-ui'
import 'mint-ui/lib/style.css'
import App from './app.vue'

Vue.use(Indicator)

new Vue({
  el: '#app',
  render: h => h(App)
})
