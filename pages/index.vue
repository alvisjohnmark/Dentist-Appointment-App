<template>
  <section class="bg-white">
    <Banner />
    <Services />
    <section class="mx-12 text-lg font-light mt-6">
      
      <!-- Enhanced Testimonials Section -->
      <section class=" p-10 rounded-lg">
        <h3 class="text-3xl font-bold text-center mb-8 text-gray-800">What Our Patients Say</h3>
        <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white shadow-lg p-6 rounded-md flex flex-col items-center">
            <img 
              src="https://via.placeholder.com/100" 
              alt="John Doe" 
              class="w-24 h-24 rounded-full mb-4"
            />
            <p class="text-lg italic text-gray-600 text-center">
              "The best dental experience I've ever had! Highly professional and caring staff."
            </p>
            <p class="mt-4 font-semibold text-gray-800">- John D.</p>
          </div>
          <div class="bg-white shadow-lg p-6 rounded-md flex flex-col items-center">
            <img 
              src="https://via.placeholder.com/100" 
              alt="Sarah L." 
              class="w-24 h-24 rounded-full mb-4"
            />
            <p class="text-lg italic text-gray-600 text-center">
              "Dr. Smith and the team are amazing. My teeth feel healthier than ever!"
            </p>
            <p class="mt-4 font-semibold text-gray-800">- Sarah L.</p>
          </div>
          <div class="bg-white shadow-lg p-6 rounded-md flex flex-col items-center">
            <img 
              src="https://via.placeholder.com/100" 
              alt="Emily R." 
              class="w-24 h-24 rounded-full mb-4"
            />
            <p class="text-lg italic text-gray-600 text-center">
              "Highly recommend! They made me feel comfortable and the results are fantastic."
            </p>
            <p class="mt-4 font-semibold text-gray-800">- Emily R.</p>
          </div>
        </div>
      </section>
    </section>
  </section>
</template>



<script setup lang="ts">
import Banner from "~/components/Banner.vue";
import Services from "~/components/Services.vue";
</script>

<style lang="scss" scoped></style>
