import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/:dogName",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/about_dog.vue")
  },
  {
    path: "/all/:dogName",
    name: "search_result",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/search_result.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
