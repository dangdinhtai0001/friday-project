import type { RouteRecordRaw } from 'vue-router'

import DashboardLayout from '@/layouts/dashboard/index.vue'

export const routes: RouteRecordRaw[] = [
  {
    name: 'redirect::overview',
    path: '/',
    component: DashboardLayout,
    redirect: '/overview',
    meta: {
      breadcrumb: false,
      hidden: true
    },
    children: [
      {
        path: 'overview',
        component: () => import('@/views/overview/index.vue'),
        name: 'Overview',
        meta: {
          title: 'Overview',
          svgIcon: 'IconAperture'
        }
      }
    ]
  }
]
