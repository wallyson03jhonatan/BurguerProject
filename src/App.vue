<template>
  <div>

    <div id="content-teste">
      
      <nav>
        <the-nav/>
      </nav>
    
      <section>
        <RouterView />
      </section>
      
    </div>

    <footer>
      <the-footer />
    </footer>
    
  </div>
</template>

<script>
  import TheNav from '@/components/TheNav.vue';
  import TheFooter from '@/components/TheFooter.vue';
  import { RouterLink, RouterView } from 'vue-router';

  
  export default {
    components: {
      TheNav,
      TheFooter,
    },
  }

</script>


