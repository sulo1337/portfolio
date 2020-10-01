/* eslint-disable */
<template>
  <div id="projects" :class="{ dark: dark }">
    <div id="nav">
      <NavBar curr="Projects" />
    </div>
    <div class="projects__wrapper">
      <swiper class="swiper" :options="swiperOption" effect="fade">
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
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import NavBar from "@/components/NavBar.vue";
import TechLogo from "@/components/TechLogo.vue";
import LinkButton from "@/components/LinkButton.vue";

/* eslint-disable */
export default {
  components: {
    NavBar,
    Swiper,
    SwiperSlide,
    TechLogo,
    LinkButton
  },
  data() {
    return {
      swiperOption: {
        autoHeight: false,
        effect: "cube",
        grabCursor: false,
        loop: true,
        centeredSlides: true,
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }

        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: true
        // }
      },
      projects: {}
    };
  },
  computed: {
    dark() {
      return this.$store.state.isDark;
    }
  },
  created() {
    this.projects = this.$store.state.projects;
  }
};
</script>

<style scoped lang="scss">
#projects {
  background: url("../assets/home/light-background.png");
  width: 100vw;
  height: 100vh;
}

.dark {
  background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    ) !important;
  background-blend-mode: multiply;
  color: white;
  .swiper {
    .slide {
      background: #000000;
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
  // display: flex;
  // align-items: center;
  // justify-content: center;
  color: black;
  overflow: scroll;
}
::-webkit-scrollbar {
  width: 0px;
  background: transparent; /* make scrollbar transparent */
}
.swiper {
  width: 75%;
  margin: 0 auto;
  padding: 50px;
  .slide {
    background: whitesmoke;
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
</style>