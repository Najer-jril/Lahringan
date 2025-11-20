<template>
  <footer class="bg-choco text-funky font-emone border-t-3 border-funky">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <RouterLink to="/" class="text-3xl font-basement"> LAHRINGAN </RouterLink>
          <p class="text-xl font-neuepower">
            Lari Senang Kalau
            <br />Barang Aman.
          </p>
        </div>

        <!-- link -->
        <div>
          <h4 class="text-lg font-light mb-4">Navigasi Cepat</h4>
          <div class="grid grid-cols-2 gap-4 font-light">
            <ul class="space-y-2">
              <li>
                <RouterLink to="/" class="hover:text-white transition">Home</RouterLink>
              </li>
              <li>
                <RouterLink to="/service" class="hover:text-white transition">Services</RouterLink>
              </li>
              <li>
                <RouterLink to="/location" class="hover:text-white transition">Location</RouterLink>
              </li>
            </ul>
            <ul class="space-y-2">
              <li>
                <RouterLink to="/news" class="hover:text-white transition">News</RouterLink>
              </li>
              <li>
                <RouterLink to="/about" class="hover:text-white transition">About Us</RouterLink>
              </li>
              <li>
                <RouterLink to="/contact" class="hover:text-white transition">Contact</RouterLink>
              </li>
            </ul>
          </div>
        </div>

        <!-- sosmed -->
        <div>
          <h4 class="text-lg font-light mb-4">Ikuti Kami</h4>
          <ul class="space-y-2 font-light">
            <li>
              <a
                href="http://instagram.com/najriiil"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white transition"
                >Instagram</a
              >
            </li>
            <li>
              <a
                href="http://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white transition"
                >X</a
              >
            </li>
            <li>
              <a
                href="http://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white transition"
                >Facebook</a
              >
            </li>
            <li>
              <a
                href="http://strava.com/"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-white transition"
                >Strava</a
              >
            </li>
          </ul>
        </div>

        <!-- Info kontak -->
        <div>
          <h4 class="text-lg font-light mb-4">Kontak Kami</h4>
          <ul class="space-y-2 text-sm font-light">
            <li>Ruko Golden Boulevard, Ruko Grand City AC20, Batu Ampar, Kota Balikpapan</li>
            <li>+628-8000-8080</li>
            <li>support@lahringan.id</li>
          </ul>
        </div>
      </div>

      <div class="border-t border-funky mt-8 pt-8 text-center">
        <p class="text-sm">&copy; {{ currentYear }} Lahringan. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
defineOptions({ name: 'AppFooter' })
import { computed } from 'vue'

const currentYear = computed(() => new Date().getFullYear())
</script>
