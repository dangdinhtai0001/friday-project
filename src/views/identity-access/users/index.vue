<template>
  <div class="flex flex-col gap-12">
    <!-- #region function bar -->
    <div class="flex rounded-8 p-8 gap-16 items-center bg-black-10">
      <Button class="flex p-4 gap-4 rounded-8"><svg-icon name="IconPlus" /> </Button>
      <Button class="flex p-4 gap-4 rounded-8"><svg-icon name="IconAdjustments" /> </Button>
      <Button class="flex p-4 gap-4 rounded-8"><svg-icon name="IconArrowsSort" /> </Button>
    </div>
    <!-- #endregion -->
    <ag-grid-vue
      style="height: 440px"
      class="ag-theme-friday"
      :columnDefs="columnDefs"
      :rowData="rowData"
      :defaultColDef="defaultColDef"
      :rowClass="rowClass"
      rowHeight="40px"
      rowSelection="multiple"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import 'ag-grid-community/styles/ag-grid.css' // Mandatory CSS required by the Data Grid
import 'ag-grid-community/styles/ag-theme-alpine.css' // Optional Theme applied to the Data Grid
import '@/assets/styles/ag-theme-friday.css'
import { AgGridVue } from 'ag-grid-vue3'
import { type ColDef } from 'ag-grid-community'
import { Button } from '@/components/atoms/ui/button'
import { SvgIcon } from '@/components/atoms/icons'

