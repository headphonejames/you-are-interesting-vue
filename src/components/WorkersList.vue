<script lang="ts">
import { getWorkers, removeWorker, addWorker } from "@/components/Workers";
// check pinia obj first?

export default {
  name: "WorkersList",
  data() {
    return {
      workerName: "",
      workers: [],
      checkboxes: [],
      controls: {
        disabled: false,
        rtl: false,
        dense: false,
        required: false,
        customColor: false,
        helperText: false,
        isVisible: false,
        isValidMsg: false,
      },
    };
  },
  computed: {
    orderedWorkers: function (): any {
      return this.workers.sort((a: any, b: any) =>
        a.createdAt > b.createdAt ? 1 : -1
      );
    },
  },
  async created() {
    this.workers = await getWorkers();
  },
  methods: {
    async submitName() {
      const { workerName } = this;
      this.workers = await addWorker(workerName);
      this.workerName = "";
    },
    async checkboxClicked(worker: any) {
      this.workers = await removeWorker(worker);
    },
  },
};
</script>

<template>
  <main>
    <h1>Workers List</h1>
    <div v-for="workerObj in orderedWorkers" :key="workerObj.id">
      <ui-form-field>
        <ui-checkbox
          @change="checkboxClicked(workerObj)"
          :input-id="workerObj.id"
        ></ui-checkbox>
        <label for="checkbox">{{ workerObj.name }}</label>
      </ui-form-field>
    </div>
    <section>
      <ui-textfield
        v-model="workerName"
        :disabled="controls.disabled"
        :dense="controls.dense"
        :required="controls.required"
        :class="{ 'demo-text-field-custom-colors': controls.customColor }"
        helper-text-id="my-text-field-helper-text"
        v-on:keyup.enter="submitName"
      >
        Worker Name
      </ui-textfield>
      <ui-button v-on:click="submitName">Create Worker</ui-button>
    </section>
  </main>
</template>
