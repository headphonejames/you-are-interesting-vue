<script lang="ts">
import {mapWritableState} from "pinia";
import { updateConnectionLogWithPrompt } from "@/components/ConnectionLog";
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
    ...mapWritableState(useConnectionLogStore, ["connectionLog"]),
    orderedPrompts: function (): any {
      return sortedPrompts(this.prompts);
    },
  },
  methods: {
    async selectPrompt(promptObj: any) {
      const newConnectionLog = {
        ...this.connectionLog,
        prompt: promptObj.prompt,
      };
      // update worker with prompt
      this.connectionLog = await updateConnectionLogWithPrompt(newConnectionLog);
      router.push({
        path: "/connectionhappening",
      });
    },
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
