<template>
  <div class="h-[1500px] bg-red-100">
    iam user
    <ag-grid-vue
      style="height: 500px"
      class="ag-theme-friday"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :defaultColDef="defaultColDef"
      :rowClass="rowClass"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import 'ag-grid-community/styles/ag-grid.css' // Mandatory CSS required by the Data Grid
// import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional Theme applied to the Data Grid
import '@/assets/styles/ag-theme-friday.css'
import { AgGridVue } from 'ag-grid-vue3'
import { type ColDef } from 'ag-grid-community'

const columnDefs = [
  { headerName: 'Make', field: 'make' },
  { headerName: 'Model', field: 'model' },
  { headerName: 'Price', field: 'price' }
]
const rowData = [
  { make: 'Toyota', model: 'Celica', price: 35000 },
  { make: 'Ford', model: 'Mondeo', price: 32000 },
  { make: 'Porsche', model: 'Boxter', price: 72000 }
]

const defaultColDef: ColDef = {
  cellClass: ['friday-default-cell']
}

const rowClass = computed<string | string[]>(() => {
  return ['friday-default-row']
})
</script>
