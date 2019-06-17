export const fruitMixin = {
  data() {
    return {
      fruits: ["Banana", "Apple", "Mango", "Melon"],
      filterText: ""
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter(element => {
        return element.match(this.filterText);
      });
    }
  },
  created(){
    console.log('Created');
  }
}
