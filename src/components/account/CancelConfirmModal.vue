<script setup>
import BaseTypography from '../common/Typography/BaseTypography.vue'

const props = defineProps({
  isOpen: Boolean,
  title: {
    type: String,
    default: '정말 취소하시겠습니까?',
  },
  description: {
    type: String,
    default:
      '취소 시 참여 금액은 포인트로 환불되며,<br />다른 ‘반의반집’ 매물로 새로운 투자를 시작할 수 있습니다.',
  },
  buttonText: {
    type: String,
    default: '취소하기',
  },
})

const { title, description, buttonText } = props

const emit = defineEmits(['close', 'submit'])

const onBackdropClick = (e) => {
  if (e.target === e.currentTarget) emit('close')
}
</script>

<template>
  <Teleport to="#modal">
    <div
      v-if="isOpen"
      @click="onBackdropClick"
      class="fixed inset-0 z-[9999] bg-black bg-opacity-40 flex items-center justify-center"
    >
      <div @click.stop class="max-w-[360px] w-full bg-white rounded-xl px-6 py-7 relative">
        <!-- 닫기 버튼 -->
        <BaseButton
          type="button"
          aria-label="닫기"
          @click="emit('close')"
          class="absolute top-4 right-4"
        >
          <span
            class="material-symbols-outlined text-[#838a9a] text-m w-4 h-4 flex items-center justify-center"
          >
            close
          </span>
        </BaseButton>

        <!-- 제목 -->
        <BaseTypography tag="div" size="base" class="text-left mb-3 font-bold">
          {{ title }}
        </BaseTypography>

        <!-- 본문 -->
        <div class="py-3"></div>
        <div class="text-center">
          <BaseTypography tag="p" class="text-sm !text-gray-500 leading-relaxed mb-6">
            <span v-html="description" />
          </BaseTypography>
        </div>

        <!-- 버튼 -->
        <BaseButton
          type="button"
          aria-label="제출"
          @click="emit('submit')"
          class="block w-full h-12 bg-[#ff3b3b] text-white rounded-lg flex items-center justify-center mx-auto mt-7"
        >
          <span class="text-white font-medium text-base">{{ buttonText }}</span>
        </BaseButton>
      </div>
    </div>
  </Teleport>
</template>
