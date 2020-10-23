<template>
  <div id="project" :class="{ dark: dark }">
    <div id="nav">
      <NavBar curr="Projects" />
    </div>
    <div class="project__wrapper">
      <div class="loader" v-if="loading">
        <HashLoader :color="loaderColor" />
      </div>
      <div class="error" v-if="error">
        There is some problem connecting to the API. <br />Please email me @
        <code>s.acharya1337@gmail.com</code> so I can fix it ASAP.
      </div>
      <div class="blog-slider" v-if="!loading">
        <div class="blog-slider__wrp swiper-wrapper">
          <div
            class="blog-slider__item swiper-slide"
            v-for="project in projects"
            :key="project.id"
          >
            <div class="blog-slider__img">
              <a class="rounded" v-for="tech in project.tech" :key="tech">
                <svg>
                  <image
                    :xlink:href="require(`../assets/icons copy/${tech}.svg`)"
                  />
                </svg>
              </a>
            </div>
            <div class="blog-slider__content">
              <span class="blog-slider__code">{{ project.date }}</span>
              <div class="blog-slider__title">{{ project.name }}</div>
              <div class="blog-slider__text">{{ project.desc }}</div>
              <a
                :href="'//' + project.link"
                target="_blank"
                class="blog-slider__button"
                >Visit</a
              >
              <a
                :href="'//' + project.git"
                target="_blank"
                class="blog-slider__button"
                >Source</a
              >
            </div>
            <div class="blog-slider__nav">
              <div class="blog-slider__prev">
                <img src="@/assets/projects/up.png" />
              </div>
              <div class="blog-slider__next">
                <img src="@/assets/projects/down.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="blog-slider__pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import Swiper from "swiper";
import TechLogo from "@/components/TechLogo.vue";
import { HashLoader } from "@saeris/vue-spinners";
import axios from "axios";
import "swiper/css/swiper.css";

/* eslint-disable */
export default {
  components: {
    NavBar,
    Swiper,
    TechLogo,
    HashLoader
  },
  data() {
    return {
      projects: [],
      error: null,
      loading: true
    };
  },
  computed: {
    dark() {
      return this.$store.state.isDark;
    },
    loaderColor() {
      if (this.$store.state.isDark) {
        return "#fcf75e";
      } else {
        return "#ffcc70";
      }
    }
  },
  mounted() {
    setTimeout(() => {
      if (!this.loading) this.initSwiper();
    }, 1);
  },
  beforeRouteEnter(to, from, next) {
    axios({
      method: "GET",
      url: process.env.VUE_APP_PROJECTURL,
      timeout: 2000
    })
      .then(response => {
        const data = response.data;
        next(vm => vm.setProjects(data, null, false));
      })
      .catch(err => {
        next(vm => vm.setProjects(null, err, true));
      });
  },
  beforeRouteUpdate(to, from, next) {
    return;
  },
  methods: {
    setProjects(data, error, loading) {
      console.log(error);
      this.projects = data;
      this.error = error;
      this.loading = loading;
    },
    initSwiper() {
      var swiper = new Swiper(".blog-slider", {
        spaceBetween: 30,
        effect: "fade",
        loop: true,
        mousewheel: false,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: true
        // },
        // autoHeight: true,
        pagination: {
          el: ".blog-slider__pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".blog-slider__next",
          prevEl: ".blog-slider__prev"
        }
      });
      swiper.init();
    }
  }
};
</script>

<style lang="scss">
#project {
  background-image: linear-gradient(
    0deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  width: 100vw;
  height: 100vh;
}

.project__wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
}

