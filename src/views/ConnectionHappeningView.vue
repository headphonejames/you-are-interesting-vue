<script lang="ts">
import YAIHeader from "@/components/YAIHeader.vue";
import ConnectionComplete from "@/components/ConnectionComplete.vue";

export default {
  name: "ConnectionHappeningView",
  components: { YAIHeader },
};
</script>

<template>
  <YAIHeader
      title="Connection Happening"
  ></YAIHeader>
  <ConnectionComplete/>
</template>
