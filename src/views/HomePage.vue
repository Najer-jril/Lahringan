<!-- src/views/HomePage.vue -->
<template>
  <div class="home-page bg-flash-50">
    <section
      class="relative h-full min-h-[600px] bg-cover bg-center flex items-center"
      :style="{ backgroundImage: `url(${heroImage})` }"
    >
      <div class="absolute inset-0 bg-gray-900/60"></div>

      <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div class="max-w-2xl">
          <h1 class="text-5xl md:text-7xl font-saotorpes text-funky mb-6 leading-tight">
            Lari Lebih Ringan,<br />
            <span class="text-flash">Barang Lebih Aman.</span>
          </h1>

          <p class="text-gray-200 text-lg md:text-xl font-garet mb-8 max-w-lg leading-relaxed">
            Titip barang kamu di <span class="text-funky font-bold">LAHRINGAN</span>. Solusi
            penitipan canggih untuk pelari, pejalan santai, dan komunitas aktif.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 mb-12">
            <RouterLink
              to="/location"
              class="bg-funky text-vamp px-8 py-4 rounded-lg font-bold text-sm uppercase hover:bg-flash transition-all duration-300 hover:scale-105 text-center"
            >
              Cari Lokasi Terdekat
            </RouterLink>
          </div>
        </div>
      </div>

    </section>

    <section class="bg-choco py-20 text-flash-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl md:text-4xl font-basement text-center text-funky mb-16">
          Kenapa Pelari Memilih Kami?
        </h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            class="bg-flash/5 p-8 rounded-2xl border border-flash/10 hover:border-funky transition-all duration-300 group hover:-translate-y-2"
          >
            <div
              class="bg-funky w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
            >
              <ShieldCheck class="w-8 h-8 text-vamp" />
            </div>
            <h3 class="font-neuepower text-xl mb-3 text-flash">Keamanan Maksimal</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Locker dipantau CCTV 24 jam + sistem segel digital anti-rusak. Lari tenang, hati
              senang.
            </p>
          </div>

          <div
            class="bg-flash/5 p-8 rounded-2xl border border-flash/10 hover:border-funky transition-all duration-300 group hover:-translate-y-2"
          >
            <div
              class="bg-funky w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
            >
              <Zap class="w-8 h-8 text-vamp" />
            </div>
            <h3 class="font-neuepower text-xl mb-3 text-flash">Cepat & Praktis</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Sistem check-in QR Code kurang dari 30 detik. Gak pake antre, langsung gas lari.
            </p>
          </div>

          <div
            class="bg-flash/5 p-8 rounded-2xl border border-flash/10 hover:border-funky transition-all duration-300 group hover:-translate-y-2"
          >
            <div
              class="bg-funky w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
            >
              <HeartHandshake class="w-8 h-8 text-vamp" />
            </div>
            <h3 class="font-neuepower text-xl mb-3 text-flash">Support Pelari</h3>
            <p class="text-gray-400 text-sm leading-relaxed">
              Tersedia air mineral, handuk, dan P3K ringan di setiap station. Kami ngerti kebutuhan
              runner.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-flash relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 class="text-3xl md:text-4xl font-basement font-semibold text-vamp mb-2">
              Layanan & Harga
            </h2>
            <p class="text-grayind font-semibold font-garet">
              Pilih paket yang cocok buat style lari kamu hari ini.
            </p>
          </div>
          <RouterLink
            to="/service"
            class="hidden md:inline-flex items-center bg-choco px-4 py-2 rounded-full text-funky font-bold hover:scale-105 transition-transform"
          >
            Lihat Semua Layanan <ArrowRight class="w-4 h-4 ml-2" />
          </RouterLink>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(service, index) in services"
            :key="index"
            class="bg-flash rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-funky group flex flex-col"
          >
            <div class="flex justify-between items-start mb-6">
              <div class="bg-gray-100 p-3 rounded-lg group-hover:bg-funky transition-colors">
                <component :is="service.icon" class="w-8 h-8 text-vamp" />
              </div>
              <span class="text-xs font-bold bg-green-100 text-green-700 px-2 py-1 rounded-md">
                Mulai Rp {{ service.price }}
              </span>
            </div>

            <h3 class="text-xl font-bold text-vamp mb-2">{{ service.title }}</h3>
            <p class="text-gray-500 text-sm mb-4 pb-4 border-b border-gray-100">
              {{ service.desc }}
            </p>

            <ul class="space-y-3 mb-8 grow">
              <li
                v-for="item in service.features"
                :key="item"
                class="flex items-center text-sm text-gray-700"
              >
                <Check class="w-4 h-4 text-funky mr-2 shrink-0" />
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-8 text-center md:hidden">
          <RouterLink
            to="/service"
            class="inline-flex items-center text-funky font-bold hover:underline"
          >
            Lihat Semua Layanan <ArrowRight class="w-4 h-4 ml-2" />
          </RouterLink>
        </div>
      </div>
    </section>

    <section class="py-20 bg-funky relative">
      <div
        class="absolute inset-0 opacity-10 bg-[radial-gradient(#000_2px,transparent_2px)] bg-size-[16px_16px]"
      ></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-vamp font-basement mb-4">
            Kata Mereka Yang Sudah Mampir
          </h2>
          <p class="text-vamp/80 font-emone max-w-2xl mx-auto text-lg">
            Jangan percaya kata kami, percaya kata mereka.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8">
          <TestimonialCard
            v-for="(testimonial, index) in testimonials"
            :key="index"
            :testimonial="testimonial"
            class="h-full"
          />
        </div>

      </div>
    </section>

    <section
      class="relative py-24 bg-cover bg-fixed bg-center"
      :style="{ backgroundImage: `url(${heroImage})` }"
    >
      <div class="absolute inset-0 bg-gray-900/80"></div>

      <div class="relative z-10 max-w-4xl mx-auto text-center px-4">
        <h2 class="text-4xl md:text-5xl font-basement text-flash mb-6">Siap Lari Tanpa Beban?</h2>
        <p class="text-xl mb-10 text-gray-300 font-garet max-w-2xl mx-auto">
          Temukan lokasi LAHRINGAN terdekat sekarang. Parkir barang aman, lari jadi nyaman.
        </p>
        <RouterLink
          to="/location"
          class="inline-flex items-center bg-funky text-vamp px-10 py-4 rounded-xl font-bold text-lg hover:bg-flash transition-all shadow-lg hover:shadow-funky/50"
        >
          <MapPin class="w-5 h-5 mr-2" />
          Temukan Lokasi Kami
        </RouterLink>
      </div>
    </section>

    <section class="py-20 bg-flash relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              class="text-3xl md:text-4xl font-basement font-semibold text-choco mb-6 leading-tight"
            >
              Ada pertanyaan atau ingin menitip perlengkapan lari?
            </h2>
            <div class="space-y-4">
              <p class="text-lg md:text-xl font-emone font-normal text-choco/90">
                Butuh informasi lebih lanjut tentang layanan penitipan atau kerjasama komunitas
                lari?
              </p>
              <p class="text-lg md:text-xl font-emone font-normal text-choco/90">
                Isi formulir di samping atau kunjungi lokasi kami langsung. Legoo!!
              </p>
            </div>
          </div>

          <div class="flex flex-col gap-4 max-w-sm mx-auto md:mr-0 md:ml-auto w-full">
            <RouterLink
              to="/contact"
              class="group flex items-center justify-center w-full bg-funky text-choco font-bold py-4 rounded-xl hover:bg-flash transition-all duration-300 shadow-lg hover:-translate-y-1"
            >
              <span class="font-basement font-extralight text-sm tracking-wide">Hubungi Kami</span>
              <ArrowRight class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-funky text-flash py-16 relative">
      <div
        class="absolute inset-0 opacity-10 bg-[radial-gradient(#000_2px,transparent_2px)] bg-size-[16px_16px] pointer-events-none"
      ></div>

      <div class="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-basement text-vamp font-bold mb-4 md:text-4xl">
          Orang-orang nanyain ini terus
        </h2>
        <h4 class="text-xl font-emone font-normal text-vamp mb-4 md:text-xl">
          kali aja jawabannya ada di sini
        </h4>

        <FAQAccordion :items="faqs" />
      </div>
    </section>

    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import heroImage from '@/assets/hero/jogging.jpg'
