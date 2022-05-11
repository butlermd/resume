import { createRouter, createWebHistory } from 'vue-router';
import TraditionalResume from '../views/TraditionalResume.vue';
import About from '../views/About.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'resume',
      component: TraditionalResume,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
  ],
});

export default router;
