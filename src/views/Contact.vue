<template>
  <div id="contact" :class="{ dark: dark }">
    <div id="nav">
      <NavBar curr="Contact" />
    </div>
    <div class="contact__wrapper">
      This is contact page. Under construction.
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
/* eslint-disable */
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
#contact {
  background: url("../assets/home/light-background.png");
  width: 100vw;
  height: 100vh;
}

.dark {
  background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    ) !important;
  background-blend-mode: multiply;
  color: white;
}

.contact__wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
}
</style>