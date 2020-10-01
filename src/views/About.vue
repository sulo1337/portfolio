<template>
  <div id="about" :class="{ dark: dark }">
    <div id="nav">
      <NavBar curr="About" />
    </div>
    <div class="about__wrapper">
      This is about page. Under construction.
      <div id="canvas"></div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar
  },
  computed: {
    dark() {
      return this.$store.state.isDark;
    }
  }
};
</script>

<style lang="scss" scoped>
#about {
  background: #7ddaf8;
  width: 100vw;
  height: 100vh;
}

.dark {
  background: #222222 !important;
  background-blend-mode: multiply;
  color: white;
}

.about__wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
}
</style>
