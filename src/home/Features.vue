<template>
  <div class="mt-16 lg:mt-32">
    <h2 class="text-[27px] md:text-[38px] font-bold text-white text-center mb-16 z-30">
      Our Trusted Brokers
    </h2>
    <div class="flex justify-center">

      <Vue3Marquee :duration="30" :gradient="true" :gradientColor="[22, 26, 30, 1]" class="">
        <div v-for="(image, index) in brokerImages" :key="index"
          class="mx-6">
          <img :src="image.src" :alt="image.alt" class="max-h-full max-w-full object-cover" />
        </div>
      </Vue3Marquee>
    </div>
  </div>
</template>

<script setup>
import { Vue3Marquee } from 'vue3-marquee';
const brokerImages=  [
        { src: '/broker/broker (1).svg', alt: 'Broker 1' },
        { src: '/broker/broker (2).svg', alt: 'Broker 1' },
        { src: '/broker/broker (3).svg', alt: 'Broker 2' },
        
        { src: '/broker/broker (4).svg', alt: 'Broker 3' },
        { src: '/broker/broker (5).svg', alt: 'Broker 4' },
        { src: '/broker/broker (6).svg', alt: 'Broker 5' },
        { src: '/broker/broker (7).svg', alt: 'Broker 6' },
        { src: '/broker/broker (8).svg', alt: 'Broker 6' },
      ]



</script>

<style></style>