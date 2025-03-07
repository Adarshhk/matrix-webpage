<template>
   <div class=" px-4 ">

    <div class="max-w-7xl mx-auto mt-16 lg:mt-32 bg-[#1d2125] rounded-md py-24 border border-[#282c30]">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h2 class="text-[27px] md:text-[38px] font-bold text-white mb-4">
          Partner with Trusted Brokers
        </h2>
        <p class="text-[#BBB8B8] text-md md:text-lg max-w-3xl mx-auto">
          Collaborate with experienced brokers who provide the tools, support, and expertise to help you succeed in the market.
        </p>
      </div>
  
      <!-- First Marquee -->
      <Vue3Marquee 
        :duration="20" 
        
        class="mb-4"
      >
        <div v-for="(image, index) in brokerImages" :key="index"
          class=" flex items-center justify-center w-32 md:w-52 h-12 xl:h-16 2xl:h-20 mx-4">
          <img :src="image.src" :alt="image.alt" class="max-h-full max-w-full object-contain" />
        </div>
      </Vue3Marquee>
  
      <!-- Second Marquee (Reverse Direction) -->
      
    </div>
   </div>
   
  </template>
  
  <script setup>
  import { Vue3Marquee } from 'vue3-marquee'
  
  const brokerImages = [
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
  
  <style>
  /* Add any custom styles if needed */
  </style>