<script lang="ts">
import { API } from 'aws-amplify';
import { createWorker, deleteWorker } from '@/graphql/mutations';
import { listWorkers, getWorker } from '@/graphql/queries';

// check pinia obj first?

export default {
  name: 'WorkersList',
  async created() {
    this.getWorkers();
  },
  data() {
    return {
      workerName: '',
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
        isValidMsg: false
      }
    };
  },
  computed: {
    orderedWorkers: function () : any {
      return this.workers.sort((a: any, b: any) => (a.createdAt > b.createdAt) ? 1 : -1)
    }
  },
  methods: {
    async getWorkers() {
      const workerQuery: any = await API.graphql({
        query: listWorkers
      });
      this.workers = workerQuery.data.listWorkers.items;
    },
    async addWorker() {
      const { workerName } = this;
      if ( !workerName ) return;
      const workerData = {
        name: workerName,
        logIndex: 0,
        timeSheetIndex: 0
      };
      await API.graphql({
        query: createWorker,
        variables: { input: workerData }
      });
      await this.getWorkers();
      this.workerName = '';
    },
    async checkboxClicked(worker: any) {
      const workerData = {
        id: worker.id
        };
      await API.graphql({
        query: deleteWorker,
        variables: { input: workerData }
      });
      await this.getWorkers();
    }
  }
}
</script>

<template>
  <main>
    <h1>Workers List</h1>
    <div v-for="worker in orderedWorkers" :key="worker.id">
      <ui-form-field>
        <ui-checkbox
            @change="checkboxClicked(worker)"
            :input-id="worker.id"
        ></ui-checkbox>
        <label for="checkbox">{{worker.name}}</label>
      </ui-form-field>
    </div>
    <section>
      <ui-textfield
          v-model="workerName"
          :disabled="controls.disabled"
          :dense="controls.dense"
          :required="controls.required"
          :class="{'demo-text-field-custom-colors': controls.customColor}"
          helper-text-id="my-text-field-helper-text"
          v-on:keyup.enter="addWorker"
      >
        Worker Name
      </ui-textfield>
      <ui-button v-on:click="addWorker">Create Worker</ui-button>
      </section>
  </main>
</template>
