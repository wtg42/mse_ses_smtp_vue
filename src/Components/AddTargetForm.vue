<template>
  <div id="nesscss">
    <form @submit.prevent="handleSubmit(formData)">
      <div class="nes-container with-title mx-20 mt-10 mb-10">
        
        <h3 class="title">Add Target Information</h3>
        
          <div class="flex flex-nowrap">
            <i class="nes-bcrikko md:mr-10"></i>
            <!-- Balloon -->
            <div class="nes-balloon from-left">
              <p>Fill In This Form To Add A Target</p>
            </div>
          </div>

        <!-- ipv4 -->
        <div class="nes-field mt-10">
          <label for="mail_field">IP Adress:</label>
          <input
            type="text"
            id="mail_field"
            class="nes-input"
            :placeholder="formData.ipv4"
            v-model="formData.ipv4"
          />
        </div>
        <!-- ipv4 -->
        <!-- name -->
        <div class="nes-field mt-10">
          <label for="receiver_field">Name:</label>
          <input
            type="text"
            id="receiver_field"
            class="nes-input"
            :placeholder="formData.name"
            v-model="formData.name"
          />
        </div>
        <!-- name -->
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
import { addIpListApi } from "@/composables/api.js"
import { useRouter } from "vue-router";

export default {
  name: "AddTargetForm",
  setup() {
    const formData = ref({
      ipv4: ref(""),
      name: ref(""),
    })

    // 新增
    const handleSubmit = (data) => {
      addIpListApi(data)
        .then((res) => {
          console.log(res)

        })
        .catch((err) => console.log(err))
      console.log(data.name)
    };


    return { handleSubmit, formData }
  }
}
</script>

<style>

</style>