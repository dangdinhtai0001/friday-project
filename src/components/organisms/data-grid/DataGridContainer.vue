<template>
  <div class="flex flex-col gap-12">
    <!-- #region function bar -->
    <div class="flex rounded-8 px-8 bg-black-10">
      <!-- #region function group 00 -->
      <div class="flex rounded-8 p-8 gap-8 items-center">
        <Button class="flex p-4 gap-4 rounded-8"><svg-icon name="IconPlus" /> </Button>
        <Button class="flex p-4 gap-4 rounded-8"><svg-icon name="IconAdjustments" /> </Button>
        <Button class="flex p-4 gap-4 rounded-8"><svg-icon name="IconArrowsSort" /> </Button>
        <Button class="flex p-4 gap-4 rounded-8" @click="handleOnRefresh">
          <svg-icon v-if="isFetching" name="IconRefresh" class="animate-spin" />
          <svg-icon v-else name="IconRefresh" />
        </Button>
      </div>
      <!-- #endregion -->
      <div>
        <Separator orientation="vertical" class="bg-black-20 top-1/4 h-[50%] mx-4" />
      </div>
      <!-- #region function group 01 -->
      <div v-if="selectedRows.length > 0" class="flex rounded-8 p-8 gap-8 items-center">
        <div class="f-text-regular-12">{{ selectedRows.length }} Selected</div>
        <Button class="flex p-4 gap-4 rounded-8"><svg-icon name="IconTrash" /> </Button>
        <Button class="flex p-4 gap-4 rounded-8"><svg-icon name="IconCopy" /> </Button>
      </div>
      <!-- #endregion -->
    </div>
    <!-- #endregion -->
    <!-- #region data grid container -->
    <ag-grid-container
      v-bind="forwarded"
      :rowData="rowData"
      :onSelectionChanged="onSelectionChanged"
    />
    <!-- #endregion -->
    <!-- #region pagination -->
    <div class="flex justify-between border">
      <!-- #region page size -->
      <Select defaultValue="20">
        <SelectTrigger class="w-[180px]">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <!-- <SelectLabel>Fruits</SelectLabel> -->
            <SelectItem value="10"> 10 </SelectItem>
            <SelectItem value="20"> 20 </SelectItem>
            <SelectItem value="50"> 50 </SelectItem>
            <SelectItem value="100"> 100 </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <!-- #endregion -->
      <!-- #region pagiantion -->
      <Pagination v-slot="{ page }" :total="100" :sibling-count="1" show-edges :default-page="2">
        <PaginationList v-slot="{ items }" class="flex items-center gap-1">
          <PaginationFirst />
          <PaginationPrev />

          <template v-for="(item, index) in items">
            <PaginationListItem
              v-if="item.type === 'page'"
              :key="index"
              :value="item.value"
              as-child
            >
              <Button class="w-10 h-10 p-0" :variant="item.value === page ? 'default' : 'outline'">
                {{ item.value }}
              </Button>
            </PaginationListItem>
            <PaginationEllipsis v-else :key="item.type" :index="index" />
          </template>

          <PaginationNext />
          <PaginationLast />
        </PaginationList>
      </Pagination>
      <!-- #endregion -->
    </div>
    <!-- #endregion -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useForwardProps } from 'radix-vue'
import { Button } from '@/components/atoms/ui/button'
import { Separator } from '@/components/atoms/ui/separator'
import {
  Pagination,
  PaginationEllipsis,
  PaginationFirst,
  PaginationLast,
  PaginationList,
  PaginationListItem,
  PaginationNext,
  PaginationPrev
} from '@/components/atoms/ui/pagination'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/atoms/ui/select'
import { SvgIcon } from '@/components/atoms/icons'
import { AgGridContainer } from '@/components/atoms/ag-grid'
import { useFetch } from '@/composables/useFetch'
import { type ExtendedGridOptions } from './types'
import type { SelectionChangedEvent } from '@ag-grid-community/core'

const { data, isFetching, refetch } = useFetch(
  ['api/v1/orders'],
  'http://127.0.0.1:3658/m1/657008-0-default/api/v1/orders',
  {
    method: 'GET'
  }
)

const rowData = ref<any>(data)

const selectedRows = ref<any>([])

const props = defineProps<ExtendedGridOptions>()
const forwarded = useForwardProps<ExtendedGridOptions>(props)

// #region function
const handleOnRefresh = () => {
  refetch()
}

const onSelectionChanged = (event: SelectionChangedEvent) => {
  selectedRows.value = event.api.getSelectedRows()
}
//  #region
</script>
