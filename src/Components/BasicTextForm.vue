<template>
  <div id="nesscss">
    <form @submit.prevent="handleSubmit(formData)">
      <div class="nes-container with-title mx-20 mt-10 mb-10">
        <h3 class="title">Send Mail With Basic Text</h3>
        <label for="ip_selector"></label>
        <div class="nes-field nes-select">
          <select name="ip_selector" id="ip_selector" v-model="formData.ip">
            <option v-for="ip in ipList" :key="ip.id">{{ ip.name }}</option>
          </select>
        </div>
        <div class="nes-field mt-10">
          <label for="mail_field">Sender Email:</label>
          <input
            type="text"
            id="mail_field"
            class="nes-input"
            :placeholder="formData.from"
            v-model="formData.from"
          />
        </div>
        <div class="nes-field mt-10">
          <label for="receiver_field">Receiver Email:</label>
          <input
            type="text"
            id="receiver_field"
            class="nes-input"
            :placeholder="formData.to"
            v-model="formData.to"
          />
        </div>
        <div class="nes-field mt-10">
          <label for="subject_field">Subject:</label>
          <input
            type="text"
            id="subject_field"
            class="nes-input"
            :placeholder="formData.subject"
            v-model="formData.subject"
          />
        </div>
        <div class="nes-field mt-10">
          <label for="contents_field">Contents:</label>
          <textarea
            class="nes-textarea"
            name="contents_field"
            id="contents_field"
            cols="30"
            rows="10"
            :placeholder="formData.contents"
            v-model="formData.contents"
          ></textarea>
        </div>
        <div class="nes-field mt-10 flex justify-evenly">
          <button type="submit" class="nes-btn is-primary">Send It</button>
          <button type="reset" class="nes-btn is-warning">Clean Up</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { sendMailApi } from "@/composables/api.js";

export default {
  props: ["ipList"],
  emits: ['showModal'],// emit 訊息給上層
  setup(props, context) {
    // 表單項目
    const formData = ref({
      from: ref("weitingshih@softnext.com.tw"),
      to: ref("weitingshih@rd01.softnext.com.tw"),
      subject: ref("Hello guys."),
      contents: ref("the mail from hell."),
      ip: ref(props.ipList[0].name),
    });

    // 打信
    const handleSubmit = (data) => {
      sendMailApi(data)
        .then((res) => {
          console.log(res.status);
          if (res.status == 200) {
            // 呼叫 dialog 秀訊息
            context.emit('showModal', {title: "Send mail to " + data.ip + " Succeeded", body: "status: " + res.status})
          }
        })
        .catch((err) => {
          // 呼叫 dialog 秀訊息
          context.emit('showModal', {title: "Opps!", body: err.message})
        });
    };
    return {
      formData,
      handleSubmit,
    };
  },
};
</script>

<style scope>
/* @import '/css/nes.min.css'; */
</style>