@import url("https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800");
* {
  box-sizing: border-box;
}
body {
  background-color: #ffe53b;
  background-image: linear-gradient(147deg, #ffe53b 0%, #fd3838 74%);
  min-height: 100vh;
  font-family: "Fira Sans", sans-serif;
  display: flex;
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
  .blog-slider {
    background: #222222;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
    &__content {
      color: white;
    }

    &__code {
      color: white;
    }

    &__title {
      color: white;
    }

    &__text {
      color: white;
    }
    &__img {
      background: #333333;
      box-shadow: 4px 13px 30px 1px rgba(0, 0, 0, 0.1);
    }

    &__nav {
      filter: invert(1);
    }

    &__prev:hover {
      filter: invert(0.5);
    }

    &__next:hover {
      filter: invert(0.5);
    }

    &__button {
      background: #102a43;
      box-shadow: none;
    }

    &__pagination {
      .swiper-pagination-bullet {
        background: #ffffff;
      }
    }
  }
}

.blog-slider {
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
  width: 95%;
  position: relative;
  max-width: 875px;
  margin: auto;
  background: #fff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;
  height: 400px;
  transition: all 0.3s;

  @media screen and (max-width: 992px) {
    max-width: 680px;
    height: 400px;
  }

  @media screen and (max-width: 768px) {
    min-height: 500px;
    height: auto;
    margin: 300px auto;
    top: 60px;
  }

  @media screen and (max-height: 500px) and (min-width: 992px) {
    height: 350px;
  }

  &__item {
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }

    &.swiper-slide-active {
      .blog-slider__img {
        img {
          opacity: 1;
          transition-delay: 0.3s;
        }
      }
      .blog-slider__content {
        > * {
          opacity: 1;
          transform: none;

          @for $i from 0 to 15 {
            &:nth-child(#{$i + 1}) {
              transition-delay: $i * 0.1 + 0.3s;
            }
          }
        }
      }
    }
  }

  &__techlogo {
    width: 100%;
  }

  &__nav {
    position: fixed;
    width: 50px;
    flex-shrink: 0;
    height: 50px;
    border-radius: 20px;
    top: 40%;
    left: 110%;
    transform: translate(-50%, -50%);
    @media screen and (max-width: 992px) {
      // width: 45%;
    }
    @media screen and (max-width: 768px) {
      display: none;
    }
    @media screen and (max-width: 576px) {
      width: 95%;
    }
    @media screen and (max-height: 500px) and (min-width: 992px) {
      height: 270px;
    }
  }

  &__next {
    img {
      width: 90%;
      transition: all 0.3s ease;
    }
    img:hover {
      transform: scale(1.2);
      filter: invert(1);
    }
  }

  &__prev {
    img {
      width: 90%;
      transition: all 0.3s ease;
    }
    img:hover {
      transform: scale(1.2);
      filter: invert(1);
    }
  }

  &__img {
    // width: 40%;
    padding-left: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 300px;
    flex-shrink: 0;
    height: 300px;
    background-image: radial-gradient(
      circle farthest-corner at -15% -15%,
      rgba(253, 203, 50, 1) 0%,
      rgba(244, 56, 98, 1) 100.2%
    );
    box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
    border-radius: 20px;
    transform: translateX(-80px);
    justify-content: center;
    align-items: center;
    align-content: center;
    $size: 15vw;
    $max-size: 6rem;
    $gun: #383940;
    $darken: 10%;
    a {
      flex: 1 0 21%;
      margin: $max-size * 0.1;
      transition: 0.5s ease;
      height: $size;
      width: $size;
      max-width: $max-size;
      max-height: $max-size;
      display: inline-block;
      &:hover {
        cursor: pointer;
      }
      svg {
        height: 100%;
        width: 100%;
        transition: 0.5s;
      }
      svg:hover {
        transform: scale(1.2);
      }
      image {
        height: 100%;
        width: 100%;
      }
      @media only screen and (min-device-width: 320px) and (max-device-width: 550px) {
        image {
          width: 100%;
          height: 100%;
        }
      }
      @media only screen and (max-width: 320px) {
        image {
          width: 70%;
          height: 70%;
        }
      }
      @media only screen and (min-width: 1824px) {
        image {
          width: 80%;
          height: 80%;
        }
      }
    }
    .badges a {
      border-radius: 1rem;
    }
    overflow: hidden;
    @media screen and (max-width: 992px) {
      // width: 45%;
    }
    @media screen and (max-width: 768px) {
      transform: translateY(-50%);
      width: 90%;
    }
    @media screen and (max-width: 576px) {
      width: 95%;
    }
    @media screen and (max-height: 500px) and (min-width: 992px) {
      height: 270px;
    }
  }

  &__content {
    // width: 60%;
    padding-right: 40px;
    @media screen and (max-width: 992px) {
      // width: 55%;
    }
    @media screen and (max-width: 768px) {
      margin-top: -80px;
      text-align: center;
      padding: 0 30px;
    }

    @media screen and (max-width: 576px) {
      padding: 0;
    }
    > * {
      opacity: 0;
      transform: translateY(25px);
      transition: all 0.2s;
    }
    height: 90%;
    overflow: scroll;
    overflow-x: hidden;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 0px;
  }

  &__code {
    color: #7b7992;
    margin-bottom: 15px;
    display: block;
    font-weight: 500;
  }

  &__title {
    font-size: 24px;
    font-weight: 700;
    color: #0d0925;
    margin-bottom: 20px;
  }

  &__text {
    color: #4e4a67;
    margin-bottom: 30px;
    line-height: 1.5em;
  }

  &__button {
    display: inline-flex;
    background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
    padding: 15px 35px;
    margin: 2px;
    border-radius: 50px;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    justify-content: center;
    text-align: center;
    letter-spacing: 1px;
    @media screen and (max-width: 576px) {
      width: 90%;
    }
  }

  .swiper-container-horizontal > .swiper-pagination-bullets,
  .swiper-pagination-custom,
  .swiper-pagination-fraction {
    bottom: 10px;
    left: 0;
    width: 100%;
  }
  &__pagination {
    position: absolute;
    z-index: 21;
    right: 20px;
    width: 11px !important;
    text-align: center;
    left: auto !important;
    top: 50%;
    bottom: auto !important;
    transform: translateY(-50%);
    @media screen and (max-width: 768px) {
      transform: translateX(-50%);
      left: 50% !important;
      top: 205px;
      width: 100% !important;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &.swiper-pagination-bullets .swiper-pagination-bullet {
      margin: 5px 0;
      @media screen and (max-width: 768px) {
        margin: 0 5px;
      }
    }

    .swiper-pagination-bullet {
      width: 11px;
      height: 11px;
      display: block;
      border-radius: 10px;
      background: #062744;
      opacity: 0.2;
      transition: all 0.3s;
      &-active {
        opacity: 1;
        background: #fd3838 !important;
        height: 30px;
        box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);

        @media screen and (max-width: 768px) {
          height: 11px;
          width: 30px;
        }
      }
    }
  }
}

.loader {
  text-align: center;
}
.error {
  background-image: radial-gradient(
    circle 972.6px at 10% 20%,
    rgba(243, 0, 75, 1) 0%,
    rgba(255, 93, 75, 1) 90%
  );
  color: white;
  padding: 20px;
  margin: 20px;
  border-radius: 20px;
  font-size: 20px;
  box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);
}
</style>