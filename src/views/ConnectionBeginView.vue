<script lang="ts">
import { useWorkerStore } from "@/stores/worker";
import { useConnectionLogStore } from "@/stores/connectionLog";
import {mapState, mapWritableState} from "pinia";
import { createConnectionLogForWorker, updateConnectionLogForWorker } from "@/components/ConnectionLog";
import router from "../router";
import YAIHeader from "@/components/YAIHeader.vue";
import ConnectionComplete from "@/components/ConnectionCompleteButton.vue";

export default {
  name: "ConnectionBeginView",
  components: { YAIHeader, ConnectionComplete },
  computed: {
    ...mapState(useWorkerStore, ["worker"]),
    ...mapWritableState(useConnectionLogStore, ["connectionLog"]),
  },
  methods: {
    async selectPrompt() {
      this.connectionLog = await createConnectionLogForWorker(this.worker);
      router.push({
        path: "/connectionselectprompt",
      });
    },
  }
};
</script>

<template>
  <YAIHeader
      title="Connection Begins"
  ></YAIHeader>
  <ui-button outlined @click="selectPrompt()">Select Prompt</ui-button><br/>
  <ConnectionComplete/>
</template>
