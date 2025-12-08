<!-- src/components/TestimonialCard.vue -->
<template>
  <div
    class="bg-flash rounded-2xl p-6 shadow-md border-b-4 border-gray-200 hover:border-funky transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
  >
    <div class="flex items-center mb-4">
      <div class="shrink-0 relative">
        <div class="w-14 h-14 rounded-full overflow-hidden border-2 border-funky p-0.5">
          <img
            :src="
              testimonial.avatar ||
              `https://ui-avatars.com/api/?name=${testimonial.name}&background=random`
            "
            :alt="testimonial.name"
            class="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      <div class="ml-4">
        <h4 class="text-lg font-basement font-bold text-vamp leading-none mb-1">
          {{ testimonial.name }}
        </h4>
        <p class="text-xs font-emone text-grayind uppercase tracking-wide mb-1">
          {{ testimonial.position }}
        </p>
        <div class="flex items-center gap-0.5">
          <Star
            v-for="star in 5"
            :key="star"
            class="w-3.5 h-3.5"
            :class="star <= testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-grayind'"
          />
        </div>
      </div>
    </div>

    <div class="grow">
      <p class="text-grayind font-garet text-sm leading-relaxed italic relative z-10">
        <span class="text-4xl text-funky absolute -top-4 -left-2 opacity-30 font-serif">"</span>
        {{ testimonial.text }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { Star } from 'lucide-vue-next'

defineProps({
  testimonial: {
    type: Object,
    required: true,
  },
})
</script>
