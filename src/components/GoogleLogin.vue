<template>
  <div ref="googleBtn"></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

declare global {
  interface Window {
    google: any;
  }
}

const clientId = '1087252846940-sq6p28r78dbkru6bi97csmb4p4viukir.apps.googleusercontent.com';
const googleBtn = ref<HTMLDivElement | null>(null);

onMounted(() => {
  if (window.google && googleBtn.value) {
    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: handleCredentialResponse,
    });
    window.google.accounts.id.renderButton(
      googleBtn.value,
  {
    theme: "outline",        
    size: "large",           
    text: "singin",      
    shape: "rectangular",  
    logo_alignment: "center",
    width: 340,              
  }
    );
  }
});

function handleCredentialResponse(response: any) {
  const jwt = response.credential;
  const payload = JSON.parse(atob(jwt.split('.')[1]));
  alert('Bem-vindo, ' + payload.name);
}
</script>