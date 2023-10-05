<template>
  <div class="container">
    <h1 class="bottom-margin-large">Make your burger</h1>
    <base-form />
  </div>
</template>

<script>
  import BaseForm from "@/components/BaseForm.vue";

  export default {
    name: 'HomeView',
    components: { 
      BaseForm, 
    },
  }
</script>