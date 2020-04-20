<template>
  <div id="nav-button">
    <div @click="route" :class="{ current: curr == path }">
      <h3>{{ text }}</h3>
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
      this.$router.push({ name: this.path });
    }
  }
};
</script>

<style>
#nav-button {
  display: inline-block;
  color: rgba(0, 0, 0, 0.5);
}

#nav-button:hover {
  cursor: pointer;
}

.current {
  color: rgba(0, 0, 0, 1);
}
</style>
