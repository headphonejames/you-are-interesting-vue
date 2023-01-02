<script lang="ts">
import { useWorkerStore } from "@/stores/worker";
import { mapState, mapWritableState } from "pinia";
import { createConnectionLogForWorker } from "@/components/ConnectionLog";
import router from "../router";
import { useConnectionLogStore } from "@/stores/connectionLog";
import YAIHeader from "@/components/YAIHeader.vue";
import EndShiftButton from "@/components/EndShiftButton.vue";
import { useSessionStore } from "@/stores/session";

export default {
  name: "WaitingForFriendView",
  components: { EndShiftButton, YAIHeader },
  computed: {
    ...mapState(useWorkerStore, ["worker"]),
    ...mapState(useSessionStore, ["session"]),
    ...mapWritableState(useConnectionLogStore, ["connectionLog"]),
  },
  methods: {
    async connectionBegin(workerObj: any) {
      this.connectionLog = await createConnectionLogForWorker(this.worker);
      router.push({
        path: "/connectionbegin",
      });
    },
    async previousConnection() {
      // move the index back one
      this.session.connectionLogCacheIndex =
        this.session.connectionLogCacheIndex - 1;
      // repopulate previous connection
      this.connectionLog =
        this.session.connectionLogCache[this.session.connectionLogCacheIndex];
      router.push({
        path: "/connectioncompleted",
      });
    },
  },
};
</script>

<template>
  <YAIHeader title="Waiting for a friend"></YAIHeader>
  <span class="line">
    <ui-button outlined @click="connectionBegin(worker)"
      >Contact initiated</ui-button>
  </span>
  <span v-if="this.session.connectionLogCacheIndex > 0" class="line">
    <ui-button
      outlined
      @click="previousConnection()"
      >Previous connection</ui-button>
  </span>
  <EndShiftButton />
</template>
