<template>
  <article
    class="bg-flash rounded-2xl shadow-lg overflow-hidden hover:shadow-funky/50 transition-all duration-300 hover:-translate-y-2 group border border-gray-100 w-full max-w-sm flex flex-col"
  >
    <div class="h-64 bg-gray-200 relative overflow-hidden shrink-0">
      <img
        v-if="team.image"
        :src="team.image"
        :alt="team.name"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div
        v-else
        class="w-full h-full flex items-center justify-center bg-linear-to-br from-funky to-vamp"
      >
        <User class="w-16 h-16 text-flash/50" />
      </div>

      <div class="absolute bottom-0 p-4">
        <h3 class="text-2xl font-basement text-flash mb-0.5 text-shadow-md"
            style="text-shadow: 2px 2px 0 #1f1f1f">{{ team.name }}</h3>
        <span class="text-funky font-bold text-sm uppercase tracking-widest"
        style="text-shadow: 2px 2px 0 #1f1f1f">{{ team.role }}</span>
      </div>
    </div>

    <div class="p-5 bg-flash grow flex flex-col justify-end">
      <div class="grid grid-cols-2 gap-3 mb-4">
        <div class="bg-gray-50 p-2 rounded-lg border border-gray-100 text-center">
            <p class="text-[10px] text-grayind uppercase font-bold">Pace</p>
            <p class="text-vamp font-extralight font-basement">{{ team.pace || '6:30' }} <span class="text-xs font-normal">/km</span></p>
        </div>
        <div class="bg-gray-50 p-2 rounded-lg border border-gray-100 text-center">
            <p class="text-[10px] text-grayind uppercase font-bold">Longest</p>
            <p class="text-vamp font-extralight font-basement">{{ team.distance || 'belum pernah lari' }}</p>
        </div>
      </div>

      <div class="text-center text-md text-grayind font-bold border-t border-grayind pt-3">
         <span class="mr-2">{{ team.shoe || 'Nyeker' }}</span>
      </div>
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
