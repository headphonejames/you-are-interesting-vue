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
  {{ name }}

  Waiting for friend
</template>
