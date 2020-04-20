<template>
  <div class="about">
    <div id="nav">
      <NavBar curr="About" />
    </div>
    This is about page
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar
  }
};
</script>
