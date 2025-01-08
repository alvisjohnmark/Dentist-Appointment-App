<template>
  <section>
    <main class="container mx-auto py-10">
      <!-- Header Section -->
      <header class="text-center py-8 text-white rounded-md">
        <h1 class="text-4xl font-bold text-black">Book Your Appointment</h1>
        <p class="text-lg mt-2 text-black">
          Choose a date and time for your dental visit with ease.
        </p>
      </header>

      <div class="flex flex-col lg:flex-row gap-10 py-10">
        <!-- VCalendar Section -->
        <div class="lg:w-1/2 bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold  mb-4">
            Select a Date
          </h2>
          <VDatePicker
            expanded
            v-model="appointmentStore.selectedDate"
            class="border rounded-lg shadow-md"
            :min-date="today"
          />
          <button
            @click="appointmentStore.updateSlots"
            class="mt-4 px-6 py-2 text-white bg-indigo10 w-full text-center rounded-md"
          >
            Check Date
          </button>
        </div>

        <!-- Available Slots Section -->
        <div class="lg:w-1/2 bg-white rounded-lg shadow-md p-6">
          <h2 class="text-2xl font-semibold  mb-4">
            Available Slots
          </h2>
          <p
            v-if="appointmentStore.selectedDate"
            class="text-sm text-gray-600 mb-4"
          >
            Showing slots for
            <span class="font-medium">{{
              appointmentStore.formattedDate(appointmentStore.selectedDate)
            }}</span
            >.
          </p>
          <p v-else class="text-sm text-gray-500 mb-4">
            Please select a date to view available slots.
          </p>

          <div
            v-if="appointmentStore.slots.length"
            class="grid grid-cols-3 gap-4"
          >
            <div
              v-for="slot in appointmentStore.slots"
              :key="slot.time"
              class="p-4 border rounded-lg shadow-sm text-center"
              :class="slot.available ? 'bg-green-100' : 'bg-red-100'"
            >
              <p class="font-semibold text-lg">{{ slot.time }}</p>
              <p class="text-sm">
                {{ slot.available ? "Available" : "Booked" }}
              </p>
              <button
                v-if="slot.available"
                @click="appointmentStore.bookSlot(slot.time)"
                class="mt-3 px-4 py-2 text-white rounded-md bg-indigo10"
              >
                Book Now
              </button>
            </div>
          </div>

          <p v-else class="text-gray-500 mt-4 text-center">
            No slots available for this date.
          </p>
        </div>
      </div>

      <!-- Booking Modal -->
      <div
        v-if="appointmentStore.showModal"
        class="fixed inset-0 z-50 bg-black text-white bg-opacity-50 flex items-center justify-center"
      >
        <div class="bg-white rounded-lg shadow-md p-6 w-full max-w-md">
          <h3 class="text-xl font-semibold text-black">Confirm Appointment</h3>
          <p class="text-gray-600 mt-2">
            Fill in your details to confirm booking for
            <span class="font-medium"
              >{{
                appointmentStore.formattedDate(appointmentStore.selectedDate)
              }}, {{ appointmentStore.modalSlot }}</span
            >.
          </p>

          <div class="mt-4 space-y-2 text-black">
            <input
              v-model="appointmentStore.clientDetails.name"
              placeholder="First Name"
              class="w-full px-4 py-2 border rounded-md"
            />
            <input
              v-model="appointmentStore.clientDetails.lastName"
              placeholder="Last Name"
              class="w-full px-4 py-2 border rounded-md"
            />
            <input
              v-model="appointmentStore.clientDetails.email"
              placeholder="Email"
              type="email"
              class="w-full px-4 py-2 border rounded-md"
            />
            <input
              v-model="appointmentStore.clientDetails.address"
              placeholder="Address"
              class="w-full px-4 py-2 border rounded-md"
            />
            <input
              v-model="appointmentStore.clientDetails.zipcode"
              placeholder="Zipcode"
              class="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div class="mt-6 flex justify-end gap-4">
            <button
              @click="appointmentStore.showModal = false"
              class="px-4 py-2 bg-red-600 rounded-md"
            >
              Cancel
            </button>
            <button
              @click="appointmentStore.confirmBooking"
              class="px-4 py-2 bg-indigo10 rounded-md"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </main>
  </section>
</template>

<script setup>
import { useAppointmentStore } from "@/stores/useAppointmentStore";
const appointmentStore = useAppointmentStore();

const today = new Date();
today.setHours(0, 0, 0, 0); // Normalize to midnight
</script>

<style scoped></style>
