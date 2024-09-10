<template>
  <div class="">
    <data-grid-container :columnDefs="columnDefs" />
  </div>
</template>

<script lang="ts" setup>
import { DataGridContainer } from '@/components/organisms/data-grid'
import StatusCell from '@/components/organisms/data-grid/cells/StatusCell.vue'

const columnDefs = [
  { checkboxSelection: true, headerCheckboxSelection: true, width: 24 + 8 * 2 },
  { headerName: 'User ID', field: 'id' },
  { headerName: 'First Name', field: 'firstName' },
  { headerName: 'Last Name', field: 'lastName' },
  { headerName: 'Last Name', field: 'lastName' },
  { headerName: 'Status', field: 'status', CellRenderer: StatusCell },
  { headerName: 'Email', field: 'email' },
  { headerName: 'Phone Number', field: 'phoneNumber' },
  { headerName: 'Date of Birth', field: 'dateOfBirth' },
  { headerName: 'Gender', field: 'gender' },
  { headerName: 'Street', field: 'address.street' },
  { headerName: 'City', field: 'address.city' },
  { headerName: 'State', field: 'address.state' },
  { headerName: 'Postal Code', field: 'address.postalCode' },
  { headerName: 'Country', field: 'address.country' },
  { headerName: 'Profile Picture URL', field: 'profilePictureUrl' },
  { headerName: 'Created At', field: 'createdAt' },
  { headerName: 'Updated At', field: 'updatedAt' }
]
</script>
