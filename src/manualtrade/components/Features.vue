<template>
  <div class="container mx-auto px-4 mt-32">
    <div class="bg-[#00B852] rounded-lg relative overflow-hidden h-[60vh]">
      <!-- Grid Patterns -->
      <div class="absolute inset-0 flex justify-between">
        <div class="w-1/2 md:w-1/3">
          <img 
            src="/src/assets/img/divleft.png" 
            alt="Left Grid Pattern"
            class="w-full h-full object-cover xl:object-contain"
          />
        </div>
        <div class="w-1/2 md:w-1/3">
          <img 
            src="/src/assets/img/divright.png" 
            alt="Right Grid Pattern"
            class="w-full h-full object-cover xl:object-contain"
          />
        </div>
      </div>
      
      <div class="grid lg:grid-cols-2 h-full">
        <!-- Content Section -->
        <div class="flex flex-col justify-center px-4 xl:px-10 xl:ml-10 text-center xl:text-left">
          <h2 class="text-2xl xl:text-4xl font-bold text-white leading-tight">
            Start Trading Smarter with Matrix Trading Tech
          </h2>
          <p class="text-[#F3F8F9] text-base font-openSans mt-4">
            Ready to take control of your trading? Get started with Matrix Trading Tech today and enjoy the freedom of manual trading with all the tools you need in one place.
          </p>
          <button class="relative mx-auto lg:mx-0 bg-white rounded w-full max-w-60 mt-10 py-3 overflow-hidden group">
            <div class="font-bold text-[#00B852]">
              <span class="block group-hover:-translate-y-full transition-transform duration-300">Join Now</span>
              <span class="block absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">Click Here</span>
            </div>
          </button>
        </div>

        <!-- Image Section -->
        <div class="hidden lg:flex items-end justify-end">
          <img src="/src/assets/svg/businessman.svg" alt="Businessman illustration" class="h-full">
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>