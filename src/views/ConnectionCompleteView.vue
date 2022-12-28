<script lang="ts">
import YAIHeader from "@/components/YAIHeader.vue";
import { updateConnectionLogWithReflections } from "@/components/ConnectionLog";
import router from "@/router";
import { mapWritableState } from "pinia";
import { useConnectionLogStore } from "@/stores/connectionLog";
import { useSessionStore } from "@/stores/session";
export default {
  name: "ConnectionCompleteView",
  components: { YAIHeader },
  methods: {
    async updateDb() {
      let timeFinished = this.connectionLog.timeFinished;
      if (this.connectionLengthUpdated) {
        timeFinished =
          parseInt(this.connectionLog.timeContact) +
          this.connectionLengthMinutes * 60 * 1000;
      }
      this.connectionLog = await updateConnectionLogWithReflections(
        this.connectionLog,
        timeFinished
      );
    },
    async waitForFriend() {
      await this.updateDb();
      router.push({
        path: "/waitingforfriend",
      });
    },
    async selectPrompt() {
      await this.updateDb();
      this.session.nextPage = "/connectioncompleted";
      router.push({
        path: "/connectionselectprompt",
      });
    },
  },
  computed: {
    ...mapWritableState(useConnectionLogStore, ["connectionLog"]),
    ...mapWritableState(useSessionStore, ["session"]),
  },
  data() {
    const store = useConnectionLogStore();
    const connectionLengthMillis =
      store.connectionLog.timeFinished - store.connectionLog.timeContact;
    return {
      updatingConnectionTime: false,
      connectionLengthUpdated: false,
      connectionLengthMinutes: Math.floor(connectionLengthMillis / (1000 * 60)),
    };
  },
  watch: {
    connectionLengthMinutes(newValue: number) {
      this.connectionLengthUpdated = true;
    },
  },
};
</script>

<template>
  <YAIHeader title="Connection Completed"></YAIHeader>
  <ui-button raised @click="selectPrompt">Select Prompt</ui-button>
  <div>
    <ui-form-field>
      <ui-radio v-model="connectionLog.rating" input-id="very-fun" value="5"></ui-radio>
      <label for="very-fun">very fun!</label>
    </ui-form-field>
    <ui-form-field>
      <ui-radio v-model="connectionLog.rating" input-id="fun" value="4"></ui-radio>
      <label for="fun">fun</label>
    </ui-form-field>
    <ui-form-field>
      <ui-radio v-model="connectionLog.rating" input-id="ok" value="3"></ui-radio>
      <label for="ok">ok</label>
    </ui-form-field>
    <ui-form-field>
      <ui-radio v-model="connectionLog.rating" input-id="not fun" value="2"></ui-radio>
      <label for="very-fun">not fun</label>
    </ui-form-field>
    <ui-form-field>
      <ui-radio v-model="connectionLog.rating" input-id="ineffective" value="1"></ui-radio>
      <label for="ineffective">ineffective</label>
    </ui-form-field>
    <ui-textfield
      v-model="connectionLog.notes"
      outlined
      input-type="textarea"
      rows="8"
      cols="40"
      >Notes</ui-textfield
    >
  </div>
  <ui-button
    v-if="!updatingConnectionTime"
    raised
    @click="updatingConnectionTime = !updatingConnectionTime"
    >Update connection time</ui-button
  >
  <ui-button
    v-else
    raised
    @click="updatingConnectionTime = !updatingConnectionTime"
    >Hide connection time</ui-button
  >
  <div v-if="updatingConnectionTime">
    <h2>connection length: {{ this.connectionLengthMinutes }}</h2>
    <ui-slider
      v-model="this.connectionLengthMinutes"
      min="0"
      max="30"
    ></ui-slider>
  </div>
  <ui-button raised @click="waitForFriend()"
    >Go back out into the world</ui-button
  >
</template>
