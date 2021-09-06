import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bodyWidth: 0,
    isMobile: false,
  },
  mutations: {
    SET_BODY_WIDTH(state, value) {
      state.bodyWidth = value;
      state.isMobile = value <= 960;
    },
  },
  actions: {
    setBodyWidth({ commit }, data) {
      commit('SET_BODY_WIDTH', data);
    },
  },
  modules: {
  },
});
