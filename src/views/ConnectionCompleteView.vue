<script lang="ts">
import { useWorkerStore } from "@/stores/worker";
import { mapState } from "pinia";
import { createConnectionLogForWorker } from "@/components/ConnectionLog";
import router from "../router";

export default {
  name: "ConnectionCompleteView",
  computed: {
    ...mapState(useWorkerStore, ["worker"]),
  },
  methods: {
    async connectionBegin(workerObj: any) {
      await createConnectionLogForWorker(workerObj);
      router.push({
        path: "/connectionbegins",
      });
    },
  },
};
</script>

<template>
  <h1>Waiting for a friend</h1>
  {{ worker.name }}
  <ui-button outlined @click="connectinBegin(worker)">Contact initiated</ui-button>
</template>
