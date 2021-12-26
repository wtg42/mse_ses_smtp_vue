<template>
  <div class="Rounded dialog">
    <section>
      <dialog class="nes-dialog is-rounded" id="dialog-rounded">
        <!-- colse button -->
        <i class="nes-icon close is-small" @click="dialogClose()"></i>

        <form method="dialog">
          <!-- 可用 props 顯示 -->
          <p class="title">{{ dialogRequest.title }}</p>
          <!-- 也可以用 computed 計算後顯示 -->
          <p>{{ dialogMsg.body }}</p>
          <!-- <AddTargetForm/> -->
          <component :is="getView"></component>
        </form>
      </dialog>
    </section>
  </div>
</template>

<script>
import { computed, ref, shallowRef } from "vue"
import AddTargetForm from "@/components/AddTargetForm.vue"

export default {
  name: "ManagerDialog",
  props: ["dialogRequest", "viewName"],
  components: {
    AddTargetForm,
  },
  setup(props) {
    // console.log(props.view)
    const getView = shallowRef(props.viewName)
    // Dialog 動態顯示參數
    const dialogMsg = ref({
      title: ref(''),
      body: ref(''),
    })

    // 單純的把 js function call 包起來 parent 可以呼叫
    const showModal = () => {
      document.getElementById('dialog-rounded').showModal()
    }

    // close the dialog
    const dialogClose = () => {
      document.getElementById('dialog-rounded').close()
    }
    // props 再次更新可以直接使用，或是有需要計算可以放到這邊
    const setDialog = computed(() => {
      // console.log(props.dialogRequest)
      dialogMsg.value.title = props.dialogRequest.title
      dialogMsg.value.body = props.dialogRequest.body
    })
    // start computed
    setDialog.value

    return { getView, dialogClose, showModal, dialogMsg, setDialog }
  }
}
</script>

<style>
</style>