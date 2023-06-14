import { createRouter, createWebHashHistory } from "vue-router";
import HomeComponent from "../views/HomeComponent.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeComponent,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutComponent.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    component: () => import("../views/ContactComponent.vue"),
  },
  {
    path: "/work",
    name: "work",
    component: () => import("../views/WorkComponent.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
