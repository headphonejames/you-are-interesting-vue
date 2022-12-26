<script lang="ts">
import router from "../router";
import YAIHeader from "@/components/YAIHeader.vue";
import {finalizeShiftForWorker, finishShiftForWorker} from "@/components/Timesheet"
import { useTimesheetStore } from "@/stores/timesheet";
import { useWorkerStore } from "@/stores/worker";
import {mapState, mapWritableState} from "pinia";


export default {
  name: "ShiftFinishView",
  components: { YAIHeader },
  data() {
    return {
      notes: '',
    };
  },
  computed: {
    ...mapState(useWorkerStore, ["worker"]),
    ...mapWritableState( useTimesheetStore, ["timesheet"]),
  },
  methods: {
    async finishShift() {
      await finalizeShiftForWorker(this.worker, this.notes);
      router.push({ path: '/' })
    }
  },
}
</script>

<template>
  <YAIHeader/>
  <div>
    <ui-textfield
        v-model="notes"
        fullwidth
        maxlength="100"
        placeholder="Notes from shift"
        with-counter
    ></ui-textfield>
  </div>
  <ui-button raised @click="finishShift()">All done!</ui-button>
</template>