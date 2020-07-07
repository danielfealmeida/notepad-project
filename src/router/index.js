import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import SignIn from '@/components/pages/Signin'
import Login from '@/components/pages/Login'
import MkNote from '@/components/pages/MkNote'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/mkNote',
      name: 'MkNote',
      component: MkNote
    },
  ]
})
