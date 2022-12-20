import { defineStore } from "pinia";

export const useConnectionLogStore = defineStore("connectionLog", {
  state: () => {
    return {
      connectionLog: {
        id: "",
        timePrompt: 0,
        timeContact: 0,
        timeFinished: 0,
        rating: 0,
        notes: "",
      },
    };
  },
});