import { type GridOptions } from '@ag-grid-community/core'

declare module 'data-grid-types' {
  interface functionOptions {
    name: string // Tên của action (ví dụ: "export", "import", "refresh")
    getRequestOptions: () => RequestInit
    baseUrl?: string
  }

  type ExtendedGridOptions = GridOptions & {
    functionOptions?: functionOptions[]
  }
}
