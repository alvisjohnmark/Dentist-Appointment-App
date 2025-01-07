<template>
  <Navigation />
  <slot />
  <Footer />
</template>

<script setup>
import Navigation from "~/components/Navigation.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped></style>
