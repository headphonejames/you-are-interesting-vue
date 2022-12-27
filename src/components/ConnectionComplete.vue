<script lang="ts">
import {completeConnectionLog } from "@/components/ConnectionLog";
import router from "@/router";
import { mapState, mapWritableState } from "pinia";
import { useWorkerStore } from "@/stores/worker";
import { useConnectionLogStore } from "@/stores/connectionLog";

export default {
  methods: {
    async connectionComplete() {
      await completeConnectionLog(this.connectionLog);
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
  <ui-button raised @click="connectionComplete()">Go back into the world</ui-button
  ><br />
</template>
