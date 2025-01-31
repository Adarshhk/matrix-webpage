<template>
  <div class="mt-16 lg:mt-32">
    <h2 class="text-[27px] md:text-[38px] font-extrabold text-white text-center mb-16 z-30">
      Our Trusted Brokers
    </h2>
    <div class="flex justify-center">
      <Vue3Marquee :duration="30" :gradient="true" :gradientColor="[22, 26, 30, 1]" class="w-full">
        <div 
          v-for="(image, index) in brokerImages" 
          :key="index" 
          class="mx-6 relative"
          @mouseenter="image.isHovered = true"
          @mouseleave="image.isHovered = false"
        >
          <img 
            :src="image.defaultSrc" 
            :alt="image.alt"
            class="w-32 object-cover transition-opacity duration-300"
            :class="{ 'opacity-0': image.isHovered }"
          />
          <img 
            :src="image.hoverSrc" 
            :alt="image.alt"
            class="w-32 object-cover transition-opacity duration-300 absolute top-0 left-0"
            :class="{ 'opacity-100': image.isHovered, 'opacity-0': !image.isHovered }"
          />
        </div>
      </Vue3Marquee>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Vue3Marquee } from 'vue3-marquee';

const brokerImages = ref([
  { 
    defaultSrc: '/broker/broker (1).svg', 
    hoverSrc: '/broker/brokeralt (1).svg', 
    alt: 'Broker 1', 
    isHovered: false 
  },
  { 
    defaultSrc: '/broker/broker (2).svg', 
    hoverSrc: '/broker/brokeralt (2).svg', 
    alt: 'Broker 2', 
    isHovered: false 
  },
  { 
    defaultSrc: '/broker/broker (3).svg', 
    hoverSrc: '/broker/brokeralt (3).svg', 
    alt: 'Broker 3', 
    isHovered: false 
  },
  { 
    defaultSrc: '/broker/broker (4).svg', 
    hoverSrc: '/broker/brokeralt (4).svg', 
    alt: 'Broker 4', 
    isHovered: false 
  },
  { 
    defaultSrc: '/broker/broker (5).svg', 
    hoverSrc: '/broker/brokeralt (5).svg', 
    alt: 'Broker 5', 
    isHovered: false 
  },
  { 
    defaultSrc: '/broker/broker (6).svg', 
    hoverSrc: '/broker/brokeralt (6).svg', 
    alt: 'Broker 6', 
    isHovered: false 
  },
  { 
    defaultSrc: '/broker/broker (7).svg', 
    hoverSrc: '/broker/brokeralt (7).svg', 
    alt: 'Broker 7', 
    isHovered: false 
  },
  { 
    defaultSrc: '/broker/broker (8).svg', 
    hoverSrc: '/broker/brokeralt (8).svg', 
    alt: 'Broker 8', 
    isHovered: false 
  },
]);
</script>

<style scoped>

</style>