<script lang="ts">
import { useWorkerStore } from "@/stores/worker";
import { mapState } from "pinia";
import { createConnectionLogForWorker } from "@/components/ConnectionLog";
import router from "../router";
import YAIHeader from "@/components/YAIHeader.vue";

export default {
  name: "ConnectionHappeningView",
  components: { YAIHeader },
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
  <YAIHeader
      title="Waiting for a friend"
  ></YAIHeader>
  <ui-button outlined @click="connectinBegin(worker)">Contact initiated</ui-button>
</template>
