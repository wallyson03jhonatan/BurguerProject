<template>
  <div class="container-order">
    <h1 class="bottom-margin-medium text-center">Order history</h1>
    <the-order />
  </div>
</template>

<script>
import TheOrder from "@/components/TheOrder.vue";

export default {
  name: 'OrderView',
  components: {
    TheOrder,
  },
}
</script>

<style scoped>
/* .container-order {
  height: 100vh;
} */
</style>