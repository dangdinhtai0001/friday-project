import type { ICellRendererParams } from '@ag-grid-community/core'

export interface IStatusBadgeCellRendererParams extends ICellRendererParams {
  getTextClass?: (params: ICellRendererParams) => Record<string, boolean>
}
