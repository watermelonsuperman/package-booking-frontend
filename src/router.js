import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import PackageIn from './views/PackageIn.vue'
import Booking from './views/Booking.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/packageIn',
      component:PackageIn
    },
    {
      path: '/booking',
      component:Booking
    }
  ]
})
