<template>
  <div>
    <the-nav/>
    <RouterView />
    <the-footer />
  </div>
</template>

<script>
  import TheNav from './components/TheNav.vue';
  import TheFooter from './components/TheFooter.vue';
  import { RouterLink, RouterView } from 'vue-router';

  export default {
    components: {
      TheNav,
      TheFooter,
    },
  }
</script>

<style>
  * {
    font-family: Helvetica;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  } 
  h1 {
    font-size: 2.625rem;
    text-align: center;
    color: #222;
  }
  .container {
    margin: 3.125rem;
    min-height: 15.625rem;
  }
</style>