import axios from 'axios';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import 'bulma/css/bulma.css';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://localhost:3000/';
Vue.prototype.axios = axios;


new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
