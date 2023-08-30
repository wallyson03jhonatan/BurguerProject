<template>
  <div class="banner">
    <h1 class="banner__text--title">Make your burguer</h1>
  </div>
</template>

<script>
  export default {
    name: 'TheBanner', 
  }
</script>

<style scoped>
  .banner{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 31.25rem;
    background-image: url('/img/burguer.jpg'); 
    background-position: 0 -15.625rem; 
    background-size: cover;
  }
  .banner .banner__text--title {
    margin-left: 2rem;
    padding: 1.25rem 2.5rem;
    font-size: 3.75rem;
    text-align: center;
    background: #222;
    color: #FCBA03;
  }
</style>