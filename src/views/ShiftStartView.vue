<script lang="ts">
import { getWorkers } from "@/components/Workers";
import router from "../router";
import { mapWritableState } from "pinia";
import { useWorkerStore } from "@/stores/worker";
import { useTimesheetStore } from "@/stores/timesheet";
import {
  startShiftForWorker,
  updateWorkerTimesheet,
} from "@/components/Timesheet";
import {
  setAction,
  attachKeyboard,
  clearBindings,
} from "@/components/RemoteKeyboard";

export default {
  data() {
    return {
      workers: [],
    };
  },
  async created() {
    this.workers = await getWorkers();
    const createKeyBinding = (index: number) => {
      if (this.workers.length > index) {
        setAction("Digit" + (index + 1), () => {
          return this.beginShift(this.workers[index]);
        });
      }
    };
    createKeyBinding(0);
    createKeyBinding(1);
    createKeyBinding(2);
    createKeyBinding(3);
    createKeyBinding(4);
    attachKeyboard();
  },
  unmount() {
    clearBindings();
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
      if (workerObj.currentTimesheetId === "" || workerObj.currentTimesheetId === null) {
        // create an entry for timesheet and cache in pinia store
        this.timesheet = await startShiftForWorker(workerObj);
        this.worker = await updateWorkerTimesheet(workerObj, this.timesheet);
      } else {
        // cache the worker in state
        this.worker = workerObj;
      }
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
      <!--    TODO: resume connection if mid connection? -->
      <span class="line">
        <ui-button
          v-if="workerObj.currentTimesheetId !== ''"
          raised
          @click="beginShift(workerObj)"
          >{{ workerObj.name }} (resume shift)</ui-button
        >
        <ui-button v-else outlined @click="beginShift(workerObj)">{{
          workerObj.name
        }}</ui-button>
      </span>
    </div>
  </main>
</template>
