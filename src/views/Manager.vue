<!-- 打信機管理頁面 -->
<template>
  <div id="container" class="bg-cover bg-center h-screen w-full">
    <section class="grid-item">
      <p>Just send a test mail to MSE.</p>
      <p>If you want to add IP, please edit db.json file.</p>
    </section>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* 2 x 5 grid */
#container {
  @apply grid;
  @apply grid-cols-2;
  @apply grid-rows-5;
  background-image: url('../assets/Wallpaper_Zagreus01.jpg');
  grid-template-areas: siderbar empty-bg 
}
section.grid-item {
  display: grid-item;
  grid-column: span 2 / span 2;
}
p, h2 {
  @apply text-white;
}
</style>