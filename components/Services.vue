<template>
  <div
    class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 p-8 mx-6 rounded-lg"
  >
    <div
      v-for="(card, index) in services"
      :key="index"
      class="flex flex-col justify-between border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white overflow-hidden group"
    >

      <!-- Content -->
      <div class="flex items-start space-x-4">
        <!-- Iconify Icon -->
        <div
          class="w-14 h-14 flex items-center justify-center text-primary-600 bg-primary-50 rounded-full shadow-md"
        >
          <Icon :icon="card.icon" class="w-7 h-7" />
        </div>
        <div>
          <h3
            class="text-lg font-semibold text-gray-800 group-hover:text-primary-600 transition-colors duration-300"
          >
            {{ card.title }}
          </h3>
          <p class="text-gray-600 mt-1 text-sm">
            {{ card.description }}
          </p>
        </div>
      </div>

      <!-- Action Link -->
      <div class=" mt-4">
        <a
          href="#"
          class="text-sm text-primary-600 font-medium hover:underline inline-flex items-center group-hover:text-primary-700"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const services = [
  {
    icon: "mdi-tooth-outline", // Dental checkup icon
    title: "Dental Checkup",
    description:
      "Routine exams to keep your teeth healthy and detect issues early.",
  },
  {
    icon: "mdi-toothbrush-paste", // Teeth cleaning icon
    title: "Teeth Cleaning",
    description:
      "Professional cleaning to remove plaque and leave your smile sparkling.",
  },
  {
    icon: "mdi-tooth-cog-outline", // Fillings and repairs icon
    title: "Fillings & Repairs",
    description:
      "Fix cavities and damaged teeth with durable, aesthetic fillings.",
  },
  {
    icon: "mdi-tooth-plus-outline", // Implants icon
    title: "Dental Implants",
    description:
      "Restore missing teeth with strong and natural-looking implants.",
  },
];
</script>

<style scoped>
.text-primary-600 {
  color: #3b82f6; /* Customize to your primary color */
}

.text-primary-700 {
  color: #2563eb; /* Darker shade for hover state */
}

.bg-primary-50 {
  background-color: #eff6ff; /* Light background for the icon container */
}

.group:hover .text-primary-600 {
  color: #2563eb; /* Darker shade for hover interaction */
}
</style>
