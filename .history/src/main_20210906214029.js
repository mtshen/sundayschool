import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 载入第三方依赖
import './plugins';

Vue.config.productionTip = false;

// 路由守卫
router.beforeEach((to, from, next)=> {
  const { fullPath } = to;
  const { isMobile } = store.state;
  let path = '/';
  if (!/\/(m|pc)\//.exec(fullPath)) {
    return next();
  } else if (isMobile) {
    path = fullPath.replace('/pc/', '/m/');
  } else {
    path = fullPath.replace('/m/', '/pc/');
  }
  if (path === fullPath) {
    next();
  } else {
    next(path);
  }
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
