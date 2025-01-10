<template>
  <div class="flex justify-center items-center w-full px-4 sm:px-6 md:px-8 lg:px-24  bg-[#161a1e]">
    <div class="relative max-w-[1200px] w-full flex items-center justify-center">
      <!-- Left Arrow - Closer positioning -->
      <div class="absolute -left-2 sm:-left-6 top-0  md:-left-6 lg:-left-8 mt-20 sm:mt-24 md:mt-28 lg:mt-32">
        <img 
          src="/src/assets/svg/growth1.svg" 
          alt="" 
          class="w-16 sm:w-20 md:w-20 lg:w-28"
        >
      </div>

      <!-- Main Quote Container -->
      <div class="max-w-full px-4 sm:px-8 md:px-12 lg:px-16">
        <h2 class="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold">
          <div class="bg-gradient-to-r from-[#00B852] to-[#5BC9F9] bg-clip-text text-transparent inline-flex items-center flex-wrap justify-center gap-1 sm:gap-2 md:gap-3">
            <span>"Imagine executing</span>
            <img src="/src/assets/svg/100.svg" alt="" class="w-6 sm:w-8 md:w-10 lg:w-12 inline-block">
            <span>profitable trades in</span>
            <span>the time</span>
            <img src="/src/assets/svg/10.svg" alt="" class="w-6 sm:w-8 md:w-10 lg:w-12 inline-block">
            <span>it takes others to</span>
            <span>execute one. With our</span>
            <span>platform, that's not just a</span>
            <span>dream</span>
            <img src="/src/assets/svg/clocky.svg" alt="" class="w-6 sm:w-8 md:w-10 lg:w-12 inline-block">
            <span>-it's your new reality"</span>
            <img src="/src/assets/svg/coin1.svg" alt="" class="w-6 sm:w-8 md:w-10 lg:w-12 inline-block">
          </div>
        </h2>
      </div>

      <!-- Right Arrow - Closer positioning -->
      <div class="absolute -right-2 sm:-right-4 md:-right-6 lg:-right-8 mt-12 sm:mt-16 md:mt-20 lg:mt-24">
        <img 
          src="/src/assets/svg/growth1.svg" 
          alt="" 
          class="w-16 sm:w-20 md:w-20 lg:w-28"
          style="transform: rotate(250deg);"
        >
      </div>
    </div>
  </div>

   <!-- Get Started Button -->
   <div class="flex justify-center mt-14 mb-40"> ">
    <button class="btn btn-anim text-[#F3F8F9] text-sm sm:text-base md:text-lg w-2/3 sm:w-1/2 md:w-1/3 max-w-[300px] py-3 sm:py-4 rounded-full bg-[#00B852] hover:bg-[#009944] transition-colors duration-300">
      <div class="content vertical flex justify-center relative overflow-hidden">
        <div class="text">Get Started</div>
        <div class="hover-text">Click Here</div>
      </div>
    </button>
  </div>
</template>

<script setup>
// No additional script needed
</script>
<style scoped>
.content {
  position: relative;
  overflow: hidden;
  text-align: center;
}

.text,
.hover-text {
  transition: transform 300ms cubic-bezier(0.16, 1, 0.3, 1);
}

.vertical .text,
.vertical .hover-text {
  transform: translateY(0%);
}

.hover-text {
  position: absolute;
}

.vertical .hover-text {
  bottom: -100%;
}

button:hover .vertical .hover-text,
button:hover .vertical .text {
  transform: translateY(-100%);
}
</style>