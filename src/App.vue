<template>
  <div>
    <nav>
      <base-nav />
    </nav>

    <section class="container">
      <RouterView />
    </section>

    <footer>
      <base-footer />
    </footer>
  </div>
</template>

<script>
import BaseNav from '@/components/BaseNav.vue';
import BaseFooter from '@/components/BaseFooter.vue';
import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {
    BaseNav,
    BaseFooter,
  },
}
</script>


