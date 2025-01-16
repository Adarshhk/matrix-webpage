<template>
  <div class="mt-16 lg:mt-32">
    <h2 class="text-[27px] md:text-[38px] font-bold text-white text-center mb-16 z-30">
      Our Trusted Brokers
    </h2>
    <div class="flex justify-center">

      <Vue3Marquee :duration="20" :gradient="true" :gradientColor="[22, 26, 30, 1]" class="">
        <div v-for="(image, index) in brokerImages" :key="index"
          class="bg-white rounded-lg p-4 flex items-center justify-center w-52 h-32 mx-4">
          <img :src="image.src" :alt="image.alt" class="max-h-full max-w-full object-contain" />
        </div>
      </Vue3Marquee>
    </div>
  </div>
</template>

<script setup>
import { Vue3Marquee } from 'vue3-marquee';
const brokerImages=  [
        { src: '/src/assets/img/broker/broker (1).png', alt: 'Broker 1' },
        { src: '/src/assets/img/broker/broker (1).webp', alt: 'Broker 1' },
        { src: '/src/assets/img/broker/broker (2).png', alt: 'Broker 2' },
        
        { src: '/src/assets/img/broker/broker (3).png', alt: 'Broker 3' },
        { src: '/src/assets/img/broker/broker (4).png', alt: 'Broker 4' },
        { src: '/src/assets/img/broker/broker (5).png', alt: 'Broker 5' },
        { src: '/src/assets/img/broker/broker (6).png', alt: 'Broker 6' },
      ]



</script>

<style></style>