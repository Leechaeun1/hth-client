<template>
  <BlankLayout>
    <DetailHeader>{{ tradeItem.name }}</DetailHeader>
    <CurrentPrice />
    <div class="filter-tabs-container mb-2 shrink-0">
      <BaseTab :tabs="fundingStatusTabs" v-model="currentFundingStatus" />
    </div>

    <div class="flex-1 overflow-y-auto">
      <OrderbookChart v-if="currentFundingStatus === 'askingPrice'" />
      <TradeHistoryChart v-if="currentFundingStatus === 'stockChart'" />
    </div>
    <BuyAndSellAccodian class="fixed bottom-16 left-0 right-0 max-w-md mx-auto">
    </BuyAndSellAccodian>
  </BlankLayout>
</template>

<script setup>
import { ref } from 'vue'
import BaseTab from '@/components/common/Tab/BaseTab.vue'
import BlankLayout from '@/layouts/BlankLayout.vue'
import DetailHeader from '@/layouts/DetailHeader.vue'
import BuyAndSellAccodian from '@/components/trade/BuyAndSell/BuyAndSellAccodian.vue'
import CurrentPrice from '@/components/trade/CurrentPrice.vue'
import TradeHistoryChart from '@/components/trade/TradeHistoryChart.vue'
import OrderbookChart from '@/components/trade/Hoga/OrderbookChart.vue'
import { useRoute } from 'vue-router'
import { mockTradeListData } from '@/utils/mockTradeListData.js'

const route = useRoute()
const tradeId = route.params.id
const tradeItem = mockTradeListData[tradeId - 1]

const fundingStatusTabs = [
  { label: '호가', value: 'askingPrice' },
  { label: '시세', value: 'stockChart' },
]
const currentFundingStatus = ref('askingPrice')
</script>
