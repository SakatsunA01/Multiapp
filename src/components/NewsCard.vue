<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { onClickOutside } from '@vueuse/core'

defineProps({
  newsItem: {
    type: Object,
    required: true,
  },
})

const isShareMenuOpen = ref(false)
const shareMenuContainer = ref(null)

onClickOutside(shareMenuContainer, () => {
  isShareMenuOpen.value = false
})

const shareLinks = [
  { label: 'Facebook', icon: 'i-carbon-logo-facebook', color: 'hover:text-[#1877F2]', href: '#' },
  { label: 'X (Twitter)', icon: 'i-carbon-logo-x', color: 'hover:text-[#1DA1F2]', href: '#' },
  { label: 'WhatsApp', icon: 'i-carbon-logo-whatsapp', color: 'hover:text-[#25D366]', href: '#' },
  { label: 'Copiar Enlace', icon: 'i-carbon-link', color: 'hover:text-accent-brown', href: '#' },
]
</script>

<template>
  <div
    class="flex flex-col sm:flex-row overflow-hidden bg-medium-charcoal rounded-lg shadow-lg p-2 transition duration-300 hover:shadow-xl hover:shadow-accent-brown/10">
    <!-- Sección de la Imagen -->
    <div class="p-2 sm:w-1/2">
      <img class="rounded object-cover w-full sm:h-80 h-60" :src="newsItem.imageUrl" :alt="newsItem.title"
        @error="(e) => (e.target.src = 'https://placehold.co/600x400/948979/222831?text=Noticia')" />
    </div>

    <!-- Sección de Contenido -->
    <div class="sm:p-4 p-2 sm:w-1/2 flex flex-col justify-between">
      <!-- Título y Resumen -->
      <div>
        <RouterLink :to="newsItem.link"
          class="block sm:mt-2 text-2xl font-semibold text-light-beige hover:text-accent-brown hover:underline">
          {{ newsItem.title }}
        </RouterLink>
        <p class="mt-2 text-sm text-light-beige/80">
          {{ newsItem.excerpt }}
        </p>
      </div>

      <!-- Pie de la tarjeta con Autor y Acciones -->
      <div class="mt-4">
        <div class="flex items-center justify-between">
          <!-- Información del Autor -->
          <div class="flex items-center">
            <img class="object-cover h-10 w-10 rounded-full" :src="newsItem.authorAvatarUrl" alt="Avatar" />
            <RouterLink to="#" class="mx-2 font-semibold text-light-beige">{{ newsItem.author }}</RouterLink>
            <span class="mx-1 text-xs text-light-beige/70">{{ newsItem.date }}</span>
          </div>

          <!-- Botón de Compartir y Menú -->
          <div class="relative" ref="shareMenuContainer">
            <button @click="isShareMenuOpen = !isShareMenuOpen" aria-label="Share"
              class="text-light-beige/70 hover:text-accent-brown transition-colors text-xl">
              <div class="i-carbon-share"></div>
            </button>

            <transition enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95">
              <div v-if="isShareMenuOpen"
                class="absolute bottom-full right-0 mb-2 w-48 bg-dark-charcoal rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                <div class="py-1">
                  <a v-for="link in shareLinks" :key="link.label" :href="link.href"
                    class="flex items-center gap-3 px-4 py-2 text-sm text-light-beige transition-colors duration-200"
                    :class="link.color">
                    <div :class="[link.icon, 'text-xl']"></div>
                    <span>{{ link.label }}</span>
                  </a>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
