<template>
  <!--  -->

  <ag-grid-vue
    v-bind="forwarded"
    :style="{ height: gridHeight }"
    :modules="registerModules"
    class="ag-theme-friday"
    rowSelection="multiple"
    :rowClass="rowClass"
    :defaultColDef="defaultColDef"
    :rowHeight="rowHeight"
  />
</template>
<script lang="ts" setup>
import { useForwardProps } from 'radix-vue'
import { type GridOptions } from '@ag-grid-community/core'
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model'
import { AgGridVue } from '@ag-grid-community/vue3'
import './ag-theme-friday.css'

const registerModules = [ClientSideRowModelModule]

const rowHeight: number = 40
const gridHeight: string = `${rowHeight * 11}px`

const rowClass = ['friday-default-row']
const defaultColDef = {
  cellClass: ['friday-default-cell'],
  wrapText: false
}

const props = defineProps<GridOptions>()

const forwarded = useForwardProps<GridOptions>(props)
</script>
