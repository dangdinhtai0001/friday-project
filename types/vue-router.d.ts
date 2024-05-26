import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * Sets the name displayed in the sidebar and breadcrumb for this route
     */
    title?: string
    /**
     * Sets the icon for this route. Remember to import the svg into @/icons/svg
     */
    svgIcon?: string
    /**
     * Sets the icon for this route directly using Element Plus Icon (When both svgIcon and elIcon are set, svgIcon will take priority)
     */
    elIcon?: string
    /**
     * Defaults to false. When set to true, this route will not appear in the sidebar
     */
    hidden?: boolean
    /**
     * Sets the roles that can access this route, supports multiple roles
     */
    roles?: string[]
    /**
     * Defaults to true. If set to false, it will not appear in the breadcrumb
     */
    breadcrumb?: boolean
    /**
     * Defaults to false. If set to true, it will be fixed in the tags-view
     */
    affix?: boolean
    /**
     * When a route declares more than 1 child route, it will automatically switch to nested mode.
     * If only one, that child route will be displayed in the sidebar as a root route.
     * If you want to always display your root route regardless of the number of children declared in the route, you can set alwaysShow: true, which will ignore the previously defined rules and always display the root route
     */
    alwaysShow?: boolean
    /**
     * Example: activeMenu: "/xxx/xxx",
     * When this property is set, it will highlight the corresponding sidebar when entering the route.
     * This property is suitable for use on routes with hidden: true property
     */
    activeMenu?: string
    /**
     * Whether to cache this route page
     * Defaults to false. When true, it means caching is required, and both the route and the page need to have consistent Names set
     */
    keepAlive?: boolean
  }
}
