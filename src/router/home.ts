import Layouts from '@/layouts/index.vue'

export const homeRoute = {
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
}
