import type { RouteRecordRaw } from 'vue-router'

import DashboardLayout from '@/layouts/dashboard/index.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/identity-access',
    redirect: 'identity-access/home',
    component: DashboardLayout,
    meta: {
      title: 'Home'
    },
    children: [
      {
        path: 'home',
        component: () => import('@/views/identity-access/home/index.vue'),
        name: 'Identity Access',
        meta: {
          title: 'Identity Access'
        }
      },
      {
        path: 'users',
        component: () => import('@/views/identity-access/users/index.vue'),
        name: 'Users',
        meta: {
          title: 'Users'
        }
      }
    ]
  }
]
