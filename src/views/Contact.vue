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
  background-image: linear-gradient(
    0deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  width: 100vw;
  height: 100vh;
}
.dark {
  background: #222222 !important;
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