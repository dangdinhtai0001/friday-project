<template>
  <div class="h-[1500px] bg-red-100">
    <data-grid :columnDefs="columnDefs" :rowData="rowData" />
  </div>
</template>

<script lang="ts" setup>
import { DataGrid } from '@/components/organisms/data-grid'
import { useFetch } from '@/composables/useFetch'

const columnDefs = [
  { checkboxSelection: true, headerCheckboxSelection: true, width: 24 + 8 * 2 },
  { headerName: 'Order ID', field: 'orderId' },
  { headerName: 'User', field: 'user' },
  { headerName: 'Project', field: 'project' },
  { headerName: 'Address', field: 'address' },
  { headerName: 'Date', field: 'date' },
  { headerName: 'Status', field: 'status' }
]

const { data } = useFetch(
  ['api/v1/orders'],
  'http://127.0.0.1:3658/m1/657008-0-default/api/v1/orders',
  {
    method: 'GET'
  }
)

const rowData = data as any
</script>
