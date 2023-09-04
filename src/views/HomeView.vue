<template>
  <div>
    <the-banner />
    <div class="container">
      <h1>{{ title }}</h1>
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
    },
    data() {
      return {
        title: 'Choose your ingredients',
      }
    },
    methods: {
      resize() {
        if (window.innerWidth <= 991) this.title = 'Make your burger';
         
        window.addEventListener('resize', () => {
          if (window.innerWidth <= 991) return this.title = 'Make your burger';
          this.title = 'Choose your ingredients';
        });
      },
    },
    mounted() {
      this.resize()
    },
  }
</script>

<style scoped>

</style>