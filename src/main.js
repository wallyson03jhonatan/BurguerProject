import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { defineRule } from 'vee-validate';
import * as AllRules from '@vee-validate/rules';

const app = createApp(App)

Object.keys(AllRules).forEach(rule => {
  defineRule(rule, AllRules[rule]);
});

app.use(router);
app.mount('#app');