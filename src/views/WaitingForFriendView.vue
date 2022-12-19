<script lang="ts">
import { useWorkerStore } from "@/stores/worker";
import { mapState } from "pinia";

export default {
  name: "WaitingForFriendView",
  computed: {
    ...mapState(useWorkerStore, ["worker"]),
  },
  methods: {},
};
</script>

<template>
  <h1>Waiting for a friend</h1>
  {{ worker.id }}
</template>
