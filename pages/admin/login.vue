<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
      <h2 class="text-2xl font-semibold text-gray-800 text-center mb-2">
       Sign in to Everwhite Dental Clinic
      </h2>
      <p class="text-sm text-gray-600 text-center mb-6">
        Welcome back! Please sign in to continue
      </p>
      <button
        @click="handleGoogleLogin"
        class="flex items-center justify-center w-full py-2 px-4 bg-gray-100 border border-gray-300 rounded-md text-sm font-medium text-gray-600 hover:bg-gray-200 mb-4"
      >
        <span class="mr-2">
         
        </span>
        Continue with Google
      </button>
      <div class="flex items-center justify-center mb-4">
        <span class="border-t border-gray-300 w-1/5"></span>
        <span class="text-gray-500 text-sm px-2">or</span>
        <span class="border-t border-gray-300 w-1/5"></span>
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-gray-600">
          Email address
        </label>
        <input
          type="email"
          id="email"
          placeholder="Email address"
          class="mt-1 block w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-md text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent"
        />
      </div>
      <button
        class="w-full py-2 px-4 mt-4 bg-indigo9 text-white rounded-md text-sm font-medium hover:bg-gray-900"
      >
        Continue
      </button>
      <p class="text-center text-sm text-gray-500 mt-4">
        Don't have an account? <a href="#" class="text-blue-500">Sign up</a>
      </p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom',
});
import { ref } from 'vue';
import { useAuthStore } from '~/stores/useAuthStore';
import { useRouter } from 'vue-router';

const email = ref('');
const authStore = useAuthStore();
const router = useRouter()

const handleEmailLogin = async () => {
  try {
    await authStore.signInWithEmail(email.value);
  } catch (error) {
    console.error(error);
  }
};

const handleGoogleLogin = async () => {
  try {
    const { $supabase } = useNuxtApp();
    const { data, error } = await $supabase.auth.signInWithOAuth({
      provider: "google",
    });

    if (error) throw error;

    if (data && data.user) {
      authStore.user = data.user;
      router.push("/admin/dashboard"); 
    }
  } catch (error) {
    console.error("Login Error:", error);
  }
};

</script>

<style>
form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 300px;
  margin: auto;
}
</style>
