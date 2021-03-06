import Vue from 'vue';
import VueRouter from 'vue-router';
import routerConf from './routerConf';

Vue.use(VueRouter);

const routes = [
  {
    path: '/pc',
    name: 'pc',
    component: () => import('@/views/index.vue'),
    children: [
      ...routerConf.map(({ pcComponent, mobileComponent, ...item }) => ({
        ...item,
        component: pcComponent,
      })),
    ],
  },
  {
    path: '/m',
    name: 'm',
    component: () => import('@/views/index.vue'),
    children: [
      ...routerConf.map(({ pcComponent, mobileComponent, ...item }) => ({
        ...item,
        component: mobileComponent,
      })),
    ],
  },
];
const router = new VueRouter({ routes });

export default router;
