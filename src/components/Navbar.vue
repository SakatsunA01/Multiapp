<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { onClickOutside } from '@vueuse/core'

// Estado para el menú móvil
const isMobileMenuOpen = ref(false)

// Estado para el menú desplegable de categorías
const isSectionsMenuOpen = ref(false)
const sectionsMenuContainer = ref(null)

onClickOutside(sectionsMenuContainer, () => {
  isSectionsMenuOpen.value = false
})

// --- Datos Centralizados para Mantenibilidad ---
const navLinks = [
  { text: 'Noticias', to: '/noticias' },
  { text: 'Eventos', to: '/eventos' },
]

const categoryLinks = [
  { text: 'Tecnología', to: '/categoria/tecnologia' },
  { text: 'Negocios', to: '/categoria/negocios' },
  { text: 'Deportes', to: '/categoria/deportes' },
]

const contactLink = { text: 'Contacto', to: '/contacto' }

const socialLinks = [
  { label: 'Facebook', icon: 'i-carbon-logo-facebook', href: '#' },
  { label: 'Instagram', icon: 'i-carbon-logo-instagram', href: '#' },
  { label: 'X (Twitter)', icon: 'i-carbon-logo-x', href: '#' },
  { label: 'TikTok', icon: 'i-carbon-logo-tiktok', href: '#' },
  { label: 'YouTube', icon: 'i-carbon-logo-youtube', href: '#' },
]
</script>

