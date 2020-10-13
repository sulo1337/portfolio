<template>
  <div id="nav-bar">
    <div>
      <NavButton :curr="curr" text="Home" path="Home" />
      <NavButton :curr="curr" text="Projects" path="Projects" />
      <NavButton :curr="curr" text="Skills" path="Skills" />
      <NavButton :curr="curr" text="Contact" path="Contact" />
    </div>
  </div>
</template>

<script>
import NavButton from "@/components/NavButton.vue";
/* eslint-disable */
export default {
  name: "NavBar",
  props: {
    curr: String
  },
  components: {
    NavButton
  }
};
</script>

<style>
/* #nav-bar {
} */
</style>