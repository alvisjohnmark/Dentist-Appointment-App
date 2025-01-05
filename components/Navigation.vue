<template>
  <nav
    class="container bg-indigo5 mx-auto flex justify-between items-center py-4 px-6 shadow-lg"
  >

    <div class="hidden md:flex space-x-6 text-gray12 font-light">
      <a href="#" class="hover:text-gray-800 hover:scale-105 transition-transform">Home</a>
      <a href="#" class="hover:text-gray-800 hover:scale-105 transition-transform">Location</a>
      <a href="#" class="hover:text-gray-800 hover:scale-105 transition-transform">Services</a>
      <a href="#" class="hover:text-gray-800 hover:scale-105 transition-transform">About us</a>
    </div>

    <div class="text-center text-gray10 font-light md:text-3xl tracking-wide ">
      EVERWHITE DENTAL CLINIC
    </div>

    <div class="hidden md:flex space-x-6 items-center font-light">
      <button class="bg-indigo9 text-white px-4 py-2">Contact us</button>
      <button class="bg-cyan8 text-white px-4 py-2">Book now</button>
    </div>

    <button @click="toggleMenu" class="md:hidden focus:outline-none">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  </nav>

  <div v-if="isMenuOpen" class="md:hidden bg-white border-t border-gray-200 z-50">
    <div class="py-4 px-6 space-y-4 text-gray12 font-light">
      <a href="#" class="block hover:text-gray-800">Home</a>
      <a href="#" class="block hover:text-gray-800">Location</a>
      <a href="#" class="block hover:text-gray-800">Services</a>
      <a href="#" class="block hover:text-gray-800">About us</a>
      <a href="#" class="block hover:text-gray-800">Contacts</a>
      <button class="bg-indigo9 text-white px-4  w-full py-2">Contact us</button>
      <button class="bg-cyan8 text-white w-full px-4 py-2">Book now</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style>
</style>
