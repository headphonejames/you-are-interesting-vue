<script lang="ts">
import { useWorkerStore } from "@/stores/worker";
import { mapState, mapWritableState } from "pinia";
import { createConnectionLogForWorker } from "@/components/ConnectionLog";
import router from "../router";
import { useConnectionLogStore } from "@/stores/connectionLog";
import YAIHeader from "@/components/YAIHeader.vue";
import { useSessionStore } from "@/stores/session";
import {
  setAction,
  attachKeyboard,
  clearBindings,
} from "@/components/RemoteKeyboard";

export default {
  name: "WaitingForFriendView",
  components: { YAIHeader },
  created() {
    setAction("Digit1", this.connectionBegin);
    if (this.session.connectionLogCacheIndex > 0) {
      setAction("Digit2", this.previousConnection);
    }
    setAction("Digit6", this.finishShift);
    attachKeyboard();
  },
  unmount() {
    clearBindings();
  },
  computed: {
    ...mapState(useWorkerStore, ["worker"]),
    ...mapState(useSessionStore, ["session"]),
    ...mapWritableState(useConnectionLogStore, ["connectionLog"]),
  },
  methods: {
    finishShift() {
      router.push({
        path: "/shiftfinished",
      });
    },
    async connectionBegin() {
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
    <ui-button outlined @click="connectionBegin()">Contact initiated</ui-button>
  </span>
  <span v-if="this.session.connectionLogCacheIndex > 0" class="line">
    <ui-button outlined @click="previousConnection()"
      >Previous connection</ui-button
    >
  </span>
  <span class="line">
    <ui-button outlined @click="finishShift()">Finish Shift</ui-button>
  </span>
</template>
