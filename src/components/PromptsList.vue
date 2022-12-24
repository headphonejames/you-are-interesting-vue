<script lang="ts">
import { getPrompts, addPrompt, removePrompt, sortedPrompts } from "@/components/Prompts"
// check pinia obj first?

export default {
  name: "PromptsList",
  data() {
    return {
      promptName: "",
      prompts: [],
      checkboxes: [],
      controls: {
        disabled: false,
        rtl: false,
        dense: false,
        required: false,
        customColor: false,
        helperText: false,
        isVisible: false,
        isValidMsg: false,
      },
    };
  },
  async created() {
    this.prompts = await getPrompts();
  },
  computed: {
    orderedPrompts: function (): any {
      return sortedPrompts(this.prompts);
    },
  },
  methods: {
    async addPrompt() {
      const { promptName } = this;
      if (!promptName) return;
      this.prompts = await addPrompt(promptName);
      this.promptName = "";
    },
    async checkboxClicked(prompt: any) {
      this.prompts = await removePrompt(prompt);
    },
  },
};
</script>

<template>
  <main>
    <h1>Prompts List</h1>
    <div v-for="promptObj in orderedPrompts" :key="promptObj.id">
      <ui-form-field>
        <ui-checkbox
          @change="checkboxClicked(promptObj)"
          :input-id="promptObj.id"
        ></ui-checkbox>
        <label for="checkbox">{{ promptObj.prompt }}</label>
      </ui-form-field>
    </div>
    <section>
      <ui-textfield
        v-model="promptName"
        :disabled="controls.disabled"
        :dense="controls.dense"
        :required="controls.required"
        :class="{ 'demo-text-field-custom-colors': controls.customColor }"
        helper-text-id="my-text-field-helper-text"
        v-on:keyup.enter="addPrompt"
      >
        Prompt Name
      </ui-textfield>
      <ui-button v-on:click="addPrompt">Create Prompt</ui-button>
    </section>
  </main>
</template>
