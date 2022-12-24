<script lang="ts">
import {
  createConnectionLogForWorker,
  updateConnectionLogForWorker,
} from "@/components/ConnectionLog";
import router from "@/router";
import { mapState, mapWritableState } from "pinia";
import { useWorkerStore } from "@/stores/worker";
import { useConnectionLogStore } from "@/stores/connectionLog";

export default {
  methods: {
    async connectionComplete() {
      this.connectionLog = await createConnectionLogForWorker(this.worker);
      this.connectionLog.timeFinished = Date.now();
      await updateConnectionLogForWorker(this.worker, this.connectionLog);
      router.push({
        path: "/waitingforfriend",
      });
    },
  },
  computed: {
    ...mapState(useWorkerStore, ["worker"]),
    ...mapWritableState(useConnectionLogStore, ["connectionLog"]),
  },
};
</script>

<template>
  <ui-button raised @click="connectionComplete()">Connection Complete</ui-button
  ><br />
</template>
