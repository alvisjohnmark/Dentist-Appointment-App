<template>
  <div>
    <button @click="logout" class="py-2 px-4 bg-red-500 text-white rounded">
      Logout
    </button>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'custom',
});

import { useRouter } from 'vue-router';
import { useAuthStore } from '~/stores/useAuthStore';

const authStore = useAuthStore()
const router = useRouter();

const logout = async () => {
  try {
    await authStore.signOut();
    router.push('/admin/login');
  } catch (error) {
    console.error('Error logging out:', error.message);

  }
};
</script>

<style>
/* Add your styles here */
</style>
