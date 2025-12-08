<template>
  <div
    class="bg-flash rounded-2xl overflow-hidden shadow-md hover:shadow-funky/50 transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col h-full relative group"
  >
    <div
      v-if="service.isPopular"
      class="absolute top-0 right-0 bg-funky text-vamp text-xs font-bold px-4 py-2 rounded-bl-xl z-20 shadow-sm uppercase tracking-wider"
    >
      Paling Sering Dibook
    </div>

    <div class="h-48 relative overflow-hidden shrink-0">
      <div
        class="absolute inset-0 bg-gray-900/10 group-hover:bg-transparent transition-colors z-10"
      ></div>
      <img
        :src="service.img"
        :alt="service.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>

    <div class="p-6 flex flex-col grow">
      <div class="mb-4 border-b border-gray-100 pb-4">
        <h3 class="text-xl font-basement font-bold text-vamp mb-2 leading-tight">
          {{ service.title }}
        </h3>
        <p class="text-grayind font-garet text-sm leading-relaxed line-clamp-2">
          {{ service.description }}
        </p>
      </div>

      <div class="mb-6">
        <p class="text-xs text-grayind font-bold uppercase tracking-widest mb-1">Mulai Dari</p>
        <div class="flex items-baseline">
          <span class="text-sm font-bold text-grayind mr-1">Rp</span>
          <span
            class="text-3xl font-basement text-funky font-bold text-shadow-sm"
            style="text-shadow: 1px 1px 0 #1c1c1c"
            >{{ service.price }}</span
          >
          <span class="text-grayind text-xs ml-1">/ visit</span>
        </div>
      </div>

      <ul class="space-y-3 mb-8 grow">
        <li
          v-for="(feature, index) in service.features"
          :key="index"
          class="flex items-start text-sm text-gray-700 font-garet"
        >
          <CheckCircle2 class="w-4 h-4 text-funky mr-2 shrink-0 mt-0.5" />
          <span class="leading-tight">{{ feature }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { CheckCircle2 } from 'lucide-vue-next'

defineProps({
  service: {
    type: Object,
    required: true,
  },
})
</script>
