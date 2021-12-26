<template>
  <div class="py-12">
    <div v-if="ipList.data && ipList.data.length > 0" class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <!-- 表單送出後通知 RoundedDialog 順便帶入要顯示的資料 -->
      <BasicTextForm :ipList="ipList.data" @showModal="togglesModal" />
    </div>
    <div v-else-if="!ipList.data && !error" class="max-w-7xl mx-auto sm:px-24 lg:px-24">
      <progress class="nes-progress is-pattern" :value="progress" max="100"></progress>
    </div>
    <div v-else-if="error" class="max-w-7xl mx-auto sm:px-6 lg:px-8 text-center">
      <p>{{ error }}</p>
    </div>
    <teleport to="body">
        <RoundedDialog ref="roundedDialogRef" v-model:dialogRequest="dialogRequest"/>
    </teleport>
  </div>
</template>

<script>
import BasicTextForm from "@/components/BasicTextForm.vue";
import RoundedDialog from "@/components/RoundedDialog.vue";
import getMseIpLists from "@/composables/getMseIpLists.js"
import { ref } from "vue"
export default {
  name: "SendMailToMSE",
  components: {
    BasicTextForm,
    RoundedDialog,
  },
  setup() {
    // 跟資料庫要機器 IP 資料顯示
    const { progress, ipList, error, load } = getMseIpLists()
    // 打 API
    load()

    // 要求顯示的內容
    const dialogRequest = ref({titile: ref(""), body: ref("")})

    // DOM 綁定變數
    const roundedDialogRef = ref()

    // 通知 dialog 顯示並帶入資訊
    const togglesModal = (data) => {
      // parent 呼叫 dialog 
      dialogRequest.value = data
      console.log(dialogRequest)
      // 呼叫 Component 內部 showModal()
      roundedDialogRef.value.showModal()
    };

    return { ipList, error, progress, togglesModal, roundedDialogRef, dialogRequest }
  }
}
</script>
