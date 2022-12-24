<script lang="ts">
import YAIHeader from "@/components/YAIHeader.vue";
import ConnectionComplete from "@/components/ConnectionComplete.vue";

export default {
  name: "ConnectionCompleteView",
  components: { YAIHeader, ConnectionComplete },
};
</script>

<template>
  <YAIHeader
      title="Connection Completed"
  ></YAIHeader>
  <ConnectionComplete/>
</template>
