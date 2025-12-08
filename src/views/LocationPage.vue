<!-- views/LocationPage.vue -->
<template>
  <div class="location-page bg-flash-50">
    <section
      class="relative h-[500px] bg-cover bg-center bg-fixed group"
      :style="{ backgroundImage: `url(${heroImage})` }"
    >
      <div class="absolute inset-0 bg-gray-900/60"></div>

      <div
        class="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center"
      >
        <h1
          class="text-4xl md:text-6xl font-saotorpes text-funky mb-4 drop-shadow-lg animate-fade-in-up"
        >
          Temukan Kami di Sisi Bumi Ini
        </h1>

        <div class="absolute -bottom-10 left-0 right-0 px-4">
          <div
            class="max-w-4xl mx-auto bg-flash rounded-2xl shadow-xl border-b-4 border-funky p-6 grid grid-cols-1 md:grid-cols-2 gap-6 transform hover:-translate-y-1 transition-transform duration-300"
          >
            <div
              class="text-center border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0"
            >
              <p class="text-3xl font-bold text-vamp font-basement">{{ locations.length }}</p>
              <p class="text-sm text-grayind font-semibold uppercase tracking-wider">
                Lokasi Sudah Ready
              </p>
            </div>
            <div
              class="text-center border-b md:border-b-0 md:border-r border-gray-100 pb-4 md:pb-0"
            >
              <p class="text-3xl font-bold text-vamp font-basement">19 Juta</p>
              <p class="text-sm text-grayind font-semibold uppercase tracking-wider">
                Lokasi Akan Dibangun
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="pt-24 pb-12 bg-flash-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-flash p-2 rounded-2xl shadow-lg border border-gray-100">
          <Transition name="fade" mode="out-in">
            <MapSection
              :key="selectedLocation.name"
              :title="selectedLocation.name"
              :address="selectedLocation.fullAddress"
              height="500px"
              class="rounded-xl overflow-hidden"
            />
          </Transition>
        </div>
      </div>
    </section>

    <section class="py-16 bg-flash relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          class="flex flex-col md:flex-row justify-between sm:items-start md:items-center mb-10 gap-4"
        >
          <div>
            <h2 class="text-3xl md:text-4xl font-basement font-semibold text-vamp mb-2">
              Lokasi Kami
            </h2>
            <h4 class="text-funky text-lg font-bold font-emone">Sokin ke Cabang Terdekat</h4>
          </div>

          <div class="hidden md:flex bg-gray-100 p-1 rounded-lg gap-1">
            <button
              @click="viewMode = 'grid'"
              :class="[
                'p-2 rounded-md transition-all',
                viewMode === 'grid'
                  ? 'bg-choco shadow text-funky'
                  : 'text-grayind hover:text-funky',
              ]"
            >
              <LayoutGrid class="w-5 h-5" />
            </button>
            <button
              @click="viewMode = 'list'"
              :class="[
                'p-2 rounded-md transition-all',
                viewMode === 'list'
                  ? 'bg-choco shadow text-funky'
                  : 'text-grayind hover:text-funky',
              ]"
            >
              <List class="w-5 h-5" />
            </button>
          </div>
        </div>

        <div
          :class="[
            'grid gap-8 transition-all duration-500',
            viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2' : 'grid-cols-1',
          ]"
        >
          <LocationCard
            v-for="location in locations"
            :key="location.name"
            :location="location"
            :viewMode="viewMode"
            @view="handleViewLocation"
          />
        </div>
      </div>
    </section>

    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { LayoutGrid, List } from 'lucide-vue-next'
import heroImage from '@/assets/hero/loc.jpg'
import ScrollToTop from '../components/ScrollToTop.vue'
import MapSection from '@/components/MapSection.vue'
import LocationCard from '@/components/LocationCard.vue'
import lokbp from '@/assets/loc/bp.png'
import lokgc from '@/assets/loc/gc.jpeg'
import loklapmer from '@/assets/loc/lapmer.jpeg'
import lokt3g from '@/assets/loc/taman3g.jpg'

const viewMode = ref('grid')

const locations = ref([
  {
    id: 'grand-city',
    name: 'Grand City',
    address: 'Jl. Grand City Balikpapan, Batu Ampar, Kec. Balikpapan Utara.',
    fullAddress:
      'Jl. Grand City Balikpapan, Batu Ampar, Kec. Balikpapan Utara, Kota Balikpapan, Kalimantan Timur 76114',
    phone: '+62 21 1234 5678',
    hours: '24 Jam Boss',
    image: lokgc,
    rating: 4.9,
  },
  {
    id: 'lapangan-merdeka',
    name: 'Lapangan Merdeka',
    address: 'Jl. Jenderal Sudirman, Prapatan, Kec. Balikpapan Kota.',
    fullAddress: 'Jl. Jenderal Sudirman, Prapatan, Kec. Balikpapan Kota, Kota Balikpapan',
    phone: '+62 31 9876 5432',
    hours: '06:00 - 20:00',
    image: loklapmer,
    rating: 4.7,
  },
  {
    id: 'nasgor-bp',
    name: 'Nasgor BP',
    address: 'Damai, Kecamatan Balikpapan Selatan, Kota Balikpapan.',
    fullAddress: 'Damai, Kecamatan Balikpapan Selatan, Kota Balikpapan, Kalimantan Timur 76114',
    phone: '+62 22 5555 6666',
    hours: '07:00 - 23:00',
    image: lokbp,
    rating: 4.6,
  },
  {
    id: 'taman-3-generasi',
    name: 'Taman 3 Generasi',
    address: 'Jl. Pangreh Praja I No.43, Sepinggan, Balikpapan Selatan.',
    fullAddress:
      'Jl. Pangreh Praja I No.43, Sepinggan, Kecamatan Balikpapan Selatan, Kota Balikpapan, Kalimantan Timur 76115',
    phone: '+62 61 7777 8888',
    hours: '07:00 - 18:00',
    image: lokt3g,
    rating: 4.8,
  },
])

const selectedLocation = ref(locations.value[0])

const handleViewLocation = (location) => {
  window.scrollTo({ top: 400, behavior: 'smooth' })

  setTimeout(() => {
    selectedLocation.value = location
  }, 300)
}
</script>
