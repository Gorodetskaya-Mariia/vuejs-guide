<template>
    <div class="row">
      <form>
        <div clas="">
          <label>Quote</label>
          <textarea class="form-control" rows="3" v-model="quote"></textarea>
        </div>
        <div>
          <button class="btn" @click.prevent="createNew">Add Quote</button>
        </div>
      </form>
    </div>
</template>

<script>
  export default {
    data: function() {
      return {
        quote:''
      }
    },
    methods: {
      createNew() {

      }
    }
  };

</script>

<style>

</style>
