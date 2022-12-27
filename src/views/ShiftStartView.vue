<script lang="ts">
import { getWorkers } from "@/components/Workers";
import router from "../router";
import { mapWritableState } from "pinia";
import { useWorkerStore } from "@/stores/worker";
import { useTimesheetStore } from "@/stores/timesheet";
import { startShiftForWorker, getTimesheet } from "@/components/Timesheet";
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
    ...mapWritableState(useTimesheetStore, ["timesheet"]),
  },
  methods: {
    async beginShift(workerObj: any) {
      if (workerObj.currentTimesheetId === "") {
        // create an entry for timesheet and cache in pinia store
        this.timesheet = await startShiftForWorker(workerObj);
      }
      //TODO check where in connection we are

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
<!--    TODO: resume connection if mid connection -->
      <ui-button v-if="workerObj.currentTimesheetId !== ''" raised @click="beginShift(workerObj)">{{
          workerObj.name
      }} (resume shift)</ui-button>
      <ui-button v-else outlined @click="beginShift(workerObj)">{{
          workerObj.name
        }}</ui-button>
    </div>
  </main>
</template>
