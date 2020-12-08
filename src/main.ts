import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import "@/assets/scss/common.scss"
import './plugins/element.js'
import comApi from "@/assets/ts/comm.api" // 公共api
import vant from 'vant';
import 'vant/lib/index.css';
Vue.use(vant);

Vue.config.productionTip = false
comApi.registerWXSDK()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
