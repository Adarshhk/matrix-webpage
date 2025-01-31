<template>
  <div class="mt-16 lg:mt-32">
    <div class="mx-4 md:mx-10 ">
      <!-- Header Section -->
      <div class="text-center mb-16 w-full">
        <h2 class="text-[28px] md:text-[34px] font-extrabold text-white max-w-md mx-auto">
          Why Choose Us for Manual Trading?
        </h2>
        <p class="text-[#BBB8B8] text-[16px] max-w-xl mx-auto mt-8 font-openSans ">
          Unlike traditional platforms, we bring unmatched innovation and user-centric features that elevate your trading experience,
        </p>
      </div>

      <!-- Grid Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 mx-auto">
        <!-- Filters Card -->
        <div  :class="[containerClasses, 'group rounded-lg overflow-hidden bg-[#1d2125] transition-all duration-300 hover:scale-[1.02] flex flex-col border border-[#2f2f2f]']">
          <div class="relative overflow-hidden flex-1 bg">
            <img 
              src="/src/assets/img/insights.png" 
              alt="Filters interface"
              class="w-full object-cover p-4 mt-6 "
            />
           
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1d2125] opacity-95"></div>
            <div class=" absolute bottom-2 left-3 right-3 p-3">
              <h3 class="text-lg md:text-xl font-bold text-white mb-1">Real-Time Market Insights</h3>
              <p class="text-[#BBB8B8] text-xs md:text-sm mb-0 xl:mb-10 2xl:mb-10 font-openSans">Get instant access to live market data, price
trends, and actionable insights to stay ahead
in volatile markets.</p>
            </div>
          </div>
        </div>

        <!-- Save Time Card -->
        <div :class="[containerClasses, 'group rounded-lg overflow-hidden bg-[#1d2125] transition-all duration-300 hover:scale-[1.02] flex flex-col border border-[#2f2f2f]']">
          <div class="relative overflow-hidden flex-1">
            <img 
              src="/src/assets/img/execution.png" 
              alt="Trading visualization"
              class="w-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1d2125] opacity-95"></div>
            <div class="absolute bottom-2 left-3 right-3 p-3">
              <h3 class="text-lg md:text-xl font-bold text-white mb-1">Ultra-Fast Execution</h3>
              <p class="text-[#BBB8B8] text-xs md:text-sm mb-0 xl:mb-10 2xl:mb-10 font-openSans">Execute trades in milliseconds, ensuring you
                never miss an opportunity.</p>
            </div>
          </div>
        </div>

        <!-- Clarity Card -->
        <div :class="[containerClasses, 'group rounded-lg overflow-hidden bg-[#1d2125] transition-all duration-300 hover:scale-[1.02] flex flex-col border border-[#2f2f2f]']">
          <div class="relative overflow-hidden flex-1">
            <img 
              src="/src/assets/img/interfacee.png" 
              alt="Interface clarity"
              class="w-full object-cover p-4"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1d2125] opacity-95"></div>
            <div class="absolute bottom-2 left-3 right-3 p-3">
              <h3 class="text-lg md:text-xl font-bold text-white mb-1">Customizable Interface</h3>
              <p class="text-[#BBB8B8] text-xs md:text-sm mb-0 xl:mb-16 2xl:mb-10 font-openSans ">Personalize your dashboard with the tools
and widgets you need to optimize your
trading style.</p>
            </div>
          </div>
        </div>

        

      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Global variable for container height
const containerHeight = ref({
  sm: 'h-96',  // Small screens
  md: 'md:h-[300px]',  // Medium screens
  lg: 'lg:h-[400px]',  // Large screens
  xl: 'xl:h-[500px]',  // Extra large screens
  '2xl': '2xl:h-[38rem]'  // 2XL screens
})

// Computed property to combine height classes
const containerClasses = computed(() => [
  containerHeight.value.sm,
  containerHeight.value.md,
  containerHeight.value.lg,
  containerHeight.value.xl,
  containerHeight.value['2xl']
])
</script>

<style>

.bg {
  background-image
  : url('/src/assets/img/Grid.png');
  background-size: contain;
  
}

</style>