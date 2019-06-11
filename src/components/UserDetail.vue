<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name {{ switchName() }}</p>
        <button @click="resetName">Reset Name</button>
    </div>
</template>

<script>
  export default {
    props: {
      name: String,
      default: "Mariia"
      },
    methods: {
      switchName() {
        return this.name.split("").reverse().join("");
      },
      resetName() {
        this.name = "Mariia";
        this.$emit("nameWasReset", this.name);
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
    button {
      padding: 5px;
      margin-bottom: 25px;
      background-color: transparent;
      border: 1px solid black;
      border-radius: 5px;
    }
</style>
