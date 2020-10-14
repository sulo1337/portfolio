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
    FETCH_PROJECTS: state => {
      const apiurl = process.env.VUE_APP_PROJECTURL;
      console.log(apiurl);
      return new Promise((res, rej) => {
        axios.get(apiurl)
          .then(async response => {
            await setTimeout(() => {
              state.projects = response.data;
              state.projectLoading = false;
              res(response.data);
            }, 2000);
          })
          .catch(err => {
            console.log(err);
            rej(err);
          })
      });
    },
    FETCH_SKILLS: state => {
      const apiurl = process.env.VUE_APP_SKILLURL;
      console.log(apiurl);
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
    fetchProjects(context) {
      context.commit("FETCH_PROJECTS")
    },
    fetchSkills(context) {
      context.commit("FETCH_SKILLS");
    }
  },
  getters: {
    getMode: state => {
      return state.isDark;
    },
  },
  modules: {}
});
