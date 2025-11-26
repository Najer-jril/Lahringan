<template>
  <div
    class="bg-whi rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
  >
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div>
        <img :src="service.img" :alt="service.title" class="w-full h-full object-cover rounded-xl" />
      </div>

      <div>
        <h3 class="text-xl font-kilimanjaro text-vamp mb-3">
          {{ service.title }}
        </h3>

        <p class="text-vamp font-garet font-semibold text-justify text-sm mb-4 leading-relaxed">
          {{ service.description }}
        </p>

        <ul v-if="service.features && service.features.length" class="space-y-2">
          <li
            v-for="(feature, index) in service.features"
            :key="index"
            class="flex items-start text-sm text-vamp font-garet font-semibold"
          >
            <span> * {{ feature }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>

defineProps({
  service: {
    type: Object,
    required: true,
  },
})
</script>
