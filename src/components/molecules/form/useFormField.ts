import { inject } from 'vue'
import { FORM_ITEM_INJECTION_KEY } from './InjectionKeys'

export function useFormField() {
  const fieldItemContext = inject(FORM_ITEM_INJECTION_KEY)

  const id = fieldItemContext

  return {
    id,
    formItemId: `__form-item-${id}`,
    formDescriptionId: `__form-item-description-${id}`,
    formMessageId: `__form-item-message-${id}`
  }
}
