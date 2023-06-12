<template>
  <header-component />
  <home-component />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import HomeComponent from "./components/HomeComponent.vue";
export default {
  name: "App",
  components: { HeaderComponent, HomeComponent },
};
</script>

<style>
#app {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
