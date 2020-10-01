<template>
  <a
    :href="'//' + url"
    target="_blank"
    class="button"
    v-bind:style="{
      backgroundColor: bg,
      border: '0.1em solid ' + border,
      color: color
    }"
  >
    {{ text }}
  </a>
</template>

<script>
export default {
  name: "LinkButton",
  props: {
    url: String,
    bg: String,
    border: String,
    text: String,
    color: String
  }
};
</script>

<style lang="scss">
.button {
  display: inline-block;
  padding: 0.46em 1.6em;
  border: 0.1em solid #000000;
  margin: 0 0.2em 0.2em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #000000;
  text-shadow: 0 0.04em 0.04em rgba(0, 0, 0, 0.35);
  background-color: #ffffff;
  text-align: center;
  transition: all 0.15s;
}

.button:hover {
  text-shadow: 0 0 2em rgba(255, 255, 255, 1);
  color: #ffffff;
  border-color: #ffffff !important;
  cursor: pointer;
}

@media all and (max-width: 30em) {
  .button {
    display: block;
    margin: 0.4em auto;
  }
}
</style>
