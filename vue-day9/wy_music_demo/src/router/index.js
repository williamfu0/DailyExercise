import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/layout'
  },
  {
    path: '/layout',
    component: Layout,
    redirect: '/layout/home',
    children: [
      {
        path: "home",
        component: () => import('@/views/Home'),
        meta: {
          title: "首页"
        }
      },
      {
        path: "search",
        component: () => import('@/views/Search'),
        meta: {
          title: "搜索"
        }
      },

    ]

  },
  {
    path: '/play',
    component: null
  },
]

const router = new VueRouter({
  routes
})

export default router
