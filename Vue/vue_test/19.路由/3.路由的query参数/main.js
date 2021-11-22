import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
//应用Vuerouter插件
Vue.use(VueRouter)
//引入路由器
import router from './router/index'

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router:router
}).$mount('#app')
