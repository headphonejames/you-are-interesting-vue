import { defineStore } from "pinia";

export const useConnectionLogStore = defineStore("connectionLog", {
  state: () => {
    return {
      connectionLog: {
        id: "",
        timeContact: 0,
        timeFinished: 0,
        rating: 0,
        notes: "",
      },
    };
  },
});