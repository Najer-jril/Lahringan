<template>
  <article
    class="bg-flash rounded-xl shadow-md overflow-hidden hover:shadow-funky/50 transition-all duration-300 group h-full flex"
    :class="[isFeatured ? 'flex-col md:flex-row' : 'flex-col']"
  >
    <div
      class="relative overflow-hidden shrink-0"
      :class="[isFeatured ? 'w-full md:w-1/2 h-64 md:h-auto' : 'w-full h-56']"
    >
      <div class="absolute top-3 left-3 z-10">
        <span
          class="bg-flash/95 backdrop-blur-md text-vamp text-xs font-bold px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wide border border-gray-100"
        >
          {{ news.category }}
        </span>
      </div>

      <img
        v-if="news.image"
        :src="news.image"
        :alt="news.title"
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div v-else class="w-full h-full flex items-center justify-center bg-funky text-flash">
        <Newspaper class="w-16 h-16 opacity-50" />
      </div>
    </div>

    <div class="p-6 flex flex-col justify-between grow">
      <div>
        <div
          class="flex items-center text-grayind text-xs font-bold mb-3 font-garet uppercase tracking-wider"
        >
          <CalendarDays class="w-3.5 h-3.5 mr-1.5" />
          {{ formattedDate }}
          <span class="mx-2">•</span>
        </div>

        <h3
          class="font-basement text-vamp mb-3 hover:text-funky transition-colors cursor-pointer"
          :class="
            isFeatured ? 'text-2xl md:text-3xl leading-tight' : 'text-xl leading-tight line-clamp-2'
          "
          @click="readMore"
        >
          {{ news.title }}
        </h3>

        <p
          class="font-garet text-gray-600 text-sm mb-4 text-justify leading-relaxed"
          :class="isFeatured ? 'line-clamp-4 md:line-clamp-none' : 'line-clamp-3'"
        >
          {{ news.overview }}
        </p>
      </div>

      <div class="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
        <div v-if="news.author" class="flex items-center text-sm text-gray-600">
          <div
            class="w-8 h-8 rounded-full bg-gray-200 mr-2 flex items-center justify-center overflow-hidden border border-gray-300"
          >
            <User class="w-4 h-4 text-grayind" />
          </div>
          <span class="text-vamp font-bold text-xs">{{ news.author }}</span>
        </div>

        <RouterLink
          :to="`/news/${news.id}`"
          class="inline-flex items-center text-vamp font-bold hover:underline hover:text-funky transition-colors text-sm"
        >
          Baca Selengkapnya
          <ArrowRight class="w-4 h-4 ml-1" />
        </RouterLink>
      </div>
    </div>
  </article>
</template>

<script setup>
import { ArrowRight, CalendarDays, Newspaper, User } from 'lucide-vue-next'
import { computed } from 'vue'

const props = defineProps({
  news: {
    type: Object,
    required: true,
  },
  isFeatured: {
    type: Boolean,
    default: false,
  },
})

const formattedDate = computed(() => {
  if (!props.news.date) return ''
  const date = new Date(props.news.date)
  return date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
})

const emit = defineEmits(['read-more'])

const readMore = () => {
  emit('read-more', props.news.id)
}
</script>
