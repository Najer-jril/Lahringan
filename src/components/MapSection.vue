<template>
  <div class="w-full">
    <div>
      <div class="relative bg-gray-200" :style="{ height: height }">
        <iframe
        class="absolute top-0 left-0 w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d42520.75278603332!2d116.85811365339652!3d-1.2445973275210618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1762916513198!5m2!1sid!2sid"
          frameborder="0"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          aria-hidden="false"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div class="p-6 text-center">
        <button
          @click="openInMaps"
          class="bg-funky text-vamp px-4 py-2 rounded-md text-sm font-garet font-semibold hover:bg-funky focus:outline-none cursor-pointer transition-all duration-300 hover:scale-115"
        >
          Open in Google Maps
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>


defineProps({
  height: {
    type: String,
    default: '400px',
  },
})

const openInMaps = () => {
  const url = `https://maps.google.com`
  window.open(url, '_blank')
}
</script>
