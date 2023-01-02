<script lang="ts">
import { mapWritableState, mapState } from "pinia";
import { updateConnectionLogWithPrompt } from "@/components/ConnectionLog";
import router from "../router";
import { getPrompts, sortedPrompts } from "@/components/Prompts";
import { useConnectionLogStore } from "@/stores/connectionLog";
import YAIHeader from "@/components/YAIHeader.vue";
import ConnectionComplete from "@/components/ConnectionCompleteButton.vue";
import { useSessionStore } from "@/stores/session";
import {
  setAction,
  attachKeyboard,
  clearBindings,
} from "@/components/RemoteKeyboard";

export default {
  name: "ConnectionChoosePromptView",
  components: { YAIHeader, ConnectionComplete },
  data() {
    return {
      prompts: [],
      promptStr: "",
    };
  },
  async created() {
    this.prompts = await getPrompts();
    const createKeyBinding = (index: number) => {
      if (this.prompts.length > index) {
        setAction("Digit" + (index + 1), () => {
          return this.selectPrompt(this.orderedPrompts[index]);
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
  beforeUnmount() {
    clearBindings();
  },
  computed: {
    ...mapWritableState(useConnectionLogStore, ["connectionLog"]),
    ...mapState(useSessionStore, ["session"]),

    orderedPrompts: function (): any {
      return sortedPrompts(this.prompts);
    },
  },
  methods: {
    async customPrompt() {
      const newConnectionLog = {
        ...this.connectionLog,
        prompt: this.promptStr,
      };
      return await this.updateDb(newConnectionLog);
    },
    async updateDb(newConnectionLog: any) {
      // update worker with prompt
      this.connectionLog = await updateConnectionLogWithPrompt(
        newConnectionLog
      );
      router.push({
        path: this.session.nextPage,
      });
    },
    async selectPrompt(promptObj: any) {
      const newConnectionLog = {
        ...this.connectionLog,
        prompt: promptObj.prompt,
      };
      return await this.updateDb(newConnectionLog);
    },
  },
};
</script>

<template>
  <YAIHeader title="Select a prompt"></YAIHeader>
  <div v-for="promptObj in orderedPrompts" :key="promptObj.id">
    <span class="line">
      <ui-button outlined @click="selectPrompt(promptObj)">
        {{ promptObj.prompt }}
      </ui-button>
    </span>
  </div>
  <ui-textfield v-model="promptStr"> Other prompt </ui-textfield>
  <span class="line">
    <ui-button raised @click="customPrompt()">Custom prompt</ui-button>
  </span>

  <ConnectionComplete v-if="this.session.nextPage === '/connectionhappening'" />
</template>
