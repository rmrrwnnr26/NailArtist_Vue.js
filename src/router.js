import { createRouter, createWebHistory } from "vue-router";
import Home from "@/components/Home.vue";
import Services from "@/components/Services.vue";
import Categories from "@/components/Categories.vue";
const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/categories',
    component: Categories,
  },
  {
    path: '/services',
    component: Services,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
