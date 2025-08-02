<script setup>
defineProps({
  categories: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update:modelValue'])

const handleCategoryClick = (category) => {
  // Si la categoría ya está seleccionada, la deseleccionamos
  if (modelValue === category) {
    emit('update:modelValue', 'Todas')
  } else {
    emit('update:modelValue', category)
  }
}
</script>

<template>
  <aside
    class="bg-gradient-to-br from-glass-dark/60 via-glass-medium/40 to-glass-dark/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl ring-1 ring-accent-purple/20 border border-accent-purple/10 min-h-[70vh] flex flex-col">
    <h3
      class="text-2xl font-bold text-transparent bg-gradient-to-r from-accent-purple to-accent-blue bg-clip-text mb-8 border-b border-accent-purple/30 pb-4 text-glow">
      Categorías</h3>

    <!-- Botón de "Todas" con animación especial -->
    <div class="mb-4">
      <button @click="emit('update:modelValue', 'Todas')"
        class="w-full text-left p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] group animate-fade-in"
        :class="modelValue === 'Todas'
          ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg shadow-glow-purple font-semibold ring-1 ring-accent-purple/50 animate-glow-pulse'
          : 'text-white/80 hover:bg-gradient-to-r hover:from-accent-purple/20 hover:to-accent-blue/20 hover:text-white font-medium hover:ring-1 hover:ring-accent-purple/30'
          ">
        <span class="flex items-center">
          <span class="mr-3 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
          Todas las categorías
        </span>
      </button>
    </div>

    <ul class="flex-grow flex flex-col space-y-3">
      <li v-for="(category, index) in categories" :key="category" :style="{ animationDelay: `${index * 100}ms` }"
        class="animate-slide-up">
        <button @click="handleCategoryClick(category)"
          class="w-full text-left p-4 rounded-xl transition-all duration-300 hover:scale-[1.02] group relative overflow-hidden"
          :class="modelValue === category
            ? 'bg-gradient-to-r from-accent-purple to-accent-blue text-white shadow-lg shadow-glow-purple font-semibold ring-1 ring-accent-purple/50 animate-glow-pulse'
            : 'text-white/80 hover:bg-gradient-to-r hover:from-accent-purple/20 hover:to-accent-blue/20 hover:text-white font-medium hover:ring-1 hover:ring-accent-purple/30'
            ">
          <!-- Efecto de brillo al hacer hover -->
          <div
            class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700">
          </div>

          <span class="flex items-center relative z-10">
            <span class="mr-3 text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
            {{ category }}
            <!-- Indicador de selección -->
            <span v-if="modelValue === category" class="ml-auto text-sm animate-pulse">✓</span>
          </span>
        </button>
      </li>
    </ul>

    <!-- Contador de categorías seleccionadas -->
    <div class="mt-6 pt-4 border-t border-accent-purple/20">
      <div class="text-center">
        <span class="text-xs text-accent-purple/60">
          {{ modelValue === 'Todas' ? 'Mostrando todas las categorías' : `Categoría: ${modelValue}` }}
        </span>
      </div>
    </div>
  </aside>
</template>

<style scoped>
/* Animaciones personalizadas para las categorías */
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideUp 0.5s ease-out forwards;
  opacity: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}
</style>
