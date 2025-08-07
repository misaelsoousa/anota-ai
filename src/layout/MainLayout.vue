<script setup lang="ts">
import ConfirmModal from '@/components/ConfirmModal.vue';
import SideBar from '@/components/layout/SideBar.vue';
</script>

<template>
  <main class="flex">
    <ConfirmModal />
    <SideBar />
    <slot />
  </main>
</template>
