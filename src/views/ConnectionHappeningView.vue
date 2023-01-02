<script lang="ts">
import YAIHeader from "@/components/YAIHeader.vue";
import ConnectionComplete from "@/components/ConnectionCompleteButton.vue";
import {attachKeyboard, clearBindings} from "@/components/RemoteKeyboard";

export default {
  name: "ConnectionHappeningView",
  components: { YAIHeader, ConnectionComplete },
  created() {
    attachKeyboard();
  },
  beforeUnmount() {
    clearBindings();
  },
};
</script>

<template>
  <YAIHeader
      title="Connection Happening"
  ></YAIHeader>
  <ConnectionComplete/>
</template>
