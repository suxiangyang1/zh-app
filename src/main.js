import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'


Vue.use(VueAxios,axios)

Vue.config.productionTip = false

//引入全局统一的存储库,使用Vues状态管理
import store from './store/index.js';
Vue.prototype.$store = store;


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
