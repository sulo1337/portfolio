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
        <div class="info-wrapper">
          <img src="@/assets/home/mypic.jpg" alt="Sulochan Acharya" />
          <div class="text-container">
            <h1>Sulochan Acharya</h1>
            <h3>Computer Science Senior</h3>
            <h3>
              I am a inquisitive, energetic Computer Science student skilled in
              leadership, with a strong foundation in math, and programming
              logic. skills with a focus on collaboration, communication,
              passion, and creativity as a software engineer or web developer.
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

// .layer-1{

// }

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
  transform: translateZ(0) scale(1);
  z-index: 8;
  background: #3e4067;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 75px;
  color: #f5f5dc;
}

.darkWrapper{

  filter: brightness(70%);
}

.darkContent{

  background: #2b2d48;
}

.darkIntro{

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

.info-wrapper {
  width: 75%;
  border-radius: 20px;
}

.info-wrapper img {
  width: 70%;
  margin: 0.5rem 0;
 border-radius: 50%;
 border: 3px solid red; 
}

.info-wrapper h2, .info-wrapper h3{
  margin-bottom: 1rem;
}

.text-container{
  display: block;
  width: 100%;
  margin: auto;
text-shadow: 0px 4px 3px rgba(0,0,0,0.4),
             0px 8px 13px rgba(0,0,0,0.1),
             0px 18px 23px rgba(0,0,0,0.1);
}

.text-container h1 {
  font-size: 3rem;
}

.text-container h3:nth-of-type(1){
  font-weight:200;
  font-size: 0.75rem;
}

.text-container h3:nth-of-type(2){
  font-size: 1.2rem;
  margin-bottom: 0rem;
}

@media (min-width: 760px){
  .info-wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 3rem;
    align-items: center;
    text-align: center;

    img{
      position: relative;
      left: 20%;
    }

    .text-container{
      position: relative;
      right: 20%;
      width: 75%;
    }
  }
}

a{
  color: white;
}

a:visited {
  color: white;
}
.social{
  transform: scale(2.5);
  margin: 20px;
  padding: 5px;
  padding-top: 15px;
  
}

.social:hover{
  transform: scale(3);
  filter: invert(0.5);
}


</style>
