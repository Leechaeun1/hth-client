<script setup>
import { ref, computed } from 'vue'
import BankSelectModal from '@/components/auth/BankSelectModal.vue'

const props = defineProps({
  bankCode: String,
  accountNumber: String,
})

const emit = defineEmits(['update:accountNumber', 'update:bankCode'])

const showModal = ref(false)

const isInvalid = computed(() => {
  const val = props.accountNumber?.trim() ?? ''
  return val !== '' && !/^\d{6,20}$/.test(val)
})

// 이미지 경로를 URL로 명시 (정적 import 방식)
const bankLogos = {
  KAKAOBANK: new URL('@/assets/images/KakaoIcon.png', import.meta.url).href,
  KB: new URL('@/assets/images/KbIcon.png', import.meta.url).href,
  NH: new URL('@/assets/images/NonghyupIcon.png', import.meta.url).href,
  SHINHAN: new URL('@/assets/images/ShinhanIcon.png', import.meta.url).href,
  IBK: new URL('@/assets/images/IbkIcon.png', import.meta.url).href,
  TOSS: new URL('@/assets/images/TossIcon.png', import.meta.url).href,
  WOORI: new URL('@/assets/images/WooriIcon.png', import.meta.url).href,
  HANA: new URL('@/assets/images/HanaIcon.png', import.meta.url).href,
  DEFAULT: new URL('@/assets/images/DefaultBankIcon.png', import.meta.url).href,
}
</script>

<template>
  <div>
    <!-- <label class="block text-sm font-medium mb-1">계좌 번호 (- 없이 입력)</label> -->

    <BaseTypography class="mb-2">계좌 번호 (- 없이 입력)</BaseTypography>
    <div class="flex items-center gap-2">
      <!-- 클릭 시 모달 -->
      <img
        :src="bankLogos[props.bankCode] || bankLogos.DEFAULT"
        alt="은행 로고"
        class="w-8 h-8 cursor-pointer object-contain"
        @click="showModal = true"
      />
      <input
        type="text"
        inputmode="numeric"
        pattern="\d*"
        maxlength="20"
        :value="props.accountNumber"
        @input="(e) => emit('update:accountNumber', e.target.value.replace(/\D/g, ''))"
        placeholder="계좌 번호를 입력해주세요."
        class="flex-1 border-b border-gray-300 focus:outline-none focus:border-black p-2"
      />
    </div>

    <p
      v-if="isInvalid"
      class="absolute left-0 mt-1 text-sm text-red-500"
      style="top: calc(100% + 0.25rem)"
    >
      정확한 계좌 번호를 입력해주세요. (6~20자리 숫자)
    </p>

    <BankSelectModal
      v-if="showModal"
      @close="showModal = false"
      @select="
        (bank) => {
          emit('update:bankCode', bank.code)
          showModal = false
        }
      "
    />
  </div>
</template>
