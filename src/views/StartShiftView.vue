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
  <div class="about">
    <h1>Start Shift</h1>
  </div>
  <ui-button raised @click="mainpage">Back Home</ui-button>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
