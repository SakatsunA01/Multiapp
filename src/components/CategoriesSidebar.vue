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
</script>

<template>
  <aside class="bg-medium-charcoal p-6 rounded-lg shadow-xl min-h-[70vh] flex flex-col">
    <h3 class="text-2xl font-bold text-accent-brown mb-6 border-b border-dark-charcoal/50 pb-4">Categorías</h3>
    <ul class="flex-grow flex flex-col space-y-2">
      <li v-for="category in categories" :key="category">
        <button @click="emit('update:modelValue', category)"
          class="w-full text-left p-3 rounded-md transition duration-300" :class="modelValue === category
            ? 'bg-accent-brown text-dark-charcoal shadow-md font-bold'
            : 'text-light-beige/80 hover:bg-dark-charcoal/50 hover:text-light-beige'
            ">{{ category }}</button>
      </li>
    </ul>
  </aside>
</template>
