<template>
  <div class="container-home">
    <h1 class="bottom-margin-medium text-center">Make your burger</h1>
    <the-form />
  </div>
</template>

<script>
import TheForm from "@/components/TheForm.vue";

export default {
  name: 'HomeView',
  components: {
    TheForm,
  },
}
</script>

<style scoped>
.container-home {
  height: 100vh;
}
</style>