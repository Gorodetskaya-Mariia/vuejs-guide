import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://using-axios-e30c4.firebaseio.com/';
axios.defaults.headers.common['Authorization'] = 'jvhjf';
axios.defaults.headers.get['Accepts'] = 'applications/json';

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
