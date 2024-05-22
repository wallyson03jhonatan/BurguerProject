<template>
  <i 
    class="fa-solid fa-spinner loading" 
    :class="$route.path == '/home' || $route.path == '/' ? 'fix-location-form': 'fix-location-order'"
  >
  </i>
</template>

<script>
  export default {
    name: 'TheLoading',
  }
</script>

<style scoped>
.fix-location-form {
  position: absolute;
  left: 50%;
  top: 150%;
}

.fix-location-order {
  position: absolute;
  left: 50%;
  top: 50%;
}
</style>