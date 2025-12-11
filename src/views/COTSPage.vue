<template>
  <div class="about-page bg-neutral-50">
    <section
      class="relative h-[500px] bg-cover bg-center bg-fixed"
      :style="{ backgroundImage: `url(${ceo})` }"
    >
      <div class="absolute inset-0 bg-gray-900/60"></div>

      <div
        class="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center"
      >
        <h1
          class="text-4xl md:text-6xl font-saotorpes text-funky mb-6 drop-shadow-xl animate-fade-in-up"
        >
          TUGAS COTS
        </h1>
      </div>
    </section>

    <section class="py-20 bg-flash relative">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2
              class="text-3xl md:text-4xl font-basement font-semibold text-choco mb-6 leading-tight"
            >
              Muhammad Nazril Ilham
            </h2>
            <div class="flex items-center text-sm font-medium text-grayind mb-8 overflow-x-auto flashspace-nowrap">
              <span class="text-choco font-bold">11231059</span>
              <ChevronRight class="w-4 h-4 mx-2 text-choco" />
              <span class="text-choco font-bold">INFORMATIKA</span>
              <ChevronRight class="w-4 h-4 mx-2 text-choco" />
              <span class="text-choco font-bold">ITK</span>
            </div>
            <p class="text-lg md:text-xl font-emone font-normal text-vamp leading-relaxed">
              Mahasiswa Informatika semester 5 yang lagi ngerjain tugas COTS Mahasiswa Informatika
              semester 5 yang lagi ngerjain tugas COTS Mahasiswa Informatika semester 5 yang lagi
              ngerjain tugas COTS Mahasiswa Informatika semester 5 yang lagi ngerjain tugas COTS
              Mahasiswa Informatika semester 5 yang lagi ngerjain tugas COTS Mahasiswa Informatika
              semester 5 yang lagi ngerjain tugas COTS Mahasiswa Informatika semester 5 yang lagi
              ngerjain tugas COTS Mahasiswa Informatika semester 5 yang lagi ngerjain tugas COTS
              Mahasiswa Informatika semester 5 yang lagi ngerjain tugas COTS
            </p>
          </div>

          <div class="hidden md:flex mt-48">
            <div class="relative">
            <div
              class="absolute inset-0 bg-choco rounded-3xl rotate-3 transform translate-x-2 translate-y-2"
            ></div>
            <img
              :src="ceo"
              class="relative rounded-3xl shadow-xl transition-all duration-500 w-full h-[500px] object-cover"
              alt="Founder Story"
            />
          </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-vamp text-flash">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-basement font-semibold text-funky">
            SKILL SKIL GWE
          </h2>
        </div>

        <div class="relative">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="relative group text-center">
              <div
                class="bg-flash/5 border border-flash/10 p-6 rounded-2xl hover:bg-flash/10 transition-colors inline-block w-full min-h-"
              >
                <span
                  class="inline-block px-3 py-1 bg-funky text-vamp text-xs font-bold rounded-md mb-3"
                  >SKILL 1</span
                >
                <h3 class="text-xl font-bold text-flash">
                  Dapat Mengerjakan Tugas Tepat Waktu (tapi harus begadang)
                </h3>
              </div>
            </div>

            <div class="relative group text-center">
              <div
                class="bg-flash/5 border border-flash/10 p-6 rounded-2xl hover:bg-flash/10 transition-colors inline-block w-full min-h-"
              >
                <span
                  class="inline-block px-3 py-1 bg-funky text-vamp text-xs font-bold rounded-md mb-3"
                  >SKILL 2</span
                >
                <h3 class="text-xl font-bold text-flash">HTML, CSS, JS, VUE</h3>
              </div>
            </div>

            <div class="relative group text-center">
              <div
                class="bg-flash/5 border border-flash/10 p-6 rounded-2xl hover:bg-flash/10 transition-colors inline-block w-full min-h-"
              >
                <span
                  class="inline-block px-3 py-1 bg-funky text-vamp text-xs font-bold rounded-md mb-3"
                  >SKILL 3</span
                >
                <h3 class="text-xl font-bold text-flash">Skill Presentasi H-2</h3>
              </div>
            </div>

            <div class="relative group text-center">
              <div
                class="bg-flash/5 border border-flash/10 p-6 rounded-2xl hover:bg-flash/10 transition-colors inline-block w-full min-h-"
              >
                <span
                  class="inline-block px-3 py-1 bg-funky text-vamp text-xs font-bold rounded-md mb-3"
                  >SKILL 4</span
                >
                <h3 class="text-xl font-bold text-flash">Hidden Skill</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <ScrollToTop />
  </div>
</template>

<script setup>
import { ChevronRight } from 'lucide-vue-next'
import ScrollToTop from '../components/ScrollToTop.vue'
import ceo from '@/assets/team/ceo.png'
</script>
