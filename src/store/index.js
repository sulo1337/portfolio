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
    skills: [],
    projectLoading: true,
    skillLoading: true,
  },
  mutations: {
    TOGGLE_DARK_MODE: state => {
      state.isDark = !state.isDark;
    },
    SET_PROJECTS: (state, projects) => {
      state.projects = projects;
    },
    FETCH_SKILLS: state => {
      const apiurl = process.env.VUE_APP_SKILLURL;
      return new Promise((res, rej) => {
        axios.get(apiurl)
          .then(async response => {
            state.skills = response.data;
            state.skillLoading = false;
            res();
          })
          .catch(err => {
            console.log(err);
            rej(err);
          })
      })
    }
  },
  actions: {
    toggleDarkMode(context) {
      context.commit("TOGGLE_DARK_MODE");
    },
    fetchSkills(context) {
      context.commit("FETCH_SKILLS");
    },
    setProjects(context, projects) {
      context.commit("SET_PROJECTS", projects);
    }
  },
  getters: {
    getMode: state => {
      return state.isDark;
    },
  },
  modules: {}
});
