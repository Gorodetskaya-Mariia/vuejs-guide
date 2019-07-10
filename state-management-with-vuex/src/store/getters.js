/* allow us to access a state in different components: Result.vue, AnotherResult.vue */
export const value = state => {
  return state.value;
}
