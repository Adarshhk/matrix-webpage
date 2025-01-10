<template>
    <div class="px-4 py-20 bg-[#161a1e]">
      <div class="mx-auto">
        <!-- Header Section -->
        <div class="text-center mb-16">
          <h2 class="text-[32px] md:text-[38px] 2xl:text-[48px]
 font-bold text-white mb-8">
            Why Investors Choose Us
          </h2>
          <p class="text-gray-400 text-lg max-w-2xl mx-auto">
            Empower your trading journey with confidence. Our platform equips you with insights and tools for financial triumph.
          </p>
        </div>
  
        <!-- Features Section -->
        <div class="flex flex-col md:flex-row justify-between items-center">
          
          <!-- Feature 1 -->
          <div class="flex flex-col items-center w-full md:w-1/3 px-6 relative">
            <div class="flex justify-center mb-6">
              <img :src="clockIcon" alt="" class="w-8 h-8"/>
            </div> 
            <h3 class="text-2xl font-bold text-white text-center mb-4 max-w-[200px]">
              Market Timing Made Easy.
            </h3>
            <span class="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[70%] border-r border-dashed border-gray-600"></span>
          </div>
  
          <!-- Feature 2 -->
          <div class="flex flex-col items-center w-full md:w-1/3 px-6 my-10 md:my-0 relative">
            <div class="flex justify-center mb-6">
              <img :src="shieldIcon" alt="" class="w-8 h-8"/>
            </div>
            <h3 class="text-2xl font-bold text-white text-center mb-4 max-w-[300px]">
              Trusted by thousands of high-frequency traders.
            </h3>
            <span class="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-[1px] h-[70%] border-r border-dashed border-gray-600"></span>
          </div>
  
          <!-- Feature 3 -->
          <div class="flex flex-col items-center w-full md:w-1/3 px-6 relative">
            <div class="flex justify-center mb-6">
              <img :src="gridIcon" alt="" class="w-8 h-8"/>
            </div>
            <h3 class="text-2xl font-bold text-white text-center mb-4 max-w-[300px]">
              Built for scalpers, by traders who understand the game.
            </h3>
          </div>
  
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import clockIcon from '/src/assets/svg/login.svg'
  import shieldIcon from '/src/assets/svg/link.svg'
  import gridIcon from '/src/assets/svg/rocket.svg'
  </script>