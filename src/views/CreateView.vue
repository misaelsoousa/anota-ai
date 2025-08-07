<script setup lang="ts">
import IconArrow from '@/components/icons/IconArrow.vue';
import IconBackground from '@/components/icons/IconBackground.vue';
import IconMove from '@/components/icons/IconMove.vue';
import IconPlus from '@/components/icons/IconPlus.vue';
import ToogleTheme from '@/components/layout/ToogleTheme.vue';
import MainLayout from '@/layout/MainLayout.vue';
import { useIndexedDB } from '@/services/db';
import { onMounted, ref } from 'vue';
const {newNote, openDB} = useIndexedDB();
const titulo = ref('')
const desc = ref('')
const background = ref('')
onMounted(async () => {
  console.log("db aberta");
  await openDB();
});
const createNote = (event: Event  ) =>{
  event.preventDefault();
  newNote({
    titulo: titulo.value,
    desc: desc.value,
    background: background.value
  });
  alert("criado com sucesso!");
}
function toBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.readAsDataURL(file)

    reader.onload = () => resolve(reader.result as string)
    reader.onerror = (error) => reject(error)
  })
}
const handleFile = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]

  if (file) {
    background.value = await toBase64(file)
    console.log('Imagem convertida em base64:', background.value)
  }
}
</script>

<template>
  <MainLayout>
    <div class="relative w-full">
      <img :src="background" alt="" class="w-full max-h-[400px] object-cover absolute z-10 ">
    <form class="px-24 py-10 w-full dark:bg-main-gray transition duration-300 z-20 relative" @submit.prevent="createNote">
      <ToogleTheme />
      <a href="/">
        <IconArrow/>
      </a>

      <div class="px-16 flex flex-col gap-5 "  :class="{ 'pt-[400px]': background, 'pt-24': !background }">
        <input type="file" id="file-bg" @change="handleFile" class="hidden" />
        <label htmlFor="file-bg" class="flex items-center text-gray gap-2 hover:text-light-gray font-bold cursor-pointer transition duration-200 group"><IconBackground class="group-hover:fill-light-gray"/>
            <p class="mb-1">
                Adicionar background
            </p>
        </label>
        <input placeholder="Nova Anotação" v-model="titulo" class="resize-none focus:outline-0 w-full placeholder:text-gray font-bold text-5xl caret-[#8D00A3] focus:caret-[#8D00A3]"></input>
        <div class="flex items-center ">
          <div class="flex items-center gap-2 pr-3 relative after:right-0 after:top-0 after:absolute after:content-[''] after:bg-main-purple after:h-full after:w-[2px] after:rounded-full after:translate-x-full">
            <IconPlus class="text-gray bg-main-purple cursor-pointer hover:bg-dark-purple transition duration-200"/>
            <IconMove class="cursor-grab"/>
          </div>
          <input placeholder="o que está pensando ?" v-model="desc" class="resize-none focus:outline-0 w-full ml-4 placeholder:text-gray font-bold text-xl caret-[#8D00A3] focus:caret-[#8D00A3]"></input>
        </div>
      </div>
      <button type="submit" class="text-white bg-main-purple px-4 py-3 rounded-xl disabled:opacity-20 fixed right-12 bottom-7">Salvar</button>
    </form>
    </div>
  </MainLayout>
</template>
