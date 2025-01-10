<template>
  <div class="px-0 2xl:px-24 -mt-24 md:-mt-0"> ">
    <div class="bg-gradient-to-t from-black/60 to-transparent bg-[#00B852] w-[95%] rounded-lg mt-24 mx-auto h-[190px] md:h-[30vh] xl:h-[70vh] relative overflow-hidden">
      <!-- Grid Background Pattern -->
      <img 
        src="/src/assets/img/grid-pattern.png" 
        alt="Grid Pattern"
        class="w-full h-full object-cover"
      />

      <!-- Grouped Dashboard Image - Visible on mobile and tablet, hidden on desktop -->
      <img 
        src="/src/assets/img/groupdash.png" 
        alt="Dashboard Interface"
        class="block xl:hidden absolute bottom-0 right-0 w-[45%] md:w-[45%]"
      />
      
      <!-- Left Top UI - Profile Details -->
      <img 
        src="/src/assets/img/profile-ui.webp" 
        alt="Profile Interface"
        class="absolute w-[450px] hidden xl:block
          xl:top-[-20px] xl:left-[-20px]
          2xl:top-[-40px] 2xl:left-[-40px]"
      />
      
      <!-- Left Bottom UI - Trading View -->
      <img 
        src="/src/assets/img/trading-ui.webp" 
        alt="Trading Interface"
        class="absolute w-[400px] 2xl:w-[450px] hidden xl:block
          xl:bottom-[-96px] xl:left-[48px]
          2xl:bottom-[-28px] 2xl:left-[96px]"
      />

      <!-- Right Bottom UI - Dashboard -->
      <img 
        src="/src/assets/img/dashboard-bottom.webp" 
        alt="Dashboard Interface"
        class="absolute w-[450px] hidden xl:block
          xl:bottom-[-20px] xl:right-[-20px]
          2xl:bottom-[-40px] 2xl:right-[-40px]"
      />
      
      <!-- Content Overlay -->
      <div class="absolute inset-0 flex flex-col justify-center pl-6 md:pl-16 xl:items-center xl:justify-center xl:pl-0">
        <div class="max-w-[200px] md:max-w-none  flex flex-col items-start xl:items-center">
          <h1 class="text-xl md:text-[32px] 2xl:text-5xl font-bold text-white mb-4 md:mb-8 text-left xl:text-center leading-tight">
            Trade with precision,<br> trade with us
          </h1>
          <button class="bg-white w-26 md:w-auto text-[#00B852] px-3  py-1 rounded-md font-extrabold text-[12px] md:text-lg hover:bg-opacity-90 transition-colors duration-300">
  Trade Smarter Today
</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>