<!-- views/LocationDetailPage.vue -->
<template>
  <div class="location-detail-page bg-flash-50 relative pb-24">
    <section
      class="relative h-80 lg:h-96 bg-cover bg-center"
      :style="{ backgroundImage: `url(${currentLocation.image})` }"
    >
      <div class="absolute inset-0 bg-gray-900/60"></div>
      <div
        class="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-8"
      >
        <h1 class="text-3xl md:text-5xl font-neuepower text-funky drop-shadow-lg mb-2">
          {{ currentLocation.name }}
        </h1>
        <p class="text-flash/90 font-garet text-sm md:text-base max-w-2xl">
          {{ currentLocation.address }}
        </p>
      </div>
    </section>

    <section class="py-8 bg-flash-50 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav
          class="flex items-center text-sm font-medium text-grayind mb-8 overflow-x-auto flashspace-nowrap"
        >
          <RouterLink to="/" class="hover:text-funky transition-colors">Beranda</RouterLink>
          <ChevronRight class="w-4 h-4 mx-2" />
          <RouterLink to="/location" class="hover:text-funky transition-colors">Lokasi</RouterLink>
          <ChevronRight class="w-4 h-4 mx-2" />
          <span class="text-vamp font-bold truncate">{{ currentLocation.name }}</span>
        </nav>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div class="lg:col-span-2 space-y-8">
            <LocationDetailCard :location="currentLocation" />

            <div>
              <h3
                class="text-2xl font-basement font-bold text-vamp mb-6 border-l-4 border-funky pl-4"
              >
                Layanan dari kita kita
              </h3>
              <div class="space-y-4">
                <div
                  v-for="(service, index) in availableServices"
                  :key="index"
                  class="bg-flash p-4 rounded-xl border border-gray-100 flex gap-4 items-start shadow-sm hover:shadow-md transition-shadow"
                >
                  <div class="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100">
                    <img :src="service.img" class="w-full h-full object-cover" />
                  </div>
                  <div class="grow">
                    <div class="flex justify-between items-start">
                      <h4 class="font-bold text-vamp">{{ service.title }}</h4>
                      <span
                        class="text-xs font-bold px-2 py-1 rounded-full"
                        :class="
                          service.isAvailable
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                        "
                      >
                        {{ service.isAvailable ? 'Rendy Bossq' : 'Dibaikin' }}
                      </span>
                    </div>
                    <p class="text-sm text-grayind mt-1 line-clamp-3">{{ service.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="lg:col-span-1">
            <div class="sticky top-24">
              <h3 class="text-lg font-bold text-vamp mb-4 flex items-center">
                <Map class="w-4 h-4 mr-2" /> Cabang Lainnya
              </h3>

              <div class="flex flex-col gap-4">
                <RouterLink
                  v-for="loc in otherLocations"
                  :key="loc.id"
                  :to="`/location/${loc.id}`"
                  class="bg-flash p-3 rounded-lg border border-gray-200 hover:border-funky group transition-all w-full"
                >
                  <div class="flex gap-3 items-center">
                    <img :src="loc.image" class="w-16 h-16 rounded-md object-cover" />
                    <div>
                      <p
                        class="font-bold text-md text-vamp group-hover:text-funky transition-colors"
                      >
                        {{ loc.name }}
                      </p>
                      <p class="text-sm text-grayind">{{ loc.address }}</p>
                    </div>
                  </div>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { ChevronRight, Map } from 'lucide-vue-next'
import LocationDetailCard from '@/components/LocationDetailCard.vue'
import lokgc from '@/assets/loc/gc.jpeg'
import loklapmer from '@/assets/loc/lapmer.jpeg'
import lokbp from '@/assets/loc/bp.png'
import lokt3g from '@/assets/loc/taman3g.jpg'
import paket1img from '@/assets/service/paket1.jpeg'
import paket2img from '@/assets/service/paket2.jpeg'
import rentalimg from '@/assets/service/rental.jpeg'
import paketkomimg from '@/assets/service/paketkom.jpeg'

const route = useRoute()

const allLocations = [
  {
    id: 'grand-city',
    name: 'Grand City',
    address: 'Jl. Grand City Balikpapan, Batu Ampar, Kec. Balikpapan Utara, Kota Balikpapan',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.9395991629035!2d116.87175894310015!3d-1.2232455323623566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df147f0d03ca65f%3A0x7d1bf5e19cad93a1!2sCooler%20City%20Balik%20Papan!5e1!3m2!1sid!2sid!4v1764775622051!5m2!1sid!2sid',
    hour: '24 Jam Boss',
    phone: '+62 896 1234 5678',
    rating: '4.8',
    image: lokgc,
    facilities: [
      'AC Area',
      'Free WiFi',
      'Toilet',
      'Locker Digital',
      '24 Hour',
      'Parkir Motor',
      'Shower',
      'Mushola',
    ],
  },
  {
    id: 'lapangan-merdeka',
    name: 'Lapangan Merdeka',
    address: 'Jl. Jenderal Sudirman, Prapatan, Balikpapan Kota',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.854752174147!2d116.81224771049507!3d-1.2794058356131472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df1474f5fd28e5f%3A0xc3c027f4c4abaaea!2sLapangan%20Merdeka%20Balikpapan!5e1!3m2!1sid!2sid!4v1764775661172!5m2!1sid!2sid',
    hour: '06:00 - 20:00',
    phone: '+62 812 9999 8888',
    rating: '4.9',
    image: loklapmer,
    facilities: ['Shower', 'Mushola', 'Parkir Luas'],
  },
  {
    id: 'nasgor-bp',
    name: 'Nasgor BP',
    address: 'Damai, Kecamatan Balikpapan Selatan, Kota Balikpapan',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.868640225034!2d116.8539373104951!3d-1.2703832356034914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14756b825f45d%3A0x57a510fc99ecb522!2sNasi%20goreng%20BP!5e1!3m2!1sid!2sid!4v1764775423916!5m2!1sid!2sid',
    hour: '07:00 - 23:00',
    phone: '+62 822 5555 6666',
    rating: '4.7',
    image: lokbp,
    facilities: ['Free WiFi', 'Security', 'CCTV'],
  },
  {
    id: 'taman-3-generasi',
    name: 'Taman 3 Generasi',
    address: 'Jl. Pangreh Praja I No.43, Sepinggan, Balikpapan Selatan',
    mapUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.911397055636!2d116.89289371049492!3d-1.2421942355741882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df145da29ef9a39%3A0xd6c1c9b54042c244!2sTaman%203%20Generasi%20Balikpapan!5e1!3m2!1sid!2sid!4v1764775519894!5m2!1sid!2sid',
    hour: '07:00 - 18:00',
    phone: '+62 811 7777 8888',
    rating: '4.6',
    image: lokt3g,
    facilities: ['Free WiFi', 'Security', 'CCTV'],
  },
]

const services = [
  {
    img: paket1img,
    title: 'Paket Lari Ringan',
    description: 'Locker kecil (maks. 10L), Air mineral 600ml. Cocok untuk lari santai.',
    isAvailable: true,
  },
  {
    img: paket2img,
    title: 'Paket Runner Pro',
    description: 'Locker medium (maks. 25L), Handuk + Air mineral. Untuk pro player.',
    isAvailable: true,
  },
  {
    img: rentalimg,
    title: 'Rental Sepatu Lari',
    description:
      'Mau ikut race tapi sepatu masih lembur di jemuran? Tenang, LAHRINGAN siap jadi solusi dadakanmu! Kami punya sepatu premium, tinggal pilih ukuran, dan kamu bisa langsung berlari (atau minimal instastory makin kalcer).',
    isAvailable: false,
  },
  {
    img: paketkomimg,
    title: 'Paket Komunitas Lari',
    description:
      'Datang bareng teman satu komunitas atau kantor? Titip rame-rame lebih hemat dan lebih seru!',
    isAvailable: true,
  },
]

const currentLocation = ref(allLocations[0])

const loadLocationData = () => {
  const id = route.params.id
  const found = allLocations.find((l) => l.id === id)
  if (found) {
    currentLocation.value = found
    if (id === 'lapangan-merdeka') {
      availableServices.value[1].isAvailable = false
    } else {
      availableServices.value[1].isAvailable = true
    }
  }
}

const otherLocations = computed(() => {
  return allLocations.filter((l) => l.id !== currentLocation.value.id)
})

const availableServices = ref([...services])

watch(
  () => route.params.id,
  () => {
    loadLocationData()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  },
)

onMounted(() => {
  loadLocationData()
})
</script>
