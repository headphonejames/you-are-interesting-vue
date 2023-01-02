<script lang="ts">
import { finishShiftForWorker } from "@/components/Timesheet";
import router from "@/router";
import { mapState, mapWritableState } from "pinia";
import { useWorkerStore } from "@/stores/worker";
import { useConnectionLogStore } from "@/stores/connectionLog";

export default {
  methods: {
    async finishShift() {
      await finishShiftForWorker(this.worker);
      router.push({
        path: "/shiftfinished",
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
    <ui-button raised @click="finishShift()">Finish Shift</ui-button><br />
  </span>
</template>
