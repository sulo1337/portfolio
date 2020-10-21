<template>
  <div id="contact" :class="{ dark: dark }">
    <div id="nav">
      <NavBar curr="Contact" />
    </div>
    <div class="contact__wrapper">
      <div id="canvas">
        <div class="img">
          <svg>
            <image :xlink:href="require(`../assets/contact/contact.svg`)" />
          </svg>
        </div>
        <div class="content">
          <div class="heading">Contact Me</div>
          <div class="form">
            <input type="text" />
          </div>
        </div>
      </div>
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
  background: rgb(43, 45, 72) !important;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(12, 16, 20, 1) 69%,
    rgba(0, 0, 0, 1) 100%
  ) !important;
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

#canvas {
  background-color: white;
  border-radius: 20px;
}

.img {
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(253, 203, 50, 1) 0%,
    rgba(244, 56, 98, 1) 100.2%
  );
  box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
  border-radius: 20px;
  width: 50%;
  transform: translate(-80px, 20px);
  display: flex;
  align-items: center;
  justify-content: center;
}

svg {
  margin: auto;
}
image {
  height: 60%;
  width: 60%;
}
</style>