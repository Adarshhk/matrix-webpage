<template>
  <div class="min-h-screen mt-24 font-openSans  overflow-x-hidden ">


    <div class=" py-20 ">
      <div>
        <div class="grid-background hidden lg:block ">
          <img src="/src/assets/img/grid1.png" class="grid-image" alt="">
          <img src="/src/assets/img/grid1.png" class="grid-image" alt="">
        </div>
        <div class="text-white">
          <h1 class="font-bold text-[47px] text-center leading-[60px]">Choose the Plan That Fits Your <br /> Trading
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
    <div class="max-w-[1360px] mx-auto px-4 relative">
      <!-- Matrix Toggle -->
      <div class="absolute left-1/2 -translate-x-1/2 -top-[22px] w-full max-w-fit">
        <div class=" rounded-full p-1 inline-flex">
          <button v-for="plan in ['Matrix ONE', 'Matrix EDGE', 'Matrix ALGO']" :key="plan" :class="[
            'px-6 py-2 font-openSans text-[16px] rounded-full transition-all whitespace-nowrap text-sm md:text-base',
            selectedPlan === plan ? 'bg-[#00B852] text-white' : 'text-gray-400',
          ]" @click="selectedPlan = plan">
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
            <button v-for="period in ['Monthly', 'Quarterly', 'Yearly']" :key="period" :class="[
              'px-4 font-openSans text-[16px]  md:px-6 py-2 rounded-full transition-all whitespace-nowrap text-sm md:text-base min-w-[80px] md:min-w-[100px]',
              billingPeriod === period ? 'bg-[#00B852] text-[#dfdfdf]' : 'text-gray-400',
            ]" @click="billingPeriod = period">
              {{ period }}
            </button>
          </div>
        </div>
        <div class="w-full  flex justify-end">
          <img src="../assets/img/upto-2.png" alt="Save up to 24%" class="w-32 flex md:hidden" />
        </div>
      </div>

      <!-- Matrix ONE Layout -->
      <div v-if="selectedPlan === 'Matrix ONE'" class="mt-12">
        <div class="bg-[#1d2125] rounded-lg p-6 grid grid-cols-1 md:grid-cols-3">
          <!-- Pricing Card -->
          <div>
            <h3 class="text-[#dfdfdf] text-2xl font-bold mb-2">Freebie</h3>
            <p class="text-gray-400 text-[16px] mb-4">
              Ideal for individuals who need quick access to basic features
            </p>

            <div class="bg-[#00693B] rounded-full px-3 py-0.5 inline-block mb-6">
              <span class="text-[#00B852] text-xs">Get 20% off</span>
              <span class="text-[#dfdfdf] text-xs ml-1">when billed annually</span>
            </div>

            <div class="flex items-baseline mb-6">
              <span class="text-4xl font-bold text-[#dfdfdf]">$0</span>
              <span class="text-gray-400 ml-2 text-sm">/ Month</span>
            </div>

            <button class="w-[60%] py-2 rounded-lg mb-8 bg-[#dfdfdf] text-black hover:bg-gray-100 transition-all">
              Buy Now
            </button>
          </div>

          <!-- Feature Lists -->
          <div class="md:border-l border-[#2C2C2C] md:pl-6">
            <h3 class="text-white text-xl font-bold mb-4">
              Features of Matrix Algo
            </h3>
            <ul class="space-y-4 ">
              <li v-for="(feature, i) in features.column1" :key="i" class="flex items-center gap-3">
                <img v-if="feature.active" src="../../assets/svg/cloud-green.svg" alt="Active Icon" class="w-5 h-5" />
                <img v-else src="../../assets/svg/cloud-gray.svg" alt="Inactive Icon" class="w-5 h-5" />
                <span class="text-[16px] font-openSans" :class="feature.active ? 'text-white' : 'text-gray-400'">
                  {{ feature.text }}
                </span>
              </li>
            </ul>
          </div>

          <div class="md:border-l border-[#2C2C2C] md:pl-6">
            <h3 class="text-white text-xl font-bold mb-4">
              Products Included
            </h3>
            <ul class="flex flex-wrap gap-4">
              <li v-for="(feature, i) in features.column2" :key="i" class="">
                <img v-if="i == 0" src="/pricingproduct/Logo 1.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 1" src="/pricingproduct/Logo 2.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 2" src="/pricingproduct/Logo 3.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 3" src="/pricingproduct/Logo 4.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 4" src="/pricingproduct/Logo 5.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 5" src="/pricingproduct/Logo 6.svg" alt="" class="w-16 h-16" />

              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Default Layout for EDGE  -->
      <div v-if="selectedPlan === 'Matrix EDGE'" class="mt-12">
        <div class="bg-[#1d2125] rounded-lg p-6 grid grid-cols-1 md:grid-cols-3">
          <!-- Pricing Card -->
          <div>
            <div>
              <h3 class="text-white text-[20px] font-bold mb-4">
                Features of Matrix Algo
              </h3>
            </div>

            <!-- plan list -->
            <div class="flex flex-col justify-evenly gap-2 mr-2">

              <!-- plan 1 -->

              <div @click="changePlan('indicator' , 0)"
                class="flex justify-between items-center gap-3 rounded border-[#ffffff22] p-2 py-4 border"
                :class="{ 'border-[#dfdfdf]': activePlan.name === 'indicator' }">
                <!-- Radio  and Indicator Section -->
                <div class="flex items-center gap-2">

                  <div class="flex flex-col items-start">
                    <h3 class="text-white text-[20px] font-bold">Indicator</h3>
                    <div class="bg-[#E3DB98] rounded-full px-2">
                      <span class="font-semibold text-xs">50% Off</span>
                    </div>

                  </div>
                </div>
                <!-- Pricing Section -->
                <div class="flex flex-col items-end">
                  <p class="text-[22px] font-bold text-white ">
                    FREE
                  </p>
                  <p class="text-sm font-semibold text-[#BBB8B8] ">In-app Purchase</p>
                </div>

              </div>

              <!-- second item -->
              <div @click="changePlan('signals' , 1000)"
                class="flex justify-between items-center gap-3 rounded border-[#ffffff22] p-2 py-4 border "
                :class="{ 'border-[#dfdfdf]': activePlan.name === 'signals' }">
                <!-- Radio div and Indicator Section -->
                <div class="flex items-center gap-2">

                  <div class="flex flex-col items-start">
                    <h3 class="text-white text-[20px] font-bold">Signals</h3>
                    <div class="bg-[#E3DB98] rounded-full px-2">
                      <span class="font-semibold text-xs">50% Off</span>
                    </div>

                  </div>
                </div>
                <!-- Pricing Section -->
                <div class="flex flex-col items-end">
                  <p class="text-[22px] font-bold text-white ">
                    <span>₹</span>10,740
                  </p>
                  <p class="text-sm font-semibold text-[#BBB8B8] line-through">₹20,000</p>
                </div>
              </div>


              <div @click="changePlan('screener' , 2000)"
                class="flex justify-between items-center gap-3 rounded border-[#ffffff22] p-2 py-4 border"
                :class="{ 'border-[#dfdfdf]': activePlan.name === 'screener' }">
                <!-- Radio div and Indicator Section -->
                <div class="flex items-center gap-2">

                  <div class="flex flex-col items-start">
                    <h3 class="text-white text-[20px] font-bold">Screener</h3>
                    <div class="bg-[#E3DB98] rounded-full px-2">
                      <span class="font-semibold text-xs">50% Off</span>
                    </div>

                  </div>
                </div>
                <!-- Pricing Section -->
                <div class="flex flex-col items-end">
                  <p class="text-[22px] font-bold text-white ">
                    <span>₹</span>10,740
                  </p>
                  <p class="text-sm font-semibold text-[#BBB8B8] line-through">₹20,000</p>
                </div>
              </div>

              <div @click="changePlan('webhook' , 4000)"
                class="flex justify-between items-center gap-3 rounded border-[#ffffff22] p-2 py-4 border"
                :class="{ 'border-[#dfdfdf]': activePlan.name === 'webhook' }">
                <!-- Radio div and Indicator Section -->
                <div class="flex items-center gap-2">

                  <div class="flex flex-col items-start">
                    <h3 class="text-white text-[20px] font-bold">Webhook</h3>
                    <div class="bg-[#E3DB98] rounded-full px-2">
                      <span class="font-semibold text-xs">50% Off</span>
                    </div>

                  </div>
                </div>
                <!-- Pricing Section -->
                <div class="flex flex-col items-end">
                  <p class="text-[22px] font-bold text-white ">
                    <span>₹</span>10,740
                  </p>
                  <p class="text-sm font-semibold text-[#BBB8B8] line-through">₹20,000</p>
                </div>
              </div>

              <button @click="addToCart({name : activePlan.name , price : activePlan.price})"
                class="text-[#272727] font-openSans font-bold bg-[#dfdfdf] rounded border-[#ffffff22] p-2 py-4 border" :class="{'border-[#ff2c30] bg-[#ff2c3022]' : isInCart({name:activePlan.name , price : activePlan.price})}"> 
                
                <p v-if="isInCart({name : activePlan.name , price : activePlan.price})" class="text-[#ff2c30]">Remove From Cart</p>
                <p v-else>+ Add To Cart</p>

              </button>
            </div>


          </div>

          <!-- Feature Lists -->
          <div class="md:border-l border-[#2C2C2C] md:pl-6">
            <h3 class="text-white text-xl font-bold mb-4">
              Features of Matrix Algo
            </h3>
            <ul class="space-y-4 ">
              <li v-for="(feature, i) in features.column1" :key="i" class="flex items-center gap-3">
                <img v-if="feature.active" src="../../assets/svg/cloud-green.svg" alt="Active Icon" class="w-5 h-5" />
                <img v-else src="../../assets/svg/cloud-gray.svg" alt="Inactive Icon" class="w-5 h-5" />
                <span class="text-[16px] font-openSans" :class="feature.active ? 'text-white' : 'text-gray-400'">
                  {{ feature.text }}
                </span>
              </li>
            </ul>
          </div>

          <div class="md:border-l border-[#2C2C2C] md:pl-6">
            <h3 class="text-white text-xl font-bold mb-4">
              Products Included
            </h3>
            <ul class="flex flex-wrap gap-4">
              <li v-for="(feature, i) in features.column2" :key="i" class="">
                <img v-if="i == 0" src="/pricingproduct/Logo 1.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 1" src="/pricingproduct/Logo 2.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 2" src="/pricingproduct/Logo 3.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 3" src="/pricingproduct/Logo 4.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 4" src="/pricingproduct/Logo 5.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 5" src="/pricingproduct/Logo 6.svg" alt="" class="w-16 h-16" />

              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Default Layout for ALGO -->

      <div v-if="selectedPlan === 'Matrix ALGO'" class="mt-12">
        <div class="bg-[#1d2125] rounded-lg p-6 grid grid-cols-1 md:grid-cols-3">
          <!-- Pricing Card -->
          <div>
            <h3 class="text-[#dfdfdf] text-2xl font-bold mb-2">Freebie</h3>
            <p class="text-gray-400 text-[16px] mb-4">
              Ideal for individuals who need quick access to basic features
            </p>

            <div class="bg-[#00693B] rounded-full px-3 py-0.5 inline-block mb-6">
              <span class="text-[#00B852] text-xs">Get 20% off</span>
              <span class="text-[#dfdfdf] text-xs ml-1">when billed annually</span>
            </div>

            <div class="flex items-baseline mb-6">
              <span class="text-4xl font-bold text-[#dfdfdf]">$0</span>
              <span class="text-gray-400 ml-2 text-sm">/ Month</span>
            </div>

            <button class="w-[60%] py-2 rounded-lg mb-8 bg-[#dfdfdf] text-black hover:bg-gray-100 transition-all">
              Buy Now
            </button>
          </div>

          <!-- Feature Lists -->
          <div class="md:border-l border-[#2C2C2C] md:pl-6">
            <h3 class="text-white text-xl font-bold mb-4">
              Features of Matrix Algo
            </h3>
            <ul class="space-y-4 ">
              <li v-for="(feature, i) in features.column1" :key="i" class="flex items-center gap-3">
                <img v-if="feature.active" src="../../assets/svg/cloud-green.svg" alt="Active Icon" class="w-5 h-5" />
                <img v-else src="../../assets/svg/cloud-gray.svg" alt="Inactive Icon" class="w-5 h-5" />
                <span class="text-[16px] font-openSans" :class="feature.active ? 'text-white' : 'text-gray-400'">
                  {{ feature.text }}
                </span>
              </li>
            </ul>
          </div>

          <div class="md:border-l border-[#2C2C2C] md:pl-6">
            <h3 class="text-white text-xl font-bold mb-4">
              Products Included
            </h3>
            <ul class="flex flex-wrap gap-4">
              <li v-for="(feature, i) in features.column2" :key="i" class="">
                <img v-if="i == 0" src="/pricingproduct/Logo 1.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 1" src="/pricingproduct/Logo 2.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 2" src="/pricingproduct/Logo 3.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 3" src="/pricingproduct/Logo 4.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 4" src="/pricingproduct/Logo 5.svg" alt="" class="w-16 h-16" />
                <img v-if="i == 5" src="/pricingproduct/Logo 6.svg" alt="" class="w-16 h-16" />

              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>


  </div>

</template>

<script setup>
import { ref } from "vue";

const selectedPlan = ref("Matrix ONE");
const billingPeriod = ref("Monthly");

const props = defineProps({
  addToCart: Function,
  cart: Array,
  isInCart: Function
})

const activePlan = ref({name : 'indicator' , price : 0});

const changePlan = (name , price) => {
  activePlan.value.name = name;
  activePlan.value.price = price;
}


const features = {
  column1: [
    { text: "20,000+ of PNG & SVG graphics", active: true },
    { text: "Switch or cancel anytime", active: true },
    { text: "Scalable plans for beginners to pros", active: true },
    { text: "Advanced analytics tools", active: false },
    { text: "Custom integrations", active: false },
    { text: "Priority support", active: false },
  ],
  column2: [
    { text: "Real-time market data", active: true },
    { text: "Multi-device sync", active: true },
    { text: "API access", active: true },
    { text: "White-label solutions", active: false },
    { text: "Dedicated account manager", active: false },
    { text: "Custom reporting", active: false },
  ],
};
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
