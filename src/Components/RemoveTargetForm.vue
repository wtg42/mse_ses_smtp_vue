<template>
  <div id="nesscss">
    <form @submit.prevent="handleSubmit(formData)">
      <div class="nes-container with-title mx-20 mt-10 mb-10">
        
        <h3 class="title">Remove Target Information</h3>
        
          <div class="flex flex-nowrap">
            <i class="nes-bcrikko md:mr-10"></i>
            <!-- Balloon -->
            <div class="nes-balloon from-left">
              <p>Remove Target From Bottom List</p>
            </div>
          </div>

          <label>
            <input type="checkbox" class="nes-checkbox" checked />
            <span>Enable</span>
          </label>
        
        <!-- 按鈕佈局 -->
        <div class="nes-field mt-10 flex justify-center space-x-10">
          <!-- <form method="dialog"><button class="nes-btn">Cancel</button></form> -->
          <button type="submit" class="nes-btn is-primary">Send It</button>
          <button type="reset" class="nes-btn is-warning">Clean Up</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue"
import { ipListApi } from "@/composables/api.js"

export default {
  name: "RemoveTargetForm",
  setup() {
    const formData = ref({
      ipv4: ref(""),
      name: ref(""),
    })

    const load = async () => {
        try {
            let response = await ipListApi()
            if (response.status >= 500) {
                throw new Error('Opps! server have some problms.')
            }
            await waitUntil(progress, 100)
            ipList.value = response.data
        } catch (err) {
            error.value = err.message
        }
    }


    return { handleSubmit, formData }
  }
}
</script>

<style>

</style>