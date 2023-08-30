import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import OrderView from "../views/OrderView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrderView
    }
  ]
})

export default router