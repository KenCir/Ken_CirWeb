import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  /*
  {
    path: '/blogs',
    name: 'blogs',
    component: () => import('../views/BlogListView.vue')
  },
  {
    path: "/blogs/post",
    name: "post-blog",
    component: () => import('../views/PostBlogView.vue')
  },
  {
    path: "/blogs/:id",
    name: "blog-view",
    component: () => import('../views/BlogView.vue')
  },
  */
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
