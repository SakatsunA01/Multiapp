<script setup>
defineProps({
  event: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div
    class="bg-medium-charcoal rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row transform transition duration-300 hover:scale-105 hover:shadow-accent-brown/10">
    <img :src="event.imageUrl" :alt="event.title" class="w-full md:w-1/3 h-48 md:h-auto object-cover"
      @error="(e) => (e.target.src = 'https://placehold.co/300x200/948979/222831?text=Evento')" />
    <div class="p-4 flex-1 flex flex-col">
      <div>
        <h3 class="text-xl font-semibold mb-2 text-light-beige">{{ event.title }}</h3>
        <p class="text-light-beige/80 text-sm mb-1"><span class="font-medium text-light-beige/90">Fecha:</span> {{
          event.date }}</p>
        <p class="text-light-beige/80 text-sm mb-4"><span class="font-medium text-light-beige/90">Lugar:</span> {{
          event.location }}</p>
        <p class="text-light-beige/80 text-base mb-4 hidden md:block">{{ event.description }}</p>
      </div>
      <a :href="event.link"
        class="text-accent-brown hover:text-light-beige font-medium transition duration-300 mt-auto">Ver Detalles</a>
    </div>
  </div>
</template>
