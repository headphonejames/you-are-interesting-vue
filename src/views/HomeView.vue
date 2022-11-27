 <script lang="ts">
import router from "../router";
export default {
  created() {
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: {
    workers() {
      router.push({ path: '/workerslist' })
    },
    prompts() {
      router.push({ path: '/promptslist' })
    },
    startshift() {
      router.push({ path: '/startshift' })
    },
    handleKeyDown(event : KeyboardEvent) {
      if (event.code === "Digit1") {
        this.workers();
      }
      if (event.code === "Digit2") {
        this.prompts();
      }
      if (event.code === "Digit3") {
        this.startshift();
      }
    }
  }
}
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
        <ui-button raised @click="workers">Workers List</ui-button>
        <ui-button raised @click="prompts">Prompts List</ui-button>
        <ui-button raised @click="startshift">Start Shift</ui-button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
