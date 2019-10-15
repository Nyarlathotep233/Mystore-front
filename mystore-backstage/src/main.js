import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import 'bootstrap/dist/css/bootstrap.min.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.config.productionTip = false
// 打开调试模式
Vue.config.devtools = true

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')