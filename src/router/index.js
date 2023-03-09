import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/userProfile",
    name: "userProfile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UserProfile.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
