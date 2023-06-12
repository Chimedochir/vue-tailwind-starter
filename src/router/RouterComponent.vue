<script>
import HomeComponent from "../components/HomeComponent.vue";
import AboutComponent from "../components/AboutComponent.vue";
import WorkComponent from "../components/WorkComponent.vue";
import ContactComponent from "../components/ContactComponent.vue";

const routes = {
  "/": HomeComponent,
  "/about": AboutComponent,
  "/work": WorkComponent,
  "/contact": ContactComponent,
};

export default {
  data() {
    return {
      currentPath: window.location.hash,
    };
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || WorkComponent;
    },
  },
  mounted() {
    window.addEventListener("hashchange", () => {
      this.currentPath = window.location.hash;
    });
  },
};
</script>

<template>
  <div class="">
    <a href="#/">Home</a> | <a href="#/about">About</a> |
    <a href="#/work">Work</a>
    <a href="#/contact">Contact</a>
    <component :is="currentView" />
  </div>
</template>
