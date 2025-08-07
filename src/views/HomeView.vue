<script setup lang="ts">
import Card from '@/components/Card.vue';
import ConfirmModal from '@/components/ConfirmModal.vue';
import { useConfirm } from '@/components/hooks/useConfirm';
import IconTrash from '@/components/icons/IconTrash.vue';
import GlobalSearch from '@/components/layout/GlobalSearch.vue';
import SideBar from '@/components/layout/SideBar.vue';
import ToogleTheme from '@/components/layout/ToogleTheme.vue';
import MainLayout from '@/layout/MainLayout.vue';
import { ref } from 'vue';
import { VueDraggableNext } from 'vue-draggable-next';

const items = ref([
  { id: '1', color: '#AEDFE8' },
  { id: '2', color: undefined },
  { id: '3', color: '#FBEB95' }
]);

const isDragging = ref(false);
const draggedItem = ref<any>(null);
const {confirm} = useConfirm();

const handleDragStart = (event: any, item: any) => {
  isDragging.value = true;
  draggedItem.value = item;
};

const handleDragEnd = () => {
  isDragging.value = false;
  draggedItem.value = null;
};

const handleDragOver = (event: DragEvent) => {
  event.preventDefault();
};

const handleDrop = async (event: DragEvent) => {
  event.preventDefault();

  const itemToDelete = draggedItem.value;
  if (!itemToDelete) return;

  const confirmado = await confirm("Deseja realmente excluir esta nota?");
  
  if (confirmado) {

    items.value = items.value.filter((i) => i.id !== itemToDelete.id);
  }

  isDragging.value = false;
  draggedItem.value = null;
};

</script>

<template>
  <MainLayout>
    <section class="px-24 py-10 w-full dark:bg-main-gray transition duration-300">
      <ToogleTheme />
      <div>
        <GlobalSearch />
      </div>
      <div class="flex flex-col gap-3 mt-14 mb-12">
        <p class="text-4xl font-semibold dark:text-white transition duration-300">
          Olá, <b>Fernanda!</b>
        </p>
        <div class="max-w-[320px]">
          <span class="text-gray-500 text-xl dark:text-white text-wrap transition duration-300">
            Todas as suas anotações estão aqui, em um só lugar
          </span>
        </div>
        <nav>
          <ul class="flex gap-2">
            <li class="bg-main-purple text-white px-12 py-1 rounded-sm font-medium">Todos</li>
            <li class="bg-main-purple text-white px-12 py-1 rounded-sm font-medium">Favoritas</li>
            <li class="bg-main-purple text-white px-12 py-1 rounded-sm font-medium">Recentes</li>
          </ul>
        </nav>
      </div>

      <div class="flex gap-9">
        <li
          v-for="item in items"
          :key="item.id"
          class="list-none"
          draggable="true"
          @dragstart="(e) => handleDragStart(e, item)"
          @dragend="handleDragEnd"
        >
          <Card :color="item.color" />
        </li>
      </div>
    </section>

    <div
      class="flex-col items-center justify-center w-full h-48 fixed bottom-0 left-1/2 -translate-x-1/2 flex cursor-pointer z-50"
      v-if="isDragging"
      @dragover="handleDragOver"
      @drop="handleDrop"
    >
      <div class="absolute w-[800px] h-[800px] rounded-full bg-red-500/30 opacity-30 blur-3xl translate-y-1/4"></div>

      <div class="z-10 text-center text-red-500 flex flex-col items-center">
        <div class="text-5xl mb-2">
          <IconTrash />
        </div>
        <p class="text-base font-bold">Deletar notas</p>
      </div>
    </div>
  </MainLayout>
</template>
