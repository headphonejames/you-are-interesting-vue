<script>
import router from "../router";

export default {
  created() {
    window.addEventListener('keydown', this.handleKeyDown);
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  },
  methods: {
    handleKeyDown(event) {
      console.log(event);
      if (event.code === "Digit1") {
        router.push({ path: '/workerslist' })
      }
      if (event.code === "Digit2") {
        router.push({ path: '/promptslist' })
      }
      if (event.code === "Digit3") {
        router.push({ path: '/startshift' })
      }
    }
  }
}
</script>

<template>
</template>