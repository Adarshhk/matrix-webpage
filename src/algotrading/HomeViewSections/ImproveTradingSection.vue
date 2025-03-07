<script setup>
import LottieComponent from '../../home/utils/LottieComponent.vue';
import { ref } from 'vue';
import Form from './Form.vue';

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

<template>
  <section class=" mt-16 lg:mt-24">
    <div class="">
      <h1 class=" font-bold text-center text-white text-[31px] xl:text-[38px]">
        Improve the way you trade!
      </h1>
    </div>

    <div class="mt-10 xl:mt-16 grid grid-cols-1 lg:grid-cols-2">
      <div class="flex flex-col items-center space-y-6 md:space-y-10 lg:p-10">
        <ul class="font-openSans font-normal text-[#dfdfdf] text-[16px] xl:text-[20px] space-y-4">
          <li class="flex items-center gap-2 text-[16px]">
            <img src="/images/svg/GreenCloud.svg" alt="" />
            <p class="font-openSans">
              <span class="font-bold font-openSans">Integrate</span>
              with platform across your business
            </p>
          </li>
          <li class="flex items-center gap-2 text-[16px]">
            <img src="/images/svg/GreenCloud.svg" alt="" /> 
            <p class="font-openSans">
              Discover actionable
              <span class=" font-bold font-openSans">strategies</span>
            </p>
          </li>
          <li class="flex items-center gap-2 text-[16px]">
            <img src="/images/svg/GreenCloud.svg" alt="" />
            <p class="font-openSans">
              <span class="font-openSans font-bold"
                >Get insights</span
              >
              of what you achieved today
            </p>
          </li>
        </ul>

        <div class="">
          <!-- <img src="/images/Macbook.png" alt="" class=" w-full xl:w-[90%]" /> -->
          <LottieComponent animationPath="/json/LaptopCounter.json"/>
        </div>

        <!-- <div class=" w-[90%] mx-auto ">
          <Vue3Marquee :duration="30" :gradientColor="[22, 26, 30, 1]" class="w-full">
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
        </div> -->
      </div>

      <div class=" h-full lg:p-10">
        <Form/>
      </div>
    </div>
  </section>
</template>
<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>