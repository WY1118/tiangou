import Vue from 'vue'
import Router from 'vue-router'

//主路由
import goshopping from "@/router/goshopping"
import find from "@/router/find"
import shopping from "@/router/shopping"
import opshopping from "@/router/opshopping"
import mine from "@/router/mine"



Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path:"/",
      redirect:"/goshopping"
    },
    goshopping,
    find,
    shopping,
    opshopping,
    mine,
    
    {
      path:"**",
      redirect:"/goshopping"
    }
  ],
})

