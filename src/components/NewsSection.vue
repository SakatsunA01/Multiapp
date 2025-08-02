<script setup>
import { ref, computed } from 'vue'
import NewsCard from '@/components/NewsCard.vue'
import { RouterLink } from 'vue-router'
import { news } from '@/data/news.js'

const selectedCategory = ref('Todas')

const uniqueCategories = computed(() => {
  const categories = new Set(news.map(item => item.category))
  return ['Todas', ...Array.from(categories)]
})

const filteredNews = computed(() => {
  if (selectedCategory.value === 'Todas') {
    return news.slice(0, 10) // Mostrar hasta 10 noticias
  }
  return news.filter(item => item.category === selectedCategory.value).slice(0, 10)
})

const selectCategory = (category) => {
  selectedCategory.value = category
}
</script>

<template>
  <section class=" p-6 md:p-8">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl md:text-3xl font-bold text-md-on-surface">
        Últimas Noticias
      </h2>
    </div>

    <div class="flex flex-wrap gap-2 mb-8">
      <button v-for="category in uniqueCategories" :key="category" @click="selectCategory(category)" :class="{
        'bg-md-primary text-md-on-primary': selectedCategory === category,
        'md-button': selectedCategory !== category
      }" class="px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300">
        {{ category }}
      </button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <NewsCard v-for="newsItem in filteredNews" :key="newsItem.id" :newsItem="newsItem" />
    </div>

    <div v-if="filteredNews.length === 0" class="text-center py-8">
      <p class="text-md-on-surface">No se encontraron noticias en esta categoría.</p>
    </div>
  </section>
</template>
