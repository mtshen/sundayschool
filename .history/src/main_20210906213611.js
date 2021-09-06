import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 载入第三方依赖
import './plugins';

Vue.config.productionTip = false;

// 路由守卫
router.beforeEach((to, from, next)=> {
  debugger;
  const { fullPath } = to;
  const { isMobile } = store.state;
  if (isMobile) {
    next(fullPath.replace('/pc/', '/m/'));
  } else {
    next(fullPath.replace('/m/', '/pc/'));
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
