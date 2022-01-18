<!-- 
移除 target 的 dialog form 
讀取列表 load(), checkbox資料 -> formData, 
-->
<template>
  <div id="remove-target-form">
    <form @submit.prevent="handleSubmit()">
      <div class="nes-container with-title mx-20 mt-10 mb-10">
        <h3 class="title">Remove Target Information</h3>

        <div class="flex flex-nowrap">
          <i class="nes-bcrikko md:mr-10"></i>
          <!-- Balloon -->
          <div class="nes-balloon from-left">
            <p>Remove Target From Bottom List</p>
          </div>
        </div>

        <p class="error">{{ error }}</p>

        <div class v-for="target in ipList" :key="target.id">
          <label>
            <input type="checkbox" class="nes-checkbox" @change="getRemoveID(target.id)" />
            <span>{{ target.name }}</span>
          </label>
        </div>

        <!-- 按鈕佈局 -->
        <div class="nes-field mt-10 flex justify-center space-x-10">
          <!-- <form method="dialog"><button class="nes-btn">Cancel</button></form> -->
          <button type="submit" class="nes-btn is-primary">Remove</button>
          <button type="reset" class="nes-btn is-warning">Clean Up</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, onBeforeUpdate, onUpdated } from "vue";
import { ipListApi, removeTargetApi } from "@/composables/api.js";

export default {
  name: "RemoveTargetForm",
  setup() {
    const formData = ref([]);

    // 錯誤訊息
    const error = ref(null);

    // Target lists
    const ipList = ref([]);

    // 讀取現有清單
    const load = async () => {
      try {
        let response = await ipListApi();

        if (response.status >= 400) {
          throw new Error("Opps! there are some problms happens.");
        }
        // 更新 view 
        // await nextTick()

        ipList.value = response.data.data;

        console.log("ipList.value->", ipList.value);
      } catch (err) {
        error.value = "Data Empty 😅 "
        console.log("error-> ", err.message);
        ipList.value = []
      }
    };

    load();

    // 按下移除按鈕
    const handleSubmit = async () => {

      let apiArr = []

      formData.value.forEach(item => apiArr.push(removeTargetApi(item)))

      // 全部跑完一起回應，一個錯了就 GG 了
      Promise.all(apiArr)
        .then((res) => {
          console.log("res->", res)

          // relaod list
          load()

          // reset checkbox values
          formData.value = []
        })
        .catch(err => console.log("err->", err))
    };

    // 勾選反勾選 checkbox 控制要送出的清單內容
    const getRemoveID = (id) => {
      if (!formData.value.includes(id)) {
        formData.value.push(id);
      } else {
        let filterArr = formData.value.filter((el) => {
          return id != el;
        });

        formData.value = filterArr;
      }

    };

    onBeforeUpdate(() => console.log("formData.value->", formData.value))

    onUpdated(() => console.log("updated"))

    return { error, ipList, handleSubmit, formData, getRemoveID };
  },
};
</script>

<style>
</style>