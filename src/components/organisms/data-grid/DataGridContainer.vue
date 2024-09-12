<template>
  <div class="flex flex-col gap-12">
    <!-- #region function bar -->
    <div class="flex rounded-8 px-8 bg-black-10">
      <!-- #region function group 00 -->
      <div class="flex rounded-8 p-8 gap-8 items-center">
        <Button class="flex p-4 gap-4 rounded-8"><svg-icon name="IconPlus" /> </Button>
        <Button class="flex p-4 gap-4 rounded-8" @Click="handleOnClickFilter"
          ><svg-icon name="IconAdjustments" />
        </Button>
        <Button class="flex p-4 gap-4 rounded-8"><svg-icon name="IconArrowsSort" /> </Button>
        <Button class="flex p-4 gap-4 rounded-8" @click="handleOnRefresh">
          <svg-icon v-if="isFetchingUsers" name="IconRefresh" class="animate-spin" />
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
    <!-- #region filter zone -->
    <Collapsible v-model:open="isFiltering">
      <CollapsibleContent class="border rounded-8">
        <div class="h-[300px] bg-secondary-green">content</div>
      </CollapsibleContent>
    </Collapsible>
    <!-- #endregion -->
    <!-- #region data grid container -->
    <ag-grid-container
      v-bind="forwarded"
      :rowData="rowData"
      :onSelectionChanged="onSelectionChanged"
      :loading="isFetchingUsers"
      :loading-overlay-component="LoadingOverlay"
      :no-rows-overlay-component="NoRowOverlay"
      :default-col-def="defaultColDef"
    />
    <!-- #endregion -->
    <!-- #region pagination -->
    <div class="flex justify-between items-center">
      <!-- #region page size -->
      <Select v-model:model-value="limit" :defaultValue="limitConfig.defaultValue">
        <SelectTrigger class="flex px-8 py-4 gap-4 w-fit h-28 border-0">
          <SelectValue />
        </SelectTrigger>
        <SelectContent class="rounded-8">
          <SelectItem
            v-for="option in limitConfig.options"
            :key="option"
            :value="option"
            class="cursor-pointer rounded-8 hover:bg-black-10"
          >
            {{ option }}
          </SelectItem>
        </SelectContent>
      </Select>
      <!-- #endregion -->
      <!-- #region pagiantion -->
      <Pagination
        v-slot="{ page }"
        :total="Number(totalRecords)"
        :sibling-count="1"
        :show-edges="true"
        :default-page="1"
        :items-per-page="Number(limit)"
      >
        <PaginationList v-slot="{ items }" class="flex items-center gap-8 rounded-8">
          <PaginationFirst
            class="flex w-28 h-28 rounded-8 p-4 border-0 hover:bg-black-10 hover:cursor-pointer"
          />
          <PaginationPrev
            class="flex w-28 h-28 rounded-8 p-4 border-0 hover:bg-black-10 hover:cursor-pointer"
          />

          <template v-for="(item, index) in items">
            <PaginationListItem
              v-if="item.type === 'page'"
              :key="index"
              :value="item.value"
              as-child
            >
              <!-- <Button class="w-28 h-28 p-0 m-0 hover:bg-black-10 rounded-8"> -->
              <Button
                :class="
                  clsx('w-28 h-28 p-0 m-0 hover:bg-black-10 rounded-8', {
                    'bg-black-5': item.value === page
                  })
                "
              >
                <!-- :variant="item.value === page ? 'default' : 'outline'" -->
                {{ item.value }}
              </Button>
            </PaginationListItem>
            <PaginationEllipsis v-else :key="item.type" :index="index" />
          </template>

          <PaginationNext
            class="flex w-28 h-28 rounded-8 p-4 border-0 hover:bg-black-10 hover:cursor-pointer"
          />
          <PaginationLast
            class="flex w-28 h-28 rounded-8 p-4 border-0 hover:bg-black-10 hover:cursor-pointer"
          />
        </PaginationList>
      </Pagination>
      <!-- #endregion -->
    </div>
    <!-- #endregion -->
  </div>
</template>

<script lang="ts" setup generic="TData">
import { ref } from 'vue'

import { useForwardProps } from 'radix-vue'
import type { SelectionChangedEvent, ColDef } from '@ag-grid-community/core'
import { useQuery } from '@tanstack/vue-query'
import clsx from 'clsx'

//  #region forward props
import { Collapsible, CollapsibleContent } from '@/components/atoms/ui/collapsible'
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
} from '@/components/atoms/pagination'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/atoms/select'
import { SvgIcon } from '@/components/atoms/icons'
import { AgGridContainer } from '@/components/atoms/ag-grid'
import type { ExtendedGridOptions } from './types'
import { getUsers, headUsers } from '@/api/users'
import LoadingOverlay from './overlays/LoadingOverlay.vue'
import NoRowOverlay from './overlays/NoRowOverlay.vue'

//  #endregion

const isFiltering = ref(false)

const limitConfig = { defaultValue: '10', options: ['10', '20', '50', '100'] }
const limit = ref(limitConfig.defaultValue)

const defaultColDef: ColDef<TData> = {
  sortable: false
}

const {
  data: usersData,
  isFetching: isFetchingUsers,
  refetch: refetchUsers
} = useQuery<TData>({
  queryKey: ['GET::users'],
  queryFn: async () => {
    return await getUsers()
  },
  retry: 0
})

const { data: totalRecords, refetch: refetchTotalRecords } = useQuery({
  queryKey: ['HEAD::users'],
  queryFn: async () => {
    return await headUsers()
  },
  retry: 0
})

const rowData = ref<any>(usersData)

const selectedRows = ref<any>([])

// #region function
const handleOnRefresh = () => {
  refetchUsers()
  refetchTotalRecords()
}

const onSelectionChanged = (event: SelectionChangedEvent) => {
  selectedRows.value = event.api.getSelectedRows()
}

const handleOnClickFilter = () => {
  isFiltering.value = !isFiltering.value
}
//  #endregion

//  #region forward props
const props = defineProps<ExtendedGridOptions>()
const forwarded = useForwardProps<ExtendedGridOptions>(props)
//  #endregion
</script>
