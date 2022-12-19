<script lang="ts">
import { getWorkers } from "@/components/Workers";
import router from "../router";
import { mapWritableState } from "pinia";
import { useWorkerStore } from "@/stores/worker";
import { createTimesheetForWorker } from "@/components/Timesheet";
export default {
  data() {
    return {
      workers: [],
    };
  },
  async created() {
    this.workers = await getWorkers();
  },
  computed: {
    orderedWorkers: function (): any {
      return this.workers.sort((a: any, b: any) =>
        a.createdAt > b.createdAt ? 1 : -1
      );
    },
    ...mapWritableState(useWorkerStore, ["worker"]),
  },
  methods: {
    async beginShift(workerObj: any) {
      if (workerObj.currentTimesheetId === "") {
        // create an entry for timesheet
        await createTimesheetForWorker(workerObj.id);
      }
      // cache the worker in state
      this.worker = workerObj;
      router.push({
        path: "/waitingforfriend",
      });
    },
  },
};
</script>

<template>
  <main>
    <h1>Start Shift</h1>
    <div v-for="workerObj in orderedWorkers" :key="workerObj.id">
      <ui-button v-if="workerObj.currentTimesheetId !== ''" raised @click="beginShift(workerObj)">{{
          workerObj.name
      }} (resume shift)</ui-button>
      <ui-button v-else outlined @click="beginShift(workerObj)">{{
          workerObj.name
        }}</ui-button>
    </div>
  </main>
</template>
