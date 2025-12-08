<!-- views/NewsDetailPage.vue -->
<template>
  <div class="newsdetail-page bg-flash min-h-screen pb-20">
    <section class="relative h-[500px] w-full">
      <div class="absolute inset-0">
        <img :src="selectedNews.image" alt="Hero Background" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent"></div>
      </div>

      <div
        class="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-end pb-12"
      >
        <span
          class="w-fit bg-funky text-vamp px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-4 shadow-lg"
        >
          {{ selectedNews.category }}
        </span>

        <h1
          class="text-3xl md:text-5xl font-saotorpes text-flash mb-4 leading-tight drop-shadow-lg max-w-4xl"
        >
          {{ selectedNews.title }}
        </h1>

        <div class="flex items-center text-funky text-sm font-garet space-x-6">
          <div class="flex items-center">
            <div
              class="w-8 h-8 rounded-full bg-funky flex items-center justify-center mr-2 border border-rblack"
            >
              <User class="w-4 h-4 text-rblack" />
            </div>
            <span>{{ selectedNews.author }}</span>
          </div>
          <div class="flex items-center">
            <CalendarDays class="w-5 h-5 mr-2 text-funky" />
            {{ formattedDate }}
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
      <div class="gap-10">
        <div class="lg:col-span-2">
          <div class="bg-flash rounded-xl shadow-xl p-8 md:p-12 text-rblack">
            <p class="text-xl font-bold text-vamp mb-6 leading-relaxed">
              {{ selectedNews.overview.split('.')[0] }}.
            </p>

            <div
              class="font-garet text-lg text-gray-700 leading-loose flashspace-pre-line text-justify"
            >
              {{ selectedNews.overview }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
      <div class="bg-flash rounded-xl shadow-lg p-6 border border-gray-200">
        <h3 class="font-saotorpes text-xl text-vamp mb-6 border-b pb-2">Berita Terbaru</h3>

        <div class="flex flex-col gap-6">
          <div v-for="item in newsLain" :key="item.id" class="flex gap-4 group cursor-pointer">
            <RouterLink :to="`/news/${item.id}`" class="flex gap-4 group">
              <div class="w-20 h-20 shrink-0 overflow-hidden rounded-lg bg-gray-200 shadow-sm">
                <img
                  :src="item.image"
                  class="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div>
                <h4 class="font-bold text-sm text-vamp line-clamp-2 group-hover:text-funky transition mb-1">
                  {{ item.title }}
                </h4>
                <span class="text-xs text-choco">
                  {{ formatDate(item.date) }}
                </span>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <ScrollToTop />
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { CalendarDays, User } from 'lucide-vue-next'
import ScrollToTop from '../components/ScrollToTop.vue'
import newsImg from '@/assets/news/newsImg.jpg'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const allNews = [
  {
    id: 1,
    category: 'Event',
    title: 'Lahringan Fun Run 2025 Resmi Dibuka: Ajak Semua Pecinta Lari Nikmati Rute Baru!',
    overview:
      'Fun Run 2025 resmi dibuka! Rutenya baru, vibes-nya lebih segar, dan bakal lewat spot ikonik kota. Cocok buat pemula sampai pelari serius. Jangan sampai ketinggalan!',
    image: newsImg,
    author: 'Admin LAHRINGAN',
    date: '2025-11-11T10:00:00Z',
  },
  {
    id: 2,
    category: 'Produk',
    title: 'Teknologi 3D FitCheck: Cara Baru Pilih Sepatu di Lahringan',
    overview:
      'Kenalan sama 3D FitCheck, cara baru pilih sepatu di Lahringan. Tinggal scan kaki, terus sistem rekomendasiin sepatu yang paling pas. Praktis banget!',
    image: newsImg,
    author: 'Yang Ngoding',
    date: '2025-11-11T10:00:00Z',
  },
  {
    id: 3,
    category: 'Komunitas',
    title: 'Program "Sepatu untuk Semua" Salurkan 320 Pasang Sepatu',
    overview:
      'Program Sepatu untuk Semua sukses nyampein 320 pasang sepatu buat anak sekolah di pelosok Kaltim. Gerak kecil, manfaat besar!',
    image: newsImg,
    author: 'Filantropis',
    date: '2025-11-11T10:00:00Z',
  },
  {
    id: 4,
    category: 'Tips',
    title: '5 Tips Memilih Sepatu Lari yang Tepat untuk Pemula',
    overview:
      'Mau beli sepatu lari? Jangan cuma lihat warna! Ini tips biar kamu nggak salah pilih dan larinya makin nyaman.',
    image: newsImg,
    author: 'Coach Najer',
    date: '2025-11-11T10:00:00Z',
  },
  {
    id: 5,
    category: 'Tips',
    title: 'Cara Mengatur Pernapasan Saat Lari Jarak Jauh',
    overview:
      'Baru lari 1KM tapi udah ngos-ngosan? Coba teknik pernapasan ritmis ini. Trust me, beda banget rasanya!',
    image: newsImg,
    author: 'Coach Najer',
    date: '2025-11-11T10:00:00Z',
  },
  {
    id: 6,
    category: 'Event',
    title: 'Recap: Keseruan Morning Run Batch kesekian di Lapangan Merdeka',
    overview:
      'Morning Run kemaren rame parah! Ratusan pelari memenuhi Lapangan Merdeka minggu lalu. Cek foto-foto keseruannya di sini.',
    image: newsImg,
    author: 'Admin LAHRINGAN',
    date: '2025-11-11T10:00:00Z',
  },
  {
    id: 7,
    category: 'Produk',
    title: 'Review Hoka Clifton 9: Empuk Banget Buat Recovery Run',
    overview:
      'Seminggu nyobain Hoka Clifton 9… dan yes, empuknya beneran serius! Worth it nggak sih? Kita bahas lengkap di sini.',
    image: newsImg,
    author: 'Najerisme',
    date: '2025-11-11T10:00:00Z',
  },
]

const selectedNews = ref(allNews[0])

const loadNewsData = () => {
  const id = parseInt(route.params.id)
  const found = allNews.find((n) => n.id === id)
  if (found) {
    selectedNews.value = found
  } else {
    router.push('/news')
  }
}

const newsLain = computed(() => {
  return allNews.filter((n) => n.id !== selectedNews.value.id).slice(0, 5)
})

const formattedDate = computed(() => formatDate(selectedNews.value.date))

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

watch(
  () => route.params.id,
  () => {
    loadNewsData()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
)

onMounted(() => {
  loadNewsData()
})
</script>
