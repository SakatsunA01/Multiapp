<script setup>
import { ref, computed } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import NewsCard from '@/components/NewsCard.vue'
import CategoriesSidebar from '@/components/CategoriesSidebar.vue'
import EventCard from '@/components/EventCard.vue'
import GrowthSection from '@/components/GrowthSection.vue'

const categories = ref([
  'Tecnología',
  'Negocios',
  'Deportes',
  'Entretenimiento',
  'Salud',
  'Ciencia',
  'Política',
  'Cultura',
  'Economía'
])
const selectedCategory = ref('Todas')

const news = ref([
  {
    id: 1,
    title: 'Análisis Profundo: La Economía en 2025',
    excerpt:
      'Un vistazo detallado a las proyecciones económicas y los desafíos que enfrenta el país en el próximo año.',
    imageUrl: 'https://placehold.co/600x400/948979/DFD0B8?text=Economia',
    link: '#',
    category: 'Economía',
    author: 'Analista Económico',
    authorAvatarUrl: 'https://i.pravatar.cc/150?u=analista',
    date: '15 OCT 2024'
  },
  {
    id: 2,
    title: 'Impacto de la Tecnología en el Periodismo',
    excerpt:
      'Cómo las nuevas herramientas digitales están transformando la forma en que se produce y consume la información.',
    imageUrl: 'https://placehold.co/600x400/393E46/DFD0B8?text=Tecnologia',
    link: '#',
    category: 'Tecnología',
    author: 'Tocino Code',
    authorAvatarUrl: 'https://i.pravatar.cc/150?u=tocino',
    date: '14 OCT 2024'
  },
  {
    id: 3,
    title: 'El Ascenso del Fútbol Femenino',
    excerpt:
      'Exploramos el crecimiento y los desafíos del fútbol femenino en el panorama deportivo nacional.',
    imageUrl: 'https://placehold.co/600x400/393E46/DFD0B8?text=Deportes',
    link: '#',
    category: 'Deportes',
    author: 'Deportes Hoy',
    authorAvatarUrl: 'https://i.pravatar.cc/150?u=deportes',
    date: '13 OCT 2024'
  },
  {
    id: 4,
    title: 'Entrevista: El Futuro de la Política Regional',
    excerpt:
      'Conversamos con líderes destacados sobre los movimientos y tendencias que definirán el panorama político.',
    imageUrl: 'https://placehold.co/600x400/222831/DFD0B8?text=Politica',
    link: '#',
    category: 'Política',
    author: 'Política al Día',
    authorAvatarUrl: 'https://i.pravatar.cc/150?u=politica',
    date: '12 OCT 2024'
  },
  {
    id: 5,
    title: 'Nuevas Tendencias Artísticas en Buenos Aires',
    excerpt:
      'Un recorrido por las galerías y espacios culturales que están marcando la pauta en la capital argentina.',
    imageUrl: 'https://placehold.co/600x400/948979/DFD0B8?text=Cultura',
    link: '#',
    category: 'Cultura',
    author: 'Cultura BA',
    authorAvatarUrl: 'https://i.pravatar.cc/150?u=cultura',
    date: '11 OCT 2024'
  },
  {
    id: 6,
    title: 'Innovaciones en Medicina Preventiva',
    excerpt:
      'Descubre las últimas tendencias y avances en el cuidado de la salud para una vida más plena y saludable.',
    imageUrl: 'https://placehold.co/600x400/222831/DFD0B8?text=Salud',
    link: '#',
    category: 'Salud',
    author: 'Salud y Bienestar',
    authorAvatarUrl: 'https://i.pravatar.cc/150?u=salud',
    date: '10 OCT 2024'
  },
])

const events = ref([
  {
    id: 1,
    title: 'Conferencia de Periodismo Digital',
    date: '15 de Agosto, 2025',
    location: 'Centro Cultural Kirchner, CABA',
    description:
      'Explorando las nuevas fronteras del periodismo en la era digital, con panelistas internacionales y talleres prácticos.',
    link: '#',
    imageUrl: 'https://placehold.co/300x200/393E46/DFD0B8?text=Conferencia',
  },
  {
    id: 2,
    title: 'Taller de Investigación para Periodistas',
    date: '22 de Septiembre, 2025',
    location: 'Universidad de Palermo, CABA',
    description:
      'Un taller intensivo sobre técnicas y herramientas para la investigación periodística de alto impacto.',
    link: '#',
    imageUrl: 'https://placehold.co/300x200/222831/DFD0B8?text=Taller',
  },
])

// Propiedad computada para filtrar las noticias dinámicamente
const filteredNews = computed(() => {
  if (selectedCategory.value === 'Todas') {
    return news.value
  }
  return news.value.filter((item) => item.category === selectedCategory.value)
})
</script>

<template>
  <div class="container mx-auto p-8 flex flex-col gap-24">
    <HeroSection />

    <section class="grid grid-cols-1 lg:grid-cols-4 gap-12">
      <div class="lg:col-span-3">
        <h2 class="text-4xl font-bold mb-8 text-accent-brown border-b border-medium-charcoal/50 pb-4">Últimas Noticias
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <NewsCard v-for="item in filteredNews" :key="item.id" :news-item="item" />
        </div>
      </div>

      <div class="lg:col-span-1">
        <CategoriesSidebar :categories="categories" v-model="selectedCategory" class="sticky top-24" />
      </div>
    </section>

    <section>
      <h2 class="text-4xl font-bold mb-8 text-accent-brown border-b border-medium-charcoal/50 pb-4">Eventos Próximos
      </h2>
      <div class="flex flex-col space-y-8">
        <EventCard v-for="item in events" :key="item.id" :event="item" />
      </div>
    </section>

    <GrowthSection />
  </div>
</template>
