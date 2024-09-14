<template>
  <div class="">
    <data-grid-container :columnDefs="columnDefs">
      <template v-slot:filter-container>
        <div class="h-[200px] bg-secondary-green" />
      </template>
    </data-grid-container>
  </div>
</template>

<script lang="ts" setup>
import { DataGridContainer } from '@/components/organisms/data-grid'
import {
  StatusBadgeCellRenderer,
  AvatarCellRenderer
} from '@/components/organisms/data-grid/cell-renderer'
import type {
  ICellEditorRendererParams,
  ICellRendererParams,
  ColDef,
  ColGroupDef,
  ValueGetterParams,
  ValueFormatterParams
} from '@ag-grid-community/core'
import type { UserProfile, UserFilter } from './types.d'

const columnDefs: ColDef[] | ColGroupDef[] = [
  {
    checkboxSelection: true,
    headerCheckboxSelection: true,
    width: 24 + 8 * 2,
    pinned: 'left',
    lockPinned: true
  },
  { headerName: 'User ID', field: 'id' },
  {
    headerName: 'User',
    valueFormatter: (params: ValueFormatterParams<UserProfile, any>) => {
      const { data } = params
      return `${data?.firstName} ${data?.lastName}`
    },
    cellRenderer: AvatarCellRenderer,
    cellRendererParams: {
      getLabel: (params: ICellRendererParams<UserProfile, any>): string => {
        return params.valueFormatted || ''
      },
      getAvatarUrl: (params: ICellRendererParams<UserProfile, any>): string => {
        return params.data?.profilePictureUrl + '/12' || ''
      }
    }
  },
  {
    headerName: 'Address',
    valueGetter: (params: ValueGetterParams<UserProfile, any>) => {
      const { data } = params
      return `${data?.address.street}, ${data?.address.city}, ${data?.address.state}, ${data?.address.country}`
    }
  },
  {
    headerName: 'Status',
    field: 'status',
    cellRenderer: StatusBadgeCellRenderer,
    cellRendererParams: {
      getTextClass: (params: ICellEditorRendererParams): Record<string, boolean> => {
        return {
          'text-secondary-orange': params.value == 'PENDING',
          'text-secondary-green': params.value == 'ACTIVE',
          'text-secondary-red': params.value == 'INACTIVE'
        }
      }
    }
  },
  { headerName: 'Email', field: 'email' },
  { headerName: 'Phone Number', field: 'phoneNumber' },
  { headerName: 'Date of Birth', field: 'dateOfBirth' },
  { headerName: 'Gender', field: 'gender' },
  { headerName: 'Postal Code', field: 'address.postalCode' },
  { headerName: 'Created At', field: 'createdAt' },
  { headerName: 'Updated At', field: 'updatedAt' }
]

// #region filter form
//  #endregion
</script>
