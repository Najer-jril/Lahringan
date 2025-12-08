<!-- components/LocationDetailCard.vue -->
<template>
  <div class="bg-flash rounded-2xl shadow-xl overflow-hidden border border-gray-100">
    <div class="w-full h-64 md:h-72 relative bg-gray-200">
      <iframe
        :src="location.mapUrl"
        width="100%"
        height="100%"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    <div class="p-6 md:p-8">
      <div class="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <h2 class="text-2xl font-bold text-vamp mb-1">Informasi Lokasi</h2>
          <p class="text-grayind text-sm">Info aja, kalian harus mampir kesini</p>
        </div>
        <div class="flex items-center bg-yellow-50 px-3 py-1.5 rounded-lg border border-yellow-100">
          <Star class="w-5 h-5 text-yellow-500 fill-yellow-500 mr-1" />
          <span class="font-bold text-lg text-gray-800">{{ location.rating }}</span>
          <span class="text-xs text-gray-400 ml-1">/ 5.0</span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div class="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
          <div class="bg-flash p-2 rounded-full shadow-sm mr-4">
            <Clock class="w-6 h-6 text-funky" />
          </div>
          <div>
            <p class="text-xs text-grayind uppercase font-bold tracking-wider">Jam Operasional</p>
            <p class="text-vamp font-bold">{{ location.hour }}</p>
          </div>
        </div>
        <div class="flex items-center p-4 bg-gray-50 rounded-xl border border-gray-100">
          <div class="bg-flash p-2 rounded-full shadow-sm mr-4">
            <Phone class="w-6 h-6 text-funky" />
          </div>
          <div>
            <p class="text-xs text-grayind uppercase font-bold tracking-wider">Kontak</p>
            <p class="text-vamp font-bold">{{ location.phone }}</p>
          </div>
        </div>
      </div>

      <div>
        <h4 class="font-bold text-vamp mb-4">Fasilitas yang ada:</h4>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div
            v-for="(facility, idx) in location.facilities"
            :key="idx"
            class="flex flex-col items-center justify-center p-3 rounded-xl border border-dashed border-gray-300 text-center hover:border-funky hover:bg-funky/5 transition-all"
          >
            <CheckCircle2 class="w-5 h-5 text-green-500 mb-2" />
            <span class="text-xs font-semibold text-gray-600">{{ facility }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Clock, Phone, Star, CheckCircle2 } from 'lucide-vue-next'

defineProps({
  location: {
    type: Object,
    required: true,
  },
})
</script>
