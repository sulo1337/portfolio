<template>
  <div id="contact" :class="{ dark: dark }">
    <div id="nav">
      <NavBar curr="Contact" />
    </div>
    <div class="contact__wrapper">
      <div class="loader" v-if="sending">
        <HashLoader :color="loaderColor" />
        <div class="message info">Sending...</div>
      </div>
      <div v-if="sent">
        <div class="message success" v-if="!error">
          Message sent successfully, I will reach out to you shortly.
          <br />
          <small
            >Please reload the page if you want to send another message.</small
          >
        </div>
        <div class="message error" v-if="error">
          Uh Oh! Looks like there is some problem communicating with the server.
          <br />
          <br />
          You can contact me via:
          <br />
          Email: s.acharya1337@gmail.com
          <br />
          Phone: (318)-557-8273
        </div>
      </div>
      <div id="canvas" v-if="!sending && !sent">
        <div class="title">Contact Me</div>
        <div class="form">
          <div class="container">
            <form>
              <div class="row">
                <div class="col-25">
                  <label for="name">Name</label>
                </div>
                <div class="col-75">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name.."
                    v-model="formData.name"
                    :class="{ danger: nameDanger }"
                  />
                </div>
              </div>
              <div class="row">
                <div class="col-25">
                  <label for="email">Email</label>
                </div>
                <div class="col-75">
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Where can I reach you back?.."
                    v-model="formData.email"
                    :class="{ danger: emailDanger }"
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-25">
                  <label for="message">Message</label>
                </div>
                <div class="col-75">
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write something or email me at s.acharya1337@gmail.com..."
                    style="height: 200px"
                    v-model="formData.message"
                    :class="{ danger: msgDanger }"
                  ></textarea>
                </div>
              </div>
              <div class="row">
                <div class="button" v-on:click="handleSubmit">Send</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import { HashLoader } from "@saeris/vue-spinners";
import axios from "axios";
/* eslint-disable */
export default {
  components: {
    NavBar,
    HashLoader,
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
    },
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        message: "",
      },
      nameDanger: false,
      emailDanger: false,
      msgDanger: false,
      sending: false,
      sent: false,
      error: false,
    };
  },
  methods: {
    handleSubmit() {
      if (!this.isValid()) return;
      this.sending = true;
      axios({
        method: "POST",
        url: process.env.VUE_APP_CONTACTURL,
        timeout: 15000,
        data: this.formData,
      })
        .then((response) => {
          this.sent = true;
          this.sending = false;
        })
        .catch((error) => {
          this.sent = true;
          this.error = true;
          this.sending = false;
        });
    },
    isValid() {
      var valid = true;
      this.nameDanger = false;
      this.emailDanger = false;
      this.msgDanger = false;
      if (!this.formData.name) {
        this.nameDanger = true;
        valid = false;
      }
      if (!this.formData.email) {
        this.emailDanger = true;
        valid = false;
      }
      if (this.formData.email) {
        var re = /\S+@\S+\.\S+/;
        if (!re.test(this.formData.email)) {
          this.emailDanger = true;
          valid = false;
        }
      }
      if (!this.formData.message) {
        this.msgDanger = true;
        valid = false;
      }
      return valid;
    },
  },
};
</script>

<style lang="scss" scoped>
#contact {
  background-image: linear-gradient(
    0deg,
    #4158d0 0%,
    #c850c0 46%,
    #ffcc70 100%
  );
  width: 100vw;
  height: 100vh;
}

.contact__wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
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
  #canvas {
    background: #222222 !important;
    box-shadow: none;
  }
  .title {
    background: #333333;
    box-shadow: 4px 13px 30px 1px rgba(0, 0, 0, 0.1);
  }
  input[type="text"],
  select,
  textarea {
    background: #555555;
    color: white;
    border: 1px solid black;
  }
  ::placeholder {
    color: #ccc;
  }
  .button {
    background: #102a43;
    box-shadow: none;
  }
  .success {
    background: green;
    box-shadow: none;
  }
}

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
  display: flex;
  background: white;
  border-radius: 20px;
  padding: 20px;
  width: 30%;
  text-align: left;
  flex-direction: column;
  box-shadow: 4px 13px 30px 1px rgba(252, 56, 56, 0.2);
}

.title {
  color: white;
  font-weight: 600;
  display: flex;
  position: absolute;
  transform: translate(-50%, -70%);
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

input[type="text"],
select,
textarea {
  font-family: inherit;
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: vertical;
}

.danger {
  border: 2px solid #f00 !important;
}

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

.button {
  display: inline-flex;
  background-image: linear-gradient(147deg, #fe8a39 0%, #fd3838 74%);
  padding: 15px 35px;
  margin: 2px;
  border-radius: 50px;
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  justify-content: center;
  text-align: center;
  letter-spacing: 1px;
  float: right;
  cursor: pointer;
  border: none;
  transition: 0.2s;
}

.container {
  margin-top: 30px;
  padding: 20px;
}

.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

.loader {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.message {
  padding: 20px;
  margin: 20px;
  border-radius: 20px;
  font-size: 20px;
}
.error {
  background-image: radial-gradient(
    circle 972.6px at 10% 20%,
    rgba(243, 0, 75, 1) 0%,
    rgba(255, 93, 75, 1) 90%
  );
  color: white;
  text-align: left;
  box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);
}

.success {
  background: greenyellow;
  color: black;
  box-shadow: 0px 0px 20px rgba(252, 56, 56, 0.3);
}

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25,
  .col-75,
  .button {
    width: 100%;
    margin-top: 0;
  }
  .button {
    margin-top: 10px;
  }
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
}

/* Large screens ----------- */
@media only screen and (min-width: 1824px) {
  #canvas {
    width: 30%;
  }
}
</style>