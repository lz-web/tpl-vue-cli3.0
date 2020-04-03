import Vue from 'vue'
import Home from '../views/Home.vue'

export default [
  // {
  //   path: '/',
  //   name: 'Home',
  //   meta:{
  //     keep_alive : false  // 是否保持缓存
  //   },
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   meta:{
  //     keep_alive : false
  //   },
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/login',
    name: 'login', 
    meta:{
      keep_alive : false
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/login/login.vue')
  },
  {
    path: "*",
    redirect: "/login"
  },
]
