<template>
    <!-- <MouseEffect /> -->
    <Navbar />
    <RouterView />
    <FAQ />
    <Footer />
  </template>
  
  <script setup>
  import { RouterView } from 'vue-router';
  import Navbar from './scalper/src/components/Navbar.vue';
  import FAQ from './component/FAQ.vue';
  import Footer from './component/Footer.vue';
  import Promotion from './component/Promotion.vue';
  import MouseEffect from './component/MouseEffect.vue';
  </script>
  
  <style>
  /* Add these styles to your global CSS */
  body {

    /* Ensure the cursor remains visible */
    cursor: default;
  }
  
  /* Optional: Style for interactive elements */
  a, button {
    position: relative;
    z-index: 1;
  }
  </style>