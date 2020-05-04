import Vue from 'vue'
import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    redirect: "/index"
  },
  //   path: '/',
  //   name: 'idnex',
  //   meta:{
  //     keep_alive : false  // 是否保持缓存
  //   },
  //   component: Home
  // },
  {
    path: '/about',
    name: 'About',
    meta:{
      keep_alive : false
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login', //  登录界面
    name: 'login', 
    meta:{
      keep_alive : false
    },
    component: () => import(/* webpackChunkName: "login" */ '../views/login/login.vue')
  },
  {
    path: '/register/:id?', //  注册界面
    name: 'register', 
    meta:{
      keep_alive : false
    },
    component: () => import(/* webpackChunkName: "register" */ '../views/register/register.vue')
  },
  {
    path: '/index', //  首页
    name: 'index', 
    meta:{
      keep_alive : false,
      no_header:true
    },
    component: () => import(/* webpackChunkName: "index" */ '../views/index/index.vue')
  },
  {
    path: '/result', //  搜索结果页
    name: 'result', 
    meta:{
      keep_alive : false
    },
    component: () => import(/* webpackChunkName: "result" */ '../views/result/result.vue')
  },
  {
    path: '/detail/:id', //  药品详情界面
    name: 'detail', 
    meta:{
      keep_alive : false
    },
    component: () => import(/* webpackChunkName: "result" */ '../views/detail/detail.vue')
  },
  {
    path: '/evaluationSystem/:id', // 立项评分系统
    name: 'evaluationSystem', 
    meta:{
      keep_alive : false
    },
    component: () => import(/* webpackChunkName: "evaluationSystem" */ '../views/evaluationSystem/evaluationSystem.vue')
  },
  {
    path: '/evaRecord', // 立项评分系统  记录
    name: 'evaRecord', 
    meta:{
      keep_alive : false
    },
    component: () => import(/* webpackChunkName: "evaRecord" */ '../views/evaRecord/evaRecord.vue')
  },
  {
    path: '/echartsExample',
    name: 'echartsExample', 
    meta:{
      keep_alive : false
    },
    component: () => import(/* webpackChunkName: "echartsExample" */ '../views/echartsExample/echartsExample.vue')
  },
  {
    path: '/evaResult/:id', // 评测结果
    name: 'evaResult', 
    meta:{
      keep_alive : false
    },
    component: () => import(/* webpackChunkName: "evaResult" */ '../views/evaResult/evaResult.vue')
  },
  {
    path: "*",
    redirect: "/login"
  },
]
