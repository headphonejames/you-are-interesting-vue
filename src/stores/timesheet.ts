import { defineStore } from "pinia";

export const useTimesheetStore = defineStore("timesheet", {
  state: () => {
    return {
      timesheet: {
        id: "",
        startTime: 0,
        stopTime: 0,
        notes: "",
      },
    };
  },
});