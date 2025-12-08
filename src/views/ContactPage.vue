<!-- views/ContactPage.vue -->
<template>
  <div class="contact-page bg-neutral-50">
    <section
      class="relative h-[500px] bg-cover bg-center bg-fixed group"
      :style="{ backgroundImage: `url(${heroImage})` }"
    >
      <div class="absolute inset-0 bg-gray-900/60"></div>

      <div
        class="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center text-center"
      >
        <h1
          class="text-4xl md:text-6xl font-saotorpes text-funky mb-4 drop-shadow-xl animate-fade-in-up"
        >
          Kami siap bantu kamu kapan pun
        </h1>
      </div>
    </section>

    <section class="py-20 bg-choco relative overflow-hidden">
      <div
        class="absolute top-0 right-0 w-96 h-96 bg-funky/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"
      ></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">
          <div class="lg:sticky lg:top-24 self-start flex flex-col h-full">
            <span class="text-funky font-bold tracking-widest uppercase text-xs mb-2 block"
              >Contact Support</span
            >
            <h2
              class="text-3xl md:text-5xl font-basement font-semibold text-funky mb-8 leading-tight"
            >
              Punya pertanyaan tentang layanan kami?
            </h2>
            <h4 class="text-xl font-emone font-normal text-flash mb-10 leading-relaxed">
              Tim kami siap membantu di setiap langkahmu. Entah itu soal loker macet, sepatu
              kekecilan, atau sekadar nanya rute lari enak.
            </h4>

            <div class="space-y-4 mb-12">
              <div
                class="flex items-center p-4 bg-flash/10 border border-flash/10 rounded-2xl hover:bg-flash/20 transition-colors"
              >
                <div
                  class="w-12 h-12 bg-funky rounded-full flex items-center justify-center text-vamp shrink-0 mr-4"
                >
                  <Mail class="w-6 h-6" />
                </div>
                <div>
                  <p class="text-xs text-funky font-bold uppercase">Email Kami</p>
                  <p class="text-flash font-bold text-lg">lahringan@example.com</p>
                </div>
              </div>

              <div
                class="flex items-center p-4 bg-flash/10 border border-flash/10 rounded-2xl hover:bg-flash/20 transition-colors"
              >
                <div
                  class="w-12 h-12 bg-funky rounded-full flex items-center justify-center text-vamp shrink-0 mr-4"
                >
                  <PhoneIcon class="w-6 h-6" />
                </div>
                <div>
                  <p class="text-xs text-funky font-bold uppercase">WhatsApp (Fast Response)</p>
                  <p class="text-flash font-bold text-lg">+628-8000-8080</p>
                </div>
              </div>

              <div
                class="flex items-center p-4 bg-flash/10 border border-flash/10 rounded-2xl hover:bg-flash/20 transition-colors"
              >
                <div
                  class="w-12 h-12 bg-funky rounded-full flex items-center justify-center text-vamp shrink-0 mr-4"
                >
                  <Instagram class="w-6 h-6" />
                </div>
                <div>
                  <p class="text-xs text-funky font-bold uppercase">Instagram</p>
                  <p class="text-flash font-bold text-lg">@lahringan</p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex">
            <ContactForm @sent="handleFormSent" class="w-full" />
          </div>
        </div>
      </div>
    </section>

    <section class="bg-funky py-20 relative overflow-hidden">
      <div
        class="absolute inset-0 opacity-10 bg-[radial-gradient(#000_2px,transparent_2px)] bg-size-[16px_16px]"
      ></div>

      <div class="absolute inset-0 bg-[url('@/assets/pattern.png')] opacity-5"></div>
      <div class="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 class="text-3xl md:text-5xl font-basement text-vamp mb-6 leading-tight">
          Atau Langsung Ke Kantor Pusat Ajah
        </h2>
        <h4 class="text-vamp/90 max-w-2xl text-xl font-emone mx-auto mb-10">
          Sokin ke Cabang Terdekat, gak usah malu-malu.
        </h4>

        <RouterLink
          to="/location"
          class="inline-flex items-center bg-vamp text-flash px-10 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl hover:-translate-y-2 group"
        >
          Cek Lokasi LAHRINGAN
        </RouterLink>
      </div>
    </section>

    <ScrollToTop />

    <NotifCard
      :show="showNotif"
      title="Pesanmu Berhasil Terkirim!"
      buttonText="Oke Sip"
      @close="closeNotif"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Instagram, Mail, PhoneIcon } from 'lucide-vue-next'
import heroImage from '@/assets/hero/cs.jpg'
import ScrollToTop from '@/components/ScrollToTop.vue'
import ContactForm from '@/components/ContactForm.vue'
import NotifCard from '@/components/NotifCard.vue'

const showNotif = ref(false)

const handleFormSent = () => {
  showNotif.value = true
}

const closeNotif = () => {
  showNotif.value = false
}
</script>
