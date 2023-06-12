<template>
  <div class="">
    <div class="ml-44">
      <div class="mt-20 text-3xl flex">
        <div class="mt-20">
          <p>Hello, I'm Chimedochir,</p>
          <div class="text-8xl font-bold">
            Software <br />
            Ingeneer
          </div>
          <br />
          <p>based in Mongolia.</p>
        </div>
        <div class="mt-0 ml-40 p-10 pt-0">
          <img src="./../assets/Background(2).png" alt="error profile" />
        </div>
      </div>

      <about-component></about-component>
      <work-component></work-component>
      <contact-component></contact-component>
      <router-component></router-component>
    </div>
    <div class="text-5xl text-center mt-10 mb-10">Thank you!</div>
  </div>
</template>

<script>
import AboutComponent from "./AboutComponent.vue";
import WorkComponent from "./WorkComponent.vue";
import ContactComponent from "./ContactComponent.vue";
import RouterComponent from "../router/RouterComponent.vue";
// import { useRoute, useRouter } from "vue-router";
// const router = useRouter();
// const route = useRoute();
export default {
  name: "HomeComponent",
  components: {
    AboutComponent,
    WorkComponent,
    ContactComponent,
    RouterComponent,
  },
};
</script>

<style></style>
