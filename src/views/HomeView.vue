<script>
import router from "../router";

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
      <HelloWorld msg="You did it!" />

      <nav>
        <KeyListener/>
        <ui-button raised @click="$router.push('workerslist')">Workers List</ui-button>
        <ui-button raised @click="$router.push('promptslist')">Prompts List</ui-button>
        <ui-button raised @click="$router.push('startshift')">Start Shift</ui-button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
