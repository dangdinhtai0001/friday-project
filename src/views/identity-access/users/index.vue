<template>
  <div class="">
    <data-grid-container :columnDefs="columnDefs" />
  </div>
</template>

<script lang="ts" setup>
import { DataGridContainer } from '@/components/organisms/data-grid'

const columnDefs = [
  { checkboxSelection: true, headerCheckboxSelection: true, width: 24 + 8 * 2 },
  { headerName: 'Order ID', field: 'orderId' },
  { headerName: 'User', field: 'user' },
  { headerName: 'Project', field: 'project' },
  { headerName: 'Address', field: 'address' },
  { headerName: 'Date', field: 'date' },
  { headerName: 'Status', field: 'status' }
]
</script>
