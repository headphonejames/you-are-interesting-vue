<script lang="ts">
import router from "../router";
import PromptsList from "@/components/PromptsList.vue";

export default {
  name: "PromptsView",
  components: { PromptsList },
  methods: {
    mainpage() {
      router.push({ path: '/' })
    }
  }
}
</script>

<template>
  <main>
    <h1>Setup Prompts</h1>
    <PromptsList></PromptsList>
    <ui-button raised @click="mainpage">Back Home</ui-button>
  </main>
</template>