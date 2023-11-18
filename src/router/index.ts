import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../layouts/LoginView.vue'),
      children: [
        {
          path: '',
          name: 'login',
          component: () => import('../views/LoginView.vue'),
        },
      ],
    },
    {
      path: '/home',
      component: () => import('../layouts/MainView.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomeView.vue'),
        },
      ],
    },
  ],
});

export default router;
