import { onBeforeMount, onBeforeUnmount, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import emitter from '@/configs/event-bus'

export const EVENT_TYPE = 'ROUTE_CHANGE'

export function useRouteListener() {
  const route = useRoute()

  onMounted(() => {
    const unwatch = watch(
      () => route.fullPath, // Watch the fullPath of the route
      (to, from) => {
        // Fire event when route changes
        emitter.emit(EVENT_TYPE, { detail: { to, from } })
      }
    )

    // Cleanup the watcher when component unmounted
    return () => unwatch()
  })

  // Add event listener for unload
  onBeforeUnmount(() => {
    window.addEventListener('onBeforeUnmount', handleUnload)
  })

  onBeforeMount(() => {
    window.addEventListener('onBeforeMount', handleUnload)
  })

  const handleUnload = () => {
    // Fire event when the page is reloaded or closed
    emitter.emit(EVENT_TYPE, { detail: { to: null, from: null } })
  }
}
