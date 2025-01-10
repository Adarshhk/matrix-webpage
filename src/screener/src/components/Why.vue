<template>
  <div class="bg-[#161a1e] py-0 md:py-16">
    <div class="mx-4 md:mx-10">
      <!-- Header Section -->
      <div class="text-center mb-12">
        <h2 class="text-[28px] md:text-[34px] 2xl:text-[42px] font-bold text-white mb-3">
          Why Traders Love Our Screener
        </h2>
        <p class="text-[#BBB8B8] text-[18px] max-w-4xl mx-auto px-0 md:px-40 mb-10 mt-8">
          Our demo trading account can be your "secret weapon" to test out strategies
          and hone your skills with zero risk. Here's how you'll benefit:
        </p>
      </div>

      <!-- Grid Section -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 2xl:gap-8 px-0 2xl:px-16 mx-auto">
        <!-- Filters Card -->
        <div :class="[containerClasses, 'group rounded-lg overflow-hidden bg-[#1d2125] transition-all duration-300 hover:scale-[1.02] flex flex-col border border-[#2f2f2f]']">
          <div class="relative overflow-hidden flex-1">
            <img 
              src="/src/assets/img/filters.png" 
              alt="Filters interface"
              class="w-full object-cover p-4 mt-6"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1d2125] opacity-95"></div>
            <div class="absolute bottom-2 left-3 right-3 p-3">
              <h3 class="text-lg md:text-xl font-bold text-white mb-1">Filters for Every Trader</h3>
              <p class="text-[#BBB8B8] text-xs md:text-sm mb-0 xl:mb-10 2xl:mb-10">Whether you're a beginner or expert, tailor the screener to your needs.</p>
            </div>
          </div>
        </div>

        <!-- Save Time Card -->
        <div :class="[containerClasses, 'group rounded-lg overflow-hidden bg-[#1d2125] transition-all duration-300 hover:scale-[1.02] flex flex-col border border-[#2f2f2f]']">
          <div class="relative overflow-hidden flex-1">
            <img 
              src="/src/assets/img/smarter.png" 
              alt="Trading visualization"
              class="w-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1d2125] opacity-95"></div>
            <div class="absolute bottom-2 left-3 right-3 p-3">
              <h3 class="text-lg md:text-xl font-bold text-white mb-1">Save Time, Trade Smarter</h3>
              <p class="text-[#BBB8B8] text-xs md:text-sm mb-0 xl:mb-10 2xl:mb-10">Quickly identify opportunities without hours of searching.</p>
            </div>
          </div>
        </div>

        <!-- Clarity Card -->
        <div :class="[containerClasses, 'group rounded-lg overflow-hidden bg-[#1d2125] transition-all duration-300 hover:scale-[1.02] flex flex-col border border-[#2f2f2f]']">
          <div class="relative overflow-hidden flex-1">
            <img 
              src="/src/assets/img/clarity.png" 
              alt="Interface clarity"
              class="w-full object-cover p-4"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1d2125] opacity-95"></div>
            <div class="absolute bottom-2 left-3 right-3 p-3">
              <h3 class="text-lg md:text-xl font-bold text-white mb-1">Clarity at Every Step</h3>
              <p class="text-[#BBB8B8] text-xs md:text-sm mb-0 xl:mb-16 2xl:mb-10 ">Intuitive design that makes analysis effortless.</p>
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