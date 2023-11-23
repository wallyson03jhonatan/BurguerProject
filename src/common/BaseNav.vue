<template>
  <div class="nav vertical-padding-medium horizontal-padding-x-large">

    <RouterLink to="/home" class="logo__url">
      <img src="@/assets/img/logo.png" alt="Make your burguer" class="logo__img" title="Home">
    </RouterLink>

    <RouterLink to="/home" title="Home">Home</RouterLink>
    <RouterLink to="/orders" title="Orders">Orders</RouterLink>

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
  background: #222;
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
  margin: .5rem;
  color: #FCBA03;
  text-decoration: none;
  transition: .3s
}

.nav a:hover {
  color: #FFF
}
</style>