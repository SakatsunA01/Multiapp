<template>
  <div class="flex gap-4">
    <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" rel="noopener noreferrer"
      class="md-button rounded-full w-12 h-12 flex items-center justify-center text-2xl">
      <i :class="link.icon"></i>
    </a>
  </div>
</template>

<script setup>
import { socialLinks } from '@/data/socialLinks.js';
</script>
