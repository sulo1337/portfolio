<template>
  <div id="contact" :class="{ dark: dark }">
    <div id="nav">
      <NavBar curr="Contact" />
    </div>
    <div class="contact__wrapper">
      <div id="canvas">
        <div class="title">
          Send me a Message
        </div>
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
                    placeholder="Your email.."
                  />
                </div>
              </div>

              <div class="row">
                <div class="col-25">
                  <label for="subject">Subject</label>
                </div>
                <div class="col-75">
                  <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something.."
                    style="height:200px"
                  ></textarea>
                </div>
              </div>
              <div class="row">
                <input type="submit" value="Submit" />
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

/* eslint-disable */
export default {
  components: {
    NavBar
  },
  computed: {
    dark() {
      return this.$store.state.isDark;
    }
  },
  data() {
    return {
      formValues: {
        name: "",
        email: "",
        message: ""
      }
    };
  }
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
.dark {
  background: rgb(43, 45, 72) !important;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(12, 16, 20, 1) 69%,
    rgba(0, 0, 0, 1) 100%
  ) !important;
  color: white;
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

#canvas {
  position: relative;
  display: flex;
  background: white;
  border-radius: 20px;
  padding: 20px;
  width: 75%;
  text-align: left;
  flex-direction: column;
}

.title {
  display: flex;
  position: fixed;
  transform: translate(-50%, -80%);
  left: 50%;
  background-image: radial-gradient(
    circle farthest-corner at 10% 20%,
    rgba(253, 203, 50, 1) 0%,
    rgba(244, 56, 98, 1) 100.2%
  );
  border-radius: 20px;
  width: 400px;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100px;
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

label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}

input[type="submit"] {
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

/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25,
  .col-75,
  input[type="submit"] {
    width: 100%;
    margin-top: 0;
  }
}
</style>