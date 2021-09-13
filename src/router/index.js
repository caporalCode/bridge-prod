import Vue from "vue";
import VueRouter from "vue-router";
import changeTitle from './guards/changeTitle'
import {authRequired} from './guards/authRequired'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      title: "Login",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "@/views/Login.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    meta: {
      title: "Signup",
    },
    component: () =>
      import(/* webpackChunkName: "signup" */ "@/views/SignUp.vue"),
  },
  {
    path: "/app",
    meta: {
      title: "Products List",
    },
    beforeEnter: function (to, from, next) {
      authRequired(to, from, next);
    },
    component: () => import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
    children: [
      {
        path: "",
        meta: {
          title: "Products List",
        },
        name: "ProductsList",
        component: () => import("@/views/app/ProductsList.vue"),
      },
      {
        path: "manage",
        name: "ProductsManage",
        meta: {
          title: "Products Manage",
        },
        component: () => import("@/views/app/ProductsManage.vue"),
      },
    ],
  },
  {
    path: "/:NotFound(.*)*",
    meta: {
      title: "Not Found",
    },
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "@/views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

//global guards
router.beforeEach((to, from, next) => {
  changeTitle(to, from, next);
});

export default router;
