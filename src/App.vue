<template>
  <div>
    <base-nav />
    <base-banner v-show="$route.path == '/home' || $route.path == '/'" />
    
    <RouterView class="container" />

    <base-footer />
  </div>
</template>

<script>
import BaseNav from '@/common/BaseNav.vue';
import BaseBanner from '@/common/BaseBanner.vue';
import BaseFooter from '@/common/BaseFooter.vue';
import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {
    BaseNav,
    BaseBanner,
    BaseFooter,
    RouterLink,
    RouterView,
  },
}
</script>


