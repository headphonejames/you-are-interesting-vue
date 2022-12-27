<script lang="ts">
import {updateConnectionLogWithEndtime } from "@/components/ConnectionLog";
import router from "@/router";
import { mapState, mapWritableState } from "pinia";
import { useWorkerStore } from "@/stores/worker";
import { useConnectionLogStore } from "@/stores/connectionLog";

export default {
  methods: {
    async connectionComplete() {
      this.connectionLog = await updateConnectionLogWithEndtime(this.connectionLog);
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
  <ui-button raised @click="connectionComplete()">Contact complete</ui-button
  ><br />
</template>
