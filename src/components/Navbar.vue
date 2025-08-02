<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { onClickOutside } from '@vueuse/core'
import { MagnifyingGlassIcon, Bars3Icon, XMarkIcon, ChevronDownIcon, UserCircleIcon } from '@heroicons/vue/24/solid'
import SocialLinks from '@/components/SocialLinks.vue'

const isMobileMenuOpen = ref(false)
const isCategoriesOpen = ref(false)
const categoriesMenu = ref(null)

onClickOutside(categoriesMenu, () => {
  isCategoriesOpen.value = false
})

const navLinks = [
  { text: 'Inicio', to: '/' },
  { text: 'Noticias', to: '/noticias' },
  { text: 'Eventos', to: '/eventos' },
  { text: 'Contacto', to: '/contacto' }
]

const categories = [
  'Todas', 'Economía', 'Tecnología', 'Cultura', 'Ciencia', 'Salud'
]
</script>

<template>
  <nav class="md-card container mx-auto my-4 sticky top-4 z-50">
    <div class="flex items-center justify-between h-16 px-4 sm:px-6">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <RouterLink to="/" class="text-2xl font-bold text-md-on-surface hover:text-md-primary transition-colors duration-300">
          Multipress
        </RouterLink>
      </div>

      <!-- Menú de Escritorio -->
      <div class="hidden md:flex items-center gap-2">
        <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to"
          class="md-button px-4 py-2 text-sm font-semibold"
          active-class="bg-md-primary-variant">
          {{ link.text }}
        </RouterLink>

        <!-- Dropdown de Categorías -->
        <div class="relative" ref="categoriesMenu">
          <button @click="isCategoriesOpen = !isCategoriesOpen"
            class="md-button px-4 py-2 text-sm font-semibold flex items-center gap-1">
            Categorías
            <ChevronDownIcon class="h-5 w-5 transition-transform duration-300" :class="{ 'rotate-180': isCategoriesOpen }" />
          </button>
          <transition enter-active-class="transition ease-out duration-200"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-150" leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <div v-if="isCategoriesOpen"
              class="absolute right-0 mt-2 w-48 md-card focus:outline-none z-10 p-2">
              <RouterLink v-for="category in categories" :key="category" :to="`/noticias?category=${category}`"
                class="block text-left w-full md-button text-sm mb-1 px-4 py-2">
                {{ category }}
              </RouterLink>
            </div>
          </transition>
        </div>
      </div>

      <!-- Búsqueda, Sociales y Login -->
      <div class="hidden lg:flex items-center gap-4">
        <div class="relative">
          <input type="text" placeholder="Buscar..." class="md-input w-40 pl-10 pr-4 py-2 text-sm">
          <MagnifyingGlassIcon class="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-md-on-surface" />
        </div>
        <SocialLinks />
        <RouterLink to="/login" class="md-button rounded-full w-10 h-10 flex items-center justify-center">
          <UserCircleIcon class="h-6 w-6" />
        </RouterLink>
      </div>

      <!-- Botón de menú móvil -->
      <div class="md:hidden">
        <button @click="isMobileMenuOpen = !isMobileMenuOpen" aria-label="Toggle menu"
          class="md-button rounded-full w-12 h-12 flex items-center justify-center">
          <Bars3Icon v-if="!isMobileMenuOpen" class="h-6 w-6" />
          <XMarkIcon v-else class="h-6 w-6" />
        </button>
      </div>
    </div>

    <!-- Menú Móvil -->
    <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-if="isMobileMenuOpen" class="md:hidden md-card border-t-2 border-md-background mt-2">
        <div class="p-4 space-y-2">
          <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to"
            class="block text-center md-button px-4 py-3 font-semibold"
            active-class="bg-md-primary-variant" @click="isMobileMenuOpen = false">
            {{ link.text }}
          </RouterLink>
          <div class="relative pt-2">
            <input type="text" placeholder="Buscar..." class="md-input w-full text-center pl-10 pr-4 py-3">
            <MagnifyingGlassIcon class="h-5 w-5 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-0 text-md-on-surface" />
          </div>
          <div class="flex justify-center gap-2 pt-2">
            <SocialLinks />
          </div>
        </div>
      </div>
    </transition>
  </nav>
</template>
