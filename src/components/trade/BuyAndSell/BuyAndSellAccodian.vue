<template>
  <div
    class="bg-white overflow-hidden shadow-up"
    :class="isOpen ? 'rounded-t-3xl' : 'rounded-t-3xl'"
  >
    <div
      class="p-4 cursor-pointer flex justify-between items-center w-full bg-[#010101]"
      @click="toggleOpen"
    >
      <div class="text-base font-bold">
        <BaseTypography
          tag="span"
          size="xl"
          weight="bold"
          class="cursor-pointer mr-4 ml-3"
          :color="activeMode === 'buy' ? 'red' : 'white'"
          @click.stop="setActiveMode('buy')"
        >
          구매할래요
        </BaseTypography>
        <BaseTypography
          tag="span"
          size="xl"
          weight="bold"
          class="cursor-pointer"
          :color="activeMode === 'sell' ? 'blue' : 'white'"
          @click.stop="setActiveMode('sell')"
        >
          판매할래요
        </BaseTypography>
      </div>
      <span
        class="material-symbols-outlined text-white transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
      >
        expand_less
      </span>
    </div>

    <transition name="slide-up">
      <div v-if="isOpen" class="p-4 pt-0 bg-black text-white">
        <TradeForm :type="activeMode" />
        <div class="mb-18"></div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseTypography from '@/components/common/Typography/BaseTypography.vue'
import TradeForm from './TradeForm.vue'

const isOpen = ref(false)
const activeMode = ref('buy')

const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
const setActiveMode = (mode) => {
  activeMode.value = mode
}
</script>
