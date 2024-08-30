import type { RouteRecordRaw } from 'vue-router'

import DashboardLayout from '@/layouts/dashboard/index.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/identity-access',
    redirect: 'identity-access/home',
    name: 'Identity Access',
    component: DashboardLayout,
    meta: {
      title: 'Identity Access',
      svgIcon: 'IconLockAccess'
    },
    children: [
      {
        path: 'home',
        component: () => import('@/views/identity-access/home/index.vue'),
        name: 'Home',
        meta: {
          title: 'Home',
          svgIcon: 'IconAccessible'
        }
      },
      {
        path: 'users',
        component: () => import('@/views/identity-access/users/index.vue'),
        name: 'Users',
        meta: {
          title: 'Users',
          svgIcon: 'IconUser'
        }
      }
    ]
  }
]
