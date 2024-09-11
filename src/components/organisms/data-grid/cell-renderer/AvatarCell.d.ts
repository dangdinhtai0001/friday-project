import type { ICellRendererParams } from '@ag-grid-community/core'

export interface IAvatarCellRendererParams extends ICellRendererParams {
  getLabel: (params: ICellRendererParams) => string
  getAvatarUrl: (params: ICellRendererParams) => string
}
