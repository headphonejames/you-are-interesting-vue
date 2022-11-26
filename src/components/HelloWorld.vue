<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      // update component state
      this.count++
    }
  }
}
</script>

<template>
  <!-- make this button work -->
  <button @click="increment">{{ count }}</button>
</template>