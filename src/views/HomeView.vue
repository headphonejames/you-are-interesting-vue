<script lang="ts">
import router from "../router";
import { setAction, attachKeyboard, clearBindings } from "@/components/RemoteKeyboard";

export default {
  created() {
    setAction("Digit1", this.workers);
    setAction("Digit2", this.prompts);
    setAction("Digit3", this.shiftstart);
    attachKeyboard();
  },
  beforeUnmount() {
    clearBindings();
  },
  methods: {
    workers() {
      router.push({ path: "/workerslist" });
    },
    prompts() {
      router.push({ path: "/promptslist" });
    },
    shiftstart() {
      router.push({ path: "/shiftstart" });
    },
  },
};
</script>

<template>
  <header>
    <img
      alt="You are interesting logo"
      class="logo"
      src="@/assets/img/YAI-logo-color-sm.png"
      width="125"
      height="125"
    />
    <div class="wrapper">
      <nav>
        <span class="line">
        <ui-button raised @click="workers">Workers List</ui-button>
        </span>
        <span class="line">

          <ui-button raised @click="prompts">Prompts List</ui-button>
        </span>
        <span class="line">
        <ui-button raised @click="shiftstart">Start Shift</ui-button>
        </span>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
