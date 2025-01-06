<template>
  <nav
    class="container bg-white mx-auto flex justify-between items-center py-4 px-6 shadow-md md:h-32"
  >

    <div class="hidden md:flex space-x-6 text-gray12 font-light">
      <a href="#" class="text-black">Home</a>
      <a href="#" class="text-black">Location</a>
      <a href="#" class="text-black">Services</a>
      <a href="#" class="text-black">About us</a>
    </div>

    <div class="text-center text-black font-light md:text-3xl tracking-wide ">
      EVERWHITE DENTAL CLINIC
    </div>

    <div class="hidden md:flex space-x-6 items-center font-light">
      <button class="bg-green10 text-white px-4 py-2 rounded-md">Contact us</button>
      <button class="bg-cyan8 text-white px-4 py-2 rounded-md">Book now</button>
    </div>

    <button @click="toggleMenu" class="md:hidden focus:outline-none text-black">
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

  <div v-if="isMenuOpen" class="md:hidden bg-indigo3 border-t border-gray-200 z-50">
    <div class="py-4 px-6 space-y-4 text-gray12 font-light">
      <a href="#" class="block text-black">Home</a>
      <a href="#" class="block text-black">Location</a>
      <a href="#" class="block text-black">Services</a>
      <a href="#" class="block text-black">About us</a>
      <a href="#" class="block text-black">Contacts</a>
      <button class="bg-green10 text-white px-4  w-full py-2">Contact us</button>
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
