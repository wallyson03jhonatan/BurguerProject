<template>
  <div class="banner">
    <h1 class="banner__text">Make your burguer</h1>
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
    height: 50vh;

    background-image: url('/img/burguer.jpg'); 
    background-position: 0 60%; 
    background-size: cover;
    background-repeat: no-repeat;
  }
  .banner .banner__text {
    padding: 1.25rem;
    font-size: 3rem;
    text-align: center;
    background: rgba(0, 0, 0, 0.3); 
    color: #FCBA03;
  }

  @media screen and (max-width: 991px) {
    .banner {
      background-position: center; 
    }
    .banner__text {
      display: none;
    }
  }
</style>