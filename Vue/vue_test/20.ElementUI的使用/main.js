import Vue from 'vue'
import App from './App.vue'
//引入ElementUI
import ElementUI from 'element-ui';
//引入ElementUI的所有样式
import 'element-ui/lib/theme-chalk/index.css';
//应用ElementUI
Vue.use(ElementUI)

Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
