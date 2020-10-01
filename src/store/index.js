/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isDark: false,
    projects: [{
      id: 1,
      name: "Project1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante est, rutrum eu efficitur eu, bibendum quis purus. Vestibulum bibendum varius massa id rutrum. Proin sed mi vehicula, sodales ligula sit amet, gravida augue. Proin placerat odio at pretium eleifend. Praesent ultrices, sapien non finibus pulvinar, erat nulla hendrerit mauris, at porta purus ex sed est. Vestibulum viverra, dui sed aliquet venenatis, quam velit fringilla sapien, semper varius lacus augue at lorem. Cras ac venenatis lorem, non fermentum dui. Donec id tristique tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non ex ligula. Suspendisse potenti. Curabitur eget consectetur sapien. Proin ornare, elit sed tempor porttitor, metus purus sollicitudin risus, nec vehicula ligula risus eget dui. Quisque interdum felis eu lectus feugiat, eu imperdiet lectus egestas.",
      link: "www.google.com",
      git: "ProjectGit4",
      date: "Projectdate1",
      tech: ['react', 'js', 'nodejs', 'aws', 'mongodb']
    }, {
      id: 2,
      name: "Project2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante est, rutrum eu efficitur eu, bibendum quis purus. Vestibulum bibendum varius massa id rutrum. Proin sed mi vehicula, sodales ligula sit amet, gravida augue. Proin placerat odio at pretium eleifend. Praesent ultrices, sapien non finibus pulvinar, erat nulla hendrerit mauris, at porta purus ex sed est. Vestibulum viverra, dui sed aliquet venenatis, quam velit fringilla sapien, semper varius lacus augue at lorem. Cras ac venenatis lorem, non fermentum dui. Donec id tristique tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non ex ligula. Suspendisse potenti. Curabitur eget consectetur sapien. Proin ornare, elit sed tempor porttitor, metus purus sollicitudin risus, nec vehicula ligula risus eget dui. Quisque interdum felis eu lectus feugiat, eu imperdiet lectus egestas.",
      link: "Projectlink2",
      git: "ProjectGit4",
      date: "Projectdate2",
      tech: ['python', 'aws']
    }, {
      id: 3,
      name: "Project3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante est, rutrum eu efficitur eu, bibendum quis purus. Vestibulum bibendum varius massa id rutrum. Proin sed mi vehicula, sodales ligula sit amet, gravida augue. Proin placerat odio at pretium eleifend. Praesent ultrices, sapien non finibus pulvinar, erat nulla hendrerit mauris, at porta purus ex sed est. Vestibulum viverra, dui sed aliquet venenatis, quam velit fringilla sapien, semper varius lacus augue at lorem. Cras ac venenatis lorem, non fermentum dui. Donec id tristique tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non ex ligula. Suspendisse potenti. Curabitur eget consectetur sapien. Proin ornare, elit sed tempor porttitor, metus purus sollicitudin risus, nec vehicula ligula risus eget dui. Quisque interdum felis eu lectus feugiat, eu imperdiet lectus egestas.",
      link: "Projectlink3",
      git: "ProjectGit4",
      date: "Projectdate3",
      tech: ['java', 'spring', 'docker']
    }, {
      id: 4,
      name: "Project4",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ante est, rutrum eu efficitur eu, bibendum quis purus. Vestibulum bibendum varius massa id rutrum. Proin sed mi vehicula, sodales ligula sit amet, gravida augue. Proin placerat odio at pretium eleifend. Praesent ultrices, sapien non finibus pulvinar, erat nulla hendrerit mauris, at porta purus ex sed est. Vestibulum viverra, dui sed aliquet venenatis, quam velit fringilla sapien, semper varius lacus augue at lorem. Cras ac venenatis lorem, non fermentum dui. Donec id tristique tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non ex ligula. Suspendisse potenti. Curabitur eget consectetur sapien. Proin ornare, elit sed tempor porttitor, metus purus sollicitudin risus, nec vehicula ligula risus eget dui. Quisque interdum felis eu lectus feugiat, eu imperdiet lectus egestas.",
      link: "Projectlink4",
      git: "ProjectGit4",
      date: "Projectdate4",
      tech: ['html', 'css', 'npm']
    }],
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
