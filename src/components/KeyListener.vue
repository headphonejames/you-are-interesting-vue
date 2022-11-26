<script>
import router from "../router";

export default {
  data() {
    return {
      count: 0
    }
  },
  created() {
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: {
    increment() {
      // update component state
      this.count++
    },
    handleKeyDown(event) {
      console.log(event);
      if (event.code === "Digit0") {
        router.push({ path: '/promptslist' })
      }
    }
  }
}
</script>

<template>
  <!-- make this button work -->
  <button @click="increment">{{ count }}</button>
</template>