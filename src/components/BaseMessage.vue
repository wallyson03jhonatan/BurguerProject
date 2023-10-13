<template>
  <div class="container-message">
    <div 
      class="message padding-small bottom-margin-small" 
      :class="[`background-${msgType}`, `text-${msgType}`]"
      ref="container"
    >

      <i
        class="text-medium padding-small fas fa-check-circle"
        :class="{
          'fa-check-circle': msgType == 'success',
          'fa-info-circle': msgType == 'info',
          'fa-exclamation-circle': msgType == 'warning',
          'fa-times-circle': msgType == 'error',
        }"
      >
      </i>

      <p class="padding-small text-small">{{ msg }}</p>

    </div>
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
    data() {
      return {
        displayTime: null,
      }
    },
    computed: {
      classObject() {
        return {
          'alert-success': this.msgType === 'success',
          'alert-error': this.msgType === 'error',
          'alert-warning': this.msgType === 'warning',
          'alert-info': this.msgType === 'info',
        };
      },
    },
  }
</script>

<style scoped>
  .container-message {
    width: calc(100% - 1rem);
    max-width: 360px;
    position: fixed;
    top: 1rem;
    right: 50%;
    transform: translateX(50%);
    z-index: 2;
  } 
  .message {
    border-radius: .25rem;
    font-weight: 600;

    display: flex;
    align-items: center;
    border-radius: .25rem;
    overflow: hidden;
    box-shadow: -7px 15px 18px -5px rgba(0,0,0,0.33);

    transition-duration: .3s;
    animation-name: messageAnimation;
    animation-duration: .3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;
  }
  
  @keyframes messageAnimation {
    from {
      opacity: 0;
      margin-top: -10%;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
</style>