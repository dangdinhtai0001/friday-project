import type { RouteRecordRaw } from 'vue-router'

import DashboardLayout from '@/layouts/dashboard/index.vue'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DashboardLayout,
    redirect: '/overview',
    children: [
      {
        path: 'overview',
        component: () => import('@/views/overview/index.vue'),
        name: 'Overview',
        meta: {
          title: 'Overview'
        }
      }
    ]
  }
]
