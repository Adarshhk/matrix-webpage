<template>
  <!-- <Social/> -->
  
  <Navbar />
  <MouseEffect />

  <div class="max-w-[1280px] mx-auto">
    <RouterView />
    <FAQ />
    <Sebi/>
    <Footer />
  </div>

</template>

<script setup>
import { RouterView } from 'vue-router';
import FAQ from './component/FAQ.vue';


import MouseEffect from './component/MouseEffect.vue';
import Footer from './investor/src/components/Footer.vue';
import Navbar from './component/Navbar.vue';
import Social from './home/Social.vue';
import LottieComponent from './home/utils/LottieComponent.vue';
import Test from './Test.vue';
import Sebi from './component/Sebi.vue';
import TechText from './component/TechText.vue';


</script>

<style>
/* Add these styles to your global CSS */
body {

  /* Ensure the cursor remains visible */
  cursor: default;
}

/* Optional: Style for interactive elements */
a,
button {
  position: relative;
  z-index: 1;
}
</style>