<script lang="ts">
import YAIHeader from "@/components/YAIHeader.vue";
import ConnectionComplete from "@/components/ConnectionComplete.vue";
import {mapState} from "pinia";
import {useConnectionLogStore} from "@/stores/connectionLog";

export default {
  name: "ConnectionHappeningView",
  components: { YAIHeader, ConnectionComplete },
  computed: {
    ...mapState(useConnectionLogStore, ["connectionLog"]),
  },
};
</script>

<template>
  <YAIHeader
      title="Connection Happening"
  ></YAIHeader>
  <ConnectionComplete/>
</template>
