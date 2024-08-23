import Layouts from '@/layouts/index.vue'

export const componentRoute = {
  path: '/components',
  redirect: '/components/table',
  component: Layouts,
  meta: {
    title: 'Components'
  },
  children: [
    {
      path: 'table',
      component: () => import('@/views/components/tables/index.vue'),
      name: 'Table',
      meta: {
        title: 'Table'
      }
    }
  ]
}
