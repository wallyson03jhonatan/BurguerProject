<template>
  <div>
    <the-banner />
    <div class="container">
      <h1>Make your burger</h1>
      <base-form />
    </div>
  </div>
</template>

<script>
  import TheBanner from "../components/TheBanner.vue";
  import BaseForm from "../components/BaseForm.vue";

  export default {
    name: 'HomeView',
    components: {
      TheBanner,
      BaseForm, 
    }
  }
</script>