<template>
  <div class="container">
    <h1 class="bottom-margin-large text-center">Order history</h1>
    <base-orders />
  </div>
</template>

<script>
  import BaseOrders from "@/components/BaseOrders.vue";

  export default {
    name: 'OrderView',
    components: { 
      BaseOrders, 
    },
  }
</script>