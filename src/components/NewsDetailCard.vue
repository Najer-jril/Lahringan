<template>
  <article
    class="bg-flash rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group flex flex-col h-full border border-gray-100"
  >
    <div class="h-56 relative overflow-hidden shrink-0">
      <div class="absolute top-3 left-3 z-10">
        <span
          class="bg-flash/90 backdrop-blur-md text-vamp text-xs font-bold px-3 py-1 rounded-full shadow-sm uppercase tracking-wide"
        >
          {{ news.category }}
        </span>
      </div>

      <img
        v-if="news.image"
        :src="news.image"
        :alt="news.title"
        class="w-full h-full object-cover"
      />
      <div v-else class="w-full h-full flex items-center justify-center bg-funky text-flash">
        <Newspaper class="w-16 h-16 opacity-50" />
      </div>
    </div>

    <div class="p-6 flex flex-col grow">
      <div class="flex items-center text-rblack text-sm font-garet mb-3 space-x-2">
        <div class="flex items-center">
          <CalendarDays class="w-3.5 h-3.5 mr-1.5" />
          {{ formattedDate }}
        </div>
        <span>•</span>
        <div v-if="news.author" class="flex items-center">
          <User class="w-3.5 h-3.5 mr-1.5" />
          <span class="line-clamp-1">{{ news.author }}</span>
        </div>
      </div>

      <!-- judul -->
      <h3 class="text-2xl font-basement text-vamp mb-3 line-clamp-2 leading-tight">
        {{ news.title }}
      </h3>

      <p class="font-garet text-rblack text-md mb-6 text-justify">
        {{ news.overview }}
      </p>
    </div>
  </article>
</template>

<script setup>
import { CalendarDays, Newspaper, User } from 'lucide-vue-next'
import { computed } from 'vue'

const props = defineProps({
  news: {
    type: Object,
    required: true,
  },
})

const formattedDate = computed(() => {
  if (!props.news.date) return ''
  const date = new Date(props.news.date)
  return date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
})
</script>
