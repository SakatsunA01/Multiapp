<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app-container" class="flex flex-col min-h-screen text-md-on-background bg-md-background font-sans">
    <Navbar />
    <main class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<style scoped></style>
