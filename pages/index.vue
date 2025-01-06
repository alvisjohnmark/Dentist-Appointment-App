<template>
  <section class="bg-white">
    <Navigation />
    <Banner />
    <section class="mx-12 text-lg font-light mt-6 h-screen">
      <h1>Date: {{ currentDate }}</h1>
      <div class="md:flex justify-around items-start mt-6">
        <!-- Table for appointments -->
        <div class="w-1/2">
          <h2 class="text-xl font-semibold mb-4">Today's Appointments</h2>
          <table class="table-auto border-collapse w-full text-left">
            <thead>
              <tr>
                <th class="border px-4 py-2 bg-white">Time</th>
                <th class="border px-4 py-2 bg-white">Name</th>
                <th class="border px-4 py-2 bg-white">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border px-4 py-2 bg-white">9:00 AM</td>
                <td class="border px-4 py-2 bg-white">John Doe</td>
                <td class="border px-4 py-2 bg-white">Adjustment</td>
              </tr>
              <tr>
                <td class="border px-4 py-2 bg-white">11:00 AM</td>
                <td class="border px-4 py-2 bg-white">Jane Smith</td>
                <td class="border px-4 py-2 bg-white">Extraction</td>
              </tr>
              <tr>
                <td class="border px-4 py-2 bg-white">2:00 PM</td>
                <td class="border px-4 py-2 bg-white">Alice Johnson</td>
                <td class="border px-4 py-2 bg-white">Adjustment</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Calendar -->
        <div class="w-1/3">
          <h2 class="text-xl font-semibold mb-4">Calendar</h2>
          <VCalendar expanded />
        </div>
      </div>
    </section>
  </section>
  <Footerr />
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import Banner from "~/components/Banner.vue";
import Footerr from "~/components/Footer.vue";
import Navigation from "~/components/Navigation.vue";

const currentDate = ref("");

onMounted(() => {
  const now = new Date();
  currentDate.value = now.toLocaleString();
});



</script>

<style lang="scss" scoped></style>
