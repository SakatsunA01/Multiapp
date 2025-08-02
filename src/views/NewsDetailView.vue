<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { news } from '@/data/news.js'
import SocialLinks from '@/components/SocialLinks.vue'
import NewsCard from '@/components/NewsCard.vue'

const route = useRoute()
const newsItem = ref(null)
const comments = ref([
  { id: 1, author: 'Usuario 1', date: '2023-01-01', content: '¡Excelente artículo! Muy informativo.' },
  { id: 2, author: 'Usuario 2', date: '2023-01-02', content: 'Me encantó el análisis, muy profundo.' },
])
const newCommentText = ref('')

onMounted(() => {
  const itemId = parseInt(route.params.id)
  newsItem.value = news.find(item => item.id === itemId)
})

const relatedNews = computed(() => {
  if (!newsItem.value) return []
  return news.filter(
    item => item.category === newsItem.value.category && item.id !== newsItem.value.id
  ).slice(0, 3) // Mostrar hasta 3 noticias relacionadas
})

const addComment = () => {
  if (newCommentText.value.trim()) {
    comments.value.push({
      id: comments.value.length + 1,
      author: 'Usuario Anónimo',
      date: new Date().toISOString().slice(0, 10),
      content: newCommentText.value.trim(),
    })
    newCommentText.value = ''
  }
}
</script>

<template>
  <div v-if="newsItem" class="py-8">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <!-- Contenido Principal de la Noticia -->
      <div class="lg:col-span-3">
        <div class="text-center mb-8">
          <p class="text-md-primary font-semibold mb-2">{{ newsItem.category }}</p>
          <h1 class="text-4xl md:text-5xl font-bold text-md-on-background">{{ newsItem.title }}</h1>
          <p class="text-md-on-background mt-4">Publicado el {{ newsItem.date }} por {{ newsItem.author }}</p>
        </div>

        <img :src="newsItem.imageUrl" :alt="newsItem.title" class="rounded-md-lg w-full h-auto object-cover mb-8 shadow-md-elevation-2">

        <!-- Sección de Compartir -->
        <div class="mb-8 text-center">
          <h3 class="text-xl font-bold text-md-on-background mb-4">Compartir</h3>
          <SocialLinks />
        </div>

        <!-- Contenido Detallado de la Noticia -->
        <div class="md-card p-6 md:p-8 mb-8">
          <div class="prose max-w-none text-md-on-surface leading-relaxed" v-html="newsItem.content"></div>
        </div>

        <!-- Sección de Comentarios -->
        <div class="md-card p-6 md:p-8">
          <h3 class="text-2xl font-bold text-md-on-background mb-6">Comentarios ({{ comments.length }})</h3>
          <div class="mb-6">
            <textarea v-model="newCommentText" placeholder="Escribe tu comentario..." class="md-input w-full p-4 mb-4"></textarea>
            <button @click="addComment" class="md-button px-6 py-3">Añadir Comentario</button>
          </div>
          <div class="space-y-4">
            <div v-for="comment in comments" :key="comment.id" class="md-card p-4">
              <p class="font-semibold text-md-on-surface">{{ comment.author }} <span class="text-sm text-md-on-surface">({{ comment.date }})</span></p>
              <p class="text-md-on-surface mt-2">{{ comment.content }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar de Noticias Relacionadas -->
      <div class="lg:col-span-1">
        <div class="md-card p-6 md:p-8">
          <h3 class="text-2xl font-bold text-md-on-background mb-6">Noticias Relacionadas</h3>
          <div class="space-y-4">
            <NewsCard v-for="relatedItem in relatedNews" :key="relatedItem.id" :newsItem="relatedItem" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-center py-16">
    <p class="text-xl text-md-on-background">Cargando noticia...</p>
  </div>
</template>

<style>
.prose h2 {
  @apply text-2xl font-bold text-md-on-surface mt-8 mb-4;
}
.prose h3 {
  @apply text-xl font-bold text-md-on-surface mt-6 mb-3;
}
.prose p {
  @apply mb-4;
}
.prose a {
  @apply text-md-primary hover:underline;
}
</style>
