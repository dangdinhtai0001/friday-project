import Layouts from '@/layouts/index.vue'

export const designSystemRoute = {
  path: '/design-system',
  redirect: '/design-system/introduction',
  component: Layouts,
  meta: {
    title: 'Design System'
  },
  children: [
    {
      path: 'color',
      component: () => import('@/views/design-system/colors/index.vue'),
      name: 'Color',
      meta: {
        title: 'Color'
      }
    },
    {
      path: 'introduction',
      component: () => import('@/views/design-system/introduction/index.vue'),
      name: 'Introduction',
      meta: {
        title: 'Introduction'
      }
    },
    {
      path: 'text-styles',
      component: () => import('@/views/design-system/text-styles/index.vue'),
      name: 'TextStyles',
      meta: {
        title: 'Text styles'
      }
    },
    {
      path: 'space-size-radius',
      component: () => import('@/views/design-system/space-size-radius/index.vue'),
      name: 'SpaceSizeRadius',
      meta: {
        title: 'Space, size, radius'
      }
    }
  ]
}
