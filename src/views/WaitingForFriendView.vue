<script lang="ts">
import { useWorkerStore } from "@/stores/worker";
import { mapState, mapWritableState } from "pinia";
import { createConnectionLogForWorker } from "@/components/ConnectionLog";
import router from "../router";
import { useConnectionLogStore } from "@/stores/connectionLog";
import YAIHeader from "@/components/YAIHeader.vue";
import EndShiftButton from "@/components/EndShiftButton.vue";

export default {
  name: "WaitingForFriendView",
  components: {EndShiftButton, YAIHeader },
  computed: {
    ...mapState(useWorkerStore, ["worker"]),
    ...mapWritableState(useConnectionLogStore, ["connectionLog"]),
  },
  methods: {
    async connectionBegin(workerObj: any) {
      this.connectionLog = await createConnectionLogForWorker(this.worker);
      router.push({
        path: "/connectionbegin",
      });
    },
  },
};
</script>

<template>
  <YAIHeader
    title="Waiting for a friend"
  ></YAIHeader>
  <ui-button outlined @click="connectionBegin(worker)"
    >Contact initiated</ui-button
  >
  <EndShiftButton/>
</template>
