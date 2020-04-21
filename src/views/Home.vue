<template>
  <div id="home" :class="{ dark: dark }">
    <div id="nav">
      <NavBar curr="Home" />
    </div>
    <div class="wrapper">
      <div class="parallax__group main-container">
        <div
          class="parallax__layer layer-1"
          :class="{ darkWrapper: dark }"
        ></div>
        <div
          class="parallax__layer layer0"
          :class="{ darkWrapper: dark }"
        ></div>
        <div
          class="parallax__layer layer1"
          :class="{ darkWrapper: dark }"
        ></div>
        <div
          class="parallax__layer layer2"
          :class="{ darkWrapper: dark }"
        ></div>
        <div
          class="parallax__layer layer3"
          :class="{ darkWrapper: dark }"
        ></div>
        <div
          class="parallax__layer layer4"
          :class="{ darkWrapper: dark }"
        ></div>
        <div class="parallax__layer intro">
          <div class="sun" v-if="!dark"></div>
          <div class="moon" v-if="dark"></div>
          <div class="animation-container" :class="{ darkIntro: dark }">
            <Intro />
          </div>
        </div>
      </div>
      <div
        class="parallax__group info-container"
        :class="{ darkContent: dark }"
      >
        More content here
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import NavBar from "@/components/NavBar.vue";
import Intro from "@/components/Intro.vue";
export default {
  name: "Home",
  components: {
    NavBar,
    Intro
  },
  data: () => {
    return {};
  },
  computed: {
    dark() {
      return this.$store.state.isDark;
    }
  }
};
</script>

<style scoped lang="scss">

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#home {
  background: url("../assets/home/light-background.png");
  width: 100%;
  height: 100%;
}

.dark {
background: url("../assets/home/dark-background.jpg") !important;
 }

.wrapper {
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 300px;
}

.parallax__group{
  position: relative;
  height: 100vh;
  width: 100vw;
  transform-style: preserve-3d;
}

.parallax__layer{
  transition: all 0.5s ease;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.layer-1{

}

.layer0{
  background: url('../assets/home/layer_0.png') no-repeat center;
  background-size: cover;
  transform: translateZ(-600px) scale(3);
  z-index: 1;
}

.layer1{
  background: url('../assets/home/layer_1.png') no-repeat center;
  background-size: cover;
  transform: translateZ(-525px) scale(2.75);
  z-index: 2;
}

.layer2{
  background: url('../assets/home/layer_2.png') no-repeat center;
  background-size: cover;
  transform: translateZ(-400px) scale(2.333333333333);
  z-index: 3;
}

.layer3{
  background: url('../assets/home/layer_3.png') no-repeat center;
  background-size: cover;
  transform: translateZ(-250px) scale(1.8333333333333);
  z-index: 4;
}

.layer4{
  background: url('../assets/home/layer_4.png') no-repeat center;
  background-size: cover;
  transform: translateZ(-123px) scale(1.416777777);
  z-index: 5;
}

.animation-container{
  transition: all 0.5s ease;
  position: absolute;
  left: 40%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 17rem;
  height: 25rem;
}

.info-container{
  transition: all 0.5s ease;
  background: #3e4067;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.darkWrapper{
  transition: all 0.5s ease;
  filter: brightness(70%);
}

.darkContent{
  transition: all 0.5s ease;
  background: #2b2d48;
}

.darkIntro{
  transition: all 0.5s ease;
  filter: invert(1);
}

.sun{
  position: absolute;
  left: 60%;
  top: 30%;
  transform: translate(-50%, -50%);
  width: 17rem;
  height: 25rem;
  background: url("../assets/home/sun.png") no-repeat;
  background-size: 50%;
}

.moon{
  position: absolute;
  left: 67%;
  top: 35%;
  transform: translate(-50%, -50%);
  width: 17rem;
  height: 25rem;
  background: url("../assets/home/moon.png") no-repeat;
  background-size: 20%;
  filter: brightness(1.1);
}

</style>
