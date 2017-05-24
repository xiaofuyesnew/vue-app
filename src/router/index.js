import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Bottom from '@/components/Bottom'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: ['login', 'bottom'],
      component: {Login, Bottom}
    },
    {
      path: '/test',
      name: 'login',
      component: {Login}
    }
  ]
})
