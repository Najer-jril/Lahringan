<!-- components/ContactForm.vue -->
<template>
  <div class="bg-flash p-8 rounded-3xl shadow-xl border border-grayind">
    <h3 class="text-2xl font-basement font-bold text-vamp mb-6">Kirim Pesan</h3>
    <form @submit.prevent="sendForm" class="space-y-6">
      <div>
        <label for="name" class="block mb-2 text-sm font-bold text-vamp font-veritas">Nama Lengkap</label>
        <input
          type="text"
          id="name"
          class="bg-gray-50 border border-grayind text-vamp text-sm rounded-xl focus:ring-funky focus:border-funky block w-full p-3 transition-all"
          placeholder="Nama kamu..."
          required
        />
      </div>

      <div>
        <label for="email" class="block mb-2 text-sm font-bold text-vamp font-veritas">Email</label>
        <input
          type="email"
          id="email"
          class="bg-gray-50 border border-grayind text-vamp text-sm rounded-xl focus:ring-funky focus:border-funky block w-full p-3 transition-all"
          placeholder="email@kamu.com"
          required
        />
      </div>

      <div>
        <label for="message" class="block mb-2 text-sm font-bold text-vamp font-veritas">Pesan / Pertanyaan</label>
        <textarea
          id="message"
          rows="5"
          class="block p-3 w-full text-sm text-vamp bg-gray-50 rounded-xl border border-grayind focus:ring-funky focus:border-funky transition-all"
          placeholder="Tulis uneg-unegmu disini..."
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full py-4 px-5 text-sm font-bold text-vamp bg-funky rounded-xl hover:bg-vamp hover:text-flash transition-all shadow-lg hover:-translate-y-1"
      >
        Kirim Pesanmu
      </button>
    </form>
  </div>
</template>

<script setup>
const emit = defineEmits(['sent'])

const sendForm = () => {
  emit('sent')
}
</script>