const columnDefs = [
  { checkboxSelection: true, headerCheckboxSelection: true, width: 24 + 8 * 2 },
  { headerName: 'Order ID', field: 'orderId' },
  { headerName: 'User', field: 'user' },
  { headerName: 'Project', field: 'project' },
  { headerName: 'Address', field: 'address' },
  { headerName: 'Date', field: 'date' },
  { headerName: 'Status', field: 'status' }
]
const rowData = [
  {
    orderId: '#CM9801',
    user: 'Natali Craig',
    project: 'Landing Page',
    address: 'Meadow Lane Oakland',
    date: 'Just now',
    status: 'In Progress'
  },
  {
    orderId: '#CM9802',
    user: 'Kate Morrison',
    project: 'CRM Admin pages',
    address: 'Larry San Francisco',
    date: 'A minute ago',
    status: 'Complete'
  },
  {
    orderId: '#CM9803',
    user: 'Drew Cano',
    project: 'Client Project',
    address: 'Bagwell Avenue Ocala',
    date: '1 hour ago',
    status: 'Pending'
  },
  {
    orderId: '#CM9804',
    user: 'Orlando Diggs',
    project: 'Admin Dashboard',
    address: 'Washburn Baton Rouge',
    date: 'Yesterday',
    status: 'Approved'
  },
  {
    orderId: '#CM9805',
    user: 'Andi Lane',
    project: 'App Landing Page',
    address: 'Nest Lane Olivette',
    date: 'Feb 2, 2024',
    status: 'Rejected'
  },
  {
    orderId: '#CM9806',
    user: 'Jana Ray',
    project: 'E-commerce Site',
    address: 'Old House Cincinnati',
    date: '2 days ago',
    status: 'In Progress'
  },
  {
    orderId: '#CM9807',
    user: 'Raymond Cole',
    project: 'Portfolio Website',
    address: 'Lakewood Brooklyn',
    date: '3 days ago',
    status: 'Complete'
  },
  {
    orderId: '#CM9808',
    user: 'Vanessa Ryan',
    project: 'Blog Platform',
    address: 'Hill Valley Denver',
    date: 'Last week',
    status: 'Pending'
  },
  {
    orderId: '#CM9809',
    user: 'Sean Gates',
    project: 'Social Media App',
    address: 'Central Park New York',
    date: '2 weeks ago',
    status: 'Approved'
  },
  {
    orderId: '#CM9810',
    user: 'Linda Nguyen',
    project: 'Marketplace',
    address: 'Sunset Blvd Los Angeles',
    date: 'Feb 20, 2024',
    status: 'Rejected'
  },
  {
    orderId: '#CM9811',
    user: 'Chris Hall',
    project: 'Event Planner',
    address: 'Ocean Drive Miami',
    date: 'Mar 1, 2024',
    status: 'In Progress'
  },
  {
    orderId: '#CM9812',
    user: 'Rebecca Powell',
    project: 'Travel Booking Site',
    address: 'Magnolia Road Austin',
    date: 'Mar 5, 2024',
    status: 'Complete'
  },
  {
    orderId: '#CM9813',
    user: 'Tommy James',
    project: 'Corporate Website',
    address: 'Broadway Manhattan',
    date: 'Mar 10, 2024',
    status: 'Pending'
  },
  {
    orderId: '#CM9814',
    user: 'Mia Perry',
    project: 'Non-profit Site',
    address: 'Peachtree Street Atlanta',
    date: 'Mar 15, 2024',
    status: 'Approved'
  },
  {
    orderId: '#CM9815',
    user: 'David Wallace',
    project: 'Tech Blog',
    address: 'Silicon Valley San Jose',
    date: 'Mar 20, 2024',
    status: 'Rejected'
  },
  {
    orderId: '#CM9816',
    user: 'Angela Scott',
    project: 'Music Streaming App',
    address: 'Sunset Blvd Hollywood',
    date: 'Mar 25, 2024',
    status: 'In Progress'
  },
  {
    orderId: '#CM9817',
    user: 'Brandon Fox',
    project: 'Job Portal',
    address: 'Market Street San Francisco',
    date: 'Apr 1, 2024',
    status: 'Complete'
  },
  {
    orderId: '#CM9818',
    user: 'Diana Brooks',
    project: 'Real Estate Platform',
    address: 'King Street Seattle',
    date: 'Apr 5, 2024',
    status: 'Pending'
  },
  {
    orderId: '#CM9819',
    user: 'Patrick Cox',
    project: 'Online Learning Platform',
    address: 'Elm Street Chicago',
    date: 'Apr 10, 2024',
    status: 'Approved'
  },
  {
    orderId: '#CM9820',
    user: 'Emily Adams',
    project: 'Photography Portfolio',
    address: 'Main Street Orlando',
    date: 'Apr 15, 2024',
    status: 'Rejected'
  },
  {
    orderId: '#CM9821',
    user: 'Mark Stevens',
    project: 'Online Magazine',
    address: 'Fifth Avenue New York',
    date: 'Apr 20, 2024',
    status: 'In Progress'
  },
  {
    orderId: '#CM9822',
    user: 'Tina Morris',
    project: 'Fitness Tracker App',
    address: 'Hollywood Blvd Los Angeles',
    date: 'Apr 25, 2024',
    status: 'Complete'
  },
  {
    orderId: '#CM9823',
    user: 'Jason Lee',
    project: 'Streaming Service',
    address: 'Wall Street Manhattan',
    date: 'May 1, 2024',
    status: 'Pending'
  },
  {
    orderId: '#CM9824',
    user: 'Rachel Green',
    project: 'Recipe App',
    address: 'Oakwood Drive Dallas',
    date: 'May 5, 2024',
    status: 'Approved'
  },
  {
    orderId: '#CM9825',
    user: 'Nick Thompson',
    project: 'Travel Blog',
    address: 'Bourbon Street New Orleans',
    date: 'May 10, 2024',
    status: 'Rejected'
  },
  {
    orderId: '#CM9826',
    user: 'Sophia Harris',
    project: 'Wedding Planner',
    address: 'Lombard Street San Francisco',
    date: 'May 15, 2024',
    status: 'In Progress'
  },
  {
    orderId: '#CM9827',
    user: 'Alex Turner',
    project: 'Task Management App',
    address: 'Mulholland Drive Los Angeles',
    date: 'May 20, 2024',
    status: 'Complete'
  },
  {
    orderId: '#CM9828',
    user: 'Lily James',
    project: 'Blogging Platform',
    address: 'Lexington Avenue New York',
    date: 'May 25, 2024',
    status: 'Pending'
  },
  {
    orderId: '#CM9829',
    user: 'Michael Clark',
    project: 'Freelancer Platform',
    address: 'Beacon Hill Boston',
    date: 'May 30, 2024',
    status: 'Approved'
  },
  {
    orderId: '#CM9830',
    user: 'Emma Brown',
    project: 'Virtual Event Platform',
    address: 'Rodeo Drive Beverly Hills',
    date: 'Jun 1, 2024',
    status: 'Rejected'
  }
]

const defaultColDef = computed<ColDef>(() => {
  return {
    cellClass: ['friday-default-cell'],
    wrapText: false
  }
})

const rowClass = computed<string | string[]>(() => {
  return ['friday-default-row']
})
</script>
