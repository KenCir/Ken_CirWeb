import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    // こうやって読み込んだ方が軽くなるらしい
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: () => import('../views/BlogListView.vue')
  },
  {
    path: '/works',
    name: 'work',
    component: () => import('../views/WorkView.vue')
  },
  {
    path: '*',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
