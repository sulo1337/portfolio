<template>
  <div id="home" :class="{ dark: dark }">
    <div class="star__wrapper" v-if="dark">
      <div
        class="star"
        v-for="index in 100"
        :key="index"
        :style="
          'animation: twinkle ' +
            getRandom() +
            's linear ' +
            getRandom() +
            's infinite;' +
            'top: ' +
            getRandomHeight() +
            'px;' +
            'left: ' +
            getRandomWidth() +
            'px;'
        "
      ></div>
    </div>
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
          <!-- <div class="sun" v-if="!dark"></div>
          <div class="moon" v-if="dark"></div> -->
          <div class="animation-container" :class="{ darkIntro: dark }">
            <Intro />
          </div>
        </div>
      </div>
      <div
        class="parallax__group info-container"
        :class="{ darkContent: dark }"
      >
        <div class="info-wrapper">
          <img src="@/assets/home/mypic.jpg" alt="Sulochan Acharya" />

          <div class="text-container">
            <h1 class="text">Sulochan Acharya</h1>
            <h3 class="text">FullStack Developer</h3>
            <h3 class="introduction text">
              I am a inquisitive, energetic Computer Science student skilled in
              leadership, with a strong foundation in math, and programming
              logic. I am seeking to leverage my skills with a focus on
              collaboration, communication, passion, and creativity as a
              software engineer or web developer.
              <br />
              <a href="https://www.linkedin.com/in/sulo1337/" target="_blank"
                ><ion-icon name="logo-linkedin" class="social"></ion-icon
              ></a>
              <a href="https://github.com/sulo1337" target="_blank"
                ><ion-icon name="logo-github" class="social"></ion-icon
              ></a>
              <a
                href="https://www.facebook.com/sulochan.acharya"
                target="_blank"
                ><ion-icon name="logo-facebook" class="social"></ion-icon
              ></a>
              <a href="https://www.instagram.com/sulo1337/" target="_blank"
                ><ion-icon name="logo-instagram" class="social"></ion-icon
              ></a>
            </h3>
          </div>
        </div>
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
  },
  methods: {
    getRandom() {
      return 2 + Math.random() * 5;
    },
    getRandomHeight() {
      return Math.random() * window.innerHeight;
    },
    getRandomWidth() {
      return Math.random() * window.innerWidth;
    }
  }
  // beforeCreate: async function() {
  //   try {
  //     await this.$store.dispatch("fetchProjects");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
};
</script>

<style scoped lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#home {
  // background: url("../assets/home/light-background.png");
  background-image: linear-gradient(
    0deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  width: 100%;
  height: 100%;
}

.dark {
  // background: url("../assets/home/dark-background.jpg") !important;
  background: rgb(43, 45, 72) !important;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(12, 16, 20, 1) 69%,
    rgba(0, 0, 0, 1) 100%
  ) !important;
}

.wrapper {
  @keyframes fadein {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
  animation: fadein;
  animation-duration: 1s;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 300px;
}

.parallax__group {
  position: relative;
  height: 100vh;
  width: 100vw;
  transform-style: preserve-3d;
}

.parallax__layer {
  transition: all 0.5s ease;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

// .layer-1{

// }

.layer0 {
  background: url("../assets/home/layer_0.png") no-repeat center;
  background-size: cover;
  transform: translateZ(-600px) scale(3);
  z-index: 1;
}

.layer1 {
  background: url("../assets/home/layer_1.png") no-repeat center;
  background-size: cover;
  transform: translateZ(-525px) scale(2.75);
  z-index: 2;
}

.layer2 {
  background: url("../assets/home/layer_2.png") no-repeat center;
  background-size: cover;
  transform: translateZ(-400px) scale(2.333333333333);
  z-index: 3;
}

.layer3 {
  background: url("../assets/home/layer_3.png") no-repeat center;
  background-size: cover;
  transform: translateZ(-250px) scale(1.8333333333333);
  z-index: 4;
}

.layer4 {
  background: url("../assets/home/layer_4.png") no-repeat center;
  background-size: cover;
  transform: translateZ(-123px) scale(1.416777777);
  z-index: 5;
}

.animation-container {
  transition: all 0.5s ease;
  position: absolute;
  left: 40%;
  top: 40%;
  transform: translate(-50%, -50%);
  width: 17rem;
  height: 25rem;
}

.info-container {
  transform: translateZ(0) scale(1);
  z-index: 8;
  background: rgb(62, 64, 103);
  background: linear-gradient(
    180deg,
    rgba(62, 64, 103, 1) 0%,
    rgba(200, 80, 192, 1) 69%,
    rgba(255, 204, 112, 1) 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 75px;
  color: #f5f5dc;
}

.darkWrapper {
  filter: brightness(70%);
}

.darkContent {
  background: rgb(43, 45, 72);
  background: linear-gradient(
    180deg,
    rgba(43, 45, 72, 1) 0%,
    rgba(12, 16, 20, 1) 69%,
    rgba(0, 0, 0, 1) 100%
  );
}

.darkIntro {
  filter: invert(1);
}

.sun {
  position: absolute;
  left: 60%;
  top: 30%;
  transform: translate(-50%, -50%);
  width: 17rem;
  height: 25rem;
  background: url("../assets/home/sun.png") no-repeat;
  background-size: 50%;
}

.moon {
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

.info-wrapper {
  width: 75%;
  border-radius: 20px;
}

.info-wrapper img {
  width: 70%;
  margin: 0.5rem 0;
  border-radius: 50%;
  background-image: linear-gradient(
    109.6deg,
    rgba(255, 24, 134, 1) 11.2%,
    rgba(252, 232, 68, 1) 52%,
    rgba(53, 178, 239, 1) 100.2%
  );
  padding: 20px;
}

.info-wrapper h2,
.info-wrapper h3 {
  margin-bottom: 1rem;
}

.text-container {
  display: block;
  width: 100%;
  margin: auto;
  text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
    0px 18px 23px rgba(0, 0, 0, 0.1);
}

.text-container h1 {
  font-size: 3rem;
}

.text-container h3:nth-of-type(1) {
  font-weight: 200;
  font-size: 0.75rem;
}

.text-container h3:nth-of-type(2) {
  font-size: 1.2rem;
  margin-bottom: 0rem;
}

@media (min-width: 760px) {
  .info-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3rem;
    align-items: center;
    text-align: center;

    img {
      position: relative;
      left: 20%;
    }

    .text-container {
      position: relative;
      right: 20%;
      width: 75%;
    }
  }
}

a {
  color: white;
  -webkit-tap-highlight-color: transparent;
}

a:visited {
  color: white;
}
.social {
  transform: scale(2.5);
  margin: 20px;
  padding: 5px;
  padding-top: 15px;
  -webkit-tap-highlight-color: transparent;
}

.social:hover {
  transform: scale(3);
  filter: invert(0.5);
}

.introduction {
  text-align: center;
  font-weight: 50;
}

.star {
  z-index: 0;
  position: fixed;
  width: 5px;
  height: 5px;
  background: rgba(255, 255, 255, 0);
  border-radius: 5px;
}
</style>
