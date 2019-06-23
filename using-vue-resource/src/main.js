import Vue from 'vue';
import VueResource from 'VueResource';
import App from './App.vue';

Vue.use(VueResource);
new Vue({
  el: '#app',
  render: h => h(App)
})
