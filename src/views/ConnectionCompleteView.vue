<script lang="ts">
import YAIHeader from "@/components/YAIHeader.vue";
import { updateConnectionLogWithReflections } from "@/components/ConnectionLog";
import router from "@/router";
import {mapState, mapWritableState} from "pinia";
import {useWorkerStore} from "@/stores/worker";
import {useConnectionLogStore} from "@/stores/connectionLog";

export default {
  name: "ConnectionCompleteView",
  components: { YAIHeader },
  methods: {
    async waitForFriend() {
      this.connectionLog = await updateConnectionLogWithReflections(
        this.connectionLog,
        this.rating,
        this.notes
      );
      router.push({
        path: "/waitingforfriend",
      });
    },
  },
  computed: {
    ...mapWritableState(useConnectionLogStore, ["connectionLog"]),
  },
  data() {
    return {
      notes: "",
      rating: 0,
    };
  },
};
</script>

<template>
  <YAIHeader title="Connection Completed"></YAIHeader>
  <div>
    <ui-form-field>
      <ui-radio v-model="rating" input-id="very-fun" value="5"></ui-radio>
      <label for="very-fun">very fun!</label>
    </ui-form-field>
    <ui-form-field>
      <ui-radio v-model="rating" input-id="fun" value="4"></ui-radio>
      <label for="fun">fun</label>
    </ui-form-field>
    <ui-form-field>
      <ui-radio v-model="rating" input-id="ok" value="3"></ui-radio>
      <label for="ok">ok</label>
    </ui-form-field>
    <ui-form-field>
      <ui-radio v-model="rating" input-id="not fun" value="2"></ui-radio>
      <label for="very-fun">not fun</label>
    </ui-form-field>
    <ui-form-field>
      <ui-radio v-model="rating" input-id="ineffective" value="1"></ui-radio>
      <label for="ineffective">ineffective</label>
    </ui-form-field>
    <ui-textfield
      v-model="notes"
      outlined
      input-type="textarea"
      rows="8"
      cols="40"
      >Notes</ui-textfield
    >
  </div>
  <ui-button raised @click="waitForFriend()"
    >Go back out into the world</ui-button
  >
</template>
