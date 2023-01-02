<script lang="ts">
import { mapState } from "pinia";
import { useWorkerStore } from "@/stores/worker";
import { useConnectionLogStore } from "@/stores/connectionLog";

export default {
  name: "YAI Header",
  props: ["title"],
  computed: {
    ...mapState(useWorkerStore, ["worker"]),
    ...mapState(useConnectionLogStore, ["connectionLog"]),
  },
};
</script>

<template>
  <div>
      <h1>{{ title }}</h1>
      <h3>
        Worker: <i>{{ worker.name }}</i>
      </h3>
    <div
      v-if="
        this.connectionLog != undefined &&
        this.connectionLog.prompt != '' &&
        this.connectionLog.prompt != null
      "
    >
        <h3>
          Prompt: <i>{{ this.connectionLog.prompt }}</i>
        </h3>
    </div>
    <br/>
  </div>
</template>
