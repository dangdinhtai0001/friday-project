import { createRouter, type RouteRecordRaw } from 'vue-router'
import { history, flatMultiLevelRoutes } from './helper'
import routeSettings from './config'

import { routes as defaultRoutes } from './default-routes'
import { routes as overviewRoutes } from './modules/overview'
import { routes as usersRoutes } from './modules/identity-access'

export const constantRoutes: RouteRecordRaw[] = [
  ...defaultRoutes,
  ...overviewRoutes,
  ...usersRoutes
]

export const dynamicRoutes: RouteRecordRaw[] = []

const router = createRouter({
  history,
  routes: routeSettings.thirdLevelRouteCache ? flatMultiLevelRoutes(constantRoutes) : constantRoutes
})

export default router
