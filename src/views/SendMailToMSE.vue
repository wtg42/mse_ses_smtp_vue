<template>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
        <BasicTextForm :ipList="ipList" />
      </div>
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
    const ipList = ref([])
    const error = ref(null)
    const load = async function() {
      try {
        let data = await fetch('http://localhost:3004/IPList')
        if (!data.ok) {
          throw new Error(data.statusText)
        }
        ipList.value = await data.json()
      } catch (err) {
        error.value = err.message
      }
    }
    load()
    return { ipList, error }
  }
}
</script>
