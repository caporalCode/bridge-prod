import store from "@/store";
import { NOTYF } from "@/notyf";
export const authRequired = function(to, from, next) {
  if (store.getters.getStatus != undefined) {
    if (store.getters.getStatus != "connect") {
      NOTYF.error("Need to login!");
      next("/login");
    } else {
      next();
    }
  } else {
    next("/login");
  }
};
