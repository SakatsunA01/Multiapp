import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsView from '../views/NewsView.vue'
import EventsView from '../views/EventsView.vue'
import ContactView from '../views/ContactView.vue'
import NewsDetailView from '../views/NewsDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/noticias',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/eventos',
      name: 'events',
      component: EventsView,
    },
    {
      path: '/contacto',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/noticia/:id',
      name: 'news-detail',
      component: NewsDetailView,
    },
  ],
})

export default router
