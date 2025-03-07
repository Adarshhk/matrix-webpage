<template>

<Social />
  
  <Navbar />
  <MouseEffect />
  <Chatbot />
  
  <div class="max-w-[90%] mx-auto">
    
    <RouterView />

    <FAQ />
    <!-- <Sebi/> -->
    <Footer />
  </div>

</template>

<script setup>
import { RouterView } from 'vue-router';
import Chatbot from './component/Chatbot.vue';
import MouseEffect from './component/MouseEffect.vue';
import Navbar from './component/Navbar.vue';
import Social from './home/Social.vue';
import FAQ from './component/FAQ.vue';
import Sebi from './component/Sebi.vue';
import Footer from './investor/src/components/Footer.vue';

</script>