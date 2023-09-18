<template>
  <div class="container">
    <h1 class="bottom-margin-small">{{ title }}</h1>
    <base-form />
  </div>
</template>

<script>
  import BaseForm from "../components/BaseForm.vue";

  export default {
    name: 'HomeView',
    components: {
      BaseForm, 
    },
    data() {
      return {
        title: null,
      }
    },
    methods: {
      resize() {
        this.title = window.innerWidth <= 991 ? 'Make your burger': 'Choose your ingredients';
         
        window.addEventListener('resize', () => {
          return this.title = window.innerWidth <= 991 ? 'Make your burger': 'Choose your ingredients';
        });
      },
    },
    mounted() {
      this.resize()
    },
  }
</script>

<style scoped>
  .bottom-margin-small {
    margin-bottom: .5rem;
  }
</style>