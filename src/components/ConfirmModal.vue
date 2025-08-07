<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black/40 flex items-center justify-center z-10">
    <div class="bg-white p-6 rounded-2xl shadow-lg text-center max-w-sm w-full flex flex-col items-center">
      <IconWarning />
      <span class="font-bold text-2xl text-[#666666]">Atenção!</span>
      <p class="mb-4 text-[#666] text-center text-2xl px-4">{{ message }}</p>
      <div class="flex justify-between gap-4 w-full">
        <button
          @click="cancel"
          class="bg-[#FF0000] px-4 py-3 text-white rounded-lg hover:bg-[#BF0000] transition duration-300 cursor-pointer"
        >
          Cancelar
        </button>
        <button
          @click="accept"
          class="bg-[#690F93] text-white px-4 py-3 rounded-lg hover:bg-[#3E0359] transition duration-300 cursor-pointer"
        >
          Confirmar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useConfirm } from '@/components/hooks/useConfirm'
import IconWarning from './icons/IconWarning.vue'

const { isOpen, message, accept, cancel } = useConfirm()
</script>
