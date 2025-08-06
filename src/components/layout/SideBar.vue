<script setup lang="ts">
import IconHome from '../icons/IconHome.vue';
import IconLogo from '../icons/IconLogo.vue';
import IconLogout from '../icons/IconLogout.vue';
import IconPlus from '../icons/IconPlus.vue';

</script>

<template>
    <section class="h-screen shadow-2xl w-fit flex flex-col justify-between items-center dark:bg-light-gray transition duration-300">
        <div class="px-8 pt-8">
            <IconLogo class="w-12 h-auto dark:text-white transition-all duration-300 text-light-gray"/>
        </div>
        <div class="flex flex-col gap-10 w-full items-center">
            <div class="relative before:absolute before:w-[6px] before:h-[200%] before:rounded-br-2xl before:rounded-tr-2xl before:bg-main-purple  before:left-0 before:top-1/2 before:-translate-y-1/2 w-full flex justify-center items-center">
                <IconHome class="w-8 h-auto dark:text-white transition duration-300"/>
            </div>
            <div class="relative before:absolute before:w-[6px] before:h-[200%] before:rounded-br-2xl before:rounded-tr-2xl before:bg-main-purple  before:left-0 before:top-1/2 before:-translate-y-1/2 w-full flex justify-center items-center">
                <IconPlus class="w-8 h-auto dark:fill-white transition duration-300"/>
            </div>
        </div>
        <div class="pb-8">
            <IconLogout/>
        </div>
    </section>
</template>