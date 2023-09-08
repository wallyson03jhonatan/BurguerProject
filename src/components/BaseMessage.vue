<template>
  <div class="message-container">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
  export default {
    name: 'BaseMessage',
    props: {
      msg: String,
    },
  }
</script>

<style scoped>
  .message-container {
    color: #004085;
    background: #CCE5FF;
    border: .125rem solid #B8DAFF;
    border-radius: .5rem;
    padding: .5rem;
    margin: 1.5rem auto;
  }
</style>