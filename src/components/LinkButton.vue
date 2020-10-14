<template>
  <a
    :href="'//' + url"
    target="_blank"
    class="button"
    v-bind:style="{
      border: '0.1em solid ' + border
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
    border: String,
    text: String
  }
};
</script>

<style lang="scss">
.button {
  font-family: inherit !important;
  display: inline-block;
  padding: 0.46em 1.6em;
  border: 0.1em solid #000000;
  margin: 0 0.2em 0.2em 0;
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

.button {
  background-color: #fa8bff;
  background-image: linear-gradient(
    45deg,
    #fa8bff 0%,
    #2bd2ff 52%,
    #2bff88 90%
  );
}
.button {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  display: block;
}

.button:hover {
  background-position: right center; /* change the direction of the change here */
  text-decoration: none;
}
</style>
