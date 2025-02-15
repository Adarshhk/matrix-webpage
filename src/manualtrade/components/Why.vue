<template>
  <div class="mt-16 lg:mt-32">
    <div class="mx-4 md:mx-10">
      <!-- Header Section -->
      <div class="text-center mb-16 w-full">
        <h2 class="text-[28px] md:text-[34px] font-extrabold text-white max-w-md mx-auto">
          Why Choose Us for Manual Trading?
        </h2>
        <p class="text-[#BBB8B8] text-[16px] max-w-xl mx-auto mt-8 font-openSans">
          Matrix empowers your manual trading journey with complete control, real-time insights, and the freedom to craft strategies that match your unique style. Feel confident and supported as you navigate the market on your own terms.
        </p>
      </div>

      <!-- Grid Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 mx-auto">
        <!-- Real-time Market Insights Card -->
        <div :class="[containerClasses, 'group rounded-lg overflow-hidden bg-[#1d2125] transition-all duration-300 hover:scale-[1.02] flex flex-col border border-[#2f2f2f]']">
          <div class="relative overflow-hidden flex-1 bg">
            <img 
              src="/src/assets/img/insights.png" 
              alt="Market insights"
              class="w-full object-cover p-4 mt-6"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1d2125] opacity-95"></div>
            <div class="absolute bottom-2 left-3 right-3 p-3">
              <h3 class="text-lg md:text-xl font-bold text-white mb-1">Real-time Market Insights</h3>
              <p class="text-[#BBB8B8] text-xs md:text-sm mb-0 xl:mb-10 2xl:mb-10 font-openSans">
                Act with confidence and precision as live updates keep you ahead, empowering you to seize every opportunity in real time.
              </p>
            </div>
          </div>
        </div>

        <!-- Ultra-fast Execution Card -->
        <div :class="[containerClasses, 'group rounded-lg overflow-hidden bg-[#1d2125] transition-all duration-300 hover:scale-[1.02] flex flex-col border border-[#2f2f2f]']">
          <div class="relative overflow-hidden flex-1">
            <img 
              src="/src/assets/img/execution.png" 
              alt="Fast execution"
              class="w-full object-cover"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1d2125] opacity-95"></div>
            <div class="absolute bottom-2 left-3 right-3 p-3">
              <h3 class="text-lg md:text-xl font-bold text-white mb-1">Ultra-fast Execution</h3>
              <p class="text-[#BBB8B8] text-xs md:text-sm mb-0 xl:mb-10 2xl:mb-10 font-openSans">
                Every moment matters—swift execution ensures you never miss a chance, putting you in control of every trade.
              </p>
            </div>
          </div>
        </div>

        <!-- Customizable Interface Card -->
        <div :class="[containerClasses, 'group rounded-lg overflow-hidden bg-[#1d2125] transition-all duration-300 hover:scale-[1.02] flex flex-col border border-[#2f2f2f]']">
          <div class="relative overflow-hidden flex-1">
            <img 
              src="/src/assets/img/interfacee.png" 
              alt="Custom interface"
              class="w-full object-cover p-4"
            />
            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1d2125] opacity-95"></div>
            <div class="absolute bottom-2 left-3 right-3 p-3">
              <h3 class="text-lg md:text-xl font-bold text-white mb-1">Customizable Interface</h3>
              <p class="text-[#BBB8B8] text-xs md:text-sm mb-0 xl:mb-16 2xl:mb-10 font-openSans">
                Personalize your workspace to your unique needs, so you can focus on what truly matters, making smart, data-driven decisions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// Global variable for container height (unchanged)
const containerHeight = ref({
  sm: 'h-96',
  md: 'md:h-[300px]',
  lg: 'lg:h-[400px]',
  xl: 'xl:h-[500px]',
  '2xl': '2xl:h-[38rem]'
})

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
  background-image: url('/src/assets/img/Grid.png');
  background-size: contain;
}
</style>