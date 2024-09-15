import type { InjectionKey } from 'vue'

// Tạo một InjectionKey với kiểu `string` (hoặc kiểu dữ liệu phù hợp)
export const FORM_ITEM_INJECTION_KEY: InjectionKey<string> = Symbol('__form_item')
