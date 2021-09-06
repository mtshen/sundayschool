const routerConf = [
  {
    path: 'birthday',
    name: 'birthday',
    pcComponent: () => import('@/views/common/birthday/index.vue'),
    mobileComponent: () => import('@/views/common/birthday/index.vue'),
  },
];

export default routerConf;
