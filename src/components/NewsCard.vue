<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  newsItem: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="md-card group flex flex-col overflow-hidden">
    <div class="relative overflow-hidden">
      <RouterLink :to="`/noticia/${newsItem.id}`">
        <img class="object-cover w-full h-48 transition-transform duration-500 group-hover:scale-105"
          :src="newsItem.imageUrl" :alt="newsItem.title"
          @error="(e) => (e.target.src = 'https://placehold.co/600x400/e0e5ec/4a5568?text=Noticia')" />
      </RouterLink>
      <div class="absolute top-4 left-4 bg-md-primary text-md-on-primary text-xs font-bold px-3 py-1 rounded-md-sm shadow-md-elevation-2">
        {{ newsItem.category }}
      </div>
    </div>

    <div class="p-5 flex flex-col justify-between flex-grow">
      <div>
        <RouterLink :to="`/noticia/${newsItem.id}`"
          class="block text-lg font-bold text-md-on-surface hover:text-md-primary transition-colors duration-300">
          {{ newsItem.title }}
        </RouterLink>
        <p class="mt-2 text-sm text-md-on-surface leading-relaxed">
          {{ newsItem.excerpt }}
        </p>
      </div>

      <div class="mt-4 pt-4 border-t border-md-background flex items-center justify-between">
        <div class="flex items-center text-sm text-md-on-surface">
          <img :src="newsItem.authorAvatarUrl" alt="Autor" class="w-8 h-8 rounded-full mr-3 shadow-md-elevation-1" />
          <span>{{ newsItem.author }}</span>
        </div>
        <span class="text-xs text-md-on-surface">{{ newsItem.date }}</span>
      </div>
    </div>
  </div>
</template>
