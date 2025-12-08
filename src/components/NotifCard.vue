<!-- components/NotifCard.vue -->
<template>
  <div
    v-if="show"
    class="fixed inset-0 z-50 flex items-center justify-center"
  >
    <div
      class="absolute inset-0 bg-black/40 backdrop-blur-sm"
      @click="close"
    ></div>

    <div
      class="relative bg-flash text-choco px-10 py-8 w-xs rounded-2xl shadow-2xl
             flex flex-col items-center gap-4 animate-fadeIn"
    >
      <h2 class="text-xl font-basement font-bold text-center">
        {{ title }}
      </h2>

      <button
        class="px-6 py-2 bg-funky text-choco rounded-lg font-neuepower
               hover:scale-110 active:scale-95 transition"
        @click="close"
      >
        {{ buttonText }}
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: Boolean,
  title: {
    type: String,
    default: 'judul notif',
  },
  buttonText: {
    type: String,
    default: 'close',
  },
})

const emit = defineEmits(["close"])
const close = () => emit("close")
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: scale(.95); }
  to { opacity: 1; transform: scale(1); }
}

.animate-fadeIn {
  animation: fadeIn .25s ease-out;
}
</style>
