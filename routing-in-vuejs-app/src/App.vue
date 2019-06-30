<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Routing</h1>
                <router-view name="header-top"></router-view>
                <transition name="slide" mode="out-in">
                  <router-view></router-view>
                </transition>
                <hr>
                <router-view name="header-bottom"></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from './components/Header.vue'

    export default {
      components: {
        appHeader: Header
      }
    }
</script>

<style>
  .slide-enter-active {
    animation: slide-in 1s ease-in-out forwards;
  }
  .slide-move {
    transition: transform, opacity, 1s;
  }
  @keyframes slide-in {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>
