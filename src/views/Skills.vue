<template>
  <div id="skills" :class="{ dark: dark }">
    <div id="nav">
      <NavBar curr="Skills" />
    </div>
    <div class="skills__wrapper">
      <div class="loader" v-if="loading">
        <HashLoader :color="loaderColor" />
        <div class="error">
          There is some problem connecting to the API. <br />Please email me @
          <code>s.acharya1337@gmail.com</code> so I can fix it ASAP.
        </div>
      </div>
      <div id="canvas" v-if="!loading">
        <div class="title">
          My Skills
        </div>
        <div class="logos__wrapper">
          <a
            class="rounded"
            v-for="skill in skills"
            :key="skill.id"
            :href="'//' + skill.link"
            target="_blank"
            :title="
              //!add title and link to the skill in backend
              skill.title
            "
          >
            <svg>
              <image
                :xlink:href="require(`../assets/icons/${skill.skill}.svg`)"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
// import TechLogo from "@/components/TechLogo.vue";
import { HashLoader } from "@saeris/vue-spinners";

export default {
  components: {
    NavBar,
    HashLoader
    // TechLogo
  },
  computed: {
    dark() {
      return this.$store.state.isDark;
    },
    loading() {
      return this.$store.state.skillLoading;
    },
    loaderColor() {
      if (this.$store.state.isDark) {
        return "#fcf75e";
      } else {
        return "#ffcc70";
      }
    },
    skills() {
      return this.$store.state.skills;
    }
  },
  beforeMount: async function() {
    try {
      await this.$store.dispatch("fetchSkills");
    } catch (error) {
      console.log(error);
    }
  }
};
</script>

<style lang="scss" scoped>
#skills {
  background-color: #4158d0;
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
  background-blend-mode: multiply;
  color: white;
  #canvas {
    background: #222222 !important;
    box-shadow: none;
  }
  .title {
    background: #333333;
    box-shadow: 4px 13px 30px 1px rgba(0, 0, 0, 0.1);
  }
}

.skills__wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

$size: 15vw;
$max-size: 6rem;
$gun: #383940;
$darken: 10%;

#canvas {
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
  position: relative;
  padding: $size * 0.2;
  text-align: center;
  font-size: 0;
  margin: 0 auto;
  width: 30%;
  background: #fff;
  box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
  border-radius: 20px;
}

.title {
  position: absolute;
  color: white;
  font-weight: 600;
  display: flex;
  transform: translate(-50%, -90%);
  left: 50%;
  background-image: radial-gradient(
    circle farthest-corner at -30% -15%,
    rgba(253, 203, 50, 1) 0%,
    rgba(244, 56, 98, 1) 100.2%
  );
  border-radius: 20px;
  width: 60%;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-size: 20px;
}

.divider {
  padding-top: 2rem;
}

.logos__wrapper {
  margin-top: 30px;
  a {
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
      height: 130%;
      width: 130%;
      transition: 0.2s;
    }
    svg:hover {
      transform: scale(1.2);
    }
    image {
      height: 90%;
      width: 90%;
    }
    @media only screen and (min-device-width: 320px) and (max-device-width: 550px) {
      image {
        width: 70%;
        height: 70%;
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
}
.round {
  border-radius: 50%;
}
.rounded {
  border-radius: 20%;
}

.loader {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  #canvas {
    width: 90%;
  }
}

/* Smartphones (landscape) ----------- */
@media only screen and (min-width: 321px) {
  #canvas {
    width: 80%;
  }
}

/* Smartphones (portrait) ----------- */
@media only screen and (max-width: 320px) {
  #canvas {
    width: 90%;
  }
}

/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  #canvas {
    width: 80%;
  }
}

/* iPads (landscape) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  #canvas {
    width: 70%;
  }
}

/* iPads (portrait) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  #canvas {
    width: 80%;
  }
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  #canvas {
    width: 40%;
  }
  .logos__wrapper {
    image {
      height: 70%;
      width: 70%;
    }
  }
}

/* Large screens ----------- */
@media only screen and (min-width: 1824px) {
  #canvas {
    width: 30%;
  }
}

/* iPhone 4 ----------- */
@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
  only screen and (min-device-pixel-ratio: 1.5) {
  /* Styles */
}
</style>
