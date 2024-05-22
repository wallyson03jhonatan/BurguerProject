<template>
  <div>

    <div v-if="loading" class="container-view">
      <the-loading />
    </div>

    <div v-else>
      <h1 class="bottom-margin-medium text-center">Make your burger</h1>
      <the-form />
    </div>

  </div>
</template>

<script>
import TheForm from "@/components/TheForm.vue";
import TheLoading from "@/components/TheLoading.vue";

export default {
  name: 'HomeView',
  components: {
    TheForm,
    TheLoading,
  },
  data() {
    return {
      loading: true,
    }
  },
  mounted () {
    window.scrollTo({
      top: 1000,
      behavior: 'smooth',
    });

    setTimeout(() => this.loading = false, 3000);
  },
}
</script>

<style scoped>
.container-view {
  min-height: 100dvh;
}
</style>
