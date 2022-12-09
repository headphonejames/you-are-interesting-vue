<script lang="ts">
import { useWorkerStore } from "@/stores/worker";
import { mapWritableState } from "pinia";

export default {
  name: "WaitingForFriendView",
  computed: {
    ...mapWritableState(useWorkerStore, ["name"]),
  },
  methods: {},
};
</script>

<template>
  <h1>Waiting for a friend</h1>

</template>
