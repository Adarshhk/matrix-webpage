<template>
  <div class="w-[95%] mx-auto">
  <Hero1 v-if="param == 0" />
  <Hero1 v-if="param == 1" />
  <Hero2 v-if="param == 3"/>
  <Hero3 v-if="param == 2"/>
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
import Hero1 from './components/Hero1.vue';
import Hero2 from './components/Hero2.vue';
import Hero3 from './components/Hero3.vue';


const route = useRoute()
const param = route.params.id;


</script>