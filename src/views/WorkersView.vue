<script lang="ts">
import router from "../router";
import WorkersList from "@/components/WorkersList.vue";

export default {
  name: "WorkersView",
  components: { WorkersList },
  methods: {
    mainpage() {
      router.push({ path: '/' })
    }
  }
}
</script>

<template>
  <main>
    <h1>Setup Workers</h1>
    <WorkersList></WorkersList>
    <ui-button raised @click="mainpage">Back Home</ui-button>
  </main>
</template>