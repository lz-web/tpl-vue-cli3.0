import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import "@/assets/scss/common.scss"
import './plugins/element.js'
import commEcharts from './assets/ts/comm.echarts'

Vue.config.productionTip = false
Vue.use(commEcharts)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
