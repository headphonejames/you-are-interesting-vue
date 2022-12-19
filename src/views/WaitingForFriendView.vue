<script lang="ts">
import { useWorkerStore } from "@/stores/worker";
import { mapWritableState } from "pinia";

export default {
  name: "WaitingForFriendView",
  computed: {
    ...mapWritableState(useWorkerStore, ["worker"]),
  },
  methods: {},
};
</script>

<template>
  <h1>Waiting for a friend</h1>
  {{ this.worker }}
</template>
