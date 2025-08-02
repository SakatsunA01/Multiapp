<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="md-card group flex flex-col overflow-hidden">
    <div class="relative overflow-hidden">
      <RouterLink :to="`/evento/${event.id}`">
        <img class="object-cover w-full h-40 transition-transform duration-500 group-hover:scale-105"
          :src="event.imageUrl" :alt="event.title"
          @error="(e) => (e.target.src = 'https://placehold.co/300x200/e0e5ec/4a5568?text=Evento')" />
      </RouterLink>
    </div>

    <div class="p-5 flex flex-col justify-between flex-grow">
      <div>
        <RouterLink :to="`/evento/${event.id}`"
          class="block text-lg font-bold text-md-on-surface hover:text-md-primary transition-colors duration-300">
          {{ event.title }}
        </RouterLink>
        <p class="mt-2 text-sm font-semibold text-md-on-surface">{{ event.date }}</p>
        <p class="text-sm text-md-on-surface">{{ event.location }}</p>
      </div>

      <div class="mt-4 pt-4 border-t border-md-background">
        <RouterLink :to="`/evento/${event.id}`" class="md-button text-center w-full py-2">
          Ver Detalles
        </RouterLink>
      </div>
    </div>
  </div>
</template>
