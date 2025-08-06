<script setup lang="ts">
import { RouterView } from 'vue-router'
import LoadingSpinner from './components/LoadingSpinner.vue'
import { isLoading } from './loadingState'
</script>

<template>
  <RouterView />
  <LoadingSpinner v-if="isLoading" />
</template>

<style scoped>
</style>
