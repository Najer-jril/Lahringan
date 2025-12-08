<!-- components/LocationCard.vue -->
<template>
  <div
    class="group bg-flash rounded-xl shadow-md overflow-hidden hover:shadow-funky/50 transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex"
    :class="[viewMode === 'list' ? 'flex-col md:flex-row h-auto' : 'flex-col h-full']"
  >
    <div
      class="relative overflow-hidden shrink-0"
      :class="[viewMode === 'list' ? 'w-full md:w-1/3 h-64 md:h-auto' : 'w-full h-56']"
    >
      <img
        v-if="location.image"
        :src="location.image"
        :alt="location.name"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      <div
        class="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300"
      ></div>
    </div>

    <div class="p-6 flex flex-col grow relative bg-flash z-20">
      <div class="grow">
        <div class="flex justify-between items-start">
          <h3
            class="text-xl font-bold text-vamp mb-2 font-basement tracking-wide group-hover:text-funky transition-colors"
          >
            {{ location.name }}
          </h3>
          <div class="flex text-yellow-500 text-md gap-1">
            <span>★</span><span>{{ location.rating }}</span>
          </div>
        </div>

        <p class="text-gray-700 font-medium text-sm mb-2 leading-relaxed flex items-start gap-2">
          <MapPin class="w-4 h-4 text-funky shrink-0 mt-0.5" />
          {{ location.address }}
        </p>

        <div class="space-y-3 mb-6 border-t border-gray-100">
          <div class="flex items-center text-gray-700 text-sm">
            <Clock class="w-4 h-4 mr-3 text-funky" />
            <span class="font-mono">{{ location.hours }}</span>
          </div>

          <div v-if="location.phone" class="flex items-center text-gray-700 text-sm group-phone">
            <Phone class="w-4 h-4 mr-3 text-funky" />
            <a
              :href="`tel:${location.phone}`"
              class="hover:text-funky hover:underline decoration-funky transition-colors"
            >
              {{ location.phone }}
            </a>
          </div>
        </div>
      </div>

      <div class="pt-2 mt-auto flex gap-3 flex-wrap">
        <RouterLink
          :to="`/location/${location.id}`"
          class="flex-1 bg-vamp text-flash text-sm font-bold py-2.5 px-4 rounded-lg hover:bg-vamp transition-colors duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm"
        >
          Lihat Detail
        </RouterLink>

        <a
          :href="`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.name + ' ' + location.address)}`"
          target="_blank"
          class="bg-vamp text-funky p-2.5 rounded-lg hover:bg-funky hover:text-flash transition-colors duration-200 flex items-center justify-center tooltip"
          title="Buka di Google Maps"
        >
          <Navigation class="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Phone, MapPin, Clock, Navigation } from 'lucide-vue-next'

defineProps({
  location: {
    type: Object,
    required: true,
  },
  viewMode: {
    type: String,
    default: 'grid',
  },
})
</script>
