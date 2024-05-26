import { type RouteRecordRaw, createRouter } from 'vue-router'
import { history, flatMultiLevelRoutes } from './helper'
import routeSettings from '@/configs/router'

const Layouts = () => import('@/layouts/index.vue')

/**
  Permanent Routes
  Except for hidden pages like redirect/403/404/login, it's recommended to set the Name property for other pages.
*/
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
  // ----------------------------------------------------------------
  {
    path: '/',
    component: Layouts,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: {
          title: 'Home'
        }
      }
    ]
  },
  {
    path: '/design-system',
    redirect: '/design-system/introduction',
    component: Layouts,
    children: [
      {
        path: 'color',
        component: () => import('@/views/design-system/colors/index.vue'),
        name: 'Color'
      },
      {
        path: 'introduction',
        component: () => import('@/views/design-system/introduction/index.vue'),
        name: 'Introduction'
      },
      {
        path: 'text-styles',
        component: () => import('@/views/design-system/text-styles/index.vue'),
        name: 'TextStyles'
      },
      {
        path: 'space-size-radius',
        component: () => import('@/views/design-system/space-size-radius/index.vue'),
        name: 'SpaceSizeRadius'
      }
    ]
  }
]

export const dynamicRoutes: RouteRecordRaw[] = []

const router = createRouter({
  history,
  routes: routeSettings.thirdLevelRouteCache ? flatMultiLevelRoutes(constantRoutes) : constantRoutes
})

export default router
