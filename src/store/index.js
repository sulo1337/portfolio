/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDark: false,
    isLoaded: false,
    projects: [],
    isLoading: true,
  },
  mutations: {
    TOGGLE_DARK_MODE: state => {
      state.isDark = !state.isDark;
    },
    FETCH_PROJECTS: state => {
      const apiurl = process.env.VUE_APP_APIURL;
      return new Promise((res, rej) => {
        axios.get(apiurl)
          .then(async response => {
            await setTimeout(() => {
              state.projects = response.data;
              state.isLoading = false;
              res();
            }, 2000);
          })
          .catch(err => {
            console.log(err);
            rej(err);
          })
      });
    }
  },
  actions: {
    toggleDarkMode(context) {
      context.commit("TOGGLE_DARK_MODE");
    },
    fetchProjects(context) {
      context.commit("FETCH_PROJECTS")
    }
  },
  getters: {
    getMode: state => {
      return state.isDark;
    },
  },
  modules: {}
});
