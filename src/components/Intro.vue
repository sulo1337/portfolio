<template>
  <div>
    <div id="container">
      <div id="flip">
        <div><div>Hello!</div></div>
        <div><div>Hola!</div></div>
        <div><div>नमस्ते</div></div>
      </div>
      I'm Sulochan Acharya.
    </div>
  </div>
</template>

<script>
export default {
  dark() {
    return this.$store.state.isDark;
  }
};
</script>

<style>
body {
  margin: 0px;
  font-family: "IBM Plex Serif", serif;
  text-align: center;
}

#container {
  color: #000;
  text-transform: uppercase;
  font-size: 36px;
  font-weight: bold;
  padding-top: 200px;
  position: fixed;
  width: 100%;
  bottom: 45%;
  display: block;
}

#flip {
  height: 75px;
  overflow: hidden;
}

#flip > div > div {
  color: #fff;
  padding: 4px 12px;
  height: 45px;
  margin-bottom: 45px;
  display: inline-block;
}

#flip div:first-child {
  animation: show 5s linear infinite;
}

#flip div div {
  background: #42c58a;
}
#flip div:first-child div {
  background: #4ec7f3;
}
#flip div:last-child div {
  background: #dc143c;
}

@keyframes show {
  0% {
    margin-top: -270px;
  }
  5% {
    margin-top: -180px;
  }
  33% {
    margin-top: -180px;
  }
  38% {
    margin-top: -90px;
  }
  66% {
    margin-top: -90px;
  }
  71% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }
}

p {
  position: fixed;
  width: 100%;
  bottom: 30px;
  font-size: 12px;
  color: #999;
  margin-top: 200px;
}
</style>
