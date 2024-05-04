import {
  type Router,
  type RouteRecordNormalized,
  type RouteRecordRaw,
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router'
import { cloneDeep, omit } from 'lodash-es'

/** Routing mode */
export const history =
  import.meta.env.VITE_ROUTER_HISTORY === 'hash'
    ? createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH)
    : createWebHistory(import.meta.env.VITE_PUBLIC_PATH)

/** Route Downgrade (Convert routes with three or more levels into second-level routes) */
export const flatMultiLevelRoutes = (routes: RouteRecordRaw[]) => {
  const routesMirror = cloneDeep(routes)
  routesMirror.forEach((route) => {
    // If the route is a third-level or higher route, downgrade it.
    isMultipleRoute(route) && promoteRouteLevel(route)
  })
  return routesMirror
}

/** Determine if the route level is greater than 2 */
const isMultipleRoute = (route: RouteRecordRaw) => {
  const children = route.children
  if (children?.length) {
    // If at least one child route has a children array with a length greater than 0, it means it's a third-level or higher route.
    return children.some((child) => child.children?.length)
  }
  return false
}

/** Generate second-level routes */
const promoteRouteLevel = (route: RouteRecordRaw) => {
  // Creating a router instance to obtain all route information of the current route passed in
  let router: Router | null = createRouter({
    history,
    routes: [route]
  })
  const routes = router.getRoutes()
  // Update the children of the route using the route information obtained above in the addToChildren function
  addToChildren(routes, route.children || [], route)
  router = null
  // After converting to second-level routes, remove the children from all child routes
  route.children = route.children?.map((item) => omit(item, 'children') as RouteRecordRaw)
}

/** Add the given child routes to the specified route module */
const addToChildren = (
  routes: RouteRecordNormalized[],
  children: RouteRecordRaw[],
  routeModule: RouteRecordRaw
) => {
  children.forEach((child) => {
    const route = routes.find((item) => item.name === child.name)
    if (route) {
      // Initialize the children of routeModule
      routeModule.children = routeModule.children || []
      // If the routeModule's children property does not include this route, add it
      if (!routeModule.children.includes(route)) {
        routeModule.children.push(route)
      }
      // If the child route has its own child routes, recursively call this function to add them as well
      if (child.children?.length) {
        addToChildren(routes, child.children, routeModule)
      }
    }
  })
}
