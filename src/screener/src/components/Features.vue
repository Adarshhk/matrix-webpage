<template>
  <div class="px-0 2xl:px-24">
    <div
      class="bg-gradient-to-t from-black/60 to-transparent bg-[#00B852] rounded-lg mt-24 mx-auto h-[40vh] md:h-[30vh] xl:h-[55vh] 2xl:h-[60vh] relative overflow-hidden">
      <!-- Grid Pattern Container -->
      <div class="absolute inset-0 flex justify-between">
        <!-- Left Grid Pattern -->
        <div class="w-1/2 md:w-1/3">
          <img src="/src/assets/img/divleft.png" alt="Left Grid Pattern"
            class="w-full h-full object-cover xl:object-contain  opacity-50 md:opacity-100" />
        </div>

        <!-- Right Grid Pattern -->
        <div class="w-1/2 md:w-1/3">
          <img src="/src/assets/img/divright.png" alt="Right Grid Pattern"
            class="w-full h-full object-cover xl:object-contain opacity-50 md:opacity-100" />
        </div>
      </div>

      <!-- Content Overlay -->
      <div class="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1
          class="text-3xl sm:text-4xl md:text-[38px] 2xl:text-5xl font-bold text-white mb-6 md:mb-10 text-center leading-tight px-4">
          Join our Matrix Community
        </h1>
        <p class="text-white text-base sm:text-[18px] mx-4 sm:mx-10 md:mx-36 xl:mx-64 2xl:mx-96 text-center mb-5">
          Be a part of a vibrant community where people live the markets! Engage with like-minded users
          and request features that you want
        </p>
        <button class="bg-white rounded w-60 font-bold text-[#00B852] py-2">
          <div class="content vertical flex justify-center">
            <div class="text">Trade Smarter Today</div>

          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here if needed
</script>