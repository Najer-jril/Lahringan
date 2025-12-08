<template>
  <section class="bg-choco rounded-xl shadow-xl m-8">
    <div class="py-10 px-6 mx-auto max-w-3xl text-center">

      <form @submit.prevent="sendSubscribe" class="space-y-6">
        <div class="text-left">
          <label
            for="email"
            class="block mb-2 text-sm font-semibold text-flash"
          >
            Email Kamu
          </label>

          <input
            type="email"
            id="email"
            placeholder="efekrumahkaca@erk.com"
            required
            class="w-full p-3 rounded-lg bg-gray-600/60
                   border border-vamp
                   text-flash
                   focus:ring-funky focus:border-funky
                   transition-colors"
          />
        </div>

        <button
          type="submit"
          class="w-full sm:w-auto py-3 px-6
                 bg-funky text-choco font-neuepower font-semibold
                 rounded-lg shadow-md hover:scale-110 hover:shadow-lg
                 active:scale-95 transition-all duration-200"
        >
          Gaskan Sudah
        </button>

      </form>
    </div>
  </section>
</template>

<script setup>

const emit = defineEmits(["sent"])

const sendSubscribe = () => {
  emit("sent")
};
</script>
