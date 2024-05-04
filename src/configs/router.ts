/** Route Configuration */
interface RouteSettings {
  /**
   * Is dynamic routing enabled?
   * 1. When enabled, backend cooperation is required. The backend should return a field in the user details query response that can be used to determine and load dynamic routes (in this project, it's the 'roles' field).
   * 2. If the project does not need to display different pages for different users, dynamic should be set to false.
   */
  dynamic: boolean
  /** When dynamic routing is disabled:
   * 1. All routes should be written into the permanent routes (indicating that all pages accessible to logged-in users are the same).
   * 2. The system automatically assigns a default role with no effect to the currently logged-in user.
   */
  defaultRoles: Array<string>
  /**
   * Is the caching functionality for third-level and higher routes enabled?
   * 1. When enabled, route downgrading will occur (converting routes with three or more levels into second-level routes).
   * 2. Since all routes are converted to second-level routes, nested child routes beyond the second level will become ineffective.
   */
  thirdLevelRouteCache: boolean
}

const routeSettings: RouteSettings = {
  dynamic: true,
  defaultRoles: ['DEFAULT_ROLE'],
  thirdLevelRouteCache: false
}

export default routeSettings
