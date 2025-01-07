<template>
  <section class="h-screen p-12">
    <h2 class="text-xl font-semibold mb-8">
      Today's Appointments: {{ currentDate }}
    </h2>
    <table class="table-auto border-collapse w-full text-left mb-12">
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
  </section>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const currentDate = ref("");

const now = new Date();
currentDate.value = now.toLocaleDateString();
</script>



<style></style>
