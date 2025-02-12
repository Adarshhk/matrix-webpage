<template>
  <div class="min-h-screen mt-24 font-openSans  overflow-x-hidden ">


    <Breadcrumb :items="[{
      title: 'Home',
      disabled: false,
      href: '/'
    },
    {
      title: 'Pricing',
      disabled: false,
      href: '/pricing'
    },
    ]" />

    <div class=" py-20 ">


      <div>
        <div class="grid-background hidden lg:block ">
          <img src="/src/assets/img/grid1.png" class="grid-image" alt="">
          <img src="/src/assets/img/grid1.png" class="grid-image" alt="">
        </div>
        <div class="text-white">
          <h1 class="font-extrabold text-[47px] text-center leading-[60px]">Choose the Plan That Fits Your <br />
            Trading
            Goals</h1>


          <div class="flex items-center justify-center gap-4 mt-4 ">
            <div class="flex gap-1 items-center">
              <img src="/src/assets/svg/check.svg" alt="" class="w-6 h-6">
              <p class="font-openSans text-[16px] text-[#dfdfdf]">Reach us 24x7</p>
            </div>
            <div class="flex gap-1 items-center">
              <img src="/src/assets/svg/check.svg" alt="" class="w-6 h-6">
              <p class="font-openSans text-[16px] text-[#dfdfdf]">Mix plans</p>
            </div>
            <div class="flex gap-1 items-center">
              <img src="/src/assets/svg/check.svg" alt="" class="w-6 h-6">
              <p class="font-openSans text-[16px] text-[#dfdfdf]">15-day free trial</p>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-[1360px] mx-auto lg:px-4 relative">
      <!-- Matrix Toggle -->
      <div class="absolute left-1/2 -translate-x-1/2 -top-[22px] w-full max-w-fit">
        <div class=" rounded-full p-1 inline-flex">
          <button v-for="plan in ['Matrix ONE', 'Matrix EDGE', 'Matrix ALGO']" :key="plan" :class="[
            'px-6 py-2 font-openSans text-[16px] rounded-full transition-all whitespace-nowrap text-sm md:text-base',
            selectedPlan === plan ? 'bg-[#00B852] text-white' : 'text-gray-400',
          ]" @click="changeActive(plan)">
            {{ plan }}
          </button>
        </div>
      </div>

      <!-- Header Section -->
      <div class="pt-16">
        <div class="flex justify-between items-start">
          <!-- <img src="/src/assets/img/matrix-one.png" alt="Matrix Logo" class="h-8 md:h-12" /> -->
          <!-- <img src="../../assets/svg/savemore.svg" alt="Save up to 24%" class="w-24 md:w-36 hidden md:flex" /> -->
        </div>

        <div class="flex flex-col md:flex-row justify-between items-center gap-6 mt-8">

          <img v-if="selectedPlan === 'Matrix ONE'" src="/src/assets/img/matrix-one.png" alt="Matrix Logo"
            class="h-8 md:h-12" />
          <img v-if="selectedPlan === 'Matrix ALGO'" src="/src/assets/img/ALGO.png" alt="Matrix Logo"
            class="h-8 md:h-12" />
          <img v-if="selectedPlan === 'Matrix EDGE'" src="/src/assets/img/EDGE.png" alt="Matrix Logo"
            class="h-8 md:h-12" />

          <div class="bg-[#1d2125] rounded-full p-1.5 inline-flex">
            <button v-for="period in ['Monthly' , 'Quarterly', 'Yearly']" :key="period" :class="[
              'px-4 font-openSans text-[16px]  md:px-6 py-2 rounded-full transition-all whitespace-nowrap text-sm md:text-base min-w-[80px] md:min-w-[100px]',
              billingPeriod === period ? 'bg-[#00B852] text-[#dfdfdf]' : 'text-gray-400',
            ]" @click="billingPeriod = period">
              {{ period }}
            </button>
          </div>
        </div>
        
      </div>

      <!-- Matrix ONE Layout -->
      <div v-if="selectedPlan === 'Matrix ONE'" class="mt-12">
        <MatrixOne/>
      </div>

      <!-- Default Layout for EDGE  -->
      <div v-if="selectedPlan === 'Matrix EDGE'" class="mt-12 ">
        <MatrixEdge/>
      </div>

      <!-- Default Layout for ALGO -->

      <div v-if="selectedPlan === 'Matrix ALGO'" class="mt-12 ">
        <MatrixAlgo/>
      </div>
    </div>


  </div>

</template>

<script setup>
import { ref } from "vue";

import Breadcrumb from '/src/component/Breadcrumb.vue'

import usePricingStore from "../../store/pricing";
import MatrixOne from "../MatrixOne.vue";
import MatrixEdge from "../MatrixEdge.vue";
import MatrixAlgo from "../MatrixAlgo.vue";
import { storeToRefs } from "pinia";


const selectedPlan = ref("Matrix ONE");
const billingPeriod = ref("Quarterly");
const pricingStore = usePricingStore();
const {activePlan , algoPricing , edgePricing} = storeToRefs(pricingStore);

const changeActive = (plan) => {

  selectedPlan.value = plan

  if (selectedPlan.value === 'Matrix ALGO') {
    activePlan.value = algoPricing.value[0];
  }
  else activePlan.value = edgePricing.value[0];
}
</script>

<style>
.grid-background {
  display: none;
  /* Default: hide the grid on all screen sizes */
}

@media (min-width: 1024px) {

  /* Tailwind's lg breakpoint */
  .grid-background {
    display: flex;
    /* Show the grid only on large screens */
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    justify-content: space-between;
    pointer-events: none;
    /* Ensures the grid does not block interactions */
    z-index: -1;
    /* Sends the grid to the background */
  }

  .grid-image {
    width: 26rem;
    object-fit: contain;
    opacity: 1;
    /* Adjust opacity to make it less intrusive */
  }
}

@font-face {
  font-family: "Proxima Nova";
  src: url("/path-to-your-font/proximanova-regular.woff2") format("woff2");
}

.font-proxima-nova {
  font-family: "Proxima Nova", sans-serif;
}

body {
  overflow-x: hidden;
}

.min-h-screen {
  overflow-x: hidden;
}

/* Add padding for mobile scrolling */
@media (max-width: 768px) {
  .max-w-[1360px] {
    padding-left: 16px;
    padding-right: 16px;
  }

  /* Add gap between cards on mobile */
  .grid-cols-1>div {
    margin-bottom: 16px;
  }

  /* Remove hover effect on mobile */
  .hover\:scale-105 {
    transform: none !important;
    transition: none !important;
  }



  /* Fix scrolling container on mobile */
  .overflow-y-auto {
    max-height: none;
    overflow: visible;
    padding: 0;
  }
}

/* Maintain hover effects only on desktop */
@media (min-width: 769px) {
  .transition-transform:hover {
    transform: scale(1.05);
  }
}

.transition-all {
  transition: all 0.3s ease;
}

.overflow-y-auto {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.overflow-y-auto::-webkit-scrollbar {
  display: none;
}

/* Add smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Improve card spacing */
.grid-cols-1>div,
.sm\:grid-cols-2>div,
.lg\:grid-cols-4>div {
  margin-bottom: 24px;
}

/* Add better touch targets on mobile */
@media (max-width: 640px) {

  .px-4,
  .py-2 {
    padding: 12px 16px;
  }

  /* Improve spacing between sections */
  .mt-12 {
    margin-top: 2rem;
  }

  /* Better spacing for feature lists */
  .space-y-4>* {
    margin-bottom: 1rem;
  }
}
</style>