import {
  Footprints,
  Zap,
  ArrowDown,
  MapPin,
  ShieldCheck,
  HeartHandshake,
  Check,
  ArrowRight,
  Backpack,
  Crown,
} from 'lucide-vue-next'
import ScrollToTop from '../components/ScrollToTop.vue'
import TestimonialCard from '@/components/TestimonialCard.vue'
import FAQAccordion from '@/components/FAQAccordion.vue'


const services = ref([
  {
    title: 'Penitipan Reguler',
    desc: 'Simpan barang aman di lokasi strategis.',
    price: '20.000',
    icon: Backpack,
    features: ['Locker Kecil (10L)', 'Free Air Mineral 600ml', 'Max 5 Jam', 'QR Code Access'],
  },
  {
    title: 'Peminjaman Sepatu',
    desc: 'Lupa bawa sepatu? Pinjam stok wangi kami.',
    price: '50.000',
    icon: Footprints,
    features: ['Size 36 - 45 Ready', 'Hoka / Nike / Adidas', 'Kaos Kaki Baru', 'Sterilisasi UV'],
  },
  {
    title: 'Runner Pro Support',
    desc: 'Fasilitas lengkap untuk long run.',
    price: '40.000',
    icon: Crown,
    features: ['Locker Medium (25L)', 'Handuk Dingin', 'P3K & Spray Pain Relief', 'Max 12 Jam'],
  },
])

const testimonials = ref([
  {
    name: 'Henry Rollins',
    position: 'Vokalis Band Punk',
    text: 'habis latihan langsung lari!',
    rating: 5,
    avatar: null,
  },
  {
    name: 'Oscar Piastri',
    position: 'Pembalap F1',
    text: 'selamat, berjuang, sukses. kukira cuma bisa buat pelari aja.',
    rating: 4,
    avatar: null,
  },
  {
    name: 'Jeril Qris',
    position: 'Pelari Rekreasional',
    text: 'gw akuin, ga banyak bisnis kek gini di balikpapan! buka di kutub selatan dong.',
    rating: 5,
    avatar: null,
  },
])

const faqs = ref([
  {
    question: 'Gimana cara titip barangnya?',
    answer:
      'Datang ke lokasi > Scan QR di locker > Masukkan barang > Kunci otomatis via HP. Beres!',
  },
  {
    question: 'Aman gak nih? Kalo ilang gimana?',
    answer:
      'Locker kami baja tebal + CCTV 24 jam. Jika (amit-amit) hilang karena kesalahan sistem kami, ada garansi ganti rugi hingga 1 Juta Rupiah.',
  },
  {
    question: 'Bisa booking locker dulu gak?',
    answer:
      'Bisa banget! Langsung aja buka menu Lokasi dan pilih "Booking Locker" biar gak kehabisan slot pas weekend.',
  },
  {
    question: 'Sepatu sewaannya bersih gak?',
    answer:
      'Dijamin wangi! Setiap habis pakai langsung masuk mesin sterilisasi UV dan dicuci profesional.',
  },
])
</script>
