<script setup lang="ts">
import siteData from "./siteData";
onMounted(() => {
  console.log("Sup World!");
  if(siteData.redirect) {
    setTimeout(() => {
      globalThis.location.href = siteData.redirectUrl;
    }, siteData.redirectTime);
  }

  useSeoMeta({
    title: siteData.title,
    ogTitle: siteData.title,
  })})
</script>
<template>
  <NuxtPage />
</template>
