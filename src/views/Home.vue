<template>
  <div id="home">
    <div id="nav">
      <NavBar curr="Home" />
    </div>

    This is home page
  </div>
</template>

<script>
/* eslint-disable */
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Home",
  components: {
    NavBar
  },
  data: () => {
    return {};
  },
  computed: {}
};
</script>

<style scoped>
#home {
  height: 100vh;
}
</style>
