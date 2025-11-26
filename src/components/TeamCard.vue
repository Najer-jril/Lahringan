<template>
  <article
    class="bg-flash rounded-xl shadow-md overflow-hidden hover:shadow-lg w-56 max-w-sm hover:scale-105 transition-transform duration-300"
  >
    <!-- gambar -->
    <div class="h-56 bg-gray-200 relative overflow-hidden">
      <img
        v-if="team.image"
        :src="team.image"
        :alt="team.name"
        class="w-full h-full object-cover"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center bg-linear-to-br from-funky to-vamp"
      >
        <User class="w-10 h-10 text-white/80" />
      </div>
    </div>

    <!-- desk -->
    <div class="p-4 text-center font-neuepower border-t-3 border-vamp">
      <!-- nama -->
      <h3 class="text-xl text-center text-vamp mb-2 line-clamp-1">
        {{ team.name }}
      </h3>

      <!-- role -->
      <span class="bg-funky/50 inline-flex items-center bg-brand-softer border border-brand-subtle text-fg-brand-strong text-sm px-1.5 py-0.5 rounded-sm">
        {{ team.role }}
      </span>
    </div>
  </article>
</template>

<script setup>
import { User } from 'lucide-vue-next'

defineProps({
  team: {
    type: Object,
    required: true,
  },
})
</script>
