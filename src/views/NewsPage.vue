<!-- views/NewsPage.vue -->
<template>
  <div class="news-page bg-flash/50">
     <section
      class="relative h-[500px] bg-cover bg-center bg-fixed group"
      :style="{ backgroundImage: `url(${heroImage})` }"
    >
      <div class="absolute inset-0 bg-gray-900/60"></div>

      <div class="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="h-full flex flex-col justify-center items-center text-center">
          <h1
            class="text-4xl md:text-6xl text-center font-saotorpes text-funky mb-6 drop-shadow-lg animate-fade-in-up"
          >
            Tetap Update, Biar Larinya Makin Niat
          </h1>
        </div>
      </div>
    </section>

    <section class="py-16 bg-flash-50 min-h-screen">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-3 w-full">
            <button
              v-for="category in categories"
              :key="category"
              @click="selectedCategory = category"
              class="px-5 py-2 rounded-full text-sm font-bold flashspace-nowrap transition-all border"
              :class="
                selectedCategory === category
                  ? 'bg-funky text-rblack border-funky shadow-lg shadow-funky/20'
                  : 'bg-flash text-grayind border-gray-200 hover:border-funky hover:text-funky'
              "
            >
              {{ category }}
            </button>
          </div>

          <div class="relative w-full md:w-80">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Cari disini..."
              class="w-full pl-10 pr-4 py-2.5 rounded-full border border-grayind focus:border-funky focus:ring-2 focus:ring-funky/20 outline-none transition-all"
            />
            <Search class="absolute left-4 top-4 w-4 h-4 text-gray-400" />
          </div>
        </div>

        <div v-if="displayedNews.length > 0">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            <NewsCard
              v-for="(newsItem, index) in displayedNews"
              :key="newsItem.title"
              :news="newsItem"
              :isFeatured="index === 0 && searchQuery === '' && selectedCategory === 'Semua'"
              :class="{
                'md:col-span-2': index === 0 && searchQuery === '' && selectedCategory === 'Semua',
              }"
              @read-more="handleReadMore"
            />
          </div>

          <div v-if="hasMoreNews" class="text-center pt-8 border-t border-gray-200">
            <button
              @click="loadMore"
              class="group inline-flex items-center px-8 py-3 bg-funky border-2 border-flash text-vamp font-bold rounded-xl hover:bg-vamp hover:text-flash transition-all duration-300"
            >
              <span v-if="isLoading" class="animate-bounce mr-2">sabar boy..</span>
              <span v-else>Kalo Masih Kurang</span>
              <ArrowDown
                v-if="!isLoading"
                class="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform"
              />
            </button>
          </div>
        </div>

        <div v-else class="text-center py-20">
          <div
            class="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <SearchX class="w-10 h-10 text-gray-400" />
          </div>
          <h3 class="text-xl font-bold text-vamp">
            Yah, artikelnya gak ketemu. <br />
            Belum dibikin sama admin ini
          </h3>
          <p class="text-grayind">Coba cari yang umum aja</p>
          <button @click="clearFilter" class="mt-4 text-funky font-bold hover:underline">
            Reset Pencarian
          </button>
        </div>
      </div>
    </section>

    <section class="bg-funky py-20 relative overflow-hidden">
       <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#000_2px,transparent_2px)] bg-size-[16px_16px]"></div>

      <div class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-5xl font-basement text-vamp font-bold mb-6">
          Jangan Ketinggalan Info!
        </h2>
        <p class="text-xl mb-10 text-vamp/80 font-emone max-w-2xl mx-auto">
          Gabung sama 19 Juta pelari lain yang udah dapet tips lari dan info promo duluan.
        </p>

        <div class="max-w-md mx-auto">
          <EmailInput @sent="handleEmailSent" />
        </div>

        <NotifCard
          :show="showNotif"
          title="Mantap! Cek inbox kamu ya."
          buttonText="Siap Ndan"
          @close="closeNotif"
        />
      </div>
    </section>

    <ScrollToTop />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { Search, SearchX, ArrowDown } from 'lucide-vue-next'

import heroImage from '@/assets/hero/news.jpg'
import ScrollToTop from '../components/ScrollToTop.vue'
import NewsCard from '@/components/NewsCard.vue'
import EmailInput from '@/components/EmailInput.vue'
import NotifCard from '@/components/NotifCard.vue'
import newsImg from '@/assets/news/newsImg.jpg'

const router = useRouter()
const showNotif = ref(false)
const isLoading = ref(false)

const searchQuery = ref('')
const selectedCategory = ref('Semua')
const categories = ['Semua', 'Event', 'Produk', 'Komunitas', 'Tips']

const itemsToShow = ref(5)

const baseNews = [
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
    title: 'Program “Sepatu untuk Semua” Salurkan 320 Pasang Sepatu',
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

const news = ref([...baseNews])

const filteredNews = computed(() => {
  return news.value.filter((item) => {
    const matchCategory =
      selectedCategory.value === 'Semua' || item.category === selectedCategory.value

    const matchSearch = item.title.toLowerCase().includes(searchQuery.value.toLowerCase())

    return matchCategory && matchSearch
  })
})

const displayedNews = computed(() => {
  return filteredNews.value.slice(0, itemsToShow.value)
})

const hasMoreNews = computed(() => {
  return displayedNews.value.length < filteredNews.value.length
})

const loadMore = () => {
  isLoading.value = true
  setTimeout(() => {
    itemsToShow.value += 4
    isLoading.value = false
  }, 1500)
}

const clearFilter = () => {
  searchQuery.value = ''
  selectedCategory.value = 'Semua'
}

const handleEmailSent = () => {
  showNotif.value = true
}

const closeNotif = () => {
  showNotif.value = false
}

const handleReadMore = (newsId) => {
router.push(`/news/${newsId}`)
}
</script>
