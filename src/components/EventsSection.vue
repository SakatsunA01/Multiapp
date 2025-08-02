<script setup>
import { computed } from 'vue'
import EventCard from '@/components/EventCard.vue'
import { RouterLink } from 'vue-router'
import { events } from '@/data/events.js'

const upcomingEvents = computed(() => events.slice(0, 3))
</script>

<template>
  <section class="p-6 md:p-8">
    <div class="flex items-center justify-between mb-6">
      <h2 class="text-2xl md:text-3xl font-bold text-md-on-surface">
        Próximos Eventos
      </h2>
      <RouterLink to="/eventos" class="md-button px-4 py-2 text-sm">
        Ver todos
      </RouterLink>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      <EventCard v-for="event in upcomingEvents" :key="event.id" :event="event" />
    </div>
  </section>
</template>
