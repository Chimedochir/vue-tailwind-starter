<template>
  <nav class="flex text-2xl pl-3 pt-4 text-blue-900 mt-5">
    <div class="ml-80 pb-5 space-x-8">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/work">Work</router-link>
    </div>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 
nav {
  padding: 30px;
} */

nav a {
  font-weight: bold;
  color: #0d47a1;
}

nav a.router-link-exact-active {
  color: #ffc107;
}
</style>
