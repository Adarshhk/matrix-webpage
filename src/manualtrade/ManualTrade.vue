<template>
  
  <Hero id="hero" />
  <Why id="why" />
  <Comparison />
  <Tutorial />

  <Features id="features" />
  <Testimonial/>
</template>

<script setup>
import Features from "./components/Features.vue";
import Hero from "./components/Hero.vue";

import Tutorial from "./components/Tutorial.vue";
import Why from "./components/Why.vue";

import Comparison from "./components/Comparison.vue";
import Testimonial from "./components/Testimonial.vue";
</script>
