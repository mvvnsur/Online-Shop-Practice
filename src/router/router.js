import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue')
  },
  {
    path: '/devices',
    name: 'devices',
    component: () => import('../views/devices.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/cart.vue'),
    props: true,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router