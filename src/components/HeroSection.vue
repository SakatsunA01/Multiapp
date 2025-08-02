<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'

const activeSlide = ref(0)
const slides = [
  {
    src: 'https://placehold.co/1200x900/e0e5ec/4a5568?text=Innovacion+Tecnologica',
    alt: 'Innovación Tecnológica',
    title: 'Innovación Tecnológica',
    subtitle: 'Descubre las últimas tendencias en tecnología'
  },
  {
    src: 'https://placehold.co/1200x900/d1d9e6/4a5568?text=Mercados+Globales',
    alt: 'Mercados Globales',
    title: 'Mercados Globales',
    subtitle: 'Análisis profundo de las tendencias económicas'
  },
  {
    src: 'https://placehold.co/1200x900/c8d0e7/4a5568?text=Cultura+Digital',
    alt: 'Cultura Digital',
    title: 'Cultura Digital',
    subtitle: 'Explora el impacto de la digitalización en la sociedad'
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
  stopAutoPlay()
  slideInterval.value = setInterval(next, 5000)
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
  <section class="grid grid-cols-1 lg:grid-cols-5 gap-6 h-[65vh] mb-16">
    <!-- Columna Izquierda: Carrusel Principal -->
    <div class="lg:col-span-3 h-full">
      <div class="md-card relative h-full overflow-hidden group" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
        <transition-group name="fade" tag="div">
          <div v-for="(slide, index) in slides" :key="slide.src">
            <img v-if="index === activeSlide" :src="slide.src" :alt="slide.alt"
              class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          </div>
        </transition-group>

        <div class="absolute inset-0 bg-gradient-to-r from-slate-500 to-transparent"></div>

        <div class="absolute bottom-0 left-0 p-6 text-white">
          <h2 class="text-3xl font-bold">{{ slides[activeSlide].title }}</h2>
          <p>{{ slides[activeSlide].subtitle }}</p>
        </div>

        <button @click="prev"
          class="absolute left-4 top-1/2 -translate-y-1/2 md-button rounded-full w-12 h-12 flex items-center justify-center">
          <ChevronLeftIcon class="h-6 w-6" />
        </button>
        <button @click="next"
          class="absolute right-4 top-1/2 -translate-y-1/2 md-button rounded-full w-12 h-12 flex items-center justify-center">
          <ChevronRightIcon class="h-6 w-6" />
        </button>

        <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          <button v-for="(slide, index) in slides" :key="index" @click="goToSlide(index)"
            class="w-3 h-3 rounded-full transition-colors duration-300"
            :class="{ 'bg-white': index === activeSlide, 'bg-white/50 hover:bg-white/75': index !== activeSlide }"></button>
        </div>
      </div>
    </div>

    <!-- Columna Derecha: Noticias Secundarias -->
    <div class="lg:col-span-2 h-full grid grid-rows-2 gap-6">
      <div class="md-card relative overflow-hidden group">
        <img src="https://placehold.co/800x400/d1d9e6/4a5568?text=Noticia+Destacada+1"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Noticia 1">
        <div class="absolute inset-0 bg-gradient-to-r from-slate-500 to-transparent"></div>
        <div class="absolute bottom-0 left-0 p-4 text-white">
          <h3 class="font-semibold">Análisis Económico</h3>
          <p class="text-sm">Proyecciones para el próximo trimestre.</p>
        </div>
      </div>
      <div class="md-card relative overflow-hidden group">
        <img src="https://placehold.co/800x400/c8d0e7/4a5568?text=Noticia+Destacada+2"
          class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt="Noticia 2">
        <div class="absolute inset-0 bg-gradient-to-r from-slate-500 to-transparent"></div>
        <div class="absolute bottom-0 left-0 p-4 text-white">
          <h3 class="font-semibold">Cultura Pop</h3>
          <p class="text-sm">Los eventos que no te puedes perder.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
