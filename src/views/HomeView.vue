<script setup>
import HeroSection from '@/components/HeroSection.vue'
import NewsSection from '@/components/NewsSection.vue'
import EventsSection from '@/components/EventsSection.vue'
</script>

<template>
  <div class="space-y-16 md:space-y-24 py-8">
    <HeroSection class="border-md-on-background/10 pb-16" />
    <NewsSection class="border-b border-md-on-background/10 pb-16" />
    <EventsSection class="mb-16" />
  </div>
</template>
