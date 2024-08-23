import { type RouteRecordRaw, createRouter } from 'vue-router'
import { history, flatMultiLevelRoutes } from './helper'
import routeSettings from '@/configs/router'
import Layouts from '@/layouts/index.vue'

import { designSystemRoute } from './design-system'
import { homeRoute } from './home'
import { componentRoute } from './components'

export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: Layouts,
    meta: {
      hidden: true
    },
    children: [
      {
        path: ':path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/403',
    component: () => import('@/views/error-page/403.vue'),
    meta: {
      hidden: true
    }
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    meta: {
      hidden: true
    },
    alias: '/:pathMatch(.*)*'
  },
  //   ----------------------------------------------------------------
  designSystemRoute,
  homeRoute,
  componentRoute
]

export const dynamicRoutes: RouteRecordRaw[] = []

const router = createRouter({
  history,
  routes: routeSettings.thirdLevelRouteCache ? flatMultiLevelRoutes(constantRoutes) : constantRoutes
})

export default router
