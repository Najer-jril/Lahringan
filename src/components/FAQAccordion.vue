<template>
  <div class="w-full max-w-3xl mx-auto">
    <div>
      <div
        v-for="(item, index) in items"
        :key="index"
        class="border border-funky rounded-lg overflow-hidden"
      >
        <button
          @click="toggle(index)"
          class="w-full px-6 py-4 text-left bg-choco flex justify-between items-center transition-colors"
        >
          <span class="font-semibold text-flash font-garet">{{ item.question }}</span>
          <ChevronsDown
            class="w-5 h-5 text-flash transition-transform duration-200"
            :class="{ 'rotate-180': activeIndex === index }"
          />
        </button>
        <div
          v-show="activeIndex === index"
          class="px-6 py-4 bg-choco text-flash text-justify border-t border-whi font-garet text-sm font-normal"
        >
          {{ item.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { ChevronsDown } from 'lucide-vue-next'

defineProps({
  items: {
    type: Array,
    required: true,
  },
})

const activeIndex = ref(null)

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>
