<script lang="ts">
import router from "../router";
export default {
  methods: {
    mainpage() {
      router.push({ path: '/' })
    }
  }
}
</script>

<template>
  <main>
    Workers
    <ui-button raised @click="mainpage">Back Home</ui-button>
  </main>
</template>
