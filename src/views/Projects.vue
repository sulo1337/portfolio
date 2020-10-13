/* eslint-disable */
<template>
  <div id="projects" :class="{ dark: dark }">
    <div id="nav">
      <NavBar curr="Projects" />
    </div>
    <div class="projects__wrapper stage">
      <swiper class="swiper box bounce-7" :options="swiperOption" effect="fade">
        <swiper-slide
          v-for="project in projects"
          :key="project.id"
          :class="['slide', project.id]"
        >
          <div class="project-container">
            <div class="project-header">
              <h1>{{ project.name }}</h1>
              <hr />
            </div>
            <div class="project-content">
              <br />
              {{ project.date }}
              <br />
              <br />
              {{ project.desc }}
              <br />
              <div class="tech-container">
                <TechLogo
                  v-for="tech in project.tech"
                  :key="tech"
                  :src="tech"
                  class="techlogo"
                />
              </div>
              <div class="buttons">
                <LinkButton
                  bg="#42cc8c"
                  border="#000000"
                  text="Visit Project"
                  :url="project.link"
                  class="button"
                />
                <LinkButton
                  bg="rgba(0,0,0,0)"
                  :border="dark ? '#ffffff' : '#000000'"
                  text="View Source"
                  :url="project.git"
                  class="button"
                  :color="dark ? '#ffffff' : '#000000'"
                />
              </div>
            </div>
          </div>
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <!-- <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div> -->
      </swiper>
      <div class="loader" v-if="loading">
        <HashLoader :color="loaderColor" />
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import NavBar from "@/components/NavBar.vue";
import TechLogo from "@/components/TechLogo.vue";
import LinkButton from "@/components/LinkButton.vue";
import { HashLoader } from "@saeris/vue-spinners";
/* eslint-disable */
export default {
  components: {
    NavBar,
    Swiper,
    SwiperSlide,
    TechLogo,
    LinkButton,
    HashLoader
  },
  data() {
    return {
      swiperOption: {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        autoHeight: false,
        effect: "cube",
        grabCursor: true,
        loop: true,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable: true
        },
        autoplay: {
          delay: 5000,
          disableOnInteraction: true
        }
      }
    };
  },
  computed: {
    dark() {
      return this.$store.state.isDark;
    },
    projects() {
      return this.$store.state.projects;
    },
    loading() {
      return this.$store.state.projectLoading;
    },
    loaderColor() {
      if (this.$store.state.isDark) {
        return "#fcf75e";
      } else {
        return "#e42600";
      }
    }
  },
  beforeMount: async function() {
    try {
      await this.$store.dispatch("fetchProjects");
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style scoped lang="scss">
#projects {
  // background: url("../assets/home/light-background.png");
  background: #7ddaf8;
  width: 100vw;
  height: 100vh;
}

.dark {
  // background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
  //   linear-gradient(
  //     to top,
  //     rgba(255, 255, 255, 0.4) 0%,
  //     rgba(0, 0, 0, 0.25) 200%
  //   ) !important;

  background: #222222 !important;
  // background-blend-mode: multiply;
  color: white;
  .swiper {
    .slide {
      background: #263238;
    }
  }
  .slide {
    color: white;
  }
}
.projects__wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
}

.slide {
  height: 50vh;
  border-radius: 0px;
  box-shadow: 0 0 0 5px gray, 15px 15px black;
  // text-shadow: 1px 2px 2px rgba(150, 150, 150, 1);
  // display: flex;/* Smartphones (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    img {
      width: 15%;
    }
  }

  /* Smartphones (landscape) ----------- */
  @media only screen and (min-width: 321px) {
    img {
      width: 15%;
    }
  }

  /* Smartphones (portrait) ----------- */
  @media only screen and (max-width: 320px) {
    img {
      width: 15%;
    }
  }

  /* iPads (portrait and landscape) ----------- */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    img {
      width: 15%;
    }
  }

  /* iPads (landscape) ----------- */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
    img {
      width: 15%;
    }
  }

  /* iPads (portrait) ----------- */
  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
    img {
      width: 15%;
    }
  }

  /* Desktops and laptops ----------- */
  @media only screen and (min-width: 1224px) {
    img {
      width: 7%;
    }
  }

  /* Large screens ----------- */
  @media only screen and (min-width: 1824px) {
    img {
      width: 5%;
    }
  }

  /* iPhone 4 ----------- */
  @media only screen and (-webkit-min-device-pixel-ratio: 1.5),
    only screen and (min-device-pixel-ratio: 1.5) {
    /* Styles */
  }
  // align-items: center;
  // justify-content: center;
  color: black;
  overflow: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 12px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
.swiper {
  width: 75%;
  margin: 0 auto;
  padding: 50px;
  .slide {
    background: #fdfcfa;
  }
}

.project-container {
  width: 90%;
  margin: auto;
  padding: 10px;
  text-align: left;
}
.project-header {
  margin-top: 20px;
  padding: 10px;
  padding-left: 0px;
}
.project-content {
  text-align: left;
  font-size: 23px;
}
.tech-container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  padding-left: 0px;
}
.techlogo {
  margin: 10px;
}

.buttons {
  display: flex;
  flex-wrap: wrap;
}

.box {
  animation-duration: 0.5s;
  animation-iteration-count: 1;
}
.bounce-7 {
  animation-name: bounce-7;
}
@keyframes bounce-7 {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.loader {
  color: white;
}
</style>