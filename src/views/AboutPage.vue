<template>
  <div class="about-page bg-neutral-50">
    <section
      class="relative h-[500px] bg-cover bg-center bg-fixed"
      :style="{ backgroundImage: `url(${heroImage})` }"
    >
      <div class="absolute inset-0 bg-gray-900/60"></div>

      <div
        class="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center"
      >
        <h1
          class="text-4xl md:text-6xl font-saotorpes text-funky mb-6 drop-shadow-xl animate-fade-in-up"
        >
          Kenal Lebih Dekat Dengan Kami
        </h1>
      </div>
    </section>

    <section class="py-20 bg-choco text-flash relative overflow-hidden">
      <div
        class="absolute top-0 left-0 w-64 h-64 bg-funky/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      ></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-basement font-semibold text-funky mb-6">
            Kami Hadir untuk Menemani Langkahmu
          </h2>
          <p class="text-lg md:text-xl font-emone font-normal text-gray-300 leading-relaxed">
            LAHRINGAN adalah layanan penitipan barang yang diciptakan untuk para pelari, komunitas
            aktif, dan siapa pun yang ingin bergerak tanpa beban.
          </p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div
            class="bg-flash/5 border border-flash/10 p-6 rounded-2xl text-center hover:border-funky transition-colors group"
          >
            <p
              class="text-4xl md:text-5xl font-neuepower text-funky mb-2 group-hover:scale-110 transition-transform"
            >
              1K+
            </p>
            <p class="text-gray-400 text-sm font-bold uppercase tracking-wider">
              Pengunjung Bulanan
            </p>
          </div>
          <div
            class="bg-flash/5 border border-flash/10 p-6 rounded-2xl text-center hover:border-funky transition-colors group"
          >
            <p
              class="text-4xl md:text-5xl font-neuepower text-funky mb-2 group-hover:scale-110 transition-transform"
            >
              4.5
            </p>
            <p class="text-gray-400 text-sm font-bold uppercase tracking-wider">Rating Kepuasan</p>
          </div>
          <div
            class="bg-flash/5 border border-flash/10 p-6 rounded-2xl text-center hover:border-funky transition-colors group"
          >
            <p
              class="text-4xl md:text-5xl font-neuepower text-funky mb-2 group-hover:scale-110 transition-transform"
            >
              59+
            </p>
            <p class="text-gray-400 text-sm font-bold uppercase tracking-wider">Klien Senang</p>
          </div>
          <div
            class="bg-flash/5 border border-flash/10 p-6 rounded-2xl text-center hover:border-funky transition-colors group"
          >
            <p
              class="text-4xl md:text-5xl font-neuepower text-funky mb-2 group-hover:scale-110 transition-transform"
            >
              98%
            </p>
            <p class="text-gray-400 text-sm font-bold uppercase tracking-wider">Tingkat Retensi</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-flash">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="relative">
            <div
              class="absolute inset-0 bg-choco rounded-3xl rotate-3 transform translate-x-2 translate-y-2"
            ></div>
            <img
              :src="heroImage"
              class="relative rounded-3xl shadow-xl transition-all duration-500 w-full h-[500px] object-cover"
              alt="Founder Story"
            />
          </div>

          <div>
            <span class="text-vamp font-extrabold uppercase text-sm mb-2 block"
              >My Kisah Asli</span
            >
            <h2 class="text-3xl md:text-4xl font-basement font-semibold text-vamp mb-8">
              Ruang Antara Kantor dan Garis Start
            </h2>
            <div class="space-y-6 text-grayind font-garet leading-relaxed text-justify">
              <p>
                Awalnya ide ini lahir dari hal paling sederhana: capek bawa hape, dompet, dan kunci
                pas lagi lari. Dari obrolan kopi pagi antara tiga teman pelari, kami nyadar banyak
                orang juga ngerasain hal yang sama pengen lari ringan tanpa mikirin barang.
              </p>
              <p
                class="p-6 bg-gray-50 italic text-vamp font-semibold rounded-r-xl"
              >
                "Jadi, kami bikin LAHRINGAN: solusi penitipan cepat, aman, dan gampang dipakai."
              </p>
              <p>
                (Dan ini juga merupakan Tugas Besar Mata Kuliah Desain Web).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-neutral-100">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-basement font-semibold text-vamp mb-4">
            Misi dan Value
          </h2>
          <p class="text-grayind font-garet">Apa yang kami pegang teguh saat melayanimu.</p>
        </div>

        <div class="gap-8 mb-12">
          <div class="bg-funky text-flash p-8 rounded-3xl relative overflow-hidden group">
            <div
              class="absolute top-0 right-0 w-32 h-32 bg-funky/10 rounded-full blur-2xl -mr-10 -mt-10"
            ></div>
            <Rocket class="w-10 h-10 text-choco mb-6" />
            <h3 class="text-2xl font-basement font-bold text-vamp mb-4">Misi Kami</h3>
            <p class="font-garet text-vamp leading-relaxed text-justify">
              Membuat pengalaman lari jadi lebih ringan secara harfiah. Kami percaya setiap orang
              berhak menikmati lari tanpa ribet mikirin barang yang kebanyakan isi tapi jarang
              dipakai.
            </p>
          </div>

          <div class="mt-8 space-y-4 border-t-4 border-grayind pt-8 gap-6">
            <div
              class="bg-flash p-6 rounded-2xl border border-grayind shadow-sm hover:border-funky transition-colors flex gap-4"
            >
              <ShieldCheck class="w-8 h-8 text-funky shrink-0" />
              <div>
                <h4 class="font-bold text-vamp text-lg">Aman Tanpa Drama</h4>
                <p class="text-sm text-grayind">
                  Barang kamu kami jaga kayak barang sendiri. Clear SOP & responsibility.
                </p>
              </div>
            </div>
            <div
              class="bg-flash p-6 rounded-2xl border border-grayind shadow-sm hover:border-funky transition-colors flex gap-4"
            >
              <Zap class="w-8 h-8 text-funky shrink-0" />
              <div>
                <h4 class="font-bold text-vamp text-lg">Cepat & Praktis</h4>
                <p class="text-sm text-grayind">
                  Titip - lari - ambil. Nggak ada yang ribet. Semua dibuat se-simple mungkin.
                </p>
              </div>
            </div>
            <div
              class="bg-flash p-6 rounded-2xl border border-grayind shadow-sm hover:border-funky transition-colors flex gap-4"
            >
              <Smile class="w-8 h-8 text-funky shrink-0" />
              <div>
                <h4 class="font-bold text-vamp text-lg">Ramah & Real</h4>
                <p class="text-sm text-grayind">
                  Nggak ada formalitas berlebihan. Kami ngobrol kayak teman lari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-vamp text-flash">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-basement font-semibold text-funky">
            Timeline Kami Mirip Marvel Universe
          </h2>
        </div>

        <div class="relative">
          <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div class="relative group text-center">
              <div
                class="bg-flash/5 border border-flash/10 p-6 rounded-2xl hover:bg-flash/10 transition-colors inline-block w-full max-w-sm"
              >
                <span
                  class="inline-block px-3 py-1 bg-funky text-vamp text-xs font-bold rounded-md mb-3"
                  >15 Agustus 2025</span
                >
                <h3 class="text-xl font-bold text-flash">Ambil MK Desain Web</h3>
              </div>
            </div>

            <div class="relative group text-center">
              <div
                class="bg-flash/5 border border-flash/10 p-6 rounded-2xl hover:bg-flash/10 transition-colors inline-block w-full max-w-sm"
              >
                <span
                  class="inline-block px-3 py-1 bg-funky text-vamp text-xs font-bold rounded-md mb-3"
                  >17 Oktober 2025</span
                >
                <h3 class="text-xl font-bold text-flash">Presentasi Prototype</h3>
              </div>
            </div>

            <div class="relative group text-center">
              <div
                class="bg-flash/5 border border-flash/10 p-6 rounded-2xl hover:bg-flash/10 transition-colors inline-block w-full max-w-sm"
              >
                <span
                  class="inline-block px-3 py-1 bg-funky text-vamp text-xs font-bold rounded-md mb-3"
                  >20 November 2025</span
                >
                <h3 class="text-xl font-bold text-flash">Asistensi Besok Hari Kamis</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-flash-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-basement font-semibold text-vamp mb-4">
            Orang-orang yang ngerjain LAHRINGAN
          </h2>
        </div>

        <div class="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center gap-8">
          <TeamCard v-for="teamsItem in teams" :key="teamsItem.name" :team="teamsItem" />
        </div>
      </div>
    </section>

    <section class="py-20 bg-flash border-t border-grayind">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-10">
          <h2 class="text-3xl font-basement font-bold text-vamp mb-6">
            Kata Orang Harus Punya Visi
          </h2>
          <p class="text-xl font-emone text-grayind italic">
            "Kami nggak cuma ingin jadi tempat penitipan barang. Kami ingin jadi bagian dari
            ekosistem lari di Indonesia."
          </p>
        </div>

        <div class="bg-gray-50 rounded-3xl p-8 border border-grayind">
          <h4
            class="text-lg font-bold text-choco uppercase tracking-widest mb-6 border-b border-grayind pb-4"
          >
            Visi Kami Kalo Kata Direktur:
          </h4>
          <ul class="space-y-4">
            <li v-for="(vision, idx) in visions" :key="idx" class="flex items-start">
              <CheckCircle2 class="w-6 h-6 text-green-500 mr-3 shrink-0" />
              <span class="text-grayind text-md font-garet font-bold">{{ vision }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <section class="bg-funky py-24 relative overflow-hidden">
      <div
        class="absolute inset-0 opacity-10 bg-[radial-gradient(#000_2px,transparent_2px)] bg-size-[16px_16px]"
      ></div>
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 class="text-3xl md:text-5xl font-basement text-vamp font-bold mb-8 leading-tight">
          "Kami sering lari bareng. Kadang cuma 10K, kadang 5K tapi vibesnya mirip FM."
        </h2>
        <RouterLink
          to="/location"
          class="inline-flex items-center bg-vamp text-flash px-10 py-4 rounded-xl font-bold text-lg hover:bg-flash hover:text-vamp transition-all shadow-xl hover:-translate-y-1"
        >
          Langsung Aja Sokin
          <ArrowRight class="w-5 h-5 ml-2" />
        </RouterLink>
      </div>
    </section>

    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Rocket, ShieldCheck, Zap, Smile, CheckCircle2, ArrowRight } from 'lucide-vue-next'
