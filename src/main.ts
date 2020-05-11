import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import "@/assets/scss/common.scss"
import './plugins/element.js'
import commEcharts from './assets/ts/comm.echarts'
import * as commFilter from "@/assets/ts/comm.filter";

Vue.config.productionTip = false
let filter_obj : any = commFilter
Object.keys(filter_obj).forEach(key => { // 全局注册自定义过滤器
  Vue.filter(key, filter_obj[key])
});
Vue.use(commEcharts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
