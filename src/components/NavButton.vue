<template>
  <div id="nav-button">
    <div @click="route" :class="{ current: curr == path }" class="wrapper">
      <h3 class="placeholder heading">{{ text }}</h3>
      <h3 class="mainText heading" :class="{ dark: dark }">{{ text }}</h3>
      <h3 class="hiddenText heading" :class="{ dark: dark }">{{ text }}</h3>
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

<style>
.dark {
  color: #fcf75e;
}
#nav-button {
  display: inline-block;
  color: #e42600;
  margin-left: 25px;
  margin-right: 20px;
}

#nav-button:hover {
  cursor: pointer;
}

.heading {
  transition: all 0.3s ease;
}

.current {
  color: #999;
}

.current .dark {
  color: #999;
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
</style>
