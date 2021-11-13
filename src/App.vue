<template>
    <ul class="">
      <div class="flex flex-row justify-center items-center mt-10">
      <div class="ml-4"><i class="nes-icon coin"></i></div><div class="ml-2"><router-link :to="{ name:'Home' }">Home</router-link></div>
      <div class="ml-4"><i class="nes-icon coin"></i></div><div class="ml-2"><router-link :to="{ name:'SendMailToMSE' }">Send Mail</router-link></div>
      </div>
    </ul>
  <router-view/>
</template>

<style>
#app {
  font-family: "Press Start 2P", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /* @apply text-center; */
}
</style>
