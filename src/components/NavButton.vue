<template>
  <div id="nav-button">
    <div
      @click="route"
      :class="{ current: curr == path }"
      class="wrapper pulse"
    >
      <h3 class="placeholder heading">{{ text }}</h3>
      <h3 class="mainText heading" :class="{ darkbutton: dark }">{{ text }}</h3>
      <h3 class="hiddenText heading" :class="{ darkbutton: dark }">
        {{ text }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavButton",
  props: {
    curr: String,
    path: String,
    text: String
  },
  methods: {
    route: function() {
      if (this.path !== this.curr) {
        this.$router.push({ name: this.path });
      }
    }
  },
  computed: {
    dark() {
      return this.$store.state.isDark;
    }
  }
};
</script>

<style lang="scss">
.darkbutton {
  color: #fcf75e !important;
  background: none !important;
}
#nav-button {
  background: transparent !important;
  display: inline-block;
  color: #fd3838;
  margin-left: 25px;
  margin-right: 20px;
}

#nav-button:hover {
  cursor: pointer;
}

.heading {
  user-select: none;
  transition: all 0.3s ease;
}

.current {
  color: #000;
}

.current .darkbutton {
  color: #fff !important;
}

.wrapper {
  display: inline-block;
  overflow: hidden;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}

.placeholder {
  color: rgba(0, 0, 0, 0);
}

.mainText {
  position: absolute;
  top: 0px;
}

.hiddenText {
  position: absolute;
  top: -105%;
  filter: brightness(50%);
}

.wrapper:hover .mainText {
  top: 105%;
}

.wrapper:hover .hiddenText {
  top: 0px;
}

// // Animate the size, outside
// .pulse:hover,
// .pulse:focus {
//   animation: pulse 1s;
//   box-shadow: 0 0 0 2em rgba(#fff, 0);
// }

// @keyframes pulse {
//   0% {
//     box-shadow: 0 0 0 0 adjust-hue(#dc143c, 45deg);
//   }
// }
</style>
