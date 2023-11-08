<template>
  <div class="container-order">
    <h1 class="bottom-margin-medium text-center">Order history</h1>
    <the-orders />
  </div>
</template>

<script>
import TheOrders from "@/components/TheOrders.vue";

export default {
  name: 'OrderView',
  components: {
    TheOrders,
  },
}
</script>

<style scoped>
.container-order {
  height: 100vh;
}
</style>