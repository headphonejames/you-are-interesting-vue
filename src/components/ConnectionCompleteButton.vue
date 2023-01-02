<script lang="ts">
import { updateConnectionLogWithEndtime } from "@/components/ConnectionLog";
import router from "@/router";
import { mapState, mapWritableState } from "pinia";
import { useWorkerStore } from "@/stores/worker";
import { useConnectionLogStore } from "@/stores/connectionLog";
import {
  setAction,
  attachKeyboard,
  clearBindings,
} from "@/components/RemoteKeyboard";

export default {
  created() {
    setAction("Digit3", this.connectionComplete);
    attachKeyboard();
  },
  beforeUnmount() {
    clearBindings();
  },
  methods: {
    async connectionComplete() {
      this.connectionLog = await updateConnectionLogWithEndtime(
        this.connectionLog
      );
      router.push({
        path: "/connectioncompleted",
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
  <span class="line">
    <ui-button raised @click="connectionComplete()">Contact complete</ui-button>
  </span>
</template>
