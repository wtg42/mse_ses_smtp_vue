<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/">Send Mail</router-link>
  </div>
  <router-view/>
</template>

<style>

@import url("https://fonts.googleapis.com/css?family=Press+Start+2P");
#app {
  font-family: "Press Start 2P", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  @apply text-center;
}
</style>
