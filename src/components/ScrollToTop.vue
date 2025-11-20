<template>
  <Transition
    enter-active-class="transition ease-out duration-300"
    enter-from-class="translate-y-2 opacity-0 scale-95"
    enter-to-class="translate-y-0 opacity-100 scale-100"
    leave-active-class="transition ease-in duration-200"
    leave-from-class="translate-y-0 opacity-100 scale-100"
    leave-to-class="translate-y-2 opacity-0 scale-95"
  >
    <button
      v-show="isVisible"
      @click="scrollToTop"
      class="border border-choco fixed bottom-8 right-8 z-40 p-3 bg-vamp text-funky rounded-xl shadow-lg hover:bg-choco focus:outline-none focus:ring-2 focus:ring-choco focus:ring-offset-2 transition-all duration-300 hover:scale-110"
      aria-label="Scroll to top"
    >
      <ArrowUpToLine class="w-6 h-6" />
    </button>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUpToLine } from 'lucide-vue-next'

const props = defineProps({
  threshold: {
    type: Number,
    default: 300,
  },
})

const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.scrollY > props.threshold
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
