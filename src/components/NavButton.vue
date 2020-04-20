<template>
  <div id="nav-button">
    <div @click="route" :class="{ current: curr == path }" class="wrapper">
      <h3 class="placeholder heading">{{ text }}</h3>
      <h3 class="mainText heading">{{ text }}</h3>
      <h3 class="hiddenText heading">{{ text }}</h3>
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
  }
};
</script>

<style>
#nav-button {
  display: inline-block;
  color: #1c98c7;
  margin-left: 20px;
  margin-right: 20px;
}

#nav-button:hover {
  cursor: pointer;
}

.heading {
  transition: all 0.3s ease;
}

.current {
  color: #09213f;
}

.wrapper {
  display: inline-block;
  overflow: hidden;
  position: relative;
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
  top: 105%;
  filter: brightness(50%);
}

.wrapper:hover .mainText {
  top: -105%;
}

.wrapper:hover .hiddenText {
  top: 0px;
}
</style>
