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
      ...routerConf.map(({ isCommon, ...item }) => {
        return {
          ...item,
          component: () => import(`@/views/${isCommon ? "common" : "pc"}/${item.component}`),
        };
      }),
    ],
  },
  {
    path: '/m',
    name: 'm',
    component: () => import('@/views/index.vue'),
    children: [
      ...routerConf.map(({ isCommon, ...item }) => {
        return {
          ...item,
          component: () => import(`@/views/${isCommon ? "common" : "m"}/${item.component}`),
        };
      }),
    ],
  },
];
debugger;
const router = new VueRouter({ routes });

export default router;