import heroImage from '@/assets/hero/aboutus.jpg'
import ScrollToTop from '../components/ScrollToTop.vue'
import TeamCard from '@/components/TeamCard.vue'
import ceo from '@/assets/team/ceo.png'
import cfo from '@/assets/team/cfo.png'
import cto from '@/assets/team/cto.png'
import coo from '@/assets/team/coo.png'

const visions = [
  'Membuka lebih banyak titik penitipan di kota-kota besar.',
  'Bekerja sama dengan race organizer secara resmi.',
  'Membangun layanan “Runner Hub” kayak ruang aman sebelum & sesudah lari.',
  'Membuat sistem digital titip-ambil biar makin cepat.',
  'Mendukung komunitas lari lewat event, pelatihan, dan kolaborasi.',
]

const teams = ref([
  {
    name: 'Najer',
    role: 'CEO',
    image: ceo,
    pace: '5:59',
    distance: '21K',
    shoe: 'Nike Alphafly 3',
  },
  {
    name: 'Najril',
    role: 'CFO',
    image: cfo,
    pace: '6:25',
    distance: 'FM',
    shoe: 'Hoka Clifton 9',
  },
  {
    name: 'Jeril',
    role: 'CTO',
    image: cto,
    pace: '4:20',
    distance: '10K',
    shoe: 'Adidas Adios Pro 3',
  },
  {
    name: 'Admin Najer',
    role: 'COO',
    image: coo,
    pace: '5:45',
    distance: 'Half M',
    shoe: 'Asics Novablast 4',
  },
])
</script>
