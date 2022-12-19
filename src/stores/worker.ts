import { defineStore } from "pinia";

export const useWorkerStore = defineStore("worker", {
  state: () => {
    return {
      worker: {},
    };
  },
});