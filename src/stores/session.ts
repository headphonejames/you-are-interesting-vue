import { defineStore } from "pinia";

export const useSessionStore = defineStore("session", {
  state: () => {
    return {
      session: {
        nextPage: "/connectionhappening",
      },
    };
  },
});