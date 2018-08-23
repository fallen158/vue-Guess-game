import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Answer from "@/components/Answer";
import Result from "@/components/Result";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/answer",
      name: "answer",
      component: Answer
    },
    {
      path: "/result",
      name: "result",
      component: Result
    }
  ]
});
