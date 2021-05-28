import { createRouter, createWebHistory } from "vue-router";
import main from "@/pages/main.vue";
// import Biography from "@/pages/Biography.vue";
// import detail from "@/pages/detail.vue";

const routes = [
  { path: "/", name: "home", component: Welcome }
  // { path: "/Profiles", name: "Profiles", component: Profiles }
  // { path: "/Welcome", name: "Welcome", component: Welcome }
];

export default createRouter({
  history: createWebHistory(),
  routes
});
