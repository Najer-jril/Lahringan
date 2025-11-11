<template>
  <div class="bg-whi rounded-xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
    <div>
      <div class="flex items-center">
        <div class="shrink-0">
          <div v-if="testimonial.avatar" class="w-12 h-12 rounded-full overflow-hidden">
            <img
              :src="testimonial.avatar"
              :alt="testimonial.name"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="mb-4">
            <User class="w-8 h-8 text-vamp opacity-60" />
          </div>
        </div>

        <div class="ml-4">
          <h4 class="text-base font-basement font-semibold text-choco">{{ testimonial.name }}</h4>
          <p class="text-sm font-emone text-gray-600">{{ testimonial.position }}</p>
          <div class="flex items-center mb-2 mt-2">
            <div class="flex">
              <Star
                v-for="star in 5"
                :key="star"
                class="w-5 h-5"
                :class="star <= testimonial.rating ? 'text-yellow-400' : 'text-gray-300'"
                fill="currentColor"
              />
            </div>
            <span class="ml-2 text-sm text-gray-600">{{ testimonial.rating }}/5</span>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-gray-200 my-4 pt-4">
      <p class="text-choco text-base mb-6 leading-relaxed italic font-emone">
        "{{ testimonial.text }}"
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Star, User } from 'lucide-vue-next'

const props = defineProps({
  testimonial: {
    type: Object,
    required: true,
  },
})

</script>
