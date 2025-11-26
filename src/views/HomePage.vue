<!-- views/HomePage.vue -->
<template>
  <div class="home-page">
    <!-- hero -->
    <section
      class="relative bg-cover bg-center"
      :style="{ backgroundImage: `url(${heroImage})` }"
    >
      <div class="absolute inset-0 bg-gray-900/60"></div>

      <div
        class="relative z-10 max-w-7xl mx-auto
        px-4 py-20
        flex flex-col items-center justify-center text-center
        sm:px-6 sm:py-24
        md:items-end md:justify-end md:text-right md:px-8 md:py-28
        lg:px-10 lg:py-32"
      >
        <div
          class="flex flex-col
          items-center text-center
          md:items-end md:text-right md:max-w-md
          lg:max-w-lg"
        >
          <h1
            class="text-4xl font-saotorpes text-funky mb-6 leading-tight
            lg:text-5xl"
          >
            Lari Lebih Ringan, <br />Barang Lebih Aman
          </h1>

          <p
            class="font-kilimanjaro text-white mb-8 max-w-md
            sm:text-2xl
            md:text-2xl
            lg:text-5xl lg:max-w-xl"
          >
            Titip barang kamu di LAHRINGAN, solusi penitipan untuk pelari, pejalan santai, dan
            komunitas aktif.
          </p>

          <RouterLink
            to="/location"
            class="bg-funky text-vamp px-5 py-3 rounded-md text-sm font-emone
            hover:bg-funky hover:scale-105
            focus:outline-none
            cursor-pointer transition-all duration-300
            w-auto"
          >
            Temukan Lokasi Kami
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- why cus us -->
    <section
      class="bg-choco
      py-16
      md:py-24"
    >
      <div
        class="max-w-7xl mx-auto
        px-4
        sm:px-6
        lg:px-8"
      >
        <h2
          class="text-3xl font-basement text-center text-funky mb-16
          md:text-4xl"
        >
          Kenapa Pelari memilih kami?
        </h2>

        <div
          class="grid grid-cols-1 gap-12
          md:grid-cols-3"
        >
          <div class="flex flex-col items-center text-center">
            <div class="bg-funky p-6 rounded-2xl inline-block mb-4">
              <Lock class="w-12 h-12 text-vamp" />
            </div>
            <h3 class="font-neuepower text-funky text-xl">Keamanan Maksimal</h3>
          </div>

          <div class="flex flex-col items-center text-center">
            <div class="bg-funky p-6 rounded-2xl inline-block mb-4">
              <Zap class="w-12 h-12 text-gray-900" />
            </div>
            <h3 class="font-neuepower text-funky text-xl">Cepat dan Praktis</h3>
          </div>

          <div class="flex flex-col items-center text-center">
            <div class="bg-funky p-6 rounded-2xl inline-block mb-4">
              <Footprints class="w-12 h-12 text-gray-900" />
            </div>
            <h3 class="font-neuepower text-funky text-xl">Support Pelari</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- testimonials -->
    <section class="py-16 bg-funky">
      <div
        class="max-w-7xl mx-auto
        px-4
        sm:px-6
        lg:px-8"
      >
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-bold text-choco font-basement mb-4
            md:text-4xl"
          >
            kata-kata mereka yang sudah mampir
          </h2>
          <p class="text-choco font-emone max-w-2xl mx-auto">
            Ini kata dari mereka, kalo kamu mau ngasih testimoni juga, sokin lah!!
          </p>
        </div>
        <div
          class="grid grid-cols-1 gap-8
          md:grid-cols-3"
        >
          <TestimonialCard
            v-for="(testimonial, index) in testimonials"
            :key="index"
            :testimonial="testimonial"
          />
        </div>
      </div>
    </section>

    <!-- services -->
    <section class="py-16 bg-choco">
      <div
        class="max-w-7xl mx-auto
        px-4
        sm:px-6
        lg:px-8"
      >
        <div class="text-center mb-12">
          <h2
            class="text-3xl font-basement font-semibold text-funky mb-4
            md:text-4xl"
          >
            Lari Makin Jauh Dengan Layanan Kami
          </h2>
          <h4
            class="text-xl font-emone font-normal text-funky mb-4
            md:text-xl"
          >
            Cek yang paling laris di tempat ini!!
          </h4>
        </div>

        <div
          class="grid grid-cols-1 gap-8
          md:grid-cols-3"
        >
          <div class="bg-whi text-vamp p-6 rounded-lg font-emone">
            <h3 class="text-xl font-basement font-semibold mb-4 text-center">
              Penitipan Reguler
            </h3>
            <p class="mb-4 border-t border-gray-400 pt-4">
              Simpan barang kamu dengan aman di lokasi strategis.
            </p>
            <ul class="list-disc list-inside space-y-2">
              <li>Locker kecil</li>
              <li>Air mineral 600ml</li>
              <li>Waktu penitipan maksimal 5 jam</li>
            </ul>
          </div>

          <div class="bg-whi text-vamp p-6 rounded-lg font-emone">
            <h3 class="text-xl font-basement font-semibold mb-4 text-center">
              Peminjaman Sepatu
            </h3>
            <p class="mb-4 border-t border-gray-400 pt-4">
              Sepatu kentang? Tenang, kami punya stok siap gas race.
            </p>
            <ul class="list-disc list-inside space-y-2">
              <li>Sepatu ukuran 38-45</li>
              <li>Berbagai model tersedia</li>
              <li>Sewa harian atau mingguan</li>
            </ul>
          </div>

          <div class="bg-whi text-vamp p-6 rounded-lg font-emone">
            <h3 class="text-xl font-basement font-semibold mb-4 text-center">
              Runner Pro Support
            </h3>
            <p class="mb-4 border-t border-gray-400 pt-4">
              Locker prioritas dan akses cepat untuk pelari profesional.
            </p>
            <ul class="list-disc list-inside space-y-2">
              <li>Locker medium</li>
              <li>Handuk kecil + air mineral 600ml</li>
              <li>Waktu penitipan maksimal 5 jam</li>
            </ul>
          </div>
        </div>
        <div
          class="max-w-4xl mx-auto mt-8 text-center
          px-4
          sm:px-6
          lg:px-8"
        >
          <RouterLink
            to="/service"
            class="inline-block bg-funky text-vamp px-8 py-3 rounded-lg font-emone font-semibold
            hover:bg-funky hover:scale-115
            focus:outline-none
            cursor-pointer transition-all duration-300"
          >
            Pencet ini buat liat layanan lainnya
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- cta -->
    <section class="bg-funky text-white py-16">
      <div
        class="max-w-4xl mx-auto text-center
        px-4
        sm:px-6
        lg:px-8"
      >
        <h2
          class="text-3xl font-basement text-vamp font-bold mb-4
          md:text-4xl"
        >
          Siap Lari Tanpa Beban??
        </h2>
        <p class="text-xl mb-8 text-vamp font-emone">
          Temukan lokasi LAHRINGAN terdekat dan rasakan pengalaman penitipan <br />
          yang lebih baik hari ini.
        </p>
        <RouterLink
          to="/location"
          class="inline-block bg-choco text-funky px-8 py-3 rounded-lg font-emone
          hover:bg-choco hover:scale-115
          focus:outline-none
          cursor-pointer transition-all duration-300"
        >
          Temukan Lokasi Kami
        </RouterLink>
      </div>
    </section>

    <!-- form -->
    <section
      class="bg-choco
      py-16
      md:py-24"
    >
      <div
        class="max-w-7xl mx-auto
        px-4
        sm:px-6
        lg:px-8"
      >
        <div
          class="grid grid-cols-1 gap-16 items-center
          md:grid-cols-2"
        >
          <div>
            <h2
              class="text-3xl font-basement font-semibold text-funky mb-6
              md:text-4xl"
            >
              Ada pertanyaan atau ingin menitip perlengkapan lari kamu?
            </h2>
            <h4
              class="text-xl font-emone font-normal text-funky mb-4
              md:text-xl"
            >
              Butuh informasi lebih lanjut tentang layanan penitipan atau kerjasama komunitas lari?
            </h4>
            <h4
              class="text-xl font-emone font-normal text-funky
              md:text-xl"
            >
              Isi formulir di samping atau kunjungi lokasi kami langsung. legoo!!
            </h4>
          </div>

          <RouterLink
            to="/contact"
            class="mt-8 text-center bg-funky text-choco px-8 py-3 rounded-lg font-semibold max-w-xs mx-auto
            hover:scale-115
            focus:outline-none
            cursor-pointer transition-all duration-300"
          >
            Hubungi Kami
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- faq -->
    <section class="bg-funky text-white py-16">
      <div
        class="max-w-4xl mx-auto text-center
        px-4
        sm:px-6
        lg:px-8"
      >
        <h2
          class="text-3xl font-basement text-vamp font-bold mb-4
          md:text-4xl"
        >
          Orang-orang nanyain ini terus
        </h2>
        <h4
          class="text-xl font-emone font-normal text-vamp mb-4
          md:text-xl"
        >
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
import { Footprints, Lock, Zap } from 'lucide-vue-next'
import ScrollToTop from '../components/ScrollToTop.vue'
import TestimonialCard from '@/components/TestimonialCard.vue'
import FAQAccordion from '@/components/FAQAccordion.vue'

