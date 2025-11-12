<!-- views/ServicePage.vue -->
<template>
  <div class="service-page">
    <!-- hero -->
    <section
      class="relative h-96 bg-cover bg-center"
      :style="{ backgroundImage: `url(${heroImage})` }"
    >
      <div class="absolute inset-0 bg-gray-900/60"></div>

      <div class="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="h-full flex flex-col justify-center">
          <h1
            class="text-4xl text-center text-b font-saotorpes text-funky mb-6 drop-shadow-4xl shadow-black"
          >
            Layanan Kami yang Bisa Ningkatin Pace Kalian
          </h1>
        </div>
      </div>
    </section>

    <!-- services -->
    <section class="py-16 bg-choco">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-basement font-semibold text-funky mb-4">
            Layanan Kami yang Semuanya Oke
          </h2>
          <h4 class="text-xl md:text-xl font-emone font-normal text-funky mb-4">
            Cari sesuai yang kamu butuhin!!
          </h4>
        </div>

        <div class="max-w-4xl max-h-3xl mx-auto">
          <div class="grid grid-cols-1 gap-8">
            <ServiceCard
              v-for="service in services"
              :key="service.title"
              :service="service"
              @learn-more="handleLearnMore"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- cta -->
    <section class="bg-funky text-white py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-basement text-vamp font-bold mb-4">
          Sudah Lihat Layanannya? <br />
          Langsung ketempat aja bro/sis
        </h2>
        <p class="text-xl mb-8 text-vamp font-emone">
          Lokasi LAHRINGAN terdekat bisa ditemukan dengan pencet tombol dibawah coy
        </p>
        <RouterLink
          to="/location"
          class="inline-block bg-choco text-funky px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Temukan Lokasi Kami
        </RouterLink>
      </div>
    </section>

    <ScrollToTop />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import heroImage from '@/assets/lockerroom.jpg'
import ScrollToTop from '../components/ScrollToTop.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import paket1img from '@/assets/paket1.jpeg'
import paket2img from '@/assets/paket2.jpeg'
import rentalimg from '@/assets/rental.jpeg'
import paketkomimg from '@/assets/paketkom.jpeg'

const router = useRouter()

const services = ref([
  {
    img: paket1img,
    title: 'Paket Lari Ringan',
    description:
      'Buat kamu yang datang cuma mau lari sebentar pulang kerja, kuliah, atau skalput. Simpan barang, lepas beban, fokus ke langkahmu.',
    features: [
      'Locker kecil (maks. 10L cocok untuk tas kecil, HP, dompet)',
      'Air mineral 600ml',
      'Waktu penitipan maksimal 3 jam',
      'Fitur keamanan QR Code unik per pengguna',
    ],
  },
  {
    img: paket2img,
    title: 'Paket Runner Pro',
    description:
      'Datang dari kantor atau kampus lengkap dengan tas besar dan sepatu cadangan? Tenang, ini paket buat kamu yang siap latihan serius.',
    features: [
      'Locker medium (maks. 25L muat tas kerja atau gym bag)',
      'Handuk kecil + air mineral 600ml',
      'Waktu penitipan maksimal 5 jam',
      'Fitur keamanan QR Code unik per pengguna',
    ],
  },
  {
    img: rentalimg,
    title: 'Rental Sepatu Lari',
    description:
      'Mau ikut race tapi sepatu masih lembur di jemuran? Tenang, LAHRINGAN siap jadi solusi dadakanmu! Kami punya sepatu premium, tinggal pilih ukuran, dan kamu bisa langsung berlari (atau minimal instastory makin kalcer).',
  },
  {
    img: paketkomimg,
    title: 'Paket Komunitas Lari',
    description:
      'Datang bareng teman satu komunitas atau kantor? Titip rame-rame lebih hemat dan lebih seru!',
    features: [
      'Locker besar (hingga 5 tas)',
      'Air mineral 5 botol @600ml',
      'Label nama tiap anggota',
      'Waktu penitipan',
      'Penitipan fleksibel tanpa antre',
    ],
  },
])

const handleLearnMore = () => {
  router.push('/service')
}
</script>
