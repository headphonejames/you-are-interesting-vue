<script lang="ts">
import { mapWritableState } from "pinia";
import router from "../router";
import YAIHeader from "@/components/YAIHeader.vue";
import ConnectionComplete from "@/components/ConnectionCompleteButton.vue";
import { useSessionStore } from "@/stores/session";
import {setAction, attachKeyboard, removeKeyboard, clearBindings} from "@/components/RemoteKeyboard";

export default {
  name: "ConnectionBeginView",
  components: { YAIHeader, ConnectionComplete },
  created() {
    setAction("Digit1", this.selectPrompt);
    attachKeyboard();
  },
  beforeUnmount() {
    clearBindings();
  },
  computed: {
    ...mapWritableState(useSessionStore, ["session"]),
  },
  methods: {
    async selectPrompt() {
      this.session.nextPage = "/connectionhappening";
      router.push({
        path: "/connectionselectprompt",
      });
    },
  },
};
</script>

<template>
  <YAIHeader title="Connection Begins"></YAIHeader>
  <span class="line">
    <ui-button outlined @click="selectPrompt()">Select Prompt</ui-button>
  </span>
  <ConnectionComplete />
</template>
