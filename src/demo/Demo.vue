<template >
  <div class="mt-24 mx-auto w-[95%]">

    <Hero id="hero"/>
    <Why id="why"/>
    <Features id="features"/>
    <Media id="media"/>
    <Tutorial/>
    <Testimonial/>
    <Plans/>
  </div>
</template>

<script setup>

import Features from './components/Features.vue';
import Hero from './components/Hero.vue';
import Media from './components/Media.vue';

import Tutorial from './components/Tutorial.vue';
import Why from './components/Why.vue';

import Testimonial from './components/Testimonial.vue';
import Plans from './components/Plans.vue';


</script>