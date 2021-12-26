<!-- 打信機管理頁面 -->
<template>
  <div id="container" class="bg-cover bg-center h-screen w-full">
    <!-- 選單按鈕，內容動態產生 -->
    <div v-for="(btn, index) in btns" :key="index" :class="btn.class">
      <span :class="{ invisible: btn.visible }">
        <!-- 選單硬幣 hover 才會出現 -->
        <i class="nes-icon coin is-small"></i>
      </span>
      <span @mouseout="changeBtnStatus(btn)" @mouseover="changeBtnStatus(btn)" @click="showForm()" class="m-3" >
        <button>{{ btn.text }}</button>
      </span>
    </div>
  </div>
  <ManagerDialog ref="managerDialogRef" v-model:dialogRequest="dialogRequest"/>
</template>

<!-- 改用 vue 3.2 新寫法試試  -->
<script setup>
import { ref } from "vue";
// import { useRoute, useRouter } from "vue-router";
import ManagerDialog from "@/components/ManagerDialog.vue";

// get route instance
// const router = useRouter();
// const route = useRoute();

// router func not use
// const goto = () => router.push({ name: routerName })

// show add, edit, modify form by dialog
const showForm = () => {
  managerDialogRef.value.showModal()
}

// RoundedDialog component 要顯示的內容
const dialogRequest = ref({title: ref(""), body: ref("")})

// DOM 綁定變數
const managerDialogRef = ref()

// 選單 btn 用 v-for 產生 grid 屬性吃 class
const btns = ref([
  {key: 0, visible: true, class: 'grid-item-add', text: 'ADD NEW MSE TARGET'},
  {key: 1, visible: true, class: 'grid-item-remove', text: 'REMOVE EXISTS TARGET'},
  {key: 2, visible: true, class: 'grid-item-edit', text: 'MODIFY TARGET PROPERTY'},
])

// 選單 coin 的 hover 顯示狀態 控制 tailwind 的 invisible
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