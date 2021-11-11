<template>
  <div class="py-12">
    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
        <BasicTextForm :ip-list="ipList" />
      </div>
    </div>
  </div>
</template>

<script>
import BasicTextForm from "@/Components/BasicTextForm.vue";

export default {
  name: "SendMailToMSE",
  props: ["ipList"],
  components: {
    BasicTextForm,
  },
  setup(props) {
    console.log(props.ipList);
  },
};
</script>
