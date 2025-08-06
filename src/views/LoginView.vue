<script setup lang="ts">
import IconGoogle from '@/components/icons/IconGoogle.vue';
import IconLogin from '@/components/icons/IconLogin.vue';
import { isLoading } from '@/loadingState';
import ToogleTheme from '@/components/layout/ToogleTheme.vue';
import GoogleLogin from '@/components/GoogleLogin.vue';


function loginAnonimo() {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 5000);
}

</script>

<template>
  <main class="flex xl:flex-row flex-col gap-20 xl:gap-0">
    <section class="xl:w-3/5 dark:bg-main-gray transition duration-300">
        <div class="w-full py-10 xl:py-0 xl:h-screen flex items-center justify-center">
            <img src="/src/assets/img/kbrtec.png" alt="KBRTEC" class="w-20 h-auto select-none opacity-1000 dark:opacity-0 transition-all duration-300 absolute" draggable="false" />
            <img src="/src/assets/img/kbrteclong.png" alt="KBRTEC" class="w-60 h-auto select-none opacity-0 dark:opacity-100 transition-all duration-300 absolute" draggable="false"/>
        </div>
    </section>
    <section class="xl:w-2/5 h-full flex items-center justify-center w-full">
        <div class="xl:bg-[#FDFAFD] xl:dark:bg-[#36343B] transition duration-300 xl:h-screen flex justify-center items-center w-full">
          <ToogleTheme/>
            <div class="flex flex-col items-center gap-10 px-5 sm:px-20 w-full sm:w-[500px]">
                <button class="bg-[#F7685C] hover:bg-[#c25248] hidden transition duration-300 cursor-pointer w-full text-white font-medium p-4 rounded-lg flex items-center justify-center gap-2">
                    <IconGoogle/>
                   Entre com o Google
                </button>
                <GoogleLogin/>
                <span class="relative before:w-1/6 sm:before:w-1/5 transition duration-300 before:transition before:duration-300 after:transition after:duration-300 before:h-[1px] dark:before:bg-white before:bg-black before:absolute before:top-3/5 before:left-0 before:-translate-y-1/2 after:w-1/6 sm:after:w-1/5 after:h-[1px] dark:after:bg-white after:bg-black after:absolute after:top-3/5 after:right-0 after:-translate-y-1/2 text-center w-full dark:text-white text-[#3F3D3F] my-4 leading-none align-middle">
                    ou junte-se anonimamente
                </span>
                <form action="" class="flex flex-col gap-10 w-full">
                <input type="text" placeholder="Seu nome secreto" class="bg-white p-4 rounded-lg border-black border-2 w-full placeholder:text-black font-medium focus:outline-0 text-black">
                <button @click="loginAnonimo" class="bg-main-purple hover:bg-[#650074] transition duration-300 cursor-pointer w-full text-white font-medium p-4 rounded-lg flex items-center justify-center gap-2">
                    <IconLogin/>
                    Entre anonimamente</button>
                </form>
            </div>
        </div>
    </section>
  </main>
</template>
