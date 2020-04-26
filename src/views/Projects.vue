/* eslint-disable */
<template>
  <div id="projects" :class="{ dark: dark }">
    <div id="nav">
      <NavBar curr="Projects" />
    </div>
    <div class="wrapper">
      <h1 class="heading">Here are my projects</h1>
      <swiper class="swiper" :options="swiperOption">
        <swiper-slide class="slide slide-1">Project 1</swiper-slide>
        <swiper-slide class="slide slide-2">Project 2</swiper-slide>
        <swiper-slide class="slide slide-3">Project 3</swiper-slide>
        <swiper-slide class="slide slide-4">Project 4</swiper-slide>
        <swiper-slide class="slide slide-5">Project 5</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import NavBar from "@/components/NavBar.vue";

/* eslint-disable */
export default {
  components: {
    NavBar,
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      swiperOption: {
        autoHeight: true,
        effect: "flip",
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: true
        }
      }
    };
  },
  computed: {
    dark() {
      return this.$store.state.isDark;
    }
  }
};
</script>

<style scoped lang="scss">

#projects{
  background: url("../assets/home/light-background.png");
  width: 100vw;
  height: 100vh;
}

.dark{
  background: linear-gradient(to bottom, #323232 0%, #3F3F3F 40%, #1C1C1C 150%), linear-gradient(to top, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.25) 200%) !important;
 background-blend-mode: multiply;
  color: white;
}
.wrapper{
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
}

.heading{
  
}

.slide{
  height: 40vh;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
  .swiper {
    width: 50vw;
    padding: 50px;

    .slide {
      &.slide-1 {
        background: rgb(0, 225, 255);
      }
      &.slide-2 {
        background: rgba(149, 18, 18, 0.602);
      }
      &.slide-3 {
        background: green;
      }
      &.slide-4 {
        background: gray;
      }
      &.slide-5 {
        background: purple;
      }
    }
  }
</style>