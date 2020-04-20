<template>
  <div id="app" :class="{ dark: dark }" class="main">
    <div id="toggleDark">
      <button @click="toggleDarkMode">Mode</button>
    </div>
    <router-view />
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "App",
  computed: {
    dark() {
      return this.$store.state.isDark;
    }
  },
  methods: {
    toggleDarkMode: function() {
      this.$store.dispatch("toggleDarkMode");
    }
  }
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
}

.main {
  height: 100vh;
  background-color: #ffffff;
  color: #000000;
}
.dark {
  filter: invert(90%);
  height: 100vh;
}

#toggleDark{
  position: absolute;
  right: 0%;
  top: 0%;
}
</style>
