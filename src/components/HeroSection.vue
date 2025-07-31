<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeSlide = ref(0)
const slides = [
  {
    src: 'https://placehold.co/1200x900/222831/DFD0B8?text=Innovacion+Tecnologica',
    alt: 'Innovación Tecnológica',
  },
  {
    src: 'https://placehold.co/1200x900/393E46/DFD0B8?text=Mercados+Globales',
    alt: 'Mercados Globales',
  },
  {
    src: 'https://placehold.co/1200x900/948979/DFD0B8?text=Cultura+Digital',
    alt: 'Cultura Digital',
  },
]

const slideInterval = ref(null)

const next = () => {
  activeSlide.value = (activeSlide.value + 1) % slides.length
}
const prev = () => {
  activeSlide.value = (activeSlide.value - 1 + slides.length) % slides.length
}

const goToSlide = (index) => {
  activeSlide.value = index
}

const startAutoPlay = () => {
  stopAutoPlay() // Asegurarse de que no haya intervalos duplicados
  slideInterval.value = setInterval(next, 5000) // Cambia de slide cada 5 segundos
}

const stopAutoPlay = () => {
  if (slideInterval.value) {
    clearInterval(slideInterval.value)
    slideInterval.value = null
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <section class="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[60vh] md:h-[75vh]">
    <!-- Columna Izquierda -->
    <div class="flex flex-col gap-8 h-full">
      <!-- Carrusel -->
      <div class="flex-grow-[0.7] relative bg-dark-charcoal rounded-lg shadow-xl overflow-hidden"
        @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
        <transition-group name="fade" tag="div">
          <div v-for="(slide, index) in slides" :key="slide.src">
            <img v-if="index === activeSlide" :src="slide.src" :alt="slide.alt"
              class="absolute inset-0 w-full h-full object-cover" />
          </div>
        </transition-group>

        <!-- Controles de Navegación -->
        <div class="absolute inset-0 flex items-center justify-between p-4">
          <button @click="prev" aria-label="Anterior"
            class="bg-black/30 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button @click="next" aria-label="Siguiente"
            class="bg-black/30 hover:bg-black/60 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
              stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <!-- Indicadores de Diapositiva -->
        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-3">
          <button v-for="(slide, index) in slides" :key="index" @click="goToSlide(index)"
            :aria-label="`Ir a la diapositiva ${index + 1}`" class="w-3 h-3 rounded-full transition-colors duration-300"
            :class="index === activeSlide ? 'bg-accent-brown' : 'bg-light-beige/50 hover:bg-light-beige'"></button>
        </div>
      </div>
      <div class="flex-grow-[0.3] bg-dark-charcoal rounded-lg shadow-xl overflow-hidden">
        <img src="https://placehold.co/800x300/222831/DFD0B8?text=Análisis+de+Datos" class="w-full h-full object-cover"
          alt="Análisis de Datos" />
      </div>
    </div>
    <!-- Columna Derecha -->
    <div class="hidden lg:flex flex-col gap-8 h-full">
      <div class="flex-grow-[0.3] flex gap-8">
        <div class="w-1/2 bg-dark-charcoal rounded-lg shadow-xl overflow-hidden">
          <img src="https://placehold.co/400x300/393E46/DFD0B8?text=Noticia+A" class="w-full h-full object-cover"
            alt="Noticia A" />
        </div>
        <div class="w-1/2 bg-dark-charcoal rounded-lg shadow-xl overflow-hidden">
          <img src="https://placehold.co/400x300/948979/DFD0B8?text=Noticia+B" class="w-full h-full object-cover"
            alt="Noticia B" />
        </div>
      </div>
      <div class="flex-grow-[0.7] bg-dark-charcoal rounded-lg shadow-xl overflow-hidden">
        <img src="https://placehold.co/800x600/222831/DFD0B8?text=Noticia+Principal" class="w-full h-full object-cover"
          alt="Noticia Principal" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
