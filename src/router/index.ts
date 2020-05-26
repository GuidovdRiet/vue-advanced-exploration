import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { Route, RawLocation } from "vue-router";

import Home from "../components/pages/home/Home.vue";
import Login from "../components/pages/login/Login.vue";
import Message from "../components/pages/Message.vue";

Vue.use(VueRouter);

const ifNotAuthenticated = (to: Route, from: Route, next: any) => {
  if (!localStorage.getItem("accessToken")) {
    next();
    return;
  }
  next("/");
};

const ifAuthenticated = (to: Route, from: Route, next: any) => {
  if (localStorage.getItem("accessToken")) {
    next();
    return;
  }
  next("/login");
};

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    beforeEnter: ifAuthenticated,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    beforeEnter: ifNotAuthenticated,
  },
  {
    path: "/message/:id",
    name: "Message",
    component: Message,
    beforeEnter: ifAuthenticated,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
