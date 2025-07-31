<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app-container" class="text-light-beige">
    <Navbar />
    <main class="pt-16">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
