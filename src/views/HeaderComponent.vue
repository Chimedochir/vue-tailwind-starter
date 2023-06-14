<template>
  <div class="flex text-2xl pl-3 pt-4 text-blue-900 mt-5">
    <h6 class="font-bold ml-40">Shijee Chimedochir</h6>
    <div class="ml-60 pb-5">
      <a class="hover:text-amber-500" href="#">Home</a>
      <a class="hover:text-amber-500 ml-20" href="/about">About</a>
      <a class="hover:text-amber-500 ml-20" href="./WorkComponent.vue">Work</a>
      <a class="hover:text-amber-500 ml-20" href="./ContactComponent.vue"
        >Contact</a
      >
    </div>
  </div>
</template>
<script>
// import AboutComponent from "./AboutComponent.vue";
export default {
  name: "HeaderComponent",
  components: {
    // AboutComponent,
  },
};
</script>
<style></style>
