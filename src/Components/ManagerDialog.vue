<template>
  <div>
    <!-- Rounded dialog -->
    <section>
      <dialog class="nes-dialog is-rounded" id="dialog-rounded">
        <form method="dialog">
          <!-- 可用 props 顯示 -->
          <p class="title">{{ dialogRequest.title }}</p>
          <!-- 也可以用 computed 計算後顯示 -->
          <p>{{ dialogMsg.body }}</p>
          <menu class="dialog-menu flex flex-row justify-center items-center mt-10 px-0">
            <button class="nes-btn">Cancel</button>
            <button class="nes-btn is-primary">Confirm</button>
          </menu>
        </form>
      </dialog>
    </section>
  </div>
</template>

<script>
import { computed, ref } from "vue"
export default {
  props: ["dialogRequest"],
  setup(props) {
    console.log(props.dialogRequest)
    // Dialog 動態顯示參數
    const dialogMsg = ref({
      title: ref(''),
      body: ref(''),
    })

    // 單純的把 js function call 包起來 parent 可以呼叫
    const showModal = () => {
      document.getElementById('dialog-rounded').showModal();
    }

    // props 再次更新可以直接使用，或是有需要計算可以放到這邊
    const setDialog = computed(() => {
      // console.log(props.dialogRequest)
      dialogMsg.value.title = props.dialogRequest.title
      dialogMsg.value.body = props.dialogRequest.body
    })
    // start computed
    setDialog.value

    return { showModal, dialogMsg, setDialog }
  }
}
</script>

<style>
</style>