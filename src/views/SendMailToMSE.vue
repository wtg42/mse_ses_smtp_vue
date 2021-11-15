<template>
  <div class="py-12">
    <div v-if="ipList.length > 0" class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <BasicTextForm :ipList="ipList" />
    </div>
    <div v-else-if="!ipList.length && !error" class="max-w-7xl mx-auto sm:px-24 lg:px-24">
      <progress class="nes-progress is-pattern" :value="progress" max="100"></progress>
    </div>
    <div v-else-if="error" class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script>
import BasicTextForm from "@/components/BasicTextForm.vue";
import { ref } from 'vue';

export default {
  name: "SendMailToMSE",
  components: {
    BasicTextForm,
  },
  setup() {

    const progress = ref(1)
    const ipList = ref([])
    const error = ref(null)
    const load = async () => {
      try {
        await waitUntil(progress, 50)
        let data = await fetch('http://localhost:3004/IPList')
        if (!data.ok) {
          throw new Error(data.statusText)
        }
        await waitUntil(progress, 100)
        ipList.value = await data.json()
      } catch (err) {
        error.value = err.message
      }
    }
    async function waitUntil(progressVal, goal) {
      return new Promise(resolve => {
        const interval = setInterval(() => {
          
          progressVal.value += 1
          if (progressVal.value >= goal) {
            resolve('foo');
            clearInterval(interval);
          };
        }, 5);
      });
    }

    load()
    
    return { ipList, error, progress }
  }
}
</script>
