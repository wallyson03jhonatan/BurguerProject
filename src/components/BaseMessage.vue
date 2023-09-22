<template>
  <div class="container-message" :class="!msg ? 'close': `message-${msgType}`">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
  export default {
    name: 'BaseMessage',
    props: {
      msg: String,
      msgType:{
        type: String,
        default: null,
        validator(value) {
          return ['success', 'error', 'warning', 'info', null].indexOf(value) !== -1;
        },
      }
    },
  }
</script>

<style scoped>
  .container-message {
    position: absolute;
    top: 10%;
    left: 25%;
    right: 25%;
    z-index: 2;

    border-radius: .25rem;
    padding: 1rem;
    margin: 1.5rem auto;
    max-width: 25rem;
    font-weight: 600;
    /* opacity: 0.8; */
    transition: all .3s;
  }
  .message-info {
    color: #5BC0DE;
    border: .125rem solid #5BC0DE;
    background-color: #CDECF5;
  }
  .message-success {
    color: #5CB85C;
    border: .125rem solid #5CB85C;
    background-color: #CEEACE;
    
  }
  .message-warning {
    color: #F0AD4E;
    border: .125rem solid #F0AD4E;
    background-color: #FAE6CA;
  }
  .message-error {
    color: #D9534F;
    border: .125rem solid #D9534F;
    background-color: #F4CBCA;;
  }
  .close {
    display: none;
    transition: all .5s;
  }
</style>