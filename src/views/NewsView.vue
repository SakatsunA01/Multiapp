<script setup>
import { ref, computed } from 'vue'
import NewsCard from '@/components/NewsCard.vue'
import { news } from '@/data/news.js'

const searchQuery = ref('')

const filteredNews = computed(() => {
  if (!searchQuery.value) {
    return news
  }
  return news.filter(item =>
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<template>
  <div class="py-8">
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold text-md-on-background">Noticias</h1>
      <p class="text-lg text-md-on-background mt-2">Mantente al día con las últimas noticias.</p>
    </div>

    <div class="mb-8 max-w-lg mx-auto">
      <input type="text" v-model="searchQuery" placeholder="Buscar noticias..." class="md-input w-full px-6 py-3 text-center">
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <NewsCard v-for="item in filteredNews" :key="item.id" :newsItem="item" />
    </div>

    <div v-if="filteredNews.length === 0" class="text-center py-16">
      <p class="text-xl text-md-on-background">No se encontraron noticias.</p>
    </div>
  </div>
</template>
 