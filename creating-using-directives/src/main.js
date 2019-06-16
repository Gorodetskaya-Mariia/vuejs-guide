import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
  bind(el, binding, vnode){
    var delay = 0;
    el.style.color = "green";
    el.style.color = binding.value;
    if(binding.arg =='color'){
      el.style.color = binding.value;
    } else {
      el.style.background = binding.value;
      el.style.color = 'black';
    }
    if(binding.modifiers['delayed']){
      delay = 3000;
    }
    setTimeout(() => {
      el.style.background = binding.value;
      el.style.color = 'white';
    }, delay);
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
