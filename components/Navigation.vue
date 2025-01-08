<template>
  <nav
    class="sticky top-0 container bg-white mx-auto flex justify-between items-center py-4 px-6 shadow-md md:h-32 w-full"
  >
    <div class="hidden md:flex space-x-6 text-gray12 font-light">
      <NuxtLink to="/" class="text-black font-light">Home</NuxtLink>
      <NuxtLink to="/location" class="text-black font-light">Location</NuxtLink>
      <NuxtLink to="/appointments" class="text-black font-light"
        >Appointments</NuxtLink
      >
    </div>

    <div class="text-center text-black font-light md:text-3xl tracking-wide">
      EVERWHITE DENTAL CLINIC
    </div>

    <div class="hidden md:flex space-x-6 items-center font-light">
      <button class="bg-green10 text-white px-4 py-2 rounded-md">
        Contact us
      </button>
      <NuxtLink to="/book" class="bg-cyan8 text-white px-4 py-2 rounded-md"
        >Book now</NuxtLink
      >
    </div>

    <button @click="toggleMenu" class="md:hidden focus:outline-none text-black">
      <Menu />
    </button>
  </nav>

  <!-- Sidebar -->
  <div
    v-if="isMenuOpen"
    class="fixed top-0 right-0 w-3/4 h-full bg-white z-50 overflow-auto md:hidden shadow-md"
  >
    <div class="py-4 px-6 space-y-4 text-gray12 font-light">
      <button
        @click="toggleMenu"
        class="absolute top-4 right-4 text-black focus:outline-none"
      >
        <X />
      </button>
      <NuxtLink to="/" class="block text-black" @click="toggleMenu"
        >Home</NuxtLink
      >
      <NuxtLink to="/location" class="block text-black" @click="toggleMenu"
        >Location</NuxtLink
      >
      <NuxtLink to="/appointments" class="block text-black" @click="toggleMenu"
        >Appointments</NuxtLink
      >
      <button
        class="bg-green10 text-white px-4 w-full py-2"
        @click="toggleMenu"
      >
        Contact us
      </button>
      <button class="bg-cyan8 text-white w-full px-4 py-2" @click="toggleMenu">
        <NuxtLink to="/book">Book now</NuxtLink>
      </button>
    </div>
  </div>

  <div
    v-if="isMenuOpen"
    @click="toggleMenu"
    class="fixed inset-0 bg-black bg-opacity-50 z-40"
  ></div>
</template>

<script setup>
import { X, Menu } from "lucide-vue-next";
import { ref } from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value; // Update the ref value correctly
}
</script>

<style></style>
