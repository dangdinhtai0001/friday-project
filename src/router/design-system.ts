import Layouts from '@/layouts/index.vue'

export const designSystemRoute = {
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
