<template>
  <div class="py-12">
    <div v-if="ipList.data && ipList.data.length > 0" class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <BasicTextForm :ipList="ipList.data" />
    </div>
    <div v-else-if="!ipList.data && !error" class="max-w-7xl mx-auto sm:px-24 lg:px-24">
      <progress class="nes-progress is-pattern" :value="progress" max="100"></progress>
    </div>
    <div v-else-if="error" class="max-w-7xl mx-auto sm:px-6 lg:px-8 text-center">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
import BasicTextForm from "@/components/BasicTextForm.vue";
import getMseIpLists from "@/composables/getMseIpLists.js"
import { jobQueueApi } from "@/composables/api.js"
export default {
  name: "SendMailToMSE",
  components: {
    BasicTextForm,
  },
  setup() {
    const { progress, ipList, error, load } = getMseIpLists()
    load()
    jobQueueApi()
    .then(function (response) {
        // Success
        console.log('success');
        console.log(response.status);
        console.log(response.data);
    })
    .catch(function (error) {
        // Error
        console.log(error);

        // Error 的詳細資訊
        console.log(error.response);
    })
    .then(function () {
        console.log('always executed');
    });
    return { ipList, error, progress }
  }
}
</script>
