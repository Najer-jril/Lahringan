<template>
  <div
    class="bg-june rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
  >
    <h3 class="text-xl font-semibold font-neuepower text-center text-vamp mb-3">
      {{ service.title }}
    </h3>

    <p class="text-vamp font-emone text-center text-sm mb-4 leading-relaxed">
      {{ service.description }}
    </p>

    <ul v-if="service.features && service.features.length" class="space-y-2 mb-6">
      <li
        v-for="(feature, index) in service.features"
        :key="index"
        class="flex items-start text-sm text-vamp font-emone font-extralight"
      >
        <span> * {{ feature }}</span>
      </li>
    </ul>

    <button
      @click="learnMore"
      class="w-full py-2 px-4 rounded-md font-medium transition-colors"
      :class="buttonClass"
    >
      Learn More
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  service: {
    type: Object,
    default: () => ({
      title: 'Service Title',
      description:
        'This is a detailed description of the service we provide. It explains the value and benefits.',
      icon: 'default',
      color: 'blue',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
    }),
  },
})

const emit = defineEmits(['learn-more'])

const buttonClass = computed(() => {
  const colors = {
    choco: 'bg-vamp hover:bg-choco text-white',
  }
  return colors[props.service.color] || colors.choco
})

const learnMore = () => {
  emit('learn-more', props.service)
}
</script>
