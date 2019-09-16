import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Discover from './views/Discover.Vue'
import LogIn from './views/LogIn.Vue'
import Profile from './views/Profile.Vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/discover',
      name: 'discover',
      component: Discover
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn
    }
  ],
  mode: 'history'
})