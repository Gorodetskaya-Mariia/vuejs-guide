<template>
    <div class="container">
      <app-quote>
        <h2 slot="title">{{ quoteTitle }}</h2>
        <p slot="content">A wonderful Quote!</p>
      </app-quote>
    </div>
</template>

<script>
  import Quote from './components/Quote.vue';

  export default {
    data: function() {
      return {
        quoteTitle: 'The Quotes'
      }
    },
    components: {
      appQuote: Quote
    }
  };

</script>

<style>

</style>

