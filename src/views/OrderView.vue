<template>
  <div class="container">
    <h1 class="text-center">Pedidos</h1>
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