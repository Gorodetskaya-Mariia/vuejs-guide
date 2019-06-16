<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'hjgbndgkb'"></p>
                <p v-html="'<strong>khvdjkfvb</strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Custom Directives</h1>
                <p v-highlight>Color</p>
                <p v-highlight="'red'">Color - using binding, without argument</p>
                <p v-highlight:color="'aqua'">Color - with argument</p>
                <p v-highlight:color.delayed="'grey'">Color - with modifier: delay</p>
                <p v-local-highlight:color="'black'">Color - locally</p>
                <p v-local-highlight:color.delayed.blink="{mainColor: 'black', secondColor: 'green', delay:'500'}">Color - using multiple modifiers with complex values locally</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      directives: {
        'local-highlight': {
          bind(el, binding, vnode){
            var delay = 0;

            if(binding.modifiers['delayed']) delay = 2000;

            if(binding.modifiers['blink']){
              let mainColor = binding.value.mainColor,
                  secondColor = binding.value.secondColor,
                  currentColor = mainColor;

              setTimeout(() => {
                setInterval(() => {
                  currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor;
                  el.style.color = currentColor;
                }, binding.value.delay);
              }, delay);
            }
          }
        }
      }
    }
</script>

<style>

</style>
