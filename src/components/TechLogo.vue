<template>
  <img :src="require(`../assets/icons/${src}.svg`)" :alt="src" />
</template>

<script>
export default {
  components: {},
  props: {
    src: String
  }
};
</script>

<style>
img {
  width: 6%;
  margin: 3px;
}
/* Smartphones (portrait and landscape) ----------- */
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
</style>
