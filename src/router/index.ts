import { createRouter, createWebHistory } from "vue-router";
import WorkersView from "../views/WorkersView.vue";
import PromptsView from "../views/PromptsView.vue";
import HomeView from "../views/HomeView.vue";
import ShiftStartView from "../views/ShiftStartView.vue";
import ShiftFinishView from "../views/ShiftFinishView.vue";
import WaitingForFriendView from "../views/WaitingForFriendView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/workerslist",
      name: "workersList",
      component: WorkersView,
    },
    {
      path: "/promptslist",
      name: "promptsList",
      component: PromptsView,
    },
    {
      path: "/waitingforfriend",
      name: "waitingForFriend",
      component: WaitingForFriendView,
      props: true,
    },
    // {
    //   path: "/connectionbegin",
    //   name: "connectionBegin",
    //   component: ConnectionBeginView,
    // },
    // {
    //   path: "/connectioncompleted",
    //   name: "connectionCompleted",
    //   component: ConnectionCompletedView,
    // },
    // {
    //   path: "/connectionselectprompt",
    //   name: "connectionSelectPrompt",
    //   component: ConnectionSelectPromptView,
    // },
    // {
    //   path: "/connectionhappening",
    //   name: "connectionHappening",
    //   component: ConnectionHappeningView,
    // },
    {
      path: "/shiftstart",
      name: "shiftStart",
      component: ShiftStartView,
    },
    {
      path: "/shiftfinished",
      name: "shiftFinished",
      component: ShiftFinishView,
    },
  ],
});

export default router;
