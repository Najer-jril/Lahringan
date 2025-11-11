<template>
  <header class="bg-choco shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center">
          <RouterLink to="/" class="text-3xl font-basement text-elime"> LAHRINGAN </RouterLink>
        </div>

        <nav class="hidden md:flex space-x-8">
          <RouterLink to="/" v-slot="{ isActive }">
            <span
              :class="[
                'hover:text-elime hover:-translate-y-0.5 transition-all duration-200 font-neuepower cursor-pointer',
                isActive ? 'text-elime underline underline-offset-4' : 'text-flash',
              ]"
            >
              Home
            </span>
          </RouterLink>

          <RouterLink to="/service" v-slot="{ isActive }">
            <span
              :class="[
                'hover:text-elime hover:-translate-y-0.5 transition-all duration-200 font-neuepower cursor-pointer',
                isActive ? 'text-elime underline underline-offset-4' : 'text-flash',
              ]"
            >
              Services
            </span>
          </RouterLink>

          <RouterLink to="/location" v-slot="{ isActive }">
            <span
              :class="[
                'hover:text-elime hover:-translate-y-0.5 transition-all duration-200 font-neuepower cursor-pointer',
                isActive ? 'text-elime underline underline-offset-4' : 'text-flash',
              ]"
            >
              Location
            </span>
          </RouterLink>

          <RouterLink to="/news" v-slot="{ isActive }">
            <span
              :class="[
                'hover:text-elime hover:-translate-y-0.5 transition-all duration-200 font-neuepower cursor-pointer',
                isActive ? 'text-elime underline underline-offset-4' : 'text-flash',
              ]"
            >
              News
            </span>
          </RouterLink>

          <RouterLink to="/about" v-slot="{ isActive }">
            <span
              :class="[
                'hover:text-elime hover:-translate-y-0.5 transition-all duration-200 font-neuepower cursor-pointer',
                isActive ? 'text-elime underline underline-offset-4' : 'text-flash',
              ]"
            >
              About Us
            </span>
          </RouterLink>

          <RouterLink to="/contact" v-slot="{ isActive }">
            <span
              :class="[
                'hover:text-elime hover:-translate-y-0.5 transition-all duration-200 font-neuepower cursor-pointer',
                isActive ? 'text-elime underline underline-offset-4' : 'text-flash',
              ]"
            >
              Contact
            </span>
          </RouterLink>
        </nav>

        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              v-if="!isMobileMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <div v-show="isMobileMenuOpen" class="md:hidden py-4 border-t">
        <nav class="flex flex-col space-y-3">
          <RouterLink
            to="/"
            class="text-flash hover:text-elime transition font-neuepower"
            active-class="text-elime underline underline-offset-4"
            @click="closeMobileMenu"
          >
            Home
          </RouterLink>
          <RouterLink
            to="/about"
            class="text-flash hover:text-elime transition font-neuepower"
            active-class="text-elime underline underline-offset-4"
            @click="closeMobileMenu"
          >
            About
          </RouterLink>
          <RouterLink
            to="/service"
            class="text-flash hover:text-elime transition font-neuepower"
            active-class="text-elime underline underline-offset-4"
            @click="closeMobileMenu"
          >
            Services
          </RouterLink>
          <RouterLink
            to="/location"
            class="text-flash hover:text-elime transition font-neuepower"
            active-class="text-elime underline underline-offset-4"
            @click="closeMobileMenu"
          >
            Location
          </RouterLink>
          <RouterLink
            to="/news"
            class="text-flash hover:text-elime transition font-neuepower"
            active-class="text-elime underline underline-offset-4"
            @click="closeMobileMenu"
          >
            News
          </RouterLink>
          <RouterLink
            to="/contact"
            class="text-flash hover:text-elime transition font-neuepower"
            active-class="text-elime underline underline-offset-4"
            @click="closeMobileMenu"
          >
            Contact
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'AppNavbar',
})

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
</script>