<template>
  <nav
    class="fixed top-0 left-0 w-full z-50 bg-dark-charcoal/80 backdrop-filter backdrop-blur-lg border-b border-medium-charcoal/50 shadow-md">
    <div class="container mx-auto px-4 sm:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Izquierda: Logo y Navegación Principal -->
        <div class="flex items-center gap-x-8">
          <!-- Logo -->
          <div class="flex-shrink-0">
            <RouterLink to="/" class="text-2xl font-bold text-accent-brown hover:text-light-beige/80 transition-colors">
              Multipress
            </RouterLink>
          </div>

          <!-- Menú de Escritorio -->
          <div class="hidden md:flex items-center space-x-6">
            <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to" class="text-light-beige/80 hover:text-accent-brown transition-colors duration-300
              router-link-exact-active:text-accent-brown router-link-exact-active:font-bold">
              {{ link.text }}
            </RouterLink>
            <!-- Desplegable de Categorías -->
            <div class="relative" ref="sectionsMenuContainer">
              <button @click="isSectionsMenuOpen = !isSectionsMenuOpen"
                class="flex items-center text-light-beige/80 hover:text-accent-brown transition-colors duration-300 font-medium">
                <span>Categorías</span>
                <div class="i-carbon-chevron-down ml-1 transition-transform duration-200"
                  :class="{ 'rotate-180': isSectionsMenuOpen }"></div>
              </button>
              <transition enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95">
                <div v-if="isSectionsMenuOpen" class="absolute top-full right-0 mt-2 w-48 bg-medium-charcoal rounded-md shadow-lg ring-1 ring-black/20
                  focus:outline-none z-10">
                  <div class="py-1">
                    <RouterLink v-for="link in categoryLinks" :key="link.to" :to="link.to"
                      @click="isSectionsMenuOpen = false"
                      class="block px-4 py-2 text-sm text-light-beige/80 hover:bg-dark-charcoal hover:text-accent-brown">
                      {{ link.text }}
                    </RouterLink>
                  </div>
                </div>
              </transition>
            </div>
            <RouterLink :to="contactLink.to" class="text-light-beige/80 hover:text-accent-brown transition-colors duration-300
              router-link-exact-active:text-accent-brown router-link-exact-active:font-bold">
              {{
                contactLink.text }}</RouterLink>
          </div>
        </div>

        <!-- Derecha: Acciones (Social, Búsqueda, Login) -->
        <div class="hidden md:flex items-center space-x-6">
          <!-- Iconos Sociales -->
          <div class="flex items-center space-x-4 border-r border-medium-charcoal/50 pr-6">
            <a v-for="social in socialLinks" :key="social.label" :href="social.href" :aria-label="social.label"
              class="text-light-beige/70 hover:text-accent-brown hover:scale-110 transition-all duration-200">
              <div :class="[social.icon, 'text-xl']"></div>
            </a>
          </div>
          <!-- Búsqueda -->
          <div class="relative">
            <input type="text" placeholder="Buscar..."
              class="bg-dark-charcoal text-light-beige rounded-full py-1.5 pl-4 pr-10 w-48 focus:outline-none focus:ring-2 focus:ring-accent-brown transition-all duration-300 focus:w-64">
            <div class="i-carbon-search absolute right-3 top-1/2 -translate-y-1/2 text-light-beige/70"></div>
          </div>
          <RouterLink to="/login" aria-label="Login"
            class="text-light-beige/70 hover:text-accent-brown transition-colors">
            <div class="i-carbon-user-avatar text-2xl"></div>
          </RouterLink>
        </div>

        <!-- Botón de Menú Móvil -->
        <div class="md:hidden">
          <button @click="isMobileMenuOpen = !isMobileMenuOpen"
            class="text-light-beige focus:outline-none hover:text-accent-brown">
            <div :class="isMobileMenuOpen ? 'i-carbon-close' : 'i-carbon-menu'" class="text-3xl"></div>
          </button>
        </div>
      </div>

      <!-- Menú Móvil -->
      <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0 -translate-y-1"
        enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-150"
        leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-1">
        <div v-if="isMobileMenuOpen" class="md:hidden pb-4 bg-dark-charcoal/95 backdrop-blur-sm"
          @click.self="isMobileMenuOpen = false">
          <div class="flex flex-col space-y-2 pt-4">
            <!-- Búsqueda -->
            <div class="relative px-4 mb-2">
              <input type="text" placeholder="Buscar..."
                class="bg-medium-charcoal text-light-beige rounded-full py-2 pl-4 pr-10 w-full focus:outline-none focus:ring-2 focus:ring-accent-brown">
              <div class="i-carbon-search absolute right-7 top-1/2 -translate-y-1/2 text-light-beige/70"></div>
            </div>

            <!-- Navegación Principal -->
            <RouterLink v-for="link in navLinks" :key="link.to" :to="link.to"
              class="text-light-beige/90 hover:text-accent-brown transition-colors px-4 py-2 text-lg"
              @click="isMobileMenuOpen = false">{{ link.text }}</RouterLink>

            <!-- Categorías -->
            <div class="px-4 pt-2 text-light-beige/60 text-sm font-bold">Categorías</div>
            <RouterLink v-for="link in categoryLinks" :key="link.to" :to="link.to"
              class="text-light-beige/90 hover:text-accent-brown transition-colors pl-8 pr-4 py-2"
              @click="isMobileMenuOpen = false">{{ link.text }}</RouterLink>

            <!-- Contacto -->
            <RouterLink :to="contactLink.to"
              class="text-light-beige/90 hover:text-accent-brown transition-colors px-4 py-2 text-lg"
              @click="isMobileMenuOpen = false">{{ contactLink.text }}</RouterLink>

            <div class="border-t border-medium-charcoal/50 my-2 mx-4"></div>

            <!-- Login -->
            <RouterLink to="/login"
              class="flex items-center text-light-beige/90 hover:text-accent-brown transition-colors px-4 py-2 text-lg"
              @click="isMobileMenuOpen = false">
              <div class="i-carbon-user-avatar text-2xl mr-3"></div>
              <span>Iniciar Sesión</span>
            </RouterLink>

            <!-- Iconos Sociales -->
            <div class="flex justify-center space-x-6 pt-4">
              <a v-for="social in socialLinks" :key="social.label" :href="social.href" :aria-label="social.label"
                class="text-light-beige/70 hover:text-accent-brown">
                <div :class="[social.icon, 'text-2xl']"></div>
              </a>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>
