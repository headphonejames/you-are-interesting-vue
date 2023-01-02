<script lang="ts">
import YAIHeader from "@/components/YAIHeader.vue";
import { updateConnectionLogWithReflections } from "@/components/ConnectionLog";
import router from "@/router";
import { mapWritableState } from "pinia";
import {
  useConnectionLogStore,
  emptyConnectionLog,
} from "@/stores/connectionLog";
import { useSessionStore } from "@/stores/session";
import {
  setAction,
  attachKeyboard,
  removeKeyboard,
} from "@/components/RemoteKeyboard";

export default {
  name: "ConnectionCompleteView",
  components: { YAIHeader },
  created() {
    setAction("Digit1", () => {
      this.connectionLog.rating = 5;
    });
    setAction("Digit2", () => {
      this.connectionLog.rating = 4;
    });
    setAction("Digit3", () => {
      this.connectionLog.rating = 3;
    });
    setAction("Digit4", () => {
      this.connectionLog.rating = 2;
    });
    setAction("Digit5", () => {
      this.connectionLog.rating = 1;
    });
    setAction("Digit6", this.waitForFriend);
    attachKeyboard();
  },
  unmount() {
    removeKeyboard();
  },
  methods: {
    calculateConnectTime(connectionLog: any) {
      const connectionLengthMillis =
        connectionLog.timeFinished - connectionLog.timeContact;
      return Math.floor(connectionLengthMillis / (1000 * 60));
    },
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
      // update cache
      this.session.connectionLogCache[this.session.connectionLogCacheIndex] =
        this.connectionLog;
      // reset model data
      this.connectionLengthUpdated = false;
    },
    async waitForFriend() {
      this.session.connectionLogCache.push(this.connectionLog);
      await this.updateDb();
      // stash log in session object incase we want to update it later
      this.session.connectionLogCacheIndex =
        this.session.connectionLogCacheIndex + 1;
      // reset the connectionLog obj
      this.connectionLog = emptyConnectionLog();
      router.push({
        path: "/waitingforfriend",
      });
    },
    async earlierConnection() {
      await this.updateDb();
      // move the index back one
      this.session.connectionLogCacheIndex =
        this.session.connectionLogCacheIndex - 1;
      this.resetModelData();
    },
    async forwardConnection() {
      await this.updateDb();
      // move the index forward one
      this.session.connectionLogCacheIndex =
        this.session.connectionLogCacheIndex + 1;
      this.resetModelData();
    },
    async selectPrompt() {
      await this.updateDb();
      this.session.nextPage = "/connectioncompleted";
      router.push({
        path: "/connectionselectprompt",
      });
    },
    async finishShift() {
      await this.updateDb();
      router.push({
        path: "/shiftfinished",
      });
    },
    resetModelData() {
      // update pinia store
      this.connectionLog =
        this.session.connectionLogCache[this.session.connectionLogCacheIndex];
      // update connection time
      this.connectionLengthMinutes = this.calculateConnectTime(
        this.connectionLog
      );
      this.connectionLengthUpdated = false;
    },
  },
  computed: {
    ...mapWritableState(useConnectionLogStore, ["connectionLog"]),
    ...mapWritableState(useSessionStore, ["session"]),
    timeConnected: function (): string {
      return new Date(
        parseInt(this.connectionLog.timeContact)
      ).toLocaleTimeString("en-US");
    },
  },
  data() {
    const store = useConnectionLogStore();
    return {
      updatingConnectionTime: false,
      connectionLengthUpdated: false,
      connectionLengthMinutes: this.calculateConnectTime(store.connectionLog),
    };
  },
  watch: {
    connectionLengthMinutes() {
      this.connectionLengthUpdated = true;
    },
  },
};
</script>

<template>
  <YAIHeader title="Connection Completed"></YAIHeader>
  <span class="line">
    <h4>Time connected: {{ timeConnected }}</h4>
  </span>
  <span class="line">
    <ui-button raised @click="selectPrompt">Select Prompt</ui-button>
  </span>
  <div>
    <ui-form-field>
      <ui-radio
        v-model="connectionLog.rating"
        input-id="very-fun"
        value="5"
      ></ui-radio>
      <label for="very-fun">very fun!</label>
    </ui-form-field>
    <ui-form-field>
      <ui-radio
        v-model="connectionLog.rating"
        input-id="fun"
        value="4"
      ></ui-radio>
      <label for="fun">fun</label>
    </ui-form-field>
    <ui-form-field>
      <ui-radio
        v-model="connectionLog.rating"
        input-id="ok"
        value="3"
      ></ui-radio>
      <label for="ok">ok</label>
    </ui-form-field>
    <ui-form-field>
      <ui-radio
        v-model="connectionLog.rating"
        input-id="not fun"
        value="2"
      ></ui-radio>
      <label for="very-fun">not fun</label>
    </ui-form-field>
    <ui-form-field>
      <ui-radio
        v-model="connectionLog.rating"
        input-id="ineffective"
        value="1"
      ></ui-radio>
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
  <span class="line">
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
  </span>
  <div v-if="updatingConnectionTime">
    <h2>connection length: {{ this.connectionLengthMinutes }}</h2>
    <ui-slider
      v-model="this.connectionLengthMinutes"
      min="0"
      max="30"
    ></ui-slider>
  </div>
  <div v-if="this.session.connectionLogCacheIndex > 0">
    <span class="line">
      <ui-button outlined @click="earlierConnection()"
        >Go to previous connection</ui-button
      ></span
    >
  </div>
  <div
    v-if="
      this.session.connectionLogCacheIndex <
      this.session.connectionLogCache.length - 1
    "
  >
    <span class="line">
      <ui-button outlined @click="forwardConnection()"
        >Go to forward connection</ui-button
      >
    </span>
  </div>
  <span class="line">
    <ui-button raised @click="waitForFriend()"
      >Go back out into the world</ui-button
    >
  </span>
  <span class="line">
    <ui-button outlined @click="finishShift()">Finish shift</ui-button>
  </span>
</template>
