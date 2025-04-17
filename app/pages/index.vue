<script setup lang="ts">
import siteData from "~/siteData";
const timeoutId = ref<ReturnType<typeof setTimeout> | null>(null);

onMounted(() => {
  if (siteData.redirect) {
    timeoutId.value = setTimeout(() => {
      window.location.href = siteData.redirectUrl;
    }, siteData.redirectTime);
  }
});

function handleContextMenu() {
  if (timeoutId.value) {
    clearTimeout(timeoutId.value);
    alert("Redirecionamento cancelado!");
  }
}
</script>
<template>
  <div
    class="flex flex-col items-center justify-center gap-6 h-screen cursor-wait bg-stone-900 select-none"
    @contextmenu.prevent="handleContextMenu()"
  >
    <h1
      class="text-5xl text-blue-500 transition-all hover:scale-105 hover:text-blue-700"
      @click="navigateTo('/auth')"
    >
      {{ siteData.title }}
    </h1>
    <Icon
      name="svg-spinners:3-dots-fade"
      size="100"
      class="transition-colors text-stone-200 hover:text-blue-600 hover:animate-spin active:text-yellow-300"
    />
    <h2
      class="text-4xl text-yellow-300 transition-all hover:scale-105 hover:text-yellow-500"
    >
      Redirecionando...
    </h2>
  </div>
</template>
