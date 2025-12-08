<!-- views/ServicePage.vue -->
<template>
  <div class="service-page">
    <!-- hero -->
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
          Layanan Kami yang Bisa Ningkatin Pace Kalian
        </h1>

      </div>
    </section>

    <!-- services -->
    <section class="py-20 bg-choco relative overflow-hidden">
        <div class="absolute top-0 right-0 w-96 h-96 bg-funky/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-basement font-semibold text-funky mb-4">
            Paket Utama Kami
          </h2>
          <p class="text-flash/80 font-emone text-lg max-w-2xl mx-auto">
            Pilih paket yang sesuai kebutuhan lari harian atau event kamu.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <ServiceCard
              v-for="service in services"
              :key="service.title"
              :service="service"
            />
        </div>
      </div>
    </section>

    <section class="py-20 bg-neutral-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between mb-12 gap-4">
            <div>
                <h2 class="text-3xl font-basement font-bold text-vamp mb-2">Kecil tapi Krusial</h2>
                <p class="text-grayind font-semibold font-garet">Kita juga ready eceran.</p>
            </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div
                v-for="addon in addOns"
                :key="addon.name"
                class="bg-flash p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 group cursor-pointer"
            >
                <div class="w-12 h-12 bg-funky rounded-lg flex items-center justify-center mb-4 text-choco transition-colors">
                    <component :is="addon.icon" class="w-6 h-6" />
                </div>
                <h4 class="font-bold text-vamp mb-1">{{ addon.name }}</h4>
                <p class="text-choco font-basement font-extralight text-lg">Rp {{ addon.price }}</p>
            </div>
        </div>
      </div>
    </section>

    <section class="bg-funky py-20 relative overflow-hidden">
       <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#000_2px,transparent_2px)] bg-size-[16px_16px]"></div>

      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 class="text-4xl md:text-5xl font-basement text-vamp font-bold mb-6">
          Gak Sabar Pengen Lari?
        </h2>
        <p class="text-xl mb-10 text-vamp/80 font-emone max-w-xl mx-auto">
          Gas langsung ke lokasi terdekat! Cek map, booking locker, lalu lari sepuasnya.
        </p>

        <RouterLink
          to="/location"
          class="inline-flex items-center bg-choco text-funky px-10 py-4 rounded-xl font-semibold text-md hover:bg-vamp hover:text-flash transition-all shadow-xl hover:-translate-y-1"
        >
          Cek Lokasi Terdekat
        </RouterLink>
      </div>
    </section>

    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ShoppingBag, Droplets, Shirt, Zap } from 'lucide-vue-next'
import heroImage from '@/assets/hero/lockerroom.jpg'
import ScrollToTop from '../components/ScrollToTop.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import paket1img from '@/assets/service/paket1.jpeg'
import paket2img from '@/assets/service/paket2.jpeg'
import rentalimg from '@/assets/service/rental.jpeg'
import paketkomimg from '@/assets/service/paketkom.jpeg'

const services = ref([
  {
    img: paket1img,
    title: 'Paket Lari Ringan',
    price: '20.000',
    description: 'Solusi kilat buat kamu yang cuma mau lari sebentar pulang kerja.',
    isPopular: true,
    features: [
      'Locker Kecil (10L)',
      'Air Mineral 600ml',
      'Max Penitipan 3 Jam',
      'Akses QR Code',
    ],
  },
  {
    img: paket2img,
    title: 'Paket Runner Pro',
    price: '40.000',
    description: 'Paket lengkap buat yang bawa tas kantor/gym dan butuh refresh.',
    isPopular: true,
    features: [
      'Locker Medium (25L)',
      'Handuk Bersih + Air Mineral',
      'Max Penitipan 5 Jam',
      'Free Spray Pain Relief',
    ],
  },
  {
    img: rentalimg,
    title: 'Rental Sepatu',
    price: '50.000',
    description: 'Sepatu ketinggalan? Atau mau coba sepatu Hoka/Nike terbaru?',
    isPopular: false,
    features: [
      'Size 36 - 45 Available',
      'Termasuk Kaos Kaki Baru',
      'Sterilisasi UV & Wangi',
      'Durasi Sewa Harian',
    ],
  },
   {
    img: paketkomimg,
    title: 'Paket Komunitas',
    price: '100.000',
    description: 'Harga rombongan buat 5 orang. Lebih hemat buat Sunday Morning Run.',
    isPopular: false,
    features: [
      '1 Locker Besar (Muat 5 Tas)',
      '5 Botol Air Mineral',
      'Penitipan Fleksibel Tanpa Antre',
      'Label Nama Anggota',
    ],
  },
])

const addOns = ref([
    { name: 'Handuk Baru', price: '20.000', icon: Shirt },
    { name: 'Kaos Kaki Baru', price: '25.000', icon: ShoppingBag },
    { name: 'Energy Gel', price: '35.000', icon: Zap },
    { name: 'Minuman Isotonik', price: '15.000', icon: Droplets },
])

</script>
