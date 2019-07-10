 /* to change our state we use mutations, mutations take state as import, payload is a data we pass to mutate the state*/
export const  updateValue = (state, payload) => {
  state.value = payload;
}
