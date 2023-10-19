<template>
  <div>
    <base-message 
      v-show="alert.type"
      :msgType="alert.type" 
      @close="alert = {}"
    >
      <span v-html="alert.message"></span>
    </base-message>

    <div class="container-grid grid-template-columns">
      <div class="background-gray padding-medium border-yellow">
        Order 1
      </div>
      <div class="background-gray padding-medium border-yellow">
        Order 2
      </div>
      <div class="background-gray padding-medium border-yellow">
        Order 3
      </div>
      <div class="background-gray padding-medium border-yellow">
        Order 4
      </div>

 

    </div>
  </div>

    <!-- 
      Order histories
      Filter  by Name / ID / Status 
      ID - Name - Bread - Steak - optionals - Burguer status
      Actions on order: Cancel (canceled + date) or confirm Burguer (completed + date) 
    -->
</template>

<script>
  import BaseMessage from '@/components/BaseMessage.vue';

  export default {
    name: 'BaseOrders',
    components: {
      BaseMessage,
    },
    data() {
      return {
        alert: {},
      }
    },
  }
</script>

<style scoped>
.container-grid {
  display: grid;
  max-width: 75rem;
  margin: 0 auto;
}
.grid-template-columns {
	grid-template-columns: repeat(3, 1fr);
}
</style>