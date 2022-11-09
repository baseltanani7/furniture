import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutPage from "../views/AboutPage";
import StorePage from "../views/StorePage.vue";
import FurniturePage from "../views/FurniturePage";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView"),
  },
  {
    path: "/AboutUs",
    name: "AboutUs",
    component: AboutPage,
  },
  {
    path: "/StorePage",
    name: "StorePage",
    component: StorePage,
  },
  {
    path: "/FurniturePage",
    name: "FurniturePage",
    component: FurniturePage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
