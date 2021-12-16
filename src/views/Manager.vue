<!-- 打信機管理頁面 -->
<template>
  <div id="container" class="bg-cover bg-center h-screen w-full">
    <!-- 選單按鈕，內容動態產生 -->
    <div v-for="(btn, index) in btns" :key="index" :class="btn.class">
      <span :class="{ invisible: btn.visible }">
        <!-- 選單硬幣 hover 才會出現 -->
        <i class="nes-icon coin is-small"></i>
      </span>
      <span @mouseout="changeBtnStatus(btn)" @mouseover="changeBtnStatus(btn)" class="m-3">
        <button>{{ btn.text }}</button>
      </span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 選單 btn 用 v-for 產生 grid 屬性吃 class
const btns = ref([
  {key: 0, visible: true, class: 'grid-item-add', text: 'ADD NEW MSE TARGET'},
  {key: 1, visible: true, class: 'grid-item-remove', text: 'REMOVE EXISTS TARGET'},
  {key: 2, visible: true, class: 'grid-item-edit', text: 'MODIFY TARGET PROPERTY'}
])

// 選單 coin 的顯示狀態 控制 tailwind 的 invisible
const changeBtnStatus = (coin) => {
  coin.visible = !coin.visible
}
</script>

<style scoped>
/* 2 x 10 grid */
#container {
  @apply grid;
  /* @apply grid-cols-2; */
  /* @apply grid-rows-5; */
  grid-template-columns: 50% 50%;
  grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
  background-image: url('../assets/Wallpaper_Zagreus01.jpg');
}
/* 選單項目 */
.grid-item-add {
  grid-column: 1 / 2; /* 用格線去算，不要用格子 */
  grid-row: 5 / 6;
}
.grid-item-remove {
  grid-column: 1 / 2; /* 用格線去算，不要用格子 */
  grid-row: 6 / 7;
}
.grid-item-edit {
  grid-column: 1 / 2; /* 用格線去算，不要用格子 */
  grid-row: 7 / 8;
}
/* 此頁字體顏色改用白色 */
button {
  @apply text-white;
  background: rgba(255, 255, 255, 0);
  /* border: unset; */
}
button:active {
  @apply text-white;
  background: rgba(255, 255, 255, 0);
}

</style>