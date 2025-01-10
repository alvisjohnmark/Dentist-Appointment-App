import { useAuthStore } from '~/stores/useAuthStore';

export default defineNuxtRouteMiddleware(async (to, from) => {
  const { $supabase } = useNuxtApp();
  const authStore = useAuthStore();

  // Skip middleware for login route to avoid conflicts
  if (to.path === '/admin/login') {
    return;
  }

  // Check if user is already in the store
  if (authStore.user) {
    return;
  }

  // Fetch session/user from Supabase
  const { data: session } = await $supabase.auth.getSession();

  if (!session || !session.user) {
    return navigateTo('/admin/login');
  }

  // Set user in the store
  authStore.user = session.user;
});
