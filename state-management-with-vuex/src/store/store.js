import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    counter: 0,  /*set up an initial state */
    value: 0
  },
  /* allow us to access a state in different components: Result.vue, AnotherResult.vue */
  getters: {
    doubleCounter: state=> {
      return state.counter * 2;
    },
    stringCounter: state=> {
      return state.counter;
    },
    value: state => {
      return state.value;
    }
  },
  /* to change our state we use mutations, mutations take state as import, payload is a data we pass to mutate the state*/
  mutations: {
    increment: (state, payload) => {
      state.counter += payload;
    },
    decrement: (state, payload) => {
      state.counter -= payload;
    },
    updateValue: (state, payload) => {
      state.value = payload;
    }
  },
  /* to commit the mutations: commit({name of mutation}, passed value)*/
  actions: {
    // es6
    increment:({ commit }, payload) => {
      commit('increment', payload);
    },
    decrement:({ commit }, payload) => {
      commit('decrement', payload);
    },
    // es5
    // increment: context => {
    //   context.commit('increment');
    // }
    asyncIncrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('increment', payload.by);
      }, payload.duration);
    },
    asyncDecrement: ({ commit }, payload) => {
      setTimeout(() => {
        commit('decrement', payload.by);
      }, payload.duration);
    },
    updateValue({commit}, payload) {
      commit('updateValue', payload);
    }
  }
});
