<script lang="ts">
import { getWorkers } from "@/components/Workers";
import router from "../router";

export default {
  name: "ShiftStartView",
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
  },
  methods: {
    beginShift(workerName: string) {
      router.push({
        path: "/waitingforfriend",
        params: {
          workerName: workerName,
        },
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
