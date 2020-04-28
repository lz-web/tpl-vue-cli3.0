import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router'
import router_token from './router_token'
import jsCookies from 'js-cookie'
// import router_token from './router_token'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})
// 跳转之前
router.beforeEach((to, from, next) => {
  const token = jsCookies.get('token')
  let to_name = to.name + ''
  if (!router_token.hasOwnProperty(to_name) && !token) {
    // 需要登录的界面
    // 未登录且 要需要登录的界面
    next({
      name: 'login' // 跳转到登录页
    })
  } else if (token && to.name === 'login') {
    // 已登录且要跳转的页面是登录页
    next({
      name: 'index' // 跳转到 index 页
    })
  }
    next() // 跳转
})

// 跳转之后
router.afterEach(to => {

})

export default router
