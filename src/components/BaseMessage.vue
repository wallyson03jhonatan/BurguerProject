<template>
  <div class="container-message" :class="!msg ? 'close': `message-${msgType}`">
    <p>{{ msg }}</p>
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
    top: 8%;
    left: 25%;
    right: 25%;
    z-index: 2;

    
    padding: 1rem;
    margin: 1.5rem auto;
    max-width: 25rem;
    border-radius: .25rem;
    font-weight: 600;

    transition: all .2s;
    animation-name: fadeIn;
    animation-duration: 2s;
    animation-direction: alternate;
  }
  @keyframes fadeIn {
    0%   { opacity: 0; }
    100% { opacity: 1; }
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
    transition: all .2s;
  }
</style>