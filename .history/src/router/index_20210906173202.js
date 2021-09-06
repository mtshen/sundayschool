import Vue from 'vue';
import VueRouter from 'vue-router';
import routerConf from './routerConf';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'pc',
    component: () => import('@/views/index.vue'),
    children: [
      ...routerConf.map(item => {
        return {
          ...item,
          component: () => import(`@/views/pc/${item.component}`),
        };
      }),
    ],
  },
  {
    path: '/m',
    name: 'm',
    component: () => import('@/views/index.vue'),
    children: [
      ...routerConf.map(item => {
        return {
          ...item,
          component: () => import(`@/views/m/${item.component}`),
        };
      }),
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
