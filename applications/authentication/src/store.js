import Vue from 'vue'
import Vuex from 'vuex'
import axios from './axios-auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null
  },
  mutations: {

  },
  actions: {
    signup({commit}, authData) {
      axios.post('/signupNewUser?key=AIzaSyB2h7vWlw0kDhxJqtFZjrhXCcgi7NvQyc4',{
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => console.log(res))
        .catch(error => console.log(error.response));
    },
    login({commit}, authData) {
      axios.post('/verifyPassword?key=AIzaSyB2h7vWlw0kDhxJqtFZjrhXCcgi7NvQyc4',{
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      })
        .then(res => console.log(res))
        .catch(error => console.log(error));
    }
  },
  getters: {

  }
})
