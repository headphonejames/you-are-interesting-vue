<script lang="ts">
import { getWorkers } from "@/components/Workers";
import router from "../router";
import { mapWritableState } from "pinia";
import { useWorkerStore } from "@/stores/worker";

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
    ...mapWritableState(useWorkerStore, ["name"]),
  },
  methods: {
    beginShift(workerName: string) {
      // create an entry for timesheet
      this.name = workerName;
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
      <ui-button outlined @click="beginShift(workerObj.name)">{{
        workerObj.name
      }}</ui-button>
    </div>
  </main>
</template>
