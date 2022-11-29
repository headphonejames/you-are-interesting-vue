<script lang="ts">
import { API } from "aws-amplify";
import { createPrompt, deletePrompt } from "@/graphql/mutations";
import { listPrompts } from "@/graphql/queries";

// check pinia obj first?

export default {
  name: "PromptsList",
  async created() {
    this.getPrompts();
  },
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
  computed: {
    orderedPrompts: function (): any {
      return this.prompts.sort((a: any, b: any) =>
        a.createdAt > b.createdAt ? 1 : -1
      );
    },
  },
  methods: {
    async getPrompts() {
      const promptQuery: any = await API.graphql({
        query: listPrompts,
      });
      this.prompts = promptQuery.data.listPrompts.items;
    },
    async addPrompt() {
      const { promptName } = this;
      if (!promptName) return;
      const promptData = {
        prompt: promptName,
      };
      await API.graphql({
        query: createPrompt,
        variables: { input: promptData },
      });
      await this.getPrompts();
      this.promptName = "";
    },
    async checkboxClicked(prompt: any) {
      const promptData = {
        id: prompt.id,
      };
      await API.graphql({
        query: deletePrompt,
        variables: { input: promptData },
      });
      await this.getPrompts();
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
