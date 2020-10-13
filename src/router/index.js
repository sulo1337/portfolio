/* eslint-disable */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Skills from "../views/Skills.vue";
import Projects from "../views/Projects.vue";
import Contact from "../views/Contact.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: 'Sulochan Acharya'
    },
    component: Home
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills

  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
