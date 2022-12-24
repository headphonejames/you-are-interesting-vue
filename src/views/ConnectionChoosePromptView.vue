<script lang="ts">
import { useWorkerStore } from "@/stores/worker";
import {mapState, mapWritableState} from "pinia";
import { updateConnectionLogForWorker } from "@/components/ConnectionLog";
import router from "../router";
import { getPrompts, sortedPrompts } from "@/components/Prompts";
import {useConnectionLogStore} from "@/stores/connectionLog";
import YAIHeader from "@/components/YAIHeader.vue";
import ConnectionComplete from "@/components/ConnectionComplete.vue";

export default {
  name: "ConnectionChoosePromptView",
  components: { YAIHeader, ConnectionComplete },
  data() {
    return {
      prompts: [],
    };
  },
  async created() {
    this.prompts = await getPrompts();
  },
  computed: {
    ...mapState(useWorkerStore, ["worker"]),
    ...mapWritableState(useConnectionLogStore, ["connectionLog"]),
    orderedPrompts: function (): any {
      return sortedPrompts(this.prompts);
    },
  },
  methods: {
    async selectPrompt(prompt: any) {
      // update worker with prompt
      const newConnectionLog = {
        prompt: prompt,
        ...this.connectionLog,
      };
      this.connectionLog = await updateConnectionLogForWorker(this.worker, newConnectionLog);
      router.push({
        path: "/connectionhappening",
      });
    },
    async connectionComplete() {

    }
  },
};
</script>

<template>
  <YAIHeader
      title="Select a prompt"
  ></YAIHeader>
  <div v-for="promptObj in orderedPrompts" :key="promptObj.id">
    <ui-button outlined @click="selectPrompt(promptObj)">
      {{ promptObj.prompt }}
    </ui-button>
  </div>
  <ConnectionComplete/>
</template>
