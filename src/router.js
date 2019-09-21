import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
const Home=() => import(/* webpackChunkName: "home" */ './views/home/Home.vue')
const categroy=() => import(/* webpackChunkName: "home" */ './views/categroy/categroy.vue')

const profie=() => import(/* webpackChunkName: "home" */ './views/profie/profie.vue')

const cart=() => import(/* webpackChunkName: "home" */ './views/cart/cart.vue')
const detail=() => import(/* webpackChunkName: "home" */ './views/detail/detail.vue')
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
 //linkActiveClass:'active',
  routes: [
    {
      path: '',
     redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/categroy',
      name: 'categroy',
      component: categroy
    },
    {
      path: '/profie',
      name: 'profie',
      component: profie
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/detail/:iid',
      name: 'detail',
      component: detail
    }
  ]
})
