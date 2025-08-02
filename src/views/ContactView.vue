<script setup>
import { ref } from 'vue'
import SocialLinks from '@/components/SocialLinks.vue'

// Estado del formulario
const formData = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
})

const isSubmitting = ref(false)
const isSubmitted = ref(false)

// Función para enviar formulario
const handleSubmit = async () => {
    isSubmitting.value = true

    // Simular envío
    await new Promise(resolve => setTimeout(resolve, 2000))

    isSubmitting.value = false
    isSubmitted.value = true

    // Resetear formulario
    formData.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
    }

    // Resetear mensaje después de 5 segundos
    setTimeout(() => {
        isSubmitted.value = false
    }, 5000)
}

// Información de contacto
const contactInfo = [
    {
        icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
        title: 'Email',
        value: 'info@multipress.com',
        link: 'mailto:info@multipress.com'
    },
    {
        icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
        title: 'Teléfono',
        value: '+1 (555) 123-4567',
        link: 'tel:+15551234567'
    },
    {
        icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
        title: 'Dirección',
        value: '123 Calle Principal, Ciudad, País',
        link: 'https://maps.google.com'
    }
]

// Horarios de atención
const businessHours = [
    { day: 'Lunes - Viernes', hours: '9:00 AM - 6:00 PM' },
    { day: 'Sábado', hours: '10:00 AM - 4:00 PM' },
    { day: 'Domingo', hours: 'Cerrado' }
]
</script>

<template>
    <div class="container mx-auto p-4 sm:p-8">
        <!-- Header de la página -->
        <div class="mb-8 text-center">
            <h1 class="text-4xl font-bold text-md-on-background mb-4">Contáctanos</h1>
            <p class="text-lg text-md-on-background">Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos
                pronto.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <!-- Información de contacto -->
            <div class="space-y-6">
                <!-- Información de contacto -->
                <div class="md-card p-8">
                    <h3 class="text-2xl font-bold text-md-on-background mb-6">Información de Contacto</h3>
                    <div class="space-y-4">
                        <div v-for="info in contactInfo" :key="info.title" class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-md-primary-variant/20 rounded-md-sm flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-md-primary" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        :d="info.icon" />
                                </svg>
                            </div>
                            <div>
                                <h4 class="font-semibold text-md-on-background">{{ info.title }}</h4>
                                <a :href="info.link"
                                    class="text-md-primary hover:text-md-primary-variant transition-colors">
                                    {{ info.value }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Horarios de atención -->
                <div class="md-card p-8">
                    <h3 class="text-2xl font-bold text-md-on-background mb-6">Horarios de Atención</h3>
                    <div class="space-y-3">
                        <div v-for="schedule in businessHours" :key="schedule.day"
                            class="flex justify-between items-center py-2 border-b border-md-background last:border-b-0">
                            <span class="text-md-on-background">{{ schedule.day }}</span>
                            <span class="text-md-primary font-medium">{{ schedule.hours }}</span>
                        </div>
                    </div>
                </div>

                <!-- Redes sociales -->
                <div class="md-card p-8">
                    <h3 class="text-2xl font-bold text-md-on-background mb-6">Síguenos</h3>
                    <SocialLinks />
                </div>
            </div>

            <!-- Formulario de contacto -->
            <div class="md-card p-8">
                <h3 class="text-2xl font-bold text-md-on-background mb-6">Envíanos un Mensaje</h3>

                <!-- Mensaje de éxito -->
                <div v-if="isSubmitted"
                    class="mb-6 bg-md-secondary-variant/20 border border-md-secondary-variant/30 text-md-secondary px-4 py-3 rounded-md-sm">
                    <div class="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>¡Mensaje enviado exitosamente! Te responderemos pronto.</span>
                    </div>
                </div>

                <form @submit.prevent="handleSubmit" class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label for="name" class="block text-sm font-medium text-md-on-background mb-2">Nombre completo</label>
                            <input v-model="formData.name" type="text" id="name" required
                                class="md-input w-full" placeholder="Tu nombre completo">
                        </div>
                        <div>
                            <label for="email" class="block text-sm font-medium text-md-on-background mb-2">Email</label>
                            <input v-model="formData.email" type="email" id="email" required
                                class="md-input w-full" placeholder="tu@email.com">
                        </div>
                    </div>

                    <div>
                        <label for="subject" class="block text-sm font-medium text-md-on-background mb-2">Asunto</label>
                        <input v-model="formData.subject" type="text" id="subject" required
                            class="md-input w-full" placeholder="¿En qué podemos ayudarte?">
                    </div>

                    <div>
                        <label for="message" class="block text-sm font-medium text-md-on-background mb-2">Mensaje</label>
                        <textarea v-model="formData.message" id="message" rows="6" required
                            class="md-input w-full resize-none" placeholder="Cuéntanos más sobre tu consulta..."></textarea>
                    </div>

                    <button type="submit" :disabled="isSubmitting"
                        class="md-button w-full px-6 py-3 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                        <svg v-if="isSubmitting" class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg"
                            fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
                    </button>
                </form>
            </div>
        </div>

        <!-- Mapa (placeholder) -->
        <div class="mt-12">
            <div class="md-card p-8">
                <h3 class="text-2xl font-bold text-md-on-background mb-6">Nuestra Ubicación</h3>
                <div class="aspect-video bg-md-background rounded-md-sm flex items-center justify-center">
                    <div class="text-center">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-md-primary/60 mb-4"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p class="text-md-on-background">Mapa interactivo aquí</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

