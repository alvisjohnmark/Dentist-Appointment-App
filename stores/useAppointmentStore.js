import { defineStore } from "pinia";

export const useAppointmentStore = defineStore("appointment", {
  state: () => ({
    selectedDate: null,
    defaultStatus: "pending",
    slots: [],
    showModal: false,
    modalSlot: "",
    clientDetails: {
      name: "",
      lastName: "",
      email: "",
      address: "",
      zipcode: "",
    },
    calendarAttributes: [
      {
        key: "today",
        dates: new Date(),
        class: "bg-lptxcolorlight text-white",
      },
    ],
  }),

  getters: {
    formattedDate: (state) => (date) => {
      if (!date) return "";
      return new Intl.DateTimeFormat("en-US", { dateStyle: "long" }).format(
        date
      );
    },
    fullAppointmentDateTime(state) {
      if (!state.selectedDate || !state.modalSlot) return "";

      const date = new Date(state.selectedDate);
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(date);

      return `${formattedDate}, ${state.modalSlot}`;
    },
  },

  actions: {
    generateSlots() {
      const times = [
        "8:00 AM",
        "9:00 AM",
        "10:00 AM",
        "11:00 AM",
        "1:00 PM",
        "2:00 PM",
        "3:00 PM",
        "4:00 PM",
        "5:00 PM",
      ];

      this.slots = times.map((time) => ({
        time,
        available: true, // Default to available
      }));
    },

    updateSlots() {
      if (this.selectedDate) {
        this.generateSlots();
      } else {
        this.slots = [];
        console.warn("No date selected");
      }
    },

    async bookSlot(time) {
      this.modalSlot = time;
      this.showModal = true;
    },

    async confirmBooking() {
      if (
        !this.clientDetails.name ||
        !this.clientDetails.lastName ||
        !this.clientDetails.email ||
        !this.clientDetails.address ||
        !this.clientDetails.zipcode
      ) {
        alert("Please fill in all client details.");
        return;
      }

      const { $supabase } = useNuxtApp();

      const { data: existingClient, error: clientError } = await $supabase
        .from("clients")
        .select("id")
        .eq("email", this.clientDetails.email);

      if (clientError) {
        console.error("Error checking if client exists:", clientError);
        return;
      }

      let clientId;
      if (existingClient && existingClient.length > 0) {
        clientId = existingClient[0].id;
      } else {
        const { data: clientData, error: insertError } = await $supabase
          .from("clients")
          .insert([
            {
              name: this.clientDetails.name,
              last_name: this.clientDetails.lastName,
              email: this.clientDetails.email,
              address: this.clientDetails.address,
              zipcode: this.clientDetails.zipcode,
            },
          ])
          .select("id");

        if (insertError) {
          console.error("Error inserting client:", insertError);
          return;
        }

        if (!clientData || !clientData[0].id) {
          console.error("Client insertion failed or ID is missing");
          return;
        }

        clientId = clientData[0].id;
        console.log(clientId);
      }

      const { data: appointmentData, error: appointmentError } = await $supabase
        .from("appointments")
        .insert([
          {
            client_id: clientId,
            date: this.selectedDate,
            time: this.modalSlot,
            status: this.defaultStatus,
          },
        ]);

      this.resetClientDetails();
      this.showModal = false;
    },

    resetClientDetails() {
      this.clientDetails = {
        name: "",
        lastName: "",
        email: "",
      };
    },
  },
});

// // Mark the slot as booked and store the appointment in Supabase
// const slot = this.slots.find((s) => s.time === this.modalSlot);
// if (slot) {
//   slot.available = false;
// }
