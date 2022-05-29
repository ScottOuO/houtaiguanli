import Vue from 'vue'
import App from './App.vue'
//引入eleme-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import router from '../router';
import store from '../store';
import http from 'axios';
import '../api/mock.js';

Vue.config.productionTip = false
//使用eleme-ui
Vue.use(ElementUI);

Vue.prototype.$http = http

new Vue({
  store,
  router,
  el: '#app',
  render: h => h(App),
}).$mount('#app')
