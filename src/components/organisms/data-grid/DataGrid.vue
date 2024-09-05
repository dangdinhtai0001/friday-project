<template>
  <div class="flex flex-col gap-12">
    <!-- #region function bar -->
    <div class="flex rounded-8 p-8 gap-16 items-center bg-black-10">
      <Button class="flex p-4 gap-4 rounded-8"><svg-icon name="IconPlus" /> </Button>
      <Button class="flex p-4 gap-4 rounded-8"><svg-icon name="IconAdjustments" /> </Button>
      <Button class="flex p-4 gap-4 rounded-8"><svg-icon name="IconArrowsSort" /> </Button>
    </div>
    <!-- #endregion -->
    <ag-grid-container v-bind="forwarded" :columnDefs="columnDefs" :rowData="rowData" />
  </div>
</template>

<script lang="ts" setup>
import { useForwardProps } from 'radix-vue'
import { Button } from '@/components/atoms/ui/button'
import { SvgIcon } from '@/components/atoms/icons'
import { AgGridContainer } from '@/components/atoms/ag-grid'
import { useFetch } from '@/composables/useFetch'
import { type ExtendedGridOptions } from './types'

const { data } = useFetch(
  ['api/v1/orders'],
  'http://127.0.0.1:3658/m1/657008-0-default/api/v1/orders',
  {
    method: 'GET'
  }
)

const rowData = data as any

const props = defineProps<ExtendedGridOptions>()

const forwarded = useForwardProps<ExtendedGridOptions>(props)
</script>
