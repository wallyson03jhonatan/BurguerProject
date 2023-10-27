<template>
  <div>
    <base-message v-show="alert.type" :msgType="alert.type" @close="alert = {}">
      <span v-html="alert.message"></span>
    </base-message>

    <div class="container-bar">
      <base-search />
    </div>

    <div class="container-grid grid-template-columns">
      <base-order />
    </div>
  </div>
</template>

<script>
import BaseMessage from '@/components/BaseMessage.vue';
import BaseSearch from '@/components/BaseSearch.vue';
import BaseOrder from '@/components/BaseOrder.vue'

export default {
  name: 'BaseOrders',
  components: {
    BaseMessage,
    BaseSearch,
    BaseOrder,
  },
  data() {
    return {
      alert: {},
    }
  },
}
</script>

<style scoped>
.container-bar {
  max-width: 25rem;
  margin: 0 auto;
  border: 1px solid orange;
  padding: 16px;
}

.container-grid {
  display: grid;
  max-width: 75rem;
  margin: 0 auto;
  padding: 1rem;
}

.grid-template-columns {
  grid-template-columns: repeat(3, 1fr);
}
</style>