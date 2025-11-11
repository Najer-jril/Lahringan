<template>
  <footer class="bg-choco text-june">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-4xl font-basement mb-2">Lahringan</h3>
          <p class="text-xl font-neuepower">
            Lari Senang Kalau
            <br />Barang Aman.
          </p>
        </div>

        <!-- link -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Navigasi Cepat</h4>
          <div class="grid grid-cols-2 gap-4">
            <ul class="space-y-2">
              <li>
                <RouterLink to="/" class="text-text-june hover:text-white transition"
                  >Home</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/gallery" class="text-text-june hover:text-white transition"
                  >Gallery</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/service" class="text-text-june hover:text-white transition"
                  >Services</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/location" class="text-text-june hover:text-white transition"
                  >Location</RouterLink
                >
              </li>
            </ul>
            <ul class="space-y-2">
              <li>
                <RouterLink to="/news" class="text-text-june hover:text-white transition"
                  >News</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/contact" class="text-text-june hover:text-white transition"
                  >Contact</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/about" class="text-text-june hover:text-white transition"
                  >About Us</RouterLink
                >
              </li>
              <li>
                <RouterLink to="/faq" class="text-text-june hover:text-white transition"
                  >FAQ</RouterLink
                >
              </li>
            </ul>
          </div>
        </div>

        <!-- sosmed -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Ikuti Kami</h4>
          <ul class="space-y-2">
            <li class="text-text-june">Instagram</li>
            <li class="text-text-june">X</li>
            <li class="text-text-june">Facebook</li>
            <li class="text-text-june">Strava</li>
          </ul>
        </div>

        <!-- Info kontak -->
        <div>
          <h4 class="text-lg font-semibold mb-4">Kontak Kami</h4>
          <ul class="space-y-2 text-text-june text-sm">
            <li>Ruko Golden Boulevard, Ruko Grand City AC20, Batu Ampar, Kota Balikpapan</li>
            <li>+628-8000-8080</li>
            <li>support@lahringan.id</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-8 text-center">
        <p class="text-text-june text-sm">
          &copy; {{ currentYear }} Lahringan. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineOptions({ name: 'AppFooter' })
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
