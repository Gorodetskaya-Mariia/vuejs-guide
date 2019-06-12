<template>
<div>
  <div>
    <h3>The Author</h3>
  </div>
  <div>
    <slot name="content"></slot>
  </div>
</div>

</template>

<script>
export default {
  props: ['quote']
}
</script>

<style scoped>

</style>
