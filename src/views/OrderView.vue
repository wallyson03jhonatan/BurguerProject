<template>
  <div>
    <h1 class="text-center">Order history</h1>
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

<style scoped></style>