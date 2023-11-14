import { createApp } from 'vue'
import App from '@/App.vue'

// Vue Router
import router from '@/router'

// Vuex
import store from '@/store'

// VeeValidate
import { defineRule } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';

const app = createApp(App)

Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});

app.use(router);
app.use(store);
app.mount('#app');