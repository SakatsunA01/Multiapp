<script setup>
import { RouterLink } from 'vue-router'

// Reutilizamos la misma estructura de datos para consistencia
const socialLinks = [
  { label: 'Facebook', icon: 'i-carbon-logo-facebook', href: '#' },
  { label: 'Instagram', icon: 'i-carbon-logo-instagram', href: '#' },
  { label: 'X (Twitter)', icon: 'i-carbon-logo-x', href: '#' },
  { label: 'TikTok', icon: 'i-carbon-logo-tiktok', href: '#' },
  { label: 'YouTube', icon: 'i-carbon-logo-youtube', href: '#' },
]
</script>

<template>
  <footer class="bg-dark-charcoal p-8 mt-16 shadow-inner">
    <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
      <!-- Columna 1: Sobre Nosotros -->
      <div>
        <h4 class="text-xl font-bold text-accent-brown mb-4">Multipress Argentina</h4>
        <p class="text-light-beige/80">
          Tu fuente de noticias sobre tecnología, negocios y el futuro.
        </p>
      </div>

      <!-- Columna 2: Enlaces Rápidos -->
      <div>
        <h4 class="text-xl font-bold text-accent-brown mb-4">Enlaces Rápidos</h4>
        <ul class="space-y-2">
          <li>
            <RouterLink to="/noticias" class="text-light-beige/80 hover:text-accent-brown transition-colors">Noticias
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/eventos" class="text-light-beige/80 hover:text-accent-brown transition-colors">Eventos
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/contacto" class="text-light-beige/80 hover:text-accent-brown transition-colors">Contacto
            </RouterLink>
          </li>
          <li>
            <RouterLink to="/privacidad" class="text-light-beige/80 hover:text-accent-brown transition-colors">Política
              Política
              de Privacidad</RouterLink>
          </li>
        </ul>
      </div>

      <!-- Columna 3: Redes Sociales -->
      <div>
        <h4 class="text-xl font-bold text-accent-brown mb-4">Síguenos</h4>
        <div class="flex justify-center md:justify-start space-x-4">
          <a v-for="social in socialLinks" :key="social.label" :href="social.href" :aria-label="social.label"
            class="text-light-beige/70 hover:text-accent-brown transition-all duration-200">
            <div :class="[social.icon, 'text-2xl']"></div>
          </a>
        </div>
      </div>
    </div>
    <div class="text-center text-light-beige/60 mt-8 pt-4 border-t border-medium-charcoal col-span-1 md:col-span-3">
      &copy; 2024 Multipress Argentina. Todos los derechos reservados.
    </div>
  </footer>
</template>
