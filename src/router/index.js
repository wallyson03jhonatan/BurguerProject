import { createRouter, createWebHistory } from 'vue-router';

const HomeView = () => import('@/views/HomeView.vue');
const OrderView = () => import('@/views/OrderView.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home', 
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/orders',
      name: 'orders',
      component: OrderView,
    }
  ]
})

export default router