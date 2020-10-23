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
    SET_SKILLS: (state, skills) => {
      state.skills = skills;
    }
  },
  actions: {
    toggleDarkMode(context) {
      context.commit("TOGGLE_DARK_MODE");
    },
    setSkills(context, skills) {
      context.commit("SET_SKILLS", skills);
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
