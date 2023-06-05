import { createRouter, createWebHistory } from "vue-router";
import { projectAuth } from "@/configs/firebase";

// Auth Guards
const requireAuth = (to, from, next) => {
  const user = projectAuth.currentUser;
  //nếu không lấy được user thì chuyển hướng về Login. Ngược lại cho chạy tiếp đến router xác định
  if (!user) next({ name: "Login", params: {} });
  else next();
};

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      text: "Hey, Vũ Mạnh Hùng",
      leading: true,
    },
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/register.vue"),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      text: "Profile",
      leading: false,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/profile.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/logout.vue"),
  },
  {
    path: "/report",
    name: "Report",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/report.vue"),
  },
  {
    path: "/budget",
    name: "Budget",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/budget.vue"),
  },
  {
    path: "/new-transaction",
    name: "NewTransaction",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/new-transaction.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
