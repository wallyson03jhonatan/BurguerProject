<template>
  <div class="full">
    <!-- <h4>Search bar | Filter by: Name - ID - Status</h4> -->
    <label for="search" class="text-bold text-medium"> Search your order:
      <input 
        name="search"
        type="text" 
        v-model="search" 
        class="full search" 
        placeholder="Search your order by name or ID" 
        @input="sendValue"
      >
    </label>  
  </div>
</template>

<script>
export default {
  name: 'BaseSearch',
  data() {
    return {
      search: null,
    }
  },
  methods: {
    sendValue() {
      this.$emit('callback', this.search);
    }
  },
}
</script>

<style scoped>
.full {
  width: 100%;
}

.search {
  padding: .5rem .75rem;
  border-radius: .25rem;
}
</style>