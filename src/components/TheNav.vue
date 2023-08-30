<template>
  <div class="nav">
    <RouterLink to="/home" class="logo__url">
      <img src="/img/logo.png" alt="Make your burguer" class="logo__img">
    </RouterLink>
    <RouterLink to="/home">Home</RouterLink>
    <RouterLink to="/orders">Pedidos</RouterLink>
  </div>  
</template>

<script>
  export default {
    name: "TheNav",
  }
</script>

<style scoped>
  .nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 1rem 3.125rem;
    background: #222;
    border-bottom: 0.25rem solid #111;
  }
  .nav .logo__url {
    margin: auto;
    margin-left: 0;
  }
  .logo__img {
    width: 2.5rem;
    height: 2.5rem;
  }
  .nav a {
    margin: 0.75rem;
    color: #FCBA03;
    text-decoration: none;
    transition: .5s
  }
  .nav a:hover {
    color: #FFF
  }
</style>