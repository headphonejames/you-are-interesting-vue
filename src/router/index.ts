import { createRouter, createWebHistory } from "vue-router";
import WorkersView from "../views/WorkersView.vue";
import PromptsView from "../views/PromptsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/workerslist",
      name: "workerslist",
      component: WorkersView,
    },
    {
      path: "/promptslist",
      name: "promptslist",
      component: PromptsView,
    },
    {
      path: "/startshift",
      name: "startshift",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;
