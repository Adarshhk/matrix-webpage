<template>
  <div class="w-[95%] mx-auto">
  
  <Hero3/>
  <Community />
  <Testimonial />
  <Plans />
  </div>
  
</template>

<script setup>

import Community from './components/Community.vue';
import Testimonial from './components/Testimonial.vue';
import Plans from './components/Plans.vue';
import { useRoute } from 'vue-router';

import Hero3 from './components/Hero3.vue';


const route = useRoute()



</script>