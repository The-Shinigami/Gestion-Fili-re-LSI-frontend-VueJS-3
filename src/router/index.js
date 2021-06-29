import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/EtudiantHome.vue'

const routes = [
  {
    path: '/etudiantHome',
    name: 'Home',
    component: Home
  },
  {
    path: '/profHome',
    name: 'ProfHome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProfHome.vue')
  },
  {
    path: '/adminhome',
    name: 'Adminhome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "admin" */ '../views/AdminHome.vue')
  },
   {
    path: '/',
    name: 'Welcome',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Welcome" */ '../views/Welcome.vue')
   },
    {
    path: '/profLogin',
    name: 'ProfLogin',
    component: () => import(/* webpackChunkName: "Authprof" */ '../views/ProfLogin.vue')
  },
      {
    path: '/etudiantLogin',
    name: 'EtudiantLogin',
    component: () => import(/* webpackChunkName: "Authetu" */ '../views/EtudiantLogin.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
