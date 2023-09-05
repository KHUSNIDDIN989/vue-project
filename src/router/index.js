import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home.vue";
import AboutCar from "@/views/About-car.vue";
import ModelTypes from "@/views/Model-types.vue";
import Admin from "../views/Admin-home.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/aboutcar",
      name: "AboutCar",
      component: AboutCar,
    },
    {
      path: "/models",
      name: "Models",
      component: ModelTypes,
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
    },
  ],
});
export default router;
