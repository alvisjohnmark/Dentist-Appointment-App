import { defineStore } from "pinia";
import { useRouter } from "vue-router";
export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),

  getters: {
    isAuthenticated: (state) => !!state.user,
  },

  actions: {
    async signInWithEmail(email) {
      const { $supabase } = useNuxtApp();
      const { data, error } = await $supabase.auth.signInWithPassword({
        email,
      });
      if (error) throw error;
      this.user = data.user;
      return data;
    },
    
    async signOut() {
      const { $supabase } = useNuxtApp();
      const { error } = await $supabase.auth.signOut();
      if (error) throw error;
      this.user = null;
    },
  },
});
