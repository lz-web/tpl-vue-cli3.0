import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
// import router_token from './router_token'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 跳转之前
router.beforeEach((to, from, next) => {
    next() // 跳转
})

// 跳转之后
router.afterEach(to => {

})

export default router
