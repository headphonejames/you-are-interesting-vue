<script lang="ts">
import { useWorkerStore } from "@/stores/worker";
import { useConnectionLogStore } from "@/stores/connectionLog";
import {mapState, mapWritableState} from "pinia";
import { createConnectionLogForWorker } from "@/components/ConnectionLog";
import router from "../router";

export default {
  name: "ConnectionBeginView",
  computed: {
    ...mapState(useWorkerStore, ["worker"]),
    ...mapWritableState(useConnectionLogStore, ["connectionLog"]),
  },
  methods: {
    async selectPrompt(workerObj: any) {
      const newConnectionLogData = await createConnectionLogForWorker(workerObj);
      connectionLog.id = newConnectionLogData.id;

      router.push({
        path: "/connectionselectprompt",
      });
    },
  },
  async selectPrompt(workerObj: any) {
    const newConnectionLogData = await createConnectionLogForWorker(workerObj);
    connectionLog.id = newConnectionLogData.id;

    router.push({
      path: "/connectionselectprompt",
    });
  },

};
</script>

<template>
  <h1>Connection Begins.</h1>
  {{ worker.name }}
  <ui-button outlined @click="selectPrompt(worker)">Selected Prompt</ui-button>
  <ui-button outlined @click="connectinEnds(worker)">Connection Completed</ui-button>
</template>
