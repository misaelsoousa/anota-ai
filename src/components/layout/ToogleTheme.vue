<script setup lang="ts">
import { onMounted } from 'vue';
import IconMoon from './../icons/IconMoon.vue';
import IconSun from './../icons/IconSun.vue';
onMounted(() => {
  if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light');
  }
  if (localStorage.getItem('theme') === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  const toogle = document.querySelectorAll('#theme-toggle');
  toogle.forEach(btn => {
    btn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      const theme = localStorage.getItem('theme');
      if (theme === 'light') {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  });
});

</script>

<template>
<IconMoon class="absolute top-5 xl:top-10 right-5 xl:right-10 cursor-pointer hover:scale-110 transition duration-300 dark:opacity-0" id="theme-toggle"/>
<IconSun class="absolute top-5 xl:top-10 right-5 xl:right-10 cursor-pointer hover:scale-110 transition duration-300 dark:opacity-100 opacity-0" id="theme-toggle"/>
</template>