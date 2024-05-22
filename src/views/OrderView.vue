<template>
  <div>

    <div v-if="loading" class="container-view">
      <the-loading />
    </div>

    <div v-else>
      <h1 class="text-center">Order history</h1>
      <the-order />
    </div>
   
  </div>
</template>

<script>
import TheOrder from "@/components/TheOrder.vue";
import TheLoading from "@/components/TheLoading.vue";

export default {
  name: 'OrderView',
  components: {
    TheOrder,
    TheLoading,
  },
  data() {
    return {
      loading: true,
    }
  },
  mounted () {
    setTimeout(() => this.loading = false, 3000);
  },
}
</script>

<style scoped>
.container-view {
  min-height: 100dvh;
}
</style>