<!-- views/AboutPage.vue -->
<template>
  <div class="about-page">
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
            Kenal lebih dekat dengan kami
          </h1>
        </div>
      </div>
    </section>

    <!-- Kami Hadir -->
    <section class="py-16 bg-choco">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-basement font-semibold text-funky mb-4">
            Kami Hadir untuk Menemani Langkahmu
          </h2>
          <h4 class="text-xl md:text-xl font-emone font-normal text-funky">
            LAHRINGAN adalah layanan penitipan barang yang diciptakan untuk para pelari, komunitas
            aktif, dan siapa pun yang ingin bergerak tanpa beban.
          </h4>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-10 mt-12 text-center">
          <div class="border-r-4 border-l-4 border-funky">
            <p class="text-4xl font-neuepower text-funky">1K+</p>
            <p class="text-flash text-sm mt-1">Pengunjung Bulanan</p>
          </div>

          <div class="border-r-4 border-l-4 border-funky">
            <p class="text-4xl font-neuepower text-funky">4.5</p>
            <p class="text-flash text-sm mt-1">Rating Kepuasan</p>
          </div>

          <div class="border-r-4 border-l-4 border-funky">
            <p class="text-4xl font-neuepower text-funky">59+</p>
            <p class="text-flash text-sm mt-1">Klien Senang</p>
          </div>

          <div class="border-r-4 border-l-4 border-funky">
            <p class="text-4xl font-neuepower text-funky">98%</p>
            <p class="text-flash text-sm mt-1">Tingkat Retensi</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Ruang Antara -->
    <section class="py-16 bg-funky">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-basement font-semibold text-choco mb-4">
            Ruang Antara Kantor dan Garis Start
          </h2>
          <h4 class="text-xl md:text-xl font-emone font-normal text-choco text-justify mb-4">
            Awalnya ide ini lahir dari hal paling sederhana: capek bawa hape, dompet, dan kunci pas
            lagi lari. Dari obrolan kopi pagi antara tiga teman pelari, kami nyadar banyak orang
            juga ngerasain hal yang sama — pengen lari ringan tanpa mikirin barang.
          </h4>
          <h4 class="text-xl md:text-xl font-emone font-normal text-choco text-justify mb-4">
            Jadi, kami bikin LAHRINGAN: solusi penitipan cepat, aman, dan gampang dipakai. Gak perlu
            antre lama, gak perlu curiga-curiga, tinggal titip, lari, ambil lagi. Simple. Aman.
            Bikin lari kamu lebih enak (Dan ini juga merupakan Tugas Besar Mata Kuliah Desain Web).
          </h4>
        </div>
      </div>
    </section>

    <!-- visi Misi -->
    <section class="py-16 bg-choco">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-basement font-semibold text-funky mb-4">
            Misi dan Value yang kami tawarkan
          </h2>
          <div class="grid grid-cols-2 md:grid-cols-2 gap-8">
            <div>
              <h3 class="text-xl md:text-2xl font-basement font-semibold text-funky mb-4">
                Misi Kami
              </h3>
              <h4 class="text-lg md:text-lg font-emone font-normal text-funky text-justify">
                Membuat pengalaman lari jadi lebih ringan secara harfiah. Kami percaya setiap orang
                berhak menikmati lari tanpa ribet mikirin barang yang kebanyakan isi tapi jarang
                dipakai.
              </h4>
            </div>
            <div>
              <h3 class="text-xl md:text-2xl font-basement font-semibold text-funky mb-4">
                Perusahaan yang dipegang itu Valuenya
              </h3>
              <ul
                class="list-disc list-inside text-justify text-lg md:text-lg font-emone font-normal text-funky mb-2"
              >
                <li>
                  <strong>Aman Tanpa Drama:</strong> Barang kamu kami jaga kayak barang sendiri.
                  Clear SOP, clear handling, clear responsibility.
                </li>
                <li>
                  <strong>Cepat & Praktis:</strong> Titip - lari - ambil. Nggak ada yang ribet.
                  Semua dibuat se-simple mungkin.
                </li>
                <li>
                  <strong>Ramah & Real:</strong> Nggak ada formalitas berlebihan. Kami ngobrol kayak
                  teman lari, bukan customer ke vendor.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- kenapa kami -->
    <section class="py-16 bg-funky">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-basement font-semibold text-choco mb-4">
            Kenapa harus pilih LAHRINGAN?
          </h2>
          <ul
            class="list-disc list-inside text-justify text-lg md:text-lg font-emone font-normal text-choco mb-2"
          >
            <li>
              <strong>Titip Paling Cepat di Venue:</strong> 30 detik titip, 10 detik ambil. No
              waiting game, no antre berkelok.
            </li>
            <li>
              <strong>Harga Masuk Akal, Value Maksimal:</strong> Dibanding ribet bawa tas
              muter-muter, mending serahin ke kami. Murah tapi aman.
            </li>
            <li>
              <strong>Vibes Komunitas Beneran:</strong> Datang sebagai runner, pas pulang punya
              temen lari baru.
            </li>
            <li>
              <strong>Ramah & Real:</strong> Nggak ada formalitas berlebihan. Kami ngobrol kayak
              teman lari, bukan customer ke vendor.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- timeline -->
    <section class="py-16 bg-choco">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="text-3xl md:text-4xl font-basement font-semibold text-funky">
            Timeline Kami Mirip Timeline Marvel Universe
          </h2>
        </div>

        <ol class="items-center
          lg:flex lg:justify-between">

          <li class="relative mb-12 lg:mb-0 text-center px-4">
            <div class="relative flex items-center justify-center">
              <div class="hidden lg:block absolute left-1/2 top-1/2 w-full h-px bg-funky/30"></div>

              <div class="relative z-10 w-7 h-7 bg-funky rounded-full ring-4 ring-funky/40 shadow-lg shadow-funky/40"></div>
            </div>

            <div class="mt-6">
              <time class="text-xs font-medium text-choco bg-funky px-2 py-1 rounded-md shadow-sm">
                15 Agustus 2025
              </time>
              <h3 class="text-xl font-semibold text-white mt-3">FRS Ambil MK Desain Web</h3>
            </div>
          </li>

          <li class="relative mb-12 lg:mb-0 text-center px-4">
            <div class="relative flex items-center justify-center">
              <div class="hidden lg:block absolute right-1/2 top-1/2 w-full h-px bg-funky/30"></div>
              <div class="hidden lg:block absolute left-1/2 top-1/2 w-full h-px bg-funky/30"></div>

              <div class="relative z-10 w-7 h-7 bg-funky rounded-full ring-4 ring-funky/40 shadow-lg shadow-funky/40"></div>
            </div>

            <div class="mt-6">
              <time class="text-xs font-medium text-choco bg-funky px-2 py-1 rounded-md shadow-sm">
                17 Oktober 2025
              </time>
              <h3 class="text-xl font-semibold text-white mt-3">Presentasi Prototype</h3>
            </div>
          </li>

          <li class="relative mb-12 lg:mb-0 text-center px-4">
            <div class="relative flex items-center justify-center">
              <div class="hidden lg:block absolute right-1/2 top-1/2 w-full h-px bg-funky/30"></div>

              <div class="relative z-10 w-7 h-7 bg-funky rounded-full ring-4 ring-funky/40 shadow-lg shadow-funky/40"></div>
            </div>

            <div class="mt-6">
              <time class="text-xs font-medium text-choco bg-funky px-2 py-1 rounded-md shadow-sm">
                20 November 2025
              </time>
              <h3 class="text-xl font-semibold text-white mt-3">
                Asistensi Besok Hari Kamis
              </h3>
            </div>
          </li>
        </ol>

      </div>
    </section>

    <!-- tim -->
    <section class="py-16 bg-funky">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-basement font-semibold text-choco mb-4">
            Orang-orang yang ngerjain LAHRINGAN
          </h2>
        </div>

        <div class="max-w-8xl max-h-3xl mx-auto mt-12">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
            <TeamCard v-for="teamsItem in teams" :key="teamsItem.name" :team="teamsItem" />
          </div>
        </div>
      </div>
    </section>

    <!-- visi -->
    <section class="py-16 bg-choco">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl md:text-4xl font-basement font-semibold text-funky mb-4">
            Kata Orang Harus Punya Visi
          </h2>
          <h4 class="text-xl md:text-xl font-emone font-normal text-funky">
            Kami nggak cuma ingin jadi tempat penitipan barang. Kami ingin jadi bagian dari
            ekosistem lari di Indonesia.
          </h4>
          <h4 class="text-justify text-lg md:text-lg font-emone font-normal text-funky mb-2 mt-10">
            Visi Kami Kalo Kata Direktur
          </h4>
          <ul
            class="list-disc list-inside text-justify text-lg md:text-lg font-emone font-normal text-funky mb-2 mt-4"
          >
            <li>Membuka lebih banyak titik penitipan di kota-kota besar.</li>
            <li>Bekerja sama dengan race organizer secara resmi.</li>
            <li>Membangun layanan “Runner Hub” kayak ruang aman sebelum & sesudah lari.</li>
            <li>Membuat sistem digital titip-ambil biar makin cepat.</li>
            <li>Mendukung komunitas lari lewat event, pelatihan, dan kolaborasi.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- cta -->
    <section class="bg-funky text-white py-16">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-basement text-choco font-bold mb-8">
          Kami sering lari bareng. Kadang cuma 10K, kadang 5K tapi vibesnya mirip FM karna bareng.
        </h2>
        <RouterLink
          to="/location"
          class="inline-block bg-choco text-funky px-8 py-3 rounded-lg font-semibold hover:bg-chcoco focus:outline-none cursor-pointer transition-all duration-300 hover:scale-115"
        >
          Langsung Aja Sokin
        </RouterLink>
      </div>
    </section>

    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import heroImage from '@/assets/hero/aboutus.jpg'
import ScrollToTop from '../components/ScrollToTop.vue'
import TeamCard from '@/components/TeamCard.vue'
import ceo from '@/assets/team/ceo.png'
import cfo from '@/assets/team/cfo.png'
import cto from '@/assets/team/cto.png'
import coo from '@/assets/team/coo.png'

const teams = ref([
  {
    name: 'Najer',
    role: 'CEO',
    image: ceo,
  },
  {
    name: 'Najril',
    role: 'CFO',
    image: cfo,
  },
  {
    name: 'Jeril',
    role: 'CTO',
    image: cto,
  },
  {
    name: 'Admin Najer',
    role: 'COO',
    image: coo,
  },
])
</script>

