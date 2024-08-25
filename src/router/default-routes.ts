import type { RouteRecordRaw } from 'vue-router'

import EmptyLayout from '@/layouts/empty/index.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: EmptyLayout,
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
  }
]
