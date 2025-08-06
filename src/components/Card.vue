<script setup lang="ts">
import IconStar from './icons/IconStar.vue';

const props = defineProps({
  title: { type: String, required: false, default: 'Escreva sua anotação...' },
  color: { type: String, required: false, default: '#97D2BC' },
})

function hexToRgba(hex: string, opacity: number): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}

const backgroundColor = hexToRgba(props.color, .4)
</script>

<template>
  <div
    :style="`background-color: ${backgroundColor}`"
    class="w-[265px] h-[240px] rounded-lg text-[#808080] py-5 px-6 flex flex-col justify-between relative group"
  >
    <span class="text-xl text-gray-500 font-medium dark:text-white transition duration-300">
      {{ title }}    
    </span>
    <div class="text-light-gray font-medium text-sm dark:text-gray-300 transition duration-300">
      23/06/2025
    </div>
    <div class="absolute top-2 right-2 cursor-pointer hidden group-hover:block">
      <IconStar />
    </div>
  </div>
</template>
