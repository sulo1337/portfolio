/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDark: false,
  },
  mutations: {
    TOGGLE_DARK_MODE: state => {
      state.isDark = !state.isDark;
    }
  },
  actions: {
    toggleDarkMode(context) {
      context.commit("TOGGLE_DARK_MODE");
    }
  },
  getters: {
    getMode: state => {
      return state.isDark;
    }
  },
  modules: {}
});
