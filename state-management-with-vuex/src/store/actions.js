  /* to commit the mutations: commit({name of mutation}, passed value)*/
export const updateValue = ({commit}, payload) => {
  commit('updateValue', payload);
}