const testimonials = ref([
  {
    name: 'Henry Rollins',
    position: 'Ex-Vocalis Black Flag',
    text: 'habis latihan langsung lari!',
    rating: 5,
    avatar: null,
  },
  {
    name: 'Oscar Piastri',
    position: 'Pembalap F1',
    text: 'selamat, berjuang, sukses. kukira cuma bisa buat pelari aja',
    rating: 4,
    avatar: null,
  },
  {
    name: 'Jeril Qris',
    position: 'Pelari Rekreasional',
    text: 'gw akuin, ga banyak bisnis kek gini di balikpapan! buka di kutub selatan dong',
    rating: 5,
    avatar: null,
  },
])

const faqs = ref([
  {
    question: 'Bagaimana cara menggunakan layanan penitipan barang?',
    answer:
      'Anda dapat mengunjungi lokasi kami, memilih layanan yang diinginkan, dan mengikuti petunjuk dari staf kami untuk menitipkan barang Anda dengan aman.',
  },
  {
    question: 'Apakah di tanggal kembar ada diskon?',
    answer: 'Ada.',
  },
  {
    question: 'Bagaimana jika saya kehilangan barang yang dititipkan?',
    answer:
      'Kami memiliki prosedur keamanan yang ketat untuk melindungi barang Anda. Namun, jika terjadi kehilangan, segera laporkan kepada staf kami agar kami dapat membantu menyelesaikan masalah tersebut.',
  },
  {
    question: 'Apakah saya bisa menitipkan barang tanpa harus jadi member?',
    answer:
      'Ya, Anda dapat menggunakan layanan kami tanpa harus menjadi member. Namun, menjadi member akan memberikan Anda beberapa keuntungan tambahan.',
  },
  {
    question: 'Apakah tersedia layanan tambahan selain penitipan sepatu?',
    answer:
      'Selain penitipan sepatu, kami juga menawarkan layanan penitipan barang reguler dan paket khusus untuk komunitas pelari. Silakan kunjungi halaman layanan kami untuk informasi lebih lanjut.',
  },
])
</script>
