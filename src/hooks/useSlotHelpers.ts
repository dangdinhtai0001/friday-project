import type { SetupContext, Slot, VNode } from 'vue'
import { Comment, Fragment } from 'vue'

export function useSlotHelpers(slots: SetupContext['slots']) {
  // const slots = useSlots()

  function isSlotAvailable() {
    return !!slots?.footer
  }

  // Adapted from https://github.com/vuejs/vue-next/blob/ca17162e377e0a0bf3fae9d92d0fdcb32084a9fe/packages/runtime-core/src/helpers/renderSlot.ts#L77
  const isVnodeEmpty = (vnodes: Array<VNode>) => {
    return vnodes.every((node: VNode) => {
      if (node.type === Comment) {
        return true
      }

      if (node.type === Text && typeof node.children === 'string' && !node.children.trim()) {
        return true
      }

      if (node.type === Fragment && isVnodeEmpty(node.children as Array<VNode>)) {
        return true
      }

      return false
    })
  }

  const hasSlotContent = (slot: Slot<any> | undefined) => {
    if (!slot) {
      return false
    }
    return !isVnodeEmpty(slot())
  }

  return { hasSlotContent, isSlotAvailable }
}
