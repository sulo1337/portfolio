<template>
  <div id="app" :class="{ dark: dark }">
    <div id="toggleDark">
      <!-- <ion-icon
        v-if="dark"
        name="sunny-outline"
        @click="toggleDarkMode"
        style="filter: invert(0);"
        class="dayNight"
      >
      </ion-icon>
      <ion-icon
        v-if="!dark"
        name="moon-outline"
        @click="toggleDarkMode"
        class="dayNight"
      >
      </ion-icon> -->
      <div class="toggle toggle--daynight">
        <input
          type="checkbox"
          id="toggle--daynight"
          class="toggle--checkbox"
          @click="toggleDarkMode"
        />
        <label class="toggle--btn" for="toggle--daynight"
          ><span class="toggle--feature"></span
        ></label>
      </div>
    </div>
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import "@/assets/toggle.scss";
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
// ibm plex
// @import url("https://fonts.googleapis.com/css?family=IBM+Plex+Serif&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap");
// #app {
//   animation: fadeInAnimation ease 1s;
//   animation-iteration-count: 1;
//   animation-fill-mode: forwards;
// }

// @keyframes fadeInAnimation {
//   0% {
//     transform: scale(0) translateZ(-600px);
//     opacity: 0;
//   }
//   100% {
//     transform: scale(1) translateZ(0);
//     opacity: 1;
//   }
// }
* {
  margin: 0;
}
#app {
  font-family: "Roboto Slab", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  height: 100vh;
  background-color: #ffffff;
  color: #000000;
  position: relative;
  overflow: hidden;
}

#toggleDark {
  display: inline-block;
  position: absolute;
  z-index: 1000;
  height: auto;
  right: 1%;
  transform: scale(1);
  transition: transform 0.2s ease-in-out;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

#toggleDark:hover {
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.2s ease-in-out;
}

#nav {
  text-align: left;
  position: absolute;
  padding-top: 20px;
  padding-left: 20px;
  width: 100vw;
  background-color: transparent;
  z-index: 999;
}

.darkBulb {
  filter: invert(0);
}

.dayNight {
  padding-top: 20px;
  padding-right: 10px;
  transform: scale(2.5);
}

@keyframes twinkle {
  0% {
    transform: scale(1, 1);
    background: rgba(255, 255, 255, 0);
    animation-timing-function: ease-in;
  }
  60% {
    transform: scale(0.8, 0.8);
    background: rgba(255, 255, 255, 1);
    animation-timing-function: ease-out;
  }
  80% {
    background: rgba(255, 255, 255, 0);
    transform: scale(1, 1);
  }
  100% {
    background: rgba(255, 255, 255, 0);
    transform: scale(1, 1);
  }
}
</style>
