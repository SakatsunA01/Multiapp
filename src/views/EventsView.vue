<script setup>
import { ref, computed } from 'vue'
import EventCard from '@/components/EventCard.vue'
import { events } from '@/data/events.js'

const searchQuery = ref('')

const filteredEvents = computed(() => {
  if (!searchQuery.value) {
    return events
  }
  return events.filter(item =>
    item.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>

<template>
  <div class="py-8">
    <div class="text-center mb-12">
      <h1 class="text-4xl md:text-5xl font-bold text-md-on-background">Eventos</h1>
      <p class="text-lg text-md-on-background mt-2">Descubre los próximos eventos en tu área.</p>
    </div>

    <div class="mb-8 max-w-lg mx-auto">
      <input type="text" v-model="searchQuery" placeholder="Buscar eventos..." class="md-input w-full px-6 py-3 text-center">
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <EventCard v-for="item in filteredEvents" :key="item.id" :event="item" />
    </div>

    <div v-if="filteredEvents.length === 0" class="text-center py-16">
      <p class="text-xl text-md-on-background">No se encontraron eventos.</p>
    </div>
  </div>
</template>
