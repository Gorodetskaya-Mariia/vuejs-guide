<template>
    <div class="container">
      <button @click="selectedComponent = 'appQuote'">Quote</button>
      <button @click="selectedComponent = 'appAuthor'">Author</button>
      <button @click="selectedComponent = 'appNew'">New</button>
      <hr>
      <keep-alive>
        <component :is="selectedComponent">
          <p>Default Content</p>
        </component>
      </keep-alive>

      <!-- <app-quote>
        <h2 slot="title">{{ quoteTitle }}</h2>
        <p slot="content">A wonderful Quote!</p>
      </app-quote> -->
    </div>
</template>

<script>
  import Quote from './components/Quote.vue';
  import Author from './components/Author.vue';
  import New from './components/New.vue';

  export default {
    data: function() {
      return {
        quoteTitle: 'The Quotes',
        selectedComponent: 'appQuote'
      }
    },
    components: {
      appQuote: Quote,
      appAuthor: Author,
      appNew: New
    }
  };

</script>

<style>
  button {
    border-radius: 5px;
    padding: 10px;
    background-color: transparent;
  }
</style>

