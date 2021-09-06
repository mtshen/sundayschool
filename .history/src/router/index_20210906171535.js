import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/index.vue'),
    children: [
      {
        path: '/birthday',
        name: 'birthday',
        component: () => import('@/views/pc/birthday/index.vue'),
      },
    ],
  },
  {
    path: '/m',
    name: 'm',
    component: () => import('@/views/index.vue'),
    children: [
      {
        path: 'birthday',
        name: 'birthday',
        component: () => import('@/views/mobile/birthday/index.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
