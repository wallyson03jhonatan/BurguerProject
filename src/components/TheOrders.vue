<template>
  <div>
    <base-message v-show="alert.type" :msgType="alert.type" @close="alert = {}">
      <span v-html="alert.message"></span>
    </base-message>

    <div class="container-bar">
      <base-search />
    </div>

    <div>
      <base-order />
    </div>
  </div>
</template>

<script>
import BaseMessage from '@/components/BaseMessage.vue';
import BaseSearch from '@/components/BaseSearch.vue';
import BaseOrder from '@/components/BaseOrder.vue'

export default {
  name: 'TheOrders',
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


</style>