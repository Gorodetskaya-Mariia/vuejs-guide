<template>
    <div class="container">
        <div class="row">
            <div>
                <app-user></app-user>
            </div>
        </div>
    </div>
</template>

<script>
    import User from './components/User.vue';

    export default {
        components: {
            appUser: User
        }
    }
</script>

<style>
    div.component {
        border: 1px solid black;
        padding: 30px;
    }

   button {
      padding: 5px;
      margin-bottom: 25px;
      background-color: transparent;
      border: 1px solid black;
      border-radius: 5px;
    }
</style>
