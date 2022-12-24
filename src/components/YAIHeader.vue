<script lang="ts">
import { mapState } from "pinia";
import { useWorkerStore } from "@/stores/worker";

export default {
  name: "YAI Header",
  props: ["title"],
  computed: {
    ...mapState(useWorkerStore, ["worker"]),
  },
};
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <br />
    <h3>
      Worker <i>{{ worker.name }}</i>
    </h3>
    <br />
  </div>
</template>
