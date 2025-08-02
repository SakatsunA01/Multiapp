<template>
  <footer class="px-4 sm:px-6 lg:px-8 py-8 md-card border-t">
    <div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 class="text-lg font-bold text-md-on-background">Multipress</h3>
          <p class="text-sm text-md-on-background mt-2">Información para un mundo conectado.</p>
        </div>
        <div>
          <h3 class="text-lg font-bold text-md-on-background">Enlaces</h3>
          <ul class="mt-2 space-y-1 text-sm text-md-on-background">
            <li>
              <RouterLink to="/" class="hover:text-md-primary">Inicio</RouterLink>
            </li>
            <li>
              <RouterLink to="/noticias" class="hover:text-md-primary">Noticias</RouterLink>
            </li>
            <li>
              <RouterLink to="/eventos" class="hover:text-md-primary">Eventos</RouterLink>
            </li>
            <li>
              <RouterLink to="/contacto" class="hover:text-md-primary">Contacto</RouterLink>
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-lg font-bold text-md-on-background">Síguenos</h3>
          <div class="mt-2 flex justify-center md:justify-start">
            <SocialLinks />
          </div>
        </div>
      </div>
      <div class="text-center text-xs text-md-on-background mt-8 border-t border-md-on-background/20 pt-4">
        <p>&copy; {{ new Date().getFullYear() }} Multipress. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import SocialLinks from '@/components/SocialLinks.vue';
</script>
