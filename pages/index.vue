<script setup lang="ts">
import siteData from '~/siteData';
</script>
<template>
  <div class="flex flex-col items-center justify-center gap-8 h-screen cursor-wait bg-stone-900">
    <h1 class="text-5xl text-blue-500 transition-all hover:scale-105 hover:text-blue-700">
      {{ siteData.title }}
    </h1>
    <Icon name="svg-spinners:blocks-shuffle-2" size="100px" class="text-stone-100 transition-all hover:scale-125 hover:text-blue-500" />
    <h2 class="text-4xl text-yellow-300 transition-all hover:scale-105 hover:text-yellow-500">
      Redirecionando...
    </h2>
  </div>
</template>
