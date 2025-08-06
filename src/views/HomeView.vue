<script setup lang="ts">
import Card from '@/components/Card.vue';
import GlobalSearch from '@/components/layout/GlobalSearch.vue';
import SideBar from '@/components/layout/SideBar.vue';
import ToogleTheme from '@/components/layout/ToogleTheme.vue';
import { ref } from 'vue'
import { VueDraggableNext } from 'vue-draggable-next'

const items = ref([
  { id: '1', color: '#AEDFE8' },
  { id: '2', color: undefined },
  { id: '3', color: '#FBEB95' }
])
const trash = ref([]) 
</script>

<template>
  <main class="flex">
  <SideBar/>
    <section class="px-24 py-10 w-full dark:bg-main-gray transition duration-300">
      <ToogleTheme/>
      <div>
        <GlobalSearch/>
      </div>
      <div class="flex flex-col gap-3 mt-14 mb-12">
        <p class="text-4xl font-semibold dark:text-white transition duration-300">Olá, <b>Fernanda!</b></p>
        <div class="max-w-[320px]">
          <span class="text-gray-500 text-xl dark:text-white text-wrap transition duration-300">Todas as suas anotações estão aqui, em um só lugar</span>
        </div>
        <nav>
          <ul class="flex gap-2">
            <li class="bg-main-purple text-white px-12 py-1 rounded-sm font-medium">Todos</li>
            <li class="bg-main-purple text-white px-12 py-1 rounded-sm font-medium">Favoritas</li>
            <li class="bg-main-purple text-white px-12 py-1 rounded-sm font-medium">Recentes</li>
          </ul>
        </nav>
      </div>
      <VueDraggableNext v-model="items" tag="div" class="flex gap-9">
        <li v-for="item in items" :key="item.id" class="list-none">
          <Card :color="item.color"/>
        </li>
      </VueDraggableNext>
      
      </section>
  </main>
</template>
